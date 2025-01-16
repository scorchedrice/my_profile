"use strict";(self.webpackChunkreact=self.webpackChunkreact||[]).push([[849],{2729:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,i=/([\p{Alpha}\p{N}_]|$)/u,n=/[_.\- ]+/,s=new RegExp("^"+n.source),l=new RegExp(n.source+i.source,"gu"),o=new RegExp("\\d+"+i.source,"gu"),c=(e,i)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(i={pascalCase:!1,preserveConsecutiveUppercase:!1,...i},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const n=!1===i.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(i.locale),c=!1===i.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(i.locale);if(1===e.length)return i.pascalCase?c(e):n(e);return e!==n(e)&&(e=((e,r,i)=>{let n=!1,s=!1,l=!1;for(let o=0;o<e.length;o++){const c=e[o];n&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),n=!1,l=s,s=!0,o++):s&&l&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),l=s,s=!1,n=!0):(n=r(c)===c&&i(c)!==c,l=s,s=i(c)===c&&r(c)!==c)}return e})(e,n,c)),e=e.replace(s,""),e=i.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,n):n(e),i.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,o.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},2532:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return E},P:function(){return x},S:function(){return F},_:function(){return l},a:function(){return s},b:function(){return d},g:function(){return u},h:function(){return o}});var r=a(6540),i=(a(2729),a(5556)),n=a.n(i);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},s.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t.indexOf(a=n[r])>=0||(i[a]=e[a]);return i}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let i="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,i){return void 0===i&&(i={}),s({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:s({},i,{opacity:t?1:0})})}function u(e,t,a,r,i,n,l,o){const c={};n&&(c.backgroundColor=n,"fixed"===a?(c.width=r,c.height=i,c.backgroundColor=n,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const p=["children"],m=function(e){let{layout:t,width:a,height:i}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${i}'%20width='${a}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=l(e,p);return r.createElement(r.Fragment,null,r.createElement(m,s({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],h=function(e){let{src:t,srcSet:a,loading:i,alt:n="",shouldLoad:o}=e,c=l(e,f);return r.createElement("img",s({},c,{decoding:"async",loading:i,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:n}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:i=!0}=e,n=l(e,y);const o=n.sizes||(null==t?void 0:t.sizes),c=r.createElement(h,s({},n,t,{sizes:o,shouldLoad:i}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:n}=e;return r.createElement("source",{key:`${t}-${n}-${a}`,type:n,media:t,srcSet:i?a:void 0,"data-srcset":i?void 0:a,sizes:o})})),c):c};var w;h.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},b.displayName="Picture",b.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};const v=["fallback"],x=function(e){let{fallback:t}=e,a=l(e,v);return t?r.createElement(b,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",s({},a))};x.displayName="Placeholder",x.propTypes={fallback:i.string,sources:null==(w=b.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${a}\`. Validation failed.`):null}};const E=function(e){return r.createElement(r.Fragment,null,r.createElement(b,s({},e)),r.createElement("noscript",null,r.createElement(b,s({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=b.propTypes;const N=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],k=["style","className"],S=e=>e.replace(/\n/g,""),C=function(e,t,a){for(var r=arguments.length,i=new Array(r>3?r-3:0),s=3;s<r;s++)i[s-3]=arguments[s];return e.alt||""===e.alt?n().string.apply(n(),[e,t,a].concat(i)):new Error(`The "alt" prop is required in ${a}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},L={image:n().object.isRequired,alt:C},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],j=["style","className"],I=new Set;let $,_;const P=function(e){let{as:t="div",image:i,style:n,backgroundColor:d,className:u,class:p,onStartLoad:m,onLoad:g,onError:f}=e,y=l(e,T);const{width:h,height:b,layout:w}=i,v=c(h,b,w),{style:x,className:E}=v,N=l(v,j),k=(0,r.useRef)(),S=(0,r.useMemo)((()=>JSON.stringify(i.images)),[i.images]);p&&(u=p);const C=function(e,t,a){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${a/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${a}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(w,h,b);return(0,r.useEffect)((()=>{$||($=a.e(108).then(a.bind(a,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return _=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==m||m({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void I.add(S);if(_&&I.has(S))return;let t,r;return $.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;k.current&&(k.current.innerHTML=a(s({isLoading:!0,isLoaded:I.has(S),image:i},y)),I.has(S)||(t=requestAnimationFrame((()=>{k.current&&(r=l(k.current,S,I,n,m,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[i]),(0,r.useLayoutEffect)((()=>{I.has(S)&&_&&(k.current.innerHTML=_(s({isLoading:I.has(S),isLoaded:I.has(S),image:i},y)),null==m||m({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,r.createElement)(t,s({},N,{style:s({},x,n,{backgroundColor:d}),className:`${E}${u?` ${u}`:""}`,ref:k,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},O=(0,r.memo)((function(e){return e.image?(0,r.createElement)(P,e):null}));O.propTypes=L,O.displayName="GatsbyImage";const R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function q(e){return function(t){let{src:a,__imageData:i,__error:n}=t,o=l(t,R);return n&&console.warn(n),i?r.createElement(e,s({image:i},o)):(console.warn("Image not loaded",a),null)}}const A=q((function(e){let{as:t="div",className:a,class:i,style:n,image:o,loading:p="lazy",imgClassName:m,imgStyle:f,backgroundColor:y,objectFit:h,objectPosition:b}=e,w=l(e,N);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;i&&(a=i),f=s({objectFit:h,objectPosition:b,backgroundColor:y},f);const{width:v,height:C,layout:L,images:T,placeholder:j,backgroundColor:I}=o,$=c(v,C,L),{style:_,className:P}=$,O=l($,k),R={fallback:void 0,sources:[]};return T.fallback&&(R.fallback=s({},T.fallback,{srcSet:T.fallback.srcSet?S(T.fallback.srcSet):void 0})),T.sources&&(R.sources=T.sources.map((e=>s({},e,{srcSet:S(e.srcSet)})))),r.createElement(t,s({},O,{style:s({},_,n,{backgroundColor:y}),className:`${P}${a?` ${a}`:""}`}),r.createElement(g,{layout:L,width:v,height:C},r.createElement(x,s({},u(j,!1,L,v,C,I,h,b))),r.createElement(E,s({"data-gatsby-image-ssr":"",className:m},w,d("eager"===p,!1,R,p,f)))))})),M=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),i=2;i<a;i++)r[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?n().number.apply(n(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},z=new Set(["fixed","fullWidth","constrained"]),W={src:n().string.isRequired,alt:C,width:M,height:M,sizes:n().string,layout:e=>{if(void 0!==e.layout&&!z.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};A.displayName="StaticImage",A.propTypes=W;const F=q(O);F.displayName="StaticImage",F.propTypes=W},2682:function(e,t,a){a.d(t,{cm:function(){return n},e7:function(){return r},mn:function(){return i},wS:function(){return s}});const r={initial:{scale:.8,opacity:0},animate:{scale:1,opacity:1,transition:{duration:.5}}},i={initial:{opacity:0,y:20},animate:{opacity:1,y:0,transition:{duration:.6}}},n={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.4}}},s={hidden:{opacity:0,x:50},visible:{opacity:1,x:0,transition:{type:"spring",stiffness:400,damping:30}}}},6991:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var r=a(6540),i=a(5142),n=a(8602),s=a(6973),l=a(2682);var o=a(2532);function c(){const{showTooltip:e,mousePosition:t,copyMail:c}=function(){const{0:e,1:t}=(0,r.useState)(!1),{0:a,1:i}=(0,r.useState)({x:0,y:0});return{showTooltip:e,mousePosition:a,copyMail:e=>{i({x:e.clientX,y:e.clientY}),navigator.clipboard.writeText("wldnd2977@gmail.com"),t(!0),setTimeout((()=>t(!1)),1e3)}}}();return r.createElement("div",{className:"bg-amber-500 flex flex-col",id:"AboutMe"},r.createElement("div",{className:"max-w-5xl mx-auto w-full"},r.createElement("h1",{className:"text-[50px] font-bold text-gray-700 text-center"},"ABOUT ME"),r.createElement(i.P.div,{className:"flex flex-col md:flex-row items-center p-4"},r.createElement("div",{className:"w-full md:w-1/2 flex justify-center items-center mb-8 md:mb-0"},r.createElement(i.P.div,{className:"w-[250px] h-[250px] rounded-full overflow-hidden",initial:"initial",variants:l.e7,whileInView:"animate",viewport:{once:!0}},r.createElement(o.S,{src:"../assets/profile.jpg",alt:"profile",className:"w-full h-full object-cover",__imageData:a(3714)}))),r.createElement(i.P.div,{className:"w-full md:w-1/2",initial:"initial",variants:l.mn,whileInView:"animate",viewport:{once:!0}},r.createElement(i.P.div,{className:"m-8"},r.createElement("h1",{className:"font-bold text-gray-700 text-xl"},"이름"),r.createElement("p",{className:"my-3"},"한지웅")),r.createElement(i.P.div,{className:"m-8"},r.createElement("h1",{className:"font-bold text-gray-700 text-xl"},"생년월일"),r.createElement("p",{className:"my-3"},"1998.01.30")),r.createElement(i.P.div,{className:"m-8"},r.createElement("h1",{className:"font-bold text-gray-700 text-xl"},"연락처"),r.createElement("div",{className:"flex my-3"},r.createElement("p",null,"wldnd2977@gmail.com"),r.createElement(s.r6e,{className:"cursor-pointer text-[8px]",onClick:e=>c(e)})))))),r.createElement(n.N,null,e&&r.createElement(i.P.div,{initial:{opacity:0,y:10},animate:{opacity:1,y:0},exit:{opacity:0},className:"fixed bg-gray-800 text-white px-2 py-1 rounded text-sm",style:{left:t.x+10,top:t.y-10,pointerEvents:"none"}},"복사되었습니다!")))}},3714:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/my_profile/static/ca8bc112833a0feb1d50f6242923bc0d/5dbe9/profile.jpg","srcSet":"/my_profile/static/ca8bc112833a0feb1d50f6242923bc0d/8219c/profile.jpg 481w,\\n/my_profile/static/ca8bc112833a0feb1d50f6242923bc0d/c743b/profile.jpg 962w,\\n/my_profile/static/ca8bc112833a0feb1d50f6242923bc0d/5dbe9/profile.jpg 1924w","sizes":"(min-width: 1924px) 1924px, 100vw"},"sources":[{"srcSet":"/my_profile/static/ca8bc112833a0feb1d50f6242923bc0d/871d9/profile.webp 481w,\\n/my_profile/static/ca8bc112833a0feb1d50f6242923bc0d/9e2c2/profile.webp 962w,\\n/my_profile/static/ca8bc112833a0feb1d50f6242923bc0d/0480d/profile.webp 1924w","type":"image/webp","sizes":"(min-width: 1924px) 1924px, 100vw"}]},"width":1924,"height":2450}')}}]);
//# sourceMappingURL=b10603afaca85af098f9777fbdc54b85938dc06a-883e1a0b1d4493580909.js.map