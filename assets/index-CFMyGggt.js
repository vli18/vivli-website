(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function sg(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var Ff={exports:{}},Mo={};var tx;function Gv(){if(tx)return Mo;tx=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Mo.Fragment=e,Mo.jsx=i,Mo.jsxs=i,Mo}var ex;function Vv(){return ex||(ex=1,Ff.exports=Gv()),Ff.exports}var Vt=Vv(),If={exports:{}},re={};var nx;function kv(){if(nx)return re;nx=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),S=Symbol.iterator;function y(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,b={};function v(L,at,bt){this.props=L,this.context=at,this.refs=b,this.updater=bt||A}v.prototype.isReactComponent={},v.prototype.setState=function(L,at){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,at,"setState")},v.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function O(){}O.prototype=v.prototype;function U(L,at,bt){this.props=L,this.context=at,this.refs=b,this.updater=bt||A}var F=U.prototype=new O;F.constructor=U,C(F,v.prototype),F.isPureReactComponent=!0;var k=Array.isArray;function N(){}var B={H:null,A:null,T:null,S:null},J=Object.prototype.hasOwnProperty;function w(L,at,bt){var Et=bt.ref;return{$$typeof:o,type:L,key:at,ref:Et!==void 0?Et:null,props:bt}}function R(L,at){return w(L.type,at,L.props)}function V(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function tt(L){var at={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(bt){return at[bt]})}var rt=/\/+/g;function ht(L,at){return typeof L=="object"&&L!==null&&L.key!=null?tt(""+L.key):at.toString(36)}function ft(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(N,N):(L.status="pending",L.then(function(at){L.status==="pending"&&(L.status="fulfilled",L.value=at)},function(at){L.status==="pending"&&(L.status="rejected",L.reason=at)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function P(L,at,bt,Et,Ot){var nt=typeof L;(nt==="undefined"||nt==="boolean")&&(L=null);var lt=!1;if(L===null)lt=!0;else switch(nt){case"bigint":case"string":case"number":lt=!0;break;case"object":switch(L.$$typeof){case o:case e:lt=!0;break;case x:return lt=L._init,P(lt(L._payload),at,bt,Et,Ot)}}if(lt)return Ot=Ot(L),lt=Et===""?"."+ht(L,0):Et,k(Ot)?(bt="",lt!=null&&(bt=lt.replace(rt,"$&/")+"/"),P(Ot,at,bt,"",function(Xt){return Xt})):Ot!=null&&(V(Ot)&&(Ot=R(Ot,bt+(Ot.key==null||L&&L.key===Ot.key?"":(""+Ot.key).replace(rt,"$&/")+"/")+lt)),at.push(Ot)),1;lt=0;var Ct=Et===""?".":Et+":";if(k(L))for(var It=0;It<L.length;It++)Et=L[It],nt=Ct+ht(Et,It),lt+=P(Et,at,bt,nt,Ot);else if(It=y(L),typeof It=="function")for(L=It.call(L),It=0;!(Et=L.next()).done;)Et=Et.value,nt=Ct+ht(Et,It++),lt+=P(Et,at,bt,nt,Ot);else if(nt==="object"){if(typeof L.then=="function")return P(ft(L),at,bt,Et,Ot);throw at=String(L),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return lt}function j(L,at,bt){if(L==null)return L;var Et=[],Ot=0;return P(L,Et,"","",function(nt){return at.call(bt,nt,Ot++)}),Et}function Y(L){if(L._status===-1){var at=L._result;at=at(),at.then(function(bt){(L._status===0||L._status===-1)&&(L._status=1,L._result=bt)},function(bt){(L._status===0||L._status===-1)&&(L._status=2,L._result=bt)}),L._status===-1&&(L._status=0,L._result=at)}if(L._status===1)return L._result.default;throw L._result}var gt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},_t={map:j,forEach:function(L,at,bt){j(L,function(){at.apply(this,arguments)},bt)},count:function(L){var at=0;return j(L,function(){at++}),at},toArray:function(L){return j(L,function(at){return at})||[]},only:function(L){if(!V(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return re.Activity=_,re.Children=_t,re.Component=v,re.Fragment=i,re.Profiler=l,re.PureComponent=U,re.StrictMode=r,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=B,re.__COMPILER_RUNTIME={__proto__:null,c:function(L){return B.H.useMemoCache(L)}},re.cache=function(L){return function(){return L.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(L,at,bt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Et=C({},L.props),Ot=L.key;if(at!=null)for(nt in at.key!==void 0&&(Ot=""+at.key),at)!J.call(at,nt)||nt==="key"||nt==="__self"||nt==="__source"||nt==="ref"&&at.ref===void 0||(Et[nt]=at[nt]);var nt=arguments.length-2;if(nt===1)Et.children=bt;else if(1<nt){for(var lt=Array(nt),Ct=0;Ct<nt;Ct++)lt[Ct]=arguments[Ct+2];Et.children=lt}return w(L.type,Ot,Et)},re.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},re.createElement=function(L,at,bt){var Et,Ot={},nt=null;if(at!=null)for(Et in at.key!==void 0&&(nt=""+at.key),at)J.call(at,Et)&&Et!=="key"&&Et!=="__self"&&Et!=="__source"&&(Ot[Et]=at[Et]);var lt=arguments.length-2;if(lt===1)Ot.children=bt;else if(1<lt){for(var Ct=Array(lt),It=0;It<lt;It++)Ct[It]=arguments[It+2];Ot.children=Ct}if(L&&L.defaultProps)for(Et in lt=L.defaultProps,lt)Ot[Et]===void 0&&(Ot[Et]=lt[Et]);return w(L,nt,Ot)},re.createRef=function(){return{current:null}},re.forwardRef=function(L){return{$$typeof:h,render:L}},re.isValidElement=V,re.lazy=function(L){return{$$typeof:x,_payload:{_status:-1,_result:L},_init:Y}},re.memo=function(L,at){return{$$typeof:p,type:L,compare:at===void 0?null:at}},re.startTransition=function(L){var at=B.T,bt={};B.T=bt;try{var Et=L(),Ot=B.S;Ot!==null&&Ot(bt,Et),typeof Et=="object"&&Et!==null&&typeof Et.then=="function"&&Et.then(N,gt)}catch(nt){gt(nt)}finally{at!==null&&bt.types!==null&&(at.types=bt.types),B.T=at}},re.unstable_useCacheRefresh=function(){return B.H.useCacheRefresh()},re.use=function(L){return B.H.use(L)},re.useActionState=function(L,at,bt){return B.H.useActionState(L,at,bt)},re.useCallback=function(L,at){return B.H.useCallback(L,at)},re.useContext=function(L){return B.H.useContext(L)},re.useDebugValue=function(){},re.useDeferredValue=function(L,at){return B.H.useDeferredValue(L,at)},re.useEffect=function(L,at){return B.H.useEffect(L,at)},re.useEffectEvent=function(L){return B.H.useEffectEvent(L)},re.useId=function(){return B.H.useId()},re.useImperativeHandle=function(L,at,bt){return B.H.useImperativeHandle(L,at,bt)},re.useInsertionEffect=function(L,at){return B.H.useInsertionEffect(L,at)},re.useLayoutEffect=function(L,at){return B.H.useLayoutEffect(L,at)},re.useMemo=function(L,at){return B.H.useMemo(L,at)},re.useOptimistic=function(L,at){return B.H.useOptimistic(L,at)},re.useReducer=function(L,at,bt){return B.H.useReducer(L,at,bt)},re.useRef=function(L){return B.H.useRef(L)},re.useState=function(L){return B.H.useState(L)},re.useSyncExternalStore=function(L,at,bt){return B.H.useSyncExternalStore(L,at,bt)},re.useTransition=function(){return B.H.useTransition()},re.version="19.2.0",re}var ix;function ch(){return ix||(ix=1,If.exports=kv()),If.exports}var _s=ch();const Xv=sg(_s);var Hf={exports:{}},Eo={},Gf={exports:{}},Vf={};var ax;function Wv(){return ax||(ax=1,(function(o){function e(P,j){var Y=P.length;P.push(j);t:for(;0<Y;){var gt=Y-1>>>1,_t=P[gt];if(0<l(_t,j))P[gt]=j,P[Y]=_t,Y=gt;else break t}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var j=P[0],Y=P.pop();if(Y!==j){P[0]=Y;t:for(var gt=0,_t=P.length,L=_t>>>1;gt<L;){var at=2*(gt+1)-1,bt=P[at],Et=at+1,Ot=P[Et];if(0>l(bt,Y))Et<_t&&0>l(Ot,bt)?(P[gt]=Ot,P[Et]=Y,gt=Et):(P[gt]=bt,P[at]=Y,gt=at);else if(Et<_t&&0>l(Ot,Y))P[gt]=Ot,P[Et]=Y,gt=Et;else break t}}return j}function l(P,j){var Y=P.sortIndex-j.sortIndex;return Y!==0?Y:P.id-j.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],x=1,_=null,S=3,y=!1,A=!1,C=!1,b=!1,v=typeof setTimeout=="function"?setTimeout:null,O=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function F(P){for(var j=i(p);j!==null;){if(j.callback===null)r(p);else if(j.startTime<=P)r(p),j.sortIndex=j.expirationTime,e(m,j);else break;j=i(p)}}function k(P){if(C=!1,F(P),!A)if(i(m)!==null)A=!0,N||(N=!0,tt());else{var j=i(p);j!==null&&ft(k,j.startTime-P)}}var N=!1,B=-1,J=5,w=-1;function R(){return b?!0:!(o.unstable_now()-w<J)}function V(){if(b=!1,N){var P=o.unstable_now();w=P;var j=!0;try{t:{A=!1,C&&(C=!1,O(B),B=-1),y=!0;var Y=S;try{e:{for(F(P),_=i(m);_!==null&&!(_.expirationTime>P&&R());){var gt=_.callback;if(typeof gt=="function"){_.callback=null,S=_.priorityLevel;var _t=gt(_.expirationTime<=P);if(P=o.unstable_now(),typeof _t=="function"){_.callback=_t,F(P),j=!0;break e}_===i(m)&&r(m),F(P)}else r(m);_=i(m)}if(_!==null)j=!0;else{var L=i(p);L!==null&&ft(k,L.startTime-P),j=!1}}break t}finally{_=null,S=Y,y=!1}j=void 0}}finally{j?tt():N=!1}}}var tt;if(typeof U=="function")tt=function(){U(V)};else if(typeof MessageChannel<"u"){var rt=new MessageChannel,ht=rt.port2;rt.port1.onmessage=V,tt=function(){ht.postMessage(null)}}else tt=function(){v(V,0)};function ft(P,j){B=v(function(){P(o.unstable_now())},j)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(P){P.callback=null},o.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<P?Math.floor(1e3/P):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(P){switch(S){case 1:case 2:case 3:var j=3;break;default:j=S}var Y=S;S=j;try{return P()}finally{S=Y}},o.unstable_requestPaint=function(){b=!0},o.unstable_runWithPriority=function(P,j){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Y=S;S=P;try{return j()}finally{S=Y}},o.unstable_scheduleCallback=function(P,j,Y){var gt=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?gt+Y:gt):Y=gt,P){case 1:var _t=-1;break;case 2:_t=250;break;case 5:_t=1073741823;break;case 4:_t=1e4;break;default:_t=5e3}return _t=Y+_t,P={id:x++,callback:j,priorityLevel:P,startTime:Y,expirationTime:_t,sortIndex:-1},Y>gt?(P.sortIndex=Y,e(p,P),i(m)===null&&P===i(p)&&(C?(O(B),B=-1):C=!0,ft(k,Y-gt))):(P.sortIndex=_t,e(m,P),A||y||(A=!0,N||(N=!0,tt()))),P},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(P){var j=S;return function(){var Y=S;S=j;try{return P.apply(this,arguments)}finally{S=Y}}}})(Vf)),Vf}var rx;function qv(){return rx||(rx=1,Gf.exports=Wv()),Gf.exports}var kf={exports:{}},wn={};var sx;function Yv(){if(sx)return wn;sx=1;var o=ch();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)p+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,x){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:_==null?null:""+_,children:m,containerInfo:p,implementation:x}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(m,p){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,x)},wn.flushSync=function(m){var p=d.T,x=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=x,r.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var x=p.as,_=h(x,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;x==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:_,integrity:S,fetchPriority:y}):x==="script"&&r.d.X(m,{crossOrigin:_,integrity:S,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var x=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var x=p.as,_=h(x,p.crossOrigin);r.d.L(m,x,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var x=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:x,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},wn.requestFormReset=function(m){r.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,x){return d.H.useFormState(m,p,x)},wn.useFormStatus=function(){return d.H.useHostTransitionStatus()},wn.version="19.2.0",wn}var ox;function jv(){if(ox)return kf.exports;ox=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),kf.exports=Yv(),kf.exports}var lx;function Zv(){if(lx)return Eo;lx=1;var o=qv(),e=ch(),i=jv();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var g=!1,E=c.child;E;){if(E===a){g=!0,a=c,s=f;break}if(E===s){g=!0,s=c,a=f;break}E=E.sibling}if(!g){for(E=f.child;E;){if(E===a){g=!0,a=f,s=c;break}if(E===s){g=!0,s=f,a=c;break}E=E.sibling}if(!g)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function x(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=x(t),n!==null)return n;t=t.sibling}return null}var _=Object.assign,S=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),b=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),U=Symbol.for("react.context"),F=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),J=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),R=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function tt(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var rt=Symbol.for("react.client.reference");function ht(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===rt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case v:return"Profiler";case b:return"StrictMode";case k:return"Suspense";case N:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case U:return t.displayName||"Context";case O:return(t._context.displayName||"Context")+".Consumer";case F:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case B:return n=t.displayName||null,n!==null?n:ht(t.type)||"Memo";case J:n=t._payload,t=t._init;try{return ht(t(n))}catch{}}return null}var ft=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},gt=[],_t=-1;function L(t){return{current:t}}function at(t){0>_t||(t.current=gt[_t],gt[_t]=null,_t--)}function bt(t,n){_t++,gt[_t]=t.current,t.current=n}var Et=L(null),Ot=L(null),nt=L(null),lt=L(null);function Ct(t,n){switch(bt(nt,n),bt(Ot,t),bt(Et,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Mm(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Mm(n),t=Em(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}at(Et),bt(Et,t)}function It(){at(Et),at(Ot),at(nt)}function Xt(t){t.memoizedState!==null&&bt(lt,t);var n=Et.current,a=Em(n,t.type);n!==a&&(bt(Ot,t),bt(Et,a))}function le(t){Ot.current===t&&(at(Et),at(Ot)),lt.current===t&&(at(lt),vo._currentValue=Y)}var $e,de;function Te(t){if($e===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);$e=n&&n[1]||"",de=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$e+t+de}var I=!1;function he(t,n){if(!t||I)return"";I=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var mt=function(){throw Error()};if(Object.defineProperty(mt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(mt,[])}catch(st){var et=st}Reflect.construct(t,[],mt)}else{try{mt.call()}catch(st){et=st}t.call(mt.prototype)}}else{try{throw Error()}catch(st){et=st}(mt=t())&&typeof mt.catch=="function"&&mt.catch(function(){})}}catch(st){if(st&&et&&typeof st.stack=="string")return[st.stack,et.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),g=f[0],E=f[1];if(g&&E){var z=g.split(`
`),Q=E.split(`
`);for(c=s=0;s<z.length&&!z[s].includes("DetermineComponentFrameRoot");)s++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(s===z.length||c===Q.length)for(s=z.length-1,c=Q.length-1;1<=s&&0<=c&&z[s]!==Q[c];)c--;for(;1<=s&&0<=c;s--,c--)if(z[s]!==Q[c]){if(s!==1||c!==1)do if(s--,c--,0>c||z[s]!==Q[c]){var ut=`
`+z[s].replace(" at new "," at ");return t.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",t.displayName)),ut}while(1<=s&&0<=c);break}}}finally{I=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Te(a):""}function me(t,n){switch(t.tag){case 26:case 27:case 5:return Te(t.type);case 16:return Te("Lazy");case 13:return t.child!==n&&n!==null?Te("Suspense Fallback"):Te("Suspense");case 19:return Te("SuspenseList");case 0:case 15:return he(t.type,!1);case 11:return he(t.type.render,!1);case 1:return he(t.type,!0);case 31:return Te("Activity");default:return""}}function Oe(t){try{var n="",a=null;do n+=me(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Ht=Object.prototype.hasOwnProperty,ke=o.unstable_scheduleCallback,jt=o.unstable_cancelCallback,ae=o.unstable_shouldYield,D=o.unstable_requestPaint,M=o.unstable_now,K=o.unstable_getCurrentPriorityLevel,pt=o.unstable_ImmediatePriority,vt=o.unstable_UserBlockingPriority,ot=o.unstable_NormalPriority,qt=o.unstable_LowPriority,Ut=o.unstable_IdlePriority,Qt=o.log,Wt=o.unstable_setDisableYieldValue,St=null,Mt=null;function Yt(t){if(typeof Qt=="function"&&Wt(t),Mt&&typeof Mt.setStrictMode=="function")try{Mt.setStrictMode(St,t)}catch{}}var Gt=Math.clz32?Math.clz32:H,Nt=Math.log,ne=Math.LN2;function H(t){return t>>>=0,t===0?32:31-(Nt(t)/ne|0)|0}var wt=256,At=262144,Rt=4194304;function yt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?c=yt(s):(g&=E,g!==0?c=yt(g):a||(a=E&~t,a!==0&&(c=yt(a))))):(E=s&~f,E!==0?c=yt(E):g!==0?c=yt(g):a||(a=s&~t,a!==0&&(c=yt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Pt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ie(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Be(){var t=Rt;return Rt<<=1,(Rt&62914560)===0&&(Rt=4194304),t}function Ae(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Cn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function kn(t,n,a,s,c,f){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,z=t.expirationTimes,Q=t.hiddenUpdates;for(a=g&~a;0<a;){var ut=31-Gt(a),mt=1<<ut;E[ut]=0,z[ut]=-1;var et=Q[ut];if(et!==null)for(Q[ut]=null,ut=0;ut<et.length;ut++){var st=et[ut];st!==null&&(st.lane&=-536870913)}a&=~mt}s!==0&&Go(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(g&~n))}function Go(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Gt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Ds(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Gt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Us(t,n){var a=n&-n;return a=(a&42)!==0?1:hi(a),(a&(t.suspendedLanes|n))!==0?0:a}function hi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ka(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ls(){var t=j.p;return t!==0?t:(t=window.event,t===void 0?32:Ym(t.type))}function Ns(t,n){var a=j.p;try{return j.p=t,n()}finally{j.p=a}}var Xn=Math.random().toString(36).slice(2),rn="__reactFiber$"+Xn,fn="__reactProps$"+Xn,Ni="__reactContainer$"+Xn,Ar="__reactEvents$"+Xn,Uc="__reactListeners$"+Xn,Lc="__reactHandles$"+Xn,Vo="__reactResources$"+Xn,Qa="__reactMarker$"+Xn;function Os(t){delete t[rn],delete t[fn],delete t[Ar],delete t[Uc],delete t[Lc]}function ha(t){var n=t[rn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ni]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Um(t);t!==null;){if(a=t[rn])return a;t=Um(t)}return n}t=a,a=t.parentNode}return null}function T(t){if(t=t[rn]||t[Ni]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function X(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function it(t){var n=t[Vo];return n||(n=t[Vo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function $(t){t[Qa]=!0}var q=new Set,Tt={};function Dt(t,n){zt(t,n),zt(t+"Capture",n)}function zt(t,n){for(Tt[t]=n,t=0;t<n.length;t++)q.add(n[t])}var Bt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$t={},ee={};function Zt(t){return Ht.call(ee,t)?!0:Ht.call($t,t)?!1:Bt.test(t)?ee[t]=!0:($t[t]=!0,!1)}function ce(t,n,a){if(Zt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ee(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Re(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function Se(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ne(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jt(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(g){a=""+g,f.call(this,g)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Xe(t){if(!t._valueTracker){var n=Ne(t)?"checked":"value";t._valueTracker=Jt(t,n,""+t[n])}}function be(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Ne(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function gn(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var pa=/[\n"\\]/g;function qe(t){return t.replace(pa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Oi(t,n,a,s,c,f,g,E){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Se(n)):t.value!==""+Se(n)&&(t.value=""+Se(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?_n(t,g,Se(n)):a!=null?_n(t,g,Se(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+Se(E):t.removeAttribute("name")}function Ye(t,n,a,s,c,f,g,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Xe(t);return}a=a!=null?""+Se(a):"",n=n!=null?""+Se(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Xe(t)}function _n(t,n,a){n==="number"&&gn(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function dn(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Se(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function vn(t,n,a){if(n!=null&&(n=""+Se(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Se(a):""}function Mn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ft(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Se(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Xe(t)}function Ei(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var zi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Sh(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||zi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function bh(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Sh(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Sh(t,f,n[f])}function Nc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Bg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Fg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ko(t){return Fg.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Pi(){}var Oc=null;function zc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Rr=null,Cr=null;function yh(t){var n=T(t);if(n&&(t=n.stateNode)){var a=t[fn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Oi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+qe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[fn]||null;if(!c)throw Error(r(90));Oi(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&be(s)}break t;case"textarea":vn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&dn(t,!!a.multiple,n,!1)}}}var Pc=!1;function Mh(t,n,a){if(Pc)return t(n,a);Pc=!0;try{var s=t(n);return s}finally{if(Pc=!1,(Rr!==null||Cr!==null)&&(Dl(),Rr&&(n=Rr,t=Cr,Cr=Rr=null,yh(n),t)))for(n=0;n<t.length;n++)yh(t[n])}}function zs(t,n){var a=t.stateNode;if(a===null)return null;var s=a[fn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Bc=!1;if(Bi)try{var Ps={};Object.defineProperty(Ps,"passive",{get:function(){Bc=!0}}),window.addEventListener("test",Ps,Ps),window.removeEventListener("test",Ps,Ps)}catch{Bc=!1}var ma=null,Fc=null,Xo=null;function Eh(){if(Xo)return Xo;var t,n=Fc,a=n.length,s,c="value"in ma?ma.value:ma.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var g=a-t;for(s=1;s<=g&&n[a-s]===c[f-s];s++);return Xo=c.slice(t,1<s?1-s:void 0)}function Wo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function qo(){return!0}function Th(){return!1}function zn(t){function n(a,s,c,f,g){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?qo:Th,this.isPropagationStopped=Th,this}return _(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),n}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yo=zn(Ja),Bs=_({},Ja,{view:0,detail:0}),Ig=zn(Bs),Ic,Hc,Fs,jo=_({},Bs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Fs&&(Fs&&t.type==="mousemove"?(Ic=t.screenX-Fs.screenX,Hc=t.screenY-Fs.screenY):Hc=Ic=0,Fs=t),Ic)},movementY:function(t){return"movementY"in t?t.movementY:Hc}}),Ah=zn(jo),Hg=_({},jo,{dataTransfer:0}),Gg=zn(Hg),Vg=_({},Bs,{relatedTarget:0}),Gc=zn(Vg),kg=_({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),Xg=zn(kg),Wg=_({},Ja,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),qg=zn(Wg),Yg=_({},Ja,{data:0}),Rh=zn(Yg),jg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Kg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Qg(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=Kg[t])?!!n[t]:!1}function Vc(){return Qg}var Jg=_({},Bs,{key:function(t){if(t.key){var n=jg[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Wo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Zg[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vc,charCode:function(t){return t.type==="keypress"?Wo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Wo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),$g=zn(Jg),t_=_({},jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ch=zn(t_),e_=_({},Bs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vc}),n_=zn(e_),i_=_({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),a_=zn(i_),r_=_({},jo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),s_=zn(r_),o_=_({},Ja,{newState:0,oldState:0}),l_=zn(o_),c_=[9,13,27,32],kc=Bi&&"CompositionEvent"in window,Is=null;Bi&&"documentMode"in document&&(Is=document.documentMode);var u_=Bi&&"TextEvent"in window&&!Is,wh=Bi&&(!kc||Is&&8<Is&&11>=Is),Dh=" ",Uh=!1;function Lh(t,n){switch(t){case"keyup":return c_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wr=!1;function f_(t,n){switch(t){case"compositionend":return Nh(n);case"keypress":return n.which!==32?null:(Uh=!0,Dh);case"textInput":return t=n.data,t===Dh&&Uh?null:t;default:return null}}function d_(t,n){if(wr)return t==="compositionend"||!kc&&Lh(t,n)?(t=Eh(),Xo=Fc=ma=null,wr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return wh&&n.locale!=="ko"?null:n.data;default:return null}}var h_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Oh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!h_[t.type]:n==="textarea"}function zh(t,n,a,s){Rr?Cr?Cr.push(s):Cr=[s]:Rr=s,n=Bl(n,"onChange"),0<n.length&&(a=new Yo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Hs=null,Gs=null;function p_(t){gm(t,0)}function Zo(t){var n=X(t);if(be(n))return t}function Ph(t,n){if(t==="change")return n}var Bh=!1;if(Bi){var Xc;if(Bi){var Wc="oninput"in document;if(!Wc){var Fh=document.createElement("div");Fh.setAttribute("oninput","return;"),Wc=typeof Fh.oninput=="function"}Xc=Wc}else Xc=!1;Bh=Xc&&(!document.documentMode||9<document.documentMode)}function Ih(){Hs&&(Hs.detachEvent("onpropertychange",Hh),Gs=Hs=null)}function Hh(t){if(t.propertyName==="value"&&Zo(Gs)){var n=[];zh(n,Gs,t,zc(t)),Mh(p_,n)}}function m_(t,n,a){t==="focusin"?(Ih(),Hs=n,Gs=a,Hs.attachEvent("onpropertychange",Hh)):t==="focusout"&&Ih()}function x_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Zo(Gs)}function g_(t,n){if(t==="click")return Zo(n)}function __(t,n){if(t==="input"||t==="change")return Zo(n)}function v_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Wn=typeof Object.is=="function"?Object.is:v_;function Vs(t,n){if(Wn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Ht.call(n,c)||!Wn(t[c],n[c]))return!1}return!0}function Gh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Vh(t,n){var a=Gh(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Gh(a)}}function kh(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?kh(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Xh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=gn(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=gn(t.document)}return n}function qc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var S_=Bi&&"documentMode"in document&&11>=document.documentMode,Dr=null,Yc=null,ks=null,jc=!1;function Wh(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;jc||Dr==null||Dr!==gn(s)||(s=Dr,"selectionStart"in s&&qc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),ks&&Vs(ks,s)||(ks=s,s=Bl(Yc,"onSelect"),0<s.length&&(n=new Yo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Dr)))}function $a(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ur={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},Zc={},qh={};Bi&&(qh=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function tr(t){if(Zc[t])return Zc[t];if(!Ur[t])return t;var n=Ur[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in qh)return Zc[t]=n[a];return t}var Yh=tr("animationend"),jh=tr("animationiteration"),Zh=tr("animationstart"),b_=tr("transitionrun"),y_=tr("transitionstart"),M_=tr("transitioncancel"),Kh=tr("transitionend"),Qh=new Map,Kc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Kc.push("scrollEnd");function pi(t,n){Qh.set(t,n),Dt(n,[t])}var Ko=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ni=[],Lr=0,Qc=0;function Qo(){for(var t=Lr,n=Qc=Lr=0;n<t;){var a=ni[n];ni[n++]=null;var s=ni[n];ni[n++]=null;var c=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,s!==null&&c!==null){var g=s.pending;g===null?c.next=c:(c.next=g.next,g.next=c),s.pending=c}f!==0&&Jh(a,c,f)}}function Jo(t,n,a,s){ni[Lr++]=t,ni[Lr++]=n,ni[Lr++]=a,ni[Lr++]=s,Qc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Jc(t,n,a,s){return Jo(t,n,a,s),$o(t)}function er(t,n){return Jo(t,null,null,n),$o(t)}function Jh(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Gt(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function $o(t){if(50<fo)throw fo=0,lf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Nr={};function E_(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,n,a,s){return new E_(t,n,a,s)}function $c(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Fi(t,n){var a=t.alternate;return a===null?(a=qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function $h(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function tl(t,n,a,s,c,f){var g=0;if(s=t,typeof t=="function")$c(t)&&(g=1);else if(typeof t=="string")g=wv(t,a,Et.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=qn(31,a,n,c),t.elementType=w,t.lanes=f,t;case C:return nr(a.children,c,f,n);case b:g=8,c|=24;break;case v:return t=qn(12,a,n,c|2),t.elementType=v,t.lanes=f,t;case k:return t=qn(13,a,n,c),t.elementType=k,t.lanes=f,t;case N:return t=qn(19,a,n,c),t.elementType=N,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:g=10;break t;case O:g=9;break t;case F:g=11;break t;case B:g=14;break t;case J:g=16,s=null;break t}g=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=qn(g,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function nr(t,n,a,s){return t=qn(7,t,s,n),t.lanes=a,t}function tu(t,n,a){return t=qn(6,t,null,n),t.lanes=a,t}function tp(t){var n=qn(18,null,null,0);return n.stateNode=t,n}function eu(t,n,a){return n=qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var ep=new WeakMap;function ii(t,n){if(typeof t=="object"&&t!==null){var a=ep.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Oe(n)},ep.set(t,n),n)}return{value:t,source:n,stack:Oe(n)}}var Or=[],zr=0,el=null,Xs=0,ai=[],ri=0,xa=null,Ti=1,Ai="";function Ii(t,n){Or[zr++]=Xs,Or[zr++]=el,el=t,Xs=n}function np(t,n,a){ai[ri++]=Ti,ai[ri++]=Ai,ai[ri++]=xa,xa=t;var s=Ti;t=Ai;var c=32-Gt(s)-1;s&=~(1<<c),a+=1;var f=32-Gt(n)+c;if(30<f){var g=c-c%5;f=(s&(1<<g)-1).toString(32),s>>=g,c-=g,Ti=1<<32-Gt(n)+c|a<<c|s,Ai=f+t}else Ti=1<<f|a<<c|s,Ai=t}function nu(t){t.return!==null&&(Ii(t,1),np(t,1,0))}function iu(t){for(;t===el;)el=Or[--zr],Or[zr]=null,Xs=Or[--zr],Or[zr]=null;for(;t===xa;)xa=ai[--ri],ai[ri]=null,Ai=ai[--ri],ai[ri]=null,Ti=ai[--ri],ai[ri]=null}function ip(t,n){ai[ri++]=Ti,ai[ri++]=Ai,ai[ri++]=xa,Ti=n.id,Ai=n.overflow,xa=t}var En=null,je=null,ye=!1,ga=null,si=!1,au=Error(r(519));function _a(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Ws(ii(n,t)),au}function ap(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[rn]=t,n[fn]=s,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<po.length;a++)ge(po[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),Ye(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),Mn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||bm(n.textContent,a)?(s.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),s.onScroll!=null&&ge("scroll",n),s.onScrollEnd!=null&&ge("scrollend",n),s.onClick!=null&&(n.onclick=Pi),n=!0):n=!1,n||_a(t,!0)}function rp(t){for(En=t.return;En;)switch(En.tag){case 5:case 31:case 13:si=!1;return;case 27:case 3:si=!0;return;default:En=En.return}}function Pr(t){if(t!==En)return!1;if(!ye)return rp(t),ye=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Mf(t.type,t.memoizedProps)),a=!a),a&&je&&_a(t),rp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));je=Dm(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));je=Dm(t)}else n===27?(n=je,La(t.type)?(t=Cf,Cf=null,je=t):je=n):je=En?li(t.stateNode.nextSibling):null;return!0}function ir(){je=En=null,ye=!1}function ru(){var t=ga;return t!==null&&(In===null?In=t:In.push.apply(In,t),ga=null),t}function Ws(t){ga===null?ga=[t]:ga.push(t)}var su=L(null),ar=null,Hi=null;function va(t,n,a){bt(su,n._currentValue),n._currentValue=a}function Gi(t){t._currentValue=su.current,at(su)}function ou(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function lu(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var g=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var z=0;z<n.length;z++)if(E.context===n[z]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),ou(f.return,a,t),s||(g=null);break t}f=E.next}}else if(c.tag===18){if(g=c.return,g===null)throw Error(r(341));g.lanes|=a,f=g.alternate,f!==null&&(f.lanes|=a),ou(g,a,t),g=null}else g=c.child;if(g!==null)g.return=c;else for(g=c;g!==null;){if(g===t){g=null;break}if(c=g.sibling,c!==null){c.return=g.return,g=c;break}g=g.return}c=g}}function Br(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var g=c.alternate;if(g===null)throw Error(r(387));if(g=g.memoizedProps,g!==null){var E=c.type;Wn(c.pendingProps.value,g.value)||(t!==null?t.push(E):t=[E])}}else if(c===lt.current){if(g=c.alternate,g===null)throw Error(r(387));g.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(vo):t=[vo])}c=c.return}t!==null&&lu(n,t,a,s),n.flags|=262144}function nl(t){for(t=t.firstContext;t!==null;){if(!Wn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function rr(t){ar=t,Hi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return sp(ar,t)}function il(t,n){return ar===null&&rr(t),sp(t,n)}function sp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Hi===null){if(t===null)throw Error(r(308));Hi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Hi=Hi.next=n;return a}var T_=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},A_=o.unstable_scheduleCallback,R_=o.unstable_NormalPriority,sn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function cu(){return{controller:new T_,data:new Map,refCount:0}}function qs(t){t.refCount--,t.refCount===0&&A_(R_,function(){t.controller.abort()})}var Ys=null,uu=0,Fr=0,Ir=null;function C_(t,n){if(Ys===null){var a=Ys=[];uu=0,Fr=pf(),Ir={status:"pending",value:void 0,then:function(s){a.push(s)}}}return uu++,n.then(op,op),n}function op(){if(--uu===0&&Ys!==null){Ir!==null&&(Ir.status="fulfilled");var t=Ys;Ys=null,Fr=0,Ir=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function w_(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var lp=P.S;P.S=function(t,n){W0=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&C_(t,n),lp!==null&&lp(t,n)};var sr=L(null);function fu(){var t=sr.current;return t!==null?t:We.pooledCache}function al(t,n){n===null?bt(sr,sr.current):bt(sr,n.pool)}function cp(){var t=fu();return t===null?null:{parent:sn._currentValue,pool:t}}var Hr=Error(r(460)),du=Error(r(474)),rl=Error(r(542)),sl={then:function(){}};function up(t){return t=t.status,t==="fulfilled"||t==="rejected"}function fp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Pi,Pi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,hp(t),t;default:if(typeof n.status=="string")n.then(Pi,Pi);else{if(t=We,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,hp(t),t}throw lr=n,Hr}}function or(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(lr=a,Hr):a}}var lr=null;function dp(){if(lr===null)throw Error(r(459));var t=lr;return lr=null,t}function hp(t){if(t===Hr||t===rl)throw Error(r(483))}var Gr=null,js=0;function ol(t){var n=js;return js+=1,Gr===null&&(Gr=[]),fp(Gr,t,n)}function Zs(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ll(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function pp(t){function n(W,G){if(t){var Z=W.deletions;Z===null?(W.deletions=[G],W.flags|=16):Z.push(G)}}function a(W,G){if(!t)return null;for(;G!==null;)n(W,G),G=G.sibling;return null}function s(W){for(var G=new Map;W!==null;)W.key!==null?G.set(W.key,W):G.set(W.index,W),W=W.sibling;return G}function c(W,G){return W=Fi(W,G),W.index=0,W.sibling=null,W}function f(W,G,Z){return W.index=Z,t?(Z=W.alternate,Z!==null?(Z=Z.index,Z<G?(W.flags|=67108866,G):Z):(W.flags|=67108866,G)):(W.flags|=1048576,G)}function g(W){return t&&W.alternate===null&&(W.flags|=67108866),W}function E(W,G,Z,dt){return G===null||G.tag!==6?(G=tu(Z,W.mode,dt),G.return=W,G):(G=c(G,Z),G.return=W,G)}function z(W,G,Z,dt){var Kt=Z.type;return Kt===C?ut(W,G,Z.props.children,dt,Z.key):G!==null&&(G.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===J&&or(Kt)===G.type)?(G=c(G,Z.props),Zs(G,Z),G.return=W,G):(G=tl(Z.type,Z.key,Z.props,null,W.mode,dt),Zs(G,Z),G.return=W,G)}function Q(W,G,Z,dt){return G===null||G.tag!==4||G.stateNode.containerInfo!==Z.containerInfo||G.stateNode.implementation!==Z.implementation?(G=eu(Z,W.mode,dt),G.return=W,G):(G=c(G,Z.children||[]),G.return=W,G)}function ut(W,G,Z,dt,Kt){return G===null||G.tag!==7?(G=nr(Z,W.mode,dt,Kt),G.return=W,G):(G=c(G,Z),G.return=W,G)}function mt(W,G,Z){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=tu(""+G,W.mode,Z),G.return=W,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case y:return Z=tl(G.type,G.key,G.props,null,W.mode,Z),Zs(Z,G),Z.return=W,Z;case A:return G=eu(G,W.mode,Z),G.return=W,G;case J:return G=or(G),mt(W,G,Z)}if(ft(G)||tt(G))return G=nr(G,W.mode,Z,null),G.return=W,G;if(typeof G.then=="function")return mt(W,ol(G),Z);if(G.$$typeof===U)return mt(W,il(W,G),Z);ll(W,G)}return null}function et(W,G,Z,dt){var Kt=G!==null?G.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Kt!==null?null:E(W,G,""+Z,dt);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case y:return Z.key===Kt?z(W,G,Z,dt):null;case A:return Z.key===Kt?Q(W,G,Z,dt):null;case J:return Z=or(Z),et(W,G,Z,dt)}if(ft(Z)||tt(Z))return Kt!==null?null:ut(W,G,Z,dt,null);if(typeof Z.then=="function")return et(W,G,ol(Z),dt);if(Z.$$typeof===U)return et(W,G,il(W,Z),dt);ll(W,Z)}return null}function st(W,G,Z,dt,Kt){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return W=W.get(Z)||null,E(G,W,""+dt,Kt);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case y:return W=W.get(dt.key===null?Z:dt.key)||null,z(G,W,dt,Kt);case A:return W=W.get(dt.key===null?Z:dt.key)||null,Q(G,W,dt,Kt);case J:return dt=or(dt),st(W,G,Z,dt,Kt)}if(ft(dt)||tt(dt))return W=W.get(Z)||null,ut(G,W,dt,Kt,null);if(typeof dt.then=="function")return st(W,G,Z,ol(dt),Kt);if(dt.$$typeof===U)return st(W,G,Z,il(G,dt),Kt);ll(G,dt)}return null}function Ft(W,G,Z,dt){for(var Kt=null,Ce=null,kt=G,ue=G=0,ve=null;kt!==null&&ue<Z.length;ue++){kt.index>ue?(ve=kt,kt=null):ve=kt.sibling;var we=et(W,kt,Z[ue],dt);if(we===null){kt===null&&(kt=ve);break}t&&kt&&we.alternate===null&&n(W,kt),G=f(we,G,ue),Ce===null?Kt=we:Ce.sibling=we,Ce=we,kt=ve}if(ue===Z.length)return a(W,kt),ye&&Ii(W,ue),Kt;if(kt===null){for(;ue<Z.length;ue++)kt=mt(W,Z[ue],dt),kt!==null&&(G=f(kt,G,ue),Ce===null?Kt=kt:Ce.sibling=kt,Ce=kt);return ye&&Ii(W,ue),Kt}for(kt=s(kt);ue<Z.length;ue++)ve=st(kt,W,ue,Z[ue],dt),ve!==null&&(t&&ve.alternate!==null&&kt.delete(ve.key===null?ue:ve.key),G=f(ve,G,ue),Ce===null?Kt=ve:Ce.sibling=ve,Ce=ve);return t&&kt.forEach(function(Ba){return n(W,Ba)}),ye&&Ii(W,ue),Kt}function te(W,G,Z,dt){if(Z==null)throw Error(r(151));for(var Kt=null,Ce=null,kt=G,ue=G=0,ve=null,we=Z.next();kt!==null&&!we.done;ue++,we=Z.next()){kt.index>ue?(ve=kt,kt=null):ve=kt.sibling;var Ba=et(W,kt,we.value,dt);if(Ba===null){kt===null&&(kt=ve);break}t&&kt&&Ba.alternate===null&&n(W,kt),G=f(Ba,G,ue),Ce===null?Kt=Ba:Ce.sibling=Ba,Ce=Ba,kt=ve}if(we.done)return a(W,kt),ye&&Ii(W,ue),Kt;if(kt===null){for(;!we.done;ue++,we=Z.next())we=mt(W,we.value,dt),we!==null&&(G=f(we,G,ue),Ce===null?Kt=we:Ce.sibling=we,Ce=we);return ye&&Ii(W,ue),Kt}for(kt=s(kt);!we.done;ue++,we=Z.next())we=st(kt,W,ue,we.value,dt),we!==null&&(t&&we.alternate!==null&&kt.delete(we.key===null?ue:we.key),G=f(we,G,ue),Ce===null?Kt=we:Ce.sibling=we,Ce=we);return t&&kt.forEach(function(Hv){return n(W,Hv)}),ye&&Ii(W,ue),Kt}function He(W,G,Z,dt){if(typeof Z=="object"&&Z!==null&&Z.type===C&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case y:t:{for(var Kt=Z.key;G!==null;){if(G.key===Kt){if(Kt=Z.type,Kt===C){if(G.tag===7){a(W,G.sibling),dt=c(G,Z.props.children),dt.return=W,W=dt;break t}}else if(G.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===J&&or(Kt)===G.type){a(W,G.sibling),dt=c(G,Z.props),Zs(dt,Z),dt.return=W,W=dt;break t}a(W,G);break}else n(W,G);G=G.sibling}Z.type===C?(dt=nr(Z.props.children,W.mode,dt,Z.key),dt.return=W,W=dt):(dt=tl(Z.type,Z.key,Z.props,null,W.mode,dt),Zs(dt,Z),dt.return=W,W=dt)}return g(W);case A:t:{for(Kt=Z.key;G!==null;){if(G.key===Kt)if(G.tag===4&&G.stateNode.containerInfo===Z.containerInfo&&G.stateNode.implementation===Z.implementation){a(W,G.sibling),dt=c(G,Z.children||[]),dt.return=W,W=dt;break t}else{a(W,G);break}else n(W,G);G=G.sibling}dt=eu(Z,W.mode,dt),dt.return=W,W=dt}return g(W);case J:return Z=or(Z),He(W,G,Z,dt)}if(ft(Z))return Ft(W,G,Z,dt);if(tt(Z)){if(Kt=tt(Z),typeof Kt!="function")throw Error(r(150));return Z=Kt.call(Z),te(W,G,Z,dt)}if(typeof Z.then=="function")return He(W,G,ol(Z),dt);if(Z.$$typeof===U)return He(W,G,il(W,Z),dt);ll(W,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint"?(Z=""+Z,G!==null&&G.tag===6?(a(W,G.sibling),dt=c(G,Z),dt.return=W,W=dt):(a(W,G),dt=tu(Z,W.mode,dt),dt.return=W,W=dt),g(W)):a(W,G)}return function(W,G,Z,dt){try{js=0;var Kt=He(W,G,Z,dt);return Gr=null,Kt}catch(kt){if(kt===Hr||kt===rl)throw kt;var Ce=qn(29,kt,null,W.mode);return Ce.lanes=dt,Ce.return=W,Ce}finally{}}}var cr=pp(!0),mp=pp(!1),Sa=!1;function hu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function pu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ba(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ya(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Le&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=$o(t),Jh(t,null,a),n}return Jo(t,s,n,a),$o(t)}function Ks(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ds(t,a)}}function mu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var xu=!1;function Qs(){if(xu){var t=Ir;if(t!==null)throw t}}function Js(t,n,a,s){xu=!1;var c=t.updateQueue;Sa=!1;var f=c.firstBaseUpdate,g=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var z=E,Q=z.next;z.next=null,g===null?f=Q:g.next=Q,g=z;var ut=t.alternate;ut!==null&&(ut=ut.updateQueue,E=ut.lastBaseUpdate,E!==g&&(E===null?ut.firstBaseUpdate=Q:E.next=Q,ut.lastBaseUpdate=z))}if(f!==null){var mt=c.baseState;g=0,ut=Q=z=null,E=f;do{var et=E.lane&-536870913,st=et!==E.lane;if(st?(_e&et)===et:(s&et)===et){et!==0&&et===Fr&&(xu=!0),ut!==null&&(ut=ut.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Ft=t,te=E;et=n;var He=a;switch(te.tag){case 1:if(Ft=te.payload,typeof Ft=="function"){mt=Ft.call(He,mt,et);break t}mt=Ft;break t;case 3:Ft.flags=Ft.flags&-65537|128;case 0:if(Ft=te.payload,et=typeof Ft=="function"?Ft.call(He,mt,et):Ft,et==null)break t;mt=_({},mt,et);break t;case 2:Sa=!0}}et=E.callback,et!==null&&(t.flags|=64,st&&(t.flags|=8192),st=c.callbacks,st===null?c.callbacks=[et]:st.push(et))}else st={lane:et,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ut===null?(Q=ut=st,z=mt):ut=ut.next=st,g|=et;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;st=E,E=st.next,st.next=null,c.lastBaseUpdate=st,c.shared.pending=null}}while(!0);ut===null&&(z=mt),c.baseState=z,c.firstBaseUpdate=Q,c.lastBaseUpdate=ut,f===null&&(c.shared.lanes=0),Ra|=g,t.lanes=g,t.memoizedState=mt}}function xp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function gp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)xp(a[t],n)}var Vr=L(null),cl=L(0);function _p(t,n){t=Ki,bt(cl,t),bt(Vr,n),Ki=t|n.baseLanes}function gu(){bt(cl,Ki),bt(Vr,Vr.current)}function _u(){Ki=cl.current,at(Vr),at(cl)}var Yn=L(null),oi=null;function Ma(t){var n=t.alternate;bt(tn,tn.current&1),bt(Yn,t),oi===null&&(n===null||Vr.current!==null||n.memoizedState!==null)&&(oi=t)}function vu(t){bt(tn,tn.current),bt(Yn,t),oi===null&&(oi=t)}function vp(t){t.tag===22?(bt(tn,tn.current),bt(Yn,t),oi===null&&(oi=t)):Ea()}function Ea(){bt(tn,tn.current),bt(Yn,Yn.current)}function jn(t){at(Yn),oi===t&&(oi=null),at(tn)}var tn=L(0);function ul(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Af(a)||Rf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Vi=0,se=null,Fe=null,on=null,fl=!1,kr=!1,ur=!1,dl=0,$s=0,Xr=null,D_=0;function Qe(){throw Error(r(321))}function Su(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Wn(t[a],n[a]))return!1;return!0}function bu(t,n,a,s,c,f){return Vi=f,se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?n0:Pu,ur=!1,f=a(s,c),ur=!1,kr&&(f=bp(n,a,s,c)),Sp(t),f}function Sp(t){P.H=no;var n=Fe!==null&&Fe.next!==null;if(Vi=0,on=Fe=se=null,fl=!1,$s=0,Xr=null,n)throw Error(r(300));t===null||ln||(t=t.dependencies,t!==null&&nl(t)&&(ln=!0))}function bp(t,n,a,s){se=t;var c=0;do{if(kr&&(Xr=null),$s=0,kr=!1,25<=c)throw Error(r(301));if(c+=1,on=Fe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=i0,f=n(a,s)}while(kr);return f}function U_(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?to(n):n,t=t.useState()[0],(Fe!==null?Fe.memoizedState:null)!==t&&(se.flags|=1024),n}function yu(){var t=dl!==0;return dl=0,t}function Mu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Eu(t){if(fl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}fl=!1}Vi=0,on=Fe=se=null,kr=!1,$s=dl=0,Xr=null}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?se.memoizedState=on=t:on=on.next=t,on}function en(){if(Fe===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var n=on===null?se.memoizedState:on.next;if(n!==null)on=n,Fe=t;else{if(t===null)throw se.alternate===null?Error(r(467)):Error(r(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},on===null?se.memoizedState=on=t:on=on.next=t}return on}function hl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function to(t){var n=$s;return $s+=1,Xr===null&&(Xr=[]),t=fp(Xr,t,n),n=se,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?n0:Pu),t}function pl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return to(t);if(t.$$typeof===U)return Tn(t)}throw Error(r(438,String(t)))}function Tu(t){var n=null,a=se.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=se.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=hl(),se.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=R;return n.index++,a}function ki(t,n){return typeof n=="function"?n(t):n}function ml(t){var n=en();return Au(n,Fe,t)}function Au(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var g=c.next;c.next=f.next,f.next=g}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var E=g=null,z=null,Q=n,ut=!1;do{var mt=Q.lane&-536870913;if(mt!==Q.lane?(_e&mt)===mt:(Vi&mt)===mt){var et=Q.revertLane;if(et===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),mt===Fr&&(ut=!0);else if((Vi&et)===et){Q=Q.next,et===Fr&&(ut=!0);continue}else mt={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},z===null?(E=z=mt,g=f):z=z.next=mt,se.lanes|=et,Ra|=et;mt=Q.action,ur&&a(f,mt),f=Q.hasEagerState?Q.eagerState:a(f,mt)}else et={lane:mt,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},z===null?(E=z=et,g=f):z=z.next=et,se.lanes|=mt,Ra|=mt;Q=Q.next}while(Q!==null&&Q!==n);if(z===null?g=f:z.next=E,!Wn(f,t.memoizedState)&&(ln=!0,ut&&(a=Ir,a!==null)))throw a;t.memoizedState=f,t.baseState=g,t.baseQueue=z,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Ru(t){var n=en(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var g=c=c.next;do f=t(f,g.action),g=g.next;while(g!==c);Wn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function yp(t,n,a){var s=se,c=en(),f=ye;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var g=!Wn((Fe||c).memoizedState,a);if(g&&(c.memoizedState=a,ln=!0),c=c.queue,Du(Tp.bind(null,s,c,t),[t]),c.getSnapshot!==n||g||on!==null&&on.memoizedState.tag&1){if(s.flags|=2048,Wr(9,{destroy:void 0},Ep.bind(null,s,c,a,n),null),We===null)throw Error(r(349));f||(Vi&127)!==0||Mp(s,n,a)}return a}function Mp(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=se.updateQueue,n===null?(n=hl(),se.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Ep(t,n,a,s){n.value=a,n.getSnapshot=s,Ap(n)&&Rp(t)}function Tp(t,n,a){return a(function(){Ap(n)&&Rp(t)})}function Ap(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Wn(t,a)}catch{return!0}}function Rp(t){var n=er(t,2);n!==null&&Hn(n,t,2)}function Cu(t){var n=Ln();if(typeof t=="function"){var a=t;if(t=a(),ur){Yt(!0);try{a()}finally{Yt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:t},n}function Cp(t,n,a,s){return t.baseState=a,Au(t,Fe,typeof s=="function"?s:ki)}function L_(t,n,a,s,c){if(_l(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){f.listeners.push(g)}};P.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,wp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function wp(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=P.T,g={};P.T=g;try{var E=a(c,s),z=P.S;z!==null&&z(g,E),Dp(t,n,E)}catch(Q){wu(t,n,Q)}finally{f!==null&&g.types!==null&&(f.types=g.types),P.T=f}}else try{f=a(c,s),Dp(t,n,f)}catch(Q){wu(t,n,Q)}}function Dp(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Up(t,n,s)},function(s){return wu(t,n,s)}):Up(t,n,a)}function Up(t,n,a){n.status="fulfilled",n.value=a,Lp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,wp(t,a)))}function wu(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Lp(n),n=n.next;while(n!==s)}t.action=null}function Lp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Np(t,n){return n}function Op(t,n){if(ye){var a=We.formState;if(a!==null){t:{var s=se;if(ye){if(je){e:{for(var c=je,f=si;c.nodeType!==8;){if(!f){c=null;break e}if(c=li(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){je=li(c.nextSibling),s=c.data==="F!";break t}}_a(s)}s=!1}s&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Np,lastRenderedState:n},a.queue=s,a=$p.bind(null,se,s),s.dispatch=a,s=Cu(!1),f=zu.bind(null,se,!1,s.queue),s=Ln(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=L_.bind(null,se,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function zp(t){var n=en();return Pp(n,Fe,t)}function Pp(t,n,a){if(n=Au(t,n,Np)[0],t=ml(ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=to(n)}catch(g){throw g===Hr?rl:g}else s=n;n=en();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(se.flags|=2048,Wr(9,{destroy:void 0},N_.bind(null,c,a),null)),[s,f,t]}function N_(t,n){t.action=n}function Bp(t){var n=en(),a=Fe;if(a!==null)return Pp(n,a,t);en(),n=n.memoizedState,a=en();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Wr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=se.updateQueue,n===null&&(n=hl(),se.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Fp(){return en().memoizedState}function xl(t,n,a,s){var c=Ln();se.flags|=t,c.memoizedState=Wr(1|n,{destroy:void 0},a,s===void 0?null:s)}function gl(t,n,a,s){var c=en();s=s===void 0?null:s;var f=c.memoizedState.inst;Fe!==null&&s!==null&&Su(s,Fe.memoizedState.deps)?c.memoizedState=Wr(n,f,a,s):(se.flags|=t,c.memoizedState=Wr(1|n,f,a,s))}function Ip(t,n){xl(8390656,8,t,n)}function Du(t,n){gl(2048,8,t,n)}function O_(t){se.flags|=4;var n=se.updateQueue;if(n===null)n=hl(),se.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function Hp(t){var n=en().memoizedState;return O_({ref:n,nextImpl:t}),function(){if((Le&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Gp(t,n){return gl(4,2,t,n)}function Vp(t,n){return gl(4,4,t,n)}function kp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Xp(t,n,a){a=a!=null?a.concat([t]):null,gl(4,4,kp.bind(null,n,t),a)}function Uu(){}function Wp(t,n){var a=en();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&Su(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function qp(t,n){var a=en();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&Su(n,s[1]))return s[0];if(s=t(),ur){Yt(!0);try{t()}finally{Yt(!1)}}return a.memoizedState=[s,n],s}function Lu(t,n,a){return a===void 0||(Vi&1073741824)!==0&&(_e&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Y0(),se.lanes|=t,Ra|=t,a)}function Yp(t,n,a,s){return Wn(a,n)?a:Vr.current!==null?(t=Lu(t,a,s),Wn(t,n)||(ln=!0),t):(Vi&42)===0||(Vi&1073741824)!==0&&(_e&261930)===0?(ln=!0,t.memoizedState=a):(t=Y0(),se.lanes|=t,Ra|=t,n)}function jp(t,n,a,s,c){var f=j.p;j.p=f!==0&&8>f?f:8;var g=P.T,E={};P.T=E,zu(t,!1,n,a);try{var z=c(),Q=P.S;if(Q!==null&&Q(E,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var ut=w_(z,s);eo(t,n,ut,Qn(t))}else eo(t,n,s,Qn(t))}catch(mt){eo(t,n,{then:function(){},status:"rejected",reason:mt},Qn())}finally{j.p=f,g!==null&&E.types!==null&&(g.types=E.types),P.T=g}}function z_(){}function Nu(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=Zp(t).queue;jp(t,c,n,Y,a===null?z_:function(){return Kp(t),a(s)})}function Zp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Kp(t){var n=Zp(t);n.next===null&&(n=t.alternate.memoizedState),eo(t,n.next.queue,{},Qn())}function Ou(){return Tn(vo)}function Qp(){return en().memoizedState}function Jp(){return en().memoizedState}function P_(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();t=ba(a);var s=ya(n,t,a);s!==null&&(Hn(s,n,a),Ks(s,n,a)),n={cache:cu()},t.payload=n;return}n=n.return}}function B_(t,n,a){var s=Qn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},_l(t)?t0(n,a):(a=Jc(t,n,a,s),a!==null&&(Hn(a,t,s),e0(a,n,s)))}function $p(t,n,a){var s=Qn();eo(t,n,a,s)}function eo(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(_l(t))t0(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var g=n.lastRenderedState,E=f(g,a);if(c.hasEagerState=!0,c.eagerState=E,Wn(E,g))return Jo(t,n,c,0),We===null&&Qo(),!1}catch{}finally{}if(a=Jc(t,n,c,s),a!==null)return Hn(a,t,s),e0(a,n,s),!0}return!1}function zu(t,n,a,s){if(s={lane:2,revertLane:pf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},_l(t)){if(n)throw Error(r(479))}else n=Jc(t,a,s,2),n!==null&&Hn(n,t,2)}function _l(t){var n=t.alternate;return t===se||n!==null&&n===se}function t0(t,n){kr=fl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function e0(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Ds(t,a)}}var no={readContext:Tn,use:pl,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};no.useEffectEvent=Qe;var n0={readContext:Tn,use:pl,useCallback:function(t,n){return Ln().memoizedState=[t,n===void 0?null:n],t},useContext:Tn,useEffect:Ip,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,xl(4194308,4,kp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return xl(4194308,4,t,n)},useInsertionEffect:function(t,n){xl(4,2,t,n)},useMemo:function(t,n){var a=Ln();n=n===void 0?null:n;var s=t();if(ur){Yt(!0);try{t()}finally{Yt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Ln();if(a!==void 0){var c=a(n);if(ur){Yt(!0);try{a(n)}finally{Yt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=B_.bind(null,se,t),[s.memoizedState,t]},useRef:function(t){var n=Ln();return t={current:t},n.memoizedState=t},useState:function(t){t=Cu(t);var n=t.queue,a=$p.bind(null,se,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Uu,useDeferredValue:function(t,n){var a=Ln();return Lu(a,t,n)},useTransition:function(){var t=Cu(!1);return t=jp.bind(null,se,t.queue,!0,!1),Ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=se,c=Ln();if(ye){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),We===null)throw Error(r(349));(_e&127)!==0||Mp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Ip(Tp.bind(null,s,f,t),[t]),s.flags|=2048,Wr(9,{destroy:void 0},Ep.bind(null,s,f,a,n),null),a},useId:function(){var t=Ln(),n=We.identifierPrefix;if(ye){var a=Ai,s=Ti;a=(s&~(1<<32-Gt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=dl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=D_++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Ou,useFormState:Op,useActionState:Op,useOptimistic:function(t){var n=Ln();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=zu.bind(null,se,!0,a),a.dispatch=n,[t,n]},useMemoCache:Tu,useCacheRefresh:function(){return Ln().memoizedState=P_.bind(null,se)},useEffectEvent:function(t){var n=Ln(),a={impl:t};return n.memoizedState=a,function(){if((Le&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Pu={readContext:Tn,use:pl,useCallback:Wp,useContext:Tn,useEffect:Du,useImperativeHandle:Xp,useInsertionEffect:Gp,useLayoutEffect:Vp,useMemo:qp,useReducer:ml,useRef:Fp,useState:function(){return ml(ki)},useDebugValue:Uu,useDeferredValue:function(t,n){var a=en();return Yp(a,Fe.memoizedState,t,n)},useTransition:function(){var t=ml(ki)[0],n=en().memoizedState;return[typeof t=="boolean"?t:to(t),n]},useSyncExternalStore:yp,useId:Qp,useHostTransitionStatus:Ou,useFormState:zp,useActionState:zp,useOptimistic:function(t,n){var a=en();return Cp(a,Fe,t,n)},useMemoCache:Tu,useCacheRefresh:Jp};Pu.useEffectEvent=Hp;var i0={readContext:Tn,use:pl,useCallback:Wp,useContext:Tn,useEffect:Du,useImperativeHandle:Xp,useInsertionEffect:Gp,useLayoutEffect:Vp,useMemo:qp,useReducer:Ru,useRef:Fp,useState:function(){return Ru(ki)},useDebugValue:Uu,useDeferredValue:function(t,n){var a=en();return Fe===null?Lu(a,t,n):Yp(a,Fe.memoizedState,t,n)},useTransition:function(){var t=Ru(ki)[0],n=en().memoizedState;return[typeof t=="boolean"?t:to(t),n]},useSyncExternalStore:yp,useId:Qp,useHostTransitionStatus:Ou,useFormState:Bp,useActionState:Bp,useOptimistic:function(t,n){var a=en();return Fe!==null?Cp(a,Fe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Tu,useCacheRefresh:Jp};i0.useEffectEvent=Hp;function Bu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:_({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Fu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Qn(),c=ba(s);c.payload=n,a!=null&&(c.callback=a),n=ya(t,c,s),n!==null&&(Hn(n,t,s),Ks(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Qn(),c=ba(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ya(t,c,s),n!==null&&(Hn(n,t,s),Ks(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Qn(),s=ba(a);s.tag=2,n!=null&&(s.callback=n),n=ya(t,s,a),n!==null&&(Hn(n,t,a),Ks(n,t,a))}};function a0(t,n,a,s,c,f,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,g):n.prototype&&n.prototype.isPureReactComponent?!Vs(a,s)||!Vs(c,f):!0}function r0(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Fu.enqueueReplaceState(n,n.state,null)}function fr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=_({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function s0(t){Ko(t)}function o0(t){console.error(t)}function l0(t){Ko(t)}function vl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function c0(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Iu(t,n,a){return a=ba(a),a.tag=3,a.payload={element:null},a.callback=function(){vl(t,n)},a}function u0(t){return t=ba(t),t.tag=3,t}function f0(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){c0(n,a,s)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){c0(n,a,s),typeof c!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function F_(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Br(n,a,c,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return oi===null?Ul():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===sl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),ff(t,s,c)),!1;case 22:return a.flags|=65536,s===sl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),ff(t,s,c)),!1}throw Error(r(435,a.tag))}return ff(t,s,c),Ul(),!1}if(ye)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==au&&(t=Error(r(422),{cause:s}),Ws(ii(t,a)))):(s!==au&&(n=Error(r(423),{cause:s}),Ws(ii(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ii(s,a),c=Iu(t.stateNode,s,c),mu(t,c),Je!==4&&(Je=2)),!1;var f=Error(r(520),{cause:s});if(f=ii(f,a),uo===null?uo=[f]:uo.push(f),Je!==4&&(Je=2),n===null)return!0;s=ii(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Iu(a.stateNode,s,t),mu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ca===null||!Ca.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=u0(c),f0(c,t,a,s),mu(a,c),!1}a=a.return}while(a!==null);return!1}var Hu=Error(r(461)),ln=!1;function An(t,n,a,s){n.child=t===null?mp(n,null,a,s):cr(n,t.child,a,s)}function d0(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var g={};for(var E in s)E!=="ref"&&(g[E]=s[E])}else g=s;return rr(n),s=bu(t,n,a,g,f,c),E=yu(),t!==null&&!ln?(Mu(t,n,c),Xi(t,n,c)):(ye&&E&&nu(n),n.flags|=1,An(t,n,s,c),n.child)}function h0(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!$c(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,p0(t,n,f,s,c)):(t=tl(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!ju(t,c)){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:Vs,a(g,s)&&t.ref===n.ref)return Xi(t,n,c)}return n.flags|=1,t=Fi(f,s),t.ref=n.ref,t.return=n,n.child=t}function p0(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(Vs(f,s)&&t.ref===n.ref)if(ln=!1,n.pendingProps=s=f,ju(t,c))(t.flags&131072)!==0&&(ln=!0);else return n.lanes=t.lanes,Xi(t,n,c)}return Gu(t,n,a,s,c)}function m0(t,n,a,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return x0(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&al(n,f!==null?f.cachePool:null),f!==null?_p(n,f):gu(),vp(n);else return s=n.lanes=536870912,x0(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(al(n,f.cachePool),_p(n,f),Ea(),n.memoizedState=null):(t!==null&&al(n,null),gu(),Ea());return An(t,n,c,a),n.child}function io(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function x0(t,n,a,s,c){var f=fu();return f=f===null?null:{parent:sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&al(n,null),gu(),vp(n),t!==null&&Br(t,n,s,!0),n.childLanes=c,null}function Sl(t,n){return n=yl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function g0(t,n,a){return cr(n,t.child,null,a),t=Sl(n,n.pendingProps),t.flags|=2,jn(n),n.memoizedState=null,t}function I_(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ye){if(s.mode==="hidden")return t=Sl(n,s),n.lanes=536870912,io(null,t);if(vu(n),(t=je)?(t=wm(t,si),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:xa!==null?{id:Ti,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},a=tp(t),a.return=n,n.child=a,En=n,je=null)):t=null,t===null)throw _a(n);return n.lanes=536870912,null}return Sl(n,s)}var f=t.memoizedState;if(f!==null){var g=f.dehydrated;if(vu(n),c)if(n.flags&256)n.flags&=-257,n=g0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(ln||Br(t,n,a,!1),c=(a&t.childLanes)!==0,ln||c){if(s=We,s!==null&&(g=Us(s,a),g!==0&&g!==f.retryLane))throw f.retryLane=g,er(t,g),Hn(s,t,g),Hu;Ul(),n=g0(t,n,a)}else t=f.treeContext,je=li(g.nextSibling),En=n,ye=!0,ga=null,si=!1,t!==null&&ip(n,t),n=Sl(n,s),n.flags|=4096;return n}return t=Fi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function bl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Gu(t,n,a,s,c){return rr(n),a=bu(t,n,a,s,void 0,c),s=yu(),t!==null&&!ln?(Mu(t,n,c),Xi(t,n,c)):(ye&&s&&nu(n),n.flags|=1,An(t,n,a,c),n.child)}function _0(t,n,a,s,c,f){return rr(n),n.updateQueue=null,a=bp(n,s,a,c),Sp(t),s=yu(),t!==null&&!ln?(Mu(t,n,f),Xi(t,n,f)):(ye&&s&&nu(n),n.flags|=1,An(t,n,a,f),n.child)}function v0(t,n,a,s,c){if(rr(n),n.stateNode===null){var f=Nr,g=a.contextType;typeof g=="object"&&g!==null&&(f=Tn(g)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Fu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},hu(n),g=a.contextType,f.context=typeof g=="object"&&g!==null?Tn(g):Nr,f.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Bu(n,a,g,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(g=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),g!==f.state&&Fu.enqueueReplaceState(f,f.state,null),Js(n,s,f,c),Qs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,z=fr(a,E);f.props=z;var Q=f.context,ut=a.contextType;g=Nr,typeof ut=="object"&&ut!==null&&(g=Tn(ut));var mt=a.getDerivedStateFromProps;ut=typeof mt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||Q!==g)&&r0(n,f,s,g),Sa=!1;var et=n.memoizedState;f.state=et,Js(n,s,f,c),Qs(),Q=n.memoizedState,E||et!==Q||Sa?(typeof mt=="function"&&(Bu(n,a,mt,s),Q=n.memoizedState),(z=Sa||a0(n,a,z,s,et,Q,g))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Q),f.props=s,f.state=Q,f.context=g,s=z):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,pu(t,n),g=n.memoizedProps,ut=fr(a,g),f.props=ut,mt=n.pendingProps,et=f.context,Q=a.contextType,z=Nr,typeof Q=="object"&&Q!==null&&(z=Tn(Q)),E=a.getDerivedStateFromProps,(Q=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(g!==mt||et!==z)&&r0(n,f,s,z),Sa=!1,et=n.memoizedState,f.state=et,Js(n,s,f,c),Qs();var st=n.memoizedState;g!==mt||et!==st||Sa||t!==null&&t.dependencies!==null&&nl(t.dependencies)?(typeof E=="function"&&(Bu(n,a,E,s),st=n.memoizedState),(ut=Sa||a0(n,a,ut,s,et,st,z)||t!==null&&t.dependencies!==null&&nl(t.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,st,z),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,st,z)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=st),f.props=s,f.state=st,f.context=z,s=ut):(typeof f.componentDidUpdate!="function"||g===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,bl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=cr(n,t.child,null,c),n.child=cr(n,null,a,c)):An(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Xi(t,n,c),t}function S0(t,n,a,s){return ir(),n.flags|=256,An(t,n,a,s),n.child}var Vu={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function ku(t){return{baseLanes:t,cachePool:cp()}}function Xu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Kn),t}function b0(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,g;if((g=f)||(g=t!==null&&t.memoizedState===null?!1:(tn.current&2)!==0),g&&(c=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(ye){if(c?Ma(n):Ea(),(t=je)?(t=wm(t,si),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:xa!==null?{id:Ti,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},a=tp(t),a.return=n,n.child=a,En=n,je=null)):t=null,t===null)throw _a(n);return Rf(t)?n.lanes=32:n.lanes=536870912,null}var E=s.children;return s=s.fallback,c?(Ea(),c=n.mode,E=yl({mode:"hidden",children:E},c),s=nr(s,c,a,null),E.return=n,s.return=n,E.sibling=s,n.child=E,s=n.child,s.memoizedState=ku(a),s.childLanes=Xu(t,g,a),n.memoizedState=Vu,io(null,s)):(Ma(n),Wu(n,E))}var z=t.memoizedState;if(z!==null&&(E=z.dehydrated,E!==null)){if(f)n.flags&256?(Ma(n),n.flags&=-257,n=qu(t,n,a)):n.memoizedState!==null?(Ea(),n.child=t.child,n.flags|=128,n=null):(Ea(),E=s.fallback,c=n.mode,s=yl({mode:"visible",children:s.children},c),E=nr(E,c,a,null),E.flags|=2,s.return=n,E.return=n,s.sibling=E,n.child=s,cr(n,t.child,null,a),s=n.child,s.memoizedState=ku(a),s.childLanes=Xu(t,g,a),n.memoizedState=Vu,n=io(null,s));else if(Ma(n),Rf(E)){if(g=E.nextSibling&&E.nextSibling.dataset,g)var Q=g.dgst;g=Q,s=Error(r(419)),s.stack="",s.digest=g,Ws({value:s,source:null,stack:null}),n=qu(t,n,a)}else if(ln||Br(t,n,a,!1),g=(a&t.childLanes)!==0,ln||g){if(g=We,g!==null&&(s=Us(g,a),s!==0&&s!==z.retryLane))throw z.retryLane=s,er(t,s),Hn(g,t,s),Hu;Af(E)||Ul(),n=qu(t,n,a)}else Af(E)?(n.flags|=192,n.child=t.child,n=null):(t=z.treeContext,je=li(E.nextSibling),En=n,ye=!0,ga=null,si=!1,t!==null&&ip(n,t),n=Wu(n,s.children),n.flags|=4096);return n}return c?(Ea(),E=s.fallback,c=n.mode,z=t.child,Q=z.sibling,s=Fi(z,{mode:"hidden",children:s.children}),s.subtreeFlags=z.subtreeFlags&65011712,Q!==null?E=Fi(Q,E):(E=nr(E,c,a,null),E.flags|=2),E.return=n,s.return=n,s.sibling=E,n.child=s,io(null,s),s=n.child,E=t.child.memoizedState,E===null?E=ku(a):(c=E.cachePool,c!==null?(z=sn._currentValue,c=c.parent!==z?{parent:z,pool:z}:c):c=cp(),E={baseLanes:E.baseLanes|a,cachePool:c}),s.memoizedState=E,s.childLanes=Xu(t,g,a),n.memoizedState=Vu,io(t.child,s)):(Ma(n),a=t.child,t=a.sibling,a=Fi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function Wu(t,n){return n=yl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function yl(t,n){return t=qn(22,t,null,n),t.lanes=0,t}function qu(t,n,a){return cr(n,t.child,null,a),t=Wu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function y0(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),ou(t.return,n,a)}function Yu(t,n,a,s,c,f){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=s,g.tail=a,g.tailMode=c,g.treeForkCount=f)}function M0(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var g=tn.current,E=(g&2)!==0;if(E?(g=g&1|2,n.flags|=128):g&=1,bt(tn,g),An(t,n,s,a),s=ye?Xs:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&y0(t,a,n);else if(t.tag===19)y0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&ul(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Yu(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&ul(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}Yu(n,!0,a,null,f,s);break;case"together":Yu(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Xi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ra|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Br(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Fi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Fi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function ju(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&nl(t)))}function H_(t,n,a){switch(n.tag){case 3:Ct(n,n.stateNode.containerInfo),va(n,sn,t.memoizedState.cache),ir();break;case 27:case 5:Xt(n);break;case 4:Ct(n,n.stateNode.containerInfo);break;case 10:va(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,vu(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?b0(t,n,a):(Ma(n),t=Xi(t,n,a),t!==null?t.sibling:null);Ma(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Br(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return M0(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),bt(tn,tn.current),s)break;return null;case 22:return n.lanes=0,m0(t,n,a,n.pendingProps);case 24:va(n,sn,t.memoizedState.cache)}return Xi(t,n,a)}function E0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)ln=!0;else{if(!ju(t,a)&&(n.flags&128)===0)return ln=!1,H_(t,n,a);ln=(t.flags&131072)!==0}else ln=!1,ye&&(n.flags&1048576)!==0&&np(n,Xs,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=or(n.elementType),n.type=t,typeof t=="function")$c(t)?(s=fr(t,s),n.tag=1,n=v0(null,n,t,s,a)):(n.tag=0,n=Gu(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===F){n.tag=11,n=d0(null,n,t,s,a);break t}else if(c===B){n.tag=14,n=h0(null,n,t,s,a);break t}}throw n=ht(t)||t,Error(r(306,n,""))}}return n;case 0:return Gu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=fr(s,n.pendingProps),v0(t,n,s,c,a);case 3:t:{if(Ct(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,pu(t,n),Js(n,s,null,a);var g=n.memoizedState;if(s=g.cache,va(n,sn,s),s!==f.cache&&lu(n,[sn],a,!0),Qs(),s=g.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=S0(t,n,s,a);break t}else if(s!==c){c=ii(Error(r(424)),n),Ws(c),n=S0(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(je=li(t.firstChild),En=n,ye=!0,ga=null,si=!0,a=mp(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ir(),s===c){n=Xi(t,n,a);break t}An(t,n,s,a)}n=n.child}return n;case 26:return bl(t,n),t===null?(a=zm(n.type,null,n.pendingProps,null))?n.memoizedState=a:ye||(a=n.type,t=n.pendingProps,s=Fl(nt.current).createElement(a),s[rn]=n,s[fn]=t,Rn(s,a,t),$(s),n.stateNode=s):n.memoizedState=zm(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Xt(n),t===null&&ye&&(s=n.stateNode=Lm(n.type,n.pendingProps,nt.current),En=n,si=!0,c=je,La(n.type)?(Cf=c,je=li(s.firstChild)):je=c),An(t,n,n.pendingProps.children,a),bl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ye&&((c=s=je)&&(s=xv(s,n.type,n.pendingProps,si),s!==null?(n.stateNode=s,En=n,je=li(s.firstChild),si=!1,c=!0):c=!1),c||_a(n)),Xt(n),c=n.type,f=n.pendingProps,g=t!==null?t.memoizedProps:null,s=f.children,Mf(c,f)?s=null:g!==null&&Mf(c,g)&&(n.flags|=32),n.memoizedState!==null&&(c=bu(t,n,U_,null,null,a),vo._currentValue=c),bl(t,n),An(t,n,s,a),n.child;case 6:return t===null&&ye&&((t=a=je)&&(a=gv(a,n.pendingProps,si),a!==null?(n.stateNode=a,En=n,je=null,t=!0):t=!1),t||_a(n)),null;case 13:return b0(t,n,a);case 4:return Ct(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=cr(n,null,s,a):An(t,n,s,a),n.child;case 11:return d0(t,n,n.type,n.pendingProps,a);case 7:return An(t,n,n.pendingProps,a),n.child;case 8:return An(t,n,n.pendingProps.children,a),n.child;case 12:return An(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,va(n,n.type,s.value),An(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,rr(n),c=Tn(c),s=s(c),n.flags|=1,An(t,n,s,a),n.child;case 14:return h0(t,n,n.type,n.pendingProps,a);case 15:return p0(t,n,n.type,n.pendingProps,a);case 19:return M0(t,n,a);case 31:return I_(t,n,a);case 22:return m0(t,n,a,n.pendingProps);case 24:return rr(n),s=Tn(sn),t===null?(c=fu(),c===null&&(c=We,f=cu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},hu(n),va(n,sn,c)):((t.lanes&a)!==0&&(pu(t,n),Js(n,null,null,a),Qs()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),va(n,sn,s)):(s=f.cache,va(n,sn,s),s!==c.cache&&lu(n,[sn],a,!0))),An(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Wi(t){t.flags|=4}function Zu(t,n,a,s,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(Q0())t.flags|=8192;else throw lr=sl,du}else t.flags&=-16777217}function T0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!Hm(n))if(Q0())t.flags|=8192;else throw lr=sl,du}function Ml(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Be():536870912,t.lanes|=n,Zr|=n)}function ao(t,n){if(!ye)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ze(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function G_(t,n,a){var s=n.pendingProps;switch(iu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Gi(sn),It(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Pr(n)?Wi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ru())),Ze(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Wi(n),f!==null?(Ze(n),T0(n,f)):(Ze(n),Zu(n,c,null,s,a))):f?f!==t.memoizedState?(Wi(n),Ze(n),T0(n,f)):(Ze(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Wi(n),Ze(n),Zu(n,c,t,s,a)),null;case 27:if(le(n),a=nt.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Wi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}t=Et.current,Pr(n)?ap(n):(t=Lm(c,s,a),n.stateNode=t,Wi(n))}return Ze(n),null;case 5:if(le(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Wi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}if(f=Et.current,Pr(n))ap(n);else{var g=Fl(nt.current);switch(f){case 1:f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=g.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=g.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=g.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?g.createElement("select",{is:s.is}):g.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?g.createElement(c,{is:s.is}):g.createElement(c)}}f[rn]=n,f[fn]=s;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)f.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=f;t:switch(Rn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Wi(n)}}return Ze(n),Zu(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Wi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=nt.current,Pr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=En,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[rn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||bm(t.nodeValue,a)),t||_a(n,!0)}else t=Fl(t).createTextNode(s),t[rn]=n,n.stateNode=t}return Ze(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Pr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[rn]=n}else ir(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),t=!1}else a=ru(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(jn(n),n):(jn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ze(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Pr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[rn]=n}else ir(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),c=!1}else c=ru(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(jn(n),n):(jn(n),null)}return jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),Ml(n,n.updateQueue),Ze(n),null);case 4:return It(),t===null&&_f(n.stateNode.containerInfo),Ze(n),null;case 10:return Gi(n.type),Ze(n),null;case 19:if(at(tn),s=n.memoizedState,s===null)return Ze(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)ao(s,!1);else{if(Je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=ul(t),f!==null){for(n.flags|=128,ao(s,!1),t=f.updateQueue,n.updateQueue=t,Ml(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)$h(a,t),a=a.sibling;return bt(tn,tn.current&1|2),ye&&Ii(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&M()>Cl&&(n.flags|=128,c=!0,ao(s,!1),n.lanes=4194304)}else{if(!c)if(t=ul(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,Ml(n,t),ao(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!ye)return Ze(n),null}else 2*M()-s.renderingStartTime>Cl&&a!==536870912&&(n.flags|=128,c=!0,ao(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=M(),t.sibling=null,a=tn.current,bt(tn,c?a&1|2:a&1),ye&&Ii(n,s.treeForkCount),t):(Ze(n),null);case 22:case 23:return jn(n),_u(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&Ml(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&at(sr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Gi(sn),Ze(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function V_(t,n){switch(iu(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Gi(sn),It(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return le(n),null;case 31:if(n.memoizedState!==null){if(jn(n),n.alternate===null)throw Error(r(340));ir()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(jn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ir()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return at(tn),null;case 4:return It(),null;case 10:return Gi(n.type),null;case 22:case 23:return jn(n),_u(),t!==null&&at(sr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Gi(sn),null;case 25:return null;default:return null}}function A0(t,n){switch(iu(n),n.tag){case 3:Gi(sn),It();break;case 26:case 27:case 5:le(n);break;case 4:It();break;case 31:n.memoizedState!==null&&jn(n);break;case 13:jn(n);break;case 19:at(tn);break;case 10:Gi(n.type);break;case 22:case 23:jn(n),_u(),t!==null&&at(sr);break;case 24:Gi(sn)}}function ro(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,g=a.inst;s=f(),g.destroy=s}a=a.next}while(a!==c)}}catch(E){Pe(n,n.return,E)}}function Ta(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var g=s.inst,E=g.destroy;if(E!==void 0){g.destroy=void 0,c=n;var z=a,Q=E;try{Q()}catch(ut){Pe(c,z,ut)}}}s=s.next}while(s!==f)}}catch(ut){Pe(n,n.return,ut)}}function R0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{gp(n,a)}catch(s){Pe(t,t.return,s)}}}function C0(t,n,a){a.props=fr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Pe(t,n,s)}}function so(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Pe(t,n,c)}}function Ri(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Pe(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Pe(t,n,c)}else a.current=null}function w0(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Pe(t,t.return,c)}}function Ku(t,n,a){try{var s=t.stateNode;uv(s,t.type,a,n),s[fn]=n}catch(c){Pe(t,t.return,c)}}function D0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&La(t.type)||t.tag===4}function Qu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||D0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&La(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Ju(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Pi));else if(s!==4&&(s===27&&La(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Ju(t,n,a),t=t.sibling;t!==null;)Ju(t,n,a),t=t.sibling}function El(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&La(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(El(t,n,a),t=t.sibling;t!==null;)El(t,n,a),t=t.sibling}function U0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Rn(n,s,a),n[rn]=t,n[fn]=a}catch(f){Pe(t,t.return,f)}}var qi=!1,cn=!1,$u=!1,L0=typeof WeakSet=="function"?WeakSet:Set,Sn=null;function k_(t,n){if(t=t.containerInfo,bf=Wl,t=Xh(t),qc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var g=0,E=-1,z=-1,Q=0,ut=0,mt=t,et=null;e:for(;;){for(var st;mt!==a||c!==0&&mt.nodeType!==3||(E=g+c),mt!==f||s!==0&&mt.nodeType!==3||(z=g+s),mt.nodeType===3&&(g+=mt.nodeValue.length),(st=mt.firstChild)!==null;)et=mt,mt=st;for(;;){if(mt===t)break e;if(et===a&&++Q===c&&(E=g),et===f&&++ut===s&&(z=g),(st=mt.nextSibling)!==null)break;mt=et,et=mt.parentNode}mt=st}a=E===-1||z===-1?null:{start:E,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(yf={focusedElem:t,selectionRange:a},Wl=!1,Sn=n;Sn!==null;)if(n=Sn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,Sn=t;else for(;Sn!==null;){switch(n=Sn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Ft=fr(a.type,c);t=s.getSnapshotBeforeUpdate(Ft,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(te){Pe(a,a.return,te)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Tf(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Tf(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,Sn=t;break}Sn=n.return}}function N0(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ji(t,a),s&4&&ro(5,a);break;case 1:if(ji(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Pe(a,a.return,g)}else{var c=fr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Pe(a,a.return,g)}}s&64&&R0(a),s&512&&so(a,a.return);break;case 3:if(ji(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{gp(t,n)}catch(g){Pe(a,a.return,g)}}break;case 27:n===null&&s&4&&U0(a);case 26:case 5:ji(t,a),n===null&&s&4&&w0(a),s&512&&so(a,a.return);break;case 12:ji(t,a);break;case 31:ji(t,a),s&4&&P0(t,a);break;case 13:ji(t,a),s&4&&B0(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=J_.bind(null,a),_v(t,a))));break;case 22:if(s=a.memoizedState!==null||qi,!s){n=n!==null&&n.memoizedState!==null||cn,c=qi;var f=cn;qi=s,(cn=n)&&!f?Zi(t,a,(a.subtreeFlags&8772)!==0):ji(t,a),qi=c,cn=f}break;case 30:break;default:ji(t,a)}}function O0(t){var n=t.alternate;n!==null&&(t.alternate=null,O0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Os(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ke=null,Pn=!1;function Yi(t,n,a){for(a=a.child;a!==null;)z0(t,n,a),a=a.sibling}function z0(t,n,a){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(St,a)}catch{}switch(a.tag){case 26:cn||Ri(a,n),Yi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Ri(a,n);var s=Ke,c=Pn;La(a.type)&&(Ke=a.stateNode,Pn=!1),Yi(t,n,a),xo(a.stateNode),Ke=s,Pn=c;break;case 5:cn||Ri(a,n);case 6:if(s=Ke,c=Pn,Ke=null,Yi(t,n,a),Ke=s,Pn=c,Ke!==null)if(Pn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(a.stateNode)}catch(f){Pe(a,n,f)}else try{Ke.removeChild(a.stateNode)}catch(f){Pe(a,n,f)}break;case 18:Ke!==null&&(Pn?(t=Ke,Rm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),is(t)):Rm(Ke,a.stateNode));break;case 4:s=Ke,c=Pn,Ke=a.stateNode.containerInfo,Pn=!0,Yi(t,n,a),Ke=s,Pn=c;break;case 0:case 11:case 14:case 15:Ta(2,a,n),cn||Ta(4,a,n),Yi(t,n,a);break;case 1:cn||(Ri(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&C0(a,n,s)),Yi(t,n,a);break;case 21:Yi(t,n,a);break;case 22:cn=(s=cn)||a.memoizedState!==null,Yi(t,n,a),cn=s;break;default:Yi(t,n,a)}}function P0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{is(t)}catch(a){Pe(n,n.return,a)}}}function B0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{is(t)}catch(a){Pe(n,n.return,a)}}function X_(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new L0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new L0),n;default:throw Error(r(435,t.tag))}}function Tl(t,n){var a=X_(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=$_.bind(null,t,s);s.then(c,c)}})}function Bn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,g=n,E=g;t:for(;E!==null;){switch(E.tag){case 27:if(La(E.type)){Ke=E.stateNode,Pn=!1;break t}break;case 5:Ke=E.stateNode,Pn=!1;break t;case 3:case 4:Ke=E.stateNode.containerInfo,Pn=!0;break t}E=E.return}if(Ke===null)throw Error(r(160));z0(f,g,c),Ke=null,Pn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)F0(n,t),n=n.sibling}var mi=null;function F0(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Bn(n,t),Fn(t),s&4&&(Ta(3,t,t.return),ro(3,t),Ta(5,t,t.return));break;case 1:Bn(n,t),Fn(t),s&512&&(cn||a===null||Ri(a,a.return)),s&64&&qi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=mi;if(Bn(n,t),Fn(t),s&512&&(cn||a===null||Ri(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Qa]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Rn(f,s,a),f[rn]=t,$(f),s=f;break t;case"link":var g=Fm("link","href",c).get(s+(a.href||""));if(g){for(var E=0;E<g.length;E++)if(f=g[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){g.splice(E,1);break e}}f=c.createElement(s),Rn(f,s,a),c.head.appendChild(f);break;case"meta":if(g=Fm("meta","content",c).get(s+(a.content||""))){for(E=0;E<g.length;E++)if(f=g[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){g.splice(E,1);break e}}f=c.createElement(s),Rn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[rn]=t,$(f),s=f}t.stateNode=s}else Im(c,t.type,t.stateNode);else t.stateNode=Bm(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Im(c,t.type,t.stateNode):Bm(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Ku(t,t.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,t),Fn(t),s&512&&(cn||a===null||Ri(a,a.return)),a!==null&&s&4&&Ku(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,t),Fn(t),s&512&&(cn||a===null||Ri(a,a.return)),t.flags&32){c=t.stateNode;try{Ei(c,"")}catch(Ft){Pe(t,t.return,Ft)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,Ku(t,c,a!==null?a.memoizedProps:c)),s&1024&&($u=!0);break;case 6:if(Bn(n,t),Fn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Ft){Pe(t,t.return,Ft)}}break;case 3:if(Gl=null,c=mi,mi=Il(n.containerInfo),Bn(n,t),mi=c,Fn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{is(n.containerInfo)}catch(Ft){Pe(t,t.return,Ft)}$u&&($u=!1,I0(t));break;case 4:s=mi,mi=Il(t.stateNode.containerInfo),Bn(n,t),Fn(t),mi=s;break;case 12:Bn(n,t),Fn(t);break;case 31:Bn(n,t),Fn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Tl(t,s)));break;case 13:Bn(n,t),Fn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Rl=M()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Tl(t,s)));break;case 22:c=t.memoizedState!==null;var z=a!==null&&a.memoizedState!==null,Q=qi,ut=cn;if(qi=Q||c,cn=ut||z,Bn(n,t),cn=ut,qi=Q,Fn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||z||qi||cn||dr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){z=a=n;try{if(f=z.stateNode,c)g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none";else{E=z.stateNode;var mt=z.memoizedProps.style,et=mt!=null&&mt.hasOwnProperty("display")?mt.display:null;E.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(Ft){Pe(z,z.return,Ft)}}}else if(n.tag===6){if(a===null){z=n;try{z.stateNode.nodeValue=c?"":z.memoizedProps}catch(Ft){Pe(z,z.return,Ft)}}}else if(n.tag===18){if(a===null){z=n;try{var st=z.stateNode;c?Cm(st,!0):Cm(z.stateNode,!1)}catch(Ft){Pe(z,z.return,Ft)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Tl(t,a))));break;case 19:Bn(n,t),Fn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Tl(t,s)));break;case 30:break;case 21:break;default:Bn(n,t),Fn(t)}}function Fn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(D0(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Qu(t);El(t,f,c);break;case 5:var g=a.stateNode;a.flags&32&&(Ei(g,""),a.flags&=-33);var E=Qu(t);El(t,E,g);break;case 3:case 4:var z=a.stateNode.containerInfo,Q=Qu(t);Ju(t,Q,z);break;default:throw Error(r(161))}}catch(ut){Pe(t,t.return,ut)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function I0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;I0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)N0(t,n.alternate,n),n=n.sibling}function dr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ta(4,n,n.return),dr(n);break;case 1:Ri(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&C0(n,n.return,a),dr(n);break;case 27:xo(n.stateNode);case 26:case 5:Ri(n,n.return),dr(n);break;case 22:n.memoizedState===null&&dr(n);break;case 30:dr(n);break;default:dr(n)}t=t.sibling}}function Zi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,g=f.flags;switch(f.tag){case 0:case 11:case 15:Zi(c,f,a),ro(4,f);break;case 1:if(Zi(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Q){Pe(s,s.return,Q)}if(s=f,c=s.updateQueue,c!==null){var E=s.stateNode;try{var z=c.shared.hiddenCallbacks;if(z!==null)for(c.shared.hiddenCallbacks=null,c=0;c<z.length;c++)xp(z[c],E)}catch(Q){Pe(s,s.return,Q)}}a&&g&64&&R0(f),so(f,f.return);break;case 27:U0(f);case 26:case 5:Zi(c,f,a),a&&s===null&&g&4&&w0(f),so(f,f.return);break;case 12:Zi(c,f,a);break;case 31:Zi(c,f,a),a&&g&4&&P0(c,f);break;case 13:Zi(c,f,a),a&&g&4&&B0(c,f);break;case 22:f.memoizedState===null&&Zi(c,f,a),so(f,f.return);break;case 30:break;default:Zi(c,f,a)}n=n.sibling}}function tf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&qs(a))}function ef(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qs(t))}function xi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)H0(t,n,a,s),n=n.sibling}function H0(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:xi(t,n,a,s),c&2048&&ro(9,n);break;case 1:xi(t,n,a,s);break;case 3:xi(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&qs(t)));break;case 12:if(c&2048){xi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,g=f.id,E=f.onPostCommit;typeof E=="function"&&E(g,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(z){Pe(n,n.return,z)}}else xi(t,n,a,s);break;case 31:xi(t,n,a,s);break;case 13:xi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,g=n.alternate,n.memoizedState!==null?f._visibility&2?xi(t,n,a,s):oo(t,n):f._visibility&2?xi(t,n,a,s):(f._visibility|=2,qr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&tf(g,n);break;case 24:xi(t,n,a,s),c&2048&&ef(n.alternate,n);break;default:xi(t,n,a,s)}}function qr(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,g=n,E=a,z=s,Q=g.flags;switch(g.tag){case 0:case 11:case 15:qr(f,g,E,z,c),ro(8,g);break;case 23:break;case 22:var ut=g.stateNode;g.memoizedState!==null?ut._visibility&2?qr(f,g,E,z,c):oo(f,g):(ut._visibility|=2,qr(f,g,E,z,c)),c&&Q&2048&&tf(g.alternate,g);break;case 24:qr(f,g,E,z,c),c&&Q&2048&&ef(g.alternate,g);break;default:qr(f,g,E,z,c)}n=n.sibling}}function oo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:oo(a,s),c&2048&&tf(s.alternate,s);break;case 24:oo(a,s),c&2048&&ef(s.alternate,s);break;default:oo(a,s)}n=n.sibling}}var lo=8192;function Yr(t,n,a){if(t.subtreeFlags&lo)for(t=t.child;t!==null;)G0(t,n,a),t=t.sibling}function G0(t,n,a){switch(t.tag){case 26:Yr(t,n,a),t.flags&lo&&t.memoizedState!==null&&Dv(a,mi,t.memoizedState,t.memoizedProps);break;case 5:Yr(t,n,a);break;case 3:case 4:var s=mi;mi=Il(t.stateNode.containerInfo),Yr(t,n,a),mi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=lo,lo=16777216,Yr(t,n,a),lo=s):Yr(t,n,a));break;default:Yr(t,n,a)}}function V0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function co(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Sn=s,X0(s,t)}V0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)k0(t),t=t.sibling}function k0(t){switch(t.tag){case 0:case 11:case 15:co(t),t.flags&2048&&Ta(9,t,t.return);break;case 3:co(t);break;case 12:co(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Al(t)):co(t);break;default:co(t)}}function Al(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];Sn=s,X0(s,t)}V0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ta(8,n,n.return),Al(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Al(n));break;default:Al(n)}t=t.sibling}}function X0(t,n){for(;Sn!==null;){var a=Sn;switch(a.tag){case 0:case 11:case 15:Ta(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:qs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,Sn=s;else t:for(a=t;Sn!==null;){s=Sn;var c=s.sibling,f=s.return;if(O0(s),s===a){Sn=null;break t}if(c!==null){c.return=f,Sn=c;break t}Sn=f}}}var W_={getCacheForType:function(t){var n=Tn(sn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Tn(sn).controller.signal}},q_=typeof WeakMap=="function"?WeakMap:Map,Le=0,We=null,xe=null,_e=0,ze=0,Zn=null,Aa=!1,jr=!1,nf=!1,Ki=0,Je=0,Ra=0,hr=0,af=0,Kn=0,Zr=0,uo=null,In=null,rf=!1,Rl=0,W0=0,Cl=1/0,wl=null,Ca=null,hn=0,wa=null,Kr=null,Qi=0,sf=0,of=null,q0=null,fo=0,lf=null;function Qn(){return(Le&2)!==0&&_e!==0?_e&-_e:P.T!==null?pf():Ls()}function Y0(){if(Kn===0)if((_e&536870912)===0||ye){var t=At;At<<=1,(At&3932160)===0&&(At=262144),Kn=t}else Kn=536870912;return t=Yn.current,t!==null&&(t.flags|=32),Kn}function Hn(t,n,a){(t===We&&(ze===2||ze===9)||t.cancelPendingCommit!==null)&&(Qr(t,0),Da(t,_e,Kn,!1)),Cn(t,a),((Le&2)===0||t!==We)&&(t===We&&((Le&2)===0&&(hr|=a),Je===4&&Da(t,_e,Kn,!1)),Ci(t))}function j0(t,n,a){if((Le&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Pt(t,n),c=s?Z_(t,n):uf(t,n,!0),f=s;do{if(c===0){jr&&!s&&Da(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Y_(a)){c=uf(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var E=t;c=uo;var z=E.current.memoizedState.isDehydrated;if(z&&(Qr(E,g).flags|=256),g=uf(E,g,!1),g!==2){if(nf&&!z){E.errorRecoveryDisabledLanes|=f,hr|=f,c=4;break t}f=In,In=c,f!==null&&(In===null?In=f:In.push.apply(In,f))}c=g}if(f=!1,c!==2)continue}}if(c===1){Qr(t,0),Da(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Da(s,n,Kn,!Aa);break t;case 2:In=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Rl+300-M(),10<c)){if(Da(s,n,Kn,!Aa),xt(s,0,!0)!==0)break t;Qi=n,s.timeoutHandle=Tm(Z0.bind(null,s,a,In,wl,rf,n,Kn,hr,Zr,Aa,f,"Throttled",-0,0),c);break t}Z0(s,a,In,wl,rf,n,Kn,hr,Zr,Aa,f,null,-0,0)}}break}while(!0);Ci(t)}function Z0(t,n,a,s,c,f,g,E,z,Q,ut,mt,et,st){if(t.timeoutHandle=-1,mt=n.subtreeFlags,mt&8192||(mt&16785408)===16785408){mt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Pi},G0(n,f,mt);var Ft=(f&62914560)===f?Rl-M():(f&4194048)===f?W0-M():0;if(Ft=Uv(mt,Ft),Ft!==null){Qi=f,t.cancelPendingCommit=Ft(im.bind(null,t,n,f,a,s,c,g,E,z,ut,mt,null,et,st)),Da(t,f,g,!Q);return}}im(t,n,f,a,s,c,g,E,z)}function Y_(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Da(t,n,a,s){n&=~af,n&=~hr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Gt(c),g=1<<f;s[f]=-1,c&=~g}a!==0&&Go(t,a,n)}function Dl(){return(Le&6)===0?(ho(0),!1):!0}function cf(){if(xe!==null){if(ze===0)var t=xe.return;else t=xe,Hi=ar=null,Eu(t),Gr=null,js=0,t=xe;for(;t!==null;)A0(t.alternate,t),t=t.return;xe=null}}function Qr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,hv(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Qi=0,cf(),We=t,xe=a=Fi(t.current,null),_e=n,ze=0,Zn=null,Aa=!1,jr=Pt(t,n),nf=!1,Zr=Kn=af=hr=Ra=Je=0,In=uo=null,rf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Gt(s),f=1<<c;n|=t[c],s&=~f}return Ki=n,Qo(),a}function K0(t,n){se=null,P.H=no,n===Hr||n===rl?(n=dp(),ze=3):n===du?(n=dp(),ze=4):ze=n===Hu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,xe===null&&(Je=1,vl(t,ii(n,t.current)))}function Q0(){var t=Yn.current;return t===null?!0:(_e&4194048)===_e?oi===null:(_e&62914560)===_e||(_e&536870912)!==0?t===oi:!1}function J0(){var t=P.H;return P.H=no,t===null?no:t}function $0(){var t=P.A;return P.A=W_,t}function Ul(){Je=4,Aa||(_e&4194048)!==_e&&Yn.current!==null||(jr=!0),(Ra&134217727)===0&&(hr&134217727)===0||We===null||Da(We,_e,Kn,!1)}function uf(t,n,a){var s=Le;Le|=2;var c=J0(),f=$0();(We!==t||_e!==n)&&(wl=null,Qr(t,n)),n=!1;var g=Je;t:do try{if(ze!==0&&xe!==null){var E=xe,z=Zn;switch(ze){case 8:cf(),g=6;break t;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var Q=ze;if(ze=0,Zn=null,Jr(t,E,z,Q),a&&jr){g=0;break t}break;default:Q=ze,ze=0,Zn=null,Jr(t,E,z,Q)}}j_(),g=Je;break}catch(ut){K0(t,ut)}while(!0);return n&&t.shellSuspendCounter++,Hi=ar=null,Le=s,P.H=c,P.A=f,xe===null&&(We=null,_e=0,Qo()),g}function j_(){for(;xe!==null;)tm(xe)}function Z_(t,n){var a=Le;Le|=2;var s=J0(),c=$0();We!==t||_e!==n?(wl=null,Cl=M()+500,Qr(t,n)):jr=Pt(t,n);t:do try{if(ze!==0&&xe!==null){n=xe;var f=Zn;e:switch(ze){case 1:ze=0,Zn=null,Jr(t,n,f,1);break;case 2:case 9:if(up(f)){ze=0,Zn=null,em(n);break}n=function(){ze!==2&&ze!==9||We!==t||(ze=7),Ci(t)},f.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:up(f)?(ze=0,Zn=null,em(n)):(ze=0,Zn=null,Jr(t,n,f,7));break;case 5:var g=null;switch(xe.tag){case 26:g=xe.memoizedState;case 5:case 27:var E=xe;if(g?Hm(g):E.stateNode.complete){ze=0,Zn=null;var z=E.sibling;if(z!==null)xe=z;else{var Q=E.return;Q!==null?(xe=Q,Ll(Q)):xe=null}break e}}ze=0,Zn=null,Jr(t,n,f,5);break;case 6:ze=0,Zn=null,Jr(t,n,f,6);break;case 8:cf(),Je=6;break t;default:throw Error(r(462))}}K_();break}catch(ut){K0(t,ut)}while(!0);return Hi=ar=null,P.H=s,P.A=c,Le=a,xe!==null?0:(We=null,_e=0,Qo(),Je)}function K_(){for(;xe!==null&&!ae();)tm(xe)}function tm(t){var n=E0(t.alternate,t,Ki);t.memoizedProps=t.pendingProps,n===null?Ll(t):xe=n}function em(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=_0(a,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=_0(a,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:Eu(n);default:A0(a,n),n=xe=$h(n,Ki),n=E0(a,n,Ki)}t.memoizedProps=t.pendingProps,n===null?Ll(t):xe=n}function Jr(t,n,a,s){Hi=ar=null,Eu(n),Gr=null,js=0;var c=n.return;try{if(F_(t,c,n,a,_e)){Je=1,vl(t,ii(a,t.current)),xe=null;return}}catch(f){if(c!==null)throw xe=c,f;Je=1,vl(t,ii(a,t.current)),xe=null;return}n.flags&32768?(ye||s===1?t=!0:jr||(_e&536870912)!==0?t=!1:(Aa=t=!0,(s===2||s===9||s===3||s===6)&&(s=Yn.current,s!==null&&s.tag===13&&(s.flags|=16384))),nm(n,t)):Ll(n)}function Ll(t){var n=t;do{if((n.flags&32768)!==0){nm(n,Aa);return}t=n.return;var a=G_(n.alternate,n,Ki);if(a!==null){xe=a;return}if(n=n.sibling,n!==null){xe=n;return}xe=n=t}while(n!==null);Je===0&&(Je=5)}function nm(t,n){do{var a=V_(t.alternate,t);if(a!==null){a.flags&=32767,xe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){xe=t;return}xe=t=a}while(t!==null);Je=6,xe=null}function im(t,n,a,s,c,f,g,E,z){t.cancelPendingCommit=null;do Nl();while(hn!==0);if((Le&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Qc,kn(t,a,f,g,E,z),t===We&&(xe=We=null,_e=0),Kr=n,wa=t,Qi=a,sf=f,of=c,q0=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,tv(ot,function(){return lm(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=P.T,P.T=null,c=j.p,j.p=2,g=Le,Le|=4;try{k_(t,n,a)}finally{Le=g,j.p=c,P.T=s}}hn=1,am(),rm(),sm()}}function am(){if(hn===1){hn=0;var t=wa,n=Kr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var s=j.p;j.p=2;var c=Le;Le|=4;try{F0(n,t);var f=yf,g=Xh(t.containerInfo),E=f.focusedElem,z=f.selectionRange;if(g!==E&&E&&E.ownerDocument&&kh(E.ownerDocument.documentElement,E)){if(z!==null&&qc(E)){var Q=z.start,ut=z.end;if(ut===void 0&&(ut=Q),"selectionStart"in E)E.selectionStart=Q,E.selectionEnd=Math.min(ut,E.value.length);else{var mt=E.ownerDocument||document,et=mt&&mt.defaultView||window;if(et.getSelection){var st=et.getSelection(),Ft=E.textContent.length,te=Math.min(z.start,Ft),He=z.end===void 0?te:Math.min(z.end,Ft);!st.extend&&te>He&&(g=He,He=te,te=g);var W=Vh(E,te),G=Vh(E,He);if(W&&G&&(st.rangeCount!==1||st.anchorNode!==W.node||st.anchorOffset!==W.offset||st.focusNode!==G.node||st.focusOffset!==G.offset)){var Z=mt.createRange();Z.setStart(W.node,W.offset),st.removeAllRanges(),te>He?(st.addRange(Z),st.extend(G.node,G.offset)):(Z.setEnd(G.node,G.offset),st.addRange(Z))}}}}for(mt=[],st=E;st=st.parentNode;)st.nodeType===1&&mt.push({element:st,left:st.scrollLeft,top:st.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<mt.length;E++){var dt=mt[E];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}Wl=!!bf,yf=bf=null}finally{Le=c,j.p=s,P.T=a}}t.current=n,hn=2}}function rm(){if(hn===2){hn=0;var t=wa,n=Kr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var s=j.p;j.p=2;var c=Le;Le|=4;try{N0(t,n.alternate,n)}finally{Le=c,j.p=s,P.T=a}}hn=3}}function sm(){if(hn===4||hn===3){hn=0,D();var t=wa,n=Kr,a=Qi,s=q0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?hn=5:(hn=0,Kr=wa=null,om(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ca=null),Ka(a),n=n.stateNode,Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(St,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=P.T,c=j.p,j.p=2,P.T=null;try{for(var f=t.onRecoverableError,g=0;g<s.length;g++){var E=s[g];f(E.value,{componentStack:E.stack})}}finally{P.T=n,j.p=c}}(Qi&3)!==0&&Nl(),Ci(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===lf?fo++:(fo=0,lf=t):fo=0,ho(0)}}function om(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,qs(n)))}function Nl(){return am(),rm(),sm(),lm()}function lm(){if(hn!==5)return!1;var t=wa,n=sf;sf=0;var a=Ka(Qi),s=P.T,c=j.p;try{j.p=32>a?32:a,P.T=null,a=of,of=null;var f=wa,g=Qi;if(hn=0,Kr=wa=null,Qi=0,(Le&6)!==0)throw Error(r(331));var E=Le;if(Le|=4,k0(f.current),H0(f,f.current,g,a),Le=E,ho(0,!1),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(St,f)}catch{}return!0}finally{j.p=c,P.T=s,om(t,n)}}function cm(t,n,a){n=ii(a,n),n=Iu(t.stateNode,n,2),t=ya(t,n,2),t!==null&&(Cn(t,2),Ci(t))}function Pe(t,n,a){if(t.tag===3)cm(t,t,a);else for(;n!==null;){if(n.tag===3){cm(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ca===null||!Ca.has(s))){t=ii(a,t),a=u0(2),s=ya(n,a,2),s!==null&&(f0(a,s,n,t),Cn(s,2),Ci(s));break}}n=n.return}}function ff(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new q_;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(nf=!0,c.add(a),t=Q_.bind(null,t,n,a),n.then(t,t))}function Q_(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,We===t&&(_e&a)===a&&(Je===4||Je===3&&(_e&62914560)===_e&&300>M()-Rl?(Le&2)===0&&Qr(t,0):af|=a,Zr===_e&&(Zr=0)),Ci(t)}function um(t,n){n===0&&(n=Be()),t=er(t,n),t!==null&&(Cn(t,n),Ci(t))}function J_(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),um(t,a)}function $_(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),um(t,a)}function tv(t,n){return ke(t,n)}var Ol=null,$r=null,df=!1,zl=!1,hf=!1,Ua=0;function Ci(t){t!==$r&&t.next===null&&($r===null?Ol=$r=t:$r=$r.next=t),zl=!0,df||(df=!0,nv())}function ho(t,n){if(!hf&&zl){hf=!0;do for(var a=!1,s=Ol;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var g=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-Gt(42|t)+1)-1,f&=c&~(g&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,pm(s,f))}else f=_e,f=xt(s,s===We?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Pt(s,f)||(a=!0,pm(s,f));s=s.next}while(a);hf=!1}}function ev(){fm()}function fm(){zl=df=!1;var t=0;Ua!==0&&dv()&&(t=Ua);for(var n=M(),a=null,s=Ol;s!==null;){var c=s.next,f=dm(s,n);f===0?(s.next=null,a===null?Ol=c:a.next=c,c===null&&($r=a)):(a=s,(t!==0||(f&3)!==0)&&(zl=!0)),s=c}hn!==0&&hn!==5||ho(t),Ua!==0&&(Ua=0)}function dm(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var g=31-Gt(f),E=1<<g,z=c[g];z===-1?((E&a)===0||(E&s)!==0)&&(c[g]=ie(E,n)):z<=n&&(t.expiredLanes|=E),f&=~E}if(n=We,a=_e,a=xt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(ze===2||ze===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&jt(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Pt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&jt(s),Ka(a)){case 2:case 8:a=vt;break;case 32:a=ot;break;case 268435456:a=Ut;break;default:a=ot}return s=hm.bind(null,t),a=ke(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&jt(s),t.callbackPriority=2,t.callbackNode=null,2}function hm(t,n){if(hn!==0&&hn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Nl()&&t.callbackNode!==a)return null;var s=_e;return s=xt(t,t===We?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(j0(t,s,n),dm(t,M()),t.callbackNode!=null&&t.callbackNode===a?hm.bind(null,t):null)}function pm(t,n){if(Nl())return null;j0(t,n,!0)}function nv(){pv(function(){(Le&6)!==0?ke(pt,ev):fm()})}function pf(){if(Ua===0){var t=Fr;t===0&&(t=wt,wt<<=1,(wt&261888)===0&&(wt=256)),Ua=t}return Ua}function mm(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ko(""+t)}function xm(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function iv(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=mm((c[fn]||null).action),g=s.submitter;g&&(n=(n=g[fn]||null)?mm(n.formAction):g.getAttribute("formAction"),n!==null&&(f=n,g=null));var E=new Yo("action","action",null,s,c);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ua!==0){var z=g?xm(c,g):new FormData(c);Nu(a,{pending:!0,data:z,method:c.method,action:f},null,z)}}else typeof f=="function"&&(E.preventDefault(),z=g?xm(c,g):new FormData(c),Nu(a,{pending:!0,data:z,method:c.method,action:f},f,z))},currentTarget:c}]})}}for(var mf=0;mf<Kc.length;mf++){var xf=Kc[mf],av=xf.toLowerCase(),rv=xf[0].toUpperCase()+xf.slice(1);pi(av,"on"+rv)}pi(Yh,"onAnimationEnd"),pi(jh,"onAnimationIteration"),pi(Zh,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(b_,"onTransitionRun"),pi(y_,"onTransitionStart"),pi(M_,"onTransitionCancel"),pi(Kh,"onTransitionEnd"),zt("onMouseEnter",["mouseout","mouseover"]),zt("onMouseLeave",["mouseout","mouseover"]),zt("onPointerEnter",["pointerout","pointerover"]),zt("onPointerLeave",["pointerout","pointerover"]),Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),sv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(po));function gm(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var g=s.length-1;0<=g;g--){var E=s[g],z=E.instance,Q=E.currentTarget;if(E=E.listener,z!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=Q;try{f(c)}catch(ut){Ko(ut)}c.currentTarget=null,f=z}else for(g=0;g<s.length;g++){if(E=s[g],z=E.instance,Q=E.currentTarget,E=E.listener,z!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=Q;try{f(c)}catch(ut){Ko(ut)}c.currentTarget=null,f=z}}}}function ge(t,n){var a=n[Ar];a===void 0&&(a=n[Ar]=new Set);var s=t+"__bubble";a.has(s)||(_m(n,t,2,!1),a.add(s))}function gf(t,n,a){var s=0;n&&(s|=4),_m(a,t,s,n)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function _f(t){if(!t[Pl]){t[Pl]=!0,q.forEach(function(a){a!=="selectionchange"&&(sv.has(a)||gf(a,!1,t),gf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Pl]||(n[Pl]=!0,gf("selectionchange",!1,n))}}function _m(t,n,a,s){switch(Ym(n)){case 2:var c=Ov;break;case 8:c=zv;break;default:c=Nf}a=c.bind(null,n,a,t),c=void 0,!Bc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function vf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var g=s.tag;if(g===3||g===4){var E=s.stateNode.containerInfo;if(E===c)break;if(g===4)for(g=s.return;g!==null;){var z=g.tag;if((z===3||z===4)&&g.stateNode.containerInfo===c)return;g=g.return}for(;E!==null;){if(g=ha(E),g===null)return;if(z=g.tag,z===5||z===6||z===26||z===27){s=f=g;continue t}E=E.parentNode}}s=s.return}Mh(function(){var Q=f,ut=zc(a),mt=[];t:{var et=Qh.get(t);if(et!==void 0){var st=Yo,Ft=t;switch(t){case"keypress":if(Wo(a)===0)break t;case"keydown":case"keyup":st=$g;break;case"focusin":Ft="focus",st=Gc;break;case"focusout":Ft="blur",st=Gc;break;case"beforeblur":case"afterblur":st=Gc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":st=Ah;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":st=Gg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":st=n_;break;case Yh:case jh:case Zh:st=Xg;break;case Kh:st=a_;break;case"scroll":case"scrollend":st=Ig;break;case"wheel":st=s_;break;case"copy":case"cut":case"paste":st=qg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":st=Ch;break;case"toggle":case"beforetoggle":st=l_}var te=(n&4)!==0,He=!te&&(t==="scroll"||t==="scrollend"),W=te?et!==null?et+"Capture":null:et;te=[];for(var G=Q,Z;G!==null;){var dt=G;if(Z=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||Z===null||W===null||(dt=zs(G,W),dt!=null&&te.push(mo(G,dt,Z))),He)break;G=G.return}0<te.length&&(et=new st(et,Ft,null,a,ut),mt.push({event:et,listeners:te}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",st=t==="mouseout"||t==="pointerout",et&&a!==Oc&&(Ft=a.relatedTarget||a.fromElement)&&(ha(Ft)||Ft[Ni]))break t;if((st||et)&&(et=ut.window===ut?ut:(et=ut.ownerDocument)?et.defaultView||et.parentWindow:window,st?(Ft=a.relatedTarget||a.toElement,st=Q,Ft=Ft?ha(Ft):null,Ft!==null&&(He=u(Ft),te=Ft.tag,Ft!==He||te!==5&&te!==27&&te!==6)&&(Ft=null)):(st=null,Ft=Q),st!==Ft)){if(te=Ah,dt="onMouseLeave",W="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(te=Ch,dt="onPointerLeave",W="onPointerEnter",G="pointer"),He=st==null?et:X(st),Z=Ft==null?et:X(Ft),et=new te(dt,G+"leave",st,a,ut),et.target=He,et.relatedTarget=Z,dt=null,ha(ut)===Q&&(te=new te(W,G+"enter",Ft,a,ut),te.target=Z,te.relatedTarget=He,dt=te),He=dt,st&&Ft)e:{for(te=ov,W=st,G=Ft,Z=0,dt=W;dt;dt=te(dt))Z++;dt=0;for(var Kt=G;Kt;Kt=te(Kt))dt++;for(;0<Z-dt;)W=te(W),Z--;for(;0<dt-Z;)G=te(G),dt--;for(;Z--;){if(W===G||G!==null&&W===G.alternate){te=W;break e}W=te(W),G=te(G)}te=null}else te=null;st!==null&&vm(mt,et,st,te,!1),Ft!==null&&He!==null&&vm(mt,He,Ft,te,!0)}}t:{if(et=Q?X(Q):window,st=et.nodeName&&et.nodeName.toLowerCase(),st==="select"||st==="input"&&et.type==="file")var Ce=Ph;else if(Oh(et))if(Bh)Ce=__;else{Ce=x_;var kt=m_}else st=et.nodeName,!st||st.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?Q&&Nc(Q.elementType)&&(Ce=Ph):Ce=g_;if(Ce&&(Ce=Ce(t,Q))){zh(mt,Ce,a,ut);break t}kt&&kt(t,et,Q),t==="focusout"&&Q&&et.type==="number"&&Q.memoizedProps.value!=null&&_n(et,"number",et.value)}switch(kt=Q?X(Q):window,t){case"focusin":(Oh(kt)||kt.contentEditable==="true")&&(Dr=kt,Yc=Q,ks=null);break;case"focusout":ks=Yc=Dr=null;break;case"mousedown":jc=!0;break;case"contextmenu":case"mouseup":case"dragend":jc=!1,Wh(mt,a,ut);break;case"selectionchange":if(S_)break;case"keydown":case"keyup":Wh(mt,a,ut)}var ue;if(kc)t:{switch(t){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else wr?Lh(t,a)&&(ve="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(wh&&a.locale!=="ko"&&(wr||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&wr&&(ue=Eh()):(ma=ut,Fc="value"in ma?ma.value:ma.textContent,wr=!0)),kt=Bl(Q,ve),0<kt.length&&(ve=new Rh(ve,t,null,a,ut),mt.push({event:ve,listeners:kt}),ue?ve.data=ue:(ue=Nh(a),ue!==null&&(ve.data=ue)))),(ue=u_?f_(t,a):d_(t,a))&&(ve=Bl(Q,"onBeforeInput"),0<ve.length&&(kt=new Rh("onBeforeInput","beforeinput",null,a,ut),mt.push({event:kt,listeners:ve}),kt.data=ue)),iv(mt,t,Q,a,ut)}gm(mt,n)})}function mo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Bl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=zs(t,a),c!=null&&s.unshift(mo(t,c,f)),c=zs(t,n),c!=null&&s.push(mo(t,c,f))),t.tag===3)return s;t=t.return}return[]}function ov(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function vm(t,n,a,s,c){for(var f=n._reactName,g=[];a!==null&&a!==s;){var E=a,z=E.alternate,Q=E.stateNode;if(E=E.tag,z!==null&&z===s)break;E!==5&&E!==26&&E!==27||Q===null||(z=Q,c?(Q=zs(a,f),Q!=null&&g.unshift(mo(a,Q,z))):c||(Q=zs(a,f),Q!=null&&g.push(mo(a,Q,z)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var lv=/\r\n?/g,cv=/\u0000|\uFFFD/g;function Sm(t){return(typeof t=="string"?t:""+t).replace(lv,`
`).replace(cv,"")}function bm(t,n){return n=Sm(n),Sm(t)===n}function Ie(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Ei(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Ei(t,""+s);break;case"className":Ee(t,"class",s);break;case"tabIndex":Ee(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ee(t,a,s);break;case"style":bh(t,s,f);break;case"data":if(n!=="object"){Ee(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=ko(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ie(t,n,"name",c.name,c,null),Ie(t,n,"formEncType",c.formEncType,c,null),Ie(t,n,"formMethod",c.formMethod,c,null),Ie(t,n,"formTarget",c.formTarget,c,null)):(Ie(t,n,"encType",c.encType,c,null),Ie(t,n,"method",c.method,c,null),Ie(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=ko(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Pi);break;case"onScroll":s!=null&&ge("scroll",t);break;case"onScrollEnd":s!=null&&ge("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=ko(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":ge("beforetoggle",t),ge("toggle",t),ce(t,"popover",s);break;case"xlinkActuate":Re(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Re(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Re(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Re(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Re(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Re(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Re(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Re(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Re(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":ce(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Bg.get(a)||a,ce(t,a,s))}}function Sf(t,n,a,s,c,f){switch(a){case"style":bh(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Ei(t,s):(typeof s=="number"||typeof s=="bigint")&&Ei(t,""+s);break;case"onScroll":s!=null&&ge("scroll",t);break;case"onScrollEnd":s!=null&&ge("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Pi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Tt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[fn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):ce(t,a,s)}}}function Rn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",t),ge("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var g=a[f];if(g!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(t,n,f,g,a,null)}}c&&Ie(t,n,"srcSet",a.srcSet,a,null),s&&Ie(t,n,"src",a.src,a,null);return;case"input":ge("invalid",t);var E=f=g=c=null,z=null,Q=null;for(s in a)if(a.hasOwnProperty(s)){var ut=a[s];if(ut!=null)switch(s){case"name":c=ut;break;case"type":g=ut;break;case"checked":z=ut;break;case"defaultChecked":Q=ut;break;case"value":f=ut;break;case"defaultValue":E=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:Ie(t,n,s,ut,a,null)}}Ye(t,f,E,z,Q,g,c,!1);return;case"select":ge("invalid",t),s=g=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":g=E;break;case"multiple":s=E;default:Ie(t,n,c,E,a,null)}n=f,a=g,t.multiple=!!s,n!=null?dn(t,!!s,n,!1):a!=null&&dn(t,!!s,a,!0);return;case"textarea":ge("invalid",t),f=c=s=null;for(g in a)if(a.hasOwnProperty(g)&&(E=a[g],E!=null))switch(g){case"value":s=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Ie(t,n,g,E,a,null)}Mn(t,s,c,f);return;case"option":for(z in a)if(a.hasOwnProperty(z)&&(s=a[z],s!=null))switch(z){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ie(t,n,z,s,a,null)}return;case"dialog":ge("beforetoggle",t),ge("toggle",t),ge("cancel",t),ge("close",t);break;case"iframe":case"object":ge("load",t);break;case"video":case"audio":for(s=0;s<po.length;s++)ge(po[s],t);break;case"image":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"embed":case"source":case"link":ge("error",t),ge("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(s=a[Q],s!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(t,n,Q,s,a,null)}return;default:if(Nc(n)){for(ut in a)a.hasOwnProperty(ut)&&(s=a[ut],s!==void 0&&Sf(t,n,ut,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&Ie(t,n,E,s,a,null))}function uv(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,g=null,E=null,z=null,Q=null,ut=null;for(st in a){var mt=a[st];if(a.hasOwnProperty(st)&&mt!=null)switch(st){case"checked":break;case"value":break;case"defaultValue":z=mt;default:s.hasOwnProperty(st)||Ie(t,n,st,null,s,mt)}}for(var et in s){var st=s[et];if(mt=a[et],s.hasOwnProperty(et)&&(st!=null||mt!=null))switch(et){case"type":f=st;break;case"name":c=st;break;case"checked":Q=st;break;case"defaultChecked":ut=st;break;case"value":g=st;break;case"defaultValue":E=st;break;case"children":case"dangerouslySetInnerHTML":if(st!=null)throw Error(r(137,n));break;default:st!==mt&&Ie(t,n,et,st,s,mt)}}Oi(t,g,E,z,Q,ut,f,c);return;case"select":st=g=E=et=null;for(f in a)if(z=a[f],a.hasOwnProperty(f)&&z!=null)switch(f){case"value":break;case"multiple":st=z;default:s.hasOwnProperty(f)||Ie(t,n,f,null,s,z)}for(c in s)if(f=s[c],z=a[c],s.hasOwnProperty(c)&&(f!=null||z!=null))switch(c){case"value":et=f;break;case"defaultValue":E=f;break;case"multiple":g=f;default:f!==z&&Ie(t,n,c,f,s,z)}n=E,a=g,s=st,et!=null?dn(t,!!a,et,!1):!!s!=!!a&&(n!=null?dn(t,!!a,n,!0):dn(t,!!a,a?[]:"",!1));return;case"textarea":st=et=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ie(t,n,E,null,s,c)}for(g in s)if(c=s[g],f=a[g],s.hasOwnProperty(g)&&(c!=null||f!=null))switch(g){case"value":et=c;break;case"defaultValue":st=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ie(t,n,g,c,s,f)}vn(t,et,st);return;case"option":for(var Ft in a)if(et=a[Ft],a.hasOwnProperty(Ft)&&et!=null&&!s.hasOwnProperty(Ft))switch(Ft){case"selected":t.selected=!1;break;default:Ie(t,n,Ft,null,s,et)}for(z in s)if(et=s[z],st=a[z],s.hasOwnProperty(z)&&et!==st&&(et!=null||st!=null))switch(z){case"selected":t.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Ie(t,n,z,et,s,st)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)et=a[te],a.hasOwnProperty(te)&&et!=null&&!s.hasOwnProperty(te)&&Ie(t,n,te,null,s,et);for(Q in s)if(et=s[Q],st=a[Q],s.hasOwnProperty(Q)&&et!==st&&(et!=null||st!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Ie(t,n,Q,et,s,st)}return;default:if(Nc(n)){for(var He in a)et=a[He],a.hasOwnProperty(He)&&et!==void 0&&!s.hasOwnProperty(He)&&Sf(t,n,He,void 0,s,et);for(ut in s)et=s[ut],st=a[ut],!s.hasOwnProperty(ut)||et===st||et===void 0&&st===void 0||Sf(t,n,ut,et,s,st);return}}for(var W in a)et=a[W],a.hasOwnProperty(W)&&et!=null&&!s.hasOwnProperty(W)&&Ie(t,n,W,null,s,et);for(mt in s)et=s[mt],st=a[mt],!s.hasOwnProperty(mt)||et===st||et==null&&st==null||Ie(t,n,mt,et,s,st)}function ym(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function fv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,g=c.initiatorType,E=c.duration;if(f&&E&&ym(g)){for(g=0,E=c.responseEnd,s+=1;s<a.length;s++){var z=a[s],Q=z.startTime;if(Q>E)break;var ut=z.transferSize,mt=z.initiatorType;ut&&ym(mt)&&(z=z.responseEnd,g+=ut*(z<E?1:(E-Q)/(z-Q)))}if(--s,n+=8*(f+g)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var bf=null,yf=null;function Fl(t){return t.nodeType===9?t:t.ownerDocument}function Mm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Em(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Mf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Ef=null;function dv(){var t=window.event;return t&&t.type==="popstate"?t===Ef?!1:(Ef=t,!0):(Ef=null,!1)}var Tm=typeof setTimeout=="function"?setTimeout:void 0,hv=typeof clearTimeout=="function"?clearTimeout:void 0,Am=typeof Promise=="function"?Promise:void 0,pv=typeof queueMicrotask=="function"?queueMicrotask:typeof Am<"u"?function(t){return Am.resolve(null).then(t).catch(mv)}:Tm;function mv(t){setTimeout(function(){throw t})}function La(t){return t==="head"}function Rm(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),is(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")xo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,xo(a);for(var f=a.firstChild;f;){var g=f.nextSibling,E=f.nodeName;f[Qa]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=g}}else a==="body"&&xo(t.ownerDocument.body);a=c}while(a);is(n)}function Cm(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Tf(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Tf(a),Os(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function xv(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Qa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=li(t.nextSibling),t===null)break}return null}function gv(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=li(t.nextSibling),t===null))return null;return t}function wm(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=li(t.nextSibling),t===null))return null;return t}function Af(t){return t.data==="$?"||t.data==="$~"}function Rf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function _v(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function li(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Cf=null;function Dm(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return li(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Um(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function Lm(t,n,a){switch(n=Fl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function xo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);Os(t)}var ci=new Map,Nm=new Set;function Il(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ji=j.d;j.d={f:vv,r:Sv,D:bv,C:yv,L:Mv,m:Ev,X:Av,S:Tv,M:Rv};function vv(){var t=Ji.f(),n=Dl();return t||n}function Sv(t){var n=T(t);n!==null&&n.tag===5&&n.type==="form"?Kp(n):Ji.r(t)}var ts=typeof document>"u"?null:document;function Om(t,n,a){var s=ts;if(s&&typeof n=="string"&&n){var c=qe(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Nm.has(c)||(Nm.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Rn(n,"link",t),$(n),s.head.appendChild(n)))}}function bv(t){Ji.D(t),Om("dns-prefetch",t,null)}function yv(t,n){Ji.C(t,n),Om("preconnect",t,n)}function Mv(t,n,a){Ji.L(t,n,a);var s=ts;if(s&&t&&n){var c='link[rel="preload"][as="'+qe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+qe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+qe(a.imageSizes)+'"]')):c+='[href="'+qe(t)+'"]';var f=c;switch(n){case"style":f=es(t);break;case"script":f=ns(t)}ci.has(f)||(t=_({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ci.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(go(f))||n==="script"&&s.querySelector(_o(f))||(n=s.createElement("link"),Rn(n,"link",t),$(n),s.head.appendChild(n)))}}function Ev(t,n){Ji.m(t,n);var a=ts;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+qe(s)+'"][href="'+qe(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=ns(t)}if(!ci.has(f)&&(t=_({rel:"modulepreload",href:t},n),ci.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(_o(f)))return}s=a.createElement("link"),Rn(s,"link",t),$(s),a.head.appendChild(s)}}}function Tv(t,n,a){Ji.S(t,n,a);var s=ts;if(s&&t){var c=it(s).hoistableStyles,f=es(t);n=n||"default";var g=c.get(f);if(!g){var E={loading:0,preload:null};if(g=s.querySelector(go(f)))E.loading=5;else{t=_({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ci.get(f))&&wf(t,a);var z=g=s.createElement("link");$(z),Rn(z,"link",t),z._p=new Promise(function(Q,ut){z.onload=Q,z.onerror=ut}),z.addEventListener("load",function(){E.loading|=1}),z.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Hl(g,n,s)}g={type:"stylesheet",instance:g,count:1,state:E},c.set(f,g)}}}function Av(t,n){Ji.X(t,n);var a=ts;if(a&&t){var s=it(a).hoistableScripts,c=ns(t),f=s.get(c);f||(f=a.querySelector(_o(c)),f||(t=_({src:t,async:!0},n),(n=ci.get(c))&&Df(t,n),f=a.createElement("script"),$(f),Rn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Rv(t,n){Ji.M(t,n);var a=ts;if(a&&t){var s=it(a).hoistableScripts,c=ns(t),f=s.get(c);f||(f=a.querySelector(_o(c)),f||(t=_({src:t,async:!0,type:"module"},n),(n=ci.get(c))&&Df(t,n),f=a.createElement("script"),$(f),Rn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function zm(t,n,a,s){var c=(c=nt.current)?Il(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=es(a.href),a=it(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=es(a.href);var f=it(c).hoistableStyles,g=f.get(t);if(g||(c=c.ownerDocument||c,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,g),(f=c.querySelector(go(t)))&&!f._p&&(g.instance=f,g.state.loading=5),ci.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(t,a),f||Cv(c,t,a,g.state))),n&&s===null)throw Error(r(528,""));return g}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=ns(a),a=it(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function es(t){return'href="'+qe(t)+'"'}function go(t){return'link[rel="stylesheet"]['+t+"]"}function Pm(t){return _({},t,{"data-precedence":t.precedence,precedence:null})}function Cv(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Rn(n,"link",a),$(n),t.head.appendChild(n))}function ns(t){return'[src="'+qe(t)+'"]'}function _o(t){return"script[async]"+t}function Bm(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+qe(a.href)+'"]');if(s)return n.instance=s,$(s),s;var c=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),$(s),Rn(s,"style",c),Hl(s,a.precedence,t),n.instance=s;case"stylesheet":c=es(a.href);var f=t.querySelector(go(c));if(f)return n.state.loading|=4,n.instance=f,$(f),f;s=Pm(a),(c=ci.get(c))&&wf(s,c),f=(t.ownerDocument||t).createElement("link"),$(f);var g=f;return g._p=new Promise(function(E,z){g.onload=E,g.onerror=z}),Rn(f,"link",s),n.state.loading|=4,Hl(f,a.precedence,t),n.instance=f;case"script":return f=ns(a.src),(c=t.querySelector(_o(f)))?(n.instance=c,$(c),c):(s=a,(c=ci.get(f))&&(s=_({},a),Df(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),$(c),Rn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Hl(s,a.precedence,t));return n.instance}function Hl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,g=0;g<s.length;g++){var E=s[g];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function wf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Df(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Gl=null;function Fm(t,n,a){if(Gl===null){var s=new Map,c=Gl=new Map;c.set(a,s)}else c=Gl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Qa]||f[rn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var g=f.getAttribute(n)||"";g=t+g;var E=s.get(g);E?E.push(f):s.set(g,[f])}}return s}function Im(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function wv(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Hm(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Dv(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=es(s.href),f=n.querySelector(go(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Vl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,$(f);return}f=n.ownerDocument||n,s=Pm(s),(c=ci.get(c))&&wf(s,c),f=f.createElement("link"),$(f);var g=f;g._p=new Promise(function(E,z){g.onload=E,g.onerror=z}),Rn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Vl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Uf=0;function Uv(t,n){return t.stylesheets&&t.count===0&&Xl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Xl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Uf===0&&(Uf=62500*fv());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Xl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Uf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function Vl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var kl=null;function Xl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,kl=new Map,n.forEach(Lv,t),kl=null,Vl.call(t))}function Lv(t,n){if(!(n.state.loading&4)){var a=kl.get(t);if(a)var s=a.get(null);else{a=new Map,kl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var g=c[f];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),s=g)}s&&a.set(null,s)}c=n.instance,g=c.getAttribute("data-precedence"),f=a.get(g)||s,f===s&&a.set(null,c),a.set(g,c),this.count++,s=Vl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var vo={$$typeof:U,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Nv(t,n,a,s,c,f,g,E,z){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function Gm(t,n,a,s,c,f,g,E,z,Q,ut,mt){return t=new Nv(t,n,a,g,z,Q,ut,mt,E),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),t.current=f,f.stateNode=t,n=cu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},hu(f),t}function Vm(t){return t?(t=Nr,t):Nr}function km(t,n,a,s,c,f){c=Vm(c),s.context===null?s.context=c:s.pendingContext=c,s=ba(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ya(t,s,n),a!==null&&(Hn(a,t,n),Ks(a,t,n))}function Xm(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Lf(t,n){Xm(t,n),(t=t.alternate)&&Xm(t,n)}function Wm(t){if(t.tag===13||t.tag===31){var n=er(t,67108864);n!==null&&Hn(n,t,67108864),Lf(t,67108864)}}function qm(t){if(t.tag===13||t.tag===31){var n=Qn();n=hi(n);var a=er(t,n);a!==null&&Hn(a,t,n),Lf(t,n)}}var Wl=!0;function Ov(t,n,a,s){var c=P.T;P.T=null;var f=j.p;try{j.p=2,Nf(t,n,a,s)}finally{j.p=f,P.T=c}}function zv(t,n,a,s){var c=P.T;P.T=null;var f=j.p;try{j.p=8,Nf(t,n,a,s)}finally{j.p=f,P.T=c}}function Nf(t,n,a,s){if(Wl){var c=Of(s);if(c===null)vf(t,n,s,ql,a),jm(t,s);else if(Bv(c,t,n,a,s))s.stopPropagation();else if(jm(t,s),n&4&&-1<Pv.indexOf(t)){for(;c!==null;){var f=T(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var g=yt(f.pendingLanes);if(g!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;g;){var z=1<<31-Gt(g);E.entanglements[1]|=z,g&=~z}Ci(f),(Le&6)===0&&(Cl=M()+500,ho(0))}}break;case 31:case 13:E=er(f,2),E!==null&&Hn(E,f,2),Dl(),Lf(f,2)}if(f=Of(s),f===null&&vf(t,n,s,ql,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else vf(t,n,s,null,a)}}function Of(t){return t=zc(t),zf(t)}var ql=null;function zf(t){if(ql=null,t=ha(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return ql=t,null}function Ym(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(K()){case pt:return 2;case vt:return 8;case ot:case qt:return 32;case Ut:return 268435456;default:return 32}default:return 32}}var Pf=!1,Na=null,Oa=null,za=null,So=new Map,bo=new Map,Pa=[],Pv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function jm(t,n){switch(t){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Oa=null;break;case"mouseover":case"mouseout":za=null;break;case"pointerover":case"pointerout":So.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(n.pointerId)}}function yo(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=T(n),n!==null&&Wm(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Bv(t,n,a,s,c){switch(n){case"focusin":return Na=yo(Na,t,n,a,s,c),!0;case"dragenter":return Oa=yo(Oa,t,n,a,s,c),!0;case"mouseover":return za=yo(za,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return So.set(f,yo(So.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,bo.set(f,yo(bo.get(f)||null,t,n,a,s,c)),!0}return!1}function Zm(t){var n=ha(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Ns(t.priority,function(){qm(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Ns(t.priority,function(){qm(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Of(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Oc=s,a.target.dispatchEvent(s),Oc=null}else return n=T(a),n!==null&&Wm(n),t.blockedOn=a,!1;n.shift()}return!0}function Km(t,n,a){Yl(t)&&a.delete(n)}function Fv(){Pf=!1,Na!==null&&Yl(Na)&&(Na=null),Oa!==null&&Yl(Oa)&&(Oa=null),za!==null&&Yl(za)&&(za=null),So.forEach(Km),bo.forEach(Km)}function jl(t,n){t.blockedOn===n&&(t.blockedOn=null,Pf||(Pf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Fv)))}var Zl=null;function Qm(t){Zl!==t&&(Zl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Zl===t&&(Zl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(zf(s||a)===null)continue;break}var f=T(a);f!==null&&(t.splice(n,3),n-=3,Nu(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function is(t){function n(z){return jl(z,t)}Na!==null&&jl(Na,t),Oa!==null&&jl(Oa,t),za!==null&&jl(za,t),So.forEach(n),bo.forEach(n);for(var a=0;a<Pa.length;a++){var s=Pa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Pa.length&&(a=Pa[0],a.blockedOn===null);)Zm(a),a.blockedOn===null&&Pa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],g=c[fn]||null;if(typeof f=="function")g||Qm(a);else if(g){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,g=f[fn]||null)E=g.formAction;else if(zf(c)!==null)continue}else E=g.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),Qm(a)}}}function Jm(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(g){return c=g})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Bf(t){this._internalRoot=t}Kl.prototype.render=Bf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Qn();km(a,s,t,n,null,null)},Kl.prototype.unmount=Bf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;km(t.current,2,null,t,null,null),Dl(),n[Ni]=null}};function Kl(t){this._internalRoot=t}Kl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ls();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Pa.length&&n!==0&&n<Pa[a].priority;a++);Pa.splice(a,0,t),a===0&&Zm(t)}};var $m=e.version;if($m!=="19.2.0")throw Error(r(527,$m,"19.2.0"));j.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?x(t):null,t=t===null?null:t.stateNode,t};var Iv={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ql=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ql.isDisabled&&Ql.supportsFiber)try{St=Ql.inject(Iv),Mt=Ql}catch{}}return Eo.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=s0,f=o0,g=l0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=Gm(t,1,!1,null,null,a,s,null,c,f,g,Jm),t[Ni]=n.current,_f(t),new Bf(n)},Eo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=s0,g=o0,E=l0,z=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(z=a.formState)),n=Gm(t,1,!0,n,a??null,s,c,z,f,g,E,Jm),n.context=Vm(null),a=n.current,s=Qn(),s=hi(s),c=ba(s),c.callback=null,ya(a,c,s),a=s,n.current.lanes=a,Cn(n,a),Ci(n),t[Ni]=n.current,_f(t),new Kl(n)},Eo.version="19.2.0",Eo}var cx;function Kv(){if(cx)return Hf.exports;cx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Hf.exports=Zv(),Hf.exports}var Qv=Kv();const Jv=sg(Qv),$v="/vivli-website/assets/AR-clip-after-intro-DkZhHmnk.gif",tS="/vivli-website/assets/AR-clip-intro-VF6oH892.gif",eS="/vivli-website/assets/AR-clip-spiraling-DzyhTzdO.gif",nS="/vivli-website/assets/AR-clip-spirals-start-q-PBw8kh.gif",iS="/vivli-website/assets/aerial-reverie-BAZMpzUi.mp4",aS="/vivli-website/assets/process-stills-2-CLcL8Joy.png",rS="/vivli-website/assets/still-1-fzY1nNZs.jpg",sS="/vivli-website/assets/still-2-8wsy660Z.jpg",oS="/vivli-website/assets/still-3-DPGdX8xA.jpg",lS="/vivli-website/assets/still-4-BbJMAe40.jpg",cS="/vivli-website/assets/gallery-w-ml-D-iu-C6g.png",uS="/vivli-website/assets/gallery-CK_eQTdT.png",fS="/vivli-website/assets/pcb-schematic-DCEhCiIc.png",dS="/vivli-website/assets/thumbnail-Cc41NpnZ.png",hS="/vivli-website/assets/china_ca-C3VWx74L.gif",pS="/vivli-website/assets/china_drone_sim-DyeAY9-k.gif",mS="/vivli-website/assets/india_ca-DzM4G_L_.gif",xS="/vivli-website/assets/india_drone_sim-CYeexApC.gif",gS="/vivli-website/assets/iran_ca-DR6lpy2f.gif",_S="/vivli-website/assets/iran_drone_sim-DKnLoBX2.gif",vS="/vivli-website/assets/mexico_ca-C_Qc7qvX.gif",SS="/vivli-website/assets/mexico_drone_sim-B8pk9BkK.gif",bS="/vivli-website/assets/morocco_ca-DOUMb209.gif",yS="/vivli-website/assets/morocco_drone_sim-mc4J5d2C.gif",MS="/vivli-website/assets/portugal_ca-DDXec2l_.gif",ES="/vivli-website/assets/portugal_drone_sim-Dss0ZGwZ.gif",TS="/vivli-website/assets/spain_ca-epWM23XP.gif",AS="/vivli-website/assets/spain_drone_sim-BN3YJLv9.gif",RS="/vivli-website/assets/turkey_ca-BAQm3Brb.gif",CS="/vivli-website/assets/turkey_drone_sim-CzFD2QR6.gif",wS="/vivli-website/assets/thumbnail-Cz_cAM9k.png",DS="/vivli-website/assets/tiles_all-m77oIaLm.png",US="/vivli-website/assets/tiles_tgt-DiFbCgRg.png",LS="/vivli-website/assets/gallery-CrH0Hmr3.png",NS="/vivli-website/assets/thumbnail1-gudxgOJa.png",OS="/vivli-website/assets/thumbnail2-CNTZTuLj.png",zS="/vivli-website/assets/thumbnail3-CCnZ1a-Y.png",PS="/vivli-website/assets/header-sKtiGC8i.png",BS="/vivli-website/assets/pawlink-BMATdVzQ.png",FS="/vivli-website/assets/thumbnail-pJpcKxdP.png",IS="/vivli-website/assets/dither_it_figure-1-WdQGNKS-.png",HS="/vivli-website/assets/thumbnail-DPUFsreZ.png";const uh="181",GS=0,ux=1,VS=2,og=1,kS=2,ra=3,Ya=0,Vn=1,sa=2,ca=0,vs=1,fx=2,dx=3,hx=4,XS=5,br=100,WS=101,qS=102,YS=103,jS=104,ZS=200,KS=201,QS=202,JS=203,Sd=204,bd=205,$S=206,tb=207,eb=208,nb=209,ib=210,ab=211,rb=212,sb=213,ob=214,yd=0,Md=1,Ed=2,bs=3,Td=4,Ad=5,Rd=6,Cd=7,lg=0,lb=1,cb=2,qa=0,ub=1,fb=2,db=3,hb=4,pb=5,mb=6,xb=7,cg=300,ys=301,Ms=302,wd=303,Dd=304,Rc=306,Ud=1e3,oa=1001,Ld=1002,ti=1003,gb=1004,Jl=1005,di=1006,Xf=1007,Mr=1008,fa=1009,ug=1010,fg=1011,Lo=1012,fh=1013,Tr=1014,la=1015,Rs=1016,dh=1017,hh=1018,No=1020,dg=35902,hg=35899,pg=1021,mg=1022,yi=1023,Oo=1026,zo=1027,xg=1028,ph=1029,mh=1030,xh=1031,gh=1033,vc=33776,Sc=33777,bc=33778,yc=33779,Nd=35840,Od=35841,zd=35842,Pd=35843,Bd=36196,Fd=37492,Id=37496,Hd=37808,Gd=37809,Vd=37810,kd=37811,Xd=37812,Wd=37813,qd=37814,Yd=37815,jd=37816,Zd=37817,Kd=37818,Qd=37819,Jd=37820,$d=37821,th=36492,eh=36494,nh=36495,ih=36283,ah=36284,rh=36285,sh=36286,_b=3200,vb=3201,Sb=0,bb=1,Xa="",fi="srgb",Es="srgb-linear",Ec="linear",Ge="srgb",as=7680,px=519,yb=512,Mb=513,Eb=514,gg=515,Tb=516,Ab=517,Rb=518,Cb=519,mx=35044,xx="300 es",Di=2e3,Tc=2001;function _g(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Ac(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function wb(){const o=Ac("canvas");return o.style.display="block",o}const gx={};function _x(...o){const e="THREE."+o.shift();console.log(e,...o)}function oe(...o){const e="THREE."+o.shift();console.warn(e,...o)}function nn(...o){const e="THREE."+o.shift();console.error(e,...o)}function Po(...o){const e=o.join(" ");e in gx||(gx[e]=!0,oe(...o))}function Db(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}class Cs{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wf=Math.PI/180,oh=180/Math.PI;function Bo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[o&255]+Dn[o>>8&255]+Dn[o>>16&255]+Dn[o>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function Me(o,e,i){return Math.max(e,Math.min(i,o))}function Ub(o,e){return(o%e+e)%e}function qf(o,e,i){return(1-i)*o+i*e}function To(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Gn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ue{constructor(e=0,i=0){Ue.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Me(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fo{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],x=r[l+2],_=r[l+3],S=u[d+0],y=u[d+1],A=u[d+2],C=u[d+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=x,e[i+3]=_;return}if(h>=1){e[i+0]=S,e[i+1]=y,e[i+2]=A,e[i+3]=C;return}if(_!==C||m!==S||p!==y||x!==A){let b=m*S+p*y+x*A+_*C;b<0&&(S=-S,y=-y,A=-A,C=-C,b=-b);let v=1-h;if(b<.9995){const O=Math.acos(b),U=Math.sin(O);v=Math.sin(v*O)/U,h=Math.sin(h*O)/U,m=m*v+S*h,p=p*v+y*h,x=x*v+A*h,_=_*v+C*h}else{m=m*v+S*h,p=p*v+y*h,x=x*v+A*h,_=_*v+C*h;const O=1/Math.sqrt(m*m+p*p+x*x+_*_);m*=O,p*=O,x*=O,_*=O}}e[i]=m,e[i+1]=p,e[i+2]=x,e[i+3]=_}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],x=r[l+3],_=u[d],S=u[d+1],y=u[d+2],A=u[d+3];return e[i]=h*A+x*_+m*y-p*S,e[i+1]=m*A+x*S+p*_-h*y,e[i+2]=p*A+x*y+h*S-m*_,e[i+3]=x*A-h*_-m*S-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(r/2),x=h(l/2),_=h(u/2),S=m(r/2),y=m(l/2),A=m(u/2);switch(d){case"XYZ":this._x=S*x*_+p*y*A,this._y=p*y*_-S*x*A,this._z=p*x*A+S*y*_,this._w=p*x*_-S*y*A;break;case"YXZ":this._x=S*x*_+p*y*A,this._y=p*y*_-S*x*A,this._z=p*x*A-S*y*_,this._w=p*x*_+S*y*A;break;case"ZXY":this._x=S*x*_-p*y*A,this._y=p*y*_+S*x*A,this._z=p*x*A+S*y*_,this._w=p*x*_-S*y*A;break;case"ZYX":this._x=S*x*_-p*y*A,this._y=p*y*_+S*x*A,this._z=p*x*A-S*y*_,this._w=p*x*_+S*y*A;break;case"YZX":this._x=S*x*_+p*y*A,this._y=p*y*_+S*x*A,this._z=p*x*A-S*y*_,this._w=p*x*_-S*y*A;break;case"XZY":this._x=S*x*_-p*y*A,this._y=p*y*_-S*x*A,this._z=p*x*A+S*y*_,this._w=p*x*_+S*y*A;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],x=i[6],_=i[10],S=r+h+_;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(x-m)*y,this._y=(u-p)*y,this._z=(d-l)*y}else if(r>h&&r>_){const y=2*Math.sqrt(1+r-h-_);this._w=(x-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(u+p)/y}else if(h>_){const y=2*Math.sqrt(1+h-r-_);this._w=(u-p)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+x)/y}else{const y=2*Math.sqrt(1+_-r-h);this._w=(d-l)/y,this._x=(u+p)/y,this._y=(m+x)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Me(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,m=i._y,p=i._z,x=i._w;return this._x=r*x+d*h+l*p-u*m,this._y=l*x+d*m+u*h-r*p,this._z=u*x+d*p+r*m-l*h,this._w=d*x-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,u=e._z,d=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,u=-u,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),x=Math.sin(p);m=Math.sin(m*p)/x,i=Math.sin(i*p)/x,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ct{constructor(e=0,i=0,r=0){ct.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(vx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(vx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*r),x=2*(h*i-u*l),_=2*(u*r-d*i);return this.x=i+m*p+d*_-h*x,this.y=r+m*x+h*p-u*_,this.z=l+m*_+u*x-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this.z=Me(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this.z=Me(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Yf.copy(this).projectOnVector(e),this.sub(Yf)}reflect(e){return this.sub(Yf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Me(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yf=new ct,vx=new Fo;class fe{constructor(e,i,r,l,u,d,h,m,p){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p)}set(e,i,r,l,u,d,h,m,p){const x=this.elements;return x[0]=e,x[1]=l,x[2]=h,x[3]=i,x[4]=u,x[5]=m,x[6]=r,x[7]=d,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],x=r[4],_=r[7],S=r[2],y=r[5],A=r[8],C=l[0],b=l[3],v=l[6],O=l[1],U=l[4],F=l[7],k=l[2],N=l[5],B=l[8];return u[0]=d*C+h*O+m*k,u[3]=d*b+h*U+m*N,u[6]=d*v+h*F+m*B,u[1]=p*C+x*O+_*k,u[4]=p*b+x*U+_*N,u[7]=p*v+x*F+_*B,u[2]=S*C+y*O+A*k,u[5]=S*b+y*U+A*N,u[8]=S*v+y*F+A*B,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8];return i*d*x-i*h*p-r*u*x+r*h*m+l*u*p-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8],_=x*d-h*p,S=h*m-x*u,y=p*u-d*m,A=i*_+r*S+l*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/A;return e[0]=_*C,e[1]=(l*p-x*r)*C,e[2]=(h*r-l*d)*C,e[3]=S*C,e[4]=(x*i-l*m)*C,e[5]=(l*u-h*i)*C,e[6]=y*C,e[7]=(r*m-p*i)*C,e[8]=(d*i-r*u)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(jf.makeScale(e,i)),this}rotate(e){return this.premultiply(jf.makeRotation(-e)),this}translate(e,i){return this.premultiply(jf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const jf=new fe,Sx=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bx=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Lb(){const o={enabled:!0,workingColorSpace:Es,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Ge&&(l.r=ua(l.r),l.g=ua(l.g),l.b=ua(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ge&&(l.r=Ss(l.r),l.g=Ss(l.g),l.b=Ss(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Xa?Ec:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Po("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Po("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Es]:{primaries:e,whitePoint:r,transfer:Ec,toXYZ:Sx,fromXYZ:bx,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:r,transfer:Ge,toXYZ:Sx,fromXYZ:bx,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),o}const De=Lb();function ua(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ss(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let rs;class Nb{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{rs===void 0&&(rs=Ac("canvas")),rs.width=e.width,rs.height=e.height;const l=rs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=rs}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Ac("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=ua(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ua(i[r]/255)*255):i[r]=ua(i[r]);return{data:i,width:e.width,height:e.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ob=0;class _h{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ob++}),this.uuid=Bo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Zf(l[d].image)):u.push(Zf(l[d]))}else u=Zf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Zf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Nb.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}let zb=0;const Kf=new ct;class On extends Cs{constructor(e=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,r=oa,l=oa,u=di,d=Mr,h=yi,m=fa,p=On.DEFAULT_ANISOTROPY,x=Xa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zb++}),this.uuid=Bo(),this.name="",this.source=new _h(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Kf).x}get height(){return this.source.getSize(Kf).y}get depth(){return this.source.getSize(Kf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){oe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){oe(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ud:e.x=e.x-Math.floor(e.x);break;case oa:e.x=e.x<0?0:1;break;case Ld:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ud:e.y=e.y-Math.floor(e.y);break;case oa:e.y=e.y<0?0:1;break;case Ld:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=cg;On.DEFAULT_ANISOTROPY=1;class an{constructor(e=0,i=0,r=0,l=1){an.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],x=m[4],_=m[8],S=m[1],y=m[5],A=m[9],C=m[2],b=m[6],v=m[10];if(Math.abs(x-S)<.01&&Math.abs(_-C)<.01&&Math.abs(A-b)<.01){if(Math.abs(x+S)<.1&&Math.abs(_+C)<.1&&Math.abs(A+b)<.1&&Math.abs(p+y+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,F=(y+1)/2,k=(v+1)/2,N=(x+S)/4,B=(_+C)/4,J=(A+b)/4;return U>F&&U>k?U<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(U),l=N/r,u=B/r):F>k?F<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(F),r=N/l,u=J/l):k<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(k),r=B/u,l=J/u),this.set(r,l,u,i),this}let O=Math.sqrt((b-A)*(b-A)+(_-C)*(_-C)+(S-x)*(S-x));return Math.abs(O)<.001&&(O=1),this.x=(b-A)/O,this.y=(_-C)/O,this.z=(S-x)/O,this.w=Math.acos((p+y+v-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this.z=Me(this.z,e.z,i.z),this.w=Me(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this.z=Me(this.z,e,i),this.w=Me(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Pb extends Cs{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new an(0,0,e,i),this.scissorTest=!1,this.viewport=new an(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new On(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:di,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new _h(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ja extends Pb{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class vg extends On{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ti,this.minFilter=ti,this.wrapR=oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Bb extends On{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ti,this.minFilter=ti,this.wrapR=oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Io{constructor(e=new ct(1/0,1/0,1/0),i=new ct(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(gi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(gi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=gi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,gi):gi.fromBufferAttribute(u,d),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$l.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),$l.copy(r.boundingBox)),$l.applyMatrix4(e.matrixWorld),this.union($l)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ao),tc.subVectors(this.max,Ao),ss.subVectors(e.a,Ao),os.subVectors(e.b,Ao),ls.subVectors(e.c,Ao),Fa.subVectors(os,ss),Ia.subVectors(ls,os),pr.subVectors(ss,ls);let i=[0,-Fa.z,Fa.y,0,-Ia.z,Ia.y,0,-pr.z,pr.y,Fa.z,0,-Fa.x,Ia.z,0,-Ia.x,pr.z,0,-pr.x,-Fa.y,Fa.x,0,-Ia.y,Ia.x,0,-pr.y,pr.x,0];return!Qf(i,ss,os,ls,tc)||(i=[1,0,0,0,1,0,0,0,1],!Qf(i,ss,os,ls,tc))?!1:(ec.crossVectors(Fa,Ia),i=[ec.x,ec.y,ec.z],Qf(i,ss,os,ls,tc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $i=[new ct,new ct,new ct,new ct,new ct,new ct,new ct,new ct],gi=new ct,$l=new Io,ss=new ct,os=new ct,ls=new ct,Fa=new ct,Ia=new ct,pr=new ct,Ao=new ct,tc=new ct,ec=new ct,mr=new ct;function Qf(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){mr.fromArray(o,u);const h=l.x*Math.abs(mr.x)+l.y*Math.abs(mr.y)+l.z*Math.abs(mr.z),m=e.dot(mr),p=i.dot(mr),x=r.dot(mr);if(Math.max(-Math.max(m,p,x),Math.min(m,p,x))>h)return!1}return!0}const Fb=new Io,Ro=new ct,Jf=new ct;class vh{constructor(e=new ct,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):Fb.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ro.subVectors(e,this.center);const i=Ro.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Ro,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ro.copy(e.center).add(Jf)),this.expandByPoint(Ro.copy(e.center).sub(Jf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ta=new ct,$f=new ct,nc=new ct,Ha=new ct,td=new ct,ic=new ct,ed=new ct;class Ib{constructor(e=new ct,i=new ct(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ta)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ta.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){$f.copy(e).add(i).multiplyScalar(.5),nc.copy(i).sub(e).normalize(),Ha.copy(this.origin).sub($f);const u=e.distanceTo(i)*.5,d=-this.direction.dot(nc),h=Ha.dot(this.direction),m=-Ha.dot(nc),p=Ha.lengthSq(),x=Math.abs(1-d*d);let _,S,y,A;if(x>0)if(_=d*m-h,S=d*h-m,A=u*x,_>=0)if(S>=-A)if(S<=A){const C=1/x;_*=C,S*=C,y=_*(_+d*S+2*h)+S*(d*_+S+2*m)+p}else S=u,_=Math.max(0,-(d*S+h)),y=-_*_+S*(S+2*m)+p;else S=-u,_=Math.max(0,-(d*S+h)),y=-_*_+S*(S+2*m)+p;else S<=-A?(_=Math.max(0,-(-d*u+h)),S=_>0?-u:Math.min(Math.max(-u,-m),u),y=-_*_+S*(S+2*m)+p):S<=A?(_=0,S=Math.min(Math.max(-u,-m),u),y=S*(S+2*m)+p):(_=Math.max(0,-(d*u+h)),S=_>0?u:Math.min(Math.max(-u,-m),u),y=-_*_+S*(S+2*m)+p);else S=d>0?-u:u,_=Math.max(0,-(d*S+h)),y=-_*_+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),l&&l.copy($f).addScaledVector(nc,S),y}intersectSphere(e,i){ta.subVectors(e.center,this.origin);const r=ta.dot(this.direction),l=ta.dot(ta)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,m;const p=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),x>=0?(u=(e.min.y-S.y)*x,d=(e.max.y-S.y)*x):(u=(e.max.y-S.y)*x,d=(e.min.y-S.y)*x),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),_>=0?(h=(e.min.z-S.z)*_,m=(e.max.z-S.z)*_):(h=(e.max.z-S.z)*_,m=(e.min.z-S.z)*_),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ta)!==null}intersectTriangle(e,i,r,l,u){td.subVectors(i,e),ic.subVectors(r,e),ed.crossVectors(td,ic);let d=this.direction.dot(ed),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ha.subVectors(this.origin,e);const m=h*this.direction.dot(ic.crossVectors(Ha,ic));if(m<0)return null;const p=h*this.direction.dot(td.cross(Ha));if(p<0||m+p>d)return null;const x=-h*Ha.dot(ed);return x<0?null:this.at(x/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pn{constructor(e,i,r,l,u,d,h,m,p,x,_,S,y,A,C,b){pn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p,x,_,S,y,A,C,b)}set(e,i,r,l,u,d,h,m,p,x,_,S,y,A,C,b){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=u,v[5]=d,v[9]=h,v[13]=m,v[2]=p,v[6]=x,v[10]=_,v[14]=S,v[3]=y,v[7]=A,v[11]=C,v[15]=b,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/cs.setFromMatrixColumn(e,0).length(),u=1/cs.setFromMatrixColumn(e,1).length(),d=1/cs.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),x=Math.cos(u),_=Math.sin(u);if(e.order==="XYZ"){const S=d*x,y=d*_,A=h*x,C=h*_;i[0]=m*x,i[4]=-m*_,i[8]=p,i[1]=y+A*p,i[5]=S-C*p,i[9]=-h*m,i[2]=C-S*p,i[6]=A+y*p,i[10]=d*m}else if(e.order==="YXZ"){const S=m*x,y=m*_,A=p*x,C=p*_;i[0]=S+C*h,i[4]=A*h-y,i[8]=d*p,i[1]=d*_,i[5]=d*x,i[9]=-h,i[2]=y*h-A,i[6]=C+S*h,i[10]=d*m}else if(e.order==="ZXY"){const S=m*x,y=m*_,A=p*x,C=p*_;i[0]=S-C*h,i[4]=-d*_,i[8]=A+y*h,i[1]=y+A*h,i[5]=d*x,i[9]=C-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const S=d*x,y=d*_,A=h*x,C=h*_;i[0]=m*x,i[4]=A*p-y,i[8]=S*p+C,i[1]=m*_,i[5]=C*p+S,i[9]=y*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const S=d*m,y=d*p,A=h*m,C=h*p;i[0]=m*x,i[4]=C-S*_,i[8]=A*_+y,i[1]=_,i[5]=d*x,i[9]=-h*x,i[2]=-p*x,i[6]=y*_+A,i[10]=S-C*_}else if(e.order==="XZY"){const S=d*m,y=d*p,A=h*m,C=h*p;i[0]=m*x,i[4]=-_,i[8]=p*x,i[1]=S*_+C,i[5]=d*x,i[9]=y*_-A,i[2]=A*_-y,i[6]=h*x,i[10]=C*_+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hb,e,Gb)}lookAt(e,i,r){const l=this.elements;return Jn.subVectors(e,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Ga.crossVectors(r,Jn),Ga.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Ga.crossVectors(r,Jn)),Ga.normalize(),ac.crossVectors(Jn,Ga),l[0]=Ga.x,l[4]=ac.x,l[8]=Jn.x,l[1]=Ga.y,l[5]=ac.y,l[9]=Jn.y,l[2]=Ga.z,l[6]=ac.z,l[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],x=r[1],_=r[5],S=r[9],y=r[13],A=r[2],C=r[6],b=r[10],v=r[14],O=r[3],U=r[7],F=r[11],k=r[15],N=l[0],B=l[4],J=l[8],w=l[12],R=l[1],V=l[5],tt=l[9],rt=l[13],ht=l[2],ft=l[6],P=l[10],j=l[14],Y=l[3],gt=l[7],_t=l[11],L=l[15];return u[0]=d*N+h*R+m*ht+p*Y,u[4]=d*B+h*V+m*ft+p*gt,u[8]=d*J+h*tt+m*P+p*_t,u[12]=d*w+h*rt+m*j+p*L,u[1]=x*N+_*R+S*ht+y*Y,u[5]=x*B+_*V+S*ft+y*gt,u[9]=x*J+_*tt+S*P+y*_t,u[13]=x*w+_*rt+S*j+y*L,u[2]=A*N+C*R+b*ht+v*Y,u[6]=A*B+C*V+b*ft+v*gt,u[10]=A*J+C*tt+b*P+v*_t,u[14]=A*w+C*rt+b*j+v*L,u[3]=O*N+U*R+F*ht+k*Y,u[7]=O*B+U*V+F*ft+k*gt,u[11]=O*J+U*tt+F*P+k*_t,u[15]=O*w+U*rt+F*j+k*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],m=e[9],p=e[13],x=e[2],_=e[6],S=e[10],y=e[14],A=e[3],C=e[7],b=e[11],v=e[15];return A*(+u*m*_-l*p*_-u*h*S+r*p*S+l*h*y-r*m*y)+C*(+i*m*y-i*p*S+u*d*S-l*d*y+l*p*x-u*m*x)+b*(+i*p*_-i*h*y-u*d*_+r*d*y+u*h*x-r*p*x)+v*(-l*h*x-i*m*_+i*h*S+l*d*_-r*d*S+r*m*x)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],x=e[8],_=e[9],S=e[10],y=e[11],A=e[12],C=e[13],b=e[14],v=e[15],O=_*b*p-C*S*p+C*m*y-h*b*y-_*m*v+h*S*v,U=A*S*p-x*b*p-A*m*y+d*b*y+x*m*v-d*S*v,F=x*C*p-A*_*p+A*h*y-d*C*y-x*h*v+d*_*v,k=A*_*m-x*C*m-A*h*S+d*C*S+x*h*b-d*_*b,N=i*O+r*U+l*F+u*k;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/N;return e[0]=O*B,e[1]=(C*S*u-_*b*u-C*l*y+r*b*y+_*l*v-r*S*v)*B,e[2]=(h*b*u-C*m*u+C*l*p-r*b*p-h*l*v+r*m*v)*B,e[3]=(_*m*u-h*S*u-_*l*p+r*S*p+h*l*y-r*m*y)*B,e[4]=U*B,e[5]=(x*b*u-A*S*u+A*l*y-i*b*y-x*l*v+i*S*v)*B,e[6]=(A*m*u-d*b*u-A*l*p+i*b*p+d*l*v-i*m*v)*B,e[7]=(d*S*u-x*m*u+x*l*p-i*S*p-d*l*y+i*m*y)*B,e[8]=F*B,e[9]=(A*_*u-x*C*u-A*r*y+i*C*y+x*r*v-i*_*v)*B,e[10]=(d*C*u-A*h*u+A*r*p-i*C*p-d*r*v+i*h*v)*B,e[11]=(x*h*u-d*_*u-x*r*p+i*_*p+d*r*y-i*h*y)*B,e[12]=k*B,e[13]=(x*C*l-A*_*l+A*r*S-i*C*S-x*r*b+i*_*b)*B,e[14]=(A*h*l-d*C*l-A*r*m+i*C*m+d*r*b-i*h*b)*B,e[15]=(d*_*l-x*h*l+x*r*m-i*_*m-d*r*S+i*h*S)*B,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,m=e.z,p=u*d,x=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,x*h+r,x*m-l*d,0,p*m-l*h,x*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,x=d+d,_=h+h,S=u*p,y=u*x,A=u*_,C=d*x,b=d*_,v=h*_,O=m*p,U=m*x,F=m*_,k=r.x,N=r.y,B=r.z;return l[0]=(1-(C+v))*k,l[1]=(y+F)*k,l[2]=(A-U)*k,l[3]=0,l[4]=(y-F)*N,l[5]=(1-(S+v))*N,l[6]=(b+O)*N,l[7]=0,l[8]=(A+U)*B,l[9]=(b-O)*B,l[10]=(1-(S+C))*B,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=cs.set(l[0],l[1],l[2]).length();const d=cs.set(l[4],l[5],l[6]).length(),h=cs.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],_i.copy(this);const p=1/u,x=1/d,_=1/h;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=x,_i.elements[5]*=x,_i.elements[6]*=x,_i.elements[8]*=_,_i.elements[9]*=_,_i.elements[10]*=_,i.setFromRotationMatrix(_i),r.x=u,r.y=d,r.z=h,this}makePerspective(e,i,r,l,u,d,h=Di,m=!1){const p=this.elements,x=2*u/(i-e),_=2*u/(r-l),S=(i+e)/(i-e),y=(r+l)/(r-l);let A,C;if(m)A=u/(d-u),C=d*u/(d-u);else if(h===Di)A=-(d+u)/(d-u),C=-2*d*u/(d-u);else if(h===Tc)A=-d/(d-u),C=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=_,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=Di,m=!1){const p=this.elements,x=2/(i-e),_=2/(r-l),S=-(i+e)/(i-e),y=-(r+l)/(r-l);let A,C;if(m)A=1/(d-u),C=d/(d-u);else if(h===Di)A=-2/(d-u),C=-(d+u)/(d-u);else if(h===Tc)A=-1/(d-u),C=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=x,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=_,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=A,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const cs=new ct,_i=new pn,Hb=new ct(0,0,0),Gb=new ct(1,1,1),Ga=new ct,ac=new ct,Jn=new ct,yx=new pn,Mx=new Fo;class da{constructor(e=0,i=0,r=0,l=da.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],x=l[9],_=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,y),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(h,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-_,u),this._z=0);break;case"ZXY":this._x=Math.asin(Me(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,y),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Me(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-_,u)):(this._x=0,this._y=Math.atan2(h,y));break;case"XZY":this._z=Math.asin(-Me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-x,y),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return yx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yx,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Mx.setFromEuler(this),this.setFromQuaternion(Mx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}da.DEFAULT_ORDER="XYZ";class Sg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vb=0;const Ex=new ct,us=new Fo,ea=new pn,rc=new ct,Co=new ct,kb=new ct,Xb=new Fo,Tx=new ct(1,0,0),Ax=new ct(0,1,0),Rx=new ct(0,0,1),Cx={type:"added"},Wb={type:"removed"},fs={type:"childadded",child:null},nd={type:"childremoved",child:null};class ei extends Cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vb++}),this.uuid=Bo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ei.DEFAULT_UP.clone();const e=new ct,i=new da,r=new Fo,l=new ct(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new pn},normalMatrix:{value:new fe}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=ei.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return us.setFromAxisAngle(e,i),this.quaternion.multiply(us),this}rotateOnWorldAxis(e,i){return us.setFromAxisAngle(e,i),this.quaternion.premultiply(us),this}rotateX(e){return this.rotateOnAxis(Tx,e)}rotateY(e){return this.rotateOnAxis(Ax,e)}rotateZ(e){return this.rotateOnAxis(Rx,e)}translateOnAxis(e,i){return Ex.copy(e).applyQuaternion(this.quaternion),this.position.add(Ex.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Tx,e)}translateY(e){return this.translateOnAxis(Ax,e)}translateZ(e){return this.translateOnAxis(Rx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?rc.copy(e):rc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Co.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(Co,rc,this.up):ea.lookAt(rc,Co,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),us.setFromRotationMatrix(ea),this.quaternion.premultiply(us.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(nn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Cx),fs.child=e,this.dispatchEvent(fs),fs.child=null):nn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Wb),nd.child=e,this.dispatchEvent(nd),nd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ea.multiply(e.parent.matrixWorld)),e.applyMatrix4(ea),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Cx),fs.child=e,this.dispatchEvent(fs),fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,e,kb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Co,Xb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,x=m.length;p<x;p++){const _=m[p];u(e.shapes,_)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),x=d(e.images),_=d(e.shapes),S=d(e.skeletons),y=d(e.animations),A=d(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),_.length>0&&(r.shapes=_),S.length>0&&(r.skeletons=S),y.length>0&&(r.animations=y),A.length>0&&(r.nodes=A)}return r.object=l,r;function d(h){const m=[];for(const p in h){const x=h[p];delete x.metadata,m.push(x)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}ei.DEFAULT_UP=new ct(0,1,0);ei.DEFAULT_MATRIX_AUTO_UPDATE=!0;ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new ct,na=new ct,id=new ct,ia=new ct,ds=new ct,hs=new ct,wx=new ct,ad=new ct,rd=new ct,sd=new ct,od=new an,ld=new an,cd=new an;class bi{constructor(e=new ct,i=new ct,r=new ct){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),vi.subVectors(e,i),l.cross(vi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){vi.subVectors(l,i),na.subVectors(r,i),id.subVectors(e,i);const d=vi.dot(vi),h=vi.dot(na),m=vi.dot(id),p=na.dot(na),x=na.dot(id),_=d*p-h*h;if(_===0)return u.set(0,0,0),null;const S=1/_,y=(p*m-h*x)*S,A=(d*x-h*m)*S;return u.set(1-y-A,A,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(e,i,r,l,u,d,h,m){return this.getBarycoord(e,i,r,l,ia)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ia.x),m.addScaledVector(d,ia.y),m.addScaledVector(h,ia.z),m)}static getInterpolatedAttribute(e,i,r,l,u,d){return od.setScalar(0),ld.setScalar(0),cd.setScalar(0),od.fromBufferAttribute(e,i),ld.fromBufferAttribute(e,r),cd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(od,u.x),d.addScaledVector(ld,u.y),d.addScaledVector(cd,u.z),d}static isFrontFacing(e,i,r,l){return vi.subVectors(r,i),na.subVectors(e,i),vi.cross(na).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),vi.cross(na).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return bi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return bi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return bi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;ds.subVectors(l,r),hs.subVectors(u,r),ad.subVectors(e,r);const m=ds.dot(ad),p=hs.dot(ad);if(m<=0&&p<=0)return i.copy(r);rd.subVectors(e,l);const x=ds.dot(rd),_=hs.dot(rd);if(x>=0&&_<=x)return i.copy(l);const S=m*_-x*p;if(S<=0&&m>=0&&x<=0)return d=m/(m-x),i.copy(r).addScaledVector(ds,d);sd.subVectors(e,u);const y=ds.dot(sd),A=hs.dot(sd);if(A>=0&&y<=A)return i.copy(u);const C=y*p-m*A;if(C<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(r).addScaledVector(hs,h);const b=x*A-y*_;if(b<=0&&_-x>=0&&y-A>=0)return wx.subVectors(u,l),h=(_-x)/(_-x+(y-A)),i.copy(l).addScaledVector(wx,h);const v=1/(b+C+S);return d=C*v,h=S*v,i.copy(r).addScaledVector(ds,d).addScaledVector(hs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const bg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Va={h:0,s:0,l:0},sc={h:0,s:0,l:0};function ud(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ve{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=De.workingColorSpace){return this.r=e,this.g=i,this.b=r,De.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=De.workingColorSpace){if(e=Ub(e,1),i=Me(i,0,1),r=Me(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=ud(d,u,e+1/3),this.g=ud(d,u,e),this.b=ud(d,u,e-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(e,i=fi){function r(u){u!==void 0&&parseFloat(u)<1&&oe("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:oe("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=fi){const r=bg[e.toLowerCase()];return r!==void 0?this.setHex(r,i):oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ua(e.r),this.g=ua(e.g),this.b=ua(e.b),this}copyLinearToSRGB(e){return this.r=Ss(e.r),this.g=Ss(e.g),this.b=Ss(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return De.workingToColorSpace(Un.copy(this),e),Math.round(Me(Un.r*255,0,255))*65536+Math.round(Me(Un.g*255,0,255))*256+Math.round(Me(Un.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=De.workingColorSpace){De.workingToColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,u=Un.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const x=(h+d)/2;if(h===d)m=0,p=0;else{const _=d-h;switch(p=x<=.5?_/(d+h):_/(2-d-h),d){case r:m=(l-u)/_+(l<u?6:0);break;case l:m=(u-r)/_+2;break;case u:m=(r-l)/_+4;break}m/=6}return e.h=m,e.s=p,e.l=x,e}getRGB(e,i=De.workingColorSpace){return De.workingToColorSpace(Un.copy(this),i),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=fi){De.workingToColorSpace(Un.copy(this),e);const i=Un.r,r=Un.g,l=Un.b;return e!==fi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Va),this.setHSL(Va.h+e,Va.s+i,Va.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Va),e.getHSL(sc);const r=qf(Va.h,sc.h,i),l=qf(Va.s,sc.s,i),u=qf(Va.l,sc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Ve;Ve.NAMES=bg;let qb=0;class Cc extends Cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qb++}),this.uuid=Bo(),this.name="",this.type="Material",this.blending=vs,this.side=Ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sd,this.blendDst=bd,this.blendEquation=br,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=px,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=as,this.stencilZFail=as,this.stencilZPass=as,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){oe(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){oe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==vs&&(r.blending=this.blending),this.side!==Ya&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Sd&&(r.blendSrc=this.blendSrc),this.blendDst!==bd&&(r.blendDst=this.blendDst),this.blendEquation!==br&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==px&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==as&&(r.stencilFail=this.stencilFail),this.stencilZFail!==as&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==as&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class yg extends Cc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new da,this.combine=lg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new ct,oc=new Ue;let Yb=0;class Ui{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yb++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=mx,this.updateRanges=[],this.gpuType=la,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)oc.fromBufferAttribute(this,i),oc.applyMatrix3(e),this.setXY(i,oc.x,oc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(e),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(e),this.setXYZ(i,un.x,un.y,un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=To(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Gn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=To(i,this.array)),i}setX(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=To(i,this.array)),i}setY(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=To(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=To(i,this.array)),i}setW(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array),u=Gn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==mx&&(e.usage=this.usage),e}}class Mg extends Ui{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Eg extends Ui{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Er extends Ui{constructor(e,i,r){super(new Float32Array(e),i,r)}}let jb=0;const ui=new pn,fd=new ei,ps=new ct,$n=new Io,wo=new Io,bn=new ct;class Za extends Cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jb++}),this.uuid=Bo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_g(e)?Eg:Mg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new fe().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,i,r){return ui.makeTranslation(e,i,r),this.applyMatrix4(ui),this}scale(e,i,r){return ui.makeScale(e,i,r),this.applyMatrix4(ui),this}lookAt(e){return fd.lookAt(e),fd.updateMatrix(),this.applyMatrix4(fd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ps).negate(),this.translate(ps.x,ps.y,ps.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Er(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Io);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ct(-1/0,-1/0,-1/0),new ct(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new vh);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ct,1/0);return}if(e){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];wo.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors($n.min,wo.min),$n.expandByPoint(bn),bn.addVectors($n.max,wo.max),$n.expandByPoint(bn)):($n.expandByPoint(wo.min),$n.expandByPoint(wo.max))}$n.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)bn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(bn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,x=h.count;p<x;p++)bn.fromBufferAttribute(h,p),m&&(ps.fromBufferAttribute(e,p),bn.add(ps)),l=Math.max(l,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&nn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){nn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let J=0;J<r.count;J++)h[J]=new ct,m[J]=new ct;const p=new ct,x=new ct,_=new ct,S=new Ue,y=new Ue,A=new Ue,C=new ct,b=new ct;function v(J,w,R){p.fromBufferAttribute(r,J),x.fromBufferAttribute(r,w),_.fromBufferAttribute(r,R),S.fromBufferAttribute(u,J),y.fromBufferAttribute(u,w),A.fromBufferAttribute(u,R),x.sub(p),_.sub(p),y.sub(S),A.sub(S);const V=1/(y.x*A.y-A.x*y.y);isFinite(V)&&(C.copy(x).multiplyScalar(A.y).addScaledVector(_,-y.y).multiplyScalar(V),b.copy(_).multiplyScalar(y.x).addScaledVector(x,-A.x).multiplyScalar(V),h[J].add(C),h[w].add(C),h[R].add(C),m[J].add(b),m[w].add(b),m[R].add(b))}let O=this.groups;O.length===0&&(O=[{start:0,count:e.count}]);for(let J=0,w=O.length;J<w;++J){const R=O[J],V=R.start,tt=R.count;for(let rt=V,ht=V+tt;rt<ht;rt+=3)v(e.getX(rt+0),e.getX(rt+1),e.getX(rt+2))}const U=new ct,F=new ct,k=new ct,N=new ct;function B(J){k.fromBufferAttribute(l,J),N.copy(k);const w=h[J];U.copy(w),U.sub(k.multiplyScalar(k.dot(w))).normalize(),F.crossVectors(N,w);const V=F.dot(m[J])<0?-1:1;d.setXYZW(J,U.x,U.y,U.z,V)}for(let J=0,w=O.length;J<w;++J){const R=O[J],V=R.start,tt=R.count;for(let rt=V,ht=V+tt;rt<ht;rt+=3)B(e.getX(rt+0)),B(e.getX(rt+1)),B(e.getX(rt+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ui(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,y=r.count;S<y;S++)r.setXYZ(S,0,0,0);const l=new ct,u=new ct,d=new ct,h=new ct,m=new ct,p=new ct,x=new ct,_=new ct;if(e)for(let S=0,y=e.count;S<y;S+=3){const A=e.getX(S+0),C=e.getX(S+1),b=e.getX(S+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,C),d.fromBufferAttribute(i,b),x.subVectors(d,u),_.subVectors(l,u),x.cross(_),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,b),h.add(x),m.add(x),p.add(x),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(b,p.x,p.y,p.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),x.subVectors(d,u),_.subVectors(l,u),x.cross(_),r.setXYZ(S+0,x.x,x.y,x.z),r.setXYZ(S+1,x.x,x.y,x.z),r.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(h,m){const p=h.array,x=h.itemSize,_=h.normalized,S=new p.constructor(m.length*x);let y=0,A=0;for(let C=0,b=m.length;C<b;C++){h.isInterleavedBufferAttribute?y=m[C]*h.data.stride+h.offset:y=m[C]*x;for(let v=0;v<x;v++)S[A++]=p[y++]}return new Ui(S,x,_)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Za,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let x=0,_=p.length;x<_;x++){const S=p[x],y=e(S,r);m.push(y)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],x=[];for(let _=0,S=p.length;_<S;_++){const y=p[_];x.push(y.toJSON(e.data))}x.length>0&&(l[m]=x,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const x=l[p];this.setAttribute(p,x.clone(i))}const u=e.morphAttributes;for(const p in u){const x=[],_=u[p];for(let S=0,y=_.length;S<y;S++)x.push(_[S].clone(i));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,x=d.length;p<x;p++){const _=d[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dx=new pn,xr=new Ib,lc=new vh,Ux=new ct,cc=new ct,uc=new ct,fc=new ct,dd=new ct,dc=new ct,Lx=new ct,hc=new ct;class Li extends ei{constructor(e=new Za,i=new yg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){dc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const x=h[m],_=u[m];x!==0&&(dd.fromBufferAttribute(_,e),d?dc.addScaledVector(dd,x):dc.addScaledVector(dd.sub(i),x))}i.add(dc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),lc.copy(r.boundingSphere),lc.applyMatrix4(u),xr.copy(e.ray).recast(e.near),!(lc.containsPoint(xr.origin)===!1&&(xr.intersectSphere(lc,Ux)===null||xr.origin.distanceToSquared(Ux)>(e.far-e.near)**2))&&(Dx.copy(u).invert(),xr.copy(e.ray).applyMatrix4(Dx),!(r.boundingBox!==null&&xr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,xr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,x=u.attributes.uv1,_=u.attributes.normal,S=u.groups,y=u.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,C=S.length;A<C;A++){const b=S[A],v=d[b.materialIndex],O=Math.max(b.start,y.start),U=Math.min(h.count,Math.min(b.start+b.count,y.start+y.count));for(let F=O,k=U;F<k;F+=3){const N=h.getX(F),B=h.getX(F+1),J=h.getX(F+2);l=pc(this,v,e,r,p,x,_,N,B,J),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),C=Math.min(h.count,y.start+y.count);for(let b=A,v=C;b<v;b+=3){const O=h.getX(b),U=h.getX(b+1),F=h.getX(b+2);l=pc(this,d,e,r,p,x,_,O,U,F),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,C=S.length;A<C;A++){const b=S[A],v=d[b.materialIndex],O=Math.max(b.start,y.start),U=Math.min(m.count,Math.min(b.start+b.count,y.start+y.count));for(let F=O,k=U;F<k;F+=3){const N=F,B=F+1,J=F+2;l=pc(this,v,e,r,p,x,_,N,B,J),l&&(l.faceIndex=Math.floor(F/3),l.face.materialIndex=b.materialIndex,i.push(l))}}else{const A=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let b=A,v=C;b<v;b+=3){const O=b,U=b+1,F=b+2;l=pc(this,d,e,r,p,x,_,O,U,F),l&&(l.faceIndex=Math.floor(b/3),i.push(l))}}}}function Zb(o,e,i,r,l,u,d,h){let m;if(e.side===Vn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,e.side===Ya,h),m===null)return null;hc.copy(h),hc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(hc);return p<i.near||p>i.far?null:{distance:p,point:hc.clone(),object:o}}function pc(o,e,i,r,l,u,d,h,m,p){o.getVertexPosition(h,cc),o.getVertexPosition(m,uc),o.getVertexPosition(p,fc);const x=Zb(o,e,i,r,cc,uc,fc,Lx);if(x){const _=new ct;bi.getBarycoord(Lx,cc,uc,fc,_),l&&(x.uv=bi.getInterpolatedAttribute(l,h,m,p,_,new Ue)),u&&(x.uv1=bi.getInterpolatedAttribute(u,h,m,p,_,new Ue)),d&&(x.normal=bi.getInterpolatedAttribute(d,h,m,p,_,new ct),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new ct,materialIndex:0};bi.getNormal(cc,uc,fc,S.normal),x.face=S,x.barycoord=_}return x}class Ho extends Za{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],x=[],_=[];let S=0,y=0;A("z","y","x",-1,-1,r,i,e,d,u,0),A("z","y","x",1,-1,r,i,-e,d,u,1),A("x","z","y",1,1,e,r,i,l,d,2),A("x","z","y",1,-1,e,r,-i,l,d,3),A("x","y","z",1,-1,e,i,r,l,u,4),A("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Er(p,3)),this.setAttribute("normal",new Er(x,3)),this.setAttribute("uv",new Er(_,2));function A(C,b,v,O,U,F,k,N,B,J,w){const R=F/B,V=k/J,tt=F/2,rt=k/2,ht=N/2,ft=B+1,P=J+1;let j=0,Y=0;const gt=new ct;for(let _t=0;_t<P;_t++){const L=_t*V-rt;for(let at=0;at<ft;at++){const bt=at*R-tt;gt[C]=bt*O,gt[b]=L*U,gt[v]=ht,p.push(gt.x,gt.y,gt.z),gt[C]=0,gt[b]=0,gt[v]=N>0?1:-1,x.push(gt.x,gt.y,gt.z),_.push(at/B),_.push(1-_t/J),j+=1}}for(let _t=0;_t<J;_t++)for(let L=0;L<B;L++){const at=S+L+ft*_t,bt=S+L+ft*(_t+1),Et=S+(L+1)+ft*(_t+1),Ot=S+(L+1)+ft*_t;m.push(at,bt,Ot),m.push(bt,Et,Ot),Y+=6}h.addGroup(y,Y,w),y+=Y,S+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ts(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Nn(o){const e={};for(let i=0;i<o.length;i++){const r=Ts(o[i]);for(const l in r)e[l]=r[l]}return e}function Kb(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Tg(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:De.workingColorSpace}const Qb={clone:Ts,merge:Nn};var Jb=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$b=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends Cc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jb,this.fragmentShader=$b,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ts(e.uniforms),this.uniformsGroups=Kb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Ag extends ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ka=new ct,Nx=new Ue,Ox=new Ue;class Si extends Ag{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=oh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oh*2*Math.atan(Math.tan(Wf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ka.x,ka.y).multiplyScalar(-e/ka.z),ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ka.x,ka.y).multiplyScalar(-e/ka.z)}getViewSize(e,i){return this.getViewBounds(e,Nx,Ox),i.subVectors(Ox,Nx)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Wf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ms=-90,xs=1;class ty extends ei{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Si(ms,xs,e,i);l.layers=this.layers,this.add(l);const u=new Si(ms,xs,e,i);u.layers=this.layers,this.add(u);const d=new Si(ms,xs,e,i);d.layers=this.layers,this.add(d);const h=new Si(ms,xs,e,i);h.layers=this.layers,this.add(h);const m=new Si(ms,xs,e,i);m.layers=this.layers,this.add(m);const p=new Si(ms,xs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(e===Di)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Tc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,x]=this.children,_=e.getRenderTarget(),S=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,x),e.setRenderTarget(_,S,y),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Rg extends On{constructor(e=[],i=ys,r,l,u,d,h,m,p,x){super(e,i,r,l,u,d,h,m,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ey extends ja{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Rg(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ho(5,5,5),u=new Mi({name:"CubemapFromEquirect",uniforms:Ts(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:ca});u.uniforms.tEquirect.value=i;const d=new Li(l,u),h=i.minFilter;return i.minFilter===Mr&&(i.minFilter=di),new ty(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}class mc extends ei{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ny={type:"move"};class hd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ct,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ct),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ct,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ct),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const C of e.hand.values()){const b=i.getJointPose(C,r),v=this._getHandJoint(p,C);b!==null&&(v.matrix.fromArray(b.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=b.radius),v.visible=b!==null}const x=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],S=x.position.distanceTo(_.position),y=.02,A=.005;p.inputState.pinching&&S>y+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=y-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(ny)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new mc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class zx extends ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new da,this.environmentIntensity=1,this.environmentRotation=new da,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class iy extends On{constructor(e=null,i=1,r=1,l,u,d,h,m,p=ti,x=ti,_,S){super(null,d,h,m,p,x,l,u,_,S),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pd=new ct,ay=new ct,ry=new fe;class Sr{constructor(e=new ct(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=pd.subVectors(r,i).cross(ay.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(pd),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||ry.getNormalMatrix(e),l=this.coplanarPoint(pd).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new vh,sy=new Ue(.5,.5),xc=new ct;class Cg{constructor(e=new Sr,i=new Sr,r=new Sr,l=new Sr,u=new Sr,d=new Sr){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Di,r=!1){const l=this.planes,u=e.elements,d=u[0],h=u[1],m=u[2],p=u[3],x=u[4],_=u[5],S=u[6],y=u[7],A=u[8],C=u[9],b=u[10],v=u[11],O=u[12],U=u[13],F=u[14],k=u[15];if(l[0].setComponents(p-d,y-x,v-A,k-O).normalize(),l[1].setComponents(p+d,y+x,v+A,k+O).normalize(),l[2].setComponents(p+h,y+_,v+C,k+U).normalize(),l[3].setComponents(p-h,y-_,v-C,k-U).normalize(),r)l[4].setComponents(m,S,b,F).normalize(),l[5].setComponents(p-m,y-S,v-b,k-F).normalize();else if(l[4].setComponents(p-m,y-S,v-b,k-F).normalize(),i===Di)l[5].setComponents(p+m,y+S,v+b,k+F).normalize();else if(i===Tc)l[5].setComponents(m,S,b,F).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){gr.center.set(0,0,0);const i=sy.distanceTo(e.center);return gr.radius=.7071067811865476+i,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(xc.x=l.normal.x>0?e.max.x:e.min.x,xc.y=l.normal.y>0?e.max.y:e.min.y,xc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(xc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wg extends On{constructor(e,i,r=Tr,l,u,d,h=ti,m=ti,p,x=Oo,_=1){if(x!==Oo&&x!==zo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:_};super(S,l,u,d,h,m,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _h(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Dg extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class As extends Za{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,x=m+1,_=e/h,S=i/m,y=[],A=[],C=[],b=[];for(let v=0;v<x;v++){const O=v*S-d;for(let U=0;U<p;U++){const F=U*_-u;A.push(F,-O,0),C.push(0,0,1),b.push(U/h),b.push(1-v/m)}}for(let v=0;v<m;v++)for(let O=0;O<h;O++){const U=O+p*v,F=O+p*(v+1),k=O+1+p*(v+1),N=O+1+p*v;y.push(U,F,N),y.push(F,k,N)}this.setIndex(y),this.setAttribute("position",new Er(A,3)),this.setAttribute("normal",new Er(C,3)),this.setAttribute("uv",new Er(b,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new As(e.width,e.height,e.widthSegments,e.heightSegments)}}class oy extends Cc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_b,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ly extends Cc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Ug extends Ag{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=x*this.view.offsetY,m=h-x*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class cy extends Si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class uy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function Px(o,e,i,r){const l=fy(r);switch(i){case pg:return o*e;case xg:return o*e/l.components*l.byteLength;case ph:return o*e/l.components*l.byteLength;case mh:return o*e*2/l.components*l.byteLength;case xh:return o*e*2/l.components*l.byteLength;case mg:return o*e*3/l.components*l.byteLength;case yi:return o*e*4/l.components*l.byteLength;case gh:return o*e*4/l.components*l.byteLength;case vc:case Sc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case bc:case yc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Od:case Pd:return Math.max(o,16)*Math.max(e,8)/4;case Nd:case zd:return Math.max(o,8)*Math.max(e,8)/2;case Bd:case Fd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Id:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Hd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Gd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Vd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case kd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Xd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case Wd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case qd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Yd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case jd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case Kd:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Qd:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Jd:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case $d:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case th:case eh:case nh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case ih:case ah:return Math.ceil(o/4)*Math.ceil(e/4)*8;case rh:case sh:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function fy(o){switch(o){case fa:case ug:return{byteLength:1,components:1};case Lo:case fg:case Rs:return{byteLength:2,components:1};case dh:case hh:return{byteLength:2,components:4};case Tr:case fh:case la:return{byteLength:4,components:1};case dg:case hg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uh}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uh);function Lg(){let o=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function dy(o){const e=new WeakMap;function i(h,m){const p=h.array,x=h.usage,_=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,x),h.onUploadCallback();let y;if(p instanceof Float32Array)y=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?y=o.HALF_FLOAT:y=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=o.SHORT;else if(p instanceof Uint32Array)y=o.UNSIGNED_INT;else if(p instanceof Int32Array)y=o.INT;else if(p instanceof Int8Array)y=o.BYTE;else if(p instanceof Uint8Array)y=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,m,p){const x=m.array,_=m.updateRanges;if(o.bindBuffer(p,h),_.length===0)o.bufferSubData(p,0,x);else{_.sort((y,A)=>y.start-A.start);let S=0;for(let y=1;y<_.length;y++){const A=_[S],C=_[y];C.start<=A.start+A.count+1?A.count=Math.max(A.count,C.start+C.count-A.start):(++S,_[S]=C)}_.length=S+1;for(let y=0,A=_.length;y<A;y++){const C=_[y];o.bufferSubData(p,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const x=e.get(h);(!x||x.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var hy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,py=`#ifdef USE_ALPHAHASH
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
#endif`,my=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,_y=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vy=`#ifdef USE_AOMAP
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
#endif`,Sy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,by=`#ifdef USE_BATCHING
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
#endif`,yy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,My=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ey=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ty=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Ay=`#ifdef USE_IRIDESCENCE
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
#endif`,Ry=`#ifdef USE_BUMPMAP
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
#endif`,Cy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Dy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Uy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Ly=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ny=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Oy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,zy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Py=`#define PI 3.141592653589793
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
} // validated`,By=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Fy=`vec3 transformedNormal = objectNormal;
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
#endif`,Iy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ky="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xy=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Wy=`#ifdef USE_ENVMAP
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
#endif`,qy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Yy=`#ifdef USE_ENVMAP
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
#endif`,jy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zy=`#ifdef USE_ENVMAP
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
#endif`,Ky=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Qy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$y=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,tM=`#ifdef USE_GRADIENTMAP
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
}`,eM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,nM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aM=`uniform bool receiveShadow;
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
#endif`,rM=`#ifdef USE_ENVMAP
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
#endif`,sM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,oM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,cM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,uM=`PhysicalMaterial material;
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
#endif`,fM=`uniform sampler2D dfgLUT;
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
}`,dM=`
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
#endif`,hM=`#if defined( RE_IndirectDiffuse )
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
#endif`,pM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_M=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,SM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,bM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,yM=`#if defined( USE_POINTS_UV )
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
#endif`,MM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,EM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,TM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,AM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,RM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,CM=`#ifdef USE_MORPHTARGETS
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
#endif`,wM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,DM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,UM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,LM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,NM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zM=`#ifdef USE_NORMALMAP
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
#endif`,PM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,BM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,FM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,IM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,HM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,GM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,VM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,XM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,WM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,YM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,jM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ZM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,KM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,QM=`float getShadowMask() {
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
}`,JM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$M=`#ifdef USE_SKINNING
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
#endif`,t3=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,e3=`#ifdef USE_SKINNING
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
#endif`,n3=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,i3=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,a3=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,r3=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,s3=`#ifdef USE_TRANSMISSION
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
#endif`,o3=`#ifdef USE_TRANSMISSION
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
#endif`,l3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,u3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,f3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const d3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,h3=`uniform sampler2D t2D;
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
}`,p3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m3=`#ifdef ENVMAP_TYPE_CUBE
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
}`,x3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,g3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_3=`#include <common>
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
}`,v3=`#if DEPTH_PACKING == 3200
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
}`,S3=`#define DISTANCE
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
}`,b3=`#define DISTANCE
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
}`,y3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,M3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E3=`uniform float scale;
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
}`,T3=`uniform vec3 diffuse;
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
}`,A3=`#include <common>
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
}`,R3=`uniform vec3 diffuse;
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
}`,C3=`#define LAMBERT
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
}`,w3=`#define LAMBERT
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
}`,D3=`#define MATCAP
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
}`,U3=`#define MATCAP
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
}`,L3=`#define NORMAL
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
}`,N3=`#define NORMAL
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
}`,O3=`#define PHONG
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
}`,z3=`#define PHONG
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
}`,P3=`#define STANDARD
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
}`,B3=`#define STANDARD
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
}`,F3=`#define TOON
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
}`,I3=`#define TOON
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
}`,H3=`uniform float size;
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
}`,G3=`uniform vec3 diffuse;
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
}`,V3=`#include <common>
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
}`,k3=`uniform vec3 color;
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
}`,X3=`uniform float rotation;
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
}`,W3=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:hy,alphahash_pars_fragment:py,alphamap_fragment:my,alphamap_pars_fragment:xy,alphatest_fragment:gy,alphatest_pars_fragment:_y,aomap_fragment:vy,aomap_pars_fragment:Sy,batching_pars_vertex:by,batching_vertex:yy,begin_vertex:My,beginnormal_vertex:Ey,bsdfs:Ty,iridescence_fragment:Ay,bumpmap_pars_fragment:Ry,clipping_planes_fragment:Cy,clipping_planes_pars_fragment:wy,clipping_planes_pars_vertex:Dy,clipping_planes_vertex:Uy,color_fragment:Ly,color_pars_fragment:Ny,color_pars_vertex:Oy,color_vertex:zy,common:Py,cube_uv_reflection_fragment:By,defaultnormal_vertex:Fy,displacementmap_pars_vertex:Iy,displacementmap_vertex:Hy,emissivemap_fragment:Gy,emissivemap_pars_fragment:Vy,colorspace_fragment:ky,colorspace_pars_fragment:Xy,envmap_fragment:Wy,envmap_common_pars_fragment:qy,envmap_pars_fragment:Yy,envmap_pars_vertex:jy,envmap_physical_pars_fragment:rM,envmap_vertex:Zy,fog_vertex:Ky,fog_pars_vertex:Qy,fog_fragment:Jy,fog_pars_fragment:$y,gradientmap_pars_fragment:tM,lightmap_pars_fragment:eM,lights_lambert_fragment:nM,lights_lambert_pars_fragment:iM,lights_pars_begin:aM,lights_toon_fragment:sM,lights_toon_pars_fragment:oM,lights_phong_fragment:lM,lights_phong_pars_fragment:cM,lights_physical_fragment:uM,lights_physical_pars_fragment:fM,lights_fragment_begin:dM,lights_fragment_maps:hM,lights_fragment_end:pM,logdepthbuf_fragment:mM,logdepthbuf_pars_fragment:xM,logdepthbuf_pars_vertex:gM,logdepthbuf_vertex:_M,map_fragment:vM,map_pars_fragment:SM,map_particle_fragment:bM,map_particle_pars_fragment:yM,metalnessmap_fragment:MM,metalnessmap_pars_fragment:EM,morphinstance_vertex:TM,morphcolor_vertex:AM,morphnormal_vertex:RM,morphtarget_pars_vertex:CM,morphtarget_vertex:wM,normal_fragment_begin:DM,normal_fragment_maps:UM,normal_pars_fragment:LM,normal_pars_vertex:NM,normal_vertex:OM,normalmap_pars_fragment:zM,clearcoat_normal_fragment_begin:PM,clearcoat_normal_fragment_maps:BM,clearcoat_pars_fragment:FM,iridescence_pars_fragment:IM,opaque_fragment:HM,packing:GM,premultiplied_alpha_fragment:VM,project_vertex:kM,dithering_fragment:XM,dithering_pars_fragment:WM,roughnessmap_fragment:qM,roughnessmap_pars_fragment:YM,shadowmap_pars_fragment:jM,shadowmap_pars_vertex:ZM,shadowmap_vertex:KM,shadowmask_pars_fragment:QM,skinbase_vertex:JM,skinning_pars_vertex:$M,skinning_vertex:t3,skinnormal_vertex:e3,specularmap_fragment:n3,specularmap_pars_fragment:i3,tonemapping_fragment:a3,tonemapping_pars_fragment:r3,transmission_fragment:s3,transmission_pars_fragment:o3,uv_pars_fragment:l3,uv_pars_vertex:c3,uv_vertex:u3,worldpos_vertex:f3,background_vert:d3,background_frag:h3,backgroundCube_vert:p3,backgroundCube_frag:m3,cube_vert:x3,cube_frag:g3,depth_vert:_3,depth_frag:v3,distanceRGBA_vert:S3,distanceRGBA_frag:b3,equirect_vert:y3,equirect_frag:M3,linedashed_vert:E3,linedashed_frag:T3,meshbasic_vert:A3,meshbasic_frag:R3,meshlambert_vert:C3,meshlambert_frag:w3,meshmatcap_vert:D3,meshmatcap_frag:U3,meshnormal_vert:L3,meshnormal_frag:N3,meshphong_vert:O3,meshphong_frag:z3,meshphysical_vert:P3,meshphysical_frag:B3,meshtoon_vert:F3,meshtoon_frag:I3,points_vert:H3,points_frag:G3,shadow_vert:V3,shadow_frag:k3,sprite_vert:X3,sprite_frag:W3},Lt={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},wi={basic:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ve(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Nn([Lt.common,Lt.specularmap,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,Lt.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Nn([Lt.common,Lt.envmap,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.roughnessmap,Lt.metalnessmap,Lt.fog,Lt.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Nn([Lt.common,Lt.aomap,Lt.lightmap,Lt.emissivemap,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.gradientmap,Lt.fog,Lt.lights,{emissive:{value:new Ve(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Nn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,Lt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Nn([Lt.points,Lt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Nn([Lt.common,Lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Nn([Lt.common,Lt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Nn([Lt.common,Lt.bumpmap,Lt.normalmap,Lt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Nn([Lt.sprite,Lt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:Nn([Lt.common,Lt.displacementmap,{referencePosition:{value:new ct},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:Nn([Lt.lights,Lt.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};wi.physical={uniforms:Nn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const gc={r:0,b:0,g:0},_r=new da,q3=new pn;function Y3(o,e,i,r,l,u,d){const h=new Ve(0);let m=u===!0?0:1,p,x,_=null,S=0,y=null;function A(U){let F=U.isScene===!0?U.background:null;return F&&F.isTexture&&(F=(U.backgroundBlurriness>0?i:e).get(F)),F}function C(U){let F=!1;const k=A(U);k===null?v(h,m):k&&k.isColor&&(v(k,1),F=!0);const N=o.xr.getEnvironmentBlendMode();N==="additive"?r.buffers.color.setClear(0,0,0,1,d):N==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||F)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function b(U,F){const k=A(F);k&&(k.isCubeTexture||k.mapping===Rc)?(x===void 0&&(x=new Li(new Ho(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:Ts(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(N,B,J){this.matrixWorld.copyPosition(J.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(x)),_r.copy(F.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),x.material.uniforms.envMap.value=k,x.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=F.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(q3.makeRotationFromEuler(_r)),x.material.toneMapped=De.getTransfer(k.colorSpace)!==Ge,(_!==k||S!==k.version||y!==o.toneMapping)&&(x.material.needsUpdate=!0,_=k,S=k.version,y=o.toneMapping),x.layers.enableAll(),U.unshift(x,x.geometry,x.material,0,0,null)):k&&k.isTexture&&(p===void 0&&(p=new Li(new As(2,2),new Mi({name:"BackgroundMaterial",uniforms:Ts(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Ya,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=k,p.material.uniforms.backgroundIntensity.value=F.backgroundIntensity,p.material.toneMapped=De.getTransfer(k.colorSpace)!==Ge,k.matrixAutoUpdate===!0&&k.updateMatrix(),p.material.uniforms.uvTransform.value.copy(k.matrix),(_!==k||S!==k.version||y!==o.toneMapping)&&(p.material.needsUpdate=!0,_=k,S=k.version,y=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function v(U,F){U.getRGB(gc,Tg(o)),r.buffers.color.setClear(gc.r,gc.g,gc.b,F,d)}function O(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,F=1){h.set(U),m=F,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,v(h,m)},render:C,addToRenderList:b,dispose:O}}function j3(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,d=!1;function h(R,V,tt,rt,ht){let ft=!1;const P=_(rt,tt,V);u!==P&&(u=P,p(u.object)),ft=y(R,rt,tt,ht),ft&&A(R,rt,tt,ht),ht!==null&&e.update(ht,o.ELEMENT_ARRAY_BUFFER),(ft||d)&&(d=!1,F(R,V,tt,rt),ht!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(ht).buffer))}function m(){return o.createVertexArray()}function p(R){return o.bindVertexArray(R)}function x(R){return o.deleteVertexArray(R)}function _(R,V,tt){const rt=tt.wireframe===!0;let ht=r[R.id];ht===void 0&&(ht={},r[R.id]=ht);let ft=ht[V.id];ft===void 0&&(ft={},ht[V.id]=ft);let P=ft[rt];return P===void 0&&(P=S(m()),ft[rt]=P),P}function S(R){const V=[],tt=[],rt=[];for(let ht=0;ht<i;ht++)V[ht]=0,tt[ht]=0,rt[ht]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:tt,attributeDivisors:rt,object:R,attributes:{},index:null}}function y(R,V,tt,rt){const ht=u.attributes,ft=V.attributes;let P=0;const j=tt.getAttributes();for(const Y in j)if(j[Y].location>=0){const _t=ht[Y];let L=ft[Y];if(L===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(L=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(L=R.instanceColor)),_t===void 0||_t.attribute!==L||L&&_t.data!==L.data)return!0;P++}return u.attributesNum!==P||u.index!==rt}function A(R,V,tt,rt){const ht={},ft=V.attributes;let P=0;const j=tt.getAttributes();for(const Y in j)if(j[Y].location>=0){let _t=ft[Y];_t===void 0&&(Y==="instanceMatrix"&&R.instanceMatrix&&(_t=R.instanceMatrix),Y==="instanceColor"&&R.instanceColor&&(_t=R.instanceColor));const L={};L.attribute=_t,_t&&_t.data&&(L.data=_t.data),ht[Y]=L,P++}u.attributes=ht,u.attributesNum=P,u.index=rt}function C(){const R=u.newAttributes;for(let V=0,tt=R.length;V<tt;V++)R[V]=0}function b(R){v(R,0)}function v(R,V){const tt=u.newAttributes,rt=u.enabledAttributes,ht=u.attributeDivisors;tt[R]=1,rt[R]===0&&(o.enableVertexAttribArray(R),rt[R]=1),ht[R]!==V&&(o.vertexAttribDivisor(R,V),ht[R]=V)}function O(){const R=u.newAttributes,V=u.enabledAttributes;for(let tt=0,rt=V.length;tt<rt;tt++)V[tt]!==R[tt]&&(o.disableVertexAttribArray(tt),V[tt]=0)}function U(R,V,tt,rt,ht,ft,P){P===!0?o.vertexAttribIPointer(R,V,tt,ht,ft):o.vertexAttribPointer(R,V,tt,rt,ht,ft)}function F(R,V,tt,rt){C();const ht=rt.attributes,ft=tt.getAttributes(),P=V.defaultAttributeValues;for(const j in ft){const Y=ft[j];if(Y.location>=0){let gt=ht[j];if(gt===void 0&&(j==="instanceMatrix"&&R.instanceMatrix&&(gt=R.instanceMatrix),j==="instanceColor"&&R.instanceColor&&(gt=R.instanceColor)),gt!==void 0){const _t=gt.normalized,L=gt.itemSize,at=e.get(gt);if(at===void 0)continue;const bt=at.buffer,Et=at.type,Ot=at.bytesPerElement,nt=Et===o.INT||Et===o.UNSIGNED_INT||gt.gpuType===fh;if(gt.isInterleavedBufferAttribute){const lt=gt.data,Ct=lt.stride,It=gt.offset;if(lt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<Y.locationSize;Xt++)v(Y.location+Xt,lt.meshPerAttribute);R.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Xt=0;Xt<Y.locationSize;Xt++)b(Y.location+Xt);o.bindBuffer(o.ARRAY_BUFFER,bt);for(let Xt=0;Xt<Y.locationSize;Xt++)U(Y.location+Xt,L/Y.locationSize,Et,_t,Ct*Ot,(It+L/Y.locationSize*Xt)*Ot,nt)}else{if(gt.isInstancedBufferAttribute){for(let lt=0;lt<Y.locationSize;lt++)v(Y.location+lt,gt.meshPerAttribute);R.isInstancedMesh!==!0&&rt._maxInstanceCount===void 0&&(rt._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let lt=0;lt<Y.locationSize;lt++)b(Y.location+lt);o.bindBuffer(o.ARRAY_BUFFER,bt);for(let lt=0;lt<Y.locationSize;lt++)U(Y.location+lt,L/Y.locationSize,Et,_t,L*Ot,L/Y.locationSize*lt*Ot,nt)}}else if(P!==void 0){const _t=P[j];if(_t!==void 0)switch(_t.length){case 2:o.vertexAttrib2fv(Y.location,_t);break;case 3:o.vertexAttrib3fv(Y.location,_t);break;case 4:o.vertexAttrib4fv(Y.location,_t);break;default:o.vertexAttrib1fv(Y.location,_t)}}}}O()}function k(){J();for(const R in r){const V=r[R];for(const tt in V){const rt=V[tt];for(const ht in rt)x(rt[ht].object),delete rt[ht];delete V[tt]}delete r[R]}}function N(R){if(r[R.id]===void 0)return;const V=r[R.id];for(const tt in V){const rt=V[tt];for(const ht in rt)x(rt[ht].object),delete rt[ht];delete V[tt]}delete r[R.id]}function B(R){for(const V in r){const tt=r[V];if(tt[R.id]===void 0)continue;const rt=tt[R.id];for(const ht in rt)x(rt[ht].object),delete rt[ht];delete tt[R.id]}}function J(){w(),d=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:J,resetDefaultState:w,dispose:k,releaseStatesOfGeometry:N,releaseStatesOfProgram:B,initAttributes:C,enableAttribute:b,disableUnusedAttributes:O}}function Z3(o,e,i){let r;function l(p){r=p}function u(p,x){o.drawArrays(r,p,x),i.update(x,r,1)}function d(p,x,_){_!==0&&(o.drawArraysInstanced(r,p,x,_),i.update(x,r,_))}function h(p,x,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,x,0,_);let y=0;for(let A=0;A<_;A++)y+=x[A];i.update(y,r,1)}function m(p,x,_,S){if(_===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let A=0;A<p.length;A++)d(p[A],x[A],S[A]);else{y.multiDrawArraysInstancedWEBGL(r,p,0,x,0,S,0,_);let A=0;for(let C=0;C<_;C++)A+=x[C]*S[C];i.update(A,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function K3(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(B){return!(B!==yi&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(B){const J=B===Rs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(B!==fa&&r.convert(B)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&B!==la&&!J)}function m(B){if(B==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const x=m(p);x!==p&&(oe("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const _=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),b=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),O=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),F=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),k=A>0,N=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:A,maxTextureSize:C,maxCubemapSize:b,maxAttributes:v,maxVertexUniforms:O,maxVaryings:U,maxFragmentUniforms:F,vertexTextures:k,maxSamples:N}}function Q3(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new Sr,h=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const y=_.length!==0||S||r!==0||l;return l=S,r=_.length,y},this.beginShadows=function(){u=!0,x(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(_,S){i=x(_,S,0)},this.setState=function(_,S,y){const A=_.clippingPlanes,C=_.clipIntersection,b=_.clipShadows,v=o.get(_);if(!l||A===null||A.length===0||u&&!b)u?x(null):p();else{const O=u?0:r,U=O*4;let F=v.clippingState||null;m.value=F,F=x(A,S,U,y);for(let k=0;k!==U;++k)F[k]=i[k];v.clippingState=F,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=O}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(_,S,y,A){const C=_!==null?_.length:0;let b=null;if(C!==0){if(b=m.value,A!==!0||b===null){const v=y+C*4,O=S.matrixWorldInverse;h.getNormalMatrix(O),(b===null||b.length<v)&&(b=new Float32Array(v));for(let U=0,F=y;U!==C;++U,F+=4)d.copy(_[U]).applyMatrix4(O,h),d.normal.toArray(b,F),b[F+3]=d.constant}m.value=b,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,b}}function J3(o){let e=new WeakMap;function i(d,h){return h===wd?d.mapping=ys:h===Dd&&(d.mapping=Ms),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===wd||h===Dd)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new ey(m.height);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const Wa=4,Bx=[.125,.215,.35,.446,.526,.582],yr=20,$3=256,Do=new Ug,Fx=new Ve;let md=null,xd=0,gd=0,_d=!1;const t1=new ct;class Ix{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=t1}=u;md=this._renderer.getRenderTarget(),xd=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),_d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(md,xd,gd),this._renderer.xr.enabled=_d,e.scissorTest=!1,gs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===ys||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),md=this._renderer.getRenderTarget(),xd=this._renderer.getActiveCubeFace(),gd=this._renderer.getActiveMipmapLevel(),_d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:di,minFilter:di,generateMipmaps:!1,type:Rs,format:yi,colorSpace:Es,depthBuffer:!1},l=Hx(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hx(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=e1(u)),this._blurMaterial=i1(u,e,i)}return l}_compileMaterial(e){const i=new Li(new Za,e);this._renderer.compile(i,Do)}_sceneToCubeUV(e,i,r,l,u){const m=new Si(90,1,i,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],_=this._renderer,S=_.autoClear,y=_.toneMapping;_.getClearColor(Fx),_.toneMapping=qa,_.autoClear=!1,_.state.buffers.depth.getReversed()&&(_.setRenderTarget(l),_.clearDepth(),_.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Li(new Ho,new yg({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,b=C.material;let v=!1;const O=e.background;O?O.isColor&&(b.color.copy(O),e.background=null,v=!0):(b.color.copy(Fx),v=!0);for(let U=0;U<6;U++){const F=U%3;F===0?(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+x[U],u.y,u.z)):F===1?(m.up.set(0,0,p[U]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+x[U],u.z)):(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+x[U]));const k=this._cubeSize;gs(l,F*k,U>2?k:0,k,k),_.setRenderTarget(l),v&&_.render(C,m),_.render(e,m)}_.toneMapping=y,_.autoClear=S,e.background=O}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===ys||e.mapping===Ms;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Gx());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;gs(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Do)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget;if(this._ggxMaterial===null){const O=3*Math.max(this._cubeSize,16),U=4*this._cubeSize;this._ggxMaterial=n1(this._lodMax,O,U)}const d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,p=r/(this._lodMeshes.length-1),x=i/(this._lodMeshes.length-1),_=Math.sqrt(p*p-x*x),S=.05+p*.95,y=_*S,{_lodMax:A}=this,C=this._sizeLods[r],b=3*C*(r>A-Wa?r-A+Wa:0),v=4*(this._cubeSize-C);m.envMap.value=e.texture,m.roughness.value=y,m.mipInt.value=A-i,gs(u,b,v,3*C,2*C),l.setRenderTarget(u),l.render(h,Do),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=A-r,gs(e,b,v,3*C,2*C),l.setRenderTarget(e),l.render(h,Do)}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&nn("blur direction must be either latitudinal or longitudinal!");const x=3,_=this._lodMeshes[l];_.material=p;const S=p.uniforms,y=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*yr-1),C=u/A,b=isFinite(u)?1+Math.floor(x*C):yr;b>yr&&oe(`sigmaRadians, ${u}, is too large and will clip, as it requested ${b} samples when the maximum is set to ${yr}`);const v=[];let O=0;for(let B=0;B<yr;++B){const J=B/C,w=Math.exp(-J*J/2);v.push(w),B===0?O+=w:B<b&&(O+=2*w)}for(let B=0;B<v.length;B++)v[B]=v[B]/O;S.envMap.value=e.texture,S.samples.value=b,S.weights.value=v,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:U}=this;S.dTheta.value=A,S.mipInt.value=U-r;const F=this._sizeLods[l],k=3*F*(l>U-Wa?l-U+Wa:0),N=4*(this._cubeSize-F);gs(i,k,N,3*F,2*F),m.setRenderTarget(i),m.render(_,Do)}}function e1(o){const e=[],i=[],r=[];let l=o;const u=o-Wa+1+Bx.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);e.push(h);let m=1/h;d>o-Wa?m=Bx[d-o+Wa-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),x=-p,_=1+p,S=[x,x,_,x,_,_,x,x,_,_,x,_],y=6,A=6,C=3,b=2,v=1,O=new Float32Array(C*A*y),U=new Float32Array(b*A*y),F=new Float32Array(v*A*y);for(let N=0;N<y;N++){const B=N%3*2/3-1,J=N>2?0:-1,w=[B,J,0,B+2/3,J,0,B+2/3,J+1,0,B,J,0,B+2/3,J+1,0,B,J+1,0];O.set(w,C*A*N),U.set(S,b*A*N);const R=[N,N,N,N,N,N];F.set(R,v*A*N)}const k=new Za;k.setAttribute("position",new Ui(O,C)),k.setAttribute("uv",new Ui(U,b)),k.setAttribute("faceIndex",new Ui(F,v)),r.push(new Li(k,null)),l>Wa&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function Hx(o,e,i){const r=new ja(o,e,i);return r.texture.mapping=Rc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function gs(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function n1(o,e,i){return new Mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:$3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wc(),fragmentShader:`

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
		`,blending:ca,depthTest:!1,depthWrite:!1})}function i1(o,e,i){const r=new Float32Array(yr),l=new ct(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:yr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:wc(),fragmentShader:`

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
		`,blending:ca,depthTest:!1,depthWrite:!1})}function Gx(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wc(),fragmentShader:`

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
		`,blending:ca,depthTest:!1,depthWrite:!1})}function Vx(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ca,depthTest:!1,depthWrite:!1})}function wc(){return`

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
	`}function a1(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===wd||m===Dd,x=m===ys||m===Ms;if(p||x){let _=e.get(h);const S=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new Ix(o)),_=p?i.fromEquirectangular(h,_):i.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const y=h.image;return p&&y&&y.height>0||x&&y&&l(y)?(i===null&&(i=new Ix(o)),_=p?i.fromEquirectangular(h):i.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",u),_.texture):null}}}return h}function l(h){let m=0;const p=6;for(let x=0;x<p;x++)h[x]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function r1(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Po("WebGLRenderer: "+r+" extension not supported."),l}}}function s1(o,e,i,r){const l={},u=new WeakMap;function d(_){const S=_.target;S.index!==null&&e.remove(S.index);for(const A in S.attributes)e.remove(S.attributes[A]);S.removeEventListener("dispose",d),delete l[S.id];const y=u.get(S);y&&(e.remove(y),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(_,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(_){const S=_.attributes;for(const y in S)e.update(S[y],o.ARRAY_BUFFER)}function p(_){const S=[],y=_.index,A=_.attributes.position;let C=0;if(y!==null){const O=y.array;C=y.version;for(let U=0,F=O.length;U<F;U+=3){const k=O[U+0],N=O[U+1],B=O[U+2];S.push(k,N,N,B,B,k)}}else if(A!==void 0){const O=A.array;C=A.version;for(let U=0,F=O.length/3-1;U<F;U+=3){const k=U+0,N=U+1,B=U+2;S.push(k,N,N,B,B,k)}}else return;const b=new(_g(S)?Eg:Mg)(S,1);b.version=C;const v=u.get(_);v&&e.remove(v),u.set(_,b)}function x(_){const S=u.get(_);if(S){const y=_.index;y!==null&&S.version<y.version&&p(_)}else p(_);return u.get(_)}return{get:h,update:m,getWireframeAttribute:x}}function o1(o,e,i){let r;function l(S){r=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function m(S,y){o.drawElements(r,y,u,S*d),i.update(y,r,1)}function p(S,y,A){A!==0&&(o.drawElementsInstanced(r,y,u,S*d,A),i.update(y,r,A))}function x(S,y,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,u,S,0,A);let b=0;for(let v=0;v<A;v++)b+=y[v];i.update(b,r,1)}function _(S,y,A,C){if(A===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let v=0;v<S.length;v++)p(S[v]/d,y[v],C[v]);else{b.multiDrawElementsInstancedWEBGL(r,y,0,u,S,0,C,0,A);let v=0;for(let O=0;O<A;O++)v+=y[O]*C[O];i.update(v,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=x,this.renderMultiDrawInstances=_}function l1(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:nn("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function c1(o,e,i){const r=new WeakMap,l=new an;function u(d,h,m){const p=d.morphTargetInfluences,x=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=x!==void 0?x.length:0;let S=r.get(h);if(S===void 0||S.count!==_){let R=function(){J.dispose(),r.delete(h),h.removeEventListener("dispose",R)};var y=R;S!==void 0&&S.texture.dispose();const A=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],O=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let F=0;A===!0&&(F=1),C===!0&&(F=2),b===!0&&(F=3);let k=h.attributes.position.count*F,N=1;k>e.maxTextureSize&&(N=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const B=new Float32Array(k*N*4*_),J=new vg(B,k,N,_);J.type=la,J.needsUpdate=!0;const w=F*4;for(let V=0;V<_;V++){const tt=v[V],rt=O[V],ht=U[V],ft=k*N*4*V;for(let P=0;P<tt.count;P++){const j=P*w;A===!0&&(l.fromBufferAttribute(tt,P),B[ft+j+0]=l.x,B[ft+j+1]=l.y,B[ft+j+2]=l.z,B[ft+j+3]=0),C===!0&&(l.fromBufferAttribute(rt,P),B[ft+j+4]=l.x,B[ft+j+5]=l.y,B[ft+j+6]=l.z,B[ft+j+7]=0),b===!0&&(l.fromBufferAttribute(ht,P),B[ft+j+8]=l.x,B[ft+j+9]=l.y,B[ft+j+10]=l.z,B[ft+j+11]=ht.itemSize===4?l.w:1)}}S={count:_,texture:J,size:new Ue(k,N)},r.set(h,S),h.addEventListener("dispose",R)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let A=0;for(let b=0;b<p.length;b++)A+=p[b];const C=h.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function u1(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,x=m.geometry,_=e.get(m,x);if(l.get(_)!==p&&(e.update(_),l.set(_,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return _}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const Ng=new On,kx=new wg(1,1),Og=new vg,zg=new Bb,Pg=new Rg,Xx=[],Wx=[],qx=new Float32Array(16),Yx=new Float32Array(9),jx=new Float32Array(4);function ws(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=Xx[l];if(u===void 0&&(u=new Float32Array(l),Xx[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function mn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function xn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Dc(o,e){let i=Wx[e];i===void 0&&(i=new Int32Array(e),Wx[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function f1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function d1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2fv(this.addr,e),xn(i,e)}}function h1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(mn(i,e))return;o.uniform3fv(this.addr,e),xn(i,e)}}function p1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4fv(this.addr,e),xn(i,e)}}function m1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),xn(i,e)}else{if(mn(i,r))return;jx.set(r),o.uniformMatrix2fv(this.addr,!1,jx),xn(i,r)}}function x1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),xn(i,e)}else{if(mn(i,r))return;Yx.set(r),o.uniformMatrix3fv(this.addr,!1,Yx),xn(i,r)}}function g1(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(mn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),xn(i,e)}else{if(mn(i,r))return;qx.set(r),o.uniformMatrix4fv(this.addr,!1,qx),xn(i,r)}}function _1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function v1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2iv(this.addr,e),xn(i,e)}}function S1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;o.uniform3iv(this.addr,e),xn(i,e)}}function b1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4iv(this.addr,e),xn(i,e)}}function y1(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function M1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(mn(i,e))return;o.uniform2uiv(this.addr,e),xn(i,e)}}function E1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(mn(i,e))return;o.uniform3uiv(this.addr,e),xn(i,e)}}function T1(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(mn(i,e))return;o.uniform4uiv(this.addr,e),xn(i,e)}}function A1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(kx.compareFunction=gg,u=kx):u=Ng,i.setTexture2D(e||u,l)}function R1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||zg,l)}function C1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Pg,l)}function w1(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Og,l)}function D1(o){switch(o){case 5126:return f1;case 35664:return d1;case 35665:return h1;case 35666:return p1;case 35674:return m1;case 35675:return x1;case 35676:return g1;case 5124:case 35670:return _1;case 35667:case 35671:return v1;case 35668:case 35672:return S1;case 35669:case 35673:return b1;case 5125:return y1;case 36294:return M1;case 36295:return E1;case 36296:return T1;case 35678:case 36198:case 36298:case 36306:case 35682:return A1;case 35679:case 36299:case 36307:return R1;case 35680:case 36300:case 36308:case 36293:return C1;case 36289:case 36303:case 36311:case 36292:return w1}}function U1(o,e){o.uniform1fv(this.addr,e)}function L1(o,e){const i=ws(e,this.size,2);o.uniform2fv(this.addr,i)}function N1(o,e){const i=ws(e,this.size,3);o.uniform3fv(this.addr,i)}function O1(o,e){const i=ws(e,this.size,4);o.uniform4fv(this.addr,i)}function z1(o,e){const i=ws(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function P1(o,e){const i=ws(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function B1(o,e){const i=ws(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function F1(o,e){o.uniform1iv(this.addr,e)}function I1(o,e){o.uniform2iv(this.addr,e)}function H1(o,e){o.uniform3iv(this.addr,e)}function G1(o,e){o.uniform4iv(this.addr,e)}function V1(o,e){o.uniform1uiv(this.addr,e)}function k1(o,e){o.uniform2uiv(this.addr,e)}function X1(o,e){o.uniform3uiv(this.addr,e)}function W1(o,e){o.uniform4uiv(this.addr,e)}function q1(o,e,i){const r=this.cache,l=e.length,u=Dc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),xn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||Ng,u[d])}function Y1(o,e,i){const r=this.cache,l=e.length,u=Dc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),xn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||zg,u[d])}function j1(o,e,i){const r=this.cache,l=e.length,u=Dc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),xn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Pg,u[d])}function Z1(o,e,i){const r=this.cache,l=e.length,u=Dc(i,l);mn(r,u)||(o.uniform1iv(this.addr,u),xn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Og,u[d])}function K1(o){switch(o){case 5126:return U1;case 35664:return L1;case 35665:return N1;case 35666:return O1;case 35674:return z1;case 35675:return P1;case 35676:return B1;case 5124:case 35670:return F1;case 35667:case 35671:return I1;case 35668:case 35672:return H1;case 35669:case 35673:return G1;case 5125:return V1;case 36294:return k1;case 36295:return X1;case 36296:return W1;case 35678:case 36198:case 36298:case 36306:case 35682:return q1;case 35679:case 36299:case 36307:return Y1;case 35680:case 36300:case 36308:case 36293:return j1;case 36289:case 36303:case 36311:case 36292:return Z1}}class Q1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=D1(i.type)}}class J1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=K1(i.type)}}class $1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const vd=/(\w+)(\])?(\[|\.)?/g;function Zx(o,e){o.seq.push(e),o.map[e.id]=e}function tE(o,e,i){const r=o.name,l=r.length;for(vd.lastIndex=0;;){const u=vd.exec(r),d=vd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){Zx(i,p===void 0?new Q1(h,o,e):new J1(h,o,e));break}else{let _=i.map[h];_===void 0&&(_=new $1(h),Zx(i,_)),i=_}}}class Mc{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);tE(u,d,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function Kx(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const eE=37297;let nE=0;function iE(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const Qx=new fe;function aE(o){De._getMatrix(Qx,De.workingColorSpace,o);const e=`mat3( ${Qx.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(o)){case Ec:return[e,"LinearTransferOETF"];case Ge:return[e,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function Jx(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+iE(o.getShaderSource(e),h)}else return u}function rE(o,e){const i=aE(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function sE(o,e){let i;switch(e){case ub:i="Linear";break;case fb:i="Reinhard";break;case db:i="Cineon";break;case hb:i="ACESFilmic";break;case mb:i="AgX";break;case xb:i="Neutral";break;case pb:i="Custom";break;default:oe("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const _c=new ct;function oE(){De.getLuminanceCoefficients(_c);const o=_c.x.toFixed(4),e=_c.y.toFixed(4),i=_c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lE(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function cE(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function uE(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Uo(o){return o!==""}function $x(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function tg(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fE=/^[ \t]*#include +<([\w\d./]+)>/gm;function lh(o){return o.replace(fE,hE)}const dE=new Map;function hE(o,e){let i=pe[e];if(i===void 0){const r=dE.get(e);if(r!==void 0)i=pe[r],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return lh(i)}const pE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function eg(o){return o.replace(pE,mE)}function mE(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function ng(o){let e=`precision ${o.precision} float;
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
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xE(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===og?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===kS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ra&&(e="SHADOWMAP_TYPE_VSM"),e}function gE(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case ys:case Ms:e="ENVMAP_TYPE_CUBE";break;case Rc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _E(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Ms:e="ENVMAP_MODE_REFRACTION";break}return e}function vE(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case lg:e="ENVMAP_BLENDING_MULTIPLY";break;case lb:e="ENVMAP_BLENDING_MIX";break;case cb:e="ENVMAP_BLENDING_ADD";break}return e}function SE(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function bE(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=xE(i),p=gE(i),x=_E(i),_=vE(i),S=SE(i),y=lE(i),A=cE(u),C=l.createProgram();let b,v,O=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(b=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Uo).join(`
`),b.length>0&&(b+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Uo).join(`
`),v.length>0&&(v+=`
`)):(b=[ng(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+x:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),v=[ng(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+x:"",i.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qa?"#define TONE_MAPPING":"",i.toneMapping!==qa?pe.tonemapping_pars_fragment:"",i.toneMapping!==qa?sE("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,rE("linearToOutputTexel",i.outputColorSpace),oE(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Uo).join(`
`)),d=lh(d),d=$x(d,i),d=tg(d,i),h=lh(h),h=$x(h,i),h=tg(h,i),d=eg(d),h=eg(h),i.isRawShaderMaterial!==!0&&(O=`#version 300 es
`,b=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,v=["#define varying in",i.glslVersion===xx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===xx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=O+b+d,F=O+v+h,k=Kx(l,l.VERTEX_SHADER,U),N=Kx(l,l.FRAGMENT_SHADER,F);l.attachShader(C,k),l.attachShader(C,N),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function B(V){if(o.debug.checkShaderErrors){const tt=l.getProgramInfoLog(C)||"",rt=l.getShaderInfoLog(k)||"",ht=l.getShaderInfoLog(N)||"",ft=tt.trim(),P=rt.trim(),j=ht.trim();let Y=!0,gt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(Y=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,k,N);else{const _t=Jx(l,k,"vertex"),L=Jx(l,N,"fragment");nn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ft+`
`+_t+`
`+L)}else ft!==""?oe("WebGLProgram: Program Info Log:",ft):(P===""||j==="")&&(gt=!1);gt&&(V.diagnostics={runnable:Y,programLog:ft,vertexShader:{log:P,prefix:b},fragmentShader:{log:j,prefix:v}})}l.deleteShader(k),l.deleteShader(N),J=new Mc(l,C),w=uE(l,C)}let J;this.getUniforms=function(){return J===void 0&&B(this),J};let w;this.getAttributes=function(){return w===void 0&&B(this),w};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,eE)),R},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=nE++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=k,this.fragmentShader=N,this}let yE=0;class ME{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new EE(e),i.set(e,r)),r}}class EE{constructor(e){this.id=yE++,this.code=e,this.usedTimes=0}}function TE(o,e,i,r,l,u,d){const h=new Sg,m=new ME,p=new Set,x=[],_=l.logarithmicDepthBuffer,S=l.vertexTextures;let y=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(w){return p.add(w),w===0?"uv":`uv${w}`}function b(w,R,V,tt,rt){const ht=tt.fog,ft=rt.geometry,P=w.isMeshStandardMaterial?tt.environment:null,j=(w.isMeshStandardMaterial?i:e).get(w.envMap||P),Y=j&&j.mapping===Rc?j.image.height:null,gt=A[w.type];w.precision!==null&&(y=l.getMaxPrecision(w.precision),y!==w.precision&&oe("WebGLProgram.getParameters:",w.precision,"not supported, using",y,"instead."));const _t=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,L=_t!==void 0?_t.length:0;let at=0;ft.morphAttributes.position!==void 0&&(at=1),ft.morphAttributes.normal!==void 0&&(at=2),ft.morphAttributes.color!==void 0&&(at=3);let bt,Et,Ot,nt;if(gt){const Ae=wi[gt];bt=Ae.vertexShader,Et=Ae.fragmentShader}else bt=w.vertexShader,Et=w.fragmentShader,m.update(w),Ot=m.getVertexShaderID(w),nt=m.getFragmentShaderID(w);const lt=o.getRenderTarget(),Ct=o.state.buffers.depth.getReversed(),It=rt.isInstancedMesh===!0,Xt=rt.isBatchedMesh===!0,le=!!w.map,$e=!!w.matcap,de=!!j,Te=!!w.aoMap,I=!!w.lightMap,he=!!w.bumpMap,me=!!w.normalMap,Oe=!!w.displacementMap,Ht=!!w.emissiveMap,ke=!!w.metalnessMap,jt=!!w.roughnessMap,ae=w.anisotropy>0,D=w.clearcoat>0,M=w.dispersion>0,K=w.iridescence>0,pt=w.sheen>0,vt=w.transmission>0,ot=ae&&!!w.anisotropyMap,qt=D&&!!w.clearcoatMap,Ut=D&&!!w.clearcoatNormalMap,Qt=D&&!!w.clearcoatRoughnessMap,Wt=K&&!!w.iridescenceMap,St=K&&!!w.iridescenceThicknessMap,Mt=pt&&!!w.sheenColorMap,Yt=pt&&!!w.sheenRoughnessMap,Gt=!!w.specularMap,Nt=!!w.specularColorMap,ne=!!w.specularIntensityMap,H=vt&&!!w.transmissionMap,wt=vt&&!!w.thicknessMap,At=!!w.gradientMap,Rt=!!w.alphaMap,yt=w.alphaTest>0,xt=!!w.alphaHash,Pt=!!w.extensions;let ie=qa;w.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ie=o.toneMapping);const Be={shaderID:gt,shaderType:w.type,shaderName:w.name,vertexShader:bt,fragmentShader:Et,defines:w.defines,customVertexShaderID:Ot,customFragmentShaderID:nt,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:y,batching:Xt,batchingColor:Xt&&rt._colorsTexture!==null,instancing:It,instancingColor:It&&rt.instanceColor!==null,instancingMorph:It&&rt.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:lt===null?o.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Es,alphaToCoverage:!!w.alphaToCoverage,map:le,matcap:$e,envMap:de,envMapMode:de&&j.mapping,envMapCubeUVHeight:Y,aoMap:Te,lightMap:I,bumpMap:he,normalMap:me,displacementMap:S&&Oe,emissiveMap:Ht,normalMapObjectSpace:me&&w.normalMapType===bb,normalMapTangentSpace:me&&w.normalMapType===Sb,metalnessMap:ke,roughnessMap:jt,anisotropy:ae,anisotropyMap:ot,clearcoat:D,clearcoatMap:qt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Qt,dispersion:M,iridescence:K,iridescenceMap:Wt,iridescenceThicknessMap:St,sheen:pt,sheenColorMap:Mt,sheenRoughnessMap:Yt,specularMap:Gt,specularColorMap:Nt,specularIntensityMap:ne,transmission:vt,transmissionMap:H,thicknessMap:wt,gradientMap:At,opaque:w.transparent===!1&&w.blending===vs&&w.alphaToCoverage===!1,alphaMap:Rt,alphaTest:yt,alphaHash:xt,combine:w.combine,mapUv:le&&C(w.map.channel),aoMapUv:Te&&C(w.aoMap.channel),lightMapUv:I&&C(w.lightMap.channel),bumpMapUv:he&&C(w.bumpMap.channel),normalMapUv:me&&C(w.normalMap.channel),displacementMapUv:Oe&&C(w.displacementMap.channel),emissiveMapUv:Ht&&C(w.emissiveMap.channel),metalnessMapUv:ke&&C(w.metalnessMap.channel),roughnessMapUv:jt&&C(w.roughnessMap.channel),anisotropyMapUv:ot&&C(w.anisotropyMap.channel),clearcoatMapUv:qt&&C(w.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&C(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qt&&C(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&C(w.iridescenceMap.channel),iridescenceThicknessMapUv:St&&C(w.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&C(w.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&C(w.sheenRoughnessMap.channel),specularMapUv:Gt&&C(w.specularMap.channel),specularColorMapUv:Nt&&C(w.specularColorMap.channel),specularIntensityMapUv:ne&&C(w.specularIntensityMap.channel),transmissionMapUv:H&&C(w.transmissionMap.channel),thicknessMapUv:wt&&C(w.thicknessMap.channel),alphaMapUv:Rt&&C(w.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(me||ae),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:rt.isPoints===!0&&!!ft.attributes.uv&&(le||Rt),fog:!!ht,useFog:w.fog===!0,fogExp2:!!ht&&ht.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:_,reversedDepthBuffer:Ct,skinning:rt.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:at,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:ie,decodeVideoTexture:le&&w.map.isVideoTexture===!0&&De.getTransfer(w.map.colorSpace)===Ge,decodeVideoTextureEmissive:Ht&&w.emissiveMap.isVideoTexture===!0&&De.getTransfer(w.emissiveMap.colorSpace)===Ge,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===sa,flipSided:w.side===Vn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Pt&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&w.extensions.multiDraw===!0||Xt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Be.vertexUv1s=p.has(1),Be.vertexUv2s=p.has(2),Be.vertexUv3s=p.has(3),p.clear(),Be}function v(w){const R=[];if(w.shaderID?R.push(w.shaderID):(R.push(w.customVertexShaderID),R.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)R.push(V),R.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(O(R,w),U(R,w),R.push(o.outputColorSpace)),R.push(w.customProgramCacheKey),R.join()}function O(w,R){w.push(R.precision),w.push(R.outputColorSpace),w.push(R.envMapMode),w.push(R.envMapCubeUVHeight),w.push(R.mapUv),w.push(R.alphaMapUv),w.push(R.lightMapUv),w.push(R.aoMapUv),w.push(R.bumpMapUv),w.push(R.normalMapUv),w.push(R.displacementMapUv),w.push(R.emissiveMapUv),w.push(R.metalnessMapUv),w.push(R.roughnessMapUv),w.push(R.anisotropyMapUv),w.push(R.clearcoatMapUv),w.push(R.clearcoatNormalMapUv),w.push(R.clearcoatRoughnessMapUv),w.push(R.iridescenceMapUv),w.push(R.iridescenceThicknessMapUv),w.push(R.sheenColorMapUv),w.push(R.sheenRoughnessMapUv),w.push(R.specularMapUv),w.push(R.specularColorMapUv),w.push(R.specularIntensityMapUv),w.push(R.transmissionMapUv),w.push(R.thicknessMapUv),w.push(R.combine),w.push(R.fogExp2),w.push(R.sizeAttenuation),w.push(R.morphTargetsCount),w.push(R.morphAttributeCount),w.push(R.numDirLights),w.push(R.numPointLights),w.push(R.numSpotLights),w.push(R.numSpotLightMaps),w.push(R.numHemiLights),w.push(R.numRectAreaLights),w.push(R.numDirLightShadows),w.push(R.numPointLightShadows),w.push(R.numSpotLightShadows),w.push(R.numSpotLightShadowsWithMaps),w.push(R.numLightProbes),w.push(R.shadowMapType),w.push(R.toneMapping),w.push(R.numClippingPlanes),w.push(R.numClipIntersection),w.push(R.depthPacking)}function U(w,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),R.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reversedDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),w.push(h.mask)}function F(w){const R=A[w.type];let V;if(R){const tt=wi[R];V=Qb.clone(tt.uniforms)}else V=w.uniforms;return V}function k(w,R){let V;for(let tt=0,rt=x.length;tt<rt;tt++){const ht=x[tt];if(ht.cacheKey===R){V=ht,++V.usedTimes;break}}return V===void 0&&(V=new bE(o,R,w,u),x.push(V)),V}function N(w){if(--w.usedTimes===0){const R=x.indexOf(w);x[R]=x[x.length-1],x.pop(),w.destroy()}}function B(w){m.remove(w)}function J(){m.dispose()}return{getParameters:b,getProgramCacheKey:v,getUniforms:F,acquireProgram:k,releaseProgram:N,releaseShaderCache:B,programs:x,dispose:J}}function AE(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function RE(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function ig(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function ag(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(_,S,y,A,C,b){let v=o[e];return v===void 0?(v={id:_.id,object:_,geometry:S,material:y,groupOrder:A,renderOrder:_.renderOrder,z:C,group:b},o[e]=v):(v.id=_.id,v.object=_,v.geometry=S,v.material=y,v.groupOrder=A,v.renderOrder=_.renderOrder,v.z=C,v.group=b),e++,v}function h(_,S,y,A,C,b){const v=d(_,S,y,A,C,b);y.transmission>0?r.push(v):y.transparent===!0?l.push(v):i.push(v)}function m(_,S,y,A,C,b){const v=d(_,S,y,A,C,b);y.transmission>0?r.unshift(v):y.transparent===!0?l.unshift(v):i.unshift(v)}function p(_,S){i.length>1&&i.sort(_||RE),r.length>1&&r.sort(S||ig),l.length>1&&l.sort(S||ig)}function x(){for(let _=e,S=o.length;_<S;_++){const y=o[_];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:x,sort:p}}function CE(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new ag,o.set(r,[d])):l>=u.length?(d=new ag,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function wE(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ct,color:new Ve};break;case"SpotLight":i={position:new ct,direction:new ct,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ct,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ct,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":i={color:new Ve,position:new ct,halfWidth:new ct,halfHeight:new ct};break}return o[e.id]=i,i}}}function DE(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let UE=0;function LE(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function NE(o){const e=new wE,i=DE(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ct);const l=new ct,u=new pn,d=new pn;function h(p){let x=0,_=0,S=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let y=0,A=0,C=0,b=0,v=0,O=0,U=0,F=0,k=0,N=0,B=0;p.sort(LE);for(let w=0,R=p.length;w<R;w++){const V=p[w],tt=V.color,rt=V.intensity,ht=V.distance,ft=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)x+=tt.r*rt,_+=tt.g*rt,S+=tt.b*rt;else if(V.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(V.sh.coefficients[P],rt);B++}else if(V.isDirectionalLight){const P=e.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const j=V.shadow,Y=i.get(V);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,r.directionalShadow[y]=Y,r.directionalShadowMap[y]=ft,r.directionalShadowMatrix[y]=V.shadow.matrix,O++}r.directional[y]=P,y++}else if(V.isSpotLight){const P=e.get(V);P.position.setFromMatrixPosition(V.matrixWorld),P.color.copy(tt).multiplyScalar(rt),P.distance=ht,P.coneCos=Math.cos(V.angle),P.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),P.decay=V.decay,r.spot[C]=P;const j=V.shadow;if(V.map&&(r.spotLightMap[k]=V.map,k++,j.updateMatrices(V),V.castShadow&&N++),r.spotLightMatrix[C]=j.matrix,V.castShadow){const Y=i.get(V);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,r.spotShadow[C]=Y,r.spotShadowMap[C]=ft,F++}C++}else if(V.isRectAreaLight){const P=e.get(V);P.color.copy(tt).multiplyScalar(rt),P.halfWidth.set(V.width*.5,0,0),P.halfHeight.set(0,V.height*.5,0),r.rectArea[b]=P,b++}else if(V.isPointLight){const P=e.get(V);if(P.color.copy(V.color).multiplyScalar(V.intensity),P.distance=V.distance,P.decay=V.decay,V.castShadow){const j=V.shadow,Y=i.get(V);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,Y.shadowCameraNear=j.camera.near,Y.shadowCameraFar=j.camera.far,r.pointShadow[A]=Y,r.pointShadowMap[A]=ft,r.pointShadowMatrix[A]=V.shadow.matrix,U++}r.point[A]=P,A++}else if(V.isHemisphereLight){const P=e.get(V);P.skyColor.copy(V.color).multiplyScalar(rt),P.groundColor.copy(V.groundColor).multiplyScalar(rt),r.hemi[v]=P,v++}}b>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Lt.LTC_FLOAT_1,r.rectAreaLTC2=Lt.LTC_FLOAT_2):(r.rectAreaLTC1=Lt.LTC_HALF_1,r.rectAreaLTC2=Lt.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=_,r.ambient[2]=S;const J=r.hash;(J.directionalLength!==y||J.pointLength!==A||J.spotLength!==C||J.rectAreaLength!==b||J.hemiLength!==v||J.numDirectionalShadows!==O||J.numPointShadows!==U||J.numSpotShadows!==F||J.numSpotMaps!==k||J.numLightProbes!==B)&&(r.directional.length=y,r.spot.length=C,r.rectArea.length=b,r.point.length=A,r.hemi.length=v,r.directionalShadow.length=O,r.directionalShadowMap.length=O,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=F,r.spotShadowMap.length=F,r.directionalShadowMatrix.length=O,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=F+k-N,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=B,J.directionalLength=y,J.pointLength=A,J.spotLength=C,J.rectAreaLength=b,J.hemiLength=v,J.numDirectionalShadows=O,J.numPointShadows=U,J.numSpotShadows=F,J.numSpotMaps=k,J.numLightProbes=B,r.version=UE++)}function m(p,x){let _=0,S=0,y=0,A=0,C=0;const b=x.matrixWorldInverse;for(let v=0,O=p.length;v<O;v++){const U=p[v];if(U.isDirectionalLight){const F=r.directional[_];F.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(b),_++}else if(U.isSpotLight){const F=r.spot[y];F.position.setFromMatrixPosition(U.matrixWorld),F.position.applyMatrix4(b),F.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),F.direction.sub(l),F.direction.transformDirection(b),y++}else if(U.isRectAreaLight){const F=r.rectArea[A];F.position.setFromMatrixPosition(U.matrixWorld),F.position.applyMatrix4(b),d.identity(),u.copy(U.matrixWorld),u.premultiply(b),d.extractRotation(u),F.halfWidth.set(U.width*.5,0,0),F.halfHeight.set(0,U.height*.5,0),F.halfWidth.applyMatrix4(d),F.halfHeight.applyMatrix4(d),A++}else if(U.isPointLight){const F=r.point[S];F.position.setFromMatrixPosition(U.matrixWorld),F.position.applyMatrix4(b),S++}else if(U.isHemisphereLight){const F=r.hemi[C];F.direction.setFromMatrixPosition(U.matrixWorld),F.direction.transformDirection(b),C++}}}return{setup:h,setupView:m,state:r}}function rg(o){const e=new NE(o),i=[],r=[];function l(x){p.camera=x,i.length=0,r.length=0}function u(x){i.push(x)}function d(x){r.push(x)}function h(){e.setup(i)}function m(x){e.setupView(i,x)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function OE(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new rg(o),e.set(l,[h])):u>=d.length?(h=new rg(o),d.push(h)):h=d[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const zE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PE=`uniform sampler2D shadow_pass;
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
}`;function BE(o,e,i){let r=new Cg;const l=new Ue,u=new Ue,d=new an,h=new oy({depthPacking:vb}),m=new ly,p={},x=i.maxTextureSize,_={[Ya]:Vn,[Vn]:Ya,[sa]:sa},S=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:zE,fragmentShader:PE}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const A=new Za;A.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Li(A,S),b=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=og;let v=this.type;this.render=function(N,B,J){if(b.enabled===!1||b.autoUpdate===!1&&b.needsUpdate===!1||N.length===0)return;const w=o.getRenderTarget(),R=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),tt=o.state;tt.setBlending(ca),tt.buffers.depth.getReversed()===!0?tt.buffers.color.setClear(0,0,0,0):tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);const rt=v!==ra&&this.type===ra,ht=v===ra&&this.type!==ra;for(let ft=0,P=N.length;ft<P;ft++){const j=N[ft],Y=j.shadow;if(Y===void 0){oe("WebGLShadowMap:",j,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const gt=Y.getFrameExtents();if(l.multiply(gt),u.copy(Y.mapSize),(l.x>x||l.y>x)&&(l.x>x&&(u.x=Math.floor(x/gt.x),l.x=u.x*gt.x,Y.mapSize.x=u.x),l.y>x&&(u.y=Math.floor(x/gt.y),l.y=u.y*gt.y,Y.mapSize.y=u.y)),Y.map===null||rt===!0||ht===!0){const L=this.type!==ra?{minFilter:ti,magFilter:ti}:{};Y.map!==null&&Y.map.dispose(),Y.map=new ja(l.x,l.y,L),Y.map.texture.name=j.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const _t=Y.getViewportCount();for(let L=0;L<_t;L++){const at=Y.getViewport(L);d.set(u.x*at.x,u.y*at.y,u.x*at.z,u.y*at.w),tt.viewport(d),Y.updateMatrices(j,L),r=Y.getFrustum(),F(B,J,Y.camera,j,this.type)}Y.isPointLightShadow!==!0&&this.type===ra&&O(Y,J),Y.needsUpdate=!1}v=this.type,b.needsUpdate=!1,o.setRenderTarget(w,R,V)};function O(N,B){const J=e.update(C);S.defines.VSM_SAMPLES!==N.blurSamples&&(S.defines.VSM_SAMPLES=N.blurSamples,y.defines.VSM_SAMPLES=N.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ja(l.x,l.y)),S.uniforms.shadow_pass.value=N.map.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(B,null,J,S,C,null),y.uniforms.shadow_pass.value=N.mapPass.texture,y.uniforms.resolution.value=N.mapSize,y.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(B,null,J,y,C,null)}function U(N,B,J,w){let R=null;const V=J.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(V!==void 0)R=V;else if(R=J.isPointLight===!0?m:h,o.localClippingEnabled&&B.clipShadows===!0&&Array.isArray(B.clippingPlanes)&&B.clippingPlanes.length!==0||B.displacementMap&&B.displacementScale!==0||B.alphaMap&&B.alphaTest>0||B.map&&B.alphaTest>0||B.alphaToCoverage===!0){const tt=R.uuid,rt=B.uuid;let ht=p[tt];ht===void 0&&(ht={},p[tt]=ht);let ft=ht[rt];ft===void 0&&(ft=R.clone(),ht[rt]=ft,B.addEventListener("dispose",k)),R=ft}if(R.visible=B.visible,R.wireframe=B.wireframe,w===ra?R.side=B.shadowSide!==null?B.shadowSide:B.side:R.side=B.shadowSide!==null?B.shadowSide:_[B.side],R.alphaMap=B.alphaMap,R.alphaTest=B.alphaToCoverage===!0?.5:B.alphaTest,R.map=B.map,R.clipShadows=B.clipShadows,R.clippingPlanes=B.clippingPlanes,R.clipIntersection=B.clipIntersection,R.displacementMap=B.displacementMap,R.displacementScale=B.displacementScale,R.displacementBias=B.displacementBias,R.wireframeLinewidth=B.wireframeLinewidth,R.linewidth=B.linewidth,J.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const tt=o.properties.get(R);tt.light=J}return R}function F(N,B,J,w,R){if(N.visible===!1)return;if(N.layers.test(B.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&R===ra)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,N.matrixWorld);const rt=e.update(N),ht=N.material;if(Array.isArray(ht)){const ft=rt.groups;for(let P=0,j=ft.length;P<j;P++){const Y=ft[P],gt=ht[Y.materialIndex];if(gt&&gt.visible){const _t=U(N,gt,w,R);N.onBeforeShadow(o,N,B,J,rt,_t,Y),o.renderBufferDirect(J,null,rt,_t,N,Y),N.onAfterShadow(o,N,B,J,rt,_t,Y)}}}else if(ht.visible){const ft=U(N,ht,w,R);N.onBeforeShadow(o,N,B,J,rt,ft,null),o.renderBufferDirect(J,null,rt,ft,N,null),N.onAfterShadow(o,N,B,J,rt,ft,null)}}const tt=N.children;for(let rt=0,ht=tt.length;rt<ht;rt++)F(tt[rt],B,J,w,R)}function k(N){N.target.removeEventListener("dispose",k);for(const J in p){const w=p[J],R=N.target.uuid;R in w&&(w[R].dispose(),delete w[R])}}}const FE={[yd]:Md,[Ed]:Rd,[Td]:Cd,[bs]:Ad,[Md]:yd,[Rd]:Ed,[Cd]:Td,[Ad]:bs};function IE(o,e){function i(){let H=!1;const wt=new an;let At=null;const Rt=new an(0,0,0,0);return{setMask:function(yt){At!==yt&&!H&&(o.colorMask(yt,yt,yt,yt),At=yt)},setLocked:function(yt){H=yt},setClear:function(yt,xt,Pt,ie,Be){Be===!0&&(yt*=ie,xt*=ie,Pt*=ie),wt.set(yt,xt,Pt,ie),Rt.equals(wt)===!1&&(o.clearColor(yt,xt,Pt,ie),Rt.copy(wt))},reset:function(){H=!1,At=null,Rt.set(-1,0,0,0)}}}function r(){let H=!1,wt=!1,At=null,Rt=null,yt=null;return{setReversed:function(xt){if(wt!==xt){const Pt=e.get("EXT_clip_control");xt?Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.ZERO_TO_ONE_EXT):Pt.clipControlEXT(Pt.LOWER_LEFT_EXT,Pt.NEGATIVE_ONE_TO_ONE_EXT),wt=xt;const ie=yt;yt=null,this.setClear(ie)}},getReversed:function(){return wt},setTest:function(xt){xt?lt(o.DEPTH_TEST):Ct(o.DEPTH_TEST)},setMask:function(xt){At!==xt&&!H&&(o.depthMask(xt),At=xt)},setFunc:function(xt){if(wt&&(xt=FE[xt]),Rt!==xt){switch(xt){case yd:o.depthFunc(o.NEVER);break;case Md:o.depthFunc(o.ALWAYS);break;case Ed:o.depthFunc(o.LESS);break;case bs:o.depthFunc(o.LEQUAL);break;case Td:o.depthFunc(o.EQUAL);break;case Ad:o.depthFunc(o.GEQUAL);break;case Rd:o.depthFunc(o.GREATER);break;case Cd:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Rt=xt}},setLocked:function(xt){H=xt},setClear:function(xt){yt!==xt&&(wt&&(xt=1-xt),o.clearDepth(xt),yt=xt)},reset:function(){H=!1,At=null,Rt=null,yt=null,wt=!1}}}function l(){let H=!1,wt=null,At=null,Rt=null,yt=null,xt=null,Pt=null,ie=null,Be=null;return{setTest:function(Ae){H||(Ae?lt(o.STENCIL_TEST):Ct(o.STENCIL_TEST))},setMask:function(Ae){wt!==Ae&&!H&&(o.stencilMask(Ae),wt=Ae)},setFunc:function(Ae,Cn,kn){(At!==Ae||Rt!==Cn||yt!==kn)&&(o.stencilFunc(Ae,Cn,kn),At=Ae,Rt=Cn,yt=kn)},setOp:function(Ae,Cn,kn){(xt!==Ae||Pt!==Cn||ie!==kn)&&(o.stencilOp(Ae,Cn,kn),xt=Ae,Pt=Cn,ie=kn)},setLocked:function(Ae){H=Ae},setClear:function(Ae){Be!==Ae&&(o.clearStencil(Ae),Be=Ae)},reset:function(){H=!1,wt=null,At=null,Rt=null,yt=null,xt=null,Pt=null,ie=null,Be=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let x={},_={},S=new WeakMap,y=[],A=null,C=!1,b=null,v=null,O=null,U=null,F=null,k=null,N=null,B=new Ve(0,0,0),J=0,w=!1,R=null,V=null,tt=null,rt=null,ht=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,j=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),P=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),P=j>=2);let gt=null,_t={};const L=o.getParameter(o.SCISSOR_BOX),at=o.getParameter(o.VIEWPORT),bt=new an().fromArray(L),Et=new an().fromArray(at);function Ot(H,wt,At,Rt){const yt=new Uint8Array(4),xt=o.createTexture();o.bindTexture(H,xt),o.texParameteri(H,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(H,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Pt=0;Pt<At;Pt++)H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY?o.texImage3D(wt,0,o.RGBA,1,1,Rt,0,o.RGBA,o.UNSIGNED_BYTE,yt):o.texImage2D(wt+Pt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,yt);return xt}const nt={};nt[o.TEXTURE_2D]=Ot(o.TEXTURE_2D,o.TEXTURE_2D,1),nt[o.TEXTURE_CUBE_MAP]=Ot(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[o.TEXTURE_2D_ARRAY]=Ot(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),nt[o.TEXTURE_3D]=Ot(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),lt(o.DEPTH_TEST),d.setFunc(bs),he(!1),me(ux),lt(o.CULL_FACE),Te(ca);function lt(H){x[H]!==!0&&(o.enable(H),x[H]=!0)}function Ct(H){x[H]!==!1&&(o.disable(H),x[H]=!1)}function It(H,wt){return _[H]!==wt?(o.bindFramebuffer(H,wt),_[H]=wt,H===o.DRAW_FRAMEBUFFER&&(_[o.FRAMEBUFFER]=wt),H===o.FRAMEBUFFER&&(_[o.DRAW_FRAMEBUFFER]=wt),!0):!1}function Xt(H,wt){let At=y,Rt=!1;if(H){At=S.get(wt),At===void 0&&(At=[],S.set(wt,At));const yt=H.textures;if(At.length!==yt.length||At[0]!==o.COLOR_ATTACHMENT0){for(let xt=0,Pt=yt.length;xt<Pt;xt++)At[xt]=o.COLOR_ATTACHMENT0+xt;At.length=yt.length,Rt=!0}}else At[0]!==o.BACK&&(At[0]=o.BACK,Rt=!0);Rt&&o.drawBuffers(At)}function le(H){return A!==H?(o.useProgram(H),A=H,!0):!1}const $e={[br]:o.FUNC_ADD,[WS]:o.FUNC_SUBTRACT,[qS]:o.FUNC_REVERSE_SUBTRACT};$e[YS]=o.MIN,$e[jS]=o.MAX;const de={[ZS]:o.ZERO,[KS]:o.ONE,[QS]:o.SRC_COLOR,[Sd]:o.SRC_ALPHA,[ib]:o.SRC_ALPHA_SATURATE,[eb]:o.DST_COLOR,[$S]:o.DST_ALPHA,[JS]:o.ONE_MINUS_SRC_COLOR,[bd]:o.ONE_MINUS_SRC_ALPHA,[nb]:o.ONE_MINUS_DST_COLOR,[tb]:o.ONE_MINUS_DST_ALPHA,[ab]:o.CONSTANT_COLOR,[rb]:o.ONE_MINUS_CONSTANT_COLOR,[sb]:o.CONSTANT_ALPHA,[ob]:o.ONE_MINUS_CONSTANT_ALPHA};function Te(H,wt,At,Rt,yt,xt,Pt,ie,Be,Ae){if(H===ca){C===!0&&(Ct(o.BLEND),C=!1);return}if(C===!1&&(lt(o.BLEND),C=!0),H!==XS){if(H!==b||Ae!==w){if((v!==br||F!==br)&&(o.blendEquation(o.FUNC_ADD),v=br,F=br),Ae)switch(H){case vs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case fx:o.blendFunc(o.ONE,o.ONE);break;case dx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case hx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:nn("WebGLState: Invalid blending: ",H);break}else switch(H){case vs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case fx:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case dx:nn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case hx:nn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nn("WebGLState: Invalid blending: ",H);break}O=null,U=null,k=null,N=null,B.set(0,0,0),J=0,b=H,w=Ae}return}yt=yt||wt,xt=xt||At,Pt=Pt||Rt,(wt!==v||yt!==F)&&(o.blendEquationSeparate($e[wt],$e[yt]),v=wt,F=yt),(At!==O||Rt!==U||xt!==k||Pt!==N)&&(o.blendFuncSeparate(de[At],de[Rt],de[xt],de[Pt]),O=At,U=Rt,k=xt,N=Pt),(ie.equals(B)===!1||Be!==J)&&(o.blendColor(ie.r,ie.g,ie.b,Be),B.copy(ie),J=Be),b=H,w=!1}function I(H,wt){H.side===sa?Ct(o.CULL_FACE):lt(o.CULL_FACE);let At=H.side===Vn;wt&&(At=!At),he(At),H.blending===vs&&H.transparent===!1?Te(ca):Te(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),d.setFunc(H.depthFunc),d.setTest(H.depthTest),d.setMask(H.depthWrite),u.setMask(H.colorWrite);const Rt=H.stencilWrite;h.setTest(Rt),Rt&&(h.setMask(H.stencilWriteMask),h.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),h.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ht(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?lt(o.SAMPLE_ALPHA_TO_COVERAGE):Ct(o.SAMPLE_ALPHA_TO_COVERAGE)}function he(H){R!==H&&(H?o.frontFace(o.CW):o.frontFace(o.CCW),R=H)}function me(H){H!==GS?(lt(o.CULL_FACE),H!==V&&(H===ux?o.cullFace(o.BACK):H===VS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Ct(o.CULL_FACE),V=H}function Oe(H){H!==tt&&(P&&o.lineWidth(H),tt=H)}function Ht(H,wt,At){H?(lt(o.POLYGON_OFFSET_FILL),(rt!==wt||ht!==At)&&(o.polygonOffset(wt,At),rt=wt,ht=At)):Ct(o.POLYGON_OFFSET_FILL)}function ke(H){H?lt(o.SCISSOR_TEST):Ct(o.SCISSOR_TEST)}function jt(H){H===void 0&&(H=o.TEXTURE0+ft-1),gt!==H&&(o.activeTexture(H),gt=H)}function ae(H,wt,At){At===void 0&&(gt===null?At=o.TEXTURE0+ft-1:At=gt);let Rt=_t[At];Rt===void 0&&(Rt={type:void 0,texture:void 0},_t[At]=Rt),(Rt.type!==H||Rt.texture!==wt)&&(gt!==At&&(o.activeTexture(At),gt=At),o.bindTexture(H,wt||nt[H]),Rt.type=H,Rt.texture=wt)}function D(){const H=_t[gt];H!==void 0&&H.type!==void 0&&(o.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function M(){try{o.compressedTexImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function K(){try{o.compressedTexImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function pt(){try{o.texSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function vt(){try{o.texSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function ot(){try{o.compressedTexSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function qt(){try{o.compressedTexSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Ut(){try{o.texStorage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Qt(){try{o.texStorage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Wt(){try{o.texImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function St(){try{o.texImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Mt(H){bt.equals(H)===!1&&(o.scissor(H.x,H.y,H.z,H.w),bt.copy(H))}function Yt(H){Et.equals(H)===!1&&(o.viewport(H.x,H.y,H.z,H.w),Et.copy(H))}function Gt(H,wt){let At=p.get(wt);At===void 0&&(At=new WeakMap,p.set(wt,At));let Rt=At.get(H);Rt===void 0&&(Rt=o.getUniformBlockIndex(wt,H.name),At.set(H,Rt))}function Nt(H,wt){const Rt=p.get(wt).get(H);m.get(wt)!==Rt&&(o.uniformBlockBinding(wt,Rt,H.__bindingPointIndex),m.set(wt,Rt))}function ne(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),x={},gt=null,_t={},_={},S=new WeakMap,y=[],A=null,C=!1,b=null,v=null,O=null,U=null,F=null,k=null,N=null,B=new Ve(0,0,0),J=0,w=!1,R=null,V=null,tt=null,rt=null,ht=null,bt.set(0,0,o.canvas.width,o.canvas.height),Et.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:lt,disable:Ct,bindFramebuffer:It,drawBuffers:Xt,useProgram:le,setBlending:Te,setMaterial:I,setFlipSided:he,setCullFace:me,setLineWidth:Oe,setPolygonOffset:Ht,setScissorTest:ke,activeTexture:jt,bindTexture:ae,unbindTexture:D,compressedTexImage2D:M,compressedTexImage3D:K,texImage2D:Wt,texImage3D:St,updateUBOMapping:Gt,uniformBlockBinding:Nt,texStorage2D:Ut,texStorage3D:Qt,texSubImage2D:pt,texSubImage3D:vt,compressedTexSubImage2D:ot,compressedTexSubImage3D:qt,scissor:Mt,viewport:Yt,reset:ne}}function HE(o,e,i,r,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ue,x=new WeakMap;let _;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(D,M){return y?new OffscreenCanvas(D,M):Ac("canvas")}function C(D,M,K){let pt=1;const vt=ae(D);if((vt.width>K||vt.height>K)&&(pt=K/Math.max(vt.width,vt.height)),pt<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ot=Math.floor(pt*vt.width),qt=Math.floor(pt*vt.height);_===void 0&&(_=A(ot,qt));const Ut=M?A(ot,qt):_;return Ut.width=ot,Ut.height=qt,Ut.getContext("2d").drawImage(D,0,0,ot,qt),oe("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+ot+"x"+qt+")."),Ut}else return"data"in D&&oe("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),D;return D}function b(D){return D.generateMipmaps}function v(D){o.generateMipmap(D)}function O(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(D,M,K,pt,vt=!1){if(D!==null){if(o[D]!==void 0)return o[D];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ot=M;if(M===o.RED&&(K===o.FLOAT&&(ot=o.R32F),K===o.HALF_FLOAT&&(ot=o.R16F),K===o.UNSIGNED_BYTE&&(ot=o.R8)),M===o.RED_INTEGER&&(K===o.UNSIGNED_BYTE&&(ot=o.R8UI),K===o.UNSIGNED_SHORT&&(ot=o.R16UI),K===o.UNSIGNED_INT&&(ot=o.R32UI),K===o.BYTE&&(ot=o.R8I),K===o.SHORT&&(ot=o.R16I),K===o.INT&&(ot=o.R32I)),M===o.RG&&(K===o.FLOAT&&(ot=o.RG32F),K===o.HALF_FLOAT&&(ot=o.RG16F),K===o.UNSIGNED_BYTE&&(ot=o.RG8)),M===o.RG_INTEGER&&(K===o.UNSIGNED_BYTE&&(ot=o.RG8UI),K===o.UNSIGNED_SHORT&&(ot=o.RG16UI),K===o.UNSIGNED_INT&&(ot=o.RG32UI),K===o.BYTE&&(ot=o.RG8I),K===o.SHORT&&(ot=o.RG16I),K===o.INT&&(ot=o.RG32I)),M===o.RGB_INTEGER&&(K===o.UNSIGNED_BYTE&&(ot=o.RGB8UI),K===o.UNSIGNED_SHORT&&(ot=o.RGB16UI),K===o.UNSIGNED_INT&&(ot=o.RGB32UI),K===o.BYTE&&(ot=o.RGB8I),K===o.SHORT&&(ot=o.RGB16I),K===o.INT&&(ot=o.RGB32I)),M===o.RGBA_INTEGER&&(K===o.UNSIGNED_BYTE&&(ot=o.RGBA8UI),K===o.UNSIGNED_SHORT&&(ot=o.RGBA16UI),K===o.UNSIGNED_INT&&(ot=o.RGBA32UI),K===o.BYTE&&(ot=o.RGBA8I),K===o.SHORT&&(ot=o.RGBA16I),K===o.INT&&(ot=o.RGBA32I)),M===o.RGB&&(K===o.UNSIGNED_INT_5_9_9_9_REV&&(ot=o.RGB9_E5),K===o.UNSIGNED_INT_10F_11F_11F_REV&&(ot=o.R11F_G11F_B10F)),M===o.RGBA){const qt=vt?Ec:De.getTransfer(pt);K===o.FLOAT&&(ot=o.RGBA32F),K===o.HALF_FLOAT&&(ot=o.RGBA16F),K===o.UNSIGNED_BYTE&&(ot=qt===Ge?o.SRGB8_ALPHA8:o.RGBA8),K===o.UNSIGNED_SHORT_4_4_4_4&&(ot=o.RGBA4),K===o.UNSIGNED_SHORT_5_5_5_1&&(ot=o.RGB5_A1)}return(ot===o.R16F||ot===o.R32F||ot===o.RG16F||ot===o.RG32F||ot===o.RGBA16F||ot===o.RGBA32F)&&e.get("EXT_color_buffer_float"),ot}function F(D,M){let K;return D?M===null||M===Tr||M===No?K=o.DEPTH24_STENCIL8:M===la?K=o.DEPTH32F_STENCIL8:M===Lo&&(K=o.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Tr||M===No?K=o.DEPTH_COMPONENT24:M===la?K=o.DEPTH_COMPONENT32F:M===Lo&&(K=o.DEPTH_COMPONENT16),K}function k(D,M){return b(D)===!0||D.isFramebufferTexture&&D.minFilter!==ti&&D.minFilter!==di?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function N(D){const M=D.target;M.removeEventListener("dispose",N),J(M),M.isVideoTexture&&x.delete(M)}function B(D){const M=D.target;M.removeEventListener("dispose",B),R(M)}function J(D){const M=r.get(D);if(M.__webglInit===void 0)return;const K=D.source,pt=S.get(K);if(pt){const vt=pt[M.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&w(D),Object.keys(pt).length===0&&S.delete(K)}r.remove(D)}function w(D){const M=r.get(D);o.deleteTexture(M.__webglTexture);const K=D.source,pt=S.get(K);delete pt[M.__cacheKey],d.memory.textures--}function R(D){const M=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(M.__webglFramebuffer[pt]))for(let vt=0;vt<M.__webglFramebuffer[pt].length;vt++)o.deleteFramebuffer(M.__webglFramebuffer[pt][vt]);else o.deleteFramebuffer(M.__webglFramebuffer[pt]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[pt])}else{if(Array.isArray(M.__webglFramebuffer))for(let pt=0;pt<M.__webglFramebuffer.length;pt++)o.deleteFramebuffer(M.__webglFramebuffer[pt]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let pt=0;pt<M.__webglColorRenderbuffer.length;pt++)M.__webglColorRenderbuffer[pt]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[pt]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const K=D.textures;for(let pt=0,vt=K.length;pt<vt;pt++){const ot=r.get(K[pt]);ot.__webglTexture&&(o.deleteTexture(ot.__webglTexture),d.memory.textures--),r.remove(K[pt])}r.remove(D)}let V=0;function tt(){V=0}function rt(){const D=V;return D>=l.maxTextures&&oe("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),V+=1,D}function ht(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function ft(D,M){const K=r.get(D);if(D.isVideoTexture&&ke(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&K.__version!==D.version){const pt=D.image;if(pt===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{nt(K,D,M);return}}else D.isExternalTexture&&(K.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,K.__webglTexture,o.TEXTURE0+M)}function P(D,M){const K=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){nt(K,D,M);return}else D.isExternalTexture&&(K.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,K.__webglTexture,o.TEXTURE0+M)}function j(D,M){const K=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){nt(K,D,M);return}i.bindTexture(o.TEXTURE_3D,K.__webglTexture,o.TEXTURE0+M)}function Y(D,M){const K=r.get(D);if(D.version>0&&K.__version!==D.version){lt(K,D,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,K.__webglTexture,o.TEXTURE0+M)}const gt={[Ud]:o.REPEAT,[oa]:o.CLAMP_TO_EDGE,[Ld]:o.MIRRORED_REPEAT},_t={[ti]:o.NEAREST,[gb]:o.NEAREST_MIPMAP_NEAREST,[Jl]:o.NEAREST_MIPMAP_LINEAR,[di]:o.LINEAR,[Xf]:o.LINEAR_MIPMAP_NEAREST,[Mr]:o.LINEAR_MIPMAP_LINEAR},L={[yb]:o.NEVER,[Cb]:o.ALWAYS,[Mb]:o.LESS,[gg]:o.LEQUAL,[Eb]:o.EQUAL,[Rb]:o.GEQUAL,[Tb]:o.GREATER,[Ab]:o.NOTEQUAL};function at(D,M){if(M.type===la&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===di||M.magFilter===Xf||M.magFilter===Jl||M.magFilter===Mr||M.minFilter===di||M.minFilter===Xf||M.minFilter===Jl||M.minFilter===Mr)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,gt[M.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,gt[M.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,gt[M.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,_t[M.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,_t[M.minFilter]),M.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,L[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ti||M.minFilter!==Jl&&M.minFilter!==Mr||M.type===la&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function bt(D,M){let K=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",N));const pt=M.source;let vt=S.get(pt);vt===void 0&&(vt={},S.set(pt,vt));const ot=ht(M);if(ot!==D.__cacheKey){vt[ot]===void 0&&(vt[ot]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,K=!0),vt[ot].usedTimes++;const qt=vt[D.__cacheKey];qt!==void 0&&(vt[D.__cacheKey].usedTimes--,qt.usedTimes===0&&w(M)),D.__cacheKey=ot,D.__webglTexture=vt[ot].texture}return K}function Et(D,M,K){return Math.floor(Math.floor(D/K)/M)}function Ot(D,M,K,pt){const ot=D.updateRanges;if(ot.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,K,pt,M.data);else{ot.sort((St,Mt)=>St.start-Mt.start);let qt=0;for(let St=1;St<ot.length;St++){const Mt=ot[qt],Yt=ot[St],Gt=Mt.start+Mt.count,Nt=Et(Yt.start,M.width,4),ne=Et(Mt.start,M.width,4);Yt.start<=Gt+1&&Nt===ne&&Et(Yt.start+Yt.count-1,M.width,4)===Nt?Mt.count=Math.max(Mt.count,Yt.start+Yt.count-Mt.start):(++qt,ot[qt]=Yt)}ot.length=qt+1;const Ut=o.getParameter(o.UNPACK_ROW_LENGTH),Qt=o.getParameter(o.UNPACK_SKIP_PIXELS),Wt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let St=0,Mt=ot.length;St<Mt;St++){const Yt=ot[St],Gt=Math.floor(Yt.start/4),Nt=Math.ceil(Yt.count/4),ne=Gt%M.width,H=Math.floor(Gt/M.width),wt=Nt,At=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ne),o.pixelStorei(o.UNPACK_SKIP_ROWS,H),i.texSubImage2D(o.TEXTURE_2D,0,ne,H,wt,At,K,pt,M.data)}D.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Ut),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Qt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Wt)}}function nt(D,M,K){let pt=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(pt=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(pt=o.TEXTURE_3D);const vt=bt(D,M),ot=M.source;i.bindTexture(pt,D.__webglTexture,o.TEXTURE0+K);const qt=r.get(ot);if(ot.version!==qt.__version||vt===!0){i.activeTexture(o.TEXTURE0+K);const Ut=De.getPrimaries(De.workingColorSpace),Qt=M.colorSpace===Xa?null:De.getPrimaries(M.colorSpace),Wt=M.colorSpace===Xa||Ut===Qt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let St=C(M.image,!1,l.maxTextureSize);St=jt(M,St);const Mt=u.convert(M.format,M.colorSpace),Yt=u.convert(M.type);let Gt=U(M.internalFormat,Mt,Yt,M.colorSpace,M.isVideoTexture);at(pt,M);let Nt;const ne=M.mipmaps,H=M.isVideoTexture!==!0,wt=qt.__version===void 0||vt===!0,At=ot.dataReady,Rt=k(M,St);if(M.isDepthTexture)Gt=F(M.format===zo,M.type),wt&&(H?i.texStorage2D(o.TEXTURE_2D,1,Gt,St.width,St.height):i.texImage2D(o.TEXTURE_2D,0,Gt,St.width,St.height,0,Mt,Yt,null));else if(M.isDataTexture)if(ne.length>0){H&&wt&&i.texStorage2D(o.TEXTURE_2D,Rt,Gt,ne[0].width,ne[0].height);for(let yt=0,xt=ne.length;yt<xt;yt++)Nt=ne[yt],H?At&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Nt.width,Nt.height,Mt,Yt,Nt.data):i.texImage2D(o.TEXTURE_2D,yt,Gt,Nt.width,Nt.height,0,Mt,Yt,Nt.data);M.generateMipmaps=!1}else H?(wt&&i.texStorage2D(o.TEXTURE_2D,Rt,Gt,St.width,St.height),At&&Ot(M,St,Mt,Yt)):i.texImage2D(o.TEXTURE_2D,0,Gt,St.width,St.height,0,Mt,Yt,St.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){H&&wt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,Gt,ne[0].width,ne[0].height,St.depth);for(let yt=0,xt=ne.length;yt<xt;yt++)if(Nt=ne[yt],M.format!==yi)if(Mt!==null)if(H){if(At)if(M.layerUpdates.size>0){const Pt=Px(Nt.width,Nt.height,M.format,M.type);for(const ie of M.layerUpdates){const Be=Nt.data.subarray(ie*Pt/Nt.data.BYTES_PER_ELEMENT,(ie+1)*Pt/Nt.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,ie,Nt.width,Nt.height,1,Mt,Be)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Nt.width,Nt.height,St.depth,Mt,Nt.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,yt,Gt,Nt.width,Nt.height,St.depth,0,Nt.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?At&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,yt,0,0,0,Nt.width,Nt.height,St.depth,Mt,Yt,Nt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,yt,Gt,Nt.width,Nt.height,St.depth,0,Mt,Yt,Nt.data)}else{H&&wt&&i.texStorage2D(o.TEXTURE_2D,Rt,Gt,ne[0].width,ne[0].height);for(let yt=0,xt=ne.length;yt<xt;yt++)Nt=ne[yt],M.format!==yi?Mt!==null?H?At&&i.compressedTexSubImage2D(o.TEXTURE_2D,yt,0,0,Nt.width,Nt.height,Mt,Nt.data):i.compressedTexImage2D(o.TEXTURE_2D,yt,Gt,Nt.width,Nt.height,0,Nt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?At&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Nt.width,Nt.height,Mt,Yt,Nt.data):i.texImage2D(o.TEXTURE_2D,yt,Gt,Nt.width,Nt.height,0,Mt,Yt,Nt.data)}else if(M.isDataArrayTexture)if(H){if(wt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Rt,Gt,St.width,St.height,St.depth),At)if(M.layerUpdates.size>0){const yt=Px(St.width,St.height,M.format,M.type);for(const xt of M.layerUpdates){const Pt=St.data.subarray(xt*yt/St.data.BYTES_PER_ELEMENT,(xt+1)*yt/St.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xt,St.width,St.height,1,Mt,Yt,Pt)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Mt,Yt,St.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Gt,St.width,St.height,St.depth,0,Mt,Yt,St.data);else if(M.isData3DTexture)H?(wt&&i.texStorage3D(o.TEXTURE_3D,Rt,Gt,St.width,St.height,St.depth),At&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Mt,Yt,St.data)):i.texImage3D(o.TEXTURE_3D,0,Gt,St.width,St.height,St.depth,0,Mt,Yt,St.data);else if(M.isFramebufferTexture){if(wt)if(H)i.texStorage2D(o.TEXTURE_2D,Rt,Gt,St.width,St.height);else{let yt=St.width,xt=St.height;for(let Pt=0;Pt<Rt;Pt++)i.texImage2D(o.TEXTURE_2D,Pt,Gt,yt,xt,0,Mt,Yt,null),yt>>=1,xt>>=1}}else if(ne.length>0){if(H&&wt){const yt=ae(ne[0]);i.texStorage2D(o.TEXTURE_2D,Rt,Gt,yt.width,yt.height)}for(let yt=0,xt=ne.length;yt<xt;yt++)Nt=ne[yt],H?At&&i.texSubImage2D(o.TEXTURE_2D,yt,0,0,Mt,Yt,Nt):i.texImage2D(o.TEXTURE_2D,yt,Gt,Mt,Yt,Nt);M.generateMipmaps=!1}else if(H){if(wt){const yt=ae(St);i.texStorage2D(o.TEXTURE_2D,Rt,Gt,yt.width,yt.height)}At&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Mt,Yt,St)}else i.texImage2D(o.TEXTURE_2D,0,Gt,Mt,Yt,St);b(M)&&v(pt),qt.__version=ot.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function lt(D,M,K){if(M.image.length!==6)return;const pt=bt(D,M),vt=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+K);const ot=r.get(vt);if(vt.version!==ot.__version||pt===!0){i.activeTexture(o.TEXTURE0+K);const qt=De.getPrimaries(De.workingColorSpace),Ut=M.colorSpace===Xa?null:De.getPrimaries(M.colorSpace),Qt=M.colorSpace===Xa||qt===Ut?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);const Wt=M.isCompressedTexture||M.image[0].isCompressedTexture,St=M.image[0]&&M.image[0].isDataTexture,Mt=[];for(let xt=0;xt<6;xt++)!Wt&&!St?Mt[xt]=C(M.image[xt],!0,l.maxCubemapSize):Mt[xt]=St?M.image[xt].image:M.image[xt],Mt[xt]=jt(M,Mt[xt]);const Yt=Mt[0],Gt=u.convert(M.format,M.colorSpace),Nt=u.convert(M.type),ne=U(M.internalFormat,Gt,Nt,M.colorSpace),H=M.isVideoTexture!==!0,wt=ot.__version===void 0||pt===!0,At=vt.dataReady;let Rt=k(M,Yt);at(o.TEXTURE_CUBE_MAP,M);let yt;if(Wt){H&&wt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,ne,Yt.width,Yt.height);for(let xt=0;xt<6;xt++){yt=Mt[xt].mipmaps;for(let Pt=0;Pt<yt.length;Pt++){const ie=yt[Pt];M.format!==yi?Gt!==null?H?At&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt,0,0,ie.width,ie.height,Gt,ie.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt,ne,ie.width,ie.height,0,ie.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt,0,0,ie.width,ie.height,Gt,Nt,ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt,ne,ie.width,ie.height,0,Gt,Nt,ie.data)}}}else{if(yt=M.mipmaps,H&&wt){yt.length>0&&Rt++;const xt=ae(Mt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Rt,ne,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(St){H?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Mt[xt].width,Mt[xt].height,Gt,Nt,Mt[xt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ne,Mt[xt].width,Mt[xt].height,0,Gt,Nt,Mt[xt].data);for(let Pt=0;Pt<yt.length;Pt++){const Be=yt[Pt].image[xt].image;H?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt+1,0,0,Be.width,Be.height,Gt,Nt,Be.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt+1,ne,Be.width,Be.height,0,Gt,Nt,Be.data)}}else{H?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Gt,Nt,Mt[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ne,Gt,Nt,Mt[xt]);for(let Pt=0;Pt<yt.length;Pt++){const ie=yt[Pt];H?At&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt+1,0,0,Gt,Nt,ie.image[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Pt+1,ne,Gt,Nt,ie.image[xt])}}}b(M)&&v(o.TEXTURE_CUBE_MAP),ot.__version=vt.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function Ct(D,M,K,pt,vt,ot){const qt=u.convert(K.format,K.colorSpace),Ut=u.convert(K.type),Qt=U(K.internalFormat,qt,Ut,K.colorSpace),Wt=r.get(M),St=r.get(K);if(St.__renderTarget=M,!Wt.__hasExternalTextures){const Mt=Math.max(1,M.width>>ot),Yt=Math.max(1,M.height>>ot);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,ot,Qt,Mt,Yt,M.depth,0,qt,Ut,null):i.texImage2D(vt,ot,Qt,Mt,Yt,0,qt,Ut,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),Ht(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,pt,vt,St.__webglTexture,0,Oe(M)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,pt,vt,St.__webglTexture,ot),i.bindFramebuffer(o.FRAMEBUFFER,null)}function It(D,M,K){if(o.bindRenderbuffer(o.RENDERBUFFER,D),M.depthBuffer){const pt=M.depthTexture,vt=pt&&pt.isDepthTexture?pt.type:null,ot=F(M.stencilBuffer,vt),qt=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ut=Oe(M);Ht(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Ut,ot,M.width,M.height):K?o.renderbufferStorageMultisample(o.RENDERBUFFER,Ut,ot,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,ot,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,qt,o.RENDERBUFFER,D)}else{const pt=M.textures;for(let vt=0;vt<pt.length;vt++){const ot=pt[vt],qt=u.convert(ot.format,ot.colorSpace),Ut=u.convert(ot.type),Qt=U(ot.internalFormat,qt,Ut,ot.colorSpace),Wt=Oe(M);K&&Ht(M)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Wt,Qt,M.width,M.height):Ht(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Wt,Qt,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Qt,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Xt(D,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const pt=r.get(M.depthTexture);pt.__renderTarget=M,(!pt.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ft(M.depthTexture,0);const vt=pt.__webglTexture,ot=Oe(M);if(M.depthTexture.format===Oo)Ht(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0,ot):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0);else if(M.depthTexture.format===zo)Ht(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0,ot):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function le(D){const M=r.get(D),K=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const pt=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),pt){const vt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,pt.removeEventListener("dispose",vt)};pt.addEventListener("dispose",vt),M.__depthDisposeCallback=vt}M.__boundDepthTexture=pt}if(D.depthTexture&&!M.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const pt=D.texture.mipmaps;pt&&pt.length>0?Xt(M.__webglFramebuffer[0],D):Xt(M.__webglFramebuffer,D)}else if(K){M.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[pt]),M.__webglDepthbuffer[pt]===void 0)M.__webglDepthbuffer[pt]=o.createRenderbuffer(),It(M.__webglDepthbuffer[pt],D,!1);else{const vt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ot=M.__webglDepthbuffer[pt];o.bindRenderbuffer(o.RENDERBUFFER,ot),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ot)}}else{const pt=D.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),It(M.__webglDepthbuffer,D,!1);else{const vt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,ot=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,ot),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,ot)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function $e(D,M,K){const pt=r.get(D);M!==void 0&&Ct(pt.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),K!==void 0&&le(D)}function de(D){const M=D.texture,K=r.get(D),pt=r.get(M);D.addEventListener("dispose",B);const vt=D.textures,ot=D.isWebGLCubeRenderTarget===!0,qt=vt.length>1;if(qt||(pt.__webglTexture===void 0&&(pt.__webglTexture=o.createTexture()),pt.__version=M.version,d.memory.textures++),ot){K.__webglFramebuffer=[];for(let Ut=0;Ut<6;Ut++)if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer[Ut]=[];for(let Qt=0;Qt<M.mipmaps.length;Qt++)K.__webglFramebuffer[Ut][Qt]=o.createFramebuffer()}else K.__webglFramebuffer[Ut]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ut=0;Ut<M.mipmaps.length;Ut++)K.__webglFramebuffer[Ut]=o.createFramebuffer()}else K.__webglFramebuffer=o.createFramebuffer();if(qt)for(let Ut=0,Qt=vt.length;Ut<Qt;Ut++){const Wt=r.get(vt[Ut]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=o.createTexture(),d.memory.textures++)}if(D.samples>0&&Ht(D)===!1){K.__webglMultisampledFramebuffer=o.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ut=0;Ut<vt.length;Ut++){const Qt=vt[Ut];K.__webglColorRenderbuffer[Ut]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,K.__webglColorRenderbuffer[Ut]);const Wt=u.convert(Qt.format,Qt.colorSpace),St=u.convert(Qt.type),Mt=U(Qt.internalFormat,Wt,St,Qt.colorSpace,D.isXRRenderTarget===!0),Yt=Oe(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,Mt,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ut,o.RENDERBUFFER,K.__webglColorRenderbuffer[Ut])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(K.__webglDepthRenderbuffer=o.createRenderbuffer(),It(K.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(ot){i.bindTexture(o.TEXTURE_CUBE_MAP,pt.__webglTexture),at(o.TEXTURE_CUBE_MAP,M);for(let Ut=0;Ut<6;Ut++)if(M.mipmaps&&M.mipmaps.length>0)for(let Qt=0;Qt<M.mipmaps.length;Qt++)Ct(K.__webglFramebuffer[Ut][Qt],D,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,Qt);else Ct(K.__webglFramebuffer[Ut],D,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Ut,0);b(M)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qt){for(let Ut=0,Qt=vt.length;Ut<Qt;Ut++){const Wt=vt[Ut],St=r.get(Wt);let Mt=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Mt=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Mt,St.__webglTexture),at(Mt,Wt),Ct(K.__webglFramebuffer,D,Wt,o.COLOR_ATTACHMENT0+Ut,Mt,0),b(Wt)&&v(Mt)}i.unbindTexture()}else{let Ut=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ut=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Ut,pt.__webglTexture),at(Ut,M),M.mipmaps&&M.mipmaps.length>0)for(let Qt=0;Qt<M.mipmaps.length;Qt++)Ct(K.__webglFramebuffer[Qt],D,M,o.COLOR_ATTACHMENT0,Ut,Qt);else Ct(K.__webglFramebuffer,D,M,o.COLOR_ATTACHMENT0,Ut,0);b(M)&&v(Ut),i.unbindTexture()}D.depthBuffer&&le(D)}function Te(D){const M=D.textures;for(let K=0,pt=M.length;K<pt;K++){const vt=M[K];if(b(vt)){const ot=O(D),qt=r.get(vt).__webglTexture;i.bindTexture(ot,qt),v(ot),i.unbindTexture()}}}const I=[],he=[];function me(D){if(D.samples>0){if(Ht(D)===!1){const M=D.textures,K=D.width,pt=D.height;let vt=o.COLOR_BUFFER_BIT;const ot=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qt=r.get(D),Ut=M.length>1;if(Ut)for(let Wt=0;Wt<M.length;Wt++)i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer);const Qt=D.texture.mipmaps;Qt&&Qt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let Wt=0;Wt<M.length;Wt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),Ut){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,qt.__webglColorRenderbuffer[Wt]);const St=r.get(M[Wt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,St,0)}o.blitFramebuffer(0,0,K,pt,0,0,K,pt,vt,o.NEAREST),m===!0&&(I.length=0,he.length=0,I.push(o.COLOR_ATTACHMENT0+Wt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(I.push(ot),he.push(ot),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,he)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,I))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Ut)for(let Wt=0;Wt<M.length;Wt++){i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.RENDERBUFFER,qt.__webglColorRenderbuffer[Wt]);const St=r.get(M[Wt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.TEXTURE_2D,St,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const M=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function Oe(D){return Math.min(l.maxSamples,D.samples)}function Ht(D){const M=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ke(D){const M=d.render.frame;x.get(D)!==M&&(x.set(D,M),D.update())}function jt(D,M){const K=D.colorSpace,pt=D.format,vt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||K!==Es&&K!==Xa&&(De.getTransfer(K)===Ge?(pt!==yi||vt!==fa)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nn("WebGLTextures: Unsupported texture color space:",K)),M}function ae(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=rt,this.resetTextureUnits=tt,this.setTexture2D=ft,this.setTexture2DArray=P,this.setTexture3D=j,this.setTextureCube=Y,this.rebindTextures=$e,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=Ct,this.useMultisampledRTT=Ht}function GE(o,e){function i(r,l=Xa){let u;const d=De.getTransfer(l);if(r===fa)return o.UNSIGNED_BYTE;if(r===dh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===hh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===dg)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===hg)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===ug)return o.BYTE;if(r===fg)return o.SHORT;if(r===Lo)return o.UNSIGNED_SHORT;if(r===fh)return o.INT;if(r===Tr)return o.UNSIGNED_INT;if(r===la)return o.FLOAT;if(r===Rs)return o.HALF_FLOAT;if(r===pg)return o.ALPHA;if(r===mg)return o.RGB;if(r===yi)return o.RGBA;if(r===Oo)return o.DEPTH_COMPONENT;if(r===zo)return o.DEPTH_STENCIL;if(r===xg)return o.RED;if(r===ph)return o.RED_INTEGER;if(r===mh)return o.RG;if(r===xh)return o.RG_INTEGER;if(r===gh)return o.RGBA_INTEGER;if(r===vc||r===Sc||r===bc||r===yc)if(d===Ge)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===vc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Sc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===bc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===yc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===vc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Sc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===bc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===yc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Nd||r===Od||r===zd||r===Pd)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Nd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Od)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===zd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Pd)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Bd||r===Fd||r===Id)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Bd||r===Fd)return d===Ge?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Id)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Hd||r===Gd||r===Vd||r===kd||r===Xd||r===Wd||r===qd||r===Yd||r===jd||r===Zd||r===Kd||r===Qd||r===Jd||r===$d)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Hd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Gd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Vd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===kd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Xd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Wd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===qd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Yd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===jd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Zd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Kd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Qd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Jd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===$d)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===th||r===eh||r===nh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===th)return d===Ge?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===eh)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===nh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ih||r===ah||r===rh||r===sh)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===ih)return u.COMPRESSED_RED_RGTC1_EXT;if(r===ah)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===rh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===sh)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===No?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const VE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kE=`
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

}`;class XE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Dg(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Mi({vertexShader:VE,fragmentShader:kE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Li(new As(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class WE extends Cs{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,x=null,_=null,S=null,y=null,A=null;const C=typeof XRWebGLBinding<"u",b=new XE,v={},O=i.getContextAttributes();let U=null,F=null;const k=[],N=[],B=new Ue;let J=null;const w=new Si;w.viewport=new an;const R=new Si;R.viewport=new an;const V=[w,R],tt=new cy;let rt=null,ht=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let lt=k[nt];return lt===void 0&&(lt=new hd,k[nt]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(nt){let lt=k[nt];return lt===void 0&&(lt=new hd,k[nt]=lt),lt.getGripSpace()},this.getHand=function(nt){let lt=k[nt];return lt===void 0&&(lt=new hd,k[nt]=lt),lt.getHandSpace()};function ft(nt){const lt=N.indexOf(nt.inputSource);if(lt===-1)return;const Ct=k[lt];Ct!==void 0&&(Ct.update(nt.inputSource,nt.frame,p||d),Ct.dispatchEvent({type:nt.type,data:nt.inputSource}))}function P(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",j);for(let nt=0;nt<k.length;nt++){const lt=N[nt];lt!==null&&(N[nt]=null,k[nt].disconnect(lt))}rt=null,ht=null,b.reset();for(const nt in v)delete v[nt];e.setRenderTarget(U),y=null,S=null,_=null,l=null,F=null,Ot.stop(),r.isPresenting=!1,e.setPixelRatio(J),e.setSize(B.width,B.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){u=nt,r.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){h=nt,r.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(nt){p=nt},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return _===null&&C&&(_=new XRWebGLBinding(l,i)),_},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(nt){if(l=nt,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",P),l.addEventListener("inputsourceschange",j),O.xrCompatible!==!0&&await i.makeXRCompatible(),J=e.getPixelRatio(),e.getSize(B),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ct=null,It=null,Xt=null;O.depth&&(Xt=O.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ct=O.stencil?zo:Oo,It=O.stencil?No:Tr);const le={colorFormat:i.RGBA8,depthFormat:Xt,scaleFactor:u};_=this.getBinding(),S=_.createProjectionLayer(le),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),F=new ja(S.textureWidth,S.textureHeight,{format:yi,type:fa,depthTexture:new wg(S.textureWidth,S.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,Ct),stencilBuffer:O.stencil,colorSpace:e.outputColorSpace,samples:O.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Ct={antialias:O.antialias,alpha:!0,depth:O.depth,stencil:O.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,Ct),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),F=new ja(y.framebufferWidth,y.framebufferHeight,{format:yi,type:fa,colorSpace:e.outputColorSpace,stencilBuffer:O.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}F.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),Ot.setContext(l),Ot.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return b.getDepthTexture()};function j(nt){for(let lt=0;lt<nt.removed.length;lt++){const Ct=nt.removed[lt],It=N.indexOf(Ct);It>=0&&(N[It]=null,k[It].disconnect(Ct))}for(let lt=0;lt<nt.added.length;lt++){const Ct=nt.added[lt];let It=N.indexOf(Ct);if(It===-1){for(let le=0;le<k.length;le++)if(le>=N.length){N.push(Ct),It=le;break}else if(N[le]===null){N[le]=Ct,It=le;break}if(It===-1)break}const Xt=k[It];Xt&&Xt.connect(Ct)}}const Y=new ct,gt=new ct;function _t(nt,lt,Ct){Y.setFromMatrixPosition(lt.matrixWorld),gt.setFromMatrixPosition(Ct.matrixWorld);const It=Y.distanceTo(gt),Xt=lt.projectionMatrix.elements,le=Ct.projectionMatrix.elements,$e=Xt[14]/(Xt[10]-1),de=Xt[14]/(Xt[10]+1),Te=(Xt[9]+1)/Xt[5],I=(Xt[9]-1)/Xt[5],he=(Xt[8]-1)/Xt[0],me=(le[8]+1)/le[0],Oe=$e*he,Ht=$e*me,ke=It/(-he+me),jt=ke*-he;if(lt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(jt),nt.translateZ(ke),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert(),Xt[10]===-1)nt.projectionMatrix.copy(lt.projectionMatrix),nt.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const ae=$e+ke,D=de+ke,M=Oe-jt,K=Ht+(It-jt),pt=Te*de/D*ae,vt=I*de/D*ae;nt.projectionMatrix.makePerspective(M,K,pt,vt,ae,D),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}}function L(nt,lt){lt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(lt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(l===null)return;let lt=nt.near,Ct=nt.far;b.texture!==null&&(b.depthNear>0&&(lt=b.depthNear),b.depthFar>0&&(Ct=b.depthFar)),tt.near=R.near=w.near=lt,tt.far=R.far=w.far=Ct,(rt!==tt.near||ht!==tt.far)&&(l.updateRenderState({depthNear:tt.near,depthFar:tt.far}),rt=tt.near,ht=tt.far),tt.layers.mask=nt.layers.mask|6,w.layers.mask=tt.layers.mask&3,R.layers.mask=tt.layers.mask&5;const It=nt.parent,Xt=tt.cameras;L(tt,It);for(let le=0;le<Xt.length;le++)L(Xt[le],It);Xt.length===2?_t(tt,w,R):tt.projectionMatrix.copy(w.projectionMatrix),at(nt,tt,It)};function at(nt,lt,Ct){Ct===null?nt.matrix.copy(lt.matrixWorld):(nt.matrix.copy(Ct.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(lt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(lt.projectionMatrix),nt.projectionMatrixInverse.copy(lt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=oh*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return tt},this.getFoveation=function(){if(!(S===null&&y===null))return m},this.setFoveation=function(nt){m=nt,S!==null&&(S.fixedFoveation=nt),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=nt)},this.hasDepthSensing=function(){return b.texture!==null},this.getDepthSensingMesh=function(){return b.getMesh(tt)},this.getCameraTexture=function(nt){return v[nt]};let bt=null;function Et(nt,lt){if(x=lt.getViewerPose(p||d),A=lt,x!==null){const Ct=x.views;y!==null&&(e.setRenderTargetFramebuffer(F,y.framebuffer),e.setRenderTarget(F));let It=!1;Ct.length!==tt.cameras.length&&(tt.cameras.length=0,It=!0);for(let de=0;de<Ct.length;de++){const Te=Ct[de];let I=null;if(y!==null)I=y.getViewport(Te);else{const me=_.getViewSubImage(S,Te);I=me.viewport,de===0&&(e.setRenderTargetTextures(F,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(F))}let he=V[de];he===void 0&&(he=new Si,he.layers.enable(de),he.viewport=new an,V[de]=he),he.matrix.fromArray(Te.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(Te.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(I.x,I.y,I.width,I.height),de===0&&(tt.matrix.copy(he.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale)),It===!0&&tt.cameras.push(he)}const Xt=l.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){_=r.getBinding();const de=_.getDepthInformation(Ct[0]);de&&de.isValid&&de.texture&&b.init(de,l.renderState)}if(Xt&&Xt.includes("camera-access")&&C){e.state.unbindTexture(),_=r.getBinding();for(let de=0;de<Ct.length;de++){const Te=Ct[de].camera;if(Te){let I=v[Te];I||(I=new Dg,v[Te]=I);const he=_.getCameraImage(Te);I.sourceTexture=he}}}}for(let Ct=0;Ct<k.length;Ct++){const It=N[Ct],Xt=k[Ct];It!==null&&Xt!==void 0&&Xt.update(It,lt,p||d)}bt&&bt(nt,lt),lt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:lt}),A=null}const Ot=new Lg;Ot.setAnimationLoop(Et),this.setAnimationLoop=function(nt){bt=nt},this.dispose=function(){}}}const vr=new da,qE=new pn;function YE(o,e){function i(b,v){b.matrixAutoUpdate===!0&&b.updateMatrix(),v.value.copy(b.matrix)}function r(b,v){v.color.getRGB(b.fogColor.value,Tg(o)),v.isFog?(b.fogNear.value=v.near,b.fogFar.value=v.far):v.isFogExp2&&(b.fogDensity.value=v.density)}function l(b,v,O,U,F){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(b,v):v.isMeshToonMaterial?(u(b,v),_(b,v)):v.isMeshPhongMaterial?(u(b,v),x(b,v)):v.isMeshStandardMaterial?(u(b,v),S(b,v),v.isMeshPhysicalMaterial&&y(b,v,F)):v.isMeshMatcapMaterial?(u(b,v),A(b,v)):v.isMeshDepthMaterial?u(b,v):v.isMeshDistanceMaterial?(u(b,v),C(b,v)):v.isMeshNormalMaterial?u(b,v):v.isLineBasicMaterial?(d(b,v),v.isLineDashedMaterial&&h(b,v)):v.isPointsMaterial?m(b,v,O,U):v.isSpriteMaterial?p(b,v):v.isShadowMaterial?(b.color.value.copy(v.color),b.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(b,v){b.opacity.value=v.opacity,v.color&&b.diffuse.value.copy(v.color),v.emissive&&b.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(b.map.value=v.map,i(v.map,b.mapTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,i(v.alphaMap,b.alphaMapTransform)),v.bumpMap&&(b.bumpMap.value=v.bumpMap,i(v.bumpMap,b.bumpMapTransform),b.bumpScale.value=v.bumpScale,v.side===Vn&&(b.bumpScale.value*=-1)),v.normalMap&&(b.normalMap.value=v.normalMap,i(v.normalMap,b.normalMapTransform),b.normalScale.value.copy(v.normalScale),v.side===Vn&&b.normalScale.value.negate()),v.displacementMap&&(b.displacementMap.value=v.displacementMap,i(v.displacementMap,b.displacementMapTransform),b.displacementScale.value=v.displacementScale,b.displacementBias.value=v.displacementBias),v.emissiveMap&&(b.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,b.emissiveMapTransform)),v.specularMap&&(b.specularMap.value=v.specularMap,i(v.specularMap,b.specularMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest);const O=e.get(v),U=O.envMap,F=O.envMapRotation;U&&(b.envMap.value=U,vr.copy(F),vr.x*=-1,vr.y*=-1,vr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),b.envMapRotation.value.setFromMatrix4(qE.makeRotationFromEuler(vr)),b.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,b.reflectivity.value=v.reflectivity,b.ior.value=v.ior,b.refractionRatio.value=v.refractionRatio),v.lightMap&&(b.lightMap.value=v.lightMap,b.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,b.lightMapTransform)),v.aoMap&&(b.aoMap.value=v.aoMap,b.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,b.aoMapTransform))}function d(b,v){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,v.map&&(b.map.value=v.map,i(v.map,b.mapTransform))}function h(b,v){b.dashSize.value=v.dashSize,b.totalSize.value=v.dashSize+v.gapSize,b.scale.value=v.scale}function m(b,v,O,U){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,b.size.value=v.size*O,b.scale.value=U*.5,v.map&&(b.map.value=v.map,i(v.map,b.uvTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,i(v.alphaMap,b.alphaMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest)}function p(b,v){b.diffuse.value.copy(v.color),b.opacity.value=v.opacity,b.rotation.value=v.rotation,v.map&&(b.map.value=v.map,i(v.map,b.mapTransform)),v.alphaMap&&(b.alphaMap.value=v.alphaMap,i(v.alphaMap,b.alphaMapTransform)),v.alphaTest>0&&(b.alphaTest.value=v.alphaTest)}function x(b,v){b.specular.value.copy(v.specular),b.shininess.value=Math.max(v.shininess,1e-4)}function _(b,v){v.gradientMap&&(b.gradientMap.value=v.gradientMap)}function S(b,v){b.metalness.value=v.metalness,v.metalnessMap&&(b.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,b.metalnessMapTransform)),b.roughness.value=v.roughness,v.roughnessMap&&(b.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,b.roughnessMapTransform)),v.envMap&&(b.envMapIntensity.value=v.envMapIntensity)}function y(b,v,O){b.ior.value=v.ior,v.sheen>0&&(b.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),b.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(b.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,b.sheenColorMapTransform)),v.sheenRoughnessMap&&(b.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,b.sheenRoughnessMapTransform))),v.clearcoat>0&&(b.clearcoat.value=v.clearcoat,b.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(b.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,b.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(b.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,b.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(b.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,b.clearcoatNormalMapTransform),b.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Vn&&b.clearcoatNormalScale.value.negate())),v.dispersion>0&&(b.dispersion.value=v.dispersion),v.iridescence>0&&(b.iridescence.value=v.iridescence,b.iridescenceIOR.value=v.iridescenceIOR,b.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],b.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(b.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,b.iridescenceMapTransform)),v.iridescenceThicknessMap&&(b.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,b.iridescenceThicknessMapTransform))),v.transmission>0&&(b.transmission.value=v.transmission,b.transmissionSamplerMap.value=O.texture,b.transmissionSamplerSize.value.set(O.width,O.height),v.transmissionMap&&(b.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,b.transmissionMapTransform)),b.thickness.value=v.thickness,v.thicknessMap&&(b.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,b.thicknessMapTransform)),b.attenuationDistance.value=v.attenuationDistance,b.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(b.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(b.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,b.anisotropyMapTransform))),b.specularIntensity.value=v.specularIntensity,b.specularColor.value.copy(v.specularColor),v.specularColorMap&&(b.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,b.specularColorMapTransform)),v.specularIntensityMap&&(b.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,b.specularIntensityMapTransform))}function A(b,v){v.matcap&&(b.matcap.value=v.matcap)}function C(b,v){const O=e.get(v).light;b.referencePosition.value.setFromMatrixPosition(O.matrixWorld),b.nearDistance.value=O.shadow.camera.near,b.farDistance.value=O.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function jE(o,e,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(O,U){const F=U.program;r.uniformBlockBinding(O,F)}function p(O,U){let F=l[O.id];F===void 0&&(A(O),F=x(O),l[O.id]=F,O.addEventListener("dispose",b));const k=U.program;r.updateUBOMapping(O,k);const N=e.render.frame;u[O.id]!==N&&(S(O),u[O.id]=N)}function x(O){const U=_();O.__bindingPointIndex=U;const F=o.createBuffer(),k=O.__size,N=O.usage;return o.bindBuffer(o.UNIFORM_BUFFER,F),o.bufferData(o.UNIFORM_BUFFER,k,N),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,F),F}function _(){for(let O=0;O<h;O++)if(d.indexOf(O)===-1)return d.push(O),O;return nn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(O){const U=l[O.id],F=O.uniforms,k=O.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let N=0,B=F.length;N<B;N++){const J=Array.isArray(F[N])?F[N]:[F[N]];for(let w=0,R=J.length;w<R;w++){const V=J[w];if(y(V,N,w,k)===!0){const tt=V.__offset,rt=Array.isArray(V.value)?V.value:[V.value];let ht=0;for(let ft=0;ft<rt.length;ft++){const P=rt[ft],j=C(P);typeof P=="number"||typeof P=="boolean"?(V.__data[0]=P,o.bufferSubData(o.UNIFORM_BUFFER,tt+ht,V.__data)):P.isMatrix3?(V.__data[0]=P.elements[0],V.__data[1]=P.elements[1],V.__data[2]=P.elements[2],V.__data[3]=0,V.__data[4]=P.elements[3],V.__data[5]=P.elements[4],V.__data[6]=P.elements[5],V.__data[7]=0,V.__data[8]=P.elements[6],V.__data[9]=P.elements[7],V.__data[10]=P.elements[8],V.__data[11]=0):(P.toArray(V.__data,ht),ht+=j.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,tt,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function y(O,U,F,k){const N=O.value,B=U+"_"+F;if(k[B]===void 0)return typeof N=="number"||typeof N=="boolean"?k[B]=N:k[B]=N.clone(),!0;{const J=k[B];if(typeof N=="number"||typeof N=="boolean"){if(J!==N)return k[B]=N,!0}else if(J.equals(N)===!1)return J.copy(N),!0}return!1}function A(O){const U=O.uniforms;let F=0;const k=16;for(let B=0,J=U.length;B<J;B++){const w=Array.isArray(U[B])?U[B]:[U[B]];for(let R=0,V=w.length;R<V;R++){const tt=w[R],rt=Array.isArray(tt.value)?tt.value:[tt.value];for(let ht=0,ft=rt.length;ht<ft;ht++){const P=rt[ht],j=C(P),Y=F%k,gt=Y%j.boundary,_t=Y+gt;F+=gt,_t!==0&&k-_t<j.storage&&(F+=k-_t),tt.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=F,F+=j.storage}}}const N=F%k;return N>0&&(F+=k-N),O.__size=F,O.__cache={},this}function C(O){const U={boundary:0,storage:0};return typeof O=="number"||typeof O=="boolean"?(U.boundary=4,U.storage=4):O.isVector2?(U.boundary=8,U.storage=8):O.isVector3||O.isColor?(U.boundary=16,U.storage=12):O.isVector4?(U.boundary=16,U.storage=16):O.isMatrix3?(U.boundary=48,U.storage=48):O.isMatrix4?(U.boundary=64,U.storage=64):O.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):oe("WebGLRenderer: Unsupported uniform value type.",O),U}function b(O){const U=O.target;U.removeEventListener("dispose",b);const F=d.indexOf(U.__bindingPointIndex);d.splice(F,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function v(){for(const O in l)o.deleteBuffer(l[O]);d=[],l={},u={}}return{bind:m,update:p,dispose:v}}const ZE=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let aa=null;function KE(){return aa===null&&(aa=new iy(ZE,32,32,mh,Rs),aa.minFilter=di,aa.magFilter=di,aa.wrapS=oa,aa.wrapT=oa,aa.generateMipmaps=!1,aa.needsUpdate=!0),aa}class QE{constructor(e={}){const{canvas:i=wb(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let y;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");y=r.getContextAttributes().alpha}else y=d;const A=new Set([gh,xh,ph]),C=new Set([fa,Tr,Lo,No,dh,hh]),b=new Uint32Array(4),v=new Int32Array(4);let O=null,U=null;const F=[],k=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let B=!1;this._outputColorSpace=fi;let J=0,w=0,R=null,V=-1,tt=null;const rt=new an,ht=new an;let ft=null;const P=new Ve(0);let j=0,Y=i.width,gt=i.height,_t=1,L=null,at=null;const bt=new an(0,0,Y,gt),Et=new an(0,0,Y,gt);let Ot=!1;const nt=new Cg;let lt=!1,Ct=!1;const It=new pn,Xt=new ct,le=new an,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function Te(){return R===null?_t:1}let I=r;function he(T,X){return i.getContext(T,X)}try{const T={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${uh}`),i.addEventListener("webglcontextlost",yt,!1),i.addEventListener("webglcontextrestored",xt,!1),i.addEventListener("webglcontextcreationerror",Pt,!1),I===null){const X="webgl2";if(I=he(X,T),I===null)throw he(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw T("WebGLRenderer: "+T.message),T}let me,Oe,Ht,ke,jt,ae,D,M,K,pt,vt,ot,qt,Ut,Qt,Wt,St,Mt,Yt,Gt,Nt,ne,H,wt;function At(){me=new r1(I),me.init(),ne=new GE(I,me),Oe=new K3(I,me,e,ne),Ht=new IE(I,me),Oe.reversedDepthBuffer&&S&&Ht.buffers.depth.setReversed(!0),ke=new l1(I),jt=new AE,ae=new HE(I,me,Ht,jt,Oe,ne,ke),D=new J3(N),M=new a1(N),K=new dy(I),H=new j3(I,K),pt=new s1(I,K,ke,H),vt=new u1(I,pt,K,ke),Yt=new c1(I,Oe,ae),Wt=new Q3(jt),ot=new TE(N,D,M,me,Oe,H,Wt),qt=new YE(N,jt),Ut=new CE,Qt=new OE(me),Mt=new Y3(N,D,M,Ht,vt,y,m),St=new BE(N,vt,Oe),wt=new jE(I,ke,Oe,Ht),Gt=new Z3(I,me,ke),Nt=new o1(I,me,ke),ke.programs=ot.programs,N.capabilities=Oe,N.extensions=me,N.properties=jt,N.renderLists=Ut,N.shadowMap=St,N.state=Ht,N.info=ke}At();const Rt=new WE(N,I);this.xr=Rt,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=me.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=me.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(T){T!==void 0&&(_t=T,this.setSize(Y,gt,!1))},this.getSize=function(T){return T.set(Y,gt)},this.setSize=function(T,X,it=!0){if(Rt.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,gt=X,i.width=Math.floor(T*_t),i.height=Math.floor(X*_t),it===!0&&(i.style.width=T+"px",i.style.height=X+"px"),this.setViewport(0,0,T,X)},this.getDrawingBufferSize=function(T){return T.set(Y*_t,gt*_t).floor()},this.setDrawingBufferSize=function(T,X,it){Y=T,gt=X,_t=it,i.width=Math.floor(T*it),i.height=Math.floor(X*it),this.setViewport(0,0,T,X)},this.getCurrentViewport=function(T){return T.copy(rt)},this.getViewport=function(T){return T.copy(bt)},this.setViewport=function(T,X,it,$){T.isVector4?bt.set(T.x,T.y,T.z,T.w):bt.set(T,X,it,$),Ht.viewport(rt.copy(bt).multiplyScalar(_t).round())},this.getScissor=function(T){return T.copy(Et)},this.setScissor=function(T,X,it,$){T.isVector4?Et.set(T.x,T.y,T.z,T.w):Et.set(T,X,it,$),Ht.scissor(ht.copy(Et).multiplyScalar(_t).round())},this.getScissorTest=function(){return Ot},this.setScissorTest=function(T){Ht.setScissorTest(Ot=T)},this.setOpaqueSort=function(T){L=T},this.setTransparentSort=function(T){at=T},this.getClearColor=function(T){return T.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor(...arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha(...arguments)},this.clear=function(T=!0,X=!0,it=!0){let $=0;if(T){let q=!1;if(R!==null){const Tt=R.texture.format;q=A.has(Tt)}if(q){const Tt=R.texture.type,Dt=C.has(Tt),zt=Mt.getClearColor(),Bt=Mt.getClearAlpha(),$t=zt.r,ee=zt.g,Zt=zt.b;Dt?(b[0]=$t,b[1]=ee,b[2]=Zt,b[3]=Bt,I.clearBufferuiv(I.COLOR,0,b)):(v[0]=$t,v[1]=ee,v[2]=Zt,v[3]=Bt,I.clearBufferiv(I.COLOR,0,v))}else $|=I.COLOR_BUFFER_BIT}X&&($|=I.DEPTH_BUFFER_BIT),it&&($|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",yt,!1),i.removeEventListener("webglcontextrestored",xt,!1),i.removeEventListener("webglcontextcreationerror",Pt,!1),Mt.dispose(),Ut.dispose(),Qt.dispose(),jt.dispose(),D.dispose(),M.dispose(),vt.dispose(),H.dispose(),wt.dispose(),ot.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",Ds),Rt.removeEventListener("sessionend",Us),hi.stop()};function yt(T){T.preventDefault(),_x("WebGLRenderer: Context Lost."),B=!0}function xt(){_x("WebGLRenderer: Context Restored."),B=!1;const T=ke.autoReset,X=St.enabled,it=St.autoUpdate,$=St.needsUpdate,q=St.type;At(),ke.autoReset=T,St.enabled=X,St.autoUpdate=it,St.needsUpdate=$,St.type=q}function Pt(T){nn("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ie(T){const X=T.target;X.removeEventListener("dispose",ie),Be(X)}function Be(T){Ae(T),jt.remove(T)}function Ae(T){const X=jt.get(T).programs;X!==void 0&&(X.forEach(function(it){ot.releaseProgram(it)}),T.isShaderMaterial&&ot.releaseShaderCache(T))}this.renderBufferDirect=function(T,X,it,$,q,Tt){X===null&&(X=$e);const Dt=q.isMesh&&q.matrixWorld.determinant()<0,zt=Uc(T,X,it,$,q);Ht.setMaterial($,Dt);let Bt=it.index,$t=1;if($.wireframe===!0){if(Bt=pt.getWireframeAttribute(it),Bt===void 0)return;$t=2}const ee=it.drawRange,Zt=it.attributes.position;let ce=ee.start*$t,Ee=(ee.start+ee.count)*$t;Tt!==null&&(ce=Math.max(ce,Tt.start*$t),Ee=Math.min(Ee,(Tt.start+Tt.count)*$t)),Bt!==null?(ce=Math.max(ce,0),Ee=Math.min(Ee,Bt.count)):Zt!=null&&(ce=Math.max(ce,0),Ee=Math.min(Ee,Zt.count));const Re=Ee-ce;if(Re<0||Re===1/0)return;H.setup(q,$,zt,it,Bt);let Se,Ne=Gt;if(Bt!==null&&(Se=K.get(Bt),Ne=Nt,Ne.setIndex(Se)),q.isMesh)$.wireframe===!0?(Ht.setLineWidth($.wireframeLinewidth*Te()),Ne.setMode(I.LINES)):Ne.setMode(I.TRIANGLES);else if(q.isLine){let Jt=$.linewidth;Jt===void 0&&(Jt=1),Ht.setLineWidth(Jt*Te()),q.isLineSegments?Ne.setMode(I.LINES):q.isLineLoop?Ne.setMode(I.LINE_LOOP):Ne.setMode(I.LINE_STRIP)}else q.isPoints?Ne.setMode(I.POINTS):q.isSprite&&Ne.setMode(I.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Po("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ne.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))Ne.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Jt=q._multiDrawStarts,Xe=q._multiDrawCounts,be=q._multiDrawCount,gn=Bt?K.get(Bt).bytesPerElement:1,pa=jt.get($).currentProgram.getUniforms();for(let qe=0;qe<be;qe++)pa.setValue(I,"_gl_DrawID",qe),Ne.render(Jt[qe]/gn,Xe[qe])}else if(q.isInstancedMesh)Ne.renderInstances(ce,Re,q.count);else if(it.isInstancedBufferGeometry){const Jt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Xe=Math.min(it.instanceCount,Jt);Ne.renderInstances(ce,Re,Xe)}else Ne.render(ce,Re)};function Cn(T,X,it){T.transparent===!0&&T.side===sa&&T.forceSinglePass===!1?(T.side=Vn,T.needsUpdate=!0,fn(T,X,it),T.side=Ya,T.needsUpdate=!0,fn(T,X,it),T.side=sa):fn(T,X,it)}this.compile=function(T,X,it=null){it===null&&(it=T),U=Qt.get(it),U.init(X),k.push(U),it.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(U.pushLight(q),q.castShadow&&U.pushShadow(q))}),T!==it&&T.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(U.pushLight(q),q.castShadow&&U.pushShadow(q))}),U.setupLights();const $=new Set;return T.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const Tt=q.material;if(Tt)if(Array.isArray(Tt))for(let Dt=0;Dt<Tt.length;Dt++){const zt=Tt[Dt];Cn(zt,it,q),$.add(zt)}else Cn(Tt,it,q),$.add(Tt)}),U=k.pop(),$},this.compileAsync=function(T,X,it=null){const $=this.compile(T,X,it);return new Promise(q=>{function Tt(){if($.forEach(function(Dt){jt.get(Dt).currentProgram.isReady()&&$.delete(Dt)}),$.size===0){q(T);return}setTimeout(Tt,10)}me.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let kn=null;function Go(T){kn&&kn(T)}function Ds(){hi.stop()}function Us(){hi.start()}const hi=new Lg;hi.setAnimationLoop(Go),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(T){kn=T,Rt.setAnimationLoop(T),T===null?hi.stop():hi.start()},Rt.addEventListener("sessionstart",Ds),Rt.addEventListener("sessionend",Us),this.render=function(T,X){if(X!==void 0&&X.isCamera!==!0){nn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(X),X=Rt.getCamera()),T.isScene===!0&&T.onBeforeRender(N,T,X,R),U=Qt.get(T,k.length),U.init(X),k.push(U),It.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),nt.setFromProjectionMatrix(It,Di,X.reversedDepth),Ct=this.localClippingEnabled,lt=Wt.init(this.clippingPlanes,Ct),O=Ut.get(T,F.length),O.init(),F.push(O),Rt.enabled===!0&&Rt.isPresenting===!0){const Tt=N.xr.getDepthSensingMesh();Tt!==null&&Ka(Tt,X,-1/0,N.sortObjects)}Ka(T,X,0,N.sortObjects),O.finish(),N.sortObjects===!0&&O.sort(L,at),de=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,de&&Mt.addToRenderList(O,T),this.info.render.frame++,lt===!0&&Wt.beginShadows();const it=U.state.shadowsArray;St.render(it,T,X),lt===!0&&Wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=O.opaque,q=O.transmissive;if(U.setupLights(),X.isArrayCamera){const Tt=X.cameras;if(q.length>0)for(let Dt=0,zt=Tt.length;Dt<zt;Dt++){const Bt=Tt[Dt];Ns($,q,T,Bt)}de&&Mt.render(T);for(let Dt=0,zt=Tt.length;Dt<zt;Dt++){const Bt=Tt[Dt];Ls(O,T,Bt,Bt.viewport)}}else q.length>0&&Ns($,q,T,X),de&&Mt.render(T),Ls(O,T,X);R!==null&&w===0&&(ae.updateMultisampleRenderTarget(R),ae.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(N,T,X),H.resetDefaultState(),V=-1,tt=null,k.pop(),k.length>0?(U=k[k.length-1],lt===!0&&Wt.setGlobalState(N.clippingPlanes,U.state.camera)):U=null,F.pop(),F.length>0?O=F[F.length-1]:O=null};function Ka(T,X,it,$){if(T.visible===!1)return;if(T.layers.test(X.layers)){if(T.isGroup)it=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(X);else if(T.isLight)U.pushLight(T),T.castShadow&&U.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||nt.intersectsSprite(T)){$&&le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(It);const Dt=vt.update(T),zt=T.material;zt.visible&&O.push(T,Dt,zt,it,le.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||nt.intersectsObject(T))){const Dt=vt.update(T),zt=T.material;if($&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),le.copy(T.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),le.copy(Dt.boundingSphere.center)),le.applyMatrix4(T.matrixWorld).applyMatrix4(It)),Array.isArray(zt)){const Bt=Dt.groups;for(let $t=0,ee=Bt.length;$t<ee;$t++){const Zt=Bt[$t],ce=zt[Zt.materialIndex];ce&&ce.visible&&O.push(T,Dt,ce,it,le.z,Zt)}}else zt.visible&&O.push(T,Dt,zt,it,le.z,null)}}const Tt=T.children;for(let Dt=0,zt=Tt.length;Dt<zt;Dt++)Ka(Tt[Dt],X,it,$)}function Ls(T,X,it,$){const{opaque:q,transmissive:Tt,transparent:Dt}=T;U.setupLightsView(it),lt===!0&&Wt.setGlobalState(N.clippingPlanes,it),$&&Ht.viewport(rt.copy($)),q.length>0&&Xn(q,X,it),Tt.length>0&&Xn(Tt,X,it),Dt.length>0&&Xn(Dt,X,it),Ht.buffers.depth.setTest(!0),Ht.buffers.depth.setMask(!0),Ht.buffers.color.setMask(!0),Ht.setPolygonOffset(!1)}function Ns(T,X,it,$){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;U.state.transmissionRenderTarget[$.id]===void 0&&(U.state.transmissionRenderTarget[$.id]=new ja(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float")?Rs:fa,minFilter:Mr,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const Tt=U.state.transmissionRenderTarget[$.id],Dt=$.viewport||rt;Tt.setSize(Dt.z*N.transmissionResolutionScale,Dt.w*N.transmissionResolutionScale);const zt=N.getRenderTarget(),Bt=N.getActiveCubeFace(),$t=N.getActiveMipmapLevel();N.setRenderTarget(Tt),N.getClearColor(P),j=N.getClearAlpha(),j<1&&N.setClearColor(16777215,.5),N.clear(),de&&Mt.render(it);const ee=N.toneMapping;N.toneMapping=qa;const Zt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),U.setupLightsView($),lt===!0&&Wt.setGlobalState(N.clippingPlanes,$),Xn(T,it,$),ae.updateMultisampleRenderTarget(Tt),ae.updateRenderTargetMipmap(Tt),me.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let Ee=0,Re=X.length;Ee<Re;Ee++){const Se=X[Ee],{object:Ne,geometry:Jt,material:Xe,group:be}=Se;if(Xe.side===sa&&Ne.layers.test($.layers)){const gn=Xe.side;Xe.side=Vn,Xe.needsUpdate=!0,rn(Ne,it,$,Jt,Xe,be),Xe.side=gn,Xe.needsUpdate=!0,ce=!0}}ce===!0&&(ae.updateMultisampleRenderTarget(Tt),ae.updateRenderTargetMipmap(Tt))}N.setRenderTarget(zt,Bt,$t),N.setClearColor(P,j),Zt!==void 0&&($.viewport=Zt),N.toneMapping=ee}function Xn(T,X,it){const $=X.isScene===!0?X.overrideMaterial:null;for(let q=0,Tt=T.length;q<Tt;q++){const Dt=T[q],{object:zt,geometry:Bt,group:$t}=Dt;let ee=Dt.material;ee.allowOverride===!0&&$!==null&&(ee=$),zt.layers.test(it.layers)&&rn(zt,X,it,Bt,ee,$t)}}function rn(T,X,it,$,q,Tt){T.onBeforeRender(N,X,it,$,q,Tt),T.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(N,X,it,$,T,Tt),q.transparent===!0&&q.side===sa&&q.forceSinglePass===!1?(q.side=Vn,q.needsUpdate=!0,N.renderBufferDirect(it,X,$,q,T,Tt),q.side=Ya,q.needsUpdate=!0,N.renderBufferDirect(it,X,$,q,T,Tt),q.side=sa):N.renderBufferDirect(it,X,$,q,T,Tt),T.onAfterRender(N,X,it,$,q,Tt)}function fn(T,X,it){X.isScene!==!0&&(X=$e);const $=jt.get(T),q=U.state.lights,Tt=U.state.shadowsArray,Dt=q.state.version,zt=ot.getParameters(T,q.state,Tt,X,it),Bt=ot.getProgramCacheKey(zt);let $t=$.programs;$.environment=T.isMeshStandardMaterial?X.environment:null,$.fog=X.fog,$.envMap=(T.isMeshStandardMaterial?M:D).get(T.envMap||$.environment),$.envMapRotation=$.environment!==null&&T.envMap===null?X.environmentRotation:T.envMapRotation,$t===void 0&&(T.addEventListener("dispose",ie),$t=new Map,$.programs=$t);let ee=$t.get(Bt);if(ee!==void 0){if($.currentProgram===ee&&$.lightsStateVersion===Dt)return Ar(T,zt),ee}else zt.uniforms=ot.getUniforms(T),T.onBeforeCompile(zt,N),ee=ot.acquireProgram(zt,Bt),$t.set(Bt,ee),$.uniforms=zt.uniforms;const Zt=$.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Zt.clippingPlanes=Wt.uniform),Ar(T,zt),$.needsLights=Vo(T),$.lightsStateVersion=Dt,$.needsLights&&(Zt.ambientLightColor.value=q.state.ambient,Zt.lightProbe.value=q.state.probe,Zt.directionalLights.value=q.state.directional,Zt.directionalLightShadows.value=q.state.directionalShadow,Zt.spotLights.value=q.state.spot,Zt.spotLightShadows.value=q.state.spotShadow,Zt.rectAreaLights.value=q.state.rectArea,Zt.ltc_1.value=q.state.rectAreaLTC1,Zt.ltc_2.value=q.state.rectAreaLTC2,Zt.pointLights.value=q.state.point,Zt.pointLightShadows.value=q.state.pointShadow,Zt.hemisphereLights.value=q.state.hemi,Zt.directionalShadowMap.value=q.state.directionalShadowMap,Zt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Zt.spotShadowMap.value=q.state.spotShadowMap,Zt.spotLightMatrix.value=q.state.spotLightMatrix,Zt.spotLightMap.value=q.state.spotLightMap,Zt.pointShadowMap.value=q.state.pointShadowMap,Zt.pointShadowMatrix.value=q.state.pointShadowMatrix),$.currentProgram=ee,$.uniformsList=null,ee}function Ni(T){if(T.uniformsList===null){const X=T.currentProgram.getUniforms();T.uniformsList=Mc.seqWithValue(X.seq,T.uniforms)}return T.uniformsList}function Ar(T,X){const it=jt.get(T);it.outputColorSpace=X.outputColorSpace,it.batching=X.batching,it.batchingColor=X.batchingColor,it.instancing=X.instancing,it.instancingColor=X.instancingColor,it.instancingMorph=X.instancingMorph,it.skinning=X.skinning,it.morphTargets=X.morphTargets,it.morphNormals=X.morphNormals,it.morphColors=X.morphColors,it.morphTargetsCount=X.morphTargetsCount,it.numClippingPlanes=X.numClippingPlanes,it.numIntersection=X.numClipIntersection,it.vertexAlphas=X.vertexAlphas,it.vertexTangents=X.vertexTangents,it.toneMapping=X.toneMapping}function Uc(T,X,it,$,q){X.isScene!==!0&&(X=$e),ae.resetTextureUnits();const Tt=X.fog,Dt=$.isMeshStandardMaterial?X.environment:null,zt=R===null?N.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Es,Bt=($.isMeshStandardMaterial?M:D).get($.envMap||Dt),$t=$.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,ee=!!it.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Zt=!!it.morphAttributes.position,ce=!!it.morphAttributes.normal,Ee=!!it.morphAttributes.color;let Re=qa;$.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Re=N.toneMapping);const Se=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,Ne=Se!==void 0?Se.length:0,Jt=jt.get($),Xe=U.state.lights;if(lt===!0&&(Ct===!0||T!==tt)){const vn=T===tt&&$.id===V;Wt.setState($,T,vn)}let be=!1;$.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Xe.state.version||Jt.outputColorSpace!==zt||q.isBatchedMesh&&Jt.batching===!1||!q.isBatchedMesh&&Jt.batching===!0||q.isBatchedMesh&&Jt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Jt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Jt.instancing===!1||!q.isInstancedMesh&&Jt.instancing===!0||q.isSkinnedMesh&&Jt.skinning===!1||!q.isSkinnedMesh&&Jt.skinning===!0||q.isInstancedMesh&&Jt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Jt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Jt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Jt.instancingMorph===!1&&q.morphTexture!==null||Jt.envMap!==Bt||$.fog===!0&&Jt.fog!==Tt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Wt.numPlanes||Jt.numIntersection!==Wt.numIntersection)||Jt.vertexAlphas!==$t||Jt.vertexTangents!==ee||Jt.morphTargets!==Zt||Jt.morphNormals!==ce||Jt.morphColors!==Ee||Jt.toneMapping!==Re||Jt.morphTargetsCount!==Ne)&&(be=!0):(be=!0,Jt.__version=$.version);let gn=Jt.currentProgram;be===!0&&(gn=fn($,X,q));let pa=!1,qe=!1,Oi=!1;const Ye=gn.getUniforms(),_n=Jt.uniforms;if(Ht.useProgram(gn.program)&&(pa=!0,qe=!0,Oi=!0),$.id!==V&&(V=$.id,qe=!0),pa||tt!==T){Ht.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ye.setValue(I,"projectionMatrix",T.projectionMatrix),Ye.setValue(I,"viewMatrix",T.matrixWorldInverse);const Mn=Ye.map.cameraPosition;Mn!==void 0&&Mn.setValue(I,Xt.setFromMatrixPosition(T.matrixWorld)),Oe.logarithmicDepthBuffer&&Ye.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ye.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),tt!==T&&(tt=T,qe=!0,Oi=!0)}if(q.isSkinnedMesh){Ye.setOptional(I,q,"bindMatrix"),Ye.setOptional(I,q,"bindMatrixInverse");const vn=q.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Ye.setValue(I,"boneTexture",vn.boneTexture,ae))}q.isBatchedMesh&&(Ye.setOptional(I,q,"batchingTexture"),Ye.setValue(I,"batchingTexture",q._matricesTexture,ae),Ye.setOptional(I,q,"batchingIdTexture"),Ye.setValue(I,"batchingIdTexture",q._indirectTexture,ae),Ye.setOptional(I,q,"batchingColorTexture"),q._colorsTexture!==null&&Ye.setValue(I,"batchingColorTexture",q._colorsTexture,ae));const dn=it.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&Yt.update(q,it,gn),(qe||Jt.receiveShadow!==q.receiveShadow)&&(Jt.receiveShadow=q.receiveShadow,Ye.setValue(I,"receiveShadow",q.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(_n.envMap.value=Bt,_n.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&X.environment!==null&&(_n.envMapIntensity.value=X.environmentIntensity),_n.dfgLUT!==void 0&&(_n.dfgLUT.value=KE()),qe&&(Ye.setValue(I,"toneMappingExposure",N.toneMappingExposure),Jt.needsLights&&Lc(_n,Oi),Tt&&$.fog===!0&&qt.refreshFogUniforms(_n,Tt),qt.refreshMaterialUniforms(_n,$,_t,gt,U.state.transmissionRenderTarget[T.id]),Mc.upload(I,Ni(Jt),_n,ae)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Mc.upload(I,Ni(Jt),_n,ae),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ye.setValue(I,"center",q.center),Ye.setValue(I,"modelViewMatrix",q.modelViewMatrix),Ye.setValue(I,"normalMatrix",q.normalMatrix),Ye.setValue(I,"modelMatrix",q.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const vn=$.uniformsGroups;for(let Mn=0,Ei=vn.length;Mn<Ei;Mn++){const zi=vn[Mn];wt.update(zi,gn),wt.bind(zi,gn)}}return gn}function Lc(T,X){T.ambientLightColor.needsUpdate=X,T.lightProbe.needsUpdate=X,T.directionalLights.needsUpdate=X,T.directionalLightShadows.needsUpdate=X,T.pointLights.needsUpdate=X,T.pointLightShadows.needsUpdate=X,T.spotLights.needsUpdate=X,T.spotLightShadows.needsUpdate=X,T.rectAreaLights.needsUpdate=X,T.hemisphereLights.needsUpdate=X}function Vo(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return J},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,X,it){const $=jt.get(T);$.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),jt.get(T.texture).__webglTexture=X,jt.get(T.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:it,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,X){const it=jt.get(T);it.__webglFramebuffer=X,it.__useDefaultFramebuffer=X===void 0};const Qa=I.createFramebuffer();this.setRenderTarget=function(T,X=0,it=0){R=T,J=X,w=it;let $=!0,q=null,Tt=!1,Dt=!1;if(T){const Bt=jt.get(T);if(Bt.__useDefaultFramebuffer!==void 0)Ht.bindFramebuffer(I.FRAMEBUFFER,null),$=!1;else if(Bt.__webglFramebuffer===void 0)ae.setupRenderTarget(T);else if(Bt.__hasExternalTextures)ae.rebindTextures(T,jt.get(T.texture).__webglTexture,jt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Zt=T.depthTexture;if(Bt.__boundDepthTexture!==Zt){if(Zt!==null&&jt.has(Zt)&&(T.width!==Zt.image.width||T.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(T)}}const $t=T.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Dt=!0);const ee=jt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ee[X])?q=ee[X][it]:q=ee[X],Tt=!0):T.samples>0&&ae.useMultisampledRTT(T)===!1?q=jt.get(T).__webglMultisampledFramebuffer:Array.isArray(ee)?q=ee[it]:q=ee,rt.copy(T.viewport),ht.copy(T.scissor),ft=T.scissorTest}else rt.copy(bt).multiplyScalar(_t).floor(),ht.copy(Et).multiplyScalar(_t).floor(),ft=Ot;if(it!==0&&(q=Qa),Ht.bindFramebuffer(I.FRAMEBUFFER,q)&&$&&Ht.drawBuffers(T,q),Ht.viewport(rt),Ht.scissor(ht),Ht.setScissorTest(ft),Tt){const Bt=jt.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+X,Bt.__webglTexture,it)}else if(Dt){const Bt=X;for(let $t=0;$t<T.textures.length;$t++){const ee=jt.get(T.textures[$t]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+$t,ee.__webglTexture,it,Bt)}}else if(T!==null&&it!==0){const Bt=jt.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Bt.__webglTexture,it)}V=-1},this.readRenderTargetPixels=function(T,X,it,$,q,Tt,Dt,zt=0){if(!(T&&T.isWebGLRenderTarget)){nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=jt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt){Ht.bindFramebuffer(I.FRAMEBUFFER,Bt);try{const $t=T.textures[zt],ee=$t.format,Zt=$t.type;if(!Oe.textureFormatReadable(ee)){nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(Zt)){nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=T.width-$&&it>=0&&it<=T.height-q&&(T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+zt),I.readPixels(X,it,$,q,ne.convert(ee),ne.convert(Zt),Tt))}finally{const $t=R!==null?jt.get(R).__webglFramebuffer:null;Ht.bindFramebuffer(I.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(T,X,it,$,q,Tt,Dt,zt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=jt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt)if(X>=0&&X<=T.width-$&&it>=0&&it<=T.height-q){Ht.bindFramebuffer(I.FRAMEBUFFER,Bt);const $t=T.textures[zt],ee=$t.format,Zt=$t.type;if(!Oe.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ce),I.bufferData(I.PIXEL_PACK_BUFFER,Tt.byteLength,I.STREAM_READ),T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+zt),I.readPixels(X,it,$,q,ne.convert(ee),ne.convert(Zt),0);const Ee=R!==null?jt.get(R).__webglFramebuffer:null;Ht.bindFramebuffer(I.FRAMEBUFFER,Ee);const Re=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Db(I,Re,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ce),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Tt),I.deleteBuffer(ce),I.deleteSync(Re),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,X=null,it=0){const $=Math.pow(2,-it),q=Math.floor(T.image.width*$),Tt=Math.floor(T.image.height*$),Dt=X!==null?X.x:0,zt=X!==null?X.y:0;ae.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,it,0,0,Dt,zt,q,Tt),Ht.unbindTexture()};const Os=I.createFramebuffer(),ha=I.createFramebuffer();this.copyTextureToTexture=function(T,X,it=null,$=null,q=0,Tt=null){Tt===null&&(q!==0?(Po("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Tt=q,q=0):Tt=0);let Dt,zt,Bt,$t,ee,Zt,ce,Ee,Re;const Se=T.isCompressedTexture?T.mipmaps[Tt]:T.image;if(it!==null)Dt=it.max.x-it.min.x,zt=it.max.y-it.min.y,Bt=it.isBox3?it.max.z-it.min.z:1,$t=it.min.x,ee=it.min.y,Zt=it.isBox3?it.min.z:0;else{const dn=Math.pow(2,-q);Dt=Math.floor(Se.width*dn),zt=Math.floor(Se.height*dn),T.isDataArrayTexture?Bt=Se.depth:T.isData3DTexture?Bt=Math.floor(Se.depth*dn):Bt=1,$t=0,ee=0,Zt=0}$!==null?(ce=$.x,Ee=$.y,Re=$.z):(ce=0,Ee=0,Re=0);const Ne=ne.convert(X.format),Jt=ne.convert(X.type);let Xe;X.isData3DTexture?(ae.setTexture3D(X,0),Xe=I.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ae.setTexture2DArray(X,0),Xe=I.TEXTURE_2D_ARRAY):(ae.setTexture2D(X,0),Xe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,X.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,X.unpackAlignment);const be=I.getParameter(I.UNPACK_ROW_LENGTH),gn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),pa=I.getParameter(I.UNPACK_SKIP_PIXELS),qe=I.getParameter(I.UNPACK_SKIP_ROWS),Oi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Se.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Se.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$t),I.pixelStorei(I.UNPACK_SKIP_ROWS,ee),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Zt);const Ye=T.isDataArrayTexture||T.isData3DTexture,_n=X.isDataArrayTexture||X.isData3DTexture;if(T.isDepthTexture){const dn=jt.get(T),vn=jt.get(X),Mn=jt.get(dn.__renderTarget),Ei=jt.get(vn.__renderTarget);Ht.bindFramebuffer(I.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let zi=0;zi<Bt;zi++)Ye&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,jt.get(T).__webglTexture,q,Zt+zi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,jt.get(X).__webglTexture,Tt,Re+zi)),I.blitFramebuffer($t,ee,Dt,zt,ce,Ee,Dt,zt,I.DEPTH_BUFFER_BIT,I.NEAREST);Ht.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(q!==0||T.isRenderTargetTexture||jt.has(T)){const dn=jt.get(T),vn=jt.get(X);Ht.bindFramebuffer(I.READ_FRAMEBUFFER,Os),Ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,ha);for(let Mn=0;Mn<Bt;Mn++)Ye?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,dn.__webglTexture,q,Zt+Mn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,dn.__webglTexture,q),_n?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,vn.__webglTexture,Tt,Re+Mn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,vn.__webglTexture,Tt),q!==0?I.blitFramebuffer($t,ee,Dt,zt,ce,Ee,Dt,zt,I.COLOR_BUFFER_BIT,I.NEAREST):_n?I.copyTexSubImage3D(Xe,Tt,ce,Ee,Re+Mn,$t,ee,Dt,zt):I.copyTexSubImage2D(Xe,Tt,ce,Ee,$t,ee,Dt,zt);Ht.bindFramebuffer(I.READ_FRAMEBUFFER,null),Ht.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else _n?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(Xe,Tt,ce,Ee,Re,Dt,zt,Bt,Ne,Jt,Se.data):X.isCompressedArrayTexture?I.compressedTexSubImage3D(Xe,Tt,ce,Ee,Re,Dt,zt,Bt,Ne,Se.data):I.texSubImage3D(Xe,Tt,ce,Ee,Re,Dt,zt,Bt,Ne,Jt,Se):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Tt,ce,Ee,Dt,zt,Ne,Jt,Se.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Tt,ce,Ee,Se.width,Se.height,Ne,Se.data):I.texSubImage2D(I.TEXTURE_2D,Tt,ce,Ee,Dt,zt,Ne,Jt,Se);I.pixelStorei(I.UNPACK_ROW_LENGTH,be),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,gn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,pa),I.pixelStorei(I.UNPACK_SKIP_ROWS,qe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Oi),Tt===0&&X.generateMipmaps&&I.generateMipmap(Xe),Ht.unbindTexture()},this.initRenderTarget=function(T){jt.get(T).__webglFramebuffer===void 0&&ae.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ae.setTextureCube(T,0):T.isData3DTexture?ae.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ae.setTexture2DArray(T,0):ae.setTexture2D(T,0),Ht.unbindTexture()},this.resetState=function(){J=0,w=0,R=null,Ht.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(e),i.unpackColorSpace=De._getUnpackColorSpace()}}const JE=Object.assign({"../portfolio-images/aerial-reverie/AR-clip-after-intro.gif":$v,"../portfolio-images/aerial-reverie/AR-clip-intro.gif":tS,"../portfolio-images/aerial-reverie/AR-clip-spiraling.gif":eS,"../portfolio-images/aerial-reverie/AR-clip-spirals-start.gif":nS,"../portfolio-images/aerial-reverie/aerial-reverie.mp4":iS,"../portfolio-images/aerial-reverie/process-stills-2.png":aS,"../portfolio-images/aerial-reverie/still-1.jpg":rS,"../portfolio-images/aerial-reverie/still-2.jpg":sS,"../portfolio-images/aerial-reverie/still-3.jpg":oS,"../portfolio-images/aerial-reverie/still-4.jpg":lS,"../portfolio-images/aligned/gallery-w-ml.png":cS,"../portfolio-images/aligned/gallery.png":uS,"../portfolio-images/aligned/pcb-schematic.png":fS,"../portfolio-images/aligned/thumbnail.png":dS,"../portfolio-images/kinetic-pixels/gifs/china_ca.gif":hS,"../portfolio-images/kinetic-pixels/gifs/china_drone_sim.gif":pS,"../portfolio-images/kinetic-pixels/gifs/india_ca.gif":mS,"../portfolio-images/kinetic-pixels/gifs/india_drone_sim.gif":xS,"../portfolio-images/kinetic-pixels/gifs/iran_ca.gif":gS,"../portfolio-images/kinetic-pixels/gifs/iran_drone_sim.gif":_S,"../portfolio-images/kinetic-pixels/gifs/mexico_ca.gif":vS,"../portfolio-images/kinetic-pixels/gifs/mexico_drone_sim.gif":SS,"../portfolio-images/kinetic-pixels/gifs/morocco_ca.gif":bS,"../portfolio-images/kinetic-pixels/gifs/morocco_drone_sim.gif":yS,"../portfolio-images/kinetic-pixels/gifs/portugal_ca.gif":MS,"../portfolio-images/kinetic-pixels/gifs/portugal_drone_sim.gif":ES,"../portfolio-images/kinetic-pixels/gifs/spain_ca.gif":TS,"../portfolio-images/kinetic-pixels/gifs/spain_drone_sim.gif":AS,"../portfolio-images/kinetic-pixels/gifs/turkey_ca.gif":RS,"../portfolio-images/kinetic-pixels/gifs/turkey_drone_sim.gif":CS,"../portfolio-images/kinetic-pixels/thumbnail.png":wS,"../portfolio-images/kinetic-pixels/tiles_all.png":DS,"../portfolio-images/kinetic-pixels/tiles_tgt.png":US,"../portfolio-images/nuwa/gallery.png":LS,"../portfolio-images/nuwa/thumbnail1.png":NS,"../portfolio-images/nuwa/thumbnail2.png":OS,"../portfolio-images/nuwa/thumbnail3.png":zS,"../portfolio-images/pawlink/header.png":PS,"../portfolio-images/pawlink/pawlink.png":BS,"../portfolio-images/pawlink/thumbnail.png":FS,"../portfolio-images/single-fibre/dither_it_figure-1.png":IS,"../portfolio-images/spirit-oasis/thumbnail.png":HS}),yn=o=>{if(!o)return"";const i=`../portfolio-images/${o.replace(/^\.?\/?src\/portfolio-images\/?/,"").replace(/^\.?\/?portfolio-images\/?/,"")}`;return JE[i]||""};function $E(){const o=_s.useRef(null),e=_s.useRef({x:0,y:0}),[i,r]=_s.useState("All"),[l,u]=_s.useState(null),d=[{id:1,title:"Kinetic Pixels",category:"Tech",thumbnail:yn("/src/portfolio-images/kinetic-pixels/thumbnail.png"),description:"Kinetic Pixels investigates how data can function as cultural material crafted and dynamically configured by coordinated swarms.",fullDescription:`Kinetic Pixels explores data as cultural material by translating symbolic, geographic, and historical information into rule-based mosaics constructed by coordinated aerial robots. Drawing inspiration from global tile traditions—such as Chinese 花砖, Iberian azulejos, and Islamic zellige—the project engages practices where complex cultural meaning emerges from simple, modular repetition. 

 Eight globally representative tile cultures are encoded as sparse 9-bit cellular automaton rulesets, combining a shared geographic grammar with deterministic identity bits derived from ISO standards and planetary context. These compact rules generate evolving mosaics whose similarities and differences emerge through rule-based pattern formation, producing sequences of spatial configurations that reflect both cultural continuity and variation over time.

 To explore how these abstract rules might be materially constructed and transformed, Kinetic Pixels uses a realistic simulation of a coordinated swarm of Crazyflie aerial robots to assemble and reconfigure mosaics frame by frame. Transitions are executed through distance-aware task allocation, collision-constrained trajectory planning, and frame-to-frame tile reuse, enabling efficient addition, removal, and transfer of tiles as patterns evolve. Cellular automaton outputs are mapped from discrete grids to real-world spatial coordinates, grounding rule-based pattern formation in feasible multi-robot motion.

 By treating computation as a contemporary form of craft, Kinetic Pixels reframes tiles as both the building blocks of cities and the building blocks of data-driven space—asking how robotic systems might participate in the cultural production of material patterns, rather than merely executing them.`,details:{year:"2025",role:"Solo",mediums:"Python, ROS, MatLab, Adobe Illustrator"},images:[{src:yn("/src/portfolio-images/kinetic-pixels/tiles_tgt.png"),layout:"full"},{src:yn("/src/portfolio-images/kinetic-pixels/tiles_all.png"),layout:"full"}]},{id:1,title:"Aerial Reverie",category:"Tech",thumbnail:yn("/src/portfolio-images/aerial-reverie/still-1.jpg"),description:"An immersive VR storyworld illuminated by coordinated Crazyflie drone flight paths",fullDescription:"Aerial Reverie is an immersive VR storyworld illuminated by the motion of Crazyflie drones, their coordinated flight paths controlled via Python and ROS. The choreographed trajectories assemble a dynamic cityscape that becomes both simulation and narrative device, examining collective intelligence, industrial expansion, and the tension between nature, home, and rapidly evolving built environments.",details:{year:"2024",role:"Creative Director, Programming, 3D Modeling",mediums:"Python, ROS, Crazyflie Drones, Blender, After Effects, Ableton Live, Meta Quest 2"},images:[{type:"video",src:yn("/src/portfolio-images/aerial-reverie/aerial-reverie.mp4"),layout:"full"},{type:"gif-row",items:[yn("/src/portfolio-images/aerial-reverie/AR-clip-intro.gif"),yn("/src/portfolio-images/aerial-reverie/AR-clip-after-intro.gif"),yn("/src/portfolio-images/aerial-reverie/AR-clip-spirals-start.gif"),yn("/src/portfolio-images/aerial-reverie/AR-clip-spiraling.gif")]},{type:"image",src:yn("/src/portfolio-images/aerial-reverie/process-stills-2.png"),layout:"full"}]},{id:2,title:"PawLink",category:"Tech",thumbnail:yn("/src/portfolio-images/pawlink/thumbnail.png"),description:"Smart-fabric collar with embedded sensors for continuous animal health monitoring",fullDescription:`PawLink is an integrated smart-fabric collar that leverages thermally drawn fiber technology with embedded capacitive and thermistor sensors to enable continuous, fabric-level inference.

A compact ML classifier runs on collar-side data to detect behavioral patterns such as excessive scratching (linked to allergies, infections, or skin irritation), track temperature changes and activity levels for health and exercise monitoring, and activate a safety protocol: a “Lost Mode” that detects nearby humans to broadcast signals.

PawLink demonstrates how computational textiles can function as compassionate, adaptive interfaces for animal wellbeing.`,details:{year:"2024",role:"Software & Hardware Integration, Product Design",mediums:"Arduino, ML, Thermally Drawn Fibers, Weaving Loom, Metal Hardware"},images:[{src:yn("/src/portfolio-images/pawlink/pawlink.png"),layout:"full"}]},{id:3,title:"Aligned",category:"Tech",thumbnail:yn("/src/portfolio-images/aligned/thumbnail.png"),description:"Smart-fabric posture-sensing system with real-time ML-based detection and haptic feedback",fullDescription:`Aligned is a smart-fabric posture-sensing system integrating a custom PCB with four I²C-networked accelerometers and a vibration motor for haptic feedback.

A lightweight machine-learning model distinguishes upright vs. slouched posture in real time, forming the foundation for a textile-embedded interface that supports healthier body awareness.

The system includes both a fully functioning prototype demonstrating real-time posture detection and a complete hardware pipeline, from circuit schematic to manufactured PCB, ready for textile integration in future iterations.`,details:{year:"2024",role:"Software Lead (ML + Arduino), Hardware",mediums:"KiCad, Custom PCB, I²C, ML, Haptic Feedback"},images:[{src:yn("/src/portfolio-images/aligned/gallery-w-ml.png"),layout:"full"}]},{id:4,title:"NÜWA",category:"Fashion",thumbnail:yn("/src/portfolio-images/nuwa/thumbnail2.png"),description:"Modernized hanfu and qipao challenging techno-Orientalist narratives through textile craft",fullDescription:`Showcased at Fashion@Brown Runway Show 2024 & Rhode Island Fashion Week 2024.

Ancient deity, new cyborg. One with earth, integrated in cyberspace.

In techno-Orientalism, the West views the Chinese body in contradicting space-times: a relic of the past and a future both feared and desired. It seeks to collect a drop of what the Chinese body can provide — culture, technology, sex — and in turn, create a perverse reality with its voyeuristic eyes.

How can women of the Chinese diaspora reject and subsequently remake this techno-orientalist framework?

Embody the paradox of temporalities and collapse contrasting timescales into the present moment. Primordial, earth-forming goddess and futuristic robot condensed into one in the Now: the modern woman. Fetishization, subjugation by the malicious eye — we repair the wounds of our broken heavens with our molded clay bodies and the garments that adorn them.

By crafting modernized hanfu and qipao dresses, interweaving the histories of silk and brocade with technology, the Chinese body is situated in all timeframes, toppling the binarist narrative generated by the West. Placed before the public eye, Nüwa asks the audience to confront the simultaneous pleasure and discomfort of the techno-Orientalist paradigm.`,details:{year:"2024",role:"Solo",mediums:"Brocade, Silk, LEDs"},images:[{src:yn("/src/portfolio-images/nuwa/gallery.png"),layout:"full"}]},{id:5,title:"Spirit Oasis",category:"Tech",thumbnail:yn("/src/portfolio-images/spirit-oasis/thumbnail.png"),description:"A reimagined 3D scene from Avatar: The Last Airbender with realistic water and lighting",fullDescription:`This project is a reimagination of a scene in the episode 'The Siege of the North' from Avatar: the Last Airbender. In the Spirit Oasis, two koi fish Tui and La maintain the balance between the Earth and the Moon. When the fish are disturbed, chaos ensues. 

 Using ThreeJS and Blender, we modeled this scene using realistic water effects, lighting changes, and koi fish interaction.`,details:{year:"2023",role:"Procedural Water + Grass, Custom Watercolor Toon Shading, 3D Modeling",mediums:"Three.js, Blender, GLSL"},images:[{type:"iframe",src:"https://spirit-oasis.vercel.app/",layout:"full"}]}],h=["All","Tech","Fashion"],m=i==="All"?d:d.filter(x=>x.category===i),p=x=>{const _=document.getElementById(x);_&&_.scrollIntoView({behavior:"smooth",block:"start"})};return _s.useEffect(()=>{if(!o.current)return;let x,_,S,y,A,C;const b=new uy,v=J=>{if(!o.current)return;const w=o.current.getBoundingClientRect();e.current={x:(J.clientX-w.left)/w.width*2-1,y:-((J.clientY-w.top)/w.height)*2+1}};window.addEventListener("mousemove",v);const O=12,U=Array.from({length:O}).map(()=>({pos:new Ue(Math.random()*2-1,Math.random()*2-1),scale:.4+Math.random()*.4,timeOffset:Math.random()*10,rotation:Math.random()*Math.PI*2})),F=`
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
    `;return(()=>{if(!o.current)return;const J=window.innerWidth,w=window.innerHeight;for(;o.current.firstChild;)o.current.removeChild(o.current.firstChild);x=new QE({antialias:!0}),x.setSize(J,w),x.setClearColor(0,1),o.current.appendChild(x.domElement),_=new Ug(-1,1,1,-1,0,1),A=new ja(J,w);const R=new Mi({vertexShader:F,fragmentShader:k,uniforms:{u_time:{value:0},u_resolution:{value:new Ue(J,w)},u_pos:{value:U.map(rt=>rt.pos)},u_scale:{value:U.map(rt=>rt.scale)},u_timeOffset:{value:U.map(rt=>rt.timeOffset)},u_rot:{value:U.map(rt=>rt.rotation)},u_mouse:{value:new Ue(0,0)}}});S=new zx,S.add(new Li(new As(2,2),R));const V=new Mi({vertexShader:`
          varying vec2 vUv;
          void main(){ vUv = uv; gl_Position = vec4(position, 1.0); }
        `,fragmentShader:N,uniforms:{tDiffuse:{value:A.texture},resolution:{value:new Ue(J,w)},charSize:{value:8}}});y=new zx,y.add(new Li(new As(2,2),V));const tt=()=>{C=requestAnimationFrame(tt);const rt=b.getElapsedTime();R.uniforms.u_time.value=rt;const ht=e.current.x,ft=e.current.y;R.uniforms.u_mouse.value.set(ht,ft),x.setRenderTarget(A),x.render(S,_),x.setRenderTarget(null),x.render(y,_)};tt()})(),()=>{window.removeEventListener("mousemove",v),cancelAnimationFrame(C);try{x&&x.dispose(),A&&A.dispose(),x&&x.domElement&&o.current&&o.current.removeChild(x.domElement)}catch{}}},[]),Vt.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"auto"},children:[Vt.jsx("div",{ref:o,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:0}}),Vt.jsxs("div",{style:{position:"relative",zIndex:1,color:"white"},children:[l&&Vt.jsxs("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:200,overflowY:"auto",background:"rgba(0, 0, 0, 0.95)",backdropFilter:"blur(20px)"},children:[Vt.jsx("button",{onClick:()=>u(null),style:{position:"fixed",top:"2rem",right:"2rem",background:"rgba(255, 255, 255, 0.1)",border:"1px solid rgba(255, 255, 255, 0.2)",borderRadius:"50%",width:"50px",height:"50px",color:"white",fontSize:"1.5rem",cursor:"pointer",zIndex:201,display:"flex",alignItems:"center",justifyContent:"center",transition:"all 0.2s"},onMouseEnter:x=>{x.target.style.background="rgba(255, 255, 255, 0.2)",x.target.style.borderColor="rgba(255, 255, 255, 0.4)"},onMouseLeave:x=>{x.target.style.background="rgba(255, 255, 255, 0.1)",x.target.style.borderColor="rgba(255, 255, 255, 0.2)"},children:"×"}),Vt.jsxs("div",{style:{maxWidth:"1200px",margin:"0 auto",padding:"3rem 2rem"},children:[Vt.jsxs("div",{style:{marginBottom:"1rem"},children:[Vt.jsx("span",{style:{fontSize:"1.0rem",color:"rgba(255, 255, 255, 0.5)",textTransform:"uppercase",letterSpacing:"0.1em"},children:l.category}),Vt.jsx("h1",{className:"font-argent-normal",style:{fontSize:"2.3rem",fontWeight:"300",margin:"1rem 0",textShadow:"0 0 20px rgba(0,0,0,0.8)"},children:l.title}),Vt.jsxs("div",{style:{display:"grid",gridTemplateColumns:"auto max-content 1fr",columnGap:"2rem",marginBottom:"1rem",background:"rgba(0, 0, 0, 0.4)",backdropFilter:"blur(10px)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"8px",padding:"1rem"},children:[Vt.jsxs("div",{children:[Vt.jsx("div",{style:{fontSize:"0.8rem",color:"rgba(255, 255, 255, 0.5)",marginBottom:"0.4rem"},children:"Year"}),Vt.jsx("div",{style:{fontSize:"0.9rem",fontWeight:"400"},children:l.details.year})]}),Vt.jsxs("div",{children:[Vt.jsx("div",{style:{fontSize:"0.8rem",color:"rgba(255, 255, 255, 0.5)",marginBottom:"0.4rem"},children:"Role"}),Vt.jsx("div",{style:{fontSize:"0.9rem",fontWeight:"400"},children:l.details.role})]}),Vt.jsxs("div",{children:[Vt.jsx("div",{style:{fontSize:"0.8rem",color:"rgba(255, 255, 255, 0.5)",marginBottom:"0.4rem"},children:"Mediums"}),Vt.jsx("div",{style:{fontSize:"0.9rem",fontWeight:"400"},children:l.details.mediums})]})]}),Vt.jsx("p",{style:{fontSize:"1.1rem",fontWeight:300,color:"rgba(255, 255, 255, 0.7)",maxWidth:"100%",lineHeight:"1.25",whiteSpace:"pre-line"},children:l.fullDescription})]}),Vt.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"1rem"},children:l.images.map((x,_)=>{const S={full:{width:"100%",flexBasis:"100%"},half:{width:"calc(50% - 0.5rem)",flexBasis:"calc(50% - 0.5rem)"},third:{width:"calc(33.333% - 0.67rem)",flexBasis:"calc(33.333% - 0.67rem)"},quarter:{width:"calc(25% - 0.75rem)",flexBasis:"calc(25% - 0.75rem)"},"two-thirds":{width:"calc(66.666% - 0.5rem)",flexBasis:"calc(66.666% - 0.5rem)"}},y=x.layout||"full",A=S[y];return Vt.jsx("div",{style:{...A,minHeight:x.type==="gif-row"?"auto":"300px",background:"transparent",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"0.9rem",color:"rgba(255, 255, 255, 0.3)",overflow:"hidden"},children:x.type==="iframe"?Vt.jsx("div",{style:{position:"relative",width:"100%",paddingBottom:"56.25%",height:0,borderRadius:"8px",overflow:"hidden",background:"rgba(255, 255, 255, 0.05)"},children:Vt.jsx("iframe",{src:x.src,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"none"},loading:"lazy",allow:"fullscreen"})}):x.type==="gif-row"?Vt.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"0.75rem",width:"100%"},children:x.items.map((C,b)=>Vt.jsx("img",{src:C,alt:`Aerial Reverie gif ${b+1}`,style:{width:"100%",height:"auto",display:"block",borderRadius:"6px"}},b))}):x.type==="video"?Vt.jsx("video",{src:x.src,controls:!0,playsInline:!0,style:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"8px"},autoPlay:!0}):x.src?Vt.jsx("img",{src:x.src,alt:x.placeholder,style:{width:"100%",height:"100%",objectFit:"cover"}}):x.placeholder},_)})})]})]}),Vt.jsxs("nav",{style:{position:"fixed",top:0,left:0,right:0,padding:"1.5rem 2rem",background:"rgba(0, 0, 0, 0.5)",backdropFilter:"blur(10px)",borderBottom:"1px solid rgba(255, 255, 255, 0.1)",zIndex:100,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[Vt.jsx("div",{className:"font-argent-italic",style:{fontSize:"1.3rem",fontWeight:"400"},children:"vivian li"}),Vt.jsxs("div",{style:{display:"flex",gap:"2rem"},children:[Vt.jsx("button",{onClick:()=>p("publications"),style:{background:"none",border:"none",color:"white",cursor:"pointer",fontSize:"1rem",opacity:.8,transition:"opacity 0.2s"},onMouseEnter:x=>x.target.style.opacity=1,onMouseLeave:x=>x.target.style.opacity=.8,children:"Publications"}),Vt.jsx("button",{onClick:()=>p("portfolio"),style:{background:"none",border:"none",color:"white",cursor:"pointer",fontSize:"1rem",opacity:.8,transition:"opacity 0.2s"},onMouseEnter:x=>x.target.style.opacity=1,onMouseLeave:x=>x.target.style.opacity=.8,children:"Portfolio"})]})]}),Vt.jsxs("div",{style:{minHeight:"45vh",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",padding:"1rem 2rem",textAlign:"center",paddingTop:"5rem"},children:[Vt.jsx("h1",{className:"font-argent-italic",style:{fontSize:"4.5rem",fontWeight:"100",marginBottom:"0.5rem",textShadow:"0 0 40px rgba(0,0,0,1), 0 0 30px rgba(0,0,0,1), 0 0 20px rgba(0,0,0,1), 0 0 10px rgba(0,0,0,1), 2px 2px 8px rgba(0,0,0,1)"},children:"vivian li"}),Vt.jsx("p",{className:"dotgothic16-regular",style:{fontSize:"1rem",maxWidth:"900px",lineHeight:"1.5",textShadow:"none"},children:Vt.jsxs("span",{className:"text-slab",children:["I explore how computation can emerge from material behavior. Working across computational design, digital fabrication, computer graphics, and HCI, I develop reconfigurable textile and soft-material systems where sensing, logic, and actuation are encoded into geometry and structure.",Vt.jsx("br",{}),Vt.jsx("br",{}),"I am currently a researcher in the Computational Design Group @ Brown Visual Computing Lab and pursuing an Sc.M. in Electrical & Computer Engineering. I received my Sc.B. in Computer Science from Brown University."]})})]}),Vt.jsxs("div",{id:"publications",style:{padding:"0.5rem 2rem",maxWidth:"1200px",margin:"0 auto"},children:[Vt.jsx("h2",{className:"font-argent-normal",style:{fontSize:"2rem",fontWeight:"300",marginBottom:"1rem",textAlign:"center",textShadow:"0 0 20px rgba(0,0,0,0.8)"},children:"publications"}),Vt.jsxs("div",{onClick:()=>window.open("https://www.nature.com/articles/s41586-024-08568-6","_blank"),style:{background:"rgba(0, 0, 0, 0.6)",backdropFilter:"blur(10px)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"8px",padding:"1.5rem",display:"flex",gap:"1.5rem",alignItems:"start",cursor:"pointer",transition:"transform 0.2s, border-color 0.2s"},onMouseEnter:x=>{x.currentTarget.style.transform="translateY(-4px)",x.currentTarget.style.borderColor="rgba(255, 255, 255, 0.3)"},onMouseLeave:x=>{x.currentTarget.style.transform="translateY(0)",x.currentTarget.style.borderColor="rgba(255, 255, 255, 0.1)"},children:[Vt.jsx("img",{src:yn("/src/portfolio-images/single-fibre/dither_it_figure-1.png"),alt:"Single-fibre computing publication",style:{width:"180px",height:"135px",borderRadius:"4px",flexShrink:0,objectFit:"cover"}}),Vt.jsxs("div",{style:{flex:1},children:[Vt.jsx("h3",{style:{fontSize:"1.2rem",fontWeight:"400",marginBottom:"0.4rem"},children:"A single-fibre computer enables textile networks and distributed inference"}),Vt.jsx("p",{style:{fontSize:"0.85rem",color:"rgba(255, 255, 255, 0.7)",marginBottom:"0.4rem"},children:"Gupta, N., Cheung, H., Payra, S., Loke, G., Li, J., Zhao, Y., Balachander, L., Son, E., Li, V., Kravitz, S., Lohawala, S., Joannopoulos, J., & Fink, Y."}),Vt.jsx("p",{style:{fontSize:"0.9rem",color:"rgba(255, 255, 255, 0.5)"},children:"Nature • 2025"})]})]})]}),Vt.jsxs("div",{id:"portfolio",style:{padding:"0.5rem 2rem 2.5rem 2rem",maxWidth:"1200px",margin:"0 auto"},children:[Vt.jsx("h2",{className:"font-argent-normal",style:{fontSize:"1.8rem",fontWeight:"300",marginBottom:"1rem",textAlign:"center",textShadow:"0 0 20px rgba(0,0,0,0.8)"},children:"portfolio"}),Vt.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"1rem",marginBottom:"2rem"},children:h.map(x=>Vt.jsx("button",{onClick:()=>r(x),style:{background:i===x?"rgba(255, 255, 255, 0.2)":"rgba(0, 0, 0, 0.4)",backdropFilter:"blur(10px)",border:`1px solid ${i===x?"rgba(255, 255, 255, 0.4)":"rgba(255, 255, 255, 0.1)"}`,borderRadius:"20px",padding:"0.5rem 1.5rem",color:"white",cursor:"pointer",fontSize:"0.9rem",fontWeight:i===x?"500":"300",transition:"all 0.3s ease"},onMouseEnter:_=>{i!==x&&(_.target.style.background="rgba(255, 255, 255, 0.1)",_.target.style.borderColor="rgba(255, 255, 255, 0.2)")},onMouseLeave:_=>{i!==x&&(_.target.style.background="rgba(0, 0, 0, 0.4)",_.target.style.borderColor="rgba(255, 255, 255, 0.1)")},children:x},x))}),Vt.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"2rem"},children:m.map(x=>Vt.jsxs("div",{onClick:()=>u(x),style:{background:"rgba(0, 0, 0, 0.6)",backdropFilter:"blur(10px)",border:"1px solid rgba(255, 255, 255, 0.1)",borderRadius:"8px",overflow:"hidden",cursor:"pointer",transition:"transform 0.2s, border-color 0.2s"},onMouseEnter:_=>{_.currentTarget.style.transform="translateY(-4px)",_.currentTarget.style.borderColor="rgba(255, 255, 255, 0.3)"},onMouseLeave:_=>{_.currentTarget.style.transform="translateY(0)",_.currentTarget.style.borderColor="rgba(255, 255, 255, 0.1)"},children:[Vt.jsx("div",{style:{width:"100%",height:"200px",background:"rgba(255, 255, 255, 0.05)",position:"relative",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"},children:x.thumbnail?Vt.jsx("img",{src:x.thumbnail,alt:x.title,style:{width:"100%",height:"100%",objectFit:"cover",opacity:1}}):Vt.jsx("span",{style:{fontSize:"0.8rem",color:"rgba(255, 255, 255, 0.3)"},children:"Project Image"})}),Vt.jsxs("div",{style:{padding:"1.5rem"},children:[Vt.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.5rem"},children:[Vt.jsx("h3",{style:{fontSize:"1.0rem",fontWeight:"400",margin:0},children:x.title}),Vt.jsx("span",{style:{fontSize:"0.75rem",color:"rgba(255, 255, 255, 0.5)",background:"rgba(255, 255, 255, 0.1)",padding:"0.25rem 0.75rem",borderRadius:"12px"},children:x.category})]}),Vt.jsx("p",{style:{fontSize:"0.8rem",fontWeight:300,color:"rgba(255, 255, 255, 0.7)",margin:0},children:x.description})]})]},x.id))})]})]})]})}function tT(){return Vt.jsx($E,{})}Jv.createRoot(document.getElementById("root")).render(Vt.jsx(Xv.StrictMode,{children:Vt.jsx(tT,{})}));
