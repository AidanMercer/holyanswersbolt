function gw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function yw(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var hg={exports:{}},ul={},dg={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ys=Symbol.for("react.element"),vw=Symbol.for("react.portal"),_w=Symbol.for("react.fragment"),ww=Symbol.for("react.strict_mode"),Ew=Symbol.for("react.profiler"),Iw=Symbol.for("react.provider"),Tw=Symbol.for("react.context"),Sw=Symbol.for("react.forward_ref"),kw=Symbol.for("react.suspense"),Aw=Symbol.for("react.memo"),Cw=Symbol.for("react.lazy"),Wf=Symbol.iterator;function Pw(t){return t===null||typeof t!="object"?null:(t=Wf&&t[Wf]||t["@@iterator"],typeof t=="function"?t:null)}var fg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},pg=Object.assign,mg={};function Si(t,e,n){this.props=t,this.context=e,this.refs=mg,this.updater=n||fg}Si.prototype.isReactComponent={};Si.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Si.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function gg(){}gg.prototype=Si.prototype;function hh(t,e,n){this.props=t,this.context=e,this.refs=mg,this.updater=n||fg}var dh=hh.prototype=new gg;dh.constructor=hh;pg(dh,Si.prototype);dh.isPureReactComponent=!0;var Gf=Array.isArray,yg=Object.prototype.hasOwnProperty,fh={current:null},vg={key:!0,ref:!0,__self:!0,__source:!0};function _g(t,e,n){var r,i={},s=null,a=null;if(e!=null)for(r in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)yg.call(e,r)&&!vg.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ys,type:t,key:s,ref:a,props:i,_owner:fh.current}}function Rw(t,e){return{$$typeof:Ys,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ph(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ys}function xw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Kf=/\/+/g;function cu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?xw(""+t.key):e.toString(36)}function ta(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Ys:case vw:a=!0}}if(a)return a=t,i=i(a),t=r===""?"."+cu(a,0):r,Gf(i)?(n="",t!=null&&(n=t.replace(Kf,"$&/")+"/"),ta(i,e,n,"",function(h){return h})):i!=null&&(ph(i)&&(i=Rw(i,n+(!i.key||a&&a.key===i.key?"":(""+i.key).replace(Kf,"$&/")+"/")+t)),e.push(i)),1;if(a=0,r=r===""?".":r+":",Gf(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+cu(s,l);a+=ta(s,e,n,u,i)}else if(u=Pw(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+cu(s,l++),a+=ta(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function No(t,e,n){if(t==null)return t;var r=[],i=0;return ta(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Nw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var st={current:null},na={transition:null},Ow={ReactCurrentDispatcher:st,ReactCurrentBatchConfig:na,ReactCurrentOwner:fh};function wg(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:No,forEach:function(t,e,n){No(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return No(t,function(){e++}),e},toArray:function(t){return No(t,function(e){return e})||[]},only:function(t){if(!ph(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};X.Component=Si;X.Fragment=_w;X.Profiler=Ew;X.PureComponent=hh;X.StrictMode=ww;X.Suspense=kw;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ow;X.act=wg;X.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=pg({},t.props),i=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=fh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)yg.call(e,u)&&!vg.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Ys,type:t.type,key:i,ref:s,props:r,_owner:a}};X.createContext=function(t){return t={$$typeof:Tw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Iw,_context:t},t.Consumer=t};X.createElement=_g;X.createFactory=function(t){var e=_g.bind(null,t);return e.type=t,e};X.createRef=function(){return{current:null}};X.forwardRef=function(t){return{$$typeof:Sw,render:t}};X.isValidElement=ph;X.lazy=function(t){return{$$typeof:Cw,_payload:{_status:-1,_result:t},_init:Nw}};X.memo=function(t,e){return{$$typeof:Aw,type:t,compare:e===void 0?null:e}};X.startTransition=function(t){var e=na.transition;na.transition={};try{t()}finally{na.transition=e}};X.unstable_act=wg;X.useCallback=function(t,e){return st.current.useCallback(t,e)};X.useContext=function(t){return st.current.useContext(t)};X.useDebugValue=function(){};X.useDeferredValue=function(t){return st.current.useDeferredValue(t)};X.useEffect=function(t,e){return st.current.useEffect(t,e)};X.useId=function(){return st.current.useId()};X.useImperativeHandle=function(t,e,n){return st.current.useImperativeHandle(t,e,n)};X.useInsertionEffect=function(t,e){return st.current.useInsertionEffect(t,e)};X.useLayoutEffect=function(t,e){return st.current.useLayoutEffect(t,e)};X.useMemo=function(t,e){return st.current.useMemo(t,e)};X.useReducer=function(t,e,n){return st.current.useReducer(t,e,n)};X.useRef=function(t){return st.current.useRef(t)};X.useState=function(t){return st.current.useState(t)};X.useSyncExternalStore=function(t,e,n){return st.current.useSyncExternalStore(t,e,n)};X.useTransition=function(){return st.current.useTransition()};X.version="18.3.1";dg.exports=X;var M=dg.exports;const Eg=yw(M),Dw=gw({__proto__:null,default:Eg},[M]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lw=M,Mw=Symbol.for("react.element"),Vw=Symbol.for("react.fragment"),bw=Object.prototype.hasOwnProperty,Uw=Lw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jw={key:!0,ref:!0,__self:!0,__source:!0};function Ig(t,e,n){var r,i={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)bw.call(e,r)&&!jw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Mw,type:t,key:s,ref:a,props:i,_owner:Uw.current}}ul.Fragment=Vw;ul.jsx=Ig;ul.jsxs=Ig;hg.exports=ul;var C=hg.exports,Tg={exports:{}},wt={},Sg={exports:{}},kg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,K){var q=B.length;B.push(K);e:for(;0<q;){var fe=q-1>>>1,re=B[fe];if(0<i(re,K))B[fe]=K,B[q]=re,q=fe;else break e}}function n(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var K=B[0],q=B.pop();if(q!==K){B[0]=q;e:for(var fe=0,re=B.length,Ee=re>>>1;fe<Ee;){var Xt=2*(fe+1)-1,Yt=B[Xt],Jt=Xt+1,Zt=B[Jt];if(0>i(Yt,q))Jt<re&&0>i(Zt,Yt)?(B[fe]=Zt,B[Jt]=q,fe=Jt):(B[fe]=Yt,B[Xt]=q,fe=Xt);else if(Jt<re&&0>i(Zt,q))B[fe]=Zt,B[Jt]=q,fe=Jt;else break e}}return K}function i(B,K){var q=B.sortIndex-K.sortIndex;return q!==0?q:B.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,l=a.now();t.unstable_now=function(){return a.now()-l}}var u=[],h=[],f=1,m=null,y=3,A=!1,S=!1,N=!1,D=typeof setTimeout=="function"?setTimeout:null,_=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k(B){for(var K=n(h);K!==null;){if(K.callback===null)r(h);else if(K.startTime<=B)r(h),K.sortIndex=K.expirationTime,e(u,K);else break;K=n(h)}}function L(B){if(N=!1,k(B),!S)if(n(u)!==null)S=!0,Li(j);else{var K=n(h);K!==null&&Qt(L,K.startTime-B)}}function j(B,K){S=!1,N&&(N=!1,_(g),g=-1),A=!0;var q=y;try{for(k(K),m=n(u);m!==null&&(!(m.expirationTime>K)||B&&!P());){var fe=m.callback;if(typeof fe=="function"){m.callback=null,y=m.priorityLevel;var re=fe(m.expirationTime<=K);K=t.unstable_now(),typeof re=="function"?m.callback=re:m===n(u)&&r(u),k(K)}else r(u);m=n(u)}if(m!==null)var Ee=!0;else{var Xt=n(h);Xt!==null&&Qt(L,Xt.startTime-K),Ee=!1}return Ee}finally{m=null,y=q,A=!1}}var z=!1,E=null,g=-1,w=5,I=-1;function P(){return!(t.unstable_now()-I<w)}function x(){if(E!==null){var B=t.unstable_now();I=B;var K=!0;try{K=E(!0,B)}finally{K?T():(z=!1,E=null)}}else z=!1}var T;if(typeof v=="function")T=function(){v(x)};else if(typeof MessageChannel<"u"){var It=new MessageChannel,ir=It.port2;It.port1.onmessage=x,T=function(){ir.postMessage(null)}}else T=function(){D(x,0)};function Li(B){E=B,z||(z=!0,T())}function Qt(B,K){g=D(function(){B(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){S||A||(S=!0,Li(j))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return y},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(B){switch(y){case 1:case 2:case 3:var K=3;break;default:K=y}var q=y;y=K;try{return B()}finally{y=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,K){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var q=y;y=B;try{return K()}finally{y=q}},t.unstable_scheduleCallback=function(B,K,q){var fe=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?fe+q:fe):q=fe,B){case 1:var re=-1;break;case 2:re=250;break;case 5:re=1073741823;break;case 4:re=1e4;break;default:re=5e3}return re=q+re,B={id:f++,callback:K,priorityLevel:B,startTime:q,expirationTime:re,sortIndex:-1},q>fe?(B.sortIndex=q,e(h,B),n(u)===null&&B===n(h)&&(N?(_(g),g=-1):N=!0,Qt(L,q-fe))):(B.sortIndex=re,e(u,B),S||A||(S=!0,Li(j))),B},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(B){var K=y;return function(){var q=y;y=K;try{return B.apply(this,arguments)}finally{y=q}}}})(kg);Sg.exports=kg;var Fw=Sg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zw=M,_t=Fw;function U(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ag=new Set,Ts={};function Dr(t,e){ci(t,e),ci(t+"Capture",e)}function ci(t,e){for(Ts[t]=e,t=0;t<e.length;t++)Ag.add(e[t])}var pn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Yu=Object.prototype.hasOwnProperty,Bw=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,qf={},Qf={};function $w(t){return Yu.call(Qf,t)?!0:Yu.call(qf,t)?!1:Bw.test(t)?Qf[t]=!0:(qf[t]=!0,!1)}function Hw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Ww(t,e,n,r){if(e===null||typeof e>"u"||Hw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ot(t,e,n,r,i,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Be={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Be[t]=new ot(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Be[e]=new ot(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Be[t]=new ot(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Be[t]=new ot(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Be[t]=new ot(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Be[t]=new ot(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Be[t]=new ot(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Be[t]=new ot(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Be[t]=new ot(t,5,!1,t.toLowerCase(),null,!1,!1)});var mh=/[\-:]([a-z])/g;function gh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(mh,gh);Be[e]=new ot(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(mh,gh);Be[e]=new ot(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(mh,gh);Be[e]=new ot(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Be[t]=new ot(t,1,!1,t.toLowerCase(),null,!1,!1)});Be.xlinkHref=new ot("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Be[t]=new ot(t,1,!1,t.toLowerCase(),null,!0,!0)});function yh(t,e,n,r){var i=Be.hasOwnProperty(e)?Be[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Ww(e,n,i,r)&&(n=null),r||i===null?$w(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var wn=zw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oo=Symbol.for("react.element"),Br=Symbol.for("react.portal"),$r=Symbol.for("react.fragment"),vh=Symbol.for("react.strict_mode"),Ju=Symbol.for("react.profiler"),Cg=Symbol.for("react.provider"),Pg=Symbol.for("react.context"),_h=Symbol.for("react.forward_ref"),Zu=Symbol.for("react.suspense"),ec=Symbol.for("react.suspense_list"),wh=Symbol.for("react.memo"),Cn=Symbol.for("react.lazy"),Rg=Symbol.for("react.offscreen"),Xf=Symbol.iterator;function qi(t){return t===null||typeof t!="object"?null:(t=Xf&&t[Xf]||t["@@iterator"],typeof t=="function"?t:null)}var ye=Object.assign,hu;function is(t){if(hu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);hu=e&&e[1]||""}return`
`+hu+t}var du=!1;function fu(t,e){if(!t||du)return"";du=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),a=i.length-1,l=s.length-1;1<=a&&0<=l&&i[a]!==s[l];)l--;for(;1<=a&&0<=l;a--,l--)if(i[a]!==s[l]){if(a!==1||l!==1)do if(a--,l--,0>l||i[a]!==s[l]){var u=`
`+i[a].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=a&&0<=l);break}}}finally{du=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?is(t):""}function Gw(t){switch(t.tag){case 5:return is(t.type);case 16:return is("Lazy");case 13:return is("Suspense");case 19:return is("SuspenseList");case 0:case 2:case 15:return t=fu(t.type,!1),t;case 11:return t=fu(t.type.render,!1),t;case 1:return t=fu(t.type,!0),t;default:return""}}function tc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case $r:return"Fragment";case Br:return"Portal";case Ju:return"Profiler";case vh:return"StrictMode";case Zu:return"Suspense";case ec:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Pg:return(t.displayName||"Context")+".Consumer";case Cg:return(t._context.displayName||"Context")+".Provider";case _h:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case wh:return e=t.displayName||null,e!==null?e:tc(t.type)||"Memo";case Cn:e=t._payload,t=t._init;try{return tc(t(e))}catch{}}return null}function Kw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return tc(e);case 8:return e===vh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Qn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qw(t){var e=xg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(a){r=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(a){r=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Do(t){t._valueTracker||(t._valueTracker=qw(t))}function Ng(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=xg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function wa(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function nc(t,e){var n=e.checked;return ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Yf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Qn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Og(t,e){e=e.checked,e!=null&&yh(t,"checked",e,!1)}function rc(t,e){Og(t,e);var n=Qn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?ic(t,e.type,n):e.hasOwnProperty("defaultValue")&&ic(t,e.type,Qn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Jf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function ic(t,e,n){(e!=="number"||wa(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ss=Array.isArray;function ei(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Qn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function sc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(U(91));return ye({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Zf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(U(92));if(ss(n)){if(1<n.length)throw Error(U(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Qn(n)}}function Dg(t,e){var n=Qn(e.value),r=Qn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function ep(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Lg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Lg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Lo,Mg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Lo=Lo||document.createElement("div"),Lo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Lo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ss(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var us={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qw=["Webkit","ms","Moz","O"];Object.keys(us).forEach(function(t){Qw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),us[e]=us[t]})});function Vg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||us.hasOwnProperty(t)&&us[t]?(""+e).trim():e+"px"}function bg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Vg(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Xw=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ac(t,e){if(e){if(Xw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(U(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(U(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(U(61))}if(e.style!=null&&typeof e.style!="object")throw Error(U(62))}}function lc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uc=null;function Eh(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var cc=null,ti=null,ni=null;function tp(t){if(t=eo(t)){if(typeof cc!="function")throw Error(U(280));var e=t.stateNode;e&&(e=pl(e),cc(t.stateNode,t.type,e))}}function Ug(t){ti?ni?ni.push(t):ni=[t]:ti=t}function jg(){if(ti){var t=ti,e=ni;if(ni=ti=null,tp(t),e)for(t=0;t<e.length;t++)tp(e[t])}}function Fg(t,e){return t(e)}function zg(){}var pu=!1;function Bg(t,e,n){if(pu)return t(e,n);pu=!0;try{return Fg(t,e,n)}finally{pu=!1,(ti!==null||ni!==null)&&(zg(),jg())}}function ks(t,e){var n=t.stateNode;if(n===null)return null;var r=pl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var hc=!1;if(pn)try{var Qi={};Object.defineProperty(Qi,"passive",{get:function(){hc=!0}}),window.addEventListener("test",Qi,Qi),window.removeEventListener("test",Qi,Qi)}catch{hc=!1}function Yw(t,e,n,r,i,s,a,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var cs=!1,Ea=null,Ia=!1,dc=null,Jw={onError:function(t){cs=!0,Ea=t}};function Zw(t,e,n,r,i,s,a,l,u){cs=!1,Ea=null,Yw.apply(Jw,arguments)}function eE(t,e,n,r,i,s,a,l,u){if(Zw.apply(this,arguments),cs){if(cs){var h=Ea;cs=!1,Ea=null}else throw Error(U(198));Ia||(Ia=!0,dc=h)}}function Lr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function $g(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function np(t){if(Lr(t)!==t)throw Error(U(188))}function tE(t){var e=t.alternate;if(!e){if(e=Lr(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return np(i),t;if(s===r)return np(i),e;s=s.sibling}throw Error(U(188))}if(n.return!==r.return)n=i,r=s;else{for(var a=!1,l=i.child;l;){if(l===n){a=!0,n=i,r=s;break}if(l===r){a=!0,r=i,n=s;break}l=l.sibling}if(!a){for(l=s.child;l;){if(l===n){a=!0,n=s,r=i;break}if(l===r){a=!0,r=s,n=i;break}l=l.sibling}if(!a)throw Error(U(189))}}if(n.alternate!==r)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function Hg(t){return t=tE(t),t!==null?Wg(t):null}function Wg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Wg(t);if(e!==null)return e;t=t.sibling}return null}var Gg=_t.unstable_scheduleCallback,rp=_t.unstable_cancelCallback,nE=_t.unstable_shouldYield,rE=_t.unstable_requestPaint,Ie=_t.unstable_now,iE=_t.unstable_getCurrentPriorityLevel,Ih=_t.unstable_ImmediatePriority,Kg=_t.unstable_UserBlockingPriority,Ta=_t.unstable_NormalPriority,sE=_t.unstable_LowPriority,qg=_t.unstable_IdlePriority,cl=null,$t=null;function oE(t){if($t&&typeof $t.onCommitFiberRoot=="function")try{$t.onCommitFiberRoot(cl,t,void 0,(t.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:uE,aE=Math.log,lE=Math.LN2;function uE(t){return t>>>=0,t===0?32:31-(aE(t)/lE|0)|0}var Mo=64,Vo=4194304;function os(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Sa(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var l=a&~i;l!==0?r=os(l):(s&=a,s!==0&&(r=os(s)))}else a=n&~i,a!==0?r=os(a):s!==0&&(r=os(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Mt(e),i=1<<n,r|=t[n],e&=~i;return r}function cE(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function hE(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Mt(s),l=1<<a,u=i[a];u===-1?(!(l&n)||l&r)&&(i[a]=cE(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function fc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Qg(){var t=Mo;return Mo<<=1,!(Mo&4194240)&&(Mo=64),t}function mu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Js(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Mt(e),t[e]=n}function dE(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Mt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Th(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Mt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ne=0;function Xg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Yg,Sh,Jg,Zg,ey,pc=!1,bo=[],bn=null,Un=null,jn=null,As=new Map,Cs=new Map,Rn=[],fE="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ip(t,e){switch(t){case"focusin":case"focusout":bn=null;break;case"dragenter":case"dragleave":Un=null;break;case"mouseover":case"mouseout":jn=null;break;case"pointerover":case"pointerout":As.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Cs.delete(e.pointerId)}}function Xi(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=eo(e),e!==null&&Sh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function pE(t,e,n,r,i){switch(e){case"focusin":return bn=Xi(bn,t,e,n,r,i),!0;case"dragenter":return Un=Xi(Un,t,e,n,r,i),!0;case"mouseover":return jn=Xi(jn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return As.set(s,Xi(As.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Cs.set(s,Xi(Cs.get(s)||null,t,e,n,r,i)),!0}return!1}function ty(t){var e=dr(t.target);if(e!==null){var n=Lr(e);if(n!==null){if(e=n.tag,e===13){if(e=$g(n),e!==null){t.blockedOn=e,ey(t.priority,function(){Jg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ra(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=mc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);uc=r,n.target.dispatchEvent(r),uc=null}else return e=eo(n),e!==null&&Sh(e),t.blockedOn=n,!1;e.shift()}return!0}function sp(t,e,n){ra(t)&&n.delete(e)}function mE(){pc=!1,bn!==null&&ra(bn)&&(bn=null),Un!==null&&ra(Un)&&(Un=null),jn!==null&&ra(jn)&&(jn=null),As.forEach(sp),Cs.forEach(sp)}function Yi(t,e){t.blockedOn===e&&(t.blockedOn=null,pc||(pc=!0,_t.unstable_scheduleCallback(_t.unstable_NormalPriority,mE)))}function Ps(t){function e(i){return Yi(i,t)}if(0<bo.length){Yi(bo[0],t);for(var n=1;n<bo.length;n++){var r=bo[n];r.blockedOn===t&&(r.blockedOn=null)}}for(bn!==null&&Yi(bn,t),Un!==null&&Yi(Un,t),jn!==null&&Yi(jn,t),As.forEach(e),Cs.forEach(e),n=0;n<Rn.length;n++)r=Rn[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<Rn.length&&(n=Rn[0],n.blockedOn===null);)ty(n),n.blockedOn===null&&Rn.shift()}var ri=wn.ReactCurrentBatchConfig,ka=!0;function gE(t,e,n,r){var i=ne,s=ri.transition;ri.transition=null;try{ne=1,kh(t,e,n,r)}finally{ne=i,ri.transition=s}}function yE(t,e,n,r){var i=ne,s=ri.transition;ri.transition=null;try{ne=4,kh(t,e,n,r)}finally{ne=i,ri.transition=s}}function kh(t,e,n,r){if(ka){var i=mc(t,e,n,r);if(i===null)ku(t,e,r,Aa,n),ip(t,r);else if(pE(i,t,e,n,r))r.stopPropagation();else if(ip(t,r),e&4&&-1<fE.indexOf(t)){for(;i!==null;){var s=eo(i);if(s!==null&&Yg(s),s=mc(t,e,n,r),s===null&&ku(t,e,r,Aa,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else ku(t,e,r,null,n)}}var Aa=null;function mc(t,e,n,r){if(Aa=null,t=Eh(r),t=dr(t),t!==null)if(e=Lr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=$g(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Aa=t,null}function ny(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(iE()){case Ih:return 1;case Kg:return 4;case Ta:case sE:return 16;case qg:return 536870912;default:return 16}default:return 16}}var Ln=null,Ah=null,ia=null;function ry(){if(ia)return ia;var t,e=Ah,n=e.length,r,i="value"in Ln?Ln.value:Ln.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var a=n-t;for(r=1;r<=a&&e[n-r]===i[s-r];r++);return ia=i.slice(t,1<r?1-r:void 0)}function sa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Uo(){return!0}function op(){return!1}function Et(t){function e(n,r,i,s,a){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Uo:op,this.isPropagationStopped=op,this}return ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Uo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Uo)},persist:function(){},isPersistent:Uo}),e}var ki={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ch=Et(ki),Zs=ye({},ki,{view:0,detail:0}),vE=Et(Zs),gu,yu,Ji,hl=ye({},Zs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ph,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ji&&(Ji&&t.type==="mousemove"?(gu=t.screenX-Ji.screenX,yu=t.screenY-Ji.screenY):yu=gu=0,Ji=t),gu)},movementY:function(t){return"movementY"in t?t.movementY:yu}}),ap=Et(hl),_E=ye({},hl,{dataTransfer:0}),wE=Et(_E),EE=ye({},Zs,{relatedTarget:0}),vu=Et(EE),IE=ye({},ki,{animationName:0,elapsedTime:0,pseudoElement:0}),TE=Et(IE),SE=ye({},ki,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),kE=Et(SE),AE=ye({},ki,{data:0}),lp=Et(AE),CE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},PE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},RE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xE(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=RE[t])?!!e[t]:!1}function Ph(){return xE}var NE=ye({},Zs,{key:function(t){if(t.key){var e=CE[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=sa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?PE[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ph,charCode:function(t){return t.type==="keypress"?sa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?sa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),OE=Et(NE),DE=ye({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),up=Et(DE),LE=ye({},Zs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ph}),ME=Et(LE),VE=ye({},ki,{propertyName:0,elapsedTime:0,pseudoElement:0}),bE=Et(VE),UE=ye({},hl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),jE=Et(UE),FE=[9,13,27,32],Rh=pn&&"CompositionEvent"in window,hs=null;pn&&"documentMode"in document&&(hs=document.documentMode);var zE=pn&&"TextEvent"in window&&!hs,iy=pn&&(!Rh||hs&&8<hs&&11>=hs),cp=" ",hp=!1;function sy(t,e){switch(t){case"keyup":return FE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function oy(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hr=!1;function BE(t,e){switch(t){case"compositionend":return oy(e);case"keypress":return e.which!==32?null:(hp=!0,cp);case"textInput":return t=e.data,t===cp&&hp?null:t;default:return null}}function $E(t,e){if(Hr)return t==="compositionend"||!Rh&&sy(t,e)?(t=ry(),ia=Ah=Ln=null,Hr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return iy&&e.locale!=="ko"?null:e.data;default:return null}}var HE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!HE[t.type]:e==="textarea"}function ay(t,e,n,r){Ug(r),e=Ca(e,"onChange"),0<e.length&&(n=new Ch("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var ds=null,Rs=null;function WE(t){vy(t,0)}function dl(t){var e=Kr(t);if(Ng(e))return t}function GE(t,e){if(t==="change")return e}var ly=!1;if(pn){var _u;if(pn){var wu="oninput"in document;if(!wu){var fp=document.createElement("div");fp.setAttribute("oninput","return;"),wu=typeof fp.oninput=="function"}_u=wu}else _u=!1;ly=_u&&(!document.documentMode||9<document.documentMode)}function pp(){ds&&(ds.detachEvent("onpropertychange",uy),Rs=ds=null)}function uy(t){if(t.propertyName==="value"&&dl(Rs)){var e=[];ay(e,Rs,t,Eh(t)),Bg(WE,e)}}function KE(t,e,n){t==="focusin"?(pp(),ds=e,Rs=n,ds.attachEvent("onpropertychange",uy)):t==="focusout"&&pp()}function qE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return dl(Rs)}function QE(t,e){if(t==="click")return dl(e)}function XE(t,e){if(t==="input"||t==="change")return dl(e)}function YE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var jt=typeof Object.is=="function"?Object.is:YE;function xs(t,e){if(jt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Yu.call(e,i)||!jt(t[i],e[i]))return!1}return!0}function mp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function gp(t,e){var n=mp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=mp(n)}}function cy(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?cy(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function hy(){for(var t=window,e=wa();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=wa(t.document)}return e}function xh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function JE(t){var e=hy(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&cy(n.ownerDocument.documentElement,n)){if(r!==null&&xh(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=gp(n,s);var a=gp(n,r);i&&a&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ZE=pn&&"documentMode"in document&&11>=document.documentMode,Wr=null,gc=null,fs=null,yc=!1;function yp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;yc||Wr==null||Wr!==wa(r)||(r=Wr,"selectionStart"in r&&xh(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),fs&&xs(fs,r)||(fs=r,r=Ca(gc,"onSelect"),0<r.length&&(e=new Ch("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Wr)))}function jo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Gr={animationend:jo("Animation","AnimationEnd"),animationiteration:jo("Animation","AnimationIteration"),animationstart:jo("Animation","AnimationStart"),transitionend:jo("Transition","TransitionEnd")},Eu={},dy={};pn&&(dy=document.createElement("div").style,"AnimationEvent"in window||(delete Gr.animationend.animation,delete Gr.animationiteration.animation,delete Gr.animationstart.animation),"TransitionEvent"in window||delete Gr.transitionend.transition);function fl(t){if(Eu[t])return Eu[t];if(!Gr[t])return t;var e=Gr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in dy)return Eu[t]=e[n];return t}var fy=fl("animationend"),py=fl("animationiteration"),my=fl("animationstart"),gy=fl("transitionend"),yy=new Map,vp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function er(t,e){yy.set(t,e),Dr(e,[t])}for(var Iu=0;Iu<vp.length;Iu++){var Tu=vp[Iu],eI=Tu.toLowerCase(),tI=Tu[0].toUpperCase()+Tu.slice(1);er(eI,"on"+tI)}er(fy,"onAnimationEnd");er(py,"onAnimationIteration");er(my,"onAnimationStart");er("dblclick","onDoubleClick");er("focusin","onFocus");er("focusout","onBlur");er(gy,"onTransitionEnd");ci("onMouseEnter",["mouseout","mouseover"]);ci("onMouseLeave",["mouseout","mouseover"]);ci("onPointerEnter",["pointerout","pointerover"]);ci("onPointerLeave",["pointerout","pointerover"]);Dr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var as="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nI=new Set("cancel close invalid load scroll toggle".split(" ").concat(as));function _p(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,eE(r,e,void 0,t),t.currentTarget=null}function vy(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var a=r.length-1;0<=a;a--){var l=r[a],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;_p(i,l,h),s=u}else for(a=0;a<r.length;a++){if(l=r[a],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;_p(i,l,h),s=u}}}if(Ia)throw t=dc,Ia=!1,dc=null,t}function ue(t,e){var n=e[Ic];n===void 0&&(n=e[Ic]=new Set);var r=t+"__bubble";n.has(r)||(_y(e,t,2,!1),n.add(r))}function Su(t,e,n){var r=0;e&&(r|=4),_y(n,t,r,e)}var Fo="_reactListening"+Math.random().toString(36).slice(2);function Ns(t){if(!t[Fo]){t[Fo]=!0,Ag.forEach(function(n){n!=="selectionchange"&&(nI.has(n)||Su(n,!1,t),Su(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Fo]||(e[Fo]=!0,Su("selectionchange",!1,e))}}function _y(t,e,n,r){switch(ny(e)){case 1:var i=gE;break;case 4:i=yE;break;default:i=kh}n=i.bind(null,e,n,t),i=void 0,!hc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function ku(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var a=r.tag;if(a===3||a===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(a===4)for(a=r.return;a!==null;){var u=a.tag;if((u===3||u===4)&&(u=a.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;a=a.return}for(;l!==null;){if(a=dr(l),a===null)return;if(u=a.tag,u===5||u===6){r=s=a;continue e}l=l.parentNode}}r=r.return}Bg(function(){var h=s,f=Eh(n),m=[];e:{var y=yy.get(t);if(y!==void 0){var A=Ch,S=t;switch(t){case"keypress":if(sa(n)===0)break e;case"keydown":case"keyup":A=OE;break;case"focusin":S="focus",A=vu;break;case"focusout":S="blur",A=vu;break;case"beforeblur":case"afterblur":A=vu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=ap;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=wE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=ME;break;case fy:case py:case my:A=TE;break;case gy:A=bE;break;case"scroll":A=vE;break;case"wheel":A=jE;break;case"copy":case"cut":case"paste":A=kE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=up}var N=(e&4)!==0,D=!N&&t==="scroll",_=N?y!==null?y+"Capture":null:y;N=[];for(var v=h,k;v!==null;){k=v;var L=k.stateNode;if(k.tag===5&&L!==null&&(k=L,_!==null&&(L=ks(v,_),L!=null&&N.push(Os(v,L,k)))),D)break;v=v.return}0<N.length&&(y=new A(y,S,null,n,f),m.push({event:y,listeners:N}))}}if(!(e&7)){e:{if(y=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",y&&n!==uc&&(S=n.relatedTarget||n.fromElement)&&(dr(S)||S[mn]))break e;if((A||y)&&(y=f.window===f?f:(y=f.ownerDocument)?y.defaultView||y.parentWindow:window,A?(S=n.relatedTarget||n.toElement,A=h,S=S?dr(S):null,S!==null&&(D=Lr(S),S!==D||S.tag!==5&&S.tag!==6)&&(S=null)):(A=null,S=h),A!==S)){if(N=ap,L="onMouseLeave",_="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(N=up,L="onPointerLeave",_="onPointerEnter",v="pointer"),D=A==null?y:Kr(A),k=S==null?y:Kr(S),y=new N(L,v+"leave",A,n,f),y.target=D,y.relatedTarget=k,L=null,dr(f)===h&&(N=new N(_,v+"enter",S,n,f),N.target=k,N.relatedTarget=D,L=N),D=L,A&&S)t:{for(N=A,_=S,v=0,k=N;k;k=Fr(k))v++;for(k=0,L=_;L;L=Fr(L))k++;for(;0<v-k;)N=Fr(N),v--;for(;0<k-v;)_=Fr(_),k--;for(;v--;){if(N===_||_!==null&&N===_.alternate)break t;N=Fr(N),_=Fr(_)}N=null}else N=null;A!==null&&wp(m,y,A,N,!1),S!==null&&D!==null&&wp(m,D,S,N,!0)}}e:{if(y=h?Kr(h):window,A=y.nodeName&&y.nodeName.toLowerCase(),A==="select"||A==="input"&&y.type==="file")var j=GE;else if(dp(y))if(ly)j=XE;else{j=qE;var z=KE}else(A=y.nodeName)&&A.toLowerCase()==="input"&&(y.type==="checkbox"||y.type==="radio")&&(j=QE);if(j&&(j=j(t,h))){ay(m,j,n,f);break e}z&&z(t,y,h),t==="focusout"&&(z=y._wrapperState)&&z.controlled&&y.type==="number"&&ic(y,"number",y.value)}switch(z=h?Kr(h):window,t){case"focusin":(dp(z)||z.contentEditable==="true")&&(Wr=z,gc=h,fs=null);break;case"focusout":fs=gc=Wr=null;break;case"mousedown":yc=!0;break;case"contextmenu":case"mouseup":case"dragend":yc=!1,yp(m,n,f);break;case"selectionchange":if(ZE)break;case"keydown":case"keyup":yp(m,n,f)}var E;if(Rh)e:{switch(t){case"compositionstart":var g="onCompositionStart";break e;case"compositionend":g="onCompositionEnd";break e;case"compositionupdate":g="onCompositionUpdate";break e}g=void 0}else Hr?sy(t,n)&&(g="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(g="onCompositionStart");g&&(iy&&n.locale!=="ko"&&(Hr||g!=="onCompositionStart"?g==="onCompositionEnd"&&Hr&&(E=ry()):(Ln=f,Ah="value"in Ln?Ln.value:Ln.textContent,Hr=!0)),z=Ca(h,g),0<z.length&&(g=new lp(g,t,null,n,f),m.push({event:g,listeners:z}),E?g.data=E:(E=oy(n),E!==null&&(g.data=E)))),(E=zE?BE(t,n):$E(t,n))&&(h=Ca(h,"onBeforeInput"),0<h.length&&(f=new lp("onBeforeInput","beforeinput",null,n,f),m.push({event:f,listeners:h}),f.data=E))}vy(m,e)})}function Os(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ca(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=ks(t,n),s!=null&&r.unshift(Os(t,s,i)),s=ks(t,e),s!=null&&r.push(Os(t,s,i))),t=t.return}return r}function Fr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function wp(t,e,n,r,i){for(var s=e._reactName,a=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=ks(n,s),u!=null&&a.unshift(Os(n,u,l))):i||(u=ks(n,s),u!=null&&a.push(Os(n,u,l)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var rI=/\r\n?/g,iI=/\u0000|\uFFFD/g;function Ep(t){return(typeof t=="string"?t:""+t).replace(rI,`
`).replace(iI,"")}function zo(t,e,n){if(e=Ep(e),Ep(t)!==e&&n)throw Error(U(425))}function Pa(){}var vc=null,_c=null;function wc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ec=typeof setTimeout=="function"?setTimeout:void 0,sI=typeof clearTimeout=="function"?clearTimeout:void 0,Ip=typeof Promise=="function"?Promise:void 0,oI=typeof queueMicrotask=="function"?queueMicrotask:typeof Ip<"u"?function(t){return Ip.resolve(null).then(t).catch(aI)}:Ec;function aI(t){setTimeout(function(){throw t})}function Au(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Ps(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Ps(e)}function Fn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Tp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ai=Math.random().toString(36).slice(2),Bt="__reactFiber$"+Ai,Ds="__reactProps$"+Ai,mn="__reactContainer$"+Ai,Ic="__reactEvents$"+Ai,lI="__reactListeners$"+Ai,uI="__reactHandles$"+Ai;function dr(t){var e=t[Bt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[mn]||n[Bt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Tp(t);t!==null;){if(n=t[Bt])return n;t=Tp(t)}return e}t=n,n=t.parentNode}return null}function eo(t){return t=t[Bt]||t[mn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Kr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(U(33))}function pl(t){return t[Ds]||null}var Tc=[],qr=-1;function tr(t){return{current:t}}function ce(t){0>qr||(t.current=Tc[qr],Tc[qr]=null,qr--)}function oe(t,e){qr++,Tc[qr]=t.current,t.current=e}var Xn={},Ze=tr(Xn),ut=tr(!1),Tr=Xn;function hi(t,e){var n=t.type.contextTypes;if(!n)return Xn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ct(t){return t=t.childContextTypes,t!=null}function Ra(){ce(ut),ce(Ze)}function Sp(t,e,n){if(Ze.current!==Xn)throw Error(U(168));oe(Ze,e),oe(ut,n)}function wy(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(U(108,Kw(t)||"Unknown",i));return ye({},n,r)}function xa(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Xn,Tr=Ze.current,oe(Ze,t),oe(ut,ut.current),!0}function kp(t,e,n){var r=t.stateNode;if(!r)throw Error(U(169));n?(t=wy(t,e,Tr),r.__reactInternalMemoizedMergedChildContext=t,ce(ut),ce(Ze),oe(Ze,t)):ce(ut),oe(ut,n)}var rn=null,ml=!1,Cu=!1;function Ey(t){rn===null?rn=[t]:rn.push(t)}function cI(t){ml=!0,Ey(t)}function nr(){if(!Cu&&rn!==null){Cu=!0;var t=0,e=ne;try{var n=rn;for(ne=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}rn=null,ml=!1}catch(i){throw rn!==null&&(rn=rn.slice(t+1)),Gg(Ih,nr),i}finally{ne=e,Cu=!1}}return null}var Qr=[],Xr=0,Na=null,Oa=0,Tt=[],St=0,Sr=null,on=1,an="";function ur(t,e){Qr[Xr++]=Oa,Qr[Xr++]=Na,Na=t,Oa=e}function Iy(t,e,n){Tt[St++]=on,Tt[St++]=an,Tt[St++]=Sr,Sr=t;var r=on;t=an;var i=32-Mt(r)-1;r&=~(1<<i),n+=1;var s=32-Mt(e)+i;if(30<s){var a=i-i%5;s=(r&(1<<a)-1).toString(32),r>>=a,i-=a,on=1<<32-Mt(e)+i|n<<i|r,an=s+t}else on=1<<s|n<<i|r,an=t}function Nh(t){t.return!==null&&(ur(t,1),Iy(t,1,0))}function Oh(t){for(;t===Na;)Na=Qr[--Xr],Qr[Xr]=null,Oa=Qr[--Xr],Qr[Xr]=null;for(;t===Sr;)Sr=Tt[--St],Tt[St]=null,an=Tt[--St],Tt[St]=null,on=Tt[--St],Tt[St]=null}var vt=null,gt=null,de=!1,Dt=null;function Ty(t,e){var n=kt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Ap(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,vt=t,gt=Fn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,vt=t,gt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Sr!==null?{id:on,overflow:an}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=kt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,vt=t,gt=null,!0):!1;default:return!1}}function Sc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function kc(t){if(de){var e=gt;if(e){var n=e;if(!Ap(t,e)){if(Sc(t))throw Error(U(418));e=Fn(n.nextSibling);var r=vt;e&&Ap(t,e)?Ty(r,n):(t.flags=t.flags&-4097|2,de=!1,vt=t)}}else{if(Sc(t))throw Error(U(418));t.flags=t.flags&-4097|2,de=!1,vt=t}}}function Cp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;vt=t}function Bo(t){if(t!==vt)return!1;if(!de)return Cp(t),de=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!wc(t.type,t.memoizedProps)),e&&(e=gt)){if(Sc(t))throw Sy(),Error(U(418));for(;e;)Ty(t,e),e=Fn(e.nextSibling)}if(Cp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){gt=Fn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}gt=null}}else gt=vt?Fn(t.stateNode.nextSibling):null;return!0}function Sy(){for(var t=gt;t;)t=Fn(t.nextSibling)}function di(){gt=vt=null,de=!1}function Dh(t){Dt===null?Dt=[t]:Dt.push(t)}var hI=wn.ReactCurrentBatchConfig;function Zi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(U(309));var r=n.stateNode}if(!r)throw Error(U(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var l=i.refs;a===null?delete l[s]:l[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(U(284));if(!n._owner)throw Error(U(290,t))}return t}function $o(t,e){throw t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Pp(t){var e=t._init;return e(t._payload)}function ky(t){function e(_,v){if(t){var k=_.deletions;k===null?(_.deletions=[v],_.flags|=16):k.push(v)}}function n(_,v){if(!t)return null;for(;v!==null;)e(_,v),v=v.sibling;return null}function r(_,v){for(_=new Map;v!==null;)v.key!==null?_.set(v.key,v):_.set(v.index,v),v=v.sibling;return _}function i(_,v){return _=Hn(_,v),_.index=0,_.sibling=null,_}function s(_,v,k){return _.index=k,t?(k=_.alternate,k!==null?(k=k.index,k<v?(_.flags|=2,v):k):(_.flags|=2,v)):(_.flags|=1048576,v)}function a(_){return t&&_.alternate===null&&(_.flags|=2),_}function l(_,v,k,L){return v===null||v.tag!==6?(v=Lu(k,_.mode,L),v.return=_,v):(v=i(v,k),v.return=_,v)}function u(_,v,k,L){var j=k.type;return j===$r?f(_,v,k.props.children,L,k.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Cn&&Pp(j)===v.type)?(L=i(v,k.props),L.ref=Zi(_,v,k),L.return=_,L):(L=da(k.type,k.key,k.props,null,_.mode,L),L.ref=Zi(_,v,k),L.return=_,L)}function h(_,v,k,L){return v===null||v.tag!==4||v.stateNode.containerInfo!==k.containerInfo||v.stateNode.implementation!==k.implementation?(v=Mu(k,_.mode,L),v.return=_,v):(v=i(v,k.children||[]),v.return=_,v)}function f(_,v,k,L,j){return v===null||v.tag!==7?(v=vr(k,_.mode,L,j),v.return=_,v):(v=i(v,k),v.return=_,v)}function m(_,v,k){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Lu(""+v,_.mode,k),v.return=_,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Oo:return k=da(v.type,v.key,v.props,null,_.mode,k),k.ref=Zi(_,null,v),k.return=_,k;case Br:return v=Mu(v,_.mode,k),v.return=_,v;case Cn:var L=v._init;return m(_,L(v._payload),k)}if(ss(v)||qi(v))return v=vr(v,_.mode,k,null),v.return=_,v;$o(_,v)}return null}function y(_,v,k,L){var j=v!==null?v.key:null;if(typeof k=="string"&&k!==""||typeof k=="number")return j!==null?null:l(_,v,""+k,L);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case Oo:return k.key===j?u(_,v,k,L):null;case Br:return k.key===j?h(_,v,k,L):null;case Cn:return j=k._init,y(_,v,j(k._payload),L)}if(ss(k)||qi(k))return j!==null?null:f(_,v,k,L,null);$o(_,k)}return null}function A(_,v,k,L,j){if(typeof L=="string"&&L!==""||typeof L=="number")return _=_.get(k)||null,l(v,_,""+L,j);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case Oo:return _=_.get(L.key===null?k:L.key)||null,u(v,_,L,j);case Br:return _=_.get(L.key===null?k:L.key)||null,h(v,_,L,j);case Cn:var z=L._init;return A(_,v,k,z(L._payload),j)}if(ss(L)||qi(L))return _=_.get(k)||null,f(v,_,L,j,null);$o(v,L)}return null}function S(_,v,k,L){for(var j=null,z=null,E=v,g=v=0,w=null;E!==null&&g<k.length;g++){E.index>g?(w=E,E=null):w=E.sibling;var I=y(_,E,k[g],L);if(I===null){E===null&&(E=w);break}t&&E&&I.alternate===null&&e(_,E),v=s(I,v,g),z===null?j=I:z.sibling=I,z=I,E=w}if(g===k.length)return n(_,E),de&&ur(_,g),j;if(E===null){for(;g<k.length;g++)E=m(_,k[g],L),E!==null&&(v=s(E,v,g),z===null?j=E:z.sibling=E,z=E);return de&&ur(_,g),j}for(E=r(_,E);g<k.length;g++)w=A(E,_,g,k[g],L),w!==null&&(t&&w.alternate!==null&&E.delete(w.key===null?g:w.key),v=s(w,v,g),z===null?j=w:z.sibling=w,z=w);return t&&E.forEach(function(P){return e(_,P)}),de&&ur(_,g),j}function N(_,v,k,L){var j=qi(k);if(typeof j!="function")throw Error(U(150));if(k=j.call(k),k==null)throw Error(U(151));for(var z=j=null,E=v,g=v=0,w=null,I=k.next();E!==null&&!I.done;g++,I=k.next()){E.index>g?(w=E,E=null):w=E.sibling;var P=y(_,E,I.value,L);if(P===null){E===null&&(E=w);break}t&&E&&P.alternate===null&&e(_,E),v=s(P,v,g),z===null?j=P:z.sibling=P,z=P,E=w}if(I.done)return n(_,E),de&&ur(_,g),j;if(E===null){for(;!I.done;g++,I=k.next())I=m(_,I.value,L),I!==null&&(v=s(I,v,g),z===null?j=I:z.sibling=I,z=I);return de&&ur(_,g),j}for(E=r(_,E);!I.done;g++,I=k.next())I=A(E,_,g,I.value,L),I!==null&&(t&&I.alternate!==null&&E.delete(I.key===null?g:I.key),v=s(I,v,g),z===null?j=I:z.sibling=I,z=I);return t&&E.forEach(function(x){return e(_,x)}),de&&ur(_,g),j}function D(_,v,k,L){if(typeof k=="object"&&k!==null&&k.type===$r&&k.key===null&&(k=k.props.children),typeof k=="object"&&k!==null){switch(k.$$typeof){case Oo:e:{for(var j=k.key,z=v;z!==null;){if(z.key===j){if(j=k.type,j===$r){if(z.tag===7){n(_,z.sibling),v=i(z,k.props.children),v.return=_,_=v;break e}}else if(z.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Cn&&Pp(j)===z.type){n(_,z.sibling),v=i(z,k.props),v.ref=Zi(_,z,k),v.return=_,_=v;break e}n(_,z);break}else e(_,z);z=z.sibling}k.type===$r?(v=vr(k.props.children,_.mode,L,k.key),v.return=_,_=v):(L=da(k.type,k.key,k.props,null,_.mode,L),L.ref=Zi(_,v,k),L.return=_,_=L)}return a(_);case Br:e:{for(z=k.key;v!==null;){if(v.key===z)if(v.tag===4&&v.stateNode.containerInfo===k.containerInfo&&v.stateNode.implementation===k.implementation){n(_,v.sibling),v=i(v,k.children||[]),v.return=_,_=v;break e}else{n(_,v);break}else e(_,v);v=v.sibling}v=Mu(k,_.mode,L),v.return=_,_=v}return a(_);case Cn:return z=k._init,D(_,v,z(k._payload),L)}if(ss(k))return S(_,v,k,L);if(qi(k))return N(_,v,k,L);$o(_,k)}return typeof k=="string"&&k!==""||typeof k=="number"?(k=""+k,v!==null&&v.tag===6?(n(_,v.sibling),v=i(v,k),v.return=_,_=v):(n(_,v),v=Lu(k,_.mode,L),v.return=_,_=v),a(_)):n(_,v)}return D}var fi=ky(!0),Ay=ky(!1),Da=tr(null),La=null,Yr=null,Lh=null;function Mh(){Lh=Yr=La=null}function Vh(t){var e=Da.current;ce(Da),t._currentValue=e}function Ac(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ii(t,e){La=t,Lh=Yr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(lt=!0),t.firstContext=null)}function Ct(t){var e=t._currentValue;if(Lh!==t)if(t={context:t,memoizedValue:e,next:null},Yr===null){if(La===null)throw Error(U(308));Yr=t,La.dependencies={lanes:0,firstContext:t}}else Yr=Yr.next=t;return e}var fr=null;function bh(t){fr===null?fr=[t]:fr.push(t)}function Cy(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,bh(e)):(n.next=i.next,i.next=n),e.interleaved=n,gn(t,r)}function gn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Pn=!1;function Uh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Py(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function dn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ee&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,gn(t,n)}return i=r.interleaved,i===null?(e.next=e,bh(r)):(e.next=i.next,i.next=e),r.interleaved=e,gn(t,n)}function oa(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Th(t,n)}}function Rp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ma(t,e,n,r){var i=t.updateQueue;Pn=!1;var s=i.firstBaseUpdate,a=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,a===null?s=h:a.next=h,a=u;var f=t.alternate;f!==null&&(f=f.updateQueue,l=f.lastBaseUpdate,l!==a&&(l===null?f.firstBaseUpdate=h:l.next=h,f.lastBaseUpdate=u))}if(s!==null){var m=i.baseState;a=0,f=h=u=null,l=s;do{var y=l.lane,A=l.eventTime;if((r&y)===y){f!==null&&(f=f.next={eventTime:A,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var S=t,N=l;switch(y=e,A=n,N.tag){case 1:if(S=N.payload,typeof S=="function"){m=S.call(A,m,y);break e}m=S;break e;case 3:S.flags=S.flags&-65537|128;case 0:if(S=N.payload,y=typeof S=="function"?S.call(A,m,y):S,y==null)break e;m=ye({},m,y);break e;case 2:Pn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,y=i.effects,y===null?i.effects=[l]:y.push(l))}else A={eventTime:A,lane:y,tag:l.tag,payload:l.payload,callback:l.callback,next:null},f===null?(h=f=A,u=m):f=f.next=A,a|=y;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;y=l,l=y.next,y.next=null,i.lastBaseUpdate=y,i.shared.pending=null}}while(!0);if(f===null&&(u=m),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do a|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ar|=a,t.lanes=a,t.memoizedState=m}}function xp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(U(191,i));i.call(r)}}}var to={},Ht=tr(to),Ls=tr(to),Ms=tr(to);function pr(t){if(t===to)throw Error(U(174));return t}function jh(t,e){switch(oe(Ms,e),oe(Ls,t),oe(Ht,to),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:oc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=oc(e,t)}ce(Ht),oe(Ht,e)}function pi(){ce(Ht),ce(Ls),ce(Ms)}function Ry(t){pr(Ms.current);var e=pr(Ht.current),n=oc(e,t.type);e!==n&&(oe(Ls,t),oe(Ht,n))}function Fh(t){Ls.current===t&&(ce(Ht),ce(Ls))}var me=tr(0);function Va(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Pu=[];function zh(){for(var t=0;t<Pu.length;t++)Pu[t]._workInProgressVersionPrimary=null;Pu.length=0}var aa=wn.ReactCurrentDispatcher,Ru=wn.ReactCurrentBatchConfig,kr=0,ge=null,Ce=null,xe=null,ba=!1,ps=!1,Vs=0,dI=0;function Ge(){throw Error(U(321))}function Bh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!jt(t[n],e[n]))return!1;return!0}function $h(t,e,n,r,i,s){if(kr=s,ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,aa.current=t===null||t.memoizedState===null?gI:yI,t=n(r,i),ps){s=0;do{if(ps=!1,Vs=0,25<=s)throw Error(U(301));s+=1,xe=Ce=null,e.updateQueue=null,aa.current=vI,t=n(r,i)}while(ps)}if(aa.current=Ua,e=Ce!==null&&Ce.next!==null,kr=0,xe=Ce=ge=null,ba=!1,e)throw Error(U(300));return t}function Hh(){var t=Vs!==0;return Vs=0,t}function zt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xe===null?ge.memoizedState=xe=t:xe=xe.next=t,xe}function Pt(){if(Ce===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=Ce.next;var e=xe===null?ge.memoizedState:xe.next;if(e!==null)xe=e,Ce=t;else{if(t===null)throw Error(U(310));Ce=t,t={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},xe===null?ge.memoizedState=xe=t:xe=xe.next=t}return xe}function bs(t,e){return typeof e=="function"?e(t):e}function xu(t){var e=Pt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=Ce,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var a=i.next;i.next=s.next,s.next=a}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=a=null,u=null,h=s;do{var f=h.lane;if((kr&f)===f)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var m={lane:f,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=m,a=r):u=u.next=m,ge.lanes|=f,Ar|=f}h=h.next}while(h!==null&&h!==s);u===null?a=r:u.next=l,jt(r,e.memoizedState)||(lt=!0),e.memoizedState=r,e.baseState=a,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ge.lanes|=s,Ar|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Nu(t){var e=Pt(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var a=i=i.next;do s=t(s,a.action),a=a.next;while(a!==i);jt(s,e.memoizedState)||(lt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function xy(){}function Ny(t,e){var n=ge,r=Pt(),i=e(),s=!jt(r.memoizedState,i);if(s&&(r.memoizedState=i,lt=!0),r=r.queue,Wh(Ly.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||xe!==null&&xe.memoizedState.tag&1){if(n.flags|=2048,Us(9,Dy.bind(null,n,r,i,e),void 0,null),Oe===null)throw Error(U(349));kr&30||Oy(n,e,i)}return i}function Oy(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Dy(t,e,n,r){e.value=n,e.getSnapshot=r,My(e)&&Vy(t)}function Ly(t,e,n){return n(function(){My(e)&&Vy(t)})}function My(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!jt(t,n)}catch{return!0}}function Vy(t){var e=gn(t,1);e!==null&&Vt(e,t,1,-1)}function Np(t){var e=zt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bs,lastRenderedState:t},e.queue=t,t=t.dispatch=mI.bind(null,ge,t),[e.memoizedState,t]}function Us(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function by(){return Pt().memoizedState}function la(t,e,n,r){var i=zt();ge.flags|=t,i.memoizedState=Us(1|e,n,void 0,r===void 0?null:r)}function gl(t,e,n,r){var i=Pt();r=r===void 0?null:r;var s=void 0;if(Ce!==null){var a=Ce.memoizedState;if(s=a.destroy,r!==null&&Bh(r,a.deps)){i.memoizedState=Us(e,n,s,r);return}}ge.flags|=t,i.memoizedState=Us(1|e,n,s,r)}function Op(t,e){return la(8390656,8,t,e)}function Wh(t,e){return gl(2048,8,t,e)}function Uy(t,e){return gl(4,2,t,e)}function jy(t,e){return gl(4,4,t,e)}function Fy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function zy(t,e,n){return n=n!=null?n.concat([t]):null,gl(4,4,Fy.bind(null,e,t),n)}function Gh(){}function By(t,e){var n=Pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Bh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function $y(t,e){var n=Pt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Bh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Hy(t,e,n){return kr&21?(jt(n,e)||(n=Qg(),ge.lanes|=n,Ar|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,lt=!0),t.memoizedState=n)}function fI(t,e){var n=ne;ne=n!==0&&4>n?n:4,t(!0);var r=Ru.transition;Ru.transition={};try{t(!1),e()}finally{ne=n,Ru.transition=r}}function Wy(){return Pt().memoizedState}function pI(t,e,n){var r=$n(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Gy(t))Ky(e,n);else if(n=Cy(t,e,n,r),n!==null){var i=it();Vt(n,t,r,i),qy(n,e,r)}}function mI(t,e,n){var r=$n(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Gy(t))Ky(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,l=s(a,n);if(i.hasEagerState=!0,i.eagerState=l,jt(l,a)){var u=e.interleaved;u===null?(i.next=i,bh(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Cy(t,e,i,r),n!==null&&(i=it(),Vt(n,t,r,i),qy(n,e,r))}}function Gy(t){var e=t.alternate;return t===ge||e!==null&&e===ge}function Ky(t,e){ps=ba=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function qy(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Th(t,n)}}var Ua={readContext:Ct,useCallback:Ge,useContext:Ge,useEffect:Ge,useImperativeHandle:Ge,useInsertionEffect:Ge,useLayoutEffect:Ge,useMemo:Ge,useReducer:Ge,useRef:Ge,useState:Ge,useDebugValue:Ge,useDeferredValue:Ge,useTransition:Ge,useMutableSource:Ge,useSyncExternalStore:Ge,useId:Ge,unstable_isNewReconciler:!1},gI={readContext:Ct,useCallback:function(t,e){return zt().memoizedState=[t,e===void 0?null:e],t},useContext:Ct,useEffect:Op,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,la(4194308,4,Fy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return la(4194308,4,t,e)},useInsertionEffect:function(t,e){return la(4,2,t,e)},useMemo:function(t,e){var n=zt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=zt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=pI.bind(null,ge,t),[r.memoizedState,t]},useRef:function(t){var e=zt();return t={current:t},e.memoizedState=t},useState:Np,useDebugValue:Gh,useDeferredValue:function(t){return zt().memoizedState=t},useTransition:function(){var t=Np(!1),e=t[0];return t=fI.bind(null,t[1]),zt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ge,i=zt();if(de){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),Oe===null)throw Error(U(349));kr&30||Oy(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Op(Ly.bind(null,r,s,t),[t]),r.flags|=2048,Us(9,Dy.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=zt(),e=Oe.identifierPrefix;if(de){var n=an,r=on;n=(r&~(1<<32-Mt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Vs++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=dI++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},yI={readContext:Ct,useCallback:By,useContext:Ct,useEffect:Wh,useImperativeHandle:zy,useInsertionEffect:Uy,useLayoutEffect:jy,useMemo:$y,useReducer:xu,useRef:by,useState:function(){return xu(bs)},useDebugValue:Gh,useDeferredValue:function(t){var e=Pt();return Hy(e,Ce.memoizedState,t)},useTransition:function(){var t=xu(bs)[0],e=Pt().memoizedState;return[t,e]},useMutableSource:xy,useSyncExternalStore:Ny,useId:Wy,unstable_isNewReconciler:!1},vI={readContext:Ct,useCallback:By,useContext:Ct,useEffect:Wh,useImperativeHandle:zy,useInsertionEffect:Uy,useLayoutEffect:jy,useMemo:$y,useReducer:Nu,useRef:by,useState:function(){return Nu(bs)},useDebugValue:Gh,useDeferredValue:function(t){var e=Pt();return Ce===null?e.memoizedState=t:Hy(e,Ce.memoizedState,t)},useTransition:function(){var t=Nu(bs)[0],e=Pt().memoizedState;return[t,e]},useMutableSource:xy,useSyncExternalStore:Ny,useId:Wy,unstable_isNewReconciler:!1};function Nt(t,e){if(t&&t.defaultProps){e=ye({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Cc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ye({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var yl={isMounted:function(t){return(t=t._reactInternals)?Lr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=it(),i=$n(t),s=dn(r,i);s.payload=e,n!=null&&(s.callback=n),e=zn(t,s,i),e!==null&&(Vt(e,t,i,r),oa(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=it(),i=$n(t),s=dn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=zn(t,s,i),e!==null&&(Vt(e,t,i,r),oa(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=it(),r=$n(t),i=dn(n,r);i.tag=2,e!=null&&(i.callback=e),e=zn(t,i,r),e!==null&&(Vt(e,t,r,n),oa(e,t,r))}};function Dp(t,e,n,r,i,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,a):e.prototype&&e.prototype.isPureReactComponent?!xs(n,r)||!xs(i,s):!0}function Qy(t,e,n){var r=!1,i=Xn,s=e.contextType;return typeof s=="object"&&s!==null?s=Ct(s):(i=ct(e)?Tr:Ze.current,r=e.contextTypes,s=(r=r!=null)?hi(t,i):Xn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Lp(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&yl.enqueueReplaceState(e,e.state,null)}function Pc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},Uh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ct(s):(s=ct(e)?Tr:Ze.current,i.context=hi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Cc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&yl.enqueueReplaceState(i,i.state,null),Ma(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function mi(t,e){try{var n="",r=e;do n+=Gw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ou(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Rc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var _I=typeof WeakMap=="function"?WeakMap:Map;function Xy(t,e,n){n=dn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Fa||(Fa=!0,jc=r),Rc(t,e)},n}function Yy(t,e,n){n=dn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Rc(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Rc(t,e),typeof r!="function"&&(Bn===null?Bn=new Set([this]):Bn.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Mp(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new _I;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=DI.bind(null,t,e,n),e.then(t,t))}function Vp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function bp(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=dn(-1,1),e.tag=2,zn(n,e,1))),n.lanes|=1),t)}var wI=wn.ReactCurrentOwner,lt=!1;function rt(t,e,n,r){e.child=t===null?Ay(e,null,n,r):fi(e,t.child,n,r)}function Up(t,e,n,r,i){n=n.render;var s=e.ref;return ii(e,i),r=$h(t,e,n,r,s,i),n=Hh(),t!==null&&!lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,yn(t,e,i)):(de&&n&&Nh(e),e.flags|=1,rt(t,e,r,i),e.child)}function jp(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!ed(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Jy(t,e,s,r,i)):(t=da(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:xs,n(a,r)&&t.ref===e.ref)return yn(t,e,i)}return e.flags|=1,t=Hn(s,r),t.ref=e.ref,t.return=e,e.child=t}function Jy(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(xs(s,r)&&t.ref===e.ref)if(lt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(lt=!0);else return e.lanes=t.lanes,yn(t,e,i)}return xc(t,e,n,r,i)}function Zy(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(Zr,pt),pt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,oe(Zr,pt),pt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,oe(Zr,pt),pt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,oe(Zr,pt),pt|=r;return rt(t,e,i,n),e.child}function ev(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function xc(t,e,n,r,i){var s=ct(n)?Tr:Ze.current;return s=hi(e,s),ii(e,i),n=$h(t,e,n,r,s,i),r=Hh(),t!==null&&!lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,yn(t,e,i)):(de&&r&&Nh(e),e.flags|=1,rt(t,e,n,i),e.child)}function Fp(t,e,n,r,i){if(ct(n)){var s=!0;xa(e)}else s=!1;if(ii(e,i),e.stateNode===null)ua(t,e),Qy(e,n,r),Pc(e,n,r,i),r=!0;else if(t===null){var a=e.stateNode,l=e.memoizedProps;a.props=l;var u=a.context,h=n.contextType;typeof h=="object"&&h!==null?h=Ct(h):(h=ct(n)?Tr:Ze.current,h=hi(e,h));var f=n.getDerivedStateFromProps,m=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";m||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==r||u!==h)&&Lp(e,a,r,h),Pn=!1;var y=e.memoizedState;a.state=y,Ma(e,r,a,i),u=e.memoizedState,l!==r||y!==u||ut.current||Pn?(typeof f=="function"&&(Cc(e,n,f,r),u=e.memoizedState),(l=Pn||Dp(e,n,l,r,y,u,h))?(m||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),a.props=r,a.state=u,a.context=h,r=l):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{a=e.stateNode,Py(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Nt(e.type,l),a.props=h,m=e.pendingProps,y=a.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ct(u):(u=ct(n)?Tr:Ze.current,u=hi(e,u));var A=n.getDerivedStateFromProps;(f=typeof A=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(l!==m||y!==u)&&Lp(e,a,r,u),Pn=!1,y=e.memoizedState,a.state=y,Ma(e,r,a,i);var S=e.memoizedState;l!==m||y!==S||ut.current||Pn?(typeof A=="function"&&(Cc(e,n,A,r),S=e.memoizedState),(h=Pn||Dp(e,n,h,r,y,S,u)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(r,S,u),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(r,S,u)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=S),a.props=r,a.state=S,a.context=u,r=h):(typeof a.componentDidUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&y===t.memoizedState||(e.flags|=1024),r=!1)}return Nc(t,e,n,r,s,i)}function Nc(t,e,n,r,i,s){ev(t,e);var a=(e.flags&128)!==0;if(!r&&!a)return i&&kp(e,n,!1),yn(t,e,s);r=e.stateNode,wI.current=e;var l=a&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&a?(e.child=fi(e,t.child,null,s),e.child=fi(e,null,l,s)):rt(t,e,l,s),e.memoizedState=r.state,i&&kp(e,n,!0),e.child}function tv(t){var e=t.stateNode;e.pendingContext?Sp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Sp(t,e.context,!1),jh(t,e.containerInfo)}function zp(t,e,n,r,i){return di(),Dh(i),e.flags|=256,rt(t,e,n,r),e.child}var Oc={dehydrated:null,treeContext:null,retryLane:0};function Dc(t){return{baseLanes:t,cachePool:null,transitions:null}}function nv(t,e,n){var r=e.pendingProps,i=me.current,s=!1,a=(e.flags&128)!==0,l;if((l=a)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),oe(me,i&1),t===null)return kc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=r.children,t=r.fallback,s?(r=e.mode,s=e.child,a={mode:"hidden",children:a},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=wl(a,r,0,null),t=vr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Dc(n),e.memoizedState=Oc,t):Kh(e,a));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return EI(t,e,a,r,l,i,n);if(s){s=r.fallback,a=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(a&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=Hn(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=Hn(l,s):(s=vr(s,a,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,a=t.child.memoizedState,a=a===null?Dc(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Oc,r}return s=t.child,t=s.sibling,r=Hn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Kh(t,e){return e=wl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ho(t,e,n,r){return r!==null&&Dh(r),fi(e,t.child,null,n),t=Kh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function EI(t,e,n,r,i,s,a){if(n)return e.flags&256?(e.flags&=-257,r=Ou(Error(U(422))),Ho(t,e,a,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=wl({mode:"visible",children:r.children},i,0,null),s=vr(s,i,a,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&fi(e,t.child,null,a),e.child.memoizedState=Dc(a),e.memoizedState=Oc,s);if(!(e.mode&1))return Ho(t,e,a,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(U(419)),r=Ou(s,r,void 0),Ho(t,e,a,r)}if(l=(a&t.childLanes)!==0,lt||l){if(r=Oe,r!==null){switch(a&-a){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|a)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,gn(t,i),Vt(r,t,i,-1))}return Zh(),r=Ou(Error(U(421))),Ho(t,e,a,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=LI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,gt=Fn(i.nextSibling),vt=e,de=!0,Dt=null,t!==null&&(Tt[St++]=on,Tt[St++]=an,Tt[St++]=Sr,on=t.id,an=t.overflow,Sr=e),e=Kh(e,r.children),e.flags|=4096,e)}function Bp(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ac(t.return,e,n)}function Du(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function rv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(rt(t,e,r.children,n),r=me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Bp(t,n,e);else if(t.tag===19)Bp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(oe(me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Va(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Du(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Va(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Du(e,!0,n,null,s);break;case"together":Du(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ua(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function yn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ar|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=Hn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Hn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function II(t,e,n){switch(e.tag){case 3:tv(e),di();break;case 5:Ry(e);break;case 1:ct(e.type)&&xa(e);break;case 4:jh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;oe(Da,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(oe(me,me.current&1),e.flags|=128,null):n&e.child.childLanes?nv(t,e,n):(oe(me,me.current&1),t=yn(t,e,n),t!==null?t.sibling:null);oe(me,me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return rv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),oe(me,me.current),r)break;return null;case 22:case 23:return e.lanes=0,Zy(t,e,n)}return yn(t,e,n)}var iv,Lc,sv,ov;iv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Lc=function(){};sv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,pr(Ht.current);var s=null;switch(n){case"input":i=nc(t,i),r=nc(t,r),s=[];break;case"select":i=ye({},i,{value:void 0}),r=ye({},r,{value:void 0}),s=[];break;case"textarea":i=sc(t,i),r=sc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Pa)}ac(n,r);var a;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(a in l)l.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Ts.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(a in l)!l.hasOwnProperty(a)||u&&u.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in u)u.hasOwnProperty(a)&&l[a]!==u[a]&&(n||(n={}),n[a]=u[a])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Ts.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&ue("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};ov=function(t,e,n,r){n!==r&&(e.flags|=4)};function es(t,e){if(!de)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ke(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function TI(t,e,n){var r=e.pendingProps;switch(Oh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(e),null;case 1:return ct(e.type)&&Ra(),Ke(e),null;case 3:return r=e.stateNode,pi(),ce(ut),ce(Ze),zh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Bo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Dt!==null&&(Bc(Dt),Dt=null))),Lc(t,e),Ke(e),null;case 5:Fh(e);var i=pr(Ms.current);if(n=e.type,t!==null&&e.stateNode!=null)sv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(U(166));return Ke(e),null}if(t=pr(Ht.current),Bo(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Bt]=e,r[Ds]=s,t=(e.mode&1)!==0,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(i=0;i<as.length;i++)ue(as[i],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":Yf(r,s),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ue("invalid",r);break;case"textarea":Zf(r,s),ue("invalid",r)}ac(n,s),i=null;for(var a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&zo(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&zo(r.textContent,l,t),i=["children",""+l]):Ts.hasOwnProperty(a)&&l!=null&&a==="onScroll"&&ue("scroll",r)}switch(n){case"input":Do(r),Jf(r,s,!0);break;case"textarea":Do(r),ep(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Pa)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{a=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Lg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=a.createElement(n,{is:r.is}):(t=a.createElement(n),n==="select"&&(a=t,r.multiple?a.multiple=!0:r.size&&(a.size=r.size))):t=a.createElementNS(t,n),t[Bt]=e,t[Ds]=r,iv(t,e,!1,!1),e.stateNode=t;e:{switch(a=lc(n,r),n){case"dialog":ue("cancel",t),ue("close",t),i=r;break;case"iframe":case"object":case"embed":ue("load",t),i=r;break;case"video":case"audio":for(i=0;i<as.length;i++)ue(as[i],t);i=r;break;case"source":ue("error",t),i=r;break;case"img":case"image":case"link":ue("error",t),ue("load",t),i=r;break;case"details":ue("toggle",t),i=r;break;case"input":Yf(t,r),i=nc(t,r),ue("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ye({},r,{value:void 0}),ue("invalid",t);break;case"textarea":Zf(t,r),i=sc(t,r),ue("invalid",t);break;default:i=r}ac(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?bg(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Mg(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Ss(t,u):typeof u=="number"&&Ss(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ts.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ue("scroll",t):u!=null&&yh(t,s,u,a))}switch(n){case"input":Do(t),Jf(t,r,!1);break;case"textarea":Do(t),ep(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Qn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ei(t,!!r.multiple,s,!1):r.defaultValue!=null&&ei(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Pa)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ke(e),null;case 6:if(t&&e.stateNode!=null)ov(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(U(166));if(n=pr(Ms.current),pr(Ht.current),Bo(e)){if(r=e.stateNode,n=e.memoizedProps,r[Bt]=e,(s=r.nodeValue!==n)&&(t=vt,t!==null))switch(t.tag){case 3:zo(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&zo(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Bt]=e,e.stateNode=r}return Ke(e),null;case 13:if(ce(me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(de&&gt!==null&&e.mode&1&&!(e.flags&128))Sy(),di(),e.flags|=98560,s=!1;else if(s=Bo(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(U(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(U(317));s[Bt]=e}else di(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ke(e),s=!1}else Dt!==null&&(Bc(Dt),Dt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||me.current&1?Pe===0&&(Pe=3):Zh())),e.updateQueue!==null&&(e.flags|=4),Ke(e),null);case 4:return pi(),Lc(t,e),t===null&&Ns(e.stateNode.containerInfo),Ke(e),null;case 10:return Vh(e.type._context),Ke(e),null;case 17:return ct(e.type)&&Ra(),Ke(e),null;case 19:if(ce(me),s=e.memoizedState,s===null)return Ke(e),null;if(r=(e.flags&128)!==0,a=s.rendering,a===null)if(r)es(s,!1);else{if(Pe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Va(t),a!==null){for(e.flags|=128,es(s,!1),r=a.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return oe(me,me.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ie()>gi&&(e.flags|=128,r=!0,es(s,!1),e.lanes=4194304)}else{if(!r)if(t=Va(a),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),es(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!de)return Ke(e),null}else 2*Ie()-s.renderingStartTime>gi&&n!==1073741824&&(e.flags|=128,r=!0,es(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ie(),e.sibling=null,n=me.current,oe(me,r?n&1|2:n&1),e):(Ke(e),null);case 22:case 23:return Jh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?pt&1073741824&&(Ke(e),e.subtreeFlags&6&&(e.flags|=8192)):Ke(e),null;case 24:return null;case 25:return null}throw Error(U(156,e.tag))}function SI(t,e){switch(Oh(e),e.tag){case 1:return ct(e.type)&&Ra(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return pi(),ce(ut),ce(Ze),zh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Fh(e),null;case 13:if(ce(me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));di()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ce(me),null;case 4:return pi(),null;case 10:return Vh(e.type._context),null;case 22:case 23:return Jh(),null;case 24:return null;default:return null}}var Wo=!1,Xe=!1,kI=typeof WeakSet=="function"?WeakSet:Set,$=null;function Jr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(t,e,r)}else n.current=null}function Mc(t,e,n){try{n()}catch(r){_e(t,e,r)}}var $p=!1;function AI(t,e){if(vc=ka,t=hy(),xh(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,l=-1,u=-1,h=0,f=0,m=t,y=null;t:for(;;){for(var A;m!==n||i!==0&&m.nodeType!==3||(l=a+i),m!==s||r!==0&&m.nodeType!==3||(u=a+r),m.nodeType===3&&(a+=m.nodeValue.length),(A=m.firstChild)!==null;)y=m,m=A;for(;;){if(m===t)break t;if(y===n&&++h===i&&(l=a),y===s&&++f===r&&(u=a),(A=m.nextSibling)!==null)break;m=y,y=m.parentNode}m=A}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(_c={focusedElem:t,selectionRange:n},ka=!1,$=e;$!==null;)if(e=$,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,$=t;else for(;$!==null;){e=$;try{var S=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(S!==null){var N=S.memoizedProps,D=S.memoizedState,_=e.stateNode,v=_.getSnapshotBeforeUpdate(e.elementType===e.type?N:Nt(e.type,N),D);_.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var k=e.stateNode.containerInfo;k.nodeType===1?k.textContent="":k.nodeType===9&&k.documentElement&&k.removeChild(k.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(U(163))}}catch(L){_e(e,e.return,L)}if(t=e.sibling,t!==null){t.return=e.return,$=t;break}$=e.return}return S=$p,$p=!1,S}function ms(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Mc(e,n,s)}i=i.next}while(i!==r)}}function vl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Vc(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function av(t){var e=t.alternate;e!==null&&(t.alternate=null,av(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Bt],delete e[Ds],delete e[Ic],delete e[lI],delete e[uI])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function lv(t){return t.tag===5||t.tag===3||t.tag===4}function Hp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||lv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function bc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Pa));else if(r!==4&&(t=t.child,t!==null))for(bc(t,e,n),t=t.sibling;t!==null;)bc(t,e,n),t=t.sibling}function Uc(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Uc(t,e,n),t=t.sibling;t!==null;)Uc(t,e,n),t=t.sibling}var be=null,Ot=!1;function kn(t,e,n){for(n=n.child;n!==null;)uv(t,e,n),n=n.sibling}function uv(t,e,n){if($t&&typeof $t.onCommitFiberUnmount=="function")try{$t.onCommitFiberUnmount(cl,n)}catch{}switch(n.tag){case 5:Xe||Jr(n,e);case 6:var r=be,i=Ot;be=null,kn(t,e,n),be=r,Ot=i,be!==null&&(Ot?(t=be,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(Ot?(t=be,n=n.stateNode,t.nodeType===8?Au(t.parentNode,n):t.nodeType===1&&Au(t,n),Ps(t)):Au(be,n.stateNode));break;case 4:r=be,i=Ot,be=n.stateNode.containerInfo,Ot=!0,kn(t,e,n),be=r,Ot=i;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&Mc(n,e,a),i=i.next}while(i!==r)}kn(t,e,n);break;case 1:if(!Xe&&(Jr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){_e(n,e,l)}kn(t,e,n);break;case 21:kn(t,e,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,kn(t,e,n),Xe=r):kn(t,e,n);break;default:kn(t,e,n)}}function Wp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new kI),e.forEach(function(r){var i=MI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function xt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,a=e,l=a;e:for(;l!==null;){switch(l.tag){case 5:be=l.stateNode,Ot=!1;break e;case 3:be=l.stateNode.containerInfo,Ot=!0;break e;case 4:be=l.stateNode.containerInfo,Ot=!0;break e}l=l.return}if(be===null)throw Error(U(160));uv(s,a,i),be=null,Ot=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){_e(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)cv(e,t),e=e.sibling}function cv(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(xt(e,t),Ft(t),r&4){try{ms(3,t,t.return),vl(3,t)}catch(N){_e(t,t.return,N)}try{ms(5,t,t.return)}catch(N){_e(t,t.return,N)}}break;case 1:xt(e,t),Ft(t),r&512&&n!==null&&Jr(n,n.return);break;case 5:if(xt(e,t),Ft(t),r&512&&n!==null&&Jr(n,n.return),t.flags&32){var i=t.stateNode;try{Ss(i,"")}catch(N){_e(t,t.return,N)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Og(i,s),lc(l,a);var h=lc(l,s);for(a=0;a<u.length;a+=2){var f=u[a],m=u[a+1];f==="style"?bg(i,m):f==="dangerouslySetInnerHTML"?Mg(i,m):f==="children"?Ss(i,m):yh(i,f,m,h)}switch(l){case"input":rc(i,s);break;case"textarea":Dg(i,s);break;case"select":var y=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var A=s.value;A!=null?ei(i,!!s.multiple,A,!1):y!==!!s.multiple&&(s.defaultValue!=null?ei(i,!!s.multiple,s.defaultValue,!0):ei(i,!!s.multiple,s.multiple?[]:"",!1))}i[Ds]=s}catch(N){_e(t,t.return,N)}}break;case 6:if(xt(e,t),Ft(t),r&4){if(t.stateNode===null)throw Error(U(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(N){_e(t,t.return,N)}}break;case 3:if(xt(e,t),Ft(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ps(e.containerInfo)}catch(N){_e(t,t.return,N)}break;case 4:xt(e,t),Ft(t);break;case 13:xt(e,t),Ft(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Xh=Ie())),r&4&&Wp(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Xe=(h=Xe)||f,xt(e,t),Xe=h):xt(e,t),Ft(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!f&&t.mode&1)for($=t,f=t.child;f!==null;){for(m=$=f;$!==null;){switch(y=$,A=y.child,y.tag){case 0:case 11:case 14:case 15:ms(4,y,y.return);break;case 1:Jr(y,y.return);var S=y.stateNode;if(typeof S.componentWillUnmount=="function"){r=y,n=y.return;try{e=r,S.props=e.memoizedProps,S.state=e.memoizedState,S.componentWillUnmount()}catch(N){_e(r,n,N)}}break;case 5:Jr(y,y.return);break;case 22:if(y.memoizedState!==null){Kp(m);continue}}A!==null?(A.return=y,$=A):Kp(m)}f=f.sibling}e:for(f=null,m=t;;){if(m.tag===5){if(f===null){f=m;try{i=m.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=m.stateNode,u=m.memoizedProps.style,a=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Vg("display",a))}catch(N){_e(t,t.return,N)}}}else if(m.tag===6){if(f===null)try{m.stateNode.nodeValue=h?"":m.memoizedProps}catch(N){_e(t,t.return,N)}}else if((m.tag!==22&&m.tag!==23||m.memoizedState===null||m===t)&&m.child!==null){m.child.return=m,m=m.child;continue}if(m===t)break e;for(;m.sibling===null;){if(m.return===null||m.return===t)break e;f===m&&(f=null),m=m.return}f===m&&(f=null),m.sibling.return=m.return,m=m.sibling}}break;case 19:xt(e,t),Ft(t),r&4&&Wp(t);break;case 21:break;default:xt(e,t),Ft(t)}}function Ft(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(lv(n)){var r=n;break e}n=n.return}throw Error(U(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Ss(i,""),r.flags&=-33);var s=Hp(t);Uc(t,s,i);break;case 3:case 4:var a=r.stateNode.containerInfo,l=Hp(t);bc(t,l,a);break;default:throw Error(U(161))}}catch(u){_e(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function CI(t,e,n){$=t,hv(t)}function hv(t,e,n){for(var r=(t.mode&1)!==0;$!==null;){var i=$,s=i.child;if(i.tag===22&&r){var a=i.memoizedState!==null||Wo;if(!a){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Xe;l=Wo;var h=Xe;if(Wo=a,(Xe=u)&&!h)for($=i;$!==null;)a=$,u=a.child,a.tag===22&&a.memoizedState!==null?qp(i):u!==null?(u.return=a,$=u):qp(i);for(;s!==null;)$=s,hv(s),s=s.sibling;$=i,Wo=l,Xe=h}Gp(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,$=s):Gp(t)}}function Gp(t){for(;$!==null;){var e=$;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xe||vl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Nt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&xp(e,s,r);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}xp(e,a,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var f=h.memoizedState;if(f!==null){var m=f.dehydrated;m!==null&&Ps(m)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(U(163))}Xe||e.flags&512&&Vc(e)}catch(y){_e(e,e.return,y)}}if(e===t){$=null;break}if(n=e.sibling,n!==null){n.return=e.return,$=n;break}$=e.return}}function Kp(t){for(;$!==null;){var e=$;if(e===t){$=null;break}var n=e.sibling;if(n!==null){n.return=e.return,$=n;break}$=e.return}}function qp(t){for(;$!==null;){var e=$;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{vl(4,e)}catch(u){_e(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){_e(e,i,u)}}var s=e.return;try{Vc(e)}catch(u){_e(e,s,u)}break;case 5:var a=e.return;try{Vc(e)}catch(u){_e(e,a,u)}}}catch(u){_e(e,e.return,u)}if(e===t){$=null;break}var l=e.sibling;if(l!==null){l.return=e.return,$=l;break}$=e.return}}var PI=Math.ceil,ja=wn.ReactCurrentDispatcher,qh=wn.ReactCurrentOwner,At=wn.ReactCurrentBatchConfig,ee=0,Oe=null,ke=null,ze=0,pt=0,Zr=tr(0),Pe=0,js=null,Ar=0,_l=0,Qh=0,gs=null,at=null,Xh=0,gi=1/0,nn=null,Fa=!1,jc=null,Bn=null,Go=!1,Mn=null,za=0,ys=0,Fc=null,ca=-1,ha=0;function it(){return ee&6?Ie():ca!==-1?ca:ca=Ie()}function $n(t){return t.mode&1?ee&2&&ze!==0?ze&-ze:hI.transition!==null?(ha===0&&(ha=Qg()),ha):(t=ne,t!==0||(t=window.event,t=t===void 0?16:ny(t.type)),t):1}function Vt(t,e,n,r){if(50<ys)throw ys=0,Fc=null,Error(U(185));Js(t,n,r),(!(ee&2)||t!==Oe)&&(t===Oe&&(!(ee&2)&&(_l|=n),Pe===4&&xn(t,ze)),ht(t,r),n===1&&ee===0&&!(e.mode&1)&&(gi=Ie()+500,ml&&nr()))}function ht(t,e){var n=t.callbackNode;hE(t,e);var r=Sa(t,t===Oe?ze:0);if(r===0)n!==null&&rp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&rp(n),e===1)t.tag===0?cI(Qp.bind(null,t)):Ey(Qp.bind(null,t)),oI(function(){!(ee&6)&&nr()}),n=null;else{switch(Xg(r)){case 1:n=Ih;break;case 4:n=Kg;break;case 16:n=Ta;break;case 536870912:n=qg;break;default:n=Ta}n=_v(n,dv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function dv(t,e){if(ca=-1,ha=0,ee&6)throw Error(U(327));var n=t.callbackNode;if(si()&&t.callbackNode!==n)return null;var r=Sa(t,t===Oe?ze:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Ba(t,r);else{e=r;var i=ee;ee|=2;var s=pv();(Oe!==t||ze!==e)&&(nn=null,gi=Ie()+500,yr(t,e));do try{NI();break}catch(l){fv(t,l)}while(!0);Mh(),ja.current=s,ee=i,ke!==null?e=0:(Oe=null,ze=0,e=Pe)}if(e!==0){if(e===2&&(i=fc(t),i!==0&&(r=i,e=zc(t,i))),e===1)throw n=js,yr(t,0),xn(t,r),ht(t,Ie()),n;if(e===6)xn(t,r);else{if(i=t.current.alternate,!(r&30)&&!RI(i)&&(e=Ba(t,r),e===2&&(s=fc(t),s!==0&&(r=s,e=zc(t,s))),e===1))throw n=js,yr(t,0),xn(t,r),ht(t,Ie()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(U(345));case 2:cr(t,at,nn);break;case 3:if(xn(t,r),(r&130023424)===r&&(e=Xh+500-Ie(),10<e)){if(Sa(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){it(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ec(cr.bind(null,t,at,nn),e);break}cr(t,at,nn);break;case 4:if(xn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var a=31-Mt(r);s=1<<a,a=e[a],a>i&&(i=a),r&=~s}if(r=i,r=Ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*PI(r/1960))-r,10<r){t.timeoutHandle=Ec(cr.bind(null,t,at,nn),r);break}cr(t,at,nn);break;case 5:cr(t,at,nn);break;default:throw Error(U(329))}}}return ht(t,Ie()),t.callbackNode===n?dv.bind(null,t):null}function zc(t,e){var n=gs;return t.current.memoizedState.isDehydrated&&(yr(t,e).flags|=256),t=Ba(t,e),t!==2&&(e=at,at=n,e!==null&&Bc(e)),t}function Bc(t){at===null?at=t:at.push.apply(at,t)}function RI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!jt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xn(t,e){for(e&=~Qh,e&=~_l,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Mt(e),r=1<<n;t[n]=-1,e&=~r}}function Qp(t){if(ee&6)throw Error(U(327));si();var e=Sa(t,0);if(!(e&1))return ht(t,Ie()),null;var n=Ba(t,e);if(t.tag!==0&&n===2){var r=fc(t);r!==0&&(e=r,n=zc(t,r))}if(n===1)throw n=js,yr(t,0),xn(t,e),ht(t,Ie()),n;if(n===6)throw Error(U(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,cr(t,at,nn),ht(t,Ie()),null}function Yh(t,e){var n=ee;ee|=1;try{return t(e)}finally{ee=n,ee===0&&(gi=Ie()+500,ml&&nr())}}function Cr(t){Mn!==null&&Mn.tag===0&&!(ee&6)&&si();var e=ee;ee|=1;var n=At.transition,r=ne;try{if(At.transition=null,ne=1,t)return t()}finally{ne=r,At.transition=n,ee=e,!(ee&6)&&nr()}}function Jh(){pt=Zr.current,ce(Zr)}function yr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,sI(n)),ke!==null)for(n=ke.return;n!==null;){var r=n;switch(Oh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ra();break;case 3:pi(),ce(ut),ce(Ze),zh();break;case 5:Fh(r);break;case 4:pi();break;case 13:ce(me);break;case 19:ce(me);break;case 10:Vh(r.type._context);break;case 22:case 23:Jh()}n=n.return}if(Oe=t,ke=t=Hn(t.current,null),ze=pt=e,Pe=0,js=null,Qh=_l=Ar=0,at=gs=null,fr!==null){for(e=0;e<fr.length;e++)if(n=fr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var a=s.next;s.next=i,r.next=a}n.pending=r}fr=null}return t}function fv(t,e){do{var n=ke;try{if(Mh(),aa.current=Ua,ba){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}ba=!1}if(kr=0,xe=Ce=ge=null,ps=!1,Vs=0,qh.current=null,n===null||n.return===null){Pe=1,js=e,ke=null;break}e:{var s=t,a=n.return,l=n,u=e;if(e=ze,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,f=l,m=f.tag;if(!(f.mode&1)&&(m===0||m===11||m===15)){var y=f.alternate;y?(f.updateQueue=y.updateQueue,f.memoizedState=y.memoizedState,f.lanes=y.lanes):(f.updateQueue=null,f.memoizedState=null)}var A=Vp(a);if(A!==null){A.flags&=-257,bp(A,a,l,s,e),A.mode&1&&Mp(s,h,e),e=A,u=h;var S=e.updateQueue;if(S===null){var N=new Set;N.add(u),e.updateQueue=N}else S.add(u);break e}else{if(!(e&1)){Mp(s,h,e),Zh();break e}u=Error(U(426))}}else if(de&&l.mode&1){var D=Vp(a);if(D!==null){!(D.flags&65536)&&(D.flags|=256),bp(D,a,l,s,e),Dh(mi(u,l));break e}}s=u=mi(u,l),Pe!==4&&(Pe=2),gs===null?gs=[s]:gs.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var _=Xy(s,u,e);Rp(s,_);break e;case 1:l=u;var v=s.type,k=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||k!==null&&typeof k.componentDidCatch=="function"&&(Bn===null||!Bn.has(k)))){s.flags|=65536,e&=-e,s.lanes|=e;var L=Yy(s,l,e);Rp(s,L);break e}}s=s.return}while(s!==null)}gv(n)}catch(j){e=j,ke===n&&n!==null&&(ke=n=n.return);continue}break}while(!0)}function pv(){var t=ja.current;return ja.current=Ua,t===null?Ua:t}function Zh(){(Pe===0||Pe===3||Pe===2)&&(Pe=4),Oe===null||!(Ar&268435455)&&!(_l&268435455)||xn(Oe,ze)}function Ba(t,e){var n=ee;ee|=2;var r=pv();(Oe!==t||ze!==e)&&(nn=null,yr(t,e));do try{xI();break}catch(i){fv(t,i)}while(!0);if(Mh(),ee=n,ja.current=r,ke!==null)throw Error(U(261));return Oe=null,ze=0,Pe}function xI(){for(;ke!==null;)mv(ke)}function NI(){for(;ke!==null&&!nE();)mv(ke)}function mv(t){var e=vv(t.alternate,t,pt);t.memoizedProps=t.pendingProps,e===null?gv(t):ke=e,qh.current=null}function gv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=SI(n,e),n!==null){n.flags&=32767,ke=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pe=6,ke=null;return}}else if(n=TI(n,e,pt),n!==null){ke=n;return}if(e=e.sibling,e!==null){ke=e;return}ke=e=t}while(e!==null);Pe===0&&(Pe=5)}function cr(t,e,n){var r=ne,i=At.transition;try{At.transition=null,ne=1,OI(t,e,n,r)}finally{At.transition=i,ne=r}return null}function OI(t,e,n,r){do si();while(Mn!==null);if(ee&6)throw Error(U(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(U(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(dE(t,s),t===Oe&&(ke=Oe=null,ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Go||(Go=!0,_v(Ta,function(){return si(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=At.transition,At.transition=null;var a=ne;ne=1;var l=ee;ee|=4,qh.current=null,AI(t,n),cv(n,t),JE(_c),ka=!!vc,_c=vc=null,t.current=n,CI(n),rE(),ee=l,ne=a,At.transition=s}else t.current=n;if(Go&&(Go=!1,Mn=t,za=i),s=t.pendingLanes,s===0&&(Bn=null),oE(n.stateNode),ht(t,Ie()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Fa)throw Fa=!1,t=jc,jc=null,t;return za&1&&t.tag!==0&&si(),s=t.pendingLanes,s&1?t===Fc?ys++:(ys=0,Fc=t):ys=0,nr(),null}function si(){if(Mn!==null){var t=Xg(za),e=At.transition,n=ne;try{if(At.transition=null,ne=16>t?16:t,Mn===null)var r=!1;else{if(t=Mn,Mn=null,za=0,ee&6)throw Error(U(331));var i=ee;for(ee|=4,$=t.current;$!==null;){var s=$,a=s.child;if($.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for($=h;$!==null;){var f=$;switch(f.tag){case 0:case 11:case 15:ms(8,f,s)}var m=f.child;if(m!==null)m.return=f,$=m;else for(;$!==null;){f=$;var y=f.sibling,A=f.return;if(av(f),f===h){$=null;break}if(y!==null){y.return=A,$=y;break}$=A}}}var S=s.alternate;if(S!==null){var N=S.child;if(N!==null){S.child=null;do{var D=N.sibling;N.sibling=null,N=D}while(N!==null)}}$=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,$=a;else e:for(;$!==null;){if(s=$,s.flags&2048)switch(s.tag){case 0:case 11:case 15:ms(9,s,s.return)}var _=s.sibling;if(_!==null){_.return=s.return,$=_;break e}$=s.return}}var v=t.current;for($=v;$!==null;){a=$;var k=a.child;if(a.subtreeFlags&2064&&k!==null)k.return=a,$=k;else e:for(a=v;$!==null;){if(l=$,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:vl(9,l)}}catch(j){_e(l,l.return,j)}if(l===a){$=null;break e}var L=l.sibling;if(L!==null){L.return=l.return,$=L;break e}$=l.return}}if(ee=i,nr(),$t&&typeof $t.onPostCommitFiberRoot=="function")try{$t.onPostCommitFiberRoot(cl,t)}catch{}r=!0}return r}finally{ne=n,At.transition=e}}return!1}function Xp(t,e,n){e=mi(n,e),e=Xy(t,e,1),t=zn(t,e,1),e=it(),t!==null&&(Js(t,1,e),ht(t,e))}function _e(t,e,n){if(t.tag===3)Xp(t,t,n);else for(;e!==null;){if(e.tag===3){Xp(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bn===null||!Bn.has(r))){t=mi(n,t),t=Yy(e,t,1),e=zn(e,t,1),t=it(),e!==null&&(Js(e,1,t),ht(e,t));break}}e=e.return}}function DI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=it(),t.pingedLanes|=t.suspendedLanes&n,Oe===t&&(ze&n)===n&&(Pe===4||Pe===3&&(ze&130023424)===ze&&500>Ie()-Xh?yr(t,0):Qh|=n),ht(t,e)}function yv(t,e){e===0&&(t.mode&1?(e=Vo,Vo<<=1,!(Vo&130023424)&&(Vo=4194304)):e=1);var n=it();t=gn(t,e),t!==null&&(Js(t,e,n),ht(t,n))}function LI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),yv(t,n)}function MI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(U(314))}r!==null&&r.delete(e),yv(t,n)}var vv;vv=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ut.current)lt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return lt=!1,II(t,e,n);lt=!!(t.flags&131072)}else lt=!1,de&&e.flags&1048576&&Iy(e,Oa,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;ua(t,e),t=e.pendingProps;var i=hi(e,Ze.current);ii(e,n),i=$h(null,e,r,t,i,n);var s=Hh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ct(r)?(s=!0,xa(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Uh(e),i.updater=yl,e.stateNode=i,i._reactInternals=e,Pc(e,r,t,n),e=Nc(null,e,r,!0,s,n)):(e.tag=0,de&&s&&Nh(e),rt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(ua(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=bI(r),t=Nt(r,t),i){case 0:e=xc(null,e,r,t,n);break e;case 1:e=Fp(null,e,r,t,n);break e;case 11:e=Up(null,e,r,t,n);break e;case 14:e=jp(null,e,r,Nt(r.type,t),n);break e}throw Error(U(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nt(r,i),xc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nt(r,i),Fp(t,e,r,i,n);case 3:e:{if(tv(e),t===null)throw Error(U(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Py(t,e),Ma(e,r,null,n);var a=e.memoizedState;if(r=a.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=mi(Error(U(423)),e),e=zp(t,e,r,n,i);break e}else if(r!==i){i=mi(Error(U(424)),e),e=zp(t,e,r,n,i);break e}else for(gt=Fn(e.stateNode.containerInfo.firstChild),vt=e,de=!0,Dt=null,n=Ay(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(di(),r===i){e=yn(t,e,n);break e}rt(t,e,r,n)}e=e.child}return e;case 5:return Ry(e),t===null&&kc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,a=i.children,wc(r,i)?a=null:s!==null&&wc(r,s)&&(e.flags|=32),ev(t,e),rt(t,e,a,n),e.child;case 6:return t===null&&kc(e),null;case 13:return nv(t,e,n);case 4:return jh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=fi(e,null,r,n):rt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nt(r,i),Up(t,e,r,i,n);case 7:return rt(t,e,e.pendingProps,n),e.child;case 8:return rt(t,e,e.pendingProps.children,n),e.child;case 12:return rt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,a=i.value,oe(Da,r._currentValue),r._currentValue=a,s!==null)if(jt(s.value,a)){if(s.children===i.children&&!ut.current){e=yn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){a=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=dn(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var f=h.pending;f===null?u.next=u:(u.next=f.next,f.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Ac(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(U(341));a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),Ac(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}rt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ii(e,n),i=Ct(i),r=r(i),e.flags|=1,rt(t,e,r,n),e.child;case 14:return r=e.type,i=Nt(r,e.pendingProps),i=Nt(r.type,i),jp(t,e,r,i,n);case 15:return Jy(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Nt(r,i),ua(t,e),e.tag=1,ct(r)?(t=!0,xa(e)):t=!1,ii(e,n),Qy(e,r,i),Pc(e,r,i,n),Nc(null,e,r,!0,t,n);case 19:return rv(t,e,n);case 22:return Zy(t,e,n)}throw Error(U(156,e.tag))};function _v(t,e){return Gg(t,e)}function VI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function kt(t,e,n,r){return new VI(t,e,n,r)}function ed(t){return t=t.prototype,!(!t||!t.isReactComponent)}function bI(t){if(typeof t=="function")return ed(t)?1:0;if(t!=null){if(t=t.$$typeof,t===_h)return 11;if(t===wh)return 14}return 2}function Hn(t,e){var n=t.alternate;return n===null?(n=kt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function da(t,e,n,r,i,s){var a=2;if(r=t,typeof t=="function")ed(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case $r:return vr(n.children,i,s,e);case vh:a=8,i|=8;break;case Ju:return t=kt(12,n,e,i|2),t.elementType=Ju,t.lanes=s,t;case Zu:return t=kt(13,n,e,i),t.elementType=Zu,t.lanes=s,t;case ec:return t=kt(19,n,e,i),t.elementType=ec,t.lanes=s,t;case Rg:return wl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Cg:a=10;break e;case Pg:a=9;break e;case _h:a=11;break e;case wh:a=14;break e;case Cn:a=16,r=null;break e}throw Error(U(130,t==null?t:typeof t,""))}return e=kt(a,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function vr(t,e,n,r){return t=kt(7,t,r,e),t.lanes=n,t}function wl(t,e,n,r){return t=kt(22,t,r,e),t.elementType=Rg,t.lanes=n,t.stateNode={isHidden:!1},t}function Lu(t,e,n){return t=kt(6,t,null,e),t.lanes=n,t}function Mu(t,e,n){return e=kt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function UI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mu(0),this.expirationTimes=mu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function td(t,e,n,r,i,s,a,l,u){return t=new UI(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=kt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Uh(s),t}function jI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Br,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function wv(t){if(!t)return Xn;t=t._reactInternals;e:{if(Lr(t)!==t||t.tag!==1)throw Error(U(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ct(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(U(171))}if(t.tag===1){var n=t.type;if(ct(n))return wy(t,n,e)}return e}function Ev(t,e,n,r,i,s,a,l,u){return t=td(n,r,!0,t,i,s,a,l,u),t.context=wv(null),n=t.current,r=it(),i=$n(n),s=dn(r,i),s.callback=e??null,zn(n,s,i),t.current.lanes=i,Js(t,i,r),ht(t,r),t}function El(t,e,n,r){var i=e.current,s=it(),a=$n(i);return n=wv(n),e.context===null?e.context=n:e.pendingContext=n,e=dn(s,a),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=zn(i,e,a),t!==null&&(Vt(t,i,a,s),oa(t,i,a)),a}function $a(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Yp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function nd(t,e){Yp(t,e),(t=t.alternate)&&Yp(t,e)}function FI(){return null}var Iv=typeof reportError=="function"?reportError:function(t){console.error(t)};function rd(t){this._internalRoot=t}Il.prototype.render=rd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));El(t,e,null,null)};Il.prototype.unmount=rd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Cr(function(){El(null,t,null,null)}),e[mn]=null}};function Il(t){this._internalRoot=t}Il.prototype.unstable_scheduleHydration=function(t){if(t){var e=Zg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Rn.length&&e!==0&&e<Rn[n].priority;n++);Rn.splice(n,0,t),n===0&&ty(t)}};function id(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Tl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Jp(){}function zI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=$a(a);s.call(h)}}var a=Ev(e,r,t,0,null,!1,!1,"",Jp);return t._reactRootContainer=a,t[mn]=a.current,Ns(t.nodeType===8?t.parentNode:t),Cr(),a}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=$a(u);l.call(h)}}var u=td(t,0,!1,null,null,!1,!1,"",Jp);return t._reactRootContainer=u,t[mn]=u.current,Ns(t.nodeType===8?t.parentNode:t),Cr(function(){El(e,u,n,r)}),u}function Sl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var a=s;if(typeof i=="function"){var l=i;i=function(){var u=$a(a);l.call(u)}}El(e,a,t,i)}else a=zI(n,e,t,i,r);return $a(a)}Yg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=os(e.pendingLanes);n!==0&&(Th(e,n|1),ht(e,Ie()),!(ee&6)&&(gi=Ie()+500,nr()))}break;case 13:Cr(function(){var r=gn(t,1);if(r!==null){var i=it();Vt(r,t,1,i)}}),nd(t,1)}};Sh=function(t){if(t.tag===13){var e=gn(t,134217728);if(e!==null){var n=it();Vt(e,t,134217728,n)}nd(t,134217728)}};Jg=function(t){if(t.tag===13){var e=$n(t),n=gn(t,e);if(n!==null){var r=it();Vt(n,t,e,r)}nd(t,e)}};Zg=function(){return ne};ey=function(t,e){var n=ne;try{return ne=t,e()}finally{ne=n}};cc=function(t,e,n){switch(e){case"input":if(rc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=pl(r);if(!i)throw Error(U(90));Ng(r),rc(r,i)}}}break;case"textarea":Dg(t,n);break;case"select":e=n.value,e!=null&&ei(t,!!n.multiple,e,!1)}};Fg=Yh;zg=Cr;var BI={usingClientEntryPoint:!1,Events:[eo,Kr,pl,Ug,jg,Yh]},ts={findFiberByHostInstance:dr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$I={bundleType:ts.bundleType,version:ts.version,rendererPackageName:ts.rendererPackageName,rendererConfig:ts.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:wn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Hg(t),t===null?null:t.stateNode},findFiberByHostInstance:ts.findFiberByHostInstance||FI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ko=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ko.isDisabled&&Ko.supportsFiber)try{cl=Ko.inject($I),$t=Ko}catch{}}wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=BI;wt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!id(e))throw Error(U(200));return jI(t,e,null,n)};wt.createRoot=function(t,e){if(!id(t))throw Error(U(299));var n=!1,r="",i=Iv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=td(t,1,!1,null,null,n,!1,r,i),t[mn]=e.current,Ns(t.nodeType===8?t.parentNode:t),new rd(e)};wt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=Hg(e),t=t===null?null:t.stateNode,t};wt.flushSync=function(t){return Cr(t)};wt.hydrate=function(t,e,n){if(!Tl(e))throw Error(U(200));return Sl(null,t,e,!0,n)};wt.hydrateRoot=function(t,e,n){if(!id(t))throw Error(U(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",a=Iv;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=Ev(e,null,t,1,n??null,i,!1,s,a),t[mn]=e.current,Ns(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Il(e)};wt.render=function(t,e,n){if(!Tl(e))throw Error(U(200));return Sl(null,t,e,!1,n)};wt.unmountComponentAtNode=function(t){if(!Tl(t))throw Error(U(40));return t._reactRootContainer?(Cr(function(){Sl(null,null,t,!1,function(){t._reactRootContainer=null,t[mn]=null})}),!0):!1};wt.unstable_batchedUpdates=Yh;wt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Tl(n))throw Error(U(200));if(t==null||t._reactInternals===void 0)throw Error(U(38));return Sl(t,e,n,!1,r)};wt.version="18.3.1-next-f1338f8080-20240426";function Tv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Tv)}catch(t){console.error(t)}}Tv(),Tg.exports=wt;var HI=Tg.exports,Sv,Zp=HI;Sv=Zp.createRoot,Zp.hydrateRoot;/**
 * @remix-run/router v1.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fs(){return Fs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fs.apply(this,arguments)}var Vn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Vn||(Vn={}));const em="popstate";function WI(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:a,hash:l}=r.location;return $c("",{pathname:s,search:a,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Av(i)}return KI(e,n,null,t)}function Ae(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function kv(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function GI(){return Math.random().toString(36).substr(2,8)}function tm(t,e){return{usr:t.state,key:t.key,idx:e}}function $c(t,e,n,r){return n===void 0&&(n=null),Fs({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Ci(e):e,{state:n,key:e&&e.key||r||GI()})}function Av(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Ci(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function KI(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,a=i.history,l=Vn.Pop,u=null,h=f();h==null&&(h=0,a.replaceState(Fs({},a.state,{idx:h}),""));function f(){return(a.state||{idx:null}).idx}function m(){l=Vn.Pop;let D=f(),_=D==null?null:D-h;h=D,u&&u({action:l,location:N.location,delta:_})}function y(D,_){l=Vn.Push;let v=$c(N.location,D,_);h=f()+1;let k=tm(v,h),L=N.createHref(v);try{a.pushState(k,"",L)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(L)}s&&u&&u({action:l,location:N.location,delta:1})}function A(D,_){l=Vn.Replace;let v=$c(N.location,D,_);h=f();let k=tm(v,h),L=N.createHref(v);a.replaceState(k,"",L),s&&u&&u({action:l,location:N.location,delta:0})}function S(D){let _=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof D=="string"?D:Av(D);return v=v.replace(/ $/,"%20"),Ae(_,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,_)}let N={get action(){return l},get location(){return t(i,a)},listen(D){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(em,m),u=D,()=>{i.removeEventListener(em,m),u=null}},createHref(D){return e(i,D)},createURL:S,encodeLocation(D){let _=S(D);return{pathname:_.pathname,search:_.search,hash:_.hash}},push:y,replace:A,go(D){return a.go(D)}};return N}var nm;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(nm||(nm={}));function qI(t,e,n){return n===void 0&&(n="/"),QI(t,e,n)}function QI(t,e,n,r){let i=typeof e=="string"?Ci(e):e,s=Rv(i.pathname||"/",n);if(s==null)return null;let a=Cv(t);XI(a);let l=null;for(let u=0;l==null&&u<a.length;++u){let h=lT(s);l=sT(a[u],h)}return l}function Cv(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,a,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:a,route:s};u.relativePath.startsWith("/")&&(Ae(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let h=_r([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(Ae(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),Cv(s.children,e,f,h)),!(s.path==null&&!s.index)&&e.push({path:h,score:rT(h,s.index),routesMeta:f})};return t.forEach((s,a)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,a);else for(let u of Pv(s.path))i(s,a,u)}),e}function Pv(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let a=Pv(r.join("/")),l=[];return l.push(...a.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...a),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function XI(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:iT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const YI=/^:[\w-]+$/,JI=3,ZI=2,eT=1,tT=10,nT=-2,rm=t=>t==="*";function rT(t,e){let n=t.split("/"),r=n.length;return n.some(rm)&&(r+=nT),e&&(r+=ZI),n.filter(i=>!rm(i)).reduce((i,s)=>i+(YI.test(s)?JI:s===""?eT:tT),r)}function iT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function sT(t,e,n){let{routesMeta:r}=t,i={},s="/",a=[];for(let l=0;l<r.length;++l){let u=r[l],h=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",m=oT({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},f),y=u.route;if(!m)return null;Object.assign(i,m.params),a.push({params:i,pathname:_r([s,m.pathname]),pathnameBase:dT(_r([s,m.pathnameBase])),route:y}),m.pathnameBase!=="/"&&(s=_r([s,m.pathnameBase]))}return a}function oT(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=aT(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],a=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((h,f,m)=>{let{paramName:y,isOptional:A}=f;if(y==="*"){let N=l[m]||"";a=s.slice(0,s.length-N.length).replace(/(.)\/+$/,"$1")}const S=l[m];return A&&!S?h[y]=void 0:h[y]=(S||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:a,pattern:t}}function aT(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),kv(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(a,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function lT(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return kv(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Rv(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function uT(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Ci(t):t;return{pathname:n?n.startsWith("/")?n:cT(n,e):e,search:fT(r),hash:pT(i)}}function cT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Vu(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function hT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function xv(t,e){let n=hT(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Nv(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Ci(t):(i=Fs({},t),Ae(!i.pathname||!i.pathname.includes("?"),Vu("?","pathname","search",i)),Ae(!i.pathname||!i.pathname.includes("#"),Vu("#","pathname","hash",i)),Ae(!i.search||!i.search.includes("#"),Vu("#","search","hash",i)));let s=t===""||i.pathname==="",a=s?"/":i.pathname,l;if(a==null)l=n;else{let m=e.length-1;if(!r&&a.startsWith("..")){let y=a.split("/");for(;y[0]==="..";)y.shift(),m-=1;i.pathname=y.join("/")}l=m>=0?e[m]:"/"}let u=uT(i,l),h=a&&a!=="/"&&a.endsWith("/"),f=(s||a===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(h||f)&&(u.pathname+="/"),u}const _r=t=>t.join("/").replace(/\/\/+/g,"/"),dT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),fT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,pT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function mT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Ov=["post","put","patch","delete"];new Set(Ov);const gT=["get",...Ov];new Set(gT);/**
 * React Router v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function zs(){return zs=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},zs.apply(this,arguments)}const sd=M.createContext(null),yT=M.createContext(null),no=M.createContext(null),kl=M.createContext(null),Mr=M.createContext({outlet:null,matches:[],isDataRoute:!1}),Dv=M.createContext(null);function ro(){return M.useContext(kl)!=null}function od(){return ro()||Ae(!1),M.useContext(kl).location}function Lv(t){M.useContext(no).static||M.useLayoutEffect(t)}function ad(){let{isDataRoute:t}=M.useContext(Mr);return t?xT():vT()}function vT(){ro()||Ae(!1);let t=M.useContext(sd),{basename:e,future:n,navigator:r}=M.useContext(no),{matches:i}=M.useContext(Mr),{pathname:s}=od(),a=JSON.stringify(xv(i,n.v7_relativeSplatPath)),l=M.useRef(!1);return Lv(()=>{l.current=!0}),M.useCallback(function(h,f){if(f===void 0&&(f={}),!l.current)return;if(typeof h=="number"){r.go(h);return}let m=Nv(h,JSON.parse(a),s,f.relative==="path");t==null&&e!=="/"&&(m.pathname=m.pathname==="/"?e:_r([e,m.pathname])),(f.replace?r.replace:r.push)(m,f.state,f)},[e,r,a,s,t])}function _T(t,e){return wT(t,e)}function wT(t,e,n,r){ro()||Ae(!1);let{navigator:i,static:s}=M.useContext(no),{matches:a}=M.useContext(Mr),l=a[a.length-1],u=l?l.params:{};l&&l.pathname;let h=l?l.pathnameBase:"/";l&&l.route;let f=od(),m;if(e){var y;let _=typeof e=="string"?Ci(e):e;h==="/"||(y=_.pathname)!=null&&y.startsWith(h)||Ae(!1),m=_}else m=f;let A=m.pathname||"/",S=A;if(h!=="/"){let _=h.replace(/^\//,"").split("/");S="/"+A.replace(/^\//,"").split("/").slice(_.length).join("/")}let N=qI(t,{pathname:S}),D=kT(N&&N.map(_=>Object.assign({},_,{params:Object.assign({},u,_.params),pathname:_r([h,i.encodeLocation?i.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?h:_r([h,i.encodeLocation?i.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),a,n,r);return e&&D?M.createElement(kl.Provider,{value:{location:zs({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:Vn.Pop}},D):D}function ET(){let t=RT(),e=mT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:i},n):null,null)}const IT=M.createElement(ET,null);class TT extends M.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?M.createElement(Mr.Provider,{value:this.props.routeContext},M.createElement(Dv.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function ST(t){let{routeContext:e,match:n,children:r}=t,i=M.useContext(sd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(Mr.Provider,{value:e},r)}function kT(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let a=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=a.findIndex(m=>m.route.id&&(l==null?void 0:l[m.route.id])!==void 0);f>=0||Ae(!1),a=a.slice(0,Math.min(a.length,f+1))}let u=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<a.length;f++){let m=a[f];if((m.route.HydrateFallback||m.route.hydrateFallbackElement)&&(h=f),m.route.id){let{loaderData:y,errors:A}=n,S=m.route.loader&&y[m.route.id]===void 0&&(!A||A[m.route.id]===void 0);if(m.route.lazy||S){u=!0,h>=0?a=a.slice(0,h+1):a=[a[0]];break}}}return a.reduceRight((f,m,y)=>{let A,S=!1,N=null,D=null;n&&(A=l&&m.route.id?l[m.route.id]:void 0,N=m.route.errorElement||IT,u&&(h<0&&y===0?(NT("route-fallback"),S=!0,D=null):h===y&&(S=!0,D=m.route.hydrateFallbackElement||null)));let _=e.concat(a.slice(0,y+1)),v=()=>{let k;return A?k=N:S?k=D:m.route.Component?k=M.createElement(m.route.Component,null):m.route.element?k=m.route.element:k=f,M.createElement(ST,{match:m,routeContext:{outlet:f,matches:_,isDataRoute:n!=null},children:k})};return n&&(m.route.ErrorBoundary||m.route.errorElement||y===0)?M.createElement(TT,{location:n.location,revalidation:n.revalidation,component:N,error:A,children:v(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):v()},null)}var Mv=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(Mv||{}),Vv=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Vv||{});function AT(t){let e=M.useContext(sd);return e||Ae(!1),e}function CT(t){let e=M.useContext(yT);return e||Ae(!1),e}function PT(t){let e=M.useContext(Mr);return e||Ae(!1),e}function bv(t){let e=PT(),n=e.matches[e.matches.length-1];return n.route.id||Ae(!1),n.route.id}function RT(){var t;let e=M.useContext(Dv),n=CT(),r=bv();return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function xT(){let{router:t}=AT(Mv.UseNavigateStable),e=bv(Vv.UseNavigateStable),n=M.useRef(!1);return Lv(()=>{n.current=!0}),M.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,zs({fromRouteId:e},s)))},[t,e])}const im={};function NT(t,e,n){im[t]||(im[t]=!0)}function OT(t,e){t==null||t.v7_startTransition,t==null||t.v7_relativeSplatPath}function Uv(t){let{to:e,replace:n,state:r,relative:i}=t;ro()||Ae(!1);let{future:s,static:a}=M.useContext(no),{matches:l}=M.useContext(Mr),{pathname:u}=od(),h=ad(),f=Nv(e,xv(l,s.v7_relativeSplatPath),u,i==="path"),m=JSON.stringify(f);return M.useEffect(()=>h(JSON.parse(m),{replace:n,state:r,relative:i}),[h,m,i,n,r]),null}function Hc(t){Ae(!1)}function DT(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Vn.Pop,navigator:s,static:a=!1,future:l}=t;ro()&&Ae(!1);let u=e.replace(/^\/*/,"/"),h=M.useMemo(()=>({basename:u,navigator:s,static:a,future:zs({v7_relativeSplatPath:!1},l)}),[u,l,s,a]);typeof r=="string"&&(r=Ci(r));let{pathname:f="/",search:m="",hash:y="",state:A=null,key:S="default"}=r,N=M.useMemo(()=>{let D=Rv(f,u);return D==null?null:{location:{pathname:D,search:m,hash:y,state:A,key:S},navigationType:i}},[u,f,m,y,A,S,i]);return N==null?null:M.createElement(no.Provider,{value:h},M.createElement(kl.Provider,{children:n,value:N}))}function LT(t){let{children:e,location:n}=t;return _T(Wc(e),n)}new Promise(()=>{});function Wc(t,e){e===void 0&&(e=[]);let n=[];return M.Children.forEach(t,(r,i)=>{if(!M.isValidElement(r))return;let s=[...e,i];if(r.type===M.Fragment){n.push.apply(n,Wc(r.props.children,s));return}r.type!==Hc&&Ae(!1),!r.props.index||!r.props.children||Ae(!1);let a={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(a.children=Wc(r.props.children,s)),n.push(a)}),n}/**
 * React Router DOM v6.29.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const MT="6";try{window.__reactRouterVersion=MT}catch{}const VT="startTransition",sm=Dw[VT];function bT(t){let{basename:e,children:n,future:r,window:i}=t,s=M.useRef();s.current==null&&(s.current=WI({window:i,v5Compat:!0}));let a=s.current,[l,u]=M.useState({action:a.action,location:a.location}),{v7_startTransition:h}=r||{},f=M.useCallback(m=>{h&&sm?sm(()=>u(m)):u(m)},[u,h]);return M.useLayoutEffect(()=>a.listen(f),[a,f]),M.useEffect(()=>OT(r),[r]),M.createElement(DT,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:a,future:r})}var om;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(om||(om={}));var am;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(am||(am={}));/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var UT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),he=(t,e)=>{const n=M.forwardRef(({color:r="currentColor",size:i=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:l="",children:u,...h},f)=>M.createElement("svg",{ref:f,...UT,width:i,height:i,stroke:r,strokeWidth:a?Number(s)*24/Number(i):s,className:["lucide",`lucide-${jT(t)}`,l].join(" "),...h},[...e.map(([m,y])=>M.createElement(m,y)),...Array.isArray(u)?u:[u]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FT=he("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zT=he("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=he("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BT=he("Brain",[["path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z",key:"1mhkh5"}],["path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z",key:"1d6s00"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $T=he("Copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HT=he("Cross",[["path",{d:"M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z",key:"1t5g7j"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WT=he("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GT=he("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KT=he("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qT=he("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=he("Loader2",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=he("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YT=he("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=he("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=he("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=he("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=he("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=he("Shield",[["path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10",key:"1irkt0"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fv=he("Sparkles",[["path",{d:"m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z",key:"17u4zn"}],["path",{d:"M5 3v4",key:"bklmnn"}],["path",{d:"M19 17v4",key:"iiml17"}],["path",{d:"M3 5h4",key:"nem4j1"}],["path",{d:"M17 19h4",key:"lbex7p"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=he("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=he("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=he("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=he("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=he("XCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=he("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);var lm={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},o1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],a=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],a=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return e.join("")},Bv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],a=i+1<t.length,l=a?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,m=(s&3)<<4|l>>4;let y=(l&15)<<2|h>>6,A=h&63;u||(A=64,a||(y=64)),r.push(n[f],n[m],n[y],n[A])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(zv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):o1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||m==null)throw new a1;const y=s<<2|l>>4;if(r.push(y),h!==64){const A=l<<4&240|h>>2;if(r.push(A),m!==64){const S=h<<6&192|m;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class a1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const l1=function(t){const e=zv(t);return Bv.encodeByteArray(e,!0)},Ha=function(t){return l1(t).replace(/\./g,"")},$v=function(t){try{return Bv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c1=()=>u1().__FIREBASE_DEFAULTS__,h1=()=>{if(typeof process>"u"||typeof lm>"u")return;const t=lm.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},d1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&$v(t[1]);return e&&JSON.parse(e)},Al=()=>{try{return c1()||h1()||d1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Hv=t=>{var e,n;return(n=(e=Al())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},f1=t=>{const e=Hv(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Wv=()=>{var t;return(t=Al())===null||t===void 0?void 0:t.config},Gv=t=>{var e;return(e=Al())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ha(JSON.stringify(n)),Ha(JSON.stringify(a)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function g1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(et())}function y1(){var t;const e=(t=Al())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function v1(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function _1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function w1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function E1(){const t=et();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function I1(){return!y1()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function T1(){try{return typeof indexedDB=="object"}catch{return!1}}function S1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k1="FirebaseError";class En extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=k1,Object.setPrototypeOf(this,En.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,io.prototype.create)}}class io{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],a=s?A1(s,r):"Error",l=`${this.serviceName}: ${a} (${i}).`;return new En(i,l,r)}}function A1(t,e){return t.replace(C1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const C1=/\{\$([^}]+)}/g;function P1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wa(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],a=e[i];if(um(s)&&um(a)){if(!Wa(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function um(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function R1(t,e){const n=new x1(t,e);return n.subscribe.bind(n)}class x1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");N1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=bu),i.error===void 0&&(i.error=bu),i.complete===void 0&&(i.complete=bu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function N1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function bu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Le(t){return t&&t._delegate?t._delegate:t}class Pr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new p1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(L1(e))try{this.getOrInitializeService({instanceIdentifier:hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hr){return this.instances.has(e)}getOptions(e=hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&a.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&e(a,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:D1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hr){return this.component?this.component.multipleInstances?e:hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function D1(t){return t===hr?void 0:t}function L1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new O1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Y||(Y={}));const V1={debug:Y.DEBUG,verbose:Y.VERBOSE,info:Y.INFO,warn:Y.WARN,error:Y.ERROR,silent:Y.SILENT},b1=Y.INFO,U1={[Y.DEBUG]:"log",[Y.VERBOSE]:"log",[Y.INFO]:"info",[Y.WARN]:"warn",[Y.ERROR]:"error"},j1=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=U1[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cd{constructor(e){this.name=e,this._logLevel=b1,this._logHandler=j1,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Y))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?V1[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Y.DEBUG,...e),this._logHandler(this,Y.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Y.VERBOSE,...e),this._logHandler(this,Y.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Y.INFO,...e),this._logHandler(this,Y.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Y.WARN,...e),this._logHandler(this,Y.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Y.ERROR,...e),this._logHandler(this,Y.ERROR,...e)}}const F1=(t,e)=>e.some(n=>t instanceof n);let cm,hm;function z1(){return cm||(cm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function B1(){return hm||(hm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Kv=new WeakMap,Kc=new WeakMap,qv=new WeakMap,Uu=new WeakMap,hd=new WeakMap;function $1(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(Wn(t.result)),i()},a=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&Kv.set(n,t)}).catch(()=>{}),hd.set(e,t),e}function H1(t){if(Kc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});Kc.set(t,e)}let qc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Kc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||qv.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function W1(t){qc=t(qc)}function G1(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ju(this),e,...n);return qv.set(r,e.sort?e.sort():[e]),Wn(r)}:B1().includes(t)?function(...e){return t.apply(ju(this),e),Wn(Kv.get(this))}:function(...e){return Wn(t.apply(ju(this),e))}}function K1(t){return typeof t=="function"?G1(t):(t instanceof IDBTransaction&&H1(t),F1(t,z1())?new Proxy(t,qc):t)}function Wn(t){if(t instanceof IDBRequest)return $1(t);if(Uu.has(t))return Uu.get(t);const e=K1(t);return e!==t&&(Uu.set(t,e),hd.set(e,t)),e}const ju=t=>hd.get(t);function q1(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(t,e),l=Wn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Wn(a.result),u.oldVersion,u.newVersion,Wn(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Q1=["get","getKey","getAll","getAllKeys","count"],X1=["put","add","delete","clear"],Fu=new Map;function dm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Fu.get(e))return Fu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=X1.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Q1.includes(n)))return;const s=async function(a,...l){const u=this.transaction(a,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return Fu.set(e,s),s}W1(t=>({...t,get:(e,n,r)=>dm(e,n)||t.get(e,n,r),has:(e,n)=>!!dm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y1{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(J1(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function J1(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Qc="@firebase/app",fm="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vn=new cd("@firebase/app"),Z1="@firebase/app-compat",eS="@firebase/analytics-compat",tS="@firebase/analytics",nS="@firebase/app-check-compat",rS="@firebase/app-check",iS="@firebase/auth",sS="@firebase/auth-compat",oS="@firebase/database",aS="@firebase/data-connect",lS="@firebase/database-compat",uS="@firebase/functions",cS="@firebase/functions-compat",hS="@firebase/installations",dS="@firebase/installations-compat",fS="@firebase/messaging",pS="@firebase/messaging-compat",mS="@firebase/performance",gS="@firebase/performance-compat",yS="@firebase/remote-config",vS="@firebase/remote-config-compat",_S="@firebase/storage",wS="@firebase/storage-compat",ES="@firebase/firestore",IS="@firebase/vertexai-preview",TS="@firebase/firestore-compat",SS="firebase",kS="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc="[DEFAULT]",AS={[Qc]:"fire-core",[Z1]:"fire-core-compat",[tS]:"fire-analytics",[eS]:"fire-analytics-compat",[rS]:"fire-app-check",[nS]:"fire-app-check-compat",[iS]:"fire-auth",[sS]:"fire-auth-compat",[oS]:"fire-rtdb",[aS]:"fire-data-connect",[lS]:"fire-rtdb-compat",[uS]:"fire-fn",[cS]:"fire-fn-compat",[hS]:"fire-iid",[dS]:"fire-iid-compat",[fS]:"fire-fcm",[pS]:"fire-fcm-compat",[mS]:"fire-perf",[gS]:"fire-perf-compat",[yS]:"fire-rc",[vS]:"fire-rc-compat",[_S]:"fire-gcs",[wS]:"fire-gcs-compat",[ES]:"fire-fst",[TS]:"fire-fst-compat",[IS]:"fire-vertex","fire-js":"fire-js",[SS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga=new Map,CS=new Map,Yc=new Map;function pm(t,e){try{t.container.addComponent(e)}catch(n){vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function yi(t){const e=t.name;if(Yc.has(e))return vn.debug(`There were multiple attempts to register component ${e}.`),!1;Yc.set(e,t);for(const n of Ga.values())pm(n,t);for(const n of CS.values())pm(n,t);return!0}function dd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ln(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Gn=new io("app","Firebase",PS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Gn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pi=kS;function Qv(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Xc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Gn.create("bad-app-name",{appName:String(i)});if(n||(n=Wv()),!n)throw Gn.create("no-options");const s=Ga.get(i);if(s){if(Wa(n,s.options)&&Wa(r,s.config))return s;throw Gn.create("duplicate-app",{appName:i})}const a=new M1(i);for(const u of Yc.values())a.addComponent(u);const l=new RS(n,r,a);return Ga.set(i,l),l}function Xv(t=Xc){const e=Ga.get(t);if(!e&&t===Xc&&Wv())return Qv();if(!e)throw Gn.create("no-app",{appName:t});return e}function Kn(t,e,n){var r;let i=(r=AS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vn.warn(l.join(" "));return}yi(new Pr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xS="firebase-heartbeat-database",NS=1,Bs="firebase-heartbeat-store";let zu=null;function Yv(){return zu||(zu=q1(xS,NS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Bs)}catch(n){console.warn(n)}}}}).catch(t=>{throw Gn.create("idb-open",{originalErrorMessage:t.message})})),zu}async function OS(t){try{const n=(await Yv()).transaction(Bs),r=await n.objectStore(Bs).get(Jv(t));return await n.done,r}catch(e){if(e instanceof En)vn.warn(e.message);else{const n=Gn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vn.warn(n.message)}}}async function mm(t,e){try{const r=(await Yv()).transaction(Bs,"readwrite");await r.objectStore(Bs).put(e,Jv(t)),await r.done}catch(n){if(n instanceof En)vn.warn(n.message);else{const r=Gn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});vn.warn(r.message)}}}function Jv(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DS=1024,LS=30*24*60*60*1e3;class MS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=gm();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const l=new Date(a.date).valueOf();return Date.now()-l<=LS}),this._storage.overwrite(this._heartbeatsCache))}catch(r){vn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=gm(),{heartbeatsToSend:r,unsentEntries:i}=VS(this._heartbeatsCache.heartbeats),s=Ha(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return vn.warn(n),""}}}function gm(){return new Date().toISOString().substring(0,10)}function VS(t,e=DS){const n=[];let r=t.slice();for(const i of t){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),ym(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),ym(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return T1()?S1().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await OS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return mm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function ym(t){return Ha(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(t){yi(new Pr("platform-logger",e=>new Y1(e),"PRIVATE")),yi(new Pr("heartbeat",e=>new MS(e),"PRIVATE")),Kn(Qc,fm,t),Kn(Qc,fm,"esm2017"),Kn("fire-js","")}US("");var jS="firebase",FS="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kn(jS,FS,"app");function fd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Zv(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const zS=Zv,e_=new io("auth","Firebase",Zv());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=new cd("@firebase/auth");function BS(t,...e){Ka.logLevel<=Y.WARN&&Ka.warn(`Auth (${Pi}): ${t}`,...e)}function fa(t,...e){Ka.logLevel<=Y.ERROR&&Ka.error(`Auth (${Pi}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t,...e){throw md(t,...e)}function bt(t,...e){return md(t,...e)}function pd(t,e,n){const r=Object.assign(Object.assign({},zS()),{[e]:n});return new io("auth","Firebase",r).create(e,{appName:t.name})}function wr(t){return pd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $S(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Gt(t,"argument-error"),pd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function md(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return e_.create(t,...e)}function G(t,e,...n){if(!t)throw md(e,...n)}function un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw fa(e),new Error(e)}function _n(t,e){t||un(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function HS(){return vm()==="http:"||vm()==="https:"}function vm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(HS()||_1()||"connection"in navigator)?navigator.onLine:!0}function GS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n){this.shortDelay=e,this.longDelay=n,_n(n>e,"Short delay should be less than long delay!"),this.isMobile=g1()||w1()}get(){return WS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(t,e){_n(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qS=new oo(3e4,6e4);function yd(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ri(t,e,n,r,i={}){return n_(t,i,async()=>{let s={},a={};r&&(e==="GET"?a=r:s={body:JSON.stringify(r)});const l=so(Object.assign({key:t.config.apiKey},a)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return v1()||(h.referrerPolicy="no-referrer"),t_.fetch()(r_(t,t.config.apiHost,n,l),h)})}async function n_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},KS),e);try{const i=new XS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw qo(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const l=s.ok?a.errorMessage:a.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw qo(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw qo(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw qo(t,"user-disabled",a);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw pd(t,f,h);Gt(t,f)}}catch(i){if(i instanceof En)throw i;Gt(t,"network-request-failed",{message:String(i)})}}async function QS(t,e,n,r,i={}){const s=await Ri(t,e,n,r,i);return"mfaPendingCredential"in s&&Gt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function r_(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?gd(t.config,i):`${t.config.apiScheme}://${i}`}class XS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(bt(this.auth,"network-request-failed")),qS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function qo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=bt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YS(t,e){return Ri(t,"POST","/v1/accounts:delete",e)}async function i_(t,e){return Ri(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function JS(t,e=!1){const n=Le(t),r=await n.getIdToken(e),i=vd(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:vs(Bu(i.auth_time)),issuedAtTime:vs(Bu(i.iat)),expirationTime:vs(Bu(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Bu(t){return Number(t)*1e3}function vd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return fa("JWT malformed, contained fewer than 3 sections"),null;try{const i=$v(n);return i?JSON.parse(i):(fa("Failed to decode base64 JWT payload"),null)}catch(i){return fa("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function _m(t){const e=vd(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $s(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof En&&ZS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ZS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ek{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=vs(this.lastLoginAt),this.creationTime=vs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qa(t){var e;const n=t.auth,r=await t.getIdToken(),i=await $s(t,i_(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?s_(s.providerUserInfo):[],l=nk(t.providerData,a),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,m={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Zc(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function tk(t){const e=Le(t);await qa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function nk(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function s_(t){return t.map(e=>{var{providerId:n}=e,r=fd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rk(t,e){const n=await n_(t,{},async()=>{const r=so({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,a=r_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",t_.fetch()(a,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ik(t,e){return Ri(t,"POST","/v2/accounts:revokeToken",yd(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_m(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=_m(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await rk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new oi;return r&&(G(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),a.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new oi,this.toJSON())}_performRefresh(){return un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function An(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class cn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=fd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ek(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Zc(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await $s(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return JS(this,e)}reload(){return tk(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new cn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await qa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ln(this.auth.app))return Promise.reject(wr(this.auth));const e=await this.getIdToken();return await $s(this,YS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,a,l,u,h,f;const m=(r=n.displayName)!==null&&r!==void 0?r:void 0,y=(i=n.email)!==null&&i!==void 0?i:void 0,A=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,S=(a=n.photoURL)!==null&&a!==void 0?a:void 0,N=(l=n.tenantId)!==null&&l!==void 0?l:void 0,D=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,_=(h=n.createdAt)!==null&&h!==void 0?h:void 0,v=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:k,emailVerified:L,isAnonymous:j,providerData:z,stsTokenManager:E}=n;G(k&&E,e,"internal-error");const g=oi.fromJSON(this.name,E);G(typeof k=="string",e,"internal-error"),An(m,e.name),An(y,e.name),G(typeof L=="boolean",e,"internal-error"),G(typeof j=="boolean",e,"internal-error"),An(A,e.name),An(S,e.name),An(N,e.name),An(D,e.name),An(_,e.name),An(v,e.name);const w=new cn({uid:k,auth:e,email:y,emailVerified:L,displayName:m,isAnonymous:j,photoURL:S,phoneNumber:A,tenantId:N,stsTokenManager:g,createdAt:_,lastLoginAt:v});return z&&Array.isArray(z)&&(w.providerData=z.map(I=>Object.assign({},I))),D&&(w._redirectEventId=D),w}static async _fromIdTokenResponse(e,n,r=!1){const i=new oi;i.updateFromServerResponse(n);const s=new cn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await qa(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?s_(i.providerUserInfo):[],a=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new oi;l.updateFromIdToken(r);const u=new cn({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Zc(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wm=new Map;function hn(t){_n(t instanceof Function,"Expected a class definition");let e=wm.get(t);return e?(_n(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,wm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}o_.type="NONE";const Em=o_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pa(t,e,n){return`firebase:${t}:${e}:${n}`}class ai{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=pa(this.userKey,i.apiKey,s),this.fullPersistenceKey=pa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?cn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ai(hn(Em),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||hn(Em);const a=pa(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(a);if(f){const m=cn._fromJSON(e,f);h!==s&&(l=m),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new ai(s,e,r):(s=u[0],l&&await s._set(a,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(a)}catch{}})),new ai(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Im(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(c_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(a_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(d_(e))return"Blackberry";if(f_(e))return"Webos";if(l_(e))return"Safari";if((e.includes("chrome/")||u_(e))&&!e.includes("edge/"))return"Chrome";if(h_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function a_(t=et()){return/firefox\//i.test(t)}function l_(t=et()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function u_(t=et()){return/crios\//i.test(t)}function c_(t=et()){return/iemobile/i.test(t)}function h_(t=et()){return/android/i.test(t)}function d_(t=et()){return/blackberry/i.test(t)}function f_(t=et()){return/webos/i.test(t)}function _d(t=et()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function sk(t=et()){var e;return _d(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ok(){return E1()&&document.documentMode===10}function p_(t=et()){return _d(t)||h_(t)||f_(t)||d_(t)||/windows phone/i.test(t)||c_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m_(t,e=[]){let n;switch(t){case"Browser":n=Im(et());break;case"Worker":n=`${Im(et())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Pi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ak{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((a,l)=>{try{const u=e(s);a(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lk(t,e={}){return Ri(t,"GET","/v2/passwordPolicy",yd(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uk=6;class ck{constructor(e){var n,r,i,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:uk,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,a,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Tm(this),this.idTokenSubscription=new Tm(this),this.beforeStateQueue=new ak(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=e_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=hn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await ai.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await i_(this,{idToken:e}),r=await cn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ln(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ln(this.app))return Promise.reject(wr(this));const n=e?Le(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ln(this.app)?Promise.reject(wr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ln(this.app)?Promise.reject(wr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(hn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await lk(this),n=new ck(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new io("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ik(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&hn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await ai.create(this,[hn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{a=!0,u()}}else{const u=e.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=m_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&BS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Cl(t){return Le(t)}class Tm{constructor(e){this.auth=e,this.observer=null,this.addObserver=R1(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function dk(t){wd=t}function fk(t){return wd.loadJS(t)}function pk(){return wd.gapiScript}function mk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gk(t,e){const n=dd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Wa(s,e??{}))return i;Gt(i,"already-initialized")}return n.initialize({options:e})}function yk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(hn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function vk(t,e,n){const r=Cl(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=g_(e),{host:a,port:l}=_k(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${a}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),wk()}function g_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function _k(t){const e=g_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Sm(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Sm(a)}}}function Sm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function wk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return un("not implemented")}_getIdTokenResponse(e){return un("not implemented")}_linkToIdToken(e,n){return un("not implemented")}_getReauthenticationResolver(e){return un("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function li(t,e){return QS(t,"POST","/v1/accounts:signInWithIdp",yd(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ek="http://localhost";class Rr extends y_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=fd(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new Rr(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return li(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,li(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,li(e,n)}buildRequest(){const e={requestUri:Ek,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=so(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao extends Ed{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends ao{constructor(){super("facebook.com")}static credential(e){return Rr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends ao{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Rr._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return sn.credential(n,r)}catch{return null}}}sn.GOOGLE_SIGN_IN_METHOD="google.com";sn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On extends ao{constructor(){super("github.com")}static credential(e){return Rr._fromParams({providerId:On.PROVIDER_ID,signInMethod:On.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return On.credentialFromTaggedObject(e)}static credentialFromError(e){return On.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return On.credential(e.oauthAccessToken)}catch{return null}}}On.GITHUB_SIGN_IN_METHOD="github.com";On.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dn extends ao{constructor(){super("twitter.com")}static credential(e,n){return Rr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Dn.credential(n,r)}catch{return null}}}Dn.TWITTER_SIGN_IN_METHOD="twitter.com";Dn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await cn._fromIdTokenResponse(e,r,i),a=km(r);return new vi({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=km(r);return new vi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function km(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa extends En{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Qa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Qa(e,n,r,i)}}function v_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Qa._fromErrorAndOperation(t,s,e,r):s})}async function Ik(t,e,n=!1){const r=await $s(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tk(t,e,n=!1){const{auth:r}=t;if(ln(r.app))return Promise.reject(wr(r));const i="reauthenticate";try{const s=await $s(t,v_(r,i,e,t),n);G(s.idToken,r,"internal-error");const a=vd(s.idToken);G(a,r,"internal-error");const{sub:l}=a;return G(t.uid===l,r,"user-mismatch"),vi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Gt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sk(t,e,n=!1){if(ln(t.app))return Promise.reject(wr(t));const r="signIn",i=await v_(t,r,e),s=await vi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kk(t,e){return Le(t).setPersistence(e)}function Ak(t,e,n,r){return Le(t).onIdTokenChanged(e,n,r)}function Ck(t,e,n){return Le(t).beforeAuthStateChanged(e,n)}function Pk(t,e,n,r){return Le(t).onAuthStateChanged(e,n,r)}function Rk(t){return Le(t).signOut()}const Xa="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class __{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xa,"1"),this.storage.removeItem(Xa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk=1e3,Nk=10;class w_ extends __{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=p_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,l,u)=>{this.notifyListeners(a,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);ok()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Nk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},xk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}w_.type="LOCAL";const E_=w_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_ extends __{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}I_.type="SESSION";const T_=I_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ok(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Pl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(a).map(async h=>h(n.origin,s)),u=await Ok(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Id(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((l,u)=>{const h=Id("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(m){const y=m;if(y.data.eventId===h)switch(y.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(y.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(){return window}function Lk(t){Wt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S_(){return typeof Wt().WorkerGlobalScope<"u"&&typeof Wt().importScripts=="function"}async function Mk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Vk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function bk(){return S_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k_="firebaseLocalStorageDb",Uk=1,Ya="firebaseLocalStorage",A_="fbase_key";class lo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Rl(t,e){return t.transaction([Ya],e?"readwrite":"readonly").objectStore(Ya)}function jk(){const t=indexedDB.deleteDatabase(k_);return new lo(t).toPromise()}function eh(){const t=indexedDB.open(k_,Uk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ya,{keyPath:A_})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ya)?e(r):(r.close(),await jk(),e(await eh()))})})}async function Am(t,e,n){const r=Rl(t,!0).put({[A_]:e,value:n});return new lo(r).toPromise()}async function Fk(t,e){const n=Rl(t,!1).get(e),r=await new lo(n).toPromise();return r===void 0?null:r.value}function Cm(t,e){const n=Rl(t,!0).delete(e);return new lo(n).toPromise()}const zk=800,Bk=3;class C_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await eh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Bk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return S_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pl._getInstance(bk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Mk(),!this.activeServiceWorker)return;this.sender=new Dk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Vk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await eh();return await Am(e,Xa,"1"),await Cm(e,Xa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Am(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Fk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Cm(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Rl(i,!1).getAll();return new lo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),zk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}C_.type="LOCAL";const $k=C_;new oo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P_(t,e){return e?hn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Td extends y_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return li(e,this._buildIdpRequest())}_linkToIdToken(e,n){return li(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return li(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Hk(t){return Sk(t.auth,new Td(t),t.bypassAuthState)}function Wk(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),Tk(n,new Td(t),t.bypassAuthState)}async function Gk(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),Ik(n,new Td(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:l}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Hk;case"linkViaPopup":case"linkViaRedirect":return Gk;case"reauthViaPopup":case"reauthViaRedirect":return Wk;default:Gt(this.auth,"internal-error")}}resolve(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){_n(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kk=new oo(2e3,1e4);async function x_(t,e,n){if(ln(t.app))return Promise.reject(bt(t,"operation-not-supported-in-this-environment"));const r=Cl(t);$S(t,e,Ed);const i=P_(r,n);return new mr(r,"signInViaPopup",e,i).executeNotNull()}class mr extends R_{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,mr.currentPopupAction&&mr.currentPopupAction.cancel(),mr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){_n(this.filter.length===1,"Popup operations only handle one event");const e=Id();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(bt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(bt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(bt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Kk.get())};e()}}mr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qk="pendingRedirect",ma=new Map;class Qk extends R_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ma.get(this.auth._key());if(!e){try{const r=await Xk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ma.set(this.auth._key(),e)}return this.bypassAuthState||ma.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Xk(t,e){const n=Zk(e),r=Jk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Yk(t,e){ma.set(t._key(),e)}function Jk(t){return hn(t._redirectPersistence)}function Zk(t){return pa(qk,t.config.apiKey,t.name)}async function eA(t,e,n=!1){if(ln(t.app))return Promise.reject(wr(t));const r=Cl(t),i=P_(r,e),a=await new Qk(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tA=10*60*1e3;class nA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!N_(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(bt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=tA&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pm(e))}saveEventToCache(e){this.cachedEventUids.add(Pm(e)),this.lastProcessedEventTime=Date.now()}}function Pm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function N_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return N_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iA(t,e={}){return Ri(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,oA=/^https?/;async function aA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await iA(t);for(const n of e)try{if(lA(n))return}catch{}Gt(t,"unauthorized-domain")}function lA(t){const e=Jc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!oA.test(n))return!1;if(sA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA=new oo(3e4,6e4);function Rm(){const t=Wt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function cA(t){return new Promise((e,n)=>{var r,i,s;function a(){Rm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Rm(),n(bt(t,"network-request-failed"))},timeout:uA.get()})}if(!((i=(r=Wt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Wt().gapi)===null||s===void 0)&&s.load)a();else{const l=mk("iframefcb");return Wt()[l]=()=>{gapi.load?a():n(bt(t,"network-request-failed"))},fk(`${pk()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw ga=null,e})}let ga=null;function hA(t){return ga=ga||cA(t),ga}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dA=new oo(5e3,15e3),fA="__/auth/iframe",pA="emulator/auth/iframe",mA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},gA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function yA(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?gd(e,pA):`https://${t.config.authDomain}/${fA}`,r={apiKey:e.apiKey,appName:t.name,v:Pi},i=gA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${so(r).slice(1)}`}async function vA(t){const e=await hA(t),n=Wt().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:yA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:mA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=bt(t,"network-request-failed"),l=Wt().setTimeout(()=>{s(a)},dA.get());function u(){Wt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _A={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wA=500,EA=600,IA="_blank",TA="http://localhost";class xm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function SA(t,e,n,r=wA,i=EA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},_A),{width:r.toString(),height:i.toString(),top:s,left:a}),h=et().toLowerCase();n&&(l=u_(h)?IA:n),a_(h)&&(e=e||TA,u.scrollbars="yes");const f=Object.entries(u).reduce((y,[A,S])=>`${y}${A}=${S},`,"");if(sk(h)&&l!=="_self")return kA(e||"",l),new xm(null);const m=window.open(e||"",l,f);G(m,t,"popup-blocked");try{m.focus()}catch{}return new xm(m)}function kA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AA="__/auth/handler",CA="emulator/auth/handler",PA=encodeURIComponent("fac");async function Nm(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Pi,eventId:i};if(e instanceof Ed){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",P1(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries({}))a[f]=m}if(e instanceof ao){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(a.scopes=f.join(","))}t.tenantId&&(a.tid=t.tenantId);const l=a;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${PA}=${encodeURIComponent(u)}`:"";return`${RA(t)}?${so(l).slice(1)}${h}`}function RA({config:t}){return t.emulator?gd(t,CA):`https://${t.authDomain}/${AA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $u="webStorageSupport";class xA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=T_,this._completeRedirectFn=eA,this._overrideRedirectResult=Yk}async _openPopup(e,n,r,i){var s;_n((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Nm(e,n,r,Jc(),i);return SA(e,a,Id())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Nm(e,n,r,Jc(),i);return Lk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(_n(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await vA(e),r=new nA(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send($u,{type:$u},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[$u];a!==void 0&&n(!!a),Gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=aA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return p_()||l_()||_d()}}const NA=xA;var Om="@firebase/auth",Dm="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function LA(t){yi(new Pr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;G(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:m_(t)},h=new hk(r,i,s,u);return yk(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),yi(new Pr("auth-internal",e=>{const n=Cl(e.getProvider("auth").getImmediate());return(r=>new OA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kn(Om,Dm,DA(t)),Kn(Om,Dm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MA=5*60,VA=Gv("authIdTokenMaxAge")||MA;let Lm=null;const bA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>VA)return;const i=n==null?void 0:n.token;Lm!==i&&(Lm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function UA(t=Xv()){const e=dd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=gk(t,{popupRedirectResolver:NA,persistence:[$k,E_,T_]}),r=Gv("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const a=bA(s.toString());Ck(n,a,()=>a(n.currentUser)),Ak(n,l=>a(l))}}const i=Hv("auth");return i&&vk(n,`http://${i}`),n}function jA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}dk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=bt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",jA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});LA("Browser");var Mm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var O_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,g){function w(){}w.prototype=g.prototype,E.D=g.prototype,E.prototype=new w,E.prototype.constructor=E,E.C=function(I,P,x){for(var T=Array(arguments.length-2),It=2;It<arguments.length;It++)T[It-2]=arguments[It];return g.prototype[P].apply(I,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,g,w){w||(w=0);var I=Array(16);if(typeof g=="string")for(var P=0;16>P;++P)I[P]=g.charCodeAt(w++)|g.charCodeAt(w++)<<8|g.charCodeAt(w++)<<16|g.charCodeAt(w++)<<24;else for(P=0;16>P;++P)I[P]=g[w++]|g[w++]<<8|g[w++]<<16|g[w++]<<24;g=E.g[0],w=E.g[1],P=E.g[2];var x=E.g[3],T=g+(x^w&(P^x))+I[0]+3614090360&4294967295;g=w+(T<<7&4294967295|T>>>25),T=x+(P^g&(w^P))+I[1]+3905402710&4294967295,x=g+(T<<12&4294967295|T>>>20),T=P+(w^x&(g^w))+I[2]+606105819&4294967295,P=x+(T<<17&4294967295|T>>>15),T=w+(g^P&(x^g))+I[3]+3250441966&4294967295,w=P+(T<<22&4294967295|T>>>10),T=g+(x^w&(P^x))+I[4]+4118548399&4294967295,g=w+(T<<7&4294967295|T>>>25),T=x+(P^g&(w^P))+I[5]+1200080426&4294967295,x=g+(T<<12&4294967295|T>>>20),T=P+(w^x&(g^w))+I[6]+2821735955&4294967295,P=x+(T<<17&4294967295|T>>>15),T=w+(g^P&(x^g))+I[7]+4249261313&4294967295,w=P+(T<<22&4294967295|T>>>10),T=g+(x^w&(P^x))+I[8]+1770035416&4294967295,g=w+(T<<7&4294967295|T>>>25),T=x+(P^g&(w^P))+I[9]+2336552879&4294967295,x=g+(T<<12&4294967295|T>>>20),T=P+(w^x&(g^w))+I[10]+4294925233&4294967295,P=x+(T<<17&4294967295|T>>>15),T=w+(g^P&(x^g))+I[11]+2304563134&4294967295,w=P+(T<<22&4294967295|T>>>10),T=g+(x^w&(P^x))+I[12]+1804603682&4294967295,g=w+(T<<7&4294967295|T>>>25),T=x+(P^g&(w^P))+I[13]+4254626195&4294967295,x=g+(T<<12&4294967295|T>>>20),T=P+(w^x&(g^w))+I[14]+2792965006&4294967295,P=x+(T<<17&4294967295|T>>>15),T=w+(g^P&(x^g))+I[15]+1236535329&4294967295,w=P+(T<<22&4294967295|T>>>10),T=g+(P^x&(w^P))+I[1]+4129170786&4294967295,g=w+(T<<5&4294967295|T>>>27),T=x+(w^P&(g^w))+I[6]+3225465664&4294967295,x=g+(T<<9&4294967295|T>>>23),T=P+(g^w&(x^g))+I[11]+643717713&4294967295,P=x+(T<<14&4294967295|T>>>18),T=w+(x^g&(P^x))+I[0]+3921069994&4294967295,w=P+(T<<20&4294967295|T>>>12),T=g+(P^x&(w^P))+I[5]+3593408605&4294967295,g=w+(T<<5&4294967295|T>>>27),T=x+(w^P&(g^w))+I[10]+38016083&4294967295,x=g+(T<<9&4294967295|T>>>23),T=P+(g^w&(x^g))+I[15]+3634488961&4294967295,P=x+(T<<14&4294967295|T>>>18),T=w+(x^g&(P^x))+I[4]+3889429448&4294967295,w=P+(T<<20&4294967295|T>>>12),T=g+(P^x&(w^P))+I[9]+568446438&4294967295,g=w+(T<<5&4294967295|T>>>27),T=x+(w^P&(g^w))+I[14]+3275163606&4294967295,x=g+(T<<9&4294967295|T>>>23),T=P+(g^w&(x^g))+I[3]+4107603335&4294967295,P=x+(T<<14&4294967295|T>>>18),T=w+(x^g&(P^x))+I[8]+1163531501&4294967295,w=P+(T<<20&4294967295|T>>>12),T=g+(P^x&(w^P))+I[13]+2850285829&4294967295,g=w+(T<<5&4294967295|T>>>27),T=x+(w^P&(g^w))+I[2]+4243563512&4294967295,x=g+(T<<9&4294967295|T>>>23),T=P+(g^w&(x^g))+I[7]+1735328473&4294967295,P=x+(T<<14&4294967295|T>>>18),T=w+(x^g&(P^x))+I[12]+2368359562&4294967295,w=P+(T<<20&4294967295|T>>>12),T=g+(w^P^x)+I[5]+4294588738&4294967295,g=w+(T<<4&4294967295|T>>>28),T=x+(g^w^P)+I[8]+2272392833&4294967295,x=g+(T<<11&4294967295|T>>>21),T=P+(x^g^w)+I[11]+1839030562&4294967295,P=x+(T<<16&4294967295|T>>>16),T=w+(P^x^g)+I[14]+4259657740&4294967295,w=P+(T<<23&4294967295|T>>>9),T=g+(w^P^x)+I[1]+2763975236&4294967295,g=w+(T<<4&4294967295|T>>>28),T=x+(g^w^P)+I[4]+1272893353&4294967295,x=g+(T<<11&4294967295|T>>>21),T=P+(x^g^w)+I[7]+4139469664&4294967295,P=x+(T<<16&4294967295|T>>>16),T=w+(P^x^g)+I[10]+3200236656&4294967295,w=P+(T<<23&4294967295|T>>>9),T=g+(w^P^x)+I[13]+681279174&4294967295,g=w+(T<<4&4294967295|T>>>28),T=x+(g^w^P)+I[0]+3936430074&4294967295,x=g+(T<<11&4294967295|T>>>21),T=P+(x^g^w)+I[3]+3572445317&4294967295,P=x+(T<<16&4294967295|T>>>16),T=w+(P^x^g)+I[6]+76029189&4294967295,w=P+(T<<23&4294967295|T>>>9),T=g+(w^P^x)+I[9]+3654602809&4294967295,g=w+(T<<4&4294967295|T>>>28),T=x+(g^w^P)+I[12]+3873151461&4294967295,x=g+(T<<11&4294967295|T>>>21),T=P+(x^g^w)+I[15]+530742520&4294967295,P=x+(T<<16&4294967295|T>>>16),T=w+(P^x^g)+I[2]+3299628645&4294967295,w=P+(T<<23&4294967295|T>>>9),T=g+(P^(w|~x))+I[0]+4096336452&4294967295,g=w+(T<<6&4294967295|T>>>26),T=x+(w^(g|~P))+I[7]+1126891415&4294967295,x=g+(T<<10&4294967295|T>>>22),T=P+(g^(x|~w))+I[14]+2878612391&4294967295,P=x+(T<<15&4294967295|T>>>17),T=w+(x^(P|~g))+I[5]+4237533241&4294967295,w=P+(T<<21&4294967295|T>>>11),T=g+(P^(w|~x))+I[12]+1700485571&4294967295,g=w+(T<<6&4294967295|T>>>26),T=x+(w^(g|~P))+I[3]+2399980690&4294967295,x=g+(T<<10&4294967295|T>>>22),T=P+(g^(x|~w))+I[10]+4293915773&4294967295,P=x+(T<<15&4294967295|T>>>17),T=w+(x^(P|~g))+I[1]+2240044497&4294967295,w=P+(T<<21&4294967295|T>>>11),T=g+(P^(w|~x))+I[8]+1873313359&4294967295,g=w+(T<<6&4294967295|T>>>26),T=x+(w^(g|~P))+I[15]+4264355552&4294967295,x=g+(T<<10&4294967295|T>>>22),T=P+(g^(x|~w))+I[6]+2734768916&4294967295,P=x+(T<<15&4294967295|T>>>17),T=w+(x^(P|~g))+I[13]+1309151649&4294967295,w=P+(T<<21&4294967295|T>>>11),T=g+(P^(w|~x))+I[4]+4149444226&4294967295,g=w+(T<<6&4294967295|T>>>26),T=x+(w^(g|~P))+I[11]+3174756917&4294967295,x=g+(T<<10&4294967295|T>>>22),T=P+(g^(x|~w))+I[2]+718787259&4294967295,P=x+(T<<15&4294967295|T>>>17),T=w+(x^(P|~g))+I[9]+3951481745&4294967295,E.g[0]=E.g[0]+g&4294967295,E.g[1]=E.g[1]+(P+(T<<21&4294967295|T>>>11))&4294967295,E.g[2]=E.g[2]+P&4294967295,E.g[3]=E.g[3]+x&4294967295}r.prototype.u=function(E,g){g===void 0&&(g=E.length);for(var w=g-this.blockSize,I=this.B,P=this.h,x=0;x<g;){if(P==0)for(;x<=w;)i(this,E,x),x+=this.blockSize;if(typeof E=="string"){for(;x<g;)if(I[P++]=E.charCodeAt(x++),P==this.blockSize){i(this,I),P=0;break}}else for(;x<g;)if(I[P++]=E[x++],P==this.blockSize){i(this,I),P=0;break}}this.h=P,this.o+=g},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var g=1;g<E.length-8;++g)E[g]=0;var w=8*this.o;for(g=E.length-8;g<E.length;++g)E[g]=w&255,w/=256;for(this.u(E),E=Array(16),g=w=0;4>g;++g)for(var I=0;32>I;I+=8)E[w++]=this.g[g]>>>I&255;return E};function s(E,g){var w=l;return Object.prototype.hasOwnProperty.call(w,E)?w[E]:w[E]=g(E)}function a(E,g){this.h=g;for(var w=[],I=!0,P=E.length-1;0<=P;P--){var x=E[P]|0;I&&x==g||(w[P]=x,I=!1)}this.g=w}var l={};function u(E){return-128<=E&&128>E?s(E,function(g){return new a([g|0],0>g?-1:0)}):new a([E|0],0>E?-1:0)}function h(E){if(isNaN(E)||!isFinite(E))return m;if(0>E)return D(h(-E));for(var g=[],w=1,I=0;E>=w;I++)g[I]=E/w|0,w*=4294967296;return new a(g,0)}function f(E,g){if(E.length==0)throw Error("number format error: empty string");if(g=g||10,2>g||36<g)throw Error("radix out of range: "+g);if(E.charAt(0)=="-")return D(f(E.substring(1),g));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var w=h(Math.pow(g,8)),I=m,P=0;P<E.length;P+=8){var x=Math.min(8,E.length-P),T=parseInt(E.substring(P,P+x),g);8>x?(x=h(Math.pow(g,x)),I=I.j(x).add(h(T))):(I=I.j(w),I=I.add(h(T)))}return I}var m=u(0),y=u(1),A=u(16777216);t=a.prototype,t.m=function(){if(N(this))return-D(this).m();for(var E=0,g=1,w=0;w<this.g.length;w++){var I=this.i(w);E+=(0<=I?I:4294967296+I)*g,g*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(S(this))return"0";if(N(this))return"-"+D(this).toString(E);for(var g=h(Math.pow(E,6)),w=this,I="";;){var P=L(w,g).g;w=_(w,P.j(g));var x=((0<w.g.length?w.g[0]:w.h)>>>0).toString(E);if(w=P,S(w))return x+I;for(;6>x.length;)x="0"+x;I=x+I}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function S(E){if(E.h!=0)return!1;for(var g=0;g<E.g.length;g++)if(E.g[g]!=0)return!1;return!0}function N(E){return E.h==-1}t.l=function(E){return E=_(this,E),N(E)?-1:S(E)?0:1};function D(E){for(var g=E.g.length,w=[],I=0;I<g;I++)w[I]=~E.g[I];return new a(w,~E.h).add(y)}t.abs=function(){return N(this)?D(this):this},t.add=function(E){for(var g=Math.max(this.g.length,E.g.length),w=[],I=0,P=0;P<=g;P++){var x=I+(this.i(P)&65535)+(E.i(P)&65535),T=(x>>>16)+(this.i(P)>>>16)+(E.i(P)>>>16);I=T>>>16,x&=65535,T&=65535,w[P]=T<<16|x}return new a(w,w[w.length-1]&-2147483648?-1:0)};function _(E,g){return E.add(D(g))}t.j=function(E){if(S(this)||S(E))return m;if(N(this))return N(E)?D(this).j(D(E)):D(D(this).j(E));if(N(E))return D(this.j(D(E)));if(0>this.l(A)&&0>E.l(A))return h(this.m()*E.m());for(var g=this.g.length+E.g.length,w=[],I=0;I<2*g;I++)w[I]=0;for(I=0;I<this.g.length;I++)for(var P=0;P<E.g.length;P++){var x=this.i(I)>>>16,T=this.i(I)&65535,It=E.i(P)>>>16,ir=E.i(P)&65535;w[2*I+2*P]+=T*ir,v(w,2*I+2*P),w[2*I+2*P+1]+=x*ir,v(w,2*I+2*P+1),w[2*I+2*P+1]+=T*It,v(w,2*I+2*P+1),w[2*I+2*P+2]+=x*It,v(w,2*I+2*P+2)}for(I=0;I<g;I++)w[I]=w[2*I+1]<<16|w[2*I];for(I=g;I<2*g;I++)w[I]=0;return new a(w,0)};function v(E,g){for(;(E[g]&65535)!=E[g];)E[g+1]+=E[g]>>>16,E[g]&=65535,g++}function k(E,g){this.g=E,this.h=g}function L(E,g){if(S(g))throw Error("division by zero");if(S(E))return new k(m,m);if(N(E))return g=L(D(E),g),new k(D(g.g),D(g.h));if(N(g))return g=L(E,D(g)),new k(D(g.g),g.h);if(30<E.g.length){if(N(E)||N(g))throw Error("slowDivide_ only works with positive integers.");for(var w=y,I=g;0>=I.l(E);)w=j(w),I=j(I);var P=z(w,1),x=z(I,1);for(I=z(I,2),w=z(w,2);!S(I);){var T=x.add(I);0>=T.l(E)&&(P=P.add(w),x=T),I=z(I,1),w=z(w,1)}return g=_(E,P.j(g)),new k(P,g)}for(P=m;0<=E.l(g);){for(w=Math.max(1,Math.floor(E.m()/g.m())),I=Math.ceil(Math.log(w)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),x=h(w),T=x.j(g);N(T)||0<T.l(E);)w-=I,x=h(w),T=x.j(g);S(x)&&(x=y),P=P.add(x),E=_(E,T)}return new k(P,E)}t.A=function(E){return L(this,E).h},t.and=function(E){for(var g=Math.max(this.g.length,E.g.length),w=[],I=0;I<g;I++)w[I]=this.i(I)&E.i(I);return new a(w,this.h&E.h)},t.or=function(E){for(var g=Math.max(this.g.length,E.g.length),w=[],I=0;I<g;I++)w[I]=this.i(I)|E.i(I);return new a(w,this.h|E.h)},t.xor=function(E){for(var g=Math.max(this.g.length,E.g.length),w=[],I=0;I<g;I++)w[I]=this.i(I)^E.i(I);return new a(w,this.h^E.h)};function j(E){for(var g=E.g.length+1,w=[],I=0;I<g;I++)w[I]=E.i(I)<<1|E.i(I-1)>>>31;return new a(w,E.h)}function z(E,g){var w=g>>5;g%=32;for(var I=E.g.length-w,P=[],x=0;x<I;x++)P[x]=0<g?E.i(x+w)>>>g|E.i(x+w+1)<<32-g:E.i(x+w);return new a(P,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,O_=a}).apply(typeof Mm<"u"?Mm:typeof self<"u"?self:typeof window<"u"?window:{});var Qo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var D_,ls,L_,ya,th,M_,V_,b_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,c,d){return o==Array.prototype||o==Object.prototype||(o[c]=d.value),o};function n(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Qo=="object"&&Qo];for(var c=0;c<o.length;++c){var d=o[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(o,c){if(c)e:{var d=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var R=o[p];if(!(R in d))break e;d=d[R]}o=o[o.length-1],p=d[o],c=c(p),c!=p&&c!=null&&e(d,o,{configurable:!0,writable:!0,value:c})}}function s(o,c){o instanceof String&&(o+="");var d=0,p=!1,R={next:function(){if(!p&&d<o.length){var O=d++;return{value:c(O,o[O]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}i("Array.prototype.values",function(o){return o||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function u(o){var c=typeof o;return c=c!="object"?c:o?Array.isArray(o)?"array":c:"null",c=="array"||c=="object"&&typeof o.length=="number"}function h(o){var c=typeof o;return c=="object"&&o!=null||c=="function"}function f(o,c,d){return o.call.apply(o.bind,arguments)}function m(o,c,d){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),o.apply(c,R)}}return function(){return o.apply(c,arguments)}}function y(o,c,d){return y=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:m,y.apply(null,arguments)}function A(o,c){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function S(o,c){function d(){}d.prototype=c.prototype,o.aa=c.prototype,o.prototype=new d,o.prototype.constructor=o,o.Qb=function(p,R,O){for(var F=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)F[ie-2]=arguments[ie];return c.prototype[R].apply(p,F)}}function N(o){const c=o.length;if(0<c){const d=Array(c);for(let p=0;p<c;p++)d[p]=o[p];return d}return[]}function D(o,c){for(let d=1;d<arguments.length;d++){const p=arguments[d];if(u(p)){const R=o.length||0,O=p.length||0;o.length=R+O;for(let F=0;F<O;F++)o[R+F]=p[F]}else o.push(p)}}class _{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function v(o){return/^[\s\xa0]*$/.test(o)}function k(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function L(o){return L[" "](o),o}L[" "]=function(){};var j=k().indexOf("Gecko")!=-1&&!(k().toLowerCase().indexOf("webkit")!=-1&&k().indexOf("Edge")==-1)&&!(k().indexOf("Trident")!=-1||k().indexOf("MSIE")!=-1)&&k().indexOf("Edge")==-1;function z(o,c,d){for(const p in o)c.call(d,o[p],p,o)}function E(o,c){for(const d in o)c.call(void 0,o[d],d,o)}function g(o){const c={};for(const d in o)c[d]=o[d];return c}const w="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,c){let d,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(d in p)o[d]=p[d];for(let O=0;O<w.length;O++)d=w[O],Object.prototype.hasOwnProperty.call(p,d)&&(o[d]=p[d])}}function P(o){var c=1;o=o.split(":");const d=[];for(;0<c&&o.length;)d.push(o.shift()),c--;return o.length&&d.push(o.join(":")),d}function x(o){l.setTimeout(()=>{throw o},0)}function T(){var o=K;let c=null;return o.g&&(c=o.g,o.g=o.g.next,o.g||(o.h=null),c.next=null),c}class It{constructor(){this.h=this.g=null}add(c,d){const p=ir.get();p.set(c,d),this.h?this.h.next=p:this.g=p,this.h=p}}var ir=new _(()=>new Li,o=>o.reset());class Li{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Qt,B=!1,K=new It,q=()=>{const o=l.Promise.resolve(void 0);Qt=()=>{o.then(fe)}};var fe=()=>{for(var o;o=T();){try{o.h.call(o.g)}catch(d){x(d)}var c=ir;c.j(o),100>c.h&&(c.h++,o.next=c.g,c.g=o)}B=!1};function re(){this.s=this.s,this.C=this.C}re.prototype.s=!1,re.prototype.ma=function(){this.s||(this.s=!0,this.N())},re.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ee(o,c){this.type=o,this.g=this.target=c,this.defaultPrevented=!1}Ee.prototype.h=function(){this.defaultPrevented=!0};var Xt=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,c=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return o}();function Yt(o,c){if(Ee.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var d=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=c,c=o.relatedTarget){if(j){e:{try{L(c.nodeName);var R=!0;break e}catch{}R=!1}R||(c=null)}}else d=="mouseover"?c=o.fromElement:d=="mouseout"&&(c=o.toElement);this.relatedTarget=c,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Jt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Yt.aa.h.call(this)}}S(Yt,Ee);var Jt={2:"touch",3:"pen",4:"mouse"};Yt.prototype.h=function(){Yt.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var Zt="closure_listenable_"+(1e6*Math.random()|0),j0=0;function F0(o,c,d,p,R){this.listener=o,this.proxy=null,this.src=c,this.type=d,this.capture=!!p,this.ha=R,this.key=++j0,this.da=this.fa=!1}function fo(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function po(o){this.src=o,this.g={},this.h=0}po.prototype.add=function(o,c,d,p,R){var O=o.toString();o=this.g[O],o||(o=this.g[O]=[],this.h++);var F=Bl(o,c,p,R);return-1<F?(c=o[F],d||(c.fa=!1)):(c=new F0(c,this.src,O,!!p,R),c.fa=d,o.push(c)),c};function zl(o,c){var d=c.type;if(d in o.g){var p=o.g[d],R=Array.prototype.indexOf.call(p,c,void 0),O;(O=0<=R)&&Array.prototype.splice.call(p,R,1),O&&(fo(c),o.g[d].length==0&&(delete o.g[d],o.h--))}}function Bl(o,c,d,p){for(var R=0;R<o.length;++R){var O=o[R];if(!O.da&&O.listener==c&&O.capture==!!d&&O.ha==p)return R}return-1}var $l="closure_lm_"+(1e6*Math.random()|0),Hl={};function Wd(o,c,d,p,R){if(Array.isArray(c)){for(var O=0;O<c.length;O++)Wd(o,c[O],d,p,R);return null}return d=qd(d),o&&o[Zt]?o.K(c,d,h(p)?!!p.capture:!1,R):z0(o,c,d,!1,p,R)}function z0(o,c,d,p,R,O){if(!c)throw Error("Invalid event type");var F=h(R)?!!R.capture:!!R,ie=Gl(o);if(ie||(o[$l]=ie=new po(o)),d=ie.add(c,d,p,F,O),d.proxy)return d;if(p=B0(),d.proxy=p,p.src=o,p.listener=d,o.addEventListener)Xt||(R=F),R===void 0&&(R=!1),o.addEventListener(c.toString(),p,R);else if(o.attachEvent)o.attachEvent(Kd(c.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function B0(){function o(d){return c.call(o.src,o.listener,d)}const c=$0;return o}function Gd(o,c,d,p,R){if(Array.isArray(c))for(var O=0;O<c.length;O++)Gd(o,c[O],d,p,R);else p=h(p)?!!p.capture:!!p,d=qd(d),o&&o[Zt]?(o=o.i,c=String(c).toString(),c in o.g&&(O=o.g[c],d=Bl(O,d,p,R),-1<d&&(fo(O[d]),Array.prototype.splice.call(O,d,1),O.length==0&&(delete o.g[c],o.h--)))):o&&(o=Gl(o))&&(c=o.g[c.toString()],o=-1,c&&(o=Bl(c,d,p,R)),(d=-1<o?c[o]:null)&&Wl(d))}function Wl(o){if(typeof o!="number"&&o&&!o.da){var c=o.src;if(c&&c[Zt])zl(c.i,o);else{var d=o.type,p=o.proxy;c.removeEventListener?c.removeEventListener(d,p,o.capture):c.detachEvent?c.detachEvent(Kd(d),p):c.addListener&&c.removeListener&&c.removeListener(p),(d=Gl(c))?(zl(d,o),d.h==0&&(d.src=null,c[$l]=null)):fo(o)}}}function Kd(o){return o in Hl?Hl[o]:Hl[o]="on"+o}function $0(o,c){if(o.da)o=!0;else{c=new Yt(c,this);var d=o.listener,p=o.ha||o.src;o.fa&&Wl(o),o=d.call(p,c)}return o}function Gl(o){return o=o[$l],o instanceof po?o:null}var Kl="__closure_events_fn_"+(1e9*Math.random()>>>0);function qd(o){return typeof o=="function"?o:(o[Kl]||(o[Kl]=function(c){return o.handleEvent(c)}),o[Kl])}function $e(){re.call(this),this.i=new po(this),this.M=this,this.F=null}S($e,re),$e.prototype[Zt]=!0,$e.prototype.removeEventListener=function(o,c,d,p){Gd(this,o,c,d,p)};function tt(o,c){var d,p=o.F;if(p)for(d=[];p;p=p.F)d.push(p);if(o=o.M,p=c.type||c,typeof c=="string")c=new Ee(c,o);else if(c instanceof Ee)c.target=c.target||o;else{var R=c;c=new Ee(p,o),I(c,R)}if(R=!0,d)for(var O=d.length-1;0<=O;O--){var F=c.g=d[O];R=mo(F,p,!0,c)&&R}if(F=c.g=o,R=mo(F,p,!0,c)&&R,R=mo(F,p,!1,c)&&R,d)for(O=0;O<d.length;O++)F=c.g=d[O],R=mo(F,p,!1,c)&&R}$e.prototype.N=function(){if($e.aa.N.call(this),this.i){var o=this.i,c;for(c in o.g){for(var d=o.g[c],p=0;p<d.length;p++)fo(d[p]);delete o.g[c],o.h--}}this.F=null},$e.prototype.K=function(o,c,d,p){return this.i.add(String(o),c,!1,d,p)},$e.prototype.L=function(o,c,d,p){return this.i.add(String(o),c,!0,d,p)};function mo(o,c,d,p){if(c=o.i.g[String(c)],!c)return!0;c=c.concat();for(var R=!0,O=0;O<c.length;++O){var F=c[O];if(F&&!F.da&&F.capture==d){var ie=F.listener,Me=F.ha||F.src;F.fa&&zl(o.i,F),R=ie.call(Me,p)!==!1&&R}}return R&&!p.defaultPrevented}function Qd(o,c,d){if(typeof o=="function")d&&(o=y(o,d));else if(o&&typeof o.handleEvent=="function")o=y(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(o,c||0)}function Xd(o){o.g=Qd(()=>{o.g=null,o.i&&(o.i=!1,Xd(o))},o.l);const c=o.h;o.h=null,o.m.apply(null,c)}class H0 extends re{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:Xd(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mi(o){re.call(this),this.h=o,this.g={}}S(Mi,re);var Yd=[];function Jd(o){z(o.g,function(c,d){this.g.hasOwnProperty(d)&&Wl(c)},o),o.g={}}Mi.prototype.N=function(){Mi.aa.N.call(this),Jd(this)},Mi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ql=l.JSON.stringify,W0=l.JSON.parse,G0=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Ql(){}Ql.prototype.h=null;function Zd(o){return o.h||(o.h=o.i())}function ef(){}var Vi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Xl(){Ee.call(this,"d")}S(Xl,Ee);function Yl(){Ee.call(this,"c")}S(Yl,Ee);var sr={},tf=null;function go(){return tf=tf||new $e}sr.La="serverreachability";function nf(o){Ee.call(this,sr.La,o)}S(nf,Ee);function bi(o){const c=go();tt(c,new nf(c))}sr.STAT_EVENT="statevent";function rf(o,c){Ee.call(this,sr.STAT_EVENT,o),this.stat=c}S(rf,Ee);function nt(o){const c=go();tt(c,new rf(c,o))}sr.Ma="timingevent";function sf(o,c){Ee.call(this,sr.Ma,o),this.size=c}S(sf,Ee);function Ui(o,c){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},c)}function ji(){this.g=!0}ji.prototype.xa=function(){this.g=!1};function K0(o,c,d,p,R,O){o.info(function(){if(o.g)if(O)for(var F="",ie=O.split("&"),Me=0;Me<ie.length;Me++){var te=ie[Me].split("=");if(1<te.length){var He=te[0];te=te[1];var We=He.split("_");F=2<=We.length&&We[1]=="type"?F+(He+"="+te+"&"):F+(He+"=redacted&")}}else F=null;else F=O;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+c+`
`+d+`
`+F})}function q0(o,c,d,p,R,O,F){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+c+`
`+d+`
`+O+" "+F})}function Vr(o,c,d,p){o.info(function(){return"XMLHTTP TEXT ("+c+"): "+X0(o,d)+(p?" "+p:"")})}function Q0(o,c){o.info(function(){return"TIMEOUT: "+c})}ji.prototype.info=function(){};function X0(o,c){if(!o.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(o=0;o<d.length;o++)if(Array.isArray(d[o])){var p=d[o];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var O=R[0];if(O!="noop"&&O!="stop"&&O!="close")for(var F=1;F<R.length;F++)R[F]=""}}}}return ql(d)}catch{return c}}var yo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},of={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Jl;function vo(){}S(vo,Ql),vo.prototype.g=function(){return new XMLHttpRequest},vo.prototype.i=function(){return{}},Jl=new vo;function In(o,c,d,p){this.j=o,this.i=c,this.l=d,this.R=p||1,this.U=new Mi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new af}function af(){this.i=null,this.g="",this.h=!1}var lf={},Zl={};function eu(o,c,d){o.L=1,o.v=Io(en(c)),o.m=d,o.P=!0,uf(o,null)}function uf(o,c){o.F=Date.now(),_o(o),o.A=en(o.v);var d=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Tf(d.i,"t",p),o.C=0,d=o.j.J,o.h=new af,o.g=zf(o.j,d?c:null,!o.m),0<o.O&&(o.M=new H0(y(o.Y,o,o.g),o.O)),c=o.U,d=o.g,p=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Yd[0]=R.toString()),R=Yd);for(var O=0;O<R.length;O++){var F=Wd(d,R[O],p||c.handleEvent,!1,c.h||c);if(!F)break;c.g[F.key]=F}c=o.H?g(o.H):{},o.m?(o.u||(o.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,c)):(o.u="GET",o.g.ea(o.A,o.u,null,c)),bi(),K0(o.i,o.u,o.A,o.l,o.R,o.m)}In.prototype.ca=function(o){o=o.target;const c=this.M;c&&tn(o)==3?c.j():this.Y(o)},In.prototype.Y=function(o){try{if(o==this.g)e:{const We=tn(this.g);var c=this.g.Ba();const jr=this.g.Z();if(!(3>We)&&(We!=3||this.g&&(this.h.h||this.g.oa()||xf(this.g)))){this.J||We!=4||c==7||(c==8||0>=jr?bi(3):bi(2)),tu(this);var d=this.g.Z();this.X=d;t:if(cf(this)){var p=xf(this.g);o="";var R=p.length,O=tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){or(this),Fi(this);var F="";break t}this.h.i=new l.TextDecoder}for(c=0;c<R;c++)this.h.h=!0,o+=this.h.i.decode(p[c],{stream:!(O&&c==R-1)});p.length=0,this.h.g+=o,this.C=0,F=this.h.g}else F=this.g.oa();if(this.o=d==200,q0(this.i,this.u,this.A,this.l,this.R,We,d),this.o){if(this.T&&!this.K){t:{if(this.g){var ie,Me=this.g;if((ie=Me.g?Me.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!v(ie)){var te=ie;break t}}te=null}if(d=te)Vr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,nu(this,d);else{this.o=!1,this.s=3,nt(12),or(this),Fi(this);break e}}if(this.P){d=!0;let Rt;for(;!this.J&&this.C<F.length;)if(Rt=Y0(this,F),Rt==Zl){We==4&&(this.s=4,nt(14),d=!1),Vr(this.i,this.l,null,"[Incomplete Response]");break}else if(Rt==lf){this.s=4,nt(15),Vr(this.i,this.l,F,"[Invalid Chunk]"),d=!1;break}else Vr(this.i,this.l,Rt,null),nu(this,Rt);if(cf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),We!=4||F.length!=0||this.h.h||(this.s=1,nt(16),d=!1),this.o=this.o&&d,!d)Vr(this.i,this.l,F,"[Invalid Chunked Response]"),or(this),Fi(this);else if(0<F.length&&!this.W){this.W=!0;var He=this.j;He.g==this&&He.ba&&!He.M&&(He.j.info("Great, no buffering proxy detected. Bytes received: "+F.length),lu(He),He.M=!0,nt(11))}}else Vr(this.i,this.l,F,null),nu(this,F);We==4&&or(this),this.o&&!this.J&&(We==4?bf(this.j,this):(this.o=!1,_o(this)))}else pw(this.g),d==400&&0<F.indexOf("Unknown SID")?(this.s=3,nt(12)):(this.s=0,nt(13)),or(this),Fi(this)}}}catch{}finally{}};function cf(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Y0(o,c){var d=o.C,p=c.indexOf(`
`,d);return p==-1?Zl:(d=Number(c.substring(d,p)),isNaN(d)?lf:(p+=1,p+d>c.length?Zl:(c=c.slice(p,p+d),o.C=p+d,c)))}In.prototype.cancel=function(){this.J=!0,or(this)};function _o(o){o.S=Date.now()+o.I,hf(o,o.I)}function hf(o,c){if(o.B!=null)throw Error("WatchDog timer not null");o.B=Ui(y(o.ba,o),c)}function tu(o){o.B&&(l.clearTimeout(o.B),o.B=null)}In.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Q0(this.i,this.A),this.L!=2&&(bi(),nt(17)),or(this),this.s=2,Fi(this)):hf(this,this.S-o)};function Fi(o){o.j.G==0||o.J||bf(o.j,o)}function or(o){tu(o);var c=o.M;c&&typeof c.ma=="function"&&c.ma(),o.M=null,Jd(o.U),o.g&&(c=o.g,o.g=null,c.abort(),c.ma())}function nu(o,c){try{var d=o.j;if(d.G!=0&&(d.g==o||ru(d.h,o))){if(!o.K&&ru(d.h,o)&&d.G==3){try{var p=d.Da.g.parse(c)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<o.F)Po(d),Ao(d);else break e;au(d),nt(18)}}else d.za=R[1],0<d.za-d.T&&37500>R[2]&&d.F&&d.v==0&&!d.C&&(d.C=Ui(y(d.Za,d),6e3));if(1>=pf(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else lr(d,11)}else if((o.K||d.g==o)&&Po(d),!v(c))for(R=d.Da.g.parse(c),c=0;c<R.length;c++){let te=R[c];if(d.T=te[0],te=te[1],d.G==2)if(te[0]=="c"){d.K=te[1],d.ia=te[2];const He=te[3];He!=null&&(d.la=He,d.j.info("VER="+d.la));const We=te[4];We!=null&&(d.Aa=We,d.j.info("SVER="+d.Aa));const jr=te[5];jr!=null&&typeof jr=="number"&&0<jr&&(p=1.5*jr,d.L=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Rt=o.g;if(Rt){const xo=Rt.g?Rt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xo){var O=p.h;O.g||xo.indexOf("spdy")==-1&&xo.indexOf("quic")==-1&&xo.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(iu(O,O.h),O.h=null))}if(p.D){const uu=Rt.g?Rt.g.getResponseHeader("X-HTTP-Session-Id"):null;uu&&(p.ya=uu,le(p.I,p.D,uu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-o.F,d.j.info("Handshake RTT: "+d.R+"ms")),p=d;var F=o;if(p.qa=Ff(p,p.J?p.ia:null,p.W),F.K){mf(p.h,F);var ie=F,Me=p.L;Me&&(ie.I=Me),ie.B&&(tu(ie),_o(ie)),p.g=F}else Mf(p);0<d.i.length&&Co(d)}else te[0]!="stop"&&te[0]!="close"||lr(d,7);else d.G==3&&(te[0]=="stop"||te[0]=="close"?te[0]=="stop"?lr(d,7):ou(d):te[0]!="noop"&&d.l&&d.l.ta(te),d.v=0)}}bi(4)}catch{}}var J0=class{constructor(o,c){this.g=o,this.map=c}};function df(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ff(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function pf(o){return o.h?1:o.g?o.g.size:0}function ru(o,c){return o.h?o.h==c:o.g?o.g.has(c):!1}function iu(o,c){o.g?o.g.add(c):o.h=c}function mf(o,c){o.h&&o.h==c?o.h=null:o.g&&o.g.has(c)&&o.g.delete(c)}df.prototype.cancel=function(){if(this.i=gf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function gf(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let c=o.i;for(const d of o.g.values())c=c.concat(d.D);return c}return N(o.i)}function Z0(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(u(o)){for(var c=[],d=o.length,p=0;p<d;p++)c.push(o[p]);return c}c=[],d=0;for(p in o)c[d++]=o[p];return c}function ew(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(u(o)||typeof o=="string"){var c=[];o=o.length;for(var d=0;d<o;d++)c.push(d);return c}c=[],d=0;for(const p in o)c[d++]=p;return c}}}function yf(o,c){if(o.forEach&&typeof o.forEach=="function")o.forEach(c,void 0);else if(u(o)||typeof o=="string")Array.prototype.forEach.call(o,c,void 0);else for(var d=ew(o),p=Z0(o),R=p.length,O=0;O<R;O++)c.call(void 0,p[O],d&&d[O],o)}var vf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tw(o,c){if(o){o=o.split("&");for(var d=0;d<o.length;d++){var p=o[d].indexOf("="),R=null;if(0<=p){var O=o[d].substring(0,p);R=o[d].substring(p+1)}else O=o[d];c(O,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function ar(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof ar){this.h=o.h,wo(this,o.j),this.o=o.o,this.g=o.g,Eo(this,o.s),this.l=o.l;var c=o.i,d=new $i;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),_f(this,d),this.m=o.m}else o&&(c=String(o).match(vf))?(this.h=!1,wo(this,c[1]||"",!0),this.o=zi(c[2]||""),this.g=zi(c[3]||"",!0),Eo(this,c[4]),this.l=zi(c[5]||"",!0),_f(this,c[6]||"",!0),this.m=zi(c[7]||"")):(this.h=!1,this.i=new $i(null,this.h))}ar.prototype.toString=function(){var o=[],c=this.j;c&&o.push(Bi(c,wf,!0),":");var d=this.g;return(d||c=="file")&&(o.push("//"),(c=this.o)&&o.push(Bi(c,wf,!0),"@"),o.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&o.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&o.push("/"),o.push(Bi(d,d.charAt(0)=="/"?iw:rw,!0))),(d=this.i.toString())&&o.push("?",d),(d=this.m)&&o.push("#",Bi(d,ow)),o.join("")};function en(o){return new ar(o)}function wo(o,c,d){o.j=d?zi(c,!0):c,o.j&&(o.j=o.j.replace(/:$/,""))}function Eo(o,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);o.s=c}else o.s=null}function _f(o,c,d){c instanceof $i?(o.i=c,aw(o.i,o.h)):(d||(c=Bi(c,sw)),o.i=new $i(c,o.h))}function le(o,c,d){o.i.set(c,d)}function Io(o){return le(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function zi(o,c){return o?c?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function Bi(o,c,d){return typeof o=="string"?(o=encodeURI(o).replace(c,nw),d&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function nw(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var wf=/[#\/\?@]/g,rw=/[#\?:]/g,iw=/[#\?]/g,sw=/[#\?@]/g,ow=/#/g;function $i(o,c){this.h=this.g=null,this.i=o||null,this.j=!!c}function Tn(o){o.g||(o.g=new Map,o.h=0,o.i&&tw(o.i,function(c,d){o.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=$i.prototype,t.add=function(o,c){Tn(this),this.i=null,o=br(this,o);var d=this.g.get(o);return d||this.g.set(o,d=[]),d.push(c),this.h+=1,this};function Ef(o,c){Tn(o),c=br(o,c),o.g.has(c)&&(o.i=null,o.h-=o.g.get(c).length,o.g.delete(c))}function If(o,c){return Tn(o),c=br(o,c),o.g.has(c)}t.forEach=function(o,c){Tn(this),this.g.forEach(function(d,p){d.forEach(function(R){o.call(c,R,p,this)},this)},this)},t.na=function(){Tn(this);const o=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let p=0;p<c.length;p++){const R=o[p];for(let O=0;O<R.length;O++)d.push(c[p])}return d},t.V=function(o){Tn(this);let c=[];if(typeof o=="string")If(this,o)&&(c=c.concat(this.g.get(br(this,o))));else{o=Array.from(this.g.values());for(let d=0;d<o.length;d++)c=c.concat(o[d])}return c},t.set=function(o,c){return Tn(this),this.i=null,o=br(this,o),If(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[c]),this.h+=1,this},t.get=function(o,c){return o?(o=this.V(o),0<o.length?String(o[0]):c):c};function Tf(o,c,d){Ef(o,c),0<d.length&&(o.i=null,o.g.set(br(o,c),N(d)),o.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var p=c[d];const O=encodeURIComponent(String(p)),F=this.V(p);for(p=0;p<F.length;p++){var R=O;F[p]!==""&&(R+="="+encodeURIComponent(String(F[p]))),o.push(R)}}return this.i=o.join("&")};function br(o,c){return c=String(c),o.j&&(c=c.toLowerCase()),c}function aw(o,c){c&&!o.j&&(Tn(o),o.i=null,o.g.forEach(function(d,p){var R=p.toLowerCase();p!=R&&(Ef(this,p),Tf(this,R,d))},o)),o.j=c}function lw(o,c){const d=new ji;if(l.Image){const p=new Image;p.onload=A(Sn,d,"TestLoadImage: loaded",!0,c,p),p.onerror=A(Sn,d,"TestLoadImage: error",!1,c,p),p.onabort=A(Sn,d,"TestLoadImage: abort",!1,c,p),p.ontimeout=A(Sn,d,"TestLoadImage: timeout",!1,c,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else c(!1)}function uw(o,c){const d=new ji,p=new AbortController,R=setTimeout(()=>{p.abort(),Sn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(o,{signal:p.signal}).then(O=>{clearTimeout(R),O.ok?Sn(d,"TestPingServer: ok",!0,c):Sn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),Sn(d,"TestPingServer: error",!1,c)})}function Sn(o,c,d,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(d)}catch{}}function cw(){this.g=new G0}function hw(o,c,d){const p=d||"";try{yf(o,function(R,O){let F=R;h(R)&&(F=ql(R)),c.push(p+O+"="+encodeURIComponent(F))})}catch(R){throw c.push(p+"type="+encodeURIComponent("_badmap")),R}}function To(o){this.l=o.Ub||null,this.j=o.eb||!1}S(To,Ql),To.prototype.g=function(){return new So(this.l,this.j)},To.prototype.i=function(o){return function(){return o}}({});function So(o,c){$e.call(this),this.D=o,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(So,$e),t=So.prototype,t.open=function(o,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=c,this.readyState=1,Wi(this)},t.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(c.body=o),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Hi(this)),this.readyState=0},t.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Wi(this)),this.g&&(this.readyState=3,Wi(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Sf(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Sf(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}t.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var c=o.value?o.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!o.done}))&&(this.response=this.responseText+=c)}o.done?Hi(this):Wi(this),this.readyState==3&&Sf(this)}},t.Ra=function(o){this.g&&(this.response=this.responseText=o,Hi(this))},t.Qa=function(o){this.g&&(this.response=o,Hi(this))},t.ga=function(){this.g&&Hi(this)};function Hi(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Wi(o)}t.setRequestHeader=function(o,c){this.u.append(o,c)},t.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,o.push(d[0]+": "+d[1]),d=c.next();return o.join(`\r
`)};function Wi(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(So.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function kf(o){let c="";return z(o,function(d,p){c+=p,c+=":",c+=d,c+=`\r
`}),c}function su(o,c,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=kf(d),typeof o=="string"?d!=null&&encodeURIComponent(String(d)):le(o,c,d))}function ve(o){$e.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(ve,$e);var dw=/^https?$/i,fw=["POST","PUT"];t=ve.prototype,t.Ha=function(o){this.J=o},t.ea=function(o,c,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);c=c?c.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Jl.g(),this.v=this.o?Zd(this.o):Zd(Jl),this.g.onreadystatechange=y(this.Ea,this);try{this.B=!0,this.g.open(c,String(o),!0),this.B=!1}catch(O){Af(this,O);return}if(o=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)d.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const O of p.keys())d.set(O,p.get(O));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),R=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(fw,c,void 0))||p||R||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,F]of d)this.g.setRequestHeader(O,F);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Rf(this),this.u=!0,this.g.send(o),this.u=!1}catch(O){Af(this,O)}};function Af(o,c){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=c,o.m=5,Cf(o),ko(o)}function Cf(o){o.A||(o.A=!0,tt(o,"complete"),tt(o,"error"))}t.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,tt(this,"complete"),tt(this,"abort"),ko(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ko(this,!0)),ve.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Pf(this):this.bb())},t.bb=function(){Pf(this)};function Pf(o){if(o.h&&typeof a<"u"&&(!o.v[1]||tn(o)!=4||o.Z()!=2)){if(o.u&&tn(o)==4)Qd(o.Ea,0,o);else if(tt(o,"readystatechange"),tn(o)==4){o.h=!1;try{const F=o.Z();e:switch(F){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var p;if(p=F===0){var R=String(o.D).match(vf)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),p=!dw.test(R?R.toLowerCase():"")}d=p}if(d)tt(o,"complete"),tt(o,"success");else{o.m=6;try{var O=2<tn(o)?o.g.statusText:""}catch{O=""}o.l=O+" ["+o.Z()+"]",Cf(o)}}finally{ko(o)}}}}function ko(o,c){if(o.g){Rf(o);const d=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,c||tt(o,"ready");try{d.onreadystatechange=p}catch{}}}function Rf(o){o.I&&(l.clearTimeout(o.I),o.I=null)}t.isActive=function(){return!!this.g};function tn(o){return o.g?o.g.readyState:0}t.Z=function(){try{return 2<tn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(o){if(this.g){var c=this.g.responseText;return o&&c.indexOf(o)==0&&(c=c.substring(o.length)),W0(c)}};function xf(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function pw(o){const c={};o=(o.g&&2<=tn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(v(o[p]))continue;var d=P(o[p]);const R=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=c[R]||[];c[R]=O,O.push(d)}E(c,function(p){return p.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Gi(o,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[o]||c}function Nf(o){this.Aa=0,this.i=[],this.j=new ji,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Gi("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Gi("baseRetryDelayMs",5e3,o),this.cb=Gi("retryDelaySeedMs",1e4,o),this.Wa=Gi("forwardChannelMaxRetries",2,o),this.wa=Gi("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new df(o&&o.concurrentRequestLimit),this.Da=new cw,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Nf.prototype,t.la=8,t.G=1,t.connect=function(o,c,d,p){nt(0),this.W=o,this.H=c||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.I=Ff(this,null,this.W),Co(this)};function ou(o){if(Of(o),o.G==3){var c=o.U++,d=en(o.I);if(le(d,"SID",o.K),le(d,"RID",c),le(d,"TYPE","terminate"),Ki(o,d),c=new In(o,o.j,c),c.L=2,c.v=Io(en(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=zf(c.j,null),c.g.ea(c.v)),c.F=Date.now(),_o(c)}jf(o)}function Ao(o){o.g&&(lu(o),o.g.cancel(),o.g=null)}function Of(o){Ao(o),o.u&&(l.clearTimeout(o.u),o.u=null),Po(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function Co(o){if(!ff(o.h)&&!o.s){o.s=!0;var c=o.Ga;Qt||q(),B||(Qt(),B=!0),K.add(c,o),o.B=0}}function mw(o,c){return pf(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=c.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=Ui(y(o.Ga,o,c),Uf(o,o.B)),o.B++,!0)}t.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new In(this,this.j,o);let O=this.o;if(this.S&&(O?(O=g(O),I(O,this.S)):O=this.S),this.m!==null||this.O||(R.H=O,O=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(c+=p,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Lf(this,R,c),d=en(this.I),le(d,"RID",o),le(d,"CVER",22),this.D&&le(d,"X-HTTP-Session-Id",this.D),Ki(this,d),O&&(this.O?c="headers="+encodeURIComponent(String(kf(O)))+"&"+c:this.m&&su(d,this.m,O)),iu(this.h,R),this.Ua&&le(d,"TYPE","init"),this.P?(le(d,"$req",c),le(d,"SID","null"),R.T=!0,eu(R,d,null)):eu(R,d,c),this.G=2}}else this.G==3&&(o?Df(this,o):this.i.length==0||ff(this.h)||Df(this))};function Df(o,c){var d;c?d=c.l:d=o.U++;const p=en(o.I);le(p,"SID",o.K),le(p,"RID",d),le(p,"AID",o.T),Ki(o,p),o.m&&o.o&&su(p,o.m,o.o),d=new In(o,o.j,d,o.B+1),o.m===null&&(d.H=o.o),c&&(o.i=c.D.concat(o.i)),c=Lf(o,d,1e3),d.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),iu(o.h,d),eu(d,p,c)}function Ki(o,c){o.H&&z(o.H,function(d,p){le(c,p,d)}),o.l&&yf({},function(d,p){le(c,p,d)})}function Lf(o,c,d){d=Math.min(o.i.length,d);var p=o.l?y(o.l.Na,o.l,o):null;e:{var R=o.i;let O=-1;for(;;){const F=["count="+d];O==-1?0<d?(O=R[0].g,F.push("ofs="+O)):O=0:F.push("ofs="+O);let ie=!0;for(let Me=0;Me<d;Me++){let te=R[Me].g;const He=R[Me].map;if(te-=O,0>te)O=Math.max(0,R[Me].g-100),ie=!1;else try{hw(He,F,"req"+te+"_")}catch{p&&p(He)}}if(ie){p=F.join("&");break e}}}return o=o.i.splice(0,d),c.D=o,p}function Mf(o){if(!o.g&&!o.u){o.Y=1;var c=o.Fa;Qt||q(),B||(Qt(),B=!0),K.add(c,o),o.v=0}}function au(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=Ui(y(o.Fa,o),Uf(o,o.v)),o.v++,!0)}t.Fa=function(){if(this.u=null,Vf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=Ui(y(this.ab,this),o)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,nt(10),Ao(this),Vf(this))};function lu(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Vf(o){o.g=new In(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var c=en(o.qa);le(c,"RID","rpc"),le(c,"SID",o.K),le(c,"AID",o.T),le(c,"CI",o.F?"0":"1"),!o.F&&o.ja&&le(c,"TO",o.ja),le(c,"TYPE","xmlhttp"),Ki(o,c),o.m&&o.o&&su(c,o.m,o.o),o.L&&(o.g.I=o.L);var d=o.g;o=o.ia,d.L=1,d.v=Io(en(c)),d.m=null,d.P=!0,uf(d,o)}t.Za=function(){this.C!=null&&(this.C=null,Ao(this),au(this),nt(19))};function Po(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function bf(o,c){var d=null;if(o.g==c){Po(o),lu(o),o.g=null;var p=2}else if(ru(o.h,c))d=c.D,mf(o.h,c),p=1;else return;if(o.G!=0){if(c.o)if(p==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var R=o.B;p=go(),tt(p,new sf(p,d)),Co(o)}else Mf(o);else if(R=c.s,R==3||R==0&&0<c.X||!(p==1&&mw(o,c)||p==2&&au(o)))switch(d&&0<d.length&&(c=o.h,c.i=c.i.concat(d)),R){case 1:lr(o,5);break;case 4:lr(o,10);break;case 3:lr(o,6);break;default:lr(o,2)}}}function Uf(o,c){let d=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(d*=2),d*c}function lr(o,c){if(o.j.info("Error code "+c),c==2){var d=y(o.fb,o),p=o.Xa;const R=!p;p=new ar(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||wo(p,"https"),Io(p),R?lw(p.toString(),d):uw(p.toString(),d)}else nt(2);o.G=0,o.l&&o.l.sa(c),jf(o),Of(o)}t.fb=function(o){o?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function jf(o){if(o.G=0,o.ka=[],o.l){const c=gf(o.h);(c.length!=0||o.i.length!=0)&&(D(o.ka,c),D(o.ka,o.i),o.h.i.length=0,N(o.i),o.i.length=0),o.l.ra()}}function Ff(o,c,d){var p=d instanceof ar?en(d):new ar(d);if(p.g!="")c&&(p.g=c+"."+p.g),Eo(p,p.s);else{var R=l.location;p=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;var O=new ar(null);p&&wo(O,p),c&&(O.g=c),R&&Eo(O,R),d&&(O.l=d),p=O}return d=o.D,c=o.ya,d&&c&&le(p,d,c),le(p,"VER",o.la),Ki(o,p),p}function zf(o,c,d){if(c&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=o.Ca&&!o.pa?new ve(new To({eb:d})):new ve(o.pa),c.Ha(o.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Bf(){}t=Bf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Ro(){}Ro.prototype.g=function(o,c){return new ft(o,c)};function ft(o,c){$e.call(this),this.g=new Nf(c),this.l=o,this.h=c&&c.messageUrlParams||null,o=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(o?o["X-WebChannel-Content-Type"]=c.messageContentType:o={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(o?o["X-WebChannel-Client-Profile"]=c.va:o={"X-WebChannel-Client-Profile":c.va}),this.g.S=o,(o=c&&c.Sb)&&!v(o)&&(this.g.m=o),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!v(c)&&(this.g.D=c,o=this.h,o!==null&&c in o&&(o=this.h,c in o&&delete o[c])),this.j=new Ur(this)}S(ft,$e),ft.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ft.prototype.close=function(){ou(this.g)},ft.prototype.o=function(o){var c=this.g;if(typeof o=="string"){var d={};d.__data__=o,o=d}else this.u&&(d={},d.__data__=ql(o),o=d);c.i.push(new J0(c.Ya++,o)),c.G==3&&Co(c)},ft.prototype.N=function(){this.g.l=null,delete this.j,ou(this.g),delete this.g,ft.aa.N.call(this)};function $f(o){Xl.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var c=o.__sm__;if(c){e:{for(const d in c){o=d;break e}o=void 0}(this.i=o)&&(o=this.i,c=c!==null&&o in c?c[o]:void 0),this.data=c}else this.data=o}S($f,Xl);function Hf(){Yl.call(this),this.status=1}S(Hf,Yl);function Ur(o){this.g=o}S(Ur,Bf),Ur.prototype.ua=function(){tt(this.g,"a")},Ur.prototype.ta=function(o){tt(this.g,new $f(o))},Ur.prototype.sa=function(o){tt(this.g,new Hf)},Ur.prototype.ra=function(){tt(this.g,"b")},Ro.prototype.createWebChannel=Ro.prototype.g,ft.prototype.send=ft.prototype.o,ft.prototype.open=ft.prototype.m,ft.prototype.close=ft.prototype.close,b_=function(){return new Ro},V_=function(){return go()},M_=sr,th={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},yo.NO_ERROR=0,yo.TIMEOUT=8,yo.HTTP_ERROR=6,ya=yo,of.COMPLETE="complete",L_=of,ef.EventType=Vi,Vi.OPEN="a",Vi.CLOSE="b",Vi.ERROR="c",Vi.MESSAGE="d",$e.prototype.listen=$e.prototype.K,ls=ef,ve.prototype.listenOnce=ve.prototype.L,ve.prototype.getLastError=ve.prototype.Ka,ve.prototype.getLastErrorCode=ve.prototype.Ba,ve.prototype.getStatus=ve.prototype.Z,ve.prototype.getResponseJson=ve.prototype.Oa,ve.prototype.getResponseText=ve.prototype.oa,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Ha,D_=ve}).apply(typeof Qo<"u"?Qo:typeof self<"u"?self:typeof window<"u"?window:{});const Vm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Qe.UNAUTHENTICATED=new Qe(null),Qe.GOOGLE_CREDENTIALS=new Qe("google-credentials-uid"),Qe.FIRST_PARTY=new Qe("first-party-uid"),Qe.MOCK_USER=new Qe("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let xi="10.14.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=new cd("@firebase/firestore");function ns(){return xr.logLevel}function H(t,...e){if(xr.logLevel<=Y.DEBUG){const n=e.map(Sd);xr.debug(`Firestore (${xi}): ${t}`,...n)}}function Nr(t,...e){if(xr.logLevel<=Y.ERROR){const n=e.map(Sd);xr.error(`Firestore (${xi}): ${t}`,...n)}}function Ja(t,...e){if(xr.logLevel<=Y.WARN){const n=e.map(Sd);xr.warn(`Firestore (${xi}): ${t}`,...n)}}function Sd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t="Unexpected state"){const e=`FIRESTORE (${xi}) INTERNAL ASSERTION FAILED: `+t;throw Nr(e),new Error(e)}function Te(t,e){t||J()}function ae(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends En{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Er{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class FA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Qe.UNAUTHENTICATED))}shutdown(){}}class zA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class BA{constructor(e){this.t=e,this.currentUser=Qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Te(this.o===void 0);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Er;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Er,e.enqueueRetryable(()=>i(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Er)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string"),new U_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new Qe(e)}}class $A{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Qe.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class HA{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new $A(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class WA{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class GA{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){Te(this.o===void 0);const r=s=>{s.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,H("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.R=n.token,new WA(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=KA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function se(t,e){return t<e?-1:t>e?1:0}function _i(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new W(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new De(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?se(this.nanoseconds,e.nanoseconds):se(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new pe(e)}static min(){return new pe(new De(0,0))}static max(){return new pe(new De(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hs{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Hs.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Hs?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),a=n.get(i);if(s<a)return-1;if(s>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class we extends Hs{construct(e,n,r){return new we(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(b.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new we(n)}static emptyPath(){return new we([])}}const qA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Fe extends Hs{construct(e,n,r){return new Fe(e,n,r)}static isValidIdentifier(e){return qA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Fe.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Fe(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(b.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let a=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new W(b.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(a=!a,i++):l!=="."||a?(r+=l,i++):(s(),i++)}if(s(),a)throw new W(b.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Fe(n)}static emptyPath(){return new Fe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(we.fromString(e))}static fromName(e){return new Q(we.fromString(e).popFirst(5))}static empty(){return new Q(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new we(e.slice()))}}function QA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=pe.fromTimestamp(r===1e9?new De(n+1,0):new De(n,r));return new Yn(i,Q.empty(),e)}function XA(t){return new Yn(t.readTime,t.key,-1)}class Yn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Yn(pe.min(),Q.empty(),-1)}static max(){return new Yn(pe.max(),Q.empty(),-1)}}function YA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:se(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ZA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function F_(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==JA)throw t;H("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,r)=>{n(e)})}static reject(e){return new V((n,r)=>{r(e)})}static waitFor(e){return new V((n,r)=>{let i=0,s=0,a=!1;e.forEach(l=>{++i,l.next(()=>{++s,a&&s===i&&n()},u=>r(u))}),a=!0,s===i&&n()})}static or(e){let n=V.resolve(!1);for(const r of e)n=n.next(i=>i?V.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new V((r,i)=>{const s=e.length,a=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{a[h]=f,++l,l===s&&r(a)},f=>i(f))}})}static doWhile(e,n){return new V((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function e2(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function xl(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ie(r),this.se=r=>n.writeSequenceNumber(r))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}z_.oe=-1;function kd(t){return t==null}function Za(t){return t===0&&1/t==-1/0}function t2(t){return typeof t=="number"&&Number.isInteger(t)&&!Za(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ni(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function B_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n){this.comparator=e,this.root=n||Ue.EMPTY}insert(e,n){return new dt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new dt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Xo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Xo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Xo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Xo(this.root,e,this.comparator,!0)}}class Xo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ue.RED,this.left=i??Ue.EMPTY,this.right=s??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ue(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ue.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ue(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new dt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Um(this.data.getIterator())}getIteratorFrom(e){return new Um(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Je(this.comparator);return n.data=e,n}}class Um{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.fields=e,e.sort(Fe.comparator)}static empty(){return new yt([])}unionWith(e){let n=new Je(Fe.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _i(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new n2("Invalid base64 string: "+s):s}}(e);return new Kt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let a=0;a<i.length;++a)s+=String.fromCharCode(i[a]);return s}(e);return new Kt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return se(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Kt.EMPTY_BYTE_STRING=new Kt("");const r2=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Or(t){if(Te(!!t),typeof t=="string"){let e=0;const n=r2.exec(t);if(Te(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ws(t){return typeof t=="string"?Kt.fromBase64String(t):Kt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ad(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function $_(t){const e=t.mapValue.fields.__previous_value__;return Ad(e)?$_(e):e}function el(t){const e=Or(t.mapValue.fields.__local_write_time__.timestampValue);return new De(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i2{constructor(e,n,r,i,s,a,l,u,h){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h}}class tl{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new tl("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof tl&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo={mapValue:{}};function wi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Ad(t)?4:o2(t)?9007199254740991:s2(t)?10:11:J()}function qt(t,e){if(t===e)return!0;const n=wi(t);if(n!==wi(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return el(t).isEqual(el(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const a=Or(i.timestampValue),l=Or(s.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Ws(i.bytesValue).isEqual(Ws(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return je(i.geoPointValue.latitude)===je(s.geoPointValue.latitude)&&je(i.geoPointValue.longitude)===je(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return je(i.integerValue)===je(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const a=je(i.doubleValue),l=je(s.doubleValue);return a===l?Za(a)===Za(l):isNaN(a)&&isNaN(l)}return!1}(t,e);case 9:return _i(t.arrayValue.values||[],e.arrayValue.values||[],qt);case 10:case 11:return function(i,s){const a=i.mapValue.fields||{},l=s.mapValue.fields||{};if(bm(a)!==bm(l))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(l[u]===void 0||!qt(a[u],l[u])))return!1;return!0}(t,e);default:return J()}}function Gs(t,e){return(t.values||[]).find(n=>qt(n,e))!==void 0}function Ei(t,e){if(t===e)return 0;const n=wi(t),r=wi(e);if(n!==r)return se(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return se(t.booleanValue,e.booleanValue);case 2:return function(s,a){const l=je(s.integerValue||s.doubleValue),u=je(a.integerValue||a.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return jm(t.timestampValue,e.timestampValue);case 4:return jm(el(t),el(e));case 5:return se(t.stringValue,e.stringValue);case 6:return function(s,a){const l=Ws(s),u=Ws(a);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,a){const l=s.split("/"),u=a.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=se(l[h],u[h]);if(f!==0)return f}return se(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,a){const l=se(je(s.latitude),je(a.latitude));return l!==0?l:se(je(s.longitude),je(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Fm(t.arrayValue,e.arrayValue);case 10:return function(s,a){var l,u,h,f;const m=s.fields||{},y=a.fields||{},A=(l=m.value)===null||l===void 0?void 0:l.arrayValue,S=(u=y.value)===null||u===void 0?void 0:u.arrayValue,N=se(((h=A==null?void 0:A.values)===null||h===void 0?void 0:h.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:Fm(A,S)}(t.mapValue,e.mapValue);case 11:return function(s,a){if(s===Yo.mapValue&&a===Yo.mapValue)return 0;if(s===Yo.mapValue)return 1;if(a===Yo.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=a.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let m=0;m<u.length&&m<f.length;++m){const y=se(u[m],f[m]);if(y!==0)return y;const A=Ei(l[u[m]],h[f[m]]);if(A!==0)return A}return se(u.length,f.length)}(t.mapValue,e.mapValue);default:throw J()}}function jm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return se(t,e);const n=Or(t),r=Or(e),i=se(n.seconds,r.seconds);return i!==0?i:se(n.nanos,r.nanos)}function Fm(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ei(n[i],r[i]);if(s)return s}return se(n.length,r.length)}function Ii(t){return nh(t)}function nh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Or(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Ws(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=nh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const a of r)s?s=!1:i+=",",i+=`${a}:${nh(n.fields[a])}`;return i+"}"}(t.mapValue):J()}function rh(t){return!!t&&"integerValue"in t}function Cd(t){return!!t&&"arrayValue"in t}function va(t){return!!t&&"mapValue"in t}function s2(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="__vector__"}function _s(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ni(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=_s(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=_s(t.arrayValue.values[n]);return e}return Object.assign({},t)}function o2(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!va(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=_s(n)}setAll(e){let n=Fe.emptyPath(),r={},i=[];e.forEach((a,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}a?r[l.lastSegment()]=_s(a):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());va(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return qt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];va(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ni(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new mt(_s(this.value))}}function H_(t){const e=[];return Ni(t.fields,(n,r)=>{const i=new Fe([n]);if(va(r)){const s=H_(r.mapValue).fields;if(s.length===0)e.push(i);else for(const a of s)e.push(i.child(a))}else e.push(i)}),new yt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(e,n,r,i,s,a,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=a,this.documentState=l}static newInvalidDocument(e){return new Lt(e,0,pe.min(),pe.min(),pe.min(),mt.empty(),0)}static newFoundDocument(e,n,r,i){return new Lt(e,1,n,pe.min(),r,i,0)}static newNoDocument(e,n){return new Lt(e,2,n,pe.min(),pe.min(),mt.empty(),0)}static newUnknownDocument(e,n){return new Lt(e,3,n,pe.min(),pe.min(),mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(e,n){this.position=e,this.inclusive=n}}function zm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],a=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(a.referenceValue),n.key):r=Ei(a,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Bm(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!qt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,n="asc"){this.field=e,this.dir=n}}function a2(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{}class Ne extends W_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new u2(e,n,r):n==="array-contains"?new d2(e,r):n==="in"?new f2(e,r):n==="not-in"?new p2(e,r):n==="array-contains-any"?new m2(e,r):new Ne(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new c2(e,r):new h2(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ei(n,this.value)):n!==null&&wi(this.value)===wi(n)&&this.matchesComparison(Ei(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Jn extends W_{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new Jn(e,n)}matches(e){return G_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function G_(t){return t.op==="and"}function K_(t){return l2(t)&&G_(t)}function l2(t){for(const e of t.filters)if(e instanceof Jn)return!1;return!0}function ih(t){if(t instanceof Ne)return t.field.canonicalString()+t.op.toString()+Ii(t.value);if(K_(t))return t.filters.map(e=>ih(e)).join(",");{const e=t.filters.map(n=>ih(n)).join(",");return`${t.op}(${e})`}}function q_(t,e){return t instanceof Ne?function(r,i){return i instanceof Ne&&r.op===i.op&&r.field.isEqual(i.field)&&qt(r.value,i.value)}(t,e):t instanceof Jn?function(r,i){return i instanceof Jn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,a,l)=>s&&q_(a,i.filters[l]),!0):!1}(t,e):void J()}function Q_(t){return t instanceof Ne?function(n){return`${n.field.canonicalString()} ${n.op} ${Ii(n.value)}`}(t):t instanceof Jn?function(n){return n.op.toString()+" {"+n.getFilters().map(Q_).join(" ,")+"}"}(t):"Filter"}class u2 extends Ne{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class c2 extends Ne{constructor(e,n){super(e,"in",n),this.keys=X_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class h2 extends Ne{constructor(e,n){super(e,"not-in",n),this.keys=X_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function X_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class d2 extends Ne{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Cd(n)&&Gs(n.arrayValue,this.value)}}class f2 extends Ne{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Gs(this.value.arrayValue,n)}}class p2 extends Ne{constructor(e,n){super(e,"not-in",n)}matches(e){if(Gs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Gs(this.value.arrayValue,n)}}class m2 extends Ne{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Cd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Gs(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g2{constructor(e,n=null,r=[],i=[],s=null,a=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=a,this.endAt=l,this.ue=null}}function $m(t,e=null,n=[],r=[],i=null,s=null,a=null){return new g2(t,e,n,r,i,s,a)}function Pd(t){const e=ae(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ih(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),kd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ii(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ii(r)).join(",")),e.ue=n}return e.ue}function Rd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!a2(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!q_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Bm(t.startAt,e.startAt)&&Bm(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n=null,r=[],i=[],s=null,a="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=a,this.startAt=l,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function y2(t,e,n,r,i,s,a,l){return new Nl(t,e,n,r,i,s,a,l)}function v2(t){return new Nl(t)}function Hm(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function _2(t){return t.collectionGroup!==null}function ws(t){const e=ae(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new Je(Fe.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new rl(s,r))}),n.has(Fe.keyField().canonicalString())||e.ce.push(new rl(Fe.keyField(),r))}return e.ce}function Ir(t){const e=ae(t);return e.le||(e.le=w2(e,ws(t))),e.le}function w2(t,e){if(t.limitType==="F")return $m(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new rl(i.field,s)});const n=t.endAt?new nl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new nl(t.startAt.position,t.startAt.inclusive):null;return $m(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function sh(t,e,n){return new Nl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Y_(t,e){return Rd(Ir(t),Ir(e))&&t.limitType===e.limitType}function J_(t){return`${Pd(Ir(t))}|lt:${t.limitType}`}function rs(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Q_(i)).join(", ")}]`),kd(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ii(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ii(i)).join(",")),`Target(${r})`}(Ir(t))}; limitType=${t.limitType})`}function xd(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of ws(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(a,l,u){const h=zm(a,l,u);return a.inclusive?h<=0:h<0}(r.startAt,ws(r),i)||r.endAt&&!function(a,l,u){const h=zm(a,l,u);return a.inclusive?h>=0:h>0}(r.endAt,ws(r),i))}(t,e)}function E2(t){return(e,n)=>{let r=!1;for(const i of ws(t)){const s=I2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function I2(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,a,l){const u=a.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Ei(u,h):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ni(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return B_(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T2=new dt(Q.comparator);function il(){return T2}const Z_=new dt(Q.comparator);function Jo(...t){let e=Z_;for(const n of t)e=e.insert(n.key,n);return e}function e0(t){let e=Z_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function gr(){return Es()}function t0(){return Es()}function Es(){return new Oi(t=>t.toString(),(t,e)=>t.isEqual(e))}const S2=new dt(Q.comparator),k2=new Je(Q.comparator);function Ye(...t){let e=k2;for(const n of t)e=e.add(n);return e}const A2=new Je(se);function C2(){return A2}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Za(e)?"-0":e}}function n0(t){return{integerValue:""+t}}function P2(t,e){return t2(e)?n0(e):Nd(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(){this._=void 0}}function R2(t,e,n){return t instanceof sl?function(i,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Ad(s)&&(s=$_(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(n,e):t instanceof Ks?i0(t,e):t instanceof qs?s0(t,e):function(i,s){const a=r0(i,s),l=Wm(a)+Wm(i.Pe);return rh(a)&&rh(i.Pe)?n0(l):Nd(i.serializer,l)}(t,e)}function x2(t,e,n){return t instanceof Ks?i0(t,e):t instanceof qs?s0(t,e):n}function r0(t,e){return t instanceof ol?function(r){return rh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class sl extends Ol{}class Ks extends Ol{constructor(e){super(),this.elements=e}}function i0(t,e){const n=o0(e);for(const r of t.elements)n.some(i=>qt(i,r))||n.push(r);return{arrayValue:{values:n}}}class qs extends Ol{constructor(e){super(),this.elements=e}}function s0(t,e){let n=o0(e);for(const r of t.elements)n=n.filter(i=>!qt(i,r));return{arrayValue:{values:n}}}class ol extends Ol{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Wm(t){return je(t.integerValue||t.doubleValue)}function o0(t){return Cd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function N2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ks&&i instanceof Ks||r instanceof qs&&i instanceof qs?_i(r.elements,i.elements,qt):r instanceof ol&&i instanceof ol?qt(r.Pe,i.Pe):r instanceof sl&&i instanceof sl}(t.transform,e.transform)}class O2{constructor(e,n){this.version=e,this.transformResults=n}}class Ut{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Ut}static exists(e){return new Ut(void 0,e)}static updateTime(e){return new Ut(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function _a(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Dl{}function a0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Od(t.key,Ut.none()):new uo(t.key,t.data,Ut.none());{const n=t.data,r=mt.empty();let i=new Je(Fe.comparator);for(let s of e.fields)if(!i.has(s)){let a=n.field(s);a===null&&s.length>1&&(s=s.popLast(),a=n.field(s)),a===null?r.delete(s):r.set(s,a),i=i.add(s)}return new rr(t.key,r,new yt(i.toArray()),Ut.none())}}function D2(t,e,n){t instanceof uo?function(i,s,a){const l=i.value.clone(),u=Km(i.fieldTransforms,s,a.transformResults);l.setAll(u),s.convertToFoundDocument(a.version,l).setHasCommittedMutations()}(t,e,n):t instanceof rr?function(i,s,a){if(!_a(i.precondition,s))return void s.convertToUnknownDocument(a.version);const l=Km(i.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(l0(i)),u.setAll(l),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Is(t,e,n,r){return t instanceof uo?function(s,a,l,u){if(!_a(s.precondition,a))return l;const h=s.value.clone(),f=qm(s.fieldTransforms,u,a);return h.setAll(f),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof rr?function(s,a,l,u){if(!_a(s.precondition,a))return l;const h=qm(s.fieldTransforms,u,a),f=a.data;return f.setAll(l0(s)),f.setAll(h),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(m=>m.field))}(t,e,n,r):function(s,a,l){return _a(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l}(t,e,n)}function L2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=r0(r.transform,i||null);s!=null&&(n===null&&(n=mt.empty()),n.set(r.field,s))}return n||null}function Gm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&_i(r,i,(s,a)=>N2(s,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class uo extends Dl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class rr extends Dl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function l0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Km(t,e,n){const r=new Map;Te(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],a=s.transform,l=e.data.field(s.field);r.set(s.field,x2(a,l,n[i]))}return r}function qm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,a=n.data.field(i.field);r.set(i.field,R2(s,a,e))}return r}class Od extends Dl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class M2 extends Dl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&D2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Is(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Is(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=t0();return this.mutations.forEach(i=>{const s=e.get(i.key),a=s.overlayedDocument;let l=this.applyToLocalView(a,s.mutatedFields);l=n.has(i.key)?null:l;const u=a0(a,l);u!==null&&r.set(i.key,u),a.isValidDocument()||a.convertToNoDocument(pe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ye())}isEqual(e){return this.batchId===e.batchId&&_i(this.mutations,e.mutations,(n,r)=>Gm(n,r))&&_i(this.baseMutations,e.baseMutations,(n,r)=>Gm(n,r))}}class Dd{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Te(e.mutations.length===r.length);let i=function(){return S2}();const s=e.mutations;for(let a=0;a<s.length;a++)i=i.insert(s[a].key,r[a].version);return new Dd(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Se,Z;function U2(t){switch(t){default:return J();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0}}function j2(t){if(t===void 0)return Nr("GRPC error has no .code"),b.UNKNOWN;switch(t){case Se.OK:return b.OK;case Se.CANCELLED:return b.CANCELLED;case Se.UNKNOWN:return b.UNKNOWN;case Se.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Se.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Se.INTERNAL:return b.INTERNAL;case Se.UNAVAILABLE:return b.UNAVAILABLE;case Se.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Se.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Se.NOT_FOUND:return b.NOT_FOUND;case Se.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Se.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Se.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Se.ABORTED:return b.ABORTED;case Se.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Se.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Se.DATA_LOSS:return b.DATA_LOSS;default:return J()}}(Z=Se||(Se={}))[Z.OK=0]="OK",Z[Z.CANCELLED=1]="CANCELLED",Z[Z.UNKNOWN=2]="UNKNOWN",Z[Z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Z[Z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Z[Z.NOT_FOUND=5]="NOT_FOUND",Z[Z.ALREADY_EXISTS=6]="ALREADY_EXISTS",Z[Z.PERMISSION_DENIED=7]="PERMISSION_DENIED",Z[Z.UNAUTHENTICATED=16]="UNAUTHENTICATED",Z[Z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Z[Z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Z[Z.ABORTED=10]="ABORTED",Z[Z.OUT_OF_RANGE=11]="OUT_OF_RANGE",Z[Z.UNIMPLEMENTED=12]="UNIMPLEMENTED",Z[Z.INTERNAL=13]="INTERNAL",Z[Z.UNAVAILABLE=14]="UNAVAILABLE",Z[Z.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new O_([4294967295,4294967295],0);class F2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function oh(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function z2(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function B2(t,e){return oh(t,e.toTimestamp())}function ui(t){return Te(!!t),pe.fromTimestamp(function(n){const r=Or(n);return new De(r.seconds,r.nanos)}(t))}function u0(t,e){return ah(t,e).canonicalString()}function ah(t,e){const n=function(i){return new we(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function $2(t){const e=we.fromString(t);return Te(Y2(e)),e}function lh(t,e){return u0(t.databaseId,e.path)}function H2(t){const e=$2(t);return e.length===4?we.emptyPath():G2(e)}function W2(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function G2(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Qm(t,e,n){return{name:lh(t,e),fields:n.value.mapValue.fields}}function K2(t,e){let n;if(e instanceof uo)n={update:Qm(t,e.key,e.value)};else if(e instanceof Od)n={delete:lh(t,e.key)};else if(e instanceof rr)n={update:Qm(t,e.key,e.data),updateMask:X2(e.fieldMask)};else{if(!(e instanceof M2))return J();n={verify:lh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const l=a.transform;if(l instanceof sl)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof Ks)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof qs)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof ol)return{fieldPath:a.field.canonicalString(),increment:l.Pe};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:B2(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J()}(t,e.precondition)),n}function q2(t,e){return t&&t.length>0?(Te(e!==void 0),t.map(n=>function(i,s){let a=i.updateTime?ui(i.updateTime):ui(s);return a.isEqual(pe.min())&&(a=ui(s)),new O2(a,i.transformResults||[])}(n,e))):[]}function Q2(t){let e=H2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Te(r===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(m){const y=c0(m);return y instanceof Jn&&K_(y)?y.getFilters():[y]}(n.where));let a=[];n.orderBy&&(a=function(m){return m.map(y=>function(S){return new rl(zr(S.field),function(D){switch(D){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(S.direction))}(y))}(n.orderBy));let l=null;n.limit&&(l=function(m){let y;return y=typeof m=="object"?m.value:m,kd(y)?null:y}(n.limit));let u=null;n.startAt&&(u=function(m){const y=!!m.before,A=m.values||[];return new nl(A,y)}(n.startAt));let h=null;return n.endAt&&(h=function(m){const y=!m.before,A=m.values||[];return new nl(A,y)}(n.endAt)),y2(e,i,a,s,l,"F",u,h)}function c0(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=zr(n.unaryFilter.field);return Ne.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=zr(n.unaryFilter.field);return Ne.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=zr(n.unaryFilter.field);return Ne.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=zr(n.unaryFilter.field);return Ne.create(a,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(n){return Ne.create(zr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Jn.create(n.compositeFilter.filters.map(r=>c0(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J()}}(n.compositeFilter.op))}(t):J()}function zr(t){return Fe.fromServerFormat(t.fieldPath)}function X2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Y2(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J2{constructor(e){this.ct=e}}function Z2(t){const e=Q2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?sh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eC{constructor(){this.un=new tC}addToCollectionParentIndex(e,n){return this.un.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this.un.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(Yn.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(Yn.min())}updateCollectionGroup(e,n,r){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class tC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Je(we.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Je(we.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(e){this.Ln=e}next(){return this.Ln+=2,this.Ln}static Bn(){return new Ti(0)}static kn(){return new Ti(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(){this.changes=new Oi(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?V.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Is(r.mutation,i,yt.empty(),De.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ye()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ye()){const i=gr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let a=Jo();return s.forEach((l,u)=>{a=a.insert(l,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const r=gr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ye()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((a,l)=>{n.set(a,l)})})}computeViews(e,n,r,i){let s=il();const a=Es(),l=function(){return Es()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof rr)?s=s.insert(h.key,h):f!==void 0?(a.set(h.key,f.mutation.getFieldMask()),Is(f.mutation,h,f.mutation.getFieldMask(),De.now())):a.set(h.key,yt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>a.set(h,f)),n.forEach((h,f)=>{var m;return l.set(h,new rC(f,(m=a.get(h))!==null&&m!==void 0?m:null))}),l))}recalculateAndSaveOverlays(e,n){const r=Es();let i=new dt((a,l)=>a-l),s=Ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const l of a)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||yt.empty();f=l.applyToLocalView(h,f),r.set(u,f);const m=(i.get(l.batchId)||Ye()).add(u);i=i.insert(l.batchId,m)})}).next(()=>{const a=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,m=t0();f.forEach(y=>{if(!s.has(y)){const A=a0(n.get(y),r.get(y));A!==null&&m.set(y,A),s=s.add(y)}}),a.push(this.documentOverlayCache.saveOverlays(e,h,m))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(a){return Q.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):_2(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const a=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):V.resolve(gr());let l=-1,u=s;return a.next(h=>V.forEach(h,(f,m)=>(l<m.largestBatchId&&(l=m.largestBatchId),s.get(f)?V.resolve():this.remoteDocumentCache.getEntry(e,f).next(y=>{u=u.insert(f,y)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,Ye())).next(f=>({batchId:l,changes:e0(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=Jo();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let a=Jo();return this.indexManager.getCollectionParents(e,s).next(l=>V.forEach(l,u=>{const h=function(m,y){return new Nl(y,null,m.explicitOrderBy.slice(),m.filters.slice(),m.limit,m.limitType,m.startAt,m.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((m,y)=>{a=a.insert(m,y)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(a=>{s.forEach((u,h)=>{const f=h.getKey();a.get(f)===null&&(a=a.insert(f,Lt.newInvalidDocument(f)))});let l=Jo();return a.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Is(f.mutation,h,yt.empty(),De.now()),xd(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sC{constructor(e){this.serializer=e,this.hr=new Map,this.Pr=new Map}getBundleMetadata(e,n){return V.resolve(this.hr.get(n))}saveBundleMetadata(e,n){return this.hr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:ui(i.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.Pr.get(n))}saveNamedQuery(e,n){return this.Pr.set(n.name,function(i){return{name:i.name,query:Z2(i.bundledQuery),readTime:ui(i.readTime)}}(n)),V.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oC{constructor(){this.overlays=new dt(Q.comparator),this.Ir=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const r=gr();return V.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Ir.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Ir.delete(r)),V.resolve()}getOverlaysForCollection(e,n,r){const i=gr(),s=n.length+1,a=new Q(n.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return V.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new dt((h,f)=>h-f);const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=gr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=gr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return V.resolve(l)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const a=this.Ir.get(i.largestBatchId).delete(r.key);this.Ir.set(i.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new b2(n,r));let s=this.Ir.get(n);s===void 0&&(s=Ye(),this.Ir.set(n,s)),this.Ir.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aC{constructor(){this.sessionToken=Kt.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,V.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ld{constructor(){this.Tr=new Je(Re.Er),this.dr=new Je(Re.Ar)}isEmpty(){return this.Tr.isEmpty()}addReference(e,n){const r=new Re(e,n);this.Tr=this.Tr.add(r),this.dr=this.dr.add(r)}Rr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Vr(new Re(e,n))}mr(e,n){e.forEach(r=>this.removeReference(r,n))}gr(e){const n=new Q(new we([])),r=new Re(n,e),i=new Re(n,e+1),s=[];return this.dr.forEachInRange([r,i],a=>{this.Vr(a),s.push(a.key)}),s}pr(){this.Tr.forEach(e=>this.Vr(e))}Vr(e){this.Tr=this.Tr.delete(e),this.dr=this.dr.delete(e)}yr(e){const n=new Q(new we([])),r=new Re(n,e),i=new Re(n,e+1);let s=Ye();return this.dr.forEachInRange([r,i],a=>{s=s.add(a.key)}),s}containsKey(e){const n=new Re(e,0),r=this.Tr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Re{constructor(e,n){this.key=e,this.wr=n}static Er(e,n){return Q.comparator(e.key,n.key)||se(e.wr,n.wr)}static Ar(e,n){return se(e.wr,n.wr)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Sr=1,this.br=new Je(Re.Er)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Sr;this.Sr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new V2(s,n,r,i);this.mutationQueue.push(a);for(const l of i)this.br=this.br.add(new Re(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,n){return V.resolve(this.Dr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.vr(r),s=i<0?0:i;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.Sr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Re(n,0),i=new Re(n,Number.POSITIVE_INFINITY),s=[];return this.br.forEachInRange([r,i],a=>{const l=this.Dr(a.wr);s.push(l)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Je(se);return n.forEach(i=>{const s=new Re(i,0),a=new Re(i,Number.POSITIVE_INFINITY);this.br.forEachInRange([s,a],l=>{r=r.add(l.wr)})}),V.resolve(this.Cr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const a=new Re(new Q(s),0);let l=new Je(se);return this.br.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.wr)),!0)},a),V.resolve(this.Cr(l))}Cr(e){const n=[];return e.forEach(r=>{const i=this.Dr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Te(this.Fr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.br;return V.forEach(n.mutations,i=>{const s=new Re(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.br=r})}On(e){}containsKey(e,n){const r=new Re(n,0),i=this.br.firstAfterOrEqual(r);return V.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Fr(e,n){return this.vr(e)}vr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Dr(e){const n=this.vr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uC{constructor(e){this.Mr=e,this.docs=function(){return new dt(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,a=this.Mr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return V.resolve(r?r.document.mutableCopy():Lt.newInvalidDocument(n))}getEntries(e,n){let r=il();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Lt.newInvalidDocument(i))}),V.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=il();const a=n.path,l=new Q(a.child("")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||YA(XA(f),r)<=0||(i.has(f.key)||xd(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,r,i){J()}Or(e,n){return V.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new cC(this)}getSize(e){return V.resolve(this.size)}}class cC extends nC{constructor(e){super(),this.cr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.cr.addEntry(e,i)):this.cr.removeEntry(r)}),V.waitFor(n)}getFromCache(e,n){return this.cr.getEntry(e,n)}getAllFromCache(e,n){return this.cr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e){this.persistence=e,this.Nr=new Oi(n=>Pd(n),Rd),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.Lr=0,this.Br=new Ld,this.targetCount=0,this.kr=Ti.Bn()}forEachTarget(e,n){return this.Nr.forEach((r,i)=>n(i)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Lr)}allocateTargetId(e){return this.highestTargetId=this.kr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Lr&&(this.Lr=n),V.resolve()}Kn(e){this.Nr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.kr=new Ti(n),this.highestTargetId=n),e.sequenceNumber>this.Lr&&(this.Lr=e.sequenceNumber)}addTargetData(e,n){return this.Kn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.Kn(n),V.resolve()}removeTargetData(e,n){return this.Nr.delete(n.target),this.Br.gr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Nr.forEach((a,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.Nr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),V.waitFor(s).next(()=>i)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const r=this.Nr.get(n)||null;return V.resolve(r)}addMatchingKeys(e,n,r){return this.Br.Rr(n,r),V.resolve()}removeMatchingKeys(e,n,r){this.Br.mr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(a=>{s.push(i.markPotentiallyOrphaned(e,a))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Br.gr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Br.yr(n);return V.resolve(r)}containsKey(e,n){return V.resolve(this.Br.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(e,n){this.qr={},this.overlays={},this.Qr=new z_(0),this.Kr=!1,this.Kr=!0,this.$r=new aC,this.referenceDelegate=e(this),this.Ur=new hC(this),this.indexManager=new eC,this.remoteDocumentCache=function(i){return new uC(i)}(r=>this.referenceDelegate.Wr(r)),this.serializer=new J2(n),this.Gr=new sC(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Kr=!1,Promise.resolve()}get started(){return this.Kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new oC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.qr[e.toKey()];return r||(r=new lC(n,this.referenceDelegate),this.qr[e.toKey()]=r),r}getGlobalsCache(){return this.$r}getTargetCache(){return this.Ur}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Gr}runTransaction(e,n,r){H("MemoryPersistence","Starting transaction:",e);const i=new fC(this.Qr.next());return this.referenceDelegate.zr(),r(i).next(s=>this.referenceDelegate.jr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Hr(e,n){return V.or(Object.values(this.qr).map(r=>()=>r.containsKey(e,n)))}}class fC extends ZA{constructor(e){super(),this.currentSequenceNumber=e}}class Md{constructor(e){this.persistence=e,this.Jr=new Ld,this.Yr=null}static Zr(e){return new Md(e)}get Xr(){if(this.Yr)return this.Yr;throw J()}addReference(e,n,r){return this.Jr.addReference(r,n),this.Xr.delete(r.toString()),V.resolve()}removeReference(e,n,r){return this.Jr.removeReference(r,n),this.Xr.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Xr.add(n.toString()),V.resolve()}removeTarget(e,n){this.Jr.gr(n.targetId).forEach(i=>this.Xr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Xr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}zr(){this.Yr=new Set}jr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Xr,r=>{const i=Q.fromPath(r);return this.ei(e,i).next(s=>{s||n.removeEntry(i,pe.min())})}).next(()=>(this.Yr=null,n.apply(e)))}updateLimboDocument(e,n){return this.ei(e,n).next(r=>{r?this.Xr.delete(n.toString()):this.Xr.add(n.toString())})}Wr(e){return 0}ei(e,n){return V.or([()=>V.resolve(this.Jr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Hr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.$i=r,this.Ui=i}static Wi(e,n){let r=Ye(),i=Ye();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Vd(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(){this.Gi=!1,this.zi=!1,this.ji=100,this.Hi=function(){return I1()?8:e2(et())>0?6:4}()}initialize(e,n){this.Ji=e,this.indexManager=n,this.Gi=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.Yi(e,n).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Zi(e,n,i,r).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new pC;return this.Xi(e,n,a).next(l=>{if(s.result=l,this.zi)return this.es(e,n,a,l.size)})}).next(()=>s.result)}es(e,n,r,i){return r.documentReadCount<this.ji?(ns()<=Y.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",rs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.ji,"documents"),V.resolve()):(ns()<=Y.DEBUG&&H("QueryEngine","Query:",rs(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Hi*i?(ns()<=Y.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",rs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ir(n))):V.resolve())}Yi(e,n){if(Hm(n))return V.resolve(null);let r=Ir(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=sh(n,null,"F"),r=Ir(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const a=Ye(...s);return this.Ji.getDocuments(e,a).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.ts(n,l);return this.ns(n,h,a,u.readTime)?this.Yi(e,sh(n,null,"F")):this.rs(e,h,n,u)}))})))}Zi(e,n,r,i){return Hm(n)||i.isEqual(pe.min())?V.resolve(null):this.Ji.getDocuments(e,r).next(s=>{const a=this.ts(n,s);return this.ns(n,a,r,i)?V.resolve(null):(ns()<=Y.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),rs(n)),this.rs(e,a,n,QA(i,-1)).next(l=>l))})}ts(e,n){let r=new Je(E2(e));return n.forEach((i,s)=>{xd(e,s)&&(r=r.add(s))}),r}ns(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Xi(e,n,r){return ns()<=Y.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",rs(n)),this.Ji.getDocumentsMatchingQuery(e,n,Yn.min(),r)}rs(e,n,r,i){return this.Ji.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gC{constructor(e,n,r,i){this.persistence=e,this.ss=n,this.serializer=i,this.os=new dt(se),this._s=new Oi(s=>Pd(s),Rd),this.us=new Map,this.cs=e.getRemoteDocumentCache(),this.Ur=e.getTargetCache(),this.Gr=e.getBundleCache(),this.ls(r)}ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iC(this.cs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.cs.setIndexManager(this.indexManager),this.ss.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.os))}}function yC(t,e,n,r){return new gC(t,e,n,r)}async function h0(t,e){const n=ae(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const a=[],l=[];let u=Ye();for(const h of i){a.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({hs:h,removedBatchIds:a,addedBatchIds:l}))})})}function vC(t,e){const n=ae(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.cs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,f){const m=h.batch,y=m.keys();let A=V.resolve();return y.forEach(S=>{A=A.next(()=>f.getEntry(u,S)).next(N=>{const D=h.docVersions.get(S);Te(D!==null),N.version.compareTo(D)<0&&(m.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))})}),A.next(()=>l.mutationQueue.removeMutationBatch(u,m))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Ye();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function _C(t){const e=ae(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ur.getLastRemoteSnapshotVersion(n))}function wC(t,e){const n=ae(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class Xm{constructor(){this.activeTargetIds=C2()}fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Vs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class EC{constructor(){this.so=new Xm,this.oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.so.fs(e),this.oo[e]||"not-current"}updateQueryState(e,n,r){this.oo[e]=n}removeLocalQueryTarget(e){this.so.gs(e)}isLocalQueryTarget(e){return this.so.activeTargetIds.has(e)}clearQueryState(e){delete this.oo[e]}getAllActiveQueryTargets(){return this.so.activeTargetIds}isActiveQueryTarget(e){return this.so.activeTargetIds.has(e)}start(){return this.so=new Xm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{_o(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(){this.ao=()=>this.uo(),this.co=()=>this.lo(),this.ho=[],this.Po()}_o(e){this.ho.push(e)}shutdown(){window.removeEventListener("online",this.ao),window.removeEventListener("offline",this.co)}Po(){window.addEventListener("online",this.ao),window.addEventListener("offline",this.co)}uo(){H("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ho)e(0)}lo(){H("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ho)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zo=null;function Hu(){return Zo===null?Zo=function(){return 268435456+Math.round(2147483648*Math.random())}():Zo++,"0x"+Zo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SC{constructor(e){this.Io=e.Io,this.To=e.To}Eo(e){this.Ao=e}Ro(e){this.Vo=e}mo(e){this.fo=e}onMessage(e){this.po=e}close(){this.To()}send(e){this.Io(e)}yo(){this.Ao()}wo(){this.Vo()}So(e){this.fo(e)}bo(e){this.po(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qe="WebChannelConnection";class kC extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Do=r+"://"+n.host,this.vo=`projects/${i}/databases/${s}`,this.Co=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Fo(){return!1}Mo(n,r,i,s,a){const l=Hu(),u=this.xo(n,r.toUriEncodedString());H("RestConnection",`Sending RPC '${n}' ${l}:`,u,i);const h={"google-cloud-resource-prefix":this.vo,"x-goog-request-params":this.Co};return this.Oo(h,s,a),this.No(n,u,h,i).then(f=>(H("RestConnection",`Received RPC '${n}' ${l}: `,f),f),f=>{throw Ja("RestConnection",`RPC '${n}' ${l} failed with error: `,f,"url: ",u,"request:",i),f})}Lo(n,r,i,s,a,l){return this.Mo(n,r,i,s,a)}Oo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+xi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,a)=>n[a]=s),i&&i.headers.forEach((s,a)=>n[a]=s)}xo(n,r){const i=TC[n];return`${this.Do}/v1/${r}:${i}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}No(e,n,r,i){const s=Hu();return new Promise((a,l)=>{const u=new D_;u.setWithCredentials(!0),u.listenOnce(L_.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case ya.NO_ERROR:const f=u.getResponseJson();H(qe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(f)),a(f);break;case ya.TIMEOUT:H(qe,`RPC '${e}' ${s} timed out`),l(new W(b.DEADLINE_EXCEEDED,"Request time out"));break;case ya.HTTP_ERROR:const m=u.getStatus();if(H(qe,`RPC '${e}' ${s} failed with status:`,m,"response text:",u.getResponseText()),m>0){let y=u.getResponseJson();Array.isArray(y)&&(y=y[0]);const A=y==null?void 0:y.error;if(A&&A.status&&A.message){const S=function(D){const _=D.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(_)>=0?_:b.UNKNOWN}(A.status);l(new W(S,A.message))}else l(new W(b.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new W(b.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{H(qe,`RPC '${e}' ${s} completed.`)}});const h=JSON.stringify(i);H(qe,`RPC '${e}' ${s} sending request:`,i),u.send(n,"POST",h,r,15)})}Bo(e,n,r){const i=Hu(),s=[this.Do,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=b_(),l=V_(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Oo(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");H(qe,`Creating RPC '${e}' stream ${i}: ${f}`,u);const m=a.createWebChannel(f,u);let y=!1,A=!1;const S=new SC({Io:D=>{A?H(qe,`Not sending because RPC '${e}' stream ${i} is closed:`,D):(y||(H(qe,`Opening RPC '${e}' stream ${i} transport.`),m.open(),y=!0),H(qe,`RPC '${e}' stream ${i} sending:`,D),m.send(D))},To:()=>m.close()}),N=(D,_,v)=>{D.listen(_,k=>{try{v(k)}catch(L){setTimeout(()=>{throw L},0)}})};return N(m,ls.EventType.OPEN,()=>{A||(H(qe,`RPC '${e}' stream ${i} transport opened.`),S.yo())}),N(m,ls.EventType.CLOSE,()=>{A||(A=!0,H(qe,`RPC '${e}' stream ${i} transport closed`),S.So())}),N(m,ls.EventType.ERROR,D=>{A||(A=!0,Ja(qe,`RPC '${e}' stream ${i} transport errored:`,D),S.So(new W(b.UNAVAILABLE,"The operation could not be completed")))}),N(m,ls.EventType.MESSAGE,D=>{var _;if(!A){const v=D.data[0];Te(!!v);const k=v,L=k.error||((_=k[0])===null||_===void 0?void 0:_.error);if(L){H(qe,`RPC '${e}' stream ${i} received error:`,L);const j=L.status;let z=function(w){const I=Se[w];if(I!==void 0)return j2(I)}(j),E=L.message;z===void 0&&(z=b.INTERNAL,E="Unknown error status: "+j+" with message "+L.message),A=!0,S.So(new W(z,E)),m.close()}else H(qe,`RPC '${e}' stream ${i} received:`,v),S.bo(v)}}),N(l,M_.STAT_EVENT,D=>{D.stat===th.PROXY?H(qe,`RPC '${e}' stream ${i} detected buffering proxy`):D.stat===th.NOPROXY&&H(qe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{S.wo()},0),S}}function Wu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(t){return new F2(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ui=e,this.timerId=n,this.ko=r,this.qo=i,this.Qo=s,this.Ko=0,this.$o=null,this.Uo=Date.now(),this.reset()}reset(){this.Ko=0}Wo(){this.Ko=this.Qo}Go(e){this.cancel();const n=Math.floor(this.Ko+this.zo()),r=Math.max(0,Date.now()-this.Uo),i=Math.max(0,n-r);i>0&&H("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Ko} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.$o=this.ui.enqueueAfterDelay(this.timerId,i,()=>(this.Uo=Date.now(),e())),this.Ko*=this.qo,this.Ko<this.ko&&(this.Ko=this.ko),this.Ko>this.Qo&&(this.Ko=this.Qo)}jo(){this.$o!==null&&(this.$o.skipDelay(),this.$o=null)}cancel(){this.$o!==null&&(this.$o.cancel(),this.$o=null)}zo(){return(Math.random()-.5)*this.Ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC{constructor(e,n,r,i,s,a,l,u){this.ui=e,this.Ho=r,this.Jo=i,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.Yo=0,this.Zo=null,this.Xo=null,this.stream=null,this.e_=0,this.t_=new d0(e,n)}n_(){return this.state===1||this.state===5||this.r_()}r_(){return this.state===2||this.state===3}start(){this.e_=0,this.state!==4?this.auth():this.i_()}async stop(){this.n_()&&await this.close(0)}s_(){this.state=0,this.t_.reset()}o_(){this.r_()&&this.Zo===null&&(this.Zo=this.ui.enqueueAfterDelay(this.Ho,6e4,()=>this.__()))}a_(e){this.u_(),this.stream.send(e)}async __(){if(this.r_())return this.close(0)}u_(){this.Zo&&(this.Zo.cancel(),this.Zo=null)}c_(){this.Xo&&(this.Xo.cancel(),this.Xo=null)}async close(e,n){this.u_(),this.c_(),this.t_.cancel(),this.Yo++,e!==4?this.t_.reset():n&&n.code===b.RESOURCE_EXHAUSTED?(Nr(n.toString()),Nr("Using maximum backoff delay to prevent overloading the backend."),this.t_.Wo()):n&&n.code===b.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.l_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.mo(n)}l_(){}auth(){this.state=1;const e=this.h_(this.Yo),n=this.Yo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Yo===n&&this.P_(r,i)},r=>{e(()=>{const i=new W(b.UNKNOWN,"Fetching auth token failed: "+r.message);return this.I_(i)})})}P_(e,n){const r=this.h_(this.Yo);this.stream=this.T_(e,n),this.stream.Eo(()=>{r(()=>this.listener.Eo())}),this.stream.Ro(()=>{r(()=>(this.state=2,this.Xo=this.ui.enqueueAfterDelay(this.Jo,1e4,()=>(this.r_()&&(this.state=3),Promise.resolve())),this.listener.Ro()))}),this.stream.mo(i=>{r(()=>this.I_(i))}),this.stream.onMessage(i=>{r(()=>++this.e_==1?this.E_(i):this.onNext(i))})}i_(){this.state=5,this.t_.Go(async()=>{this.state=0,this.start()})}I_(e){return H("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}h_(e){return n=>{this.ui.enqueueAndForget(()=>this.Yo===e?n():(H("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class CC extends AC{constructor(e,n,r,i,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,a),this.serializer=s}get V_(){return this.e_>0}start(){this.lastStreamToken=void 0,super.start()}l_(){this.V_&&this.m_([])}T_(e,n){return this.connection.Bo("Write",e,n)}E_(e){return Te(!!e.streamToken),this.lastStreamToken=e.streamToken,Te(!e.writeResults||e.writeResults.length===0),this.listener.f_()}onNext(e){Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.t_.reset();const n=q2(e.writeResults,e.commitTime),r=ui(e.commitTime);return this.listener.g_(r,n)}p_(){const e={};e.database=W2(this.serializer),this.a_(e)}m_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>K2(this.serializer,r))};this.a_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PC extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.y_=!1}w_(){if(this.y_)throw new W(b.FAILED_PRECONDITION,"The client has already been terminated.")}Mo(e,n,r,i){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Mo(e,ah(n,r),i,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(b.UNKNOWN,s.toString())})}Lo(e,n,r,i,s){return this.w_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,l])=>this.connection.Lo(e,ah(n,r),i,a,l,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===b.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new W(b.UNKNOWN,a.toString())})}terminate(){this.y_=!0,this.connection.terminate()}}class RC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.S_=0,this.b_=null,this.D_=!0}v_(){this.S_===0&&(this.C_("Unknown"),this.b_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.b_=null,this.F_("Backend didn't respond within 10 seconds."),this.C_("Offline"),Promise.resolve())))}M_(e){this.state==="Online"?this.C_("Unknown"):(this.S_++,this.S_>=1&&(this.x_(),this.F_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.C_("Offline")))}set(e){this.x_(),this.S_=0,e==="Online"&&(this.D_=!1),this.C_(e)}C_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}F_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.D_?(Nr(n),this.D_=!1):H("OnlineStateTracker",n)}x_(){this.b_!==null&&(this.b_.cancel(),this.b_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xC{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.O_=[],this.N_=new Map,this.L_=new Set,this.B_=[],this.k_=s,this.k_._o(a=>{r.enqueueAndForget(async()=>{ho(this)&&(H("RemoteStore","Restarting streams for network reachability change."),await async function(u){const h=ae(u);h.L_.add(4),await co(h),h.q_.set("Unknown"),h.L_.delete(4),await Ml(h)}(this))})}),this.q_=new RC(r,i)}}async function Ml(t){if(ho(t))for(const e of t.B_)await e(!0)}async function co(t){for(const e of t.B_)await e(!1)}function ho(t){return ae(t).L_.size===0}async function f0(t,e,n){if(!xl(e))throw e;t.L_.add(1),await co(t),t.q_.set("Offline"),n||(n=()=>_C(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{H("RemoteStore","Retrying IndexedDB access"),await n(),t.L_.delete(1),await Ml(t)})}function p0(t,e){return e().catch(n=>f0(t,n,e))}async function Vl(t){const e=ae(t),n=Zn(e);let r=e.O_.length>0?e.O_[e.O_.length-1].batchId:-1;for(;NC(e);)try{const i=await wC(e.localStore,r);if(i===null){e.O_.length===0&&n.o_();break}r=i.batchId,OC(e,i)}catch(i){await f0(e,i)}m0(e)&&g0(e)}function NC(t){return ho(t)&&t.O_.length<10}function OC(t,e){t.O_.push(e);const n=Zn(t);n.r_()&&n.V_&&n.m_(e.mutations)}function m0(t){return ho(t)&&!Zn(t).n_()&&t.O_.length>0}function g0(t){Zn(t).start()}async function DC(t){Zn(t).p_()}async function LC(t){const e=Zn(t);for(const n of t.O_)e.m_(n.mutations)}async function MC(t,e,n){const r=t.O_.shift(),i=Dd.from(r,e,n);await p0(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Vl(t)}async function VC(t,e){e&&Zn(t).V_&&await async function(r,i){if(function(a){return U2(a)&&a!==b.ABORTED}(i.code)){const s=r.O_.shift();Zn(r).s_(),await p0(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Vl(r)}}(t,e),m0(t)&&g0(t)}async function Jm(t,e){const n=ae(t);n.asyncQueue.verifyOperationInProgress(),H("RemoteStore","RemoteStore received new credentials");const r=ho(n);n.L_.add(3),await co(n),r&&n.q_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.L_.delete(3),await Ml(n)}async function bC(t,e){const n=ae(t);e?(n.L_.delete(2),await Ml(n)):e||(n.L_.add(2),await co(n),n.q_.set("Unknown"))}function Zn(t){return t.U_||(t.U_=function(n,r,i){const s=ae(n);return s.w_(),new CC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Eo:()=>Promise.resolve(),Ro:DC.bind(null,t),mo:VC.bind(null,t),f_:LC.bind(null,t),g_:MC.bind(null,t)}),t.B_.push(async e=>{e?(t.U_.s_(),await Vl(t)):(await t.U_.stop(),t.O_.length>0&&(H("RemoteStore",`Stopping write stream with ${t.O_.length} pending writes`),t.O_=[]))})),t.U_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Er,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const a=Date.now()+r,l=new bd(e,n,a,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(b.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function y0(t,e){if(Nr("AsyncQueue",`${e}: ${t}`),xl(t))return new W(b.UNAVAILABLE,`${e}: ${t}`);throw t}class UC{constructor(){this.queries=Zm(),this.onlineState="Unknown",this.Y_=new Set}terminate(){(function(n,r){const i=ae(n),s=i.queries;i.queries=Zm(),s.forEach((a,l)=>{for(const u of l.j_)u.onError(r)})})(this,new W(b.ABORTED,"Firestore shutting down"))}}function Zm(){return new Oi(t=>J_(t),Y_)}function jC(t){t.Y_.forEach(e=>{e.next()})}var eg,tg;(tg=eg||(eg={})).ea="default",tg.Cache="cache";class FC{constructor(e,n,r,i,s,a){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Ca={},this.Fa=new Oi(l=>J_(l),Y_),this.Ma=new Map,this.xa=new Set,this.Oa=new dt(Q.comparator),this.Na=new Map,this.La=new Ld,this.Ba={},this.ka=new Map,this.qa=Ti.kn(),this.onlineState="Unknown",this.Qa=void 0}get isPrimaryClient(){return this.Qa===!0}}async function zC(t,e,n){const r=WC(t);try{const i=await function(a,l){const u=ae(a),h=De.now(),f=l.reduce((A,S)=>A.add(S.key),Ye());let m,y;return u.persistence.runTransaction("Locally write mutations","readwrite",A=>{let S=il(),N=Ye();return u.cs.getEntries(A,f).next(D=>{S=D,S.forEach((_,v)=>{v.isValidDocument()||(N=N.add(_))})}).next(()=>u.localDocuments.getOverlayedDocuments(A,S)).next(D=>{m=D;const _=[];for(const v of l){const k=L2(v,m.get(v.key).overlayedDocument);k!=null&&_.push(new rr(v.key,k,H_(k.value.mapValue),Ut.exists(!0)))}return u.mutationQueue.addMutationBatch(A,h,_,l)}).next(D=>{y=D;const _=D.applyToLocalDocumentSet(m,N);return u.documentOverlayCache.saveOverlays(A,D.batchId,_)})}).then(()=>({batchId:y.batchId,changes:e0(m)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(a,l,u){let h=a.Ba[a.currentUser.toKey()];h||(h=new dt(se)),h=h.insert(l,u),a.Ba[a.currentUser.toKey()]=h}(r,i.batchId,n),await bl(r,i.changes),await Vl(r.remoteStore)}catch(i){const s=y0(i,"Failed to persist write");n.reject(s)}}function ng(t,e,n){const r=ae(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Fa.forEach((s,a)=>{const l=a.view.Z_(e);l.snapshot&&i.push(l.snapshot)}),function(a,l){const u=ae(a);u.onlineState=l;let h=!1;u.queries.forEach((f,m)=>{for(const y of m.j_)y.Z_(l)&&(h=!0)}),h&&jC(u)}(r.eventManager,e),i.length&&r.Ca.d_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function BC(t,e){const n=ae(t),r=e.batch.batchId;try{const i=await vC(n.localStore,e);_0(n,r,null),v0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await bl(n,i)}catch(i){await F_(i)}}async function $C(t,e,n){const r=ae(t);try{const i=await function(a,l){const u=ae(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let f;return u.mutationQueue.lookupMutationBatch(h,l).next(m=>(Te(m!==null),f=m.keys(),u.mutationQueue.removeMutationBatch(h,m))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,f,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f)).next(()=>u.localDocuments.getDocuments(h,f))})}(r.localStore,e);_0(r,e,n),v0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await bl(r,i)}catch(i){await F_(i)}}function v0(t,e){(t.ka.get(e)||[]).forEach(n=>{n.resolve()}),t.ka.delete(e)}function _0(t,e,n){const r=ae(t);let i=r.Ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ba[r.currentUser.toKey()]=i}}async function bl(t,e,n){const r=ae(t),i=[],s=[],a=[];r.Fa.isEmpty()||(r.Fa.forEach((l,u)=>{a.push(r.Ka(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const m=h?!h.fromCache:(f=void 0)===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,m?"current":"not-current")}if(h){i.push(h);const m=Vd.Wi(u.targetId,h);s.push(m)}}))}),await Promise.all(a),r.Ca.d_(i),await async function(u,h){const f=ae(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",m=>V.forEach(h,y=>V.forEach(y.$i,A=>f.persistence.referenceDelegate.addReference(m,y.targetId,A)).next(()=>V.forEach(y.Ui,A=>f.persistence.referenceDelegate.removeReference(m,y.targetId,A)))))}catch(m){if(!xl(m))throw m;H("LocalStore","Failed to update sequence numbers: "+m)}for(const m of h){const y=m.targetId;if(!m.fromCache){const A=f.os.get(y),S=A.snapshotVersion,N=A.withLastLimboFreeSnapshotVersion(S);f.os=f.os.insert(y,N)}}}(r.localStore,s))}async function HC(t,e){const n=ae(t);if(!n.currentUser.isEqual(e)){H("SyncEngine","User change. New user:",e.toKey());const r=await h0(n.localStore,e);n.currentUser=e,function(s,a){s.ka.forEach(l=>{l.forEach(u=>{u.reject(new W(b.CANCELLED,a))})}),s.ka.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await bl(n,r.hs)}}function WC(t){const e=ae(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=BC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=$C.bind(null,e),e}class al{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ll(e.databaseInfo.databaseId),this.sharedClientState=this.Wa(e),this.persistence=this.Ga(e),await this.persistence.start(),this.localStore=this.za(e),this.gcScheduler=this.ja(e,this.localStore),this.indexBackfillerScheduler=this.Ha(e,this.localStore)}ja(e,n){return null}Ha(e,n){return null}za(e){return yC(this.persistence,new mC,e.initialUser,this.serializer)}Ga(e){return new dC(Md.Zr,this.serializer)}Wa(e){return new EC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}al.provider={build:()=>new al};class uh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ng(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=HC.bind(null,this.syncEngine),await bC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new UC}()}createDatastore(e){const n=Ll(e.databaseInfo.databaseId),r=function(s){return new kC(s)}(e.databaseInfo);return function(s,a,l,u){return new PC(s,a,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,a,l){return new xC(r,i,s,a,l)}(this.localStore,this.datastore,e.asyncQueue,n=>ng(this.syncEngine,n,0),function(){return Ym.D()?new Ym:new IC}())}createSyncEngine(e,n){return function(i,s,a,l,u,h,f){const m=new FC(i,s,a,l,u,h);return f&&(m.Qa=!0),m}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ae(i);H("RemoteStore","RemoteStore shutting down."),s.L_.add(5),await co(s),s.k_.shutdown(),s.q_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}uh.provider={build:()=>new uh};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GC{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Qe.UNAUTHENTICATED,this.clientId=j_.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async a=>{H("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(H("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Er;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=y0(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Gu(t,e){t.asyncQueue.verifyOperationInProgress(),H("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await h0(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function rg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await KC(t);H("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Jm(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Jm(e.remoteStore,i)),t._onlineComponents=e}async function KC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){H("FirestoreClient","Using user provided OfflineComponentProvider");try{await Gu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===b.FAILED_PRECONDITION||i.code===b.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ja("Error using user provided cache. Falling back to memory cache: "+n),await Gu(t,new al)}}else H("FirestoreClient","Using default OfflineComponentProvider"),await Gu(t,new al);return t._offlineComponents}async function qC(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(H("FirestoreClient","Using user provided OnlineComponentProvider"),await rg(t,t._uninitializedComponentsProvider._online)):(H("FirestoreClient","Using default OnlineComponentProvider"),await rg(t,new uh))),t._onlineComponents}function QC(t){return qC(t).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E0(t,e,n){if(!n)throw new W(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function XC(t,e,n,r){if(e===!0&&r===!0)throw new W(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function sg(t){if(!Q.isDocumentKey(t))throw new W(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function og(t){if(Q.isDocumentKey(t))throw new W(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ud(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function I0(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ud(t);throw new W(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new W(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}XC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=w0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new W(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new W(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new W(b.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ul{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ag({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ag(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new FA;switch(r.type){case"firstParty":return new HA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(b.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ig.get(n);r&&(H("ComponentProvider","Removing Datastore"),ig.delete(n),r.terminate())}(this),Promise.resolve()}}function YC(t,e,n,r={}){var i;const s=(t=I0(t,Ul))._getSettings(),a=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&Ja("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),r.mockUserToken){let l,u;if(typeof r.mockUserToken=="string")l=r.mockUserToken,u=Qe.MOCK_USER;else{l=m1(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const h=r.mockUserToken.sub||r.mockUserToken.user_id;if(!h)throw new W(b.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Qe(h)}t._authCredentials=new zA(new U_(l,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jd{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new jd(this.firestore,e,this._query)}}class fn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new qn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new fn(this.firestore,e,this._key)}}class qn extends jd{constructor(e,n,r){super(e,n,v2(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new fn(this.firestore,null,new Q(e))}withConverter(e){return new qn(this.firestore,e,this._path)}}function JC(t,e,...n){if(t=Le(t),E0("collection","path",e),t instanceof Ul){const r=we.fromString(e,...n);return og(r),new qn(t,null,r)}{if(!(t instanceof fn||t instanceof qn))throw new W(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return og(r),new qn(t.firestore,null,r)}}function lg(t,e,...n){if(t=Le(t),arguments.length===1&&(e=j_.newId()),E0("doc","path",e),t instanceof Ul){const r=we.fromString(e,...n);return sg(r),new fn(t,null,new Q(r))}{if(!(t instanceof fn||t instanceof qn))throw new W(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(we.fromString(e,...n));return sg(r),new fn(t.firestore,t instanceof qn?t.converter:null,new Q(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e=Promise.resolve()){this.Pu=[],this.Iu=!1,this.Tu=[],this.Eu=null,this.du=!1,this.Au=!1,this.Ru=[],this.t_=new d0(this,"async_queue_retry"),this.Vu=()=>{const r=Wu();r&&H("AsyncQueue","Visibility state changed to "+r.visibilityState),this.t_.jo()},this.mu=e;const n=Wu();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.Vu)}get isShuttingDown(){return this.Iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.fu(),this.gu(e)}enterRestrictedMode(e){if(!this.Iu){this.Iu=!0,this.Au=e||!1;const n=Wu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Vu)}}enqueue(e){if(this.fu(),this.Iu)return new Promise(()=>{});const n=new Er;return this.gu(()=>this.Iu&&this.Au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Pu.push(e),this.pu()))}async pu(){if(this.Pu.length!==0){try{await this.Pu[0](),this.Pu.shift(),this.t_.reset()}catch(e){if(!xl(e))throw e;H("AsyncQueue","Operation failed with retryable error: "+e)}this.Pu.length>0&&this.t_.Go(()=>this.pu())}}gu(e){const n=this.mu.then(()=>(this.du=!0,e().catch(r=>{this.Eu=r,this.du=!1;const i=function(a){let l=a.message||"";return a.stack&&(l=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),l}(r);throw Nr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.du=!1,r))));return this.mu=n,n}enqueueAfterDelay(e,n,r){this.fu(),this.Ru.indexOf(e)>-1&&(n=0);const i=bd.createAndSchedule(this,e,n,r,s=>this.yu(s));return this.Tu.push(i),i}fu(){this.Eu&&J()}verifyOperationInProgress(){}async wu(){let e;do e=this.mu,await e;while(e!==this.mu)}Su(e){for(const n of this.Tu)if(n.timerId===e)return!0;return!1}bu(e){return this.wu().then(()=>{this.Tu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.wu()})}Du(e){this.Ru.push(e)}yu(e){const n=this.Tu.indexOf(e);this.Tu.splice(n,1)}}class T0 extends Ul{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new ug,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ug(e),this._firestoreClient=void 0,await e}}}function S0(t,e){const n=typeof t=="object"?t:Xv(),r=typeof t=="string"?t:"(default)",i=dd(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=f1("firestore");s&&YC(i,...s)}return i}function k0(t){if(t._terminated)throw new W(b.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||ZC(t),t._firestoreClient}function ZC(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new i2(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,w0(f.experimentalLongPollingOptions),f.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new GC(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Qs(Kt.fromBase64String(e))}catch(n){throw new W(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Qs(Kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fd{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Fe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return se(this._lat,e._lat)||se(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP=/^__.*__$/;class tP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new rr(e,this.data,this.fieldMask,n,this.fieldTransforms):new uo(e,this.data,n,this.fieldTransforms)}}class P0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new rr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function R0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class Bd{constructor(e,n,r,i,s,a){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.vu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Cu(){return this.settings.Cu}Fu(e){return new Bd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.Ou(e),i}Nu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Fu({path:r,xu:!1});return i.vu(),i}Lu(e){return this.Fu({path:void 0,xu:!0})}Bu(e){return ll(e,this.settings.methodName,this.settings.ku||!1,this.path,this.settings.qu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}vu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ou(this.path.get(e))}Ou(e){if(e.length===0)throw this.Bu("Document fields must not be empty");if(R0(this.Cu)&&eP.test(e))throw this.Bu('Document fields cannot begin and end with "__"')}}class nP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ll(e)}Qu(e,n,r,i=!1){return new Bd({Cu:e,methodName:n,qu:r,path:Fe.emptyPath(),xu:!1,ku:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function rP(t){const e=t._freezeSettings(),n=Ll(t._databaseId);return new nP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function iP(t,e,n,r,i,s={}){const a=t.Qu(s.merge||s.mergeFields?2:0,e,n,i);$d("Data must be an object, but it was:",a,r);const l=x0(r,a);let u,h;if(s.merge)u=new yt(a.fieldMask),h=a.fieldTransforms;else if(s.mergeFields){const f=[];for(const m of s.mergeFields){const y=ch(e,m,n);if(!a.contains(y))throw new W(b.INVALID_ARGUMENT,`Field '${y}' is specified in your field mask but missing from your input data.`);D0(f,y)||f.push(y)}u=new yt(f),h=a.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=a.fieldTransforms;return new tP(new mt(l),u,h)}class jl extends zd{_toFieldTransform(e){if(e.Cu!==2)throw e.Cu===1?e.Bu(`${this._methodName}() can only appear at the top level of your update data`):e.Bu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof jl}}function sP(t,e,n,r){const i=t.Qu(1,e,n);$d("Data must be an object, but it was:",i,r);const s=[],a=mt.empty();Ni(r,(u,h)=>{const f=O0(e,u,n);h=Le(h);const m=i.Nu(f);if(h instanceof jl)s.push(f);else{const y=Fl(h,m);y!=null&&(s.push(f),a.set(f,y))}});const l=new yt(s);return new P0(a,l,i.fieldTransforms)}function oP(t,e,n,r,i,s){const a=t.Qu(1,e,n),l=[ch(e,r,n)],u=[i];if(s.length%2!=0)throw new W(b.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let y=0;y<s.length;y+=2)l.push(ch(e,s[y])),u.push(s[y+1]);const h=[],f=mt.empty();for(let y=l.length-1;y>=0;--y)if(!D0(h,l[y])){const A=l[y];let S=u[y];S=Le(S);const N=a.Nu(A);if(S instanceof jl)h.push(A);else{const D=Fl(S,N);D!=null&&(h.push(A),f.set(A,D))}}const m=new yt(h);return new P0(f,m,a.fieldTransforms)}function Fl(t,e){if(N0(t=Le(t)))return $d("Unsupported field value:",e,t),x0(t,e);if(t instanceof zd)return function(r,i){if(!R0(i.Cu))throw i.Bu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Bu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.xu&&e.Cu!==4)throw e.Bu("Nested arrays are not supported");return function(r,i){const s=[];let a=0;for(const l of r){let u=Fl(l,i.Lu(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return P2(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=De.fromDate(r);return{timestampValue:oh(i.serializer,s)}}if(r instanceof De){const s=new De(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:oh(i.serializer,s)}}if(r instanceof A0)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Qs)return{bytesValue:z2(i.serializer,r._byteString)};if(r instanceof fn){const s=i.databaseId,a=r.firestore._databaseId;if(!a.isEqual(s))throw i.Bu(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:u0(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof C0)return function(a,l){return{mapValue:{fields:{__type__:{stringValue:"__vector__"},value:{arrayValue:{values:a.toArray().map(u=>{if(typeof u!="number")throw l.Bu("VectorValues must only contain numeric values.");return Nd(l.serializer,u)})}}}}}}(r,i);throw i.Bu(`Unsupported field value: ${Ud(r)}`)}(t,e)}function x0(t,e){const n={};return B_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ni(t,(r,i)=>{const s=Fl(i,e.Mu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function N0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof A0||t instanceof Qs||t instanceof fn||t instanceof zd||t instanceof C0)}function $d(t,e,n){if(!N0(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Ud(n);throw r==="an object"?e.Bu(t+" a custom object"):e.Bu(t+" "+r)}}function ch(t,e,n){if((e=Le(e))instanceof Fd)return e._internalPath;if(typeof e=="string")return O0(t,e);throw ll("Field path arguments must be of type string or ",t,!1,void 0,n)}const aP=new RegExp("[~\\*/\\[\\]]");function O0(t,e,n){if(e.search(aP)>=0)throw ll(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Fd(...e.split("."))._internalPath}catch{throw ll(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ll(t,e,n,r,i){const s=r&&!r.isEmpty(),a=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${r}`),a&&(u+=` in document ${i}`),u+=")"),new W(b.INVALID_ARGUMENT,l+t+u)}function D0(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lP(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function uP(t,e){return function(r,i){const s=new Er;return r.asyncQueue.enqueueAndForget(async()=>zC(await QC(r),i,s)),s.promise}(k0(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=rP(e)}set(e,n,r){this._verifyNotCommitted();const i=Ku(e,this._firestore),s=lP(i.converter,n,r),a=iP(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(a.toMutation(i._key,Ut.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=Ku(e,this._firestore);let a;return a=typeof(n=Le(n))=="string"||n instanceof Fd?oP(this._dataReader,"WriteBatch.update",s._key,n,r,i):sP(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(a.toMutation(s._key,Ut.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Ku(e,this._firestore);return this._mutations=this._mutations.concat(new Od(n._key,Ut.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new W(b.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ku(t,e){if((t=Le(t)).firestore!==e)throw new W(b.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hP(t){return k0(t=I0(t,T0)),new cP(t,e=>uP(t,e))}(function(e,n=!0){(function(i){xi=i})(Pi),yi(new Pr("firestore",(r,{instanceIdentifier:i,options:s})=>{const a=r.getProvider("app").getImmediate(),l=new T0(new BA(r.getProvider("auth-internal")),new GA(r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new W(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new tl(h.options.projectId,f)}(a,i),a);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Kn(Vm,"4.7.3",e),Kn(Vm,"4.7.3","esm2017")})();const dP={apiKey:"AIzaSyBJRAaALwjg5wc-AlUp9EKl2p9KZ_6pFZE",authDomain:"galvanic-style-402121.firebaseapp.com",projectId:"galvanic-style-402121",storageBucket:"galvanic-style-402121.firebasestorage.app",messagingSenderId:"155523642474",appId:"1:155523642474:web:a6c150d7f2ca6d9452c613",measurementId:"G-LB6KT5LMDR"},L0=Qv(dP),Xs=UA(L0);S0(L0);const M0=new sn,V0=M.createContext({currentUser:null,isLoading:!0}),fP=({children:t})=>{const[e,n]=M.useState(null),[r,i]=M.useState(!0);return M.useEffect(()=>{kk(Xs,E_).then(()=>{const s=Pk(Xs,a=>{n(a),i(!1)},a=>{console.error("Auth state change error:",a),i(!1)});return()=>s()}).catch(s=>{console.error("Error setting persistence:",s),i(!1)})},[]),C.jsx(V0.Provider,{value:{currentUser:e,isLoading:r},children:r?C.jsx("div",{className:"flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900",children:C.jsx("div",{className:"animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-holy-purple-600"})}):t})},Di=()=>M.useContext(V0),pP=({theme:t,toggleTheme:e})=>{const n=ad(),{currentUser:r}=Di(),[i,s]=M.useState(!1),a=M.useRef(null),l=async()=>{try{await x_(Xs,M0),n("/app")}catch(f){console.error("Google Sign-In Error",f)}},u=async()=>{try{await Rk(Xs),n("/")}catch(f){console.error("Logout Error",f)}},h=f=>{const m=document.getElementById(f);m&&m.scrollIntoView({behavior:"smooth",block:"start"})};return M.useEffect(()=>{const f=m=>{a.current&&!a.current.contains(m.target)&&s(!1)};return document.addEventListener("mousedown",f),()=>{document.removeEventListener("mousedown",f)}},[]),C.jsx("header",{className:"fixed w-full z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md shadow-sm",children:C.jsxs("div",{className:"container mx-auto px-4 py-4 flex justify-between items-center",children:[C.jsxs("div",{className:"flex items-center space-x-3",children:[C.jsx(Fv,{className:"text-holy-purple-600 dark:text-holy-purple-400",size:32}),C.jsx("h1",{className:"text-2xl font-bold text-gray-900 dark:text-white",children:"HolyAnswers"})]}),C.jsxs("nav",{className:"flex space-x-6 items-center",children:[C.jsx("button",{onClick:()=>h("features"),className:"text-gray-700 dark:text-gray-300 hover:text-holy-purple-600 dark:hover:text-holy-purple-400 transition-colors",children:"Features"}),C.jsx("button",{onClick:()=>h("chat"),className:"text-gray-700 dark:text-gray-300 hover:text-holy-purple-600 dark:hover:text-holy-purple-400 transition-colors",children:"Chat"}),C.jsx("button",{onClick:()=>h("mission"),className:"text-gray-700 dark:text-gray-300 hover:text-holy-purple-600 dark:hover:text-holy-purple-400 transition-colors",children:"Mission"}),C.jsx("button",{onClick:e,className:"text-gray-700 dark:text-gray-300 hover:text-holy-purple-600 dark:hover:text-holy-purple-400 transition-colors",children:t==="light"?C.jsx(JT,{size:20}):C.jsx(n1,{size:20})}),r?C.jsxs("div",{className:"relative",ref:a,children:[C.jsx("button",{onClick:()=>s(!i),className:"flex items-center justify-center rounded-full border-2 border-holy-purple-600 overflow-hidden w-10 h-10 focus:outline-none",children:C.jsx("img",{src:r.photoURL||"/default-avatar.png",alt:"Profile",className:"w-full h-full object-cover"})}),i&&C.jsxs("div",{className:"absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border dark:border-gray-700 overflow-hidden",children:[C.jsxs("button",{onClick:()=>n("/profile"),className:"w-full flex items-center px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",children:[C.jsx(ld,{className:"mr-3",size:18}),"Profile"]}),C.jsxs("button",{onClick:()=>n("/settings"),className:"w-full flex items-center px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors",children:[C.jsx(e1,{className:"mr-3",size:18}),"Settings"]}),C.jsx("div",{className:"border-t dark:border-gray-700 my-1"}),C.jsxs("button",{onClick:u,className:"w-full flex items-center px-4 py-2 text-left text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors",children:[C.jsx(YT,{className:"mr-3",size:18}),"Logout"]})]})]}):C.jsxs("button",{onClick:l,className:"bg-holy-purple-600 text-white px-4 py-2 rounded-full hover:bg-holy-purple-700 dark:bg-holy-purple-500 dark:hover:bg-holy-purple-600 transition-colors flex items-center space-x-2",children:[C.jsx(ud,{size:18}),C.jsx("span",{children:"Get Started"})]})]})]})})},mP=({theme:t,scrollToChatInterface:e})=>{const n=ad(),{currentUser:r}=Di(),i=async()=>{try{await x_(Xs,M0),n("/app")}catch(a){console.error("Google Sign-In Error",a)}},s=()=>{r?n("/app"):e()};return C.jsx("section",{className:"relative py-24 bg-white dark:bg-gray-900",children:C.jsxs("div",{className:"container mx-auto px-4 text-center",children:[C.jsx("h1",{className:"text-5xl font-bold mb-6 text-gray-900 dark:text-white",children:"AI-Powered Biblical Insights"}),C.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto",children:"Explore deep, contextual understanding of biblical texts with our advanced AI companion"}),C.jsxs("div",{className:"flex justify-center space-x-4",children:[C.jsxs("button",{onClick:i,className:"bg-holy-purple-600 text-white px-8 py-4 rounded-full hover:bg-holy-purple-700 dark:bg-holy-purple-500 dark:hover:bg-holy-purple-600 transition-colors flex items-center justify-center space-x-3",children:[C.jsx(ud,{size:24}),C.jsx("span",{children:"Get Started"})]}),C.jsxs("button",{onClick:s,className:"bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-8 py-4 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors flex items-center justify-center space-x-3",children:[C.jsx("span",{children:"Go to Chat App"}),C.jsx(FT,{size:24})]})]})]})})},gP=[{icon:BT,title:"Advanced Understanding",description:"Leveraging cutting-edge natural language processing to comprehend nuanced conversations."},{icon:GT,title:"Multilingual Support",description:"Communicate seamlessly across multiple languages with unprecedented accuracy."},{icon:t1,title:"Privacy First",description:"Your conversations are encrypted and protected with state-of-the-art security protocols."},{icon:ud,title:"Lightning Fast",description:"Instant responses with minimal latency, powered by advanced machine learning algorithms."}],yP=({theme:t})=>C.jsx("section",{id:"features",className:"py-20 bg-gray-50 dark:bg-gray-800",children:C.jsxs("div",{className:"container mx-auto px-4",children:[C.jsxs("div",{className:"text-center mb-12",children:[C.jsx("h2",{className:"text-4xl font-bold text-gray-900 dark:text-white mb-4",children:"Powerful Features, Intelligent Design"}),C.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto",children:"Our AI companion is more than just a chatbot. It's an intelligent system designed to understand, adapt, and enhance your communication experience."})]}),C.jsx("div",{className:"grid md:grid-cols-4 gap-8",children:gP.map((e,n)=>C.jsxs("div",{className:"bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow group",children:[C.jsx(e.icon,{className:"text-holy-purple-600 dark:text-holy-purple-400 mb-4 group-hover:scale-110 transition-transform",size:48}),C.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white mb-3",children:e.title}),C.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:e.description})]},n))})]})}),Ve=[];for(let t=0;t<256;++t)Ve.push((t+256).toString(16).slice(1));function vP(t,e=0){return(Ve[t[e+0]]+Ve[t[e+1]]+Ve[t[e+2]]+Ve[t[e+3]]+"-"+Ve[t[e+4]]+Ve[t[e+5]]+"-"+Ve[t[e+6]]+Ve[t[e+7]]+"-"+Ve[t[e+8]]+Ve[t[e+9]]+"-"+Ve[t[e+10]]+Ve[t[e+11]]+Ve[t[e+12]]+Ve[t[e+13]]+Ve[t[e+14]]+Ve[t[e+15]]).toLowerCase()}let qu;const _P=new Uint8Array(16);function wP(){if(!qu){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");qu=crypto.getRandomValues.bind(crypto)}return qu(_P)}const EP=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),cg={randomUUID:EP};function Qu(t,e,n){var i;if(cg.randomUUID&&!t)return cg.randomUUID();t=t||{};const r=t.random??((i=t.rng)==null?void 0:i.call(t))??wP();if(r.length<16)throw new Error("Random bytes length must be >= 16");return r[6]=r[6]&15|64,r[8]=r[8]&63|128,vP(r)}const b0=M.createContext({currentSession:null,sessions:[],createNewSession:()=>{},addMessage:()=>{},updateStreamingMessage:()=>{},selectSession:()=>{},deleteSession:()=>{}}),U0=({children:t})=>{const[e,n]=M.useState([{id:Qu(),title:"New Chat",messages:[],createdAt:Date.now(),userId:""}]),[r,i]=M.useState(e[0]),{currentUser:s}=Di(),a=(A,S)=>{console.error(`[ChatContext Error] ${A}`,S)},l=M.useCallback(A=>{i(S=>{if(!S)return null;const N=[...S.messages];if(N.length>0){const D=N.length-1,_=N[D];return _.sender==="ai"&&_.isStreaming&&(N[D]={..._,content:A}),{...S,messages:N}}return S})},[]),u=M.useCallback(()=>{if(!s)return a("Cannot create session: No authenticated user"),null;const A={id:Qu(),title:"New Chat",messages:[],createdAt:Date.now(),userId:s.uid};return n(S=>[...S,A]),i(A),A},[s]),h=M.useCallback(async(A,S)=>{if(!s)return a("Cannot save message: No authenticated user"),!1;try{const N=S0(),D=hP(N),_=lg(N,"chatSessions",A.id);D.set(_,{id:A.id,title:A.title,createdAt:A.createdAt,userId:s.uid},{merge:!0});const v=lg(JC(_,"messages"),S.id);return D.set(v,{id:S.id,content:S.content,sender:S.sender,timestamp:S.timestamp,isStreaming:S.isStreaming||!1,userId:s.uid}),await D.commit(),console.log("Message saved successfully:",S.id),!0}catch(N){return a("Error saving message to Firestore",N),!1}},[s]),f=M.useCallback((A,S,N)=>{if(!s){a("Cannot add message: No authenticated user");return}const D=r||u();if(!D)return;const _={id:Qu(),content:A,sender:S,timestamp:Date.now(),isStreaming:N||!1,sessionId:D.id};i(v=>{if(!v)return null;const k={...v,messages:[...v.messages,_]};return h(k,_),k})},[r,u,h,s]),m=M.useCallback(A=>{const S=e.find(N=>N.id===A);S&&i(S)},[e]),y=M.useCallback(A=>{n(S=>S.filter(N=>N.id!==A)),(r==null?void 0:r.id)===A&&i(null)},[r]);return C.jsx(b0.Provider,{value:{currentSession:r,sessions:e,createNewSession:u,addMessage:f,updateStreamingMessage:l,selectSession:m,deleteSession:y},children:t})},Hd=()=>M.useContext(b0),ea=10,Xu="holyanswers_demo_message_count",IP=({theme:t})=>{const{currentSession:e,addMessage:n}=Hd(),[r,i]=M.useState(""),[s,a]=M.useState(!1),[l,u]=M.useState(!1),[h,f]=M.useState(()=>{const A=localStorage.getItem(Xu);return A?parseInt(A,10):0});M.useEffect(()=>{localStorage.setItem(Xu,h.toString())},[h]);const m=M.useCallback(async()=>{var A;if(!(h>=ea)&&r.trim()){n(r,"user"),i(""),a(!0);try{const N=(A=(await fetch("https://holyanswers-155523642474.us-central1.run.app",{method:"POST",body:new URLSearchParams({user_input:r}),headers:{"Content-Type":"application/x-www-form-urlencoded"}})).body)==null?void 0:A.getReader(),D=new TextDecoder;let _="";u(!0),n("","ai",!0);const v=async()=>{if(!N)return;const{done:k,value:L}=await N.read();if(k){n(_,"ai"),f(z=>{const E=z+2;return localStorage.setItem(Xu,E.toString()),E}),u(!1),a(!1);return}const j=D.decode(L,{stream:!0});_+=j,n(_,"ai",!0),await v()};await v()}catch(S){console.error("Chat API Error:",S),n("Sorry, there was an error processing your request.","ai"),a(!1),u(!1)}}},[r,h,n]),y=A=>{A.key==="Enter"&&!s&&m()};return C.jsx("section",{id:"chat",className:"py-20 bg-white dark:bg-gray-900",children:C.jsxs("div",{className:"container mx-auto px-4 max-w-4xl",children:[C.jsxs("div",{className:"text-center mb-12",children:[C.jsx("h2",{className:"text-4xl font-bold text-gray-900 dark:text-white mb-4",children:"Holy Answers AI Chat"}),C.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300",children:"Experience intelligent, context-aware conversations"})]}),C.jsx("div",{className:"bg-gray-100 dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg",children:h>=ea?C.jsxs("div",{className:"flex flex-col items-center justify-center h-[600px] text-center p-6",children:[C.jsx(XT,{className:"text-gray-500 dark:text-gray-400 mb-4",size:48}),C.jsx("h3",{className:"text-2xl font-bold text-gray-900 dark:text-white mb-2",children:"Demo Limit Reached"}),C.jsxs("p",{className:"text-gray-600 dark:text-gray-300 mb-4",children:["You've reached the maximum of ",ea," messages in this demo. Please sign up to continue chatting with Holy Answers."]})]}):C.jsxs(C.Fragment,{children:[C.jsxs("div",{className:"h-[500px] overflow-y-auto p-6 space-y-4",children:[e==null?void 0:e.messages.map(A=>C.jsxs("div",{className:`flex items-start space-x-3 ${A.sender==="user"?"justify-end":"justify-start"}`,children:[A.sender==="ai"&&C.jsx(Gc,{className:"text-holy-purple-600 dark:text-holy-purple-400",size:24}),C.jsx("div",{className:`px-4 py-2 rounded-2xl max-w-[70%] ${A.sender==="user"?"bg-holy-purple-600 text-white":"bg-white dark:bg-gray-700 text-gray-900 dark:text-white border dark:border-gray-600"}`,children:A.content}),A.sender==="user"&&C.jsx(ld,{className:"text-gray-600 dark:text-gray-300",size:24})]},A.id)),s&&C.jsxs("div",{className:"flex justify-start items-center space-x-3",children:[C.jsx(Gc,{className:"text-holy-purple-600 dark:text-holy-purple-400",size:24}),C.jsxs("div",{className:"flex items-center space-x-2 px-4 py-2 bg-white dark:bg-gray-700 rounded-2xl",children:[C.jsx(QT,{className:"animate-spin",size:20}),C.jsx("span",{className:"text-gray-600 dark:text-gray-300",children:"Thinking..."})]})]})]}),C.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 border-t dark:border-gray-700 flex space-x-3",children:[C.jsxs("div",{className:"flex-grow relative",children:[C.jsx("input",{type:"text",value:r,onChange:A=>i(A.target.value),onKeyPress:y,placeholder:"Type your message...",disabled:s,className:"w-full px-4 py-2 border dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-holy-purple-500 dark:bg-gray-700 dark:text-white disabled:opacity-50"}),C.jsxs("div",{className:"absolute right-4 top-1/2 transform -translate-y-1/2 text-xs text-gray-500 dark:text-gray-400",children:[h,"/",ea]})]}),C.jsx("button",{onClick:m,disabled:s||!r.trim(),className:"bg-holy-purple-600 text-white p-3 rounded-full hover:bg-holy-purple-700 dark:bg-holy-purple-500 dark:hover:bg-holy-purple-600 transition-colors disabled:opacity-50",children:C.jsx(jv,{size:20})})]})]})})]})})},TP=({theme:t})=>C.jsx("section",{id:"mission",className:"py-20 bg-gray-50 dark:bg-gray-800",children:C.jsxs("div",{className:"container mx-auto px-4",children:[C.jsxs("div",{className:"text-center mb-12",children:[C.jsx("h2",{className:"text-4xl font-bold text-gray-900 dark:text-white mb-4",children:"Empowering Faith Through Technology"}),C.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto",children:"HolyAnswers: Where AI meets spiritual insight, providing biblically-grounded assistance"})]}),C.jsx("div",{className:"grid md:grid-cols-3 gap-8",children:[{icon:zT,title:"Scripture-Informed Responses",description:"AI that understands biblical context and provides spiritually-aligned insights."},{icon:HT,title:"Christian Worldview",description:"Conversations rooted in Christian principles, supporting your spiritual journey."},{icon:KT,title:"Compassionate Guidance",description:"Combining technological intelligence with biblical wisdom and empathy."}].map((e,n)=>C.jsxs("div",{className:"bg-white dark:bg-gray-700 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow text-center",children:[C.jsx("div",{className:"flex justify-center mb-4",children:C.jsx(e.icon,{className:"text-holy-purple-600 dark:text-holy-purple-400",size:48,strokeWidth:1.5})}),C.jsx("h3",{className:"text-xl font-bold text-gray-900 dark:text-white mb-3",children:e.title}),C.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:e.description})]},n))})]})}),SP=({theme:t})=>C.jsxs("footer",{className:"bg-gray-900 dark:bg-black text-white py-16",children:[C.jsxs("div",{className:"container mx-auto px-4 grid md:grid-cols-4 gap-8",children:[C.jsxs("div",{children:[C.jsxs("div",{className:"flex items-center space-x-3 mb-4",children:[C.jsx(Fv,{className:"text-holy-purple-500",size:32}),C.jsx("h3",{className:"text-2xl font-bold",children:"HolyAnswers"})]}),C.jsx("p",{className:"text-gray-400",children:"Revolutionizing communication through intelligent, context-aware AI technology."})]}),C.jsxs("div",{children:[C.jsx("h4",{className:"font-bold mb-4 text-white",children:"Product"}),C.jsxs("ul",{className:"space-y-2",children:[C.jsx("li",{children:C.jsx("a",{href:"#features",className:"text-gray-400 hover:text-white",children:"Features"})}),C.jsx("li",{children:C.jsx("a",{href:"#chat",className:"text-gray-400 hover:text-white",children:"Chat Interface"})}),C.jsx("li",{children:C.jsx("a",{href:"#testimonials",className:"text-gray-400 hover:text-white",children:"Testimonials"})})]})]}),C.jsxs("div",{children:[C.jsx("h4",{className:"font-bold mb-4 text-white",children:"Company"}),C.jsxs("ul",{className:"space-y-2",children:[C.jsx("li",{children:C.jsx("a",{href:"#",className:"text-gray-400 hover:text-white",children:"About Us"})}),C.jsx("li",{children:C.jsx("a",{href:"#",className:"text-gray-400 hover:text-white",children:"Careers"})}),C.jsx("li",{children:C.jsx("a",{href:"#",className:"text-gray-400 hover:text-white",children:"Press"})})]})]}),C.jsxs("div",{children:[C.jsx("h4",{className:"font-bold mb-4 text-white",children:"Connect"}),C.jsxs("div",{className:"flex space-x-4",children:[C.jsx("a",{href:"#",className:"text-gray-400 hover:text-white",children:C.jsx(i1,{})}),C.jsx("a",{href:"#",className:"text-gray-400 hover:text-white",children:C.jsx(qT,{})}),C.jsx("a",{href:"#",className:"text-gray-400 hover:text-white",children:C.jsx(WT,{})})]})]})]}),C.jsx("div",{className:"container mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center",children:C.jsx("p",{className:"text-gray-500",children:"© 2024 HolyAnswers. All rights reserved."})})]});function kP(){const[t,e]=M.useState("light"),[n,r]=M.useState(!1),i=M.useRef(null);M.useEffect(()=>{const l=localStorage.getItem("theme");l&&e(l),document.documentElement.style.scrollPaddingTop="80px",r(!0)},[]);const s=()=>{const l=t==="light"?"dark":"light";e(l),localStorage.setItem("theme",l)},a=()=>{var l;(l=i.current)==null||l.scrollIntoView({behavior:"smooth"})};return C.jsxs("div",{className:`
        ${t==="dark"?"dark":"light"} 
        min-h-screen 
        scroll-smooth 
        ${n?"transition-colors duration-300":""}
      `,children:[C.jsx(pP,{theme:t,toggleTheme:s}),C.jsxs("main",{className:"bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300",children:[C.jsx(mP,{theme:t,scrollToChatInterface:a}),C.jsx(yP,{theme:t}),C.jsx("div",{ref:i,children:C.jsx(IP,{theme:t})}),C.jsx(TP,{theme:t})]}),C.jsx(SP,{theme:t})]})}const AP=()=>{const{sessions:t,currentSession:e,createNewSession:n,selectSession:r,deleteSession:i,isLoading:s}=Hd();return s?C.jsx("div",{className:"w-64 bg-gray-100 dark:bg-gray-800 p-4 flex items-center justify-center",children:C.jsx("div",{className:"animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-holy-purple-600"})}):C.jsxs("div",{className:"w-64 bg-gray-100 dark:bg-gray-800 p-4 border-r border-gray-200 dark:border-gray-700 flex flex-col",children:[C.jsxs("div",{className:"flex justify-between items-center mb-4",children:[C.jsx("h2",{className:"text-lg font-semibold text-gray-800 dark:text-white",children:"Chat History"}),C.jsx("button",{onClick:()=>n(),className:"text-holy-purple-600 hover:text-holy-purple-700 dark:text-holy-purple-400 dark:hover:text-holy-purple-300",children:C.jsx(ZT,{size:24})})]}),C.jsx("div",{className:"flex-1 overflow-y-auto space-y-2",children:t.length===0?C.jsx("p",{className:"text-gray-500 text-center",children:"No chat sessions"}):t.map(a=>C.jsxs("div",{onClick:()=>r(a.id),className:`
                p-3 rounded-lg cursor-pointer transition-colors 
                ${(e==null?void 0:e.id)===a.id?"bg-holy-purple-100 dark:bg-holy-purple-700/20":"hover:bg-gray-200 dark:hover:bg-gray-700"}
              `,children:[C.jsxs("div",{className:"flex justify-between items-center",children:[C.jsx("span",{className:"text-gray-800 dark:text-white truncate flex-1",children:a.title}),C.jsx("button",{onClick:l=>{l.stopPropagation(),i(a.id)},className:"text-red-500 hover:text-red-600 ml-2",children:C.jsx(r1,{size:16})})]}),C.jsx("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-1",children:new Date(a.createdAt).toLocaleString()})]},a.id))})]})},CP=({theme:t})=>{const[e,n]=M.useState(""),[r,i]=M.useState(!1),{currentSession:s,addMessage:a,updateStreamingMessage:l}=Hd(),{currentUser:u}=Di(),h=M.useRef(null),f=M.useRef(null);M.useEffect(()=>{var S;(S=h.current)==null||S.scrollIntoView({behavior:"smooth"})},[s==null?void 0:s.messages]);const m=async()=>{f.current&&(f.current.abort(),i(!1));try{await fetch("https://holyanswers-155523642474.us-central1.run.app/stop-generation",{method:"POST"})}catch(S){console.error("Error stopping generation:",S)}},y=async()=>{var S;if(e.trim()&&!r){const N=e.trim();a(N,"user"),n(""),i(!0),a("","ai",!0);const D=new AbortController;f.current=D;try{const v=(S=(await fetch("https://holyanswers-155523642474.us-central1.run.app",{method:"POST",body:new URLSearchParams({user_input:N}),headers:{"Content-Type":"application/x-www-form-urlencoded"},signal:D.signal})).body)==null?void 0:S.getReader(),k=new TextDecoder;let L="";const j=async()=>{if(!v)return;const{done:z,value:E}=await v.read();if(z){l(L),i(!1);return}const g=k.decode(E,{stream:!0});L+=g,l(L),await j()};await j()}catch(_){console.error("Full Error During Message Sending:",_),a("Sorry, there was an error processing your request.","ai"),i(!1),n(N)}}},A=S=>{navigator.clipboard.writeText(S)};return C.jsxs("div",{className:"flex-1 bg-white dark:bg-gray-900 p-4 flex flex-col",children:[C.jsxs("div",{className:"flex-1 overflow-y-auto mb-4 space-y-4 p-4",children:[((s==null?void 0:s.messages)||[]).map((S,N)=>C.jsxs("div",{className:`
              flex items-start space-x-3 
              ${S.sender==="user"?"justify-end":"justify-start"}
            `,children:[S.sender==="ai"&&C.jsx("div",{className:"w-10 h-10 bg-holy-purple-500 text-white rounded-full flex items-center justify-center",children:C.jsx(Gc,{size:24})}),C.jsxs("div",{className:`
                p-3 rounded-lg max-w-[80%] relative group
                ${S.sender==="user"?"bg-holy-purple-100 dark:bg-holy-purple-700/20 text-gray-900 dark:text-white":"bg-gray-100 dark:bg-gray-700/50 dark:text-gray-100"}
                ${S.sender==="user"?"border-holy-purple-200 dark:border-holy-purple-700":"border-gray-200 dark:border-gray-600"}
                border shadow-sm
              `,children:[C.jsx("p",{dangerouslySetInnerHTML:{__html:S.content.replace(/\n/g,"<br>").replace(/\*\*(.*?)\*\*/g,"<b>$1</b>").replace(/\*/g,"•")}}),S.sender==="ai"&&C.jsx("button",{onClick:()=>A(S.content),className:"absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity",children:C.jsx($T,{size:16,className:"text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100"})})]}),S.sender==="user"&&C.jsx("div",{className:"w-10 h-10 bg-holy-purple-600 text-white rounded-full flex items-center justify-center",children:u!=null&&u.photoURL?C.jsx("img",{src:u.photoURL,alt:"User",className:"w-full h-full rounded-full object-cover"}):C.jsx(ld,{size:24})})]},S.id||N)),C.jsx("div",{ref:h})]}),C.jsxs("div",{className:"flex items-center space-x-2 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg",children:[C.jsx("input",{type:"text",value:e,onChange:S=>n(S.target.value),onKeyPress:S=>S.key==="Enter"&&y(),placeholder:"Type your message...",disabled:r,className:"flex-1 p-2 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 disabled:opacity-50"}),C.jsx("button",{onClick:r?m:y,className:`
            ${r?"bg-red-500 text-white hover:bg-red-600":"bg-holy-purple-600 text-white hover:bg-holy-purple-700"}
            p-2 rounded-full transition-colors dark:bg-holy-purple-700 dark:hover:bg-holy-purple-600
          `,children:r?C.jsx(s1,{size:20}):C.jsx(jv,{size:20})})]})]})},PP=()=>{const{currentUser:t}=Di(),[e,n]=M.useState("light"),[r,i]=M.useState(!1);return M.useEffect(()=>{const s=localStorage.getItem("theme");s&&n(s),i(!0)},[]),t?C.jsx(U0,{children:C.jsx("div",{className:`
          ${e==="dark"?"dark":"light"} 
          min-h-screen 
          bg-white 
          dark:bg-gray-900 
          text-gray-900 
          dark:text-white 
          ${r?"transition-colors duration-300":""}
        `,children:C.jsxs("div",{className:"flex h-screen",children:[C.jsx(AP,{}),C.jsx(CP,{theme:e})]})})}):C.jsx(Uv,{to:"/",replace:!0})},RP=({children:t})=>{const{currentUser:e,isLoading:n}=Di();return n?C.jsx("div",{className:"flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900",children:C.jsx("div",{className:"animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-holy-purple-600"})}):e?C.jsx(C.Fragment,{children:t}):C.jsx(Uv,{to:"/",replace:!0})};Sv(document.getElementById("root")).render(C.jsx(Eg.StrictMode,{children:C.jsx(bT,{children:C.jsx(fP,{children:C.jsx(U0,{children:C.jsxs(LT,{children:[C.jsx(Hc,{path:"/",element:C.jsx(kP,{})}),C.jsx(Hc,{path:"/app",element:C.jsx(RP,{children:C.jsx(PP,{})})})]})})})})}));
