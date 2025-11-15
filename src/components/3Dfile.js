import React, { useRef, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Center, useGLTF, Environment, Bounds, useBounds } from "@react-three/drei";
import * as THREE from "three";


// global mouse position for rotation function
function useGlobalMouse() {
  const mouseRef = useRef({ x: 0, y: 0 });
  useEffect(() => {
    function onMove(e) {
      const x = (e.clientX / window.innerWidth) * 2 - 1;  // [-1, 1]
      const y = -(e.clientY / window.innerHeight) * 2 + 1;  // [-1, 1]
      mouseRef.current.x = x;
      mouseRef.current.y = y;
    }

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);

  }, []);
  return mouseRef;
}

// mouse follower function for given 3d model
function Follower({ url }) {
  
  const group = useRef();
  const bobGroup = useRef();
  const { scene } = useGLTF(url);
  const mouse = useGlobalMouse();

  // boundary constants
  const BOUND_LEFT = .6;
  const BOUND_RIGHT = .8;
  const BOUND_TOP = .5;
  const BOUND_BOTTOM = 1;
  const FOLLOW_DAMP = 0.1;  // lower value = slower follow

  // rotation constants
  const X_ROT = 0.35 * 1;
  const Y_ROT = 0.25 * 1;

  // bobbing constants
  const BOB_AMP_Y = 0.1;
  const BOB_AMP_X = 0.0;
  const BOB_SPEED = 1;
  useFrame((state) => {
    if (!group.current || !bobGroup.current) return;

    const { x, y } = mouse.current;

    // sensitivity
    const targetX = x * 0.8;
    const targetY = y * 0.6;

    group.current.position.y -= .01;

    group.current.position.x += (targetX - group.current.position.x) * FOLLOW_DAMP;
    group.current.position.y += (targetY - group.current.position.y) * FOLLOW_DAMP;

    group.current.position.x = THREE.MathUtils.clamp(group.current.position.x, -BOUND_LEFT, BOUND_RIGHT);
    group.current.position.y = THREE.MathUtils.clamp(group.current.position.y, -BOUND_BOTTOM, BOUND_TOP);

    group.current.rotation.y = (x * Math.PI * X_ROT) + (Math.PI/1.2); // rotation offset
    group.current.rotation.x = -y * Math.PI * Y_ROT;

    // bobbing function
    const t = state.clock.getElapsedTime();
    bobGroup.current.position.y = Math.sin(t * BOB_SPEED) * BOB_AMP_Y;
    bobGroup.current.position.x = Math.sin(t * (BOB_SPEED * 0.5)) * BOB_AMP_X;
  });

  return (
    <Center fit>
      <group ref={bobGroup}>
        <primitive ref={group} object={scene} />
      </group>
    </Center>
  );
}

// Only resize on window resize
function RefitOnResize() {
  const api = useBounds();
  const { size } = useThree();

  useEffect(() => {
    const id = requestAnimationFrame(() => {
      api.refresh().fit();
    });
    return () => cancelAnimationFrame(id);
  }, [size.width, size.height, api]);

  return null;
}

export default function Header3D() {
  return (
    <div className="r3f-wrap" style={{ width: "100%", height: "60vh", minHeight: 420 }}>
      <Canvas camera={{ position: [0, 0.8, 2], fov: 45, near: 0.01, far: 1000 }} dpr={[1, 2]}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 3, 4]} intensity={0.9} />

        <Bounds fit observe={false} margin={1.15}>
          <RefitOnResize />
          <Follower url="/model.glb" />
        </Bounds>

        <Environment preset="city" />
      </Canvas>
    </div>
  );
}