"use strict";(self.webpackChunkhusein_loubani_github_io=self.webpackChunkhusein_loubani_github_io||[]).push([[720],{5253:(e,t,i)=>{i.d(t,{A:()=>b});i(5043);var r=i(6867),n=i(7200),o=i(5843),a=i(3549),s=i(579);r.i7`
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
`,d=r.Ay.section`
  padding: 8rem 0;
  position: relative;
  overflow: visible;
  
  /* Section connectors removed */
`,p=r.Ay.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  position: relative;
  z-index: 20;
`,c=r.i7`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-8px); }
`,g=(0,r.Ay)(n.P.h2)`
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
`,h=(0,r.Ay)(n.P.div)`
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
`,b=(r.Ay.div`
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
`,e=>{let{title:t,children:i,background:r,titleColor:n,underlineColor:a,underlineSecondary:l,glowColor:c,gridColor:b,gridOpacity:u,id:x,className:f,...y}=e;return(0,s.jsxs)(d,{id:x,background:r,className:f||"",...y,children:[(0,s.jsx)(m,{color:b,opacity:u}),(0,s.jsx)(p,{children:(0,s.jsx)(o.pL,{threshold:.2,triggerOnce:!0,children:e=>{let{ref:r,inView:o}=e;return(0,s.jsxs)(s.Fragment,{children:[t&&(0,s.jsxs)(g,{ref:r,color:n,"data-text":t,initial:{opacity:0,y:-20},animate:o?{opacity:1,y:0}:{},transition:{duration:.8,type:"spring",stiffness:100},className:"section-title",children:[(0,s.jsx)("span",{"data-text":t,children:t}),t]}),(0,s.jsx)(h,{initial:{opacity:0,y:30},animate:o?{opacity:1,y:0}:{},transition:{duration:.8,delay:.2,type:"spring",stiffness:80},children:i})]})}})})]})})},5843:(e,t,i)=>{i.d(t,{pL:()=>g});var r=i(5043),n=Object.defineProperty,o=(e,t,i)=>((e,t,i)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i)(e,"symbol"!==typeof t?t+"":t,i),a=new Map,s=new WeakMap,l=0,d=void 0;function p(e){return Object.keys(e).sort().filter((t=>void 0!==e[t])).map((t=>{return`${t}_${"root"===t?(i=e.root,i?(s.has(i)||(l+=1,s.set(i,l.toString())),s.get(i)):"0"):e[t]}`;var i})).toString()}function c(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:d;if("undefined"===typeof window.IntersectionObserver&&void 0!==r){const n=e.getBoundingClientRect();return t(r,{isIntersecting:r,target:e,intersectionRatio:"number"===typeof i.threshold?i.threshold:0,time:0,boundingClientRect:n,intersectionRect:n,rootBounds:n}),()=>{}}const{id:n,observer:o,elements:s}=function(e){const t=p(e);let i=a.get(t);if(!i){const r=new Map;let n;const o=new IntersectionObserver((t=>{t.forEach((t=>{var i;const o=t.isIntersecting&&n.some((e=>t.intersectionRatio>=e));e.trackVisibility&&"undefined"===typeof t.isVisible&&(t.isVisible=o),null==(i=r.get(t.target))||i.forEach((e=>{e(o,t)}))}))}),e);n=o.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:t,observer:o,elements:r},a.set(t,i)}return i}(i),l=s.get(e)||[];return s.has(e)||s.set(e,l),l.push(t),o.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(s.delete(e),o.unobserve(e)),0===s.size&&(o.disconnect(),a.delete(n))}}var g=class extends r.Component{constructor(e){super(e),o(this,"node",null),o(this,"_unobserveCb",null),o(this,"handleNode",(e=>{this.node&&(this.unobserve(),e||this.props.triggerOnce||this.props.skip||this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=e||null,this.observeNode()})),o(this,"handleChange",((e,t)=>{e&&this.props.triggerOnce&&this.unobserve(),function(e){return"function"!==typeof e.children}(this.props)||this.setState({inView:e,entry:t}),this.props.onChange&&this.props.onChange(e,t)})),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:t,rootMargin:i,trackVisibility:r,delay:n,fallbackInView:o}=this.props;this._unobserveCb=c(this.node,this.handleChange,{threshold:e,root:t,rootMargin:i,trackVisibility:r,delay:n},o)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if("function"===typeof e){const{inView:t,entry:i}=this.state;return e({inView:t,entry:i,ref:this.handleNode})}const{as:t,triggerOnce:i,threshold:n,root:o,rootMargin:a,onChange:s,skip:l,trackVisibility:d,delay:p,initialInView:c,fallbackInView:g,...h}=this.props;return r.createElement(t||"div",{ref:this.handleNode,...h},e)}}},7720:(e,t,i)=>{i.r(t),i.d(t,{default:()=>z});i(5043);var r=i(6867),n=i(7200),o=i(5843),a=i(5253),s=i(3549),l=i(579);const d=r.Ay.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1.5rem;
`,p=r.Ay.div`
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
`,g=r.AH`
  &:after {
    background: rgba(0, 0, 0, 0.35);
  }
  transform: scale(1.02);
`,h=r.AH`
  transform: scale(1.02);
  text-shadow: 0px 2px 8px rgba(0, 0, 0, 0.7), 0px 4px 10px rgba(0, 0, 0, 0.5);
`,m=r.AH`
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.4);
  filter: brightness(1.1);
`,b=r.AH`
  background: rgba(255, 255, 255, 0.15);
`,u=(0,r.Ay)(n.P.div)`
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
      ${g}
    }
    
    .project-title {
      ${h}
    }
    
    .project-banner {
      ${m}
    }
    
    .project-tag {
      ${b}
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
  
  ${u}:hover & {
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
`,y=r.Ay.h3`
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
`,w=r.Ay.div`
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
`,A=r.Ay.div`
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
`,C=r.Ay.div`
  display: flex;
  gap: 0.75rem;
  
  @media (max-width: 480px) {
    flex-direction: column;
  }
`,P=r.Ay.button`
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
`,j="linear-gradient(135deg, #7C3AED, #8B5CF6)",I={row1:[{title:"Fuck You AI trend analysis in German<br>business and politics:<br>a web mining approach",description:"This study analyzes AI trends in German business and politics (1998\u20132020) using web mining and ML.<br><br>It detects AI evolution, faster adoption in business, and increasing political discourse, leveraging 1.07M documents.",gradient:"linear-gradient(135deg, #3182CE, #4299E1)",technologies:["Artificial intelligence","Web mining","Trend detection","Topic clustering","Business","Politics"],actions:[{label:"Paper",url:"https://link.springer.com/article/10.1007/s41060-023-00483-9",primary:!0}],banner:{text:"Paper",color:"#3182CE"}},{title:"AI trend analysis on healthcare podcasts using topic modeling and sentiment <br> analysis: a data-driven approach",description:"This study analyzes AI trends in healthcare podcasts (2015\u20132021) using web mining and ML. It detects AI evolution, identifies 14 topic clusters, and examines sentiment and trend dynamics.",gradient:"linear-gradient(135deg, #4F46E5, #6366F1)",technologies:["Artificial intelligence","Web mining","Trend detection","Topic clustering","PyTorch","Python","Sentiment Analysis"],actions:[{label:"Paper",url:"https://link.springer.com/article/10.1007/s12065-023-00878-4",primary:!0}],banner:{text:"Paper",color:"#4F46E5"}}],row2:[{title:"Identifying a Trial <br> Population for Clinical Studies <br> on Diabetes Drug Testing with Neural Networks",description:"This project models an end-to-end AI workflow for clinical use, predicting hospitalization time for diabetes patients using neural networks and Explainable AI, aiding doctors in patient selection.",gradient:"linear-gradient(135deg, #EC4899, #F472B6)",technologies:["Machine Learning","EDA","Data Analysis"],actions:[{label:"Paper",url:"https://dl.gi.de/server/api/core/bitstreams/833fe83a-27fa-48fa-8f79-f9cf4895f1ca/content",primary:!0},{label:"GitHub",url:"https://github.com/Mavengence/Machine_Learning_in_the_Industry_4.0_Seminar_SS2020.FAU",primary:!1}],banner:{text:"Best Paper Award",color:"#EC4899",isLong:!0}},{title:"Style Classification in Posters",description:"Created an interactive dashboard for analyzing customer purchase patterns and product affinities for a retail client.",gradient:"linear-gradient(135deg, #10B981, #34D399)",technologies:["LDA ","Neural Networks","PyTorch","BERT","Museum","Clustering"],actions:[{label:"Report",url:"https://drive.google.com/file/d/1llobxdJ98EvebOEH6b372VrMSvc4p0mg/view?usp=sharing",primary:!0},{label:"GitHub",url:"https://github.com/Mavengence/Style-Classification-in-Posters",primary:!1}]},{title:"Representation Learning for Gait Analysis in Parkinson Patients",description:"This project evaluates deep learning architectures for Parkinsons classification using raw sensor data. A ResNet autoencoder achieved 87% accuracy, as a decision support tool for doctors.",gradient:"linear-gradient(135deg, #F59E0B, #FBBF24)",technologies:["Computer Vision","PyTorch","Timeseries"],actions:[{label:"Report",url:"https://drive.google.com/file/d/1CwGOKzVPtgz1A5zVJXehEHIk7snWR_cI/view?usp=sharing",primary:!0},{label:"GitHub",url:"https://github.com/Mavengence/Representation-Learning-for-Gait-Analysis-in-Parkinson-s-Patients",primary:!1}]}],row3:[{title:"Masterthesis: <br> AI Trend Detection in Healthcare by applying Topic Clustering and Sentiment Analysis using Podcast Data",description:"This thesis explores AI trend detection in healthcare podcasts (2015\u20132021) using speech-to-text, topic clustering, and sentiment analysis. It identifies 14 trending topics and develops a tool for filtering relevant discussions.",gradient:"linear-gradient(135deg, #F97316, #FB923C)",technologies:["Artificial intelligence","NLP","BERT","Web mining","Trend detection","Topic clustering","PyTorch","Python","Sentiment Analysis"],actions:[{label:"Thesis",url:"https://drive.google.com/file/d/13fBq7cbFENh3P6NSFUtC5ROXlaYpaHok/view?usp=sharing",primary:!0},{label:"Presentation",url:"https://drive.google.com/file/d/1CEw7Icy97BMWJfAVU_q-VCswe2eEaCrP/view?usp=sharing",primary:!1}]},{title:"Python Package: <br> Gap Statistics",description:"My GapStatistics package provides a Python implementation of the Gap Statistics method for determining the optimal number of clusters in a dataset using K-means clustering derived from Tibshirani et al.",gradient:j,technologies:["Elbow Method","k-Means","Clustering"],actions:[{label:"Github",url:"https://github.com/Mavengence/GapStatistics",primary:!0},{label:"PyPi",url:"https://pypi.org/project/gapstatistics/",primary:!1}],banner:{text:"Package",color:j,isLong:!0}}]},$=(()=>{let e=[],t=1;return Object.entries(I).forEach((i=>{let[r,n]=i;const o=parseInt(r.replace("row",""));n.forEach(((i,r)=>{e.push({id:t++,row:o,positionInRow:r,projectsInRow:n.length,...i})}))})),e})(),z=()=>{const e=e=>{if("undefined"===typeof window)return{gridColumn:"1 / span 4",gridRow:"auto"};if(window.innerWidth<=768)return{gridColumn:"1 / span 1",gridRow:"auto",marginBottom:"2rem"};if(window.innerWidth<=992)return{gridColumn:e.positionInRow%2===0?"1 / span 3":"4 / span 3",gridRow:`${Math.floor(e.positionInRow/2)+e.row} / span 1`};const{row:t,positionInRow:i,projectsInRow:r}=e;return 1===r?{gridColumn:"3 / span 8",gridRow:`${t} / span 1`}:2===r?{gridColumn:0===i?"2 / span 5":"7 / span 5",gridRow:`${t} / span 1`}:{gridColumn:4*i+1+" / span 4",gridRow:`${t} / span 1`}};return(0,l.jsx)(a.A,{id:"projects",title:"PROJECTS",titleColor:"#3182CE",gridColor:"#3182CE",gridOpacity:"0.05",className:"projects-section",children:(0,l.jsx)(d,{children:(0,l.jsx)(p,{children:$.sort(((e,t)=>e.row-t.row||e.positionInRow-t.positionInRow)).map(((t,i)=>(0,l.jsx)(o.pL,{threshold:.1,triggerOnce:!0,children:r=>{let{ref:n,inView:o}=r;return(0,l.jsxs)(u,{ref:n,initial:{opacity:0,y:30},animate:o?{opacity:1,y:0}:{},transition:{duration:.5,delay:.08*i,ease:"easeOut"},style:e(t),children:[t.banner&&(0,l.jsx)(x,{color:t.banner.color,isLong:t.banner.isLong,className:"project-banner",children:t.banner.text}),(0,l.jsx)(f,{gradient:t.gradient,className:"project-image",children:(0,l.jsx)(y,{dangerouslySetInnerHTML:{__html:t.title},className:"project-title"})}),(0,l.jsxs)(w,{children:[(0,l.jsx)(v,{children:t.technologies.map(((e,t)=>(0,l.jsx)(k,{className:"project-tag",children:e},t)))}),(0,l.jsx)(A,{dangerouslySetInnerHTML:{__html:t.description}}),(0,l.jsx)(C,{children:t.actions.map(((e,t)=>(0,l.jsx)(P,{primary:e.primary,onClick:()=>window.open(e.url,"_blank"),children:e.label},t)))})]})]})}},t.id)))})})})}}}]);
//# sourceMappingURL=720.cd3fed82.chunk.js.map