"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[700,913],{2729:function(e){const t=/[\p{Lu}]/u,r=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,a=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,i=new RegExp("^"+s.source),o=new RegExp(s.source+a.source,"gu"),l=new RegExp("\\d+"+a.source,"gu"),c=(e,a)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(a={pascalCase:!1,preserveConsecutiveUppercase:!1,...a},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===a.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(a.locale),c=!1===a.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(a.locale);if(1===e.length)return a.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,n,a)=>{let s=!1,i=!1,o=!1;for(let l=0;l<e.length;l++){const c=e[l];s&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),s=!1,o=i,i=!0,l++):i&&o&&r.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),o=i,i=!1,s=!0):(s=n(c)===c&&a(c)!==c,o=i,i=a(c)===c&&n(c)!==c)}return e})(e,s,c)),e=e.replace(i,""),e=a.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,s):s(e),a.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(o.lastIndex=0,l.lastIndex=0,e.replace(o,((e,r)=>t(r))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},2532:function(e,t,r){r.d(t,{G:function(){return z},L:function(){return f},M:function(){return C},P:function(){return x},S:function(){return F},_:function(){return o},a:function(){return i},b:function(){return d},c:function(){return c},g:function(){return p},h:function(){return l}});var n=r(6540),a=(r(2729),r(5556)),s=r.n(a);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t.indexOf(r=s[n])>=0||(a[r]=e[r]);return a}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;const c=e=>{var t;return(e=>{var t,r;return Boolean(null==e||null==(t=e.images)||null==(r=t.fallback)?void 0:r.src)})(e)?e:(e=>Boolean(null==e?void 0:e.gatsbyImageData))(e)?e.gatsbyImageData:(e=>Boolean(null==e?void 0:e.gatsbyImage))(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,r){const n={};let a="gatsby-image-wrapper";return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(a="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:a,"data-gatsby-image-wrapper":"",style:n}}function d(e,t,r,n,a){return void 0===a&&(a={}),i({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:i({},a,{opacity:t?1:0})})}function p(e,t,r,n,a,s,o,l){const c={};s&&(c.backgroundColor=s,"fixed"===r?(c.width=n,c.height=a,c.backgroundColor=s,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),o&&(c.objectFit=o),l&&(c.objectPosition=l);const u=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const g=["children"],m=function(e){let{layout:t,width:r,height:a}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:a/r*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:r,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${r}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){let{children:t}=e,r=o(e,g);return n.createElement(n.Fragment,null,n.createElement(m,i({},r)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:r,loading:a,alt:s="",shouldLoad:l}=e,c=o(e,h);return n.createElement("img",i({},c,{decoding:"async",loading:a,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,alt:s}))},v=function(e){let{fallback:t,sources:r=[],shouldLoad:a=!0}=e,s=o(e,y);const l=s.sizes||(null==t?void 0:t.sizes),c=n.createElement(b,i({},s,t,{sizes:l,shouldLoad:a}));return r.length?n.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:s}=e;return n.createElement("source",{key:`${t}-${s}-${r}`,type:s,media:t,srcSet:a?r:void 0,"data-srcset":a?void 0:r,sizes:l})})),c):c};var w;b.propTypes={src:a.string.isRequired,alt:a.string.isRequired,sizes:a.string,srcSet:a.string,shouldLoad:a.bool},v.displayName="Picture",v.propTypes={alt:a.string.isRequired,shouldLoad:a.bool,fallback:a.exact({src:a.string.isRequired,srcSet:a.string,sizes:a.string}),sources:a.arrayOf(a.oneOfType([a.exact({media:a.string.isRequired,type:a.string,sizes:a.string,srcSet:a.string.isRequired}),a.exact({media:a.string,type:a.string.isRequired,sizes:a.string,srcSet:a.string.isRequired})]))};const E=["fallback"],x=function(e){let{fallback:t}=e,r=o(e,E);return t?n.createElement(v,i({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",i({},r))};x.displayName="Placeholder",x.propTypes={fallback:a.string,sources:null==(w=v.propTypes)?void 0:w.sources,alt:function(e,t,r){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${r}\`. Validation failed.`):null}};const C=function(e){return n.createElement(n.Fragment,null,n.createElement(v,i({},e)),n.createElement("noscript",null,n.createElement(v,i({},e,{shouldLoad:!0}))))};C.displayName="MainImage",C.propTypes=v.propTypes;const O=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],j=["style","className"],k=e=>e.replace(/\n/g,""),L=function(e,t,r){for(var n=arguments.length,a=new Array(n>3?n-3:0),i=3;i<n;i++)a[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,r].concat(a)):new Error(`The "alt" prop is required in ${r}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},S={image:s().object.isRequired,alt:L},P=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],N=new Set;let $,R;const T=function(e){let{as:t="div",image:a,style:s,backgroundColor:c,className:d,class:p,onStartLoad:g,onLoad:m,onError:f}=e,h=o(e,P);const{width:y,height:b,layout:v}=a,w=u(y,b,v),{style:E,className:x}=w,C=o(w,I),O=(0,n.useRef)(),j=(0,n.useMemo)((()=>JSON.stringify(a.images)),[a.images]);p&&(d=p);const k=function(e,t,r){let n="";return"fullWidth"===e&&(n=`<div aria-hidden="true" style="padding-top: ${r/t*100}%;"></div>`),"constrained"===e&&(n=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${r}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),n}(v,y,b);return(0,n.useEffect)((()=>{$||($=r.e(108).then(r.bind(r,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return R=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=O.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==g||g({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void N.add(j);if(R&&N.has(j))return;let t,n;return $.then((e=>{let{renderImageToString:r,swapPlaceholderImage:o}=e;O.current&&(O.current.innerHTML=r(i({isLoading:!0,isLoaded:N.has(j),image:a},h)),N.has(j)||(t=requestAnimationFrame((()=>{O.current&&(n=o(O.current,j,N,s,g,m,f))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[a]),(0,n.useLayoutEffect)((()=>{N.has(j)&&R&&(O.current.innerHTML=R(i({isLoading:N.has(j),isLoaded:N.has(j),image:a},h)),null==g||g({wasCached:!0}),null==m||m({wasCached:!0}))}),[a]),(0,n.createElement)(t,i({},C,{style:i({},E,s,{backgroundColor:c}),className:`${x}${d?` ${d}`:""}`,ref:O,dangerouslySetInnerHTML:{__html:k},suppressHydrationWarning:!0}))},z=(0,n.memo)((function(e){return e.image?(0,n.createElement)(T,e):null}));z.propTypes=S,z.displayName="GatsbyImage";const M=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function A(e){return function(t){let{src:r,__imageData:a,__error:s}=t,l=o(t,M);return s&&console.warn(s),a?n.createElement(e,i({image:a},l)):(console.warn("Image not loaded",r),null)}}const q=A((function(e){let{as:t="div",className:r,class:a,style:s,image:l,loading:c="lazy",imgClassName:g,imgStyle:m,backgroundColor:h,objectFit:y,objectPosition:b}=e,v=o(e,O);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;a&&(r=a),m=i({objectFit:y,objectPosition:b,backgroundColor:h},m);const{width:w,height:E,layout:L,images:S,placeholder:P,backgroundColor:I}=l,N=u(w,E,L),{style:$,className:R}=N,T=o(N,j),z={fallback:void 0,sources:[]};return S.fallback&&(z.fallback=i({},S.fallback,{srcSet:S.fallback.srcSet?k(S.fallback.srcSet):void 0})),S.sources&&(z.sources=S.sources.map((e=>i({},e,{srcSet:k(e.srcSet)})))),n.createElement(t,i({},T,{style:i({},$,s,{backgroundColor:h}),className:`${R}${r?` ${r}`:""}`}),n.createElement(f,{layout:L,width:w,height:E},n.createElement(x,i({},p(P,!1,L,w,E,I,y,b))),n.createElement(C,i({"data-gatsby-image-ssr":"",className:g},v,d("eager"===c,!1,z,c,m)))))})),_=function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(n)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},D=new Set(["fixed","fullWidth","constrained"]),W={src:s().string.isRequired,alt:L,width:_,height:_,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!D.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};q.displayName="StaticImage",q.propTypes=W;const F=A(z);F.displayName="StaticImage",F.propTypes=W},8602:function(e,t,r){r.d(t,{N:function(){return y}});var n=r(4848),a=r(6540),s=r(9473),i=r(8601),o=r(6719),l=r(5446);class c extends a.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=this.props.sizeRef.current;e.height=t.offsetHeight||0,e.width=t.offsetWidth||0,e.top=t.offsetTop,e.left=t.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function u({children:e,isPresent:t}){const r=(0,a.useId)(),s=(0,a.useRef)(null),i=(0,a.useRef)({width:0,height:0,top:0,left:0}),{nonce:o}=(0,a.useContext)(l.Q);return(0,a.useInsertionEffect)((()=>{const{width:e,height:n,top:a,left:l}=i.current;if(t||!s.current||!e||!n)return;s.current.dataset.motionPopId=r;const c=document.createElement("style");return o&&(c.nonce=o),document.head.appendChild(c),c.sheet&&c.sheet.insertRule(`\n          [data-motion-pop-id="${r}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${n}px !important;\n            top: ${a}px !important;\n            left: ${l}px !important;\n          }\n        `),()=>{document.head.removeChild(c)}}),[t]),(0,n.jsx)(c,{isPresent:t,childRef:s,sizeRef:i,children:a.cloneElement(e,{ref:s})})}const d=({children:e,initial:t,isPresent:r,onExitComplete:s,custom:l,presenceAffectsLayout:c,mode:d})=>{const g=(0,i.M)(p),m=(0,a.useId)(),f=(0,a.useCallback)((e=>{g.set(e,!0);for(const t of g.values())if(!t)return;s&&s()}),[g,s]),h=(0,a.useMemo)((()=>({id:m,initial:t,isPresent:r,custom:l,onExitComplete:f,register:e=>(g.set(e,!1),()=>g.delete(e))})),c?[Math.random(),f]:[r,f]);return(0,a.useMemo)((()=>{g.forEach(((e,t)=>g.set(t,!1)))}),[r]),a.useEffect((()=>{!r&&!g.size&&s&&s()}),[r]),"popLayout"===d&&(e=(0,n.jsx)(u,{isPresent:r,children:e})),(0,n.jsx)(o.t.Provider,{value:h,children:e})};function p(){return new Map}var g=r(9120);const m=e=>e.key||"";function f(e){const t=[];return a.Children.forEach(e,(e=>{(0,a.isValidElement)(e)&&t.push(e)})),t}var h=r(5128);const y=({children:e,custom:t,initial:r=!0,onExitComplete:o,presenceAffectsLayout:l=!0,mode:c="sync",propagate:u=!1})=>{const[p,y]=(0,g.xQ)(u),b=(0,a.useMemo)((()=>f(e)),[e]),v=u&&!p?[]:b.map(m),w=(0,a.useRef)(!0),E=(0,a.useRef)(b),x=(0,i.M)((()=>new Map)),[C,O]=(0,a.useState)(b),[j,k]=(0,a.useState)(b);(0,h.E)((()=>{w.current=!1,E.current=b;for(let e=0;e<j.length;e++){const t=m(j[e]);v.includes(t)?x.delete(t):!0!==x.get(t)&&x.set(t,!1)}}),[j,v.length,v.join("-")]);const L=[];if(b!==C){let e=[...b];for(let t=0;t<j.length;t++){const r=j[t],n=m(r);v.includes(n)||(e.splice(t,0,r),L.push(r))}return"wait"===c&&L.length&&(e=L),k(f(e)),void O(b)}const{forceRender:S}=(0,a.useContext)(s.L);return(0,n.jsx)(n.Fragment,{children:j.map((e=>{const a=m(e),s=!(u&&!p)&&(b===j||v.includes(a));return(0,n.jsx)(d,{isPresent:s,initial:!(w.current&&!r)&&void 0,custom:s?void 0:t,presenceAffectsLayout:l,mode:c,onExitComplete:s?void 0:()=>{if(!x.has(a))return;x.set(a,!0);let e=!0;x.forEach((t=>{t||(e=!1)})),e&&(null==S||S(),k(E.current),u&&(null==y||y()),o&&o())},children:e},a)}))})}},2225:function(e,t,r){r.d(t,{k5:function(){return g}});var n=r(6540),a={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=n.createContext&&n.createContext(a),i=["attr","size","title"];function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){var n;return(t="symbol"==typeof(n=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?n:n+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e){return e&&e.map(((e,t)=>n.createElement(e.tag,u({key:t},e.attr),p(e.child))))}function g(e){return t=>n.createElement(m,l({attr:u({},e.attr)},t),p(e.child))}function m(e){var t=t=>{var r,{attr:a,size:s,title:c}=e,d=o(e,i),p=s||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,a,d,{className:r,style:u(u({color:e.color||t.color},t.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),c&&n.createElement("title",null,c),e.children)};return void 0!==s?n.createElement(s.Consumer,null,(e=>t(e))):t(a)}}}]);
//# sourceMappingURL=5b33aa63c2d7d111371f721055e8c72b2fc73887-c68d1551be761fd5dd86.js.map