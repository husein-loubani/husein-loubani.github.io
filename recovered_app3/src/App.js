import React, { Suspense, lazy, useEffect, useState, useMemo } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BiCodeAlt } from 'react-icons/bi';
import { GlobalStyle } from './components/ui/Theme';
import Header from './components/Header/Header';
import { COLORS } from './components/ui/Theme';

// Lazy load non-critical components
const WorkExperience = lazy(() => import('./components/WorkExperience/WorkExperience'));
const Projects = lazy(() => import('./components/Projects/Projects'));
const RunningBanner = lazy(() => import('./components/ui/RunningBanner'));
const Console = lazy(() => import('./components/Console/Console'));
const QuantumBackground = lazy(() => import('./components/ui/QuantumBackground'));

// Animation keyframes for performance-optimized UI effects
const animations = {
  glow: keyframes`
    0%, 100% { filter: drop-shadow(0 0 8px ${COLORS.hivePrimary}40); }
    50% { filter: drop-shadow(0 0 12px ${COLORS.hivePrimary}70); }
  `,
  
  breathe: keyframes`
    0%, 45%, 55%, 100% { opacity: 0.3; }
    50% { opacity: 0.5; }
  `
};

/**
 * Main application container 
 * Handles overall layout structure and applies background effects
 */
const AppContainer = styled.div`
  position: relative;
  background-color: ${COLORS.hiveDarkBg};
  min-height: 100vh;
  
  /* Vignette background effect with radial gradient */
  &:after {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(
        circle at center,
        ${COLORS.hiveDarkAccent} 0%,
        ${COLORS.hiveDarkBg} 80%
      );
    z-index: 0;
    pointer-events: none;
    transition: all 1.5s ease-in-out;
  }
  
  /* Footer styling with grid overlay */
  footer {
    background: ${COLORS.appleDark};
    color: ${COLORS.white};
    padding: 1.5rem;
    text-align: center;
    position: relative;
    font-size: 0.9rem;
    overflow: hidden;
    z-index: 30;
    
    /* Grid pattern overlay */
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        linear-gradient(${COLORS.white}08 1px, transparent 1px),
        linear-gradient(90deg, ${COLORS.white}08 1px, transparent 1px);
      background-size: 20px 20px;
      z-index: 0;
    }
    
    p {
      position: relative;
      z-index: 1;
    }
    
    a {
      color: ${COLORS.hivePrimary};
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;


/**
 * Main App component
 * Handles scroll-based animations and overall page structure
 * Uses memoization to prevent unnecessary re-renders
 */
const App = React.memo(function App() {
  // State for tracking screen size with optimized resize listener
  const [isMobile, setIsMobile] = useState(false);
  
  // Check for mobile devices with debounced resize handler
  useEffect(() => {
    // Optimized resize handler with RAF for performance
    let frameRequest = null;
    const debouncedResize = () => {
      if (frameRequest) {
        cancelAnimationFrame(frameRequest);
      }
      
      frameRequest = requestAnimationFrame(() => {
        setIsMobile(window.innerWidth <= 768);
      });
    };
    
    // Initial check
    debouncedResize();
    
    // Add listener with passive flag for better scroll performance
    window.addEventListener('resize', debouncedResize, { passive: true });
    
    // Cleanup all listeners and pending operations
    return () => {
      window.removeEventListener('resize', debouncedResize);
      if (frameRequest) {
        cancelAnimationFrame(frameRequest);
      }
    };
  }, []);
  
  // Get scroll progress for scroll-based animations
  const { scrollYProgress } = useScroll();
  
  // Create scroll-based animations directly (no useMemo wrapper)
  // Optimized color transition effect
  const backgroundGradientRotate = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [
      'hue-rotate(0deg) brightness(1)',
      'hue-rotate(5deg) brightness(1.05)',
      'hue-rotate(10deg) brightness(1.1)',
      'hue-rotate(15deg) brightness(1.05)',
      'hue-rotate(0deg) brightness(1)'
    ]
  );
  
  // Optimized scaling effect
  const backgroundScale = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [1, 1.05, 1.1, 1.05, 1]
  );
  
  // Optimized vignette intensity
  const vignetteIntensity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    [0.5, 0.6, 0.7, 0.5]
  );
  
  // Memoized placeholder component to avoid recreation
  const LoadingPlaceholder = useMemo(() => () => (
    <div style={{ 
      width: '100%',
      height: '100%',
      backgroundColor: COLORS.hiveDarkBg,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      opacity: 0 // Invisible placeholder
    }} />
  ), []);

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        
        {/* animated background layer */}
        <Suspense fallback={<LoadingPlaceholder />}>
          <QuantumBackground />
        </Suspense>
        
        {/* Dynamic color layer - responds to scroll position with optimized rendering */}
        <motion.div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `
              linear-gradient(217deg, rgba(49, 130, 206, 0.15), rgba(49, 130, 206, 0) 70.71%),
              linear-gradient(127deg, rgba(229, 62, 62, 0.15), rgba(229, 62, 62, 0) 70.71%),
              linear-gradient(336deg, rgba(253, 238, 33, 0.18), rgba(253, 238, 33, 0) 70.71%)
            `,
            backgroundSize: '200% 200%',
            filter: backgroundGradientRotate,
            scale: backgroundScale,
            transformOrigin: 'center',
            zIndex: 0,
            pointerEvents: 'none',
            willChange: 'filter, transform', // Performance optimization
            backfaceVisibility: 'hidden', // Prevents flickering on some browsers
            WebkitBackfaceVisibility: 'hidden'
          }}
          aria-hidden="true"
        />
        
        {/* Vignette overlay with optimized composite properties */}
        <motion.div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            boxShadow: 'inset 0 0 150px 60px rgba(0, 0, 0, 0.8)',
            opacity: vignetteIntensity,
            zIndex: 2,
            pointerEvents: 'none',
            mixBlendMode: 'multiply',
            willChange: 'opacity', 
            transform: 'translateZ(0)' // Forces GPU acceleration
          }}
          aria-hidden="true"
        />
        
        {/* Main content container with proper semantic structure */}
        <main style={{ position: 'relative', zIndex: 20 }}>
          <Header />
          
          <article id="experience">
            <Suspense fallback={<LoadingPlaceholder />}>
              <WorkExperience />
            </Suspense>
          </article>
          
          <article id="projects">
            <Suspense fallback={<LoadingPlaceholder />}>
              <Projects />
            </Suspense>
          </article>
          
          {/* Personal interests banner - only visible on desktop */}
          {!isMobile && (
            <section 
              style={{ padding: 0, marginTop: '-1rem', marginBottom: '-2rem' }}
              aria-label="Personal interests"
            >
              <Suspense fallback={<LoadingPlaceholder />}>
                <RunningBanner 
                  items={[
                    { text: "Cooking", blink: true, icon: <BiCodeAlt /> },
                    { text: "Programming", blink: false, icon: <BiCodeAlt /> },
                    { text: "Piano", blink: true, icon: <BiCodeAlt /> },
                    { text: "Guitar", blink: false, icon: <BiCodeAlt /> },
                    { text: "Reading", blink: true, icon: <BiCodeAlt /> },
                    { text: "Timchi", blink: false, icon: <BiCodeAlt /> },
                    { text: "Bouldering", blink: true, icon: <BiCodeAlt /> },
                    { text: "Golf", blink: false, icon: <BiCodeAlt /> },
                    { text: "Padel", blink: true, icon: <BiCodeAlt /> },
                  ]}
                />
              </Suspense>
            </section>
          )}

          {/* Only render console on non-mobile devices */}
          {!isMobile && (
            <section id="console">
              <Suspense fallback={<LoadingPlaceholder />}>
                <Console />
              </Suspense>
            </section>
          )}
        </main>
        
        <footer>
          <p itemScope itemType="http://schema.org/Person">
            &copy; {new Date().getFullYear()} 
            <span itemProp="name"> Tim Loehr</span> · Made with 
            <span style={{ color: COLORS.retroPrimary }}> Machine Loehrning</span>
          </p>
        </footer>
      </AppContainer>
    </>
  );
});

export default App;