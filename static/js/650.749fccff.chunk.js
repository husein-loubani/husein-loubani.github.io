"use strict";(self.webpackChunkhusein_loubani_github_io=self.webpackChunkhusein_loubani_github_io||[]).push([[650,797],{3650:(e,t,i)=>{i.r(t),i.d(t,{default:()=>C});var n=i(5043),o=i(6867),a=i(7200),r=i(595),s=i(5843),l=i(5253),d=i(6797),p=i(3549),c=i(579);const g=e=>{e=e.replace("#","");return`${parseInt(e.substring(0,2),16)}, ${parseInt(e.substring(2,4),16)}, ${parseInt(e.substring(4,6),16)}`},m=o.i7`
  0%, 100% { opacity: 0.9; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
`,h=o.Ay.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  padding: 60px 0;
  overflow: visible;
  z-index: 10;
`,b=o.Ay.div`
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
`,u=(0,o.Ay)(a.P.div)`
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
`,x=(0,o.Ay)(a.P.div)`
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
`,f=o.Ay.div`
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
`,y=o.Ay.div`
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
`,v=o.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
`,k=o.Ay.button`
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
`,w=[{id:1,year:2025,company:"Turing College",logo:"https://media.licdn.com/dms/image/v2/D4D0BAQHDkx6KvO4mXQ/company-logo_200_200/B4DZY6cXNWHAAI-/0/1744737236278/turingcollege2_logo?e=1770854400&v=beta&t=SGZA1S_iAQr3kKb7vrFG_AZH5EKUrhZT4Vffpy44xOg",logoBackground:"#808080",bgColorRGB:g("#808080"),bgPattern:"radial-gradient(circle at 90% 10%, rgba(24, 119, 242, 0.08), transparent 30%)",title:"Data Science & AI Engineering",dateRange:"September 2025 - Present Lithuania - Online",descriptionPoints:["Full Scholarship Recipient","Attending a 16-month professional program focused on real-world AI applications, data science workflows, and career readiness, with a strong emphasis on hands-on projects and mentorship by industry experts.","Core coursework: Data Wrangling, Machine learning, Deep learning, model evaluation, and production workflows","Specializations: Computer Vision, Natural Language Processing (NLP), and AI engineering for LLM application development","AI engineering track: Prompt engineering, APIs (OpenAI, Anthropic, Gemini, Llama), and RAG pipelines with vector DBs (ChromaDB) via LangChain and LangGraph","Projects: 40+ hands-on projects, and a capstone tackling a real client\u2019s business challenge, and delivering an end-to-end LLM-powered application with agents and memory, plus a shareable demo (Gradio)"," Support: One-on-one mentorship, regular standups, expert reviews, peer feedback, and a strong community for continuous progress"],technologies:["Data Science","Big Data Analysis","Data Visualization","Statistics & Probabilities","PostgreSQL","Machine Learning","Scikit-Learn","NLP","RAG","LLM","AI Agents","Git","Docker","SQL"]},{id:2,year:2023,company:"UTBM",logo:"https://media.licdn.com/dms/image/v2/D4E0BAQFIjRLAaKha-w/company-logo_200_200/company-logo_200_200/0/1731418743765/universite_de_technologie_de_belfort_montbeliard_logo?e=1770854400&v=beta&t=kS0ockP7vdKQaqAsgCvqtEpO4MtUBjkwy8ZN8RcGazM",logoBackground:"#89CFF0",bgColorRGB:g("#89CFF0"),bgPattern:"radial-gradient(circle at 90% 10%, rgba(24, 119, 242, 0.08), transparent 30%)",title:"PhD - Computer Science",dateRange:"December 2023 - Present Montb\xe9laird, France - Onsite",descriptionPoints:["Thesis Subject: Generating virtual environments for the training of autonomous vehicles.","Research on generating virtual environments and 3D city models for autonomous driving training and evaluation.","Designed an end-to-end pipeline for 2D/3D alignment, reconstruction, and semantic enrichment from multi-modal data.","Built reproducible experiments and evaluation protocols for model quality, alignment accuracy, and robustness."],technologies:["Computer Vision","Autonomous Vehicle","Robot Navigation","SLAM","Autonomous Vehicles","3D Reconstruction","Deep Learning","Point Clouds","LiDAR","Self Learning","Project Management"]},{id:3,year:2025,company:"University of Oxford",logo:"https://media.licdn.com/dms/image/v2/D4E0BAQGnc4qXLbE8Sg/company-logo_200_200/company-logo_200_200/0/1709206435851/oxforduni_logo?e=1770854400&v=beta&t=ZKroQwCqEXi1WPxo57eTODENSTfpzxZkUS8XUpoahFU",logoBackground:"#00008B",bgColorRGB:g("#00008B"),bgPattern:"linear-gradient(135deg, rgba(213, 43, 30, 0.07) 0%, transparent 70%)",title:"Summer School - Representation learning & Generative AI",dateRange:"July 2025 Oxford, United Kingdom - Onsite",descriptionPoints:["Attended the Oxford Machine Learning Summer School (OxML 2025), specifically the MLx module on Representation Learning & Generative AI. This program brings together global researchers, industry experts, and practitioners to explore cutting-edge advances in modern machine learning.","Core Topics: Multi-modal representation learning, computer vision, large language models (LLMs), geometrical deep learning, generative AI systems, reinforcement learning, AI alignment and safety","Expert Faculty: Sessions led by top researchers from the University of Oxford, UCL, University of Amsterdam, Google DeepMind, and Meta AI","Program Highlights: Hands-on workshops, interactive lectures, and discussions on the scientific and ethical challenges of deploying AI in real-world settings","This immersive program is designed to deepen expertise in the theory and practice of advanced machine learning methods, with a focus on building next-generation AI systems in a responsible and effective manner."],technologies:["Generative AI","LLM","Transformers","Generative Modeling","Deep Learning"]},{id:4,year:2024,company:"Eindhoven University of Technology",logo:"https://media.licdn.com/dms/image/v2/D4E0BAQHMbGGFMxd-RQ/company-logo_200_200/B4EZncpxfyHgAI-/0/1760343562663/eindhoven_university_of_technology_logo?e=1770854400&v=beta&t=e6z5bh0hltWvywwks7hL9LDce65A1xYXLBH_HZESzOM",logoBackground:"#ffA500",bgColorRGB:g("#ffA500"),bgPattern:"repeating-linear-gradient(to right, rgba(85, 85, 85, 0.02), rgba(85, 85, 85, 0.02) 1px, transparent 1px, transparent 30px)",title:"Summer School - Generative Modeling",dateRange:"June 2024 Eindhoven, Netherlands - Onsite",descriptionPoints:["Participated in the Employment Hub Program, aimed at supporting financially vulnerable Lebanese youth through skill-building and paid internships","Completed comprehensive training in time management, teamwork, problem-solving, and communication, enhancing employability skills.","Collaborated with mentors to receive personalized guidance, fostering both personal and professional development.","Engaged in projects addressing social challenges, applying newly acquired skills in practical settings.","Balanced remote and in-person collaboration, adapting to hybrid work environments effectively.","Contributed to initiatives designed to improve livelihoods and promote sustainable futures for disadvantaged communities."],technologies:["Generative Modeling","Diffusion Models","Transformers","Generative AI","Machine Learning"]},{id:5,year:2021,company:"Universit\xe9 Bourgogne Europe",logo:"https://media.licdn.com/dms/image/v2/D4E0BAQGa3yFcS-8EIg/company-logo_200_200/company-logo_200_200/0/1736179433355/universite_bourgogne_europe_logo?e=1770854400&v=beta&t=RQWEb3i42CEQsqYSxMexbqvTw0Cnhk6_YaVhNdvx4pk",logoBackground:"##FF0000",bgColorRGB:g("#FF0000"),bgPattern:"radial-gradient(circle at 90% 90%, rgba(255, 153, 0, 0.08), transparent 40%)",title:"MSc - Computer Vision & Robotics",dateRange:"September 2021 - July 2023 Le Creusot, France - Onsite",descriptionPoints:["Completed the VIBOT program, a specialized Master's focusing on the integration of computer vision and robotics.","Signal and Image Processing: Studied software and hardware aspects of signal and image processing.\u200b","Computer Vision Techniques: Explored compression, segmentation, real-time processing, shape recognition, and 3D vision methodologies.\u200b","Robotics: Covered fundamentals, control systems, and programming for robot autonomy and intelligence.\u200b","Medical Imaging: Examined biological bases and various imaging modalities, including infrared, X-ray, and ultrasound.\u200b","Research Training: Engaged in a research training period, applying acquired knowledge to practical projects.\u200b","This program equipped me with comprehensive skills in vision and robotics, preparing me for advanced roles in research and industry."],technologies:["Computer Vision","Robotics","ROS","OpenCV","Python","Pattern Recognition","Multi Sensor Fusion"]},{id:6,year:2018,company:"Lebanese International University",logo:"https://media.licdn.com/dms/image/v2/C4E0BAQFbRkjXMVFFmQ/company-logo_200_200/company-logo_200_200/0/1631310507909?e=1770854400&v=beta&t=KZ6c-Imkb6ioiiw6iH-jxFfxP0j5VWOX8ZLTtFaqoLc",logoBackground:"##00FF00",bgColorRGB:g("##00FF00"),bgPattern:"radial-gradient(circle at 90% 90%, rgba(255, 153, 0, 0.08), transparent 40%)",title:"BSc - Computer Engineering",dateRange:"September 2018 - July 2021 Beirut, Lebanon - Onsite",descriptionPoints:["Completed a rigorous engineering program, blending theoretical knowledge and practical training in both hardware and software systems, with a strong focus on embedded systems, digital design, and networked technologies.","Built a strong foundation in mathematics, physics, and statistics, supporting analytical thinking and systems-level problem solving.\u200b","Gained hands-on experience in micro-controller programming, digital circuit design, and signal processing through lab-based courses and simulation tools.\u200b","Developed software engineering skills through projects involving object-oriented programming, web and mobile app development, and database systems.","\u200bApplied engineering principles in real-world scenarios during a capstone project, integrating embedded hardware with software to address practical challenges.","Strengthened communication, project planning, and teamwork abilities through coursework in engineering ethics, economics, and technical writing.\u200b"],technologies:["Micro-controllers","MySQL","Mobile Application Development","Web Development","JSON","JavaScript","C/C++","Oracle","Raspberry Pi","Arduino"]}],C=()=>{const[e,t]=(0,n.useState)(null),{scrollYProgress:i}=(0,r.L)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.A,{id:"education",title:"Education",titleColor:"#3182CE",gridColor:"#3182CE",gridOpacity:"100s",className:"education-section",children:(0,c.jsx)(s.pL,{threshold:.1,triggerOnce:!0,children:e=>{let{ref:i,inView:n}=e;return(0,c.jsxs)(h,{ref:i,children:[(0,c.jsx)(b,{}),(0,c.jsxs)(u,{top:"17%",initial:{opacity:0,x:-20},animate:n?{opacity:1,x:0}:{},transition:{duration:.4,ease:"easeOut"},className:"year-marker",children:[(0,c.jsx)("span",{className:"desktop-year",children:"2024"}),(0,c.jsx)("span",{className:"mobile-year",children:"24"})]}),(0,c.jsxs)(u,{top:"36%",initial:{opacity:0,x:-20},animate:n?{opacity:1,x:0}:{},transition:{duration:.4,delay:.15,ease:"easeOut"},className:"year-marker",children:[(0,c.jsx)("span",{className:"desktop-year",children:"2023"}),(0,c.jsx)("span",{className:"mobile-year",children:"24"})]}),(0,c.jsxs)(u,{top:"60%",initial:{opacity:0,x:-20},animate:n?{opacity:1,x:0}:{},transition:{duration:.4,delay:.3,ease:"easeOut"},className:"year-marker",children:[(0,c.jsx)("span",{className:"desktop-year",children:"2021"}),(0,c.jsx)("span",{className:"mobile-year",children:"22"})]}),(0,c.jsxs)(u,{top:"85%",initial:{opacity:0,x:-20},animate:n?{opacity:1,x:0}:{},transition:{duration:.4,delay:.45,ease:"easeOut"},className:"year-marker",children:[(0,c.jsx)("span",{className:"desktop-year",children:"2021"}),(0,c.jsx)("span",{className:"mobile-year",children:"21"})]}),w.map(((e,i)=>(0,c.jsxs)(x,{accentColor:e.logoBackground,bgColorRGB:e.bgColorRGB,bgPattern:e.bgPattern,initial:{opacity:0,x:30},animate:n?{opacity:1,x:0,transition:{duration:.5,delay:.2*i,ease:"easeOut"}}:{},onMouseEnter:()=>t(e.id),onMouseLeave:()=>t(null),children:[(0,c.jsx)("div",{className:"company-pattern"}),(0,c.jsx)("div",{className:"timeline-dot"}),(0,c.jsxs)(f,{logoBackground:e.logoBackground,children:[(0,c.jsx)("div",{className:"company-logo",children:(0,c.jsx)("img",{src:e.logo,alt:`${e.company} logo`,style:"Apple"===e.company?{width:"50%",height:"50%"}:{}})}),(0,c.jsx)("h3",{className:"company-name",children:e.company}),(0,c.jsx)("h4",{className:"job-title",children:e.title}),(0,c.jsx)("div",{className:"date-range",children:e.dateRange})]}),(0,c.jsxs)(y,{children:[(0,c.jsx)("div",{className:"job-description",children:e.descriptionPoints&&e.descriptionPoints.length>0?(0,c.jsx)("ul",{children:e.descriptionPoints.map(((e,t)=>(0,c.jsx)("li",{children:e},t)))}):(0,c.jsx)("p",{children:e.description||"No description available"})}),(0,c.jsx)(v,{children:e.technologies.map(((t,i)=>(0,c.jsx)(k,{companyColor:e.bgColorRGB,onClick:e=>e.preventDefault(),children:t},i)))})]})]},e.id)))]})}})}),(0,c.jsx)(d.default,{})]})}},5253:(e,t,i)=>{i.d(t,{A:()=>b});i(5043);var n=i(6867),o=i(7200),a=i(5843),r=i(3549),s=i(579);n.i7`
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
`;const l=n.i7`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`,d=n.Ay.section`
  padding: 8rem 0;
  position: relative;
  overflow: visible;
  
  /* Section connectors removed */
`,p=n.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 20;
`,c=n.i7`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`,g=(0,n.Ay)(o.P.h2)`
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
`,m=(0,n.Ay)(o.P.div)`
  position: relative;
  z-index: 2;
`,h=n.Ay.div`
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
`,b=(n.Ay.div`
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
`,e=>{let{title:t,children:i,background:n,titleColor:o,underlineColor:r,underlineSecondary:l,glowColor:c,gridColor:b,gridOpacity:u,id:x,className:f,...y}=e;return(0,s.jsxs)(d,{id:x,background:n,className:f||"",...y,children:[(0,s.jsx)(h,{color:b,opacity:u}),(0,s.jsx)(p,{children:(0,s.jsx)(a.pL,{threshold:.2,triggerOnce:!0,children:e=>{let{ref:n,inView:a}=e;return(0,s.jsxs)(s.Fragment,{children:[t&&(0,s.jsxs)(g,{ref:n,color:o,"data-text":t,initial:{opacity:0,y:-20},animate:a?{opacity:1,y:0}:{},transition:{duration:.8,type:"spring",stiffness:100},className:"section-title",children:[(0,s.jsx)("span",{"data-text":t,children:t}),t]}),(0,s.jsx)(m,{initial:{opacity:0,y:30},animate:a?{opacity:1,y:0}:{},transition:{duration:.8,delay:.2,type:"spring",stiffness:80},children:i})]})}})})]})})},5843:(e,t,i)=>{i.d(t,{pL:()=>g});var n=i(5043),o=Object.defineProperty,a=(e,t,i)=>((e,t,i)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i)(e,"symbol"!==typeof t?t+"":t,i),r=new Map,s=new WeakMap,l=0,d=void 0;function p(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(i=e.root,i?(s.has(i)||(l+=1,s.set(i,l.toString())),s.get(i)):"0"):e[t]}`;var i})).toString()}function c(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:d;if("undefined"===typeof window.IntersectionObserver&&void 0!==n){const o=e.getBoundingClientRect();return t(n,{isIntersecting:n,target:e,intersectionRatio:"number"===typeof i.threshold?i.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}const{id:o,observer:a,elements:s}=function(e){const t=p(e);let i=r.get(t);if(!i){const n=new Map;let o;const a=new IntersectionObserver((t=>{t.forEach((t=>{var i;const a=t.isIntersecting&&o.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=a),null==(i=n.get(t.target))||i.forEach((e=>{e(a,t)}))}))}),e);o=a.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:t,observer:a,elements:n},r.set(t,i)}return i}(i),l=s.get(e)||[];return s.has(e)||s.set(e,l),l.push(t),a.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(s.delete(e),a.unobserve(e)),0===s.size&&(a.disconnect(),r.delete(o))}}var g=class extends n.Component{constructor(e){super(e),a(this,"node",null),a(this,"_unobserveCb",null),a(this,"handleNode",(e=>{this.node&&(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()})),a(this,"handleChange",((e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),function(e){return"function"!==typeof e.children}(this.props)||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)})),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:i,trackVisibility:n,delay:o,fallbackInView:a}=this.props;this._unobserveCb=c(this.node,this.handleChange,{threshold:e,root:t,rootMargin:i,trackVisibility:n,delay:o},a)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if("function"===typeof e){const{inView:t,entry:i}=this.state;return e({inView:t,entry:i,ref:this.handleNode})}const{as:t,triggerOnce:i,threshold:o,root:a,rootMargin:r,onChange:s,skip:l,trackVisibility:d,delay:p,initialInView:c,fallbackInView:g,...m}=this.props;return n.createElement(t||"div",{ref:this.handleNode,...m},e)}}},6797:(e,t,i)=>{i.r(t),i.d(t,{default:()=>b});i(5043);var n=i(6867),o=i(7200),a=i(7805),r=i(3549),s=i(8860),l=i(4966),d=i(2127),p=i(5369),c=i(579);const g=(0,n.Ay)(o.P.div)`
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
`,m=n.Ay.div`
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
`,h=[{text:"Artificial Intelligence",icon:(0,c.jsx)(s.idR,{}),blink:!0},{text:"Computer Vision",icon:(0,c.jsx)(l.xlD,{}),blink:!0},{text:"Machine Learning",icon:(0,c.jsx)(a.EYW,{}),blink:!0},{text:"Research",icon:(0,c.jsx)(s.S4d,{}),blink:!0},{text:"Autonomous Driving",icon:(0,c.jsx)(a.T9A,{}),blink:!0},{text:"Robotics",icon:(0,c.jsx)(p.y8Q,{}),blink:!0},{text:"3D Reconstruction",icon:(0,c.jsx)(d.uxf,{}),blink:!0},{text:"Data Science",blink:!1,icon:(0,c.jsx)(a.I1_,{}),blink:!0},{text:"C/C++",blink:!1,icon:(0,c.jsx)(a.m4U,{}),blink:!0},{text:"Python",blink:!1,icon:(0,c.jsx)(a.m4U,{}),blink:!0},{text:"JAVA",blink:!1,icon:(0,c.jsx)(a.m4U,{}),blink:!0},{text:"TensorFlow",blink:!1,icon:(0,c.jsx)(a.m4U,{}),blink:!0},{text:"PyTorch",blink:!1,icon:(0,c.jsx)(a.m4U,{}),blink:!0},{text:"Natural Language Processing",blink:!0,icon:(0,c.jsx)(a.Wwx,{}),blink:!0},{text:"SQL Databases",blink:!1,icon:(0,c.jsx)(a.Wwx,{}),blink:!0}],b=e=>{let{items:t=h,className:i}=e;return(0,c.jsx)(g,{className:i,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:(0,c.jsxs)(m,{children:[t.map(((e,t)=>(0,c.jsxs)("span",{className:e.blink?"blink":"",children:[e.icon," ",e.text]},t))),t.map(((e,t)=>(0,c.jsxs)("span",{className:e.blink?"blink":"",children:[e.icon," ",e.text]},`repeat-${t}`)))]})})}}}]);
//# sourceMappingURL=650.749fccff.chunk.js.map