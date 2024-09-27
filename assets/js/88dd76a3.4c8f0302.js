"use strict";(self.webpackChunkztassess=self.webpackChunkztassess||[]).push([[5960],{88216:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=r(74848),i=r(28453);const o={},t="071: ABM Provisioning",l={id:"workshop-guidance/devices/RMD_071",title:"071: ABM Provisioning",description:"Overview ##",source:"@site/docs/workshop-guidance/devices/RMD_071.md",sourceDirName:"workshop-guidance/devices",slug:"/workshop-guidance/devices/RMD_071",permalink:"/zerotrustassessment/docs/workshop-guidance/devices/RMD_071",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/zerotrustassessment/tree/main/src/react/docs/workshop-guidance/devices/RMD_071.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"070: User enrollment",permalink:"/zerotrustassessment/docs/workshop-guidance/devices/RMD_070"},next:{title:"072: RBAC",permalink:"/zerotrustassessment/docs/workshop-guidance/devices/RMD_072"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Reference",id:"reference",level:2}];function a(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"071-abm-provisioning",children:"071: ABM Provisioning"})}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"Let\u2019s dive into the details of ABM (Apple Business Manager) provisioning in Microsoft Intune:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Automated Device Enrollment (ADE) with ABM"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Overview"}),": ADE allows corporate-owned iOS/iPadOS devices purchased through Apple Business Manager or Apple School Manager to be enrolled in Intune without manual intervention."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Benefits"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Supervised Mode"}),": ADE supports supervised mode, which enables features like software updates, app restrictions, and more."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Bulk Enrollment"}),": Ideal for enrolling a large number of devices."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"User-less Devices"}),": Works for kiosks, dedicated devices, and shared device mode."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Drawbacks"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Personal/BYOD Devices"}),": Not recommended for personal or BYOD devices."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Managed by Another MDM"}),": If devices are managed by another MDM provider, users must unenroll from that provider to fully manage them in Intune."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Device Enrollment Manager (DEM) Account"}),": The DEM account isn't supported."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Impact on End Users"}),": Devices enrolled via ADE apply configurations that users can't easily remove. It's recommended to wipe devices before enrollment to return them to an out-of-box state."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Comparison to User-Driven Enrollment"}),":","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"User-Driven Enrollment"}),": Provides a faster, user-friendly experience where users sign in to their work account in the Settings app. Intune policies are applied silently."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ABM Provisioning (ADE)"}),": Primarily for corporate-owned devices, whereas user-driven enrollment is more flexible but not recommended for organizational devices."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Remember that ADE streamlines device setup, but consider your organization's needs and device ownership when choosing the right enrollment method!"}),"\n",(0,s.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Tutorial: ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/mem/intune/enrollment/tutorial-use-device-enrollment-program-enroll-ios",children:"https://learn.microsoft.com/en-us/mem/intune/enrollment/tutorial-use-device-enrollment-program-enroll-ios"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/mem/intune/enrollment/device-enrollment-program-enroll-ios",children:"https://learn.microsoft.com/en-us/mem/intune/enrollment/device-enrollment-program-enroll-ios"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>l});var s=r(96540);const i={},o=s.createContext(i);function t(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);