(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const d of u.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();function ug(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var If={exports:{}},Eo={};var ix;function Wv(){if(ix)return Eo;ix=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,u){var d=null;if(u!==void 0&&(d=""+u),l.key!==void 0&&(d=""+l.key),"key"in l){u={};for(var h in l)h!=="key"&&(u[h]=l[h])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:u}}return Eo.Fragment=e,Eo.jsx=i,Eo.jsxs=i,Eo}var ax;function qv(){return ax||(ax=1,If.exports=Wv()),If.exports}var Et=qv(),Hf={exports:{}},re={};var rx;function Yv(){if(rx)return re;rx=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),S=Symbol.iterator;function b(L){return L===null||typeof L!="object"?null:(L=S&&L[S]||L["@@iterator"],typeof L=="function"?L:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,y={};function _(L,at,yt){this.props=L,this.context=at,this.refs=y,this.updater=yt||A}_.prototype.isReactComponent={},_.prototype.setState=function(L,at){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,at,"setState")},_.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function B(){}B.prototype=_.prototype;function U(L,at,yt){this.props=L,this.context=at,this.refs=y,this.updater=yt||A}var P=U.prototype=new B;P.constructor=U,R(P,_.prototype),P.isPureReactComponent=!0;var k=Array.isArray;function N(){}var F={H:null,A:null,T:null,S:null},nt=Object.prototype.hasOwnProperty;function w(L,at,yt){var Tt=yt.ref;return{$$typeof:o,type:L,key:at,ref:Tt!==void 0?Tt:null,props:yt}}function C(L,at){return w(L.type,at,L.props)}function V(L){return typeof L=="object"&&L!==null&&L.$$typeof===o}function tt(L){var at={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(yt){return at[yt]})}var ot=/\/+/g;function mt(L,at){return typeof L=="object"&&L!==null&&L.key!=null?tt(""+L.key):at.toString(36)}function ft(L){switch(L.status){case"fulfilled":return L.value;case"rejected":throw L.reason;default:switch(typeof L.status=="string"?L.then(N,N):(L.status="pending",L.then(function(at){L.status==="pending"&&(L.status="fulfilled",L.value=at)},function(at){L.status==="pending"&&(L.status="rejected",L.reason=at)})),L.status){case"fulfilled":return L.value;case"rejected":throw L.reason}}throw L}function z(L,at,yt,Tt,zt){var et=typeof L;(et==="undefined"||et==="boolean")&&(L=null);var lt=!1;if(L===null)lt=!0;else switch(et){case"bigint":case"string":case"number":lt=!0;break;case"object":switch(L.$$typeof){case o:case e:lt=!0;break;case v:return lt=L._init,z(lt(L._payload),at,yt,Tt,zt)}}if(lt)return zt=zt(L),lt=Tt===""?"."+mt(L,0):Tt,k(zt)?(yt="",lt!=null&&(yt=lt.replace(ot,"$&/")+"/"),z(zt,at,yt,"",function(Xt){return Xt})):zt!=null&&(V(zt)&&(zt=C(zt,yt+(zt.key==null||L&&L.key===zt.key?"":(""+zt.key).replace(ot,"$&/")+"/")+lt)),at.push(zt)),1;lt=0;var wt=Tt===""?".":Tt+":";if(k(L))for(var Ht=0;Ht<L.length;Ht++)Tt=L[Ht],et=wt+mt(Tt,Ht),lt+=z(Tt,at,yt,et,zt);else if(Ht=b(L),typeof Ht=="function")for(L=Ht.call(L),Ht=0;!(Tt=L.next()).done;)Tt=Tt.value,et=wt+mt(Tt,Ht++),lt+=z(Tt,at,yt,et,zt);else if(et==="object"){if(typeof L.then=="function")return z(ft(L),at,yt,Tt,zt);throw at=String(L),Error("Objects are not valid as a React child (found: "+(at==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":at)+"). If you meant to render a collection of children, use an array instead.")}return lt}function j(L,at,yt){if(L==null)return L;var Tt=[],zt=0;return z(L,Tt,"","",function(et){return at.call(yt,et,zt++)}),Tt}function Y(L){if(L._status===-1){var at=L._result;at=at(),at.then(function(yt){(L._status===0||L._status===-1)&&(L._status=1,L._result=yt)},function(yt){(L._status===0||L._status===-1)&&(L._status=2,L._result=yt)}),L._status===-1&&(L._status=0,L._result=at)}if(L._status===1)return L._result.default;throw L._result}var gt=typeof reportError=="function"?reportError:function(L){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var at=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof L=="object"&&L!==null&&typeof L.message=="string"?String(L.message):String(L),error:L});if(!window.dispatchEvent(at))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",L);return}console.error(L)},_t={map:j,forEach:function(L,at,yt){j(L,function(){at.apply(this,arguments)},yt)},count:function(L){var at=0;return j(L,function(){at++}),at},toArray:function(L){return j(L,function(at){return at})||[]},only:function(L){if(!V(L))throw Error("React.Children.only expected to receive a single React element child.");return L}};return re.Activity=g,re.Children=_t,re.Component=_,re.Fragment=i,re.Profiler=l,re.PureComponent=U,re.StrictMode=r,re.Suspense=m,re.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,re.__COMPILER_RUNTIME={__proto__:null,c:function(L){return F.H.useMemoCache(L)}},re.cache=function(L){return function(){return L.apply(null,arguments)}},re.cacheSignal=function(){return null},re.cloneElement=function(L,at,yt){if(L==null)throw Error("The argument must be a React element, but you passed "+L+".");var Tt=R({},L.props),zt=L.key;if(at!=null)for(et in at.key!==void 0&&(zt=""+at.key),at)!nt.call(at,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&at.ref===void 0||(Tt[et]=at[et]);var et=arguments.length-2;if(et===1)Tt.children=yt;else if(1<et){for(var lt=Array(et),wt=0;wt<et;wt++)lt[wt]=arguments[wt+2];Tt.children=lt}return w(L.type,zt,Tt)},re.createContext=function(L){return L={$$typeof:d,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null},L.Provider=L,L.Consumer={$$typeof:u,_context:L},L},re.createElement=function(L,at,yt){var Tt,zt={},et=null;if(at!=null)for(Tt in at.key!==void 0&&(et=""+at.key),at)nt.call(at,Tt)&&Tt!=="key"&&Tt!=="__self"&&Tt!=="__source"&&(zt[Tt]=at[Tt]);var lt=arguments.length-2;if(lt===1)zt.children=yt;else if(1<lt){for(var wt=Array(lt),Ht=0;Ht<lt;Ht++)wt[Ht]=arguments[Ht+2];zt.children=wt}if(L&&L.defaultProps)for(Tt in lt=L.defaultProps,lt)zt[Tt]===void 0&&(zt[Tt]=lt[Tt]);return w(L,et,zt)},re.createRef=function(){return{current:null}},re.forwardRef=function(L){return{$$typeof:h,render:L}},re.isValidElement=V,re.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:Y}},re.memo=function(L,at){return{$$typeof:p,type:L,compare:at===void 0?null:at}},re.startTransition=function(L){var at=F.T,yt={};F.T=yt;try{var Tt=L(),zt=F.S;zt!==null&&zt(yt,Tt),typeof Tt=="object"&&Tt!==null&&typeof Tt.then=="function"&&Tt.then(N,gt)}catch(et){gt(et)}finally{at!==null&&yt.types!==null&&(at.types=yt.types),F.T=at}},re.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},re.use=function(L){return F.H.use(L)},re.useActionState=function(L,at,yt){return F.H.useActionState(L,at,yt)},re.useCallback=function(L,at){return F.H.useCallback(L,at)},re.useContext=function(L){return F.H.useContext(L)},re.useDebugValue=function(){},re.useDeferredValue=function(L,at){return F.H.useDeferredValue(L,at)},re.useEffect=function(L,at){return F.H.useEffect(L,at)},re.useEffectEvent=function(L){return F.H.useEffectEvent(L)},re.useId=function(){return F.H.useId()},re.useImperativeHandle=function(L,at,yt){return F.H.useImperativeHandle(L,at,yt)},re.useInsertionEffect=function(L,at){return F.H.useInsertionEffect(L,at)},re.useLayoutEffect=function(L,at){return F.H.useLayoutEffect(L,at)},re.useMemo=function(L,at){return F.H.useMemo(L,at)},re.useOptimistic=function(L,at){return F.H.useOptimistic(L,at)},re.useReducer=function(L,at,yt){return F.H.useReducer(L,at,yt)},re.useRef=function(L){return F.H.useRef(L)},re.useState=function(L){return F.H.useState(L)},re.useSyncExternalStore=function(L,at,yt){return F.H.useSyncExternalStore(L,at,yt)},re.useTransition=function(){return F.H.useTransition()},re.version="19.2.0",re}var sx;function dh(){return sx||(sx=1,Hf.exports=Yv()),Hf.exports}var vs=dh();const jv=ug(vs);var Gf={exports:{}},To={},Vf={exports:{}},kf={};var ox;function Zv(){return ox||(ox=1,(function(o){function e(z,j){var Y=z.length;z.push(j);t:for(;0<Y;){var gt=Y-1>>>1,_t=z[gt];if(0<l(_t,j))z[gt]=j,z[Y]=_t,Y=gt;else break t}}function i(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var j=z[0],Y=z.pop();if(Y!==j){z[0]=Y;t:for(var gt=0,_t=z.length,L=_t>>>1;gt<L;){var at=2*(gt+1)-1,yt=z[at],Tt=at+1,zt=z[Tt];if(0>l(yt,Y))Tt<_t&&0>l(zt,yt)?(z[gt]=zt,z[Tt]=Y,gt=Tt):(z[gt]=yt,z[at]=Y,gt=at);else if(Tt<_t&&0>l(zt,Y))z[gt]=zt,z[Tt]=Y,gt=Tt;else break t}}return j}function l(z,j){var Y=z.sortIndex-j.sortIndex;return Y!==0?Y:z.id-j.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],v=1,g=null,S=3,b=!1,A=!1,R=!1,y=!1,_=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;function P(z){for(var j=i(p);j!==null;){if(j.callback===null)r(p);else if(j.startTime<=z)r(p),j.sortIndex=j.expirationTime,e(m,j);else break;j=i(p)}}function k(z){if(R=!1,P(z),!A)if(i(m)!==null)A=!0,N||(N=!0,tt());else{var j=i(p);j!==null&&ft(k,j.startTime-z)}}var N=!1,F=-1,nt=5,w=-1;function C(){return y?!0:!(o.unstable_now()-w<nt)}function V(){if(y=!1,N){var z=o.unstable_now();w=z;var j=!0;try{t:{A=!1,R&&(R=!1,B(F),F=-1),b=!0;var Y=S;try{e:{for(P(z),g=i(m);g!==null&&!(g.expirationTime>z&&C());){var gt=g.callback;if(typeof gt=="function"){g.callback=null,S=g.priorityLevel;var _t=gt(g.expirationTime<=z);if(z=o.unstable_now(),typeof _t=="function"){g.callback=_t,P(z),j=!0;break e}g===i(m)&&r(m),P(z)}else r(m);g=i(m)}if(g!==null)j=!0;else{var L=i(p);L!==null&&ft(k,L.startTime-z),j=!1}}break t}finally{g=null,S=Y,b=!1}j=void 0}}finally{j?tt():N=!1}}}var tt;if(typeof U=="function")tt=function(){U(V)};else if(typeof MessageChannel<"u"){var ot=new MessageChannel,mt=ot.port2;ot.port1.onmessage=V,tt=function(){mt.postMessage(null)}}else tt=function(){_(V,0)};function ft(z,j){F=_(function(){z(o.unstable_now())},j)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(z){z.callback=null},o.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):nt=0<z?Math.floor(1e3/z):5},o.unstable_getCurrentPriorityLevel=function(){return S},o.unstable_next=function(z){switch(S){case 1:case 2:case 3:var j=3;break;default:j=S}var Y=S;S=j;try{return z()}finally{S=Y}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(z,j){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var Y=S;S=z;try{return j()}finally{S=Y}},o.unstable_scheduleCallback=function(z,j,Y){var gt=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?gt+Y:gt):Y=gt,z){case 1:var _t=-1;break;case 2:_t=250;break;case 5:_t=1073741823;break;case 4:_t=1e4;break;default:_t=5e3}return _t=Y+_t,z={id:v++,callback:j,priorityLevel:z,startTime:Y,expirationTime:_t,sortIndex:-1},Y>gt?(z.sortIndex=Y,e(p,z),i(m)===null&&z===i(p)&&(R?(B(F),F=-1):R=!0,ft(k,Y-gt))):(z.sortIndex=_t,e(m,z),A||b||(A=!0,N||(N=!0,tt()))),z},o.unstable_shouldYield=C,o.unstable_wrapCallback=function(z){var j=S;return function(){var Y=S;S=j;try{return z.apply(this,arguments)}finally{S=Y}}}})(kf)),kf}var lx;function Kv(){return lx||(lx=1,Vf.exports=Zv()),Vf.exports}var Xf={exports:{}},wn={};var cx;function Qv(){if(cx)return wn;cx=1;var o=dh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,wn.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return u(m,p,null,v)},wn.flushSync=function(m){var p=d.T,v=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=v,r.d.f()}},wn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},wn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},wn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin),S=typeof p.integrity=="string"?p.integrity:void 0,b=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:S,fetchPriority:b}):v==="script"&&r.d.X(m,{crossOrigin:g,integrity:S,fetchPriority:b,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},wn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},wn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=h(v,p.crossOrigin);r.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},wn.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},wn.requestFormReset=function(m){r.d.r(m)},wn.unstable_batchedUpdates=function(m,p){return m(p)},wn.useFormState=function(m,p,v){return d.H.useFormState(m,p,v)},wn.useFormStatus=function(){return d.H.useHostTransitionStatus()},wn.version="19.2.0",wn}var ux;function Jv(){if(ux)return Xf.exports;ux=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Xf.exports=Qv(),Xf.exports}var fx;function $v(){if(fx)return To;fx=1;var o=Kv(),e=dh(),i=Jv();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function u(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(u(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=u(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return m(c),t;if(f===s)return m(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var x=!1,E=c.child;E;){if(E===a){x=!0,a=c,s=f;break}if(E===s){x=!0,s=c,a=f;break}E=E.sibling}if(!x){for(E=f.child;E;){if(E===a){x=!0,a=f,s=c;break}if(E===s){x=!0,s=f,a=c;break}E=E.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}var g=Object.assign,S=Symbol.for("react.element"),b=Symbol.for("react.transitional.element"),A=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),B=Symbol.for("react.consumer"),U=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),nt=Symbol.for("react.lazy"),w=Symbol.for("react.activity"),C=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function tt(t){return t===null||typeof t!="object"?null:(t=V&&t[V]||t["@@iterator"],typeof t=="function"?t:null)}var ot=Symbol.for("react.client.reference");function mt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===ot?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case _:return"Profiler";case y:return"StrictMode";case k:return"Suspense";case N:return"SuspenseList";case w:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case A:return"Portal";case U:return t.displayName||"Context";case B:return(t._context.displayName||"Context")+".Consumer";case P:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:mt(t.type)||"Memo";case nt:n=t._payload,t=t._init;try{return mt(t(n))}catch{}}return null}var ft=Array.isArray,z=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Y={pending:!1,data:null,method:null,action:null},gt=[],_t=-1;function L(t){return{current:t}}function at(t){0>_t||(t.current=gt[_t],gt[_t]=null,_t--)}function yt(t,n){_t++,gt[_t]=t.current,t.current=n}var Tt=L(null),zt=L(null),et=L(null),lt=L(null);function wt(t,n){switch(yt(et,n),yt(zt,t),yt(Tt,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?Am(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=Am(n),t=Rm(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}at(Tt),yt(Tt,t)}function Ht(){at(Tt),at(zt),at(et)}function Xt(t){t.memoizedState!==null&&yt(lt,t);var n=Tt.current,a=Rm(n,t.type);n!==a&&(yt(zt,t),yt(Tt,a))}function le(t){zt.current===t&&(at(Tt),at(zt)),lt.current===t&&(at(lt),So._currentValue=Y)}var $e,de;function Te(t){if($e===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);$e=n&&n[1]||"",de=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$e+t+de}var I=!1;function he(t,n){if(!t||I)return"";I=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var pt=function(){throw Error()};if(Object.defineProperty(pt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(pt,[])}catch(rt){var $=rt}Reflect.construct(t,[],pt)}else{try{pt.call()}catch(rt){$=rt}t.call(pt.prototype)}}else{try{throw Error()}catch(rt){$=rt}(pt=t())&&typeof pt.catch=="function"&&pt.catch(function(){})}}catch(rt){if(rt&&$&&typeof rt.stack=="string")return[rt.stack,$.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),x=f[0],E=f[1];if(x&&E){var O=x.split(`
`),Q=E.split(`
`);for(c=s=0;s<O.length&&!O[s].includes("DetermineComponentFrameRoot");)s++;for(;c<Q.length&&!Q[c].includes("DetermineComponentFrameRoot");)c++;if(s===O.length||c===Q.length)for(s=O.length-1,c=Q.length-1;1<=s&&0<=c&&O[s]!==Q[c];)c--;for(;1<=s&&0<=c;s--,c--)if(O[s]!==Q[c]){if(s!==1||c!==1)do if(s--,c--,0>c||O[s]!==Q[c]){var ut=`
`+O[s].replace(" at new "," at ");return t.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",t.displayName)),ut}while(1<=s&&0<=c);break}}}finally{I=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Te(a):""}function me(t,n){switch(t.tag){case 26:case 27:case 5:return Te(t.type);case 16:return Te("Lazy");case 13:return t.child!==n&&n!==null?Te("Suspense Fallback"):Te("Suspense");case 19:return Te("SuspenseList");case 0:case 15:return he(t.type,!1);case 11:return he(t.type.render,!1);case 1:return he(t.type,!0);case 31:return Te("Activity");default:return""}}function Oe(t){try{var n="",a=null;do n+=me(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Gt=Object.prototype.hasOwnProperty,ke=o.unstable_scheduleCallback,jt=o.unstable_cancelCallback,ae=o.unstable_shouldYield,D=o.unstable_requestPaint,M=o.unstable_now,K=o.unstable_getCurrentPriorityLevel,ht=o.unstable_ImmediatePriority,vt=o.unstable_UserBlockingPriority,st=o.unstable_NormalPriority,qt=o.unstable_LowPriority,Lt=o.unstable_IdlePriority,Qt=o.log,Wt=o.unstable_setDisableYieldValue,St=null,Mt=null;function Yt(t){if(typeof Qt=="function"&&Wt(t),Mt&&typeof Mt.setStrictMode=="function")try{Mt.setStrictMode(St,t)}catch{}}var Vt=Math.clz32?Math.clz32:H,Ot=Math.log,ne=Math.LN2;function H(t){return t>>>=0,t===0?32:31-(Ot(t)/ne|0)|0}var Dt=256,Rt=262144,Ct=4194304;function bt(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function xt(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var c=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var E=s&134217727;return E!==0?(s=E&~f,s!==0?c=bt(s):(x&=E,x!==0?c=bt(x):a||(a=E&~t,a!==0&&(c=bt(a))))):(E=s&~f,E!==0?c=bt(E):x!==0?c=bt(x):a||(a=s&~t,a!==0&&(c=bt(a)))),c===0?0:n!==0&&n!==c&&(n&f)===0&&(f=c&-c,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:c}function Bt(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function ie(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Be(){var t=Ct;return Ct<<=1,(Ct&62914560)===0&&(Ct=4194304),t}function Ae(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Cn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function kn(t,n,a,s,c,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,O=t.expirationTimes,Q=t.hiddenUpdates;for(a=x&~a;0<a;){var ut=31-Vt(a),pt=1<<ut;E[ut]=0,O[ut]=-1;var $=Q[ut];if($!==null)for(Q[ut]=null,ut=0;ut<$.length;ut++){var rt=$[ut];rt!==null&&(rt.lane&=-536870913)}a&=~pt}s!==0&&Vo(t,s,0),f!==0&&c===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function Vo(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-Vt(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Us(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-Vt(a),c=1<<s;c&n|t[s]&n&&(t[s]|=n),a&=~c}}function Ls(t,n){var a=n&-n;return a=(a&42)!==0?1:hi(a),(a&(t.suspendedLanes|n))!==0?0:a}function hi(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ka(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Ns(){var t=j.p;return t!==0?t:(t=window.event,t===void 0?32:Km(t.type))}function Os(t,n){var a=j.p;try{return j.p=t,n()}finally{j.p=a}}var Xn=Math.random().toString(36).slice(2),rn="__reactFiber$"+Xn,fn="__reactProps$"+Xn,Ni="__reactContainer$"+Xn,Rr="__reactEvents$"+Xn,Lc="__reactListeners$"+Xn,Nc="__reactHandles$"+Xn,ko="__reactResources$"+Xn,Qa="__reactMarker$"+Xn;function zs(t){delete t[rn],delete t[fn],delete t[Rr],delete t[Lc],delete t[Nc]}function ha(t){var n=t[rn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Ni]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=Om(t);t!==null;){if(a=t[rn])return a;t=Om(t)}return n}t=a,a=t.parentNode}return null}function T(t){if(t=t[rn]||t[Ni]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function X(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function it(t){var n=t[ko];return n||(n=t[ko]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function J(t){t[Qa]=!0}var q=new Set,At={};function Ut(t,n){Pt(t,n),Pt(t+"Capture",n)}function Pt(t,n){for(At[t]=n,t=0;t<n.length;t++)q.add(n[t])}var Ft=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),$t={},ee={};function Zt(t){return Gt.call(ee,t)?!0:Gt.call($t,t)?!1:Ft.test(t)?ee[t]=!0:($t[t]=!0,!1)}function ce(t,n,a){if(Zt(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Ee(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function Re(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function Se(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ne(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Jt(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var c=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return c.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Xe(t){if(!t._valueTracker){var n=Ne(t)?"checked":"value";t._valueTracker=Jt(t,n,""+t[n])}}function ye(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=Ne(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function _n(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var pa=/[\n"\\]/g;function qe(t){return t.replace(pa,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Oi(t,n,a,s,c,f,x,E){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+Se(n)):t.value!==""+Se(n)&&(t.value=""+Se(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?vn(t,x,Se(n)):a!=null?vn(t,x,Se(a)):s!=null&&t.removeAttribute("value"),c==null&&f!=null&&(t.defaultChecked=!!f),c!=null&&(t.checked=c&&typeof c!="function"&&typeof c!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+Se(E):t.removeAttribute("name")}function Ye(t,n,a,s,c,f,x,E){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Xe(t);return}a=a!=null?""+Se(a):"",n=n!=null?""+Se(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=E?t.checked:!!s,t.defaultChecked=!!s,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),Xe(t)}function vn(t,n,a){n==="number"&&_n(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function dn(t,n,a,s){if(t=t.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<t.length;a++)c=n.hasOwnProperty("$"+t[a].value),t[a].selected!==c&&(t[a].selected=c),c&&s&&(t[a].defaultSelected=!0)}else{for(a=""+Se(a),n=null,c=0;c<t.length;c++){if(t[c].value===a){t[c].selected=!0,s&&(t[c].defaultSelected=!0);return}n!==null||t[c].disabled||(n=t[c])}n!==null&&(n.selected=!0)}}function Sn(t,n,a){if(n!=null&&(n=""+Se(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+Se(a):""}function Mn(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(ft(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=Se(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Xe(t)}function Ei(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var zi=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Mh(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||zi.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Eh(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Mh(t,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Mh(t,f,n[f])}function Oc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Gg=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vg=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Xo(t){return Vg.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Pi(){}var zc=null;function Pc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cr=null,wr=null;function Th(t){var n=T(t);if(n&&(t=n.stateNode)){var a=t[fn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Oi(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+qe(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var c=s[fn]||null;if(!c)throw Error(r(90));Oi(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&ye(s)}break t;case"textarea":Sn(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&dn(t,!!a.multiple,n,!1)}}}var Bc=!1;function Ah(t,n,a){if(Bc)return t(n,a);Bc=!0;try{var s=t(n);return s}finally{if(Bc=!1,(Cr!==null||wr!==null)&&(Ul(),Cr&&(n=Cr,t=wr,wr=Cr=null,Th(n),t)))for(n=0;n<t.length;n++)Th(t[n])}}function Ps(t,n){var a=t.stateNode;if(a===null)return null;var s=a[fn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Fc=!1;if(Bi)try{var Bs={};Object.defineProperty(Bs,"passive",{get:function(){Fc=!0}}),window.addEventListener("test",Bs,Bs),window.removeEventListener("test",Bs,Bs)}catch{Fc=!1}var ma=null,Ic=null,Wo=null;function Rh(){if(Wo)return Wo;var t,n=Ic,a=n.length,s,c="value"in ma?ma.value:ma.textContent,f=c.length;for(t=0;t<a&&n[t]===c[t];t++);var x=a-t;for(s=1;s<=x&&n[a-s]===c[f-s];s++);return Wo=c.slice(t,1<s?1-s:void 0)}function qo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Yo(){return!0}function Ch(){return!1}function zn(t){function n(a,s,c,f,x){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Yo:Ch,this.isPropagationStopped=Ch,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Yo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Yo)},persist:function(){},isPersistent:Yo}),n}var Ja={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},jo=zn(Ja),Fs=g({},Ja,{view:0,detail:0}),kg=zn(Fs),Hc,Gc,Is,Zo=g({},Fs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Is&&(Is&&t.type==="mousemove"?(Hc=t.screenX-Is.screenX,Gc=t.screenY-Is.screenY):Gc=Hc=0,Is=t),Hc)},movementY:function(t){return"movementY"in t?t.movementY:Gc}}),wh=zn(Zo),Xg=g({},Zo,{dataTransfer:0}),Wg=zn(Xg),qg=g({},Fs,{relatedTarget:0}),Vc=zn(qg),Yg=g({},Ja,{animationName:0,elapsedTime:0,pseudoElement:0}),jg=zn(Yg),Zg=g({},Ja,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Kg=zn(Zg),Qg=g({},Ja,{data:0}),Dh=zn(Qg),Jg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$g={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},t_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function e_(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=t_[t])?!!n[t]:!1}function kc(){return e_}var n_=g({},Fs,{key:function(t){if(t.key){var n=Jg[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=qo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$g[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kc,charCode:function(t){return t.type==="keypress"?qo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?qo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),i_=zn(n_),a_=g({},Zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Uh=zn(a_),r_=g({},Fs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kc}),s_=zn(r_),o_=g({},Ja,{propertyName:0,elapsedTime:0,pseudoElement:0}),l_=zn(o_),c_=g({},Zo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),u_=zn(c_),f_=g({},Ja,{newState:0,oldState:0}),d_=zn(f_),h_=[9,13,27,32],Xc=Bi&&"CompositionEvent"in window,Hs=null;Bi&&"documentMode"in document&&(Hs=document.documentMode);var p_=Bi&&"TextEvent"in window&&!Hs,Lh=Bi&&(!Xc||Hs&&8<Hs&&11>=Hs),Nh=" ",Oh=!1;function zh(t,n){switch(t){case"keyup":return h_.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ph(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Dr=!1;function m_(t,n){switch(t){case"compositionend":return Ph(n);case"keypress":return n.which!==32?null:(Oh=!0,Nh);case"textInput":return t=n.data,t===Nh&&Oh?null:t;default:return null}}function x_(t,n){if(Dr)return t==="compositionend"||!Xc&&zh(t,n)?(t=Rh(),Wo=Ic=ma=null,Dr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Lh&&n.locale!=="ko"?null:n.data;default:return null}}var g_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Bh(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!g_[t.type]:n==="textarea"}function Fh(t,n,a,s){Cr?wr?wr.push(s):wr=[s]:Cr=s,n=Fl(n,"onChange"),0<n.length&&(a=new jo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Gs=null,Vs=null;function __(t){Sm(t,0)}function Ko(t){var n=X(t);if(ye(n))return t}function Ih(t,n){if(t==="change")return n}var Hh=!1;if(Bi){var Wc;if(Bi){var qc="oninput"in document;if(!qc){var Gh=document.createElement("div");Gh.setAttribute("oninput","return;"),qc=typeof Gh.oninput=="function"}Wc=qc}else Wc=!1;Hh=Wc&&(!document.documentMode||9<document.documentMode)}function Vh(){Gs&&(Gs.detachEvent("onpropertychange",kh),Vs=Gs=null)}function kh(t){if(t.propertyName==="value"&&Ko(Vs)){var n=[];Fh(n,Vs,t,Pc(t)),Ah(__,n)}}function v_(t,n,a){t==="focusin"?(Vh(),Gs=n,Vs=a,Gs.attachEvent("onpropertychange",kh)):t==="focusout"&&Vh()}function S_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ko(Vs)}function y_(t,n){if(t==="click")return Ko(n)}function b_(t,n){if(t==="input"||t==="change")return Ko(n)}function M_(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Wn=typeof Object.is=="function"?Object.is:M_;function ks(t,n){if(Wn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!Gt.call(n,c)||!Wn(t[c],n[c]))return!1}return!0}function Xh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Wh(t,n){var a=Xh(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Xh(a)}}function qh(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?qh(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Yh(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=_n(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=_n(t.document)}return n}function Yc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var E_=Bi&&"documentMode"in document&&11>=document.documentMode,Ur=null,jc=null,Xs=null,Zc=!1;function jh(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Zc||Ur==null||Ur!==_n(s)||(s=Ur,"selectionStart"in s&&Yc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Xs&&ks(Xs,s)||(Xs=s,s=Fl(jc,"onSelect"),0<s.length&&(n=new jo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Ur)))}function $a(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Lr={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},Kc={},Zh={};Bi&&(Zh=document.createElement("div").style,"AnimationEvent"in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),"TransitionEvent"in window||delete Lr.transitionend.transition);function tr(t){if(Kc[t])return Kc[t];if(!Lr[t])return t;var n=Lr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Zh)return Kc[t]=n[a];return t}var Kh=tr("animationend"),Qh=tr("animationiteration"),Jh=tr("animationstart"),T_=tr("transitionrun"),A_=tr("transitionstart"),R_=tr("transitioncancel"),$h=tr("transitionend"),tp=new Map,Qc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Qc.push("scrollEnd");function pi(t,n){tp.set(t,n),Ut(n,[t])}var Qo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ni=[],Nr=0,Jc=0;function Jo(){for(var t=Nr,n=Jc=Nr=0;n<t;){var a=ni[n];ni[n++]=null;var s=ni[n];ni[n++]=null;var c=ni[n];ni[n++]=null;var f=ni[n];if(ni[n++]=null,s!==null&&c!==null){var x=s.pending;x===null?c.next=c:(c.next=x.next,x.next=c),s.pending=c}f!==0&&ep(a,c,f)}}function $o(t,n,a,s){ni[Nr++]=t,ni[Nr++]=n,ni[Nr++]=a,ni[Nr++]=s,Jc|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function $c(t,n,a,s){return $o(t,n,a,s),tl(t)}function er(t,n){return $o(t,null,null,n),tl(t)}function ep(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(c=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,c&&n!==null&&(c=31-Vt(a),t=f.hiddenUpdates,s=t[c],s===null?t[c]=[n]:s.push(n),n.lane=a|536870912),f):null}function tl(t){if(50<ho)throw ho=0,cf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Or={};function C_(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,n,a,s){return new C_(t,n,a,s)}function tu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Fi(t,n){var a=t.alternate;return a===null?(a=qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function np(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function el(t,n,a,s,c,f){var x=0;if(s=t,typeof t=="function")tu(t)&&(x=1);else if(typeof t=="string")x=Nv(t,a,Tt.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case w:return t=qn(31,a,n,c),t.elementType=w,t.lanes=f,t;case R:return nr(a.children,c,f,n);case y:x=8,c|=24;break;case _:return t=qn(12,a,n,c|2),t.elementType=_,t.lanes=f,t;case k:return t=qn(13,a,n,c),t.elementType=k,t.lanes=f,t;case N:return t=qn(19,a,n,c),t.elementType=N,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:x=10;break t;case B:x=9;break t;case P:x=11;break t;case F:x=14;break t;case nt:x=16,s=null;break t}x=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=qn(x,a,n,c),n.elementType=t,n.type=s,n.lanes=f,n}function nr(t,n,a,s){return t=qn(7,t,s,n),t.lanes=a,t}function eu(t,n,a){return t=qn(6,t,null,n),t.lanes=a,t}function ip(t){var n=qn(18,null,null,0);return n.stateNode=t,n}function nu(t,n,a){return n=qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var ap=new WeakMap;function ii(t,n){if(typeof t=="object"&&t!==null){var a=ap.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Oe(n)},ap.set(t,n),n)}return{value:t,source:n,stack:Oe(n)}}var zr=[],Pr=0,nl=null,Ws=0,ai=[],ri=0,xa=null,Ti=1,Ai="";function Ii(t,n){zr[Pr++]=Ws,zr[Pr++]=nl,nl=t,Ws=n}function rp(t,n,a){ai[ri++]=Ti,ai[ri++]=Ai,ai[ri++]=xa,xa=t;var s=Ti;t=Ai;var c=32-Vt(s)-1;s&=~(1<<c),a+=1;var f=32-Vt(n)+c;if(30<f){var x=c-c%5;f=(s&(1<<x)-1).toString(32),s>>=x,c-=x,Ti=1<<32-Vt(n)+c|a<<c|s,Ai=f+t}else Ti=1<<f|a<<c|s,Ai=t}function iu(t){t.return!==null&&(Ii(t,1),rp(t,1,0))}function au(t){for(;t===nl;)nl=zr[--Pr],zr[Pr]=null,Ws=zr[--Pr],zr[Pr]=null;for(;t===xa;)xa=ai[--ri],ai[ri]=null,Ai=ai[--ri],ai[ri]=null,Ti=ai[--ri],ai[ri]=null}function sp(t,n){ai[ri++]=Ti,ai[ri++]=Ai,ai[ri++]=xa,Ti=n.id,Ai=n.overflow,xa=t}var En=null,je=null,be=!1,ga=null,si=!1,ru=Error(r(519));function _a(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw qs(ii(n,t)),ru}function op(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[rn]=t,n[fn]=s,a){case"dialog":ge("cancel",n),ge("close",n);break;case"iframe":case"object":case"embed":ge("load",n);break;case"video":case"audio":for(a=0;a<mo.length;a++)ge(mo[a],n);break;case"source":ge("error",n);break;case"img":case"image":case"link":ge("error",n),ge("load",n);break;case"details":ge("toggle",n);break;case"input":ge("invalid",n),Ye(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":ge("invalid",n);break;case"textarea":ge("invalid",n),Mn(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||Em(n.textContent,a)?(s.popover!=null&&(ge("beforetoggle",n),ge("toggle",n)),s.onScroll!=null&&ge("scroll",n),s.onScrollEnd!=null&&ge("scrollend",n),s.onClick!=null&&(n.onclick=Pi),n=!0):n=!1,n||_a(t,!0)}function lp(t){for(En=t.return;En;)switch(En.tag){case 5:case 31:case 13:si=!1;return;case 27:case 3:si=!0;return;default:En=En.return}}function Br(t){if(t!==En)return!1;if(!be)return lp(t),be=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Ef(t.type,t.memoizedProps)),a=!a),a&&je&&_a(t),lp(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));je=Nm(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));je=Nm(t)}else n===27?(n=je,La(t.type)?(t=wf,wf=null,je=t):je=n):je=En?li(t.stateNode.nextSibling):null;return!0}function ir(){je=En=null,be=!1}function su(){var t=ga;return t!==null&&(In===null?In=t:In.push.apply(In,t),ga=null),t}function qs(t){ga===null?ga=[t]:ga.push(t)}var ou=L(null),ar=null,Hi=null;function va(t,n,a){yt(ou,n._currentValue),n._currentValue=a}function Gi(t){t._currentValue=ou.current,at(ou)}function lu(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function cu(t,n,a,s){var c=t.child;for(c!==null&&(c.return=t);c!==null;){var f=c.dependencies;if(f!==null){var x=c.child;f=f.firstContext;t:for(;f!==null;){var E=f;f=c;for(var O=0;O<n.length;O++)if(E.context===n[O]){f.lanes|=a,E=f.alternate,E!==null&&(E.lanes|=a),lu(f.return,a,t),s||(x=null);break t}f=E.next}}else if(c.tag===18){if(x=c.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),lu(x,a,t),x=null}else x=c.child;if(x!==null)x.return=c;else for(x=c;x!==null;){if(x===t){x=null;break}if(c=x.sibling,c!==null){c.return=x.return,x=c;break}x=x.return}c=x}}function Fr(t,n,a,s){t=null;for(var c=n,f=!1;c!==null;){if(!f){if((c.flags&524288)!==0)f=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var x=c.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var E=c.type;Wn(c.pendingProps.value,x.value)||(t!==null?t.push(E):t=[E])}}else if(c===lt.current){if(x=c.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(t!==null?t.push(So):t=[So])}c=c.return}t!==null&&cu(n,t,a,s),n.flags|=262144}function il(t){for(t=t.firstContext;t!==null;){if(!Wn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function rr(t){ar=t,Hi=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Tn(t){return cp(ar,t)}function al(t,n){return ar===null&&rr(t),cp(t,n)}function cp(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Hi===null){if(t===null)throw Error(r(308));Hi=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Hi=Hi.next=n;return a}var w_=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},D_=o.unstable_scheduleCallback,U_=o.unstable_NormalPriority,sn={$$typeof:U,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function uu(){return{controller:new w_,data:new Map,refCount:0}}function Ys(t){t.refCount--,t.refCount===0&&D_(U_,function(){t.controller.abort()})}var js=null,fu=0,Ir=0,Hr=null;function L_(t,n){if(js===null){var a=js=[];fu=0,Ir=mf(),Hr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return fu++,n.then(up,up),n}function up(){if(--fu===0&&js!==null){Hr!==null&&(Hr.status="fulfilled");var t=js;js=null,Ir=0,Hr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function N_(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var fp=z.S;z.S=function(t,n){j0=M(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&L_(t,n),fp!==null&&fp(t,n)};var sr=L(null);function du(){var t=sr.current;return t!==null?t:We.pooledCache}function rl(t,n){n===null?yt(sr,sr.current):yt(sr,n.pool)}function dp(){var t=du();return t===null?null:{parent:sn._currentValue,pool:t}}var Gr=Error(r(460)),hu=Error(r(474)),sl=Error(r(542)),ol={then:function(){}};function hp(t){return t=t.status,t==="fulfilled"||t==="rejected"}function pp(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Pi,Pi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,xp(t),t;default:if(typeof n.status=="string")n.then(Pi,Pi);else{if(t=We,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,xp(t),t}throw lr=n,Gr}}function or(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(lr=a,Gr):a}}var lr=null;function mp(){if(lr===null)throw Error(r(459));var t=lr;return lr=null,t}function xp(t){if(t===Gr||t===sl)throw Error(r(483))}var Vr=null,Zs=0;function ll(t){var n=Zs;return Zs+=1,Vr===null&&(Vr=[]),pp(Vr,t,n)}function Ks(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function cl(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function gp(t){function n(W,G){if(t){var Z=W.deletions;Z===null?(W.deletions=[G],W.flags|=16):Z.push(G)}}function a(W,G){if(!t)return null;for(;G!==null;)n(W,G),G=G.sibling;return null}function s(W){for(var G=new Map;W!==null;)W.key!==null?G.set(W.key,W):G.set(W.index,W),W=W.sibling;return G}function c(W,G){return W=Fi(W,G),W.index=0,W.sibling=null,W}function f(W,G,Z){return W.index=Z,t?(Z=W.alternate,Z!==null?(Z=Z.index,Z<G?(W.flags|=67108866,G):Z):(W.flags|=67108866,G)):(W.flags|=1048576,G)}function x(W){return t&&W.alternate===null&&(W.flags|=67108866),W}function E(W,G,Z,dt){return G===null||G.tag!==6?(G=eu(Z,W.mode,dt),G.return=W,G):(G=c(G,Z),G.return=W,G)}function O(W,G,Z,dt){var Kt=Z.type;return Kt===R?ut(W,G,Z.props.children,dt,Z.key):G!==null&&(G.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===nt&&or(Kt)===G.type)?(G=c(G,Z.props),Ks(G,Z),G.return=W,G):(G=el(Z.type,Z.key,Z.props,null,W.mode,dt),Ks(G,Z),G.return=W,G)}function Q(W,G,Z,dt){return G===null||G.tag!==4||G.stateNode.containerInfo!==Z.containerInfo||G.stateNode.implementation!==Z.implementation?(G=nu(Z,W.mode,dt),G.return=W,G):(G=c(G,Z.children||[]),G.return=W,G)}function ut(W,G,Z,dt,Kt){return G===null||G.tag!==7?(G=nr(Z,W.mode,dt,Kt),G.return=W,G):(G=c(G,Z),G.return=W,G)}function pt(W,G,Z){if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return G=eu(""+G,W.mode,Z),G.return=W,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case b:return Z=el(G.type,G.key,G.props,null,W.mode,Z),Ks(Z,G),Z.return=W,Z;case A:return G=nu(G,W.mode,Z),G.return=W,G;case nt:return G=or(G),pt(W,G,Z)}if(ft(G)||tt(G))return G=nr(G,W.mode,Z,null),G.return=W,G;if(typeof G.then=="function")return pt(W,ll(G),Z);if(G.$$typeof===U)return pt(W,al(W,G),Z);cl(W,G)}return null}function $(W,G,Z,dt){var Kt=G!==null?G.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return Kt!==null?null:E(W,G,""+Z,dt);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case b:return Z.key===Kt?O(W,G,Z,dt):null;case A:return Z.key===Kt?Q(W,G,Z,dt):null;case nt:return Z=or(Z),$(W,G,Z,dt)}if(ft(Z)||tt(Z))return Kt!==null?null:ut(W,G,Z,dt,null);if(typeof Z.then=="function")return $(W,G,ll(Z),dt);if(Z.$$typeof===U)return $(W,G,al(W,Z),dt);cl(W,Z)}return null}function rt(W,G,Z,dt,Kt){if(typeof dt=="string"&&dt!==""||typeof dt=="number"||typeof dt=="bigint")return W=W.get(Z)||null,E(G,W,""+dt,Kt);if(typeof dt=="object"&&dt!==null){switch(dt.$$typeof){case b:return W=W.get(dt.key===null?Z:dt.key)||null,O(G,W,dt,Kt);case A:return W=W.get(dt.key===null?Z:dt.key)||null,Q(G,W,dt,Kt);case nt:return dt=or(dt),rt(W,G,Z,dt,Kt)}if(ft(dt)||tt(dt))return W=W.get(Z)||null,ut(G,W,dt,Kt,null);if(typeof dt.then=="function")return rt(W,G,Z,ll(dt),Kt);if(dt.$$typeof===U)return rt(W,G,Z,al(G,dt),Kt);cl(G,dt)}return null}function It(W,G,Z,dt){for(var Kt=null,Ce=null,kt=G,ue=G=0,ve=null;kt!==null&&ue<Z.length;ue++){kt.index>ue?(ve=kt,kt=null):ve=kt.sibling;var we=$(W,kt,Z[ue],dt);if(we===null){kt===null&&(kt=ve);break}t&&kt&&we.alternate===null&&n(W,kt),G=f(we,G,ue),Ce===null?Kt=we:Ce.sibling=we,Ce=we,kt=ve}if(ue===Z.length)return a(W,kt),be&&Ii(W,ue),Kt;if(kt===null){for(;ue<Z.length;ue++)kt=pt(W,Z[ue],dt),kt!==null&&(G=f(kt,G,ue),Ce===null?Kt=kt:Ce.sibling=kt,Ce=kt);return be&&Ii(W,ue),Kt}for(kt=s(kt);ue<Z.length;ue++)ve=rt(kt,W,ue,Z[ue],dt),ve!==null&&(t&&ve.alternate!==null&&kt.delete(ve.key===null?ue:ve.key),G=f(ve,G,ue),Ce===null?Kt=ve:Ce.sibling=ve,Ce=ve);return t&&kt.forEach(function(Ba){return n(W,Ba)}),be&&Ii(W,ue),Kt}function te(W,G,Z,dt){if(Z==null)throw Error(r(151));for(var Kt=null,Ce=null,kt=G,ue=G=0,ve=null,we=Z.next();kt!==null&&!we.done;ue++,we=Z.next()){kt.index>ue?(ve=kt,kt=null):ve=kt.sibling;var Ba=$(W,kt,we.value,dt);if(Ba===null){kt===null&&(kt=ve);break}t&&kt&&Ba.alternate===null&&n(W,kt),G=f(Ba,G,ue),Ce===null?Kt=Ba:Ce.sibling=Ba,Ce=Ba,kt=ve}if(we.done)return a(W,kt),be&&Ii(W,ue),Kt;if(kt===null){for(;!we.done;ue++,we=Z.next())we=pt(W,we.value,dt),we!==null&&(G=f(we,G,ue),Ce===null?Kt=we:Ce.sibling=we,Ce=we);return be&&Ii(W,ue),Kt}for(kt=s(kt);!we.done;ue++,we=Z.next())we=rt(kt,W,ue,we.value,dt),we!==null&&(t&&we.alternate!==null&&kt.delete(we.key===null?ue:we.key),G=f(we,G,ue),Ce===null?Kt=we:Ce.sibling=we,Ce=we);return t&&kt.forEach(function(Xv){return n(W,Xv)}),be&&Ii(W,ue),Kt}function He(W,G,Z,dt){if(typeof Z=="object"&&Z!==null&&Z.type===R&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case b:t:{for(var Kt=Z.key;G!==null;){if(G.key===Kt){if(Kt=Z.type,Kt===R){if(G.tag===7){a(W,G.sibling),dt=c(G,Z.props.children),dt.return=W,W=dt;break t}}else if(G.elementType===Kt||typeof Kt=="object"&&Kt!==null&&Kt.$$typeof===nt&&or(Kt)===G.type){a(W,G.sibling),dt=c(G,Z.props),Ks(dt,Z),dt.return=W,W=dt;break t}a(W,G);break}else n(W,G);G=G.sibling}Z.type===R?(dt=nr(Z.props.children,W.mode,dt,Z.key),dt.return=W,W=dt):(dt=el(Z.type,Z.key,Z.props,null,W.mode,dt),Ks(dt,Z),dt.return=W,W=dt)}return x(W);case A:t:{for(Kt=Z.key;G!==null;){if(G.key===Kt)if(G.tag===4&&G.stateNode.containerInfo===Z.containerInfo&&G.stateNode.implementation===Z.implementation){a(W,G.sibling),dt=c(G,Z.children||[]),dt.return=W,W=dt;break t}else{a(W,G);break}else n(W,G);G=G.sibling}dt=nu(Z,W.mode,dt),dt.return=W,W=dt}return x(W);case nt:return Z=or(Z),He(W,G,Z,dt)}if(ft(Z))return It(W,G,Z,dt);if(tt(Z)){if(Kt=tt(Z),typeof Kt!="function")throw Error(r(150));return Z=Kt.call(Z),te(W,G,Z,dt)}if(typeof Z.then=="function")return He(W,G,ll(Z),dt);if(Z.$$typeof===U)return He(W,G,al(W,Z),dt);cl(W,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint"?(Z=""+Z,G!==null&&G.tag===6?(a(W,G.sibling),dt=c(G,Z),dt.return=W,W=dt):(a(W,G),dt=eu(Z,W.mode,dt),dt.return=W,W=dt),x(W)):a(W,G)}return function(W,G,Z,dt){try{Zs=0;var Kt=He(W,G,Z,dt);return Vr=null,Kt}catch(kt){if(kt===Gr||kt===sl)throw kt;var Ce=qn(29,kt,null,W.mode);return Ce.lanes=dt,Ce.return=W,Ce}finally{}}}var cr=gp(!0),_p=gp(!1),Sa=!1;function pu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function mu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function ya(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ba(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Le&2)!==0){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=tl(t),ep(t,null,a),n}return $o(t,s,n,a),tl(t)}function Qs(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Us(t,a)}}function xu(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var gu=!1;function Js(){if(gu){var t=Hr;if(t!==null)throw t}}function $s(t,n,a,s){gu=!1;var c=t.updateQueue;Sa=!1;var f=c.firstBaseUpdate,x=c.lastBaseUpdate,E=c.shared.pending;if(E!==null){c.shared.pending=null;var O=E,Q=O.next;O.next=null,x===null?f=Q:x.next=Q,x=O;var ut=t.alternate;ut!==null&&(ut=ut.updateQueue,E=ut.lastBaseUpdate,E!==x&&(E===null?ut.firstBaseUpdate=Q:E.next=Q,ut.lastBaseUpdate=O))}if(f!==null){var pt=c.baseState;x=0,ut=Q=O=null,E=f;do{var $=E.lane&-536870913,rt=$!==E.lane;if(rt?(_e&$)===$:(s&$)===$){$!==0&&$===Ir&&(gu=!0),ut!==null&&(ut=ut.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var It=t,te=E;$=n;var He=a;switch(te.tag){case 1:if(It=te.payload,typeof It=="function"){pt=It.call(He,pt,$);break t}pt=It;break t;case 3:It.flags=It.flags&-65537|128;case 0:if(It=te.payload,$=typeof It=="function"?It.call(He,pt,$):It,$==null)break t;pt=g({},pt,$);break t;case 2:Sa=!0}}$=E.callback,$!==null&&(t.flags|=64,rt&&(t.flags|=8192),rt=c.callbacks,rt===null?c.callbacks=[$]:rt.push($))}else rt={lane:$,tag:E.tag,payload:E.payload,callback:E.callback,next:null},ut===null?(Q=ut=rt,O=pt):ut=ut.next=rt,x|=$;if(E=E.next,E===null){if(E=c.shared.pending,E===null)break;rt=E,E=rt.next,rt.next=null,c.lastBaseUpdate=rt,c.shared.pending=null}}while(!0);ut===null&&(O=pt),c.baseState=O,c.firstBaseUpdate=Q,c.lastBaseUpdate=ut,f===null&&(c.shared.lanes=0),Ra|=x,t.lanes=x,t.memoizedState=pt}}function vp(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Sp(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)vp(a[t],n)}var kr=L(null),ul=L(0);function yp(t,n){t=Ki,yt(ul,t),yt(kr,n),Ki=t|n.baseLanes}function _u(){yt(ul,Ki),yt(kr,kr.current)}function vu(){Ki=ul.current,at(kr),at(ul)}var Yn=L(null),oi=null;function Ma(t){var n=t.alternate;yt(tn,tn.current&1),yt(Yn,t),oi===null&&(n===null||kr.current!==null||n.memoizedState!==null)&&(oi=t)}function Su(t){yt(tn,tn.current),yt(Yn,t),oi===null&&(oi=t)}function bp(t){t.tag===22?(yt(tn,tn.current),yt(Yn,t),oi===null&&(oi=t)):Ea()}function Ea(){yt(tn,tn.current),yt(Yn,Yn.current)}function jn(t){at(Yn),oi===t&&(oi=null),at(tn)}var tn=L(0);function fl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Rf(a)||Cf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Vi=0,se=null,Fe=null,on=null,dl=!1,Xr=!1,ur=!1,hl=0,to=0,Wr=null,O_=0;function Qe(){throw Error(r(321))}function yu(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Wn(t[a],n[a]))return!1;return!0}function bu(t,n,a,s,c,f){return Vi=f,se=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=t===null||t.memoizedState===null?r0:Bu,ur=!1,f=a(s,c),ur=!1,Xr&&(f=Ep(n,a,s,c)),Mp(t),f}function Mp(t){z.H=io;var n=Fe!==null&&Fe.next!==null;if(Vi=0,on=Fe=se=null,dl=!1,to=0,Wr=null,n)throw Error(r(300));t===null||ln||(t=t.dependencies,t!==null&&il(t)&&(ln=!0))}function Ep(t,n,a,s){se=t;var c=0;do{if(Xr&&(Wr=null),to=0,Xr=!1,25<=c)throw Error(r(301));if(c+=1,on=Fe=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}z.H=s0,f=n(a,s)}while(Xr);return f}function z_(){var t=z.H,n=t.useState()[0];return n=typeof n.then=="function"?eo(n):n,t=t.useState()[0],(Fe!==null?Fe.memoizedState:null)!==t&&(se.flags|=1024),n}function Mu(){var t=hl!==0;return hl=0,t}function Eu(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Tu(t){if(dl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}dl=!1}Vi=0,on=Fe=se=null,Xr=!1,to=hl=0,Wr=null}function Ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return on===null?se.memoizedState=on=t:on=on.next=t,on}function en(){if(Fe===null){var t=se.alternate;t=t!==null?t.memoizedState:null}else t=Fe.next;var n=on===null?se.memoizedState:on.next;if(n!==null)on=n,Fe=t;else{if(t===null)throw se.alternate===null?Error(r(467)):Error(r(310));Fe=t,t={memoizedState:Fe.memoizedState,baseState:Fe.baseState,baseQueue:Fe.baseQueue,queue:Fe.queue,next:null},on===null?se.memoizedState=on=t:on=on.next=t}return on}function pl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function eo(t){var n=to;return to+=1,Wr===null&&(Wr=[]),t=pp(Wr,t,n),n=se,(on===null?n.memoizedState:on.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?r0:Bu),t}function ml(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return eo(t);if(t.$$typeof===U)return Tn(t)}throw Error(r(438,String(t)))}function Au(t){var n=null,a=se.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=se.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=pl(),se.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=C;return n.index++,a}function ki(t,n){return typeof n=="function"?n(t):n}function xl(t){var n=en();return Ru(n,Fe,t)}function Ru(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=t.baseQueue,f=s.pending;if(f!==null){if(c!==null){var x=c.next;c.next=f.next,f.next=x}n.baseQueue=c=f,s.pending=null}if(f=t.baseState,c===null)t.memoizedState=f;else{n=c.next;var E=x=null,O=null,Q=n,ut=!1;do{var pt=Q.lane&-536870913;if(pt!==Q.lane?(_e&pt)===pt:(Vi&pt)===pt){var $=Q.revertLane;if($===0)O!==null&&(O=O.next={lane:0,revertLane:0,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),pt===Ir&&(ut=!0);else if((Vi&$)===$){Q=Q.next,$===Ir&&(ut=!0);continue}else pt={lane:0,revertLane:Q.revertLane,gesture:null,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},O===null?(E=O=pt,x=f):O=O.next=pt,se.lanes|=$,Ra|=$;pt=Q.action,ur&&a(f,pt),f=Q.hasEagerState?Q.eagerState:a(f,pt)}else $={lane:pt,revertLane:Q.revertLane,gesture:Q.gesture,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null},O===null?(E=O=$,x=f):O=O.next=$,se.lanes|=pt,Ra|=pt;Q=Q.next}while(Q!==null&&Q!==n);if(O===null?x=f:O.next=E,!Wn(f,t.memoizedState)&&(ln=!0,ut&&(a=Hr,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=O,s.lastRenderedState=f}return c===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Cu(t){var n=en(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var x=c=c.next;do f=t(f,x.action),x=x.next;while(x!==c);Wn(f,n.memoizedState)||(ln=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Tp(t,n,a){var s=se,c=en(),f=be;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!Wn((Fe||c).memoizedState,a);if(x&&(c.memoizedState=a,ln=!0),c=c.queue,Uu(Cp.bind(null,s,c,t),[t]),c.getSnapshot!==n||x||on!==null&&on.memoizedState.tag&1){if(s.flags|=2048,qr(9,{destroy:void 0},Rp.bind(null,s,c,a,n),null),We===null)throw Error(r(349));f||(Vi&127)!==0||Ap(s,n,a)}return a}function Ap(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=se.updateQueue,n===null?(n=pl(),se.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Rp(t,n,a,s){n.value=a,n.getSnapshot=s,wp(n)&&Dp(t)}function Cp(t,n,a){return a(function(){wp(n)&&Dp(t)})}function wp(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Wn(t,a)}catch{return!0}}function Dp(t){var n=er(t,2);n!==null&&Hn(n,t,2)}function wu(t){var n=Ln();if(typeof t=="function"){var a=t;if(t=a(),ur){Yt(!0);try{a()}finally{Yt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:t},n}function Up(t,n,a,s){return t.baseState=a,Ru(t,Fe,typeof s=="function"?s:ki)}function P_(t,n,a,s,c){if(vl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:c,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};z.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Lp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Lp(t,n){var a=n.action,s=n.payload,c=t.state;if(n.isTransition){var f=z.T,x={};z.T=x;try{var E=a(c,s),O=z.S;O!==null&&O(x,E),Np(t,n,E)}catch(Q){Du(t,n,Q)}finally{f!==null&&x.types!==null&&(f.types=x.types),z.T=f}}else try{f=a(c,s),Np(t,n,f)}catch(Q){Du(t,n,Q)}}function Np(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Op(t,n,s)},function(s){return Du(t,n,s)}):Op(t,n,a)}function Op(t,n,a){n.status="fulfilled",n.value=a,zp(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Lp(t,a)))}function Du(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,zp(n),n=n.next;while(n!==s)}t.action=null}function zp(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Pp(t,n){return n}function Bp(t,n){if(be){var a=We.formState;if(a!==null){t:{var s=se;if(be){if(je){e:{for(var c=je,f=si;c.nodeType!==8;){if(!f){c=null;break e}if(c=li(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){je=li(c.nextSibling),s=c.data==="F!";break t}}_a(s)}s=!1}s&&(n=a[0])}}return a=Ln(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pp,lastRenderedState:n},a.queue=s,a=n0.bind(null,se,s),s.dispatch=a,s=wu(!1),f=Pu.bind(null,se,!1,s.queue),s=Ln(),c={state:n,dispatch:null,action:t,pending:null},s.queue=c,a=P_.bind(null,se,c,f,a),c.dispatch=a,s.memoizedState=t,[n,a,!1]}function Fp(t){var n=en();return Ip(n,Fe,t)}function Ip(t,n,a){if(n=Ru(t,n,Pp)[0],t=xl(ki)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=eo(n)}catch(x){throw x===Gr?sl:x}else s=n;n=en();var c=n.queue,f=c.dispatch;return a!==n.memoizedState&&(se.flags|=2048,qr(9,{destroy:void 0},B_.bind(null,c,a),null)),[s,f,t]}function B_(t,n){t.action=n}function Hp(t){var n=en(),a=Fe;if(a!==null)return Ip(n,a,t);en(),n=n.memoizedState,a=en();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function qr(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=se.updateQueue,n===null&&(n=pl(),se.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function Gp(){return en().memoizedState}function gl(t,n,a,s){var c=Ln();se.flags|=t,c.memoizedState=qr(1|n,{destroy:void 0},a,s===void 0?null:s)}function _l(t,n,a,s){var c=en();s=s===void 0?null:s;var f=c.memoizedState.inst;Fe!==null&&s!==null&&yu(s,Fe.memoizedState.deps)?c.memoizedState=qr(n,f,a,s):(se.flags|=t,c.memoizedState=qr(1|n,f,a,s))}function Vp(t,n){gl(8390656,8,t,n)}function Uu(t,n){_l(2048,8,t,n)}function F_(t){se.flags|=4;var n=se.updateQueue;if(n===null)n=pl(),se.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function kp(t){var n=en().memoizedState;return F_({ref:n,nextImpl:t}),function(){if((Le&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Xp(t,n){return _l(4,2,t,n)}function Wp(t,n){return _l(4,4,t,n)}function qp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Yp(t,n,a){a=a!=null?a.concat([t]):null,_l(4,4,qp.bind(null,n,t),a)}function Lu(){}function jp(t,n){var a=en();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&yu(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function Zp(t,n){var a=en();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&yu(n,s[1]))return s[0];if(s=t(),ur){Yt(!0);try{t()}finally{Yt(!1)}}return a.memoizedState=[s,n],s}function Nu(t,n,a){return a===void 0||(Vi&1073741824)!==0&&(_e&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=K0(),se.lanes|=t,Ra|=t,a)}function Kp(t,n,a,s){return Wn(a,n)?a:kr.current!==null?(t=Nu(t,a,s),Wn(t,n)||(ln=!0),t):(Vi&42)===0||(Vi&1073741824)!==0&&(_e&261930)===0?(ln=!0,t.memoizedState=a):(t=K0(),se.lanes|=t,Ra|=t,n)}function Qp(t,n,a,s,c){var f=j.p;j.p=f!==0&&8>f?f:8;var x=z.T,E={};z.T=E,Pu(t,!1,n,a);try{var O=c(),Q=z.S;if(Q!==null&&Q(E,O),O!==null&&typeof O=="object"&&typeof O.then=="function"){var ut=N_(O,s);no(t,n,ut,Qn(t))}else no(t,n,s,Qn(t))}catch(pt){no(t,n,{then:function(){},status:"rejected",reason:pt},Qn())}finally{j.p=f,x!==null&&E.types!==null&&(x.types=E.types),z.T=x}}function I_(){}function Ou(t,n,a,s){if(t.tag!==5)throw Error(r(476));var c=Jp(t).queue;Qp(t,c,n,Y,a===null?I_:function(){return $p(t),a(s)})}function Jp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:Y,baseState:Y,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:Y},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ki,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function $p(t){var n=Jp(t);n.next===null&&(n=t.alternate.memoizedState),no(t,n.next.queue,{},Qn())}function zu(){return Tn(So)}function t0(){return en().memoizedState}function e0(){return en().memoizedState}function H_(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Qn();t=ya(a);var s=ba(n,t,a);s!==null&&(Hn(s,n,a),Qs(s,n,a)),n={cache:uu()},t.payload=n;return}n=n.return}}function G_(t,n,a){var s=Qn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},vl(t)?i0(n,a):(a=$c(t,n,a,s),a!==null&&(Hn(a,t,s),a0(a,n,s)))}function n0(t,n,a){var s=Qn();no(t,n,a,s)}function no(t,n,a,s){var c={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(vl(t))i0(n,c);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,E=f(x,a);if(c.hasEagerState=!0,c.eagerState=E,Wn(E,x))return $o(t,n,c,0),We===null&&Jo(),!1}catch{}finally{}if(a=$c(t,n,c,s),a!==null)return Hn(a,t,s),a0(a,n,s),!0}return!1}function Pu(t,n,a,s){if(s={lane:2,revertLane:mf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},vl(t)){if(n)throw Error(r(479))}else n=$c(t,a,s,2),n!==null&&Hn(n,t,2)}function vl(t){var n=t.alternate;return t===se||n!==null&&n===se}function i0(t,n){Xr=dl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function a0(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Us(t,a)}}var io={readContext:Tn,use:ml,useCallback:Qe,useContext:Qe,useEffect:Qe,useImperativeHandle:Qe,useLayoutEffect:Qe,useInsertionEffect:Qe,useMemo:Qe,useReducer:Qe,useRef:Qe,useState:Qe,useDebugValue:Qe,useDeferredValue:Qe,useTransition:Qe,useSyncExternalStore:Qe,useId:Qe,useHostTransitionStatus:Qe,useFormState:Qe,useActionState:Qe,useOptimistic:Qe,useMemoCache:Qe,useCacheRefresh:Qe};io.useEffectEvent=Qe;var r0={readContext:Tn,use:ml,useCallback:function(t,n){return Ln().memoizedState=[t,n===void 0?null:n],t},useContext:Tn,useEffect:Vp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,gl(4194308,4,qp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return gl(4194308,4,t,n)},useInsertionEffect:function(t,n){gl(4,2,t,n)},useMemo:function(t,n){var a=Ln();n=n===void 0?null:n;var s=t();if(ur){Yt(!0);try{t()}finally{Yt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Ln();if(a!==void 0){var c=a(n);if(ur){Yt(!0);try{a(n)}finally{Yt(!1)}}}else c=n;return s.memoizedState=s.baseState=c,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:c},s.queue=t,t=t.dispatch=G_.bind(null,se,t),[s.memoizedState,t]},useRef:function(t){var n=Ln();return t={current:t},n.memoizedState=t},useState:function(t){t=wu(t);var n=t.queue,a=n0.bind(null,se,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Lu,useDeferredValue:function(t,n){var a=Ln();return Nu(a,t,n)},useTransition:function(){var t=wu(!1);return t=Qp.bind(null,se,t.queue,!0,!1),Ln().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=se,c=Ln();if(be){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),We===null)throw Error(r(349));(_e&127)!==0||Ap(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Vp(Cp.bind(null,s,f,t),[t]),s.flags|=2048,qr(9,{destroy:void 0},Rp.bind(null,s,f,a,n),null),a},useId:function(){var t=Ln(),n=We.identifierPrefix;if(be){var a=Ai,s=Ti;a=(s&~(1<<32-Vt(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=hl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=O_++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:zu,useFormState:Bp,useActionState:Bp,useOptimistic:function(t){var n=Ln();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Pu.bind(null,se,!0,a),a.dispatch=n,[t,n]},useMemoCache:Au,useCacheRefresh:function(){return Ln().memoizedState=H_.bind(null,se)},useEffectEvent:function(t){var n=Ln(),a={impl:t};return n.memoizedState=a,function(){if((Le&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Bu={readContext:Tn,use:ml,useCallback:jp,useContext:Tn,useEffect:Uu,useImperativeHandle:Yp,useInsertionEffect:Xp,useLayoutEffect:Wp,useMemo:Zp,useReducer:xl,useRef:Gp,useState:function(){return xl(ki)},useDebugValue:Lu,useDeferredValue:function(t,n){var a=en();return Kp(a,Fe.memoizedState,t,n)},useTransition:function(){var t=xl(ki)[0],n=en().memoizedState;return[typeof t=="boolean"?t:eo(t),n]},useSyncExternalStore:Tp,useId:t0,useHostTransitionStatus:zu,useFormState:Fp,useActionState:Fp,useOptimistic:function(t,n){var a=en();return Up(a,Fe,t,n)},useMemoCache:Au,useCacheRefresh:e0};Bu.useEffectEvent=kp;var s0={readContext:Tn,use:ml,useCallback:jp,useContext:Tn,useEffect:Uu,useImperativeHandle:Yp,useInsertionEffect:Xp,useLayoutEffect:Wp,useMemo:Zp,useReducer:Cu,useRef:Gp,useState:function(){return Cu(ki)},useDebugValue:Lu,useDeferredValue:function(t,n){var a=en();return Fe===null?Nu(a,t,n):Kp(a,Fe.memoizedState,t,n)},useTransition:function(){var t=Cu(ki)[0],n=en().memoizedState;return[typeof t=="boolean"?t:eo(t),n]},useSyncExternalStore:Tp,useId:t0,useHostTransitionStatus:zu,useFormState:Hp,useActionState:Hp,useOptimistic:function(t,n){var a=en();return Fe!==null?Up(a,Fe,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Au,useCacheRefresh:e0};s0.useEffectEvent=kp;function Fu(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:g({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Iu={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Qn(),c=ya(s);c.payload=n,a!=null&&(c.callback=a),n=ba(t,c,s),n!==null&&(Hn(n,t,s),Qs(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Qn(),c=ya(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=ba(t,c,s),n!==null&&(Hn(n,t,s),Qs(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Qn(),s=ya(a);s.tag=2,n!=null&&(s.callback=n),n=ba(t,s,a),n!==null&&(Hn(n,t,a),Qs(n,t,a))}};function o0(t,n,a,s,c,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,x):n.prototype&&n.prototype.isPureReactComponent?!ks(a,s)||!ks(c,f):!0}function l0(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&Iu.enqueueReplaceState(n,n.state,null)}function fr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=g({},a));for(var c in t)a[c]===void 0&&(a[c]=t[c])}return a}function c0(t){Qo(t)}function u0(t){console.error(t)}function f0(t){Qo(t)}function Sl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function d0(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function Hu(t,n,a){return a=ya(a),a.tag=3,a.payload={element:null},a.callback=function(){Sl(t,n)},a}function h0(t){return t=ya(t),t.tag=3,t}function p0(t,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;t.payload=function(){return c(f)},t.callback=function(){d0(n,a,s)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){d0(n,a,s),typeof c!="function"&&(Ca===null?Ca=new Set([this]):Ca.add(this));var E=s.stack;this.componentDidCatch(s.value,{componentStack:E!==null?E:""})})}function V_(t,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Fr(n,a,c,!0),a=Yn.current,a!==null){switch(a.tag){case 31:case 13:return oi===null?Ll():a.alternate===null&&Je===0&&(Je=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===ol?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),df(t,s,c)),!1;case 22:return a.flags|=65536,s===ol?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),df(t,s,c)),!1}throw Error(r(435,a.tag))}return df(t,s,c),Ll(),!1}if(be)return n=Yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==ru&&(t=Error(r(422),{cause:s}),qs(ii(t,a)))):(s!==ru&&(n=Error(r(423),{cause:s}),qs(ii(n,a))),t=t.current.alternate,t.flags|=65536,c&=-c,t.lanes|=c,s=ii(s,a),c=Hu(t.stateNode,s,c),xu(t,c),Je!==4&&(Je=2)),!1;var f=Error(r(520),{cause:s});if(f=ii(f,a),fo===null?fo=[f]:fo.push(f),Je!==4&&(Je=2),n===null)return!0;s=ii(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=c&-c,a.lanes|=t,t=Hu(a.stateNode,s,t),xu(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ca===null||!Ca.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=h0(c),p0(c,t,a,s),xu(a,c),!1}a=a.return}while(a!==null);return!1}var Gu=Error(r(461)),ln=!1;function An(t,n,a,s){n.child=t===null?_p(n,null,a,s):cr(n,t.child,a,s)}function m0(t,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var x={};for(var E in s)E!=="ref"&&(x[E]=s[E])}else x=s;return rr(n),s=bu(t,n,a,x,f,c),E=Mu(),t!==null&&!ln?(Eu(t,n,c),Xi(t,n,c)):(be&&E&&iu(n),n.flags|=1,An(t,n,s,c),n.child)}function x0(t,n,a,s,c){if(t===null){var f=a.type;return typeof f=="function"&&!tu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,g0(t,n,f,s,c)):(t=el(a.type,null,s,n,n.mode,c),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Zu(t,c)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:ks,a(x,s)&&t.ref===n.ref)return Xi(t,n,c)}return n.flags|=1,t=Fi(f,s),t.ref=n.ref,t.return=n,n.child=t}function g0(t,n,a,s,c){if(t!==null){var f=t.memoizedProps;if(ks(f,s)&&t.ref===n.ref)if(ln=!1,n.pendingProps=s=f,Zu(t,c))(t.flags&131072)!==0&&(ln=!0);else return n.lanes=t.lanes,Xi(t,n,c)}return Vu(t,n,a,s,c)}function _0(t,n,a,s){var c=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,c=0;s!==null;)c=c|s.lanes|s.childLanes,s=s.sibling;s=c&~f}else s=0,n.child=null;return v0(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&rl(n,f!==null?f.cachePool:null),f!==null?yp(n,f):_u(),bp(n);else return s=n.lanes=536870912,v0(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(rl(n,f.cachePool),yp(n,f),Ea(),n.memoizedState=null):(t!==null&&rl(n,null),_u(),Ea());return An(t,n,c,a),n.child}function ao(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function v0(t,n,a,s,c){var f=du();return f=f===null?null:{parent:sn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&rl(n,null),_u(),bp(n),t!==null&&Fr(t,n,s,!0),n.childLanes=c,null}function yl(t,n){return n=Ml({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function S0(t,n,a){return cr(n,t.child,null,a),t=yl(n,n.pendingProps),t.flags|=2,jn(n),n.memoizedState=null,t}function k_(t,n,a){var s=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(be){if(s.mode==="hidden")return t=yl(n,s),n.lanes=536870912,ao(null,t);if(Su(n),(t=je)?(t=Lm(t,si),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:xa!==null?{id:Ti,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},a=ip(t),a.return=n,n.child=a,En=n,je=null)):t=null,t===null)throw _a(n);return n.lanes=536870912,null}return yl(n,s)}var f=t.memoizedState;if(f!==null){var x=f.dehydrated;if(Su(n),c)if(n.flags&256)n.flags&=-257,n=S0(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(ln||Fr(t,n,a,!1),c=(a&t.childLanes)!==0,ln||c){if(s=We,s!==null&&(x=Ls(s,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,er(t,x),Hn(s,t,x),Gu;Ll(),n=S0(t,n,a)}else t=f.treeContext,je=li(x.nextSibling),En=n,be=!0,ga=null,si=!1,t!==null&&sp(n,t),n=yl(n,s),n.flags|=4096;return n}return t=Fi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function bl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Vu(t,n,a,s,c){return rr(n),a=bu(t,n,a,s,void 0,c),s=Mu(),t!==null&&!ln?(Eu(t,n,c),Xi(t,n,c)):(be&&s&&iu(n),n.flags|=1,An(t,n,a,c),n.child)}function y0(t,n,a,s,c,f){return rr(n),n.updateQueue=null,a=Ep(n,s,a,c),Mp(t),s=Mu(),t!==null&&!ln?(Eu(t,n,f),Xi(t,n,f)):(be&&s&&iu(n),n.flags|=1,An(t,n,a,f),n.child)}function b0(t,n,a,s,c){if(rr(n),n.stateNode===null){var f=Or,x=a.contextType;typeof x=="object"&&x!==null&&(f=Tn(x)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Iu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},pu(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Tn(x):Or,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Fu(n,a,x,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Iu.enqueueReplaceState(f,f.state,null),$s(n,s,f,c),Js(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var E=n.memoizedProps,O=fr(a,E);f.props=O;var Q=f.context,ut=a.contextType;x=Or,typeof ut=="object"&&ut!==null&&(x=Tn(ut));var pt=a.getDerivedStateFromProps;ut=typeof pt=="function"||typeof f.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(E||Q!==x)&&l0(n,f,s,x),Sa=!1;var $=n.memoizedState;f.state=$,$s(n,s,f,c),Js(),Q=n.memoizedState,E||$!==Q||Sa?(typeof pt=="function"&&(Fu(n,a,pt,s),Q=n.memoizedState),(O=Sa||o0(n,a,O,s,$,Q,x))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=Q),f.props=s,f.state=Q,f.context=x,s=O):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,mu(t,n),x=n.memoizedProps,ut=fr(a,x),f.props=ut,pt=n.pendingProps,$=f.context,Q=a.contextType,O=Or,typeof Q=="object"&&Q!==null&&(O=Tn(Q)),E=a.getDerivedStateFromProps,(Q=typeof E=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==pt||$!==O)&&l0(n,f,s,O),Sa=!1,$=n.memoizedState,f.state=$,$s(n,s,f,c),Js();var rt=n.memoizedState;x!==pt||$!==rt||Sa||t!==null&&t.dependencies!==null&&il(t.dependencies)?(typeof E=="function"&&(Fu(n,a,E,s),rt=n.memoizedState),(ut=Sa||o0(n,a,ut,s,$,rt,O)||t!==null&&t.dependencies!==null&&il(t.dependencies))?(Q||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,rt,O),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,rt,O)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=rt),f.props=s,f.state=rt,f.context=O,s=ut):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&$===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&$===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,bl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=cr(n,t.child,null,c),n.child=cr(n,null,a,c)):An(t,n,a,c),n.memoizedState=f.state,t=n.child):t=Xi(t,n,c),t}function M0(t,n,a,s){return ir(),n.flags|=256,An(t,n,a,s),n.child}var ku={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Xu(t){return{baseLanes:t,cachePool:dp()}}function Wu(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=Kn),t}function E0(t,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(tn.current&2)!==0),x&&(c=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(be){if(c?Ma(n):Ea(),(t=je)?(t=Lm(t,si),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:xa!==null?{id:Ti,overflow:Ai}:null,retryLane:536870912,hydrationErrors:null},a=ip(t),a.return=n,n.child=a,En=n,je=null)):t=null,t===null)throw _a(n);return Cf(t)?n.lanes=32:n.lanes=536870912,null}var E=s.children;return s=s.fallback,c?(Ea(),c=n.mode,E=Ml({mode:"hidden",children:E},c),s=nr(s,c,a,null),E.return=n,s.return=n,E.sibling=s,n.child=E,s=n.child,s.memoizedState=Xu(a),s.childLanes=Wu(t,x,a),n.memoizedState=ku,ao(null,s)):(Ma(n),qu(n,E))}var O=t.memoizedState;if(O!==null&&(E=O.dehydrated,E!==null)){if(f)n.flags&256?(Ma(n),n.flags&=-257,n=Yu(t,n,a)):n.memoizedState!==null?(Ea(),n.child=t.child,n.flags|=128,n=null):(Ea(),E=s.fallback,c=n.mode,s=Ml({mode:"visible",children:s.children},c),E=nr(E,c,a,null),E.flags|=2,s.return=n,E.return=n,s.sibling=E,n.child=s,cr(n,t.child,null,a),s=n.child,s.memoizedState=Xu(a),s.childLanes=Wu(t,x,a),n.memoizedState=ku,n=ao(null,s));else if(Ma(n),Cf(E)){if(x=E.nextSibling&&E.nextSibling.dataset,x)var Q=x.dgst;x=Q,s=Error(r(419)),s.stack="",s.digest=x,qs({value:s,source:null,stack:null}),n=Yu(t,n,a)}else if(ln||Fr(t,n,a,!1),x=(a&t.childLanes)!==0,ln||x){if(x=We,x!==null&&(s=Ls(x,a),s!==0&&s!==O.retryLane))throw O.retryLane=s,er(t,s),Hn(x,t,s),Gu;Rf(E)||Ll(),n=Yu(t,n,a)}else Rf(E)?(n.flags|=192,n.child=t.child,n=null):(t=O.treeContext,je=li(E.nextSibling),En=n,be=!0,ga=null,si=!1,t!==null&&sp(n,t),n=qu(n,s.children),n.flags|=4096);return n}return c?(Ea(),E=s.fallback,c=n.mode,O=t.child,Q=O.sibling,s=Fi(O,{mode:"hidden",children:s.children}),s.subtreeFlags=O.subtreeFlags&65011712,Q!==null?E=Fi(Q,E):(E=nr(E,c,a,null),E.flags|=2),E.return=n,s.return=n,s.sibling=E,n.child=s,ao(null,s),s=n.child,E=t.child.memoizedState,E===null?E=Xu(a):(c=E.cachePool,c!==null?(O=sn._currentValue,c=c.parent!==O?{parent:O,pool:O}:c):c=dp(),E={baseLanes:E.baseLanes|a,cachePool:c}),s.memoizedState=E,s.childLanes=Wu(t,x,a),n.memoizedState=ku,ao(t.child,s)):(Ma(n),a=t.child,t=a.sibling,a=Fi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function qu(t,n){return n=Ml({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Ml(t,n){return t=qn(22,t,null,n),t.lanes=0,t}function Yu(t,n,a){return cr(n,t.child,null,a),t=qu(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function T0(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),lu(t.return,n,a)}function ju(t,n,a,s,c,f){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=s,x.tail=a,x.tailMode=c,x.treeForkCount=f)}function A0(t,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;s=s.children;var x=tn.current,E=(x&2)!==0;if(E?(x=x&1|2,n.flags|=128):x&=1,yt(tn,x),An(t,n,s,a),s=be?Ws:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&T0(t,a,n);else if(t.tag===19)T0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)t=a.alternate,t!==null&&fl(t)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),ju(n,!1,c,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(t=c.alternate,t!==null&&fl(t)===null){n.child=c;break}t=c.sibling,c.sibling=a,a=c,c=t}ju(n,!0,a,null,f,s);break;case"together":ju(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Xi(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ra|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Fr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=Fi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Fi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Zu(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&il(t)))}function X_(t,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),va(n,sn,t.memoizedState.cache),ir();break;case 27:case 5:Xt(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:va(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Su(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(Ma(n),n.flags|=128,null):(a&n.child.childLanes)!==0?E0(t,n,a):(Ma(n),t=Xi(t,n,a),t!==null?t.sibling:null);Ma(n);break;case 19:var c=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Fr(t,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return A0(t,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),yt(tn,tn.current),s)break;return null;case 22:return n.lanes=0,_0(t,n,a,n.pendingProps);case 24:va(n,sn,t.memoizedState.cache)}return Xi(t,n,a)}function R0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)ln=!0;else{if(!Zu(t,a)&&(n.flags&128)===0)return ln=!1,X_(t,n,a);ln=(t.flags&131072)!==0}else ln=!1,be&&(n.flags&1048576)!==0&&rp(n,Ws,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=or(n.elementType),n.type=t,typeof t=="function")tu(t)?(s=fr(t,s),n.tag=1,n=b0(null,n,t,s,a)):(n.tag=0,n=Vu(null,n,t,s,a));else{if(t!=null){var c=t.$$typeof;if(c===P){n.tag=11,n=m0(null,n,t,s,a);break t}else if(c===F){n.tag=14,n=x0(null,n,t,s,a);break t}}throw n=mt(t)||t,Error(r(306,n,""))}}return n;case 0:return Vu(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=fr(s,n.pendingProps),b0(t,n,s,c,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;c=f.element,mu(t,n),$s(n,s,null,a);var x=n.memoizedState;if(s=x.cache,va(n,sn,s),s!==f.cache&&cu(n,[sn],a,!0),Js(),s=x.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=M0(t,n,s,a);break t}else if(s!==c){c=ii(Error(r(424)),n),qs(c),n=M0(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(je=li(t.firstChild),En=n,be=!0,ga=null,si=!0,a=_p(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(ir(),s===c){n=Xi(t,n,a);break t}An(t,n,s,a)}n=n.child}return n;case 26:return bl(t,n),t===null?(a=Fm(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(a=n.type,t=n.pendingProps,s=Il(et.current).createElement(a),s[rn]=n,s[fn]=t,Rn(s,a,t),J(s),n.stateNode=s):n.memoizedState=Fm(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Xt(n),t===null&&be&&(s=n.stateNode=zm(n.type,n.pendingProps,et.current),En=n,si=!0,c=je,La(n.type)?(wf=c,je=li(s.firstChild)):je=c),An(t,n,n.pendingProps.children,a),bl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&be&&((c=s=je)&&(s=Sv(s,n.type,n.pendingProps,si),s!==null?(n.stateNode=s,En=n,je=li(s.firstChild),si=!1,c=!0):c=!1),c||_a(n)),Xt(n),c=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,s=f.children,Ef(c,f)?s=null:x!==null&&Ef(c,x)&&(n.flags|=32),n.memoizedState!==null&&(c=bu(t,n,z_,null,null,a),So._currentValue=c),bl(t,n),An(t,n,s,a),n.child;case 6:return t===null&&be&&((t=a=je)&&(a=yv(a,n.pendingProps,si),a!==null?(n.stateNode=a,En=n,je=null,t=!0):t=!1),t||_a(n)),null;case 13:return E0(t,n,a);case 4:return wt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=cr(n,null,s,a):An(t,n,s,a),n.child;case 11:return m0(t,n,n.type,n.pendingProps,a);case 7:return An(t,n,n.pendingProps,a),n.child;case 8:return An(t,n,n.pendingProps.children,a),n.child;case 12:return An(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,va(n,n.type,s.value),An(t,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,rr(n),c=Tn(c),s=s(c),n.flags|=1,An(t,n,s,a),n.child;case 14:return x0(t,n,n.type,n.pendingProps,a);case 15:return g0(t,n,n.type,n.pendingProps,a);case 19:return A0(t,n,a);case 31:return k_(t,n,a);case 22:return _0(t,n,a,n.pendingProps);case 24:return rr(n),s=Tn(sn),t===null?(c=du(),c===null&&(c=We,f=uu(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},pu(n),va(n,sn,c)):((t.lanes&a)!==0&&(mu(t,n),$s(n,null,null,a),Js()),c=t.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),va(n,sn,s)):(s=f.cache,va(n,sn,s),s!==c.cache&&cu(n,[sn],a,!0))),An(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Wi(t){t.flags|=4}function Ku(t,n,a,s,c){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(c&335544128)===c)if(t.stateNode.complete)t.flags|=8192;else if(tm())t.flags|=8192;else throw lr=ol,hu}else t.flags&=-16777217}function C0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!km(n))if(tm())t.flags|=8192;else throw lr=ol,hu}function El(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Be():536870912,t.lanes|=n,Kr|=n)}function ro(t,n){if(!be)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ze(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&65011712,s|=c.flags&65011712,c.return=t,c=c.sibling;else for(c=t.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=t,c=c.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function W_(t,n,a){var s=n.pendingProps;switch(au(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ze(n),null;case 1:return Ze(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Gi(sn),Ht(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(Br(n)?Wi(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,su())),Ze(n),null;case 26:var c=n.type,f=n.memoizedState;return t===null?(Wi(n),f!==null?(Ze(n),C0(n,f)):(Ze(n),Ku(n,c,null,s,a))):f?f!==t.memoizedState?(Wi(n),Ze(n),C0(n,f)):(Ze(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Wi(n),Ze(n),Ku(n,c,t,s,a)),null;case 27:if(le(n),a=et.current,c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Wi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}t=Tt.current,Br(n)?op(n):(t=zm(c,s,a),n.stateNode=t,Wi(n))}return Ze(n),null;case 5:if(le(n),c=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Wi(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ze(n),null}if(f=Tt.current,Br(n))op(n);else{var x=Il(et.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?x.createElement("select",{is:s.is}):x.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?x.createElement(c,{is:s.is}):x.createElement(c)}}f[rn]=n,f[fn]=s;t:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break t;for(;x.sibling===null;){if(x.return===null||x.return===n)break t;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;t:switch(Rn(f,c,s),c){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Wi(n)}}return Ze(n),Ku(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Wi(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=et.current,Br(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,c=En,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}t[rn]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||Em(t.nodeValue,a)),t||_a(n,!0)}else t=Il(t).createTextNode(s),t[rn]=n,n.stateNode=t}return Ze(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=Br(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[rn]=n}else ir(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),t=!1}else a=su(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(jn(n),n):(jn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ze(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(c=Br(n),s!==null&&s.dehydrated!==null){if(t===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[rn]=n}else ir(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ze(n),c=!1}else c=su(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(jn(n),n):(jn(n),null)}return jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),El(n,n.updateQueue),Ze(n),null);case 4:return Ht(),t===null&&vf(n.stateNode.containerInfo),Ze(n),null;case 10:return Gi(n.type),Ze(n),null;case 19:if(at(tn),s=n.memoizedState,s===null)return Ze(n),null;if(c=(n.flags&128)!==0,f=s.rendering,f===null)if(c)ro(s,!1);else{if(Je!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=fl(t),f!==null){for(n.flags|=128,ro(s,!1),t=f.updateQueue,n.updateQueue=t,El(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)np(a,t),a=a.sibling;return yt(tn,tn.current&1|2),be&&Ii(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&M()>wl&&(n.flags|=128,c=!0,ro(s,!1),n.lanes=4194304)}else{if(!c)if(t=fl(f),t!==null){if(n.flags|=128,c=!0,t=t.updateQueue,n.updateQueue=t,El(n,t),ro(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!be)return Ze(n),null}else 2*M()-s.renderingStartTime>wl&&a!==536870912&&(n.flags|=128,c=!0,ro(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=M(),t.sibling=null,a=tn.current,yt(tn,c?a&1|2:a&1),be&&Ii(n,s.treeForkCount),t):(Ze(n),null);case 22:case 23:return jn(n),vu(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ze(n),n.subtreeFlags&6&&(n.flags|=8192)):Ze(n),a=n.updateQueue,a!==null&&El(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&at(sr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Gi(sn),Ze(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function q_(t,n){switch(au(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return Gi(sn),Ht(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return le(n),null;case 31:if(n.memoizedState!==null){if(jn(n),n.alternate===null)throw Error(r(340));ir()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(jn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));ir()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return at(tn),null;case 4:return Ht(),null;case 10:return Gi(n.type),null;case 22:case 23:return jn(n),vu(),t!==null&&at(sr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return Gi(sn),null;case 25:return null;default:return null}}function w0(t,n){switch(au(n),n.tag){case 3:Gi(sn),Ht();break;case 26:case 27:case 5:le(n);break;case 4:Ht();break;case 31:n.memoizedState!==null&&jn(n);break;case 13:jn(n);break;case 19:at(tn);break;case 10:Gi(n.type);break;case 22:case 23:jn(n),vu(),t!==null&&at(sr);break;case 24:Gi(sn)}}function so(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&t)===t){s=void 0;var f=a.create,x=a.inst;s=f(),x.destroy=s}a=a.next}while(a!==c)}}catch(E){Pe(n,n.return,E)}}function Ta(t,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&t)===t){var x=s.inst,E=x.destroy;if(E!==void 0){x.destroy=void 0,c=n;var O=a,Q=E;try{Q()}catch(ut){Pe(c,O,ut)}}}s=s.next}while(s!==f)}}catch(ut){Pe(n,n.return,ut)}}function D0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Sp(n,a)}catch(s){Pe(t,t.return,s)}}}function U0(t,n,a){a.props=fr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Pe(t,n,s)}}function oo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(c){Pe(t,n,c)}}function Ri(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){Pe(t,n,c)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Pe(t,n,c)}else a.current=null}function L0(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){Pe(t,t.return,c)}}function Qu(t,n,a){try{var s=t.stateNode;pv(s,t.type,a,n),s[fn]=n}catch(c){Pe(t,t.return,c)}}function N0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&La(t.type)||t.tag===4}function Ju(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||N0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&La(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $u(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Pi));else if(s!==4&&(s===27&&La(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for($u(t,n,a),t=t.sibling;t!==null;)$u(t,n,a),t=t.sibling}function Tl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&La(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(Tl(t,n,a),t=t.sibling;t!==null;)Tl(t,n,a),t=t.sibling}function O0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Rn(n,s,a),n[rn]=t,n[fn]=a}catch(f){Pe(t,t.return,f)}}var qi=!1,cn=!1,tf=!1,z0=typeof WeakSet=="function"?WeakSet:Set,yn=null;function Y_(t,n){if(t=t.containerInfo,bf=ql,t=Yh(t),Yc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var x=0,E=-1,O=-1,Q=0,ut=0,pt=t,$=null;e:for(;;){for(var rt;pt!==a||c!==0&&pt.nodeType!==3||(E=x+c),pt!==f||s!==0&&pt.nodeType!==3||(O=x+s),pt.nodeType===3&&(x+=pt.nodeValue.length),(rt=pt.firstChild)!==null;)$=pt,pt=rt;for(;;){if(pt===t)break e;if($===a&&++Q===c&&(E=x),$===f&&++ut===s&&(O=x),(rt=pt.nextSibling)!==null)break;pt=$,$=pt.parentNode}pt=rt}a=E===-1||O===-1?null:{start:E,end:O}}else a=null}a=a||{start:0,end:0}}else a=null;for(Mf={focusedElem:t,selectionRange:a},ql=!1,yn=n;yn!==null;)if(n=yn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,yn=t;else for(;yn!==null;){switch(n=yn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)c=t[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var It=fr(a.type,c);t=s.getSnapshotBeforeUpdate(It,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(te){Pe(a,a.return,te)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Af(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Af(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,yn=t;break}yn=n.return}}function P0(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:ji(t,a),s&4&&so(5,a);break;case 1:if(ji(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){Pe(a,a.return,x)}else{var c=fr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(c,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){Pe(a,a.return,x)}}s&64&&D0(a),s&512&&oo(a,a.return);break;case 3:if(ji(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Sp(t,n)}catch(x){Pe(a,a.return,x)}}break;case 27:n===null&&s&4&&O0(a);case 26:case 5:ji(t,a),n===null&&s&4&&L0(a),s&512&&oo(a,a.return);break;case 12:ji(t,a);break;case 31:ji(t,a),s&4&&I0(t,a);break;case 13:ji(t,a),s&4&&H0(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=nv.bind(null,a),bv(t,a))));break;case 22:if(s=a.memoizedState!==null||qi,!s){n=n!==null&&n.memoizedState!==null||cn,c=qi;var f=cn;qi=s,(cn=n)&&!f?Zi(t,a,(a.subtreeFlags&8772)!==0):ji(t,a),qi=c,cn=f}break;case 30:break;default:ji(t,a)}}function B0(t){var n=t.alternate;n!==null&&(t.alternate=null,B0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&zs(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ke=null,Pn=!1;function Yi(t,n,a){for(a=a.child;a!==null;)F0(t,n,a),a=a.sibling}function F0(t,n,a){if(Mt&&typeof Mt.onCommitFiberUnmount=="function")try{Mt.onCommitFiberUnmount(St,a)}catch{}switch(a.tag){case 26:cn||Ri(a,n),Yi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Ri(a,n);var s=Ke,c=Pn;La(a.type)&&(Ke=a.stateNode,Pn=!1),Yi(t,n,a),go(a.stateNode),Ke=s,Pn=c;break;case 5:cn||Ri(a,n);case 6:if(s=Ke,c=Pn,Ke=null,Yi(t,n,a),Ke=s,Pn=c,Ke!==null)if(Pn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(a.stateNode)}catch(f){Pe(a,n,f)}else try{Ke.removeChild(a.stateNode)}catch(f){Pe(a,n,f)}break;case 18:Ke!==null&&(Pn?(t=Ke,Dm(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),as(t)):Dm(Ke,a.stateNode));break;case 4:s=Ke,c=Pn,Ke=a.stateNode.containerInfo,Pn=!0,Yi(t,n,a),Ke=s,Pn=c;break;case 0:case 11:case 14:case 15:Ta(2,a,n),cn||Ta(4,a,n),Yi(t,n,a);break;case 1:cn||(Ri(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&U0(a,n,s)),Yi(t,n,a);break;case 21:Yi(t,n,a);break;case 22:cn=(s=cn)||a.memoizedState!==null,Yi(t,n,a),cn=s;break;default:Yi(t,n,a)}}function I0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{as(t)}catch(a){Pe(n,n.return,a)}}}function H0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{as(t)}catch(a){Pe(n,n.return,a)}}function j_(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new z0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new z0),n;default:throw Error(r(435,t.tag))}}function Al(t,n){var a=j_(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var c=iv.bind(null,t,s);s.then(c,c)}})}function Bn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=t,x=n,E=x;t:for(;E!==null;){switch(E.tag){case 27:if(La(E.type)){Ke=E.stateNode,Pn=!1;break t}break;case 5:Ke=E.stateNode,Pn=!1;break t;case 3:case 4:Ke=E.stateNode.containerInfo,Pn=!0;break t}E=E.return}if(Ke===null)throw Error(r(160));F0(f,x,c),Ke=null,Pn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)G0(n,t),n=n.sibling}var mi=null;function G0(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Bn(n,t),Fn(t),s&4&&(Ta(3,t,t.return),so(3,t),Ta(5,t,t.return));break;case 1:Bn(n,t),Fn(t),s&512&&(cn||a===null||Ri(a,a.return)),s&64&&qi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=mi;if(Bn(n,t),Fn(t),s&512&&(cn||a===null||Ri(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Qa]||f[rn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),Rn(f,s,a),f[rn]=t,J(f),s=f;break t;case"link":var x=Gm("link","href",c).get(s+(a.href||""));if(x){for(var E=0;E<x.length;E++)if(f=x[E],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(E,1);break e}}f=c.createElement(s),Rn(f,s,a),c.head.appendChild(f);break;case"meta":if(x=Gm("meta","content",c).get(s+(a.content||""))){for(E=0;E<x.length;E++)if(f=x[E],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(E,1);break e}}f=c.createElement(s),Rn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[rn]=t,J(f),s=f}t.stateNode=s}else Vm(c,t.type,t.stateNode);else t.stateNode=Hm(c,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?Vm(c,t.type,t.stateNode):Hm(c,s,t.memoizedProps)):s===null&&t.stateNode!==null&&Qu(t,t.memoizedProps,a.memoizedProps)}break;case 27:Bn(n,t),Fn(t),s&512&&(cn||a===null||Ri(a,a.return)),a!==null&&s&4&&Qu(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Bn(n,t),Fn(t),s&512&&(cn||a===null||Ri(a,a.return)),t.flags&32){c=t.stateNode;try{Ei(c,"")}catch(It){Pe(t,t.return,It)}}s&4&&t.stateNode!=null&&(c=t.memoizedProps,Qu(t,c,a!==null?a.memoizedProps:c)),s&1024&&(tf=!0);break;case 6:if(Bn(n,t),Fn(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(It){Pe(t,t.return,It)}}break;case 3:if(Vl=null,c=mi,mi=Hl(n.containerInfo),Bn(n,t),mi=c,Fn(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{as(n.containerInfo)}catch(It){Pe(t,t.return,It)}tf&&(tf=!1,V0(t));break;case 4:s=mi,mi=Hl(t.stateNode.containerInfo),Bn(n,t),Fn(t),mi=s;break;case 12:Bn(n,t),Fn(t);break;case 31:Bn(n,t),Fn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Al(t,s)));break;case 13:Bn(n,t),Fn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Cl=M()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Al(t,s)));break;case 22:c=t.memoizedState!==null;var O=a!==null&&a.memoizedState!==null,Q=qi,ut=cn;if(qi=Q||c,cn=ut||O,Bn(n,t),cn=ut,qi=Q,Fn(t),s&8192)t:for(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||O||qi||cn||dr(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){O=a=n;try{if(f=O.stateNode,c)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{E=O.stateNode;var pt=O.memoizedProps.style,$=pt!=null&&pt.hasOwnProperty("display")?pt.display:null;E.style.display=$==null||typeof $=="boolean"?"":(""+$).trim()}}catch(It){Pe(O,O.return,It)}}}else if(n.tag===6){if(a===null){O=n;try{O.stateNode.nodeValue=c?"":O.memoizedProps}catch(It){Pe(O,O.return,It)}}}else if(n.tag===18){if(a===null){O=n;try{var rt=O.stateNode;c?Um(rt,!0):Um(O.stateNode,!1)}catch(It){Pe(O,O.return,It)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Al(t,a))));break;case 19:Bn(n,t),Fn(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,Al(t,s)));break;case 30:break;case 21:break;default:Bn(n,t),Fn(t)}}function Fn(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if(N0(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var c=a.stateNode,f=Ju(t);Tl(t,f,c);break;case 5:var x=a.stateNode;a.flags&32&&(Ei(x,""),a.flags&=-33);var E=Ju(t);Tl(t,E,x);break;case 3:case 4:var O=a.stateNode.containerInfo,Q=Ju(t);$u(t,Q,O);break;default:throw Error(r(161))}}catch(ut){Pe(t,t.return,ut)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function V0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;V0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ji(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)P0(t,n.alternate,n),n=n.sibling}function dr(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ta(4,n,n.return),dr(n);break;case 1:Ri(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&U0(n,n.return,a),dr(n);break;case 27:go(n.stateNode);case 26:case 5:Ri(n,n.return),dr(n);break;case 22:n.memoizedState===null&&dr(n);break;case 30:dr(n);break;default:dr(n)}t=t.sibling}}function Zi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:Zi(c,f,a),so(4,f);break;case 1:if(Zi(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(Q){Pe(s,s.return,Q)}if(s=f,c=s.updateQueue,c!==null){var E=s.stateNode;try{var O=c.shared.hiddenCallbacks;if(O!==null)for(c.shared.hiddenCallbacks=null,c=0;c<O.length;c++)vp(O[c],E)}catch(Q){Pe(s,s.return,Q)}}a&&x&64&&D0(f),oo(f,f.return);break;case 27:O0(f);case 26:case 5:Zi(c,f,a),a&&s===null&&x&4&&L0(f),oo(f,f.return);break;case 12:Zi(c,f,a);break;case 31:Zi(c,f,a),a&&x&4&&I0(c,f);break;case 13:Zi(c,f,a),a&&x&4&&H0(c,f);break;case 22:f.memoizedState===null&&Zi(c,f,a),oo(f,f.return);break;case 30:break;default:Zi(c,f,a)}n=n.sibling}}function ef(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Ys(a))}function nf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ys(t))}function xi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)k0(t,n,a,s),n=n.sibling}function k0(t,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:xi(t,n,a,s),c&2048&&so(9,n);break;case 1:xi(t,n,a,s);break;case 3:xi(t,n,a,s),c&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Ys(t)));break;case 12:if(c&2048){xi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,E=f.onPostCommit;typeof E=="function"&&E(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(O){Pe(n,n.return,O)}}else xi(t,n,a,s);break;case 31:xi(t,n,a,s);break;case 13:xi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?xi(t,n,a,s):lo(t,n):f._visibility&2?xi(t,n,a,s):(f._visibility|=2,Yr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),c&2048&&ef(x,n);break;case 24:xi(t,n,a,s),c&2048&&nf(n.alternate,n);break;default:xi(t,n,a,s)}}function Yr(t,n,a,s,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,x=n,E=a,O=s,Q=x.flags;switch(x.tag){case 0:case 11:case 15:Yr(f,x,E,O,c),so(8,x);break;case 23:break;case 22:var ut=x.stateNode;x.memoizedState!==null?ut._visibility&2?Yr(f,x,E,O,c):lo(f,x):(ut._visibility|=2,Yr(f,x,E,O,c)),c&&Q&2048&&ef(x.alternate,x);break;case 24:Yr(f,x,E,O,c),c&&Q&2048&&nf(x.alternate,x);break;default:Yr(f,x,E,O,c)}n=n.sibling}}function lo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,c=s.flags;switch(s.tag){case 22:lo(a,s),c&2048&&ef(s.alternate,s);break;case 24:lo(a,s),c&2048&&nf(s.alternate,s);break;default:lo(a,s)}n=n.sibling}}var co=8192;function jr(t,n,a){if(t.subtreeFlags&co)for(t=t.child;t!==null;)X0(t,n,a),t=t.sibling}function X0(t,n,a){switch(t.tag){case 26:jr(t,n,a),t.flags&co&&t.memoizedState!==null&&Ov(a,mi,t.memoizedState,t.memoizedProps);break;case 5:jr(t,n,a);break;case 3:case 4:var s=mi;mi=Hl(t.stateNode.containerInfo),jr(t,n,a),mi=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=co,co=16777216,jr(t,n,a),co=s):jr(t,n,a));break;default:jr(t,n,a)}}function W0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function uo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];yn=s,Y0(s,t)}W0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)q0(t),t=t.sibling}function q0(t){switch(t.tag){case 0:case 11:case 15:uo(t),t.flags&2048&&Ta(9,t,t.return);break;case 3:uo(t);break;case 12:uo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Rl(t)):uo(t);break;default:uo(t)}}function Rl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];yn=s,Y0(s,t)}W0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ta(8,n,n.return),Rl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Rl(n));break;default:Rl(n)}t=t.sibling}}function Y0(t,n){for(;yn!==null;){var a=yn;switch(a.tag){case 0:case 11:case 15:Ta(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Ys(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,yn=s;else t:for(a=t;yn!==null;){s=yn;var c=s.sibling,f=s.return;if(B0(s),s===a){yn=null;break t}if(c!==null){c.return=f,yn=c;break t}yn=f}}}var Z_={getCacheForType:function(t){var n=Tn(sn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Tn(sn).controller.signal}},K_=typeof WeakMap=="function"?WeakMap:Map,Le=0,We=null,xe=null,_e=0,ze=0,Zn=null,Aa=!1,Zr=!1,af=!1,Ki=0,Je=0,Ra=0,hr=0,rf=0,Kn=0,Kr=0,fo=null,In=null,sf=!1,Cl=0,j0=0,wl=1/0,Dl=null,Ca=null,hn=0,wa=null,Qr=null,Qi=0,of=0,lf=null,Z0=null,ho=0,cf=null;function Qn(){return(Le&2)!==0&&_e!==0?_e&-_e:z.T!==null?mf():Ns()}function K0(){if(Kn===0)if((_e&536870912)===0||be){var t=Rt;Rt<<=1,(Rt&3932160)===0&&(Rt=262144),Kn=t}else Kn=536870912;return t=Yn.current,t!==null&&(t.flags|=32),Kn}function Hn(t,n,a){(t===We&&(ze===2||ze===9)||t.cancelPendingCommit!==null)&&(Jr(t,0),Da(t,_e,Kn,!1)),Cn(t,a),((Le&2)===0||t!==We)&&(t===We&&((Le&2)===0&&(hr|=a),Je===4&&Da(t,_e,Kn,!1)),Ci(t))}function Q0(t,n,a){if((Le&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Bt(t,n),c=s?$_(t,n):ff(t,n,!0),f=s;do{if(c===0){Zr&&!s&&Da(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Q_(a)){c=ff(t,n,!1),f=!1;continue}if(c===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;t:{var E=t;c=fo;var O=E.current.memoizedState.isDehydrated;if(O&&(Jr(E,x).flags|=256),x=ff(E,x,!1),x!==2){if(af&&!O){E.errorRecoveryDisabledLanes|=f,hr|=f,c=4;break t}f=In,In=c,f!==null&&(In===null?In=f:In.push.apply(In,f))}c=x}if(f=!1,c!==2)continue}}if(c===1){Jr(t,0),Da(t,n,0,!0);break}t:{switch(s=t,f=c,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:Da(s,n,Kn,!Aa);break t;case 2:In=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(c=Cl+300-M(),10<c)){if(Da(s,n,Kn,!Aa),xt(s,0,!0)!==0)break t;Qi=n,s.timeoutHandle=Cm(J0.bind(null,s,a,In,Dl,sf,n,Kn,hr,Kr,Aa,f,"Throttled",-0,0),c);break t}J0(s,a,In,Dl,sf,n,Kn,hr,Kr,Aa,f,null,-0,0)}}break}while(!0);Ci(t)}function J0(t,n,a,s,c,f,x,E,O,Q,ut,pt,$,rt){if(t.timeoutHandle=-1,pt=n.subtreeFlags,pt&8192||(pt&16785408)===16785408){pt={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Pi},X0(n,f,pt);var It=(f&62914560)===f?Cl-M():(f&4194048)===f?j0-M():0;if(It=zv(pt,It),It!==null){Qi=f,t.cancelPendingCommit=It(sm.bind(null,t,n,f,a,s,c,x,E,O,ut,pt,null,$,rt)),Da(t,f,x,!Q);return}}sm(t,n,f,a,s,c,x,E,O)}function Q_(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Wn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Da(t,n,a,s){n&=~rf,n&=~hr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var c=n;0<c;){var f=31-Vt(c),x=1<<f;s[f]=-1,c&=~x}a!==0&&Vo(t,a,n)}function Ul(){return(Le&6)===0?(po(0),!1):!0}function uf(){if(xe!==null){if(ze===0)var t=xe.return;else t=xe,Hi=ar=null,Tu(t),Vr=null,Zs=0,t=xe;for(;t!==null;)w0(t.alternate,t),t=t.return;xe=null}}function Jr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,gv(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Qi=0,uf(),We=t,xe=a=Fi(t.current,null),_e=n,ze=0,Zn=null,Aa=!1,Zr=Bt(t,n),af=!1,Kr=Kn=rf=hr=Ra=Je=0,In=fo=null,sf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var c=31-Vt(s),f=1<<c;n|=t[c],s&=~f}return Ki=n,Jo(),a}function $0(t,n){se=null,z.H=io,n===Gr||n===sl?(n=mp(),ze=3):n===hu?(n=mp(),ze=4):ze=n===Gu?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Zn=n,xe===null&&(Je=1,Sl(t,ii(n,t.current)))}function tm(){var t=Yn.current;return t===null?!0:(_e&4194048)===_e?oi===null:(_e&62914560)===_e||(_e&536870912)!==0?t===oi:!1}function em(){var t=z.H;return z.H=io,t===null?io:t}function nm(){var t=z.A;return z.A=Z_,t}function Ll(){Je=4,Aa||(_e&4194048)!==_e&&Yn.current!==null||(Zr=!0),(Ra&134217727)===0&&(hr&134217727)===0||We===null||Da(We,_e,Kn,!1)}function ff(t,n,a){var s=Le;Le|=2;var c=em(),f=nm();(We!==t||_e!==n)&&(Dl=null,Jr(t,n)),n=!1;var x=Je;t:do try{if(ze!==0&&xe!==null){var E=xe,O=Zn;switch(ze){case 8:uf(),x=6;break t;case 3:case 2:case 9:case 6:Yn.current===null&&(n=!0);var Q=ze;if(ze=0,Zn=null,$r(t,E,O,Q),a&&Zr){x=0;break t}break;default:Q=ze,ze=0,Zn=null,$r(t,E,O,Q)}}J_(),x=Je;break}catch(ut){$0(t,ut)}while(!0);return n&&t.shellSuspendCounter++,Hi=ar=null,Le=s,z.H=c,z.A=f,xe===null&&(We=null,_e=0,Jo()),x}function J_(){for(;xe!==null;)im(xe)}function $_(t,n){var a=Le;Le|=2;var s=em(),c=nm();We!==t||_e!==n?(Dl=null,wl=M()+500,Jr(t,n)):Zr=Bt(t,n);t:do try{if(ze!==0&&xe!==null){n=xe;var f=Zn;e:switch(ze){case 1:ze=0,Zn=null,$r(t,n,f,1);break;case 2:case 9:if(hp(f)){ze=0,Zn=null,am(n);break}n=function(){ze!==2&&ze!==9||We!==t||(ze=7),Ci(t)},f.then(n,n);break t;case 3:ze=7;break t;case 4:ze=5;break t;case 7:hp(f)?(ze=0,Zn=null,am(n)):(ze=0,Zn=null,$r(t,n,f,7));break;case 5:var x=null;switch(xe.tag){case 26:x=xe.memoizedState;case 5:case 27:var E=xe;if(x?km(x):E.stateNode.complete){ze=0,Zn=null;var O=E.sibling;if(O!==null)xe=O;else{var Q=E.return;Q!==null?(xe=Q,Nl(Q)):xe=null}break e}}ze=0,Zn=null,$r(t,n,f,5);break;case 6:ze=0,Zn=null,$r(t,n,f,6);break;case 8:uf(),Je=6;break t;default:throw Error(r(462))}}tv();break}catch(ut){$0(t,ut)}while(!0);return Hi=ar=null,z.H=s,z.A=c,Le=a,xe!==null?0:(We=null,_e=0,Jo(),Je)}function tv(){for(;xe!==null&&!ae();)im(xe)}function im(t){var n=R0(t.alternate,t,Ki);t.memoizedProps=t.pendingProps,n===null?Nl(t):xe=n}function am(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=y0(a,n,n.pendingProps,n.type,void 0,_e);break;case 11:n=y0(a,n,n.pendingProps,n.type.render,n.ref,_e);break;case 5:Tu(n);default:w0(a,n),n=xe=np(n,Ki),n=R0(a,n,Ki)}t.memoizedProps=t.pendingProps,n===null?Nl(t):xe=n}function $r(t,n,a,s){Hi=ar=null,Tu(n),Vr=null,Zs=0;var c=n.return;try{if(V_(t,c,n,a,_e)){Je=1,Sl(t,ii(a,t.current)),xe=null;return}}catch(f){if(c!==null)throw xe=c,f;Je=1,Sl(t,ii(a,t.current)),xe=null;return}n.flags&32768?(be||s===1?t=!0:Zr||(_e&536870912)!==0?t=!1:(Aa=t=!0,(s===2||s===9||s===3||s===6)&&(s=Yn.current,s!==null&&s.tag===13&&(s.flags|=16384))),rm(n,t)):Nl(n)}function Nl(t){var n=t;do{if((n.flags&32768)!==0){rm(n,Aa);return}t=n.return;var a=W_(n.alternate,n,Ki);if(a!==null){xe=a;return}if(n=n.sibling,n!==null){xe=n;return}xe=n=t}while(n!==null);Je===0&&(Je=5)}function rm(t,n){do{var a=q_(t.alternate,t);if(a!==null){a.flags&=32767,xe=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){xe=t;return}xe=t=a}while(t!==null);Je=6,xe=null}function sm(t,n,a,s,c,f,x,E,O){t.cancelPendingCommit=null;do Ol();while(hn!==0);if((Le&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Jc,kn(t,a,f,x,E,O),t===We&&(xe=We=null,_e=0),Qr=n,wa=t,Qi=a,of=f,lf=c,Z0=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,av(st,function(){return fm(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=z.T,z.T=null,c=j.p,j.p=2,x=Le,Le|=4;try{Y_(t,n,a)}finally{Le=x,j.p=c,z.T=s}}hn=1,om(),lm(),cm()}}function om(){if(hn===1){hn=0;var t=wa,n=Qr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var s=j.p;j.p=2;var c=Le;Le|=4;try{G0(n,t);var f=Mf,x=Yh(t.containerInfo),E=f.focusedElem,O=f.selectionRange;if(x!==E&&E&&E.ownerDocument&&qh(E.ownerDocument.documentElement,E)){if(O!==null&&Yc(E)){var Q=O.start,ut=O.end;if(ut===void 0&&(ut=Q),"selectionStart"in E)E.selectionStart=Q,E.selectionEnd=Math.min(ut,E.value.length);else{var pt=E.ownerDocument||document,$=pt&&pt.defaultView||window;if($.getSelection){var rt=$.getSelection(),It=E.textContent.length,te=Math.min(O.start,It),He=O.end===void 0?te:Math.min(O.end,It);!rt.extend&&te>He&&(x=He,He=te,te=x);var W=Wh(E,te),G=Wh(E,He);if(W&&G&&(rt.rangeCount!==1||rt.anchorNode!==W.node||rt.anchorOffset!==W.offset||rt.focusNode!==G.node||rt.focusOffset!==G.offset)){var Z=pt.createRange();Z.setStart(W.node,W.offset),rt.removeAllRanges(),te>He?(rt.addRange(Z),rt.extend(G.node,G.offset)):(Z.setEnd(G.node,G.offset),rt.addRange(Z))}}}}for(pt=[],rt=E;rt=rt.parentNode;)rt.nodeType===1&&pt.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<pt.length;E++){var dt=pt[E];dt.element.scrollLeft=dt.left,dt.element.scrollTop=dt.top}}ql=!!bf,Mf=bf=null}finally{Le=c,j.p=s,z.T=a}}t.current=n,hn=2}}function lm(){if(hn===2){hn=0;var t=wa,n=Qr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var s=j.p;j.p=2;var c=Le;Le|=4;try{P0(t,n.alternate,n)}finally{Le=c,j.p=s,z.T=a}}hn=3}}function cm(){if(hn===4||hn===3){hn=0,D();var t=wa,n=Qr,a=Qi,s=Z0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?hn=5:(hn=0,Qr=wa=null,um(t,t.pendingLanes));var c=t.pendingLanes;if(c===0&&(Ca=null),Ka(a),n=n.stateNode,Mt&&typeof Mt.onCommitFiberRoot=="function")try{Mt.onCommitFiberRoot(St,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=z.T,c=j.p,j.p=2,z.T=null;try{for(var f=t.onRecoverableError,x=0;x<s.length;x++){var E=s[x];f(E.value,{componentStack:E.stack})}}finally{z.T=n,j.p=c}}(Qi&3)!==0&&Ol(),Ci(t),c=t.pendingLanes,(a&261930)!==0&&(c&42)!==0?t===cf?ho++:(ho=0,cf=t):ho=0,po(0)}}function um(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Ys(n)))}function Ol(){return om(),lm(),cm(),fm()}function fm(){if(hn!==5)return!1;var t=wa,n=of;of=0;var a=Ka(Qi),s=z.T,c=j.p;try{j.p=32>a?32:a,z.T=null,a=lf,lf=null;var f=wa,x=Qi;if(hn=0,Qr=wa=null,Qi=0,(Le&6)!==0)throw Error(r(331));var E=Le;if(Le|=4,q0(f.current),k0(f,f.current,x,a),Le=E,po(0,!1),Mt&&typeof Mt.onPostCommitFiberRoot=="function")try{Mt.onPostCommitFiberRoot(St,f)}catch{}return!0}finally{j.p=c,z.T=s,um(t,n)}}function dm(t,n,a){n=ii(a,n),n=Hu(t.stateNode,n,2),t=ba(t,n,2),t!==null&&(Cn(t,2),Ci(t))}function Pe(t,n,a){if(t.tag===3)dm(t,t,a);else for(;n!==null;){if(n.tag===3){dm(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ca===null||!Ca.has(s))){t=ii(a,t),a=h0(2),s=ba(n,a,2),s!==null&&(p0(a,s,n,t),Cn(s,2),Ci(s));break}}n=n.return}}function df(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new K_;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(af=!0,c.add(a),t=ev.bind(null,t,n,a),n.then(t,t))}function ev(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,We===t&&(_e&a)===a&&(Je===4||Je===3&&(_e&62914560)===_e&&300>M()-Cl?(Le&2)===0&&Jr(t,0):rf|=a,Kr===_e&&(Kr=0)),Ci(t)}function hm(t,n){n===0&&(n=Be()),t=er(t,n),t!==null&&(Cn(t,n),Ci(t))}function nv(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),hm(t,a)}function iv(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,c=t.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),hm(t,a)}function av(t,n){return ke(t,n)}var zl=null,ts=null,hf=!1,Pl=!1,pf=!1,Ua=0;function Ci(t){t!==ts&&t.next===null&&(ts===null?zl=ts=t:ts=ts.next=t),Pl=!0,hf||(hf=!0,sv())}function po(t,n){if(!pf&&Pl){pf=!0;do for(var a=!1,s=zl;s!==null;){if(t!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var x=s.suspendedLanes,E=s.pingedLanes;f=(1<<31-Vt(42|t)+1)-1,f&=c&~(x&~E),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,gm(s,f))}else f=_e,f=xt(s,s===We?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||Bt(s,f)||(a=!0,gm(s,f));s=s.next}while(a);pf=!1}}function rv(){pm()}function pm(){Pl=hf=!1;var t=0;Ua!==0&&xv()&&(t=Ua);for(var n=M(),a=null,s=zl;s!==null;){var c=s.next,f=mm(s,n);f===0?(s.next=null,a===null?zl=c:a.next=c,c===null&&(ts=a)):(a=s,(t!==0||(f&3)!==0)&&(Pl=!0)),s=c}hn!==0&&hn!==5||po(t),Ua!==0&&(Ua=0)}function mm(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,c=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-Vt(f),E=1<<x,O=c[x];O===-1?((E&a)===0||(E&s)!==0)&&(c[x]=ie(E,n)):O<=n&&(t.expiredLanes|=E),f&=~E}if(n=We,a=_e,a=xt(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(ze===2||ze===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&jt(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Bt(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&jt(s),Ka(a)){case 2:case 8:a=vt;break;case 32:a=st;break;case 268435456:a=Lt;break;default:a=st}return s=xm.bind(null,t),a=ke(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&jt(s),t.callbackPriority=2,t.callbackNode=null,2}function xm(t,n){if(hn!==0&&hn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Ol()&&t.callbackNode!==a)return null;var s=_e;return s=xt(t,t===We?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(Q0(t,s,n),mm(t,M()),t.callbackNode!=null&&t.callbackNode===a?xm.bind(null,t):null)}function gm(t,n){if(Ol())return null;Q0(t,n,!0)}function sv(){_v(function(){(Le&6)!==0?ke(ht,rv):pm()})}function mf(){if(Ua===0){var t=Ir;t===0&&(t=Dt,Dt<<=1,(Dt&261888)===0&&(Dt=256)),Ua=t}return Ua}function _m(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Xo(""+t)}function vm(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function ov(t,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=_m((c[fn]||null).action),x=s.submitter;x&&(n=(n=x[fn]||null)?_m(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var E=new jo("action","action",null,s,c);t.push({event:E,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(Ua!==0){var O=x?vm(c,x):new FormData(c);Ou(a,{pending:!0,data:O,method:c.method,action:f},null,O)}}else typeof f=="function"&&(E.preventDefault(),O=x?vm(c,x):new FormData(c),Ou(a,{pending:!0,data:O,method:c.method,action:f},f,O))},currentTarget:c}]})}}for(var xf=0;xf<Qc.length;xf++){var gf=Qc[xf],lv=gf.toLowerCase(),cv=gf[0].toUpperCase()+gf.slice(1);pi(lv,"on"+cv)}pi(Kh,"onAnimationEnd"),pi(Qh,"onAnimationIteration"),pi(Jh,"onAnimationStart"),pi("dblclick","onDoubleClick"),pi("focusin","onFocus"),pi("focusout","onBlur"),pi(T_,"onTransitionRun"),pi(A_,"onTransitionStart"),pi(R_,"onTransitionCancel"),pi($h,"onTransitionEnd"),Pt("onMouseEnter",["mouseout","mouseover"]),Pt("onMouseLeave",["mouseout","mouseover"]),Pt("onPointerEnter",["pointerout","pointerover"]),Pt("onPointerLeave",["pointerout","pointerover"]),Ut("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ut("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ut("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ut("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ut("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ut("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var mo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uv=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(mo));function Sm(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var x=s.length-1;0<=x;x--){var E=s[x],O=E.instance,Q=E.currentTarget;if(E=E.listener,O!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=Q;try{f(c)}catch(ut){Qo(ut)}c.currentTarget=null,f=O}else for(x=0;x<s.length;x++){if(E=s[x],O=E.instance,Q=E.currentTarget,E=E.listener,O!==f&&c.isPropagationStopped())break t;f=E,c.currentTarget=Q;try{f(c)}catch(ut){Qo(ut)}c.currentTarget=null,f=O}}}}function ge(t,n){var a=n[Rr];a===void 0&&(a=n[Rr]=new Set);var s=t+"__bubble";a.has(s)||(ym(n,t,2,!1),a.add(s))}function _f(t,n,a){var s=0;n&&(s|=4),ym(a,t,s,n)}var Bl="_reactListening"+Math.random().toString(36).slice(2);function vf(t){if(!t[Bl]){t[Bl]=!0,q.forEach(function(a){a!=="selectionchange"&&(uv.has(a)||_f(a,!1,t),_f(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Bl]||(n[Bl]=!0,_f("selectionchange",!1,n))}}function ym(t,n,a,s){switch(Km(n)){case 2:var c=Fv;break;case 8:c=Iv;break;default:c=Of}a=c.bind(null,n,a,t),c=void 0,!Fc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?t.addEventListener(n,a,{capture:!0,passive:c}):t.addEventListener(n,a,!0):c!==void 0?t.addEventListener(n,a,{passive:c}):t.addEventListener(n,a,!1)}function Sf(t,n,a,s,c){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var x=s.tag;if(x===3||x===4){var E=s.stateNode.containerInfo;if(E===c)break;if(x===4)for(x=s.return;x!==null;){var O=x.tag;if((O===3||O===4)&&x.stateNode.containerInfo===c)return;x=x.return}for(;E!==null;){if(x=ha(E),x===null)return;if(O=x.tag,O===5||O===6||O===26||O===27){s=f=x;continue t}E=E.parentNode}}s=s.return}Ah(function(){var Q=f,ut=Pc(a),pt=[];t:{var $=tp.get(t);if($!==void 0){var rt=jo,It=t;switch(t){case"keypress":if(qo(a)===0)break t;case"keydown":case"keyup":rt=i_;break;case"focusin":It="focus",rt=Vc;break;case"focusout":It="blur",rt=Vc;break;case"beforeblur":case"afterblur":rt=Vc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=wh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=Wg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=s_;break;case Kh:case Qh:case Jh:rt=jg;break;case $h:rt=l_;break;case"scroll":case"scrollend":rt=kg;break;case"wheel":rt=u_;break;case"copy":case"cut":case"paste":rt=Kg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=Uh;break;case"toggle":case"beforetoggle":rt=d_}var te=(n&4)!==0,He=!te&&(t==="scroll"||t==="scrollend"),W=te?$!==null?$+"Capture":null:$;te=[];for(var G=Q,Z;G!==null;){var dt=G;if(Z=dt.stateNode,dt=dt.tag,dt!==5&&dt!==26&&dt!==27||Z===null||W===null||(dt=Ps(G,W),dt!=null&&te.push(xo(G,dt,Z))),He)break;G=G.return}0<te.length&&($=new rt($,It,null,a,ut),pt.push({event:$,listeners:te}))}}if((n&7)===0){t:{if($=t==="mouseover"||t==="pointerover",rt=t==="mouseout"||t==="pointerout",$&&a!==zc&&(It=a.relatedTarget||a.fromElement)&&(ha(It)||It[Ni]))break t;if((rt||$)&&($=ut.window===ut?ut:($=ut.ownerDocument)?$.defaultView||$.parentWindow:window,rt?(It=a.relatedTarget||a.toElement,rt=Q,It=It?ha(It):null,It!==null&&(He=u(It),te=It.tag,It!==He||te!==5&&te!==27&&te!==6)&&(It=null)):(rt=null,It=Q),rt!==It)){if(te=wh,dt="onMouseLeave",W="onMouseEnter",G="mouse",(t==="pointerout"||t==="pointerover")&&(te=Uh,dt="onPointerLeave",W="onPointerEnter",G="pointer"),He=rt==null?$:X(rt),Z=It==null?$:X(It),$=new te(dt,G+"leave",rt,a,ut),$.target=He,$.relatedTarget=Z,dt=null,ha(ut)===Q&&(te=new te(W,G+"enter",It,a,ut),te.target=Z,te.relatedTarget=He,dt=te),He=dt,rt&&It)e:{for(te=fv,W=rt,G=It,Z=0,dt=W;dt;dt=te(dt))Z++;dt=0;for(var Kt=G;Kt;Kt=te(Kt))dt++;for(;0<Z-dt;)W=te(W),Z--;for(;0<dt-Z;)G=te(G),dt--;for(;Z--;){if(W===G||G!==null&&W===G.alternate){te=W;break e}W=te(W),G=te(G)}te=null}else te=null;rt!==null&&bm(pt,$,rt,te,!1),It!==null&&He!==null&&bm(pt,He,It,te,!0)}}t:{if($=Q?X(Q):window,rt=$.nodeName&&$.nodeName.toLowerCase(),rt==="select"||rt==="input"&&$.type==="file")var Ce=Ih;else if(Bh($))if(Hh)Ce=b_;else{Ce=S_;var kt=v_}else rt=$.nodeName,!rt||rt.toLowerCase()!=="input"||$.type!=="checkbox"&&$.type!=="radio"?Q&&Oc(Q.elementType)&&(Ce=Ih):Ce=y_;if(Ce&&(Ce=Ce(t,Q))){Fh(pt,Ce,a,ut);break t}kt&&kt(t,$,Q),t==="focusout"&&Q&&$.type==="number"&&Q.memoizedProps.value!=null&&vn($,"number",$.value)}switch(kt=Q?X(Q):window,t){case"focusin":(Bh(kt)||kt.contentEditable==="true")&&(Ur=kt,jc=Q,Xs=null);break;case"focusout":Xs=jc=Ur=null;break;case"mousedown":Zc=!0;break;case"contextmenu":case"mouseup":case"dragend":Zc=!1,jh(pt,a,ut);break;case"selectionchange":if(E_)break;case"keydown":case"keyup":jh(pt,a,ut)}var ue;if(Xc)t:{switch(t){case"compositionstart":var ve="onCompositionStart";break t;case"compositionend":ve="onCompositionEnd";break t;case"compositionupdate":ve="onCompositionUpdate";break t}ve=void 0}else Dr?zh(t,a)&&(ve="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ve="onCompositionStart");ve&&(Lh&&a.locale!=="ko"&&(Dr||ve!=="onCompositionStart"?ve==="onCompositionEnd"&&Dr&&(ue=Rh()):(ma=ut,Ic="value"in ma?ma.value:ma.textContent,Dr=!0)),kt=Fl(Q,ve),0<kt.length&&(ve=new Dh(ve,t,null,a,ut),pt.push({event:ve,listeners:kt}),ue?ve.data=ue:(ue=Ph(a),ue!==null&&(ve.data=ue)))),(ue=p_?m_(t,a):x_(t,a))&&(ve=Fl(Q,"onBeforeInput"),0<ve.length&&(kt=new Dh("onBeforeInput","beforeinput",null,a,ut),pt.push({event:kt,listeners:ve}),kt.data=ue)),ov(pt,t,Q,a,ut)}Sm(pt,n)})}function xo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Fl(t,n){for(var a=n+"Capture",s=[];t!==null;){var c=t,f=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Ps(t,a),c!=null&&s.unshift(xo(t,c,f)),c=Ps(t,n),c!=null&&s.push(xo(t,c,f))),t.tag===3)return s;t=t.return}return[]}function fv(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function bm(t,n,a,s,c){for(var f=n._reactName,x=[];a!==null&&a!==s;){var E=a,O=E.alternate,Q=E.stateNode;if(E=E.tag,O!==null&&O===s)break;E!==5&&E!==26&&E!==27||Q===null||(O=Q,c?(Q=Ps(a,f),Q!=null&&x.unshift(xo(a,Q,O))):c||(Q=Ps(a,f),Q!=null&&x.push(xo(a,Q,O)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var dv=/\r\n?/g,hv=/\u0000|\uFFFD/g;function Mm(t){return(typeof t=="string"?t:""+t).replace(dv,`
`).replace(hv,"")}function Em(t,n){return n=Mm(n),Mm(t)===n}function Ie(t,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Ei(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Ei(t,""+s);break;case"className":Ee(t,"class",s);break;case"tabIndex":Ee(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ee(t,a,s);break;case"style":Eh(t,s,f);break;case"data":if(n!=="object"){Ee(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Xo(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ie(t,n,"name",c.name,c,null),Ie(t,n,"formEncType",c.formEncType,c,null),Ie(t,n,"formMethod",c.formMethod,c,null),Ie(t,n,"formTarget",c.formTarget,c,null)):(Ie(t,n,"encType",c.encType,c,null),Ie(t,n,"method",c.method,c,null),Ie(t,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Xo(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Pi);break;case"onScroll":s!=null&&ge("scroll",t);break;case"onScrollEnd":s!=null&&ge("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Xo(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":ge("beforetoggle",t),ge("toggle",t),ce(t,"popover",s);break;case"xlinkActuate":Re(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Re(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Re(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Re(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Re(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Re(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Re(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Re(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Re(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":ce(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Gg.get(a)||a,ce(t,a,s))}}function yf(t,n,a,s,c,f){switch(a){case"style":Eh(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Ei(t,s):(typeof s=="number"||typeof s=="bigint")&&Ei(t,""+s);break;case"onScroll":s!=null&&ge("scroll",t);break;case"onScrollEnd":s!=null&&ge("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Pi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!At.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=t[fn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,c);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):ce(t,a,s)}}}function Rn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ge("error",t),ge("load",t);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(t,n,f,x,a,null)}}c&&Ie(t,n,"srcSet",a.srcSet,a,null),s&&Ie(t,n,"src",a.src,a,null);return;case"input":ge("invalid",t);var E=f=x=c=null,O=null,Q=null;for(s in a)if(a.hasOwnProperty(s)){var ut=a[s];if(ut!=null)switch(s){case"name":c=ut;break;case"type":x=ut;break;case"checked":O=ut;break;case"defaultChecked":Q=ut;break;case"value":f=ut;break;case"defaultValue":E=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:Ie(t,n,s,ut,a,null)}}Ye(t,f,E,O,Q,x,c,!1);return;case"select":ge("invalid",t),s=x=f=null;for(c in a)if(a.hasOwnProperty(c)&&(E=a[c],E!=null))switch(c){case"value":f=E;break;case"defaultValue":x=E;break;case"multiple":s=E;default:Ie(t,n,c,E,a,null)}n=f,a=x,t.multiple=!!s,n!=null?dn(t,!!s,n,!1):a!=null&&dn(t,!!s,a,!0);return;case"textarea":ge("invalid",t),f=c=s=null;for(x in a)if(a.hasOwnProperty(x)&&(E=a[x],E!=null))switch(x){case"value":s=E;break;case"defaultValue":c=E;break;case"children":f=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(r(91));break;default:Ie(t,n,x,E,a,null)}Mn(t,s,c,f);return;case"option":for(O in a)if(a.hasOwnProperty(O)&&(s=a[O],s!=null))switch(O){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ie(t,n,O,s,a,null)}return;case"dialog":ge("beforetoggle",t),ge("toggle",t),ge("cancel",t),ge("close",t);break;case"iframe":case"object":ge("load",t);break;case"video":case"audio":for(s=0;s<mo.length;s++)ge(mo[s],t);break;case"image":ge("error",t),ge("load",t);break;case"details":ge("toggle",t);break;case"embed":case"source":case"link":ge("error",t),ge("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(Q in a)if(a.hasOwnProperty(Q)&&(s=a[Q],s!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ie(t,n,Q,s,a,null)}return;default:if(Oc(n)){for(ut in a)a.hasOwnProperty(ut)&&(s=a[ut],s!==void 0&&yf(t,n,ut,s,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(s=a[E],s!=null&&Ie(t,n,E,s,a,null))}function pv(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,x=null,E=null,O=null,Q=null,ut=null;for(rt in a){var pt=a[rt];if(a.hasOwnProperty(rt)&&pt!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":O=pt;default:s.hasOwnProperty(rt)||Ie(t,n,rt,null,s,pt)}}for(var $ in s){var rt=s[$];if(pt=a[$],s.hasOwnProperty($)&&(rt!=null||pt!=null))switch($){case"type":f=rt;break;case"name":c=rt;break;case"checked":Q=rt;break;case"defaultChecked":ut=rt;break;case"value":x=rt;break;case"defaultValue":E=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,n));break;default:rt!==pt&&Ie(t,n,$,rt,s,pt)}}Oi(t,x,E,O,Q,ut,f,c);return;case"select":rt=x=E=$=null;for(f in a)if(O=a[f],a.hasOwnProperty(f)&&O!=null)switch(f){case"value":break;case"multiple":rt=O;default:s.hasOwnProperty(f)||Ie(t,n,f,null,s,O)}for(c in s)if(f=s[c],O=a[c],s.hasOwnProperty(c)&&(f!=null||O!=null))switch(c){case"value":$=f;break;case"defaultValue":E=f;break;case"multiple":x=f;default:f!==O&&Ie(t,n,c,f,s,O)}n=E,a=x,s=rt,$!=null?dn(t,!!a,$,!1):!!s!=!!a&&(n!=null?dn(t,!!a,n,!0):dn(t,!!a,a?[]:"",!1));return;case"textarea":rt=$=null;for(E in a)if(c=a[E],a.hasOwnProperty(E)&&c!=null&&!s.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Ie(t,n,E,null,s,c)}for(x in s)if(c=s[x],f=a[x],s.hasOwnProperty(x)&&(c!=null||f!=null))switch(x){case"value":$=c;break;case"defaultValue":rt=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ie(t,n,x,c,s,f)}Sn(t,$,rt);return;case"option":for(var It in a)if($=a[It],a.hasOwnProperty(It)&&$!=null&&!s.hasOwnProperty(It))switch(It){case"selected":t.selected=!1;break;default:Ie(t,n,It,null,s,$)}for(O in s)if($=s[O],rt=a[O],s.hasOwnProperty(O)&&$!==rt&&($!=null||rt!=null))switch(O){case"selected":t.selected=$&&typeof $!="function"&&typeof $!="symbol";break;default:Ie(t,n,O,$,s,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in a)$=a[te],a.hasOwnProperty(te)&&$!=null&&!s.hasOwnProperty(te)&&Ie(t,n,te,null,s,$);for(Q in s)if($=s[Q],rt=a[Q],s.hasOwnProperty(Q)&&$!==rt&&($!=null||rt!=null))switch(Q){case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(r(137,n));break;default:Ie(t,n,Q,$,s,rt)}return;default:if(Oc(n)){for(var He in a)$=a[He],a.hasOwnProperty(He)&&$!==void 0&&!s.hasOwnProperty(He)&&yf(t,n,He,void 0,s,$);for(ut in s)$=s[ut],rt=a[ut],!s.hasOwnProperty(ut)||$===rt||$===void 0&&rt===void 0||yf(t,n,ut,$,s,rt);return}}for(var W in a)$=a[W],a.hasOwnProperty(W)&&$!=null&&!s.hasOwnProperty(W)&&Ie(t,n,W,null,s,$);for(pt in s)$=s[pt],rt=a[pt],!s.hasOwnProperty(pt)||$===rt||$==null&&rt==null||Ie(t,n,pt,$,s,rt)}function Tm(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function mv(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var c=a[s],f=c.transferSize,x=c.initiatorType,E=c.duration;if(f&&E&&Tm(x)){for(x=0,E=c.responseEnd,s+=1;s<a.length;s++){var O=a[s],Q=O.startTime;if(Q>E)break;var ut=O.transferSize,pt=O.initiatorType;ut&&Tm(pt)&&(O=O.responseEnd,x+=ut*(O<E?1:(E-Q)/(O-Q)))}if(--s,n+=8*(f+x)/(c.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var bf=null,Mf=null;function Il(t){return t.nodeType===9?t:t.ownerDocument}function Am(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Rm(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Ef(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Tf=null;function xv(){var t=window.event;return t&&t.type==="popstate"?t===Tf?!1:(Tf=t,!0):(Tf=null,!1)}var Cm=typeof setTimeout=="function"?setTimeout:void 0,gv=typeof clearTimeout=="function"?clearTimeout:void 0,wm=typeof Promise=="function"?Promise:void 0,_v=typeof queueMicrotask=="function"?queueMicrotask:typeof wm<"u"?function(t){return wm.resolve(null).then(t).catch(vv)}:Cm;function vv(t){setTimeout(function(){throw t})}function La(t){return t==="head"}function Dm(t,n){var a=n,s=0;do{var c=a.nextSibling;if(t.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(c),as(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")go(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,go(a);for(var f=a.firstChild;f;){var x=f.nextSibling,E=f.nodeName;f[Qa]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&go(t.ownerDocument.body);a=c}while(a);as(n)}function Um(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Af(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Af(a),zs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Sv(t,n,a,s){for(;t.nodeType===1;){var c=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Qa])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==c.rel||t.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||t.getAttribute("title")!==(c.title==null?null:c.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(c.src==null?null:c.src)||t.getAttribute("type")!==(c.type==null?null:c.type)||t.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=li(t.nextSibling),t===null)break}return null}function yv(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=li(t.nextSibling),t===null))return null;return t}function Lm(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=li(t.nextSibling),t===null))return null;return t}function Rf(t){return t.data==="$?"||t.data==="$~"}function Cf(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function bv(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function li(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var wf=null;function Nm(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return li(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function Om(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function zm(t,n,a){switch(n=Il(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function go(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);zs(t)}var ci=new Map,Pm=new Set;function Hl(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Ji=j.d;j.d={f:Mv,r:Ev,D:Tv,C:Av,L:Rv,m:Cv,X:Dv,S:wv,M:Uv};function Mv(){var t=Ji.f(),n=Ul();return t||n}function Ev(t){var n=T(t);n!==null&&n.tag===5&&n.type==="form"?$p(n):Ji.r(t)}var es=typeof document>"u"?null:document;function Bm(t,n,a){var s=es;if(s&&typeof n=="string"&&n){var c=qe(n);c='link[rel="'+t+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),Pm.has(c)||(Pm.add(c),t={rel:t,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),Rn(n,"link",t),J(n),s.head.appendChild(n)))}}function Tv(t){Ji.D(t),Bm("dns-prefetch",t,null)}function Av(t,n){Ji.C(t,n),Bm("preconnect",t,n)}function Rv(t,n,a){Ji.L(t,n,a);var s=es;if(s&&t&&n){var c='link[rel="preload"][as="'+qe(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+qe(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+qe(a.imageSizes)+'"]')):c+='[href="'+qe(t)+'"]';var f=c;switch(n){case"style":f=ns(t);break;case"script":f=is(t)}ci.has(f)||(t=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ci.set(f,t),s.querySelector(c)!==null||n==="style"&&s.querySelector(_o(f))||n==="script"&&s.querySelector(vo(f))||(n=s.createElement("link"),Rn(n,"link",t),J(n),s.head.appendChild(n)))}}function Cv(t,n){Ji.m(t,n);var a=es;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+qe(s)+'"][href="'+qe(t)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=is(t)}if(!ci.has(f)&&(t=g({rel:"modulepreload",href:t},n),ci.set(f,t),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(vo(f)))return}s=a.createElement("link"),Rn(s,"link",t),J(s),a.head.appendChild(s)}}}function wv(t,n,a){Ji.S(t,n,a);var s=es;if(s&&t){var c=it(s).hoistableStyles,f=ns(t);n=n||"default";var x=c.get(f);if(!x){var E={loading:0,preload:null};if(x=s.querySelector(_o(f)))E.loading=5;else{t=g({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ci.get(f))&&Df(t,a);var O=x=s.createElement("link");J(O),Rn(O,"link",t),O._p=new Promise(function(Q,ut){O.onload=Q,O.onerror=ut}),O.addEventListener("load",function(){E.loading|=1}),O.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Gl(x,n,s)}x={type:"stylesheet",instance:x,count:1,state:E},c.set(f,x)}}}function Dv(t,n){Ji.X(t,n);var a=es;if(a&&t){var s=it(a).hoistableScripts,c=is(t),f=s.get(c);f||(f=a.querySelector(vo(c)),f||(t=g({src:t,async:!0},n),(n=ci.get(c))&&Uf(t,n),f=a.createElement("script"),J(f),Rn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Uv(t,n){Ji.M(t,n);var a=es;if(a&&t){var s=it(a).hoistableScripts,c=is(t),f=s.get(c);f||(f=a.querySelector(vo(c)),f||(t=g({src:t,async:!0,type:"module"},n),(n=ci.get(c))&&Uf(t,n),f=a.createElement("script"),J(f),Rn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function Fm(t,n,a,s){var c=(c=et.current)?Hl(c):null;if(!c)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ns(a.href),a=it(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ns(a.href);var f=it(c).hoistableStyles,x=f.get(t);if(x||(c=c.ownerDocument||c,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=c.querySelector(_o(t)))&&!f._p&&(x.instance=f,x.state.loading=5),ci.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ci.set(t,a),f||Lv(c,t,a,x.state))),n&&s===null)throw Error(r(528,""));return x}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=is(a),a=it(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function ns(t){return'href="'+qe(t)+'"'}function _o(t){return'link[rel="stylesheet"]['+t+"]"}function Im(t){return g({},t,{"data-precedence":t.precedence,precedence:null})}function Lv(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Rn(n,"link",a),J(n),t.head.appendChild(n))}function is(t){return'[src="'+qe(t)+'"]'}function vo(t){return"script[async]"+t}function Hm(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+qe(a.href)+'"]');if(s)return n.instance=s,J(s),s;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),J(s),Rn(s,"style",c),Gl(s,a.precedence,t),n.instance=s;case"stylesheet":c=ns(a.href);var f=t.querySelector(_o(c));if(f)return n.state.loading|=4,n.instance=f,J(f),f;s=Im(a),(c=ci.get(c))&&Df(s,c),f=(t.ownerDocument||t).createElement("link"),J(f);var x=f;return x._p=new Promise(function(E,O){x.onload=E,x.onerror=O}),Rn(f,"link",s),n.state.loading|=4,Gl(f,a.precedence,t),n.instance=f;case"script":return f=is(a.src),(c=t.querySelector(vo(f)))?(n.instance=c,J(c),c):(s=a,(c=ci.get(f))&&(s=g({},a),Uf(s,c)),t=t.ownerDocument||t,c=t.createElement("script"),J(c),Rn(c,"link",s),t.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Gl(s,a.precedence,t));return n.instance}function Gl(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,x=0;x<s.length;x++){var E=s[x];if(E.dataset.precedence===n)f=E;else if(f!==c)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Df(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Uf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Vl=null;function Gm(t,n,a){if(Vl===null){var s=new Map,c=Vl=new Map;c.set(a,s)}else c=Vl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),c=0;c<a.length;c++){var f=a[c];if(!(f[Qa]||f[rn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var E=s.get(x);E?E.push(f):s.set(x,[f])}}return s}function Vm(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function Nv(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function km(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function Ov(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=ns(s.href),f=n.querySelector(_o(c));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=kl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,J(f);return}f=n.ownerDocument||n,s=Im(s),(c=ci.get(c))&&Df(s,c),f=f.createElement("link"),J(f);var x=f;x._p=new Promise(function(E,O){x.onload=E,x.onerror=O}),Rn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=kl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Lf=0;function zv(t,n){return t.stylesheets&&t.count===0&&Wl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&Wl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Lf===0&&(Lf=62500*mv());var c=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Wl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Lf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(c)}}:null}function kl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Wl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Xl=null;function Wl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Xl=new Map,n.forEach(Pv,t),Xl=null,kl.call(t))}function Pv(t,n){if(!(n.state.loading&4)){var a=Xl.get(t);if(a)var s=a.get(null);else{a=new Map,Xl.set(t,a);for(var c=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var x=c[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),s=x)}s&&a.set(null,s)}c=n.instance,x=c.getAttribute("data-precedence"),f=a.get(x)||s,f===s&&a.set(null,c),a.set(x,c),this.count++,s=kl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(c,t.firstChild)),n.state.loading|=4}}var So={$$typeof:U,Provider:null,Consumer:null,_currentValue:Y,_currentValue2:Y,_threadCount:0};function Bv(t,n,a,s,c,f,x,E,O){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ae(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ae(0),this.hiddenUpdates=Ae(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=O,this.incompleteTransitions=new Map}function Xm(t,n,a,s,c,f,x,E,O,Q,ut,pt){return t=new Bv(t,n,a,x,O,Q,ut,pt,E),n=1,f===!0&&(n|=24),f=qn(3,null,null,n),t.current=f,f.stateNode=t,n=uu(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},pu(f),t}function Wm(t){return t?(t=Or,t):Or}function qm(t,n,a,s,c,f){c=Wm(c),s.context===null?s.context=c:s.pendingContext=c,s=ya(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ba(t,s,n),a!==null&&(Hn(a,t,n),Qs(a,t,n))}function Ym(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Nf(t,n){Ym(t,n),(t=t.alternate)&&Ym(t,n)}function jm(t){if(t.tag===13||t.tag===31){var n=er(t,67108864);n!==null&&Hn(n,t,67108864),Nf(t,67108864)}}function Zm(t){if(t.tag===13||t.tag===31){var n=Qn();n=hi(n);var a=er(t,n);a!==null&&Hn(a,t,n),Nf(t,n)}}var ql=!0;function Fv(t,n,a,s){var c=z.T;z.T=null;var f=j.p;try{j.p=2,Of(t,n,a,s)}finally{j.p=f,z.T=c}}function Iv(t,n,a,s){var c=z.T;z.T=null;var f=j.p;try{j.p=8,Of(t,n,a,s)}finally{j.p=f,z.T=c}}function Of(t,n,a,s){if(ql){var c=zf(s);if(c===null)Sf(t,n,s,Yl,a),Qm(t,s);else if(Gv(c,t,n,a,s))s.stopPropagation();else if(Qm(t,s),n&4&&-1<Hv.indexOf(t)){for(;c!==null;){var f=T(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=bt(f.pendingLanes);if(x!==0){var E=f;for(E.pendingLanes|=2,E.entangledLanes|=2;x;){var O=1<<31-Vt(x);E.entanglements[1]|=O,x&=~O}Ci(f),(Le&6)===0&&(wl=M()+500,po(0))}}break;case 31:case 13:E=er(f,2),E!==null&&Hn(E,f,2),Ul(),Nf(f,2)}if(f=zf(s),f===null&&Sf(t,n,s,Yl,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else Sf(t,n,s,null,a)}}function zf(t){return t=Pc(t),Pf(t)}var Yl=null;function Pf(t){if(Yl=null,t=ha(t),t!==null){var n=u(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Yl=t,null}function Km(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(K()){case ht:return 2;case vt:return 8;case st:case qt:return 32;case Lt:return 268435456;default:return 32}default:return 32}}var Bf=!1,Na=null,Oa=null,za=null,yo=new Map,bo=new Map,Pa=[],Hv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Qm(t,n){switch(t){case"focusin":case"focusout":Na=null;break;case"dragenter":case"dragleave":Oa=null;break;case"mouseover":case"mouseout":za=null;break;case"pointerover":case"pointerout":yo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":bo.delete(n.pointerId)}}function Mo(t,n,a,s,c,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=T(n),n!==null&&jm(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),t)}function Gv(t,n,a,s,c){switch(n){case"focusin":return Na=Mo(Na,t,n,a,s,c),!0;case"dragenter":return Oa=Mo(Oa,t,n,a,s,c),!0;case"mouseover":return za=Mo(za,t,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return yo.set(f,Mo(yo.get(f)||null,t,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,bo.set(f,Mo(bo.get(f)||null,t,n,a,s,c)),!0}return!1}function Jm(t){var n=ha(t.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,Os(t.priority,function(){Zm(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,Os(t.priority,function(){Zm(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function jl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=zf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);zc=s,a.target.dispatchEvent(s),zc=null}else return n=T(a),n!==null&&jm(n),t.blockedOn=a,!1;n.shift()}return!0}function $m(t,n,a){jl(t)&&a.delete(n)}function Vv(){Bf=!1,Na!==null&&jl(Na)&&(Na=null),Oa!==null&&jl(Oa)&&(Oa=null),za!==null&&jl(za)&&(za=null),yo.forEach($m),bo.forEach($m)}function Zl(t,n){t.blockedOn===n&&(t.blockedOn=null,Bf||(Bf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Vv)))}var Kl=null;function tx(t){Kl!==t&&(Kl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Kl===t&&(Kl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],c=t[n+2];if(typeof s!="function"){if(Pf(s||a)===null)continue;break}var f=T(a);f!==null&&(t.splice(n,3),n-=3,Ou(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function as(t){function n(O){return Zl(O,t)}Na!==null&&Zl(Na,t),Oa!==null&&Zl(Oa,t),za!==null&&Zl(za,t),yo.forEach(n),bo.forEach(n);for(var a=0;a<Pa.length;a++){var s=Pa[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Pa.length&&(a=Pa[0],a.blockedOn===null);)Jm(a),a.blockedOn===null&&Pa.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],x=c[fn]||null;if(typeof f=="function")x||tx(a);else if(x){var E=null;if(f&&f.hasAttribute("formAction")){if(c=f,x=f[fn]||null)E=x.formAction;else if(Pf(c)!==null)continue}else E=x.action;typeof E=="function"?a[s+1]=E:(a.splice(s,3),s-=3),tx(a)}}}function ex(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return c=x})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,c=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function Ff(t){this._internalRoot=t}Ql.prototype.render=Ff.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Qn();qm(a,s,t,n,null,null)},Ql.prototype.unmount=Ff.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;qm(t.current,2,null,t,null,null),Ul(),n[Ni]=null}};function Ql(t){this._internalRoot=t}Ql.prototype.unstable_scheduleHydration=function(t){if(t){var n=Ns();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Pa.length&&n!==0&&n<Pa[a].priority;a++);Pa.splice(a,0,t),a===0&&Jm(t)}};var nx=e.version;if(nx!=="19.2.0")throw Error(r(527,nx,"19.2.0"));j.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var kv={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Jl.isDisabled&&Jl.supportsFiber)try{St=Jl.inject(kv),Mt=Jl}catch{}}return To.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",c=c0,f=u0,x=f0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Xm(t,1,!1,null,null,a,s,null,c,f,x,ex),t[Ni]=n.current,vf(t),new Ff(n)},To.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,c="",f=c0,x=u0,E=f0,O=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(O=a.formState)),n=Xm(t,1,!0,n,a??null,s,c,O,f,x,E,ex),n.context=Wm(null),a=n.current,s=Qn(),s=hi(s),c=ya(s),c.callback=null,ba(a,c,s),a=s,n.current.lanes=a,Cn(n,a),Ci(n),t[Ni]=n.current,vf(t),new Ql(n)},To.version="19.2.0",To}var dx;function tS(){if(dx)return Gf.exports;dx=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Gf.exports=$v(),Gf.exports}var eS=tS();const nS=ug(eS);const hh="181",iS=0,hx=1,aS=2,fg=1,rS=2,ra=3,Ya=0,Vn=1,sa=2,ca=0,Ss=1,px=2,mx=3,xx=4,sS=5,yr=100,oS=101,lS=102,cS=103,uS=104,fS=200,dS=201,hS=202,pS=203,Md=204,Ed=205,mS=206,xS=207,gS=208,_S=209,vS=210,SS=211,yS=212,bS=213,MS=214,Td=0,Ad=1,Rd=2,bs=3,Cd=4,wd=5,Dd=6,Ud=7,dg=0,ES=1,TS=2,qa=0,AS=1,RS=2,CS=3,wS=4,DS=5,US=6,LS=7,hg=300,Ms=301,Es=302,Ld=303,Nd=304,Cc=306,Od=1e3,oa=1001,zd=1002,ti=1003,NS=1004,$l=1005,di=1006,Wf=1007,Er=1008,fa=1009,pg=1010,mg=1011,No=1012,ph=1013,Ar=1014,la=1015,Cs=1016,mh=1017,xh=1018,Oo=1020,xg=35902,gg=35899,_g=1021,vg=1022,bi=1023,zo=1026,Po=1027,Sg=1028,gh=1029,_h=1030,vh=1031,Sh=1033,Sc=33776,yc=33777,bc=33778,Mc=33779,Pd=35840,Bd=35841,Fd=35842,Id=35843,Hd=36196,Gd=37492,Vd=37496,kd=37808,Xd=37809,Wd=37810,qd=37811,Yd=37812,jd=37813,Zd=37814,Kd=37815,Qd=37816,Jd=37817,$d=37818,th=37819,eh=37820,nh=37821,ih=36492,ah=36494,rh=36495,sh=36283,oh=36284,lh=36285,ch=36286,OS=3200,zS=3201,PS=0,BS=1,Xa="",fi="srgb",Ts="srgb-linear",Tc="linear",Ge="srgb",rs=7680,gx=519,FS=512,IS=513,HS=514,yg=515,GS=516,VS=517,kS=518,XS=519,_x=35044,vx="300 es",Di=2e3,Ac=2001;function bg(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Rc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function WS(){const o=Rc("canvas");return o.style.display="block",o}const Sx={};function yx(...o){const e="THREE."+o.shift();console.log(e,...o)}function oe(...o){const e="THREE."+o.shift();console.warn(e,...o)}function nn(...o){const e="THREE."+o.shift();console.error(e,...o)}function Bo(...o){const e=o.join(" ");e in Sx||(Sx[e]=!0,oe(...o))}function qS(o,e,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}class ws{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let u=0,d=l.length;u<d;u++)l[u].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],qf=Math.PI/180,uh=180/Math.PI;function Fo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Dn[o&255]+Dn[o>>8&255]+Dn[o>>16&255]+Dn[o>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[i&63|128]+Dn[i>>8&255]+"-"+Dn[i>>16&255]+Dn[i>>24&255]+Dn[r&255]+Dn[r>>8&255]+Dn[r>>16&255]+Dn[r>>24&255]).toLowerCase()}function Me(o,e,i){return Math.max(e,Math.min(i,o))}function YS(o,e){return(o%e+e)%e}function Yf(o,e,i){return(1-i)*o+i*e}function Ao(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Gn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Ue{constructor(e=0,i=0){Ue.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Me(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-e.x,d=this.y-e.y;return this.x=u*r-d*l+e.x,this.y=u*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Io{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,u,d,h){let m=r[l+0],p=r[l+1],v=r[l+2],g=r[l+3],S=u[d+0],b=u[d+1],A=u[d+2],R=u[d+3];if(h<=0){e[i+0]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g;return}if(h>=1){e[i+0]=S,e[i+1]=b,e[i+2]=A,e[i+3]=R;return}if(g!==R||m!==S||p!==b||v!==A){let y=m*S+p*b+v*A+g*R;y<0&&(S=-S,b=-b,A=-A,R=-R,y=-y);let _=1-h;if(y<.9995){const B=Math.acos(y),U=Math.sin(B);_=Math.sin(_*B)/U,h=Math.sin(h*B)/U,m=m*_+S*h,p=p*_+b*h,v=v*_+A*h,g=g*_+R*h}else{m=m*_+S*h,p=p*_+b*h,v=v*_+A*h,g=g*_+R*h;const B=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=B,p*=B,v*=B,g*=B}}e[i]=m,e[i+1]=p,e[i+2]=v,e[i+3]=g}static multiplyQuaternionsFlat(e,i,r,l,u,d){const h=r[l],m=r[l+1],p=r[l+2],v=r[l+3],g=u[d],S=u[d+1],b=u[d+2],A=u[d+3];return e[i]=h*A+v*g+m*b-p*S,e[i+1]=m*A+v*S+p*g-h*b,e[i+2]=p*A+v*b+h*S-m*g,e[i+3]=v*A-h*g-m*S-p*b,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,u=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(r/2),v=h(l/2),g=h(u/2),S=m(r/2),b=m(l/2),A=m(u/2);switch(d){case"XYZ":this._x=S*v*g+p*b*A,this._y=p*b*g-S*v*A,this._z=p*v*A+S*b*g,this._w=p*v*g-S*b*A;break;case"YXZ":this._x=S*v*g+p*b*A,this._y=p*b*g-S*v*A,this._z=p*v*A-S*b*g,this._w=p*v*g+S*b*A;break;case"ZXY":this._x=S*v*g-p*b*A,this._y=p*b*g+S*v*A,this._z=p*v*A+S*b*g,this._w=p*v*g-S*b*A;break;case"ZYX":this._x=S*v*g-p*b*A,this._y=p*b*g+S*v*A,this._z=p*v*A-S*b*g,this._w=p*v*g+S*b*A;break;case"YZX":this._x=S*v*g+p*b*A,this._y=p*b*g+S*v*A,this._z=p*v*A-S*b*g,this._w=p*v*g-S*b*A;break;case"XZY":this._x=S*v*g-p*b*A,this._y=p*b*g-S*v*A,this._z=p*v*A+S*b*g,this._w=p*v*g+S*b*A;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],u=i[8],d=i[1],h=i[5],m=i[9],p=i[2],v=i[6],g=i[10],S=r+h+g;if(S>0){const b=.5/Math.sqrt(S+1);this._w=.25/b,this._x=(v-m)*b,this._y=(u-p)*b,this._z=(d-l)*b}else if(r>h&&r>g){const b=2*Math.sqrt(1+r-h-g);this._w=(v-m)/b,this._x=.25*b,this._y=(l+d)/b,this._z=(u+p)/b}else if(h>g){const b=2*Math.sqrt(1+h-r-g);this._w=(u-p)/b,this._x=(l+d)/b,this._y=.25*b,this._z=(m+v)/b}else{const b=2*Math.sqrt(1+g-r-h);this._w=(d-l)/b,this._x=(u+p)/b,this._y=(m+v)/b,this._z=.25*b}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Me(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,u=e._z,d=e._w,h=i._x,m=i._y,p=i._z,v=i._w;return this._x=r*v+d*h+l*p-u*m,this._y=l*v+d*m+u*h-r*p,this._z=u*v+d*p+r*m-l*h,this._w=d*v-r*h-l*m-u*p,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,u=e._z,d=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,u=-u,d=-d,h=-h);let m=1-i;if(h<.9995){const p=Math.acos(h),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this._onChangeCallback()}else this._x=this._x*m+r*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+d*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),u*Math.sin(i),u*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ct{constructor(e=0,i=0,r=0){ct.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(bx.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(bx.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=e.elements,d=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*d,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*d,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,u=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*r),v=2*(h*i-u*l),g=2*(u*r-d*i);return this.x=i+m*p+d*g-h*v,this.y=r+m*v+h*p-u*g,this.z=l+m*g+u*v-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,u=e.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this.z=Me(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this.z=Me(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,u=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-u*h,this.y=u*d-r*m,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return jf.copy(this).projectOnVector(e),this.sub(jf)}reflect(e){return this.sub(jf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(Me(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const jf=new ct,bx=new Io;class fe{constructor(e,i,r,l,u,d,h,m,p){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p)}set(e,i,r,l,u,d,h,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=h,v[3]=i,v[4]=u,v[5]=m,v[6]=r,v[7]=d,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],v=r[4],g=r[7],S=r[2],b=r[5],A=r[8],R=l[0],y=l[3],_=l[6],B=l[1],U=l[4],P=l[7],k=l[2],N=l[5],F=l[8];return u[0]=d*R+h*B+m*k,u[3]=d*y+h*U+m*N,u[6]=d*_+h*P+m*F,u[1]=p*R+v*B+g*k,u[4]=p*y+v*U+g*N,u[7]=p*_+v*P+g*F,u[2]=S*R+b*B+A*k,u[5]=S*y+b*U+A*N,u[8]=S*_+b*P+A*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8];return i*d*v-i*h*p-r*u*v+r*h*m+l*u*p-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8],g=v*d-h*p,S=h*m-v*u,b=p*u-d*m,A=i*g+r*S+l*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=g*R,e[1]=(l*p-v*r)*R,e[2]=(h*r-l*d)*R,e[3]=S*R,e[4]=(v*i-l*m)*R,e[5]=(l*u-h*i)*R,e[6]=b*R,e[7]=(r*m-p*i)*R,e[8]=(d*i-r*u)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,u,d,h){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Zf.makeScale(e,i)),this}rotate(e){return this.premultiply(Zf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Zf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Zf=new fe,Mx=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ex=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function jS(){const o={enabled:!0,workingColorSpace:Ts,spaces:{},convert:function(l,u,d){return this.enabled===!1||u===d||!u||!d||(this.spaces[u].transfer===Ge&&(l.r=ua(l.r),l.g=ua(l.g),l.b=ua(l.b)),this.spaces[u].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Ge&&(l.r=ys(l.r),l.g=ys(l.g),l.b=ys(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Xa?Tc:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,d){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Bo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),o.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Bo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),o.colorSpaceToWorking(l,u)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[Ts]:{primaries:e,whitePoint:r,transfer:Tc,toXYZ:Mx,fromXYZ:Ex,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:fi},outputColorSpaceConfig:{drawingBufferColorSpace:fi}},[fi]:{primaries:e,whitePoint:r,transfer:Ge,toXYZ:Mx,fromXYZ:Ex,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:fi}}}),o}const De=jS();function ua(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ys(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let ss;class ZS{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{ss===void 0&&(ss=Rc("canvas")),ss.width=e.width,ss.height=e.height;const l=ss.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=ss}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Rc("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),u=l.data;for(let d=0;d<u.length;d++)u[d]=ua(u[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(ua(i[r]/255)*255):i[r]=ua(i[r]);return{data:i,width:e.width,height:e.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let KS=0;class yh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=Fo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?u.push(Kf(l[d].image)):u.push(Kf(l[d]))}else u=Kf(l);r.url=u}return i||(e.images[this.uuid]=r),r}}function Kf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?ZS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}let QS=0;const Qf=new ct;class On extends ws{constructor(e=On.DEFAULT_IMAGE,i=On.DEFAULT_MAPPING,r=oa,l=oa,u=di,d=Er,h=bi,m=fa,p=On.DEFAULT_ANISOTROPY,v=Xa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=Fo(),this.name="",this.source=new yh(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new Ue(0,0),this.repeat=new Ue(1,1),this.center=new Ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Qf).x}get height(){return this.source.getSize(Qf).y}get depth(){return this.source.getSize(Qf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){oe(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){oe(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Od:e.x=e.x-Math.floor(e.x);break;case oa:e.x=e.x<0?0:1;break;case zd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Od:e.y=e.y-Math.floor(e.y);break;case oa:e.y=e.y<0?0:1;break;case zd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}On.DEFAULT_IMAGE=null;On.DEFAULT_MAPPING=hg;On.DEFAULT_ANISOTROPY=1;class an{constructor(e=0,i=0,r=0,l=1){an.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,u=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*u,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*u,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*u,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*u,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,u;const m=e.elements,p=m[0],v=m[4],g=m[8],S=m[1],b=m[5],A=m[9],R=m[2],y=m[6],_=m[10];if(Math.abs(v-S)<.01&&Math.abs(g-R)<.01&&Math.abs(A-y)<.01){if(Math.abs(v+S)<.1&&Math.abs(g+R)<.1&&Math.abs(A+y)<.1&&Math.abs(p+b+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const U=(p+1)/2,P=(b+1)/2,k=(_+1)/2,N=(v+S)/4,F=(g+R)/4,nt=(A+y)/4;return U>P&&U>k?U<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(U),l=N/r,u=F/r):P>k?P<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(P),r=N/l,u=nt/l):k<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(k),r=F/u,l=nt/u),this.set(r,l,u,i),this}let B=Math.sqrt((y-A)*(y-A)+(g-R)*(g-R)+(S-v)*(S-v));return Math.abs(B)<.001&&(B=1),this.x=(y-A)/B,this.y=(g-R)/B,this.z=(S-v)/B,this.w=Math.acos((p+b+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Me(this.x,e.x,i.x),this.y=Me(this.y,e.y,i.y),this.z=Me(this.z,e.z,i.z),this.w=Me(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Me(this.x,e,i),this.y=Me(this.y,e,i),this.z=Me(this.z,e,i),this.w=Me(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Me(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class JS extends ws{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new an(0,0,e,i),this.scissorTest=!1,this.viewport=new an(0,0,e,i);const l={width:e,height:i,depth:r.depth},u=new On(l);this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=u.clone(),this.textures[h].isRenderTargetTexture=!0,this.textures[h].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:di,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new yh(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ja extends JS{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Mg extends On{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ti,this.minFilter=ti,this.wrapR=oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class $S extends On{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=ti,this.minFilter=ti,this.wrapR=oa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ho{constructor(e=new ct(1/0,1/0,1/0),i=new ct(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(gi.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(gi.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=gi.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=u.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,gi):gi.fromBufferAttribute(u,d),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),tc.copy(r.boundingBox)),tc.applyMatrix4(e.matrixWorld),this.union(tc)}const l=e.children;for(let u=0,d=l.length;u<d;u++)this.expandByObject(l[u],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),ec.subVectors(this.max,Ro),os.subVectors(e.a,Ro),ls.subVectors(e.b,Ro),cs.subVectors(e.c,Ro),Fa.subVectors(ls,os),Ia.subVectors(cs,ls),pr.subVectors(os,cs);let i=[0,-Fa.z,Fa.y,0,-Ia.z,Ia.y,0,-pr.z,pr.y,Fa.z,0,-Fa.x,Ia.z,0,-Ia.x,pr.z,0,-pr.x,-Fa.y,Fa.x,0,-Ia.y,Ia.x,0,-pr.y,pr.x,0];return!Jf(i,os,ls,cs,ec)||(i=[1,0,0,0,1,0,0,0,1],!Jf(i,os,ls,cs,ec))?!1:(nc.crossVectors(Fa,Ia),i=[nc.x,nc.y,nc.z],Jf(i,os,ls,cs,ec))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $i=[new ct,new ct,new ct,new ct,new ct,new ct,new ct,new ct],gi=new ct,tc=new Ho,os=new ct,ls=new ct,cs=new ct,Fa=new ct,Ia=new ct,pr=new ct,Ro=new ct,ec=new ct,nc=new ct,mr=new ct;function Jf(o,e,i,r,l){for(let u=0,d=o.length-3;u<=d;u+=3){mr.fromArray(o,u);const h=l.x*Math.abs(mr.x)+l.y*Math.abs(mr.y)+l.z*Math.abs(mr.z),m=e.dot(mr),p=i.dot(mr),v=r.dot(mr);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>h)return!1}return!0}const ty=new Ho,Co=new ct,$f=new ct;class bh{constructor(e=new ct,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):ty.setFromPoints(e).getCenter(r);let l=0;for(let u=0,d=e.length;u<d;u++)l=Math.max(l,r.distanceToSquared(e[u]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Co.subVectors(e,this.center);const i=Co.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Co,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($f.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Co.copy(e.center).add($f)),this.expandByPoint(Co.copy(e.center).sub($f))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ta=new ct,td=new ct,ic=new ct,Ha=new ct,ed=new ct,ac=new ct,nd=new ct;class ey{constructor(e=new ct,i=new ct(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ta)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ta.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ta.copy(this.origin).addScaledVector(this.direction,i),ta.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){td.copy(e).add(i).multiplyScalar(.5),ic.copy(i).sub(e).normalize(),Ha.copy(this.origin).sub(td);const u=e.distanceTo(i)*.5,d=-this.direction.dot(ic),h=Ha.dot(this.direction),m=-Ha.dot(ic),p=Ha.lengthSq(),v=Math.abs(1-d*d);let g,S,b,A;if(v>0)if(g=d*m-h,S=d*h-m,A=u*v,g>=0)if(S>=-A)if(S<=A){const R=1/v;g*=R,S*=R,b=g*(g+d*S+2*h)+S*(d*g+S+2*m)+p}else S=u,g=Math.max(0,-(d*S+h)),b=-g*g+S*(S+2*m)+p;else S=-u,g=Math.max(0,-(d*S+h)),b=-g*g+S*(S+2*m)+p;else S<=-A?(g=Math.max(0,-(-d*u+h)),S=g>0?-u:Math.min(Math.max(-u,-m),u),b=-g*g+S*(S+2*m)+p):S<=A?(g=0,S=Math.min(Math.max(-u,-m),u),b=S*(S+2*m)+p):(g=Math.max(0,-(d*u+h)),S=g>0?u:Math.min(Math.max(-u,-m),u),b=-g*g+S*(S+2*m)+p);else S=d>0?-u:u,g=Math.max(0,-(d*S+h)),b=-g*g+S*(S+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(td).addScaledVector(ic,S),b}intersectSphere(e,i){ta.subVectors(e.center,this.origin);const r=ta.dot(this.direction),l=ta.dot(ta)-r*r,u=e.radius*e.radius;if(l>u)return null;const d=Math.sqrt(u-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,u,d,h,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,S=this.origin;return p>=0?(r=(e.min.x-S.x)*p,l=(e.max.x-S.x)*p):(r=(e.max.x-S.x)*p,l=(e.min.x-S.x)*p),v>=0?(u=(e.min.y-S.y)*v,d=(e.max.y-S.y)*v):(u=(e.max.y-S.y)*v,d=(e.min.y-S.y)*v),r>d||u>l||((u>r||isNaN(r))&&(r=u),(d<l||isNaN(l))&&(l=d),g>=0?(h=(e.min.z-S.z)*g,m=(e.max.z-S.z)*g):(h=(e.max.z-S.z)*g,m=(e.min.z-S.z)*g),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,ta)!==null}intersectTriangle(e,i,r,l,u){ed.subVectors(i,e),ac.subVectors(r,e),nd.crossVectors(ed,ac);let d=this.direction.dot(nd),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ha.subVectors(this.origin,e);const m=h*this.direction.dot(ac.crossVectors(Ha,ac));if(m<0)return null;const p=h*this.direction.dot(ed.cross(Ha));if(p<0||m+p>d)return null;const v=-h*Ha.dot(nd);return v<0?null:this.at(v/d,u)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mn{constructor(e,i,r,l,u,d,h,m,p,v,g,S,b,A,R,y){mn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,u,d,h,m,p,v,g,S,b,A,R,y)}set(e,i,r,l,u,d,h,m,p,v,g,S,b,A,R,y){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=u,_[5]=d,_[9]=h,_[13]=m,_[2]=p,_[6]=v,_[10]=g,_[14]=S,_[3]=b,_[7]=A,_[11]=R,_[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mn().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/us.setFromMatrixColumn(e,0).length(),u=1/us.setFromMatrixColumn(e,1).length(),d=1/us.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,u=e.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(u),g=Math.sin(u);if(e.order==="XYZ"){const S=d*v,b=d*g,A=h*v,R=h*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=b+A*p,i[5]=S-R*p,i[9]=-h*m,i[2]=R-S*p,i[6]=A+b*p,i[10]=d*m}else if(e.order==="YXZ"){const S=m*v,b=m*g,A=p*v,R=p*g;i[0]=S+R*h,i[4]=A*h-b,i[8]=d*p,i[1]=d*g,i[5]=d*v,i[9]=-h,i[2]=b*h-A,i[6]=R+S*h,i[10]=d*m}else if(e.order==="ZXY"){const S=m*v,b=m*g,A=p*v,R=p*g;i[0]=S-R*h,i[4]=-d*g,i[8]=A+b*h,i[1]=b+A*h,i[5]=d*v,i[9]=R-S*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const S=d*v,b=d*g,A=h*v,R=h*g;i[0]=m*v,i[4]=A*p-b,i[8]=S*p+R,i[1]=m*g,i[5]=R*p+S,i[9]=b*p-A,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const S=d*m,b=d*p,A=h*m,R=h*p;i[0]=m*v,i[4]=R-S*g,i[8]=A*g+b,i[1]=g,i[5]=d*v,i[9]=-h*v,i[2]=-p*v,i[6]=b*g+A,i[10]=S-R*g}else if(e.order==="XZY"){const S=d*m,b=d*p,A=h*m,R=h*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=S*g+R,i[5]=d*v,i[9]=b*g-A,i[2]=A*g-b,i[6]=h*v,i[10]=R*g+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ny,e,iy)}lookAt(e,i,r){const l=this.elements;return Jn.subVectors(e,i),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),Ga.crossVectors(r,Jn),Ga.lengthSq()===0&&(Math.abs(r.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),Ga.crossVectors(r,Jn)),Ga.normalize(),rc.crossVectors(Jn,Ga),l[0]=Ga.x,l[4]=rc.x,l[8]=Jn.x,l[1]=Ga.y,l[5]=rc.y,l[9]=Jn.y,l[2]=Ga.z,l[6]=rc.z,l[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,u=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],v=r[1],g=r[5],S=r[9],b=r[13],A=r[2],R=r[6],y=r[10],_=r[14],B=r[3],U=r[7],P=r[11],k=r[15],N=l[0],F=l[4],nt=l[8],w=l[12],C=l[1],V=l[5],tt=l[9],ot=l[13],mt=l[2],ft=l[6],z=l[10],j=l[14],Y=l[3],gt=l[7],_t=l[11],L=l[15];return u[0]=d*N+h*C+m*mt+p*Y,u[4]=d*F+h*V+m*ft+p*gt,u[8]=d*nt+h*tt+m*z+p*_t,u[12]=d*w+h*ot+m*j+p*L,u[1]=v*N+g*C+S*mt+b*Y,u[5]=v*F+g*V+S*ft+b*gt,u[9]=v*nt+g*tt+S*z+b*_t,u[13]=v*w+g*ot+S*j+b*L,u[2]=A*N+R*C+y*mt+_*Y,u[6]=A*F+R*V+y*ft+_*gt,u[10]=A*nt+R*tt+y*z+_*_t,u[14]=A*w+R*ot+y*j+_*L,u[3]=B*N+U*C+P*mt+k*Y,u[7]=B*F+U*V+P*ft+k*gt,u[11]=B*nt+U*tt+P*z+k*_t,u[15]=B*w+U*ot+P*j+k*L,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],u=e[12],d=e[1],h=e[5],m=e[9],p=e[13],v=e[2],g=e[6],S=e[10],b=e[14],A=e[3],R=e[7],y=e[11],_=e[15];return A*(+u*m*g-l*p*g-u*h*S+r*p*S+l*h*b-r*m*b)+R*(+i*m*b-i*p*S+u*d*S-l*d*b+l*p*v-u*m*v)+y*(+i*p*g-i*h*b-u*d*g+r*d*b+u*h*v-r*p*v)+_*(-l*h*v-i*m*g+i*h*S+l*d*g-r*d*S+r*m*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],u=e[3],d=e[4],h=e[5],m=e[6],p=e[7],v=e[8],g=e[9],S=e[10],b=e[11],A=e[12],R=e[13],y=e[14],_=e[15],B=g*y*p-R*S*p+R*m*b-h*y*b-g*m*_+h*S*_,U=A*S*p-v*y*p-A*m*b+d*y*b+v*m*_-d*S*_,P=v*R*p-A*g*p+A*h*b-d*R*b-v*h*_+d*g*_,k=A*g*m-v*R*m-A*h*S+d*R*S+v*h*y-d*g*y,N=i*B+r*U+l*P+u*k;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/N;return e[0]=B*F,e[1]=(R*S*u-g*y*u-R*l*b+r*y*b+g*l*_-r*S*_)*F,e[2]=(h*y*u-R*m*u+R*l*p-r*y*p-h*l*_+r*m*_)*F,e[3]=(g*m*u-h*S*u-g*l*p+r*S*p+h*l*b-r*m*b)*F,e[4]=U*F,e[5]=(v*y*u-A*S*u+A*l*b-i*y*b-v*l*_+i*S*_)*F,e[6]=(A*m*u-d*y*u-A*l*p+i*y*p+d*l*_-i*m*_)*F,e[7]=(d*S*u-v*m*u+v*l*p-i*S*p-d*l*b+i*m*b)*F,e[8]=P*F,e[9]=(A*g*u-v*R*u-A*r*b+i*R*b+v*r*_-i*g*_)*F,e[10]=(d*R*u-A*h*u+A*r*p-i*R*p-d*r*_+i*h*_)*F,e[11]=(v*h*u-d*g*u-v*r*p+i*g*p+d*r*b-i*h*b)*F,e[12]=k*F,e[13]=(v*R*l-A*g*l+A*r*S-i*R*S-v*r*y+i*g*y)*F,e[14]=(A*h*l-d*R*l-A*r*m+i*R*m+d*r*y-i*h*y)*F,e[15]=(d*g*l-v*h*l+v*r*m-i*g*m-d*r*S+i*h*S)*F,this}scale(e){const i=this.elements,r=e.x,l=e.y,u=e.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,d=e.x,h=e.y,m=e.z,p=u*d,v=u*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,v*h+r,v*m-l*d,0,p*m-l*h,v*m+l*d,u*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,u,d){return this.set(1,r,u,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,u=i._x,d=i._y,h=i._z,m=i._w,p=u+u,v=d+d,g=h+h,S=u*p,b=u*v,A=u*g,R=d*v,y=d*g,_=h*g,B=m*p,U=m*v,P=m*g,k=r.x,N=r.y,F=r.z;return l[0]=(1-(R+_))*k,l[1]=(b+P)*k,l[2]=(A-U)*k,l[3]=0,l[4]=(b-P)*N,l[5]=(1-(S+_))*N,l[6]=(y+B)*N,l[7]=0,l[8]=(A+U)*F,l[9]=(y-B)*F,l[10]=(1-(S+R))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let u=us.set(l[0],l[1],l[2]).length();const d=us.set(l[4],l[5],l[6]).length(),h=us.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),e.x=l[12],e.y=l[13],e.z=l[14],_i.copy(this);const p=1/u,v=1/d,g=1/h;return _i.elements[0]*=p,_i.elements[1]*=p,_i.elements[2]*=p,_i.elements[4]*=v,_i.elements[5]*=v,_i.elements[6]*=v,_i.elements[8]*=g,_i.elements[9]*=g,_i.elements[10]*=g,i.setFromRotationMatrix(_i),r.x=u,r.y=d,r.z=h,this}makePerspective(e,i,r,l,u,d,h=Di,m=!1){const p=this.elements,v=2*u/(i-e),g=2*u/(r-l),S=(i+e)/(i-e),b=(r+l)/(r-l);let A,R;if(m)A=u/(d-u),R=d*u/(d-u);else if(h===Di)A=-(d+u)/(d-u),R=-2*d*u/(d-u);else if(h===Ac)A=-d/(d-u),R=-d*u/(d-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=S,p[12]=0,p[1]=0,p[5]=g,p[9]=b,p[13]=0,p[2]=0,p[6]=0,p[10]=A,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,r,l,u,d,h=Di,m=!1){const p=this.elements,v=2/(i-e),g=2/(r-l),S=-(i+e)/(i-e),b=-(r+l)/(r-l);let A,R;if(m)A=1/(d-u),R=d/(d-u);else if(h===Di)A=-2/(d-u),R=-(d+u)/(d-u);else if(h===Ac)A=-1/(d-u),R=-u/(d-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return p[0]=v,p[4]=0,p[8]=0,p[12]=S,p[1]=0,p[5]=g,p[9]=0,p[13]=b,p[2]=0,p[6]=0,p[10]=A,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const us=new ct,_i=new mn,ny=new ct(0,0,0),iy=new ct(1,1,1),Ga=new ct,rc=new ct,Jn=new ct,Tx=new mn,Ax=new Io;class da{constructor(e=0,i=0,r=0,l=da.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,u=l[0],d=l[4],h=l[8],m=l[1],p=l[5],v=l[9],g=l[2],S=l[6],b=l[10];switch(i){case"XYZ":this._y=Math.asin(Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,b),this._z=Math.atan2(-d,u)):(this._x=Math.atan2(S,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,b),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Me(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-g,b),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Me(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(S,b),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Me(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(h,b));break;case"XZY":this._z=Math.asin(-Me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(S,p),this._y=Math.atan2(h,u)):(this._x=Math.atan2(-v,b),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return Tx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tx,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Ax.setFromEuler(this),this.setFromQuaternion(Ax,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}da.DEFAULT_ORDER="XYZ";class Eg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ay=0;const Rx=new ct,fs=new Io,ea=new mn,sc=new ct,wo=new ct,ry=new ct,sy=new Io,Cx=new ct(1,0,0),wx=new ct(0,1,0),Dx=new ct(0,0,1),Ux={type:"added"},oy={type:"removed"},ds={type:"childadded",child:null},id={type:"childremoved",child:null};class ei extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=Fo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ei.DEFAULT_UP.clone();const e=new ct,i=new da,r=new Io,l=new ct(1,1,1);function u(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new mn},normalMatrix:{value:new fe}}),this.matrix=new mn,this.matrixWorld=new mn,this.matrixAutoUpdate=ei.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return fs.setFromAxisAngle(e,i),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,i){return fs.setFromAxisAngle(e,i),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(Cx,e)}rotateY(e){return this.rotateOnAxis(wx,e)}rotateZ(e){return this.rotateOnAxis(Dx,e)}translateOnAxis(e,i){return Rx.copy(e).applyQuaternion(this.quaternion),this.position.add(Rx.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Cx,e)}translateY(e){return this.translateOnAxis(wx,e)}translateZ(e){return this.translateOnAxis(Dx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ea.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?sc.copy(e):sc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ea.lookAt(wo,sc,this.up):ea.lookAt(sc,wo,this.up),this.quaternion.setFromRotationMatrix(ea),l&&(ea.extractRotation(l.matrixWorld),fs.setFromRotationMatrix(ea),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(nn("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ux),ds.child=e,this.dispatchEvent(ds),ds.child=null):nn("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(oy),id.child=e,this.dispatchEvent(id),id.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ea.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ea.multiply(e.parent.matrixWorld)),e.applyMatrix4(ea),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ux),ds.child=e,this.dispatchEvent(ds),ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,e,ry),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,sy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];u(e.shapes,g)}else u(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(u(e.materials,this.material[m]));l.material=h}else l.material=u(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(u(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),v=d(e.images),g=d(e.shapes),S=d(e.skeletons),b=d(e.animations),A=d(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),S.length>0&&(r.skeletons=S),b.length>0&&(r.animations=b),A.length>0&&(r.nodes=A)}return r.object=l,r;function d(h){const m=[];for(const p in h){const v=h[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}ei.DEFAULT_UP=new ct(0,1,0);ei.DEFAULT_MATRIX_AUTO_UPDATE=!0;ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new ct,na=new ct,ad=new ct,ia=new ct,hs=new ct,ps=new ct,Lx=new ct,rd=new ct,sd=new ct,od=new ct,ld=new an,cd=new an,ud=new an;class yi{constructor(e=new ct,i=new ct,r=new ct){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),vi.subVectors(e,i),l.cross(vi);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(e,i,r,l,u){vi.subVectors(l,i),na.subVectors(r,i),ad.subVectors(e,i);const d=vi.dot(vi),h=vi.dot(na),m=vi.dot(ad),p=na.dot(na),v=na.dot(ad),g=d*p-h*h;if(g===0)return u.set(0,0,0),null;const S=1/g,b=(p*m-h*v)*S,A=(d*v-h*m)*S;return u.set(1-b-A,A,b)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,ia)===null?!1:ia.x>=0&&ia.y>=0&&ia.x+ia.y<=1}static getInterpolation(e,i,r,l,u,d,h,m){return this.getBarycoord(e,i,r,l,ia)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,ia.x),m.addScaledVector(d,ia.y),m.addScaledVector(h,ia.z),m)}static getInterpolatedAttribute(e,i,r,l,u,d){return ld.setScalar(0),cd.setScalar(0),ud.setScalar(0),ld.fromBufferAttribute(e,i),cd.fromBufferAttribute(e,r),ud.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(ld,u.x),d.addScaledVector(cd,u.y),d.addScaledVector(ud,u.z),d}static isFrontFacing(e,i,r,l){return vi.subVectors(r,i),na.subVectors(e,i),vi.cross(na).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),na.subVectors(this.a,this.b),vi.cross(na).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return yi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,u){return yi.getInterpolation(e,this.a,this.b,this.c,i,r,l,u)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,u=this.c;let d,h;hs.subVectors(l,r),ps.subVectors(u,r),rd.subVectors(e,r);const m=hs.dot(rd),p=ps.dot(rd);if(m<=0&&p<=0)return i.copy(r);sd.subVectors(e,l);const v=hs.dot(sd),g=ps.dot(sd);if(v>=0&&g<=v)return i.copy(l);const S=m*g-v*p;if(S<=0&&m>=0&&v<=0)return d=m/(m-v),i.copy(r).addScaledVector(hs,d);od.subVectors(e,u);const b=hs.dot(od),A=ps.dot(od);if(A>=0&&b<=A)return i.copy(u);const R=b*p-m*A;if(R<=0&&p>=0&&A<=0)return h=p/(p-A),i.copy(r).addScaledVector(ps,h);const y=v*A-b*g;if(y<=0&&g-v>=0&&b-A>=0)return Lx.subVectors(u,l),h=(g-v)/(g-v+(b-A)),i.copy(l).addScaledVector(Lx,h);const _=1/(y+R+S);return d=R*_,h=S*_,i.copy(r).addScaledVector(hs,d).addScaledVector(ps,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Tg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Va={h:0,s:0,l:0},oc={h:0,s:0,l:0};function fd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ve{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=fi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,De.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=De.workingColorSpace){return this.r=e,this.g=i,this.b=r,De.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=De.workingColorSpace){if(e=YS(e,1),i=Me(i,0,1),r=Me(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,d=2*r-u;this.r=fd(d,u,e+1/3),this.g=fd(d,u,e),this.b=fd(d,u,e-1/3)}return De.colorSpaceToWorking(this,l),this}setStyle(e,i=fi){function r(u){u!==void 0&&parseFloat(u)<1&&oe("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let u;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:oe("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const u=l[1],d=u.length;if(d===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(u,16),i);oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=fi){const r=Tg[e.toLowerCase()];return r!==void 0?this.setHex(r,i):oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ua(e.r),this.g=ua(e.g),this.b=ua(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=fi){return De.workingToColorSpace(Un.copy(this),e),Math.round(Me(Un.r*255,0,255))*65536+Math.round(Me(Un.g*255,0,255))*256+Math.round(Me(Un.b*255,0,255))}getHexString(e=fi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=De.workingColorSpace){De.workingToColorSpace(Un.copy(this),i);const r=Un.r,l=Un.g,u=Un.b,d=Math.max(r,l,u),h=Math.min(r,l,u);let m,p;const v=(h+d)/2;if(h===d)m=0,p=0;else{const g=d-h;switch(p=v<=.5?g/(d+h):g/(2-d-h),d){case r:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-r)/g+2;break;case u:m=(r-l)/g+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,i=De.workingColorSpace){return De.workingToColorSpace(Un.copy(this),i),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=fi){De.workingToColorSpace(Un.copy(this),e);const i=Un.r,r=Un.g,l=Un.b;return e!==fi?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(Va),this.setHSL(Va.h+e,Va.s+i,Va.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(Va),e.getHSL(oc);const r=Yf(Va.h,oc.h,i),l=Yf(Va.s,oc.s,i),u=Yf(Va.l,oc.l,i);return this.setHSL(r,l,u),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,u=e.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Ve;Ve.NAMES=Tg;let ly=0;class wc extends ws{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=Fo(),this.name="",this.type="Material",this.blending=Ss,this.side=Ya,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Md,this.blendDst=Ed,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rs,this.stencilZFail=rs,this.stencilZPass=rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){oe(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){oe(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(r.blending=this.blending),this.side!==Ya&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Md&&(r.blendSrc=this.blendSrc),this.blendDst!==Ed&&(r.blendDst=this.blendDst),this.blendEquation!==yr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gx&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==rs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==rs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==rs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}if(i){const u=l(e.textures),d=l(e.images);u.length>0&&(r.textures=u),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ag extends wc{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new da,this.combine=dg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const un=new ct,lc=new Ue;let cy=0;class Ui{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cy++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=_x,this.updateRanges=[],this.gpuType=la,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)lc.fromBufferAttribute(this,i),lc.applyMatrix3(e),this.setXY(i,lc.x,lc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix3(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyMatrix4(e),this.setXYZ(i,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.applyNormalMatrix(e),this.setXYZ(i,un.x,un.y,un.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)un.fromBufferAttribute(this,i),un.transformDirection(e),this.setXYZ(i,un.x,un.y,un.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=Ao(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Gn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Ao(i,this.array)),i}setX(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Ao(i,this.array)),i}setY(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Ao(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Ao(i,this.array)),i}setW(e,i){return this.normalized&&(i=Gn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,u){return e*=this.itemSize,this.normalized&&(i=Gn(i,this.array),r=Gn(r,this.array),l=Gn(l,this.array),u=Gn(u,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=u,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_x&&(e.usage=this.usage),e}}class Rg extends Ui{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Cg extends Ui{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Tr extends Ui{constructor(e,i,r){super(new Float32Array(e),i,r)}}let uy=0;const ui=new mn,dd=new ei,ms=new ct,$n=new Ho,Do=new Ho,bn=new ct;class Za extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=Fo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bg(e)?Cg:Rg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new fe().getNormalMatrix(e);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ui.makeRotationFromQuaternion(e),this.applyMatrix4(ui),this}rotateX(e){return ui.makeRotationX(e),this.applyMatrix4(ui),this}rotateY(e){return ui.makeRotationY(e),this.applyMatrix4(ui),this}rotateZ(e){return ui.makeRotationZ(e),this.applyMatrix4(ui),this}translate(e,i,r){return ui.makeTranslation(e,i,r),this.applyMatrix4(ui),this}scale(e,i,r){return ui.makeScale(e,i,r),this.applyMatrix4(ui),this}lookAt(e){return dd.lookAt(e),dd.updateMatrix(),this.applyMatrix4(dd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=e.length;l<u;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Tr(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const u=e[l];i.setXYZ(l,u.x,u.y,u.z||0)}e.length>i.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nn("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ct(-1/0,-1/0,-1/0),new ct(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];$n.setFromBufferAttribute(u),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,$n.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,$n.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint($n.min),this.boundingBox.expandByPoint($n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nn('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bh);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nn("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ct,1/0);return}if(e){const r=this.boundingSphere.center;if($n.setFromBufferAttribute(e),i)for(let u=0,d=i.length;u<d;u++){const h=i[u];Do.setFromBufferAttribute(h),this.morphTargetsRelative?(bn.addVectors($n.min,Do.min),$n.expandByPoint(bn),bn.addVectors($n.max,Do.max),$n.expandByPoint(bn)):($n.expandByPoint(Do.min),$n.expandByPoint(Do.max))}$n.getCenter(r);let l=0;for(let u=0,d=e.count;u<d;u++)bn.fromBufferAttribute(e,u),l=Math.max(l,r.distanceToSquared(bn));if(i)for(let u=0,d=i.length;u<d;u++){const h=i[u],m=this.morphTargetsRelative;for(let p=0,v=h.count;p<v;p++)bn.fromBufferAttribute(h,p),m&&(ms.fromBufferAttribute(e,p),bn.add(ms)),l=Math.max(l,r.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&nn('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){nn("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ui(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let nt=0;nt<r.count;nt++)h[nt]=new ct,m[nt]=new ct;const p=new ct,v=new ct,g=new ct,S=new Ue,b=new Ue,A=new Ue,R=new ct,y=new ct;function _(nt,w,C){p.fromBufferAttribute(r,nt),v.fromBufferAttribute(r,w),g.fromBufferAttribute(r,C),S.fromBufferAttribute(u,nt),b.fromBufferAttribute(u,w),A.fromBufferAttribute(u,C),v.sub(p),g.sub(p),b.sub(S),A.sub(S);const V=1/(b.x*A.y-A.x*b.y);isFinite(V)&&(R.copy(v).multiplyScalar(A.y).addScaledVector(g,-b.y).multiplyScalar(V),y.copy(g).multiplyScalar(b.x).addScaledVector(v,-A.x).multiplyScalar(V),h[nt].add(R),h[w].add(R),h[C].add(R),m[nt].add(y),m[w].add(y),m[C].add(y))}let B=this.groups;B.length===0&&(B=[{start:0,count:e.count}]);for(let nt=0,w=B.length;nt<w;++nt){const C=B[nt],V=C.start,tt=C.count;for(let ot=V,mt=V+tt;ot<mt;ot+=3)_(e.getX(ot+0),e.getX(ot+1),e.getX(ot+2))}const U=new ct,P=new ct,k=new ct,N=new ct;function F(nt){k.fromBufferAttribute(l,nt),N.copy(k);const w=h[nt];U.copy(w),U.sub(k.multiplyScalar(k.dot(w))).normalize(),P.crossVectors(N,w);const V=P.dot(m[nt])<0?-1:1;d.setXYZW(nt,U.x,U.y,U.z,V)}for(let nt=0,w=B.length;nt<w;++nt){const C=B[nt],V=C.start,tt=C.count;for(let ot=V,mt=V+tt;ot<mt;ot+=3)F(e.getX(ot+0)),F(e.getX(ot+1)),F(e.getX(ot+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ui(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,b=r.count;S<b;S++)r.setXYZ(S,0,0,0);const l=new ct,u=new ct,d=new ct,h=new ct,m=new ct,p=new ct,v=new ct,g=new ct;if(e)for(let S=0,b=e.count;S<b;S+=3){const A=e.getX(S+0),R=e.getX(S+1),y=e.getX(S+2);l.fromBufferAttribute(i,A),u.fromBufferAttribute(i,R),d.fromBufferAttribute(i,y),v.subVectors(d,u),g.subVectors(l,u),v.cross(g),h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,R),p.fromBufferAttribute(r,y),h.add(v),m.add(v),p.add(v),r.setXYZ(A,h.x,h.y,h.z),r.setXYZ(R,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let S=0,b=i.count;S<b;S+=3)l.fromBufferAttribute(i,S+0),u.fromBufferAttribute(i,S+1),d.fromBufferAttribute(i,S+2),v.subVectors(d,u),g.subVectors(l,u),v.cross(g),r.setXYZ(S+0,v.x,v.y,v.z),r.setXYZ(S+1,v.x,v.y,v.z),r.setXYZ(S+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)bn.fromBufferAttribute(e,i),bn.normalize(),e.setXYZ(i,bn.x,bn.y,bn.z)}toNonIndexed(){function e(h,m){const p=h.array,v=h.itemSize,g=h.normalized,S=new p.constructor(m.length*v);let b=0,A=0;for(let R=0,y=m.length;R<y;R++){h.isInterleavedBufferAttribute?b=m[R]*h.data.stride+h.offset:b=m[R]*v;for(let _=0;_<v;_++)S[A++]=p[b++]}return new Ui(S,v,g)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Za,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const u=this.morphAttributes;for(const h in u){const m=[],p=u[h];for(let v=0,g=p.length;v<g;v++){const S=p[v],b=e(S,r);m.push(b)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,S=p.length;g<S;g++){const b=p[g];v.push(b.toJSON(e.data))}v.length>0&&(l[m]=v,u=!0)}u&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=e.morphAttributes;for(const p in u){const v=[],g=u[p];for(let S=0,b=g.length;S<b;S++)v.push(g[S].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,v=d.length;p<v;p++){const g=d[p];this.addGroup(g.start,g.count,g.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nx=new mn,xr=new ey,cc=new bh,Ox=new ct,uc=new ct,fc=new ct,dc=new ct,hd=new ct,hc=new ct,zx=new ct,pc=new ct;class Li extends ei{constructor(e=new Za,i=new Ag){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,d=l.length;u<d;u++){const h=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=u}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(u&&h){hc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=h[m],g=u[m];v!==0&&(hd.fromBufferAttribute(g,e),d?hc.addScaledVector(hd,v):hc.addScaledVector(hd.sub(i),v))}i.add(hc)}return i}raycast(e,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),cc.copy(r.boundingSphere),cc.applyMatrix4(u),xr.copy(e.ray).recast(e.near),!(cc.containsPoint(xr.origin)===!1&&(xr.intersectSphere(cc,Ox)===null||xr.origin.distanceToSquared(Ox)>(e.far-e.near)**2))&&(Nx.copy(u).invert(),xr.copy(e.ray).applyMatrix4(Nx),!(r.boundingBox!==null&&xr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,xr)))}_computeIntersections(e,i,r){let l;const u=this.geometry,d=this.material,h=u.index,m=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,g=u.attributes.normal,S=u.groups,b=u.drawRange;if(h!==null)if(Array.isArray(d))for(let A=0,R=S.length;A<R;A++){const y=S[A],_=d[y.materialIndex],B=Math.max(y.start,b.start),U=Math.min(h.count,Math.min(y.start+y.count,b.start+b.count));for(let P=B,k=U;P<k;P+=3){const N=h.getX(P),F=h.getX(P+1),nt=h.getX(P+2);l=mc(this,_,e,r,p,v,g,N,F,nt),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,b.start),R=Math.min(h.count,b.start+b.count);for(let y=A,_=R;y<_;y+=3){const B=h.getX(y),U=h.getX(y+1),P=h.getX(y+2);l=mc(this,d,e,r,p,v,g,B,U,P),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let A=0,R=S.length;A<R;A++){const y=S[A],_=d[y.materialIndex],B=Math.max(y.start,b.start),U=Math.min(m.count,Math.min(y.start+y.count,b.start+b.count));for(let P=B,k=U;P<k;P+=3){const N=P,F=P+1,nt=P+2;l=mc(this,_,e,r,p,v,g,N,F,nt),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const A=Math.max(0,b.start),R=Math.min(m.count,b.start+b.count);for(let y=A,_=R;y<_;y+=3){const B=y,U=y+1,P=y+2;l=mc(this,d,e,r,p,v,g,B,U,P),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function fy(o,e,i,r,l,u,d,h){let m;if(e.side===Vn?m=r.intersectTriangle(d,u,l,!0,h):m=r.intersectTriangle(l,u,d,e.side===Ya,h),m===null)return null;pc.copy(h),pc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(pc);return p<i.near||p>i.far?null:{distance:p,point:pc.clone(),object:o}}function mc(o,e,i,r,l,u,d,h,m,p){o.getVertexPosition(h,uc),o.getVertexPosition(m,fc),o.getVertexPosition(p,dc);const v=fy(o,e,i,r,uc,fc,dc,zx);if(v){const g=new ct;yi.getBarycoord(zx,uc,fc,dc,g),l&&(v.uv=yi.getInterpolatedAttribute(l,h,m,p,g,new Ue)),u&&(v.uv1=yi.getInterpolatedAttribute(u,h,m,p,g,new Ue)),d&&(v.normal=yi.getInterpolatedAttribute(d,h,m,p,g,new ct),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new ct,materialIndex:0};yi.getNormal(uc,fc,dc,S.normal),v.face=S,v.barycoord=g}return v}class Go extends Za{constructor(e=1,i=1,r=1,l=1,u=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:d};const h=this;l=Math.floor(l),u=Math.floor(u),d=Math.floor(d);const m=[],p=[],v=[],g=[];let S=0,b=0;A("z","y","x",-1,-1,r,i,e,d,u,0),A("z","y","x",1,-1,r,i,-e,d,u,1),A("x","z","y",1,1,e,r,i,l,d,2),A("x","z","y",1,-1,e,r,-i,l,d,3),A("x","y","z",1,-1,e,i,r,l,u,4),A("x","y","z",-1,-1,e,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new Tr(p,3)),this.setAttribute("normal",new Tr(v,3)),this.setAttribute("uv",new Tr(g,2));function A(R,y,_,B,U,P,k,N,F,nt,w){const C=P/F,V=k/nt,tt=P/2,ot=k/2,mt=N/2,ft=F+1,z=nt+1;let j=0,Y=0;const gt=new ct;for(let _t=0;_t<z;_t++){const L=_t*V-ot;for(let at=0;at<ft;at++){const yt=at*C-tt;gt[R]=yt*B,gt[y]=L*U,gt[_]=mt,p.push(gt.x,gt.y,gt.z),gt[R]=0,gt[y]=0,gt[_]=N>0?1:-1,v.push(gt.x,gt.y,gt.z),g.push(at/F),g.push(1-_t/nt),j+=1}}for(let _t=0;_t<nt;_t++)for(let L=0;L<F;L++){const at=S+L+ft*_t,yt=S+L+ft*(_t+1),Tt=S+(L+1)+ft*(_t+1),zt=S+(L+1)+ft*_t;m.push(at,yt,zt),m.push(yt,Tt,zt),Y+=6}h.addGroup(b,Y,w),b+=Y,S+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function As(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Nn(o){const e={};for(let i=0;i<o.length;i++){const r=As(o[i]);for(const l in r)e[l]=r[l]}return e}function dy(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function wg(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:De.workingColorSpace}const hy={clone:As,merge:Nn};var py=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,my=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends wc{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=py,this.fragmentShader=my,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=As(e.uniforms),this.uniformsGroups=dy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Dg extends ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mn,this.projectionMatrix=new mn,this.projectionMatrixInverse=new mn,this.coordinateSystem=Di,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ka=new ct,Px=new Ue,Bx=new Ue;class Si extends Dg{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=uh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(qf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return uh*2*Math.atan(Math.tan(qf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ka.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ka.x,ka.y).multiplyScalar(-e/ka.z),ka.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ka.x,ka.y).multiplyScalar(-e/ka.z)}getViewSize(e,i){return this.getViewBounds(e,Px,Bx),i.subVectors(Bx,Px)}setViewOffset(e,i,r,l,u,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(qf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;u+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(u+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const xs=-90,gs=1;class xy extends ei{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Si(xs,gs,e,i);l.layers=this.layers,this.add(l);const u=new Si(xs,gs,e,i);u.layers=this.layers,this.add(u);const d=new Si(xs,gs,e,i);d.layers=this.layers,this.add(d);const h=new Si(xs,gs,e,i);h.layers=this.layers,this.add(h);const m=new Si(xs,gs,e,i);m.layers=this.layers,this.add(m);const p=new Si(xs,gs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,u,d,h,m]=i;for(const p of i)this.remove(p);if(e===Di)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Ac)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[u,d,h,m,p,v]=this.children,g=e.getRenderTarget(),S=e.getActiveCubeFace(),b=e.getActiveMipmapLevel(),A=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,u),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,v),e.setRenderTarget(g,S,b),e.xr.enabled=A,r.texture.needsPMREMUpdate=!0}}class Ug extends On{constructor(e=[],i=Ms,r,l,u,d,h,m,p,v){super(e,i,r,l,u,d,h,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gy extends ja{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Ug(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Go(5,5,5),u=new Mi({name:"CubemapFromEquirect",uniforms:As(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Vn,blending:ca});u.uniforms.tEquirect.value=i;const d=new Li(l,u),h=i.minFilter;return i.minFilter===Er&&(i.minFilter=di),new xy(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const u=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(u)}}class xc extends ei{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _y={type:"move"};class pd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ct,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ct),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ct,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ct),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,u=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const R of e.hand.values()){const y=i.getJointPose(R,r),_=this._getHandJoint(p,R);y!==null&&(_.matrix.fromArray(y.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=y.radius),_.visible=y!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],S=v.position.distanceTo(g.position),b=.02,A=.005;p.inputState.pinching&&S>b+A?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&S<=b-A&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(u=i.getPose(e.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(_y)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new xc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class Fx extends ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new da,this.environmentIntensity=1,this.environmentRotation=new da,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class vy extends On{constructor(e=null,i=1,r=1,l,u,d,h,m,p=ti,v=ti,g,S){super(null,d,h,m,p,v,l,u,g,S),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const md=new ct,Sy=new ct,yy=new fe;class Sr{constructor(e=new ct(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=md.subVectors(r,i).cross(Sy.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(md),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(e.start).addScaledVector(r,u)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||yy.getNormalMatrix(e),l=this.coplanarPoint(md).applyMatrix4(e),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new bh,by=new Ue(.5,.5),gc=new ct;class Lg{constructor(e=new Sr,i=new Sr,r=new Sr,l=new Sr,u=new Sr,d=new Sr){this.planes=[e,i,r,l,u,d]}set(e,i,r,l,u,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(u),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Di,r=!1){const l=this.planes,u=e.elements,d=u[0],h=u[1],m=u[2],p=u[3],v=u[4],g=u[5],S=u[6],b=u[7],A=u[8],R=u[9],y=u[10],_=u[11],B=u[12],U=u[13],P=u[14],k=u[15];if(l[0].setComponents(p-d,b-v,_-A,k-B).normalize(),l[1].setComponents(p+d,b+v,_+A,k+B).normalize(),l[2].setComponents(p+h,b+g,_+R,k+U).normalize(),l[3].setComponents(p-h,b-g,_-R,k-U).normalize(),r)l[4].setComponents(m,S,y,P).normalize(),l[5].setComponents(p-m,b-S,_-y,k-P).normalize();else if(l[4].setComponents(p-m,b-S,_-y,k-P).normalize(),i===Di)l[5].setComponents(p+m,b+S,_+y,k+P).normalize();else if(i===Ac)l[5].setComponents(m,S,y,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),gr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){gr.center.set(0,0,0);const i=by.distanceTo(e.center);return gr.radius=.7071067811865476+i,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(gc.x=l.normal.x>0?e.max.x:e.min.x,gc.y=l.normal.y>0?e.max.y:e.min.y,gc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(gc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ng extends On{constructor(e,i,r=Ar,l,u,d,h=ti,m=ti,p,v=zo,g=1){if(v!==zo&&v!==Po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:g};super(S,l,u,d,h,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new yh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Og extends On{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Rs extends Za{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const u=e/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,v=m+1,g=e/h,S=i/m,b=[],A=[],R=[],y=[];for(let _=0;_<v;_++){const B=_*S-d;for(let U=0;U<p;U++){const P=U*g-u;A.push(P,-B,0),R.push(0,0,1),y.push(U/h),y.push(1-_/m)}}for(let _=0;_<m;_++)for(let B=0;B<h;B++){const U=B+p*_,P=B+p*(_+1),k=B+1+p*(_+1),N=B+1+p*_;b.push(U,P,N),b.push(P,k,N)}this.setIndex(b),this.setAttribute("position",new Tr(A,3)),this.setAttribute("normal",new Tr(R,3)),this.setAttribute("uv",new Tr(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.width,e.height,e.widthSegments,e.heightSegments)}}class My extends wc{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=OS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ey extends wc{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class zg extends Dg{constructor(e=-1,i=1,r=1,l=-1,u=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,u,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-e,d=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,d=u+p*this.view.width,h-=v*this.view.offsetY,m=h-v*this.view.height}this.projectionMatrix.makeOrthographic(u,d,h,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class Ty extends Si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ay{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}function Ix(o,e,i,r){const l=Ry(r);switch(i){case _g:return o*e;case Sg:return o*e/l.components*l.byteLength;case gh:return o*e/l.components*l.byteLength;case _h:return o*e*2/l.components*l.byteLength;case vh:return o*e*2/l.components*l.byteLength;case vg:return o*e*3/l.components*l.byteLength;case bi:return o*e*4/l.components*l.byteLength;case Sh:return o*e*4/l.components*l.byteLength;case Sc:case yc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case bc:case Mc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Bd:case Id:return Math.max(o,16)*Math.max(e,8)/4;case Pd:case Fd:return Math.max(o,8)*Math.max(e,8)/2;case Hd:case Gd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Vd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case kd:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case Xd:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case Wd:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case qd:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Yd:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case jd:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Zd:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Kd:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Qd:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Jd:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case $d:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case th:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case eh:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case nh:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case ih:case ah:case rh:return Math.ceil(o/4)*Math.ceil(e/4)*16;case sh:case oh:return Math.ceil(o/4)*Math.ceil(e/4)*8;case lh:case ch:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Ry(o){switch(o){case fa:case pg:return{byteLength:1,components:1};case No:case mg:case Cs:return{byteLength:2,components:1};case mh:case xh:return{byteLength:2,components:4};case Ar:case ph:case la:return{byteLength:4,components:1};case xg:case gg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hh}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hh);function Pg(){let o=null,e=!1,i=null,r=null;function l(u,d){i(u,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Cy(o){const e=new WeakMap;function i(h,m){const p=h.array,v=h.usage,g=p.byteLength,S=o.createBuffer();o.bindBuffer(m,S),o.bufferData(m,p,v),h.onUploadCallback();let b;if(p instanceof Float32Array)b=o.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)b=o.HALF_FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?b=o.HALF_FLOAT:b=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)b=o.SHORT;else if(p instanceof Uint32Array)b=o.UNSIGNED_INT;else if(p instanceof Int32Array)b=o.INT;else if(p instanceof Int8Array)b=o.BYTE;else if(p instanceof Uint8Array)b=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)b=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:S,type:b,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:g}}function r(h,m,p){const v=m.array,g=m.updateRanges;if(o.bindBuffer(p,h),g.length===0)o.bufferSubData(p,0,v);else{g.sort((b,A)=>b.start-A.start);let S=0;for(let b=1;b<g.length;b++){const A=g[S],R=g[b];R.start<=A.start+A.count+1?A.count=Math.max(A.count,R.start+R.count-A.start):(++S,g[S]=R)}g.length=S+1;for(let b=0,A=g.length;b<A;b++){const R=g[b];o.bufferSubData(p,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function u(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:u,update:d}}var wy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dy=`#ifdef USE_ALPHAHASH
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
#endif`,Uy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ly=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ny=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Oy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zy=`#ifdef USE_AOMAP
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
#endif`,Py=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,By=`#ifdef USE_BATCHING
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
#endif`,Fy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Iy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vy=`#ifdef USE_IRIDESCENCE
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
#endif`,ky=`#ifdef USE_BUMPMAP
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
#endif`,Xy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Wy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ky=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qy=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Jy=`#define PI 3.141592653589793
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
} // validated`,$y=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tb=`vec3 transformedNormal = objectNormal;
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
#endif`,eb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ib=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ab=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rb="gl_FragColor = linearToOutputTexel( gl_FragColor );",sb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ob=`#ifdef USE_ENVMAP
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
#endif`,lb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cb=`#ifdef USE_ENVMAP
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
#endif`,ub=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fb=`#ifdef USE_ENVMAP
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
#endif`,db=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xb=`#ifdef USE_GRADIENTMAP
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
}`,gb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,_b=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sb=`uniform bool receiveShadow;
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
#endif`,yb=`#ifdef USE_ENVMAP
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
#endif`,bb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Eb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ab=`PhysicalMaterial material;
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
#endif`,Rb=`uniform sampler2D dfgLUT;
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
}`,Cb=`
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
#endif`,wb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Db=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ub=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ob=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Bb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fb=`#if defined( USE_POINTS_UV )
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
#endif`,Ib=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Xb=`#ifdef USE_MORPHTARGETS
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
#endif`,Wb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qb=`#ifdef USE_NORMALMAP
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
#endif`,Jb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$b=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,eM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,aM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,oM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hM=`float getShadowMask() {
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
}`,pM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mM=`#ifdef USE_SKINNING
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
#endif`,xM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,gM=`#ifdef USE_SKINNING
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
#endif`,_M=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,yM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bM=`#ifdef USE_TRANSMISSION
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
#endif`,MM=`#ifdef USE_TRANSMISSION
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
#endif`,EM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const CM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wM=`uniform sampler2D t2D;
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
}`,DM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,LM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OM=`#include <common>
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
}`,zM=`#if DEPTH_PACKING == 3200
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
}`,PM=`#define DISTANCE
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
}`,BM=`#define DISTANCE
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
}`,FM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,IM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HM=`uniform float scale;
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
}`,GM=`uniform vec3 diffuse;
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
}`,VM=`#include <common>
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
}`,kM=`uniform vec3 diffuse;
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
}`,XM=`#define LAMBERT
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
}`,WM=`#define LAMBERT
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
}`,qM=`#define MATCAP
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
}`,YM=`#define MATCAP
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
}`,jM=`#define NORMAL
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
}`,ZM=`#define NORMAL
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
}`,KM=`#define PHONG
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
}`,QM=`#define PHONG
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
}`,JM=`#define STANDARD
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
}`,$M=`#define STANDARD
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
}`,t3=`#define TOON
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
}`,e3=`#define TOON
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
}`,n3=`uniform float size;
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
}`,i3=`uniform vec3 diffuse;
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
}`,a3=`#include <common>
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
}`,r3=`uniform vec3 color;
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
}`,s3=`uniform float rotation;
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
}`,o3=`uniform vec3 diffuse;
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
}`,pe={alphahash_fragment:wy,alphahash_pars_fragment:Dy,alphamap_fragment:Uy,alphamap_pars_fragment:Ly,alphatest_fragment:Ny,alphatest_pars_fragment:Oy,aomap_fragment:zy,aomap_pars_fragment:Py,batching_pars_vertex:By,batching_vertex:Fy,begin_vertex:Iy,beginnormal_vertex:Hy,bsdfs:Gy,iridescence_fragment:Vy,bumpmap_pars_fragment:ky,clipping_planes_fragment:Xy,clipping_planes_pars_fragment:Wy,clipping_planes_pars_vertex:qy,clipping_planes_vertex:Yy,color_fragment:jy,color_pars_fragment:Zy,color_pars_vertex:Ky,color_vertex:Qy,common:Jy,cube_uv_reflection_fragment:$y,defaultnormal_vertex:tb,displacementmap_pars_vertex:eb,displacementmap_vertex:nb,emissivemap_fragment:ib,emissivemap_pars_fragment:ab,colorspace_fragment:rb,colorspace_pars_fragment:sb,envmap_fragment:ob,envmap_common_pars_fragment:lb,envmap_pars_fragment:cb,envmap_pars_vertex:ub,envmap_physical_pars_fragment:yb,envmap_vertex:fb,fog_vertex:db,fog_pars_vertex:hb,fog_fragment:pb,fog_pars_fragment:mb,gradientmap_pars_fragment:xb,lightmap_pars_fragment:gb,lights_lambert_fragment:_b,lights_lambert_pars_fragment:vb,lights_pars_begin:Sb,lights_toon_fragment:bb,lights_toon_pars_fragment:Mb,lights_phong_fragment:Eb,lights_phong_pars_fragment:Tb,lights_physical_fragment:Ab,lights_physical_pars_fragment:Rb,lights_fragment_begin:Cb,lights_fragment_maps:wb,lights_fragment_end:Db,logdepthbuf_fragment:Ub,logdepthbuf_pars_fragment:Lb,logdepthbuf_pars_vertex:Nb,logdepthbuf_vertex:Ob,map_fragment:zb,map_pars_fragment:Pb,map_particle_fragment:Bb,map_particle_pars_fragment:Fb,metalnessmap_fragment:Ib,metalnessmap_pars_fragment:Hb,morphinstance_vertex:Gb,morphcolor_vertex:Vb,morphnormal_vertex:kb,morphtarget_pars_vertex:Xb,morphtarget_vertex:Wb,normal_fragment_begin:qb,normal_fragment_maps:Yb,normal_pars_fragment:jb,normal_pars_vertex:Zb,normal_vertex:Kb,normalmap_pars_fragment:Qb,clearcoat_normal_fragment_begin:Jb,clearcoat_normal_fragment_maps:$b,clearcoat_pars_fragment:tM,iridescence_pars_fragment:eM,opaque_fragment:nM,packing:iM,premultiplied_alpha_fragment:aM,project_vertex:rM,dithering_fragment:sM,dithering_pars_fragment:oM,roughnessmap_fragment:lM,roughnessmap_pars_fragment:cM,shadowmap_pars_fragment:uM,shadowmap_pars_vertex:fM,shadowmap_vertex:dM,shadowmask_pars_fragment:hM,skinbase_vertex:pM,skinning_pars_vertex:mM,skinning_vertex:xM,skinnormal_vertex:gM,specularmap_fragment:_M,specularmap_pars_fragment:vM,tonemapping_fragment:SM,tonemapping_pars_fragment:yM,transmission_fragment:bM,transmission_pars_fragment:MM,uv_pars_fragment:EM,uv_pars_vertex:TM,uv_vertex:AM,worldpos_vertex:RM,background_vert:CM,background_frag:wM,backgroundCube_vert:DM,backgroundCube_frag:UM,cube_vert:LM,cube_frag:NM,depth_vert:OM,depth_frag:zM,distanceRGBA_vert:PM,distanceRGBA_frag:BM,equirect_vert:FM,equirect_frag:IM,linedashed_vert:HM,linedashed_frag:GM,meshbasic_vert:VM,meshbasic_frag:kM,meshlambert_vert:XM,meshlambert_frag:WM,meshmatcap_vert:qM,meshmatcap_frag:YM,meshnormal_vert:jM,meshnormal_frag:ZM,meshphong_vert:KM,meshphong_frag:QM,meshphysical_vert:JM,meshphysical_frag:$M,meshtoon_vert:t3,meshtoon_frag:e3,points_vert:n3,points_frag:i3,shadow_vert:a3,shadow_frag:r3,sprite_vert:s3,sprite_frag:o3},Nt={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new Ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},wi={basic:{uniforms:Nn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.fog]),vertexShader:pe.meshbasic_vert,fragmentShader:pe.meshbasic_frag},lambert:{uniforms:Nn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Ve(0)}}]),vertexShader:pe.meshlambert_vert,fragmentShader:pe.meshlambert_frag},phong:{uniforms:Nn([Nt.common,Nt.specularmap,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,Nt.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:pe.meshphong_vert,fragmentShader:pe.meshphong_frag},standard:{uniforms:Nn([Nt.common,Nt.envmap,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.roughnessmap,Nt.metalnessmap,Nt.fog,Nt.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag},toon:{uniforms:Nn([Nt.common,Nt.aomap,Nt.lightmap,Nt.emissivemap,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.gradientmap,Nt.fog,Nt.lights,{emissive:{value:new Ve(0)}}]),vertexShader:pe.meshtoon_vert,fragmentShader:pe.meshtoon_frag},matcap:{uniforms:Nn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,Nt.fog,{matcap:{value:null}}]),vertexShader:pe.meshmatcap_vert,fragmentShader:pe.meshmatcap_frag},points:{uniforms:Nn([Nt.points,Nt.fog]),vertexShader:pe.points_vert,fragmentShader:pe.points_frag},dashed:{uniforms:Nn([Nt.common,Nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pe.linedashed_vert,fragmentShader:pe.linedashed_frag},depth:{uniforms:Nn([Nt.common,Nt.displacementmap]),vertexShader:pe.depth_vert,fragmentShader:pe.depth_frag},normal:{uniforms:Nn([Nt.common,Nt.bumpmap,Nt.normalmap,Nt.displacementmap,{opacity:{value:1}}]),vertexShader:pe.meshnormal_vert,fragmentShader:pe.meshnormal_frag},sprite:{uniforms:Nn([Nt.sprite,Nt.fog]),vertexShader:pe.sprite_vert,fragmentShader:pe.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pe.background_vert,fragmentShader:pe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:pe.backgroundCube_vert,fragmentShader:pe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pe.cube_vert,fragmentShader:pe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pe.equirect_vert,fragmentShader:pe.equirect_frag},distanceRGBA:{uniforms:Nn([Nt.common,Nt.displacementmap,{referencePosition:{value:new ct},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pe.distanceRGBA_vert,fragmentShader:pe.distanceRGBA_frag},shadow:{uniforms:Nn([Nt.lights,Nt.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:pe.shadow_vert,fragmentShader:pe.shadow_frag}};wi.physical={uniforms:Nn([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new Ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new Ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new Ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:pe.meshphysical_vert,fragmentShader:pe.meshphysical_frag};const _c={r:0,b:0,g:0},_r=new da,l3=new mn;function c3(o,e,i,r,l,u,d){const h=new Ve(0);let m=u===!0?0:1,p,v,g=null,S=0,b=null;function A(U){let P=U.isScene===!0?U.background:null;return P&&P.isTexture&&(P=(U.backgroundBlurriness>0?i:e).get(P)),P}function R(U){let P=!1;const k=A(U);k===null?_(h,m):k&&k.isColor&&(_(k,1),P=!0);const N=o.xr.getEnvironmentBlendMode();N==="additive"?r.buffers.color.setClear(0,0,0,1,d):N==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||P)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(U,P){const k=A(P);k&&(k.isCubeTexture||k.mapping===Cc)?(v===void 0&&(v=new Li(new Go(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:As(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(N,F,nt){this.matrixWorld.copyPosition(nt.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),_r.copy(P.backgroundRotation),_r.x*=-1,_r.y*=-1,_r.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),v.material.uniforms.envMap.value=k,v.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=P.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(l3.makeRotationFromEuler(_r)),v.material.toneMapped=De.getTransfer(k.colorSpace)!==Ge,(g!==k||S!==k.version||b!==o.toneMapping)&&(v.material.needsUpdate=!0,g=k,S=k.version,b=o.toneMapping),v.layers.enableAll(),U.unshift(v,v.geometry,v.material,0,0,null)):k&&k.isTexture&&(p===void 0&&(p=new Li(new Rs(2,2),new Mi({name:"BackgroundMaterial",uniforms:As(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Ya,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=k,p.material.uniforms.backgroundIntensity.value=P.backgroundIntensity,p.material.toneMapped=De.getTransfer(k.colorSpace)!==Ge,k.matrixAutoUpdate===!0&&k.updateMatrix(),p.material.uniforms.uvTransform.value.copy(k.matrix),(g!==k||S!==k.version||b!==o.toneMapping)&&(p.material.needsUpdate=!0,g=k,S=k.version,b=o.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null))}function _(U,P){U.getRGB(_c,wg(o)),r.buffers.color.setClear(_c.r,_c.g,_c.b,P,d)}function B(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return h},setClearColor:function(U,P=1){h.set(U),m=P,_(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(U){m=U,_(h,m)},render:R,addToRenderList:y,dispose:B}}function u3(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=S(null);let u=l,d=!1;function h(C,V,tt,ot,mt){let ft=!1;const z=g(ot,tt,V);u!==z&&(u=z,p(u.object)),ft=b(C,ot,tt,mt),ft&&A(C,ot,tt,mt),mt!==null&&e.update(mt,o.ELEMENT_ARRAY_BUFFER),(ft||d)&&(d=!1,P(C,V,tt,ot),mt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(mt).buffer))}function m(){return o.createVertexArray()}function p(C){return o.bindVertexArray(C)}function v(C){return o.deleteVertexArray(C)}function g(C,V,tt){const ot=tt.wireframe===!0;let mt=r[C.id];mt===void 0&&(mt={},r[C.id]=mt);let ft=mt[V.id];ft===void 0&&(ft={},mt[V.id]=ft);let z=ft[ot];return z===void 0&&(z=S(m()),ft[ot]=z),z}function S(C){const V=[],tt=[],ot=[];for(let mt=0;mt<i;mt++)V[mt]=0,tt[mt]=0,ot[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:tt,attributeDivisors:ot,object:C,attributes:{},index:null}}function b(C,V,tt,ot){const mt=u.attributes,ft=V.attributes;let z=0;const j=tt.getAttributes();for(const Y in j)if(j[Y].location>=0){const _t=mt[Y];let L=ft[Y];if(L===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(L=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(L=C.instanceColor)),_t===void 0||_t.attribute!==L||L&&_t.data!==L.data)return!0;z++}return u.attributesNum!==z||u.index!==ot}function A(C,V,tt,ot){const mt={},ft=V.attributes;let z=0;const j=tt.getAttributes();for(const Y in j)if(j[Y].location>=0){let _t=ft[Y];_t===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(_t=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(_t=C.instanceColor));const L={};L.attribute=_t,_t&&_t.data&&(L.data=_t.data),mt[Y]=L,z++}u.attributes=mt,u.attributesNum=z,u.index=ot}function R(){const C=u.newAttributes;for(let V=0,tt=C.length;V<tt;V++)C[V]=0}function y(C){_(C,0)}function _(C,V){const tt=u.newAttributes,ot=u.enabledAttributes,mt=u.attributeDivisors;tt[C]=1,ot[C]===0&&(o.enableVertexAttribArray(C),ot[C]=1),mt[C]!==V&&(o.vertexAttribDivisor(C,V),mt[C]=V)}function B(){const C=u.newAttributes,V=u.enabledAttributes;for(let tt=0,ot=V.length;tt<ot;tt++)V[tt]!==C[tt]&&(o.disableVertexAttribArray(tt),V[tt]=0)}function U(C,V,tt,ot,mt,ft,z){z===!0?o.vertexAttribIPointer(C,V,tt,mt,ft):o.vertexAttribPointer(C,V,tt,ot,mt,ft)}function P(C,V,tt,ot){R();const mt=ot.attributes,ft=tt.getAttributes(),z=V.defaultAttributeValues;for(const j in ft){const Y=ft[j];if(Y.location>=0){let gt=mt[j];if(gt===void 0&&(j==="instanceMatrix"&&C.instanceMatrix&&(gt=C.instanceMatrix),j==="instanceColor"&&C.instanceColor&&(gt=C.instanceColor)),gt!==void 0){const _t=gt.normalized,L=gt.itemSize,at=e.get(gt);if(at===void 0)continue;const yt=at.buffer,Tt=at.type,zt=at.bytesPerElement,et=Tt===o.INT||Tt===o.UNSIGNED_INT||gt.gpuType===ph;if(gt.isInterleavedBufferAttribute){const lt=gt.data,wt=lt.stride,Ht=gt.offset;if(lt.isInstancedInterleavedBuffer){for(let Xt=0;Xt<Y.locationSize;Xt++)_(Y.location+Xt,lt.meshPerAttribute);C.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Xt=0;Xt<Y.locationSize;Xt++)y(Y.location+Xt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let Xt=0;Xt<Y.locationSize;Xt++)U(Y.location+Xt,L/Y.locationSize,Tt,_t,wt*zt,(Ht+L/Y.locationSize*Xt)*zt,et)}else{if(gt.isInstancedBufferAttribute){for(let lt=0;lt<Y.locationSize;lt++)_(Y.location+lt,gt.meshPerAttribute);C.isInstancedMesh!==!0&&ot._maxInstanceCount===void 0&&(ot._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let lt=0;lt<Y.locationSize;lt++)y(Y.location+lt);o.bindBuffer(o.ARRAY_BUFFER,yt);for(let lt=0;lt<Y.locationSize;lt++)U(Y.location+lt,L/Y.locationSize,Tt,_t,L*zt,L/Y.locationSize*lt*zt,et)}}else if(z!==void 0){const _t=z[j];if(_t!==void 0)switch(_t.length){case 2:o.vertexAttrib2fv(Y.location,_t);break;case 3:o.vertexAttrib3fv(Y.location,_t);break;case 4:o.vertexAttrib4fv(Y.location,_t);break;default:o.vertexAttrib1fv(Y.location,_t)}}}}B()}function k(){nt();for(const C in r){const V=r[C];for(const tt in V){const ot=V[tt];for(const mt in ot)v(ot[mt].object),delete ot[mt];delete V[tt]}delete r[C]}}function N(C){if(r[C.id]===void 0)return;const V=r[C.id];for(const tt in V){const ot=V[tt];for(const mt in ot)v(ot[mt].object),delete ot[mt];delete V[tt]}delete r[C.id]}function F(C){for(const V in r){const tt=r[V];if(tt[C.id]===void 0)continue;const ot=tt[C.id];for(const mt in ot)v(ot[mt].object),delete ot[mt];delete tt[C.id]}}function nt(){w(),d=!0,u!==l&&(u=l,p(u.object))}function w(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:nt,resetDefaultState:w,dispose:k,releaseStatesOfGeometry:N,releaseStatesOfProgram:F,initAttributes:R,enableAttribute:y,disableUnusedAttributes:B}}function f3(o,e,i){let r;function l(p){r=p}function u(p,v){o.drawArrays(r,p,v),i.update(v,r,1)}function d(p,v,g){g!==0&&(o.drawArraysInstanced(r,p,v,g),i.update(v,r,g))}function h(p,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,g);let b=0;for(let A=0;A<g;A++)b+=v[A];i.update(b,r,1)}function m(p,v,g,S){if(g===0)return;const b=e.get("WEBGL_multi_draw");if(b===null)for(let A=0;A<p.length;A++)d(p[A],v[A],S[A]);else{b.multiDrawArraysInstancedWEBGL(r,p,0,v,0,S,0,g);let A=0;for(let R=0;R<g;R++)A+=v[R]*S[R];i.update(A,r,1)}}this.setMode=l,this.render=u,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function d3(o,e,i,r){let l;function u(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(F){return!(F!==bi&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(F){const nt=F===Cs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==fa&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==la&&!nt)}function m(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(oe("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),b=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),_=o.getParameter(o.MAX_VERTEX_ATTRIBS),B=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),U=o.getParameter(o.MAX_VARYING_VECTORS),P=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),k=A>0,N=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:S,maxTextures:b,maxVertexTextures:A,maxTextureSize:R,maxCubemapSize:y,maxAttributes:_,maxVertexUniforms:B,maxVaryings:U,maxFragmentUniforms:P,vertexTextures:k,maxSamples:N}}function h3(o){const e=this;let i=null,r=0,l=!1,u=!1;const d=new Sr,h=new fe,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,S){const b=g.length!==0||S||r!==0||l;return l=S,r=g.length,b},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,S){i=v(g,S,0)},this.setState=function(g,S,b){const A=g.clippingPlanes,R=g.clipIntersection,y=g.clipShadows,_=o.get(g);if(!l||A===null||A.length===0||u&&!y)u?v(null):p();else{const B=u?0:r,U=B*4;let P=_.clippingState||null;m.value=P,P=v(A,S,U,b);for(let k=0;k!==U;++k)P[k]=i[k];_.clippingState=P,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=B}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(g,S,b,A){const R=g!==null?g.length:0;let y=null;if(R!==0){if(y=m.value,A!==!0||y===null){const _=b+R*4,B=S.matrixWorldInverse;h.getNormalMatrix(B),(y===null||y.length<_)&&(y=new Float32Array(_));for(let U=0,P=b;U!==R;++U,P+=4)d.copy(g[U]).applyMatrix4(B,h),d.normal.toArray(y,P),y[P+3]=d.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}function p3(o){let e=new WeakMap;function i(d,h){return h===Ld?d.mapping=Ms:h===Nd&&(d.mapping=Es),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===Ld||h===Nd)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new gy(m.height);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap}return{get:r,dispose:u}}const Wa=4,Hx=[.125,.215,.35,.446,.526,.582],br=20,m3=256,Uo=new zg,Gx=new Ve;let xd=null,gd=0,_d=0,vd=!1;const x3=new ct;class Vx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,u={}){const{size:d=256,position:h=x3}=u;xd=this._renderer.getRenderTarget(),gd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,r,l,m,h),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Xx(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(xd,gd,_d),this._renderer.xr.enabled=vd,e.scissorTest=!1,_s(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ms||e.mapping===Es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),xd=this._renderer.getRenderTarget(),gd=this._renderer.getActiveCubeFace(),_d=this._renderer.getActiveMipmapLevel(),vd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:di,minFilter:di,generateMipmaps:!1,type:Cs,format:bi,colorSpace:Ts,depthBuffer:!1},l=kx(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kx(e,i,r);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=g3(u)),this._blurMaterial=v3(u,e,i)}return l}_compileMaterial(e){const i=new Li(new Za,e);this._renderer.compile(i,Uo)}_sceneToCubeUV(e,i,r,l,u){const m=new Si(90,1,i,r),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,b=g.toneMapping;g.getClearColor(Gx),g.toneMapping=qa,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Li(new Go,new Ag({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,y=R.material;let _=!1;const B=e.background;B?B.isColor&&(y.color.copy(B),e.background=null,_=!0):(y.color.copy(Gx),_=!0);for(let U=0;U<6;U++){const P=U%3;P===0?(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+v[U],u.y,u.z)):P===1?(m.up.set(0,0,p[U]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+v[U],u.z)):(m.up.set(0,p[U],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+v[U]));const k=this._cubeSize;_s(l,P*k,U>2?k:0,k,k),g.setRenderTarget(l),_&&g.render(R,m),g.render(e,m)}g.toneMapping=b,g.autoClear=S,e.background=B}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Ms||e.mapping===Es;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Xx());const u=l?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=u;const h=u.uniforms;h.envMap.value=e;const m=this._cubeSize;_s(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,Uo)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(e,u-1,u);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,u=this._pingPongRenderTarget;if(this._ggxMaterial===null){const B=3*Math.max(this._cubeSize,16),U=4*this._cubeSize;this._ggxMaterial=_3(this._lodMax,B,U)}const d=this._ggxMaterial,h=this._lodMeshes[r];h.material=d;const m=d.uniforms,p=r/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-v*v),S=.05+p*.95,b=g*S,{_lodMax:A}=this,R=this._sizeLods[r],y=3*R*(r>A-Wa?r-A+Wa:0),_=4*(this._cubeSize-R);m.envMap.value=e.texture,m.roughness.value=b,m.mipInt.value=A-i,_s(u,y,_,3*R,2*R),l.setRenderTarget(u),l.render(h,Uo),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=A-r,_s(e,y,_,3*R,2*R),l.setRenderTarget(e),l.render(h,Uo)}_blur(e,i,r,l,u){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",u),this._halfBlur(d,e,r,r,l,"longitudinal",u)}_halfBlur(e,i,r,l,u,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&nn("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[l];g.material=p;const S=p.uniforms,b=this._sizeLods[r]-1,A=isFinite(u)?Math.PI/(2*b):2*Math.PI/(2*br-1),R=u/A,y=isFinite(u)?1+Math.floor(v*R):br;y>br&&oe(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${br}`);const _=[];let B=0;for(let F=0;F<br;++F){const nt=F/R,w=Math.exp(-nt*nt/2);_.push(w),F===0?B+=w:F<y&&(B+=2*w)}for(let F=0;F<_.length;F++)_[F]=_[F]/B;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=_,S.latitudinal.value=d==="latitudinal",h&&(S.poleAxis.value=h);const{_lodMax:U}=this;S.dTheta.value=A,S.mipInt.value=U-r;const P=this._sizeLods[l],k=3*P*(l>U-Wa?l-U+Wa:0),N=4*(this._cubeSize-P);_s(i,k,N,3*P,2*P),m.setRenderTarget(i),m.render(g,Uo)}}function g3(o){const e=[],i=[],r=[];let l=o;const u=o-Wa+1+Hx.length;for(let d=0;d<u;d++){const h=Math.pow(2,l);e.push(h);let m=1/h;d>o-Wa?m=Hx[d-o+Wa-1]:d===0&&(m=0),i.push(m);const p=1/(h-2),v=-p,g=1+p,S=[v,v,g,v,g,g,v,v,g,g,v,g],b=6,A=6,R=3,y=2,_=1,B=new Float32Array(R*A*b),U=new Float32Array(y*A*b),P=new Float32Array(_*A*b);for(let N=0;N<b;N++){const F=N%3*2/3-1,nt=N>2?0:-1,w=[F,nt,0,F+2/3,nt,0,F+2/3,nt+1,0,F,nt,0,F+2/3,nt+1,0,F,nt+1,0];B.set(w,R*A*N),U.set(S,y*A*N);const C=[N,N,N,N,N,N];P.set(C,_*A*N)}const k=new Za;k.setAttribute("position",new Ui(B,R)),k.setAttribute("uv",new Ui(U,y)),k.setAttribute("faceIndex",new Ui(P,_)),r.push(new Li(k,null)),l>Wa&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function kx(o,e,i){const r=new ja(o,e,i);return r.texture.mapping=Cc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function _s(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function _3(o,e,i){return new Mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:m3,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:ca,depthTest:!1,depthWrite:!1})}function v3(o,e,i){const r=new Float32Array(br),l=new ct(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:br,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:ca,depthTest:!1,depthWrite:!1})}function Xx(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Dc(),fragmentShader:`

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
		`,blending:ca,depthTest:!1,depthWrite:!1})}function Wx(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Dc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ca,depthTest:!1,depthWrite:!1})}function Dc(){return`

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
	`}function S3(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===Ld||m===Nd,v=m===Ms||m===Es;if(p||v){let g=e.get(h);const S=g!==void 0?g.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==S)return i===null&&(i=new Vx(o)),g=p?i.fromEquirectangular(h,g):i.fromCubemap(h,g),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),g.texture;if(g!==void 0)return g.texture;{const b=h.image;return p&&b&&b.height>0||v&&b&&l(b)?(i===null&&(i=new Vx(o)),g=p?i.fromEquirectangular(h):i.fromCubemap(h),g.texture.pmremVersion=h.pmremVersion,e.set(h,g),h.addEventListener("dispose",u),g.texture):null}}}return h}function l(h){let m=0;const p=6;for(let v=0;v<p;v++)h[v]!==void 0&&m++;return m===p}function u(h){const m=h.target;m.removeEventListener("dispose",u);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function y3(o){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=o.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&Bo("WebGLRenderer: "+r+" extension not supported."),l}}}function b3(o,e,i,r){const l={},u=new WeakMap;function d(g){const S=g.target;S.index!==null&&e.remove(S.index);for(const A in S.attributes)e.remove(S.attributes[A]);S.removeEventListener("dispose",d),delete l[S.id];const b=u.get(S);b&&(e.remove(b),u.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function h(g,S){return l[S.id]===!0||(S.addEventListener("dispose",d),l[S.id]=!0,i.memory.geometries++),S}function m(g){const S=g.attributes;for(const b in S)e.update(S[b],o.ARRAY_BUFFER)}function p(g){const S=[],b=g.index,A=g.attributes.position;let R=0;if(b!==null){const B=b.array;R=b.version;for(let U=0,P=B.length;U<P;U+=3){const k=B[U+0],N=B[U+1],F=B[U+2];S.push(k,N,N,F,F,k)}}else if(A!==void 0){const B=A.array;R=A.version;for(let U=0,P=B.length/3-1;U<P;U+=3){const k=U+0,N=U+1,F=U+2;S.push(k,N,N,F,F,k)}}else return;const y=new(bg(S)?Cg:Rg)(S,1);y.version=R;const _=u.get(g);_&&e.remove(_),u.set(g,y)}function v(g){const S=u.get(g);if(S){const b=g.index;b!==null&&S.version<b.version&&p(g)}else p(g);return u.get(g)}return{get:h,update:m,getWireframeAttribute:v}}function M3(o,e,i){let r;function l(S){r=S}let u,d;function h(S){u=S.type,d=S.bytesPerElement}function m(S,b){o.drawElements(r,b,u,S*d),i.update(b,r,1)}function p(S,b,A){A!==0&&(o.drawElementsInstanced(r,b,u,S*d,A),i.update(b,r,A))}function v(S,b,A){if(A===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,b,0,u,S,0,A);let y=0;for(let _=0;_<A;_++)y+=b[_];i.update(y,r,1)}function g(S,b,A,R){if(A===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let _=0;_<S.length;_++)p(S[_]/d,b[_],R[_]);else{y.multiDrawElementsInstancedWEBGL(r,b,0,u,S,0,R,0,A);let _=0;for(let B=0;B<A;B++)_+=b[B]*R[B];i.update(_,r,1)}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function E3(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(u/3);break;case o.LINES:i.lines+=h*(u/2);break;case o.LINE_STRIP:i.lines+=h*(u-1);break;case o.LINE_LOOP:i.lines+=h*u;break;case o.POINTS:i.points+=h*u;break;default:nn("WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function T3(o,e,i){const r=new WeakMap,l=new an;function u(d,h,m){const p=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=v!==void 0?v.length:0;let S=r.get(h);if(S===void 0||S.count!==g){let C=function(){nt.dispose(),r.delete(h),h.removeEventListener("dispose",C)};var b=C;S!==void 0&&S.texture.dispose();const A=h.morphAttributes.position!==void 0,R=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,_=h.morphAttributes.position||[],B=h.morphAttributes.normal||[],U=h.morphAttributes.color||[];let P=0;A===!0&&(P=1),R===!0&&(P=2),y===!0&&(P=3);let k=h.attributes.position.count*P,N=1;k>e.maxTextureSize&&(N=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const F=new Float32Array(k*N*4*g),nt=new Mg(F,k,N,g);nt.type=la,nt.needsUpdate=!0;const w=P*4;for(let V=0;V<g;V++){const tt=_[V],ot=B[V],mt=U[V],ft=k*N*4*V;for(let z=0;z<tt.count;z++){const j=z*w;A===!0&&(l.fromBufferAttribute(tt,z),F[ft+j+0]=l.x,F[ft+j+1]=l.y,F[ft+j+2]=l.z,F[ft+j+3]=0),R===!0&&(l.fromBufferAttribute(ot,z),F[ft+j+4]=l.x,F[ft+j+5]=l.y,F[ft+j+6]=l.z,F[ft+j+7]=0),y===!0&&(l.fromBufferAttribute(mt,z),F[ft+j+8]=l.x,F[ft+j+9]=l.y,F[ft+j+10]=l.z,F[ft+j+11]=mt.itemSize===4?l.w:1)}}S={count:g,texture:nt,size:new Ue(k,N)},r.set(h,S),h.addEventListener("dispose",C)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let A=0;for(let y=0;y<p.length;y++)A+=p[y];const R=h.morphTargetsRelative?1:1-A;m.getUniforms().setValue(o,"morphTargetBaseInfluence",R),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",S.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",S.size)}return{update:u}}function A3(o,e,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,v=m.geometry,g=e.get(m,v);if(l.get(g)!==p&&(e.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const S=m.skeleton;l.get(S)!==p&&(S.update(),l.set(S,p))}return g}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:d}}const Bg=new On,qx=new Ng(1,1),Fg=new Mg,Ig=new $S,Hg=new Ug,Yx=[],jx=[],Zx=new Float32Array(16),Kx=new Float32Array(9),Qx=new Float32Array(4);function Ds(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let u=Yx[l];if(u===void 0&&(u=new Float32Array(l),Yx[l]=u),e!==0){r.toArray(u,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(u,h)}return u}function xn(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function gn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Uc(o,e){let i=jx[e];i===void 0&&(i=new Int32Array(e),jx[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function R3(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function C3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2fv(this.addr,e),gn(i,e)}}function w3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(xn(i,e))return;o.uniform3fv(this.addr,e),gn(i,e)}}function D3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4fv(this.addr,e),gn(i,e)}}function U3(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(xn(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),gn(i,e)}else{if(xn(i,r))return;Qx.set(r),o.uniformMatrix2fv(this.addr,!1,Qx),gn(i,r)}}function L3(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(xn(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),gn(i,e)}else{if(xn(i,r))return;Kx.set(r),o.uniformMatrix3fv(this.addr,!1,Kx),gn(i,r)}}function N3(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(xn(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),gn(i,e)}else{if(xn(i,r))return;Zx.set(r),o.uniformMatrix4fv(this.addr,!1,Zx),gn(i,r)}}function O3(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function z3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2iv(this.addr,e),gn(i,e)}}function P3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;o.uniform3iv(this.addr,e),gn(i,e)}}function B3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4iv(this.addr,e),gn(i,e)}}function F3(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function I3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(xn(i,e))return;o.uniform2uiv(this.addr,e),gn(i,e)}}function H3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(xn(i,e))return;o.uniform3uiv(this.addr,e),gn(i,e)}}function G3(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(xn(i,e))return;o.uniform4uiv(this.addr,e),gn(i,e)}}function V3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(qx.compareFunction=yg,u=qx):u=Bg,i.setTexture2D(e||u,l)}function k3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Ig,l)}function X3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Hg,l)}function W3(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Fg,l)}function q3(o){switch(o){case 5126:return R3;case 35664:return C3;case 35665:return w3;case 35666:return D3;case 35674:return U3;case 35675:return L3;case 35676:return N3;case 5124:case 35670:return O3;case 35667:case 35671:return z3;case 35668:case 35672:return P3;case 35669:case 35673:return B3;case 5125:return F3;case 36294:return I3;case 36295:return H3;case 36296:return G3;case 35678:case 36198:case 36298:case 36306:case 35682:return V3;case 35679:case 36299:case 36307:return k3;case 35680:case 36300:case 36308:case 36293:return X3;case 36289:case 36303:case 36311:case 36292:return W3}}function Y3(o,e){o.uniform1fv(this.addr,e)}function j3(o,e){const i=Ds(e,this.size,2);o.uniform2fv(this.addr,i)}function Z3(o,e){const i=Ds(e,this.size,3);o.uniform3fv(this.addr,i)}function K3(o,e){const i=Ds(e,this.size,4);o.uniform4fv(this.addr,i)}function Q3(o,e){const i=Ds(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function J3(o,e){const i=Ds(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function $3(o,e){const i=Ds(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function t1(o,e){o.uniform1iv(this.addr,e)}function e1(o,e){o.uniform2iv(this.addr,e)}function n1(o,e){o.uniform3iv(this.addr,e)}function i1(o,e){o.uniform4iv(this.addr,e)}function a1(o,e){o.uniform1uiv(this.addr,e)}function r1(o,e){o.uniform2uiv(this.addr,e)}function s1(o,e){o.uniform3uiv(this.addr,e)}function o1(o,e){o.uniform4uiv(this.addr,e)}function l1(o,e,i){const r=this.cache,l=e.length,u=Uc(i,l);xn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||Bg,u[d])}function c1(o,e,i){const r=this.cache,l=e.length,u=Uc(i,l);xn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Ig,u[d])}function u1(o,e,i){const r=this.cache,l=e.length,u=Uc(i,l);xn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Hg,u[d])}function f1(o,e,i){const r=this.cache,l=e.length,u=Uc(i,l);xn(r,u)||(o.uniform1iv(this.addr,u),gn(r,u));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Fg,u[d])}function d1(o){switch(o){case 5126:return Y3;case 35664:return j3;case 35665:return Z3;case 35666:return K3;case 35674:return Q3;case 35675:return J3;case 35676:return $3;case 5124:case 35670:return t1;case 35667:case 35671:return e1;case 35668:case 35672:return n1;case 35669:case 35673:return i1;case 5125:return a1;case 36294:return r1;case 36295:return s1;case 36296:return o1;case 35678:case 36198:case 36298:case 36306:case 35682:return l1;case 35679:case 36299:case 36307:return c1;case 35680:case 36300:case 36308:case 36293:return u1;case 36289:case 36303:case 36311:case 36292:return f1}}class h1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=q3(i.type)}}class p1{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=d1(i.type)}}class m1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let u=0,d=l.length;u!==d;++u){const h=l[u];h.setValue(e,i[h.id],r)}}}const Sd=/(\w+)(\])?(\[|\.)?/g;function Jx(o,e){o.seq.push(e),o.map[e.id]=e}function x1(o,e,i){const r=o.name,l=r.length;for(Sd.lastIndex=0;;){const u=Sd.exec(r),d=Sd.lastIndex;let h=u[1];const m=u[2]==="]",p=u[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){Jx(i,p===void 0?new h1(h,o,e):new p1(h,o,e));break}else{let g=i.map[h];g===void 0&&(g=new m1(h),Jx(i,g)),i=g}}}class Ec{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=e.getActiveUniform(i,l),d=e.getUniformLocation(i,u.name);x1(u,d,this)}}setValue(e,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let u=0,d=i.length;u!==d;++u){const h=i[u],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,u=e.length;l!==u;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function $x(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const g1=37297;let _1=0;function v1(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),u=Math.min(e+6,i.length);for(let d=l;d<u;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}const tg=new fe;function S1(o){De._getMatrix(tg,De.workingColorSpace,o);const e=`mat3( ${tg.elements.map(i=>i.toFixed(4))} )`;switch(De.getTransfer(o)){case Tc:return[e,"LinearTransferOETF"];case Ge:return[e,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function eg(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),u=(o.getShaderInfoLog(e)||"").trim();if(r&&u==="")return"";const d=/ERROR: 0:(\d+)/.exec(u);if(d){const h=parseInt(d[1]);return i.toUpperCase()+`

`+u+`

`+v1(o.getShaderSource(e),h)}else return u}function y1(o,e){const i=S1(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function b1(o,e){let i;switch(e){case AS:i="Linear";break;case RS:i="Reinhard";break;case CS:i="Cineon";break;case wS:i="ACESFilmic";break;case US:i="AgX";break;case LS:i="Neutral";break;case DS:i="Custom";break;default:oe("WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const vc=new ct;function M1(){De.getLuminanceCoefficients(vc);const o=vc.x.toFixed(4),e=vc.y.toFixed(4),i=vc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E1(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lo).join(`
`)}function T1(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function A1(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(e,l),d=u.name;let h=1;u.type===o.FLOAT_MAT2&&(h=2),u.type===o.FLOAT_MAT3&&(h=3),u.type===o.FLOAT_MAT4&&(h=4),i[d]={type:u.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Lo(o){return o!==""}function ng(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ig(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const R1=/^[ \t]*#include +<([\w\d./]+)>/gm;function fh(o){return o.replace(R1,w1)}const C1=new Map;function w1(o,e){let i=pe[e];if(i===void 0){const r=C1.get(e);if(r!==void 0)i=pe[r],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return fh(i)}const D1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ag(o){return o.replace(D1,U1)}function U1(o,e,i,r){let l="";for(let u=parseInt(e);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function rg(o){let e=`precision ${o.precision} float;
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
#define LOW_PRECISION`),e}function L1(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===fg?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===rS?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ra&&(e="SHADOWMAP_TYPE_VSM"),e}function N1(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ms:case Es:e="ENVMAP_TYPE_CUBE";break;case Cc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function O1(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case Es:e="ENVMAP_MODE_REFRACTION";break}return e}function z1(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case dg:e="ENVMAP_BLENDING_MULTIPLY";break;case ES:e="ENVMAP_BLENDING_MIX";break;case TS:e="ENVMAP_BLENDING_ADD";break}return e}function P1(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function B1(o,e,i,r){const l=o.getContext(),u=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=L1(i),p=N1(i),v=O1(i),g=z1(i),S=P1(i),b=E1(i),A=T1(u),R=l.createProgram();let y,_,B=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Lo).join(`
`),y.length>0&&(y+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A].filter(Lo).join(`
`),_.length>0&&(_+=`
`)):(y=[rg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lo).join(`
`),_=[rg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,A,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==qa?"#define TONE_MAPPING":"",i.toneMapping!==qa?pe.tonemapping_pars_fragment:"",i.toneMapping!==qa?b1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",pe.colorspace_pars_fragment,y1("linearToOutputTexel",i.outputColorSpace),M1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Lo).join(`
`)),d=fh(d),d=ng(d,i),d=ig(d,i),h=fh(h),h=ng(h,i),h=ig(h,i),d=ag(d),h=ag(h),i.isRawShaderMaterial!==!0&&(B=`#version 300 es
`,y=[b,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,_=["#define varying in",i.glslVersion===vx?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===vx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const U=B+y+d,P=B+_+h,k=$x(l,l.VERTEX_SHADER,U),N=$x(l,l.FRAGMENT_SHADER,P);l.attachShader(R,k),l.attachShader(R,N),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function F(V){if(o.debug.checkShaderErrors){const tt=l.getProgramInfoLog(R)||"",ot=l.getShaderInfoLog(k)||"",mt=l.getShaderInfoLog(N)||"",ft=tt.trim(),z=ot.trim(),j=mt.trim();let Y=!0,gt=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(Y=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,R,k,N);else{const _t=eg(l,k,"vertex"),L=eg(l,N,"fragment");nn("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+ft+`
`+_t+`
`+L)}else ft!==""?oe("WebGLProgram: Program Info Log:",ft):(z===""||j==="")&&(gt=!1);gt&&(V.diagnostics={runnable:Y,programLog:ft,vertexShader:{log:z,prefix:y},fragmentShader:{log:j,prefix:_}})}l.deleteShader(k),l.deleteShader(N),nt=new Ec(l,R),w=A1(l,R)}let nt;this.getUniforms=function(){return nt===void 0&&F(this),nt};let w;this.getAttributes=function(){return w===void 0&&F(this),w};let C=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=l.getProgramParameter(R,g1)),C},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=_1++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=k,this.fragmentShader=N,this}let F1=0;class I1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(u)===!1&&(d.add(u),u.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new H1(e),i.set(e,r)),r}}class H1{constructor(e){this.id=F1++,this.code=e,this.usedTimes=0}}function G1(o,e,i,r,l,u,d){const h=new Eg,m=new I1,p=new Set,v=[],g=l.logarithmicDepthBuffer,S=l.vertexTextures;let b=l.precision;const A={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(w){return p.add(w),w===0?"uv":`uv${w}`}function y(w,C,V,tt,ot){const mt=tt.fog,ft=ot.geometry,z=w.isMeshStandardMaterial?tt.environment:null,j=(w.isMeshStandardMaterial?i:e).get(w.envMap||z),Y=j&&j.mapping===Cc?j.image.height:null,gt=A[w.type];w.precision!==null&&(b=l.getMaxPrecision(w.precision),b!==w.precision&&oe("WebGLProgram.getParameters:",w.precision,"not supported, using",b,"instead."));const _t=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,L=_t!==void 0?_t.length:0;let at=0;ft.morphAttributes.position!==void 0&&(at=1),ft.morphAttributes.normal!==void 0&&(at=2),ft.morphAttributes.color!==void 0&&(at=3);let yt,Tt,zt,et;if(gt){const Ae=wi[gt];yt=Ae.vertexShader,Tt=Ae.fragmentShader}else yt=w.vertexShader,Tt=w.fragmentShader,m.update(w),zt=m.getVertexShaderID(w),et=m.getFragmentShaderID(w);const lt=o.getRenderTarget(),wt=o.state.buffers.depth.getReversed(),Ht=ot.isInstancedMesh===!0,Xt=ot.isBatchedMesh===!0,le=!!w.map,$e=!!w.matcap,de=!!j,Te=!!w.aoMap,I=!!w.lightMap,he=!!w.bumpMap,me=!!w.normalMap,Oe=!!w.displacementMap,Gt=!!w.emissiveMap,ke=!!w.metalnessMap,jt=!!w.roughnessMap,ae=w.anisotropy>0,D=w.clearcoat>0,M=w.dispersion>0,K=w.iridescence>0,ht=w.sheen>0,vt=w.transmission>0,st=ae&&!!w.anisotropyMap,qt=D&&!!w.clearcoatMap,Lt=D&&!!w.clearcoatNormalMap,Qt=D&&!!w.clearcoatRoughnessMap,Wt=K&&!!w.iridescenceMap,St=K&&!!w.iridescenceThicknessMap,Mt=ht&&!!w.sheenColorMap,Yt=ht&&!!w.sheenRoughnessMap,Vt=!!w.specularMap,Ot=!!w.specularColorMap,ne=!!w.specularIntensityMap,H=vt&&!!w.transmissionMap,Dt=vt&&!!w.thicknessMap,Rt=!!w.gradientMap,Ct=!!w.alphaMap,bt=w.alphaTest>0,xt=!!w.alphaHash,Bt=!!w.extensions;let ie=qa;w.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ie=o.toneMapping);const Be={shaderID:gt,shaderType:w.type,shaderName:w.name,vertexShader:yt,fragmentShader:Tt,defines:w.defines,customVertexShaderID:zt,customFragmentShaderID:et,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:b,batching:Xt,batchingColor:Xt&&ot._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&ot.instanceColor!==null,instancingMorph:Ht&&ot.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:lt===null?o.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Ts,alphaToCoverage:!!w.alphaToCoverage,map:le,matcap:$e,envMap:de,envMapMode:de&&j.mapping,envMapCubeUVHeight:Y,aoMap:Te,lightMap:I,bumpMap:he,normalMap:me,displacementMap:S&&Oe,emissiveMap:Gt,normalMapObjectSpace:me&&w.normalMapType===BS,normalMapTangentSpace:me&&w.normalMapType===PS,metalnessMap:ke,roughnessMap:jt,anisotropy:ae,anisotropyMap:st,clearcoat:D,clearcoatMap:qt,clearcoatNormalMap:Lt,clearcoatRoughnessMap:Qt,dispersion:M,iridescence:K,iridescenceMap:Wt,iridescenceThicknessMap:St,sheen:ht,sheenColorMap:Mt,sheenRoughnessMap:Yt,specularMap:Vt,specularColorMap:Ot,specularIntensityMap:ne,transmission:vt,transmissionMap:H,thicknessMap:Dt,gradientMap:Rt,opaque:w.transparent===!1&&w.blending===Ss&&w.alphaToCoverage===!1,alphaMap:Ct,alphaTest:bt,alphaHash:xt,combine:w.combine,mapUv:le&&R(w.map.channel),aoMapUv:Te&&R(w.aoMap.channel),lightMapUv:I&&R(w.lightMap.channel),bumpMapUv:he&&R(w.bumpMap.channel),normalMapUv:me&&R(w.normalMap.channel),displacementMapUv:Oe&&R(w.displacementMap.channel),emissiveMapUv:Gt&&R(w.emissiveMap.channel),metalnessMapUv:ke&&R(w.metalnessMap.channel),roughnessMapUv:jt&&R(w.roughnessMap.channel),anisotropyMapUv:st&&R(w.anisotropyMap.channel),clearcoatMapUv:qt&&R(w.clearcoatMap.channel),clearcoatNormalMapUv:Lt&&R(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qt&&R(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Wt&&R(w.iridescenceMap.channel),iridescenceThicknessMapUv:St&&R(w.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&R(w.sheenColorMap.channel),sheenRoughnessMapUv:Yt&&R(w.sheenRoughnessMap.channel),specularMapUv:Vt&&R(w.specularMap.channel),specularColorMapUv:Ot&&R(w.specularColorMap.channel),specularIntensityMapUv:ne&&R(w.specularIntensityMap.channel),transmissionMapUv:H&&R(w.transmissionMap.channel),thicknessMapUv:Dt&&R(w.thicknessMap.channel),alphaMapUv:Ct&&R(w.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(me||ae),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:ot.isPoints===!0&&!!ft.attributes.uv&&(le||Ct),fog:!!mt,useFog:w.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:w.flatShading===!0&&w.wireframe===!1,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:wt,skinning:ot.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:at,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:w.dithering,shadowMapEnabled:o.shadowMap.enabled&&V.length>0,shadowMapType:o.shadowMap.type,toneMapping:ie,decodeVideoTexture:le&&w.map.isVideoTexture===!0&&De.getTransfer(w.map.colorSpace)===Ge,decodeVideoTextureEmissive:Gt&&w.emissiveMap.isVideoTexture===!0&&De.getTransfer(w.emissiveMap.colorSpace)===Ge,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===sa,flipSided:w.side===Vn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Bt&&w.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&w.extensions.multiDraw===!0||Xt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Be.vertexUv1s=p.has(1),Be.vertexUv2s=p.has(2),Be.vertexUv3s=p.has(3),p.clear(),Be}function _(w){const C=[];if(w.shaderID?C.push(w.shaderID):(C.push(w.customVertexShaderID),C.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)C.push(V),C.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(B(C,w),U(C,w),C.push(o.outputColorSpace)),C.push(w.customProgramCacheKey),C.join()}function B(w,C){w.push(C.precision),w.push(C.outputColorSpace),w.push(C.envMapMode),w.push(C.envMapCubeUVHeight),w.push(C.mapUv),w.push(C.alphaMapUv),w.push(C.lightMapUv),w.push(C.aoMapUv),w.push(C.bumpMapUv),w.push(C.normalMapUv),w.push(C.displacementMapUv),w.push(C.emissiveMapUv),w.push(C.metalnessMapUv),w.push(C.roughnessMapUv),w.push(C.anisotropyMapUv),w.push(C.clearcoatMapUv),w.push(C.clearcoatNormalMapUv),w.push(C.clearcoatRoughnessMapUv),w.push(C.iridescenceMapUv),w.push(C.iridescenceThicknessMapUv),w.push(C.sheenColorMapUv),w.push(C.sheenRoughnessMapUv),w.push(C.specularMapUv),w.push(C.specularColorMapUv),w.push(C.specularIntensityMapUv),w.push(C.transmissionMapUv),w.push(C.thicknessMapUv),w.push(C.combine),w.push(C.fogExp2),w.push(C.sizeAttenuation),w.push(C.morphTargetsCount),w.push(C.morphAttributeCount),w.push(C.numDirLights),w.push(C.numPointLights),w.push(C.numSpotLights),w.push(C.numSpotLightMaps),w.push(C.numHemiLights),w.push(C.numRectAreaLights),w.push(C.numDirLightShadows),w.push(C.numPointLightShadows),w.push(C.numSpotLightShadows),w.push(C.numSpotLightShadowsWithMaps),w.push(C.numLightProbes),w.push(C.shadowMapType),w.push(C.toneMapping),w.push(C.numClippingPlanes),w.push(C.numClipIntersection),w.push(C.depthPacking)}function U(w,C){h.disableAll(),C.supportsVertexTextures&&h.enable(0),C.instancing&&h.enable(1),C.instancingColor&&h.enable(2),C.instancingMorph&&h.enable(3),C.matcap&&h.enable(4),C.envMap&&h.enable(5),C.normalMapObjectSpace&&h.enable(6),C.normalMapTangentSpace&&h.enable(7),C.clearcoat&&h.enable(8),C.iridescence&&h.enable(9),C.alphaTest&&h.enable(10),C.vertexColors&&h.enable(11),C.vertexAlphas&&h.enable(12),C.vertexUv1s&&h.enable(13),C.vertexUv2s&&h.enable(14),C.vertexUv3s&&h.enable(15),C.vertexTangents&&h.enable(16),C.anisotropy&&h.enable(17),C.alphaHash&&h.enable(18),C.batching&&h.enable(19),C.dispersion&&h.enable(20),C.batchingColor&&h.enable(21),C.gradientMap&&h.enable(22),w.push(h.mask),h.disableAll(),C.fog&&h.enable(0),C.useFog&&h.enable(1),C.flatShading&&h.enable(2),C.logarithmicDepthBuffer&&h.enable(3),C.reversedDepthBuffer&&h.enable(4),C.skinning&&h.enable(5),C.morphTargets&&h.enable(6),C.morphNormals&&h.enable(7),C.morphColors&&h.enable(8),C.premultipliedAlpha&&h.enable(9),C.shadowMapEnabled&&h.enable(10),C.doubleSided&&h.enable(11),C.flipSided&&h.enable(12),C.useDepthPacking&&h.enable(13),C.dithering&&h.enable(14),C.transmission&&h.enable(15),C.sheen&&h.enable(16),C.opaque&&h.enable(17),C.pointsUvs&&h.enable(18),C.decodeVideoTexture&&h.enable(19),C.decodeVideoTextureEmissive&&h.enable(20),C.alphaToCoverage&&h.enable(21),w.push(h.mask)}function P(w){const C=A[w.type];let V;if(C){const tt=wi[C];V=hy.clone(tt.uniforms)}else V=w.uniforms;return V}function k(w,C){let V;for(let tt=0,ot=v.length;tt<ot;tt++){const mt=v[tt];if(mt.cacheKey===C){V=mt,++V.usedTimes;break}}return V===void 0&&(V=new B1(o,C,w,u),v.push(V)),V}function N(w){if(--w.usedTimes===0){const C=v.indexOf(w);v[C]=v[v.length-1],v.pop(),w.destroy()}}function F(w){m.remove(w)}function nt(){m.dispose()}return{getParameters:y,getProgramCacheKey:_,getUniforms:P,acquireProgram:k,releaseProgram:N,releaseShaderCache:F,programs:v,dispose:nt}}function V1(){let o=new WeakMap;function e(d){return o.has(d)}function i(d){let h=o.get(d);return h===void 0&&(h={},o.set(d,h)),h}function r(d){o.delete(d)}function l(d,h,m){o.get(d)[h]=m}function u(){o=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:u}}function k1(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function sg(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function og(){const o=[];let e=0;const i=[],r=[],l=[];function u(){e=0,i.length=0,r.length=0,l.length=0}function d(g,S,b,A,R,y){let _=o[e];return _===void 0?(_={id:g.id,object:g,geometry:S,material:b,groupOrder:A,renderOrder:g.renderOrder,z:R,group:y},o[e]=_):(_.id=g.id,_.object=g,_.geometry=S,_.material=b,_.groupOrder=A,_.renderOrder=g.renderOrder,_.z=R,_.group=y),e++,_}function h(g,S,b,A,R,y){const _=d(g,S,b,A,R,y);b.transmission>0?r.push(_):b.transparent===!0?l.push(_):i.push(_)}function m(g,S,b,A,R,y){const _=d(g,S,b,A,R,y);b.transmission>0?r.unshift(_):b.transparent===!0?l.unshift(_):i.unshift(_)}function p(g,S){i.length>1&&i.sort(g||k1),r.length>1&&r.sort(S||sg),l.length>1&&l.sort(S||sg)}function v(){for(let g=e,S=o.length;g<S;g++){const b=o[g];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:h,unshift:m,finish:v,sort:p}}function X1(){let o=new WeakMap;function e(r,l){const u=o.get(r);let d;return u===void 0?(d=new og,o.set(r,[d])):l>=u.length?(d=new og,u.push(d)):d=u[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function W1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new ct,color:new Ve};break;case"SpotLight":i={position:new ct,direction:new ct,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new ct,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":i={direction:new ct,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":i={color:new Ve,position:new ct,halfWidth:new ct,halfHeight:new ct};break}return o[e.id]=i,i}}}function q1(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let Y1=0;function j1(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function Z1(o){const e=new W1,i=q1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new ct);const l=new ct,u=new mn,d=new mn;function h(p){let v=0,g=0,S=0;for(let w=0;w<9;w++)r.probe[w].set(0,0,0);let b=0,A=0,R=0,y=0,_=0,B=0,U=0,P=0,k=0,N=0,F=0;p.sort(j1);for(let w=0,C=p.length;w<C;w++){const V=p[w],tt=V.color,ot=V.intensity,mt=V.distance,ft=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)v+=tt.r*ot,g+=tt.g*ot,S+=tt.b*ot;else if(V.isLightProbe){for(let z=0;z<9;z++)r.probe[z].addScaledVector(V.sh.coefficients[z],ot);F++}else if(V.isDirectionalLight){const z=e.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const j=V.shadow,Y=i.get(V);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,r.directionalShadow[b]=Y,r.directionalShadowMap[b]=ft,r.directionalShadowMatrix[b]=V.shadow.matrix,B++}r.directional[b]=z,b++}else if(V.isSpotLight){const z=e.get(V);z.position.setFromMatrixPosition(V.matrixWorld),z.color.copy(tt).multiplyScalar(ot),z.distance=mt,z.coneCos=Math.cos(V.angle),z.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),z.decay=V.decay,r.spot[R]=z;const j=V.shadow;if(V.map&&(r.spotLightMap[k]=V.map,k++,j.updateMatrices(V),V.castShadow&&N++),r.spotLightMatrix[R]=j.matrix,V.castShadow){const Y=i.get(V);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,r.spotShadow[R]=Y,r.spotShadowMap[R]=ft,P++}R++}else if(V.isRectAreaLight){const z=e.get(V);z.color.copy(tt).multiplyScalar(ot),z.halfWidth.set(V.width*.5,0,0),z.halfHeight.set(0,V.height*.5,0),r.rectArea[y]=z,y++}else if(V.isPointLight){const z=e.get(V);if(z.color.copy(V.color).multiplyScalar(V.intensity),z.distance=V.distance,z.decay=V.decay,V.castShadow){const j=V.shadow,Y=i.get(V);Y.shadowIntensity=j.intensity,Y.shadowBias=j.bias,Y.shadowNormalBias=j.normalBias,Y.shadowRadius=j.radius,Y.shadowMapSize=j.mapSize,Y.shadowCameraNear=j.camera.near,Y.shadowCameraFar=j.camera.far,r.pointShadow[A]=Y,r.pointShadowMap[A]=ft,r.pointShadowMatrix[A]=V.shadow.matrix,U++}r.point[A]=z,A++}else if(V.isHemisphereLight){const z=e.get(V);z.skyColor.copy(V.color).multiplyScalar(ot),z.groundColor.copy(V.groundColor).multiplyScalar(ot),r.hemi[_]=z,_++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Nt.LTC_FLOAT_1,r.rectAreaLTC2=Nt.LTC_FLOAT_2):(r.rectAreaLTC1=Nt.LTC_HALF_1,r.rectAreaLTC2=Nt.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=S;const nt=r.hash;(nt.directionalLength!==b||nt.pointLength!==A||nt.spotLength!==R||nt.rectAreaLength!==y||nt.hemiLength!==_||nt.numDirectionalShadows!==B||nt.numPointShadows!==U||nt.numSpotShadows!==P||nt.numSpotMaps!==k||nt.numLightProbes!==F)&&(r.directional.length=b,r.spot.length=R,r.rectArea.length=y,r.point.length=A,r.hemi.length=_,r.directionalShadow.length=B,r.directionalShadowMap.length=B,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=B,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=P+k-N,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=F,nt.directionalLength=b,nt.pointLength=A,nt.spotLength=R,nt.rectAreaLength=y,nt.hemiLength=_,nt.numDirectionalShadows=B,nt.numPointShadows=U,nt.numSpotShadows=P,nt.numSpotMaps=k,nt.numLightProbes=F,r.version=Y1++)}function m(p,v){let g=0,S=0,b=0,A=0,R=0;const y=v.matrixWorldInverse;for(let _=0,B=p.length;_<B;_++){const U=p[_];if(U.isDirectionalLight){const P=r.directional[g];P.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(y),g++}else if(U.isSpotLight){const P=r.spot[b];P.position.setFromMatrixPosition(U.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(U.matrixWorld),l.setFromMatrixPosition(U.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(y),b++}else if(U.isRectAreaLight){const P=r.rectArea[A];P.position.setFromMatrixPosition(U.matrixWorld),P.position.applyMatrix4(y),d.identity(),u.copy(U.matrixWorld),u.premultiply(y),d.extractRotation(u),P.halfWidth.set(U.width*.5,0,0),P.halfHeight.set(0,U.height*.5,0),P.halfWidth.applyMatrix4(d),P.halfHeight.applyMatrix4(d),A++}else if(U.isPointLight){const P=r.point[S];P.position.setFromMatrixPosition(U.matrixWorld),P.position.applyMatrix4(y),S++}else if(U.isHemisphereLight){const P=r.hemi[R];P.direction.setFromMatrixPosition(U.matrixWorld),P.direction.transformDirection(y),R++}}}return{setup:h,setupView:m,state:r}}function lg(o){const e=new Z1(o),i=[],r=[];function l(v){p.camera=v,i.length=0,r.length=0}function u(v){i.push(v)}function d(v){r.push(v)}function h(){e.setup(i)}function m(v){e.setupView(i,v)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:u,pushShadow:d}}function K1(o){let e=new WeakMap;function i(l,u=0){const d=e.get(l);let h;return d===void 0?(h=new lg(o),e.set(l,[h])):u>=d.length?(h=new lg(o),d.push(h)):h=d[u],h}function r(){e=new WeakMap}return{get:i,dispose:r}}const Q1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J1=`uniform sampler2D shadow_pass;
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
}`;function $1(o,e,i){let r=new Lg;const l=new Ue,u=new Ue,d=new an,h=new My({depthPacking:zS}),m=new Ey,p={},v=i.maxTextureSize,g={[Ya]:Vn,[Vn]:Ya,[sa]:sa},S=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ue},radius:{value:4}},vertexShader:Q1,fragmentShader:J1}),b=S.clone();b.defines.HORIZONTAL_PASS=1;const A=new Za;A.setAttribute("position",new Ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Li(A,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fg;let _=this.type;this.render=function(N,F,nt){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;const w=o.getRenderTarget(),C=o.getActiveCubeFace(),V=o.getActiveMipmapLevel(),tt=o.state;tt.setBlending(ca),tt.buffers.depth.getReversed()===!0?tt.buffers.color.setClear(0,0,0,0):tt.buffers.color.setClear(1,1,1,1),tt.buffers.depth.setTest(!0),tt.setScissorTest(!1);const ot=_!==ra&&this.type===ra,mt=_===ra&&this.type!==ra;for(let ft=0,z=N.length;ft<z;ft++){const j=N[ft],Y=j.shadow;if(Y===void 0){oe("WebGLShadowMap:",j,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const gt=Y.getFrameExtents();if(l.multiply(gt),u.copy(Y.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/gt.x),l.x=u.x*gt.x,Y.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/gt.y),l.y=u.y*gt.y,Y.mapSize.y=u.y)),Y.map===null||ot===!0||mt===!0){const L=this.type!==ra?{minFilter:ti,magFilter:ti}:{};Y.map!==null&&Y.map.dispose(),Y.map=new ja(l.x,l.y,L),Y.map.texture.name=j.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const _t=Y.getViewportCount();for(let L=0;L<_t;L++){const at=Y.getViewport(L);d.set(u.x*at.x,u.y*at.y,u.x*at.z,u.y*at.w),tt.viewport(d),Y.updateMatrices(j,L),r=Y.getFrustum(),P(F,nt,Y.camera,j,this.type)}Y.isPointLightShadow!==!0&&this.type===ra&&B(Y,nt),Y.needsUpdate=!1}_=this.type,y.needsUpdate=!1,o.setRenderTarget(w,C,V)};function B(N,F){const nt=e.update(R);S.defines.VSM_SAMPLES!==N.blurSamples&&(S.defines.VSM_SAMPLES=N.blurSamples,b.defines.VSM_SAMPLES=N.blurSamples,S.needsUpdate=!0,b.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new ja(l.x,l.y)),S.uniforms.shadow_pass.value=N.map.texture,S.uniforms.resolution.value=N.mapSize,S.uniforms.radius.value=N.radius,o.setRenderTarget(N.mapPass),o.clear(),o.renderBufferDirect(F,null,nt,S,R,null),b.uniforms.shadow_pass.value=N.mapPass.texture,b.uniforms.resolution.value=N.mapSize,b.uniforms.radius.value=N.radius,o.setRenderTarget(N.map),o.clear(),o.renderBufferDirect(F,null,nt,b,R,null)}function U(N,F,nt,w){let C=null;const V=nt.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(V!==void 0)C=V;else if(C=nt.isPointLight===!0?m:h,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const tt=C.uuid,ot=F.uuid;let mt=p[tt];mt===void 0&&(mt={},p[tt]=mt);let ft=mt[ot];ft===void 0&&(ft=C.clone(),mt[ot]=ft,F.addEventListener("dispose",k)),C=ft}if(C.visible=F.visible,C.wireframe=F.wireframe,w===ra?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:g[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,nt.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const tt=o.properties.get(C);tt.light=nt}return C}function P(N,F,nt,w,C){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&C===ra)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(nt.matrixWorldInverse,N.matrixWorld);const ot=e.update(N),mt=N.material;if(Array.isArray(mt)){const ft=ot.groups;for(let z=0,j=ft.length;z<j;z++){const Y=ft[z],gt=mt[Y.materialIndex];if(gt&&gt.visible){const _t=U(N,gt,w,C);N.onBeforeShadow(o,N,F,nt,ot,_t,Y),o.renderBufferDirect(nt,null,ot,_t,N,Y),N.onAfterShadow(o,N,F,nt,ot,_t,Y)}}}else if(mt.visible){const ft=U(N,mt,w,C);N.onBeforeShadow(o,N,F,nt,ot,ft,null),o.renderBufferDirect(nt,null,ot,ft,N,null),N.onAfterShadow(o,N,F,nt,ot,ft,null)}}const tt=N.children;for(let ot=0,mt=tt.length;ot<mt;ot++)P(tt[ot],F,nt,w,C)}function k(N){N.target.removeEventListener("dispose",k);for(const nt in p){const w=p[nt],C=N.target.uuid;C in w&&(w[C].dispose(),delete w[C])}}}const tE={[Td]:Ad,[Rd]:Dd,[Cd]:Ud,[bs]:wd,[Ad]:Td,[Dd]:Rd,[Ud]:Cd,[wd]:bs};function eE(o,e){function i(){let H=!1;const Dt=new an;let Rt=null;const Ct=new an(0,0,0,0);return{setMask:function(bt){Rt!==bt&&!H&&(o.colorMask(bt,bt,bt,bt),Rt=bt)},setLocked:function(bt){H=bt},setClear:function(bt,xt,Bt,ie,Be){Be===!0&&(bt*=ie,xt*=ie,Bt*=ie),Dt.set(bt,xt,Bt,ie),Ct.equals(Dt)===!1&&(o.clearColor(bt,xt,Bt,ie),Ct.copy(Dt))},reset:function(){H=!1,Rt=null,Ct.set(-1,0,0,0)}}}function r(){let H=!1,Dt=!1,Rt=null,Ct=null,bt=null;return{setReversed:function(xt){if(Dt!==xt){const Bt=e.get("EXT_clip_control");xt?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT),Dt=xt;const ie=bt;bt=null,this.setClear(ie)}},getReversed:function(){return Dt},setTest:function(xt){xt?lt(o.DEPTH_TEST):wt(o.DEPTH_TEST)},setMask:function(xt){Rt!==xt&&!H&&(o.depthMask(xt),Rt=xt)},setFunc:function(xt){if(Dt&&(xt=tE[xt]),Ct!==xt){switch(xt){case Td:o.depthFunc(o.NEVER);break;case Ad:o.depthFunc(o.ALWAYS);break;case Rd:o.depthFunc(o.LESS);break;case bs:o.depthFunc(o.LEQUAL);break;case Cd:o.depthFunc(o.EQUAL);break;case wd:o.depthFunc(o.GEQUAL);break;case Dd:o.depthFunc(o.GREATER);break;case Ud:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}Ct=xt}},setLocked:function(xt){H=xt},setClear:function(xt){bt!==xt&&(Dt&&(xt=1-xt),o.clearDepth(xt),bt=xt)},reset:function(){H=!1,Rt=null,Ct=null,bt=null,Dt=!1}}}function l(){let H=!1,Dt=null,Rt=null,Ct=null,bt=null,xt=null,Bt=null,ie=null,Be=null;return{setTest:function(Ae){H||(Ae?lt(o.STENCIL_TEST):wt(o.STENCIL_TEST))},setMask:function(Ae){Dt!==Ae&&!H&&(o.stencilMask(Ae),Dt=Ae)},setFunc:function(Ae,Cn,kn){(Rt!==Ae||Ct!==Cn||bt!==kn)&&(o.stencilFunc(Ae,Cn,kn),Rt=Ae,Ct=Cn,bt=kn)},setOp:function(Ae,Cn,kn){(xt!==Ae||Bt!==Cn||ie!==kn)&&(o.stencilOp(Ae,Cn,kn),xt=Ae,Bt=Cn,ie=kn)},setLocked:function(Ae){H=Ae},setClear:function(Ae){Be!==Ae&&(o.clearStencil(Ae),Be=Ae)},reset:function(){H=!1,Dt=null,Rt=null,Ct=null,bt=null,xt=null,Bt=null,ie=null,Be=null}}}const u=new i,d=new r,h=new l,m=new WeakMap,p=new WeakMap;let v={},g={},S=new WeakMap,b=[],A=null,R=!1,y=null,_=null,B=null,U=null,P=null,k=null,N=null,F=new Ve(0,0,0),nt=0,w=!1,C=null,V=null,tt=null,ot=null,mt=null;const ft=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,j=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=j>=1):Y.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=j>=2);let gt=null,_t={};const L=o.getParameter(o.SCISSOR_BOX),at=o.getParameter(o.VIEWPORT),yt=new an().fromArray(L),Tt=new an().fromArray(at);function zt(H,Dt,Rt,Ct){const bt=new Uint8Array(4),xt=o.createTexture();o.bindTexture(H,xt),o.texParameteri(H,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(H,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Bt=0;Bt<Rt;Bt++)H===o.TEXTURE_3D||H===o.TEXTURE_2D_ARRAY?o.texImage3D(Dt,0,o.RGBA,1,1,Ct,0,o.RGBA,o.UNSIGNED_BYTE,bt):o.texImage2D(Dt+Bt,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,bt);return xt}const et={};et[o.TEXTURE_2D]=zt(o.TEXTURE_2D,o.TEXTURE_2D,1),et[o.TEXTURE_CUBE_MAP]=zt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[o.TEXTURE_2D_ARRAY]=zt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),et[o.TEXTURE_3D]=zt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),d.setClear(1),h.setClear(0),lt(o.DEPTH_TEST),d.setFunc(bs),he(!1),me(hx),lt(o.CULL_FACE),Te(ca);function lt(H){v[H]!==!0&&(o.enable(H),v[H]=!0)}function wt(H){v[H]!==!1&&(o.disable(H),v[H]=!1)}function Ht(H,Dt){return g[H]!==Dt?(o.bindFramebuffer(H,Dt),g[H]=Dt,H===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Dt),H===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Dt),!0):!1}function Xt(H,Dt){let Rt=b,Ct=!1;if(H){Rt=S.get(Dt),Rt===void 0&&(Rt=[],S.set(Dt,Rt));const bt=H.textures;if(Rt.length!==bt.length||Rt[0]!==o.COLOR_ATTACHMENT0){for(let xt=0,Bt=bt.length;xt<Bt;xt++)Rt[xt]=o.COLOR_ATTACHMENT0+xt;Rt.length=bt.length,Ct=!0}}else Rt[0]!==o.BACK&&(Rt[0]=o.BACK,Ct=!0);Ct&&o.drawBuffers(Rt)}function le(H){return A!==H?(o.useProgram(H),A=H,!0):!1}const $e={[yr]:o.FUNC_ADD,[oS]:o.FUNC_SUBTRACT,[lS]:o.FUNC_REVERSE_SUBTRACT};$e[cS]=o.MIN,$e[uS]=o.MAX;const de={[fS]:o.ZERO,[dS]:o.ONE,[hS]:o.SRC_COLOR,[Md]:o.SRC_ALPHA,[vS]:o.SRC_ALPHA_SATURATE,[gS]:o.DST_COLOR,[mS]:o.DST_ALPHA,[pS]:o.ONE_MINUS_SRC_COLOR,[Ed]:o.ONE_MINUS_SRC_ALPHA,[_S]:o.ONE_MINUS_DST_COLOR,[xS]:o.ONE_MINUS_DST_ALPHA,[SS]:o.CONSTANT_COLOR,[yS]:o.ONE_MINUS_CONSTANT_COLOR,[bS]:o.CONSTANT_ALPHA,[MS]:o.ONE_MINUS_CONSTANT_ALPHA};function Te(H,Dt,Rt,Ct,bt,xt,Bt,ie,Be,Ae){if(H===ca){R===!0&&(wt(o.BLEND),R=!1);return}if(R===!1&&(lt(o.BLEND),R=!0),H!==sS){if(H!==y||Ae!==w){if((_!==yr||P!==yr)&&(o.blendEquation(o.FUNC_ADD),_=yr,P=yr),Ae)switch(H){case Ss:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case px:o.blendFunc(o.ONE,o.ONE);break;case mx:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case xx:o.blendFuncSeparate(o.DST_COLOR,o.ONE_MINUS_SRC_ALPHA,o.ZERO,o.ONE);break;default:nn("WebGLState: Invalid blending: ",H);break}else switch(H){case Ss:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case px:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE,o.ONE,o.ONE);break;case mx:nn("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xx:nn("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nn("WebGLState: Invalid blending: ",H);break}B=null,U=null,k=null,N=null,F.set(0,0,0),nt=0,y=H,w=Ae}return}bt=bt||Dt,xt=xt||Rt,Bt=Bt||Ct,(Dt!==_||bt!==P)&&(o.blendEquationSeparate($e[Dt],$e[bt]),_=Dt,P=bt),(Rt!==B||Ct!==U||xt!==k||Bt!==N)&&(o.blendFuncSeparate(de[Rt],de[Ct],de[xt],de[Bt]),B=Rt,U=Ct,k=xt,N=Bt),(ie.equals(F)===!1||Be!==nt)&&(o.blendColor(ie.r,ie.g,ie.b,Be),F.copy(ie),nt=Be),y=H,w=!1}function I(H,Dt){H.side===sa?wt(o.CULL_FACE):lt(o.CULL_FACE);let Rt=H.side===Vn;Dt&&(Rt=!Rt),he(Rt),H.blending===Ss&&H.transparent===!1?Te(ca):Te(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),d.setFunc(H.depthFunc),d.setTest(H.depthTest),d.setMask(H.depthWrite),u.setMask(H.colorWrite);const Ct=H.stencilWrite;h.setTest(Ct),Ct&&(h.setMask(H.stencilWriteMask),h.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),h.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Gt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?lt(o.SAMPLE_ALPHA_TO_COVERAGE):wt(o.SAMPLE_ALPHA_TO_COVERAGE)}function he(H){C!==H&&(H?o.frontFace(o.CW):o.frontFace(o.CCW),C=H)}function me(H){H!==iS?(lt(o.CULL_FACE),H!==V&&(H===hx?o.cullFace(o.BACK):H===aS?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):wt(o.CULL_FACE),V=H}function Oe(H){H!==tt&&(z&&o.lineWidth(H),tt=H)}function Gt(H,Dt,Rt){H?(lt(o.POLYGON_OFFSET_FILL),(ot!==Dt||mt!==Rt)&&(o.polygonOffset(Dt,Rt),ot=Dt,mt=Rt)):wt(o.POLYGON_OFFSET_FILL)}function ke(H){H?lt(o.SCISSOR_TEST):wt(o.SCISSOR_TEST)}function jt(H){H===void 0&&(H=o.TEXTURE0+ft-1),gt!==H&&(o.activeTexture(H),gt=H)}function ae(H,Dt,Rt){Rt===void 0&&(gt===null?Rt=o.TEXTURE0+ft-1:Rt=gt);let Ct=_t[Rt];Ct===void 0&&(Ct={type:void 0,texture:void 0},_t[Rt]=Ct),(Ct.type!==H||Ct.texture!==Dt)&&(gt!==Rt&&(o.activeTexture(Rt),gt=Rt),o.bindTexture(H,Dt||et[H]),Ct.type=H,Ct.texture=Dt)}function D(){const H=_t[gt];H!==void 0&&H.type!==void 0&&(o.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function M(){try{o.compressedTexImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function K(){try{o.compressedTexImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function ht(){try{o.texSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function vt(){try{o.texSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function st(){try{o.compressedTexSubImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function qt(){try{o.compressedTexSubImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Lt(){try{o.texStorage2D(...arguments)}catch(H){H("WebGLState:",H)}}function Qt(){try{o.texStorage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Wt(){try{o.texImage2D(...arguments)}catch(H){H("WebGLState:",H)}}function St(){try{o.texImage3D(...arguments)}catch(H){H("WebGLState:",H)}}function Mt(H){yt.equals(H)===!1&&(o.scissor(H.x,H.y,H.z,H.w),yt.copy(H))}function Yt(H){Tt.equals(H)===!1&&(o.viewport(H.x,H.y,H.z,H.w),Tt.copy(H))}function Vt(H,Dt){let Rt=p.get(Dt);Rt===void 0&&(Rt=new WeakMap,p.set(Dt,Rt));let Ct=Rt.get(H);Ct===void 0&&(Ct=o.getUniformBlockIndex(Dt,H.name),Rt.set(H,Ct))}function Ot(H,Dt){const Ct=p.get(Dt).get(H);m.get(Dt)!==Ct&&(o.uniformBlockBinding(Dt,Ct,H.__bindingPointIndex),m.set(Dt,Ct))}function ne(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),d.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},gt=null,_t={},g={},S=new WeakMap,b=[],A=null,R=!1,y=null,_=null,B=null,U=null,P=null,k=null,N=null,F=new Ve(0,0,0),nt=0,w=!1,C=null,V=null,tt=null,ot=null,mt=null,yt.set(0,0,o.canvas.width,o.canvas.height),Tt.set(0,0,o.canvas.width,o.canvas.height),u.reset(),d.reset(),h.reset()}return{buffers:{color:u,depth:d,stencil:h},enable:lt,disable:wt,bindFramebuffer:Ht,drawBuffers:Xt,useProgram:le,setBlending:Te,setMaterial:I,setFlipSided:he,setCullFace:me,setLineWidth:Oe,setPolygonOffset:Gt,setScissorTest:ke,activeTexture:jt,bindTexture:ae,unbindTexture:D,compressedTexImage2D:M,compressedTexImage3D:K,texImage2D:Wt,texImage3D:St,updateUBOMapping:Vt,uniformBlockBinding:Ot,texStorage2D:Lt,texStorage3D:Qt,texSubImage2D:ht,texSubImage3D:vt,compressedTexSubImage2D:st,compressedTexSubImage3D:qt,scissor:Mt,viewport:Yt,reset:ne}}function nE(o,e,i,r,l,u,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Ue,v=new WeakMap;let g;const S=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(D,M){return b?new OffscreenCanvas(D,M):Rc("canvas")}function R(D,M,K){let ht=1;const vt=ae(D);if((vt.width>K||vt.height>K)&&(ht=K/Math.max(vt.width,vt.height)),ht<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const st=Math.floor(ht*vt.width),qt=Math.floor(ht*vt.height);g===void 0&&(g=A(st,qt));const Lt=M?A(st,qt):g;return Lt.width=st,Lt.height=qt,Lt.getContext("2d").drawImage(D,0,0,st,qt),oe("WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+st+"x"+qt+")."),Lt}else return"data"in D&&oe("WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),D;return D}function y(D){return D.generateMipmaps}function _(D){o.generateMipmap(D)}function B(D){return D.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?o.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function U(D,M,K,ht,vt=!1){if(D!==null){if(o[D]!==void 0)return o[D];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let st=M;if(M===o.RED&&(K===o.FLOAT&&(st=o.R32F),K===o.HALF_FLOAT&&(st=o.R16F),K===o.UNSIGNED_BYTE&&(st=o.R8)),M===o.RED_INTEGER&&(K===o.UNSIGNED_BYTE&&(st=o.R8UI),K===o.UNSIGNED_SHORT&&(st=o.R16UI),K===o.UNSIGNED_INT&&(st=o.R32UI),K===o.BYTE&&(st=o.R8I),K===o.SHORT&&(st=o.R16I),K===o.INT&&(st=o.R32I)),M===o.RG&&(K===o.FLOAT&&(st=o.RG32F),K===o.HALF_FLOAT&&(st=o.RG16F),K===o.UNSIGNED_BYTE&&(st=o.RG8)),M===o.RG_INTEGER&&(K===o.UNSIGNED_BYTE&&(st=o.RG8UI),K===o.UNSIGNED_SHORT&&(st=o.RG16UI),K===o.UNSIGNED_INT&&(st=o.RG32UI),K===o.BYTE&&(st=o.RG8I),K===o.SHORT&&(st=o.RG16I),K===o.INT&&(st=o.RG32I)),M===o.RGB_INTEGER&&(K===o.UNSIGNED_BYTE&&(st=o.RGB8UI),K===o.UNSIGNED_SHORT&&(st=o.RGB16UI),K===o.UNSIGNED_INT&&(st=o.RGB32UI),K===o.BYTE&&(st=o.RGB8I),K===o.SHORT&&(st=o.RGB16I),K===o.INT&&(st=o.RGB32I)),M===o.RGBA_INTEGER&&(K===o.UNSIGNED_BYTE&&(st=o.RGBA8UI),K===o.UNSIGNED_SHORT&&(st=o.RGBA16UI),K===o.UNSIGNED_INT&&(st=o.RGBA32UI),K===o.BYTE&&(st=o.RGBA8I),K===o.SHORT&&(st=o.RGBA16I),K===o.INT&&(st=o.RGBA32I)),M===o.RGB&&(K===o.UNSIGNED_INT_5_9_9_9_REV&&(st=o.RGB9_E5),K===o.UNSIGNED_INT_10F_11F_11F_REV&&(st=o.R11F_G11F_B10F)),M===o.RGBA){const qt=vt?Tc:De.getTransfer(ht);K===o.FLOAT&&(st=o.RGBA32F),K===o.HALF_FLOAT&&(st=o.RGBA16F),K===o.UNSIGNED_BYTE&&(st=qt===Ge?o.SRGB8_ALPHA8:o.RGBA8),K===o.UNSIGNED_SHORT_4_4_4_4&&(st=o.RGBA4),K===o.UNSIGNED_SHORT_5_5_5_1&&(st=o.RGB5_A1)}return(st===o.R16F||st===o.R32F||st===o.RG16F||st===o.RG32F||st===o.RGBA16F||st===o.RGBA32F)&&e.get("EXT_color_buffer_float"),st}function P(D,M){let K;return D?M===null||M===Ar||M===Oo?K=o.DEPTH24_STENCIL8:M===la?K=o.DEPTH32F_STENCIL8:M===No&&(K=o.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ar||M===Oo?K=o.DEPTH_COMPONENT24:M===la?K=o.DEPTH_COMPONENT32F:M===No&&(K=o.DEPTH_COMPONENT16),K}function k(D,M){return y(D)===!0||D.isFramebufferTexture&&D.minFilter!==ti&&D.minFilter!==di?Math.log2(Math.max(M.width,M.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?M.mipmaps.length:1}function N(D){const M=D.target;M.removeEventListener("dispose",N),nt(M),M.isVideoTexture&&v.delete(M)}function F(D){const M=D.target;M.removeEventListener("dispose",F),C(M)}function nt(D){const M=r.get(D);if(M.__webglInit===void 0)return;const K=D.source,ht=S.get(K);if(ht){const vt=ht[M.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&w(D),Object.keys(ht).length===0&&S.delete(K)}r.remove(D)}function w(D){const M=r.get(D);o.deleteTexture(M.__webglTexture);const K=D.source,ht=S.get(K);delete ht[M.__cacheKey],d.memory.textures--}function C(D){const M=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(M.__webglFramebuffer[ht]))for(let vt=0;vt<M.__webglFramebuffer[ht].length;vt++)o.deleteFramebuffer(M.__webglFramebuffer[ht][vt]);else o.deleteFramebuffer(M.__webglFramebuffer[ht]);M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer[ht])}else{if(Array.isArray(M.__webglFramebuffer))for(let ht=0;ht<M.__webglFramebuffer.length;ht++)o.deleteFramebuffer(M.__webglFramebuffer[ht]);else o.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&o.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&o.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ht=0;ht<M.__webglColorRenderbuffer.length;ht++)M.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(M.__webglColorRenderbuffer[ht]);M.__webglDepthRenderbuffer&&o.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const K=D.textures;for(let ht=0,vt=K.length;ht<vt;ht++){const st=r.get(K[ht]);st.__webglTexture&&(o.deleteTexture(st.__webglTexture),d.memory.textures--),r.remove(K[ht])}r.remove(D)}let V=0;function tt(){V=0}function ot(){const D=V;return D>=l.maxTextures&&oe("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),V+=1,D}function mt(D){const M=[];return M.push(D.wrapS),M.push(D.wrapT),M.push(D.wrapR||0),M.push(D.magFilter),M.push(D.minFilter),M.push(D.anisotropy),M.push(D.internalFormat),M.push(D.format),M.push(D.type),M.push(D.generateMipmaps),M.push(D.premultiplyAlpha),M.push(D.flipY),M.push(D.unpackAlignment),M.push(D.colorSpace),M.join()}function ft(D,M){const K=r.get(D);if(D.isVideoTexture&&ke(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&K.__version!==D.version){const ht=D.image;if(ht===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{et(K,D,M);return}}else D.isExternalTexture&&(K.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D,K.__webglTexture,o.TEXTURE0+M)}function z(D,M){const K=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){et(K,D,M);return}else D.isExternalTexture&&(K.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(o.TEXTURE_2D_ARRAY,K.__webglTexture,o.TEXTURE0+M)}function j(D,M){const K=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&K.__version!==D.version){et(K,D,M);return}i.bindTexture(o.TEXTURE_3D,K.__webglTexture,o.TEXTURE0+M)}function Y(D,M){const K=r.get(D);if(D.version>0&&K.__version!==D.version){lt(K,D,M);return}i.bindTexture(o.TEXTURE_CUBE_MAP,K.__webglTexture,o.TEXTURE0+M)}const gt={[Od]:o.REPEAT,[oa]:o.CLAMP_TO_EDGE,[zd]:o.MIRRORED_REPEAT},_t={[ti]:o.NEAREST,[NS]:o.NEAREST_MIPMAP_NEAREST,[$l]:o.NEAREST_MIPMAP_LINEAR,[di]:o.LINEAR,[Wf]:o.LINEAR_MIPMAP_NEAREST,[Er]:o.LINEAR_MIPMAP_LINEAR},L={[FS]:o.NEVER,[XS]:o.ALWAYS,[IS]:o.LESS,[yg]:o.LEQUAL,[HS]:o.EQUAL,[kS]:o.GEQUAL,[GS]:o.GREATER,[VS]:o.NOTEQUAL};function at(D,M){if(M.type===la&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===di||M.magFilter===Wf||M.magFilter===$l||M.magFilter===Er||M.minFilter===di||M.minFilter===Wf||M.minFilter===$l||M.minFilter===Er)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(D,o.TEXTURE_WRAP_S,gt[M.wrapS]),o.texParameteri(D,o.TEXTURE_WRAP_T,gt[M.wrapT]),(D===o.TEXTURE_3D||D===o.TEXTURE_2D_ARRAY)&&o.texParameteri(D,o.TEXTURE_WRAP_R,gt[M.wrapR]),o.texParameteri(D,o.TEXTURE_MAG_FILTER,_t[M.magFilter]),o.texParameteri(D,o.TEXTURE_MIN_FILTER,_t[M.minFilter]),M.compareFunction&&(o.texParameteri(D,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(D,o.TEXTURE_COMPARE_FUNC,L[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===ti||M.minFilter!==$l&&M.minFilter!==Er||M.type===la&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");o.texParameterf(D,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,l.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function yt(D,M){let K=!1;D.__webglInit===void 0&&(D.__webglInit=!0,M.addEventListener("dispose",N));const ht=M.source;let vt=S.get(ht);vt===void 0&&(vt={},S.set(ht,vt));const st=mt(M);if(st!==D.__cacheKey){vt[st]===void 0&&(vt[st]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,K=!0),vt[st].usedTimes++;const qt=vt[D.__cacheKey];qt!==void 0&&(vt[D.__cacheKey].usedTimes--,qt.usedTimes===0&&w(M)),D.__cacheKey=st,D.__webglTexture=vt[st].texture}return K}function Tt(D,M,K){return Math.floor(Math.floor(D/K)/M)}function zt(D,M,K,ht){const st=D.updateRanges;if(st.length===0)i.texSubImage2D(o.TEXTURE_2D,0,0,0,M.width,M.height,K,ht,M.data);else{st.sort((St,Mt)=>St.start-Mt.start);let qt=0;for(let St=1;St<st.length;St++){const Mt=st[qt],Yt=st[St],Vt=Mt.start+Mt.count,Ot=Tt(Yt.start,M.width,4),ne=Tt(Mt.start,M.width,4);Yt.start<=Vt+1&&Ot===ne&&Tt(Yt.start+Yt.count-1,M.width,4)===Ot?Mt.count=Math.max(Mt.count,Yt.start+Yt.count-Mt.start):(++qt,st[qt]=Yt)}st.length=qt+1;const Lt=o.getParameter(o.UNPACK_ROW_LENGTH),Qt=o.getParameter(o.UNPACK_SKIP_PIXELS),Wt=o.getParameter(o.UNPACK_SKIP_ROWS);o.pixelStorei(o.UNPACK_ROW_LENGTH,M.width);for(let St=0,Mt=st.length;St<Mt;St++){const Yt=st[St],Vt=Math.floor(Yt.start/4),Ot=Math.ceil(Yt.count/4),ne=Vt%M.width,H=Math.floor(Vt/M.width),Dt=Ot,Rt=1;o.pixelStorei(o.UNPACK_SKIP_PIXELS,ne),o.pixelStorei(o.UNPACK_SKIP_ROWS,H),i.texSubImage2D(o.TEXTURE_2D,0,ne,H,Dt,Rt,K,ht,M.data)}D.clearUpdateRanges(),o.pixelStorei(o.UNPACK_ROW_LENGTH,Lt),o.pixelStorei(o.UNPACK_SKIP_PIXELS,Qt),o.pixelStorei(o.UNPACK_SKIP_ROWS,Wt)}}function et(D,M,K){let ht=o.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),M.isData3DTexture&&(ht=o.TEXTURE_3D);const vt=yt(D,M),st=M.source;i.bindTexture(ht,D.__webglTexture,o.TEXTURE0+K);const qt=r.get(st);if(st.version!==qt.__version||vt===!0){i.activeTexture(o.TEXTURE0+K);const Lt=De.getPrimaries(De.workingColorSpace),Qt=M.colorSpace===Xa?null:De.getPrimaries(M.colorSpace),Wt=M.colorSpace===Xa||Lt===Qt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Wt);let St=R(M.image,!1,l.maxTextureSize);St=jt(M,St);const Mt=u.convert(M.format,M.colorSpace),Yt=u.convert(M.type);let Vt=U(M.internalFormat,Mt,Yt,M.colorSpace,M.isVideoTexture);at(ht,M);let Ot;const ne=M.mipmaps,H=M.isVideoTexture!==!0,Dt=qt.__version===void 0||vt===!0,Rt=st.dataReady,Ct=k(M,St);if(M.isDepthTexture)Vt=P(M.format===Po,M.type),Dt&&(H?i.texStorage2D(o.TEXTURE_2D,1,Vt,St.width,St.height):i.texImage2D(o.TEXTURE_2D,0,Vt,St.width,St.height,0,Mt,Yt,null));else if(M.isDataTexture)if(ne.length>0){H&&Dt&&i.texStorage2D(o.TEXTURE_2D,Ct,Vt,ne[0].width,ne[0].height);for(let bt=0,xt=ne.length;bt<xt;bt++)Ot=ne[bt],H?Rt&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Ot.width,Ot.height,Mt,Yt,Ot.data):i.texImage2D(o.TEXTURE_2D,bt,Vt,Ot.width,Ot.height,0,Mt,Yt,Ot.data);M.generateMipmaps=!1}else H?(Dt&&i.texStorage2D(o.TEXTURE_2D,Ct,Vt,St.width,St.height),Rt&&zt(M,St,Mt,Yt)):i.texImage2D(o.TEXTURE_2D,0,Vt,St.width,St.height,0,Mt,Yt,St.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){H&&Dt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,Vt,ne[0].width,ne[0].height,St.depth);for(let bt=0,xt=ne.length;bt<xt;bt++)if(Ot=ne[bt],M.format!==bi)if(Mt!==null)if(H){if(Rt)if(M.layerUpdates.size>0){const Bt=Ix(Ot.width,Ot.height,M.format,M.type);for(const ie of M.layerUpdates){const Be=Ot.data.subarray(ie*Bt/Ot.data.BYTES_PER_ELEMENT,(ie+1)*Bt/Ot.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,ie,Ot.width,Ot.height,1,Mt,Be)}M.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Ot.width,Ot.height,St.depth,Mt,Ot.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,bt,Vt,Ot.width,Ot.height,St.depth,0,Ot.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else H?Rt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,bt,0,0,0,Ot.width,Ot.height,St.depth,Mt,Yt,Ot.data):i.texImage3D(o.TEXTURE_2D_ARRAY,bt,Vt,Ot.width,Ot.height,St.depth,0,Mt,Yt,Ot.data)}else{H&&Dt&&i.texStorage2D(o.TEXTURE_2D,Ct,Vt,ne[0].width,ne[0].height);for(let bt=0,xt=ne.length;bt<xt;bt++)Ot=ne[bt],M.format!==bi?Mt!==null?H?Rt&&i.compressedTexSubImage2D(o.TEXTURE_2D,bt,0,0,Ot.width,Ot.height,Mt,Ot.data):i.compressedTexImage2D(o.TEXTURE_2D,bt,Vt,Ot.width,Ot.height,0,Ot.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):H?Rt&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Ot.width,Ot.height,Mt,Yt,Ot.data):i.texImage2D(o.TEXTURE_2D,bt,Vt,Ot.width,Ot.height,0,Mt,Yt,Ot.data)}else if(M.isDataArrayTexture)if(H){if(Dt&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Ct,Vt,St.width,St.height,St.depth),Rt)if(M.layerUpdates.size>0){const bt=Ix(St.width,St.height,M.format,M.type);for(const xt of M.layerUpdates){const Bt=St.data.subarray(xt*bt/St.data.BYTES_PER_ELEMENT,(xt+1)*bt/St.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,xt,St.width,St.height,1,Mt,Yt,Bt)}M.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,St.width,St.height,St.depth,Mt,Yt,St.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Vt,St.width,St.height,St.depth,0,Mt,Yt,St.data);else if(M.isData3DTexture)H?(Dt&&i.texStorage3D(o.TEXTURE_3D,Ct,Vt,St.width,St.height,St.depth),Rt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,St.width,St.height,St.depth,Mt,Yt,St.data)):i.texImage3D(o.TEXTURE_3D,0,Vt,St.width,St.height,St.depth,0,Mt,Yt,St.data);else if(M.isFramebufferTexture){if(Dt)if(H)i.texStorage2D(o.TEXTURE_2D,Ct,Vt,St.width,St.height);else{let bt=St.width,xt=St.height;for(let Bt=0;Bt<Ct;Bt++)i.texImage2D(o.TEXTURE_2D,Bt,Vt,bt,xt,0,Mt,Yt,null),bt>>=1,xt>>=1}}else if(ne.length>0){if(H&&Dt){const bt=ae(ne[0]);i.texStorage2D(o.TEXTURE_2D,Ct,Vt,bt.width,bt.height)}for(let bt=0,xt=ne.length;bt<xt;bt++)Ot=ne[bt],H?Rt&&i.texSubImage2D(o.TEXTURE_2D,bt,0,0,Mt,Yt,Ot):i.texImage2D(o.TEXTURE_2D,bt,Vt,Mt,Yt,Ot);M.generateMipmaps=!1}else if(H){if(Dt){const bt=ae(St);i.texStorage2D(o.TEXTURE_2D,Ct,Vt,bt.width,bt.height)}Rt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Mt,Yt,St)}else i.texImage2D(o.TEXTURE_2D,0,Vt,Mt,Yt,St);y(M)&&_(ht),qt.__version=st.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function lt(D,M,K){if(M.image.length!==6)return;const ht=yt(D,M),vt=M.source;i.bindTexture(o.TEXTURE_CUBE_MAP,D.__webglTexture,o.TEXTURE0+K);const st=r.get(vt);if(vt.version!==st.__version||ht===!0){i.activeTexture(o.TEXTURE0+K);const qt=De.getPrimaries(De.workingColorSpace),Lt=M.colorSpace===Xa?null:De.getPrimaries(M.colorSpace),Qt=M.colorSpace===Xa||qt===Lt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,M.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,M.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qt);const Wt=M.isCompressedTexture||M.image[0].isCompressedTexture,St=M.image[0]&&M.image[0].isDataTexture,Mt=[];for(let xt=0;xt<6;xt++)!Wt&&!St?Mt[xt]=R(M.image[xt],!0,l.maxCubemapSize):Mt[xt]=St?M.image[xt].image:M.image[xt],Mt[xt]=jt(M,Mt[xt]);const Yt=Mt[0],Vt=u.convert(M.format,M.colorSpace),Ot=u.convert(M.type),ne=U(M.internalFormat,Vt,Ot,M.colorSpace),H=M.isVideoTexture!==!0,Dt=st.__version===void 0||ht===!0,Rt=vt.dataReady;let Ct=k(M,Yt);at(o.TEXTURE_CUBE_MAP,M);let bt;if(Wt){H&&Dt&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Ct,ne,Yt.width,Yt.height);for(let xt=0;xt<6;xt++){bt=Mt[xt].mipmaps;for(let Bt=0;Bt<bt.length;Bt++){const ie=bt[Bt];M.format!==bi?Vt!==null?H?Rt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt,0,0,ie.width,ie.height,Vt,ie.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt,ne,ie.width,ie.height,0,ie.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt,0,0,ie.width,ie.height,Vt,Ot,ie.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt,ne,ie.width,ie.height,0,Vt,Ot,ie.data)}}}else{if(bt=M.mipmaps,H&&Dt){bt.length>0&&Ct++;const xt=ae(Mt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Ct,ne,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(St){H?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Mt[xt].width,Mt[xt].height,Vt,Ot,Mt[xt].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ne,Mt[xt].width,Mt[xt].height,0,Vt,Ot,Mt[xt].data);for(let Bt=0;Bt<bt.length;Bt++){const Be=bt[Bt].image[xt].image;H?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt+1,0,0,Be.width,Be.height,Vt,Ot,Be.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt+1,ne,Be.width,Be.height,0,Vt,Ot,Be.data)}}else{H?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,Vt,Ot,Mt[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ne,Vt,Ot,Mt[xt]);for(let Bt=0;Bt<bt.length;Bt++){const ie=bt[Bt];H?Rt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt+1,0,0,Vt,Ot,ie.image[xt]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Bt+1,ne,Vt,Ot,ie.image[xt])}}}y(M)&&_(o.TEXTURE_CUBE_MAP),st.__version=vt.version,M.onUpdate&&M.onUpdate(M)}D.__version=M.version}function wt(D,M,K,ht,vt,st){const qt=u.convert(K.format,K.colorSpace),Lt=u.convert(K.type),Qt=U(K.internalFormat,qt,Lt,K.colorSpace),Wt=r.get(M),St=r.get(K);if(St.__renderTarget=M,!Wt.__hasExternalTextures){const Mt=Math.max(1,M.width>>st),Yt=Math.max(1,M.height>>st);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,st,Qt,Mt,Yt,M.depth,0,qt,Lt,null):i.texImage2D(vt,st,Qt,Mt,Yt,0,qt,Lt,null)}i.bindFramebuffer(o.FRAMEBUFFER,D),Gt(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,vt,St.__webglTexture,0,Oe(M)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,vt,St.__webglTexture,st),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Ht(D,M,K){if(o.bindRenderbuffer(o.RENDERBUFFER,D),M.depthBuffer){const ht=M.depthTexture,vt=ht&&ht.isDepthTexture?ht.type:null,st=P(M.stencilBuffer,vt),qt=M.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Lt=Oe(M);Gt(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Lt,st,M.width,M.height):K?o.renderbufferStorageMultisample(o.RENDERBUFFER,Lt,st,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,st,M.width,M.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,qt,o.RENDERBUFFER,D)}else{const ht=M.textures;for(let vt=0;vt<ht.length;vt++){const st=ht[vt],qt=u.convert(st.format,st.colorSpace),Lt=u.convert(st.type),Qt=U(st.internalFormat,qt,Lt,st.colorSpace),Wt=Oe(M);K&&Gt(M)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Wt,Qt,M.width,M.height):Gt(M)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Wt,Qt,M.width,M.height):o.renderbufferStorage(o.RENDERBUFFER,Qt,M.width,M.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Xt(D,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,D),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=r.get(M.depthTexture);ht.__renderTarget=M,(!ht.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),ft(M.depthTexture,0);const vt=ht.__webglTexture,st=Oe(M);if(M.depthTexture.format===zo)Gt(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0,st):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0);else if(M.depthTexture.format===Po)Gt(M)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0,st):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function le(D){const M=r.get(D),K=D.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==D.depthTexture){const ht=D.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),ht){const vt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,ht.removeEventListener("dispose",vt)};ht.addEventListener("dispose",vt),M.__depthDisposeCallback=vt}M.__boundDepthTexture=ht}if(D.depthTexture&&!M.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const ht=D.texture.mipmaps;ht&&ht.length>0?Xt(M.__webglFramebuffer[0],D):Xt(M.__webglFramebuffer,D)}else if(K){M.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[ht]),M.__webglDepthbuffer[ht]===void 0)M.__webglDepthbuffer[ht]=o.createRenderbuffer(),Ht(M.__webglDepthbuffer[ht],D,!1);else{const vt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,st=M.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,st),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,st)}}else{const ht=D.texture.mipmaps;if(ht&&ht.length>0?i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer[0]):i.bindFramebuffer(o.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=o.createRenderbuffer(),Ht(M.__webglDepthbuffer,D,!1);else{const vt=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,st=M.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,st),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,st)}}i.bindFramebuffer(o.FRAMEBUFFER,null)}function $e(D,M,K){const ht=r.get(D);M!==void 0&&wt(ht.__webglFramebuffer,D,D.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),K!==void 0&&le(D)}function de(D){const M=D.texture,K=r.get(D),ht=r.get(M);D.addEventListener("dispose",F);const vt=D.textures,st=D.isWebGLCubeRenderTarget===!0,qt=vt.length>1;if(qt||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=M.version,d.memory.textures++),st){K.__webglFramebuffer=[];for(let Lt=0;Lt<6;Lt++)if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer[Lt]=[];for(let Qt=0;Qt<M.mipmaps.length;Qt++)K.__webglFramebuffer[Lt][Qt]=o.createFramebuffer()}else K.__webglFramebuffer[Lt]=o.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){K.__webglFramebuffer=[];for(let Lt=0;Lt<M.mipmaps.length;Lt++)K.__webglFramebuffer[Lt]=o.createFramebuffer()}else K.__webglFramebuffer=o.createFramebuffer();if(qt)for(let Lt=0,Qt=vt.length;Lt<Qt;Lt++){const Wt=r.get(vt[Lt]);Wt.__webglTexture===void 0&&(Wt.__webglTexture=o.createTexture(),d.memory.textures++)}if(D.samples>0&&Gt(D)===!1){K.__webglMultisampledFramebuffer=o.createFramebuffer(),K.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Lt=0;Lt<vt.length;Lt++){const Qt=vt[Lt];K.__webglColorRenderbuffer[Lt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,K.__webglColorRenderbuffer[Lt]);const Wt=u.convert(Qt.format,Qt.colorSpace),St=u.convert(Qt.type),Mt=U(Qt.internalFormat,Wt,St,Qt.colorSpace,D.isXRRenderTarget===!0),Yt=Oe(D);o.renderbufferStorageMultisample(o.RENDERBUFFER,Yt,Mt,D.width,D.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Lt,o.RENDERBUFFER,K.__webglColorRenderbuffer[Lt])}o.bindRenderbuffer(o.RENDERBUFFER,null),D.depthBuffer&&(K.__webglDepthRenderbuffer=o.createRenderbuffer(),Ht(K.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(st){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),at(o.TEXTURE_CUBE_MAP,M);for(let Lt=0;Lt<6;Lt++)if(M.mipmaps&&M.mipmaps.length>0)for(let Qt=0;Qt<M.mipmaps.length;Qt++)wt(K.__webglFramebuffer[Lt][Qt],D,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,Qt);else wt(K.__webglFramebuffer[Lt],D,M,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Lt,0);y(M)&&_(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qt){for(let Lt=0,Qt=vt.length;Lt<Qt;Lt++){const Wt=vt[Lt],St=r.get(Wt);let Mt=o.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Mt=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Mt,St.__webglTexture),at(Mt,Wt),wt(K.__webglFramebuffer,D,Wt,o.COLOR_ATTACHMENT0+Lt,Mt,0),y(Wt)&&_(Mt)}i.unbindTexture()}else{let Lt=o.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Lt=D.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Lt,ht.__webglTexture),at(Lt,M),M.mipmaps&&M.mipmaps.length>0)for(let Qt=0;Qt<M.mipmaps.length;Qt++)wt(K.__webglFramebuffer[Qt],D,M,o.COLOR_ATTACHMENT0,Lt,Qt);else wt(K.__webglFramebuffer,D,M,o.COLOR_ATTACHMENT0,Lt,0);y(M)&&_(Lt),i.unbindTexture()}D.depthBuffer&&le(D)}function Te(D){const M=D.textures;for(let K=0,ht=M.length;K<ht;K++){const vt=M[K];if(y(vt)){const st=B(D),qt=r.get(vt).__webglTexture;i.bindTexture(st,qt),_(st),i.unbindTexture()}}}const I=[],he=[];function me(D){if(D.samples>0){if(Gt(D)===!1){const M=D.textures,K=D.width,ht=D.height;let vt=o.COLOR_BUFFER_BIT;const st=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qt=r.get(D),Lt=M.length>1;if(Lt)for(let Wt=0;Wt<M.length;Wt++)i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer);const Qt=D.texture.mipmaps;Qt&&Qt.length>0?i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer[0]):i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let Wt=0;Wt<M.length;Wt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),Lt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,qt.__webglColorRenderbuffer[Wt]);const St=r.get(M[Wt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,St,0)}o.blitFramebuffer(0,0,K,ht,0,0,K,ht,vt,o.NEAREST),m===!0&&(I.length=0,he.length=0,I.push(o.COLOR_ATTACHMENT0+Wt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(I.push(st),he.push(st),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,he)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,I))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Lt)for(let Wt=0;Wt<M.length;Wt++){i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.RENDERBUFFER,qt.__webglColorRenderbuffer[Wt]);const St=r.get(M[Wt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Wt,o.TEXTURE_2D,St,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&m){const M=D.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[M])}}}function Oe(D){return Math.min(l.maxSamples,D.samples)}function Gt(D){const M=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ke(D){const M=d.render.frame;v.get(D)!==M&&(v.set(D,M),D.update())}function jt(D,M){const K=D.colorSpace,ht=D.format,vt=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||K!==Ts&&K!==Xa&&(De.getTransfer(K)===Ge?(ht!==bi||vt!==fa)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nn("WebGLTextures: Unsupported texture color space:",K)),M}function ae(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(p.width=D.naturalWidth||D.width,p.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(p.width=D.displayWidth,p.height=D.displayHeight):(p.width=D.width,p.height=D.height),p}this.allocateTextureUnit=ot,this.resetTextureUnits=tt,this.setTexture2D=ft,this.setTexture2DArray=z,this.setTexture3D=j,this.setTextureCube=Y,this.rebindTextures=$e,this.setupRenderTarget=de,this.updateRenderTargetMipmap=Te,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=le,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=Gt}function iE(o,e){function i(r,l=Xa){let u;const d=De.getTransfer(l);if(r===fa)return o.UNSIGNED_BYTE;if(r===mh)return o.UNSIGNED_SHORT_4_4_4_4;if(r===xh)return o.UNSIGNED_SHORT_5_5_5_1;if(r===xg)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===gg)return o.UNSIGNED_INT_10F_11F_11F_REV;if(r===pg)return o.BYTE;if(r===mg)return o.SHORT;if(r===No)return o.UNSIGNED_SHORT;if(r===ph)return o.INT;if(r===Ar)return o.UNSIGNED_INT;if(r===la)return o.FLOAT;if(r===Cs)return o.HALF_FLOAT;if(r===_g)return o.ALPHA;if(r===vg)return o.RGB;if(r===bi)return o.RGBA;if(r===zo)return o.DEPTH_COMPONENT;if(r===Po)return o.DEPTH_STENCIL;if(r===Sg)return o.RED;if(r===gh)return o.RED_INTEGER;if(r===_h)return o.RG;if(r===vh)return o.RG_INTEGER;if(r===Sh)return o.RGBA_INTEGER;if(r===Sc||r===yc||r===bc||r===Mc)if(d===Ge)if(u=e.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===Sc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===yc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===bc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Mc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=e.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===Sc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===yc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===bc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Mc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Pd||r===Bd||r===Fd||r===Id)if(u=e.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Pd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Bd)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Fd)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Id)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Hd||r===Gd||r===Vd)if(u=e.get("WEBGL_compressed_texture_etc"),u!==null){if(r===Hd||r===Gd)return d===Ge?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Vd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===kd||r===Xd||r===Wd||r===qd||r===Yd||r===jd||r===Zd||r===Kd||r===Qd||r===Jd||r===$d||r===th||r===eh||r===nh)if(u=e.get("WEBGL_compressed_texture_astc"),u!==null){if(r===kd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Xd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Wd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===qd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Yd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===jd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Zd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Kd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Qd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Jd)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===$d)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===th)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===eh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===nh)return d===Ge?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ih||r===ah||r===rh)if(u=e.get("EXT_texture_compression_bptc"),u!==null){if(r===ih)return d===Ge?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ah)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===rh)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===sh||r===oh||r===lh||r===ch)if(u=e.get("EXT_texture_compression_rgtc"),u!==null){if(r===sh)return u.COMPRESSED_RED_RGTC1_EXT;if(r===oh)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===lh)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===ch)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Oo?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const aE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rE=`
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

}`;class sE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new Og(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new Mi({vertexShader:aE,fragmentShader:rE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Li(new Rs(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oE extends ws{constructor(e,i){super();const r=this;let l=null,u=1,d=null,h="local-floor",m=1,p=null,v=null,g=null,S=null,b=null,A=null;const R=typeof XRWebGLBinding<"u",y=new sE,_={},B=i.getContextAttributes();let U=null,P=null;const k=[],N=[],F=new Ue;let nt=null;const w=new Si;w.viewport=new an;const C=new Si;C.viewport=new an;const V=[w,C],tt=new Ty;let ot=null,mt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let lt=k[et];return lt===void 0&&(lt=new pd,k[et]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(et){let lt=k[et];return lt===void 0&&(lt=new pd,k[et]=lt),lt.getGripSpace()},this.getHand=function(et){let lt=k[et];return lt===void 0&&(lt=new pd,k[et]=lt),lt.getHandSpace()};function ft(et){const lt=N.indexOf(et.inputSource);if(lt===-1)return;const wt=k[lt];wt!==void 0&&(wt.update(et.inputSource,et.frame,p||d),wt.dispatchEvent({type:et.type,data:et.inputSource}))}function z(){l.removeEventListener("select",ft),l.removeEventListener("selectstart",ft),l.removeEventListener("selectend",ft),l.removeEventListener("squeeze",ft),l.removeEventListener("squeezestart",ft),l.removeEventListener("squeezeend",ft),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",j);for(let et=0;et<k.length;et++){const lt=N[et];lt!==null&&(N[et]=null,k[et].disconnect(lt))}ot=null,mt=null,y.reset();for(const et in _)delete _[et];e.setRenderTarget(U),b=null,S=null,g=null,l=null,P=null,zt.stop(),r.isPresenting=!1,e.setPixelRatio(nt),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){u=et,r.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){h=et,r.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(et){p=et},this.getBaseLayer=function(){return S!==null?S:b},this.getBinding=function(){return g===null&&R&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return A},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",ft),l.addEventListener("selectstart",ft),l.addEventListener("selectend",ft),l.addEventListener("squeeze",ft),l.addEventListener("squeezestart",ft),l.addEventListener("squeezeend",ft),l.addEventListener("end",z),l.addEventListener("inputsourceschange",j),B.xrCompatible!==!0&&await i.makeXRCompatible(),nt=e.getPixelRatio(),e.getSize(F),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Ht=null,Xt=null;B.depth&&(Xt=B.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,wt=B.stencil?Po:zo,Ht=B.stencil?Oo:Ar);const le={colorFormat:i.RGBA8,depthFormat:Xt,scaleFactor:u};g=this.getBinding(),S=g.createProjectionLayer(le),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),P=new ja(S.textureWidth,S.textureHeight,{format:bi,type:fa,depthTexture:new Ng(S.textureWidth,S.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:B.stencil,colorSpace:e.outputColorSpace,samples:B.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const wt={antialias:B.antialias,alpha:!0,depth:B.depth,stencil:B.stencil,framebufferScaleFactor:u};b=new XRWebGLLayer(l,i,wt),l.updateRenderState({baseLayer:b}),e.setPixelRatio(1),e.setSize(b.framebufferWidth,b.framebufferHeight,!1),P=new ja(b.framebufferWidth,b.framebufferHeight,{format:bi,type:fa,colorSpace:e.outputColorSpace,stencilBuffer:B.stencil,resolveDepthBuffer:b.ignoreDepthValues===!1,resolveStencilBuffer:b.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),zt.setContext(l),zt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function j(et){for(let lt=0;lt<et.removed.length;lt++){const wt=et.removed[lt],Ht=N.indexOf(wt);Ht>=0&&(N[Ht]=null,k[Ht].disconnect(wt))}for(let lt=0;lt<et.added.length;lt++){const wt=et.added[lt];let Ht=N.indexOf(wt);if(Ht===-1){for(let le=0;le<k.length;le++)if(le>=N.length){N.push(wt),Ht=le;break}else if(N[le]===null){N[le]=wt,Ht=le;break}if(Ht===-1)break}const Xt=k[Ht];Xt&&Xt.connect(wt)}}const Y=new ct,gt=new ct;function _t(et,lt,wt){Y.setFromMatrixPosition(lt.matrixWorld),gt.setFromMatrixPosition(wt.matrixWorld);const Ht=Y.distanceTo(gt),Xt=lt.projectionMatrix.elements,le=wt.projectionMatrix.elements,$e=Xt[14]/(Xt[10]-1),de=Xt[14]/(Xt[10]+1),Te=(Xt[9]+1)/Xt[5],I=(Xt[9]-1)/Xt[5],he=(Xt[8]-1)/Xt[0],me=(le[8]+1)/le[0],Oe=$e*he,Gt=$e*me,ke=Ht/(-he+me),jt=ke*-he;if(lt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(jt),et.translateZ(ke),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Xt[10]===-1)et.projectionMatrix.copy(lt.projectionMatrix),et.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const ae=$e+ke,D=de+ke,M=Oe-jt,K=Gt+(Ht-jt),ht=Te*de/D*ae,vt=I*de/D*ae;et.projectionMatrix.makePerspective(M,K,ht,vt,ae,D),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function L(et,lt){lt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(lt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let lt=et.near,wt=et.far;y.texture!==null&&(y.depthNear>0&&(lt=y.depthNear),y.depthFar>0&&(wt=y.depthFar)),tt.near=C.near=w.near=lt,tt.far=C.far=w.far=wt,(ot!==tt.near||mt!==tt.far)&&(l.updateRenderState({depthNear:tt.near,depthFar:tt.far}),ot=tt.near,mt=tt.far),tt.layers.mask=et.layers.mask|6,w.layers.mask=tt.layers.mask&3,C.layers.mask=tt.layers.mask&5;const Ht=et.parent,Xt=tt.cameras;L(tt,Ht);for(let le=0;le<Xt.length;le++)L(Xt[le],Ht);Xt.length===2?_t(tt,w,C):tt.projectionMatrix.copy(w.projectionMatrix),at(et,tt,Ht)};function at(et,lt,wt){wt===null?et.matrix.copy(lt.matrixWorld):(et.matrix.copy(wt.matrixWorld),et.matrix.invert(),et.matrix.multiply(lt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(lt.projectionMatrix),et.projectionMatrixInverse.copy(lt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=uh*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return tt},this.getFoveation=function(){if(!(S===null&&b===null))return m},this.setFoveation=function(et){m=et,S!==null&&(S.fixedFoveation=et),b!==null&&b.fixedFoveation!==void 0&&(b.fixedFoveation=et)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(tt)},this.getCameraTexture=function(et){return _[et]};let yt=null;function Tt(et,lt){if(v=lt.getViewerPose(p||d),A=lt,v!==null){const wt=v.views;b!==null&&(e.setRenderTargetFramebuffer(P,b.framebuffer),e.setRenderTarget(P));let Ht=!1;wt.length!==tt.cameras.length&&(tt.cameras.length=0,Ht=!0);for(let de=0;de<wt.length;de++){const Te=wt[de];let I=null;if(b!==null)I=b.getViewport(Te);else{const me=g.getViewSubImage(S,Te);I=me.viewport,de===0&&(e.setRenderTargetTextures(P,me.colorTexture,me.depthStencilTexture),e.setRenderTarget(P))}let he=V[de];he===void 0&&(he=new Si,he.layers.enable(de),he.viewport=new an,V[de]=he),he.matrix.fromArray(Te.transform.matrix),he.matrix.decompose(he.position,he.quaternion,he.scale),he.projectionMatrix.fromArray(Te.projectionMatrix),he.projectionMatrixInverse.copy(he.projectionMatrix).invert(),he.viewport.set(I.x,I.y,I.width,I.height),de===0&&(tt.matrix.copy(he.matrix),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale)),Ht===!0&&tt.cameras.push(he)}const Xt=l.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){g=r.getBinding();const de=g.getDepthInformation(wt[0]);de&&de.isValid&&de.texture&&y.init(de,l.renderState)}if(Xt&&Xt.includes("camera-access")&&R){e.state.unbindTexture(),g=r.getBinding();for(let de=0;de<wt.length;de++){const Te=wt[de].camera;if(Te){let I=_[Te];I||(I=new Og,_[Te]=I);const he=g.getCameraImage(Te);I.sourceTexture=he}}}}for(let wt=0;wt<k.length;wt++){const Ht=N[wt],Xt=k[wt];Ht!==null&&Xt!==void 0&&Xt.update(Ht,lt,p||d)}yt&&yt(et,lt),lt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:lt}),A=null}const zt=new Pg;zt.setAnimationLoop(Tt),this.setAnimationLoop=function(et){yt=et},this.dispose=function(){}}}const vr=new da,lE=new mn;function cE(o,e){function i(y,_){y.matrixAutoUpdate===!0&&y.updateMatrix(),_.value.copy(y.matrix)}function r(y,_){_.color.getRGB(y.fogColor.value,wg(o)),_.isFog?(y.fogNear.value=_.near,y.fogFar.value=_.far):_.isFogExp2&&(y.fogDensity.value=_.density)}function l(y,_,B,U,P){_.isMeshBasicMaterial||_.isMeshLambertMaterial?u(y,_):_.isMeshToonMaterial?(u(y,_),g(y,_)):_.isMeshPhongMaterial?(u(y,_),v(y,_)):_.isMeshStandardMaterial?(u(y,_),S(y,_),_.isMeshPhysicalMaterial&&b(y,_,P)):_.isMeshMatcapMaterial?(u(y,_),A(y,_)):_.isMeshDepthMaterial?u(y,_):_.isMeshDistanceMaterial?(u(y,_),R(y,_)):_.isMeshNormalMaterial?u(y,_):_.isLineBasicMaterial?(d(y,_),_.isLineDashedMaterial&&h(y,_)):_.isPointsMaterial?m(y,_,B,U):_.isSpriteMaterial?p(y,_):_.isShadowMaterial?(y.color.value.copy(_.color),y.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function u(y,_){y.opacity.value=_.opacity,_.color&&y.diffuse.value.copy(_.color),_.emissive&&y.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.bumpMap&&(y.bumpMap.value=_.bumpMap,i(_.bumpMap,y.bumpMapTransform),y.bumpScale.value=_.bumpScale,_.side===Vn&&(y.bumpScale.value*=-1)),_.normalMap&&(y.normalMap.value=_.normalMap,i(_.normalMap,y.normalMapTransform),y.normalScale.value.copy(_.normalScale),_.side===Vn&&y.normalScale.value.negate()),_.displacementMap&&(y.displacementMap.value=_.displacementMap,i(_.displacementMap,y.displacementMapTransform),y.displacementScale.value=_.displacementScale,y.displacementBias.value=_.displacementBias),_.emissiveMap&&(y.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,y.emissiveMapTransform)),_.specularMap&&(y.specularMap.value=_.specularMap,i(_.specularMap,y.specularMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest);const B=e.get(_),U=B.envMap,P=B.envMapRotation;U&&(y.envMap.value=U,vr.copy(P),vr.x*=-1,vr.y*=-1,vr.z*=-1,U.isCubeTexture&&U.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),y.envMapRotation.value.setFromMatrix4(lE.makeRotationFromEuler(vr)),y.flipEnvMap.value=U.isCubeTexture&&U.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=_.reflectivity,y.ior.value=_.ior,y.refractionRatio.value=_.refractionRatio),_.lightMap&&(y.lightMap.value=_.lightMap,y.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,y.lightMapTransform)),_.aoMap&&(y.aoMap.value=_.aoMap,y.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,y.aoMapTransform))}function d(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform))}function h(y,_){y.dashSize.value=_.dashSize,y.totalSize.value=_.dashSize+_.gapSize,y.scale.value=_.scale}function m(y,_,B,U){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.size.value=_.size*B,y.scale.value=U*.5,_.map&&(y.map.value=_.map,i(_.map,y.uvTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function p(y,_){y.diffuse.value.copy(_.color),y.opacity.value=_.opacity,y.rotation.value=_.rotation,_.map&&(y.map.value=_.map,i(_.map,y.mapTransform)),_.alphaMap&&(y.alphaMap.value=_.alphaMap,i(_.alphaMap,y.alphaMapTransform)),_.alphaTest>0&&(y.alphaTest.value=_.alphaTest)}function v(y,_){y.specular.value.copy(_.specular),y.shininess.value=Math.max(_.shininess,1e-4)}function g(y,_){_.gradientMap&&(y.gradientMap.value=_.gradientMap)}function S(y,_){y.metalness.value=_.metalness,_.metalnessMap&&(y.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,y.metalnessMapTransform)),y.roughness.value=_.roughness,_.roughnessMap&&(y.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,y.roughnessMapTransform)),_.envMap&&(y.envMapIntensity.value=_.envMapIntensity)}function b(y,_,B){y.ior.value=_.ior,_.sheen>0&&(y.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),y.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(y.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,y.sheenColorMapTransform)),_.sheenRoughnessMap&&(y.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,y.sheenRoughnessMapTransform))),_.clearcoat>0&&(y.clearcoat.value=_.clearcoat,y.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(y.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,y.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(y.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Vn&&y.clearcoatNormalScale.value.negate())),_.dispersion>0&&(y.dispersion.value=_.dispersion),_.iridescence>0&&(y.iridescence.value=_.iridescence,y.iridescenceIOR.value=_.iridescenceIOR,y.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(y.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,y.iridescenceMapTransform)),_.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),_.transmission>0&&(y.transmission.value=_.transmission,y.transmissionSamplerMap.value=B.texture,y.transmissionSamplerSize.value.set(B.width,B.height),_.transmissionMap&&(y.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,y.transmissionMapTransform)),y.thickness.value=_.thickness,_.thicknessMap&&(y.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=_.attenuationDistance,y.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(y.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(y.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=_.specularIntensity,y.specularColor.value.copy(_.specularColor),_.specularColorMap&&(y.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,y.specularColorMapTransform)),_.specularIntensityMap&&(y.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,y.specularIntensityMapTransform))}function A(y,_){_.matcap&&(y.matcap.value=_.matcap)}function R(y,_){const B=e.get(_).light;y.referencePosition.value.setFromMatrixPosition(B.matrixWorld),y.nearDistance.value=B.shadow.camera.near,y.farDistance.value=B.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function uE(o,e,i,r){let l={},u={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(B,U){const P=U.program;r.uniformBlockBinding(B,P)}function p(B,U){let P=l[B.id];P===void 0&&(A(B),P=v(B),l[B.id]=P,B.addEventListener("dispose",y));const k=U.program;r.updateUBOMapping(B,k);const N=e.render.frame;u[B.id]!==N&&(S(B),u[B.id]=N)}function v(B){const U=g();B.__bindingPointIndex=U;const P=o.createBuffer(),k=B.__size,N=B.usage;return o.bindBuffer(o.UNIFORM_BUFFER,P),o.bufferData(o.UNIFORM_BUFFER,k,N),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,U,P),P}function g(){for(let B=0;B<h;B++)if(d.indexOf(B)===-1)return d.push(B),B;return nn("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(B){const U=l[B.id],P=B.uniforms,k=B.__cache;o.bindBuffer(o.UNIFORM_BUFFER,U);for(let N=0,F=P.length;N<F;N++){const nt=Array.isArray(P[N])?P[N]:[P[N]];for(let w=0,C=nt.length;w<C;w++){const V=nt[w];if(b(V,N,w,k)===!0){const tt=V.__offset,ot=Array.isArray(V.value)?V.value:[V.value];let mt=0;for(let ft=0;ft<ot.length;ft++){const z=ot[ft],j=R(z);typeof z=="number"||typeof z=="boolean"?(V.__data[0]=z,o.bufferSubData(o.UNIFORM_BUFFER,tt+mt,V.__data)):z.isMatrix3?(V.__data[0]=z.elements[0],V.__data[1]=z.elements[1],V.__data[2]=z.elements[2],V.__data[3]=0,V.__data[4]=z.elements[3],V.__data[5]=z.elements[4],V.__data[6]=z.elements[5],V.__data[7]=0,V.__data[8]=z.elements[6],V.__data[9]=z.elements[7],V.__data[10]=z.elements[8],V.__data[11]=0):(z.toArray(V.__data,mt),mt+=j.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,tt,V.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function b(B,U,P,k){const N=B.value,F=U+"_"+P;if(k[F]===void 0)return typeof N=="number"||typeof N=="boolean"?k[F]=N:k[F]=N.clone(),!0;{const nt=k[F];if(typeof N=="number"||typeof N=="boolean"){if(nt!==N)return k[F]=N,!0}else if(nt.equals(N)===!1)return nt.copy(N),!0}return!1}function A(B){const U=B.uniforms;let P=0;const k=16;for(let F=0,nt=U.length;F<nt;F++){const w=Array.isArray(U[F])?U[F]:[U[F]];for(let C=0,V=w.length;C<V;C++){const tt=w[C],ot=Array.isArray(tt.value)?tt.value:[tt.value];for(let mt=0,ft=ot.length;mt<ft;mt++){const z=ot[mt],j=R(z),Y=P%k,gt=Y%j.boundary,_t=Y+gt;P+=gt,_t!==0&&k-_t<j.storage&&(P+=k-_t),tt.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),tt.__offset=P,P+=j.storage}}}const N=P%k;return N>0&&(P+=k-N),B.__size=P,B.__cache={},this}function R(B){const U={boundary:0,storage:0};return typeof B=="number"||typeof B=="boolean"?(U.boundary=4,U.storage=4):B.isVector2?(U.boundary=8,U.storage=8):B.isVector3||B.isColor?(U.boundary=16,U.storage=12):B.isVector4?(U.boundary=16,U.storage=16):B.isMatrix3?(U.boundary=48,U.storage=48):B.isMatrix4?(U.boundary=64,U.storage=64):B.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):oe("WebGLRenderer: Unsupported uniform value type.",B),U}function y(B){const U=B.target;U.removeEventListener("dispose",y);const P=d.indexOf(U.__bindingPointIndex);d.splice(P,1),o.deleteBuffer(l[U.id]),delete l[U.id],delete u[U.id]}function _(){for(const B in l)o.deleteBuffer(l[B]);d=[],l={},u={}}return{bind:m,update:p,dispose:_}}const fE=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let aa=null;function dE(){return aa===null&&(aa=new vy(fE,32,32,_h,Cs),aa.minFilter=di,aa.magFilter=di,aa.wrapS=oa,aa.wrapT=oa,aa.generateMipmaps=!1,aa.needsUpdate=!0),aa}class hE{constructor(e={}){const{canvas:i=WS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=d;const A=new Set([Sh,vh,gh]),R=new Set([fa,Ar,No,Oo,mh,xh]),y=new Uint32Array(4),_=new Int32Array(4);let B=null,U=null;const P=[],k=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qa,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let F=!1;this._outputColorSpace=fi;let nt=0,w=0,C=null,V=-1,tt=null;const ot=new an,mt=new an;let ft=null;const z=new Ve(0);let j=0,Y=i.width,gt=i.height,_t=1,L=null,at=null;const yt=new an(0,0,Y,gt),Tt=new an(0,0,Y,gt);let zt=!1;const et=new Lg;let lt=!1,wt=!1;const Ht=new mn,Xt=new ct,le=new an,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let de=!1;function Te(){return C===null?_t:1}let I=r;function he(T,X){return i.getContext(T,X)}try{const T={alpha:!0,depth:l,stencil:u,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${hh}`),i.addEventListener("webglcontextlost",bt,!1),i.addEventListener("webglcontextrestored",xt,!1),i.addEventListener("webglcontextcreationerror",Bt,!1),I===null){const X="webgl2";if(I=he(X,T),I===null)throw he(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw T("WebGLRenderer: "+T.message),T}let me,Oe,Gt,ke,jt,ae,D,M,K,ht,vt,st,qt,Lt,Qt,Wt,St,Mt,Yt,Vt,Ot,ne,H,Dt;function Rt(){me=new y3(I),me.init(),ne=new iE(I,me),Oe=new d3(I,me,e,ne),Gt=new eE(I,me),Oe.reversedDepthBuffer&&S&&Gt.buffers.depth.setReversed(!0),ke=new E3(I),jt=new V1,ae=new nE(I,me,Gt,jt,Oe,ne,ke),D=new p3(N),M=new S3(N),K=new Cy(I),H=new u3(I,K),ht=new b3(I,K,ke,H),vt=new A3(I,ht,K,ke),Yt=new T3(I,Oe,ae),Wt=new h3(jt),st=new G1(N,D,M,me,Oe,H,Wt),qt=new cE(N,jt),Lt=new X1,Qt=new K1(me),Mt=new c3(N,D,M,Gt,vt,b,m),St=new $1(N,vt,Oe),Dt=new uE(I,ke,Oe,Gt),Vt=new f3(I,me,ke),Ot=new M3(I,me,ke),ke.programs=st.programs,N.capabilities=Oe,N.extensions=me,N.properties=jt,N.renderLists=Lt,N.shadowMap=St,N.state=Gt,N.info=ke}Rt();const Ct=new oE(N,I);this.xr=Ct,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const T=me.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=me.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return _t},this.setPixelRatio=function(T){T!==void 0&&(_t=T,this.setSize(Y,gt,!1))},this.getSize=function(T){return T.set(Y,gt)},this.setSize=function(T,X,it=!0){if(Ct.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=T,gt=X,i.width=Math.floor(T*_t),i.height=Math.floor(X*_t),it===!0&&(i.style.width=T+"px",i.style.height=X+"px"),this.setViewport(0,0,T,X)},this.getDrawingBufferSize=function(T){return T.set(Y*_t,gt*_t).floor()},this.setDrawingBufferSize=function(T,X,it){Y=T,gt=X,_t=it,i.width=Math.floor(T*it),i.height=Math.floor(X*it),this.setViewport(0,0,T,X)},this.getCurrentViewport=function(T){return T.copy(ot)},this.getViewport=function(T){return T.copy(yt)},this.setViewport=function(T,X,it,J){T.isVector4?yt.set(T.x,T.y,T.z,T.w):yt.set(T,X,it,J),Gt.viewport(ot.copy(yt).multiplyScalar(_t).round())},this.getScissor=function(T){return T.copy(Tt)},this.setScissor=function(T,X,it,J){T.isVector4?Tt.set(T.x,T.y,T.z,T.w):Tt.set(T,X,it,J),Gt.scissor(mt.copy(Tt).multiplyScalar(_t).round())},this.getScissorTest=function(){return zt},this.setScissorTest=function(T){Gt.setScissorTest(zt=T)},this.setOpaqueSort=function(T){L=T},this.setTransparentSort=function(T){at=T},this.getClearColor=function(T){return T.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor(...arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha(...arguments)},this.clear=function(T=!0,X=!0,it=!0){let J=0;if(T){let q=!1;if(C!==null){const At=C.texture.format;q=A.has(At)}if(q){const At=C.texture.type,Ut=R.has(At),Pt=Mt.getClearColor(),Ft=Mt.getClearAlpha(),$t=Pt.r,ee=Pt.g,Zt=Pt.b;Ut?(y[0]=$t,y[1]=ee,y[2]=Zt,y[3]=Ft,I.clearBufferuiv(I.COLOR,0,y)):(_[0]=$t,_[1]=ee,_[2]=Zt,_[3]=Ft,I.clearBufferiv(I.COLOR,0,_))}else J|=I.COLOR_BUFFER_BIT}X&&(J|=I.DEPTH_BUFFER_BIT),it&&(J|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",bt,!1),i.removeEventListener("webglcontextrestored",xt,!1),i.removeEventListener("webglcontextcreationerror",Bt,!1),Mt.dispose(),Lt.dispose(),Qt.dispose(),jt.dispose(),D.dispose(),M.dispose(),vt.dispose(),H.dispose(),Dt.dispose(),st.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",Us),Ct.removeEventListener("sessionend",Ls),hi.stop()};function bt(T){T.preventDefault(),yx("WebGLRenderer: Context Lost."),F=!0}function xt(){yx("WebGLRenderer: Context Restored."),F=!1;const T=ke.autoReset,X=St.enabled,it=St.autoUpdate,J=St.needsUpdate,q=St.type;Rt(),ke.autoReset=T,St.enabled=X,St.autoUpdate=it,St.needsUpdate=J,St.type=q}function Bt(T){nn("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ie(T){const X=T.target;X.removeEventListener("dispose",ie),Be(X)}function Be(T){Ae(T),jt.remove(T)}function Ae(T){const X=jt.get(T).programs;X!==void 0&&(X.forEach(function(it){st.releaseProgram(it)}),T.isShaderMaterial&&st.releaseShaderCache(T))}this.renderBufferDirect=function(T,X,it,J,q,At){X===null&&(X=$e);const Ut=q.isMesh&&q.matrixWorld.determinant()<0,Pt=Lc(T,X,it,J,q);Gt.setMaterial(J,Ut);let Ft=it.index,$t=1;if(J.wireframe===!0){if(Ft=ht.getWireframeAttribute(it),Ft===void 0)return;$t=2}const ee=it.drawRange,Zt=it.attributes.position;let ce=ee.start*$t,Ee=(ee.start+ee.count)*$t;At!==null&&(ce=Math.max(ce,At.start*$t),Ee=Math.min(Ee,(At.start+At.count)*$t)),Ft!==null?(ce=Math.max(ce,0),Ee=Math.min(Ee,Ft.count)):Zt!=null&&(ce=Math.max(ce,0),Ee=Math.min(Ee,Zt.count));const Re=Ee-ce;if(Re<0||Re===1/0)return;H.setup(q,J,Pt,it,Ft);let Se,Ne=Vt;if(Ft!==null&&(Se=K.get(Ft),Ne=Ot,Ne.setIndex(Se)),q.isMesh)J.wireframe===!0?(Gt.setLineWidth(J.wireframeLinewidth*Te()),Ne.setMode(I.LINES)):Ne.setMode(I.TRIANGLES);else if(q.isLine){let Jt=J.linewidth;Jt===void 0&&(Jt=1),Gt.setLineWidth(Jt*Te()),q.isLineSegments?Ne.setMode(I.LINES):q.isLineLoop?Ne.setMode(I.LINE_LOOP):Ne.setMode(I.LINE_STRIP)}else q.isPoints?Ne.setMode(I.POINTS):q.isSprite&&Ne.setMode(I.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Bo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ne.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(me.get("WEBGL_multi_draw"))Ne.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Jt=q._multiDrawStarts,Xe=q._multiDrawCounts,ye=q._multiDrawCount,_n=Ft?K.get(Ft).bytesPerElement:1,pa=jt.get(J).currentProgram.getUniforms();for(let qe=0;qe<ye;qe++)pa.setValue(I,"_gl_DrawID",qe),Ne.render(Jt[qe]/_n,Xe[qe])}else if(q.isInstancedMesh)Ne.renderInstances(ce,Re,q.count);else if(it.isInstancedBufferGeometry){const Jt=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Xe=Math.min(it.instanceCount,Jt);Ne.renderInstances(ce,Re,Xe)}else Ne.render(ce,Re)};function Cn(T,X,it){T.transparent===!0&&T.side===sa&&T.forceSinglePass===!1?(T.side=Vn,T.needsUpdate=!0,fn(T,X,it),T.side=Ya,T.needsUpdate=!0,fn(T,X,it),T.side=sa):fn(T,X,it)}this.compile=function(T,X,it=null){it===null&&(it=T),U=Qt.get(it),U.init(X),k.push(U),it.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(U.pushLight(q),q.castShadow&&U.pushShadow(q))}),T!==it&&T.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(U.pushLight(q),q.castShadow&&U.pushShadow(q))}),U.setupLights();const J=new Set;return T.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const At=q.material;if(At)if(Array.isArray(At))for(let Ut=0;Ut<At.length;Ut++){const Pt=At[Ut];Cn(Pt,it,q),J.add(Pt)}else Cn(At,it,q),J.add(At)}),U=k.pop(),J},this.compileAsync=function(T,X,it=null){const J=this.compile(T,X,it);return new Promise(q=>{function At(){if(J.forEach(function(Ut){jt.get(Ut).currentProgram.isReady()&&J.delete(Ut)}),J.size===0){q(T);return}setTimeout(At,10)}me.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let kn=null;function Vo(T){kn&&kn(T)}function Us(){hi.stop()}function Ls(){hi.start()}const hi=new Pg;hi.setAnimationLoop(Vo),typeof self<"u"&&hi.setContext(self),this.setAnimationLoop=function(T){kn=T,Ct.setAnimationLoop(T),T===null?hi.stop():hi.start()},Ct.addEventListener("sessionstart",Us),Ct.addEventListener("sessionend",Ls),this.render=function(T,X){if(X!==void 0&&X.isCamera!==!0){nn("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(X),X=Ct.getCamera()),T.isScene===!0&&T.onBeforeRender(N,T,X,C),U=Qt.get(T,k.length),U.init(X),k.push(U),Ht.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),et.setFromProjectionMatrix(Ht,Di,X.reversedDepth),wt=this.localClippingEnabled,lt=Wt.init(this.clippingPlanes,wt),B=Lt.get(T,P.length),B.init(),P.push(B),Ct.enabled===!0&&Ct.isPresenting===!0){const At=N.xr.getDepthSensingMesh();At!==null&&Ka(At,X,-1/0,N.sortObjects)}Ka(T,X,0,N.sortObjects),B.finish(),N.sortObjects===!0&&B.sort(L,at),de=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,de&&Mt.addToRenderList(B,T),this.info.render.frame++,lt===!0&&Wt.beginShadows();const it=U.state.shadowsArray;St.render(it,T,X),lt===!0&&Wt.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=B.opaque,q=B.transmissive;if(U.setupLights(),X.isArrayCamera){const At=X.cameras;if(q.length>0)for(let Ut=0,Pt=At.length;Ut<Pt;Ut++){const Ft=At[Ut];Os(J,q,T,Ft)}de&&Mt.render(T);for(let Ut=0,Pt=At.length;Ut<Pt;Ut++){const Ft=At[Ut];Ns(B,T,Ft,Ft.viewport)}}else q.length>0&&Os(J,q,T,X),de&&Mt.render(T),Ns(B,T,X);C!==null&&w===0&&(ae.updateMultisampleRenderTarget(C),ae.updateRenderTargetMipmap(C)),T.isScene===!0&&T.onAfterRender(N,T,X),H.resetDefaultState(),V=-1,tt=null,k.pop(),k.length>0?(U=k[k.length-1],lt===!0&&Wt.setGlobalState(N.clippingPlanes,U.state.camera)):U=null,P.pop(),P.length>0?B=P[P.length-1]:B=null};function Ka(T,X,it,J){if(T.visible===!1)return;if(T.layers.test(X.layers)){if(T.isGroup)it=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(X);else if(T.isLight)U.pushLight(T),T.castShadow&&U.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||et.intersectsSprite(T)){J&&le.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ht);const Ut=vt.update(T),Pt=T.material;Pt.visible&&B.push(T,Ut,Pt,it,le.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||et.intersectsObject(T))){const Ut=vt.update(T),Pt=T.material;if(J&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),le.copy(T.boundingSphere.center)):(Ut.boundingSphere===null&&Ut.computeBoundingSphere(),le.copy(Ut.boundingSphere.center)),le.applyMatrix4(T.matrixWorld).applyMatrix4(Ht)),Array.isArray(Pt)){const Ft=Ut.groups;for(let $t=0,ee=Ft.length;$t<ee;$t++){const Zt=Ft[$t],ce=Pt[Zt.materialIndex];ce&&ce.visible&&B.push(T,Ut,ce,it,le.z,Zt)}}else Pt.visible&&B.push(T,Ut,Pt,it,le.z,null)}}const At=T.children;for(let Ut=0,Pt=At.length;Ut<Pt;Ut++)Ka(At[Ut],X,it,J)}function Ns(T,X,it,J){const{opaque:q,transmissive:At,transparent:Ut}=T;U.setupLightsView(it),lt===!0&&Wt.setGlobalState(N.clippingPlanes,it),J&&Gt.viewport(ot.copy(J)),q.length>0&&Xn(q,X,it),At.length>0&&Xn(At,X,it),Ut.length>0&&Xn(Ut,X,it),Gt.buffers.depth.setTest(!0),Gt.buffers.depth.setMask(!0),Gt.buffers.color.setMask(!0),Gt.setPolygonOffset(!1)}function Os(T,X,it,J){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;U.state.transmissionRenderTarget[J.id]===void 0&&(U.state.transmissionRenderTarget[J.id]=new ja(1,1,{generateMipmaps:!0,type:me.has("EXT_color_buffer_half_float")||me.has("EXT_color_buffer_float")?Cs:fa,minFilter:Er,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:De.workingColorSpace}));const At=U.state.transmissionRenderTarget[J.id],Ut=J.viewport||ot;At.setSize(Ut.z*N.transmissionResolutionScale,Ut.w*N.transmissionResolutionScale);const Pt=N.getRenderTarget(),Ft=N.getActiveCubeFace(),$t=N.getActiveMipmapLevel();N.setRenderTarget(At),N.getClearColor(z),j=N.getClearAlpha(),j<1&&N.setClearColor(16777215,.5),N.clear(),de&&Mt.render(it);const ee=N.toneMapping;N.toneMapping=qa;const Zt=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),U.setupLightsView(J),lt===!0&&Wt.setGlobalState(N.clippingPlanes,J),Xn(T,it,J),ae.updateMultisampleRenderTarget(At),ae.updateRenderTargetMipmap(At),me.has("WEBGL_multisampled_render_to_texture")===!1){let ce=!1;for(let Ee=0,Re=X.length;Ee<Re;Ee++){const Se=X[Ee],{object:Ne,geometry:Jt,material:Xe,group:ye}=Se;if(Xe.side===sa&&Ne.layers.test(J.layers)){const _n=Xe.side;Xe.side=Vn,Xe.needsUpdate=!0,rn(Ne,it,J,Jt,Xe,ye),Xe.side=_n,Xe.needsUpdate=!0,ce=!0}}ce===!0&&(ae.updateMultisampleRenderTarget(At),ae.updateRenderTargetMipmap(At))}N.setRenderTarget(Pt,Ft,$t),N.setClearColor(z,j),Zt!==void 0&&(J.viewport=Zt),N.toneMapping=ee}function Xn(T,X,it){const J=X.isScene===!0?X.overrideMaterial:null;for(let q=0,At=T.length;q<At;q++){const Ut=T[q],{object:Pt,geometry:Ft,group:$t}=Ut;let ee=Ut.material;ee.allowOverride===!0&&J!==null&&(ee=J),Pt.layers.test(it.layers)&&rn(Pt,X,it,Ft,ee,$t)}}function rn(T,X,it,J,q,At){T.onBeforeRender(N,X,it,J,q,At),T.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),q.onBeforeRender(N,X,it,J,T,At),q.transparent===!0&&q.side===sa&&q.forceSinglePass===!1?(q.side=Vn,q.needsUpdate=!0,N.renderBufferDirect(it,X,J,q,T,At),q.side=Ya,q.needsUpdate=!0,N.renderBufferDirect(it,X,J,q,T,At),q.side=sa):N.renderBufferDirect(it,X,J,q,T,At),T.onAfterRender(N,X,it,J,q,At)}function fn(T,X,it){X.isScene!==!0&&(X=$e);const J=jt.get(T),q=U.state.lights,At=U.state.shadowsArray,Ut=q.state.version,Pt=st.getParameters(T,q.state,At,X,it),Ft=st.getProgramCacheKey(Pt);let $t=J.programs;J.environment=T.isMeshStandardMaterial?X.environment:null,J.fog=X.fog,J.envMap=(T.isMeshStandardMaterial?M:D).get(T.envMap||J.environment),J.envMapRotation=J.environment!==null&&T.envMap===null?X.environmentRotation:T.envMapRotation,$t===void 0&&(T.addEventListener("dispose",ie),$t=new Map,J.programs=$t);let ee=$t.get(Ft);if(ee!==void 0){if(J.currentProgram===ee&&J.lightsStateVersion===Ut)return Rr(T,Pt),ee}else Pt.uniforms=st.getUniforms(T),T.onBeforeCompile(Pt,N),ee=st.acquireProgram(Pt,Ft),$t.set(Ft,ee),J.uniforms=Pt.uniforms;const Zt=J.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Zt.clippingPlanes=Wt.uniform),Rr(T,Pt),J.needsLights=ko(T),J.lightsStateVersion=Ut,J.needsLights&&(Zt.ambientLightColor.value=q.state.ambient,Zt.lightProbe.value=q.state.probe,Zt.directionalLights.value=q.state.directional,Zt.directionalLightShadows.value=q.state.directionalShadow,Zt.spotLights.value=q.state.spot,Zt.spotLightShadows.value=q.state.spotShadow,Zt.rectAreaLights.value=q.state.rectArea,Zt.ltc_1.value=q.state.rectAreaLTC1,Zt.ltc_2.value=q.state.rectAreaLTC2,Zt.pointLights.value=q.state.point,Zt.pointLightShadows.value=q.state.pointShadow,Zt.hemisphereLights.value=q.state.hemi,Zt.directionalShadowMap.value=q.state.directionalShadowMap,Zt.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Zt.spotShadowMap.value=q.state.spotShadowMap,Zt.spotLightMatrix.value=q.state.spotLightMatrix,Zt.spotLightMap.value=q.state.spotLightMap,Zt.pointShadowMap.value=q.state.pointShadowMap,Zt.pointShadowMatrix.value=q.state.pointShadowMatrix),J.currentProgram=ee,J.uniformsList=null,ee}function Ni(T){if(T.uniformsList===null){const X=T.currentProgram.getUniforms();T.uniformsList=Ec.seqWithValue(X.seq,T.uniforms)}return T.uniformsList}function Rr(T,X){const it=jt.get(T);it.outputColorSpace=X.outputColorSpace,it.batching=X.batching,it.batchingColor=X.batchingColor,it.instancing=X.instancing,it.instancingColor=X.instancingColor,it.instancingMorph=X.instancingMorph,it.skinning=X.skinning,it.morphTargets=X.morphTargets,it.morphNormals=X.morphNormals,it.morphColors=X.morphColors,it.morphTargetsCount=X.morphTargetsCount,it.numClippingPlanes=X.numClippingPlanes,it.numIntersection=X.numClipIntersection,it.vertexAlphas=X.vertexAlphas,it.vertexTangents=X.vertexTangents,it.toneMapping=X.toneMapping}function Lc(T,X,it,J,q){X.isScene!==!0&&(X=$e),ae.resetTextureUnits();const At=X.fog,Ut=J.isMeshStandardMaterial?X.environment:null,Pt=C===null?N.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ts,Ft=(J.isMeshStandardMaterial?M:D).get(J.envMap||Ut),$t=J.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,ee=!!it.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),Zt=!!it.morphAttributes.position,ce=!!it.morphAttributes.normal,Ee=!!it.morphAttributes.color;let Re=qa;J.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Re=N.toneMapping);const Se=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,Ne=Se!==void 0?Se.length:0,Jt=jt.get(J),Xe=U.state.lights;if(lt===!0&&(wt===!0||T!==tt)){const Sn=T===tt&&J.id===V;Wt.setState(J,T,Sn)}let ye=!1;J.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Xe.state.version||Jt.outputColorSpace!==Pt||q.isBatchedMesh&&Jt.batching===!1||!q.isBatchedMesh&&Jt.batching===!0||q.isBatchedMesh&&Jt.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Jt.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Jt.instancing===!1||!q.isInstancedMesh&&Jt.instancing===!0||q.isSkinnedMesh&&Jt.skinning===!1||!q.isSkinnedMesh&&Jt.skinning===!0||q.isInstancedMesh&&Jt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Jt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Jt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Jt.instancingMorph===!1&&q.morphTexture!==null||Jt.envMap!==Ft||J.fog===!0&&Jt.fog!==At||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==Wt.numPlanes||Jt.numIntersection!==Wt.numIntersection)||Jt.vertexAlphas!==$t||Jt.vertexTangents!==ee||Jt.morphTargets!==Zt||Jt.morphNormals!==ce||Jt.morphColors!==Ee||Jt.toneMapping!==Re||Jt.morphTargetsCount!==Ne)&&(ye=!0):(ye=!0,Jt.__version=J.version);let _n=Jt.currentProgram;ye===!0&&(_n=fn(J,X,q));let pa=!1,qe=!1,Oi=!1;const Ye=_n.getUniforms(),vn=Jt.uniforms;if(Gt.useProgram(_n.program)&&(pa=!0,qe=!0,Oi=!0),J.id!==V&&(V=J.id,qe=!0),pa||tt!==T){Gt.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),Ye.setValue(I,"projectionMatrix",T.projectionMatrix),Ye.setValue(I,"viewMatrix",T.matrixWorldInverse);const Mn=Ye.map.cameraPosition;Mn!==void 0&&Mn.setValue(I,Xt.setFromMatrixPosition(T.matrixWorld)),Oe.logarithmicDepthBuffer&&Ye.setValue(I,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Ye.setValue(I,"isOrthographic",T.isOrthographicCamera===!0),tt!==T&&(tt=T,qe=!0,Oi=!0)}if(q.isSkinnedMesh){Ye.setOptional(I,q,"bindMatrix"),Ye.setOptional(I,q,"bindMatrixInverse");const Sn=q.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),Ye.setValue(I,"boneTexture",Sn.boneTexture,ae))}q.isBatchedMesh&&(Ye.setOptional(I,q,"batchingTexture"),Ye.setValue(I,"batchingTexture",q._matricesTexture,ae),Ye.setOptional(I,q,"batchingIdTexture"),Ye.setValue(I,"batchingIdTexture",q._indirectTexture,ae),Ye.setOptional(I,q,"batchingColorTexture"),q._colorsTexture!==null&&Ye.setValue(I,"batchingColorTexture",q._colorsTexture,ae));const dn=it.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&Yt.update(q,it,_n),(qe||Jt.receiveShadow!==q.receiveShadow)&&(Jt.receiveShadow=q.receiveShadow,Ye.setValue(I,"receiveShadow",q.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(vn.envMap.value=Ft,vn.flipEnvMap.value=Ft.isCubeTexture&&Ft.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&X.environment!==null&&(vn.envMapIntensity.value=X.environmentIntensity),vn.dfgLUT!==void 0&&(vn.dfgLUT.value=dE()),qe&&(Ye.setValue(I,"toneMappingExposure",N.toneMappingExposure),Jt.needsLights&&Nc(vn,Oi),At&&J.fog===!0&&qt.refreshFogUniforms(vn,At),qt.refreshMaterialUniforms(vn,J,_t,gt,U.state.transmissionRenderTarget[T.id]),Ec.upload(I,Ni(Jt),vn,ae)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Ec.upload(I,Ni(Jt),vn,ae),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Ye.setValue(I,"center",q.center),Ye.setValue(I,"modelViewMatrix",q.modelViewMatrix),Ye.setValue(I,"normalMatrix",q.normalMatrix),Ye.setValue(I,"modelMatrix",q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Sn=J.uniformsGroups;for(let Mn=0,Ei=Sn.length;Mn<Ei;Mn++){const zi=Sn[Mn];Dt.update(zi,_n),Dt.bind(zi,_n)}}return _n}function Nc(T,X){T.ambientLightColor.needsUpdate=X,T.lightProbe.needsUpdate=X,T.directionalLights.needsUpdate=X,T.directionalLightShadows.needsUpdate=X,T.pointLights.needsUpdate=X,T.pointLightShadows.needsUpdate=X,T.spotLights.needsUpdate=X,T.spotLightShadows.needsUpdate=X,T.rectAreaLights.needsUpdate=X,T.hemisphereLights.needsUpdate=X}function ko(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return nt},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(T,X,it){const J=jt.get(T);J.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,J.__autoAllocateDepthBuffer===!1&&(J.__useRenderToTexture=!1),jt.get(T.texture).__webglTexture=X,jt.get(T.depthTexture).__webglTexture=J.__autoAllocateDepthBuffer?void 0:it,J.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,X){const it=jt.get(T);it.__webglFramebuffer=X,it.__useDefaultFramebuffer=X===void 0};const Qa=I.createFramebuffer();this.setRenderTarget=function(T,X=0,it=0){C=T,nt=X,w=it;let J=!0,q=null,At=!1,Ut=!1;if(T){const Ft=jt.get(T);if(Ft.__useDefaultFramebuffer!==void 0)Gt.bindFramebuffer(I.FRAMEBUFFER,null),J=!1;else if(Ft.__webglFramebuffer===void 0)ae.setupRenderTarget(T);else if(Ft.__hasExternalTextures)ae.rebindTextures(T,jt.get(T.texture).__webglTexture,jt.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Zt=T.depthTexture;if(Ft.__boundDepthTexture!==Zt){if(Zt!==null&&jt.has(Zt)&&(T.width!==Zt.image.width||T.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ae.setupDepthRenderbuffer(T)}}const $t=T.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Ut=!0);const ee=jt.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(ee[X])?q=ee[X][it]:q=ee[X],At=!0):T.samples>0&&ae.useMultisampledRTT(T)===!1?q=jt.get(T).__webglMultisampledFramebuffer:Array.isArray(ee)?q=ee[it]:q=ee,ot.copy(T.viewport),mt.copy(T.scissor),ft=T.scissorTest}else ot.copy(yt).multiplyScalar(_t).floor(),mt.copy(Tt).multiplyScalar(_t).floor(),ft=zt;if(it!==0&&(q=Qa),Gt.bindFramebuffer(I.FRAMEBUFFER,q)&&J&&Gt.drawBuffers(T,q),Gt.viewport(ot),Gt.scissor(mt),Gt.setScissorTest(ft),At){const Ft=jt.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+X,Ft.__webglTexture,it)}else if(Ut){const Ft=X;for(let $t=0;$t<T.textures.length;$t++){const ee=jt.get(T.textures[$t]);I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0+$t,ee.__webglTexture,it,Ft)}}else if(T!==null&&it!==0){const Ft=jt.get(T.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Ft.__webglTexture,it)}V=-1},this.readRenderTargetPixels=function(T,X,it,J,q,At,Ut,Pt=0){if(!(T&&T.isWebGLRenderTarget)){nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=jt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ft=Ft[Ut]),Ft){Gt.bindFramebuffer(I.FRAMEBUFFER,Ft);try{const $t=T.textures[Pt],ee=$t.format,Zt=$t.type;if(!Oe.textureFormatReadable(ee)){nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(Zt)){nn("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=T.width-J&&it>=0&&it<=T.height-q&&(T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Pt),I.readPixels(X,it,J,q,ne.convert(ee),ne.convert(Zt),At))}finally{const $t=C!==null?jt.get(C).__webglFramebuffer:null;Gt.bindFramebuffer(I.FRAMEBUFFER,$t)}}},this.readRenderTargetPixelsAsync=async function(T,X,it,J,q,At,Ut,Pt=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=jt.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ut!==void 0&&(Ft=Ft[Ut]),Ft)if(X>=0&&X<=T.width-J&&it>=0&&it<=T.height-q){Gt.bindFramebuffer(I.FRAMEBUFFER,Ft);const $t=T.textures[Pt],ee=$t.format,Zt=$t.type;if(!Oe.textureFormatReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ce=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,ce),I.bufferData(I.PIXEL_PACK_BUFFER,At.byteLength,I.STREAM_READ),T.textures.length>1&&I.readBuffer(I.COLOR_ATTACHMENT0+Pt),I.readPixels(X,it,J,q,ne.convert(ee),ne.convert(Zt),0);const Ee=C!==null?jt.get(C).__webglFramebuffer:null;Gt.bindFramebuffer(I.FRAMEBUFFER,Ee);const Re=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await qS(I,Re,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,ce),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,At),I.deleteBuffer(ce),I.deleteSync(Re),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,X=null,it=0){const J=Math.pow(2,-it),q=Math.floor(T.image.width*J),At=Math.floor(T.image.height*J),Ut=X!==null?X.x:0,Pt=X!==null?X.y:0;ae.setTexture2D(T,0),I.copyTexSubImage2D(I.TEXTURE_2D,it,0,0,Ut,Pt,q,At),Gt.unbindTexture()};const zs=I.createFramebuffer(),ha=I.createFramebuffer();this.copyTextureToTexture=function(T,X,it=null,J=null,q=0,At=null){At===null&&(q!==0?(Bo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),At=q,q=0):At=0);let Ut,Pt,Ft,$t,ee,Zt,ce,Ee,Re;const Se=T.isCompressedTexture?T.mipmaps[At]:T.image;if(it!==null)Ut=it.max.x-it.min.x,Pt=it.max.y-it.min.y,Ft=it.isBox3?it.max.z-it.min.z:1,$t=it.min.x,ee=it.min.y,Zt=it.isBox3?it.min.z:0;else{const dn=Math.pow(2,-q);Ut=Math.floor(Se.width*dn),Pt=Math.floor(Se.height*dn),T.isDataArrayTexture?Ft=Se.depth:T.isData3DTexture?Ft=Math.floor(Se.depth*dn):Ft=1,$t=0,ee=0,Zt=0}J!==null?(ce=J.x,Ee=J.y,Re=J.z):(ce=0,Ee=0,Re=0);const Ne=ne.convert(X.format),Jt=ne.convert(X.type);let Xe;X.isData3DTexture?(ae.setTexture3D(X,0),Xe=I.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(ae.setTexture2DArray(X,0),Xe=I.TEXTURE_2D_ARRAY):(ae.setTexture2D(X,0),Xe=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,X.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,X.unpackAlignment);const ye=I.getParameter(I.UNPACK_ROW_LENGTH),_n=I.getParameter(I.UNPACK_IMAGE_HEIGHT),pa=I.getParameter(I.UNPACK_SKIP_PIXELS),qe=I.getParameter(I.UNPACK_SKIP_ROWS),Oi=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Se.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Se.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,$t),I.pixelStorei(I.UNPACK_SKIP_ROWS,ee),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Zt);const Ye=T.isDataArrayTexture||T.isData3DTexture,vn=X.isDataArrayTexture||X.isData3DTexture;if(T.isDepthTexture){const dn=jt.get(T),Sn=jt.get(X),Mn=jt.get(dn.__renderTarget),Ei=jt.get(Sn.__renderTarget);Gt.bindFramebuffer(I.READ_FRAMEBUFFER,Mn.__webglFramebuffer),Gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let zi=0;zi<Ft;zi++)Ye&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,jt.get(T).__webglTexture,q,Zt+zi),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,jt.get(X).__webglTexture,At,Re+zi)),I.blitFramebuffer($t,ee,Ut,Pt,ce,Ee,Ut,Pt,I.DEPTH_BUFFER_BIT,I.NEAREST);Gt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(q!==0||T.isRenderTargetTexture||jt.has(T)){const dn=jt.get(T),Sn=jt.get(X);Gt.bindFramebuffer(I.READ_FRAMEBUFFER,zs),Gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,ha);for(let Mn=0;Mn<Ft;Mn++)Ye?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,dn.__webglTexture,q,Zt+Mn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,dn.__webglTexture,q),vn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Sn.__webglTexture,At,Re+Mn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Sn.__webglTexture,At),q!==0?I.blitFramebuffer($t,ee,Ut,Pt,ce,Ee,Ut,Pt,I.COLOR_BUFFER_BIT,I.NEAREST):vn?I.copyTexSubImage3D(Xe,At,ce,Ee,Re+Mn,$t,ee,Ut,Pt):I.copyTexSubImage2D(Xe,At,ce,Ee,$t,ee,Ut,Pt);Gt.bindFramebuffer(I.READ_FRAMEBUFFER,null),Gt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else vn?T.isDataTexture||T.isData3DTexture?I.texSubImage3D(Xe,At,ce,Ee,Re,Ut,Pt,Ft,Ne,Jt,Se.data):X.isCompressedArrayTexture?I.compressedTexSubImage3D(Xe,At,ce,Ee,Re,Ut,Pt,Ft,Ne,Se.data):I.texSubImage3D(Xe,At,ce,Ee,Re,Ut,Pt,Ft,Ne,Jt,Se):T.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,At,ce,Ee,Ut,Pt,Ne,Jt,Se.data):T.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,At,ce,Ee,Se.width,Se.height,Ne,Se.data):I.texSubImage2D(I.TEXTURE_2D,At,ce,Ee,Ut,Pt,Ne,Jt,Se);I.pixelStorei(I.UNPACK_ROW_LENGTH,ye),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_n),I.pixelStorei(I.UNPACK_SKIP_PIXELS,pa),I.pixelStorei(I.UNPACK_SKIP_ROWS,qe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Oi),At===0&&X.generateMipmaps&&I.generateMipmap(Xe),Gt.unbindTexture()},this.initRenderTarget=function(T){jt.get(T).__webglFramebuffer===void 0&&ae.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?ae.setTextureCube(T,0):T.isData3DTexture?ae.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?ae.setTexture2DArray(T,0):ae.setTexture2D(T,0),Gt.unbindTexture()},this.resetState=function(){nt=0,w=0,C=null,Gt.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=De._getDrawingBufferColorSpace(e),i.unpackColorSpace=De._getUnpackColorSpace()}}const Mr=16,pE=`
  varying vec2 vUv;
  void main(){
    vUv = uv;
    gl_Position = vec4(position,1.0);
  }
`,mE=`
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
`,xE=`
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
`;function gE(o){const e=vs.useRef({x:0,y:0});vs.useEffect(()=>{if(!o.current)return;const i=o.current;let r,l,u,d,h;const m=new Ay,p=A=>{if(!o.current)return;const R=o.current.getBoundingClientRect();e.current={x:(A.clientX-R.left)/R.width*2-1,y:-((A.clientY-R.top)/R.height)*2+1}};window.addEventListener("mousemove",p);const v=window.innerWidth/window.innerHeight,g=.46*v,S=Array.from({length:Mr}).map((A,R)=>{const y=R<Mr/2?-1:1,_=g+Math.random()*(v*.58);return{pos:new Ue(y*_,Math.random()*2.4-1.2),scale:.4+Math.random()*.4,timeOffset:Math.random()*10,rotation:Math.random()*Math.PI*2}});return(()=>{const A=window.innerWidth,R=window.innerHeight;for(;i.firstChild;)i.removeChild(i.firstChild);r=new hE({antialias:!0}),r.setSize(A,R),r.setClearColor(16777215,1),i.appendChild(r.domElement);const y=new zg(-1,1,1,-1,0,1);d=new ja(A,R);const _=new Mi({vertexShader:pE,fragmentShader:mE,uniforms:{u_time:{value:0},u_resolution:{value:new Ue(A,R)},u_pos:{value:S.map(P=>P.pos)},u_scale:{value:S.map(P=>P.scale)},u_timeOffset:{value:S.map(P=>P.timeOffset)},u_rot:{value:S.map(P=>P.rotation)},u_mouse:{value:new Ue(0,0)}}});l=new Fx,l.add(new Li(new Rs(2,2),_));const B=new Mi({vertexShader:`
          varying vec2 vUv;
          void main(){ vUv = uv; gl_Position = vec4(position, 1.0); }
        `,fragmentShader:xE,uniforms:{tDiffuse:{value:d.texture},resolution:{value:new Ue(A,R)},charSize:{value:8}}});u=new Fx,u.add(new Li(new Rs(2,2),B));const U=()=>{h=requestAnimationFrame(U);const P=m.getElapsedTime();_.uniforms.u_time.value=P,_.uniforms.u_mouse.value.set(e.current.x,e.current.y),r.setRenderTarget(d),r.render(l,y),r.setRenderTarget(null),r.render(u,y)};U()})(),()=>{window.removeEventListener("mousemove",p),cancelAnimationFrame(h);try{r&&r.dispose(),d&&d.dispose(),r?.domElement&&i&&i.removeChild(r.domElement)}catch{}}},[])}const _E="/assets/AR-clip-after-intro-nPfYupHt.mp4",vE="/assets/AR-clip-intro-qC7odwYn.mp4",SE="/assets/AR-clip-spiraling-BGom1lM3.mp4",yE="/assets/AR-clip-spirals-start-D0kqEpH-.mp4",bE="/assets/aerial-reverie-DxkhGmCJ.mp4",ME="/assets/process-stills-2-CLcL8Joy.png",EE="/assets/still-1-fzY1nNZs.jpg",TE="/assets/still-2-8wsy660Z.jpg",AE="/assets/still-3-DPGdX8xA.jpg",RE="/assets/still-4-BbJMAe40.jpg",CE="/assets/gallery-w-ml-D-iu-C6g.png",wE="/assets/pcb-schematic-DCEhCiIc.png",DE="/assets/thumbnail-Cc41NpnZ.png",UE="/assets/2026-diceplay-BAhFfte8.png",LE="/assets/temp-mainfig-DuKDAKM2.jpg",NE="/assets/header_tiles-ChXZetfR.mp4",OE="/assets/thumbnail-Cz_cAM9k.png",zE="/assets/tiles_all-CeWGEUuY.png",PE="/assets/gallery-CrH0Hmr3.png",BE="/assets/thumbnail2-CNTZTuLj.png",FE="/assets/header-sKtiGC8i.png",IE="/assets/pawlink-DtlHItCH.png",HE="/assets/thumbnail-pJpcKxdP.png",GE="/assets/dither_it_figure-1-WdQGNKS-.png",VE="/assets/thumbnail-DPUFsreZ.png",kE=Object.assign({"../portfolio-images/aerial-reverie/AR-clip-after-intro.mp4":_E,"../portfolio-images/aerial-reverie/AR-clip-intro.mp4":vE,"../portfolio-images/aerial-reverie/AR-clip-spiraling.mp4":SE,"../portfolio-images/aerial-reverie/AR-clip-spirals-start.mp4":yE,"../portfolio-images/aerial-reverie/aerial-reverie.mp4":bE,"../portfolio-images/aerial-reverie/process-stills-2.png":ME,"../portfolio-images/aerial-reverie/still-1.jpg":EE,"../portfolio-images/aerial-reverie/still-2.jpg":TE,"../portfolio-images/aerial-reverie/still-3.jpg":AE,"../portfolio-images/aerial-reverie/still-4.jpg":RE,"../portfolio-images/aligned/gallery-w-ml.png":CE,"../portfolio-images/aligned/pcb-schematic.png":wE,"../portfolio-images/aligned/thumbnail.png":DE,"../portfolio-images/diceplay/2026-diceplay.png":UE,"../portfolio-images/diceplay/temp-mainfig.jpg":LE,"../portfolio-images/kinetic-pixels/header_tiles.mp4":NE,"../portfolio-images/kinetic-pixels/thumbnail.png":OE,"../portfolio-images/kinetic-pixels/tiles_all.png":zE,"../portfolio-images/nuwa/gallery.png":PE,"../portfolio-images/nuwa/thumbnail2.png":BE,"../portfolio-images/pawlink/header.png":FE,"../portfolio-images/pawlink/pawlink.png":IE,"../portfolio-images/pawlink/thumbnail.png":HE,"../portfolio-images/single-fibre/dither_it_figure-1.png":GE,"../portfolio-images/spirit-oasis/thumbnail.png":VE}),pn=o=>{if(!o)return"";const i=`../portfolio-images/${o.replace(/^\.?\/?src\/portfolio-images\/?/,"").replace(/^\.?\/?portfolio-images\/?/,"")}`;return kE[i]||""},cg=[{id:1,title:"Kinetic Pixels",category:"Tech",thumbnail:pn("/src/portfolio-images/kinetic-pixels/thumbnail.png"),description:"Kinetic Pixels explores data as cultural material to be crafted and dynamically configured by coordinated robots.",fullDescription:`Kinetic Pixels explores data as cultural material by translating symbolic, geographic, and historical information into rule-based mosaics that can be constructed by coordinated aerial robots. Drawing inspiration from global tile traditions—such as Chinese 花砖, Iberian azulejos, and Islamic zellige—the project engages practices where complex cultural meaning emerges from simple, modular repetition.

Eight globally representative tile cultures are encoded as sparse 9-bit cellular automaton rulesets, computed through a two-stage process that ensures global uniqueness. A shared geographic grammar establishes common structural constraints across all systems, while a second pass derives deterministic identity bits from ISO country codes and planetary parameters. This separation allows cultural similarity and difference to emerge through rule-based pattern formation, producing evolving mosaics whose spatial sequences reflect both continuity and variation over time.

To explore how these abstract rules might be materially constructed and transformed, Kinetic Pixels computes a realistic simulation of a coordinated swarm flight trajectories to assemble and reconfigure mosaics frame by frame. Transitions are executed through distance-aware task allocation, collision-constrained trajectory planning, and frame-to-frame tile reuse, enabling efficient addition, removal, and transfer of tiles as patterns evolve. Cellular automaton outputs are mapped from discrete grids to real-world spatial coordinates, grounding rule-based pattern formation in feasible multi-robot motion.

By treating computation as a contemporary form of craft, Kinetic Pixels reframes tiles as both the building blocks of cities and the building blocks of data-driven space—asking how robotic systems might participate in the cultural production of material patterns, rather than merely executing them.`,details:{year:"2025",role:"Solo",mediums:"Python, ROS, MatLab"},images:[{type:"video",src:pn("/src/portfolio-images/kinetic-pixels/header_tiles.mp4"),layout:"full"},{src:pn("/src/portfolio-images/kinetic-pixels/tiles_all.png"),layout:"full"}]},{id:6,title:"Aerial Reverie",category:"Tech",thumbnail:pn("/src/portfolio-images/aerial-reverie/still-1.jpg"),description:"An immersive VR storyworld illuminated by coordinated Crazyflie drone flight paths",fullDescription:"Aerial Reverie is an immersive VR storyworld illuminated by the motion of Crazyflie drones, their coordinated flight paths controlled via Python and ROS. The choreographed trajectories assemble a dynamic cityscape that becomes both simulation and narrative device, examining collective intelligence, industrial expansion, and the tension between nature, home, and rapidly evolving built environments.",details:{year:"2024",role:"Creative Director, Programming, 3D Modeling",mediums:"Python, ROS, Crazyflie Drones, Blender, After Effects, Ableton Live, Meta Quest 2"},images:[{type:"video",src:pn("/src/portfolio-images/aerial-reverie/aerial-reverie.mp4"),layout:"full"},{type:"video-row",items:[pn("/src/portfolio-images/aerial-reverie/AR-clip-intro.mp4"),pn("/src/portfolio-images/aerial-reverie/AR-clip-after-intro.mp4"),pn("/src/portfolio-images/aerial-reverie/AR-clip-spirals-start.mp4"),pn("/src/portfolio-images/aerial-reverie/AR-clip-spiraling.mp4")]},{type:"image",src:pn("/src/portfolio-images/aerial-reverie/process-stills-2.png"),layout:"full"}]},{id:2,title:"PawLink",category:"Tech",thumbnail:pn("/src/portfolio-images/pawlink/thumbnail.png"),description:"Smart-fabric collar with embedded sensors for continuous animal health monitoring",fullDescription:`PawLink is an integrated smart-fabric collar that leverages thermally drawn fiber technology with embedded capacitive and thermistor sensors to enable continuous, fabric-level inference.

A compact ML classifier runs on collar-side data to detect behavioral patterns such as excessive scratching (linked to allergies, infections, or skin irritation), track temperature changes and activity levels for health and exercise monitoring, and activate a safety protocol: a "Lost Mode" that detects nearby humans to broadcast signals.

PawLink demonstrates how computational textiles can function as compassionate, adaptive interfaces for animal wellbeing.`,details:{year:"2024",role:"Software & Hardware Integration, Product Design",mediums:"Arduino, ML, Thermally Drawn Fibers, Weaving Loom, Metal Hardware"},images:[{src:pn("/src/portfolio-images/pawlink/pawlink.png"),layout:"full"}]},{id:3,title:"Aligned",category:"Tech",thumbnail:pn("/src/portfolio-images/aligned/thumbnail.png"),description:"Smart-fabric posture-sensing system with real-time ML-based detection and haptic feedback",fullDescription:`Aligned is a smart-fabric posture-sensing system integrating a custom PCB with four I²C-networked accelerometers and a vibration motor for haptic feedback.

A lightweight machine-learning model distinguishes upright vs. slouched posture in real time, forming the foundation for a textile-embedded interface that supports healthier body awareness.

The system includes both a fully functioning prototype demonstrating real-time posture detection and a complete hardware pipeline, from circuit schematic to manufactured PCB, ready for textile integration in future iterations.`,details:{year:"2024",role:"Software Lead (ML + Arduino), Hardware",mediums:"KiCad, Custom PCB, I²C, ML, Haptic Feedback"},images:[{src:pn("/src/portfolio-images/aligned/gallery-w-ml.png"),layout:"full"}]},{id:4,title:"NÜWA",category:"Art",thumbnail:pn("/src/portfolio-images/nuwa/thumbnail2.png"),description:"Modernized hanfu and qipao challenging techno-Orientalist narratives through textile craft",fullDescription:`Showcased at Fashion@Brown Runway Show 2024 & Rhode Island Fashion Week 2024.

Ancient deity, new cyborg. One with earth, integrated in cyberspace.

In techno-Orientalism, the West views the Chinese body in contradicting space-times: a relic of the past and a future both feared and desired. It seeks to collect a drop of what the Chinese body can provide — culture, technology, sex — and in turn, create a perverse reality with its voyeuristic eyes.

How can women of the Chinese diaspora reject and subsequently remake this techno-orientalist framework?

Embody the paradox of temporalities and collapse contrasting timescales into the present moment. Primordial, earth-forming goddess and futuristic robot condensed into one in the Now: the modern woman. Fetishization, subjugation by the malicious eye — we repair the wounds of our broken heavens with our molded clay bodies and the garments that adorn them.

By crafting modernized hanfu and qipao dresses, interweaving the histories of silk and brocade with technology, the Chinese body is situated in all timeframes, toppling the binarist narrative generated by the West. Placed before the public eye, Nüwa asks the audience to confront the simultaneous pleasure and discomfort of the techno-Orientalist paradigm.`,details:{year:"2024",role:"Solo",mediums:"Brocade, Silk, LEDs"},images:[{src:pn("/src/portfolio-images/nuwa/gallery.png"),layout:"full"}]},{id:5,title:"Spirit Oasis",category:"Tech",thumbnail:pn("/src/portfolio-images/spirit-oasis/thumbnail.png"),description:"A reimagined 3D scene from Avatar: The Last Airbender with realistic water and lighting",fullDescription:`This project is a reimagination of a scene in the episode 'The Siege of the North' from Avatar: the Last Airbender. In the Spirit Oasis, two koi fish Tui and La maintain the balance between the Earth and the Moon. When the fish are disturbed, chaos ensues. 

 Using ThreeJS and Blender, we modeled this scene using realistic water effects, lighting changes, and koi fish interaction.`,details:{year:"2023",role:"Procedural Water + Grass, Custom Watercolor Toon Shading, 3D Modeling",mediums:"Three.js, Blender, GLSL"},images:[{type:"iframe",src:"https://spirit-oasis.vercel.app/",layout:"full"}]}],XE="· • —– ٠ ٠ —– • · · • —– ٠ ✤ ٠ —– • · · • —– ٠ ٠ —– • · ",WE=XE.repeat(6),qE={position:"fixed",top:0,left:0,right:0,padding:"0.65rem 2rem",background:"rgba(0, 0, 0, 0.92)",backdropFilter:"blur(12px)",borderBottom:"1px solid rgba(255,255,255,0.07)",boxShadow:"0 2px 16px rgba(0,0,0,0.25)",zIndex:100,display:"flex",alignItems:"center"},yd={background:"none",border:"none",color:"white",cursor:"pointer",fontSize:"1rem",opacity:.85,transition:"opacity 0.2s"};function YE({scrollToSection:o}){return Et.jsxs("nav",{style:qE,children:[Et.jsx("div",{className:"font-argent-italic",style:{fontSize:"1.3rem",fontWeight:"400",color:"white"},children:"vivian li"}),Et.jsx("div",{className:"nav-decorative",children:WE}),Et.jsxs("div",{className:"nav-links",children:[Et.jsx("button",{onClick:()=>o("publications"),style:yd,onMouseEnter:e=>e.target.style.opacity=1,onMouseLeave:e=>e.target.style.opacity=.8,children:"Publications"}),Et.jsx("button",{onClick:()=>o("portfolio"),style:yd,onMouseEnter:e=>e.target.style.opacity=1,onMouseLeave:e=>e.target.style.opacity=.8,children:"Projects"}),Et.jsx("button",{style:{...yd,cursor:"default",opacity:.4},children:"CV"})]})]})}const jE="/assets/picofme-DF0OjEZ8.png";function ZE(){return Et.jsxs("div",{className:"hero-container",children:[Et.jsx("h1",{className:"font-argent-italic",style:{fontSize:"3.6rem",fontWeight:"100",marginBottom:"1.5rem",textShadow:"none",textAlign:"center"},children:"vivian li"}),Et.jsxs("div",{className:"portrait-bio-row",children:[Et.jsx("div",{style:{flexShrink:0},children:Et.jsx("img",{src:jE,alt:"Vivian Li",className:"portrait-img"})}),Et.jsxs("div",{className:"bio-section",style:{flex:1},children:[Et.jsx("div",{style:{fontSize:"0.7rem",fontWeight:"600",letterSpacing:"0.1em",textTransform:"uppercase",color:"rgba(0,0,0,0.4)",marginBottom:"0.5rem"},children:"about me"}),Et.jsxs("p",{style:{fontFamily:'"Plus Jakarta Sans", sans-serif',fontSize:"1rem",lineHeight:"1.6",textShadow:"none",margin:0},children:["I am a Research Assistant in the"," ",Et.jsx("a",{href:"https://www.computationaldesign.group/",target:"_blank",rel:"noreferrer",style:{color:"rgb(0,120,130)",textDecorationColor:"rgba(0,120,130,0.4)"},children:"Computational Design Group"})," ","at Brown Visual Computing, advised by Professor"," ",Et.jsx("a",{href:"https://www.computationaldesign.group/adriana",target:"_blank",rel:"noreferrer",style:{color:"rgb(0,120,130)",textDecorationColor:"rgba(0,120,130,0.4)"},children:"Adriana Schulz"}),". I recently completed my B.S. in Computer Science and M.S. in Electrical and Computer Engineering at Brown University.",Et.jsx("br",{}),Et.jsx("br",{}),"My research is in ",Et.jsx("strong",{children:"computational design and fabrication"})," at the intersection of"," ",Et.jsx("strong",{children:"computer graphics"})," and ",Et.jsx("strong",{children:"human-computer interaction"}),". I develop interactive systems and computational methods that enable the design and fabrication of novel physical artifacts.",Et.jsx("br",{}),Et.jsx("br",{}),"For more information, please see my CV."]})]})]})]})}const KE="/assets/SIG-2026-DicePlay-CGz2ncXR.pdf",QE="/assets/Nature-2025-SingleFibre-CBg-r0dn.pdf",JE="/assets/main-teaser-CAMvx4bD.png",$E=[{id:"stitchswitch",title:"StitchSwitch: Programmable Surface Deformation and Bistability in Embroidered Textiles",authors:"Vivian Li, Milin Kodnongbua, Heather Robertson, Yiyue Luo, Adriana Schulz",venue:"UIST (Accepted) • 2026",thumbnail:JE,thumbnailFit:"contain",pageUrl:null,paperUrl:null},{id:"diceplay",title:"Diceplay: A Modular Canvas for Physical Image Composition",authors:"Milin Kodnongbua, Zihan Jack Zhang, Shishi Xiao, Vivian Li, Heather Robertson, Rulin Chen, David Laidlaw, Adriana Schulz",venue:"SIGGRAPH • 2026",thumbnail:pn("/src/portfolio-images/diceplay/2026-diceplay.png"),thumbnailFit:"contain",pageUrl:"https://www.computationaldesign.group/publications/diceplay",paperUrl:KE},{id:"nature",title:"A single-fibre computer enables textile networks and distributed inference",authors:"Nikhil Gupta, Henry Cheung, Syamantak Payra, Gabriel Loke, Jenny Li, Yongyi Zhao, Latika Balachander, Ella Son, Vivian Li, Samuel Kravitz, Sehar Lohawala, John Joannopoulos & Yoel Fink",venue:"Nature • 2025",thumbnail:pn("/src/portfolio-images/single-fibre/dither_it_figure-1.png"),thumbnailFit:"cover",pageUrl:"https://www.nature.com/articles/s41586-024-08568-6",paperUrl:QE}],tT=(o,e)=>{const i=o.split(e);return i.length===1?o:Et.jsxs(Et.Fragment,{children:[i[0],Et.jsx("span",{style:{fontWeight:"600",color:"rgba(0, 0, 0, 0.9)"},children:e}),i[1]]})};function eT(){return Et.jsxs("div",{id:"publications",className:"section-container",children:[Et.jsx("h2",{className:"font-argent-normal",style:{fontSize:"2rem",fontWeight:"300",marginTop:0,marginBottom:"0.6rem",textAlign:"center",textShadow:"none"},children:"publications"}),$E.map(o=>Et.jsxs("div",{className:"pub-card",children:[o.thumbnail?o.thumbnailFit==="contain"?Et.jsx("div",{className:"pub-thumb-wrap",children:Et.jsx("img",{src:o.thumbnail,alt:o.title,style:{width:"100%",height:"100%",objectFit:"contain"}})}):Et.jsx("img",{src:o.thumbnail,alt:o.title,className:"pub-thumb-img"}):Et.jsx("div",{className:"pub-thumb-wrap",style:{background:"rgba(0,0,0,0.04)"}}),Et.jsxs("div",{style:{flex:1},children:[Et.jsx("h3",{style:{fontSize:"1.1rem",fontWeight:"400",marginTop:0,marginBottom:"0.25rem"},children:o.title}),Et.jsx("p",{style:{fontSize:"0.85rem",color:"rgba(0, 0, 0, 0.6)",marginBottom:"0.25rem"},children:tT(o.authors,"Vivian Li")}),Et.jsx("p",{style:{fontSize:"0.9rem",color:"rgba(0, 0, 0, 0.45)",marginBottom:"0.5rem"},children:o.venue}),(o.pageUrl||o.paperUrl)&&Et.jsxs("div",{style:{display:"flex",gap:"0.5rem",flexWrap:"wrap"},children:[o.pageUrl&&Et.jsx("a",{href:o.pageUrl,target:"_blank",rel:"noreferrer",className:"pub-link-btn",children:"Page"}),o.paperUrl&&Et.jsx("a",{href:o.paperUrl,target:"_blank",rel:"noreferrer",className:"pub-link-btn",children:"Paper"})]})]})]},o.id))]})}const nT=["All","Tech","Art"];function iT({portfolioItems:o,activeFilter:e,setActiveFilter:i,onSelectProject:r}){const l=e==="All"?o:o.filter(u=>u.category===e);return Et.jsxs("div",{id:"portfolio",className:"section-container",children:[Et.jsx("h2",{className:"font-argent-normal",style:{fontSize:"2rem",fontWeight:"300",marginTop:0,marginBottom:"0.6rem",textAlign:"center",textShadow:"none"},children:"projects"}),Et.jsx("div",{style:{display:"flex",justifyContent:"center",gap:"1rem",marginBottom:"2rem"},children:nT.map(u=>Et.jsx("button",{onClick:()=>i(u),style:{background:e===u?"rgba(0, 0, 0, 0.1)":"transparent",backdropFilter:"blur(10px)",border:`1px solid ${e===u?"rgba(0, 0, 0, 0.3)":"rgba(0, 0, 0, 0.15)"}`,borderRadius:"20px",padding:"0.5rem 1.5rem",color:"black",cursor:"pointer",fontSize:"0.9rem",fontWeight:e===u?"500":"300",transition:"all 0.3s ease"},onMouseEnter:d=>{e!==u&&(d.target.style.background="rgba(0, 0, 0, 0.05)",d.target.style.borderColor="rgba(0, 0, 0, 0.2)")},onMouseLeave:d=>{e!==u&&(d.target.style.background="transparent",d.target.style.borderColor="rgba(0, 0, 0, 0.15)")},children:u},u))}),Et.jsx("div",{className:"projects-grid",children:l.map(u=>Et.jsxs("div",{onClick:()=>r(u),style:{background:"rgba(255, 255, 255, 0.85)",backdropFilter:"blur(10px)",border:"1px solid rgba(0, 0, 0, 0.1)",borderRadius:"8px",overflow:"hidden",cursor:"pointer",transition:"transform 0.2s, border-color 0.2s"},onMouseEnter:d=>{d.currentTarget.style.transform="translateY(-4px)",d.currentTarget.style.borderColor="rgba(0, 0, 0, 0.2)"},onMouseLeave:d=>{d.currentTarget.style.transform="translateY(0)",d.currentTarget.style.borderColor="rgba(0, 0, 0, 0.1)"},children:[Et.jsx("div",{style:{width:"100%",height:"200px",background:"rgba(0, 0, 0, 0.04)",position:"relative",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"},children:u.thumbnail?Et.jsx("img",{src:u.thumbnail,alt:u.title,style:{width:"100%",height:"100%",objectFit:"cover",opacity:1}}):Et.jsx("span",{style:{fontSize:"0.8rem",color:"rgba(0, 0, 0, 0.3)"},children:"Project Image"})}),Et.jsxs("div",{style:{padding:"1.5rem"},children:[Et.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"0.5rem"},children:[Et.jsx("h3",{style:{fontSize:"1.0rem",fontWeight:"400",margin:0},children:u.title}),Et.jsx("span",{style:{fontSize:"0.75rem",color:"rgba(0, 0, 0, 0.45)",background:"rgba(0, 0, 0, 0.07)",padding:"0.25rem 0.75rem",borderRadius:"12px"},children:u.category})]}),Et.jsx("p",{style:{fontSize:"0.8rem",fontWeight:300,color:"rgba(0, 0, 0, 0.6)",margin:0},children:u.description})]})]},u.id))})]})}const bd=[{label:null,bg:"rgba(0,0,0,0.06)",border:"rgba(0,0,0,0.1)",color:"rgba(0,0,0,0.55)"},{label:"Role",bg:"rgba(120,80,200,0.07)",border:"rgba(120,80,200,0.2)",color:"rgba(90,50,170,0.8)"},{label:"Mediums",bg:"rgba(40,160,140,0.07)",border:"rgba(40,160,140,0.2)",color:"rgba(20,120,105,0.85)"}];function aT({image:o,projectTitle:e}){if(o.type==="iframe")return Et.jsx("div",{style:{position:"relative",width:"100%",paddingBottom:"56.25%",height:0,background:"rgba(0,0,0,0.03)"},children:Et.jsx("iframe",{src:o.src,style:{position:"absolute",top:0,left:0,width:"100%",height:"100%",border:"none"},loading:"lazy",allow:"fullscreen"})});if(o.type==="video-row")return Et.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"0.5rem"},children:o.items.map((i,r)=>Et.jsx("video",{src:i,autoPlay:!0,loop:!0,muted:!0,playsInline:!0,preload:"auto",style:{width:"100%",height:"auto",display:"block",borderRadius:"4px",objectFit:"cover"}},r))});if(o.type==="video"){const i=o.src.includes("kinetic-pixels/header_tiles");return Et.jsx("video",{src:o.src,autoPlay:!0,loop:i,muted:i,controls:!i,playsInline:!0,preload:"auto",style:{width:"100%",height:"auto",display:"block",objectFit:"cover",pointerEvents:i?"none":"auto"}})}return o.src?Et.jsx("img",{src:o.src,alt:e,style:{width:"100%",height:"auto",display:"block",objectFit:"cover"}}):null}function rT({selectedProject:o,portfolioItems:e,onClose:i,onSelect:r}){return Et.jsx("div",{onClick:l=>{l.target===l.currentTarget&&i()},style:{position:"fixed",top:0,left:0,right:0,bottom:0,zIndex:200,background:"rgba(0, 0, 0, 0.45)",backdropFilter:"blur(6px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"2rem"},children:Et.jsxs("div",{style:{width:"100%",maxWidth:"1100px",maxHeight:"88vh",background:"white",borderRadius:"12px",overflow:"hidden",display:"flex",flexDirection:"column",boxShadow:"0 24px 64px rgba(0, 0, 0, 0.22)"},children:[Et.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"0.5rem",padding:"0.6rem 0.75rem",borderBottom:"1px solid rgba(0, 0, 0, 0.08)",overflowX:"auto",flexShrink:0,background:"white"},children:[e.map(l=>Et.jsx("div",{onClick:()=>r(l),title:l.title,style:{width:"72px",height:"48px",borderRadius:"5px",overflow:"hidden",cursor:"pointer",flexShrink:0,border:o.id===l.id?"2px solid rgba(0,0,0,0.7)":"2px solid transparent",opacity:o.id===l.id?1:.45,transition:"opacity 0.15s, border-color 0.15s"},onMouseEnter:u=>{o.id!==l.id&&(u.currentTarget.style.opacity=.75)},onMouseLeave:u=>{o.id!==l.id&&(u.currentTarget.style.opacity=.45)},children:Et.jsx("img",{src:l.thumbnail,alt:l.title,style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})},l.id)),Et.jsx("button",{onClick:i,style:{marginLeft:"auto",flexShrink:0,background:"none",border:"1px solid rgba(0,0,0,0.15)",borderRadius:"50%",width:"32px",height:"32px",cursor:"pointer",fontSize:"1.2rem",color:"rgba(0,0,0,0.5)",display:"flex",alignItems:"center",justifyContent:"center",padding:0,lineHeight:"32px"},onMouseEnter:l=>{l.currentTarget.style.background="rgba(0,0,0,0.06)",l.currentTarget.style.color="black"},onMouseLeave:l=>{l.currentTarget.style.background="none",l.currentTarget.style.color="rgba(0,0,0,0.5)"},children:"×"})]}),Et.jsxs("div",{style:{overflowY:"auto",flex:1},children:[Et.jsxs("div",{style:{padding:"1.25rem 1.75rem 0.75rem"},children:[Et.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:"0.75rem",marginBottom:"0.5rem"},children:[Et.jsx("h2",{className:"font-argent-normal",style:{fontSize:"1.7rem",fontWeight:"300",margin:0,textShadow:"none"},children:o.title}),Et.jsx("span",{style:{fontSize:"0.75rem",color:"rgba(0,0,0,0.4)",textTransform:"uppercase",letterSpacing:"0.1em"},children:o.category})]}),Et.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"0.35rem",marginBottom:"0.9rem"},children:[{...bd[0],val:o.details.year},{...bd[1],val:o.details.role},{...bd[2],val:o.details.mediums}].map(({label:l,val:u,bg:d,border:h,color:m})=>Et.jsxs("span",{style:{fontSize:"0.75rem",color:m,background:d,border:`1px solid ${h}`,borderRadius:"20px",padding:"0.2rem 0.65rem"},children:[l&&Et.jsxs("span",{style:{fontWeight:600,marginRight:"0.3rem"},children:[l,":"]}),u]},l??"year"))}),Et.jsx("p",{style:{fontSize:"0.9rem",fontWeight:300,color:"rgba(0, 0, 0, 0.65)",lineHeight:"1.6",whiteSpace:"pre-line",margin:0},children:o.fullDescription})]}),Et.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"0.5rem",padding:"0.75rem 1rem 1.5rem"},children:o.images.map((l,u)=>Et.jsx("div",{style:{width:"100%",background:"transparent",overflow:"hidden"},children:Et.jsx(aT,{image:l,projectTitle:o.title})},u))})]})]})})}function sT(){const o=vs.useRef(null),[e,i]=vs.useState("All"),[r,l]=vs.useState(null);gE(o);const u=d=>{document.getElementById(d)?.scrollIntoView({behavior:"smooth",block:"start"})};return Et.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"auto"},children:[Et.jsx("div",{ref:o,style:{position:"fixed",top:0,left:0,width:"100%",height:"100%",zIndex:0}}),Et.jsxs("div",{style:{position:"relative",zIndex:1,color:"black"},children:[r&&Et.jsx(rT,{selectedProject:r,portfolioItems:cg,onClose:()=>l(null),onSelect:l}),Et.jsx(YE,{scrollToSection:u}),Et.jsx(ZE,{}),Et.jsx(eT,{}),Et.jsx(iT,{portfolioItems:cg,activeFilter:e,setActiveFilter:i,onSelectProject:l})]})]})}function oT(){return Et.jsx(sT,{})}nS.createRoot(document.getElementById("root")).render(Et.jsx(jv.StrictMode,{children:Et.jsx(oT,{})}));
