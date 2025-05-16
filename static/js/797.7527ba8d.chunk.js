"use strict";(self.webpackChunkhusein_loubani_github_io=self.webpackChunkhusein_loubani_github_io||[]).push([[797],{6797:(i,t,n)=>{n.r(t),n.d(t,{default:()=>m});n(5043);var e=n(6867),a=n(7200),o=n(7805),l=n(3549),r=n(8860),s=n(4966),c=n(2127),b=n(5369),x=n(579);const d=(0,e.Ay)(a.P.div)`
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
`,p=e.Ay.div`
  display: inline-block;
  animation: marquee 24s linear infinite;
  padding-left: 100%;
  font-family: ${l.pQ.mono};
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
`,g=[{text:"Artificial Intelligence",icon:(0,x.jsx)(r.idR,{}),blink:!0},{text:"Computer Vision",icon:(0,x.jsx)(s.xlD,{}),blink:!0},{text:"Machine Learning",icon:(0,x.jsx)(o.EYW,{}),blink:!0},{text:"Research",icon:(0,x.jsx)(r.S4d,{}),blink:!0},{text:"Autonomous Driving",icon:(0,x.jsx)(o.T9A,{}),blink:!0},{text:"Robotics",icon:(0,x.jsx)(b.y8Q,{}),blink:!0},{text:"3D Reconstruction",icon:(0,x.jsx)(c.uxf,{}),blink:!0},{text:"Data Science",blink:!1,icon:(0,x.jsx)(o.I1_,{}),blink:!0},{text:"C/C++",blink:!1,icon:(0,x.jsx)(o.m4U,{}),blink:!0},{text:"Python",blink:!1,icon:(0,x.jsx)(o.m4U,{}),blink:!0},{text:"JAVA",blink:!1,icon:(0,x.jsx)(o.m4U,{}),blink:!0},{text:"TensorFlow",blink:!1,icon:(0,x.jsx)(o.m4U,{}),blink:!0},{text:"PyTorch",blink:!1,icon:(0,x.jsx)(o.m4U,{}),blink:!0},{text:"Natural Language Processing",blink:!0,icon:(0,x.jsx)(o.Wwx,{}),blink:!0},{text:"SQL Databases",blink:!1,icon:(0,x.jsx)(o.Wwx,{}),blink:!0}],m=i=>{let{items:t=g,className:n}=i;return(0,x.jsx)(d,{className:n,initial:{opacity:0},animate:{opacity:1},transition:{duration:.5},children:(0,x.jsxs)(p,{children:[t.map(((i,t)=>(0,x.jsxs)("span",{className:i.blink?"blink":"",children:[i.icon," ",i.text]},t))),t.map(((i,t)=>(0,x.jsxs)("span",{className:i.blink?"blink":"",children:[i.icon," ",i.text]},`repeat-${t}`)))]})})}}}]);
//# sourceMappingURL=797.7527ba8d.chunk.js.map