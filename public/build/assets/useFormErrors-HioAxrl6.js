var i=Object.defineProperty;var m=(o,r,s)=>r in o?i(o,r,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[r]=s;var e=(o,r,s)=>(m(o,typeof r!="symbol"?r+"":r,s),s);import{q as a,r as n}from"./app-mLxcET_5.js";class c{constructor(r){e(this,"errors",[]);e(this,"form");e(this,"fields");this.form=r,this.fields=Object.keys(this.form.getFieldsValue())}clearFormErrors(){this.form.setFields(this.fields.map(r=>({name:r,errors:[]})))}errorsToFieldErrors(r){return Object.entries(r).map(([s,t])=>({name:s,message:t}))}updateErrors(r){this.errors=this.errorsToFieldErrors(r),console.log(this.errors),this.form.setFields(this.errors.map(s=>({name:s.name,errors:[s.message]})))}}const l=o=>{const{errors:r}=a().props;n.useEffect(()=>{const s=new c(o);if(s.clearFormErrors(),Object.keys(r).length>0)return s.updateErrors(r)},[r])},f=l;export{f as u};
