import React from 'react';
import styled from 'styled-components';
import Terminal from '../ui/Terminal';
import RetroSection from '../ui/RetroSection';
import { COLORS } from '../ui/Theme';

const TerminalContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  
  /* Subtle modern glow effect around the terminal */
  &:before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: linear-gradient(135deg, 
      ${COLORS.primary}30, 
      ${COLORS.accent}30, 
      ${COLORS.secondary}30
    );
    background-size: 400% 400%;
    z-index: -1;
    filter: blur(15px);
    opacity: 0.6;
    animation: subtleGlow 8s ease infinite;
    border-radius: 20px;
  }
  
  /* Mac-inspired floating effect on hover */
  &:hover {
    transform: translateY(-5px);
    transition: transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    
    &:before {
      filter: blur(20px);
      opacity: 0.7;
    }
  }
  
  @keyframes subtleGlow {
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
`;

const Console = () => {
  const commandsData = [
    {
      command: 'whoami',
      result: 'Hussein Loubani, PhD Researcher in AI, Computer Vision & Autonomous Driving'
    },
    {
      command: 'cat skills.json | jq',
      result: `{
  "Programming": ["Python", "C++", "R", "Java", "JavaScript", "MATLAB", "SQL"],
  "Frameworks": ["PyTorch", "TensorFlow", "OpenCV", "ROS", "Scikit-learn","NLP"],
  "Domains": ["Computer Vision", "3D Reconstruction", "SLAM", "Autonomous Vehicles"],
  "Data": ["Point Clouds", "Meshes", "Topography", "2D/3D Alignment", "Sensor Fusion"],
  "Tools": ["ROS", "CGAL", "PCL", "Git", "PyBullet", "Gazebo", "CUDA", "Docker"]   
}`
    },
    {
      command: 'ls -la education/',
      result: `drwxr-xr-x  5 hloubani  phd  160 Dec 1 10:24 .
drwxr-xr-x 18 hloubani  phd  576 Dec 1 10:24 ..
-rw-r--r--  1 hloubani  phd  302 Dec 1 10:24 PhD_UTBM_CIAD.md
-rw-r--r--  1 hloubani  phd  286 Dec 1 10:24 MSc_ViBot_UBE.md
-rw-r--r--  1 hloubani  phd  268 Dec 1 10:24 BSc_CEng_LIU.md
drwxr-xr-x  7 hloubani  phd  224 Dec 1 10:24 certifications/`
    },     
    {
    command: 'cat experience.json | jq | bat -l json',
    result: `───────┬────────────────────────────────────────────────────
       │ File: experience.json
───────┼────────────────────────────────────────────────────
   1   │ {
   2   │   "CIAD Lab": {
   3   │     "role": "PhD Researcher",
   4   │     "period": "2023-Present",
   5   │     "projects": ["Virtual Environments for Autonomous Vehicles Training"]
   6   │   },
   7   │   "ImViA Lab": {
   8   │     "role": "AI Vision & Robotics Engineer (Intern)",
   9   │     "period": "2023",
  10   │     "projects": ["Visuo-Tactile Perception", "Object Pose Estimation"]
  11   │   },
  12   │   "Career C&R": {
  13   │     "role": "Web & Mobile Developer (Intern)",
  14   │     "period": "2021",
  15   │     "projects": ["Cross-platform App Dev", "UI/UX Optimization"]
  16   │   }
  17   │ }`
  },
  {
    command: 'contact --format=pretty',
    result: `┌───────────────────────────────────────────────────────────┐
│ Email    : Hussein_lobs@outlook.com                        │
│ LinkedIn : linkedin.com/in/hussein-loubani                 │
│ GitHub   : github.com/husein-loubani                       │
│ Website  : husein-loubani.netlify.app                      │
│ Scholar  : scholar.google.com/citations?user=4IiL4OEAAAAJ  │
│ Phone    : +33 7 50 00 39 07                                │
└───────────────────────────────────────────────────────────┘`
   },
   {
      command: 'echo "Machine Learning is my passion 🧠" | figlet',
      result: ` 
      
      
      

    },
    {
  command: 'neofetch',
  result: `            .-/+oossssoo+/-.              hussein@ai-loubani
        \`:+ssssssssssssssssss+:\`           ------------------------
      -+ssssssssssssssssssyyssss+-         OS: AI Researcher 3.0
    .ossssssssssssssssss/   /ossssso.      Host: UTBM / CIAD Lab
   /sssssssssssssssssso/     /sssssss/     Kernel: Brain 9000X
  +sssssssssssssssssss/       /ssssssso    Uptime: 25 years
 :ssssssssssssssssssss\\       /sssssssss:  Packages: PyTorch, CGAL, C++, Python
 +ssssssssssssssssssssso\\     /sssssssss+  Shell: Vision Terminal 2.3
 +sssssssssssssssssssssssooosssssssssss+  Resolution: 3D Mesh / LoD 2.3
 /ssssssssssssssssssssssssssssssssssssso  DE: Robotics & Perception
 .osssssssssssssssssssssssssssssssssssso  WM: Autonomous Navigation
  -+sssssssssssssssssssssssssssssssss+-   Terminal: SLAM Shell
   \\\\ossssssssssssssssssssssssssssso/     CPU: Deep Neural Cortex
    \`.+ossssssssssssssssssssssssso+.\'      Memory: 2PB Virtual Worlds
      \`-/+oossssssssssssssssoo+/-\`         Skills: [██████████] 98%
        `
}

  ];
  
  return (
    <RetroSection 
      id="console"
      title="TERMINAL"
      titleColor={COLORS.hivePrimary}
      background={COLORS.hiveDarkBg}
      gridColor={COLORS.hivePrimary}
      gridOpacity="0.05"
    >
      <TerminalContainer>
        <Terminal 
          commands={commandsData}
          title="hussein-loubani@machine-learrning ~ $"
        />
      </TerminalContainer>
    </RetroSection>
  );
};

export default Console;
