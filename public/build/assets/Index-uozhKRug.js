import{u as m,j as a,B as s,y as i,a as d}from"./app-mLxcET_5.js";import{H as p}from"./HeaderTitle-JSnmoyUL.js";import{P as u}from"./PaymentStatusBadge-EBoSCA0F.js";import{u as y}from"./useHeaderTitle-6i0nhXwp.js";import{S as l}from"./StudentLayout-GVe7p4tZ.js";import{T as x}from"./Table-_7qCSI7_.js";import"./index-Dbx42wUp.js";import"./styleChecker-Vqpbzx7U.js";import"./index-y0JURIQg.js";import"./TextArea-Gux9BosC.js";import"./CheckOutlined-s3rq-L-r.js";import"./index-EjonwaP1.js";import"./index-dnK0832R.js";import"./index-s7wTHhU8.js";import"./index-lLeYFVl8.js";import"./useForceUpdate-nPLuiMAw.js";import"./FileOutlined-5qX7gkDd.js";c.layout=n=>a.jsx(l,{children:n});function c({orders:n}){console.log(n);const e=m(),r=[{title:e("Payment Method","طريقة الدفع"),dataIndex:"payment",key:"payment",render:t=>t.payment_method},{title:e("Payment Status","حالة الدفع"),dataIndex:"payment",key:"payment_status",render:t=>a.jsx(u,{status:t.payment_status})},{title:e("Payment Amount","مبلغ الدفع"),dataIndex:"payment",key:"payment_amount",render:t=>t.payment_amount},{title:e("Phone Number","رقم الهاتف"),dataIndex:"payment",key:"phone_number",render:t=>t.phone_number},{title:e("Date","التاريخ"),dataIndex:"created_at",key:"created_at"},{title:e("Action","العمليات"),dataIndex:"id",key:"id",render:t=>a.jsx(s,{type:"link",onClick:()=>i.get(route("orders.show",t)),children:e("Show","عرض")})}],o=n.map(t=>({key:t.id,...t}));return y(a.jsx(p,{title:e("Orders","الاشتراكات")})),a.jsxs(a.Fragment,{children:[a.jsx(d,{title:"Orders"}),a.jsx(x,{className:"shadow",dataSource:o,columns:r})]})}export{c as default};
