import{u as x,q as b,j as e,B as h}from"./app-mLxcET_5.js";import{F as j}from"./FileUpload-rVdaSVlu.js";import{i}from"./imagePathResolver-yDEFMubq.js";import{u as I}from"./useFormErrors-HioAxrl6.js";import{F as s}from"./index-yfN4NfQC.js";import{I as t}from"./index-EjonwaP1.js";import{C as f}from"./index-dnK0832R.js";function w({form:c,onFinish:n,initialValues:r}){var d;const o=x(),p=r?"edit":"create",l=r?i(r==null?void 0:r.thumbnail):void 0;I(c);const a=b().props.courses.map(m=>({label:m.title,value:m.id})),u=(d=r==null?void 0:r.courses)==null?void 0:d.map(m=>m.id);return console.log({...r,courses:u}),e.jsxs(s,{name:"create_package",labelCol:{md:{span:4}},wrapperCol:{span:20},onFinish:n,labelAlign:"left",form:c,initialValues:{...r,courses:u},children:[e.jsx(s.Item,{label:o("Title","العنوان"),name:"title",rules:[{required:!0,max:255}],children:e.jsx(t,{})}),e.jsx(s.Item,{label:o("Thumbnail","الصورة المصغرة"),name:"thumbnail",rules:[{required:p==="create"}],children:e.jsx(j,{})}),p==="edit"&&e.jsx(s.Item,{label:o("Current Thumbnail","الصورة المصغرة الحالية"),children:e.jsx("img",{src:l,alt:r==null?void 0:r.title,className:"w-48 rounded shadow"})}),e.jsx(s.Item,{label:o("Description","الوصف"),name:"description",rules:[{required:!0}],children:e.jsx(t.TextArea,{})}),e.jsx(s.Item,{label:o("Price","السعر"),name:"price",rules:[{required:!0}],children:e.jsx(t,{type:"number"})}),e.jsx(s.Item,{label:o("Discount Price","سعر الخصم"),name:"discount_price",rules:[{required:!0}],children:e.jsx(t,{type:"number"})}),e.jsx(s.Item,{label:o("Courses","الكورسات"),name:"courses",rules:[{required:!0}],children:e.jsx(f.Group,{options:a,className:"w-full grid grid-cols-1 gap-4"})}),e.jsx(s.Item,{children:e.jsx(h,{type:"primary",htmlType:"submit",children:o("Submit","إرسال")})})]})}export{w as P};
