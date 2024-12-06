"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[609],{4609:(e,s,n)=>{n.r(s),n.d(s,{default:()=>E});var a=n(605),r=n(9603),i=n(4720),t=n(1758),l=n(2791),d=n(8691);const m={name:"",email:"",message:""};function o(e){let s={};return e.name||(s.name="Name is required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(s.email="Email address is invalid"):s.email="Email address is required",e.message||(s.message="Message is required"),s}var c=n(5224),h=n(1191);const p=(0,h.ZP)("p")`
  margin-top: 1.5rem;
`,x=(0,h.ZP)("div")`
  position: relative;
  max-width: 700px;
`,u=(0,h.ZP)("div")`
  border-radius: 3rem;
  max-width: 400px;
`;var g=n(184);const j=(0,i.Z)()((e=>{let{title:s,content:n,t:a}=e;return(0,g.jsxs)(x,{children:[(0,g.jsx)("h6",{children:a(s)}),(0,g.jsx)(u,{children:(0,g.jsx)(p,{children:a(n)})})]})})),v=(0,h.ZP)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`,Z=(0,h.ZP)("input")`
  font-size: 0.875rem;
`,b=(0,h.ZP)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;
`,y=(0,h.ZP)("textarea")`
  resize: none;
  font-size: 0.875rem;
  height: 185px;
`,f=(0,h.ZP)("label")`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
`,w=(0,i.Z)()((e=>{let{name:s,placeholder:n,onChange:a,t:r}=e;return(0,g.jsxs)(v,{children:[(0,g.jsx)(f,{htmlFor:s,children:r(s)}),(0,g.jsx)(Z,{placeholder:r(n),name:s,id:s,onChange:a})]})})),C=(0,i.Z)()((e=>{let{name:s,placeholder:n,onChange:a,t:r}=e;return(0,g.jsxs)(b,{children:[(0,g.jsx)(f,{htmlFor:s,children:r(s)}),(0,g.jsx)(y,{placeholder:r(n),id:s,name:s,onChange:a})]})})),P=(0,h.ZP)("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`,S=(0,h.ZP)("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`,k=(0,h.ZP)("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`,z=(0,h.ZP)("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`,E=(0,i.Z)()((e=>{let{title:s,content:n,id:i,t:h}=e;const{values:p,errors:x,handleChange:u,handleSubmit:v}=(e=>{const[s,n]=(0,l.useState)({values:{...m},errors:{...m}});return{handleChange:e=>{e.persist();const{name:s,value:a}=e.target;n((e=>({...e,values:{...e.values,[s]:a},errors:{...e.errors,[s]:""}})))},handleSubmit:async a=>{a.preventDefault();const r=s.values,i=e(r);n((e=>({...e,errors:i})));const t=`Name: ${r.name}\nEmail: ${r.email}\nMessage: ${r.message}`,l=`mailto:neusec2024@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(t)}`;Object.values(i).every((e=>""===e))?(window.location.href=l,a.target.reset(),n((()=>({values:{...m},errors:{...m}}))),d.Z.success({message:"Success",description:"Your message has been sent!"})):d.Z.error({message:"Error",description:"Please fix the errors in the form."})},values:s.values,errors:s.errors}})(o),Z=e=>{let{type:s}=e;const n=x[s];return(0,g.jsx)(k,{children:n})};return(0,g.jsx)(P,{id:i,children:(0,g.jsxs)(a.Z,{justify:"space-between",align:"middle",children:[(0,g.jsx)(r.Z,{lg:12,md:11,sm:24,xs:24,children:(0,g.jsx)(t.Mi,{direction:"left",triggerOnce:!0,children:(0,g.jsx)(j,{title:s,content:n})})}),(0,g.jsx)(r.Z,{lg:12,md:12,sm:24,xs:24,children:(0,g.jsx)(t.Mi,{direction:"right",triggerOnce:!0,children:(0,g.jsxs)(S,{autoComplete:"off",onSubmit:v,children:[(0,g.jsxs)(r.Z,{span:24,children:[(0,g.jsx)(w,{type:"text",name:"name",placeholder:"Your Name",value:p.name||"",onChange:u}),(0,g.jsx)(Z,{type:"name"})]}),(0,g.jsxs)(r.Z,{span:24,children:[(0,g.jsx)(w,{type:"text",name:"email",placeholder:"Your Email",value:p.email||"",onChange:u}),(0,g.jsx)(Z,{type:"email"})]}),(0,g.jsxs)(r.Z,{span:24,children:[(0,g.jsx)(C,{placeholder:"Your Message",value:p.message||"",name:"message",onChange:u}),(0,g.jsx)(Z,{type:"message"})]}),(0,g.jsx)(z,{children:(0,g.jsx)(c.z,{name:"submit",children:h("Submit")})})]})})})]})})}))}}]);
//# sourceMappingURL=609.e7b79706.chunk.js.map