import{r as u,u as l,j as e,d,b$ as c,bF as x,c0 as n,c1 as h,c2 as j,c3 as m,c4 as S,J as p,bs as f,c5 as b,b9 as g}from"./app-ROvF5bcD.js";const{Sider:C}=n;function i(r,o,s,t){return{key:o,icon:s,children:t,label:r}}function y(){const[r,o]=u.useState(!1),s=l(),t=[i(e.jsx(d,{href:route("home"),children:s("Home","الرئيسية")}),"home",e.jsx(h,{})),i(e.jsx(d,{href:route("enrolled-courses.index"),children:s("Courses","الكورسات")}),"courses",e.jsx(j,{})),i(e.jsx(d,{href:route("orders.index"),children:s("Orders","الاشتراكات")}),"orders",e.jsx(m,{}))];return e.jsxs(C,{collapsible:!0,collapsed:r,onCollapse:a=>o(a),children:[e.jsx(c,{}),e.jsx(x,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline",items:t})]})}const{Header:k,Content:H,Sider:v}=n;function O({children:r}){const{token:{colorBgContainer:o,borderRadiusLG:s}}=S.useToken();p();const[t,a]=u.useState(null);return e.jsx(f.Provider,{value:{header:t,setHeader:a},children:e.jsxs(n,{style:{minHeight:"100vh"},children:[e.jsx(y,{}),e.jsxs(n,{children:[e.jsx(b,{header:t}),e.jsx(H,{className:"m-4",children:e.jsx("div",{style:{padding:24,background:o,borderRadius:s},children:r})}),e.jsx(g,{})]})]})})}export{O as S};