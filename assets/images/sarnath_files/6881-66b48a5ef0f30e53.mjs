"use strict";(self.modernJsonp=self.modernJsonp||[]).push([[6881],{25690:(e,t,n)=>{n.d(t,{default:()=>r});var i=n(718222);let a=`pulsing {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
}`,r={css:(0,i.Ll)([a]),animation:"pulsing 2s infinite"}},718222:(e,t,n)=>{n.d(t,{CC:()=>i,Ll:()=>r,XF:()=>a});let i=(e,t)=>{let n=2*Math.random()*Math.PI;return{x:Math.floor(t/2*Math.cos(n)),y:Math.floor(e/2*Math.sin(n))}},a=(e,t)=>Math.floor(Math.random()*(t-e+1))+e,r=e=>["@-webkit-keyframes","@keyframes"].map(t=>e.map(e=>t+" "+e).join(`
`)).join(`
`)},633569:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var i=n(667294),a=n(20256),r=n(569681),o=n(19963),l=n(756064);function s(e,t,n){var i;return(t="symbol"==typeof(i=function(e,t){if("object"!=typeof e||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,t||"default");if("object"!=typeof i)return i;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?i:i+"")in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}let u={},m=e=>{let t=e.__id||e.id;return"string"==typeof t&&t||null};class p{constructor(){s(this,"idMap",new Map),s(this,"objMap",new WeakMap)}get(e){let t=m(e);return this.objMap.get(e)??(t?this.idMap.get(t):void 0)}has(e){let t=m(e);return this.objMap.has(e)??(!!t&&this.idMap.has(t))}set(e,t){let n=m(e);n&&this.idMap.set(n,t),this.objMap.set(e,t)}reset(){this.idMap=new Map,this.objMap=new WeakMap}}function d(e,t){return"number"==typeof e?e:"lg1"===t?e[t]??e.lg??1:e[t]??1}var c=n(399083),h=n(824834),y=n(830811),f=n(25690),g=n(970601),x=n(785893);let{css:b,animation:_}=f.default,w={backgroundColor:y._VP,animation:_,borderRadius:y.Ev2};function v({data:e}){let{height:t}=e;return(0,x.jsxs)(i.Fragment,{children:[(0,x.jsx)(g.Z,{unsafeCSS:b}),(0,x.jsx)(a.xu,{dangerouslySetInlineStyle:{__style:w},"data-test-id":"skeleton-pin",children:(0,x.jsx)(a.xu,{height:t})})]})}var M=n(56063),C=n(967312),S=n(174646),$=n(538645),R=n(992114),k=n(544221),j=n(438596);function E(e){let{align:t,cacheKey:n,id:s,isFetching:m,isGridCentered:y=!0,items:f,layout:b,loadItems:_,masonryRef:w,optOutFluidGridExperiment:E=!1,renderItem:I,scrollContainerRef:W,virtualize:G=!0,getColumnSpanConfig:P,_getResponsiveModuleConfigForSecondItem:A,isLoadingStateEnabled:F,initialLoadingStatePinCount:z,isLoadingAccessibilityLabel:O,isLoadedAccessibilityLabel:Z}=e,D=(0,$.ZP)(),H=(0,S.B)(),{isAuthenticated:T,isRTL:X}=H,{logContextEvent:N}=(0,o.u)(),B=(0,C.FJ)(),L="desktop"===D,Q=(0,j.Zv)(),{group:J}=(0,k.DB)(),V=((0,i.useRef)(f.map(()=>({fetchTimestamp:Date.now(),measureTimestamp:Date.now(),hasRendered:!1,pageCount:0}))),L&&!E),{experimentalColumnWidth:Y,experimentalGutter:q}=(0,c.Z)(V),K=e.serverRender??!!L,U="flexible"===b||"uniformRowFlexible"===b||"desktop"!==D||V,ee=(U&&b?.startsWith("uniformRow")?"uniformRowFlexible":void 0)??(K?"serverRenderedFlexible":"flexible"),et=e.columnWidth??Y??M.yF;U&&(et=Math.floor(et));let en=e.gutterWidth??q??(L?M.oX:1),ei=e.minCols??M.yc,ea=(0,i.useRef)(0),er=et+en,eo=function(e){if(null==e)return;let t=function(e){let t=u[e];return t&&t.screenWidth===window.innerWidth||(u[e]={screenWidth:window.innerWidth}),u[e]}(e);return t.measurementCache||(t.measurementCache=new p),t.measurementCache}(n),el=(0,i.useCallback)(()=>W?.current||window,[W]),es=(0,i.useRef)(!0),{anyEnabled:eu}=B.checkExperiment("web_masonry_pin_overlap_calculation_and_logging"),{anyEnabled:em}=B.checkExperiment("web_masonry_fluid_reflow"),ep=y&&es.current?"centered":"",{className:ed,styles:ec}=function(e){let t=`m_${Object.keys(e).sort().reduce((t,n)=>{let i=e[n];return null==i||"object"==typeof i||"function"==typeof i?t:"boolean"==typeof i?t+(i?"t":"f"):t+i},"").replace(/\:/g,"\\:")}`,{flexible:n,gutterWidth:i,isRTL:a,itemWidth:r,maxColumns:o,minColumns:l,items:s,getColumnSpanConfig:u,_getResponsiveModuleConfigForSecondItem:m}=e,p=u?s.map((e,t)=>({index:t,columnSpanConfig:u(e)??1})).filter(e=>1!==e.columnSpanConfig):[],c=r+i,h=Array.from({length:o+1-l},(e,t)=>t+l).map(e=>{let h,y,f=e===l?0:e*c,g=e===o?null:(e+1)*c-.01;u&&m&&s.length>1&&(h=u(s[0]),y=m(s[1]));let{styles:x,numberOfVisibleItems:b}=p.reduce((a,o)=>{let{columnSpanConfig:l}=o,u=Math.min(function({columnCount:e,columnSpanConfig:t,firstItemColumnSpanConfig:n,isFlexibleWidthItem:i,secondItemResponsiveModuleConfig:a}){let r=e<=2?"sm":e<=4?"md":e<=6?"lg1":e<=8?"lg":"xl",o=d(t,r);if(i){let t=d(n,r);o="number"==typeof a?a:a?Math.max(a.min,Math.min(a.max,e-t)):1}return o}({columnCount:e,columnSpanConfig:l,isFlexibleWidthItem:!!y&&o===s[1],firstItemColumnSpanConfig:h??1,secondItemResponsiveModuleConfig:y??1}),e),m=null!=o.index&&a.numberOfVisibleItems>=u+o.index,p=n?100/e*u:r*u+i*(u-1),{numberOfVisibleItems:c}=a;return m?c-=u-1:o.index<c&&(c+=1),{styles:a.styles.concat(function({className:e,index:t,columnSpanConfig:n,visible:i,width:a,flexible:r}){let o="number"==typeof n?n:btoa(JSON.stringify(n));return r?`
      .${e} .static[data-column-span="${o}"]:nth-child(${t+1}) {
        visibility: ${i?"visible":"hidden"} !important;
        position: ${i?"inherit":"absolute"} !important;
        width: ${a}% !important;
      }`:`
      .${e} .static[data-column-span="${o}"]:nth-child(${t+1}) {
        visibility: ${i?"visible":"hidden"} !important;
        position: ${i?"inherit":"absolute"} !important;
        width: ${a}px !important;
      }`}({className:t,index:o.index,columnSpanConfig:l,visible:m,width:p,flexible:n})),numberOfVisibleItems:c}},{styles:"",numberOfVisibleItems:e}),_=n?`
      .${t} .static {
        box-sizing: border-box;
        width: calc(100% / ${e}) !important;
      }
    `:`
      .${t} {
        max-width: ${e*c}px;
      }

      .${t} .static {
        width: ${r}px !important;
      }
    `;return{minWidth:f,maxWidth:g,styles:`
      .${t} .static:nth-child(-n+${b}) {
        position: static !important;
        visibility: visible !important;
        float: ${a?"right":"left"};
        display: block;
      }

      .${t} .static {
        padding: 0 ${i/2}px;
      }

      ${_}

      ${x}
    `}}),y=h.map(({minWidth:e,maxWidth:t,styles:n})=>`
    @container (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${n}
    }
  `),f=h.map(({minWidth:e,maxWidth:t,styles:n})=>`
    @media (min-width: ${e}px) ${t?`and (max-width: ${t}px)`:""} {
      ${n}
    }
  `),g=`
    ${y.join("")}
    @supports not (container-type: inline-size) {
      ${f.join("")}
    }
  `;return{className:t,styles:`
    .masonryContainer:has(.${t}) {
      container-type: inline-size;
    }

    .masonryContainer > .centered {
      margin-left: auto;
      margin-right: auto;
    }

    .${t} .static {
      position: absolute !important;
      visibility: hidden !important;
    }

    ${g}
  `}}({gutterWidth:en,flexible:U,items:f,isRTL:X,itemWidth:et,maxColumns:e.maxColumns??Math.max(f.length,M.g5),minColumns:ei,getColumnSpanConfig:P,_getResponsiveModuleConfigForSecondItem:A}),eh=`${ep} ${ed}`.trim(),{anyEnabled:ey,expName:ef,group:eg,isMeasureAllEnabled:ex}=(0,h.Z)(),eb=((0,i.useRef)(void 0),(0,i.useRef)(f.length)),e_=(0,i.useRef)(0),ew=(0,i.useRef)(null);(0,i.useEffect)(()=>{eb.current=f.length,e_.current+=1},[f]),(0,i.useEffect)(()=>{if(es.current&&(es.current=!1),window.earlyGridRenderStats){let e=(0,k.M3)({earlyHydrationGroup:J,handlerId:Q,requestContext:H});(0,R.nP)("earlyHydrationDebug.masonry.earlyGridRender.status",{tags:e}),(0,R.LY)("earlyHydrationDebug.masonry.earlyGridRender.init",window.earlyGridRenderStats.init,{tags:e}),window.earlyGridRenderStats.start&&(0,R.LY)("earlyHydrationDebug.masonry.earlyGridRender.start",window.earlyGridRenderStats.start,{tags:e}),window.earlyGridRenderStats.end&&(0,R.LY)("earlyHydrationDebug.masonry.earlyGridRender.end",window.earlyGridRenderStats.end,{tags:e})}},[]),(0,i.useEffect)(()=>()=>{},[]);let ev=(0,i.useCallback)(e=>{let t=e.reduce((e,t)=>e+t),n=t/e.length;(0,R.S0)("webapp.masonry.multiColumnWhitespace.average",n,{sampleRate:1,tags:{experimentalMasonryGroup:eg||"unknown",handlerId:Q,isAuthenticated:T,multiColumnItemSpan:e.length}}),(0,R.S0)("webapp.masonry.twoColWhitespace",n,{sampleRate:1,tags:{columnWidth:et,minCols:ei}}),N({event_type:15878,component:14468,aux_data:{total_whitespace_px:t}}),N({event_type:16062,component:14468,aux_data:{average_whitespace_px:n}}),N({event_type:16063,component:14468,aux_data:{max_whitespace_px:Math.max(...e)}}),e.forEach(t=>{t>=50&&((0,R.nP)("webapp.masonry.multiColumnWhitespace.over50",{sampleRate:1,tags:{experimentalMasonryGroup:eg||"unknown",handlerId:Q,isAuthenticated:T,multiColumnItemSpan:e.length}}),N({event_type:16261,component:14468})),t>=100&&((0,R.nP)("webapp.masonry.multiColumnWhitespace.over100",{sampleRate:1,tags:{experimentalMasonryGroup:eg||"unknown",handlerId:Q,isAuthenticated:T,multiColumnItemSpan:e.length}}),N({event_type:16262,component:14468}))}),(0,R.nP)("webapp.masonry.multiColumnWhitespace.count",{sampleRate:1,tags:{experimentalMasonryGroup:eg||"unknown",handlerId:Q,isAuthenticated:T,multiColumnItemSpan:e.length}})},[et,N,ei,T,Q,eg]),{_items:eM,_renderItem:eC}=function({initialLoadingStatePinCount:e=50,infiniteScrollPinCount:t=10,isFetching:n,items:a=[],renderItem:r,isLoadingStateEnabled:o}){let l=+(a.filter(e=>"object"==typeof e&&null!==e&&"type"in e&&"closeup_module"===e.type).length>0),s=o&&n,u=(0,i.useMemo)(()=>Array.from({length:a.length>l?t:e}).reduce((e,t,n)=>[...e,{height:n%2==0?356:236,key:`skeleton-pin-${n}`,isSkeleton:!0}],[]),[a.length,l,t,e]);return{_items:(0,i.useMemo)(()=>s?[...a,...u]:a,[s,a,u]),_renderItem:(0,i.useMemo)(()=>o?e=>{let{itemIdx:t,data:n}=e;return t>=a.length&&n&&"object"==typeof n&&"key"in n&&"height"in n?(0,x.jsx)(v,{data:n},n.key):r(e)}:r,[o,r,a.length])}}({isLoadingStateEnabled:F,items:f,renderItem:(0,i.useCallback)(e=>(0,x.jsx)(l.Z,{name:"MasonryItem",children:I(e)}),[I]),isFetching:m,initialLoadingStatePinCount:z}),eS=F&&m,e$=(0,i.useRef)(new Set);(0,i.useEffect)(()=>{if(!eu)return;let e=setTimeout(()=>{requestAnimationFrame(()=>{let e=Array.from(ew.current?.querySelectorAll("[data-grid-item-idx]")??[]);if(0===e.length)return;let t=e.map(e=>{let t=e.getAttribute("data-grid-item-idx");return{rect:e.getBoundingClientRect(),itemIdx:t}}),n=0,i=0,a=0,r=0,o=0,l=0;for(let e=0;e<t.length;e+=1){let s=t[e]?.rect,u=t[e]?.itemIdx;for(let m=e+1;m<t.length;m+=1){let e=t[m]?.rect,p=t[m]?.itemIdx;if(s&&e&&u&&p){let t=[u,p].sort().join("|");if(!e$.current.has(t)&&s.right>=e.left&&s.left<=e.right&&s.bottom>=e.top&&s.top<=e.bottom&&s.height>0&&e.height>0){e$.current.add(t),n+=1;let u=Math.max(0,Math.min(s.right,e.right)-Math.max(s.left,e.left))*Math.max(0,Math.min(s.bottom,e.bottom)-Math.max(s.top,e.top));u>8e4?l+=1:u>4e4?o+=1:u>1e4?r+=1:u>5e3?a+=1:u>2500&&(i+=1)}}}}n>0&&(0,R.QX)("webapp.masonry.pinOverlapHits",n,{tags:{isAuthenticated:T,isDesktop:L,handlerId:Q,experimentalMasonryGroup:eg||"unknown",fluidResizeExperiment:em?"true":"false"}}),i>0&&(0,R.QX)("webapp.masonry.pinOverlap.AreaPx.over2500",i,{tags:{isAuthenticated:T,isDesktop:L,handlerId:Q,experimentalMasonryGroup:eg||"unknown",fluidResizeExperiment:em?"true":"false"}}),a>0&&(0,R.QX)("webapp.masonry.pinOverlap.AreaPx.over5000",a,{tags:{isAuthenticated:T,isDesktop:L,handlerId:Q,experimentalMasonryGroup:eg||"unknown",fluidResizeExperiment:em?"true":"false"}}),r>0&&(0,R.QX)("webapp.masonry.pinOverlap.AreaPx.over10000",r,{tags:{isAuthenticated:T,isDesktop:L,handlerId:Q,experimentalMasonryGroup:eg||"unknown",fluidResizeExperiment:em?"true":"false"}}),o>0&&(0,R.QX)("webapp.masonry.pinOverlap.AreaPx.over40000",o,{tags:{isAuthenticated:T,isDesktop:L,handlerId:Q,experimentalMasonryGroup:eg||"unknown",fluidResizeExperiment:em?"true":"false"}}),l>0&&(0,R.QX)("webapp.masonry.pinOverlap.AreaPx.over80000",l,{tags:{isAuthenticated:T,isDesktop:L,handlerId:Q,experimentalMasonryGroup:eg||"unknown",fluidResizeExperiment:em?"true":"false"}})})},1e3);return()=>{clearTimeout(e)}},[et,eg,em,T,L,eu,f,Q]);let eR=(0,r.Z)(),ek=(0,i.useCallback)(e=>{w&&(w.current=e)},[w]);return(0,x.jsxs)(i.Fragment,{children:[F&&!es.current&&(0,x.jsx)(a.xu,{"aria-live":"polite",display:"visuallyHidden",children:eS?O:Z}),(0,x.jsx)("div",{ref:ew,"aria-busy":F?!!eS:void 0,className:"masonryContainer","data-test-id":"masonry-container",id:s,style:V?{padding:`0 ${en/2}px`}:void 0,children:(0,x.jsxs)("div",{className:eh,children:[K&&es.current?(0,x.jsx)(g.Z,{"data-test-id":"masonry-ssr-styles",unsafeCSS:ec}):null,(0,x.jsx)(a.xu,{"data-test-id":"max-width-container",marginBottom:0,marginEnd:"auto",marginStart:"auto",marginTop:0,maxWidth:e.maxColumns?er*e.maxColumns:void 0,children:ey?(0,x.jsx)(a.GX,{ref:eR?ek:e=>{w&&(w.current=e)},_dynamicHeights:!0,_getResponsiveModuleConfigForSecondItem:A,_logTwoColWhitespace:ev,_measureAll:ex,align:t,columnWidth:et,getColumnSpanConfig:P,gutterWidth:en,items:eM,layout:U?ee:b??"basic",loadItems:_,measurementStore:eo,minCols:ei,renderItem:eC,scrollContainer:el,virtualBufferFactor:.3,virtualize:G}):(0,x.jsx)(a.Rk,{ref:eR?ek:e=>{w&&(w.current=e)},_dynamicHeights:!0,_fluidResize:em,_getResponsiveModuleConfigForSecondItem:A,_logTwoColWhitespace:ev,align:t,columnWidth:et,getColumnSpanConfig:P,gutterWidth:en,items:eM,layout:U?ee:b??"basic",loadItems:_,measurementStore:eo,minCols:ei,renderItem:eC,scrollContainer:el,virtualBufferFactor:.3,virtualize:G})})]})})]})}},399083:(e,t,n)=>{n.d(t,{Z:()=>i});function i(e=!0){let t=e?16:void 0,n=t?Math.floor(t/4):void 0;return{experimentalColumnWidth:e?221:void 0,experimentalGutter:t,experimentalGutterBoints:n}}},824834:(e,t,n)=>{n.d(t,{Z:()=>a});var i=n(967312);function a(e){let{expName:t,anyEnabled:n,group:a}=function({experimentsClient:e,skipActivation:t}){let{checkExperiment:n}=e,i=n("web_masonry_v2",{dangerouslySkipActivation:t});return i.group?{expName:"web_masonry_v2",...i}:{expName:"",anyEnabled:!1,group:""}}({experimentsClient:(0,i.FJ)(),skipActivation:e?.skipActivation??!1});return{expName:t,anyEnabled:n,group:a,isMeasureAllEnabled:"enabled_measure_all"===a||"enabled_measure_all_impression_fix"===a,isImpressionFixEnabled:"control_impression_fix"===a||"enabled_impression_fix"===a||"enabled_measure_all_impression_fix"===a}}},544221:(e,t,n)=>{n.d(t,{DB:()=>m,M3:()=>u,SS:()=>s,WP:()=>l});var i=n(667294),a=n(276162),r=n(720038);let o={anyEnabled:!1,group:"",scriptPlacement:"head",preloadScripts:!1,optimizedClient:!1},l=(0,i.createContext)(null);function s({experimentsClient:e,handlerId:t,skipActivation:n=!1}){let{site:i}=(0,r.ac)(t??"");if("www"!==i)return o;let{group:a}=e?.checkExperiment("web_early_hydration",{dangerouslySkipActivation:n})??{group:""},l=a.includes("optimized_client")||"employees"===a;switch(a){case"enabled":case"enabled_optimized_client":return{anyEnabled:!0,group:a,scriptPlacement:"head",preloadScripts:!1,optimizedClient:l};case"employees":case"enabled_preload_and_body_scripts":case"enabled_preload_and_body_scripts_optimized_client":return{anyEnabled:!0,group:a,scriptPlacement:"body",preloadScripts:!0,optimizedClient:l};case"enabled_preload_and_dynamic_scripts":case"enabled_preload_and_dynamic_scripts_optimized_client":return{anyEnabled:!0,group:a,scriptPlacement:"dynamic",preloadScripts:!0,optimizedClient:l};case"control":return{...o,group:a};default:return o}}function u({earlyHydrationGroup:e,handlerId:t,requestContext:n}){let{isAuthenticated:i,isBot:a,userAgent:r}=n;return{earlyHydrationGroup:e||"unknown",environment:"client",handlerId:t,isAuthenticated:i,isBot:a,isDesktop:!r.isMobile&&!r.isTablet,isFromInstantLoadingIndicatorAppShell:window.isFromInstantLoadingIndicatorAppShell||!1}}function m(){return(0,i.useContext)(l)??o}(0,a.kr)()}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/6881-66b48a5ef0f30e53.mjs.map