"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[722],{6722:(e,i,n)=>{n.r(i),n.d(i,{default:()=>l});var t=n(2791),s=n(4581);const o=(0,n(1191).ZP)("div")`
  padding: 10px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  z-index: 10;
  cursor: pointer;
  background: rgb(241, 242, 243);
  text-align: center;
  align-items: center;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  visibility: ${e=>e.show?"visible":"hidden"};
  opacity: ${e=>e.show?"1":"0"};
  display: flex;

  &:hover,
  &:active,
  &:focus {
    background: rgb(224, 224, 224);
  }

  @media screen and (max-width: 1240px) {
    display: none;
  }
`;var r=n(184);const l=()=>{const[e,i]=(0,t.useState)(!1),n=(0,t.useCallback)((()=>{const n=window.scrollY;!e&&n>350?i(!0):n<=350&&i(!1)}),[e]);(0,t.useEffect)((()=>(window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)})),[n]);return(0,r.jsx)(o,{onClick:()=>{document.getElementById("intro").scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},show:e,children:(0,r.jsx)(s.l,{src:"scroll-top.svg",width:"20px",height:"20px"})})}}}]);
//# sourceMappingURL=722.bded2af6.chunk.js.map