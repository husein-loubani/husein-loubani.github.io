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
const ExperienceContainer = styled.div`
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
const ExperienceCard = styled(motion.div)`
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

// Experience data with company information
const experienceData = [
  {
    id: 1,
    year: 2023,
    company: 'CIAD Lab',
    logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQEGX5W2c8VSGQ/company-logo_200_200/company-logo_200_200/0/1630516829513/ciad_lab_logo?e=1752105600&v=beta&t=_OJ0HTrHeVXNAD7NYBLJFvVBXT9NKjehd1IKRzZ-9r4',
    logoBackground: '#28a745', // Blue
    bgColorRGB: hexToRgb('#28a745'),
    bgPattern: 'radial-gradient(circle at 90% 10%, rgba(24, 119, 242, 0.08), transparent 30%)',
    title: 'Doctoral Researcher',
    dateRange: 'December 2023 - Present Montbélaird, France - Onsite',
    // Simple array of strings - each item will be a bullet point
    descriptionPoints: [
      'Thesis Subject: Generating virtual environments for the training of autonomous vehicles.',
      'TBA'
    ],
    technologies: ['Python', 'C++', 'PyTorch', '3D Reconstruction', 'PCL', 'CGAL', 'Machine Learning', 'Computer Vision', '2D/3D Data Alignment','Navigation','SLAM', "Autonomous Driving"]
  },
  {
    id: 2,
    year: 2023,
    company: 'ImViA Lab',
    logo: 'https://media.licdn.com/dms/image/v2/C560BAQGfc7VmEi2b-g/company-logo_200_200/company-logo_200_200/0/1630599548773?e=1752105600&v=beta&t=Ewba5B_21MYP_XUtwH4_uUW2gc989BJyicpbSBSym_g',
    logoBackground: '#FFA500', // Red
    bgColorRGB: hexToRgb('#FFA500'),
    bgPattern: 'linear-gradient(135deg, rgba(213, 43, 30, 0.07) 0%, transparent 70%)',
    title: 'AI Vision & Robotics Engineer - Intern',
    dateRange: 'February 2023 - July 2023 Le Creusot, France - Onsite',
    // Simple array of strings - each item will be a bullet point
    descriptionPoints: [
      'As part of my Master’s thesis at ImViA Lab, I worked on visuo-tactile perception for in and on-hand robotic manipulation, focusing on detecting object slippage using the Franka Emika 3 Panda robot',
      'Developed a visuo-tactile fusion pipeline using LSTM and GRU-based RNN models to estimate object pose during dynamic manipulation, even under occlusion.',
      'Designed and executed pick-and-place experiments in simulation using PyBullet and transitioned models to a real-world robotic platform.',
      'Integrated tactile sensing with vision data to detect object slippage during actions like rotation, sliding, and flipping.',
      'Built pose estimation and control modules in Python and implemented the complete system on ROS using the Franka Emika 3 Panda arm.',
      'Evaluated performance through quantitative pose error metrics and object visibility-based visualization tools.'
    ],
    technologies: ['Python', 'ROS', 'LSTM', 'GRU', 'PyBullet', 'Control Systems', 'Pose Estimation', 'Computer Vision', 'Tactile Sensing', 'Robotics Manipulation','TensorFlow' ]
  },
  {
    id: 3,
    year: 2021,
    company: 'The Nawaya Network ',
    logo: 'https://media.licdn.com/dms/image/v2/C4E0BAQF4SU5r0b-0pg/company-logo_200_200/company-logo_200_200/0/1631313630138?e=1752105600&v=beta&t=wD_oE98n8-aiQd8-rpg6EAx7mwojKVPhA0kHVrMnmF8',
    logoBackground: '#800080', 
    bgColorRGB: hexToRgb('#800080'), // Using dark gray for better visibility
    bgPattern: 'repeating-linear-gradient(to right, rgba(85, 85, 85, 0.02), rgba(85, 85, 85, 0.02) 1px, transparent 1px, transparent 30px)',
    title: 'CultivateMinds - Nurturing Excellence in Soft Skills - Intern',
    dateRange: 'March 2021 - June 2021 Beirut, Lebanon - Hybrid',
    // Simple array of strings - each item will be a bullet point
    descriptionPoints: [
      'Participated in the Employment Hub Program, aimed at supporting financially vulnerable Lebanese youth through skill-building and paid internships',
      'Completed comprehensive training in time management, teamwork, problem-solving, and communication, enhancing employability skills.',
      'Collaborated with mentors to receive personalized guidance, fostering both personal and professional development.',
      'Engaged in projects addressing social challenges, applying newly acquired skills in practical settings.',
      'Balanced remote and in-person collaboration, adapting to hybrid work environments effectively.',
      'Contributed to initiatives designed to improve livelihoods and promote sustainable futures for disadvantaged communities.'
    ],
    technologies: ['Communication Tools', 'Project Management Tools', 'Microsoft Office', 'Remote Collaboration', 'Teamwork', 'Time Management', 'Problem-Solving']
  },
  {
    id: 4,
    year: 2021,
    company: 'Career Orientation and Readiness',
    logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQGrTtmPRMXmMw/company-logo_200_200/company-logo_200_200/0/1640849409428?e=1752105600&v=beta&t=br4ZBgBFBUm8KsQn2bfsdhPf50I044rjhww0zUF5-nY',
    logoBackground: '#0000FF', 
    bgColorRGB: hexToRgb('#0000FF'),
    bgPattern: 'radial-gradient(circle at 90% 90%, rgba(255, 153, 0, 0.08), transparent 40%)',
    title: 'Business Intelligence Engineer - Intern',
    dateRange: 'January 2021 - March 2021 Beirut, Lebanon - Hybrid',
    // Simple array of strings - each item will be a bullet point
    descriptionPoints: [
      'During my internship at CPPR.bl3arabi, I contributed to the development of web and mobile applications, enhancing my technical skills and project experience',
      'Developed responsive web interfaces using HTML, CSS, and JavaScript, ensuring cross-browser compatibility and user-friendly design.',
      'Built dynamic single-page applications with React and Angular, improving user engagement and performance.',
      'Assisted in the development of mobile applications for both iOS and Android platforms, utilizing platform-specific technologies.',
      'Provided technical consulting to internal teams, offering insights on best practices and innovative solutions for project challenges.',
      'Gained experience in version control systems and agile development methodologies, contributing to efficient workflow and team coordination.'
    ],
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Angular', 'Mobile App Development', 'iOS', 'Android', 'Version Control (Git)', 'Agile Methodologies', 'Responsive Design']
  }
];

const WorkExperience = () => {
  // State for tracking active cards
  const [activeCard, setActiveCard] = useState(null);
  
  const { scrollYProgress } = useScroll();

  return (
    <>
      <RetroSection 
        id="experience"
        title="Experience"
        titleColor="#3182CE" // Modern blue color scheme
        gridColor="#3182CE"
        gridOpacity="100s" // Subtle grid
        className="experience-section"
      >
        <InView threshold={0.1} triggerOnce>
          {({ ref, inView }) => (
            <ExperienceContainer ref={ref}>
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
                <span className="desktop-year">2025</span>
                <span className="mobile-year">25</span>
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
              
              {/* Experience cards with glass-morphism styling */}
              {experienceData.map((job, index) => (
                <ExperienceCard
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
                </ExperienceCard>
              ))}
            </ExperienceContainer>
          )}
        </InView>
      </RetroSection>
      
      {/* Running Banner between Work and Projects sections */}
      <RunningBanner />
    </>
  );
};

export default WorkExperience;
