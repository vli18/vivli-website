(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function mg(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Vf={exports:{}},To={};var sx;function Qv(){if(sx)return To;sx=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return To.Fragment=t,To.jsx=i,To.jsxs=i,To}var ox;function Jv(){return ox||(ox=1,Vf.exports=Qv()),Vf.exports}var _e=Jv(),kf={exports:{}},rt={};var lx;function $v(){if(lx)return rt;lx=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function y(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,b={};function v(L,ae,ye){this.props=L,this.context=ae,this.refs=b,this.updater=ye||A}v.prototype.isReactComponent={},v.prototype.setState=function(L,ae){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,ae,"setState")},v.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function P(){}P.prototype=v.prototype;function U(L,ae,ye){this.props=L,this.context=ae,this.refs=b,this.updater=ye||A}var B=U.prototype=new P;B.constructor=U,R(B,v.prototype),B.isPureReactComponent=!0;var k=Array.isArray;function N(){}var F={H:null,A:null,T:null,S:null},ne=Object.prototype.hasOwnProperty;function w(L,ae,ye){var Te=ye.ref;return{$$typeof:o,type:L,key:ae,ref:Te!==void 0?Te:null,props:ye}}function C(L,ae){return w(L.type,ae,L.props)}function V(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function ee(L){var ae={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ye){return ae[ye]})}var oe=/\/+/g;function me(L,ae){return typeof L=="object"&&L!==null&&L.key!=null?ee(""+L.key):ae.toString(36)}function fe(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(N,N):(L.status="pending",L.then(function(ae){L.status==="pending"&&(L.status="fulfilled",L.value=ae)},function(ae){L.status==="pending"&&(L.status="rejected",L.reason=ae)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function z(L,ae,ye,Te,ze){var te=typeof L;(te==="undefined"||te==="boolean")&&(L=null);var le=!1;if(L===null)le=!0;else switch(te){case"bigint":case"string":case"number":le=!0;break;case"object":switch(L.$$typeof){case o:case t:le=!0;break;case _:return le=L._init,z(le(L._payload),ae,ye,Te,ze)}}if(le)return ze=ze(L),le=Te===""?"."+me(L,0):Te,k(ze)?(ye="",le!=null&&(ye=le.replace(oe,"$&/")+"/"),z(ze,ae,ye,"",function(Xe){return Xe})):ze!=null&&(V(ze)&&(ze=C(ze,ye+(ze.key==null||L&&L.key===ze.key?"":(""+ze.key).replace(oe,"$&/")+"/")+le)),ae.push(ze)),1;le=0;var we=Te===""?".":Te+":";if(k(L))for(var He=0;He<L.length;He++)Te=L[He],te=we+me(Te,He),le+=z(Te,ae,ye,te,ze);else if(He=y(L),typeof He=="function")for(L=He.call(L),He=0;!(Te=L.next()).done;)Te=Te.value,te=we+me(Te,He++),le+=z(Te,ae,ye,te,ze);else if(te==="object"){if(typeof L.then=="function")return z(fe(L),ae,ye,Te,ze);throw ae=String(L),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.")}return le}function j(L,ae,ye){if(L==null)return L;var Te=[],ze=0;return z(L,Te,"","",function(te){return ae.call(ye,te,ze++)}),Te}function Y(L){if(L._status===-1){var ae=L._result;ae=ae(),ae.then(function(ye){(L._status===0||L._status===-1)&&(L._status=1,L._result=ye)},function(ye){(L._status===0||L._status===-1)&&(L._status=2,L._result=ye)}),L._status===-1&&(L._status=0,L._result=ae)}if(L._status===1)return L._result.default;throw L._result}var ge=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ae=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(ae))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},ve={map:j,forEach:function(L,ae,ye){j(L,function(){ae.apply(this,arguments)},ye)},count:function(L){var ae=0;return j(L,function(){ae++}),ae},toArray:function(L){return j(L,function(ae){return ae})||[]},only:function(L){if(!V(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return rt.Activity=g,rt.Children=ve,rt.Component=v,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=U,rt.StrictMode=r,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,rt.__COMPILER_RUNTIME={__proto__:null,c:function(L){return F.H.useMemoCache(L)}},rt.cache=function(L){return function(){return L.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(L,ae,ye){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Te=R({},L.props),ze=L.key;if(ae!=null)for(te in ae.key!==void 0&&(ze=""+ae.key),ae)!ne.call(ae,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&ae.ref===void 0||(Te[te]=ae[te]);var te=arguments.length-2;if(te===1)Te.children=ye;else if(1<te){for(var le=Array(te),we=0;we<te;we++)le[we]=arguments[we+2];Te.children=le}return w(L.type,ze,Te)},rt.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},rt.createElement=function(L,ae,ye){var Te,ze={},te=null;if(ae!=null)for(Te in ae.key!==void 0&&(te=""+ae.key),ae)ne.call(ae,Te)&&Te!=="key"&&Te!=="__self"&&Te!=="__source"&&(ze[Te]=ae[Te]);var le=arguments.length-2;if(le===1)ze.children=ye;else if(1<le){for(var we=Array(le),He=0;He<le;He++)we[He]=arguments[He+2];ze.children=we}if(L&&L.defaultProps)for(Te in le=L.defaultProps,le)ze[Te]===void 0&&(ze[Te]=le[Te]);return w(L,te,ze)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(L){return{$$typeof:h,render:L}},rt.isValidElement=V,rt.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:Y}},rt.memo=function(L,ae){return{$$typeof:p,type:L,compare:ae===void 0?null:ae}},rt.startTransition=function(L){var ae=F.T,ye={};F.T=ye;try{var Te=L(),ze=F.S;ze!==null&&ze(ye,Te),typeof Te=="object"&&Te!==null&&typeof Te.then=="function"&&Te.then(N,ge)}catch(te){ge(te)}finally{ae!==null&&ye.types!==null&&(ae.types=ye.types),F.T=ae}},rt.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},rt.use=function(L){return F.H.use(L)},rt.useActionState=function(L,ae,ye){return F.H.useActionState(L,ae,ye)},rt.useCallback=function(L,ae){return F.H.useCallback(L,ae)},rt.useContext=function(L){return F.H.useContext(L)},rt.useDebugValue=function(){},rt.useDeferredValue=function(L,ae){return F.H.useDeferredValue(L,ae)},rt.useEffect=function(L,ae){return F.H.useEffect(L,ae)},rt.useEffectEvent=function(L){return F.H.useEffectEvent(L)},rt.useId=function(){return F.H.useId()},rt.useImperativeHandle=function(L,ae,ye){return F.H.useImperativeHandle(L,ae,ye)},rt.useInsertionEffect=function(L,ae){return F.H.useInsertionEffect(L,ae)},rt.useLayoutEffect=function(L,ae){return F.H.useLayoutEffect(L,ae)},rt.useMemo=function(L,ae){return F.H.useMemo(L,ae)},rt.useOptimistic=function(L,ae){return F.H.useOptimistic(L,ae)},rt.useReducer=function(L,ae,ye){return F.H.useReducer(L,ae,ye)},rt.useRef=function(L){return F.H.useRef(L)},rt.useState=function(L){return F.H.useState(L)},rt.useSyncExternalStore=function(L,ae,ye){return F.H.useSyncExternalStore(L,ae,ye)},rt.useTransition=function(){return F.H.useTransition()},rt.version="19.2.0",rt}var cx;function mh(){return cx||(cx=1,kf.exports=$v()),kf.exports}var Di=mh();const eS=mg(Di);var Xf={exports:{}},Ao={},Wf={exports:{}},qf={};var ux;function tS(){return ux||(ux=1,(function(o){function t(z,j){var Y=z.length;z.push(j);e:for(;0<Y;){var ge=Y-1>>>1,ve=z[ge];if(0<l(ve,j))z[ge]=j,z[Y]=ve,Y=ge;else break e}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var j=z[0],Y=z.pop();if(Y!==j){z[0]=Y;e:for(var ge=0,ve=z.length,L=ve>>>1;ge<L;){var ae=2*(ge+1)-1,ye=z[ae],Te=ae+1,ze=z[Te];if(0>l(ye,Y))Te<ve&&0>l(ze,ye)?(z[ge]=ze,z[Te]=Y,ge=Te):(z[ge]=ye,z[ae]=Y,ge=ae);else if(Te<ve&&0>l(ze,Y))z[ge]=ze,z[Te]=Y,ge=Te;else break e}}return j}function l(z,j){var Y=z.sortIndex-j.sortIndex;return Y!==0?Y:z.id-j.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],_=1,g=null,S=3,y=!1,A=!1,R=!1,b=!1,v=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function B(z){for(var j=i(p);j!==null;){if(j.callback===null)r(p);else if(j.startTime<=z)r(p),j.sortIndex=j.expirationTime,t(m,j);else break;j=i(p)}}function k(z){if(R=!1,B(z),!A)if(i(m)!==null)A=!0,N||(N=!0,ee());else{var j=i(p);j!==null&&fe(k,j.startTime-z)}}var N=!1,F=-1,ne=5,w=-1;function C(){return b?!0:!(o.unstable_now()-w<ne)}function V(){if(b=!1,N){var z=o.unstable_now();w=z;var j=!0;try{e:{A=!1,R&&(R=!1,P(F),F=-1),y=!0;var Y=S;try{t:{for(B(z),g=i(m);g!==null&&!(g.expirationTime>z&&C());){var ge=g.callback;if(typeof ge=="function"){g.callback=null,S=g.priorityLevel;var ve=ge(g.expirationTime<=z);if(z=o.unstable_now(),typeof ve=="function"){g.callback=ve,B(z),j=!0;break t}g===i(m)&&r(m),B(z)}else r(m);g=i(m)}if(g!==null)j=!0;else{var L=i(p);L!==null&&fe(k,L.startTime-z),j=!1}}break e}finally{g=null,S=Y,y=!1}j=void 0}}finally{j?ee():N=!1}}}var ee;if(typeof U=="function")ee=function(){U(V)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,me=oe.port2;oe.port1.onmessage=V,ee=function(){me.postMessage(null)}}else ee=function(){v(V,0)};function fe(z,j){F=v(function(){z(o.unstable_now())},j)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(z){switch(S){case 1:case 2:case 3:var j=3;break;default:j=S}var Y=S;S=j;try{return z()}finally{S=Y}},o.unstable_requestPaint=function(){b=!0},o.unstable_runWithPriority=function(z,j){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=S;S=z;try{return j()}finally{S=Y}},o.unstable_scheduleCallback=function(z,j,Y){var ge=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ge+Y:ge):Y=ge,z){case 1:var ve=-1;break;case 2:ve=250;break;case 5:ve=1073741823;break;case 4:ve=1e4;break;default:ve=5e3}return ve=Y+ve,z={id:_++,callback:j,priorityLevel:z,startTime:Y,expirationTime:ve,sortIndex:-1},Y>ge?(z.sortIndex=Y,t(p,z),i(m)===null&&z===i(p)&&(R?(P(F),F=-1):R=!0,fe(k,Y-ge))):(z.sortIndex=ve,t(m,z),A||y||(A=!0,N||(N=!0,ee()))),z},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(z){var j=S;return function(){var Y=S;S=j;try{return z.apply(this,arguments)}finally{S=Y}}}})(qf)),qf}var fx;function nS(){return fx||(fx=1,Wf.exports=tS()),Wf.exports}var Yf={exports:{}},wn={};var dx;function iS(){if(dx)return wn;dx=1;var o=mh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,_)},wn.flushSync=function(m){var p=d.T,_=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=_,r.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:y}):_==="script"&&r.d.X(m,{crossOrigin:g,integrity:S,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=h(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},wn.requestFormReset=function(m){r.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,_){return d.H.useFormState(m,p,_)},wn.useFormStatus=function(){return d.H.useHostTransitionStatus()},wn.version="19.2.0",wn}var hx;function aS(){if(hx)return Yf.exports;hx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Yf.exports=iS(),Yf.exports}var px;function rS(){if(px)return Ao;px=1;var o=nS(),t=mh(),i=aS();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var x=!1,E=c.child;E;){if(E===a){x=!0,a=c,s=f;break}if(E===s){x=!0,s=c,a=f;break}E=E.sibling}if(!x){for(E=f.child;E;){if(E===a){x=!0,a=f,s=c;break}if(E===s){x=!0,s=f,a=c;break}E=E.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),U=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function ee(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Symbol.for("react.client.reference");function me(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case R:return"Fragment";case v:return"Profiler";case b:return"StrictMode";case k:return"Suspense";case N:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case U:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case B:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case F:return n=e.displayName||null,n!==null?n:me(e.type)||"Memo";case ne:n=e._payload,e=e._init;try{return me(e(n))}catch{}}return null}var fe=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},ge=[],ve=-1;function L(e){return{current:e}}function ae(e){0>ve||(e.current=ge[ve],ge[ve]=null,ve--)}function ye(e,n){ve++,ge[ve]=e.current,e.current=n}var Te=L(null),ze=L(null),te=L(null),le=L(null);function we(e,n){switch(ye(te,n),ye(ze,e),ye(Te,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?wm(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=wm(n),e=Dm(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ae(Te),ye(Te,e)}function He(){ae(Te),ae(ze),ae(te)}function Xe(e){e.memoizedState!==null&&ye(le,e);var n=Te.current,a=Dm(n,e.type);n!==a&&(ye(ze,e),ye(Te,a))}function lt(e){ze.current===e&&(ae(Te),ae(ze)),le.current===e&&(ae(le),bo._currentValue=Y)}var en,dt;function Tt(e){if(en===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);en=n&&n[1]||"",dt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+en+e+dt}var I=!1;function ht(e,n){if(!e||I)return"";I=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var pe=function(){throw Error()};if(Object.defineProperty(pe.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pe,[])}catch(re){var $=re}Reflect.construct(e,[],pe)}else{try{pe.call()}catch(re){$=re}e.call(pe.prototype)}}else{try{throw Error()}catch(re){$=re}(pe=e())&&typeof pe.catch=="function"&&pe.catch(function(){})}}catch(re){if(re&&$&&typeof re.stack=="string")return[re.stack,$.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),x=f[0],E=f[1];if(x&&E){var O=x.split(`
`),Q=E.split(`
`);for(c=s=0;s<O.length&&!O[s].includes("DetermineComponentFrameRoot");)s++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(s===O.length||c===Q.length)for(s=O.length-1,c=Q.length-1;1<=s&&0<=c&&O[s]!==Q[c];)c--;for(;1<=s&&0<=c;s--,c--)if(O[s]!==Q[c]){if(s!==1||c!==1)do if(s--,c--,0>c||O[s]!==Q[c]){var ue=`
`+O[s].replace(" at new "," at ");return e.displayName&&ue.includes("<anonymous>")&&(ue=ue.replace("<anonymous>",e.displayName)),ue}while(1<=s&&0<=c);break}}}finally{I=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Tt(a):""}function mt(e,n){switch(e.tag){case 26:case 27:case 5:return Tt(e.type);case 16:return Tt("Lazy");case 13:return e.child!==n&&n!==null?Tt("Suspense Fallback"):Tt("Suspense");case 19:return Tt("SuspenseList");case 0:case 15:return ht(e.type,!1);case 11:return ht(e.type.render,!1);case 1:return ht(e.type,!0);case 31:return Tt("Activity");default:return""}}function Ot(e){try{var n="",a=null;do n+=mt(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ge=Object.prototype.hasOwnProperty,kt=o.unstable_scheduleCallback,je=o.unstable_cancelCallback,at=o.unstable_shouldYield,D=o.unstable_requestPaint,M=o.unstable_now,K=o.unstable_getCurrentPriorityLevel,he=o.unstable_ImmediatePriority,Se=o.unstable_UserBlockingPriority,se=o.unstable_NormalPriority,qe=o.unstable_LowPriority,Le=o.unstable_IdlePriority,Qe=o.log,We=o.unstable_setDisableYieldValue,be=null,Ee=null;function Ye(e){if(typeof Qe=="function"&&We(e),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(be,e)}catch{}}var Ve=Math.clz32?Math.clz32:H,Oe=Math.log,nt=Math.LN2;function H(e){return e>>>=0,e===0?32:31-(Oe(e)/nt|0)|0}var De=256,Re=262144,Ce=4194304;function Me(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xe(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?c=Me(s):(x&=E,x!==0?c=Me(x):a||(a=E&~e,a!==0&&(c=Me(a))))):(E=s&~f,E!==0?c=Me(E):x!==0?c=Me(x):a||(a=s&~e,a!==0&&(c=Me(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Be(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function it(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bt(){var e=Ce;return Ce<<=1,(Ce&62914560)===0&&(Ce=4194304),e}function At(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Cn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function kn(e,n,a,s,c,f){var x=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,O=e.expirationTimes,Q=e.hiddenUpdates;for(a=x&~a;0<a;){var ue=31-Ve(a),pe=1<<ue;E[ue]=0,O[ue]=-1;var $=Q[ue];if($!==null)for(Q[ue]=null,ue=0;ue<$.length;ue++){var re=$[ue];re!==null&&(re.lane&=-536870913)}a&=~pe}s!==0&&ko(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(x&~n))}function ko(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Ve(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function Ls(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Ve(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function Ns(e,n){var a=n&-n;return a=(a&42)!==0?1:hi(a),(a&(e.suspendedLanes|n))!==0?0:a}function hi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Qa(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Os(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:$m(e.type))}function zs(e,n){var a=j.p;try{return j.p=e,n()}finally{j.p=a}}var Xn=Math.random().toString(36).slice(2),sn="__reactFiber$"+Xn,dn="__reactProps$"+Xn,Oi="__reactContainer$"+Xn,Cr="__reactEvents$"+Xn,zc="__reactListeners$"+Xn,Pc="__reactHandles$"+Xn,Xo="__reactResources$"+Xn,Ja="__reactMarker$"+Xn;function Ps(e){delete e[sn],delete e[dn],delete e[Cr],delete e[zc],delete e[Pc]}function pa(e){var n=e[sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Oi]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Bm(e);e!==null;){if(a=e[sn])return a;e=Bm(e)}return n}e=a,a=e.parentNode}return null}function T(e){if(e=e[sn]||e[Oi]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function X(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ie(e){var n=e[Xo];return n||(n=e[Xo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function J(e){e[Ja]=!0}var q=new Set,Ae={};function Ue(e,n){Pe(e,n),Pe(e+"Capture",n)}function Pe(e,n){for(Ae[e]=n,e=0;e<n.length;e++)q.add(n[e])}var Fe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$e={},tt={};function Ze(e){return Ge.call(tt,e)?!0:Ge.call($e,e)?!1:Fe.test(e)?tt[e]=!0:($e[e]=!0,!1)}function ct(e,n,a){if(Ze(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Et(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Rt(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function St(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Xt(e){if(!e._valueTracker){var n=Nt(e)?"checked":"value";e._valueTracker=Je(e,n,""+e[n])}}function bt(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=Nt(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function _n(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ma=/[\n"\\]/g;function qt(e){return e.replace(ma,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function zi(e,n,a,s,c,f,x,E){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+St(n)):e.value!==""+St(n)&&(e.value=""+St(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?vn(e,x,St(n)):a!=null?vn(e,x,St(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+St(E):e.removeAttribute("name")}function Yt(e,n,a,s,c,f,x,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Xt(e);return}a=a!=null?""+St(a):"",n=n!=null?""+St(n):a,E||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=E?e.checked:!!s,e.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),Xt(e)}function vn(e,n,a){n==="number"&&_n(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function hn(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+St(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Sn(e,n,a){if(n!=null&&(n=""+St(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+St(a):""}function Mn(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(fe(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=St(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),Xt(e)}function Ei(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Pi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ah(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||Pi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Rh(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Ah(e,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Ah(e,f,n[f])}function Bc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Yg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Wo(e){return jg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Bi(){}var Fc=null;function Ic(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wr=null,Dr=null;function Ch(e){var n=T(e);if(n&&(e=n.stateNode)){var a=e[dn]||null;e:switch(e=n.stateNode,n.type){case"input":if(zi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+qt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[dn]||null;if(!c)throw Error(r(90));zi(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&bt(s)}break e;case"textarea":Sn(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&hn(e,!!a.multiple,n,!1)}}}var Hc=!1;function wh(e,n,a){if(Hc)return e(n,a);Hc=!0;try{var s=e(n);return s}finally{if(Hc=!1,(wr!==null||Dr!==null)&&(Ll(),wr&&(n=wr,e=Dr,Dr=wr=null,Ch(n),e)))for(n=0;n<e.length;n++)Ch(e[n])}}function Bs(e,n){var a=e.stateNode;if(a===null)return null;var s=a[dn]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gc=!1;if(Fi)try{var Fs={};Object.defineProperty(Fs,"passive",{get:function(){Gc=!0}}),window.addEventListener("test",Fs,Fs),window.removeEventListener("test",Fs,Fs)}catch{Gc=!1}var xa=null,Vc=null,qo=null;function Dh(){if(qo)return qo;var e,n=Vc,a=n.length,s,c="value"in xa?xa.value:xa.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var x=a-e;for(s=1;s<=x&&n[a-s]===c[f-s];s++);return qo=c.slice(e,1<s?1-s:void 0)}function Yo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function jo(){return!0}function Uh(){return!1}function zn(e){function n(a,s,c,f,x){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?jo:Uh,this.isPropagationStopped=Uh,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=jo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=jo)},persist:function(){},isPersistent:jo}),n}var $a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zo=zn($a),Is=g({},$a,{view:0,detail:0}),Zg=zn(Is),kc,Xc,Hs,Ko=g({},Is,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Hs&&(Hs&&e.type==="mousemove"?(kc=e.screenX-Hs.screenX,Xc=e.screenY-Hs.screenY):Xc=kc=0,Hs=e),kc)},movementY:function(e){return"movementY"in e?e.movementY:Xc}}),Lh=zn(Ko),Kg=g({},Ko,{dataTransfer:0}),Qg=zn(Kg),Jg=g({},Is,{relatedTarget:0}),Wc=zn(Jg),$g=g({},$a,{animationName:0,elapsedTime:0,pseudoElement:0}),e_=zn($g),t_=g({},$a,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),n_=zn(t_),i_=g({},$a,{data:0}),Nh=zn(i_),a_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},r_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},s_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=s_[e])?!!n[e]:!1}function qc(){return o_}var l_=g({},Is,{key:function(e){if(e.key){var n=a_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Yo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?r_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qc,charCode:function(e){return e.type==="keypress"?Yo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Yo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),c_=zn(l_),u_=g({},Ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oh=zn(u_),f_=g({},Is,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qc}),d_=zn(f_),h_=g({},$a,{propertyName:0,elapsedTime:0,pseudoElement:0}),p_=zn(h_),m_=g({},Ko,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),x_=zn(m_),g_=g({},$a,{newState:0,oldState:0}),__=zn(g_),v_=[9,13,27,32],Yc=Fi&&"CompositionEvent"in window,Gs=null;Fi&&"documentMode"in document&&(Gs=document.documentMode);var S_=Fi&&"TextEvent"in window&&!Gs,zh=Fi&&(!Yc||Gs&&8<Gs&&11>=Gs),Ph=" ",Bh=!1;function Fh(e,n){switch(e){case"keyup":return v_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ih(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ur=!1;function b_(e,n){switch(e){case"compositionend":return Ih(n);case"keypress":return n.which!==32?null:(Bh=!0,Ph);case"textInput":return e=n.data,e===Ph&&Bh?null:e;default:return null}}function y_(e,n){if(Ur)return e==="compositionend"||!Yc&&Fh(e,n)?(e=Dh(),qo=Vc=xa=null,Ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return zh&&n.locale!=="ko"?null:n.data;default:return null}}var M_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!M_[e.type]:n==="textarea"}function Gh(e,n,a,s){wr?Dr?Dr.push(s):Dr=[s]:wr=s,n=Il(n,"onChange"),0<n.length&&(a=new Zo("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Vs=null,ks=null;function E_(e){Mm(e,0)}function Qo(e){var n=X(e);if(bt(n))return e}function Vh(e,n){if(e==="change")return n}var kh=!1;if(Fi){var jc;if(Fi){var Zc="oninput"in document;if(!Zc){var Xh=document.createElement("div");Xh.setAttribute("oninput","return;"),Zc=typeof Xh.oninput=="function"}jc=Zc}else jc=!1;kh=jc&&(!document.documentMode||9<document.documentMode)}function Wh(){Vs&&(Vs.detachEvent("onpropertychange",qh),ks=Vs=null)}function qh(e){if(e.propertyName==="value"&&Qo(ks)){var n=[];Gh(n,ks,e,Ic(e)),wh(E_,n)}}function T_(e,n,a){e==="focusin"?(Wh(),Vs=n,ks=a,Vs.attachEvent("onpropertychange",qh)):e==="focusout"&&Wh()}function A_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Qo(ks)}function R_(e,n){if(e==="click")return Qo(n)}function C_(e,n){if(e==="input"||e==="change")return Qo(n)}function w_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:w_;function Xs(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Ge.call(n,c)||!Wn(e[c],n[c]))return!1}return!0}function Yh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jh(e,n){var a=Yh(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Yh(a)}}function Zh(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Zh(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Kh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=_n(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=_n(e.document)}return n}function Kc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var D_=Fi&&"documentMode"in document&&11>=document.documentMode,Lr=null,Qc=null,Ws=null,Jc=!1;function Qh(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Jc||Lr==null||Lr!==_n(s)||(s=Lr,"selectionStart"in s&&Kc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ws&&Xs(Ws,s)||(Ws=s,s=Il(Qc,"onSelect"),0<s.length&&(n=new Zo("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Lr)))}function er(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Nr={animationend:er("Animation","AnimationEnd"),animationiteration:er("Animation","AnimationIteration"),animationstart:er("Animation","AnimationStart"),transitionrun:er("Transition","TransitionRun"),transitionstart:er("Transition","TransitionStart"),transitioncancel:er("Transition","TransitionCancel"),transitionend:er("Transition","TransitionEnd")},$c={},Jh={};Fi&&(Jh=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function tr(e){if($c[e])return $c[e];if(!Nr[e])return e;var n=Nr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Jh)return $c[e]=n[a];return e}var $h=tr("animationend"),ep=tr("animationiteration"),tp=tr("animationstart"),U_=tr("transitionrun"),L_=tr("transitionstart"),N_=tr("transitioncancel"),np=tr("transitionend"),ip=new Map,eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");eu.push("scrollEnd");function pi(e,n){ip.set(e,n),Ue(n,[e])}var Jo=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ni=[],Or=0,tu=0;function $o(){for(var e=Or,n=tu=Or=0;n<e;){var a=ni[n];ni[n++]=null;var s=ni[n];ni[n++]=null;var c=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,s!==null&&c!==null){var x=s.pending;x===null?c.next=c:(c.next=x.next,x.next=c),s.pending=c}f!==0&&ap(a,c,f)}}function el(e,n,a,s){ni[Or++]=e,ni[Or++]=n,ni[Or++]=a,ni[Or++]=s,tu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function nu(e,n,a,s){return el(e,n,a,s),tl(e)}function nr(e,n){return el(e,null,null,n),tl(e)}function ap(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Ve(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function tl(e){if(50<po)throw po=0,df=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var zr={};function O_(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,n,a,s){return new O_(e,n,a,s)}function iu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Ii(e,n){var a=e.alternate;return a===null?(a=qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function rp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function nl(e,n,a,s,c,f){var x=0;if(s=e,typeof e=="function")iu(e)&&(x=1);else if(typeof e=="string")x=Iv(e,a,Te.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case w:return e=qn(31,a,n,c),e.elementType=w,e.lanes=f,e;case R:return ir(a.children,c,f,n);case b:x=8,c|=24;break;case v:return e=qn(12,a,n,c|2),e.elementType=v,e.lanes=f,e;case k:return e=qn(13,a,n,c),e.elementType=k,e.lanes=f,e;case N:return e=qn(19,a,n,c),e.elementType=N,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:x=10;break e;case P:x=9;break e;case B:x=11;break e;case F:x=14;break e;case ne:x=16,s=null;break e}x=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=qn(x,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function ir(e,n,a,s){return e=qn(7,e,s,n),e.lanes=a,e}function au(e,n,a){return e=qn(6,e,null,n),e.lanes=a,e}function sp(e){var n=qn(18,null,null,0);return n.stateNode=e,n}function ru(e,n,a){return n=qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var op=new WeakMap;function ii(e,n){if(typeof e=="object"&&e!==null){var a=op.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ot(n)},op.set(e,n),n)}return{value:e,source:n,stack:Ot(n)}}var Pr=[],Br=0,il=null,qs=0,ai=[],ri=0,ga=null,Ti=1,Ai="";function Hi(e,n){Pr[Br++]=qs,Pr[Br++]=il,il=e,qs=n}function lp(e,n,a){ai[ri++]=Ti,ai[ri++]=Ai,ai[ri++]=ga,ga=e;var s=Ti;e=Ai;var c=32-Ve(s)-1;s&=~(1<<c),a+=1;var f=32-Ve(n)+c;if(30<f){var x=c-c%5;f=(s&(1<<x)-1).toString(32),s>>=x,c-=x,Ti=1<<32-Ve(n)+c|a<<c|s,Ai=f+e}else Ti=1<<f|a<<c|s,Ai=e}function su(e){e.return!==null&&(Hi(e,1),lp(e,1,0))}function ou(e){for(;e===il;)il=Pr[--Br],Pr[Br]=null,qs=Pr[--Br],Pr[Br]=null;for(;e===ga;)ga=ai[--ri],ai[ri]=null,Ai=ai[--ri],ai[ri]=null,Ti=ai[--ri],ai[ri]=null}function cp(e,n){ai[ri++]=Ti,ai[ri++]=Ai,ai[ri++]=ga,Ti=n.id,Ai=n.overflow,ga=e}var En=null,jt=null,yt=!1,_a=null,si=!1,lu=Error(r(519));function va(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ys(ii(n,e)),lu}function up(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[sn]=e,n[dn]=s,a){case"dialog":gt("cancel",n),gt("close",n);break;case"iframe":case"object":case"embed":gt("load",n);break;case"video":case"audio":for(a=0;a<xo.length;a++)gt(xo[a],n);break;case"source":gt("error",n);break;case"img":case"image":case"link":gt("error",n),gt("load",n);break;case"details":gt("toggle",n);break;case"input":gt("invalid",n),Yt(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":gt("invalid",n);break;case"textarea":gt("invalid",n),Mn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Rm(n.textContent,a)?(s.popover!=null&&(gt("beforetoggle",n),gt("toggle",n)),s.onScroll!=null&&gt("scroll",n),s.onScrollEnd!=null&&gt("scrollend",n),s.onClick!=null&&(n.onclick=Bi),n=!0):n=!1,n||va(e,!0)}function fp(e){for(En=e.return;En;)switch(En.tag){case 5:case 31:case 13:si=!1;return;case 27:case 3:si=!0;return;default:En=En.return}}function Fr(e){if(e!==En)return!1;if(!yt)return fp(e),yt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Rf(e.type,e.memoizedProps)),a=!a),a&&jt&&va(e),fp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));jt=Pm(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));jt=Pm(e)}else n===27?(n=jt,Na(e.type)?(e=Lf,Lf=null,jt=e):jt=n):jt=En?li(e.stateNode.nextSibling):null;return!0}function ar(){jt=En=null,yt=!1}function cu(){var e=_a;return e!==null&&(In===null?In=e:In.push.apply(In,e),_a=null),e}function Ys(e){_a===null?_a=[e]:_a.push(e)}var uu=L(null),rr=null,Gi=null;function Sa(e,n,a){ye(uu,n._currentValue),n._currentValue=a}function Vi(e){e._currentValue=uu.current,ae(uu)}function fu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function du(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;e:for(;f!==null;){var E=f;f=c;for(var O=0;O<n.length;O++)if(E.context===n[O]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),fu(f.return,a,e),s||(x=null);break e}f=E.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),fu(x,a,e),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===e){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Ir(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var E=c.type;Wn(c.pendingProps.value,x.value)||(e!==null?e.push(E):e=[E])}}else if(c===le.current){if(x=c.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(bo):e=[bo])}c=c.return}e!==null&&du(n,e,a,s),n.flags|=262144}function al(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sr(e){rr=e,Gi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return dp(rr,e)}function rl(e,n){return rr===null&&sr(e),dp(e,n)}function dp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Gi===null){if(e===null)throw Error(r(308));Gi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Gi=Gi.next=n;return a}var z_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},P_=o.unstable_scheduleCallback,B_=o.unstable_NormalPriority,on={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hu(){return{controller:new z_,data:new Map,refCount:0}}function js(e){e.refCount--,e.refCount===0&&P_(B_,function(){e.controller.abort()})}var Zs=null,pu=0,Hr=0,Gr=null;function F_(e,n){if(Zs===null){var a=Zs=[];pu=0,Hr=_f(),Gr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return pu++,n.then(hp,hp),n}function hp(){if(--pu===0&&Zs!==null){Gr!==null&&(Gr.status="fulfilled");var e=Zs;Zs=null,Hr=0,Gr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function I_(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var pp=z.S;z.S=function(e,n){Q0=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&F_(e,n),pp!==null&&pp(e,n)};var or=L(null);function mu(){var e=or.current;return e!==null?e:Wt.pooledCache}function sl(e,n){n===null?ye(or,or.current):ye(or,n.pool)}function mp(){var e=mu();return e===null?null:{parent:on._currentValue,pool:e}}var Vr=Error(r(460)),xu=Error(r(474)),ol=Error(r(542)),ll={then:function(){}};function xp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function gp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Bi,Bi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,vp(e),e;default:if(typeof n.status=="string")n.then(Bi,Bi);else{if(e=Wt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,vp(e),e}throw cr=n,Vr}}function lr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(cr=a,Vr):a}}var cr=null;function _p(){if(cr===null)throw Error(r(459));var e=cr;return cr=null,e}function vp(e){if(e===Vr||e===ol)throw Error(r(483))}var kr=null,Ks=0;function cl(e){var n=Ks;return Ks+=1,kr===null&&(kr=[]),gp(kr,e,n)}function Qs(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ul(e,n){throw n.$$typeof===S?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Sp(e){function n(W,G){if(e){var Z=W.deletions;Z===null?(W.deletions=[G],W.flags|=16):Z.push(G)}}function a(W,G){if(!e)return null;for(;G!==null;)n(W,G),G=G.sibling;return null}function s(W){for(var G=new Map;W!==null;)W.key!==null?G.set(W.key,W):G.set(W.index,W),W=W.sibling;return G}function c(W,G){return W=Ii(W,G),W.index=0,W.sibling=null,W}function f(W,G,Z){return W.index=Z,e?(Z=W.alternate,Z!==null?(Z=Z.index,Z<G?(W.flags|=67108866,G):Z):(W.flags|=67108866,G)):(W.flags|=1048576,G)}function x(W){return e&&W.alternate===null&&(W.flags|=67108866),W}function E(W,G,Z,de){return G===null||G.tag!==6?(G=au(Z,W.mode,de),G.return=W,G):(G=c(G,Z),G.return=W,G)}function O(W,G,Z,de){var Ke=Z.type;return Ke===R?ue(W,G,Z.props.children,de,Z.key):G!==null&&(G.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ne&&lr(Ke)===G.type)?(G=c(G,Z.props),Qs(G,Z),G.return=W,G):(G=nl(Z.type,Z.key,Z.props,null,W.mode,de),Qs(G,Z),G.return=W,G)}function Q(W,G,Z,de){return G===null||G.tag!==4||G.stateNode.containerInfo!==Z.containerInfo||G.stateNode.implementation!==Z.implementation?(G=ru(Z,W.mode,de),G.return=W,G):(G=c(G,Z.children||[]),G.return=W,G)}function ue(W,G,Z,de,Ke){return G===null||G.tag!==7?(G=ir(Z,W.mode,de,Ke),G.return=W,G):(G=c(G,Z),G.return=W,G)}function pe(W,G,Z){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=au(""+G,W.mode,Z),G.return=W,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case y:return Z=nl(G.type,G.key,G.props,null,W.mode,Z),Qs(Z,G),Z.return=W,Z;case A:return G=ru(G,W.mode,Z),G.return=W,G;case ne:return G=lr(G),pe(W,G,Z)}if(fe(G)||ee(G))return G=ir(G,W.mode,Z,null),G.return=W,G;if(typeof G.then=="function")return pe(W,cl(G),Z);if(G.$$typeof===U)return pe(W,rl(W,G),Z);ul(W,G)}return null}function $(W,G,Z,de){var Ke=G!==null?G.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Ke!==null?null:E(W,G,""+Z,de);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case y:return Z.key===Ke?O(W,G,Z,de):null;case A:return Z.key===Ke?Q(W,G,Z,de):null;case ne:return Z=lr(Z),$(W,G,Z,de)}if(fe(Z)||ee(Z))return Ke!==null?null:ue(W,G,Z,de,null);if(typeof Z.then=="function")return $(W,G,cl(Z),de);if(Z.$$typeof===U)return $(W,G,rl(W,Z),de);ul(W,Z)}return null}function re(W,G,Z,de,Ke){if(typeof de=="string"&&de!==""||typeof de=="number"||typeof de=="bigint")return W=W.get(Z)||null,E(G,W,""+de,Ke);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case y:return W=W.get(de.key===null?Z:de.key)||null,O(G,W,de,Ke);case A:return W=W.get(de.key===null?Z:de.key)||null,Q(G,W,de,Ke);case ne:return de=lr(de),re(W,G,Z,de,Ke)}if(fe(de)||ee(de))return W=W.get(Z)||null,ue(G,W,de,Ke,null);if(typeof de.then=="function")return re(W,G,Z,cl(de),Ke);if(de.$$typeof===U)return re(W,G,Z,rl(G,de),Ke);ul(G,de)}return null}function Ie(W,G,Z,de){for(var Ke=null,Ct=null,ke=G,ut=G=0,vt=null;ke!==null&&ut<Z.length;ut++){ke.index>ut?(vt=ke,ke=null):vt=ke.sibling;var wt=$(W,ke,Z[ut],de);if(wt===null){ke===null&&(ke=vt);break}e&&ke&&wt.alternate===null&&n(W,ke),G=f(wt,G,ut),Ct===null?Ke=wt:Ct.sibling=wt,Ct=wt,ke=vt}if(ut===Z.length)return a(W,ke),yt&&Hi(W,ut),Ke;if(ke===null){for(;ut<Z.length;ut++)ke=pe(W,Z[ut],de),ke!==null&&(G=f(ke,G,ut),Ct===null?Ke=ke:Ct.sibling=ke,Ct=ke);return yt&&Hi(W,ut),Ke}for(ke=s(ke);ut<Z.length;ut++)vt=re(ke,W,ut,Z[ut],de),vt!==null&&(e&&vt.alternate!==null&&ke.delete(vt.key===null?ut:vt.key),G=f(vt,G,ut),Ct===null?Ke=vt:Ct.sibling=vt,Ct=vt);return e&&ke.forEach(function(Fa){return n(W,Fa)}),yt&&Hi(W,ut),Ke}function et(W,G,Z,de){if(Z==null)throw Error(r(151));for(var Ke=null,Ct=null,ke=G,ut=G=0,vt=null,wt=Z.next();ke!==null&&!wt.done;ut++,wt=Z.next()){ke.index>ut?(vt=ke,ke=null):vt=ke.sibling;var Fa=$(W,ke,wt.value,de);if(Fa===null){ke===null&&(ke=vt);break}e&&ke&&Fa.alternate===null&&n(W,ke),G=f(Fa,G,ut),Ct===null?Ke=Fa:Ct.sibling=Fa,Ct=Fa,ke=vt}if(wt.done)return a(W,ke),yt&&Hi(W,ut),Ke;if(ke===null){for(;!wt.done;ut++,wt=Z.next())wt=pe(W,wt.value,de),wt!==null&&(G=f(wt,G,ut),Ct===null?Ke=wt:Ct.sibling=wt,Ct=wt);return yt&&Hi(W,ut),Ke}for(ke=s(ke);!wt.done;ut++,wt=Z.next())wt=re(ke,W,ut,wt.value,de),wt!==null&&(e&&wt.alternate!==null&&ke.delete(wt.key===null?ut:wt.key),G=f(wt,G,ut),Ct===null?Ke=wt:Ct.sibling=wt,Ct=wt);return e&&ke.forEach(function(Kv){return n(W,Kv)}),yt&&Hi(W,ut),Ke}function Ht(W,G,Z,de){if(typeof Z=="object"&&Z!==null&&Z.type===R&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case y:e:{for(var Ke=Z.key;G!==null;){if(G.key===Ke){if(Ke=Z.type,Ke===R){if(G.tag===7){a(W,G.sibling),de=c(G,Z.props.children),de.return=W,W=de;break e}}else if(G.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ne&&lr(Ke)===G.type){a(W,G.sibling),de=c(G,Z.props),Qs(de,Z),de.return=W,W=de;break e}a(W,G);break}else n(W,G);G=G.sibling}Z.type===R?(de=ir(Z.props.children,W.mode,de,Z.key),de.return=W,W=de):(de=nl(Z.type,Z.key,Z.props,null,W.mode,de),Qs(de,Z),de.return=W,W=de)}return x(W);case A:e:{for(Ke=Z.key;G!==null;){if(G.key===Ke)if(G.tag===4&&G.stateNode.containerInfo===Z.containerInfo&&G.stateNode.implementation===Z.implementation){a(W,G.sibling),de=c(G,Z.children||[]),de.return=W,W=de;break e}else{a(W,G);break}else n(W,G);G=G.sibling}de=ru(Z,W.mode,de),de.return=W,W=de}return x(W);case ne:return Z=lr(Z),Ht(W,G,Z,de)}if(fe(Z))return Ie(W,G,Z,de);if(ee(Z)){if(Ke=ee(Z),typeof Ke!="function")throw Error(r(150));return Z=Ke.call(Z),et(W,G,Z,de)}if(typeof Z.then=="function")return Ht(W,G,cl(Z),de);if(Z.$$typeof===U)return Ht(W,G,rl(W,Z),de);ul(W,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint"?(Z=""+Z,G!==null&&G.tag===6?(a(W,G.sibling),de=c(G,Z),de.return=W,W=de):(a(W,G),de=au(Z,W.mode,de),de.return=W,W=de),x(W)):a(W,G)}return function(W,G,Z,de){try{Ks=0;var Ke=Ht(W,G,Z,de);return kr=null,Ke}catch(ke){if(ke===Vr||ke===ol)throw ke;var Ct=qn(29,ke,null,W.mode);return Ct.lanes=de,Ct.return=W,Ct}finally{}}}var ur=Sp(!0),bp=Sp(!1),ba=!1;function gu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _u(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ya(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ma(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Lt&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=tl(e),ap(e,null,a),n}return el(e,s,n,a),tl(e)}function Js(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Ls(e,a)}}function vu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Su=!1;function $s(){if(Su){var e=Gr;if(e!==null)throw e}}function eo(e,n,a,s){Su=!1;var c=e.updateQueue;ba=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var O=E,Q=O.next;O.next=null,x===null?f=Q:x.next=Q,x=O;var ue=e.alternate;ue!==null&&(ue=ue.updateQueue,E=ue.lastBaseUpdate,E!==x&&(E===null?ue.firstBaseUpdate=Q:E.next=Q,ue.lastBaseUpdate=O))}if(f!==null){var pe=c.baseState;x=0,ue=Q=O=null,E=f;do{var $=E.lane&-536870913,re=$!==E.lane;if(re?(_t&$)===$:(s&$)===$){$!==0&&$===Hr&&(Su=!0),ue!==null&&(ue=ue.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var Ie=e,et=E;$=n;var Ht=a;switch(et.tag){case 1:if(Ie=et.payload,typeof Ie=="function"){pe=Ie.call(Ht,pe,$);break e}pe=Ie;break e;case 3:Ie.flags=Ie.flags&-65537|128;case 0:if(Ie=et.payload,$=typeof Ie=="function"?Ie.call(Ht,pe,$):Ie,$==null)break e;pe=g({},pe,$);break e;case 2:ba=!0}}$=E.callback,$!==null&&(e.flags|=64,re&&(e.flags|=8192),re=c.callbacks,re===null?c.callbacks=[$]:re.push($))}else re={lane:$,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ue===null?(Q=ue=re,O=pe):ue=ue.next=re,x|=$;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;re=E,E=re.next,re.next=null,c.lastBaseUpdate=re,c.shared.pending=null}}while(!0);ue===null&&(O=pe),c.baseState=O,c.firstBaseUpdate=Q,c.lastBaseUpdate=ue,f===null&&(c.shared.lanes=0),Ca|=x,e.lanes=x,e.memoizedState=pe}}function yp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Mp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)yp(a[e],n)}var Xr=L(null),fl=L(0);function Ep(e,n){e=Qi,ye(fl,e),ye(Xr,n),Qi=e|n.baseLanes}function bu(){ye(fl,Qi),ye(Xr,Xr.current)}function yu(){Qi=fl.current,ae(Xr),ae(fl)}var Yn=L(null),oi=null;function Ea(e){var n=e.alternate;ye(tn,tn.current&1),ye(Yn,e),oi===null&&(n===null||Xr.current!==null||n.memoizedState!==null)&&(oi=e)}function Mu(e){ye(tn,tn.current),ye(Yn,e),oi===null&&(oi=e)}function Tp(e){e.tag===22?(ye(tn,tn.current),ye(Yn,e),oi===null&&(oi=e)):Ta()}function Ta(){ye(tn,tn.current),ye(Yn,Yn.current)}function jn(e){ae(Yn),oi===e&&(oi=null),ae(tn)}var tn=L(0);function dl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Df(a)||Uf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ki=0,st=null,Ft=null,ln=null,hl=!1,Wr=!1,fr=!1,pl=0,to=0,qr=null,H_=0;function Jt(){throw Error(r(321))}function Eu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Wn(e[a],n[a]))return!1;return!0}function Tu(e,n,a,s,c,f){return ki=f,st=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?l0:Hu,fr=!1,f=a(s,c),fr=!1,Wr&&(f=Rp(n,a,s,c)),Ap(e),f}function Ap(e){z.H=ao;var n=Ft!==null&&Ft.next!==null;if(ki=0,ln=Ft=st=null,hl=!1,to=0,qr=null,n)throw Error(r(300));e===null||cn||(e=e.dependencies,e!==null&&al(e)&&(cn=!0))}function Rp(e,n,a,s){st=e;var c=0;do{if(Wr&&(qr=null),to=0,Wr=!1,25<=c)throw Error(r(301));if(c+=1,ln=Ft=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=c0,f=n(a,s)}while(Wr);return f}function G_(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?no(n):n,e=e.useState()[0],(Ft!==null?Ft.memoizedState:null)!==e&&(st.flags|=1024),n}function Au(){var e=pl!==0;return pl=0,e}function Ru(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Cu(e){if(hl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}hl=!1}ki=0,ln=Ft=st=null,Wr=!1,to=pl=0,qr=null}function Ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?st.memoizedState=ln=e:ln=ln.next=e,ln}function nn(){if(Ft===null){var e=st.alternate;e=e!==null?e.memoizedState:null}else e=Ft.next;var n=ln===null?st.memoizedState:ln.next;if(n!==null)ln=n,Ft=e;else{if(e===null)throw st.alternate===null?Error(r(467)):Error(r(310));Ft=e,e={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},ln===null?st.memoizedState=ln=e:ln=ln.next=e}return ln}function ml(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function no(e){var n=to;return to+=1,qr===null&&(qr=[]),e=gp(qr,e,n),n=st,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?l0:Hu),e}function xl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return no(e);if(e.$$typeof===U)return Tn(e)}throw Error(r(438,String(e)))}function wu(e){var n=null,a=st.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=st.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ml(),st.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=C;return n.index++,a}function Xi(e,n){return typeof n=="function"?n(e):n}function gl(e){var n=nn();return Du(n,Ft,e)}function Du(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var E=x=null,O=null,Q=n,ue=!1;do{var pe=Q.lane&-536870913;if(pe!==Q.lane?(_t&pe)===pe:(ki&pe)===pe){var $=Q.revertLane;if($===0)O!==null&&(O=O.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),pe===Hr&&(ue=!0);else if((ki&$)===$){Q=Q.next,$===Hr&&(ue=!0);continue}else pe={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},O===null?(E=O=pe,x=f):O=O.next=pe,st.lanes|=$,Ca|=$;pe=Q.action,fr&&a(f,pe),f=Q.hasEagerState?Q.eagerState:a(f,pe)}else $={lane:pe,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},O===null?(E=O=$,x=f):O=O.next=$,st.lanes|=pe,Ca|=pe;Q=Q.next}while(Q!==null&&Q!==n);if(O===null?x=f:O.next=E,!Wn(f,e.memoizedState)&&(cn=!0,ue&&(a=Gr,a!==null)))throw a;e.memoizedState=f,e.baseState=x,e.baseQueue=O,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Uu(e){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=e(f,x.action),x=x.next;while(x!==c);Wn(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Cp(e,n,a){var s=st,c=nn(),f=yt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!Wn((Ft||c).memoizedState,a);if(x&&(c.memoizedState=a,cn=!0),c=c.queue,Ou(Up.bind(null,s,c,e),[e]),c.getSnapshot!==n||x||ln!==null&&ln.memoizedState.tag&1){if(s.flags|=2048,Yr(9,{destroy:void 0},Dp.bind(null,s,c,a,n),null),Wt===null)throw Error(r(349));f||(ki&127)!==0||wp(s,n,a)}return a}function wp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=st.updateQueue,n===null?(n=ml(),st.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Dp(e,n,a,s){n.value=a,n.getSnapshot=s,Lp(n)&&Np(e)}function Up(e,n,a){return a(function(){Lp(n)&&Np(e)})}function Lp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Wn(e,a)}catch{return!0}}function Np(e){var n=nr(e,2);n!==null&&Hn(n,e,2)}function Lu(e){var n=Ln();if(typeof e=="function"){var a=e;if(e=a(),fr){Ye(!0);try{a()}finally{Ye(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:e},n}function Op(e,n,a,s){return e.baseState=a,Du(e,Ft,typeof s=="function"?s:Xi)}function V_(e,n,a,s,c){if(Sl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};z.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,zp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function zp(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=z.T,x={};z.T=x;try{var E=a(c,s),O=z.S;O!==null&&O(x,E),Pp(e,n,E)}catch(Q){Nu(e,n,Q)}finally{f!==null&&x.types!==null&&(f.types=x.types),z.T=f}}else try{f=a(c,s),Pp(e,n,f)}catch(Q){Nu(e,n,Q)}}function Pp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Bp(e,n,s)},function(s){return Nu(e,n,s)}):Bp(e,n,a)}function Bp(e,n,a){n.status="fulfilled",n.value=a,Fp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,zp(e,a)))}function Nu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Fp(n),n=n.next;while(n!==s)}e.action=null}function Fp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Ip(e,n){return n}function Hp(e,n){if(yt){var a=Wt.formState;if(a!==null){e:{var s=st;if(yt){if(jt){t:{for(var c=jt,f=si;c.nodeType!==8;){if(!f){c=null;break t}if(c=li(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){jt=li(c.nextSibling),s=c.data==="F!";break e}}va(s)}s=!1}s&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ip,lastRenderedState:n},a.queue=s,a=r0.bind(null,st,s),s.dispatch=a,s=Lu(!1),f=Iu.bind(null,st,!1,s.queue),s=Ln(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=V_.bind(null,st,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function Gp(e){var n=nn();return Vp(n,Ft,e)}function Vp(e,n,a){if(n=Du(e,n,Ip)[0],e=gl(Xi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=no(n)}catch(x){throw x===Vr?ol:x}else s=n;n=nn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(st.flags|=2048,Yr(9,{destroy:void 0},k_.bind(null,c,a),null)),[s,f,e]}function k_(e,n){e.action=n}function kp(e){var n=nn(),a=Ft;if(a!==null)return Vp(n,a,e);nn(),n=n.memoizedState,a=nn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Yr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=st.updateQueue,n===null&&(n=ml(),st.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function Xp(){return nn().memoizedState}function _l(e,n,a,s){var c=Ln();st.flags|=e,c.memoizedState=Yr(1|n,{destroy:void 0},a,s===void 0?null:s)}function vl(e,n,a,s){var c=nn();s=s===void 0?null:s;var f=c.memoizedState.inst;Ft!==null&&s!==null&&Eu(s,Ft.memoizedState.deps)?c.memoizedState=Yr(n,f,a,s):(st.flags|=e,c.memoizedState=Yr(1|n,f,a,s))}function Wp(e,n){_l(8390656,8,e,n)}function Ou(e,n){vl(2048,8,e,n)}function X_(e){st.flags|=4;var n=st.updateQueue;if(n===null)n=ml(),st.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function qp(e){var n=nn().memoizedState;return X_({ref:n,nextImpl:e}),function(){if((Lt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Yp(e,n){return vl(4,2,e,n)}function jp(e,n){return vl(4,4,e,n)}function Zp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Kp(e,n,a){a=a!=null?a.concat([e]):null,vl(4,4,Zp.bind(null,n,e),a)}function zu(){}function Qp(e,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Eu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function Jp(e,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Eu(n,s[1]))return s[0];if(s=e(),fr){Ye(!0);try{e()}finally{Ye(!1)}}return a.memoizedState=[s,n],s}function Pu(e,n,a){return a===void 0||(ki&1073741824)!==0&&(_t&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=$0(),st.lanes|=e,Ca|=e,a)}function $p(e,n,a,s){return Wn(a,n)?a:Xr.current!==null?(e=Pu(e,a,s),Wn(e,n)||(cn=!0),e):(ki&42)===0||(ki&1073741824)!==0&&(_t&261930)===0?(cn=!0,e.memoizedState=a):(e=$0(),st.lanes|=e,Ca|=e,n)}function e0(e,n,a,s,c){var f=j.p;j.p=f!==0&&8>f?f:8;var x=z.T,E={};z.T=E,Iu(e,!1,n,a);try{var O=c(),Q=z.S;if(Q!==null&&Q(E,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var ue=I_(O,s);io(e,n,ue,Qn(e))}else io(e,n,s,Qn(e))}catch(pe){io(e,n,{then:function(){},status:"rejected",reason:pe},Qn())}finally{j.p=f,x!==null&&E.types!==null&&(x.types=E.types),z.T=x}}function W_(){}function Bu(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=t0(e).queue;e0(e,c,n,Y,a===null?W_:function(){return n0(e),a(s)})}function t0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function n0(e){var n=t0(e);n.next===null&&(n=e.alternate.memoizedState),io(e,n.next.queue,{},Qn())}function Fu(){return Tn(bo)}function i0(){return nn().memoizedState}function a0(){return nn().memoizedState}function q_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();e=ya(a);var s=Ma(n,e,a);s!==null&&(Hn(s,n,a),Js(s,n,a)),n={cache:hu()},e.payload=n;return}n=n.return}}function Y_(e,n,a){var s=Qn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},Sl(e)?s0(n,a):(a=nu(e,n,a,s),a!==null&&(Hn(a,e,s),o0(a,n,s)))}function r0(e,n,a){var s=Qn();io(e,n,a,s)}function io(e,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(Sl(e))s0(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,E=f(x,a);if(c.hasEagerState=!0,c.eagerState=E,Wn(E,x))return el(e,n,c,0),Wt===null&&$o(),!1}catch{}finally{}if(a=nu(e,n,c,s),a!==null)return Hn(a,e,s),o0(a,n,s),!0}return!1}function Iu(e,n,a,s){if(s={lane:2,revertLane:_f(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},Sl(e)){if(n)throw Error(r(479))}else n=nu(e,a,s,2),n!==null&&Hn(n,e,2)}function Sl(e){var n=e.alternate;return e===st||n!==null&&n===st}function s0(e,n){Wr=hl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function o0(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Ls(e,a)}}var ao={readContext:Tn,use:xl,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useLayoutEffect:Jt,useInsertionEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useSyncExternalStore:Jt,useId:Jt,useHostTransitionStatus:Jt,useFormState:Jt,useActionState:Jt,useOptimistic:Jt,useMemoCache:Jt,useCacheRefresh:Jt};ao.useEffectEvent=Jt;var l0={readContext:Tn,use:xl,useCallback:function(e,n){return Ln().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:Wp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,_l(4194308,4,Zp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return _l(4194308,4,e,n)},useInsertionEffect:function(e,n){_l(4,2,e,n)},useMemo:function(e,n){var a=Ln();n=n===void 0?null:n;var s=e();if(fr){Ye(!0);try{e()}finally{Ye(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Ln();if(a!==void 0){var c=a(n);if(fr){Ye(!0);try{a(n)}finally{Ye(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=Y_.bind(null,st,e),[s.memoizedState,e]},useRef:function(e){var n=Ln();return e={current:e},n.memoizedState=e},useState:function(e){e=Lu(e);var n=e.queue,a=r0.bind(null,st,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:zu,useDeferredValue:function(e,n){var a=Ln();return Pu(a,e,n)},useTransition:function(){var e=Lu(!1);return e=e0.bind(null,st,e.queue,!0,!1),Ln().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=st,c=Ln();if(yt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Wt===null)throw Error(r(349));(_t&127)!==0||wp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Wp(Up.bind(null,s,f,e),[e]),s.flags|=2048,Yr(9,{destroy:void 0},Dp.bind(null,s,f,a,n),null),a},useId:function(){var e=Ln(),n=Wt.identifierPrefix;if(yt){var a=Ai,s=Ti;a=(s&~(1<<32-Ve(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=pl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=H_++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Fu,useFormState:Hp,useActionState:Hp,useOptimistic:function(e){var n=Ln();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Iu.bind(null,st,!0,a),a.dispatch=n,[e,n]},useMemoCache:wu,useCacheRefresh:function(){return Ln().memoizedState=q_.bind(null,st)},useEffectEvent:function(e){var n=Ln(),a={impl:e};return n.memoizedState=a,function(){if((Lt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Hu={readContext:Tn,use:xl,useCallback:Qp,useContext:Tn,useEffect:Ou,useImperativeHandle:Kp,useInsertionEffect:Yp,useLayoutEffect:jp,useMemo:Jp,useReducer:gl,useRef:Xp,useState:function(){return gl(Xi)},useDebugValue:zu,useDeferredValue:function(e,n){var a=nn();return $p(a,Ft.memoizedState,e,n)},useTransition:function(){var e=gl(Xi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:no(e),n]},useSyncExternalStore:Cp,useId:i0,useHostTransitionStatus:Fu,useFormState:Gp,useActionState:Gp,useOptimistic:function(e,n){var a=nn();return Op(a,Ft,e,n)},useMemoCache:wu,useCacheRefresh:a0};Hu.useEffectEvent=qp;var c0={readContext:Tn,use:xl,useCallback:Qp,useContext:Tn,useEffect:Ou,useImperativeHandle:Kp,useInsertionEffect:Yp,useLayoutEffect:jp,useMemo:Jp,useReducer:Uu,useRef:Xp,useState:function(){return Uu(Xi)},useDebugValue:zu,useDeferredValue:function(e,n){var a=nn();return Ft===null?Pu(a,e,n):$p(a,Ft.memoizedState,e,n)},useTransition:function(){var e=Uu(Xi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:no(e),n]},useSyncExternalStore:Cp,useId:i0,useHostTransitionStatus:Fu,useFormState:kp,useActionState:kp,useOptimistic:function(e,n){var a=nn();return Ft!==null?Op(a,Ft,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:wu,useCacheRefresh:a0};c0.useEffectEvent=qp;function Gu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Vu={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Qn(),c=ya(s);c.payload=n,a!=null&&(c.callback=a),n=Ma(e,c,s),n!==null&&(Hn(n,e,s),Js(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Qn(),c=ya(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ma(e,c,s),n!==null&&(Hn(n,e,s),Js(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Qn(),s=ya(a);s.tag=2,n!=null&&(s.callback=n),n=Ma(e,s,a),n!==null&&(Hn(n,e,a),Js(n,e,a))}};function u0(e,n,a,s,c,f,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,x):n.prototype&&n.prototype.isPureReactComponent?!Xs(a,s)||!Xs(c,f):!0}function f0(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Vu.enqueueReplaceState(n,n.state,null)}function dr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function d0(e){Jo(e)}function h0(e){console.error(e)}function p0(e){Jo(e)}function bl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function m0(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function ku(e,n,a){return a=ya(a),a.tag=3,a.payload={element:null},a.callback=function(){bl(e,n)},a}function x0(e){return e=ya(e),e.tag=3,e}function g0(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){m0(n,a,s)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){m0(n,a,s),typeof c!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function j_(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Ir(n,a,c,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return oi===null?Nl():a.alternate===null&&$t===0&&($t=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===ll?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),mf(e,s,c)),!1;case 22:return a.flags|=65536,s===ll?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),mf(e,s,c)),!1}throw Error(r(435,a.tag))}return mf(e,s,c),Nl(),!1}if(yt)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==lu&&(e=Error(r(422),{cause:s}),Ys(ii(e,a)))):(s!==lu&&(n=Error(r(423),{cause:s}),Ys(ii(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=ii(s,a),c=ku(e.stateNode,s,c),vu(e,c),$t!==4&&($t=2)),!1;var f=Error(r(520),{cause:s});if(f=ii(f,a),ho===null?ho=[f]:ho.push(f),$t!==4&&($t=2),n===null)return!0;s=ii(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=ku(a.stateNode,s,e),vu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(wa===null||!wa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=x0(c),g0(c,e,a,s),vu(a,c),!1}a=a.return}while(a!==null);return!1}var Xu=Error(r(461)),cn=!1;function An(e,n,a,s){n.child=e===null?bp(n,null,a,s):ur(n,e.child,a,s)}function _0(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var x={};for(var E in s)E!=="ref"&&(x[E]=s[E])}else x=s;return sr(n),s=Tu(e,n,a,x,f,c),E=Au(),e!==null&&!cn?(Ru(e,n,c),Wi(e,n,c)):(yt&&E&&su(n),n.flags|=1,An(e,n,s,c),n.child)}function v0(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!iu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,S0(e,n,f,s,c)):(e=nl(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Ju(e,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:Xs,a(x,s)&&e.ref===n.ref)return Wi(e,n,c)}return n.flags|=1,e=Ii(f,s),e.ref=n.ref,e.return=n,n.child=e}function S0(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Xs(f,s)&&e.ref===n.ref)if(cn=!1,n.pendingProps=s=f,Ju(e,c))(e.flags&131072)!==0&&(cn=!0);else return n.lanes=e.lanes,Wi(e,n,c)}return Wu(e,n,a,s,c)}function b0(e,n,a,s){var c=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return y0(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&sl(n,f!==null?f.cachePool:null),f!==null?Ep(n,f):bu(),Tp(n);else return s=n.lanes=536870912,y0(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(sl(n,f.cachePool),Ep(n,f),Ta(),n.memoizedState=null):(e!==null&&sl(n,null),bu(),Ta());return An(e,n,c,a),n.child}function ro(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function y0(e,n,a,s,c){var f=mu();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&sl(n,null),bu(),Tp(n),e!==null&&Ir(e,n,s,!0),n.childLanes=c,null}function yl(e,n){return n=El({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function M0(e,n,a){return ur(n,e.child,null,a),e=yl(n,n.pendingProps),e.flags|=2,jn(n),n.memoizedState=null,e}function Z_(e,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(yt){if(s.mode==="hidden")return e=yl(n,s),n.lanes=536870912,ro(null,e);if(Mu(n),(e=jt)?(e=zm(e,si),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ga!==null?{id:Ti,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},a=sp(e),a.return=n,n.child=a,En=n,jt=null)):e=null,e===null)throw va(n);return n.lanes=536870912,null}return yl(n,s)}var f=e.memoizedState;if(f!==null){var x=f.dehydrated;if(Mu(n),c)if(n.flags&256)n.flags&=-257,n=M0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(cn||Ir(e,n,a,!1),c=(a&e.childLanes)!==0,cn||c){if(s=Wt,s!==null&&(x=Ns(s,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,nr(e,x),Hn(s,e,x),Xu;Nl(),n=M0(e,n,a)}else e=f.treeContext,jt=li(x.nextSibling),En=n,yt=!0,_a=null,si=!1,e!==null&&cp(n,e),n=yl(n,s),n.flags|=4096;return n}return e=Ii(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Ml(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Wu(e,n,a,s,c){return sr(n),a=Tu(e,n,a,s,void 0,c),s=Au(),e!==null&&!cn?(Ru(e,n,c),Wi(e,n,c)):(yt&&s&&su(n),n.flags|=1,An(e,n,a,c),n.child)}function E0(e,n,a,s,c,f){return sr(n),n.updateQueue=null,a=Rp(n,s,a,c),Ap(e),s=Au(),e!==null&&!cn?(Ru(e,n,f),Wi(e,n,f)):(yt&&s&&su(n),n.flags|=1,An(e,n,a,f),n.child)}function T0(e,n,a,s,c){if(sr(n),n.stateNode===null){var f=zr,x=a.contextType;typeof x=="object"&&x!==null&&(f=Tn(x)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Vu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},gu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Tn(x):zr,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Gu(n,a,x,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Vu.enqueueReplaceState(f,f.state,null),eo(n,s,f,c),$s(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var E=n.memoizedProps,O=dr(a,E);f.props=O;var Q=f.context,ue=a.contextType;x=zr,typeof ue=="object"&&ue!==null&&(x=Tn(ue));var pe=a.getDerivedStateFromProps;ue=typeof pe=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ue||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||Q!==x)&&f0(n,f,s,x),ba=!1;var $=n.memoizedState;f.state=$,eo(n,s,f,c),$s(),Q=n.memoizedState,E||$!==Q||ba?(typeof pe=="function"&&(Gu(n,a,pe,s),Q=n.memoizedState),(O=ba||u0(n,a,O,s,$,Q,x))?(ue||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Q),f.props=s,f.state=Q,f.context=x,s=O):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,_u(e,n),x=n.memoizedProps,ue=dr(a,x),f.props=ue,pe=n.pendingProps,$=f.context,Q=a.contextType,O=zr,typeof Q=="object"&&Q!==null&&(O=Tn(Q)),E=a.getDerivedStateFromProps,(Q=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==pe||$!==O)&&f0(n,f,s,O),ba=!1,$=n.memoizedState,f.state=$,eo(n,s,f,c),$s();var re=n.memoizedState;x!==pe||$!==re||ba||e!==null&&e.dependencies!==null&&al(e.dependencies)?(typeof E=="function"&&(Gu(n,a,E,s),re=n.memoizedState),(ue=ba||u0(n,a,ue,s,$,re,O)||e!==null&&e.dependencies!==null&&al(e.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,re,O),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,re,O)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=re),f.props=s,f.state=re,f.context=O,s=ue):(typeof f.componentDidUpdate!="function"||x===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,Ml(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=ur(n,e.child,null,c),n.child=ur(n,null,a,c)):An(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Wi(e,n,c),e}function A0(e,n,a,s){return ar(),n.flags|=256,An(e,n,a,s),n.child}var qu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Yu(e){return{baseLanes:e,cachePool:mp()}}function ju(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Kn),e}function R0(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=e!==null&&e.memoizedState===null?!1:(tn.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(yt){if(c?Ea(n):Ta(),(e=jt)?(e=zm(e,si),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ga!==null?{id:Ti,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},a=sp(e),a.return=n,n.child=a,En=n,jt=null)):e=null,e===null)throw va(n);return Uf(e)?n.lanes=32:n.lanes=536870912,null}var E=s.children;return s=s.fallback,c?(Ta(),c=n.mode,E=El({mode:"hidden",children:E},c),s=ir(s,c,a,null),E.return=n,s.return=n,E.sibling=s,n.child=E,s=n.child,s.memoizedState=Yu(a),s.childLanes=ju(e,x,a),n.memoizedState=qu,ro(null,s)):(Ea(n),Zu(n,E))}var O=e.memoizedState;if(O!==null&&(E=O.dehydrated,E!==null)){if(f)n.flags&256?(Ea(n),n.flags&=-257,n=Ku(e,n,a)):n.memoizedState!==null?(Ta(),n.child=e.child,n.flags|=128,n=null):(Ta(),E=s.fallback,c=n.mode,s=El({mode:"visible",children:s.children},c),E=ir(E,c,a,null),E.flags|=2,s.return=n,E.return=n,s.sibling=E,n.child=s,ur(n,e.child,null,a),s=n.child,s.memoizedState=Yu(a),s.childLanes=ju(e,x,a),n.memoizedState=qu,n=ro(null,s));else if(Ea(n),Uf(E)){if(x=E.nextSibling&&E.nextSibling.dataset,x)var Q=x.dgst;x=Q,s=Error(r(419)),s.stack="",s.digest=x,Ys({value:s,source:null,stack:null}),n=Ku(e,n,a)}else if(cn||Ir(e,n,a,!1),x=(a&e.childLanes)!==0,cn||x){if(x=Wt,x!==null&&(s=Ns(x,a),s!==0&&s!==O.retryLane))throw O.retryLane=s,nr(e,s),Hn(x,e,s),Xu;Df(E)||Nl(),n=Ku(e,n,a)}else Df(E)?(n.flags|=192,n.child=e.child,n=null):(e=O.treeContext,jt=li(E.nextSibling),En=n,yt=!0,_a=null,si=!1,e!==null&&cp(n,e),n=Zu(n,s.children),n.flags|=4096);return n}return c?(Ta(),E=s.fallback,c=n.mode,O=e.child,Q=O.sibling,s=Ii(O,{mode:"hidden",children:s.children}),s.subtreeFlags=O.subtreeFlags&65011712,Q!==null?E=Ii(Q,E):(E=ir(E,c,a,null),E.flags|=2),E.return=n,s.return=n,s.sibling=E,n.child=s,ro(null,s),s=n.child,E=e.child.memoizedState,E===null?E=Yu(a):(c=E.cachePool,c!==null?(O=on._currentValue,c=c.parent!==O?{parent:O,pool:O}:c):c=mp(),E={baseLanes:E.baseLanes|a,cachePool:c}),s.memoizedState=E,s.childLanes=ju(e,x,a),n.memoizedState=qu,ro(e.child,s)):(Ea(n),a=e.child,e=a.sibling,a=Ii(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=a,n.memoizedState=null,a)}function Zu(e,n){return n=El({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function El(e,n){return e=qn(22,e,null,n),e.lanes=0,e}function Ku(e,n,a){return ur(n,e.child,null,a),e=Zu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function C0(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),fu(e.return,n,a)}function Qu(e,n,a,s,c,f){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=s,x.tail=a,x.tailMode=c,x.treeForkCount=f)}function w0(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var x=tn.current,E=(x&2)!==0;if(E?(x=x&1|2,n.flags|=128):x&=1,ye(tn,x),An(e,n,s,a),s=yt?qs:0,!E&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&C0(e,a,n);else if(e.tag===19)C0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&dl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Qu(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&dl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Qu(n,!0,a,null,f,s);break;case"together":Qu(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Wi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ca|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Ir(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Ii(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Ii(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Ju(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&al(e)))}function K_(e,n,a){switch(n.tag){case 3:we(n,n.stateNode.containerInfo),Sa(n,on,e.memoizedState.cache),ar();break;case 27:case 5:Xe(n);break;case 4:we(n,n.stateNode.containerInfo);break;case 10:Sa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Mu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Ea(n),n.flags|=128,null):(a&n.child.childLanes)!==0?R0(e,n,a):(Ea(n),e=Wi(e,n,a),e!==null?e.sibling:null);Ea(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Ir(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return w0(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ye(tn,tn.current),s)break;return null;case 22:return n.lanes=0,b0(e,n,a,n.pendingProps);case 24:Sa(n,on,e.memoizedState.cache)}return Wi(e,n,a)}function D0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)cn=!0;else{if(!Ju(e,a)&&(n.flags&128)===0)return cn=!1,K_(e,n,a);cn=(e.flags&131072)!==0}else cn=!1,yt&&(n.flags&1048576)!==0&&lp(n,qs,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(e=lr(n.elementType),n.type=e,typeof e=="function")iu(e)?(s=dr(e,s),n.tag=1,n=T0(null,n,e,s,a)):(n.tag=0,n=Wu(null,n,e,s,a));else{if(e!=null){var c=e.$$typeof;if(c===B){n.tag=11,n=_0(null,n,e,s,a);break e}else if(c===F){n.tag=14,n=v0(null,n,e,s,a);break e}}throw n=me(e)||e,Error(r(306,n,""))}}return n;case 0:return Wu(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=dr(s,n.pendingProps),T0(e,n,s,c,a);case 3:e:{if(we(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,_u(e,n),eo(n,s,null,a);var x=n.memoizedState;if(s=x.cache,Sa(n,on,s),s!==f.cache&&du(n,[on],a,!0),$s(),s=x.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=A0(e,n,s,a);break e}else if(s!==c){c=ii(Error(r(424)),n),Ys(c),n=A0(e,n,s,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(jt=li(e.firstChild),En=n,yt=!0,_a=null,si=!0,a=bp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ar(),s===c){n=Wi(e,n,a);break e}An(e,n,s,a)}n=n.child}return n;case 26:return Ml(e,n),e===null?(a=Gm(n.type,null,n.pendingProps,null))?n.memoizedState=a:yt||(a=n.type,e=n.pendingProps,s=Hl(te.current).createElement(a),s[sn]=n,s[dn]=e,Rn(s,a,e),J(s),n.stateNode=s):n.memoizedState=Gm(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Xe(n),e===null&&yt&&(s=n.stateNode=Fm(n.type,n.pendingProps,te.current),En=n,si=!0,c=jt,Na(n.type)?(Lf=c,jt=li(s.firstChild)):jt=c),An(e,n,n.pendingProps.children,a),Ml(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&yt&&((c=s=jt)&&(s=Av(s,n.type,n.pendingProps,si),s!==null?(n.stateNode=s,En=n,jt=li(s.firstChild),si=!1,c=!0):c=!1),c||va(n)),Xe(n),c=n.type,f=n.pendingProps,x=e!==null?e.memoizedProps:null,s=f.children,Rf(c,f)?s=null:x!==null&&Rf(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=Tu(e,n,G_,null,null,a),bo._currentValue=c),Ml(e,n),An(e,n,s,a),n.child;case 6:return e===null&&yt&&((e=a=jt)&&(a=Rv(a,n.pendingProps,si),a!==null?(n.stateNode=a,En=n,jt=null,e=!0):e=!1),e||va(n)),null;case 13:return R0(e,n,a);case 4:return we(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=ur(n,null,s,a):An(e,n,s,a),n.child;case 11:return _0(e,n,n.type,n.pendingProps,a);case 7:return An(e,n,n.pendingProps,a),n.child;case 8:return An(e,n,n.pendingProps.children,a),n.child;case 12:return An(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Sa(n,n.type,s.value),An(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,sr(n),c=Tn(c),s=s(c),n.flags|=1,An(e,n,s,a),n.child;case 14:return v0(e,n,n.type,n.pendingProps,a);case 15:return S0(e,n,n.type,n.pendingProps,a);case 19:return w0(e,n,a);case 31:return Z_(e,n,a);case 22:return b0(e,n,a,n.pendingProps);case 24:return sr(n),s=Tn(on),e===null?(c=mu(),c===null&&(c=Wt,f=hu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},gu(n),Sa(n,on,c)):((e.lanes&a)!==0&&(_u(e,n),eo(n,null,null,a),$s()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Sa(n,on,s)):(s=f.cache,Sa(n,on,s),s!==c.cache&&du(n,[on],a,!0))),An(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function qi(e){e.flags|=4}function $u(e,n,a,s,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(im())e.flags|=8192;else throw cr=ll,xu}else e.flags&=-16777217}function U0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!qm(n))if(im())e.flags|=8192;else throw cr=ll,xu}function Tl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Bt():536870912,e.lanes|=n,Qr|=n)}function so(e,n){if(!yt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Zt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function Q_(e,n,a){var s=n.pendingProps;switch(ou(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(n),null;case 1:return Zt(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Vi(on),He(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Fr(n)?qi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,cu())),Zt(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(qi(n),f!==null?(Zt(n),U0(n,f)):(Zt(n),$u(n,c,null,s,a))):f?f!==e.memoizedState?(qi(n),Zt(n),U0(n,f)):(Zt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&qi(n),Zt(n),$u(n,c,e,s,a)),null;case 27:if(lt(n),a=te.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&qi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Zt(n),null}e=Te.current,Fr(n)?up(n):(e=Fm(c,s,a),n.stateNode=e,qi(n))}return Zt(n),null;case 5:if(lt(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&qi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Zt(n),null}if(f=Te.current,Fr(n))up(n);else{var x=Hl(te.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?x.createElement("select",{is:s.is}):x.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?x.createElement(c,{is:s.is}):x.createElement(c)}}f[sn]=n,f[dn]=s;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;e:switch(Rn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&qi(n)}}return Zt(n),$u(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&qi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=te.current,Fr(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=En,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[sn]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Rm(e.nodeValue,a)),e||va(n,!0)}else e=Hl(e).createTextNode(s),e[sn]=n,n.stateNode=e}return Zt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=Fr(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[sn]=n}else ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),e=!1}else a=cu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(jn(n),n):(jn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Zt(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Fr(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[sn]=n}else ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),c=!1}else c=cu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(jn(n),n):(jn(n),null)}return jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Tl(n,n.updateQueue),Zt(n),null);case 4:return He(),e===null&&yf(n.stateNode.containerInfo),Zt(n),null;case 10:return Vi(n.type),Zt(n),null;case 19:if(ae(tn),s=n.memoizedState,s===null)return Zt(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)so(s,!1);else{if($t!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=dl(e),f!==null){for(n.flags|=128,so(s,!1),e=f.updateQueue,n.updateQueue=e,Tl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)rp(a,e),a=a.sibling;return ye(tn,tn.current&1|2),yt&&Hi(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&M()>Dl&&(n.flags|=128,c=!0,so(s,!1),n.lanes=4194304)}else{if(!c)if(e=dl(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Tl(n,e),so(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!yt)return Zt(n),null}else 2*M()-s.renderingStartTime>Dl&&a!==536870912&&(n.flags|=128,c=!0,so(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=M(),e.sibling=null,a=tn.current,ye(tn,c?a&1|2:a&1),yt&&Hi(n,s.treeForkCount),e):(Zt(n),null);case 22:case 23:return jn(n),yu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Zt(n),n.subtreeFlags&6&&(n.flags|=8192)):Zt(n),a=n.updateQueue,a!==null&&Tl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&ae(or),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Vi(on),Zt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function J_(e,n){switch(ou(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Vi(on),He(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return lt(n),null;case 31:if(n.memoizedState!==null){if(jn(n),n.alternate===null)throw Error(r(340));ar()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(jn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ar()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ae(tn),null;case 4:return He(),null;case 10:return Vi(n.type),null;case 22:case 23:return jn(n),yu(),e!==null&&ae(or),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Vi(on),null;case 25:return null;default:return null}}function L0(e,n){switch(ou(n),n.tag){case 3:Vi(on),He();break;case 26:case 27:case 5:lt(n);break;case 4:He();break;case 31:n.memoizedState!==null&&jn(n);break;case 13:jn(n);break;case 19:ae(tn);break;case 10:Vi(n.type);break;case 22:case 23:jn(n),yu(),e!==null&&ae(or);break;case 24:Vi(on)}}function oo(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,x=a.inst;s=f(),x.destroy=s}a=a.next}while(a!==c)}}catch(E){Pt(n,n.return,E)}}function Aa(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var x=s.inst,E=x.destroy;if(E!==void 0){x.destroy=void 0,c=n;var O=a,Q=E;try{Q()}catch(ue){Pt(c,O,ue)}}}s=s.next}while(s!==f)}}catch(ue){Pt(n,n.return,ue)}}function N0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Mp(n,a)}catch(s){Pt(e,e.return,s)}}}function O0(e,n,a){a.props=dr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Pt(e,n,s)}}function lo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(c){Pt(e,n,c)}}function Ri(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Pt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Pt(e,n,c)}else a.current=null}function z0(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Pt(e,e.return,c)}}function ef(e,n,a){try{var s=e.stateNode;Sv(s,e.type,a,n),s[dn]=n}catch(c){Pt(e,e.return,c)}}function P0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Na(e.type)||e.tag===4}function tf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||P0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Na(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nf(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Bi));else if(s!==4&&(s===27&&Na(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(nf(e,n,a),e=e.sibling;e!==null;)nf(e,n,a),e=e.sibling}function Al(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Na(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Al(e,n,a),e=e.sibling;e!==null;)Al(e,n,a),e=e.sibling}function B0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Rn(n,s,a),n[sn]=e,n[dn]=a}catch(f){Pt(e,e.return,f)}}var Yi=!1,un=!1,af=!1,F0=typeof WeakSet=="function"?WeakSet:Set,bn=null;function $_(e,n){if(e=e.containerInfo,Tf=Yl,e=Kh(e),Kc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var x=0,E=-1,O=-1,Q=0,ue=0,pe=e,$=null;t:for(;;){for(var re;pe!==a||c!==0&&pe.nodeType!==3||(E=x+c),pe!==f||s!==0&&pe.nodeType!==3||(O=x+s),pe.nodeType===3&&(x+=pe.nodeValue.length),(re=pe.firstChild)!==null;)$=pe,pe=re;for(;;){if(pe===e)break t;if($===a&&++Q===c&&(E=x),$===f&&++ue===s&&(O=x),(re=pe.nextSibling)!==null)break;pe=$,$=pe.parentNode}pe=re}a=E===-1||O===-1?null:{start:E,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(Af={focusedElem:e,selectionRange:a},Yl=!1,bn=n;bn!==null;)if(n=bn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,bn=e;else for(;bn!==null;){switch(n=bn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Ie=dr(a.type,c);e=s.getSnapshotBeforeUpdate(Ie,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(et){Pt(a,a.return,et)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)wf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":wf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,bn=e;break}bn=n.return}}function I0(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Zi(e,a),s&4&&oo(5,a);break;case 1:if(Zi(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(x){Pt(a,a.return,x)}else{var c=dr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Pt(a,a.return,x)}}s&64&&N0(a),s&512&&lo(a,a.return);break;case 3:if(Zi(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Mp(e,n)}catch(x){Pt(a,a.return,x)}}break;case 27:n===null&&s&4&&B0(a);case 26:case 5:Zi(e,a),n===null&&s&4&&z0(a),s&512&&lo(a,a.return);break;case 12:Zi(e,a);break;case 31:Zi(e,a),s&4&&V0(e,a);break;case 13:Zi(e,a),s&4&&k0(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=lv.bind(null,a),Cv(e,a))));break;case 22:if(s=a.memoizedState!==null||Yi,!s){n=n!==null&&n.memoizedState!==null||un,c=Yi;var f=un;Yi=s,(un=n)&&!f?Ki(e,a,(a.subtreeFlags&8772)!==0):Zi(e,a),Yi=c,un=f}break;case 30:break;default:Zi(e,a)}}function H0(e){var n=e.alternate;n!==null&&(e.alternate=null,H0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Ps(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Kt=null,Pn=!1;function ji(e,n,a){for(a=a.child;a!==null;)G0(e,n,a),a=a.sibling}function G0(e,n,a){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(be,a)}catch{}switch(a.tag){case 26:un||Ri(a,n),ji(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Ri(a,n);var s=Kt,c=Pn;Na(a.type)&&(Kt=a.stateNode,Pn=!1),ji(e,n,a),_o(a.stateNode),Kt=s,Pn=c;break;case 5:un||Ri(a,n);case 6:if(s=Kt,c=Pn,Kt=null,ji(e,n,a),Kt=s,Pn=c,Kt!==null)if(Pn)try{(Kt.nodeType===9?Kt.body:Kt.nodeName==="HTML"?Kt.ownerDocument.body:Kt).removeChild(a.stateNode)}catch(f){Pt(a,n,f)}else try{Kt.removeChild(a.stateNode)}catch(f){Pt(a,n,f)}break;case 18:Kt!==null&&(Pn?(e=Kt,Nm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),rs(e)):Nm(Kt,a.stateNode));break;case 4:s=Kt,c=Pn,Kt=a.stateNode.containerInfo,Pn=!0,ji(e,n,a),Kt=s,Pn=c;break;case 0:case 11:case 14:case 15:Aa(2,a,n),un||Aa(4,a,n),ji(e,n,a);break;case 1:un||(Ri(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&O0(a,n,s)),ji(e,n,a);break;case 21:ji(e,n,a);break;case 22:un=(s=un)||a.memoizedState!==null,ji(e,n,a),un=s;break;default:ji(e,n,a)}}function V0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{rs(e)}catch(a){Pt(n,n.return,a)}}}function k0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{rs(e)}catch(a){Pt(n,n.return,a)}}function ev(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new F0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new F0),n;default:throw Error(r(435,e.tag))}}function Rl(e,n){var a=ev(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=cv.bind(null,e,s);s.then(c,c)}})}function Bn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=e,x=n,E=x;e:for(;E!==null;){switch(E.tag){case 27:if(Na(E.type)){Kt=E.stateNode,Pn=!1;break e}break;case 5:Kt=E.stateNode,Pn=!1;break e;case 3:case 4:Kt=E.stateNode.containerInfo,Pn=!0;break e}E=E.return}if(Kt===null)throw Error(r(160));G0(f,x,c),Kt=null,Pn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)X0(n,e),n=n.sibling}var mi=null;function X0(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Bn(n,e),Fn(e),s&4&&(Aa(3,e,e.return),oo(3,e),Aa(5,e,e.return));break;case 1:Bn(n,e),Fn(e),s&512&&(un||a===null||Ri(a,a.return)),s&64&&Yi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=mi;if(Bn(n,e),Fn(e),s&512&&(un||a===null||Ri(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){e:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ja]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Rn(f,s,a),f[sn]=e,J(f),s=f;break e;case"link":var x=Xm("link","href",c).get(s+(a.href||""));if(x){for(var E=0;E<x.length;E++)if(f=x[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(E,1);break t}}f=c.createElement(s),Rn(f,s,a),c.head.appendChild(f);break;case"meta":if(x=Xm("meta","content",c).get(s+(a.content||""))){for(E=0;E<x.length;E++)if(f=x[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(E,1);break t}}f=c.createElement(s),Rn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[sn]=e,J(f),s=f}e.stateNode=s}else Wm(c,e.type,e.stateNode);else e.stateNode=km(c,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Wm(c,e.type,e.stateNode):km(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&ef(e,e.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,e),Fn(e),s&512&&(un||a===null||Ri(a,a.return)),a!==null&&s&4&&ef(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,e),Fn(e),s&512&&(un||a===null||Ri(a,a.return)),e.flags&32){c=e.stateNode;try{Ei(c,"")}catch(Ie){Pt(e,e.return,Ie)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,ef(e,c,a!==null?a.memoizedProps:c)),s&1024&&(af=!0);break;case 6:if(Bn(n,e),Fn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(Ie){Pt(e,e.return,Ie)}}break;case 3:if(kl=null,c=mi,mi=Gl(n.containerInfo),Bn(n,e),mi=c,Fn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{rs(n.containerInfo)}catch(Ie){Pt(e,e.return,Ie)}af&&(af=!1,W0(e));break;case 4:s=mi,mi=Gl(e.stateNode.containerInfo),Bn(n,e),Fn(e),mi=s;break;case 12:Bn(n,e),Fn(e);break;case 31:Bn(n,e),Fn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Rl(e,s)));break;case 13:Bn(n,e),Fn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(wl=M()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Rl(e,s)));break;case 22:c=e.memoizedState!==null;var O=a!==null&&a.memoizedState!==null,Q=Yi,ue=un;if(Yi=Q||c,un=ue||O,Bn(n,e),un=ue,Yi=Q,Fn(e),s&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||O||Yi||un||hr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){O=a=n;try{if(f=O.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{E=O.stateNode;var pe=O.memoizedProps.style,$=pe!=null&&pe.hasOwnProperty("display")?pe.display:null;E.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(Ie){Pt(O,O.return,Ie)}}}else if(n.tag===6){if(a===null){O=n;try{O.stateNode.nodeValue=c?"":O.memoizedProps}catch(Ie){Pt(O,O.return,Ie)}}}else if(n.tag===18){if(a===null){O=n;try{var re=O.stateNode;c?Om(re,!0):Om(O.stateNode,!1)}catch(Ie){Pt(O,O.return,Ie)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Rl(e,a))));break;case 19:Bn(n,e),Fn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Rl(e,s)));break;case 30:break;case 21:break;default:Bn(n,e),Fn(e)}}function Fn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(P0(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=tf(e);Al(e,f,c);break;case 5:var x=a.stateNode;a.flags&32&&(Ei(x,""),a.flags&=-33);var E=tf(e);Al(e,E,x);break;case 3:case 4:var O=a.stateNode.containerInfo,Q=tf(e);nf(e,Q,O);break;default:throw Error(r(161))}}catch(ue){Pt(e,e.return,ue)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function W0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;W0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Zi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)I0(e,n.alternate,n),n=n.sibling}function hr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Aa(4,n,n.return),hr(n);break;case 1:Ri(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&O0(n,n.return,a),hr(n);break;case 27:_o(n.stateNode);case 26:case 5:Ri(n,n.return),hr(n);break;case 22:n.memoizedState===null&&hr(n);break;case 30:hr(n);break;default:hr(n)}e=e.sibling}}function Ki(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:Ki(c,f,a),oo(4,f);break;case 1:if(Ki(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Q){Pt(s,s.return,Q)}if(s=f,c=s.updateQueue,c!==null){var E=s.stateNode;try{var O=c.shared.hiddenCallbacks;if(O!==null)for(c.shared.hiddenCallbacks=null,c=0;c<O.length;c++)yp(O[c],E)}catch(Q){Pt(s,s.return,Q)}}a&&x&64&&N0(f),lo(f,f.return);break;case 27:B0(f);case 26:case 5:Ki(c,f,a),a&&s===null&&x&4&&z0(f),lo(f,f.return);break;case 12:Ki(c,f,a);break;case 31:Ki(c,f,a),a&&x&4&&V0(c,f);break;case 13:Ki(c,f,a),a&&x&4&&k0(c,f);break;case 22:f.memoizedState===null&&Ki(c,f,a),lo(f,f.return);break;case 30:break;default:Ki(c,f,a)}n=n.sibling}}function rf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&js(a))}function sf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&js(e))}function xi(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)q0(e,n,a,s),n=n.sibling}function q0(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:xi(e,n,a,s),c&2048&&oo(9,n);break;case 1:xi(e,n,a,s);break;case 3:xi(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&js(e)));break;case 12:if(c&2048){xi(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,x=f.id,E=f.onPostCommit;typeof E=="function"&&E(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(O){Pt(n,n.return,O)}}else xi(e,n,a,s);break;case 31:xi(e,n,a,s);break;case 13:xi(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?xi(e,n,a,s):co(e,n):f._visibility&2?xi(e,n,a,s):(f._visibility|=2,jr(e,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&rf(x,n);break;case 24:xi(e,n,a,s),c&2048&&sf(n.alternate,n);break;default:xi(e,n,a,s)}}function jr(e,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,x=n,E=a,O=s,Q=x.flags;switch(x.tag){case 0:case 11:case 15:jr(f,x,E,O,c),oo(8,x);break;case 23:break;case 22:var ue=x.stateNode;x.memoizedState!==null?ue._visibility&2?jr(f,x,E,O,c):co(f,x):(ue._visibility|=2,jr(f,x,E,O,c)),c&&Q&2048&&rf(x.alternate,x);break;case 24:jr(f,x,E,O,c),c&&Q&2048&&sf(x.alternate,x);break;default:jr(f,x,E,O,c)}n=n.sibling}}function co(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:co(a,s),c&2048&&rf(s.alternate,s);break;case 24:co(a,s),c&2048&&sf(s.alternate,s);break;default:co(a,s)}n=n.sibling}}var uo=8192;function Zr(e,n,a){if(e.subtreeFlags&uo)for(e=e.child;e!==null;)Y0(e,n,a),e=e.sibling}function Y0(e,n,a){switch(e.tag){case 26:Zr(e,n,a),e.flags&uo&&e.memoizedState!==null&&Hv(a,mi,e.memoizedState,e.memoizedProps);break;case 5:Zr(e,n,a);break;case 3:case 4:var s=mi;mi=Gl(e.stateNode.containerInfo),Zr(e,n,a),mi=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=uo,uo=16777216,Zr(e,n,a),uo=s):Zr(e,n,a));break;default:Zr(e,n,a)}}function j0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function fo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];bn=s,K0(s,e)}j0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Z0(e),e=e.sibling}function Z0(e){switch(e.tag){case 0:case 11:case 15:fo(e),e.flags&2048&&Aa(9,e,e.return);break;case 3:fo(e);break;case 12:fo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Cl(e)):fo(e);break;default:fo(e)}}function Cl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];bn=s,K0(s,e)}j0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Aa(8,n,n.return),Cl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Cl(n));break;default:Cl(n)}e=e.sibling}}function K0(e,n){for(;bn!==null;){var a=bn;switch(a.tag){case 0:case 11:case 15:Aa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:js(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,bn=s;else e:for(a=e;bn!==null;){s=bn;var c=s.sibling,f=s.return;if(H0(s),s===a){bn=null;break e}if(c!==null){c.return=f,bn=c;break e}bn=f}}}var tv={getCacheForType:function(e){var n=Tn(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Tn(on).controller.signal}},nv=typeof WeakMap=="function"?WeakMap:Map,Lt=0,Wt=null,xt=null,_t=0,zt=0,Zn=null,Ra=!1,Kr=!1,of=!1,Qi=0,$t=0,Ca=0,pr=0,lf=0,Kn=0,Qr=0,ho=null,In=null,cf=!1,wl=0,Q0=0,Dl=1/0,Ul=null,wa=null,pn=0,Da=null,Jr=null,Ji=0,uf=0,ff=null,J0=null,po=0,df=null;function Qn(){return(Lt&2)!==0&&_t!==0?_t&-_t:z.T!==null?_f():Os()}function $0(){if(Kn===0)if((_t&536870912)===0||yt){var e=Re;Re<<=1,(Re&3932160)===0&&(Re=262144),Kn=e}else Kn=536870912;return e=Yn.current,e!==null&&(e.flags|=32),Kn}function Hn(e,n,a){(e===Wt&&(zt===2||zt===9)||e.cancelPendingCommit!==null)&&($r(e,0),Ua(e,_t,Kn,!1)),Cn(e,a),((Lt&2)===0||e!==Wt)&&(e===Wt&&((Lt&2)===0&&(pr|=a),$t===4&&Ua(e,_t,Kn,!1)),Ci(e))}function em(e,n,a){if((Lt&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Be(e,n),c=s?rv(e,n):pf(e,n,!0),f=s;do{if(c===0){Kr&&!s&&Ua(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!iv(a)){c=pf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var E=e;c=ho;var O=E.current.memoizedState.isDehydrated;if(O&&($r(E,x).flags|=256),x=pf(E,x,!1),x!==2){if(of&&!O){E.errorRecoveryDisabledLanes|=f,pr|=f,c=4;break e}f=In,In=c,f!==null&&(In===null?In=f:In.push.apply(In,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){$r(e,0),Ua(e,n,0,!0);break}e:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ua(s,n,Kn,!Ra);break e;case 2:In=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=wl+300-M(),10<c)){if(Ua(s,n,Kn,!Ra),xe(s,0,!0)!==0)break e;Ji=n,s.timeoutHandle=Um(tm.bind(null,s,a,In,Ul,cf,n,Kn,pr,Qr,Ra,f,"Throttled",-0,0),c);break e}tm(s,a,In,Ul,cf,n,Kn,pr,Qr,Ra,f,null,-0,0)}}break}while(!0);Ci(e)}function tm(e,n,a,s,c,f,x,E,O,Q,ue,pe,$,re){if(e.timeoutHandle=-1,pe=n.subtreeFlags,pe&8192||(pe&16785408)===16785408){pe={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bi},Y0(n,f,pe);var Ie=(f&62914560)===f?wl-M():(f&4194048)===f?Q0-M():0;if(Ie=Gv(pe,Ie),Ie!==null){Ji=f,e.cancelPendingCommit=Ie(cm.bind(null,e,n,f,a,s,c,x,E,O,ue,pe,null,$,re)),Ua(e,f,x,!Q);return}}cm(e,n,f,a,s,c,x,E,O)}function iv(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ua(e,n,a,s){n&=~lf,n&=~pr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-Ve(c),x=1<<f;s[f]=-1,c&=~x}a!==0&&ko(e,a,n)}function Ll(){return(Lt&6)===0?(mo(0),!1):!0}function hf(){if(xt!==null){if(zt===0)var e=xt.return;else e=xt,Gi=rr=null,Cu(e),kr=null,Ks=0,e=xt;for(;e!==null;)L0(e.alternate,e),e=e.return;xt=null}}function $r(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Mv(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ji=0,hf(),Wt=e,xt=a=Ii(e.current,null),_t=n,zt=0,Zn=null,Ra=!1,Kr=Be(e,n),of=!1,Qr=Kn=lf=pr=Ca=$t=0,In=ho=null,cf=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-Ve(s),f=1<<c;n|=e[c],s&=~f}return Qi=n,$o(),a}function nm(e,n){st=null,z.H=ao,n===Vr||n===ol?(n=_p(),zt=3):n===xu?(n=_p(),zt=4):zt=n===Xu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,xt===null&&($t=1,bl(e,ii(n,e.current)))}function im(){var e=Yn.current;return e===null?!0:(_t&4194048)===_t?oi===null:(_t&62914560)===_t||(_t&536870912)!==0?e===oi:!1}function am(){var e=z.H;return z.H=ao,e===null?ao:e}function rm(){var e=z.A;return z.A=tv,e}function Nl(){$t=4,Ra||(_t&4194048)!==_t&&Yn.current!==null||(Kr=!0),(Ca&134217727)===0&&(pr&134217727)===0||Wt===null||Ua(Wt,_t,Kn,!1)}function pf(e,n,a){var s=Lt;Lt|=2;var c=am(),f=rm();(Wt!==e||_t!==n)&&(Ul=null,$r(e,n)),n=!1;var x=$t;e:do try{if(zt!==0&&xt!==null){var E=xt,O=Zn;switch(zt){case 8:hf(),x=6;break e;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var Q=zt;if(zt=0,Zn=null,es(e,E,O,Q),a&&Kr){x=0;break e}break;default:Q=zt,zt=0,Zn=null,es(e,E,O,Q)}}av(),x=$t;break}catch(ue){nm(e,ue)}while(!0);return n&&e.shellSuspendCounter++,Gi=rr=null,Lt=s,z.H=c,z.A=f,xt===null&&(Wt=null,_t=0,$o()),x}function av(){for(;xt!==null;)sm(xt)}function rv(e,n){var a=Lt;Lt|=2;var s=am(),c=rm();Wt!==e||_t!==n?(Ul=null,Dl=M()+500,$r(e,n)):Kr=Be(e,n);e:do try{if(zt!==0&&xt!==null){n=xt;var f=Zn;t:switch(zt){case 1:zt=0,Zn=null,es(e,n,f,1);break;case 2:case 9:if(xp(f)){zt=0,Zn=null,om(n);break}n=function(){zt!==2&&zt!==9||Wt!==e||(zt=7),Ci(e)},f.then(n,n);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:xp(f)?(zt=0,Zn=null,om(n)):(zt=0,Zn=null,es(e,n,f,7));break;case 5:var x=null;switch(xt.tag){case 26:x=xt.memoizedState;case 5:case 27:var E=xt;if(x?qm(x):E.stateNode.complete){zt=0,Zn=null;var O=E.sibling;if(O!==null)xt=O;else{var Q=E.return;Q!==null?(xt=Q,Ol(Q)):xt=null}break t}}zt=0,Zn=null,es(e,n,f,5);break;case 6:zt=0,Zn=null,es(e,n,f,6);break;case 8:hf(),$t=6;break e;default:throw Error(r(462))}}sv();break}catch(ue){nm(e,ue)}while(!0);return Gi=rr=null,z.H=s,z.A=c,Lt=a,xt!==null?0:(Wt=null,_t=0,$o(),$t)}function sv(){for(;xt!==null&&!at();)sm(xt)}function sm(e){var n=D0(e.alternate,e,Qi);e.memoizedProps=e.pendingProps,n===null?Ol(e):xt=n}function om(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=E0(a,n,n.pendingProps,n.type,void 0,_t);break;case 11:n=E0(a,n,n.pendingProps,n.type.render,n.ref,_t);break;case 5:Cu(n);default:L0(a,n),n=xt=rp(n,Qi),n=D0(a,n,Qi)}e.memoizedProps=e.pendingProps,n===null?Ol(e):xt=n}function es(e,n,a,s){Gi=rr=null,Cu(n),kr=null,Ks=0;var c=n.return;try{if(j_(e,c,n,a,_t)){$t=1,bl(e,ii(a,e.current)),xt=null;return}}catch(f){if(c!==null)throw xt=c,f;$t=1,bl(e,ii(a,e.current)),xt=null;return}n.flags&32768?(yt||s===1?e=!0:Kr||(_t&536870912)!==0?e=!1:(Ra=e=!0,(s===2||s===9||s===3||s===6)&&(s=Yn.current,s!==null&&s.tag===13&&(s.flags|=16384))),lm(n,e)):Ol(n)}function Ol(e){var n=e;do{if((n.flags&32768)!==0){lm(n,Ra);return}e=n.return;var a=Q_(n.alternate,n,Qi);if(a!==null){xt=a;return}if(n=n.sibling,n!==null){xt=n;return}xt=n=e}while(n!==null);$t===0&&($t=5)}function lm(e,n){do{var a=J_(e.alternate,e);if(a!==null){a.flags&=32767,xt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){xt=e;return}xt=e=a}while(e!==null);$t=6,xt=null}function cm(e,n,a,s,c,f,x,E,O){e.cancelPendingCommit=null;do zl();while(pn!==0);if((Lt&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=tu,kn(e,a,f,x,E,O),e===Wt&&(xt=Wt=null,_t=0),Jr=n,Da=e,Ji=a,uf=f,ff=c,J0=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,uv(se,function(){return pm(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=z.T,z.T=null,c=j.p,j.p=2,x=Lt,Lt|=4;try{$_(e,n,a)}finally{Lt=x,j.p=c,z.T=s}}pn=1,um(),fm(),dm()}}function um(){if(pn===1){pn=0;var e=Da,n=Jr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var s=j.p;j.p=2;var c=Lt;Lt|=4;try{X0(n,e);var f=Af,x=Kh(e.containerInfo),E=f.focusedElem,O=f.selectionRange;if(x!==E&&E&&E.ownerDocument&&Zh(E.ownerDocument.documentElement,E)){if(O!==null&&Kc(E)){var Q=O.start,ue=O.end;if(ue===void 0&&(ue=Q),"selectionStart"in E)E.selectionStart=Q,E.selectionEnd=Math.min(ue,E.value.length);else{var pe=E.ownerDocument||document,$=pe&&pe.defaultView||window;if($.getSelection){var re=$.getSelection(),Ie=E.textContent.length,et=Math.min(O.start,Ie),Ht=O.end===void 0?et:Math.min(O.end,Ie);!re.extend&&et>Ht&&(x=Ht,Ht=et,et=x);var W=jh(E,et),G=jh(E,Ht);if(W&&G&&(re.rangeCount!==1||re.anchorNode!==W.node||re.anchorOffset!==W.offset||re.focusNode!==G.node||re.focusOffset!==G.offset)){var Z=pe.createRange();Z.setStart(W.node,W.offset),re.removeAllRanges(),et>Ht?(re.addRange(Z),re.extend(G.node,G.offset)):(Z.setEnd(G.node,G.offset),re.addRange(Z))}}}}for(pe=[],re=E;re=re.parentNode;)re.nodeType===1&&pe.push({element:re,left:re.scrollLeft,top:re.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<pe.length;E++){var de=pe[E];de.element.scrollLeft=de.left,de.element.scrollTop=de.top}}Yl=!!Tf,Af=Tf=null}finally{Lt=c,j.p=s,z.T=a}}e.current=n,pn=2}}function fm(){if(pn===2){pn=0;var e=Da,n=Jr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var s=j.p;j.p=2;var c=Lt;Lt|=4;try{I0(e,n.alternate,n)}finally{Lt=c,j.p=s,z.T=a}}pn=3}}function dm(){if(pn===4||pn===3){pn=0,D();var e=Da,n=Jr,a=Ji,s=J0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,Jr=Da=null,hm(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(wa=null),Qa(a),n=n.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(be,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=z.T,c=j.p,j.p=2,z.T=null;try{for(var f=e.onRecoverableError,x=0;x<s.length;x++){var E=s[x];f(E.value,{componentStack:E.stack})}}finally{z.T=n,j.p=c}}(Ji&3)!==0&&zl(),Ci(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===df?po++:(po=0,df=e):po=0,mo(0)}}function hm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,js(n)))}function zl(){return um(),fm(),dm(),pm()}function pm(){if(pn!==5)return!1;var e=Da,n=uf;uf=0;var a=Qa(Ji),s=z.T,c=j.p;try{j.p=32>a?32:a,z.T=null,a=ff,ff=null;var f=Da,x=Ji;if(pn=0,Jr=Da=null,Ji=0,(Lt&6)!==0)throw Error(r(331));var E=Lt;if(Lt|=4,Z0(f.current),q0(f,f.current,x,a),Lt=E,mo(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(be,f)}catch{}return!0}finally{j.p=c,z.T=s,hm(e,n)}}function mm(e,n,a){n=ii(a,n),n=ku(e.stateNode,n,2),e=Ma(e,n,2),e!==null&&(Cn(e,2),Ci(e))}function Pt(e,n,a){if(e.tag===3)mm(e,e,a);else for(;n!==null;){if(n.tag===3){mm(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(wa===null||!wa.has(s))){e=ii(a,e),a=x0(2),s=Ma(n,a,2),s!==null&&(g0(a,s,n,e),Cn(s,2),Ci(s));break}}n=n.return}}function mf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new nv;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(of=!0,c.add(a),e=ov.bind(null,e,n,a),n.then(e,e))}function ov(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Wt===e&&(_t&a)===a&&($t===4||$t===3&&(_t&62914560)===_t&&300>M()-wl?(Lt&2)===0&&$r(e,0):lf|=a,Qr===_t&&(Qr=0)),Ci(e)}function xm(e,n){n===0&&(n=Bt()),e=nr(e,n),e!==null&&(Cn(e,n),Ci(e))}function lv(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),xm(e,a)}function cv(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),xm(e,a)}function uv(e,n){return kt(e,n)}var Pl=null,ts=null,xf=!1,Bl=!1,gf=!1,La=0;function Ci(e){e!==ts&&e.next===null&&(ts===null?Pl=ts=e:ts=ts.next=e),Bl=!0,xf||(xf=!0,dv())}function mo(e,n){if(!gf&&Bl){gf=!0;do for(var a=!1,s=Pl;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var x=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-Ve(42|e)+1)-1,f&=c&~(x&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Sm(s,f))}else f=_t,f=xe(s,s===Wt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Be(s,f)||(a=!0,Sm(s,f));s=s.next}while(a);gf=!1}}function fv(){gm()}function gm(){Bl=xf=!1;var e=0;La!==0&&yv()&&(e=La);for(var n=M(),a=null,s=Pl;s!==null;){var c=s.next,f=_m(s,n);f===0?(s.next=null,a===null?Pl=c:a.next=c,c===null&&(ts=a)):(a=s,(e!==0||(f&3)!==0)&&(Bl=!0)),s=c}pn!==0&&pn!==5||mo(e),La!==0&&(La=0)}function _m(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var x=31-Ve(f),E=1<<x,O=c[x];O===-1?((E&a)===0||(E&s)!==0)&&(c[x]=it(E,n)):O<=n&&(e.expiredLanes|=E),f&=~E}if(n=Wt,a=_t,a=xe(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(zt===2||zt===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&je(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Be(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&je(s),Qa(a)){case 2:case 8:a=Se;break;case 32:a=se;break;case 268435456:a=Le;break;default:a=se}return s=vm.bind(null,e),a=kt(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&je(s),e.callbackPriority=2,e.callbackNode=null,2}function vm(e,n){if(pn!==0&&pn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(zl()&&e.callbackNode!==a)return null;var s=_t;return s=xe(e,e===Wt?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(em(e,s,n),_m(e,M()),e.callbackNode!=null&&e.callbackNode===a?vm.bind(null,e):null)}function Sm(e,n){if(zl())return null;em(e,n,!0)}function dv(){Ev(function(){(Lt&6)!==0?kt(he,fv):gm()})}function _f(){if(La===0){var e=Hr;e===0&&(e=De,De<<=1,(De&261888)===0&&(De=256)),La=e}return La}function bm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Wo(""+e)}function ym(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function hv(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=bm((c[dn]||null).action),x=s.submitter;x&&(n=(n=x[dn]||null)?bm(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var E=new Zo("action","action",null,s,c);e.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(La!==0){var O=x?ym(c,x):new FormData(c);Bu(a,{pending:!0,data:O,method:c.method,action:f},null,O)}}else typeof f=="function"&&(E.preventDefault(),O=x?ym(c,x):new FormData(c),Bu(a,{pending:!0,data:O,method:c.method,action:f},f,O))},currentTarget:c}]})}}for(var vf=0;vf<eu.length;vf++){var Sf=eu[vf],pv=Sf.toLowerCase(),mv=Sf[0].toUpperCase()+Sf.slice(1);pi(pv,"on"+mv)}pi($h,"onAnimationEnd"),pi(ep,"onAnimationIteration"),pi(tp,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(U_,"onTransitionRun"),pi(L_,"onTransitionStart"),pi(N_,"onTransitionCancel"),pi(np,"onTransitionEnd"),Pe("onMouseEnter",["mouseout","mouseover"]),Pe("onMouseLeave",["mouseout","mouseover"]),Pe("onPointerEnter",["pointerout","pointerover"]),Pe("onPointerLeave",["pointerout","pointerover"]),Ue("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ue("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ue("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ue("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ue("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ue("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(xo));function Mm(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var x=s.length-1;0<=x;x--){var E=s[x],O=E.instance,Q=E.currentTarget;if(E=E.listener,O!==f&&c.isPropagationStopped())break e;f=E,c.currentTarget=Q;try{f(c)}catch(ue){Jo(ue)}c.currentTarget=null,f=O}else for(x=0;x<s.length;x++){if(E=s[x],O=E.instance,Q=E.currentTarget,E=E.listener,O!==f&&c.isPropagationStopped())break e;f=E,c.currentTarget=Q;try{f(c)}catch(ue){Jo(ue)}c.currentTarget=null,f=O}}}}function gt(e,n){var a=n[Cr];a===void 0&&(a=n[Cr]=new Set);var s=e+"__bubble";a.has(s)||(Em(n,e,2,!1),a.add(s))}function bf(e,n,a){var s=0;n&&(s|=4),Em(a,e,s,n)}var Fl="_reactListening"+Math.random().toString(36).slice(2);function yf(e){if(!e[Fl]){e[Fl]=!0,q.forEach(function(a){a!=="selectionchange"&&(xv.has(a)||bf(a,!1,e),bf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Fl]||(n[Fl]=!0,bf("selectionchange",!1,n))}}function Em(e,n,a,s){switch($m(n)){case 2:var c=Xv;break;case 8:c=Wv;break;default:c=Bf}a=c.bind(null,n,a,e),c=void 0,!Gc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Mf(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var E=s.stateNode.containerInfo;if(E===c)break;if(x===4)for(x=s.return;x!==null;){var O=x.tag;if((O===3||O===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;E!==null;){if(x=pa(E),x===null)return;if(O=x.tag,O===5||O===6||O===26||O===27){s=f=x;continue e}E=E.parentNode}}s=s.return}wh(function(){var Q=f,ue=Ic(a),pe=[];e:{var $=ip.get(e);if($!==void 0){var re=Zo,Ie=e;switch(e){case"keypress":if(Yo(a)===0)break e;case"keydown":case"keyup":re=c_;break;case"focusin":Ie="focus",re=Wc;break;case"focusout":Ie="blur",re=Wc;break;case"beforeblur":case"afterblur":re=Wc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=Lh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=Qg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=d_;break;case $h:case ep:case tp:re=e_;break;case np:re=p_;break;case"scroll":case"scrollend":re=Zg;break;case"wheel":re=x_;break;case"copy":case"cut":case"paste":re=n_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=Oh;break;case"toggle":case"beforetoggle":re=__}var et=(n&4)!==0,Ht=!et&&(e==="scroll"||e==="scrollend"),W=et?$!==null?$+"Capture":null:$;et=[];for(var G=Q,Z;G!==null;){var de=G;if(Z=de.stateNode,de=de.tag,de!==5&&de!==26&&de!==27||Z===null||W===null||(de=Bs(G,W),de!=null&&et.push(go(G,de,Z))),Ht)break;G=G.return}0<et.length&&($=new re($,Ie,null,a,ue),pe.push({event:$,listeners:et}))}}if((n&7)===0){e:{if($=e==="mouseover"||e==="pointerover",re=e==="mouseout"||e==="pointerout",$&&a!==Fc&&(Ie=a.relatedTarget||a.fromElement)&&(pa(Ie)||Ie[Oi]))break e;if((re||$)&&($=ue.window===ue?ue:($=ue.ownerDocument)?$.defaultView||$.parentWindow:window,re?(Ie=a.relatedTarget||a.toElement,re=Q,Ie=Ie?pa(Ie):null,Ie!==null&&(Ht=u(Ie),et=Ie.tag,Ie!==Ht||et!==5&&et!==27&&et!==6)&&(Ie=null)):(re=null,Ie=Q),re!==Ie)){if(et=Lh,de="onMouseLeave",W="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(et=Oh,de="onPointerLeave",W="onPointerEnter",G="pointer"),Ht=re==null?$:X(re),Z=Ie==null?$:X(Ie),$=new et(de,G+"leave",re,a,ue),$.target=Ht,$.relatedTarget=Z,de=null,pa(ue)===Q&&(et=new et(W,G+"enter",Ie,a,ue),et.target=Z,et.relatedTarget=Ht,de=et),Ht=de,re&&Ie)t:{for(et=gv,W=re,G=Ie,Z=0,de=W;de;de=et(de))Z++;de=0;for(var Ke=G;Ke;Ke=et(Ke))de++;for(;0<Z-de;)W=et(W),Z--;for(;0<de-Z;)G=et(G),de--;for(;Z--;){if(W===G||G!==null&&W===G.alternate){et=W;break t}W=et(W),G=et(G)}et=null}else et=null;re!==null&&Tm(pe,$,re,et,!1),Ie!==null&&Ht!==null&&Tm(pe,Ht,Ie,et,!0)}}e:{if($=Q?X(Q):window,re=$.nodeName&&$.nodeName.toLowerCase(),re==="select"||re==="input"&&$.type==="file")var Ct=Vh;else if(Hh($))if(kh)Ct=C_;else{Ct=A_;var ke=T_}else re=$.nodeName,!re||re.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?Q&&Bc(Q.elementType)&&(Ct=Vh):Ct=R_;if(Ct&&(Ct=Ct(e,Q))){Gh(pe,Ct,a,ue);break e}ke&&ke(e,$,Q),e==="focusout"&&Q&&$.type==="number"&&Q.memoizedProps.value!=null&&vn($,"number",$.value)}switch(ke=Q?X(Q):window,e){case"focusin":(Hh(ke)||ke.contentEditable==="true")&&(Lr=ke,Qc=Q,Ws=null);break;case"focusout":Ws=Qc=Lr=null;break;case"mousedown":Jc=!0;break;case"contextmenu":case"mouseup":case"dragend":Jc=!1,Qh(pe,a,ue);break;case"selectionchange":if(D_)break;case"keydown":case"keyup":Qh(pe,a,ue)}var ut;if(Yc)e:{switch(e){case"compositionstart":var vt="onCompositionStart";break e;case"compositionend":vt="onCompositionEnd";break e;case"compositionupdate":vt="onCompositionUpdate";break e}vt=void 0}else Ur?Fh(e,a)&&(vt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(vt="onCompositionStart");vt&&(zh&&a.locale!=="ko"&&(Ur||vt!=="onCompositionStart"?vt==="onCompositionEnd"&&Ur&&(ut=Dh()):(xa=ue,Vc="value"in xa?xa.value:xa.textContent,Ur=!0)),ke=Il(Q,vt),0<ke.length&&(vt=new Nh(vt,e,null,a,ue),pe.push({event:vt,listeners:ke}),ut?vt.data=ut:(ut=Ih(a),ut!==null&&(vt.data=ut)))),(ut=S_?b_(e,a):y_(e,a))&&(vt=Il(Q,"onBeforeInput"),0<vt.length&&(ke=new Nh("onBeforeInput","beforeinput",null,a,ue),pe.push({event:ke,listeners:vt}),ke.data=ut)),hv(pe,e,Q,a,ue)}Mm(pe,n)})}function go(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Il(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Bs(e,a),c!=null&&s.unshift(go(e,c,f)),c=Bs(e,n),c!=null&&s.push(go(e,c,f))),e.tag===3)return s;e=e.return}return[]}function gv(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Tm(e,n,a,s,c){for(var f=n._reactName,x=[];a!==null&&a!==s;){var E=a,O=E.alternate,Q=E.stateNode;if(E=E.tag,O!==null&&O===s)break;E!==5&&E!==26&&E!==27||Q===null||(O=Q,c?(Q=Bs(a,f),Q!=null&&x.unshift(go(a,Q,O))):c||(Q=Bs(a,f),Q!=null&&x.push(go(a,Q,O)))),a=a.return}x.length!==0&&e.push({event:n,listeners:x})}var _v=/\r\n?/g,vv=/\u0000|\uFFFD/g;function Am(e){return(typeof e=="string"?e:""+e).replace(_v,`
`).replace(vv,"")}function Rm(e,n){return n=Am(n),Am(e)===n}function It(e,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Ei(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Ei(e,""+s);break;case"className":Et(e,"class",s);break;case"tabIndex":Et(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Et(e,a,s);break;case"style":Rh(e,s,f);break;case"data":if(n!=="object"){Et(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Wo(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&It(e,n,"name",c.name,c,null),It(e,n,"formEncType",c.formEncType,c,null),It(e,n,"formMethod",c.formMethod,c,null),It(e,n,"formTarget",c.formTarget,c,null)):(It(e,n,"encType",c.encType,c,null),It(e,n,"method",c.method,c,null),It(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Wo(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Bi);break;case"onScroll":s!=null&&gt("scroll",e);break;case"onScrollEnd":s!=null&&gt("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Wo(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":gt("beforetoggle",e),gt("toggle",e),ct(e,"popover",s);break;case"xlinkActuate":Rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Rt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Rt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Rt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Rt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":ct(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Yg.get(a)||a,ct(e,a,s))}}function Ef(e,n,a,s,c,f){switch(a){case"style":Rh(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?Ei(e,s):(typeof s=="number"||typeof s=="bigint")&&Ei(e,""+s);break;case"onScroll":s!=null&&gt("scroll",e);break;case"onScrollEnd":s!=null&&gt("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Bi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Ae.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[dn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break e}a in e?e[a]=s:s===!0?e.setAttribute(a,""):ct(e,a,s)}}}function Rn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",e),gt("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:It(e,n,f,x,a,null)}}c&&It(e,n,"srcSet",a.srcSet,a,null),s&&It(e,n,"src",a.src,a,null);return;case"input":gt("invalid",e);var E=f=x=c=null,O=null,Q=null;for(s in a)if(a.hasOwnProperty(s)){var ue=a[s];if(ue!=null)switch(s){case"name":c=ue;break;case"type":x=ue;break;case"checked":O=ue;break;case"defaultChecked":Q=ue;break;case"value":f=ue;break;case"defaultValue":E=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(r(137,n));break;default:It(e,n,s,ue,a,null)}}Yt(e,f,E,O,Q,x,c,!1);return;case"select":gt("invalid",e),s=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":x=E;break;case"multiple":s=E;default:It(e,n,c,E,a,null)}n=f,a=x,e.multiple=!!s,n!=null?hn(e,!!s,n,!1):a!=null&&hn(e,!!s,a,!0);return;case"textarea":gt("invalid",e),f=c=s=null;for(x in a)if(a.hasOwnProperty(x)&&(E=a[x],E!=null))switch(x){case"value":s=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:It(e,n,x,E,a,null)}Mn(e,s,c,f);return;case"option":for(O in a)if(a.hasOwnProperty(O)&&(s=a[O],s!=null))switch(O){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:It(e,n,O,s,a,null)}return;case"dialog":gt("beforetoggle",e),gt("toggle",e),gt("cancel",e),gt("close",e);break;case"iframe":case"object":gt("load",e);break;case"video":case"audio":for(s=0;s<xo.length;s++)gt(xo[s],e);break;case"image":gt("error",e),gt("load",e);break;case"details":gt("toggle",e);break;case"embed":case"source":case"link":gt("error",e),gt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(s=a[Q],s!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:It(e,n,Q,s,a,null)}return;default:if(Bc(n)){for(ue in a)a.hasOwnProperty(ue)&&(s=a[ue],s!==void 0&&Ef(e,n,ue,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&It(e,n,E,s,a,null))}function Sv(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,E=null,O=null,Q=null,ue=null;for(re in a){var pe=a[re];if(a.hasOwnProperty(re)&&pe!=null)switch(re){case"checked":break;case"value":break;case"defaultValue":O=pe;default:s.hasOwnProperty(re)||It(e,n,re,null,s,pe)}}for(var $ in s){var re=s[$];if(pe=a[$],s.hasOwnProperty($)&&(re!=null||pe!=null))switch($){case"type":f=re;break;case"name":c=re;break;case"checked":Q=re;break;case"defaultChecked":ue=re;break;case"value":x=re;break;case"defaultValue":E=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(r(137,n));break;default:re!==pe&&It(e,n,$,re,s,pe)}}zi(e,x,E,O,Q,ue,f,c);return;case"select":re=x=E=$=null;for(f in a)if(O=a[f],a.hasOwnProperty(f)&&O!=null)switch(f){case"value":break;case"multiple":re=O;default:s.hasOwnProperty(f)||It(e,n,f,null,s,O)}for(c in s)if(f=s[c],O=a[c],s.hasOwnProperty(c)&&(f!=null||O!=null))switch(c){case"value":$=f;break;case"defaultValue":E=f;break;case"multiple":x=f;default:f!==O&&It(e,n,c,f,s,O)}n=E,a=x,s=re,$!=null?hn(e,!!a,$,!1):!!s!=!!a&&(n!=null?hn(e,!!a,n,!0):hn(e,!!a,a?[]:"",!1));return;case"textarea":re=$=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:It(e,n,E,null,s,c)}for(x in s)if(c=s[x],f=a[x],s.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":$=c;break;case"defaultValue":re=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&It(e,n,x,c,s,f)}Sn(e,$,re);return;case"option":for(var Ie in a)if($=a[Ie],a.hasOwnProperty(Ie)&&$!=null&&!s.hasOwnProperty(Ie))switch(Ie){case"selected":e.selected=!1;break;default:It(e,n,Ie,null,s,$)}for(O in s)if($=s[O],re=a[O],s.hasOwnProperty(O)&&$!==re&&($!=null||re!=null))switch(O){case"selected":e.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:It(e,n,O,$,s,re)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)$=a[et],a.hasOwnProperty(et)&&$!=null&&!s.hasOwnProperty(et)&&It(e,n,et,null,s,$);for(Q in s)if($=s[Q],re=a[Q],s.hasOwnProperty(Q)&&$!==re&&($!=null||re!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(r(137,n));break;default:It(e,n,Q,$,s,re)}return;default:if(Bc(n)){for(var Ht in a)$=a[Ht],a.hasOwnProperty(Ht)&&$!==void 0&&!s.hasOwnProperty(Ht)&&Ef(e,n,Ht,void 0,s,$);for(ue in s)$=s[ue],re=a[ue],!s.hasOwnProperty(ue)||$===re||$===void 0&&re===void 0||Ef(e,n,ue,$,s,re);return}}for(var W in a)$=a[W],a.hasOwnProperty(W)&&$!=null&&!s.hasOwnProperty(W)&&It(e,n,W,null,s,$);for(pe in s)$=s[pe],re=a[pe],!s.hasOwnProperty(pe)||$===re||$==null&&re==null||It(e,n,pe,$,s,re)}function Cm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function bv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,x=c.initiatorType,E=c.duration;if(f&&E&&Cm(x)){for(x=0,E=c.responseEnd,s+=1;s<a.length;s++){var O=a[s],Q=O.startTime;if(Q>E)break;var ue=O.transferSize,pe=O.initiatorType;ue&&Cm(pe)&&(O=O.responseEnd,x+=ue*(O<E?1:(E-Q)/(O-Q)))}if(--s,n+=8*(f+x)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Tf=null,Af=null;function Hl(e){return e.nodeType===9?e:e.ownerDocument}function wm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Dm(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Rf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Cf=null;function yv(){var e=window.event;return e&&e.type==="popstate"?e===Cf?!1:(Cf=e,!0):(Cf=null,!1)}var Um=typeof setTimeout=="function"?setTimeout:void 0,Mv=typeof clearTimeout=="function"?clearTimeout:void 0,Lm=typeof Promise=="function"?Promise:void 0,Ev=typeof queueMicrotask=="function"?queueMicrotask:typeof Lm<"u"?function(e){return Lm.resolve(null).then(e).catch(Tv)}:Um;function Tv(e){setTimeout(function(){throw e})}function Na(e){return e==="head"}function Nm(e,n){var a=n,s=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(c),rs(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")_o(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,_o(a);for(var f=a.firstChild;f;){var x=f.nextSibling,E=f.nodeName;f[Ja]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&_o(e.ownerDocument.body);a=c}while(a);rs(n)}function Om(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function wf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":wf(a),Ps(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Av(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Ja])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=li(e.nextSibling),e===null)break}return null}function Rv(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=li(e.nextSibling),e===null))return null;return e}function zm(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=li(e.nextSibling),e===null))return null;return e}function Df(e){return e.data==="$?"||e.data==="$~"}function Uf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Cv(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function li(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Lf=null;function Pm(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return li(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Bm(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Fm(e,n,a){switch(n=Hl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function _o(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Ps(e)}var ci=new Map,Im=new Set;function Gl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $i=j.d;j.d={f:wv,r:Dv,D:Uv,C:Lv,L:Nv,m:Ov,X:Pv,S:zv,M:Bv};function wv(){var e=$i.f(),n=Ll();return e||n}function Dv(e){var n=T(e);n!==null&&n.tag===5&&n.type==="form"?n0(n):$i.r(e)}var ns=typeof document>"u"?null:document;function Hm(e,n,a){var s=ns;if(s&&typeof n=="string"&&n){var c=qt(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Im.has(c)||(Im.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Rn(n,"link",e),J(n),s.head.appendChild(n)))}}function Uv(e){$i.D(e),Hm("dns-prefetch",e,null)}function Lv(e,n){$i.C(e,n),Hm("preconnect",e,n)}function Nv(e,n,a){$i.L(e,n,a);var s=ns;if(s&&e&&n){var c='link[rel="preload"][as="'+qt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+qt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+qt(a.imageSizes)+'"]')):c+='[href="'+qt(e)+'"]';var f=c;switch(n){case"style":f=is(e);break;case"script":f=as(e)}ci.has(f)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ci.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(vo(f))||n==="script"&&s.querySelector(So(f))||(n=s.createElement("link"),Rn(n,"link",e),J(n),s.head.appendChild(n)))}}function Ov(e,n){$i.m(e,n);var a=ns;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+qt(s)+'"][href="'+qt(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=as(e)}if(!ci.has(f)&&(e=g({rel:"modulepreload",href:e},n),ci.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(So(f)))return}s=a.createElement("link"),Rn(s,"link",e),J(s),a.head.appendChild(s)}}}function zv(e,n,a){$i.S(e,n,a);var s=ns;if(s&&e){var c=ie(s).hoistableStyles,f=is(e);n=n||"default";var x=c.get(f);if(!x){var E={loading:0,preload:null};if(x=s.querySelector(vo(f)))E.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ci.get(f))&&Nf(e,a);var O=x=s.createElement("link");J(O),Rn(O,"link",e),O._p=new Promise(function(Q,ue){O.onload=Q,O.onerror=ue}),O.addEventListener("load",function(){E.loading|=1}),O.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Vl(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:E},c.set(f,x)}}}function Pv(e,n){$i.X(e,n);var a=ns;if(a&&e){var s=ie(a).hoistableScripts,c=as(e),f=s.get(c);f||(f=a.querySelector(So(c)),f||(e=g({src:e,async:!0},n),(n=ci.get(c))&&Of(e,n),f=a.createElement("script"),J(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Bv(e,n){$i.M(e,n);var a=ns;if(a&&e){var s=ie(a).hoistableScripts,c=as(e),f=s.get(c);f||(f=a.querySelector(So(c)),f||(e=g({src:e,async:!0,type:"module"},n),(n=ci.get(c))&&Of(e,n),f=a.createElement("script"),J(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Gm(e,n,a,s){var c=(c=te.current)?Gl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=is(a.href),a=ie(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=is(a.href);var f=ie(c).hoistableStyles,x=f.get(e);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,x),(f=c.querySelector(vo(e)))&&!f._p&&(x.instance=f,x.state.loading=5),ci.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(e,a),f||Fv(c,e,a,x.state))),n&&s===null)throw Error(r(528,""));return x}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=as(a),a=ie(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function is(e){return'href="'+qt(e)+'"'}function vo(e){return'link[rel="stylesheet"]['+e+"]"}function Vm(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Fv(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Rn(n,"link",a),J(n),e.head.appendChild(n))}function as(e){return'[src="'+qt(e)+'"]'}function So(e){return"script[async]"+e}function km(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+qt(a.href)+'"]');if(s)return n.instance=s,J(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),J(s),Rn(s,"style",c),Vl(s,a.precedence,e),n.instance=s;case"stylesheet":c=is(a.href);var f=e.querySelector(vo(c));if(f)return n.state.loading|=4,n.instance=f,J(f),f;s=Vm(a),(c=ci.get(c))&&Nf(s,c),f=(e.ownerDocument||e).createElement("link"),J(f);var x=f;return x._p=new Promise(function(E,O){x.onload=E,x.onerror=O}),Rn(f,"link",s),n.state.loading|=4,Vl(f,a.precedence,e),n.instance=f;case"script":return f=as(a.src),(c=e.querySelector(So(f)))?(n.instance=c,J(c),c):(s=a,(c=ci.get(f))&&(s=g({},a),Of(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),J(c),Rn(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Vl(s,a.precedence,e));return n.instance}function Vl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,x=0;x<s.length;x++){var E=s[x];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Nf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Of(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var kl=null;function Xm(e,n,a){if(kl===null){var s=new Map,c=kl=new Map;c.set(a,s)}else c=kl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Ja]||f[sn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=e+x;var E=s.get(x);E?E.push(f):s.set(x,[f])}}return s}function Wm(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Iv(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function qm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Hv(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=is(s.href),f=n.querySelector(vo(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Xl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,J(f);return}f=n.ownerDocument||n,s=Vm(s),(c=ci.get(c))&&Nf(s,c),f=f.createElement("link"),J(f);var x=f;x._p=new Promise(function(E,O){x.onload=E,x.onerror=O}),Rn(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Xl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var zf=0;function Gv(e,n){return e.stylesheets&&e.count===0&&ql(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&ql(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&zf===0&&(zf=62500*bv());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&ql(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>zf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Xl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)ql(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Wl=null;function ql(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Wl=new Map,n.forEach(Vv,e),Wl=null,Xl.call(e))}function Vv(e,n){if(!(n.state.loading&4)){var a=Wl.get(e);if(a)var s=a.get(null);else{a=new Map,Wl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),s=x)}s&&a.set(null,s)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||s,f===s&&a.set(null,c),a.set(x,c),this.count++,s=Xl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var bo={$$typeof:U,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function kv(e,n,a,s,c,f,x,E,O){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=At(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=At(0),this.hiddenUpdates=At(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=O,this.incompleteTransitions=new Map}function Ym(e,n,a,s,c,f,x,E,O,Q,ue,pe){return e=new kv(e,n,a,x,O,Q,ue,pe,E),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),e.current=f,f.stateNode=e,n=hu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},gu(f),e}function jm(e){return e?(e=zr,e):zr}function Zm(e,n,a,s,c,f){c=jm(c),s.context===null?s.context=c:s.pendingContext=c,s=ya(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Ma(e,s,n),a!==null&&(Hn(a,e,n),Js(a,e,n))}function Km(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Pf(e,n){Km(e,n),(e=e.alternate)&&Km(e,n)}function Qm(e){if(e.tag===13||e.tag===31){var n=nr(e,67108864);n!==null&&Hn(n,e,67108864),Pf(e,67108864)}}function Jm(e){if(e.tag===13||e.tag===31){var n=Qn();n=hi(n);var a=nr(e,n);a!==null&&Hn(a,e,n),Pf(e,n)}}var Yl=!0;function Xv(e,n,a,s){var c=z.T;z.T=null;var f=j.p;try{j.p=2,Bf(e,n,a,s)}finally{j.p=f,z.T=c}}function Wv(e,n,a,s){var c=z.T;z.T=null;var f=j.p;try{j.p=8,Bf(e,n,a,s)}finally{j.p=f,z.T=c}}function Bf(e,n,a,s){if(Yl){var c=Ff(s);if(c===null)Mf(e,n,s,jl,a),ex(e,s);else if(Yv(c,e,n,a,s))s.stopPropagation();else if(ex(e,s),n&4&&-1<qv.indexOf(e)){for(;c!==null;){var f=T(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=Me(f.pendingLanes);if(x!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;x;){var O=1<<31-Ve(x);E.entanglements[1]|=O,x&=~O}Ci(f),(Lt&6)===0&&(Dl=M()+500,mo(0))}}break;case 31:case 13:E=nr(f,2),E!==null&&Hn(E,f,2),Ll(),Pf(f,2)}if(f=Ff(s),f===null&&Mf(e,n,s,jl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Mf(e,n,s,null,a)}}function Ff(e){return e=Ic(e),If(e)}var jl=null;function If(e){if(jl=null,e=pa(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return jl=e,null}function $m(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(K()){case he:return 2;case Se:return 8;case se:case qe:return 32;case Le:return 268435456;default:return 32}default:return 32}}var Hf=!1,Oa=null,za=null,Pa=null,yo=new Map,Mo=new Map,Ba=[],qv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function ex(e,n){switch(e){case"focusin":case"focusout":Oa=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":Pa=null;break;case"pointerover":case"pointerout":yo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(n.pointerId)}}function Eo(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=T(n),n!==null&&Qm(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Yv(e,n,a,s,c){switch(n){case"focusin":return Oa=Eo(Oa,e,n,a,s,c),!0;case"dragenter":return za=Eo(za,e,n,a,s,c),!0;case"mouseover":return Pa=Eo(Pa,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return yo.set(f,Eo(yo.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,Mo.set(f,Eo(Mo.get(f)||null,e,n,a,s,c)),!0}return!1}function tx(e){var n=pa(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,zs(e.priority,function(){Jm(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,zs(e.priority,function(){Jm(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Zl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Ff(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Fc=s,a.target.dispatchEvent(s),Fc=null}else return n=T(a),n!==null&&Qm(n),e.blockedOn=a,!1;n.shift()}return!0}function nx(e,n,a){Zl(e)&&a.delete(n)}function jv(){Hf=!1,Oa!==null&&Zl(Oa)&&(Oa=null),za!==null&&Zl(za)&&(za=null),Pa!==null&&Zl(Pa)&&(Pa=null),yo.forEach(nx),Mo.forEach(nx)}function Kl(e,n){e.blockedOn===n&&(e.blockedOn=null,Hf||(Hf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,jv)))}var Ql=null;function ix(e){Ql!==e&&(Ql=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Ql===e&&(Ql=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(If(s||a)===null)continue;break}var f=T(a);f!==null&&(e.splice(n,3),n-=3,Bu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function rs(e){function n(O){return Kl(O,e)}Oa!==null&&Kl(Oa,e),za!==null&&Kl(za,e),Pa!==null&&Kl(Pa,e),yo.forEach(n),Mo.forEach(n);for(var a=0;a<Ba.length;a++){var s=Ba[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Ba.length&&(a=Ba[0],a.blockedOn===null);)tx(a),a.blockedOn===null&&Ba.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],x=c[dn]||null;if(typeof f=="function")x||ix(a);else if(x){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[dn]||null)E=x.formAction;else if(If(c)!==null)continue}else E=x.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),ix(a)}}}function ax(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Gf(e){this._internalRoot=e}Jl.prototype.render=Gf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Qn();Zm(a,s,e,n,null,null)},Jl.prototype.unmount=Gf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Zm(e.current,2,null,e,null,null),Ll(),n[Oi]=null}};function Jl(e){this._internalRoot=e}Jl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Os();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ba.length&&n!==0&&n<Ba[a].priority;a++);Ba.splice(a,0,e),a===0&&tx(e)}};var rx=t.version;if(rx!=="19.2.0")throw Error(r(527,rx,"19.2.0"));j.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var Zv={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$l.isDisabled&&$l.supportsFiber)try{be=$l.inject(Zv),Ee=$l}catch{}}return Ao.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=d0,f=h0,x=p0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Ym(e,1,!1,null,null,a,s,null,c,f,x,ax),e[Oi]=n.current,yf(e),new Gf(n)},Ao.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=d0,x=h0,E=p0,O=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(O=a.formState)),n=Ym(e,1,!0,n,a??null,s,c,O,f,x,E,ax),n.context=jm(null),a=n.current,s=Qn(),s=hi(s),c=ya(s),c.callback=null,Ma(a,c,s),a=s,n.current.lanes=a,Cn(n,a),Ci(n),e[Oi]=n.current,yf(e),new Jl(n)},Ao.version="19.2.0",Ao}var mx;function sS(){if(mx)return Xf.exports;mx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Xf.exports=rS(),Xf.exports}var oS=sS();const lS=mg(oS);const xh="181",cS=0,xx=1,uS=2,xg=1,fS=2,sa=3,ja=0,Vn=1,oa=2,ua=0,bs=1,gx=2,_x=3,vx=4,dS=5,yr=100,hS=101,pS=102,mS=103,xS=104,gS=200,_S=201,vS=202,SS=203,Td=204,Ad=205,bS=206,yS=207,MS=208,ES=209,TS=210,AS=211,RS=212,CS=213,wS=214,Rd=0,Cd=1,wd=2,Ms=3,Dd=4,Ud=5,Ld=6,Nd=7,gg=0,DS=1,US=2,Ya=0,LS=1,NS=2,OS=3,zS=4,PS=5,BS=6,FS=7,_g=300,Es=301,Ts=302,Od=303,zd=304,Uc=306,Pd=1e3,la=1001,Bd=1002,ei=1003,IS=1004,ec=1005,di=1006,jf=1007,Tr=1008,da=1009,vg=1010,Sg=1011,Oo=1012,gh=1013,Rr=1014,ca=1015,ws=1016,_h=1017,vh=1018,zo=1020,bg=35902,yg=35899,Mg=1021,Eg=1022,yi=1023,Po=1026,Bo=1027,Tg=1028,Sh=1029,bh=1030,yh=1031,Mh=1033,yc=33776,Mc=33777,Ec=33778,Tc=33779,Fd=35840,Id=35841,Hd=35842,Gd=35843,Vd=36196,kd=37492,Xd=37496,Wd=37808,qd=37809,Yd=37810,jd=37811,Zd=37812,Kd=37813,Qd=37814,Jd=37815,$d=37816,eh=37817,th=37818,nh=37819,ih=37820,ah=37821,rh=36492,sh=36494,oh=36495,lh=36283,ch=36284,uh=36285,fh=36286,HS=3200,GS=3201,VS=0,kS=1,Wa="",fi="srgb",As="srgb-linear",Cc="linear",Gt="srgb",ss=7680,Sx=519,XS=512,WS=513,qS=514,Ag=515,YS=516,jS=517,ZS=518,KS=519,bx=35044,yx="300 es",Ui=2e3,wc=2001;function Rg(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Dc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function QS(){const o=Dc("canvas");return o.style.display="block",o}const Mx={};function Ex(...o){const t="THREE."+o.shift();console.log(t,...o)}function ot(...o){const t="THREE."+o.shift();console.warn(t,...o)}function an(...o){const t="THREE."+o.shift();console.error(t,...o)}function Fo(...o){const t=o.join(" ");t in Mx||(Mx[t]=!0,ot(...o))}function JS(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}class Ds{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zf=Math.PI/180,dh=180/Math.PI;function Io(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[o&255]+Dn[o>>8&255]+Dn[o>>16&255]+Dn[o>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function Mt(o,t,i){return Math.max(t,Math.min(i,o))}function $S(o,t){return(o%t+t)%t}function Kf(o,t,i){return(1-i)*o+i*t}function Ro(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Gn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ut{constructor(t=0,i=0){Ut.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Mt(this.x,t.x,i.x),this.y=Mt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Mt(this.x,t,i),this.y=Mt(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Mt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*r-d*l+t.x,this.y=u*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ho{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],_=r[l+2],g=r[l+3],S=u[d+0],y=u[d+1],A=u[d+2],R=u[d+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g;return}if(h>=1){t[i+0]=S,t[i+1]=y,t[i+2]=A,t[i+3]=R;return}if(g!==R||m!==S||p!==y||_!==A){let b=m*S+p*y+_*A+g*R;b<0&&(S=-S,y=-y,A=-A,R=-R,b=-b);let v=1-h;if(b<.9995){const P=Math.acos(b),U=Math.sin(P);v=Math.sin(v*P)/U,h=Math.sin(h*P)/U,m=m*v+S*h,p=p*v+y*h,_=_*v+A*h,g=g*v+R*h}else{m=m*v+S*h,p=p*v+y*h,_=_*v+A*h,g=g*v+R*h;const P=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=P,p*=P,_*=P,g*=P}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g}static multiplyQuaternionsFlat(t,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],_=r[l+3],g=u[d],S=u[d+1],y=u[d+2],A=u[d+3];return t[i]=h*A+_*g+m*y-p*S,t[i+1]=m*A+_*S+p*g-h*y,t[i+2]=p*A+_*y+h*S-m*g,t[i+3]=_*A-h*g-m*S-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(r/2),_=h(l/2),g=h(u/2),S=m(r/2),y=m(l/2),A=m(u/2);switch(d){case"XYZ":this._x=S*_*g+p*y*A,this._y=p*y*g-S*_*A,this._z=p*_*A+S*y*g,this._w=p*_*g-S*y*A;break;case"YXZ":this._x=S*_*g+p*y*A,this._y=p*y*g-S*_*A,this._z=p*_*A-S*y*g,this._w=p*_*g+S*y*A;break;case"ZXY":this._x=S*_*g-p*y*A,this._y=p*y*g+S*_*A,this._z=p*_*A+S*y*g,this._w=p*_*g-S*y*A;break;case"ZYX":this._x=S*_*g-p*y*A,this._y=p*y*g+S*_*A,this._z=p*_*A-S*y*g,this._w=p*_*g+S*y*A;break;case"YZX":this._x=S*_*g+p*y*A,this._y=p*y*g+S*_*A,this._z=p*_*A-S*y*g,this._w=p*_*g-S*y*A;break;case"XZY":this._x=S*_*g-p*y*A,this._y=p*y*g-S*_*A,this._z=p*_*A+S*y*g,this._w=p*_*g+S*y*A;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],_=i[6],g=i[10],S=r+h+g;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(_-m)*y,this._y=(u-p)*y,this._z=(d-l)*y}else if(r>h&&r>g){const y=2*Math.sqrt(1+r-h-g);this._w=(_-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(u+p)/y}else if(h>g){const y=2*Math.sqrt(1+h-r-g);this._w=(u-p)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+_)/y}else{const y=2*Math.sqrt(1+g-r-h);this._w=(d-l)/y,this._x=(u+p)/y,this._y=(m+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Mt(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,d=t._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+d*h+l*p-u*m,this._y=l*_+d*m+u*h-r*p,this._z=u*_+d*p+r*m-l*h,this._w=d*_-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let r=t._x,l=t._y,u=t._z,d=t._w,h=this.dot(t);h<0&&(r=-r,l=-l,u=-u,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ce{constructor(t=0,i=0,r=0){ce.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Tx.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Tx.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*r),_=2*(h*i-u*l),g=2*(u*r-d*i);return this.x=i+m*p+d*g-h*_,this.y=r+m*_+h*p-u*g,this.z=l+m*g+u*_-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Mt(this.x,t.x,i.x),this.y=Mt(this.y,t.y,i.y),this.z=Mt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Mt(this.x,t,i),this.y=Mt(this.y,t,i),this.z=Mt(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Qf.copy(this).projectOnVector(t),this.sub(Qf)}reflect(t){return this.sub(Qf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Mt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qf=new ce,Tx=new Ho;class ft{constructor(t,i,r,l,u,d,h,m,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p)}set(t,i,r,l,u,d,h,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=h,_[3]=i,_[4]=u,_[5]=m,_[6]=r,_[7]=d,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],_=r[4],g=r[7],S=r[2],y=r[5],A=r[8],R=l[0],b=l[3],v=l[6],P=l[1],U=l[4],B=l[7],k=l[2],N=l[5],F=l[8];return u[0]=d*R+h*P+m*k,u[3]=d*b+h*U+m*N,u[6]=d*v+h*B+m*F,u[1]=p*R+_*P+g*k,u[4]=p*b+_*U+g*N,u[7]=p*v+_*B+g*F,u[2]=S*R+y*P+A*k,u[5]=S*b+y*U+A*N,u[8]=S*v+y*B+A*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8];return i*d*_-i*h*p-r*u*_+r*h*m+l*u*p-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],g=_*d-h*p,S=h*m-_*u,y=p*u-d*m,A=i*g+r*S+l*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=g*R,t[1]=(l*p-_*r)*R,t[2]=(h*r-l*d)*R,t[3]=S*R,t[4]=(_*i-l*m)*R,t[5]=(l*u-h*i)*R,t[6]=y*R,t[7]=(r*m-p*i)*R,t[8]=(d*i-r*u)*R,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(Jf.makeScale(t,i)),this}rotate(t){return this.premultiply(Jf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Jf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Jf=new ft,Ax=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rx=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eb(){const o={enabled:!0,workingColorSpace:As,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Gt&&(l.r=fa(l.r),l.g=fa(l.g),l.b=fa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Gt&&(l.r=ys(l.r),l.g=ys(l.g),l.b=ys(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Wa?Cc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Fo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Fo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[As]:{primaries:t,whitePoint:r,transfer:Cc,toXYZ:Ax,fromXYZ:Rx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:t,whitePoint:r,transfer:Gt,toXYZ:Ax,fromXYZ:Rx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),o}const Dt=eb();function fa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ys(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let os;class tb{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{os===void 0&&(os=Dc("canvas")),os.width=t.width,os.height=t.height;const l=os.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=os}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Dc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=fa(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(fa(i[r]/255)*255):i[r]=fa(i[r]);return{data:i,width:t.width,height:t.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let nb=0;class Eh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nb++}),this.uuid=Io(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push($f(l[d].image)):u.push($f(l[d]))}else u=$f(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function $f(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?tb.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let ib=0;const ed=new ce;class On extends Ds{constructor(t=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,r=la,l=la,u=di,d=Tr,h=yi,m=da,p=On.DEFAULT_ANISOTROPY,_=Wa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ib++}),this.uuid=Io(),this.name="",this.source=new Eh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ed).x}get height(){return this.source.getSize(ed).y}get depth(){return this.source.getSize(ed).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){ot(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_g)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Pd:t.x=t.x-Math.floor(t.x);break;case la:t.x=t.x<0?0:1;break;case Bd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Pd:t.y=t.y-Math.floor(t.y);break;case la:t.y=t.y<0?0:1;break;case Bd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=_g;On.DEFAULT_ANISOTROPY=1;class rn{constructor(t=0,i=0,r=0,l=1){rn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],_=m[4],g=m[8],S=m[1],y=m[5],A=m[9],R=m[2],b=m[6],v=m[10];if(Math.abs(_-S)<.01&&Math.abs(g-R)<.01&&Math.abs(A-b)<.01){if(Math.abs(_+S)<.1&&Math.abs(g+R)<.1&&Math.abs(A+b)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,B=(y+1)/2,k=(v+1)/2,N=(_+S)/4,F=(g+R)/4,ne=(A+b)/4;return U>B&&U>k?U<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(U),l=N/r,u=F/r):B>k?B<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(B),r=N/l,u=ne/l):k<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(k),r=F/u,l=ne/u),this.set(r,l,u,i),this}let P=Math.sqrt((b-A)*(b-A)+(g-R)*(g-R)+(S-_)*(S-_));return Math.abs(P)<.001&&(P=1),this.x=(b-A)/P,this.y=(g-R)/P,this.z=(S-_)/P,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Mt(this.x,t.x,i.x),this.y=Mt(this.y,t.y,i.y),this.z=Mt(this.z,t.z,i.z),this.w=Mt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Mt(this.x,t,i),this.y=Mt(this.y,t,i),this.z=Mt(this.z,t,i),this.w=Mt(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ab extends Ds{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,t,i),this.scissorTest=!1,this.viewport=new rn(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new On(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:di,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Eh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Za extends ab{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Cg extends On{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ei,this.minFilter=ei,this.wrapR=la,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class rb extends On{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ei,this.minFilter=ei,this.wrapR=la,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Go{constructor(t=new ce(1/0,1/0,1/0),i=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(gi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(gi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=gi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,gi):gi.fromBufferAttribute(u,d),gi.applyMatrix4(t.matrixWorld),this.expandByPoint(gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),tc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),tc.copy(r.boundingBox)),tc.applyMatrix4(t.matrixWorld),this.union(tc)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gi),gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Co),nc.subVectors(this.max,Co),ls.subVectors(t.a,Co),cs.subVectors(t.b,Co),us.subVectors(t.c,Co),Ia.subVectors(cs,ls),Ha.subVectors(us,cs),mr.subVectors(ls,us);let i=[0,-Ia.z,Ia.y,0,-Ha.z,Ha.y,0,-mr.z,mr.y,Ia.z,0,-Ia.x,Ha.z,0,-Ha.x,mr.z,0,-mr.x,-Ia.y,Ia.x,0,-Ha.y,Ha.x,0,-mr.y,mr.x,0];return!td(i,ls,cs,us,nc)||(i=[1,0,0,0,1,0,0,0,1],!td(i,ls,cs,us,nc))?!1:(ic.crossVectors(Ia,Ha),i=[ic.x,ic.y,ic.z],td(i,ls,cs,us,nc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ea),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ea=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],gi=new ce,tc=new Go,ls=new ce,cs=new ce,us=new ce,Ia=new ce,Ha=new ce,mr=new ce,Co=new ce,nc=new ce,ic=new ce,xr=new ce;function td(o,t,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){xr.fromArray(o,u);const h=l.x*Math.abs(xr.x)+l.y*Math.abs(xr.y)+l.z*Math.abs(xr.z),m=t.dot(xr),p=i.dot(xr),_=r.dot(xr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const sb=new Go,wo=new ce,nd=new ce;class Th{constructor(t=new ce,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):sb.setFromPoints(t).getCenter(r);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wo.subVectors(t,this.center);const i=wo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(wo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wo.copy(t.center).add(nd)),this.expandByPoint(wo.copy(t.center).sub(nd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ta=new ce,id=new ce,ac=new ce,Ga=new ce,ad=new ce,rc=new ce,rd=new ce;class ob{constructor(t=new ce,i=new ce(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ta)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ta.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){id.copy(t).add(i).multiplyScalar(.5),ac.copy(i).sub(t).normalize(),Ga.copy(this.origin).sub(id);const u=t.distanceTo(i)*.5,d=-this.direction.dot(ac),h=Ga.dot(this.direction),m=-Ga.dot(ac),p=Ga.lengthSq(),_=Math.abs(1-d*d);let g,S,y,A;if(_>0)if(g=d*m-h,S=d*h-m,A=u*_,g>=0)if(S>=-A)if(S<=A){const R=1/_;g*=R,S*=R,y=g*(g+d*S+2*h)+S*(d*g+S+2*m)+p}else S=u,g=Math.max(0,-(d*S+h)),y=-g*g+S*(S+2*m)+p;else S=-u,g=Math.max(0,-(d*S+h)),y=-g*g+S*(S+2*m)+p;else S<=-A?(g=Math.max(0,-(-d*u+h)),S=g>0?-u:Math.min(Math.max(-u,-m),u),y=-g*g+S*(S+2*m)+p):S<=A?(g=0,S=Math.min(Math.max(-u,-m),u),y=S*(S+2*m)+p):(g=Math.max(0,-(d*u+h)),S=g>0?u:Math.min(Math.max(-u,-m),u),y=-g*g+S*(S+2*m)+p);else S=d>0?-u:u,g=Math.max(0,-(d*S+h)),y=-g*g+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(id).addScaledVector(ac,S),y}intersectSphere(t,i){ta.subVectors(t.center,this.origin);const r=ta.dot(this.direction),l=ta.dot(ta)-r*r,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,d,h,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(r=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(r=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),_>=0?(u=(t.min.y-S.y)*_,d=(t.max.y-S.y)*_):(u=(t.max.y-S.y)*_,d=(t.min.y-S.y)*_),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),g>=0?(h=(t.min.z-S.z)*g,m=(t.max.z-S.z)*g):(h=(t.max.z-S.z)*g,m=(t.min.z-S.z)*g),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ta)!==null}intersectTriangle(t,i,r,l,u){ad.subVectors(i,t),rc.subVectors(r,t),rd.crossVectors(ad,rc);let d=this.direction.dot(rd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ga.subVectors(this.origin,t);const m=h*this.direction.dot(rc.crossVectors(Ga,rc));if(m<0)return null;const p=h*this.direction.dot(ad.cross(Ga));if(p<0||m+p>d)return null;const _=-h*Ga.dot(rd);return _<0?null:this.at(_/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mn{constructor(t,i,r,l,u,d,h,m,p,_,g,S,y,A,R,b){mn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p,_,g,S,y,A,R,b)}set(t,i,r,l,u,d,h,m,p,_,g,S,y,A,R,b){const v=this.elements;return v[0]=t,v[4]=i,v[8]=r,v[12]=l,v[1]=u,v[5]=d,v[9]=h,v[13]=m,v[2]=p,v[6]=_,v[10]=g,v[14]=S,v[3]=y,v[7]=A,v[11]=R,v[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/fs.setFromMatrixColumn(t,0).length(),u=1/fs.setFromMatrixColumn(t,1).length(),d=1/fs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const S=d*_,y=d*g,A=h*_,R=h*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=y+A*p,i[5]=S-R*p,i[9]=-h*m,i[2]=R-S*p,i[6]=A+y*p,i[10]=d*m}else if(t.order==="YXZ"){const S=m*_,y=m*g,A=p*_,R=p*g;i[0]=S+R*h,i[4]=A*h-y,i[8]=d*p,i[1]=d*g,i[5]=d*_,i[9]=-h,i[2]=y*h-A,i[6]=R+S*h,i[10]=d*m}else if(t.order==="ZXY"){const S=m*_,y=m*g,A=p*_,R=p*g;i[0]=S-R*h,i[4]=-d*g,i[8]=A+y*h,i[1]=y+A*h,i[5]=d*_,i[9]=R-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const S=d*_,y=d*g,A=h*_,R=h*g;i[0]=m*_,i[4]=A*p-y,i[8]=S*p+R,i[1]=m*g,i[5]=R*p+S,i[9]=y*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const S=d*m,y=d*p,A=h*m,R=h*p;i[0]=m*_,i[4]=R-S*g,i[8]=A*g+y,i[1]=g,i[5]=d*_,i[9]=-h*_,i[2]=-p*_,i[6]=y*g+A,i[10]=S-R*g}else if(t.order==="XZY"){const S=d*m,y=d*p,A=h*m,R=h*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=S*g+R,i[5]=d*_,i[9]=y*g-A,i[2]=A*g-y,i[6]=h*_,i[10]=R*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lb,t,cb)}lookAt(t,i,r){const l=this.elements;return Jn.subVectors(t,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Va.crossVectors(r,Jn),Va.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Va.crossVectors(r,Jn)),Va.normalize(),sc.crossVectors(Jn,Va),l[0]=Va.x,l[4]=sc.x,l[8]=Jn.x,l[1]=Va.y,l[5]=sc.y,l[9]=Jn.y,l[2]=Va.z,l[6]=sc.z,l[10]=Jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],_=r[1],g=r[5],S=r[9],y=r[13],A=r[2],R=r[6],b=r[10],v=r[14],P=r[3],U=r[7],B=r[11],k=r[15],N=l[0],F=l[4],ne=l[8],w=l[12],C=l[1],V=l[5],ee=l[9],oe=l[13],me=l[2],fe=l[6],z=l[10],j=l[14],Y=l[3],ge=l[7],ve=l[11],L=l[15];return u[0]=d*N+h*C+m*me+p*Y,u[4]=d*F+h*V+m*fe+p*ge,u[8]=d*ne+h*ee+m*z+p*ve,u[12]=d*w+h*oe+m*j+p*L,u[1]=_*N+g*C+S*me+y*Y,u[5]=_*F+g*V+S*fe+y*ge,u[9]=_*ne+g*ee+S*z+y*ve,u[13]=_*w+g*oe+S*j+y*L,u[2]=A*N+R*C+b*me+v*Y,u[6]=A*F+R*V+b*fe+v*ge,u[10]=A*ne+R*ee+b*z+v*ve,u[14]=A*w+R*oe+b*j+v*L,u[3]=P*N+U*C+B*me+k*Y,u[7]=P*F+U*V+B*fe+k*ge,u[11]=P*ne+U*ee+B*z+k*ve,u[15]=P*w+U*oe+B*j+k*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],d=t[1],h=t[5],m=t[9],p=t[13],_=t[2],g=t[6],S=t[10],y=t[14],A=t[3],R=t[7],b=t[11],v=t[15];return A*(+u*m*g-l*p*g-u*h*S+r*p*S+l*h*y-r*m*y)+R*(+i*m*y-i*p*S+u*d*S-l*d*y+l*p*_-u*m*_)+b*(+i*p*g-i*h*y-u*d*g+r*d*y+u*h*_-r*p*_)+v*(-l*h*_-i*m*g+i*h*S+l*d*g-r*d*S+r*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],g=t[9],S=t[10],y=t[11],A=t[12],R=t[13],b=t[14],v=t[15],P=g*b*p-R*S*p+R*m*y-h*b*y-g*m*v+h*S*v,U=A*S*p-_*b*p-A*m*y+d*b*y+_*m*v-d*S*v,B=_*R*p-A*g*p+A*h*y-d*R*y-_*h*v+d*g*v,k=A*g*m-_*R*m-A*h*S+d*R*S+_*h*b-d*g*b,N=i*P+r*U+l*B+u*k;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/N;return t[0]=P*F,t[1]=(R*S*u-g*b*u-R*l*y+r*b*y+g*l*v-r*S*v)*F,t[2]=(h*b*u-R*m*u+R*l*p-r*b*p-h*l*v+r*m*v)*F,t[3]=(g*m*u-h*S*u-g*l*p+r*S*p+h*l*y-r*m*y)*F,t[4]=U*F,t[5]=(_*b*u-A*S*u+A*l*y-i*b*y-_*l*v+i*S*v)*F,t[6]=(A*m*u-d*b*u-A*l*p+i*b*p+d*l*v-i*m*v)*F,t[7]=(d*S*u-_*m*u+_*l*p-i*S*p-d*l*y+i*m*y)*F,t[8]=B*F,t[9]=(A*g*u-_*R*u-A*r*y+i*R*y+_*r*v-i*g*v)*F,t[10]=(d*R*u-A*h*u+A*r*p-i*R*p-d*r*v+i*h*v)*F,t[11]=(_*h*u-d*g*u-_*r*p+i*g*p+d*r*y-i*h*y)*F,t[12]=k*F,t[13]=(_*R*l-A*g*l+A*r*S-i*R*S-_*r*b+i*g*b)*F,t[14]=(A*h*l-d*R*l-A*r*m+i*R*m+d*r*b-i*h*b)*F,t[15]=(d*g*l-_*h*l+_*r*m-i*g*m-d*r*S+i*h*S)*F,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=t.x,h=t.y,m=t.z,p=u*d,_=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+r,_*m-l*d,0,p*m-l*h,_*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,d){return this.set(1,r,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,_=d+d,g=h+h,S=u*p,y=u*_,A=u*g,R=d*_,b=d*g,v=h*g,P=m*p,U=m*_,B=m*g,k=r.x,N=r.y,F=r.z;return l[0]=(1-(R+v))*k,l[1]=(y+B)*k,l[2]=(A-U)*k,l[3]=0,l[4]=(y-B)*N,l[5]=(1-(S+v))*N,l[6]=(b+P)*N,l[7]=0,l[8]=(A+U)*F,l[9]=(b-P)*F,l[10]=(1-(S+R))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=fs.set(l[0],l[1],l[2]).length();const d=fs.set(l[4],l[5],l[6]).length(),h=fs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],_i.copy(this);const p=1/u,_=1/d,g=1/h;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=_,_i.elements[5]*=_,_i.elements[6]*=_,_i.elements[8]*=g,_i.elements[9]*=g,_i.elements[10]*=g,i.setFromRotationMatrix(_i),r.x=u,r.y=d,r.z=h,this}makePerspective(t,i,r,l,u,d,h=Ui,m=!1){const p=this.elements,_=2*u/(i-t),g=2*u/(r-l),S=(i+t)/(i-t),y=(r+l)/(r-l);let A,R;if(m)A=u/(d-u),R=d*u/(d-u);else if(h===Ui)A=-(d+u)/(d-u),R=-2*d*u/(d-u);else if(h===wc)A=-d/(d-u),R=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,d,h=Ui,m=!1){const p=this.elements,_=2/(i-t),g=2/(r-l),S=-(i+t)/(i-t),y=-(r+l)/(r-l);let A,R;if(m)A=1/(d-u),R=d/(d-u);else if(h===Ui)A=-2/(d-u),R=-(d+u)/(d-u);else if(h===wc)A=-1/(d-u),R=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=A,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const fs=new ce,_i=new mn,lb=new ce(0,0,0),cb=new ce(1,1,1),Va=new ce,sc=new ce,Jn=new ce,Cx=new mn,wx=new Ho;class ha{constructor(t=0,i=0,r=0,l=ha.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],_=l[9],g=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Mt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-_,y),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Cx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cx,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return wx.setFromEuler(this),this.setFromQuaternion(wx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ha.DEFAULT_ORDER="XYZ";class wg{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ub=0;const Dx=new ce,ds=new Ho,na=new mn,oc=new ce,Do=new ce,fb=new ce,db=new Ho,Ux=new ce(1,0,0),Lx=new ce(0,1,0),Nx=new ce(0,0,1),Ox={type:"added"},hb={type:"removed"},hs={type:"childadded",child:null},sd={type:"childremoved",child:null};class ti extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=Io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ti.DEFAULT_UP.clone();const t=new ce,i=new ha,r=new Ho,l=new ce(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new mn},normalMatrix:{value:new ft}}),this.matrix=new mn,this.matrixWorld=new mn,this.matrixAutoUpdate=ti.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ds.setFromAxisAngle(t,i),this.quaternion.multiply(ds),this}rotateOnWorldAxis(t,i){return ds.setFromAxisAngle(t,i),this.quaternion.premultiply(ds),this}rotateX(t){return this.rotateOnAxis(Ux,t)}rotateY(t){return this.rotateOnAxis(Lx,t)}rotateZ(t){return this.rotateOnAxis(Nx,t)}translateOnAxis(t,i){return Dx.copy(t).applyQuaternion(this.quaternion),this.position.add(Dx.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Ux,t)}translateY(t){return this.translateOnAxis(Lx,t)}translateZ(t){return this.translateOnAxis(Nx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?oc.copy(t):oc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(Do,oc,this.up):na.lookAt(oc,Do,this.up),this.quaternion.setFromRotationMatrix(na),l&&(na.extractRotation(l.matrixWorld),ds.setFromRotationMatrix(na),this.quaternion.premultiply(ds.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(an("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ox),hs.child=t,this.dispatchEvent(hs),hs.child=null):an("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(hb),sd.child=t,this.dispatchEvent(sd),sd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),na.multiply(t.parent.matrixWorld)),t.applyMatrix4(na),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ox),hs.child=t,this.dispatchEvent(hs),hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,t,fb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,db,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];u(t.shapes,g)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(t.materials,this.material[m]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),_=d(t.images),g=d(t.shapes),S=d(t.skeletons),y=d(t.animations),A=d(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),S.length>0&&(r.skeletons=S),y.length>0&&(r.animations=y),A.length>0&&(r.nodes=A)}return r.object=l,r;function d(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}ti.DEFAULT_UP=new ce(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new ce,ia=new ce,od=new ce,aa=new ce,ps=new ce,ms=new ce,zx=new ce,ld=new ce,cd=new ce,ud=new ce,fd=new rn,dd=new rn,hd=new rn;class bi{constructor(t=new ce,i=new ce,r=new ce){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),vi.subVectors(t,i),l.cross(vi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){vi.subVectors(l,i),ia.subVectors(r,i),od.subVectors(t,i);const d=vi.dot(vi),h=vi.dot(ia),m=vi.dot(od),p=ia.dot(ia),_=ia.dot(od),g=d*p-h*h;if(g===0)return u.set(0,0,0),null;const S=1/g,y=(p*m-h*_)*S,A=(d*_-h*m)*S;return u.set(1-y-A,A,y)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,aa)===null?!1:aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getInterpolation(t,i,r,l,u,d,h,m){return this.getBarycoord(t,i,r,l,aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,aa.x),m.addScaledVector(d,aa.y),m.addScaledVector(h,aa.z),m)}static getInterpolatedAttribute(t,i,r,l,u,d){return fd.setScalar(0),dd.setScalar(0),hd.setScalar(0),fd.fromBufferAttribute(t,i),dd.fromBufferAttribute(t,r),hd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(fd,u.x),d.addScaledVector(dd,u.y),d.addScaledVector(hd,u.z),d}static isFrontFacing(t,i,r,l){return vi.subVectors(r,i),ia.subVectors(t,i),vi.cross(ia).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vi.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),vi.cross(ia).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return bi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return bi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return bi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return bi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return bi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let d,h;ps.subVectors(l,r),ms.subVectors(u,r),ld.subVectors(t,r);const m=ps.dot(ld),p=ms.dot(ld);if(m<=0&&p<=0)return i.copy(r);cd.subVectors(t,l);const _=ps.dot(cd),g=ms.dot(cd);if(_>=0&&g<=_)return i.copy(l);const S=m*g-_*p;if(S<=0&&m>=0&&_<=0)return d=m/(m-_),i.copy(r).addScaledVector(ps,d);ud.subVectors(t,u);const y=ps.dot(ud),A=ms.dot(ud);if(A>=0&&y<=A)return i.copy(u);const R=y*p-m*A;if(R<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(r).addScaledVector(ms,h);const b=_*A-y*g;if(b<=0&&g-_>=0&&y-A>=0)return zx.subVectors(u,l),h=(g-_)/(g-_+(y-A)),i.copy(l).addScaledVector(zx,h);const v=1/(b+R+S);return d=R*v,h=S*v,i.copy(r).addScaledVector(ps,d).addScaledVector(ms,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Dg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ka={h:0,s:0,l:0},lc={h:0,s:0,l:0};function pd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Vt{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Dt.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Dt.workingColorSpace){return this.r=t,this.g=i,this.b=r,Dt.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Dt.workingColorSpace){if(t=$S(t,1),i=Mt(i,0,1),r=Mt(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=pd(d,u,t+1/3),this.g=pd(d,u,t),this.b=pd(d,u,t-1/3)}return Dt.colorSpaceToWorking(this,l),this}setStyle(t,i=fi){function r(u){u!==void 0&&parseFloat(u)<1&&ot("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:ot("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=fi){const r=Dg[t.toLowerCase()];return r!==void 0?this.setHex(r,i):ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fa(t.r),this.g=fa(t.g),this.b=fa(t.b),this}copyLinearToSRGB(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fi){return Dt.workingToColorSpace(Un.copy(this),t),Math.round(Mt(Un.r*255,0,255))*65536+Math.round(Mt(Un.g*255,0,255))*256+Math.round(Mt(Un.b*255,0,255))}getHexString(t=fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Dt.workingColorSpace){Dt.workingToColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,u=Un.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const _=(h+d)/2;if(h===d)m=0,p=0;else{const g=d-h;switch(p=_<=.5?g/(d+h):g/(2-d-h),d){case r:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-r)/g+2;break;case u:m=(r-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Dt.workingColorSpace){return Dt.workingToColorSpace(Un.copy(this),i),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=fi){Dt.workingToColorSpace(Un.copy(this),t);const i=Un.r,r=Un.g,l=Un.b;return t!==fi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(ka),this.setHSL(ka.h+t,ka.s+i,ka.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(ka),t.getHSL(lc);const r=Kf(ka.h,lc.h,i),l=Kf(ka.s,lc.s,i),u=Kf(ka.l,lc.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Vt;Vt.NAMES=Dg;let pb=0;class Lc extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=Io(),this.name="",this.type="Material",this.blending=bs,this.side=ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Td,this.blendDst=Ad,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=Ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){ot(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==bs&&(r.blending=this.blending),this.side!==ja&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Td&&(r.blendSrc=this.blendSrc),this.blendDst!==Ad&&(r.blendDst=this.blendDst),this.blendEquation!==yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ms&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Sx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ug extends Lc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ha,this.combine=gg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new ce,cc=new Ut;let mb=0;class Li{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mb++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=bx,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)cc.fromBufferAttribute(this,i),cc.applyMatrix3(t),this.setXY(i,cc.x,cc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Ro(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Gn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Ro(i,this.array)),i}setX(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Ro(i,this.array)),i}setY(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Ro(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Ro(i,this.array)),i}setW(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array),u=Gn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bx&&(t.usage=this.usage),t}}class Lg extends Li{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Ng extends Li{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Ar extends Li{constructor(t,i,r){super(new Float32Array(t),i,r)}}let xb=0;const ui=new mn,md=new ti,xs=new ce,$n=new Go,Uo=new Go,yn=new ce;class Ka extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xb++}),this.uuid=Io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Rg(t)?Ng:Lg)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ft().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,i,r){return ui.makeTranslation(t,i,r),this.applyMatrix4(ui),this}scale(t,i,r){return ui.makeScale(t,i,r),this.applyMatrix4(ui),this}lookAt(t){return md.lookAt(t),md.updateMatrix(),this.applyMatrix4(md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Ar(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Go);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){an("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&an('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Th);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){an("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(t){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Uo.setFromBufferAttribute(h),this.morphTargetsRelative?(yn.addVectors($n.min,Uo.min),$n.expandByPoint(yn),yn.addVectors($n.max,Uo.max),$n.expandByPoint(yn)):($n.expandByPoint(Uo.min),$n.expandByPoint(Uo.max))}$n.getCenter(r);let l=0;for(let u=0,d=t.count;u<d;u++)yn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(yn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)yn.fromBufferAttribute(h,p),m&&(xs.fromBufferAttribute(t,p),yn.add(xs)),l=Math.max(l,r.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&an('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){an("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let ne=0;ne<r.count;ne++)h[ne]=new ce,m[ne]=new ce;const p=new ce,_=new ce,g=new ce,S=new Ut,y=new Ut,A=new Ut,R=new ce,b=new ce;function v(ne,w,C){p.fromBufferAttribute(r,ne),_.fromBufferAttribute(r,w),g.fromBufferAttribute(r,C),S.fromBufferAttribute(u,ne),y.fromBufferAttribute(u,w),A.fromBufferAttribute(u,C),_.sub(p),g.sub(p),y.sub(S),A.sub(S);const V=1/(y.x*A.y-A.x*y.y);isFinite(V)&&(R.copy(_).multiplyScalar(A.y).addScaledVector(g,-y.y).multiplyScalar(V),b.copy(g).multiplyScalar(y.x).addScaledVector(_,-A.x).multiplyScalar(V),h[ne].add(R),h[w].add(R),h[C].add(R),m[ne].add(b),m[w].add(b),m[C].add(b))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let ne=0,w=P.length;ne<w;++ne){const C=P[ne],V=C.start,ee=C.count;for(let oe=V,me=V+ee;oe<me;oe+=3)v(t.getX(oe+0),t.getX(oe+1),t.getX(oe+2))}const U=new ce,B=new ce,k=new ce,N=new ce;function F(ne){k.fromBufferAttribute(l,ne),N.copy(k);const w=h[ne];U.copy(w),U.sub(k.multiplyScalar(k.dot(w))).normalize(),B.crossVectors(N,w);const V=B.dot(m[ne])<0?-1:1;d.setXYZW(ne,U.x,U.y,U.z,V)}for(let ne=0,w=P.length;ne<w;++ne){const C=P[ne],V=C.start,ee=C.count;for(let oe=V,me=V+ee;oe<me;oe+=3)F(t.getX(oe+0)),F(t.getX(oe+1)),F(t.getX(oe+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Li(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,y=r.count;S<y;S++)r.setXYZ(S,0,0,0);const l=new ce,u=new ce,d=new ce,h=new ce,m=new ce,p=new ce,_=new ce,g=new ce;if(t)for(let S=0,y=t.count;S<y;S+=3){const A=t.getX(S+0),R=t.getX(S+1),b=t.getX(S+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,b),_.subVectors(d,u),g.subVectors(l,u),_.cross(g),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,b),h.add(_),m.add(_),p.add(_),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(b,p.x,p.y,p.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),_.subVectors(d,u),g.subVectors(l,u),_.cross(g),r.setXYZ(S+0,_.x,_.y,_.z),r.setXYZ(S+1,_.x,_.y,_.z),r.setXYZ(S+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)yn.fromBufferAttribute(t,i),yn.normalize(),t.setXYZ(i,yn.x,yn.y,yn.z)}toNonIndexed(){function t(h,m){const p=h.array,_=h.itemSize,g=h.normalized,S=new p.constructor(m.length*_);let y=0,A=0;for(let R=0,b=m.length;R<b;R++){h.isInterleavedBufferAttribute?y=m[R]*h.data.stride+h.offset:y=m[R]*_;for(let v=0;v<_;v++)S[A++]=p[y++]}return new Li(S,_,g)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ka,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let _=0,g=p.length;_<g;_++){const S=p[_],y=t(S,r);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,S=p.length;g<S;g++){const y=p[g];_.push(y.toJSON(t.data))}_.length>0&&(l[m]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=t.morphAttributes;for(const p in u){const _=[],g=u[p];for(let S=0,y=g.length;S<y;S++)_.push(g[S].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,_=d.length;p<_;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Px=new mn,gr=new ob,uc=new Th,Bx=new ce,fc=new ce,dc=new ce,hc=new ce,xd=new ce,pc=new ce,Fx=new ce,mc=new ce;class Ni extends ti{constructor(t=new Ka,i=new Ug){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){pc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=h[m],g=u[m];_!==0&&(xd.fromBufferAttribute(g,t),d?pc.addScaledVector(xd,_):pc.addScaledVector(xd.sub(i),_))}i.add(pc)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),uc.copy(r.boundingSphere),uc.applyMatrix4(u),gr.copy(t.ray).recast(t.near),!(uc.containsPoint(gr.origin)===!1&&(gr.intersectSphere(uc,Bx)===null||gr.origin.distanceToSquared(Bx)>(t.far-t.near)**2))&&(Px.copy(u).invert(),gr.copy(t.ray).applyMatrix4(Px),!(r.boundingBox!==null&&gr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,gr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,g=u.attributes.normal,S=u.groups,y=u.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,R=S.length;A<R;A++){const b=S[A],v=d[b.materialIndex],P=Math.max(b.start,y.start),U=Math.min(h.count,Math.min(b.start+b.count,y.start+y.count));for(let B=P,k=U;B<k;B+=3){const N=h.getX(B),F=h.getX(B+1),ne=h.getX(B+2);l=xc(this,v,t,r,p,_,g,N,F,ne),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),R=Math.min(h.count,y.start+y.count);for(let b=A,v=R;b<v;b+=3){const P=h.getX(b),U=h.getX(b+1),B=h.getX(b+2);l=xc(this,d,t,r,p,_,g,P,U,B),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,R=S.length;A<R;A++){const b=S[A],v=d[b.materialIndex],P=Math.max(b.start,y.start),U=Math.min(m.count,Math.min(b.start+b.count,y.start+y.count));for(let B=P,k=U;B<k;B+=3){const N=B,F=B+1,ne=B+2;l=xc(this,v,t,r,p,_,g,N,F,ne),l&&(l.faceIndex=Math.floor(B/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),R=Math.min(m.count,y.start+y.count);for(let b=A,v=R;b<v;b+=3){const P=b,U=b+1,B=b+2;l=xc(this,d,t,r,p,_,g,P,U,B),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function gb(o,t,i,r,l,u,d,h){let m;if(t.side===Vn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,t.side===ja,h),m===null)return null;mc.copy(h),mc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(mc);return p<i.near||p>i.far?null:{distance:p,point:mc.clone(),object:o}}function xc(o,t,i,r,l,u,d,h,m,p){o.getVertexPosition(h,fc),o.getVertexPosition(m,dc),o.getVertexPosition(p,hc);const _=gb(o,t,i,r,fc,dc,hc,Fx);if(_){const g=new ce;bi.getBarycoord(Fx,fc,dc,hc,g),l&&(_.uv=bi.getInterpolatedAttribute(l,h,m,p,g,new Ut)),u&&(_.uv1=bi.getInterpolatedAttribute(u,h,m,p,g,new Ut)),d&&(_.normal=bi.getInterpolatedAttribute(d,h,m,p,g,new ce),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new ce,materialIndex:0};bi.getNormal(fc,dc,hc,S.normal),_.face=S,_.barycoord=g}return _}class Vo extends Ka{constructor(t=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],_=[],g=[];let S=0,y=0;A("z","y","x",-1,-1,r,i,t,d,u,0),A("z","y","x",1,-1,r,i,-t,d,u,1),A("x","z","y",1,1,t,r,i,l,d,2),A("x","z","y",1,-1,t,r,-i,l,d,3),A("x","y","z",1,-1,t,i,r,l,u,4),A("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Ar(p,3)),this.setAttribute("normal",new Ar(_,3)),this.setAttribute("uv",new Ar(g,2));function A(R,b,v,P,U,B,k,N,F,ne,w){const C=B/F,V=k/ne,ee=B/2,oe=k/2,me=N/2,fe=F+1,z=ne+1;let j=0,Y=0;const ge=new ce;for(let ve=0;ve<z;ve++){const L=ve*V-oe;for(let ae=0;ae<fe;ae++){const ye=ae*C-ee;ge[R]=ye*P,ge[b]=L*U,ge[v]=me,p.push(ge.x,ge.y,ge.z),ge[R]=0,ge[b]=0,ge[v]=N>0?1:-1,_.push(ge.x,ge.y,ge.z),g.push(ae/F),g.push(1-ve/ne),j+=1}}for(let ve=0;ve<ne;ve++)for(let L=0;L<F;L++){const ae=S+L+fe*ve,ye=S+L+fe*(ve+1),Te=S+(L+1)+fe*(ve+1),ze=S+(L+1)+fe*ve;m.push(ae,ye,ze),m.push(ye,Te,ze),Y+=6}h.addGroup(y,Y,w),y+=Y,S+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Rs(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Nn(o){const t={};for(let i=0;i<o.length;i++){const r=Rs(o[i]);for(const l in r)t[l]=r[l]}return t}function _b(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Og(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Dt.workingColorSpace}const vb={clone:Rs,merge:Nn};var Sb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends Lc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sb,this.fragmentShader=bb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Rs(t.uniforms),this.uniformsGroups=_b(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class zg extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mn,this.projectionMatrix=new mn,this.projectionMatrixInverse=new mn,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xa=new ce,Ix=new Ut,Hx=new Ut;class Si extends zg{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=dh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dh*2*Math.atan(Math.tan(Zf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Xa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xa.x,Xa.y).multiplyScalar(-t/Xa.z),Xa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Xa.x,Xa.y).multiplyScalar(-t/Xa.z)}getViewSize(t,i){return this.getViewBounds(t,Ix,Hx),i.subVectors(Hx,Ix)}setViewOffset(t,i,r,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Zf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const gs=-90,_s=1;class yb extends ti{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Si(gs,_s,t,i);l.layers=this.layers,this.add(l);const u=new Si(gs,_s,t,i);u.layers=this.layers,this.add(u);const d=new Si(gs,_s,t,i);d.layers=this.layers,this.add(d);const h=new Si(gs,_s,t,i);h.layers=this.layers,this.add(h);const m=new Si(gs,_s,t,i);m.layers=this.layers,this.add(m);const p=new Si(gs,_s,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(t===Ui)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===wc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,_]=this.children,g=t.getRenderTarget(),S=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=R,t.setRenderTarget(r,5,l),t.render(i,_),t.setRenderTarget(g,S,y),t.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Pg extends On{constructor(t=[],i=Es,r,l,u,d,h,m,p,_){super(t,i,r,l,u,d,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Mb extends Za{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Pg(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Vo(5,5,5),u=new Mi({name:"CubemapFromEquirect",uniforms:Rs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:ua});u.uniforms.tEquirect.value=i;const d=new Ni(l,u),h=i.minFilter;return i.minFilter===Tr&&(i.minFilter=di),new yb(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(u)}}class gc extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Eb={type:"move"};class gd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const R of t.hand.values()){const b=i.getJointPose(R,r),v=this._getHandJoint(p,R);b!==null&&(v.matrix.fromArray(b.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=b.radius),v.visible=b!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=_.position.distanceTo(g.position),y=.02,A=.005;p.inputState.pinching&&S>y+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=y-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(Eb)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new gc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class Gx extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ha,this.environmentIntensity=1,this.environmentRotation=new ha,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Tb extends On{constructor(t=null,i=1,r=1,l,u,d,h,m,p=ei,_=ei,g,S){super(null,d,h,m,p,_,l,u,g,S),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _d=new ce,Ab=new ce,Rb=new ft;class br{constructor(t=new ce(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=_d.subVectors(r,i).cross(Ab.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(_d),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||Rb.getNormalMatrix(t),l=this.coplanarPoint(_d).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new Th,Cb=new Ut(.5,.5),_c=new ce;class Bg{constructor(t=new br,i=new br,r=new br,l=new br,u=new br,d=new br){this.planes=[t,i,r,l,u,d]}set(t,i,r,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Ui,r=!1){const l=this.planes,u=t.elements,d=u[0],h=u[1],m=u[2],p=u[3],_=u[4],g=u[5],S=u[6],y=u[7],A=u[8],R=u[9],b=u[10],v=u[11],P=u[12],U=u[13],B=u[14],k=u[15];if(l[0].setComponents(p-d,y-_,v-A,k-P).normalize(),l[1].setComponents(p+d,y+_,v+A,k+P).normalize(),l[2].setComponents(p+h,y+g,v+R,k+U).normalize(),l[3].setComponents(p-h,y-g,v-R,k-U).normalize(),r)l[4].setComponents(m,S,b,B).normalize(),l[5].setComponents(p-m,y-S,v-b,k-B).normalize();else if(l[4].setComponents(p-m,y-S,v-b,k-B).normalize(),i===Ui)l[5].setComponents(p+m,y+S,v+b,k+B).normalize();else if(i===wc)l[5].setComponents(m,S,b,B).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),_r.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(t){_r.center.set(0,0,0);const i=Cb.distanceTo(t.center);return _r.radius=.7071067811865476+i,_r.applyMatrix4(t.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(_c.x=l.normal.x>0?t.max.x:t.min.x,_c.y=l.normal.y>0?t.max.y:t.min.y,_c.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(_c)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Fg extends On{constructor(t,i,r=Rr,l,u,d,h=ei,m=ei,p,_=Po,g=1){if(_!==Po&&_!==Bo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:g};super(S,l,u,d,h,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Eh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Ig extends On{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Cs extends Ka{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,_=m+1,g=t/h,S=i/m,y=[],A=[],R=[],b=[];for(let v=0;v<_;v++){const P=v*S-d;for(let U=0;U<p;U++){const B=U*g-u;A.push(B,-P,0),R.push(0,0,1),b.push(U/h),b.push(1-v/m)}}for(let v=0;v<m;v++)for(let P=0;P<h;P++){const U=P+p*v,B=P+p*(v+1),k=P+1+p*(v+1),N=P+1+p*v;y.push(U,B,N),y.push(B,k,N)}this.setIndex(y),this.setAttribute("position",new Ar(A,3)),this.setAttribute("normal",new Ar(R,3)),this.setAttribute("uv",new Ar(b,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cs(t.width,t.height,t.widthSegments,t.heightSegments)}}class wb extends Lc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=HS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Db extends Lc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Hg extends zg{constructor(t=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,d=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Ub extends Si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Lb{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function Vx(o,t,i,r){const l=Nb(r);switch(i){case Mg:return o*t;case Tg:return o*t/l.components*l.byteLength;case Sh:return o*t/l.components*l.byteLength;case bh:return o*t*2/l.components*l.byteLength;case yh:return o*t*2/l.components*l.byteLength;case Eg:return o*t*3/l.components*l.byteLength;case yi:return o*t*4/l.components*l.byteLength;case Mh:return o*t*4/l.components*l.byteLength;case yc:case Mc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Ec:case Tc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Id:case Gd:return Math.max(o,16)*Math.max(t,8)/4;case Fd:case Hd:return Math.max(o,8)*Math.max(t,8)/2;case Vd:case kd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Xd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Wd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case qd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Yd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case jd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Zd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Kd:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Qd:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Jd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case $d:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case eh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case th:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case nh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case ih:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case ah:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case rh:case sh:case oh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case lh:case ch:return Math.ceil(o/4)*Math.ceil(t/4)*8;case uh:case fh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Nb(o){switch(o){case da:case vg:return{byteLength:1,components:1};case Oo:case Sg:case ws:return{byteLength:2,components:1};case _h:case vh:return{byteLength:2,components:4};case Rr:case gh:case ca:return{byteLength:4,components:1};case bg:case yg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xh}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xh);function Gg(){let o=null,t=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Ob(o){const t=new WeakMap;function i(h,m){const p=h.array,_=h.usage,g=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,_),h.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,m,p){const _=m.array,g=m.updateRanges;if(o.bindBuffer(p,h),g.length===0)o.bufferSubData(p,0,_);else{g.sort((y,A)=>y.start-A.start);let S=0;for(let y=1;y<g.length;y++){const A=g[S],R=g[y];R.start<=A.start+A.count+1?A.count=Math.max(A.count,R.start+R.count-A.start):(++S,g[S]=R)}g.length=S+1;for(let y=0,A=g.length;y<A;y++){const R=g[y];o.bufferSubData(p,R.start*_.BYTES_PER_ELEMENT,_,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var zb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Bb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ib=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Vb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Xb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,jb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Zb=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Kb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$b=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ey=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ty=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ny=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,iy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ay=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ry=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sy=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,oy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ly=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,uy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fy="gl_FragColor = linearToOutputTexel( gl_FragColor );",dy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,py=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,my=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gy=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_y=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,by=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,My=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ey=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ty=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ay=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Ry=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Cy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Uy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ly=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ny=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Oy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,zy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Py=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,By=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fy=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Iy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hy=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Gy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ky=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Xy=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Yy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ky=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Qy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$y=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,eM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,aM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,uM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,gM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_M=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,SM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,yM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,MM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,EM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,RM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,CM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,DM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,UM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,NM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const OM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,GM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,VM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,XM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,YM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,ZM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$M=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,t1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,n1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,i1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,r1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,c1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,u1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,d1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,h1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,pt={alphahash_fragment:zb,alphahash_pars_fragment:Pb,alphamap_fragment:Bb,alphamap_pars_fragment:Fb,alphatest_fragment:Ib,alphatest_pars_fragment:Hb,aomap_fragment:Gb,aomap_pars_fragment:Vb,batching_pars_vertex:kb,batching_vertex:Xb,begin_vertex:Wb,beginnormal_vertex:qb,bsdfs:Yb,iridescence_fragment:jb,bumpmap_pars_fragment:Zb,clipping_planes_fragment:Kb,clipping_planes_pars_fragment:Qb,clipping_planes_pars_vertex:Jb,clipping_planes_vertex:$b,color_fragment:ey,color_pars_fragment:ty,color_pars_vertex:ny,color_vertex:iy,common:ay,cube_uv_reflection_fragment:ry,defaultnormal_vertex:sy,displacementmap_pars_vertex:oy,displacementmap_vertex:ly,emissivemap_fragment:cy,emissivemap_pars_fragment:uy,colorspace_fragment:fy,colorspace_pars_fragment:dy,envmap_fragment:hy,envmap_common_pars_fragment:py,envmap_pars_fragment:my,envmap_pars_vertex:xy,envmap_physical_pars_fragment:Ry,envmap_vertex:gy,fog_vertex:_y,fog_pars_vertex:vy,fog_fragment:Sy,fog_pars_fragment:by,gradientmap_pars_fragment:yy,lightmap_pars_fragment:My,lights_lambert_fragment:Ey,lights_lambert_pars_fragment:Ty,lights_pars_begin:Ay,lights_toon_fragment:Cy,lights_toon_pars_fragment:wy,lights_phong_fragment:Dy,lights_phong_pars_fragment:Uy,lights_physical_fragment:Ly,lights_physical_pars_fragment:Ny,lights_fragment_begin:Oy,lights_fragment_maps:zy,lights_fragment_end:Py,logdepthbuf_fragment:By,logdepthbuf_pars_fragment:Fy,logdepthbuf_pars_vertex:Iy,logdepthbuf_vertex:Hy,map_fragment:Gy,map_pars_fragment:Vy,map_particle_fragment:ky,map_particle_pars_fragment:Xy,metalnessmap_fragment:Wy,metalnessmap_pars_fragment:qy,morphinstance_vertex:Yy,morphcolor_vertex:jy,morphnormal_vertex:Zy,morphtarget_pars_vertex:Ky,morphtarget_vertex:Qy,normal_fragment_begin:Jy,normal_fragment_maps:$y,normal_pars_fragment:eM,normal_pars_vertex:tM,normal_vertex:nM,normalmap_pars_fragment:iM,clearcoat_normal_fragment_begin:aM,clearcoat_normal_fragment_maps:rM,clearcoat_pars_fragment:sM,iridescence_pars_fragment:oM,opaque_fragment:lM,packing:cM,premultiplied_alpha_fragment:uM,project_vertex:fM,dithering_fragment:dM,dithering_pars_fragment:hM,roughnessmap_fragment:pM,roughnessmap_pars_fragment:mM,shadowmap_pars_fragment:xM,shadowmap_pars_vertex:gM,shadowmap_vertex:_M,shadowmask_pars_fragment:vM,skinbase_vertex:SM,skinning_pars_vertex:bM,skinning_vertex:yM,skinnormal_vertex:MM,specularmap_fragment:EM,specularmap_pars_fragment:TM,tonemapping_fragment:AM,tonemapping_pars_fragment:RM,transmission_fragment:CM,transmission_pars_fragment:wM,uv_pars_fragment:DM,uv_pars_vertex:UM,uv_vertex:LM,worldpos_vertex:NM,background_vert:OM,background_frag:zM,backgroundCube_vert:PM,backgroundCube_frag:BM,cube_vert:FM,cube_frag:IM,depth_vert:HM,depth_frag:GM,distanceRGBA_vert:VM,distanceRGBA_frag:kM,equirect_vert:XM,equirect_frag:WM,linedashed_vert:qM,linedashed_frag:YM,meshbasic_vert:jM,meshbasic_frag:ZM,meshlambert_vert:KM,meshlambert_frag:QM,meshmatcap_vert:JM,meshmatcap_frag:$M,meshnormal_vert:e1,meshnormal_frag:t1,meshphong_vert:n1,meshphong_frag:i1,meshphysical_vert:a1,meshphysical_frag:r1,meshtoon_vert:s1,meshtoon_frag:o1,points_vert:l1,points_frag:c1,shadow_vert:u1,shadow_frag:f1,sprite_vert:d1,sprite_frag:h1},Ne={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},wi={basic:{uniforms:Nn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Nn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Vt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Nn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Nn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Nn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Vt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Nn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Nn([Ne.points,Ne.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Nn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Nn([Ne.common,Ne.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Nn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Nn([Ne.sprite,Ne.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Nn([Ne.common,Ne.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Nn([Ne.lights,Ne.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};wi.physical={uniforms:Nn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const vc={r:0,b:0,g:0},vr=new ha,p1=new mn;function m1(o,t,i,r,l,u,d){const h=new Vt(0);let m=u===!0?0:1,p,_,g=null,S=0,y=null;function A(U){let B=U.isScene===!0?U.background:null;return B&&B.isTexture&&(B=(U.backgroundBlurriness>0?i:t).get(B)),B}function R(U){let B=!1;const k=A(U);k===null?v(h,m):k&&k.isColor&&(v(k,1),B=!0);const N=o.xr.getEnvironmentBlendMode();N==="additive"?r.buffers.color.setClear(0,0,0,1,d):N==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||B)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function b(U,B){const k=A(B);k&&(k.isCubeTexture||k.mapping===Uc)?(_===void 0&&(_=new Ni(new Vo(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:Rs(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(N,F,ne){this.matrixWorld.copyPosition(ne.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),vr.copy(B.backgroundRotation),vr.x*=-1,vr.y*=-1,vr.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),_.material.uniforms.envMap.value=k,_.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=B.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(p1.makeRotationFromEuler(vr)),_.material.toneMapped=Dt.getTransfer(k.colorSpace)!==Gt,(g!==k||S!==k.version||y!==o.toneMapping)&&(_.material.needsUpdate=!0,g=k,S=k.version,y=o.toneMapping),_.layers.enableAll(),U.unshift(_,_.geometry,_.material,0,0,null)):k&&k.isTexture&&(p===void 0&&(p=new Ni(new Cs(2,2),new Mi({name:"BackgroundMaterial",uniforms:Rs(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:ja,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=k,p.material.uniforms.backgroundIntensity.value=B.backgroundIntensity,p.material.toneMapped=Dt.getTransfer(k.colorSpace)!==Gt,k.matrixAutoUpdate===!0&&k.updateMatrix(),p.material.uniforms.uvTransform.value.copy(k.matrix),(g!==k||S!==k.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,g=k,S=k.version,y=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function v(U,B){U.getRGB(vc,Og(o)),r.buffers.color.setClear(vc.r,vc.g,vc.b,B,d)}function P(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,B=1){h.set(U),m=B,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,v(h,m)},render:R,addToRenderList:b,dispose:P}}function x1(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,d=!1;function h(C,V,ee,oe,me){let fe=!1;const z=g(oe,ee,V);u!==z&&(u=z,p(u.object)),fe=y(C,oe,ee,me),fe&&A(C,oe,ee,me),me!==null&&t.update(me,o.ELEMENT_ARRAY_BUFFER),(fe||d)&&(d=!1,B(C,V,ee,oe),me!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(me).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function _(C){return o.deleteVertexArray(C)}function g(C,V,ee){const oe=ee.wireframe===!0;let me=r[C.id];me===void 0&&(me={},r[C.id]=me);let fe=me[V.id];fe===void 0&&(fe={},me[V.id]=fe);let z=fe[oe];return z===void 0&&(z=S(m()),fe[oe]=z),z}function S(C){const V=[],ee=[],oe=[];for(let me=0;me<i;me++)V[me]=0,ee[me]=0,oe[me]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ee,attributeDivisors:oe,object:C,attributes:{},index:null}}function y(C,V,ee,oe){const me=u.attributes,fe=V.attributes;let z=0;const j=ee.getAttributes();for(const Y in j)if(j[Y].location>=0){const ve=me[Y];let L=fe[Y];if(L===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(L=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(L=C.instanceColor)),ve===void 0||ve.attribute!==L||L&&ve.data!==L.data)return!0;z++}return u.attributesNum!==z||u.index!==oe}function A(C,V,ee,oe){const me={},fe=V.attributes;let z=0;const j=ee.getAttributes();for(const Y in j)if(j[Y].location>=0){let ve=fe[Y];ve===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(ve=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(ve=C.instanceColor));const L={};L.attribute=ve,ve&&ve.data&&(L.data=ve.data),me[Y]=L,z++}u.attributes=me,u.attributesNum=z,u.index=oe}function R(){const C=u.newAttributes;for(let V=0,ee=C.length;V<ee;V++)C[V]=0}function b(C){v(C,0)}function v(C,V){const ee=u.newAttributes,oe=u.enabledAttributes,me=u.attributeDivisors;ee[C]=1,oe[C]===0&&(o.enableVertexAttribArray(C),oe[C]=1),me[C]!==V&&(o.vertexAttribDivisor(C,V),me[C]=V)}function P(){const C=u.newAttributes,V=u.enabledAttributes;for(let ee=0,oe=V.length;ee<oe;ee++)V[ee]!==C[ee]&&(o.disableVertexAttribArray(ee),V[ee]=0)}function U(C,V,ee,oe,me,fe,z){z===!0?o.vertexAttribIPointer(C,V,ee,me,fe):o.vertexAttribPointer(C,V,ee,oe,me,fe)}function B(C,V,ee,oe){R();const me=oe.attributes,fe=ee.getAttributes(),z=V.defaultAttributeValues;for(const j in fe){const Y=fe[j];if(Y.location>=0){let ge=me[j];if(ge===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(ge=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(ge=C.instanceColor)),ge!==void 0){const ve=ge.normalized,L=ge.itemSize,ae=t.get(ge);if(ae===void 0)continue;const ye=ae.buffer,Te=ae.type,ze=ae.bytesPerElement,te=Te===o.INT||Te===o.UNSIGNED_INT||ge.gpuType===gh;if(ge.isInterleavedBufferAttribute){const le=ge.data,we=le.stride,He=ge.offset;if(le.isInstancedInterleavedBuffer){for(let Xe=0;Xe<Y.locationSize;Xe++)v(Y.location+Xe,le.meshPerAttribute);C.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Xe=0;Xe<Y.locationSize;Xe++)b(Y.location+Xe);o.bindBuffer(o.ARRAY_BUFFER,ye);for(let Xe=0;Xe<Y.locationSize;Xe++)U(Y.location+Xe,L/Y.locationSize,Te,ve,we*ze,(He+L/Y.locationSize*Xe)*ze,te)}else{if(ge.isInstancedBufferAttribute){for(let le=0;le<Y.locationSize;le++)v(Y.location+le,ge.meshPerAttribute);C.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let le=0;le<Y.locationSize;le++)b(Y.location+le);o.bindBuffer(o.ARRAY_BUFFER,ye);for(let le=0;le<Y.locationSize;le++)U(Y.location+le,L/Y.locationSize,Te,ve,L*ze,L/Y.locationSize*le*ze,te)}}else if(z!==void 0){const ve=z[j];if(ve!==void 0)switch(ve.length){case 2:o.vertexAttrib2fv(Y.location,ve);break;case 3:o.vertexAttrib3fv(Y.location,ve);break;case 4:o.vertexAttrib4fv(Y.location,ve);break;default:o.vertexAttrib1fv(Y.location,ve)}}}}P()}function k(){ne();for(const C in r){const V=r[C];for(const ee in V){const oe=V[ee];for(const me in oe)_(oe[me].object),delete oe[me];delete V[ee]}delete r[C]}}function N(C){if(r[C.id]===void 0)return;const V=r[C.id];for(const ee in V){const oe=V[ee];for(const me in oe)_(oe[me].object),delete oe[me];delete V[ee]}delete r[C.id]}function F(C){for(const V in r){const ee=r[V];if(ee[C.id]===void 0)continue;const oe=ee[C.id];for(const me in oe)_(oe[me].object),delete oe[me];delete ee[C.id]}}function ne(){w(),d=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:ne,resetDefaultState:w,dispose:k,releaseStatesOfGeometry:N,releaseStatesOfProgram:F,initAttributes:R,enableAttribute:b,disableUnusedAttributes:P}}function g1(o,t,i){let r;function l(p){r=p}function u(p,_){o.drawArrays(r,p,_),i.update(_,r,1)}function d(p,_,g){g!==0&&(o.drawArraysInstanced(r,p,_,g),i.update(_,r,g))}function h(p,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,g);let y=0;for(let A=0;A<g;A++)y+=_[A];i.update(y,r,1)}function m(p,_,g,S){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let A=0;A<p.length;A++)d(p[A],_[A],S[A]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,_,0,S,0,g);let A=0;for(let R=0;R<g;R++)A+=_[R]*S[R];i.update(A,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function _1(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(F){return!(F!==yi&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const ne=F===ws&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==da&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ca&&!ne)}function m(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(ot("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),b=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),B=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),k=A>0,N=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:A,maxTextureSize:R,maxCubemapSize:b,maxAttributes:v,maxVertexUniforms:P,maxVaryings:U,maxFragmentUniforms:B,vertexTextures:k,maxSamples:N}}function v1(o){const t=this;let i=null,r=0,l=!1,u=!1;const d=new br,h=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const y=g.length!==0||S||r!==0||l;return l=S,r=g.length,y},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,S){i=_(g,S,0)},this.setState=function(g,S,y){const A=g.clippingPlanes,R=g.clipIntersection,b=g.clipShadows,v=o.get(g);if(!l||A===null||A.length===0||u&&!b)u?_(null):p();else{const P=u?0:r,U=P*4;let B=v.clippingState||null;m.value=B,B=_(A,S,U,y);for(let k=0;k!==U;++k)B[k]=i[k];v.clippingState=B,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(g,S,y,A){const R=g!==null?g.length:0;let b=null;if(R!==0){if(b=m.value,A!==!0||b===null){const v=y+R*4,P=S.matrixWorldInverse;h.getNormalMatrix(P),(b===null||b.length<v)&&(b=new Float32Array(v));for(let U=0,B=y;U!==R;++U,B+=4)d.copy(g[U]).applyMatrix4(P,h),d.normal.toArray(b,B),b[B+3]=d.constant}m.value=b,m.needsUpdate=!0}return t.numPlanes=R,t.numIntersection=0,b}}function S1(o){let t=new WeakMap;function i(d,h){return h===Od?d.mapping=Es:h===zd&&(d.mapping=Ts),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Od||h===zd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new Mb(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const qa=4,kx=[.125,.215,.35,.446,.526,.582],Mr=20,b1=256,Lo=new Hg,Xx=new Vt;let vd=null,Sd=0,bd=0,yd=!1;const y1=new ce;class Wx{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=y1}=u;vd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),bd=this._renderer.getActiveMipmapLevel(),yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(vd,Sd,bd),this._renderer.xr.enabled=yd,t.scissorTest=!1,vs(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Es||t.mapping===Ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vd=this._renderer.getRenderTarget(),Sd=this._renderer.getActiveCubeFace(),bd=this._renderer.getActiveMipmapLevel(),yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:di,minFilter:di,generateMipmaps:!1,type:ws,format:yi,colorSpace:As,depthBuffer:!1},l=qx(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=qx(t,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=M1(u)),this._blurMaterial=T1(u,t,i)}return l}_compileMaterial(t){const i=new Ni(new Ka,t);this._renderer.compile(i,Lo)}_sceneToCubeUV(t,i,r,l,u){const m=new Si(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,y=g.toneMapping;g.getClearColor(Xx),g.toneMapping=Ya,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ni(new Vo,new Ug({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,b=R.material;let v=!1;const P=t.background;P?P.isColor&&(b.color.copy(P),t.background=null,v=!0):(b.color.copy(Xx),v=!0);for(let U=0;U<6;U++){const B=U%3;B===0?(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[U],u.y,u.z)):B===1?(m.up.set(0,0,p[U]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[U],u.z)):(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[U]));const k=this._cubeSize;vs(l,B*k,U>2?k:0,k,k),g.setRenderTarget(l),v&&g.render(R,m),g.render(t,m)}g.toneMapping=y,g.autoClear=S,t.background=P}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Es||t.mapping===Ts;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=jx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yx());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=t;const m=this._cubeSize;vs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Lo)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,u=this._pingPongRenderTarget;if(this._ggxMaterial===null){const P=3*Math.max(this._cubeSize,16),U=4*this._cubeSize;this._ggxMaterial=E1(this._lodMax,P,U)}const d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,p=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-_*_),S=.05+p*.95,y=g*S,{_lodMax:A}=this,R=this._sizeLods[r],b=3*R*(r>A-qa?r-A+qa:0),v=4*(this._cubeSize-R);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=A-i,vs(u,b,v,3*R,2*R),l.setRenderTarget(u),l.render(h,Lo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=A-r,vs(t,b,v,3*R,2*R),l.setRenderTarget(t),l.render(h,Lo)}_blur(t,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",u),this._halfBlur(d,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&an("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[l];g.material=p;const S=p.uniforms,y=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Mr-1),R=u/A,b=isFinite(u)?1+Math.floor(_*R):Mr;b>Mr&&ot(`sigmaRadians, ${u}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${Mr}`);const v=[];let P=0;for(let F=0;F<Mr;++F){const ne=F/R,w=Math.exp(-ne*ne/2);v.push(w),F===0?P+=w:F<b&&(P+=2*w)}for(let F=0;F<v.length;F++)v[F]=v[F]/P;S.envMap.value=t.texture,S.samples.value=b,S.weights.value=v,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:U}=this;S.dTheta.value=A,S.mipInt.value=U-r;const B=this._sizeLods[l],k=3*B*(l>U-qa?l-U+qa:0),N=4*(this._cubeSize-B);vs(i,k,N,3*B,2*B),m.setRenderTarget(i),m.render(g,Lo)}}function M1(o){const t=[],i=[],r=[];let l=o;const u=o-qa+1+kx.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>o-qa?m=kx[d-o+qa-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,g=1+p,S=[_,_,g,_,g,g,_,_,g,g,_,g],y=6,A=6,R=3,b=2,v=1,P=new Float32Array(R*A*y),U=new Float32Array(b*A*y),B=new Float32Array(v*A*y);for(let N=0;N<y;N++){const F=N%3*2/3-1,ne=N>2?0:-1,w=[F,ne,0,F+2/3,ne,0,F+2/3,ne+1,0,F,ne,0,F+2/3,ne+1,0,F,ne+1,0];P.set(w,R*A*N),U.set(S,b*A*N);const C=[N,N,N,N,N,N];B.set(C,v*A*N)}const k=new Ka;k.setAttribute("position",new Li(P,R)),k.setAttribute("uv",new Li(U,b)),k.setAttribute("faceIndex",new Li(B,v)),r.push(new Ni(k,null)),l>qa&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function qx(o,t,i){const r=new Za(o,t,i);return r.texture.mapping=Uc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function vs(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function E1(o,t,i){return new Mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:b1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Nc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ua,depthTest:!1,depthWrite:!1})}function T1(o,t,i){const r=new Float32Array(Mr),l=new ce(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ua,depthTest:!1,depthWrite:!1})}function Yx(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ua,depthTest:!1,depthWrite:!1})}function jx(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ua,depthTest:!1,depthWrite:!1})}function Nc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function A1(o){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Od||m===zd,_=m===Es||m===Ts;if(p||_){let g=t.get(h);const S=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new Wx(o)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),g.texture;if(g!==void 0)return g.texture;{const y=h.image;return p&&y&&y.height>0||_&&y&&l(y)?(i===null&&(i=new Wx(o)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,t.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function R1(o){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=o.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Fo("WebGLRenderer: "+r+" extension not supported."),l}}}function C1(o,t,i,r){const l={},u=new WeakMap;function d(g){const S=g.target;S.index!==null&&t.remove(S.index);for(const A in S.attributes)t.remove(S.attributes[A]);S.removeEventListener("dispose",d),delete l[S.id];const y=u.get(S);y&&(t.remove(y),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(g,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const y in S)t.update(S[y],o.ARRAY_BUFFER)}function p(g){const S=[],y=g.index,A=g.attributes.position;let R=0;if(y!==null){const P=y.array;R=y.version;for(let U=0,B=P.length;U<B;U+=3){const k=P[U+0],N=P[U+1],F=P[U+2];S.push(k,N,N,F,F,k)}}else if(A!==void 0){const P=A.array;R=A.version;for(let U=0,B=P.length/3-1;U<B;U+=3){const k=U+0,N=U+1,F=U+2;S.push(k,N,N,F,F,k)}}else return;const b=new(Rg(S)?Ng:Lg)(S,1);b.version=R;const v=u.get(g);v&&t.remove(v),u.set(g,b)}function _(g){const S=u.get(g);if(S){const y=g.index;y!==null&&S.version<y.version&&p(g)}else p(g);return u.get(g)}return{get:h,update:m,getWireframeAttribute:_}}function w1(o,t,i){let r;function l(S){r=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function m(S,y){o.drawElements(r,y,u,S*d),i.update(y,r,1)}function p(S,y,A){A!==0&&(o.drawElementsInstanced(r,y,u,S*d,A),i.update(y,r,A))}function _(S,y,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,S,0,A);let b=0;for(let v=0;v<A;v++)b+=y[v];i.update(b,r,1)}function g(S,y,A,R){if(A===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let v=0;v<S.length;v++)p(S[v]/d,y[v],R[v]);else{b.multiDrawElementsInstancedWEBGL(r,y,0,u,S,0,R,0,A);let v=0;for(let P=0;P<A;P++)v+=y[P]*R[P];i.update(v,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function D1(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:an("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function U1(o,t,i){const r=new WeakMap,l=new rn;function u(d,h,m){const p=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let S=r.get(h);if(S===void 0||S.count!==g){let C=function(){ne.dispose(),r.delete(h),h.removeEventListener("dispose",C)};var y=C;S!==void 0&&S.texture.dispose();const A=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],P=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let B=0;A===!0&&(B=1),R===!0&&(B=2),b===!0&&(B=3);let k=h.attributes.position.count*B,N=1;k>t.maxTextureSize&&(N=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const F=new Float32Array(k*N*4*g),ne=new Cg(F,k,N,g);ne.type=ca,ne.needsUpdate=!0;const w=B*4;for(let V=0;V<g;V++){const ee=v[V],oe=P[V],me=U[V],fe=k*N*4*V;for(let z=0;z<ee.count;z++){const j=z*w;A===!0&&(l.fromBufferAttribute(ee,z),F[fe+j+0]=l.x,F[fe+j+1]=l.y,F[fe+j+2]=l.z,F[fe+j+3]=0),R===!0&&(l.fromBufferAttribute(oe,z),F[fe+j+4]=l.x,F[fe+j+5]=l.y,F[fe+j+6]=l.z,F[fe+j+7]=0),b===!0&&(l.fromBufferAttribute(me,z),F[fe+j+8]=l.x,F[fe+j+9]=l.y,F[fe+j+10]=l.z,F[fe+j+11]=me.itemSize===4?l.w:1)}}S={count:g,texture:ne,size:new Ut(k,N)},r.set(h,S),h.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let A=0;for(let b=0;b<p.length;b++)A+=p[b];const R=h.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function L1(o,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,_=m.geometry,g=t.get(m,_);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return g}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const Vg=new On,Zx=new Fg(1,1),kg=new Cg,Xg=new rb,Wg=new Pg,Kx=[],Qx=[],Jx=new Float32Array(16),$x=new Float32Array(9),eg=new Float32Array(4);function Us(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=Kx[l];if(u===void 0&&(u=new Float32Array(l),Kx[l]=u),t!==0){r.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(u,h)}return u}function xn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function gn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Oc(o,t){let i=Qx[t];i===void 0&&(i=new Int32Array(t),Qx[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function N1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function O1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;o.uniform2fv(this.addr,t),gn(i,t)}}function z1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(xn(i,t))return;o.uniform3fv(this.addr,t),gn(i,t)}}function P1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;o.uniform4fv(this.addr,t),gn(i,t)}}function B1(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(xn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),gn(i,t)}else{if(xn(i,r))return;eg.set(r),o.uniformMatrix2fv(this.addr,!1,eg),gn(i,r)}}function F1(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(xn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),gn(i,t)}else{if(xn(i,r))return;$x.set(r),o.uniformMatrix3fv(this.addr,!1,$x),gn(i,r)}}function I1(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(xn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),gn(i,t)}else{if(xn(i,r))return;Jx.set(r),o.uniformMatrix4fv(this.addr,!1,Jx),gn(i,r)}}function H1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function G1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;o.uniform2iv(this.addr,t),gn(i,t)}}function V1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;o.uniform3iv(this.addr,t),gn(i,t)}}function k1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;o.uniform4iv(this.addr,t),gn(i,t)}}function X1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function W1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;o.uniform2uiv(this.addr,t),gn(i,t)}}function q1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;o.uniform3uiv(this.addr,t),gn(i,t)}}function Y1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;o.uniform4uiv(this.addr,t),gn(i,t)}}function j1(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Zx.compareFunction=Ag,u=Zx):u=Vg,i.setTexture2D(t||u,l)}function Z1(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Xg,l)}function K1(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Wg,l)}function Q1(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||kg,l)}function J1(o){switch(o){case 5126:return N1;case 35664:return O1;case 35665:return z1;case 35666:return P1;case 35674:return B1;case 35675:return F1;case 35676:return I1;case 5124:case 35670:return H1;case 35667:case 35671:return G1;case 35668:case 35672:return V1;case 35669:case 35673:return k1;case 5125:return X1;case 36294:return W1;case 36295:return q1;case 36296:return Y1;case 35678:case 36198:case 36298:case 36306:case 35682:return j1;case 35679:case 36299:case 36307:return Z1;case 35680:case 36300:case 36308:case 36293:return K1;case 36289:case 36303:case 36311:case 36292:return Q1}}function $1(o,t){o.uniform1fv(this.addr,t)}function e3(o,t){const i=Us(t,this.size,2);o.uniform2fv(this.addr,i)}function t3(o,t){const i=Us(t,this.size,3);o.uniform3fv(this.addr,i)}function n3(o,t){const i=Us(t,this.size,4);o.uniform4fv(this.addr,i)}function i3(o,t){const i=Us(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function a3(o,t){const i=Us(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function r3(o,t){const i=Us(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function s3(o,t){o.uniform1iv(this.addr,t)}function o3(o,t){o.uniform2iv(this.addr,t)}function l3(o,t){o.uniform3iv(this.addr,t)}function c3(o,t){o.uniform4iv(this.addr,t)}function u3(o,t){o.uniform1uiv(this.addr,t)}function f3(o,t){o.uniform2uiv(this.addr,t)}function d3(o,t){o.uniform3uiv(this.addr,t)}function h3(o,t){o.uniform4uiv(this.addr,t)}function p3(o,t,i){const r=this.cache,l=t.length,u=Oc(i,l);xn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||Vg,u[d])}function m3(o,t,i){const r=this.cache,l=t.length,u=Oc(i,l);xn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||Xg,u[d])}function x3(o,t,i){const r=this.cache,l=t.length,u=Oc(i,l);xn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||Wg,u[d])}function g3(o,t,i){const r=this.cache,l=t.length,u=Oc(i,l);xn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||kg,u[d])}function _3(o){switch(o){case 5126:return $1;case 35664:return e3;case 35665:return t3;case 35666:return n3;case 35674:return i3;case 35675:return a3;case 35676:return r3;case 5124:case 35670:return s3;case 35667:case 35671:return o3;case 35668:case 35672:return l3;case 35669:case 35673:return c3;case 5125:return u3;case 36294:return f3;case 36295:return d3;case 36296:return h3;case 35678:case 36198:case 36298:case 36306:case 35682:return p3;case 35679:case 36299:case 36307:return m3;case 35680:case 36300:case 36308:case 36293:return x3;case 36289:case 36303:case 36311:case 36292:return g3}}class v3{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=J1(i.type)}}class S3{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=_3(i.type)}}class b3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],r)}}}const Md=/(\w+)(\])?(\[|\.)?/g;function tg(o,t){o.seq.push(t),o.map[t.id]=t}function y3(o,t,i){const r=o.name,l=r.length;for(Md.lastIndex=0;;){const u=Md.exec(r),d=Md.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){tg(i,p===void 0?new v3(h,o,t):new S3(h,o,t));break}else{let g=i.map[h];g===void 0&&(g=new b3(h),tg(i,g)),i=g}}}class Ac{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),d=t.getUniformLocation(i,u.name);y3(u,d,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function ng(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const M3=37297;let E3=0;function T3(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const ig=new ft;function A3(o){Dt._getMatrix(ig,Dt.workingColorSpace,o);const t=`mat3( ${ig.elements.map(i=>i.toFixed(4))} )`;switch(Dt.getTransfer(o)){case Cc:return[t,"LinearTransferOETF"];case Gt:return[t,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function ag(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+T3(o.getShaderSource(t),h)}else return u}function R3(o,t){const i=A3(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function C3(o,t){let i;switch(t){case LS:i="Linear";break;case NS:i="Reinhard";break;case OS:i="Cineon";break;case zS:i="ACESFilmic";break;case BS:i="AgX";break;case FS:i="Neutral";break;case PS:i="Custom";break;default:ot("WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Sc=new ce;function w3(){Dt.getLuminanceCoefficients(Sc);const o=Sc.x.toFixed(4),t=Sc.y.toFixed(4),i=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D3(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function U3(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function L3(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function No(o){return o!==""}function rg(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sg(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const N3=/^[ \t]*#include +<([\w\d./]+)>/gm;function hh(o){return o.replace(N3,z3)}const O3=new Map;function z3(o,t){let i=pt[t];if(i===void 0){const r=O3.get(t);if(r!==void 0)i=pt[r],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return hh(i)}const P3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function og(o){return o.replace(P3,B3)}function B3(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function lg(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function F3(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===xg?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===fS?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===sa&&(t="SHADOWMAP_TYPE_VSM"),t}function I3(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Es:case Ts:t="ENVMAP_TYPE_CUBE";break;case Uc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function H3(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ts:t="ENVMAP_MODE_REFRACTION";break}return t}function G3(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case gg:t="ENVMAP_BLENDING_MULTIPLY";break;case DS:t="ENVMAP_BLENDING_MIX";break;case US:t="ENVMAP_BLENDING_ADD";break}return t}function V3(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function k3(o,t,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=F3(i),p=I3(i),_=H3(i),g=G3(i),S=V3(i),y=D3(i),A=U3(u),R=l.createProgram();let b,v,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(No).join(`
`),b.length>0&&(b+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(No).join(`
`),v.length>0&&(v+=`
`)):(b=[lg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),v=[lg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ya?"#define TONE_MAPPING":"",i.toneMapping!==Ya?pt.tonemapping_pars_fragment:"",i.toneMapping!==Ya?C3("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,R3("linearToOutputTexel",i.outputColorSpace),w3(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(No).join(`
`)),d=hh(d),d=rg(d,i),d=sg(d,i),h=hh(h),h=rg(h,i),h=sg(h,i),d=og(d),h=og(h),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,b=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,v=["#define varying in",i.glslVersion===yx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===yx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=P+b+d,B=P+v+h,k=ng(l,l.VERTEX_SHADER,U),N=ng(l,l.FRAGMENT_SHADER,B);l.attachShader(R,k),l.attachShader(R,N),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function F(V){if(o.debug.checkShaderErrors){const ee=l.getProgramInfoLog(R)||"",oe=l.getShaderInfoLog(k)||"",me=l.getShaderInfoLog(N)||"",fe=ee.trim(),z=oe.trim(),j=me.trim();let Y=!0,ge=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(Y=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,k,N);else{const ve=ag(l,k,"vertex"),L=ag(l,N,"fragment");an("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+fe+`
`+ve+`
`+L)}else fe!==""?ot("WebGLProgram: Program Info Log:",fe):(z===""||j==="")&&(ge=!1);ge&&(V.diagnostics={runnable:Y,programLog:fe,vertexShader:{log:z,prefix:b},fragmentShader:{log:j,prefix:v}})}l.deleteShader(k),l.deleteShader(N),ne=new Ac(l,R),w=L3(l,R)}let ne;this.getUniforms=function(){return ne===void 0&&F(this),ne};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,M3)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=E3++,this.cacheKey=t,this.usedTimes=1,this.program=R,this.vertexShader=k,this.fragmentShader=N,this}let X3=0;class W3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new q3(t),i.set(t,r)),r}}class q3{constructor(t){this.id=X3++,this.code=t,this.usedTimes=0}}function Y3(o,t,i,r,l,u,d){const h=new wg,m=new W3,p=new Set,_=[],g=l.logarithmicDepthBuffer,S=l.vertexTextures;let y=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(w){return p.add(w),w===0?"uv":`uv${w}`}function b(w,C,V,ee,oe){const me=ee.fog,fe=oe.geometry,z=w.isMeshStandardMaterial?ee.environment:null,j=(w.isMeshStandardMaterial?i:t).get(w.envMap||z),Y=j&&j.mapping===Uc?j.image.height:null,ge=A[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&ot("WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const ve=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,L=ve!==void 0?ve.length:0;let ae=0;fe.morphAttributes.position!==void 0&&(ae=1),fe.morphAttributes.normal!==void 0&&(ae=2),fe.morphAttributes.color!==void 0&&(ae=3);let ye,Te,ze,te;if(ge){const At=wi[ge];ye=At.vertexShader,Te=At.fragmentShader}else ye=w.vertexShader,Te=w.fragmentShader,m.update(w),ze=m.getVertexShaderID(w),te=m.getFragmentShaderID(w);const le=o.getRenderTarget(),we=o.state.buffers.depth.getReversed(),He=oe.isInstancedMesh===!0,Xe=oe.isBatchedMesh===!0,lt=!!w.map,en=!!w.matcap,dt=!!j,Tt=!!w.aoMap,I=!!w.lightMap,ht=!!w.bumpMap,mt=!!w.normalMap,Ot=!!w.displacementMap,Ge=!!w.emissiveMap,kt=!!w.metalnessMap,je=!!w.roughnessMap,at=w.anisotropy>0,D=w.clearcoat>0,M=w.dispersion>0,K=w.iridescence>0,he=w.sheen>0,Se=w.transmission>0,se=at&&!!w.anisotropyMap,qe=D&&!!w.clearcoatMap,Le=D&&!!w.clearcoatNormalMap,Qe=D&&!!w.clearcoatRoughnessMap,We=K&&!!w.iridescenceMap,be=K&&!!w.iridescenceThicknessMap,Ee=he&&!!w.sheenColorMap,Ye=he&&!!w.sheenRoughnessMap,Ve=!!w.specularMap,Oe=!!w.specularColorMap,nt=!!w.specularIntensityMap,H=Se&&!!w.transmissionMap,De=Se&&!!w.thicknessMap,Re=!!w.gradientMap,Ce=!!w.alphaMap,Me=w.alphaTest>0,xe=!!w.alphaHash,Be=!!w.extensions;let it=Ya;w.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(it=o.toneMapping);const Bt={shaderID:ge,shaderType:w.type,shaderName:w.name,vertexShader:ye,fragmentShader:Te,defines:w.defines,customVertexShaderID:ze,customFragmentShaderID:te,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:Xe,batchingColor:Xe&&oe._colorsTexture!==null,instancing:He,instancingColor:He&&oe.instanceColor!==null,instancingMorph:He&&oe.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:le===null?o.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:As,alphaToCoverage:!!w.alphaToCoverage,map:lt,matcap:en,envMap:dt,envMapMode:dt&&j.mapping,envMapCubeUVHeight:Y,aoMap:Tt,lightMap:I,bumpMap:ht,normalMap:mt,displacementMap:S&&Ot,emissiveMap:Ge,normalMapObjectSpace:mt&&w.normalMapType===kS,normalMapTangentSpace:mt&&w.normalMapType===VS,metalnessMap:kt,roughnessMap:je,anisotropy:at,anisotropyMap:se,clearcoat:D,clearcoatMap:qe,clearcoatNormalMap:Le,clearcoatRoughnessMap:Qe,dispersion:M,iridescence:K,iridescenceMap:We,iridescenceThicknessMap:be,sheen:he,sheenColorMap:Ee,sheenRoughnessMap:Ye,specularMap:Ve,specularColorMap:Oe,specularIntensityMap:nt,transmission:Se,transmissionMap:H,thicknessMap:De,gradientMap:Re,opaque:w.transparent===!1&&w.blending===bs&&w.alphaToCoverage===!1,alphaMap:Ce,alphaTest:Me,alphaHash:xe,combine:w.combine,mapUv:lt&&R(w.map.channel),aoMapUv:Tt&&R(w.aoMap.channel),lightMapUv:I&&R(w.lightMap.channel),bumpMapUv:ht&&R(w.bumpMap.channel),normalMapUv:mt&&R(w.normalMap.channel),displacementMapUv:Ot&&R(w.displacementMap.channel),emissiveMapUv:Ge&&R(w.emissiveMap.channel),metalnessMapUv:kt&&R(w.metalnessMap.channel),roughnessMapUv:je&&R(w.roughnessMap.channel),anisotropyMapUv:se&&R(w.anisotropyMap.channel),clearcoatMapUv:qe&&R(w.clearcoatMap.channel),clearcoatNormalMapUv:Le&&R(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qe&&R(w.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&R(w.iridescenceMap.channel),iridescenceThicknessMapUv:be&&R(w.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&R(w.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&R(w.sheenRoughnessMap.channel),specularMapUv:Ve&&R(w.specularMap.channel),specularColorMapUv:Oe&&R(w.specularColorMap.channel),specularIntensityMapUv:nt&&R(w.specularIntensityMap.channel),transmissionMapUv:H&&R(w.transmissionMap.channel),thicknessMapUv:De&&R(w.thicknessMap.channel),alphaMapUv:Ce&&R(w.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(mt||at),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!fe.attributes.uv&&(lt||Ce),fog:!!me,useFog:w.fog===!0,fogExp2:!!me&&me.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:we,skinning:oe.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:ae,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:it,decodeVideoTexture:lt&&w.map.isVideoTexture===!0&&Dt.getTransfer(w.map.colorSpace)===Gt,decodeVideoTextureEmissive:Ge&&w.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(w.emissiveMap.colorSpace)===Gt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===oa,flipSided:w.side===Vn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Be&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&w.extensions.multiDraw===!0||Xe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Bt.vertexUv1s=p.has(1),Bt.vertexUv2s=p.has(2),Bt.vertexUv3s=p.has(3),p.clear(),Bt}function v(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)C.push(V),C.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(P(C,w),U(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function P(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function U(w,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),w.push(h.mask)}function B(w){const C=A[w.type];let V;if(C){const ee=wi[C];V=vb.clone(ee.uniforms)}else V=w.uniforms;return V}function k(w,C){let V;for(let ee=0,oe=_.length;ee<oe;ee++){const me=_[ee];if(me.cacheKey===C){V=me,++V.usedTimes;break}}return V===void 0&&(V=new k3(o,C,w,u),_.push(V)),V}function N(w){if(--w.usedTimes===0){const C=_.indexOf(w);_[C]=_[_.length-1],_.pop(),w.destroy()}}function F(w){m.remove(w)}function ne(){m.dispose()}return{getParameters:b,getProgramCacheKey:v,getUniforms:B,acquireProgram:k,releaseProgram:N,releaseShaderCache:F,programs:_,dispose:ne}}function j3(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function Z3(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function cg(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function ug(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function d(g,S,y,A,R,b){let v=o[t];return v===void 0?(v={id:g.id,object:g,geometry:S,material:y,groupOrder:A,renderOrder:g.renderOrder,z:R,group:b},o[t]=v):(v.id=g.id,v.object=g,v.geometry=S,v.material=y,v.groupOrder=A,v.renderOrder=g.renderOrder,v.z=R,v.group=b),t++,v}function h(g,S,y,A,R,b){const v=d(g,S,y,A,R,b);y.transmission>0?r.push(v):y.transparent===!0?l.push(v):i.push(v)}function m(g,S,y,A,R,b){const v=d(g,S,y,A,R,b);y.transmission>0?r.unshift(v):y.transparent===!0?l.unshift(v):i.unshift(v)}function p(g,S){i.length>1&&i.sort(g||Z3),r.length>1&&r.sort(S||cg),l.length>1&&l.sort(S||cg)}function _(){for(let g=t,S=o.length;g<S;g++){const y=o[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:_,sort:p}}function K3(){let o=new WeakMap;function t(r,l){const u=o.get(r);let d;return u===void 0?(d=new ug,o.set(r,[d])):l>=u.length?(d=new ug,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function Q3(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new ce,color:new Vt};break;case"SpotLight":i={position:new ce,direction:new ce,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ce,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ce,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":i={color:new Vt,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return o[t.id]=i,i}}}function J3(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let $3=0;function eE(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function tE(o){const t=new Q3,i=J3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ce);const l=new ce,u=new mn,d=new mn;function h(p){let _=0,g=0,S=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let y=0,A=0,R=0,b=0,v=0,P=0,U=0,B=0,k=0,N=0,F=0;p.sort(eE);for(let w=0,C=p.length;w<C;w++){const V=p[w],ee=V.color,oe=V.intensity,me=V.distance,fe=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)_+=ee.r*oe,g+=ee.g*oe,S+=ee.b*oe;else if(V.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(V.sh.coefficients[z],oe);F++}else if(V.isDirectionalLight){const z=t.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const j=V.shadow,Y=i.get(V);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,r.directionalShadow[y]=Y,r.directionalShadowMap[y]=fe,r.directionalShadowMatrix[y]=V.shadow.matrix,P++}r.directional[y]=z,y++}else if(V.isSpotLight){const z=t.get(V);z.position.setFromMatrixPosition(V.matrixWorld),z.color.copy(ee).multiplyScalar(oe),z.distance=me,z.coneCos=Math.cos(V.angle),z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),z.decay=V.decay,r.spot[R]=z;const j=V.shadow;if(V.map&&(r.spotLightMap[k]=V.map,k++,j.updateMatrices(V),V.castShadow&&N++),r.spotLightMatrix[R]=j.matrix,V.castShadow){const Y=i.get(V);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,r.spotShadow[R]=Y,r.spotShadowMap[R]=fe,B++}R++}else if(V.isRectAreaLight){const z=t.get(V);z.color.copy(ee).multiplyScalar(oe),z.halfWidth.set(V.width*.5,0,0),z.halfHeight.set(0,V.height*.5,0),r.rectArea[b]=z,b++}else if(V.isPointLight){const z=t.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),z.distance=V.distance,z.decay=V.decay,V.castShadow){const j=V.shadow,Y=i.get(V);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,Y.shadowCameraNear=j.camera.near,Y.shadowCameraFar=j.camera.far,r.pointShadow[A]=Y,r.pointShadowMap[A]=fe,r.pointShadowMatrix[A]=V.shadow.matrix,U++}r.point[A]=z,A++}else if(V.isHemisphereLight){const z=t.get(V);z.skyColor.copy(V.color).multiplyScalar(oe),z.groundColor.copy(V.groundColor).multiplyScalar(oe),r.hemi[v]=z,v++}}b>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ne.LTC_FLOAT_1,r.rectAreaLTC2=Ne.LTC_FLOAT_2):(r.rectAreaLTC1=Ne.LTC_HALF_1,r.rectAreaLTC2=Ne.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=S;const ne=r.hash;(ne.directionalLength!==y||ne.pointLength!==A||ne.spotLength!==R||ne.rectAreaLength!==b||ne.hemiLength!==v||ne.numDirectionalShadows!==P||ne.numPointShadows!==U||ne.numSpotShadows!==B||ne.numSpotMaps!==k||ne.numLightProbes!==F)&&(r.directional.length=y,r.spot.length=R,r.rectArea.length=b,r.point.length=A,r.hemi.length=v,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=B,r.spotShadowMap.length=B,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=B+k-N,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=F,ne.directionalLength=y,ne.pointLength=A,ne.spotLength=R,ne.rectAreaLength=b,ne.hemiLength=v,ne.numDirectionalShadows=P,ne.numPointShadows=U,ne.numSpotShadows=B,ne.numSpotMaps=k,ne.numLightProbes=F,r.version=$3++)}function m(p,_){let g=0,S=0,y=0,A=0,R=0;const b=_.matrixWorldInverse;for(let v=0,P=p.length;v<P;v++){const U=p[v];if(U.isDirectionalLight){const B=r.directional[g];B.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),B.direction.sub(l),B.direction.transformDirection(b),g++}else if(U.isSpotLight){const B=r.spot[y];B.position.setFromMatrixPosition(U.matrixWorld),B.position.applyMatrix4(b),B.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),B.direction.sub(l),B.direction.transformDirection(b),y++}else if(U.isRectAreaLight){const B=r.rectArea[A];B.position.setFromMatrixPosition(U.matrixWorld),B.position.applyMatrix4(b),d.identity(),u.copy(U.matrixWorld),u.premultiply(b),d.extractRotation(u),B.halfWidth.set(U.width*.5,0,0),B.halfHeight.set(0,U.height*.5,0),B.halfWidth.applyMatrix4(d),B.halfHeight.applyMatrix4(d),A++}else if(U.isPointLight){const B=r.point[S];B.position.setFromMatrixPosition(U.matrixWorld),B.position.applyMatrix4(b),S++}else if(U.isHemisphereLight){const B=r.hemi[R];B.direction.setFromMatrixPosition(U.matrixWorld),B.direction.transformDirection(b),R++}}}return{setup:h,setupView:m,state:r}}function fg(o){const t=new tE(o),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function u(_){i.push(_)}function d(_){r.push(_)}function h(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function nE(o){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new fg(o),t.set(l,[h])):u>=d.length?(h=new fg(o),d.push(h)):h=d[u],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const iE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function rE(o,t,i){let r=new Bg;const l=new Ut,u=new Ut,d=new rn,h=new wb({depthPacking:GS}),m=new Db,p={},_=i.maxTextureSize,g={[ja]:Vn,[Vn]:ja,[oa]:oa},S=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:iE,fragmentShader:aE}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const A=new Ka;A.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Ni(A,S),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xg;let v=this.type;this.render=function(N,F,ne){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||N.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),ee=o.state;ee.setBlending(ua),ee.buffers.depth.getReversed()===!0?ee.buffers.color.setClear(0,0,0,0):ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const oe=v!==sa&&this.type===sa,me=v===sa&&this.type!==sa;for(let fe=0,z=N.length;fe<z;fe++){const j=N[fe],Y=j.shadow;if(Y===void 0){ot("WebGLShadowMap:",j,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const ge=Y.getFrameExtents();if(l.multiply(ge),u.copy(Y.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/ge.x),l.x=u.x*ge.x,Y.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/ge.y),l.y=u.y*ge.y,Y.mapSize.y=u.y)),Y.map===null||oe===!0||me===!0){const L=this.type!==sa?{minFilter:ei,magFilter:ei}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Za(l.x,l.y,L),Y.map.texture.name=j.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const ve=Y.getViewportCount();for(let L=0;L<ve;L++){const ae=Y.getViewport(L);d.set(u.x*ae.x,u.y*ae.y,u.x*ae.z,u.y*ae.w),ee.viewport(d),Y.updateMatrices(j,L),r=Y.getFrustum(),B(F,ne,Y.camera,j,this.type)}Y.isPointLightShadow!==!0&&this.type===sa&&P(Y,ne),Y.needsUpdate=!1}v=this.type,b.needsUpdate=!1,o.setRenderTarget(w,C,V)};function P(N,F){const ne=t.update(R);S.defines.VSM_SAMPLES!==N.blurSamples&&(S.defines.VSM_SAMPLES=N.blurSamples,y.defines.VSM_SAMPLES=N.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Za(l.x,l.y)),S.uniforms.shadow_pass.value=N.map.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(F,null,ne,S,R,null),y.uniforms.shadow_pass.value=N.mapPass.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(F,null,ne,y,R,null)}function U(N,F,ne,w){let C=null;const V=ne.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(V!==void 0)C=V;else if(C=ne.isPointLight===!0?m:h,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const ee=C.uuid,oe=F.uuid;let me=p[ee];me===void 0&&(me={},p[ee]=me);let fe=me[oe];fe===void 0&&(fe=C.clone(),me[oe]=fe,F.addEventListener("dispose",k)),C=fe}if(C.visible=F.visible,C.wireframe=F.wireframe,w===sa?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:g[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,ne.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ee=o.properties.get(C);ee.light=ne}return C}function B(N,F,ne,w,C){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&C===sa)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,N.matrixWorld);const oe=t.update(N),me=N.material;if(Array.isArray(me)){const fe=oe.groups;for(let z=0,j=fe.length;z<j;z++){const Y=fe[z],ge=me[Y.materialIndex];if(ge&&ge.visible){const ve=U(N,ge,w,C);N.onBeforeShadow(o,N,F,ne,oe,ve,Y),o.renderBufferDirect(ne,null,oe,ve,N,Y),N.onAfterShadow(o,N,F,ne,oe,ve,Y)}}}else if(me.visible){const fe=U(N,me,w,C);N.onBeforeShadow(o,N,F,ne,oe,fe,null),o.renderBufferDirect(ne,null,oe,fe,N,null),N.onAfterShadow(o,N,F,ne,oe,fe,null)}}const ee=N.children;for(let oe=0,me=ee.length;oe<me;oe++)B(ee[oe],F,ne,w,C)}function k(N){N.target.removeEventListener("dispose",k);for(const ne in p){const w=p[ne],C=N.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const sE={[Rd]:Cd,[wd]:Ld,[Dd]:Nd,[Ms]:Ud,[Cd]:Rd,[Ld]:wd,[Nd]:Dd,[Ud]:Ms};function oE(o,t){function i(){let H=!1;const De=new rn;let Re=null;const Ce=new rn(0,0,0,0);return{setMask:function(Me){Re!==Me&&!H&&(o.colorMask(Me,Me,Me,Me),Re=Me)},setLocked:function(Me){H=Me},setClear:function(Me,xe,Be,it,Bt){Bt===!0&&(Me*=it,xe*=it,Be*=it),De.set(Me,xe,Be,it),Ce.equals(De)===!1&&(o.clearColor(Me,xe,Be,it),Ce.copy(De))},reset:function(){H=!1,Re=null,Ce.set(-1,0,0,0)}}}function r(){let H=!1,De=!1,Re=null,Ce=null,Me=null;return{setReversed:function(xe){if(De!==xe){const Be=t.get("EXT_clip_control");xe?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),De=xe;const it=Me;Me=null,this.setClear(it)}},getReversed:function(){return De},setTest:function(xe){xe?le(o.DEPTH_TEST):we(o.DEPTH_TEST)},setMask:function(xe){Re!==xe&&!H&&(o.depthMask(xe),Re=xe)},setFunc:function(xe){if(De&&(xe=sE[xe]),Ce!==xe){switch(xe){case Rd:o.depthFunc(o.NEVER);break;case Cd:o.depthFunc(o.ALWAYS);break;case wd:o.depthFunc(o.LESS);break;case Ms:o.depthFunc(o.LEQUAL);break;case Dd:o.depthFunc(o.EQUAL);break;case Ud:o.depthFunc(o.GEQUAL);break;case Ld:o.depthFunc(o.GREATER);break;case Nd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ce=xe}},setLocked:function(xe){H=xe},setClear:function(xe){Me!==xe&&(De&&(xe=1-xe),o.clearDepth(xe),Me=xe)},reset:function(){H=!1,Re=null,Ce=null,Me=null,De=!1}}}function l(){let H=!1,De=null,Re=null,Ce=null,Me=null,xe=null,Be=null,it=null,Bt=null;return{setTest:function(At){H||(At?le(o.STENCIL_TEST):we(o.STENCIL_TEST))},setMask:function(At){De!==At&&!H&&(o.stencilMask(At),De=At)},setFunc:function(At,Cn,kn){(Re!==At||Ce!==Cn||Me!==kn)&&(o.stencilFunc(At,Cn,kn),Re=At,Ce=Cn,Me=kn)},setOp:function(At,Cn,kn){(xe!==At||Be!==Cn||it!==kn)&&(o.stencilOp(At,Cn,kn),xe=At,Be=Cn,it=kn)},setLocked:function(At){H=At},setClear:function(At){Bt!==At&&(o.clearStencil(At),Bt=At)},reset:function(){H=!1,De=null,Re=null,Ce=null,Me=null,xe=null,Be=null,it=null,Bt=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let _={},g={},S=new WeakMap,y=[],A=null,R=!1,b=null,v=null,P=null,U=null,B=null,k=null,N=null,F=new Vt(0,0,0),ne=0,w=!1,C=null,V=null,ee=null,oe=null,me=null;const fe=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,j=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=j>=2);let ge=null,ve={};const L=o.getParameter(o.SCISSOR_BOX),ae=o.getParameter(o.VIEWPORT),ye=new rn().fromArray(L),Te=new rn().fromArray(ae);function ze(H,De,Re,Ce){const Me=new Uint8Array(4),xe=o.createTexture();o.bindTexture(H,xe),o.texParameteri(H,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(H,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Be=0;Be<Re;Be++)H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY?o.texImage3D(De,0,o.RGBA,1,1,Ce,0,o.RGBA,o.UNSIGNED_BYTE,Me):o.texImage2D(De+Be,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Me);return xe}const te={};te[o.TEXTURE_2D]=ze(o.TEXTURE_2D,o.TEXTURE_2D,1),te[o.TEXTURE_CUBE_MAP]=ze(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[o.TEXTURE_2D_ARRAY]=ze(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),te[o.TEXTURE_3D]=ze(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),le(o.DEPTH_TEST),d.setFunc(Ms),ht(!1),mt(xx),le(o.CULL_FACE),Tt(ua);function le(H){_[H]!==!0&&(o.enable(H),_[H]=!0)}function we(H){_[H]!==!1&&(o.disable(H),_[H]=!1)}function He(H,De){return g[H]!==De?(o.bindFramebuffer(H,De),g[H]=De,H===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=De),H===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=De),!0):!1}function Xe(H,De){let Re=y,Ce=!1;if(H){Re=S.get(De),Re===void 0&&(Re=[],S.set(De,Re));const Me=H.textures;if(Re.length!==Me.length||Re[0]!==o.COLOR_ATTACHMENT0){for(let xe=0,Be=Me.length;xe<Be;xe++)Re[xe]=o.COLOR_ATTACHMENT0+xe;Re.length=Me.length,Ce=!0}}else Re[0]!==o.BACK&&(Re[0]=o.BACK,Ce=!0);Ce&&o.drawBuffers(Re)}function lt(H){return A!==H?(o.useProgram(H),A=H,!0):!1}const en={[yr]:o.FUNC_ADD,[hS]:o.FUNC_SUBTRACT,[pS]:o.FUNC_REVERSE_SUBTRACT};en[mS]=o.MIN,en[xS]=o.MAX;const dt={[gS]:o.ZERO,[_S]:o.ONE,[vS]:o.SRC_COLOR,[Td]:o.SRC_ALPHA,[TS]:o.SRC_ALPHA_SATURATE,[MS]:o.DST_COLOR,[bS]:o.DST_ALPHA,[SS]:o.ONE_MINUS_SRC_COLOR,[Ad]:o.ONE_MINUS_SRC_ALPHA,[ES]:o.ONE_MINUS_DST_COLOR,[yS]:o.ONE_MINUS_DST_ALPHA,[AS]:o.CONSTANT_COLOR,[RS]:o.ONE_MINUS_CONSTANT_COLOR,[CS]:o.CONSTANT_ALPHA,[wS]:o.ONE_MINUS_CONSTANT_ALPHA};function Tt(H,De,Re,Ce,Me,xe,Be,it,Bt,At){if(H===ua){R===!0&&(we(o.BLEND),R=!1);return}if(R===!1&&(le(o.BLEND),R=!0),H!==dS){if(H!==b||At!==w){if((v!==yr||B!==yr)&&(o.blendEquation(o.FUNC_ADD),v=yr,B=yr),At)switch(H){case bs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case gx:o.blendFunc(o.ONE,o.ONE);break;case _x:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case vx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:an("WebGLState: Invalid blending: ",H);break}else switch(H){case bs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case gx:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case _x:an("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case vx:an("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:an("WebGLState: Invalid blending: ",H);break}P=null,U=null,k=null,N=null,F.set(0,0,0),ne=0,b=H,w=At}return}Me=Me||De,xe=xe||Re,Be=Be||Ce,(De!==v||Me!==B)&&(o.blendEquationSeparate(en[De],en[Me]),v=De,B=Me),(Re!==P||Ce!==U||xe!==k||Be!==N)&&(o.blendFuncSeparate(dt[Re],dt[Ce],dt[xe],dt[Be]),P=Re,U=Ce,k=xe,N=Be),(it.equals(F)===!1||Bt!==ne)&&(o.blendColor(it.r,it.g,it.b,Bt),F.copy(it),ne=Bt),b=H,w=!1}function I(H,De){H.side===oa?we(o.CULL_FACE):le(o.CULL_FACE);let Re=H.side===Vn;De&&(Re=!Re),ht(Re),H.blending===bs&&H.transparent===!1?Tt(ua):Tt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),d.setFunc(H.depthFunc),d.setTest(H.depthTest),d.setMask(H.depthWrite),u.setMask(H.colorWrite);const Ce=H.stencilWrite;h.setTest(Ce),Ce&&(h.setMask(H.stencilWriteMask),h.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),h.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ge(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?le(o.SAMPLE_ALPHA_TO_COVERAGE):we(o.SAMPLE_ALPHA_TO_COVERAGE)}function ht(H){C!==H&&(H?o.frontFace(o.CW):o.frontFace(o.CCW),C=H)}function mt(H){H!==cS?(le(o.CULL_FACE),H!==V&&(H===xx?o.cullFace(o.BACK):H===uS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):we(o.CULL_FACE),V=H}function Ot(H){H!==ee&&(z&&o.lineWidth(H),ee=H)}function Ge(H,De,Re){H?(le(o.POLYGON_OFFSET_FILL),(oe!==De||me!==Re)&&(o.polygonOffset(De,Re),oe=De,me=Re)):we(o.POLYGON_OFFSET_FILL)}function kt(H){H?le(o.SCISSOR_TEST):we(o.SCISSOR_TEST)}function je(H){H===void 0&&(H=o.TEXTURE0+fe-1),ge!==H&&(o.activeTexture(H),ge=H)}function at(H,De,Re){Re===void 0&&(ge===null?Re=o.TEXTURE0+fe-1:Re=ge);let Ce=ve[Re];Ce===void 0&&(Ce={type:void 0,texture:void 0},ve[Re]=Ce),(Ce.type!==H||Ce.texture!==De)&&(ge!==Re&&(o.activeTexture(Re),ge=Re),o.bindTexture(H,De||te[H]),Ce.type=H,Ce.texture=De)}function D(){const H=ve[ge];H!==void 0&&H.type!==void 0&&(o.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function M(){try{o.compressedTexImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function K(){try{o.compressedTexImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function he(){try{o.texSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Se(){try{o.texSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function se(){try{o.compressedTexSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function qe(){try{o.compressedTexSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Le(){try{o.texStorage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Qe(){try{o.texStorage3D(...arguments)}catch(H){H("WebGLState:",H)}}function We(){try{o.texImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function be(){try{o.texImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Ee(H){ye.equals(H)===!1&&(o.scissor(H.x,H.y,H.z,H.w),ye.copy(H))}function Ye(H){Te.equals(H)===!1&&(o.viewport(H.x,H.y,H.z,H.w),Te.copy(H))}function Ve(H,De){let Re=p.get(De);Re===void 0&&(Re=new WeakMap,p.set(De,Re));let Ce=Re.get(H);Ce===void 0&&(Ce=o.getUniformBlockIndex(De,H.name),Re.set(H,Ce))}function Oe(H,De){const Ce=p.get(De).get(H);m.get(De)!==Ce&&(o.uniformBlockBinding(De,Ce,H.__bindingPointIndex),m.set(De,Ce))}function nt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},ge=null,ve={},g={},S=new WeakMap,y=[],A=null,R=!1,b=null,v=null,P=null,U=null,B=null,k=null,N=null,F=new Vt(0,0,0),ne=0,w=!1,C=null,V=null,ee=null,oe=null,me=null,ye.set(0,0,o.canvas.width,o.canvas.height),Te.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:le,disable:we,bindFramebuffer:He,drawBuffers:Xe,useProgram:lt,setBlending:Tt,setMaterial:I,setFlipSided:ht,setCullFace:mt,setLineWidth:Ot,setPolygonOffset:Ge,setScissorTest:kt,activeTexture:je,bindTexture:at,unbindTexture:D,compressedTexImage2D:M,compressedTexImage3D:K,texImage2D:We,texImage3D:be,updateUBOMapping:Ve,uniformBlockBinding:Oe,texStorage2D:Le,texStorage3D:Qe,texSubImage2D:he,texSubImage3D:Se,compressedTexSubImage2D:se,compressedTexSubImage3D:qe,scissor:Ee,viewport:Ye,reset:nt}}function lE(o,t,i,r,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ut,_=new WeakMap;let g;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(D,M){return y?new OffscreenCanvas(D,M):Dc("canvas")}function R(D,M,K){let he=1;const Se=at(D);if((Se.width>K||Se.height>K)&&(he=K/Math.max(Se.width,Se.height)),he<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const se=Math.floor(he*Se.width),qe=Math.floor(he*Se.height);g===void 0&&(g=A(se,qe));const Le=M?A(se,qe):g;return Le.width=se,Le.height=qe,Le.getContext("2d").drawImage(D,0,0,se,qe),ot("WebGLRenderer: Texture has been resized from ("+Se.width+"x"+Se.height+") to ("+se+"x"+qe+")."),Le}else return"data"in D&&ot("WebGLRenderer: Image in DataTexture is too big ("+Se.width+"x"+Se.height+")."),D;return D}function b(D){return D.generateMipmaps}function v(D){o.generateMipmap(D)}function P(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(D,M,K,he,Se=!1){if(D!==null){if(o[D]!==void 0)return o[D];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let se=M;if(M===o.RED&&(K===o.FLOAT&&(se=o.R32F),K===o.HALF_FLOAT&&(se=o.R16F),K===o.UNSIGNED_BYTE&&(se=o.R8)),M===o.RED_INTEGER&&(K===o.UNSIGNED_BYTE&&(se=o.R8UI),K===o.UNSIGNED_SHORT&&(se=o.R16UI),K===o.UNSIGNED_INT&&(se=o.R32UI),K===o.BYTE&&(se=o.R8I),K===o.SHORT&&(se=o.R16I),K===o.INT&&(se=o.R32I)),M===o.RG&&(K===o.FLOAT&&(se=o.RG32F),K===o.HALF_FLOAT&&(se=o.RG16F),K===o.UNSIGNED_BYTE&&(se=o.RG8)),M===o.RG_INTEGER&&(K===o.UNSIGNED_BYTE&&(se=o.RG8UI),K===o.UNSIGNED_SHORT&&(se=o.RG16UI),K===o.UNSIGNED_INT&&(se=o.RG32UI),K===o.BYTE&&(se=o.RG8I),K===o.SHORT&&(se=o.RG16I),K===o.INT&&(se=o.RG32I)),M===o.RGB_INTEGER&&(K===o.UNSIGNED_BYTE&&(se=o.RGB8UI),K===o.UNSIGNED_SHORT&&(se=o.RGB16UI),K===o.UNSIGNED_INT&&(se=o.RGB32UI),K===o.BYTE&&(se=o.RGB8I),K===o.SHORT&&(se=o.RGB16I),K===o.INT&&(se=o.RGB32I)),M===o.RGBA_INTEGER&&(K===o.UNSIGNED_BYTE&&(se=o.RGBA8UI),K===o.UNSIGNED_SHORT&&(se=o.RGBA16UI),K===o.UNSIGNED_INT&&(se=o.RGBA32UI),K===o.BYTE&&(se=o.RGBA8I),K===o.SHORT&&(se=o.RGBA16I),K===o.INT&&(se=o.RGBA32I)),M===o.RGB&&(K===o.UNSIGNED_INT_5_9_9_9_REV&&(se=o.RGB9_E5),K===o.UNSIGNED_INT_10F_11F_11F_REV&&(se=o.R11F_G11F_B10F)),M===o.RGBA){const qe=Se?Cc:Dt.getTransfer(he);K===o.FLOAT&&(se=o.RGBA32F),K===o.HALF_FLOAT&&(se=o.RGBA16F),K===o.UNSIGNED_BYTE&&(se=qe===Gt?o.SRGB8_ALPHA8:o.RGBA8),K===o.UNSIGNED_SHORT_4_4_4_4&&(se=o.RGBA4),K===o.UNSIGNED_SHORT_5_5_5_1&&(se=o.RGB5_A1)}return(se===o.R16F||se===o.R32F||se===o.RG16F||se===o.RG32F||se===o.RGBA16F||se===o.RGBA32F)&&t.get("EXT_color_buffer_float"),se}function B(D,M){let K;return D?M===null||M===Rr||M===zo?K=o.DEPTH24_STENCIL8:M===ca?K=o.DEPTH32F_STENCIL8:M===Oo&&(K=o.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Rr||M===zo?K=o.DEPTH_COMPONENT24:M===ca?K=o.DEPTH_COMPONENT32F:M===Oo&&(K=o.DEPTH_COMPONENT16),K}function k(D,M){return b(D)===!0||D.isFramebufferTexture&&D.minFilter!==ei&&D.minFilter!==di?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function N(D){const M=D.target;M.removeEventListener("dispose",N),ne(M),M.isVideoTexture&&_.delete(M)}function F(D){const M=D.target;M.removeEventListener("dispose",F),C(M)}function ne(D){const M=r.get(D);if(M.__webglInit===void 0)return;const K=D.source,he=S.get(K);if(he){const Se=he[M.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&w(D),Object.keys(he).length===0&&S.delete(K)}r.remove(D)}function w(D){const M=r.get(D);o.deleteTexture(M.__webglTexture);const K=D.source,he=S.get(K);delete he[M.__cacheKey],d.memory.textures--}function C(D){const M=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(M.__webglFramebuffer[he]))for(let Se=0;Se<M.__webglFramebuffer[he].length;Se++)o.deleteFramebuffer(M.__webglFramebuffer[he][Se]);else o.deleteFramebuffer(M.__webglFramebuffer[he]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[he])}else{if(Array.isArray(M.__webglFramebuffer))for(let he=0;he<M.__webglFramebuffer.length;he++)o.deleteFramebuffer(M.__webglFramebuffer[he]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let he=0;he<M.__webglColorRenderbuffer.length;he++)M.__webglColorRenderbuffer[he]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[he]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const K=D.textures;for(let he=0,Se=K.length;he<Se;he++){const se=r.get(K[he]);se.__webglTexture&&(o.deleteTexture(se.__webglTexture),d.memory.textures--),r.remove(K[he])}r.remove(D)}let V=0;function ee(){V=0}function oe(){const D=V;return D>=l.maxTextures&&ot("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),V+=1,D}function me(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function fe(D,M){const K=r.get(D);if(D.isVideoTexture&&kt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&K.__version!==D.version){const he=D.image;if(he===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{te(K,D,M);return}}else D.isExternalTexture&&(K.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,K.__webglTexture,o.TEXTURE0+M)}function z(D,M){const K=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){te(K,D,M);return}else D.isExternalTexture&&(K.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,K.__webglTexture,o.TEXTURE0+M)}function j(D,M){const K=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){te(K,D,M);return}i.bindTexture(o.TEXTURE_3D,K.__webglTexture,o.TEXTURE0+M)}function Y(D,M){const K=r.get(D);if(D.version>0&&K.__version!==D.version){le(K,D,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,K.__webglTexture,o.TEXTURE0+M)}const ge={[Pd]:o.REPEAT,[la]:o.CLAMP_TO_EDGE,[Bd]:o.MIRRORED_REPEAT},ve={[ei]:o.NEAREST,[IS]:o.NEAREST_MIPMAP_NEAREST,[ec]:o.NEAREST_MIPMAP_LINEAR,[di]:o.LINEAR,[jf]:o.LINEAR_MIPMAP_NEAREST,[Tr]:o.LINEAR_MIPMAP_LINEAR},L={[XS]:o.NEVER,[KS]:o.ALWAYS,[WS]:o.LESS,[Ag]:o.LEQUAL,[qS]:o.EQUAL,[ZS]:o.GEQUAL,[YS]:o.GREATER,[jS]:o.NOTEQUAL};function ae(D,M){if(M.type===ca&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===di||M.magFilter===jf||M.magFilter===ec||M.magFilter===Tr||M.minFilter===di||M.minFilter===jf||M.minFilter===ec||M.minFilter===Tr)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,ge[M.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,ge[M.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,ge[M.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,ve[M.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,ve[M.minFilter]),M.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,L[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ei||M.minFilter!==ec&&M.minFilter!==Tr||M.type===ca&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");o.texParameterf(D,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function ye(D,M){let K=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",N));const he=M.source;let Se=S.get(he);Se===void 0&&(Se={},S.set(he,Se));const se=me(M);if(se!==D.__cacheKey){Se[se]===void 0&&(Se[se]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,K=!0),Se[se].usedTimes++;const qe=Se[D.__cacheKey];qe!==void 0&&(Se[D.__cacheKey].usedTimes--,qe.usedTimes===0&&w(M)),D.__cacheKey=se,D.__webglTexture=Se[se].texture}return K}function Te(D,M,K){return Math.floor(Math.floor(D/K)/M)}function ze(D,M,K,he){const se=D.updateRanges;if(se.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,K,he,M.data);else{se.sort((be,Ee)=>be.start-Ee.start);let qe=0;for(let be=1;be<se.length;be++){const Ee=se[qe],Ye=se[be],Ve=Ee.start+Ee.count,Oe=Te(Ye.start,M.width,4),nt=Te(Ee.start,M.width,4);Ye.start<=Ve+1&&Oe===nt&&Te(Ye.start+Ye.count-1,M.width,4)===Oe?Ee.count=Math.max(Ee.count,Ye.start+Ye.count-Ee.start):(++qe,se[qe]=Ye)}se.length=qe+1;const Le=o.getParameter(o.UNPACK_ROW_LENGTH),Qe=o.getParameter(o.UNPACK_SKIP_PIXELS),We=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let be=0,Ee=se.length;be<Ee;be++){const Ye=se[be],Ve=Math.floor(Ye.start/4),Oe=Math.ceil(Ye.count/4),nt=Ve%M.width,H=Math.floor(Ve/M.width),De=Oe,Re=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,nt),o.pixelStorei(o.UNPACK_SKIP_ROWS,H),i.texSubImage2D(o.TEXTURE_2D,0,nt,H,De,Re,K,he,M.data)}D.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Le),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Qe),o.pixelStorei(o.UNPACK_SKIP_ROWS,We)}}function te(D,M,K){let he=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(he=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(he=o.TEXTURE_3D);const Se=ye(D,M),se=M.source;i.bindTexture(he,D.__webglTexture,o.TEXTURE0+K);const qe=r.get(se);if(se.version!==qe.__version||Se===!0){i.activeTexture(o.TEXTURE0+K);const Le=Dt.getPrimaries(Dt.workingColorSpace),Qe=M.colorSpace===Wa?null:Dt.getPrimaries(M.colorSpace),We=M.colorSpace===Wa||Le===Qe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let be=R(M.image,!1,l.maxTextureSize);be=je(M,be);const Ee=u.convert(M.format,M.colorSpace),Ye=u.convert(M.type);let Ve=U(M.internalFormat,Ee,Ye,M.colorSpace,M.isVideoTexture);ae(he,M);let Oe;const nt=M.mipmaps,H=M.isVideoTexture!==!0,De=qe.__version===void 0||Se===!0,Re=se.dataReady,Ce=k(M,be);if(M.isDepthTexture)Ve=B(M.format===Bo,M.type),De&&(H?i.texStorage2D(o.TEXTURE_2D,1,Ve,be.width,be.height):i.texImage2D(o.TEXTURE_2D,0,Ve,be.width,be.height,0,Ee,Ye,null));else if(M.isDataTexture)if(nt.length>0){H&&De&&i.texStorage2D(o.TEXTURE_2D,Ce,Ve,nt[0].width,nt[0].height);for(let Me=0,xe=nt.length;Me<xe;Me++)Oe=nt[Me],H?Re&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Oe.width,Oe.height,Ee,Ye,Oe.data):i.texImage2D(o.TEXTURE_2D,Me,Ve,Oe.width,Oe.height,0,Ee,Ye,Oe.data);M.generateMipmaps=!1}else H?(De&&i.texStorage2D(o.TEXTURE_2D,Ce,Ve,be.width,be.height),Re&&ze(M,be,Ee,Ye)):i.texImage2D(o.TEXTURE_2D,0,Ve,be.width,be.height,0,Ee,Ye,be.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){H&&De&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ce,Ve,nt[0].width,nt[0].height,be.depth);for(let Me=0,xe=nt.length;Me<xe;Me++)if(Oe=nt[Me],M.format!==yi)if(Ee!==null)if(H){if(Re)if(M.layerUpdates.size>0){const Be=Vx(Oe.width,Oe.height,M.format,M.type);for(const it of M.layerUpdates){const Bt=Oe.data.subarray(it*Be/Oe.data.BYTES_PER_ELEMENT,(it+1)*Be/Oe.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,it,Oe.width,Oe.height,1,Ee,Bt)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,Oe.width,Oe.height,be.depth,Ee,Oe.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Me,Ve,Oe.width,Oe.height,be.depth,0,Oe.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Re&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Me,0,0,0,Oe.width,Oe.height,be.depth,Ee,Ye,Oe.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Me,Ve,Oe.width,Oe.height,be.depth,0,Ee,Ye,Oe.data)}else{H&&De&&i.texStorage2D(o.TEXTURE_2D,Ce,Ve,nt[0].width,nt[0].height);for(let Me=0,xe=nt.length;Me<xe;Me++)Oe=nt[Me],M.format!==yi?Ee!==null?H?Re&&i.compressedTexSubImage2D(o.TEXTURE_2D,Me,0,0,Oe.width,Oe.height,Ee,Oe.data):i.compressedTexImage2D(o.TEXTURE_2D,Me,Ve,Oe.width,Oe.height,0,Oe.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Re&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Oe.width,Oe.height,Ee,Ye,Oe.data):i.texImage2D(o.TEXTURE_2D,Me,Ve,Oe.width,Oe.height,0,Ee,Ye,Oe.data)}else if(M.isDataArrayTexture)if(H){if(De&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ce,Ve,be.width,be.height,be.depth),Re)if(M.layerUpdates.size>0){const Me=Vx(be.width,be.height,M.format,M.type);for(const xe of M.layerUpdates){const Be=be.data.subarray(xe*Me/be.data.BYTES_PER_ELEMENT,(xe+1)*Me/be.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xe,be.width,be.height,1,Ee,Ye,Be)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Ee,Ye,be.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ve,be.width,be.height,be.depth,0,Ee,Ye,be.data);else if(M.isData3DTexture)H?(De&&i.texStorage3D(o.TEXTURE_3D,Ce,Ve,be.width,be.height,be.depth),Re&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Ee,Ye,be.data)):i.texImage3D(o.TEXTURE_3D,0,Ve,be.width,be.height,be.depth,0,Ee,Ye,be.data);else if(M.isFramebufferTexture){if(De)if(H)i.texStorage2D(o.TEXTURE_2D,Ce,Ve,be.width,be.height);else{let Me=be.width,xe=be.height;for(let Be=0;Be<Ce;Be++)i.texImage2D(o.TEXTURE_2D,Be,Ve,Me,xe,0,Ee,Ye,null),Me>>=1,xe>>=1}}else if(nt.length>0){if(H&&De){const Me=at(nt[0]);i.texStorage2D(o.TEXTURE_2D,Ce,Ve,Me.width,Me.height)}for(let Me=0,xe=nt.length;Me<xe;Me++)Oe=nt[Me],H?Re&&i.texSubImage2D(o.TEXTURE_2D,Me,0,0,Ee,Ye,Oe):i.texImage2D(o.TEXTURE_2D,Me,Ve,Ee,Ye,Oe);M.generateMipmaps=!1}else if(H){if(De){const Me=at(be);i.texStorage2D(o.TEXTURE_2D,Ce,Ve,Me.width,Me.height)}Re&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ee,Ye,be)}else i.texImage2D(o.TEXTURE_2D,0,Ve,Ee,Ye,be);b(M)&&v(he),qe.__version=se.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function le(D,M,K){if(M.image.length!==6)return;const he=ye(D,M),Se=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+K);const se=r.get(Se);if(Se.version!==se.__version||he===!0){i.activeTexture(o.TEXTURE0+K);const qe=Dt.getPrimaries(Dt.workingColorSpace),Le=M.colorSpace===Wa?null:Dt.getPrimaries(M.colorSpace),Qe=M.colorSpace===Wa||qe===Le?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);const We=M.isCompressedTexture||M.image[0].isCompressedTexture,be=M.image[0]&&M.image[0].isDataTexture,Ee=[];for(let xe=0;xe<6;xe++)!We&&!be?Ee[xe]=R(M.image[xe],!0,l.maxCubemapSize):Ee[xe]=be?M.image[xe].image:M.image[xe],Ee[xe]=je(M,Ee[xe]);const Ye=Ee[0],Ve=u.convert(M.format,M.colorSpace),Oe=u.convert(M.type),nt=U(M.internalFormat,Ve,Oe,M.colorSpace),H=M.isVideoTexture!==!0,De=se.__version===void 0||he===!0,Re=Se.dataReady;let Ce=k(M,Ye);ae(o.TEXTURE_CUBE_MAP,M);let Me;if(We){H&&De&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ce,nt,Ye.width,Ye.height);for(let xe=0;xe<6;xe++){Me=Ee[xe].mipmaps;for(let Be=0;Be<Me.length;Be++){const it=Me[Be];M.format!==yi?Ve!==null?H?Re&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be,0,0,it.width,it.height,Ve,it.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be,nt,it.width,it.height,0,it.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be,0,0,it.width,it.height,Ve,Oe,it.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be,nt,it.width,it.height,0,Ve,Oe,it.data)}}}else{if(Me=M.mipmaps,H&&De){Me.length>0&&Ce++;const xe=at(Ee[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ce,nt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(be){H?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ee[xe].width,Ee[xe].height,Ve,Oe,Ee[xe].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,nt,Ee[xe].width,Ee[xe].height,0,Ve,Oe,Ee[xe].data);for(let Be=0;Be<Me.length;Be++){const Bt=Me[Be].image[xe].image;H?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be+1,0,0,Bt.width,Bt.height,Ve,Oe,Bt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be+1,nt,Bt.width,Bt.height,0,Ve,Oe,Bt.data)}}else{H?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ve,Oe,Ee[xe]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,nt,Ve,Oe,Ee[xe]);for(let Be=0;Be<Me.length;Be++){const it=Me[Be];H?Re&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be+1,0,0,Ve,Oe,it.image[xe]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be+1,nt,Ve,Oe,it.image[xe])}}}b(M)&&v(o.TEXTURE_CUBE_MAP),se.__version=Se.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function we(D,M,K,he,Se,se){const qe=u.convert(K.format,K.colorSpace),Le=u.convert(K.type),Qe=U(K.internalFormat,qe,Le,K.colorSpace),We=r.get(M),be=r.get(K);if(be.__renderTarget=M,!We.__hasExternalTextures){const Ee=Math.max(1,M.width>>se),Ye=Math.max(1,M.height>>se);Se===o.TEXTURE_3D||Se===o.TEXTURE_2D_ARRAY?i.texImage3D(Se,se,Qe,Ee,Ye,M.depth,0,qe,Le,null):i.texImage2D(Se,se,Qe,Ee,Ye,0,qe,Le,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),Ge(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,he,Se,be.__webglTexture,0,Ot(M)):(Se===o.TEXTURE_2D||Se>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,he,Se,be.__webglTexture,se),i.bindFramebuffer(o.FRAMEBUFFER,null)}function He(D,M,K){if(o.bindRenderbuffer(o.RENDERBUFFER,D),M.depthBuffer){const he=M.depthTexture,Se=he&&he.isDepthTexture?he.type:null,se=B(M.stencilBuffer,Se),qe=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Le=Ot(M);Ge(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Le,se,M.width,M.height):K?o.renderbufferStorageMultisample(o.RENDERBUFFER,Le,se,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,se,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,qe,o.RENDERBUFFER,D)}else{const he=M.textures;for(let Se=0;Se<he.length;Se++){const se=he[Se],qe=u.convert(se.format,se.colorSpace),Le=u.convert(se.type),Qe=U(se.internalFormat,qe,Le,se.colorSpace),We=Ot(M);K&&Ge(M)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,We,Qe,M.width,M.height):Ge(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,We,Qe,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Qe,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Xe(D,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=r.get(M.depthTexture);he.__renderTarget=M,(!he.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),fe(M.depthTexture,0);const Se=he.__webglTexture,se=Ot(M);if(M.depthTexture.format===Po)Ge(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Se,0,se):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,Se,0);else if(M.depthTexture.format===Bo)Ge(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Se,0,se):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,Se,0);else throw new Error("Unknown depthTexture format")}function lt(D){const M=r.get(D),K=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const he=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),he){const Se=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,he.removeEventListener("dispose",Se)};he.addEventListener("dispose",Se),M.__depthDisposeCallback=Se}M.__boundDepthTexture=he}if(D.depthTexture&&!M.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const he=D.texture.mipmaps;he&&he.length>0?Xe(M.__webglFramebuffer[0],D):Xe(M.__webglFramebuffer,D)}else if(K){M.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[he]),M.__webglDepthbuffer[he]===void 0)M.__webglDepthbuffer[he]=o.createRenderbuffer(),He(M.__webglDepthbuffer[he],D,!1);else{const Se=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,se=M.__webglDepthbuffer[he];o.bindRenderbuffer(o.RENDERBUFFER,se),o.framebufferRenderbuffer(o.FRAMEBUFFER,Se,o.RENDERBUFFER,se)}}else{const he=D.texture.mipmaps;if(he&&he.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),He(M.__webglDepthbuffer,D,!1);else{const Se=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,se=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,se),o.framebufferRenderbuffer(o.FRAMEBUFFER,Se,o.RENDERBUFFER,se)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function en(D,M,K){const he=r.get(D);M!==void 0&&we(he.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),K!==void 0&&lt(D)}function dt(D){const M=D.texture,K=r.get(D),he=r.get(M);D.addEventListener("dispose",F);const Se=D.textures,se=D.isWebGLCubeRenderTarget===!0,qe=Se.length>1;if(qe||(he.__webglTexture===void 0&&(he.__webglTexture=o.createTexture()),he.__version=M.version,d.memory.textures++),se){K.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer[Le]=[];for(let Qe=0;Qe<M.mipmaps.length;Qe++)K.__webglFramebuffer[Le][Qe]=o.createFramebuffer()}else K.__webglFramebuffer[Le]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer=[];for(let Le=0;Le<M.mipmaps.length;Le++)K.__webglFramebuffer[Le]=o.createFramebuffer()}else K.__webglFramebuffer=o.createFramebuffer();if(qe)for(let Le=0,Qe=Se.length;Le<Qe;Le++){const We=r.get(Se[Le]);We.__webglTexture===void 0&&(We.__webglTexture=o.createTexture(),d.memory.textures++)}if(D.samples>0&&Ge(D)===!1){K.__webglMultisampledFramebuffer=o.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Le=0;Le<Se.length;Le++){const Qe=Se[Le];K.__webglColorRenderbuffer[Le]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,K.__webglColorRenderbuffer[Le]);const We=u.convert(Qe.format,Qe.colorSpace),be=u.convert(Qe.type),Ee=U(Qe.internalFormat,We,be,Qe.colorSpace,D.isXRRenderTarget===!0),Ye=Ot(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ye,Ee,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Le,o.RENDERBUFFER,K.__webglColorRenderbuffer[Le])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(K.__webglDepthRenderbuffer=o.createRenderbuffer(),He(K.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(se){i.bindTexture(o.TEXTURE_CUBE_MAP,he.__webglTexture),ae(o.TEXTURE_CUBE_MAP,M);for(let Le=0;Le<6;Le++)if(M.mipmaps&&M.mipmaps.length>0)for(let Qe=0;Qe<M.mipmaps.length;Qe++)we(K.__webglFramebuffer[Le][Qe],D,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Qe);else we(K.__webglFramebuffer[Le],D,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);b(M)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qe){for(let Le=0,Qe=Se.length;Le<Qe;Le++){const We=Se[Le],be=r.get(We);let Ee=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ee=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ee,be.__webglTexture),ae(Ee,We),we(K.__webglFramebuffer,D,We,o.COLOR_ATTACHMENT0+Le,Ee,0),b(We)&&v(Ee)}i.unbindTexture()}else{let Le=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Le=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Le,he.__webglTexture),ae(Le,M),M.mipmaps&&M.mipmaps.length>0)for(let Qe=0;Qe<M.mipmaps.length;Qe++)we(K.__webglFramebuffer[Qe],D,M,o.COLOR_ATTACHMENT0,Le,Qe);else we(K.__webglFramebuffer,D,M,o.COLOR_ATTACHMENT0,Le,0);b(M)&&v(Le),i.unbindTexture()}D.depthBuffer&&lt(D)}function Tt(D){const M=D.textures;for(let K=0,he=M.length;K<he;K++){const Se=M[K];if(b(Se)){const se=P(D),qe=r.get(Se).__webglTexture;i.bindTexture(se,qe),v(se),i.unbindTexture()}}}const I=[],ht=[];function mt(D){if(D.samples>0){if(Ge(D)===!1){const M=D.textures,K=D.width,he=D.height;let Se=o.COLOR_BUFFER_BIT;const se=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qe=r.get(D),Le=M.length>1;if(Le)for(let We=0;We<M.length;We++)i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+We,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+We,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer);const Qe=D.texture.mipmaps;Qe&&Qe.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qe.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let We=0;We<M.length;We++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Se|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Se|=o.STENCIL_BUFFER_BIT)),Le){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,qe.__webglColorRenderbuffer[We]);const be=r.get(M[We]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,be,0)}o.blitFramebuffer(0,0,K,he,0,0,K,he,Se,o.NEAREST),m===!0&&(I.length=0,ht.length=0,I.push(o.COLOR_ATTACHMENT0+We),D.depthBuffer&&D.resolveDepthBuffer===!1&&(I.push(se),ht.push(se),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ht)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,I))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Le)for(let We=0;We<M.length;We++){i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+We,o.RENDERBUFFER,qe.__webglColorRenderbuffer[We]);const be=r.get(M[We]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+We,o.TEXTURE_2D,be,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const M=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function Ot(D){return Math.min(l.maxSamples,D.samples)}function Ge(D){const M=r.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function kt(D){const M=d.render.frame;_.get(D)!==M&&(_.set(D,M),D.update())}function je(D,M){const K=D.colorSpace,he=D.format,Se=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||K!==As&&K!==Wa&&(Dt.getTransfer(K)===Gt?(he!==yi||Se!==da)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):an("WebGLTextures: Unsupported texture color space:",K)),M}function at(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=oe,this.resetTextureUnits=ee,this.setTexture2D=fe,this.setTexture2DArray=z,this.setTexture3D=j,this.setTextureCube=Y,this.rebindTextures=en,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=we,this.useMultisampledRTT=Ge}function cE(o,t){function i(r,l=Wa){let u;const d=Dt.getTransfer(l);if(r===da)return o.UNSIGNED_BYTE;if(r===_h)return o.UNSIGNED_SHORT_4_4_4_4;if(r===vh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===bg)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===yg)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===vg)return o.BYTE;if(r===Sg)return o.SHORT;if(r===Oo)return o.UNSIGNED_SHORT;if(r===gh)return o.INT;if(r===Rr)return o.UNSIGNED_INT;if(r===ca)return o.FLOAT;if(r===ws)return o.HALF_FLOAT;if(r===Mg)return o.ALPHA;if(r===Eg)return o.RGB;if(r===yi)return o.RGBA;if(r===Po)return o.DEPTH_COMPONENT;if(r===Bo)return o.DEPTH_STENCIL;if(r===Tg)return o.RED;if(r===Sh)return o.RED_INTEGER;if(r===bh)return o.RG;if(r===yh)return o.RG_INTEGER;if(r===Mh)return o.RGBA_INTEGER;if(r===yc||r===Mc||r===Ec||r===Tc)if(d===Gt)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===yc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Tc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===yc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Mc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ec)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Tc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Fd||r===Id||r===Hd||r===Gd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Fd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Id)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Hd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Vd||r===kd||r===Xd)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Vd||r===kd)return d===Gt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Xd)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Wd||r===qd||r===Yd||r===jd||r===Zd||r===Kd||r===Qd||r===Jd||r===$d||r===eh||r===th||r===nh||r===ih||r===ah)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Wd)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===qd)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Yd)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jd)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Zd)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Kd)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Qd)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Jd)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===$d)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===eh)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===th)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===nh)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ih)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ah)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===rh||r===sh||r===oh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===rh)return d===Gt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===sh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===oh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===lh||r===ch||r===uh||r===fh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===lh)return u.COMPRESSED_RED_RGTC1_EXT;if(r===ch)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===uh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===fh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===zo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const uE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class dE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new Ig(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Mi({vertexShader:uE,fragmentShader:fE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ni(new Cs(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hE extends Ds{constructor(t,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,_=null,g=null,S=null,y=null,A=null;const R=typeof XRWebGLBinding<"u",b=new dE,v={},P=i.getContextAttributes();let U=null,B=null;const k=[],N=[],F=new Ut;let ne=null;const w=new Si;w.viewport=new rn;const C=new Si;C.viewport=new rn;const V=[w,C],ee=new Ub;let oe=null,me=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let le=k[te];return le===void 0&&(le=new gd,k[te]=le),le.getTargetRaySpace()},this.getControllerGrip=function(te){let le=k[te];return le===void 0&&(le=new gd,k[te]=le),le.getGripSpace()},this.getHand=function(te){let le=k[te];return le===void 0&&(le=new gd,k[te]=le),le.getHandSpace()};function fe(te){const le=N.indexOf(te.inputSource);if(le===-1)return;const we=k[le];we!==void 0&&(we.update(te.inputSource,te.frame,p||d),we.dispatchEvent({type:te.type,data:te.inputSource}))}function z(){l.removeEventListener("select",fe),l.removeEventListener("selectstart",fe),l.removeEventListener("selectend",fe),l.removeEventListener("squeeze",fe),l.removeEventListener("squeezestart",fe),l.removeEventListener("squeezeend",fe),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",j);for(let te=0;te<k.length;te++){const le=N[te];le!==null&&(N[te]=null,k[te].disconnect(le))}oe=null,me=null,b.reset();for(const te in v)delete v[te];t.setRenderTarget(U),y=null,S=null,g=null,l=null,B=null,ze.stop(),r.isPresenting=!1,t.setPixelRatio(ne),t.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){u=te,r.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){h=te,r.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(te){p=te},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return g===null&&R&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(te){if(l=te,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",fe),l.addEventListener("selectstart",fe),l.addEventListener("selectend",fe),l.addEventListener("squeeze",fe),l.addEventListener("squeezestart",fe),l.addEventListener("squeezeend",fe),l.addEventListener("end",z),l.addEventListener("inputsourceschange",j),P.xrCompatible!==!0&&await i.makeXRCompatible(),ne=t.getPixelRatio(),t.getSize(F),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,He=null,Xe=null;P.depth&&(Xe=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,we=P.stencil?Bo:Po,He=P.stencil?zo:Rr);const lt={colorFormat:i.RGBA8,depthFormat:Xe,scaleFactor:u};g=this.getBinding(),S=g.createProjectionLayer(lt),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),B=new Za(S.textureWidth,S.textureHeight,{format:yi,type:da,depthTexture:new Fg(S.textureWidth,S.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const we={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,we),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),B=new Za(y.framebufferWidth,y.framebufferHeight,{format:yi,type:da,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}B.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),ze.setContext(l),ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function j(te){for(let le=0;le<te.removed.length;le++){const we=te.removed[le],He=N.indexOf(we);He>=0&&(N[He]=null,k[He].disconnect(we))}for(let le=0;le<te.added.length;le++){const we=te.added[le];let He=N.indexOf(we);if(He===-1){for(let lt=0;lt<k.length;lt++)if(lt>=N.length){N.push(we),He=lt;break}else if(N[lt]===null){N[lt]=we,He=lt;break}if(He===-1)break}const Xe=k[He];Xe&&Xe.connect(we)}}const Y=new ce,ge=new ce;function ve(te,le,we){Y.setFromMatrixPosition(le.matrixWorld),ge.setFromMatrixPosition(we.matrixWorld);const He=Y.distanceTo(ge),Xe=le.projectionMatrix.elements,lt=we.projectionMatrix.elements,en=Xe[14]/(Xe[10]-1),dt=Xe[14]/(Xe[10]+1),Tt=(Xe[9]+1)/Xe[5],I=(Xe[9]-1)/Xe[5],ht=(Xe[8]-1)/Xe[0],mt=(lt[8]+1)/lt[0],Ot=en*ht,Ge=en*mt,kt=He/(-ht+mt),je=kt*-ht;if(le.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(je),te.translateZ(kt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Xe[10]===-1)te.projectionMatrix.copy(le.projectionMatrix),te.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const at=en+kt,D=dt+kt,M=Ot-je,K=Ge+(He-je),he=Tt*dt/D*at,Se=I*dt/D*at;te.projectionMatrix.makePerspective(M,K,he,Se,at,D),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function L(te,le){le===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(le.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(l===null)return;let le=te.near,we=te.far;b.texture!==null&&(b.depthNear>0&&(le=b.depthNear),b.depthFar>0&&(we=b.depthFar)),ee.near=C.near=w.near=le,ee.far=C.far=w.far=we,(oe!==ee.near||me!==ee.far)&&(l.updateRenderState({depthNear:ee.near,depthFar:ee.far}),oe=ee.near,me=ee.far),ee.layers.mask=te.layers.mask|6,w.layers.mask=ee.layers.mask&3,C.layers.mask=ee.layers.mask&5;const He=te.parent,Xe=ee.cameras;L(ee,He);for(let lt=0;lt<Xe.length;lt++)L(Xe[lt],He);Xe.length===2?ve(ee,w,C):ee.projectionMatrix.copy(w.projectionMatrix),ae(te,ee,He)};function ae(te,le,we){we===null?te.matrix.copy(le.matrixWorld):(te.matrix.copy(we.matrixWorld),te.matrix.invert(),te.matrix.multiply(le.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(le.projectionMatrix),te.projectionMatrixInverse.copy(le.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=dh*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return ee},this.getFoveation=function(){if(!(S===null&&y===null))return m},this.setFoveation=function(te){m=te,S!==null&&(S.fixedFoveation=te),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=te)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(ee)},this.getCameraTexture=function(te){return v[te]};let ye=null;function Te(te,le){if(_=le.getViewerPose(p||d),A=le,_!==null){const we=_.views;y!==null&&(t.setRenderTargetFramebuffer(B,y.framebuffer),t.setRenderTarget(B));let He=!1;we.length!==ee.cameras.length&&(ee.cameras.length=0,He=!0);for(let dt=0;dt<we.length;dt++){const Tt=we[dt];let I=null;if(y!==null)I=y.getViewport(Tt);else{const mt=g.getViewSubImage(S,Tt);I=mt.viewport,dt===0&&(t.setRenderTargetTextures(B,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(B))}let ht=V[dt];ht===void 0&&(ht=new Si,ht.layers.enable(dt),ht.viewport=new rn,V[dt]=ht),ht.matrix.fromArray(Tt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Tt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(I.x,I.y,I.width,I.height),dt===0&&(ee.matrix.copy(ht.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale)),He===!0&&ee.cameras.push(ht)}const Xe=l.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){g=r.getBinding();const dt=g.getDepthInformation(we[0]);dt&&dt.isValid&&dt.texture&&b.init(dt,l.renderState)}if(Xe&&Xe.includes("camera-access")&&R){t.state.unbindTexture(),g=r.getBinding();for(let dt=0;dt<we.length;dt++){const Tt=we[dt].camera;if(Tt){let I=v[Tt];I||(I=new Ig,v[Tt]=I);const ht=g.getCameraImage(Tt);I.sourceTexture=ht}}}}for(let we=0;we<k.length;we++){const He=N[we],Xe=k[we];He!==null&&Xe!==void 0&&Xe.update(He,le,p||d)}ye&&ye(te,le),le.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:le}),A=null}const ze=new Gg;ze.setAnimationLoop(Te),this.setAnimationLoop=function(te){ye=te},this.dispose=function(){}}}const Sr=new ha,pE=new mn;function mE(o,t){function i(b,v){b.matrixAutoUpdate===!0&&b.updateMatrix(),v.value.copy(b.matrix)}function r(b,v){v.color.getRGB(b.fogColor.value,Og(o)),v.isFog?(b.fogNear.value=v.near,b.fogFar.value=v.far):v.isFogExp2&&(b.fogDensity.value=v.density)}function l(b,v,P,U,B){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(b,v):v.isMeshToonMaterial?(u(b,v),g(b,v)):v.isMeshPhongMaterial?(u(b,v),_(b,v)):v.isMeshStandardMaterial?(u(b,v),S(b,v),v.isMeshPhysicalMaterial&&y(b,v,B)):v.isMeshMatcapMaterial?(u(b,v),A(b,v)):v.isMeshDepthMaterial?u(b,v):v.isMeshDistanceMaterial?(u(b,v),R(b,v)):v.isMeshNormalMaterial?u(b,v):v.isLineBasicMaterial?(d(b,v),v.isLineDashedMaterial&&h(b,v)):v.isPointsMaterial?m(b,v,P,U):v.isSpriteMaterial?p(b,v):v.isShadowMaterial?(b.color.value.copy(v.color),b.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(b,v){b.opacity.value=v.opacity,v.color&&b.diffuse.value.copy(v.color),v.emissive&&b.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(b.map.value=v.map,i(v.map,b.mapTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,i(v.alphaMap,b.alphaMapTransform)),v.bumpMap&&(b.bumpMap.value=v.bumpMap,i(v.bumpMap,b.bumpMapTransform),b.bumpScale.value=v.bumpScale,v.side===Vn&&(b.bumpScale.value*=-1)),v.normalMap&&(b.normalMap.value=v.normalMap,i(v.normalMap,b.normalMapTransform),b.normalScale.value.copy(v.normalScale),v.side===Vn&&b.normalScale.value.negate()),v.displacementMap&&(b.displacementMap.value=v.displacementMap,i(v.displacementMap,b.displacementMapTransform),b.displacementScale.value=v.displacementScale,b.displacementBias.value=v.displacementBias),v.emissiveMap&&(b.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,b.emissiveMapTransform)),v.specularMap&&(b.specularMap.value=v.specularMap,i(v.specularMap,b.specularMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest);const P=t.get(v),U=P.envMap,B=P.envMapRotation;U&&(b.envMap.value=U,Sr.copy(B),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),b.envMapRotation.value.setFromMatrix4(pE.makeRotationFromEuler(Sr)),b.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=v.reflectivity,b.ior.value=v.ior,b.refractionRatio.value=v.refractionRatio),v.lightMap&&(b.lightMap.value=v.lightMap,b.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,b.lightMapTransform)),v.aoMap&&(b.aoMap.value=v.aoMap,b.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,b.aoMapTransform))}function d(b,v){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,v.map&&(b.map.value=v.map,i(v.map,b.mapTransform))}function h(b,v){b.dashSize.value=v.dashSize,b.totalSize.value=v.dashSize+v.gapSize,b.scale.value=v.scale}function m(b,v,P,U){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,b.size.value=v.size*P,b.scale.value=U*.5,v.map&&(b.map.value=v.map,i(v.map,b.uvTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,i(v.alphaMap,b.alphaMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest)}function p(b,v){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,b.rotation.value=v.rotation,v.map&&(b.map.value=v.map,i(v.map,b.mapTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,i(v.alphaMap,b.alphaMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest)}function _(b,v){b.specular.value.copy(v.specular),b.shininess.value=Math.max(v.shininess,1e-4)}function g(b,v){v.gradientMap&&(b.gradientMap.value=v.gradientMap)}function S(b,v){b.metalness.value=v.metalness,v.metalnessMap&&(b.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,b.metalnessMapTransform)),b.roughness.value=v.roughness,v.roughnessMap&&(b.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,b.roughnessMapTransform)),v.envMap&&(b.envMapIntensity.value=v.envMapIntensity)}function y(b,v,P){b.ior.value=v.ior,v.sheen>0&&(b.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),b.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(b.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,b.sheenColorMapTransform)),v.sheenRoughnessMap&&(b.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,b.sheenRoughnessMapTransform))),v.clearcoat>0&&(b.clearcoat.value=v.clearcoat,b.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(b.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,b.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(b.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Vn&&b.clearcoatNormalScale.value.negate())),v.dispersion>0&&(b.dispersion.value=v.dispersion),v.iridescence>0&&(b.iridescence.value=v.iridescence,b.iridescenceIOR.value=v.iridescenceIOR,b.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(b.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,b.iridescenceMapTransform)),v.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),v.transmission>0&&(b.transmission.value=v.transmission,b.transmissionSamplerMap.value=P.texture,b.transmissionSamplerSize.value.set(P.width,P.height),v.transmissionMap&&(b.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,b.transmissionMapTransform)),b.thickness.value=v.thickness,v.thicknessMap&&(b.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=v.attenuationDistance,b.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(b.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(b.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=v.specularIntensity,b.specularColor.value.copy(v.specularColor),v.specularColorMap&&(b.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,b.specularColorMapTransform)),v.specularIntensityMap&&(b.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,b.specularIntensityMapTransform))}function A(b,v){v.matcap&&(b.matcap.value=v.matcap)}function R(b,v){const P=t.get(v).light;b.referencePosition.value.setFromMatrixPosition(P.matrixWorld),b.nearDistance.value=P.shadow.camera.near,b.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function xE(o,t,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,U){const B=U.program;r.uniformBlockBinding(P,B)}function p(P,U){let B=l[P.id];B===void 0&&(A(P),B=_(P),l[P.id]=B,P.addEventListener("dispose",b));const k=U.program;r.updateUBOMapping(P,k);const N=t.render.frame;u[P.id]!==N&&(S(P),u[P.id]=N)}function _(P){const U=g();P.__bindingPointIndex=U;const B=o.createBuffer(),k=P.__size,N=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,B),o.bufferData(o.UNIFORM_BUFFER,k,N),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,B),B}function g(){for(let P=0;P<h;P++)if(d.indexOf(P)===-1)return d.push(P),P;return an("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(P){const U=l[P.id],B=P.uniforms,k=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let N=0,F=B.length;N<F;N++){const ne=Array.isArray(B[N])?B[N]:[B[N]];for(let w=0,C=ne.length;w<C;w++){const V=ne[w];if(y(V,N,w,k)===!0){const ee=V.__offset,oe=Array.isArray(V.value)?V.value:[V.value];let me=0;for(let fe=0;fe<oe.length;fe++){const z=oe[fe],j=R(z);typeof z=="number"||typeof z=="boolean"?(V.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,ee+me,V.__data)):z.isMatrix3?(V.__data[0]=z.elements[0],V.__data[1]=z.elements[1],V.__data[2]=z.elements[2],V.__data[3]=0,V.__data[4]=z.elements[3],V.__data[5]=z.elements[4],V.__data[6]=z.elements[5],V.__data[7]=0,V.__data[8]=z.elements[6],V.__data[9]=z.elements[7],V.__data[10]=z.elements[8],V.__data[11]=0):(z.toArray(V.__data,me),me+=j.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ee,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(P,U,B,k){const N=P.value,F=U+"_"+B;if(k[F]===void 0)return typeof N=="number"||typeof N=="boolean"?k[F]=N:k[F]=N.clone(),!0;{const ne=k[F];if(typeof N=="number"||typeof N=="boolean"){if(ne!==N)return k[F]=N,!0}else if(ne.equals(N)===!1)return ne.copy(N),!0}return!1}function A(P){const U=P.uniforms;let B=0;const k=16;for(let F=0,ne=U.length;F<ne;F++){const w=Array.isArray(U[F])?U[F]:[U[F]];for(let C=0,V=w.length;C<V;C++){const ee=w[C],oe=Array.isArray(ee.value)?ee.value:[ee.value];for(let me=0,fe=oe.length;me<fe;me++){const z=oe[me],j=R(z),Y=B%k,ge=Y%j.boundary,ve=Y+ge;B+=ge,ve!==0&&k-ve<j.storage&&(B+=k-ve),ee.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=B,B+=j.storage}}}const N=B%k;return N>0&&(B+=k-N),P.__size=B,P.__cache={},this}function R(P){const U={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(U.boundary=4,U.storage=4):P.isVector2?(U.boundary=8,U.storage=8):P.isVector3||P.isColor?(U.boundary=16,U.storage=12):P.isVector4?(U.boundary=16,U.storage=16):P.isMatrix3?(U.boundary=48,U.storage=48):P.isMatrix4?(U.boundary=64,U.storage=64):P.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ot("WebGLRenderer: Unsupported uniform value type.",P),U}function b(P){const U=P.target;U.removeEventListener("dispose",b);const B=d.indexOf(U.__bindingPointIndex);d.splice(B,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function v(){for(const P in l)o.deleteBuffer(l[P]);d=[],l={},u={}}return{bind:m,update:p,dispose:v}}const gE=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ra=null;function _E(){return ra===null&&(ra=new Tb(gE,32,32,bh,ws),ra.minFilter=di,ra.magFilter=di,ra.wrapS=la,ra.wrapT=la,ra.generateMipmaps=!1,ra.needsUpdate=!0),ra}class vE{constructor(t={}){const{canvas:i=QS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=d;const A=new Set([Mh,yh,Sh]),R=new Set([da,Rr,Oo,zo,_h,vh]),b=new Uint32Array(4),v=new Int32Array(4);let P=null,U=null;const B=[],k=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ya,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let F=!1;this._outputColorSpace=fi;let ne=0,w=0,C=null,V=-1,ee=null;const oe=new rn,me=new rn;let fe=null;const z=new Vt(0);let j=0,Y=i.width,ge=i.height,ve=1,L=null,ae=null;const ye=new rn(0,0,Y,ge),Te=new rn(0,0,Y,ge);let ze=!1;const te=new Bg;let le=!1,we=!1;const He=new mn,Xe=new ce,lt=new rn,en={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Tt(){return C===null?ve:1}let I=r;function ht(T,X){return i.getContext(T,X)}try{const T={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${xh}`),i.addEventListener("webglcontextlost",Me,!1),i.addEventListener("webglcontextrestored",xe,!1),i.addEventListener("webglcontextcreationerror",Be,!1),I===null){const X="webgl2";if(I=ht(X,T),I===null)throw ht(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw T("WebGLRenderer: "+T.message),T}let mt,Ot,Ge,kt,je,at,D,M,K,he,Se,se,qe,Le,Qe,We,be,Ee,Ye,Ve,Oe,nt,H,De;function Re(){mt=new R1(I),mt.init(),nt=new cE(I,mt),Ot=new _1(I,mt,t,nt),Ge=new oE(I,mt),Ot.reversedDepthBuffer&&S&&Ge.buffers.depth.setReversed(!0),kt=new D1(I),je=new j3,at=new lE(I,mt,Ge,je,Ot,nt,kt),D=new S1(N),M=new A1(N),K=new Ob(I),H=new x1(I,K),he=new C1(I,K,kt,H),Se=new L1(I,he,K,kt),Ye=new U1(I,Ot,at),We=new v1(je),se=new Y3(N,D,M,mt,Ot,H,We),qe=new mE(N,je),Le=new K3,Qe=new nE(mt),Ee=new m1(N,D,M,Ge,Se,y,m),be=new rE(N,Se,Ot),De=new xE(I,kt,Ot,Ge),Ve=new g1(I,mt,kt),Oe=new w1(I,mt,kt),kt.programs=se.programs,N.capabilities=Ot,N.extensions=mt,N.properties=je,N.renderLists=Le,N.shadowMap=be,N.state=Ge,N.info=kt}Re();const Ce=new hE(N,I);this.xr=Ce,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=mt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=mt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(T){T!==void 0&&(ve=T,this.setSize(Y,ge,!1))},this.getSize=function(T){return T.set(Y,ge)},this.setSize=function(T,X,ie=!0){if(Ce.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,ge=X,i.width=Math.floor(T*ve),i.height=Math.floor(X*ve),ie===!0&&(i.style.width=T+"px",i.style.height=X+"px"),this.setViewport(0,0,T,X)},this.getDrawingBufferSize=function(T){return T.set(Y*ve,ge*ve).floor()},this.setDrawingBufferSize=function(T,X,ie){Y=T,ge=X,ve=ie,i.width=Math.floor(T*ie),i.height=Math.floor(X*ie),this.setViewport(0,0,T,X)},this.getCurrentViewport=function(T){return T.copy(oe)},this.getViewport=function(T){return T.copy(ye)},this.setViewport=function(T,X,ie,J){T.isVector4?ye.set(T.x,T.y,T.z,T.w):ye.set(T,X,ie,J),Ge.viewport(oe.copy(ye).multiplyScalar(ve).round())},this.getScissor=function(T){return T.copy(Te)},this.setScissor=function(T,X,ie,J){T.isVector4?Te.set(T.x,T.y,T.z,T.w):Te.set(T,X,ie,J),Ge.scissor(me.copy(Te).multiplyScalar(ve).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(T){Ge.setScissorTest(ze=T)},this.setOpaqueSort=function(T){L=T},this.setTransparentSort=function(T){ae=T},this.getClearColor=function(T){return T.copy(Ee.getClearColor())},this.setClearColor=function(){Ee.setClearColor(...arguments)},this.getClearAlpha=function(){return Ee.getClearAlpha()},this.setClearAlpha=function(){Ee.setClearAlpha(...arguments)},this.clear=function(T=!0,X=!0,ie=!0){let J=0;if(T){let q=!1;if(C!==null){const Ae=C.texture.format;q=A.has(Ae)}if(q){const Ae=C.texture.type,Ue=R.has(Ae),Pe=Ee.getClearColor(),Fe=Ee.getClearAlpha(),$e=Pe.r,tt=Pe.g,Ze=Pe.b;Ue?(b[0]=$e,b[1]=tt,b[2]=Ze,b[3]=Fe,I.clearBufferuiv(I.COLOR,0,b)):(v[0]=$e,v[1]=tt,v[2]=Ze,v[3]=Fe,I.clearBufferiv(I.COLOR,0,v))}else J|=I.COLOR_BUFFER_BIT}X&&(J|=I.DEPTH_BUFFER_BIT),ie&&(J|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",Me,!1),i.removeEventListener("webglcontextrestored",xe,!1),i.removeEventListener("webglcontextcreationerror",Be,!1),Ee.dispose(),Le.dispose(),Qe.dispose(),je.dispose(),D.dispose(),M.dispose(),Se.dispose(),H.dispose(),De.dispose(),se.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Ls),Ce.removeEventListener("sessionend",Ns),hi.stop()};function Me(T){T.preventDefault(),Ex("WebGLRenderer: Context Lost."),F=!0}function xe(){Ex("WebGLRenderer: Context Restored."),F=!1;const T=kt.autoReset,X=be.enabled,ie=be.autoUpdate,J=be.needsUpdate,q=be.type;Re(),kt.autoReset=T,be.enabled=X,be.autoUpdate=ie,be.needsUpdate=J,be.type=q}function Be(T){an("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function it(T){const X=T.target;X.removeEventListener("dispose",it),Bt(X)}function Bt(T){At(T),je.remove(T)}function At(T){const X=je.get(T).programs;X!==void 0&&(X.forEach(function(ie){se.releaseProgram(ie)}),T.isShaderMaterial&&se.releaseShaderCache(T))}this.renderBufferDirect=function(T,X,ie,J,q,Ae){X===null&&(X=en);const Ue=q.isMesh&&q.matrixWorld.determinant()<0,Pe=zc(T,X,ie,J,q);Ge.setMaterial(J,Ue);let Fe=ie.index,$e=1;if(J.wireframe===!0){if(Fe=he.getWireframeAttribute(ie),Fe===void 0)return;$e=2}const tt=ie.drawRange,Ze=ie.attributes.position;let ct=tt.start*$e,Et=(tt.start+tt.count)*$e;Ae!==null&&(ct=Math.max(ct,Ae.start*$e),Et=Math.min(Et,(Ae.start+Ae.count)*$e)),Fe!==null?(ct=Math.max(ct,0),Et=Math.min(Et,Fe.count)):Ze!=null&&(ct=Math.max(ct,0),Et=Math.min(Et,Ze.count));const Rt=Et-ct;if(Rt<0||Rt===1/0)return;H.setup(q,J,Pe,ie,Fe);let St,Nt=Ve;if(Fe!==null&&(St=K.get(Fe),Nt=Oe,Nt.setIndex(St)),q.isMesh)J.wireframe===!0?(Ge.setLineWidth(J.wireframeLinewidth*Tt()),Nt.setMode(I.LINES)):Nt.setMode(I.TRIANGLES);else if(q.isLine){let Je=J.linewidth;Je===void 0&&(Je=1),Ge.setLineWidth(Je*Tt()),q.isLineSegments?Nt.setMode(I.LINES):q.isLineLoop?Nt.setMode(I.LINE_LOOP):Nt.setMode(I.LINE_STRIP)}else q.isPoints?Nt.setMode(I.POINTS):q.isSprite&&Nt.setMode(I.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Fo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Nt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))Nt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Je=q._multiDrawStarts,Xt=q._multiDrawCounts,bt=q._multiDrawCount,_n=Fe?K.get(Fe).bytesPerElement:1,ma=je.get(J).currentProgram.getUniforms();for(let qt=0;qt<bt;qt++)ma.setValue(I,"_gl_DrawID",qt),Nt.render(Je[qt]/_n,Xt[qt])}else if(q.isInstancedMesh)Nt.renderInstances(ct,Rt,q.count);else if(ie.isInstancedBufferGeometry){const Je=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Xt=Math.min(ie.instanceCount,Je);Nt.renderInstances(ct,Rt,Xt)}else Nt.render(ct,Rt)};function Cn(T,X,ie){T.transparent===!0&&T.side===oa&&T.forceSinglePass===!1?(T.side=Vn,T.needsUpdate=!0,dn(T,X,ie),T.side=ja,T.needsUpdate=!0,dn(T,X,ie),T.side=oa):dn(T,X,ie)}this.compile=function(T,X,ie=null){ie===null&&(ie=T),U=Qe.get(ie),U.init(X),k.push(U),ie.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(U.pushLight(q),q.castShadow&&U.pushShadow(q))}),T!==ie&&T.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(U.pushLight(q),q.castShadow&&U.pushShadow(q))}),U.setupLights();const J=new Set;return T.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Ae=q.material;if(Ae)if(Array.isArray(Ae))for(let Ue=0;Ue<Ae.length;Ue++){const Pe=Ae[Ue];Cn(Pe,ie,q),J.add(Pe)}else Cn(Ae,ie,q),J.add(Ae)}),U=k.pop(),J},this.compileAsync=function(T,X,ie=null){const J=this.compile(T,X,ie);return new Promise(q=>{function Ae(){if(J.forEach(function(Ue){je.get(Ue).currentProgram.isReady()&&J.delete(Ue)}),J.size===0){q(T);return}setTimeout(Ae,10)}mt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let kn=null;function ko(T){kn&&kn(T)}function Ls(){hi.stop()}function Ns(){hi.start()}const hi=new Gg;hi.setAnimationLoop(ko),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(T){kn=T,Ce.setAnimationLoop(T),T===null?hi.stop():hi.start()},Ce.addEventListener("sessionstart",Ls),Ce.addEventListener("sessionend",Ns),this.render=function(T,X){if(X!==void 0&&X.isCamera!==!0){an("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(X),X=Ce.getCamera()),T.isScene===!0&&T.onBeforeRender(N,T,X,C),U=Qe.get(T,k.length),U.init(X),k.push(U),He.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),te.setFromProjectionMatrix(He,Ui,X.reversedDepth),we=this.localClippingEnabled,le=We.init(this.clippingPlanes,we),P=Le.get(T,B.length),P.init(),B.push(P),Ce.enabled===!0&&Ce.isPresenting===!0){const Ae=N.xr.getDepthSensingMesh();Ae!==null&&Qa(Ae,X,-1/0,N.sortObjects)}Qa(T,X,0,N.sortObjects),P.finish(),N.sortObjects===!0&&P.sort(L,ae),dt=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,dt&&Ee.addToRenderList(P,T),this.info.render.frame++,le===!0&&We.beginShadows();const ie=U.state.shadowsArray;be.render(ie,T,X),le===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=P.opaque,q=P.transmissive;if(U.setupLights(),X.isArrayCamera){const Ae=X.cameras;if(q.length>0)for(let Ue=0,Pe=Ae.length;Ue<Pe;Ue++){const Fe=Ae[Ue];zs(J,q,T,Fe)}dt&&Ee.render(T);for(let Ue=0,Pe=Ae.length;Ue<Pe;Ue++){const Fe=Ae[Ue];Os(P,T,Fe,Fe.viewport)}}else q.length>0&&zs(J,q,T,X),dt&&Ee.render(T),Os(P,T,X);C!==null&&w===0&&(at.updateMultisampleRenderTarget(C),at.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(N,T,X),H.resetDefaultState(),V=-1,ee=null,k.pop(),k.length>0?(U=k[k.length-1],le===!0&&We.setGlobalState(N.clippingPlanes,U.state.camera)):U=null,B.pop(),B.length>0?P=B[B.length-1]:P=null};function Qa(T,X,ie,J){if(T.visible===!1)return;if(T.layers.test(X.layers)){if(T.isGroup)ie=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(X);else if(T.isLight)U.pushLight(T),T.castShadow&&U.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||te.intersectsSprite(T)){J&&lt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(He);const Ue=Se.update(T),Pe=T.material;Pe.visible&&P.push(T,Ue,Pe,ie,lt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||te.intersectsObject(T))){const Ue=Se.update(T),Pe=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),lt.copy(T.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),lt.copy(Ue.boundingSphere.center)),lt.applyMatrix4(T.matrixWorld).applyMatrix4(He)),Array.isArray(Pe)){const Fe=Ue.groups;for(let $e=0,tt=Fe.length;$e<tt;$e++){const Ze=Fe[$e],ct=Pe[Ze.materialIndex];ct&&ct.visible&&P.push(T,Ue,ct,ie,lt.z,Ze)}}else Pe.visible&&P.push(T,Ue,Pe,ie,lt.z,null)}}const Ae=T.children;for(let Ue=0,Pe=Ae.length;Ue<Pe;Ue++)Qa(Ae[Ue],X,ie,J)}function Os(T,X,ie,J){const{opaque:q,transmissive:Ae,transparent:Ue}=T;U.setupLightsView(ie),le===!0&&We.setGlobalState(N.clippingPlanes,ie),J&&Ge.viewport(oe.copy(J)),q.length>0&&Xn(q,X,ie),Ae.length>0&&Xn(Ae,X,ie),Ue.length>0&&Xn(Ue,X,ie),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function zs(T,X,ie,J){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;U.state.transmissionRenderTarget[J.id]===void 0&&(U.state.transmissionRenderTarget[J.id]=new Za(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?ws:da,minFilter:Tr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace}));const Ae=U.state.transmissionRenderTarget[J.id],Ue=J.viewport||oe;Ae.setSize(Ue.z*N.transmissionResolutionScale,Ue.w*N.transmissionResolutionScale);const Pe=N.getRenderTarget(),Fe=N.getActiveCubeFace(),$e=N.getActiveMipmapLevel();N.setRenderTarget(Ae),N.getClearColor(z),j=N.getClearAlpha(),j<1&&N.setClearColor(16777215,.5),N.clear(),dt&&Ee.render(ie);const tt=N.toneMapping;N.toneMapping=Ya;const Ze=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),U.setupLightsView(J),le===!0&&We.setGlobalState(N.clippingPlanes,J),Xn(T,ie,J),at.updateMultisampleRenderTarget(Ae),at.updateRenderTargetMipmap(Ae),mt.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Et=0,Rt=X.length;Et<Rt;Et++){const St=X[Et],{object:Nt,geometry:Je,material:Xt,group:bt}=St;if(Xt.side===oa&&Nt.layers.test(J.layers)){const _n=Xt.side;Xt.side=Vn,Xt.needsUpdate=!0,sn(Nt,ie,J,Je,Xt,bt),Xt.side=_n,Xt.needsUpdate=!0,ct=!0}}ct===!0&&(at.updateMultisampleRenderTarget(Ae),at.updateRenderTargetMipmap(Ae))}N.setRenderTarget(Pe,Fe,$e),N.setClearColor(z,j),Ze!==void 0&&(J.viewport=Ze),N.toneMapping=tt}function Xn(T,X,ie){const J=X.isScene===!0?X.overrideMaterial:null;for(let q=0,Ae=T.length;q<Ae;q++){const Ue=T[q],{object:Pe,geometry:Fe,group:$e}=Ue;let tt=Ue.material;tt.allowOverride===!0&&J!==null&&(tt=J),Pe.layers.test(ie.layers)&&sn(Pe,X,ie,Fe,tt,$e)}}function sn(T,X,ie,J,q,Ae){T.onBeforeRender(N,X,ie,J,q,Ae),T.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(N,X,ie,J,T,Ae),q.transparent===!0&&q.side===oa&&q.forceSinglePass===!1?(q.side=Vn,q.needsUpdate=!0,N.renderBufferDirect(ie,X,J,q,T,Ae),q.side=ja,q.needsUpdate=!0,N.renderBufferDirect(ie,X,J,q,T,Ae),q.side=oa):N.renderBufferDirect(ie,X,J,q,T,Ae),T.onAfterRender(N,X,ie,J,q,Ae)}function dn(T,X,ie){X.isScene!==!0&&(X=en);const J=je.get(T),q=U.state.lights,Ae=U.state.shadowsArray,Ue=q.state.version,Pe=se.getParameters(T,q.state,Ae,X,ie),Fe=se.getProgramCacheKey(Pe);let $e=J.programs;J.environment=T.isMeshStandardMaterial?X.environment:null,J.fog=X.fog,J.envMap=(T.isMeshStandardMaterial?M:D).get(T.envMap||J.environment),J.envMapRotation=J.environment!==null&&T.envMap===null?X.environmentRotation:T.envMapRotation,$e===void 0&&(T.addEventListener("dispose",it),$e=new Map,J.programs=$e);let tt=$e.get(Fe);if(tt!==void 0){if(J.currentProgram===tt&&J.lightsStateVersion===Ue)return Cr(T,Pe),tt}else Pe.uniforms=se.getUniforms(T),T.onBeforeCompile(Pe,N),tt=se.acquireProgram(Pe,Fe),$e.set(Fe,tt),J.uniforms=Pe.uniforms;const Ze=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ze.clippingPlanes=We.uniform),Cr(T,Pe),J.needsLights=Xo(T),J.lightsStateVersion=Ue,J.needsLights&&(Ze.ambientLightColor.value=q.state.ambient,Ze.lightProbe.value=q.state.probe,Ze.directionalLights.value=q.state.directional,Ze.directionalLightShadows.value=q.state.directionalShadow,Ze.spotLights.value=q.state.spot,Ze.spotLightShadows.value=q.state.spotShadow,Ze.rectAreaLights.value=q.state.rectArea,Ze.ltc_1.value=q.state.rectAreaLTC1,Ze.ltc_2.value=q.state.rectAreaLTC2,Ze.pointLights.value=q.state.point,Ze.pointLightShadows.value=q.state.pointShadow,Ze.hemisphereLights.value=q.state.hemi,Ze.directionalShadowMap.value=q.state.directionalShadowMap,Ze.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ze.spotShadowMap.value=q.state.spotShadowMap,Ze.spotLightMatrix.value=q.state.spotLightMatrix,Ze.spotLightMap.value=q.state.spotLightMap,Ze.pointShadowMap.value=q.state.pointShadowMap,Ze.pointShadowMatrix.value=q.state.pointShadowMatrix),J.currentProgram=tt,J.uniformsList=null,tt}function Oi(T){if(T.uniformsList===null){const X=T.currentProgram.getUniforms();T.uniformsList=Ac.seqWithValue(X.seq,T.uniforms)}return T.uniformsList}function Cr(T,X){const ie=je.get(T);ie.outputColorSpace=X.outputColorSpace,ie.batching=X.batching,ie.batchingColor=X.batchingColor,ie.instancing=X.instancing,ie.instancingColor=X.instancingColor,ie.instancingMorph=X.instancingMorph,ie.skinning=X.skinning,ie.morphTargets=X.morphTargets,ie.morphNormals=X.morphNormals,ie.morphColors=X.morphColors,ie.morphTargetsCount=X.morphTargetsCount,ie.numClippingPlanes=X.numClippingPlanes,ie.numIntersection=X.numClipIntersection,ie.vertexAlphas=X.vertexAlphas,ie.vertexTangents=X.vertexTangents,ie.toneMapping=X.toneMapping}function zc(T,X,ie,J,q){X.isScene!==!0&&(X=en),at.resetTextureUnits();const Ae=X.fog,Ue=J.isMeshStandardMaterial?X.environment:null,Pe=C===null?N.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:As,Fe=(J.isMeshStandardMaterial?M:D).get(J.envMap||Ue),$e=J.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,tt=!!ie.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Ze=!!ie.morphAttributes.position,ct=!!ie.morphAttributes.normal,Et=!!ie.morphAttributes.color;let Rt=Ya;J.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Rt=N.toneMapping);const St=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Nt=St!==void 0?St.length:0,Je=je.get(J),Xt=U.state.lights;if(le===!0&&(we===!0||T!==ee)){const Sn=T===ee&&J.id===V;We.setState(J,T,Sn)}let bt=!1;J.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Xt.state.version||Je.outputColorSpace!==Pe||q.isBatchedMesh&&Je.batching===!1||!q.isBatchedMesh&&Je.batching===!0||q.isBatchedMesh&&Je.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Je.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Je.instancing===!1||!q.isInstancedMesh&&Je.instancing===!0||q.isSkinnedMesh&&Je.skinning===!1||!q.isSkinnedMesh&&Je.skinning===!0||q.isInstancedMesh&&Je.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Je.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Je.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Je.instancingMorph===!1&&q.morphTexture!==null||Je.envMap!==Fe||J.fog===!0&&Je.fog!==Ae||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==We.numPlanes||Je.numIntersection!==We.numIntersection)||Je.vertexAlphas!==$e||Je.vertexTangents!==tt||Je.morphTargets!==Ze||Je.morphNormals!==ct||Je.morphColors!==Et||Je.toneMapping!==Rt||Je.morphTargetsCount!==Nt)&&(bt=!0):(bt=!0,Je.__version=J.version);let _n=Je.currentProgram;bt===!0&&(_n=dn(J,X,q));let ma=!1,qt=!1,zi=!1;const Yt=_n.getUniforms(),vn=Je.uniforms;if(Ge.useProgram(_n.program)&&(ma=!0,qt=!0,zi=!0),J.id!==V&&(V=J.id,qt=!0),ma||ee!==T){Ge.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Yt.setValue(I,"projectionMatrix",T.projectionMatrix),Yt.setValue(I,"viewMatrix",T.matrixWorldInverse);const Mn=Yt.map.cameraPosition;Mn!==void 0&&Mn.setValue(I,Xe.setFromMatrixPosition(T.matrixWorld)),Ot.logarithmicDepthBuffer&&Yt.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Yt.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),ee!==T&&(ee=T,qt=!0,zi=!0)}if(q.isSkinnedMesh){Yt.setOptional(I,q,"bindMatrix"),Yt.setOptional(I,q,"bindMatrixInverse");const Sn=q.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Yt.setValue(I,"boneTexture",Sn.boneTexture,at))}q.isBatchedMesh&&(Yt.setOptional(I,q,"batchingTexture"),Yt.setValue(I,"batchingTexture",q._matricesTexture,at),Yt.setOptional(I,q,"batchingIdTexture"),Yt.setValue(I,"batchingIdTexture",q._indirectTexture,at),Yt.setOptional(I,q,"batchingColorTexture"),q._colorsTexture!==null&&Yt.setValue(I,"batchingColorTexture",q._colorsTexture,at));const hn=ie.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&Ye.update(q,ie,_n),(qt||Je.receiveShadow!==q.receiveShadow)&&(Je.receiveShadow=q.receiveShadow,Yt.setValue(I,"receiveShadow",q.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(vn.envMap.value=Fe,vn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&X.environment!==null&&(vn.envMapIntensity.value=X.environmentIntensity),vn.dfgLUT!==void 0&&(vn.dfgLUT.value=_E()),qt&&(Yt.setValue(I,"toneMappingExposure",N.toneMappingExposure),Je.needsLights&&Pc(vn,zi),Ae&&J.fog===!0&&qe.refreshFogUniforms(vn,Ae),qe.refreshMaterialUniforms(vn,J,ve,ge,U.state.transmissionRenderTarget[T.id]),Ac.upload(I,Oi(Je),vn,at)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ac.upload(I,Oi(Je),vn,at),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Yt.setValue(I,"center",q.center),Yt.setValue(I,"modelViewMatrix",q.modelViewMatrix),Yt.setValue(I,"normalMatrix",q.normalMatrix),Yt.setValue(I,"modelMatrix",q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Sn=J.uniformsGroups;for(let Mn=0,Ei=Sn.length;Mn<Ei;Mn++){const Pi=Sn[Mn];De.update(Pi,_n),De.bind(Pi,_n)}}return _n}function Pc(T,X){T.ambientLightColor.needsUpdate=X,T.lightProbe.needsUpdate=X,T.directionalLights.needsUpdate=X,T.directionalLightShadows.needsUpdate=X,T.pointLights.needsUpdate=X,T.pointLightShadows.needsUpdate=X,T.spotLights.needsUpdate=X,T.spotLightShadows.needsUpdate=X,T.rectAreaLights.needsUpdate=X,T.hemisphereLights.needsUpdate=X}function Xo(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,X,ie){const J=je.get(T);J.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),je.get(T.texture).__webglTexture=X,je.get(T.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:ie,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,X){const ie=je.get(T);ie.__webglFramebuffer=X,ie.__useDefaultFramebuffer=X===void 0};const Ja=I.createFramebuffer();this.setRenderTarget=function(T,X=0,ie=0){C=T,ne=X,w=ie;let J=!0,q=null,Ae=!1,Ue=!1;if(T){const Fe=je.get(T);if(Fe.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(I.FRAMEBUFFER,null),J=!1;else if(Fe.__webglFramebuffer===void 0)at.setupRenderTarget(T);else if(Fe.__hasExternalTextures)at.rebindTextures(T,je.get(T.texture).__webglTexture,je.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ze=T.depthTexture;if(Fe.__boundDepthTexture!==Ze){if(Ze!==null&&je.has(Ze)&&(T.width!==Ze.image.width||T.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(T)}}const $e=T.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ue=!0);const tt=je.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(tt[X])?q=tt[X][ie]:q=tt[X],Ae=!0):T.samples>0&&at.useMultisampledRTT(T)===!1?q=je.get(T).__webglMultisampledFramebuffer:Array.isArray(tt)?q=tt[ie]:q=tt,oe.copy(T.viewport),me.copy(T.scissor),fe=T.scissorTest}else oe.copy(ye).multiplyScalar(ve).floor(),me.copy(Te).multiplyScalar(ve).floor(),fe=ze;if(ie!==0&&(q=Ja),Ge.bindFramebuffer(I.FRAMEBUFFER,q)&&J&&Ge.drawBuffers(T,q),Ge.viewport(oe),Ge.scissor(me),Ge.setScissorTest(fe),Ae){const Fe=je.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+X,Fe.__webglTexture,ie)}else if(Ue){const Fe=X;for(let $e=0;$e<T.textures.length;$e++){const tt=je.get(T.textures[$e]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+$e,tt.__webglTexture,ie,Fe)}}else if(T!==null&&ie!==0){const Fe=je.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Fe.__webglTexture,ie)}V=-1},this.readRenderTargetPixels=function(T,X,ie,J,q,Ae,Ue,Pe=0){if(!(T&&T.isWebGLRenderTarget)){an("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=je.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ue!==void 0&&(Fe=Fe[Ue]),Fe){Ge.bindFramebuffer(I.FRAMEBUFFER,Fe);try{const $e=T.textures[Pe],tt=$e.format,Ze=$e.type;if(!Ot.textureFormatReadable(tt)){an("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(Ze)){an("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=T.width-J&&ie>=0&&ie<=T.height-q&&(T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Pe),I.readPixels(X,ie,J,q,nt.convert(tt),nt.convert(Ze),Ae))}finally{const $e=C!==null?je.get(C).__webglFramebuffer:null;Ge.bindFramebuffer(I.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(T,X,ie,J,q,Ae,Ue,Pe=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=je.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ue!==void 0&&(Fe=Fe[Ue]),Fe)if(X>=0&&X<=T.width-J&&ie>=0&&ie<=T.height-q){Ge.bindFramebuffer(I.FRAMEBUFFER,Fe);const $e=T.textures[Pe],tt=$e.format,Ze=$e.type;if(!Ot.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ct),I.bufferData(I.PIXEL_PACK_BUFFER,Ae.byteLength,I.STREAM_READ),T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Pe),I.readPixels(X,ie,J,q,nt.convert(tt),nt.convert(Ze),0);const Et=C!==null?je.get(C).__webglFramebuffer:null;Ge.bindFramebuffer(I.FRAMEBUFFER,Et);const Rt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await JS(I,Rt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ct),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Ae),I.deleteBuffer(ct),I.deleteSync(Rt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,X=null,ie=0){const J=Math.pow(2,-ie),q=Math.floor(T.image.width*J),Ae=Math.floor(T.image.height*J),Ue=X!==null?X.x:0,Pe=X!==null?X.y:0;at.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,ie,0,0,Ue,Pe,q,Ae),Ge.unbindTexture()};const Ps=I.createFramebuffer(),pa=I.createFramebuffer();this.copyTextureToTexture=function(T,X,ie=null,J=null,q=0,Ae=null){Ae===null&&(q!==0?(Fo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ae=q,q=0):Ae=0);let Ue,Pe,Fe,$e,tt,Ze,ct,Et,Rt;const St=T.isCompressedTexture?T.mipmaps[Ae]:T.image;if(ie!==null)Ue=ie.max.x-ie.min.x,Pe=ie.max.y-ie.min.y,Fe=ie.isBox3?ie.max.z-ie.min.z:1,$e=ie.min.x,tt=ie.min.y,Ze=ie.isBox3?ie.min.z:0;else{const hn=Math.pow(2,-q);Ue=Math.floor(St.width*hn),Pe=Math.floor(St.height*hn),T.isDataArrayTexture?Fe=St.depth:T.isData3DTexture?Fe=Math.floor(St.depth*hn):Fe=1,$e=0,tt=0,Ze=0}J!==null?(ct=J.x,Et=J.y,Rt=J.z):(ct=0,Et=0,Rt=0);const Nt=nt.convert(X.format),Je=nt.convert(X.type);let Xt;X.isData3DTexture?(at.setTexture3D(X,0),Xt=I.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(at.setTexture2DArray(X,0),Xt=I.TEXTURE_2D_ARRAY):(at.setTexture2D(X,0),Xt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,X.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,X.unpackAlignment);const bt=I.getParameter(I.UNPACK_ROW_LENGTH),_n=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ma=I.getParameter(I.UNPACK_SKIP_PIXELS),qt=I.getParameter(I.UNPACK_SKIP_ROWS),zi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,St.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,St.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$e),I.pixelStorei(I.UNPACK_SKIP_ROWS,tt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ze);const Yt=T.isDataArrayTexture||T.isData3DTexture,vn=X.isDataArrayTexture||X.isData3DTexture;if(T.isDepthTexture){const hn=je.get(T),Sn=je.get(X),Mn=je.get(hn.__renderTarget),Ei=je.get(Sn.__renderTarget);Ge.bindFramebuffer(I.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let Pi=0;Pi<Fe;Pi++)Yt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,je.get(T).__webglTexture,q,Ze+Pi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,je.get(X).__webglTexture,Ae,Rt+Pi)),I.blitFramebuffer($e,tt,Ue,Pe,ct,Et,Ue,Pe,I.DEPTH_BUFFER_BIT,I.NEAREST);Ge.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(q!==0||T.isRenderTargetTexture||je.has(T)){const hn=je.get(T),Sn=je.get(X);Ge.bindFramebuffer(I.READ_FRAMEBUFFER,Ps),Ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,pa);for(let Mn=0;Mn<Fe;Mn++)Yt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,hn.__webglTexture,q,Ze+Mn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,hn.__webglTexture,q),vn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Sn.__webglTexture,Ae,Rt+Mn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Sn.__webglTexture,Ae),q!==0?I.blitFramebuffer($e,tt,Ue,Pe,ct,Et,Ue,Pe,I.COLOR_BUFFER_BIT,I.NEAREST):vn?I.copyTexSubImage3D(Xt,Ae,ct,Et,Rt+Mn,$e,tt,Ue,Pe):I.copyTexSubImage2D(Xt,Ae,ct,Et,$e,tt,Ue,Pe);Ge.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else vn?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(Xt,Ae,ct,Et,Rt,Ue,Pe,Fe,Nt,Je,St.data):X.isCompressedArrayTexture?I.compressedTexSubImage3D(Xt,Ae,ct,Et,Rt,Ue,Pe,Fe,Nt,St.data):I.texSubImage3D(Xt,Ae,ct,Et,Rt,Ue,Pe,Fe,Nt,Je,St):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Ae,ct,Et,Ue,Pe,Nt,Je,St.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Ae,ct,Et,St.width,St.height,Nt,St.data):I.texSubImage2D(I.TEXTURE_2D,Ae,ct,Et,Ue,Pe,Nt,Je,St);I.pixelStorei(I.UNPACK_ROW_LENGTH,bt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_n),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ma),I.pixelStorei(I.UNPACK_SKIP_ROWS,qt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,zi),Ae===0&&X.generateMipmaps&&I.generateMipmap(Xt),Ge.unbindTexture()},this.initRenderTarget=function(T){je.get(T).__webglFramebuffer===void 0&&at.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?at.setTextureCube(T,0):T.isData3DTexture?at.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?at.setTexture2DArray(T,0):at.setTexture2D(T,0),Ge.unbindTexture()},this.resetState=function(){ne=0,w=0,C=null,Ge.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Dt._getUnpackColorSpace()}}const Er=16,SE=`
  varying vec2 vUv;
  void main(){
    vUv = uv;
    gl_Position = vec4(position,1.0);
  }
`,bE=`
  precision highp float;
  varying vec2 vUv;

  uniform float u_time;
  uniform vec2 u_resolution;

  uniform vec2 u_pos[${Er}];
  uniform float u_scale[${Er}];
  uniform float u_timeOffset[${Er}];
  uniform float u_rot[${Er}];
  uniform vec2 u_mouse;

  vec2 rotate(vec2 p, float a){
    float s = sin(a), c = cos(a);
    return vec2(p.x*c - p.y*s, p.x*s + p.y*c);
  }

  float petal(vec2 p, float angle, float width, float height){
    float a = atan(p.y, p.x);
    float r = length(p);
    float diff = abs(a - angle);
    return smoothstep(width, 0.0, diff) * smoothstep(height, 0.0, r);
  }

  void main(){
    vec2 uv = vUv * 2.0 - 1.0;
    uv.x *= u_resolution.x / u_resolution.y;

    vec3 col = vec3(0.0);

    for(int i = 0; i < ${Er}; i++){
      vec2 center = u_pos[i];
      float sc = u_scale[i];
      float offs = u_timeOffset[i];
      float rot = u_rot[i];

      vec2 p = (uv - center) / sc;
      p = rotate(p, rot);

      float mouseDist = length(u_mouse - center);
      float hoverEffect = smoothstep(0.6, 0.2, mouseDist);

      float t = (u_time + offs) * 0.5;

      float bloom = 0.2 + 0.2 * sin(t * 2.0) + hoverEffect * 0.8;
      float pulse = 0.6 + 0.2 * sin(t * 1.3) + hoverEffect * 0.4;

      p *= (1.0 + bloom);

      float p1 = petal(p, 0.0, 0.9, 0.8);
      float p2 = petal(p, 3.14159, 0.9, 0.8);
      float p3 = petal(p, 1.57, 0.7, 0.7);
      float p4 = petal(p, -1.57, 0.7, 0.7);

      float lip = smoothstep(0.25, 0.0, length(p * 1.3));

      float shape = max(max(p1, p2), max(p3, p4));
      shape = max(shape, lip * 0.6);

      float colorPhase = mod(float(i) * 1.0 + u_time * 0.12, 4.0);
      vec3 pink   = vec3(1.00, 0.75, 0.85);
      vec3 purple = vec3(0.78, 0.50, 0.95);
      vec3 teal   = vec3(0.40, 0.88, 0.88);
      vec3 mint   = vec3(0.60, 0.95, 0.80);

      vec3 baseColor;
      if (colorPhase < 1.0)      baseColor = mix(pink,   purple, colorPhase);
      else if (colorPhase < 2.0) baseColor = mix(purple, teal,   colorPhase - 1.0);
      else if (colorPhase < 3.0) baseColor = mix(teal,   mint,   colorPhase - 2.0);
      else                       baseColor = mix(mint,   pink,   colorPhase - 3.0);

      vec3 orchidColor = baseColor * (0.65 + 0.35 * pulse);

      float glow = 0.08 / (length(p) + 0.03);
      vec3 glowCol = baseColor * glow * 0.6;

      col += orchidColor * shape * 0.85;
      col += glowCol * 0.35;
    }

    // Fade orchids toward center — only show on side edges
    float distToEdge = min(vUv.x, 1.0 - vUv.x);
    float edgeMask = 1.0 - smoothstep(0.15, 0.29, distToEdge);
    col *= edgeMask;

    gl_FragColor = vec4(col, 1.0);
  }
`,yE=`
  uniform sampler2D tDiffuse;
  uniform vec2 resolution;
  uniform float charSize;

  void main(){
    vec2 uv = gl_FragCoord.xy / resolution.xy;
    vec2 charCoord = floor(gl_FragCoord.xy / charSize) * charSize;
    vec2 charUv = charCoord / resolution.xy;

    vec4 color = texture2D(tDiffuse, charUv);
    float brightness = (color.r + color.g + color.b) / 3.0;

    vec2 cp = mod(gl_FragCoord.xy, charSize) / charSize;

    float ch = 0.0;

    if (brightness > 0.8) {
      float d = length(cp - 0.5);
      ch = step(d, 0.4) * (1.0 - step(d, 0.25));
    } else if (brightness > 0.6) {
      ch = step(0.3, cp.x) * step(cp.x, 0.7)
         + step(0.3, cp.y) * step(cp.y, 0.7);
      ch = min(ch, 1.0);
    } else if (brightness > 0.4) {
      ch = (step(0.4, cp.x) * step(cp.x, 0.6))
         + (step(0.4, cp.y) * step(cp.y, 0.6));
      ch = min(ch, 1.0);
    } else if (brightness > 0.2) {
      float d = length(cp - 0.5);
      ch = step(d, 0.2);
    } else {
      ch = 0.0;
    }

    gl_FragColor = vec4(mix(vec3(1.0), color.rgb, ch), 1.0);
  }
`,Rc=Array.from({length:Er}).map((o,t)=>({side:t<Er/2?-1:1,relX:Math.random(),relY:Math.random()*2.4-1.2,scale:.4+Math.random()*.4,timeOffset:Math.random()*10,rotation:Math.random()*Math.PI*2}));function dg(o){const t=.46*o;return Rc.map(i=>new Ut(i.side*(t+i.relX*o*.58),i.relY))}function ME(o,t){const i=Di.useRef({x:0,y:0});Di.useEffect(()=>{if(!o.current)return;const r=o.current;let l,u,d,h,m,p,_;const g=new Lb,S=R=>{if(!o.current)return;const b=o.current.getBoundingClientRect();i.current={x:(R.clientX-b.left)/b.width*2-1,y:-((R.clientY-b.top)/b.height)*2+1}},y=()=>{if(!l||!p||!_||!h)return;const R=window.innerWidth,b=window.innerHeight,v=R/b;l.setSize(R,b),h.setSize(R,b),p.uniforms.u_resolution.value.set(R,b),p.uniforms.u_pos.value=dg(v),_.uniforms.resolution.value.set(R,b)};return window.addEventListener("mousemove",S),window.addEventListener("resize",y),(()=>{const R=window.innerWidth,b=window.innerHeight,v=R/b;for(;r.firstChild;)r.removeChild(r.firstChild);l=new vE({antialias:!0}),l.setSize(R,b),l.setClearColor(16777215,1),r.appendChild(l.domElement);const P=new Hg(-1,1,1,-1,0,1);h=new Za(R,b),p=new Mi({vertexShader:SE,fragmentShader:bE,uniforms:{u_time:{value:0},u_resolution:{value:new Ut(R,b)},u_pos:{value:dg(v)},u_scale:{value:Rc.map(B=>B.scale)},u_timeOffset:{value:Rc.map(B=>B.timeOffset)},u_rot:{value:Rc.map(B=>B.rotation)},u_mouse:{value:new Ut(0,0)}}}),u=new Gx,u.add(new Ni(new Cs(2,2),p)),_=new Mi({vertexShader:`
          varying vec2 vUv;
          void main(){ vUv = uv; gl_Position = vec4(position, 1.0); }
        `,fragmentShader:yE,uniforms:{tDiffuse:{value:h.texture},resolution:{value:new Ut(R,b)},charSize:{value:8}}}),d=new Gx,d.add(new Ni(new Cs(2,2),_));const U=()=>{if(m=requestAnimationFrame(U),t?.current)return;const B=g.getElapsedTime();p.uniforms.u_time.value=B,p.uniforms.u_mouse.value.set(i.current.x,i.current.y),l.setRenderTarget(h),l.render(u,P),l.setRenderTarget(null),l.render(d,P)};U()})(),()=>{window.removeEventListener("mousemove",S),window.removeEventListener("resize",y),cancelAnimationFrame(m);try{l&&l.dispose(),h&&h.dispose(),l?.domElement&&r&&r.removeChild(l.domElement)}catch{}}},[])}const EE="/assets/2026-diceplay-BAhFfte8.png",TE="/assets/temp-mainfig-DuKDAKM2.jpg",AE="/assets/picofme-DF0OjEZ8.png",RE="/assets/dither_it_figure-1-WdQGNKS-.png",CE="/assets/main-teaser-CydSauKE.pdf",wE="/assets/main-teaser-CAMvx4bD.png",DE="/assets/Nature-2025-SingleFibre-CBg-r0dn.pdf",UE="/assets/SIG-2026-DicePlay-CGz2ncXR.pdf",LE="/assets/AR-clip-after-intro-nPfYupHt.mp4",NE="/assets/AR-clip-intro-qC7odwYn.mp4",OE="/assets/AR-clip-spiraling-BGom1lM3.mp4",zE="/assets/AR-clip-spirals-start-D0kqEpH-.mp4",PE="/assets/aerial-reverie-BH8RUiR7.mp4",BE="/assets/process-stills-2-DEvaBqRd.webp",FE="/assets/still-1-CUgK8fv1.webp",IE="/assets/still-2-BYLTd1rL.webp",HE="/assets/still-3-CxF65Wz6.webp",GE="/assets/still-4-US1FESgZ.webp",VE="/assets/proj-page-BlErBQx5.webp",kE="/assets/thumbnail-BtqfdKpy.webp",XE="/assets/color-me-noisy-BhgiJVll.mp4",WE="/assets/final_vid-D84lpdVg.mov",qE="/assets/thumbnail-Du4sjGzG.webp",YE="/assets/header_tiles-ChXZetfR.mp4",jE="/assets/thumbnail-ByI121R6.webp",ZE="/assets/tiles_all-YAahl5WP.webp",KE="/assets/gallery-CD-gMut-.webp",QE="/assets/thumbnail2-C1idtlVw.webp",JE="/assets/header-BUg9aIuN.webp",$E="/assets/pawlink-DQJs0b9t.webp",eT="/assets/thumbnail-DngfYmwu.webp",tT="/assets/thumbnail-CQA5SIou.webp",nT="/assets/wet-dream-thumbnail-CTvNUqHN.webp",iT="/assets/wet-dream-u0ioEXOR.mp4",aT=Object.assign({"../assets/images/diceplay/2026-diceplay.png":EE,"../assets/images/diceplay/temp-mainfig.jpg":TE,"../assets/images/picofme.png":AE,"../assets/images/single-fibre/dither_it_figure-1.png":RE,"../assets/images/stitchswitch/main-teaser.pdf":CE,"../assets/images/stitchswitch/main-teaser.png":wE,"../assets/papers/Nature-2025-SingleFibre.pdf":DE,"../assets/papers/SIG-2026-DicePlay.pdf":UE,"../assets/projects/aerial-reverie/AR-clip-after-intro.mp4":LE,"../assets/projects/aerial-reverie/AR-clip-intro.mp4":NE,"../assets/projects/aerial-reverie/AR-clip-spiraling.mp4":OE,"../assets/projects/aerial-reverie/AR-clip-spirals-start.mp4":zE,"../assets/projects/aerial-reverie/aerial-reverie.mp4":PE,"../assets/projects/aerial-reverie/process-stills-2.webp":BE,"../assets/projects/aerial-reverie/still-1.webp":FE,"../assets/projects/aerial-reverie/still-2.webp":IE,"../assets/projects/aerial-reverie/still-3.webp":HE,"../assets/projects/aerial-reverie/still-4.webp":GE,"../assets/projects/aligned/proj-page.webp":VE,"../assets/projects/aligned/thumbnail.webp":kE,"../assets/projects/color-me-noisy/color-me-noisy.mp4":XE,"../assets/projects/color-me-noisy/final_vid.mov":WE,"../assets/projects/color-me-noisy/thumbnail.webp":qE,"../assets/projects/kinetic-pixels/header_tiles.mp4":YE,"../assets/projects/kinetic-pixels/thumbnail.webp":jE,"../assets/projects/kinetic-pixels/tiles_all.webp":ZE,"../assets/projects/nuwa/gallery.webp":KE,"../assets/projects/nuwa/thumbnail2.webp":QE,"../assets/projects/pawlink/header.webp":JE,"../assets/projects/pawlink/pawlink.webp":$E,"../assets/projects/pawlink/thumbnail.webp":eT,"../assets/projects/spirit-oasis/thumbnail.webp":tT,"../assets/projects/wet-dream/wet-dream-thumbnail.webp":nT,"../assets/projects/wet-dream/wet-dream.mp4":iT}),Qt=o=>{if(!o)return"";const i=`../assets/${o.replace(/^\.?\/?src\/assets\/?/,"").replace(/^\.?\/?assets\/?/,"")}`;return aT[i]||""},ph=[{id:1,title:"Kinetic Pixels",category:"Tech",thumbnail:Qt("/src/assets/projects/kinetic-pixels/thumbnail.webp"),description:"Kinetic Pixels explores data as cultural material to be crafted and dynamically configured by coordinated robots.",fullDescription:`Kinetic Pixels explores data as cultural material by transforming symbolic, geographic, and historical information into evolving mosaics that can be assembled by coordinated aerial robots. Drawing inspiration from modular tile traditions across cultures, the project develops computational grammars that generate distinct yet structurally related patterns, translating cultural information into dynamic forms of architectural ornament.

Through simulations of robotic swarm construction, these digital mosaics are visualized as physically realizable assemblies, connecting abstract computational rules with robotic fabrication. Kinetic Pixels ultimately asks how autonomous systems can contribute to the cultural production of material patterns, positioning computation not only as a tool for fabrication but as a new medium for architectural expression.`,tags:["Simulation","Generative"],details:{year:"Fall 2025",role:"Solo",mediums:"Python, ROS, MatLab"},images:[{type:"video",src:Qt("/src/assets/projects/kinetic-pixels/header_tiles.mp4"),layout:"full",autoplay:!0},{src:Qt("/src/assets/projects/kinetic-pixels/tiles_all.webp"),layout:"full"}]},{id:2,title:"PawLink",category:"Tech",thumbnail:Qt("/src/assets/projects/pawlink/thumbnail.webp"),description:"Smart-fabric collar with embedded sensors for continuous animal health monitoring",fullDescription:`PawLink is an integrated smart-fabric collar that leverages thermally drawn fiber technology with embedded capacitive and thermistor sensors to enable continuous, fabric-level inference.

A compact ML classifier runs on collar-side data to detect behavioral patterns such as excessive scratching (linked to allergies, infections, or skin irritation), track temperature changes and activity levels for health and exercise monitoring, and activate a safety protocol: a "Lost Mode" that detects nearby humans to broadcast signals.

PawLink demonstrates how computational textiles can function as compassionate, adaptive interfaces for animal wellbeing.

In collaboration with Cheska Chiang.`,tags:["Wearables","ML","Hardware"],details:{year:"Fall 2023",role:"Software & Hardware Integration, Product Design",mediums:"Arduino, ML, Thermally Drawn Fibers, Weaving Loom, Metal Hardware"},images:[{src:Qt("/src/assets/projects/pawlink/pawlink.webp"),layout:"full"}]},{id:6,title:"Aerial Reverie",category:"Tech",thumbnail:Qt("/src/assets/projects/aerial-reverie/still-1.webp"),description:"An immersive VR storyworld illuminated by coordinated Crazyflie drone flight paths",fullDescription:`Aerial Reverie is an immersive VR storyworld illuminated by the motion of Crazyflie drones, their coordinated flight paths controlled via Python and ROS. The choreographed trajectories assemble a dynamic cityscape that becomes both simulation and narrative device, examining collective intelligence, industrial expansion, and the tension between nature, home, and rapidly evolving built environments.

In collaboration with Izzy (Zigzag) Hettmansperger and Rosella Liu.`,tags:["VR","Robotics"],details:{year:"Spring 2024",role:"Creative Director, Programming, 3D Modeling",mediums:"Python, ROS, Crazyflie Drones, Blender, After Effects, Ableton Live, Meta Quest 2"},images:[{type:"video",src:Qt("/src/assets/projects/aerial-reverie/aerial-reverie.mp4"),layout:"full"},{type:"video-row",items:[Qt("/src/assets/projects/aerial-reverie/AR-clip-intro.mp4"),Qt("/src/assets/projects/aerial-reverie/AR-clip-after-intro.mp4"),Qt("/src/assets/projects/aerial-reverie/AR-clip-spirals-start.mp4"),Qt("/src/assets/projects/aerial-reverie/AR-clip-spiraling.mp4")]},{type:"image",src:Qt("/src/assets/projects/aerial-reverie/process-stills-2.webp"),layout:"full"}]},{id:3,title:"Aligned",category:"Tech",thumbnail:Qt("/src/assets/projects/aligned/thumbnail.webp"),description:"Smart-fabric posture-sensing system with real-time ML-based detection and haptic feedback",fullDescription:`Aligned is a smart-fabric posture-sensing system integrating a custom PCB with four I²C-networked accelerometers and a vibration motor for haptic feedback. A lightweight machine-learning model distinguishes upright vs. slouched posture in real time, forming the foundation for a textile-embedded interface that supports healthier body awareness.

The system includes both a fully functioning prototype demonstrating real-time posture detection and a complete hardware pipeline, from circuit schematic to manufactured PCB, ready for textile integration in future iterations.

In collaboration with Alec Lippman.`,tags:["Wearables","ML","Hardware"],details:{year:"Fall 2024 – Spring 2025",role:"Software Lead, Hardware",mediums:"KiCad, Custom PCB, I²C, ML, Haptic Feedback"},images:[{src:Qt("/src/assets/projects/aligned/proj-page.webp"),layout:"full"}]},{id:4,title:"NÜWA",category:"Art",thumbnail:Qt("/src/assets/projects/nuwa/thumbnail2.webp"),description:"Modernized hanfu and qipao challenging techno-Orientalist narratives through textile craft",fullDescription:`Showcased at Fashion@Brown Runway Show 2024 & Rhode Island Fashion Week 2024.

Ancient deity, new cyborg. One with earth, integrated in cyberspace.

In techno-Orientalism, the West views the Chinese body in contradicting space-times: a relic of the past and a future both feared and desired. It seeks to collect a drop of what the Chinese body can provide — culture, technology, sex — and in turn, create a perverse reality with its voyeuristic eyes.

How can women of the Chinese diaspora reject and subsequently remake this techno-orientalist framework?

Embody the paradox of temporalities and collapse contrasting timescales into the present moment. Primordial, earth-forming goddess and futuristic robot condensed into one in the Now: the modern woman. Fetishization, subjugation by the malicious eye — we repair the wounds of our broken heavens with our molded clay bodies and the garments that adorn them.

By crafting modernized hanfu and qipao dresses, interweaving the histories of silk and brocade with technology, the Chinese body is situated in all timeframes, toppling the binarist narrative generated by the West. Placed before the public eye, Nüwa asks the audience to confront the simultaneous pleasure and discomfort of the techno-Orientalist paradigm.`,tags:["Fashion","Hardware"],details:{year:"Spring 2024",role:"Solo",mediums:"Brocade, Silk, LEDs"},images:[{src:Qt("/src/assets/projects/nuwa/gallery.webp"),layout:"full"}]},{id:8,title:"Color Me Noisy",category:"Tech",thumbnail:Qt("/src/assets/projects/color-me-noisy/thumbnail.webp"),description:"Reimplementation of an example-based pipeline for hand-colored animation rendering.",fullDescription:`For CSCI 2240: Advanced Computer Graphics, we reimplemented the paper Color Me Noisy: Example-based Rendering of Hand-colored Animations with Temporal Noise Control. The method stylizes 3D animations with the appearance of hand-colored 2D artwork by transferring the visual characteristics of an example texture while maintaining temporal consistency across animation frames.

The implementation follows a multi-scale synthesis pipeline, progressively refining each frame from coarse to fine resolutions to propagate texture appearance while reducing flickering between consecutive frames. Core components include image pyramid construction, predeformation, patch-based texture synthesis using PatchMatch, and iterative upsampling and refinement to produce temporally stable, stylized animations. My primary contribution was implementing the bilinear interpolation used in the upsampling and downsampling stages of the image pyramid.

In collaboration with Sherry Zhang, Lexi Henrion, and Apoorva Talwalkar.`,tags:["Graphics"],details:{year:"Spring 2025",role:"Bilinear Interpolation, Image Pyramid",mediumsLabel:"Language",mediums:"C++"},links:[{label:"Color Me Noisy Paper",url:"https://cragl.cs.gmu.edu/noisy/"},{label:"GitHub",url:"https://github.com/Lenrion/ColorMeNoisy"}],images:[{type:"video",src:Qt("/src/assets/projects/color-me-noisy/color-me-noisy.mp4")}]},{id:5,title:"Spirit Oasis",category:"Tech",thumbnail:Qt("/src/assets/projects/spirit-oasis/thumbnail.webp"),description:"A reimagined 3D scene from Avatar: The Last Airbender with realistic water and lighting",fullDescription:`This project is a reimagination of a scene in the episode 'The Siege of the North' from Avatar: the Last Airbender. In the Spirit Oasis, two koi fish Tui and La maintain the balance between the Earth and the Moon. When the fish are disturbed, chaos ensues.

Using ThreeJS and Blender, we modeled this scene using realistic water effects, lighting changes, and koi fish interaction.

In collaboration with Claire Yang, Beatrice Hoang, and Joe Maffa.`,tags:["Graphics","Modeling"],details:{year:"Fall 2024",role:"Procedural Water + Grass, Custom Watercolor Toon Shading, 3D Modeling",mediums:"Three.js, Blender, GLSL"},images:[{type:"iframe",src:"https://spirit-oasis.vercel.app/",layout:"full"}]},{id:7,title:"Wet Dream",category:"Art",thumbnail:Qt("/src/assets/projects/wet-dream/wet-dream-thumbnail.webp"),description:"A surreal 3D animated film inspired by ecofeminism and Eastern folklore.",fullDescription:`Wet Dream aims to visualize the interconnection of bodily and botanical visions as a form of liberating the female body by representing it through digitally crafted natural and surreal landscapes. We explore this imagery through the lens of eco-feminism and techno-orientalism – taking heavy inspiration from Eastern folktales as a way of exploring how we've historically imagined and understood the female body and its relationship to nature.

Through layered symbols, the film aims to visualize the spiritual and cultural significance of botanical history while critiquing and expanding upon the representations of femininity.

Directed by Anita Yen and Erin Xi · Produced by Erin Xi and Helen Lu · Original Music by Morning Close · 3D Artists: Anita Yen, Erin Xi, Vivian Li, Winnie Yi · Choreographer: Julia Fu`,tags:["Animation","Modeling"],details:{year:"Spring 2024",role:"3D Artist",mediums:"Blender, Unreal, Marvelous Designer"},images:[{type:"video",src:Qt("/src/assets/projects/wet-dream/wet-dream.mp4")}]}],rT={position:"fixed",top:0,left:0,right:0,padding:"0.65rem 2rem",background:"rgba(0, 0, 0, 0.92)",backdropFilter:"blur(12px)",borderBottom:"1px solid rgba(255,255,255,0.07)",boxShadow:"0 2px 16px rgba(0,0,0,0.25)",zIndex:100,display:"flex",alignItems:"center"},bc={background:"none",border:"none",color:"white",cursor:"pointer",fontSize:"1rem",opacity:.85,transition:"opacity 0.2s"};function sT({scrollToSection:o}){return _e.jsxs("nav",{style:rT,children:[_e.jsxs("div",{className:"nav-dither","aria-hidden":"true",children:[_e.jsx("div",{className:"nav-dither-band band-1"}),_e.jsx("div",{className:"nav-dither-band band-2"}),_e.jsx("div",{className:"nav-dither-band band-3"}),_e.jsx("div",{className:"nav-dither-band band-4"})]}),_e.jsx("div",{className:"font-argent-normal",style:{fontSize:"1.3rem",fontWeight:"400",color:"white"},children:"vivian li"}),_e.jsx("div",{className:"nav-decorative"}),_e.jsxs("div",{className:"nav-links",children:[_e.jsx("button",{className:"font-argent-normal",onClick:()=>o("about"),style:bc,onMouseEnter:t=>t.target.style.opacity=1,onMouseLeave:t=>t.target.style.opacity=.8,children:"About"}),_e.jsx("button",{className:"font-argent-normal",onClick:()=>o("publications"),style:bc,onMouseEnter:t=>t.target.style.opacity=1,onMouseLeave:t=>t.target.style.opacity=.8,children:"Publications"}),_e.jsx("button",{className:"font-argent-normal",onClick:()=>o("portfolio"),style:bc,onMouseEnter:t=>t.target.style.opacity=1,onMouseLeave:t=>t.target.style.opacity=.8,children:"Projects"}),_e.jsx("button",{className:"font-argent-normal",style:{...bc,cursor:"default",opacity:.4},children:"CV"})]})]})}const oT="/assets/picofme-DF0OjEZ8.png",Ss=2,lT=[[1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,1,1],[1,0,1,0,0,0,0,0,0,0,1,0,1],[1,0,0,1,0,0,0,0,0,1,0,0,1],[1,0,0,0,1,0,0,0,1,0,0,0,1],[1,0,0,0,0,1,0,1,0,0,0,0,1],[1,0,0,0,0,0,1,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1]],cT=[[1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,1],[1,0,1,0,1,0,0,1,0,1],[1,0,0,0,1,1,1,1,0,1],[1,0,1,0,1,0,0,1,0,1],[1,0,1,0,1,0,0,1,0,1],[1,0,1,0,1,0,0,1,0,1],[1,0,1,0,1,0,0,1,0,1],[1,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1]];function hg({pixels:o,color:t="currentColor"}){const i=o[0].length*Ss,r=o.length*Ss;return _e.jsx("svg",{width:Math.round(i*.75),height:Math.round(r*.75),viewBox:`0 0 ${i} ${r}`,"aria-hidden":"true",style:{display:"block",flexShrink:0},children:o.flatMap((l,u)=>l.map((d,h)=>d?_e.jsx("rect",{x:h*Ss,y:u*Ss,width:Ss,height:Ss,fill:t},`${u}-${h}`):null))})}const pg={display:"inline-flex",alignItems:"center",justifyContent:"center",padding:"0.3rem",borderRadius:"4px",background:"rgba(255,255,255,0.82)",border:"1.5px solid rgba(0,0,0,0.18)",color:"rgba(0,0,0,0.72)",textDecoration:"none",cursor:"pointer",transition:"background 0.15s, border-color 0.15s"};function uT(){return _e.jsxs("div",{id:"about",className:"hero-container",children:[_e.jsx("h1",{className:"font-argent-italic",style:{fontSize:"3.6rem",fontWeight:"100",marginBottom:"1.5rem",textShadow:"none",textAlign:"center"},children:"vivian li"}),_e.jsxs("div",{className:"portrait-bio-row",children:[_e.jsx("div",{style:{flexShrink:0,display:"flex"},children:_e.jsx("img",{src:oT,alt:"Vivian Li",className:"portrait-img"})}),_e.jsxs("div",{className:"bio-section",style:{flex:1},children:[_e.jsx("div",{style:{fontSize:"0.7rem",fontWeight:"600",letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(0,0,0,0.4)",marginBottom:"0.25rem"},children:"about me"}),_e.jsxs("p",{style:{fontFamily:'"Plus Jakarta Sans", sans-serif',fontSize:"1rem",lineHeight:"1.6",textShadow:"none",margin:0},children:["I am a Research Assistant in the"," ",_e.jsx("a",{href:"https://www.computationaldesign.group/",target:"_blank",rel:"noreferrer",style:{color:"rgb(0,120,130)",textDecorationColor:"rgba(0,120,130,0.4)"},children:"Computational Design Group"})," ","at Brown Visual Computing, advised by Professor"," ",_e.jsx("a",{href:"https://www.computationaldesign.group/adriana",target:"_blank",rel:"noreferrer",style:{color:"rgb(0,120,130)",textDecorationColor:"rgba(0,120,130,0.4)"},children:"Adriana Schulz"}),". I recently completed my B.S. in Computer Science and M.S. in Electrical and Computer Engineering at Brown University.",_e.jsx("br",{}),_e.jsx("br",{}),"My research is in ",_e.jsx("strong",{children:"computational design and fabrication"})," at the intersection of"," ",_e.jsx("strong",{children:"computer graphics"})," and ",_e.jsx("strong",{children:"human-computer interaction"}),". I develop interactive systems and computational methods that enable the design and fabrication of novel physical artifacts.",_e.jsx("br",{}),_e.jsx("br",{}),"For more information, please see my CV."]}),_e.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.35rem",flexWrap:"wrap"},children:[_e.jsx("a",{href:"mailto:vivian_li1@brown.edu",title:"Email",style:pg,onMouseEnter:o=>{o.currentTarget.style.background="rgba(0,0,0,0.07)",o.currentTarget.style.borderColor="rgba(0,0,0,0.28)"},onMouseLeave:o=>{o.currentTarget.style.background="rgba(255,255,255,0.82)",o.currentTarget.style.borderColor="rgba(0,0,0,0.18)"},children:_e.jsx(hg,{pixels:lT})}),_e.jsx("a",{href:"https://www.linkedin.com/in/vivianxli/",target:"_blank",rel:"noreferrer",title:"LinkedIn",style:pg,onMouseEnter:o=>{o.currentTarget.style.background="rgba(0,0,0,0.07)",o.currentTarget.style.borderColor="rgba(0,0,0,0.28)"},onMouseLeave:o=>{o.currentTarget.style.background="rgba(255,255,255,0.82)",o.currentTarget.style.borderColor="rgba(0,0,0,0.18)"},children:_e.jsx(hg,{pixels:cT})})]})]})]})]})}const fT="/assets/SIG-2026-DicePlay-CGz2ncXR.pdf",dT="/assets/Nature-2025-SingleFibre-CBg-r0dn.pdf",hT="/assets/main-teaser-CAMvx4bD.png",pT=[{id:"stitchswitch",title:"StitchSwitch: Programmable Surface Deformation and Bistability in Embroidered Textiles",authors:"Vivian Li, Milin Kodnongbua, Heather Robertson, Yiyue Luo, Adriana Schulz",venue:"UIST (Accepted) • 2026",thumbnail:hT,thumbnailFit:"contain",pageUrl:null,paperUrl:null},{id:"diceplay",title:"Diceplay: A Modular Canvas for Physical Image Composition",authors:"Milin Kodnongbua, Zihan Jack Zhang, Shishi Xiao, Vivian Li, Heather Robertson, Rulin Chen, David Laidlaw, Adriana Schulz",venue:"SIGGRAPH • 2026",thumbnail:Qt("/src/assets/images/diceplay/2026-diceplay.png"),thumbnailFit:"contain",pageUrl:"https://www.computationaldesign.group/publications/diceplay",paperUrl:fT},{id:"nature",title:"A single-fibre computer enables textile networks and distributed inference",authors:"Nikhil Gupta, Henry Cheung, Syamantak Payra, Gabriel Loke, Jenny Li, Yongyi Zhao, Latika Balachander, Ella Son, Vivian Li, Samuel Kravitz, Sehar Lohawala, John Joannopoulos & Yoel Fink",venue:"Nature • 2025",thumbnail:Qt("/src/assets/images/single-fibre/dither_it_figure-1.png"),thumbnailFit:"cover",pageUrl:"https://www.nature.com/articles/s41586-024-08568-6",paperUrl:dT}],mT=(o,t)=>{const i=o.split(t);return i.length===1?o:_e.jsxs(_e.Fragment,{children:[i[0],_e.jsx("span",{style:{fontWeight:"600",color:"rgba(0, 0, 0, 0.9)"},children:t}),i[1]]})};function xT(){return _e.jsxs("div",{id:"publications",className:"section-container",children:[_e.jsx("h2",{className:"font-argent-normal",style:{fontSize:"2rem",fontWeight:"300",marginTop:0,marginBottom:"0.6rem",textAlign:"center",textShadow:"none"},children:"publications"}),pT.map(o=>_e.jsxs("div",{className:"pub-card",children:[o.thumbnail?o.thumbnailFit==="contain"?_e.jsx("div",{className:"pub-thumb-wrap",children:_e.jsx("img",{src:o.thumbnail,alt:o.title,style:{width:"100%",height:"100%",objectFit:"contain"}})}):_e.jsx("img",{src:o.thumbnail,alt:o.title,className:"pub-thumb-img"}):_e.jsx("div",{className:"pub-thumb-wrap",style:{background:"rgba(0,0,0,0.04)"}}),_e.jsxs("div",{style:{flex:1},children:[_e.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:"400",marginTop:0,marginBottom:"0.25rem"},children:o.title}),_e.jsx("p",{style:{fontSize:"0.85rem",color:"rgba(0, 0, 0, 0.6)",marginBottom:"0.25rem"},children:mT(o.authors,"Vivian Li")}),_e.jsx("p",{style:{fontSize:"0.9rem",color:"rgba(0, 0, 0, 0.45)",marginBottom:"0.5rem"},children:o.venue}),(o.pageUrl||o.paperUrl)&&_e.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[o.pageUrl&&_e.jsx("a",{href:o.pageUrl,target:"_blank",rel:"noreferrer",className:"link-btn",children:"Page"}),o.paperUrl&&_e.jsx("a",{href:o.paperUrl,target:"_blank",rel:"noreferrer",className:"link-btn",children:"Paper"})]})]})]},o.id))]})}const gT=["All","Tech","Art"];function _T({portfolioItems:o,activeFilter:t,setActiveFilter:i,onSelectProject:r}){const l=t==="All"?o:o.filter(u=>u.category===t);return _e.jsxs("div",{id:"portfolio",className:"section-container",children:[_e.jsx("h2",{className:"font-argent-normal",style:{fontSize:"2rem",fontWeight:"300",marginTop:0,marginBottom:"0.6rem",textAlign:"center",textShadow:"none"},children:"projects"}),_e.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"1rem",marginBottom:"2rem"},children:gT.map(u=>_e.jsx("button",{onClick:()=>i(u),style:{background:t===u?"rgba(0, 0, 0, 0.1)":"transparent",backdropFilter:"blur(10px)",border:`1px solid ${t===u?"rgba(0, 0, 0, 0.3)":"rgba(0, 0, 0, 0.15)"}`,borderRadius:"20px",padding:"0.5rem 1.5rem",color:"black",cursor:"pointer",fontSize:"0.9rem",fontWeight:t===u?"500":"300",transition:"all 0.3s ease"},onMouseEnter:d=>{t!==u&&(d.target.style.background="rgba(0, 0, 0, 0.05)",d.target.style.borderColor="rgba(0, 0, 0, 0.2)")},onMouseLeave:d=>{t!==u&&(d.target.style.background="transparent",d.target.style.borderColor="rgba(0, 0, 0, 0.15)")},children:u},u))}),_e.jsx("div",{className:"projects-grid",children:l.map(u=>_e.jsxs("div",{onClick:()=>r(u),style:{background:"rgba(255, 255, 255, 0.85)",backdropFilter:"blur(10px)",border:"1px solid rgba(0, 0, 0, 0.1)",borderRadius:"8px",overflow:"hidden",cursor:"pointer",transition:"transform 0.2s, border-color 0.2s"},onMouseEnter:d=>{d.currentTarget.style.transform="translateY(-4px)",d.currentTarget.style.borderColor="rgba(0, 0, 0, 0.2)"},onMouseLeave:d=>{d.currentTarget.style.transform="translateY(0)",d.currentTarget.style.borderColor="rgba(0, 0, 0, 0.1)"},children:[_e.jsx("div",{style:{width:"100%",height:"200px",background:"rgba(0, 0, 0, 0.04)",position:"relative",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"},children:u.thumbnail?_e.jsx("img",{src:u.thumbnail,alt:u.title,style:{width:"100%",height:"100%",objectFit:"cover",opacity:1}}):_e.jsx("span",{style:{fontSize:"0.8rem",color:"rgba(0, 0, 0, 0.3)"},children:"Project Image"})}),_e.jsxs("div",{style:{padding:"1.5rem"},children:[_e.jsxs("div",{className:"project-card-header",children:[_e.jsx("h3",{style:{fontSize:"1.05rem",fontWeight:"400",margin:0},children:u.title}),u.tags?.length>0&&_e.jsx("div",{className:"project-card-tags",children:u.tags.map(d=>_e.jsx("span",{style:{fontSize:"0.75rem",color:"rgba(90, 90, 185, 0.9)",background:"rgba(180, 180, 255, 0.18)",border:"1px solid rgba(160, 160, 240, 0.35)",borderRadius:"10px",padding:"0.15rem 0.55rem"},children:d},d))})]}),_e.jsx("p",{style:{fontSize:"0.85rem",fontWeight:300,color:"rgba(0, 0, 0, 0.6)",margin:0},children:u.description})]})]},u.id))})]})}const Ed=[{label:null,bg:"rgba(0,0,0,0.06)",border:"rgba(0,0,0,0.1)",color:"rgba(0,0,0,0.55)"},{label:"Role",bg:"rgba(120,80,200,0.07)",border:"rgba(120,80,200,0.2)",color:"rgba(90,50,170,0.8)"},{label:"Mediums",bg:"rgba(40,160,140,0.07)",border:"rgba(40,160,140,0.2)",color:"rgba(20,120,105,0.85)"}];function vT({image:o,projectTitle:t}){if(o.type==="iframe")return _e.jsx("div",{style:{position:"relative",width:"100%",paddingBottom:"56.25%",height:0,background:"rgba(0,0,0,0.03)"},children:_e.jsx("iframe",{src:o.src,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"none"},loading:"lazy",allow:"fullscreen"})});if(o.type==="video-row")return _e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"0.5rem"},children:o.items.map((i,r)=>_e.jsx("video",{src:i,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"auto",style:{width:"100%",height:"auto",display:"block",borderRadius:"4px",objectFit:"cover"}},r))});if(o.type==="video"){const i=!!o.autoplay;return _e.jsx("video",{src:o.src,autoPlay:i,loop:i,muted:i,controls:!i,playsInline:!0,preload:i?"auto":"metadata",style:{width:"100%",height:"auto",display:"block",objectFit:"cover",pointerEvents:i?"none":"auto"}})}return o.src?_e.jsx("img",{src:o.src,alt:t,loading:"lazy",style:{width:"100%",height:"auto",display:"block",objectFit:"cover"}}):null}function ST({selectedProject:o,portfolioItems:t,onClose:i,onSelect:r}){const l=Di.useRef({});return Di.useEffect(()=>{const u=l.current[o.id];u&&u.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})},[o.id]),_e.jsx("div",{className:"modal-overlay",onClick:u=>{u.target===u.currentTarget&&i()},children:_e.jsxs("div",{className:"modal-inner",children:[_e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.6rem 0.75rem",borderBottom:"1px solid rgba(0, 0, 0, 0.08)",overflowX:"auto",flexShrink:0,background:"white"},children:[t.map(u=>_e.jsx("div",{ref:d=>{l.current[u.id]=d},onClick:()=>r(u),title:u.title,style:{width:"72px",height:"48px",borderRadius:"5px",overflow:"hidden",cursor:"pointer",flexShrink:0,border:o.id===u.id?"2px solid rgba(0,0,0,0.7)":"2px solid transparent",opacity:o.id===u.id?1:.45,transition:"opacity 0.15s, border-color 0.15s"},onMouseEnter:d=>{o.id!==u.id&&(d.currentTarget.style.opacity=.75)},onMouseLeave:d=>{o.id!==u.id&&(d.currentTarget.style.opacity=.45)},children:_e.jsx("img",{src:u.thumbnail,alt:u.title,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})},u.id)),_e.jsx("button",{onClick:i,className:"modal-close-btn",style:{marginLeft:"auto",flexShrink:0,background:"none",border:"1px solid rgba(0,0,0,0.15)",borderRadius:"50%",width:"32px",height:"32px",cursor:"pointer",fontSize:"1.2rem",color:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",padding:0},onMouseEnter:u=>{u.currentTarget.style.background="rgba(0,0,0,0.06)",u.currentTarget.style.color="black"},onMouseLeave:u=>{u.currentTarget.style.background="none",u.currentTarget.style.color="rgba(0,0,0,0.5)"},children:_e.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none","aria-hidden":"true",children:[_e.jsx("line",{x1:"1",y1:"1",x2:"11",y2:"11",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),_e.jsx("line",{x1:"11",y1:"1",x2:"1",y2:"11",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})})]}),_e.jsxs("div",{style:{overflowY:"auto",flex:1},children:[_e.jsxs("div",{style:{padding:"1.25rem 1.75rem 0.75rem"},children:[_e.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"0.75rem",marginBottom:"0.5rem"},children:[_e.jsx("h2",{className:"font-argent-normal",style:{fontSize:"1.7rem",fontWeight:"300",margin:0,textShadow:"none"},children:o.title}),_e.jsx("span",{style:{fontSize:"0.75rem",color:"rgba(0,0,0,0.4)",textTransform:"uppercase",letterSpacing:"0.1em"},children:o.category})]}),_e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.35rem",marginBottom:"0.9rem"},children:[{...Ed[0],val:o.details.year},{...Ed[1],label:o.details.roleLabel??"Role",val:o.details.role},{...Ed[2],label:o.details.mediumsLabel??"Mediums",val:o.details.mediums}].map(({label:u,val:d,bg:h,border:m,color:p})=>_e.jsxs("span",{style:{fontSize:"0.82rem",color:p,background:h,border:`1px solid ${m}`,borderRadius:"20px",padding:"0.28rem 0.85rem"},children:[u&&_e.jsxs("span",{style:{fontWeight:600,marginRight:"0.3rem"},children:[u,":"]}),d]},u??"year"))}),_e.jsx("p",{style:{fontSize:"0.9rem",fontWeight:300,color:"rgba(0, 0, 0, 0.65)",lineHeight:"1.6",whiteSpace:"pre-line",margin:0},children:o.fullDescription}),o.links?.length>0&&_e.jsx("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap",marginTop:"0.9rem"},children:o.links.map(({label:u,url:d})=>_e.jsx("a",{href:d,target:"_blank",rel:"noreferrer",className:"link-btn",children:u},u))})]}),_e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem",padding:"0.75rem 1rem 1.5rem"},children:o.images.map((u,d)=>_e.jsx("div",{style:{width:"100%",background:"transparent",overflow:"hidden"},children:_e.jsx(vT,{image:u,projectTitle:o.title})},d))})]})]})})}function qg(o){return o.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")}function bT(o){return ph.find(t=>qg(t.title)===o)??null}function yT(){const o=Di.useRef(null),t=Di.useRef(!1),[i,r]=Di.useState("All"),[l,u]=Di.useState(null);ME(o,t);const d=p=>{document.getElementById(p)?.scrollIntoView({behavior:"smooth",block:"start"})};Di.useEffect(()=>{const p=()=>{const _=window.location.hash.slice(1),g=_?bT(_):null;t.current=!!g,u(g)};return p(),window.addEventListener("popstate",p),()=>window.removeEventListener("popstate",p)},[]);const h=p=>{t.current=!0,u(p),window.history.pushState({projectId:p.id},"",`#${qg(p.title)}`)},m=()=>{t.current=!1,u(null),window.history.pushState(null,"",window.location.pathname)};return _e.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"auto"},children:[_e.jsx("div",{ref:o,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:0}}),_e.jsxs("div",{style:{position:"relative",zIndex:1,color:"black"},children:[l&&_e.jsx(ST,{selectedProject:l,portfolioItems:ph,onClose:m,onSelect:h}),_e.jsx(sT,{scrollToSection:d}),_e.jsx(uT,{}),_e.jsx(xT,{}),_e.jsx(_T,{portfolioItems:ph,activeFilter:i,setActiveFilter:r,onSelectProject:h})]})]})}function MT(){return _e.jsx(yT,{})}lS.createRoot(document.getElementById("root")).render(_e.jsx(eS.StrictMode,{children:_e.jsx(MT,{})}));
