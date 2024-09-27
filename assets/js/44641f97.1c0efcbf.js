"use strict";(self.webpackChunkztassess=self.webpackChunkztassess||[]).push([[7640],{92918:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=t(74848),r=t(28453);const s={},o="059: Deploy macOS Identity management",c={id:"workshop-guidance/identity/RMI_059",title:"059: Deploy macOS Identity management",description:"Overview",source:"@site/docs/workshop-guidance/identity/RMI_059.md",sourceDirName:"workshop-guidance/identity",slug:"/workshop-guidance/identity/RMI_059",permalink:"/zerotrustassessment/docs/workshop-guidance/identity/RMI_059",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/zerotrustassessment/tree/main/src/react/docs/workshop-guidance/identity/RMI_059.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"058: Remove DJ Windows clients from Active Directory",permalink:"/zerotrustassessment/docs/workshop-guidance/identity/RMI_058"},next:{title:"060: Deploy macOS SSO Extension",permalink:"/zerotrustassessment/docs/workshop-guidance/identity/RMI_060"}},a={},l=[{value:"Overview",id:"overview",level:2},{value:"Reference",id:"reference",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"059-deploy-macos-identity-management",children:"059: Deploy macOS Identity management"})}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"There are several recommended configurations for identity management on macOS:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Enroll all Macs in an MDM, this provides the best Mac management user experience"}),"\n",(0,i.jsxs)(n.li,{children:["Have an identity strategy for how your users will log into the Macs (Kerberos SSO, Platform SSO, 3rd party option, etc.)","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Avoid on-premises Active Directory dependent options"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Integrate your MDM with Conditional Access","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If the MDM is Intune then ensure you have created a device compliance policy for your Macs"}),"\n",(0,i.jsx)(n.li,{children:"If the MDM is not Intune then make sure you integrate the MDM with the Microsoft compliance API so device health can be leveraged in Conditional Access"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/mem/intune/protect/compliance-policy-create-mac-os",children:"Device Compliance settings for macOS settings in Intune | Microsoft Learn"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/mem/intune/protect/device-compliance-partners",children:"Support third-party device compliance partners in Intune | Microsoft Learn"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/mem/intune/protect/conditional-access-integrate-jamf",children:"Manually configure Jamf Pro integration with Microsoft Intune - Microsoft Intune | Microsoft Learn"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(96540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);