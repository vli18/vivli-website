(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function sg(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Ff={exports:{}},Mo={};var ex;function Gv(){if(ex)return Mo;ex=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Mo.Fragment=t,Mo.jsx=i,Mo.jsxs=i,Mo}var tx;function Vv(){return tx||(tx=1,Ff.exports=Gv()),Ff.exports}var Pe=Vv(),If={exports:{}},rt={};var nx;function kv(){if(nx)return rt;nx=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function b(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function v(L,ae,ye){this.props=L,this.context=ae,this.refs=y,this.updater=ye||A}v.prototype.isReactComponent={},v.prototype.setState=function(L,ae){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,ae,"setState")},v.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function O(){}O.prototype=v.prototype;function U(L,ae,ye){this.props=L,this.context=ae,this.refs=y,this.updater=ye||A}var F=U.prototype=new O;F.constructor=U,C(F,v.prototype),F.isPureReactComponent=!0;var k=Array.isArray;function N(){}var B={H:null,A:null,T:null,S:null},J=Object.prototype.hasOwnProperty;function w(L,ae,ye){var Ee=ye.ref;return{$$typeof:o,type:L,key:ae,ref:Ee!==void 0?Ee:null,props:ye}}function R(L,ae){return w(L.type,ae,L.props)}function V(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function ee(L){var ae={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(ye){return ae[ye]})}var re=/\/+/g;function he(L,ae){return typeof L=="object"&&L!==null&&L.key!=null?ee(""+L.key):ae.toString(36)}function fe(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(N,N):(L.status="pending",L.then(function(ae){L.status==="pending"&&(L.status="fulfilled",L.value=ae)},function(ae){L.status==="pending"&&(L.status="rejected",L.reason=ae)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function P(L,ae,ye,Ee,Oe){var ne=typeof L;(ne==="undefined"||ne==="boolean")&&(L=null);var le=!1;if(L===null)le=!0;else switch(ne){case"bigint":case"string":case"number":le=!0;break;case"object":switch(L.$$typeof){case o:case t:le=!0;break;case x:return le=L._init,P(le(L._payload),ae,ye,Ee,Oe)}}if(le)return Oe=Oe(L),le=Ee===""?"."+he(L,0):Ee,k(Oe)?(ye="",le!=null&&(ye=le.replace(re,"$&/")+"/"),P(Oe,ae,ye,"",function(Xe){return Xe})):Oe!=null&&(V(Oe)&&(Oe=R(Oe,ye+(Oe.key==null||L&&L.key===Oe.key?"":(""+Oe.key).replace(re,"$&/")+"/")+le)),ae.push(Oe)),1;le=0;var Ce=Ee===""?".":Ee+":";if(k(L))for(var He=0;He<L.length;He++)Ee=L[He],ne=Ce+he(Ee,He),le+=P(Ee,ae,ye,ne,Oe);else if(He=b(L),typeof He=="function")for(L=He.call(L),He=0;!(Ee=L.next()).done;)Ee=Ee.value,ne=Ce+he(Ee,He++),le+=P(Ee,ae,ye,ne,Oe);else if(ne==="object"){if(typeof L.then=="function")return P(fe(L),ae,ye,Ee,Oe);throw ae=String(L),Error("Objects are not valid as a React child (found: "+(ae==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":ae)+"). If you meant to render a collection of children, use an array instead.")}return le}function j(L,ae,ye){if(L==null)return L;var Ee=[],Oe=0;return P(L,Ee,"","",function(ne){return ae.call(ye,ne,Oe++)}),Ee}function Y(L){if(L._status===-1){var ae=L._result;ae=ae(),ae.then(function(ye){(L._status===0||L._status===-1)&&(L._status=1,L._result=ye)},function(ye){(L._status===0||L._status===-1)&&(L._status=2,L._result=ye)}),L._status===-1&&(L._status=0,L._result=ae)}if(L._status===1)return L._result.default;throw L._result}var ge=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ae=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(ae))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},_e={map:j,forEach:function(L,ae,ye){j(L,function(){ae.apply(this,arguments)},ye)},count:function(L){var ae=0;return j(L,function(){ae++}),ae},toArray:function(L){return j(L,function(ae){return ae})||[]},only:function(L){if(!V(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return rt.Activity=_,rt.Children=_e,rt.Component=v,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=U,rt.StrictMode=r,rt.Suspense=m,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,rt.__COMPILER_RUNTIME={__proto__:null,c:function(L){return B.H.useMemoCache(L)}},rt.cache=function(L){return function(){return L.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(L,ae,ye){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Ee=C({},L.props),Oe=L.key;if(ae!=null)for(ne in ae.key!==void 0&&(Oe=""+ae.key),ae)!J.call(ae,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&ae.ref===void 0||(Ee[ne]=ae[ne]);var ne=arguments.length-2;if(ne===1)Ee.children=ye;else if(1<ne){for(var le=Array(ne),Ce=0;Ce<ne;Ce++)le[Ce]=arguments[Ce+2];Ee.children=le}return w(L.type,Oe,Ee)},rt.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},rt.createElement=function(L,ae,ye){var Ee,Oe={},ne=null;if(ae!=null)for(Ee in ae.key!==void 0&&(ne=""+ae.key),ae)J.call(ae,Ee)&&Ee!=="key"&&Ee!=="__self"&&Ee!=="__source"&&(Oe[Ee]=ae[Ee]);var le=arguments.length-2;if(le===1)Oe.children=ye;else if(1<le){for(var Ce=Array(le),He=0;He<le;He++)Ce[He]=arguments[He+2];Oe.children=Ce}if(L&&L.defaultProps)for(Ee in le=L.defaultProps,le)Oe[Ee]===void 0&&(Oe[Ee]=le[Ee]);return w(L,ne,Oe)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(L){return{$$typeof:h,render:L}},rt.isValidElement=V,rt.lazy=function(L){return{$$typeof:x,_payload:{_status:-1,_result:L},_init:Y}},rt.memo=function(L,ae){return{$$typeof:p,type:L,compare:ae===void 0?null:ae}},rt.startTransition=function(L){var ae=B.T,ye={};B.T=ye;try{var Ee=L(),Oe=B.S;Oe!==null&&Oe(ye,Ee),typeof Ee=="object"&&Ee!==null&&typeof Ee.then=="function"&&Ee.then(N,ge)}catch(ne){ge(ne)}finally{ae!==null&&ye.types!==null&&(ae.types=ye.types),B.T=ae}},rt.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},rt.use=function(L){return B.H.use(L)},rt.useActionState=function(L,ae,ye){return B.H.useActionState(L,ae,ye)},rt.useCallback=function(L,ae){return B.H.useCallback(L,ae)},rt.useContext=function(L){return B.H.useContext(L)},rt.useDebugValue=function(){},rt.useDeferredValue=function(L,ae){return B.H.useDeferredValue(L,ae)},rt.useEffect=function(L,ae){return B.H.useEffect(L,ae)},rt.useEffectEvent=function(L){return B.H.useEffectEvent(L)},rt.useId=function(){return B.H.useId()},rt.useImperativeHandle=function(L,ae,ye){return B.H.useImperativeHandle(L,ae,ye)},rt.useInsertionEffect=function(L,ae){return B.H.useInsertionEffect(L,ae)},rt.useLayoutEffect=function(L,ae){return B.H.useLayoutEffect(L,ae)},rt.useMemo=function(L,ae){return B.H.useMemo(L,ae)},rt.useOptimistic=function(L,ae){return B.H.useOptimistic(L,ae)},rt.useReducer=function(L,ae,ye){return B.H.useReducer(L,ae,ye)},rt.useRef=function(L){return B.H.useRef(L)},rt.useState=function(L){return B.H.useState(L)},rt.useSyncExternalStore=function(L,ae,ye){return B.H.useSyncExternalStore(L,ae,ye)},rt.useTransition=function(){return B.H.useTransition()},rt.version="19.2.0",rt}var ix;function ch(){return ix||(ix=1,If.exports=kv()),If.exports}var sa=ch();const Xv=sg(sa);var Hf={exports:{}},Eo={},Gf={exports:{}},Vf={};var ax;function Wv(){return ax||(ax=1,(function(o){function t(P,j){var Y=P.length;P.push(j);e:for(;0<Y;){var ge=Y-1>>>1,_e=P[ge];if(0<l(_e,j))P[ge]=j,P[Y]=_e,Y=ge;else break e}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var j=P[0],Y=P.pop();if(Y!==j){P[0]=Y;e:for(var ge=0,_e=P.length,L=_e>>>1;ge<L;){var ae=2*(ge+1)-1,ye=P[ae],Ee=ae+1,Oe=P[Ee];if(0>l(ye,Y))Ee<_e&&0>l(Oe,ye)?(P[ge]=Oe,P[Ee]=Y,ge=Ee):(P[ge]=ye,P[ae]=Y,ge=ae);else if(Ee<_e&&0>l(Oe,Y))P[ge]=Oe,P[Ee]=Y,ge=Ee;else break e}}return j}function l(P,j){var Y=P.sortIndex-j.sortIndex;return Y!==0?Y:P.id-j.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],x=1,_=null,S=3,b=!1,A=!1,C=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function F(P){for(var j=i(p);j!==null;){if(j.callback===null)r(p);else if(j.startTime<=P)r(p),j.sortIndex=j.expirationTime,t(m,j);else break;j=i(p)}}function k(P){if(C=!1,F(P),!A)if(i(m)!==null)A=!0,N||(N=!0,ee());else{var j=i(p);j!==null&&fe(k,j.startTime-P)}}var N=!1,B=-1,J=5,w=-1;function R(){return y?!0:!(o.unstable_now()-w<J)}function V(){if(y=!1,N){var P=o.unstable_now();w=P;var j=!0;try{e:{A=!1,C&&(C=!1,O(B),B=-1),b=!0;var Y=S;try{t:{for(F(P),_=i(m);_!==null&&!(_.expirationTime>P&&R());){var ge=_.callback;if(typeof ge=="function"){_.callback=null,S=_.priorityLevel;var _e=ge(_.expirationTime<=P);if(P=o.unstable_now(),typeof _e=="function"){_.callback=_e,F(P),j=!0;break t}_===i(m)&&r(m),F(P)}else r(m);_=i(m)}if(_!==null)j=!0;else{var L=i(p);L!==null&&fe(k,L.startTime-P),j=!1}}break e}finally{_=null,S=Y,b=!1}j=void 0}}finally{j?ee():N=!1}}}var ee;if(typeof U=="function")ee=function(){U(V)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,he=re.port2;re.port1.onmessage=V,ee=function(){he.postMessage(null)}}else ee=function(){v(V,0)};function fe(P,j){B=v(function(){P(o.unstable_now())},j)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(P){switch(S){case 1:case 2:case 3:var j=3;break;default:j=S}var Y=S;S=j;try{return P()}finally{S=Y}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(P,j){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Y=S;S=P;try{return j()}finally{S=Y}},o.unstable_scheduleCallback=function(P,j,Y){var ge=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?ge+Y:ge):Y=ge,P){case 1:var _e=-1;break;case 2:_e=250;break;case 5:_e=1073741823;break;case 4:_e=1e4;break;default:_e=5e3}return _e=Y+_e,P={id:x++,callback:j,priorityLevel:P,startTime:Y,expirationTime:_e,sortIndex:-1},Y>ge?(P.sortIndex=Y,t(p,P),i(m)===null&&P===i(p)&&(C?(O(B),B=-1):C=!0,fe(k,Y-ge))):(P.sortIndex=_e,t(m,P),A||b||(A=!0,N||(N=!0,ee()))),P},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(P){var j=S;return function(){var Y=S;S=j;try{return P.apply(this,arguments)}finally{S=Y}}}})(Vf)),Vf}var rx;function qv(){return rx||(rx=1,Gf.exports=Wv()),Gf.exports}var kf={exports:{}},wn={};var sx;function Yv(){if(sx)return wn;sx=1;var o=ch();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,x){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:x}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,x)},wn.flushSync=function(m){var p=d.T,x=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=x,r.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,_=h(x,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:b}):x==="script"&&r.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,_=h(x,p.crossOrigin);r.d.L(m,x,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},wn.requestFormReset=function(m){r.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,x){return d.H.useFormState(m,p,x)},wn.useFormStatus=function(){return d.H.useHostTransitionStatus()},wn.version="19.2.0",wn}var ox;function jv(){if(ox)return kf.exports;ox=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),kf.exports=Yv(),kf.exports}var lx;function Zv(){if(lx)return Eo;lx=1;var o=qv(),t=ch(),i=jv();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function d(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),e;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var g=!1,E=c.child;E;){if(E===a){g=!0,a=c,s=f;break}if(E===s){g=!0,s=c,a=f;break}E=E.sibling}if(!g){for(E=f.child;E;){if(E===a){g=!0,a=f,s=c;break}if(E===s){g=!0,s=f,a=c;break}E=E.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function x(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=x(e),n!==null)return n;e=e.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),U=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function ee(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var re=Symbol.for("react.client.reference");function he(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===re?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case k:return"Suspense";case N:return"SuspenseList";case w:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case A:return"Portal";case U:return e.displayName||"Context";case O:return(e._context.displayName||"Context")+".Consumer";case F:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case B:return n=e.displayName||null,n!==null?n:he(e.type)||"Memo";case J:n=e._payload,e=e._init;try{return he(e(n))}catch{}}return null}var fe=Array.isArray,P=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},ge=[],_e=-1;function L(e){return{current:e}}function ae(e){0>_e||(e.current=ge[_e],ge[_e]=null,_e--)}function ye(e,n){_e++,ge[_e]=e.current,e.current=n}var Ee=L(null),Oe=L(null),ne=L(null),le=L(null);function Ce(e,n){switch(ye(ne,n),ye(Oe,e),ye(Ee,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?Mm(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=Mm(n),e=Em(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}ae(Ee),ye(Ee,e)}function He(){ae(Ee),ae(Oe),ae(ne)}function Xe(e){e.memoizedState!==null&&ye(le,e);var n=Ee.current,a=Em(n,e.type);n!==a&&(ye(Oe,e),ye(Ee,a))}function lt(e){Oe.current===e&&(ae(Ee),ae(Oe)),le.current===e&&(ae(le),vo._currentValue=Y)}var $t,dt;function Tt(e){if($t===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);$t=n&&n[1]||"",dt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$t+e+dt}var I=!1;function ht(e,n){if(!e||I)return"";I=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var me=function(){throw Error()};if(Object.defineProperty(me.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(me,[])}catch(se){var te=se}Reflect.construct(e,[],me)}else{try{me.call()}catch(se){te=se}e.call(me.prototype)}}else{try{throw Error()}catch(se){te=se}(me=e())&&typeof me.catch=="function"&&me.catch(function(){})}}catch(se){if(se&&te&&typeof se.stack=="string")return[se.stack,te.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],E=f[1];if(g&&E){var z=g.split(`
`),Q=E.split(`
`);for(c=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(s===z.length||c===Q.length)for(s=z.length-1,c=Q.length-1;1<=s&&0<=c&&z[s]!==Q[c];)c--;for(;1<=s&&0<=c;s--,c--)if(z[s]!==Q[c]){if(s!==1||c!==1)do if(s--,c--,0>c||z[s]!==Q[c]){var ue=`
`+z[s].replace(" at new "," at ");return e.displayName&&ue.includes("<anonymous>")&&(ue=ue.replace("<anonymous>",e.displayName)),ue}while(1<=s&&0<=c);break}}}finally{I=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?Tt(a):""}function mt(e,n){switch(e.tag){case 26:case 27:case 5:return Tt(e.type);case 16:return Tt("Lazy");case 13:return e.child!==n&&n!==null?Tt("Suspense Fallback"):Tt("Suspense");case 19:return Tt("SuspenseList");case 0:case 15:return ht(e.type,!1);case 11:return ht(e.type.render,!1);case 1:return ht(e.type,!0);case 31:return Tt("Activity");default:return""}}function Ot(e){try{var n="",a=null;do n+=mt(e,a),a=e,e=e.return;while(e);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ge=Object.prototype.hasOwnProperty,kt=o.unstable_scheduleCallback,je=o.unstable_cancelCallback,at=o.unstable_shouldYield,D=o.unstable_requestPaint,M=o.unstable_now,K=o.unstable_getCurrentPriorityLevel,pe=o.unstable_ImmediatePriority,ve=o.unstable_UserBlockingPriority,oe=o.unstable_NormalPriority,qe=o.unstable_LowPriority,Ue=o.unstable_IdlePriority,Qe=o.log,We=o.unstable_setDisableYieldValue,Se=null,Me=null;function Ye(e){if(typeof Qe=="function"&&We(e),Me&&typeof Me.setStrictMode=="function")try{Me.setStrictMode(Se,e)}catch{}}var Ve=Math.clz32?Math.clz32:H,Ne=Math.log,nt=Math.LN2;function H(e){return e>>>=0,e===0?32:31-(Ne(e)/nt|0)|0}var we=256,Ae=262144,Re=4194304;function be(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xe(e,n,a){var s=e.pendingLanes;if(s===0)return 0;var c=0,f=e.suspendedLanes,g=e.pingedLanes;e=e.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?c=be(s):(g&=E,g!==0?c=be(g):a||(a=E&~e,a!==0&&(c=be(a))))):(E=s&~f,E!==0?c=be(E):g!==0?c=be(g):a||(a=s&~e,a!==0&&(c=be(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Be(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function it(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Bt(){var e=Re;return Re<<=1,(Re&62914560)===0&&(Re=4194304),e}function At(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Cn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function kn(e,n,a,s,c,f){var g=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var E=e.entanglements,z=e.expirationTimes,Q=e.hiddenUpdates;for(a=g&~a;0<a;){var ue=31-Ve(a),me=1<<ue;E[ue]=0,z[ue]=-1;var te=Q[ue];if(te!==null)for(Q[ue]=null,ue=0;ue<te.length;ue++){var se=te[ue];se!==null&&(se.lane&=-536870913)}a&=~me}s!==0&&Go(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(g&~n))}function Go(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-Ve(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&261930}function Ds(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-Ve(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function Us(e,n){var a=n&-n;return a=(a&42)!==0?1:hi(a),(a&(e.suspendedLanes|n))!==0?0:a}function hi(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Qa(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Ls(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:Ym(e.type))}function Ns(e,n){var a=j.p;try{return j.p=e,n()}finally{j.p=a}}var Xn=Math.random().toString(36).slice(2),rn="__reactFiber$"+Xn,fn="__reactProps$"+Xn,Ni="__reactContainer$"+Xn,Rr="__reactEvents$"+Xn,Uc="__reactListeners$"+Xn,Lc="__reactHandles$"+Xn,Vo="__reactResources$"+Xn,Ja="__reactMarker$"+Xn;function Os(e){delete e[rn],delete e[fn],delete e[Rr],delete e[Uc],delete e[Lc]}function pa(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ni]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=Um(e);e!==null;){if(a=e[rn])return a;e=Um(e)}return n}e=a,a=e.parentNode}return null}function T(e){if(e=e[rn]||e[Ni]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function X(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function ie(e){var n=e[Vo];return n||(n=e[Vo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function $(e){e[Ja]=!0}var q=new Set,Te={};function De(e,n){ze(e,n),ze(e+"Capture",n)}function ze(e,n){for(Te[e]=n,e=0;e<n.length;e++)q.add(n[e])}var Fe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$e={},tt={};function Ze(e){return Ge.call(tt,e)?!0:Ge.call($e,e)?!1:Fe.test(e)?tt[e]=!0:($e[e]=!0,!1)}function ct(e,n,a){if(Ze(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Et(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Rt(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function St(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Nt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Je(e,n,a){var s=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(e,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Xt(e){if(!e._valueTracker){var n=Nt(e)?"checked":"value";e._valueTracker=Je(e,n,""+e[n])}}function yt(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=Nt(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function _n(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ma=/[\n"\\]/g;function qt(e){return e.replace(ma,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Oi(e,n,a,s,c,f,g,E){e.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?e.type=g:e.removeAttribute("type"),n!=null?g==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+St(n)):e.value!==""+St(n)&&(e.value=""+St(n)):g!=="submit"&&g!=="reset"||e.removeAttribute("value"),n!=null?vn(e,g,St(n)):a!=null?vn(e,g,St(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.name=""+St(E):e.removeAttribute("name")}function Yt(e,n,a,s,c,f,g,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Xt(e);return}a=a!=null?""+St(a):"",n=n!=null?""+St(n):a,E||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=E?e.checked:!!s,e.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(e.name=g),Xt(e)}function vn(e,n,a){n==="number"&&_n(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function dn(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+St(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function Sn(e,n,a){if(n!=null&&(n=""+St(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+St(a):""}function Mn(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(fe(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=St(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s),Xt(e)}function Ei(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var zi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Sh(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||zi.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function yh(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Sh(e,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Sh(e,f,n[f])}function Nc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ko(e){return Fg.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Pi(){}var Oc=null;function zc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Cr=null,wr=null;function bh(e){var n=T(e);if(n&&(e=n.stateNode)){var a=e[fn]||null;e:switch(e=n.stateNode,n.type){case"input":if(Oi(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+qt(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[fn]||null;if(!c)throw Error(r(90));Oi(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&yt(s)}break e;case"textarea":Sn(e,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&dn(e,!!a.multiple,n,!1)}}}var Pc=!1;function Mh(e,n,a){if(Pc)return e(n,a);Pc=!0;try{var s=e(n);return s}finally{if(Pc=!1,(Cr!==null||wr!==null)&&(Dl(),Cr&&(n=Cr,e=wr,wr=Cr=null,bh(n),e)))for(n=0;n<e.length;n++)bh(e[n])}}function zs(e,n){var a=e.stateNode;if(a===null)return null;var s=a[fn]||null;if(s===null)return null;a=s[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bc=!1;if(Bi)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){Bc=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{Bc=!1}var xa=null,Fc=null,Xo=null;function Eh(){if(Xo)return Xo;var e,n=Fc,a=n.length,s,c="value"in xa?xa.value:xa.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var g=a-e;for(s=1;s<=g&&n[a-s]===c[f-s];s++);return Xo=c.slice(e,1<s?1-s:void 0)}function Wo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function qo(){return!0}function Th(){return!1}function zn(e){function n(a,s,c,f,g){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var E in e)e.hasOwnProperty(E)&&(a=e[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?qo:Th,this.isPropagationStopped=Th,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),n}var $a={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yo=zn($a),Bs=_({},$a,{view:0,detail:0}),Ig=zn(Bs),Ic,Hc,Fs,jo=_({},Bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Fs&&(Fs&&e.type==="mousemove"?(Ic=e.screenX-Fs.screenX,Hc=e.screenY-Fs.screenY):Hc=Ic=0,Fs=e),Ic)},movementY:function(e){return"movementY"in e?e.movementY:Hc}}),Ah=zn(jo),Hg=_({},jo,{dataTransfer:0}),Gg=zn(Hg),Vg=_({},Bs,{relatedTarget:0}),Gc=zn(Vg),kg=_({},$a,{animationName:0,elapsedTime:0,pseudoElement:0}),Xg=zn(kg),Wg=_({},$a,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),qg=zn(Wg),Yg=_({},$a,{data:0}),Rh=zn(Yg),jg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qg(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Kg[e])?!!n[e]:!1}function Vc(){return Qg}var Jg=_({},Bs,{key:function(e){if(e.key){var n=jg[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Wo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Zg[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vc,charCode:function(e){return e.type==="keypress"?Wo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Wo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$g=zn(Jg),e_=_({},jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ch=zn(e_),t_=_({},Bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vc}),n_=zn(t_),i_=_({},$a,{propertyName:0,elapsedTime:0,pseudoElement:0}),a_=zn(i_),r_=_({},jo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),s_=zn(r_),o_=_({},$a,{newState:0,oldState:0}),l_=zn(o_),c_=[9,13,27,32],kc=Bi&&"CompositionEvent"in window,Is=null;Bi&&"documentMode"in document&&(Is=document.documentMode);var u_=Bi&&"TextEvent"in window&&!Is,wh=Bi&&(!kc||Is&&8<Is&&11>=Is),Dh=" ",Uh=!1;function Lh(e,n){switch(e){case"keyup":return c_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nh(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Dr=!1;function f_(e,n){switch(e){case"compositionend":return Nh(n);case"keypress":return n.which!==32?null:(Uh=!0,Dh);case"textInput":return e=n.data,e===Dh&&Uh?null:e;default:return null}}function d_(e,n){if(Dr)return e==="compositionend"||!kc&&Lh(e,n)?(e=Eh(),Xo=Fc=xa=null,Dr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return wh&&n.locale!=="ko"?null:n.data;default:return null}}var h_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oh(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!h_[e.type]:n==="textarea"}function zh(e,n,a,s){Cr?wr?wr.push(s):wr=[s]:Cr=s,n=Bl(n,"onChange"),0<n.length&&(a=new Yo("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Hs=null,Gs=null;function p_(e){gm(e,0)}function Zo(e){var n=X(e);if(yt(n))return e}function Ph(e,n){if(e==="change")return n}var Bh=!1;if(Bi){var Xc;if(Bi){var Wc="oninput"in document;if(!Wc){var Fh=document.createElement("div");Fh.setAttribute("oninput","return;"),Wc=typeof Fh.oninput=="function"}Xc=Wc}else Xc=!1;Bh=Xc&&(!document.documentMode||9<document.documentMode)}function Ih(){Hs&&(Hs.detachEvent("onpropertychange",Hh),Gs=Hs=null)}function Hh(e){if(e.propertyName==="value"&&Zo(Gs)){var n=[];zh(n,Gs,e,zc(e)),Mh(p_,n)}}function m_(e,n,a){e==="focusin"?(Ih(),Hs=n,Gs=a,Hs.attachEvent("onpropertychange",Hh)):e==="focusout"&&Ih()}function x_(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Zo(Gs)}function g_(e,n){if(e==="click")return Zo(n)}function __(e,n){if(e==="input"||e==="change")return Zo(n)}function v_(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Wn=typeof Object.is=="function"?Object.is:v_;function Vs(e,n){if(Wn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Ge.call(n,c)||!Wn(e[c],n[c]))return!1}return!0}function Gh(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vh(e,n){var a=Gh(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Gh(a)}}function kh(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?kh(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Xh(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=_n(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=_n(e.document)}return n}function qc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var S_=Bi&&"documentMode"in document&&11>=document.documentMode,Ur=null,Yc=null,ks=null,jc=!1;function Wh(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;jc||Ur==null||Ur!==_n(s)||(s=Ur,"selectionStart"in s&&qc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ks&&Vs(ks,s)||(ks=s,s=Bl(Yc,"onSelect"),0<s.length&&(n=new Yo("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=Ur)))}function er(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Lr={animationend:er("Animation","AnimationEnd"),animationiteration:er("Animation","AnimationIteration"),animationstart:er("Animation","AnimationStart"),transitionrun:er("Transition","TransitionRun"),transitionstart:er("Transition","TransitionStart"),transitioncancel:er("Transition","TransitionCancel"),transitionend:er("Transition","TransitionEnd")},Zc={},qh={};Bi&&(qh=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function tr(e){if(Zc[e])return Zc[e];if(!Lr[e])return e;var n=Lr[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in qh)return Zc[e]=n[a];return e}var Yh=tr("animationend"),jh=tr("animationiteration"),Zh=tr("animationstart"),y_=tr("transitionrun"),b_=tr("transitionstart"),M_=tr("transitioncancel"),Kh=tr("transitionend"),Qh=new Map,Kc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Kc.push("scrollEnd");function pi(e,n){Qh.set(e,n),De(n,[e])}var Ko=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ni=[],Nr=0,Qc=0;function Qo(){for(var e=Nr,n=Qc=Nr=0;n<e;){var a=ni[n];ni[n++]=null;var s=ni[n];ni[n++]=null;var c=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,s!==null&&c!==null){var g=s.pending;g===null?c.next=c:(c.next=g.next,g.next=c),s.pending=c}f!==0&&Jh(a,c,f)}}function Jo(e,n,a,s){ni[Nr++]=e,ni[Nr++]=n,ni[Nr++]=a,ni[Nr++]=s,Qc|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function Jc(e,n,a,s){return Jo(e,n,a,s),$o(e)}function nr(e,n){return Jo(e,null,null,n),$o(e)}function Jh(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;return e.tag===3?(f=e.stateNode,c&&n!==null&&(c=31-Ve(a),e=f.hiddenUpdates,s=e[c],s===null?e[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function $o(e){if(50<fo)throw fo=0,lf=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Or={};function E_(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(e,n,a,s){return new E_(e,n,a,s)}function $c(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Fi(e,n){var a=e.alternate;return a===null?(a=qn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function $h(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function el(e,n,a,s,c,f){var g=0;if(s=e,typeof e=="function")$c(e)&&(g=1);else if(typeof e=="string")g=wv(e,a,Ee.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case w:return e=qn(31,a,n,c),e.elementType=w,e.lanes=f,e;case C:return ir(a.children,c,f,n);case y:g=8,c|=24;break;case v:return e=qn(12,a,n,c|2),e.elementType=v,e.lanes=f,e;case k:return e=qn(13,a,n,c),e.elementType=k,e.lanes=f,e;case N:return e=qn(19,a,n,c),e.elementType=N,e.lanes=f,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case U:g=10;break e;case O:g=9;break e;case F:g=11;break e;case B:g=14;break e;case J:g=16,s=null;break e}g=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=qn(g,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function ir(e,n,a,s){return e=qn(7,e,s,n),e.lanes=a,e}function eu(e,n,a){return e=qn(6,e,null,n),e.lanes=a,e}function ep(e){var n=qn(18,null,null,0);return n.stateNode=e,n}function tu(e,n,a){return n=qn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var tp=new WeakMap;function ii(e,n){if(typeof e=="object"&&e!==null){var a=tp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:Ot(n)},tp.set(e,n),n)}return{value:e,source:n,stack:Ot(n)}}var zr=[],Pr=0,tl=null,Xs=0,ai=[],ri=0,ga=null,Ti=1,Ai="";function Ii(e,n){zr[Pr++]=Xs,zr[Pr++]=tl,tl=e,Xs=n}function np(e,n,a){ai[ri++]=Ti,ai[ri++]=Ai,ai[ri++]=ga,ga=e;var s=Ti;e=Ai;var c=32-Ve(s)-1;s&=~(1<<c),a+=1;var f=32-Ve(n)+c;if(30<f){var g=c-c%5;f=(s&(1<<g)-1).toString(32),s>>=g,c-=g,Ti=1<<32-Ve(n)+c|a<<c|s,Ai=f+e}else Ti=1<<f|a<<c|s,Ai=e}function nu(e){e.return!==null&&(Ii(e,1),np(e,1,0))}function iu(e){for(;e===tl;)tl=zr[--Pr],zr[Pr]=null,Xs=zr[--Pr],zr[Pr]=null;for(;e===ga;)ga=ai[--ri],ai[ri]=null,Ai=ai[--ri],ai[ri]=null,Ti=ai[--ri],ai[ri]=null}function ip(e,n){ai[ri++]=Ti,ai[ri++]=Ai,ai[ri++]=ga,Ti=n.id,Ai=n.overflow,ga=e}var En=null,jt=null,bt=!1,_a=null,si=!1,au=Error(r(519));function va(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ws(ii(n,e)),au}function ap(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[rn]=e,n[fn]=s,a){case"dialog":gt("cancel",n),gt("close",n);break;case"iframe":case"object":case"embed":gt("load",n);break;case"video":case"audio":for(a=0;a<po.length;a++)gt(po[a],n);break;case"source":gt("error",n);break;case"img":case"image":case"link":gt("error",n),gt("load",n);break;case"details":gt("toggle",n);break;case"input":gt("invalid",n),Yt(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":gt("invalid",n);break;case"textarea":gt("invalid",n),Mn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||ym(n.textContent,a)?(s.popover!=null&&(gt("beforetoggle",n),gt("toggle",n)),s.onScroll!=null&&gt("scroll",n),s.onScrollEnd!=null&&gt("scrollend",n),s.onClick!=null&&(n.onclick=Pi),n=!0):n=!1,n||va(e,!0)}function rp(e){for(En=e.return;En;)switch(En.tag){case 5:case 31:case 13:si=!1;return;case 27:case 3:si=!0;return;default:En=En.return}}function Br(e){if(e!==En)return!1;if(!bt)return rp(e),bt=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Mf(e.type,e.memoizedProps)),a=!a),a&&jt&&va(e),rp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));jt=Dm(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));jt=Dm(e)}else n===27?(n=jt,Na(e.type)?(e=Cf,Cf=null,jt=e):jt=n):jt=En?li(e.stateNode.nextSibling):null;return!0}function ar(){jt=En=null,bt=!1}function ru(){var e=_a;return e!==null&&(In===null?In=e:In.push.apply(In,e),_a=null),e}function Ws(e){_a===null?_a=[e]:_a.push(e)}var su=L(null),rr=null,Hi=null;function Sa(e,n,a){ye(su,n._currentValue),n._currentValue=a}function Gi(e){e._currentValue=su.current,ae(su)}function ou(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function lu(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;e:for(;f!==null;){var E=f;f=c;for(var z=0;z<n.length;z++)if(E.context===n[z]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),ou(f.return,a,e),s||(g=null);break e}f=E.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),ou(g,a,e),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===e){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function Fr(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var E=c.type;Wn(c.pendingProps.value,g.value)||(e!==null?e.push(E):e=[E])}}else if(c===le.current){if(g=c.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(vo):e=[vo])}c=c.return}e!==null&&lu(n,e,a,s),n.flags|=262144}function nl(e){for(e=e.firstContext;e!==null;){if(!Wn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function sr(e){rr=e,Hi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Tn(e){return sp(rr,e)}function il(e,n){return rr===null&&sr(e),sp(e,n)}function sp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Hi===null){if(e===null)throw Error(r(308));Hi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Hi=Hi.next=n;return a}var T_=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},A_=o.unstable_scheduleCallback,R_=o.unstable_NormalPriority,sn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cu(){return{controller:new T_,data:new Map,refCount:0}}function qs(e){e.refCount--,e.refCount===0&&A_(R_,function(){e.controller.abort()})}var Ys=null,uu=0,Ir=0,Hr=null;function C_(e,n){if(Ys===null){var a=Ys=[];uu=0,Ir=pf(),Hr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return uu++,n.then(op,op),n}function op(){if(--uu===0&&Ys!==null){Hr!==null&&(Hr.status="fulfilled");var e=Ys;Ys=null,Ir=0,Hr=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function w_(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var lp=P.S;P.S=function(e,n){W0=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&C_(e,n),lp!==null&&lp(e,n)};var or=L(null);function fu(){var e=or.current;return e!==null?e:Wt.pooledCache}function al(e,n){n===null?ye(or,or.current):ye(or,n.pool)}function cp(){var e=fu();return e===null?null:{parent:sn._currentValue,pool:e}}var Gr=Error(r(460)),du=Error(r(474)),rl=Error(r(542)),sl={then:function(){}};function up(e){return e=e.status,e==="fulfilled"||e==="rejected"}function fp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Pi,Pi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,hp(e),e;default:if(typeof n.status=="string")n.then(Pi,Pi);else{if(e=Wt,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,hp(e),e}throw cr=n,Gr}}function lr(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(cr=a,Gr):a}}var cr=null;function dp(){if(cr===null)throw Error(r(459));var e=cr;return cr=null,e}function hp(e){if(e===Gr||e===rl)throw Error(r(483))}var Vr=null,js=0;function ol(e){var n=js;return js+=1,Vr===null&&(Vr=[]),fp(Vr,e,n)}function Zs(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function ll(e,n){throw n.$$typeof===S?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function pp(e){function n(W,G){if(e){var Z=W.deletions;Z===null?(W.deletions=[G],W.flags|=16):Z.push(G)}}function a(W,G){if(!e)return null;for(;G!==null;)n(W,G),G=G.sibling;return null}function s(W){for(var G=new Map;W!==null;)W.key!==null?G.set(W.key,W):G.set(W.index,W),W=W.sibling;return G}function c(W,G){return W=Fi(W,G),W.index=0,W.sibling=null,W}function f(W,G,Z){return W.index=Z,e?(Z=W.alternate,Z!==null?(Z=Z.index,Z<G?(W.flags|=67108866,G):Z):(W.flags|=67108866,G)):(W.flags|=1048576,G)}function g(W){return e&&W.alternate===null&&(W.flags|=67108866),W}function E(W,G,Z,de){return G===null||G.tag!==6?(G=eu(Z,W.mode,de),G.return=W,G):(G=c(G,Z),G.return=W,G)}function z(W,G,Z,de){var Ke=Z.type;return Ke===C?ue(W,G,Z.props.children,de,Z.key):G!==null&&(G.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===J&&lr(Ke)===G.type)?(G=c(G,Z.props),Zs(G,Z),G.return=W,G):(G=el(Z.type,Z.key,Z.props,null,W.mode,de),Zs(G,Z),G.return=W,G)}function Q(W,G,Z,de){return G===null||G.tag!==4||G.stateNode.containerInfo!==Z.containerInfo||G.stateNode.implementation!==Z.implementation?(G=tu(Z,W.mode,de),G.return=W,G):(G=c(G,Z.children||[]),G.return=W,G)}function ue(W,G,Z,de,Ke){return G===null||G.tag!==7?(G=ir(Z,W.mode,de,Ke),G.return=W,G):(G=c(G,Z),G.return=W,G)}function me(W,G,Z){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=eu(""+G,W.mode,Z),G.return=W,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case b:return Z=el(G.type,G.key,G.props,null,W.mode,Z),Zs(Z,G),Z.return=W,Z;case A:return G=tu(G,W.mode,Z),G.return=W,G;case J:return G=lr(G),me(W,G,Z)}if(fe(G)||ee(G))return G=ir(G,W.mode,Z,null),G.return=W,G;if(typeof G.then=="function")return me(W,ol(G),Z);if(G.$$typeof===U)return me(W,il(W,G),Z);ll(W,G)}return null}function te(W,G,Z,de){var Ke=G!==null?G.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Ke!==null?null:E(W,G,""+Z,de);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case b:return Z.key===Ke?z(W,G,Z,de):null;case A:return Z.key===Ke?Q(W,G,Z,de):null;case J:return Z=lr(Z),te(W,G,Z,de)}if(fe(Z)||ee(Z))return Ke!==null?null:ue(W,G,Z,de,null);if(typeof Z.then=="function")return te(W,G,ol(Z),de);if(Z.$$typeof===U)return te(W,G,il(W,Z),de);ll(W,Z)}return null}function se(W,G,Z,de,Ke){if(typeof de=="string"&&de!==""||typeof de=="number"||typeof de=="bigint")return W=W.get(Z)||null,E(G,W,""+de,Ke);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case b:return W=W.get(de.key===null?Z:de.key)||null,z(G,W,de,Ke);case A:return W=W.get(de.key===null?Z:de.key)||null,Q(G,W,de,Ke);case J:return de=lr(de),se(W,G,Z,de,Ke)}if(fe(de)||ee(de))return W=W.get(Z)||null,ue(G,W,de,Ke,null);if(typeof de.then=="function")return se(W,G,Z,ol(de),Ke);if(de.$$typeof===U)return se(W,G,Z,il(G,de),Ke);ll(G,de)}return null}function Ie(W,G,Z,de){for(var Ke=null,Ct=null,ke=G,ut=G=0,vt=null;ke!==null&&ut<Z.length;ut++){ke.index>ut?(vt=ke,ke=null):vt=ke.sibling;var wt=te(W,ke,Z[ut],de);if(wt===null){ke===null&&(ke=vt);break}e&&ke&&wt.alternate===null&&n(W,ke),G=f(wt,G,ut),Ct===null?Ke=wt:Ct.sibling=wt,Ct=wt,ke=vt}if(ut===Z.length)return a(W,ke),bt&&Ii(W,ut),Ke;if(ke===null){for(;ut<Z.length;ut++)ke=me(W,Z[ut],de),ke!==null&&(G=f(ke,G,ut),Ct===null?Ke=ke:Ct.sibling=ke,Ct=ke);return bt&&Ii(W,ut),Ke}for(ke=s(ke);ut<Z.length;ut++)vt=se(ke,W,ut,Z[ut],de),vt!==null&&(e&&vt.alternate!==null&&ke.delete(vt.key===null?ut:vt.key),G=f(vt,G,ut),Ct===null?Ke=vt:Ct.sibling=vt,Ct=vt);return e&&ke.forEach(function(Fa){return n(W,Fa)}),bt&&Ii(W,ut),Ke}function et(W,G,Z,de){if(Z==null)throw Error(r(151));for(var Ke=null,Ct=null,ke=G,ut=G=0,vt=null,wt=Z.next();ke!==null&&!wt.done;ut++,wt=Z.next()){ke.index>ut?(vt=ke,ke=null):vt=ke.sibling;var Fa=te(W,ke,wt.value,de);if(Fa===null){ke===null&&(ke=vt);break}e&&ke&&Fa.alternate===null&&n(W,ke),G=f(Fa,G,ut),Ct===null?Ke=Fa:Ct.sibling=Fa,Ct=Fa,ke=vt}if(wt.done)return a(W,ke),bt&&Ii(W,ut),Ke;if(ke===null){for(;!wt.done;ut++,wt=Z.next())wt=me(W,wt.value,de),wt!==null&&(G=f(wt,G,ut),Ct===null?Ke=wt:Ct.sibling=wt,Ct=wt);return bt&&Ii(W,ut),Ke}for(ke=s(ke);!wt.done;ut++,wt=Z.next())wt=se(ke,W,ut,wt.value,de),wt!==null&&(e&&wt.alternate!==null&&ke.delete(wt.key===null?ut:wt.key),G=f(wt,G,ut),Ct===null?Ke=wt:Ct.sibling=wt,Ct=wt);return e&&ke.forEach(function(Hv){return n(W,Hv)}),bt&&Ii(W,ut),Ke}function Ht(W,G,Z,de){if(typeof Z=="object"&&Z!==null&&Z.type===C&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case b:e:{for(var Ke=Z.key;G!==null;){if(G.key===Ke){if(Ke=Z.type,Ke===C){if(G.tag===7){a(W,G.sibling),de=c(G,Z.props.children),de.return=W,W=de;break e}}else if(G.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===J&&lr(Ke)===G.type){a(W,G.sibling),de=c(G,Z.props),Zs(de,Z),de.return=W,W=de;break e}a(W,G);break}else n(W,G);G=G.sibling}Z.type===C?(de=ir(Z.props.children,W.mode,de,Z.key),de.return=W,W=de):(de=el(Z.type,Z.key,Z.props,null,W.mode,de),Zs(de,Z),de.return=W,W=de)}return g(W);case A:e:{for(Ke=Z.key;G!==null;){if(G.key===Ke)if(G.tag===4&&G.stateNode.containerInfo===Z.containerInfo&&G.stateNode.implementation===Z.implementation){a(W,G.sibling),de=c(G,Z.children||[]),de.return=W,W=de;break e}else{a(W,G);break}else n(W,G);G=G.sibling}de=tu(Z,W.mode,de),de.return=W,W=de}return g(W);case J:return Z=lr(Z),Ht(W,G,Z,de)}if(fe(Z))return Ie(W,G,Z,de);if(ee(Z)){if(Ke=ee(Z),typeof Ke!="function")throw Error(r(150));return Z=Ke.call(Z),et(W,G,Z,de)}if(typeof Z.then=="function")return Ht(W,G,ol(Z),de);if(Z.$$typeof===U)return Ht(W,G,il(W,Z),de);ll(W,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint"?(Z=""+Z,G!==null&&G.tag===6?(a(W,G.sibling),de=c(G,Z),de.return=W,W=de):(a(W,G),de=eu(Z,W.mode,de),de.return=W,W=de),g(W)):a(W,G)}return function(W,G,Z,de){try{js=0;var Ke=Ht(W,G,Z,de);return Vr=null,Ke}catch(ke){if(ke===Gr||ke===rl)throw ke;var Ct=qn(29,ke,null,W.mode);return Ct.lanes=de,Ct.return=W,Ct}finally{}}}var ur=pp(!0),mp=pp(!1),ya=!1;function hu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ba(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ma(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,(Lt&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=$o(e),Jh(e,null,a),n}return Jo(e,s,n,a),$o(e)}function Ks(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Ds(e,a)}}function mu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var xu=!1;function Qs(){if(xu){var e=Hr;if(e!==null)throw e}}function Js(e,n,a,s){xu=!1;var c=e.updateQueue;ya=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var z=E,Q=z.next;z.next=null,g===null?f=Q:g.next=Q,g=z;var ue=e.alternate;ue!==null&&(ue=ue.updateQueue,E=ue.lastBaseUpdate,E!==g&&(E===null?ue.firstBaseUpdate=Q:E.next=Q,ue.lastBaseUpdate=z))}if(f!==null){var me=c.baseState;g=0,ue=Q=z=null,E=f;do{var te=E.lane&-536870913,se=te!==E.lane;if(se?(_t&te)===te:(s&te)===te){te!==0&&te===Ir&&(xu=!0),ue!==null&&(ue=ue.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});e:{var Ie=e,et=E;te=n;var Ht=a;switch(et.tag){case 1:if(Ie=et.payload,typeof Ie=="function"){me=Ie.call(Ht,me,te);break e}me=Ie;break e;case 3:Ie.flags=Ie.flags&-65537|128;case 0:if(Ie=et.payload,te=typeof Ie=="function"?Ie.call(Ht,me,te):Ie,te==null)break e;me=_({},me,te);break e;case 2:ya=!0}}te=E.callback,te!==null&&(e.flags|=64,se&&(e.flags|=8192),se=c.callbacks,se===null?c.callbacks=[te]:se.push(te))}else se={lane:te,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ue===null?(Q=ue=se,z=me):ue=ue.next=se,g|=te;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;se=E,E=se.next,se.next=null,c.lastBaseUpdate=se,c.shared.pending=null}}while(!0);ue===null&&(z=me),c.baseState=z,c.firstBaseUpdate=Q,c.lastBaseUpdate=ue,f===null&&(c.shared.lanes=0),Ca|=g,e.lanes=g,e.memoizedState=me}}function xp(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function gp(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)xp(a[e],n)}var kr=L(null),cl=L(0);function _p(e,n){e=Ki,ye(cl,e),ye(kr,n),Ki=e|n.baseLanes}function gu(){ye(cl,Ki),ye(kr,kr.current)}function _u(){Ki=cl.current,ae(kr),ae(cl)}var Yn=L(null),oi=null;function Ea(e){var n=e.alternate;ye(en,en.current&1),ye(Yn,e),oi===null&&(n===null||kr.current!==null||n.memoizedState!==null)&&(oi=e)}function vu(e){ye(en,en.current),ye(Yn,e),oi===null&&(oi=e)}function vp(e){e.tag===22?(ye(en,en.current),ye(Yn,e),oi===null&&(oi=e)):Ta()}function Ta(){ye(en,en.current),ye(Yn,Yn.current)}function jn(e){ae(Yn),oi===e&&(oi=null),ae(en)}var en=L(0);function ul(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Af(a)||Rf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Vi=0,st=null,Ft=null,on=null,fl=!1,Xr=!1,fr=!1,dl=0,$s=0,Wr=null,D_=0;function Qt(){throw Error(r(321))}function Su(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Wn(e[a],n[a]))return!1;return!0}function yu(e,n,a,s,c,f){return Vi=f,st=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=e===null||e.memoizedState===null?n0:Pu,fr=!1,f=a(s,c),fr=!1,Xr&&(f=yp(n,a,s,c)),Sp(e),f}function Sp(e){P.H=no;var n=Ft!==null&&Ft.next!==null;if(Vi=0,on=Ft=st=null,fl=!1,$s=0,Wr=null,n)throw Error(r(300));e===null||ln||(e=e.dependencies,e!==null&&nl(e)&&(ln=!0))}function yp(e,n,a,s){st=e;var c=0;do{if(Xr&&(Wr=null),$s=0,Xr=!1,25<=c)throw Error(r(301));if(c+=1,on=Ft=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=i0,f=n(a,s)}while(Xr);return f}function U_(){var e=P.H,n=e.useState()[0];return n=typeof n.then=="function"?eo(n):n,e=e.useState()[0],(Ft!==null?Ft.memoizedState:null)!==e&&(st.flags|=1024),n}function bu(){var e=dl!==0;return dl=0,e}function Mu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Eu(e){if(fl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}fl=!1}Vi=0,on=Ft=st=null,Xr=!1,$s=dl=0,Wr=null}function Ln(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?st.memoizedState=on=e:on=on.next=e,on}function tn(){if(Ft===null){var e=st.alternate;e=e!==null?e.memoizedState:null}else e=Ft.next;var n=on===null?st.memoizedState:on.next;if(n!==null)on=n,Ft=e;else{if(e===null)throw st.alternate===null?Error(r(467)):Error(r(310));Ft=e,e={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},on===null?st.memoizedState=on=e:on=on.next=e}return on}function hl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function eo(e){var n=$s;return $s+=1,Wr===null&&(Wr=[]),e=fp(Wr,e,n),n=st,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?n0:Pu),e}function pl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return eo(e);if(e.$$typeof===U)return Tn(e)}throw Error(r(438,String(e)))}function Tu(e){var n=null,a=st.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=st.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=hl(),st.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=R;return n.index++,a}function ki(e,n){return typeof n=="function"?n(e):n}function ml(e){var n=tn();return Au(n,Ft,e)}function Au(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var E=g=null,z=null,Q=n,ue=!1;do{var me=Q.lane&-536870913;if(me!==Q.lane?(_t&me)===me:(Vi&me)===me){var te=Q.revertLane;if(te===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),me===Ir&&(ue=!0);else if((Vi&te)===te){Q=Q.next,te===Ir&&(ue=!0);continue}else me={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},z===null?(E=z=me,g=f):z=z.next=me,st.lanes|=te,Ca|=te;me=Q.action,fr&&a(f,me),f=Q.hasEagerState?Q.eagerState:a(f,me)}else te={lane:me,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},z===null?(E=z=te,g=f):z=z.next=te,st.lanes|=me,Ca|=me;Q=Q.next}while(Q!==null&&Q!==n);if(z===null?g=f:z.next=E,!Wn(f,e.memoizedState)&&(ln=!0,ue&&(a=Hr,a!==null)))throw a;e.memoizedState=f,e.baseState=g,e.baseQueue=z,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function Ru(e){var n=tn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=e(f,g.action),g=g.next;while(g!==c);Wn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function bp(e,n,a){var s=st,c=tn(),f=bt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!Wn((Ft||c).memoizedState,a);if(g&&(c.memoizedState=a,ln=!0),c=c.queue,Du(Tp.bind(null,s,c,e),[e]),c.getSnapshot!==n||g||on!==null&&on.memoizedState.tag&1){if(s.flags|=2048,qr(9,{destroy:void 0},Ep.bind(null,s,c,a,n),null),Wt===null)throw Error(r(349));f||(Vi&127)!==0||Mp(s,n,a)}return a}function Mp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=st.updateQueue,n===null?(n=hl(),st.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Ep(e,n,a,s){n.value=a,n.getSnapshot=s,Ap(n)&&Rp(e)}function Tp(e,n,a){return a(function(){Ap(n)&&Rp(e)})}function Ap(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Wn(e,a)}catch{return!0}}function Rp(e){var n=nr(e,2);n!==null&&Hn(n,e,2)}function Cu(e){var n=Ln();if(typeof e=="function"){var a=e;if(e=a(),fr){Ye(!0);try{a()}finally{Ye(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:e},n}function Cp(e,n,a,s){return e.baseState=a,Au(e,Ft,typeof s=="function"?s:ki)}function L_(e,n,a,s,c){if(_l(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};P.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,wp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function wp(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=P.T,g={};P.T=g;try{var E=a(c,s),z=P.S;z!==null&&z(g,E),Dp(e,n,E)}catch(Q){wu(e,n,Q)}finally{f!==null&&g.types!==null&&(f.types=g.types),P.T=f}}else try{f=a(c,s),Dp(e,n,f)}catch(Q){wu(e,n,Q)}}function Dp(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Up(e,n,s)},function(s){return wu(e,n,s)}):Up(e,n,a)}function Up(e,n,a){n.status="fulfilled",n.value=a,Lp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,wp(e,a)))}function wu(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Lp(n),n=n.next;while(n!==s)}e.action=null}function Lp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function Np(e,n){return n}function Op(e,n){if(bt){var a=Wt.formState;if(a!==null){e:{var s=st;if(bt){if(jt){t:{for(var c=jt,f=si;c.nodeType!==8;){if(!f){c=null;break t}if(c=li(c.nextSibling),c===null){c=null;break t}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){jt=li(c.nextSibling),s=c.data==="F!";break e}}va(s)}s=!1}s&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Np,lastRenderedState:n},a.queue=s,a=$p.bind(null,st,s),s.dispatch=a,s=Cu(!1),f=zu.bind(null,st,!1,s.queue),s=Ln(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=L_.bind(null,st,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function zp(e){var n=tn();return Pp(n,Ft,e)}function Pp(e,n,a){if(n=Au(e,n,Np)[0],e=ml(ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=eo(n)}catch(g){throw g===Gr?rl:g}else s=n;n=tn();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(st.flags|=2048,qr(9,{destroy:void 0},N_.bind(null,c,a),null)),[s,f,e]}function N_(e,n){e.action=n}function Bp(e){var n=tn(),a=Ft;if(a!==null)return Pp(n,a,e);tn(),n=n.memoizedState,a=tn();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function qr(e,n,a,s){return e={tag:e,create:a,deps:s,inst:n,next:null},n=st.updateQueue,n===null&&(n=hl(),st.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function Fp(){return tn().memoizedState}function xl(e,n,a,s){var c=Ln();st.flags|=e,c.memoizedState=qr(1|n,{destroy:void 0},a,s===void 0?null:s)}function gl(e,n,a,s){var c=tn();s=s===void 0?null:s;var f=c.memoizedState.inst;Ft!==null&&s!==null&&Su(s,Ft.memoizedState.deps)?c.memoizedState=qr(n,f,a,s):(st.flags|=e,c.memoizedState=qr(1|n,f,a,s))}function Ip(e,n){xl(8390656,8,e,n)}function Du(e,n){gl(2048,8,e,n)}function O_(e){st.flags|=4;var n=st.updateQueue;if(n===null)n=hl(),st.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function Hp(e){var n=tn().memoizedState;return O_({ref:n,nextImpl:e}),function(){if((Lt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Gp(e,n){return gl(4,2,e,n)}function Vp(e,n){return gl(4,4,e,n)}function kp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Xp(e,n,a){a=a!=null?a.concat([e]):null,gl(4,4,kp.bind(null,n,e),a)}function Uu(){}function Wp(e,n){var a=tn();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Su(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function qp(e,n){var a=tn();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Su(n,s[1]))return s[0];if(s=e(),fr){Ye(!0);try{e()}finally{Ye(!1)}}return a.memoizedState=[s,n],s}function Lu(e,n,a){return a===void 0||(Vi&1073741824)!==0&&(_t&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=Y0(),st.lanes|=e,Ca|=e,a)}function Yp(e,n,a,s){return Wn(a,n)?a:kr.current!==null?(e=Lu(e,a,s),Wn(e,n)||(ln=!0),e):(Vi&42)===0||(Vi&1073741824)!==0&&(_t&261930)===0?(ln=!0,e.memoizedState=a):(e=Y0(),st.lanes|=e,Ca|=e,n)}function jp(e,n,a,s,c){var f=j.p;j.p=f!==0&&8>f?f:8;var g=P.T,E={};P.T=E,zu(e,!1,n,a);try{var z=c(),Q=P.S;if(Q!==null&&Q(E,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ue=w_(z,s);to(e,n,ue,Qn(e))}else to(e,n,s,Qn(e))}catch(me){to(e,n,{then:function(){},status:"rejected",reason:me},Qn())}finally{j.p=f,g!==null&&E.types!==null&&(g.types=E.types),P.T=g}}function z_(){}function Nu(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=Zp(e).queue;jp(e,c,n,Y,a===null?z_:function(){return Kp(e),a(s)})}function Zp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Kp(e){var n=Zp(e);n.next===null&&(n=e.alternate.memoizedState),to(e,n.next.queue,{},Qn())}function Ou(){return Tn(vo)}function Qp(){return tn().memoizedState}function Jp(){return tn().memoizedState}function P_(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();e=ba(a);var s=Ma(n,e,a);s!==null&&(Hn(s,n,a),Ks(s,n,a)),n={cache:cu()},e.payload=n;return}n=n.return}}function B_(e,n,a){var s=Qn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},_l(e)?e0(n,a):(a=Jc(e,n,a,s),a!==null&&(Hn(a,e,s),t0(a,n,s)))}function $p(e,n,a){var s=Qn();to(e,n,a,s)}function to(e,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(_l(e))e0(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,E=f(g,a);if(c.hasEagerState=!0,c.eagerState=E,Wn(E,g))return Jo(e,n,c,0),Wt===null&&Qo(),!1}catch{}finally{}if(a=Jc(e,n,c,s),a!==null)return Hn(a,e,s),t0(a,n,s),!0}return!1}function zu(e,n,a,s){if(s={lane:2,revertLane:pf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},_l(e)){if(n)throw Error(r(479))}else n=Jc(e,a,s,2),n!==null&&Hn(n,e,2)}function _l(e){var n=e.alternate;return e===st||n!==null&&n===st}function e0(e,n){Xr=fl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function t0(e,n,a){if((a&4194048)!==0){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,Ds(e,a)}}var no={readContext:Tn,use:pl,useCallback:Qt,useContext:Qt,useEffect:Qt,useImperativeHandle:Qt,useLayoutEffect:Qt,useInsertionEffect:Qt,useMemo:Qt,useReducer:Qt,useRef:Qt,useState:Qt,useDebugValue:Qt,useDeferredValue:Qt,useTransition:Qt,useSyncExternalStore:Qt,useId:Qt,useHostTransitionStatus:Qt,useFormState:Qt,useActionState:Qt,useOptimistic:Qt,useMemoCache:Qt,useCacheRefresh:Qt};no.useEffectEvent=Qt;var n0={readContext:Tn,use:pl,useCallback:function(e,n){return Ln().memoizedState=[e,n===void 0?null:n],e},useContext:Tn,useEffect:Ip,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,xl(4194308,4,kp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return xl(4194308,4,e,n)},useInsertionEffect:function(e,n){xl(4,2,e,n)},useMemo:function(e,n){var a=Ln();n=n===void 0?null:n;var s=e();if(fr){Ye(!0);try{e()}finally{Ye(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Ln();if(a!==void 0){var c=a(n);if(fr){Ye(!0);try{a(n)}finally{Ye(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=B_.bind(null,st,e),[s.memoizedState,e]},useRef:function(e){var n=Ln();return e={current:e},n.memoizedState=e},useState:function(e){e=Cu(e);var n=e.queue,a=$p.bind(null,st,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Uu,useDeferredValue:function(e,n){var a=Ln();return Lu(a,e,n)},useTransition:function(){var e=Cu(!1);return e=jp.bind(null,st,e.queue,!0,!1),Ln().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=st,c=Ln();if(bt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Wt===null)throw Error(r(349));(_t&127)!==0||Mp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Ip(Tp.bind(null,s,f,e),[e]),s.flags|=2048,qr(9,{destroy:void 0},Ep.bind(null,s,f,a,n),null),a},useId:function(){var e=Ln(),n=Wt.identifierPrefix;if(bt){var a=Ai,s=Ti;a=(s&~(1<<32-Ve(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=dl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=D_++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:Ou,useFormState:Op,useActionState:Op,useOptimistic:function(e){var n=Ln();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=zu.bind(null,st,!0,a),a.dispatch=n,[e,n]},useMemoCache:Tu,useCacheRefresh:function(){return Ln().memoizedState=P_.bind(null,st)},useEffectEvent:function(e){var n=Ln(),a={impl:e};return n.memoizedState=a,function(){if((Lt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Pu={readContext:Tn,use:pl,useCallback:Wp,useContext:Tn,useEffect:Du,useImperativeHandle:Xp,useInsertionEffect:Gp,useLayoutEffect:Vp,useMemo:qp,useReducer:ml,useRef:Fp,useState:function(){return ml(ki)},useDebugValue:Uu,useDeferredValue:function(e,n){var a=tn();return Yp(a,Ft.memoizedState,e,n)},useTransition:function(){var e=ml(ki)[0],n=tn().memoizedState;return[typeof e=="boolean"?e:eo(e),n]},useSyncExternalStore:bp,useId:Qp,useHostTransitionStatus:Ou,useFormState:zp,useActionState:zp,useOptimistic:function(e,n){var a=tn();return Cp(a,Ft,e,n)},useMemoCache:Tu,useCacheRefresh:Jp};Pu.useEffectEvent=Hp;var i0={readContext:Tn,use:pl,useCallback:Wp,useContext:Tn,useEffect:Du,useImperativeHandle:Xp,useInsertionEffect:Gp,useLayoutEffect:Vp,useMemo:qp,useReducer:Ru,useRef:Fp,useState:function(){return Ru(ki)},useDebugValue:Uu,useDeferredValue:function(e,n){var a=tn();return Ft===null?Lu(a,e,n):Yp(a,Ft.memoizedState,e,n)},useTransition:function(){var e=Ru(ki)[0],n=tn().memoizedState;return[typeof e=="boolean"?e:eo(e),n]},useSyncExternalStore:bp,useId:Qp,useHostTransitionStatus:Ou,useFormState:Bp,useActionState:Bp,useOptimistic:function(e,n){var a=tn();return Ft!==null?Cp(a,Ft,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Tu,useCacheRefresh:Jp};i0.useEffectEvent=Hp;function Bu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:_({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Fu={enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Qn(),c=ba(s);c.payload=n,a!=null&&(c.callback=a),n=Ma(e,c,s),n!==null&&(Hn(n,e,s),Ks(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Qn(),c=ba(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ma(e,c,s),n!==null&&(Hn(n,e,s),Ks(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Qn(),s=ba(a);s.tag=2,n!=null&&(s.callback=n),n=Ma(e,s,a),n!==null&&(Hn(n,e,a),Ks(n,e,a))}};function a0(e,n,a,s,c,f,g){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!Vs(a,s)||!Vs(c,f):!0}function r0(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Fu.enqueueReplaceState(n,n.state,null)}function dr(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=_({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function s0(e){Ko(e)}function o0(e){console.error(e)}function l0(e){Ko(e)}function vl(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function c0(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Iu(e,n,a){return a=ba(a),a.tag=3,a.payload={element:null},a.callback=function(){vl(e,n)},a}function u0(e){return e=ba(e),e.tag=3,e}function f0(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){c0(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(e.callback=function(){c0(n,a,s),typeof c!="function"&&(wa===null?wa=new Set([this]):wa.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function F_(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Fr(n,a,c,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return oi===null?Ul():a.alternate===null&&Jt===0&&(Jt=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===sl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),ff(e,s,c)),!1;case 22:return a.flags|=65536,s===sl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),ff(e,s,c)),!1}throw Error(r(435,a.tag))}return ff(e,s,c),Ul(),!1}if(bt)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==au&&(e=Error(r(422),{cause:s}),Ws(ii(e,a)))):(s!==au&&(n=Error(r(423),{cause:s}),Ws(ii(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=ii(s,a),c=Iu(e.stateNode,s,c),mu(e,c),Jt!==4&&(Jt=2)),!1;var f=Error(r(520),{cause:s});if(f=ii(f,a),uo===null?uo=[f]:uo.push(f),Jt!==4&&(Jt=2),n===null)return!0;s=ii(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=Iu(a.stateNode,s,e),mu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(wa===null||!wa.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=u0(c),f0(c,e,a,s),mu(a,c),!1}a=a.return}while(a!==null);return!1}var Hu=Error(r(461)),ln=!1;function An(e,n,a,s){n.child=e===null?mp(n,null,a,s):ur(n,e.child,a,s)}function d0(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var E in s)E!=="ref"&&(g[E]=s[E])}else g=s;return sr(n),s=yu(e,n,a,g,f,c),E=bu(),e!==null&&!ln?(Mu(e,n,c),Xi(e,n,c)):(bt&&E&&nu(n),n.flags|=1,An(e,n,s,c),n.child)}function h0(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!$c(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,p0(e,n,f,s,c)):(e=el(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!ju(e,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Vs,a(g,s)&&e.ref===n.ref)return Xi(e,n,c)}return n.flags|=1,e=Fi(f,s),e.ref=n.ref,e.return=n,n.child=e}function p0(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Vs(f,s)&&e.ref===n.ref)if(ln=!1,n.pendingProps=s=f,ju(e,c))(e.flags&131072)!==0&&(ln=!0);else return n.lanes=e.lanes,Xi(e,n,c)}return Gu(e,n,a,s,c)}function m0(e,n,a,s){var c=s.children,f=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,e!==null){for(s=n.child=e.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return x0(e,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&al(n,f!==null?f.cachePool:null),f!==null?_p(n,f):gu(),vp(n);else return s=n.lanes=536870912,x0(e,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(al(n,f.cachePool),_p(n,f),Ta(),n.memoizedState=null):(e!==null&&al(n,null),gu(),Ta());return An(e,n,c,a),n.child}function io(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function x0(e,n,a,s,c){var f=fu();return f=f===null?null:{parent:sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},e!==null&&al(n,null),gu(),vp(n),e!==null&&Fr(e,n,s,!0),n.childLanes=c,null}function Sl(e,n){return n=bl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function g0(e,n,a){return ur(n,e.child,null,a),e=Sl(n,n.pendingProps),e.flags|=2,jn(n),n.memoizedState=null,e}function I_(e,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(bt){if(s.mode==="hidden")return e=Sl(n,s),n.lanes=536870912,io(null,e);if(vu(n),(e=jt)?(e=wm(e,si),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ga!==null?{id:Ti,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},a=ep(e),a.return=n,n.child=a,En=n,jt=null)):e=null,e===null)throw va(n);return n.lanes=536870912,null}return Sl(n,s)}var f=e.memoizedState;if(f!==null){var g=f.dehydrated;if(vu(n),c)if(n.flags&256)n.flags&=-257,n=g0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(ln||Fr(e,n,a,!1),c=(a&e.childLanes)!==0,ln||c){if(s=Wt,s!==null&&(g=Us(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,nr(e,g),Hn(s,e,g),Hu;Ul(),n=g0(e,n,a)}else e=f.treeContext,jt=li(g.nextSibling),En=n,bt=!0,_a=null,si=!1,e!==null&&ip(n,e),n=Sl(n,s),n.flags|=4096;return n}return e=Fi(e.child,{mode:s.mode,children:s.children}),e.ref=n.ref,n.child=e,e.return=n,e}function yl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function Gu(e,n,a,s,c){return sr(n),a=yu(e,n,a,s,void 0,c),s=bu(),e!==null&&!ln?(Mu(e,n,c),Xi(e,n,c)):(bt&&s&&nu(n),n.flags|=1,An(e,n,a,c),n.child)}function _0(e,n,a,s,c,f){return sr(n),n.updateQueue=null,a=yp(n,s,a,c),Sp(e),s=bu(),e!==null&&!ln?(Mu(e,n,f),Xi(e,n,f)):(bt&&s&&nu(n),n.flags|=1,An(e,n,a,f),n.child)}function v0(e,n,a,s,c){if(sr(n),n.stateNode===null){var f=Or,g=a.contextType;typeof g=="object"&&g!==null&&(f=Tn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Fu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},hu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Tn(g):Or,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Bu(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Fu.enqueueReplaceState(f,f.state,null),Js(n,s,f,c),Qs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var E=n.memoizedProps,z=dr(a,E);f.props=z;var Q=f.context,ue=a.contextType;g=Or,typeof ue=="object"&&ue!==null&&(g=Tn(ue));var me=a.getDerivedStateFromProps;ue=typeof me=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ue||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||Q!==g)&&r0(n,f,s,g),ya=!1;var te=n.memoizedState;f.state=te,Js(n,s,f,c),Qs(),Q=n.memoizedState,E||te!==Q||ya?(typeof me=="function"&&(Bu(n,a,me,s),Q=n.memoizedState),(z=ya||a0(n,a,z,s,te,Q,g))?(ue||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Q),f.props=s,f.state=Q,f.context=g,s=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,pu(e,n),g=n.memoizedProps,ue=dr(a,g),f.props=ue,me=n.pendingProps,te=f.context,Q=a.contextType,z=Or,typeof Q=="object"&&Q!==null&&(z=Tn(Q)),E=a.getDerivedStateFromProps,(Q=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==me||te!==z)&&r0(n,f,s,z),ya=!1,te=n.memoizedState,f.state=te,Js(n,s,f,c),Qs();var se=n.memoizedState;g!==me||te!==se||ya||e!==null&&e.dependencies!==null&&nl(e.dependencies)?(typeof E=="function"&&(Bu(n,a,E,s),se=n.memoizedState),(ue=ya||a0(n,a,ue,s,te,se,z)||e!==null&&e.dependencies!==null&&nl(e.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,se,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,se,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&te===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&te===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=se),f.props=s,f.state=se,f.context=z,s=ue):(typeof f.componentDidUpdate!="function"||g===e.memoizedProps&&te===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===e.memoizedProps&&te===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,yl(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=ur(n,e.child,null,c),n.child=ur(n,null,a,c)):An(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Xi(e,n,c),e}function S0(e,n,a,s){return ar(),n.flags|=256,An(e,n,a,s),n.child}var Vu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ku(e){return{baseLanes:e,cachePool:cp()}}function Xu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Kn),e}function y0(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=e!==null&&e.memoizedState===null?!1:(en.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,e===null){if(bt){if(c?Ea(n):Ta(),(e=jt)?(e=wm(e,si),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:ga!==null?{id:Ti,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},a=ep(e),a.return=n,n.child=a,En=n,jt=null)):e=null,e===null)throw va(n);return Rf(e)?n.lanes=32:n.lanes=536870912,null}var E=s.children;return s=s.fallback,c?(Ta(),c=n.mode,E=bl({mode:"hidden",children:E},c),s=ir(s,c,a,null),E.return=n,s.return=n,E.sibling=s,n.child=E,s=n.child,s.memoizedState=ku(a),s.childLanes=Xu(e,g,a),n.memoizedState=Vu,io(null,s)):(Ea(n),Wu(n,E))}var z=e.memoizedState;if(z!==null&&(E=z.dehydrated,E!==null)){if(f)n.flags&256?(Ea(n),n.flags&=-257,n=qu(e,n,a)):n.memoizedState!==null?(Ta(),n.child=e.child,n.flags|=128,n=null):(Ta(),E=s.fallback,c=n.mode,s=bl({mode:"visible",children:s.children},c),E=ir(E,c,a,null),E.flags|=2,s.return=n,E.return=n,s.sibling=E,n.child=s,ur(n,e.child,null,a),s=n.child,s.memoizedState=ku(a),s.childLanes=Xu(e,g,a),n.memoizedState=Vu,n=io(null,s));else if(Ea(n),Rf(E)){if(g=E.nextSibling&&E.nextSibling.dataset,g)var Q=g.dgst;g=Q,s=Error(r(419)),s.stack="",s.digest=g,Ws({value:s,source:null,stack:null}),n=qu(e,n,a)}else if(ln||Fr(e,n,a,!1),g=(a&e.childLanes)!==0,ln||g){if(g=Wt,g!==null&&(s=Us(g,a),s!==0&&s!==z.retryLane))throw z.retryLane=s,nr(e,s),Hn(g,e,s),Hu;Af(E)||Ul(),n=qu(e,n,a)}else Af(E)?(n.flags|=192,n.child=e.child,n=null):(e=z.treeContext,jt=li(E.nextSibling),En=n,bt=!0,_a=null,si=!1,e!==null&&ip(n,e),n=Wu(n,s.children),n.flags|=4096);return n}return c?(Ta(),E=s.fallback,c=n.mode,z=e.child,Q=z.sibling,s=Fi(z,{mode:"hidden",children:s.children}),s.subtreeFlags=z.subtreeFlags&65011712,Q!==null?E=Fi(Q,E):(E=ir(E,c,a,null),E.flags|=2),E.return=n,s.return=n,s.sibling=E,n.child=s,io(null,s),s=n.child,E=e.child.memoizedState,E===null?E=ku(a):(c=E.cachePool,c!==null?(z=sn._currentValue,c=c.parent!==z?{parent:z,pool:z}:c):c=cp(),E={baseLanes:E.baseLanes|a,cachePool:c}),s.memoizedState=E,s.childLanes=Xu(e,g,a),n.memoizedState=Vu,io(e.child,s)):(Ea(n),a=e.child,e=a.sibling,a=Fi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(g=n.deletions,g===null?(n.deletions=[e],n.flags|=16):g.push(e)),n.child=a,n.memoizedState=null,a)}function Wu(e,n){return n=bl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function bl(e,n){return e=qn(22,e,null,n),e.lanes=0,e}function qu(e,n,a){return ur(n,e.child,null,a),e=Wu(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function b0(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),ou(e.return,n,a)}function Yu(e,n,a,s,c,f){var g=e.memoizedState;g===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function M0(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var g=en.current,E=(g&2)!==0;if(E?(g=g&1|2,n.flags|=128):g&=1,ye(en,g),An(e,n,s,a),s=bt?Xs:0,!E&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&b0(e,a,n);else if(e.tag===19)b0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&ul(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Yu(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&ul(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Yu(n,!0,a,null,f,s);break;case"together":Yu(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Xi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),Ca|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(Fr(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Fi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Fi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function ju(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&nl(e)))}function H_(e,n,a){switch(n.tag){case 3:Ce(n,n.stateNode.containerInfo),Sa(n,sn,e.memoizedState.cache),ar();break;case 27:case 5:Xe(n);break;case 4:Ce(n,n.stateNode.containerInfo);break;case 10:Sa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,vu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Ea(n),n.flags|=128,null):(a&n.child.childLanes)!==0?y0(e,n,a):(Ea(n),e=Xi(e,n,a),e!==null?e.sibling:null);Ea(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Fr(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return M0(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),ye(en,en.current),s)break;return null;case 22:return n.lanes=0,m0(e,n,a,n.pendingProps);case 24:Sa(n,sn,e.memoizedState.cache)}return Xi(e,n,a)}function E0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)ln=!0;else{if(!ju(e,a)&&(n.flags&128)===0)return ln=!1,H_(e,n,a);ln=(e.flags&131072)!==0}else ln=!1,bt&&(n.flags&1048576)!==0&&np(n,Xs,n.index);switch(n.lanes=0,n.tag){case 16:e:{var s=n.pendingProps;if(e=lr(n.elementType),n.type=e,typeof e=="function")$c(e)?(s=dr(e,s),n.tag=1,n=v0(null,n,e,s,a)):(n.tag=0,n=Gu(null,n,e,s,a));else{if(e!=null){var c=e.$$typeof;if(c===F){n.tag=11,n=d0(null,n,e,s,a);break e}else if(c===B){n.tag=14,n=h0(null,n,e,s,a);break e}}throw n=he(e)||e,Error(r(306,n,""))}}return n;case 0:return Gu(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=dr(s,n.pendingProps),v0(e,n,s,c,a);case 3:e:{if(Ce(n,n.stateNode.containerInfo),e===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,pu(e,n),Js(n,s,null,a);var g=n.memoizedState;if(s=g.cache,Sa(n,sn,s),s!==f.cache&&lu(n,[sn],a,!0),Qs(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=S0(e,n,s,a);break e}else if(s!==c){c=ii(Error(r(424)),n),Ws(c),n=S0(e,n,s,a);break e}else{switch(e=n.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(jt=li(e.firstChild),En=n,bt=!0,_a=null,si=!0,a=mp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ar(),s===c){n=Xi(e,n,a);break e}An(e,n,s,a)}n=n.child}return n;case 26:return yl(e,n),e===null?(a=zm(n.type,null,n.pendingProps,null))?n.memoizedState=a:bt||(a=n.type,e=n.pendingProps,s=Fl(ne.current).createElement(a),s[rn]=n,s[fn]=e,Rn(s,a,e),$(s),n.stateNode=s):n.memoizedState=zm(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Xe(n),e===null&&bt&&(s=n.stateNode=Lm(n.type,n.pendingProps,ne.current),En=n,si=!0,c=jt,Na(n.type)?(Cf=c,jt=li(s.firstChild)):jt=c),An(e,n,n.pendingProps.children,a),yl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&bt&&((c=s=jt)&&(s=xv(s,n.type,n.pendingProps,si),s!==null?(n.stateNode=s,En=n,jt=li(s.firstChild),si=!1,c=!0):c=!1),c||va(n)),Xe(n),c=n.type,f=n.pendingProps,g=e!==null?e.memoizedProps:null,s=f.children,Mf(c,f)?s=null:g!==null&&Mf(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=yu(e,n,U_,null,null,a),vo._currentValue=c),yl(e,n),An(e,n,s,a),n.child;case 6:return e===null&&bt&&((e=a=jt)&&(a=gv(a,n.pendingProps,si),a!==null?(n.stateNode=a,En=n,jt=null,e=!0):e=!1),e||va(n)),null;case 13:return y0(e,n,a);case 4:return Ce(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=ur(n,null,s,a):An(e,n,s,a),n.child;case 11:return d0(e,n,n.type,n.pendingProps,a);case 7:return An(e,n,n.pendingProps,a),n.child;case 8:return An(e,n,n.pendingProps.children,a),n.child;case 12:return An(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,Sa(n,n.type,s.value),An(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,sr(n),c=Tn(c),s=s(c),n.flags|=1,An(e,n,s,a),n.child;case 14:return h0(e,n,n.type,n.pendingProps,a);case 15:return p0(e,n,n.type,n.pendingProps,a);case 19:return M0(e,n,a);case 31:return I_(e,n,a);case 22:return m0(e,n,a,n.pendingProps);case 24:return sr(n),s=Tn(sn),e===null?(c=fu(),c===null&&(c=Wt,f=cu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},hu(n),Sa(n,sn,c)):((e.lanes&a)!==0&&(pu(e,n),Js(n,null,null,a),Qs()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Sa(n,sn,s)):(s=f.cache,Sa(n,sn,s),s!==c.cache&&lu(n,[sn],a,!0))),An(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Wi(e){e.flags|=4}function Zu(e,n,a,s,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(Q0())e.flags|=8192;else throw cr=sl,du}else e.flags&=-16777217}function T0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Hm(n))if(Q0())e.flags|=8192;else throw cr=sl,du}function Ml(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Bt():536870912,e.lanes|=n,Kr|=n)}function ao(e,n){if(!bt)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Zt(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function G_(e,n,a){var s=n.pendingProps;switch(iu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(n),null;case 1:return Zt(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Gi(sn),He(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Br(n)?Wi(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ru())),Zt(n),null;case 26:var c=n.type,f=n.memoizedState;return e===null?(Wi(n),f!==null?(Zt(n),T0(n,f)):(Zt(n),Zu(n,c,null,s,a))):f?f!==e.memoizedState?(Wi(n),Zt(n),T0(n,f)):(Zt(n),n.flags&=-16777217):(e=e.memoizedProps,e!==s&&Wi(n),Zt(n),Zu(n,c,e,s,a)),null;case 27:if(lt(n),a=ne.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Wi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Zt(n),null}e=Ee.current,Br(n)?ap(n):(e=Lm(c,s,a),n.stateNode=e,Wi(n))}return Zt(n),null;case 5:if(lt(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&Wi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Zt(n),null}if(f=Ee.current,Br(n))ap(n);else{var g=Fl(ne.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(c,{is:s.is}):g.createElement(c)}}f[rn]=n,f[fn]=s;e:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break e;for(;g.sibling===null;){if(g.return===null||g.return===n)break e;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;e:switch(Rn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break e;case"img":s=!0;break e;default:s=!1}s&&Wi(n)}}return Zt(n),Zu(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&Wi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=ne.current,Br(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=En,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||ym(e.nodeValue,a)),e||va(n,!0)}else e=Fl(e).createTextNode(s),e[rn]=n,n.stateNode=e}return Zt(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(s=Br(n),a!==null){if(e===null){if(!s)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[rn]=n}else ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),e=!1}else a=ru(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(jn(n),n):(jn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Zt(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Br(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[rn]=n}else ar(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Zt(n),c=!1}else c=ru(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(jn(n),n):(jn(n),null)}return jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,e=e!==null&&e.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Ml(n,n.updateQueue),Zt(n),null);case 4:return He(),e===null&&_f(n.stateNode.containerInfo),Zt(n),null;case 10:return Gi(n.type),Zt(n),null;case 19:if(ae(en),s=n.memoizedState,s===null)return Zt(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)ao(s,!1);else{if(Jt!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(f=ul(e),f!==null){for(n.flags|=128,ao(s,!1),e=f.updateQueue,n.updateQueue=e,Ml(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)$h(a,e),a=a.sibling;return ye(en,en.current&1|2),bt&&Ii(n,s.treeForkCount),n.child}e=e.sibling}s.tail!==null&&M()>Cl&&(n.flags|=128,c=!0,ao(s,!1),n.lanes=4194304)}else{if(!c)if(e=ul(f),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Ml(n,e),ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!bt)return Zt(n),null}else 2*M()-s.renderingStartTime>Cl&&a!==536870912&&(n.flags|=128,c=!0,ao(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(e=s.last,e!==null?e.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=M(),e.sibling=null,a=en.current,ye(en,c?a&1|2:a&1),bt&&Ii(n,s.treeForkCount),e):(Zt(n),null);case 22:case 23:return jn(n),_u(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Zt(n),n.subtreeFlags&6&&(n.flags|=8192)):Zt(n),a=n.updateQueue,a!==null&&Ml(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&ae(or),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Gi(sn),Zt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function V_(e,n){switch(iu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Gi(sn),He(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return lt(n),null;case 31:if(n.memoizedState!==null){if(jn(n),n.alternate===null)throw Error(r(340));ar()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(jn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ar()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return ae(en),null;case 4:return He(),null;case 10:return Gi(n.type),null;case 22:case 23:return jn(n),_u(),e!==null&&ae(or),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Gi(sn),null;case 25:return null;default:return null}}function A0(e,n){switch(iu(n),n.tag){case 3:Gi(sn),He();break;case 26:case 27:case 5:lt(n);break;case 4:He();break;case 31:n.memoizedState!==null&&jn(n);break;case 13:jn(n);break;case 19:ae(en);break;case 10:Gi(n.type);break;case 22:case 23:jn(n),_u(),e!==null&&ae(or);break;case 24:Gi(sn)}}function ro(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==c)}}catch(E){Pt(n,n.return,E)}}function Aa(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var g=s.inst,E=g.destroy;if(E!==void 0){g.destroy=void 0,c=n;var z=a,Q=E;try{Q()}catch(ue){Pt(c,z,ue)}}}s=s.next}while(s!==f)}}catch(ue){Pt(n,n.return,ue)}}function R0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{gp(n,a)}catch(s){Pt(e,e.return,s)}}}function C0(e,n,a){a.props=dr(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){Pt(e,n,s)}}function so(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var s=e.stateNode;break;case 30:s=e.stateNode;break;default:s=e.stateNode}typeof a=="function"?e.refCleanup=a(s):a.current=s}}catch(c){Pt(e,n,c)}}function Ri(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Pt(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Pt(e,n,c)}else a.current=null}function w0(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break e;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Pt(e,e.return,c)}}function Ku(e,n,a){try{var s=e.stateNode;uv(s,e.type,a,n),s[fn]=n}catch(c){Pt(e,e.return,c)}}function D0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Na(e.type)||e.tag===4}function Qu(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||D0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Na(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ju(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Pi));else if(s!==4&&(s===27&&Na(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(Ju(e,n,a),e=e.sibling;e!==null;)Ju(e,n,a),e=e.sibling}function El(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&(s===27&&Na(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(El(e,n,a),e=e.sibling;e!==null;)El(e,n,a),e=e.sibling}function U0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var s=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Rn(n,s,a),n[rn]=e,n[fn]=a}catch(f){Pt(e,e.return,f)}}var qi=!1,cn=!1,$u=!1,L0=typeof WeakSet=="function"?WeakSet:Set,yn=null;function k_(e,n){if(e=e.containerInfo,yf=Wl,e=Xh(e),qc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var g=0,E=-1,z=-1,Q=0,ue=0,me=e,te=null;t:for(;;){for(var se;me!==a||c!==0&&me.nodeType!==3||(E=g+c),me!==f||s!==0&&me.nodeType!==3||(z=g+s),me.nodeType===3&&(g+=me.nodeValue.length),(se=me.firstChild)!==null;)te=me,me=se;for(;;){if(me===e)break t;if(te===a&&++Q===c&&(E=g),te===f&&++ue===s&&(z=g),(se=me.nextSibling)!==null)break;me=te,te=me.parentNode}me=se}a=E===-1||z===-1?null:{start:E,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(bf={focusedElem:e,selectionRange:a},Wl=!1,yn=n;yn!==null;)if(n=yn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,yn=e;else for(;yn!==null;){switch(n=yn,f=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Ie=dr(a.type,c);e=s.getSnapshotBeforeUpdate(Ie,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(et){Pt(a,a.return,et)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Tf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Tf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,yn=e;break}yn=n.return}}function N0(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ji(e,a),s&4&&ro(5,a);break;case 1:if(ji(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(g){Pt(a,a.return,g)}else{var c=dr(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(g){Pt(a,a.return,g)}}s&64&&R0(a),s&512&&so(a,a.return);break;case 3:if(ji(e,a),s&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{gp(e,n)}catch(g){Pt(a,a.return,g)}}break;case 27:n===null&&s&4&&U0(a);case 26:case 5:ji(e,a),n===null&&s&4&&w0(a),s&512&&so(a,a.return);break;case 12:ji(e,a);break;case 31:ji(e,a),s&4&&P0(e,a);break;case 13:ji(e,a),s&4&&B0(e,a),s&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=J_.bind(null,a),_v(e,a))));break;case 22:if(s=a.memoizedState!==null||qi,!s){n=n!==null&&n.memoizedState!==null||cn,c=qi;var f=cn;qi=s,(cn=n)&&!f?Zi(e,a,(a.subtreeFlags&8772)!==0):ji(e,a),qi=c,cn=f}break;case 30:break;default:ji(e,a)}}function O0(e){var n=e.alternate;n!==null&&(e.alternate=null,O0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Os(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Kt=null,Pn=!1;function Yi(e,n,a){for(a=a.child;a!==null;)z0(e,n,a),a=a.sibling}function z0(e,n,a){if(Me&&typeof Me.onCommitFiberUnmount=="function")try{Me.onCommitFiberUnmount(Se,a)}catch{}switch(a.tag){case 26:cn||Ri(a,n),Yi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Ri(a,n);var s=Kt,c=Pn;Na(a.type)&&(Kt=a.stateNode,Pn=!1),Yi(e,n,a),xo(a.stateNode),Kt=s,Pn=c;break;case 5:cn||Ri(a,n);case 6:if(s=Kt,c=Pn,Kt=null,Yi(e,n,a),Kt=s,Pn=c,Kt!==null)if(Pn)try{(Kt.nodeType===9?Kt.body:Kt.nodeName==="HTML"?Kt.ownerDocument.body:Kt).removeChild(a.stateNode)}catch(f){Pt(a,n,f)}else try{Kt.removeChild(a.stateNode)}catch(f){Pt(a,n,f)}break;case 18:Kt!==null&&(Pn?(e=Kt,Rm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),as(e)):Rm(Kt,a.stateNode));break;case 4:s=Kt,c=Pn,Kt=a.stateNode.containerInfo,Pn=!0,Yi(e,n,a),Kt=s,Pn=c;break;case 0:case 11:case 14:case 15:Aa(2,a,n),cn||Aa(4,a,n),Yi(e,n,a);break;case 1:cn||(Ri(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&C0(a,n,s)),Yi(e,n,a);break;case 21:Yi(e,n,a);break;case 22:cn=(s=cn)||a.memoizedState!==null,Yi(e,n,a),cn=s;break;default:Yi(e,n,a)}}function P0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{as(e)}catch(a){Pt(n,n.return,a)}}}function B0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{as(e)}catch(a){Pt(n,n.return,a)}}function X_(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new L0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new L0),n;default:throw Error(r(435,e.tag))}}function Tl(e,n){var a=X_(e);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=$_.bind(null,e,s);s.then(c,c)}})}function Bn(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=e,g=n,E=g;e:for(;E!==null;){switch(E.tag){case 27:if(Na(E.type)){Kt=E.stateNode,Pn=!1;break e}break;case 5:Kt=E.stateNode,Pn=!1;break e;case 3:case 4:Kt=E.stateNode.containerInfo,Pn=!0;break e}E=E.return}if(Kt===null)throw Error(r(160));z0(f,g,c),Kt=null,Pn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)F0(n,e),n=n.sibling}var mi=null;function F0(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Bn(n,e),Fn(e),s&4&&(Aa(3,e,e.return),ro(3,e),Aa(5,e,e.return));break;case 1:Bn(n,e),Fn(e),s&512&&(cn||a===null||Ri(a,a.return)),s&64&&qi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=mi;if(Bn(n,e),Fn(e),s&512&&(cn||a===null||Ri(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){e:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;t:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ja]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Rn(f,s,a),f[rn]=e,$(f),s=f;break e;case"link":var g=Fm("link","href",c).get(s+(a.href||""));if(g){for(var E=0;E<g.length;E++)if(f=g[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(E,1);break t}}f=c.createElement(s),Rn(f,s,a),c.head.appendChild(f);break;case"meta":if(g=Fm("meta","content",c).get(s+(a.content||""))){for(E=0;E<g.length;E++)if(f=g[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(E,1);break t}}f=c.createElement(s),Rn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[rn]=e,$(f),s=f}e.stateNode=s}else Im(c,e.type,e.stateNode);else e.stateNode=Bm(c,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Im(c,e.type,e.stateNode):Bm(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Ku(e,e.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,e),Fn(e),s&512&&(cn||a===null||Ri(a,a.return)),a!==null&&s&4&&Ku(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,e),Fn(e),s&512&&(cn||a===null||Ri(a,a.return)),e.flags&32){c=e.stateNode;try{Ei(c,"")}catch(Ie){Pt(e,e.return,Ie)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,Ku(e,c,a!==null?a.memoizedProps:c)),s&1024&&($u=!0);break;case 6:if(Bn(n,e),Fn(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(Ie){Pt(e,e.return,Ie)}}break;case 3:if(Gl=null,c=mi,mi=Il(n.containerInfo),Bn(n,e),mi=c,Fn(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{as(n.containerInfo)}catch(Ie){Pt(e,e.return,Ie)}$u&&($u=!1,I0(e));break;case 4:s=mi,mi=Il(e.stateNode.containerInfo),Bn(n,e),Fn(e),mi=s;break;case 12:Bn(n,e),Fn(e);break;case 31:Bn(n,e),Fn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Tl(e,s)));break;case 13:Bn(n,e),Fn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Rl=M()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Tl(e,s)));break;case 22:c=e.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,Q=qi,ue=cn;if(qi=Q||c,cn=ue||z,Bn(n,e),cn=ue,qi=Q,Fn(e),s&8192)e:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||z||qi||cn||hr(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{E=z.stateNode;var me=z.memoizedProps.style,te=me!=null&&me.hasOwnProperty("display")?me.display:null;E.style.display=te==null||typeof te=="boolean"?"":(""+te).trim()}}catch(Ie){Pt(z,z.return,Ie)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=c?"":z.memoizedProps}catch(Ie){Pt(z,z.return,Ie)}}}else if(n.tag===18){if(a===null){z=n;try{var se=z.stateNode;c?Cm(se,!0):Cm(z.stateNode,!1)}catch(Ie){Pt(z,z.return,Ie)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Tl(e,a))));break;case 19:Bn(n,e),Fn(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Tl(e,s)));break;case 30:break;case 21:break;default:Bn(n,e),Fn(e)}}function Fn(e){var n=e.flags;if(n&2){try{for(var a,s=e.return;s!==null;){if(D0(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Qu(e);El(e,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(Ei(g,""),a.flags&=-33);var E=Qu(e);El(e,E,g);break;case 3:case 4:var z=a.stateNode.containerInfo,Q=Qu(e);Ju(e,Q,z);break;default:throw Error(r(161))}}catch(ue){Pt(e,e.return,ue)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function I0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;I0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function ji(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)N0(e,n.alternate,n),n=n.sibling}function hr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Aa(4,n,n.return),hr(n);break;case 1:Ri(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&C0(n,n.return,a),hr(n);break;case 27:xo(n.stateNode);case 26:case 5:Ri(n,n.return),hr(n);break;case 22:n.memoizedState===null&&hr(n);break;case 30:hr(n);break;default:hr(n)}e=e.sibling}}function Zi(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:Zi(c,f,a),ro(4,f);break;case 1:if(Zi(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Q){Pt(s,s.return,Q)}if(s=f,c=s.updateQueue,c!==null){var E=s.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)xp(z[c],E)}catch(Q){Pt(s,s.return,Q)}}a&&g&64&&R0(f),so(f,f.return);break;case 27:U0(f);case 26:case 5:Zi(c,f,a),a&&s===null&&g&4&&w0(f),so(f,f.return);break;case 12:Zi(c,f,a);break;case 31:Zi(c,f,a),a&&g&4&&P0(c,f);break;case 13:Zi(c,f,a),a&&g&4&&B0(c,f);break;case 22:f.memoizedState===null&&Zi(c,f,a),so(f,f.return);break;case 30:break;default:Zi(c,f,a)}n=n.sibling}}function ef(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&qs(a))}function tf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&qs(e))}function xi(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)H0(e,n,a,s),n=n.sibling}function H0(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:xi(e,n,a,s),c&2048&&ro(9,n);break;case 1:xi(e,n,a,s);break;case 3:xi(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&qs(e)));break;case 12:if(c&2048){xi(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,g=f.id,E=f.onPostCommit;typeof E=="function"&&E(g,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){Pt(n,n.return,z)}}else xi(e,n,a,s);break;case 31:xi(e,n,a,s);break;case 13:xi(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?xi(e,n,a,s):oo(e,n):f._visibility&2?xi(e,n,a,s):(f._visibility|=2,Yr(e,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&ef(g,n);break;case 24:xi(e,n,a,s),c&2048&&tf(n.alternate,n);break;default:xi(e,n,a,s)}}function Yr(e,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=e,g=n,E=a,z=s,Q=g.flags;switch(g.tag){case 0:case 11:case 15:Yr(f,g,E,z,c),ro(8,g);break;case 23:break;case 22:var ue=g.stateNode;g.memoizedState!==null?ue._visibility&2?Yr(f,g,E,z,c):oo(f,g):(ue._visibility|=2,Yr(f,g,E,z,c)),c&&Q&2048&&ef(g.alternate,g);break;case 24:Yr(f,g,E,z,c),c&&Q&2048&&tf(g.alternate,g);break;default:Yr(f,g,E,z,c)}n=n.sibling}}function oo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:oo(a,s),c&2048&&ef(s.alternate,s);break;case 24:oo(a,s),c&2048&&tf(s.alternate,s);break;default:oo(a,s)}n=n.sibling}}var lo=8192;function jr(e,n,a){if(e.subtreeFlags&lo)for(e=e.child;e!==null;)G0(e,n,a),e=e.sibling}function G0(e,n,a){switch(e.tag){case 26:jr(e,n,a),e.flags&lo&&e.memoizedState!==null&&Dv(a,mi,e.memoizedState,e.memoizedProps);break;case 5:jr(e,n,a);break;case 3:case 4:var s=mi;mi=Il(e.stateNode.containerInfo),jr(e,n,a),mi=s;break;case 22:e.memoizedState===null&&(s=e.alternate,s!==null&&s.memoizedState!==null?(s=lo,lo=16777216,jr(e,n,a),lo=s):jr(e,n,a));break;default:jr(e,n,a)}}function V0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function co(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];yn=s,X0(s,e)}V0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)k0(e),e=e.sibling}function k0(e){switch(e.tag){case 0:case 11:case 15:co(e),e.flags&2048&&Aa(9,e,e.return);break;case 3:co(e);break;case 12:co(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Al(e)):co(e);break;default:co(e)}}function Al(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];yn=s,X0(s,e)}V0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Aa(8,n,n.return),Al(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Al(n));break;default:Al(n)}e=e.sibling}}function X0(e,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Aa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:qs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,yn=s;else e:for(a=e;yn!==null;){s=yn;var c=s.sibling,f=s.return;if(O0(s),s===a){yn=null;break e}if(c!==null){c.return=f,yn=c;break e}yn=f}}}var W_={getCacheForType:function(e){var n=Tn(sn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return Tn(sn).controller.signal}},q_=typeof WeakMap=="function"?WeakMap:Map,Lt=0,Wt=null,xt=null,_t=0,zt=0,Zn=null,Ra=!1,Zr=!1,nf=!1,Ki=0,Jt=0,Ca=0,pr=0,af=0,Kn=0,Kr=0,uo=null,In=null,rf=!1,Rl=0,W0=0,Cl=1/0,wl=null,wa=null,hn=0,Da=null,Qr=null,Qi=0,sf=0,of=null,q0=null,fo=0,lf=null;function Qn(){return(Lt&2)!==0&&_t!==0?_t&-_t:P.T!==null?pf():Ls()}function Y0(){if(Kn===0)if((_t&536870912)===0||bt){var e=Ae;Ae<<=1,(Ae&3932160)===0&&(Ae=262144),Kn=e}else Kn=536870912;return e=Yn.current,e!==null&&(e.flags|=32),Kn}function Hn(e,n,a){(e===Wt&&(zt===2||zt===9)||e.cancelPendingCommit!==null)&&(Jr(e,0),Ua(e,_t,Kn,!1)),Cn(e,a),((Lt&2)===0||e!==Wt)&&(e===Wt&&((Lt&2)===0&&(pr|=a),Jt===4&&Ua(e,_t,Kn,!1)),Ci(e))}function j0(e,n,a){if((Lt&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Be(e,n),c=s?Z_(e,n):uf(e,n,!0),f=s;do{if(c===0){Zr&&!s&&Ua(e,n,0,!1);break}else{if(a=e.current.alternate,f&&!Y_(a)){c=uf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var g=0;else g=e.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;e:{var E=e;c=uo;var z=E.current.memoizedState.isDehydrated;if(z&&(Jr(E,g).flags|=256),g=uf(E,g,!1),g!==2){if(nf&&!z){E.errorRecoveryDisabledLanes|=f,pr|=f,c=4;break e}f=In,In=c,f!==null&&(In===null?In=f:In.push.apply(In,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){Jr(e,0),Ua(e,n,0,!0);break}e:{switch(s=e,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Ua(s,n,Kn,!Ra);break e;case 2:In=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Rl+300-M(),10<c)){if(Ua(s,n,Kn,!Ra),xe(s,0,!0)!==0)break e;Qi=n,s.timeoutHandle=Tm(Z0.bind(null,s,a,In,wl,rf,n,Kn,pr,Kr,Ra,f,"Throttled",-0,0),c);break e}Z0(s,a,In,wl,rf,n,Kn,pr,Kr,Ra,f,null,-0,0)}}break}while(!0);Ci(e)}function Z0(e,n,a,s,c,f,g,E,z,Q,ue,me,te,se){if(e.timeoutHandle=-1,me=n.subtreeFlags,me&8192||(me&16785408)===16785408){me={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Pi},G0(n,f,me);var Ie=(f&62914560)===f?Rl-M():(f&4194048)===f?W0-M():0;if(Ie=Uv(me,Ie),Ie!==null){Qi=f,e.cancelPendingCommit=Ie(im.bind(null,e,n,f,a,s,c,g,E,z,ue,me,null,te,se)),Ua(e,f,g,!Q);return}}im(e,n,f,a,s,c,g,E,z)}function Y_(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ua(e,n,a,s){n&=~af,n&=~pr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-Ve(c),g=1<<f;s[f]=-1,c&=~g}a!==0&&Go(e,a,n)}function Dl(){return(Lt&6)===0?(ho(0),!1):!0}function cf(){if(xt!==null){if(zt===0)var e=xt.return;else e=xt,Hi=rr=null,Eu(e),Vr=null,js=0,e=xt;for(;e!==null;)A0(e.alternate,e),e=e.return;xt=null}}function Jr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,hv(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Qi=0,cf(),Wt=e,xt=a=Fi(e.current,null),_t=n,zt=0,Zn=null,Ra=!1,Zr=Be(e,n),nf=!1,Kr=Kn=af=pr=Ca=Jt=0,In=uo=null,rf=!1,(n&8)!==0&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-Ve(s),f=1<<c;n|=e[c],s&=~f}return Ki=n,Qo(),a}function K0(e,n){st=null,P.H=no,n===Gr||n===rl?(n=dp(),zt=3):n===du?(n=dp(),zt=4):zt=n===Hu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,xt===null&&(Jt=1,vl(e,ii(n,e.current)))}function Q0(){var e=Yn.current;return e===null?!0:(_t&4194048)===_t?oi===null:(_t&62914560)===_t||(_t&536870912)!==0?e===oi:!1}function J0(){var e=P.H;return P.H=no,e===null?no:e}function $0(){var e=P.A;return P.A=W_,e}function Ul(){Jt=4,Ra||(_t&4194048)!==_t&&Yn.current!==null||(Zr=!0),(Ca&134217727)===0&&(pr&134217727)===0||Wt===null||Ua(Wt,_t,Kn,!1)}function uf(e,n,a){var s=Lt;Lt|=2;var c=J0(),f=$0();(Wt!==e||_t!==n)&&(wl=null,Jr(e,n)),n=!1;var g=Jt;e:do try{if(zt!==0&&xt!==null){var E=xt,z=Zn;switch(zt){case 8:cf(),g=6;break e;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var Q=zt;if(zt=0,Zn=null,$r(e,E,z,Q),a&&Zr){g=0;break e}break;default:Q=zt,zt=0,Zn=null,$r(e,E,z,Q)}}j_(),g=Jt;break}catch(ue){K0(e,ue)}while(!0);return n&&e.shellSuspendCounter++,Hi=rr=null,Lt=s,P.H=c,P.A=f,xt===null&&(Wt=null,_t=0,Qo()),g}function j_(){for(;xt!==null;)em(xt)}function Z_(e,n){var a=Lt;Lt|=2;var s=J0(),c=$0();Wt!==e||_t!==n?(wl=null,Cl=M()+500,Jr(e,n)):Zr=Be(e,n);e:do try{if(zt!==0&&xt!==null){n=xt;var f=Zn;t:switch(zt){case 1:zt=0,Zn=null,$r(e,n,f,1);break;case 2:case 9:if(up(f)){zt=0,Zn=null,tm(n);break}n=function(){zt!==2&&zt!==9||Wt!==e||(zt=7),Ci(e)},f.then(n,n);break e;case 3:zt=7;break e;case 4:zt=5;break e;case 7:up(f)?(zt=0,Zn=null,tm(n)):(zt=0,Zn=null,$r(e,n,f,7));break;case 5:var g=null;switch(xt.tag){case 26:g=xt.memoizedState;case 5:case 27:var E=xt;if(g?Hm(g):E.stateNode.complete){zt=0,Zn=null;var z=E.sibling;if(z!==null)xt=z;else{var Q=E.return;Q!==null?(xt=Q,Ll(Q)):xt=null}break t}}zt=0,Zn=null,$r(e,n,f,5);break;case 6:zt=0,Zn=null,$r(e,n,f,6);break;case 8:cf(),Jt=6;break e;default:throw Error(r(462))}}K_();break}catch(ue){K0(e,ue)}while(!0);return Hi=rr=null,P.H=s,P.A=c,Lt=a,xt!==null?0:(Wt=null,_t=0,Qo(),Jt)}function K_(){for(;xt!==null&&!at();)em(xt)}function em(e){var n=E0(e.alternate,e,Ki);e.memoizedProps=e.pendingProps,n===null?Ll(e):xt=n}function tm(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=_0(a,n,n.pendingProps,n.type,void 0,_t);break;case 11:n=_0(a,n,n.pendingProps,n.type.render,n.ref,_t);break;case 5:Eu(n);default:A0(a,n),n=xt=$h(n,Ki),n=E0(a,n,Ki)}e.memoizedProps=e.pendingProps,n===null?Ll(e):xt=n}function $r(e,n,a,s){Hi=rr=null,Eu(n),Vr=null,js=0;var c=n.return;try{if(F_(e,c,n,a,_t)){Jt=1,vl(e,ii(a,e.current)),xt=null;return}}catch(f){if(c!==null)throw xt=c,f;Jt=1,vl(e,ii(a,e.current)),xt=null;return}n.flags&32768?(bt||s===1?e=!0:Zr||(_t&536870912)!==0?e=!1:(Ra=e=!0,(s===2||s===9||s===3||s===6)&&(s=Yn.current,s!==null&&s.tag===13&&(s.flags|=16384))),nm(n,e)):Ll(n)}function Ll(e){var n=e;do{if((n.flags&32768)!==0){nm(n,Ra);return}e=n.return;var a=G_(n.alternate,n,Ki);if(a!==null){xt=a;return}if(n=n.sibling,n!==null){xt=n;return}xt=n=e}while(n!==null);Jt===0&&(Jt=5)}function nm(e,n){do{var a=V_(e.alternate,e);if(a!==null){a.flags&=32767,xt=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){xt=e;return}xt=e=a}while(e!==null);Jt=6,xt=null}function im(e,n,a,s,c,f,g,E,z){e.cancelPendingCommit=null;do Nl();while(hn!==0);if((Lt&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Qc,kn(e,a,f,g,E,z),e===Wt&&(xt=Wt=null,_t=0),Qr=n,Da=e,Qi=a,sf=f,of=c,q0=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ev(oe,function(){return lm(),null})):(e.callbackNode=null,e.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=P.T,P.T=null,c=j.p,j.p=2,g=Lt,Lt|=4;try{k_(e,n,a)}finally{Lt=g,j.p=c,P.T=s}}hn=1,am(),rm(),sm()}}function am(){if(hn===1){hn=0;var e=Da,n=Qr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var s=j.p;j.p=2;var c=Lt;Lt|=4;try{F0(n,e);var f=bf,g=Xh(e.containerInfo),E=f.focusedElem,z=f.selectionRange;if(g!==E&&E&&E.ownerDocument&&kh(E.ownerDocument.documentElement,E)){if(z!==null&&qc(E)){var Q=z.start,ue=z.end;if(ue===void 0&&(ue=Q),"selectionStart"in E)E.selectionStart=Q,E.selectionEnd=Math.min(ue,E.value.length);else{var me=E.ownerDocument||document,te=me&&me.defaultView||window;if(te.getSelection){var se=te.getSelection(),Ie=E.textContent.length,et=Math.min(z.start,Ie),Ht=z.end===void 0?et:Math.min(z.end,Ie);!se.extend&&et>Ht&&(g=Ht,Ht=et,et=g);var W=Vh(E,et),G=Vh(E,Ht);if(W&&G&&(se.rangeCount!==1||se.anchorNode!==W.node||se.anchorOffset!==W.offset||se.focusNode!==G.node||se.focusOffset!==G.offset)){var Z=me.createRange();Z.setStart(W.node,W.offset),se.removeAllRanges(),et>Ht?(se.addRange(Z),se.extend(G.node,G.offset)):(Z.setEnd(G.node,G.offset),se.addRange(Z))}}}}for(me=[],se=E;se=se.parentNode;)se.nodeType===1&&me.push({element:se,left:se.scrollLeft,top:se.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<me.length;E++){var de=me[E];de.element.scrollLeft=de.left,de.element.scrollTop=de.top}}Wl=!!yf,bf=yf=null}finally{Lt=c,j.p=s,P.T=a}}e.current=n,hn=2}}function rm(){if(hn===2){hn=0;var e=Da,n=Qr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var s=j.p;j.p=2;var c=Lt;Lt|=4;try{N0(e,n.alternate,n)}finally{Lt=c,j.p=s,P.T=a}}hn=3}}function sm(){if(hn===4||hn===3){hn=0,D();var e=Da,n=Qr,a=Qi,s=q0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?hn=5:(hn=0,Qr=Da=null,om(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(wa=null),Qa(a),n=n.stateNode,Me&&typeof Me.onCommitFiberRoot=="function")try{Me.onCommitFiberRoot(Se,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=P.T,c=j.p,j.p=2,P.T=null;try{for(var f=e.onRecoverableError,g=0;g<s.length;g++){var E=s[g];f(E.value,{componentStack:E.stack})}}finally{P.T=n,j.p=c}}(Qi&3)!==0&&Nl(),Ci(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===lf?fo++:(fo=0,lf=e):fo=0,ho(0)}}function om(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,qs(n)))}function Nl(){return am(),rm(),sm(),lm()}function lm(){if(hn!==5)return!1;var e=Da,n=sf;sf=0;var a=Qa(Qi),s=P.T,c=j.p;try{j.p=32>a?32:a,P.T=null,a=of,of=null;var f=Da,g=Qi;if(hn=0,Qr=Da=null,Qi=0,(Lt&6)!==0)throw Error(r(331));var E=Lt;if(Lt|=4,k0(f.current),H0(f,f.current,g,a),Lt=E,ho(0,!1),Me&&typeof Me.onPostCommitFiberRoot=="function")try{Me.onPostCommitFiberRoot(Se,f)}catch{}return!0}finally{j.p=c,P.T=s,om(e,n)}}function cm(e,n,a){n=ii(a,n),n=Iu(e.stateNode,n,2),e=Ma(e,n,2),e!==null&&(Cn(e,2),Ci(e))}function Pt(e,n,a){if(e.tag===3)cm(e,e,a);else for(;n!==null;){if(n.tag===3){cm(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(wa===null||!wa.has(s))){e=ii(a,e),a=u0(2),s=Ma(n,a,2),s!==null&&(f0(a,s,n,e),Cn(s,2),Ci(s));break}}n=n.return}}function ff(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new q_;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(nf=!0,c.add(a),e=Q_.bind(null,e,n,a),n.then(e,e))}function Q_(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Wt===e&&(_t&a)===a&&(Jt===4||Jt===3&&(_t&62914560)===_t&&300>M()-Rl?(Lt&2)===0&&Jr(e,0):af|=a,Kr===_t&&(Kr=0)),Ci(e)}function um(e,n){n===0&&(n=Bt()),e=nr(e,n),e!==null&&(Cn(e,n),Ci(e))}function J_(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),um(e,a)}function $_(e,n){var a=0;switch(e.tag){case 31:case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),um(e,a)}function ev(e,n){return kt(e,n)}var Ol=null,es=null,df=!1,zl=!1,hf=!1,La=0;function Ci(e){e!==es&&e.next===null&&(es===null?Ol=es=e:es=es.next=e),zl=!0,df||(df=!0,nv())}function ho(e,n){if(!hf&&zl){hf=!0;do for(var a=!1,s=Ol;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var g=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-Ve(42|e)+1)-1,f&=c&~(g&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,pm(s,f))}else f=_t,f=xe(s,s===Wt?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Be(s,f)||(a=!0,pm(s,f));s=s.next}while(a);hf=!1}}function tv(){fm()}function fm(){zl=df=!1;var e=0;La!==0&&dv()&&(e=La);for(var n=M(),a=null,s=Ol;s!==null;){var c=s.next,f=dm(s,n);f===0?(s.next=null,a===null?Ol=c:a.next=c,c===null&&(es=a)):(a=s,(e!==0||(f&3)!==0)&&(zl=!0)),s=c}hn!==0&&hn!==5||ho(e),La!==0&&(La=0)}function dm(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var g=31-Ve(f),E=1<<g,z=c[g];z===-1?((E&a)===0||(E&s)!==0)&&(c[g]=it(E,n)):z<=n&&(e.expiredLanes|=E),f&=~E}if(n=Wt,a=_t,a=xe(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s=e.callbackNode,a===0||e===n&&(zt===2||zt===9)||e.cancelPendingCommit!==null)return s!==null&&s!==null&&je(s),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Be(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&je(s),Qa(a)){case 2:case 8:a=ve;break;case 32:a=oe;break;case 268435456:a=Ue;break;default:a=oe}return s=hm.bind(null,e),a=kt(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&je(s),e.callbackPriority=2,e.callbackNode=null,2}function hm(e,n){if(hn!==0&&hn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Nl()&&e.callbackNode!==a)return null;var s=_t;return s=xe(e,e===Wt?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),s===0?null:(j0(e,s,n),dm(e,M()),e.callbackNode!=null&&e.callbackNode===a?hm.bind(null,e):null)}function pm(e,n){if(Nl())return null;j0(e,n,!0)}function nv(){pv(function(){(Lt&6)!==0?kt(pe,tv):fm()})}function pf(){if(La===0){var e=Ir;e===0&&(e=we,we<<=1,(we&261888)===0&&(we=256)),La=e}return La}function mm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ko(""+e)}function xm(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function iv(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=mm((c[fn]||null).action),g=s.submitter;g&&(n=(n=g[fn]||null)?mm(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var E=new Yo("action","action",null,s,c);e.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(La!==0){var z=g?xm(c,g):new FormData(c);Nu(a,{pending:!0,data:z,method:c.method,action:f},null,z)}}else typeof f=="function"&&(E.preventDefault(),z=g?xm(c,g):new FormData(c),Nu(a,{pending:!0,data:z,method:c.method,action:f},f,z))},currentTarget:c}]})}}for(var mf=0;mf<Kc.length;mf++){var xf=Kc[mf],av=xf.toLowerCase(),rv=xf[0].toUpperCase()+xf.slice(1);pi(av,"on"+rv)}pi(Yh,"onAnimationEnd"),pi(jh,"onAnimationIteration"),pi(Zh,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(y_,"onTransitionRun"),pi(b_,"onTransitionStart"),pi(M_,"onTransitionCancel"),pi(Kh,"onTransitionEnd"),ze("onMouseEnter",["mouseout","mouseover"]),ze("onMouseLeave",["mouseout","mouseover"]),ze("onPointerEnter",["pointerout","pointerover"]),ze("onPointerLeave",["pointerout","pointerover"]),De("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),De("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),De("onBeforeInput",["compositionend","keypress","textInput","paste"]),De("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),De("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),De("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(po));function gm(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;e:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var E=s[g],z=E.instance,Q=E.currentTarget;if(E=E.listener,z!==f&&c.isPropagationStopped())break e;f=E,c.currentTarget=Q;try{f(c)}catch(ue){Ko(ue)}c.currentTarget=null,f=z}else for(g=0;g<s.length;g++){if(E=s[g],z=E.instance,Q=E.currentTarget,E=E.listener,z!==f&&c.isPropagationStopped())break e;f=E,c.currentTarget=Q;try{f(c)}catch(ue){Ko(ue)}c.currentTarget=null,f=z}}}}function gt(e,n){var a=n[Rr];a===void 0&&(a=n[Rr]=new Set);var s=e+"__bubble";a.has(s)||(_m(n,e,2,!1),a.add(s))}function gf(e,n,a){var s=0;n&&(s|=4),_m(a,e,s,n)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function _f(e){if(!e[Pl]){e[Pl]=!0,q.forEach(function(a){a!=="selectionchange"&&(sv.has(a)||gf(a,!1,e),gf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[Pl]||(n[Pl]=!0,gf("selectionchange",!1,n))}}function _m(e,n,a,s){switch(Ym(n)){case 2:var c=Ov;break;case 8:c=zv;break;default:c=Nf}a=c.bind(null,n,a,e),c=void 0,!Bc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function vf(e,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)e:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var E=s.stateNode.containerInfo;if(E===c)break;if(g===4)for(g=s.return;g!==null;){var z=g.tag;if((z===3||z===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;E!==null;){if(g=pa(E),g===null)return;if(z=g.tag,z===5||z===6||z===26||z===27){s=f=g;continue e}E=E.parentNode}}s=s.return}Mh(function(){var Q=f,ue=zc(a),me=[];e:{var te=Qh.get(e);if(te!==void 0){var se=Yo,Ie=e;switch(e){case"keypress":if(Wo(a)===0)break e;case"keydown":case"keyup":se=$g;break;case"focusin":Ie="focus",se=Gc;break;case"focusout":Ie="blur",se=Gc;break;case"beforeblur":case"afterblur":se=Gc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":se=Ah;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":se=Gg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":se=n_;break;case Yh:case jh:case Zh:se=Xg;break;case Kh:se=a_;break;case"scroll":case"scrollend":se=Ig;break;case"wheel":se=s_;break;case"copy":case"cut":case"paste":se=qg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":se=Ch;break;case"toggle":case"beforetoggle":se=l_}var et=(n&4)!==0,Ht=!et&&(e==="scroll"||e==="scrollend"),W=et?te!==null?te+"Capture":null:te;et=[];for(var G=Q,Z;G!==null;){var de=G;if(Z=de.stateNode,de=de.tag,de!==5&&de!==26&&de!==27||Z===null||W===null||(de=zs(G,W),de!=null&&et.push(mo(G,de,Z))),Ht)break;G=G.return}0<et.length&&(te=new se(te,Ie,null,a,ue),me.push({event:te,listeners:et}))}}if((n&7)===0){e:{if(te=e==="mouseover"||e==="pointerover",se=e==="mouseout"||e==="pointerout",te&&a!==Oc&&(Ie=a.relatedTarget||a.fromElement)&&(pa(Ie)||Ie[Ni]))break e;if((se||te)&&(te=ue.window===ue?ue:(te=ue.ownerDocument)?te.defaultView||te.parentWindow:window,se?(Ie=a.relatedTarget||a.toElement,se=Q,Ie=Ie?pa(Ie):null,Ie!==null&&(Ht=u(Ie),et=Ie.tag,Ie!==Ht||et!==5&&et!==27&&et!==6)&&(Ie=null)):(se=null,Ie=Q),se!==Ie)){if(et=Ah,de="onMouseLeave",W="onMouseEnter",G="mouse",(e==="pointerout"||e==="pointerover")&&(et=Ch,de="onPointerLeave",W="onPointerEnter",G="pointer"),Ht=se==null?te:X(se),Z=Ie==null?te:X(Ie),te=new et(de,G+"leave",se,a,ue),te.target=Ht,te.relatedTarget=Z,de=null,pa(ue)===Q&&(et=new et(W,G+"enter",Ie,a,ue),et.target=Z,et.relatedTarget=Ht,de=et),Ht=de,se&&Ie)t:{for(et=ov,W=se,G=Ie,Z=0,de=W;de;de=et(de))Z++;de=0;for(var Ke=G;Ke;Ke=et(Ke))de++;for(;0<Z-de;)W=et(W),Z--;for(;0<de-Z;)G=et(G),de--;for(;Z--;){if(W===G||G!==null&&W===G.alternate){et=W;break t}W=et(W),G=et(G)}et=null}else et=null;se!==null&&vm(me,te,se,et,!1),Ie!==null&&Ht!==null&&vm(me,Ht,Ie,et,!0)}}e:{if(te=Q?X(Q):window,se=te.nodeName&&te.nodeName.toLowerCase(),se==="select"||se==="input"&&te.type==="file")var Ct=Ph;else if(Oh(te))if(Bh)Ct=__;else{Ct=x_;var ke=m_}else se=te.nodeName,!se||se.toLowerCase()!=="input"||te.type!=="checkbox"&&te.type!=="radio"?Q&&Nc(Q.elementType)&&(Ct=Ph):Ct=g_;if(Ct&&(Ct=Ct(e,Q))){zh(me,Ct,a,ue);break e}ke&&ke(e,te,Q),e==="focusout"&&Q&&te.type==="number"&&Q.memoizedProps.value!=null&&vn(te,"number",te.value)}switch(ke=Q?X(Q):window,e){case"focusin":(Oh(ke)||ke.contentEditable==="true")&&(Ur=ke,Yc=Q,ks=null);break;case"focusout":ks=Yc=Ur=null;break;case"mousedown":jc=!0;break;case"contextmenu":case"mouseup":case"dragend":jc=!1,Wh(me,a,ue);break;case"selectionchange":if(S_)break;case"keydown":case"keyup":Wh(me,a,ue)}var ut;if(kc)e:{switch(e){case"compositionstart":var vt="onCompositionStart";break e;case"compositionend":vt="onCompositionEnd";break e;case"compositionupdate":vt="onCompositionUpdate";break e}vt=void 0}else Dr?Lh(e,a)&&(vt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(vt="onCompositionStart");vt&&(wh&&a.locale!=="ko"&&(Dr||vt!=="onCompositionStart"?vt==="onCompositionEnd"&&Dr&&(ut=Eh()):(xa=ue,Fc="value"in xa?xa.value:xa.textContent,Dr=!0)),ke=Bl(Q,vt),0<ke.length&&(vt=new Rh(vt,e,null,a,ue),me.push({event:vt,listeners:ke}),ut?vt.data=ut:(ut=Nh(a),ut!==null&&(vt.data=ut)))),(ut=u_?f_(e,a):d_(e,a))&&(vt=Bl(Q,"onBeforeInput"),0<vt.length&&(ke=new Rh("onBeforeInput","beforeinput",null,a,ue),me.push({event:ke,listeners:vt}),ke.data=ut)),iv(me,e,Q,a,ue)}gm(me,n)})}function mo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Bl(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=zs(e,a),c!=null&&s.unshift(mo(e,c,f)),c=zs(e,n),c!=null&&s.push(mo(e,c,f))),e.tag===3)return s;e=e.return}return[]}function ov(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function vm(e,n,a,s,c){for(var f=n._reactName,g=[];a!==null&&a!==s;){var E=a,z=E.alternate,Q=E.stateNode;if(E=E.tag,z!==null&&z===s)break;E!==5&&E!==26&&E!==27||Q===null||(z=Q,c?(Q=zs(a,f),Q!=null&&g.unshift(mo(a,Q,z))):c||(Q=zs(a,f),Q!=null&&g.push(mo(a,Q,z)))),a=a.return}g.length!==0&&e.push({event:n,listeners:g})}var lv=/\r\n?/g,cv=/\u0000|\uFFFD/g;function Sm(e){return(typeof e=="string"?e:""+e).replace(lv,`
`).replace(cv,"")}function ym(e,n){return n=Sm(n),Sm(e)===n}function It(e,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Ei(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Ei(e,""+s);break;case"className":Et(e,"class",s);break;case"tabIndex":Et(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Et(e,a,s);break;case"style":yh(e,s,f);break;case"data":if(n!=="object"){Et(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=ko(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&It(e,n,"name",c.name,c,null),It(e,n,"formEncType",c.formEncType,c,null),It(e,n,"formMethod",c.formMethod,c,null),It(e,n,"formTarget",c.formTarget,c,null)):(It(e,n,"encType",c.encType,c,null),It(e,n,"method",c.method,c,null),It(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=ko(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Pi);break;case"onScroll":s!=null&&gt("scroll",e);break;case"onScrollEnd":s!=null&&gt("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=ko(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":gt("beforetoggle",e),gt("toggle",e),ct(e,"popover",s);break;case"xlinkActuate":Rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Rt(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Rt(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Rt(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Rt(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":ct(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Bg.get(a)||a,ct(e,a,s))}}function Sf(e,n,a,s,c,f){switch(a){case"style":yh(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?Ei(e,s):(typeof s=="number"||typeof s=="bigint")&&Ei(e,""+s);break;case"onScroll":s!=null&&gt("scroll",e);break;case"onScrollEnd":s!=null&&gt("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Pi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Te.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[fn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break e}a in e?e[a]=s:s===!0?e.setAttribute(a,""):ct(e,a,s)}}}function Rn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":gt("error",e),gt("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:It(e,n,f,g,a,null)}}c&&It(e,n,"srcSet",a.srcSet,a,null),s&&It(e,n,"src",a.src,a,null);return;case"input":gt("invalid",e);var E=f=g=c=null,z=null,Q=null;for(s in a)if(a.hasOwnProperty(s)){var ue=a[s];if(ue!=null)switch(s){case"name":c=ue;break;case"type":g=ue;break;case"checked":z=ue;break;case"defaultChecked":Q=ue;break;case"value":f=ue;break;case"defaultValue":E=ue;break;case"children":case"dangerouslySetInnerHTML":if(ue!=null)throw Error(r(137,n));break;default:It(e,n,s,ue,a,null)}}Yt(e,f,E,z,Q,g,c,!1);return;case"select":gt("invalid",e),s=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":g=E;break;case"multiple":s=E;default:It(e,n,c,E,a,null)}n=f,a=g,e.multiple=!!s,n!=null?dn(e,!!s,n,!1):a!=null&&dn(e,!!s,a,!0);return;case"textarea":gt("invalid",e),f=c=s=null;for(g in a)if(a.hasOwnProperty(g)&&(E=a[g],E!=null))switch(g){case"value":s=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:It(e,n,g,E,a,null)}Mn(e,s,c,f);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(s=a[z],s!=null))switch(z){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:It(e,n,z,s,a,null)}return;case"dialog":gt("beforetoggle",e),gt("toggle",e),gt("cancel",e),gt("close",e);break;case"iframe":case"object":gt("load",e);break;case"video":case"audio":for(s=0;s<po.length;s++)gt(po[s],e);break;case"image":gt("error",e),gt("load",e);break;case"details":gt("toggle",e);break;case"embed":case"source":case"link":gt("error",e),gt("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(s=a[Q],s!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:It(e,n,Q,s,a,null)}return;default:if(Nc(n)){for(ue in a)a.hasOwnProperty(ue)&&(s=a[ue],s!==void 0&&Sf(e,n,ue,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&It(e,n,E,s,a,null))}function uv(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,E=null,z=null,Q=null,ue=null;for(se in a){var me=a[se];if(a.hasOwnProperty(se)&&me!=null)switch(se){case"checked":break;case"value":break;case"defaultValue":z=me;default:s.hasOwnProperty(se)||It(e,n,se,null,s,me)}}for(var te in s){var se=s[te];if(me=a[te],s.hasOwnProperty(te)&&(se!=null||me!=null))switch(te){case"type":f=se;break;case"name":c=se;break;case"checked":Q=se;break;case"defaultChecked":ue=se;break;case"value":g=se;break;case"defaultValue":E=se;break;case"children":case"dangerouslySetInnerHTML":if(se!=null)throw Error(r(137,n));break;default:se!==me&&It(e,n,te,se,s,me)}}Oi(e,g,E,z,Q,ue,f,c);return;case"select":se=g=E=te=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":se=z;default:s.hasOwnProperty(f)||It(e,n,f,null,s,z)}for(c in s)if(f=s[c],z=a[c],s.hasOwnProperty(c)&&(f!=null||z!=null))switch(c){case"value":te=f;break;case"defaultValue":E=f;break;case"multiple":g=f;default:f!==z&&It(e,n,c,f,s,z)}n=E,a=g,s=se,te!=null?dn(e,!!a,te,!1):!!s!=!!a&&(n!=null?dn(e,!!a,n,!0):dn(e,!!a,a?[]:"",!1));return;case"textarea":se=te=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:It(e,n,E,null,s,c)}for(g in s)if(c=s[g],f=a[g],s.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":te=c;break;case"defaultValue":se=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&It(e,n,g,c,s,f)}Sn(e,te,se);return;case"option":for(var Ie in a)if(te=a[Ie],a.hasOwnProperty(Ie)&&te!=null&&!s.hasOwnProperty(Ie))switch(Ie){case"selected":e.selected=!1;break;default:It(e,n,Ie,null,s,te)}for(z in s)if(te=s[z],se=a[z],s.hasOwnProperty(z)&&te!==se&&(te!=null||se!=null))switch(z){case"selected":e.selected=te&&typeof te!="function"&&typeof te!="symbol";break;default:It(e,n,z,te,s,se)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var et in a)te=a[et],a.hasOwnProperty(et)&&te!=null&&!s.hasOwnProperty(et)&&It(e,n,et,null,s,te);for(Q in s)if(te=s[Q],se=a[Q],s.hasOwnProperty(Q)&&te!==se&&(te!=null||se!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(te!=null)throw Error(r(137,n));break;default:It(e,n,Q,te,s,se)}return;default:if(Nc(n)){for(var Ht in a)te=a[Ht],a.hasOwnProperty(Ht)&&te!==void 0&&!s.hasOwnProperty(Ht)&&Sf(e,n,Ht,void 0,s,te);for(ue in s)te=s[ue],se=a[ue],!s.hasOwnProperty(ue)||te===se||te===void 0&&se===void 0||Sf(e,n,ue,te,s,se);return}}for(var W in a)te=a[W],a.hasOwnProperty(W)&&te!=null&&!s.hasOwnProperty(W)&&It(e,n,W,null,s,te);for(me in s)te=s[me],se=a[me],!s.hasOwnProperty(me)||te===se||te==null&&se==null||It(e,n,me,te,s,se)}function bm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function fv(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,g=c.initiatorType,E=c.duration;if(f&&E&&bm(g)){for(g=0,E=c.responseEnd,s+=1;s<a.length;s++){var z=a[s],Q=z.startTime;if(Q>E)break;var ue=z.transferSize,me=z.initiatorType;ue&&bm(me)&&(z=z.responseEnd,g+=ue*(z<E?1:(E-Q)/(z-Q)))}if(--s,n+=8*(f+g)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var yf=null,bf=null;function Fl(e){return e.nodeType===9?e:e.ownerDocument}function Mm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Em(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function Mf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ef=null;function dv(){var e=window.event;return e&&e.type==="popstate"?e===Ef?!1:(Ef=e,!0):(Ef=null,!1)}var Tm=typeof setTimeout=="function"?setTimeout:void 0,hv=typeof clearTimeout=="function"?clearTimeout:void 0,Am=typeof Promise=="function"?Promise:void 0,pv=typeof queueMicrotask=="function"?queueMicrotask:typeof Am<"u"?function(e){return Am.resolve(null).then(e).catch(mv)}:Tm;function mv(e){setTimeout(function(){throw e})}function Na(e){return e==="head"}function Rm(e,n){var a=n,s=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){e.removeChild(c),as(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")xo(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,xo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,E=f.nodeName;f[Ja]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&xo(e.ownerDocument.body);a=c}while(a);as(n)}function Cm(e,n){var a=e;e=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=s}while(a)}function Tf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Tf(a),Os(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function xv(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Ja])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=li(e.nextSibling),e===null)break}return null}function gv(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=li(e.nextSibling),e===null))return null;return e}function wm(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=li(e.nextSibling),e===null))return null;return e}function Af(e){return e.data==="$?"||e.data==="$~"}function Rf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function _v(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),e._reactRetry=s}}function li(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var Cf=null;function Dm(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return li(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function Um(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function Lm(e,n,a){switch(n=Fl(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function xo(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Os(e)}var ci=new Map,Nm=new Set;function Il(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ji=j.d;j.d={f:vv,r:Sv,D:yv,C:bv,L:Mv,m:Ev,X:Av,S:Tv,M:Rv};function vv(){var e=Ji.f(),n=Dl();return e||n}function Sv(e){var n=T(e);n!==null&&n.tag===5&&n.type==="form"?Kp(n):Ji.r(e)}var ts=typeof document>"u"?null:document;function Om(e,n,a){var s=ts;if(s&&typeof n=="string"&&n){var c=qt(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Nm.has(c)||(Nm.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Rn(n,"link",e),$(n),s.head.appendChild(n)))}}function yv(e){Ji.D(e),Om("dns-prefetch",e,null)}function bv(e,n){Ji.C(e,n),Om("preconnect",e,n)}function Mv(e,n,a){Ji.L(e,n,a);var s=ts;if(s&&e&&n){var c='link[rel="preload"][as="'+qt(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+qt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+qt(a.imageSizes)+'"]')):c+='[href="'+qt(e)+'"]';var f=c;switch(n){case"style":f=ns(e);break;case"script":f=is(e)}ci.has(f)||(e=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ci.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(go(f))||n==="script"&&s.querySelector(_o(f))||(n=s.createElement("link"),Rn(n,"link",e),$(n),s.head.appendChild(n)))}}function Ev(e,n){Ji.m(e,n);var a=ts;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+qt(s)+'"][href="'+qt(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=is(e)}if(!ci.has(f)&&(e=_({rel:"modulepreload",href:e},n),ci.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(_o(f)))return}s=a.createElement("link"),Rn(s,"link",e),$(s),a.head.appendChild(s)}}}function Tv(e,n,a){Ji.S(e,n,a);var s=ts;if(s&&e){var c=ie(s).hoistableStyles,f=ns(e);n=n||"default";var g=c.get(f);if(!g){var E={loading:0,preload:null};if(g=s.querySelector(go(f)))E.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ci.get(f))&&wf(e,a);var z=g=s.createElement("link");$(z),Rn(z,"link",e),z._p=new Promise(function(Q,ue){z.onload=Q,z.onerror=ue}),z.addEventListener("load",function(){E.loading|=1}),z.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Hl(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:E},c.set(f,g)}}}function Av(e,n){Ji.X(e,n);var a=ts;if(a&&e){var s=ie(a).hoistableScripts,c=is(e),f=s.get(c);f||(f=a.querySelector(_o(c)),f||(e=_({src:e,async:!0},n),(n=ci.get(c))&&Df(e,n),f=a.createElement("script"),$(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Rv(e,n){Ji.M(e,n);var a=ts;if(a&&e){var s=ie(a).hoistableScripts,c=is(e),f=s.get(c);f||(f=a.querySelector(_o(c)),f||(e=_({src:e,async:!0,type:"module"},n),(n=ci.get(c))&&Df(e,n),f=a.createElement("script"),$(f),Rn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function zm(e,n,a,s){var c=(c=ne.current)?Il(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ns(a.href),a=ie(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=ns(a.href);var f=ie(c).hoistableStyles,g=f.get(e);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,g),(f=c.querySelector(go(e)))&&!f._p&&(g.instance=f,g.state.loading=5),ci.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(e,a),f||Cv(c,e,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=is(a),a=ie(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function ns(e){return'href="'+qt(e)+'"'}function go(e){return'link[rel="stylesheet"]['+e+"]"}function Pm(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Cv(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Rn(n,"link",a),$(n),e.head.appendChild(n))}function is(e){return'[src="'+qt(e)+'"]'}function _o(e){return"script[async]"+e}function Bm(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+qt(a.href)+'"]');if(s)return n.instance=s,$(s),s;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),$(s),Rn(s,"style",c),Hl(s,a.precedence,e),n.instance=s;case"stylesheet":c=ns(a.href);var f=e.querySelector(go(c));if(f)return n.state.loading|=4,n.instance=f,$(f),f;s=Pm(a),(c=ci.get(c))&&wf(s,c),f=(e.ownerDocument||e).createElement("link"),$(f);var g=f;return g._p=new Promise(function(E,z){g.onload=E,g.onerror=z}),Rn(f,"link",s),n.state.loading|=4,Hl(f,a.precedence,e),n.instance=f;case"script":return f=is(a.src),(c=e.querySelector(_o(f)))?(n.instance=c,$(c),c):(s=a,(c=ci.get(f))&&(s=_({},a),Df(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),$(c),Rn(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Hl(s,a.precedence,e));return n.instance}function Hl(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,g=0;g<s.length;g++){var E=s[g];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function wf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Df(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Gl=null;function Fm(e,n,a){if(Gl===null){var s=new Map,c=Gl=new Map;c.set(a,s)}else c=Gl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Ja]||f[rn]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=e+g;var E=s.get(g);E?E.push(f):s.set(g,[f])}}return s}function Im(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function wv(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Hm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Dv(e,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=ns(s.href),f=n.querySelector(go(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Vl.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=f,$(f);return}f=n.ownerDocument||n,s=Pm(s),(c=ci.get(c))&&wf(s,c),f=f.createElement("link"),$(f);var g=f;g._p=new Promise(function(E,z){g.onload=E,g.onerror=z}),Rn(f,"link",s),a.instance=f}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Vl.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Uf=0;function Uv(e,n){return e.stylesheets&&e.count===0&&Xl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var s=setTimeout(function(){if(e.stylesheets&&Xl(e,e.stylesheets),e.unsuspend){var f=e.unsuspend;e.unsuspend=null,f()}},6e4+n);0<e.imgBytes&&Uf===0&&(Uf=62500*fv());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xl(e,e.stylesheets),e.unsuspend)){var f=e.unsuspend;e.unsuspend=null,f()}},(e.imgBytes>Uf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Vl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var kl=null;function Xl(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,kl=new Map,n.forEach(Lv,e),kl=null,Vl.call(e))}function Lv(e,n){if(!(n.state.loading&4)){var a=kl.get(e);if(a)var s=a.get(null);else{a=new Map,kl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,c),a.set(g,c),this.count++,s=Vl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var vo={$$typeof:U,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Nv(e,n,a,s,c,f,g,E,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=At(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=At(0),this.hiddenUpdates=At(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function Gm(e,n,a,s,c,f,g,E,z,Q,ue,me){return e=new Nv(e,n,a,g,z,Q,ue,me,E),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),e.current=f,f.stateNode=e,n=cu(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},hu(f),e}function Vm(e){return e?(e=Or,e):Or}function km(e,n,a,s,c,f){c=Vm(c),s.context===null?s.context=c:s.pendingContext=c,s=ba(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=Ma(e,s,n),a!==null&&(Hn(a,e,n),Ks(a,e,n))}function Xm(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Lf(e,n){Xm(e,n),(e=e.alternate)&&Xm(e,n)}function Wm(e){if(e.tag===13||e.tag===31){var n=nr(e,67108864);n!==null&&Hn(n,e,67108864),Lf(e,67108864)}}function qm(e){if(e.tag===13||e.tag===31){var n=Qn();n=hi(n);var a=nr(e,n);a!==null&&Hn(a,e,n),Lf(e,n)}}var Wl=!0;function Ov(e,n,a,s){var c=P.T;P.T=null;var f=j.p;try{j.p=2,Nf(e,n,a,s)}finally{j.p=f,P.T=c}}function zv(e,n,a,s){var c=P.T;P.T=null;var f=j.p;try{j.p=8,Nf(e,n,a,s)}finally{j.p=f,P.T=c}}function Nf(e,n,a,s){if(Wl){var c=Of(s);if(c===null)vf(e,n,s,ql,a),jm(e,s);else if(Bv(c,e,n,a,s))s.stopPropagation();else if(jm(e,s),n&4&&-1<Pv.indexOf(e)){for(;c!==null;){var f=T(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=be(f.pendingLanes);if(g!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;g;){var z=1<<31-Ve(g);E.entanglements[1]|=z,g&=~z}Ci(f),(Lt&6)===0&&(Cl=M()+500,ho(0))}}break;case 31:case 13:E=nr(f,2),E!==null&&Hn(E,f,2),Dl(),Lf(f,2)}if(f=Of(s),f===null&&vf(e,n,s,ql,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else vf(e,n,s,null,a)}}function Of(e){return e=zc(e),zf(e)}var ql=null;function zf(e){if(ql=null,e=pa(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=d(n),e!==null)return e;e=null}else if(a===31){if(e=h(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return ql=e,null}function Ym(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(K()){case pe:return 2;case ve:return 8;case oe:case qe:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var Pf=!1,Oa=null,za=null,Pa=null,So=new Map,yo=new Map,Ba=[],Pv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jm(e,n){switch(e){case"focusin":case"focusout":Oa=null;break;case"dragenter":case"dragleave":za=null;break;case"mouseover":case"mouseout":Pa=null;break;case"pointerover":case"pointerout":So.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":yo.delete(n.pointerId)}}function bo(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=T(n),n!==null&&Wm(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Bv(e,n,a,s,c){switch(n){case"focusin":return Oa=bo(Oa,e,n,a,s,c),!0;case"dragenter":return za=bo(za,e,n,a,s,c),!0;case"mouseover":return Pa=bo(Pa,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return So.set(f,bo(So.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,yo.set(f,bo(yo.get(f)||null,e,n,a,s,c)),!0}return!1}function Zm(e){var n=pa(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){e.blockedOn=n,Ns(e.priority,function(){qm(a)});return}}else if(n===31){if(n=h(a),n!==null){e.blockedOn=n,Ns(e.priority,function(){qm(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Yl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Of(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Oc=s,a.target.dispatchEvent(s),Oc=null}else return n=T(a),n!==null&&Wm(n),e.blockedOn=a,!1;n.shift()}return!0}function Km(e,n,a){Yl(e)&&a.delete(n)}function Fv(){Pf=!1,Oa!==null&&Yl(Oa)&&(Oa=null),za!==null&&Yl(za)&&(za=null),Pa!==null&&Yl(Pa)&&(Pa=null),So.forEach(Km),yo.forEach(Km)}function jl(e,n){e.blockedOn===n&&(e.blockedOn=null,Pf||(Pf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Fv)))}var Zl=null;function Qm(e){Zl!==e&&(Zl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Zl===e&&(Zl=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(zf(s||a)===null)continue;break}var f=T(a);f!==null&&(e.splice(n,3),n-=3,Nu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function as(e){function n(z){return jl(z,e)}Oa!==null&&jl(Oa,e),za!==null&&jl(za,e),Pa!==null&&jl(Pa,e),So.forEach(n),yo.forEach(n);for(var a=0;a<Ba.length;a++){var s=Ba[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Ba.length&&(a=Ba[0],a.blockedOn===null);)Zm(a),a.blockedOn===null&&Ba.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],g=c[fn]||null;if(typeof f=="function")g||Qm(a);else if(g){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[fn]||null)E=g.formAction;else if(zf(c)!==null)continue}else E=g.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),Qm(a)}}}function Jm(){function e(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Bf(e){this._internalRoot=e}Kl.prototype.render=Bf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Qn();km(a,s,e,n,null,null)},Kl.prototype.unmount=Bf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;km(e.current,2,null,e,null,null),Dl(),n[Ni]=null}};function Kl(e){this._internalRoot=e}Kl.prototype.unstable_scheduleHydration=function(e){if(e){var n=Ls();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Ba.length&&n!==0&&n<Ba[a].priority;a++);Ba.splice(a,0,e),a===0&&Zm(e)}};var $m=t.version;if($m!=="19.2.0")throw Error(r(527,$m,"19.2.0"));j.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?x(e):null,e=e===null?null:e.stateNode,e};var Iv={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{Se=Ql.inject(Iv),Me=Ql}catch{}}return Eo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=s0,f=o0,g=l0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=Gm(e,1,!1,null,null,a,s,null,c,f,g,Jm),e[Ni]=n.current,_f(e),new Bf(n)},Eo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=s0,g=o0,E=l0,z=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=Gm(e,1,!0,n,a??null,s,c,z,f,g,E,Jm),n.context=Vm(null),a=n.current,s=Qn(),s=hi(s),c=ba(s),c.callback=null,Ma(a,c,s),a=s,n.current.lanes=a,Cn(n,a),Ci(n),e[Ni]=n.current,_f(e),new Kl(n)},Eo.version="19.2.0",Eo}var cx;function Kv(){if(cx)return Hf.exports;cx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Hf.exports=Zv(),Hf.exports}var Qv=Kv();const Jv=sg(Qv),$v="/vivli-website/assets/AR-clip-after-intro-nPfYupHt.mp4",eS="/vivli-website/assets/AR-clip-intro-qC7odwYn.mp4",tS="/vivli-website/assets/AR-clip-spiraling-BGom1lM3.mp4",nS="/vivli-website/assets/AR-clip-spirals-start-D0kqEpH-.mp4",iS="/vivli-website/assets/aerial-reverie-DxkhGmCJ.mp4",aS="/vivli-website/assets/process-stills-2-CLcL8Joy.png",rS="/vivli-website/assets/still-1-fzY1nNZs.jpg",sS="/vivli-website/assets/still-2-8wsy660Z.jpg",oS="/vivli-website/assets/still-3-DPGdX8xA.jpg",lS="/vivli-website/assets/still-4-BbJMAe40.jpg",cS="/vivli-website/assets/gallery-w-ml-D-iu-C6g.png",uS="/vivli-website/assets/pcb-schematic-DCEhCiIc.png",fS="/vivli-website/assets/thumbnail-Cc41NpnZ.png",dS="/vivli-website/assets/header_tiles-ChXZetfR.mp4",hS="/vivli-website/assets/thumbnail-Cz_cAM9k.png",pS="/vivli-website/assets/tiles_all-CeWGEUuY.png",mS="/vivli-website/assets/gallery-CrH0Hmr3.png",xS="/vivli-website/assets/thumbnail2-CNTZTuLj.png",gS="/vivli-website/assets/header-sKtiGC8i.png",_S="/vivli-website/assets/pawlink-DtlHItCH.png",vS="/vivli-website/assets/thumbnail-pJpcKxdP.png",SS="/vivli-website/assets/dither_it_figure-1-WdQGNKS-.png",yS="/vivli-website/assets/thumbnail-DPUFsreZ.png";const uh="181",bS=0,ux=1,MS=2,og=1,ES=2,ra=3,ja=0,Vn=1,oa=2,ua=0,vs=1,fx=2,dx=3,hx=4,TS=5,br=100,AS=101,RS=102,CS=103,wS=104,DS=200,US=201,LS=202,NS=203,Sd=204,yd=205,OS=206,zS=207,PS=208,BS=209,FS=210,IS=211,HS=212,GS=213,VS=214,bd=0,Md=1,Ed=2,ys=3,Td=4,Ad=5,Rd=6,Cd=7,lg=0,kS=1,XS=2,Ya=0,WS=1,qS=2,YS=3,jS=4,ZS=5,KS=6,QS=7,cg=300,bs=301,Ms=302,wd=303,Dd=304,Rc=306,Ud=1e3,la=1001,Ld=1002,ei=1003,JS=1004,Jl=1005,di=1006,Xf=1007,Er=1008,da=1009,ug=1010,fg=1011,Lo=1012,fh=1013,Ar=1014,ca=1015,Rs=1016,dh=1017,hh=1018,No=1020,dg=35902,hg=35899,pg=1021,mg=1022,bi=1023,Oo=1026,zo=1027,xg=1028,ph=1029,mh=1030,xh=1031,gh=1033,vc=33776,Sc=33777,yc=33778,bc=33779,Nd=35840,Od=35841,zd=35842,Pd=35843,Bd=36196,Fd=37492,Id=37496,Hd=37808,Gd=37809,Vd=37810,kd=37811,Xd=37812,Wd=37813,qd=37814,Yd=37815,jd=37816,Zd=37817,Kd=37818,Qd=37819,Jd=37820,$d=37821,eh=36492,th=36494,nh=36495,ih=36283,ah=36284,rh=36285,sh=36286,$S=3200,ey=3201,ty=0,ny=1,Wa="",fi="srgb",Es="srgb-linear",Ec="linear",Gt="srgb",rs=7680,px=519,iy=512,ay=513,ry=514,gg=515,sy=516,oy=517,ly=518,cy=519,mx=35044,xx="300 es",Di=2e3,Tc=2001;function _g(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function Ac(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function uy(){const o=Ac("canvas");return o.style.display="block",o}const gx={};function _x(...o){const t="THREE."+o.shift();console.log(t,...o)}function ot(...o){const t="THREE."+o.shift();console.warn(t,...o)}function nn(...o){const t="THREE."+o.shift();console.error(t,...o)}function Po(...o){const t=o.join(" ");t in gx||(gx[t]=!0,ot(...o))}function fy(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}class Cs{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,t);t.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wf=Math.PI/180,oh=180/Math.PI;function Bo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[o&255]+Dn[o>>8&255]+Dn[o>>16&255]+Dn[o>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function Mt(o,t,i){return Math.max(t,Math.min(i,o))}function dy(o,t){return(o%t+t)%t}function qf(o,t,i){return(1-i)*o+i*t}function To(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Gn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ut{constructor(t=0,i=0){Ut.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Mt(this.x,t.x,i.x),this.y=Mt(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Mt(this.x,t,i),this.y=Mt(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Mt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,d=this.y-t.y;return this.x=u*r-d*l+t.x,this.y=u*l+d*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fo{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],x=r[l+2],_=r[l+3],S=u[d+0],b=u[d+1],A=u[d+2],C=u[d+3];if(h<=0){t[i+0]=m,t[i+1]=p,t[i+2]=x,t[i+3]=_;return}if(h>=1){t[i+0]=S,t[i+1]=b,t[i+2]=A,t[i+3]=C;return}if(_!==C||m!==S||p!==b||x!==A){let y=m*S+p*b+x*A+_*C;y<0&&(S=-S,b=-b,A=-A,C=-C,y=-y);let v=1-h;if(y<.9995){const O=Math.acos(y),U=Math.sin(O);v=Math.sin(v*O)/U,h=Math.sin(h*O)/U,m=m*v+S*h,p=p*v+b*h,x=x*v+A*h,_=_*v+C*h}else{m=m*v+S*h,p=p*v+b*h,x=x*v+A*h,_=_*v+C*h;const O=1/Math.sqrt(m*m+p*p+x*x+_*_);m*=O,p*=O,x*=O,_*=O}}t[i]=m,t[i+1]=p,t[i+2]=x,t[i+3]=_}static multiplyQuaternionsFlat(t,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],x=r[l+3],_=u[d],S=u[d+1],b=u[d+2],A=u[d+3];return t[i]=h*A+x*_+m*b-p*S,t[i+1]=m*A+x*S+p*_-h*b,t[i+2]=p*A+x*b+h*S-m*_,t[i+3]=x*A-h*_-m*S-p*b,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,d=t._order,h=Math.cos,m=Math.sin,p=h(r/2),x=h(l/2),_=h(u/2),S=m(r/2),b=m(l/2),A=m(u/2);switch(d){case"XYZ":this._x=S*x*_+p*b*A,this._y=p*b*_-S*x*A,this._z=p*x*A+S*b*_,this._w=p*x*_-S*b*A;break;case"YXZ":this._x=S*x*_+p*b*A,this._y=p*b*_-S*x*A,this._z=p*x*A-S*b*_,this._w=p*x*_+S*b*A;break;case"ZXY":this._x=S*x*_-p*b*A,this._y=p*b*_+S*x*A,this._z=p*x*A+S*b*_,this._w=p*x*_-S*b*A;break;case"ZYX":this._x=S*x*_-p*b*A,this._y=p*b*_+S*x*A,this._z=p*x*A-S*b*_,this._w=p*x*_+S*b*A;break;case"YZX":this._x=S*x*_+p*b*A,this._y=p*b*_+S*x*A,this._z=p*x*A-S*b*_,this._w=p*x*_-S*b*A;break;case"XZY":this._x=S*x*_-p*b*A,this._y=p*b*_-S*x*A,this._z=p*x*A+S*b*_,this._w=p*x*_+S*b*A;break;default:ot("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],x=i[6],_=i[10],S=r+h+_;if(S>0){const b=.5/Math.sqrt(S+1);this._w=.25/b,this._x=(x-m)*b,this._y=(u-p)*b,this._z=(d-l)*b}else if(r>h&&r>_){const b=2*Math.sqrt(1+r-h-_);this._w=(x-m)/b,this._x=.25*b,this._y=(l+d)/b,this._z=(u+p)/b}else if(h>_){const b=2*Math.sqrt(1+h-r-_);this._w=(u-p)/b,this._x=(l+d)/b,this._y=.25*b,this._z=(m+x)/b}else{const b=2*Math.sqrt(1+_-r-h);this._w=(d-l)/b,this._x=(u+p)/b,this._y=(m+x)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<1e-8?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Mt(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,d=t._w,h=i._x,m=i._y,p=i._z,x=i._w;return this._x=r*x+d*h+l*p-u*m,this._y=l*x+d*m+u*h-r*p,this._z=u*x+d*p+r*m-l*h,this._w=d*x-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let r=t._x,l=t._y,u=t._z,d=t._w,h=this.dot(t);h<0&&(r=-r,l=-l,u=-u,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ce{constructor(t=0,i=0,r=0){ce.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(vx.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(vx.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,d=t.y,h=t.z,m=t.w,p=2*(d*l-h*r),x=2*(h*i-u*l),_=2*(u*r-d*i);return this.x=i+m*p+d*_-h*x,this.y=r+m*x+h*p-u*_,this.z=l+m*_+u*x-d*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Mt(this.x,t.x,i.x),this.y=Mt(this.y,t.y,i.y),this.z=Mt(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Mt(this.x,t,i),this.y=Mt(this.y,t,i),this.z=Mt(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Yf.copy(this).projectOnVector(t),this.sub(Yf)}reflect(t){return this.sub(Yf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Mt(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yf=new ce,vx=new Fo;class ft{constructor(t,i,r,l,u,d,h,m,p){ft.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p)}set(t,i,r,l,u,d,h,m,p){const x=this.elements;return x[0]=t,x[1]=l,x[2]=h,x[3]=i,x[4]=u,x[5]=m,x[6]=r,x[7]=d,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],x=r[4],_=r[7],S=r[2],b=r[5],A=r[8],C=l[0],y=l[3],v=l[6],O=l[1],U=l[4],F=l[7],k=l[2],N=l[5],B=l[8];return u[0]=d*C+h*O+m*k,u[3]=d*y+h*U+m*N,u[6]=d*v+h*F+m*B,u[1]=p*C+x*O+_*k,u[4]=p*y+x*U+_*N,u[7]=p*v+x*F+_*B,u[2]=S*C+b*O+A*k,u[5]=S*y+b*U+A*N,u[8]=S*v+b*F+A*B,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8];return i*d*x-i*h*p-r*u*x+r*h*m+l*u*p-l*d*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8],_=x*d-h*p,S=h*m-x*u,b=p*u-d*m,A=i*_+r*S+l*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return t[0]=_*C,t[1]=(l*p-x*r)*C,t[2]=(h*r-l*d)*C,t[3]=S*C,t[4]=(x*i-l*m)*C,t[5]=(l*u-h*i)*C,t[6]=b*C,t[7]=(r*m-p*i)*C,t[8]=(d*i-r*u)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+t,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(t,i){return this.premultiply(jf.makeScale(t,i)),this}rotate(t){return this.premultiply(jf.makeRotation(-t)),this}translate(t,i){return this.premultiply(jf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const jf=new ft,Sx=new ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),yx=new ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hy(){const o={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Gt&&(l.r=fa(l.r),l.g=fa(l.g),l.b=fa(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Gt&&(l.r=Ss(l.r),l.g=Ss(l.g),l.b=Ss(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Wa?Ec:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Po("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Po("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Es]:{primaries:t,whitePoint:r,transfer:Ec,toXYZ:Sx,fromXYZ:yx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:t,whitePoint:r,transfer:Gt,toXYZ:Sx,fromXYZ:yx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),o}const Dt=hy();function fa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ss(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ss;class py{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let r;if(t instanceof HTMLCanvasElement)r=t;else{ss===void 0&&(ss=Ac("canvas")),ss.width=t.width,ss.height=t.height;const l=ss.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),r=ss}return r.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=Ac("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=fa(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(fa(i[r]/255)*255):i[r]=fa(i[r]);return{data:i,width:t.width,height:t.height}}else return ot("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let my=0;class _h{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=Bo(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Zf(l[d].image)):u.push(Zf(l[d]))}else u=Zf(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function Zf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?py.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(ot("Texture: Unable to serialize Texture."),{})}let xy=0;const Kf=new ce;class On extends Cs{constructor(t=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,r=la,l=la,u=di,d=Er,h=bi,m=da,p=On.DEFAULT_ANISOTROPY,x=Wa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=Bo(),this.name="",this.source=new _h(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Kf).x}get height(){return this.source.getSize(Kf).y}get depth(){return this.source.getSize(Kf).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const r=t[i];if(r===void 0){ot(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==cg)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ud:t.x=t.x-Math.floor(t.x);break;case la:t.x=t.x<0?0:1;break;case Ld:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ud:t.y=t.y-Math.floor(t.y);break;case la:t.y=t.y<0?0:1;break;case Ld:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=cg;On.DEFAULT_ANISOTROPY=1;class an{constructor(t=0,i=0,r=0,l=1){an.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,d=t.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],x=m[4],_=m[8],S=m[1],b=m[5],A=m[9],C=m[2],y=m[6],v=m[10];if(Math.abs(x-S)<.01&&Math.abs(_-C)<.01&&Math.abs(A-y)<.01){if(Math.abs(x+S)<.1&&Math.abs(_+C)<.1&&Math.abs(A+y)<.1&&Math.abs(p+b+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,F=(b+1)/2,k=(v+1)/2,N=(x+S)/4,B=(_+C)/4,J=(A+y)/4;return U>F&&U>k?U<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(U),l=N/r,u=B/r):F>k?F<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(F),r=N/l,u=J/l):k<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(k),r=B/u,l=J/u),this.set(r,l,u,i),this}let O=Math.sqrt((y-A)*(y-A)+(_-C)*(_-C)+(S-x)*(S-x));return Math.abs(O)<.001&&(O=1),this.x=(y-A)/O,this.y=(_-C)/O,this.z=(S-x)/O,this.w=Math.acos((p+b+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Mt(this.x,t.x,i.x),this.y=Mt(this.y,t.y,i.y),this.z=Mt(this.z,t.z,i.z),this.w=Mt(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Mt(this.x,t,i),this.y=Mt(this.y,t,i),this.z=Mt(this.z,t,i),this.w=Mt(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Mt(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gy extends Cs{constructor(t=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=r.depth,this.scissor=new an(0,0,t,i),this.scissorTest=!1,this.viewport=new an(0,0,t,i);const l={width:t,height:i,depth:r.depth},u=new On(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(t={}){const i={minFilter:di,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,r=t.textures.length;i<r;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new _h(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Za extends gy{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class vg extends On{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ei,this.minFilter=ei,this.wrapR=la,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class _y extends On{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=ei,this.minFilter=ei,this.wrapR=la,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Io{constructor(t=new ce(1/0,1/0,1/0),i=new ce(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(gi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(gi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=gi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)t.isMesh===!0?t.getVertexPosition(d,gi):gi.fromBufferAttribute(u,d),gi.applyMatrix4(t.matrixWorld),this.expandByPoint(gi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),$l.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),$l.copy(r.boundingBox)),$l.applyMatrix4(t.matrixWorld),this.union($l)}const l=t.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gi),gi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ao),ec.subVectors(this.max,Ao),os.subVectors(t.a,Ao),ls.subVectors(t.b,Ao),cs.subVectors(t.c,Ao),Ia.subVectors(ls,os),Ha.subVectors(cs,ls),mr.subVectors(os,cs);let i=[0,-Ia.z,Ia.y,0,-Ha.z,Ha.y,0,-mr.z,mr.y,Ia.z,0,-Ia.x,Ha.z,0,-Ha.x,mr.z,0,-mr.x,-Ia.y,Ia.x,0,-Ha.y,Ha.x,0,-mr.y,mr.x,0];return!Qf(i,os,ls,cs,ec)||(i=[1,0,0,0,1,0,0,0,1],!Qf(i,os,ls,cs,ec))?!1:(tc.crossVectors(Ia,Ha),i=[tc.x,tc.y,tc.z],Qf(i,os,ls,cs,ec))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints($i),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const $i=[new ce,new ce,new ce,new ce,new ce,new ce,new ce,new ce],gi=new ce,$l=new Io,os=new ce,ls=new ce,cs=new ce,Ia=new ce,Ha=new ce,mr=new ce,Ao=new ce,ec=new ce,tc=new ce,xr=new ce;function Qf(o,t,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){xr.fromArray(o,u);const h=l.x*Math.abs(xr.x)+l.y*Math.abs(xr.y)+l.z*Math.abs(xr.z),m=t.dot(xr),p=i.dot(xr),x=r.dot(xr);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const vy=new Io,Ro=new ce,Jf=new ce;class vh{constructor(t=new ce,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):vy.setFromPoints(t).getCenter(r);let l=0;for(let u=0,d=t.length;u<d;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ro.subVectors(t,this.center);const i=Ro.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ro,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Jf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ro.copy(t.center).add(Jf)),this.expandByPoint(Ro.copy(t.center).sub(Jf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const ea=new ce,$f=new ce,nc=new ce,Ga=new ce,ed=new ce,ic=new ce,td=new ce;class Sy{constructor(t=new ce,i=new ce(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ea)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=ea.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(ea.copy(this.origin).addScaledVector(this.direction,i),ea.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){$f.copy(t).add(i).multiplyScalar(.5),nc.copy(i).sub(t).normalize(),Ga.copy(this.origin).sub($f);const u=t.distanceTo(i)*.5,d=-this.direction.dot(nc),h=Ga.dot(this.direction),m=-Ga.dot(nc),p=Ga.lengthSq(),x=Math.abs(1-d*d);let _,S,b,A;if(x>0)if(_=d*m-h,S=d*h-m,A=u*x,_>=0)if(S>=-A)if(S<=A){const C=1/x;_*=C,S*=C,b=_*(_+d*S+2*h)+S*(d*_+S+2*m)+p}else S=u,_=Math.max(0,-(d*S+h)),b=-_*_+S*(S+2*m)+p;else S=-u,_=Math.max(0,-(d*S+h)),b=-_*_+S*(S+2*m)+p;else S<=-A?(_=Math.max(0,-(-d*u+h)),S=_>0?-u:Math.min(Math.max(-u,-m),u),b=-_*_+S*(S+2*m)+p):S<=A?(_=0,S=Math.min(Math.max(-u,-m),u),b=S*(S+2*m)+p):(_=Math.max(0,-(d*u+h)),S=_>0?u:Math.min(Math.max(-u,-m),u),b=-_*_+S*(S+2*m)+p);else S=d>0?-u:u,_=Math.max(0,-(d*S+h)),b=-_*_+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy($f).addScaledVector(nc,S),b}intersectSphere(t,i){ea.subVectors(t.center,this.origin);const r=ea.dot(this.direction),l=ea.dot(ea)-r*r,u=t.radius*t.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,d,h,m;const p=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(r=(t.min.x-S.x)*p,l=(t.max.x-S.x)*p):(r=(t.max.x-S.x)*p,l=(t.min.x-S.x)*p),x>=0?(u=(t.min.y-S.y)*x,d=(t.max.y-S.y)*x):(u=(t.max.y-S.y)*x,d=(t.min.y-S.y)*x),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),_>=0?(h=(t.min.z-S.z)*_,m=(t.max.z-S.z)*_):(h=(t.max.z-S.z)*_,m=(t.min.z-S.z)*_),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,ea)!==null}intersectTriangle(t,i,r,l,u){ed.subVectors(i,t),ic.subVectors(r,t),td.crossVectors(ed,ic);let d=this.direction.dot(td),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ga.subVectors(this.origin,t);const m=h*this.direction.dot(ic.crossVectors(Ga,ic));if(m<0)return null;const p=h*this.direction.dot(ed.cross(Ga));if(p<0||m+p>d)return null;const x=-h*Ga.dot(td);return x<0?null:this.at(x/d,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mn{constructor(t,i,r,l,u,d,h,m,p,x,_,S,b,A,C,y){mn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,d,h,m,p,x,_,S,b,A,C,y)}set(t,i,r,l,u,d,h,m,p,x,_,S,b,A,C,y){const v=this.elements;return v[0]=t,v[4]=i,v[8]=r,v[12]=l,v[1]=u,v[5]=d,v[9]=h,v[13]=m,v[2]=p,v[6]=x,v[10]=_,v[14]=S,v[3]=b,v[7]=A,v[11]=C,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mn().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/us.setFromMatrixColumn(t,0).length(),u=1/us.setFromMatrixColumn(t,1).length(),d=1/us.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),x=Math.cos(u),_=Math.sin(u);if(t.order==="XYZ"){const S=d*x,b=d*_,A=h*x,C=h*_;i[0]=m*x,i[4]=-m*_,i[8]=p,i[1]=b+A*p,i[5]=S-C*p,i[9]=-h*m,i[2]=C-S*p,i[6]=A+b*p,i[10]=d*m}else if(t.order==="YXZ"){const S=m*x,b=m*_,A=p*x,C=p*_;i[0]=S+C*h,i[4]=A*h-b,i[8]=d*p,i[1]=d*_,i[5]=d*x,i[9]=-h,i[2]=b*h-A,i[6]=C+S*h,i[10]=d*m}else if(t.order==="ZXY"){const S=m*x,b=m*_,A=p*x,C=p*_;i[0]=S-C*h,i[4]=-d*_,i[8]=A+b*h,i[1]=b+A*h,i[5]=d*x,i[9]=C-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(t.order==="ZYX"){const S=d*x,b=d*_,A=h*x,C=h*_;i[0]=m*x,i[4]=A*p-b,i[8]=S*p+C,i[1]=m*_,i[5]=C*p+S,i[9]=b*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(t.order==="YZX"){const S=d*m,b=d*p,A=h*m,C=h*p;i[0]=m*x,i[4]=C-S*_,i[8]=A*_+b,i[1]=_,i[5]=d*x,i[9]=-h*x,i[2]=-p*x,i[6]=b*_+A,i[10]=S-C*_}else if(t.order==="XZY"){const S=d*m,b=d*p,A=h*m,C=h*p;i[0]=m*x,i[4]=-_,i[8]=p*x,i[1]=S*_+C,i[5]=d*x,i[9]=b*_-A,i[2]=A*_-b,i[6]=h*x,i[10]=C*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(yy,t,by)}lookAt(t,i,r){const l=this.elements;return Jn.subVectors(t,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Va.crossVectors(r,Jn),Va.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Va.crossVectors(r,Jn)),Va.normalize(),ac.crossVectors(Jn,Va),l[0]=Va.x,l[4]=ac.x,l[8]=Jn.x,l[1]=Va.y,l[5]=ac.y,l[9]=Jn.y,l[2]=Va.z,l[6]=ac.z,l[10]=Jn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],x=r[1],_=r[5],S=r[9],b=r[13],A=r[2],C=r[6],y=r[10],v=r[14],O=r[3],U=r[7],F=r[11],k=r[15],N=l[0],B=l[4],J=l[8],w=l[12],R=l[1],V=l[5],ee=l[9],re=l[13],he=l[2],fe=l[6],P=l[10],j=l[14],Y=l[3],ge=l[7],_e=l[11],L=l[15];return u[0]=d*N+h*R+m*he+p*Y,u[4]=d*B+h*V+m*fe+p*ge,u[8]=d*J+h*ee+m*P+p*_e,u[12]=d*w+h*re+m*j+p*L,u[1]=x*N+_*R+S*he+b*Y,u[5]=x*B+_*V+S*fe+b*ge,u[9]=x*J+_*ee+S*P+b*_e,u[13]=x*w+_*re+S*j+b*L,u[2]=A*N+C*R+y*he+v*Y,u[6]=A*B+C*V+y*fe+v*ge,u[10]=A*J+C*ee+y*P+v*_e,u[14]=A*w+C*re+y*j+v*L,u[3]=O*N+U*R+F*he+k*Y,u[7]=O*B+U*V+F*fe+k*ge,u[11]=O*J+U*ee+F*P+k*_e,u[15]=O*w+U*re+F*j+k*L,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],d=t[1],h=t[5],m=t[9],p=t[13],x=t[2],_=t[6],S=t[10],b=t[14],A=t[3],C=t[7],y=t[11],v=t[15];return A*(+u*m*_-l*p*_-u*h*S+r*p*S+l*h*b-r*m*b)+C*(+i*m*b-i*p*S+u*d*S-l*d*b+l*p*x-u*m*x)+y*(+i*p*_-i*h*b-u*d*_+r*d*b+u*h*x-r*p*x)+v*(-l*h*x-i*m*_+i*h*S+l*d*_-r*d*S+r*m*x)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],d=t[4],h=t[5],m=t[6],p=t[7],x=t[8],_=t[9],S=t[10],b=t[11],A=t[12],C=t[13],y=t[14],v=t[15],O=_*y*p-C*S*p+C*m*b-h*y*b-_*m*v+h*S*v,U=A*S*p-x*y*p-A*m*b+d*y*b+x*m*v-d*S*v,F=x*C*p-A*_*p+A*h*b-d*C*b-x*h*v+d*_*v,k=A*_*m-x*C*m-A*h*S+d*C*S+x*h*y-d*_*y,N=i*O+r*U+l*F+u*k;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/N;return t[0]=O*B,t[1]=(C*S*u-_*y*u-C*l*b+r*y*b+_*l*v-r*S*v)*B,t[2]=(h*y*u-C*m*u+C*l*p-r*y*p-h*l*v+r*m*v)*B,t[3]=(_*m*u-h*S*u-_*l*p+r*S*p+h*l*b-r*m*b)*B,t[4]=U*B,t[5]=(x*y*u-A*S*u+A*l*b-i*y*b-x*l*v+i*S*v)*B,t[6]=(A*m*u-d*y*u-A*l*p+i*y*p+d*l*v-i*m*v)*B,t[7]=(d*S*u-x*m*u+x*l*p-i*S*p-d*l*b+i*m*b)*B,t[8]=F*B,t[9]=(A*_*u-x*C*u-A*r*b+i*C*b+x*r*v-i*_*v)*B,t[10]=(d*C*u-A*h*u+A*r*p-i*C*p-d*r*v+i*h*v)*B,t[11]=(x*h*u-d*_*u-x*r*p+i*_*p+d*r*b-i*h*b)*B,t[12]=k*B,t[13]=(x*C*l-A*_*l+A*r*S-i*C*S-x*r*y+i*_*y)*B,t[14]=(A*h*l-d*C*l-A*r*m+i*C*m+d*r*y-i*h*y)*B,t[15]=(d*_*l-x*h*l+x*r*m-i*_*m-d*r*S+i*h*S)*B,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=t.x,h=t.y,m=t.z,p=u*d,x=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,x*h+r,x*m-l*d,0,p*m-l*h,x*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,d){return this.set(1,r,u,0,t,1,d,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,x=d+d,_=h+h,S=u*p,b=u*x,A=u*_,C=d*x,y=d*_,v=h*_,O=m*p,U=m*x,F=m*_,k=r.x,N=r.y,B=r.z;return l[0]=(1-(C+v))*k,l[1]=(b+F)*k,l[2]=(A-U)*k,l[3]=0,l[4]=(b-F)*N,l[5]=(1-(S+v))*N,l[6]=(y+O)*N,l[7]=0,l[8]=(A+U)*B,l[9]=(y-O)*B,l[10]=(1-(S+C))*B,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=us.set(l[0],l[1],l[2]).length();const d=us.set(l[4],l[5],l[6]).length(),h=us.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],_i.copy(this);const p=1/u,x=1/d,_=1/h;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=x,_i.elements[5]*=x,_i.elements[6]*=x,_i.elements[8]*=_,_i.elements[9]*=_,_i.elements[10]*=_,i.setFromRotationMatrix(_i),r.x=u,r.y=d,r.z=h,this}makePerspective(t,i,r,l,u,d,h=Di,m=!1){const p=this.elements,x=2*u/(i-t),_=2*u/(r-l),S=(i+t)/(i-t),b=(r+l)/(r-l);let A,C;if(m)A=u/(d-u),C=d*u/(d-u);else if(h===Di)A=-(d+u)/(d-u),C=-2*d*u/(d-u);else if(h===Tc)A=-d/(d-u),C=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=b,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,r,l,u,d,h=Di,m=!1){const p=this.elements,x=2/(i-t),_=2/(r-l),S=-(i+t)/(i-t),b=-(r+l)/(r-l);let A,C;if(m)A=1/(d-u),C=d/(d-u);else if(h===Di)A=-2/(d-u),C=-(d+u)/(d-u);else if(h===Tc)A=-1/(d-u),C=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=b,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const us=new ce,_i=new mn,yy=new ce(0,0,0),by=new ce(1,1,1),Va=new ce,ac=new ce,Jn=new ce,bx=new mn,Mx=new Fo;class ha{constructor(t=0,i=0,r=0,l=ha.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],x=l[9],_=l[2],S=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(Mt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,b),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Mt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,b),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(Mt(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,b),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Mt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,b),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Mt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(h,b));break;case"XZY":this._z=Math.asin(-Mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-x,b),this._y=0);break;default:ot("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return bx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bx,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return Mx.setFromEuler(this),this.setFromQuaternion(Mx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ha.DEFAULT_ORDER="XYZ";class Sg{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let My=0;const Ex=new ce,fs=new Fo,ta=new mn,rc=new ce,Co=new ce,Ey=new ce,Ty=new Fo,Tx=new ce(1,0,0),Ax=new ce(0,1,0),Rx=new ce(0,0,1),Cx={type:"added"},Ay={type:"removed"},ds={type:"childadded",child:null},nd={type:"childremoved",child:null};class ti extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:My++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ti.DEFAULT_UP.clone();const t=new ce,i=new ha,r=new Fo,l=new ce(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new mn},normalMatrix:{value:new ft}}),this.matrix=new mn,this.matrixWorld=new mn,this.matrixAutoUpdate=ti.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return fs.setFromAxisAngle(t,i),this.quaternion.multiply(fs),this}rotateOnWorldAxis(t,i){return fs.setFromAxisAngle(t,i),this.quaternion.premultiply(fs),this}rotateX(t){return this.rotateOnAxis(Tx,t)}rotateY(t){return this.rotateOnAxis(Ax,t)}rotateZ(t){return this.rotateOnAxis(Rx,t)}translateOnAxis(t,i){return Ex.copy(t).applyQuaternion(this.quaternion),this.position.add(Ex.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(Tx,t)}translateY(t){return this.translateOnAxis(Ax,t)}translateZ(t){return this.translateOnAxis(Rx,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ta.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?rc.copy(t):rc.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ta.lookAt(Co,rc,this.up):ta.lookAt(rc,Co,this.up),this.quaternion.setFromRotationMatrix(ta),l&&(ta.extractRotation(l.matrixWorld),fs.setFromRotationMatrix(ta),this.quaternion.premultiply(fs.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(nn("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Cx),ds.child=t,this.dispatchEvent(ds),ds.child=null):nn("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Ay),nd.child=t,this.dispatchEvent(nd),nd.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ta.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ta.multiply(t.parent.matrixWorld)),t.applyMatrix4(ta),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Cx),ds.child=t,this.dispatchEvent(ds),ds.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(t,i);if(d!==void 0)return d}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,t,Ey),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,Ty,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const _=m[p];u(t.shapes,_)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(t.materials,this.material[m]));l.material=h}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(t.animations,m))}}if(i){const h=d(t.geometries),m=d(t.materials),p=d(t.textures),x=d(t.images),_=d(t.shapes),S=d(t.skeletons),b=d(t.animations),A=d(t.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),_.length>0&&(r.shapes=_),S.length>0&&(r.skeletons=S),b.length>0&&(r.animations=b),A.length>0&&(r.nodes=A)}return r.object=l,r;function d(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}ti.DEFAULT_UP=new ce(0,1,0);ti.DEFAULT_MATRIX_AUTO_UPDATE=!0;ti.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new ce,na=new ce,id=new ce,ia=new ce,hs=new ce,ps=new ce,wx=new ce,ad=new ce,rd=new ce,sd=new ce,od=new an,ld=new an,cd=new an;class yi{constructor(t=new ce,i=new ce,r=new ce){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),vi.subVectors(t,i),l.cross(vi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){vi.subVectors(l,i),na.subVectors(r,i),id.subVectors(t,i);const d=vi.dot(vi),h=vi.dot(na),m=vi.dot(id),p=na.dot(na),x=na.dot(id),_=d*p-h*h;if(_===0)return u.set(0,0,0),null;const S=1/_,b=(p*m-h*x)*S,A=(d*x-h*m)*S;return u.set(1-b-A,A,b)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(t,i,r,l,u,d,h,m){return this.getBarycoord(t,i,r,l,ia)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ia.x),m.addScaledVector(d,ia.y),m.addScaledVector(h,ia.z),m)}static getInterpolatedAttribute(t,i,r,l,u,d){return od.setScalar(0),ld.setScalar(0),cd.setScalar(0),od.fromBufferAttribute(t,i),ld.fromBufferAttribute(t,r),cd.fromBufferAttribute(t,l),d.setScalar(0),d.addScaledVector(od,u.x),d.addScaledVector(ld,u.y),d.addScaledVector(cd,u.z),d}static isFrontFacing(t,i,r,l){return vi.subVectors(r,i),na.subVectors(t,i),vi.cross(na).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),vi.cross(na).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return yi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return yi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return yi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let d,h;hs.subVectors(l,r),ps.subVectors(u,r),ad.subVectors(t,r);const m=hs.dot(ad),p=ps.dot(ad);if(m<=0&&p<=0)return i.copy(r);rd.subVectors(t,l);const x=hs.dot(rd),_=ps.dot(rd);if(x>=0&&_<=x)return i.copy(l);const S=m*_-x*p;if(S<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(r).addScaledVector(hs,d);sd.subVectors(t,u);const b=hs.dot(sd),A=ps.dot(sd);if(A>=0&&b<=A)return i.copy(u);const C=b*p-m*A;if(C<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(r).addScaledVector(ps,h);const y=x*A-b*_;if(y<=0&&_-x>=0&&b-A>=0)return wx.subVectors(u,l),h=(_-x)/(_-x+(b-A)),i.copy(l).addScaledVector(wx,h);const v=1/(y+C+S);return d=C*v,h=S*v,i.copy(r).addScaledVector(hs,d).addScaledVector(ps,h)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const yg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ka={h:0,s:0,l:0},sc={h:0,s:0,l:0};function ud(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class Vt{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=fi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Dt.colorSpaceToWorking(this,i),this}setRGB(t,i,r,l=Dt.workingColorSpace){return this.r=t,this.g=i,this.b=r,Dt.colorSpaceToWorking(this,l),this}setHSL(t,i,r,l=Dt.workingColorSpace){if(t=dy(t,1),i=Mt(i,0,1),r=Mt(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=ud(d,u,t+1/3),this.g=ud(d,u,t),this.b=ud(d,u,t-1/3)}return Dt.colorSpaceToWorking(this,l),this}setStyle(t,i=fi){function r(u){u!==void 0&&parseFloat(u)<1&&ot("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:ot("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);ot("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=fi){const r=yg[t.toLowerCase()];return r!==void 0?this.setHex(r,i):ot("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=fa(t.r),this.g=fa(t.g),this.b=fa(t.b),this}copyLinearToSRGB(t){return this.r=Ss(t.r),this.g=Ss(t.g),this.b=Ss(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=fi){return Dt.workingToColorSpace(Un.copy(this),t),Math.round(Mt(Un.r*255,0,255))*65536+Math.round(Mt(Un.g*255,0,255))*256+Math.round(Mt(Un.b*255,0,255))}getHexString(t=fi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Dt.workingColorSpace){Dt.workingToColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,u=Un.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const x=(h+d)/2;if(h===d)m=0,p=0;else{const _=d-h;switch(p=x<=.5?_/(d+h):_/(2-d-h),d){case r:m=(l-u)/_+(l<u?6:0);break;case l:m=(u-r)/_+2;break;case u:m=(r-l)/_+4;break}m/=6}return t.h=m,t.s=p,t.l=x,t}getRGB(t,i=Dt.workingColorSpace){return Dt.workingToColorSpace(Un.copy(this),i),t.r=Un.r,t.g=Un.g,t.b=Un.b,t}getStyle(t=fi){Dt.workingToColorSpace(Un.copy(this),t);const i=Un.r,r=Un.g,l=Un.b;return t!==fi?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(ka),this.setHSL(ka.h+t,ka.s+i,ka.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(ka),t.getHSL(sc);const r=qf(ka.h,sc.h,i),l=qf(ka.s,sc.s,i),u=qf(ka.l,sc.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Vt;Vt.NAMES=yg;let Ry=0;class Cc extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ry++}),this.uuid=Bo(),this.name="",this.type="Material",this.blending=vs,this.side=ja,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sd,this.blendDst=yd,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Vt(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=px,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){ot(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){ot(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(r.blending=this.blending),this.side!==ja&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Sd&&(r.blendSrc=this.blendSrc),this.blendDst!==yd&&(r.blendDst=this.blendDst),this.blendEquation!==br&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==px&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(t.textures),d=l(t.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class bg extends Cc{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ha,this.combine=lg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const un=new ce,oc=new Ut;let Cy=0;class Ui{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Cy++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=mx,this.updateRanges=[],this.gpuType=ca,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)oc.fromBufferAttribute(this,i),oc.applyMatrix3(t),this.setXY(i,oc.x,oc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(t),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(t),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(t),this.setXYZ(i,un.x,un.y,un.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=To(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Gn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=To(i,this.array)),i}setX(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=To(i,this.array)),i}setY(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=To(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=To(i,this.array)),i}setW(t,i){return this.normalized&&(i=Gn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array),u=Gn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==mx&&(t.usage=this.usage),t}}class Mg extends Ui{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Eg extends Ui{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class Tr extends Ui{constructor(t,i,r){super(new Float32Array(t),i,r)}}let wy=0;const ui=new mn,fd=new ti,ms=new ce,$n=new Io,wo=new Io,bn=new ce;class Ka extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(_g(t)?Eg:Mg)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new ft().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ui.makeRotationFromQuaternion(t),this.applyMatrix4(ui),this}rotateX(t){return ui.makeRotationX(t),this.applyMatrix4(ui),this}rotateY(t){return ui.makeRotationY(t),this.applyMatrix4(ui),this}rotateZ(t){return ui.makeRotationZ(t),this.applyMatrix4(ui),this}translate(t,i,r){return ui.makeTranslation(t,i,r),this.applyMatrix4(ui),this}scale(t,i,r){return ui.makeScale(t,i,r),this.applyMatrix4(ui),this}lookAt(t){return fd.lookAt(t),fd.updateMatrix(),this.applyMatrix4(fd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const d=t[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Tr(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&ot("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Io);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){nn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ce(-1/0,-1/0,-1/0),new ce(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vh);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){nn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ce,1/0);return}if(t){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(t),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];wo.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors($n.min,wo.min),$n.expandByPoint(bn),bn.addVectors($n.max,wo.max),$n.expandByPoint(bn)):($n.expandByPoint(wo.min),$n.expandByPoint(wo.max))}$n.getCenter(r);let l=0;for(let u=0,d=t.count;u<d;u++)bn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(bn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)bn.fromBufferAttribute(h,p),m&&(ms.fromBufferAttribute(t,p),bn.add(ms)),l=Math.max(l,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&nn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){nn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let J=0;J<r.count;J++)h[J]=new ce,m[J]=new ce;const p=new ce,x=new ce,_=new ce,S=new Ut,b=new Ut,A=new Ut,C=new ce,y=new ce;function v(J,w,R){p.fromBufferAttribute(r,J),x.fromBufferAttribute(r,w),_.fromBufferAttribute(r,R),S.fromBufferAttribute(u,J),b.fromBufferAttribute(u,w),A.fromBufferAttribute(u,R),x.sub(p),_.sub(p),b.sub(S),A.sub(S);const V=1/(b.x*A.y-A.x*b.y);isFinite(V)&&(C.copy(x).multiplyScalar(A.y).addScaledVector(_,-b.y).multiplyScalar(V),y.copy(_).multiplyScalar(b.x).addScaledVector(x,-A.x).multiplyScalar(V),h[J].add(C),h[w].add(C),h[R].add(C),m[J].add(y),m[w].add(y),m[R].add(y))}let O=this.groups;O.length===0&&(O=[{start:0,count:t.count}]);for(let J=0,w=O.length;J<w;++J){const R=O[J],V=R.start,ee=R.count;for(let re=V,he=V+ee;re<he;re+=3)v(t.getX(re+0),t.getX(re+1),t.getX(re+2))}const U=new ce,F=new ce,k=new ce,N=new ce;function B(J){k.fromBufferAttribute(l,J),N.copy(k);const w=h[J];U.copy(w),U.sub(k.multiplyScalar(k.dot(w))).normalize(),F.crossVectors(N,w);const V=F.dot(m[J])<0?-1:1;d.setXYZW(J,U.x,U.y,U.z,V)}for(let J=0,w=O.length;J<w;++J){const R=O[J],V=R.start,ee=R.count;for(let re=V,he=V+ee;re<he;re+=3)B(t.getX(re+0)),B(t.getX(re+1)),B(t.getX(re+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ui(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,b=r.count;S<b;S++)r.setXYZ(S,0,0,0);const l=new ce,u=new ce,d=new ce,h=new ce,m=new ce,p=new ce,x=new ce,_=new ce;if(t)for(let S=0,b=t.count;S<b;S+=3){const A=t.getX(S+0),C=t.getX(S+1),y=t.getX(S+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,y),x.subVectors(d,u),_.subVectors(l,u),x.cross(_),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,y),h.add(x),m.add(x),p.add(x),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,b=i.count;S<b;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),x.subVectors(d,u),_.subVectors(l,u),x.cross(_),r.setXYZ(S+0,x.x,x.y,x.z),r.setXYZ(S+1,x.x,x.y,x.z),r.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)bn.fromBufferAttribute(t,i),bn.normalize(),t.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function t(h,m){const p=h.array,x=h.itemSize,_=h.normalized,S=new p.constructor(m.length*x);let b=0,A=0;for(let C=0,y=m.length;C<y;C++){h.isInterleavedBufferAttribute?b=m[C]*h.data.stride+h.offset:b=m[C]*x;for(let v=0;v<x;v++)S[A++]=p[b++]}return new Ui(S,x,_)}if(this.index===null)return ot("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ka,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=t(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let x=0,_=p.length;x<_;x++){const S=p[x],b=t(S,r);m.push(b)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let _=0,S=p.length;_<S;_++){const b=p[_];x.push(b.toJSON(t.data))}x.length>0&&(l[m]=x,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(t.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(t.data.boundingSphere=h.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone());const l=t.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const u=t.morphAttributes;for(const p in u){const x=[],_=u[p];for(let S=0,b=_.length;S<b;S++)x.push(_[S].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=t.morphTargetsRelative;const d=t.groups;for(let p=0,x=d.length;p<x;p++){const _=d[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=t.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dx=new mn,gr=new Sy,lc=new vh,Ux=new ce,cc=new ce,uc=new ce,fc=new ce,dd=new ce,dc=new ce,Lx=new ce,hc=new ce;class Li extends ti{constructor(t=new Ka,i=new bg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const h=this.morphTargetInfluences;if(u&&h){dc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const x=h[m],_=u[m];x!==0&&(dd.fromBufferAttribute(_,t),d?dc.addScaledVector(dd,x):dc.addScaledVector(dd.sub(i),x))}i.add(dc)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),lc.copy(r.boundingSphere),lc.applyMatrix4(u),gr.copy(t.ray).recast(t.near),!(lc.containsPoint(gr.origin)===!1&&(gr.intersectSphere(lc,Ux)===null||gr.origin.distanceToSquared(Ux)>(t.far-t.near)**2))&&(Dx.copy(u).invert(),gr.copy(t.ray).applyMatrix4(Dx),!(r.boundingBox!==null&&gr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,gr)))}_computeIntersections(t,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,x=u.attributes.uv1,_=u.attributes.normal,S=u.groups,b=u.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,C=S.length;A<C;A++){const y=S[A],v=d[y.materialIndex],O=Math.max(y.start,b.start),U=Math.min(h.count,Math.min(y.start+y.count,b.start+b.count));for(let F=O,k=U;F<k;F+=3){const N=h.getX(F),B=h.getX(F+1),J=h.getX(F+2);l=pc(this,v,t,r,p,x,_,N,B,J),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,b.start),C=Math.min(h.count,b.start+b.count);for(let y=A,v=C;y<v;y+=3){const O=h.getX(y),U=h.getX(y+1),F=h.getX(y+2);l=pc(this,d,t,r,p,x,_,O,U,F),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,C=S.length;A<C;A++){const y=S[A],v=d[y.materialIndex],O=Math.max(y.start,b.start),U=Math.min(m.count,Math.min(y.start+y.count,b.start+b.count));for(let F=O,k=U;F<k;F+=3){const N=F,B=F+1,J=F+2;l=pc(this,v,t,r,p,x,_,N,B,J),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,b.start),C=Math.min(m.count,b.start+b.count);for(let y=A,v=C;y<v;y+=3){const O=y,U=y+1,F=y+2;l=pc(this,d,t,r,p,x,_,O,U,F),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Dy(o,t,i,r,l,u,d,h){let m;if(t.side===Vn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,t.side===ja,h),m===null)return null;hc.copy(h),hc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(hc);return p<i.near||p>i.far?null:{distance:p,point:hc.clone(),object:o}}function pc(o,t,i,r,l,u,d,h,m,p){o.getVertexPosition(h,cc),o.getVertexPosition(m,uc),o.getVertexPosition(p,fc);const x=Dy(o,t,i,r,cc,uc,fc,Lx);if(x){const _=new ce;yi.getBarycoord(Lx,cc,uc,fc,_),l&&(x.uv=yi.getInterpolatedAttribute(l,h,m,p,_,new Ut)),u&&(x.uv1=yi.getInterpolatedAttribute(u,h,m,p,_,new Ut)),d&&(x.normal=yi.getInterpolatedAttribute(d,h,m,p,_,new ce),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new ce,materialIndex:0};yi.getNormal(cc,uc,fc,S.normal),x.face=S,x.barycoord=_}return x}class Ho extends Ka{constructor(t=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],x=[],_=[];let S=0,b=0;A("z","y","x",-1,-1,r,i,t,d,u,0),A("z","y","x",1,-1,r,i,-t,d,u,1),A("x","z","y",1,1,t,r,i,l,d,2),A("x","z","y",1,-1,t,r,-i,l,d,3),A("x","y","z",1,-1,t,i,r,l,u,4),A("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Tr(p,3)),this.setAttribute("normal",new Tr(x,3)),this.setAttribute("uv",new Tr(_,2));function A(C,y,v,O,U,F,k,N,B,J,w){const R=F/B,V=k/J,ee=F/2,re=k/2,he=N/2,fe=B+1,P=J+1;let j=0,Y=0;const ge=new ce;for(let _e=0;_e<P;_e++){const L=_e*V-re;for(let ae=0;ae<fe;ae++){const ye=ae*R-ee;ge[C]=ye*O,ge[y]=L*U,ge[v]=he,p.push(ge.x,ge.y,ge.z),ge[C]=0,ge[y]=0,ge[v]=N>0?1:-1,x.push(ge.x,ge.y,ge.z),_.push(ae/B),_.push(1-_e/J),j+=1}}for(let _e=0;_e<J;_e++)for(let L=0;L<B;L++){const ae=S+L+fe*_e,ye=S+L+fe*(_e+1),Ee=S+(L+1)+fe*(_e+1),Oe=S+(L+1)+fe*_e;m.push(ae,ye,Oe),m.push(ye,Ee,Oe),Y+=6}h.addGroup(b,Y,w),b+=Y,S+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ho(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ts(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(ot("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Nn(o){const t={};for(let i=0;i<o.length;i++){const r=Ts(o[i]);for(const l in r)t[l]=r[l]}return t}function Uy(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Tg(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Dt.workingColorSpace}const Ly={clone:Ts,merge:Nn};var Ny=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Oy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends Cc{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ny,this.fragmentShader=Oy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ts(t.uniforms),this.uniformsGroups=Uy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(t).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Ag extends ti{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mn,this.projectionMatrix=new mn,this.projectionMatrixInverse=new mn,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xa=new ce,Nx=new Ut,Ox=new Ut;class Si extends Ag{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=oh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Wf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return oh*2*Math.atan(Math.tan(Wf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Xa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Xa.x,Xa.y).multiplyScalar(-t/Xa.z),Xa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Xa.x,Xa.y).multiplyScalar(-t/Xa.z)}getViewSize(t,i){return this.getViewBounds(t,Nx,Ox),i.subVectors(Ox,Nx)}setViewOffset(t,i,r,l,u,d){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Wf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=t*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const xs=-90,gs=1;class zy extends ti{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Si(xs,gs,t,i);l.layers=this.layers,this.add(l);const u=new Si(xs,gs,t,i);u.layers=this.layers,this.add(u);const d=new Si(xs,gs,t,i);d.layers=this.layers,this.add(d);const h=new Si(xs,gs,t,i);h.layers=this.layers,this.add(h);const m=new Si(xs,gs,t,i);m.layers=this.layers,this.add(m);const p=new Si(xs,gs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(t===Di)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Tc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,x]=this.children,_=t.getRenderTarget(),S=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),A=t.xr.enabled;t.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,d),t.setRenderTarget(r,2,l),t.render(i,h),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=C,t.setRenderTarget(r,5,l),t.render(i,x),t.setRenderTarget(_,S,b),t.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Rg extends On{constructor(t=[],i=bs,r,l,u,d,h,m,p,x){super(t,i,r,l,u,d,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Py extends Za{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new Rg(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ho(5,5,5),u=new Mi({name:"CubemapFromEquirect",uniforms:Ts(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:ua});u.uniforms.tEquirect.value=i;const d=new Li(l,u),h=i.minFilter;return i.minFilter===Er&&(i.minFilter=di),new zy(1,10,this).update(t,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(t,i=!0,r=!0,l=!0){const u=t.getRenderTarget();for(let d=0;d<6;d++)t.setRenderTarget(this,d),t.clear(i,r,l);t.setRenderTarget(u)}}class mc extends ti{constructor(){super(),this.isGroup=!0,this.type="Group"}}const By={type:"move"};class hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ce,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ce),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ce,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ce),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){d=!0;for(const C of t.hand.values()){const y=i.getJointPose(C,r),v=this._getHandJoint(p,C);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const x=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=x.position.distanceTo(_.position),b=.02,A=.005;p.inputState.pinching&&S>b+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&S<=b-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(By)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new mc;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class zx extends ti{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ha,this.environmentIntensity=1,this.environmentRotation=new ha,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Fy extends On{constructor(t=null,i=1,r=1,l,u,d,h,m,p=ei,x=ei,_,S){super(null,d,h,m,p,x,l,u,_,S),this.isDataTexture=!0,this.image={data:t,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pd=new ce,Iy=new ce,Hy=new ft;class yr{constructor(t=new ce(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=pd.subVectors(r,i).cross(Iy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(pd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||Hy.getNormalMatrix(t),l=this.coplanarPoint(pd).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new vh,Gy=new Ut(.5,.5),xc=new ce;class Cg{constructor(t=new yr,i=new yr,r=new yr,l=new yr,u=new yr,d=new yr){this.planes=[t,i,r,l,u,d]}set(t,i,r,l,u,d){const h=this.planes;return h[0].copy(t),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=Di,r=!1){const l=this.planes,u=t.elements,d=u[0],h=u[1],m=u[2],p=u[3],x=u[4],_=u[5],S=u[6],b=u[7],A=u[8],C=u[9],y=u[10],v=u[11],O=u[12],U=u[13],F=u[14],k=u[15];if(l[0].setComponents(p-d,b-x,v-A,k-O).normalize(),l[1].setComponents(p+d,b+x,v+A,k+O).normalize(),l[2].setComponents(p+h,b+_,v+C,k+U).normalize(),l[3].setComponents(p-h,b-_,v-C,k-U).normalize(),r)l[4].setComponents(m,S,y,F).normalize(),l[5].setComponents(p-m,b-S,v-y,k-F).normalize();else if(l[4].setComponents(p-m,b-S,v-y,k-F).normalize(),i===Di)l[5].setComponents(p+m,b+S,v+y,k+F).normalize();else if(i===Tc)l[5].setComponents(m,S,y,F).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),_r.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),_r.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(t){_r.center.set(0,0,0);const i=Gy.distanceTo(t.center);return _r.radius=.7071067811865476+i,_r.applyMatrix4(t.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(xc.x=l.normal.x>0?t.max.x:t.min.x,xc.y=l.normal.y>0?t.max.y:t.min.y,xc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(xc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wg extends On{constructor(t,i,r=Ar,l,u,d,h=ei,m=ei,p,x=Oo,_=1){if(x!==Oo&&x!==zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:t,height:i,depth:_};super(S,l,u,d,h,m,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new _h(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Dg extends On{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class As extends Ka{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,x=m+1,_=t/h,S=i/m,b=[],A=[],C=[],y=[];for(let v=0;v<x;v++){const O=v*S-d;for(let U=0;U<p;U++){const F=U*_-u;A.push(F,-O,0),C.push(0,0,1),y.push(U/h),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let O=0;O<h;O++){const U=O+p*v,F=O+p*(v+1),k=O+1+p*(v+1),N=O+1+p*v;b.push(U,F,N),b.push(F,k,N)}this.setIndex(b),this.setAttribute("position",new Tr(A,3)),this.setAttribute("normal",new Tr(C,3)),this.setAttribute("uv",new Tr(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new As(t.width,t.height,t.widthSegments,t.heightSegments)}}class Vy extends Cc{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$S,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ky extends Cc{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Ug extends Ag{constructor(t=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,d=r+t,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Xy extends Si{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Wy{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();t=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=t}return t}}function Px(o,t,i,r){const l=qy(r);switch(i){case pg:return o*t;case xg:return o*t/l.components*l.byteLength;case ph:return o*t/l.components*l.byteLength;case mh:return o*t*2/l.components*l.byteLength;case xh:return o*t*2/l.components*l.byteLength;case mg:return o*t*3/l.components*l.byteLength;case bi:return o*t*4/l.components*l.byteLength;case gh:return o*t*4/l.components*l.byteLength;case vc:case Sc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case yc:case bc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Od:case Pd:return Math.max(o,16)*Math.max(t,8)/4;case Nd:case zd:return Math.max(o,8)*Math.max(t,8)/2;case Bd:case Fd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Id:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Hd:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Gd:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Vd:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case kd:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case Xd:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Wd:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case qd:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case Yd:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case jd:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case Zd:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Kd:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Qd:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Jd:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case $d:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case eh:case th:case nh:return Math.ceil(o/4)*Math.ceil(t/4)*16;case ih:case ah:return Math.ceil(o/4)*Math.ceil(t/4)*8;case rh:case sh:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function qy(o){switch(o){case da:case ug:return{byteLength:1,components:1};case Lo:case fg:case Rs:return{byteLength:2,components:1};case dh:case hh:return{byteLength:2,components:4};case Ar:case fh:case ca:return{byteLength:4,components:1};case dg:case hg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uh}}));typeof window<"u"&&(window.__THREE__?ot("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uh);function Lg(){let o=null,t=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Yy(o){const t=new WeakMap;function i(h,m){const p=h.array,x=h.usage,_=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,x),h.onUploadCallback();let b;if(p instanceof Float32Array)b=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)b=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?b=o.HALF_FLOAT:b=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=o.SHORT;else if(p instanceof Uint32Array)b=o.UNSIGNED_INT;else if(p instanceof Int32Array)b=o.INT;else if(p instanceof Int8Array)b=o.BYTE;else if(p instanceof Uint8Array)b=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,m,p){const x=m.array,_=m.updateRanges;if(o.bindBuffer(p,h),_.length===0)o.bufferSubData(p,0,x);else{_.sort((b,A)=>b.start-A.start);let S=0;for(let b=1;b<_.length;b++){const A=_[S],C=_[b];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++S,_[S]=C)}_.length=S+1;for(let b=0,A=_.length;b<A;b++){const C=_[b];o.bufferSubData(p,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),t.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=t.get(h);m&&(o.deleteBuffer(m.buffer),t.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=t.get(h);(!x||x.version<h.version)&&t.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=t.get(h);if(p===void 0)t.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var jy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zy=`#ifdef USE_ALPHAHASH
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
#endif`,Ky=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Qy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$y=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eb=`#ifdef USE_AOMAP
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
#endif`,tb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nb=`#ifdef USE_BATCHING
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
#endif`,ib=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ab=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ob=`#ifdef USE_IRIDESCENCE
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
#endif`,lb=`#ifdef USE_BUMPMAP
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
#endif`,cb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,ub=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,db=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,hb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mb=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,xb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gb=`#define PI 3.141592653589793
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
} // validated`,_b=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,vb=`vec3 transformedNormal = objectNormal;
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
#endif`,Sb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Mb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Eb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ab=`#ifdef USE_ENVMAP
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
#endif`,Rb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Cb=`#ifdef USE_ENVMAP
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
#endif`,wb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Db=`#ifdef USE_ENVMAP
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
#endif`,Ub=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Nb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ob=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zb=`#ifdef USE_GRADIENTMAP
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
}`,Pb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Fb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ib=`uniform bool receiveShadow;
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
#endif`,Hb=`#ifdef USE_ENVMAP
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
#endif`,Gb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wb=`PhysicalMaterial material;
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
#endif`,qb=`uniform sampler2D dfgLUT;
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
}`,Yb=`
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
#endif`,jb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$b=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,eM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iM=`#if defined( USE_POINTS_UV )
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
#endif`,aM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cM=`#ifdef USE_MORPHTARGETS
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
#endif`,uM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,hM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,xM=`#ifdef USE_NORMALMAP
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
#endif`,gM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_M=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,SM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,MM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,EM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,RM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,CM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,DM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,UM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,LM=`float getShadowMask() {
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
}`,NM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OM=`#ifdef USE_SKINNING
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
#endif`,zM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PM=`#ifdef USE_SKINNING
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
#endif`,BM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,HM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,GM=`#ifdef USE_TRANSMISSION
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
#endif`,VM=`#ifdef USE_TRANSMISSION
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
#endif`,kM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const YM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,jM=`uniform sampler2D t2D;
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
}`,ZM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,QM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$M=`#include <common>
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
}`,e3=`#if DEPTH_PACKING == 3200
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
}`,t3=`#define DISTANCE
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
}`,n3=`#define DISTANCE
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
}`,i3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,r3=`uniform float scale;
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
}`,s3=`uniform vec3 diffuse;
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
}`,o3=`#include <common>
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
}`,l3=`uniform vec3 diffuse;
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
}`,c3=`#define LAMBERT
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
}`,u3=`#define LAMBERT
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
}`,f3=`#define MATCAP
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
}`,d3=`#define MATCAP
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
}`,h3=`#define NORMAL
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
}`,p3=`#define NORMAL
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
}`,m3=`#define PHONG
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
}`,x3=`#define PHONG
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
}`,g3=`#define STANDARD
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
}`,_3=`#define STANDARD
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
}`,v3=`#define TOON
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
}`,S3=`#define TOON
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
}`,y3=`uniform float size;
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
}`,b3=`uniform vec3 diffuse;
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
}`,M3=`#include <common>
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
}`,E3=`uniform vec3 color;
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
}`,T3=`uniform float rotation;
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
}`,A3=`uniform vec3 diffuse;
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
}`,pt={alphahash_fragment:jy,alphahash_pars_fragment:Zy,alphamap_fragment:Ky,alphamap_pars_fragment:Qy,alphatest_fragment:Jy,alphatest_pars_fragment:$y,aomap_fragment:eb,aomap_pars_fragment:tb,batching_pars_vertex:nb,batching_vertex:ib,begin_vertex:ab,beginnormal_vertex:rb,bsdfs:sb,iridescence_fragment:ob,bumpmap_pars_fragment:lb,clipping_planes_fragment:cb,clipping_planes_pars_fragment:ub,clipping_planes_pars_vertex:fb,clipping_planes_vertex:db,color_fragment:hb,color_pars_fragment:pb,color_pars_vertex:mb,color_vertex:xb,common:gb,cube_uv_reflection_fragment:_b,defaultnormal_vertex:vb,displacementmap_pars_vertex:Sb,displacementmap_vertex:yb,emissivemap_fragment:bb,emissivemap_pars_fragment:Mb,colorspace_fragment:Eb,colorspace_pars_fragment:Tb,envmap_fragment:Ab,envmap_common_pars_fragment:Rb,envmap_pars_fragment:Cb,envmap_pars_vertex:wb,envmap_physical_pars_fragment:Hb,envmap_vertex:Db,fog_vertex:Ub,fog_pars_vertex:Lb,fog_fragment:Nb,fog_pars_fragment:Ob,gradientmap_pars_fragment:zb,lightmap_pars_fragment:Pb,lights_lambert_fragment:Bb,lights_lambert_pars_fragment:Fb,lights_pars_begin:Ib,lights_toon_fragment:Gb,lights_toon_pars_fragment:Vb,lights_phong_fragment:kb,lights_phong_pars_fragment:Xb,lights_physical_fragment:Wb,lights_physical_pars_fragment:qb,lights_fragment_begin:Yb,lights_fragment_maps:jb,lights_fragment_end:Zb,logdepthbuf_fragment:Kb,logdepthbuf_pars_fragment:Qb,logdepthbuf_pars_vertex:Jb,logdepthbuf_vertex:$b,map_fragment:eM,map_pars_fragment:tM,map_particle_fragment:nM,map_particle_pars_fragment:iM,metalnessmap_fragment:aM,metalnessmap_pars_fragment:rM,morphinstance_vertex:sM,morphcolor_vertex:oM,morphnormal_vertex:lM,morphtarget_pars_vertex:cM,morphtarget_vertex:uM,normal_fragment_begin:fM,normal_fragment_maps:dM,normal_pars_fragment:hM,normal_pars_vertex:pM,normal_vertex:mM,normalmap_pars_fragment:xM,clearcoat_normal_fragment_begin:gM,clearcoat_normal_fragment_maps:_M,clearcoat_pars_fragment:vM,iridescence_pars_fragment:SM,opaque_fragment:yM,packing:bM,premultiplied_alpha_fragment:MM,project_vertex:EM,dithering_fragment:TM,dithering_pars_fragment:AM,roughnessmap_fragment:RM,roughnessmap_pars_fragment:CM,shadowmap_pars_fragment:wM,shadowmap_pars_vertex:DM,shadowmap_vertex:UM,shadowmask_pars_fragment:LM,skinbase_vertex:NM,skinning_pars_vertex:OM,skinning_vertex:zM,skinnormal_vertex:PM,specularmap_fragment:BM,specularmap_pars_fragment:FM,tonemapping_fragment:IM,tonemapping_pars_fragment:HM,transmission_fragment:GM,transmission_pars_fragment:VM,uv_pars_fragment:kM,uv_pars_vertex:XM,uv_vertex:WM,worldpos_vertex:qM,background_vert:YM,background_frag:jM,backgroundCube_vert:ZM,backgroundCube_frag:KM,cube_vert:QM,cube_frag:JM,depth_vert:$M,depth_frag:e3,distanceRGBA_vert:t3,distanceRGBA_frag:n3,equirect_vert:i3,equirect_frag:a3,linedashed_vert:r3,linedashed_frag:s3,meshbasic_vert:o3,meshbasic_frag:l3,meshlambert_vert:c3,meshlambert_frag:u3,meshmatcap_vert:f3,meshmatcap_frag:d3,meshnormal_vert:h3,meshnormal_frag:p3,meshphong_vert:m3,meshphong_frag:x3,meshphysical_vert:g3,meshphysical_frag:_3,meshtoon_vert:v3,meshtoon_frag:S3,points_vert:y3,points_frag:b3,shadow_vert:M3,shadow_frag:E3,sprite_vert:T3,sprite_frag:A3},Le={common:{diffuse:{value:new Vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ft}},envmap:{envMap:{value:null},envMapRotation:{value:new ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ft},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0},uvTransform:{value:new ft}},sprite:{diffuse:{value:new Vt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ft},alphaMap:{value:null},alphaMapTransform:{value:new ft},alphaTest:{value:0}}},wi={basic:{uniforms:Nn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:pt.meshbasic_vert,fragmentShader:pt.meshbasic_frag},lambert:{uniforms:Nn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Vt(0)}}]),vertexShader:pt.meshlambert_vert,fragmentShader:pt.meshlambert_frag},phong:{uniforms:Nn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new Vt(0)},specular:{value:new Vt(1118481)},shininess:{value:30}}]),vertexShader:pt.meshphong_vert,fragmentShader:pt.meshphong_frag},standard:{uniforms:Nn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new Vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag},toon:{uniforms:Nn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new Vt(0)}}]),vertexShader:pt.meshtoon_vert,fragmentShader:pt.meshtoon_frag},matcap:{uniforms:Nn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:pt.meshmatcap_vert,fragmentShader:pt.meshmatcap_frag},points:{uniforms:Nn([Le.points,Le.fog]),vertexShader:pt.points_vert,fragmentShader:pt.points_frag},dashed:{uniforms:Nn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pt.linedashed_vert,fragmentShader:pt.linedashed_frag},depth:{uniforms:Nn([Le.common,Le.displacementmap]),vertexShader:pt.depth_vert,fragmentShader:pt.depth_frag},normal:{uniforms:Nn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:pt.meshnormal_vert,fragmentShader:pt.meshnormal_frag},sprite:{uniforms:Nn([Le.sprite,Le.fog]),vertexShader:pt.sprite_vert,fragmentShader:pt.sprite_frag},background:{uniforms:{uvTransform:{value:new ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pt.background_vert,fragmentShader:pt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ft}},vertexShader:pt.backgroundCube_vert,fragmentShader:pt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pt.cube_vert,fragmentShader:pt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pt.equirect_vert,fragmentShader:pt.equirect_frag},distanceRGBA:{uniforms:Nn([Le.common,Le.displacementmap,{referencePosition:{value:new ce},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pt.distanceRGBA_vert,fragmentShader:pt.distanceRGBA_frag},shadow:{uniforms:Nn([Le.lights,Le.fog,{color:{value:new Vt(0)},opacity:{value:1}}]),vertexShader:pt.shadow_vert,fragmentShader:pt.shadow_frag}};wi.physical={uniforms:Nn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ft},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ft},sheen:{value:0},sheenColor:{value:new Vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ft},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ft},attenuationDistance:{value:0},attenuationColor:{value:new Vt(0)},specularColor:{value:new Vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ft},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ft}}]),vertexShader:pt.meshphysical_vert,fragmentShader:pt.meshphysical_frag};const gc={r:0,b:0,g:0},vr=new ha,R3=new mn;function C3(o,t,i,r,l,u,d){const h=new Vt(0);let m=u===!0?0:1,p,x,_=null,S=0,b=null;function A(U){let F=U.isScene===!0?U.background:null;return F&&F.isTexture&&(F=(U.backgroundBlurriness>0?i:t).get(F)),F}function C(U){let F=!1;const k=A(U);k===null?v(h,m):k&&k.isColor&&(v(k,1),F=!0);const N=o.xr.getEnvironmentBlendMode();N==="additive"?r.buffers.color.setClear(0,0,0,1,d):N==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||F)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(U,F){const k=A(F);k&&(k.isCubeTexture||k.mapping===Rc)?(x===void 0&&(x=new Li(new Ho(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:Ts(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(N,B,J){this.matrixWorld.copyPosition(J.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),vr.copy(F.backgroundRotation),vr.x*=-1,vr.y*=-1,vr.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),x.material.uniforms.envMap.value=k,x.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(R3.makeRotationFromEuler(vr)),x.material.toneMapped=Dt.getTransfer(k.colorSpace)!==Gt,(_!==k||S!==k.version||b!==o.toneMapping)&&(x.material.needsUpdate=!0,_=k,S=k.version,b=o.toneMapping),x.layers.enableAll(),U.unshift(x,x.geometry,x.material,0,0,null)):k&&k.isTexture&&(p===void 0&&(p=new Li(new As(2,2),new Mi({name:"BackgroundMaterial",uniforms:Ts(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:ja,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=k,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.toneMapped=Dt.getTransfer(k.colorSpace)!==Gt,k.matrixAutoUpdate===!0&&k.updateMatrix(),p.material.uniforms.uvTransform.value.copy(k.matrix),(_!==k||S!==k.version||b!==o.toneMapping)&&(p.material.needsUpdate=!0,_=k,S=k.version,b=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function v(U,F){U.getRGB(gc,Tg(o)),r.buffers.color.setClear(gc.r,gc.g,gc.b,F,d)}function O(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,F=1){h.set(U),m=F,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,v(h,m)},render:C,addToRenderList:y,dispose:O}}function w3(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,d=!1;function h(R,V,ee,re,he){let fe=!1;const P=_(re,ee,V);u!==P&&(u=P,p(u.object)),fe=b(R,re,ee,he),fe&&A(R,re,ee,he),he!==null&&t.update(he,o.ELEMENT_ARRAY_BUFFER),(fe||d)&&(d=!1,F(R,V,ee,re),he!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(he).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function x(R){return o.deleteVertexArray(R)}function _(R,V,ee){const re=ee.wireframe===!0;let he=r[R.id];he===void 0&&(he={},r[R.id]=he);let fe=he[V.id];fe===void 0&&(fe={},he[V.id]=fe);let P=fe[re];return P===void 0&&(P=S(m()),fe[re]=P),P}function S(R){const V=[],ee=[],re=[];for(let he=0;he<i;he++)V[he]=0,ee[he]=0,re[he]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:ee,attributeDivisors:re,object:R,attributes:{},index:null}}function b(R,V,ee,re){const he=u.attributes,fe=V.attributes;let P=0;const j=ee.getAttributes();for(const Y in j)if(j[Y].location>=0){const _e=he[Y];let L=fe[Y];if(L===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(L=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(L=R.instanceColor)),_e===void 0||_e.attribute!==L||L&&_e.data!==L.data)return!0;P++}return u.attributesNum!==P||u.index!==re}function A(R,V,ee,re){const he={},fe=V.attributes;let P=0;const j=ee.getAttributes();for(const Y in j)if(j[Y].location>=0){let _e=fe[Y];_e===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(_e=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(_e=R.instanceColor));const L={};L.attribute=_e,_e&&_e.data&&(L.data=_e.data),he[Y]=L,P++}u.attributes=he,u.attributesNum=P,u.index=re}function C(){const R=u.newAttributes;for(let V=0,ee=R.length;V<ee;V++)R[V]=0}function y(R){v(R,0)}function v(R,V){const ee=u.newAttributes,re=u.enabledAttributes,he=u.attributeDivisors;ee[R]=1,re[R]===0&&(o.enableVertexAttribArray(R),re[R]=1),he[R]!==V&&(o.vertexAttribDivisor(R,V),he[R]=V)}function O(){const R=u.newAttributes,V=u.enabledAttributes;for(let ee=0,re=V.length;ee<re;ee++)V[ee]!==R[ee]&&(o.disableVertexAttribArray(ee),V[ee]=0)}function U(R,V,ee,re,he,fe,P){P===!0?o.vertexAttribIPointer(R,V,ee,he,fe):o.vertexAttribPointer(R,V,ee,re,he,fe)}function F(R,V,ee,re){C();const he=re.attributes,fe=ee.getAttributes(),P=V.defaultAttributeValues;for(const j in fe){const Y=fe[j];if(Y.location>=0){let ge=he[j];if(ge===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(ge=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(ge=R.instanceColor)),ge!==void 0){const _e=ge.normalized,L=ge.itemSize,ae=t.get(ge);if(ae===void 0)continue;const ye=ae.buffer,Ee=ae.type,Oe=ae.bytesPerElement,ne=Ee===o.INT||Ee===o.UNSIGNED_INT||ge.gpuType===fh;if(ge.isInterleavedBufferAttribute){const le=ge.data,Ce=le.stride,He=ge.offset;if(le.isInstancedInterleavedBuffer){for(let Xe=0;Xe<Y.locationSize;Xe++)v(Y.location+Xe,le.meshPerAttribute);R.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Xe=0;Xe<Y.locationSize;Xe++)y(Y.location+Xe);o.bindBuffer(o.ARRAY_BUFFER,ye);for(let Xe=0;Xe<Y.locationSize;Xe++)U(Y.location+Xe,L/Y.locationSize,Ee,_e,Ce*Oe,(He+L/Y.locationSize*Xe)*Oe,ne)}else{if(ge.isInstancedBufferAttribute){for(let le=0;le<Y.locationSize;le++)v(Y.location+le,ge.meshPerAttribute);R.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let le=0;le<Y.locationSize;le++)y(Y.location+le);o.bindBuffer(o.ARRAY_BUFFER,ye);for(let le=0;le<Y.locationSize;le++)U(Y.location+le,L/Y.locationSize,Ee,_e,L*Oe,L/Y.locationSize*le*Oe,ne)}}else if(P!==void 0){const _e=P[j];if(_e!==void 0)switch(_e.length){case 2:o.vertexAttrib2fv(Y.location,_e);break;case 3:o.vertexAttrib3fv(Y.location,_e);break;case 4:o.vertexAttrib4fv(Y.location,_e);break;default:o.vertexAttrib1fv(Y.location,_e)}}}}O()}function k(){J();for(const R in r){const V=r[R];for(const ee in V){const re=V[ee];for(const he in re)x(re[he].object),delete re[he];delete V[ee]}delete r[R]}}function N(R){if(r[R.id]===void 0)return;const V=r[R.id];for(const ee in V){const re=V[ee];for(const he in re)x(re[he].object),delete re[he];delete V[ee]}delete r[R.id]}function B(R){for(const V in r){const ee=r[V];if(ee[R.id]===void 0)continue;const re=ee[R.id];for(const he in re)x(re[he].object),delete re[he];delete ee[R.id]}}function J(){w(),d=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:J,resetDefaultState:w,dispose:k,releaseStatesOfGeometry:N,releaseStatesOfProgram:B,initAttributes:C,enableAttribute:y,disableUnusedAttributes:O}}function D3(o,t,i){let r;function l(p){r=p}function u(p,x){o.drawArrays(r,p,x),i.update(x,r,1)}function d(p,x,_){_!==0&&(o.drawArraysInstanced(r,p,x,_),i.update(x,r,_))}function h(p,x,_){if(_===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,x,0,_);let b=0;for(let A=0;A<_;A++)b+=x[A];i.update(b,r,1)}function m(p,x,_,S){if(_===0)return;const b=t.get("WEBGL_multi_draw");if(b===null)for(let A=0;A<p.length;A++)d(p[A],x[A],S[A]);else{b.multiDrawArraysInstancedWEBGL(r,p,0,x,0,S,0,_);let A=0;for(let C=0;C<_;C++)A+=x[C]*S[C];i.update(A,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function U3(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const B=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(B){return!(B!==bi&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const J=B===Rs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(B!==da&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==ca&&!J)}function m(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(ot("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),b=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),O=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),F=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),k=A>0,N=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:b,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:O,maxVaryings:U,maxFragmentUniforms:F,vertexTextures:k,maxSamples:N}}function L3(o){const t=this;let i=null,r=0,l=!1,u=!1;const d=new yr,h=new ft,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const b=_.length!==0||S||r!==0||l;return l=S,r=_.length,b},this.beginShadows=function(){u=!0,x(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,S){i=x(_,S,0)},this.setState=function(_,S,b){const A=_.clippingPlanes,C=_.clipIntersection,y=_.clipShadows,v=o.get(_);if(!l||A===null||A.length===0||u&&!y)u?x(null):p();else{const O=u?0:r,U=O*4;let F=v.clippingState||null;m.value=F,F=x(A,S,U,b);for(let k=0;k!==U;++k)F[k]=i[k];v.clippingState=F,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function x(_,S,b,A){const C=_!==null?_.length:0;let y=null;if(C!==0){if(y=m.value,A!==!0||y===null){const v=b+C*4,O=S.matrixWorldInverse;h.getNormalMatrix(O),(y===null||y.length<v)&&(y=new Float32Array(v));for(let U=0,F=b;U!==C;++U,F+=4)d.copy(_[U]).applyMatrix4(O,h),d.normal.toArray(y,F),y[F+3]=d.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,y}}function N3(o){let t=new WeakMap;function i(d,h){return h===wd?d.mapping=bs:h===Dd&&(d.mapping=Ms),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===wd||h===Dd)if(t.has(d)){const m=t.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new Py(m.height);return p.fromEquirectangularTexture(o,d),t.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=t.get(h);m!==void 0&&(t.delete(h),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const qa=4,Bx=[.125,.215,.35,.446,.526,.582],Mr=20,O3=256,Do=new Ug,Fx=new Vt;let md=null,xd=0,gd=0,_d=!1;const z3=new ce;class Ix{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=z3}=u;md=this._renderer.getRenderTarget(),xd=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),_d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(md,xd,gd),this._renderer.xr.enabled=_d,t.scissorTest=!1,_s(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===bs||t.mapping===Ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),md=this._renderer.getRenderTarget(),xd=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),_d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:di,minFilter:di,generateMipmaps:!1,type:Rs,format:bi,colorSpace:Es,depthBuffer:!1},l=Hx(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hx(t,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=P3(u)),this._blurMaterial=F3(u,t,i)}return l}_compileMaterial(t){const i=new Li(new Ka,t);this._renderer.compile(i,Do)}_sceneToCubeUV(t,i,r,l,u){const m=new Si(90,1,i,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,b=_.toneMapping;_.getClearColor(Fx),_.toneMapping=Ya,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Li(new Ho,new bg({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let v=!1;const O=t.background;O?O.isColor&&(y.color.copy(O),t.background=null,v=!0):(y.color.copy(Fx),v=!0);for(let U=0;U<6;U++){const F=U%3;F===0?(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+x[U],u.y,u.z)):F===1?(m.up.set(0,0,p[U]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+x[U],u.z)):(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+x[U]));const k=this._cubeSize;_s(l,F*k,U>2?k:0,k,k),_.setRenderTarget(l),v&&_.render(C,m),_.render(t,m)}_.toneMapping=b,_.autoClear=S,t.background=O}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===bs||t.mapping===Ms;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vx()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gx());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=t;const m=this._cubeSize;_s(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Do)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=r}_applyGGXFilter(t,i,r){const l=this._renderer,u=this._pingPongRenderTarget;if(this._ggxMaterial===null){const O=3*Math.max(this._cubeSize,16),U=4*this._cubeSize;this._ggxMaterial=B3(this._lodMax,O,U)}const d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,p=r/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-x*x),S=.05+p*.95,b=_*S,{_lodMax:A}=this,C=this._sizeLods[r],y=3*C*(r>A-qa?r-A+qa:0),v=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=b,m.mipInt.value=A-i,_s(u,y,v,3*C,2*C),l.setRenderTarget(u),l.render(h,Do),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=A-r,_s(t,y,v,3*C,2*C),l.setRenderTarget(t),l.render(h,Do)}_blur(t,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(t,d,i,r,l,"latitudinal",u),this._halfBlur(d,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&nn("blur direction must be either latitudinal or longitudinal!");const x=3,_=this._lodMeshes[l];_.material=p;const S=p.uniforms,b=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*b):2*Math.PI/(2*Mr-1),C=u/A,y=isFinite(u)?1+Math.floor(x*C):Mr;y>Mr&&ot(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Mr}`);const v=[];let O=0;for(let B=0;B<Mr;++B){const J=B/C,w=Math.exp(-J*J/2);v.push(w),B===0?O+=w:B<y&&(O+=2*w)}for(let B=0;B<v.length;B++)v[B]=v[B]/O;S.envMap.value=t.texture,S.samples.value=y,S.weights.value=v,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:U}=this;S.dTheta.value=A,S.mipInt.value=U-r;const F=this._sizeLods[l],k=3*F*(l>U-qa?l-U+qa:0),N=4*(this._cubeSize-F);_s(i,k,N,3*F,2*F),m.setRenderTarget(i),m.render(_,Do)}}function P3(o){const t=[],i=[],r=[];let l=o;const u=o-qa+1+Bx.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);t.push(h);let m=1/h;d>o-qa?m=Bx[d-o+qa-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),x=-p,_=1+p,S=[x,x,_,x,_,_,x,x,_,_,x,_],b=6,A=6,C=3,y=2,v=1,O=new Float32Array(C*A*b),U=new Float32Array(y*A*b),F=new Float32Array(v*A*b);for(let N=0;N<b;N++){const B=N%3*2/3-1,J=N>2?0:-1,w=[B,J,0,B+2/3,J,0,B+2/3,J+1,0,B,J,0,B+2/3,J+1,0,B,J+1,0];O.set(w,C*A*N),U.set(S,y*A*N);const R=[N,N,N,N,N,N];F.set(R,v*A*N)}const k=new Ka;k.setAttribute("position",new Ui(O,C)),k.setAttribute("uv",new Ui(U,y)),k.setAttribute("faceIndex",new Ui(F,v)),r.push(new Li(k,null)),l>qa&&l--}return{lodMeshes:r,sizeLods:t,sigmas:i}}function Hx(o,t,i){const r=new Za(o,t,i);return r.texture.mapping=Rc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function _s(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function B3(o,t,i){return new Mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:O3,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wc(),fragmentShader:`

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
		`,blending:ua,depthTest:!1,depthWrite:!1})}function F3(o,t,i){const r=new Float32Array(Mr),l=new ce(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:wc(),fragmentShader:`

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
		`,blending:ua,depthTest:!1,depthWrite:!1})}function Gx(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

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
		`,blending:ua,depthTest:!1,depthWrite:!1})}function Vx(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ua,depthTest:!1,depthWrite:!1})}function wc(){return`

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
	`}function I3(o){let t=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===wd||m===Dd,x=m===bs||m===Ms;if(p||x){let _=t.get(h);const S=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new Ix(o)),_=p?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),_.texture;if(_!==void 0)return _.texture;{const b=h.image;return p&&b&&b.height>0||x&&b&&l(b)?(i===null&&(i=new Ix(o)),_=p?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,t.set(h,_),h.addEventListener("dispose",u),_.texture):null}}}return h}function l(h){let m=0;const p=6;for(let x=0;x<p;x++)h[x]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function d(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function H3(o){const t={};function i(r){if(t[r]!==void 0)return t[r];const l=o.getExtension(r);return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Po("WebGLRenderer: "+r+" extension not supported."),l}}}function G3(o,t,i,r){const l={},u=new WeakMap;function d(_){const S=_.target;S.index!==null&&t.remove(S.index);for(const A in S.attributes)t.remove(S.attributes[A]);S.removeEventListener("dispose",d),delete l[S.id];const b=u.get(S);b&&(t.remove(b),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(_,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const b in S)t.update(S[b],o.ARRAY_BUFFER)}function p(_){const S=[],b=_.index,A=_.attributes.position;let C=0;if(b!==null){const O=b.array;C=b.version;for(let U=0,F=O.length;U<F;U+=3){const k=O[U+0],N=O[U+1],B=O[U+2];S.push(k,N,N,B,B,k)}}else if(A!==void 0){const O=A.array;C=A.version;for(let U=0,F=O.length/3-1;U<F;U+=3){const k=U+0,N=U+1,B=U+2;S.push(k,N,N,B,B,k)}}else return;const y=new(_g(S)?Eg:Mg)(S,1);y.version=C;const v=u.get(_);v&&t.remove(v),u.set(_,y)}function x(_){const S=u.get(_);if(S){const b=_.index;b!==null&&S.version<b.version&&p(_)}else p(_);return u.get(_)}return{get:h,update:m,getWireframeAttribute:x}}function V3(o,t,i){let r;function l(S){r=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function m(S,b){o.drawElements(r,b,u,S*d),i.update(b,r,1)}function p(S,b,A){A!==0&&(o.drawElementsInstanced(r,b,u,S*d,A),i.update(b,r,A))}function x(S,b,A){if(A===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,b,0,u,S,0,A);let y=0;for(let v=0;v<A;v++)y+=b[v];i.update(y,r,1)}function _(S,b,A,C){if(A===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<S.length;v++)p(S[v]/d,b[v],C[v]);else{y.multiDrawElementsInstancedWEBGL(r,b,0,u,S,0,C,0,A);let v=0;for(let O=0;O<A;O++)v+=b[O]*C[O];i.update(v,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=_}function k3(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:nn("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function X3(o,t,i){const r=new WeakMap,l=new an;function u(d,h,m){const p=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=x!==void 0?x.length:0;let S=r.get(h);if(S===void 0||S.count!==_){let R=function(){J.dispose(),r.delete(h),h.removeEventListener("dispose",R)};var b=R;S!==void 0&&S.texture.dispose();const A=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let F=0;A===!0&&(F=1),C===!0&&(F=2),y===!0&&(F=3);let k=h.attributes.position.count*F,N=1;k>t.maxTextureSize&&(N=Math.ceil(k/t.maxTextureSize),k=t.maxTextureSize);const B=new Float32Array(k*N*4*_),J=new vg(B,k,N,_);J.type=ca,J.needsUpdate=!0;const w=F*4;for(let V=0;V<_;V++){const ee=v[V],re=O[V],he=U[V],fe=k*N*4*V;for(let P=0;P<ee.count;P++){const j=P*w;A===!0&&(l.fromBufferAttribute(ee,P),B[fe+j+0]=l.x,B[fe+j+1]=l.y,B[fe+j+2]=l.z,B[fe+j+3]=0),C===!0&&(l.fromBufferAttribute(re,P),B[fe+j+4]=l.x,B[fe+j+5]=l.y,B[fe+j+6]=l.z,B[fe+j+7]=0),y===!0&&(l.fromBufferAttribute(he,P),B[fe+j+8]=l.x,B[fe+j+9]=l.y,B[fe+j+10]=l.z,B[fe+j+11]=he.itemSize===4?l.w:1)}}S={count:_,texture:J,size:new Ut(k,N)},r.set(h,S),h.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let A=0;for(let y=0;y<p.length;y++)A+=p[y];const C=h.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function W3(o,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,x=m.geometry,_=t.get(m,x);if(l.get(_)!==p&&(t.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const Ng=new On,kx=new wg(1,1),Og=new vg,zg=new _y,Pg=new Rg,Xx=[],Wx=[],qx=new Float32Array(16),Yx=new Float32Array(9),jx=new Float32Array(4);function ws(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=Xx[l];if(u===void 0&&(u=new Float32Array(l),Xx[l]=u),t!==0){r.toArray(u,0);for(let d=1,h=0;d!==t;++d)h+=i,o[d].toArray(u,h)}return u}function xn(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function gn(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Dc(o,t){let i=Wx[t];i===void 0&&(i=new Int32Array(t),Wx[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function q3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function Y3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;o.uniform2fv(this.addr,t),gn(i,t)}}function j3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(xn(i,t))return;o.uniform3fv(this.addr,t),gn(i,t)}}function Z3(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;o.uniform4fv(this.addr,t),gn(i,t)}}function K3(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(xn(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),gn(i,t)}else{if(xn(i,r))return;jx.set(r),o.uniformMatrix2fv(this.addr,!1,jx),gn(i,r)}}function Q3(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(xn(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),gn(i,t)}else{if(xn(i,r))return;Yx.set(r),o.uniformMatrix3fv(this.addr,!1,Yx),gn(i,r)}}function J3(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(xn(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),gn(i,t)}else{if(xn(i,r))return;qx.set(r),o.uniformMatrix4fv(this.addr,!1,qx),gn(i,r)}}function $3(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function e1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;o.uniform2iv(this.addr,t),gn(i,t)}}function t1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;o.uniform3iv(this.addr,t),gn(i,t)}}function n1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;o.uniform4iv(this.addr,t),gn(i,t)}}function i1(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function a1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(xn(i,t))return;o.uniform2uiv(this.addr,t),gn(i,t)}}function r1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(xn(i,t))return;o.uniform3uiv(this.addr,t),gn(i,t)}}function s1(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(xn(i,t))return;o.uniform4uiv(this.addr,t),gn(i,t)}}function o1(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(kx.compareFunction=gg,u=kx):u=Ng,i.setTexture2D(t||u,l)}function l1(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||zg,l)}function c1(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Pg,l)}function u1(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Og,l)}function f1(o){switch(o){case 5126:return q3;case 35664:return Y3;case 35665:return j3;case 35666:return Z3;case 35674:return K3;case 35675:return Q3;case 35676:return J3;case 5124:case 35670:return $3;case 35667:case 35671:return e1;case 35668:case 35672:return t1;case 35669:case 35673:return n1;case 5125:return i1;case 36294:return a1;case 36295:return r1;case 36296:return s1;case 35678:case 36198:case 36298:case 36306:case 35682:return o1;case 35679:case 36299:case 36307:return l1;case 35680:case 36300:case 36308:case 36293:return c1;case 36289:case 36303:case 36311:case 36292:return u1}}function d1(o,t){o.uniform1fv(this.addr,t)}function h1(o,t){const i=ws(t,this.size,2);o.uniform2fv(this.addr,i)}function p1(o,t){const i=ws(t,this.size,3);o.uniform3fv(this.addr,i)}function m1(o,t){const i=ws(t,this.size,4);o.uniform4fv(this.addr,i)}function x1(o,t){const i=ws(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function g1(o,t){const i=ws(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function _1(o,t){const i=ws(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function v1(o,t){o.uniform1iv(this.addr,t)}function S1(o,t){o.uniform2iv(this.addr,t)}function y1(o,t){o.uniform3iv(this.addr,t)}function b1(o,t){o.uniform4iv(this.addr,t)}function M1(o,t){o.uniform1uiv(this.addr,t)}function E1(o,t){o.uniform2uiv(this.addr,t)}function T1(o,t){o.uniform3uiv(this.addr,t)}function A1(o,t){o.uniform4uiv(this.addr,t)}function R1(o,t,i){const r=this.cache,l=t.length,u=Dc(i,l);xn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(t[d]||Ng,u[d])}function C1(o,t,i){const r=this.cache,l=t.length,u=Dc(i,l);xn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(t[d]||zg,u[d])}function w1(o,t,i){const r=this.cache,l=t.length,u=Dc(i,l);xn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(t[d]||Pg,u[d])}function D1(o,t,i){const r=this.cache,l=t.length,u=Dc(i,l);xn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(t[d]||Og,u[d])}function U1(o){switch(o){case 5126:return d1;case 35664:return h1;case 35665:return p1;case 35666:return m1;case 35674:return x1;case 35675:return g1;case 35676:return _1;case 5124:case 35670:return v1;case 35667:case 35671:return S1;case 35668:case 35672:return y1;case 35669:case 35673:return b1;case 5125:return M1;case 36294:return E1;case 36295:return T1;case 36296:return A1;case 35678:case 36198:case 36298:case 36306:case 35682:return R1;case 35679:case 36299:case 36307:return C1;case 35680:case 36300:case 36308:case 36293:return w1;case 36289:case 36303:case 36311:case 36292:return D1}}class L1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=f1(i.type)}}class N1{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=U1(i.type)}}class O1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(t,i[h.id],r)}}}const vd=/(\w+)(\])?(\[|\.)?/g;function Zx(o,t){o.seq.push(t),o.map[t.id]=t}function z1(o,t,i){const r=o.name,l=r.length;for(vd.lastIndex=0;;){const u=vd.exec(r),d=vd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){Zx(i,p===void 0?new L1(h,o,t):new N1(h,o,t));break}else{let _=i.map[h];_===void 0&&(_=new O1(h),Zx(i,_)),i=_}}}class Mc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),d=t.getUniformLocation(i,u.name);z1(u,d,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const d=t[l];d.id in i&&r.push(d)}return r}}function Kx(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const P1=37297;let B1=0;function F1(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===t?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const Qx=new ft;function I1(o){Dt._getMatrix(Qx,Dt.workingColorSpace,o);const t=`mat3( ${Qx.elements.map(i=>i.toFixed(4))} )`;switch(Dt.getTransfer(o)){case Ec:return[t,"LinearTransferOETF"];case Gt:return[t,"sRGBTransferOETF"];default:return ot("WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function Jx(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),u=(o.getShaderInfoLog(t)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+F1(o.getShaderSource(t),h)}else return u}function H1(o,t){const i=I1(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function G1(o,t){let i;switch(t){case WS:i="Linear";break;case qS:i="Reinhard";break;case YS:i="Cineon";break;case jS:i="ACESFilmic";break;case KS:i="AgX";break;case QS:i="Neutral";break;case ZS:i="Custom";break;default:ot("WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const _c=new ce;function V1(){Dt.getLuminanceCoefficients(_c);const o=_c.x.toFixed(4),t=_c.y.toFixed(4),i=_c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function X1(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function W1(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(t,d),locationSize:h}}return i}function Uo(o){return o!==""}function $x(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function eg(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const q1=/^[ \t]*#include +<([\w\d./]+)>/gm;function lh(o){return o.replace(q1,j1)}const Y1=new Map;function j1(o,t){let i=pt[t];if(i===void 0){const r=Y1.get(t);if(r!==void 0)i=pt[r],ot('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return lh(i)}const Z1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tg(o){return o.replace(Z1,K1)}function K1(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function ng(o){let t=`precision ${o.precision} float;
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
#define LOW_PRECISION`),t}function Q1(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===og?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===ES?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ra&&(t="SHADOWMAP_TYPE_VSM"),t}function J1(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case bs:case Ms:t="ENVMAP_TYPE_CUBE";break;case Rc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $1(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ms:t="ENVMAP_MODE_REFRACTION";break}return t}function eE(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case lg:t="ENVMAP_BLENDING_MULTIPLY";break;case kS:t="ENVMAP_BLENDING_MIX";break;case XS:t="ENVMAP_BLENDING_ADD";break}return t}function tE(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function nE(o,t,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=Q1(i),p=J1(i),x=$1(i),_=eE(i),S=tE(i),b=k1(i),A=X1(u),C=l.createProgram();let y,v,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Uo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Uo).join(`
`),v.length>0&&(v+=`
`)):(y=[ng(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),v=[ng(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Ya?"#define TONE_MAPPING":"",i.toneMapping!==Ya?pt.tonemapping_pars_fragment:"",i.toneMapping!==Ya?G1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pt.colorspace_pars_fragment,H1("linearToOutputTexel",i.outputColorSpace),V1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Uo).join(`
`)),d=lh(d),d=$x(d,i),d=eg(d,i),h=lh(h),h=$x(h,i),h=eg(h,i),d=tg(d),h=tg(h),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,y=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===xx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===xx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=O+y+d,F=O+v+h,k=Kx(l,l.VERTEX_SHADER,U),N=Kx(l,l.FRAGMENT_SHADER,F);l.attachShader(C,k),l.attachShader(C,N),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function B(V){if(o.debug.checkShaderErrors){const ee=l.getProgramInfoLog(C)||"",re=l.getShaderInfoLog(k)||"",he=l.getShaderInfoLog(N)||"",fe=ee.trim(),P=re.trim(),j=he.trim();let Y=!0,ge=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(Y=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,k,N);else{const _e=Jx(l,k,"vertex"),L=Jx(l,N,"fragment");nn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+fe+`
`+_e+`
`+L)}else fe!==""?ot("WebGLProgram: Program Info Log:",fe):(P===""||j==="")&&(ge=!1);ge&&(V.diagnostics={runnable:Y,programLog:fe,vertexShader:{log:P,prefix:y},fragmentShader:{log:j,prefix:v}})}l.deleteShader(k),l.deleteShader(N),J=new Mc(l,C),w=W1(l,C)}let J;this.getUniforms=function(){return J===void 0&&B(this),J};let w;this.getAttributes=function(){return w===void 0&&B(this),w};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,P1)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=B1++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=k,this.fragmentShader=N,this}let iE=0;class aE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(t);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new rE(t),i.set(t,r)),r}}class rE{constructor(t){this.id=iE++,this.code=t,this.usedTimes=0}}function sE(o,t,i,r,l,u,d){const h=new Sg,m=new aE,p=new Set,x=[],_=l.logarithmicDepthBuffer,S=l.vertexTextures;let b=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,R,V,ee,re){const he=ee.fog,fe=re.geometry,P=w.isMeshStandardMaterial?ee.environment:null,j=(w.isMeshStandardMaterial?i:t).get(w.envMap||P),Y=j&&j.mapping===Rc?j.image.height:null,ge=A[w.type];w.precision!==null&&(b=l.getMaxPrecision(w.precision),b!==w.precision&&ot("WebGLProgram.getParameters:",w.precision,"not supported, using",b,"instead."));const _e=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,L=_e!==void 0?_e.length:0;let ae=0;fe.morphAttributes.position!==void 0&&(ae=1),fe.morphAttributes.normal!==void 0&&(ae=2),fe.morphAttributes.color!==void 0&&(ae=3);let ye,Ee,Oe,ne;if(ge){const At=wi[ge];ye=At.vertexShader,Ee=At.fragmentShader}else ye=w.vertexShader,Ee=w.fragmentShader,m.update(w),Oe=m.getVertexShaderID(w),ne=m.getFragmentShaderID(w);const le=o.getRenderTarget(),Ce=o.state.buffers.depth.getReversed(),He=re.isInstancedMesh===!0,Xe=re.isBatchedMesh===!0,lt=!!w.map,$t=!!w.matcap,dt=!!j,Tt=!!w.aoMap,I=!!w.lightMap,ht=!!w.bumpMap,mt=!!w.normalMap,Ot=!!w.displacementMap,Ge=!!w.emissiveMap,kt=!!w.metalnessMap,je=!!w.roughnessMap,at=w.anisotropy>0,D=w.clearcoat>0,M=w.dispersion>0,K=w.iridescence>0,pe=w.sheen>0,ve=w.transmission>0,oe=at&&!!w.anisotropyMap,qe=D&&!!w.clearcoatMap,Ue=D&&!!w.clearcoatNormalMap,Qe=D&&!!w.clearcoatRoughnessMap,We=K&&!!w.iridescenceMap,Se=K&&!!w.iridescenceThicknessMap,Me=pe&&!!w.sheenColorMap,Ye=pe&&!!w.sheenRoughnessMap,Ve=!!w.specularMap,Ne=!!w.specularColorMap,nt=!!w.specularIntensityMap,H=ve&&!!w.transmissionMap,we=ve&&!!w.thicknessMap,Ae=!!w.gradientMap,Re=!!w.alphaMap,be=w.alphaTest>0,xe=!!w.alphaHash,Be=!!w.extensions;let it=Ya;w.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(it=o.toneMapping);const Bt={shaderID:ge,shaderType:w.type,shaderName:w.name,vertexShader:ye,fragmentShader:Ee,defines:w.defines,customVertexShaderID:Oe,customFragmentShaderID:ne,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:b,batching:Xe,batchingColor:Xe&&re._colorsTexture!==null,instancing:He,instancingColor:He&&re.instanceColor!==null,instancingMorph:He&&re.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:le===null?o.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:Es,alphaToCoverage:!!w.alphaToCoverage,map:lt,matcap:$t,envMap:dt,envMapMode:dt&&j.mapping,envMapCubeUVHeight:Y,aoMap:Tt,lightMap:I,bumpMap:ht,normalMap:mt,displacementMap:S&&Ot,emissiveMap:Ge,normalMapObjectSpace:mt&&w.normalMapType===ny,normalMapTangentSpace:mt&&w.normalMapType===ty,metalnessMap:kt,roughnessMap:je,anisotropy:at,anisotropyMap:oe,clearcoat:D,clearcoatMap:qe,clearcoatNormalMap:Ue,clearcoatRoughnessMap:Qe,dispersion:M,iridescence:K,iridescenceMap:We,iridescenceThicknessMap:Se,sheen:pe,sheenColorMap:Me,sheenRoughnessMap:Ye,specularMap:Ve,specularColorMap:Ne,specularIntensityMap:nt,transmission:ve,transmissionMap:H,thicknessMap:we,gradientMap:Ae,opaque:w.transparent===!1&&w.blending===vs&&w.alphaToCoverage===!1,alphaMap:Re,alphaTest:be,alphaHash:xe,combine:w.combine,mapUv:lt&&C(w.map.channel),aoMapUv:Tt&&C(w.aoMap.channel),lightMapUv:I&&C(w.lightMap.channel),bumpMapUv:ht&&C(w.bumpMap.channel),normalMapUv:mt&&C(w.normalMap.channel),displacementMapUv:Ot&&C(w.displacementMap.channel),emissiveMapUv:Ge&&C(w.emissiveMap.channel),metalnessMapUv:kt&&C(w.metalnessMap.channel),roughnessMapUv:je&&C(w.roughnessMap.channel),anisotropyMapUv:oe&&C(w.anisotropyMap.channel),clearcoatMapUv:qe&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:Ue&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qe&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&C(w.sheenRoughnessMap.channel),specularMapUv:Ve&&C(w.specularMap.channel),specularColorMapUv:Ne&&C(w.specularColorMap.channel),specularIntensityMapUv:nt&&C(w.specularIntensityMap.channel),transmissionMapUv:H&&C(w.transmissionMap.channel),thicknessMapUv:we&&C(w.thicknessMap.channel),alphaMapUv:Re&&C(w.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(mt||at),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:re.isPoints===!0&&!!fe.attributes.uv&&(lt||Re),fog:!!he,useFog:w.fog===!0,fogExp2:!!he&&he.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ce,skinning:re.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:ae,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:it,decodeVideoTexture:lt&&w.map.isVideoTexture===!0&&Dt.getTransfer(w.map.colorSpace)===Gt,decodeVideoTextureEmissive:Ge&&w.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(w.emissiveMap.colorSpace)===Gt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===oa,flipSided:w.side===Vn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Be&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Be&&w.extensions.multiDraw===!0||Xe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Bt.vertexUv1s=p.has(1),Bt.vertexUv2s=p.has(2),Bt.vertexUv3s=p.has(3),p.clear(),Bt}function v(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)R.push(V),R.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(O(R,w),U(R,w),R.push(o.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function O(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function U(w,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),R.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reversedDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),w.push(h.mask)}function F(w){const R=A[w.type];let V;if(R){const ee=wi[R];V=Ly.clone(ee.uniforms)}else V=w.uniforms;return V}function k(w,R){let V;for(let ee=0,re=x.length;ee<re;ee++){const he=x[ee];if(he.cacheKey===R){V=he,++V.usedTimes;break}}return V===void 0&&(V=new nE(o,R,w,u),x.push(V)),V}function N(w){if(--w.usedTimes===0){const R=x.indexOf(w);x[R]=x[x.length-1],x.pop(),w.destroy()}}function B(w){m.remove(w)}function J(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:F,acquireProgram:k,releaseProgram:N,releaseShaderCache:B,programs:x,dispose:J}}function oE(){let o=new WeakMap;function t(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function lE(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function ig(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function ag(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function d(_,S,b,A,C,y){let v=o[t];return v===void 0?(v={id:_.id,object:_,geometry:S,material:b,groupOrder:A,renderOrder:_.renderOrder,z:C,group:y},o[t]=v):(v.id=_.id,v.object=_,v.geometry=S,v.material=b,v.groupOrder=A,v.renderOrder=_.renderOrder,v.z=C,v.group=y),t++,v}function h(_,S,b,A,C,y){const v=d(_,S,b,A,C,y);b.transmission>0?r.push(v):b.transparent===!0?l.push(v):i.push(v)}function m(_,S,b,A,C,y){const v=d(_,S,b,A,C,y);b.transmission>0?r.unshift(v):b.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,S){i.length>1&&i.sort(_||lE),r.length>1&&r.sort(S||ig),l.length>1&&l.sort(S||ig)}function x(){for(let _=t,S=o.length;_<S;_++){const b=o[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:x,sort:p}}function cE(){let o=new WeakMap;function t(r,l){const u=o.get(r);let d;return u===void 0?(d=new ag,o.set(r,[d])):l>=u.length?(d=new ag,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:t,dispose:i}}function uE(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new ce,color:new Vt};break;case"SpotLight":i={position:new ce,direction:new ce,color:new Vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ce,color:new Vt,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ce,skyColor:new Vt,groundColor:new Vt};break;case"RectAreaLight":i={color:new Vt,position:new ce,halfWidth:new ce,halfHeight:new ce};break}return o[t.id]=i,i}}}function fE(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let dE=0;function hE(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function pE(o){const t=new uE,i=fE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ce);const l=new ce,u=new mn,d=new mn;function h(p){let x=0,_=0,S=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let b=0,A=0,C=0,y=0,v=0,O=0,U=0,F=0,k=0,N=0,B=0;p.sort(hE);for(let w=0,R=p.length;w<R;w++){const V=p[w],ee=V.color,re=V.intensity,he=V.distance,fe=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)x+=ee.r*re,_+=ee.g*re,S+=ee.b*re;else if(V.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(V.sh.coefficients[P],re);B++}else if(V.isDirectionalLight){const P=t.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const j=V.shadow,Y=i.get(V);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,r.directionalShadow[b]=Y,r.directionalShadowMap[b]=fe,r.directionalShadowMatrix[b]=V.shadow.matrix,O++}r.directional[b]=P,b++}else if(V.isSpotLight){const P=t.get(V);P.position.setFromMatrixPosition(V.matrixWorld),P.color.copy(ee).multiplyScalar(re),P.distance=he,P.coneCos=Math.cos(V.angle),P.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),P.decay=V.decay,r.spot[C]=P;const j=V.shadow;if(V.map&&(r.spotLightMap[k]=V.map,k++,j.updateMatrices(V),V.castShadow&&N++),r.spotLightMatrix[C]=j.matrix,V.castShadow){const Y=i.get(V);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,r.spotShadow[C]=Y,r.spotShadowMap[C]=fe,F++}C++}else if(V.isRectAreaLight){const P=t.get(V);P.color.copy(ee).multiplyScalar(re),P.halfWidth.set(V.width*.5,0,0),P.halfHeight.set(0,V.height*.5,0),r.rectArea[y]=P,y++}else if(V.isPointLight){const P=t.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),P.distance=V.distance,P.decay=V.decay,V.castShadow){const j=V.shadow,Y=i.get(V);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,Y.shadowCameraNear=j.camera.near,Y.shadowCameraFar=j.camera.far,r.pointShadow[A]=Y,r.pointShadowMap[A]=fe,r.pointShadowMatrix[A]=V.shadow.matrix,U++}r.point[A]=P,A++}else if(V.isHemisphereLight){const P=t.get(V);P.skyColor.copy(V.color).multiplyScalar(re),P.groundColor.copy(V.groundColor).multiplyScalar(re),r.hemi[v]=P,v++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=_,r.ambient[2]=S;const J=r.hash;(J.directionalLength!==b||J.pointLength!==A||J.spotLength!==C||J.rectAreaLength!==y||J.hemiLength!==v||J.numDirectionalShadows!==O||J.numPointShadows!==U||J.numSpotShadows!==F||J.numSpotMaps!==k||J.numLightProbes!==B)&&(r.directional.length=b,r.spot.length=C,r.rectArea.length=y,r.point.length=A,r.hemi.length=v,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=F,r.spotShadowMap.length=F,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=F+k-N,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=B,J.directionalLength=b,J.pointLength=A,J.spotLength=C,J.rectAreaLength=y,J.hemiLength=v,J.numDirectionalShadows=O,J.numPointShadows=U,J.numSpotShadows=F,J.numSpotMaps=k,J.numLightProbes=B,r.version=dE++)}function m(p,x){let _=0,S=0,b=0,A=0,C=0;const y=x.matrixWorldInverse;for(let v=0,O=p.length;v<O;v++){const U=p[v];if(U.isDirectionalLight){const F=r.directional[_];F.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(y),_++}else if(U.isSpotLight){const F=r.spot[b];F.position.setFromMatrixPosition(U.matrixWorld),F.position.applyMatrix4(y),F.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(y),b++}else if(U.isRectAreaLight){const F=r.rectArea[A];F.position.setFromMatrixPosition(U.matrixWorld),F.position.applyMatrix4(y),d.identity(),u.copy(U.matrixWorld),u.premultiply(y),d.extractRotation(u),F.halfWidth.set(U.width*.5,0,0),F.halfHeight.set(0,U.height*.5,0),F.halfWidth.applyMatrix4(d),F.halfHeight.applyMatrix4(d),A++}else if(U.isPointLight){const F=r.point[S];F.position.setFromMatrixPosition(U.matrixWorld),F.position.applyMatrix4(y),S++}else if(U.isHemisphereLight){const F=r.hemi[C];F.direction.setFromMatrixPosition(U.matrixWorld),F.direction.transformDirection(y),C++}}}return{setup:h,setupView:m,state:r}}function rg(o){const t=new pE(o),i=[],r=[];function l(x){p.camera=x,i.length=0,r.length=0}function u(x){i.push(x)}function d(x){r.push(x)}function h(){t.setup(i)}function m(x){t.setupView(i,x)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function mE(o){let t=new WeakMap;function i(l,u=0){const d=t.get(l);let h;return d===void 0?(h=new rg(o),t.set(l,[h])):u>=d.length?(h=new rg(o),d.push(h)):h=d[u],h}function r(){t=new WeakMap}return{get:i,dispose:r}}const xE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gE=`uniform sampler2D shadow_pass;
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
}`;function _E(o,t,i){let r=new Cg;const l=new Ut,u=new Ut,d=new an,h=new Vy({depthPacking:ey}),m=new ky,p={},x=i.maxTextureSize,_={[ja]:Vn,[Vn]:ja,[oa]:oa},S=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:xE,fragmentShader:gE}),b=S.clone();b.defines.HORIZONTAL_PASS=1;const A=new Ka;A.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Li(A,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=og;let v=this.type;this.render=function(N,B,J){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;const w=o.getRenderTarget(),R=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),ee=o.state;ee.setBlending(ua),ee.buffers.depth.getReversed()===!0?ee.buffers.color.setClear(0,0,0,0):ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const re=v!==ra&&this.type===ra,he=v===ra&&this.type!==ra;for(let fe=0,P=N.length;fe<P;fe++){const j=N[fe],Y=j.shadow;if(Y===void 0){ot("WebGLShadowMap:",j,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const ge=Y.getFrameExtents();if(l.multiply(ge),u.copy(Y.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(u.x=Math.floor(x/ge.x),l.x=u.x*ge.x,Y.mapSize.x=u.x),l.y>x&&(u.y=Math.floor(x/ge.y),l.y=u.y*ge.y,Y.mapSize.y=u.y)),Y.map===null||re===!0||he===!0){const L=this.type!==ra?{minFilter:ei,magFilter:ei}:{};Y.map!==null&&Y.map.dispose(),Y.map=new Za(l.x,l.y,L),Y.map.texture.name=j.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const _e=Y.getViewportCount();for(let L=0;L<_e;L++){const ae=Y.getViewport(L);d.set(u.x*ae.x,u.y*ae.y,u.x*ae.z,u.y*ae.w),ee.viewport(d),Y.updateMatrices(j,L),r=Y.getFrustum(),F(B,J,Y.camera,j,this.type)}Y.isPointLightShadow!==!0&&this.type===ra&&O(Y,J),Y.needsUpdate=!1}v=this.type,y.needsUpdate=!1,o.setRenderTarget(w,R,V)};function O(N,B){const J=t.update(C);S.defines.VSM_SAMPLES!==N.blurSamples&&(S.defines.VSM_SAMPLES=N.blurSamples,b.defines.VSM_SAMPLES=N.blurSamples,S.needsUpdate=!0,b.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Za(l.x,l.y)),S.uniforms.shadow_pass.value=N.map.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(B,null,J,S,C,null),b.uniforms.shadow_pass.value=N.mapPass.texture,b.uniforms.resolution.value=N.mapSize,b.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(B,null,J,b,C,null)}function U(N,B,J,w){let R=null;const V=J.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(V!==void 0)R=V;else if(R=J.isPointLight===!0?m:h,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const ee=R.uuid,re=B.uuid;let he=p[ee];he===void 0&&(he={},p[ee]=he);let fe=he[re];fe===void 0&&(fe=R.clone(),he[re]=fe,B.addEventListener("dispose",k)),R=fe}if(R.visible=B.visible,R.wireframe=B.wireframe,w===ra?R.side=B.shadowSide!==null?B.shadowSide:B.side:R.side=B.shadowSide!==null?B.shadowSide:_[B.side],R.alphaMap=B.alphaMap,R.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,R.map=B.map,R.clipShadows=B.clipShadows,R.clippingPlanes=B.clippingPlanes,R.clipIntersection=B.clipIntersection,R.displacementMap=B.displacementMap,R.displacementScale=B.displacementScale,R.displacementBias=B.displacementBias,R.wireframeLinewidth=B.wireframeLinewidth,R.linewidth=B.linewidth,J.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ee=o.properties.get(R);ee.light=J}return R}function F(N,B,J,w,R){if(N.visible===!1)return;if(N.layers.test(B.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&R===ra)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,N.matrixWorld);const re=t.update(N),he=N.material;if(Array.isArray(he)){const fe=re.groups;for(let P=0,j=fe.length;P<j;P++){const Y=fe[P],ge=he[Y.materialIndex];if(ge&&ge.visible){const _e=U(N,ge,w,R);N.onBeforeShadow(o,N,B,J,re,_e,Y),o.renderBufferDirect(J,null,re,_e,N,Y),N.onAfterShadow(o,N,B,J,re,_e,Y)}}}else if(he.visible){const fe=U(N,he,w,R);N.onBeforeShadow(o,N,B,J,re,fe,null),o.renderBufferDirect(J,null,re,fe,N,null),N.onAfterShadow(o,N,B,J,re,fe,null)}}const ee=N.children;for(let re=0,he=ee.length;re<he;re++)F(ee[re],B,J,w,R)}function k(N){N.target.removeEventListener("dispose",k);for(const J in p){const w=p[J],R=N.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const vE={[bd]:Md,[Ed]:Rd,[Td]:Cd,[ys]:Ad,[Md]:bd,[Rd]:Ed,[Cd]:Td,[Ad]:ys};function SE(o,t){function i(){let H=!1;const we=new an;let Ae=null;const Re=new an(0,0,0,0);return{setMask:function(be){Ae!==be&&!H&&(o.colorMask(be,be,be,be),Ae=be)},setLocked:function(be){H=be},setClear:function(be,xe,Be,it,Bt){Bt===!0&&(be*=it,xe*=it,Be*=it),we.set(be,xe,Be,it),Re.equals(we)===!1&&(o.clearColor(be,xe,Be,it),Re.copy(we))},reset:function(){H=!1,Ae=null,Re.set(-1,0,0,0)}}}function r(){let H=!1,we=!1,Ae=null,Re=null,be=null;return{setReversed:function(xe){if(we!==xe){const Be=t.get("EXT_clip_control");xe?Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.ZERO_TO_ONE_EXT):Be.clipControlEXT(Be.LOWER_LEFT_EXT,Be.NEGATIVE_ONE_TO_ONE_EXT),we=xe;const it=be;be=null,this.setClear(it)}},getReversed:function(){return we},setTest:function(xe){xe?le(o.DEPTH_TEST):Ce(o.DEPTH_TEST)},setMask:function(xe){Ae!==xe&&!H&&(o.depthMask(xe),Ae=xe)},setFunc:function(xe){if(we&&(xe=vE[xe]),Re!==xe){switch(xe){case bd:o.depthFunc(o.NEVER);break;case Md:o.depthFunc(o.ALWAYS);break;case Ed:o.depthFunc(o.LESS);break;case ys:o.depthFunc(o.LEQUAL);break;case Td:o.depthFunc(o.EQUAL);break;case Ad:o.depthFunc(o.GEQUAL);break;case Rd:o.depthFunc(o.GREATER);break;case Cd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Re=xe}},setLocked:function(xe){H=xe},setClear:function(xe){be!==xe&&(we&&(xe=1-xe),o.clearDepth(xe),be=xe)},reset:function(){H=!1,Ae=null,Re=null,be=null,we=!1}}}function l(){let H=!1,we=null,Ae=null,Re=null,be=null,xe=null,Be=null,it=null,Bt=null;return{setTest:function(At){H||(At?le(o.STENCIL_TEST):Ce(o.STENCIL_TEST))},setMask:function(At){we!==At&&!H&&(o.stencilMask(At),we=At)},setFunc:function(At,Cn,kn){(Ae!==At||Re!==Cn||be!==kn)&&(o.stencilFunc(At,Cn,kn),Ae=At,Re=Cn,be=kn)},setOp:function(At,Cn,kn){(xe!==At||Be!==Cn||it!==kn)&&(o.stencilOp(At,Cn,kn),xe=At,Be=Cn,it=kn)},setLocked:function(At){H=At},setClear:function(At){Bt!==At&&(o.clearStencil(At),Bt=At)},reset:function(){H=!1,we=null,Ae=null,Re=null,be=null,xe=null,Be=null,it=null,Bt=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let x={},_={},S=new WeakMap,b=[],A=null,C=!1,y=null,v=null,O=null,U=null,F=null,k=null,N=null,B=new Vt(0,0,0),J=0,w=!1,R=null,V=null,ee=null,re=null,he=null;const fe=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,j=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),P=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),P=j>=2);let ge=null,_e={};const L=o.getParameter(o.SCISSOR_BOX),ae=o.getParameter(o.VIEWPORT),ye=new an().fromArray(L),Ee=new an().fromArray(ae);function Oe(H,we,Ae,Re){const be=new Uint8Array(4),xe=o.createTexture();o.bindTexture(H,xe),o.texParameteri(H,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(H,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Be=0;Be<Ae;Be++)H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY?o.texImage3D(we,0,o.RGBA,1,1,Re,0,o.RGBA,o.UNSIGNED_BYTE,be):o.texImage2D(we+Be,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,be);return xe}const ne={};ne[o.TEXTURE_2D]=Oe(o.TEXTURE_2D,o.TEXTURE_2D,1),ne[o.TEXTURE_CUBE_MAP]=Oe(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[o.TEXTURE_2D_ARRAY]=Oe(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ne[o.TEXTURE_3D]=Oe(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),le(o.DEPTH_TEST),d.setFunc(ys),ht(!1),mt(ux),le(o.CULL_FACE),Tt(ua);function le(H){x[H]!==!0&&(o.enable(H),x[H]=!0)}function Ce(H){x[H]!==!1&&(o.disable(H),x[H]=!1)}function He(H,we){return _[H]!==we?(o.bindFramebuffer(H,we),_[H]=we,H===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=we),H===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=we),!0):!1}function Xe(H,we){let Ae=b,Re=!1;if(H){Ae=S.get(we),Ae===void 0&&(Ae=[],S.set(we,Ae));const be=H.textures;if(Ae.length!==be.length||Ae[0]!==o.COLOR_ATTACHMENT0){for(let xe=0,Be=be.length;xe<Be;xe++)Ae[xe]=o.COLOR_ATTACHMENT0+xe;Ae.length=be.length,Re=!0}}else Ae[0]!==o.BACK&&(Ae[0]=o.BACK,Re=!0);Re&&o.drawBuffers(Ae)}function lt(H){return A!==H?(o.useProgram(H),A=H,!0):!1}const $t={[br]:o.FUNC_ADD,[AS]:o.FUNC_SUBTRACT,[RS]:o.FUNC_REVERSE_SUBTRACT};$t[CS]=o.MIN,$t[wS]=o.MAX;const dt={[DS]:o.ZERO,[US]:o.ONE,[LS]:o.SRC_COLOR,[Sd]:o.SRC_ALPHA,[FS]:o.SRC_ALPHA_SATURATE,[PS]:o.DST_COLOR,[OS]:o.DST_ALPHA,[NS]:o.ONE_MINUS_SRC_COLOR,[yd]:o.ONE_MINUS_SRC_ALPHA,[BS]:o.ONE_MINUS_DST_COLOR,[zS]:o.ONE_MINUS_DST_ALPHA,[IS]:o.CONSTANT_COLOR,[HS]:o.ONE_MINUS_CONSTANT_COLOR,[GS]:o.CONSTANT_ALPHA,[VS]:o.ONE_MINUS_CONSTANT_ALPHA};function Tt(H,we,Ae,Re,be,xe,Be,it,Bt,At){if(H===ua){C===!0&&(Ce(o.BLEND),C=!1);return}if(C===!1&&(le(o.BLEND),C=!0),H!==TS){if(H!==y||At!==w){if((v!==br||F!==br)&&(o.blendEquation(o.FUNC_ADD),v=br,F=br),At)switch(H){case vs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case fx:o.blendFunc(o.ONE,o.ONE);break;case dx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case hx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:nn("WebGLState: Invalid blending: ",H);break}else switch(H){case vs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case fx:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case dx:nn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hx:nn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nn("WebGLState: Invalid blending: ",H);break}O=null,U=null,k=null,N=null,B.set(0,0,0),J=0,y=H,w=At}return}be=be||we,xe=xe||Ae,Be=Be||Re,(we!==v||be!==F)&&(o.blendEquationSeparate($t[we],$t[be]),v=we,F=be),(Ae!==O||Re!==U||xe!==k||Be!==N)&&(o.blendFuncSeparate(dt[Ae],dt[Re],dt[xe],dt[Be]),O=Ae,U=Re,k=xe,N=Be),(it.equals(B)===!1||Bt!==J)&&(o.blendColor(it.r,it.g,it.b,Bt),B.copy(it),J=Bt),y=H,w=!1}function I(H,we){H.side===oa?Ce(o.CULL_FACE):le(o.CULL_FACE);let Ae=H.side===Vn;we&&(Ae=!Ae),ht(Ae),H.blending===vs&&H.transparent===!1?Tt(ua):Tt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),d.setFunc(H.depthFunc),d.setTest(H.depthTest),d.setMask(H.depthWrite),u.setMask(H.colorWrite);const Re=H.stencilWrite;h.setTest(Re),Re&&(h.setMask(H.stencilWriteMask),h.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),h.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ge(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?le(o.SAMPLE_ALPHA_TO_COVERAGE):Ce(o.SAMPLE_ALPHA_TO_COVERAGE)}function ht(H){R!==H&&(H?o.frontFace(o.CW):o.frontFace(o.CCW),R=H)}function mt(H){H!==bS?(le(o.CULL_FACE),H!==V&&(H===ux?o.cullFace(o.BACK):H===MS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ce(o.CULL_FACE),V=H}function Ot(H){H!==ee&&(P&&o.lineWidth(H),ee=H)}function Ge(H,we,Ae){H?(le(o.POLYGON_OFFSET_FILL),(re!==we||he!==Ae)&&(o.polygonOffset(we,Ae),re=we,he=Ae)):Ce(o.POLYGON_OFFSET_FILL)}function kt(H){H?le(o.SCISSOR_TEST):Ce(o.SCISSOR_TEST)}function je(H){H===void 0&&(H=o.TEXTURE0+fe-1),ge!==H&&(o.activeTexture(H),ge=H)}function at(H,we,Ae){Ae===void 0&&(ge===null?Ae=o.TEXTURE0+fe-1:Ae=ge);let Re=_e[Ae];Re===void 0&&(Re={type:void 0,texture:void 0},_e[Ae]=Re),(Re.type!==H||Re.texture!==we)&&(ge!==Ae&&(o.activeTexture(Ae),ge=Ae),o.bindTexture(H,we||ne[H]),Re.type=H,Re.texture=we)}function D(){const H=_e[ge];H!==void 0&&H.type!==void 0&&(o.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function M(){try{o.compressedTexImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function K(){try{o.compressedTexImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function pe(){try{o.texSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function ve(){try{o.texSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function oe(){try{o.compressedTexSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function qe(){try{o.compressedTexSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Ue(){try{o.texStorage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Qe(){try{o.texStorage3D(...arguments)}catch(H){H("WebGLState:",H)}}function We(){try{o.texImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Se(){try{o.texImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Me(H){ye.equals(H)===!1&&(o.scissor(H.x,H.y,H.z,H.w),ye.copy(H))}function Ye(H){Ee.equals(H)===!1&&(o.viewport(H.x,H.y,H.z,H.w),Ee.copy(H))}function Ve(H,we){let Ae=p.get(we);Ae===void 0&&(Ae=new WeakMap,p.set(we,Ae));let Re=Ae.get(H);Re===void 0&&(Re=o.getUniformBlockIndex(we,H.name),Ae.set(H,Re))}function Ne(H,we){const Re=p.get(we).get(H);m.get(we)!==Re&&(o.uniformBlockBinding(we,Re,H.__bindingPointIndex),m.set(we,Re))}function nt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},ge=null,_e={},_={},S=new WeakMap,b=[],A=null,C=!1,y=null,v=null,O=null,U=null,F=null,k=null,N=null,B=new Vt(0,0,0),J=0,w=!1,R=null,V=null,ee=null,re=null,he=null,ye.set(0,0,o.canvas.width,o.canvas.height),Ee.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:le,disable:Ce,bindFramebuffer:He,drawBuffers:Xe,useProgram:lt,setBlending:Tt,setMaterial:I,setFlipSided:ht,setCullFace:mt,setLineWidth:Ot,setPolygonOffset:Ge,setScissorTest:kt,activeTexture:je,bindTexture:at,unbindTexture:D,compressedTexImage2D:M,compressedTexImage3D:K,texImage2D:We,texImage3D:Se,updateUBOMapping:Ve,uniformBlockBinding:Ne,texStorage2D:Ue,texStorage3D:Qe,texSubImage2D:pe,texSubImage3D:ve,compressedTexSubImage2D:oe,compressedTexSubImage3D:qe,scissor:Me,viewport:Ye,reset:nt}}function yE(o,t,i,r,l,u,d){const h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ut,x=new WeakMap;let _;const S=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(D,M){return b?new OffscreenCanvas(D,M):Ac("canvas")}function C(D,M,K){let pe=1;const ve=at(D);if((ve.width>K||ve.height>K)&&(pe=K/Math.max(ve.width,ve.height)),pe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const oe=Math.floor(pe*ve.width),qe=Math.floor(pe*ve.height);_===void 0&&(_=A(oe,qe));const Ue=M?A(oe,qe):_;return Ue.width=oe,Ue.height=qe,Ue.getContext("2d").drawImage(D,0,0,oe,qe),ot("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+oe+"x"+qe+")."),Ue}else return"data"in D&&ot("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),D;return D}function y(D){return D.generateMipmaps}function v(D){o.generateMipmap(D)}function O(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(D,M,K,pe,ve=!1){if(D!==null){if(o[D]!==void 0)return o[D];ot("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let oe=M;if(M===o.RED&&(K===o.FLOAT&&(oe=o.R32F),K===o.HALF_FLOAT&&(oe=o.R16F),K===o.UNSIGNED_BYTE&&(oe=o.R8)),M===o.RED_INTEGER&&(K===o.UNSIGNED_BYTE&&(oe=o.R8UI),K===o.UNSIGNED_SHORT&&(oe=o.R16UI),K===o.UNSIGNED_INT&&(oe=o.R32UI),K===o.BYTE&&(oe=o.R8I),K===o.SHORT&&(oe=o.R16I),K===o.INT&&(oe=o.R32I)),M===o.RG&&(K===o.FLOAT&&(oe=o.RG32F),K===o.HALF_FLOAT&&(oe=o.RG16F),K===o.UNSIGNED_BYTE&&(oe=o.RG8)),M===o.RG_INTEGER&&(K===o.UNSIGNED_BYTE&&(oe=o.RG8UI),K===o.UNSIGNED_SHORT&&(oe=o.RG16UI),K===o.UNSIGNED_INT&&(oe=o.RG32UI),K===o.BYTE&&(oe=o.RG8I),K===o.SHORT&&(oe=o.RG16I),K===o.INT&&(oe=o.RG32I)),M===o.RGB_INTEGER&&(K===o.UNSIGNED_BYTE&&(oe=o.RGB8UI),K===o.UNSIGNED_SHORT&&(oe=o.RGB16UI),K===o.UNSIGNED_INT&&(oe=o.RGB32UI),K===o.BYTE&&(oe=o.RGB8I),K===o.SHORT&&(oe=o.RGB16I),K===o.INT&&(oe=o.RGB32I)),M===o.RGBA_INTEGER&&(K===o.UNSIGNED_BYTE&&(oe=o.RGBA8UI),K===o.UNSIGNED_SHORT&&(oe=o.RGBA16UI),K===o.UNSIGNED_INT&&(oe=o.RGBA32UI),K===o.BYTE&&(oe=o.RGBA8I),K===o.SHORT&&(oe=o.RGBA16I),K===o.INT&&(oe=o.RGBA32I)),M===o.RGB&&(K===o.UNSIGNED_INT_5_9_9_9_REV&&(oe=o.RGB9_E5),K===o.UNSIGNED_INT_10F_11F_11F_REV&&(oe=o.R11F_G11F_B10F)),M===o.RGBA){const qe=ve?Ec:Dt.getTransfer(pe);K===o.FLOAT&&(oe=o.RGBA32F),K===o.HALF_FLOAT&&(oe=o.RGBA16F),K===o.UNSIGNED_BYTE&&(oe=qe===Gt?o.SRGB8_ALPHA8:o.RGBA8),K===o.UNSIGNED_SHORT_4_4_4_4&&(oe=o.RGBA4),K===o.UNSIGNED_SHORT_5_5_5_1&&(oe=o.RGB5_A1)}return(oe===o.R16F||oe===o.R32F||oe===o.RG16F||oe===o.RG32F||oe===o.RGBA16F||oe===o.RGBA32F)&&t.get("EXT_color_buffer_float"),oe}function F(D,M){let K;return D?M===null||M===Ar||M===No?K=o.DEPTH24_STENCIL8:M===ca?K=o.DEPTH32F_STENCIL8:M===Lo&&(K=o.DEPTH24_STENCIL8,ot("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ar||M===No?K=o.DEPTH_COMPONENT24:M===ca?K=o.DEPTH_COMPONENT32F:M===Lo&&(K=o.DEPTH_COMPONENT16),K}function k(D,M){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==ei&&D.minFilter!==di?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function N(D){const M=D.target;M.removeEventListener("dispose",N),J(M),M.isVideoTexture&&x.delete(M)}function B(D){const M=D.target;M.removeEventListener("dispose",B),R(M)}function J(D){const M=r.get(D);if(M.__webglInit===void 0)return;const K=D.source,pe=S.get(K);if(pe){const ve=pe[M.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&w(D),Object.keys(pe).length===0&&S.delete(K)}r.remove(D)}function w(D){const M=r.get(D);o.deleteTexture(M.__webglTexture);const K=D.source,pe=S.get(K);delete pe[M.__cacheKey],d.memory.textures--}function R(D){const M=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(M.__webglFramebuffer[pe]))for(let ve=0;ve<M.__webglFramebuffer[pe].length;ve++)o.deleteFramebuffer(M.__webglFramebuffer[pe][ve]);else o.deleteFramebuffer(M.__webglFramebuffer[pe]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[pe])}else{if(Array.isArray(M.__webglFramebuffer))for(let pe=0;pe<M.__webglFramebuffer.length;pe++)o.deleteFramebuffer(M.__webglFramebuffer[pe]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let pe=0;pe<M.__webglColorRenderbuffer.length;pe++)M.__webglColorRenderbuffer[pe]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[pe]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const K=D.textures;for(let pe=0,ve=K.length;pe<ve;pe++){const oe=r.get(K[pe]);oe.__webglTexture&&(o.deleteTexture(oe.__webglTexture),d.memory.textures--),r.remove(K[pe])}r.remove(D)}let V=0;function ee(){V=0}function re(){const D=V;return D>=l.maxTextures&&ot("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),V+=1,D}function he(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function fe(D,M){const K=r.get(D);if(D.isVideoTexture&&kt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&K.__version!==D.version){const pe=D.image;if(pe===null)ot("WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)ot("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(K,D,M);return}}else D.isExternalTexture&&(K.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,K.__webglTexture,o.TEXTURE0+M)}function P(D,M){const K=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){ne(K,D,M);return}else D.isExternalTexture&&(K.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,K.__webglTexture,o.TEXTURE0+M)}function j(D,M){const K=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){ne(K,D,M);return}i.bindTexture(o.TEXTURE_3D,K.__webglTexture,o.TEXTURE0+M)}function Y(D,M){const K=r.get(D);if(D.version>0&&K.__version!==D.version){le(K,D,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,K.__webglTexture,o.TEXTURE0+M)}const ge={[Ud]:o.REPEAT,[la]:o.CLAMP_TO_EDGE,[Ld]:o.MIRRORED_REPEAT},_e={[ei]:o.NEAREST,[JS]:o.NEAREST_MIPMAP_NEAREST,[Jl]:o.NEAREST_MIPMAP_LINEAR,[di]:o.LINEAR,[Xf]:o.LINEAR_MIPMAP_NEAREST,[Er]:o.LINEAR_MIPMAP_LINEAR},L={[iy]:o.NEVER,[cy]:o.ALWAYS,[ay]:o.LESS,[gg]:o.LEQUAL,[ry]:o.EQUAL,[ly]:o.GEQUAL,[sy]:o.GREATER,[oy]:o.NOTEQUAL};function ae(D,M){if(M.type===ca&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===di||M.magFilter===Xf||M.magFilter===Jl||M.magFilter===Er||M.minFilter===di||M.minFilter===Xf||M.minFilter===Jl||M.minFilter===Er)&&ot("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,ge[M.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,ge[M.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,ge[M.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,_e[M.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,_e[M.minFilter]),M.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,L[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ei||M.minFilter!==Jl&&M.minFilter!==Er||M.type===ca&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const K=t.get("EXT_texture_filter_anisotropic");o.texParameterf(D,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function ye(D,M){let K=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",N));const pe=M.source;let ve=S.get(pe);ve===void 0&&(ve={},S.set(pe,ve));const oe=he(M);if(oe!==D.__cacheKey){ve[oe]===void 0&&(ve[oe]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,K=!0),ve[oe].usedTimes++;const qe=ve[D.__cacheKey];qe!==void 0&&(ve[D.__cacheKey].usedTimes--,qe.usedTimes===0&&w(M)),D.__cacheKey=oe,D.__webglTexture=ve[oe].texture}return K}function Ee(D,M,K){return Math.floor(Math.floor(D/K)/M)}function Oe(D,M,K,pe){const oe=D.updateRanges;if(oe.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,K,pe,M.data);else{oe.sort((Se,Me)=>Se.start-Me.start);let qe=0;for(let Se=1;Se<oe.length;Se++){const Me=oe[qe],Ye=oe[Se],Ve=Me.start+Me.count,Ne=Ee(Ye.start,M.width,4),nt=Ee(Me.start,M.width,4);Ye.start<=Ve+1&&Ne===nt&&Ee(Ye.start+Ye.count-1,M.width,4)===Ne?Me.count=Math.max(Me.count,Ye.start+Ye.count-Me.start):(++qe,oe[qe]=Ye)}oe.length=qe+1;const Ue=o.getParameter(o.UNPACK_ROW_LENGTH),Qe=o.getParameter(o.UNPACK_SKIP_PIXELS),We=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let Se=0,Me=oe.length;Se<Me;Se++){const Ye=oe[Se],Ve=Math.floor(Ye.start/4),Ne=Math.ceil(Ye.count/4),nt=Ve%M.width,H=Math.floor(Ve/M.width),we=Ne,Ae=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,nt),o.pixelStorei(o.UNPACK_SKIP_ROWS,H),i.texSubImage2D(o.TEXTURE_2D,0,nt,H,we,Ae,K,pe,M.data)}D.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ue),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Qe),o.pixelStorei(o.UNPACK_SKIP_ROWS,We)}}function ne(D,M,K){let pe=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(pe=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(pe=o.TEXTURE_3D);const ve=ye(D,M),oe=M.source;i.bindTexture(pe,D.__webglTexture,o.TEXTURE0+K);const qe=r.get(oe);if(oe.version!==qe.__version||ve===!0){i.activeTexture(o.TEXTURE0+K);const Ue=Dt.getPrimaries(Dt.workingColorSpace),Qe=M.colorSpace===Wa?null:Dt.getPrimaries(M.colorSpace),We=M.colorSpace===Wa||Ue===Qe?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let Se=C(M.image,!1,l.maxTextureSize);Se=je(M,Se);const Me=u.convert(M.format,M.colorSpace),Ye=u.convert(M.type);let Ve=U(M.internalFormat,Me,Ye,M.colorSpace,M.isVideoTexture);ae(pe,M);let Ne;const nt=M.mipmaps,H=M.isVideoTexture!==!0,we=qe.__version===void 0||ve===!0,Ae=oe.dataReady,Re=k(M,Se);if(M.isDepthTexture)Ve=F(M.format===zo,M.type),we&&(H?i.texStorage2D(o.TEXTURE_2D,1,Ve,Se.width,Se.height):i.texImage2D(o.TEXTURE_2D,0,Ve,Se.width,Se.height,0,Me,Ye,null));else if(M.isDataTexture)if(nt.length>0){H&&we&&i.texStorage2D(o.TEXTURE_2D,Re,Ve,nt[0].width,nt[0].height);for(let be=0,xe=nt.length;be<xe;be++)Ne=nt[be],H?Ae&&i.texSubImage2D(o.TEXTURE_2D,be,0,0,Ne.width,Ne.height,Me,Ye,Ne.data):i.texImage2D(o.TEXTURE_2D,be,Ve,Ne.width,Ne.height,0,Me,Ye,Ne.data);M.generateMipmaps=!1}else H?(we&&i.texStorage2D(o.TEXTURE_2D,Re,Ve,Se.width,Se.height),Ae&&Oe(M,Se,Me,Ye)):i.texImage2D(o.TEXTURE_2D,0,Ve,Se.width,Se.height,0,Me,Ye,Se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){H&&we&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Re,Ve,nt[0].width,nt[0].height,Se.depth);for(let be=0,xe=nt.length;be<xe;be++)if(Ne=nt[be],M.format!==bi)if(Me!==null)if(H){if(Ae)if(M.layerUpdates.size>0){const Be=Px(Ne.width,Ne.height,M.format,M.type);for(const it of M.layerUpdates){const Bt=Ne.data.subarray(it*Be/Ne.data.BYTES_PER_ELEMENT,(it+1)*Be/Ne.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,be,0,0,it,Ne.width,Ne.height,1,Me,Bt)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,be,0,0,0,Ne.width,Ne.height,Se.depth,Me,Ne.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,be,Ve,Ne.width,Ne.height,Se.depth,0,Ne.data,0,0);else ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Ae&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,be,0,0,0,Ne.width,Ne.height,Se.depth,Me,Ye,Ne.data):i.texImage3D(o.TEXTURE_2D_ARRAY,be,Ve,Ne.width,Ne.height,Se.depth,0,Me,Ye,Ne.data)}else{H&&we&&i.texStorage2D(o.TEXTURE_2D,Re,Ve,nt[0].width,nt[0].height);for(let be=0,xe=nt.length;be<xe;be++)Ne=nt[be],M.format!==bi?Me!==null?H?Ae&&i.compressedTexSubImage2D(o.TEXTURE_2D,be,0,0,Ne.width,Ne.height,Me,Ne.data):i.compressedTexImage2D(o.TEXTURE_2D,be,Ve,Ne.width,Ne.height,0,Ne.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Ae&&i.texSubImage2D(o.TEXTURE_2D,be,0,0,Ne.width,Ne.height,Me,Ye,Ne.data):i.texImage2D(o.TEXTURE_2D,be,Ve,Ne.width,Ne.height,0,Me,Ye,Ne.data)}else if(M.isDataArrayTexture)if(H){if(we&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Re,Ve,Se.width,Se.height,Se.depth),Ae)if(M.layerUpdates.size>0){const be=Px(Se.width,Se.height,M.format,M.type);for(const xe of M.layerUpdates){const Be=Se.data.subarray(xe*be/Se.data.BYTES_PER_ELEMENT,(xe+1)*be/Se.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xe,Se.width,Se.height,1,Me,Ye,Be)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Me,Ye,Se.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Ve,Se.width,Se.height,Se.depth,0,Me,Ye,Se.data);else if(M.isData3DTexture)H?(we&&i.texStorage3D(o.TEXTURE_3D,Re,Ve,Se.width,Se.height,Se.depth),Ae&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Me,Ye,Se.data)):i.texImage3D(o.TEXTURE_3D,0,Ve,Se.width,Se.height,Se.depth,0,Me,Ye,Se.data);else if(M.isFramebufferTexture){if(we)if(H)i.texStorage2D(o.TEXTURE_2D,Re,Ve,Se.width,Se.height);else{let be=Se.width,xe=Se.height;for(let Be=0;Be<Re;Be++)i.texImage2D(o.TEXTURE_2D,Be,Ve,be,xe,0,Me,Ye,null),be>>=1,xe>>=1}}else if(nt.length>0){if(H&&we){const be=at(nt[0]);i.texStorage2D(o.TEXTURE_2D,Re,Ve,be.width,be.height)}for(let be=0,xe=nt.length;be<xe;be++)Ne=nt[be],H?Ae&&i.texSubImage2D(o.TEXTURE_2D,be,0,0,Me,Ye,Ne):i.texImage2D(o.TEXTURE_2D,be,Ve,Me,Ye,Ne);M.generateMipmaps=!1}else if(H){if(we){const be=at(Se);i.texStorage2D(o.TEXTURE_2D,Re,Ve,be.width,be.height)}Ae&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Me,Ye,Se)}else i.texImage2D(o.TEXTURE_2D,0,Ve,Me,Ye,Se);y(M)&&v(pe),qe.__version=oe.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function le(D,M,K){if(M.image.length!==6)return;const pe=ye(D,M),ve=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+K);const oe=r.get(ve);if(ve.version!==oe.__version||pe===!0){i.activeTexture(o.TEXTURE0+K);const qe=Dt.getPrimaries(Dt.workingColorSpace),Ue=M.colorSpace===Wa?null:Dt.getPrimaries(M.colorSpace),Qe=M.colorSpace===Wa||qe===Ue?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);const We=M.isCompressedTexture||M.image[0].isCompressedTexture,Se=M.image[0]&&M.image[0].isDataTexture,Me=[];for(let xe=0;xe<6;xe++)!We&&!Se?Me[xe]=C(M.image[xe],!0,l.maxCubemapSize):Me[xe]=Se?M.image[xe].image:M.image[xe],Me[xe]=je(M,Me[xe]);const Ye=Me[0],Ve=u.convert(M.format,M.colorSpace),Ne=u.convert(M.type),nt=U(M.internalFormat,Ve,Ne,M.colorSpace),H=M.isVideoTexture!==!0,we=oe.__version===void 0||pe===!0,Ae=ve.dataReady;let Re=k(M,Ye);ae(o.TEXTURE_CUBE_MAP,M);let be;if(We){H&&we&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Re,nt,Ye.width,Ye.height);for(let xe=0;xe<6;xe++){be=Me[xe].mipmaps;for(let Be=0;Be<be.length;Be++){const it=be[Be];M.format!==bi?Ve!==null?H?Ae&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be,0,0,it.width,it.height,Ve,it.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be,nt,it.width,it.height,0,it.data):ot("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be,0,0,it.width,it.height,Ve,Ne,it.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be,nt,it.width,it.height,0,Ve,Ne,it.data)}}}else{if(be=M.mipmaps,H&&we){be.length>0&&Re++;const xe=at(Me[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Re,nt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Se){H?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Me[xe].width,Me[xe].height,Ve,Ne,Me[xe].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,nt,Me[xe].width,Me[xe].height,0,Ve,Ne,Me[xe].data);for(let Be=0;Be<be.length;Be++){const Bt=be[Be].image[xe].image;H?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be+1,0,0,Bt.width,Bt.height,Ve,Ne,Bt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be+1,nt,Bt.width,Bt.height,0,Ve,Ne,Bt.data)}}else{H?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ve,Ne,Me[xe]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,nt,Ve,Ne,Me[xe]);for(let Be=0;Be<be.length;Be++){const it=be[Be];H?Ae&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be+1,0,0,Ve,Ne,it.image[xe]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Be+1,nt,Ve,Ne,it.image[xe])}}}y(M)&&v(o.TEXTURE_CUBE_MAP),oe.__version=ve.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function Ce(D,M,K,pe,ve,oe){const qe=u.convert(K.format,K.colorSpace),Ue=u.convert(K.type),Qe=U(K.internalFormat,qe,Ue,K.colorSpace),We=r.get(M),Se=r.get(K);if(Se.__renderTarget=M,!We.__hasExternalTextures){const Me=Math.max(1,M.width>>oe),Ye=Math.max(1,M.height>>oe);ve===o.TEXTURE_3D||ve===o.TEXTURE_2D_ARRAY?i.texImage3D(ve,oe,Qe,Me,Ye,M.depth,0,qe,Ue,null):i.texImage2D(ve,oe,Qe,Me,Ye,0,qe,Ue,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),Ge(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pe,ve,Se.__webglTexture,0,Ot(M)):(ve===o.TEXTURE_2D||ve>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pe,ve,Se.__webglTexture,oe),i.bindFramebuffer(o.FRAMEBUFFER,null)}function He(D,M,K){if(o.bindRenderbuffer(o.RENDERBUFFER,D),M.depthBuffer){const pe=M.depthTexture,ve=pe&&pe.isDepthTexture?pe.type:null,oe=F(M.stencilBuffer,ve),qe=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ue=Ot(M);Ge(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ue,oe,M.width,M.height):K?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ue,oe,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,oe,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,qe,o.RENDERBUFFER,D)}else{const pe=M.textures;for(let ve=0;ve<pe.length;ve++){const oe=pe[ve],qe=u.convert(oe.format,oe.colorSpace),Ue=u.convert(oe.type),Qe=U(oe.internalFormat,qe,Ue,oe.colorSpace),We=Ot(M);K&&Ge(M)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,We,Qe,M.width,M.height):Ge(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,We,Qe,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Qe,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Xe(D,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pe=r.get(M.depthTexture);pe.__renderTarget=M,(!pe.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),fe(M.depthTexture,0);const ve=pe.__webglTexture,oe=Ot(M);if(M.depthTexture.format===Oo)Ge(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ve,0,oe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,ve,0);else if(M.depthTexture.format===zo)Ge(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ve,0,oe):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function lt(D){const M=r.get(D),K=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const pe=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),pe){const ve=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,pe.removeEventListener("dispose",ve)};pe.addEventListener("dispose",ve),M.__depthDisposeCallback=ve}M.__boundDepthTexture=pe}if(D.depthTexture&&!M.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const pe=D.texture.mipmaps;pe&&pe.length>0?Xe(M.__webglFramebuffer[0],D):Xe(M.__webglFramebuffer,D)}else if(K){M.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[pe]),M.__webglDepthbuffer[pe]===void 0)M.__webglDepthbuffer[pe]=o.createRenderbuffer(),He(M.__webglDepthbuffer[pe],D,!1);else{const ve=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,oe=M.__webglDepthbuffer[pe];o.bindRenderbuffer(o.RENDERBUFFER,oe),o.framebufferRenderbuffer(o.FRAMEBUFFER,ve,o.RENDERBUFFER,oe)}}else{const pe=D.texture.mipmaps;if(pe&&pe.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),He(M.__webglDepthbuffer,D,!1);else{const ve=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,oe=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,oe),o.framebufferRenderbuffer(o.FRAMEBUFFER,ve,o.RENDERBUFFER,oe)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function $t(D,M,K){const pe=r.get(D);M!==void 0&&Ce(pe.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),K!==void 0&&lt(D)}function dt(D){const M=D.texture,K=r.get(D),pe=r.get(M);D.addEventListener("dispose",B);const ve=D.textures,oe=D.isWebGLCubeRenderTarget===!0,qe=ve.length>1;if(qe||(pe.__webglTexture===void 0&&(pe.__webglTexture=o.createTexture()),pe.__version=M.version,d.memory.textures++),oe){K.__webglFramebuffer=[];for(let Ue=0;Ue<6;Ue++)if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer[Ue]=[];for(let Qe=0;Qe<M.mipmaps.length;Qe++)K.__webglFramebuffer[Ue][Qe]=o.createFramebuffer()}else K.__webglFramebuffer[Ue]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ue=0;Ue<M.mipmaps.length;Ue++)K.__webglFramebuffer[Ue]=o.createFramebuffer()}else K.__webglFramebuffer=o.createFramebuffer();if(qe)for(let Ue=0,Qe=ve.length;Ue<Qe;Ue++){const We=r.get(ve[Ue]);We.__webglTexture===void 0&&(We.__webglTexture=o.createTexture(),d.memory.textures++)}if(D.samples>0&&Ge(D)===!1){K.__webglMultisampledFramebuffer=o.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ue=0;Ue<ve.length;Ue++){const Qe=ve[Ue];K.__webglColorRenderbuffer[Ue]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,K.__webglColorRenderbuffer[Ue]);const We=u.convert(Qe.format,Qe.colorSpace),Se=u.convert(Qe.type),Me=U(Qe.internalFormat,We,Se,Qe.colorSpace,D.isXRRenderTarget===!0),Ye=Ot(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Ye,Me,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ue,o.RENDERBUFFER,K.__webglColorRenderbuffer[Ue])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(K.__webglDepthRenderbuffer=o.createRenderbuffer(),He(K.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(oe){i.bindTexture(o.TEXTURE_CUBE_MAP,pe.__webglTexture),ae(o.TEXTURE_CUBE_MAP,M);for(let Ue=0;Ue<6;Ue++)if(M.mipmaps&&M.mipmaps.length>0)for(let Qe=0;Qe<M.mipmaps.length;Qe++)Ce(K.__webglFramebuffer[Ue][Qe],D,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,Qe);else Ce(K.__webglFramebuffer[Ue],D,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0);y(M)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qe){for(let Ue=0,Qe=ve.length;Ue<Qe;Ue++){const We=ve[Ue],Se=r.get(We);let Me=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Me=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Me,Se.__webglTexture),ae(Me,We),Ce(K.__webglFramebuffer,D,We,o.COLOR_ATTACHMENT0+Ue,Me,0),y(We)&&v(Me)}i.unbindTexture()}else{let Ue=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ue=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ue,pe.__webglTexture),ae(Ue,M),M.mipmaps&&M.mipmaps.length>0)for(let Qe=0;Qe<M.mipmaps.length;Qe++)Ce(K.__webglFramebuffer[Qe],D,M,o.COLOR_ATTACHMENT0,Ue,Qe);else Ce(K.__webglFramebuffer,D,M,o.COLOR_ATTACHMENT0,Ue,0);y(M)&&v(Ue),i.unbindTexture()}D.depthBuffer&&lt(D)}function Tt(D){const M=D.textures;for(let K=0,pe=M.length;K<pe;K++){const ve=M[K];if(y(ve)){const oe=O(D),qe=r.get(ve).__webglTexture;i.bindTexture(oe,qe),v(oe),i.unbindTexture()}}}const I=[],ht=[];function mt(D){if(D.samples>0){if(Ge(D)===!1){const M=D.textures,K=D.width,pe=D.height;let ve=o.COLOR_BUFFER_BIT;const oe=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qe=r.get(D),Ue=M.length>1;if(Ue)for(let We=0;We<M.length;We++)i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+We,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+We,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer);const Qe=D.texture.mipmaps;Qe&&Qe.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qe.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let We=0;We<M.length;We++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ve|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ve|=o.STENCIL_BUFFER_BIT)),Ue){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,qe.__webglColorRenderbuffer[We]);const Se=r.get(M[We]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Se,0)}o.blitFramebuffer(0,0,K,pe,0,0,K,pe,ve,o.NEAREST),m===!0&&(I.length=0,ht.length=0,I.push(o.COLOR_ATTACHMENT0+We),D.depthBuffer&&D.resolveDepthBuffer===!1&&(I.push(oe),ht.push(oe),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,ht)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,I))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ue)for(let We=0;We<M.length;We++){i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+We,o.RENDERBUFFER,qe.__webglColorRenderbuffer[We]);const Se=r.get(M[We]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,qe.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+We,o.TEXTURE_2D,Se,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const M=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function Ot(D){return Math.min(l.maxSamples,D.samples)}function Ge(D){const M=r.get(D);return D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function kt(D){const M=d.render.frame;x.get(D)!==M&&(x.set(D,M),D.update())}function je(D,M){const K=D.colorSpace,pe=D.format,ve=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||K!==Es&&K!==Wa&&(Dt.getTransfer(K)===Gt?(pe!==bi||ve!==da)&&ot("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nn("WebGLTextures: Unsupported texture color space:",K)),M}function at(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=re,this.resetTextureUnits=ee,this.setTexture2D=fe,this.setTexture2DArray=P,this.setTexture3D=j,this.setTextureCube=Y,this.rebindTextures=$t,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Tt,this.updateMultisampleRenderTarget=mt,this.setupDepthRenderbuffer=lt,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Ge}function bE(o,t){function i(r,l=Wa){let u;const d=Dt.getTransfer(l);if(r===da)return o.UNSIGNED_BYTE;if(r===dh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===hh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===dg)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===hg)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===ug)return o.BYTE;if(r===fg)return o.SHORT;if(r===Lo)return o.UNSIGNED_SHORT;if(r===fh)return o.INT;if(r===Ar)return o.UNSIGNED_INT;if(r===ca)return o.FLOAT;if(r===Rs)return o.HALF_FLOAT;if(r===pg)return o.ALPHA;if(r===mg)return o.RGB;if(r===bi)return o.RGBA;if(r===Oo)return o.DEPTH_COMPONENT;if(r===zo)return o.DEPTH_STENCIL;if(r===xg)return o.RED;if(r===ph)return o.RED_INTEGER;if(r===mh)return o.RG;if(r===xh)return o.RG_INTEGER;if(r===gh)return o.RGBA_INTEGER;if(r===vc||r===Sc||r===yc||r===bc)if(d===Gt)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===vc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Sc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===yc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===bc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===vc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Sc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===yc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===bc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Nd||r===Od||r===zd||r===Pd)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Nd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Od)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===zd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Pd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Bd||r===Fd||r===Id)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Bd||r===Fd)return d===Gt?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Id)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Hd||r===Gd||r===Vd||r===kd||r===Xd||r===Wd||r===qd||r===Yd||r===jd||r===Zd||r===Kd||r===Qd||r===Jd||r===$d)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Hd)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Gd)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Vd)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===kd)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xd)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Wd)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===qd)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Yd)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===jd)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Zd)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Kd)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Qd)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Jd)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===$d)return d===Gt?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===eh||r===th||r===nh)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===eh)return d===Gt?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===th)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===nh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ih||r===ah||r===rh||r===sh)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===ih)return u.COMPRESSED_RED_RGTC1_EXT;if(r===ah)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===rh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===sh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===No?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const ME=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,EE=`
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

}`;class TE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const r=new Dg(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Mi({vertexShader:ME,fragmentShader:EE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Li(new As(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class AE extends Cs{constructor(t,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,x=null,_=null,S=null,b=null,A=null;const C=typeof XRWebGLBinding<"u",y=new TE,v={},O=i.getContextAttributes();let U=null,F=null;const k=[],N=[],B=new Ut;let J=null;const w=new Si;w.viewport=new an;const R=new Si;R.viewport=new an;const V=[w,R],ee=new Xy;let re=null,he=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let le=k[ne];return le===void 0&&(le=new hd,k[ne]=le),le.getTargetRaySpace()},this.getControllerGrip=function(ne){let le=k[ne];return le===void 0&&(le=new hd,k[ne]=le),le.getGripSpace()},this.getHand=function(ne){let le=k[ne];return le===void 0&&(le=new hd,k[ne]=le),le.getHandSpace()};function fe(ne){const le=N.indexOf(ne.inputSource);if(le===-1)return;const Ce=k[le];Ce!==void 0&&(Ce.update(ne.inputSource,ne.frame,p||d),Ce.dispatchEvent({type:ne.type,data:ne.inputSource}))}function P(){l.removeEventListener("select",fe),l.removeEventListener("selectstart",fe),l.removeEventListener("selectend",fe),l.removeEventListener("squeeze",fe),l.removeEventListener("squeezestart",fe),l.removeEventListener("squeezeend",fe),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",j);for(let ne=0;ne<k.length;ne++){const le=N[ne];le!==null&&(N[ne]=null,k[ne].disconnect(le))}re=null,he=null,y.reset();for(const ne in v)delete v[ne];t.setRenderTarget(U),b=null,S=null,_=null,l=null,F=null,Oe.stop(),r.isPresenting=!1,t.setPixelRatio(J),t.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){u=ne,r.isPresenting===!0&&ot("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){h=ne,r.isPresenting===!0&&ot("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(ne){p=ne},this.getBaseLayer=function(){return S!==null?S:b},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(ne){if(l=ne,l!==null){if(U=t.getRenderTarget(),l.addEventListener("select",fe),l.addEventListener("selectstart",fe),l.addEventListener("selectend",fe),l.addEventListener("squeeze",fe),l.addEventListener("squeezestart",fe),l.addEventListener("squeezeend",fe),l.addEventListener("end",P),l.addEventListener("inputsourceschange",j),O.xrCompatible!==!0&&await i.makeXRCompatible(),J=t.getPixelRatio(),t.getSize(B),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,He=null,Xe=null;O.depth&&(Xe=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ce=O.stencil?zo:Oo,He=O.stencil?No:Ar);const lt={colorFormat:i.RGBA8,depthFormat:Xe,scaleFactor:u};_=this.getBinding(),S=_.createProjectionLayer(lt),l.updateRenderState({layers:[S]}),t.setPixelRatio(1),t.setSize(S.textureWidth,S.textureHeight,!1),F=new Za(S.textureWidth,S.textureHeight,{format:bi,type:da,depthTexture:new wg(S.textureWidth,S.textureHeight,He,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:O.stencil,colorSpace:t.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Ce={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:u};b=new XRWebGLLayer(l,i,Ce),l.updateRenderState({baseLayer:b}),t.setPixelRatio(1),t.setSize(b.framebufferWidth,b.framebufferHeight,!1),F=new Za(b.framebufferWidth,b.framebufferHeight,{format:bi,type:da,colorSpace:t.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Oe.setContext(l),Oe.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function j(ne){for(let le=0;le<ne.removed.length;le++){const Ce=ne.removed[le],He=N.indexOf(Ce);He>=0&&(N[He]=null,k[He].disconnect(Ce))}for(let le=0;le<ne.added.length;le++){const Ce=ne.added[le];let He=N.indexOf(Ce);if(He===-1){for(let lt=0;lt<k.length;lt++)if(lt>=N.length){N.push(Ce),He=lt;break}else if(N[lt]===null){N[lt]=Ce,He=lt;break}if(He===-1)break}const Xe=k[He];Xe&&Xe.connect(Ce)}}const Y=new ce,ge=new ce;function _e(ne,le,Ce){Y.setFromMatrixPosition(le.matrixWorld),ge.setFromMatrixPosition(Ce.matrixWorld);const He=Y.distanceTo(ge),Xe=le.projectionMatrix.elements,lt=Ce.projectionMatrix.elements,$t=Xe[14]/(Xe[10]-1),dt=Xe[14]/(Xe[10]+1),Tt=(Xe[9]+1)/Xe[5],I=(Xe[9]-1)/Xe[5],ht=(Xe[8]-1)/Xe[0],mt=(lt[8]+1)/lt[0],Ot=$t*ht,Ge=$t*mt,kt=He/(-ht+mt),je=kt*-ht;if(le.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(je),ne.translateZ(kt),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Xe[10]===-1)ne.projectionMatrix.copy(le.projectionMatrix),ne.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const at=$t+kt,D=dt+kt,M=Ot-je,K=Ge+(He-je),pe=Tt*dt/D*at,ve=I*dt/D*at;ne.projectionMatrix.makePerspective(M,K,pe,ve,at,D),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function L(ne,le){le===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(le.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(l===null)return;let le=ne.near,Ce=ne.far;y.texture!==null&&(y.depthNear>0&&(le=y.depthNear),y.depthFar>0&&(Ce=y.depthFar)),ee.near=R.near=w.near=le,ee.far=R.far=w.far=Ce,(re!==ee.near||he!==ee.far)&&(l.updateRenderState({depthNear:ee.near,depthFar:ee.far}),re=ee.near,he=ee.far),ee.layers.mask=ne.layers.mask|6,w.layers.mask=ee.layers.mask&3,R.layers.mask=ee.layers.mask&5;const He=ne.parent,Xe=ee.cameras;L(ee,He);for(let lt=0;lt<Xe.length;lt++)L(Xe[lt],He);Xe.length===2?_e(ee,w,R):ee.projectionMatrix.copy(w.projectionMatrix),ae(ne,ee,He)};function ae(ne,le,Ce){Ce===null?ne.matrix.copy(le.matrixWorld):(ne.matrix.copy(Ce.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(le.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(le.projectionMatrix),ne.projectionMatrixInverse.copy(le.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=oh*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return ee},this.getFoveation=function(){if(!(S===null&&b===null))return m},this.setFoveation=function(ne){m=ne,S!==null&&(S.fixedFoveation=ne),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=ne)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(ee)},this.getCameraTexture=function(ne){return v[ne]};let ye=null;function Ee(ne,le){if(x=le.getViewerPose(p||d),A=le,x!==null){const Ce=x.views;b!==null&&(t.setRenderTargetFramebuffer(F,b.framebuffer),t.setRenderTarget(F));let He=!1;Ce.length!==ee.cameras.length&&(ee.cameras.length=0,He=!0);for(let dt=0;dt<Ce.length;dt++){const Tt=Ce[dt];let I=null;if(b!==null)I=b.getViewport(Tt);else{const mt=_.getViewSubImage(S,Tt);I=mt.viewport,dt===0&&(t.setRenderTargetTextures(F,mt.colorTexture,mt.depthStencilTexture),t.setRenderTarget(F))}let ht=V[dt];ht===void 0&&(ht=new Si,ht.layers.enable(dt),ht.viewport=new an,V[dt]=ht),ht.matrix.fromArray(Tt.transform.matrix),ht.matrix.decompose(ht.position,ht.quaternion,ht.scale),ht.projectionMatrix.fromArray(Tt.projectionMatrix),ht.projectionMatrixInverse.copy(ht.projectionMatrix).invert(),ht.viewport.set(I.x,I.y,I.width,I.height),dt===0&&(ee.matrix.copy(ht.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale)),He===!0&&ee.cameras.push(ht)}const Xe=l.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const dt=_.getDepthInformation(Ce[0]);dt&&dt.isValid&&dt.texture&&y.init(dt,l.renderState)}if(Xe&&Xe.includes("camera-access")&&C){t.state.unbindTexture(),_=r.getBinding();for(let dt=0;dt<Ce.length;dt++){const Tt=Ce[dt].camera;if(Tt){let I=v[Tt];I||(I=new Dg,v[Tt]=I);const ht=_.getCameraImage(Tt);I.sourceTexture=ht}}}}for(let Ce=0;Ce<k.length;Ce++){const He=N[Ce],Xe=k[Ce];He!==null&&Xe!==void 0&&Xe.update(He,le,p||d)}ye&&ye(ne,le),le.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:le}),A=null}const Oe=new Lg;Oe.setAnimationLoop(Ee),this.setAnimationLoop=function(ne){ye=ne},this.dispose=function(){}}}const Sr=new ha,RE=new mn;function CE(o,t){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,Tg(o)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,O,U,F){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(y,v):v.isMeshToonMaterial?(u(y,v),_(y,v)):v.isMeshPhongMaterial?(u(y,v),x(y,v)):v.isMeshStandardMaterial?(u(y,v),S(y,v),v.isMeshPhysicalMaterial&&b(y,v,F)):v.isMeshMatcapMaterial?(u(y,v),A(y,v)):v.isMeshDepthMaterial?u(y,v):v.isMeshDistanceMaterial?(u(y,v),C(y,v)):v.isMeshNormalMaterial?u(y,v):v.isLineBasicMaterial?(d(y,v),v.isLineDashedMaterial&&h(y,v)):v.isPointsMaterial?m(y,v,O,U):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Vn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Vn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const O=t.get(v),U=O.envMap,F=O.envMapRotation;U&&(y.envMap.value=U,Sr.copy(F),Sr.x*=-1,Sr.y*=-1,Sr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(Sr.y*=-1,Sr.z*=-1),y.envMapRotation.value.setFromMatrix4(RE.makeRotationFromEuler(Sr)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function d(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function h(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,O,U){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*O,y.scale.value=U*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function x(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function S(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function b(y,v,O){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Vn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=O.texture,y.transmissionSamplerSize.value.set(O.width,O.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,v){v.matcap&&(y.matcap.value=v.matcap)}function C(y,v){const O=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(O.matrixWorld),y.nearDistance.value=O.shadow.camera.near,y.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function wE(o,t,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,U){const F=U.program;r.uniformBlockBinding(O,F)}function p(O,U){let F=l[O.id];F===void 0&&(A(O),F=x(O),l[O.id]=F,O.addEventListener("dispose",y));const k=U.program;r.updateUBOMapping(O,k);const N=t.render.frame;u[O.id]!==N&&(S(O),u[O.id]=N)}function x(O){const U=_();O.__bindingPointIndex=U;const F=o.createBuffer(),k=O.__size,N=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,F),o.bufferData(o.UNIFORM_BUFFER,k,N),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,F),F}function _(){for(let O=0;O<h;O++)if(d.indexOf(O)===-1)return d.push(O),O;return nn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(O){const U=l[O.id],F=O.uniforms,k=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let N=0,B=F.length;N<B;N++){const J=Array.isArray(F[N])?F[N]:[F[N]];for(let w=0,R=J.length;w<R;w++){const V=J[w];if(b(V,N,w,k)===!0){const ee=V.__offset,re=Array.isArray(V.value)?V.value:[V.value];let he=0;for(let fe=0;fe<re.length;fe++){const P=re[fe],j=C(P);typeof P=="number"||typeof P=="boolean"?(V.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,ee+he,V.__data)):P.isMatrix3?(V.__data[0]=P.elements[0],V.__data[1]=P.elements[1],V.__data[2]=P.elements[2],V.__data[3]=0,V.__data[4]=P.elements[3],V.__data[5]=P.elements[4],V.__data[6]=P.elements[5],V.__data[7]=0,V.__data[8]=P.elements[6],V.__data[9]=P.elements[7],V.__data[10]=P.elements[8],V.__data[11]=0):(P.toArray(V.__data,he),he+=j.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ee,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function b(O,U,F,k){const N=O.value,B=U+"_"+F;if(k[B]===void 0)return typeof N=="number"||typeof N=="boolean"?k[B]=N:k[B]=N.clone(),!0;{const J=k[B];if(typeof N=="number"||typeof N=="boolean"){if(J!==N)return k[B]=N,!0}else if(J.equals(N)===!1)return J.copy(N),!0}return!1}function A(O){const U=O.uniforms;let F=0;const k=16;for(let B=0,J=U.length;B<J;B++){const w=Array.isArray(U[B])?U[B]:[U[B]];for(let R=0,V=w.length;R<V;R++){const ee=w[R],re=Array.isArray(ee.value)?ee.value:[ee.value];for(let he=0,fe=re.length;he<fe;he++){const P=re[he],j=C(P),Y=F%k,ge=Y%j.boundary,_e=Y+ge;F+=ge,_e!==0&&k-_e<j.storage&&(F+=k-_e),ee.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=F,F+=j.storage}}}const N=F%k;return N>0&&(F+=k-N),O.__size=F,O.__cache={},this}function C(O){const U={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(U.boundary=4,U.storage=4):O.isVector2?(U.boundary=8,U.storage=8):O.isVector3||O.isColor?(U.boundary=16,U.storage=12):O.isVector4?(U.boundary=16,U.storage=16):O.isMatrix3?(U.boundary=48,U.storage=48):O.isMatrix4?(U.boundary=64,U.storage=64):O.isTexture?ot("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ot("WebGLRenderer: Unsupported uniform value type.",O),U}function y(O){const U=O.target;U.removeEventListener("dispose",y);const F=d.indexOf(U.__bindingPointIndex);d.splice(F,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function v(){for(const O in l)o.deleteBuffer(l[O]);d=[],l={},u={}}return{bind:m,update:p,dispose:v}}const DE=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let aa=null;function UE(){return aa===null&&(aa=new Fy(DE,32,32,mh,Rs),aa.minFilter=di,aa.magFilter=di,aa.wrapS=la,aa.wrapT=la,aa.generateMipmaps=!1,aa.needsUpdate=!0),aa}class LE{constructor(t={}){const{canvas:i=uy(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1}=t;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=d;const A=new Set([gh,xh,ph]),C=new Set([da,Ar,Lo,No,dh,hh]),y=new Uint32Array(4),v=new Int32Array(4);let O=null,U=null;const F=[],k=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ya,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let B=!1;this._outputColorSpace=fi;let J=0,w=0,R=null,V=-1,ee=null;const re=new an,he=new an;let fe=null;const P=new Vt(0);let j=0,Y=i.width,ge=i.height,_e=1,L=null,ae=null;const ye=new an(0,0,Y,ge),Ee=new an(0,0,Y,ge);let Oe=!1;const ne=new Cg;let le=!1,Ce=!1;const He=new mn,Xe=new ce,lt=new an,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let dt=!1;function Tt(){return R===null?_e:1}let I=r;function ht(T,X){return i.getContext(T,X)}try{const T={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${uh}`),i.addEventListener("webglcontextlost",be,!1),i.addEventListener("webglcontextrestored",xe,!1),i.addEventListener("webglcontextcreationerror",Be,!1),I===null){const X="webgl2";if(I=ht(X,T),I===null)throw ht(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw T("WebGLRenderer: "+T.message),T}let mt,Ot,Ge,kt,je,at,D,M,K,pe,ve,oe,qe,Ue,Qe,We,Se,Me,Ye,Ve,Ne,nt,H,we;function Ae(){mt=new H3(I),mt.init(),nt=new bE(I,mt),Ot=new U3(I,mt,t,nt),Ge=new SE(I,mt),Ot.reversedDepthBuffer&&S&&Ge.buffers.depth.setReversed(!0),kt=new k3(I),je=new oE,at=new yE(I,mt,Ge,je,Ot,nt,kt),D=new N3(N),M=new I3(N),K=new Yy(I),H=new w3(I,K),pe=new G3(I,K,kt,H),ve=new W3(I,pe,K,kt),Ye=new X3(I,Ot,at),We=new L3(je),oe=new sE(N,D,M,mt,Ot,H,We),qe=new CE(N,je),Ue=new cE,Qe=new mE(mt),Me=new C3(N,D,M,Ge,ve,b,m),Se=new _E(N,ve,Ot),we=new wE(I,kt,Ot,Ge),Ve=new D3(I,mt,kt),Ne=new V3(I,mt,kt),kt.programs=oe.programs,N.capabilities=Ot,N.extensions=mt,N.properties=je,N.renderLists=Ue,N.shadowMap=Se,N.state=Ge,N.info=kt}Ae();const Re=new AE(N,I);this.xr=Re,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=mt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=mt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(T){T!==void 0&&(_e=T,this.setSize(Y,ge,!1))},this.getSize=function(T){return T.set(Y,ge)},this.setSize=function(T,X,ie=!0){if(Re.isPresenting){ot("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,ge=X,i.width=Math.floor(T*_e),i.height=Math.floor(X*_e),ie===!0&&(i.style.width=T+"px",i.style.height=X+"px"),this.setViewport(0,0,T,X)},this.getDrawingBufferSize=function(T){return T.set(Y*_e,ge*_e).floor()},this.setDrawingBufferSize=function(T,X,ie){Y=T,ge=X,_e=ie,i.width=Math.floor(T*ie),i.height=Math.floor(X*ie),this.setViewport(0,0,T,X)},this.getCurrentViewport=function(T){return T.copy(re)},this.getViewport=function(T){return T.copy(ye)},this.setViewport=function(T,X,ie,$){T.isVector4?ye.set(T.x,T.y,T.z,T.w):ye.set(T,X,ie,$),Ge.viewport(re.copy(ye).multiplyScalar(_e).round())},this.getScissor=function(T){return T.copy(Ee)},this.setScissor=function(T,X,ie,$){T.isVector4?Ee.set(T.x,T.y,T.z,T.w):Ee.set(T,X,ie,$),Ge.scissor(he.copy(Ee).multiplyScalar(_e).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(T){Ge.setScissorTest(Oe=T)},this.setOpaqueSort=function(T){L=T},this.setTransparentSort=function(T){ae=T},this.getClearColor=function(T){return T.copy(Me.getClearColor())},this.setClearColor=function(){Me.setClearColor(...arguments)},this.getClearAlpha=function(){return Me.getClearAlpha()},this.setClearAlpha=function(){Me.setClearAlpha(...arguments)},this.clear=function(T=!0,X=!0,ie=!0){let $=0;if(T){let q=!1;if(R!==null){const Te=R.texture.format;q=A.has(Te)}if(q){const Te=R.texture.type,De=C.has(Te),ze=Me.getClearColor(),Fe=Me.getClearAlpha(),$e=ze.r,tt=ze.g,Ze=ze.b;De?(y[0]=$e,y[1]=tt,y[2]=Ze,y[3]=Fe,I.clearBufferuiv(I.COLOR,0,y)):(v[0]=$e,v[1]=tt,v[2]=Ze,v[3]=Fe,I.clearBufferiv(I.COLOR,0,v))}else $|=I.COLOR_BUFFER_BIT}X&&($|=I.DEPTH_BUFFER_BIT),ie&&($|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",be,!1),i.removeEventListener("webglcontextrestored",xe,!1),i.removeEventListener("webglcontextcreationerror",Be,!1),Me.dispose(),Ue.dispose(),Qe.dispose(),je.dispose(),D.dispose(),M.dispose(),ve.dispose(),H.dispose(),we.dispose(),oe.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",Ds),Re.removeEventListener("sessionend",Us),hi.stop()};function be(T){T.preventDefault(),_x("WebGLRenderer: Context Lost."),B=!0}function xe(){_x("WebGLRenderer: Context Restored."),B=!1;const T=kt.autoReset,X=Se.enabled,ie=Se.autoUpdate,$=Se.needsUpdate,q=Se.type;Ae(),kt.autoReset=T,Se.enabled=X,Se.autoUpdate=ie,Se.needsUpdate=$,Se.type=q}function Be(T){nn("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function it(T){const X=T.target;X.removeEventListener("dispose",it),Bt(X)}function Bt(T){At(T),je.remove(T)}function At(T){const X=je.get(T).programs;X!==void 0&&(X.forEach(function(ie){oe.releaseProgram(ie)}),T.isShaderMaterial&&oe.releaseShaderCache(T))}this.renderBufferDirect=function(T,X,ie,$,q,Te){X===null&&(X=$t);const De=q.isMesh&&q.matrixWorld.determinant()<0,ze=Uc(T,X,ie,$,q);Ge.setMaterial($,De);let Fe=ie.index,$e=1;if($.wireframe===!0){if(Fe=pe.getWireframeAttribute(ie),Fe===void 0)return;$e=2}const tt=ie.drawRange,Ze=ie.attributes.position;let ct=tt.start*$e,Et=(tt.start+tt.count)*$e;Te!==null&&(ct=Math.max(ct,Te.start*$e),Et=Math.min(Et,(Te.start+Te.count)*$e)),Fe!==null?(ct=Math.max(ct,0),Et=Math.min(Et,Fe.count)):Ze!=null&&(ct=Math.max(ct,0),Et=Math.min(Et,Ze.count));const Rt=Et-ct;if(Rt<0||Rt===1/0)return;H.setup(q,$,ze,ie,Fe);let St,Nt=Ve;if(Fe!==null&&(St=K.get(Fe),Nt=Ne,Nt.setIndex(St)),q.isMesh)$.wireframe===!0?(Ge.setLineWidth($.wireframeLinewidth*Tt()),Nt.setMode(I.LINES)):Nt.setMode(I.TRIANGLES);else if(q.isLine){let Je=$.linewidth;Je===void 0&&(Je=1),Ge.setLineWidth(Je*Tt()),q.isLineSegments?Nt.setMode(I.LINES):q.isLineLoop?Nt.setMode(I.LINE_LOOP):Nt.setMode(I.LINE_STRIP)}else q.isPoints?Nt.setMode(I.POINTS):q.isSprite&&Nt.setMode(I.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Po("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Nt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(mt.get("WEBGL_multi_draw"))Nt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Je=q._multiDrawStarts,Xt=q._multiDrawCounts,yt=q._multiDrawCount,_n=Fe?K.get(Fe).bytesPerElement:1,ma=je.get($).currentProgram.getUniforms();for(let qt=0;qt<yt;qt++)ma.setValue(I,"_gl_DrawID",qt),Nt.render(Je[qt]/_n,Xt[qt])}else if(q.isInstancedMesh)Nt.renderInstances(ct,Rt,q.count);else if(ie.isInstancedBufferGeometry){const Je=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Xt=Math.min(ie.instanceCount,Je);Nt.renderInstances(ct,Rt,Xt)}else Nt.render(ct,Rt)};function Cn(T,X,ie){T.transparent===!0&&T.side===oa&&T.forceSinglePass===!1?(T.side=Vn,T.needsUpdate=!0,fn(T,X,ie),T.side=ja,T.needsUpdate=!0,fn(T,X,ie),T.side=oa):fn(T,X,ie)}this.compile=function(T,X,ie=null){ie===null&&(ie=T),U=Qe.get(ie),U.init(X),k.push(U),ie.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(U.pushLight(q),q.castShadow&&U.pushShadow(q))}),T!==ie&&T.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(U.pushLight(q),q.castShadow&&U.pushShadow(q))}),U.setupLights();const $=new Set;return T.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Te=q.material;if(Te)if(Array.isArray(Te))for(let De=0;De<Te.length;De++){const ze=Te[De];Cn(ze,ie,q),$.add(ze)}else Cn(Te,ie,q),$.add(Te)}),U=k.pop(),$},this.compileAsync=function(T,X,ie=null){const $=this.compile(T,X,ie);return new Promise(q=>{function Te(){if($.forEach(function(De){je.get(De).currentProgram.isReady()&&$.delete(De)}),$.size===0){q(T);return}setTimeout(Te,10)}mt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let kn=null;function Go(T){kn&&kn(T)}function Ds(){hi.stop()}function Us(){hi.start()}const hi=new Lg;hi.setAnimationLoop(Go),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(T){kn=T,Re.setAnimationLoop(T),T===null?hi.stop():hi.start()},Re.addEventListener("sessionstart",Ds),Re.addEventListener("sessionend",Us),this.render=function(T,X){if(X!==void 0&&X.isCamera!==!0){nn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(X),X=Re.getCamera()),T.isScene===!0&&T.onBeforeRender(N,T,X,R),U=Qe.get(T,k.length),U.init(X),k.push(U),He.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ne.setFromProjectionMatrix(He,Di,X.reversedDepth),Ce=this.localClippingEnabled,le=We.init(this.clippingPlanes,Ce),O=Ue.get(T,F.length),O.init(),F.push(O),Re.enabled===!0&&Re.isPresenting===!0){const Te=N.xr.getDepthSensingMesh();Te!==null&&Qa(Te,X,-1/0,N.sortObjects)}Qa(T,X,0,N.sortObjects),O.finish(),N.sortObjects===!0&&O.sort(L,ae),dt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,dt&&Me.addToRenderList(O,T),this.info.render.frame++,le===!0&&We.beginShadows();const ie=U.state.shadowsArray;Se.render(ie,T,X),le===!0&&We.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=O.opaque,q=O.transmissive;if(U.setupLights(),X.isArrayCamera){const Te=X.cameras;if(q.length>0)for(let De=0,ze=Te.length;De<ze;De++){const Fe=Te[De];Ns($,q,T,Fe)}dt&&Me.render(T);for(let De=0,ze=Te.length;De<ze;De++){const Fe=Te[De];Ls(O,T,Fe,Fe.viewport)}}else q.length>0&&Ns($,q,T,X),dt&&Me.render(T),Ls(O,T,X);R!==null&&w===0&&(at.updateMultisampleRenderTarget(R),at.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(N,T,X),H.resetDefaultState(),V=-1,ee=null,k.pop(),k.length>0?(U=k[k.length-1],le===!0&&We.setGlobalState(N.clippingPlanes,U.state.camera)):U=null,F.pop(),F.length>0?O=F[F.length-1]:O=null};function Qa(T,X,ie,$){if(T.visible===!1)return;if(T.layers.test(X.layers)){if(T.isGroup)ie=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(X);else if(T.isLight)U.pushLight(T),T.castShadow&&U.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ne.intersectsSprite(T)){$&&lt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(He);const De=ve.update(T),ze=T.material;ze.visible&&O.push(T,De,ze,ie,lt.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ne.intersectsObject(T))){const De=ve.update(T),ze=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),lt.copy(T.boundingSphere.center)):(De.boundingSphere===null&&De.computeBoundingSphere(),lt.copy(De.boundingSphere.center)),lt.applyMatrix4(T.matrixWorld).applyMatrix4(He)),Array.isArray(ze)){const Fe=De.groups;for(let $e=0,tt=Fe.length;$e<tt;$e++){const Ze=Fe[$e],ct=ze[Ze.materialIndex];ct&&ct.visible&&O.push(T,De,ct,ie,lt.z,Ze)}}else ze.visible&&O.push(T,De,ze,ie,lt.z,null)}}const Te=T.children;for(let De=0,ze=Te.length;De<ze;De++)Qa(Te[De],X,ie,$)}function Ls(T,X,ie,$){const{opaque:q,transmissive:Te,transparent:De}=T;U.setupLightsView(ie),le===!0&&We.setGlobalState(N.clippingPlanes,ie),$&&Ge.viewport(re.copy($)),q.length>0&&Xn(q,X,ie),Te.length>0&&Xn(Te,X,ie),De.length>0&&Xn(De,X,ie),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Ns(T,X,ie,$){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;U.state.transmissionRenderTarget[$.id]===void 0&&(U.state.transmissionRenderTarget[$.id]=new Za(1,1,{generateMipmaps:!0,type:mt.has("EXT_color_buffer_half_float")||mt.has("EXT_color_buffer_float")?Rs:da,minFilter:Er,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace}));const Te=U.state.transmissionRenderTarget[$.id],De=$.viewport||re;Te.setSize(De.z*N.transmissionResolutionScale,De.w*N.transmissionResolutionScale);const ze=N.getRenderTarget(),Fe=N.getActiveCubeFace(),$e=N.getActiveMipmapLevel();N.setRenderTarget(Te),N.getClearColor(P),j=N.getClearAlpha(),j<1&&N.setClearColor(16777215,.5),N.clear(),dt&&Me.render(ie);const tt=N.toneMapping;N.toneMapping=Ya;const Ze=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),U.setupLightsView($),le===!0&&We.setGlobalState(N.clippingPlanes,$),Xn(T,ie,$),at.updateMultisampleRenderTarget(Te),at.updateRenderTargetMipmap(Te),mt.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Et=0,Rt=X.length;Et<Rt;Et++){const St=X[Et],{object:Nt,geometry:Je,material:Xt,group:yt}=St;if(Xt.side===oa&&Nt.layers.test($.layers)){const _n=Xt.side;Xt.side=Vn,Xt.needsUpdate=!0,rn(Nt,ie,$,Je,Xt,yt),Xt.side=_n,Xt.needsUpdate=!0,ct=!0}}ct===!0&&(at.updateMultisampleRenderTarget(Te),at.updateRenderTargetMipmap(Te))}N.setRenderTarget(ze,Fe,$e),N.setClearColor(P,j),Ze!==void 0&&($.viewport=Ze),N.toneMapping=tt}function Xn(T,X,ie){const $=X.isScene===!0?X.overrideMaterial:null;for(let q=0,Te=T.length;q<Te;q++){const De=T[q],{object:ze,geometry:Fe,group:$e}=De;let tt=De.material;tt.allowOverride===!0&&$!==null&&(tt=$),ze.layers.test(ie.layers)&&rn(ze,X,ie,Fe,tt,$e)}}function rn(T,X,ie,$,q,Te){T.onBeforeRender(N,X,ie,$,q,Te),T.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(N,X,ie,$,T,Te),q.transparent===!0&&q.side===oa&&q.forceSinglePass===!1?(q.side=Vn,q.needsUpdate=!0,N.renderBufferDirect(ie,X,$,q,T,Te),q.side=ja,q.needsUpdate=!0,N.renderBufferDirect(ie,X,$,q,T,Te),q.side=oa):N.renderBufferDirect(ie,X,$,q,T,Te),T.onAfterRender(N,X,ie,$,q,Te)}function fn(T,X,ie){X.isScene!==!0&&(X=$t);const $=je.get(T),q=U.state.lights,Te=U.state.shadowsArray,De=q.state.version,ze=oe.getParameters(T,q.state,Te,X,ie),Fe=oe.getProgramCacheKey(ze);let $e=$.programs;$.environment=T.isMeshStandardMaterial?X.environment:null,$.fog=X.fog,$.envMap=(T.isMeshStandardMaterial?M:D).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?X.environmentRotation:T.envMapRotation,$e===void 0&&(T.addEventListener("dispose",it),$e=new Map,$.programs=$e);let tt=$e.get(Fe);if(tt!==void 0){if($.currentProgram===tt&&$.lightsStateVersion===De)return Rr(T,ze),tt}else ze.uniforms=oe.getUniforms(T),T.onBeforeCompile(ze,N),tt=oe.acquireProgram(ze,Fe),$e.set(Fe,tt),$.uniforms=ze.uniforms;const Ze=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ze.clippingPlanes=We.uniform),Rr(T,ze),$.needsLights=Vo(T),$.lightsStateVersion=De,$.needsLights&&(Ze.ambientLightColor.value=q.state.ambient,Ze.lightProbe.value=q.state.probe,Ze.directionalLights.value=q.state.directional,Ze.directionalLightShadows.value=q.state.directionalShadow,Ze.spotLights.value=q.state.spot,Ze.spotLightShadows.value=q.state.spotShadow,Ze.rectAreaLights.value=q.state.rectArea,Ze.ltc_1.value=q.state.rectAreaLTC1,Ze.ltc_2.value=q.state.rectAreaLTC2,Ze.pointLights.value=q.state.point,Ze.pointLightShadows.value=q.state.pointShadow,Ze.hemisphereLights.value=q.state.hemi,Ze.directionalShadowMap.value=q.state.directionalShadowMap,Ze.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ze.spotShadowMap.value=q.state.spotShadowMap,Ze.spotLightMatrix.value=q.state.spotLightMatrix,Ze.spotLightMap.value=q.state.spotLightMap,Ze.pointShadowMap.value=q.state.pointShadowMap,Ze.pointShadowMatrix.value=q.state.pointShadowMatrix),$.currentProgram=tt,$.uniformsList=null,tt}function Ni(T){if(T.uniformsList===null){const X=T.currentProgram.getUniforms();T.uniformsList=Mc.seqWithValue(X.seq,T.uniforms)}return T.uniformsList}function Rr(T,X){const ie=je.get(T);ie.outputColorSpace=X.outputColorSpace,ie.batching=X.batching,ie.batchingColor=X.batchingColor,ie.instancing=X.instancing,ie.instancingColor=X.instancingColor,ie.instancingMorph=X.instancingMorph,ie.skinning=X.skinning,ie.morphTargets=X.morphTargets,ie.morphNormals=X.morphNormals,ie.morphColors=X.morphColors,ie.morphTargetsCount=X.morphTargetsCount,ie.numClippingPlanes=X.numClippingPlanes,ie.numIntersection=X.numClipIntersection,ie.vertexAlphas=X.vertexAlphas,ie.vertexTangents=X.vertexTangents,ie.toneMapping=X.toneMapping}function Uc(T,X,ie,$,q){X.isScene!==!0&&(X=$t),at.resetTextureUnits();const Te=X.fog,De=$.isMeshStandardMaterial?X.environment:null,ze=R===null?N.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Es,Fe=($.isMeshStandardMaterial?M:D).get($.envMap||De),$e=$.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,tt=!!ie.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ze=!!ie.morphAttributes.position,ct=!!ie.morphAttributes.normal,Et=!!ie.morphAttributes.color;let Rt=Ya;$.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Rt=N.toneMapping);const St=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Nt=St!==void 0?St.length:0,Je=je.get($),Xt=U.state.lights;if(le===!0&&(Ce===!0||T!==ee)){const Sn=T===ee&&$.id===V;We.setState($,T,Sn)}let yt=!1;$.version===Je.__version?(Je.needsLights&&Je.lightsStateVersion!==Xt.state.version||Je.outputColorSpace!==ze||q.isBatchedMesh&&Je.batching===!1||!q.isBatchedMesh&&Je.batching===!0||q.isBatchedMesh&&Je.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Je.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Je.instancing===!1||!q.isInstancedMesh&&Je.instancing===!0||q.isSkinnedMesh&&Je.skinning===!1||!q.isSkinnedMesh&&Je.skinning===!0||q.isInstancedMesh&&Je.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Je.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Je.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Je.instancingMorph===!1&&q.morphTexture!==null||Je.envMap!==Fe||$.fog===!0&&Je.fog!==Te||Je.numClippingPlanes!==void 0&&(Je.numClippingPlanes!==We.numPlanes||Je.numIntersection!==We.numIntersection)||Je.vertexAlphas!==$e||Je.vertexTangents!==tt||Je.morphTargets!==Ze||Je.morphNormals!==ct||Je.morphColors!==Et||Je.toneMapping!==Rt||Je.morphTargetsCount!==Nt)&&(yt=!0):(yt=!0,Je.__version=$.version);let _n=Je.currentProgram;yt===!0&&(_n=fn($,X,q));let ma=!1,qt=!1,Oi=!1;const Yt=_n.getUniforms(),vn=Je.uniforms;if(Ge.useProgram(_n.program)&&(ma=!0,qt=!0,Oi=!0),$.id!==V&&(V=$.id,qt=!0),ma||ee!==T){Ge.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Yt.setValue(I,"projectionMatrix",T.projectionMatrix),Yt.setValue(I,"viewMatrix",T.matrixWorldInverse);const Mn=Yt.map.cameraPosition;Mn!==void 0&&Mn.setValue(I,Xe.setFromMatrixPosition(T.matrixWorld)),Ot.logarithmicDepthBuffer&&Yt.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Yt.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),ee!==T&&(ee=T,qt=!0,Oi=!0)}if(q.isSkinnedMesh){Yt.setOptional(I,q,"bindMatrix"),Yt.setOptional(I,q,"bindMatrixInverse");const Sn=q.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Yt.setValue(I,"boneTexture",Sn.boneTexture,at))}q.isBatchedMesh&&(Yt.setOptional(I,q,"batchingTexture"),Yt.setValue(I,"batchingTexture",q._matricesTexture,at),Yt.setOptional(I,q,"batchingIdTexture"),Yt.setValue(I,"batchingIdTexture",q._indirectTexture,at),Yt.setOptional(I,q,"batchingColorTexture"),q._colorsTexture!==null&&Yt.setValue(I,"batchingColorTexture",q._colorsTexture,at));const dn=ie.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&Ye.update(q,ie,_n),(qt||Je.receiveShadow!==q.receiveShadow)&&(Je.receiveShadow=q.receiveShadow,Yt.setValue(I,"receiveShadow",q.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(vn.envMap.value=Fe,vn.flipEnvMap.value=Fe.isCubeTexture&&Fe.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&X.environment!==null&&(vn.envMapIntensity.value=X.environmentIntensity),vn.dfgLUT!==void 0&&(vn.dfgLUT.value=UE()),qt&&(Yt.setValue(I,"toneMappingExposure",N.toneMappingExposure),Je.needsLights&&Lc(vn,Oi),Te&&$.fog===!0&&qe.refreshFogUniforms(vn,Te),qe.refreshMaterialUniforms(vn,$,_e,ge,U.state.transmissionRenderTarget[T.id]),Mc.upload(I,Ni(Je),vn,at)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Mc.upload(I,Ni(Je),vn,at),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Yt.setValue(I,"center",q.center),Yt.setValue(I,"modelViewMatrix",q.modelViewMatrix),Yt.setValue(I,"normalMatrix",q.normalMatrix),Yt.setValue(I,"modelMatrix",q.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const Sn=$.uniformsGroups;for(let Mn=0,Ei=Sn.length;Mn<Ei;Mn++){const zi=Sn[Mn];we.update(zi,_n),we.bind(zi,_n)}}return _n}function Lc(T,X){T.ambientLightColor.needsUpdate=X,T.lightProbe.needsUpdate=X,T.directionalLights.needsUpdate=X,T.directionalLightShadows.needsUpdate=X,T.pointLights.needsUpdate=X,T.pointLightShadows.needsUpdate=X,T.spotLights.needsUpdate=X,T.spotLightShadows.needsUpdate=X,T.rectAreaLights.needsUpdate=X,T.hemisphereLights.needsUpdate=X}function Vo(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,X,ie){const $=je.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),je.get(T.texture).__webglTexture=X,je.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:ie,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,X){const ie=je.get(T);ie.__webglFramebuffer=X,ie.__useDefaultFramebuffer=X===void 0};const Ja=I.createFramebuffer();this.setRenderTarget=function(T,X=0,ie=0){R=T,J=X,w=ie;let $=!0,q=null,Te=!1,De=!1;if(T){const Fe=je.get(T);if(Fe.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(I.FRAMEBUFFER,null),$=!1;else if(Fe.__webglFramebuffer===void 0)at.setupRenderTarget(T);else if(Fe.__hasExternalTextures)at.rebindTextures(T,je.get(T.texture).__webglTexture,je.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ze=T.depthTexture;if(Fe.__boundDepthTexture!==Ze){if(Ze!==null&&je.has(Ze)&&(T.width!==Ze.image.width||T.height!==Ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");at.setupDepthRenderbuffer(T)}}const $e=T.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(De=!0);const tt=je.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(tt[X])?q=tt[X][ie]:q=tt[X],Te=!0):T.samples>0&&at.useMultisampledRTT(T)===!1?q=je.get(T).__webglMultisampledFramebuffer:Array.isArray(tt)?q=tt[ie]:q=tt,re.copy(T.viewport),he.copy(T.scissor),fe=T.scissorTest}else re.copy(ye).multiplyScalar(_e).floor(),he.copy(Ee).multiplyScalar(_e).floor(),fe=Oe;if(ie!==0&&(q=Ja),Ge.bindFramebuffer(I.FRAMEBUFFER,q)&&$&&Ge.drawBuffers(T,q),Ge.viewport(re),Ge.scissor(he),Ge.setScissorTest(fe),Te){const Fe=je.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+X,Fe.__webglTexture,ie)}else if(De){const Fe=X;for(let $e=0;$e<T.textures.length;$e++){const tt=je.get(T.textures[$e]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+$e,tt.__webglTexture,ie,Fe)}}else if(T!==null&&ie!==0){const Fe=je.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Fe.__webglTexture,ie)}V=-1},this.readRenderTargetPixels=function(T,X,ie,$,q,Te,De,ze=0){if(!(T&&T.isWebGLRenderTarget)){nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=je.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&De!==void 0&&(Fe=Fe[De]),Fe){Ge.bindFramebuffer(I.FRAMEBUFFER,Fe);try{const $e=T.textures[ze],tt=$e.format,Ze=$e.type;if(!Ot.textureFormatReadable(tt)){nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(Ze)){nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=T.width-$&&ie>=0&&ie<=T.height-q&&(T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ze),I.readPixels(X,ie,$,q,nt.convert(tt),nt.convert(Ze),Te))}finally{const $e=R!==null?je.get(R).__webglFramebuffer:null;Ge.bindFramebuffer(I.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(T,X,ie,$,q,Te,De,ze=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=je.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&De!==void 0&&(Fe=Fe[De]),Fe)if(X>=0&&X<=T.width-$&&ie>=0&&ie<=T.height-q){Ge.bindFramebuffer(I.FRAMEBUFFER,Fe);const $e=T.textures[ze],tt=$e.format,Ze=$e.type;if(!Ot.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(Ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ct=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ct),I.bufferData(I.PIXEL_PACK_BUFFER,Te.byteLength,I.STREAM_READ),T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+ze),I.readPixels(X,ie,$,q,nt.convert(tt),nt.convert(Ze),0);const Et=R!==null?je.get(R).__webglFramebuffer:null;Ge.bindFramebuffer(I.FRAMEBUFFER,Et);const Rt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await fy(I,Rt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ct),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Te),I.deleteBuffer(ct),I.deleteSync(Rt),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,X=null,ie=0){const $=Math.pow(2,-ie),q=Math.floor(T.image.width*$),Te=Math.floor(T.image.height*$),De=X!==null?X.x:0,ze=X!==null?X.y:0;at.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,ie,0,0,De,ze,q,Te),Ge.unbindTexture()};const Os=I.createFramebuffer(),pa=I.createFramebuffer();this.copyTextureToTexture=function(T,X,ie=null,$=null,q=0,Te=null){Te===null&&(q!==0?(Po("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Te=q,q=0):Te=0);let De,ze,Fe,$e,tt,Ze,ct,Et,Rt;const St=T.isCompressedTexture?T.mipmaps[Te]:T.image;if(ie!==null)De=ie.max.x-ie.min.x,ze=ie.max.y-ie.min.y,Fe=ie.isBox3?ie.max.z-ie.min.z:1,$e=ie.min.x,tt=ie.min.y,Ze=ie.isBox3?ie.min.z:0;else{const dn=Math.pow(2,-q);De=Math.floor(St.width*dn),ze=Math.floor(St.height*dn),T.isDataArrayTexture?Fe=St.depth:T.isData3DTexture?Fe=Math.floor(St.depth*dn):Fe=1,$e=0,tt=0,Ze=0}$!==null?(ct=$.x,Et=$.y,Rt=$.z):(ct=0,Et=0,Rt=0);const Nt=nt.convert(X.format),Je=nt.convert(X.type);let Xt;X.isData3DTexture?(at.setTexture3D(X,0),Xt=I.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(at.setTexture2DArray(X,0),Xt=I.TEXTURE_2D_ARRAY):(at.setTexture2D(X,0),Xt=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,X.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,X.unpackAlignment);const yt=I.getParameter(I.UNPACK_ROW_LENGTH),_n=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ma=I.getParameter(I.UNPACK_SKIP_PIXELS),qt=I.getParameter(I.UNPACK_SKIP_ROWS),Oi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,St.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,St.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$e),I.pixelStorei(I.UNPACK_SKIP_ROWS,tt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ze);const Yt=T.isDataArrayTexture||T.isData3DTexture,vn=X.isDataArrayTexture||X.isData3DTexture;if(T.isDepthTexture){const dn=je.get(T),Sn=je.get(X),Mn=je.get(dn.__renderTarget),Ei=je.get(Sn.__renderTarget);Ge.bindFramebuffer(I.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let zi=0;zi<Fe;zi++)Yt&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,je.get(T).__webglTexture,q,Ze+zi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,je.get(X).__webglTexture,Te,Rt+zi)),I.blitFramebuffer($e,tt,De,ze,ct,Et,De,ze,I.DEPTH_BUFFER_BIT,I.NEAREST);Ge.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(q!==0||T.isRenderTargetTexture||je.has(T)){const dn=je.get(T),Sn=je.get(X);Ge.bindFramebuffer(I.READ_FRAMEBUFFER,Os),Ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,pa);for(let Mn=0;Mn<Fe;Mn++)Yt?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,dn.__webglTexture,q,Ze+Mn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,dn.__webglTexture,q),vn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Sn.__webglTexture,Te,Rt+Mn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Sn.__webglTexture,Te),q!==0?I.blitFramebuffer($e,tt,De,ze,ct,Et,De,ze,I.COLOR_BUFFER_BIT,I.NEAREST):vn?I.copyTexSubImage3D(Xt,Te,ct,Et,Rt+Mn,$e,tt,De,ze):I.copyTexSubImage2D(Xt,Te,ct,Et,$e,tt,De,ze);Ge.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else vn?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(Xt,Te,ct,Et,Rt,De,ze,Fe,Nt,Je,St.data):X.isCompressedArrayTexture?I.compressedTexSubImage3D(Xt,Te,ct,Et,Rt,De,ze,Fe,Nt,St.data):I.texSubImage3D(Xt,Te,ct,Et,Rt,De,ze,Fe,Nt,Je,St):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Te,ct,Et,De,ze,Nt,Je,St.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Te,ct,Et,St.width,St.height,Nt,St.data):I.texSubImage2D(I.TEXTURE_2D,Te,ct,Et,De,ze,Nt,Je,St);I.pixelStorei(I.UNPACK_ROW_LENGTH,yt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_n),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ma),I.pixelStorei(I.UNPACK_SKIP_ROWS,qt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Oi),Te===0&&X.generateMipmaps&&I.generateMipmap(Xt),Ge.unbindTexture()},this.initRenderTarget=function(T){je.get(T).__webglFramebuffer===void 0&&at.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?at.setTextureCube(T,0):T.isData3DTexture?at.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?at.setTexture2DArray(T,0):at.setTexture2D(T,0),Ge.unbindTexture()},this.resetState=function(){J=0,w=0,R=null,Ge.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(t),i.unpackColorSpace=Dt._getUnpackColorSpace()}}const NE=Object.assign({"../portfolio-images/aerial-reverie/AR-clip-after-intro.mp4":$v,"../portfolio-images/aerial-reverie/AR-clip-intro.mp4":eS,"../portfolio-images/aerial-reverie/AR-clip-spiraling.mp4":tS,"../portfolio-images/aerial-reverie/AR-clip-spirals-start.mp4":nS,"../portfolio-images/aerial-reverie/aerial-reverie.mp4":iS,"../portfolio-images/aerial-reverie/process-stills-2.png":aS,"../portfolio-images/aerial-reverie/still-1.jpg":rS,"../portfolio-images/aerial-reverie/still-2.jpg":sS,"../portfolio-images/aerial-reverie/still-3.jpg":oS,"../portfolio-images/aerial-reverie/still-4.jpg":lS,"../portfolio-images/aligned/gallery-w-ml.png":cS,"../portfolio-images/aligned/pcb-schematic.png":uS,"../portfolio-images/aligned/thumbnail.png":fS,"../portfolio-images/kinetic-pixels/header_tiles.mp4":dS,"../portfolio-images/kinetic-pixels/thumbnail.png":hS,"../portfolio-images/kinetic-pixels/tiles_all.png":pS,"../portfolio-images/nuwa/gallery.png":mS,"../portfolio-images/nuwa/thumbnail2.png":xS,"../portfolio-images/pawlink/header.png":gS,"../portfolio-images/pawlink/pawlink.png":_S,"../portfolio-images/pawlink/thumbnail.png":vS,"../portfolio-images/single-fibre/dither_it_figure-1.png":SS,"../portfolio-images/spirit-oasis/thumbnail.png":yS}),pn=o=>{if(!o)return"";const i=`../portfolio-images/${o.replace(/^\.?\/?src\/portfolio-images\/?/,"").replace(/^\.?\/?portfolio-images\/?/,"")}`;return NE[i]||""};function OE({getImg:o}){const t=["china","iran","morocco","spain","portugal","mexico","india","turkey"],i=sa.useRef({}),r=sa.useRef(!1),l=[...t.slice(0,4).flatMap(u=>[{key:`${u}_ca`,country:u,type:"ca"},{key:`${u}_drone`,country:u,type:"drone"}]),...t.slice(4).flatMap(u=>[{key:`${u}_drone`,country:u,type:"drone"},{key:`${u}_ca`,country:u,type:"ca"}])];return sa.useEffect(()=>{r.current||(r.current=!0,t.forEach(u=>{const d=i.current[`${u}_ca`],h=i.current[`${u}_drone`];if(!d||!h)return;let m=!1,p=!1;const x=()=>{if(!m||!p)return;const _=Math.min(d.duration,h.duration);if(!_||!isFinite(_))return;const S=Math.random()*_;d.currentTime=S,h.currentTime=S,d.play().catch(()=>{}),h.play().catch(()=>{})};d.addEventListener("loadedmetadata",()=>{m=!0,x()},{once:!0}),h.addEventListener("loadedmetadata",()=>{p=!0,x()},{once:!0})}))},[]),Pe.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(8, 1fr)",gridTemplateRows:"repeat(2, 1fr)",width:"100%",aspectRatio:"8 / 2",gap:0,overflow:"hidden"},children:l.map(({key:u,country:d,type:h})=>Pe.jsx("video",{ref:m=>i.current[u]=m,src:o(`/src/portfolio-images/kinetic-pixels/mp4/${d}_${h==="ca"?"ca":"drone_sim"}.mp4`),muted:!0,playsInline:!0,preload:"auto",loop:!0,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}},u))})}function zE(){const o=sa.useRef(null),t=sa.useRef({x:0,y:0}),[i,r]=sa.useState("All"),[l,u]=sa.useState(null),d=[{id:1,title:"Kinetic Pixels",category:"Tech",thumbnail:pn("/src/portfolio-images/kinetic-pixels/thumbnail.png"),description:"Kinetic Pixels explores data as cultural material to be crafted and dynamically configured by coordinated robots.",fullDescription:`Kinetic Pixels explores data as cultural material by translating symbolic, geographic, and historical information into rule-based mosaics that can be constructed by coordinated aerial robots. Drawing inspiration from global tile traditions—such as Chinese 花砖, Iberian azulejos, and Islamic zellige—the project engages practices where complex cultural meaning emerges from simple, modular repetition.

Eight globally representative tile cultures are encoded as sparse 9-bit cellular automaton rulesets, computed through a two-stage process that ensures global uniqueness. A shared geographic grammar establishes common structural constraints across all systems, while a second pass derives deterministic identity bits from ISO country codes and planetary parameters. This separation allows cultural similarity and difference to emerge through rule-based pattern formation, producing evolving mosaics whose spatial sequences reflect both continuity and variation over time.

To explore how these abstract rules might be materially constructed and transformed, Kinetic Pixels computes a realistic simulation of a coordinated swarm flight trajectories to assemble and reconfigure mosaics frame by frame. Transitions are executed through distance-aware task allocation, collision-constrained trajectory planning, and frame-to-frame tile reuse, enabling efficient addition, removal, and transfer of tiles as patterns evolve. Cellular automaton outputs are mapped from discrete grids to real-world spatial coordinates, grounding rule-based pattern formation in feasible multi-robot motion.

By treating computation as a contemporary form of craft, Kinetic Pixels reframes tiles as both the building blocks of cities and the building blocks of data-driven space—asking how robotic systems might participate in the cultural production of material patterns, rather than merely executing them.`,details:{year:"2025",role:"Solo",mediums:"Python, ROS, MatLab"},images:[{type:"video",src:pn("/src/portfolio-images/kinetic-pixels/header_tiles.mp4"),layout:"full"},{src:pn("/src/portfolio-images/kinetic-pixels/tiles_all.png"),layout:"full"}]},{id:1,title:"Aerial Reverie",category:"Tech",thumbnail:pn("/src/portfolio-images/aerial-reverie/still-1.jpg"),description:"An immersive VR storyworld illuminated by coordinated Crazyflie drone flight paths",fullDescription:"Aerial Reverie is an immersive VR storyworld illuminated by the motion of Crazyflie drones, their coordinated flight paths controlled via Python and ROS. The choreographed trajectories assemble a dynamic cityscape that becomes both simulation and narrative device, examining collective intelligence, industrial expansion, and the tension between nature, home, and rapidly evolving built environments.",details:{year:"2024",role:"Creative Director, Programming, 3D Modeling",mediums:"Python, ROS, Crazyflie Drones, Blender, After Effects, Ableton Live, Meta Quest 2"},images:[{type:"video",src:pn("/src/portfolio-images/aerial-reverie/aerial-reverie.mp4"),layout:"full"},{type:"video-row",items:[pn("/src/portfolio-images/aerial-reverie/AR-clip-intro.mp4"),pn("/src/portfolio-images/aerial-reverie/AR-clip-after-intro.mp4"),pn("/src/portfolio-images/aerial-reverie/AR-clip-spirals-start.mp4"),pn("/src/portfolio-images/aerial-reverie/AR-clip-spiraling.mp4")]},{type:"image",src:pn("/src/portfolio-images/aerial-reverie/process-stills-2.png"),layout:"full"}]},{id:2,title:"PawLink",category:"Tech",thumbnail:pn("/src/portfolio-images/pawlink/thumbnail.png"),description:"Smart-fabric collar with embedded sensors for continuous animal health monitoring",fullDescription:`PawLink is an integrated smart-fabric collar that leverages thermally drawn fiber technology with embedded capacitive and thermistor sensors to enable continuous, fabric-level inference.

A compact ML classifier runs on collar-side data to detect behavioral patterns such as excessive scratching (linked to allergies, infections, or skin irritation), track temperature changes and activity levels for health and exercise monitoring, and activate a safety protocol: a “Lost Mode” that detects nearby humans to broadcast signals.

PawLink demonstrates how computational textiles can function as compassionate, adaptive interfaces for animal wellbeing.`,details:{year:"2024",role:"Software & Hardware Integration, Product Design",mediums:"Arduino, ML, Thermally Drawn Fibers, Weaving Loom, Metal Hardware"},images:[{src:pn("/src/portfolio-images/pawlink/pawlink.png"),layout:"full"}]},{id:3,title:"Aligned",category:"Tech",thumbnail:pn("/src/portfolio-images/aligned/thumbnail.png"),description:"Smart-fabric posture-sensing system with real-time ML-based detection and haptic feedback",fullDescription:`Aligned is a smart-fabric posture-sensing system integrating a custom PCB with four I²C-networked accelerometers and a vibration motor for haptic feedback.

A lightweight machine-learning model distinguishes upright vs. slouched posture in real time, forming the foundation for a textile-embedded interface that supports healthier body awareness.

The system includes both a fully functioning prototype demonstrating real-time posture detection and a complete hardware pipeline, from circuit schematic to manufactured PCB, ready for textile integration in future iterations.`,details:{year:"2024",role:"Software Lead (ML + Arduino), Hardware",mediums:"KiCad, Custom PCB, I²C, ML, Haptic Feedback"},images:[{src:pn("/src/portfolio-images/aligned/gallery-w-ml.png"),layout:"full"}]},{id:4,title:"NÜWA",category:"Fashion",thumbnail:pn("/src/portfolio-images/nuwa/thumbnail2.png"),description:"Modernized hanfu and qipao challenging techno-Orientalist narratives through textile craft",fullDescription:`Showcased at Fashion@Brown Runway Show 2024 & Rhode Island Fashion Week 2024.

Ancient deity, new cyborg. One with earth, integrated in cyberspace.

In techno-Orientalism, the West views the Chinese body in contradicting space-times: a relic of the past and a future both feared and desired. It seeks to collect a drop of what the Chinese body can provide — culture, technology, sex — and in turn, create a perverse reality with its voyeuristic eyes.

How can women of the Chinese diaspora reject and subsequently remake this techno-orientalist framework?

Embody the paradox of temporalities and collapse contrasting timescales into the present moment. Primordial, earth-forming goddess and futuristic robot condensed into one in the Now: the modern woman. Fetishization, subjugation by the malicious eye — we repair the wounds of our broken heavens with our molded clay bodies and the garments that adorn them.

By crafting modernized hanfu and qipao dresses, interweaving the histories of silk and brocade with technology, the Chinese body is situated in all timeframes, toppling the binarist narrative generated by the West. Placed before the public eye, Nüwa asks the audience to confront the simultaneous pleasure and discomfort of the techno-Orientalist paradigm.`,details:{year:"2024",role:"Solo",mediums:"Brocade, Silk, LEDs"},images:[{src:pn("/src/portfolio-images/nuwa/gallery.png"),layout:"full"}]},{id:5,title:"Spirit Oasis",category:"Tech",thumbnail:pn("/src/portfolio-images/spirit-oasis/thumbnail.png"),description:"A reimagined 3D scene from Avatar: The Last Airbender with realistic water and lighting",fullDescription:`This project is a reimagination of a scene in the episode 'The Siege of the North' from Avatar: the Last Airbender. In the Spirit Oasis, two koi fish Tui and La maintain the balance between the Earth and the Moon. When the fish are disturbed, chaos ensues. 

 Using ThreeJS and Blender, we modeled this scene using realistic water effects, lighting changes, and koi fish interaction.`,details:{year:"2023",role:"Procedural Water + Grass, Custom Watercolor Toon Shading, 3D Modeling",mediums:"Three.js, Blender, GLSL"},images:[{type:"iframe",src:"https://spirit-oasis.vercel.app/",layout:"full"}]}],h=["All","Tech","Fashion"],m=i==="All"?d:d.filter(x=>x.category===i),p=x=>{const _=document.getElementById(x);_&&_.scrollIntoView({behavior:"smooth",block:"start"})};return sa.useEffect(()=>{if(!o.current)return;let x,_,S,b,A,C;const y=new Wy,v=J=>{if(!o.current)return;const w=o.current.getBoundingClientRect();t.current={x:(J.clientX-w.left)/w.width*2-1,y:-((J.clientY-w.top)/w.height)*2+1}};window.addEventListener("mousemove",v);const O=12,U=Array.from({length:O}).map(()=>({pos:new Ut(Math.random()*2-1,Math.random()*2-1),scale:.4+Math.random()*.4,timeOffset:Math.random()*10,rotation:Math.random()*Math.PI*2})),F=`
      varying vec2 vUv;
      void main(){
        vUv = uv;
        gl_Position = vec4(position,1.0);
      }
    `,k=`
      precision highp float;
      varying vec2 vUv;

      uniform float u_time;
      uniform vec2 u_resolution;

      uniform vec2 u_pos[${O}];
      uniform float u_scale[${O}];
      uniform float u_timeOffset[${O}];
      uniform float u_rot[${O}];
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

        for(int i = 0; i < ${O}; i++){

          vec2 center = u_pos[i];
          float sc = u_scale[i];
          float offs = u_timeOffset[i];
          float rot = u_rot[i];

          vec2 p = (uv - center) / sc;
          p = rotate(p, rot);

          // Mouse distance effect
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

          vec3 orchidColor = 0.55 + 0.45 * vec3(
            0.9 + 0.1 * sin(t + p.x * 3.0),
            0.5 + 0.5 * sin(t * 1.2),
            1.0
          ) * pulse;

          float glow = 0.08 / (length(p) + 0.03);
          vec3 glowCol = vec3(0.8, 0.6, 1.0) * glow;

          col += orchidColor * shape * 0.8;
          col += glowCol * 0.5;
        }

        gl_FragColor = vec4(col, 1.0);
      }
    `,N=`
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

        gl_FragColor = vec4(color.rgb * ch, 1.0);
      }
    `;return(()=>{if(!o.current)return;const J=window.innerWidth,w=window.innerHeight;for(;o.current.firstChild;)o.current.removeChild(o.current.firstChild);x=new LE({antialias:!0}),x.setSize(J,w),x.setClearColor(0,1),o.current.appendChild(x.domElement),_=new Ug(-1,1,1,-1,0,1),A=new Za(J,w);const R=new Mi({vertexShader:F,fragmentShader:k,uniforms:{u_time:{value:0},u_resolution:{value:new Ut(J,w)},u_pos:{value:U.map(re=>re.pos)},u_scale:{value:U.map(re=>re.scale)},u_timeOffset:{value:U.map(re=>re.timeOffset)},u_rot:{value:U.map(re=>re.rotation)},u_mouse:{value:new Ut(0,0)}}});S=new zx,S.add(new Li(new As(2,2),R));const V=new Mi({vertexShader:`
          varying vec2 vUv;
          void main(){ vUv = uv; gl_Position = vec4(position, 1.0); }
        `,fragmentShader:N,uniforms:{tDiffuse:{value:A.texture},resolution:{value:new Ut(J,w)},charSize:{value:8}}});b=new zx,b.add(new Li(new As(2,2),V));const ee=()=>{C=requestAnimationFrame(ee);const re=y.getElapsedTime();R.uniforms.u_time.value=re;const he=t.current.x,fe=t.current.y;R.uniforms.u_mouse.value.set(he,fe),x.setRenderTarget(A),x.render(S,_),x.setRenderTarget(null),x.render(b,_)};ee()})(),()=>{window.removeEventListener("mousemove",v),cancelAnimationFrame(C);try{x&&x.dispose(),A&&A.dispose(),x&&x.domElement&&o.current&&o.current.removeChild(x.domElement)}catch{}}},[]),Pe.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"auto"},children:[Pe.jsx("div",{ref:o,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:0}}),Pe.jsxs("div",{style:{position:"relative",zIndex:1,color:"white"},children:[l&&Pe.jsxs("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:200,overflowY:"auto",background:"rgba(0, 0, 0, 0.95)",backdropFilter:"blur(20px)"},children:[Pe.jsx("button",{onClick:()=>u(null),style:{position:"fixed",top:"2rem",right:"2rem",background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"50%",width:"50px",height:"50px",color:"white",fontSize:"1.5rem",cursor:"pointer",zIndex:201,display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"},onMouseEnter:x=>{x.target.style.background="rgba(255, 255, 255, 0.2)",x.target.style.borderColor="rgba(255, 255, 255, 0.4)"},onMouseLeave:x=>{x.target.style.background="rgba(255, 255, 255, 0.1)",x.target.style.borderColor="rgba(255, 255, 255, 0.2)"},children:"×"}),Pe.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"3rem 2rem"},children:[Pe.jsxs("div",{style:{marginBottom:"1rem"},children:[Pe.jsx("span",{style:{fontSize:"1.0rem",color:"rgba(255, 255, 255, 0.5)",textTransform:"uppercase",letterSpacing:"0.1em"},children:l.category}),Pe.jsx("h1",{className:"font-argent-normal",style:{fontSize:"2.3rem",fontWeight:"300",margin:"1rem 0",textShadow:"0 0 20px rgba(0,0,0,0.8)"},children:l.title}),Pe.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto max-content 1fr",columnGap:"2rem",marginBottom:"1rem",background:"rgba(0, 0, 0, 0.4)",backdropFilter:"blur(10px)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"8px",padding:"1rem"},children:[Pe.jsxs("div",{children:[Pe.jsx("div",{style:{fontSize:"0.8rem",color:"rgba(255, 255, 255, 0.5)",marginBottom:"0.4rem"},children:"Year"}),Pe.jsx("div",{style:{fontSize:"0.9rem",fontWeight:"400"},children:l.details.year})]}),Pe.jsxs("div",{children:[Pe.jsx("div",{style:{fontSize:"0.8rem",color:"rgba(255, 255, 255, 0.5)",marginBottom:"0.4rem"},children:"Role"}),Pe.jsx("div",{style:{fontSize:"0.9rem",fontWeight:"400"},children:l.details.role})]}),Pe.jsxs("div",{children:[Pe.jsx("div",{style:{fontSize:"0.8rem",color:"rgba(255, 255, 255, 0.5)",marginBottom:"0.4rem"},children:"Mediums"}),Pe.jsx("div",{style:{fontSize:"0.9rem",fontWeight:"400"},children:l.details.mediums})]})]}),Pe.jsx("p",{style:{fontSize:"1.1rem",fontWeight:300,color:"rgba(255, 255, 255, 0.7)",maxWidth:"100%",lineHeight:"1.25",whiteSpace:"pre-line"},children:l.fullDescription})]}),Pe.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"1rem"},children:l.images.map((x,_)=>{const S={full:{width:"100%",flexBasis:"100%"},half:{width:"calc(50% - 0.5rem)",flexBasis:"calc(50% - 0.5rem)"},third:{width:"calc(33.333% - 0.67rem)",flexBasis:"calc(33.333% - 0.67rem)"},quarter:{width:"calc(25% - 0.75rem)",flexBasis:"calc(25% - 0.75rem)"},"two-thirds":{width:"calc(66.666% - 0.5rem)",flexBasis:"calc(66.666% - 0.5rem)"}},b=x.layout||"full",A=S[b];return Pe.jsx("div",{style:{...A,minHeight:x.type==="video-row"?"auto":"300px",background:"transparent",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.9rem",color:"rgba(255, 255, 255, 0.3)",overflow:"hidden"},children:x.type==="iframe"?Pe.jsx("div",{style:{position:"relative",width:"100%",paddingBottom:"56.25%",height:0,borderRadius:"8px",overflow:"hidden",background:"rgba(255, 255, 255, 0.05)"},children:Pe.jsx("iframe",{src:x.src,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"none"},loading:"lazy",allow:"fullscreen"})}):x.type==="video-row"?Pe.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"0.75rem",width:"100%"},children:x.items.map((C,y)=>Pe.jsx("video",{src:C,alt:`Aerial Reverie mp4 ${y+1}`,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"auto",style:{width:"100%",height:"auto",display:"block",borderRadius:"6px",objectFit:"cover"}},y))}):x.type==="video"?(()=>{const C=x.src.includes("kinetic-pixels/header_tiles");return Pe.jsx("video",{src:x.src,autoPlay:!0,loop:C,muted:C,controls:!C,playsInline:!0,preload:"auto",style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px",pointerEvents:C?"none":"auto"}})})():x.src?Pe.jsx("img",{src:x.src,alt:x.placeholder,style:{width:"100%",height:"100%",objectFit:"cover"}}):x.type==="kinetic-grid"?Pe.jsx("div",{style:{width:"100%",margin:"0.5rem 0"},children:Pe.jsx(OE,{getImg:pn})}):x.placeholder},_)})})]})]}),Pe.jsxs("nav",{style:{position:"fixed",top:0,left:0,right:0,padding:"1.5rem 2rem",background:"rgba(0, 0, 0, 0.5)",backdropFilter:"blur(10px)",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",zIndex:100,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Pe.jsx("div",{className:"font-argent-italic",style:{fontSize:"1.3rem",fontWeight:"400"},children:"vivian li"}),Pe.jsxs("div",{style:{display:"flex",gap:"2rem"},children:[Pe.jsx("button",{onClick:()=>p("publications"),style:{background:"none",border:"none",color:"white",cursor:"pointer",fontSize:"1rem",opacity:.8,transition:"opacity 0.2s"},onMouseEnter:x=>x.target.style.opacity=1,onMouseLeave:x=>x.target.style.opacity=.8,children:"Publications"}),Pe.jsx("button",{onClick:()=>p("portfolio"),style:{background:"none",border:"none",color:"white",cursor:"pointer",fontSize:"1rem",opacity:.8,transition:"opacity 0.2s"},onMouseEnter:x=>x.target.style.opacity=1,onMouseLeave:x=>x.target.style.opacity=.8,children:"Portfolio"})]})]}),Pe.jsxs("div",{style:{minHeight:"45vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"1rem 2rem",textAlign:"center",paddingTop:"5rem"},children:[Pe.jsx("h1",{className:"font-argent-italic",style:{fontSize:"4.5rem",fontWeight:"100",marginBottom:"0.5rem",textShadow:"0 0 40px rgba(0,0,0,1), 0 0 30px rgba(0,0,0,1), 0 0 20px rgba(0,0,0,1), 0 0 10px rgba(0,0,0,1), 2px 2px 8px rgba(0,0,0,1)"},children:"vivian li"}),Pe.jsx("p",{className:"dotgothic16-regular",style:{fontSize:"1rem",maxWidth:"900px",lineHeight:"1.5",textShadow:"none"},children:Pe.jsxs("span",{className:"text-slab",children:["I explore how computation can emerge from material behavior. Working across computational design, digital fabrication, computer graphics, and HCI, I develop reconfigurable textile and soft-material systems where sensing, logic, and actuation are encoded into geometry and structure.",Pe.jsx("br",{}),Pe.jsx("br",{}),"I am currently a researcher in the Computational Design Group @ Brown Visual Computing Lab and pursuing an Sc.M. in Electrical & Computer Engineering. I received my Sc.B. in Computer Science from Brown University."]})})]}),Pe.jsxs("div",{id:"publications",style:{padding:"0.5rem 2rem",maxWidth:"1200px",margin:"0 auto"},children:[Pe.jsx("h2",{className:"font-argent-normal",style:{fontSize:"2rem",fontWeight:"300",marginBottom:"1rem",textAlign:"center",textShadow:"0 0 20px rgba(0,0,0,0.8)"},children:"publications"}),Pe.jsxs("div",{onClick:()=>window.open("https://www.nature.com/articles/s41586-024-08568-6","_blank"),style:{background:"rgba(0, 0, 0, 0.6)",backdropFilter:"blur(10px)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"8px",padding:"1.5rem",display:"flex",gap:"1.5rem",alignItems:"start",cursor:"pointer",transition:"transform 0.2s, border-color 0.2s"},onMouseEnter:x=>{x.currentTarget.style.transform="translateY(-4px)",x.currentTarget.style.borderColor="rgba(255, 255, 255, 0.3)"},onMouseLeave:x=>{x.currentTarget.style.transform="translateY(0)",x.currentTarget.style.borderColor="rgba(255, 255, 255, 0.1)"},children:[Pe.jsx("img",{src:pn("/src/portfolio-images/single-fibre/dither_it_figure-1.png"),alt:"Single-fibre computing publication",style:{width:"180px",height:"135px",borderRadius:"4px",flexShrink:0,objectFit:"cover"}}),Pe.jsxs("div",{style:{flex:1},children:[Pe.jsx("h3",{style:{fontSize:"1.2rem",fontWeight:"400",marginBottom:"0.4rem"},children:"A single-fibre computer enables textile networks and distributed inference"}),Pe.jsx("p",{style:{fontSize:"0.85rem",color:"rgba(255, 255, 255, 0.7)",marginBottom:"0.4rem"},children:"Gupta, N., Cheung, H., Payra, S., Loke, G., Li, J., Zhao, Y., Balachander, L., Son, E., Li, V., Kravitz, S., Lohawala, S., Joannopoulos, J., & Fink, Y."}),Pe.jsx("p",{style:{fontSize:"0.9rem",color:"rgba(255, 255, 255, 0.5)"},children:"Nature • 2025"})]})]})]}),Pe.jsxs("div",{id:"portfolio",style:{padding:"0.5rem 2rem 2.5rem 2rem",maxWidth:"1200px",margin:"0 auto"},children:[Pe.jsx("h2",{className:"font-argent-normal",style:{fontSize:"1.8rem",fontWeight:"300",marginBottom:"1rem",textAlign:"center",textShadow:"0 0 20px rgba(0,0,0,0.8)"},children:"portfolio"}),Pe.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"1rem",marginBottom:"2rem"},children:h.map(x=>Pe.jsx("button",{onClick:()=>r(x),style:{background:i===x?"rgba(255, 255, 255, 0.2)":"rgba(0, 0, 0, 0.4)",backdropFilter:"blur(10px)",border:`1px solid ${i===x?"rgba(255, 255, 255, 0.4)":"rgba(255, 255, 255, 0.1)"}`,borderRadius:"20px",padding:"0.5rem 1.5rem",color:"white",cursor:"pointer",fontSize:"0.9rem",fontWeight:i===x?"500":"300",transition:"all 0.3s ease"},onMouseEnter:_=>{i!==x&&(_.target.style.background="rgba(255, 255, 255, 0.1)",_.target.style.borderColor="rgba(255, 255, 255, 0.2)")},onMouseLeave:_=>{i!==x&&(_.target.style.background="rgba(0, 0, 0, 0.4)",_.target.style.borderColor="rgba(255, 255, 255, 0.1)")},children:x},x))}),Pe.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"2rem"},children:m.map(x=>Pe.jsxs("div",{onClick:()=>u(x),style:{background:"rgba(0, 0, 0, 0.6)",backdropFilter:"blur(10px)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"8px",overflow:"hidden",cursor:"pointer",transition:"transform 0.2s, border-color 0.2s"},onMouseEnter:_=>{_.currentTarget.style.transform="translateY(-4px)",_.currentTarget.style.borderColor="rgba(255, 255, 255, 0.3)"},onMouseLeave:_=>{_.currentTarget.style.transform="translateY(0)",_.currentTarget.style.borderColor="rgba(255, 255, 255, 0.1)"},children:[Pe.jsx("div",{style:{width:"100%",height:"200px",background:"rgba(255, 255, 255, 0.05)",position:"relative",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"},children:x.thumbnail?Pe.jsx("img",{src:x.thumbnail,alt:x.title,style:{width:"100%",height:"100%",objectFit:"cover",opacity:1}}):Pe.jsx("span",{style:{fontSize:"0.8rem",color:"rgba(255, 255, 255, 0.3)"},children:"Project Image"})}),Pe.jsxs("div",{style:{padding:"1.5rem"},children:[Pe.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.5rem"},children:[Pe.jsx("h3",{style:{fontSize:"1.0rem",fontWeight:"400",margin:0},children:x.title}),Pe.jsx("span",{style:{fontSize:"0.75rem",color:"rgba(255, 255, 255, 0.5)",background:"rgba(255, 255, 255, 0.1)",padding:"0.25rem 0.75rem",borderRadius:"12px"},children:x.category})]}),Pe.jsx("p",{style:{fontSize:"0.8rem",fontWeight:300,color:"rgba(255, 255, 255, 0.7)",margin:0},children:x.description})]})]},x.id))})]})]})]})}function PE(){return Pe.jsx(zE,{})}Jv.createRoot(document.getElementById("root")).render(Pe.jsx(Xv.StrictMode,{children:Pe.jsx(PE,{})}));
