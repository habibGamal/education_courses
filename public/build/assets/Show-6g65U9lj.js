import{u as j,j as a,d as _,a as g}from"./app-mLxcET_5.js";import{H as w}from"./HeaderTitle-JSnmoyUL.js";import{P as I}from"./PaymentStatusBadge-EBoSCA0F.js";import{i as S}from"./imagePathResolver-yDEFMubq.js";import{u as T}from"./useHeaderTitle-6i0nhXwp.js";import{S as D}from"./StudentLayout-GVe7p4tZ.js";import{I as N}from"./enums-kM-uWd7b.js";import{I as C}from"./index-AwmkVS3L.js";import{D as H}from"./index-cbbPciRo.js";import{T as O}from"./Table-_7qCSI7_.js";import"./index-Dbx42wUp.js";import"./index-EjonwaP1.js";import"./TextArea-Gux9BosC.js";import"./styleChecker-Vqpbzx7U.js";import"./index-y0JURIQg.js";import"./CheckOutlined-s3rq-L-r.js";import"./index-dnK0832R.js";import"./index-s7wTHhU8.js";import"./index-lLeYFVl8.js";import"./useForceUpdate-nPLuiMAw.js";import"./FileOutlined-5qX7gkDd.js";R.layout=e=>a.jsx(D,{children:e});function R({order:e}){var i,m,n,r,l,p,c,u,y,d,h;console.log(e);const t=j(),k=e.order_items.map(s=>{var o,b,f;return{key:s.id,itemId:(o=s.item)==null?void 0:o.id,courseName:(b=s.item)==null?void 0:b.title,coursePrice:(f=s.item)==null?void 0:f.price,type:s.item_type}}),x=[{title:t("Courses","الدورات"),dataIndex:"courseName",key:"courseName",render:(s,o)=>a.jsx(_,{href:o.type===N.Course?route("browse.courses.show",o.itemId):route("browse.packages.show",o.itemId),children:s})},{title:t("Price","السعر"),dataIndex:"coursePrice",key:"coursePrice"}],P=[{key:"3",label:t("Payment Method","طريقة الدفع"),children:(i=e.payment)==null?void 0:i.payment_method},{key:"4",label:t("Payment Status","حالة الدفع"),children:a.jsx(I,{status:(m=e.payment)==null?void 0:m.payment_status})},{key:"5",label:"Order Date",children:e.created_at},{key:"8",label:t("Phone","رقم الهاتف"),children:(n=e.payment)==null?void 0:n.phone_number},{key:"6",label:t("Total before discount","الاجمالي قبل الخصم"),children:(r=e.payment)==null?void 0:r.total},{key:"Discount",label:t("Discount","الخصم"),children:(p=(l=e.payment)==null?void 0:l.coupon)==null?void 0:p.value},{key:"7",label:t("Payment Required","المبلغ المطلوب"),children:(c=e.payment)==null?void 0:c.required_amount},{key:"paied_amount",label:t("Paid Amount","المبلغ المدفوع"),children:(u=e.payment)==null?void 0:u.payment_amount},{key:"9",label:t("Coupon","الكوبون"),children:(d=(y=e.payment)==null?void 0:y.coupon)==null?void 0:d.code},{key:"10",label:t("Screenshot","صورة الدفع"),children:a.jsx(C,{width:200,src:S((h=e.payment)==null?void 0:h.screenshot)})}];return T(a.jsx(w,{title:t("Orders","الاشتراكات")})),a.jsxs(a.Fragment,{children:[a.jsx(g,{title:"Orders"}),a.jsx(H,{title:t("Payment Info","بيانات الدفع"),bordered:!0,items:P,className:"mb-8"}),a.jsx(O,{className:"shadow",dataSource:k,columns:x,pagination:!1})]})}export{R as default};
