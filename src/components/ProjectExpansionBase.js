import React from 'react';

/**
 * Reusable link style component for consistent styling across all project descriptions
 * Usage: <LinkStyle href="your-url">Link Text</LinkStyle>
 */
export const LinkStyle = ({ href, children }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="project-link"
    style={{ 
      color: '#4c956c', 
      textDecoration: 'none', 
      fontWeight: '600', 
      borderBottom: '2px solid #4c956c', 
      transition: 'all 0.2s ease' 
    }} 
    onMouseEnter={(e) => { 
      e.target.style.color = '#2c6e49'; 
      e.target.style.borderBottomColor = '#2c6e49'; 
    }} 
    onMouseLeave={(e) => { 
      e.target.style.color = '#4c956c'; 
      e.target.style.borderBottomColor = '#4c956c'; 
    }}
  >
    {children}
  </a>
);

/**
 * Base component for project expansion panels
 * Provides standardized structure with customizable content
 */
export const ProjectExpansionBase = ({ 
  arrowPosition = 50,
  title,
  badges = [],
  paragraphs = [],
  mediaItems = [],
  gridColumns = '1.5fr 1fr'
}) => {
  return (
    <div style={{ position: 'relative', paddingTop: '20px', paddingBottom: '15px', overflow: 'visible' }}>
      {/* Arrow pointing up - CSS triangle with white border */}
      <div style={{
        position: 'absolute',
        top: '0px',
        left: `${arrowPosition}%`,
        transform: 'translateX(-50%)',
        zIndex: 10
      }}>
        {/* White border triangle */}
        <div style={{
          width: 0,
          height: 0,
          borderLeft: '28px solid transparent',
          borderRight: '28px solid transparent',
          borderBottom: '28px solid white',
          position: 'relative',
          filter: 'drop-shadow(0 0 1px white)',
          borderRadius: '8px'
        }}>
          {/* Inner cream triangle */}
          <div style={{
            width: 0,
            height: 0,
            borderLeft: '23px solid transparent',
            borderRight: '23px solid transparent',
            borderBottom: '23px solid #fffdf9',
            position: 'absolute',
            top: '5px',
            left: '50%',
            transform: 'translateX(-50%)',
            borderRadius: '3px'
          }}></div>
        </div>
      </div>
      
      <div
        className="wow zoomIn"
        style={{
          background: '#fffdf9',
          border: '4px solid white',
          borderRadius: '19px',
          padding: '20px',
          margin: 0,
          position: 'relative',
          boxShadow: '0 4px 20px rgba(44, 36, 22, 0.08)',
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        {/* Title */}
        <h3 style={{ 
          fontSize: '36px', 
          fontWeight: '700',
          color: '#2c2416',
          marginBottom: '12px', 
          textAlign: 'center' 
        }}>
          {title}
        </h3>
        
        {/* Badges */}
        {badges.length > 0 && (
          <div className="d-flex gap-2 flex-wrap mb-3 justify-content-center">
            {badges.map((badge, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: '11px',
                  padding: '4px 10px',
                  background: '#f5f1e8',
                  border: '1px solid rgba(44, 36, 22, 0.15)',
                  borderRadius: '12px',
                  color: '#5a5040',
                  fontWeight: '500'
                }}
              >
                {badge.text}
              </span>
            ))}
          </div>
        )}

        <div 
          className="project-expansion-grid"
          style={{ 
            display: 'grid', 
            gridTemplateColumns: gridColumns, 
            gap: '30px', 
            alignItems: 'start',
            width: '100%'
          }}
        >
          {/* Left side - Text content */}
          <div style={{ minWidth: 0, width: '100%' }}> 
            {paragraphs.map((text, idx) => (
              <p 
                key={idx}
                style={{ 
                  fontSize: '14px', 
                  lineHeight: '1.6',
                  color: '#5a5040',
                  margin: idx === paragraphs.length - 1 ? '0 !important' : '0 0 14px 0 !important', 
                  textAlign: 'left', 
                  padding: 0, 
                  width: '100%' 
                }}
              >
                {text}
              </p>
            ))}
          </div>

          {/* Right side - Media collage */}
          <div 
            className="project-media-container"
            style={{ 
              position: 'relative', 
              minWidth: 0,
              width: '100%',
              height: 'auto',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-start'
            }}
          >
            {mediaItems.map((item, idx) => {
              if (item.type === 'image') {
                return (
                  <img 
                    key={idx}
                    src={item.src} 
                    alt={item.alt || `Media ${idx + 1}`}
                    style={{
                      position: item.top !== '0' && item.top ? 'absolute' : 'relative',
                      top: item.top || '0',
                      left: item.left || (item.top !== '0' && item.top ? '50%' : 'auto'),
                      transform: item.left ? 'none' : (item.top !== '0' && item.top ? 'translateX(-50%)' : 'none'),
                      width: item.width || '100%',
                      height: item.height || '180px',
                      maxWidth: item.maxWidth || 'none',
                      maxHeight: item.maxHeight || 'none',
                      objectFit: item.objectFit || 'cover',
                      borderRadius: '12px',
                      border: '3px solid white',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                      zIndex: mediaItems.length - idx
                    }}
                  />
                );
              } else if (item.type === 'video') {
                return (
                  <div 
                    key={idx}
                    style={{
                      position: 'absolute',
                      top: item.top || '0',
                      left: item.left || '50%',
                      transform: item.left ? 'none' : 'translateX(-50%)',
                      width: item.width || '100%',
                      height: item.height || '240px',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      border: '3px solid white',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                      zIndex: mediaItems.length - idx
                    }}
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      src={item.src}
                      title={item.title || `Video ${idx + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ display: 'block' }}
                    />
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
