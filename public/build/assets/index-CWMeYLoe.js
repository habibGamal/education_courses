import{r,K as ne,aj as Oe,Q as we,aq as ot,bH as rt,e as it,g as lt,c as oe,h as st,C as Te,a2 as $e,t as je,aH as te,T as de,v as at,G as Re,F as ct,bn as dt}from"./app-ROvF5bcD.js";import{C as ut}from"./CheckOutlined-15dYBcDI.js";import{E as pt}from"./EditOutlined-IUsSaNij.js";import{o as Ie,i as he}from"./styleChecker-kZfa9gQd.js";import{T as ft}from"./TextArea-pf1Q8qAZ.js";var gt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]]);return o};const mt={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},yt=r.forwardRef((e,t)=>{const o=f=>{const{keyCode:s}=f;s===ne.ENTER&&f.preventDefault()},n=f=>{const{keyCode:s}=f,{onClick:b}=e;s===ne.ENTER&&b&&b()},{style:i,noStyle:p,disabled:g}=e,c=gt(e,["style","noStyle","disabled"]);let d={};return p||(d=Object.assign({},mt)),g&&(d.pointerEvents="none"),d=Object.assign(Object.assign({},d),i),r.createElement("div",Object.assign({role:"button",tabIndex:0,ref:t},c,{onKeyDown:o,onKeyUp:n,style:d}))}),Ee=yt;var bt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"};const vt=bt;var ht=function(t,o){return r.createElement(Oe,we({},t,{ref:o,icon:vt}))};const Et=r.forwardRef(ht);var xt=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,o=[],n=0;n<e.rangeCount;n++)o.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null;break}return e.removeAllRanges(),function(){e.type==="Caret"&&e.removeAllRanges(),e.rangeCount||o.forEach(function(i){e.addRange(i)}),t&&t.focus()}},St=xt,xe={"text/plain":"Text","text/html":"Url",default:"Text"},Ct="Copy to clipboard: #{key}, Enter";function Ot(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}function wt(e,t){var o,n,i,p,g,c,d=!1;t||(t={}),o=t.debug||!1;try{i=St(),p=document.createRange(),g=document.getSelection(),c=document.createElement("span"),c.textContent=e,c.ariaHidden="true",c.style.all="unset",c.style.position="fixed",c.style.top=0,c.style.clip="rect(0, 0, 0, 0)",c.style.whiteSpace="pre",c.style.webkitUserSelect="text",c.style.MozUserSelect="text",c.style.msUserSelect="text",c.style.userSelect="text",c.addEventListener("copy",function(s){if(s.stopPropagation(),t.format)if(s.preventDefault(),typeof s.clipboardData>"u"){o&&console.warn("unable to use e.clipboardData"),o&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var b=xe[t.format]||xe.default;window.clipboardData.setData(b,e)}else s.clipboardData.clearData(),s.clipboardData.setData(t.format,e);t.onCopy&&(s.preventDefault(),t.onCopy(s.clipboardData))}),document.body.appendChild(c),p.selectNodeContents(c),g.addRange(p);var f=document.execCommand("copy");if(!f)throw new Error("copy command was unsuccessful");d=!0}catch(s){o&&console.error("unable to copy using execCommand: ",s),o&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(b){o&&console.error("unable to copy using clipboardData: ",b),o&&console.error("falling back to prompt"),n=Ot("message"in t?t.message:Ct),window.prompt(n,e)}}finally{g&&(typeof g.removeRange=="function"?g.removeRange(p):g.removeAllRanges()),c&&document.body.removeChild(c),i()}return d}var Tt=wt;const $t=ot(Tt);var jt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"};const Rt=jt;var It=function(t,o){return r.createElement(Oe,we({},t,{ref:o,icon:Rt}))};const Lt=r.forwardRef(It),Pt=(e,t,o,n)=>{const{titleMarginBottom:i,fontWeightStrong:p}=n;return{marginBottom:i,color:o,fontWeight:p,fontSize:e,lineHeight:t}},Dt=e=>{const t=[1,2,3,4,5],o={};return t.forEach(n=>{o[`
      h${n}&,
      div&-h${n},
      div&-h${n} > textarea,
      h${n}
    `]=Pt(e[`fontSizeHeading${n}`],e[`lineHeightHeading${n}`],e.colorTextHeading,e)}),o},Nt=e=>{const{componentCls:t}=e;return{"a&, a":Object.assign(Object.assign({},Ie(e)),{textDecoration:e.linkDecoration,"&:active, &:hover":{textDecoration:e.linkHoverDecoration},[`&[disabled], &${t}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed","&:active, &:hover":{color:e.colorTextDisabled},"&:active":{pointerEvents:"none"}}})}},kt=e=>({code:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.2em 0.1em",fontSize:"85%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3},kbd:{margin:"0 0.2em",paddingInline:"0.4em",paddingBlock:"0.15em 0.1em",fontSize:"90%",fontFamily:e.fontFamilyCode,background:"rgba(150, 150, 150, 0.06)",border:"1px solid rgba(100, 100, 100, 0.2)",borderBottomWidth:2,borderRadius:3},mark:{padding:0,backgroundColor:rt[2]},"u, ins":{textDecoration:"underline",textDecorationSkipInk:"auto"},"s, del":{textDecoration:"line-through"},strong:{fontWeight:600},"ul, ol":{marginInline:0,marginBlock:"0 1em",padding:0,li:{marginInline:"20px 0",marginBlock:0,paddingInline:"4px 0",paddingBlock:0}},ul:{listStyleType:"circle",ul:{listStyleType:"disc"}},ol:{listStyleType:"decimal"},"pre, blockquote":{margin:"1em 0"},pre:{padding:"0.4em 0.6em",whiteSpace:"pre-wrap",wordWrap:"break-word",background:"rgba(150, 150, 150, 0.1)",border:"1px solid rgba(100, 100, 100, 0.2)",borderRadius:3,fontFamily:e.fontFamilyCode,code:{display:"inline",margin:0,padding:0,fontSize:"inherit",fontFamily:"inherit",background:"transparent",border:0}},blockquote:{paddingInline:"0.6em 0",paddingBlock:0,borderInlineStart:"4px solid rgba(100, 100, 100, 0.2)",opacity:.85}}),_t=e=>{const{componentCls:t,paddingSM:o}=e,n=o;return{"&-edit-content":{position:"relative","div&":{insetInlineStart:e.calc(e.paddingSM).mul(-1).equal(),marginTop:e.calc(n).mul(-1).equal(),marginBottom:`calc(1em - ${it(n)})`},[`${t}-edit-content-confirm`]:{position:"absolute",insetInlineEnd:e.calc(e.marginXS).add(2).equal(),insetBlockEnd:e.marginXS,color:e.colorTextDescription,fontWeight:"normal",fontSize:e.fontSize,fontStyle:"normal",pointerEvents:"none"},textarea:{margin:"0!important",MozTransition:"none",height:"1em"}}}},Mt=e=>({[`${e.componentCls}-copy-success`]:{"\n    &,\n    &:hover,\n    &:focus":{color:e.colorSuccess}},[`${e.componentCls}-copy-icon-only`]:{marginInlineStart:0}}),Ht=()=>({"\n  a&-ellipsis,\n  span&-ellipsis\n  ":{display:"inline-block",maxWidth:"100%"},"&-single-line":{whiteSpace:"nowrap"},"&-ellipsis-single-line":{overflow:"hidden",textOverflow:"ellipsis","a&, span&":{verticalAlign:"bottom"},"> code":{paddingBlock:0,maxWidth:"calc(100% - 1.2em)",display:"inline-block",overflow:"hidden",textOverflow:"ellipsis",verticalAlign:"bottom",boxSizing:"content-box"}},"&-ellipsis-multiple-line":{display:"-webkit-box",overflow:"hidden",WebkitLineClamp:3,WebkitBoxOrient:"vertical"}}),zt=e=>{const{componentCls:t,titleMarginTop:o}=e;return{[t]:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({color:e.colorText,wordBreak:"break-word",lineHeight:e.lineHeight,[`&${t}-secondary`]:{color:e.colorTextDescription},[`&${t}-success`]:{color:e.colorSuccess},[`&${t}-warning`]:{color:e.colorWarning},[`&${t}-danger`]:{color:e.colorError,"a&:active, a&:focus":{color:e.colorErrorActive},"a&:hover":{color:e.colorErrorHover}},[`&${t}-disabled`]:{color:e.colorTextDisabled,cursor:"not-allowed",userSelect:"none"},"\n        div&,\n        p\n      ":{marginBottom:"1em"}},Dt(e)),{[`
      & + h1${t},
      & + h2${t},
      & + h3${t},
      & + h4${t},
      & + h5${t}
      `]:{marginTop:o},"\n      div,\n      ul,\n      li,\n      p,\n      h1,\n      h2,\n      h3,\n      h4,\n      h5":{"\n        + h1,\n        + h2,\n        + h3,\n        + h4,\n        + h5\n        ":{marginTop:o}}}),kt(e)),Nt(e)),{[`
        ${t}-expand,
        ${t}-edit,
        ${t}-copy
      `]:Object.assign(Object.assign({},Ie(e)),{marginInlineStart:e.marginXXS})}),_t(e)),Mt(e)),Ht()),{"&-rtl":{direction:"rtl"}})}},Bt=()=>({titleMarginTop:"1.2em",titleMarginBottom:"0.5em"}),Le=lt("Typography",e=>[zt(e)],Bt),At=e=>{const{prefixCls:t,"aria-label":o,className:n,style:i,direction:p,maxLength:g,autoSize:c=!0,value:d,onSave:f,onCancel:s,onEnd:b,component:R,enterIcon:$=r.createElement(Lt,null)}=e,y=r.useRef(null),v=r.useRef(!1),j=r.useRef(),[H,N]=r.useState(d);r.useEffect(()=>{N(d)},[d]),r.useEffect(()=>{if(y.current&&y.current.resizableTextArea){const{textArea:C}=y.current.resizableTextArea;C.focus();const{length:T}=C.value;C.setSelectionRange(T,T)}},[]);const u=C=>{let{target:T}=C;N(T.value.replace(/[\n\r]/g,""))},x=()=>{v.current=!0},w=()=>{v.current=!1},S=C=>{let{keyCode:T}=C;v.current||(j.current=T)},K=()=>{f(H.trim())},_=C=>{let{keyCode:T,ctrlKey:V,altKey:B,metaKey:F,shiftKey:X}=C;j.current===T&&!v.current&&!V&&!B&&!F&&!X&&(T===ne.ENTER?(K(),b==null||b()):T===ne.ESC&&s())},m=()=>{K()},h=R?`${t}-${R}`:"",[P,I,M]=Le(t),z=oe(t,`${t}-edit-content`,{[`${t}-rtl`]:p==="rtl"},n,h,I,M);return P(r.createElement("div",{className:z,style:i},r.createElement(ft,{ref:y,maxLength:g,value:H,onChange:u,onKeyDown:S,onKeyUp:_,onCompositionStart:x,onCompositionEnd:w,onBlur:m,"aria-label":o,rows:1,autoSize:c}),$!==null?st($,{className:`${t}-edit-content-confirm`}):null))},Wt=At;function le(e,t){return r.useMemo(()=>{const o=!!e;return[o,Object.assign(Object.assign({},t),o&&typeof e=="object"?e:null)]},[e])}const Kt=(e,t)=>{const o=r.useRef(!1);r.useEffect(()=>{o.current?e():o.current=!0},t)};var Ft=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]]);return o};const Ut=r.forwardRef((e,t)=>{const{prefixCls:o,component:n="article",className:i,rootClassName:p,setContentRef:g,children:c,direction:d,style:f}=e,s=Ft(e,["prefixCls","component","className","rootClassName","setContentRef","children","direction","style"]),{getPrefixCls:b,direction:R,typography:$}=r.useContext(Te),y=d??R;let v=t;g&&(v=$e(t,g));const j=b("typography",o),[H,N,u]=Le(j),x=oe(j,$==null?void 0:$.className,{[`${j}-rtl`]:y==="rtl"},i,p,N,u),w=Object.assign(Object.assign({},$==null?void 0:$.style),f);return H(r.createElement(n,Object.assign({className:x,style:w,ref:v},s),c))}),Pe=Ut;function De(e){const t=typeof e;return t==="string"||t==="number"}function Vt(e){let t=0;return e.forEach(o=>{De(o)?t+=String(o).length:t+=1}),t}function se(e,t){let o=0;const n=[];for(let i=0;i<e.length;i+=1){if(o===t)return n;const p=e[i],c=De(p)?String(p).length:1,d=o+c;if(d>t){const f=t-o;return n.push(String(p).slice(0,f)),n}n.push(p),o=d}return e}const qt=0,Z=1,Se=2,ae=3,ce=4,Xt=e=>{let{enabledMeasure:t,children:o,text:n,width:i,fontSize:p,rows:g,onEllipsis:c}=e;const[[d,f,s],b]=r.useState([0,0,0]),[R,$]=r.useState(0),[y,v]=r.useState(qt),[j,H]=r.useState(0),N=r.useRef(null),u=r.useRef(null),x=r.useMemo(()=>je(n),[n]),w=r.useMemo(()=>Vt(x),[x]),S=r.useMemo(()=>!t||y!==ae?R&&y!==ce&&t?o(se(x,R),R<w):o(x,!1):o(se(x,f),f<w),[t,y,o,x,f,w]);te(()=>{t&&i&&p&&w&&(v(Z),b([0,Math.ceil(w/2),w]))},[t,i,p,n,w,g]),te(()=>{var h;y===Z&&H(((h=N.current)===null||h===void 0?void 0:h.offsetHeight)||0)},[y]),te(()=>{var h,P;if(j){if(y===Z){const I=((h=u.current)===null||h===void 0?void 0:h.offsetHeight)||0,M=g*j;I<=M?(v(ce),c(!1)):v(Se)}else if(y===Se)if(d!==s){const I=((P=u.current)===null||P===void 0?void 0:P.offsetHeight)||0,M=g*j;let z=d,C=s;d===s-1?C=d:I<=M?z=f:C=f;const T=Math.ceil((z+C)/2);b([z,T,C])}else v(ae),$(f),c(!0)}},[y,d,s,g,j]);const K={width:i,whiteSpace:"normal",margin:0,padding:0},_=(h,P,I)=>r.createElement("span",{"aria-hidden":!0,ref:P,style:Object.assign({position:"fixed",display:"block",left:0,top:0,zIndex:-9999,visibility:"hidden",pointerEvents:"none",fontSize:Math.ceil(p/2)*2},I)},h),m=(h,P)=>{const I=se(x,h);return _(o(I,!0),P,K)};return r.createElement(r.Fragment,null,S,t&&y!==ae&&y!==ce&&r.createElement(r.Fragment,null,_("lg",N,{wordBreak:"keep-all",whiteSpace:"nowrap"}),y===Z?_(o(x,!1),u,K):m(f,u)))},Jt=Xt,Gt=e=>{let{enabledEllipsis:t,isEllipsis:o,children:n,tooltipProps:i}=e;return!(i!=null&&i.title)||!t?n:r.createElement(de,Object.assign({open:o?void 0:!1},i),n)},Qt=Gt;var Yt=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]]);return o};function Zt(e,t){let{mark:o,code:n,underline:i,delete:p,strong:g,keyboard:c,italic:d}=e,f=t;function s(b,R){R&&(f=r.createElement(b,{},f))}return s("strong",g),s("u",i),s("del",p),s("code",n),s("mark",o),s("kbd",c),s("i",d),f}function ee(e,t,o){return e===!0||e===void 0?t:e||o&&t}function Ce(e){return e===!1?[!1,!1]:Array.isArray(e)?e:[e]}const en="...",tn=r.forwardRef((e,t)=>{var o,n,i;const{prefixCls:p,className:g,style:c,type:d,disabled:f,children:s,ellipsis:b,editable:R,copyable:$,component:y,title:v}=e,j=Yt(e,["prefixCls","className","style","type","disabled","children","ellipsis","editable","copyable","component","title"]),{getPrefixCls:H,direction:N}=r.useContext(Te),[u]=at("Text"),x=r.useRef(null),w=r.useRef(null),S=H("typography",p),K=Re(j,["mark","code","delete","underline","strong","keyboard","italic"]),[_,m]=le(R),[h,P]=ct(!1,{value:m.editing}),{triggerType:I=["icon"]}=m,M=l=>{var a;l&&((a=m.onStart)===null||a===void 0||a.call(m)),P(l)};Kt(()=>{var l;h||(l=w.current)===null||l===void 0||l.focus()},[h]);const z=l=>{l==null||l.preventDefault(),M(!0)},C=l=>{var a;(a=m.onChange)===null||a===void 0||a.call(m,l),M(!1)},T=()=>{var l;(l=m.onCancel)===null||l===void 0||l.call(m),M(!1)},[V,B]=le($),[F,X]=r.useState(!1),ie=r.useRef(null),ue={};B.format&&(ue.format=B.format);const pe=()=>{ie.current&&clearTimeout(ie.current)},Ne=l=>{var a;l==null||l.preventDefault(),l==null||l.stopPropagation(),$t(B.text||String(s)||"",ue),X(!0),pe(),ie.current=setTimeout(()=>{X(!1)},3e3),(a=B.onCopy)===null||a===void 0||a.call(B,l)};r.useEffect(()=>pe,[]);const[fe,ke]=r.useState(!1),[ge,_e]=r.useState(!1),[Me,He]=r.useState(!1),[me,ze]=r.useState(!1),[ye,Be]=r.useState(!1),[Ae,We]=r.useState(!0),[A,E]=le(b,{expandable:!1}),D=A&&!Me,{rows:U=1}=E,J=r.useMemo(()=>!D||E.suffix!==void 0||E.onEllipsis||E.expandable||_||V,[D,E,_,V]);te(()=>{A&&!J&&(ke(he("webkitLineClamp")),_e(he("textOverflow")))},[J,A]);const k=r.useMemo(()=>J?!1:U===1?ge:fe,[J,ge,fe]),be=D&&(k?ye:me),Ke=D&&U===1&&k,G=D&&U>1&&k,Fe=l=>{var a;He(!0),(a=E.onExpand)===null||a===void 0||a.call(E,l)},[ve,Ue]=r.useState(0),[Ve,qe]=r.useState(0),Xe=(l,a)=>{let{offsetWidth:O}=l;var L;Ue(O),qe(parseInt((L=window.getComputedStyle)===null||L===void 0?void 0:L.call(window,a).fontSize,10)||0)},Je=l=>{var a;ze(l),me!==l&&((a=E.onEllipsis)===null||a===void 0||a.call(E,l))};r.useEffect(()=>{const l=x.current;if(A&&k&&l){const a=G?l.offsetHeight<l.scrollHeight:l.offsetWidth<l.scrollWidth;ye!==a&&Be(a)}},[A,k,s,G,Ae,ve]),r.useEffect(()=>{const l=x.current;if(typeof IntersectionObserver>"u"||!l||!k||!D)return;const a=new IntersectionObserver(()=>{We(!!l.offsetParent)});return a.observe(l),()=>{a.disconnect()}},[k,D]);let W={};E.tooltip===!0?W={title:(o=m.text)!==null&&o!==void 0?o:s}:r.isValidElement(E.tooltip)?W={title:E.tooltip}:typeof E.tooltip=="object"?W=Object.assign({title:(n=m.text)!==null&&n!==void 0?n:s},E.tooltip):W={title:E.tooltip};const Q=r.useMemo(()=>{const l=a=>["string","number"].includes(typeof a);if(!(!A||k)){if(l(m.text))return m.text;if(l(s))return s;if(l(v))return v;if(l(W.title))return W.title}},[A,k,v,W.title,be]);if(h)return r.createElement(Wt,{value:(i=m.text)!==null&&i!==void 0?i:typeof s=="string"?s:"",onSave:C,onCancel:T,onEnd:m.onEnd,prefixCls:S,className:g,style:c,direction:N,component:y,maxLength:m.maxLength,autoSize:m.autoSize,enterIcon:m.enterIcon});const Ge=()=>{const{expandable:l,symbol:a}=E;if(!l)return null;let O;return a?O=a:O=u==null?void 0:u.expand,r.createElement("a",{key:"expand",className:`${S}-expand`,onClick:Fe,"aria-label":u==null?void 0:u.expand},O)},Qe=()=>{if(!_)return;const{icon:l,tooltip:a}=m,O=je(a)[0]||(u==null?void 0:u.edit),L=typeof O=="string"?O:"";return I.includes("icon")?r.createElement(de,{key:"edit",title:a===!1?"":O},r.createElement(Ee,{ref:w,className:`${S}-edit`,onClick:z,"aria-label":L},l||r.createElement(pt,{role:"button"}))):null},Ye=()=>{if(!V)return null;const{tooltips:l,icon:a}=B,O=Ce(l),L=Ce(a),Y=F?ee(O[1],u==null?void 0:u.copied):ee(O[0],u==null?void 0:u.copy),tt=F?u==null?void 0:u.copied:u==null?void 0:u.copy,nt=typeof Y=="string"?Y:tt;return r.createElement(de,{key:"copy",title:Y},r.createElement(Ee,{className:oe(`${S}-copy`,{[`${S}-copy-success`]:F,[`${S}-copy-icon-only`]:s==null}),onClick:Ne,"aria-label":nt},F?ee(L[1],r.createElement(ut,null),!0):ee(L[0],r.createElement(Et,null),!0)))},Ze=l=>[l&&Ge(),Qe(),Ye()],et=l=>[l&&r.createElement("span",{"aria-hidden":!0,key:"ellipsis"},en),E.suffix,Ze(l)];return r.createElement(dt,{onResize:Xe,disabled:!D},l=>r.createElement(Qt,{tooltipProps:W,enabledEllipsis:D,isEllipsis:be},r.createElement(Pe,Object.assign({className:oe({[`${S}-${d}`]:d,[`${S}-disabled`]:f,[`${S}-ellipsis`]:A,[`${S}-single-line`]:D&&U===1,[`${S}-ellipsis-single-line`]:Ke,[`${S}-ellipsis-multiple-line`]:G},g),prefixCls:p,style:Object.assign(Object.assign({},c),{WebkitLineClamp:G?U:void 0}),component:y,ref:$e(l,x,t),direction:N,onClick:I.includes("text")?z:void 0,"aria-label":Q==null?void 0:Q.toString(),title:v},K),r.createElement(Jt,{enabledMeasure:D&&!k,text:s,rows:U,width:ve,fontSize:Ve,onEllipsis:Je},(a,O)=>{let L=a;return a.length&&O&&Q&&(L=r.createElement("span",{key:"show-content","aria-hidden":!0},L)),Zt(e,r.createElement(r.Fragment,null,L,et(O)))}))))}),re=tn;var nn=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]]);return o};const on=r.forwardRef((e,t)=>{var{ellipsis:o,rel:n}=e,i=nn(e,["ellipsis","rel"]);const p=Object.assign(Object.assign({},i),{rel:n===void 0&&i.target==="_blank"?"noopener noreferrer":n});return delete p.navigate,r.createElement(re,Object.assign({},p,{ref:t,ellipsis:!!o,component:"a"}))}),rn=on,ln=r.forwardRef((e,t)=>r.createElement(re,Object.assign({ref:t},e,{component:"div"}))),sn=ln;var an=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]]);return o};const cn=(e,t)=>{var{ellipsis:o}=e,n=an(e,["ellipsis"]);const i=r.useMemo(()=>o&&typeof o=="object"?Re(o,["expandable","rows"]):o,[o]);return r.createElement(re,Object.assign({ref:t},n,{ellipsis:i,component:"span"}))},dn=r.forwardRef(cn);var un=function(e,t){var o={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(o[n[i]]=e[n[i]]);return o};const pn=[1,2,3,4,5],fn=r.forwardRef((e,t)=>{const{level:o=1}=e,n=un(e,["level"]);let i;return pn.includes(o)?i=`h${o}`:i="h1",r.createElement(re,Object.assign({ref:t},n,{component:i}))}),gn=fn,q=Pe;q.Text=dn;q.Link=rn;q.Title=gn;q.Paragraph=sn;const En=q;export{En as T};