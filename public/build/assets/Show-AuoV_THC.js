import{u as n,j as r,d,y as u,B as p,a as y}from"./app-mLxcET_5.js";import{H as x}from"./HeaderTitle-JSnmoyUL.js";import{u as f}from"./useHeaderTitle-6i0nhXwp.js";import{P as h}from"./index-6UyWCYbi.js";import{D as k}from"./index-cbbPciRo.js";import{T as j}from"./Table-_7qCSI7_.js";import"./index-EjonwaP1.js";import"./TextArea-Gux9BosC.js";import"./styleChecker-Vqpbzx7U.js";import"./index-y0JURIQg.js";import"./CheckOutlined-s3rq-L-r.js";import"./index-dnK0832R.js";import"./index-s7wTHhU8.js";import"./index-lLeYFVl8.js";import"./useForceUpdate-nPLuiMAw.js";import"./FileOutlined-5qX7gkDd.js";function O({student:o}){console.log(o);const e=n(),c=o.enrolled_courses.map(s=>{var t,i,a;return{key:s.id,studentId:o.id,courseId:(t=s.course)==null?void 0:t.id,courseName:(i=s.course)==null?void 0:i.title,coursePrice:(a=s.course)==null?void 0:a.price}}),m=[{title:e("Courses","الدورات"),dataIndex:"courseName",key:"courseName",render:(s,t)=>r.jsx(d,{href:route("courses.edit",t.courseId),children:s})},{title:e("Action","العملية"),dataIndex:"courseId",key:"courseId",render:(s,t)=>r.jsx(h,{title:e("Are you sure?","هل انت متأكد؟"),onConfirm:()=>u.post(route("admin.students.blockFromCourse",[t.studentId,s])),okText:e("Yes","نعم"),cancelText:e("No","لا"),children:r.jsx(p,{type:"primary",danger:!0,children:e("Block","حجب")})})}],l=[{key:"1",label:e("User","المستخدم"),children:o.name},{key:"2",label:e("Email","البريد الالكتروني"),children:o.email},{key:"3",label:e("Phone","رقم الهاتف"),children:o.phone},{key:"4",label:e("Country","الدولة"),children:o.country},{key:"5",label:e("City","المدينة"),children:o.city}];return f(r.jsx(x,{title:e("Students","الطلاب")})),r.jsxs(r.Fragment,{children:[r.jsx(y,{title:"Orders"}),r.jsx(k,{title:e("User Info","بيانات المستخدم"),bordered:!0,items:l,className:"mb-8"}),r.jsx(j,{className:"shadow",dataSource:c,columns:m,pagination:!1})]})}export{O as default};
