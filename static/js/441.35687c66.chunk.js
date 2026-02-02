"use strict";(self.webpackChunkhusein_loubani_github_io=self.webpackChunkhusein_loubani_github_io||[]).push([[441],{2441:(e,t,r)=>{r.r(t),r.d(t,{default:()=>b});var i=r(5043),n=r(6867),o=r(7200),s=r(3549),a=r(579);const l=(0,n.Ay)(o.P.div)`
  background-color: ${s.lm.retroDarkBg};
  border: 1px solid ${s.lm.retroPurple};
  border-radius: 0;
  position: relative;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
  margin: 2rem 0;
  font-family: ${s.pQ.mono};
  
  /* Pixelated corner effects */
  &:before {
    content: '';
    position: absolute;
    top: -2px;
    right: -2px;
    width: 15px;
    height: 15px;
    background: ${s.lm.retroDarkBg};
    border-left: 1px solid ${s.lm.retroPurple};
    border-bottom: 1px solid ${s.lm.retroPurple};
    clip-path: polygon(100% 0, 0 0, 100% 100%);
    z-index: 10;
  }
`,p=n.Ay.div`
  background: linear-gradient(90deg, 
    ${s.lm.retroPurple}80, 
    ${s.lm.retroTeal}80
  );
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 15px;
  position: relative;
  
  /* Pixelated texture */
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
    background-size: 3px 3px;
    opacity: 0.5;
  }
`,d=n.Ay.div`
  display: flex;
  gap: 8px;
  position: relative;
  z-index: 1;
  
  span {
    width: 12px;
    height: 12px;
    border-radius: 0;
    display: inline-block;
    position: relative;
    overflow: hidden;
    
    &:nth-child(1) {
      background: ${s.lm.retroPrimary};
    }
    
    &:nth-child(2) {
      background: ${s.lm.retroSecondary};
    }
    
    &:nth-child(3) {
      background: ${s.lm.retroGreen};
    }
    
    /* Add pixelated border */
    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border: 1px solid rgba(255, 255, 255, 0.3);
      box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
    }
  }
`,c=n.Ay.div`
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 14px;
  color: ${s.lm.white};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: ${s.pQ.secondary};
  text-shadow: 0 0 5px ${s.lm.retroPurple};
`,h=n.Ay.div`
  padding: 20px;
  font-size: 15px;
  line-height: 1.6;
  white-space: pre-wrap;
  max-height: 500px;
  overflow-y: auto;
  position: relative;
  
  /* Scanline effect removed */
  
  /* Styling for the blinking cursor */
  .cursor {
    display: inline-block;
    width: 10px;
    height: 18px;
    background: ${s.lm.retroTeal};
    margin-left: 2px;
    animation: blink 1s step-end infinite;
  }
  
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  
  .command {
    color: ${s.lm.retroTeal};
    font-weight: bold;
  }
  
  .path {
    color: ${s.lm.retroPrimary};
  }
  
  .prompt {
    color: ${s.lm.retroPurple};
  }
  
  .result {
    color: ${s.lm.white};
    margin: 0.5rem 0 1.5rem;
    opacity: 0.9;
  }
  
  .highlight {
    color: ${s.lm.retroSecondary};
    font-weight: bold;
  }
`,m=e=>{let{commands:t,title:r="terminal"}=e;const[n,o]=(0,i.useState)([]),[s,m]=(0,i.useState)(0),[u,g]=(0,i.useState)(0),[b,x]=(0,i.useState)(!0);return(0,i.useEffect)((()=>{if(0!==t.length&&s<t.length){const e=t[s];if(u<e.command.length){const e=setTimeout((()=>{g(u+1)}),50);return()=>clearTimeout(e)}{const t=setTimeout((()=>{o((t=>[...t,{...e,isTyping:!1,isComplete:!0}])),m(s+1),g(0)}),500);return()=>clearTimeout(t)}}}),[t,s,u]),(0,i.useEffect)((()=>{const e=setInterval((()=>{x((e=>!e))}),530);return()=>clearInterval(e)}),[]),(0,a.jsxs)(l,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.6},className:"terminal",children:[(0,a.jsxs)(p,{children:[(0,a.jsxs)(d,{children:[(0,a.jsx)("span",{}),(0,a.jsx)("span",{}),(0,a.jsx)("span",{})]}),(0,a.jsx)(c,{children:r})]}),(0,a.jsxs)(h,{children:[n.map(((e,t)=>(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"prompt",children:"\u03bb"})," ",(0,a.jsx)("span",{className:"path",children:"~/hussein-louabni"})," ",(0,a.jsx)("span",{className:"command",children:e.command})]}),e.isComplete&&(0,a.jsx)("div",{className:"result",children:e.result})]},t))),s<t.length&&(0,a.jsxs)("div",{children:[(0,a.jsx)("span",{className:"prompt",children:"\u03bb"})," ",(0,a.jsx)("span",{className:"path",children:"~/hussein-loubani"})," ",(0,a.jsx)("span",{className:"command",children:t[s].command.substring(0,u)}),b&&(0,a.jsx)("span",{className:"cursor"})]})]})]})};var u=r(5253);const g=n.Ay.div`
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
      ${s.lm.primary}30, 
      ${s.lm.accent}30, 
      ${s.lm.secondary}30
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
`,b=()=>{const e=[{command:"whoami",result:"Hussein Loubani, PhD Researcher in AI, Computer Vision & Autonomous Driving"},{command:"cat skills.json | jq",result:'{\n  "Programming": ["Python", "C++", "R", "Java", "JavaScript", "MATLAB", "SQL"],\n  "Frameworks": ["PyTorch", "TensorFlow", "OpenCV", "ROS", "Scikit-learn","NLP"],\n  "Domains": ["Computer Vision", "3D Reconstruction", "SLAM", "Autonomous Vehicles"],\n  "Data": ["Point Clouds", "Meshes", "Topography", "2D/3D Alignment", "Sensor Fusion"],\n  "Tools": ["ROS", "CGAL", "PCL", "Git", "PyBullet", "Gazebo", "CUDA", "Docker"]   \n}'},{command:"ls -la education/",result:"drwxr-xr-x  5 hloubani  phd  160 Dec 1 10:24 .\ndrwxr-xr-x 18 hloubani  phd  576 Dec 1 10:24 ..\n-rw-r--r--  1 hloubani  phd  302 Dec 1 10:24 PhD_UTBM_CIAD.md\n-rw-r--r--  1 hloubani  phd  286 Dec 1 10:24 MSc_ViBot_UBE.md\n-rw-r--r--  1 hloubani  phd  268 Dec 1 10:24 BSc_CEng_LIU.md\ndrwxr-xr-x  7 hloubani  phd  224 Dec 1 10:24 certifications/"},{command:"cat experience.json | jq | bat -l json",result:'\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n       \u2502 File: experience.json\n\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\n   1   \u2502 {\n   2   \u2502   "CIAD Lab": {\n   3   \u2502     "role": "PhD Researcher",\n   4   \u2502     "period": "2023-Present",\n   5   \u2502     "projects": ["Virtual Environments for Autonomous Vehicles Training"]\n   6   \u2502   },\n   7   \u2502   "ImViA Lab": {\n   8   \u2502     "role": "AI Vision & Robotics Engineer (Intern)",\n   9   \u2502     "period": "2023",\n  10   \u2502     "projects": ["Visuo-Tactile Perception", "Object Pose Estimation"]\n  11   \u2502   },\n  12   \u2502   "Career C&R": {\n  13   \u2502     "role": "Web & Mobile Developer (Intern)",\n  14   \u2502     "period": "2021",\n  15   \u2502     "projects": ["Cross-platform App Dev", "UI/UX Optimization"]\n  16   \u2502   }\n  17   \u2502 }'},{command:"contact --format=pretty",result:"\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Email    : Hussein_lobs@outlook.com                        \u2502\n\u2502 LinkedIn : linkedin.com/in/hussein-loubani                 \u2502\n\u2502 GitHub   : github.com/husein-loubani                       \u2502\n\u2502 Website  : husein-loubani.netlify.app                      \u2502\n\u2502 Scholar  : scholar.google.com/citations?user=4IiL4OEAAAAJ  \u2502\n\u2502 Phone    : +33 7 50 00 39 07                                \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518"},{command:"neofetch",result:" hussein@ai-loubani \\\n            ------------------------\n            OS: AI Researcher 3.0\n            Host: UTBM / CIAD Lab\n            Kernel: Brain 9000X\n            Uptime: 25 years\n            Packages: PyTorch, CGAL, C++, Python\n            Shell: Vision Terminal 2.3\n            Resolution: 3D Mesh / LoD 2.3\n            DE: Robotics & Perception\n            WM: Autonomous Navigation\n            Terminal: SLAM Shell\n            CPU: Deep Neural Cortex\n            Memory: 2PB Virtual Worlds\n            Skills: [\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588] 98%\n         "}];return(0,a.jsx)(u.A,{id:"console",title:"TERMINAL",titleColor:s.lm.hivePrimary,background:s.lm.hiveDarkBg,gridColor:s.lm.hivePrimary,gridOpacity:"0.05",children:(0,a.jsx)(g,{children:(0,a.jsx)(m,{commands:e,title:"hussein-loubani@machine-learrning ~ $"})})})}},5253:(e,t,r)=>{r.d(t,{A:()=>g});r(5043);var i=r(6867),n=r(7200),o=r(5843),s=r(3549),a=r(579);i.i7`
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
`;const l=i.i7`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`,p=i.Ay.section`
  padding: 8rem 0;
  position: relative;
  overflow: visible;
  
  /* Section connectors removed */
`,d=i.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 20;
`,c=i.i7`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`,h=(0,i.Ay)(n.P.h2)`
  font-family: ${s.pQ.title};
  font-size: 5.5rem; /* Larger size */
  font-weight: 900;
  color: ${s.lm.retroPrimary}; /* Main color */
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
`,m=(0,i.Ay)(n.P.div)`
  position: relative;
  z-index: 2;
`,u=i.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    repeating-linear-gradient(
      45deg,
      ${e=>e.color||s.lm.retroPrimary}03 0px,
      ${e=>e.color||s.lm.retroPrimary}03 2px,
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
      linear-gradient(45deg, ${e=>e.color||s.lm.retroPrimary}05 25%, transparent 25%),
      linear-gradient(-45deg, ${e=>e.color||s.lm.retroPrimary}05 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, ${e=>e.color||s.lm.retroPrimary}05 75%),
      linear-gradient(-45deg, transparent 75%, ${e=>e.color||s.lm.retroPrimary}05 75%);
    background-size: 60px 60px;
    background-position: 0 0, 0 30px, 30px -30px, -30px 0px;
    opacity: 0.3;
  }
`,g=(i.Ay.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background: ${s.lm.retroPrimary};
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
`,e=>{let{title:t,children:r,background:i,titleColor:n,underlineColor:s,underlineSecondary:l,glowColor:c,gridColor:g,gridOpacity:b,id:x,className:f,...y}=e;return(0,a.jsxs)(p,{id:x,background:i,className:f||"",...y,children:[(0,a.jsx)(u,{color:g,opacity:b}),(0,a.jsx)(d,{children:(0,a.jsx)(o.pL,{threshold:.2,triggerOnce:!0,children:e=>{let{ref:i,inView:o}=e;return(0,a.jsxs)(a.Fragment,{children:[t&&(0,a.jsxs)(h,{ref:i,color:n,"data-text":t,initial:{opacity:0,y:-20},animate:o?{opacity:1,y:0}:{},transition:{duration:.8,type:"spring",stiffness:100},className:"section-title",children:[(0,a.jsx)("span",{"data-text":t,children:t}),t]}),(0,a.jsx)(m,{initial:{opacity:0,y:30},animate:o?{opacity:1,y:0}:{},transition:{duration:.8,delay:.2,type:"spring",stiffness:80},children:r})]})}})})]})})},5843:(e,t,r)=>{r.d(t,{pL:()=>h});var i=r(5043),n=Object.defineProperty,o=(e,t,r)=>((e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r)(e,"symbol"!==typeof t?t+"":t,r),s=new Map,a=new WeakMap,l=0,p=void 0;function d(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(r=e.root,r?(a.has(r)||(l+=1,a.set(r,l.toString())),a.get(r)):"0"):e[t]}`;var r})).toString()}function c(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:p;if("undefined"===typeof window.IntersectionObserver&&void 0!==i){const n=e.getBoundingClientRect();return t(i,{isIntersecting:i,target:e,intersectionRatio:"number"===typeof r.threshold?r.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}const{id:n,observer:o,elements:a}=function(e){const t=d(e);let r=s.get(t);if(!r){const i=new Map;let n;const o=new IntersectionObserver((t=>{t.forEach((t=>{var r;const o=t.isIntersecting&&n.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=o),null==(r=i.get(t.target))||r.forEach((e=>{e(o,t)}))}))}),e);n=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),r={id:t,observer:o,elements:i},s.set(t,r)}return r}(r),l=a.get(e)||[];return a.has(e)||a.set(e,l),l.push(t),o.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(a.delete(e),o.unobserve(e)),0===a.size&&(o.disconnect(),s.delete(n))}}var h=class extends i.Component{constructor(e){super(e),o(this,"node",null),o(this,"_unobserveCb",null),o(this,"handleNode",(e=>{this.node&&(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()})),o(this,"handleChange",((e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),function(e){return"function"!==typeof e.children}(this.props)||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)})),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:r,trackVisibility:i,delay:n,fallbackInView:o}=this.props;this._unobserveCb=c(this.node,this.handleChange,{threshold:e,root:t,rootMargin:r,trackVisibility:i,delay:n},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if("function"===typeof e){const{inView:t,entry:r}=this.state;return e({inView:t,entry:r,ref:this.handleNode})}const{as:t,triggerOnce:r,threshold:n,root:o,rootMargin:s,onChange:a,skip:l,trackVisibility:p,delay:d,initialInView:c,fallbackInView:h,...m}=this.props;return i.createElement(t||"div",{ref:this.handleNode,...m},e)}}}}]);
//# sourceMappingURL=441.35687c66.chunk.js.map