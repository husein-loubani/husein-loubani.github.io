/**
 * Projects Component
 * ===================================
 * 
 * HOW TO ADD A NEW PROJECT:
 * 
 * 1. Go to the projectsData array (around line 170)
 * 2. Add a new object with the following properties:
 *    - title: The name of your project
 *    - description: A brief description
 *    - gradient: Choose from GRADIENT_PRESETS or create your own
 *    - technologies: Array of technologies used (will be displayed as tags)
 *    - actions: Array of buttons (at least one should have primary: true)
 * 
 * EXAMPLE:
 * {
 *   title: 'My Awesome Project',
 *   description: 'This project does amazing things with data',
 *   gradient: GRADIENT_PRESETS.BLUE, // Or any other preset
 *   technologies: ['Python', 'TensorFlow', 'React'],
 *   actions: [
 *     { label: 'Demo', url: 'https://demo-link.com', primary: true },
 *     { label: 'GitHub', url: 'https://github.com/username/repo', primary: false }
 *   ]
 * }
 * 
 * The grid layout will automatically adjust based on the number of projects!
 */

import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { InView } from 'react-intersection-observer';
import RetroSection from '../ui/RetroSection';
import { FONTS } from '../ui/Theme';

const ProjectsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`;

// Clean grid layout
const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(100px, auto);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(6, 1fr);
    gap: 1.5rem;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

// Define a pulsing animation
const pulseGlow = keyframes`
  0% { box-shadow: 0 0 10px 0px rgba(255, 255, 255, 0.1); }
  50% { box-shadow: 0 0 16px 4px rgba(255, 255, 255, 0.15); }
  100% { box-shadow: 0 0 10px 0px rgba(255, 255, 255, 0.1); }
`;

// Modern minimalist card with glass effect
// Forward declarations to resolve styling dependencies
const ProjectImageStyles = css`
  &:after {
    background: rgba(0, 0, 0, 0.35);
  }
  transform: scale(1.02);
`;

const ProjectTitleStyles = css`
  transform: scale(1.02);
  text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.7), 0px 4px 10px rgba(0, 0, 0, 0.5);
`;

const ProjectBannerStyles = css`
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  filter: brightness(1.1);
`;

const ProjectTagStyles = css`
  background: rgba(255, 255, 255, 0.15);
`;

// minimalist card with glass effect
const ProjectCard = styled(motion.div)`
  position: relative;
  background: rgba(22, 22, 26, 0.8);
  border-radius: 12px;
  overflow: hidden;
  backdrop-filter: blur(8px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 480px; /* Increased to accommodate content with line breaks */
  max-height: 550px; /* Increased maximum height for consistency */
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:hover {
    transform: translateY(-5px) scale(1.01);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.15);
    
    &:after {
      opacity: 1;
      animation: ${pulseGlow} 2s infinite ease-in-out;
    }
    
    /* Apply hover styles to child components */
    .project-image {
      ${ProjectImageStyles}
    }
    
    .project-title {
      ${ProjectTitleStyles}
    }
    
    .project-banner {
      ${ProjectBannerStyles}
    }
    
    .project-tag {
      ${ProjectTagStyles}
    }
  }
  
  /* Digital glow effect container */
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    opacity: 0;
    transition: opacity 0.3s ease;
    pointer-events: none;
    z-index: -1;
  }
  
  @media (max-width: 768px) {
    min-height: 430px;
  }
`;

// Project banner component
const ProjectBanner = styled.div`
  position: absolute;
  top: ${props => props.isLong ? '25px' : '20px'};
  right: ${props => props.isLong ? '-45px' : '-35px'};
  background: ${props => props.color || '#FF4081'};
  color: white;
  font-size: ${props => props.isLong ? '0.65rem' : '0.7rem'};
  font-weight: 600;
  padding: 5px ${props => props.isLong ? '50px' : '40px'};
  transform: rotate(45deg);
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  font-family: ${FONTS.accent};
  letter-spacing: 0.5px;
  text-transform: uppercase;
  width: ${props => props.isLong ? '180px' : 'auto'};
  text-align: center;
  transition: all 0.4s ease;
  
  ${ProjectCard}:hover & {
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
    filter: brightness(1.1);
  }
`;

// Clean image area with subtle gradient overlay
const ProjectImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px; /* Increased height to accommodate wrapped titles */
  min-height: 200px;
  background: ${props => props.gradient || `linear-gradient(135deg, #3182CE, #63B3ED)`};
  position: relative;
  overflow: hidden;
  padding: 1.5rem;
  box-sizing: border-box;
  text-align: center;
  transition: all 0.5s ease;
  
  /* Add a semi-transparent overlay for better title readability */
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.45);
    z-index: 1;
    transition: background 0.5s ease;
  }
  
  /* Hover effect is applied in ProjectCard's hover state */
`;

// Project title
const ProjectTitle = styled.h3`
  color: white;
  font-family: ${FONTS.title};
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0;
  z-index: 2;
  width: 100%;
  text-align: center;
  /* Text shadow for better readability */
  text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5), 0px 4px 8px rgba(0, 0, 0, 0.35);
  
  /* Allow natural wrapping without ellipsis */
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  line-height: 1.4;
  max-height: 5.6em; /* 4 lines of text (1.4 × 4) */
  transition: transform 0.4s ease, text-shadow 0.4s ease;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

// content area
const ProjectContent = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

// tag pills
const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-bottom: 1rem;
  min-height: 30px;
  overflow-y: auto;
  max-height: 75px;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.1) transparent;
  
  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }
`;

// rounded tag pills
const ProjectTag = styled.span`
  font-size: 0.6rem;
  padding: 0.2rem 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-family: ${FONTS.accent};
  font-weight: 500;
  letter-spacing: 0.3px;
  border-radius: 10px;
  transition: all 0.3s ease;
  margin-bottom: 4px;
  white-space: nowrap;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }
`;

// description text
const ProjectDescription = styled.div`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-family: ${FONTS.primary};
  font-size: 0.9rem;
  flex: 1;
  overflow-wrap: break-word;
  word-wrap: break-word;
  hyphens: auto;
  max-width: 100%;
  min-height: 80px;
  max-height: 120px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.1) transparent;
  padding-right: 5px;
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
  }
  
  br {
    line-height: 1.6;
  }
  
  @media (max-width: 768px) {
    min-height: 60px;
    max-height: 100px;
    font-size: 0.85rem;
  }
`;

// Action buttons container
const ProjectActions = styled.div`
  display: flex;
  gap: 0.75rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const ProjectButton = styled.button`
  background: ${props => props.primary ? 'rgba(59, 130, 246, 0.9)' : 'rgba(255, 255, 255, 0.1)'};
  color: white;
  font-family: ${FONTS.accent};
  font-size: 0.8rem;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  backdrop-filter: blur(4px);
  font-weight: 500;
  
  &:hover {
    transform: translateY(-2px);
    background: ${props => props.primary ? 'rgba(59, 130, 246, 1)' : 'rgba(255, 255, 255, 0.15)'};
  }
  
  &:active {
    transform: translateY(0);
  }
`;

// Gradient presets to make it easy to add new projects
// Simply select a preset or define your own custom gradient
const GRADIENT_PRESETS = {
  BLUE: 'linear-gradient(135deg, #3182CE, #4299E1)',
  INDIGO: 'linear-gradient(135deg, #4F46E5, #6366F1)',
  PINK: 'linear-gradient(135deg, #EC4899, #F472B6)',
  GREEN: 'linear-gradient(135deg, #10B981, #34D399)',
  YELLOW: 'linear-gradient(135deg, #F59E0B, #FBBF24)',
  PURPLE: 'linear-gradient(135deg, #7C3AED, #8B5CF6)',
  TEAL: 'linear-gradient(135deg, #14B8A6, #2DD4BF)',
  RED: 'linear-gradient(135deg, #EF4444, #F87171)',
  ORANGE: 'linear-gradient(135deg, #F97316, #FB923C)',
  CYAN: 'linear-gradient(135deg, #06B6D4, #22D3EE)',
};

/**
 * Projects Data - Row-Based Layout System
 * =======================================
 * 
 * HOW TO ADD A NEW PROJECT:
 * 1. Add your project to the desired row (row1, row2, row3, etc.)
 * 2. Each row can have 1-3 projects
 * 3. The layout will automatically adjust based on the number of projects in each row:
 *    - 1 project in a row: Will be centered and take up 66% of the width
 *    - 2 projects in a row: Will be evenly distributed across the row
 *    - 3 projects in a row: Will be evenly distributed (each taking 1/3 of the space)
 * 4. If you need to add a new row, simply create a new array (row4, row5, etc.)
 * 
 * EXAMPLE:
 * row4: [
 *   {
 *     title: 'My New Project',
 *     description: 'Amazing project description',
 *     gradient: GRADIENT_PRESETS.TEAL,
 *     technologies: ['React', 'Node.js', 'MongoDB'],
 *     actions: [
 *       { label: 'Demo', url: 'https://example.com', primary: true },
 *       { label: 'GitHub', url: 'https://github.com/example', primary: false }
 *     ]
 *   }
 * ]
 */

// Projects organized by rows - each row can have 1-3 projects
const projectsByRow = {
  // First row
  row1: [
    {
      title: 'AI trend analysis in German<br>business and politics:<br>a web mining approach',
      description: 'This study analyzes AI trends in German business and politics (1998–2020) using web mining and ML.<br><br>It detects AI evolution, faster adoption in business, and increasing political discourse, leveraging 1.07M documents.',
      gradient: GRADIENT_PRESETS.BLUE,
      technologies: ['Artificial intelligence', 'Web mining', 'Trend detection', 'Topic clustering', 'Business', 'Politics'],
      actions: [
        { label: 'Paper', url: 'https://link.springer.com/article/10.1007/s41060-023-00483-9', primary: true }
      ],
      banner: { text: 'Paper', color: '#3182CE' }
    },
    {
      title: 'AI trend analysis on healthcare podcasts using topic modeling and sentiment <br> analysis: a data-driven approach',
      description: 'This study analyzes AI trends in healthcare podcasts (2015–2021) using web mining and ML. It detects AI evolution, identifies 14 topic clusters, and examines sentiment and trend dynamics.',
      gradient: GRADIENT_PRESETS.INDIGO,
      technologies: ['Artificial intelligence', 'Web mining', 'Trend detection', 'Topic clustering', 'PyTorch', 'Python', 'Sentiment Analysis'],
      actions: [
        { label: 'Paper', url: 'https://link.springer.com/article/10.1007/s12065-023-00878-4', primary: true }
      ],
      banner: { text: 'Paper', color: '#4F46E5' }
    }
  ],
  
  // Second row
  row2: [
    {
      title: 'Identifying a Trial <br> Population for Clinical Studies <br> on Diabetes Drug Testing with Neural Networks',
      description: 'This project models an end-to-end AI workflow for clinical use, predicting hospitalization time for diabetes patients using neural networks and Explainable AI, aiding doctors in patient selection.',
      gradient: GRADIENT_PRESETS.PINK,
      technologies: ['Machine Learning', 'EDA', 'Data Analysis'],
      actions: [
        { label: 'Paper', url: 'https://dl.gi.de/server/api/core/bitstreams/833fe83a-27fa-48fa-8f79-f9cf4895f1ca/content', primary: true },
        { label: 'GitHub', url: 'https://github.com/Mavengence/Machine_Learning_in_the_Industry_4.0_Seminar_SS2020.FAU', primary: false }
      ],
      banner: { text: 'Best Paper Award', color: '#EC4899', isLong: true }
    },
    {
      title: 'Style Classification in Posters',
      description: 'Created an interactive dashboard for analyzing customer purchase patterns and product affinities for a retail client.',
      gradient: GRADIENT_PRESETS.GREEN,
      technologies: ['LDA ', 'Neural Networks', 'PyTorch', 'BERT', 'Museum', 'Clustering'],
      actions: [
        { label: 'Report', url: 'https://drive.google.com/file/d/1llobxdJ98EvebOEH6b372VrMSvc4p0mg/view?usp=sharing', primary: true },
        { label: 'GitHub', url: 'https://github.com/Mavengence/Style-Classification-in-Posters', primary: false }
      ]
    },
    {
      title: 'Representation Learning for Gait Analysis in Parkinson Patients',
      description: 'This project evaluates deep learning architectures for Parkinsons classification using raw sensor data. A ResNet autoencoder achieved 87% accuracy, as a decision support tool for doctors.',
      gradient: GRADIENT_PRESETS.YELLOW,
      technologies: ['Computer Vision', 'PyTorch', 'Timeseries'],
      actions: [
        { label: 'Report', url: 'https://drive.google.com/file/d/1CwGOKzVPtgz1A5zVJXehEHIk7snWR_cI/view?usp=sharing', primary: true },
        { label: 'GitHub', url: 'https://github.com/Mavengence/Representation-Learning-for-Gait-Analysis-in-Parkinson-s-Patients', primary: false }
      ]
    }
  ],
  
  // Third row
  row3: [
    {
      title: 'Masterthesis: <br> AI Trend Detection in Healthcare by applying Topic Clustering and Sentiment Analysis using Podcast Data',
      description: 'This thesis explores AI trend detection in healthcare podcasts (2015–2021) using speech-to-text, topic clustering, and sentiment analysis. It identifies 14 trending topics and develops a tool for filtering relevant discussions.',
      gradient: GRADIENT_PRESETS.ORANGE,
      technologies: ['Artificial intelligence', 'NLP', 'BERT', 'Web mining', 'Trend detection', 'Topic clustering', 'PyTorch', 'Python', 'Sentiment Analysis'],
      actions: [
        { label: 'Thesis', url: 'https://drive.google.com/file/d/13fBq7cbFENh3P6NSFUtC5ROXlaYpaHok/view?usp=sharing', primary: true },
        { label: 'Presentation', url: 'https://drive.google.com/file/d/1CEw7Icy97BMWJfAVU_q-VCswe2eEaCrP/view?usp=sharing', primary: false }
      ]
    },
    {
      title: 'Python Package: <br> Gap Statistics',
      description: 'My GapStatistics package provides a Python implementation of the Gap Statistics method for determining the optimal number of clusters in a dataset using K-means clustering derived from Tibshirani et al.',
      gradient: GRADIENT_PRESETS.PURPLE,
      technologies: ['Elbow Method', 'k-Means', 'Clustering'],
      actions: [
        { label: 'Github', url: 'https://github.com/Mavengence/GapStatistics', primary: true },
        { label: 'PyPi', url: 'https://pypi.org/project/gapstatistics/', primary: false }
      ],
      banner: { text: 'Package', color: GRADIENT_PRESETS.PURPLE, isLong: true }
    }
  ]
};

// Process the project data from each row, adding row and position information
const processProjects = () => {
  let allProjects = [];
  let id = 1;
  
  // Iterate through each row
  Object.entries(projectsByRow).forEach(([rowKey, rowProjects]) => {
    // Get the row number from the key (e.g., "row1" → 1)
    const rowNumber = parseInt(rowKey.replace('row', ''));
    
    // Add projects from this row with their position information
    rowProjects.forEach((project, index) => {
      allProjects.push({
        id: id++,
        row: rowNumber,
        positionInRow: index,
        projectsInRow: rowProjects.length,
        ...project
      });
    });
  });
  
  return allProjects;
};

const projects = processProjects();

/**
 * Projects Component
 * 
 * This component displays all projects in a responsive grid layout.
 * The grid automatically adapts to the number of projects without needing manual adjustment.
 */
const Projects = () => {
  /**
   * Dynamic Grid Placement
   * 
   * This function automatically calculates grid placement based on the index and total project count.
   * It creates an aesthetically pleasing layout regardless of how many projects are in the array.
   */
  /**
   * Get Grid Placement
   * This function determines where each project card should be placed in the grid
   * based on its row and position within that row
   */
  const getGridPlacement = (project) => {
    // Safe check for SSR (server-side rendering)
    if (typeof window === 'undefined') {
      return { gridColumn: '1 / span 4', gridRow: 'auto' };
    }
    
    // Mobile layout - single column
    if (window.innerWidth <= 768) {
      return { 
        gridColumn: '1 / span 1', 
        gridRow: 'auto',
        marginBottom: '2rem'
      };
    }
    
    // Tablet layout - 2 columns
    if (window.innerWidth <= 992) {
      return { 
        gridColumn: project.positionInRow % 2 === 0 ? '1 / span 3' : '4 / span 3', 
        gridRow: `${Math.floor(project.positionInRow / 2) + project.row} / span 1`
      };
    }
    
    // Desktop layout - based on number of projects in the row
    const { row, positionInRow, projectsInRow } = project;
    
    // Row with 1 project - centered (wider card)
    if (projectsInRow === 1) {
      return { 
        gridColumn: '3 / span 8', 
        gridRow: `${row} / span 1`
      };
    }
    
    // Row with 2 projects - evenly distributed
    if (projectsInRow === 2) {
      return { 
        gridColumn: positionInRow === 0 ? '2 / span 5' : '7 / span 5', 
        gridRow: `${row} / span 1`
      };
    }
    
    // Row with 3 projects - evenly distributed (each gets 1/3 of the space)
    return { 
      gridColumn: `${positionInRow * 4 + 1} / span 4`, 
      gridRow: `${row} / span 1`
    };
  };
  
  // No helper function needed anymore, the grid placement logic is now self-contained
  
  return (
    <RetroSection 
      id="projects"
      title="PROJECTS"
      titleColor="#3182CE" // Modern blue for section title
      gridColor="#3182CE"
      gridOpacity="0.05" // Subtle grid
      className="projects-section"
    >
      <ProjectsContainer>
        {/* Grid layout automatically adjusts based on rows and projects per row */}
        <ProjectsGrid>
          {/* Sort projects by row to ensure proper rendering order */}
          {projects
            .sort((a, b) => a.row - b.row || a.positionInRow - b.positionInRow)
            .map((project, index) => (
              <InView threshold={0.1} triggerOnce key={project.id}>
                {({ ref, inView }) => (
                  <ProjectCard 
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.08,
                      ease: "easeOut"
                    }}
                    style={getGridPlacement(project)}
                  >
                    {project.banner && (
                      <ProjectBanner 
                        color={project.banner.color}
                        isLong={project.banner.isLong}
                        className="project-banner"
                      >
                        {project.banner.text}
                      </ProjectBanner>
                    )}
                    <ProjectImage gradient={project.gradient} className="project-image">
                      <ProjectTitle 
                        dangerouslySetInnerHTML={{ __html: project.title }}
                        className="project-title"
                      />
                    </ProjectImage>
                    
                    <ProjectContent>
                      <ProjectTags>
                        {project.technologies.map((tech, idx) => (
                          <ProjectTag 
                            key={idx}
                            className="project-tag"
                          >
                            {tech}
                          </ProjectTag>
                        ))}
                      </ProjectTags>
                      
                      <ProjectDescription
                        dangerouslySetInnerHTML={{ __html: project.description }}
                      />
                      
                      <ProjectActions>
                        {project.actions.map((action, idx) => (
                          <ProjectButton
                            key={idx}
                            primary={action.primary}
                            onClick={() => window.open(action.url, '_blank')}
                          >
                            {action.label}
                          </ProjectButton>
                        ))}
                      </ProjectActions>
                    </ProjectContent>
                  </ProjectCard>
                )}
              </InView>
            ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </RetroSection>
  );
};

export default Projects;