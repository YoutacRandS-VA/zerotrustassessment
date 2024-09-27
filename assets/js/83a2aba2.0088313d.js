"use strict";(self.webpackChunkztassess=self.webpackChunkztassess||[]).push([[2977],{6049:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var s=t(74848),r=t(28453);const i={},o="120: Autopilot Pre-provisioning",d={id:"workshop-guidance/devices/RMD_120",title:"120: Autopilot Pre-provisioning",description:"Overview",source:"@site/docs/workshop-guidance/devices/RMD_120.md",sourceDirName:"workshop-guidance/devices",slug:"/workshop-guidance/devices/RMD_120",permalink:"/zerotrustassessment/docs/workshop-guidance/devices/RMD_120",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/zerotrustassessment/tree/main/src/react/docs/workshop-guidance/devices/RMD_120.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"119: Autopilot User Enrollment",permalink:"/zerotrustassessment/docs/workshop-guidance/devices/RMD_119"},next:{title:"121: Migrate GPO to MDM policies",permalink:"/zerotrustassessment/docs/workshop-guidance/devices/RMD_121"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Reference",id:"reference",level:2}];function a(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"120-autopilot-pre-provisioning",children:"120: Autopilot Pre-provisioning"})}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsxs)(n.p,{children:["Windows Autopilot for pre-provisioned deployment is an Autopilot solution that automates the configuration of Windows on a new device delivered directly from an IT department, OEM, or reseller. The deployment is split up between the ",(0,s.jsx)(n.strong,{children:"Technician flow"})," and ",(0,s.jsx)(n.strong,{children:"User flow"})," phases so that the deployment is faster when the end-user receives the device. The deployment is faster because the IT department, OEM, or reseller completed the first portion of the deployment during the Technician flow."]}),"\n",(0,s.jsx)(n.p,{children:"Device ESP phase and user ESP phase are split and occur at two different points in time:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["The IT department, OEM, or reseller handles the device ESP phase. This phase is known as the ",(0,s.jsx)(n.strong,{children:"Technician flow"}),". Once the Technician flow is complete, the device is powered down and delivered to the end-user."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["When the end-user receives the device, they turn it on for the first time, and the device undergoes the user ESP phase. A portion of device ESP also reruns to ensure there are no new applications or policies assigned to the device since the Technician flow ran. This phase is known as the ",(0,s.jsx)(n.strong,{children:"User flow"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Scenario"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Pros"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Cons"})})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Pre-provisioned"})}),(0,s.jsx)(n.td,{children:"\u2022 Faster for user since IT admin/OEM/reseller handles bulk of device ESP during the technician flow."}),(0,s.jsxs)(n.td,{children:["\u2022 Requires interaction by IT admin/OEM/reseller.  ",(0,s.jsx)("br",{}),"\u2022 Requires ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/manage/component-updates/tpm-key-attestation",children:"TPM attestation"})," during technician flow so only works on physical devices with supported TPM (doesn't work in VMs even with virtual TPM)."]})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/autopilot/tutorial/pre-provisioning/azure-ad-join-workflow",children:"Pre-provisioned deployment Microsoft Entra join"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/autopilot/tutorial/pre-provisioning/hybrid-azure-ad-join-workflow",children:"Pre-provisioned deployment Microsoft Entra hybrid join"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var s=t(96540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);