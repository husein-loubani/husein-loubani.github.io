"use strict";(self.webpackChunkhusein_loubani_github_io=self.webpackChunkhusein_loubani_github_io||[]).push([[720],{5253:(e,t,i)=>{i.d(t,{A:()=>u});i(5043);var r=i(6867),o=i(7200),n=i(5843),a=i(3549),s=i(579);r.i7`
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
`;const l=r.i7`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`,p=r.Ay.section`
  padding: 8rem 0;
  position: relative;
  overflow: visible;
  
  /* Section connectors removed */
`,d=r.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 20;
`,c=r.i7`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`,h=(0,r.Ay)(o.P.h2)`
  font-family: ${a.pQ.title};
  font-size: 5.5rem; /* Larger size */
  font-weight: 900;
  color: ${a.lm.retroPrimary}; /* Main color */
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
`,g=(0,r.Ay)(o.P.div)`
  position: relative;
  z-index: 2;
`,m=r.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    repeating-linear-gradient(
      45deg,
      ${e=>e.color||a.lm.retroPrimary}03 0px,
      ${e=>e.color||a.lm.retroPrimary}03 2px,
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
      linear-gradient(45deg, ${e=>e.color||a.lm.retroPrimary}05 25%, transparent 25%),
      linear-gradient(-45deg, ${e=>e.color||a.lm.retroPrimary}05 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, ${e=>e.color||a.lm.retroPrimary}05 75%),
      linear-gradient(-45deg, transparent 75%, ${e=>e.color||a.lm.retroPrimary}05 75%);
    background-size: 60px 60px;
    background-position: 0 0, 0 30px, 30px -30px, -30px 0px;
    opacity: 0.3;
  }
`,u=(r.Ay.div`
  position: absolute;
  width: 50px;
  height: 50px;
  background: ${a.lm.retroPrimary};
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
`,e=>{let{title:t,children:i,background:r,titleColor:o,underlineColor:a,underlineSecondary:l,glowColor:c,gridColor:u,gridOpacity:b,id:x,className:f,...w}=e;return(0,s.jsxs)(p,{id:x,background:r,className:f||"",...w,children:[(0,s.jsx)(m,{color:u,opacity:b}),(0,s.jsx)(d,{children:(0,s.jsx)(n.pL,{threshold:.2,triggerOnce:!0,children:e=>{let{ref:r,inView:n}=e;return(0,s.jsxs)(s.Fragment,{children:[t&&(0,s.jsxs)(h,{ref:r,color:o,"data-text":t,initial:{opacity:0,y:-20},animate:n?{opacity:1,y:0}:{},transition:{duration:.8,type:"spring",stiffness:100},className:"section-title",children:[(0,s.jsx)("span",{"data-text":t,children:t}),t]}),(0,s.jsx)(g,{initial:{opacity:0,y:30},animate:n?{opacity:1,y:0}:{},transition:{duration:.8,delay:.2,type:"spring",stiffness:80},children:i})]})}})})]})})},5843:(e,t,i)=>{i.d(t,{pL:()=>h});var r=i(5043),o=Object.defineProperty,n=(e,t,i)=>((e,t,i)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i)(e,"symbol"!==typeof t?t+"":t,i),a=new Map,s=new WeakMap,l=0,p=void 0;function d(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(i=e.root,i?(s.has(i)||(l+=1,s.set(i,l.toString())),s.get(i)):"0"):e[t]}`;var i})).toString()}function c(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:p;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){const o=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof i.threshold?i.threshold:0,time:0,boundingClientRect:o,intersectionRect:o,rootBounds:o}),()=>{}}const{id:o,observer:n,elements:s}=function(e){const t=d(e);let i=a.get(t);if(!i){const r=new Map;let o;const n=new IntersectionObserver((t=>{t.forEach((t=>{var i;const n=t.isIntersecting&&o.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=n),null==(i=r.get(t.target))||i.forEach((e=>{e(n,t)}))}))}),e);o=n.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:t,observer:n,elements:r},a.set(t,i)}return i}(i),l=s.get(e)||[];return s.has(e)||s.set(e,l),l.push(t),n.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(s.delete(e),n.unobserve(e)),0===s.size&&(n.disconnect(),a.delete(o))}}var h=class extends r.Component{constructor(e){super(e),n(this,"node",null),n(this,"_unobserveCb",null),n(this,"handleNode",(e=>{this.node&&(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()})),n(this,"handleChange",((e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),function(e){return"function"!==typeof e.children}(this.props)||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)})),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:i,trackVisibility:r,delay:o,fallbackInView:n}=this.props;this._unobserveCb=c(this.node,this.handleChange,{threshold:e,root:t,rootMargin:i,trackVisibility:r,delay:o},n)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if("function"===typeof e){const{inView:t,entry:i}=this.state;return e({inView:t,entry:i,ref:this.handleNode})}const{as:t,triggerOnce:i,threshold:o,root:n,rootMargin:a,onChange:s,skip:l,trackVisibility:p,delay:d,initialInView:c,fallbackInView:h,...g}=this.props;return r.createElement(t||"div",{ref:this.handleNode,...g},e)}}},7720:(e,t,i)=>{i.r(t),i.d(t,{default:()=>I});i(5043);var r=i(6867),o=i(7200),n=i(5843),a=i(5253),s=i(3549),l=i(579);const p=r.Ay.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`,d=r.Ay.div`
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
`,c=r.i7`
  0% { box-shadow: 0 0 10px 0px rgba(255, 255, 255, 0.1); }
  50% { box-shadow: 0 0 16px 4px rgba(255, 255, 255, 0.15); }
  100% { box-shadow: 0 0 10px 0px rgba(255, 255, 255, 0.1); }
`,h=r.AH`
  &:after {
    background: rgba(0, 0, 0, 0.35);
  }
  transform: scale(1.02);
`,g=r.AH`
  transform: scale(1.02);
  text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.7), 0px 4px 10px rgba(0, 0, 0, 0.5);
`,m=r.AH`
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  filter: brightness(1.1);
`,u=r.AH`
  background: rgba(255, 255, 255, 0.15);
`,b=(0,r.Ay)(o.P.div)`
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
      animation: ${c} 2s infinite ease-in-out;
    }
    
    /* Apply hover styles to child components */
    .project-image {
      ${h}
    }
    
    .project-title {
      ${g}
    }
    
    .project-banner {
      ${m}
    }
    
    .project-tag {
      ${u}
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
`,x=r.Ay.div`
  position: absolute;
  top: ${e=>e.isLong?"25px":"20px"};
  right: ${e=>e.isLong?"-45px":"-35px"};
  background: ${e=>e.color||"#FF4081"};
  color: white;
  font-size: ${e=>e.isLong?"0.65rem":"0.7rem"};
  font-weight: 600;
  padding: 5px ${e=>e.isLong?"50px":"40px"};
  transform: rotate(45deg);
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  font-family: ${s.pQ.accent};
  letter-spacing: 0.5px;
  text-transform: uppercase;
  width: ${e=>e.isLong?"180px":"auto"};
  text-align: center;
  transition: all 0.4s ease;
  
  ${b}:hover & {
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
    filter: brightness(1.1);
  }
`,f=r.Ay.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px; /* Increased height to accommodate wrapped titles */
  min-height: 200px;
  background: ${e=>e.gradient||"linear-gradient(135deg, #3182CE, #63B3ED)"};
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
`,w=r.Ay.h3`
  color: white;
  font-family: ${s.pQ.title};
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
`,y=r.Ay.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`,v=r.Ay.div`
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
`,k=r.Ay.span`
  font-size: 0.6rem;
  padding: 0.2rem 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-family: ${s.pQ.accent};
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
`,C=r.Ay.div`
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-family: ${s.pQ.primary};
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
`,j=r.Ay.div`
  display: flex;
  gap: 0.75rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`,A=r.Ay.button`
  background: ${e=>e.primary?"rgba(59, 130, 246, 0.9)":"rgba(255, 255, 255, 0.1)"};
  color: white;
  font-family: ${s.pQ.accent};
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
    background: ${e=>e.primary?"rgba(59, 130, 246, 1)":"rgba(255, 255, 255, 0.15)"};
  }
  
  &:active {
    transform: translateY(0);
  }
`,$={row1:[{title:"Comprehensive Review of 3D Building Reconstruction:<br>Comparative Study of LoD2 Approaches",description:"This review critically evaluates state-of-the-art 3D building reconstruction methods focusing on LoD2. It compares accuracy, complexity, and data requirements across major approaches, and highlights open challenges and research directions in urban modeling.",gradient:"linear-gradient(135deg, #3182CE, #4299E1)",technologies:["3D Reconstruction","Level of Detail","Urban Modeling","Computer Vision","Survey","Benchmarking"],actions:[{label:"Paper (Under Review)",url:"https://husein-loubani.github.io",primary:!0}],banner:{text:"Journal",color:"#3182CE"}},{title:"Skyline-Guided Alignment of Real 360\xb0 Images and Synthetic LoD2<br>for Robust Navigation",description:"This work proposes a novel method aligning real-world 360\xb0 panoramic images with synthetic LoD2 3D environments using skyline-based features. It enables accurate localization and robust navigation for autonomous agents in urban digital twins.",gradient:"linear-gradient(135deg, #4F46E5, #6366F1)",technologies:["Skyline Detection","Data Alignment","360\xb0 Vision","Virtual Environments","Autonomous Navigation","Urban Localization"],actions:[{label:"Coming Soon (ICRA Submission)",url:"https://husein-loubani.github.io",primary:!0}],banner:{text:"Conference",color:"#4F46E5"}},{title:"Visuo-Tactile Perception of Object Slippage in<br>In & On-Hand Manipulation Tasks",description:"This thesis presents a novel method for estimating object pose during manipulation using integrated visual and tactile sensing. A deep recurrent neural network (RNN) architecture was developed to address occlusion challenges in robotic grasping. Simulations in PyBullet, multimodal data fusion, and 6D pose estimation were employed to improve manipulation accuracy and prevent slippage.",gradient:"linear-gradient(135deg, #EC4899, #F472B6)",technologies:["Robotics","Tactile Sensing","6D Pose Estimation","Deep Learning","Recurrent Neural Network","Simulation","LSTM","PyBullet"],actions:[{label:"Report",url:"https://drive.google.com/file/d/1SK8LHNccpnAiSW347AObS7zJ05AEb9ur/view?usp=sharing",primary:!1},{label:"Presentation",url:"https://drive.google.com/file/d/1h1Y3Q_jqvrntvjmY15lEgwCcJQauIc4q/view?usp=sharing",primary:!1},{label:"GitHub",url:"https://github.com/husein-loubani/Machine_Learning_in_the_Industry_4.0_Seminar_SS2020.FAU",primary:!1}],banner:{text:"Internship",color:"#EC4899",isLong:!0}}]},R=(()=>{let e=[],t=1;return Object.entries($).forEach((i=>{let[r,o]=i;const n=parseInt(r.replace("row",""));o.forEach(((i,r)=>{e.push({id:t++,row:n,positionInRow:r,projectsInRow:o.length,...i})}))})),e})(),I=()=>{const e=e=>{if("undefined"===typeof window)return{gridColumn:"1 / span 4",gridRow:"auto"};if(window.innerWidth<=768)return{gridColumn:"1 / span 1",gridRow:"auto",marginBottom:"2rem"};if(window.innerWidth<=992)return{gridColumn:e.positionInRow%2===0?"1 / span 3":"4 / span 3",gridRow:`${Math.floor(e.positionInRow/2)+e.row} / span 1`};const{row:t,positionInRow:i,projectsInRow:r}=e;return 1===r?{gridColumn:"3 / span 8",gridRow:`${t} / span 1`}:2===r?{gridColumn:0===i?"2 / span 5":"7 / span 5",gridRow:`${t} / span 1`}:{gridColumn:4*i+1+" / span 4",gridRow:`${t} / span 1`}};return(0,l.jsx)(a.A,{id:"projects",title:"PROJECTS",titleColor:"#3182CE",gridColor:"#3182CE",gridOpacity:"0.05",className:"projects-section",children:(0,l.jsx)(p,{children:(0,l.jsx)(d,{children:R.sort(((e,t)=>e.row-t.row||e.positionInRow-t.positionInRow)).map(((t,i)=>(0,l.jsx)(n.pL,{threshold:.1,triggerOnce:!0,children:r=>{let{ref:o,inView:n}=r;return(0,l.jsxs)(b,{ref:o,initial:{opacity:0,y:30},animate:n?{opacity:1,y:0}:{},transition:{duration:.5,delay:.08*i,ease:"easeOut"},style:e(t),children:[t.banner&&(0,l.jsx)(x,{color:t.banner.color,isLong:t.banner.isLong,className:"project-banner",children:t.banner.text}),(0,l.jsx)(f,{gradient:t.gradient,className:"project-image",children:(0,l.jsx)(w,{dangerouslySetInnerHTML:{__html:t.title},className:"project-title"})}),(0,l.jsxs)(y,{children:[(0,l.jsx)(v,{children:t.technologies.map(((e,t)=>(0,l.jsx)(k,{className:"project-tag",children:e},t)))}),(0,l.jsx)(C,{dangerouslySetInnerHTML:{__html:t.description}}),(0,l.jsx)(j,{children:t.actions.map(((e,t)=>(0,l.jsx)(A,{primary:e.primary,onClick:()=>window.open(e.url,"_blank"),children:e.label},t)))})]})]})}},t.id)))})})})}}}]);
//# sourceMappingURL=720.c7906101.chunk.js.map