import{u as s,j as o,y as p}from"./app-ROvF5bcD.js";import{P as n}from"./PackageForm-HVtB2K-Z.js";import{H as l}from"./HeaderTitle-b9y9x18f.js";import{u}from"./useHeaderTitle-k-wh1c6d.js";import{F as f}from"./index-W6NZO4K1.js";import"./FileUpload-s4iGs_NC.js";import"./index-OH9c3Oij.js";import"./useForceUpdate-pAwHZwMX.js";import"./DeleteOutlined-8QVuOfP0.js";import"./index-NgIUlJ99.js";import"./TextArea-pf1Q8qAZ.js";import"./CheckOutlined-15dYBcDI.js";import"./imagePathResolver-yDEFMubq.js";import"./useFormErrors-J54mLjAH.js";import"./index-Bc1AAeSu.js";import"./index-bW-R7lYg.js";function R({pkg:i}){const m=s(),[e]=f.useForm(),a=t=>{var r;(r=t.thumbnail)!=null&&r.file?t.thumbnail=t.thumbnail.file.originFileObj:delete t.thumbnail,console.log(t),p.post(route("packages.update",{id:i.id}),{...t,_method:"put"},{forceFormData:!0})};return u(o.jsx(l,{title:m("Packages","الباقات")})),o.jsx(o.Fragment,{children:o.jsx(n,{form:e,onFinish:a,initialValues:i})})}export{R as default};
