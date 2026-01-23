import { createGlobalStyle } from 'styled-components';

// Modern, elegant color palette for data visualization and UI design
export const COLORS = {
  // Primary data-inspired colors
  primary: '#4361EE',       // Primary blue
  secondary: '#4CC9F0',     // Secondary cyan
  accent: '#F72585',        // Accent pink
  
  // Retro-themed accent colors
  retroPrimary: '#FDEE21',   // Bright yellow
  retroSecondary: '#F8BB00', // Amber
  retroTertiary: '#FF5722',  // Orange-red
  retroDarkBg: '#0F0F0F',    // Dark background
  retroDarkAccent: '#1E1E1E', // Slightly lighter dark accent
  
  // digital palette
  synthPink: '#FF41A6',    // Digital pink
  synthPurple: '#9B5DE5',  // Digital purple
  synthBlue: '#2CA8FF',    // Digital blue
  synthTeal: '#00F5D0',    // Digital teal
  synthGrid: '#FF41A620',  // Grid color with transparency

  // Data visualization palette
  dataBlue: '#4361EE',      // Primary data blue
  dataCyan: '#4CC9F0',      // Secondary data cyan
  dataPink: '#F72585',      // Accent data pink
  dataIndigo: '#3A0CA3',    // Deep indigo for emphasis
  dataViolet: '#7209B7',    // Violet for visual hierarchy
  dataBackground: '#F8F9FA', // Light background
  dataDark: '#111827',      // Dark background
  dataGray: '#4B5563',      // Text gray
  
  // Dark interface colors
  appleDark: '#1D1D1F',     // Dark interface
  appleLight: '#F5F5F7',    // Light interface
  appleGray: '#86868B',     // Interface gray
  appleBlue: '#0066CC',     // Interface blue
  
  // Social interface colors
  metaBlue: '#1877F2',      
  metaLightBlue: '#0668E1',
  
  // Modern design palette
  hipsterTeal: '#2A9D8F',
  hipsterCream: '#F8F9FB',
  hipsterBlue: '#457B9D',
  hipsterMint: '#DEF2F1',
  hipsterSlate: '#526D82',
  hipsterOrange: '#F7884F',
  hipsterGreen: '#4CAF50',
  hipsterRust: '#D95204',
  
  // Data visualization colors
  vizGreen: '#4CAF50',
  vizOrange: '#FF9800',
  vizPurple: '#9C27B0',
  vizRed: '#F44336',
  vizYellow: '#FFEB3B',
  vizBlue: '#2196F3',
  
  // Grayscale
  white: '#FFFFFF',
  offWhite: '#F8F9FA',
  lightGray: '#E9ECEF',
  gray: '#6B7280',
  darkGray: '#374151',
  charcoal: '#1F2937',
  black: '#000000',
  
  // Backgrounds and gradients
  darkBg: '#111827',        // Modern dark background
  mediumBg: '#1F2937',      // Medium background
  lightBg: '#F9FAFB',       // Light background
  subtleGradient: 'linear-gradient(90deg, #4361EE, #4CC9F0)',
  modernGradient: 'linear-gradient(135deg, #4361EE, #7209B7)',
  dataGradient: 'linear-gradient(135deg, #4361EE, #3A0CA3)',
  accentGradient: 'linear-gradient(135deg, #F72585, #7209B7)',
  glassGradient: 'linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
};

export const FONTS = {
  primary: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",       // Modern clean UI font
  secondary: "'Plus Jakarta Sans', 'SF Pro Text', -apple-system, BlinkMacSystemFont, sans-serif", // Contemporary sans
  modern: "'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif",                 // Modern system font
  mono: "'JetBrains Mono', 'SF Mono', monospace",                                           // Modern code font
  display: "'Fraunces', 'Playfair Display', serif",                                         // Contemporary serif
  accent: "'Space Grotesk', sans-serif",                                                     // Modern tech font
  data: "'Söhne', 'Helvetica Neue', sans-serif",                                            // Data visualization style
  title: "'Cabinet Grotesk', 'SF Pro Display', sans-serif",                                 // Contemporary title font
  special: "'Mona Sans', 'SF Pro Display', sans-serif",                                     // Special modern font
};

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&family=Space+Grotesk:wght@400;500;600&family=Fraunces:wght@400;500;600;700&display=swap');
  
  :root {
    --primary: ${COLORS.primary};
    --secondary: ${COLORS.secondary};
    --accent: ${COLORS.accent};
    --metaBlue: ${COLORS.metaBlue};
    --metaLightBlue: ${COLORS.metaLightBlue};
    --appleDark: ${COLORS.appleDark};
    --appleLight: ${COLORS.appleLight};
    --appleGray: ${COLORS.appleGray};
    --appleBlue: ${COLORS.appleBlue};
    --hipsterOrange: ${COLORS.hipsterOrange};
    --hipsterGreen: ${COLORS.hipsterGreen};
    --hipsterRust: ${COLORS.hipsterRust};
    --hipsterTeal: ${COLORS.hipsterTeal};
    --hipsterCream: ${COLORS.hipsterCream};
    --darkBg: ${COLORS.darkBg};
    --mediumBg: ${COLORS.mediumBg};
    --lightBg: ${COLORS.lightBg};
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${FONTS.primary};
    background-color: ${COLORS.retroDarkBg};
    color: ${COLORS.white};
    overflow-x: hidden;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /* Subtle data grid pattern */
    background-image: 
      linear-gradient(to right, ${COLORS.retroPrimary}05 1px, transparent 1px),
      linear-gradient(to bottom, ${COLORS.retroPrimary}05 1px, transparent 1px);
    background-size: 20px 20px;
    background-position: center;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${FONTS.title};
    font-weight: 500;
    letter-spacing: -0.5px;
    line-height: 1.3;
    color: ${COLORS.dataDark};
  }

  /* Modern section titles with data engineering inspired accent */
  .section-title {
    font-family: ${FONTS.title};
    font-size: 3rem;
    color: ${COLORS.dataDark};
    margin-bottom: 2.5rem;
    text-align: center;
    position: relative;
    font-weight: 600;
    letter-spacing: -1px;
    
    /* Line accents and data points removed */
    
    /* Hover animation removed */
  }

  /* Modern data-inspired button style with sleek interface aesthetics */
  .retro-button {
    display: inline-block;
    font-family: ${FONTS.accent};
    font-size: 0.9rem;
    font-weight: 500;
    padding: 0.85rem 1.75rem;
    margin: 0.5rem;
    color: white;
    background-color: ${COLORS.dataBlue};
    border: none;
    border-radius: 8px;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 4px 12px rgba(67, 97, 238, 0.2);
    letter-spacing: 0.5px;
    
    /* Modern gradient background */
    background-image: linear-gradient(
      135deg, 
      ${COLORS.dataBlue}, 
      ${COLORS.dataIndigo}
    );
    
    /* Elegant shine effect for enhanced aesthetics */
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: -75%;
      width: 50%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
      );
      transform: skewX(-25deg);
      transition: 0.75s ease;
    }
    
    /* Data point - small visual element */
    &:after {
      content: '';
      position: absolute;
      top: 7px;
      right: 7px;
      width: 6px;
      height: 6px;
      background: ${COLORS.dataPink};
      border-radius: 50%;
      opacity: 0.8;
    }
    
    /* Modern hover effect */
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(67, 97, 238, 0.3);
      
      &:before {
        animation: shine 0.85s;
      }
      
      @keyframes shine {
        100% {
          left: 125%;
        }
      }
      
      /* Data visualization feedback on hover */
      &:after {
        animation: pulseData 1.5s infinite alternate;
      }
      
      @keyframes pulseData {
        0% {
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(247, 37, 133, 0.4);
        }
        100% {
          transform: scale(1.2);
          box-shadow: 0 0 0 5px rgba(247, 37, 133, 0);
        }
      }
    }
    
    &:active {
      transform: translateY(1px);
      box-shadow: 0 2px 6px rgba(67, 97, 238, 0.2);
    }
  }
  
  /* Technical retro-inspired rectangular button style */
  .retro-button {
    display: inline-block;
    font-family: ${FONTS.secondary};
    font-size: 0.85rem;
    padding: 0.6rem 1rem;
    margin: 0.5rem;
    color: ${COLORS.retroPrimary};
    background-color: transparent;
    border: 2px solid ${COLORS.retroPrimary};
    border-radius: 0;
    position: relative;
    text-transform: uppercase;
    text-shadow: 0 0 5px ${COLORS.retroPrimary};
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
    letter-spacing: 1px;
    
    /* Retro border effect */
    &:before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      background: linear-gradient(90deg, 
        ${COLORS.retroPrimary},
        ${COLORS.retroSecondary},
        ${COLORS.retroPrimary}
      );
      background-size: 200% 100%;
      z-index: -1;
      animation: movingGradient 3s ease infinite;
    }
    
    &:after {
      content: '';
      position: absolute;
      top: 2px;
      left: 2px;
      right: 2px;
      bottom: 2px;
      background: ${COLORS.retroDarkBg};
      z-index: -1;
    }
    
    &:hover {
      color: ${COLORS.white};
      text-shadow: 0 0 8px ${COLORS.retroPrimary}, 
                   0 0 12px ${COLORS.retroSecondary};
      transform: translateY(-2px);
      
      &:before {
        animation-duration: 1s;
      }
    }
    
    &:active {
      transform: translateY(0);
    }
    
    @keyframes movingGradient {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  }

  /* Modern data engineering terminal with contemporary design elements */
  .terminal {
    background-color: ${COLORS.dataDark};
    border: none;
    border-radius: 12px;
    padding: 1.75rem 1.5rem 1.5rem;
    font-family: ${FONTS.mono};
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    
    /* Data engineering grid pattern */
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: 
        linear-gradient(to right, rgba(76, 201, 240, 0.03) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(76, 201, 240, 0.03) 1px, transparent 1px);
      background-size: 20px 20px;
      z-index: 0;
    }
    
    /* Data-engineering dots for visualization feel */
    &:after {
      content: '';
      position: absolute;
      bottom: 15px;
      right: 15px;
      width: 120px;
      height: 40px;
      background-image: radial-gradient(circle, ${COLORS.dataBlue}30 3px, transparent 3px),
                        radial-gradient(circle, ${COLORS.dataCyan}30 3px, transparent 3px),
                        radial-gradient(circle, ${COLORS.dataPink}30 3px, transparent 3px);
      background-size: 12px 12px;
      background-position: 0 0, 12px 6px, 6px 12px;
      z-index: 1;
      opacity: 0.7;
    }
    
    /* Modern styled terminal header */
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 32px;
      background: rgba(31, 41, 55, 0.8);
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      border-radius: 12px 12px 0 0;
      z-index: 1;
    }
    
    /* Terminal window controls */
    &:after {
      content: '';
      position: absolute;
      top: 10px;
      left: 12px;
      width: 12px;
      height: 12px;
      background: #ff5f57;
      border-radius: 50%;
      box-shadow: 
        20px 0 0 #febc2e,
        40px 0 0 #28c840;
      z-index: 2;
    }
    
    /* Terminal title - data style */
    &:before {
      content: attr(data-title);
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(255, 255, 255, 0.8);
      font-family: ${FONTS.accent};
      font-size: 13px;
      font-weight: 500;
      z-index: 2;
    }
    
    /* Subtle cursor animation */
    @keyframes cursorPulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
  }

  /* Modern data engineering card style with refined aesthetics */
  .retro-card {
    background-color: ${COLORS.white};
    border: none;
    border-radius: 12px;
    padding: 1.75rem;
    margin: 1.25rem 0;
    position: relative;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    overflow: hidden;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
    
    /* Data visualization color accent */
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(
        to right, 
        ${COLORS.dataBlue},
        ${COLORS.dataCyan},
        ${COLORS.dataPink}
      );
      opacity: 0.9;
      z-index: 1;
    }
    
    /* Data point dot marker */
    &:after {
      content: '';
      position: absolute;
      top: 12px;
      right: 12px;
      width: 8px;
      height: 8px;
      background: ${COLORS.dataPink};
      border-radius: 50%;
      z-index: 2;
      opacity: 0.8;
    }
    
    /* Modern glass effect */
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    
    /* Modern elegant hover effect */
    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
      
      /* Data point animation */
      &:after {
        animation: dataPointPulse 2s infinite alternate;
      }
      
      @keyframes dataPointPulse {
        0% { 
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(247, 37, 133, 0.2);
        }
        100% { 
          transform: scale(1.3);
          box-shadow: 0 0 0 6px rgba(247, 37, 133, 0);
        }
      }
      
      /* Subtle gradient effect on hover for enhanced visual feedback */
      &:before {
        background: linear-gradient(
          to right, 
          ${COLORS.dataBlue},
          ${COLORS.dataCyan},
          ${COLORS.dataPink},
          ${COLORS.dataViolet}
        );
        transition: background 1s ease;
      }
    }
    
    /* Subtle shine effect for enhanced depth perception */
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${COLORS.glassGradient};
      z-index: -1;
      opacity: 0.7;
    }
    
    /* Responsive adjustments */
    @media (max-width: 768px) {
      padding: 1.5rem;
    }
  }

  /* Subtle modern highlight text effect */
  .glow-text {
    color: ${COLORS.white};
    position: relative;
    display: inline-block;
    font-weight: 500;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      width: 100%;
      height: 2px;
      background: ${COLORS.accent};
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.3s ease;
    }
    
    &:hover:after {
      transform: scaleX(1);
      transform-origin: left;
    }
  }
  
  /* Machine Learning text highlight for "Machine Loehrning" */
  .ml-text {
    position: relative;
    display: inline-block;
    color: ${COLORS.hipsterOrange};
    font-weight: 600;
    background: ${COLORS.modernGradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: ${COLORS.modernGradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      opacity: 0.5;
      filter: blur(4px);
      z-index: -1;
    }
  }

  /* Modern grid background */
  .retro-grid {
    position: relative;
    
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: 
        radial-gradient(${COLORS.accent}10 1px, transparent 1px);
      background-size: 40px 40px;
      z-index: 0;
      pointer-events: none;
      opacity: 0.1;
    }
  }

  /* Subtle gradient overlay effect */
  .gradient-overlay {
    position: relative;
    overflow: hidden;
    
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.03) 0%,
        rgba(255, 255, 255, 0) 100%
      );
      pointer-events: none;
      z-index: 1;
    }
  }
  
  /* Modern timeline styles for work experience */
  .timeline-item {
    position: relative;
    padding-left: 30px;
    margin-bottom: 40px;
    transition: all 0.3s ease;
    
    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 2px;
      background: ${COLORS.accent};
      opacity: 0.5;
    }
    
    &:after {
      content: '';
      position: absolute;
      left: -6px;
      top: 0;
      width: 14px;
      height: 14px;
      border-radius: 50%;
      background: ${COLORS.accent};
      border: 2px solid ${COLORS.darkBg};
      box-shadow: 0 0 0 4px rgba(46, 196, 182, 0.1);
    }
    
    &:hover {
      transform: translateX(5px);
      
      &:after {
        background: ${COLORS.hipsterOrange};
        box-shadow: 0 0 0 6px rgba(247, 136, 47, 0.1);
      }
    }
  }

  /* Container */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
    z-index: 1;
  }

  /* Section styles */
  section {
    padding: 6rem 0;
    position: relative;
  }

  /* Animation keyframes */
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
  
  @keyframes glitchText {
    0%, 5% {
      text-shadow: -2px 0 ${COLORS.dataPink}, 2px 0 ${COLORS.dataCyan};
      transform: translate(0);
    }
    2%, 4% {
      text-shadow: 2px 0 ${COLORS.dataPink}, -2px 0 ${COLORS.dataCyan};
      transform: translate(4px, 0);
    }
    3% {
      text-shadow: -2px 0 ${COLORS.dataPink}, 2px 0 ${COLORS.dataCyan};
      transform: translate(-4px, 0);
    }
  }

  /* Media queries */
  @media (max-width: 768px) {
    .section-title {
      font-size: 2rem;
    }
    
    section {
      padding: 4rem 0;
    }
  }

  @media (max-width: 480px) {
    .section-title {
      font-size: 1.5rem;
    }
    
    .retro-button {
      font-size: 0.7rem;
      padding: 0.5rem 0.8rem;
    }
  }
`;

export default GlobalStyle;
