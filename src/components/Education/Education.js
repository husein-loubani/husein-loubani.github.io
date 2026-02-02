import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, useScroll, useTransform } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import RetroSection from '../ui/RetroSection';
import RunningBanner from '../ui/RunningBanner';
import { COLORS, FONTS } from '../ui/Theme';

// Helper function to convert hex to RGB
const hexToRgb = (hex) => {
  // Remove the # if present
  hex = hex.replace('#', '');
  
  // Parse the hex values
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  return `${r}, ${g}, ${b}`;
};

// Subtle pulse animation
const pulse = keyframes`
  0%, 100% { opacity: 0.9; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
`;

// container for timeline
const EducationContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 60px 0;
  overflow: visible;
  z-index: 10;
`;

const TimelineAxis = styled.div`
  position: absolute;
  left: -27px;
  top: 0;
  bottom: 0;
  width: 2px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 1px;
  z-index: 1;
  
  /* Top marker dot */
  &:before {
    content: '';
    position: absolute;
    top: -6px;
    left: -4px;
    width: 10px;
    height: 10px;
    background: #3182CE;
    border-radius: 50%;
  }
  
  /* Bottom marker dot */
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -3px;
    width: 8px;
    height: 8px;
    background: #3182CE;
    border-radius: 50%;
    animation: ${pulse} 3s infinite ease-in-out;
  }
  
  @media (max-width: 768px) {
    left: -47px; /* Aligned with left blue connector line */
  }
  
  /* Hide on very small screens */
  @media (max-width: 430px) {
    display: none;
  }
`;

// year marker for timeline
const YearMarker = styled(motion.div)`
  position: absolute;
  left: -15px;
  background: rgba(49, 130, 206, 0.9);
  color: white;
  padding: 6px 14px;
  border-radius: 16px;
  font-family: ${FONTS.mono};
  font-weight: 500;
  font-size: 14px;
  top: ${props => props.top || '0'};
  z-index: 2;
  transform: translateY(-50%);
  letter-spacing: 0.5px;
  backdrop-filter: blur(8px);
  
  /* Modern connector to timeline (left side) */
  &:after {
    content: '';
    position: absolute;
    right: auto;
    left: -12px;
    top: 50%;
    width: 12px;
    height: 1px;
    background-color: rgba(49, 130, 206, 0.7);
    transform: translateY(-50%);
  }
  
  /* No right connector */
  
  /* Subtle hover effect */
  transition: all 0.2s ease;
  &:hover {
    transform: translateY(-50%) translateX(3px);
    background: rgba(49, 130, 206, 1);
  }
  
  /* Show/hide year versions based on screen size */
  .mobile-year {
    display: none;
  }
  
  @media (max-width: 768px) {
    left: -35px;
    font-size: 12px;
    padding: 4px 10px;
    z-index: 10;
    background: rgba(49, 130, 206, 1); /* Increased opacity for better visibility */
    box-shadow: 0 0 10px rgba(49, 130, 206, 0.5);
    
    .desktop-year {
      display: none;
    }
    
    .mobile-year {
      display: inline;
    }
    
    &:after {
      width: 10px;
      right: auto;
      left: -15px;
    }
    
    /* No right connector for mobile */
  }
  
  /* Hide on very small screens */
  @media (max-width: 430px) {
    display: none;
  }
`;

// glass-morphism job card with consistent spacing
const EducationCard = styled(motion.div)`
  position: relative;
  background: ${props => `linear-gradient(120deg, rgba(22, 22, 26, 0.9) 0%, rgba(${props.bgColorRGB || '22, 22, 26'}, 0.06) 100%)`};
  border-radius: 16px;
  padding: 28px;
  margin: 0 0 70px 70px; /* Moved further right to avoid interference with year buttons */
  width: calc(100% - 100px);
  min-height: 160px; /* Slightly reduced to fit all cards comfortably */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15), 0 0 30px rgba(${props => props.bgColorRGB || '0, 0, 0'}, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid ${props => `rgba(${props.bgColorRGB || '255, 255, 255'}, 0.1)`};
  z-index: 2;
  display: grid;
  grid-template-columns: 220px 1fr;
  grid-gap: 28px;
  overflow: hidden;
  transition: all 0.3s ease, box-shadow 0.4s ease;
  
  /* Company-themed pattern */
  .company-pattern {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${props => props.bgPattern || 'none'};
    pointer-events: none;
    opacity: 0.5;
    transition: opacity 0.3s ease;
    z-index: 0;
  }
  
  /* Subtle gradient overlay for depth */
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0) 50%
    );
    pointer-events: none;
    z-index: 1;
  }
  
  /* Main hover effect for card */
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15), 
                0 0 40px rgba(${props => props.bgColorRGB || '0, 0, 0'}, 0.1),
                0 0 20px rgba(${props => props.bgColorRGB || '0, 0, 0'}, 0.07),
                0 0 5px ${COLORS.retroPrimary}30;
    border-color: rgba(255, 255, 255, 0.15);
    
    .company-pattern {
      opacity: 0.9;
    }
    
    .timeline-dot {
      transform: translateY(-50%) scale(1.3);
      box-shadow: 0 0 12px ${props => props.accentColor || '#3182CE'},
                  0 0 5px ${COLORS.retroPrimary}50;
      animation: dotPulse 1.5s infinite alternate;
    }
  }
  
  @keyframes dotPulse {
    0% {
      box-shadow: 0 0 5px ${props => props.accentColor || '#3182CE'};
    }
    100% {
      box-shadow: 0 0 12px ${props => props.accentColor || '#3182CE'},
                  0 0 5px ${COLORS.retroPrimary}50;
    }
  }
  
  /* Clean connector to timeline */
  &:before {
    content: '';
    position: absolute;
    left: -65px;
    top: 50%;
    width: 65px;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-50%);
  }
  
  /* Add proper spacing for the first card */
  &:first-of-type {
    margin-top: 50px;
  }
  
  /* Timeline marker dot */
  .timeline-dot {
    position: absolute;
    left: -70px;
    top: 50%;
    width: 10px;
    height: 10px;
    background: ${props => props.accentColor || '#3182CE'};
    border-radius: 50%;
    transform: translateY(-50%);
    z-index: 3;
    transition: all 0.3s ease;
  }
  
  /* Modern hover state */
  transition: all 0.3s ease;
  
  /* Responsive styles */
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
  
  @media (max-width: 768px) {
    margin-left: 65px;
    width: calc(100% - 80px);
    
    &:before {
      left: -55px;
      width: 55px;
    }
    
    .timeline-dot {
      left: -60px;
    }
  }
  
  /* Adjust margins for very small screens */
  @media (max-width: 430px) {
    margin-left: 15px;
    width: calc(100% - 30px);
    
    &:before, .timeline-dot {
      display: none;
    }
  }
`;

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  
  /* Modern company logo */
  .company-logo {
    width: 70px;
    height: 70px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    border-radius: 14px;
    position: relative;
    overflow: hidden;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    
    img {
      width: 85%;
      height: 85%;
      object-fit: contain;
    }
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }
    
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%);
      pointer-events: none;
    }
  }
  
  /* Clean company name */
  .company-name {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 10px;
    color: white;
    font-family: ${FONTS.title};
    letter-spacing: -0.5px;
    position: relative;
    display: inline-block;
    
    /* Subtle underline effect */
    &:after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 30px;
      height: 2px;
      background-color: ${props => props.logoBackground || '#3182CE'};
    }
  }
  
  /* Modern job title */
  .job-title {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 18px;
    font-weight: 500;
    font-family: ${FONTS.accent};
    position: relative;
    display: inline-block;
    padding: 5px 14px;
    background: ${props => `rgba(${hexToRgb(props.logoBackground)}, 0.12)` || 'rgba(49, 130, 206, 0.1)'};
    border-radius: 6px;
    letter-spacing: 0.3px;
    border: 1px solid ${props => `rgba(${hexToRgb(props.logoBackground)}, 0.2)` || 'rgba(49, 130, 206, 0.2)'};
    
    /* Subtle glow effect */
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${props => props.logoBackground || '#3182CE'};
      opacity: 0.08;
      filter: blur(10px);
      border-radius: 6px;
      z-index: -1;
    }
    
    /* Subtle hover */
    transition: all 0.3s ease;
    &:hover {
      background: ${props => `rgba(${hexToRgb(props.logoBackground)}, 0.18)` || 'rgba(49, 130, 206, 0.15)'};
      transform: translateY(-2px);
    }
  }
  
  /* Clean date range */
  .date-range {
    font-family: ${FONTS.mono};
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 12px;
  }
`;

// job details
const JobDetails = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  
  /* Clean, readable job description */
  .job-description {
    font-family: ${FONTS.primary};
    font-size: 15px;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 24px;
    position: relative;
    padding: 0;
    margin: 0 0 24px 0;
    
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0 0 10px 0;
    }
    
    ul li {
      padding-left: 15px;
      position: relative;
      margin-bottom: 6px;
    }
    
    ul li:before {
      content: "•";
      position: absolute;
      left: 0;
      top: 0;
    }
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
`;

const TechButton = styled.button`
  font-size: 0.7rem;
  padding: 0.35rem 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-family: ${FONTS.accent};
  font-weight: 500;
  letter-spacing: 0.5px;
  border-radius: 14px;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
  
  /* Exact same hover effect as in Projects component */
  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

// Education data with company information
const educationData = [
  {
    id: 1,
    year: 2025,
    company: 'Turing College',
    logo: 'https://media.licdn.com/dms/image/v2/D4D0BAQHDkx6KvO4mXQ/company-logo_200_200/B4DZY6cXNWHAAI-/0/1744737236278/turingcollege2_logo?e=1770854400&v=beta&t=SGZA1S_iAQr3kKb7vrFG_AZH5EKUrhZT4Vffpy44xOg',
    logoBackground: '#808080', // grey
    bgColorRGB: hexToRgb('#808080'),
    bgPattern: 'radial-gradient(circle at 90% 10%, rgba(24, 119, 242, 0.08), transparent 30%)',
    title: 'Data Science & AI Engineering',
    dateRange: 'September 2025 - Present Lithuania - Online',
    // Simple array of strings - each item will be a bullet point
    descriptionPoints: [
      'Full Scholarship Recipient',
      'Attending a 16-month professional program focused on real-world AI applications, data science workflows, and career readiness, with a strong emphasis on hands-on projects and mentorship by industry experts.',
      'Core coursework: Data Wrangling, Machine learning, Deep learning, model evaluation, and production workflows',
      'Specializations: Computer Vision, Natural Language Processing (NLP), and AI engineering for LLM application development',
      'AI engineering track: Prompt engineering, APIs (OpenAI, Anthropic, Gemini, Llama), and RAG pipelines with vector DBs (ChromaDB) via LangChain and LangGraph',
      'Projects: 40+ hands-on projects, and a capstone tackling a real client’s business challenge, and delivering an end-to-end LLM-powered application with agents and memory, plus a shareable demo (Gradio)',
      ' Support: One-on-one mentorship, regular standups, expert reviews, peer feedback, and a strong community for continuous progress'
    ],
    technologies: ['Data Science', 'Big Data Analysis', 'Data Visualization', 'Statistics & Probabilities', 'PostgreSQL', 'Machine Learning' , 'Scikit-Learn', 'NLP', 'RAG', 'LLM', 'AI Agents', 'Git', 'Docker', 'SQL' ]
  },
  { 
    id: 2,
    year: 2023,
    company: 'UTBM',
    logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQFIjRLAaKha-w/company-logo_200_200/company-logo_200_200/0/1731418743765/universite_de_technologie_de_belfort_montbeliard_logo?e=1770854400&v=beta&t=kS0ockP7vdKQaqAsgCvqtEpO4MtUBjkwy8ZN8RcGazM',
    logoBackground: '#89CFF0', // baby blue
    bgColorRGB: hexToRgb('#89CFF0'),
    bgPattern: 'radial-gradient(circle at 90% 10%, rgba(24, 119, 242, 0.08), transparent 30%)',
    title: 'PhD - Computer Science',
    dateRange: 'December 2023 - Present Montbélaird, France - Onsite',
    // Simple array of strings - each item will be a bullet point
    descriptionPoints: [
      'Thesis Subject: Generating virtual environments for the training of autonomous vehicles.',
      'Research on generating virtual environments and 3D city models for autonomous driving training and evaluation.',
      'Designed an end-to-end pipeline for 2D/3D alignment, reconstruction, and semantic enrichment from multi-modal data.',
      'Built reproducible experiments and evaluation protocols for model quality, alignment accuracy, and robustness.'
    ],
    technologies: [ 'Computer Vision', 'Autonomous Vehicle','Robot Navigation','SLAM', "Autonomous Vehicles", '3D Reconstruction', 'Deep Learning', 'Point Clouds', 'LiDAR', 'Self Learning', 'Project Management']
  },
  {
    id: 3,
    year: 2025,
    company: 'University of Oxford',
    logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQGnc4qXLbE8Sg/company-logo_200_200/company-logo_200_200/0/1709206435851/oxforduni_logo?e=1770854400&v=beta&t=ZKroQwCqEXi1WPxo57eTODENSTfpzxZkUS8XUpoahFU',
    logoBackground: '#00008B', // Dark blue
    bgColorRGB: hexToRgb('#00008B'),
    bgPattern: 'linear-gradient(135deg, rgba(213, 43, 30, 0.07) 0%, transparent 70%)',
    title: 'Summer School - Representation learning & Generative AI',
    dateRange: 'July 2025 Oxford, United Kingdom - Onsite',
    // Simple array of strings - each item will be a bullet point
    descriptionPoints: [
      'Attended the Oxford Machine Learning Summer School (OxML 2025), specifically the MLx module on Representation Learning & Generative AI. This program brings together global researchers, industry experts, and practitioners to explore cutting-edge advances in modern machine learning.',
      'Core Topics: Multi-modal representation learning, computer vision, large language models (LLMs), geometrical deep learning, generative AI systems, reinforcement learning, AI alignment and safety',
      'Expert Faculty: Sessions led by top researchers from the University of Oxford, UCL, University of Amsterdam, Google DeepMind, and Meta AI',
      'Program Highlights: Hands-on workshops, interactive lectures, and discussions on the scientific and ethical challenges of deploying AI in real-world settings',
      'This immersive program is designed to deepen expertise in the theory and practice of advanced machine learning methods, with a focus on building next-generation AI systems in a responsible and effective manner.',
    ],
    technologies: [ 'Generative AI', 'LLM', 'Transformers', 'Generative Modeling', 'Deep Learning']
  },
  {
    id: 4,
    year: 2024,
    company: 'Eindhoven University of Technology',
    logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQHMbGGFMxd-RQ/company-logo_200_200/B4EZncpxfyHgAI-/0/1760343562663/eindhoven_university_of_technology_logo?e=1770854400&v=beta&t=e6z5bh0hltWvywwks7hL9LDce65A1xYXLBH_HZESzOM',
    logoBackground: '#ffA500', 
    bgColorRGB: hexToRgb('#ffA500'), // Orange
    bgPattern: 'repeating-linear-gradient(to right, rgba(85, 85, 85, 0.02), rgba(85, 85, 85, 0.02) 1px, transparent 1px, transparent 30px)',
    title: 'Summer School - Generative Modeling',
    dateRange: 'June 2024 Eindhoven, Netherlands - Onsite',
    // Simple array of strings - each item will be a bullet point
    descriptionPoints: [
      'Participated in the Employment Hub Program, aimed at supporting financially vulnerable Lebanese youth through skill-building and paid internships',
      'Completed comprehensive training in time management, teamwork, problem-solving, and communication, enhancing employability skills.',
      'Collaborated with mentors to receive personalized guidance, fostering both personal and professional development.',
      'Engaged in projects addressing social challenges, applying newly acquired skills in practical settings.',
      'Balanced remote and in-person collaboration, adapting to hybrid work environments effectively.',
      'Contributed to initiatives designed to improve livelihoods and promote sustainable futures for disadvantaged communities.'
    ],
    technologies: ['Generative Modeling', 'Diffusion Models', 'Transformers', 'Generative AI', 'Machine Learning']
  },
  {
    id: 5,
    year: 2021,
    company: 'Université Bourgogne Europe',
    logo: 'https://media.licdn.com/dms/image/v2/D4E0BAQGa3yFcS-8EIg/company-logo_200_200/company-logo_200_200/0/1736179433355/universite_bourgogne_europe_logo?e=1770854400&v=beta&t=RQWEb3i42CEQsqYSxMexbqvTw0Cnhk6_YaVhNdvx4pk',
    logoBackground: '##FF0000', // Red
    bgColorRGB: hexToRgb('#FF0000'),
    bgPattern: 'radial-gradient(circle at 90% 90%, rgba(255, 153, 0, 0.08), transparent 40%)',
    title: 'MSc - Computer Vision & Robotics',
    dateRange: 'September 2021 - July 2023 Le Creusot, France - Onsite',
    // Simple array of strings - each item will be a bullet point
    descriptionPoints: [
      'Completed the VIBOT program, a specialized Master\'s focusing on the integration of computer vision and robotics.',
      'Signal and Image Processing: Studied software and hardware aspects of signal and image processing.​',
      'Computer Vision Techniques: Explored compression, segmentation, real-time processing, shape recognition, and 3D vision methodologies.​',
      'Robotics: Covered fundamentals, control systems, and programming for robot autonomy and intelligence.​',
      'Medical Imaging: Examined biological bases and various imaging modalities, including infrared, X-ray, and ultrasound.​',
      'Research Training: Engaged in a research training period, applying acquired knowledge to practical projects.​',
      'This program equipped me with comprehensive skills in vision and robotics, preparing me for advanced roles in research and industry.'
    ],
    technologies: ['Computer Vision', 'Robotics', 'ROS', 'OpenCV', 'Python', 'Pattern Recognition', 'Multi Sensor Fusion']
  },
  {
    id: 6,
    year: 2018,
    company: 'Lebanese International University',
    logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQFbRkjXMVFFmQ/company-logo_200_200/company-logo_200_200/0/1631310507909?e=1770854400&v=beta&t=KZ6c-Imkb6ioiiw6iH-jxFfxP0j5VWOX8ZLTtFaqoLc',
    logoBackground: '##00FF00', // Green
    bgColorRGB: hexToRgb('##00FF00'),
    bgPattern: 'radial-gradient(circle at 90% 90%, rgba(255, 153, 0, 0.08), transparent 40%)',
    title: 'BSc - Computer Engineering',
    dateRange: 'September 2018 - July 2021 Beirut, Lebanon - Onsite',
    // Simple array of strings - each item will be a bullet point
    descriptionPoints: [
      'Completed a rigorous engineering program, blending theoretical knowledge and practical training in both hardware and software systems, with a strong focus on embedded systems, digital design, and networked technologies.',
      'Built a strong foundation in mathematics, physics, and statistics, supporting analytical thinking and systems-level problem solving.​',
      'Gained hands-on experience in micro-controller programming, digital circuit design, and signal processing through lab-based courses and simulation tools.​',
      'Developed software engineering skills through projects involving object-oriented programming, web and mobile app development, and database systems.',
      '​Applied engineering principles in real-world scenarios during a capstone project, integrating embedded hardware with software to address practical challenges.',
      'Strengthened communication, project planning, and teamwork abilities through coursework in engineering ethics, economics, and technical writing.​'
    ],
    technologies: ['Micro-controllers', 'MySQL', 'Mobile Application Development', 'Web Development', 'JSON', 'JavaScript', 'C/C++', 'Oracle', 'Raspberry Pi', 'Arduino']
  }
];

const Education = () => {
  // State for tracking active cards
  const [activeCard, setActiveCard] = useState(null);
  
  const { scrollYProgress } = useScroll();

  return (
    <>
      <RetroSection 
        id="education"
        title="Education"
        titleColor="#3182CE" // Modern blue color scheme
        gridColor="#3182CE"
        gridOpacity="100s" // Subtle grid
        className="education-section"
      >
        <InView threshold={0.1} triggerOnce>
          {({ ref, inView }) => (
            <EducationContainer ref={ref}>
              {/* Timeline axis */}
              <TimelineAxis />
              
              {/* Year markers with subtle blue styling - positioned to match card centers */}
              <YearMarker 
                top="17%" 
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="year-marker"
              >
                <span className="desktop-year">2024</span>
                <span className="mobile-year">24</span>
              </YearMarker>
              
              <YearMarker 
                top="36%" /* Red Bull position - percentage for responsiveness */
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15, ease: "easeOut" }}
                className="year-marker"
              >
                <span className="desktop-year">2023</span>
                <span className="mobile-year">24</span>
              </YearMarker>
              
              <YearMarker 
                top="60%" 
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
                className="year-marker"
              >
                <span className="desktop-year">2021</span>
                <span className="mobile-year">22</span>
              </YearMarker>
              
              <YearMarker 
                top="85%" /* Amazon position - percentage for responsiveness */
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.45, ease: "easeOut" }}
                className="year-marker"
              >
                <span className="desktop-year">2021</span>
                <span className="mobile-year">21</span>
              </YearMarker>
              
              {/* Education cards with glass-morphism styling */}
              {educationData.map((job, index) => (
                <EducationCard
                  key={job.id}
                  accentColor={job.logoBackground}
                  bgColorRGB={job.bgColorRGB}
                  bgPattern={job.bgPattern}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { 
                    opacity: 1, 
                    x: 0,
                    transition: { 
                      duration: 0.5, 
                      delay: 0.2 * index,
                      ease: "easeOut"
                    }
                  } : {}}
                  onMouseEnter={() => setActiveCard(job.id)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  {/* Company-themed background pattern */}
                  <div className="company-pattern" />
                  
                  {/* Timeline marker dot */}
                  <div className="timeline-dot" />
                  
                  {/* Company info side with modern styling */}
                  <CompanyInfo logoBackground={job.logoBackground}>
                    <div className="company-logo">
                      <img 
                        src={job.logo} 
                        alt={`${job.company} logo`} 
                        style={job.company === 'Apple' ? { width: '50%', height: '50%' } : {}}
                      />
                    </div>
                    <h3 className="company-name">{job.company}</h3>
                    <h4 className="job-title">{job.title}</h4>
                    <div className="date-range">{job.dateRange}</div>
                  </CompanyInfo>
                  
                  {/* Job details side with clean styling */}
                  <JobDetails>
                    <div className="job-description">
                      {job.descriptionPoints && job.descriptionPoints.length > 0 ? (
                        <ul>
                          {job.descriptionPoints.map((point, idx) => (
                            <li key={idx}>{point}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>{job.description || 'No description available'}</p>
                      )}
                    </div>
                    
                    <TechStack>
                      {job.technologies.map((tech, idx) => (
                        <TechButton 
                          key={idx}
                          companyColor={job.bgColorRGB}
                          onClick={(e) => e.preventDefault()} // Prevent default to make button non-functional
                        >
                          {tech}
                        </TechButton>
                      ))}
                    </TechStack>
                  </JobDetails>
                </EducationCard>
              ))}
            </EducationContainer>
          )}
        </InView>
      </RetroSection>
      
      {/* Running Banner between Work and Projects sections */}
      <RunningBanner />
    </>
  );
};

export default Education;
