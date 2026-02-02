"use strict";(self.webpackChunkhusein_loubani_github_io=self.webpackChunkhusein_loubani_github_io||[]).push([[670,797],{3670:(e,t,i)=>{i.r(t),i.d(t,{default:()=>C});var o=i(5043),n=i(6867),a=i(7200),r=i(595),s=i(5843),l=i(5253),d=i(6797),p=i(3549),c=i(579);const g=e=>{e=e.replace("#","");return`${parseInt(e.substring(0,2),16)}, ${parseInt(e.substring(2,4),16)}, ${parseInt(e.substring(4,6),16)}`},m=n.i7`
  0%, 100% { opacity: 0.9; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
`,b=n.Ay.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 60px 0;
  overflow: visible;
  z-index: 10;
`,h=n.Ay.div`
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
    animation: ${m} 3s infinite ease-in-out;
  }
  
  @media (max-width: 768px) {
    left: -47px; /* Aligned with left blue connector line */
  }
  
  /* Hide on very small screens */
  @media (max-width: 430px) {
    display: none;
  }
`,x=(0,n.Ay)(a.P.div)`
  position: absolute;
  left: -15px;
  background: rgba(49, 130, 206, 0.9);
  color: white;
  padding: 6px 14px;
  border-radius: 16px;
  font-family: ${p.pQ.mono};
  font-weight: 500;
  font-size: 14px;
  top: ${e=>e.top||"0"};
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
`,u=(0,n.Ay)(a.P.div)`
  position: relative;
  background: ${e=>`linear-gradient(120deg, rgba(22, 22, 26, 0.9) 0%, rgba(${e.bgColorRGB||"22, 22, 26"}, 0.06) 100%)`};
  border-radius: 16px;
  padding: 28px;
  margin: 0 0 70px 70px; /* Moved further right to avoid interference with year buttons */
  width: calc(100% - 100px);
  min-height: 160px; /* Slightly reduced to fit all cards comfortably */
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15), 0 0 30px rgba(${e=>e.bgColorRGB||"0, 0, 0"}, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid ${e=>`rgba(${e.bgColorRGB||"255, 255, 255"}, 0.1)`};
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
    background: ${e=>e.bgPattern||"none"};
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
                0 0 40px rgba(${e=>e.bgColorRGB||"0, 0, 0"}, 0.1),
                0 0 20px rgba(${e=>e.bgColorRGB||"0, 0, 0"}, 0.07),
                0 0 5px ${p.lm.retroPrimary}30;
    border-color: rgba(255, 255, 255, 0.15);
    
    .company-pattern {
      opacity: 0.9;
    }
    
    .timeline-dot {
      transform: translateY(-50%) scale(1.3);
      box-shadow: 0 0 12px ${e=>e.accentColor||"#3182CE"},
                  0 0 5px ${p.lm.retroPrimary}50;
      animation: dotPulse 1.5s infinite alternate;
    }
  }
  
  @keyframes dotPulse {
    0% {
      box-shadow: 0 0 5px ${e=>e.accentColor||"#3182CE"};
    }
    100% {
      box-shadow: 0 0 12px ${e=>e.accentColor||"#3182CE"},
                  0 0 5px ${p.lm.retroPrimary}50;
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
    background: ${e=>e.accentColor||"#3182CE"};
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
`,f=n.Ay.div`
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
    font-family: ${p.pQ.title};
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
      background-color: ${e=>e.logoBackground||"#3182CE"};
    }
  }
  
  /* Modern job title */
  .job-title {
    font-size: 16px;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 18px;
    font-weight: 500;
    font-family: ${p.pQ.accent};
    position: relative;
    display: inline-block;
    padding: 5px 14px;
    background: ${e=>`rgba(${g(e.logoBackground)}, 0.12)`||"rgba(49, 130, 206, 0.1)"};
    border-radius: 6px;
    letter-spacing: 0.3px;
    border: 1px solid ${e=>`rgba(${g(e.logoBackground)}, 0.2)`||"rgba(49, 130, 206, 0.2)"};
    
    /* Subtle glow effect */
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${e=>e.logoBackground||"#3182CE"};
      opacity: 0.08;
      filter: blur(10px);
      border-radius: 6px;
      z-index: -1;
    }
    
    /* Subtle hover */
    transition: all 0.3s ease;
    &:hover {
      background: ${e=>`rgba(${g(e.logoBackground)}, 0.18)`||"rgba(49, 130, 206, 0.15)"};
      transform: translateY(-2px);
    }
  }
  
  /* Clean date range */
  .date-range {
    font-family: ${p.pQ.mono};
    font-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 12px;
  }
`,y=n.Ay.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 2;
  
  /* Clean, readable job description */
  .job-description {
    font-family: ${p.pQ.primary};
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
`,v=n.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
`,k=n.Ay.button`
  font-size: 0.7rem;
  padding: 0.35rem 0.75rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-family: ${p.pQ.accent};
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
`,w=[{id:1,year:2023,company:"UTBM",logo:"https://media.licdn.com/dms/image/v2/D4E0BAQFIjRLAaKha-w/company-logo_200_200/company-logo_200_200/0/1731418743765/universite_de_technologie_de_belfort_montbeliard_logo?e=1770854400&v=beta&t=kS0ockP7vdKQaqAsgCvqtEpO4MtUBjkwy8ZN8RcGazM",logoBackground:"#89CFF0",bgColorRGB:g("#89CFF0"),bgPattern:"radial-gradient(circle at 90% 10%, rgba(24, 119, 242, 0.08), transparent 30%)",title:"Teaching Fellow",dateRange:"December 2024 - Present Belfort, France - Onsite",descriptionPoints:["Subjects Taught : Image Processing, Mobile Robotics, Vision-based control"],technologies:["Higher Education Teaching","Instructional Design","Learning Assessment","Active Learning","Presentation Skills"]},{id:2,year:2023,company:"CIAD Lab",logo:"https://media.licdn.com/dms/image/v2/C4D0BAQEGX5W2c8VSGQ/company-logo_200_200/company-logo_200_200/0/1630516829513/ciad_lab_logo?e=1770854400&v=beta&t=2x9QnscQ8qbwKpl-4My3dzF7QtZ5-KZkTt8woRRD89c",logoBackground:"#28a745",bgColorRGB:g("#28a745"),bgPattern:"radial-gradient(circle at 90% 10%, rgba(24, 119, 242, 0.08), transparent 30%)",title:"Doctoral Researcher",dateRange:"December 2023 - Present Montb\xe9laird, France - Onsite",descriptionPoints:["Thesis Subject: Generating virtual environments for the training of autonomous vehicles.","Research on generating virtual environments and 3D city models for autonomous driving training and evaluation.","Designed an end-to-end pipeline for 2D/3D alignment, reconstruction, and semantic enrichment from multi-modal data.","Built reproducible experiments and evaluation protocols for model quality, alignment accuracy, and robustness."],technologies:["Computer Vision","Visual Localisation","Robot Navigation","SLAM","Autonomous Vehicles","3D Reconstruction","Deep Learning","Point Clouds","LiDAR","Self Learning","Project Management"]},{id:3,year:2023,company:"ImViA Lab",logo:"https://media.licdn.com/dms/image/v2/C560BAQGfc7VmEi2b-g/company-logo_200_200/company-logo_200_200/0/1630599548773?e=1770854400&v=beta&t=BYD7iQ-91OWtPNvoFZhvFPNaR9daDirft-uD-7h2_Uc",logoBackground:"#FFA500",bgColorRGB:g("#FFA500"),bgPattern:"linear-gradient(135deg, rgba(213, 43, 30, 0.07) 0%, transparent 70%)",title:"Computer Vision & Robotics Engineer",dateRange:"February 2023 - July 2023 Le Creusot, France - Onsite",descriptionPoints:["As part of my Master\u2019s thesis at ImViA Lab, I worked on visuo-tactile perception for in and on-hand robotic manipulation, focusing on detecting object slippage using the Franka Emika 3 Panda robot","Developed a visuo-tactile fusion pipeline using LSTM and GRU-based RNN models to estimate object pose during dynamic manipulation, even under occlusion.","Designed and executed pick-and-place experiments in simulation using PyBullet and transitioned models to a real-world robotic platform.","Integrated tactile sensing with vision data to detect object slippage during actions like rotation, sliding, and flipping.","Built pose estimation and control modules in Python and implemented the complete system on ROS using the Franka Emika 3 Panda arm.","Evaluated performance through quantitative pose error metrics and object visibility-based visualization tools."],technologies:["Computer Vision","Tactile Sensing","Pose Estimation","Robotics Manipulation","TensorFlow","OpenCV","PyTorch","ROS","LSTM","GRU","PyBullet","Control Systems"]},{id:4,year:2021,company:"The Nawaya Network ",logo:"https://media.licdn.com/dms/image/v2/C4E0BAQF4SU5r0b-0pg/company-logo_200_200/company-logo_200_200/0/1631313630138?e=1770854400&v=beta&t=olbs5cQaPPPbeml_rzK4SOi87fKzUs1a-k3ZQm0ND_g",logoBackground:"#800080",bgColorRGB:g("#800080"),bgPattern:"repeating-linear-gradient(to right, rgba(85, 85, 85, 0.02), rgba(85, 85, 85, 0.02) 1px, transparent 1px, transparent 30px)",title:"Soft Skills and Employability Program",dateRange:"March 2021 - June 2021 Beirut, Lebanon - Hybrid",descriptionPoints:["Participated in the Employment Hub Program, aimed at supporting financially vulnerable Lebanese youth through skill-building and paid internships","Completed comprehensive training in time management, teamwork, problem-solving, and communication, enhancing employability skills.","Collaborated with mentors to receive personalized guidance, fostering both personal and professional development.","Engaged in projects addressing social challenges, applying newly acquired skills in practical settings.","Balanced remote and in-person collaboration, adapting to hybrid work environments effectively.","Contributed to initiatives designed to improve livelihoods and promote sustainable futures for disadvantaged communities."],technologies:["Communication Tools","Project Management","Remote Collaboration","Teamwork","Time Management","Creative Problem Solving","Critical Thinking","Presentation Skills"]},{id:5,year:2021,company:"Career Orientation and Readiness",logo:"https://media.licdn.com/dms/image/v2/C4D0BAQGrTtmPRMXmMw/company-logo_200_200/company-logo_200_200/0/1640849409428?e=1770854400&v=beta&t=mRrD3Au11P5JFf2Tk22vKs1jUg2hZtYD_oFBrnGfLrQ",logoBackground:"#0000FF",bgColorRGB:g("#0000FF"),bgPattern:"radial-gradient(circle at 90% 90%, rgba(255, 153, 0, 0.08), transparent 40%)",title:"Web & Mobile App Developer",dateRange:"January 2021 - March 2021 Beirut, Lebanon - Hybrid",descriptionPoints:["During my internship at Career Orientation and Readiness, I contributed to the development of web and mobile applications, enhancing my technical skills and project experience","Developed responsive web interfaces using HTML5, CSS3, and JavaScript, ensuring cross-browser compatibility and user-friendly design.","Built dynamic single-page applications with React and Angular, improving user engagement and performance.","Assisted in the development of mobile applications for both iOS and Android platforms, utilizing platform-specific technologies.","Provided technical consulting to internal teams, offering insights on best practices and innovative solutions for project challenges.","Gained experience in version control systems and agile development methodologies, contributing to efficient workflow and team coordination."],technologies:["HTML5","CSS3","JavaScript","React","Angular","Mobile App Development","iOS","Android","Version Control (Git)","Agile Methodologies","Responsive Design"]}],C=()=>{const[e,t]=(0,o.useState)(null),{scrollYProgress:i}=(0,r.L)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.A,{id:"experience",title:"Experience",titleColor:"#3182CE",gridColor:"#3182CE",gridOpacity:"100s",className:"experience-section",children:(0,c.jsx)(s.pL,{threshold:.1,triggerOnce:!0,children:e=>{let{ref:i,inView:o}=e;return(0,c.jsxs)(b,{ref:i,children:[(0,c.jsx)(h,{}),(0,c.jsxs)(x,{top:"17%",initial:{opacity:0,x:-20},animate:o?{opacity:1,x:0}:{},transition:{duration:.4,ease:"easeOut"},className:"year-marker",children:[(0,c.jsx)("span",{className:"desktop-year",children:"2024"}),(0,c.jsx)("span",{className:"mobile-year",children:"24"})]}),(0,c.jsxs)(x,{top:"36%",initial:{opacity:0,x:-20},animate:o?{opacity:1,x:0}:{},transition:{duration:.4,delay:.15,ease:"easeOut"},className:"year-marker",children:[(0,c.jsx)("span",{className:"desktop-year",children:"2023"}),(0,c.jsx)("span",{className:"mobile-year",children:"24"})]}),(0,c.jsxs)(x,{top:"60%",initial:{opacity:0,x:-20},animate:o?{opacity:1,x:0}:{},transition:{duration:.4,delay:.3,ease:"easeOut"},className:"year-marker",children:[(0,c.jsx)("span",{className:"desktop-year",children:"2021"}),(0,c.jsx)("span",{className:"mobile-year",children:"22"})]}),(0,c.jsxs)(x,{top:"85%",initial:{opacity:0,x:-20},animate:o?{opacity:1,x:0}:{},transition:{duration:.4,delay:.45,ease:"easeOut"},className:"year-marker",children:[(0,c.jsx)("span",{className:"desktop-year",children:"2021"}),(0,c.jsx)("span",{className:"mobile-year",children:"21"})]}),w.map(((e,i)=>(0,c.jsxs)(u,{accentColor:e.logoBackground,bgColorRGB:e.bgColorRGB,bgPattern:e.bgPattern,initial:{opacity:0,x:30},animate:o?{opacity:1,x:0,transition:{duration:.5,delay:.2*i,ease:"easeOut"}}:{},onMouseEnter:()=>t(e.id),onMouseLeave:()=>t(null),children:[(0,c.jsx)("div",{className:"company-pattern"}),(0,c.jsx)("div",{className:"timeline-dot"}),(0,c.jsxs)(f,{logoBackground:e.logoBackground,children:[(0,c.jsx)("div",{className:"company-logo",children:(0,c.jsx)("img",{src:e.logo,alt:`${e.company} logo`,style:"Apple"===e.company?{width:"50%",height:"50%"}:{}})}),(0,c.jsx)("h3",{className:"company-name",children:e.company}),(0,c.jsx)("h4",{className:"job-title",children:e.title}),(0,c.jsx)("div",{className:"date-range",children:e.dateRange})]}),(0,c.jsxs)(y,{children:[(0,c.jsx)("div",{className:"job-description",children:e.descriptionPoints&&e.descriptionPoints.length>0?(0,c.jsx)("ul",{children:e.descriptionPoints.map(((e,t)=>(0,c.jsx)("li",{children:e},t)))}):(0,c.jsx)("p",{children:e.description||"No description available"})}),(0,c.jsx)(v,{children:e.technologies.map(((t,i)=>(0,c.jsx)(k,{companyColor:e.bgColorRGB,onClick:e=>e.preventDefault(),children:t},i)))})]})]},e.id)))]})}})}),(0,c.jsx)(d.default,{})]})}},5253:(e,t,i)=>{i.d(t,{A:()=>h});i(5043);var o=i(6867),n=i(7200),a=i(5843),r=i(3549),s=i(579);o.i7`
  0%, 95% {
    clip: rect(0, 9999px, 2px, 0);
    transform: skew(0.2deg);
  }
  5%, 100% {
    clip: rect(0, 9999px, 2px, 0);
    transform: skew(0deg);
  }
  10% {
    clip: rect(0, 9999px, 2px, 0);
    transform: skew(-0.2deg);
  }
`;const l=o.i7`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`,d=o.Ay.section`
  padding: 8rem 0;
  position: relative;
  overflow: visible;
  
  /* Section connectors removed */
`,p=o.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 20;
`,c=o.i7`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`,g=(0,o.Ay)(n.P.h2)`
  font-family: ${r.pQ.title};
  font-size: 5.5rem; /* Larger size */
  font-weight: 900;
  color: ${r.lm.retroPrimary}; /* Main color */
  margin-bottom: 5rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  -webkit-text-stroke: 0; /* Remove stroke */
  
  /* Real graffiti 3D style with multiple layers */
  text-shadow: none; /* Remove glow */
  
  /* Three staggered shadows for real 3D depth */
  &:before, &:after {
    content: attr(data-text);
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  
  /* First shadow layer - blue */
  &:before {
    color: #3182CE; /* Blue */
    transform: translate(-8px, 8px);
    z-index: -2;
    transition: transform 0.3s ease;
  }
  
  /* Second shadow layer - red */
  &:after {
    color: #E53E3E; /* Red */
    transform: translate(-15px, 15px);
    z-index: -3;
    transition: transform 0.3s ease;
  }
  
  /* Create one more shadow for depth with an element */
  span {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    color: #000;
    transform: translate(-4px, 4px);
    z-index: -1;
    transition: transform 0.3s ease;
  }
  
  /* Slow up and down hover animation */
  animation: ${c} 8s ease-in-out infinite;
  
  /* No background clip, more authentic */
  background: none;
  
  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 480px) {
    font-size: 3.2rem;
  }
`,m=(0,o.Ay)(n.P.div)`
  position: relative;
  z-index: 2;
`,b=o.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    repeating-linear-gradient(
      45deg,
      ${e=>e.color||r.lm.retroPrimary}03 0px,
      ${e=>e.color||r.lm.retroPrimary}03 2px,
      transparent 2px,
      transparent 10px
    );
  z-index: 1;
  pointer-events: none;
  opacity: ${e=>e.opacity||"0.15"};
  
  /* More subtle diamond pattern */
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(45deg, ${e=>e.color||r.lm.retroPrimary}05 25%, transparent 25%),
      linear-gradient(-45deg, ${e=>e.color||r.lm.retroPrimary}05 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, ${e=>e.color||r.lm.retroPrimary}05 75%),
      linear-gradient(-45deg, transparent 75%, ${e=>e.color||r.lm.retroPrimary}05 75%);
    background-size: 60px 60px;
    background-position: 0 0, 0 30px, 30px -30px, -30px 0px;
    opacity: 0.3;
  }
`,h=(o.Ay.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background: ${r.lm.retroPrimary};
  border: 3px solid #000;
  z-index: 5;
  animation: ${l} 6s ease-in-out infinite;
  box-shadow: 4px 4px 0 rgba(0, 0, 0, 0.2);
  opacity: 0.6;
  
  &.square {
    right: 10%;
    top: 15%;
    transform: rotate(15deg);
  }
  
  &.circle {
    left: 8%;
    bottom: 20%;
    border-radius: 50%;
    animation-delay: 1s;
  }
  
  &.triangle {
    right: 15%;
    bottom: 15%;
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
    animation-delay: 2s;
  }
`,e=>{let{title:t,children:i,background:o,titleColor:n,underlineColor:r,underlineSecondary:l,glowColor:c,gridColor:h,gridOpacity:x,id:u,className:f,...y}=e;return(0,s.jsxs)(d,{id:u,background:o,className:f||"",...y,children:[(0,s.jsx)(b,{color:h,opacity:x}),(0,s.jsx)(p,{children:(0,s.jsx)(a.pL,{threshold:.2,triggerOnce:!0,children:e=>{let{ref:o,inView:a}=e;return(0,s.jsxs)(s.Fragment,{children:[t&&(0,s.jsxs)(g,{ref:o,color:n,"data-text":t,initial:{opacity:0,y:-20},animate:a?{opacity:1,y:0}:{},transition:{duration:.8,type:"spring",stiffness:100},className:"section-title",children:[(0,s.jsx)("span",{"data-text":t,children:t}),t]}),(0,s.jsx)(m,{initial:{opacity:0,y:30},animate:a?{opacity:1,y:0}:{},transition:{duration:.8,delay:.2,type:"spring",stiffness:80},children:i})]})}})})]})})},5843:(e,t,i)=>{i.d(t,{pL:()=>g});var o=i(5043),n=Object.defineProperty,a=(e,t,i)=>((e,t,i)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i)(e,"symbol"!==typeof t?t+"":t,i),r=new Map,s=new WeakMap,l=0,d=void 0;function p(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(i=e.root,i?(s.has(i)||(l+=1,s.set(i,l.toString())),s.get(i)):"0"):e[t]}`;var i})).toString()}function c(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:d;if("undefined"===typeof window.IntersectionObserver&&void 0!==o){const n=e.getBoundingClientRect();return t(o,{isIntersecting:o,target:e,intersectionRatio:"number"===typeof i.threshold?i.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}const{id:n,observer:a,elements:s}=function(e){const t=p(e);let i=r.get(t);if(!i){const o=new Map;let n;const a=new IntersectionObserver((t=>{t.forEach((t=>{var i;const a=t.isIntersecting&&n.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=a),null==(i=o.get(t.target))||i.forEach((e=>{e(a,t)}))}))}),e);n=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:t,observer:a,elements:o},r.set(t,i)}return i}(i),l=s.get(e)||[];return s.has(e)||s.set(e,l),l.push(t),a.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(s.delete(e),a.unobserve(e)),0===s.size&&(a.disconnect(),r.delete(n))}}var g=class extends o.Component{constructor(e){super(e),a(this,"node",null),a(this,"_unobserveCb",null),a(this,"handleNode",(e=>{this.node&&(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()})),a(this,"handleChange",((e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),function(e){return"function"!==typeof e.children}(this.props)||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)})),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:i,trackVisibility:o,delay:n,fallbackInView:a}=this.props;this._unobserveCb=c(this.node,this.handleChange,{threshold:e,root:t,rootMargin:i,trackVisibility:o,delay:n},a)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if("function"===typeof e){const{inView:t,entry:i}=this.state;return e({inView:t,entry:i,ref:this.handleNode})}const{as:t,triggerOnce:i,threshold:n,root:a,rootMargin:r,onChange:s,skip:l,trackVisibility:d,delay:p,initialInView:c,fallbackInView:g,...m}=this.props;return o.createElement(t||"div",{ref:this.handleNode,...m},e)}}},6797:(e,t,i)=>{i.r(t),i.d(t,{default:()=>h});i(5043);var o=i(6867),n=i(7200),a=i(7805),r=i(3549),s=i(8860),l=i(4966),d=i(2127),p=i(5369),c=i(579);const g=(0,o.Ay)(n.P.div)`
  position: relative;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  background-color: rgba(255, 255, 255, 0.80);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  padding: 12px 0;
  z-index: 30;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
  margin: 2rem 0;
  
  /* Regular margin on mobile */
  @media (max-width: 768px) {
    margin: 1.5rem 0;
    padding: 10px 0; /* Slightly smaller padding on mobile */
  }
  
  /* Gradient fade edges for smooth scroll */
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      linear-gradient(to right, 
        rgba(255, 255, 255, 1) 0%, 
        rgba(255, 255, 255, 0) 5%, 
        rgba(255, 255, 255, 0) 95%, 
        rgba(255, 255, 255, 1) 100%);
    z-index: 2;
    pointer-events: none;
  }
  
  /* Data line accent */
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      to right,
      #3182CE,
      #4299E1,
      #EC4899
    );
    opacity: 0.8;
  }
`,m=o.Ay.div`
  display: inline-block;
  animation: marquee 24s linear infinite;
  padding-left: 100%;
  font-family: ${r.pQ.mono};
  color: #0F0F0F;
  font-weight: 500;
  letter-spacing: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  
  @keyframes marquee {
    0% { transform: translate(0, 0); }
    100% { transform: translate(-100%, 0); }
  }
  
  span {
    margin: 0 20px;
    display: flex;
    align-items: center;
    transition: color 0.3s ease;
    
    svg {
      margin-right: 8px;
      color: #3182CE;
    }
    
    &:hover {
      color: #EC4899;
      
      svg {
        color: #EC4899;
      }
    }
  }
  
  /* Data flow indicator - subtle animation */
  .blink {
    position: relative;
    
    &:before {
      content: '';
      position: absolute;
      left: -8px;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 4px;
      background: #EC4899;
      border-radius: 50%;
      animation: dataPulse 2s infinite alternate;
    }
    
    @keyframes dataPulse {
      0% { transform: translateY(-50%) scale(1); opacity: 0.7; }
      100% { transform: translateY(-50%) scale(1.5); opacity: 0.3; }
    }
  }
`,b=[{text:"Artificial Intelligence",icon:(0,c.jsx)(s.idR,{}),blink:!0},{text:"Computer Vision",icon:(0,c.jsx)(l.xlD,{}),blink:!0},{text:"Machine Learning",icon:(0,c.jsx)(a.EYW,{}),blink:!0},{text:"Research",icon:(0,c.jsx)(s.S4d,{}),blink:!0},{text:"Autonomous Driving",icon:(0,c.jsx)(a.T9A,{}),blink:!0},{text:"Robotics",icon:(0,c.jsx)(p.y8Q,{}),blink:!0},{text:"3D Reconstruction",icon:(0,c.jsx)(d.uxf,{}),blink:!0},{text:"Data Science",blink:!1,icon:(0,c.jsx)(a.I1_,{}),blink:!0},{text:"C/C++",blink:!1,icon:(0,c.jsx)(a.m4U,{}),blink:!0},{text:"Python",blink:!1,icon:(0,c.jsx)(a.m4U,{}),blink:!0},{text:"JAVA",blink:!1,icon:(0,c.jsx)(a.m4U,{}),blink:!0},{text:"TensorFlow",blink:!1,icon:(0,c.jsx)(a.m4U,{}),blink:!0},{text:"PyTorch",blink:!1,icon:(0,c.jsx)(a.m4U,{}),blink:!0},{text:"Natural Language Processing",blink:!0,icon:(0,c.jsx)(a.Wwx,{}),blink:!0},{text:"SQL Databases",blink:!1,icon:(0,c.jsx)(a.Wwx,{}),blink:!0}],h=e=>{let{items:t=b,className:i}=e;return(0,c.jsx)(g,{className:i,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:(0,c.jsxs)(m,{children:[t.map(((e,t)=>(0,c.jsxs)("span",{className:e.blink?"blink":"",children:[e.icon," ",e.text]},t))),t.map(((e,t)=>(0,c.jsxs)("span",{className:e.blink?"blink":"",children:[e.icon," ",e.text]},`repeat-${t}`)))]})})}}}]);
//# sourceMappingURL=670.99328e7d.chunk.js.map