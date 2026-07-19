(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function mx(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Vf={exports:{}},Eo={};var sg;function ZA(){if(sg)return Eo;sg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Eo.Fragment=t,Eo.jsx=i,Eo.jsxs=i,Eo}var og;function KA(){return og||(og=1,Vf.exports=ZA()),Vf.exports}var he=KA(),kf={exports:{}},rt={};var lg;function $A(){if(lg)return rt;lg=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),v=Symbol.iterator;function b(L){return L===null||typeof L!="object"?null:(L=v&&L[v]||L["@@iterator"],typeof L=="function"?L:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,S={};function A(L,ae,be){this.props=L,this.context=ae,this.refs=S,this.updater=be||T}A.prototype.isReactComponent={},A.prototype.setState=function(L,ae){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,ae,"setState")},A.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function B(){}B.prototype=A.prototype;function U(L,ae,be){this.props=L,this.context=ae,this.refs=S,this.updater=be||T}var z=U.prototype=new B;z.constructor=U,C(z,A.prototype),z.isPureReactComponent=!0;var k=Array.isArray;function N(){}var P={H:null,A:null,T:null,S:null},ne=Object.prototype.hasOwnProperty;function w(L,ae,be){var Ee=be.ref;return{$$typeof:o,type:L,key:ae,ref:Ee!==void 0?Ee:null,props:be}}function R(L,ae){return w(L.type,ae,L.props)}function V(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function ee(L){var ae={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(be){return ae[be]})}var oe=/\/+/g;function ge(L,ae){return typeof L=="object"&&L!==null&&L.key!=null?ee(""+L.key):ae.toString(36)}function fe(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(N,N):(L.status="pending",L.then(function(ae){L.status==="pending"&&(L.status="fulfilled",L.value=ae)},function(ae){L.status==="pending"&&(L.status="rejected",L.reason=ae)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function O(L,ae,be,Ee,Oe){var te=typeof L;(te==="undefined"||te==="boolean")&&(L=null);var le=!1;if(L===null)le=!0;else switch(te){case"bigint":case"string":case"number":le=!0;break;case"object":switch(L.$$typeof){case o:case t:le=!0;break;case _:return le=L._init,O(le(L._payload),ae,be,Ee,Oe)}}if(le)return Oe=Oe(L),le=Ee===""?"."+ge(L,0):Ee,k(Oe)?(be="",le!=null&&(be=le.replace(oe,"$&/")+"/"),O(Oe,ae,be,"",function(Xe){return Xe})):Oe!=null&&(V(Oe)&&(Oe=R(Oe,be+(Oe.key==null||L&&L.key===Oe.key?"":(""+Oe.key).replace(oe,"$&/")+"/")+le)),ae.push(Oe)),1;le=0;var we=Ee===""?".":Ee+":";if(k(L))for(var Ge=0;Ge<L.length;Ge++)Ee=L[Ge],te=we+ge(Ee,Ge),le+=O(Ee,ae,be,te,Oe);else if(Ge=b(L),typeof Ge=="function")for(L=Ge.call(L),Ge=0;!(Ee=L.next()).done;)Ee=Ee.value,te=we+ge(Ee,Ge++),le+=O(Ee,ae,be,te,Oe);else if(te==="object"){if(typeof L.then=="function")return O(fe(L),ae,be,Ee,Oe);throw ae=String(L),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.")}return le}function j(L,ae,be){if(L==null)return L;var Ee=[],Oe=0;return O(L,Ee,"","",function(te){return ae.call(be,te,Oe++)}),Ee}function q(L){if(L._status===-1){var ae=L._result;ae=ae(),ae.then(function(be){(L._status===0||L._status===-1)&&(L._status=1,L._result=be)},function(be){(L._status===0||L._status===-1)&&(L._status=2,L._result=be)}),L._status===-1&&(L._status=0,L._result=ae)}if(L._status===1)return L._result.default;throw L._result}var _e=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ae=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(ae))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},Ae={map:j,forEach:function(L,ae,be){j(L,function(){ae.apply(this,arguments)},be)},count:function(L){var ae=0;return j(L,function(){ae++}),ae},toArray:function(L){return j(L,function(ae){return ae})||[]},only:function(L){if(!V(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return rt.Activity=x,rt.Children=Ae,rt.Component=A,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=U,rt.StrictMode=r,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=P,rt.__COMPILER_RUNTIME={__proto__:null,c:function(L){return P.H.useMemoCache(L)}},rt.cache=function(L){return function(){return L.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(L,ae,be){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Ee=C({},L.props),Oe=L.key;if(ae!=null)for(te in ae.key!==void 0&&(Oe=""+ae.key),ae)!ne.call(ae,te)||te==="key"||te==="__self"||te==="__source"||te==="ref"&&ae.ref===void 0||(Ee[te]=ae[te]);var te=arguments.length-2;if(te===1)Ee.children=be;else if(1<te){for(var le=Array(te),we=0;we<te;we++)le[we]=arguments[we+2];Ee.children=le}return w(L.type,Oe,Ee)},rt.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},rt.createElement=function(L,ae,be){var Ee,Oe={},te=null;if(ae!=null)for(Ee in ae.key!==void 0&&(te=""+ae.key),ae)ne.call(ae,Ee)&&Ee!=="key"&&Ee!=="__self"&&Ee!=="__source"&&(Oe[Ee]=ae[Ee]);var le=arguments.length-2;if(le===1)Oe.children=be;else if(1<le){for(var we=Array(le),Ge=0;Ge<le;Ge++)we[Ge]=arguments[Ge+2];Oe.children=we}if(L&&L.defaultProps)for(Ee in le=L.defaultProps,le)Oe[Ee]===void 0&&(Oe[Ee]=le[Ee]);return w(L,te,Oe)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(L){return{$$typeof:h,render:L}},rt.isValidElement=V,rt.lazy=function(L){return{$$typeof:_,_payload:{_status:-1,_result:L},_init:q}},rt.memo=function(L,ae){return{$$typeof:p,type:L,compare:ae===void 0?null:ae}},rt.startTransition=function(L){var ae=P.T,be={};P.T=be;try{var Ee=L(),Oe=P.S;Oe!==null&&Oe(be,Ee),typeof Ee=="object"&&Ee!==null&&typeof Ee.then=="function"&&Ee.then(N,_e)}catch(te){_e(te)}finally{ae!==null&&be.types!==null&&(ae.types=be.types),P.T=ae}},rt.unstable_useCacheRefresh=function(){return P.H.useCacheRefresh()},rt.use=function(L){return P.H.use(L)},rt.useActionState=function(L,ae,be){return P.H.useActionState(L,ae,be)},rt.useCallback=function(L,ae){return P.H.useCallback(L,ae)},rt.useContext=function(L){return P.H.useContext(L)},rt.useDebugValue=function(){},rt.useDeferredValue=function(L,ae){return P.H.useDeferredValue(L,ae)},rt.useEffect=function(L,ae){return P.H.useEffect(L,ae)},rt.useEffectEvent=function(L){return P.H.useEffectEvent(L)},rt.useId=function(){return P.H.useId()},rt.useImperativeHandle=function(L,ae,be){return P.H.useImperativeHandle(L,ae,be)},rt.useInsertionEffect=function(L,ae){return P.H.useInsertionEffect(L,ae)},rt.useLayoutEffect=function(L,ae){return P.H.useLayoutEffect(L,ae)},rt.useMemo=function(L,ae){return P.H.useMemo(L,ae)},rt.useOptimistic=function(L,ae){return P.H.useOptimistic(L,ae)},rt.useReducer=function(L,ae,be){return P.H.useReducer(L,ae,be)},rt.useRef=function(L){return P.H.useRef(L)},rt.useState=function(L){return P.H.useState(L)},rt.useSyncExternalStore=function(L,ae,be){return P.H.useSyncExternalStore(L,ae,be)},rt.useTransition=function(){return P.H.useTransition()},rt.version="19.2.0",rt}var cg;function mh(){return cg||(cg=1,kf.exports=$A()),kf.exports}var Di=mh();const ev=mx(Di);var Xf={exports:{}},To={},Yf={exports:{}},Wf={};var ug;function tv(){return ug||(ug=1,(function(o){function t(O,j){var q=O.length;O.push(j);e:for(;0<q;){var _e=q-1>>>1,Ae=O[_e];if(0<l(Ae,j))O[_e]=j,O[q]=Ae,q=_e;else break e}}function i(O){return O.length===0?null:O[0]}function r(O){if(O.length===0)return null;var j=O[0],q=O.pop();if(q!==j){O[0]=q;e:for(var _e=0,Ae=O.length,L=Ae>>>1;_e<L;){var ae=2*(_e+1)-1,be=O[ae],Ee=ae+1,Oe=O[Ee];if(0>l(be,q))Ee<Ae&&0>l(Oe,be)?(O[_e]=Oe,O[Ee]=q,_e=Ee):(O[_e]=be,O[ae]=q,_e=ae);else if(Ee<Ae&&0>l(Oe,q))O[_e]=Oe,O[Ee]=q,_e=Ee;else break e}}return j}function l(O,j){var q=O.sortIndex-j.sortIndex;return q!==0?q:O.id-j.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],_=1,x=null,v=3,b=!1,T=!1,C=!1,S=!1,A=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function z(O){for(var j=i(p);j!==null;){if(j.callback===null)r(p);else if(j.startTime<=O)r(p),j.sortIndex=j.expirationTime,t(m,j);else break;j=i(p)}}function k(O){if(C=!1,z(O),!T)if(i(m)!==null)T=!0,N||(N=!0,ee());else{var j=i(p);j!==null&&fe(k,j.startTime-O)}}var N=!1,P=-1,ne=5,w=-1;function R(){return S?!0:!(o.unstable_now()-w<ne)}function V(){if(S=!1,N){var O=o.unstable_now();w=O;var j=!0;try{e:{T=!1,C&&(C=!1,B(P),P=-1),b=!0;var q=v;try{t:{for(z(O),x=i(m);x!==null&&!(x.expirationTime>O&&R());){var _e=x.callback;if(typeof _e=="function"){x.callback=null,v=x.priorityLevel;var Ae=_e(x.expirationTime<=O);if(O=o.unstable_now(),typeof Ae=="function"){x.callback=Ae,z(O),j=!0;break t}x===i(m)&&r(m),z(O)}else r(m);x=i(m)}if(x!==null)j=!0;else{var L=i(p);L!==null&&fe(k,L.startTime-O),j=!1}}break e}finally{x=null,v=q,b=!1}j=void 0}}finally{j?ee():N=!1}}}var ee;if(typeof U=="function")ee=function(){U(V)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,ge=oe.port2;oe.port1.onmessage=V,ee=function(){ge.postMessage(null)}}else ee=function(){A(V,0)};function fe(O,j){P=A(function(){O(o.unstable_now())},j)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(O){O.callback=null},o.unstable_forceFrameRate=function(O){0>O||125<O?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ne=0<O?Math.floor(1e3/O):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_next=function(O){switch(v){case 1:case 2:case 3:var j=3;break;default:j=v}var q=v;v=j;try{return O()}finally{v=q}},o.unstable_requestPaint=function(){S=!0},o.unstable_runWithPriority=function(O,j){switch(O){case 1:case 2:case 3:case 4:case 5:break;default:O=3}var q=v;v=O;try{return j()}finally{v=q}},o.unstable_scheduleCallback=function(O,j,q){var _e=o.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?_e+q:_e):q=_e,O){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=q+Ae,O={id:_++,callback:j,priorityLevel:O,startTime:q,expirationTime:Ae,sortIndex:-1},q>_e?(O.sortIndex=q,t(p,O),i(m)===null&&O===i(p)&&(C?(B(P),P=-1):C=!0,fe(k,q-_e))):(O.sortIndex=Ae,t(m,O),T||b||(T=!0,N||(N=!0,ee()))),O},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(O){var j=v;return function(){var q=v;v=j;try{return O.apply(this,arguments)}finally{v=q}}}})(Wf)),Wf}var fg;function nv(){return fg||(fg=1,Yf.exports=tv()),Yf.exports}var qf={exports:{}},wn={};var dg;function iv(){if(dg)return wn;dg=1;var o=mh();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:x==null?null:""+x,children:m,containerInfo:p,implementation:_}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,_)},wn.flushSync=function(m){var p=d.T,_=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=_,r.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,x=h(_,p.crossOrigin),v=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:x,integrity:v,fetchPriority:b}):_==="script"&&r.d.X(m,{crossOrigin:x,integrity:v,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,x=h(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},wn.requestFormReset=function(m){r.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,_){return d.H.useFormState(m,p,_)},wn.useFormStatus=function(){return d.H.useHostTransitionStatus()},wn.version="19.2.0",wn}var hg;function av(){if(hg)return qf.exports;hg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),qf.exports=iv(),qf.exports}var pg;function rv(){if(pg)return To;pg=1;var o=nv(),t=mh(),i=av();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var g=!1,M=c.child;M;){if(M===a){g=!0,a=c,s=f;break}if(M===s){g=!0,s=c,a=f;break}M=M.sibling}if(!g){for(M=f.child;M;){if(M===a){g=!0,a=f,s=c;break}if(M===s){g=!0,s=f,a=c;break}M=M.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function _(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=_(e),n!==null)return n;e=e.sibling}return null}var x=Object.assign,v=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),S=Symbol.for("react.strict_mode"),A=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),U=Symbol.for("react.context"),z=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),P=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function ee(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Symbol.for("react.client.reference");function ge(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case A:return"Profiler";case S:return"StrictMode";case k:return"Suspense";case N:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case U:return e.displayName||"Context";case B:return(e._context.displayName||"Context")+".Consumer";case z:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case P:return n=e.displayName||null,n!==null?n:ge(e.type)||"Memo";case ne:n=e._payload,e=e._init;try{return ge(e(n))}catch{}}return null}var fe=Array.isArray,O=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,q={pending:!1,data:null,method:null,action:null},_e=[],Ae=-1;function L(e){return{current:e}}function ae(e){0>Ae||(e.current=_e[Ae],_e[Ae]=null,Ae--)}function be(e,n){Ae++,_e[Ae]=e.current,e.current=n}var Ee=L(null),Oe=L(null),te=L(null),le=L(null);function we(e,n){switch(be(te,n),be(Oe,e),be(Ee,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?wm(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=wm(n),e=Dm(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ae(Ee),be(Ee,e)}function Ge(){ae(Ee),ae(Oe),ae(te)}function Xe(e){e.memoizedState!==null&&be(le,e);var n=Ee.current,a=Dm(n,e.type);n!==a&&(be(Oe,e),be(Ee,a))}function lt(e){Oe.current===e&&(ae(Ee),ae(Oe)),le.current===e&&(ae(le),So._currentValue=q)}var en,dt;function Et(e){if(en===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);en=n&&n[1]||"",dt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+en+e+dt}var F=!1;function ht(e,n){if(!e||F)return"";F=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var me=function(){throw Error()};if(Object.defineProperty(me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(me,[])}catch(re){var $=re}Reflect.construct(e,[],me)}else{try{me.call()}catch(re){$=re}e.call(me.prototype)}}else{try{throw Error()}catch(re){$=re}(me=e())&&typeof me.catch=="function"&&me.catch(function(){})}}catch(re){if(re&&$&&typeof re.stack=="string")return[re.stack,$.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],M=f[1];if(g&&M){var I=g.split(`
`),Z=M.split(`
`);for(c=s=0;s<I.length&&!I[s].includes("DetermineComponentFrameRoot");)s++;for(;c<Z.length&&!Z[c].includes("DetermineComponentFrameRoot");)c++;if(s===I.length||c===Z.length)for(s=I.length-1,c=Z.length-1;1<=s&&0<=c&&I[s]!==Z[c];)c--;for(;1<=s&&0<=c;s--,c--)if(I[s]!==Z[c]){if(s!==1||c!==1)do if(s--,c--,0>c||I[s]!==Z[c]){var ue=`
`+I[s].replace(" at new "," at ");return e.displayName&&ue.includes("<anonymous>")&&(ue=ue.replace("<anonymous>",e.displayName)),ue}while(1<=s&&0<=c);break}}}finally{F=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Et(a):""}function mt(e,n){switch(e.tag){case 26:case 27:case 5:return Et(e.type);case 16:return Et("Lazy");case 13:return e.child!==n&&n!==null?Et("Suspense Fallback"):Et("Suspense");case 19:return Et("SuspenseList");case 0:case 15:return ht(e.type,!1);case 11:return ht(e.type.render,!1);case 1:return ht(e.type,!0);case 31:return Et("Activity");default:return""}}function It(e){try{var n="",a=null;do n+=mt(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var He=Object.prototype.hasOwnProperty,kt=o.unstable_scheduleCallback,je=o.unstable_cancelCallback,at=o.unstable_shouldYield,D=o.unstable_requestPaint,y=o.unstable_now,J=o.unstable_getCurrentPriorityLevel,pe=o.unstable_ImmediatePriority,ve=o.unstable_UserBlockingPriority,se=o.unstable_NormalPriority,We=o.unstable_LowPriority,Le=o.unstable_IdlePriority,Ze=o.log,Ye=o.unstable_setDisableYieldValue,Se=null,Me=null;function qe(e){if(typeof Ze=="function"&&Ye(e),Me&&typeof Me.setStrictMode=="function")try{Me.setStrictMode(Se,e)}catch{}}var Ve=Math.clz32?Math.clz32:G,Ie=Math.log,nt=Math.LN2;function G(e){return e>>>=0,e===0?32:31-(Ie(e)/nt|0)|0}var De=256,Ce=262144,Re=4194304;function ye(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xe(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var M=s&134217727;return M!==0?(s=M&~f,s!==0?c=ye(s):(g&=M,g!==0?c=ye(g):a||(a=M&~e,a!==0&&(c=ye(a))))):(M=s&~f,M!==0?c=ye(M):g!==0?c=ye(g):a||(a=s&~e,a!==0&&(c=ye(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function ze(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function it(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zt(){var e=Re;return Re<<=1,(Re&62914560)===0&&(Re=4194304),e}function Tt(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Rn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function kn(e,n,a,s,c,f){var g=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var M=e.entanglements,I=e.expirationTimes,Z=e.hiddenUpdates;for(a=g&~a;0<a;){var ue=31-Ve(a),me=1<<ue;M[ue]=0,I[ue]=-1;var $=Z[ue];if($!==null)for(Z[ue]=null,ue=0;ue<$.length;ue++){var re=$[ue];re!==null&&(re.lane&=-536870913)}a&=~me}s!==0&&ko(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(g&~n))}function ko(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Ve(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function Ls(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Ve(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function Ns(e,n){var a=n&-n;return a=(a&42)!==0?1:hi(a),(a&(e.suspendedLanes|n))!==0?0:a}function hi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Za(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Is(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:$m(e.type))}function Os(e,n){var a=j.p;try{return j.p=e,n()}finally{j.p=a}}var Xn=Math.random().toString(36).slice(2),sn="__reactFiber$"+Xn,dn="__reactProps$"+Xn,Ii="__reactContainer$"+Xn,Rr="__reactEvents$"+Xn,Oc="__reactListeners$"+Xn,Bc="__reactHandles$"+Xn,Xo="__reactResources$"+Xn,Ka="__reactMarker$"+Xn;function Bs(e){delete e[sn],delete e[dn],delete e[Rr],delete e[Oc],delete e[Bc]}function pa(e){var n=e[sn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ii]||a[sn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=zm(e);e!==null;){if(a=e[sn])return a;e=zm(e)}return n}e=a,a=e.parentNode}return null}function E(e){if(e=e[sn]||e[Ii]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function X(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ie(e){var n=e[Xo];return n||(n=e[Xo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function K(e){e[Ka]=!0}var W=new Set,Te={};function Ue(e,n){Be(e,n),Be(e+"Capture",n)}function Be(e,n){for(Te[e]=n,e=0;e<n.length;e++)W.add(n[e])}var Pe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$e={},tt={};function Qe(e){return He.call(tt,e)?!0:He.call($e,e)?!1:Pe.test(e)?tt[e]=!0:($e[e]=!0,!1)}function ct(e,n,a){if(Qe(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Mt(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Ct(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function vt(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ke(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Xt(e){if(!e._valueTracker){var n=Nt(e)?"checked":"value";e._valueTracker=Ke(e,n,""+e[n])}}function St(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=Nt(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function _n(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ma=/[\n"\\]/g;function Wt(e){return e.replace(ma,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Oi(e,n,a,s,c,f,g,M){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),n!=null?g==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+vt(n)):e.value!==""+vt(n)&&(e.value=""+vt(n)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),n!=null?An(e,g,vt(n)):a!=null?An(e,g,vt(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),M!=null&&typeof M!="function"&&typeof M!="symbol"&&typeof M!="boolean"?e.name=""+vt(M):e.removeAttribute("name")}function qt(e,n,a,s,c,f,g,M){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Xt(e);return}a=a!=null?""+vt(a):"",n=n!=null?""+vt(n):a,M||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=M?e.checked:!!s,e.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),Xt(e)}function An(e,n,a){n==="number"&&_n(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function hn(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+vt(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function vn(e,n,a){if(n!=null&&(n=""+vt(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+vt(a):""}function yn(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(fe(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=vt(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),Xt(e)}function Mi(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Bi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Th(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||Bi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Ch(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Th(e,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Th(e,f,n[f])}function zc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var qx=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Yo(e){return jx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function zi(){}var Pc=null;function Fc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var wr=null,Dr=null;function Rh(e){var n=E(e);if(n&&(e=n.stateNode)){var a=e[dn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Oi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+Wt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[dn]||null;if(!c)throw Error(r(90));Oi(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&St(s)}break e;case"textarea":vn(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&hn(e,!!a.multiple,n,!1)}}}var Gc=!1;function wh(e,n,a){if(Gc)return e(n,a);Gc=!0;try{var s=e(n);return s}finally{if(Gc=!1,(wr!==null||Dr!==null)&&(Ll(),wr&&(n=wr,e=Dr,Dr=wr=null,Rh(n),e)))for(n=0;n<e.length;n++)Rh(e[n])}}function zs(e,n){var a=e.stateNode;if(a===null)return null;var s=a[dn]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Pi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hc=!1;if(Pi)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){Hc=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{Hc=!1}var ga=null,Vc=null,Wo=null;function Dh(){if(Wo)return Wo;var e,n=Vc,a=n.length,s,c="value"in ga?ga.value:ga.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var g=a-e;for(s=1;s<=g&&n[a-s]===c[f-s];s++);return Wo=c.slice(e,1<s?1-s:void 0)}function qo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function jo(){return!0}function Uh(){return!1}function On(e){function n(a,s,c,f,g){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var M in e)e.hasOwnProperty(M)&&(a=e[M],this[M]=a?a(f):f[M]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?jo:Uh,this.isPropagationStopped=Uh,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=jo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=jo)},persist:function(){},isPersistent:jo}),n}var $a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Qo=On($a),Fs=x({},$a,{view:0,detail:0}),Qx=On(Fs),kc,Xc,Gs,Jo=x({},Fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Wc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gs&&(Gs&&e.type==="mousemove"?(kc=e.screenX-Gs.screenX,Xc=e.screenY-Gs.screenY):Xc=kc=0,Gs=e),kc)},movementY:function(e){return"movementY"in e?e.movementY:Xc}}),Lh=On(Jo),Jx=x({},Jo,{dataTransfer:0}),Zx=On(Jx),Kx=x({},Fs,{relatedTarget:0}),Yc=On(Kx),$x=x({},$a,{animationName:0,elapsedTime:0,pseudoElement:0}),e_=On($x),t_=x({},$a,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),n_=On(t_),i_=x({},$a,{data:0}),Nh=On(i_),a_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},r_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},s_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function o_(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=s_[e])?!!n[e]:!1}function Wc(){return o_}var l_=x({},Fs,{key:function(e){if(e.key){var n=a_[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=qo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?r_[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Wc,charCode:function(e){return e.type==="keypress"?qo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),c_=On(l_),u_=x({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ih=On(u_),f_=x({},Fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Wc}),d_=On(f_),h_=x({},$a,{propertyName:0,elapsedTime:0,pseudoElement:0}),p_=On(h_),m_=x({},Jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),g_=On(m_),x_=x({},$a,{newState:0,oldState:0}),__=On(x_),A_=[9,13,27,32],qc=Pi&&"CompositionEvent"in window,Hs=null;Pi&&"documentMode"in document&&(Hs=document.documentMode);var v_=Pi&&"TextEvent"in window&&!Hs,Oh=Pi&&(!qc||Hs&&8<Hs&&11>=Hs),Bh=" ",zh=!1;function Ph(e,n){switch(e){case"keyup":return A_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ur=!1;function S_(e,n){switch(e){case"compositionend":return Fh(n);case"keypress":return n.which!==32?null:(zh=!0,Bh);case"textInput":return e=n.data,e===Bh&&zh?null:e;default:return null}}function b_(e,n){if(Ur)return e==="compositionend"||!qc&&Ph(e,n)?(e=Dh(),Wo=Vc=ga=null,Ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Oh&&n.locale!=="ko"?null:n.data;default:return null}}var y_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!y_[e.type]:n==="textarea"}function Hh(e,n,a,s){wr?Dr?Dr.push(s):Dr=[s]:wr=s,n=Fl(n,"onChange"),0<n.length&&(a=new Qo("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Vs=null,ks=null;function M_(e){ym(e,0)}function Zo(e){var n=X(e);if(St(n))return e}function Vh(e,n){if(e==="change")return n}var kh=!1;if(Pi){var jc;if(Pi){var Qc="oninput"in document;if(!Qc){var Xh=document.createElement("div");Xh.setAttribute("oninput","return;"),Qc=typeof Xh.oninput=="function"}jc=Qc}else jc=!1;kh=jc&&(!document.documentMode||9<document.documentMode)}function Yh(){Vs&&(Vs.detachEvent("onpropertychange",Wh),ks=Vs=null)}function Wh(e){if(e.propertyName==="value"&&Zo(ks)){var n=[];Hh(n,ks,e,Fc(e)),wh(M_,n)}}function E_(e,n,a){e==="focusin"?(Yh(),Vs=n,ks=a,Vs.attachEvent("onpropertychange",Wh)):e==="focusout"&&Yh()}function T_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zo(ks)}function C_(e,n){if(e==="click")return Zo(n)}function R_(e,n){if(e==="input"||e==="change")return Zo(n)}function w_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Yn=typeof Object.is=="function"?Object.is:w_;function Xs(e,n){if(Yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!He.call(n,c)||!Yn(e[c],n[c]))return!1}return!0}function qh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function jh(e,n){var a=qh(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=qh(a)}}function Qh(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Qh(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Jh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=_n(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=_n(e.document)}return n}function Jc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var D_=Pi&&"documentMode"in document&&11>=document.documentMode,Lr=null,Zc=null,Ys=null,Kc=!1;function Zh(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Kc||Lr==null||Lr!==_n(s)||(s=Lr,"selectionStart"in s&&Jc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ys&&Xs(Ys,s)||(Ys=s,s=Fl(Zc,"onSelect"),0<s.length&&(n=new Qo("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Lr)))}function er(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Nr={animationend:er("Animation","AnimationEnd"),animationiteration:er("Animation","AnimationIteration"),animationstart:er("Animation","AnimationStart"),transitionrun:er("Transition","TransitionRun"),transitionstart:er("Transition","TransitionStart"),transitioncancel:er("Transition","TransitionCancel"),transitionend:er("Transition","TransitionEnd")},$c={},Kh={};Pi&&(Kh=document.createElement("div").style,"AnimationEvent"in window||(delete Nr.animationend.animation,delete Nr.animationiteration.animation,delete Nr.animationstart.animation),"TransitionEvent"in window||delete Nr.transitionend.transition);function tr(e){if($c[e])return $c[e];if(!Nr[e])return e;var n=Nr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Kh)return $c[e]=n[a];return e}var $h=tr("animationend"),ep=tr("animationiteration"),tp=tr("animationstart"),U_=tr("transitionrun"),L_=tr("transitionstart"),N_=tr("transitioncancel"),np=tr("transitionend"),ip=new Map,eu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");eu.push("scrollEnd");function pi(e,n){ip.set(e,n),Ue(n,[e])}var Ko=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ni=[],Ir=0,tu=0;function $o(){for(var e=Ir,n=tu=Ir=0;n<e;){var a=ni[n];ni[n++]=null;var s=ni[n];ni[n++]=null;var c=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,s!==null&&c!==null){var g=s.pending;g===null?c.next=c:(c.next=g.next,g.next=c),s.pending=c}f!==0&&ap(a,c,f)}}function el(e,n,a,s){ni[Ir++]=e,ni[Ir++]=n,ni[Ir++]=a,ni[Ir++]=s,tu|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function nu(e,n,a,s){return el(e,n,a,s),tl(e)}function nr(e,n){return el(e,null,null,n),tl(e)}function ap(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Ve(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function tl(e){if(50<po)throw po=0,df=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Or={};function I_(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(e,n,a,s){return new I_(e,n,a,s)}function iu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fi(e,n){var a=e.alternate;return a===null?(a=Wn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function rp(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function nl(e,n,a,s,c,f){var g=0;if(s=e,typeof e=="function")iu(e)&&(g=1);else if(typeof e=="string")g=FA(e,a,Ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case w:return e=Wn(31,a,n,c),e.elementType=w,e.lanes=f,e;case C:return ir(a.children,c,f,n);case S:g=8,c|=24;break;case A:return e=Wn(12,a,n,c|2),e.elementType=A,e.lanes=f,e;case k:return e=Wn(13,a,n,c),e.elementType=k,e.lanes=f,e;case N:return e=Wn(19,a,n,c),e.elementType=N,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:g=10;break e;case B:g=9;break e;case z:g=11;break e;case P:g=14;break e;case ne:g=16,s=null;break e}g=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=Wn(g,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function ir(e,n,a,s){return e=Wn(7,e,s,n),e.lanes=a,e}function au(e,n,a){return e=Wn(6,e,null,n),e.lanes=a,e}function sp(e){var n=Wn(18,null,null,0);return n.stateNode=e,n}function ru(e,n,a){return n=Wn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var op=new WeakMap;function ii(e,n){if(typeof e=="object"&&e!==null){var a=op.get(e);return a!==void 0?a:(n={value:e,source:n,stack:It(n)},op.set(e,n),n)}return{value:e,source:n,stack:It(n)}}var Br=[],zr=0,il=null,Ws=0,ai=[],ri=0,xa=null,Ei=1,Ti="";function Gi(e,n){Br[zr++]=Ws,Br[zr++]=il,il=e,Ws=n}function lp(e,n,a){ai[ri++]=Ei,ai[ri++]=Ti,ai[ri++]=xa,xa=e;var s=Ei;e=Ti;var c=32-Ve(s)-1;s&=~(1<<c),a+=1;var f=32-Ve(n)+c;if(30<f){var g=c-c%5;f=(s&(1<<g)-1).toString(32),s>>=g,c-=g,Ei=1<<32-Ve(n)+c|a<<c|s,Ti=f+e}else Ei=1<<f|a<<c|s,Ti=e}function su(e){e.return!==null&&(Gi(e,1),lp(e,1,0))}function ou(e){for(;e===il;)il=Br[--zr],Br[zr]=null,Ws=Br[--zr],Br[zr]=null;for(;e===xa;)xa=ai[--ri],ai[ri]=null,Ti=ai[--ri],ai[ri]=null,Ei=ai[--ri],ai[ri]=null}function cp(e,n){ai[ri++]=Ei,ai[ri++]=Ti,ai[ri++]=xa,Ei=n.id,Ti=n.overflow,xa=e}var Mn=null,jt=null,bt=!1,_a=null,si=!1,lu=Error(r(519));function Aa(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw qs(ii(n,e)),lu}function up(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[sn]=e,n[dn]=s,a){case"dialog":xt("cancel",n),xt("close",n);break;case"iframe":case"object":case"embed":xt("load",n);break;case"video":case"audio":for(a=0;a<go.length;a++)xt(go[a],n);break;case"source":xt("error",n);break;case"img":case"image":case"link":xt("error",n),xt("load",n);break;case"details":xt("toggle",n);break;case"input":xt("invalid",n),qt(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":xt("invalid",n);break;case"textarea":xt("invalid",n),yn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Cm(n.textContent,a)?(s.popover!=null&&(xt("beforetoggle",n),xt("toggle",n)),s.onScroll!=null&&xt("scroll",n),s.onScrollEnd!=null&&xt("scrollend",n),s.onClick!=null&&(n.onclick=zi),n=!0):n=!1,n||Aa(e,!0)}function fp(e){for(Mn=e.return;Mn;)switch(Mn.tag){case 5:case 31:case 13:si=!1;return;case 27:case 3:si=!0;return;default:Mn=Mn.return}}function Pr(e){if(e!==Mn)return!1;if(!bt)return fp(e),bt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Cf(e.type,e.memoizedProps)),a=!a),a&&jt&&Aa(e),fp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));jt=Bm(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));jt=Bm(e)}else n===27?(n=jt,Na(e.type)?(e=Lf,Lf=null,jt=e):jt=n):jt=Mn?li(e.stateNode.nextSibling):null;return!0}function ar(){jt=Mn=null,bt=!1}function cu(){var e=_a;return e!==null&&(Fn===null?Fn=e:Fn.push.apply(Fn,e),_a=null),e}function qs(e){_a===null?_a=[e]:_a.push(e)}var uu=L(null),rr=null,Hi=null;function va(e,n,a){be(uu,n._currentValue),n._currentValue=a}function Vi(e){e._currentValue=uu.current,ae(uu)}function fu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function du(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;e:for(;f!==null;){var M=f;f=c;for(var I=0;I<n.length;I++)if(M.context===n[I]){f.lanes|=a,M=f.alternate,M!==null&&(M.lanes|=a),fu(f.return,a,e),s||(g=null);break e}f=M.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),fu(g,a,e),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===e){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function Fr(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var M=c.type;Yn(c.pendingProps.value,g.value)||(e!==null?e.push(M):e=[M])}}else if(c===le.current){if(g=c.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(So):e=[So])}c=c.return}e!==null&&du(n,e,a,s),n.flags|=262144}function al(e){for(e=e.firstContext;e!==null;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sr(e){rr=e,Hi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function En(e){return dp(rr,e)}function rl(e,n){return rr===null&&sr(e),dp(e,n)}function dp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Hi===null){if(e===null)throw Error(r(308));Hi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Hi=Hi.next=n;return a}var O_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},B_=o.unstable_scheduleCallback,z_=o.unstable_NormalPriority,on={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function hu(){return{controller:new O_,data:new Map,refCount:0}}function js(e){e.refCount--,e.refCount===0&&B_(z_,function(){e.controller.abort()})}var Qs=null,pu=0,Gr=0,Hr=null;function P_(e,n){if(Qs===null){var a=Qs=[];pu=0,Gr=_f(),Hr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return pu++,n.then(hp,hp),n}function hp(){if(--pu===0&&Qs!==null){Hr!==null&&(Hr.status="fulfilled");var e=Qs;Qs=null,Gr=0,Hr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function F_(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var pp=O.S;O.S=function(e,n){Z0=y(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&P_(e,n),pp!==null&&pp(e,n)};var or=L(null);function mu(){var e=or.current;return e!==null?e:Yt.pooledCache}function sl(e,n){n===null?be(or,or.current):be(or,n.pool)}function mp(){var e=mu();return e===null?null:{parent:on._currentValue,pool:e}}var Vr=Error(r(460)),gu=Error(r(474)),ol=Error(r(542)),ll={then:function(){}};function gp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function xp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(zi,zi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ap(e),e;default:if(typeof n.status=="string")n.then(zi,zi);else{if(e=Yt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Ap(e),e}throw cr=n,Vr}}function lr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(cr=a,Vr):a}}var cr=null;function _p(){if(cr===null)throw Error(r(459));var e=cr;return cr=null,e}function Ap(e){if(e===Vr||e===ol)throw Error(r(483))}var kr=null,Js=0;function cl(e){var n=Js;return Js+=1,kr===null&&(kr=[]),xp(kr,e,n)}function Zs(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ul(e,n){throw n.$$typeof===v?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function vp(e){function n(Y,H){if(e){var Q=Y.deletions;Q===null?(Y.deletions=[H],Y.flags|=16):Q.push(H)}}function a(Y,H){if(!e)return null;for(;H!==null;)n(Y,H),H=H.sibling;return null}function s(Y){for(var H=new Map;Y!==null;)Y.key!==null?H.set(Y.key,Y):H.set(Y.index,Y),Y=Y.sibling;return H}function c(Y,H){return Y=Fi(Y,H),Y.index=0,Y.sibling=null,Y}function f(Y,H,Q){return Y.index=Q,e?(Q=Y.alternate,Q!==null?(Q=Q.index,Q<H?(Y.flags|=67108866,H):Q):(Y.flags|=67108866,H)):(Y.flags|=1048576,H)}function g(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function M(Y,H,Q,de){return H===null||H.tag!==6?(H=au(Q,Y.mode,de),H.return=Y,H):(H=c(H,Q),H.return=Y,H)}function I(Y,H,Q,de){var Je=Q.type;return Je===C?ue(Y,H,Q.props.children,de,Q.key):H!==null&&(H.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===ne&&lr(Je)===H.type)?(H=c(H,Q.props),Zs(H,Q),H.return=Y,H):(H=nl(Q.type,Q.key,Q.props,null,Y.mode,de),Zs(H,Q),H.return=Y,H)}function Z(Y,H,Q,de){return H===null||H.tag!==4||H.stateNode.containerInfo!==Q.containerInfo||H.stateNode.implementation!==Q.implementation?(H=ru(Q,Y.mode,de),H.return=Y,H):(H=c(H,Q.children||[]),H.return=Y,H)}function ue(Y,H,Q,de,Je){return H===null||H.tag!==7?(H=ir(Q,Y.mode,de,Je),H.return=Y,H):(H=c(H,Q),H.return=Y,H)}function me(Y,H,Q){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=au(""+H,Y.mode,Q),H.return=Y,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case b:return Q=nl(H.type,H.key,H.props,null,Y.mode,Q),Zs(Q,H),Q.return=Y,Q;case T:return H=ru(H,Y.mode,Q),H.return=Y,H;case ne:return H=lr(H),me(Y,H,Q)}if(fe(H)||ee(H))return H=ir(H,Y.mode,Q,null),H.return=Y,H;if(typeof H.then=="function")return me(Y,cl(H),Q);if(H.$$typeof===U)return me(Y,rl(Y,H),Q);ul(Y,H)}return null}function $(Y,H,Q,de){var Je=H!==null?H.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Je!==null?null:M(Y,H,""+Q,de);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case b:return Q.key===Je?I(Y,H,Q,de):null;case T:return Q.key===Je?Z(Y,H,Q,de):null;case ne:return Q=lr(Q),$(Y,H,Q,de)}if(fe(Q)||ee(Q))return Je!==null?null:ue(Y,H,Q,de,null);if(typeof Q.then=="function")return $(Y,H,cl(Q),de);if(Q.$$typeof===U)return $(Y,H,rl(Y,Q),de);ul(Y,Q)}return null}function re(Y,H,Q,de,Je){if(typeof de=="string"&&de!==""||typeof de=="number"||typeof de=="bigint")return Y=Y.get(Q)||null,M(H,Y,""+de,Je);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case b:return Y=Y.get(de.key===null?Q:de.key)||null,I(H,Y,de,Je);case T:return Y=Y.get(de.key===null?Q:de.key)||null,Z(H,Y,de,Je);case ne:return de=lr(de),re(Y,H,Q,de,Je)}if(fe(de)||ee(de))return Y=Y.get(Q)||null,ue(H,Y,de,Je,null);if(typeof de.then=="function")return re(Y,H,Q,cl(de),Je);if(de.$$typeof===U)return re(Y,H,Q,rl(H,de),Je);ul(H,de)}return null}function Fe(Y,H,Q,de){for(var Je=null,Rt=null,ke=H,ut=H=0,At=null;ke!==null&&ut<Q.length;ut++){ke.index>ut?(At=ke,ke=null):At=ke.sibling;var wt=$(Y,ke,Q[ut],de);if(wt===null){ke===null&&(ke=At);break}e&&ke&&wt.alternate===null&&n(Y,ke),H=f(wt,H,ut),Rt===null?Je=wt:Rt.sibling=wt,Rt=wt,ke=At}if(ut===Q.length)return a(Y,ke),bt&&Gi(Y,ut),Je;if(ke===null){for(;ut<Q.length;ut++)ke=me(Y,Q[ut],de),ke!==null&&(H=f(ke,H,ut),Rt===null?Je=ke:Rt.sibling=ke,Rt=ke);return bt&&Gi(Y,ut),Je}for(ke=s(ke);ut<Q.length;ut++)At=re(ke,Y,ut,Q[ut],de),At!==null&&(e&&At.alternate!==null&&ke.delete(At.key===null?ut:At.key),H=f(At,H,ut),Rt===null?Je=At:Rt.sibling=At,Rt=At);return e&&ke.forEach(function(Pa){return n(Y,Pa)}),bt&&Gi(Y,ut),Je}function et(Y,H,Q,de){if(Q==null)throw Error(r(151));for(var Je=null,Rt=null,ke=H,ut=H=0,At=null,wt=Q.next();ke!==null&&!wt.done;ut++,wt=Q.next()){ke.index>ut?(At=ke,ke=null):At=ke.sibling;var Pa=$(Y,ke,wt.value,de);if(Pa===null){ke===null&&(ke=At);break}e&&ke&&Pa.alternate===null&&n(Y,ke),H=f(Pa,H,ut),Rt===null?Je=Pa:Rt.sibling=Pa,Rt=Pa,ke=At}if(wt.done)return a(Y,ke),bt&&Gi(Y,ut),Je;if(ke===null){for(;!wt.done;ut++,wt=Q.next())wt=me(Y,wt.value,de),wt!==null&&(H=f(wt,H,ut),Rt===null?Je=wt:Rt.sibling=wt,Rt=wt);return bt&&Gi(Y,ut),Je}for(ke=s(ke);!wt.done;ut++,wt=Q.next())wt=re(ke,Y,ut,wt.value,de),wt!==null&&(e&&wt.alternate!==null&&ke.delete(wt.key===null?ut:wt.key),H=f(wt,H,ut),Rt===null?Je=wt:Rt.sibling=wt,Rt=wt);return e&&ke.forEach(function(JA){return n(Y,JA)}),bt&&Gi(Y,ut),Je}function Gt(Y,H,Q,de){if(typeof Q=="object"&&Q!==null&&Q.type===C&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case b:e:{for(var Je=Q.key;H!==null;){if(H.key===Je){if(Je=Q.type,Je===C){if(H.tag===7){a(Y,H.sibling),de=c(H,Q.props.children),de.return=Y,Y=de;break e}}else if(H.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===ne&&lr(Je)===H.type){a(Y,H.sibling),de=c(H,Q.props),Zs(de,Q),de.return=Y,Y=de;break e}a(Y,H);break}else n(Y,H);H=H.sibling}Q.type===C?(de=ir(Q.props.children,Y.mode,de,Q.key),de.return=Y,Y=de):(de=nl(Q.type,Q.key,Q.props,null,Y.mode,de),Zs(de,Q),de.return=Y,Y=de)}return g(Y);case T:e:{for(Je=Q.key;H!==null;){if(H.key===Je)if(H.tag===4&&H.stateNode.containerInfo===Q.containerInfo&&H.stateNode.implementation===Q.implementation){a(Y,H.sibling),de=c(H,Q.children||[]),de.return=Y,Y=de;break e}else{a(Y,H);break}else n(Y,H);H=H.sibling}de=ru(Q,Y.mode,de),de.return=Y,Y=de}return g(Y);case ne:return Q=lr(Q),Gt(Y,H,Q,de)}if(fe(Q))return Fe(Y,H,Q,de);if(ee(Q)){if(Je=ee(Q),typeof Je!="function")throw Error(r(150));return Q=Je.call(Q),et(Y,H,Q,de)}if(typeof Q.then=="function")return Gt(Y,H,cl(Q),de);if(Q.$$typeof===U)return Gt(Y,H,rl(Y,Q),de);ul(Y,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,H!==null&&H.tag===6?(a(Y,H.sibling),de=c(H,Q),de.return=Y,Y=de):(a(Y,H),de=au(Q,Y.mode,de),de.return=Y,Y=de),g(Y)):a(Y,H)}return function(Y,H,Q,de){try{Js=0;var Je=Gt(Y,H,Q,de);return kr=null,Je}catch(ke){if(ke===Vr||ke===ol)throw ke;var Rt=Wn(29,ke,null,Y.mode);return Rt.lanes=de,Rt.return=Y,Rt}finally{}}}var ur=vp(!0),Sp=vp(!1),Sa=!1;function xu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function _u(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ya(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Lt&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=tl(e),ap(e,null,a),n}return el(e,s,n,a),tl(e)}function Ks(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Ls(e,a)}}function Au(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var vu=!1;function $s(){if(vu){var e=Hr;if(e!==null)throw e}}function eo(e,n,a,s){vu=!1;var c=e.updateQueue;Sa=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,M=c.shared.pending;if(M!==null){c.shared.pending=null;var I=M,Z=I.next;I.next=null,g===null?f=Z:g.next=Z,g=I;var ue=e.alternate;ue!==null&&(ue=ue.updateQueue,M=ue.lastBaseUpdate,M!==g&&(M===null?ue.firstBaseUpdate=Z:M.next=Z,ue.lastBaseUpdate=I))}if(f!==null){var me=c.baseState;g=0,ue=Z=I=null,M=f;do{var $=M.lane&-536870913,re=$!==M.lane;if(re?(_t&$)===$:(s&$)===$){$!==0&&$===Gr&&(vu=!0),ue!==null&&(ue=ue.next={lane:0,tag:M.tag,payload:M.payload,callback:null,next:null});e:{var Fe=e,et=M;$=n;var Gt=a;switch(et.tag){case 1:if(Fe=et.payload,typeof Fe=="function"){me=Fe.call(Gt,me,$);break e}me=Fe;break e;case 3:Fe.flags=Fe.flags&-65537|128;case 0:if(Fe=et.payload,$=typeof Fe=="function"?Fe.call(Gt,me,$):Fe,$==null)break e;me=x({},me,$);break e;case 2:Sa=!0}}$=M.callback,$!==null&&(e.flags|=64,re&&(e.flags|=8192),re=c.callbacks,re===null?c.callbacks=[$]:re.push($))}else re={lane:$,tag:M.tag,payload:M.payload,callback:M.callback,next:null},ue===null?(Z=ue=re,I=me):ue=ue.next=re,g|=$;if(M=M.next,M===null){if(M=c.shared.pending,M===null)break;re=M,M=re.next,re.next=null,c.lastBaseUpdate=re,c.shared.pending=null}}while(!0);ue===null&&(I=me),c.baseState=I,c.firstBaseUpdate=Z,c.lastBaseUpdate=ue,f===null&&(c.shared.lanes=0),Ra|=g,e.lanes=g,e.memoizedState=me}}function bp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function yp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)bp(a[e],n)}var Xr=L(null),fl=L(0);function Mp(e,n){e=Zi,be(fl,e),be(Xr,n),Zi=e|n.baseLanes}function Su(){be(fl,Zi),be(Xr,Xr.current)}function bu(){Zi=fl.current,ae(Xr),ae(fl)}var qn=L(null),oi=null;function Ma(e){var n=e.alternate;be(tn,tn.current&1),be(qn,e),oi===null&&(n===null||Xr.current!==null||n.memoizedState!==null)&&(oi=e)}function yu(e){be(tn,tn.current),be(qn,e),oi===null&&(oi=e)}function Ep(e){e.tag===22?(be(tn,tn.current),be(qn,e),oi===null&&(oi=e)):Ea()}function Ea(){be(tn,tn.current),be(qn,qn.current)}function jn(e){ae(qn),oi===e&&(oi=null),ae(tn)}var tn=L(0);function dl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Df(a)||Uf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ki=0,st=null,Pt=null,ln=null,hl=!1,Yr=!1,fr=!1,pl=0,to=0,Wr=null,G_=0;function Kt(){throw Error(r(321))}function Mu(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Yn(e[a],n[a]))return!1;return!0}function Eu(e,n,a,s,c,f){return ki=f,st=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,O.H=e===null||e.memoizedState===null?l0:Gu,fr=!1,f=a(s,c),fr=!1,Yr&&(f=Cp(n,a,s,c)),Tp(e),f}function Tp(e){O.H=ao;var n=Pt!==null&&Pt.next!==null;if(ki=0,ln=Pt=st=null,hl=!1,to=0,Wr=null,n)throw Error(r(300));e===null||cn||(e=e.dependencies,e!==null&&al(e)&&(cn=!0))}function Cp(e,n,a,s){st=e;var c=0;do{if(Yr&&(Wr=null),to=0,Yr=!1,25<=c)throw Error(r(301));if(c+=1,ln=Pt=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}O.H=c0,f=n(a,s)}while(Yr);return f}function H_(){var e=O.H,n=e.useState()[0];return n=typeof n.then=="function"?no(n):n,e=e.useState()[0],(Pt!==null?Pt.memoizedState:null)!==e&&(st.flags|=1024),n}function Tu(){var e=pl!==0;return pl=0,e}function Cu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Ru(e){if(hl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}hl=!1}ki=0,ln=Pt=st=null,Yr=!1,to=pl=0,Wr=null}function Ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?st.memoizedState=ln=e:ln=ln.next=e,ln}function nn(){if(Pt===null){var e=st.alternate;e=e!==null?e.memoizedState:null}else e=Pt.next;var n=ln===null?st.memoizedState:ln.next;if(n!==null)ln=n,Pt=e;else{if(e===null)throw st.alternate===null?Error(r(467)):Error(r(310));Pt=e,e={memoizedState:Pt.memoizedState,baseState:Pt.baseState,baseQueue:Pt.baseQueue,queue:Pt.queue,next:null},ln===null?st.memoizedState=ln=e:ln=ln.next=e}return ln}function ml(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function no(e){var n=to;return to+=1,Wr===null&&(Wr=[]),e=xp(Wr,e,n),n=st,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,O.H=n===null||n.memoizedState===null?l0:Gu),e}function gl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return no(e);if(e.$$typeof===U)return En(e)}throw Error(r(438,String(e)))}function wu(e){var n=null,a=st.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=st.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ml(),st.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=R;return n.index++,a}function Xi(e,n){return typeof n=="function"?n(e):n}function xl(e){var n=nn();return Du(n,Pt,e)}function Du(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var M=g=null,I=null,Z=n,ue=!1;do{var me=Z.lane&-536870913;if(me!==Z.lane?(_t&me)===me:(ki&me)===me){var $=Z.revertLane;if($===0)I!==null&&(I=I.next={lane:0,revertLane:0,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null}),me===Gr&&(ue=!0);else if((ki&$)===$){Z=Z.next,$===Gr&&(ue=!0);continue}else me={lane:0,revertLane:Z.revertLane,gesture:null,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},I===null?(M=I=me,g=f):I=I.next=me,st.lanes|=$,Ra|=$;me=Z.action,fr&&a(f,me),f=Z.hasEagerState?Z.eagerState:a(f,me)}else $={lane:me,revertLane:Z.revertLane,gesture:Z.gesture,action:Z.action,hasEagerState:Z.hasEagerState,eagerState:Z.eagerState,next:null},I===null?(M=I=$,g=f):I=I.next=$,st.lanes|=me,Ra|=me;Z=Z.next}while(Z!==null&&Z!==n);if(I===null?g=f:I.next=M,!Yn(f,e.memoizedState)&&(cn=!0,ue&&(a=Hr,a!==null)))throw a;e.memoizedState=f,e.baseState=g,e.baseQueue=I,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Uu(e){var n=nn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=e(f,g.action),g=g.next;while(g!==c);Yn(f,n.memoizedState)||(cn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Rp(e,n,a){var s=st,c=nn(),f=bt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!Yn((Pt||c).memoizedState,a);if(g&&(c.memoizedState=a,cn=!0),c=c.queue,Iu(Up.bind(null,s,c,e),[e]),c.getSnapshot!==n||g||ln!==null&&ln.memoizedState.tag&1){if(s.flags|=2048,qr(9,{destroy:void 0},Dp.bind(null,s,c,a,n),null),Yt===null)throw Error(r(349));f||(ki&127)!==0||wp(s,n,a)}return a}function wp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=st.updateQueue,n===null?(n=ml(),st.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Dp(e,n,a,s){n.value=a,n.getSnapshot=s,Lp(n)&&Np(e)}function Up(e,n,a){return a(function(){Lp(n)&&Np(e)})}function Lp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Yn(e,a)}catch{return!0}}function Np(e){var n=nr(e,2);n!==null&&Gn(n,e,2)}function Lu(e){var n=Ln();if(typeof e=="function"){var a=e;if(e=a(),fr){qe(!0);try{a()}finally{qe(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:e},n}function Ip(e,n,a,s){return e.baseState=a,Du(e,Pt,typeof s=="function"?s:Xi)}function V_(e,n,a,s,c){if(vl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};O.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Op(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Op(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=O.T,g={};O.T=g;try{var M=a(c,s),I=O.S;I!==null&&I(g,M),Bp(e,n,M)}catch(Z){Nu(e,n,Z)}finally{f!==null&&g.types!==null&&(f.types=g.types),O.T=f}}else try{f=a(c,s),Bp(e,n,f)}catch(Z){Nu(e,n,Z)}}function Bp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){zp(e,n,s)},function(s){return Nu(e,n,s)}):zp(e,n,a)}function zp(e,n,a){n.status="fulfilled",n.value=a,Pp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,Op(e,a)))}function Nu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Pp(n),n=n.next;while(n!==s)}e.action=null}function Pp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Fp(e,n){return n}function Gp(e,n){if(bt){var a=Yt.formState;if(a!==null){e:{var s=st;if(bt){if(jt){t:{for(var c=jt,f=si;c.nodeType!==8;){if(!f){c=null;break t}if(c=li(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){jt=li(c.nextSibling),s=c.data==="F!";break e}}Aa(s)}s=!1}s&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Fp,lastRenderedState:n},a.queue=s,a=r0.bind(null,st,s),s.dispatch=a,s=Lu(!1),f=Fu.bind(null,st,!1,s.queue),s=Ln(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=V_.bind(null,st,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function Hp(e){var n=nn();return Vp(n,Pt,e)}function Vp(e,n,a){if(n=Du(e,n,Fp)[0],e=xl(Xi)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=no(n)}catch(g){throw g===Vr?ol:g}else s=n;n=nn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(st.flags|=2048,qr(9,{destroy:void 0},k_.bind(null,c,a),null)),[s,f,e]}function k_(e,n){e.action=n}function kp(e){var n=nn(),a=Pt;if(a!==null)return Vp(n,a,e);nn(),n=n.memoizedState,a=nn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function qr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=st.updateQueue,n===null&&(n=ml(),st.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function Xp(){return nn().memoizedState}function _l(e,n,a,s){var c=Ln();st.flags|=e,c.memoizedState=qr(1|n,{destroy:void 0},a,s===void 0?null:s)}function Al(e,n,a,s){var c=nn();s=s===void 0?null:s;var f=c.memoizedState.inst;Pt!==null&&s!==null&&Mu(s,Pt.memoizedState.deps)?c.memoizedState=qr(n,f,a,s):(st.flags|=e,c.memoizedState=qr(1|n,f,a,s))}function Yp(e,n){_l(8390656,8,e,n)}function Iu(e,n){Al(2048,8,e,n)}function X_(e){st.flags|=4;var n=st.updateQueue;if(n===null)n=ml(),st.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Wp(e){var n=nn().memoizedState;return X_({ref:n,nextImpl:e}),function(){if((Lt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function qp(e,n){return Al(4,2,e,n)}function jp(e,n){return Al(4,4,e,n)}function Qp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Jp(e,n,a){a=a!=null?a.concat([e]):null,Al(4,4,Qp.bind(null,n,e),a)}function Ou(){}function Zp(e,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Mu(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function Kp(e,n){var a=nn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Mu(n,s[1]))return s[0];if(s=e(),fr){qe(!0);try{e()}finally{qe(!1)}}return a.memoizedState=[s,n],s}function Bu(e,n,a){return a===void 0||(ki&1073741824)!==0&&(_t&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=$0(),st.lanes|=e,Ra|=e,a)}function $p(e,n,a,s){return Yn(a,n)?a:Xr.current!==null?(e=Bu(e,a,s),Yn(e,n)||(cn=!0),e):(ki&42)===0||(ki&1073741824)!==0&&(_t&261930)===0?(cn=!0,e.memoizedState=a):(e=$0(),st.lanes|=e,Ra|=e,n)}function e0(e,n,a,s,c){var f=j.p;j.p=f!==0&&8>f?f:8;var g=O.T,M={};O.T=M,Fu(e,!1,n,a);try{var I=c(),Z=O.S;if(Z!==null&&Z(M,I),I!==null&&typeof I=="object"&&typeof I.then=="function"){var ue=F_(I,s);io(e,n,ue,Zn(e))}else io(e,n,s,Zn(e))}catch(me){io(e,n,{then:function(){},status:"rejected",reason:me},Zn())}finally{j.p=f,g!==null&&M.types!==null&&(g.types=M.types),O.T=g}}function Y_(){}function zu(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=t0(e).queue;e0(e,c,n,q,a===null?Y_:function(){return n0(e),a(s)})}function t0(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:q,baseState:q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:q},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function n0(e){var n=t0(e);n.next===null&&(n=e.alternate.memoizedState),io(e,n.next.queue,{},Zn())}function Pu(){return En(So)}function i0(){return nn().memoizedState}function a0(){return nn().memoizedState}function W_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Zn();e=ba(a);var s=ya(n,e,a);s!==null&&(Gn(s,n,a),Ks(s,n,a)),n={cache:hu()},e.payload=n;return}n=n.return}}function q_(e,n,a){var s=Zn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},vl(e)?s0(n,a):(a=nu(e,n,a,s),a!==null&&(Gn(a,e,s),o0(a,n,s)))}function r0(e,n,a){var s=Zn();io(e,n,a,s)}function io(e,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(vl(e))s0(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,M=f(g,a);if(c.hasEagerState=!0,c.eagerState=M,Yn(M,g))return el(e,n,c,0),Yt===null&&$o(),!1}catch{}finally{}if(a=nu(e,n,c,s),a!==null)return Gn(a,e,s),o0(a,n,s),!0}return!1}function Fu(e,n,a,s){if(s={lane:2,revertLane:_f(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},vl(e)){if(n)throw Error(r(479))}else n=nu(e,a,s,2),n!==null&&Gn(n,e,2)}function vl(e){var n=e.alternate;return e===st||n!==null&&n===st}function s0(e,n){Yr=hl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function o0(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Ls(e,a)}}var ao={readContext:En,use:gl,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useLayoutEffect:Kt,useInsertionEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useSyncExternalStore:Kt,useId:Kt,useHostTransitionStatus:Kt,useFormState:Kt,useActionState:Kt,useOptimistic:Kt,useMemoCache:Kt,useCacheRefresh:Kt};ao.useEffectEvent=Kt;var l0={readContext:En,use:gl,useCallback:function(e,n){return Ln().memoizedState=[e,n===void 0?null:n],e},useContext:En,useEffect:Yp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,_l(4194308,4,Qp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return _l(4194308,4,e,n)},useInsertionEffect:function(e,n){_l(4,2,e,n)},useMemo:function(e,n){var a=Ln();n=n===void 0?null:n;var s=e();if(fr){qe(!0);try{e()}finally{qe(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Ln();if(a!==void 0){var c=a(n);if(fr){qe(!0);try{a(n)}finally{qe(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=q_.bind(null,st,e),[s.memoizedState,e]},useRef:function(e){var n=Ln();return e={current:e},n.memoizedState=e},useState:function(e){e=Lu(e);var n=e.queue,a=r0.bind(null,st,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Ou,useDeferredValue:function(e,n){var a=Ln();return Bu(a,e,n)},useTransition:function(){var e=Lu(!1);return e=e0.bind(null,st,e.queue,!0,!1),Ln().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=st,c=Ln();if(bt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Yt===null)throw Error(r(349));(_t&127)!==0||wp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Yp(Up.bind(null,s,f,e),[e]),s.flags|=2048,qr(9,{destroy:void 0},Dp.bind(null,s,f,a,n),null),a},useId:function(){var e=Ln(),n=Yt.identifierPrefix;if(bt){var a=Ti,s=Ei;a=(s&~(1<<32-Ve(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=pl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=G_++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Pu,useFormState:Gp,useActionState:Gp,useOptimistic:function(e){var n=Ln();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Fu.bind(null,st,!0,a),a.dispatch=n,[e,n]},useMemoCache:wu,useCacheRefresh:function(){return Ln().memoizedState=W_.bind(null,st)},useEffectEvent:function(e){var n=Ln(),a={impl:e};return n.memoizedState=a,function(){if((Lt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Gu={readContext:En,use:gl,useCallback:Zp,useContext:En,useEffect:Iu,useImperativeHandle:Jp,useInsertionEffect:qp,useLayoutEffect:jp,useMemo:Kp,useReducer:xl,useRef:Xp,useState:function(){return xl(Xi)},useDebugValue:Ou,useDeferredValue:function(e,n){var a=nn();return $p(a,Pt.memoizedState,e,n)},useTransition:function(){var e=xl(Xi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:no(e),n]},useSyncExternalStore:Rp,useId:i0,useHostTransitionStatus:Pu,useFormState:Hp,useActionState:Hp,useOptimistic:function(e,n){var a=nn();return Ip(a,Pt,e,n)},useMemoCache:wu,useCacheRefresh:a0};Gu.useEffectEvent=Wp;var c0={readContext:En,use:gl,useCallback:Zp,useContext:En,useEffect:Iu,useImperativeHandle:Jp,useInsertionEffect:qp,useLayoutEffect:jp,useMemo:Kp,useReducer:Uu,useRef:Xp,useState:function(){return Uu(Xi)},useDebugValue:Ou,useDeferredValue:function(e,n){var a=nn();return Pt===null?Bu(a,e,n):$p(a,Pt.memoizedState,e,n)},useTransition:function(){var e=Uu(Xi)[0],n=nn().memoizedState;return[typeof e=="boolean"?e:no(e),n]},useSyncExternalStore:Rp,useId:i0,useHostTransitionStatus:Pu,useFormState:kp,useActionState:kp,useOptimistic:function(e,n){var a=nn();return Pt!==null?Ip(a,Pt,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:wu,useCacheRefresh:a0};c0.useEffectEvent=Wp;function Hu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:x({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Vu={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Zn(),c=ba(s);c.payload=n,a!=null&&(c.callback=a),n=ya(e,c,s),n!==null&&(Gn(n,e,s),Ks(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Zn(),c=ba(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ya(e,c,s),n!==null&&(Gn(n,e,s),Ks(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Zn(),s=ba(a);s.tag=2,n!=null&&(s.callback=n),n=ya(e,s,a),n!==null&&(Gn(n,e,a),Ks(n,e,a))}};function u0(e,n,a,s,c,f,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!Xs(a,s)||!Xs(c,f):!0}function f0(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Vu.enqueueReplaceState(n,n.state,null)}function dr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=x({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function d0(e){Ko(e)}function h0(e){console.error(e)}function p0(e){Ko(e)}function Sl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function m0(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function ku(e,n,a){return a=ba(a),a.tag=3,a.payload={element:null},a.callback=function(){Sl(e,n)},a}function g0(e){return e=ba(e),e.tag=3,e}function x0(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){m0(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){m0(n,a,s),typeof c!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var M=s.stack;this.componentDidCatch(s.value,{componentStack:M!==null?M:""})})}function j_(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Fr(n,a,c,!0),a=qn.current,a!==null){switch(a.tag){case 31:case 13:return oi===null?Nl():a.alternate===null&&$t===0&&($t=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===ll?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),mf(e,s,c)),!1;case 22:return a.flags|=65536,s===ll?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),mf(e,s,c)),!1}throw Error(r(435,a.tag))}return mf(e,s,c),Nl(),!1}if(bt)return n=qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==lu&&(e=Error(r(422),{cause:s}),qs(ii(e,a)))):(s!==lu&&(n=Error(r(423),{cause:s}),qs(ii(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=ii(s,a),c=ku(e.stateNode,s,c),Au(e,c),$t!==4&&($t=2)),!1;var f=Error(r(520),{cause:s});if(f=ii(f,a),ho===null?ho=[f]:ho.push(f),$t!==4&&($t=2),n===null)return!0;s=ii(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=ku(a.stateNode,s,e),Au(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(wa===null||!wa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=g0(c),x0(c,e,a,s),Au(a,c),!1}a=a.return}while(a!==null);return!1}var Xu=Error(r(461)),cn=!1;function Tn(e,n,a,s){n.child=e===null?Sp(n,null,a,s):ur(n,e.child,a,s)}function _0(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var M in s)M!=="ref"&&(g[M]=s[M])}else g=s;return sr(n),s=Eu(e,n,a,g,f,c),M=Tu(),e!==null&&!cn?(Cu(e,n,c),Yi(e,n,c)):(bt&&M&&su(n),n.flags|=1,Tn(e,n,s,c),n.child)}function A0(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!iu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,v0(e,n,f,s,c)):(e=nl(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Ku(e,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Xs,a(g,s)&&e.ref===n.ref)return Yi(e,n,c)}return n.flags|=1,e=Fi(f,s),e.ref=n.ref,e.return=n,n.child=e}function v0(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Xs(f,s)&&e.ref===n.ref)if(cn=!1,n.pendingProps=s=f,Ku(e,c))(e.flags&131072)!==0&&(cn=!0);else return n.lanes=e.lanes,Yi(e,n,c)}return Yu(e,n,a,s,c)}function S0(e,n,a,s){var c=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return b0(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&sl(n,f!==null?f.cachePool:null),f!==null?Mp(n,f):Su(),Ep(n);else return s=n.lanes=536870912,b0(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(sl(n,f.cachePool),Mp(n,f),Ea(),n.memoizedState=null):(e!==null&&sl(n,null),Su(),Ea());return Tn(e,n,c,a),n.child}function ro(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function b0(e,n,a,s,c){var f=mu();return f=f===null?null:{parent:on._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&sl(n,null),Su(),Ep(n),e!==null&&Fr(e,n,s,!0),n.childLanes=c,null}function bl(e,n){return n=Ml({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function y0(e,n,a){return ur(n,e.child,null,a),e=bl(n,n.pendingProps),e.flags|=2,jn(n),n.memoizedState=null,e}function Q_(e,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(bt){if(s.mode==="hidden")return e=bl(n,s),n.lanes=536870912,ro(null,e);if(yu(n),(e=jt)?(e=Om(e,si),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:xa!==null?{id:Ei,overflow:Ti}:null,retryLane:536870912,hydrationErrors:null},a=sp(e),a.return=n,n.child=a,Mn=n,jt=null)):e=null,e===null)throw Aa(n);return n.lanes=536870912,null}return bl(n,s)}var f=e.memoizedState;if(f!==null){var g=f.dehydrated;if(yu(n),c)if(n.flags&256)n.flags&=-257,n=y0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(cn||Fr(e,n,a,!1),c=(a&e.childLanes)!==0,cn||c){if(s=Yt,s!==null&&(g=Ns(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,nr(e,g),Gn(s,e,g),Xu;Nl(),n=y0(e,n,a)}else e=f.treeContext,jt=li(g.nextSibling),Mn=n,bt=!0,_a=null,si=!1,e!==null&&cp(n,e),n=bl(n,s),n.flags|=4096;return n}return e=Fi(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function yl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Yu(e,n,a,s,c){return sr(n),a=Eu(e,n,a,s,void 0,c),s=Tu(),e!==null&&!cn?(Cu(e,n,c),Yi(e,n,c)):(bt&&s&&su(n),n.flags|=1,Tn(e,n,a,c),n.child)}function M0(e,n,a,s,c,f){return sr(n),n.updateQueue=null,a=Cp(n,s,a,c),Tp(e),s=Tu(),e!==null&&!cn?(Cu(e,n,f),Yi(e,n,f)):(bt&&s&&su(n),n.flags|=1,Tn(e,n,a,f),n.child)}function E0(e,n,a,s,c){if(sr(n),n.stateNode===null){var f=Or,g=a.contextType;typeof g=="object"&&g!==null&&(f=En(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Vu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},xu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?En(g):Or,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Hu(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Vu.enqueueReplaceState(f,f.state,null),eo(n,s,f,c),$s(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var M=n.memoizedProps,I=dr(a,M);f.props=I;var Z=f.context,ue=a.contextType;g=Or,typeof ue=="object"&&ue!==null&&(g=En(ue));var me=a.getDerivedStateFromProps;ue=typeof me=="function"||typeof f.getSnapshotBeforeUpdate=="function",M=n.pendingProps!==M,ue||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(M||Z!==g)&&f0(n,f,s,g),Sa=!1;var $=n.memoizedState;f.state=$,eo(n,s,f,c),$s(),Z=n.memoizedState,M||$!==Z||Sa?(typeof me=="function"&&(Hu(n,a,me,s),Z=n.memoizedState),(I=Sa||u0(n,a,I,s,$,Z,g))?(ue||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Z),f.props=s,f.state=Z,f.context=g,s=I):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,_u(e,n),g=n.memoizedProps,ue=dr(a,g),f.props=ue,me=n.pendingProps,$=f.context,Z=a.contextType,I=Or,typeof Z=="object"&&Z!==null&&(I=En(Z)),M=a.getDerivedStateFromProps,(Z=typeof M=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==me||$!==I)&&f0(n,f,s,I),Sa=!1,$=n.memoizedState,f.state=$,eo(n,s,f,c),$s();var re=n.memoizedState;g!==me||$!==re||Sa||e!==null&&e.dependencies!==null&&al(e.dependencies)?(typeof M=="function"&&(Hu(n,a,M,s),re=n.memoizedState),(ue=Sa||u0(n,a,ue,s,$,re,I)||e!==null&&e.dependencies!==null&&al(e.dependencies))?(Z||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,re,I),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,re,I)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=re),f.props=s,f.state=re,f.context=I,s=ue):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&$===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&$===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,yl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=ur(n,e.child,null,c),n.child=ur(n,null,a,c)):Tn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Yi(e,n,c),e}function T0(e,n,a,s){return ar(),n.flags|=256,Tn(e,n,a,s),n.child}var Wu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function qu(e){return{baseLanes:e,cachePool:mp()}}function ju(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Jn),e}function C0(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=e!==null&&e.memoizedState===null?!1:(tn.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,e===null){if(bt){if(c?Ma(n):Ea(),(e=jt)?(e=Om(e,si),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:xa!==null?{id:Ei,overflow:Ti}:null,retryLane:536870912,hydrationErrors:null},a=sp(e),a.return=n,n.child=a,Mn=n,jt=null)):e=null,e===null)throw Aa(n);return Uf(e)?n.lanes=32:n.lanes=536870912,null}var M=s.children;return s=s.fallback,c?(Ea(),c=n.mode,M=Ml({mode:"hidden",children:M},c),s=ir(s,c,a,null),M.return=n,s.return=n,M.sibling=s,n.child=M,s=n.child,s.memoizedState=qu(a),s.childLanes=ju(e,g,a),n.memoizedState=Wu,ro(null,s)):(Ma(n),Qu(n,M))}var I=e.memoizedState;if(I!==null&&(M=I.dehydrated,M!==null)){if(f)n.flags&256?(Ma(n),n.flags&=-257,n=Ju(e,n,a)):n.memoizedState!==null?(Ea(),n.child=e.child,n.flags|=128,n=null):(Ea(),M=s.fallback,c=n.mode,s=Ml({mode:"visible",children:s.children},c),M=ir(M,c,a,null),M.flags|=2,s.return=n,M.return=n,s.sibling=M,n.child=s,ur(n,e.child,null,a),s=n.child,s.memoizedState=qu(a),s.childLanes=ju(e,g,a),n.memoizedState=Wu,n=ro(null,s));else if(Ma(n),Uf(M)){if(g=M.nextSibling&&M.nextSibling.dataset,g)var Z=g.dgst;g=Z,s=Error(r(419)),s.stack="",s.digest=g,qs({value:s,source:null,stack:null}),n=Ju(e,n,a)}else if(cn||Fr(e,n,a,!1),g=(a&e.childLanes)!==0,cn||g){if(g=Yt,g!==null&&(s=Ns(g,a),s!==0&&s!==I.retryLane))throw I.retryLane=s,nr(e,s),Gn(g,e,s),Xu;Df(M)||Nl(),n=Ju(e,n,a)}else Df(M)?(n.flags|=192,n.child=e.child,n=null):(e=I.treeContext,jt=li(M.nextSibling),Mn=n,bt=!0,_a=null,si=!1,e!==null&&cp(n,e),n=Qu(n,s.children),n.flags|=4096);return n}return c?(Ea(),M=s.fallback,c=n.mode,I=e.child,Z=I.sibling,s=Fi(I,{mode:"hidden",children:s.children}),s.subtreeFlags=I.subtreeFlags&65011712,Z!==null?M=Fi(Z,M):(M=ir(M,c,a,null),M.flags|=2),M.return=n,s.return=n,s.sibling=M,n.child=s,ro(null,s),s=n.child,M=e.child.memoizedState,M===null?M=qu(a):(c=M.cachePool,c!==null?(I=on._currentValue,c=c.parent!==I?{parent:I,pool:I}:c):c=mp(),M={baseLanes:M.baseLanes|a,cachePool:c}),s.memoizedState=M,s.childLanes=ju(e,g,a),n.memoizedState=Wu,ro(e.child,s)):(Ma(n),a=e.child,e=a.sibling,a=Fi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(g=n.deletions,g===null?(n.deletions=[e],n.flags|=16):g.push(e)),n.child=a,n.memoizedState=null,a)}function Qu(e,n){return n=Ml({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Ml(e,n){return e=Wn(22,e,null,n),e.lanes=0,e}function Ju(e,n,a){return ur(n,e.child,null,a),e=Qu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function R0(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),fu(e.return,n,a)}function Zu(e,n,a,s,c,f){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function w0(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var g=tn.current,M=(g&2)!==0;if(M?(g=g&1|2,n.flags|=128):g&=1,be(tn,g),Tn(e,n,s,a),s=bt?Ws:0,!M&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&R0(e,a,n);else if(e.tag===19)R0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&dl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Zu(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&dl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Zu(n,!0,a,null,f,s);break;case"together":Zu(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Yi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ra|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Fr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Fi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Fi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Ku(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&al(e)))}function J_(e,n,a){switch(n.tag){case 3:we(n,n.stateNode.containerInfo),va(n,on,e.memoizedState.cache),ar();break;case 27:case 5:Xe(n);break;case 4:we(n,n.stateNode.containerInfo);break;case 10:va(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,yu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?C0(e,n,a):(Ma(n),e=Yi(e,n,a),e!==null?e.sibling:null);Ma(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Fr(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return w0(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),be(tn,tn.current),s)break;return null;case 22:return n.lanes=0,S0(e,n,a,n.pendingProps);case 24:va(n,on,e.memoizedState.cache)}return Yi(e,n,a)}function D0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)cn=!0;else{if(!Ku(e,a)&&(n.flags&128)===0)return cn=!1,J_(e,n,a);cn=(e.flags&131072)!==0}else cn=!1,bt&&(n.flags&1048576)!==0&&lp(n,Ws,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(e=lr(n.elementType),n.type=e,typeof e=="function")iu(e)?(s=dr(e,s),n.tag=1,n=E0(null,n,e,s,a)):(n.tag=0,n=Yu(null,n,e,s,a));else{if(e!=null){var c=e.$$typeof;if(c===z){n.tag=11,n=_0(null,n,e,s,a);break e}else if(c===P){n.tag=14,n=A0(null,n,e,s,a);break e}}throw n=ge(e)||e,Error(r(306,n,""))}}return n;case 0:return Yu(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=dr(s,n.pendingProps),E0(e,n,s,c,a);case 3:e:{if(we(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,_u(e,n),eo(n,s,null,a);var g=n.memoizedState;if(s=g.cache,va(n,on,s),s!==f.cache&&du(n,[on],a,!0),$s(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=T0(e,n,s,a);break e}else if(s!==c){c=ii(Error(r(424)),n),qs(c),n=T0(e,n,s,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(jt=li(e.firstChild),Mn=n,bt=!0,_a=null,si=!0,a=Sp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ar(),s===c){n=Yi(e,n,a);break e}Tn(e,n,s,a)}n=n.child}return n;case 26:return yl(e,n),e===null?(a=Hm(n.type,null,n.pendingProps,null))?n.memoizedState=a:bt||(a=n.type,e=n.pendingProps,s=Gl(te.current).createElement(a),s[sn]=n,s[dn]=e,Cn(s,a,e),K(s),n.stateNode=s):n.memoizedState=Hm(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Xe(n),e===null&&bt&&(s=n.stateNode=Pm(n.type,n.pendingProps,te.current),Mn=n,si=!0,c=jt,Na(n.type)?(Lf=c,jt=li(s.firstChild)):jt=c),Tn(e,n,n.pendingProps.children,a),yl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&bt&&((c=s=jt)&&(s=TA(s,n.type,n.pendingProps,si),s!==null?(n.stateNode=s,Mn=n,jt=li(s.firstChild),si=!1,c=!0):c=!1),c||Aa(n)),Xe(n),c=n.type,f=n.pendingProps,g=e!==null?e.memoizedProps:null,s=f.children,Cf(c,f)?s=null:g!==null&&Cf(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=Eu(e,n,H_,null,null,a),So._currentValue=c),yl(e,n),Tn(e,n,s,a),n.child;case 6:return e===null&&bt&&((e=a=jt)&&(a=CA(a,n.pendingProps,si),a!==null?(n.stateNode=a,Mn=n,jt=null,e=!0):e=!1),e||Aa(n)),null;case 13:return C0(e,n,a);case 4:return we(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=ur(n,null,s,a):Tn(e,n,s,a),n.child;case 11:return _0(e,n,n.type,n.pendingProps,a);case 7:return Tn(e,n,n.pendingProps,a),n.child;case 8:return Tn(e,n,n.pendingProps.children,a),n.child;case 12:return Tn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,va(n,n.type,s.value),Tn(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,sr(n),c=En(c),s=s(c),n.flags|=1,Tn(e,n,s,a),n.child;case 14:return A0(e,n,n.type,n.pendingProps,a);case 15:return v0(e,n,n.type,n.pendingProps,a);case 19:return w0(e,n,a);case 31:return Q_(e,n,a);case 22:return S0(e,n,a,n.pendingProps);case 24:return sr(n),s=En(on),e===null?(c=mu(),c===null&&(c=Yt,f=hu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},xu(n),va(n,on,c)):((e.lanes&a)!==0&&(_u(e,n),eo(n,null,null,a),$s()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),va(n,on,s)):(s=f.cache,va(n,on,s),s!==c.cache&&du(n,[on],a,!0))),Tn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Wi(e){e.flags|=4}function $u(e,n,a,s,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(im())e.flags|=8192;else throw cr=ll,gu}else e.flags&=-16777217}function U0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Wm(n))if(im())e.flags|=8192;else throw cr=ll,gu}function El(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?zt():536870912,e.lanes|=n,Zr|=n)}function so(e,n){if(!bt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Qt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function Z_(e,n,a){var s=n.pendingProps;switch(ou(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qt(n),null;case 1:return Qt(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Vi(on),Ge(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Pr(n)?Wi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,cu())),Qt(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Wi(n),f!==null?(Qt(n),U0(n,f)):(Qt(n),$u(n,c,null,s,a))):f?f!==e.memoizedState?(Wi(n),Qt(n),U0(n,f)):(Qt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&Wi(n),Qt(n),$u(n,c,e,s,a)),null;case 27:if(lt(n),a=te.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Wi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qt(n),null}e=Ee.current,Pr(n)?up(n):(e=Pm(c,s,a),n.stateNode=e,Wi(n))}return Qt(n),null;case 5:if(lt(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Wi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Qt(n),null}if(f=Ee.current,Pr(n))up(n);else{var g=Gl(te.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(c,{is:s.is}):g.createElement(c)}}f[sn]=n,f[dn]=s;e:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break e;for(;g.sibling===null;){if(g.return===null||g.return===n)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;e:switch(Cn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&Wi(n)}}return Qt(n),$u(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Wi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=te.current,Pr(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=Mn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[sn]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Cm(e.nodeValue,a)),e||Aa(n,!0)}else e=Gl(e).createTextNode(s),e[sn]=n,n.stateNode=e}return Qt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=Pr(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[sn]=n}else ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),e=!1}else a=cu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(jn(n),n):(jn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Qt(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Pr(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[sn]=n}else ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Qt(n),c=!1}else c=cu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(jn(n),n):(jn(n),null)}return jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),El(n,n.updateQueue),Qt(n),null);case 4:return Ge(),e===null&&bf(n.stateNode.containerInfo),Qt(n),null;case 10:return Vi(n.type),Qt(n),null;case 19:if(ae(tn),s=n.memoizedState,s===null)return Qt(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)so(s,!1);else{if($t!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=dl(e),f!==null){for(n.flags|=128,so(s,!1),e=f.updateQueue,n.updateQueue=e,El(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)rp(a,e),a=a.sibling;return be(tn,tn.current&1|2),bt&&Gi(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&y()>Dl&&(n.flags|=128,c=!0,so(s,!1),n.lanes=4194304)}else{if(!c)if(e=dl(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,El(n,e),so(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!bt)return Qt(n),null}else 2*y()-s.renderingStartTime>Dl&&a!==536870912&&(n.flags|=128,c=!0,so(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=y(),e.sibling=null,a=tn.current,be(tn,c?a&1|2:a&1),bt&&Gi(n,s.treeForkCount),e):(Qt(n),null);case 22:case 23:return jn(n),bu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Qt(n),n.subtreeFlags&6&&(n.flags|=8192)):Qt(n),a=n.updateQueue,a!==null&&El(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&ae(or),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Vi(on),Qt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function K_(e,n){switch(ou(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Vi(on),Ge(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return lt(n),null;case 31:if(n.memoizedState!==null){if(jn(n),n.alternate===null)throw Error(r(340));ar()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(jn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ar()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ae(tn),null;case 4:return Ge(),null;case 10:return Vi(n.type),null;case 22:case 23:return jn(n),bu(),e!==null&&ae(or),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Vi(on),null;case 25:return null;default:return null}}function L0(e,n){switch(ou(n),n.tag){case 3:Vi(on),Ge();break;case 26:case 27:case 5:lt(n);break;case 4:Ge();break;case 31:n.memoizedState!==null&&jn(n);break;case 13:jn(n);break;case 19:ae(tn);break;case 10:Vi(n.type);break;case 22:case 23:jn(n),bu(),e!==null&&ae(or);break;case 24:Vi(on)}}function oo(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==c)}}catch(M){Bt(n,n.return,M)}}function Ta(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var g=s.inst,M=g.destroy;if(M!==void 0){g.destroy=void 0,c=n;var I=a,Z=M;try{Z()}catch(ue){Bt(c,I,ue)}}}s=s.next}while(s!==f)}}catch(ue){Bt(n,n.return,ue)}}function N0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{yp(n,a)}catch(s){Bt(e,e.return,s)}}}function I0(e,n,a){a.props=dr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Bt(e,n,s)}}function lo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(c){Bt(e,n,c)}}function Ci(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Bt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Bt(e,n,c)}else a.current=null}function O0(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Bt(e,e.return,c)}}function ef(e,n,a){try{var s=e.stateNode;vA(s,e.type,a,n),s[dn]=n}catch(c){Bt(e,e.return,c)}}function B0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Na(e.type)||e.tag===4}function tf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||B0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Na(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function nf(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=zi));else if(s!==4&&(s===27&&Na(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(nf(e,n,a),e=e.sibling;e!==null;)nf(e,n,a),e=e.sibling}function Tl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Na(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Tl(e,n,a),e=e.sibling;e!==null;)Tl(e,n,a),e=e.sibling}function z0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Cn(n,s,a),n[sn]=e,n[dn]=a}catch(f){Bt(e,e.return,f)}}var qi=!1,un=!1,af=!1,P0=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function $_(e,n){if(e=e.containerInfo,Ef=ql,e=Jh(e),Jc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var g=0,M=-1,I=-1,Z=0,ue=0,me=e,$=null;t:for(;;){for(var re;me!==a||c!==0&&me.nodeType!==3||(M=g+c),me!==f||s!==0&&me.nodeType!==3||(I=g+s),me.nodeType===3&&(g+=me.nodeValue.length),(re=me.firstChild)!==null;)$=me,me=re;for(;;){if(me===e)break t;if($===a&&++Z===c&&(M=g),$===f&&++ue===s&&(I=g),(re=me.nextSibling)!==null)break;me=$,$=me.parentNode}me=re}a=M===-1||I===-1?null:{start:M,end:I}}else a=null}a=a||{start:0,end:0}}else a=null;for(Tf={focusedElem:e,selectionRange:a},ql=!1,Sn=n;Sn!==null;)if(n=Sn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,Sn=e;else for(;Sn!==null;){switch(n=Sn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Fe=dr(a.type,c);e=s.getSnapshotBeforeUpdate(Fe,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(et){Bt(a,a.return,et)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)wf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":wf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,Sn=e;break}Sn=n.return}}function F0(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Qi(e,a),s&4&&oo(5,a);break;case 1:if(Qi(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(g){Bt(a,a.return,g)}else{var c=dr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Bt(a,a.return,g)}}s&64&&N0(a),s&512&&lo(a,a.return);break;case 3:if(Qi(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{yp(e,n)}catch(g){Bt(a,a.return,g)}}break;case 27:n===null&&s&4&&z0(a);case 26:case 5:Qi(e,a),n===null&&s&4&&O0(a),s&512&&lo(a,a.return);break;case 12:Qi(e,a);break;case 31:Qi(e,a),s&4&&V0(e,a);break;case 13:Qi(e,a),s&4&&k0(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=lA.bind(null,a),RA(e,a))));break;case 22:if(s=a.memoizedState!==null||qi,!s){n=n!==null&&n.memoizedState!==null||un,c=qi;var f=un;qi=s,(un=n)&&!f?Ji(e,a,(a.subtreeFlags&8772)!==0):Qi(e,a),qi=c,un=f}break;case 30:break;default:Qi(e,a)}}function G0(e){var n=e.alternate;n!==null&&(e.alternate=null,G0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Bs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Jt=null,Bn=!1;function ji(e,n,a){for(a=a.child;a!==null;)H0(e,n,a),a=a.sibling}function H0(e,n,a){if(Me&&typeof Me.onCommitFiberUnmount=="function")try{Me.onCommitFiberUnmount(Se,a)}catch{}switch(a.tag){case 26:un||Ci(a,n),ji(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:un||Ci(a,n);var s=Jt,c=Bn;Na(a.type)&&(Jt=a.stateNode,Bn=!1),ji(e,n,a),_o(a.stateNode),Jt=s,Bn=c;break;case 5:un||Ci(a,n);case 6:if(s=Jt,c=Bn,Jt=null,ji(e,n,a),Jt=s,Bn=c,Jt!==null)if(Bn)try{(Jt.nodeType===9?Jt.body:Jt.nodeName==="HTML"?Jt.ownerDocument.body:Jt).removeChild(a.stateNode)}catch(f){Bt(a,n,f)}else try{Jt.removeChild(a.stateNode)}catch(f){Bt(a,n,f)}break;case 18:Jt!==null&&(Bn?(e=Jt,Nm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),rs(e)):Nm(Jt,a.stateNode));break;case 4:s=Jt,c=Bn,Jt=a.stateNode.containerInfo,Bn=!0,ji(e,n,a),Jt=s,Bn=c;break;case 0:case 11:case 14:case 15:Ta(2,a,n),un||Ta(4,a,n),ji(e,n,a);break;case 1:un||(Ci(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&I0(a,n,s)),ji(e,n,a);break;case 21:ji(e,n,a);break;case 22:un=(s=un)||a.memoizedState!==null,ji(e,n,a),un=s;break;default:ji(e,n,a)}}function V0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{rs(e)}catch(a){Bt(n,n.return,a)}}}function k0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{rs(e)}catch(a){Bt(n,n.return,a)}}function eA(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new P0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new P0),n;default:throw Error(r(435,e.tag))}}function Cl(e,n){var a=eA(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=cA.bind(null,e,s);s.then(c,c)}})}function zn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=e,g=n,M=g;e:for(;M!==null;){switch(M.tag){case 27:if(Na(M.type)){Jt=M.stateNode,Bn=!1;break e}break;case 5:Jt=M.stateNode,Bn=!1;break e;case 3:case 4:Jt=M.stateNode.containerInfo,Bn=!0;break e}M=M.return}if(Jt===null)throw Error(r(160));H0(f,g,c),Jt=null,Bn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)X0(n,e),n=n.sibling}var mi=null;function X0(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:zn(n,e),Pn(e),s&4&&(Ta(3,e,e.return),oo(3,e),Ta(5,e,e.return));break;case 1:zn(n,e),Pn(e),s&512&&(un||a===null||Ci(a,a.return)),s&64&&qi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=mi;if(zn(n,e),Pn(e),s&512&&(un||a===null||Ci(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){e:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ka]||f[sn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Cn(f,s,a),f[sn]=e,K(f),s=f;break e;case"link":var g=Xm("link","href",c).get(s+(a.href||""));if(g){for(var M=0;M<g.length;M++)if(f=g[M],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(M,1);break t}}f=c.createElement(s),Cn(f,s,a),c.head.appendChild(f);break;case"meta":if(g=Xm("meta","content",c).get(s+(a.content||""))){for(M=0;M<g.length;M++)if(f=g[M],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(M,1);break t}}f=c.createElement(s),Cn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[sn]=e,K(f),s=f}e.stateNode=s}else Ym(c,e.type,e.stateNode);else e.stateNode=km(c,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Ym(c,e.type,e.stateNode):km(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&ef(e,e.memoizedProps,a.memoizedProps)}break;case 27:zn(n,e),Pn(e),s&512&&(un||a===null||Ci(a,a.return)),a!==null&&s&4&&ef(e,e.memoizedProps,a.memoizedProps);break;case 5:if(zn(n,e),Pn(e),s&512&&(un||a===null||Ci(a,a.return)),e.flags&32){c=e.stateNode;try{Mi(c,"")}catch(Fe){Bt(e,e.return,Fe)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,ef(e,c,a!==null?a.memoizedProps:c)),s&1024&&(af=!0);break;case 6:if(zn(n,e),Pn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(Fe){Bt(e,e.return,Fe)}}break;case 3:if(kl=null,c=mi,mi=Hl(n.containerInfo),zn(n,e),mi=c,Pn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{rs(n.containerInfo)}catch(Fe){Bt(e,e.return,Fe)}af&&(af=!1,Y0(e));break;case 4:s=mi,mi=Hl(e.stateNode.containerInfo),zn(n,e),Pn(e),mi=s;break;case 12:zn(n,e),Pn(e);break;case 31:zn(n,e),Pn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Cl(e,s)));break;case 13:zn(n,e),Pn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(wl=y()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Cl(e,s)));break;case 22:c=e.memoizedState!==null;var I=a!==null&&a.memoizedState!==null,Z=qi,ue=un;if(qi=Z||c,un=ue||I,zn(n,e),un=ue,qi=Z,Pn(e),s&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||I||qi||un||hr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){I=a=n;try{if(f=I.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{M=I.stateNode;var me=I.memoizedProps.style,$=me!=null&&me.hasOwnProperty("display")?me.display:null;M.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(Fe){Bt(I,I.return,Fe)}}}else if(n.tag===6){if(a===null){I=n;try{I.stateNode.nodeValue=c?"":I.memoizedProps}catch(Fe){Bt(I,I.return,Fe)}}}else if(n.tag===18){if(a===null){I=n;try{var re=I.stateNode;c?Im(re,!0):Im(I.stateNode,!1)}catch(Fe){Bt(I,I.return,Fe)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Cl(e,a))));break;case 19:zn(n,e),Pn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Cl(e,s)));break;case 30:break;case 21:break;default:zn(n,e),Pn(e)}}function Pn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(B0(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=tf(e);Tl(e,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(Mi(g,""),a.flags&=-33);var M=tf(e);Tl(e,M,g);break;case 3:case 4:var I=a.stateNode.containerInfo,Z=tf(e);nf(e,Z,I);break;default:throw Error(r(161))}}catch(ue){Bt(e,e.return,ue)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Y0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Y0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Qi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)F0(e,n.alternate,n),n=n.sibling}function hr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Ta(4,n,n.return),hr(n);break;case 1:Ci(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&I0(n,n.return,a),hr(n);break;case 27:_o(n.stateNode);case 26:case 5:Ci(n,n.return),hr(n);break;case 22:n.memoizedState===null&&hr(n);break;case 30:hr(n);break;default:hr(n)}e=e.sibling}}function Ji(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:Ji(c,f,a),oo(4,f);break;case 1:if(Ji(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Z){Bt(s,s.return,Z)}if(s=f,c=s.updateQueue,c!==null){var M=s.stateNode;try{var I=c.shared.hiddenCallbacks;if(I!==null)for(c.shared.hiddenCallbacks=null,c=0;c<I.length;c++)bp(I[c],M)}catch(Z){Bt(s,s.return,Z)}}a&&g&64&&N0(f),lo(f,f.return);break;case 27:z0(f);case 26:case 5:Ji(c,f,a),a&&s===null&&g&4&&O0(f),lo(f,f.return);break;case 12:Ji(c,f,a);break;case 31:Ji(c,f,a),a&&g&4&&V0(c,f);break;case 13:Ji(c,f,a),a&&g&4&&k0(c,f);break;case 22:f.memoizedState===null&&Ji(c,f,a),lo(f,f.return);break;case 30:break;default:Ji(c,f,a)}n=n.sibling}}function rf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&js(a))}function sf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&js(e))}function gi(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)W0(e,n,a,s),n=n.sibling}function W0(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:gi(e,n,a,s),c&2048&&oo(9,n);break;case 1:gi(e,n,a,s);break;case 3:gi(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&js(e)));break;case 12:if(c&2048){gi(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,g=f.id,M=f.onPostCommit;typeof M=="function"&&M(g,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(I){Bt(n,n.return,I)}}else gi(e,n,a,s);break;case 31:gi(e,n,a,s);break;case 13:gi(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?gi(e,n,a,s):co(e,n):f._visibility&2?gi(e,n,a,s):(f._visibility|=2,jr(e,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&rf(g,n);break;case 24:gi(e,n,a,s),c&2048&&sf(n.alternate,n);break;default:gi(e,n,a,s)}}function jr(e,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,g=n,M=a,I=s,Z=g.flags;switch(g.tag){case 0:case 11:case 15:jr(f,g,M,I,c),oo(8,g);break;case 23:break;case 22:var ue=g.stateNode;g.memoizedState!==null?ue._visibility&2?jr(f,g,M,I,c):co(f,g):(ue._visibility|=2,jr(f,g,M,I,c)),c&&Z&2048&&rf(g.alternate,g);break;case 24:jr(f,g,M,I,c),c&&Z&2048&&sf(g.alternate,g);break;default:jr(f,g,M,I,c)}n=n.sibling}}function co(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:co(a,s),c&2048&&rf(s.alternate,s);break;case 24:co(a,s),c&2048&&sf(s.alternate,s);break;default:co(a,s)}n=n.sibling}}var uo=8192;function Qr(e,n,a){if(e.subtreeFlags&uo)for(e=e.child;e!==null;)q0(e,n,a),e=e.sibling}function q0(e,n,a){switch(e.tag){case 26:Qr(e,n,a),e.flags&uo&&e.memoizedState!==null&&GA(a,mi,e.memoizedState,e.memoizedProps);break;case 5:Qr(e,n,a);break;case 3:case 4:var s=mi;mi=Hl(e.stateNode.containerInfo),Qr(e,n,a),mi=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=uo,uo=16777216,Qr(e,n,a),uo=s):Qr(e,n,a));break;default:Qr(e,n,a)}}function j0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function fo(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Sn=s,J0(s,e)}j0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Q0(e),e=e.sibling}function Q0(e){switch(e.tag){case 0:case 11:case 15:fo(e),e.flags&2048&&Ta(9,e,e.return);break;case 3:fo(e);break;case 12:fo(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Rl(e)):fo(e);break;default:fo(e)}}function Rl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Sn=s,J0(s,e)}j0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Ta(8,n,n.return),Rl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Rl(n));break;default:Rl(n)}e=e.sibling}}function J0(e,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Ta(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:js(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Sn=s;else e:for(a=e;Sn!==null;){s=Sn;var c=s.sibling,f=s.return;if(G0(s),s===a){Sn=null;break e}if(c!==null){c.return=f,Sn=c;break e}Sn=f}}}var tA={getCacheForType:function(e){var n=En(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return En(on).controller.signal}},nA=typeof WeakMap=="function"?WeakMap:Map,Lt=0,Yt=null,gt=null,_t=0,Ot=0,Qn=null,Ca=!1,Jr=!1,of=!1,Zi=0,$t=0,Ra=0,pr=0,lf=0,Jn=0,Zr=0,ho=null,Fn=null,cf=!1,wl=0,Z0=0,Dl=1/0,Ul=null,wa=null,pn=0,Da=null,Kr=null,Ki=0,uf=0,ff=null,K0=null,po=0,df=null;function Zn(){return(Lt&2)!==0&&_t!==0?_t&-_t:O.T!==null?_f():Is()}function $0(){if(Jn===0)if((_t&536870912)===0||bt){var e=Ce;Ce<<=1,(Ce&3932160)===0&&(Ce=262144),Jn=e}else Jn=536870912;return e=qn.current,e!==null&&(e.flags|=32),Jn}function Gn(e,n,a){(e===Yt&&(Ot===2||Ot===9)||e.cancelPendingCommit!==null)&&($r(e,0),Ua(e,_t,Jn,!1)),Rn(e,a),((Lt&2)===0||e!==Yt)&&(e===Yt&&((Lt&2)===0&&(pr|=a),$t===4&&Ua(e,_t,Jn,!1)),Ri(e))}function em(e,n,a){if((Lt&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||ze(e,n),c=s?rA(e,n):pf(e,n,!0),f=s;do{if(c===0){Jr&&!s&&Ua(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!iA(a)){c=pf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;e:{var M=e;c=ho;var I=M.current.memoizedState.isDehydrated;if(I&&($r(M,g).flags|=256),g=pf(M,g,!1),g!==2){if(of&&!I){M.errorRecoveryDisabledLanes|=f,pr|=f,c=4;break e}f=Fn,Fn=c,f!==null&&(Fn===null?Fn=f:Fn.push.apply(Fn,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){$r(e,0),Ua(e,n,0,!0);break}e:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ua(s,n,Jn,!Ca);break e;case 2:Fn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=wl+300-y(),10<c)){if(Ua(s,n,Jn,!Ca),xe(s,0,!0)!==0)break e;Ki=n,s.timeoutHandle=Um(tm.bind(null,s,a,Fn,Ul,cf,n,Jn,pr,Zr,Ca,f,"Throttled",-0,0),c);break e}tm(s,a,Fn,Ul,cf,n,Jn,pr,Zr,Ca,f,null,-0,0)}}break}while(!0);Ri(e)}function tm(e,n,a,s,c,f,g,M,I,Z,ue,me,$,re){if(e.timeoutHandle=-1,me=n.subtreeFlags,me&8192||(me&16785408)===16785408){me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zi},q0(n,f,me);var Fe=(f&62914560)===f?wl-y():(f&4194048)===f?Z0-y():0;if(Fe=HA(me,Fe),Fe!==null){Ki=f,e.cancelPendingCommit=Fe(cm.bind(null,e,n,f,a,s,c,g,M,I,ue,me,null,$,re)),Ua(e,f,g,!Z);return}}cm(e,n,f,a,s,c,g,M,I)}function iA(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Yn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ua(e,n,a,s){n&=~lf,n&=~pr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-Ve(c),g=1<<f;s[f]=-1,c&=~g}a!==0&&ko(e,a,n)}function Ll(){return(Lt&6)===0?(mo(0),!1):!0}function hf(){if(gt!==null){if(Ot===0)var e=gt.return;else e=gt,Hi=rr=null,Ru(e),kr=null,Js=0,e=gt;for(;e!==null;)L0(e.alternate,e),e=e.return;gt=null}}function $r(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,yA(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Ki=0,hf(),Yt=e,gt=a=Fi(e.current,null),_t=n,Ot=0,Qn=null,Ca=!1,Jr=ze(e,n),of=!1,Zr=Jn=lf=pr=Ra=$t=0,Fn=ho=null,cf=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-Ve(s),f=1<<c;n|=e[c],s&=~f}return Zi=n,$o(),a}function nm(e,n){st=null,O.H=ao,n===Vr||n===ol?(n=_p(),Ot=3):n===gu?(n=_p(),Ot=4):Ot=n===Xu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,gt===null&&($t=1,Sl(e,ii(n,e.current)))}function im(){var e=qn.current;return e===null?!0:(_t&4194048)===_t?oi===null:(_t&62914560)===_t||(_t&536870912)!==0?e===oi:!1}function am(){var e=O.H;return O.H=ao,e===null?ao:e}function rm(){var e=O.A;return O.A=tA,e}function Nl(){$t=4,Ca||(_t&4194048)!==_t&&qn.current!==null||(Jr=!0),(Ra&134217727)===0&&(pr&134217727)===0||Yt===null||Ua(Yt,_t,Jn,!1)}function pf(e,n,a){var s=Lt;Lt|=2;var c=am(),f=rm();(Yt!==e||_t!==n)&&(Ul=null,$r(e,n)),n=!1;var g=$t;e:do try{if(Ot!==0&&gt!==null){var M=gt,I=Qn;switch(Ot){case 8:hf(),g=6;break e;case 3:case 2:case 9:case 6:qn.current===null&&(n=!0);var Z=Ot;if(Ot=0,Qn=null,es(e,M,I,Z),a&&Jr){g=0;break e}break;default:Z=Ot,Ot=0,Qn=null,es(e,M,I,Z)}}aA(),g=$t;break}catch(ue){nm(e,ue)}while(!0);return n&&e.shellSuspendCounter++,Hi=rr=null,Lt=s,O.H=c,O.A=f,gt===null&&(Yt=null,_t=0,$o()),g}function aA(){for(;gt!==null;)sm(gt)}function rA(e,n){var a=Lt;Lt|=2;var s=am(),c=rm();Yt!==e||_t!==n?(Ul=null,Dl=y()+500,$r(e,n)):Jr=ze(e,n);e:do try{if(Ot!==0&&gt!==null){n=gt;var f=Qn;t:switch(Ot){case 1:Ot=0,Qn=null,es(e,n,f,1);break;case 2:case 9:if(gp(f)){Ot=0,Qn=null,om(n);break}n=function(){Ot!==2&&Ot!==9||Yt!==e||(Ot=7),Ri(e)},f.then(n,n);break e;case 3:Ot=7;break e;case 4:Ot=5;break e;case 7:gp(f)?(Ot=0,Qn=null,om(n)):(Ot=0,Qn=null,es(e,n,f,7));break;case 5:var g=null;switch(gt.tag){case 26:g=gt.memoizedState;case 5:case 27:var M=gt;if(g?Wm(g):M.stateNode.complete){Ot=0,Qn=null;var I=M.sibling;if(I!==null)gt=I;else{var Z=M.return;Z!==null?(gt=Z,Il(Z)):gt=null}break t}}Ot=0,Qn=null,es(e,n,f,5);break;case 6:Ot=0,Qn=null,es(e,n,f,6);break;case 8:hf(),$t=6;break e;default:throw Error(r(462))}}sA();break}catch(ue){nm(e,ue)}while(!0);return Hi=rr=null,O.H=s,O.A=c,Lt=a,gt!==null?0:(Yt=null,_t=0,$o(),$t)}function sA(){for(;gt!==null&&!at();)sm(gt)}function sm(e){var n=D0(e.alternate,e,Zi);e.memoizedProps=e.pendingProps,n===null?Il(e):gt=n}function om(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=M0(a,n,n.pendingProps,n.type,void 0,_t);break;case 11:n=M0(a,n,n.pendingProps,n.type.render,n.ref,_t);break;case 5:Ru(n);default:L0(a,n),n=gt=rp(n,Zi),n=D0(a,n,Zi)}e.memoizedProps=e.pendingProps,n===null?Il(e):gt=n}function es(e,n,a,s){Hi=rr=null,Ru(n),kr=null,Js=0;var c=n.return;try{if(j_(e,c,n,a,_t)){$t=1,Sl(e,ii(a,e.current)),gt=null;return}}catch(f){if(c!==null)throw gt=c,f;$t=1,Sl(e,ii(a,e.current)),gt=null;return}n.flags&32768?(bt||s===1?e=!0:Jr||(_t&536870912)!==0?e=!1:(Ca=e=!0,(s===2||s===9||s===3||s===6)&&(s=qn.current,s!==null&&s.tag===13&&(s.flags|=16384))),lm(n,e)):Il(n)}function Il(e){var n=e;do{if((n.flags&32768)!==0){lm(n,Ca);return}e=n.return;var a=Z_(n.alternate,n,Zi);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=e}while(n!==null);$t===0&&($t=5)}function lm(e,n){do{var a=K_(e.alternate,e);if(a!==null){a.flags&=32767,gt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){gt=e;return}gt=e=a}while(e!==null);$t=6,gt=null}function cm(e,n,a,s,c,f,g,M,I){e.cancelPendingCommit=null;do Ol();while(pn!==0);if((Lt&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=tu,kn(e,a,f,g,M,I),e===Yt&&(gt=Yt=null,_t=0),Kr=n,Da=e,Ki=a,uf=f,ff=c,K0=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,uA(se,function(){return pm(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=O.T,O.T=null,c=j.p,j.p=2,g=Lt,Lt|=4;try{$_(e,n,a)}finally{Lt=g,j.p=c,O.T=s}}pn=1,um(),fm(),dm()}}function um(){if(pn===1){pn=0;var e=Da,n=Kr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=O.T,O.T=null;var s=j.p;j.p=2;var c=Lt;Lt|=4;try{X0(n,e);var f=Tf,g=Jh(e.containerInfo),M=f.focusedElem,I=f.selectionRange;if(g!==M&&M&&M.ownerDocument&&Qh(M.ownerDocument.documentElement,M)){if(I!==null&&Jc(M)){var Z=I.start,ue=I.end;if(ue===void 0&&(ue=Z),"selectionStart"in M)M.selectionStart=Z,M.selectionEnd=Math.min(ue,M.value.length);else{var me=M.ownerDocument||document,$=me&&me.defaultView||window;if($.getSelection){var re=$.getSelection(),Fe=M.textContent.length,et=Math.min(I.start,Fe),Gt=I.end===void 0?et:Math.min(I.end,Fe);!re.extend&&et>Gt&&(g=Gt,Gt=et,et=g);var Y=jh(M,et),H=jh(M,Gt);if(Y&&H&&(re.rangeCount!==1||re.anchorNode!==Y.node||re.anchorOffset!==Y.offset||re.focusNode!==H.node||re.focusOffset!==H.offset)){var Q=me.createRange();Q.setStart(Y.node,Y.offset),re.removeAllRanges(),et>Gt?(re.addRange(Q),re.extend(H.node,H.offset)):(Q.setEnd(H.node,H.offset),re.addRange(Q))}}}}for(me=[],re=M;re=re.parentNode;)re.nodeType===1&&me.push({element:re,left:re.scrollLeft,top:re.scrollTop});for(typeof M.focus=="function"&&M.focus(),M=0;M<me.length;M++){var de=me[M];de.element.scrollLeft=de.left,de.element.scrollTop=de.top}}ql=!!Ef,Tf=Ef=null}finally{Lt=c,j.p=s,O.T=a}}e.current=n,pn=2}}function fm(){if(pn===2){pn=0;var e=Da,n=Kr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=O.T,O.T=null;var s=j.p;j.p=2;var c=Lt;Lt|=4;try{F0(e,n.alternate,n)}finally{Lt=c,j.p=s,O.T=a}}pn=3}}function dm(){if(pn===4||pn===3){pn=0,D();var e=Da,n=Kr,a=Ki,s=K0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,Kr=Da=null,hm(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(wa=null),Za(a),n=n.stateNode,Me&&typeof Me.onCommitFiberRoot=="function")try{Me.onCommitFiberRoot(Se,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=O.T,c=j.p,j.p=2,O.T=null;try{for(var f=e.onRecoverableError,g=0;g<s.length;g++){var M=s[g];f(M.value,{componentStack:M.stack})}}finally{O.T=n,j.p=c}}(Ki&3)!==0&&Ol(),Ri(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===df?po++:(po=0,df=e):po=0,mo(0)}}function hm(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,js(n)))}function Ol(){return um(),fm(),dm(),pm()}function pm(){if(pn!==5)return!1;var e=Da,n=uf;uf=0;var a=Za(Ki),s=O.T,c=j.p;try{j.p=32>a?32:a,O.T=null,a=ff,ff=null;var f=Da,g=Ki;if(pn=0,Kr=Da=null,Ki=0,(Lt&6)!==0)throw Error(r(331));var M=Lt;if(Lt|=4,Q0(f.current),W0(f,f.current,g,a),Lt=M,mo(0,!1),Me&&typeof Me.onPostCommitFiberRoot=="function")try{Me.onPostCommitFiberRoot(Se,f)}catch{}return!0}finally{j.p=c,O.T=s,hm(e,n)}}function mm(e,n,a){n=ii(a,n),n=ku(e.stateNode,n,2),e=ya(e,n,2),e!==null&&(Rn(e,2),Ri(e))}function Bt(e,n,a){if(e.tag===3)mm(e,e,a);else for(;n!==null;){if(n.tag===3){mm(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(wa===null||!wa.has(s))){e=ii(a,e),a=g0(2),s=ya(n,a,2),s!==null&&(x0(a,s,n,e),Rn(s,2),Ri(s));break}}n=n.return}}function mf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new nA;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(of=!0,c.add(a),e=oA.bind(null,e,n,a),n.then(e,e))}function oA(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Yt===e&&(_t&a)===a&&($t===4||$t===3&&(_t&62914560)===_t&&300>y()-wl?(Lt&2)===0&&$r(e,0):lf|=a,Zr===_t&&(Zr=0)),Ri(e)}function gm(e,n){n===0&&(n=zt()),e=nr(e,n),e!==null&&(Rn(e,n),Ri(e))}function lA(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),gm(e,a)}function cA(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),gm(e,a)}function uA(e,n){return kt(e,n)}var Bl=null,ts=null,gf=!1,zl=!1,xf=!1,La=0;function Ri(e){e!==ts&&e.next===null&&(ts===null?Bl=ts=e:ts=ts.next=e),zl=!0,gf||(gf=!0,dA())}function mo(e,n){if(!xf&&zl){xf=!0;do for(var a=!1,s=Bl;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var g=s.suspendedLanes,M=s.pingedLanes;f=(1<<31-Ve(42|e)+1)-1,f&=c&~(g&~M),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,vm(s,f))}else f=_t,f=xe(s,s===Yt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||ze(s,f)||(a=!0,vm(s,f));s=s.next}while(a);xf=!1}}function fA(){xm()}function xm(){zl=gf=!1;var e=0;La!==0&&bA()&&(e=La);for(var n=y(),a=null,s=Bl;s!==null;){var c=s.next,f=_m(s,n);f===0?(s.next=null,a===null?Bl=c:a.next=c,c===null&&(ts=a)):(a=s,(e!==0||(f&3)!==0)&&(zl=!0)),s=c}pn!==0&&pn!==5||mo(e),La!==0&&(La=0)}function _m(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var g=31-Ve(f),M=1<<g,I=c[g];I===-1?((M&a)===0||(M&s)!==0)&&(c[g]=it(M,n)):I<=n&&(e.expiredLanes|=M),f&=~M}if(n=Yt,a=_t,a=xe(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(Ot===2||Ot===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&je(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||ze(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&je(s),Za(a)){case 2:case 8:a=ve;break;case 32:a=se;break;case 268435456:a=Le;break;default:a=se}return s=Am.bind(null,e),a=kt(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&je(s),e.callbackPriority=2,e.callbackNode=null,2}function Am(e,n){if(pn!==0&&pn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ol()&&e.callbackNode!==a)return null;var s=_t;return s=xe(e,e===Yt?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(em(e,s,n),_m(e,y()),e.callbackNode!=null&&e.callbackNode===a?Am.bind(null,e):null)}function vm(e,n){if(Ol())return null;em(e,n,!0)}function dA(){MA(function(){(Lt&6)!==0?kt(pe,fA):xm()})}function _f(){if(La===0){var e=Gr;e===0&&(e=De,De<<=1,(De&261888)===0&&(De=256)),La=e}return La}function Sm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Yo(""+e)}function bm(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function hA(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=Sm((c[dn]||null).action),g=s.submitter;g&&(n=(n=g[dn]||null)?Sm(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var M=new Qo("action","action",null,s,c);e.push({event:M,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(La!==0){var I=g?bm(c,g):new FormData(c);zu(a,{pending:!0,data:I,method:c.method,action:f},null,I)}}else typeof f=="function"&&(M.preventDefault(),I=g?bm(c,g):new FormData(c),zu(a,{pending:!0,data:I,method:c.method,action:f},f,I))},currentTarget:c}]})}}for(var Af=0;Af<eu.length;Af++){var vf=eu[Af],pA=vf.toLowerCase(),mA=vf[0].toUpperCase()+vf.slice(1);pi(pA,"on"+mA)}pi($h,"onAnimationEnd"),pi(ep,"onAnimationIteration"),pi(tp,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(U_,"onTransitionRun"),pi(L_,"onTransitionStart"),pi(N_,"onTransitionCancel"),pi(np,"onTransitionEnd"),Be("onMouseEnter",["mouseout","mouseover"]),Be("onMouseLeave",["mouseout","mouseover"]),Be("onPointerEnter",["pointerout","pointerover"]),Be("onPointerLeave",["pointerout","pointerover"]),Ue("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ue("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ue("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ue("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ue("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ue("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),gA=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(go));function ym(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var M=s[g],I=M.instance,Z=M.currentTarget;if(M=M.listener,I!==f&&c.isPropagationStopped())break e;f=M,c.currentTarget=Z;try{f(c)}catch(ue){Ko(ue)}c.currentTarget=null,f=I}else for(g=0;g<s.length;g++){if(M=s[g],I=M.instance,Z=M.currentTarget,M=M.listener,I!==f&&c.isPropagationStopped())break e;f=M,c.currentTarget=Z;try{f(c)}catch(ue){Ko(ue)}c.currentTarget=null,f=I}}}}function xt(e,n){var a=n[Rr];a===void 0&&(a=n[Rr]=new Set);var s=e+"__bubble";a.has(s)||(Mm(n,e,2,!1),a.add(s))}function Sf(e,n,a){var s=0;n&&(s|=4),Mm(a,e,s,n)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function bf(e){if(!e[Pl]){e[Pl]=!0,W.forEach(function(a){a!=="selectionchange"&&(gA.has(a)||Sf(a,!1,e),Sf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Pl]||(n[Pl]=!0,Sf("selectionchange",!1,n))}}function Mm(e,n,a,s){switch($m(n)){case 2:var c=XA;break;case 8:c=YA;break;default:c=zf}a=c.bind(null,n,a,e),c=void 0,!Hc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function yf(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var M=s.stateNode.containerInfo;if(M===c)break;if(g===4)for(g=s.return;g!==null;){var I=g.tag;if((I===3||I===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;M!==null;){if(g=pa(M),g===null)return;if(I=g.tag,I===5||I===6||I===26||I===27){s=f=g;continue e}M=M.parentNode}}s=s.return}wh(function(){var Z=f,ue=Fc(a),me=[];e:{var $=ip.get(e);if($!==void 0){var re=Qo,Fe=e;switch(e){case"keypress":if(qo(a)===0)break e;case"keydown":case"keyup":re=c_;break;case"focusin":Fe="focus",re=Yc;break;case"focusout":Fe="blur",re=Yc;break;case"beforeblur":case"afterblur":re=Yc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":re=Lh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":re=Zx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":re=d_;break;case $h:case ep:case tp:re=e_;break;case np:re=p_;break;case"scroll":case"scrollend":re=Qx;break;case"wheel":re=g_;break;case"copy":case"cut":case"paste":re=n_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":re=Ih;break;case"toggle":case"beforetoggle":re=__}var et=(n&4)!==0,Gt=!et&&(e==="scroll"||e==="scrollend"),Y=et?$!==null?$+"Capture":null:$;et=[];for(var H=Z,Q;H!==null;){var de=H;if(Q=de.stateNode,de=de.tag,de!==5&&de!==26&&de!==27||Q===null||Y===null||(de=zs(H,Y),de!=null&&et.push(xo(H,de,Q))),Gt)break;H=H.return}0<et.length&&($=new re($,Fe,null,a,ue),me.push({event:$,listeners:et}))}}if((n&7)===0){e:{if($=e==="mouseover"||e==="pointerover",re=e==="mouseout"||e==="pointerout",$&&a!==Pc&&(Fe=a.relatedTarget||a.fromElement)&&(pa(Fe)||Fe[Ii]))break e;if((re||$)&&($=ue.window===ue?ue:($=ue.ownerDocument)?$.defaultView||$.parentWindow:window,re?(Fe=a.relatedTarget||a.toElement,re=Z,Fe=Fe?pa(Fe):null,Fe!==null&&(Gt=u(Fe),et=Fe.tag,Fe!==Gt||et!==5&&et!==27&&et!==6)&&(Fe=null)):(re=null,Fe=Z),re!==Fe)){if(et=Lh,de="onMouseLeave",Y="onMouseEnter",H="mouse",(e==="pointerout"||e==="pointerover")&&(et=Ih,de="onPointerLeave",Y="onPointerEnter",H="pointer"),Gt=re==null?$:X(re),Q=Fe==null?$:X(Fe),$=new et(de,H+"leave",re,a,ue),$.target=Gt,$.relatedTarget=Q,de=null,pa(ue)===Z&&(et=new et(Y,H+"enter",Fe,a,ue),et.target=Q,et.relatedTarget=Gt,de=et),Gt=de,re&&Fe)t:{for(et=xA,Y=re,H=Fe,Q=0,de=Y;de;de=et(de))Q++;de=0;for(var Je=H;Je;Je=et(Je))de++;for(;0<Q-de;)Y=et(Y),Q--;for(;0<de-Q;)H=et(H),de--;for(;Q--;){if(Y===H||H!==null&&Y===H.alternate){et=Y;break t}Y=et(Y),H=et(H)}et=null}else et=null;re!==null&&Em(me,$,re,et,!1),Fe!==null&&Gt!==null&&Em(me,Gt,Fe,et,!0)}}e:{if($=Z?X(Z):window,re=$.nodeName&&$.nodeName.toLowerCase(),re==="select"||re==="input"&&$.type==="file")var Rt=Vh;else if(Gh($))if(kh)Rt=R_;else{Rt=T_;var ke=E_}else re=$.nodeName,!re||re.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?Z&&zc(Z.elementType)&&(Rt=Vh):Rt=C_;if(Rt&&(Rt=Rt(e,Z))){Hh(me,Rt,a,ue);break e}ke&&ke(e,$,Z),e==="focusout"&&Z&&$.type==="number"&&Z.memoizedProps.value!=null&&An($,"number",$.value)}switch(ke=Z?X(Z):window,e){case"focusin":(Gh(ke)||ke.contentEditable==="true")&&(Lr=ke,Zc=Z,Ys=null);break;case"focusout":Ys=Zc=Lr=null;break;case"mousedown":Kc=!0;break;case"contextmenu":case"mouseup":case"dragend":Kc=!1,Zh(me,a,ue);break;case"selectionchange":if(D_)break;case"keydown":case"keyup":Zh(me,a,ue)}var ut;if(qc)e:{switch(e){case"compositionstart":var At="onCompositionStart";break e;case"compositionend":At="onCompositionEnd";break e;case"compositionupdate":At="onCompositionUpdate";break e}At=void 0}else Ur?Ph(e,a)&&(At="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(At="onCompositionStart");At&&(Oh&&a.locale!=="ko"&&(Ur||At!=="onCompositionStart"?At==="onCompositionEnd"&&Ur&&(ut=Dh()):(ga=ue,Vc="value"in ga?ga.value:ga.textContent,Ur=!0)),ke=Fl(Z,At),0<ke.length&&(At=new Nh(At,e,null,a,ue),me.push({event:At,listeners:ke}),ut?At.data=ut:(ut=Fh(a),ut!==null&&(At.data=ut)))),(ut=v_?S_(e,a):b_(e,a))&&(At=Fl(Z,"onBeforeInput"),0<At.length&&(ke=new Nh("onBeforeInput","beforeinput",null,a,ue),me.push({event:ke,listeners:At}),ke.data=ut)),hA(me,e,Z,a,ue)}ym(me,n)})}function xo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Fl(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=zs(e,a),c!=null&&s.unshift(xo(e,c,f)),c=zs(e,n),c!=null&&s.push(xo(e,c,f))),e.tag===3)return s;e=e.return}return[]}function xA(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Em(e,n,a,s,c){for(var f=n._reactName,g=[];a!==null&&a!==s;){var M=a,I=M.alternate,Z=M.stateNode;if(M=M.tag,I!==null&&I===s)break;M!==5&&M!==26&&M!==27||Z===null||(I=Z,c?(Z=zs(a,f),Z!=null&&g.unshift(xo(a,Z,I))):c||(Z=zs(a,f),Z!=null&&g.push(xo(a,Z,I)))),a=a.return}g.length!==0&&e.push({event:n,listeners:g})}var _A=/\r\n?/g,AA=/\u0000|\uFFFD/g;function Tm(e){return(typeof e=="string"?e:""+e).replace(_A,`
`).replace(AA,"")}function Cm(e,n){return n=Tm(n),Tm(e)===n}function Ft(e,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Mi(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Mi(e,""+s);break;case"className":Mt(e,"class",s);break;case"tabIndex":Mt(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Mt(e,a,s);break;case"style":Ch(e,s,f);break;case"data":if(n!=="object"){Mt(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Yo(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ft(e,n,"name",c.name,c,null),Ft(e,n,"formEncType",c.formEncType,c,null),Ft(e,n,"formMethod",c.formMethod,c,null),Ft(e,n,"formTarget",c.formTarget,c,null)):(Ft(e,n,"encType",c.encType,c,null),Ft(e,n,"method",c.method,c,null),Ft(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Yo(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=zi);break;case"onScroll":s!=null&&xt("scroll",e);break;case"onScrollEnd":s!=null&&xt("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Yo(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":xt("beforetoggle",e),xt("toggle",e),ct(e,"popover",s);break;case"xlinkActuate":Ct(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Ct(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Ct(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Ct(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Ct(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Ct(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":ct(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=qx.get(a)||a,ct(e,a,s))}}function Mf(e,n,a,s,c,f){switch(a){case"style":Ch(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?Mi(e,s):(typeof s=="number"||typeof s=="bigint")&&Mi(e,""+s);break;case"onScroll":s!=null&&xt("scroll",e);break;case"onScrollEnd":s!=null&&xt("scrollend",e);break;case"onClick":s!=null&&(e.onclick=zi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Te.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[dn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break e}a in e?e[a]=s:s===!0?e.setAttribute(a,""):ct(e,a,s)}}}function Cn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xt("error",e),xt("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ft(e,n,f,g,a,null)}}c&&Ft(e,n,"srcSet",a.srcSet,a,null),s&&Ft(e,n,"src",a.src,a,null);return;case"input":xt("invalid",e);var M=f=g=c=null,I=null,Z=null;for(s in a)if(a.hasOwnProperty(s)){var ue=a[s];if(ue!=null)switch(s){case"name":c=ue;break;case"type":g=ue;break;case"checked":I=ue;break;case"defaultChecked":Z=ue;break;case"value":f=ue;break;case"defaultValue":M=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(r(137,n));break;default:Ft(e,n,s,ue,a,null)}}qt(e,f,M,I,Z,g,c,!1);return;case"select":xt("invalid",e),s=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(M=a[c],M!=null))switch(c){case"value":f=M;break;case"defaultValue":g=M;break;case"multiple":s=M;default:Ft(e,n,c,M,a,null)}n=f,a=g,e.multiple=!!s,n!=null?hn(e,!!s,n,!1):a!=null&&hn(e,!!s,a,!0);return;case"textarea":xt("invalid",e),f=c=s=null;for(g in a)if(a.hasOwnProperty(g)&&(M=a[g],M!=null))switch(g){case"value":s=M;break;case"defaultValue":c=M;break;case"children":f=M;break;case"dangerouslySetInnerHTML":if(M!=null)throw Error(r(91));break;default:Ft(e,n,g,M,a,null)}yn(e,s,c,f);return;case"option":for(I in a)if(a.hasOwnProperty(I)&&(s=a[I],s!=null))switch(I){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ft(e,n,I,s,a,null)}return;case"dialog":xt("beforetoggle",e),xt("toggle",e),xt("cancel",e),xt("close",e);break;case"iframe":case"object":xt("load",e);break;case"video":case"audio":for(s=0;s<go.length;s++)xt(go[s],e);break;case"image":xt("error",e),xt("load",e);break;case"details":xt("toggle",e);break;case"embed":case"source":case"link":xt("error",e),xt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Z in a)if(a.hasOwnProperty(Z)&&(s=a[Z],s!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ft(e,n,Z,s,a,null)}return;default:if(zc(n)){for(ue in a)a.hasOwnProperty(ue)&&(s=a[ue],s!==void 0&&Mf(e,n,ue,s,a,void 0));return}}for(M in a)a.hasOwnProperty(M)&&(s=a[M],s!=null&&Ft(e,n,M,s,a,null))}function vA(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,M=null,I=null,Z=null,ue=null;for(re in a){var me=a[re];if(a.hasOwnProperty(re)&&me!=null)switch(re){case"checked":break;case"value":break;case"defaultValue":I=me;default:s.hasOwnProperty(re)||Ft(e,n,re,null,s,me)}}for(var $ in s){var re=s[$];if(me=a[$],s.hasOwnProperty($)&&(re!=null||me!=null))switch($){case"type":f=re;break;case"name":c=re;break;case"checked":Z=re;break;case"defaultChecked":ue=re;break;case"value":g=re;break;case"defaultValue":M=re;break;case"children":case"dangerouslySetInnerHTML":if(re!=null)throw Error(r(137,n));break;default:re!==me&&Ft(e,n,$,re,s,me)}}Oi(e,g,M,I,Z,ue,f,c);return;case"select":re=g=M=$=null;for(f in a)if(I=a[f],a.hasOwnProperty(f)&&I!=null)switch(f){case"value":break;case"multiple":re=I;default:s.hasOwnProperty(f)||Ft(e,n,f,null,s,I)}for(c in s)if(f=s[c],I=a[c],s.hasOwnProperty(c)&&(f!=null||I!=null))switch(c){case"value":$=f;break;case"defaultValue":M=f;break;case"multiple":g=f;default:f!==I&&Ft(e,n,c,f,s,I)}n=M,a=g,s=re,$!=null?hn(e,!!a,$,!1):!!s!=!!a&&(n!=null?hn(e,!!a,n,!0):hn(e,!!a,a?[]:"",!1));return;case"textarea":re=$=null;for(M in a)if(c=a[M],a.hasOwnProperty(M)&&c!=null&&!s.hasOwnProperty(M))switch(M){case"value":break;case"children":break;default:Ft(e,n,M,null,s,c)}for(g in s)if(c=s[g],f=a[g],s.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":$=c;break;case"defaultValue":re=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ft(e,n,g,c,s,f)}vn(e,$,re);return;case"option":for(var Fe in a)if($=a[Fe],a.hasOwnProperty(Fe)&&$!=null&&!s.hasOwnProperty(Fe))switch(Fe){case"selected":e.selected=!1;break;default:Ft(e,n,Fe,null,s,$)}for(I in s)if($=s[I],re=a[I],s.hasOwnProperty(I)&&$!==re&&($!=null||re!=null))switch(I){case"selected":e.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:Ft(e,n,I,$,s,re)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)$=a[et],a.hasOwnProperty(et)&&$!=null&&!s.hasOwnProperty(et)&&Ft(e,n,et,null,s,$);for(Z in s)if($=s[Z],re=a[Z],s.hasOwnProperty(Z)&&$!==re&&($!=null||re!=null))switch(Z){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(r(137,n));break;default:Ft(e,n,Z,$,s,re)}return;default:if(zc(n)){for(var Gt in a)$=a[Gt],a.hasOwnProperty(Gt)&&$!==void 0&&!s.hasOwnProperty(Gt)&&Mf(e,n,Gt,void 0,s,$);for(ue in s)$=s[ue],re=a[ue],!s.hasOwnProperty(ue)||$===re||$===void 0&&re===void 0||Mf(e,n,ue,$,s,re);return}}for(var Y in a)$=a[Y],a.hasOwnProperty(Y)&&$!=null&&!s.hasOwnProperty(Y)&&Ft(e,n,Y,null,s,$);for(me in s)$=s[me],re=a[me],!s.hasOwnProperty(me)||$===re||$==null&&re==null||Ft(e,n,me,$,s,re)}function Rm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function SA(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,g=c.initiatorType,M=c.duration;if(f&&M&&Rm(g)){for(g=0,M=c.responseEnd,s+=1;s<a.length;s++){var I=a[s],Z=I.startTime;if(Z>M)break;var ue=I.transferSize,me=I.initiatorType;ue&&Rm(me)&&(I=I.responseEnd,g+=ue*(I<M?1:(M-Z)/(I-Z)))}if(--s,n+=8*(f+g)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ef=null,Tf=null;function Gl(e){return e.nodeType===9?e:e.ownerDocument}function wm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Dm(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Cf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Rf=null;function bA(){var e=window.event;return e&&e.type==="popstate"?e===Rf?!1:(Rf=e,!0):(Rf=null,!1)}var Um=typeof setTimeout=="function"?setTimeout:void 0,yA=typeof clearTimeout=="function"?clearTimeout:void 0,Lm=typeof Promise=="function"?Promise:void 0,MA=typeof queueMicrotask=="function"?queueMicrotask:typeof Lm<"u"?function(e){return Lm.resolve(null).then(e).catch(EA)}:Um;function EA(e){setTimeout(function(){throw e})}function Na(e){return e==="head"}function Nm(e,n){var a=n,s=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(c),rs(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")_o(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,_o(a);for(var f=a.firstChild;f;){var g=f.nextSibling,M=f.nodeName;f[Ka]||M==="SCRIPT"||M==="STYLE"||M==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&_o(e.ownerDocument.body);a=c}while(a);rs(n)}function Im(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function wf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":wf(a),Bs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function TA(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Ka])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=li(e.nextSibling),e===null)break}return null}function CA(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=li(e.nextSibling),e===null))return null;return e}function Om(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=li(e.nextSibling),e===null))return null;return e}function Df(e){return e.data==="$?"||e.data==="$~"}function Uf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function RA(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function li(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Lf=null;function Bm(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return li(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function zm(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Pm(e,n,a){switch(n=Gl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function _o(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Bs(e)}var ci=new Map,Fm=new Set;function Hl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var $i=j.d;j.d={f:wA,r:DA,D:UA,C:LA,L:NA,m:IA,X:BA,S:OA,M:zA};function wA(){var e=$i.f(),n=Ll();return e||n}function DA(e){var n=E(e);n!==null&&n.tag===5&&n.type==="form"?n0(n):$i.r(e)}var ns=typeof document>"u"?null:document;function Gm(e,n,a){var s=ns;if(s&&typeof n=="string"&&n){var c=Wt(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Fm.has(c)||(Fm.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Cn(n,"link",e),K(n),s.head.appendChild(n)))}}function UA(e){$i.D(e),Gm("dns-prefetch",e,null)}function LA(e,n){$i.C(e,n),Gm("preconnect",e,n)}function NA(e,n,a){$i.L(e,n,a);var s=ns;if(s&&e&&n){var c='link[rel="preload"][as="'+Wt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+Wt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+Wt(a.imageSizes)+'"]')):c+='[href="'+Wt(e)+'"]';var f=c;switch(n){case"style":f=is(e);break;case"script":f=as(e)}ci.has(f)||(e=x({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ci.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(Ao(f))||n==="script"&&s.querySelector(vo(f))||(n=s.createElement("link"),Cn(n,"link",e),K(n),s.head.appendChild(n)))}}function IA(e,n){$i.m(e,n);var a=ns;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+Wt(s)+'"][href="'+Wt(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=as(e)}if(!ci.has(f)&&(e=x({rel:"modulepreload",href:e},n),ci.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vo(f)))return}s=a.createElement("link"),Cn(s,"link",e),K(s),a.head.appendChild(s)}}}function OA(e,n,a){$i.S(e,n,a);var s=ns;if(s&&e){var c=ie(s).hoistableStyles,f=is(e);n=n||"default";var g=c.get(f);if(!g){var M={loading:0,preload:null};if(g=s.querySelector(Ao(f)))M.loading=5;else{e=x({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ci.get(f))&&Nf(e,a);var I=g=s.createElement("link");K(I),Cn(I,"link",e),I._p=new Promise(function(Z,ue){I.onload=Z,I.onerror=ue}),I.addEventListener("load",function(){M.loading|=1}),I.addEventListener("error",function(){M.loading|=2}),M.loading|=4,Vl(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:M},c.set(f,g)}}}function BA(e,n){$i.X(e,n);var a=ns;if(a&&e){var s=ie(a).hoistableScripts,c=as(e),f=s.get(c);f||(f=a.querySelector(vo(c)),f||(e=x({src:e,async:!0},n),(n=ci.get(c))&&If(e,n),f=a.createElement("script"),K(f),Cn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function zA(e,n){$i.M(e,n);var a=ns;if(a&&e){var s=ie(a).hoistableScripts,c=as(e),f=s.get(c);f||(f=a.querySelector(vo(c)),f||(e=x({src:e,async:!0,type:"module"},n),(n=ci.get(c))&&If(e,n),f=a.createElement("script"),K(f),Cn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Hm(e,n,a,s){var c=(c=te.current)?Hl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=is(a.href),a=ie(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=is(a.href);var f=ie(c).hoistableStyles,g=f.get(e);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,g),(f=c.querySelector(Ao(e)))&&!f._p&&(g.instance=f,g.state.loading=5),ci.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(e,a),f||PA(c,e,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=as(a),a=ie(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function is(e){return'href="'+Wt(e)+'"'}function Ao(e){return'link[rel="stylesheet"]['+e+"]"}function Vm(e){return x({},e,{"data-precedence":e.precedence,precedence:null})}function PA(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Cn(n,"link",a),K(n),e.head.appendChild(n))}function as(e){return'[src="'+Wt(e)+'"]'}function vo(e){return"script[async]"+e}function km(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+Wt(a.href)+'"]');if(s)return n.instance=s,K(s),s;var c=x({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),K(s),Cn(s,"style",c),Vl(s,a.precedence,e),n.instance=s;case"stylesheet":c=is(a.href);var f=e.querySelector(Ao(c));if(f)return n.state.loading|=4,n.instance=f,K(f),f;s=Vm(a),(c=ci.get(c))&&Nf(s,c),f=(e.ownerDocument||e).createElement("link"),K(f);var g=f;return g._p=new Promise(function(M,I){g.onload=M,g.onerror=I}),Cn(f,"link",s),n.state.loading|=4,Vl(f,a.precedence,e),n.instance=f;case"script":return f=as(a.src),(c=e.querySelector(vo(f)))?(n.instance=c,K(c),c):(s=a,(c=ci.get(f))&&(s=x({},a),If(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),K(c),Cn(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Vl(s,a.precedence,e));return n.instance}function Vl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,g=0;g<s.length;g++){var M=s[g];if(M.dataset.precedence===n)f=M;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Nf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function If(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var kl=null;function Xm(e,n,a){if(kl===null){var s=new Map,c=kl=new Map;c.set(a,s)}else c=kl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Ka]||f[sn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=e+g;var M=s.get(g);M?M.push(f):s.set(g,[f])}}return s}function Ym(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function FA(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Wm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function GA(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=is(s.href),f=n.querySelector(Ao(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Xl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,K(f);return}f=n.ownerDocument||n,s=Vm(s),(c=ci.get(c))&&Nf(s,c),f=f.createElement("link"),K(f);var g=f;g._p=new Promise(function(M,I){g.onload=M,g.onerror=I}),Cn(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Xl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Of=0;function HA(e,n){return e.stylesheets&&e.count===0&&Wl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&Wl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Of===0&&(Of=62500*SA());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Wl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Of?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Xl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yl=null;function Wl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yl=new Map,n.forEach(VA,e),Yl=null,Xl.call(e))}function VA(e,n){if(!(n.state.loading&4)){var a=Yl.get(e);if(a)var s=a.get(null);else{a=new Map,Yl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,c),a.set(g,c),this.count++,s=Xl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var So={$$typeof:U,Provider:null,Consumer:null,_currentValue:q,_currentValue2:q,_threadCount:0};function kA(e,n,a,s,c,f,g,M,I){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tt(0),this.hiddenUpdates=Tt(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=I,this.incompleteTransitions=new Map}function qm(e,n,a,s,c,f,g,M,I,Z,ue,me){return e=new kA(e,n,a,g,I,Z,ue,me,M),n=1,f===!0&&(n|=24),f=Wn(3,null,null,n),e.current=f,f.stateNode=e,n=hu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},xu(f),e}function jm(e){return e?(e=Or,e):Or}function Qm(e,n,a,s,c,f){c=jm(c),s.context===null?s.context=c:s.pendingContext=c,s=ba(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ya(e,s,n),a!==null&&(Gn(a,e,n),Ks(a,e,n))}function Jm(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Bf(e,n){Jm(e,n),(e=e.alternate)&&Jm(e,n)}function Zm(e){if(e.tag===13||e.tag===31){var n=nr(e,67108864);n!==null&&Gn(n,e,67108864),Bf(e,67108864)}}function Km(e){if(e.tag===13||e.tag===31){var n=Zn();n=hi(n);var a=nr(e,n);a!==null&&Gn(a,e,n),Bf(e,n)}}var ql=!0;function XA(e,n,a,s){var c=O.T;O.T=null;var f=j.p;try{j.p=2,zf(e,n,a,s)}finally{j.p=f,O.T=c}}function YA(e,n,a,s){var c=O.T;O.T=null;var f=j.p;try{j.p=8,zf(e,n,a,s)}finally{j.p=f,O.T=c}}function zf(e,n,a,s){if(ql){var c=Pf(s);if(c===null)yf(e,n,s,jl,a),eg(e,s);else if(qA(c,e,n,a,s))s.stopPropagation();else if(eg(e,s),n&4&&-1<WA.indexOf(e)){for(;c!==null;){var f=E(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=ye(f.pendingLanes);if(g!==0){var M=f;for(M.pendingLanes|=2,M.entangledLanes|=2;g;){var I=1<<31-Ve(g);M.entanglements[1]|=I,g&=~I}Ri(f),(Lt&6)===0&&(Dl=y()+500,mo(0))}}break;case 31:case 13:M=nr(f,2),M!==null&&Gn(M,f,2),Ll(),Bf(f,2)}if(f=Pf(s),f===null&&yf(e,n,s,jl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else yf(e,n,s,null,a)}}function Pf(e){return e=Fc(e),Ff(e)}var jl=null;function Ff(e){if(jl=null,e=pa(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return jl=e,null}function $m(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(J()){case pe:return 2;case ve:return 8;case se:case We:return 32;case Le:return 268435456;default:return 32}default:return 32}}var Gf=!1,Ia=null,Oa=null,Ba=null,bo=new Map,yo=new Map,za=[],WA="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function eg(e,n){switch(e){case"focusin":case"focusout":Ia=null;break;case"dragenter":case"dragleave":Oa=null;break;case"mouseover":case"mouseout":Ba=null;break;case"pointerover":case"pointerout":bo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(n.pointerId)}}function Mo(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=E(n),n!==null&&Zm(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function qA(e,n,a,s,c){switch(n){case"focusin":return Ia=Mo(Ia,e,n,a,s,c),!0;case"dragenter":return Oa=Mo(Oa,e,n,a,s,c),!0;case"mouseover":return Ba=Mo(Ba,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return bo.set(f,Mo(bo.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,yo.set(f,Mo(yo.get(f)||null,e,n,a,s,c)),!0}return!1}function tg(e){var n=pa(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Os(e.priority,function(){Km(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Os(e.priority,function(){Km(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ql(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Pf(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Pc=s,a.target.dispatchEvent(s),Pc=null}else return n=E(a),n!==null&&Zm(n),e.blockedOn=a,!1;n.shift()}return!0}function ng(e,n,a){Ql(e)&&a.delete(n)}function jA(){Gf=!1,Ia!==null&&Ql(Ia)&&(Ia=null),Oa!==null&&Ql(Oa)&&(Oa=null),Ba!==null&&Ql(Ba)&&(Ba=null),bo.forEach(ng),yo.forEach(ng)}function Jl(e,n){e.blockedOn===n&&(e.blockedOn=null,Gf||(Gf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,jA)))}var Zl=null;function ig(e){Zl!==e&&(Zl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Zl===e&&(Zl=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(Ff(s||a)===null)continue;break}var f=E(a);f!==null&&(e.splice(n,3),n-=3,zu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function rs(e){function n(I){return Jl(I,e)}Ia!==null&&Jl(Ia,e),Oa!==null&&Jl(Oa,e),Ba!==null&&Jl(Ba,e),bo.forEach(n),yo.forEach(n);for(var a=0;a<za.length;a++){var s=za[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<za.length&&(a=za[0],a.blockedOn===null);)tg(a),a.blockedOn===null&&za.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],g=c[dn]||null;if(typeof f=="function")g||ig(a);else if(g){var M=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[dn]||null)M=g.formAction;else if(Ff(c)!==null)continue}else M=g.action;typeof M=="function"?a[s+1]=M:(a.splice(s,3),s-=3),ig(a)}}}function ag(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Hf(e){this._internalRoot=e}Kl.prototype.render=Hf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Zn();Qm(a,s,e,n,null,null)},Kl.prototype.unmount=Hf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Qm(e.current,2,null,e,null,null),Ll(),n[Ii]=null}};function Kl(e){this._internalRoot=e}Kl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Is();e={blockedOn:null,target:e,priority:n};for(var a=0;a<za.length&&n!==0&&n<za[a].priority;a++);za.splice(a,0,e),a===0&&tg(e)}};var rg=t.version;if(rg!=="19.2.0")throw Error(r(527,rg,"19.2.0"));j.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var QA={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:O,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var $l=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!$l.isDisabled&&$l.supportsFiber)try{Se=$l.inject(QA),Me=$l}catch{}}return To.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=d0,f=h0,g=p0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=qm(e,1,!1,null,null,a,s,null,c,f,g,ag),e[Ii]=n.current,bf(e),new Hf(n)},To.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=d0,g=h0,M=p0,I=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(M=a.onRecoverableError),a.formState!==void 0&&(I=a.formState)),n=qm(e,1,!0,n,a??null,s,c,I,f,g,M,ag),n.context=jm(null),a=n.current,s=Zn(),s=hi(s),c=ba(s),c.callback=null,ya(a,c,s),a=s,n.current.lanes=a,Rn(n,a),Ri(n),e[Ii]=n.current,bf(e),new Kl(n)},To.version="19.2.0",To}var mg;function sv(){if(mg)return Xf.exports;mg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Xf.exports=rv(),Xf.exports}var ov=sv();const lv=mx(ov);const gh="181",cv=0,gg=1,uv=2,gx=1,fv=2,sa=3,ja=0,Vn=1,oa=2,ua=0,Ss=1,xg=2,_g=3,Ag=4,dv=5,br=100,hv=101,pv=102,mv=103,gv=104,xv=200,_v=201,Av=202,vv=203,Ed=204,Td=205,Sv=206,bv=207,yv=208,Mv=209,Ev=210,Tv=211,Cv=212,Rv=213,wv=214,Cd=0,Rd=1,wd=2,ys=3,Dd=4,Ud=5,Ld=6,Nd=7,xx=0,Dv=1,Uv=2,qa=0,Lv=1,Nv=2,Iv=3,Ov=4,Bv=5,zv=6,Pv=7,_x=300,Ms=301,Es=302,Id=303,Od=304,Uc=306,Bd=1e3,la=1001,zd=1002,ei=1003,Fv=1004,ec=1005,di=1006,jf=1007,Er=1008,da=1009,Ax=1010,vx=1011,Io=1012,xh=1013,Cr=1014,ca=1015,ws=1016,_h=1017,Ah=1018,Oo=1020,Sx=35902,bx=35899,yx=1021,Mx=1022,bi=1023,Bo=1026,zo=1027,Ex=1028,vh=1029,Sh=1030,bh=1031,yh=1033,bc=33776,yc=33777,Mc=33778,Ec=33779,Pd=35840,Fd=35841,Gd=35842,Hd=35843,Vd=36196,kd=37492,Xd=37496,Yd=37808,Wd=37809,qd=37810,jd=37811,Qd=37812,Jd=37813,Zd=37814,Kd=37815,$d=37816,eh=37817,th=37818,nh=37819,ih=37820,ah=37821,rh=36492,sh=36494,oh=36495,lh=36283,ch=36284,uh=36285,fh=36286,Gv=3200,Hv=3201,Vv=0,kv=1,Ya="",fi="srgb",Ts="srgb-linear",Rc="linear",Ht="srgb",ss=7680,vg=519,Xv=512,Yv=513,Wv=514,Tx=515,qv=516,jv=517,Qv=518,Jv=519,Sg=35044,bg="300 es",Ui=2e3,wc=2001;function Cx(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Dc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Zv(){const o=Dc("canvas");return o.style.display="block",o}const yg={};function Mg(...o){const t="THREE."+o.shift();console.log(t,...o)}function ot(...o){const t="THREE."+o.shift();console.warn(t,...o)}function an(...o){const t="THREE."+o.shift();console.error(t,...o)}function Po(...o){const t=o.join(" ");t in yg||(yg[t]=!0,ot(...o))}function Kv(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}class Ds{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qf=Math.PI/180,dh=180/Math.PI;function Fo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[o&255]+Dn[o>>8&255]+Dn[o>>16&255]+Dn[o>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function yt(o,t,i){return Math.max(t,Math.min(i,o))}function $v(o,t){return(o%t+t)%t}function Jf(o,t,i){return(1-i)*o+i*t}function Co(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Hn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ut{constructor(t=0,i=0){Ut.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=yt(this.x,t.x,i.x),this.y=yt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=yt(this.x,t,i),this.y=yt(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(yt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*r-d*l+t.x,this.y=u*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Go{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],_=r[l+2],x=r[l+3],v=u[d+0],b=u[d+1],T=u[d+2],C=u[d+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=x;return}if(h>=1){t[i+0]=v,t[i+1]=b,t[i+2]=T,t[i+3]=C;return}if(x!==C||m!==v||p!==b||_!==T){let S=m*v+p*b+_*T+x*C;S<0&&(v=-v,b=-b,T=-T,C=-C,S=-S);let A=1-h;if(S<.9995){const B=Math.acos(S),U=Math.sin(B);A=Math.sin(A*B)/U,h=Math.sin(h*B)/U,m=m*A+v*h,p=p*A+b*h,_=_*A+T*h,x=x*A+C*h}else{m=m*A+v*h,p=p*A+b*h,_=_*A+T*h,x=x*A+C*h;const B=1/Math.sqrt(m*m+p*p+_*_+x*x);m*=B,p*=B,_*=B,x*=B}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=x}static multiplyQuaternionsFlat(t,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],_=r[l+3],x=u[d],v=u[d+1],b=u[d+2],T=u[d+3];return t[i]=h*T+_*x+m*b-p*v,t[i+1]=m*T+_*v+p*x-h*b,t[i+2]=p*T+_*b+h*v-m*x,t[i+3]=_*T-h*x-m*v-p*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(r/2),_=h(l/2),x=h(u/2),v=m(r/2),b=m(l/2),T=m(u/2);switch(d){case"XYZ":this._x=v*_*x+p*b*T,this._y=p*b*x-v*_*T,this._z=p*_*T+v*b*x,this._w=p*_*x-v*b*T;break;case"YXZ":this._x=v*_*x+p*b*T,this._y=p*b*x-v*_*T,this._z=p*_*T-v*b*x,this._w=p*_*x+v*b*T;break;case"ZXY":this._x=v*_*x-p*b*T,this._y=p*b*x+v*_*T,this._z=p*_*T+v*b*x,this._w=p*_*x-v*b*T;break;case"ZYX":this._x=v*_*x-p*b*T,this._y=p*b*x+v*_*T,this._z=p*_*T-v*b*x,this._w=p*_*x+v*b*T;break;case"YZX":this._x=v*_*x+p*b*T,this._y=p*b*x+v*_*T,this._z=p*_*T-v*b*x,this._w=p*_*x-v*b*T;break;case"XZY":this._x=v*_*x-p*b*T,this._y=p*b*x-v*_*T,this._z=p*_*T+v*b*x,this._w=p*_*x+v*b*T;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],_=i[6],x=i[10],v=r+h+x;if(v>0){const b=.5/Math.sqrt(v+1);this._w=.25/b,this._x=(_-m)*b,this._y=(u-p)*b,this._z=(d-l)*b}else if(r>h&&r>x){const b=2*Math.sqrt(1+r-h-x);this._w=(_-m)/b,this._x=.25*b,this._y=(l+d)/b,this._z=(u+p)/b}else if(h>x){const b=2*Math.sqrt(1+h-r-x);this._w=(u-p)/b,this._x=(l+d)/b,this._y=.25*b,this._z=(m+_)/b}else{const b=2*Math.sqrt(1+x-r-h);this._w=(d-l)/b,this._x=(u+p)/b,this._y=(m+_)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(yt(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,d=t._w,h=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+d*h+l*p-u*m,this._y=l*_+d*m+u*h-r*p,this._z=u*_+d*p+r*m-l*h,this._w=d*_-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let r=t._x,l=t._y,u=t._z,d=t._w,h=this.dot(t);h<0&&(r=-r,l=-l,u=-u,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),_=Math.sin(p);m=Math.sin(m*p)/_,i=Math.sin(i*p)/_,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ce{constructor(t=0,i=0,r=0){ce.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(Eg.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(Eg.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*r),_=2*(h*i-u*l),x=2*(u*r-d*i);return this.x=i+m*p+d*x-h*_,this.y=r+m*_+h*p-u*x,this.z=l+m*x+u*_-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=yt(this.x,t.x,i.x),this.y=yt(this.y,t.y,i.y),this.z=yt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=yt(this.x,t,i),this.y=yt(this.y,t,i),this.z=yt(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Zf.copy(this).projectOnVector(t),this.sub(Zf)}reflect(t){return this.sub(Zf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(yt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Zf=new ce,Eg=new Go;class ft{constructor(t,i,r,l,u,d,h,m,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p)}set(t,i,r,l,u,d,h,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=h,_[3]=i,_[4]=u,_[5]=m,_[6]=r,_[7]=d,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],_=r[4],x=r[7],v=r[2],b=r[5],T=r[8],C=l[0],S=l[3],A=l[6],B=l[1],U=l[4],z=l[7],k=l[2],N=l[5],P=l[8];return u[0]=d*C+h*B+m*k,u[3]=d*S+h*U+m*N,u[6]=d*A+h*z+m*P,u[1]=p*C+_*B+x*k,u[4]=p*S+_*U+x*N,u[7]=p*A+_*z+x*P,u[2]=v*C+b*B+T*k,u[5]=v*S+b*U+T*N,u[8]=v*A+b*z+T*P,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8];return i*d*_-i*h*p-r*u*_+r*h*m+l*u*p-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],x=_*d-h*p,v=h*m-_*u,b=p*u-d*m,T=i*x+r*v+l*b;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=x*C,t[1]=(l*p-_*r)*C,t[2]=(h*r-l*d)*C,t[3]=v*C,t[4]=(_*i-l*m)*C,t[5]=(l*u-h*i)*C,t[6]=b*C,t[7]=(r*m-p*i)*C,t[8]=(d*i-r*u)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(Kf.makeScale(t,i)),this}rotate(t){return this.premultiply(Kf.makeRotation(-t)),this}translate(t,i){return this.premultiply(Kf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Kf=new ft,Tg=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Cg=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function eS(){const o={enabled:!0,workingColorSpace:Ts,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Ht&&(l.r=fa(l.r),l.g=fa(l.g),l.b=fa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ht&&(l.r=bs(l.r),l.g=bs(l.g),l.b=bs(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Ya?Rc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Po("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Po("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ts]:{primaries:t,whitePoint:r,transfer:Rc,toXYZ:Tg,fromXYZ:Cg,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:t,whitePoint:r,transfer:Ht,toXYZ:Tg,fromXYZ:Cg,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),o}const Dt=eS();function fa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function bs(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let os;class tS{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{os===void 0&&(os=Dc("canvas")),os.width=t.width,os.height=t.height;const l=os.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=os}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Dc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=fa(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(fa(i[r]/255)*255):i[r]=fa(i[r]);return{data:i,width:t.width,height:t.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let nS=0;class Mh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:nS++}),this.uuid=Fo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push($f(l[d].image)):u.push($f(l[d]))}else u=$f(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function $f(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?tS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let iS=0;const ed=new ce;class In extends Ds{constructor(t=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,r=la,l=la,u=di,d=Er,h=bi,m=da,p=In.DEFAULT_ANISOTROPY,_=Ya){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:iS++}),this.uuid=Fo(),this.name="",this.source=new Mh(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ed).x}get height(){return this.source.getSize(ed).y}get depth(){return this.source.getSize(ed).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){ot(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_x)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bd:t.x=t.x-Math.floor(t.x);break;case la:t.x=t.x<0?0:1;break;case zd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bd:t.y=t.y-Math.floor(t.y);break;case la:t.y=t.y<0?0:1;break;case zd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=_x;In.DEFAULT_ANISOTROPY=1;class rn{constructor(t=0,i=0,r=0,l=1){rn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],_=m[4],x=m[8],v=m[1],b=m[5],T=m[9],C=m[2],S=m[6],A=m[10];if(Math.abs(_-v)<.01&&Math.abs(x-C)<.01&&Math.abs(T-S)<.01){if(Math.abs(_+v)<.1&&Math.abs(x+C)<.1&&Math.abs(T+S)<.1&&Math.abs(p+b+A-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,z=(b+1)/2,k=(A+1)/2,N=(_+v)/4,P=(x+C)/4,ne=(T+S)/4;return U>z&&U>k?U<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(U),l=N/r,u=P/r):z>k?z<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(z),r=N/l,u=ne/l):k<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(k),r=P/u,l=ne/u),this.set(r,l,u,i),this}let B=Math.sqrt((S-T)*(S-T)+(x-C)*(x-C)+(v-_)*(v-_));return Math.abs(B)<.001&&(B=1),this.x=(S-T)/B,this.y=(x-C)/B,this.z=(v-_)/B,this.w=Math.acos((p+b+A-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=yt(this.x,t.x,i.x),this.y=yt(this.y,t.y,i.y),this.z=yt(this.z,t.z,i.z),this.w=yt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=yt(this.x,t,i),this.y=yt(this.y,t,i),this.z=yt(this.z,t,i),this.w=yt(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class aS extends Ds{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new rn(0,0,t,i),this.scissorTest=!1,this.viewport=new rn(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new In(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:di,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new Mh(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qa extends aS{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class Rx extends In{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ei,this.minFilter=ei,this.wrapR=la,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class rS extends In{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ei,this.minFilter=ei,this.wrapR=la,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ho{constructor(t=new ce(1/0,1/0,1/0),i=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(xi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(xi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=xi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,xi):xi.fromBufferAttribute(u,d),xi.applyMatrix4(t.matrixWorld),this.expandByPoint(xi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),tc.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),tc.copy(r.boundingBox)),tc.applyMatrix4(t.matrixWorld),this.union(tc)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,xi),xi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ro),nc.subVectors(this.max,Ro),ls.subVectors(t.a,Ro),cs.subVectors(t.b,Ro),us.subVectors(t.c,Ro),Fa.subVectors(cs,ls),Ga.subVectors(us,cs),mr.subVectors(ls,us);let i=[0,-Fa.z,Fa.y,0,-Ga.z,Ga.y,0,-mr.z,mr.y,Fa.z,0,-Fa.x,Ga.z,0,-Ga.x,mr.z,0,-mr.x,-Fa.y,Fa.x,0,-Ga.y,Ga.x,0,-mr.y,mr.x,0];return!td(i,ls,cs,us,nc)||(i=[1,0,0,0,1,0,0,0,1],!td(i,ls,cs,us,nc))?!1:(ic.crossVectors(Fa,Ga),i=[ic.x,ic.y,ic.z],td(i,ls,cs,us,nc))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,xi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(xi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ea[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ea[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ea[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ea[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ea[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ea[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ea[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ea[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ea),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ea=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],xi=new ce,tc=new Ho,ls=new ce,cs=new ce,us=new ce,Fa=new ce,Ga=new ce,mr=new ce,Ro=new ce,nc=new ce,ic=new ce,gr=new ce;function td(o,t,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){gr.fromArray(o,u);const h=l.x*Math.abs(gr.x)+l.y*Math.abs(gr.y)+l.z*Math.abs(gr.z),m=t.dot(gr),p=i.dot(gr),_=r.dot(gr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>h)return!1}return!0}const sS=new Ho,wo=new ce,nd=new ce;class Eh{constructor(t=new ce,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):sS.setFromPoints(t).getCenter(r);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wo.subVectors(t,this.center);const i=wo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(wo,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(nd.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wo.copy(t.center).add(nd)),this.expandByPoint(wo.copy(t.center).sub(nd))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ta=new ce,id=new ce,ac=new ce,Ha=new ce,ad=new ce,rc=new ce,rd=new ce;class oS{constructor(t=new ce,i=new ce(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ta)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ta.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){id.copy(t).add(i).multiplyScalar(.5),ac.copy(i).sub(t).normalize(),Ha.copy(this.origin).sub(id);const u=t.distanceTo(i)*.5,d=-this.direction.dot(ac),h=Ha.dot(this.direction),m=-Ha.dot(ac),p=Ha.lengthSq(),_=Math.abs(1-d*d);let x,v,b,T;if(_>0)if(x=d*m-h,v=d*h-m,T=u*_,x>=0)if(v>=-T)if(v<=T){const C=1/_;x*=C,v*=C,b=x*(x+d*v+2*h)+v*(d*x+v+2*m)+p}else v=u,x=Math.max(0,-(d*v+h)),b=-x*x+v*(v+2*m)+p;else v=-u,x=Math.max(0,-(d*v+h)),b=-x*x+v*(v+2*m)+p;else v<=-T?(x=Math.max(0,-(-d*u+h)),v=x>0?-u:Math.min(Math.max(-u,-m),u),b=-x*x+v*(v+2*m)+p):v<=T?(x=0,v=Math.min(Math.max(-u,-m),u),b=v*(v+2*m)+p):(x=Math.max(0,-(d*u+h)),v=x>0?u:Math.min(Math.max(-u,-m),u),b=-x*x+v*(v+2*m)+p);else v=d>0?-u:u,x=Math.max(0,-(d*v+h)),b=-x*x+v*(v+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,x),l&&l.copy(id).addScaledVector(ac,v),b}intersectSphere(t,i){ta.subVectors(t.center,this.origin);const r=ta.dot(this.direction),l=ta.dot(ta)-r*r,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,d,h,m;const p=1/this.direction.x,_=1/this.direction.y,x=1/this.direction.z,v=this.origin;return p>=0?(r=(t.min.x-v.x)*p,l=(t.max.x-v.x)*p):(r=(t.max.x-v.x)*p,l=(t.min.x-v.x)*p),_>=0?(u=(t.min.y-v.y)*_,d=(t.max.y-v.y)*_):(u=(t.max.y-v.y)*_,d=(t.min.y-v.y)*_),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),x>=0?(h=(t.min.z-v.z)*x,m=(t.max.z-v.z)*x):(h=(t.max.z-v.z)*x,m=(t.min.z-v.z)*x),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ta)!==null}intersectTriangle(t,i,r,l,u){ad.subVectors(i,t),rc.subVectors(r,t),rd.crossVectors(ad,rc);let d=this.direction.dot(rd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ha.subVectors(this.origin,t);const m=h*this.direction.dot(rc.crossVectors(Ha,rc));if(m<0)return null;const p=h*this.direction.dot(ad.cross(Ha));if(p<0||m+p>d)return null;const _=-h*Ha.dot(rd);return _<0?null:this.at(_/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mn{constructor(t,i,r,l,u,d,h,m,p,_,x,v,b,T,C,S){mn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p,_,x,v,b,T,C,S)}set(t,i,r,l,u,d,h,m,p,_,x,v,b,T,C,S){const A=this.elements;return A[0]=t,A[4]=i,A[8]=r,A[12]=l,A[1]=u,A[5]=d,A[9]=h,A[13]=m,A[2]=p,A[6]=_,A[10]=x,A[14]=v,A[3]=b,A[7]=T,A[11]=C,A[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/fs.setFromMatrixColumn(t,0).length(),u=1/fs.setFromMatrixColumn(t,1).length(),d=1/fs.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),x=Math.sin(u);if(t.order==="XYZ"){const v=d*_,b=d*x,T=h*_,C=h*x;i[0]=m*_,i[4]=-m*x,i[8]=p,i[1]=b+T*p,i[5]=v-C*p,i[9]=-h*m,i[2]=C-v*p,i[6]=T+b*p,i[10]=d*m}else if(t.order==="YXZ"){const v=m*_,b=m*x,T=p*_,C=p*x;i[0]=v+C*h,i[4]=T*h-b,i[8]=d*p,i[1]=d*x,i[5]=d*_,i[9]=-h,i[2]=b*h-T,i[6]=C+v*h,i[10]=d*m}else if(t.order==="ZXY"){const v=m*_,b=m*x,T=p*_,C=p*x;i[0]=v-C*h,i[4]=-d*x,i[8]=T+b*h,i[1]=b+T*h,i[5]=d*_,i[9]=C-v*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const v=d*_,b=d*x,T=h*_,C=h*x;i[0]=m*_,i[4]=T*p-b,i[8]=v*p+C,i[1]=m*x,i[5]=C*p+v,i[9]=b*p-T,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const v=d*m,b=d*p,T=h*m,C=h*p;i[0]=m*_,i[4]=C-v*x,i[8]=T*x+b,i[1]=x,i[5]=d*_,i[9]=-h*_,i[2]=-p*_,i[6]=b*x+T,i[10]=v-C*x}else if(t.order==="XZY"){const v=d*m,b=d*p,T=h*m,C=h*p;i[0]=m*_,i[4]=-x,i[8]=p*_,i[1]=v*x+C,i[5]=d*_,i[9]=b*x-T,i[2]=T*x-b,i[6]=h*_,i[10]=C*x+v}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(lS,t,cS)}lookAt(t,i,r){const l=this.elements;return Kn.subVectors(t,i),Kn.lengthSq()===0&&(Kn.z=1),Kn.normalize(),Va.crossVectors(r,Kn),Va.lengthSq()===0&&(Math.abs(r.z)===1?Kn.x+=1e-4:Kn.z+=1e-4,Kn.normalize(),Va.crossVectors(r,Kn)),Va.normalize(),sc.crossVectors(Kn,Va),l[0]=Va.x,l[4]=sc.x,l[8]=Kn.x,l[1]=Va.y,l[5]=sc.y,l[9]=Kn.y,l[2]=Va.z,l[6]=sc.z,l[10]=Kn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],_=r[1],x=r[5],v=r[9],b=r[13],T=r[2],C=r[6],S=r[10],A=r[14],B=r[3],U=r[7],z=r[11],k=r[15],N=l[0],P=l[4],ne=l[8],w=l[12],R=l[1],V=l[5],ee=l[9],oe=l[13],ge=l[2],fe=l[6],O=l[10],j=l[14],q=l[3],_e=l[7],Ae=l[11],L=l[15];return u[0]=d*N+h*R+m*ge+p*q,u[4]=d*P+h*V+m*fe+p*_e,u[8]=d*ne+h*ee+m*O+p*Ae,u[12]=d*w+h*oe+m*j+p*L,u[1]=_*N+x*R+v*ge+b*q,u[5]=_*P+x*V+v*fe+b*_e,u[9]=_*ne+x*ee+v*O+b*Ae,u[13]=_*w+x*oe+v*j+b*L,u[2]=T*N+C*R+S*ge+A*q,u[6]=T*P+C*V+S*fe+A*_e,u[10]=T*ne+C*ee+S*O+A*Ae,u[14]=T*w+C*oe+S*j+A*L,u[3]=B*N+U*R+z*ge+k*q,u[7]=B*P+U*V+z*fe+k*_e,u[11]=B*ne+U*ee+z*O+k*Ae,u[15]=B*w+U*oe+z*j+k*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],d=t[1],h=t[5],m=t[9],p=t[13],_=t[2],x=t[6],v=t[10],b=t[14],T=t[3],C=t[7],S=t[11],A=t[15];return T*(+u*m*x-l*p*x-u*h*v+r*p*v+l*h*b-r*m*b)+C*(+i*m*b-i*p*v+u*d*v-l*d*b+l*p*_-u*m*_)+S*(+i*p*x-i*h*b-u*d*x+r*d*b+u*h*_-r*p*_)+A*(-l*h*_-i*m*x+i*h*v+l*d*x-r*d*v+r*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],_=t[8],x=t[9],v=t[10],b=t[11],T=t[12],C=t[13],S=t[14],A=t[15],B=x*S*p-C*v*p+C*m*b-h*S*b-x*m*A+h*v*A,U=T*v*p-_*S*p-T*m*b+d*S*b+_*m*A-d*v*A,z=_*C*p-T*x*p+T*h*b-d*C*b-_*h*A+d*x*A,k=T*x*m-_*C*m-T*h*v+d*C*v+_*h*S-d*x*S,N=i*B+r*U+l*z+u*k;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/N;return t[0]=B*P,t[1]=(C*v*u-x*S*u-C*l*b+r*S*b+x*l*A-r*v*A)*P,t[2]=(h*S*u-C*m*u+C*l*p-r*S*p-h*l*A+r*m*A)*P,t[3]=(x*m*u-h*v*u-x*l*p+r*v*p+h*l*b-r*m*b)*P,t[4]=U*P,t[5]=(_*S*u-T*v*u+T*l*b-i*S*b-_*l*A+i*v*A)*P,t[6]=(T*m*u-d*S*u-T*l*p+i*S*p+d*l*A-i*m*A)*P,t[7]=(d*v*u-_*m*u+_*l*p-i*v*p-d*l*b+i*m*b)*P,t[8]=z*P,t[9]=(T*x*u-_*C*u-T*r*b+i*C*b+_*r*A-i*x*A)*P,t[10]=(d*C*u-T*h*u+T*r*p-i*C*p-d*r*A+i*h*A)*P,t[11]=(_*h*u-d*x*u-_*r*p+i*x*p+d*r*b-i*h*b)*P,t[12]=k*P,t[13]=(_*C*l-T*x*l+T*r*v-i*C*v-_*r*S+i*x*S)*P,t[14]=(T*h*l-d*C*l-T*r*m+i*C*m+d*r*S-i*h*S)*P,t[15]=(d*x*l-_*h*l+_*r*m-i*x*m-d*r*v+i*h*v)*P,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=t.x,h=t.y,m=t.z,p=u*d,_=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,_*h+r,_*m-l*d,0,p*m-l*h,_*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,d){return this.set(1,r,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,_=d+d,x=h+h,v=u*p,b=u*_,T=u*x,C=d*_,S=d*x,A=h*x,B=m*p,U=m*_,z=m*x,k=r.x,N=r.y,P=r.z;return l[0]=(1-(C+A))*k,l[1]=(b+z)*k,l[2]=(T-U)*k,l[3]=0,l[4]=(b-z)*N,l[5]=(1-(v+A))*N,l[6]=(S+B)*N,l[7]=0,l[8]=(T+U)*P,l[9]=(S-B)*P,l[10]=(1-(v+C))*P,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=fs.set(l[0],l[1],l[2]).length();const d=fs.set(l[4],l[5],l[6]).length(),h=fs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],_i.copy(this);const p=1/u,_=1/d,x=1/h;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=_,_i.elements[5]*=_,_i.elements[6]*=_,_i.elements[8]*=x,_i.elements[9]*=x,_i.elements[10]*=x,i.setFromRotationMatrix(_i),r.x=u,r.y=d,r.z=h,this}makePerspective(t,i,r,l,u,d,h=Ui,m=!1){const p=this.elements,_=2*u/(i-t),x=2*u/(r-l),v=(i+t)/(i-t),b=(r+l)/(r-l);let T,C;if(m)T=u/(d-u),C=d*u/(d-u);else if(h===Ui)T=-(d+u)/(d-u),C=-2*d*u/(d-u);else if(h===wc)T=-d/(d-u),C=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=v,p[12]=0,p[1]=0,p[5]=x,p[9]=b,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,d,h=Ui,m=!1){const p=this.elements,_=2/(i-t),x=2/(r-l),v=-(i+t)/(i-t),b=-(r+l)/(r-l);let T,C;if(m)T=1/(d-u),C=d/(d-u);else if(h===Ui)T=-2/(d-u),C=-(d+u)/(d-u);else if(h===wc)T=-1/(d-u),C=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=_,p[4]=0,p[8]=0,p[12]=v,p[1]=0,p[5]=x,p[9]=0,p[13]=b,p[2]=0,p[6]=0,p[10]=T,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const fs=new ce,_i=new mn,lS=new ce(0,0,0),cS=new ce(1,1,1),Va=new ce,sc=new ce,Kn=new ce,Rg=new mn,wg=new Go;class ha{constructor(t=0,i=0,r=0,l=ha.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],_=l[9],x=l[2],v=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-_,b),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(v,p),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(h,b),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,u),this._z=0);break;case"ZXY":this._x=Math.asin(yt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-x,b),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-yt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(v,b),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(yt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-x,u)):(this._x=0,this._y=Math.atan2(h,b));break;case"XZY":this._z=Math.asin(-yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-_,b),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return Rg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rg,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return wg.setFromEuler(this),this.setFromQuaternion(wg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ha.DEFAULT_ORDER="XYZ";class wx{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let uS=0;const Dg=new ce,ds=new Go,na=new mn,oc=new ce,Do=new ce,fS=new ce,dS=new Go,Ug=new ce(1,0,0),Lg=new ce(0,1,0),Ng=new ce(0,0,1),Ig={type:"added"},hS={type:"removed"},hs={type:"childadded",child:null},sd={type:"childremoved",child:null};class ti extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:uS++}),this.uuid=Fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ti.DEFAULT_UP.clone();const t=new ce,i=new ha,r=new Go,l=new ce(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new mn},normalMatrix:{value:new ft}}),this.matrix=new mn,this.matrixWorld=new mn,this.matrixAutoUpdate=ti.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return ds.setFromAxisAngle(t,i),this.quaternion.multiply(ds),this}rotateOnWorldAxis(t,i){return ds.setFromAxisAngle(t,i),this.quaternion.premultiply(ds),this}rotateX(t){return this.rotateOnAxis(Ug,t)}rotateY(t){return this.rotateOnAxis(Lg,t)}rotateZ(t){return this.rotateOnAxis(Ng,t)}translateOnAxis(t,i){return Dg.copy(t).applyQuaternion(this.quaternion),this.position.add(Dg.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Ug,t)}translateY(t){return this.translateOnAxis(Lg,t)}translateZ(t){return this.translateOnAxis(Ng,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(na.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?oc.copy(t):oc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Do.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?na.lookAt(Do,oc,this.up):na.lookAt(oc,Do,this.up),this.quaternion.setFromRotationMatrix(na),l&&(na.extractRotation(l.matrixWorld),ds.setFromRotationMatrix(na),this.quaternion.premultiply(ds.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(an("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ig),hs.child=t,this.dispatchEvent(hs),hs.child=null):an("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(hS),sd.child=t,this.dispatchEvent(sd),sd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),na.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),na.multiply(t.parent.matrixWorld)),t.applyMatrix4(na),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ig),hs.child=t,this.dispatchEvent(hs),hs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,t,fS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Do,dS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const x=m[p];u(t.shapes,x)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(t.materials,this.material[m]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),_=d(t.images),x=d(t.shapes),v=d(t.skeletons),b=d(t.animations),T=d(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),x.length>0&&(r.shapes=x),v.length>0&&(r.skeletons=v),b.length>0&&(r.animations=b),T.length>0&&(r.nodes=T)}return r.object=l,r;function d(h){const m=[];for(const p in h){const _=h[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}ti.DEFAULT_UP=new ce(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ai=new ce,ia=new ce,od=new ce,aa=new ce,ps=new ce,ms=new ce,Og=new ce,ld=new ce,cd=new ce,ud=new ce,fd=new rn,dd=new rn,hd=new rn;class Si{constructor(t=new ce,i=new ce,r=new ce){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),Ai.subVectors(t,i),l.cross(Ai);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){Ai.subVectors(l,i),ia.subVectors(r,i),od.subVectors(t,i);const d=Ai.dot(Ai),h=Ai.dot(ia),m=Ai.dot(od),p=ia.dot(ia),_=ia.dot(od),x=d*p-h*h;if(x===0)return u.set(0,0,0),null;const v=1/x,b=(p*m-h*_)*v,T=(d*_-h*m)*v;return u.set(1-b-T,T,b)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,aa)===null?!1:aa.x>=0&&aa.y>=0&&aa.x+aa.y<=1}static getInterpolation(t,i,r,l,u,d,h,m){return this.getBarycoord(t,i,r,l,aa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,aa.x),m.addScaledVector(d,aa.y),m.addScaledVector(h,aa.z),m)}static getInterpolatedAttribute(t,i,r,l,u,d){return fd.setScalar(0),dd.setScalar(0),hd.setScalar(0),fd.fromBufferAttribute(t,i),dd.fromBufferAttribute(t,r),hd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(fd,u.x),d.addScaledVector(dd,u.y),d.addScaledVector(hd,u.z),d}static isFrontFacing(t,i,r,l){return Ai.subVectors(r,i),ia.subVectors(t,i),Ai.cross(ia).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ai.subVectors(this.c,this.b),ia.subVectors(this.a,this.b),Ai.cross(ia).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Si.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Si.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return Si.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return Si.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Si.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let d,h;ps.subVectors(l,r),ms.subVectors(u,r),ld.subVectors(t,r);const m=ps.dot(ld),p=ms.dot(ld);if(m<=0&&p<=0)return i.copy(r);cd.subVectors(t,l);const _=ps.dot(cd),x=ms.dot(cd);if(_>=0&&x<=_)return i.copy(l);const v=m*x-_*p;if(v<=0&&m>=0&&_<=0)return d=m/(m-_),i.copy(r).addScaledVector(ps,d);ud.subVectors(t,u);const b=ps.dot(ud),T=ms.dot(ud);if(T>=0&&b<=T)return i.copy(u);const C=b*p-m*T;if(C<=0&&p>=0&&T<=0)return h=p/(p-T),i.copy(r).addScaledVector(ms,h);const S=_*T-b*x;if(S<=0&&x-_>=0&&b-T>=0)return Og.subVectors(u,l),h=(x-_)/(x-_+(b-T)),i.copy(l).addScaledVector(Og,h);const A=1/(S+C+v);return d=C*A,h=v*A,i.copy(r).addScaledVector(ps,d).addScaledVector(ms,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Dx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ka={h:0,s:0,l:0},lc={h:0,s:0,l:0};function pd(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Vt{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Dt.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Dt.workingColorSpace){return this.r=t,this.g=i,this.b=r,Dt.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Dt.workingColorSpace){if(t=$v(t,1),i=yt(i,0,1),r=yt(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=pd(d,u,t+1/3),this.g=pd(d,u,t),this.b=pd(d,u,t-1/3)}return Dt.colorSpaceToWorking(this,l),this}setStyle(t,i=fi){function r(u){u!==void 0&&parseFloat(u)<1&&ot("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:ot("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=fi){const r=Dx[t.toLowerCase()];return r!==void 0?this.setHex(r,i):ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fa(t.r),this.g=fa(t.g),this.b=fa(t.b),this}copyLinearToSRGB(t){return this.r=bs(t.r),this.g=bs(t.g),this.b=bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fi){return Dt.workingToColorSpace(Un.copy(this),t),Math.round(yt(Un.r*255,0,255))*65536+Math.round(yt(Un.g*255,0,255))*256+Math.round(yt(Un.b*255,0,255))}getHexString(t=fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Dt.workingColorSpace){Dt.workingToColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,u=Un.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const _=(h+d)/2;if(h===d)m=0,p=0;else{const x=d-h;switch(p=_<=.5?x/(d+h):x/(2-d-h),d){case r:m=(l-u)/x+(l<u?6:0);break;case l:m=(u-r)/x+2;break;case u:m=(r-l)/x+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Dt.workingColorSpace){return Dt.workingToColorSpace(Un.copy(this),i),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=fi){Dt.workingToColorSpace(Un.copy(this),t);const i=Un.r,r=Un.g,l=Un.b;return t!==fi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(ka),this.setHSL(ka.h+t,ka.s+i,ka.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(ka),t.getHSL(lc);const r=Jf(ka.h,lc.h,i),l=Jf(ka.s,lc.s,i),u=Jf(ka.l,lc.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Vt;Vt.NAMES=Dx;let pS=0;class Lc extends Ds{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pS++}),this.uuid=Fo(),this.name="",this.type="Material",this.blending=Ss,this.side=ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ed,this.blendDst=Td,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){ot(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(r.blending=this.blending),this.side!==ja&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ed&&(r.blendSrc=this.blendSrc),this.blendDst!==Td&&(r.blendDst=this.blendDst),this.blendEquation!==br&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vg&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(r.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ux extends Lc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ha,this.combine=xx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new ce,cc=new Ut;let mS=0;class Li{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=Sg,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)cc.fromBufferAttribute(this,i),cc.applyMatrix3(t),this.setXY(i,cc.x,cc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Co(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Hn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Co(i,this.array)),i}setX(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Co(i,this.array)),i}setY(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Co(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Co(i,this.array)),i}setW(t,i){return this.normalized&&(i=Hn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Hn(i,this.array),r=Hn(r,this.array),l=Hn(l,this.array),u=Hn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Sg&&(t.usage=this.usage),t}}class Lx extends Li{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Nx extends Li{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Tr extends Li{constructor(t,i,r){super(new Float32Array(t),i,r)}}let gS=0;const ui=new mn,md=new ti,gs=new ce,$n=new Ho,Uo=new Ho,bn=new ce;class Ja extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gS++}),this.uuid=Fo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Cx(t)?Nx:Lx)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ft().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,i,r){return ui.makeTranslation(t,i,r),this.applyMatrix4(ui),this}scale(t,i,r){return ui.makeScale(t,i,r),this.applyMatrix4(ui),this}lookAt(t){return md.lookAt(t),md.updateMatrix(),this.applyMatrix4(md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gs).negate(),this.translate(gs.x,gs.y,gs.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Tr(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){an("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&an('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Eh);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){an("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(t){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Uo.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors($n.min,Uo.min),$n.expandByPoint(bn),bn.addVectors($n.max,Uo.max),$n.expandByPoint(bn)):($n.expandByPoint(Uo.min),$n.expandByPoint(Uo.max))}$n.getCenter(r);let l=0;for(let u=0,d=t.count;u<d;u++)bn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(bn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,_=h.count;p<_;p++)bn.fromBufferAttribute(h,p),m&&(gs.fromBufferAttribute(t,p),bn.add(gs)),l=Math.max(l,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&an('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){an("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let ne=0;ne<r.count;ne++)h[ne]=new ce,m[ne]=new ce;const p=new ce,_=new ce,x=new ce,v=new Ut,b=new Ut,T=new Ut,C=new ce,S=new ce;function A(ne,w,R){p.fromBufferAttribute(r,ne),_.fromBufferAttribute(r,w),x.fromBufferAttribute(r,R),v.fromBufferAttribute(u,ne),b.fromBufferAttribute(u,w),T.fromBufferAttribute(u,R),_.sub(p),x.sub(p),b.sub(v),T.sub(v);const V=1/(b.x*T.y-T.x*b.y);isFinite(V)&&(C.copy(_).multiplyScalar(T.y).addScaledVector(x,-b.y).multiplyScalar(V),S.copy(x).multiplyScalar(b.x).addScaledVector(_,-T.x).multiplyScalar(V),h[ne].add(C),h[w].add(C),h[R].add(C),m[ne].add(S),m[w].add(S),m[R].add(S))}let B=this.groups;B.length===0&&(B=[{start:0,count:t.count}]);for(let ne=0,w=B.length;ne<w;++ne){const R=B[ne],V=R.start,ee=R.count;for(let oe=V,ge=V+ee;oe<ge;oe+=3)A(t.getX(oe+0),t.getX(oe+1),t.getX(oe+2))}const U=new ce,z=new ce,k=new ce,N=new ce;function P(ne){k.fromBufferAttribute(l,ne),N.copy(k);const w=h[ne];U.copy(w),U.sub(k.multiplyScalar(k.dot(w))).normalize(),z.crossVectors(N,w);const V=z.dot(m[ne])<0?-1:1;d.setXYZW(ne,U.x,U.y,U.z,V)}for(let ne=0,w=B.length;ne<w;++ne){const R=B[ne],V=R.start,ee=R.count;for(let oe=V,ge=V+ee;oe<ge;oe+=3)P(t.getX(oe+0)),P(t.getX(oe+1)),P(t.getX(oe+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Li(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let v=0,b=r.count;v<b;v++)r.setXYZ(v,0,0,0);const l=new ce,u=new ce,d=new ce,h=new ce,m=new ce,p=new ce,_=new ce,x=new ce;if(t)for(let v=0,b=t.count;v<b;v+=3){const T=t.getX(v+0),C=t.getX(v+1),S=t.getX(v+2);l.fromBufferAttribute(i,T),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,S),_.subVectors(d,u),x.subVectors(l,u),_.cross(x),h.fromBufferAttribute(r,T),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,S),h.add(_),m.add(_),p.add(_),r.setXYZ(T,h.x,h.y,h.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(S,p.x,p.y,p.z)}else for(let v=0,b=i.count;v<b;v+=3)l.fromBufferAttribute(i,v+0),u.fromBufferAttribute(i,v+1),d.fromBufferAttribute(i,v+2),_.subVectors(d,u),x.subVectors(l,u),_.cross(x),r.setXYZ(v+0,_.x,_.y,_.z),r.setXYZ(v+1,_.x,_.y,_.z),r.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)bn.fromBufferAttribute(t,i),bn.normalize(),t.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function t(h,m){const p=h.array,_=h.itemSize,x=h.normalized,v=new p.constructor(m.length*_);let b=0,T=0;for(let C=0,S=m.length;C<S;C++){h.isInterleavedBufferAttribute?b=m[C]*h.data.stride+h.offset:b=m[C]*_;for(let A=0;A<_;A++)v[T++]=p[b++]}return new Li(v,_,x)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ja,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let _=0,x=p.length;_<x;_++){const v=p[_],b=t(v,r);m.push(b)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let x=0,v=p.length;x<v;x++){const b=p[x];_.push(b.toJSON(t.data))}_.length>0&&(l[m]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=t.morphAttributes;for(const p in u){const _=[],x=u[p];for(let v=0,b=x.length;v<b;v++)_.push(x[v].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,_=d.length;p<_;p++){const x=d[p];this.addGroup(x.start,x.count,x.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bg=new mn,xr=new oS,uc=new Eh,zg=new ce,fc=new ce,dc=new ce,hc=new ce,gd=new ce,pc=new ce,Pg=new ce,mc=new ce;class Ni extends ti{constructor(t=new Ja,i=new Ux){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){pc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=h[m],x=u[m];_!==0&&(gd.fromBufferAttribute(x,t),d?pc.addScaledVector(gd,_):pc.addScaledVector(gd.sub(i),_))}i.add(pc)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),uc.copy(r.boundingSphere),uc.applyMatrix4(u),xr.copy(t.ray).recast(t.near),!(uc.containsPoint(xr.origin)===!1&&(xr.intersectSphere(uc,zg)===null||xr.origin.distanceToSquared(zg)>(t.far-t.near)**2))&&(Bg.copy(u).invert(),xr.copy(t.ray).applyMatrix4(Bg),!(r.boundingBox!==null&&xr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,xr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,x=u.attributes.normal,v=u.groups,b=u.drawRange;if(h!==null)if(Array.isArray(d))for(let T=0,C=v.length;T<C;T++){const S=v[T],A=d[S.materialIndex],B=Math.max(S.start,b.start),U=Math.min(h.count,Math.min(S.start+S.count,b.start+b.count));for(let z=B,k=U;z<k;z+=3){const N=h.getX(z),P=h.getX(z+1),ne=h.getX(z+2);l=gc(this,A,t,r,p,_,x,N,P,ne),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,b.start),C=Math.min(h.count,b.start+b.count);for(let S=T,A=C;S<A;S+=3){const B=h.getX(S),U=h.getX(S+1),z=h.getX(S+2);l=gc(this,d,t,r,p,_,x,B,U,z),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let T=0,C=v.length;T<C;T++){const S=v[T],A=d[S.materialIndex],B=Math.max(S.start,b.start),U=Math.min(m.count,Math.min(S.start+S.count,b.start+b.count));for(let z=B,k=U;z<k;z+=3){const N=z,P=z+1,ne=z+2;l=gc(this,A,t,r,p,_,x,N,P,ne),l&&(l.faceIndex=Math.floor(z/3),l.face.materialIndex=S.materialIndex,i.push(l))}}else{const T=Math.max(0,b.start),C=Math.min(m.count,b.start+b.count);for(let S=T,A=C;S<A;S+=3){const B=S,U=S+1,z=S+2;l=gc(this,d,t,r,p,_,x,B,U,z),l&&(l.faceIndex=Math.floor(S/3),i.push(l))}}}}function xS(o,t,i,r,l,u,d,h){let m;if(t.side===Vn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,t.side===ja,h),m===null)return null;mc.copy(h),mc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(mc);return p<i.near||p>i.far?null:{distance:p,point:mc.clone(),object:o}}function gc(o,t,i,r,l,u,d,h,m,p){o.getVertexPosition(h,fc),o.getVertexPosition(m,dc),o.getVertexPosition(p,hc);const _=xS(o,t,i,r,fc,dc,hc,Pg);if(_){const x=new ce;Si.getBarycoord(Pg,fc,dc,hc,x),l&&(_.uv=Si.getInterpolatedAttribute(l,h,m,p,x,new Ut)),u&&(_.uv1=Si.getInterpolatedAttribute(u,h,m,p,x,new Ut)),d&&(_.normal=Si.getInterpolatedAttribute(d,h,m,p,x,new ce),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const v={a:h,b:m,c:p,normal:new ce,materialIndex:0};Si.getNormal(fc,dc,hc,v.normal),_.face=v,_.barycoord=x}return _}class Vo extends Ja{constructor(t=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],_=[],x=[];let v=0,b=0;T("z","y","x",-1,-1,r,i,t,d,u,0),T("z","y","x",1,-1,r,i,-t,d,u,1),T("x","z","y",1,1,t,r,i,l,d,2),T("x","z","y",1,-1,t,r,-i,l,d,3),T("x","y","z",1,-1,t,i,r,l,u,4),T("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Tr(p,3)),this.setAttribute("normal",new Tr(_,3)),this.setAttribute("uv",new Tr(x,2));function T(C,S,A,B,U,z,k,N,P,ne,w){const R=z/P,V=k/ne,ee=z/2,oe=k/2,ge=N/2,fe=P+1,O=ne+1;let j=0,q=0;const _e=new ce;for(let Ae=0;Ae<O;Ae++){const L=Ae*V-oe;for(let ae=0;ae<fe;ae++){const be=ae*R-ee;_e[C]=be*B,_e[S]=L*U,_e[A]=ge,p.push(_e.x,_e.y,_e.z),_e[C]=0,_e[S]=0,_e[A]=N>0?1:-1,_.push(_e.x,_e.y,_e.z),x.push(ae/P),x.push(1-Ae/ne),j+=1}}for(let Ae=0;Ae<ne;Ae++)for(let L=0;L<P;L++){const ae=v+L+fe*Ae,be=v+L+fe*(Ae+1),Ee=v+(L+1)+fe*(Ae+1),Oe=v+(L+1)+fe*Ae;m.push(ae,be,Oe),m.push(be,Ee,Oe),q+=6}h.addGroup(b,q,w),b+=q,v+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Cs(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Nn(o){const t={};for(let i=0;i<o.length;i++){const r=Cs(o[i]);for(const l in r)t[l]=r[l]}return t}function _S(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Ix(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Dt.workingColorSpace}const AS={clone:Cs,merge:Nn};var vS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,SS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yi extends Lc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=vS,this.fragmentShader=SS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cs(t.uniforms),this.uniformsGroups=_S(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Ox extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mn,this.projectionMatrix=new mn,this.projectionMatrixInverse=new mn,this.coordinateSystem=Ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xa=new ce,Fg=new Ut,Gg=new Ut;class vi extends Ox{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=dh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dh*2*Math.atan(Math.tan(Qf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Xa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xa.x,Xa.y).multiplyScalar(-t/Xa.z),Xa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Xa.x,Xa.y).multiplyScalar(-t/Xa.z)}getViewSize(t,i){return this.getViewBounds(t,Fg,Gg),i.subVectors(Gg,Fg)}setViewOffset(t,i,r,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Qf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const xs=-90,_s=1;class bS extends ti{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new vi(xs,_s,t,i);l.layers=this.layers,this.add(l);const u=new vi(xs,_s,t,i);u.layers=this.layers,this.add(u);const d=new vi(xs,_s,t,i);d.layers=this.layers,this.add(d);const h=new vi(xs,_s,t,i);h.layers=this.layers,this.add(h);const m=new vi(xs,_s,t,i);m.layers=this.layers,this.add(m);const p=new vi(xs,_s,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(t===Ui)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===wc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,_]=this.children,x=t.getRenderTarget(),v=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=C,t.setRenderTarget(r,5,l),t.render(i,_),t.setRenderTarget(x,v,b),t.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Bx extends In{constructor(t=[],i=Ms,r,l,u,d,h,m,p,_){super(t,i,r,l,u,d,h,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class yS extends Qa{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Bx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Vo(5,5,5),u=new yi({name:"CubemapFromEquirect",uniforms:Cs(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:ua});u.uniforms.tEquirect.value=i;const d=new Ni(l,u),h=i.minFilter;return i.minFilter===Er&&(i.minFilter=di),new bS(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(u)}}class xc extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}}const MS={type:"move"};class xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const C of t.hand.values()){const S=i.getJointPose(C,r),A=this._getHandJoint(p,C);S!==null&&(A.matrix.fromArray(S.transform.matrix),A.matrix.decompose(A.position,A.rotation,A.scale),A.matrixWorldNeedsUpdate=!0,A.jointRadius=S.radius),A.visible=S!==null}const _=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],v=_.position.distanceTo(x.position),b=.02,T=.005;p.inputState.pinching&&v>b+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&v<=b-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(MS)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new xc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class Hg extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ha,this.environmentIntensity=1,this.environmentRotation=new ha,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class ES extends In{constructor(t=null,i=1,r=1,l,u,d,h,m,p=ei,_=ei,x,v){super(null,d,h,m,p,_,l,u,x,v),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _d=new ce,TS=new ce,CS=new ft;class Sr{constructor(t=new ce(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=_d.subVectors(r,i).cross(TS.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(_d),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||CS.getNormalMatrix(t),l=this.coplanarPoint(_d).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new Eh,RS=new Ut(.5,.5),_c=new ce;class zx{constructor(t=new Sr,i=new Sr,r=new Sr,l=new Sr,u=new Sr,d=new Sr){this.planes=[t,i,r,l,u,d]}set(t,i,r,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Ui,r=!1){const l=this.planes,u=t.elements,d=u[0],h=u[1],m=u[2],p=u[3],_=u[4],x=u[5],v=u[6],b=u[7],T=u[8],C=u[9],S=u[10],A=u[11],B=u[12],U=u[13],z=u[14],k=u[15];if(l[0].setComponents(p-d,b-_,A-T,k-B).normalize(),l[1].setComponents(p+d,b+_,A+T,k+B).normalize(),l[2].setComponents(p+h,b+x,A+C,k+U).normalize(),l[3].setComponents(p-h,b-x,A-C,k-U).normalize(),r)l[4].setComponents(m,v,S,z).normalize(),l[5].setComponents(p-m,b-v,A-S,k-z).normalize();else if(l[4].setComponents(p-m,b-v,A-S,k-z).normalize(),i===Ui)l[5].setComponents(p+m,b+v,A+S,k+z).normalize();else if(i===wc)l[5].setComponents(m,v,S,z).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),_r.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(t){_r.center.set(0,0,0);const i=RS.distanceTo(t.center);return _r.radius=.7071067811865476+i,_r.applyMatrix4(t.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(_c.x=l.normal.x>0?t.max.x:t.min.x,_c.y=l.normal.y>0?t.max.y:t.min.y,_c.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(_c)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Px extends In{constructor(t,i,r=Cr,l,u,d,h=ei,m=ei,p,_=Bo,x=1){if(_!==Bo&&_!==zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:i,depth:x};super(v,l,u,d,h,m,_,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Mh(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Fx extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Rs extends Ja{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,_=m+1,x=t/h,v=i/m,b=[],T=[],C=[],S=[];for(let A=0;A<_;A++){const B=A*v-d;for(let U=0;U<p;U++){const z=U*x-u;T.push(z,-B,0),C.push(0,0,1),S.push(U/h),S.push(1-A/m)}}for(let A=0;A<m;A++)for(let B=0;B<h;B++){const U=B+p*A,z=B+p*(A+1),k=B+1+p*(A+1),N=B+1+p*A;b.push(U,z,N),b.push(z,k,N)}this.setIndex(b),this.setAttribute("position",new Tr(T,3)),this.setAttribute("normal",new Tr(C,3)),this.setAttribute("uv",new Tr(S,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rs(t.width,t.height,t.widthSegments,t.heightSegments)}}class wS extends Lc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gv,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class DS extends Lc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Gx extends Ox{constructor(t=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,d=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=_*this.view.offsetY,m=h-_*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class US extends vi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class LS{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function Vg(o,t,i,r){const l=NS(r);switch(i){case yx:return o*t;case Ex:return o*t/l.components*l.byteLength;case vh:return o*t/l.components*l.byteLength;case Sh:return o*t*2/l.components*l.byteLength;case bh:return o*t*2/l.components*l.byteLength;case Mx:return o*t*3/l.components*l.byteLength;case bi:return o*t*4/l.components*l.byteLength;case yh:return o*t*4/l.components*l.byteLength;case bc:case yc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Mc:case Ec:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Fd:case Hd:return Math.max(o,16)*Math.max(t,8)/4;case Pd:case Gd:return Math.max(o,8)*Math.max(t,8)/2;case Vd:case kd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Xd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Yd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Wd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case qd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case jd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Qd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Jd:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Zd:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Kd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case $d:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case eh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case th:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case nh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case ih:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case ah:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case rh:case sh:case oh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case lh:case ch:return Math.ceil(o/4)*Math.ceil(t/4)*8;case uh:case fh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function NS(o){switch(o){case da:case Ax:return{byteLength:1,components:1};case Io:case vx:case ws:return{byteLength:2,components:1};case _h:case Ah:return{byteLength:2,components:4};case Cr:case xh:case ca:return{byteLength:4,components:1};case Sx:case bx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:gh}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=gh);function Hx(){let o=null,t=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function IS(o){const t=new WeakMap;function i(h,m){const p=h.array,_=h.usage,x=p.byteLength,v=o.createBuffer();o.bindBuffer(m,v),o.bufferData(m,p,_),h.onUploadCallback();let b;if(p instanceof Float32Array)b=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)b=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?b=o.HALF_FLOAT:b=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=o.SHORT;else if(p instanceof Uint32Array)b=o.UNSIGNED_INT;else if(p instanceof Int32Array)b=o.INT;else if(p instanceof Int8Array)b=o.BYTE;else if(p instanceof Uint8Array)b=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:v,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:x}}function r(h,m,p){const _=m.array,x=m.updateRanges;if(o.bindBuffer(p,h),x.length===0)o.bufferSubData(p,0,_);else{x.sort((b,T)=>b.start-T.start);let v=0;for(let b=1;b<x.length;b++){const T=x[v],C=x[b];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++v,x[v]=C)}x.length=v+1;for(let b=0,T=x.length;b<T;b++){const C=x[b];o.bufferSubData(p,C.start*_.BYTES_PER_ELEMENT,_,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const _=t.get(h);(!_||_.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var OS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,BS=`#ifdef USE_ALPHAHASH
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
#endif`,zS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,PS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,FS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,GS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,HS=`#ifdef USE_AOMAP
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
#endif`,VS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kS=`#ifdef USE_BATCHING
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
#endif`,XS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,YS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,WS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qS=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,jS=`#ifdef USE_IRIDESCENCE
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
#endif`,QS=`#ifdef USE_BUMPMAP
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
#endif`,JS=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ZS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,KS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$S=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,tb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,nb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ib=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ab=`#define PI 3.141592653589793
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
} // validated`,rb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sb=`vec3 transformedNormal = objectNormal;
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
#endif`,ob=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,lb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ub=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fb="gl_FragColor = linearToOutputTexel( gl_FragColor );",db=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hb=`#ifdef USE_ENVMAP
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
#endif`,pb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,mb=`#ifdef USE_ENVMAP
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
#endif`,gb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xb=`#ifdef USE_ENVMAP
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
#endif`,_b=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ab=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bb=`#ifdef USE_GRADIENTMAP
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
}`,yb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Tb=`uniform bool receiveShadow;
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
#endif`,Cb=`#ifdef USE_ENVMAP
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
#endif`,Rb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Db=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ub=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lb=`PhysicalMaterial material;
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
#endif`,Nb=`uniform sampler2D dfgLUT;
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
}`,Ib=`
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
#endif`,Ob=`#if defined( RE_IndirectDiffuse )
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
#endif`,Bb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Xb=`#if defined( USE_POINTS_UV )
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
#endif`,Yb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,jb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jb=`#ifdef USE_MORPHTARGETS
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
#endif`,Zb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$b=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ey=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ty=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ny=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,iy=`#ifdef USE_NORMALMAP
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
#endif`,ay=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ry=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ly=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,uy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,py=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,my=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,gy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_y=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ay=`float getShadowMask() {
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
}`,vy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Sy=`#ifdef USE_SKINNING
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
#endif`,by=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yy=`#ifdef USE_SKINNING
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
#endif`,My=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ey=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ty=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ry=`#ifdef USE_TRANSMISSION
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
#endif`,wy=`#ifdef USE_TRANSMISSION
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
#endif`,Dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Uy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ly=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ny=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Iy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Oy=`uniform sampler2D t2D;
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
}`,By=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Py=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gy=`#include <common>
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
}`,Hy=`#if DEPTH_PACKING == 3200
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
}`,Vy=`#define DISTANCE
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
}`,ky=`#define DISTANCE
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
}`,Xy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Yy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wy=`uniform float scale;
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
}`,qy=`uniform vec3 diffuse;
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
}`,jy=`#include <common>
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
}`,Qy=`uniform vec3 diffuse;
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
}`,Jy=`#define LAMBERT
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
}`,Zy=`#define LAMBERT
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
}`,Ky=`#define MATCAP
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
}`,$y=`#define MATCAP
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
}`,eM=`#define NORMAL
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
}`,tM=`#define NORMAL
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
}`,nM=`#define PHONG
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
}`,iM=`#define PHONG
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
}`,aM=`#define STANDARD
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
}`,rM=`#define STANDARD
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
}`,sM=`#define TOON
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
}`,oM=`#define TOON
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
}`,lM=`uniform float size;
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
}`,cM=`uniform vec3 diffuse;
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
}`,uM=`#include <common>
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
}`,fM=`uniform vec3 color;
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
}`,dM=`uniform float rotation;
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
}`,hM=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:OS,alphahash_pars_fragment:BS,alphamap_fragment:zS,alphamap_pars_fragment:PS,alphatest_fragment:FS,alphatest_pars_fragment:GS,aomap_fragment:HS,aomap_pars_fragment:VS,batching_pars_vertex:kS,batching_vertex:XS,begin_vertex:YS,beginnormal_vertex:WS,bsdfs:qS,iridescence_fragment:jS,bumpmap_pars_fragment:QS,clipping_planes_fragment:JS,clipping_planes_pars_fragment:ZS,clipping_planes_pars_vertex:KS,clipping_planes_vertex:$S,color_fragment:eb,color_pars_fragment:tb,color_pars_vertex:nb,color_vertex:ib,common:ab,cube_uv_reflection_fragment:rb,defaultnormal_vertex:sb,displacementmap_pars_vertex:ob,displacementmap_vertex:lb,emissivemap_fragment:cb,emissivemap_pars_fragment:ub,colorspace_fragment:fb,colorspace_pars_fragment:db,envmap_fragment:hb,envmap_common_pars_fragment:pb,envmap_pars_fragment:mb,envmap_pars_vertex:gb,envmap_physical_pars_fragment:Cb,envmap_vertex:xb,fog_vertex:_b,fog_pars_vertex:Ab,fog_fragment:vb,fog_pars_fragment:Sb,gradientmap_pars_fragment:bb,lightmap_pars_fragment:yb,lights_lambert_fragment:Mb,lights_lambert_pars_fragment:Eb,lights_pars_begin:Tb,lights_toon_fragment:Rb,lights_toon_pars_fragment:wb,lights_phong_fragment:Db,lights_phong_pars_fragment:Ub,lights_physical_fragment:Lb,lights_physical_pars_fragment:Nb,lights_fragment_begin:Ib,lights_fragment_maps:Ob,lights_fragment_end:Bb,logdepthbuf_fragment:zb,logdepthbuf_pars_fragment:Pb,logdepthbuf_pars_vertex:Fb,logdepthbuf_vertex:Gb,map_fragment:Hb,map_pars_fragment:Vb,map_particle_fragment:kb,map_particle_pars_fragment:Xb,metalnessmap_fragment:Yb,metalnessmap_pars_fragment:Wb,morphinstance_vertex:qb,morphcolor_vertex:jb,morphnormal_vertex:Qb,morphtarget_pars_vertex:Jb,morphtarget_vertex:Zb,normal_fragment_begin:Kb,normal_fragment_maps:$b,normal_pars_fragment:ey,normal_pars_vertex:ty,normal_vertex:ny,normalmap_pars_fragment:iy,clearcoat_normal_fragment_begin:ay,clearcoat_normal_fragment_maps:ry,clearcoat_pars_fragment:sy,iridescence_pars_fragment:oy,opaque_fragment:ly,packing:cy,premultiplied_alpha_fragment:uy,project_vertex:fy,dithering_fragment:dy,dithering_pars_fragment:hy,roughnessmap_fragment:py,roughnessmap_pars_fragment:my,shadowmap_pars_fragment:gy,shadowmap_pars_vertex:xy,shadowmap_vertex:_y,shadowmask_pars_fragment:Ay,skinbase_vertex:vy,skinning_pars_vertex:Sy,skinning_vertex:by,skinnormal_vertex:yy,specularmap_fragment:My,specularmap_pars_fragment:Ey,tonemapping_fragment:Ty,tonemapping_pars_fragment:Cy,transmission_fragment:Ry,transmission_pars_fragment:wy,uv_pars_fragment:Dy,uv_pars_vertex:Uy,uv_vertex:Ly,worldpos_vertex:Ny,background_vert:Iy,background_frag:Oy,backgroundCube_vert:By,backgroundCube_frag:zy,cube_vert:Py,cube_frag:Fy,depth_vert:Gy,depth_frag:Hy,distanceRGBA_vert:Vy,distanceRGBA_frag:ky,equirect_vert:Xy,equirect_frag:Yy,linedashed_vert:Wy,linedashed_frag:qy,meshbasic_vert:jy,meshbasic_frag:Qy,meshlambert_vert:Jy,meshlambert_frag:Zy,meshmatcap_vert:Ky,meshmatcap_frag:$y,meshnormal_vert:eM,meshnormal_frag:tM,meshphong_vert:nM,meshphong_frag:iM,meshphysical_vert:aM,meshphysical_frag:rM,meshtoon_vert:sM,meshtoon_frag:oM,points_vert:lM,points_frag:cM,shadow_vert:uM,shadow_frag:fM,sprite_vert:dM,sprite_frag:hM},Ne={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},wi={basic:{uniforms:Nn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Nn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Vt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Nn([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Nn([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Nn([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Vt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Nn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Nn([Ne.points,Ne.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Nn([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Nn([Ne.common,Ne.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Nn([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Nn([Ne.sprite,Ne.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Nn([Ne.common,Ne.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Nn([Ne.lights,Ne.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};wi.physical={uniforms:Nn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const Ac={r:0,b:0,g:0},Ar=new ha,pM=new mn;function mM(o,t,i,r,l,u,d){const h=new Vt(0);let m=u===!0?0:1,p,_,x=null,v=0,b=null;function T(U){let z=U.isScene===!0?U.background:null;return z&&z.isTexture&&(z=(U.backgroundBlurriness>0?i:t).get(z)),z}function C(U){let z=!1;const k=T(U);k===null?A(h,m):k&&k.isColor&&(A(k,1),z=!0);const N=o.xr.getEnvironmentBlendMode();N==="additive"?r.buffers.color.setClear(0,0,0,1,d):N==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||z)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function S(U,z){const k=T(z);k&&(k.isCubeTexture||k.mapping===Uc)?(_===void 0&&(_=new Ni(new Vo(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:Cs(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(N,P,ne){this.matrixWorld.copyPosition(ne.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),Ar.copy(z.backgroundRotation),Ar.x*=-1,Ar.y*=-1,Ar.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(Ar.y*=-1,Ar.z*=-1),_.material.uniforms.envMap.value=k,_.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(pM.makeRotationFromEuler(Ar)),_.material.toneMapped=Dt.getTransfer(k.colorSpace)!==Ht,(x!==k||v!==k.version||b!==o.toneMapping)&&(_.material.needsUpdate=!0,x=k,v=k.version,b=o.toneMapping),_.layers.enableAll(),U.unshift(_,_.geometry,_.material,0,0,null)):k&&k.isTexture&&(p===void 0&&(p=new Ni(new Rs(2,2),new yi({name:"BackgroundMaterial",uniforms:Cs(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:ja,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=k,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.toneMapped=Dt.getTransfer(k.colorSpace)!==Ht,k.matrixAutoUpdate===!0&&k.updateMatrix(),p.material.uniforms.uvTransform.value.copy(k.matrix),(x!==k||v!==k.version||b!==o.toneMapping)&&(p.material.needsUpdate=!0,x=k,v=k.version,b=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function A(U,z){U.getRGB(Ac,Ix(o)),r.buffers.color.setClear(Ac.r,Ac.g,Ac.b,z,d)}function B(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,z=1){h.set(U),m=z,A(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,A(h,m)},render:C,addToRenderList:S,dispose:B}}function gM(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=v(null);let u=l,d=!1;function h(R,V,ee,oe,ge){let fe=!1;const O=x(oe,ee,V);u!==O&&(u=O,p(u.object)),fe=b(R,oe,ee,ge),fe&&T(R,oe,ee,ge),ge!==null&&t.update(ge,o.ELEMENT_ARRAY_BUFFER),(fe||d)&&(d=!1,z(R,V,ee,oe),ge!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ge).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function _(R){return o.deleteVertexArray(R)}function x(R,V,ee){const oe=ee.wireframe===!0;let ge=r[R.id];ge===void 0&&(ge={},r[R.id]=ge);let fe=ge[V.id];fe===void 0&&(fe={},ge[V.id]=fe);let O=fe[oe];return O===void 0&&(O=v(m()),fe[oe]=O),O}function v(R){const V=[],ee=[],oe=[];for(let ge=0;ge<i;ge++)V[ge]=0,ee[ge]=0,oe[ge]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ee,attributeDivisors:oe,object:R,attributes:{},index:null}}function b(R,V,ee,oe){const ge=u.attributes,fe=V.attributes;let O=0;const j=ee.getAttributes();for(const q in j)if(j[q].location>=0){const Ae=ge[q];let L=fe[q];if(L===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(L=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(L=R.instanceColor)),Ae===void 0||Ae.attribute!==L||L&&Ae.data!==L.data)return!0;O++}return u.attributesNum!==O||u.index!==oe}function T(R,V,ee,oe){const ge={},fe=V.attributes;let O=0;const j=ee.getAttributes();for(const q in j)if(j[q].location>=0){let Ae=fe[q];Ae===void 0&&(q==="instanceMatrix"&&R.instanceMatrix&&(Ae=R.instanceMatrix),q==="instanceColor"&&R.instanceColor&&(Ae=R.instanceColor));const L={};L.attribute=Ae,Ae&&Ae.data&&(L.data=Ae.data),ge[q]=L,O++}u.attributes=ge,u.attributesNum=O,u.index=oe}function C(){const R=u.newAttributes;for(let V=0,ee=R.length;V<ee;V++)R[V]=0}function S(R){A(R,0)}function A(R,V){const ee=u.newAttributes,oe=u.enabledAttributes,ge=u.attributeDivisors;ee[R]=1,oe[R]===0&&(o.enableVertexAttribArray(R),oe[R]=1),ge[R]!==V&&(o.vertexAttribDivisor(R,V),ge[R]=V)}function B(){const R=u.newAttributes,V=u.enabledAttributes;for(let ee=0,oe=V.length;ee<oe;ee++)V[ee]!==R[ee]&&(o.disableVertexAttribArray(ee),V[ee]=0)}function U(R,V,ee,oe,ge,fe,O){O===!0?o.vertexAttribIPointer(R,V,ee,ge,fe):o.vertexAttribPointer(R,V,ee,oe,ge,fe)}function z(R,V,ee,oe){C();const ge=oe.attributes,fe=ee.getAttributes(),O=V.defaultAttributeValues;for(const j in fe){const q=fe[j];if(q.location>=0){let _e=ge[j];if(_e===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(_e=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(_e=R.instanceColor)),_e!==void 0){const Ae=_e.normalized,L=_e.itemSize,ae=t.get(_e);if(ae===void 0)continue;const be=ae.buffer,Ee=ae.type,Oe=ae.bytesPerElement,te=Ee===o.INT||Ee===o.UNSIGNED_INT||_e.gpuType===xh;if(_e.isInterleavedBufferAttribute){const le=_e.data,we=le.stride,Ge=_e.offset;if(le.isInstancedInterleavedBuffer){for(let Xe=0;Xe<q.locationSize;Xe++)A(q.location+Xe,le.meshPerAttribute);R.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Xe=0;Xe<q.locationSize;Xe++)S(q.location+Xe);o.bindBuffer(o.ARRAY_BUFFER,be);for(let Xe=0;Xe<q.locationSize;Xe++)U(q.location+Xe,L/q.locationSize,Ee,Ae,we*Oe,(Ge+L/q.locationSize*Xe)*Oe,te)}else{if(_e.isInstancedBufferAttribute){for(let le=0;le<q.locationSize;le++)A(q.location+le,_e.meshPerAttribute);R.isInstancedMesh!==!0&&oe._maxInstanceCount===void 0&&(oe._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let le=0;le<q.locationSize;le++)S(q.location+le);o.bindBuffer(o.ARRAY_BUFFER,be);for(let le=0;le<q.locationSize;le++)U(q.location+le,L/q.locationSize,Ee,Ae,L*Oe,L/q.locationSize*le*Oe,te)}}else if(O!==void 0){const Ae=O[j];if(Ae!==void 0)switch(Ae.length){case 2:o.vertexAttrib2fv(q.location,Ae);break;case 3:o.vertexAttrib3fv(q.location,Ae);break;case 4:o.vertexAttrib4fv(q.location,Ae);break;default:o.vertexAttrib1fv(q.location,Ae)}}}}B()}function k(){ne();for(const R in r){const V=r[R];for(const ee in V){const oe=V[ee];for(const ge in oe)_(oe[ge].object),delete oe[ge];delete V[ee]}delete r[R]}}function N(R){if(r[R.id]===void 0)return;const V=r[R.id];for(const ee in V){const oe=V[ee];for(const ge in oe)_(oe[ge].object),delete oe[ge];delete V[ee]}delete r[R.id]}function P(R){for(const V in r){const ee=r[V];if(ee[R.id]===void 0)continue;const oe=ee[R.id];for(const ge in oe)_(oe[ge].object),delete oe[ge];delete ee[R.id]}}function ne(){w(),d=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:ne,resetDefaultState:w,dispose:k,releaseStatesOfGeometry:N,releaseStatesOfProgram:P,initAttributes:C,enableAttribute:S,disableUnusedAttributes:B}}function xM(o,t,i){let r;function l(p){r=p}function u(p,_){o.drawArrays(r,p,_),i.update(_,r,1)}function d(p,_,x){x!==0&&(o.drawArraysInstanced(r,p,_,x),i.update(_,r,x))}function h(p,_,x){if(x===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,x);let b=0;for(let T=0;T<x;T++)b+=_[T];i.update(b,r,1)}function m(p,_,x,v){if(x===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let T=0;T<p.length;T++)d(p[T],_[T],v[T]);else{b.multiDrawArraysInstancedWEBGL(r,p,0,_,0,v,0,x);let T=0;for(let C=0;C<x;C++)T+=_[C]*v[C];i.update(T,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function _M(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(P){return!(P!==bi&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(P){const ne=P===ws&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==da&&r.convert(P)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==ca&&!ne)}function m(P){if(P==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(ot("WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const x=i.logarithmicDepthBuffer===!0,v=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),b=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),S=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),A=o.getParameter(o.MAX_VERTEX_ATTRIBS),B=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),z=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),k=T>0,N=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:v,maxTextures:b,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:S,maxAttributes:A,maxVertexUniforms:B,maxVaryings:U,maxFragmentUniforms:z,vertexTextures:k,maxSamples:N}}function AM(o){const t=this;let i=null,r=0,l=!1,u=!1;const d=new Sr,h=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,v){const b=x.length!==0||v||r!==0||l;return l=v,r=x.length,b},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(x,v){i=_(x,v,0)},this.setState=function(x,v,b){const T=x.clippingPlanes,C=x.clipIntersection,S=x.clipShadows,A=o.get(x);if(!l||T===null||T.length===0||u&&!S)u?_(null):p();else{const B=u?0:r,U=B*4;let z=A.clippingState||null;m.value=z,z=_(T,v,U,b);for(let k=0;k!==U;++k)z[k]=i[k];A.clippingState=z,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(x,v,b,T){const C=x!==null?x.length:0;let S=null;if(C!==0){if(S=m.value,T!==!0||S===null){const A=b+C*4,B=v.matrixWorldInverse;h.getNormalMatrix(B),(S===null||S.length<A)&&(S=new Float32Array(A));for(let U=0,z=b;U!==C;++U,z+=4)d.copy(x[U]).applyMatrix4(B,h),d.normal.toArray(S,z),S[z+3]=d.constant}m.value=S,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,S}}function vM(o){let t=new WeakMap;function i(d,h){return h===Id?d.mapping=Ms:h===Od&&(d.mapping=Es),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Id||h===Od)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new yS(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const Wa=4,kg=[.125,.215,.35,.446,.526,.582],yr=20,SM=256,Lo=new Gx,Xg=new Vt;let Ad=null,vd=0,Sd=0,bd=!1;const bM=new ce;class Yg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=bM}=u;Ad=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),Sd=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=jg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Ad,vd,Sd),this._renderer.xr.enabled=bd,t.scissorTest=!1,As(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Ms||t.mapping===Es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ad=this._renderer.getRenderTarget(),vd=this._renderer.getActiveCubeFace(),Sd=this._renderer.getActiveMipmapLevel(),bd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:di,minFilter:di,generateMipmaps:!1,type:ws,format:bi,colorSpace:Ts,depthBuffer:!1},l=Wg(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Wg(t,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=yM(u)),this._blurMaterial=EM(u,t,i)}return l}_compileMaterial(t){const i=new Ni(new Ja,t);this._renderer.compile(i,Lo)}_sceneToCubeUV(t,i,r,l,u){const m=new vi(90,1,i,r),p=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],x=this._renderer,v=x.autoClear,b=x.toneMapping;x.getClearColor(Xg),x.toneMapping=qa,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(l),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ni(new Vo,new Ux({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,S=C.material;let A=!1;const B=t.background;B?B.isColor&&(S.color.copy(B),t.background=null,A=!0):(S.color.copy(Xg),A=!0);for(let U=0;U<6;U++){const z=U%3;z===0?(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+_[U],u.y,u.z)):z===1?(m.up.set(0,0,p[U]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+_[U],u.z)):(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+_[U]));const k=this._cubeSize;As(l,z*k,U>2?k:0,k,k),x.setRenderTarget(l),A&&x.render(C,m),x.render(t,m)}x.toneMapping=b,x.autoClear=v,t.background=B}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===Ms||t.mapping===Es;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=jg()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qg());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=t;const m=this._cubeSize;As(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Lo)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,u=this._pingPongRenderTarget;if(this._ggxMaterial===null){const B=3*Math.max(this._cubeSize,16),U=4*this._cubeSize;this._ggxMaterial=MM(this._lodMax,B,U)}const d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,p=r/(this._lodMeshes.length-1),_=i/(this._lodMeshes.length-1),x=Math.sqrt(p*p-_*_),v=.05+p*.95,b=x*v,{_lodMax:T}=this,C=this._sizeLods[r],S=3*C*(r>T-Wa?r-T+Wa:0),A=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=b,m.mipInt.value=T-i,As(u,S,A,3*C,2*C),l.setRenderTarget(u),l.render(h,Lo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=T-r,As(t,S,A,3*C,2*C),l.setRenderTarget(t),l.render(h,Lo)}_blur(t,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",u),this._halfBlur(d,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&an("blur direction must be either latitudinal or longitudinal!");const _=3,x=this._lodMeshes[l];x.material=p;const v=p.uniforms,b=this._sizeLods[r]-1,T=isFinite(u)?Math.PI/(2*b):2*Math.PI/(2*yr-1),C=u/T,S=isFinite(u)?1+Math.floor(_*C):yr;S>yr&&ot(`sigmaRadians, ${u}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${yr}`);const A=[];let B=0;for(let P=0;P<yr;++P){const ne=P/C,w=Math.exp(-ne*ne/2);A.push(w),P===0?B+=w:P<S&&(B+=2*w)}for(let P=0;P<A.length;P++)A[P]=A[P]/B;v.envMap.value=t.texture,v.samples.value=S,v.weights.value=A,v.latitudinal.value=d==="latitudinal",h&&(v.poleAxis.value=h);const{_lodMax:U}=this;v.dTheta.value=T,v.mipInt.value=U-r;const z=this._sizeLods[l],k=3*z*(l>U-Wa?l-U+Wa:0),N=4*(this._cubeSize-z);As(i,k,N,3*z,2*z),m.setRenderTarget(i),m.render(x,Lo)}}function yM(o){const t=[],i=[],r=[];let l=o;const u=o-Wa+1+kg.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>o-Wa?m=kg[d-o+Wa-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),_=-p,x=1+p,v=[_,_,x,_,x,x,_,_,x,x,_,x],b=6,T=6,C=3,S=2,A=1,B=new Float32Array(C*T*b),U=new Float32Array(S*T*b),z=new Float32Array(A*T*b);for(let N=0;N<b;N++){const P=N%3*2/3-1,ne=N>2?0:-1,w=[P,ne,0,P+2/3,ne,0,P+2/3,ne+1,0,P,ne,0,P+2/3,ne+1,0,P,ne+1,0];B.set(w,C*T*N),U.set(v,S*T*N);const R=[N,N,N,N,N,N];z.set(R,A*T*N)}const k=new Ja;k.setAttribute("position",new Li(B,C)),k.setAttribute("uv",new Li(U,S)),k.setAttribute("faceIndex",new Li(z,A)),r.push(new Ni(k,null)),l>Wa&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function Wg(o,t,i){const r=new Qa(o,t,i);return r.texture.mapping=Uc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function As(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function MM(o,t,i){return new yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:SM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:ua,depthTest:!1,depthWrite:!1})}function EM(o,t,i){const r=new Float32Array(yr),l=new ce(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:ua,depthTest:!1,depthWrite:!1})}function qg(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Nc(),fragmentShader:`

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
		`,blending:ua,depthTest:!1,depthWrite:!1})}function jg(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Nc(),fragmentShader:`

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
	`}function TM(o){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Id||m===Od,_=m===Ms||m===Es;if(p||_){let x=t.get(h);const v=x!==void 0?x.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==v)return i===null&&(i=new Yg(o)),x=p?i.fromEquirectangular(h,x):i.fromCubemap(h,x),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),x.texture;if(x!==void 0)return x.texture;{const b=h.image;return p&&b&&b.height>0||_&&b&&l(b)?(i===null&&(i=new Yg(o)),x=p?i.fromEquirectangular(h):i.fromCubemap(h),x.texture.pmremVersion=h.pmremVersion,t.set(h,x),h.addEventListener("dispose",u),x.texture):null}}}return h}function l(h){let m=0;const p=6;for(let _=0;_<p;_++)h[_]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function CM(o){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=o.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Po("WebGLRenderer: "+r+" extension not supported."),l}}}function RM(o,t,i,r){const l={},u=new WeakMap;function d(x){const v=x.target;v.index!==null&&t.remove(v.index);for(const T in v.attributes)t.remove(v.attributes[T]);v.removeEventListener("dispose",d),delete l[v.id];const b=u.get(v);b&&(t.remove(b),u.delete(v)),r.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,i.memory.geometries--}function h(x,v){return l[v.id]===!0||(v.addEventListener("dispose",d),l[v.id]=!0,i.memory.geometries++),v}function m(x){const v=x.attributes;for(const b in v)t.update(v[b],o.ARRAY_BUFFER)}function p(x){const v=[],b=x.index,T=x.attributes.position;let C=0;if(b!==null){const B=b.array;C=b.version;for(let U=0,z=B.length;U<z;U+=3){const k=B[U+0],N=B[U+1],P=B[U+2];v.push(k,N,N,P,P,k)}}else if(T!==void 0){const B=T.array;C=T.version;for(let U=0,z=B.length/3-1;U<z;U+=3){const k=U+0,N=U+1,P=U+2;v.push(k,N,N,P,P,k)}}else return;const S=new(Cx(v)?Nx:Lx)(v,1);S.version=C;const A=u.get(x);A&&t.remove(A),u.set(x,S)}function _(x){const v=u.get(x);if(v){const b=x.index;b!==null&&v.version<b.version&&p(x)}else p(x);return u.get(x)}return{get:h,update:m,getWireframeAttribute:_}}function wM(o,t,i){let r;function l(v){r=v}let u,d;function h(v){u=v.type,d=v.bytesPerElement}function m(v,b){o.drawElements(r,b,u,v*d),i.update(b,r,1)}function p(v,b,T){T!==0&&(o.drawElementsInstanced(r,b,u,v*d,T),i.update(b,r,T))}function _(v,b,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,b,0,u,v,0,T);let S=0;for(let A=0;A<T;A++)S+=b[A];i.update(S,r,1)}function x(v,b,T,C){if(T===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let A=0;A<v.length;A++)p(v[A]/d,b[A],C[A]);else{S.multiDrawElementsInstancedWEBGL(r,b,0,u,v,0,C,0,T);let A=0;for(let B=0;B<T;B++)A+=b[B]*C[B];i.update(A,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=x}function DM(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:an("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function UM(o,t,i){const r=new WeakMap,l=new rn;function u(d,h,m){const p=d.morphTargetInfluences,_=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=_!==void 0?_.length:0;let v=r.get(h);if(v===void 0||v.count!==x){let R=function(){ne.dispose(),r.delete(h),h.removeEventListener("dispose",R)};var b=R;v!==void 0&&v.texture.dispose();const T=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,S=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],B=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let z=0;T===!0&&(z=1),C===!0&&(z=2),S===!0&&(z=3);let k=h.attributes.position.count*z,N=1;k>t.maxTextureSize&&(N=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const P=new Float32Array(k*N*4*x),ne=new Rx(P,k,N,x);ne.type=ca,ne.needsUpdate=!0;const w=z*4;for(let V=0;V<x;V++){const ee=A[V],oe=B[V],ge=U[V],fe=k*N*4*V;for(let O=0;O<ee.count;O++){const j=O*w;T===!0&&(l.fromBufferAttribute(ee,O),P[fe+j+0]=l.x,P[fe+j+1]=l.y,P[fe+j+2]=l.z,P[fe+j+3]=0),C===!0&&(l.fromBufferAttribute(oe,O),P[fe+j+4]=l.x,P[fe+j+5]=l.y,P[fe+j+6]=l.z,P[fe+j+7]=0),S===!0&&(l.fromBufferAttribute(ge,O),P[fe+j+8]=l.x,P[fe+j+9]=l.y,P[fe+j+10]=l.z,P[fe+j+11]=ge.itemSize===4?l.w:1)}}v={count:x,texture:ne,size:new Ut(k,N)},r.set(h,v),h.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let T=0;for(let S=0;S<p.length;S++)T+=p[S];const C=h.morphTargetsRelative?1:1-T;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",v.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",v.size)}return{update:u}}function LM(o,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,_=m.geometry,x=t.get(m,_);if(l.get(x)!==p&&(t.update(x),l.set(x,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const v=m.skeleton;l.get(v)!==p&&(v.update(),l.set(v,p))}return x}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const Vx=new In,Qg=new Px(1,1),kx=new Rx,Xx=new rS,Yx=new Bx,Jg=[],Zg=[],Kg=new Float32Array(16),$g=new Float32Array(9),ex=new Float32Array(4);function Us(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=Jg[l];if(u===void 0&&(u=new Float32Array(l),Jg[l]=u),t!==0){r.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(u,h)}return u}function gn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function xn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Ic(o,t){let i=Zg[t];i===void 0&&(i=new Int32Array(t),Zg[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function NM(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function IM(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2fv(this.addr,t),xn(i,t)}}function OM(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(gn(i,t))return;o.uniform3fv(this.addr,t),xn(i,t)}}function BM(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4fv(this.addr,t),xn(i,t)}}function zM(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),xn(i,t)}else{if(gn(i,r))return;ex.set(r),o.uniformMatrix2fv(this.addr,!1,ex),xn(i,r)}}function PM(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),xn(i,t)}else{if(gn(i,r))return;$g.set(r),o.uniformMatrix3fv(this.addr,!1,$g),xn(i,r)}}function FM(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(gn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),xn(i,t)}else{if(gn(i,r))return;Kg.set(r),o.uniformMatrix4fv(this.addr,!1,Kg),xn(i,r)}}function GM(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function HM(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2iv(this.addr,t),xn(i,t)}}function VM(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;o.uniform3iv(this.addr,t),xn(i,t)}}function kM(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4iv(this.addr,t),xn(i,t)}}function XM(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function YM(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(gn(i,t))return;o.uniform2uiv(this.addr,t),xn(i,t)}}function WM(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(gn(i,t))return;o.uniform3uiv(this.addr,t),xn(i,t)}}function qM(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(gn(i,t))return;o.uniform4uiv(this.addr,t),xn(i,t)}}function jM(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Qg.compareFunction=Tx,u=Qg):u=Vx,i.setTexture2D(t||u,l)}function QM(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Xx,l)}function JM(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Yx,l)}function ZM(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||kx,l)}function KM(o){switch(o){case 5126:return NM;case 35664:return IM;case 35665:return OM;case 35666:return BM;case 35674:return zM;case 35675:return PM;case 35676:return FM;case 5124:case 35670:return GM;case 35667:case 35671:return HM;case 35668:case 35672:return VM;case 35669:case 35673:return kM;case 5125:return XM;case 36294:return YM;case 36295:return WM;case 36296:return qM;case 35678:case 36198:case 36298:case 36306:case 35682:return jM;case 35679:case 36299:case 36307:return QM;case 35680:case 36300:case 36308:case 36293:return JM;case 36289:case 36303:case 36311:case 36292:return ZM}}function $M(o,t){o.uniform1fv(this.addr,t)}function e1(o,t){const i=Us(t,this.size,2);o.uniform2fv(this.addr,i)}function t1(o,t){const i=Us(t,this.size,3);o.uniform3fv(this.addr,i)}function n1(o,t){const i=Us(t,this.size,4);o.uniform4fv(this.addr,i)}function i1(o,t){const i=Us(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function a1(o,t){const i=Us(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function r1(o,t){const i=Us(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function s1(o,t){o.uniform1iv(this.addr,t)}function o1(o,t){o.uniform2iv(this.addr,t)}function l1(o,t){o.uniform3iv(this.addr,t)}function c1(o,t){o.uniform4iv(this.addr,t)}function u1(o,t){o.uniform1uiv(this.addr,t)}function f1(o,t){o.uniform2uiv(this.addr,t)}function d1(o,t){o.uniform3uiv(this.addr,t)}function h1(o,t){o.uniform4uiv(this.addr,t)}function p1(o,t,i){const r=this.cache,l=t.length,u=Ic(i,l);gn(r,u)||(o.uniform1iv(this.addr,u),xn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||Vx,u[d])}function m1(o,t,i){const r=this.cache,l=t.length,u=Ic(i,l);gn(r,u)||(o.uniform1iv(this.addr,u),xn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||Xx,u[d])}function g1(o,t,i){const r=this.cache,l=t.length,u=Ic(i,l);gn(r,u)||(o.uniform1iv(this.addr,u),xn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||Yx,u[d])}function x1(o,t,i){const r=this.cache,l=t.length,u=Ic(i,l);gn(r,u)||(o.uniform1iv(this.addr,u),xn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||kx,u[d])}function _1(o){switch(o){case 5126:return $M;case 35664:return e1;case 35665:return t1;case 35666:return n1;case 35674:return i1;case 35675:return a1;case 35676:return r1;case 5124:case 35670:return s1;case 35667:case 35671:return o1;case 35668:case 35672:return l1;case 35669:case 35673:return c1;case 5125:return u1;case 36294:return f1;case 36295:return d1;case 36296:return h1;case 35678:case 36198:case 36298:case 36306:case 35682:return p1;case 35679:case 36299:case 36307:return m1;case 35680:case 36300:case 36308:case 36293:return g1;case 36289:case 36303:case 36311:case 36292:return x1}}class A1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=KM(i.type)}}class v1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=_1(i.type)}}class S1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],r)}}}const yd=/(\w+)(\])?(\[|\.)?/g;function tx(o,t){o.seq.push(t),o.map[t.id]=t}function b1(o,t,i){const r=o.name,l=r.length;for(yd.lastIndex=0;;){const u=yd.exec(r),d=yd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){tx(i,p===void 0?new A1(h,o,t):new v1(h,o,t));break}else{let x=i.map[h];x===void 0&&(x=new S1(h),tx(i,x)),i=x}}}class Tc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),d=t.getUniformLocation(i,u.name);b1(u,d,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function nx(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const y1=37297;let M1=0;function E1(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const ix=new ft;function T1(o){Dt._getMatrix(ix,Dt.workingColorSpace,o);const t=`mat3( ${ix.elements.map(i=>i.toFixed(4))} )`;switch(Dt.getTransfer(o)){case Rc:return[t,"LinearTransferOETF"];case Ht:return[t,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function ax(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+E1(o.getShaderSource(t),h)}else return u}function C1(o,t){const i=T1(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function R1(o,t){let i;switch(t){case Lv:i="Linear";break;case Nv:i="Reinhard";break;case Iv:i="Cineon";break;case Ov:i="ACESFilmic";break;case zv:i="AgX";break;case Pv:i="Neutral";break;case Bv:i="Custom";break;default:ot("WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const vc=new ce;function w1(){Dt.getLuminanceCoefficients(vc);const o=vc.x.toFixed(4),t=vc.y.toFixed(4),i=vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function D1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(No).join(`
`)}function U1(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function L1(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function No(o){return o!==""}function rx(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function sx(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const N1=/^[ \t]*#include +<([\w\d./]+)>/gm;function hh(o){return o.replace(N1,O1)}const I1=new Map;function O1(o,t){let i=pt[t];if(i===void 0){const r=I1.get(t);if(r!==void 0)i=pt[r],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return hh(i)}const B1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ox(o){return o.replace(B1,z1)}function z1(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function lx(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function P1(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===gx?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===fv?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===sa&&(t="SHADOWMAP_TYPE_VSM"),t}function F1(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ms:case Es:t="ENVMAP_TYPE_CUBE";break;case Uc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function G1(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Es:t="ENVMAP_MODE_REFRACTION";break}return t}function H1(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case xx:t="ENVMAP_BLENDING_MULTIPLY";break;case Dv:t="ENVMAP_BLENDING_MIX";break;case Uv:t="ENVMAP_BLENDING_ADD";break}return t}function V1(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function k1(o,t,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=P1(i),p=F1(i),_=G1(i),x=H1(i),v=V1(i),b=D1(i),T=U1(u),C=l.createProgram();let S,A,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(No).join(`
`),S.length>0&&(S+=`
`),A=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(No).join(`
`),A.length>0&&(A+=`
`)):(S=[lx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(No).join(`
`),A=[lx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+x:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qa?"#define TONE_MAPPING":"",i.toneMapping!==qa?pt.tonemapping_pars_fragment:"",i.toneMapping!==qa?R1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,C1("linearToOutputTexel",i.outputColorSpace),w1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(No).join(`
`)),d=hh(d),d=rx(d,i),d=sx(d,i),h=hh(h),h=rx(h,i),h=sx(h,i),d=ox(d),h=ox(h),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,S=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,A=["#define varying in",i.glslVersion===bg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===bg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+A);const U=B+S+d,z=B+A+h,k=nx(l,l.VERTEX_SHADER,U),N=nx(l,l.FRAGMENT_SHADER,z);l.attachShader(C,k),l.attachShader(C,N),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function P(V){if(o.debug.checkShaderErrors){const ee=l.getProgramInfoLog(C)||"",oe=l.getShaderInfoLog(k)||"",ge=l.getShaderInfoLog(N)||"",fe=ee.trim(),O=oe.trim(),j=ge.trim();let q=!0,_e=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(q=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,k,N);else{const Ae=ax(l,k,"vertex"),L=ax(l,N,"fragment");an("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+fe+`
`+Ae+`
`+L)}else fe!==""?ot("WebGLProgram: Program Info Log:",fe):(O===""||j==="")&&(_e=!1);_e&&(V.diagnostics={runnable:q,programLog:fe,vertexShader:{log:O,prefix:S},fragmentShader:{log:j,prefix:A}})}l.deleteShader(k),l.deleteShader(N),ne=new Tc(l,C),w=L1(l,C)}let ne;this.getUniforms=function(){return ne===void 0&&P(this),ne};let w;this.getAttributes=function(){return w===void 0&&P(this),w};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,y1)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=M1++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=k,this.fragmentShader=N,this}let X1=0;class Y1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new W1(t),i.set(t,r)),r}}class W1{constructor(t){this.id=X1++,this.code=t,this.usedTimes=0}}function q1(o,t,i,r,l,u,d){const h=new wx,m=new Y1,p=new Set,_=[],x=l.logarithmicDepthBuffer,v=l.vertexTextures;let b=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return p.add(w),w===0?"uv":`uv${w}`}function S(w,R,V,ee,oe){const ge=ee.fog,fe=oe.geometry,O=w.isMeshStandardMaterial?ee.environment:null,j=(w.isMeshStandardMaterial?i:t).get(w.envMap||O),q=j&&j.mapping===Uc?j.image.height:null,_e=T[w.type];w.precision!==null&&(b=l.getMaxPrecision(w.precision),b!==w.precision&&ot("WebGLProgram.getParameters:",w.precision,"not supported, using",b,"instead."));const Ae=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,L=Ae!==void 0?Ae.length:0;let ae=0;fe.morphAttributes.position!==void 0&&(ae=1),fe.morphAttributes.normal!==void 0&&(ae=2),fe.morphAttributes.color!==void 0&&(ae=3);let be,Ee,Oe,te;if(_e){const Tt=wi[_e];be=Tt.vertexShader,Ee=Tt.fragmentShader}else be=w.vertexShader,Ee=w.fragmentShader,m.update(w),Oe=m.getVertexShaderID(w),te=m.getFragmentShaderID(w);const le=o.getRenderTarget(),we=o.state.buffers.depth.getReversed(),Ge=oe.isInstancedMesh===!0,Xe=oe.isBatchedMesh===!0,lt=!!w.map,en=!!w.matcap,dt=!!j,Et=!!w.aoMap,F=!!w.lightMap,ht=!!w.bumpMap,mt=!!w.normalMap,It=!!w.displacementMap,He=!!w.emissiveMap,kt=!!w.metalnessMap,je=!!w.roughnessMap,at=w.anisotropy>0,D=w.clearcoat>0,y=w.dispersion>0,J=w.iridescence>0,pe=w.sheen>0,ve=w.transmission>0,se=at&&!!w.anisotropyMap,We=D&&!!w.clearcoatMap,Le=D&&!!w.clearcoatNormalMap,Ze=D&&!!w.clearcoatRoughnessMap,Ye=J&&!!w.iridescenceMap,Se=J&&!!w.iridescenceThicknessMap,Me=pe&&!!w.sheenColorMap,qe=pe&&!!w.sheenRoughnessMap,Ve=!!w.specularMap,Ie=!!w.specularColorMap,nt=!!w.specularIntensityMap,G=ve&&!!w.transmissionMap,De=ve&&!!w.thicknessMap,Ce=!!w.gradientMap,Re=!!w.alphaMap,ye=w.alphaTest>0,xe=!!w.alphaHash,ze=!!w.extensions;let it=qa;w.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(it=o.toneMapping);const zt={shaderID:_e,shaderType:w.type,shaderName:w.name,vertexShader:be,fragmentShader:Ee,defines:w.defines,customVertexShaderID:Oe,customFragmentShaderID:te,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:b,batching:Xe,batchingColor:Xe&&oe._colorsTexture!==null,instancing:Ge,instancingColor:Ge&&oe.instanceColor!==null,instancingMorph:Ge&&oe.morphTexture!==null,supportsVertexTextures:v,outputColorSpace:le===null?o.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Ts,alphaToCoverage:!!w.alphaToCoverage,map:lt,matcap:en,envMap:dt,envMapMode:dt&&j.mapping,envMapCubeUVHeight:q,aoMap:Et,lightMap:F,bumpMap:ht,normalMap:mt,displacementMap:v&&It,emissiveMap:He,normalMapObjectSpace:mt&&w.normalMapType===kv,normalMapTangentSpace:mt&&w.normalMapType===Vv,metalnessMap:kt,roughnessMap:je,anisotropy:at,anisotropyMap:se,clearcoat:D,clearcoatMap:We,clearcoatNormalMap:Le,clearcoatRoughnessMap:Ze,dispersion:y,iridescence:J,iridescenceMap:Ye,iridescenceThicknessMap:Se,sheen:pe,sheenColorMap:Me,sheenRoughnessMap:qe,specularMap:Ve,specularColorMap:Ie,specularIntensityMap:nt,transmission:ve,transmissionMap:G,thicknessMap:De,gradientMap:Ce,opaque:w.transparent===!1&&w.blending===Ss&&w.alphaToCoverage===!1,alphaMap:Re,alphaTest:ye,alphaHash:xe,combine:w.combine,mapUv:lt&&C(w.map.channel),aoMapUv:Et&&C(w.aoMap.channel),lightMapUv:F&&C(w.lightMap.channel),bumpMapUv:ht&&C(w.bumpMap.channel),normalMapUv:mt&&C(w.normalMap.channel),displacementMapUv:It&&C(w.displacementMap.channel),emissiveMapUv:He&&C(w.emissiveMap.channel),metalnessMapUv:kt&&C(w.metalnessMap.channel),roughnessMapUv:je&&C(w.roughnessMap.channel),anisotropyMapUv:se&&C(w.anisotropyMap.channel),clearcoatMapUv:We&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:Le&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ze&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ye&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:qe&&C(w.sheenRoughnessMap.channel),specularMapUv:Ve&&C(w.specularMap.channel),specularColorMapUv:Ie&&C(w.specularColorMap.channel),specularIntensityMapUv:nt&&C(w.specularIntensityMap.channel),transmissionMapUv:G&&C(w.transmissionMap.channel),thicknessMapUv:De&&C(w.thicknessMap.channel),alphaMapUv:Re&&C(w.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(mt||at),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:oe.isPoints===!0&&!!fe.attributes.uv&&(lt||Re),fog:!!ge,useFog:w.fog===!0,fogExp2:!!ge&&ge.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:we,skinning:oe.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:ae,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:it,decodeVideoTexture:lt&&w.map.isVideoTexture===!0&&Dt.getTransfer(w.map.colorSpace)===Ht,decodeVideoTextureEmissive:He&&w.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(w.emissiveMap.colorSpace)===Ht,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===oa,flipSided:w.side===Vn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:ze&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ze&&w.extensions.multiDraw===!0||Xe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return zt.vertexUv1s=p.has(1),zt.vertexUv2s=p.has(2),zt.vertexUv3s=p.has(3),p.clear(),zt}function A(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)R.push(V),R.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(B(R,w),U(R,w),R.push(o.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function B(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function U(w,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),R.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reversedDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),w.push(h.mask)}function z(w){const R=T[w.type];let V;if(R){const ee=wi[R];V=AS.clone(ee.uniforms)}else V=w.uniforms;return V}function k(w,R){let V;for(let ee=0,oe=_.length;ee<oe;ee++){const ge=_[ee];if(ge.cacheKey===R){V=ge,++V.usedTimes;break}}return V===void 0&&(V=new k1(o,R,w,u),_.push(V)),V}function N(w){if(--w.usedTimes===0){const R=_.indexOf(w);_[R]=_[_.length-1],_.pop(),w.destroy()}}function P(w){m.remove(w)}function ne(){m.dispose()}return{getParameters:S,getProgramCacheKey:A,getUniforms:z,acquireProgram:k,releaseProgram:N,releaseShaderCache:P,programs:_,dispose:ne}}function j1(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function Q1(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function cx(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function ux(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function d(x,v,b,T,C,S){let A=o[t];return A===void 0?(A={id:x.id,object:x,geometry:v,material:b,groupOrder:T,renderOrder:x.renderOrder,z:C,group:S},o[t]=A):(A.id=x.id,A.object=x,A.geometry=v,A.material=b,A.groupOrder=T,A.renderOrder=x.renderOrder,A.z=C,A.group=S),t++,A}function h(x,v,b,T,C,S){const A=d(x,v,b,T,C,S);b.transmission>0?r.push(A):b.transparent===!0?l.push(A):i.push(A)}function m(x,v,b,T,C,S){const A=d(x,v,b,T,C,S);b.transmission>0?r.unshift(A):b.transparent===!0?l.unshift(A):i.unshift(A)}function p(x,v){i.length>1&&i.sort(x||Q1),r.length>1&&r.sort(v||cx),l.length>1&&l.sort(v||cx)}function _(){for(let x=t,v=o.length;x<v;x++){const b=o[x];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:_,sort:p}}function J1(){let o=new WeakMap;function t(r,l){const u=o.get(r);let d;return u===void 0?(d=new ux,o.set(r,[d])):l>=u.length?(d=new ux,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function Z1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new ce,color:new Vt};break;case"SpotLight":i={position:new ce,direction:new ce,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ce,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ce,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":i={color:new Vt,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return o[t.id]=i,i}}}function K1(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let $1=0;function eE(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function tE(o){const t=new Z1,i=K1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ce);const l=new ce,u=new mn,d=new mn;function h(p){let _=0,x=0,v=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let b=0,T=0,C=0,S=0,A=0,B=0,U=0,z=0,k=0,N=0,P=0;p.sort(eE);for(let w=0,R=p.length;w<R;w++){const V=p[w],ee=V.color,oe=V.intensity,ge=V.distance,fe=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)_+=ee.r*oe,x+=ee.g*oe,v+=ee.b*oe;else if(V.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(V.sh.coefficients[O],oe);P++}else if(V.isDirectionalLight){const O=t.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const j=V.shadow,q=i.get(V);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,r.directionalShadow[b]=q,r.directionalShadowMap[b]=fe,r.directionalShadowMatrix[b]=V.shadow.matrix,B++}r.directional[b]=O,b++}else if(V.isSpotLight){const O=t.get(V);O.position.setFromMatrixPosition(V.matrixWorld),O.color.copy(ee).multiplyScalar(oe),O.distance=ge,O.coneCos=Math.cos(V.angle),O.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),O.decay=V.decay,r.spot[C]=O;const j=V.shadow;if(V.map&&(r.spotLightMap[k]=V.map,k++,j.updateMatrices(V),V.castShadow&&N++),r.spotLightMatrix[C]=j.matrix,V.castShadow){const q=i.get(V);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,r.spotShadow[C]=q,r.spotShadowMap[C]=fe,z++}C++}else if(V.isRectAreaLight){const O=t.get(V);O.color.copy(ee).multiplyScalar(oe),O.halfWidth.set(V.width*.5,0,0),O.halfHeight.set(0,V.height*.5,0),r.rectArea[S]=O,S++}else if(V.isPointLight){const O=t.get(V);if(O.color.copy(V.color).multiplyScalar(V.intensity),O.distance=V.distance,O.decay=V.decay,V.castShadow){const j=V.shadow,q=i.get(V);q.shadowIntensity=j.intensity,q.shadowBias=j.bias,q.shadowNormalBias=j.normalBias,q.shadowRadius=j.radius,q.shadowMapSize=j.mapSize,q.shadowCameraNear=j.camera.near,q.shadowCameraFar=j.camera.far,r.pointShadow[T]=q,r.pointShadowMap[T]=fe,r.pointShadowMatrix[T]=V.shadow.matrix,U++}r.point[T]=O,T++}else if(V.isHemisphereLight){const O=t.get(V);O.skyColor.copy(V.color).multiplyScalar(oe),O.groundColor.copy(V.groundColor).multiplyScalar(oe),r.hemi[A]=O,A++}}S>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ne.LTC_FLOAT_1,r.rectAreaLTC2=Ne.LTC_FLOAT_2):(r.rectAreaLTC1=Ne.LTC_HALF_1,r.rectAreaLTC2=Ne.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=x,r.ambient[2]=v;const ne=r.hash;(ne.directionalLength!==b||ne.pointLength!==T||ne.spotLength!==C||ne.rectAreaLength!==S||ne.hemiLength!==A||ne.numDirectionalShadows!==B||ne.numPointShadows!==U||ne.numSpotShadows!==z||ne.numSpotMaps!==k||ne.numLightProbes!==P)&&(r.directional.length=b,r.spot.length=C,r.rectArea.length=S,r.point.length=T,r.hemi.length=A,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=z,r.spotShadowMap.length=z,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=z+k-N,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=P,ne.directionalLength=b,ne.pointLength=T,ne.spotLength=C,ne.rectAreaLength=S,ne.hemiLength=A,ne.numDirectionalShadows=B,ne.numPointShadows=U,ne.numSpotShadows=z,ne.numSpotMaps=k,ne.numLightProbes=P,r.version=$1++)}function m(p,_){let x=0,v=0,b=0,T=0,C=0;const S=_.matrixWorldInverse;for(let A=0,B=p.length;A<B;A++){const U=p[A];if(U.isDirectionalLight){const z=r.directional[x];z.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(S),x++}else if(U.isSpotLight){const z=r.spot[b];z.position.setFromMatrixPosition(U.matrixWorld),z.position.applyMatrix4(S),z.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),z.direction.sub(l),z.direction.transformDirection(S),b++}else if(U.isRectAreaLight){const z=r.rectArea[T];z.position.setFromMatrixPosition(U.matrixWorld),z.position.applyMatrix4(S),d.identity(),u.copy(U.matrixWorld),u.premultiply(S),d.extractRotation(u),z.halfWidth.set(U.width*.5,0,0),z.halfHeight.set(0,U.height*.5,0),z.halfWidth.applyMatrix4(d),z.halfHeight.applyMatrix4(d),T++}else if(U.isPointLight){const z=r.point[v];z.position.setFromMatrixPosition(U.matrixWorld),z.position.applyMatrix4(S),v++}else if(U.isHemisphereLight){const z=r.hemi[C];z.direction.setFromMatrixPosition(U.matrixWorld),z.direction.transformDirection(S),C++}}}return{setup:h,setupView:m,state:r}}function fx(o){const t=new tE(o),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function u(_){i.push(_)}function d(_){r.push(_)}function h(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function nE(o){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new fx(o),t.set(l,[h])):u>=d.length?(h=new fx(o),d.push(h)):h=d[u],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const iE=`void main() {
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
}`;function rE(o,t,i){let r=new zx;const l=new Ut,u=new Ut,d=new rn,h=new wS({depthPacking:Hv}),m=new DS,p={},_=i.maxTextureSize,x={[ja]:Vn,[Vn]:ja,[oa]:oa},v=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:iE,fragmentShader:aE}),b=v.clone();b.defines.HORIZONTAL_PASS=1;const T=new Ja;T.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Ni(T,v),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gx;let A=this.type;this.render=function(N,P,ne){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||N.length===0)return;const w=o.getRenderTarget(),R=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),ee=o.state;ee.setBlending(ua),ee.buffers.depth.getReversed()===!0?ee.buffers.color.setClear(0,0,0,0):ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const oe=A!==sa&&this.type===sa,ge=A===sa&&this.type!==sa;for(let fe=0,O=N.length;fe<O;fe++){const j=N[fe],q=j.shadow;if(q===void 0){ot("WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const _e=q.getFrameExtents();if(l.multiply(_e),u.copy(q.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/_e.x),l.x=u.x*_e.x,q.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/_e.y),l.y=u.y*_e.y,q.mapSize.y=u.y)),q.map===null||oe===!0||ge===!0){const L=this.type!==sa?{minFilter:ei,magFilter:ei}:{};q.map!==null&&q.map.dispose(),q.map=new Qa(l.x,l.y,L),q.map.texture.name=j.name+".shadowMap",q.camera.updateProjectionMatrix()}o.setRenderTarget(q.map),o.clear();const Ae=q.getViewportCount();for(let L=0;L<Ae;L++){const ae=q.getViewport(L);d.set(u.x*ae.x,u.y*ae.y,u.x*ae.z,u.y*ae.w),ee.viewport(d),q.updateMatrices(j,L),r=q.getFrustum(),z(P,ne,q.camera,j,this.type)}q.isPointLightShadow!==!0&&this.type===sa&&B(q,ne),q.needsUpdate=!1}A=this.type,S.needsUpdate=!1,o.setRenderTarget(w,R,V)};function B(N,P){const ne=t.update(C);v.defines.VSM_SAMPLES!==N.blurSamples&&(v.defines.VSM_SAMPLES=N.blurSamples,b.defines.VSM_SAMPLES=N.blurSamples,v.needsUpdate=!0,b.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Qa(l.x,l.y)),v.uniforms.shadow_pass.value=N.map.texture,v.uniforms.resolution.value=N.mapSize,v.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(P,null,ne,v,C,null),b.uniforms.shadow_pass.value=N.mapPass.texture,b.uniforms.resolution.value=N.mapSize,b.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(P,null,ne,b,C,null)}function U(N,P,ne,w){let R=null;const V=ne.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(V!==void 0)R=V;else if(R=ne.isPointLight===!0?m:h,o.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const ee=R.uuid,oe=P.uuid;let ge=p[ee];ge===void 0&&(ge={},p[ee]=ge);let fe=ge[oe];fe===void 0&&(fe=R.clone(),ge[oe]=fe,P.addEventListener("dispose",k)),R=fe}if(R.visible=P.visible,R.wireframe=P.wireframe,w===sa?R.side=P.shadowSide!==null?P.shadowSide:P.side:R.side=P.shadowSide!==null?P.shadowSide:x[P.side],R.alphaMap=P.alphaMap,R.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,R.map=P.map,R.clipShadows=P.clipShadows,R.clippingPlanes=P.clippingPlanes,R.clipIntersection=P.clipIntersection,R.displacementMap=P.displacementMap,R.displacementScale=P.displacementScale,R.displacementBias=P.displacementBias,R.wireframeLinewidth=P.wireframeLinewidth,R.linewidth=P.linewidth,ne.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ee=o.properties.get(R);ee.light=ne}return R}function z(N,P,ne,w,R){if(N.visible===!1)return;if(N.layers.test(P.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&R===sa)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,N.matrixWorld);const oe=t.update(N),ge=N.material;if(Array.isArray(ge)){const fe=oe.groups;for(let O=0,j=fe.length;O<j;O++){const q=fe[O],_e=ge[q.materialIndex];if(_e&&_e.visible){const Ae=U(N,_e,w,R);N.onBeforeShadow(o,N,P,ne,oe,Ae,q),o.renderBufferDirect(ne,null,oe,Ae,N,q),N.onAfterShadow(o,N,P,ne,oe,Ae,q)}}}else if(ge.visible){const fe=U(N,ge,w,R);N.onBeforeShadow(o,N,P,ne,oe,fe,null),o.renderBufferDirect(ne,null,oe,fe,N,null),N.onAfterShadow(o,N,P,ne,oe,fe,null)}}const ee=N.children;for(let oe=0,ge=ee.length;oe<ge;oe++)z(ee[oe],P,ne,w,R)}function k(N){N.target.removeEventListener("dispose",k);for(const ne in p){const w=p[ne],R=N.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const sE={[Cd]:Rd,[wd]:Ld,[Dd]:Nd,[ys]:Ud,[Rd]:Cd,[Ld]:wd,[Nd]:Dd,[Ud]:ys};function oE(o,t){function i(){let G=!1;const De=new rn;let Ce=null;const Re=new rn(0,0,0,0);return{setMask:function(ye){Ce!==ye&&!G&&(o.colorMask(ye,ye,ye,ye),Ce=ye)},setLocked:function(ye){G=ye},setClear:function(ye,xe,ze,it,zt){zt===!0&&(ye*=it,xe*=it,ze*=it),De.set(ye,xe,ze,it),Re.equals(De)===!1&&(o.clearColor(ye,xe,ze,it),Re.copy(De))},reset:function(){G=!1,Ce=null,Re.set(-1,0,0,0)}}}function r(){let G=!1,De=!1,Ce=null,Re=null,ye=null;return{setReversed:function(xe){if(De!==xe){const ze=t.get("EXT_clip_control");xe?ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.ZERO_TO_ONE_EXT):ze.clipControlEXT(ze.LOWER_LEFT_EXT,ze.NEGATIVE_ONE_TO_ONE_EXT),De=xe;const it=ye;ye=null,this.setClear(it)}},getReversed:function(){return De},setTest:function(xe){xe?le(o.DEPTH_TEST):we(o.DEPTH_TEST)},setMask:function(xe){Ce!==xe&&!G&&(o.depthMask(xe),Ce=xe)},setFunc:function(xe){if(De&&(xe=sE[xe]),Re!==xe){switch(xe){case Cd:o.depthFunc(o.NEVER);break;case Rd:o.depthFunc(o.ALWAYS);break;case wd:o.depthFunc(o.LESS);break;case ys:o.depthFunc(o.LEQUAL);break;case Dd:o.depthFunc(o.EQUAL);break;case Ud:o.depthFunc(o.GEQUAL);break;case Ld:o.depthFunc(o.GREATER);break;case Nd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Re=xe}},setLocked:function(xe){G=xe},setClear:function(xe){ye!==xe&&(De&&(xe=1-xe),o.clearDepth(xe),ye=xe)},reset:function(){G=!1,Ce=null,Re=null,ye=null,De=!1}}}function l(){let G=!1,De=null,Ce=null,Re=null,ye=null,xe=null,ze=null,it=null,zt=null;return{setTest:function(Tt){G||(Tt?le(o.STENCIL_TEST):we(o.STENCIL_TEST))},setMask:function(Tt){De!==Tt&&!G&&(o.stencilMask(Tt),De=Tt)},setFunc:function(Tt,Rn,kn){(Ce!==Tt||Re!==Rn||ye!==kn)&&(o.stencilFunc(Tt,Rn,kn),Ce=Tt,Re=Rn,ye=kn)},setOp:function(Tt,Rn,kn){(xe!==Tt||ze!==Rn||it!==kn)&&(o.stencilOp(Tt,Rn,kn),xe=Tt,ze=Rn,it=kn)},setLocked:function(Tt){G=Tt},setClear:function(Tt){zt!==Tt&&(o.clearStencil(Tt),zt=Tt)},reset:function(){G=!1,De=null,Ce=null,Re=null,ye=null,xe=null,ze=null,it=null,zt=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let _={},x={},v=new WeakMap,b=[],T=null,C=!1,S=null,A=null,B=null,U=null,z=null,k=null,N=null,P=new Vt(0,0,0),ne=0,w=!1,R=null,V=null,ee=null,oe=null,ge=null;const fe=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,j=0;const q=o.getParameter(o.VERSION);q.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(q)[1]),O=j>=1):q.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),O=j>=2);let _e=null,Ae={};const L=o.getParameter(o.SCISSOR_BOX),ae=o.getParameter(o.VIEWPORT),be=new rn().fromArray(L),Ee=new rn().fromArray(ae);function Oe(G,De,Ce,Re){const ye=new Uint8Array(4),xe=o.createTexture();o.bindTexture(G,xe),o.texParameteri(G,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(G,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let ze=0;ze<Ce;ze++)G===o.TEXTURE_3D||G===o.TEXTURE_2D_ARRAY?o.texImage3D(De,0,o.RGBA,1,1,Re,0,o.RGBA,o.UNSIGNED_BYTE,ye):o.texImage2D(De+ze,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,ye);return xe}const te={};te[o.TEXTURE_2D]=Oe(o.TEXTURE_2D,o.TEXTURE_2D,1),te[o.TEXTURE_CUBE_MAP]=Oe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[o.TEXTURE_2D_ARRAY]=Oe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),te[o.TEXTURE_3D]=Oe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),le(o.DEPTH_TEST),d.setFunc(ys),ht(!1),mt(gg),le(o.CULL_FACE),Et(ua);function le(G){_[G]!==!0&&(o.enable(G),_[G]=!0)}function we(G){_[G]!==!1&&(o.disable(G),_[G]=!1)}function Ge(G,De){return x[G]!==De?(o.bindFramebuffer(G,De),x[G]=De,G===o.DRAW_FRAMEBUFFER&&(x[o.FRAMEBUFFER]=De),G===o.FRAMEBUFFER&&(x[o.DRAW_FRAMEBUFFER]=De),!0):!1}function Xe(G,De){let Ce=b,Re=!1;if(G){Ce=v.get(De),Ce===void 0&&(Ce=[],v.set(De,Ce));const ye=G.textures;if(Ce.length!==ye.length||Ce[0]!==o.COLOR_ATTACHMENT0){for(let xe=0,ze=ye.length;xe<ze;xe++)Ce[xe]=o.COLOR_ATTACHMENT0+xe;Ce.length=ye.length,Re=!0}}else Ce[0]!==o.BACK&&(Ce[0]=o.BACK,Re=!0);Re&&o.drawBuffers(Ce)}function lt(G){return T!==G?(o.useProgram(G),T=G,!0):!1}const en={[br]:o.FUNC_ADD,[hv]:o.FUNC_SUBTRACT,[pv]:o.FUNC_REVERSE_SUBTRACT};en[mv]=o.MIN,en[gv]=o.MAX;const dt={[xv]:o.ZERO,[_v]:o.ONE,[Av]:o.SRC_COLOR,[Ed]:o.SRC_ALPHA,[Ev]:o.SRC_ALPHA_SATURATE,[yv]:o.DST_COLOR,[Sv]:o.DST_ALPHA,[vv]:o.ONE_MINUS_SRC_COLOR,[Td]:o.ONE_MINUS_SRC_ALPHA,[Mv]:o.ONE_MINUS_DST_COLOR,[bv]:o.ONE_MINUS_DST_ALPHA,[Tv]:o.CONSTANT_COLOR,[Cv]:o.ONE_MINUS_CONSTANT_COLOR,[Rv]:o.CONSTANT_ALPHA,[wv]:o.ONE_MINUS_CONSTANT_ALPHA};function Et(G,De,Ce,Re,ye,xe,ze,it,zt,Tt){if(G===ua){C===!0&&(we(o.BLEND),C=!1);return}if(C===!1&&(le(o.BLEND),C=!0),G!==dv){if(G!==S||Tt!==w){if((A!==br||z!==br)&&(o.blendEquation(o.FUNC_ADD),A=br,z=br),Tt)switch(G){case Ss:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case xg:o.blendFunc(o.ONE,o.ONE);break;case _g:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Ag:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:an("WebGLState: Invalid blending: ",G);break}else switch(G){case Ss:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case xg:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case _g:an("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ag:an("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:an("WebGLState: Invalid blending: ",G);break}B=null,U=null,k=null,N=null,P.set(0,0,0),ne=0,S=G,w=Tt}return}ye=ye||De,xe=xe||Ce,ze=ze||Re,(De!==A||ye!==z)&&(o.blendEquationSeparate(en[De],en[ye]),A=De,z=ye),(Ce!==B||Re!==U||xe!==k||ze!==N)&&(o.blendFuncSeparate(dt[Ce],dt[Re],dt[xe],dt[ze]),B=Ce,U=Re,k=xe,N=ze),(it.equals(P)===!1||zt!==ne)&&(o.blendColor(it.r,it.g,it.b,zt),P.copy(it),ne=zt),S=G,w=!1}function F(G,De){G.side===oa?we(o.CULL_FACE):le(o.CULL_FACE);let Ce=G.side===Vn;De&&(Ce=!Ce),ht(Ce),G.blending===Ss&&G.transparent===!1?Et(ua):Et(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),d.setFunc(G.depthFunc),d.setTest(G.depthTest),d.setMask(G.depthWrite),u.setMask(G.colorWrite);const Re=G.stencilWrite;h.setTest(Re),Re&&(h.setMask(G.stencilWriteMask),h.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),h.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),He(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?le(o.SAMPLE_ALPHA_TO_COVERAGE):we(o.SAMPLE_ALPHA_TO_COVERAGE)}function ht(G){R!==G&&(G?o.frontFace(o.CW):o.frontFace(o.CCW),R=G)}function mt(G){G!==cv?(le(o.CULL_FACE),G!==V&&(G===gg?o.cullFace(o.BACK):G===uv?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):we(o.CULL_FACE),V=G}function It(G){G!==ee&&(O&&o.lineWidth(G),ee=G)}function He(G,De,Ce){G?(le(o.POLYGON_OFFSET_FILL),(oe!==De||ge!==Ce)&&(o.polygonOffset(De,Ce),oe=De,ge=Ce)):we(o.POLYGON_OFFSET_FILL)}function kt(G){G?le(o.SCISSOR_TEST):we(o.SCISSOR_TEST)}function je(G){G===void 0&&(G=o.TEXTURE0+fe-1),_e!==G&&(o.activeTexture(G),_e=G)}function at(G,De,Ce){Ce===void 0&&(_e===null?Ce=o.TEXTURE0+fe-1:Ce=_e);let Re=Ae[Ce];Re===void 0&&(Re={type:void 0,texture:void 0},Ae[Ce]=Re),(Re.type!==G||Re.texture!==De)&&(_e!==Ce&&(o.activeTexture(Ce),_e=Ce),o.bindTexture(G,De||te[G]),Re.type=G,Re.texture=De)}function D(){const G=Ae[_e];G!==void 0&&G.type!==void 0&&(o.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function y(){try{o.compressedTexImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function J(){try{o.compressedTexImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function pe(){try{o.texSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function ve(){try{o.texSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function se(){try{o.compressedTexSubImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function We(){try{o.compressedTexSubImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Le(){try{o.texStorage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Ze(){try{o.texStorage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Ye(){try{o.texImage2D(...arguments)}catch(G){G("WebGLState:",G)}}function Se(){try{o.texImage3D(...arguments)}catch(G){G("WebGLState:",G)}}function Me(G){be.equals(G)===!1&&(o.scissor(G.x,G.y,G.z,G.w),be.copy(G))}function qe(G){Ee.equals(G)===!1&&(o.viewport(G.x,G.y,G.z,G.w),Ee.copy(G))}function Ve(G,De){let Ce=p.get(De);Ce===void 0&&(Ce=new WeakMap,p.set(De,Ce));let Re=Ce.get(G);Re===void 0&&(Re=o.getUniformBlockIndex(De,G.name),Ce.set(G,Re))}function Ie(G,De){const Re=p.get(De).get(G);m.get(De)!==Re&&(o.uniformBlockBinding(De,Re,G.__bindingPointIndex),m.set(De,Re))}function nt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},_e=null,Ae={},x={},v=new WeakMap,b=[],T=null,C=!1,S=null,A=null,B=null,U=null,z=null,k=null,N=null,P=new Vt(0,0,0),ne=0,w=!1,R=null,V=null,ee=null,oe=null,ge=null,be.set(0,0,o.canvas.width,o.canvas.height),Ee.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:le,disable:we,bindFramebuffer:Ge,drawBuffers:Xe,useProgram:lt,setBlending:Et,setMaterial:F,setFlipSided:ht,setCullFace:mt,setLineWidth:It,setPolygonOffset:He,setScissorTest:kt,activeTexture:je,bindTexture:at,unbindTexture:D,compressedTexImage2D:y,compressedTexImage3D:J,texImage2D:Ye,texImage3D:Se,updateUBOMapping:Ve,uniformBlockBinding:Ie,texStorage2D:Le,texStorage3D:Ze,texSubImage2D:pe,texSubImage3D:ve,compressedTexSubImage2D:se,compressedTexSubImage3D:We,scissor:Me,viewport:qe,reset:nt}}function lE(o,t,i,r,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ut,_=new WeakMap;let x;const v=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(D,y){return b?new OffscreenCanvas(D,y):Dc("canvas")}function C(D,y,J){let pe=1;const ve=at(D);if((ve.width>J||ve.height>J)&&(pe=J/Math.max(ve.width,ve.height)),pe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const se=Math.floor(pe*ve.width),We=Math.floor(pe*ve.height);x===void 0&&(x=T(se,We));const Le=y?T(se,We):x;return Le.width=se,Le.height=We,Le.getContext("2d").drawImage(D,0,0,se,We),ot("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+se+"x"+We+")."),Le}else return"data"in D&&ot("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),D;return D}function S(D){return D.generateMipmaps}function A(D){o.generateMipmap(D)}function B(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(D,y,J,pe,ve=!1){if(D!==null){if(o[D]!==void 0)return o[D];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let se=y;if(y===o.RED&&(J===o.FLOAT&&(se=o.R32F),J===o.HALF_FLOAT&&(se=o.R16F),J===o.UNSIGNED_BYTE&&(se=o.R8)),y===o.RED_INTEGER&&(J===o.UNSIGNED_BYTE&&(se=o.R8UI),J===o.UNSIGNED_SHORT&&(se=o.R16UI),J===o.UNSIGNED_INT&&(se=o.R32UI),J===o.BYTE&&(se=o.R8I),J===o.SHORT&&(se=o.R16I),J===o.INT&&(se=o.R32I)),y===o.RG&&(J===o.FLOAT&&(se=o.RG32F),J===o.HALF_FLOAT&&(se=o.RG16F),J===o.UNSIGNED_BYTE&&(se=o.RG8)),y===o.RG_INTEGER&&(J===o.UNSIGNED_BYTE&&(se=o.RG8UI),J===o.UNSIGNED_SHORT&&(se=o.RG16UI),J===o.UNSIGNED_INT&&(se=o.RG32UI),J===o.BYTE&&(se=o.RG8I),J===o.SHORT&&(se=o.RG16I),J===o.INT&&(se=o.RG32I)),y===o.RGB_INTEGER&&(J===o.UNSIGNED_BYTE&&(se=o.RGB8UI),J===o.UNSIGNED_SHORT&&(se=o.RGB16UI),J===o.UNSIGNED_INT&&(se=o.RGB32UI),J===o.BYTE&&(se=o.RGB8I),J===o.SHORT&&(se=o.RGB16I),J===o.INT&&(se=o.RGB32I)),y===o.RGBA_INTEGER&&(J===o.UNSIGNED_BYTE&&(se=o.RGBA8UI),J===o.UNSIGNED_SHORT&&(se=o.RGBA16UI),J===o.UNSIGNED_INT&&(se=o.RGBA32UI),J===o.BYTE&&(se=o.RGBA8I),J===o.SHORT&&(se=o.RGBA16I),J===o.INT&&(se=o.RGBA32I)),y===o.RGB&&(J===o.UNSIGNED_INT_5_9_9_9_REV&&(se=o.RGB9_E5),J===o.UNSIGNED_INT_10F_11F_11F_REV&&(se=o.R11F_G11F_B10F)),y===o.RGBA){const We=ve?Rc:Dt.getTransfer(pe);J===o.FLOAT&&(se=o.RGBA32F),J===o.HALF_FLOAT&&(se=o.RGBA16F),J===o.UNSIGNED_BYTE&&(se=We===Ht?o.SRGB8_ALPHA8:o.RGBA8),J===o.UNSIGNED_SHORT_4_4_4_4&&(se=o.RGBA4),J===o.UNSIGNED_SHORT_5_5_5_1&&(se=o.RGB5_A1)}return(se===o.R16F||se===o.R32F||se===o.RG16F||se===o.RG32F||se===o.RGBA16F||se===o.RGBA32F)&&t.get("EXT_color_buffer_float"),se}function z(D,y){let J;return D?y===null||y===Cr||y===Oo?J=o.DEPTH24_STENCIL8:y===ca?J=o.DEPTH32F_STENCIL8:y===Io&&(J=o.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Cr||y===Oo?J=o.DEPTH_COMPONENT24:y===ca?J=o.DEPTH_COMPONENT32F:y===Io&&(J=o.DEPTH_COMPONENT16),J}function k(D,y){return S(D)===!0||D.isFramebufferTexture&&D.minFilter!==ei&&D.minFilter!==di?Math.log2(Math.max(y.width,y.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?y.mipmaps.length:1}function N(D){const y=D.target;y.removeEventListener("dispose",N),ne(y),y.isVideoTexture&&_.delete(y)}function P(D){const y=D.target;y.removeEventListener("dispose",P),R(y)}function ne(D){const y=r.get(D);if(y.__webglInit===void 0)return;const J=D.source,pe=v.get(J);if(pe){const ve=pe[y.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&w(D),Object.keys(pe).length===0&&v.delete(J)}r.remove(D)}function w(D){const y=r.get(D);o.deleteTexture(y.__webglTexture);const J=D.source,pe=v.get(J);delete pe[y.__cacheKey],d.memory.textures--}function R(D){const y=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(y.__webglFramebuffer[pe]))for(let ve=0;ve<y.__webglFramebuffer[pe].length;ve++)o.deleteFramebuffer(y.__webglFramebuffer[pe][ve]);else o.deleteFramebuffer(y.__webglFramebuffer[pe]);y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer[pe])}else{if(Array.isArray(y.__webglFramebuffer))for(let pe=0;pe<y.__webglFramebuffer.length;pe++)o.deleteFramebuffer(y.__webglFramebuffer[pe]);else o.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&o.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&o.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let pe=0;pe<y.__webglColorRenderbuffer.length;pe++)y.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(y.__webglColorRenderbuffer[pe]);y.__webglDepthRenderbuffer&&o.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const J=D.textures;for(let pe=0,ve=J.length;pe<ve;pe++){const se=r.get(J[pe]);se.__webglTexture&&(o.deleteTexture(se.__webglTexture),d.memory.textures--),r.remove(J[pe])}r.remove(D)}let V=0;function ee(){V=0}function oe(){const D=V;return D>=l.maxTextures&&ot("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),V+=1,D}function ge(D){const y=[];return y.push(D.wrapS),y.push(D.wrapT),y.push(D.wrapR||0),y.push(D.magFilter),y.push(D.minFilter),y.push(D.anisotropy),y.push(D.internalFormat),y.push(D.format),y.push(D.type),y.push(D.generateMipmaps),y.push(D.premultiplyAlpha),y.push(D.flipY),y.push(D.unpackAlignment),y.push(D.colorSpace),y.join()}function fe(D,y){const J=r.get(D);if(D.isVideoTexture&&kt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&J.__version!==D.version){const pe=D.image;if(pe===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{te(J,D,y);return}}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,J.__webglTexture,o.TEXTURE0+y)}function O(D,y){const J=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){te(J,D,y);return}else D.isExternalTexture&&(J.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,J.__webglTexture,o.TEXTURE0+y)}function j(D,y){const J=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){te(J,D,y);return}i.bindTexture(o.TEXTURE_3D,J.__webglTexture,o.TEXTURE0+y)}function q(D,y){const J=r.get(D);if(D.version>0&&J.__version!==D.version){le(J,D,y);return}i.bindTexture(o.TEXTURE_CUBE_MAP,J.__webglTexture,o.TEXTURE0+y)}const _e={[Bd]:o.REPEAT,[la]:o.CLAMP_TO_EDGE,[zd]:o.MIRRORED_REPEAT},Ae={[ei]:o.NEAREST,[Fv]:o.NEAREST_MIPMAP_NEAREST,[ec]:o.NEAREST_MIPMAP_LINEAR,[di]:o.LINEAR,[jf]:o.LINEAR_MIPMAP_NEAREST,[Er]:o.LINEAR_MIPMAP_LINEAR},L={[Xv]:o.NEVER,[Jv]:o.ALWAYS,[Yv]:o.LESS,[Tx]:o.LEQUAL,[Wv]:o.EQUAL,[Qv]:o.GEQUAL,[qv]:o.GREATER,[jv]:o.NOTEQUAL};function ae(D,y){if(y.type===ca&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===di||y.magFilter===jf||y.magFilter===ec||y.magFilter===Er||y.minFilter===di||y.minFilter===jf||y.minFilter===ec||y.minFilter===Er)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,_e[y.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,_e[y.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,_e[y.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,Ae[y.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,Ae[y.minFilter]),y.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,L[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===ei||y.minFilter!==ec&&y.minFilter!==Er||y.type===ca&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||r.get(y).__currentAnisotropy){const J=t.get("EXT_texture_filter_anisotropic");o.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,l.getMaxAnisotropy())),r.get(y).__currentAnisotropy=y.anisotropy}}}function be(D,y){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,y.addEventListener("dispose",N));const pe=y.source;let ve=v.get(pe);ve===void 0&&(ve={},v.set(pe,ve));const se=ge(y);if(se!==D.__cacheKey){ve[se]===void 0&&(ve[se]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,J=!0),ve[se].usedTimes++;const We=ve[D.__cacheKey];We!==void 0&&(ve[D.__cacheKey].usedTimes--,We.usedTimes===0&&w(y)),D.__cacheKey=se,D.__webglTexture=ve[se].texture}return J}function Ee(D,y,J){return Math.floor(Math.floor(D/J)/y)}function Oe(D,y,J,pe){const se=D.updateRanges;if(se.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,y.width,y.height,J,pe,y.data);else{se.sort((Se,Me)=>Se.start-Me.start);let We=0;for(let Se=1;Se<se.length;Se++){const Me=se[We],qe=se[Se],Ve=Me.start+Me.count,Ie=Ee(qe.start,y.width,4),nt=Ee(Me.start,y.width,4);qe.start<=Ve+1&&Ie===nt&&Ee(qe.start+qe.count-1,y.width,4)===Ie?Me.count=Math.max(Me.count,qe.start+qe.count-Me.start):(++We,se[We]=qe)}se.length=We+1;const Le=o.getParameter(o.UNPACK_ROW_LENGTH),Ze=o.getParameter(o.UNPACK_SKIP_PIXELS),Ye=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,y.width);for(let Se=0,Me=se.length;Se<Me;Se++){const qe=se[Se],Ve=Math.floor(qe.start/4),Ie=Math.ceil(qe.count/4),nt=Ve%y.width,G=Math.floor(Ve/y.width),De=Ie,Ce=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,nt),o.pixelStorei(o.UNPACK_SKIP_ROWS,G),i.texSubImage2D(o.TEXTURE_2D,0,nt,G,De,Ce,J,pe,y.data)}D.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Le),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Ze),o.pixelStorei(o.UNPACK_SKIP_ROWS,Ye)}}function te(D,y,J){let pe=o.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),y.isData3DTexture&&(pe=o.TEXTURE_3D);const ve=be(D,y),se=y.source;i.bindTexture(pe,D.__webglTexture,o.TEXTURE0+J);const We=r.get(se);if(se.version!==We.__version||ve===!0){i.activeTexture(o.TEXTURE0+J);const Le=Dt.getPrimaries(Dt.workingColorSpace),Ze=y.colorSpace===Ya?null:Dt.getPrimaries(y.colorSpace),Ye=y.colorSpace===Ya||Le===Ze?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let Se=C(y.image,!1,l.maxTextureSize);Se=je(y,Se);const Me=u.convert(y.format,y.colorSpace),qe=u.convert(y.type);let Ve=U(y.internalFormat,Me,qe,y.colorSpace,y.isVideoTexture);ae(pe,y);let Ie;const nt=y.mipmaps,G=y.isVideoTexture!==!0,De=We.__version===void 0||ve===!0,Ce=se.dataReady,Re=k(y,Se);if(y.isDepthTexture)Ve=z(y.format===zo,y.type),De&&(G?i.texStorage2D(o.TEXTURE_2D,1,Ve,Se.width,Se.height):i.texImage2D(o.TEXTURE_2D,0,Ve,Se.width,Se.height,0,Me,qe,null));else if(y.isDataTexture)if(nt.length>0){G&&De&&i.texStorage2D(o.TEXTURE_2D,Re,Ve,nt[0].width,nt[0].height);for(let ye=0,xe=nt.length;ye<xe;ye++)Ie=nt[ye],G?Ce&&i.texSubImage2D(o.TEXTURE_2D,ye,0,0,Ie.width,Ie.height,Me,qe,Ie.data):i.texImage2D(o.TEXTURE_2D,ye,Ve,Ie.width,Ie.height,0,Me,qe,Ie.data);y.generateMipmaps=!1}else G?(De&&i.texStorage2D(o.TEXTURE_2D,Re,Ve,Se.width,Se.height),Ce&&Oe(y,Se,Me,qe)):i.texImage2D(o.TEXTURE_2D,0,Ve,Se.width,Se.height,0,Me,qe,Se.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){G&&De&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Re,Ve,nt[0].width,nt[0].height,Se.depth);for(let ye=0,xe=nt.length;ye<xe;ye++)if(Ie=nt[ye],y.format!==bi)if(Me!==null)if(G){if(Ce)if(y.layerUpdates.size>0){const ze=Vg(Ie.width,Ie.height,y.format,y.type);for(const it of y.layerUpdates){const zt=Ie.data.subarray(it*ze/Ie.data.BYTES_PER_ELEMENT,(it+1)*ze/Ie.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ye,0,0,it,Ie.width,Ie.height,1,Me,zt)}y.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ye,0,0,0,Ie.width,Ie.height,Se.depth,Me,Ie.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ye,Ve,Ie.width,Ie.height,Se.depth,0,Ie.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else G?Ce&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ye,0,0,0,Ie.width,Ie.height,Se.depth,Me,qe,Ie.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ye,Ve,Ie.width,Ie.height,Se.depth,0,Me,qe,Ie.data)}else{G&&De&&i.texStorage2D(o.TEXTURE_2D,Re,Ve,nt[0].width,nt[0].height);for(let ye=0,xe=nt.length;ye<xe;ye++)Ie=nt[ye],y.format!==bi?Me!==null?G?Ce&&i.compressedTexSubImage2D(o.TEXTURE_2D,ye,0,0,Ie.width,Ie.height,Me,Ie.data):i.compressedTexImage2D(o.TEXTURE_2D,ye,Ve,Ie.width,Ie.height,0,Ie.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):G?Ce&&i.texSubImage2D(o.TEXTURE_2D,ye,0,0,Ie.width,Ie.height,Me,qe,Ie.data):i.texImage2D(o.TEXTURE_2D,ye,Ve,Ie.width,Ie.height,0,Me,qe,Ie.data)}else if(y.isDataArrayTexture)if(G){if(De&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Re,Ve,Se.width,Se.height,Se.depth),Ce)if(y.layerUpdates.size>0){const ye=Vg(Se.width,Se.height,y.format,y.type);for(const xe of y.layerUpdates){const ze=Se.data.subarray(xe*ye/Se.data.BYTES_PER_ELEMENT,(xe+1)*ye/Se.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xe,Se.width,Se.height,1,Me,qe,ze)}y.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Me,qe,Se.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ve,Se.width,Se.height,Se.depth,0,Me,qe,Se.data);else if(y.isData3DTexture)G?(De&&i.texStorage3D(o.TEXTURE_3D,Re,Ve,Se.width,Se.height,Se.depth),Ce&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Me,qe,Se.data)):i.texImage3D(o.TEXTURE_3D,0,Ve,Se.width,Se.height,Se.depth,0,Me,qe,Se.data);else if(y.isFramebufferTexture){if(De)if(G)i.texStorage2D(o.TEXTURE_2D,Re,Ve,Se.width,Se.height);else{let ye=Se.width,xe=Se.height;for(let ze=0;ze<Re;ze++)i.texImage2D(o.TEXTURE_2D,ze,Ve,ye,xe,0,Me,qe,null),ye>>=1,xe>>=1}}else if(nt.length>0){if(G&&De){const ye=at(nt[0]);i.texStorage2D(o.TEXTURE_2D,Re,Ve,ye.width,ye.height)}for(let ye=0,xe=nt.length;ye<xe;ye++)Ie=nt[ye],G?Ce&&i.texSubImage2D(o.TEXTURE_2D,ye,0,0,Me,qe,Ie):i.texImage2D(o.TEXTURE_2D,ye,Ve,Me,qe,Ie);y.generateMipmaps=!1}else if(G){if(De){const ye=at(Se);i.texStorage2D(o.TEXTURE_2D,Re,Ve,ye.width,ye.height)}Ce&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Me,qe,Se)}else i.texImage2D(o.TEXTURE_2D,0,Ve,Me,qe,Se);S(y)&&A(pe),We.__version=se.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function le(D,y,J){if(y.image.length!==6)return;const pe=be(D,y),ve=y.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+J);const se=r.get(ve);if(ve.version!==se.__version||pe===!0){i.activeTexture(o.TEXTURE0+J);const We=Dt.getPrimaries(Dt.workingColorSpace),Le=y.colorSpace===Ya?null:Dt.getPrimaries(y.colorSpace),Ze=y.colorSpace===Ya||We===Le?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,y.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,y.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze);const Ye=y.isCompressedTexture||y.image[0].isCompressedTexture,Se=y.image[0]&&y.image[0].isDataTexture,Me=[];for(let xe=0;xe<6;xe++)!Ye&&!Se?Me[xe]=C(y.image[xe],!0,l.maxCubemapSize):Me[xe]=Se?y.image[xe].image:y.image[xe],Me[xe]=je(y,Me[xe]);const qe=Me[0],Ve=u.convert(y.format,y.colorSpace),Ie=u.convert(y.type),nt=U(y.internalFormat,Ve,Ie,y.colorSpace),G=y.isVideoTexture!==!0,De=se.__version===void 0||pe===!0,Ce=ve.dataReady;let Re=k(y,qe);ae(o.TEXTURE_CUBE_MAP,y);let ye;if(Ye){G&&De&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Re,nt,qe.width,qe.height);for(let xe=0;xe<6;xe++){ye=Me[xe].mipmaps;for(let ze=0;ze<ye.length;ze++){const it=ye[ze];y.format!==bi?Ve!==null?G?Ce&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ze,0,0,it.width,it.height,Ve,it.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ze,nt,it.width,it.height,0,it.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):G?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ze,0,0,it.width,it.height,Ve,Ie,it.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ze,nt,it.width,it.height,0,Ve,Ie,it.data)}}}else{if(ye=y.mipmaps,G&&De){ye.length>0&&Re++;const xe=at(Me[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Re,nt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Se){G?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Me[xe].width,Me[xe].height,Ve,Ie,Me[xe].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,nt,Me[xe].width,Me[xe].height,0,Ve,Ie,Me[xe].data);for(let ze=0;ze<ye.length;ze++){const zt=ye[ze].image[xe].image;G?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ze+1,0,0,zt.width,zt.height,Ve,Ie,zt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ze+1,nt,zt.width,zt.height,0,Ve,Ie,zt.data)}}else{G?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ve,Ie,Me[xe]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,nt,Ve,Ie,Me[xe]);for(let ze=0;ze<ye.length;ze++){const it=ye[ze];G?Ce&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ze+1,0,0,Ve,Ie,it.image[xe]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,ze+1,nt,Ve,Ie,it.image[xe])}}}S(y)&&A(o.TEXTURE_CUBE_MAP),se.__version=ve.version,y.onUpdate&&y.onUpdate(y)}D.__version=y.version}function we(D,y,J,pe,ve,se){const We=u.convert(J.format,J.colorSpace),Le=u.convert(J.type),Ze=U(J.internalFormat,We,Le,J.colorSpace),Ye=r.get(y),Se=r.get(J);if(Se.__renderTarget=y,!Ye.__hasExternalTextures){const Me=Math.max(1,y.width>>se),qe=Math.max(1,y.height>>se);ve===o.TEXTURE_3D||ve===o.TEXTURE_2D_ARRAY?i.texImage3D(ve,se,Ze,Me,qe,y.depth,0,We,Le,null):i.texImage2D(ve,se,Ze,Me,qe,0,We,Le,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),He(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,ve,Se.__webglTexture,0,It(y)):(ve===o.TEXTURE_2D||ve>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,ve,Se.__webglTexture,se),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ge(D,y,J){if(o.bindRenderbuffer(o.RENDERBUFFER,D),y.depthBuffer){const pe=y.depthTexture,ve=pe&&pe.isDepthTexture?pe.type:null,se=z(y.stencilBuffer,ve),We=y.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Le=It(y);He(y)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Le,se,y.width,y.height):J?o.renderbufferStorageMultisample(o.RENDERBUFFER,Le,se,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,se,y.width,y.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,We,o.RENDERBUFFER,D)}else{const pe=y.textures;for(let ve=0;ve<pe.length;ve++){const se=pe[ve],We=u.convert(se.format,se.colorSpace),Le=u.convert(se.type),Ze=U(se.internalFormat,We,Le,se.colorSpace),Ye=It(y);J&&He(y)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ye,Ze,y.width,y.height):He(y)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ye,Ze,y.width,y.height):o.renderbufferStorage(o.RENDERBUFFER,Ze,y.width,y.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Xe(D,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(y.depthTexture);pe.__renderTarget=y,(!pe.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),fe(y.depthTexture,0);const ve=pe.__webglTexture,se=It(y);if(y.depthTexture.format===Bo)He(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ve,0,se):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ve,0);else if(y.depthTexture.format===zo)He(y)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ve,0,se):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function lt(D){const y=r.get(D),J=D.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==D.depthTexture){const pe=D.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),pe){const ve=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,pe.removeEventListener("dispose",ve)};pe.addEventListener("dispose",ve),y.__depthDisposeCallback=ve}y.__boundDepthTexture=pe}if(D.depthTexture&&!y.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");const pe=D.texture.mipmaps;pe&&pe.length>0?Xe(y.__webglFramebuffer[0],D):Xe(y.__webglFramebuffer,D)}else if(J){y.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[pe]),y.__webglDepthbuffer[pe]===void 0)y.__webglDepthbuffer[pe]=o.createRenderbuffer(),Ge(y.__webglDepthbuffer[pe],D,!1);else{const ve=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,se=y.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,se),o.framebufferRenderbuffer(o.FRAMEBUFFER,ve,o.RENDERBUFFER,se)}}else{const pe=D.texture.mipmaps;if(pe&&pe.length>0?i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=o.createRenderbuffer(),Ge(y.__webglDepthbuffer,D,!1);else{const ve=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,se=y.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,se),o.framebufferRenderbuffer(o.FRAMEBUFFER,ve,o.RENDERBUFFER,se)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function en(D,y,J){const pe=r.get(D);y!==void 0&&we(pe.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),J!==void 0&&lt(D)}function dt(D){const y=D.texture,J=r.get(D),pe=r.get(y);D.addEventListener("dispose",P);const ve=D.textures,se=D.isWebGLCubeRenderTarget===!0,We=ve.length>1;if(We||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=y.version,d.memory.textures++),se){J.__webglFramebuffer=[];for(let Le=0;Le<6;Le++)if(y.mipmaps&&y.mipmaps.length>0){J.__webglFramebuffer[Le]=[];for(let Ze=0;Ze<y.mipmaps.length;Ze++)J.__webglFramebuffer[Le][Ze]=o.createFramebuffer()}else J.__webglFramebuffer[Le]=o.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){J.__webglFramebuffer=[];for(let Le=0;Le<y.mipmaps.length;Le++)J.__webglFramebuffer[Le]=o.createFramebuffer()}else J.__webglFramebuffer=o.createFramebuffer();if(We)for(let Le=0,Ze=ve.length;Le<Ze;Le++){const Ye=r.get(ve[Le]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=o.createTexture(),d.memory.textures++)}if(D.samples>0&&He(D)===!1){J.__webglMultisampledFramebuffer=o.createFramebuffer(),J.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Le=0;Le<ve.length;Le++){const Ze=ve[Le];J.__webglColorRenderbuffer[Le]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,J.__webglColorRenderbuffer[Le]);const Ye=u.convert(Ze.format,Ze.colorSpace),Se=u.convert(Ze.type),Me=U(Ze.internalFormat,Ye,Se,Ze.colorSpace,D.isXRRenderTarget===!0),qe=It(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,qe,Me,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Le,o.RENDERBUFFER,J.__webglColorRenderbuffer[Le])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=o.createRenderbuffer(),Ge(J.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(se){i.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),ae(o.TEXTURE_CUBE_MAP,y);for(let Le=0;Le<6;Le++)if(y.mipmaps&&y.mipmaps.length>0)for(let Ze=0;Ze<y.mipmaps.length;Ze++)we(J.__webglFramebuffer[Le][Ze],D,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Le,Ze);else we(J.__webglFramebuffer[Le],D,y,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0);S(y)&&A(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(We){for(let Le=0,Ze=ve.length;Le<Ze;Le++){const Ye=ve[Le],Se=r.get(Ye);let Me=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Me=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Me,Se.__webglTexture),ae(Me,Ye),we(J.__webglFramebuffer,D,Ye,o.COLOR_ATTACHMENT0+Le,Me,0),S(Ye)&&A(Me)}i.unbindTexture()}else{let Le=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Le=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Le,pe.__webglTexture),ae(Le,y),y.mipmaps&&y.mipmaps.length>0)for(let Ze=0;Ze<y.mipmaps.length;Ze++)we(J.__webglFramebuffer[Ze],D,y,o.COLOR_ATTACHMENT0,Le,Ze);else we(J.__webglFramebuffer,D,y,o.COLOR_ATTACHMENT0,Le,0);S(y)&&A(Le),i.unbindTexture()}D.depthBuffer&&lt(D)}function Et(D){const y=D.textures;for(let J=0,pe=y.length;J<pe;J++){const ve=y[J];if(S(ve)){const se=B(D),We=r.get(ve).__webglTexture;i.bindTexture(se,We),A(se),i.unbindTexture()}}}const F=[],ht=[];function mt(D){if(D.samples>0){if(He(D)===!1){const y=D.textures,J=D.width,pe=D.height;let ve=o.COLOR_BUFFER_BIT;const se=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,We=r.get(D),Le=y.length>1;if(Le)for(let Ye=0;Ye<y.length;Ye++)i.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ye,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ye,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer);const Ze=D.texture.mipmaps;Ze&&Ze.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let Ye=0;Ye<y.length;Ye++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ve|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ve|=o.STENCIL_BUFFER_BIT)),Le){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,We.__webglColorRenderbuffer[Ye]);const Se=r.get(y[Ye]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Se,0)}o.blitFramebuffer(0,0,J,pe,0,0,J,pe,ve,o.NEAREST),m===!0&&(F.length=0,ht.length=0,F.push(o.COLOR_ATTACHMENT0+Ye),D.depthBuffer&&D.resolveDepthBuffer===!1&&(F.push(se),ht.push(se),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ht)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,F))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Le)for(let Ye=0;Ye<y.length;Ye++){i.bindFramebuffer(o.FRAMEBUFFER,We.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ye,o.RENDERBUFFER,We.__webglColorRenderbuffer[Ye]);const Se=r.get(y[Ye]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,We.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ye,o.TEXTURE_2D,Se,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const y=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[y])}}}function It(D){return Math.min(l.maxSamples,D.samples)}function He(D){const y=r.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function kt(D){const y=d.render.frame;_.get(D)!==y&&(_.set(D,y),D.update())}function je(D,y){const J=D.colorSpace,pe=D.format,ve=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==Ts&&J!==Ya&&(Dt.getTransfer(J)===Ht?(pe!==bi||ve!==da)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):an("WebGLTextures: Unsupported texture color space:",J)),y}function at(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=oe,this.resetTextureUnits=ee,this.setTexture2D=fe,this.setTexture2DArray=O,this.setTexture3D=j,this.setTextureCube=q,this.rebindTextures=en,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Et,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=we,this.useMultisampledRTT=He}function cE(o,t){function i(r,l=Ya){let u;const d=Dt.getTransfer(l);if(r===da)return o.UNSIGNED_BYTE;if(r===_h)return o.UNSIGNED_SHORT_4_4_4_4;if(r===Ah)return o.UNSIGNED_SHORT_5_5_5_1;if(r===Sx)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===bx)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===Ax)return o.BYTE;if(r===vx)return o.SHORT;if(r===Io)return o.UNSIGNED_SHORT;if(r===xh)return o.INT;if(r===Cr)return o.UNSIGNED_INT;if(r===ca)return o.FLOAT;if(r===ws)return o.HALF_FLOAT;if(r===yx)return o.ALPHA;if(r===Mx)return o.RGB;if(r===bi)return o.RGBA;if(r===Bo)return o.DEPTH_COMPONENT;if(r===zo)return o.DEPTH_STENCIL;if(r===Ex)return o.RED;if(r===vh)return o.RED_INTEGER;if(r===Sh)return o.RG;if(r===bh)return o.RG_INTEGER;if(r===yh)return o.RGBA_INTEGER;if(r===bc||r===yc||r===Mc||r===Ec)if(d===Ht)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===bc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===yc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ec)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===bc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===yc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Mc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ec)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Pd||r===Fd||r===Gd||r===Hd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Pd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Fd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Gd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Vd||r===kd||r===Xd)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Vd||r===kd)return d===Ht?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Xd)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Yd||r===Wd||r===qd||r===jd||r===Qd||r===Jd||r===Zd||r===Kd||r===$d||r===eh||r===th||r===nh||r===ih||r===ah)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Yd)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wd)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===qd)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===jd)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Qd)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Jd)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zd)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Kd)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===$d)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===eh)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===th)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===nh)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ih)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===ah)return d===Ht?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===rh||r===sh||r===oh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===rh)return d===Ht?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===sh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===oh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===lh||r===ch||r===uh||r===fh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===lh)return u.COMPRESSED_RED_RGTC1_EXT;if(r===ch)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===uh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===fh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Oo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const uE=`
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

}`;class dE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new Fx(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new yi({vertexShader:uE,fragmentShader:fE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Ni(new Rs(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hE extends Ds{constructor(t,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,_=null,x=null,v=null,b=null,T=null;const C=typeof XRWebGLBinding<"u",S=new dE,A={},B=i.getContextAttributes();let U=null,z=null;const k=[],N=[],P=new Ut;let ne=null;const w=new vi;w.viewport=new rn;const R=new vi;R.viewport=new rn;const V=[w,R],ee=new US;let oe=null,ge=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let le=k[te];return le===void 0&&(le=new xd,k[te]=le),le.getTargetRaySpace()},this.getControllerGrip=function(te){let le=k[te];return le===void 0&&(le=new xd,k[te]=le),le.getGripSpace()},this.getHand=function(te){let le=k[te];return le===void 0&&(le=new xd,k[te]=le),le.getHandSpace()};function fe(te){const le=N.indexOf(te.inputSource);if(le===-1)return;const we=k[le];we!==void 0&&(we.update(te.inputSource,te.frame,p||d),we.dispatchEvent({type:te.type,data:te.inputSource}))}function O(){l.removeEventListener("select",fe),l.removeEventListener("selectstart",fe),l.removeEventListener("selectend",fe),l.removeEventListener("squeeze",fe),l.removeEventListener("squeezestart",fe),l.removeEventListener("squeezeend",fe),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",j);for(let te=0;te<k.length;te++){const le=N[te];le!==null&&(N[te]=null,k[te].disconnect(le))}oe=null,ge=null,S.reset();for(const te in A)delete A[te];t.setRenderTarget(U),b=null,v=null,x=null,l=null,z=null,Oe.stop(),r.isPresenting=!1,t.setPixelRatio(ne),t.setSize(P.width,P.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){u=te,r.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){h=te,r.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(te){p=te},this.getBaseLayer=function(){return v!==null?v:b},this.getBinding=function(){return x===null&&C&&(x=new XRWebGLBinding(l,i)),x},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(te){if(l=te,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",fe),l.addEventListener("selectstart",fe),l.addEventListener("selectend",fe),l.addEventListener("squeeze",fe),l.addEventListener("squeezestart",fe),l.addEventListener("squeezeend",fe),l.addEventListener("end",O),l.addEventListener("inputsourceschange",j),B.xrCompatible!==!0&&await i.makeXRCompatible(),ne=t.getPixelRatio(),t.getSize(P),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Ge=null,Xe=null;B.depth&&(Xe=B.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,we=B.stencil?zo:Bo,Ge=B.stencil?Oo:Cr);const lt={colorFormat:i.RGBA8,depthFormat:Xe,scaleFactor:u};x=this.getBinding(),v=x.createProjectionLayer(lt),l.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),z=new Qa(v.textureWidth,v.textureHeight,{format:bi,type:da,depthTexture:new Px(v.textureWidth,v.textureHeight,Ge,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:B.stencil,colorSpace:t.outputColorSpace,samples:B.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const we={antialias:B.antialias,alpha:!0,depth:B.depth,stencil:B.stencil,framebufferScaleFactor:u};b=new XRWebGLLayer(l,i,we),l.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),z=new Qa(b.framebufferWidth,b.framebufferHeight,{format:bi,type:da,colorSpace:t.outputColorSpace,stencilBuffer:B.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}z.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Oe.setContext(l),Oe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function j(te){for(let le=0;le<te.removed.length;le++){const we=te.removed[le],Ge=N.indexOf(we);Ge>=0&&(N[Ge]=null,k[Ge].disconnect(we))}for(let le=0;le<te.added.length;le++){const we=te.added[le];let Ge=N.indexOf(we);if(Ge===-1){for(let lt=0;lt<k.length;lt++)if(lt>=N.length){N.push(we),Ge=lt;break}else if(N[lt]===null){N[lt]=we,Ge=lt;break}if(Ge===-1)break}const Xe=k[Ge];Xe&&Xe.connect(we)}}const q=new ce,_e=new ce;function Ae(te,le,we){q.setFromMatrixPosition(le.matrixWorld),_e.setFromMatrixPosition(we.matrixWorld);const Ge=q.distanceTo(_e),Xe=le.projectionMatrix.elements,lt=we.projectionMatrix.elements,en=Xe[14]/(Xe[10]-1),dt=Xe[14]/(Xe[10]+1),Et=(Xe[9]+1)/Xe[5],F=(Xe[9]-1)/Xe[5],ht=(Xe[8]-1)/Xe[0],mt=(lt[8]+1)/lt[0],It=en*ht,He=en*mt,kt=Ge/(-ht+mt),je=kt*-ht;if(le.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(je),te.translateZ(kt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Xe[10]===-1)te.projectionMatrix.copy(le.projectionMatrix),te.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const at=en+kt,D=dt+kt,y=It-je,J=He+(Ge-je),pe=Et*dt/D*at,ve=F*dt/D*at;te.projectionMatrix.makePerspective(y,J,pe,ve,at,D),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function L(te,le){le===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(le.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(l===null)return;let le=te.near,we=te.far;S.texture!==null&&(S.depthNear>0&&(le=S.depthNear),S.depthFar>0&&(we=S.depthFar)),ee.near=R.near=w.near=le,ee.far=R.far=w.far=we,(oe!==ee.near||ge!==ee.far)&&(l.updateRenderState({depthNear:ee.near,depthFar:ee.far}),oe=ee.near,ge=ee.far),ee.layers.mask=te.layers.mask|6,w.layers.mask=ee.layers.mask&3,R.layers.mask=ee.layers.mask&5;const Ge=te.parent,Xe=ee.cameras;L(ee,Ge);for(let lt=0;lt<Xe.length;lt++)L(Xe[lt],Ge);Xe.length===2?Ae(ee,w,R):ee.projectionMatrix.copy(w.projectionMatrix),ae(te,ee,Ge)};function ae(te,le,we){we===null?te.matrix.copy(le.matrixWorld):(te.matrix.copy(we.matrixWorld),te.matrix.invert(),te.matrix.multiply(le.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(le.projectionMatrix),te.projectionMatrixInverse.copy(le.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=dh*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return ee},this.getFoveation=function(){if(!(v===null&&b===null))return m},this.setFoveation=function(te){m=te,v!==null&&(v.fixedFoveation=te),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=te)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(ee)},this.getCameraTexture=function(te){return A[te]};let be=null;function Ee(te,le){if(_=le.getViewerPose(p||d),T=le,_!==null){const we=_.views;b!==null&&(t.setRenderTargetFramebuffer(z,b.framebuffer),t.setRenderTarget(z));let Ge=!1;we.length!==ee.cameras.length&&(ee.cameras.length=0,Ge=!0);for(let dt=0;dt<we.length;dt++){const Et=we[dt];let F=null;if(b!==null)F=b.getViewport(Et);else{const mt=x.getViewSubImage(v,Et);F=mt.viewport,dt===0&&(t.setRenderTargetTextures(z,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(z))}let ht=V[dt];ht===void 0&&(ht=new vi,ht.layers.enable(dt),ht.viewport=new rn,V[dt]=ht),ht.matrix.fromArray(Et.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Et.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(F.x,F.y,F.width,F.height),dt===0&&(ee.matrix.copy(ht.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale)),Ge===!0&&ee.cameras.push(ht)}const Xe=l.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){x=r.getBinding();const dt=x.getDepthInformation(we[0]);dt&&dt.isValid&&dt.texture&&S.init(dt,l.renderState)}if(Xe&&Xe.includes("camera-access")&&C){t.state.unbindTexture(),x=r.getBinding();for(let dt=0;dt<we.length;dt++){const Et=we[dt].camera;if(Et){let F=A[Et];F||(F=new Fx,A[Et]=F);const ht=x.getCameraImage(Et);F.sourceTexture=ht}}}}for(let we=0;we<k.length;we++){const Ge=N[we],Xe=k[we];Ge!==null&&Xe!==void 0&&Xe.update(Ge,le,p||d)}be&&be(te,le),le.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:le}),T=null}const Oe=new Hx;Oe.setAnimationLoop(Ee),this.setAnimationLoop=function(te){be=te},this.dispose=function(){}}}const vr=new ha,pE=new mn;function mE(o,t){function i(S,A){S.matrixAutoUpdate===!0&&S.updateMatrix(),A.value.copy(S.matrix)}function r(S,A){A.color.getRGB(S.fogColor.value,Ix(o)),A.isFog?(S.fogNear.value=A.near,S.fogFar.value=A.far):A.isFogExp2&&(S.fogDensity.value=A.density)}function l(S,A,B,U,z){A.isMeshBasicMaterial||A.isMeshLambertMaterial?u(S,A):A.isMeshToonMaterial?(u(S,A),x(S,A)):A.isMeshPhongMaterial?(u(S,A),_(S,A)):A.isMeshStandardMaterial?(u(S,A),v(S,A),A.isMeshPhysicalMaterial&&b(S,A,z)):A.isMeshMatcapMaterial?(u(S,A),T(S,A)):A.isMeshDepthMaterial?u(S,A):A.isMeshDistanceMaterial?(u(S,A),C(S,A)):A.isMeshNormalMaterial?u(S,A):A.isLineBasicMaterial?(d(S,A),A.isLineDashedMaterial&&h(S,A)):A.isPointsMaterial?m(S,A,B,U):A.isSpriteMaterial?p(S,A):A.isShadowMaterial?(S.color.value.copy(A.color),S.opacity.value=A.opacity):A.isShaderMaterial&&(A.uniformsNeedUpdate=!1)}function u(S,A){S.opacity.value=A.opacity,A.color&&S.diffuse.value.copy(A.color),A.emissive&&S.emissive.value.copy(A.emissive).multiplyScalar(A.emissiveIntensity),A.map&&(S.map.value=A.map,i(A.map,S.mapTransform)),A.alphaMap&&(S.alphaMap.value=A.alphaMap,i(A.alphaMap,S.alphaMapTransform)),A.bumpMap&&(S.bumpMap.value=A.bumpMap,i(A.bumpMap,S.bumpMapTransform),S.bumpScale.value=A.bumpScale,A.side===Vn&&(S.bumpScale.value*=-1)),A.normalMap&&(S.normalMap.value=A.normalMap,i(A.normalMap,S.normalMapTransform),S.normalScale.value.copy(A.normalScale),A.side===Vn&&S.normalScale.value.negate()),A.displacementMap&&(S.displacementMap.value=A.displacementMap,i(A.displacementMap,S.displacementMapTransform),S.displacementScale.value=A.displacementScale,S.displacementBias.value=A.displacementBias),A.emissiveMap&&(S.emissiveMap.value=A.emissiveMap,i(A.emissiveMap,S.emissiveMapTransform)),A.specularMap&&(S.specularMap.value=A.specularMap,i(A.specularMap,S.specularMapTransform)),A.alphaTest>0&&(S.alphaTest.value=A.alphaTest);const B=t.get(A),U=B.envMap,z=B.envMapRotation;U&&(S.envMap.value=U,vr.copy(z),vr.x*=-1,vr.y*=-1,vr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),S.envMapRotation.value.setFromMatrix4(pE.makeRotationFromEuler(vr)),S.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=A.reflectivity,S.ior.value=A.ior,S.refractionRatio.value=A.refractionRatio),A.lightMap&&(S.lightMap.value=A.lightMap,S.lightMapIntensity.value=A.lightMapIntensity,i(A.lightMap,S.lightMapTransform)),A.aoMap&&(S.aoMap.value=A.aoMap,S.aoMapIntensity.value=A.aoMapIntensity,i(A.aoMap,S.aoMapTransform))}function d(S,A){S.diffuse.value.copy(A.color),S.opacity.value=A.opacity,A.map&&(S.map.value=A.map,i(A.map,S.mapTransform))}function h(S,A){S.dashSize.value=A.dashSize,S.totalSize.value=A.dashSize+A.gapSize,S.scale.value=A.scale}function m(S,A,B,U){S.diffuse.value.copy(A.color),S.opacity.value=A.opacity,S.size.value=A.size*B,S.scale.value=U*.5,A.map&&(S.map.value=A.map,i(A.map,S.uvTransform)),A.alphaMap&&(S.alphaMap.value=A.alphaMap,i(A.alphaMap,S.alphaMapTransform)),A.alphaTest>0&&(S.alphaTest.value=A.alphaTest)}function p(S,A){S.diffuse.value.copy(A.color),S.opacity.value=A.opacity,S.rotation.value=A.rotation,A.map&&(S.map.value=A.map,i(A.map,S.mapTransform)),A.alphaMap&&(S.alphaMap.value=A.alphaMap,i(A.alphaMap,S.alphaMapTransform)),A.alphaTest>0&&(S.alphaTest.value=A.alphaTest)}function _(S,A){S.specular.value.copy(A.specular),S.shininess.value=Math.max(A.shininess,1e-4)}function x(S,A){A.gradientMap&&(S.gradientMap.value=A.gradientMap)}function v(S,A){S.metalness.value=A.metalness,A.metalnessMap&&(S.metalnessMap.value=A.metalnessMap,i(A.metalnessMap,S.metalnessMapTransform)),S.roughness.value=A.roughness,A.roughnessMap&&(S.roughnessMap.value=A.roughnessMap,i(A.roughnessMap,S.roughnessMapTransform)),A.envMap&&(S.envMapIntensity.value=A.envMapIntensity)}function b(S,A,B){S.ior.value=A.ior,A.sheen>0&&(S.sheenColor.value.copy(A.sheenColor).multiplyScalar(A.sheen),S.sheenRoughness.value=A.sheenRoughness,A.sheenColorMap&&(S.sheenColorMap.value=A.sheenColorMap,i(A.sheenColorMap,S.sheenColorMapTransform)),A.sheenRoughnessMap&&(S.sheenRoughnessMap.value=A.sheenRoughnessMap,i(A.sheenRoughnessMap,S.sheenRoughnessMapTransform))),A.clearcoat>0&&(S.clearcoat.value=A.clearcoat,S.clearcoatRoughness.value=A.clearcoatRoughness,A.clearcoatMap&&(S.clearcoatMap.value=A.clearcoatMap,i(A.clearcoatMap,S.clearcoatMapTransform)),A.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=A.clearcoatRoughnessMap,i(A.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),A.clearcoatNormalMap&&(S.clearcoatNormalMap.value=A.clearcoatNormalMap,i(A.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(A.clearcoatNormalScale),A.side===Vn&&S.clearcoatNormalScale.value.negate())),A.dispersion>0&&(S.dispersion.value=A.dispersion),A.iridescence>0&&(S.iridescence.value=A.iridescence,S.iridescenceIOR.value=A.iridescenceIOR,S.iridescenceThicknessMinimum.value=A.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=A.iridescenceThicknessRange[1],A.iridescenceMap&&(S.iridescenceMap.value=A.iridescenceMap,i(A.iridescenceMap,S.iridescenceMapTransform)),A.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=A.iridescenceThicknessMap,i(A.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),A.transmission>0&&(S.transmission.value=A.transmission,S.transmissionSamplerMap.value=B.texture,S.transmissionSamplerSize.value.set(B.width,B.height),A.transmissionMap&&(S.transmissionMap.value=A.transmissionMap,i(A.transmissionMap,S.transmissionMapTransform)),S.thickness.value=A.thickness,A.thicknessMap&&(S.thicknessMap.value=A.thicknessMap,i(A.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=A.attenuationDistance,S.attenuationColor.value.copy(A.attenuationColor)),A.anisotropy>0&&(S.anisotropyVector.value.set(A.anisotropy*Math.cos(A.anisotropyRotation),A.anisotropy*Math.sin(A.anisotropyRotation)),A.anisotropyMap&&(S.anisotropyMap.value=A.anisotropyMap,i(A.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=A.specularIntensity,S.specularColor.value.copy(A.specularColor),A.specularColorMap&&(S.specularColorMap.value=A.specularColorMap,i(A.specularColorMap,S.specularColorMapTransform)),A.specularIntensityMap&&(S.specularIntensityMap.value=A.specularIntensityMap,i(A.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,A){A.matcap&&(S.matcap.value=A.matcap)}function C(S,A){const B=t.get(A).light;S.referencePosition.value.setFromMatrixPosition(B.matrixWorld),S.nearDistance.value=B.shadow.camera.near,S.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function gE(o,t,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,U){const z=U.program;r.uniformBlockBinding(B,z)}function p(B,U){let z=l[B.id];z===void 0&&(T(B),z=_(B),l[B.id]=z,B.addEventListener("dispose",S));const k=U.program;r.updateUBOMapping(B,k);const N=t.render.frame;u[B.id]!==N&&(v(B),u[B.id]=N)}function _(B){const U=x();B.__bindingPointIndex=U;const z=o.createBuffer(),k=B.__size,N=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,z),o.bufferData(o.UNIFORM_BUFFER,k,N),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,z),z}function x(){for(let B=0;B<h;B++)if(d.indexOf(B)===-1)return d.push(B),B;return an("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(B){const U=l[B.id],z=B.uniforms,k=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let N=0,P=z.length;N<P;N++){const ne=Array.isArray(z[N])?z[N]:[z[N]];for(let w=0,R=ne.length;w<R;w++){const V=ne[w];if(b(V,N,w,k)===!0){const ee=V.__offset,oe=Array.isArray(V.value)?V.value:[V.value];let ge=0;for(let fe=0;fe<oe.length;fe++){const O=oe[fe],j=C(O);typeof O=="number"||typeof O=="boolean"?(V.__data[0]=O,o.bufferSubData(o.UNIFORM_BUFFER,ee+ge,V.__data)):O.isMatrix3?(V.__data[0]=O.elements[0],V.__data[1]=O.elements[1],V.__data[2]=O.elements[2],V.__data[3]=0,V.__data[4]=O.elements[3],V.__data[5]=O.elements[4],V.__data[6]=O.elements[5],V.__data[7]=0,V.__data[8]=O.elements[6],V.__data[9]=O.elements[7],V.__data[10]=O.elements[8],V.__data[11]=0):(O.toArray(V.__data,ge),ge+=j.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ee,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function b(B,U,z,k){const N=B.value,P=U+"_"+z;if(k[P]===void 0)return typeof N=="number"||typeof N=="boolean"?k[P]=N:k[P]=N.clone(),!0;{const ne=k[P];if(typeof N=="number"||typeof N=="boolean"){if(ne!==N)return k[P]=N,!0}else if(ne.equals(N)===!1)return ne.copy(N),!0}return!1}function T(B){const U=B.uniforms;let z=0;const k=16;for(let P=0,ne=U.length;P<ne;P++){const w=Array.isArray(U[P])?U[P]:[U[P]];for(let R=0,V=w.length;R<V;R++){const ee=w[R],oe=Array.isArray(ee.value)?ee.value:[ee.value];for(let ge=0,fe=oe.length;ge<fe;ge++){const O=oe[ge],j=C(O),q=z%k,_e=q%j.boundary,Ae=q+_e;z+=_e,Ae!==0&&k-Ae<j.storage&&(z+=k-Ae),ee.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=z,z+=j.storage}}}const N=z%k;return N>0&&(z+=k-N),B.__size=z,B.__cache={},this}function C(B){const U={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(U.boundary=4,U.storage=4):B.isVector2?(U.boundary=8,U.storage=8):B.isVector3||B.isColor?(U.boundary=16,U.storage=12):B.isVector4?(U.boundary=16,U.storage=16):B.isMatrix3?(U.boundary=48,U.storage=48):B.isMatrix4?(U.boundary=64,U.storage=64):B.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ot("WebGLRenderer: Unsupported uniform value type.",B),U}function S(B){const U=B.target;U.removeEventListener("dispose",S);const z=d.indexOf(U.__bindingPointIndex);d.splice(z,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function A(){for(const B in l)o.deleteBuffer(l[B]);d=[],l={},u={}}return{bind:m,update:p,dispose:A}}const xE=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let ra=null;function _E(){return ra===null&&(ra=new ES(xE,32,32,Sh,ws),ra.minFilter=di,ra.magFilter=di,ra.wrapS=la,ra.wrapT=la,ra.generateMipmaps=!1,ra.needsUpdate=!0),ra}class AE{constructor(t={}){const{canvas:i=Zv(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:v=!1}=t;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=d;const T=new Set([yh,bh,vh]),C=new Set([da,Cr,Io,Oo,_h,Ah]),S=new Uint32Array(4),A=new Int32Array(4);let B=null,U=null;const z=[],k=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let P=!1;this._outputColorSpace=fi;let ne=0,w=0,R=null,V=-1,ee=null;const oe=new rn,ge=new rn;let fe=null;const O=new Vt(0);let j=0,q=i.width,_e=i.height,Ae=1,L=null,ae=null;const be=new rn(0,0,q,_e),Ee=new rn(0,0,q,_e);let Oe=!1;const te=new zx;let le=!1,we=!1;const Ge=new mn,Xe=new ce,lt=new rn,en={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Et(){return R===null?Ae:1}let F=r;function ht(E,X){return i.getContext(E,X)}try{const E={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:x};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${gh}`),i.addEventListener("webglcontextlost",ye,!1),i.addEventListener("webglcontextrestored",xe,!1),i.addEventListener("webglcontextcreationerror",ze,!1),F===null){const X="webgl2";if(F=ht(X,E),F===null)throw ht(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw E("WebGLRenderer: "+E.message),E}let mt,It,He,kt,je,at,D,y,J,pe,ve,se,We,Le,Ze,Ye,Se,Me,qe,Ve,Ie,nt,G,De;function Ce(){mt=new CM(F),mt.init(),nt=new cE(F,mt),It=new _M(F,mt,t,nt),He=new oE(F,mt),It.reversedDepthBuffer&&v&&He.buffers.depth.setReversed(!0),kt=new DM(F),je=new j1,at=new lE(F,mt,He,je,It,nt,kt),D=new vM(N),y=new TM(N),J=new IS(F),G=new gM(F,J),pe=new RM(F,J,kt,G),ve=new LM(F,pe,J,kt),qe=new UM(F,It,at),Ye=new AM(je),se=new q1(N,D,y,mt,It,G,Ye),We=new mE(N,je),Le=new J1,Ze=new nE(mt),Me=new mM(N,D,y,He,ve,b,m),Se=new rE(N,ve,It),De=new gE(F,kt,It,He),Ve=new xM(F,mt,kt),Ie=new wM(F,mt,kt),kt.programs=se.programs,N.capabilities=It,N.extensions=mt,N.properties=je,N.renderLists=Le,N.shadowMap=Se,N.state=He,N.info=kt}Ce();const Re=new hE(N,F);this.xr=Re,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=mt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=mt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Ae},this.setPixelRatio=function(E){E!==void 0&&(Ae=E,this.setSize(q,_e,!1))},this.getSize=function(E){return E.set(q,_e)},this.setSize=function(E,X,ie=!0){if(Re.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,_e=X,i.width=Math.floor(E*Ae),i.height=Math.floor(X*Ae),ie===!0&&(i.style.width=E+"px",i.style.height=X+"px"),this.setViewport(0,0,E,X)},this.getDrawingBufferSize=function(E){return E.set(q*Ae,_e*Ae).floor()},this.setDrawingBufferSize=function(E,X,ie){q=E,_e=X,Ae=ie,i.width=Math.floor(E*ie),i.height=Math.floor(X*ie),this.setViewport(0,0,E,X)},this.getCurrentViewport=function(E){return E.copy(oe)},this.getViewport=function(E){return E.copy(be)},this.setViewport=function(E,X,ie,K){E.isVector4?be.set(E.x,E.y,E.z,E.w):be.set(E,X,ie,K),He.viewport(oe.copy(be).multiplyScalar(Ae).round())},this.getScissor=function(E){return E.copy(Ee)},this.setScissor=function(E,X,ie,K){E.isVector4?Ee.set(E.x,E.y,E.z,E.w):Ee.set(E,X,ie,K),He.scissor(ge.copy(Ee).multiplyScalar(Ae).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(E){He.setScissorTest(Oe=E)},this.setOpaqueSort=function(E){L=E},this.setTransparentSort=function(E){ae=E},this.getClearColor=function(E){return E.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(E=!0,X=!0,ie=!0){let K=0;if(E){let W=!1;if(R!==null){const Te=R.texture.format;W=T.has(Te)}if(W){const Te=R.texture.type,Ue=C.has(Te),Be=Me.getClearColor(),Pe=Me.getClearAlpha(),$e=Be.r,tt=Be.g,Qe=Be.b;Ue?(S[0]=$e,S[1]=tt,S[2]=Qe,S[3]=Pe,F.clearBufferuiv(F.COLOR,0,S)):(A[0]=$e,A[1]=tt,A[2]=Qe,A[3]=Pe,F.clearBufferiv(F.COLOR,0,A))}else K|=F.COLOR_BUFFER_BIT}X&&(K|=F.DEPTH_BUFFER_BIT),ie&&(K|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ye,!1),i.removeEventListener("webglcontextrestored",xe,!1),i.removeEventListener("webglcontextcreationerror",ze,!1),Me.dispose(),Le.dispose(),Ze.dispose(),je.dispose(),D.dispose(),y.dispose(),ve.dispose(),G.dispose(),De.dispose(),se.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Ls),Re.removeEventListener("sessionend",Ns),hi.stop()};function ye(E){E.preventDefault(),Mg("WebGLRenderer: Context Lost."),P=!0}function xe(){Mg("WebGLRenderer: Context Restored."),P=!1;const E=kt.autoReset,X=Se.enabled,ie=Se.autoUpdate,K=Se.needsUpdate,W=Se.type;Ce(),kt.autoReset=E,Se.enabled=X,Se.autoUpdate=ie,Se.needsUpdate=K,Se.type=W}function ze(E){an("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function it(E){const X=E.target;X.removeEventListener("dispose",it),zt(X)}function zt(E){Tt(E),je.remove(E)}function Tt(E){const X=je.get(E).programs;X!==void 0&&(X.forEach(function(ie){se.releaseProgram(ie)}),E.isShaderMaterial&&se.releaseShaderCache(E))}this.renderBufferDirect=function(E,X,ie,K,W,Te){X===null&&(X=en);const Ue=W.isMesh&&W.matrixWorld.determinant()<0,Be=Oc(E,X,ie,K,W);He.setMaterial(K,Ue);let Pe=ie.index,$e=1;if(K.wireframe===!0){if(Pe=pe.getWireframeAttribute(ie),Pe===void 0)return;$e=2}const tt=ie.drawRange,Qe=ie.attributes.position;let ct=tt.start*$e,Mt=(tt.start+tt.count)*$e;Te!==null&&(ct=Math.max(ct,Te.start*$e),Mt=Math.min(Mt,(Te.start+Te.count)*$e)),Pe!==null?(ct=Math.max(ct,0),Mt=Math.min(Mt,Pe.count)):Qe!=null&&(ct=Math.max(ct,0),Mt=Math.min(Mt,Qe.count));const Ct=Mt-ct;if(Ct<0||Ct===1/0)return;G.setup(W,K,Be,ie,Pe);let vt,Nt=Ve;if(Pe!==null&&(vt=J.get(Pe),Nt=Ie,Nt.setIndex(vt)),W.isMesh)K.wireframe===!0?(He.setLineWidth(K.wireframeLinewidth*Et()),Nt.setMode(F.LINES)):Nt.setMode(F.TRIANGLES);else if(W.isLine){let Ke=K.linewidth;Ke===void 0&&(Ke=1),He.setLineWidth(Ke*Et()),W.isLineSegments?Nt.setMode(F.LINES):W.isLineLoop?Nt.setMode(F.LINE_LOOP):Nt.setMode(F.LINE_STRIP)}else W.isPoints?Nt.setMode(F.POINTS):W.isSprite&&Nt.setMode(F.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)Po("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Nt.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))Nt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const Ke=W._multiDrawStarts,Xt=W._multiDrawCounts,St=W._multiDrawCount,_n=Pe?J.get(Pe).bytesPerElement:1,ma=je.get(K).currentProgram.getUniforms();for(let Wt=0;Wt<St;Wt++)ma.setValue(F,"_gl_DrawID",Wt),Nt.render(Ke[Wt]/_n,Xt[Wt])}else if(W.isInstancedMesh)Nt.renderInstances(ct,Ct,W.count);else if(ie.isInstancedBufferGeometry){const Ke=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Xt=Math.min(ie.instanceCount,Ke);Nt.renderInstances(ct,Ct,Xt)}else Nt.render(ct,Ct)};function Rn(E,X,ie){E.transparent===!0&&E.side===oa&&E.forceSinglePass===!1?(E.side=Vn,E.needsUpdate=!0,dn(E,X,ie),E.side=ja,E.needsUpdate=!0,dn(E,X,ie),E.side=oa):dn(E,X,ie)}this.compile=function(E,X,ie=null){ie===null&&(ie=E),U=Ze.get(ie),U.init(X),k.push(U),ie.traverseVisible(function(W){W.isLight&&W.layers.test(X.layers)&&(U.pushLight(W),W.castShadow&&U.pushShadow(W))}),E!==ie&&E.traverseVisible(function(W){W.isLight&&W.layers.test(X.layers)&&(U.pushLight(W),W.castShadow&&U.pushShadow(W))}),U.setupLights();const K=new Set;return E.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const Te=W.material;if(Te)if(Array.isArray(Te))for(let Ue=0;Ue<Te.length;Ue++){const Be=Te[Ue];Rn(Be,ie,W),K.add(Be)}else Rn(Te,ie,W),K.add(Te)}),U=k.pop(),K},this.compileAsync=function(E,X,ie=null){const K=this.compile(E,X,ie);return new Promise(W=>{function Te(){if(K.forEach(function(Ue){je.get(Ue).currentProgram.isReady()&&K.delete(Ue)}),K.size===0){W(E);return}setTimeout(Te,10)}mt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let kn=null;function ko(E){kn&&kn(E)}function Ls(){hi.stop()}function Ns(){hi.start()}const hi=new Hx;hi.setAnimationLoop(ko),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(E){kn=E,Re.setAnimationLoop(E),E===null?hi.stop():hi.start()},Re.addEventListener("sessionstart",Ls),Re.addEventListener("sessionend",Ns),this.render=function(E,X){if(X!==void 0&&X.isCamera!==!0){an("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(X),X=Re.getCamera()),E.isScene===!0&&E.onBeforeRender(N,E,X,R),U=Ze.get(E,k.length),U.init(X),k.push(U),Ge.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),te.setFromProjectionMatrix(Ge,Ui,X.reversedDepth),we=this.localClippingEnabled,le=Ye.init(this.clippingPlanes,we),B=Le.get(E,z.length),B.init(),z.push(B),Re.enabled===!0&&Re.isPresenting===!0){const Te=N.xr.getDepthSensingMesh();Te!==null&&Za(Te,X,-1/0,N.sortObjects)}Za(E,X,0,N.sortObjects),B.finish(),N.sortObjects===!0&&B.sort(L,ae),dt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,dt&&Me.addToRenderList(B,E),this.info.render.frame++,le===!0&&Ye.beginShadows();const ie=U.state.shadowsArray;Se.render(ie,E,X),le===!0&&Ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=B.opaque,W=B.transmissive;if(U.setupLights(),X.isArrayCamera){const Te=X.cameras;if(W.length>0)for(let Ue=0,Be=Te.length;Ue<Be;Ue++){const Pe=Te[Ue];Os(K,W,E,Pe)}dt&&Me.render(E);for(let Ue=0,Be=Te.length;Ue<Be;Ue++){const Pe=Te[Ue];Is(B,E,Pe,Pe.viewport)}}else W.length>0&&Os(K,W,E,X),dt&&Me.render(E),Is(B,E,X);R!==null&&w===0&&(at.updateMultisampleRenderTarget(R),at.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(N,E,X),G.resetDefaultState(),V=-1,ee=null,k.pop(),k.length>0?(U=k[k.length-1],le===!0&&Ye.setGlobalState(N.clippingPlanes,U.state.camera)):U=null,z.pop(),z.length>0?B=z[z.length-1]:B=null};function Za(E,X,ie,K){if(E.visible===!1)return;if(E.layers.test(X.layers)){if(E.isGroup)ie=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(X);else if(E.isLight)U.pushLight(E),E.castShadow&&U.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||te.intersectsSprite(E)){K&&lt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ge);const Ue=ve.update(E),Be=E.material;Be.visible&&B.push(E,Ue,Be,ie,lt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||te.intersectsObject(E))){const Ue=ve.update(E),Be=E.material;if(K&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),lt.copy(E.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),lt.copy(Ue.boundingSphere.center)),lt.applyMatrix4(E.matrixWorld).applyMatrix4(Ge)),Array.isArray(Be)){const Pe=Ue.groups;for(let $e=0,tt=Pe.length;$e<tt;$e++){const Qe=Pe[$e],ct=Be[Qe.materialIndex];ct&&ct.visible&&B.push(E,Ue,ct,ie,lt.z,Qe)}}else Be.visible&&B.push(E,Ue,Be,ie,lt.z,null)}}const Te=E.children;for(let Ue=0,Be=Te.length;Ue<Be;Ue++)Za(Te[Ue],X,ie,K)}function Is(E,X,ie,K){const{opaque:W,transmissive:Te,transparent:Ue}=E;U.setupLightsView(ie),le===!0&&Ye.setGlobalState(N.clippingPlanes,ie),K&&He.viewport(oe.copy(K)),W.length>0&&Xn(W,X,ie),Te.length>0&&Xn(Te,X,ie),Ue.length>0&&Xn(Ue,X,ie),He.buffers.depth.setTest(!0),He.buffers.depth.setMask(!0),He.buffers.color.setMask(!0),He.setPolygonOffset(!1)}function Os(E,X,ie,K){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;U.state.transmissionRenderTarget[K.id]===void 0&&(U.state.transmissionRenderTarget[K.id]=new Qa(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?ws:da,minFilter:Er,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace}));const Te=U.state.transmissionRenderTarget[K.id],Ue=K.viewport||oe;Te.setSize(Ue.z*N.transmissionResolutionScale,Ue.w*N.transmissionResolutionScale);const Be=N.getRenderTarget(),Pe=N.getActiveCubeFace(),$e=N.getActiveMipmapLevel();N.setRenderTarget(Te),N.getClearColor(O),j=N.getClearAlpha(),j<1&&N.setClearColor(16777215,.5),N.clear(),dt&&Me.render(ie);const tt=N.toneMapping;N.toneMapping=qa;const Qe=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),U.setupLightsView(K),le===!0&&Ye.setGlobalState(N.clippingPlanes,K),Xn(E,ie,K),at.updateMultisampleRenderTarget(Te),at.updateRenderTargetMipmap(Te),mt.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Mt=0,Ct=X.length;Mt<Ct;Mt++){const vt=X[Mt],{object:Nt,geometry:Ke,material:Xt,group:St}=vt;if(Xt.side===oa&&Nt.layers.test(K.layers)){const _n=Xt.side;Xt.side=Vn,Xt.needsUpdate=!0,sn(Nt,ie,K,Ke,Xt,St),Xt.side=_n,Xt.needsUpdate=!0,ct=!0}}ct===!0&&(at.updateMultisampleRenderTarget(Te),at.updateRenderTargetMipmap(Te))}N.setRenderTarget(Be,Pe,$e),N.setClearColor(O,j),Qe!==void 0&&(K.viewport=Qe),N.toneMapping=tt}function Xn(E,X,ie){const K=X.isScene===!0?X.overrideMaterial:null;for(let W=0,Te=E.length;W<Te;W++){const Ue=E[W],{object:Be,geometry:Pe,group:$e}=Ue;let tt=Ue.material;tt.allowOverride===!0&&K!==null&&(tt=K),Be.layers.test(ie.layers)&&sn(Be,X,ie,Pe,tt,$e)}}function sn(E,X,ie,K,W,Te){E.onBeforeRender(N,X,ie,K,W,Te),E.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),W.onBeforeRender(N,X,ie,K,E,Te),W.transparent===!0&&W.side===oa&&W.forceSinglePass===!1?(W.side=Vn,W.needsUpdate=!0,N.renderBufferDirect(ie,X,K,W,E,Te),W.side=ja,W.needsUpdate=!0,N.renderBufferDirect(ie,X,K,W,E,Te),W.side=oa):N.renderBufferDirect(ie,X,K,W,E,Te),E.onAfterRender(N,X,ie,K,W,Te)}function dn(E,X,ie){X.isScene!==!0&&(X=en);const K=je.get(E),W=U.state.lights,Te=U.state.shadowsArray,Ue=W.state.version,Be=se.getParameters(E,W.state,Te,X,ie),Pe=se.getProgramCacheKey(Be);let $e=K.programs;K.environment=E.isMeshStandardMaterial?X.environment:null,K.fog=X.fog,K.envMap=(E.isMeshStandardMaterial?y:D).get(E.envMap||K.environment),K.envMapRotation=K.environment!==null&&E.envMap===null?X.environmentRotation:E.envMapRotation,$e===void 0&&(E.addEventListener("dispose",it),$e=new Map,K.programs=$e);let tt=$e.get(Pe);if(tt!==void 0){if(K.currentProgram===tt&&K.lightsStateVersion===Ue)return Rr(E,Be),tt}else Be.uniforms=se.getUniforms(E),E.onBeforeCompile(Be,N),tt=se.acquireProgram(Be,Pe),$e.set(Pe,tt),K.uniforms=Be.uniforms;const Qe=K.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Qe.clippingPlanes=Ye.uniform),Rr(E,Be),K.needsLights=Xo(E),K.lightsStateVersion=Ue,K.needsLights&&(Qe.ambientLightColor.value=W.state.ambient,Qe.lightProbe.value=W.state.probe,Qe.directionalLights.value=W.state.directional,Qe.directionalLightShadows.value=W.state.directionalShadow,Qe.spotLights.value=W.state.spot,Qe.spotLightShadows.value=W.state.spotShadow,Qe.rectAreaLights.value=W.state.rectArea,Qe.ltc_1.value=W.state.rectAreaLTC1,Qe.ltc_2.value=W.state.rectAreaLTC2,Qe.pointLights.value=W.state.point,Qe.pointLightShadows.value=W.state.pointShadow,Qe.hemisphereLights.value=W.state.hemi,Qe.directionalShadowMap.value=W.state.directionalShadowMap,Qe.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Qe.spotShadowMap.value=W.state.spotShadowMap,Qe.spotLightMatrix.value=W.state.spotLightMatrix,Qe.spotLightMap.value=W.state.spotLightMap,Qe.pointShadowMap.value=W.state.pointShadowMap,Qe.pointShadowMatrix.value=W.state.pointShadowMatrix),K.currentProgram=tt,K.uniformsList=null,tt}function Ii(E){if(E.uniformsList===null){const X=E.currentProgram.getUniforms();E.uniformsList=Tc.seqWithValue(X.seq,E.uniforms)}return E.uniformsList}function Rr(E,X){const ie=je.get(E);ie.outputColorSpace=X.outputColorSpace,ie.batching=X.batching,ie.batchingColor=X.batchingColor,ie.instancing=X.instancing,ie.instancingColor=X.instancingColor,ie.instancingMorph=X.instancingMorph,ie.skinning=X.skinning,ie.morphTargets=X.morphTargets,ie.morphNormals=X.morphNormals,ie.morphColors=X.morphColors,ie.morphTargetsCount=X.morphTargetsCount,ie.numClippingPlanes=X.numClippingPlanes,ie.numIntersection=X.numClipIntersection,ie.vertexAlphas=X.vertexAlphas,ie.vertexTangents=X.vertexTangents,ie.toneMapping=X.toneMapping}function Oc(E,X,ie,K,W){X.isScene!==!0&&(X=en),at.resetTextureUnits();const Te=X.fog,Ue=K.isMeshStandardMaterial?X.environment:null,Be=R===null?N.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ts,Pe=(K.isMeshStandardMaterial?y:D).get(K.envMap||Ue),$e=K.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,tt=!!ie.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Qe=!!ie.morphAttributes.position,ct=!!ie.morphAttributes.normal,Mt=!!ie.morphAttributes.color;let Ct=qa;K.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ct=N.toneMapping);const vt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Nt=vt!==void 0?vt.length:0,Ke=je.get(K),Xt=U.state.lights;if(le===!0&&(we===!0||E!==ee)){const vn=E===ee&&K.id===V;Ye.setState(K,E,vn)}let St=!1;K.version===Ke.__version?(Ke.needsLights&&Ke.lightsStateVersion!==Xt.state.version||Ke.outputColorSpace!==Be||W.isBatchedMesh&&Ke.batching===!1||!W.isBatchedMesh&&Ke.batching===!0||W.isBatchedMesh&&Ke.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Ke.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Ke.instancing===!1||!W.isInstancedMesh&&Ke.instancing===!0||W.isSkinnedMesh&&Ke.skinning===!1||!W.isSkinnedMesh&&Ke.skinning===!0||W.isInstancedMesh&&Ke.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Ke.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Ke.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Ke.instancingMorph===!1&&W.morphTexture!==null||Ke.envMap!==Pe||K.fog===!0&&Ke.fog!==Te||Ke.numClippingPlanes!==void 0&&(Ke.numClippingPlanes!==Ye.numPlanes||Ke.numIntersection!==Ye.numIntersection)||Ke.vertexAlphas!==$e||Ke.vertexTangents!==tt||Ke.morphTargets!==Qe||Ke.morphNormals!==ct||Ke.morphColors!==Mt||Ke.toneMapping!==Ct||Ke.morphTargetsCount!==Nt)&&(St=!0):(St=!0,Ke.__version=K.version);let _n=Ke.currentProgram;St===!0&&(_n=dn(K,X,W));let ma=!1,Wt=!1,Oi=!1;const qt=_n.getUniforms(),An=Ke.uniforms;if(He.useProgram(_n.program)&&(ma=!0,Wt=!0,Oi=!0),K.id!==V&&(V=K.id,Wt=!0),ma||ee!==E){He.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),qt.setValue(F,"projectionMatrix",E.projectionMatrix),qt.setValue(F,"viewMatrix",E.matrixWorldInverse);const yn=qt.map.cameraPosition;yn!==void 0&&yn.setValue(F,Xe.setFromMatrixPosition(E.matrixWorld)),It.logarithmicDepthBuffer&&qt.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&qt.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),ee!==E&&(ee=E,Wt=!0,Oi=!0)}if(W.isSkinnedMesh){qt.setOptional(F,W,"bindMatrix"),qt.setOptional(F,W,"bindMatrixInverse");const vn=W.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),qt.setValue(F,"boneTexture",vn.boneTexture,at))}W.isBatchedMesh&&(qt.setOptional(F,W,"batchingTexture"),qt.setValue(F,"batchingTexture",W._matricesTexture,at),qt.setOptional(F,W,"batchingIdTexture"),qt.setValue(F,"batchingIdTexture",W._indirectTexture,at),qt.setOptional(F,W,"batchingColorTexture"),W._colorsTexture!==null&&qt.setValue(F,"batchingColorTexture",W._colorsTexture,at));const hn=ie.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&qe.update(W,ie,_n),(Wt||Ke.receiveShadow!==W.receiveShadow)&&(Ke.receiveShadow=W.receiveShadow,qt.setValue(F,"receiveShadow",W.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(An.envMap.value=Pe,An.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&X.environment!==null&&(An.envMapIntensity.value=X.environmentIntensity),An.dfgLUT!==void 0&&(An.dfgLUT.value=_E()),Wt&&(qt.setValue(F,"toneMappingExposure",N.toneMappingExposure),Ke.needsLights&&Bc(An,Oi),Te&&K.fog===!0&&We.refreshFogUniforms(An,Te),We.refreshMaterialUniforms(An,K,Ae,_e,U.state.transmissionRenderTarget[E.id]),Tc.upload(F,Ii(Ke),An,at)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Tc.upload(F,Ii(Ke),An,at),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&qt.setValue(F,"center",W.center),qt.setValue(F,"modelViewMatrix",W.modelViewMatrix),qt.setValue(F,"normalMatrix",W.normalMatrix),qt.setValue(F,"modelMatrix",W.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const vn=K.uniformsGroups;for(let yn=0,Mi=vn.length;yn<Mi;yn++){const Bi=vn[yn];De.update(Bi,_n),De.bind(Bi,_n)}}return _n}function Bc(E,X){E.ambientLightColor.needsUpdate=X,E.lightProbe.needsUpdate=X,E.directionalLights.needsUpdate=X,E.directionalLightShadows.needsUpdate=X,E.pointLights.needsUpdate=X,E.pointLightShadows.needsUpdate=X,E.spotLights.needsUpdate=X,E.spotLightShadows.needsUpdate=X,E.rectAreaLights.needsUpdate=X,E.hemisphereLights.needsUpdate=X}function Xo(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,X,ie){const K=je.get(E);K.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),je.get(E.texture).__webglTexture=X,je.get(E.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:ie,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,X){const ie=je.get(E);ie.__webglFramebuffer=X,ie.__useDefaultFramebuffer=X===void 0};const Ka=F.createFramebuffer();this.setRenderTarget=function(E,X=0,ie=0){R=E,ne=X,w=ie;let K=!0,W=null,Te=!1,Ue=!1;if(E){const Pe=je.get(E);if(Pe.__useDefaultFramebuffer!==void 0)He.bindFramebuffer(F.FRAMEBUFFER,null),K=!1;else if(Pe.__webglFramebuffer===void 0)at.setupRenderTarget(E);else if(Pe.__hasExternalTextures)at.rebindTextures(E,je.get(E.texture).__webglTexture,je.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Qe=E.depthTexture;if(Pe.__boundDepthTexture!==Qe){if(Qe!==null&&je.has(Qe)&&(E.width!==Qe.image.width||E.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(E)}}const $e=E.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ue=!0);const tt=je.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(tt[X])?W=tt[X][ie]:W=tt[X],Te=!0):E.samples>0&&at.useMultisampledRTT(E)===!1?W=je.get(E).__webglMultisampledFramebuffer:Array.isArray(tt)?W=tt[ie]:W=tt,oe.copy(E.viewport),ge.copy(E.scissor),fe=E.scissorTest}else oe.copy(be).multiplyScalar(Ae).floor(),ge.copy(Ee).multiplyScalar(Ae).floor(),fe=Oe;if(ie!==0&&(W=Ka),He.bindFramebuffer(F.FRAMEBUFFER,W)&&K&&He.drawBuffers(E,W),He.viewport(oe),He.scissor(ge),He.setScissorTest(fe),Te){const Pe=je.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+X,Pe.__webglTexture,ie)}else if(Ue){const Pe=X;for(let $e=0;$e<E.textures.length;$e++){const tt=je.get(E.textures[$e]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+$e,tt.__webglTexture,ie,Pe)}}else if(E!==null&&ie!==0){const Pe=je.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Pe.__webglTexture,ie)}V=-1},this.readRenderTargetPixels=function(E,X,ie,K,W,Te,Ue,Be=0){if(!(E&&E.isWebGLRenderTarget)){an("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=je.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ue!==void 0&&(Pe=Pe[Ue]),Pe){He.bindFramebuffer(F.FRAMEBUFFER,Pe);try{const $e=E.textures[Be],tt=$e.format,Qe=$e.type;if(!It.textureFormatReadable(tt)){an("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!It.textureTypeReadable(Qe)){an("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=E.width-K&&ie>=0&&ie<=E.height-W&&(E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Be),F.readPixels(X,ie,K,W,nt.convert(tt),nt.convert(Qe),Te))}finally{const $e=R!==null?je.get(R).__webglFramebuffer:null;He.bindFramebuffer(F.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(E,X,ie,K,W,Te,Ue,Be=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Pe=je.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ue!==void 0&&(Pe=Pe[Ue]),Pe)if(X>=0&&X<=E.width-K&&ie>=0&&ie<=E.height-W){He.bindFramebuffer(F.FRAMEBUFFER,Pe);const $e=E.textures[Be],tt=$e.format,Qe=$e.type;if(!It.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!It.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,ct),F.bufferData(F.PIXEL_PACK_BUFFER,Te.byteLength,F.STREAM_READ),E.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+Be),F.readPixels(X,ie,K,W,nt.convert(tt),nt.convert(Qe),0);const Mt=R!==null?je.get(R).__webglFramebuffer:null;He.bindFramebuffer(F.FRAMEBUFFER,Mt);const Ct=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Kv(F,Ct,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,ct),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Te),F.deleteBuffer(ct),F.deleteSync(Ct),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,X=null,ie=0){const K=Math.pow(2,-ie),W=Math.floor(E.image.width*K),Te=Math.floor(E.image.height*K),Ue=X!==null?X.x:0,Be=X!==null?X.y:0;at.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,ie,0,0,Ue,Be,W,Te),He.unbindTexture()};const Bs=F.createFramebuffer(),pa=F.createFramebuffer();this.copyTextureToTexture=function(E,X,ie=null,K=null,W=0,Te=null){Te===null&&(W!==0?(Po("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=W,W=0):Te=0);let Ue,Be,Pe,$e,tt,Qe,ct,Mt,Ct;const vt=E.isCompressedTexture?E.mipmaps[Te]:E.image;if(ie!==null)Ue=ie.max.x-ie.min.x,Be=ie.max.y-ie.min.y,Pe=ie.isBox3?ie.max.z-ie.min.z:1,$e=ie.min.x,tt=ie.min.y,Qe=ie.isBox3?ie.min.z:0;else{const hn=Math.pow(2,-W);Ue=Math.floor(vt.width*hn),Be=Math.floor(vt.height*hn),E.isDataArrayTexture?Pe=vt.depth:E.isData3DTexture?Pe=Math.floor(vt.depth*hn):Pe=1,$e=0,tt=0,Qe=0}K!==null?(ct=K.x,Mt=K.y,Ct=K.z):(ct=0,Mt=0,Ct=0);const Nt=nt.convert(X.format),Ke=nt.convert(X.type);let Xt;X.isData3DTexture?(at.setTexture3D(X,0),Xt=F.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(at.setTexture2DArray(X,0),Xt=F.TEXTURE_2D_ARRAY):(at.setTexture2D(X,0),Xt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,X.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,X.unpackAlignment);const St=F.getParameter(F.UNPACK_ROW_LENGTH),_n=F.getParameter(F.UNPACK_IMAGE_HEIGHT),ma=F.getParameter(F.UNPACK_SKIP_PIXELS),Wt=F.getParameter(F.UNPACK_SKIP_ROWS),Oi=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,vt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,vt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,$e),F.pixelStorei(F.UNPACK_SKIP_ROWS,tt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Qe);const qt=E.isDataArrayTexture||E.isData3DTexture,An=X.isDataArrayTexture||X.isData3DTexture;if(E.isDepthTexture){const hn=je.get(E),vn=je.get(X),yn=je.get(hn.__renderTarget),Mi=je.get(vn.__renderTarget);He.bindFramebuffer(F.READ_FRAMEBUFFER,yn.__webglFramebuffer),He.bindFramebuffer(F.DRAW_FRAMEBUFFER,Mi.__webglFramebuffer);for(let Bi=0;Bi<Pe;Bi++)qt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,je.get(E).__webglTexture,W,Qe+Bi),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,je.get(X).__webglTexture,Te,Ct+Bi)),F.blitFramebuffer($e,tt,Ue,Be,ct,Mt,Ue,Be,F.DEPTH_BUFFER_BIT,F.NEAREST);He.bindFramebuffer(F.READ_FRAMEBUFFER,null),He.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(W!==0||E.isRenderTargetTexture||je.has(E)){const hn=je.get(E),vn=je.get(X);He.bindFramebuffer(F.READ_FRAMEBUFFER,Bs),He.bindFramebuffer(F.DRAW_FRAMEBUFFER,pa);for(let yn=0;yn<Pe;yn++)qt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,hn.__webglTexture,W,Qe+yn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,hn.__webglTexture,W),An?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,vn.__webglTexture,Te,Ct+yn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,vn.__webglTexture,Te),W!==0?F.blitFramebuffer($e,tt,Ue,Be,ct,Mt,Ue,Be,F.COLOR_BUFFER_BIT,F.NEAREST):An?F.copyTexSubImage3D(Xt,Te,ct,Mt,Ct+yn,$e,tt,Ue,Be):F.copyTexSubImage2D(Xt,Te,ct,Mt,$e,tt,Ue,Be);He.bindFramebuffer(F.READ_FRAMEBUFFER,null),He.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else An?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(Xt,Te,ct,Mt,Ct,Ue,Be,Pe,Nt,Ke,vt.data):X.isCompressedArrayTexture?F.compressedTexSubImage3D(Xt,Te,ct,Mt,Ct,Ue,Be,Pe,Nt,vt.data):F.texSubImage3D(Xt,Te,ct,Mt,Ct,Ue,Be,Pe,Nt,Ke,vt):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Te,ct,Mt,Ue,Be,Nt,Ke,vt.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Te,ct,Mt,vt.width,vt.height,Nt,vt.data):F.texSubImage2D(F.TEXTURE_2D,Te,ct,Mt,Ue,Be,Nt,Ke,vt);F.pixelStorei(F.UNPACK_ROW_LENGTH,St),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,_n),F.pixelStorei(F.UNPACK_SKIP_PIXELS,ma),F.pixelStorei(F.UNPACK_SKIP_ROWS,Wt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Oi),Te===0&&X.generateMipmaps&&F.generateMipmap(Xt),He.unbindTexture()},this.initRenderTarget=function(E){je.get(E).__webglFramebuffer===void 0&&at.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?at.setTextureCube(E,0):E.isData3DTexture?at.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?at.setTexture2DArray(E,0):at.setTexture2D(E,0),He.unbindTexture()},this.resetState=function(){ne=0,w=0,R=null,He.reset(),G.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Dt._getUnpackColorSpace()}}const Mr=16,vE=`
  varying vec2 vUv;
  void main(){
    vUv = uv;
    gl_Position = vec4(position,1.0);
  }
`,SE=`
  precision highp float;
  varying vec2 vUv;

  uniform float u_time;
  uniform vec2 u_resolution;

  uniform vec2 u_pos[${Mr}];
  uniform float u_scale[${Mr}];
  uniform float u_timeOffset[${Mr}];
  uniform float u_rot[${Mr}];
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

    for(int i = 0; i < ${Mr}; i++){
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
`,bE=`
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
`,Cc=Array.from({length:Mr}).map((o,t)=>({side:t<Mr/2?-1:1,relX:Math.random(),relY:Math.random()*2.4-1.2,scale:.4+Math.random()*.4,timeOffset:Math.random()*10,rotation:Math.random()*Math.PI*2}));function dx(o){const t=.56*o;return Cc.map(i=>new Ut(i.side*(t+i.relX*o*.58),i.relY))}function yE(o,t){const i=Di.useRef({x:0,y:0});Di.useEffect(()=>{if(!o.current)return;const r=o.current;let l,u,d,h,m,p,_;const x=new LS,v=C=>{if(!o.current)return;const S=o.current.getBoundingClientRect();i.current={x:(C.clientX-S.left)/S.width*2-1,y:-((C.clientY-S.top)/S.height)*2+1}},b=()=>{if(!l||!p||!_||!h)return;const C=window.innerWidth,S=window.innerHeight,A=C/S;l.setSize(C,S),h.setSize(C,S),p.uniforms.u_resolution.value.set(C,S),p.uniforms.u_pos.value=dx(A),_.uniforms.resolution.value.set(C,S)};return window.addEventListener("mousemove",v),window.addEventListener("resize",b),(()=>{const C=window.innerWidth,S=window.innerHeight,A=C/S;for(;r.firstChild;)r.removeChild(r.firstChild);l=new AE({antialias:!0}),l.setSize(C,S),l.setClearColor(16777215,1),r.appendChild(l.domElement);const B=new Gx(-1,1,1,-1,0,1);h=new Qa(C,S),p=new yi({vertexShader:vE,fragmentShader:SE,uniforms:{u_time:{value:0},u_resolution:{value:new Ut(C,S)},u_pos:{value:dx(A)},u_scale:{value:Cc.map(z=>z.scale)},u_timeOffset:{value:Cc.map(z=>z.timeOffset)},u_rot:{value:Cc.map(z=>z.rotation)},u_mouse:{value:new Ut(0,0)}}}),u=new Hg,u.add(new Ni(new Rs(2,2),p)),_=new yi({vertexShader:`
          varying vec2 vUv;
          void main(){ vUv = uv; gl_Position = vec4(position, 1.0); }
        `,fragmentShader:bE,uniforms:{tDiffuse:{value:h.texture},resolution:{value:new Ut(C,S)},charSize:{value:8}}}),d=new Hg,d.add(new Ni(new Rs(2,2),_));const U=()=>{if(m=requestAnimationFrame(U),t?.current)return;const z=x.getElapsedTime();p.uniforms.u_time.value=z,p.uniforms.u_mouse.value.set(i.current.x,i.current.y),l.setRenderTarget(h),l.render(u,B),l.setRenderTarget(null),l.render(d,B)};U()})(),()=>{window.removeEventListener("mousemove",v),window.removeEventListener("resize",b),cancelAnimationFrame(m);try{l&&l.dispose(),h&&h.dispose(),l?.domElement&&r&&r.removeChild(l.domElement)}catch{}}},[])}const ME="/assets/2026-diceplay-BAhFfte8.png",EE="/assets/temp-mainfig-DuKDAKM2.jpg",TE="/assets/futurelab-AxBi0Trq.png",CE="/assets/futurelab_logo-D_TTU1qZ.png",RE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAAD4CAYAAAA0JjXXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABYlJREFUeAHt2c+qVWUcgOFvn3+mmChaOhBqqIWU0KBRcyfVtJk1kaBJNQ2K6hKiLqArsGjcIGgo2CCFMMIiSUyskGOevc9OL8CC2PUe93ke+GANPxa/tV7WtyafPvHcfCyJQ6sb45ObP7z0xa2fPxuhj44/c+ng6vqJZbixq5OVcWnzj/Mf/HLp5RF67ciT75159Oi7d7Zn42E3ubduzbYuv/HTxZMj9Pz+wyc/PHry22vTO2MZHFnd2D7z/dfr9y63R+ydoyfOP733wIvTeb4VdrCVAQD87wQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABBYG8CutD5fXT++sXeMyVgKj6/t2TEfFIfWNg4fW98zZvP5gAcRYNilvrp9/fLr1y4+e2c2+3MsgX1rqxtjZ5h8fPO7Vx77bd/+yWQoMA8kwLB73f3y1vWLg0WbX9nc/PHK2Bzwd/wDBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAsHst4/O/PnprYzltDBZqWQcF+AenT58+8eZbb3/z640bt8cSOHjo4COvnj27d/Sm7x87+flTew+8MB3z8bCb3Fu3ZtOr565eODVYKAGGXWpra2s+m81Wt6bTA2MJTKez7bFD3J3Pt7fm8wPT+Y7Z0r92P8Bb2zOt+A84ggaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAmuDhVtfWZ2uraz8PhljPh5yK2MyWZ+YE4BF82JdvI1zVy+cGsvn/qxMBwAL4Qh68e6O5SS+AAskwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAgb8AkgWATZM97LIAAAAASUVORK5CYII=",wE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAJYCAYAAAC+ZpjcAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAADEtJREFUeAHt2TuLJGQWgOFT3TXVu6wuu6x7wwuKoIGGiqEYCGIomIwigpH4G0wFIwUxMDPwxgSCsYGYqKCBqQNig4Gx47Rod02XoyYamNgv9Ez188D3Ez54zzmLzVUDAEBmZwAASAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiC3njHnj9vtnW/xzdzU3vfL8PPDoI3Oa3nrosdl89fVs5vq3u9iZ4wfvmydef3VO03svvjxHr70zPxxfmevd4ud3x61z/oN35zTtX7w4Xz76zHyz/mG2wb/P/WUe/uLD2dk5/Tn5zaefm90PP5v15njgjzy5/+mcJTZYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAAAxgQUAEBNYAACx5QCcAesfD+eW1V9nFrMV/rPcm2vF7reX53/n9ubKZjPArwQWcCbcdvdd8/WFl+bO1bnZBsdH67kWbK5G1YOvvDA/Xj5wE4HfEFjAmbBarebOe+8ZWovFYv5/y80D/J55AwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrCAM+H4+Hi2zdHR0Zy29Xo92+jw8HDgJJYDcAbs7+/PRx9/MpcuXZptcMONN8yT58/PaVsul/P2U8/O3z6/ONuRWpu58t+b5vH3LwychMACzoTFYvHLtuXg4GC2wd7e3lwrjnd25vvvLs96c/1vCRc/v3/9Y+CknAgBAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGICCwAgJrAAAGLLgRM6t1zO8u83ziwWc73b3Szm4MpmAOAkBBYncnh4OI+/f2G2zXq9nuXS9wDgz3Ei5ERWq9VsI3EFwEkILACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLGAAaAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiAksAICYwAIAiC02Vw0AABkbLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACAmMACAIgJLACA2E9eOn1l6PDSzgAAAABJRU5ErkJggg==",DE="/assets/msra-CpH3Hfx0.png",UE="/assets/msra_logo-BJhvPLg6.png",LE="/assets/wdas-BgwJ6t3f.png",NE="/assets/wdas_logo-Dn8tQa_2.png",IE="/assets/picofme-DF0OjEZ8.png",OE="/assets/dither_it_figure-1-WdQGNKS-.png",BE="/assets/main-teaser-nosleeve-DruyeZ4Y.png",zE="/assets/main-teaser-CydSauKE.pdf",PE="/assets/main-teaser-CAMvx4bD.png",FE="/assets/Nature-2025-SingleFibre-CBg-r0dn.pdf",GE="/assets/SIG-2026-DicePlay-CGz2ncXR.pdf",HE="/assets/VivianLi-CV-July2026-CJUiZytV.pdf",VE="/assets/AR-clip-after-intro-nPfYupHt.mp4",kE="/assets/AR-clip-intro-qC7odwYn.mp4",XE="/assets/AR-clip-spiraling-BGom1lM3.mp4",YE="/assets/AR-clip-spirals-start-D0kqEpH-.mp4",WE="/assets/aerial-reverie-BH8RUiR7.mp4",qE="/assets/process-stills-2-DEvaBqRd.webp",jE="/assets/still-1-CUgK8fv1.webp",QE="/assets/still-2-BYLTd1rL.webp",JE="/assets/still-3-CxF65Wz6.webp",ZE="/assets/still-4-US1FESgZ.webp",KE="/assets/proj-page-BlErBQx5.webp",$E="/assets/thumbnail-BtqfdKpy.webp",e3="/assets/color-me-noisy-BhgiJVll.mp4",t3="/assets/final_vid-D84lpdVg.mov",n3="/assets/thumbnail-Du4sjGzG.webp",i3="/assets/header_tiles-ChXZetfR.mp4",a3="/assets/china_ca-trBKMaX8.mp4",r3="/assets/china_drone_sim-CSlsHQ7u.mp4",s3="/assets/india_ca-DjuA52P7.mp4",o3="/assets/india_drone_sim-CnwA8IQc.mp4",l3="/assets/iran_ca-BP5Jo8ag.mp4",c3="/assets/iran_drone_sim-BP_tZptQ.mp4",u3="/assets/mexico_ca-pOSCmkgH.mp4",f3="/assets/mexico_drone_sim-BthXybvI.mp4",d3="/assets/morocco_ca-CVEOVRqU.mp4",h3="/assets/morocco_drone_sim-cVftqsvE.mp4",p3="/assets/portugal_ca-DMdbIY_y.mp4",m3="/assets/portugal_drone_sim-CvtDC1yp.mp4",g3="/assets/spain_ca-BxuHKG5A.mp4",x3="/assets/spain_drone_sim-DIndvW8l.mp4",_3="/assets/turkey_ca-BUZdZnoD.mp4",A3="/assets/turkey_drone_sim-Bs8ccrxj.mp4",v3="/assets/thumbnail-ByI121R6.webp",S3="/assets/tiles_all-YAahl5WP.webp",b3="/assets/gallery-CD-gMut-.webp",y3="/assets/thumbnail2-C1idtlVw.webp",M3="/assets/header-BUg9aIuN.webp",E3="/assets/pawlink-DQJs0b9t.webp",T3="/assets/thumbnail-DngfYmwu.webp",C3="/assets/thumbnail-CQA5SIou.webp",R3="/assets/wet-dream-thumbnail-CTvNUqHN.webp",w3="/assets/wet-dream-u0ioEXOR.mp4",D3=Object.assign({"../assets/images/diceplay/2026-diceplay.png":ME,"../assets/images/diceplay/temp-mainfig.jpg":EE,"../assets/images/experiences/futurelab.png":TE,"../assets/images/experiences/futurelab_logo.png":CE,"../assets/images/experiences/mit.png":RE,"../assets/images/experiences/mit_logo.png":wE,"../assets/images/experiences/msra.png":DE,"../assets/images/experiences/msra_logo.png":UE,"../assets/images/experiences/wdas.png":LE,"../assets/images/experiences/wdas_logo.png":NE,"../assets/images/picofme.png":IE,"../assets/images/single-fibre/dither_it_figure-1.png":OE,"../assets/images/stitchswitch/main-teaser-nosleeve.png":BE,"../assets/images/stitchswitch/main-teaser.pdf":zE,"../assets/images/stitchswitch/main-teaser.png":PE,"../assets/papers/Nature-2025-SingleFibre.pdf":FE,"../assets/papers/SIG-2026-DicePlay.pdf":GE,"../assets/papers/VivianLi-CV-July2026.pdf":HE,"../assets/projects/aerial-reverie/AR-clip-after-intro.mp4":VE,"../assets/projects/aerial-reverie/AR-clip-intro.mp4":kE,"../assets/projects/aerial-reverie/AR-clip-spiraling.mp4":XE,"../assets/projects/aerial-reverie/AR-clip-spirals-start.mp4":YE,"../assets/projects/aerial-reverie/aerial-reverie.mp4":WE,"../assets/projects/aerial-reverie/process-stills-2.webp":qE,"../assets/projects/aerial-reverie/still-1.webp":jE,"../assets/projects/aerial-reverie/still-2.webp":QE,"../assets/projects/aerial-reverie/still-3.webp":JE,"../assets/projects/aerial-reverie/still-4.webp":ZE,"../assets/projects/aligned/proj-page.webp":KE,"../assets/projects/aligned/thumbnail.webp":$E,"../assets/projects/color-me-noisy/color-me-noisy.mp4":e3,"../assets/projects/color-me-noisy/final_vid.mov":t3,"../assets/projects/color-me-noisy/thumbnail.webp":n3,"../assets/projects/kinetic-pixels/header_tiles.mp4":i3,"../assets/projects/kinetic-pixels/mp4/china_ca.mp4":a3,"../assets/projects/kinetic-pixels/mp4/china_drone_sim.mp4":r3,"../assets/projects/kinetic-pixels/mp4/india_ca.mp4":s3,"../assets/projects/kinetic-pixels/mp4/india_drone_sim.mp4":o3,"../assets/projects/kinetic-pixels/mp4/iran_ca.mp4":l3,"../assets/projects/kinetic-pixels/mp4/iran_drone_sim.mp4":c3,"../assets/projects/kinetic-pixels/mp4/mexico_ca.mp4":u3,"../assets/projects/kinetic-pixels/mp4/mexico_drone_sim.mp4":f3,"../assets/projects/kinetic-pixels/mp4/morocco_ca.mp4":d3,"../assets/projects/kinetic-pixels/mp4/morocco_drone_sim.mp4":h3,"../assets/projects/kinetic-pixels/mp4/portugal_ca.mp4":p3,"../assets/projects/kinetic-pixels/mp4/portugal_drone_sim.mp4":m3,"../assets/projects/kinetic-pixels/mp4/spain_ca.mp4":g3,"../assets/projects/kinetic-pixels/mp4/spain_drone_sim.mp4":x3,"../assets/projects/kinetic-pixels/mp4/turkey_ca.mp4":_3,"../assets/projects/kinetic-pixels/mp4/turkey_drone_sim.mp4":A3,"../assets/projects/kinetic-pixels/thumbnail.webp":v3,"../assets/projects/kinetic-pixels/tiles_all.webp":S3,"../assets/projects/nuwa/gallery.webp":b3,"../assets/projects/nuwa/thumbnail2.webp":y3,"../assets/projects/pawlink/header.webp":M3,"../assets/projects/pawlink/pawlink.webp":E3,"../assets/projects/pawlink/thumbnail.webp":T3,"../assets/projects/spirit-oasis/thumbnail.webp":C3,"../assets/projects/wet-dream/wet-dream-thumbnail.webp":R3,"../assets/projects/wet-dream/wet-dream.mp4":w3}),Zt=o=>{if(!o)return"";const i=`../assets/${o.replace(/^\.?\/?src\/assets\/?/,"").replace(/^\.?\/?assets\/?/,"")}`;return D3[i]||""},ph=[{id:1,title:"Kinetic Pixels",category:"Tech",thumbnail:Zt("/src/assets/projects/kinetic-pixels/thumbnail.webp"),description:"Generative simulation for exploring data as cultural material crafted and dynamically configured by coordinated robots.",fullDescription:`Kinetic Pixels explores data as cultural material by transforming symbolic, geographic, and historical information into evolving mosaics that can be assembled by coordinated aerial robots. Drawing inspiration from modular tile traditions across cultures, the project develops computational grammars that generate distinct yet structurally related patterns, translating cultural information into dynamic forms of architectural ornament.

Through simulations of robotic swarm construction, these digital mosaics are visualized as physically realizable assemblies, connecting abstract computational rules with robotic fabrication. Kinetic Pixels ultimately asks how autonomous systems can contribute to the cultural production of material patterns, positioning computation not only as a tool for fabrication but as a new medium for architectural expression.`,tags:["Simulation","Generative"],details:{year:"Fall 2025",role:"Solo",mediums:"Python, ROS, MatLab"},images:[{type:"video",src:Zt("/src/assets/projects/kinetic-pixels/header_tiles.mp4"),layout:"full",autoplay:!0},{src:Zt("/src/assets/projects/kinetic-pixels/tiles_all.webp"),layout:"full"}]},{id:2,title:"PawLink",category:"Tech",thumbnail:Zt("/src/assets/projects/pawlink/thumbnail.webp"),description:"Smart-fabric collar with embedded sensors for continuous animal health monitoring",fullDescription:`PawLink is an integrated smart-fabric collar that leverages thermally drawn fiber technology with embedded capacitive and thermistor sensors to enable continuous, fabric-level inference.

A compact ML classifier runs on collar-side data to detect behavioral patterns such as excessive scratching (linked to allergies, infections, or skin irritation), track temperature changes and activity levels for health and exercise monitoring, and activate a safety protocol: a "Lost Mode" that detects nearby humans to broadcast signals.

PawLink demonstrates how computational textiles can function as compassionate, adaptive interfaces for animal wellbeing.

In collaboration with Cheska Chiang.`,tags:["Wearables","ML","Hardware"],details:{year:"Fall 2023",role:"Software & Hardware Integration, Product Design",mediums:"Arduino, ML, Thermally Drawn Fibers, Weaving Loom, Metal Hardware"},images:[{src:Zt("/src/assets/projects/pawlink/pawlink.webp"),layout:"full"}]},{id:6,title:"Aerial Reverie",category:"Tech",thumbnail:Zt("/src/assets/projects/aerial-reverie/still-1.webp"),description:"An immersive VR storyworld illuminated by coordinated Crazyflie drone flight paths",fullDescription:`Aerial Reverie is an immersive VR storyworld illuminated by the motion of Crazyflie drones, their coordinated flight paths controlled via Python and ROS. The choreographed trajectories assemble a dynamic cityscape that becomes both simulation and narrative device, examining collective intelligence, industrial expansion, and the tension between nature, home, and rapidly evolving built environments.

In collaboration with Izzy (Zigzag) Hettmansperger and Rosella Liu.`,tags:["VR","Robotics"],details:{year:"Spring 2024",role:"Creative Director, Programming, 3D Modeling",mediums:"Python, ROS, Crazyflie Drones, Blender, After Effects, Ableton Live, Meta Quest 2"},images:[{type:"video",src:Zt("/src/assets/projects/aerial-reverie/aerial-reverie.mp4"),layout:"full"},{type:"video-row",items:[Zt("/src/assets/projects/aerial-reverie/AR-clip-intro.mp4"),Zt("/src/assets/projects/aerial-reverie/AR-clip-after-intro.mp4"),Zt("/src/assets/projects/aerial-reverie/AR-clip-spirals-start.mp4"),Zt("/src/assets/projects/aerial-reverie/AR-clip-spiraling.mp4")]},{type:"image",src:Zt("/src/assets/projects/aerial-reverie/process-stills-2.webp"),layout:"full"}]},{id:3,title:"Aligned",category:"Tech",thumbnail:Zt("/src/assets/projects/aligned/thumbnail.webp"),description:"Embedded electronics and ML pipeline for a smart-fabric posture-sensing garment",fullDescription:`Aligned is a smart-fabric posture-sensing system integrating a custom PCB with four I²C-networked accelerometers and a vibration motor for haptic feedback. A lightweight machine-learning model distinguishes upright vs. slouched posture in real time, forming the foundation for a textile-embedded interface that supports healthier body awareness.

We built a fully working Arduino prototype demonstrating real-time posture detection, and developed a complete hardware pipeline from circuit schematic to manufactured PCB for textile integration.

In collaboration with Alec Lippman.`,tags:["Wearables","ML","Hardware"],details:{year:"Fall 2024 – Spring 2025",role:"Software Lead, Hardware",mediums:"KiCad, Custom PCB, I²C, ML, Haptic Feedback"},images:[{src:Zt("/src/assets/projects/aligned/proj-page.webp"),layout:"full"}]},{id:4,title:"NÜWA",category:"Art",thumbnail:Zt("/src/assets/projects/nuwa/thumbnail2.webp"),description:"Fashion collection modernizing hanfu and qipao to subvert techno-Orientalist narratives around the Chinese body",fullDescription:`Showcased at Fashion@Brown Runway Show 2024 & Rhode Island Fashion Week 2024.

Ancient deity, new cyborg. One with earth, integrated in cyberspace.

In techno-Orientalism, the West views the Chinese body in contradicting space-times: a relic of the past and a future both feared and desired. It seeks to collect a drop of what the Chinese body can provide — culture, technology, sex — and in turn, create a perverse reality with its voyeuristic eyes.

How can women of the Chinese diaspora reject and subsequently remake this techno-orientalist framework?

Embody the paradox of temporalities and collapse contrasting timescales into the present moment. Primordial, earth-forming goddess and futuristic robot condensed into one in the Now: the modern woman. Fetishization, subjugation by the malicious eye — we repair the wounds of our broken heavens with our molded clay bodies and the garments that adorn them.

By crafting modernized hanfu and qipao dresses, interweaving the histories of silk and brocade with technology, the Chinese body is situated in all timeframes, toppling the binarist narrative generated by the West. Placed before the public eye, Nüwa asks the audience to confront the simultaneous pleasure and discomfort of the techno-Orientalist paradigm.`,tags:["Fashion","Hardware"],details:{year:"Spring 2024",role:"Solo",mediums:"Brocade, Silk, LEDs"},images:[{src:Zt("/src/assets/projects/nuwa/gallery.webp"),layout:"full"}]},{id:8,title:"Color Me Noisy",category:"Tech",thumbnail:Zt("/src/assets/projects/color-me-noisy/thumbnail.webp"),description:"Reimplementation of an example-based pipeline for hand-colored animation rendering.",fullDescription:`For CSCI 2240: Advanced Computer Graphics, we reimplemented the paper Color Me Noisy: Example-based Rendering of Hand-colored Animations with Temporal Noise Control. The method stylizes 3D animations with the appearance of hand-colored 2D artwork by transferring the visual characteristics of an example texture while maintaining temporal consistency across animation frames.

The implementation follows a multi-scale synthesis pipeline, progressively refining each frame from coarse to fine resolutions to propagate texture appearance while reducing flickering between consecutive frames. Core components include image pyramid construction, predeformation, patch-based texture synthesis using PatchMatch, and iterative upsampling and refinement to produce temporally stable, stylized animations. My primary contribution was implementing the bilinear interpolation used in the upsampling and downsampling stages of the image pyramid.

In collaboration with Sherry Zhang, Lexi Henrion, and Apoorva Talwalkar.`,tags:["Graphics"],details:{year:"Spring 2025",role:"Bilinear Interpolation, Image Pyramid",mediumsLabel:"Language",mediums:"C++"},links:[{label:"Color Me Noisy Paper",url:"https://cragl.cs.gmu.edu/noisy/"},{label:"GitHub",url:"https://github.com/Lenrion/ColorMeNoisy"}],images:[{type:"video",src:Zt("/src/assets/projects/color-me-noisy/color-me-noisy.mp4")}]},{id:5,title:"Spirit Oasis",category:"Tech",thumbnail:Zt("/src/assets/projects/spirit-oasis/thumbnail.webp"),description:"A reimagined 3D scene from Avatar: The Last Airbender with realistic water and lighting",fullDescription:`This project is a reimagination of a scene in the episode 'The Siege of the North' from Avatar: the Last Airbender. In the Spirit Oasis, two koi fish Tui and La maintain the balance between the Earth and the Moon. When the fish are disturbed, chaos ensues.

Using ThreeJS and Blender, we modeled this scene using realistic water effects, lighting changes, and koi fish interaction.

In collaboration with Claire Yang, Beatrice Hoang, and Joe Maffa.`,tags:["Graphics","Modeling"],details:{year:"Fall 2024",role:"Procedural Water + Grass, Custom Watercolor Toon Shading, 3D Modeling",mediums:"Three.js, Blender, GLSL"},images:[{type:"iframe",src:"https://spirit-oasis.vercel.app/",layout:"full"}]},{id:7,title:"Wet Dream",category:"Art",thumbnail:Zt("/src/assets/projects/wet-dream/wet-dream-thumbnail.webp"),description:"A surreal 3D animated film inspired by ecofeminism and Eastern folklore.",fullDescription:`Wet Dream aims to visualize the interconnection of bodily and botanical visions as a form of liberating the female body by representing it through digitally crafted natural and surreal landscapes. We explore this imagery through the lens of eco-feminism and techno-orientalism – taking heavy inspiration from Eastern folktales as a way of exploring how we've historically imagined and understood the female body and its relationship to nature.

Through layered symbols, the film aims to visualize the spiritual and cultural significance of botanical history while critiquing and expanding upon the representations of femininity.

Directed by Anita Yen and Erin Xi · Produced by Erin Xi and Helen Lu · Original Music by Morning Close · 3D Artists: Anita Yen, Erin Xi, Vivian Li, Winnie Yi · Choreographer: Julia Fu`,tags:["Animation","Modeling"],details:{year:"Spring 2024",role:"3D Artist",mediums:"Blender, Unreal, Marvelous Designer"},images:[{type:"video",src:Zt("/src/assets/projects/wet-dream/wet-dream.mp4")}]}],U3="/assets/VivianLi-CV-July2026-CJUiZytV.pdf",L3={position:"fixed",top:0,left:0,right:0,padding:"0.65rem 2rem",background:"rgba(0, 0, 0, 0.92)",backdropFilter:"blur(12px)",borderBottom:"1px solid rgba(255,255,255,0.07)",boxShadow:"0 2px 16px rgba(0,0,0,0.25)",zIndex:100,display:"flex",alignItems:"center"},Sc={background:"none",border:"none",color:"white",cursor:"pointer",fontSize:"1rem",opacity:.85,transition:"opacity 0.2s"};function N3({scrollToSection:o}){return he.jsxs("nav",{style:L3,children:[he.jsxs("div",{className:"nav-dither","aria-hidden":"true",children:[he.jsx("div",{className:"nav-dither-band band-1"}),he.jsx("div",{className:"nav-dither-band band-2"}),he.jsx("div",{className:"nav-dither-band band-3"}),he.jsx("div",{className:"nav-dither-band band-4"})]}),he.jsx("div",{className:"font-argent-normal",style:{fontSize:"1.3rem",fontWeight:"400",color:"white"},children:"vivian li"}),he.jsx("div",{className:"nav-decorative"}),he.jsxs("div",{className:"nav-links",children:[he.jsx("button",{className:"font-argent-normal",onClick:()=>o("about"),style:Sc,onMouseEnter:t=>t.target.style.opacity=1,onMouseLeave:t=>t.target.style.opacity=.8,children:"About"}),he.jsx("button",{className:"font-argent-normal",onClick:()=>o("publications"),style:Sc,onMouseEnter:t=>t.target.style.opacity=1,onMouseLeave:t=>t.target.style.opacity=.8,children:"Publications"}),he.jsx("button",{className:"font-argent-normal",onClick:()=>o("portfolio"),style:Sc,onMouseEnter:t=>t.target.style.opacity=1,onMouseLeave:t=>t.target.style.opacity=.8,children:"Projects"}),he.jsx("a",{href:U3,target:"_blank",rel:"noreferrer",className:"font-argent-normal",style:{...Sc,textDecoration:"none"},onMouseEnter:t=>t.target.style.opacity=1,onMouseLeave:t=>t.target.style.opacity=.8,children:"CV"})]})]})}const I3="/assets/picofme-DF0OjEZ8.png",vs=2,O3=[[1,1,1,1,1,1,1,1,1,1,1,1,1],[1,1,0,0,0,0,0,0,0,0,0,1,1],[1,0,1,0,0,0,0,0,0,0,1,0,1],[1,0,0,1,0,0,0,0,0,1,0,0,1],[1,0,0,0,1,0,0,0,1,0,0,0,1],[1,0,0,0,0,1,0,1,0,0,0,0,1],[1,0,0,0,0,0,1,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1,1]],B3=[[1,1,1,1,1,1,1,1,1,1],[1,0,0,0,0,0,0,0,0,1],[1,0,1,0,1,0,0,1,0,1],[1,0,0,0,1,1,1,1,0,1],[1,0,1,0,1,0,0,1,0,1],[1,0,1,0,1,0,0,1,0,1],[1,0,1,0,1,0,0,1,0,1],[1,0,1,0,1,0,0,1,0,1],[1,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1]];function hx({pixels:o,color:t="currentColor"}){const i=o[0].length*vs,r=o.length*vs;return he.jsx("svg",{width:Math.round(i*.8),height:Math.round(r*.8),viewBox:`0 0 ${i} ${r}`,"aria-hidden":"true",style:{display:"block",flexShrink:0},children:o.flatMap((l,u)=>l.map((d,h)=>d?he.jsx("rect",{x:h*vs,y:u*vs,width:vs,height:vs,fill:t},`${u}-${h}`):null))})}const px={display:"inline-flex",alignItems:"center",justifyContent:"center",padding:"0.3rem",borderRadius:"4px",background:"rgba(255,255,255,0.82)",border:"1.5px solid rgba(0,0,0,0.18)",color:"rgba(0,0,0,0.72)",textDecoration:"none",cursor:"pointer",transition:"background 0.15s, border-color 0.15s"};function z3(){return he.jsxs("div",{id:"about",className:"hero-container",children:[he.jsx("h1",{className:"font-argent-italic",style:{fontSize:"3.6rem",fontWeight:"100",marginBottom:"1.5rem",textShadow:"none",textAlign:"center"},children:"vivian li"}),he.jsxs("div",{className:"portrait-bio-row",children:[he.jsx("div",{style:{flexShrink:0,display:"flex"},children:he.jsx("img",{src:I3,alt:"Vivian Li",className:"portrait-img"})}),he.jsxs("div",{className:"bio-section",style:{flex:1},children:[he.jsx("div",{style:{fontSize:"0.7rem",fontWeight:"600",letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(0,0,0,0.4)",marginBottom:"0.25rem"},children:"about me"}),he.jsxs("p",{style:{fontFamily:'"Plus Jakarta Sans", sans-serif',fontSize:"0.98rem",lineHeight:"1.7",textShadow:"none",margin:0},children:["I am a Research Assistant in the"," ",he.jsx("a",{href:"https://www.computationaldesign.group/",target:"_blank",rel:"noreferrer",style:{color:"rgb(0,120,130)",textDecorationColor:"rgba(0,120,130,0.4)"},children:"Computational Design Group"})," ","at Brown Visual Computing, advised by Professor"," ",he.jsx("a",{href:"https://www.computationaldesign.group/adriana",target:"_blank",rel:"noreferrer",style:{color:"rgb(0,120,130)",textDecorationColor:"rgba(0,120,130,0.4)"},children:"Adriana Schulz"}),". I recently completed my B.S. in Computer Science and M.S. in Electrical and Computer Engineering at Brown University.",he.jsx("br",{}),he.jsx("br",{}),"My research is in ",he.jsx("strong",{children:"computational design and fabrication"})," at the intersection of"," ",he.jsx("strong",{children:"computer graphics"})," and ",he.jsx("strong",{children:"human-computer interaction"}),". I develop computational methods, interactive systems, and fabrication workflows that explore new possibilities for creating and interacting with the physical world.",he.jsx("br",{}),he.jsx("br",{}),"Beyond research, I love making across fashion design, painting, printmaking, and mixed-media. I also enjoy music ♫, hiking ᨒ↟, and time with my dog, Yoyo."]}),he.jsxs("div",{style:{display:"flex",gap:"0.5rem",marginTop:"0.35rem",flexWrap:"wrap"},children:[he.jsx("a",{href:"mailto:vivian_li1@brown.edu",title:"Email",style:px,onMouseEnter:o=>{o.currentTarget.style.background="rgba(0,0,0,0.07)",o.currentTarget.style.borderColor="rgba(0,0,0,0.28)"},onMouseLeave:o=>{o.currentTarget.style.background="rgba(255,255,255,0.82)",o.currentTarget.style.borderColor="rgba(0,0,0,0.18)"},children:he.jsx(hx,{pixels:O3})}),he.jsx("a",{href:"https://www.linkedin.com/in/vivianxli/",target:"_blank",rel:"noreferrer",title:"LinkedIn",style:px,onMouseEnter:o=>{o.currentTarget.style.background="rgba(0,0,0,0.07)",o.currentTarget.style.borderColor="rgba(0,0,0,0.28)"},onMouseLeave:o=>{o.currentTarget.style.background="rgba(255,255,255,0.82)",o.currentTarget.style.borderColor="rgba(0,0,0,0.18)"},children:he.jsx(hx,{pixels:B3})})]})]})]})]})}const P3="/assets/SIG-2026-DicePlay-CGz2ncXR.pdf",F3="/assets/Nature-2025-SingleFibre-CBg-r0dn.pdf",G3="/assets/main-teaser-nosleeve-DruyeZ4Y.png",H3=[{id:"stitchswitch",title:"StitchSwitch: Programmable Surface Deformation and Bistability in Embroidered Textiles",authors:"Vivian Li, Milin Kodnongbua, Heather Robertson, Yiyue Luo, Adriana Schulz",venue:"ACM UIST (Conditionally Accepted) • 2026",thumbnail:G3,thumbnailFit:"contain",pageUrl:null,paperUrl:null},{id:"diceplay",title:"Diceplay: A Modular Canvas for Physical Image Composition",authors:"Milin Kodnongbua, Zihan Jack Zhang, Shishi Xiao, Vivian Li, Heather Robertson, Rulin Chen, David Laidlaw, Adriana Schulz",venue:"ACM SIGGRAPH • 2026",thumbnail:Zt("/src/assets/images/diceplay/2026-diceplay.png"),thumbnailFit:"contain",pageUrl:"https://www.computationaldesign.group/publications/diceplay",paperUrl:P3},{id:"nature",title:"A single-fibre computer enables textile networks and distributed inference",authors:"Nikhil Gupta, Henry Cheung, Syamantak Payra, Gabriel Loke, Jenny Li, Yongyi Zhao, Latika Balachander, Ella Son, Vivian Li, Samuel Kravitz, Sehar Lohawala, John Joannopoulos & Yoel Fink",venue:"Nature • 2025",thumbnail:Zt("/src/assets/images/single-fibre/dither_it_figure-1.png"),thumbnailFit:"cover",pageUrl:"https://www.nature.com/articles/s41586-024-08568-6",paperUrl:F3}],V3=(o,t)=>{const i=o.split(t);return i.length===1?o:he.jsxs(he.Fragment,{children:[i[0],he.jsx("span",{style:{fontWeight:"600",color:"rgba(0, 0, 0, 0.9)"},children:t}),i[1]]})};function k3(){return he.jsxs("div",{id:"publications",className:"section-container",children:[he.jsx("h2",{className:"font-argent-normal",style:{fontSize:"2rem",fontWeight:"300",marginTop:0,marginBottom:"0.6rem",textAlign:"center",textShadow:"none"},children:"publications"}),H3.map(o=>he.jsxs("div",{className:"pub-card",children:[o.thumbnail?o.thumbnailFit==="contain"?he.jsx("div",{className:"pub-thumb-wrap",children:he.jsx("img",{src:o.thumbnail,alt:o.title,style:{width:"100%",height:"100%",objectFit:"contain"}})}):he.jsx("img",{src:o.thumbnail,alt:o.title,className:"pub-thumb-img"}):he.jsx("div",{className:"pub-thumb-wrap",style:{background:"rgba(0,0,0,0.04)"}}),he.jsxs("div",{style:{flex:1},children:[he.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:"400",marginTop:0,marginBottom:"0.25rem"},children:o.title}),he.jsx("p",{style:{fontSize:"0.85rem",color:"rgba(0, 0, 0, 0.6)",marginBottom:"0.25rem"},children:V3(o.authors,"Vivian Li")}),he.jsx("p",{style:{fontSize:"0.9rem",color:"rgba(0, 0, 0, 0.45)",marginBottom:"0.5rem"},children:o.venue}),(o.pageUrl||o.paperUrl)&&he.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[o.pageUrl&&he.jsx("a",{href:o.pageUrl,target:"_blank",rel:"noreferrer",className:"link-btn",children:"Page"}),o.paperUrl&&he.jsx("a",{href:o.paperUrl,target:"_blank",rel:"noreferrer",className:"link-btn",children:"Paper"})]})]})]},o.id))]})}const X3="/assets/wdas-BgwJ6t3f.png",Y3="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAAD4CAYAAAA0JjXXAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAOdEVYdFNvZnR3YXJlAEZpZ21hnrGWYwAABYlJREFUeAHt2c+qVWUcgOFvn3+mmChaOhBqqIWU0KBRcyfVtJk1kaBJNQ2K6hKiLqArsGjcIGgo2CCFMMIiSUyskGOevc9OL8CC2PUe93ke+GANPxa/tV7WtyafPvHcfCyJQ6sb45ObP7z0xa2fPxuhj44/c+ng6vqJZbixq5OVcWnzj/Mf/HLp5RF67ciT75159Oi7d7Zn42E3ubduzbYuv/HTxZMj9Pz+wyc/PHry22vTO2MZHFnd2D7z/dfr9y63R+ydoyfOP733wIvTeb4VdrCVAQD87wQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABBYG8CutD5fXT++sXeMyVgKj6/t2TEfFIfWNg4fW98zZvP5gAcRYNilvrp9/fLr1y4+e2c2+3MsgX1rqxtjZ5h8fPO7Vx77bd/+yWQoMA8kwLB73f3y1vWLg0WbX9nc/PHK2Bzwd/wDBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAsHst4/O/PnprYzltDBZqWQcF+AenT58+8eZbb3/z640bt8cSOHjo4COvnj27d/Sm7x87+flTew+8MB3z8bCb3Fu3ZtOr565eODVYKAGGXWpra2s+m81Wt6bTA2MJTKez7bFD3J3Pt7fm8wPT+Y7Z0r92P8Bb2zOt+A84ggaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAmuDhVtfWZ2uraz8PhljPh5yK2MyWZ+YE4BF82JdvI1zVy+cGsvn/qxMBwAL4Qh68e6O5SS+AAskwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAAQEGgIAAA0BAgAEgIMAAEBBgAAgIMAAEBBgAAgIMAAEBBoCAAANAQIABICDAABAQYAAICDAABAQYAAICDAABAQaAgAADQECAASAgwAAQEGAACAgwAAQEGAACAgwAgb8AkgWATZM97LIAAAAASUVORK5CYII=",W3="/assets/futurelab-AxBi0Trq.png",q3="/assets/msra-CpH3Hfx0.png",j3=[{id:"disney",company:"Walt Disney Animation Studios",role:"Production Tech Intern",dates:"Summer '24",logo:X3},{id:"mit",company:`Massachusetts Institute
of Technology`,role:"Research Assistant",dates:"Spring '24",logo:Y3},{id:"tsinghua",company:"Tsinghua University Future Lab",role:"Research Intern",dates:"Summer '23",logo:W3},{id:"microsoft",company:"Microsoft Research Asia",role:"Internet Graphics Intern",dates:"Summer '22",logo:q3}];function Q3(){return he.jsxs("div",{id:"experience",className:"section-container",children:[he.jsx("h2",{className:"font-argent-normal",style:{fontSize:"2rem",fontWeight:"300",marginTop:0,marginBottom:"0.6rem",textAlign:"center",textShadow:"none"},children:"experience"}),he.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.75rem",justifyContent:"center"},children:j3.map(o=>he.jsxs("div",{className:"experience-card",style:{background:"rgba(255,255,255,0.85)",backdropFilter:"blur(10px)",border:"1px solid rgba(0,0,0,0.1)",borderRadius:"8px",padding:"1.25rem 0.6rem",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"0.5rem",textAlign:"center"},children:[o.logo?he.jsx("img",{src:o.logo,alt:o.company,style:{height:"56px",width:"auto",maxWidth:"100%",display:"block"}}):he.jsx("div",{style:{height:"56px",display:"flex",alignItems:"center",fontSize:"0.55rem",color:"rgba(0,0,0,0.3)"},children:"logo"}),he.jsxs("div",{children:[he.jsx("div",{style:{fontFamily:'"Plus Jakarta Sans", sans-serif',fontSize:"0.9rem",fontWeight:"600",color:"rgba(0,0,0,0.8)",lineHeight:1.3,whiteSpace:"pre-line"},children:o.company}),he.jsxs("div",{style:{fontFamily:'"Plus Jakarta Sans", sans-serif',fontSize:"0.82rem",color:"rgba(0,0,0,0.5)",marginTop:"0.2rem"},children:[o.role," · ",o.dates]})]})]},o.id))})]})}const J3=["All","Tech","Art"];function Z3({portfolioItems:o,activeFilter:t,setActiveFilter:i,onSelectProject:r}){const l=t==="All"?o:o.filter(u=>u.category===t);return he.jsxs("div",{id:"portfolio",className:"section-container",children:[he.jsx("h2",{className:"font-argent-normal",style:{fontSize:"2rem",fontWeight:"300",marginTop:0,marginBottom:"0.6rem",textAlign:"center",textShadow:"none"},children:"projects"}),he.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"1rem",marginBottom:"2rem"},children:J3.map(u=>he.jsx("button",{onClick:()=>i(u),style:{background:t===u?"rgba(0, 0, 0, 0.1)":"transparent",backdropFilter:"blur(10px)",border:`1px solid ${t===u?"rgba(0, 0, 0, 0.3)":"rgba(0, 0, 0, 0.15)"}`,borderRadius:"20px",padding:"0.5rem 1.5rem",color:"black",cursor:"pointer",fontSize:"0.9rem",fontWeight:t===u?"500":"300",transition:"all 0.3s ease"},onMouseEnter:d=>{t!==u&&(d.target.style.background="rgba(0, 0, 0, 0.05)",d.target.style.borderColor="rgba(0, 0, 0, 0.2)")},onMouseLeave:d=>{t!==u&&(d.target.style.background="transparent",d.target.style.borderColor="rgba(0, 0, 0, 0.15)")},children:u},u))}),he.jsx("div",{className:"projects-grid",children:l.map(u=>he.jsxs("div",{onClick:()=>r(u),style:{background:"rgba(255, 255, 255, 0.85)",backdropFilter:"blur(10px)",border:"1px solid rgba(0, 0, 0, 0.1)",borderRadius:"8px",overflow:"hidden",cursor:"pointer",transition:"transform 0.2s, border-color 0.2s"},onMouseEnter:d=>{d.currentTarget.style.transform="translateY(-4px)",d.currentTarget.style.borderColor="rgba(0, 0, 0, 0.2)"},onMouseLeave:d=>{d.currentTarget.style.transform="translateY(0)",d.currentTarget.style.borderColor="rgba(0, 0, 0, 0.1)"},children:[he.jsx("div",{style:{width:"100%",height:"200px",background:"rgba(0, 0, 0, 0.04)",position:"relative",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"},children:u.thumbnail?he.jsx("img",{src:u.thumbnail,alt:u.title,style:{width:"100%",height:"100%",objectFit:"cover",opacity:1}}):he.jsx("span",{style:{fontSize:"0.8rem",color:"rgba(0, 0, 0, 0.3)"},children:"Project Image"})}),he.jsxs("div",{style:{padding:"1.5rem"},children:[he.jsxs("div",{className:"project-card-header",children:[he.jsx("h3",{style:{fontSize:"1.05rem",fontWeight:"400",margin:0},children:u.title}),u.tags?.length>0&&he.jsx("div",{className:"project-card-tags",children:u.tags.map(d=>he.jsx("span",{style:{fontSize:"0.75rem",color:"rgba(90, 90, 185, 0.9)",background:"rgba(180, 180, 255, 0.18)",border:"1px solid rgba(160, 160, 240, 0.35)",borderRadius:"10px",padding:"0.15rem 0.55rem"},children:d},d))})]}),he.jsx("p",{style:{fontSize:"0.85rem",fontWeight:300,color:"rgba(0, 0, 0, 0.6)",margin:0},children:u.description})]})]},u.id))})]})}const Md=[{label:null,bg:"rgba(0,0,0,0.06)",border:"rgba(0,0,0,0.1)",color:"rgba(0,0,0,0.55)"},{label:"Role",bg:"rgba(120,80,200,0.07)",border:"rgba(120,80,200,0.2)",color:"rgba(90,50,170,0.8)"},{label:"Mediums",bg:"rgba(40,160,140,0.07)",border:"rgba(40,160,140,0.2)",color:"rgba(20,120,105,0.85)"}];function K3({image:o,projectTitle:t}){if(o.type==="iframe")return he.jsx("div",{style:{position:"relative",width:"100%",paddingBottom:"56.25%",height:0,background:"rgba(0,0,0,0.03)"},children:he.jsx("iframe",{src:o.src,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"none"},loading:"lazy",allow:"fullscreen"})});if(o.type==="video-row")return he.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"0.5rem"},children:o.items.map((i,r)=>he.jsx("video",{src:i,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"auto",style:{width:"100%",height:"auto",display:"block",borderRadius:"4px",objectFit:"cover"}},r))});if(o.type==="video"){const i=!!o.autoplay;return he.jsx("video",{src:o.src,autoPlay:i,loop:i,muted:i,controls:!i,playsInline:!0,preload:i?"auto":"metadata",style:{width:"100%",height:"auto",display:"block",objectFit:"cover",pointerEvents:i?"none":"auto"}})}return o.src?he.jsx("img",{src:o.src,alt:t,loading:"lazy",style:{width:"100%",height:"auto",display:"block",objectFit:"cover"}}):null}function $3({selectedProject:o,portfolioItems:t,onClose:i,onSelect:r}){const l=Di.useRef({});return Di.useEffect(()=>{const u=l.current[o.id];u&&u.scrollIntoView({behavior:"smooth",inline:"center",block:"nearest"})},[o.id]),he.jsx("div",{className:"modal-overlay",onClick:u=>{u.target===u.currentTarget&&i()},children:he.jsxs("div",{className:"modal-inner",children:[he.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.6rem 0.75rem",borderBottom:"1px solid rgba(0, 0, 0, 0.08)",overflowX:"auto",flexShrink:0,background:"white"},children:[t.map(u=>he.jsx("div",{ref:d=>{l.current[u.id]=d},onClick:()=>r(u),title:u.title,style:{width:"72px",height:"48px",borderRadius:"5px",overflow:"hidden",cursor:"pointer",flexShrink:0,border:o.id===u.id?"2px solid rgba(0,0,0,0.7)":"2px solid transparent",opacity:o.id===u.id?1:.45,transition:"opacity 0.15s, border-color 0.15s"},onMouseEnter:d=>{o.id!==u.id&&(d.currentTarget.style.opacity=.75)},onMouseLeave:d=>{o.id!==u.id&&(d.currentTarget.style.opacity=.45)},children:he.jsx("img",{src:u.thumbnail,alt:u.title,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})},u.id)),he.jsx("button",{onClick:i,className:"modal-close-btn",style:{marginLeft:"auto",flexShrink:0,background:"none",border:"1px solid rgba(0,0,0,0.15)",borderRadius:"50%",width:"32px",height:"32px",cursor:"pointer",fontSize:"1.2rem",color:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",padding:0},onMouseEnter:u=>{u.currentTarget.style.background="rgba(0,0,0,0.06)",u.currentTarget.style.color="black"},onMouseLeave:u=>{u.currentTarget.style.background="none",u.currentTarget.style.color="rgba(0,0,0,0.5)"},children:he.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none","aria-hidden":"true",children:[he.jsx("line",{x1:"1",y1:"1",x2:"11",y2:"11",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"}),he.jsx("line",{x1:"11",y1:"1",x2:"1",y2:"11",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round"})]})})]}),he.jsxs("div",{style:{overflowY:"auto",flex:1},children:[he.jsxs("div",{style:{padding:"1.25rem 1.75rem 0.75rem"},children:[he.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"0.75rem",marginBottom:"0.5rem"},children:[he.jsx("h2",{className:"font-argent-normal",style:{fontSize:"1.7rem",fontWeight:"300",margin:0,textShadow:"none"},children:o.title}),he.jsx("span",{style:{fontSize:"0.75rem",color:"rgba(0,0,0,0.4)",textTransform:"uppercase",letterSpacing:"0.1em"},children:o.category})]}),he.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.35rem",marginBottom:"0.9rem"},children:[{...Md[0],val:o.details.year},{...Md[1],label:o.details.roleLabel??"Role",val:o.details.role},{...Md[2],label:o.details.mediumsLabel??"Mediums",val:o.details.mediums}].map(({label:u,val:d,bg:h,border:m,color:p})=>he.jsxs("span",{style:{fontSize:"0.82rem",color:p,background:h,border:`1px solid ${m}`,borderRadius:"20px",padding:"0.28rem 0.85rem"},children:[u&&he.jsxs("span",{style:{fontWeight:600,marginRight:"0.3rem"},children:[u,":"]}),d]},u??"year"))}),he.jsx("p",{style:{fontSize:"0.9rem",fontWeight:300,color:"rgba(0, 0, 0, 0.65)",lineHeight:"1.6",whiteSpace:"pre-line",margin:0},children:o.fullDescription}),o.links?.length>0&&he.jsx("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap",marginTop:"0.9rem"},children:o.links.map(({label:u,url:d})=>he.jsx("a",{href:d,target:"_blank",rel:"noreferrer",className:"link-btn",children:u},u))})]}),he.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem",padding:"0.75rem 1rem 1.5rem"},children:o.images.map((u,d)=>he.jsx("div",{style:{width:"100%",background:"transparent",overflow:"hidden"},children:he.jsx(K3,{image:u,projectTitle:o.title})},d))})]})]})})}function Wx(o){return o.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"")}function eT(o){return ph.find(t=>Wx(t.title)===o)??null}function tT(){const o=Di.useRef(null),t=Di.useRef(!1),[i,r]=Di.useState("All"),[l,u]=Di.useState(null);yE(o,t);const d=p=>{document.getElementById(p)?.scrollIntoView({behavior:"smooth",block:"start"})};Di.useEffect(()=>{const p=()=>{const _=window.location.hash.slice(1),x=_?eT(_):null;t.current=!!x,u(x)};return p(),window.addEventListener("popstate",p),()=>window.removeEventListener("popstate",p)},[]);const h=p=>{t.current=!0,u(p),window.history.pushState({projectId:p.id},"",`#${Wx(p.title)}`)},m=()=>{t.current=!1,u(null),window.history.pushState(null,"",window.location.pathname)};return he.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"auto"},children:[he.jsx("div",{ref:o,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:0}}),he.jsxs("div",{style:{position:"relative",zIndex:1,color:"black"},children:[l&&he.jsx($3,{selectedProject:l,portfolioItems:ph,onClose:m,onSelect:h}),he.jsx(N3,{scrollToSection:d}),he.jsx(z3,{}),he.jsx(k3,{}),he.jsx(Q3,{}),he.jsx(Z3,{portfolioItems:ph,activeFilter:i,setActiveFilter:r,onSelectProject:h})]})]})}function nT(){return he.jsx(tT,{})}lv.createRoot(document.getElementById("root")).render(he.jsx(ev.StrictMode,{children:he.jsx(nT,{})}));
