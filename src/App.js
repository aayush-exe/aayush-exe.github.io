
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Projects } from "./components/ProjectsNew";
import { ProfessionalWork } from "./components/ProfessionalWork";
import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Banner />
        <AboutMe />
        <ProfessionalWork />
        <Projects />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
