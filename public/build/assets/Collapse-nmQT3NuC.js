import{a5 as f,_ as X,c as _,Z as O,O as V,Q as H,ak as U,K as G,t as W,F as Y,a0 as ee,M as ne,$ as ae,r as E,C as q,g as te,m as oe,e as M,ai as le,b as re,aS as ie,aw as ce,al as se,G as L,h as D,aT as de}from"./app-mLxcET_5.js";var F=f.forwardRef(function(n,e){var a,t=n.prefixCls,l=n.forceRender,C=n.className,p=n.style,d=n.children,r=n.isActive,b=n.role,N=f.useState(r||l),o=X(N,2),i=o[0],u=o[1];return f.useEffect(function(){(l||r)&&u(!0)},[l,r]),i?f.createElement("div",{ref:e,className:_("".concat(t,"-content"),(a={},O(a,"".concat(t,"-content-active"),r),O(a,"".concat(t,"-content-inactive"),!r),a),C),style:p,role:b},f.createElement("div",{className:"".concat(t,"-content-box")},d)):null});F.displayName="PanelContent";var ue=["showArrow","headerClass","isActive","onItemClick","forceRender","className","prefixCls","collapsible","accordion","panelKey","extra","header","expandIcon","openMotion","destroyInactivePanel","children"],Q=f.forwardRef(function(n,e){var a,t,l=n.showArrow,C=l===void 0?!0:l,p=n.headerClass,d=n.isActive,r=n.onItemClick,b=n.forceRender,N=n.className,o=n.prefixCls,i=n.collapsible,u=n.accordion,A=n.panelKey,v=n.extra,c=n.header,h=n.expandIcon,x=n.openMotion,$=n.destroyInactivePanel,m=n.children,w=V(n,ue),g=i==="disabled",P=i==="header",I=i==="icon",S=v!=null&&typeof v!="boolean",s=function(){r==null||r(A)},y=function(K){(K.key==="Enter"||K.keyCode===G.ENTER||K.which===G.ENTER)&&s()},k=typeof h=="function"?h(n):f.createElement("i",{className:"arrow"});k&&(k=f.createElement("div",{className:"".concat(o,"-expand-icon"),onClick:["header","icon"].includes(i)?s:void 0},k));var j=_((a={},O(a,"".concat(o,"-item"),!0),O(a,"".concat(o,"-item-active"),d),O(a,"".concat(o,"-item-disabled"),g),a),N),T=_(p,(t={},O(t,"".concat(o,"-header"),!0),O(t,"".concat(o,"-header-collapsible-only"),P),O(t,"".concat(o,"-icon-collapsible-only"),I),t)),B={className:T,"aria-expanded":d,"aria-disabled":g,onKeyDown:y};return!P&&!I&&(B.onClick=s,B.role=u?"tab":"button",B.tabIndex=g?-1:0),f.createElement("div",H({},w,{ref:e,className:j}),f.createElement("div",B,C&&k,f.createElement("span",{className:"".concat(o,"-header-text"),onClick:i==="header"?s:void 0},c),S&&f.createElement("div",{className:"".concat(o,"-extra")},v)),f.createElement(U,H({visible:d,leavedClassName:"".concat(o,"-content-hidden")},x,{forceRender:b,removeOnLeave:$}),function(R,K){var Z=R.className,J=R.style;return f.createElement(F,{ref:K,prefixCls:o,className:Z,style:J,isActive:d,forceRender:b,role:u?"tabpanel":void 0},m)}))}),me=["children","label","key","collapsible","onItemClick","destroyInactivePanel"],ve=function(e,a){var t=a.prefixCls,l=a.accordion,C=a.collapsible,p=a.destroyInactivePanel,d=a.onItemClick,r=a.activeKey,b=a.openMotion,N=a.expandIcon;return e.map(function(o,i){var u=o.children,A=o.label,v=o.key,c=o.collapsible,h=o.onItemClick,x=o.destroyInactivePanel,$=V(o,me),m=String(v??i),w=c??C,g=x??p,P=function(s){w!=="disabled"&&(d(s),h==null||h(s))},I=!1;return l?I=r[0]===m:I=r.indexOf(m)>-1,f.createElement(Q,H({},$,{prefixCls:t,key:m,panelKey:m,isActive:I,accordion:l,openMotion:b,expandIcon:N,header:A,collapsible:w,onItemClick:P,destroyInactivePanel:g}),u)})},fe=function(e,a,t){if(!e)return null;var l=t.prefixCls,C=t.accordion,p=t.collapsible,d=t.destroyInactivePanel,r=t.onItemClick,b=t.activeKey,N=t.openMotion,o=t.expandIcon,i=e.key||String(a),u=e.props,A=u.header,v=u.headerClass,c=u.destroyInactivePanel,h=u.collapsible,x=u.onItemClick,$=!1;C?$=b[0]===i:$=b.indexOf(i)>-1;var m=h??p,w=function(I){m!=="disabled"&&(r(I),x==null||x(I))},g={key:i,panelKey:i,header:A,headerClass:v,isActive:$,prefixCls:l,destroyInactivePanel:c??d,openMotion:N,accordion:C,children:e.props.children,onItemClick:w,expandIcon:o,collapsible:m};return typeof e.type=="string"?e:(Object.keys(g).forEach(function(P){typeof g[P]>"u"&&delete g[P]}),f.cloneElement(e,g))};function ge(n,e,a){return Array.isArray(n)?ve(n,a):W(e).map(function(t,l){return fe(t,l,a)})}function Ce(n){var e=n;if(!Array.isArray(e)){var a=ne(e);e=a==="number"||a==="string"?[e]:[]}return e.map(function(t){return String(t)})}var pe=f.forwardRef(function(n,e){var a=n.prefixCls,t=a===void 0?"rc-collapse":a,l=n.destroyInactivePanel,C=l===void 0?!1:l,p=n.style,d=n.accordion,r=n.className,b=n.children,N=n.collapsible,o=n.openMotion,i=n.expandIcon,u=n.activeKey,A=n.defaultActiveKey,v=n.onChange,c=n.items,h=_(t,r),x=Y([],{value:u,onChange:function(S){return v==null?void 0:v(S)},defaultValue:A,postState:Ce}),$=X(x,2),m=$[0],w=$[1],g=function(S){return w(function(){if(d)return m[0]===S?[]:[S];var s=m.indexOf(S),y=s>-1;return y?m.filter(function(k){return k!==S}):[].concat(ae(m),[S])})};ee(!b,"[rc-collapse] `children` will be removed in next major version. Please use `items` instead.");var P=ge(c,b,{prefixCls:t,accordion:d,openMotion:o,expandIcon:i,collapsible:N,destroyInactivePanel:C,onItemClick:g,activeKey:m});return f.createElement("div",{ref:e,className:h,style:p,role:d?"tablist":void 0},P)});const z=Object.assign(pe,{Panel:Q});z.Panel;const be=E.forwardRef((n,e)=>{const{getPrefixCls:a}=E.useContext(q),{prefixCls:t,className:l,showArrow:C=!0}=n,p=a("collapse",t),d=_({[`${p}-no-arrow`]:!C},l);return E.createElement(z.Panel,Object.assign({ref:e},n,{prefixCls:p,className:d}))}),he=be,xe=n=>{const{componentCls:e,contentBg:a,padding:t,headerBg:l,headerPadding:C,collapseHeaderPaddingSM:p,collapseHeaderPaddingLG:d,collapsePanelBorderRadius:r,lineWidth:b,lineType:N,colorBorder:o,colorText:i,colorTextHeading:u,colorTextDisabled:A,fontSizeLG:v,lineHeight:c,lineHeightLG:h,marginSM:x,paddingSM:$,paddingLG:m,paddingXS:w,motionDurationSlow:g,fontSizeIcon:P,contentPadding:I,fontHeight:S,fontHeightLG:s}=n,y=`${M(b)} ${N} ${o}`;return{[e]:Object.assign(Object.assign({},re(n)),{backgroundColor:l,border:y,borderBottom:0,borderRadius:r,"&-rtl":{direction:"rtl"},[`& > ${e}-item`]:{borderBottom:y,"&:last-child":{[`
            &,
            & > ${e}-header`]:{borderRadius:`0 0 ${M(r)} ${M(r)}`}},[`> ${e}-header`]:{position:"relative",display:"flex",flexWrap:"nowrap",alignItems:"flex-start",padding:C,color:u,lineHeight:c,cursor:"pointer",transition:`all ${g}, visibility 0s`,[`> ${e}-header-text`]:{flex:"auto"},"&:focus":{outline:"none"},[`${e}-expand-icon`]:{height:S,display:"flex",alignItems:"center",paddingInlineEnd:x},[`${e}-arrow`]:Object.assign(Object.assign({},ie()),{fontSize:P,svg:{transition:`transform ${g}`}}),[`${e}-header-text`]:{marginInlineEnd:"auto"}},[`${e}-icon-collapsible-only`]:{cursor:"unset",[`${e}-expand-icon`]:{cursor:"pointer"}}},[`${e}-content`]:{color:i,backgroundColor:a,borderTop:y,[`& > ${e}-content-box`]:{padding:I},"&-hidden":{display:"none"}},"&-small":{[`> ${e}-item`]:{[`> ${e}-header`]:{padding:p,paddingInlineStart:w,[`> ${e}-expand-icon`]:{marginInlineStart:n.calc($).sub(w).equal()}},[`> ${e}-content > ${e}-content-box`]:{padding:$}}},"&-large":{[`> ${e}-item`]:{fontSize:v,lineHeight:h,[`> ${e}-header`]:{padding:d,paddingInlineStart:t,[`> ${e}-expand-icon`]:{height:s,marginInlineStart:n.calc(m).sub(t).equal()}},[`> ${e}-content > ${e}-content-box`]:{padding:m}}},[`${e}-item:last-child`]:{[`> ${e}-content`]:{borderRadius:`0 0 ${M(r)} ${M(r)}`}},[`& ${e}-item-disabled > ${e}-header`]:{"\n          &,\n          & > .arrow\n        ":{color:A,cursor:"not-allowed"}},[`&${e}-icon-position-end`]:{[`& > ${e}-item`]:{[`> ${e}-header`]:{[`${e}-expand-icon`]:{order:1,paddingInlineEnd:0,paddingInlineStart:x}}}}})}},ye=n=>{const{componentCls:e}=n,a=`> ${e}-item > ${e}-header ${e}-arrow svg`;return{[`${e}-rtl`]:{[a]:{transform:"rotate(180deg)"}}}},$e=n=>{const{componentCls:e,headerBg:a,paddingXXS:t,colorBorder:l}=n;return{[`${e}-borderless`]:{backgroundColor:a,border:0,[`> ${e}-item`]:{borderBottom:`1px solid ${l}`},[`
        > ${e}-item:last-child,
        > ${e}-item:last-child ${e}-header
      `]:{borderRadius:0},[`> ${e}-item:last-child`]:{borderBottom:0},[`> ${e}-item > ${e}-content`]:{backgroundColor:"transparent",borderTop:0},[`> ${e}-item > ${e}-content > ${e}-content-box`]:{paddingTop:t}}}},Ie=n=>{const{componentCls:e,paddingSM:a}=n;return{[`${e}-ghost`]:{backgroundColor:"transparent",border:0,[`> ${e}-item`]:{borderBottom:0,[`> ${e}-content`]:{backgroundColor:"transparent",border:0,[`> ${e}-content-box`]:{paddingBlock:a}}}}}},Pe=n=>({headerPadding:`${n.paddingSM}px ${n.padding}px`,headerBg:n.colorFillAlter,contentPadding:`${n.padding}px 16px`,contentBg:n.colorBgContainer}),Se=te("Collapse",n=>{const e=oe(n,{collapseHeaderPaddingSM:`${M(n.paddingXS)} ${M(n.paddingSM)}`,collapseHeaderPaddingLG:`${M(n.padding)} ${M(n.paddingLG)}`,collapsePanelBorderRadius:n.borderRadiusLG});return[xe(e),$e(e),Ie(e),ye(e),le(e)]},Pe),Ne=E.forwardRef((n,e)=>{const{getPrefixCls:a,direction:t,collapse:l}=E.useContext(q),{prefixCls:C,className:p,rootClassName:d,style:r,bordered:b=!0,ghost:N,size:o,expandIconPosition:i="start",children:u,expandIcon:A}=n,v=ce(s=>{var y;return(y=o??s)!==null&&y!==void 0?y:"middle"}),c=a("collapse",C),h=a(),[x,$,m]=Se(c),w=E.useMemo(()=>i==="left"?"start":i==="right"?"end":i,[i]),g=function(){let s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const y=A?A(s):E.createElement(de,{rotate:s.isActive?90:void 0});return D(y,()=>({className:_(y.props.className,`${c}-arrow`)}))},P=_(`${c}-icon-position-${w}`,{[`${c}-borderless`]:!b,[`${c}-rtl`]:t==="rtl",[`${c}-ghost`]:!!N,[`${c}-${v}`]:v!=="middle"},l==null?void 0:l.className,p,d,$,m),I=Object.assign(Object.assign({},se(h)),{motionAppear:!1,leavedClassName:`${c}-content-hidden`}),S=E.useMemo(()=>u?W(u).map((s,y)=>{var k,j;if(!((k=s.props)===null||k===void 0)&&k.disabled){const T=(j=s.key)!==null&&j!==void 0?j:String(y),{disabled:B,collapsible:R}=s.props,K=Object.assign(Object.assign({},L(s.props,["disabled"])),{key:T,collapsible:R??(B?"disabled":void 0)});return D(s,K)}return s}):null,[u]);return x(E.createElement(z,Object.assign({ref:e,openMotion:I},L(n,["rootClassName"]),{expandIcon:g,prefixCls:c,className:P,style:Object.assign(Object.assign({},l==null?void 0:l.style),r)}),S))}),Ae=Object.assign(Ne,{Panel:he});export{Ae as C};
