const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/react-force-graph-3d-CQANO5bq.js","assets/index-D7eKJ1UO.js","assets/index-BlJqSbEB.css","assets/ViewConfigButton-C0vGxil2.js","assets/ChevronUpIcon.svg-BO74eBPJ.js"])))=>i.map(i=>d[i]);
import{R as Kr,r as Ae,a9 as dc,j as x,C as Fn,T as me,a as St,I as _t,aa as uc,k as _i,c as ot,N as hc,ab as xl,b as Sn,S as On,d as gl,g as vl,x as _l,m as oo,X as Is,Y as Us,n as Fs,y as Bi,t as fc,l as pc,o as mc,z as bl,f as wa,ac as Da,a6 as bi,ad as rr,v as Ra,ae as Pa,a2 as La,U as Ia,F as xc,Q as lo,af as gc,ag as vc,H as gt,a7 as _c,ah as bc,G as Zr}from"./index-D7eKJ1UO.js";import{V as yc}from"./ViewConfigButton-C0vGxil2.js";import{S as Mc,a as Sc}from"./ChevronUpIcon.svg-BO74eBPJ.js";(function(){try{var i=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{};i.SENTRY_RELEASE={id:"347b13ca27abff42822f41b5471de238bd3fdc99"}}catch{}})();try{(function(){var i=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},e=new i.Error().stack;e&&(i._sentryDebugIds=i._sentryDebugIds||{},i._sentryDebugIds[e]="ce53d644-82b0-44f7-8d84-595ffffdce2e",i._sentryDebugIdIdentifier="sentry-dbid-ce53d644-82b0-44f7-8d84-595ffffdce2e")})()}catch{}var yl=function(e){return Kr.createElement("svg",Object.assign({viewBox:"0 0 20 20"},e),Kr.createElement("path",{d:"M12.75 3.5a.75.75 0 0 0 0 1.5h1.19l-3.22 3.22a.75.75 0 0 0 1.06 1.06l3.22-3.22v1.19a.75.75 0 0 0 1.5 0v-3a.75.75 0 0 0-.75-.75h-3Z"}),Kr.createElement("path",{d:"M7.25 16.5a.75.75 0 0 0 0-1.5h-1.19l3.22-3.22a.75.75 0 1 0-1.06-1.06l-3.22 3.22v-1.19a.75.75 0 0 0-1.5 0v3c0 .414.336.75.75.75h3Z"}))};yl.displayName="MaximizeIcon";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ua="181",F0={ROTATE:0,DOLLY:1,PAN:2},O0={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Ec=0,co=1,Cc=2,V0=0,Ml=1,Tc=2,mn=3,Vn=0,Ut=1,xn=2,bn=0,yi=1,uo=2,ho=3,fo=4,Nc=5,Yn=100,Ac=101,wc=102,Dc=103,Rc=104,Pc=200,Lc=201,Ic=202,Uc=203,Os=204,Vs=205,Fc=206,Oc=207,Vc=208,Bc=209,zc=210,kc=211,Gc=212,Hc=213,Wc=214,Bs=0,zs=1,ks=2,Si=3,Gs=4,Hs=5,Ws=6,js=7,kr=0,jc=1,Xc=2,Un=0,qc=1,Yc=2,$c=3,Kc=4,Zc=5,Jc=6,Qc=7,Sl=300,Ei=301,Ci=302,Xs=303,qs=304,Gr=306,Ys=1e3,vn=1001,$s=1002,Pt=1003,ed=1004,sr=1005,qt=1006,Jr=1007,Kn=1008,ln=1009,El=1010,Cl=1011,Xi=1012,Fa=1013,Zn=1014,_n=1015,wi=1016,Oa=1017,Va=1018,qi=1020,Tl=35902,Nl=35899,Al=1021,wl=1022,tn=1023,Yi=1026,$i=1027,Dl=1028,Ba=1029,za=1030,ka=1031,B0=1032,Ga=1033,Rr=33776,Pr=33777,Lr=33778,Ir=33779,Ks=35840,Zs=35841,Js=35842,Qs=35843,ea=36196,ta=37492,na=37496,ia=37808,ra=37809,sa=37810,aa=37811,oa=37812,la=37813,ca=37814,da=37815,ua=37816,ha=37817,fa=37818,pa=37819,ma=37820,xa=37821,ga=36492,va=36494,_a=36495,ba=36283,ya=36284,Ma=36285,Sa=36286,td=3200,nd=3201,Qn=0,id=1,Ln="",Xt="srgb",Ti="srgb-linear",Fr="linear",tt="srgb",z0=0,ii=7680,k0=7681,G0=7682,H0=7683,W0=34055,j0=34056,X0=5386,q0=512,Y0=513,$0=514,K0=515,Z0=516,J0=517,Q0=518,po=519,rd=512,sd=513,ad=514,Rl=515,od=516,ld=517,cd=518,dd=519,Ea=35044,ex=35048,mo="300 es",nn=2e3,Or=2001,tx={COMPUTE:"compute",RENDER:"render"};function Pl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ki(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ud(){const i=Ki("canvas");return i.style.display="block",i}const xo={};function Vr(...i){const e="THREE."+i.shift();console.log(e,...i)}function Ie(...i){const e="THREE."+i.shift();console.warn(e,...i)}function pt(...i){const e="THREE."+i.shift();console.error(e,...i)}function Zi(...i){const e=i.join(" ");e in xo||(xo[e]=!0,Ie(...i))}function hd(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class ei{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Tt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let go=1234567;const Gi=Math.PI/180,Ni=180/Math.PI;function yn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Tt[i&255]+Tt[i>>8&255]+Tt[i>>16&255]+Tt[i>>24&255]+"-"+Tt[e&255]+Tt[e>>8&255]+"-"+Tt[e>>16&15|64]+Tt[e>>24&255]+"-"+Tt[t&63|128]+Tt[t>>8&255]+"-"+Tt[t>>16&255]+Tt[t>>24&255]+Tt[n&255]+Tt[n>>8&255]+Tt[n>>16&255]+Tt[n>>24&255]).toLowerCase()}function ke(i,e,t){return Math.max(e,Math.min(t,i))}function Ha(i,e){return(i%e+e)%e}function fd(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function pd(i,e,t){return i!==e?(t-i)/(e-i):0}function Hi(i,e,t){return(1-t)*i+t*e}function md(i,e,t,n){return Hi(i,e,1-Math.exp(-t*n))}function xd(i,e=1){return e-Math.abs(Ha(i,e*2)-e)}function gd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function vd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function _d(i,e){return i+Math.floor(Math.random()*(e-i+1))}function bd(i,e){return i+Math.random()*(e-i)}function yd(i){return i*(.5-Math.random())}function Md(i){i!==void 0&&(go=i);let e=go+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Sd(i){return i*Gi}function Ed(i){return i*Ni}function Cd(i){return(i&i-1)===0&&i!==0}function Td(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Nd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Ad(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),d=s((e-n)/2),h=a((e-n)/2),p=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*d,l*h,o*c);break;case"YZY":i.set(l*h,o*u,l*d,o*c);break;case"ZXZ":i.set(l*d,l*h,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*u,o*c);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Rt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ze(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const nx={DEG2RAD:Gi,RAD2DEG:Ni,generateUUID:yn,clamp:ke,euclideanModulo:Ha,mapLinear:fd,inverseLerp:pd,lerp:Hi,damp:md,pingpong:xd,smoothstep:gd,smootherstep:vd,randInt:_d,randFloat:bd,randFloatSpread:yd,seededRandom:Md,degToRad:Sd,radToDeg:Ed,isPowerOfTwo:Cd,ceilPowerOfTwo:Td,floorPowerOfTwo:Nd,setQuaternionFromProperEuler:Ad,normalize:ze,denormalize:Rt};class be{constructor(e=0,t=0){be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],d=n[r+3],h=s[a+0],p=s[a+1],g=s[a+2],_=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d;return}if(o>=1){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==h||c!==p||u!==g){let m=l*h+c*p+u*g+d*_;m<0&&(h=-h,p=-p,g=-g,_=-_,m=-m);let f=1-o;if(m<.9995){const T=Math.acos(m),S=Math.sin(T);f=Math.sin(f*T)/S,o=Math.sin(o*T)/S,l=l*f+h*o,c=c*f+p*o,u=u*f+g*o,d=d*f+_*o}else{l=l*f+h*o,c=c*f+p*o,u=u*f+g*o,d=d*f+_*o;const T=1/Math.sqrt(l*l+c*c+u*u+d*d);l*=T,c*=T,u*=T,d*=T}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],d=s[a],h=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*d+l*p-c*h,e[t+1]=l*g+u*h+c*d-o*p,e[t+2]=c*g+u*p+o*h-l*d,e[t+3]=u*g-o*d-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),d=o(s/2),h=l(n/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"YXZ":this._x=h*u*d+c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"ZXY":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d-h*p*g;break;case"ZYX":this._x=h*u*d-c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d+h*p*g;break;case"YZX":this._x=h*u*d+c*p*g,this._y=c*p*d+h*u*g,this._z=c*u*g-h*p*d,this._w=c*u*d-h*p*g;break;case"XZY":this._x=h*u*d-c*p*g,this._y=c*p*d-h*u*g,this._z=c*u*g+h*p*d,this._w=c*u*d+h*p*g;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],d=t[10],h=n+o+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>d){const p=2*Math.sqrt(1+n-o-d);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-n-d);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+d-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+r*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,n=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(vo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(vo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),d=2*(s*n-a*t);return this.x=t+l*c+a*d-o*u,this.y=n+l*u+o*c-s*d,this.z=r+l*d+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Qr.copy(this).projectOnVector(e),this.sub(Qr)}reflect(e){return this.sub(Qr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qr=new I,vo=new Qi;class Ge{constructor(e,t,n,r,s,a,o,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],d=n[7],h=n[2],p=n[5],g=n[8],_=r[0],m=r[3],f=r[6],T=r[1],S=r[4],N=r[7],P=r[2],E=r[5],D=r[8];return s[0]=a*_+o*T+l*P,s[3]=a*m+o*S+l*E,s[6]=a*f+o*N+l*D,s[1]=c*_+u*T+d*P,s[4]=c*m+u*S+d*E,s[7]=c*f+u*N+d*D,s[2]=h*_+p*T+g*P,s[5]=h*m+p*S+g*E,s[8]=h*f+p*N+g*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=u*a-o*c,h=o*l-u*s,p=c*s-a*l,g=t*d+n*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(r*c-u*n)*_,e[2]=(o*n-r*a)*_,e[3]=h*_,e[4]=(u*t-r*l)*_,e[5]=(r*s-o*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(es.makeScale(e,t)),this}rotate(e){return this.premultiply(es.makeRotation(-e)),this}translate(e,t){return this.premultiply(es.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const es=new Ge,_o=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),bo=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function wd(){const i={enabled:!0,workingColorSpace:Ti,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===tt&&(r.r=Mn(r.r),r.g=Mn(r.g),r.b=Mn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===tt&&(r.r=Mi(r.r),r.g=Mi(r.g),r.b=Mi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ln?Fr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Zi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Zi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ti]:{primaries:e,whitePoint:n,transfer:Fr,toXYZ:_o,fromXYZ:bo,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:n,transfer:tt,toXYZ:_o,fromXYZ:bo,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),i}const Je=wd();function Mn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Mi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ri;class Dd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ri===void 0&&(ri=Ki("canvas")),ri.width=e.width,ri.height=e.height;const r=ri.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=ri}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ki("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Mn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Mn(t[n]/255)*255):t[n]=Mn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Rd=0;class Wa{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=yn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(ts(r[a].image)):s.push(ts(r[a]))}else s=ts(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ts(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Dd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}let Pd=0;const ns=new I;class Et extends ei{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=vn,r=vn,s=qt,a=Kn,o=tn,l=ln,c=Et.DEFAULT_ANISOTROPY,u=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pd++}),this.uuid=yn(),this.name="",this.source=new Wa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ns).x}get height(){return this.source.getSize(ns).y}get depth(){return this.source.getSize(ns).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Sl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ys:e.x=e.x-Math.floor(e.x);break;case vn:e.x=e.x<0?0:1;break;case $s:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ys:e.y=e.y-Math.floor(e.y);break;case vn:e.y=e.y<0?0:1;break;case $s:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=Sl;Et.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,n=0,r=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],d=l[8],h=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const S=(c+1)/2,N=(p+1)/2,P=(f+1)/2,E=(u+h)/4,D=(d+_)/4,F=(g+m)/4;return S>N&&S>P?S<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(S),r=E/n,s=D/n):N>P?N<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(N),n=E/r,s=F/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=D/s,r=F/s),this.set(n,r,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(d-_)/T,this.z=(h-u)/T,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ld extends ei{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const r={width:e,height:t,depth:n.depth},s=new Et(r);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Wa(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends Ld{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ll extends Et{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Id extends Et{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class er{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Zt):Zt.fromBufferAttribute(s,a),Zt.applyMatrix4(e.matrixWorld),this.expandByPoint(Zt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ar.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ar.copy(n.boundingBox)),ar.applyMatrix4(e.matrixWorld),this.union(ar)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zt),Zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pi),or.subVectors(this.max,Pi),si.subVectors(e.a,Pi),ai.subVectors(e.b,Pi),oi.subVectors(e.c,Pi),Nn.subVectors(ai,si),An.subVectors(oi,ai),kn.subVectors(si,oi);let t=[0,-Nn.z,Nn.y,0,-An.z,An.y,0,-kn.z,kn.y,Nn.z,0,-Nn.x,An.z,0,-An.x,kn.z,0,-kn.x,-Nn.y,Nn.x,0,-An.y,An.x,0,-kn.y,kn.x,0];return!is(t,si,ai,oi,or)||(t=[1,0,0,0,1,0,0,0,1],!is(t,si,ai,oi,or))?!1:(lr.crossVectors(Nn,An),t=[lr.x,lr.y,lr.z],is(t,si,ai,oi,or))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const cn=[new I,new I,new I,new I,new I,new I,new I,new I],Zt=new I,ar=new er,si=new I,ai=new I,oi=new I,Nn=new I,An=new I,kn=new I,Pi=new I,or=new I,lr=new I,Gn=new I;function is(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Gn.fromArray(i,s);const o=r.x*Math.abs(Gn.x)+r.y*Math.abs(Gn.y)+r.z*Math.abs(Gn.z),l=e.dot(Gn),c=t.dot(Gn),u=n.dot(Gn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ud=new er,Li=new I,rs=new I;class Hr{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Ud.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Li.subVectors(e,this.center);const t=Li.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Li,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(rs.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Li.copy(e.center).add(rs)),this.expandByPoint(Li.copy(e.center).sub(rs))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const dn=new I,ss=new I,cr=new I,wn=new I,as=new I,dr=new I,os=new I;class ja{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dn.copy(this.origin).addScaledVector(this.direction,t),dn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ss.copy(e).add(t).multiplyScalar(.5),cr.copy(t).sub(e).normalize(),wn.copy(this.origin).sub(ss);const s=e.distanceTo(t)*.5,a=-this.direction.dot(cr),o=wn.dot(this.direction),l=-wn.dot(cr),c=wn.lengthSq(),u=Math.abs(1-a*a);let d,h,p,g;if(u>0)if(d=a*l-o,h=a*o-l,g=s*u,d>=0)if(h>=-g)if(h<=g){const _=1/u;d*=_,h*=_,p=d*(d+a*h+2*o)+h*(a*d+h+2*l)+c}else h=s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h=-s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;else h<=-g?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c):h<=g?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+c);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),p=-d*d+h*(h+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(ss).addScaledVector(cr,h),p}intersectSphere(e,t){dn.subVectors(e.center,this.origin);const n=dn.dot(this.direction),r=dn.dot(dn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return c>=0?(n=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(n=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),d>=0?(o=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,dn)!==null}intersectTriangle(e,t,n,r,s){as.subVectors(t,e),dr.subVectors(n,e),os.crossVectors(as,dr);let a=this.direction.dot(os),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;wn.subVectors(this.origin,e);const l=o*this.direction.dot(dr.crossVectors(wn,dr));if(l<0)return null;const c=o*this.direction.dot(as.cross(wn));if(c<0||l+c>a)return null;const u=-o*wn.dot(os);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class it{constructor(e,t,n,r,s,a,o,l,c,u,d,h,p,g,_,m){it.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,d,h,p,g,_,m)}set(e,t,n,r,s,a,o,l,c,u,d,h,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=r,f[1]=s,f[5]=a,f[9]=o,f[13]=l,f[2]=c,f[6]=u,f[10]=d,f[14]=h,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new it().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/li.setFromMatrixColumn(e,0).length(),s=1/li.setFromMatrixColumn(e,1).length(),a=1/li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*u,p=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=h-_*c,t[9]=-o*l,t[2]=_-h*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,p=l*d,g=c*u,_=c*d;t[0]=h+_*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*d,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=_+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,p=l*d,g=c*u,_=c*d;t[0]=h-_*o,t[4]=-a*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=_-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,p=a*d,g=o*u,_=o*d;t[0]=l*u,t[4]=g*c-p,t[8]=h*c+_,t[1]=l*d,t[5]=_*c+h,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-h*d,t[8]=g*d+p,t[1]=d,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=a*l,p=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-d,t[8]=c*u,t[1]=h*d+_,t[5]=a*u,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*u,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fd,e,Od)}lookAt(e,t,n){const r=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),Dn.crossVectors(n,Bt),Dn.lengthSq()===0&&(Math.abs(n.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),Dn.crossVectors(n,Bt)),Dn.normalize(),ur.crossVectors(Bt,Dn),r[0]=Dn.x,r[4]=ur.x,r[8]=Bt.x,r[1]=Dn.y,r[5]=ur.y,r[9]=Bt.y,r[2]=Dn.z,r[6]=ur.z,r[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],d=n[5],h=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],T=n[3],S=n[7],N=n[11],P=n[15],E=r[0],D=r[4],F=r[8],M=r[12],y=r[1],L=r[5],B=r[9],H=r[13],A=r[2],k=r[6],V=r[10],Q=r[14],j=r[3],K=r[7],ne=r[11],ie=r[15];return s[0]=a*E+o*y+l*A+c*j,s[4]=a*D+o*L+l*k+c*K,s[8]=a*F+o*B+l*V+c*ne,s[12]=a*M+o*H+l*Q+c*ie,s[1]=u*E+d*y+h*A+p*j,s[5]=u*D+d*L+h*k+p*K,s[9]=u*F+d*B+h*V+p*ne,s[13]=u*M+d*H+h*Q+p*ie,s[2]=g*E+_*y+m*A+f*j,s[6]=g*D+_*L+m*k+f*K,s[10]=g*F+_*B+m*V+f*ne,s[14]=g*M+_*H+m*Q+f*ie,s[3]=T*E+S*y+N*A+P*j,s[7]=T*D+S*L+N*k+P*K,s[11]=T*F+S*B+N*V+P*ne,s[15]=T*M+S*H+N*Q+P*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],d=e[6],h=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+s*l*d-r*c*d-s*o*h+n*c*h+r*o*p-n*l*p)+_*(+t*l*p-t*c*h+s*a*h-r*a*p+r*c*u-s*l*u)+m*(+t*c*d-t*o*p-s*a*d+n*a*p+s*o*u-n*c*u)+f*(-r*o*u-t*l*d+t*o*h+r*a*d-n*a*h+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],d=e[9],h=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],T=d*m*c-_*h*c+_*l*p-o*m*p-d*l*f+o*h*f,S=g*h*c-u*m*c-g*l*p+a*m*p+u*l*f-a*h*f,N=u*_*c-g*d*c+g*o*p-a*_*p-u*o*f+a*d*f,P=g*d*l-u*_*l-g*o*h+a*_*h+u*o*m-a*d*m,E=t*T+n*S+r*N+s*P;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D=1/E;return e[0]=T*D,e[1]=(_*h*s-d*m*s-_*r*p+n*m*p+d*r*f-n*h*f)*D,e[2]=(o*m*s-_*l*s+_*r*c-n*m*c-o*r*f+n*l*f)*D,e[3]=(d*l*s-o*h*s-d*r*c+n*h*c+o*r*p-n*l*p)*D,e[4]=S*D,e[5]=(u*m*s-g*h*s+g*r*p-t*m*p-u*r*f+t*h*f)*D,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*f-t*l*f)*D,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*p+t*l*p)*D,e[8]=N*D,e[9]=(g*d*s-u*_*s-g*n*p+t*_*p+u*n*f-t*d*f)*D,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*f+t*o*f)*D,e[11]=(u*o*s-a*d*s-u*n*c+t*d*c+a*n*p-t*o*p)*D,e[12]=P*D,e[13]=(u*_*r-g*d*r+g*n*h-t*_*h-u*n*m+t*d*m)*D,e[14]=(g*o*r-a*_*r-g*n*l+t*_*l+a*n*m-t*o*m)*D,e[15]=(a*d*r-u*o*r+u*n*l-t*d*l-a*n*h+t*o*h)*D,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,d=o+o,h=s*c,p=s*u,g=s*d,_=a*u,m=a*d,f=o*d,T=l*c,S=l*u,N=l*d,P=n.x,E=n.y,D=n.z;return r[0]=(1-(_+f))*P,r[1]=(p+N)*P,r[2]=(g-S)*P,r[3]=0,r[4]=(p-N)*E,r[5]=(1-(h+f))*E,r[6]=(m+T)*E,r[7]=0,r[8]=(g+S)*D,r[9]=(m-T)*D,r[10]=(1-(h+_))*D,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=li.set(r[0],r[1],r[2]).length();const a=li.set(r[4],r[5],r[6]).length(),o=li.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Jt.copy(this);const c=1/s,u=1/a,d=1/o;return Jt.elements[0]*=c,Jt.elements[1]*=c,Jt.elements[2]*=c,Jt.elements[4]*=u,Jt.elements[5]*=u,Jt.elements[6]*=u,Jt.elements[8]*=d,Jt.elements[9]*=d,Jt.elements[10]*=d,t.setFromRotationMatrix(Jt),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=nn,l=!1){const c=this.elements,u=2*s/(t-e),d=2*s/(n-r),h=(t+e)/(t-e),p=(n+r)/(n-r);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===nn)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Or)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=nn,l=!1){const c=this.elements,u=2/(t-e),d=2/(n-r),h=-(t+e)/(t-e),p=-(n+r)/(n-r);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===nn)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===Or)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const li=new I,Jt=new it,Fd=new I(0,0,0),Od=new I(1,1,1),Dn=new I,ur=new I,Bt=new I,yo=new it,Mo=new Qi;class Yt{constructor(e=0,t=0,n=0,r=Yt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ke(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Mo.setFromEuler(this),this.setFromQuaternion(Mo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yt.DEFAULT_ORDER="XYZ";class Xa{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Vd=0;const So=new I,ci=new Qi,un=new it,hr=new I,Ii=new I,Bd=new I,zd=new Qi,Eo=new I(1,0,0),Co=new I(0,1,0),To=new I(0,0,1),No={type:"added"},kd={type:"removed"},di={type:"childadded",child:null},ls={type:"childremoved",child:null};class mt extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=yn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new I,t=new Yt,n=new Qi,r=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new it},normalMatrix:{value:new Ge}}),this.matrix=new it,this.matrixWorld=new it,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ci.setFromAxisAngle(e,t),this.quaternion.multiply(ci),this}rotateOnWorldAxis(e,t){return ci.setFromAxisAngle(e,t),this.quaternion.premultiply(ci),this}rotateX(e){return this.rotateOnAxis(Eo,e)}rotateY(e){return this.rotateOnAxis(Co,e)}rotateZ(e){return this.rotateOnAxis(To,e)}translateOnAxis(e,t){return So.copy(e).applyQuaternion(this.quaternion),this.position.add(So.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Eo,e)}translateY(e){return this.translateOnAxis(Co,e)}translateZ(e){return this.translateOnAxis(To,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?hr.copy(e):hr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ii.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(Ii,hr,this.up):un.lookAt(hr,Ii,this.up),this.quaternion.setFromRotationMatrix(un),r&&(un.extractRotation(r.matrixWorld),ci.setFromRotationMatrix(un),this.quaternion.premultiply(ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(pt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(No),di.child=e,this.dispatchEvent(di),di.child=null):pt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kd),ls.child=e,this.dispatchEvent(ls),ls.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(No),di.child=e,this.dispatchEvent(di),di.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ii,e,Bd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ii,zd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const d=l[c];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),d=a(e.shapes),h=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}mt.DEFAULT_UP=new I(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qt=new I,hn=new I,cs=new I,fn=new I,ui=new I,hi=new I,Ao=new I,ds=new I,us=new I,hs=new I,fs=new nt,ps=new nt,ms=new nt;class en{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Qt.subVectors(e,t),r.cross(Qt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Qt.subVectors(r,t),hn.subVectors(n,t),cs.subVectors(e,t);const a=Qt.dot(Qt),o=Qt.dot(hn),l=Qt.dot(cs),c=hn.dot(hn),u=hn.dot(cs),d=a*c-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,p=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,fn.x),l.addScaledVector(a,fn.y),l.addScaledVector(o,fn.z),l)}static getInterpolatedAttribute(e,t,n,r,s,a){return fs.setScalar(0),ps.setScalar(0),ms.setScalar(0),fs.fromBufferAttribute(e,t),ps.fromBufferAttribute(e,n),ms.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(fs,s.x),a.addScaledVector(ps,s.y),a.addScaledVector(ms,s.z),a}static isFrontFacing(e,t,n,r){return Qt.subVectors(n,t),hn.subVectors(e,t),Qt.cross(hn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),Qt.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return en.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;ui.subVectors(r,n),hi.subVectors(s,n),ds.subVectors(e,n);const l=ui.dot(ds),c=hi.dot(ds);if(l<=0&&c<=0)return t.copy(n);us.subVectors(e,r);const u=ui.dot(us),d=hi.dot(us);if(u>=0&&d<=u)return t.copy(r);const h=l*d-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ui,a);hs.subVectors(e,s);const p=ui.dot(hs),g=hi.dot(hs);if(g>=0&&p<=g)return t.copy(s);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(hi,o);const m=u*g-p*d;if(m<=0&&d-u>=0&&p-g>=0)return Ao.subVectors(s,r),o=(d-u)/(d-u+(p-g)),t.copy(r).addScaledVector(Ao,o);const f=1/(m+_+h);return a=_*f,o=h*f,t.copy(n).addScaledVector(ui,a).addScaledVector(hi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Il={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Rn={h:0,s:0,l:0},fr={h:0,s:0,l:0};function xs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ue{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Je.workingColorSpace){if(e=Ha(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=xs(a,s,e+1/3),this.g=xs(a,s,e),this.b=xs(a,s,e-1/3)}return Je.colorSpaceToWorking(this,r),this}setStyle(e,t=Xt){function n(s){s!==void 0&&parseFloat(s)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){const n=Il[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mn(e.r),this.g=Mn(e.g),this.b=Mn(e.b),this}copyLinearToSRGB(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return Je.workingToColorSpace(Nt.copy(this),e),Math.round(ke(Nt.r*255,0,255))*65536+Math.round(ke(Nt.g*255,0,255))*256+Math.round(ke(Nt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.workingToColorSpace(Nt.copy(this),t);const n=Nt.r,r=Nt.g,s=Nt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=u<=.5?d/(a+o):d/(2-a-o),a){case n:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-n)/d+2;break;case s:l=(n-r)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Je.workingColorSpace){return Je.workingToColorSpace(Nt.copy(this),t),e.r=Nt.r,e.g=Nt.g,e.b=Nt.b,e}getStyle(e=Xt){Je.workingToColorSpace(Nt.copy(this),e);const t=Nt.r,n=Nt.g,r=Nt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Rn),this.setHSL(Rn.h+e,Rn.s+t,Rn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Rn),e.getHSL(fr);const n=Hi(Rn.h,fr.h,t),r=Hi(Rn.s,fr.s,t),s=Hi(Rn.l,fr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nt=new Ue;Ue.NAMES=Il;let Gd=0;class Ft extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gd++}),this.uuid=yn(),this.name="",this.type="Material",this.blending=yi,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Os,this.blendDst=Vs,this.blendEquation=Yn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ue(0,0,0),this.blendAlpha=0,this.depthFunc=Si,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=po,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ii,this.stencilZFail=ii,this.stencilZPass=ii,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yi&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Os&&(n.blendSrc=this.blendSrc),this.blendDst!==Vs&&(n.blendDst=this.blendDst),this.blendEquation!==Yn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Si&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==po&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ii&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ii&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ii&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class qa extends Ft{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.combine=kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const gn=Hd();function Hd(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function zt(i){Math.abs(i)>65504&&Ie("DataUtils.toHalfFloat(): Value out of range."),i=ke(i,-65504,65504),gn.floatView[0]=i;const e=gn.uint32View[0],t=e>>23&511;return gn.baseTable[t]+((e&8388607)>>gn.shiftTable[t])}function pr(i){const e=i>>10;return gn.uint32View[0]=gn.mantissaTable[gn.offsetTable[e]+(i&1023)]+gn.exponentTable[e],gn.floatView[0]}const xt=new I,mr=new be;let Wd=0;class Ht{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ea,this.updateRanges=[],this.gpuType=_n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)mr.fromBufferAttribute(this,t),mr.applyMatrix3(e),this.setXY(t,mr.x,mr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Rt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ze(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rt(t,this.array)),t}setX(e,t){return this.normalized&&(t=ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rt(t,this.array)),t}setY(e,t){return this.normalized&&(t=ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rt(t,this.array)),t}setW(e,t){return this.normalized&&(t=ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ze(t,this.array),n=ze(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ze(t,this.array),n=ze(n,this.array),r=ze(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=ze(t,this.array),n=ze(n,this.array),r=ze(r,this.array),s=ze(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ea&&(e.usage=this.usage),e}}class Ul extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Fl extends Ht{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ix extends Ht{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=pr(this.array[e*this.itemSize]);return this.normalized&&(t=Rt(t,this.array)),t}setX(e,t){return this.normalized&&(t=ze(t,this.array)),this.array[e*this.itemSize]=zt(t),this}getY(e){let t=pr(this.array[e*this.itemSize+1]);return this.normalized&&(t=Rt(t,this.array)),t}setY(e,t){return this.normalized&&(t=ze(t,this.array)),this.array[e*this.itemSize+1]=zt(t),this}getZ(e){let t=pr(this.array[e*this.itemSize+2]);return this.normalized&&(t=Rt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ze(t,this.array)),this.array[e*this.itemSize+2]=zt(t),this}getW(e){let t=pr(this.array[e*this.itemSize+3]);return this.normalized&&(t=Rt(t,this.array)),t}setW(e,t){return this.normalized&&(t=ze(t,this.array)),this.array[e*this.itemSize+3]=zt(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=ze(t,this.array),n=ze(n,this.array)),this.array[e+0]=zt(t),this.array[e+1]=zt(n),this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=ze(t,this.array),n=ze(n,this.array),r=ze(r,this.array)),this.array[e+0]=zt(t),this.array[e+1]=zt(n),this.array[e+2]=zt(r),this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=ze(t,this.array),n=ze(n,this.array),r=ze(r,this.array),s=ze(s,this.array)),this.array[e+0]=zt(t),this.array[e+1]=zt(n),this.array[e+2]=zt(r),this.array[e+3]=zt(s),this}}class Ct extends Ht{constructor(e,t,n){super(new Float32Array(e),t,n)}}let jd=0;const jt=new it,gs=new mt,fi=new I,kt=new er,Ui=new er,Mt=new I;class $t extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=yn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pl(e)?Fl:Ul)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ge().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return jt.makeRotationFromQuaternion(e),this.applyMatrix4(jt),this}rotateX(e){return jt.makeRotationX(e),this.applyMatrix4(jt),this}rotateY(e){return jt.makeRotationY(e),this.applyMatrix4(jt),this}rotateZ(e){return jt.makeRotationZ(e),this.applyMatrix4(jt),this}translate(e,t,n){return jt.makeTranslation(e,t,n),this.applyMatrix4(jt),this}scale(e,t,n){return jt.makeScale(e,t,n),this.applyMatrix4(jt),this}lookAt(e){return gs.lookAt(e),gs.updateMatrix(),this.applyMatrix4(gs.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(fi).negate(),this.translate(fi.x,fi.y,fi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ct(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];kt.setFromBufferAttribute(s),this.morphTargetsRelative?(Mt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(Mt),Mt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(Mt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&pt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){pt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Ui.setFromBufferAttribute(o),this.morphTargetsRelative?(Mt.addVectors(kt.min,Ui.min),kt.expandByPoint(Mt),Mt.addVectors(kt.max,Ui.max),kt.expandByPoint(Mt)):(kt.expandByPoint(Ui.min),kt.expandByPoint(Ui.max))}kt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Mt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Mt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Mt.fromBufferAttribute(o,c),l&&(fi.fromBufferAttribute(e,c),Mt.add(fi)),r=Math.max(r,n.distanceToSquared(Mt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&pt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){pt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ht(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let F=0;F<n.count;F++)o[F]=new I,l[F]=new I;const c=new I,u=new I,d=new I,h=new be,p=new be,g=new be,_=new I,m=new I;function f(F,M,y){c.fromBufferAttribute(n,F),u.fromBufferAttribute(n,M),d.fromBufferAttribute(n,y),h.fromBufferAttribute(s,F),p.fromBufferAttribute(s,M),g.fromBufferAttribute(s,y),u.sub(c),d.sub(c),p.sub(h),g.sub(h);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(L),m.copy(d).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(L),o[F].add(_),o[M].add(_),o[y].add(_),l[F].add(m),l[M].add(m),l[y].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let F=0,M=T.length;F<M;++F){const y=T[F],L=y.start,B=y.count;for(let H=L,A=L+B;H<A;H+=3)f(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const S=new I,N=new I,P=new I,E=new I;function D(F){P.fromBufferAttribute(r,F),E.copy(P);const M=o[F];S.copy(M),S.sub(P.multiplyScalar(P.dot(M))).normalize(),N.crossVectors(E,M);const L=N.dot(l[F])<0?-1:1;a.setXYZW(F,S.x,S.y,S.z,L)}for(let F=0,M=T.length;F<M;++F){const y=T[F],L=y.start,B=y.count;for(let H=L,A=L+B;H<A;H+=3)D(e.getX(H+0)),D(e.getX(H+1)),D(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ht(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,p=n.count;h<p;h++)n.setXYZ(h,0,0,0);const r=new I,s=new I,a=new I,o=new I,l=new I,c=new I,u=new I,d=new I;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),d.subVectors(r,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Mt.fromBufferAttribute(e,t),Mt.normalize(),e.setXYZ(t,Mt.x,Mt.y,Mt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,d=o.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*u;for(let f=0;f<u;f++)h[g++]=c[p++]}return new Ht(h,u,d)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $t,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,d=c.length;u<d;u++){const h=c[u],p=e(h,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let d=0,h=c.length;d<h;d++){const p=c[d];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],d=s[c];for(let h=0,p=d.length;h<p;h++)u.push(d[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const wo=new it,Hn=new ja,xr=new Hr,Do=new I,gr=new I,vr=new I,_r=new I,vs=new I,br=new I,Ro=new I,yr=new I;class En extends mt{constructor(e=new $t,t=new qa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){br.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],d=s[l];u!==0&&(vs.fromBufferAttribute(d,e),a?br.addScaledVector(vs,u):br.addScaledVector(vs.sub(t),u))}t.add(br)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere),xr.applyMatrix4(s),Hn.copy(e.ray).recast(e.near),!(xr.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(xr,Do)===null||Hn.origin.distanceToSquared(Do)>(e.far-e.near)**2))&&(wo.copy(s).invert(),Hn.copy(e.ray).applyMatrix4(wo),!(n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Hn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],f=a[m.materialIndex],T=Math.max(m.start,p.start),S=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let N=T,P=S;N<P;N+=3){const E=o.getX(N),D=o.getX(N+1),F=o.getX(N+2);r=Mr(this,f,e,n,c,u,d,E,D,F),r&&(r.faceIndex=Math.floor(N/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const T=o.getX(m),S=o.getX(m+1),N=o.getX(m+2);r=Mr(this,a,e,n,c,u,d,T,S,N),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],f=a[m.materialIndex],T=Math.max(m.start,p.start),S=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let N=T,P=S;N<P;N+=3){const E=N,D=N+1,F=N+2;r=Mr(this,f,e,n,c,u,d,E,D,F),r&&(r.faceIndex=Math.floor(N/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const T=m,S=m+1,N=m+2;r=Mr(this,a,e,n,c,u,d,T,S,N),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Xd(i,e,t,n,r,s,a,o){let l;if(e.side===Ut?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Vn,o),l===null)return null;yr.copy(o),yr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(yr);return c<t.near||c>t.far?null:{distance:c,point:yr.clone(),object:i}}function Mr(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,gr),i.getVertexPosition(l,vr),i.getVertexPosition(c,_r);const u=Xd(i,e,t,n,gr,vr,_r,Ro);if(u){const d=new I;en.getBarycoord(Ro,gr,vr,_r,d),r&&(u.uv=en.getInterpolatedAttribute(r,o,l,c,d,new be)),s&&(u.uv1=en.getInterpolatedAttribute(s,o,l,c,d,new be)),a&&(u.normal=en.getInterpolatedAttribute(a,o,l,c,d,new I),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new I,materialIndex:0};en.getNormal(gr,vr,_r,h.normal),u.face=h,u.barycoord=d}return u}class tr extends $t{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],d=[];let h=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(d,2));function g(_,m,f,T,S,N,P,E,D,F,M){const y=N/D,L=P/F,B=N/2,H=P/2,A=E/2,k=D+1,V=F+1;let Q=0,j=0;const K=new I;for(let ne=0;ne<V;ne++){const ie=ne*L-H;for(let qe=0;qe<k;qe++){const De=qe*y-B;K[_]=De*T,K[m]=ie*S,K[f]=A,c.push(K.x,K.y,K.z),K[_]=0,K[m]=0,K[f]=E>0?1:-1,u.push(K.x,K.y,K.z),d.push(qe/D),d.push(1-ne/F),Q+=1}}for(let ne=0;ne<F;ne++)for(let ie=0;ie<D;ie++){const qe=h+ie+k*ne,De=h+ie+k*(ne+1),Ye=h+(ie+1)+k*(ne+1),Oe=h+(ie+1)+k*ne;l.push(qe,De,Oe),l.push(De,Ye,Oe),j+=6}o.addGroup(p,j,M),p+=j,h+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ai(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Dt(i){const e={};for(let t=0;t<i.length;t++){const n=Ai(i[t]);for(const r in n)e[r]=n[r]}return e}function qd(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Ol(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const Yd={clone:Ai,merge:Dt};var $d=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends Ft{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$d,this.fragmentShader=Kd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ai(e.uniforms),this.uniformsGroups=qd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Vl extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new it,this.projectionMatrix=new it,this.projectionMatrixInverse=new it,this.coordinateSystem=nn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Pn=new I,Po=new be,Lo=new be;class Gt extends Vl{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ni*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Gi*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ni*2*Math.atan(Math.tan(Gi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Pn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z),Pn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Pn.x,Pn.y).multiplyScalar(-e/Pn.z)}getViewSize(e,t){return this.getViewBounds(e,Po,Lo),t.subVectors(Lo,Po)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Gi*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const pi=-90,mi=1;class Zd extends mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Gt(pi,mi,e,t);r.layers=this.layers,this.add(r);const s=new Gt(pi,mi,e,t);s.layers=this.layers,this.add(s);const a=new Gt(pi,mi,e,t);a.layers=this.layers,this.add(a);const o=new Gt(pi,mi,e,t);o.layers=this.layers,this.add(o);const l=new Gt(pi,mi,e,t);l.layers=this.layers,this.add(l);const c=new Gt(pi,mi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===nn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Or)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(d,h,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Bl extends Et{constructor(e=[],t=Ei,n,r,s,a,o,l,c,u){super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Jd extends Jn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Bl(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new tr(5,5,5),s=new Cn({name:"CubemapFromEquirect",uniforms:Ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:bn});s.uniforms.tEquirect.value=t;const a=new En(r,s),o=t.minFilter;return t.minFilter===Kn&&(t.minFilter=qt),new Zd(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}class zi extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qd={type:"move"};class _s{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],h=u.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Qd)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class rx extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yt,this.environmentIntensity=1,this.environmentRotation=new Yt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class eu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ea,this.updateRanges=[],this.version=0,this.uuid=yn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const wt=new I;class zl{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Rt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=ze(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Rt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Rt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Rt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Rt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ze(t,this.array),n=ze(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=ze(t,this.array),n=ze(n,this.array),r=ze(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ze(t,this.array),n=ze(n,this.array),r=ze(r,this.array),s=ze(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Vr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ht(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new zl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Vr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class sx extends Ft{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class tu extends Et{constructor(e=null,t=1,n=1,r,s,a,o,l,c=Pt,u=Pt,d,h){super(null,a,o,l,c,u,r,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ax extends Ht{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const bs=new I,nu=new I,iu=new Ge;class qn{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=bs.subVectors(n,t).cross(nu.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(bs),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||iu.getNormalMatrix(e),r=this.coplanarPoint(bs).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Wn=new Hr,ru=new be(.5,.5),Sr=new I;class Wr{constructor(e=new qn,t=new qn,n=new qn,r=new qn,s=new qn,a=new qn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=nn,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],d=s[5],h=s[6],p=s[7],g=s[8],_=s[9],m=s[10],f=s[11],T=s[12],S=s[13],N=s[14],P=s[15];if(r[0].setComponents(c-a,p-u,f-g,P-T).normalize(),r[1].setComponents(c+a,p+u,f+g,P+T).normalize(),r[2].setComponents(c+o,p+d,f+_,P+S).normalize(),r[3].setComponents(c-o,p-d,f-_,P-S).normalize(),n)r[4].setComponents(l,h,m,N).normalize(),r[5].setComponents(c-l,p-h,f-m,P-N).normalize();else if(r[4].setComponents(c-l,p-h,f-m,P-N).normalize(),t===nn)r[5].setComponents(c+l,p+h,f+m,P+N).normalize();else if(t===Or)r[5].setComponents(l,h,m,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Wn)}intersectsSprite(e){Wn.center.set(0,0,0);const t=ru.distanceTo(e.center);return Wn.radius=.7071067811865476+t,Wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Wn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Sr.x=r.normal.x>0?e.max.x:e.min.x,Sr.y=r.normal.y>0?e.max.y:e.min.y,Sr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const sn=new it,an=new Wr;class kl{constructor(){this.coordinateSystem=nn}intersectsObject(e,t){if(!t.isArrayCamera||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const r=t.cameras[n];if(sn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),an.setFromProjectionMatrix(sn,r.coordinateSystem,r.reversedDepth),an.intersectsObject(e))return!0}return!1}intersectsSprite(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const r=t.cameras[n];if(sn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),an.setFromProjectionMatrix(sn,r.coordinateSystem,r.reversedDepth),an.intersectsSprite(e))return!0}return!1}intersectsSphere(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const r=t.cameras[n];if(sn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),an.setFromProjectionMatrix(sn,r.coordinateSystem,r.reversedDepth),an.intersectsSphere(e))return!0}return!1}intersectsBox(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const r=t.cameras[n];if(sn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),an.setFromProjectionMatrix(sn,r.coordinateSystem,r.reversedDepth),an.intersectsBox(e))return!0}return!1}containsPoint(e,t){if(!t||!t.cameras||t.cameras.length===0)return!1;for(let n=0;n<t.cameras.length;n++){const r=t.cameras[n];if(sn.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),an.setFromProjectionMatrix(sn,r.coordinateSystem,r.reversedDepth),an.containsPoint(e))return!0}return!1}clone(){return new kl}}class Gl extends Ft{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ue(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Br=new I,zr=new I,Io=new it,Fi=new ja,Er=new Hr,ys=new I,Uo=new I;class ox extends mt{constructor(e=new $t,t=new Gl){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Br.fromBufferAttribute(t,r-1),zr.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Br.distanceTo(zr);e.setAttribute("lineDistance",new Ct(n,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Er.copy(n.boundingSphere),Er.applyMatrix4(r),Er.radius+=s,e.ray.intersectsSphere(Er)===!1)return;Io.copy(r).invert(),Fi.copy(e.ray).applyMatrix4(Io);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,h=n.attributes.position;if(u!==null){const p=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const f=u.getX(_),T=u.getX(_+1),S=Cr(this,e,Fi,l,f,T,_);S&&t.push(S)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(p),f=Cr(this,e,Fi,l,_,m,g-1);f&&t.push(f)}}else{const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const f=Cr(this,e,Fi,l,_,_+1,_);f&&t.push(f)}if(this.isLineLoop){const _=Cr(this,e,Fi,l,g-1,p,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Cr(i,e,t,n,r,s,a){const o=i.geometry.attributes.position;if(Br.fromBufferAttribute(o,r),zr.fromBufferAttribute(o,s),t.distanceSqToSegment(Br,zr,ys,Uo)>n)return;ys.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ys);if(!(c<e.near||c>e.far))return{distance:c,point:Uo.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}class lx extends Ft{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ue(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}class cx extends Et{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Pt,this.minFilter=Pt,this.generateMipmaps=!1,this.needsUpdate=!0}}class Hl extends Et{constructor(e,t,n=Zn,r,s,a,o=Pt,l=Pt,c,u=Yi,d=1){if(u!==Yi&&u!==$i)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Wa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Wl extends Et{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ya extends $t{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],d=[],h=[],p=[];let g=0;const _=[],m=n/2;let f=0;T(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Ct(d,3)),this.setAttribute("normal",new Ct(h,3)),this.setAttribute("uv",new Ct(p,2));function T(){const N=new I,P=new I;let E=0;const D=(t-e)/n;for(let F=0;F<=s;F++){const M=[],y=F/s,L=y*(t-e)+e;for(let B=0;B<=r;B++){const H=B/r,A=H*l+o,k=Math.sin(A),V=Math.cos(A);P.x=L*k,P.y=-y*n+m,P.z=L*V,d.push(P.x,P.y,P.z),N.set(k,D,V).normalize(),h.push(N.x,N.y,N.z),p.push(H,1-y),M.push(g++)}_.push(M)}for(let F=0;F<r;F++)for(let M=0;M<s;M++){const y=_[M][F],L=_[M+1][F],B=_[M+1][F+1],H=_[M][F+1];(e>0||M!==0)&&(u.push(y,L,H),E+=3),(t>0||M!==s-1)&&(u.push(L,B,H),E+=3)}c.addGroup(f,E,0),f+=E}function S(N){const P=g,E=new be,D=new I;let F=0;const M=N===!0?e:t,y=N===!0?1:-1;for(let B=1;B<=r;B++)d.push(0,m*y,0),h.push(0,y,0),p.push(.5,.5),g++;const L=g;for(let B=0;B<=r;B++){const A=B/r*l+o,k=Math.cos(A),V=Math.sin(A);D.x=M*V,D.y=m*y,D.z=M*k,d.push(D.x,D.y,D.z),h.push(0,y,0),E.x=k*.5+.5,E.y=V*.5*y+.5,p.push(E.x,E.y),g++}for(let B=0;B<r;B++){const H=P+B,A=L+B;N===!0?u.push(A,A+1,H):u.push(A+1,A,H),F+=3}c.addGroup(f,F,N===!0?1:2),f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ya(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jl extends Ya{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new jl(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Tn{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ie("Curve: .getPoint() not implemented.")}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const u=n[r],h=n[r+1]-u,p=(a-u)/h;return(r+p)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new be:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){const n=new I,r=[],s=[],a=[],o=new I,l=new it;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new I)}s[0]=new I,a[0]=new I;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),d=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),h<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(r[p-1],r[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(ke(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(r[p],s[p])}if(t===!0){let p=Math.acos(ke(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Xl extends Tn{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new be){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),d=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*d+this.aX,c=h*d+p*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class su extends Xl{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function $a(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,d){let h=(a-s)/c-(o-s)/(c+u)+(o-a)/u,p=(o-a)/u-(l-a)/(u+d)+(l-o)/d;h*=u,p*=u,r(a,o,h,p)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const Tr=new I,Ms=new $a,Ss=new $a,Es=new $a;class au extends Tn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new I){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(Tr.subVectors(r[0],r[1]).add(r[0]),c=Tr);const d=r[o%s],h=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(Tr.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Tr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),p),_=Math.pow(d.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Ms.initNonuniformCatmullRom(c.x,d.x,h.x,u.x,g,_,m),Ss.initNonuniformCatmullRom(c.y,d.y,h.y,u.y,g,_,m),Es.initNonuniformCatmullRom(c.z,d.z,h.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Ms.initCatmullRom(c.x,d.x,h.x,u.x,this.tension),Ss.initCatmullRom(c.y,d.y,h.y,u.y,this.tension),Es.initCatmullRom(c.z,d.z,h.z,u.z,this.tension));return n.set(Ms.calc(l),Ss.calc(l),Es.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new I().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Fo(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,l=i*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*i+t}function ou(i,e){const t=1-i;return t*t*e}function lu(i,e){return 2*(1-i)*i*e}function cu(i,e){return i*i*e}function Wi(i,e,t,n){return ou(i,e)+lu(i,t)+cu(i,n)}function du(i,e){const t=1-i;return t*t*t*e}function uu(i,e){const t=1-i;return 3*t*t*i*e}function hu(i,e){return 3*(1-i)*i*i*e}function fu(i,e){return i*i*i*e}function ji(i,e,t,n,r){return du(i,e)+uu(i,t)+hu(i,n)+fu(i,r)}class pu extends Tn{constructor(e=new be,t=new be,n=new be,r=new be){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new be){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ji(e,r.x,s.x,a.x,o.x),ji(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class mu extends Tn{constructor(e=new I,t=new I,n=new I,r=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new I){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ji(e,r.x,s.x,a.x,o.x),ji(e,r.y,s.y,a.y,o.y),ji(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class xu extends Tn{constructor(e=new be,t=new be){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new be){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new be){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class gu extends Tn{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vu extends Tn{constructor(e=new be,t=new be,n=new be){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new be){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Wi(e,r.x,s.x,a.x),Wi(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ql extends Tn{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Wi(e,r.x,s.x,a.x),Wi(e,r.y,s.y,a.y),Wi(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _u extends Tn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new be){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],d=r[a>r.length-3?r.length-1:a+2];return n.set(Fo(o,l.x,c.x,u.x,d.x),Fo(o,l.y,c.y,u.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new be().fromArray(r))}return this}}var bu=Object.freeze({__proto__:null,ArcCurve:su,CatmullRomCurve3:au,CubicBezierCurve:pu,CubicBezierCurve3:mu,EllipseCurve:Xl,LineCurve:xu,LineCurve3:gu,QuadraticBezierCurve:vu,QuadraticBezierCurve3:ql,SplineCurve:_u});class jr extends $t{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,d=e/o,h=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<u;f++){const T=f*h-a;for(let S=0;S<c;S++){const N=S*d-s;g.push(N,-T,0),_.push(0,0,1),m.push(S/o),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let T=0;T<o;T++){const S=T+c*f,N=T+c*(f+1),P=T+1+c*(f+1),E=T+1+c*f;p.push(S,N,E),p.push(N,P,E)}this.setIndex(p),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(_,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ka extends $t{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],d=new I,h=new I,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const T=[],S=f/n;let N=0;f===0&&a===0?N=.5/t:f===n&&l===Math.PI&&(N=-.5/t);for(let P=0;P<=t;P++){const E=P/t;d.x=-e*Math.cos(r+E*s)*Math.sin(a+S*o),d.y=e*Math.cos(a+S*o),d.z=e*Math.sin(r+E*s)*Math.sin(a+S*o),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(E+N,1-S),T.push(c++)}u.push(T)}for(let f=0;f<n;f++)for(let T=0;T<t;T++){const S=u[f][T+1],N=u[f][T],P=u[f+1][T],E=u[f+1][T+1];(f!==0||a>0)&&p.push(S,N,E),(f!==n-1||l<Math.PI)&&p.push(N,P,E)}this.setIndex(p),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(_,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ka(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Yl extends $t{constructor(e=new ql(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new I,l=new I,c=new be;let u=new I;const d=[],h=[],p=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Ct(d,3)),this.setAttribute("normal",new Ct(h,3)),this.setAttribute("uv",new Ct(p,2));function _(){for(let S=0;S<t;S++)m(S);m(s===!1?t:0),T(),f()}function m(S){u=e.getPointAt(S/t,u);const N=a.normals[S],P=a.binormals[S];for(let E=0;E<=r;E++){const D=E/r*Math.PI*2,F=Math.sin(D),M=-Math.cos(D);l.x=M*N.x+F*P.x,l.y=M*N.y+F*P.y,l.z=M*N.z+F*P.z,l.normalize(),h.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,d.push(o.x,o.y,o.z)}}function f(){for(let S=1;S<=t;S++)for(let N=1;N<=r;N++){const P=(r+1)*(S-1)+(N-1),E=(r+1)*S+(N-1),D=(r+1)*S+N,F=(r+1)*(S-1)+N;g.push(P,E,F),g.push(E,D,F)}}function T(){for(let S=0;S<=t;S++)for(let N=0;N<=r;N++)c.x=S/t,c.y=N/r,p.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Yl(new bu[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class dx extends Ft{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ue(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class yu extends Ft{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ue(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qn,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ux extends yu{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ke(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ue(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ue(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ue(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class hx extends Ft{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Ue(16777215),this.specular=new Ue(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qn,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.combine=kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fx extends Ft{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Ue(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qn,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class px extends Ft{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qn,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class mx extends Ft{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Ue(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ue(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qn,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.combine=kr,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Mu extends Ft{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=td,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Su extends Ft{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class xx extends Ft{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new Ue(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qn,this.normalScale=new be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this.fog=e.fog,this}}class gx extends Gl{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}const Cs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Eu{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,d){return c.push(u,d),this},this.removeHandler=function(u){const d=c.indexOf(u);return d!==-1&&c.splice(d,2),this},this.getHandler=function(u){for(let d=0,h=c.length;d<h;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Cu=new Eu;class Za{constructor(e){this.manager=e!==void 0?e:Cu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Za.DEFAULT_MATERIAL_NAME="__DEFAULT";const xi=new WeakMap;class Tu extends Za{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Cs.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let d=xi.get(a);d===void 0&&(d=[],xi.set(a,d)),d.push({onLoad:t,onError:r})}return a}const o=Ki("img");function l(){u(),t&&t(this);const d=xi.get(this)||[];for(let h=0;h<d.length;h++){const p=d[h];p.onLoad&&p.onLoad(this)}xi.delete(this),s.manager.itemEnd(e)}function c(d){u(),r&&r(d),Cs.remove(`image:${e}`);const h=xi.get(this)||[];for(let p=0;p<h.length;p++){const g=h[p];g.onError&&g.onError(d)}xi.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Cs.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class vx extends Za{constructor(e){super(e)}load(e,t,n,r){const s=new Et,a=new Tu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class ti extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ue(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class _x extends ti{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ue(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Ts=new it,Oo=new I,Vo=new I;class Ja{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new be(512,512),this.mapType=ln,this.map=null,this.mapPass=null,this.matrix=new it,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wr,this._frameExtents=new be(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Oo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Oo),Vo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vo),t.updateMatrixWorld(),Ts.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ts,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ts)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Nu extends Ja{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,n=Ni*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height*this.aspect,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class bx extends ti{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Nu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Bo=new it,Oi=new I,Ns=new I;class Au extends Ja{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new be(4,2),this._viewportCount=6,this._viewports=[new nt(2,1,1,1),new nt(0,1,1,1),new nt(3,1,1,1),new nt(1,1,1,1),new nt(3,0,1,1),new nt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Oi.setFromMatrixPosition(e.matrixWorld),n.position.copy(Oi),Ns.copy(n.position),Ns.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ns),n.updateMatrixWorld(),r.makeTranslation(-Oi.x,-Oi.y,-Oi.z),Bo.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bo,n.coordinateSystem,n.reversedDepth)}}class yx extends ti{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Au}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class $l extends Vl{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class wu extends Ja{constructor(){super(new $l(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mx extends ti{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new wu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Sx extends ti{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ex extends ti{constructor(e,t,n=10,r=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Du{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new I)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,r=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*r),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*r)),t.addScaledVector(a[5],1.092548*(r*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(n*s)),t.addScaledVector(a[8],.546274*(n*n-r*r)),t}getIrradianceAt(e,t){const n=e.x,r=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*r),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*r),t.addScaledVector(a[5],2*.429043*r*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*n*s),t.addScaledVector(a[8],.429043*(n*n-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const n=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-r*r)}}class Cx extends ti{constructor(e=new Du,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class Ru extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Tx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Nx extends eu{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}const zo=new it;class Ax{constructor(e,t,n=0,r=1/0){this.ray=new ja(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new Xa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):pt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zo.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zo),this}intersectObject(e,t=!0,n=[]){return Ca(e,this,n,t),n.sort(ko),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)Ca(e[r],this,n,t);return n.sort(ko),n}}function ko(i,e){return i.distance-e.distance}function Ca(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)Ca(s[a],e,t,!0)}}class wx{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=ke(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(ke(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Kl{constructor(e,t,n,r){Kl.prototype.isMatrix2=!0,this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}}class Dx extends ei{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){Ie("Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Go(i,e,t,n){const r=Pu(n);switch(t){case Al:return i*e;case Dl:return i*e/r.components*r.byteLength;case Ba:return i*e/r.components*r.byteLength;case za:return i*e*2/r.components*r.byteLength;case ka:return i*e*2/r.components*r.byteLength;case wl:return i*e*3/r.components*r.byteLength;case tn:return i*e*4/r.components*r.byteLength;case Ga:return i*e*4/r.components*r.byteLength;case Rr:case Pr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Lr:case Ir:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zs:case Qs:return Math.max(i,16)*Math.max(e,8)/4;case Ks:case Js:return Math.max(i,8)*Math.max(e,8)/2;case ea:case ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ra:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case sa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case aa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case oa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case la:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ca:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case da:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ua:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ha:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case fa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case pa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ma:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case xa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case ga:case va:case _a:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ba:case ya:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ma:case Sa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Pu(i){switch(i){case ln:case El:return{byteLength:1,components:1};case Xi:case Cl:case wi:return{byteLength:2,components:1};case Oa:case Va:return{byteLength:2,components:4};case Zn:case Fa:case _n:return{byteLength:4,components:1};case Tl:case Nl:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ua}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ua);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Zl(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Lu(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,d=c.byteLength,h=i.createBuffer();i.bindBuffer(l,h),i.bufferData(l,c,u),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const u=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,u);else{d.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<d.length;p++){const g=d[h],_=d[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let p=0,g=d.length;p<g;p++){const _=d[p];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var Iu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uu=`#ifdef USE_ALPHAHASH
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
#endif`,Fu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ou=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zu=`#ifdef USE_AOMAP
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
#endif`,ku=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Gu=`#ifdef USE_BATCHING
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
#endif`,Hu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ju=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xu=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qu=`#ifdef USE_IRIDESCENCE
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
#endif`,Yu=`#ifdef USE_BUMPMAP
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
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ju=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,th=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nh=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ih=`#define PI 3.141592653589793
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
} // validated`,rh=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sh=`vec3 transformedNormal = objectNormal;
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
#endif`,ah=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,oh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ch=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dh="gl_FragColor = linearToOutputTexel( gl_FragColor );",uh=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hh=`#ifdef USE_ENVMAP
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
#endif`,fh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ph=`#ifdef USE_ENVMAP
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
#endif`,mh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xh=`#ifdef USE_ENVMAP
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
#endif`,gh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_h=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bh=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yh=`#ifdef USE_GRADIENTMAP
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
}`,Mh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Eh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ch=`uniform bool receiveShadow;
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
#endif`,Th=`#ifdef USE_ENVMAP
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
#endif`,Nh=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ah=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wh=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Dh=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rh=`PhysicalMaterial material;
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
#endif`,Ph=`uniform sampler2D dfgLUT;
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
}`,Lh=`
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
#endif`,Ih=`#if defined( RE_IndirectDiffuse )
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
#endif`,Uh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Oh=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bh=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gh=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Hh=`#if defined( USE_POINTS_UV )
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
#endif`,Wh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jh=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xh=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qh=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$h=`#ifdef USE_MORPHTARGETS
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
#endif`,Kh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jh=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Qh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ef=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nf=`#ifdef USE_NORMALMAP
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
#endif`,rf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,af=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,of=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,lf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,df=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ff=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,pf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,mf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_f=`float getShadowMask() {
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
}`,bf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yf=`#ifdef USE_SKINNING
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
#endif`,Mf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sf=`#ifdef USE_SKINNING
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
#endif`,Ef=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Cf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Af=`#ifdef USE_TRANSMISSION
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
#endif`,wf=`#ifdef USE_TRANSMISSION
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
#endif`,Df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const If=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Uf=`uniform sampler2D t2D;
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
}`,Ff=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Of=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zf=`#include <common>
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
}`,kf=`#if DEPTH_PACKING == 3200
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
}`,Gf=`#define DISTANCE
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
}`,Hf=`#define DISTANCE
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
}`,Wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xf=`uniform float scale;
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
}`,qf=`uniform vec3 diffuse;
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
}`,Yf=`#include <common>
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
}`,$f=`uniform vec3 diffuse;
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
}`,Kf=`#define LAMBERT
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
}`,Zf=`#define LAMBERT
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
}`,Jf=`#define MATCAP
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
}`,Qf=`#define MATCAP
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
}`,ep=`#define NORMAL
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
}`,tp=`#define NORMAL
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
}`,np=`#define PHONG
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
}`,ip=`#define PHONG
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
}`,rp=`#define STANDARD
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
}`,sp=`#define STANDARD
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
}`,ap=`#define TOON
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
}`,op=`#define TOON
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
}`,lp=`uniform float size;
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
}`,cp=`uniform vec3 diffuse;
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
}`,dp=`#include <common>
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
}`,up=`uniform vec3 color;
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
}`,hp=`uniform float rotation;
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
}`,fp=`uniform vec3 diffuse;
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
}`,We={alphahash_fragment:Iu,alphahash_pars_fragment:Uu,alphamap_fragment:Fu,alphamap_pars_fragment:Ou,alphatest_fragment:Vu,alphatest_pars_fragment:Bu,aomap_fragment:zu,aomap_pars_fragment:ku,batching_pars_vertex:Gu,batching_vertex:Hu,begin_vertex:Wu,beginnormal_vertex:ju,bsdfs:Xu,iridescence_fragment:qu,bumpmap_pars_fragment:Yu,clipping_planes_fragment:$u,clipping_planes_pars_fragment:Ku,clipping_planes_pars_vertex:Zu,clipping_planes_vertex:Ju,color_fragment:Qu,color_pars_fragment:eh,color_pars_vertex:th,color_vertex:nh,common:ih,cube_uv_reflection_fragment:rh,defaultnormal_vertex:sh,displacementmap_pars_vertex:ah,displacementmap_vertex:oh,emissivemap_fragment:lh,emissivemap_pars_fragment:ch,colorspace_fragment:dh,colorspace_pars_fragment:uh,envmap_fragment:hh,envmap_common_pars_fragment:fh,envmap_pars_fragment:ph,envmap_pars_vertex:mh,envmap_physical_pars_fragment:Th,envmap_vertex:xh,fog_vertex:gh,fog_pars_vertex:vh,fog_fragment:_h,fog_pars_fragment:bh,gradientmap_pars_fragment:yh,lightmap_pars_fragment:Mh,lights_lambert_fragment:Sh,lights_lambert_pars_fragment:Eh,lights_pars_begin:Ch,lights_toon_fragment:Nh,lights_toon_pars_fragment:Ah,lights_phong_fragment:wh,lights_phong_pars_fragment:Dh,lights_physical_fragment:Rh,lights_physical_pars_fragment:Ph,lights_fragment_begin:Lh,lights_fragment_maps:Ih,lights_fragment_end:Uh,logdepthbuf_fragment:Fh,logdepthbuf_pars_fragment:Oh,logdepthbuf_pars_vertex:Vh,logdepthbuf_vertex:Bh,map_fragment:zh,map_pars_fragment:kh,map_particle_fragment:Gh,map_particle_pars_fragment:Hh,metalnessmap_fragment:Wh,metalnessmap_pars_fragment:jh,morphinstance_vertex:Xh,morphcolor_vertex:qh,morphnormal_vertex:Yh,morphtarget_pars_vertex:$h,morphtarget_vertex:Kh,normal_fragment_begin:Zh,normal_fragment_maps:Jh,normal_pars_fragment:Qh,normal_pars_vertex:ef,normal_vertex:tf,normalmap_pars_fragment:nf,clearcoat_normal_fragment_begin:rf,clearcoat_normal_fragment_maps:sf,clearcoat_pars_fragment:af,iridescence_pars_fragment:of,opaque_fragment:lf,packing:cf,premultiplied_alpha_fragment:df,project_vertex:uf,dithering_fragment:hf,dithering_pars_fragment:ff,roughnessmap_fragment:pf,roughnessmap_pars_fragment:mf,shadowmap_pars_fragment:xf,shadowmap_pars_vertex:gf,shadowmap_vertex:vf,shadowmask_pars_fragment:_f,skinbase_vertex:bf,skinning_pars_vertex:yf,skinning_vertex:Mf,skinnormal_vertex:Sf,specularmap_fragment:Ef,specularmap_pars_fragment:Cf,tonemapping_fragment:Tf,tonemapping_pars_fragment:Nf,transmission_fragment:Af,transmission_pars_fragment:wf,uv_pars_fragment:Df,uv_pars_vertex:Rf,uv_vertex:Pf,worldpos_vertex:Lf,background_vert:If,background_frag:Uf,backgroundCube_vert:Ff,backgroundCube_frag:Of,cube_vert:Vf,cube_frag:Bf,depth_vert:zf,depth_frag:kf,distanceRGBA_vert:Gf,distanceRGBA_frag:Hf,equirect_vert:Wf,equirect_frag:jf,linedashed_vert:Xf,linedashed_frag:qf,meshbasic_vert:Yf,meshbasic_frag:$f,meshlambert_vert:Kf,meshlambert_frag:Zf,meshmatcap_vert:Jf,meshmatcap_frag:Qf,meshnormal_vert:ep,meshnormal_frag:tp,meshphong_vert:np,meshphong_frag:ip,meshphysical_vert:rp,meshphysical_frag:sp,meshtoon_vert:ap,meshtoon_frag:op,points_vert:lp,points_frag:cp,shadow_vert:dp,shadow_frag:up,sprite_vert:hp,sprite_frag:fp},le={common:{diffuse:{value:new Ue(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ue(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ue(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Ue(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},on={basic:{uniforms:Dt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:Dt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ue(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:Dt([le.common,le.specularmap,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.fog,le.lights,{emissive:{value:new Ue(0)},specular:{value:new Ue(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:Dt([le.common,le.envmap,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.roughnessmap,le.metalnessmap,le.fog,le.lights,{emissive:{value:new Ue(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:Dt([le.common,le.aomap,le.lightmap,le.emissivemap,le.bumpmap,le.normalmap,le.displacementmap,le.gradientmap,le.fog,le.lights,{emissive:{value:new Ue(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:Dt([le.common,le.bumpmap,le.normalmap,le.displacementmap,le.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:Dt([le.points,le.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:Dt([le.common,le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:Dt([le.common,le.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:Dt([le.common,le.bumpmap,le.normalmap,le.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:Dt([le.sprite,le.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distanceRGBA:{uniforms:Dt([le.common,le.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distanceRGBA_vert,fragmentShader:We.distanceRGBA_frag},shadow:{uniforms:Dt([le.lights,le.fog,{color:{value:new Ue(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};on.physical={uniforms:Dt([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Ue(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Ue(0)},specularColor:{value:new Ue(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Nr={r:0,b:0,g:0},jn=new Yt,pp=new it;function mp(i,e,t,n,r,s,a){const o=new Ue(0);let l=s===!0?0:1,c,u,d=null,h=0,p=null;function g(S){let N=S.isScene===!0?S.background:null;return N&&N.isTexture&&(N=(S.backgroundBlurriness>0?t:e).get(N)),N}function _(S){let N=!1;const P=g(S);P===null?f(o,l):P&&P.isColor&&(f(P,1),N=!0);const E=i.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||N)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,N){const P=g(N);P&&(P.isCubeTexture||P.mapping===Gr)?(u===void 0&&(u=new En(new tr(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Ai(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,D,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),jn.copy(N.backgroundRotation),jn.x*=-1,jn.y*=-1,jn.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(jn.y*=-1,jn.z*=-1),u.material.uniforms.envMap.value=P,u.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=N.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(pp.makeRotationFromEuler(jn)),u.material.toneMapped=Je.getTransfer(P.colorSpace)!==tt,(d!==P||h!==P.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,d=P,h=P.version,p=i.toneMapping),u.layers.enableAll(),S.unshift(u,u.geometry,u.material,0,0,null)):P&&P.isTexture&&(c===void 0&&(c=new En(new jr(2,2),new Cn({name:"BackgroundMaterial",uniforms:Ai(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=P,c.material.uniforms.backgroundIntensity.value=N.backgroundIntensity,c.material.toneMapped=Je.getTransfer(P.colorSpace)!==tt,P.matrixAutoUpdate===!0&&P.updateMatrix(),c.material.uniforms.uvTransform.value.copy(P.matrix),(d!==P||h!==P.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=P,h=P.version,p=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null))}function f(S,N){S.getRGB(Nr,Ol(i)),n.buffers.color.setClear(Nr.r,Nr.g,Nr.b,N,a)}function T(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(S,N=1){o.set(S),l=N,f(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(S){l=S,f(o,l)},render:_,addToRenderList:m,dispose:T}}function xp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=h(null);let s=r,a=!1;function o(y,L,B,H,A){let k=!1;const V=d(H,B,L);s!==V&&(s=V,c(s.object)),k=p(y,H,B,A),k&&g(y,H,B,A),A!==null&&e.update(A,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,N(y,L,B,H),A!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(A).buffer))}function l(){return i.createVertexArray()}function c(y){return i.bindVertexArray(y)}function u(y){return i.deleteVertexArray(y)}function d(y,L,B){const H=B.wireframe===!0;let A=n[y.id];A===void 0&&(A={},n[y.id]=A);let k=A[L.id];k===void 0&&(k={},A[L.id]=k);let V=k[H];return V===void 0&&(V=h(l()),k[H]=V),V}function h(y){const L=[],B=[],H=[];for(let A=0;A<t;A++)L[A]=0,B[A]=0,H[A]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:B,attributeDivisors:H,object:y,attributes:{},index:null}}function p(y,L,B,H){const A=s.attributes,k=L.attributes;let V=0;const Q=B.getAttributes();for(const j in Q)if(Q[j].location>=0){const ne=A[j];let ie=k[j];if(ie===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(ie=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(ie=y.instanceColor)),ne===void 0||ne.attribute!==ie||ie&&ne.data!==ie.data)return!0;V++}return s.attributesNum!==V||s.index!==H}function g(y,L,B,H){const A={},k=L.attributes;let V=0;const Q=B.getAttributes();for(const j in Q)if(Q[j].location>=0){let ne=k[j];ne===void 0&&(j==="instanceMatrix"&&y.instanceMatrix&&(ne=y.instanceMatrix),j==="instanceColor"&&y.instanceColor&&(ne=y.instanceColor));const ie={};ie.attribute=ne,ne&&ne.data&&(ie.data=ne.data),A[j]=ie,V++}s.attributes=A,s.attributesNum=V,s.index=H}function _(){const y=s.newAttributes;for(let L=0,B=y.length;L<B;L++)y[L]=0}function m(y){f(y,0)}function f(y,L){const B=s.newAttributes,H=s.enabledAttributes,A=s.attributeDivisors;B[y]=1,H[y]===0&&(i.enableVertexAttribArray(y),H[y]=1),A[y]!==L&&(i.vertexAttribDivisor(y,L),A[y]=L)}function T(){const y=s.newAttributes,L=s.enabledAttributes;for(let B=0,H=L.length;B<H;B++)L[B]!==y[B]&&(i.disableVertexAttribArray(B),L[B]=0)}function S(y,L,B,H,A,k,V){V===!0?i.vertexAttribIPointer(y,L,B,A,k):i.vertexAttribPointer(y,L,B,H,A,k)}function N(y,L,B,H){_();const A=H.attributes,k=B.getAttributes(),V=L.defaultAttributeValues;for(const Q in k){const j=k[Q];if(j.location>=0){let K=A[Q];if(K===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(K=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(K=y.instanceColor)),K!==void 0){const ne=K.normalized,ie=K.itemSize,qe=e.get(K);if(qe===void 0)continue;const De=qe.buffer,Ye=qe.type,Oe=qe.bytesPerElement,q=Ye===i.INT||Ye===i.UNSIGNED_INT||K.gpuType===Fa;if(K.isInterleavedBufferAttribute){const Y=K.data,ce=Y.stride,Ee=K.offset;if(Y.isInstancedInterleavedBuffer){for(let ve=0;ve<j.locationSize;ve++)f(j.location+ve,Y.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let ve=0;ve<j.locationSize;ve++)m(j.location+ve);i.bindBuffer(i.ARRAY_BUFFER,De);for(let ve=0;ve<j.locationSize;ve++)S(j.location+ve,ie/j.locationSize,Ye,ne,ce*Oe,(Ee+ie/j.locationSize*ve)*Oe,q)}else{if(K.isInstancedBufferAttribute){for(let Y=0;Y<j.locationSize;Y++)f(j.location+Y,K.meshPerAttribute);y.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Y=0;Y<j.locationSize;Y++)m(j.location+Y);i.bindBuffer(i.ARRAY_BUFFER,De);for(let Y=0;Y<j.locationSize;Y++)S(j.location+Y,ie/j.locationSize,Ye,ne,ie*Oe,ie/j.locationSize*Y*Oe,q)}}else if(V!==void 0){const ne=V[Q];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(j.location,ne);break;case 3:i.vertexAttrib3fv(j.location,ne);break;case 4:i.vertexAttrib4fv(j.location,ne);break;default:i.vertexAttrib1fv(j.location,ne)}}}}T()}function P(){F();for(const y in n){const L=n[y];for(const B in L){const H=L[B];for(const A in H)u(H[A].object),delete H[A];delete L[B]}delete n[y]}}function E(y){if(n[y.id]===void 0)return;const L=n[y.id];for(const B in L){const H=L[B];for(const A in H)u(H[A].object),delete H[A];delete L[B]}delete n[y.id]}function D(y){for(const L in n){const B=n[L];if(B[y.id]===void 0)continue;const H=B[y.id];for(const A in H)u(H[A].object),delete H[A];delete B[y.id]}}function F(){M(),a=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:F,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:E,releaseStatesOfProgram:D,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function gp(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,d){d!==0&&(i.drawArraysInstanced(n,c,u,d),t.update(u,n,d))}function o(c,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,d);let p=0;for(let g=0;g<d;g++)p+=u[g];t.update(p,n,1)}function l(c,u,d,h){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,h,0,d);let g=0;for(let _=0;_<d;_++)g+=u[_]*h[_];t.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function vp(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const D=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(D){return!(D!==tn&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(D){const F=D===wi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(D!==ln&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==_n&&!F)}function l(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(Ie("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),N=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:T,maxVaryings:S,maxFragmentUniforms:N,vertexTextures:P,maxSamples:E}}function _p(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new qn,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||n!==0||r;return r=h,n=d.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=u(d,h,0)},this.setState=function(d,h,p){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,f=i.get(d);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const T=s?0:n,S=T*4;let N=f.clippingState||null;l.value=N,N=u(g,h,S,p);for(let P=0;P!==S;++P)N[P]=t[P];f.clippingState=N,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(d,h,p,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,T=h.matrixWorldInverse;o.getNormalMatrix(T),(m===null||m.length<f)&&(m=new Float32Array(f));for(let S=0,N=p;S!==_;++S,N+=4)a.copy(d[S]).applyMatrix4(T,o),a.normal.toArray(m,N),m[N+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function bp(i){let e=new WeakMap;function t(a,o){return o===Xs?a.mapping=Ei:o===qs&&(a.mapping=Ci),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Xs||o===qs)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Jd(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const In=4,Ho=[.125,.215,.35,.446,.526,.582],$n=20,yp=256,Vi=new $l,Wo=new Ue;let As=null,ws=0,Ds=0,Rs=!1;const Mp=new I;class jo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Mp}=s;As=this._renderer.getRenderTarget(),ws=this._renderer.getActiveCubeFace(),Ds=this._renderer.getActiveMipmapLevel(),Rs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,r,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qo(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(As,ws,Ds),this._renderer.xr.enabled=Rs,e.scissorTest=!1,gi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ei||e.mapping===Ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),As=this._renderer.getRenderTarget(),ws=this._renderer.getActiveCubeFace(),Ds=this._renderer.getActiveMipmapLevel(),Rs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:qt,minFilter:qt,generateMipmaps:!1,type:wi,format:tn,colorSpace:Ti,depthBuffer:!1},r=Xo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xo(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Sp(s)),this._blurMaterial=Cp(s,e,t),this._ggxMaterial=Ep(s,e,t)}return r}_compileMaterial(e){const t=new En(new $t,e);this._renderer.compile(t,Vi)}_sceneToCubeUV(e,t,n,r,s){const l=new Gt(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,p=d.toneMapping;d.getClearColor(Wo),d.toneMapping=Un,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(r),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new En(new tr,new qa({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let f=!1;const T=e.background;T?T.isColor&&(m.color.copy(T),e.background=null,f=!0):(m.color.copy(Wo),f=!0);for(let S=0;S<6;S++){const N=S%3;N===0?(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[S],s.y,s.z)):N===1?(l.up.set(0,0,c[S]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[S],s.z)):(l.up.set(0,c[S],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[S]));const P=this._cubeSize;gi(r,N*P,S>2?P:0,P,P),d.setRenderTarget(r),f&&d.render(_,l),d.render(e,l)}d.toneMapping=p,d.autoClear=h,e.background=T}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ei||e.mapping===Ci;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qo());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;gi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Vi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-u*u),h=.05+c*.95,p=d*h,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-In?n-g+In:0),f=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-t,gi(s,m,f,3*_,2*_),r.setRenderTarget(s),r.render(o,Vi),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,gi(e,m,f,3*_,2*_),r.setRenderTarget(e),r.render(o,Vi)}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&pt("blur direction must be either latitudinal or longitudinal!");const u=3,d=this._lodMeshes[r];d.material=c;const h=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*$n-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):$n;m>$n&&Ie(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${$n}`);const f=[];let T=0;for(let D=0;D<$n;++D){const F=D/_,M=Math.exp(-F*F/2);f.push(M),D===0?T+=M:D<m&&(T+=2*M)}for(let D=0;D<f.length;D++)f[D]=f[D]/T;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:S}=this;h.dTheta.value=g,h.mipInt.value=S-n;const N=this._sizeLods[r],P=3*N*(r>S-In?r-S+In:0),E=4*(this._cubeSize-N);gi(t,P,E,3*N,2*N),l.setRenderTarget(t),l.render(d,Vi)}}function Sp(i){const e=[],t=[],n=[];let r=i;const s=i-In+1+Ho.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-In?l=Ho[a-i+In-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,d=1+c,h=[u,u,d,u,d,d,u,u,d,d,u,d],p=6,g=6,_=3,m=2,f=1,T=new Float32Array(_*g*p),S=new Float32Array(m*g*p),N=new Float32Array(f*g*p);for(let E=0;E<p;E++){const D=E%3*2/3-1,F=E>2?0:-1,M=[D,F,0,D+2/3,F,0,D+2/3,F+1,0,D,F,0,D+2/3,F+1,0,D,F+1,0];T.set(M,_*g*E),S.set(h,m*g*E);const y=[E,E,E,E,E,E];N.set(y,f*g*E)}const P=new $t;P.setAttribute("position",new Ht(T,_)),P.setAttribute("uv",new Ht(S,m)),P.setAttribute("faceIndex",new Ht(N,f)),n.push(new En(P,null)),r>In&&r--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Xo(i,e,t){const n=new Jn(i,e,t);return n.texture.mapping=Gr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gi(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Ep(i,e,t){return new Cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:yp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Xr(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Cp(i,e,t){const n=new Float32Array($n),r=new I(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:$n,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xr(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function qo(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xr(),fragmentShader:`

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
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Yo(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bn,depthTest:!1,depthWrite:!1})}function Xr(){return`

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
	`}function Tp(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Xs||l===qs,u=l===Ei||l===Ci;if(c||u){let d=e.get(o);const h=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==h)return t===null&&(t=new jo(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||u&&p&&r(p)?(t===null&&(t=new jo(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",s),d.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Np(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&Zi("WebGLRenderer: "+n+" extension not supported."),r}}}function Ap(i,e,t,n){const r={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const p in h)e.update(h[p],i.ARRAY_BUFFER)}function c(d){const h=[],p=d.index,g=d.attributes.position;let _=0;if(p!==null){const T=p.array;_=p.version;for(let S=0,N=T.length;S<N;S+=3){const P=T[S+0],E=T[S+1],D=T[S+2];h.push(P,E,E,D,D,P)}}else if(g!==void 0){const T=g.array;_=g.version;for(let S=0,N=T.length/3-1;S<N;S+=3){const P=S+0,E=S+1,D=S+2;h.push(P,E,E,D,D,P)}}else return;const m=new(Pl(h)?Fl:Ul)(h,1);m.version=_;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function u(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&c(d)}else c(d);return s.get(d)}return{get:o,update:l,getWireframeAttribute:u}}function wp(i,e,t){let n;function r(h){n=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,p){i.drawElements(n,p,s,h*a),t.update(p,n,1)}function c(h,p,g){g!==0&&(i.drawElementsInstanced(n,p,s,h*a,g),t.update(p,n,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,s,h,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function d(h,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<h.length;f++)c(h[f]/a,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,s,h,0,_,0,g);let f=0;for(let T=0;T<g;T++)f+=p[T]*_[T];t.update(f,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Dp(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:pt("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function Rp(i,e,t){const n=new WeakMap,r=new nt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let M=function(){D.dispose(),n.delete(o),o.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],f=o.morphAttributes.normal||[],T=o.morphAttributes.color||[];let S=0;p===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let N=o.attributes.position.count*S,P=1;N>e.maxTextureSize&&(P=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const E=new Float32Array(N*P*4*d),D=new Ll(E,N,P,d);D.type=_n,D.needsUpdate=!0;const F=S*4;for(let y=0;y<d;y++){const L=m[y],B=f[y],H=T[y],A=N*P*4*y;for(let k=0;k<L.count;k++){const V=k*F;p===!0&&(r.fromBufferAttribute(L,k),E[A+V+0]=r.x,E[A+V+1]=r.y,E[A+V+2]=r.z,E[A+V+3]=0),g===!0&&(r.fromBufferAttribute(B,k),E[A+V+4]=r.x,E[A+V+5]=r.y,E[A+V+6]=r.z,E[A+V+7]=0),_===!0&&(r.fromBufferAttribute(H,k),E[A+V+8]=r.x,E[A+V+9]=r.y,E[A+V+10]=r.z,E[A+V+11]=H.itemSize===4?r.w:1)}}h={count:d,texture:D,size:new be(N,P)},n.set(o,h),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",h.size)}return{update:s}}function Pp(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==c&&(e.update(d),r.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return d}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const Jl=new Et,$o=new Hl(1,1),Ql=new Ll,ec=new Id,tc=new Bl,Ko=[],Zo=[],Jo=new Float32Array(16),Qo=new Float32Array(9),el=new Float32Array(4);function Di(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Ko[r];if(s===void 0&&(s=new Float32Array(r),Ko[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function bt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function qr(i,e){let t=Zo[e];t===void 0&&(t=new Int32Array(e),Zo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Lp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ip(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2fv(this.addr,e),yt(t,e)}}function Up(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bt(t,e))return;i.uniform3fv(this.addr,e),yt(t,e)}}function Fp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4fv(this.addr,e),yt(t,e)}}function Op(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(bt(t,n))return;el.set(n),i.uniformMatrix2fv(this.addr,!1,el),yt(t,n)}}function Vp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(bt(t,n))return;Qo.set(n),i.uniformMatrix3fv(this.addr,!1,Qo),yt(t,n)}}function Bp(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(bt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(bt(t,n))return;Jo.set(n),i.uniformMatrix4fv(this.addr,!1,Jo),yt(t,n)}}function zp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function kp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2iv(this.addr,e),yt(t,e)}}function Gp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3iv(this.addr,e),yt(t,e)}}function Hp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4iv(this.addr,e),yt(t,e)}}function Wp(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function jp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bt(t,e))return;i.uniform2uiv(this.addr,e),yt(t,e)}}function Xp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bt(t,e))return;i.uniform3uiv(this.addr,e),yt(t,e)}}function qp(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bt(t,e))return;i.uniform4uiv(this.addr,e),yt(t,e)}}function Yp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?($o.compareFunction=Rl,s=$o):s=Jl,t.setTexture2D(e||s,r)}function $p(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||ec,r)}function Kp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||tc,r)}function Zp(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Ql,r)}function Jp(i){switch(i){case 5126:return Lp;case 35664:return Ip;case 35665:return Up;case 35666:return Fp;case 35674:return Op;case 35675:return Vp;case 35676:return Bp;case 5124:case 35670:return zp;case 35667:case 35671:return kp;case 35668:case 35672:return Gp;case 35669:case 35673:return Hp;case 5125:return Wp;case 36294:return jp;case 36295:return Xp;case 36296:return qp;case 35678:case 36198:case 36298:case 36306:case 35682:return Yp;case 35679:case 36299:case 36307:return $p;case 35680:case 36300:case 36308:case 36293:return Kp;case 36289:case 36303:case 36311:case 36292:return Zp}}function Qp(i,e){i.uniform1fv(this.addr,e)}function em(i,e){const t=Di(e,this.size,2);i.uniform2fv(this.addr,t)}function tm(i,e){const t=Di(e,this.size,3);i.uniform3fv(this.addr,t)}function nm(i,e){const t=Di(e,this.size,4);i.uniform4fv(this.addr,t)}function im(i,e){const t=Di(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function rm(i,e){const t=Di(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function sm(i,e){const t=Di(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function am(i,e){i.uniform1iv(this.addr,e)}function om(i,e){i.uniform2iv(this.addr,e)}function lm(i,e){i.uniform3iv(this.addr,e)}function cm(i,e){i.uniform4iv(this.addr,e)}function dm(i,e){i.uniform1uiv(this.addr,e)}function um(i,e){i.uniform2uiv(this.addr,e)}function hm(i,e){i.uniform3uiv(this.addr,e)}function fm(i,e){i.uniform4uiv(this.addr,e)}function pm(i,e,t){const n=this.cache,r=e.length,s=qr(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),yt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||Jl,s[a])}function mm(i,e,t){const n=this.cache,r=e.length,s=qr(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),yt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ec,s[a])}function xm(i,e,t){const n=this.cache,r=e.length,s=qr(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),yt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||tc,s[a])}function gm(i,e,t){const n=this.cache,r=e.length,s=qr(t,r);bt(n,s)||(i.uniform1iv(this.addr,s),yt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Ql,s[a])}function vm(i){switch(i){case 5126:return Qp;case 35664:return em;case 35665:return tm;case 35666:return nm;case 35674:return im;case 35675:return rm;case 35676:return sm;case 5124:case 35670:return am;case 35667:case 35671:return om;case 35668:case 35672:return lm;case 35669:case 35673:return cm;case 5125:return dm;case 36294:return um;case 36295:return hm;case 36296:return fm;case 35678:case 36198:case 36298:case 36306:case 35682:return pm;case 35679:case 36299:case 36307:return mm;case 35680:case 36300:case 36308:case 36293:return xm;case 36289:case 36303:case 36311:case 36292:return gm}}class _m{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Jp(t.type)}}class bm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vm(t.type)}}class ym{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const Ps=/(\w+)(\])?(\[|\.)?/g;function tl(i,e){i.seq.push(e),i.map[e.id]=e}function Mm(i,e,t){const n=i.name,r=n.length;for(Ps.lastIndex=0;;){const s=Ps.exec(n),a=Ps.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){tl(t,c===void 0?new _m(o,i,e):new bm(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new ym(o),tl(t,d)),t=d}}}class Ur{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Mm(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function nl(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Sm=37297;let Em=0;function Cm(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const il=new Ge;function Tm(i){Je._getMatrix(il,Je.workingColorSpace,i);const e=`mat3( ${il.elements.map(t=>t.toFixed(4))} )`;switch(Je.getTransfer(i)){case Fr:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function rl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Cm(i.getShaderSource(e),o)}else return s}function Nm(i,e){const t=Tm(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Am(i,e){let t;switch(e){case qc:t="Linear";break;case Yc:t="Reinhard";break;case $c:t="Cineon";break;case Kc:t="ACESFilmic";break;case Jc:t="AgX";break;case Qc:t="Neutral";break;case Zc:t="Custom";break;default:Ie("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ar=new I;function wm(){Je.getLuminanceCoefficients(Ar);const i=Ar.x.toFixed(4),e=Ar.y.toFixed(4),t=Ar.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Dm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ki).join(`
`)}function Rm(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Pm(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function ki(i){return i!==""}function sl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function al(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Lm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ta(i){return i.replace(Lm,Um)}const Im=new Map;function Um(i,e){let t=We[e];if(t===void 0){const n=Im.get(e);if(n!==void 0)t=We[n],Ie('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ta(t)}const Fm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ol(i){return i.replace(Fm,Om)}function Om(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ll(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vm(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ml?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Tc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mn&&(e="SHADOWMAP_TYPE_VSM"),e}function Bm(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ei:case Ci:e="ENVMAP_TYPE_CUBE";break;case Gr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zm(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ci:e="ENVMAP_MODE_REFRACTION";break}return e}function km(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case kr:e="ENVMAP_BLENDING_MULTIPLY";break;case jc:e="ENVMAP_BLENDING_MIX";break;case Xc:e="ENVMAP_BLENDING_ADD";break}return e}function Gm(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Hm(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Vm(t),c=Bm(t),u=zm(t),d=km(t),h=Gm(t),p=Dm(t),g=Rm(s),_=r.createProgram();let m,f,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ki).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ki).join(`
`),f.length>0&&(f+=`
`)):(m=[ll(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ki).join(`
`),f=[ll(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Un?"#define TONE_MAPPING":"",t.toneMapping!==Un?We.tonemapping_pars_fragment:"",t.toneMapping!==Un?Am("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,Nm("linearToOutputTexel",t.outputColorSpace),wm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ki).join(`
`)),a=Ta(a),a=sl(a,t),a=al(a,t),o=Ta(o),o=sl(o,t),o=al(o,t),a=ol(a),o=ol(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===mo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===mo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const S=T+m+a,N=T+f+o,P=nl(r,r.VERTEX_SHADER,S),E=nl(r,r.FRAGMENT_SHADER,N);r.attachShader(_,P),r.attachShader(_,E),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function D(L){if(i.debug.checkShaderErrors){const B=r.getProgramInfoLog(_)||"",H=r.getShaderInfoLog(P)||"",A=r.getShaderInfoLog(E)||"",k=B.trim(),V=H.trim(),Q=A.trim();let j=!0,K=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(j=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,P,E);else{const ne=rl(r,P,"vertex"),ie=rl(r,E,"fragment");pt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+k+`
`+ne+`
`+ie)}else k!==""?Ie("WebGLProgram: Program Info Log:",k):(V===""||Q==="")&&(K=!1);K&&(L.diagnostics={runnable:j,programLog:k,vertexShader:{log:V,prefix:m},fragmentShader:{log:Q,prefix:f}})}r.deleteShader(P),r.deleteShader(E),F=new Ur(r,_),M=Pm(r,_)}let F;this.getUniforms=function(){return F===void 0&&D(this),F};let M;this.getAttributes=function(){return M===void 0&&D(this),M};let y=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(_,Sm)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Em++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=E,this}let Wm=0;class jm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Xm(e),t.set(e,n)),n}}class Xm{constructor(e){this.id=Wm++,this.code=e,this.usedTimes=0}}function qm(i,e,t,n,r,s,a){const o=new Xa,l=new jm,c=new Set,u=[],d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,y,L,B,H){const A=B.fog,k=H.geometry,V=M.isMeshStandardMaterial?B.environment:null,Q=(M.isMeshStandardMaterial?t:e).get(M.envMap||V),j=Q&&Q.mapping===Gr?Q.image.height:null,K=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&Ie("WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const ne=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ie=ne!==void 0?ne.length:0;let qe=0;k.morphAttributes.position!==void 0&&(qe=1),k.morphAttributes.normal!==void 0&&(qe=2),k.morphAttributes.color!==void 0&&(qe=3);let De,Ye,Oe,q;if(K){const Qe=on[K];De=Qe.vertexShader,Ye=Qe.fragmentShader}else De=M.vertexShader,Ye=M.fragmentShader,l.update(M),Oe=l.getVertexShaderID(M),q=l.getFragmentShaderID(M);const Y=i.getRenderTarget(),ce=i.state.buffers.depth.getReversed(),Ee=H.isInstancedMesh===!0,ve=H.isBatchedMesh===!0,je=!!M.map,vt=!!M.matcap,Xe=!!Q,rt=!!M.aoMap,w=!!M.lightMap,He=!!M.bumpMap,$e=!!M.normalMap,at=!!M.displacementMap,_e=!!M.emissiveMap,ct=!!M.metalnessMap,Ce=!!M.roughnessMap,Be=M.anisotropy>0,C=M.clearcoat>0,v=M.dispersion>0,z=M.iridescence>0,$=M.sheen>0,J=M.transmission>0,X=Be&&!!M.anisotropyMap,Me=C&&!!M.clearcoatMap,de=C&&!!M.clearcoatNormalMap,Te=C&&!!M.clearcoatRoughnessMap,ye=z&&!!M.iridescenceMap,ee=z&&!!M.iridescenceThicknessMap,se=$&&!!M.sheenColorMap,Pe=$&&!!M.sheenRoughnessMap,we=!!M.specularMap,fe=!!M.specularColorMap,Fe=!!M.specularIntensityMap,R=J&&!!M.transmissionMap,ue=J&&!!M.thicknessMap,ae=!!M.gradientMap,oe=!!M.alphaMap,te=M.alphaTest>0,Z=!!M.alphaHash,xe=!!M.extensions;let Ve=Un;M.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ve=i.toneMapping);const lt={shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:De,fragmentShader:Ye,defines:M.defines,customVertexShaderID:Oe,customFragmentShaderID:q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:ve,batchingColor:ve&&H._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&H.instanceColor!==null,instancingMorph:Ee&&H.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:Y===null?i.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Ti,alphaToCoverage:!!M.alphaToCoverage,map:je,matcap:vt,envMap:Xe,envMapMode:Xe&&Q.mapping,envMapCubeUVHeight:j,aoMap:rt,lightMap:w,bumpMap:He,normalMap:$e,displacementMap:h&&at,emissiveMap:_e,normalMapObjectSpace:$e&&M.normalMapType===id,normalMapTangentSpace:$e&&M.normalMapType===Qn,metalnessMap:ct,roughnessMap:Ce,anisotropy:Be,anisotropyMap:X,clearcoat:C,clearcoatMap:Me,clearcoatNormalMap:de,clearcoatRoughnessMap:Te,dispersion:v,iridescence:z,iridescenceMap:ye,iridescenceThicknessMap:ee,sheen:$,sheenColorMap:se,sheenRoughnessMap:Pe,specularMap:we,specularColorMap:fe,specularIntensityMap:Fe,transmission:J,transmissionMap:R,thicknessMap:ue,gradientMap:ae,opaque:M.transparent===!1&&M.blending===yi&&M.alphaToCoverage===!1,alphaMap:oe,alphaTest:te,alphaHash:Z,combine:M.combine,mapUv:je&&_(M.map.channel),aoMapUv:rt&&_(M.aoMap.channel),lightMapUv:w&&_(M.lightMap.channel),bumpMapUv:He&&_(M.bumpMap.channel),normalMapUv:$e&&_(M.normalMap.channel),displacementMapUv:at&&_(M.displacementMap.channel),emissiveMapUv:_e&&_(M.emissiveMap.channel),metalnessMapUv:ct&&_(M.metalnessMap.channel),roughnessMapUv:Ce&&_(M.roughnessMap.channel),anisotropyMapUv:X&&_(M.anisotropyMap.channel),clearcoatMapUv:Me&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:de&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ee&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:se&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&_(M.sheenRoughnessMap.channel),specularMapUv:we&&_(M.specularMap.channel),specularColorMapUv:fe&&_(M.specularColorMap.channel),specularIntensityMapUv:Fe&&_(M.specularIntensityMap.channel),transmissionMapUv:R&&_(M.transmissionMap.channel),thicknessMapUv:ue&&_(M.thicknessMap.channel),alphaMapUv:oe&&_(M.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&($e||Be),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!k.attributes.uv&&(je||oe),fog:!!A,useFog:M.fog===!0,fogExp2:!!A&&A.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ce,skinning:H.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:qe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&L.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ve,decodeVideoTexture:je&&M.map.isVideoTexture===!0&&Je.getTransfer(M.map.colorSpace)===tt,decodeVideoTextureEmissive:_e&&M.emissiveMap.isVideoTexture===!0&&Je.getTransfer(M.emissiveMap.colorSpace)===tt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===xn,flipSided:M.side===Ut,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:xe&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&M.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return lt.vertexUv1s=c.has(1),lt.vertexUv2s=c.has(2),lt.vertexUv3s=c.has(3),c.clear(),lt}function f(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)y.push(L),y.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(T(y,M),S(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function T(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function S(M,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),y.gradientMap&&o.enable(22),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reversedDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.decodeVideoTextureEmissive&&o.enable(20),y.alphaToCoverage&&o.enable(21),M.push(o.mask)}function N(M){const y=g[M.type];let L;if(y){const B=on[y];L=Yd.clone(B.uniforms)}else L=M.uniforms;return L}function P(M,y){let L;for(let B=0,H=u.length;B<H;B++){const A=u[B];if(A.cacheKey===y){L=A,++L.usedTimes;break}}return L===void 0&&(L=new Hm(i,y,M,s),u.push(L)),L}function E(M){if(--M.usedTimes===0){const y=u.indexOf(M);u[y]=u[u.length-1],u.pop(),M.destroy()}}function D(M){l.remove(M)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:N,acquireProgram:P,releaseProgram:E,releaseShaderCache:D,programs:u,dispose:F}}function Ym(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function $m(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function cl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function dl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d,h,p,g,_,m){let f=i[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:g,renderOrder:d.renderOrder,z:_,group:m},i[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=g,f.renderOrder=d.renderOrder,f.z=_,f.group=m),e++,f}function o(d,h,p,g,_,m){const f=a(d,h,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(d,h,p,g,_,m){const f=a(d,h,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function c(d,h){t.length>1&&t.sort(d||$m),n.length>1&&n.sort(h||cl),r.length>1&&r.sort(h||cl)}function u(){for(let d=e,h=i.length;d<h;d++){const p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Km(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new dl,i.set(n,[a])):r>=s.length?(a=new dl,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Zm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Ue};break;case"SpotLight":t={position:new I,direction:new I,color:new Ue,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Ue,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Ue,groundColor:new Ue};break;case"RectAreaLight":t={color:new Ue,position:new I,halfWidth:new I,halfHeight:new I};break}return i[e.id]=t,t}}}function Jm(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Qm=0;function e0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function t0(i){const e=new Zm,t=Jm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);const r=new I,s=new it,a=new it;function o(c){let u=0,d=0,h=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,T=0,S=0,N=0,P=0,E=0,D=0;c.sort(e0);for(let M=0,y=c.length;M<y;M++){const L=c[M],B=L.color,H=L.intensity,A=L.distance,k=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)u+=B.r*H,d+=B.g*H,h+=B.b*H;else if(L.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(L.sh.coefficients[V],H);D++}else if(L.isDirectionalLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const Q=L.shadow,j=t.get(L);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.directionalShadow[p]=j,n.directionalShadowMap[p]=k,n.directionalShadowMatrix[p]=L.shadow.matrix,T++}n.directional[p]=V,p++}else if(L.isSpotLight){const V=e.get(L);V.position.setFromMatrixPosition(L.matrixWorld),V.color.copy(B).multiplyScalar(H),V.distance=A,V.coneCos=Math.cos(L.angle),V.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),V.decay=L.decay,n.spot[_]=V;const Q=L.shadow;if(L.map&&(n.spotLightMap[P]=L.map,P++,Q.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[_]=Q.matrix,L.castShadow){const j=t.get(L);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,n.spotShadow[_]=j,n.spotShadowMap[_]=k,N++}_++}else if(L.isRectAreaLight){const V=e.get(L);V.color.copy(B).multiplyScalar(H),V.halfWidth.set(L.width*.5,0,0),V.halfHeight.set(0,L.height*.5,0),n.rectArea[m]=V,m++}else if(L.isPointLight){const V=e.get(L);if(V.color.copy(L.color).multiplyScalar(L.intensity),V.distance=L.distance,V.decay=L.decay,L.castShadow){const Q=L.shadow,j=t.get(L);j.shadowIntensity=Q.intensity,j.shadowBias=Q.bias,j.shadowNormalBias=Q.normalBias,j.shadowRadius=Q.radius,j.shadowMapSize=Q.mapSize,j.shadowCameraNear=Q.camera.near,j.shadowCameraFar=Q.camera.far,n.pointShadow[g]=j,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=L.shadow.matrix,S++}n.point[g]=V,g++}else if(L.isHemisphereLight){const V=e.get(L);V.skyColor.copy(L.color).multiplyScalar(H),V.groundColor.copy(L.groundColor).multiplyScalar(H),n.hemi[f]=V,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=le.LTC_FLOAT_1,n.rectAreaLTC2=le.LTC_FLOAT_2):(n.rectAreaLTC1=le.LTC_HALF_1,n.rectAreaLTC2=le.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;const F=n.hash;(F.directionalLength!==p||F.pointLength!==g||F.spotLength!==_||F.rectAreaLength!==m||F.hemiLength!==f||F.numDirectionalShadows!==T||F.numPointShadows!==S||F.numSpotShadows!==N||F.numSpotMaps!==P||F.numLightProbes!==D)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=N,n.spotShadowMap.length=N,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=N+P-E,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=D,F.directionalLength=p,F.pointLength=g,F.spotLength=_,F.rectAreaLength=m,F.hemiLength=f,F.numDirectionalShadows=T,F.numPointShadows=S,F.numSpotShadows=N,F.numSpotMaps=P,F.numLightProbes=D,n.version=Qm++)}function l(c,u){let d=0,h=0,p=0,g=0,_=0;const m=u.matrixWorldInverse;for(let f=0,T=c.length;f<T;f++){const S=c[f];if(S.isDirectionalLight){const N=n.directional[d];N.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(m),d++}else if(S.isSpotLight){const N=n.spot[p];N.position.setFromMatrixPosition(S.matrixWorld),N.position.applyMatrix4(m),N.direction.setFromMatrixPosition(S.matrixWorld),r.setFromMatrixPosition(S.target.matrixWorld),N.direction.sub(r),N.direction.transformDirection(m),p++}else if(S.isRectAreaLight){const N=n.rectArea[g];N.position.setFromMatrixPosition(S.matrixWorld),N.position.applyMatrix4(m),a.identity(),s.copy(S.matrixWorld),s.premultiply(m),a.extractRotation(s),N.halfWidth.set(S.width*.5,0,0),N.halfHeight.set(0,S.height*.5,0),N.halfWidth.applyMatrix4(a),N.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const N=n.point[h];N.position.setFromMatrixPosition(S.matrixWorld),N.position.applyMatrix4(m),h++}else if(S.isHemisphereLight){const N=n.hemi[_];N.direction.setFromMatrixPosition(S.matrixWorld),N.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function ul(i){const e=new t0(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function n0(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new ul(i),e.set(r,[o])):s>=a.length?(o=new ul(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const i0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r0=`uniform sampler2D shadow_pass;
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
}`;function s0(i,e,t){let n=new Wr;const r=new be,s=new be,a=new nt,o=new Mu({depthPacking:nd}),l=new Su,c={},u=t.maxTextureSize,d={[Vn]:Ut,[Ut]:Vn,[xn]:xn},h=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:i0,fragmentShader:r0}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new $t;g.setAttribute("position",new Ht(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new En(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ml;let f=this.type;this.render=function(E,D,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const M=i.getRenderTarget(),y=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),B=i.state;B.setBlending(bn),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const H=f!==mn&&this.type===mn,A=f===mn&&this.type!==mn;for(let k=0,V=E.length;k<V;k++){const Q=E[k],j=Q.shadow;if(j===void 0){Ie("WebGLShadowMap:",Q,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;r.copy(j.mapSize);const K=j.getFrameExtents();if(r.multiply(K),s.copy(j.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,j.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,j.mapSize.y=s.y)),j.map===null||H===!0||A===!0){const ie=this.type!==mn?{minFilter:Pt,magFilter:Pt}:{};j.map!==null&&j.map.dispose(),j.map=new Jn(r.x,r.y,ie),j.map.texture.name=Q.name+".shadowMap",j.camera.updateProjectionMatrix()}i.setRenderTarget(j.map),i.clear();const ne=j.getViewportCount();for(let ie=0;ie<ne;ie++){const qe=j.getViewport(ie);a.set(s.x*qe.x,s.y*qe.y,s.x*qe.z,s.y*qe.w),B.viewport(a),j.updateMatrices(Q,ie),n=j.getFrustum(),N(D,F,j.camera,Q,this.type)}j.isPointLightShadow!==!0&&this.type===mn&&T(j,F),j.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(M,y,L)};function T(E,D){const F=e.update(_);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Jn(r.x,r.y)),h.uniforms.shadow_pass.value=E.map.texture,h.uniforms.resolution.value=E.mapSize,h.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(D,null,F,h,_,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(D,null,F,p,_,null)}function S(E,D,F,M){let y=null;const L=F.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)y=L;else if(y=F.isPointLight===!0?l:o,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){const B=y.uuid,H=D.uuid;let A=c[B];A===void 0&&(A={},c[B]=A);let k=A[H];k===void 0&&(k=y.clone(),A[H]=k,D.addEventListener("dispose",P)),y=k}if(y.visible=D.visible,y.wireframe=D.wireframe,M===mn?y.side=D.shadowSide!==null?D.shadowSide:D.side:y.side=D.shadowSide!==null?D.shadowSide:d[D.side],y.alphaMap=D.alphaMap,y.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,y.map=D.map,y.clipShadows=D.clipShadows,y.clippingPlanes=D.clippingPlanes,y.clipIntersection=D.clipIntersection,y.displacementMap=D.displacementMap,y.displacementScale=D.displacementScale,y.displacementBias=D.displacementBias,y.wireframeLinewidth=D.wireframeLinewidth,y.linewidth=D.linewidth,F.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const B=i.properties.get(y);B.light=F}return y}function N(E,D,F,M,y){if(E.visible===!1)return;if(E.layers.test(D.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&y===mn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,E.matrixWorld);const H=e.update(E),A=E.material;if(Array.isArray(A)){const k=H.groups;for(let V=0,Q=k.length;V<Q;V++){const j=k[V],K=A[j.materialIndex];if(K&&K.visible){const ne=S(E,K,M,y);E.onBeforeShadow(i,E,D,F,H,ne,j),i.renderBufferDirect(F,null,H,ne,E,j),E.onAfterShadow(i,E,D,F,H,ne,j)}}}else if(A.visible){const k=S(E,A,M,y);E.onBeforeShadow(i,E,D,F,H,k,null),i.renderBufferDirect(F,null,H,k,E,null),E.onAfterShadow(i,E,D,F,H,k,null)}}const B=E.children;for(let H=0,A=B.length;H<A;H++)N(B[H],D,F,M,y)}function P(E){E.target.removeEventListener("dispose",P);for(const F in c){const M=c[F],y=E.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const a0={[Bs]:zs,[ks]:Ws,[Gs]:js,[Si]:Hs,[zs]:Bs,[Ws]:ks,[js]:Gs,[Hs]:Si};function o0(i,e){function t(){let R=!1;const ue=new nt;let ae=null;const oe=new nt(0,0,0,0);return{setMask:function(te){ae!==te&&!R&&(i.colorMask(te,te,te,te),ae=te)},setLocked:function(te){R=te},setClear:function(te,Z,xe,Ve,lt){lt===!0&&(te*=Ve,Z*=Ve,xe*=Ve),ue.set(te,Z,xe,Ve),oe.equals(ue)===!1&&(i.clearColor(te,Z,xe,Ve),oe.copy(ue))},reset:function(){R=!1,ae=null,oe.set(-1,0,0,0)}}}function n(){let R=!1,ue=!1,ae=null,oe=null,te=null;return{setReversed:function(Z){if(ue!==Z){const xe=e.get("EXT_clip_control");Z?xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.ZERO_TO_ONE_EXT):xe.clipControlEXT(xe.LOWER_LEFT_EXT,xe.NEGATIVE_ONE_TO_ONE_EXT),ue=Z;const Ve=te;te=null,this.setClear(Ve)}},getReversed:function(){return ue},setTest:function(Z){Z?Y(i.DEPTH_TEST):ce(i.DEPTH_TEST)},setMask:function(Z){ae!==Z&&!R&&(i.depthMask(Z),ae=Z)},setFunc:function(Z){if(ue&&(Z=a0[Z]),oe!==Z){switch(Z){case Bs:i.depthFunc(i.NEVER);break;case zs:i.depthFunc(i.ALWAYS);break;case ks:i.depthFunc(i.LESS);break;case Si:i.depthFunc(i.LEQUAL);break;case Gs:i.depthFunc(i.EQUAL);break;case Hs:i.depthFunc(i.GEQUAL);break;case Ws:i.depthFunc(i.GREATER);break;case js:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=Z}},setLocked:function(Z){R=Z},setClear:function(Z){te!==Z&&(ue&&(Z=1-Z),i.clearDepth(Z),te=Z)},reset:function(){R=!1,ae=null,oe=null,te=null,ue=!1}}}function r(){let R=!1,ue=null,ae=null,oe=null,te=null,Z=null,xe=null,Ve=null,lt=null;return{setTest:function(Qe){R||(Qe?Y(i.STENCIL_TEST):ce(i.STENCIL_TEST))},setMask:function(Qe){ue!==Qe&&!R&&(i.stencilMask(Qe),ue=Qe)},setFunc:function(Qe,rn,Kt){(ae!==Qe||oe!==rn||te!==Kt)&&(i.stencilFunc(Qe,rn,Kt),ae=Qe,oe=rn,te=Kt)},setOp:function(Qe,rn,Kt){(Z!==Qe||xe!==rn||Ve!==Kt)&&(i.stencilOp(Qe,rn,Kt),Z=Qe,xe=rn,Ve=Kt)},setLocked:function(Qe){R=Qe},setClear:function(Qe){lt!==Qe&&(i.clearStencil(Qe),lt=Qe)},reset:function(){R=!1,ue=null,ae=null,oe=null,te=null,Z=null,xe=null,Ve=null,lt=null}}}const s=new t,a=new n,o=new r,l=new WeakMap,c=new WeakMap;let u={},d={},h=new WeakMap,p=[],g=null,_=!1,m=null,f=null,T=null,S=null,N=null,P=null,E=null,D=new Ue(0,0,0),F=0,M=!1,y=null,L=null,B=null,H=null,A=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Q=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(j)[1]),V=Q>=1):j.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),V=Q>=2);let K=null,ne={};const ie=i.getParameter(i.SCISSOR_BOX),qe=i.getParameter(i.VIEWPORT),De=new nt().fromArray(ie),Ye=new nt().fromArray(qe);function Oe(R,ue,ae,oe){const te=new Uint8Array(4),Z=i.createTexture();i.bindTexture(R,Z),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let xe=0;xe<ae;xe++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(ue,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,te):i.texImage2D(ue+xe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,te);return Z}const q={};q[i.TEXTURE_2D]=Oe(i.TEXTURE_2D,i.TEXTURE_2D,1),q[i.TEXTURE_CUBE_MAP]=Oe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[i.TEXTURE_2D_ARRAY]=Oe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),q[i.TEXTURE_3D]=Oe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),Y(i.DEPTH_TEST),a.setFunc(Si),He(!1),$e(co),Y(i.CULL_FACE),rt(bn);function Y(R){u[R]!==!0&&(i.enable(R),u[R]=!0)}function ce(R){u[R]!==!1&&(i.disable(R),u[R]=!1)}function Ee(R,ue){return d[R]!==ue?(i.bindFramebuffer(R,ue),d[R]=ue,R===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ue),R===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ue),!0):!1}function ve(R,ue){let ae=p,oe=!1;if(R){ae=h.get(ue),ae===void 0&&(ae=[],h.set(ue,ae));const te=R.textures;if(ae.length!==te.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let Z=0,xe=te.length;Z<xe;Z++)ae[Z]=i.COLOR_ATTACHMENT0+Z;ae.length=te.length,oe=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,oe=!0);oe&&i.drawBuffers(ae)}function je(R){return g!==R?(i.useProgram(R),g=R,!0):!1}const vt={[Yn]:i.FUNC_ADD,[Ac]:i.FUNC_SUBTRACT,[wc]:i.FUNC_REVERSE_SUBTRACT};vt[Dc]=i.MIN,vt[Rc]=i.MAX;const Xe={[Pc]:i.ZERO,[Lc]:i.ONE,[Ic]:i.SRC_COLOR,[Os]:i.SRC_ALPHA,[zc]:i.SRC_ALPHA_SATURATE,[Vc]:i.DST_COLOR,[Fc]:i.DST_ALPHA,[Uc]:i.ONE_MINUS_SRC_COLOR,[Vs]:i.ONE_MINUS_SRC_ALPHA,[Bc]:i.ONE_MINUS_DST_COLOR,[Oc]:i.ONE_MINUS_DST_ALPHA,[kc]:i.CONSTANT_COLOR,[Gc]:i.ONE_MINUS_CONSTANT_COLOR,[Hc]:i.CONSTANT_ALPHA,[Wc]:i.ONE_MINUS_CONSTANT_ALPHA};function rt(R,ue,ae,oe,te,Z,xe,Ve,lt,Qe){if(R===bn){_===!0&&(ce(i.BLEND),_=!1);return}if(_===!1&&(Y(i.BLEND),_=!0),R!==Nc){if(R!==m||Qe!==M){if((f!==Yn||N!==Yn)&&(i.blendEquation(i.FUNC_ADD),f=Yn,N=Yn),Qe)switch(R){case yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uo:i.blendFunc(i.ONE,i.ONE);break;case ho:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:pt("WebGLState: Invalid blending: ",R);break}else switch(R){case yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case uo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ho:pt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fo:pt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:pt("WebGLState: Invalid blending: ",R);break}T=null,S=null,P=null,E=null,D.set(0,0,0),F=0,m=R,M=Qe}return}te=te||ue,Z=Z||ae,xe=xe||oe,(ue!==f||te!==N)&&(i.blendEquationSeparate(vt[ue],vt[te]),f=ue,N=te),(ae!==T||oe!==S||Z!==P||xe!==E)&&(i.blendFuncSeparate(Xe[ae],Xe[oe],Xe[Z],Xe[xe]),T=ae,S=oe,P=Z,E=xe),(Ve.equals(D)===!1||lt!==F)&&(i.blendColor(Ve.r,Ve.g,Ve.b,lt),D.copy(Ve),F=lt),m=R,M=!1}function w(R,ue){R.side===xn?ce(i.CULL_FACE):Y(i.CULL_FACE);let ae=R.side===Ut;ue&&(ae=!ae),He(ae),R.blending===yi&&R.transparent===!1?rt(bn):rt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),s.setMask(R.colorWrite);const oe=R.stencilWrite;o.setTest(oe),oe&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),_e(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?Y(i.SAMPLE_ALPHA_TO_COVERAGE):ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function He(R){y!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),y=R)}function $e(R){R!==Ec?(Y(i.CULL_FACE),R!==L&&(R===co?i.cullFace(i.BACK):R===Cc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ce(i.CULL_FACE),L=R}function at(R){R!==B&&(V&&i.lineWidth(R),B=R)}function _e(R,ue,ae){R?(Y(i.POLYGON_OFFSET_FILL),(H!==ue||A!==ae)&&(i.polygonOffset(ue,ae),H=ue,A=ae)):ce(i.POLYGON_OFFSET_FILL)}function ct(R){R?Y(i.SCISSOR_TEST):ce(i.SCISSOR_TEST)}function Ce(R){R===void 0&&(R=i.TEXTURE0+k-1),K!==R&&(i.activeTexture(R),K=R)}function Be(R,ue,ae){ae===void 0&&(K===null?ae=i.TEXTURE0+k-1:ae=K);let oe=ne[ae];oe===void 0&&(oe={type:void 0,texture:void 0},ne[ae]=oe),(oe.type!==R||oe.texture!==ue)&&(K!==ae&&(i.activeTexture(ae),K=ae),i.bindTexture(R,ue||q[R]),oe.type=R,oe.texture=ue)}function C(){const R=ne[K];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function v(){try{i.compressedTexImage2D(...arguments)}catch(R){R("WebGLState:",R)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(R){R("WebGLState:",R)}}function $(){try{i.texSubImage2D(...arguments)}catch(R){R("WebGLState:",R)}}function J(){try{i.texSubImage3D(...arguments)}catch(R){R("WebGLState:",R)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(R){R("WebGLState:",R)}}function Me(){try{i.compressedTexSubImage3D(...arguments)}catch(R){R("WebGLState:",R)}}function de(){try{i.texStorage2D(...arguments)}catch(R){R("WebGLState:",R)}}function Te(){try{i.texStorage3D(...arguments)}catch(R){R("WebGLState:",R)}}function ye(){try{i.texImage2D(...arguments)}catch(R){R("WebGLState:",R)}}function ee(){try{i.texImage3D(...arguments)}catch(R){R("WebGLState:",R)}}function se(R){De.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),De.copy(R))}function Pe(R){Ye.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),Ye.copy(R))}function we(R,ue){let ae=c.get(ue);ae===void 0&&(ae=new WeakMap,c.set(ue,ae));let oe=ae.get(R);oe===void 0&&(oe=i.getUniformBlockIndex(ue,R.name),ae.set(R,oe))}function fe(R,ue){const oe=c.get(ue).get(R);l.get(ue)!==oe&&(i.uniformBlockBinding(ue,oe,R.__bindingPointIndex),l.set(ue,oe))}function Fe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},K=null,ne={},d={},h=new WeakMap,p=[],g=null,_=!1,m=null,f=null,T=null,S=null,N=null,P=null,E=null,D=new Ue(0,0,0),F=0,M=!1,y=null,L=null,B=null,H=null,A=null,De.set(0,0,i.canvas.width,i.canvas.height),Ye.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:Y,disable:ce,bindFramebuffer:Ee,drawBuffers:ve,useProgram:je,setBlending:rt,setMaterial:w,setFlipSided:He,setCullFace:$e,setLineWidth:at,setPolygonOffset:_e,setScissorTest:ct,activeTexture:Ce,bindTexture:Be,unbindTexture:C,compressedTexImage2D:v,compressedTexImage3D:z,texImage2D:ye,texImage3D:ee,updateUBOMapping:we,uniformBlockBinding:fe,texStorage2D:de,texStorage3D:Te,texSubImage2D:$,texSubImage3D:J,compressedTexSubImage2D:X,compressedTexSubImage3D:Me,scissor:se,viewport:Pe,reset:Fe}}function l0(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new be,u=new WeakMap;let d;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,v){return p?new OffscreenCanvas(C,v):Ki("canvas")}function _(C,v,z){let $=1;const J=Be(C);if((J.width>z||J.height>z)&&($=z/Math.max(J.width,J.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const X=Math.floor($*J.width),Me=Math.floor($*J.height);d===void 0&&(d=g(X,Me));const de=v?g(X,Me):d;return de.width=X,de.height=Me,de.getContext("2d").drawImage(C,0,0,X,Me),Ie("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+X+"x"+Me+")."),de}else return"data"in C&&Ie("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){i.generateMipmap(C)}function T(C){return C.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?i.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(C,v,z,$,J=!1){if(C!==null){if(i[C]!==void 0)return i[C];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let X=v;if(v===i.RED&&(z===i.FLOAT&&(X=i.R32F),z===i.HALF_FLOAT&&(X=i.R16F),z===i.UNSIGNED_BYTE&&(X=i.R8)),v===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.R8UI),z===i.UNSIGNED_SHORT&&(X=i.R16UI),z===i.UNSIGNED_INT&&(X=i.R32UI),z===i.BYTE&&(X=i.R8I),z===i.SHORT&&(X=i.R16I),z===i.INT&&(X=i.R32I)),v===i.RG&&(z===i.FLOAT&&(X=i.RG32F),z===i.HALF_FLOAT&&(X=i.RG16F),z===i.UNSIGNED_BYTE&&(X=i.RG8)),v===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.RG8UI),z===i.UNSIGNED_SHORT&&(X=i.RG16UI),z===i.UNSIGNED_INT&&(X=i.RG32UI),z===i.BYTE&&(X=i.RG8I),z===i.SHORT&&(X=i.RG16I),z===i.INT&&(X=i.RG32I)),v===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.RGB8UI),z===i.UNSIGNED_SHORT&&(X=i.RGB16UI),z===i.UNSIGNED_INT&&(X=i.RGB32UI),z===i.BYTE&&(X=i.RGB8I),z===i.SHORT&&(X=i.RGB16I),z===i.INT&&(X=i.RGB32I)),v===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),z===i.UNSIGNED_INT&&(X=i.RGBA32UI),z===i.BYTE&&(X=i.RGBA8I),z===i.SHORT&&(X=i.RGBA16I),z===i.INT&&(X=i.RGBA32I)),v===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(X=i.R11F_G11F_B10F)),v===i.RGBA){const Me=J?Fr:Je.getTransfer($);z===i.FLOAT&&(X=i.RGBA32F),z===i.HALF_FLOAT&&(X=i.RGBA16F),z===i.UNSIGNED_BYTE&&(X=Me===tt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function N(C,v){let z;return C?v===null||v===Zn||v===qi?z=i.DEPTH24_STENCIL8:v===_n?z=i.DEPTH32F_STENCIL8:v===Xi&&(z=i.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Zn||v===qi?z=i.DEPTH_COMPONENT24:v===_n?z=i.DEPTH_COMPONENT32F:v===Xi&&(z=i.DEPTH_COMPONENT16),z}function P(C,v){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Pt&&C.minFilter!==qt?Math.log2(Math.max(v.width,v.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?v.mipmaps.length:1}function E(C){const v=C.target;v.removeEventListener("dispose",E),F(v),v.isVideoTexture&&u.delete(v)}function D(C){const v=C.target;v.removeEventListener("dispose",D),y(v)}function F(C){const v=n.get(C);if(v.__webglInit===void 0)return;const z=C.source,$=h.get(z);if($){const J=$[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&M(C),Object.keys($).length===0&&h.delete(z)}n.remove(C)}function M(C){const v=n.get(C);i.deleteTexture(v.__webglTexture);const z=C.source,$=h.get(z);delete $[v.__cacheKey],a.memory.textures--}function y(C){const v=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(v.__webglFramebuffer[$]))for(let J=0;J<v.__webglFramebuffer[$].length;J++)i.deleteFramebuffer(v.__webglFramebuffer[$][J]);else i.deleteFramebuffer(v.__webglFramebuffer[$]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[$])}else{if(Array.isArray(v.__webglFramebuffer))for(let $=0;$<v.__webglFramebuffer.length;$++)i.deleteFramebuffer(v.__webglFramebuffer[$]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let $=0;$<v.__webglColorRenderbuffer.length;$++)v.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[$]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const z=C.textures;for(let $=0,J=z.length;$<J;$++){const X=n.get(z[$]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),a.memory.textures--),n.remove(z[$])}n.remove(C)}let L=0;function B(){L=0}function H(){const C=L;return C>=r.maxTextures&&Ie("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),L+=1,C}function A(C){const v=[];return v.push(C.wrapS),v.push(C.wrapT),v.push(C.wrapR||0),v.push(C.magFilter),v.push(C.minFilter),v.push(C.anisotropy),v.push(C.internalFormat),v.push(C.format),v.push(C.type),v.push(C.generateMipmaps),v.push(C.premultiplyAlpha),v.push(C.flipY),v.push(C.unpackAlignment),v.push(C.colorSpace),v.join()}function k(C,v){const z=n.get(C);if(C.isVideoTexture&&ct(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&z.__version!==C.version){const $=C.image;if($===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{q(z,C,v);return}}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+v)}function V(C,v){const z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){q(z,C,v);return}else C.isExternalTexture&&(z.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+v)}function Q(C,v){const z=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&z.__version!==C.version){q(z,C,v);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+v)}function j(C,v){const z=n.get(C);if(C.version>0&&z.__version!==C.version){Y(z,C,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+v)}const K={[Ys]:i.REPEAT,[vn]:i.CLAMP_TO_EDGE,[$s]:i.MIRRORED_REPEAT},ne={[Pt]:i.NEAREST,[ed]:i.NEAREST_MIPMAP_NEAREST,[sr]:i.NEAREST_MIPMAP_LINEAR,[qt]:i.LINEAR,[Jr]:i.LINEAR_MIPMAP_NEAREST,[Kn]:i.LINEAR_MIPMAP_LINEAR},ie={[rd]:i.NEVER,[dd]:i.ALWAYS,[sd]:i.LESS,[Rl]:i.LEQUAL,[ad]:i.EQUAL,[cd]:i.GEQUAL,[od]:i.GREATER,[ld]:i.NOTEQUAL};function qe(C,v){if(v.type===_n&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===qt||v.magFilter===Jr||v.magFilter===sr||v.magFilter===Kn||v.minFilter===qt||v.minFilter===Jr||v.minFilter===sr||v.minFilter===Kn)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(C,i.TEXTURE_WRAP_S,K[v.wrapS]),i.texParameteri(C,i.TEXTURE_WRAP_T,K[v.wrapT]),(C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY)&&i.texParameteri(C,i.TEXTURE_WRAP_R,K[v.wrapR]),i.texParameteri(C,i.TEXTURE_MAG_FILTER,ne[v.magFilter]),i.texParameteri(C,i.TEXTURE_MIN_FILTER,ne[v.minFilter]),v.compareFunction&&(i.texParameteri(C,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(C,i.TEXTURE_COMPARE_FUNC,ie[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Pt||v.minFilter!==sr&&v.minFilter!==Kn||v.type===_n&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(C,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,r.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function De(C,v){let z=!1;C.__webglInit===void 0&&(C.__webglInit=!0,v.addEventListener("dispose",E));const $=v.source;let J=h.get($);J===void 0&&(J={},h.set($,J));const X=A(v);if(X!==C.__cacheKey){J[X]===void 0&&(J[X]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),J[X].usedTimes++;const Me=J[C.__cacheKey];Me!==void 0&&(J[C.__cacheKey].usedTimes--,Me.usedTimes===0&&M(v)),C.__cacheKey=X,C.__webglTexture=J[X].texture}return z}function Ye(C,v,z){return Math.floor(Math.floor(C/z)/v)}function Oe(C,v,z,$){const X=C.updateRanges;if(X.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,z,$,v.data);else{X.sort((ee,se)=>ee.start-se.start);let Me=0;for(let ee=1;ee<X.length;ee++){const se=X[Me],Pe=X[ee],we=se.start+se.count,fe=Ye(Pe.start,v.width,4),Fe=Ye(se.start,v.width,4);Pe.start<=we+1&&fe===Fe&&Ye(Pe.start+Pe.count-1,v.width,4)===fe?se.count=Math.max(se.count,Pe.start+Pe.count-se.start):(++Me,X[Me]=Pe)}X.length=Me+1;const de=i.getParameter(i.UNPACK_ROW_LENGTH),Te=i.getParameter(i.UNPACK_SKIP_PIXELS),ye=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let ee=0,se=X.length;ee<se;ee++){const Pe=X[ee],we=Math.floor(Pe.start/4),fe=Math.ceil(Pe.count/4),Fe=we%v.width,R=Math.floor(we/v.width),ue=fe,ae=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Fe),i.pixelStorei(i.UNPACK_SKIP_ROWS,R),t.texSubImage2D(i.TEXTURE_2D,0,Fe,R,ue,ae,z,$,v.data)}C.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,de),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Te),i.pixelStorei(i.UNPACK_SKIP_ROWS,ye)}}function q(C,v,z){let $=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&($=i.TEXTURE_3D);const J=De(C,v),X=v.source;t.bindTexture($,C.__webglTexture,i.TEXTURE0+z);const Me=n.get(X);if(X.version!==Me.__version||J===!0){t.activeTexture(i.TEXTURE0+z);const de=Je.getPrimaries(Je.workingColorSpace),Te=v.colorSpace===Ln?null:Je.getPrimaries(v.colorSpace),ye=v.colorSpace===Ln||de===Te?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);let ee=_(v.image,!1,r.maxTextureSize);ee=Ce(v,ee);const se=s.convert(v.format,v.colorSpace),Pe=s.convert(v.type);let we=S(v.internalFormat,se,Pe,v.colorSpace,v.isVideoTexture);qe($,v);let fe;const Fe=v.mipmaps,R=v.isVideoTexture!==!0,ue=Me.__version===void 0||J===!0,ae=X.dataReady,oe=P(v,ee);if(v.isDepthTexture)we=N(v.format===$i,v.type),ue&&(R?t.texStorage2D(i.TEXTURE_2D,1,we,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,we,ee.width,ee.height,0,se,Pe,null));else if(v.isDataTexture)if(Fe.length>0){R&&ue&&t.texStorage2D(i.TEXTURE_2D,oe,we,Fe[0].width,Fe[0].height);for(let te=0,Z=Fe.length;te<Z;te++)fe=Fe[te],R?ae&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,fe.width,fe.height,se,Pe,fe.data):t.texImage2D(i.TEXTURE_2D,te,we,fe.width,fe.height,0,se,Pe,fe.data);v.generateMipmaps=!1}else R?(ue&&t.texStorage2D(i.TEXTURE_2D,oe,we,ee.width,ee.height),ae&&Oe(v,ee,se,Pe)):t.texImage2D(i.TEXTURE_2D,0,we,ee.width,ee.height,0,se,Pe,ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){R&&ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,we,Fe[0].width,Fe[0].height,ee.depth);for(let te=0,Z=Fe.length;te<Z;te++)if(fe=Fe[te],v.format!==tn)if(se!==null)if(R){if(ae)if(v.layerUpdates.size>0){const xe=Go(fe.width,fe.height,v.format,v.type);for(const Ve of v.layerUpdates){const lt=fe.data.subarray(Ve*xe/fe.data.BYTES_PER_ELEMENT,(Ve+1)*xe/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,Ve,fe.width,fe.height,1,se,lt)}v.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,fe.width,fe.height,ee.depth,se,fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,te,we,fe.width,fe.height,ee.depth,0,fe.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else R?ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,te,0,0,0,fe.width,fe.height,ee.depth,se,Pe,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,te,we,fe.width,fe.height,ee.depth,0,se,Pe,fe.data)}else{R&&ue&&t.texStorage2D(i.TEXTURE_2D,oe,we,Fe[0].width,Fe[0].height);for(let te=0,Z=Fe.length;te<Z;te++)fe=Fe[te],v.format!==tn?se!==null?R?ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,te,0,0,fe.width,fe.height,se,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,te,we,fe.width,fe.height,0,fe.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?ae&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,fe.width,fe.height,se,Pe,fe.data):t.texImage2D(i.TEXTURE_2D,te,we,fe.width,fe.height,0,se,Pe,fe.data)}else if(v.isDataArrayTexture)if(R){if(ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,oe,we,ee.width,ee.height,ee.depth),ae)if(v.layerUpdates.size>0){const te=Go(ee.width,ee.height,v.format,v.type);for(const Z of v.layerUpdates){const xe=ee.data.subarray(Z*te/ee.data.BYTES_PER_ELEMENT,(Z+1)*te/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Z,ee.width,ee.height,1,se,Pe,xe)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,se,Pe,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,we,ee.width,ee.height,ee.depth,0,se,Pe,ee.data);else if(v.isData3DTexture)R?(ue&&t.texStorage3D(i.TEXTURE_3D,oe,we,ee.width,ee.height,ee.depth),ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,se,Pe,ee.data)):t.texImage3D(i.TEXTURE_3D,0,we,ee.width,ee.height,ee.depth,0,se,Pe,ee.data);else if(v.isFramebufferTexture){if(ue)if(R)t.texStorage2D(i.TEXTURE_2D,oe,we,ee.width,ee.height);else{let te=ee.width,Z=ee.height;for(let xe=0;xe<oe;xe++)t.texImage2D(i.TEXTURE_2D,xe,we,te,Z,0,se,Pe,null),te>>=1,Z>>=1}}else if(Fe.length>0){if(R&&ue){const te=Be(Fe[0]);t.texStorage2D(i.TEXTURE_2D,oe,we,te.width,te.height)}for(let te=0,Z=Fe.length;te<Z;te++)fe=Fe[te],R?ae&&t.texSubImage2D(i.TEXTURE_2D,te,0,0,se,Pe,fe):t.texImage2D(i.TEXTURE_2D,te,we,se,Pe,fe);v.generateMipmaps=!1}else if(R){if(ue){const te=Be(ee);t.texStorage2D(i.TEXTURE_2D,oe,we,te.width,te.height)}ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se,Pe,ee)}else t.texImage2D(i.TEXTURE_2D,0,we,se,Pe,ee);m(v)&&f($),Me.__version=X.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function Y(C,v,z){if(v.image.length!==6)return;const $=De(C,v),J=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,C.__webglTexture,i.TEXTURE0+z);const X=n.get(J);if(J.version!==X.__version||$===!0){t.activeTexture(i.TEXTURE0+z);const Me=Je.getPrimaries(Je.workingColorSpace),de=v.colorSpace===Ln?null:Je.getPrimaries(v.colorSpace),Te=v.colorSpace===Ln||Me===de?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);const ye=v.isCompressedTexture||v.image[0].isCompressedTexture,ee=v.image[0]&&v.image[0].isDataTexture,se=[];for(let Z=0;Z<6;Z++)!ye&&!ee?se[Z]=_(v.image[Z],!0,r.maxCubemapSize):se[Z]=ee?v.image[Z].image:v.image[Z],se[Z]=Ce(v,se[Z]);const Pe=se[0],we=s.convert(v.format,v.colorSpace),fe=s.convert(v.type),Fe=S(v.internalFormat,we,fe,v.colorSpace),R=v.isVideoTexture!==!0,ue=X.__version===void 0||$===!0,ae=J.dataReady;let oe=P(v,Pe);qe(i.TEXTURE_CUBE_MAP,v);let te;if(ye){R&&ue&&t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Fe,Pe.width,Pe.height);for(let Z=0;Z<6;Z++){te=se[Z].mipmaps;for(let xe=0;xe<te.length;xe++){const Ve=te[xe];v.format!==tn?we!==null?R?ae&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,0,0,Ve.width,Ve.height,we,Ve.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,Fe,Ve.width,Ve.height,0,Ve.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,0,0,Ve.width,Ve.height,we,fe,Ve.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe,Fe,Ve.width,Ve.height,0,we,fe,Ve.data)}}}else{if(te=v.mipmaps,R&&ue){te.length>0&&oe++;const Z=Be(se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,oe,Fe,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ee){R?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,se[Z].width,se[Z].height,we,fe,se[Z].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Fe,se[Z].width,se[Z].height,0,we,fe,se[Z].data);for(let xe=0;xe<te.length;xe++){const lt=te[xe].image[Z].image;R?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,0,0,lt.width,lt.height,we,fe,lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,Fe,lt.width,lt.height,0,we,fe,lt.data)}}else{R?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,we,fe,se[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Fe,we,fe,se[Z]);for(let xe=0;xe<te.length;xe++){const Ve=te[xe];R?ae&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,0,0,we,fe,Ve.image[Z]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,xe+1,Fe,we,fe,Ve.image[Z])}}}m(v)&&f(i.TEXTURE_CUBE_MAP),X.__version=J.version,v.onUpdate&&v.onUpdate(v)}C.__version=v.version}function ce(C,v,z,$,J,X){const Me=s.convert(z.format,z.colorSpace),de=s.convert(z.type),Te=S(z.internalFormat,Me,de,z.colorSpace),ye=n.get(v),ee=n.get(z);if(ee.__renderTarget=v,!ye.__hasExternalTextures){const se=Math.max(1,v.width>>X),Pe=Math.max(1,v.height>>X);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,X,Te,se,Pe,v.depth,0,Me,de,null):t.texImage2D(J,X,Te,se,Pe,0,Me,de,null)}t.bindFramebuffer(i.FRAMEBUFFER,C),_e(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,J,ee.__webglTexture,0,at(v)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,J,ee.__webglTexture,X),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(C,v,z){if(i.bindRenderbuffer(i.RENDERBUFFER,C),v.depthBuffer){const $=v.depthTexture,J=$&&$.isDepthTexture?$.type:null,X=N(v.stencilBuffer,J),Me=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=at(v);_e(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,de,X,v.width,v.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,de,X,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,X,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,C)}else{const $=v.textures;for(let J=0;J<$.length;J++){const X=$[J],Me=s.convert(X.format,X.colorSpace),de=s.convert(X.type),Te=S(X.internalFormat,Me,de,X.colorSpace),ye=at(v);z&&_e(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,Te,v.width,v.height):_e(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ye,Te,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Te,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ve(C,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,C),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(v.depthTexture);$.__renderTarget=v,(!$.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),k(v.depthTexture,0);const J=$.__webglTexture,X=at(v);if(v.depthTexture.format===Yi)_e(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(v.depthTexture.format===$i)_e(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function je(C){const v=n.get(C),z=C.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==C.depthTexture){const $=C.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),$){const J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,$.removeEventListener("dispose",J)};$.addEventListener("dispose",J),v.__depthDisposeCallback=J}v.__boundDepthTexture=$}if(C.depthTexture&&!v.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");const $=C.texture.mipmaps;$&&$.length>0?ve(v.__webglFramebuffer[0],C):ve(v.__webglFramebuffer,C)}else if(z){v.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[$]),v.__webglDepthbuffer[$]===void 0)v.__webglDepthbuffer[$]=i.createRenderbuffer(),Ee(v.__webglDepthbuffer[$],C,!1);else{const J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,X)}}else{const $=C.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ee(v.__webglDepthbuffer,C,!1);else{const J=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,X)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function vt(C,v,z){const $=n.get(C);v!==void 0&&ce($.__webglFramebuffer,C,C.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&je(C)}function Xe(C){const v=C.texture,z=n.get(C),$=n.get(v);C.addEventListener("dispose",D);const J=C.textures,X=C.isWebGLCubeRenderTarget===!0,Me=J.length>1;if(Me||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=v.version,a.memory.textures++),X){z.__webglFramebuffer=[];for(let de=0;de<6;de++)if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer[de]=[];for(let Te=0;Te<v.mipmaps.length;Te++)z.__webglFramebuffer[de][Te]=i.createFramebuffer()}else z.__webglFramebuffer[de]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer=[];for(let de=0;de<v.mipmaps.length;de++)z.__webglFramebuffer[de]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Me)for(let de=0,Te=J.length;de<Te;de++){const ye=n.get(J[de]);ye.__webglTexture===void 0&&(ye.__webglTexture=i.createTexture(),a.memory.textures++)}if(C.samples>0&&_e(C)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let de=0;de<J.length;de++){const Te=J[de];z.__webglColorRenderbuffer[de]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[de]);const ye=s.convert(Te.format,Te.colorSpace),ee=s.convert(Te.type),se=S(Te.internalFormat,ye,ee,Te.colorSpace,C.isXRRenderTarget===!0),Pe=at(C);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,se,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+de,i.RENDERBUFFER,z.__webglColorRenderbuffer[de])}i.bindRenderbuffer(i.RENDERBUFFER,null),C.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ee(z.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),qe(i.TEXTURE_CUBE_MAP,v);for(let de=0;de<6;de++)if(v.mipmaps&&v.mipmaps.length>0)for(let Te=0;Te<v.mipmaps.length;Te++)ce(z.__webglFramebuffer[de][Te],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Te);else ce(z.__webglFramebuffer[de],C,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(v)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let de=0,Te=J.length;de<Te;de++){const ye=J[de],ee=n.get(ye);let se=i.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(se=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,ee.__webglTexture),qe(se,ye),ce(z.__webglFramebuffer,C,ye,i.COLOR_ATTACHMENT0+de,se,0),m(ye)&&f(se)}t.unbindTexture()}else{let de=i.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(de=C.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(de,$.__webglTexture),qe(de,v),v.mipmaps&&v.mipmaps.length>0)for(let Te=0;Te<v.mipmaps.length;Te++)ce(z.__webglFramebuffer[Te],C,v,i.COLOR_ATTACHMENT0,de,Te);else ce(z.__webglFramebuffer,C,v,i.COLOR_ATTACHMENT0,de,0);m(v)&&f(de),t.unbindTexture()}C.depthBuffer&&je(C)}function rt(C){const v=C.textures;for(let z=0,$=v.length;z<$;z++){const J=v[z];if(m(J)){const X=T(C),Me=n.get(J).__webglTexture;t.bindTexture(X,Me),f(X),t.unbindTexture()}}}const w=[],He=[];function $e(C){if(C.samples>0){if(_e(C)===!1){const v=C.textures,z=C.width,$=C.height;let J=i.COLOR_BUFFER_BIT;const X=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=n.get(C),de=v.length>1;if(de)for(let ye=0;ye<v.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const Te=C.texture.mipmaps;Te&&Te.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ye=0;ye<v.length;ye++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),de){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ye]);const ee=n.get(v[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,z,$,0,0,z,$,J,i.NEAREST),l===!0&&(w.length=0,He.length=0,w.push(i.COLOR_ATTACHMENT0+ye),C.depthBuffer&&C.resolveDepthBuffer===!1&&(w.push(X),He.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,He)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,w))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),de)for(let ye=0;ye<v.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,Me.__webglColorRenderbuffer[ye]);const ee=n.get(v[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Me.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const v=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function at(C){return Math.min(r.maxSamples,C.samples)}function _e(C){const v=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ct(C){const v=a.render.frame;u.get(C)!==v&&(u.set(C,v),C.update())}function Ce(C,v){const z=C.colorSpace,$=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||z!==Ti&&z!==Ln&&(Je.getTransfer(z)===tt?($!==tn||J!==ln)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):pt("WebGLTextures: Unsupported texture color space:",z)),v}function Be(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=B,this.setTexture2D=k,this.setTexture2DArray=V,this.setTexture3D=Q,this.setTextureCube=j,this.rebindTextures=vt,this.setupRenderTarget=Xe,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=_e}function c0(i,e){function t(n,r=Ln){let s;const a=Je.getTransfer(r);if(n===ln)return i.UNSIGNED_BYTE;if(n===Oa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Va)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Tl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Nl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===El)return i.BYTE;if(n===Cl)return i.SHORT;if(n===Xi)return i.UNSIGNED_SHORT;if(n===Fa)return i.INT;if(n===Zn)return i.UNSIGNED_INT;if(n===_n)return i.FLOAT;if(n===wi)return i.HALF_FLOAT;if(n===Al)return i.ALPHA;if(n===wl)return i.RGB;if(n===tn)return i.RGBA;if(n===Yi)return i.DEPTH_COMPONENT;if(n===$i)return i.DEPTH_STENCIL;if(n===Dl)return i.RED;if(n===Ba)return i.RED_INTEGER;if(n===za)return i.RG;if(n===ka)return i.RG_INTEGER;if(n===Ga)return i.RGBA_INTEGER;if(n===Rr||n===Pr||n===Lr||n===Ir)if(a===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Rr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Pr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Lr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ir)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Rr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Pr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Lr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ir)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ks||n===Zs||n===Js||n===Qs)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ks)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zs)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Js)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qs)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ea||n===ta||n===na)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===ea||n===ta)return a===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===na)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ia||n===ra||n===sa||n===aa||n===oa||n===la||n===ca||n===da||n===ua||n===ha||n===fa||n===pa||n===ma||n===xa)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ia)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ra)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===aa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===oa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===la)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ca)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===da)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ua)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ha)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ma)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===xa)return a===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ga||n===va||n===_a)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===ga)return a===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===va)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===_a)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ba||n===ya||n===Ma||n===Sa)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===ba)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ya)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ma)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sa)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const d0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u0=`
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

}`;class h0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Wl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Cn({vertexShader:d0,fragmentShader:u0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new En(new jr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class f0 extends ei{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,d=null,h=null,p=null,g=null;const _=typeof XRWebGLBinding<"u",m=new h0,f={},T=t.getContextAttributes();let S=null,N=null;const P=[],E=[],D=new be;let F=null;const M=new Gt;M.viewport=new nt;const y=new Gt;y.viewport=new nt;const L=[M,y],B=new Ru;let H=null,A=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let Y=P[q];return Y===void 0&&(Y=new _s,P[q]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(q){let Y=P[q];return Y===void 0&&(Y=new _s,P[q]=Y),Y.getGripSpace()},this.getHand=function(q){let Y=P[q];return Y===void 0&&(Y=new _s,P[q]=Y),Y.getHandSpace()};function k(q){const Y=E.indexOf(q.inputSource);if(Y===-1)return;const ce=P[Y];ce!==void 0&&(ce.update(q.inputSource,q.frame,c||a),ce.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",Q);for(let q=0;q<P.length;q++){const Y=E[q];Y!==null&&(E[q]=null,P[q].disconnect(Y))}H=null,A=null,m.reset();for(const q in f)delete f[q];e.setRenderTarget(S),p=null,h=null,d=null,r=null,N=null,Oe.stop(),n.isPresenting=!1,e.setPixelRatio(F),e.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(r,t)),d},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(S=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",V),r.addEventListener("inputsourceschange",Q),T.xrCompatible!==!0&&await t.makeXRCompatible(),F=e.getPixelRatio(),e.getSize(D),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,Ee=null,ve=null;T.depth&&(ve=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=T.stencil?$i:Yi,Ee=T.stencil?qi:Zn);const je={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(je),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),N=new Jn(h.textureWidth,h.textureHeight,{format:tn,type:ln,depthTexture:new Hl(h.textureWidth,h.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const ce={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ce),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),N=new Jn(p.framebufferWidth,p.framebufferHeight,{format:tn,type:ln,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Oe.setContext(r),Oe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function Q(q){for(let Y=0;Y<q.removed.length;Y++){const ce=q.removed[Y],Ee=E.indexOf(ce);Ee>=0&&(E[Ee]=null,P[Ee].disconnect(ce))}for(let Y=0;Y<q.added.length;Y++){const ce=q.added[Y];let Ee=E.indexOf(ce);if(Ee===-1){for(let je=0;je<P.length;je++)if(je>=E.length){E.push(ce),Ee=je;break}else if(E[je]===null){E[je]=ce,Ee=je;break}if(Ee===-1)break}const ve=P[Ee];ve&&ve.connect(ce)}}const j=new I,K=new I;function ne(q,Y,ce){j.setFromMatrixPosition(Y.matrixWorld),K.setFromMatrixPosition(ce.matrixWorld);const Ee=j.distanceTo(K),ve=Y.projectionMatrix.elements,je=ce.projectionMatrix.elements,vt=ve[14]/(ve[10]-1),Xe=ve[14]/(ve[10]+1),rt=(ve[9]+1)/ve[5],w=(ve[9]-1)/ve[5],He=(ve[8]-1)/ve[0],$e=(je[8]+1)/je[0],at=vt*He,_e=vt*$e,ct=Ee/(-He+$e),Ce=ct*-He;if(Y.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Ce),q.translateZ(ct),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),ve[10]===-1)q.projectionMatrix.copy(Y.projectionMatrix),q.projectionMatrixInverse.copy(Y.projectionMatrixInverse);else{const Be=vt+ct,C=Xe+ct,v=at-Ce,z=_e+(Ee-Ce),$=rt*Xe/C*Be,J=w*Xe/C*Be;q.projectionMatrix.makePerspective(v,z,$,J,Be,C),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function ie(q,Y){Y===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(Y.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let Y=q.near,ce=q.far;m.texture!==null&&(m.depthNear>0&&(Y=m.depthNear),m.depthFar>0&&(ce=m.depthFar)),B.near=y.near=M.near=Y,B.far=y.far=M.far=ce,(H!==B.near||A!==B.far)&&(r.updateRenderState({depthNear:B.near,depthFar:B.far}),H=B.near,A=B.far),B.layers.mask=q.layers.mask|6,M.layers.mask=B.layers.mask&3,y.layers.mask=B.layers.mask&5;const Ee=q.parent,ve=B.cameras;ie(B,Ee);for(let je=0;je<ve.length;je++)ie(ve[je],Ee);ve.length===2?ne(B,M,y):B.projectionMatrix.copy(M.projectionMatrix),qe(q,B,Ee)};function qe(q,Y,ce){ce===null?q.matrix.copy(Y.matrixWorld):(q.matrix.copy(ce.matrixWorld),q.matrix.invert(),q.matrix.multiply(Y.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(Y.projectionMatrix),q.projectionMatrixInverse.copy(Y.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ni*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(q){return f[q]};let De=null;function Ye(q,Y){if(u=Y.getViewerPose(c||a),g=Y,u!==null){const ce=u.views;p!==null&&(e.setRenderTargetFramebuffer(N,p.framebuffer),e.setRenderTarget(N));let Ee=!1;ce.length!==B.cameras.length&&(B.cameras.length=0,Ee=!0);for(let Xe=0;Xe<ce.length;Xe++){const rt=ce[Xe];let w=null;if(p!==null)w=p.getViewport(rt);else{const $e=d.getViewSubImage(h,rt);w=$e.viewport,Xe===0&&(e.setRenderTargetTextures(N,$e.colorTexture,$e.depthStencilTexture),e.setRenderTarget(N))}let He=L[Xe];He===void 0&&(He=new Gt,He.layers.enable(Xe),He.viewport=new nt,L[Xe]=He),He.matrix.fromArray(rt.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(rt.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(w.x,w.y,w.width,w.height),Xe===0&&(B.matrix.copy(He.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),Ee===!0&&B.cameras.push(He)}const ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const Xe=d.getDepthInformation(ce[0]);Xe&&Xe.isValid&&Xe.texture&&m.init(Xe,r.renderState)}if(ve&&ve.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let Xe=0;Xe<ce.length;Xe++){const rt=ce[Xe].camera;if(rt){let w=f[rt];w||(w=new Wl,f[rt]=w);const He=d.getCameraImage(rt);w.sourceTexture=He}}}}for(let ce=0;ce<P.length;ce++){const Ee=E[ce],ve=P[ce];Ee!==null&&ve!==void 0&&ve.update(Ee,Y,c||a)}De&&De(q,Y),Y.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Y}),g=null}const Oe=new Zl;Oe.setAnimationLoop(Ye),this.setAnimationLoop=function(q){De=q},this.dispose=function(){}}}const Xn=new Yt,p0=new it;function m0(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Ol(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,T,S,N){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,N)):f.isMeshMatcapMaterial?(s(m,f),g(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),_(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(a(m,f),f.isLineDashedMaterial&&o(m,f)):f.isPointsMaterial?l(m,f,T,S):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Ut&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Ut&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const T=e.get(f),S=T.envMap,N=T.envMapRotation;S&&(m.envMap.value=S,Xn.copy(N),Xn.x*=-1,Xn.y*=-1,Xn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Xn.y*=-1,Xn.z*=-1),m.envMapRotation.value.setFromMatrix4(p0.makeRotationFromEuler(Xn)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function a(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function o(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,T,S){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*T,m.scale.value=S*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,T){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ut&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const T=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function x0(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,S){const N=S.program;n.uniformBlockBinding(T,N)}function c(T,S){let N=r[T.id];N===void 0&&(g(T),N=u(T),r[T.id]=N,T.addEventListener("dispose",m));const P=S.program;n.updateUBOMapping(T,P);const E=e.render.frame;s[T.id]!==E&&(h(T),s[T.id]=E)}function u(T){const S=d();T.__bindingPointIndex=S;const N=i.createBuffer(),P=T.__size,E=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,N),i.bufferData(i.UNIFORM_BUFFER,P,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,N),N}function d(){for(let T=0;T<o;T++)if(a.indexOf(T)===-1)return a.push(T),T;return pt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(T){const S=r[T.id],N=T.uniforms,P=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let E=0,D=N.length;E<D;E++){const F=Array.isArray(N[E])?N[E]:[N[E]];for(let M=0,y=F.length;M<y;M++){const L=F[M];if(p(L,E,M,P)===!0){const B=L.__offset,H=Array.isArray(L.value)?L.value:[L.value];let A=0;for(let k=0;k<H.length;k++){const V=H[k],Q=_(V);typeof V=="number"||typeof V=="boolean"?(L.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,B+A,L.__data)):V.isMatrix3?(L.__data[0]=V.elements[0],L.__data[1]=V.elements[1],L.__data[2]=V.elements[2],L.__data[3]=0,L.__data[4]=V.elements[3],L.__data[5]=V.elements[4],L.__data[6]=V.elements[5],L.__data[7]=0,L.__data[8]=V.elements[6],L.__data[9]=V.elements[7],L.__data[10]=V.elements[8],L.__data[11]=0):(V.toArray(L.__data,A),A+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,L.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(T,S,N,P){const E=T.value,D=S+"_"+N;if(P[D]===void 0)return typeof E=="number"||typeof E=="boolean"?P[D]=E:P[D]=E.clone(),!0;{const F=P[D];if(typeof E=="number"||typeof E=="boolean"){if(F!==E)return P[D]=E,!0}else if(F.equals(E)===!1)return F.copy(E),!0}return!1}function g(T){const S=T.uniforms;let N=0;const P=16;for(let D=0,F=S.length;D<F;D++){const M=Array.isArray(S[D])?S[D]:[S[D]];for(let y=0,L=M.length;y<L;y++){const B=M[y],H=Array.isArray(B.value)?B.value:[B.value];for(let A=0,k=H.length;A<k;A++){const V=H[A],Q=_(V),j=N%P,K=j%Q.boundary,ne=j+K;N+=K,ne!==0&&P-ne<Q.storage&&(N+=P-ne),B.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=N,N+=Q.storage}}}const E=N%P;return E>0&&(N+=P-E),T.__size=N,T.__cache={},this}function _(T){const S={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(S.boundary=4,S.storage=4):T.isVector2?(S.boundary=8,S.storage=8):T.isVector3||T.isColor?(S.boundary=16,S.storage=12):T.isVector4?(S.boundary=16,S.storage=16):T.isMatrix3?(S.boundary=48,S.storage=48):T.isMatrix4?(S.boundary=64,S.storage=64):T.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Ie("WebGLRenderer: Unsupported uniform value type.",T),S}function m(T){const S=T.target;S.removeEventListener("dispose",m);const N=a.indexOf(S.__bindingPointIndex);a.splice(N,1),i.deleteBuffer(r[S.id]),delete r[S.id],delete s[S.id]}function f(){for(const T in r)i.deleteBuffer(r[T]);a=[],r={},s={}}return{bind:l,update:c,dispose:f}}const g0=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let pn=null;function v0(){return pn===null&&(pn=new tu(g0,32,32,za,wi),pn.minFilter=qt,pn.magFilter=qt,pn.wrapS=vn,pn.wrapT=vn,pn.generateMipmaps=!1,pn.needsUpdate=!0),pn}class Rx{constructor(e={}){const{canvas:t=ud(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Set([Ga,ka,Ba]),_=new Set([ln,Zn,Xi,qi,Oa,Va]),m=new Uint32Array(4),f=new Int32Array(4);let T=null,S=null;const N=[],P=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Un,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const E=this;let D=!1;this._outputColorSpace=Xt;let F=0,M=0,y=null,L=-1,B=null;const H=new nt,A=new nt;let k=null;const V=new Ue(0);let Q=0,j=t.width,K=t.height,ne=1,ie=null,qe=null;const De=new nt(0,0,j,K),Ye=new nt(0,0,j,K);let Oe=!1;const q=new Wr;let Y=!1,ce=!1;const Ee=new it,ve=new I,je=new nt,vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function rt(){return y===null?ne:1}let w=n;function He(b,U){return t.getContext(b,U)}try{const b={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ua}`),t.addEventListener("webglcontextlost",te,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",xe,!1),w===null){const U="webgl2";if(w=He(U,b),w===null)throw He(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw b("WebGLRenderer: "+b.message),b}let $e,at,_e,ct,Ce,Be,C,v,z,$,J,X,Me,de,Te,ye,ee,se,Pe,we,fe,Fe,R,ue;function ae(){$e=new Np(w),$e.init(),Fe=new c0(w,$e),at=new vp(w,$e,e,Fe),_e=new o0(w,$e),at.reversedDepthBuffer&&h&&_e.buffers.depth.setReversed(!0),ct=new Dp(w),Ce=new Ym,Be=new l0(w,$e,_e,Ce,at,Fe,ct),C=new bp(E),v=new Tp(E),z=new Lu(w),R=new xp(w,z),$=new Ap(w,z,ct,R),J=new Pp(w,$,z,ct),Pe=new Rp(w,at,Be),ye=new _p(Ce),X=new qm(E,C,v,$e,at,R,ye),Me=new m0(E,Ce),de=new Km,Te=new n0($e),se=new mp(E,C,v,_e,J,p,l),ee=new s0(E,J,at),ue=new x0(w,ct,at,_e),we=new gp(w,$e,ct),fe=new wp(w,$e,ct),ct.programs=X.programs,E.capabilities=at,E.extensions=$e,E.properties=Ce,E.renderLists=de,E.shadowMap=ee,E.state=_e,E.info=ct}ae();const oe=new f0(E,w);this.xr=oe,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const b=$e.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=$e.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(b){b!==void 0&&(ne=b,this.setSize(j,K,!1))},this.getSize=function(b){return b.set(j,K)},this.setSize=function(b,U,G=!0){if(oe.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}j=b,K=U,t.width=Math.floor(b*ne),t.height=Math.floor(U*ne),G===!0&&(t.style.width=b+"px",t.style.height=U+"px"),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(j*ne,K*ne).floor()},this.setDrawingBufferSize=function(b,U,G){j=b,K=U,ne=G,t.width=Math.floor(b*G),t.height=Math.floor(U*G),this.setViewport(0,0,b,U)},this.getCurrentViewport=function(b){return b.copy(H)},this.getViewport=function(b){return b.copy(De)},this.setViewport=function(b,U,G,W){b.isVector4?De.set(b.x,b.y,b.z,b.w):De.set(b,U,G,W),_e.viewport(H.copy(De).multiplyScalar(ne).round())},this.getScissor=function(b){return b.copy(Ye)},this.setScissor=function(b,U,G,W){b.isVector4?Ye.set(b.x,b.y,b.z,b.w):Ye.set(b,U,G,W),_e.scissor(A.copy(Ye).multiplyScalar(ne).round())},this.getScissorTest=function(){return Oe},this.setScissorTest=function(b){_e.setScissorTest(Oe=b)},this.setOpaqueSort=function(b){ie=b},this.setTransparentSort=function(b){qe=b},this.getClearColor=function(b){return b.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor(...arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,G=!0){let W=0;if(b){let O=!1;if(y!==null){const re=y.texture.format;O=g.has(re)}if(O){const re=y.texture.type,he=_.has(re),ge=se.getClearColor(),pe=se.getClearAlpha(),Re=ge.r,Le=ge.g,Se=ge.b;he?(m[0]=Re,m[1]=Le,m[2]=Se,m[3]=pe,w.clearBufferuiv(w.COLOR,0,m)):(f[0]=Re,f[1]=Le,f[2]=Se,f[3]=pe,w.clearBufferiv(w.COLOR,0,f))}else W|=w.COLOR_BUFFER_BIT}U&&(W|=w.DEPTH_BUFFER_BIT),G&&(W|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",te,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),se.dispose(),de.dispose(),Te.dispose(),Ce.dispose(),C.dispose(),v.dispose(),J.dispose(),R.dispose(),ue.dispose(),X.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",eo),oe.removeEventListener("sessionend",to),Bn.stop()};function te(b){b.preventDefault(),Vr("WebGLRenderer: Context Lost."),D=!0}function Z(){Vr("WebGLRenderer: Context Restored."),D=!1;const b=ct.autoReset,U=ee.enabled,G=ee.autoUpdate,W=ee.needsUpdate,O=ee.type;ae(),ct.autoReset=b,ee.enabled=U,ee.autoUpdate=G,ee.needsUpdate=W,ee.type=O}function xe(b){pt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ve(b){const U=b.target;U.removeEventListener("dispose",Ve),lt(U)}function lt(b){Qe(b),Ce.remove(b)}function Qe(b){const U=Ce.get(b).programs;U!==void 0&&(U.forEach(function(G){X.releaseProgram(G)}),b.isShaderMaterial&&X.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,G,W,O,re){U===null&&(U=vt);const he=O.isMesh&&O.matrixWorld.determinant()<0,ge=rc(b,U,G,W,O);_e.setMaterial(W,he);let pe=G.index,Re=1;if(W.wireframe===!0){if(pe=$.getWireframeAttribute(G),pe===void 0)return;Re=2}const Le=G.drawRange,Se=G.attributes.position;let Ke=Le.start*Re,et=(Le.start+Le.count)*Re;re!==null&&(Ke=Math.max(Ke,re.start*Re),et=Math.min(et,(re.start+re.count)*Re)),pe!==null?(Ke=Math.max(Ke,0),et=Math.min(et,pe.count)):Se!=null&&(Ke=Math.max(Ke,0),et=Math.min(et,Se.count));const ht=et-Ke;if(ht<0||ht===1/0)return;R.setup(O,W,ge,G,pe);let ft,st=we;if(pe!==null&&(ft=z.get(pe),st=fe,st.setIndex(ft)),O.isMesh)W.wireframe===!0?(_e.setLineWidth(W.wireframeLinewidth*rt()),st.setMode(w.LINES)):st.setMode(w.TRIANGLES);else if(O.isLine){let Ne=W.linewidth;Ne===void 0&&(Ne=1),_e.setLineWidth(Ne*rt()),O.isLineSegments?st.setMode(w.LINES):O.isLineLoop?st.setMode(w.LINE_LOOP):st.setMode(w.LINE_STRIP)}else O.isPoints?st.setMode(w.POINTS):O.isSprite&&st.setMode(w.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Zi("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))st.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const Ne=O._multiDrawStarts,dt=O._multiDrawCounts,Ze=O._multiDrawCount,Ot=pe?z.get(pe).bytesPerElement:1,ni=Ce.get(W).currentProgram.getUniforms();for(let Vt=0;Vt<Ze;Vt++)ni.setValue(w,"_gl_DrawID",Vt),st.render(Ne[Vt]/Ot,dt[Vt])}else if(O.isInstancedMesh)st.renderInstances(Ke,ht,O.count);else if(G.isInstancedBufferGeometry){const Ne=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,dt=Math.min(G.instanceCount,Ne);st.renderInstances(Ke,ht,dt)}else st.render(Ke,ht)};function rn(b,U,G){b.transparent===!0&&b.side===xn&&b.forceSinglePass===!1?(b.side=Ut,b.needsUpdate=!0,ir(b,U,G),b.side=Vn,b.needsUpdate=!0,ir(b,U,G),b.side=xn):ir(b,U,G)}this.compile=function(b,U,G=null){G===null&&(G=b),S=Te.get(G),S.init(U),P.push(S),G.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(S.pushLight(O),O.castShadow&&S.pushShadow(O))}),b!==G&&b.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(S.pushLight(O),O.castShadow&&S.pushShadow(O))}),S.setupLights();const W=new Set;return b.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const re=O.material;if(re)if(Array.isArray(re))for(let he=0;he<re.length;he++){const ge=re[he];rn(ge,G,O),W.add(ge)}else rn(re,G,O),W.add(re)}),S=P.pop(),W},this.compileAsync=function(b,U,G=null){const W=this.compile(b,U,G);return new Promise(O=>{function re(){if(W.forEach(function(he){Ce.get(he).currentProgram.isReady()&&W.delete(he)}),W.size===0){O(b);return}setTimeout(re,10)}$e.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Kt=null;function ic(b){Kt&&Kt(b)}function eo(){Bn.stop()}function to(){Bn.start()}const Bn=new Zl;Bn.setAnimationLoop(ic),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(b){Kt=b,oe.setAnimationLoop(b),b===null?Bn.stop():Bn.start()},oe.addEventListener("sessionstart",eo),oe.addEventListener("sessionend",to),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){pt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(U),U=oe.getCamera()),b.isScene===!0&&b.onBeforeRender(E,b,U,y),S=Te.get(b,P.length),S.init(U),P.push(S),Ee.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),q.setFromProjectionMatrix(Ee,nn,U.reversedDepth),ce=this.localClippingEnabled,Y=ye.init(this.clippingPlanes,ce),T=de.get(b,N.length),T.init(),N.push(T),oe.enabled===!0&&oe.isPresenting===!0){const re=E.xr.getDepthSensingMesh();re!==null&&Yr(re,U,-1/0,E.sortObjects)}Yr(b,U,0,E.sortObjects),T.finish(),E.sortObjects===!0&&T.sort(ie,qe),Xe=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,Xe&&se.addToRenderList(T,b),this.info.render.frame++,Y===!0&&ye.beginShadows();const G=S.state.shadowsArray;ee.render(G,b,U),Y===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=T.opaque,O=T.transmissive;if(S.setupLights(),U.isArrayCamera){const re=U.cameras;if(O.length>0)for(let he=0,ge=re.length;he<ge;he++){const pe=re[he];io(W,O,b,pe)}Xe&&se.render(b);for(let he=0,ge=re.length;he<ge;he++){const pe=re[he];no(T,b,pe,pe.viewport)}}else O.length>0&&io(W,O,b,U),Xe&&se.render(b),no(T,b,U);y!==null&&M===0&&(Be.updateMultisampleRenderTarget(y),Be.updateRenderTargetMipmap(y)),b.isScene===!0&&b.onAfterRender(E,b,U),R.resetDefaultState(),L=-1,B=null,P.pop(),P.length>0?(S=P[P.length-1],Y===!0&&ye.setGlobalState(E.clippingPlanes,S.state.camera)):S=null,N.pop(),N.length>0?T=N[N.length-1]:T=null};function Yr(b,U,G,W){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)G=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLight)S.pushLight(b),b.castShadow&&S.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||q.intersectsSprite(b)){W&&je.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ee);const he=J.update(b),ge=b.material;ge.visible&&T.push(b,he,ge,G,je.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||q.intersectsObject(b))){const he=J.update(b),ge=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),je.copy(b.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),je.copy(he.boundingSphere.center)),je.applyMatrix4(b.matrixWorld).applyMatrix4(Ee)),Array.isArray(ge)){const pe=he.groups;for(let Re=0,Le=pe.length;Re<Le;Re++){const Se=pe[Re],Ke=ge[Se.materialIndex];Ke&&Ke.visible&&T.push(b,he,Ke,G,je.z,Se)}}else ge.visible&&T.push(b,he,ge,G,je.z,null)}}const re=b.children;for(let he=0,ge=re.length;he<ge;he++)Yr(re[he],U,G,W)}function no(b,U,G,W){const{opaque:O,transmissive:re,transparent:he}=b;S.setupLightsView(G),Y===!0&&ye.setGlobalState(E.clippingPlanes,G),W&&_e.viewport(H.copy(W)),O.length>0&&nr(O,U,G),re.length>0&&nr(re,U,G),he.length>0&&nr(he,U,G),_e.buffers.depth.setTest(!0),_e.buffers.depth.setMask(!0),_e.buffers.color.setMask(!0),_e.setPolygonOffset(!1)}function io(b,U,G,W){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[W.id]===void 0&&(S.state.transmissionRenderTarget[W.id]=new Jn(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?wi:ln,minFilter:Kn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const re=S.state.transmissionRenderTarget[W.id],he=W.viewport||H;re.setSize(he.z*E.transmissionResolutionScale,he.w*E.transmissionResolutionScale);const ge=E.getRenderTarget(),pe=E.getActiveCubeFace(),Re=E.getActiveMipmapLevel();E.setRenderTarget(re),E.getClearColor(V),Q=E.getClearAlpha(),Q<1&&E.setClearColor(16777215,.5),E.clear(),Xe&&se.render(G);const Le=E.toneMapping;E.toneMapping=Un;const Se=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),S.setupLightsView(W),Y===!0&&ye.setGlobalState(E.clippingPlanes,W),nr(b,G,W),Be.updateMultisampleRenderTarget(re),Be.updateRenderTargetMipmap(re),$e.has("WEBGL_multisampled_render_to_texture")===!1){let Ke=!1;for(let et=0,ht=U.length;et<ht;et++){const ft=U[et],{object:st,geometry:Ne,material:dt,group:Ze}=ft;if(dt.side===xn&&st.layers.test(W.layers)){const Ot=dt.side;dt.side=Ut,dt.needsUpdate=!0,ro(st,G,W,Ne,dt,Ze),dt.side=Ot,dt.needsUpdate=!0,Ke=!0}}Ke===!0&&(Be.updateMultisampleRenderTarget(re),Be.updateRenderTargetMipmap(re))}E.setRenderTarget(ge,pe,Re),E.setClearColor(V,Q),Se!==void 0&&(W.viewport=Se),E.toneMapping=Le}function nr(b,U,G){const W=U.isScene===!0?U.overrideMaterial:null;for(let O=0,re=b.length;O<re;O++){const he=b[O],{object:ge,geometry:pe,group:Re}=he;let Le=he.material;Le.allowOverride===!0&&W!==null&&(Le=W),ge.layers.test(G.layers)&&ro(ge,U,G,pe,Le,Re)}}function ro(b,U,G,W,O,re){b.onBeforeRender(E,U,G,W,O,re),b.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),O.onBeforeRender(E,U,G,W,b,re),O.transparent===!0&&O.side===xn&&O.forceSinglePass===!1?(O.side=Ut,O.needsUpdate=!0,E.renderBufferDirect(G,U,W,O,b,re),O.side=Vn,O.needsUpdate=!0,E.renderBufferDirect(G,U,W,O,b,re),O.side=xn):E.renderBufferDirect(G,U,W,O,b,re),b.onAfterRender(E,U,G,W,O,re)}function ir(b,U,G){U.isScene!==!0&&(U=vt);const W=Ce.get(b),O=S.state.lights,re=S.state.shadowsArray,he=O.state.version,ge=X.getParameters(b,O.state,re,U,G),pe=X.getProgramCacheKey(ge);let Re=W.programs;W.environment=b.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(b.isMeshStandardMaterial?v:C).get(b.envMap||W.environment),W.envMapRotation=W.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Re===void 0&&(b.addEventListener("dispose",Ve),Re=new Map,W.programs=Re);let Le=Re.get(pe);if(Le!==void 0){if(W.currentProgram===Le&&W.lightsStateVersion===he)return ao(b,ge),Le}else ge.uniforms=X.getUniforms(b),b.onBeforeCompile(ge,E),Le=X.acquireProgram(ge,pe),Re.set(pe,Le),W.uniforms=ge.uniforms;const Se=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Se.clippingPlanes=ye.uniform),ao(b,ge),W.needsLights=ac(b),W.lightsStateVersion=he,W.needsLights&&(Se.ambientLightColor.value=O.state.ambient,Se.lightProbe.value=O.state.probe,Se.directionalLights.value=O.state.directional,Se.directionalLightShadows.value=O.state.directionalShadow,Se.spotLights.value=O.state.spot,Se.spotLightShadows.value=O.state.spotShadow,Se.rectAreaLights.value=O.state.rectArea,Se.ltc_1.value=O.state.rectAreaLTC1,Se.ltc_2.value=O.state.rectAreaLTC2,Se.pointLights.value=O.state.point,Se.pointLightShadows.value=O.state.pointShadow,Se.hemisphereLights.value=O.state.hemi,Se.directionalShadowMap.value=O.state.directionalShadowMap,Se.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Se.spotShadowMap.value=O.state.spotShadowMap,Se.spotLightMatrix.value=O.state.spotLightMatrix,Se.spotLightMap.value=O.state.spotLightMap,Se.pointShadowMap.value=O.state.pointShadowMap,Se.pointShadowMatrix.value=O.state.pointShadowMatrix),W.currentProgram=Le,W.uniformsList=null,Le}function so(b){if(b.uniformsList===null){const U=b.currentProgram.getUniforms();b.uniformsList=Ur.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function ao(b,U){const G=Ce.get(b);G.outputColorSpace=U.outputColorSpace,G.batching=U.batching,G.batchingColor=U.batchingColor,G.instancing=U.instancing,G.instancingColor=U.instancingColor,G.instancingMorph=U.instancingMorph,G.skinning=U.skinning,G.morphTargets=U.morphTargets,G.morphNormals=U.morphNormals,G.morphColors=U.morphColors,G.morphTargetsCount=U.morphTargetsCount,G.numClippingPlanes=U.numClippingPlanes,G.numIntersection=U.numClipIntersection,G.vertexAlphas=U.vertexAlphas,G.vertexTangents=U.vertexTangents,G.toneMapping=U.toneMapping}function rc(b,U,G,W,O){U.isScene!==!0&&(U=vt),Be.resetTextureUnits();const re=U.fog,he=W.isMeshStandardMaterial?U.environment:null,ge=y===null?E.outputColorSpace:y.isXRRenderTarget===!0?y.texture.colorSpace:Ti,pe=(W.isMeshStandardMaterial?v:C).get(W.envMap||he),Re=W.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Le=!!G.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Se=!!G.morphAttributes.position,Ke=!!G.morphAttributes.normal,et=!!G.morphAttributes.color;let ht=Un;W.toneMapped&&(y===null||y.isXRRenderTarget===!0)&&(ht=E.toneMapping);const ft=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,st=ft!==void 0?ft.length:0,Ne=Ce.get(W),dt=S.state.lights;if(Y===!0&&(ce===!0||b!==B)){const At=b===B&&W.id===L;ye.setState(W,b,At)}let Ze=!1;W.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==dt.state.version||Ne.outputColorSpace!==ge||O.isBatchedMesh&&Ne.batching===!1||!O.isBatchedMesh&&Ne.batching===!0||O.isBatchedMesh&&Ne.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&Ne.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&Ne.instancing===!1||!O.isInstancedMesh&&Ne.instancing===!0||O.isSkinnedMesh&&Ne.skinning===!1||!O.isSkinnedMesh&&Ne.skinning===!0||O.isInstancedMesh&&Ne.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&Ne.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&Ne.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&Ne.instancingMorph===!1&&O.morphTexture!==null||Ne.envMap!==pe||W.fog===!0&&Ne.fog!==re||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==ye.numPlanes||Ne.numIntersection!==ye.numIntersection)||Ne.vertexAlphas!==Re||Ne.vertexTangents!==Le||Ne.morphTargets!==Se||Ne.morphNormals!==Ke||Ne.morphColors!==et||Ne.toneMapping!==ht||Ne.morphTargetsCount!==st)&&(Ze=!0):(Ze=!0,Ne.__version=W.version);let Ot=Ne.currentProgram;Ze===!0&&(Ot=ir(W,U,O));let ni=!1,Vt=!1,Ri=!1;const ut=Ot.getUniforms(),Lt=Ne.uniforms;if(_e.useProgram(Ot.program)&&(ni=!0,Vt=!0,Ri=!0),W.id!==L&&(L=W.id,Vt=!0),ni||B!==b){_e.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ut.setValue(w,"projectionMatrix",b.projectionMatrix),ut.setValue(w,"viewMatrix",b.matrixWorldInverse);const It=ut.map.cameraPosition;It!==void 0&&It.setValue(w,ve.setFromMatrixPosition(b.matrixWorld)),at.logarithmicDepthBuffer&&ut.setValue(w,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ut.setValue(w,"isOrthographic",b.isOrthographicCamera===!0),B!==b&&(B=b,Vt=!0,Ri=!0)}if(O.isSkinnedMesh){ut.setOptional(w,O,"bindMatrix"),ut.setOptional(w,O,"bindMatrixInverse");const At=O.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),ut.setValue(w,"boneTexture",At.boneTexture,Be))}O.isBatchedMesh&&(ut.setOptional(w,O,"batchingTexture"),ut.setValue(w,"batchingTexture",O._matricesTexture,Be),ut.setOptional(w,O,"batchingIdTexture"),ut.setValue(w,"batchingIdTexture",O._indirectTexture,Be),ut.setOptional(w,O,"batchingColorTexture"),O._colorsTexture!==null&&ut.setValue(w,"batchingColorTexture",O._colorsTexture,Be));const Wt=G.morphAttributes;if((Wt.position!==void 0||Wt.normal!==void 0||Wt.color!==void 0)&&Pe.update(O,G,Ot),(Vt||Ne.receiveShadow!==O.receiveShadow)&&(Ne.receiveShadow=O.receiveShadow,ut.setValue(w,"receiveShadow",O.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Lt.envMap.value=pe,Lt.flipEnvMap.value=pe.isCubeTexture&&pe.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(Lt.envMapIntensity.value=U.environmentIntensity),Lt.dfgLUT!==void 0&&(Lt.dfgLUT.value=v0()),Vt&&(ut.setValue(w,"toneMappingExposure",E.toneMappingExposure),Ne.needsLights&&sc(Lt,Ri),re&&W.fog===!0&&Me.refreshFogUniforms(Lt,re),Me.refreshMaterialUniforms(Lt,W,ne,K,S.state.transmissionRenderTarget[b.id]),Ur.upload(w,so(Ne),Lt,Be)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Ur.upload(w,so(Ne),Lt,Be),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ut.setValue(w,"center",O.center),ut.setValue(w,"modelViewMatrix",O.modelViewMatrix),ut.setValue(w,"normalMatrix",O.normalMatrix),ut.setValue(w,"modelMatrix",O.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const At=W.uniformsGroups;for(let It=0,$r=At.length;It<$r;It++){const zn=At[It];ue.update(zn,Ot),ue.bind(zn,Ot)}}return Ot}function sc(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function ac(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return F},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return y},this.setRenderTargetTextures=function(b,U,G){const W=Ce.get(b);W.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),Ce.get(b.texture).__webglTexture=U,Ce.get(b.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:G,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){const G=Ce.get(b);G.__webglFramebuffer=U,G.__useDefaultFramebuffer=U===void 0};const oc=w.createFramebuffer();this.setRenderTarget=function(b,U=0,G=0){y=b,F=U,M=G;let W=!0,O=null,re=!1,he=!1;if(b){const pe=Ce.get(b);if(pe.__useDefaultFramebuffer!==void 0)_e.bindFramebuffer(w.FRAMEBUFFER,null),W=!1;else if(pe.__webglFramebuffer===void 0)Be.setupRenderTarget(b);else if(pe.__hasExternalTextures)Be.rebindTextures(b,Ce.get(b.texture).__webglTexture,Ce.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Se=b.depthTexture;if(pe.__boundDepthTexture!==Se){if(Se!==null&&Ce.has(Se)&&(b.width!==Se.image.width||b.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Be.setupDepthRenderbuffer(b)}}const Re=b.texture;(Re.isData3DTexture||Re.isDataArrayTexture||Re.isCompressedArrayTexture)&&(he=!0);const Le=Ce.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Le[U])?O=Le[U][G]:O=Le[U],re=!0):b.samples>0&&Be.useMultisampledRTT(b)===!1?O=Ce.get(b).__webglMultisampledFramebuffer:Array.isArray(Le)?O=Le[G]:O=Le,H.copy(b.viewport),A.copy(b.scissor),k=b.scissorTest}else H.copy(De).multiplyScalar(ne).floor(),A.copy(Ye).multiplyScalar(ne).floor(),k=Oe;if(G!==0&&(O=oc),_e.bindFramebuffer(w.FRAMEBUFFER,O)&&W&&_e.drawBuffers(b,O),_e.viewport(H),_e.scissor(A),_e.setScissorTest(k),re){const pe=Ce.get(b.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+U,pe.__webglTexture,G)}else if(he){const pe=U;for(let Re=0;Re<b.textures.length;Re++){const Le=Ce.get(b.textures[Re]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+Re,Le.__webglTexture,G,pe)}}else if(b!==null&&G!==0){const pe=Ce.get(b.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,pe.__webglTexture,G)}L=-1},this.readRenderTargetPixels=function(b,U,G,W,O,re,he,ge=0){if(!(b&&b.isWebGLRenderTarget)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let pe=Ce.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&he!==void 0&&(pe=pe[he]),pe){_e.bindFramebuffer(w.FRAMEBUFFER,pe);try{const Re=b.textures[ge],Le=Re.format,Se=Re.type;if(!at.textureFormatReadable(Le)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(Se)){pt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-W&&G>=0&&G<=b.height-O&&(b.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+ge),w.readPixels(U,G,W,O,Fe.convert(Le),Fe.convert(Se),re))}finally{const Re=y!==null?Ce.get(y).__webglFramebuffer:null;_e.bindFramebuffer(w.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(b,U,G,W,O,re,he,ge=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let pe=Ce.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&he!==void 0&&(pe=pe[he]),pe)if(U>=0&&U<=b.width-W&&G>=0&&G<=b.height-O){_e.bindFramebuffer(w.FRAMEBUFFER,pe);const Re=b.textures[ge],Le=Re.format,Se=Re.type;if(!at.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(Se))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ke=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Ke),w.bufferData(w.PIXEL_PACK_BUFFER,re.byteLength,w.STREAM_READ),b.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+ge),w.readPixels(U,G,W,O,Fe.convert(Le),Fe.convert(Se),0);const et=y!==null?Ce.get(y).__webglFramebuffer:null;_e.bindFramebuffer(w.FRAMEBUFFER,et);const ht=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await hd(w,ht,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Ke),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,re),w.deleteBuffer(Ke),w.deleteSync(ht),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,G=0){const W=Math.pow(2,-G),O=Math.floor(b.image.width*W),re=Math.floor(b.image.height*W),he=U!==null?U.x:0,ge=U!==null?U.y:0;Be.setTexture2D(b,0),w.copyTexSubImage2D(w.TEXTURE_2D,G,0,0,he,ge,O,re),_e.unbindTexture()};const lc=w.createFramebuffer(),cc=w.createFramebuffer();this.copyTextureToTexture=function(b,U,G=null,W=null,O=0,re=null){re===null&&(O!==0?(Zi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=O,O=0):re=0);let he,ge,pe,Re,Le,Se,Ke,et,ht;const ft=b.isCompressedTexture?b.mipmaps[re]:b.image;if(G!==null)he=G.max.x-G.min.x,ge=G.max.y-G.min.y,pe=G.isBox3?G.max.z-G.min.z:1,Re=G.min.x,Le=G.min.y,Se=G.isBox3?G.min.z:0;else{const Wt=Math.pow(2,-O);he=Math.floor(ft.width*Wt),ge=Math.floor(ft.height*Wt),b.isDataArrayTexture?pe=ft.depth:b.isData3DTexture?pe=Math.floor(ft.depth*Wt):pe=1,Re=0,Le=0,Se=0}W!==null?(Ke=W.x,et=W.y,ht=W.z):(Ke=0,et=0,ht=0);const st=Fe.convert(U.format),Ne=Fe.convert(U.type);let dt;U.isData3DTexture?(Be.setTexture3D(U,0),dt=w.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Be.setTexture2DArray(U,0),dt=w.TEXTURE_2D_ARRAY):(Be.setTexture2D(U,0),dt=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,U.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,U.unpackAlignment);const Ze=w.getParameter(w.UNPACK_ROW_LENGTH),Ot=w.getParameter(w.UNPACK_IMAGE_HEIGHT),ni=w.getParameter(w.UNPACK_SKIP_PIXELS),Vt=w.getParameter(w.UNPACK_SKIP_ROWS),Ri=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,ft.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ft.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Re),w.pixelStorei(w.UNPACK_SKIP_ROWS,Le),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Se);const ut=b.isDataArrayTexture||b.isData3DTexture,Lt=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){const Wt=Ce.get(b),At=Ce.get(U),It=Ce.get(Wt.__renderTarget),$r=Ce.get(At.__renderTarget);_e.bindFramebuffer(w.READ_FRAMEBUFFER,It.__webglFramebuffer),_e.bindFramebuffer(w.DRAW_FRAMEBUFFER,$r.__webglFramebuffer);for(let zn=0;zn<pe;zn++)ut&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ce.get(b).__webglTexture,O,Se+zn),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ce.get(U).__webglTexture,re,ht+zn)),w.blitFramebuffer(Re,Le,he,ge,Ke,et,he,ge,w.DEPTH_BUFFER_BIT,w.NEAREST);_e.bindFramebuffer(w.READ_FRAMEBUFFER,null),_e.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(O!==0||b.isRenderTargetTexture||Ce.has(b)){const Wt=Ce.get(b),At=Ce.get(U);_e.bindFramebuffer(w.READ_FRAMEBUFFER,lc),_e.bindFramebuffer(w.DRAW_FRAMEBUFFER,cc);for(let It=0;It<pe;It++)ut?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Wt.__webglTexture,O,Se+It):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Wt.__webglTexture,O),Lt?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,At.__webglTexture,re,ht+It):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,At.__webglTexture,re),O!==0?w.blitFramebuffer(Re,Le,he,ge,Ke,et,he,ge,w.COLOR_BUFFER_BIT,w.NEAREST):Lt?w.copyTexSubImage3D(dt,re,Ke,et,ht+It,Re,Le,he,ge):w.copyTexSubImage2D(dt,re,Ke,et,Re,Le,he,ge);_e.bindFramebuffer(w.READ_FRAMEBUFFER,null),_e.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Lt?b.isDataTexture||b.isData3DTexture?w.texSubImage3D(dt,re,Ke,et,ht,he,ge,pe,st,Ne,ft.data):U.isCompressedArrayTexture?w.compressedTexSubImage3D(dt,re,Ke,et,ht,he,ge,pe,st,ft.data):w.texSubImage3D(dt,re,Ke,et,ht,he,ge,pe,st,Ne,ft):b.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,re,Ke,et,he,ge,st,Ne,ft.data):b.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,re,Ke,et,ft.width,ft.height,st,ft.data):w.texSubImage2D(w.TEXTURE_2D,re,Ke,et,he,ge,st,Ne,ft);w.pixelStorei(w.UNPACK_ROW_LENGTH,Ze),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ot),w.pixelStorei(w.UNPACK_SKIP_PIXELS,ni),w.pixelStorei(w.UNPACK_SKIP_ROWS,Vt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ri),re===0&&U.generateMipmaps&&w.generateMipmap(dt),_e.unbindTexture()},this.initRenderTarget=function(b){Ce.get(b).__webglFramebuffer===void 0&&Be.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Be.setTextureCube(b,0):b.isData3DTexture?Be.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Be.setTexture2DArray(b,0):Be.setTexture2D(b,0),_e.unbindTexture()},this.resetState=function(){F=0,M=0,y=null,_e.reset(),R.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),t.unpackColorSpace=Je._getUnpackColorSpace()}}class _0 extends mt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new be(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element&&t.element instanceof t.element.ownerDocument.defaultView.Element&&t.element.parentNode!==null&&t.element.remove()})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const vi=new I,hl=new it,fl=new it,pl=new I,ml=new I;class b0{constructor(e={}){const t=this;let n,r,s,a;const o={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.sortObjects=!0,this.getSize=function(){return{width:n,height:r}},this.render=function(g,_){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),_.parent===null&&_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),hl.copy(_.matrixWorldInverse),fl.multiplyMatrices(_.projectionMatrix,hl),u(g,g,_),this.sortObjects&&p(g)},this.setSize=function(g,_){n=g,r=_,s=n/2,a=r/2,l.style.width=g+"px",l.style.height=_+"px"};function c(g){g.isCSS2DObject&&(g.element.style.display="none");for(let _=0,m=g.children.length;_<m;_++)c(g.children[_])}function u(g,_,m){if(g.visible===!1){c(g);return}if(g.isCSS2DObject){vi.setFromMatrixPosition(g.matrixWorld),vi.applyMatrix4(fl);const f=vi.z>=-1&&vi.z<=1&&g.layers.test(m.layers)===!0,T=g.element;T.style.display=f===!0?"":"none",f===!0&&(g.onBeforeRender(t,_,m),T.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(vi.x*s+s)+"px,"+(-vi.y*a+a)+"px)",T.parentNode!==l&&l.appendChild(T),g.onAfterRender(t,_,m));const S={distanceToCameraSquared:d(m,g)};o.objects.set(g,S)}for(let f=0,T=g.children.length;f<T;f++)u(g.children[f],_,m)}function d(g,_){return pl.setFromMatrixPosition(g.matrixWorld),ml.setFromMatrixPosition(_.matrixWorld),pl.distanceToSquared(ml)}function h(g){const _=[];return g.traverseVisible(function(m){m.isCSS2DObject&&_.push(m)}),_}function p(g){const _=h(g).sort(function(f,T){if(f.renderOrder!==T.renderOrder)return T.renderOrder-f.renderOrder;const S=o.objects.get(f).distanceToCameraSquared,N=o.objects.get(T).distanceToCameraSquared;return S-N}),m=_.length;for(let f=0,T=_.length;f<T;f++)_[f].element.style.zIndex=m-f}}}function wr(i){return function(){return i}}function y0(i,e,t,n){var r,s,a=wr(.1),o,l;typeof i!="function"&&(i=wr(+i)),e==null&&(e=0),t==null&&(t=0),n==null&&(n=0);function c(d){for(var h=0,p=r.length;h<p;++h){var g=r[h],_=g.x-e||1e-6,m=(g.y||0)-t||1e-6,f=(g.z||0)-n||1e-6,T=Math.sqrt(_*_+m*m+f*f),S=(l[h]-T)*o[h]*d/T;g.vx+=_*S,s>1&&(g.vy+=m*S),s>2&&(g.vz+=f*S)}}function u(){if(r){var d,h=r.length;for(o=new Array(h),l=new Array(h),d=0;d<h;++d)l[d]=+i(r[d],d,r),o[d]=isNaN(l[d])?0:+a(r[d],d,r)}}return c.initialize=function(d,...h){r=d,s=h.find(p=>[1,2,3].includes(p))||2,u()},c.strength=function(d){return arguments.length?(a=typeof d=="function"?d:wr(+d),u(),c):a},c.radius=function(d){return arguments.length?(i=typeof d=="function"?d:wr(+d),u(),c):i},c.x=function(d){return arguments.length?(e=+d,c):e},c.y=function(d){return arguments.length?(t=+d,c):t},c.z=function(d){return arguments.length?(n=+d,c):n},c}function M0({data:i}){const[e,t]=Ae.useState(null),n=Ae.useRef(null),[r,s]=Ae.useState({width:800,height:600}),[a,o]=Ae.useState("3d"),[l,c]=Ae.useState(!1),u=Ae.useMemo(()=>[new b0],[]),d=Ae.useRef();Ae.useEffect(()=>{dc(()=>import("./react-force-graph-3d-CQANO5bq.js"),__vite__mapDeps([0,1,2,3,4])).then(A=>{t(()=>A.default),c(!0)})},[]);const[h,p]=Ae.useState(new Set),[g,_]=Ae.useState(new Set),[m,f]=Ae.useState(null),[T,S]=Ae.useState(1),N=Ae.useCallback(()=>{p(h),_(g)},[h,g]);Ae.useEffect(()=>{if(!d.current)return;const A=d.current;if(a==="2d"){A.cameraPosition&&A.cameraPosition({x:0,y:0,z:1600},{x:0,y:0,z:0},1e3);const V=A.controls?A.controls():void 0;V&&(V.enableRotate=!1,V.enableZoom=!0,V.enablePan=!0)}else{const k=A.controls?A.controls():void 0;k&&(k.enableRotate=!0)}},[a,l]);const P=Ae.useCallback(A=>{if(!d.current)return;const V=1+150/Math.hypot(A.x,A.y,A.z);d.current.cameraPosition({x:A.x*V,y:A.y*V,z:A.z*V},A,2e3)},[]);Ae.useEffect(()=>{if(!d.current)return;let A;const k=()=>{if(d.current){const V=d.current.camera(),Q=V.position.length();S(Q);const j=i.nodes||[];j.length>0&&j.forEach(K=>{if(K.cssObject){const ne=K.cssObject.querySelector(".node-scale-wrapper");if(ne){const ie=new I(K.x,K.y,K.z||0),De=900/V.position.distanceTo(ie),Ye=Math.min(Math.max(De,.08),2.5);ne.style.transform=`scale(${Ye})`}}})}A=requestAnimationFrame(k)};return k(),()=>{A&&cancelAnimationFrame(A)}},[a,i]);const E=Ae.useCallback(A=>{h.clear(),g.clear(),A&&(h.add(A),i.links.forEach(k=>{(k.source.id===A.id||k.target.id===A.id)&&(g.add(k),h.add(k.source),h.add(k.target))})),f(A||null),N()},[i.links,N,h,g]),D=Ae.useCallback(A=>{h.clear(),g.clear(),A&&(g.add(A),h.add(A.source),h.add(A.target)),N()},[N,h,g]),F=Ae.useRef(()=>{}),M=Ae.useRef(()=>{});Ae.useEffect(()=>{F.current=E},[E]),Ae.useEffect(()=>{M.current=P},[P]),Ae.useEffect(()=>{if(d.current){const A=d.current;A.d3Force("charge").strength(a==="2d"?-3e3:-5e3),A.d3Force("charge").distanceMax(a==="2d"?2e3:4e3),A.d3Force("link").distance(a==="2d"?400:300),A.d3Force("center")&&A.d3Force("center").strength(0);const k=a==="2d"?1200:1e3;A.d3Force("radial",y0(k,0,0,0).strength(V=>V.group==="topic"?1:0)),A.d3ReheatSimulation()}},[e,i]),Ae.useEffect(()=>{i&&i.nodes&&i.nodes.forEach(A=>{if(A.cssObject){const k=m&&!h.has(A);A.cssObject.style.opacity=k?"0.2":"1";const V=A.cssObject.querySelector(".logo-container");V&&(!k&&m?(V.style.boxShadow="0 0 0 2px #4f46e5",V.style.transform="translate(-50%, -50%) scale(1.2)"):(V.style.boxShadow="0 2px 5px rgba(0,0,0,0.2)",V.style.transform="translate(-50%, -50%) scale(1)"))}})},[m,h,i]),Ae.useEffect(()=>{const A=()=>{n.current&&setTimeout(()=>{n.current&&s({width:n.current.clientWidth,height:600})},100)};return window.addEventListener("resize",A),A(),setTimeout(A,500),()=>window.removeEventListener("resize",A)},[]);const y=Ae.useCallback(A=>{const k=new zi,V=new Ka(1),Q=new qa({opacity:0,transparent:!0}),j=new En(V,Q);k.add(j);const K=document.createElement("div");if(K.style.width="0px",K.style.height="0px",K.style.display="flex",K.style.alignItems="center",K.style.justifyContent="center",K.style.zIndex="1",K.style.pointerEvents="auto",K.style.userSelect="none",K.style.cursor="pointer",K.style.position="relative",K.addEventListener("mouseenter",()=>{F.current&&F.current(A)}),K.addEventListener("mouseleave",()=>{F.current&&F.current(null)}),K.addEventListener("click",ie=>{ie.stopPropagation(),M.current&&M.current(A)}),K.style.opacity="1",K.style.transition="opacity 0.2s ease-in-out",A.group==="topic"){const ie=document.createElement("div");ie.textContent=A.name,ie.style.color="#5c5f62",ie.style.background="rgba(255, 255, 255, 0.7)",ie.style.padding="4px 8px",ie.style.borderRadius="4px",ie.style.border="1px solid rgba(200, 200, 200, 0.5)",ie.style.borderLeft=`3px solid ${A.color||"#8b5cf6"}`,ie.style.fontSize="12px",ie.style.fontWeight="600",ie.style.whiteSpace="nowrap",ie.style.boxShadow="0 1px 3px rgba(0,0,0,0.05)",ie.style.position="absolute",ie.style.top="50%",ie.style.left="50%",ie.style.transform="translate(-50%, -50%)",K.appendChild(ie)}else{const ie=document.createElement("div");ie.className="node-scale-wrapper",ie.style.position="relative",ie.style.width="0px",ie.style.height="0px",ie.style.display="flex",ie.style.alignItems="center",ie.style.justifyContent="center",ie.style.transformOrigin="center";const qe="32px",De=document.createElement("div");De.className="logo-container",De.style.width=qe,De.style.height=qe,De.style.borderRadius="50%",De.style.background="#fff",De.style.overflow="hidden",De.style.display="flex",De.style.alignItems="center",De.style.justifyContent="center",De.style.boxShadow="0 2px 5px rgba(0,0,0,0.2)",De.style.position="absolute",De.style.top="50%",De.style.left="50%",De.style.transform="translate(-50%, -50%)",De.style.transition="transform 0.2s ease, box-shadow 0.2s ease";const Ye=document.createElement("img");Ye.src=`https://www.google.com/s2/favicons?domain=${A.name}&sz=64`,Ye.style.width="100%",Ye.style.height="100%",Ye.style.objectFit="contain",Ye.onerror=()=>{Ye.style.display="none";const Y=document.createElement("div");Y.textContent=(A.name||"?").charAt(0).toUpperCase(),Y.style.width="100%",Y.style.height="100%",Y.style.display="flex",Y.style.alignItems="center",Y.style.justifyContent="center",Y.style.fontWeight="bold",Y.style.color="#fff",Y.style.background=A.color||"#ccc",De.appendChild(Y)},De.appendChild(Ye),ie.appendChild(De),K.appendChild(ie);const Oe=document.createElement("div");if(Oe.className="node-tooltip",Oe.style.position="absolute",Oe.style.bottom="24px",Oe.style.left="50%",Oe.style.transform="translateX(-50%)",Oe.style.background="#fff",Oe.style.padding="8px 12px",Oe.style.borderRadius="8px",Oe.style.boxShadow="0 4px 12px rgba(0,0,0,0.15)",Oe.style.border="1px solid #e1e3e5",Oe.style.minWidth="180px",Oe.style.zIndex="100",Oe.style.display="none",Oe.style.pointerEvents="none",Oe.style.textAlign="center",A.group==="topic"){const Y=A.topPrompts?A.topPrompts.map(ve=>`<div style="font-size: 10px; color: #5c5f62; margin-bottom: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 200px;">• ${ve}</div>`).join(""):"",ce=A.sov||0;let Ee="#ef4444";ce>60?Ee="#10b981":ce>30&&(Ee="#f59e0b"),Oe.innerHTML=`
                    <div style="font-weight: 600; font-size: 13px; color: #202223; margin-bottom: 4px; border-bottom: 1px solid #f1f2f4; padding-bottom: 4px;">Category: ${A.name}</div>
                    
                    <div style="margin-bottom: 8px;">
                         <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
                            <span style="font-size: 11px; color: #6d7175;">AI Visibility Score</span>
                            <span style="font-size: 11px; font-weight: 700; color: ${Ee};">${ce}%</span>
                         </div>
                         <div style="width: 100%; height: 4px; background: #e1e3e5; border-radius: 2px;">
                            <div style="width: ${ce}%; height: 100%; background: ${Ee}; border-radius: 2px;"></div>
                         </div>
                    </div>

                    <div style="font-size: 11px; color: #6d7175; margin-bottom: 6px;">
                        <span style="font-weight: 600; color: #202223;">${A.citationCount||0}</span> Sources citing this category
                    </div>
                    ${Y?`
                        <div style="font-size: 10px; font-weight: 600; color: #202223; margin-bottom: 2px;">Driving Search Prompts:</div>
                        ${Y}
                    `:""}
                `}else{const Y=A.citationCount||A.val||1;let ce="Recommendation Source";A.group==="competitor"?ce="Competitor":A.group==="owned"?ce="Your Brand":A.group==="social"?ce="Social Discussion":A.group==="editorial"&&(ce="Editorial / Blog");let Ee="--",ve="#202223";A.avgSentiment!==null&&A.avgSentiment!==void 0&&(A.avgSentiment>=60?(Ee="Positive",ve="#10b981"):A.avgSentiment<=40?(Ee="Negative",ve="#ef4444"):(Ee="Neutral",ve="#d97706"));const je=A.myMentions>0,vt=je?"Visible":"Missing",Xe=je?"#10b981":"#d97706",rt=A.topPrompts?A.topPrompts.map(He=>`<div style="font-size: 10px; color: #5c5f62; margin-bottom: 2px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 200px;">• ${He}</div>`).join(""):"";let w="";A.topBrands&&A.topBrands.length>0&&A.group!=="competitor"&&A.group!=="owned"&&(w=A.topBrands.map(He=>`<span style="background: #f1f2f4; color: #202223; padding: 2px 6px; border-radius: 4px; font-size: 10px; margin-right: 4px; margin-bottom: 4px; display: inline-block;">${He}</span>`).join("")),Oe.innerHTML=`
                    <div style="font-weight: 600; font-size: 13px; color: #202223; margin-bottom: 2px;">${A.name}</div>
                    <div style="font-size: 11px; color: ${A.color}; font-weight: 500; margin-bottom: 6px;">${ce}</div>
                    
                    <div style="display: flex; align-items: center; justify-content: space-between; gap: 12px; border-top: 1px solid #f1f2f4; border-bottom: 1px solid #f1f2f4; padding: 6px 0; margin-bottom: 6px;">
                         <div style="text-align: center; flex: 1;">
                            <div style="font-size: 10px; color: #6d7175;">Citations</div>
                            <div style="font-weight: 600; font-size: 12px; color: #202223;">${Y}</div>
                        </div>
                         <div style="text-align: center; flex: 1; border-left: 1px solid #f1f2f4;">
                            <div style="font-size: 10px; color: #6d7175;">Sentiment</div>
                            <div style="font-weight: 600; font-size: 12px; color: ${ve};">${Ee}</div>
                        </div>
                         <div style="text-align: center; flex: 1; border-left: 1px solid #f1f2f4;">
                            <div style="font-size: 10px; color: #6d7175;">Status</div>
                            <div style="font-weight: 600; font-size: 12px; color: ${Xe};">${vt}</div>
                        </div>
                    </div>

                    ${w?`
                        <div style="margin-bottom: 6px;">
                            <div style="font-size: 10px; font-weight: 600; color: #202223; margin-bottom: 4px;">Brands Discussed:</div>
                            <div style="display: flex; flex-wrap: wrap;">${w}</div>
                        </div>
                    `:""}

                    ${rt?`
                        <div style="padding-top: 2px;">
                            <div style="font-size: 10px; font-weight: 600; color: #202223; margin-bottom: 2px;">Top Prompts:</div>
                            ${rt}
                        </div>
                    `:""}
                `}K.appendChild(Oe);const q=document.createElement("div");q.className="node-label",q.textContent=A.name,q.style.color="#374151",q.style.background="rgba(255, 255, 255, 0.9)",q.style.padding="2px 6px",q.style.borderRadius="3px",q.style.fontSize="10px",q.style.whiteSpace="nowrap",q.style.position="absolute",q.style.top="24px",q.style.left="50%",q.style.transform="translateX(-50%)",q.style.opacity="0",q.style.transition="opacity 0.2s ease",K.appendChild(q)}const ne=new _0(K);return ne.position.set(0,0,0),k.add(ne),A.cssObject=K,k},[]);Ae.useEffect(()=>{i&&i.nodes&&i.nodes.forEach(k=>{if(k.cssObject){const V=k.cssObject.querySelector(".node-label"),Q=k.cssObject.querySelector(".node-tooltip");if(V){const j=T<180;V.style.opacity=j?"1":"0",V.style.visibility=j?"visible":"hidden",V.style.display=j?"block":"none"}Q&&(m&&m.id===k.id?(Q.style.display="block",Q.style.opacity="1",k.cssObject.style.zIndex="1000"):(Q.style.display="none",Q.style.opacity="0",k.cssObject.style.zIndex="1"))}})},[T,i,m]);const L=Ae.useCallback(()=>{if(!d.current)return;const k=d.current.camera().position;d.current.cameraPosition({x:k.x*.8,y:k.y*.8,z:k.z*.8},{x:0,y:0,z:0},500)},[]),B=Ae.useCallback(()=>{if(!d.current)return;const k=d.current.camera().position;d.current.cameraPosition({x:k.x*1.2,y:k.y*1.2,z:k.z*1.2},{x:0,y:0,z:0},500)},[]),H=Ae.useCallback(()=>{if(!d.current)return;const A=a==="2d"?1600:800;d.current.cameraPosition({x:0,y:0,z:A},{x:0,y:0,z:0},1e3)},[a]);return e?x.jsxDEV(Fn,{children:x.jsxDEV(St,{gap:"400",children:[x.jsxDEV("div",{style:{padding:"8px 4px 0 4px"},children:x.jsxDEV(St,{gap:"200",children:x.jsxDEV(_t,{align:"space-between",blockAlign:"start",children:[x.jsxDEV("div",{style:{flex:1,paddingRight:"16px"},children:x.jsxDEV(St,{gap:"100",children:[x.jsxDEV(_t,{gap:"200",align:"start",blockAlign:"center",children:[x.jsxDEV(me,{as:"h2",variant:"headingSm",children:"Citation Galaxy"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:635,columnNumber:41},this),x.jsxDEV("div",{style:{padding:"2px 6px",background:"#f1f2f4",borderRadius:"4px",fontSize:"11px",color:"#6d7175",fontWeight:500},children:"BETA"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:636,columnNumber:41},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:634,columnNumber:37},this),x.jsxDEV(me,{as:"p",variant:"bodySm",tone:"subdued",children:"Explore the semantic universe of your brand. Central hubs represent key search topics, surrounded by orbiting domains that influence AI visibility. Clusters farther apart have less semantic overlap."},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:640,columnNumber:37},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:633,columnNumber:33},this)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:632,columnNumber:29},this),x.jsxDEV(_t,{gap:"200",blockAlign:"center",children:[x.jsxDEV(uc,{variant:"segmented",children:[x.jsxDEV(_i,{pressed:a==="3d",onClick:()=>o("3d"),size:"micro",children:"3D View"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:650,columnNumber:37},this),x.jsxDEV(_i,{pressed:a==="2d",onClick:()=>o("2d"),size:"micro",children:"2D Flat"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:657,columnNumber:37},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:649,columnNumber:33},this),x.jsxDEV(_i,{icon:yl,onClick:H,size:"micro",accessibilityLabel:"Reset View"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:665,columnNumber:33},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:647,columnNumber:29},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:631,columnNumber:25},this)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:630,columnNumber:21},this)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:629,columnNumber:17},this),x.jsxDEV("div",{ref:n,style:{height:600,overflow:"hidden",borderRadius:"12px",border:"1px solid #e1e3e5",background:"#ffffff",position:"relative"},children:[x.jsxDEV("div",{style:{position:"absolute",top:"12px",right:"12px",zIndex:1e3,display:"flex",flexDirection:"column",gap:"8px",alignItems:"flex-end"},children:x.jsxDEV("div",{style:{display:"flex",flexDirection:"column",background:"#fff",borderRadius:"8px",padding:"4px",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",border:"1px solid #e1e3e5"},children:[x.jsxDEV("div",{onClick:L,style:{padding:"6px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",borderBottom:"1px solid #f1f2f4"},title:"Zoom In",children:x.jsxDEV(ot,{source:hc,tone:"base"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:690,columnNumber:33},this)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:685,columnNumber:29},this),x.jsxDEV("div",{onClick:B,style:{padding:"6px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"},title:"Zoom Out",children:x.jsxDEV(ot,{source:xl,tone:"base"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:697,columnNumber:33},this)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:692,columnNumber:29},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:684,columnNumber:25},this)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:682,columnNumber:21},this),x.jsxDEV(e,{ref:d,graphData:i,numDimensions:a==="2d"?2:3,width:r.width,height:r.height,extraRenderers:u,nodeThreeObject:y,nodeLabel:"name",backgroundColor:"#ffffff",linkColor:A=>g.has(A)?"#4f46e5":"#e5e7eb",linkWidth:A=>g.has(A)?2:1,linkOpacity:.6,linkCurvature:.25,onNodeClick:P,onNodeHover:E,onLinkHover:D,showNavInfo:!1,enableNodeDrag:!1,warmupTicks:100,cooldownTicks:0},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:702,columnNumber:21},this),x.jsxDEV("div",{style:{position:"absolute",bottom:"20px",left:"20px",zIndex:1e3,background:"rgba(255, 255, 255, 0.9)",padding:"12px",borderRadius:"8px",border:"1px solid #e1e3e5",boxShadow:"0 4px 6px -1px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(4px)"},children:x.jsxDEV(St,{gap:"200",children:[x.jsxDEV(me,{as:"p",variant:"bodyXs",fontWeight:"bold",tone:"subdued",children:"NODE TYPES"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:744,columnNumber:29},this),x.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[x.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[x.jsxDEV("div",{style:{width:10,height:10,borderRadius:"2px",background:"#8b5cf6"}},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:747,columnNumber:37},this),x.jsxDEV(me,{as:"span",variant:"bodyXs",children:"Topics (Text)"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:748,columnNumber:37},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:746,columnNumber:33},this),x.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[x.jsxDEV("div",{style:{width:10,height:10,borderRadius:"50%",background:"#10b981"}},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:751,columnNumber:37},this),x.jsxDEV(me,{as:"span",variant:"bodyXs",children:"Owned Domains (Logos)"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:752,columnNumber:37},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:750,columnNumber:33},this),x.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[x.jsxDEV("div",{style:{width:10,height:10,borderRadius:"50%",background:"#ef4444"}},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:755,columnNumber:37},this),x.jsxDEV(me,{as:"span",variant:"bodyXs",children:"Competitors (Logos)"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:756,columnNumber:37},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:754,columnNumber:33},this),x.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[x.jsxDEV("div",{style:{width:10,height:10,borderRadius:"50%",background:"#f59e0b"}},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:759,columnNumber:37},this),x.jsxDEV(me,{as:"span",variant:"bodyXs",children:"Editorial (Logos)"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:760,columnNumber:37},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:758,columnNumber:33},this),x.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[x.jsxDEV("div",{style:{width:10,height:10,borderRadius:"50%",background:"#9ca3af"}},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:763,columnNumber:37},this),x.jsxDEV(me,{as:"span",variant:"bodyXs",children:"Other (Logos)"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:764,columnNumber:37},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:762,columnNumber:33},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:745,columnNumber:29},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:743,columnNumber:25},this)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:731,columnNumber:21},this),x.jsxDEV("div",{style:{position:"absolute",bottom:"20px",left:"50%",transform:"translateX(-50%)",zIndex:1e3,background:"rgba(255, 255, 255, 0.9)",padding:"8px 16px",borderRadius:"20px",border:"1px solid #e1e3e5",boxShadow:"0 2px 4px rgba(0, 0, 0, 0.05)",backdropFilter:"blur(4px)",display:"flex",gap:"16px",alignItems:"center",pointerEvents:"none"},children:[x.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[x.jsxDEV("div",{style:{width:"4px",height:"4px",borderRadius:"50%",background:"#9ca3af"}},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:789,columnNumber:29},this),x.jsxDEV(me,{as:"span",variant:"bodyXs",tone:"subdued",children:"Left-click: Rotate"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:790,columnNumber:29},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:788,columnNumber:25},this),x.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[x.jsxDEV("div",{style:{width:"4px",height:"4px",borderRadius:"50%",background:"#9ca3af"}},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:793,columnNumber:29},this),x.jsxDEV(me,{as:"span",variant:"bodyXs",tone:"subdued",children:"Scroll: Zoom"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:794,columnNumber:29},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:792,columnNumber:25},this),x.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[x.jsxDEV("div",{style:{width:"4px",height:"4px",borderRadius:"50%",background:"#9ca3af"}},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:797,columnNumber:29},this),x.jsxDEV(me,{as:"span",variant:"bodyXs",tone:"subdued",children:"Right-click: Pan"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:798,columnNumber:29},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:796,columnNumber:25},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:771,columnNumber:21},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:671,columnNumber:17},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:627,columnNumber:13},this)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:626,columnNumber:9},this):x.jsxDEV(Fn,{children:x.jsxDEV("div",{style:{height:600,background:"#f9fafb",borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"center"},children:x.jsxDEV(me,{as:"p",tone:"subdued",children:"Loading 3D Graph..."},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:620,columnNumber:17},this)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:619,columnNumber:13},this)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/CitationGraph.tsx",lineNumber:618,columnNumber:9},this)}const Na=i=>{let e=0;for(let n=0;n<i.length;n++)e=i.charCodeAt(n)+((e<<5)-e);const t=(e&16777215).toString(16).toUpperCase();return"#"+"00000".substring(0,6-t.length)+t},S0=({active:i,payload:e})=>{var t;if(i&&e&&e.length){const n=e[0],r=((t=n.payload)==null?void 0:t.name)||"",s=n.value||0,a=o=>x.jsxDEV("img",{src:`https://www.google.com/s2/favicons?domain=${o}&sz=16`,alt:o,style:{width:"16px",height:"16px",borderRadius:"4px"},onError:l=>{l.target.style.display="none"}},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:35,columnNumber:9},void 0);return x.jsxDEV("div",{style:{backgroundColor:"#2c2c2c",padding:"8px 12px",borderRadius:"6px",boxShadow:"0 2px 8px rgba(0,0,0,0.15)",fontSize:"12px",fontFamily:'-apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif',border:"none"},children:x.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a(r),x.jsxDEV("span",{style:{color:"#ffffff",fontSize:"12px",lineHeight:"16px"},children:r},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:61,columnNumber:11},void 0),x.jsxDEV("span",{style:{fontWeight:500,color:"#ffffff",fontSize:"12px",lineHeight:"16px"},children:[Number(s).toFixed(1),"%"]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:66,columnNumber:11},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:59,columnNumber:9},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:47,columnNumber:7},void 0)}return null},E0=({active:i,payload:e,label:t})=>{if(i&&e&&e.length){const n=[...e].sort((s,a)=>(a.value||0)-(s.value||0)),r=t?`${t}, 2025`:"";return x.jsxDEV("div",{style:{backgroundColor:"#2c2c2c",padding:"12px 16px",borderRadius:"8px",boxShadow:"0 4px 12px rgba(0,0,0,0.2)",minWidth:"220px",fontSize:"12px",fontFamily:'-apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif'},children:[x.jsxDEV("div",{style:{marginBottom:"12px",fontWeight:500,color:"#ffffff",fontSize:"13px"},children:r},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:107,columnNumber:9},void 0),x.jsxDEV("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:n.map((s,a)=>{const o=s.dataKey||s.name||"",l=s.value||0,c=s.color||Na(o),u=d=>x.jsxDEV("img",{src:`https://www.google.com/s2/favicons?domain=${d}&sz=16`,alt:d,style:{width:"16px",height:"16px",borderRadius:"4px"},onError:h=>{h.target.style.display="none"}},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:126,columnNumber:17},void 0);return x.jsxDEV("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px"},children:[x.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:"10px",flex:1},children:[x.jsxDEV("div",{style:{width:"3px",height:"16px",backgroundColor:c,borderRadius:"2px",flexShrink:0}},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:159,columnNumber:19},void 0),u(o),x.jsxDEV("span",{style:{color:"#ffffff",fontSize:"12px"},children:o},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:169,columnNumber:19},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:151,columnNumber:17},void 0),x.jsxDEV("span",{style:{fontWeight:500,color:"#ffffff",fontSize:"12px",flexShrink:0},children:[Number(l).toFixed(1),"%"]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:173,columnNumber:17},void 0)]},a,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:142,columnNumber:15},void 0)})},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:117,columnNumber:9},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:95,columnNumber:7},void 0)}return null},C0=({view:i,barChartData:e,lineChartData:t,lineChartDomains:n,citationTypesData:r,rankDisplay:s})=>{var a;return x.jsxDEV(Fn,{children:x.jsxDEV(St,{gap:"400",children:[x.jsxDEV(St,{gap:"200",children:[x.jsxDEV(_t,{gap:"200",blockAlign:"center",align:"start",children:x.jsxDEV(me,{variant:"headingMd",as:"h3",children:"Citation Share"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:216,columnNumber:13},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:215,columnNumber:11},void 0),x.jsxDEV(_t,{gap:"200",blockAlign:"center",children:[x.jsxDEV(me,{variant:"headingLg",as:"p",fontWeight:"bold",children:[((a=r.find(o=>o.name==="Citation Types"))==null?void 0:a.Owned)||0,"%",s!=="-"?` (#${s.replace("#","")})`:" -"]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:221,columnNumber:13},void 0),x.jsxDEV(Sn,{content:"This score is an average of all historical data",children:x.jsxDEV(ot,{source:On,tone:"subdued"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:230,columnNumber:15},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:229,columnNumber:13},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:220,columnNumber:11},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:214,columnNumber:9},void 0),x.jsxDEV("div",{style:{height:"300px",width:"100%",position:"relative"},children:[x.jsxDEV(gl,{fallback:x.jsxDEV("div",{style:{width:"100%",height:"100%"}},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:238,columnNumber:23},void 0),children:()=>x.jsxDEV(vl,{width:"100%",height:"100%",children:i==="bar"?x.jsxDEV(_l,{data:e,margin:{top:20,right:30,left:0,bottom:40},children:[x.jsxDEV(oo,{strokeDasharray:"3 3",vertical:!1,stroke:"#e4e5e7"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:247,columnNumber:21},void 0),x.jsxDEV(Is,{dataKey:"name",axisLine:!1,tickLine:!1,tick:!1,height:0,tickFormatter:()=>""},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:252,columnNumber:21},void 0),x.jsxDEV(Us,{axisLine:!1,tickLine:!1,tick:{fill:"#8c9196",fontSize:12},domain:(()=>{const o=t.flatMap(u=>n.map(d=>u[d]||0)),l=Math.max(...o,0),c=Math.ceil(l*1.1);return[0,Math.max(c,11)]})(),tickFormatter:o=>`${o}%`,width:30},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:260,columnNumber:21},void 0),x.jsxDEV(Fs,{content:x.jsxDEV(S0,{},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:279,columnNumber:47},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:279,columnNumber:21},void 0),x.jsxDEV(Bi,{dataKey:"value",radius:[4,4,0,0],barSize:25,children:e.map((o,l)=>x.jsxDEV(fc,{fill:Na(o.name)},l,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:282,columnNumber:25},void 0))},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:280,columnNumber:21},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:243,columnNumber:19},void 0):x.jsxDEV(pc,{data:t,margin:{top:20,right:30,left:0,bottom:5},children:[x.jsxDEV(oo,{strokeDasharray:"3 3",vertical:!1,stroke:"#e4e5e7"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:291,columnNumber:21},void 0),x.jsxDEV(Is,{dataKey:"date",axisLine:!1,tickLine:!1,tick:{fill:"#8c9196",fontSize:12},tickFormatter:o=>{const l=o.match(/\d+$/);return l?l[0]:o}},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:296,columnNumber:21},void 0),x.jsxDEV(Us,{axisLine:!1,tickLine:!1,tick:{fill:"#8c9196",fontSize:12},domain:(()=>{const o=t.flatMap(u=>n.map(d=>u[d]||0)),l=Math.max(...o,0),c=Math.ceil(l*1.1);return[0,Math.max(c,11)]})(),tickFormatter:o=>`${o}%`,width:30},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:307,columnNumber:21},void 0),x.jsxDEV(Fs,{content:x.jsxDEV(E0,{},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:326,columnNumber:47},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:326,columnNumber:21},void 0),n.map(o=>x.jsxDEV(mc,{type:"monotone",dataKey:o,stroke:Na(o),strokeWidth:2,dot:!1},o,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:329,columnNumber:23},void 0))]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:287,columnNumber:19},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:241,columnNumber:15},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:237,columnNumber:11},void 0),i==="bar"&&x.jsxDEV("div",{style:{position:"absolute",bottom:"10px",left:"0",right:"0",display:"flex",justifyContent:"space-around",paddingLeft:"30px",paddingRight:"30px"},children:e.map((o,l)=>x.jsxDEV("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"4px"},children:x.jsxDEV("div",{style:{width:"20px",height:"20px",borderRadius:"4px",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"},children:x.jsxDEV("img",{src:`https://www.google.com/s2/favicons?domain=${o.name}&sz=64`,alt:o.name,style:{width:"100%",height:"100%",objectFit:"cover"}},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:378,columnNumber:21},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:367,columnNumber:19},void 0)},l,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:358,columnNumber:17},void 0))},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:345,columnNumber:13},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:236,columnNumber:9},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:212,columnNumber:7},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationShareCard.tsx",lineNumber:211,columnNumber:5},void 0)},Ji=({iconType:i,domain:e,iconText:t,iconColor:n,iconShape:r})=>i==="favicon"&&e?x.jsxDEV("div",{style:{width:"20px",height:"20px",borderRadius:"4px",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:x.jsxDEV("img",{src:`https://www.google.com/s2/favicons?domain=${e}&sz=64`,alt:e,style:{width:"100%",height:"100%",objectFit:"cover"}},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/DomainIcon.tsx",lineNumber:34,columnNumber:9},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/DomainIcon.tsx",lineNumber:22,columnNumber:7},void 0):i==="globe"?x.jsxDEV("div",{style:{width:"20px",height:"20px",borderRadius:"4px",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,backgroundColor:"#f1f2f4"},children:x.jsxDEV(ot,{source:bl,tone:"subdued"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/DomainIcon.tsx",lineNumber:58,columnNumber:9},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/DomainIcon.tsx",lineNumber:45,columnNumber:7},void 0):i==="custom"&&t&&n?r==="diamond"?x.jsxDEV("div",{style:{width:"20px",height:"20px",borderRadius:"4px",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:n,position:"relative",flexShrink:0},children:x.jsxDEV("div",{style:{width:"12px",height:"12px",backgroundColor:n,border:"2px solid white",borderRadius:"2px",transform:"rotate(45deg)",position:"relative"},children:x.jsxDEV("div",{style:{width:"6px",height:"6px",backgroundColor:"white",borderRadius:"1px",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/DomainIcon.tsx",lineNumber:91,columnNumber:13},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/DomainIcon.tsx",lineNumber:80,columnNumber:11},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/DomainIcon.tsx",lineNumber:66,columnNumber:9},void 0):x.jsxDEV("div",{style:{width:"20px",height:"20px",borderRadius:"4px",overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:n,flexShrink:0},children:x.jsxDEV("span",{style:{color:"white",fontSize:t.length>2?"10px":"12px",fontWeight:"bold"},children:t},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/DomainIcon.tsx",lineNumber:122,columnNumber:9},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/DomainIcon.tsx",lineNumber:109,columnNumber:7},void 0):null,T0=({topCitationDomains:i,rankDisplay:e,rankShare:t,toggleRankModal:n,handleDomainClick:r})=>{const[s,a]=Ae.useState(null);return x.jsxDEV(Fn,{children:x.jsxDEV(St,{gap:"400",children:[x.jsxDEV(St,{gap:"200",children:[x.jsxDEV(_t,{gap:"200",blockAlign:"center",align:"start",children:[x.jsxDEV(me,{variant:"headingMd",as:"h3",children:"Citation Rank"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:39,columnNumber:13},void 0),x.jsxDEV(Sn,{content:"Your brand's position compared to others based on how often your website is cited in Al-generated answers.",children:x.jsxDEV(ot,{source:On,tone:"subdued"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:43,columnNumber:15},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:42,columnNumber:13},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:38,columnNumber:11},void 0),x.jsxDEV(me,{variant:"headingLg",as:"p",fontWeight:"bold",children:[e," ",x.jsxDEV("span",{style:{fontSize:"0.8em",color:"#6d7175"},children:["(",t,")"]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:48,columnNumber:13},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:46,columnNumber:11},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:37,columnNumber:9},void 0),x.jsxDEV("div",{style:{width:"100%"},children:x.jsxDEV("table",{style:{width:"100%",borderCollapse:"collapse"},children:[x.jsxDEV("thead",{children:x.jsxDEV("tr",{style:{borderBottom:"1px solid #e1e3e5"},children:[x.jsxDEV("th",{style:{textAlign:"left",padding:"8px 0",fontWeight:"500",fontSize:"14px",color:"#6d7175"},children:"Domain"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:59,columnNumber:17},void 0),x.jsxDEV("th",{style:{textAlign:"right",padding:"8px 0",fontWeight:"500",fontSize:"14px",color:"#6d7175"},children:"Share"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:70,columnNumber:17},void 0),x.jsxDEV("th",{style:{textAlign:"right",padding:"8px 0",fontWeight:"500",fontSize:"14px",color:"#6d7175",width:"40px"}},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:81,columnNumber:17},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:58,columnNumber:15},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:57,columnNumber:13},void 0),x.jsxDEV("tbody",{children:i.slice(0,5).map((o,l)=>x.jsxDEV("tr",{style:{borderBottom:l<i.length-1?"1px solid #f1f2f4":"none",cursor:"pointer"},onMouseEnter:()=>a(o.rank),onMouseLeave:()=>a(null),onClick:()=>r(o.domain),children:[x.jsxDEV("td",{style:{padding:"12px 0"},children:x.jsxDEV(_t,{gap:"200",blockAlign:"center",children:[x.jsxDEV(me,{as:"span",variant:"bodySm",fontWeight:"medium",tone:"subdued",children:[l+1,"."]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:111,columnNumber:25},void 0),x.jsxDEV(Ji,{iconType:o.iconType,domain:o.domain,iconText:o.iconText,iconColor:o.iconColor,iconShape:o.iconShape},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:119,columnNumber:25},void 0),x.jsxDEV(me,{as:"span",variant:"bodyMd",children:o.domain},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:126,columnNumber:25},void 0),o.category==="Owned"&&x.jsxDEV(wa,{tone:"success",children:"Owned"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:130,columnNumber:27},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:110,columnNumber:23},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:109,columnNumber:21},void 0),x.jsxDEV("td",{style:{textAlign:"right",padding:"12px 0"},children:x.jsxDEV(me,{as:"span",variant:"bodyMd",fontWeight:"medium",children:[o.share,"%"]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:135,columnNumber:23},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:134,columnNumber:21},void 0),x.jsxDEV("td",{style:{textAlign:"right",padding:"12px 0"},children:x.jsxDEV("div",{style:{display:"inline-flex",gap:"4px",alignItems:"center",opacity:s===o.rank?1:0,visibility:s===o.rank?"visible":"hidden",transition:"opacity 0.1s ease",flexShrink:0,minWidth:"120px",justifyContent:"flex-end"},onClick:c=>c.stopPropagation(),children:[x.jsxDEV("button",{onClick:()=>{navigator.clipboard.writeText(o.domain)},style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",border:"1px solid #e1e3e5",backgroundColor:"white",color:"#202223",fontSize:"12px",fontWeight:"500",cursor:"pointer",whiteSpace:"nowrap",transition:"all 0.1s ease",boxShadow:"0 1px 2px rgba(0, 0, 0, 0.05)",height:"24px"},onMouseEnter:c=>{c.currentTarget.style.backgroundColor="#f7f8f9",c.currentTarget.style.borderColor="#c9cccf"},onMouseLeave:c=>{c.currentTarget.style.backgroundColor="white",c.currentTarget.style.borderColor="#e1e3e5"},children:[x.jsxDEV(ot,{source:Da,tone:"subdued"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:185,columnNumber:27},void 0),x.jsxDEV("span",{children:"Copy"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:186,columnNumber:27},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:155,columnNumber:25},void 0),x.jsxDEV("button",{onClick:()=>{window.open(`https://${o.domain}`,"_blank")},style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",border:"1px solid #e1e3e5",backgroundColor:"white",color:"#202223",fontSize:"12px",fontWeight:"500",cursor:"pointer",whiteSpace:"nowrap",transition:"all 0.1s ease",boxShadow:"0 1px 2px rgba(0, 0, 0, 0.05)",height:"24px"},onMouseEnter:c=>{c.currentTarget.style.backgroundColor="#f7f8f9",c.currentTarget.style.borderColor="#c9cccf"},onMouseLeave:c=>{c.currentTarget.style.backgroundColor="white",c.currentTarget.style.borderColor="#e1e3e5"},children:[x.jsxDEV(ot,{source:bi,tone:"subdued"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:218,columnNumber:27},void 0),x.jsxDEV("span",{children:"Visit"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:219,columnNumber:27},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:188,columnNumber:25},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:140,columnNumber:23},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:139,columnNumber:21},void 0)]},o.rank,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:96,columnNumber:19},void 0))},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:93,columnNumber:13},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:56,columnNumber:11},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:55,columnNumber:9},void 0),x.jsxDEV("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:"8px"},children:x.jsxDEV(_i,{variant:"plain",onClick:n,children:"Expand"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:238,columnNumber:11},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:231,columnNumber:9},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:35,columnNumber:7},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationRankCard.tsx",lineNumber:34,columnNumber:5},void 0)},N0=({active:i,payload:e,total:t})=>i&&e&&e.length&&t?x.jsxDEV("div",{style:{backgroundColor:"#2c2c2c",padding:"8px 12px",borderRadius:"6px",boxShadow:"0 2px 8px rgba(0,0,0,0.15)",fontSize:"12px",fontFamily:'-apple-system, BlinkMacSystemFont, "San Francisco", "Segoe UI", Roboto, "Helvetica Neue", sans-serif'},children:e.filter(n=>(n.value||0)>0).map((n,r)=>{const s=n.value||0,a=t>0?Math.round(s/100*t):0;return x.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:"8px",marginBottom:r<e.filter(o=>(o.value||0)>0).length-1?"4px":"0"},children:[x.jsxDEV("div",{style:{width:"12px",height:"12px",backgroundColor:n.color,borderRadius:"2px"}},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesChart.tsx",lineNumber:55,columnNumber:17},void 0),x.jsxDEV("span",{style:{color:"#ffffff",fontSize:"12px"},children:[n.name,":"]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesChart.tsx",lineNumber:63,columnNumber:17},void 0),x.jsxDEV("span",{style:{fontWeight:500,color:"#ffffff",fontSize:"12px"},children:a.toLocaleString()},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesChart.tsx",lineNumber:66,columnNumber:17},void 0),x.jsxDEV("span",{style:{color:"#999999",fontSize:"11px"},children:["(",s.toFixed(1),"%)"]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesChart.tsx",lineNumber:75,columnNumber:17},void 0)]},r,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesChart.tsx",lineNumber:42,columnNumber:15},void 0)})},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesChart.tsx",lineNumber:23,columnNumber:7},void 0):null,Dr=({x:i,y:e,width:t,height:n,value:r,dataKey:s})=>{if(!r||r===0||t<30)return null;const o={Earned:Ia,Social:La,Owned:Pa,Competition:Ra}[s],l=16,c=`${Number(r).toFixed(2)}%`,u=c.length*6,d=2,h=o?l+d+u:u,p=i+t/2,g=e+n/2;return x.jsxDEV("g",{children:[o&&x.jsxDEV("foreignObject",{x:p-h/2,y:g-l/2,width:l,height:l,children:x.jsxDEV("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"},children:[x.jsxDEV("style",{children:`
                            .citation-icon-white svg {
                                width: 16px !important;
                                height: 16px !important;
                                color: white !important;
                            }
                            .citation-icon-white svg path {
                                fill: white !important;
                                stroke: white !important;
                                stroke-width: 0 !important;
                            }
                            .citation-icon-white svg circle {
                                fill: white !important;
                                stroke: white !important;
                                stroke-width: 0 !important;
                            }
                            .citation-icon-white svg rect {
                                fill: white !important;
                                stroke: white !important;
                                stroke-width: 0 !important;
                            }
                            .citation-icon-white svg * {
                                fill: white !important;
                                stroke: white !important;
                            }
                        `},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesChart.tsx",lineNumber:127,columnNumber:13},void 0),x.jsxDEV("div",{className:"citation-icon-white",style:{display:"flex",alignItems:"center",justifyContent:"center",width:"100%",height:"100%"},children:x.jsxDEV(ot,{source:o,tone:"base"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesChart.tsx",lineNumber:163,columnNumber:15},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesChart.tsx",lineNumber:153,columnNumber:13},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesChart.tsx",lineNumber:118,columnNumber:11},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesChart.tsx",lineNumber:112,columnNumber:9},void 0),x.jsxDEV("text",{x:p+(o?l/2+d:0),y:g+4,fill:"white",fontSize:12,fontWeight:"500",textAnchor:o?"start":"middle",children:c},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesChart.tsx",lineNumber:168,columnNumber:7},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesChart.tsx",lineNumber:110,columnNumber:5},void 0)},nc=Ae.memo(({data:i,total:e,hiddenSeries:t})=>{const n=i[0],r=["Earned","Social","Owned","Competition"].filter(u=>!t.includes(u)).reduce((u,d)=>u+((n==null?void 0:n[d])||0),0),s=[{name:"Citation Types",Earned:t.includes("Earned")?0:((n==null?void 0:n.Earned)||0)/r*100,Social:t.includes("Social")?0:((n==null?void 0:n.Social)||0)/r*100,Owned:t.includes("Owned")?0:((n==null?void 0:n.Owned)||0)/r*100,Competition:t.includes("Competition")?0:((n==null?void 0:n.Competition)||0)/r*100}],o=["Earned","Social","Owned","Competition"].filter(u=>!t.includes(u)&&((n==null?void 0:n[u])||0)>0),l=o[0],c=o[o.length-1];return x.jsxDEV("div",{style:{width:"100%",height:"100%"},children:x.jsxDEV(vl,{width:"100%",height:"100%",children:x.jsxDEV(_l,{data:s,layout:"vertical",margin:{top:0,right:0,left:0,bottom:0},barSize:40,children:[x.jsxDEV(Is,{type:"number",hide:!0,domain:[0,100]},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesChart.tsx",lineNumber:249,columnNumber:13},void 0),x.jsxDEV(Us,{type:"category",dataKey:"name",hide:!0},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesChart.tsx",lineNumber:250,columnNumber:13},void 0),x.jsxDEV(Fs,{content:x.jsxDEV(N0,{total:e},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesChart.tsx",lineNumber:251,columnNumber:39},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesChart.tsx",lineNumber:251,columnNumber:13},void 0),x.jsxDEV(Bi,{dataKey:"Earned",stackId:"a",fill:"#2F80ED",isAnimationActive:!1,radius:o.length===1?[6,6,6,6]:l==="Earned"?[6,0,0,6]:c==="Earned"?[0,6,6,0]:[0,0,0,0],children:x.jsxDEV(rr,{dataKey:"Earned",content:x.jsxDEV(Dr,{dataKey:"Earned"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesChart.tsx",lineNumber:270,columnNumber:26},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesChart.tsx",lineNumber:268,columnNumber:15},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesChart.tsx",lineNumber:253,columnNumber:13},void 0),x.jsxDEV(Bi,{dataKey:"Social",stackId:"a",fill:"#9B51E0",isAnimationActive:!1,radius:o.length===1?[6,6,6,6]:l==="Social"?[6,0,0,6]:c==="Social"?[0,6,6,0]:[0,0,0,0],children:x.jsxDEV(rr,{dataKey:"Social",content:x.jsxDEV(Dr,{dataKey:"Social"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesChart.tsx",lineNumber:290,columnNumber:26},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesChart.tsx",lineNumber:288,columnNumber:15},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesChart.tsx",lineNumber:273,columnNumber:13},void 0),x.jsxDEV(Bi,{dataKey:"Owned",stackId:"a",fill:"#219653",isAnimationActive:!1,radius:o.length===1?[6,6,6,6]:l==="Owned"?[6,0,0,6]:c==="Owned"?[0,6,6,0]:[0,0,0,0],children:x.jsxDEV(rr,{dataKey:"Owned",content:x.jsxDEV(Dr,{dataKey:"Owned"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesChart.tsx",lineNumber:310,columnNumber:26},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesChart.tsx",lineNumber:308,columnNumber:15},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesChart.tsx",lineNumber:293,columnNumber:13},void 0),x.jsxDEV(Bi,{dataKey:"Competition",stackId:"a",fill:"#EB5757",isAnimationActive:!1,radius:o.length===1?[6,6,6,6]:l==="Competition"?[6,0,0,6]:c==="Competition"?[0,6,6,0]:[0,0,0,0],children:x.jsxDEV(rr,{dataKey:"Competition",content:x.jsxDEV(Dr,{dataKey:"Competition"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesChart.tsx",lineNumber:330,columnNumber:26},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesChart.tsx",lineNumber:328,columnNumber:15},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesChart.tsx",lineNumber:313,columnNumber:13},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesChart.tsx",lineNumber:243,columnNumber:11},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesChart.tsx",lineNumber:242,columnNumber:9},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesChart.tsx",lineNumber:241,columnNumber:7},void 0)});nc.displayName="CitationTypesChart";const A0=({citationTypesData:i,totalCitations:e,hiddenSeries:t,setHiddenSeries:n})=>{var r,s,a,o;return x.jsxDEV(Fn,{children:x.jsxDEV(St,{gap:"400",children:[x.jsxDEV(St,{gap:"200",children:[x.jsxDEV(_t,{gap:"200",blockAlign:"center",align:"start",children:[x.jsxDEV(me,{variant:"headingMd",as:"h3",children:"Citation Types"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesCard.tsx",lineNumber:26,columnNumber:13},void 0),x.jsxDEV(Sn,{content:"Categorize where citations in AI-generated answers are coming from.",children:x.jsxDEV(ot,{source:On,tone:"subdued"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesCard.tsx",lineNumber:30,columnNumber:15},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesCard.tsx",lineNumber:29,columnNumber:13},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesCard.tsx",lineNumber:25,columnNumber:11},void 0),x.jsxDEV(me,{as:"p",variant:"bodySm",tone:"subdued",children:"Citation breakdown over total citations in the selected period by type"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesCard.tsx",lineNumber:33,columnNumber:11},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesCard.tsx",lineNumber:24,columnNumber:9},void 0),x.jsxDEV("div",{style:{height:"60px"},children:x.jsxDEV(gl,{fallback:x.jsxDEV("div",{style:{width:"100%",height:"100%"}},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesCard.tsx",lineNumber:40,columnNumber:33},void 0),children:()=>x.jsxDEV(nc,{data:i,total:e,hiddenSeries:t},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesCard.tsx",lineNumber:42,columnNumber:15},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesCard.tsx",lineNumber:40,columnNumber:11},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesCard.tsx",lineNumber:39,columnNumber:9},void 0),x.jsxDEV("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[{name:"Earned",value:((r=i[0])==null?void 0:r.Earned)||0,color:"#2F80ED",icon:Ia},{name:"Social",value:((s=i[0])==null?void 0:s.Social)||0,color:"#9B51E0",icon:La},{name:"Owned",value:((a=i[0])==null?void 0:a.Owned)||0,color:"#219653",icon:Pa},{name:"Competition",value:((o=i[0])==null?void 0:o.Competition)||0,color:"#EB5757",icon:Ra}].map((l,c)=>{const u=t.includes(l.name);return x.jsxDEV("div",{style:{display:"flex",alignItems:"center",cursor:"pointer",opacity:u?.6:1},onClick:()=>{n(d=>d.includes(l.name)?d.filter(h=>h!==l.name):[...d,l.name])},children:x.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:"8px",background:u?"#f4f6f8":"#fff",padding:"4px 8px",borderRadius:"6px",border:u?"1px solid #dfe3e8":`1px solid ${l.color}30`},children:[x.jsxDEV("div",{style:{width:"14px",height:"14px",borderRadius:"3px",backgroundColor:l.color,display:"flex",alignItems:"center",justifyContent:"center",border:"1px solid rgba(0,0,0,0.1)"},children:!u&&x.jsxDEV("div",{style:{width:"8px",height:"8px",backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='white'%3E%3Cpath fill-rule='evenodd' d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z' clip-rule='evenodd'/%3E%3C/svg%3E")`}},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesCard.tsx",lineNumber:123,columnNumber:23},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesCard.tsx",lineNumber:110,columnNumber:19},void 0),x.jsxDEV(me,{as:"span",variant:"bodySm",tone:u?"subdued":"base",fontWeight:"medium",children:l.name},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesCard.tsx",lineNumber:133,columnNumber:19},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesCard.tsx",lineNumber:97,columnNumber:17},void 0)},c,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesCard.tsx",lineNumber:81,columnNumber:15},void 0)})},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesCard.tsx",lineNumber:52,columnNumber:9},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesCard.tsx",lineNumber:22,columnNumber:7},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationTypesCard.tsx",lineNumber:21,columnNumber:5},void 0)},Qa=({category:i})=>{const t={Earned:{backgroundColor:"#E3F2FD",borderColor:"#BBDEFB",iconColor:"#1976D2",textColor:"#1976D2",icon:Ia},Owned:{backgroundColor:"#E8F5E9",borderColor:"#C8E6C9",iconColor:"#388E3C",textColor:"#388E3C",icon:Pa},Social:{backgroundColor:"#F3E5F5",borderColor:"#E1BEE7",iconColor:"#7B1FA2",textColor:"#7B1FA2",icon:La}}[i],n=t.icon;return x.jsxDEV("div",{style:{display:"inline-flex",alignItems:"center",gap:"2px",padding:"4px 8px",backgroundColor:t.backgroundColor,border:`1px solid ${t.borderColor}`,borderRadius:"20px",whiteSpace:"nowrap",flexShrink:0},children:[x.jsxDEV("div",{style:{display:"flex",alignItems:"center",flexShrink:0},children:x.jsxDEV(ot,{source:n,tone:"base"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CategoryBadge.tsx",lineNumber:52,columnNumber:9},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CategoryBadge.tsx",lineNumber:51,columnNumber:7},void 0),x.jsxDEV("span",{style:{color:t.textColor,fontSize:"12px",fontWeight:500,lineHeight:"16px"},children:i},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CategoryBadge.tsx",lineNumber:54,columnNumber:7},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CategoryBadge.tsx",lineNumber:38,columnNumber:5},void 0)};function w0({topCitationDomains:i,handleDomainClick:e,onExpand:t}){const[n,r]=Ae.useState(null);return x.jsxDEV(St,{gap:"400",children:[x.jsxDEV(St,{gap:"200",children:[x.jsxDEV(_t,{gap:"200",blockAlign:"center",align:"start",children:[x.jsxDEV(me,{variant:"headingMd",as:"h2",children:"Top Citation Domains"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:34,columnNumber:11},this),x.jsxDEV(Sn,{content:"The websites that are most frequently cited in AI-generated answers.",children:x.jsxDEV(ot,{source:On,tone:"base"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:38,columnNumber:13},this)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:37,columnNumber:11},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:33,columnNumber:9},this),x.jsxDEV(me,{variant:"bodySm",tone:"subdued",as:"p",children:"Discover which websites are most frequently cited in AI-generated responses"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:41,columnNumber:9},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:32,columnNumber:7},this),x.jsxDEV(Fn,{padding:"0",children:[x.jsxDEV("div",{style:{width:"100%"},children:x.jsxDEV("table",{style:{width:"100%",borderCollapse:"collapse"},children:[x.jsxDEV("thead",{children:x.jsxDEV("tr",{style:{borderBottom:"1px solid #e1e3e5"},children:[x.jsxDEV("th",{style:{textAlign:"left",padding:"12px 16px",fontWeight:"500",fontSize:"14px",color:"#6d7175"},children:x.jsxDEV(me,{as:"span",variant:"bodySm",fontWeight:"medium",children:"Rank"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:62,columnNumber:19},this)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:53,columnNumber:17},this),x.jsxDEV("th",{style:{textAlign:"left",padding:"12px 16px",fontWeight:"500",fontSize:"14px",color:"#6d7175"},children:x.jsxDEV(me,{as:"span",variant:"bodySm",fontWeight:"medium",children:"Domain"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:75,columnNumber:19},this)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:66,columnNumber:17},this),x.jsxDEV("th",{style:{textAlign:"left",padding:"12px 16px",fontWeight:"500",fontSize:"14px",color:"#6d7175"},children:x.jsxDEV(me,{as:"span",variant:"bodySm",fontWeight:"medium",children:"Category"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:88,columnNumber:19},this)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:79,columnNumber:17},this),x.jsxDEV("th",{style:{textAlign:"right",padding:"12px 16px",fontWeight:"500",fontSize:"14px",color:"#6d7175",whiteSpace:"nowrap"},children:x.jsxDEV("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px",justifyContent:"flex-end",width:"100%"},children:[x.jsxDEV(me,{as:"span",variant:"bodySm",fontWeight:"medium",children:"Share"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:111,columnNumber:21},this),x.jsxDEV(Sn,{content:"The percentage share of citations",children:x.jsxDEV(ot,{source:On,tone:"subdued"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:115,columnNumber:23},this)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:114,columnNumber:21},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:102,columnNumber:19},this)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:92,columnNumber:17},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:52,columnNumber:15},this)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:51,columnNumber:13},this),x.jsxDEV("tbody",{children:i.map((s,a)=>x.jsxDEV("tr",{style:{borderBottom:a<i.length-1?"1px solid #f1f2f4":"none",cursor:"pointer"},onMouseEnter:()=>r(s.rank),onMouseLeave:()=>r(null),onClick:()=>e(s.domain),children:[x.jsxDEV("td",{style:{padding:"12px 16px",verticalAlign:"middle"},children:x.jsxDEV(me,{as:"span",variant:"bodyMd",fontWeight:"medium",children:s.rank},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:140,columnNumber:23},this)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:137,columnNumber:21},this),x.jsxDEV("td",{style:{padding:"12px 16px",verticalAlign:"middle",position:"relative"},children:x.jsxDEV("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[x.jsxDEV(_t,{gap:"200",blockAlign:"center",children:[x.jsxDEV(Ji,{iconType:s.iconType,domain:s.domain,iconText:s.iconText,iconColor:s.iconColor,iconShape:s.iconShape},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:160,columnNumber:27},this),x.jsxDEV(me,{as:"span",variant:"bodyMd",children:s.domain},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:167,columnNumber:27},this),s.subdomains>0&&x.jsxDEV("div",{style:{display:"flex",alignItems:"center"},title:`Click to view ${s.subdomains} pages`,children:x.jsxDEV(wa,{tone:"info",children:`${s.subdomains} ${s.subdomains===1?"page":"pages"}`},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:175,columnNumber:31},this)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:171,columnNumber:29},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:159,columnNumber:25},this),x.jsxDEV("div",{style:{display:"inline-flex",gap:"4px",alignItems:"center",opacity:n===s.rank?1:0,visibility:n===s.rank?"visible":"hidden",transition:"opacity 0.1s ease",flexShrink:0,minWidth:"120px",justifyContent:"flex-end"},onClick:o=>o.stopPropagation(),children:[x.jsxDEV("button",{onClick:()=>{navigator.clipboard.writeText(s.domain)},style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",border:"1px solid #e1e3e5",backgroundColor:"white",color:"#202223",fontSize:"12px",fontWeight:"500",cursor:"pointer",whiteSpace:"nowrap",transition:"all 0.1s ease",boxShadow:"0 1px 2px rgba(0, 0, 0, 0.05)",height:"24px"},onMouseEnter:o=>{o.currentTarget.style.backgroundColor="#f7f8f9",o.currentTarget.style.borderColor="#c9cccf"},onMouseLeave:o=>{o.currentTarget.style.backgroundColor="white",o.currentTarget.style.borderColor="#e1e3e5"},children:[x.jsxDEV(ot,{source:Da,tone:"subdued"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:228,columnNumber:29},this),x.jsxDEV("span",{children:"Copy"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:229,columnNumber:29},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:198,columnNumber:27},this),x.jsxDEV("button",{onClick:()=>{window.open(`https://${s.domain}`,"_blank")},style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",border:"1px solid #e1e3e5",backgroundColor:"white",color:"#202223",fontSize:"12px",fontWeight:"500",cursor:"pointer",whiteSpace:"nowrap",transition:"all 0.1s ease",boxShadow:"0 1px 2px rgba(0, 0, 0, 0.05)",height:"24px"},onMouseEnter:o=>{o.currentTarget.style.backgroundColor="#f7f8f9",o.currentTarget.style.borderColor="#c9cccf"},onMouseLeave:o=>{o.currentTarget.style.backgroundColor="white",o.currentTarget.style.borderColor="#e1e3e5"},children:[x.jsxDEV(ot,{source:bi,tone:"subdued"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:261,columnNumber:29},this),x.jsxDEV("span",{children:"Visit"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:262,columnNumber:29},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:231,columnNumber:27},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:181,columnNumber:25},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:151,columnNumber:23},this)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:144,columnNumber:21},this),x.jsxDEV("td",{style:{padding:"12px 16px",verticalAlign:"middle",whiteSpace:"nowrap",minWidth:"100px"},children:x.jsxDEV(Qa,{category:s.category},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:275,columnNumber:23},this)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:267,columnNumber:21},this),x.jsxDEV("td",{style:{textAlign:"right",padding:"12px 16px",verticalAlign:"middle",whiteSpace:"nowrap"},children:x.jsxDEV(_t,{gap:"100",blockAlign:"center",align:"end",children:[x.jsxDEV(me,{as:"span",variant:"bodyMd",fontWeight:"medium",children:[s.share,"%"]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:286,columnNumber:25},this),x.jsxDEV(me,{as:"span",variant:"bodySm",tone:"success",children:["+",s.change,"%"]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:289,columnNumber:25},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:285,columnNumber:23},this)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:277,columnNumber:21},this)]},s.rank,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:124,columnNumber:19},this))},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:121,columnNumber:13},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:50,columnNumber:11},this)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:49,columnNumber:9},this),x.jsxDEV("div",{style:{padding:"16px",borderTop:"1px solid #f1f2f4"},children:x.jsxDEV(_t,{align:"space-between",blockAlign:"center",children:[x.jsxDEV(_i,{variant:"plain",onClick:t,children:"Expand"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:304,columnNumber:13},this),x.jsxDEV(me,{as:"span",variant:"bodySm",tone:"subdued",children:["Showing 1-",Math.min(i.length,20)," of"," ",i.length," ",i.length===1?"domain":"domains"]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:307,columnNumber:13},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:303,columnNumber:11},this)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:302,columnNumber:9},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:47,columnNumber:7},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationDomainsCard.tsx",lineNumber:30,columnNumber:5},this)}const Aa=({status:i,competitors:e})=>{if(i==="mentioned")return x.jsxDEV("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px",whiteSpace:"nowrap",flexShrink:0},children:[x.jsxDEV("span",{style:{color:"#219653",fontSize:"16px",lineHeight:"1",display:"inline-block",verticalAlign:"middle",flexShrink:0},children:"✔"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/MentionedStatus.tsx",lineNumber:25,columnNumber:9},void 0),x.jsxDEV("span",{style:{flexShrink:0},children:x.jsxDEV(me,{as:"span",variant:"bodySm",tone:"success",fontWeight:"medium",children:"Mentioned"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/MentionedStatus.tsx",lineNumber:38,columnNumber:11},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/MentionedStatus.tsx",lineNumber:37,columnNumber:9},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/MentionedStatus.tsx",lineNumber:16,columnNumber:7},void 0);if(i==="competitor-mentioned"){const t=e&&e.length>0?`Competitor: ${e[0]}${e.length>1?` +${e.length-1}`:""}`:"Competitor Mentioned";return x.jsxDEV(Sn,{content:e&&e.length>0?`Competitors mentioned: ${e.join(", ")}`:"Competitors mentioned on this page",children:x.jsxDEV("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px",whiteSpace:"nowrap",flexShrink:0,cursor:"help"},children:[x.jsxDEV(ot,{source:Ra,tone:"caution"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/MentionedStatus.tsx",lineNumber:70,columnNumber:11},void 0),x.jsxDEV("span",{style:{flexShrink:0},children:x.jsxDEV(me,{as:"span",variant:"bodySm",tone:"caution",fontWeight:"medium",children:t},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/MentionedStatus.tsx",lineNumber:72,columnNumber:13},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/MentionedStatus.tsx",lineNumber:71,columnNumber:11},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/MentionedStatus.tsx",lineNumber:60,columnNumber:9},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/MentionedStatus.tsx",lineNumber:53,columnNumber:7},void 0)}return i==="not-mentioned"?x.jsxDEV("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px",whiteSpace:"nowrap",flexShrink:0},children:[x.jsxDEV(ot,{source:xl,tone:"critical"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/MentionedStatus.tsx",lineNumber:92,columnNumber:9},void 0),x.jsxDEV("span",{style:{flexShrink:0},children:x.jsxDEV(me,{as:"span",variant:"bodySm",tone:"critical",fontWeight:"medium",children:"Not Mentioned"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/MentionedStatus.tsx",lineNumber:94,columnNumber:11},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/MentionedStatus.tsx",lineNumber:93,columnNumber:9},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/MentionedStatus.tsx",lineNumber:83,columnNumber:7},void 0):x.jsxDEV("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px",whiteSpace:"nowrap",flexShrink:0},children:[x.jsxDEV("span",{style:{fontSize:"14px",color:"#6d7175",fontWeight:"bold",display:"inline-block",verticalAlign:"middle",flexShrink:0},children:"?"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/MentionedStatus.tsx",lineNumber:113,columnNumber:7},void 0),x.jsxDEV("span",{style:{flexShrink:0},children:x.jsxDEV(me,{as:"span",variant:"bodySm",tone:"subdued",fontWeight:"medium",children:"Not Checked"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/MentionedStatus.tsx",lineNumber:126,columnNumber:9},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/MentionedStatus.tsx",lineNumber:125,columnNumber:7},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/MentionedStatus.tsx",lineNumber:104,columnNumber:5},void 0)},D0=({topCitationPages:i,togglePagesModal:e})=>{const[t,n]=Ae.useState(null);return x.jsxDEV(St,{gap:"400",children:[x.jsxDEV(St,{gap:"200",children:x.jsxDEV(_t,{align:"space-between",blockAlign:"start",children:x.jsxDEV(St,{gap:"050",children:[x.jsxDEV(_t,{gap:"200",blockAlign:"center",align:"start",children:[x.jsxDEV(me,{variant:"headingMd",as:"h2",children:"Top Citation Pages"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:34,columnNumber:15},void 0),x.jsxDEV(Sn,{content:"Explore the most referenced web pages in AI answers.",children:x.jsxDEV(ot,{source:On,tone:"base"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:38,columnNumber:17},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:37,columnNumber:15},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:33,columnNumber:13},void 0),x.jsxDEV(me,{as:"p",variant:"bodySm",tone:"subdued",children:"Explore the most referenced web pages in AI answers."},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:41,columnNumber:13},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:32,columnNumber:11},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:31,columnNumber:9},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:30,columnNumber:7},void 0),x.jsxDEV(Fn,{padding:"0",children:[x.jsxDEV("div",{style:{width:"100%",overflowX:"auto"},children:x.jsxDEV("table",{style:{width:"100%",borderCollapse:"collapse",tableLayout:"auto"},children:[x.jsxDEV("thead",{children:x.jsxDEV("tr",{style:{borderBottom:"1px solid #e1e3e5",backgroundColor:"#fafbfb"},children:[x.jsxDEV("th",{style:{textAlign:"left",padding:"12px 16px",fontWeight:"500",fontSize:"14px",color:"#6d7175",whiteSpace:"nowrap"},children:x.jsxDEV(me,{as:"span",variant:"bodySm",fontWeight:"medium",children:"Rank"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:75,columnNumber:19},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:65,columnNumber:17},void 0),x.jsxDEV("th",{style:{textAlign:"left",padding:"12px 16px",fontWeight:"500",fontSize:"14px",color:"#6d7175"},children:x.jsxDEV(me,{as:"span",variant:"bodySm",fontWeight:"medium",children:"Page"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:88,columnNumber:19},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:79,columnNumber:17},void 0),x.jsxDEV("th",{style:{textAlign:"left",padding:"12px 16px",fontWeight:"500",fontSize:"14px",color:"#6d7175",whiteSpace:"nowrap"},children:x.jsxDEV(me,{as:"span",variant:"bodySm",fontWeight:"medium",children:"Category"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:102,columnNumber:19},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:92,columnNumber:17},void 0),x.jsxDEV("th",{style:{textAlign:"left",padding:"12px 16px",fontWeight:"500",fontSize:"14px",color:"#6d7175",whiteSpace:"nowrap"},children:x.jsxDEV(me,{as:"span",variant:"bodySm",fontWeight:"medium",children:"Mentioned"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:116,columnNumber:19},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:106,columnNumber:17},void 0),x.jsxDEV("th",{style:{textAlign:"right",padding:"12px 16px",fontWeight:"500",fontSize:"14px",color:"#6d7175",whiteSpace:"nowrap"},children:x.jsxDEV("div",{style:{display:"inline-flex",alignItems:"center",gap:"4px",justifyContent:"flex-end",width:"100%"},children:[x.jsxDEV(me,{as:"span",variant:"bodySm",fontWeight:"medium",children:"Share"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:139,columnNumber:21},void 0),x.jsxDEV(Sn,{content:"The percentage share of citations",children:x.jsxDEV(ot,{source:On,tone:"subdued"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:143,columnNumber:23},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:142,columnNumber:21},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:130,columnNumber:19},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:120,columnNumber:17},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:59,columnNumber:15},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:58,columnNumber:13},void 0),x.jsxDEV("tbody",{children:i.map((r,s)=>{const a=r.page.startsWith("http")?r.page:`https://${r.page}`;return x.jsxDEV("tr",{style:{borderBottom:s<i.length-1?"1px solid #f1f2f4":"none"},onMouseEnter:()=>n(r.rank),onMouseLeave:()=>n(null),children:[x.jsxDEV("td",{style:{padding:"12px 16px",verticalAlign:"middle"},children:x.jsxDEV(me,{as:"span",variant:"bodyMd",fontWeight:"medium",children:r.rank},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:169,columnNumber:23},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:166,columnNumber:21},void 0),x.jsxDEV("td",{style:{padding:"12px 16px",verticalAlign:"middle",position:"relative"},children:x.jsxDEV("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[x.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[x.jsxDEV(Ji,{iconType:r.iconType,domain:r.domain,iconText:r.iconText,iconColor:r.iconColor},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:195,columnNumber:27},void 0),x.jsxDEV("span",{style:{wordBreak:"break-word"},children:x.jsxDEV(me,{as:"span",variant:"bodyMd",children:r.page},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:202,columnNumber:29},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:201,columnNumber:27},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:188,columnNumber:25},void 0),x.jsxDEV("div",{style:{display:"inline-flex",gap:"4px",alignItems:"center",opacity:t===r.rank?1:0,visibility:t===r.rank?"visible":"hidden",transition:"opacity 0.1s ease",flexShrink:0,minWidth:"120px",justifyContent:"flex-end"},children:[x.jsxDEV("button",{onClick:()=>{navigator.clipboard.writeText(a)},style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",border:"1px solid #e1e3e5",backgroundColor:"white",color:"#202223",fontSize:"12px",fontWeight:"500",cursor:"pointer",whiteSpace:"nowrap",transition:"all 0.1s ease",boxShadow:"0 1px 2px rgba(0, 0, 0, 0.05)",height:"24px"},onMouseEnter:o=>{o.currentTarget.style.backgroundColor="#f7f8f9",o.currentTarget.style.borderColor="#c9cccf"},onMouseLeave:o=>{o.currentTarget.style.backgroundColor="white",o.currentTarget.style.borderColor="#e1e3e5"},children:[x.jsxDEV(ot,{source:Da,tone:"subdued"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:251,columnNumber:29},void 0),x.jsxDEV("span",{children:"Copy"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:252,columnNumber:29},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:221,columnNumber:27},void 0),x.jsxDEV("button",{onClick:()=>{window.open(a,"_blank")},style:{display:"inline-flex",alignItems:"center",gap:"4px",padding:"3px 8px",borderRadius:"6px",border:"1px solid #e1e3e5",backgroundColor:"white",color:"#202223",fontSize:"12px",fontWeight:"500",cursor:"pointer",whiteSpace:"nowrap",transition:"all 0.1s ease",boxShadow:"0 1px 2px rgba(0, 0, 0, 0.05)",height:"24px"},onMouseEnter:o=>{o.currentTarget.style.backgroundColor="#f7f8f9",o.currentTarget.style.borderColor="#c9cccf"},onMouseLeave:o=>{o.currentTarget.style.backgroundColor="white",o.currentTarget.style.borderColor="#e1e3e5"},children:[x.jsxDEV(ot,{source:bi,tone:"subdued"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:284,columnNumber:29},void 0),x.jsxDEV("span",{children:"Visit"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:285,columnNumber:29},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:254,columnNumber:27},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:207,columnNumber:25},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:180,columnNumber:23},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:173,columnNumber:21},void 0),x.jsxDEV("td",{style:{padding:"12px 16px",verticalAlign:"middle",whiteSpace:"nowrap",minWidth:"100px"},children:x.jsxDEV(Qa,{category:r.category},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:298,columnNumber:23},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:290,columnNumber:21},void 0),x.jsxDEV("td",{style:{padding:"12px 16px",verticalAlign:"middle",whiteSpace:"nowrap",minWidth:"120px"},children:x.jsxDEV(Aa,{status:r.mentioned,competitors:r.competitors},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:308,columnNumber:23},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:300,columnNumber:21},void 0),x.jsxDEV("td",{style:{textAlign:"right",padding:"12px 16px",verticalAlign:"middle"},children:x.jsxDEV("div",{style:{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:"2px"},children:[x.jsxDEV(me,{as:"span",variant:"bodyMd",fontWeight:"medium",children:[r.share,"%"]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:328,columnNumber:25},void 0),x.jsxDEV("span",{style:{color:"#219653"},children:x.jsxDEV(me,{as:"span",variant:"bodySm",tone:"success",children:["+",r.change,"%"]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:332,columnNumber:27},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:331,columnNumber:25},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:320,columnNumber:23},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:313,columnNumber:21},void 0)]},r.rank,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:155,columnNumber:19},void 0)})},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:149,columnNumber:13},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:51,columnNumber:11},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:50,columnNumber:9},void 0),x.jsxDEV("div",{style:{padding:"16px",borderTop:"1px solid #f1f2f4"},children:x.jsxDEV(_t,{align:"space-between",blockAlign:"center",children:[x.jsxDEV(_i,{variant:"plain",onClick:e,children:"Expand"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:348,columnNumber:13},void 0),x.jsxDEV(me,{as:"span",variant:"bodySm",tone:"subdued",children:["Showing 1-20 of ",i.length," items"]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:351,columnNumber:13},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:347,columnNumber:11},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:346,columnNumber:9},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:48,columnNumber:7},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationPagesCard.tsx",lineNumber:28,columnNumber:5},void 0)};function Ls({open:i,onClose:e,title:t,data:n,resourceName:r,columns:s,renderRow:a,searchPlaceholder:o="Search...",filterFunction:l,itemsPerPage:c=20}){const[u,d]=Ae.useState(""),[h,p]=Ae.useState(1);Ae.useEffect(()=>{i&&(d(""),p(1))},[i]),Ae.useEffect(()=>{p(1)},[u]);const g=Ae.useMemo(()=>{if(!u)return n;if(l)return n.filter(F=>l(F,u));const D=u.toLowerCase();return n.filter(F=>Object.values(F).some(M=>String(M).toLowerCase().includes(D)))},[n,u,l]),_=g.length,m=Math.ceil(_/c),f=Ae.useMemo(()=>{const D=(h-1)*c;return g.slice(D,D+c)},[g,h,c]),{selectedResources:T,allResourcesSelected:S,handleSelectionChange:N}=xc(f),P=()=>{h<m&&p(D=>D+1)},E=()=>{h>1&&p(D=>D-1)};return x.jsxDEV(lo,{open:i,onClose:e,title:t,large:!0,children:x.jsxDEV(lo.Section,{children:x.jsxDEV(St,{gap:"400",children:[x.jsxDEV(gc,{label:"Search",labelHidden:!0,value:u,onChange:d,placeholder:o,prefix:x.jsxDEV(ot,{source:vc},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/ExpandedModalTable.tsx",lineNumber:96,columnNumber:33},this),autoComplete:"off",clearButton:!0,onClearButtonClick:()=>d("")},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/ExpandedModalTable.tsx",lineNumber:90,columnNumber:21},this),x.jsxDEV(Fn,{padding:"0",children:f.length>0?x.jsxDEV(gt,{resourceName:r,itemCount:_,selectedItemsCount:S?"All":T.length,onSelectionChange:N,headings:s,selectable:!1,children:f.map((D,F)=>x.jsxDEV("div",{style:{display:"contents"},children:a(D,F)},D.id||F,!1,{fileName:"D:/naridon-aio/src/components/monitor/ExpandedModalTable.tsx",lineNumber:113,columnNumber:37},this))},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/ExpandedModalTable.tsx",lineNumber:104,columnNumber:29},this):x.jsxDEV("div",{style:{padding:"32px",textAlign:"center"},children:x.jsxDEV(me,{as:"p",variant:"bodyMd",tone:"subdued",children:"No results found"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/ExpandedModalTable.tsx",lineNumber:120,columnNumber:33},this)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/ExpandedModalTable.tsx",lineNumber:119,columnNumber:29},this)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/ExpandedModalTable.tsx",lineNumber:102,columnNumber:21},this),m>1&&x.jsxDEV("div",{style:{display:"flex",justifyContent:"center",marginTop:"16px"},children:x.jsxDEV(_c,{hasPrevious:h>1,onPrevious:E,hasNext:h<m,onNext:P,label:`Page ${h} of ${m}`},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/ExpandedModalTable.tsx",lineNumber:127,columnNumber:29},this)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/ExpandedModalTable.tsx",lineNumber:126,columnNumber:25},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/ExpandedModalTable.tsx",lineNumber:89,columnNumber:17},this)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/ExpandedModalTable.tsx",lineNumber:88,columnNumber:13},this)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/ExpandedModalTable.tsx",lineNumber:82,columnNumber:9},this)}const R0=({isRankModalOpen:i,toggleRankModal:e,topCitationDomains:t,expandedDomains:n,toggleDomain:r,isPagesModalOpen:s,togglePagesModal:a,topCitationPages:o,selectedDomainForDetails:l,closeDomainDetails:c,selectedDomainData:u})=>x.jsxDEV(x.Fragment,{children:[x.jsxDEV(Ls,{open:i,onClose:e,title:"Citation Rank",data:t,resourceName:{singular:"domain",plural:"domains"},columns:[{title:"Domain"},{title:"Share",alignment:"end"},{title:"",alignment:"end"}],renderRow:(d,h)=>{const p=n.has(d.domain);return x.jsxDEV(x.Fragment,{children:[x.jsxDEV(gt.Row,{id:d.domain,position:h,onClick:()=>r(d.domain),children:[x.jsxDEV(gt.Cell,{children:x.jsxDEV(_t,{gap:"200",blockAlign:"center",children:[x.jsxDEV(me,{as:"span",variant:"bodySm",fontWeight:"medium",tone:"subdued",children:[d.rank,"."]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:66,columnNumber:21},void 0),x.jsxDEV(Ji,{iconType:d.iconType,domain:d.domain,iconText:d.iconText,iconColor:d.iconColor,iconShape:d.iconShape},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:74,columnNumber:21},void 0),x.jsxDEV(me,{as:"span",variant:"bodyMd",children:d.domain},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:81,columnNumber:21},void 0),d.subdomains>0&&x.jsxDEV("div",{style:{display:"flex",alignItems:"center"},children:x.jsxDEV(_t,{gap:"050",blockAlign:"center",children:[x.jsxDEV(me,{as:"span",variant:"bodySm",tone:"subdued",children:[d.subdomains," ",d.subdomains===1?"page":"pages"]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:87,columnNumber:27},void 0),x.jsxDEV(ot,{source:p?Mc:Sc,tone:"subdued"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:91,columnNumber:27},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:86,columnNumber:25},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:85,columnNumber:23},void 0),d.category==="Owned"&&x.jsxDEV(wa,{tone:"success",children:"Owned"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:99,columnNumber:23},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:65,columnNumber:19},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:64,columnNumber:17},void 0),x.jsxDEV(gt.Cell,{children:x.jsxDEV("div",{style:{textAlign:"right"},children:x.jsxDEV(me,{as:"span",variant:"bodyMd",fontWeight:"medium",children:[d.share,"%"]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:105,columnNumber:21},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:104,columnNumber:19},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:103,columnNumber:17},void 0),x.jsxDEV(gt.Cell,{children:x.jsxDEV("div",{style:{textAlign:"right"},children:x.jsxDEV(me,{as:"span",variant:"bodyMd",tone:"subdued",children:"-"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:112,columnNumber:21},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:111,columnNumber:19},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:110,columnNumber:17},void 0)]},d.domain,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:58,columnNumber:15},void 0),p&&d.pages&&d.pages.map((g,_)=>{const m=g.url.startsWith("http")?g.url:`https://${g.url}`;return x.jsxDEV(gt.Row,{id:`${d.domain}-page-${_}`,position:h,tone:"subdued",children:[x.jsxDEV(gt.Cell,{children:x.jsxDEV("div",{style:{paddingLeft:"48px",display:"flex",alignItems:"center",gap:"8px"},children:[x.jsxDEV("div",{style:{width:"20px",height:"20px",borderRadius:"4px",backgroundColor:"#f1f2f4",display:"flex",alignItems:"center",justifyContent:"center",color:"#6d7175",fontSize:"11px",fontWeight:600},children:["#",_+1]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:140,columnNumber:27},void 0),x.jsxDEV(me,{as:"span",variant:"bodySm",tone:"subdued",truncate:!0,children:g.url},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:156,columnNumber:27},void 0),x.jsxDEV("button",{onClick:f=>{f.stopPropagation(),window.open(m,"_blank")},style:{background:"none",border:"none",cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"},title:"Visit page",children:x.jsxDEV(ot,{source:bi,tone:"subdued"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:179,columnNumber:29},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:164,columnNumber:27},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:132,columnNumber:25},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:131,columnNumber:23},void 0),x.jsxDEV(gt.Cell,{children:x.jsxDEV("div",{style:{textAlign:"right"},children:x.jsxDEV(me,{as:"span",variant:"bodySm",tone:"subdued",children:[g.share,"%"]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:185,columnNumber:27},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:184,columnNumber:25},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:183,columnNumber:23},void 0),x.jsxDEV(gt.Cell,{},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:190,columnNumber:23},void 0)]},`${d.domain}-page-${_}`,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:125,columnNumber:21},void 0)})]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:57,columnNumber:13},void 0)}},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:43,columnNumber:7},void 0),x.jsxDEV(Ls,{open:s,onClose:a,title:"Top Citation Pages",data:o,resourceName:{singular:"page",plural:"pages"},columns:[{title:"Rank"},{title:"Page"},{title:"Category"},{title:"Mentioned"},{title:"Share",alignment:"end"}],renderRow:(d,h)=>{const p=d.page.startsWith("http")?d.page:`https://${d.page}`;return x.jsxDEV(gt.Row,{id:d.page,position:h,children:[x.jsxDEV(gt.Cell,{children:x.jsxDEV(me,{as:"span",variant:"bodyMd",fontWeight:"medium",children:d.rank},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:222,columnNumber:17},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:221,columnNumber:15},void 0),x.jsxDEV(gt.Cell,{children:x.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[x.jsxDEV(Ji,{iconType:d.iconType,domain:d.domain,iconText:d.iconText,iconColor:d.iconColor},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:230,columnNumber:19},void 0),x.jsxDEV("div",{style:{maxWidth:"300px"},children:x.jsxDEV(me,{as:"span",variant:"bodyMd",truncate:!0,children:d.page},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:237,columnNumber:21},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:236,columnNumber:19},void 0),x.jsxDEV("button",{onClick:g=>{g.stopPropagation(),window.open(p,"_blank")},style:{background:"none",border:"none",cursor:"pointer",padding:"0",display:"flex",alignItems:"center"},title:"Visit page",children:x.jsxDEV(ot,{source:bi,tone:"subdued"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:256,columnNumber:21},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:241,columnNumber:19},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:227,columnNumber:17},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:226,columnNumber:15},void 0),x.jsxDEV(gt.Cell,{children:x.jsxDEV(Qa,{category:d.category},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:261,columnNumber:17},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:260,columnNumber:15},void 0),x.jsxDEV(gt.Cell,{children:x.jsxDEV(Aa,{status:d.mentioned,competitors:d.competitors},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:264,columnNumber:17},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:263,columnNumber:15},void 0),x.jsxDEV(gt.Cell,{children:x.jsxDEV("div",{style:{textAlign:"right",display:"flex",justifyContent:"flex-end",gap:"4px"},children:[x.jsxDEV(me,{as:"span",variant:"bodyMd",fontWeight:"medium",children:[d.share,"%"]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:278,columnNumber:19},void 0),x.jsxDEV(me,{as:"span",variant:"bodySm",tone:"success",children:["+",d.change,"%"]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:281,columnNumber:19},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:270,columnNumber:17},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:269,columnNumber:15},void 0)]},d.page,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:220,columnNumber:13},void 0)}},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:202,columnNumber:7},void 0),x.jsxDEV(Ls,{open:!!l,onClose:c,title:`Pages from ${l||""}`,data:(u==null?void 0:u.pages)||[],resourceName:{singular:"page",plural:"pages"},columns:[{title:"Rank"},{title:"Page"},{title:"Mentioned"},{title:"Share",alignment:"end"}],renderRow:(d,h)=>{const p=d.url.startsWith("http")?d.url:`https://${d.url}`;return x.jsxDEV(gt.Row,{id:d.url,position:h,children:[x.jsxDEV(gt.Cell,{children:x.jsxDEV("div",{style:{width:"24px",height:"24px",borderRadius:"4px",backgroundColor:"#f1f2f4",display:"flex",alignItems:"center",justifyContent:"center",color:"#6d7175",fontSize:"12px",fontWeight:600},children:["#",h+1]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:311,columnNumber:17},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:310,columnNumber:15},void 0),x.jsxDEV(gt.Cell,{children:x.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[x.jsxDEV("div",{style:{maxWidth:"350px"},children:x.jsxDEV(me,{as:"span",variant:"bodyMd",truncate:!0,children:d.url},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:333,columnNumber:21},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:332,columnNumber:19},void 0),x.jsxDEV("button",{onClick:g=>{g.stopPropagation(),window.open(p,"_blank")},style:{background:"none",border:"none",cursor:"pointer",padding:"2px",display:"flex",alignItems:"center"},title:"Visit page",children:x.jsxDEV(ot,{source:bi,tone:"subdued"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:352,columnNumber:21},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:337,columnNumber:19},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:329,columnNumber:17},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:328,columnNumber:15},void 0),x.jsxDEV(gt.Cell,{children:x.jsxDEV(Aa,{status:d.mentioned,competitors:d.competitors},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:357,columnNumber:17},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:356,columnNumber:15},void 0),x.jsxDEV(gt.Cell,{children:x.jsxDEV("div",{style:{textAlign:"right"},children:x.jsxDEV(me,{as:"span",variant:"bodyMd",fontWeight:"medium",children:[d.share,"%"]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:364,columnNumber:19},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:363,columnNumber:17},void 0)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:362,columnNumber:15},void 0)]},h,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:309,columnNumber:13},void 0)}},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:292,columnNumber:7},void 0)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/citation/CitationModals.tsx",lineNumber:41,columnNumber:5},void 0);function P0({topics:i=[],data:e,brandName:t}){const[n,r]=Ae.useState("bar"),[s,a]=Ae.useState([]),[o,l]=Ae.useState(!1),[c,u]=Ae.useState(!1),[d,h]=Ae.useState(null),[p,g]=Ae.useState(new Set),_=Ae.useMemo(()=>{var V;return(V=e==null?void 0:e.topCitationDomains)==null?void 0:V.find(Q=>Q.domain===d)},[d,e]),m=Ae.useCallback(()=>l(V=>!V),[]),f=Ae.useCallback(()=>u(V=>!V),[]),T=V=>{h(V)},S=V=>{const Q=new Set(p);Q.has(V)?Q.delete(V):Q.add(V),g(Q)},N=()=>h(null),P=(e==null?void 0:e.barChartData)||[],E=Ae.useMemo(()=>(e==null?void 0:e.lineChartData)||[],[e]),D=(e==null?void 0:e.citationTypesData)||[{name:"Citation Types",Earned:0,Social:0,Owned:0,Competition:0}],F=(e==null?void 0:e.topCitationDomains)||[],M=(e==null?void 0:e.topCitationPages)||[],y=(e==null?void 0:e.totalCitations)||0,L=(e==null?void 0:e.citationGraph)||null,B=F.find(V=>V.category==="Owned"),H=B?`#${B.rank}`:"-",A=B?`${B.share}%`:"-",k=Ae.useMemo(()=>!E||E.length===0?[]:Object.keys(E[0]).filter(Q=>Q!=="date"),[E]);return x.jsxDEV(St,{gap:"600",children:[x.jsxDEV(_t,{align:"space-between",blockAlign:"center",children:[x.jsxDEV(St,{gap:"050",children:[x.jsxDEV(_t,{gap:"200",blockAlign:"center",align:"start",children:[x.jsxDEV(me,{variant:"headingMd",as:"h2",children:["Citation Share"," "]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/MonitorCitation.tsx",lineNumber:114,columnNumber:13},this),x.jsxDEV(Sn,{content:"The percentage of all citations that come from your brand's website. This chart helps you track how often your content is being used as a source in AI-generated answers over time.",children:x.jsxDEV(ot,{source:On,tone:"base"},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/MonitorCitation.tsx",lineNumber:118,columnNumber:15},this)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/MonitorCitation.tsx",lineNumber:117,columnNumber:13},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/MonitorCitation.tsx",lineNumber:113,columnNumber:11},this),x.jsxDEV(me,{variant:"bodySm",tone:"subdued",as:"span",children:["How often ",t||"your brand"," is cited by AI-generated answers"]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/MonitorCitation.tsx",lineNumber:121,columnNumber:11},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/MonitorCitation.tsx",lineNumber:112,columnNumber:9},this),x.jsxDEV(yc,{label:"Chart Config",options:[{value:"bar",label:"Bar Chart",icon:bl},{value:"line",label:"Line Chart",icon:bc}],selectedValue:n,onSelect:V=>r(V)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/MonitorCitation.tsx",lineNumber:126,columnNumber:9},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/MonitorCitation.tsx",lineNumber:111,columnNumber:7},this),x.jsxDEV(Zr,{children:[x.jsxDEV(Zr.Cell,{columnSpan:{xs:6,sm:6,md:6,lg:6,xl:6},children:x.jsxDEV(C0,{view:n,barChartData:P,lineChartData:E,lineChartDomains:k,citationTypesData:D,rankDisplay:H},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/MonitorCitation.tsx",lineNumber:140,columnNumber:11},this)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/MonitorCitation.tsx",lineNumber:139,columnNumber:9},this),x.jsxDEV(Zr.Cell,{columnSpan:{xs:6,sm:6,md:6,lg:6,xl:6},children:x.jsxDEV(T0,{topCitationDomains:F,rankDisplay:H,rankShare:A,toggleRankModal:m,handleDomainClick:T},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/MonitorCitation.tsx",lineNumber:152,columnNumber:11},this)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/MonitorCitation.tsx",lineNumber:151,columnNumber:9},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/MonitorCitation.tsx",lineNumber:137,columnNumber:7},this),x.jsxDEV(R0,{isRankModalOpen:o,toggleRankModal:m,topCitationDomains:F,expandedDomains:p,toggleDomain:S,isPagesModalOpen:c,togglePagesModal:f,topCitationPages:M,selectedDomainForDetails:d,closeDomainDetails:N,selectedDomainData:_},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/MonitorCitation.tsx",lineNumber:162,columnNumber:7},this),x.jsxDEV(A0,{citationTypesData:D,totalCitations:y,hiddenSeries:s,setHiddenSeries:a},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/MonitorCitation.tsx",lineNumber:177,columnNumber:7},this),L&&x.jsxDEV("div",{style:{marginBottom:"20px"},children:x.jsxDEV(M0,{data:L},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/MonitorCitation.tsx",lineNumber:186,columnNumber:11},this)},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/MonitorCitation.tsx",lineNumber:185,columnNumber:9},this),x.jsxDEV(w0,{topCitationDomains:F,handleDomainClick:T,onExpand:m},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/MonitorCitation.tsx",lineNumber:194,columnNumber:7},this),x.jsxDEV(D0,{topCitationPages:M,togglePagesModal:f},void 0,!1,{fileName:"D:/naridon-aio/src/components/monitor/MonitorCitation.tsx",lineNumber:201,columnNumber:7},this)]},void 0,!0,{fileName:"D:/naridon-aio/src/components/monitor/MonitorCitation.tsx",lineNumber:110,columnNumber:5},this)}const Px=Object.freeze(Object.defineProperty({__proto__:null,MonitorCitation:P0},Symbol.toStringTag,{value:"Module"}));export{Yc as $,Ut as A,$t as B,Dx as C,Vn as D,xn as E,kl as F,zi as G,wi as H,tx as I,yx as J,Mx as K,ox as L,F0 as M,Un as N,Ex as O,qn as P,ql as Q,Ax as R,Ka as S,O0 as T,bx as U,be as V,nn as W,Sx as X,_x as Y,Cx as Z,qc as _,I as a,Vc as a$,$c as a0,Kc as a1,Jc as a2,Qc as a3,ei as a4,cx as a5,Hl as a6,$l as a7,Ft as a8,Gt as a9,$s as aA,vn as aB,Ys as aC,Kn as aD,Jr as aE,sr as aF,ed as aG,Pt as aH,ld as aI,od as aJ,cd as aK,ad as aL,Rl as aM,sd as aN,dd as aO,rd as aP,Fr as aQ,Ln as aR,_n as aS,Go as aT,wc as aU,Ac as aV,Oc as aW,Bc as aX,Vs as aY,Uc as aZ,Fc as a_,Ru as aa,jr as ab,ln as ac,qi as ad,Zn as ae,$i as af,Yi as ag,qa as ah,Nc as ai,Yn as aj,Pc as ak,Qi as al,_s as am,Xs as an,qs as ao,Gr as ap,Bl as aq,Et as ar,ex as as,tt as at,Vl as au,Ge as av,Ua as aw,Or as ax,ud as ay,Fa as az,it as b,Sa as b$,zc as b0,Os as b1,Ic as b2,Lc as b3,Ec as b4,co as b5,Cc as b6,bn as b7,fo as b8,ho as b9,Lr as bA,Ir as bB,Ks as bC,Zs as bD,Js as bE,Qs as bF,ea as bG,ta as bH,na as bI,ia as bJ,ra as bK,sa as bL,aa as bM,oa as bN,la as bO,ca as bP,da as bQ,ua as bR,ha as bS,fa as bT,pa as bU,ma as bV,xa as bW,ga as bX,ba as bY,ya as bZ,Ma as b_,uo as ba,yi as bb,js as bc,Ws as bd,Hs as be,Gs as bf,Si as bg,ks as bh,zs as bi,Bs as bj,Oa as bk,Va as bl,Tl as bm,Nl as bn,El as bo,Cl as bp,Xi as bq,Al as br,wl as bs,Dl as bt,Ba as bu,za as bv,ka as bw,Ga as bx,Rr as by,Pr as bz,wr as c,Cn as c$,tu as c0,hx as c1,yu as c2,ux as c3,fx as c4,px as c5,xx as c6,gx as c7,lx as c8,sx as c9,B0 as cA,Xc as cB,jc as cC,kr as cD,nx as cE,Sl as cF,Yt as cG,Jd as cH,tr as cI,Zd as cJ,V0 as cK,Hr as cL,mn as cM,Ei as cN,Ci as cO,Qn as cP,id as cQ,Nx as cR,ax as cS,Ll as cT,Ti as cU,Ea as cV,eu as cW,zl as cX,Vr as cY,wx as cZ,ja as c_,dx as ca,Ct as cb,Ni as cc,Fl as cd,Ul as ce,Pl as cf,Kl as cg,J0 as ch,Z0 as ci,Q0 as cj,$0 as ck,K0 as cl,Y0 as cm,po as cn,q0 as co,j0 as cp,W0 as cq,H0 as cr,G0 as cs,X0 as ct,k0 as cu,z0 as cv,ii as cw,Rc as cx,Dc as cy,ix as cz,En as d,Yd as d0,Jn as d1,Tx as d2,vx as d3,Rx as d4,Px as d5,Ue as e,mx as f,Ht as g,Ya as h,er as i,mu as j,Gl as k,jl as l,Yl as m,y0 as n,Xt as o,Ml as p,rx as q,Zi as r,pt as s,Je as t,Ld as u,qt as v,Ie as w,tn as x,nt as y,Wr as z};
//# sourceMappingURL=MonitorCitation-ZQaULEMJ.js.map
