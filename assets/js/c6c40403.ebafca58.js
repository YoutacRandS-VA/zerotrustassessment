"use strict";(self.webpackChunkztassess=self.webpackChunkztassess||[]).push([[6830],{28942:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var r=n(74848),i=n(28453);const o={},t="002: Device groups",c={id:"workshop-guidance/devices/RMD_002",title:"002: Device groups",description:"Overview",source:"@site/docs/workshop-guidance/devices/RMD_002.md",sourceDirName:"workshop-guidance/devices",slug:"/workshop-guidance/devices/RMD_002",permalink:"/zerotrustassessment/docs/workshop-guidance/devices/RMD_002",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/zerotrustassessment/tree/main/src/react/docs/workshop-guidance/devices/RMD_002.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"001: Filters",permalink:"/zerotrustassessment/docs/workshop-guidance/devices/RMD_001"},next:{title:"003: User groups",permalink:"/zerotrustassessment/docs/workshop-guidance/devices/RMD_003"}},l={},a=[{value:"Overview",id:"overview",level:2},{value:"Reference",id:"reference",level:2}];function d(e){const s={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"002-device-groups",children:"002: Device groups"})}),"\n",(0,r.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Overview of Intune Grouping and Targeting Concepts"}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Azure Active Directory (Azure AD) Groups"}),": Intune primarily uses Azure AD groups for grouping and targeting. These groups allow you to assign apps, policies, and other workloads to users and devices. They're also used for role-based administration (RBAC) as scope groups."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Virtual Groups"}),': The "All users" and "All devices" assignments are Intune\'s virtual groups. They exist by default in all Intune tenants and don\'t require manual management. They\'re highly scalable and optimized.']}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Filters"}),": Filters allow you to narrow the assignment scope of apps and policies. You can target user or device groups and filter devices based on specific properties. Filtering is high-performance and evaluated during device check-in without pre-computation\xb9."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Benefits of Device Groups"}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Granularity"}),": Device groups allow precise targeting. You can create groups based on device properties (e.g., OS version, compliance status)."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Efficiency"}),": Assigning policies to smaller device groups reduces synchronization overhead and speeds up deployments."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Troubleshooting"}),": Device groups help isolate issues by narrowing down the affected devices."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Drawbacks and Considerations"}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Synchronization Backlogs"}),": Large Azure AD groups with many users or devices can cause synchronization delays. Policy and app deployments take longer to reach managed devices\xb9."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Tattooed Settings"}),": If settings or apps are applied before device filters are evaluated, troubleshooting unexpected configurations becomes challenging\xb2."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Device Groups vs. User Groups"}),":"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Device Groups"}),": Ideal for device-specific policies (e.g., security settings, app installations)."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"User Groups"}),": Useful for user-centric policies (e.g., user-targeted apps, conditional access)."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"reference",children:"Reference"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"https://learn.microsoft.com/en-us/mem/intune/fundamentals/groups-add#device-groups",children:"https://learn.microsoft.com/en-us/mem/intune/fundamentals/groups-add#device-groups"})}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>c});var r=n(96540);const i={},o=r.createContext(i);function t(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);