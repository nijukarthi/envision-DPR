import{$ as Ie,$c as on,Ab as lt,Ac as ve,Bb as Fi,Bc as _e,C as Ei,Cb as Ni,Cc as Tt,Db as Ri,Eb as U,F as wi,Fb as W,Fc as Vn,Gb as H,Hb as Ye,Ib as Xe,Ic as Ce,Jb as Ze,Kb as Jt,L as Si,Mb as oe,Nb as M,Ob as Je,Oc as Bi,Pb as et,Pc as dt,R as xi,Rc as nn,Sb as ne,Tb as $i,U as rt,Ub as J,Uc as Ui,V as re,Va as x,Vb as ee,Vc as Fe,W as C,Wa as k,Wb as Ln,X as $,Xb as Li,Ya as Di,Z,Zb as ct,Zc as ae,_a as xt,_b as ut,a as w,aa as g,ab as ie,ad as Pn,b as fe,bb as $n,cd as ji,d as Mn,da as Xt,ec as A,fa as Ti,fc as Vi,g as Fn,ga as Ii,gb as L,gc as Oe,ha as se,hb as V,hc as en,ia as st,ib as I,j as pe,ja as at,ka as Ae,kb as E,ma as b,mb as te,n as Yt,nb as B,o as Nn,oa as Rn,pb as ki,qa as Ai,ra as G,rb as Oi,s as qe,sa as Zt,tc as Pi,ua as De,ub as T,va as Ke,vb as y,vc as tn,wb as Mi,xb as ge,y as Ci,yb as Qe,yc as m,za as ke,zb as q,zc as Me}from"./chunk-7LWK2RYU.js";var At=class{},sn=class{},Se=class e{headers;normalizedNames=new Map;lazyInit;lazyUpdate=null;constructor(n){n?typeof n=="string"?this.lazyInit=()=>{this.headers=new Map,n.split(`
`).forEach(t=>{let i=t.indexOf(":");if(i>0){let o=t.slice(0,i),r=t.slice(i+1).trim();this.addHeaderEntry(o,r)}})}:typeof Headers<"u"&&n instanceof Headers?(this.headers=new Map,n.forEach((t,i)=>{this.addHeaderEntry(i,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(n).forEach(([t,i])=>{this.setHeaderEntries(t,i)})}:this.headers=new Map}has(n){return this.init(),this.headers.has(n.toLowerCase())}get(n){this.init();let t=this.headers.get(n.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(n){return this.init(),this.headers.get(n.toLowerCase())||null}append(n,t){return this.clone({name:n,value:t,op:"a"})}set(n,t){return this.clone({name:n,value:t,op:"s"})}delete(n,t){return this.clone({name:n,value:t,op:"d"})}maybeSetNormalizedName(n,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,n)}init(){this.lazyInit&&(this.lazyInit instanceof e?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(n=>this.applyUpdate(n)),this.lazyUpdate=null))}copyFrom(n){n.init(),Array.from(n.headers.keys()).forEach(t=>{this.headers.set(t,n.headers.get(t)),this.normalizedNames.set(t,n.normalizedNames.get(t))})}clone(n){let t=new e;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof e?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([n]),t}applyUpdate(n){let t=n.name.toLowerCase();switch(n.op){case"a":case"s":let i=n.value;if(typeof i=="string"&&(i=[i]),i.length===0)return;this.maybeSetNormalizedName(n.name,t);let o=(n.op==="a"?this.headers.get(t):void 0)||[];o.push(...i),this.headers.set(t,o);break;case"d":let r=n.value;if(!r)this.headers.delete(t),this.normalizedNames.delete(t);else{let s=this.headers.get(t);if(!s)return;s=s.filter(a=>r.indexOf(a)===-1),s.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,s)}break}}addHeaderEntry(n,t){let i=n.toLowerCase();this.maybeSetNormalizedName(n,i),this.headers.has(i)?this.headers.get(i).push(t):this.headers.set(i,[t])}setHeaderEntries(n,t){let i=(Array.isArray(t)?t:[t]).map(r=>r.toString()),o=n.toLowerCase();this.headers.set(o,i),this.maybeSetNormalizedName(n,o)}forEach(n){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>n(this.normalizedNames.get(t),this.headers.get(t)))}};var Un=class{encodeKey(n){return Wi(n)}encodeValue(n){return Wi(n)}decodeKey(n){return decodeURIComponent(n)}decodeValue(n){return decodeURIComponent(n)}};function Hr(e,n){let t=new Map;return e.length>0&&e.replace(/^\?/,"").split("&").forEach(o=>{let r=o.indexOf("="),[s,a]=r==-1?[n.decodeKey(o),""]:[n.decodeKey(o.slice(0,r)),n.decodeValue(o.slice(r+1))],l=t.get(s)||[];l.push(a),t.set(s,l)}),t}var zr=/%(\d[a-f0-9])/gi,Gr={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function Wi(e){return encodeURIComponent(e).replace(zr,(n,t)=>Gr[t]??n)}function rn(e){return`${e}`}var Re=class e{map;encoder;updates=null;cloneFrom=null;constructor(n={}){if(this.encoder=n.encoder||new Un,n.fromString){if(n.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=Hr(n.fromString,this.encoder)}else n.fromObject?(this.map=new Map,Object.keys(n.fromObject).forEach(t=>{let i=n.fromObject[t],o=Array.isArray(i)?i.map(rn):[rn(i)];this.map.set(t,o)})):this.map=null}has(n){return this.init(),this.map.has(n)}get(n){this.init();let t=this.map.get(n);return t?t[0]:null}getAll(n){return this.init(),this.map.get(n)||null}keys(){return this.init(),Array.from(this.map.keys())}append(n,t){return this.clone({param:n,value:t,op:"a"})}appendAll(n){let t=[];return Object.keys(n).forEach(i=>{let o=n[i];Array.isArray(o)?o.forEach(r=>{t.push({param:i,value:r,op:"a"})}):t.push({param:i,value:o,op:"a"})}),this.clone(t)}set(n,t){return this.clone({param:n,value:t,op:"s"})}delete(n,t){return this.clone({param:n,value:t,op:"d"})}toString(){return this.init(),this.keys().map(n=>{let t=this.encoder.encodeKey(n);return this.map.get(n).map(i=>t+"="+this.encoder.encodeValue(i)).join("&")}).filter(n=>n!=="").join("&")}clone(n){let t=new e({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(n),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(n=>this.map.set(n,this.cloneFrom.map.get(n))),this.updates.forEach(n=>{switch(n.op){case"a":case"s":let t=(n.op==="a"?this.map.get(n.param):void 0)||[];t.push(rn(n.value)),this.map.set(n.param,t);break;case"d":if(n.value!==void 0){let i=this.map.get(n.param)||[],o=i.indexOf(rn(n.value));o!==-1&&i.splice(o,1),i.length>0?this.map.set(n.param,i):this.map.delete(n.param)}else{this.map.delete(n.param);break}}}),this.cloneFrom=this.updates=null)}};var jn=class{map=new Map;set(n,t){return this.map.set(n,t),this}get(n){return this.map.has(n)||this.map.set(n,n.defaultValue()),this.map.get(n)}delete(n){return this.map.delete(n),this}has(n){return this.map.has(n)}keys(){return this.map.keys()}};function qr(e){switch(e){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function Hi(e){return typeof ArrayBuffer<"u"&&e instanceof ArrayBuffer}function zi(e){return typeof Blob<"u"&&e instanceof Blob}function Gi(e){return typeof FormData<"u"&&e instanceof FormData}function Kr(e){return typeof URLSearchParams<"u"&&e instanceof URLSearchParams}var It=class e{url;body=null;headers;context;reportProgress=!1;withCredentials=!1;responseType="json";method;params;urlWithParams;transferCache;constructor(n,t,i,o){this.url=t,this.method=n.toUpperCase();let r;if(qr(this.method)||o?(this.body=i!==void 0?i:null,r=o):r=i,r&&(this.reportProgress=!!r.reportProgress,this.withCredentials=!!r.withCredentials,r.responseType&&(this.responseType=r.responseType),r.headers&&(this.headers=r.headers),r.context&&(this.context=r.context),r.params&&(this.params=r.params),this.transferCache=r.transferCache),this.headers??=new Se,this.context??=new jn,!this.params)this.params=new Re,this.urlWithParams=t;else{let s=this.params.toString();if(s.length===0)this.urlWithParams=t;else{let a=t.indexOf("?"),l=a===-1?"?":a<t.length-1?"&":"";this.urlWithParams=t+l+s}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||Hi(this.body)||zi(this.body)||Gi(this.body)||Kr(this.body)?this.body:this.body instanceof Re?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||Gi(this.body)?null:zi(this.body)?this.body.type||null:Hi(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof Re?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(n={}){let t=n.method||this.method,i=n.url||this.url,o=n.responseType||this.responseType,r=n.transferCache??this.transferCache,s=n.body!==void 0?n.body:this.body,a=n.withCredentials??this.withCredentials,l=n.reportProgress??this.reportProgress,c=n.headers||this.headers,u=n.params||this.params,d=n.context??this.context;return n.setHeaders!==void 0&&(c=Object.keys(n.setHeaders).reduce((p,h)=>p.set(h,n.setHeaders[h]),c)),n.setParams&&(u=Object.keys(n.setParams).reduce((p,h)=>p.set(h,n.setParams[h]),u)),new e(t,i,s,{params:u,headers:c,context:d,reportProgress:l,responseType:o,withCredentials:a,transferCache:r})}},$e=function(e){return e[e.Sent=0]="Sent",e[e.UploadProgress=1]="UploadProgress",e[e.ResponseHeader=2]="ResponseHeader",e[e.DownloadProgress=3]="DownloadProgress",e[e.Response=4]="Response",e[e.User=5]="User",e}($e||{}),Dt=class{headers;status;statusText;url;ok;type;constructor(n,t=200,i="OK"){this.headers=n.headers||new Se,this.status=n.status!==void 0?n.status:t,this.statusText=n.statusText||i,this.url=n.url||null,this.ok=this.status>=200&&this.status<300}},an=class e extends Dt{constructor(n={}){super(n)}type=$e.ResponseHeader;clone(n={}){return new e({headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},kt=class e extends Dt{body;constructor(n={}){super(n),this.body=n.body!==void 0?n.body:null}type=$e.Response;clone(n={}){return new e({body:n.body!==void 0?n.body:this.body,headers:n.headers||this.headers,status:n.status!==void 0?n.status:this.status,statusText:n.statusText||this.statusText,url:n.url||this.url||void 0})}},Ne=class extends Dt{name="HttpErrorResponse";message;error;ok=!1;constructor(n){super(n,0,"Unknown Error"),this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${n.url||"(unknown url)"}`:this.message=`Http failure response for ${n.url||"(unknown url)"}: ${n.status} ${n.statusText}`,this.error=n.error||null}},Yi=200,Qr=204;function Bn(e,n){return{body:n,headers:e.headers,context:e.context,observe:e.observe,params:e.params,reportProgress:e.reportProgress,responseType:e.responseType,withCredentials:e.withCredentials,transferCache:e.transferCache}}var Yr=(()=>{class e{handler;constructor(t){this.handler=t}request(t,i,o={}){let r;if(t instanceof It)r=t;else{let l;o.headers instanceof Se?l=o.headers:l=new Se(o.headers);let c;o.params&&(o.params instanceof Re?c=o.params:c=new Re({fromObject:o.params})),r=new It(t,i,o.body!==void 0?o.body:null,{headers:l,context:o.context,params:c,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache})}let s=Nn(r).pipe(wi(l=>this.handler.handle(l)));if(t instanceof It||o.observe==="events")return s;let a=s.pipe(Ei(l=>l instanceof kt));switch(o.observe||"body"){case"body":switch(r.responseType){case"arraybuffer":return a.pipe(qe(l=>{if(l.body!==null&&!(l.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return l.body}));case"blob":return a.pipe(qe(l=>{if(l.body!==null&&!(l.body instanceof Blob))throw new Error("Response is not a Blob.");return l.body}));case"text":return a.pipe(qe(l=>{if(l.body!==null&&typeof l.body!="string")throw new Error("Response is not a string.");return l.body}));case"json":default:return a.pipe(qe(l=>l.body))}case"response":return a;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(t,i={}){return this.request("DELETE",t,i)}get(t,i={}){return this.request("GET",t,i)}head(t,i={}){return this.request("HEAD",t,i)}jsonp(t,i){return this.request("JSONP",t,{params:new Re().append(i,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(t,i={}){return this.request("OPTIONS",t,i)}patch(t,i,o={}){return this.request("PATCH",t,Bn(o,i))}post(t,i,o={}){return this.request("POST",t,Bn(o,i))}put(t,i,o={}){return this.request("PUT",t,Bn(o,i))}static \u0275fac=function(i){return new(i||e)(Ie(At))};static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})(),Xr=/^\)\]\}',?\n/,Zr="X-Request-URL";function qi(e){if(e.url)return e.url;let n=Zr.toLocaleLowerCase();return e.headers.get(n)}var Jr=(()=>{class e{fetchImpl=g(Wn,{optional:!0})?.fetch??((...t)=>globalThis.fetch(...t));ngZone=g(Zt);handle(t){return new Fn(i=>{let o=new AbortController;return this.doRequest(t,o.signal,i).then(Hn,r=>i.error(new Ne({error:r}))),()=>o.abort()})}doRequest(t,i,o){return Mn(this,null,function*(){let r=this.createRequestInit(t),s;try{let h=this.ngZone.runOutsideAngular(()=>this.fetchImpl(t.urlWithParams,w({signal:i},r)));es(h),o.next({type:$e.Sent}),s=yield h}catch(h){o.error(new Ne({error:h,status:h.status??0,statusText:h.statusText,url:t.urlWithParams,headers:h.headers}));return}let a=new Se(s.headers),l=s.statusText,c=qi(s)??t.urlWithParams,u=s.status,d=null;if(t.reportProgress&&o.next(new an({headers:a,status:u,statusText:l,url:c})),s.body){let h=s.headers.get("content-length"),_=[],f=s.body.getReader(),v=0,R,F,O=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>Mn(this,null,function*(){for(;;){let{done:de,value:ye}=yield f.read();if(de)break;if(_.push(ye),v+=ye.length,t.reportProgress){F=t.responseType==="text"?(F??"")+(R??=new TextDecoder).decode(ye,{stream:!0}):void 0;let Ge=()=>o.next({type:$e.DownloadProgress,total:h?+h:void 0,loaded:v,partialText:F});O?O.run(Ge):Ge()}}}));let Q=this.concatChunks(_,v);try{let de=s.headers.get("Content-Type")??"";d=this.parseBody(t,Q,de)}catch(de){o.error(new Ne({error:de,headers:new Se(s.headers),status:s.status,statusText:s.statusText,url:qi(s)??t.urlWithParams}));return}}u===0&&(u=d?Yi:0),u>=200&&u<300?(o.next(new kt({body:d,headers:a,status:u,statusText:l,url:c})),o.complete()):o.error(new Ne({error:d,headers:a,status:u,statusText:l,url:c}))})}parseBody(t,i,o){switch(t.responseType){case"json":let r=new TextDecoder().decode(i).replace(Xr,"");return r===""?null:JSON.parse(r);case"text":return new TextDecoder().decode(i);case"blob":return new Blob([i],{type:o});case"arraybuffer":return i.buffer}}createRequestInit(t){let i={},o=t.withCredentials?"include":void 0;if(t.headers.forEach((r,s)=>i[r]=s.join(",")),t.headers.has("Accept")||(i.Accept="application/json, text/plain, */*"),!t.headers.has("Content-Type")){let r=t.detectContentTypeHeader();r!==null&&(i["Content-Type"]=r)}return{body:t.serializeBody(),method:t.method,headers:i,credentials:o}}concatChunks(t,i){let o=new Uint8Array(i),r=0;for(let s of t)o.set(s,r),r+=s.length;return o}static \u0275fac=function(i){return new(i||e)};static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})(),Wn=class{};function Hn(){}function es(e){e.then(Hn,Hn)}function ts(e,n){return n(e)}function ns(e,n,t){return(i,o)=>Ii(t,()=>n(i,r=>e(r,o)))}var zn=new Z(""),is=new Z(""),os=new Z("",{providedIn:"root",factory:()=>!0});var Ki=(()=>{class e extends At{backend;injector;chain=null;pendingTasks=g(Ai);contributeToStability=g(os);constructor(t,i){super(),this.backend=t,this.injector=i}handle(t){if(this.chain===null){let i=Array.from(new Set([...this.injector.get(zn),...this.injector.get(is,[])]));this.chain=i.reduceRight((o,r)=>ns(o,r,this.injector),ts)}if(this.contributeToStability){let i=this.pendingTasks.add();return this.chain(t,o=>this.backend.handle(o)).pipe(Si(()=>this.pendingTasks.remove(i)))}else return this.chain(t,i=>this.backend.handle(i))}static \u0275fac=function(i){return new(i||e)(Ie(sn),Ie(Ti))};static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var rs=/^\)\]\}',?\n/;function ss(e){return"responseURL"in e&&e.responseURL?e.responseURL:/^X-Request-URL:/m.test(e.getAllResponseHeaders())?e.getResponseHeader("X-Request-URL"):null}var Qi=(()=>{class e{xhrFactory;constructor(t){this.xhrFactory=t}handle(t){if(t.method==="JSONP")throw new rt(-2800,!1);let i=this.xhrFactory;return(i.\u0275loadImpl?Yt(i.\u0275loadImpl()):Nn(null)).pipe(xi(()=>new Fn(r=>{let s=i.build();if(s.open(t.method,t.urlWithParams),t.withCredentials&&(s.withCredentials=!0),t.headers.forEach((f,v)=>s.setRequestHeader(f,v.join(","))),t.headers.has("Accept")||s.setRequestHeader("Accept","application/json, text/plain, */*"),!t.headers.has("Content-Type")){let f=t.detectContentTypeHeader();f!==null&&s.setRequestHeader("Content-Type",f)}if(t.responseType){let f=t.responseType.toLowerCase();s.responseType=f!=="json"?f:"text"}let a=t.serializeBody(),l=null,c=()=>{if(l!==null)return l;let f=s.statusText||"OK",v=new Se(s.getAllResponseHeaders()),R=ss(s)||t.url;return l=new an({headers:v,status:s.status,statusText:f,url:R}),l},u=()=>{let{headers:f,status:v,statusText:R,url:F}=c(),O=null;v!==Qr&&(O=typeof s.response>"u"?s.responseText:s.response),v===0&&(v=O?Yi:0);let Q=v>=200&&v<300;if(t.responseType==="json"&&typeof O=="string"){let de=O;O=O.replace(rs,"");try{O=O!==""?JSON.parse(O):null}catch(ye){O=de,Q&&(Q=!1,O={error:ye,text:O})}}Q?(r.next(new kt({body:O,headers:f,status:v,statusText:R,url:F||void 0})),r.complete()):r.error(new Ne({error:O,headers:f,status:v,statusText:R,url:F||void 0}))},d=f=>{let{url:v}=c(),R=new Ne({error:f,status:s.status||0,statusText:s.statusText||"Unknown Error",url:v||void 0});r.error(R)},p=!1,h=f=>{p||(r.next(c()),p=!0);let v={type:$e.DownloadProgress,loaded:f.loaded};f.lengthComputable&&(v.total=f.total),t.responseType==="text"&&s.responseText&&(v.partialText=s.responseText),r.next(v)},_=f=>{let v={type:$e.UploadProgress,loaded:f.loaded};f.lengthComputable&&(v.total=f.total),r.next(v)};return s.addEventListener("load",u),s.addEventListener("error",d),s.addEventListener("timeout",d),s.addEventListener("abort",d),t.reportProgress&&(s.addEventListener("progress",h),a!==null&&s.upload&&s.upload.addEventListener("progress",_)),s.send(a),r.next({type:$e.Sent}),()=>{s.removeEventListener("error",d),s.removeEventListener("abort",d),s.removeEventListener("load",u),s.removeEventListener("timeout",d),t.reportProgress&&(s.removeEventListener("progress",h),a!==null&&s.upload&&s.upload.removeEventListener("progress",_)),s.readyState!==s.DONE&&s.abort()}})))}static \u0275fac=function(i){return new(i||e)(Ie(ji))};static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})(),Xi=new Z(""),as="XSRF-TOKEN",ls=new Z("",{providedIn:"root",factory:()=>as}),cs="X-XSRF-TOKEN",us=new Z("",{providedIn:"root",factory:()=>cs}),ln=class{},ds=(()=>{class e{doc;platform;cookieName;lastCookieString="";lastToken=null;parseCount=0;constructor(t,i,o){this.doc=t,this.platform=i,this.cookieName=o}getToken(){if(this.platform==="server")return null;let t=this.doc.cookie||"";return t!==this.lastCookieString&&(this.parseCount++,this.lastToken=Bi(t,this.cookieName),this.lastCookieString=t),this.lastToken}static \u0275fac=function(i){return new(i||e)(Ie(Ce),Ie(ke),Ie(ls))};static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();function ps(e,n){let t=e.url.toLowerCase();if(!g(Xi)||e.method==="GET"||e.method==="HEAD"||t.startsWith("http://")||t.startsWith("https://"))return n(e);let i=g(ln).getToken(),o=g(us);return i!=null&&!e.headers.has(o)&&(e=e.clone({headers:e.headers.set(o,i)})),n(e)}var Zi=function(e){return e[e.Interceptors=0]="Interceptors",e[e.LegacyInterceptors=1]="LegacyInterceptors",e[e.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",e[e.NoXsrfProtection=3]="NoXsrfProtection",e[e.JsonpSupport=4]="JsonpSupport",e[e.RequestsMadeViaParent=5]="RequestsMadeViaParent",e[e.Fetch=6]="Fetch",e}(Zi||{});function hs(e,n){return{\u0275kind:e,\u0275providers:n}}function tc(...e){let n=[Yr,Qi,Ki,{provide:At,useExisting:Ki},{provide:sn,useFactory:()=>g(Jr,{optional:!0})??g(Qi)},{provide:zn,useValue:ps,multi:!0},{provide:Xi,useValue:!0},{provide:ln,useClass:ds}];for(let t of e)n.push(...t.\u0275providers);return Xt(n)}function nc(e){return hs(Zi.Interceptors,e.map(n=>({provide:zn,useValue:n,multi:!0})))}function eo(e,n){return e?e.classList?e.classList.contains(n):new RegExp("(^| )"+n+"( |$)","gi").test(e.className):!1}function Le(e,n){if(e&&n){let t=i=>{eo(e,i)||(e.classList?e.classList.add(i):e.className+=" "+i)};[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(t))}}function fs(){return window.innerWidth-document.documentElement.offsetWidth}function pt(e){for(let n of document?.styleSheets)try{for(let t of n?.cssRules)for(let i of t?.style)if(e.test(i))return{name:i,value:t.style.getPropertyValue(i).trim()}}catch{}return null}function sc(e="p-overflow-hidden"){let n=pt(/-scrollbar-width$/);n?.name&&document.body.style.setProperty(n.name,fs()+"px"),Le(document.body,e)}function tt(e,n){if(e&&n){let t=i=>{e.classList?e.classList.remove(i):e.className=e.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," ")};[n].flat().filter(Boolean).forEach(i=>i.split(" ").forEach(t))}}function ac(e="p-overflow-hidden"){let n=pt(/-scrollbar-width$/);n?.name&&document.body.style.removeProperty(n.name),tt(document.body,e)}function to(e){let n={width:0,height:0};return e&&(e.style.visibility="hidden",e.style.display="block",n.width=e.offsetWidth,n.height=e.offsetHeight,e.style.display="none",e.style.visibility="visible"),n}function Kn(){let e=window,n=document,t=n.documentElement,i=n.getElementsByTagName("body")[0],o=e.innerWidth||t.clientWidth||i.clientWidth,r=e.innerHeight||t.clientHeight||i.clientHeight;return{width:o,height:r}}function gs(){let e=document.documentElement;return(window.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}function ms(){let e=document.documentElement;return(window.pageYOffset||e.scrollTop)-(e.clientTop||0)}function lc(e,n,t=!0){var i,o,r,s;if(e){let a=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:to(e),l=a.height,c=a.width,u=n.offsetHeight,d=n.offsetWidth,p=n.getBoundingClientRect(),h=ms(),_=gs(),f=Kn(),v,R,F="top";p.top+u+l>f.height?(v=p.top+h-l,F="bottom",v<0&&(v=h)):v=u+p.top+h,p.left+c>f.width?R=Math.max(0,p.left+_+d-c):R=p.left+_,e.style.top=v+"px",e.style.left=R+"px",e.style.transformOrigin=F,t&&(e.style.marginTop=F==="bottom"?`calc(${(o=(i=pt(/-anchor-gutter$/))==null?void 0:i.value)!=null?o:"2px"} * -1)`:(s=(r=pt(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function no(e,n){e&&(typeof n=="string"?e.style.cssText=n:Object.entries(n||{}).forEach(([t,i])=>e.style[t]=i))}function Qn(e,n){if(e instanceof HTMLElement){let t=e.offsetWidth;if(n){let i=getComputedStyle(e);t+=parseFloat(i.marginLeft)+parseFloat(i.marginRight)}return t}return 0}function cc(e,n,t=!0){var i,o,r,s;if(e){let a=e.offsetParent?{width:e.offsetWidth,height:e.offsetHeight}:to(e),l=n.offsetHeight,c=n.getBoundingClientRect(),u=Kn(),d,p,h="top";c.top+l+a.height>u.height?(d=-1*a.height,h="bottom",c.top+d<0&&(d=-1*c.top)):d=l,a.width>u.width?p=c.left*-1:c.left+a.width>u.width?p=(c.left+a.width-u.width)*-1:p=0,e.style.top=d+"px",e.style.left=p+"px",e.style.transformOrigin=h,t&&(e.style.marginTop=h==="bottom"?`calc(${(o=(i=pt(/-anchor-gutter$/))==null?void 0:i.value)!=null?o:"2px"} * -1)`:(s=(r=pt(/-anchor-gutter$/))==null?void 0:r.value)!=null?s:"")}}function ht(e){return typeof HTMLElement=="object"?e instanceof HTMLElement:e&&typeof e=="object"&&e!==null&&e.nodeType===1&&typeof e.nodeName=="string"}function Yn(e){let n=e;return e&&typeof e=="object"&&(e.hasOwnProperty("current")?n=e.current:e.hasOwnProperty("el")&&(e.el.hasOwnProperty("nativeElement")?n=e.el.nativeElement:n=e.el)),ht(n)?n:void 0}function uc(e,n){let t=Yn(e);if(t)t.appendChild(n);else throw new Error("Cannot append "+n+" to "+e)}var Gn=void 0;function dc(e){if(e){let n=getComputedStyle(e);return e.offsetHeight-e.clientHeight-parseFloat(n.borderTopWidth)-parseFloat(n.borderBottomWidth)}else{if(Gn!=null)return Gn;let n=document.createElement("div");no(n,{width:"100px",height:"100px",overflow:"scroll",position:"absolute",top:"-9999px"}),document.body.appendChild(n);let t=n.offsetHeight-n.clientHeight;return document.body.removeChild(n),Gn=t,t}}var qn=void 0;function Ji(e){if(e){let n=getComputedStyle(e);return e.offsetWidth-e.clientWidth-parseFloat(n.borderLeftWidth)-parseFloat(n.borderRightWidth)}else{if(qn!=null)return qn;let n=document.createElement("div");no(n,{width:"100px",height:"100px",overflow:"scroll",position:"absolute",top:"-9999px"}),document.body.appendChild(n);let t=n.offsetWidth-n.clientWidth;return document.body.removeChild(n),qn=t,t}}function pc(){if(window.getSelection){let e=window.getSelection()||{};e.empty?e.empty():e.removeAllRanges&&e.rangeCount>0&&e.getRangeAt(0).getClientRects().length>0&&e.removeAllRanges()}}function un(e,n={}){if(ht(e)){let t=(i,o)=>{var r,s;let a=(r=e?.$attrs)!=null&&r[i]?[(s=e?.$attrs)==null?void 0:s[i]]:[];return[o].flat().reduce((l,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){let d=Array.isArray(c)?t(i,c):Object.entries(c).map(([p,h])=>i==="style"&&(h||h===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?p:void 0);l=d.length?l.concat(d.filter(p=>!!p)):l}}return l},a)};Object.entries(n).forEach(([i,o])=>{if(o!=null){let r=i.match(/^on(.+)/);r?e.addEventListener(r[1].toLowerCase(),o):i==="p-bind"||i==="pBind"?un(e,o):(o=i==="class"?[...new Set(t("class",o))].join(" ").trim():i==="style"?t("style",o).join(";").trim():o,(e.$attrs=e.$attrs||{})&&(e.$attrs[i]=o),e.setAttribute(i,o))}})}}function hc(e,n={},...t){if(e){let i=document.createElement(e);return un(i,n),i.append(...t),i}}function fc(e,n){if(e){e.style.opacity="0";let t=+new Date,i="0",o=function(){i=`${+e.style.opacity+(new Date().getTime()-t)/n}`,e.style.opacity=i,t=+new Date,+i<1&&(window.requestAnimationFrame&&requestAnimationFrame(o)||setTimeout(o,16))};o()}}function bs(e,n){return ht(e)?Array.from(e.querySelectorAll(n)):[]}function ft(e,n){return ht(e)?e.matches(n)?e:e.querySelector(n):null}function gc(e,n){e&&document.activeElement!==e&&e.focus(n)}function mc(e,n){if(ht(e)){let t=e.getAttribute(n);return isNaN(t)?t==="true"||t==="false"?t==="true":t:+t}}function io(e,n=""){let t=bs(e,`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n},
            [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${n}`),i=[];for(let o of t)getComputedStyle(o).display!="none"&&getComputedStyle(o).visibility!="hidden"&&i.push(o);return i}function bc(e,n){let t=io(e,n);return t.length>0?t[0]:null}function Xn(e){if(e){let n=e.offsetHeight,t=getComputedStyle(e);return n-=parseFloat(t.paddingTop)+parseFloat(t.paddingBottom)+parseFloat(t.borderTopWidth)+parseFloat(t.borderBottomWidth),n}return 0}function ys(e){if(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetHeight;return e.style.display="none",e.style.visibility="visible",n}return 0}function vs(e){if(e){e.style.visibility="hidden",e.style.display="block";let n=e.offsetWidth;return e.style.display="none",e.style.visibility="visible",n}return 0}function oo(e){if(e){let n=e.parentNode;return n&&n instanceof ShadowRoot&&n.host&&(n=n.host),n}return null}function yc(e){var n;if(e){let t=(n=oo(e))==null?void 0:n.childNodes,i=0;if(t)for(let o=0;o<t.length;o++){if(t[o]===e)return i;t[o].nodeType===1&&i++}}return-1}function vc(e,n){let t=io(e,n);return t.length>0?t[t.length-1]:null}function Zn(e){if(e){let n=e.getBoundingClientRect();return{top:n.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:n.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}return{top:"auto",left:"auto"}}function dn(e,n){if(e){let t=e.offsetHeight;if(n){let i=getComputedStyle(e);t+=parseFloat(i.marginTop)+parseFloat(i.marginBottom)}return t}return 0}function _c(){if(window.getSelection)return window.getSelection().toString();if(document.getSelection)return document.getSelection().toString()}function _s(e){return!!(e!==null&&typeof e<"u"&&e.nodeName&&oo(e))}function Cc(e,n){var t;if(e)switch(e){case"document":return document;case"window":return window;case"body":return document.body;case"@next":return n?.nextElementSibling;case"@prev":return n?.previousElementSibling;case"@parent":return n?.parentElement;case"@grandparent":return(t=n?.parentElement)==null?void 0:t.parentElement;default:if(typeof e=="string")return document.querySelector(e);let o=Yn((r=>!!(r&&r.constructor&&r.call&&r.apply))(e)?e():e);return o?.nodeType===9||_s(o)?o:void 0}}function Jn(e){if(e){let n=e.offsetWidth,t=getComputedStyle(e);return n-=parseFloat(t.paddingLeft)+parseFloat(t.paddingRight)+parseFloat(t.borderLeftWidth)+parseFloat(t.borderRightWidth),n}return 0}function Ec(){return/(android)/i.test(navigator.userAgent)}function Cs(e){return!!(e&&e.offsetParent!=null)}function wc(e){return!Cs(e)}function Sc(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}function xc(e){return e?getComputedStyle(e).direction==="rtl":!1}function Tc(){return"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0}function Ic(e,n){var t,i;if(e){let o=e.parentElement,r=Zn(o),s=Kn(),a=e.offsetParent?e.offsetWidth:vs(e),l=e.offsetParent?e.offsetHeight:ys(e),c=Qn((t=o?.children)==null?void 0:t[0]),u=dn((i=o?.children)==null?void 0:i[0]),d="",p="";r.left+c+a>s.width-Ji()?r.left<a?n%2===1?d=r.left?"-"+r.left+"px":"100%":n%2===0&&(d=s.width-a-Ji()+"px"):d="-100%":d="100%",e.getBoundingClientRect().top+u+l>s.height?p=`-${l-u}px`:p="0px",e.style.top=p,e.style.left=d}}function ro(e){var n;e&&("remove"in Element.prototype?e.remove():(n=e.parentNode)==null||n.removeChild(e))}function Ac(e,n){let t=Yn(e);if(t)t.removeChild(n);else throw new Error("Cannot remove "+n+" from "+e)}function Dc(e,n){let t=getComputedStyle(e).getPropertyValue("borderTopWidth"),i=t?parseFloat(t):0,o=getComputedStyle(e).getPropertyValue("paddingTop"),r=o?parseFloat(o):0,s=e.getBoundingClientRect(),l=n.getBoundingClientRect().top+document.body.scrollTop-(s.top+document.body.scrollTop)-i-r,c=e.scrollTop,u=e.clientHeight,d=dn(n);l<0?e.scrollTop=c+l:l+d>u&&(e.scrollTop=c+l-u+d)}function so(e,n="",t){ht(e)&&t!==null&&t!==void 0&&e.setAttribute(n,t)}function ao(){let e=new Map;return{on(n,t){let i=e.get(n);return i?i.push(t):i=[t],e.set(n,i),this},off(n,t){let i=e.get(n);return i&&i.splice(i.indexOf(t)>>>0,1),this},emit(n,t){let i=e.get(n);i&&i.slice().map(o=>{o(t)})},clear(){e.clear()}}}var Es=Object.defineProperty,lo=Object.getOwnPropertySymbols,ws=Object.prototype.hasOwnProperty,Ss=Object.prototype.propertyIsEnumerable,co=(e,n,t)=>n in e?Es(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,xs=(e,n)=>{for(var t in n||(n={}))ws.call(n,t)&&co(e,t,n[t]);if(lo)for(var t of lo(n))Ss.call(n,t)&&co(e,t,n[t]);return e};function Y(e){return e==null||e===""||Array.isArray(e)&&e.length===0||!(e instanceof Date)&&typeof e=="object"&&Object.keys(e).length===0}function ei(e,n,t=new WeakSet){if(e===n)return!0;if(!e||!n||typeof e!="object"||typeof n!="object"||t.has(e)||t.has(n))return!1;t.add(e).add(n);let i=Array.isArray(e),o=Array.isArray(n),r,s,a;if(i&&o){if(s=e.length,s!=n.length)return!1;for(r=s;r--!==0;)if(!ei(e[r],n[r],t))return!1;return!0}if(i!=o)return!1;let l=e instanceof Date,c=n instanceof Date;if(l!=c)return!1;if(l&&c)return e.getTime()==n.getTime();let u=e instanceof RegExp,d=n instanceof RegExp;if(u!=d)return!1;if(u&&d)return e.toString()==n.toString();let p=Object.keys(e);if(s=p.length,s!==Object.keys(n).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(n,p[r]))return!1;for(r=s;r--!==0;)if(a=p[r],!ei(e[a],n[a],t))return!1;return!0}function Ts(e,n){return ei(e,n)}function po(e){return!!(e&&e.constructor&&e.call&&e.apply)}function D(e){return!Y(e)}function Ve(e,n){if(!e||!n)return null;try{let t=e[n];if(D(t))return t}catch{}if(Object.keys(e).length){if(po(n))return n(e);if(n.indexOf(".")===-1)return e[n];{let t=n.split("."),i=e;for(let o=0,r=t.length;o<r;++o){if(i==null)return null;i=i[t[o]]}return i}}return null}function Ee(e,n,t){return t?Ve(e,t)===Ve(n,t):Ts(e,n)}function ho(e,n){if(e!=null&&n&&n.length){for(let t of n)if(Ee(e,t))return!0}return!1}function Is(e,n){let t=-1;if(n){for(let i=0;i<n.length;i++)if(n[i]===e){t=i;break}}return t}function Fc(e,n){let t;if(D(e))try{t=e.findLast(n)}catch{t=[...e].reverse().find(n)}return t}function Nc(e,n){let t=-1;if(D(e))try{t=e.findLastIndex(n)}catch{t=e.lastIndexOf([...e].reverse().find(n))}return t}function me(e,n=!0){return e instanceof Object&&e.constructor===Object&&(n||Object.keys(e).length!==0)}function he(e,...n){return po(e)?e(...n):e}function Pe(e,n=!0){return typeof e=="string"&&(n||e!=="")}function uo(e){return Pe(e)?e.replace(/(-|_)/g,"").toLowerCase():e}function pn(e,n="",t={}){let i=uo(n).split("."),o=i.shift();return o?me(e)?pn(he(e[Object.keys(e).find(r=>uo(r)===o)||""],t),i.join("."),t):void 0:he(e,t)}function Rc(e,n,t,i){if(t.length>0){let o=!1;for(let r=0;r<t.length;r++)if(Is(t[r],i)>n){t.splice(r,0,e),o=!0;break}o||t.push(e)}else t.push(e)}function hn(e,n=!0){return Array.isArray(e)&&(n||e.length!==0)}function $c(e){return e instanceof Date&&e.constructor===Date}function fo(e){return D(e)&&!isNaN(e)}function Lc(e=""){return D(e)&&e.length===1&&!!e.match(/\S| /)}function le(e,n){if(n){let t=n.test(e);return n.lastIndex=0,t}return!1}function nt(...e){let n=(t={},i={})=>{let o=xs({},t);return Object.keys(i).forEach(r=>{me(i[r])&&r in t&&me(t[r])?o[r]=n(t[r],i[r]):o[r]=i[r]}),o};return e.reduce((t,i,o)=>o===0?i:n(t,i),{})}function it(e){return e&&e.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}function ce(e){if(e&&/[\xC0-\xFF\u0100-\u017E]/.test(e)){let t={A:/[\xC0-\xC5\u0100\u0102\u0104]/g,AE:/[\xC6]/g,C:/[\xC7\u0106\u0108\u010A\u010C]/g,D:/[\xD0\u010E\u0110]/g,E:/[\xC8-\xCB\u0112\u0114\u0116\u0118\u011A]/g,G:/[\u011C\u011E\u0120\u0122]/g,H:/[\u0124\u0126]/g,I:/[\xCC-\xCF\u0128\u012A\u012C\u012E\u0130]/g,IJ:/[\u0132]/g,J:/[\u0134]/g,K:/[\u0136]/g,L:/[\u0139\u013B\u013D\u013F\u0141]/g,N:/[\xD1\u0143\u0145\u0147\u014A]/g,O:/[\xD2-\xD6\xD8\u014C\u014E\u0150]/g,OE:/[\u0152]/g,R:/[\u0154\u0156\u0158]/g,S:/[\u015A\u015C\u015E\u0160]/g,T:/[\u0162\u0164\u0166]/g,U:/[\xD9-\xDC\u0168\u016A\u016C\u016E\u0170\u0172]/g,W:/[\u0174]/g,Y:/[\xDD\u0176\u0178]/g,Z:/[\u0179\u017B\u017D]/g,a:/[\xE0-\xE5\u0101\u0103\u0105]/g,ae:/[\xE6]/g,c:/[\xE7\u0107\u0109\u010B\u010D]/g,d:/[\u010F\u0111]/g,e:/[\xE8-\xEB\u0113\u0115\u0117\u0119\u011B]/g,g:/[\u011D\u011F\u0121\u0123]/g,i:/[\xEC-\xEF\u0129\u012B\u012D\u012F\u0131]/g,ij:/[\u0133]/g,j:/[\u0135]/g,k:/[\u0137,\u0138]/g,l:/[\u013A\u013C\u013E\u0140\u0142]/g,n:/[\xF1\u0144\u0146\u0148\u014B]/g,p:/[\xFE]/g,o:/[\xF2-\xF6\xF8\u014D\u014F\u0151]/g,oe:/[\u0153]/g,r:/[\u0155\u0157\u0159]/g,s:/[\u015B\u015D\u015F\u0161]/g,t:/[\u0163\u0165\u0167]/g,u:/[\xF9-\xFC\u0169\u016B\u016D\u016F\u0171\u0173]/g,w:/[\u0175]/g,y:/[\xFD\xFF\u0177]/g,z:/[\u017A\u017C\u017E]/g};for(let i in t)e=e.replace(t[i],i)}return e}function Vc(e,n,t){e&&n!==t&&(t>=e.length&&(t%=e.length,n%=e.length),e.splice(t,0,e.splice(n,1)[0]))}function fn(e){return Pe(e)?e.replace(/(_)/g,"-").replace(/[A-Z]/g,(n,t)=>t===0?n:"-"+n.toLowerCase()).toLowerCase():e}function ti(e){return Pe(e)?e.replace(/[A-Z]/g,(n,t)=>t===0?n:"."+n.toLowerCase()).toLowerCase():e}var gn={};function Ot(e="pui_id_"){return gn.hasOwnProperty(e)||(gn[e]=0),gn[e]++,`${e}${gn[e]}`}function As(){let e=[],n=(s,a,l=999)=>{let c=o(s,a,l),u=c.value+(c.key===s?0:l)+1;return e.push({key:s,value:u}),u},t=s=>{e=e.filter(a=>a.value!==s)},i=(s,a)=>o(s,a).value,o=(s,a,l=0)=>[...e].reverse().find(c=>a?!0:c.key===s)||{key:s,value:l},r=s=>s&&parseInt(s.style.zIndex,10)||0;return{get:r,set:(s,a,l)=>{a&&(a.style.zIndex=String(n(s,!0,l)))},clear:s=>{s&&(t(r(s)),s.style.zIndex="")},getCurrent:s=>i(s,!0)}}var Uc=As();var go=["*"],Ds=function(e){return e[e.ACCEPT=0]="ACCEPT",e[e.REJECT=1]="REJECT",e[e.CANCEL=2]="CANCEL",e}(Ds||{}),eu=(()=>{class e{requireConfirmationSource=new pe;acceptConfirmationSource=new pe;requireConfirmation$=this.requireConfirmationSource.asObservable();accept=this.acceptConfirmationSource.asObservable();confirm(t){return this.requireConfirmationSource.next(t),this}close(){return this.requireConfirmationSource.next(null),this}onAccept(){this.acceptConfirmationSource.next(null)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var X=(()=>{class e{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static IN="in";static LESS_THAN="lt";static LESS_THAN_OR_EQUAL_TO="lte";static GREATER_THAN="gt";static GREATER_THAN_OR_EQUAL_TO="gte";static BETWEEN="between";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static DATE_IS="dateIs";static DATE_IS_NOT="dateIsNot";static DATE_BEFORE="dateBefore";static DATE_AFTER="dateAfter"}return e})(),tu=(()=>{class e{static AND="and";static OR="or"}return e})(),nu=(()=>{class e{filter(t,i,o,r,s){let a=[];if(t)for(let l of t)for(let c of i){let u=Ve(l,c);if(this.filters[r](u,o,s)){a.push(l);break}}return a}filters={startsWith:(t,i,o)=>{if(i==null||i.trim()==="")return!0;if(t==null)return!1;let r=ce(i.toString()).toLocaleLowerCase(o);return ce(t.toString()).toLocaleLowerCase(o).slice(0,r.length)===r},contains:(t,i,o)=>{if(i==null||typeof i=="string"&&i.trim()==="")return!0;if(t==null)return!1;let r=ce(i.toString()).toLocaleLowerCase(o);return ce(t.toString()).toLocaleLowerCase(o).indexOf(r)!==-1},notContains:(t,i,o)=>{if(i==null||typeof i=="string"&&i.trim()==="")return!0;if(t==null)return!1;let r=ce(i.toString()).toLocaleLowerCase(o);return ce(t.toString()).toLocaleLowerCase(o).indexOf(r)===-1},endsWith:(t,i,o)=>{if(i==null||i.trim()==="")return!0;if(t==null)return!1;let r=ce(i.toString()).toLocaleLowerCase(o),s=ce(t.toString()).toLocaleLowerCase(o);return s.indexOf(r,s.length-r.length)!==-1},equals:(t,i,o)=>i==null||typeof i=="string"&&i.trim()===""?!0:t==null?!1:t.getTime&&i.getTime?t.getTime()===i.getTime():t==i?!0:ce(t.toString()).toLocaleLowerCase(o)==ce(i.toString()).toLocaleLowerCase(o),notEquals:(t,i,o)=>i==null||typeof i=="string"&&i.trim()===""?!1:t==null?!0:t.getTime&&i.getTime?t.getTime()!==i.getTime():t==i?!1:ce(t.toString()).toLocaleLowerCase(o)!=ce(i.toString()).toLocaleLowerCase(o),in:(t,i)=>{if(i==null||i.length===0)return!0;for(let o=0;o<i.length;o++)if(Ee(t,i[o]))return!0;return!1},between:(t,i)=>i==null||i[0]==null||i[1]==null?!0:t==null?!1:t.getTime?i[0].getTime()<=t.getTime()&&t.getTime()<=i[1].getTime():i[0]<=t&&t<=i[1],lt:(t,i,o)=>i==null?!0:t==null?!1:t.getTime&&i.getTime?t.getTime()<i.getTime():t<i,lte:(t,i,o)=>i==null?!0:t==null?!1:t.getTime&&i.getTime?t.getTime()<=i.getTime():t<=i,gt:(t,i,o)=>i==null?!0:t==null?!1:t.getTime&&i.getTime?t.getTime()>i.getTime():t>i,gte:(t,i,o)=>i==null?!0:t==null?!1:t.getTime&&i.getTime?t.getTime()>=i.getTime():t>=i,is:(t,i,o)=>this.filters.equals(t,i,o),isNot:(t,i,o)=>this.filters.notEquals(t,i,o),before:(t,i,o)=>this.filters.lt(t,i,o),after:(t,i,o)=>this.filters.gt(t,i,o),dateIs:(t,i)=>i==null?!0:t==null?!1:t.toDateString()===i.toDateString(),dateIsNot:(t,i)=>i==null?!0:t==null?!1:t.toDateString()!==i.toDateString(),dateBefore:(t,i)=>i==null?!0:t==null?!1:t.getTime()<i.getTime(),dateAfter:(t,i)=>i==null?!0:t==null?!1:(t.setHours(0,0,0,0),t.getTime()>i.getTime())};register(t,i){this.filters[t]=i}static \u0275fac=function(i){return new(i||e)};static \u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),iu=(()=>{class e{messageSource=new pe;clearSource=new pe;messageObserver=this.messageSource.asObservable();clearObserver=this.clearSource.asObservable();add(t){t&&this.messageSource.next(t)}addAll(t){t&&t.length&&this.messageSource.next(t)}clear(t){this.clearSource.next(t||null)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})(),ou=(()=>{class e{clickSource=new pe;clickObservable=this.clickSource.asObservable();add(t){t&&this.clickSource.next(t)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var ru=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275cmp=L({type:e,selectors:[["p-header"]],standalone:!1,ngContentSelectors:go,decls:1,vars:0,template:function(i,o){i&1&&(Je(),et(0))},encapsulation:2})}return e})(),su=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275cmp=L({type:e,selectors:[["p-footer"]],standalone:!1,ngContentSelectors:go,decls:1,vars:0,template:function(i,o){i&1&&(Je(),et(0))},encapsulation:2})}return e})(),Be=(()=>{class e{template;type;name;constructor(t){this.template=t}getType(){return this.name}static \u0275fac=function(i){return new(i||e)(k(Di))};static \u0275dir=I({type:e,selectors:[["","pTemplate",""]],inputs:{type:"type",name:[0,"pTemplate","name"]}})}return e})(),z=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=V({type:e});static \u0275inj=$({imports:[ae]})}return e})(),au=(()=>{class e{static STARTS_WITH="startsWith";static CONTAINS="contains";static NOT_CONTAINS="notContains";static ENDS_WITH="endsWith";static EQUALS="equals";static NOT_EQUALS="notEquals";static NO_FILTER="noFilter";static LT="lt";static LTE="lte";static GT="gt";static GTE="gte";static IS="is";static IS_NOT="isNot";static BEFORE="before";static AFTER="after";static CLEAR="clear";static APPLY="apply";static MATCH_ALL="matchAll";static MATCH_ANY="matchAny";static ADD_RULE="addRule";static REMOVE_RULE="removeRule";static ACCEPT="accept";static REJECT="reject";static CHOOSE="choose";static UPLOAD="upload";static CANCEL="cancel";static PENDING="pending";static FILE_SIZE_TYPES="fileSizeTypes";static DAY_NAMES="dayNames";static DAY_NAMES_SHORT="dayNamesShort";static DAY_NAMES_MIN="dayNamesMin";static MONTH_NAMES="monthNames";static MONTH_NAMES_SHORT="monthNamesShort";static FIRST_DAY_OF_WEEK="firstDayOfWeek";static TODAY="today";static WEEK_HEADER="weekHeader";static WEAK="weak";static MEDIUM="medium";static STRONG="strong";static PASSWORD_PROMPT="passwordPrompt";static EMPTY_MESSAGE="emptyMessage";static EMPTY_FILTER_MESSAGE="emptyFilterMessage";static SHOW_FILTER_MENU="showFilterMenu";static HIDE_FILTER_MENU="hideFilterMenu";static SELECTION_MESSAGE="selectionMessage";static ARIA="aria";static SELECT_COLOR="selectColor";static BROWSE_FILES="browseFiles"}return e})(),lu=(()=>{class e{dragStartSource=new pe;dragStopSource=new pe;dragStart$=this.dragStartSource.asObservable();dragStop$=this.dragStopSource.asObservable();startDrag(t){this.dragStartSource.next(t)}stopDrag(t){this.dragStopSource.next(t)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var ks=Object.defineProperty,Os=Object.defineProperties,Ms=Object.getOwnPropertyDescriptors,mn=Object.getOwnPropertySymbols,yo=Object.prototype.hasOwnProperty,vo=Object.prototype.propertyIsEnumerable,mo=(e,n,t)=>n in e?ks(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,N=(e,n)=>{for(var t in n||(n={}))yo.call(n,t)&&mo(e,t,n[t]);if(mn)for(var t of mn(n))vo.call(n,t)&&mo(e,t,n[t]);return e},mt=(e,n)=>Os(e,Ms(n)),xe=(e,n)=>{var t={};for(var i in e)yo.call(e,i)&&n.indexOf(i)<0&&(t[i]=e[i]);if(e!=null&&mn)for(var i of mn(e))n.indexOf(i)<0&&vo.call(e,i)&&(t[i]=e[i]);return t};var Fs=ao(),ue=Fs;function bo(e,n){hn(e)?e.push(...n||[]):me(e)&&Object.assign(e,n)}function Ns(e){return me(e)&&e.hasOwnProperty("value")&&e.hasOwnProperty("type")?e.value:e}function Rs(e){return e.replaceAll(/ /g,"").replace(/[^\w]/g,"-")}function ni(e="",n=""){return Rs(`${Pe(e,!1)&&Pe(n,!1)?`${e}-`:e}${n}`)}function _o(e="",n=""){return`--${ni(e,n)}`}function $s(e=""){let n=(e.match(/{/g)||[]).length,t=(e.match(/}/g)||[]).length;return(n+t)%2!==0}function Co(e,n="",t="",i=[],o){if(Pe(e)){let r=/{([^}]*)}/g,s=e.trim();if($s(s))return;if(le(s,r)){let a=s.replaceAll(r,u=>{let p=u.replace(/{|}/g,"").split(".").filter(h=>!i.some(_=>le(h,_)));return`var(${_o(t,fn(p.join("-")))}${D(o)?`, ${o}`:""})`}),l=/(\d+\s+[\+\-\*\/]\s+\d+)/g,c=/var\([^)]+\)/g;return le(a.replace(c,"0"),l)?`calc(${a})`:a}return s}else if(fo(e))return e}function Ls(e,n,t){Pe(n,!1)&&e.push(`${n}:${t};`)}function gt(e,n){return e?`${e}{${n}}`:""}var bu=e=>{var n;let t=S.getTheme(),i=ii(t,e,void 0,"variable"),o=(n=i?.match(/--[\w-]+/g))==null?void 0:n[0],r=ii(t,e,void 0,"value");return{name:o,variable:i,value:r}},bt=(...e)=>ii(S.getTheme(),...e),ii=(e={},n,t,i)=>{if(n){let{variable:o,options:r}=S.defaults||{},{prefix:s,transform:a}=e?.options||r||{},c=le(n,/{([^}]*)}/g)?n:`{${n}}`;return i==="value"||Y(i)&&a==="strict"?S.getTokenValue(n):Co(c,void 0,s,[o.excludedKeyRegex],t)}return""};var Vs=(e={})=>{let{preset:n,options:t}=e;return{preset(i){return n=n?nt(n,i):i,this},options(i){return t=t?N(N({},t),i):i,this},primaryPalette(i){let{semantic:o}=n||{};return n=mt(N({},n),{semantic:mt(N({},o),{primary:i})}),this},surfacePalette(i){var o,r;let{semantic:s}=n||{},a=i?.hasOwnProperty("light")?i?.light:i,l=i?.hasOwnProperty("dark")?i?.dark:i,c={colorScheme:{light:N(N({},(o=s?.colorScheme)==null?void 0:o.light),!!a&&{surface:a}),dark:N(N({},(r=s?.colorScheme)==null?void 0:r.dark),!!l&&{surface:l})}};return n=mt(N({},n),{semantic:N(N({},s),c)}),this},define({useDefaultPreset:i=!1,useDefaultOptions:o=!1}={}){return{preset:i?S.getPreset():n,options:o?S.getOptions():t}},update({mergePresets:i=!0,mergeOptions:o=!0}={}){let r={preset:i?nt(S.getPreset(),n):n,options:o?N(N({},S.getOptions()),t):t};return S.setTheme(r),r},use(i){let o=this.define(i);return S.setTheme(o),o}}};function Ps(e,n={}){let t=S.defaults.variable,{prefix:i=t.prefix,selector:o=t.selector,excludedKeyRegex:r=t.excludedKeyRegex}=n,s=(c,u="")=>Object.entries(c).reduce((d,[p,h])=>{let _=le(p,r)?ni(u):ni(u,fn(p)),f=Ns(h);if(me(f)){let{variables:v,tokens:R}=s(f,_);bo(d.tokens,R),bo(d.variables,v)}else d.tokens.push((i?_.replace(`${i}-`,""):_).replaceAll("-",".")),Ls(d.variables,_o(_),Co(f,_,i,[r]));return d},{variables:[],tokens:[]}),{variables:a,tokens:l}=s(e,i);return{value:a,tokens:l,declarations:a.join(""),css:gt(o,a.join(""))}}var be={regex:{rules:{class:{pattern:/^\.([a-zA-Z][\w-]*)$/,resolve(e){return{type:"class",selector:e,matched:this.pattern.test(e.trim())}}},attr:{pattern:/^\[(.*)\]$/,resolve(e){return{type:"attr",selector:`:root${e}`,matched:this.pattern.test(e.trim())}}},media:{pattern:/^@media (.*)$/,resolve(e){return{type:"media",selector:`${e}{:root{[CSS]}}`,matched:this.pattern.test(e.trim())}}},system:{pattern:/^system$/,resolve(e){return{type:"system",selector:"@media (prefers-color-scheme: dark){:root{[CSS]}}",matched:this.pattern.test(e.trim())}}},custom:{resolve(e){return{type:"custom",selector:e,matched:!0}}}},resolve(e){let n=Object.keys(this.rules).filter(t=>t!=="custom").map(t=>this.rules[t]);return[e].flat().map(t=>{var i;return(i=n.map(o=>o.resolve(t)).find(o=>o.matched))!=null?i:this.rules.custom.resolve(t)})}},_toVariables(e,n){return Ps(e,{prefix:n?.prefix})},getCommon({name:e="",theme:n={},params:t,set:i,defaults:o}){var r,s,a,l,c,u,d;let{preset:p,options:h}=n,_,f,v,R,F,O,Q;if(D(p)&&h.transform!=="strict"){let{primitive:de,semantic:ye,extend:Ge}=p,Et=ye||{},{colorScheme:Vt}=Et,Pt=xe(Et,["colorScheme"]),Bt=Ge||{},{colorScheme:Ut}=Bt,wt=xe(Bt,["colorScheme"]),St=Vt||{},{dark:jt}=St,Wt=xe(St,["dark"]),Ht=Ut||{},{dark:zt}=Ht,Gt=xe(Ht,["dark"]),qt=D(de)?this._toVariables({primitive:de},h):{},Kt=D(Pt)?this._toVariables({semantic:Pt},h):{},Qt=D(Wt)?this._toVariables({light:Wt},h):{},bi=D(jt)?this._toVariables({dark:jt},h):{},yi=D(wt)?this._toVariables({semantic:wt},h):{},vi=D(Gt)?this._toVariables({light:Gt},h):{},_i=D(zt)?this._toVariables({dark:zt},h):{},[Tr,Ir]=[(r=qt.declarations)!=null?r:"",qt.tokens],[Ar,Dr]=[(s=Kt.declarations)!=null?s:"",Kt.tokens||[]],[kr,Or]=[(a=Qt.declarations)!=null?a:"",Qt.tokens||[]],[Mr,Fr]=[(l=bi.declarations)!=null?l:"",bi.tokens||[]],[Nr,Rr]=[(c=yi.declarations)!=null?c:"",yi.tokens||[]],[$r,Lr]=[(u=vi.declarations)!=null?u:"",vi.tokens||[]],[Vr,Pr]=[(d=_i.declarations)!=null?d:"",_i.tokens||[]];_=this.transformCSS(e,Tr,"light","variable",h,i,o),f=Ir;let Br=this.transformCSS(e,`${Ar}${kr}`,"light","variable",h,i,o),Ur=this.transformCSS(e,`${Mr}`,"dark","variable",h,i,o);v=`${Br}${Ur}`,R=[...new Set([...Dr,...Or,...Fr])];let jr=this.transformCSS(e,`${Nr}${$r}color-scheme:light`,"light","variable",h,i,o),Wr=this.transformCSS(e,`${Vr}color-scheme:dark`,"dark","variable",h,i,o);F=`${jr}${Wr}`,O=[...new Set([...Rr,...Lr,...Pr])],Q=he(p.css,{dt:bt})}return{primitive:{css:_,tokens:f},semantic:{css:v,tokens:R},global:{css:F,tokens:O},style:Q}},getPreset({name:e="",preset:n={},options:t,params:i,set:o,defaults:r,selector:s}){var a,l,c;let u,d,p;if(D(n)&&t.transform!=="strict"){let h=e.replace("-directive",""),_=n,{colorScheme:f,extend:v,css:R}=_,F=xe(_,["colorScheme","extend","css"]),O=v||{},{colorScheme:Q}=O,de=xe(O,["colorScheme"]),ye=f||{},{dark:Ge}=ye,Et=xe(ye,["dark"]),Vt=Q||{},{dark:Pt}=Vt,Bt=xe(Vt,["dark"]),Ut=D(F)?this._toVariables({[h]:N(N({},F),de)},t):{},wt=D(Et)?this._toVariables({[h]:N(N({},Et),Bt)},t):{},St=D(Ge)?this._toVariables({[h]:N(N({},Ge),Pt)},t):{},[jt,Wt]=[(a=Ut.declarations)!=null?a:"",Ut.tokens||[]],[Ht,zt]=[(l=wt.declarations)!=null?l:"",wt.tokens||[]],[Gt,qt]=[(c=St.declarations)!=null?c:"",St.tokens||[]],Kt=this.transformCSS(h,`${jt}${Ht}`,"light","variable",t,o,r,s),Qt=this.transformCSS(h,Gt,"dark","variable",t,o,r,s);u=`${Kt}${Qt}`,d=[...new Set([...Wt,...zt,...qt])],p=he(R,{dt:bt})}return{css:u,tokens:d,style:p}},getPresetC({name:e="",theme:n={},params:t,set:i,defaults:o}){var r;let{preset:s,options:a}=n,l=(r=s?.components)==null?void 0:r[e];return this.getPreset({name:e,preset:l,options:a,params:t,set:i,defaults:o})},getPresetD({name:e="",theme:n={},params:t,set:i,defaults:o}){var r;let s=e.replace("-directive",""),{preset:a,options:l}=n,c=(r=a?.directives)==null?void 0:r[s];return this.getPreset({name:s,preset:c,options:l,params:t,set:i,defaults:o})},applyDarkColorScheme(e){return!(e.darkModeSelector==="none"||e.darkModeSelector===!1)},getColorSchemeOption(e,n){var t;return this.applyDarkColorScheme(e)?this.regex.resolve(e.darkModeSelector===!0?n.options.darkModeSelector:(t=e.darkModeSelector)!=null?t:n.options.darkModeSelector):[]},getLayerOrder(e,n={},t,i){let{cssLayer:o}=n;return o?`@layer ${he(o.order||"primeui",t)}`:""},getCommonStyleSheet({name:e="",theme:n={},params:t,props:i={},set:o,defaults:r}){let s=this.getCommon({name:e,theme:n,params:t,set:o,defaults:r}),a=Object.entries(i).reduce((l,[c,u])=>l.push(`${c}="${u}"`)&&l,[]).join(" ");return Object.entries(s||{}).reduce((l,[c,u])=>{if(u?.css){let d=it(u?.css),p=`${c}-variables`;l.push(`<style type="text/css" data-primevue-style-id="${p}" ${a}>${d}</style>`)}return l},[]).join("")},getStyleSheet({name:e="",theme:n={},params:t,props:i={},set:o,defaults:r}){var s;let a={name:e,theme:n,params:t,set:o,defaults:r},l=(s=e.includes("-directive")?this.getPresetD(a):this.getPresetC(a))==null?void 0:s.css,c=Object.entries(i).reduce((u,[d,p])=>u.push(`${d}="${p}"`)&&u,[]).join(" ");return l?`<style type="text/css" data-primevue-style-id="${e}-variables" ${c}>${it(l)}</style>`:""},createTokens(e={},n,t="",i="",o={}){return Object.entries(e).forEach(([r,s])=>{let a=le(r,n.variable.excludedKeyRegex)?t:t?`${t}.${ti(r)}`:ti(r),l=i?`${i}.${r}`:r;me(s)?this.createTokens(s,n,a,l,o):(o[a]||(o[a]={paths:[],computed(c,u={}){var d,p;return this.paths.length===1?(d=this.paths[0])==null?void 0:d.computed(this.paths[0].scheme,u.binding):c&&c!=="none"?(p=this.paths.find(h=>h.scheme===c))==null?void 0:p.computed(c,u.binding):this.paths.map(h=>h.computed(h.scheme,u[h.scheme]))}}),o[a].paths.push({path:l,value:s,scheme:l.includes("colorScheme.light")?"light":l.includes("colorScheme.dark")?"dark":"none",computed(c,u={}){let d=/{([^}]*)}/g,p=s;if(u.name=this.path,u.binding||(u.binding={}),le(s,d)){let _=s.trim().replaceAll(d,R=>{var F;let O=R.replace(/{|}/g,""),Q=(F=o[O])==null?void 0:F.computed(c,u);return hn(Q)&&Q.length===2?`light-dark(${Q[0].value},${Q[1].value})`:Q?.value}),f=/(\d+\w*\s+[\+\-\*\/]\s+\d+\w*)/g,v=/var\([^)]+\)/g;p=le(_.replace(v,"0"),f)?`calc(${_})`:_}return Y(u.binding)&&delete u.binding,{colorScheme:c,path:this.path,paths:u,value:p.includes("undefined")?void 0:p}}}))}),o},getTokenValue(e,n,t){var i;let r=(l=>l.split(".").filter(u=>!le(u.toLowerCase(),t.variable.excludedKeyRegex)).join("."))(n),s=n.includes("colorScheme.light")?"light":n.includes("colorScheme.dark")?"dark":void 0,a=[(i=e[r])==null?void 0:i.computed(s)].flat().filter(l=>l);return a.length===1?a[0].value:a.reduce((l={},c)=>{let u=c,{colorScheme:d}=u,p=xe(u,["colorScheme"]);return l[d]=p,l},void 0)},getSelectorRule(e,n,t,i){return t==="class"||t==="attr"?gt(D(n)?`${e}${n},${e} ${n}`:e,i):gt(e,D(n)?gt(n,i):i)},transformCSS(e,n,t,i,o={},r,s,a){if(D(n)){let{cssLayer:l}=o;if(i!=="style"){let c=this.getColorSchemeOption(o,s);n=t==="dark"?c.reduce((u,{type:d,selector:p})=>(D(p)&&(u+=p.includes("[CSS]")?p.replace("[CSS]",n):this.getSelectorRule(p,a,d,n)),u),""):gt(a??":root",n)}if(l){let c={name:"primeui",order:"primeui"};me(l)&&(c.name=he(l.name,{name:e,type:i})),D(c.name)&&(n=gt(`@layer ${c.name}`,n),r?.layerNames(c.name))}return n}return""}},S={defaults:{variable:{prefix:"p",selector:":root",excludedKeyRegex:/^(primitive|semantic|components|directives|variables|colorscheme|light|dark|common|root|states|extend|css)$/gi},options:{prefix:"p",darkModeSelector:"system",cssLayer:!1}},_theme:void 0,_layerNames:new Set,_loadedStyleNames:new Set,_loadingStyles:new Set,_tokens:{},update(e={}){let{theme:n}=e;n&&(this._theme=mt(N({},n),{options:N(N({},this.defaults.options),n.options)}),this._tokens=be.createTokens(this.preset,this.defaults),this.clearLoadedStyleNames())},get theme(){return this._theme},get preset(){var e;return((e=this.theme)==null?void 0:e.preset)||{}},get options(){var e;return((e=this.theme)==null?void 0:e.options)||{}},get tokens(){return this._tokens},getTheme(){return this.theme},setTheme(e){this.update({theme:e}),ue.emit("theme:change",e)},getPreset(){return this.preset},setPreset(e){this._theme=mt(N({},this.theme),{preset:e}),this._tokens=be.createTokens(e,this.defaults),this.clearLoadedStyleNames(),ue.emit("preset:change",e),ue.emit("theme:change",this.theme)},getOptions(){return this.options},setOptions(e){this._theme=mt(N({},this.theme),{options:e}),this.clearLoadedStyleNames(),ue.emit("options:change",e),ue.emit("theme:change",this.theme)},getLayerNames(){return[...this._layerNames]},setLayerNames(e){this._layerNames.add(e)},getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()},getTokenValue(e){return be.getTokenValue(this.tokens,e,this.defaults)},getCommon(e="",n){return be.getCommon({name:e,theme:this.theme,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getComponent(e="",n){let t={name:e,theme:this.theme,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return be.getPresetC(t)},getDirective(e="",n){let t={name:e,theme:this.theme,params:n,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return be.getPresetD(t)},getCustomPreset(e="",n,t,i){let o={name:e,preset:n,options:this.options,selector:t,params:i,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}};return be.getPreset(o)},getLayerOrderCSS(e=""){return be.getLayerOrder(e,this.options,{names:this.getLayerNames()},this.defaults)},transformCSS(e="",n,t="style",i){return be.transformCSS(e,n,i,t,this.options,{layerNames:this.setLayerNames.bind(this)},this.defaults)},getCommonStyleSheet(e="",n,t={}){return be.getCommonStyleSheet({name:e,theme:this.theme,params:n,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},getStyleSheet(e,n,t={}){return be.getStyleSheet({name:e,theme:this.theme,params:n,props:t,defaults:this.defaults,set:{layerNames:this.setLayerNames.bind(this)}})},onStyleMounted(e){this._loadingStyles.add(e)},onStyleUpdated(e){this._loadingStyles.add(e)},onStyleLoaded(e,{name:n}){this._loadingStyles.size&&(this._loadingStyles.delete(n),ue.emit(`theme:${n}:load`,e),!this._loadingStyles.size&&ue.emit("theme:load"))}};function _u(...e){let n=nt(S.getPreset(),...e);return S.setPreset(n),n}function Cu(e){return Vs().surfacePalette(e).update().preset}var Bs=0,Eo=(()=>{class e{document=g(Ce);use(t,i={}){let o=!1,r=t,s=null,{immediate:a=!0,manual:l=!1,name:c=`style_${++Bs}`,id:u=void 0,media:d=void 0,nonce:p=void 0,first:h=!1,props:_={}}=i;if(this.document){if(s=this.document.querySelector(`style[data-primeng-style-id="${c}"]`)||u&&this.document.getElementById(u)||this.document.createElement("style"),!s.isConnected){r=t,un(s,{type:"text/css",media:d,nonce:p});let f=this.document.head;h&&f.firstChild?f.insertBefore(s,f.firstChild):f.appendChild(s),so(s,"data-primeng-style-id",c)}return s.textContent!==r&&(s.textContent=r),{id:u,name:c,el:s,css:r}}}static \u0275fac=function(i){return new(i||e)};static \u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var yt={_loadedStyleNames:new Set,getLoadedStyleNames(){return this._loadedStyleNames},isStyleNameLoaded(e){return this._loadedStyleNames.has(e)},setLoadedStyleName(e){this._loadedStyleNames.add(e)},deleteLoadedStyleName(e){this._loadedStyleNames.delete(e)},clearLoadedStyleNames(){this._loadedStyleNames.clear()}},Us=({dt:e})=>`
*,
::before,
::after {
    box-sizing: border-box;
}

/* Non ng overlay animations */
.p-connected-overlay {
    opacity: 0;
    transform: scaleY(0.8);
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-visible {
    opacity: 1;
    transform: scaleY(1);
}

.p-connected-overlay-hidden {
    opacity: 0;
    transform: scaleY(1);
    transition: opacity 0.1s linear;
}

/* NG based overlay animations */
.p-connected-overlay-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-connected-overlay-leave-to {
    opacity: 0;
}

.p-connected-overlay-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1),
        opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-connected-overlay-leave-active {
    transition: opacity 0.1s linear;
}

/* Toggleable Content */
.p-toggleable-content-enter-from,
.p-toggleable-content-leave-to {
    max-height: 0;
}

.p-toggleable-content-enter-to,
.p-toggleable-content-leave-from {
    max-height: 1000px;
}

.p-toggleable-content-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1);
}

.p-toggleable-content-enter-active {
    overflow: hidden;
    transition: max-height 1s ease-in-out;
}

.p-disabled,
.p-disabled * {
    cursor: default;
    pointer-events: none;
    user-select: none;
}

.p-disabled,
.p-component:disabled {
    opacity: ${e("disabled.opacity")};
}

.pi {
    font-size: ${e("icon.size")};
}

.p-icon {
    width: ${e("icon.size")};
    height: ${e("icon.size")};
}

.p-overlay-mask {
    background: ${e("mask.background")};
    color: ${e("mask.color")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.p-overlay-mask-enter {
    animation: p-overlay-mask-enter-animation ${e("mask.transition.duration")} forwards;
}

.p-overlay-mask-leave {
    animation: p-overlay-mask-leave-animation ${e("mask.transition.duration")} forwards;
}
/* Temporarily disabled, distrupts PrimeNG overlay animations */
/* @keyframes p-overlay-mask-enter-animation {
    from {
        background: transparent;
    }
    to {
        background: ${e("mask.background")};
    }
}
@keyframes p-overlay-mask-leave-animation {
    from {
        background: ${e("mask.background")};
    }
    to {
        background: transparent;
    }
}*/

.p-iconwrapper {
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
`,js=({dt:e})=>`
.p-hidden-accessible {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
}

.p-hidden-accessible input,
.p-hidden-accessible select {
    transform: scale(0);
}

.p-overflow-hidden {
    overflow: hidden;
    padding-right: ${e("scrollbar.width")};
}

/* @todo move to baseiconstyle.ts */

.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,P=(()=>{class e{name="base";useStyle=g(Eo);theme=void 0;css=void 0;classes={};inlineStyles={};load=(t,i={},o=r=>r)=>{let r=o(he(t,{dt:bt}));return r?this.useStyle.use(it(r),w({name:this.name},i)):{}};loadCSS=(t={})=>this.load(this.css,t);loadTheme=(t={},i="")=>this.load(this.theme,t,(o="")=>S.transformCSS(t.name||this.name,`${o}${i}`));loadGlobalCSS=(t={})=>this.load(js,t);loadGlobalTheme=(t={},i="")=>this.load(Us,t,(o="")=>S.transformCSS(t.name||this.name,`${o}${i}`));getCommonTheme=t=>S.getCommon(this.name,t);getComponentTheme=t=>S.getComponent(this.name,t);getDirectiveTheme=t=>S.getDirective(this.name,t);getPresetTheme=(t,i,o)=>S.getCustomPreset(this.name,t,i,o);getLayerOrderThemeCSS=()=>S.getLayerOrderCSS(this.name);getStyleSheet=(t="",i={})=>{if(this.css){let o=he(this.css,{dt:bt}),r=it(`${o}${t}`),s=Object.entries(i).reduce((a,[l,c])=>a.push(`${l}="${c}"`)&&a,[]).join(" ");return`<style type="text/css" data-primeng-style-id="${this.name}" ${s}>${r}</style>`}return""};getCommonThemeStyleSheet=(t,i={})=>S.getCommonStyleSheet(this.name,t,i);getThemeStyleSheet=(t,i={})=>{let o=[S.getStyleSheet(this.name,t,i)];if(this.theme){let r=this.name==="base"?"global-style":`${this.name}-style`,s=he(this.theme,{dt:bt}),a=it(S.transformCSS(r,s)),l=Object.entries(i).reduce((c,[u,d])=>c.push(`${u}="${d}"`)&&c,[]).join(" ");o.push(`<style type="text/css" data-primeng-style-id="${r}" ${l}>${a}</style>`)}return o.join("")};static \u0275fac=function(i){return new(i||e)};static \u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var Ws=(()=>{class e{theme=ie(void 0);csp=ie({nonce:void 0});isThemeChanged=!1;document=g(Ce);baseStyle=g(P);constructor(){Tt(()=>{ue.on("theme:change",t=>{_e(()=>{this.isThemeChanged=!0,this.theme.set(t)})})}),Tt(()=>{let t=this.theme();this.document&&t&&(this.isThemeChanged||this.onThemeChange(t),this.isThemeChanged=!1)})}ngOnDestroy(){S.clearLoadedStyleNames(),ue.clear()}onThemeChange(t){S.setTheme(t),this.document&&this.loadCommonTheme()}loadCommonTheme(){if(this.theme()!=="none"&&!S.isStyleNameLoaded("common")){let{primitive:t,semantic:i,global:o,style:r}=this.baseStyle.getCommonTheme?.()||{},s={nonce:this.csp?.()?.nonce};this.baseStyle.load(t?.css,w({name:"primitive-variables"},s)),this.baseStyle.load(i?.css,w({name:"semantic-variables"},s)),this.baseStyle.load(o?.css,w({name:"global-variables"},s)),this.baseStyle.loadGlobalTheme(w({name:"global-style"},s),r),S.setLoadedStyleName("common")}}setThemeConfig(t){let{theme:i,csp:o}=t||{};i&&this.theme.set(i),o&&this.csp.set(o)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),oi=(()=>{class e extends Ws{ripple=ie(!1);platformId=g(ke);inputStyle=ie(null);inputVariant=ie(null);overlayOptions={};csp=ie({nonce:void 0});filterMatchModeOptions={text:[X.STARTS_WITH,X.CONTAINS,X.NOT_CONTAINS,X.ENDS_WITH,X.EQUALS,X.NOT_EQUALS],numeric:[X.EQUALS,X.NOT_EQUALS,X.LESS_THAN,X.LESS_THAN_OR_EQUAL_TO,X.GREATER_THAN,X.GREATER_THAN_OR_EQUAL_TO],date:[X.DATE_IS,X.DATE_IS_NOT,X.DATE_BEFORE,X.DATE_AFTER]};translation={startsWith:"Starts with",contains:"Contains",notContains:"Not contains",endsWith:"Ends with",equals:"Equals",notEquals:"Not equals",noFilter:"No Filter",lt:"Less than",lte:"Less than or equal to",gt:"Greater than",gte:"Greater than or equal to",is:"Is",isNot:"Is not",before:"Before",after:"After",dateIs:"Date is",dateIsNot:"Date is not",dateBefore:"Date is before",dateAfter:"Date is after",clear:"Clear",apply:"Apply",matchAll:"Match All",matchAny:"Match Any",addRule:"Add Rule",removeRule:"Remove Rule",accept:"Yes",reject:"No",choose:"Choose",upload:"Upload",cancel:"Cancel",pending:"Pending",fileSizeTypes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"],dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],dayNamesShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],dayNamesMin:["Su","Mo","Tu","We","Th","Fr","Sa"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],monthNamesShort:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],chooseYear:"Choose Year",chooseMonth:"Choose Month",chooseDate:"Choose Date",prevDecade:"Previous Decade",nextDecade:"Next Decade",prevYear:"Previous Year",nextYear:"Next Year",prevMonth:"Previous Month",nextMonth:"Next Month",prevHour:"Previous Hour",nextHour:"Next Hour",prevMinute:"Previous Minute",nextMinute:"Next Minute",prevSecond:"Previous Second",nextSecond:"Next Second",am:"am",pm:"pm",dateFormat:"mm/dd/yy",firstDayOfWeek:0,today:"Today",weekHeader:"Wk",weak:"Weak",medium:"Medium",strong:"Strong",passwordPrompt:"Enter a password",emptyMessage:"No results found",searchMessage:"Search results are available",selectionMessage:"{0} items selected",emptySelectionMessage:"No selected item",emptySearchMessage:"No results found",emptyFilterMessage:"No results found",fileChosenMessage:"Files",noFileChosenMessage:"No file chosen",aria:{trueLabel:"True",falseLabel:"False",nullLabel:"Not Selected",star:"1 star",stars:"{star} stars",selectAll:"All items selected",unselectAll:"All items unselected",close:"Close",previous:"Previous",next:"Next",navigation:"Navigation",scrollTop:"Scroll Top",moveTop:"Move Top",moveUp:"Move Up",moveDown:"Move Down",moveBottom:"Move Bottom",moveToTarget:"Move to Target",moveToSource:"Move to Source",moveAllToTarget:"Move All to Target",moveAllToSource:"Move All to Source",pageLabel:"{page}",firstPageLabel:"First Page",lastPageLabel:"Last Page",nextPageLabel:"Next Page",prevPageLabel:"Previous Page",rowsPerPageLabel:"Rows per page",previousPageLabel:"Previous Page",jumpToPageDropdownLabel:"Jump to Page Dropdown",jumpToPageInputLabel:"Jump to Page Input",selectRow:"Row Selected",unselectRow:"Row Unselected",expandRow:"Row Expanded",collapseRow:"Row Collapsed",showFilterMenu:"Show Filter Menu",hideFilterMenu:"Hide Filter Menu",filterOperator:"Filter Operator",filterConstraint:"Filter Constraint",editRow:"Row Edit",saveEdit:"Save Edit",cancelEdit:"Cancel Edit",listView:"List View",gridView:"Grid View",slide:"Slide",slideNumber:"{slideNumber}",zoomImage:"Zoom Image",zoomIn:"Zoom In",zoomOut:"Zoom Out",rotateRight:"Rotate Right",rotateLeft:"Rotate Left",listLabel:"Option List",selectColor:"Select a color",removeLabel:"Remove",browseFiles:"Browse Files",maximizeLabel:"Maximize"}};zIndex={modal:1100,overlay:1e3,menu:1e3,tooltip:1100};translationSource=new pe;translationObserver=this.translationSource.asObservable();getTranslation(t){return this.translation[t]}setTranslation(t){this.translation=w(w({},this.translation),t),this.translationSource.next(this.translation)}setConfig(t){let{csp:i,ripple:o,inputStyle:r,inputVariant:s,theme:a,overlayOptions:l,translation:c}=t||{};i&&this.csp.set(i),o&&this.ripple.set(o),r&&this.inputStyle.set(r),s&&this.inputVariant.set(s),l&&(this.overlayOptions=l),c&&this.setTranslation(c),a&&this.setThemeConfig({theme:a,csp:i})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),Hs=new Z("PRIME_NG_CONFIG");function Wu(...e){let n=e?.map(i=>({provide:Hs,useValue:i,multi:!1})),t=Oi(()=>{let i=g(oi);e?.forEach(o=>i.setConfig(o))});return Xt([...n,t])}var wo=(()=>{class e extends P{name="common";static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})(),j=(()=>{class e{document=g(Ce);platformId=g(ke);el=g(Ke);injector=g(Rn);cd=g(tn);renderer=g(xt);config=g(oi);baseComponentStyle=g(wo);baseStyle=g(P);scopedStyleEl;rootEl;dt;get styleOptions(){return{nonce:this.config?.csp().nonce}}get _name(){return this.constructor.name.replace(/^_/,"").toLowerCase()}get componentStyle(){return this._componentStyle}attrSelector=Ot("pc");themeChangeListeners=[];_getHostInstance(t){if(t)return t?this.hostName?t.name===this.hostName?t:this._getHostInstance(t.parentInstance):t.parentInstance:void 0}_getOptionValue(t,i="",o={}){return pn(t,i,o)}ngOnInit(){this.document&&this._loadStyles()}ngAfterViewInit(){this.rootEl=this.el?.nativeElement,this.rootEl&&this.rootEl?.setAttribute(this.attrSelector,"")}ngOnChanges(t){if(this.document&&!Pn(this.platformId)){let{dt:i}=t;i&&i.currentValue&&(this._loadScopedThemeStyles(i.currentValue),this._themeChangeListener(()=>this._loadScopedThemeStyles(i.currentValue)))}}ngOnDestroy(){this._unloadScopedThemeStyles(),this.themeChangeListeners.forEach(t=>ue.off("theme:change",t))}_loadStyles(){let t=()=>{yt.isStyleNameLoaded("base")||(this.baseStyle.loadGlobalCSS(this.styleOptions),yt.setLoadedStyleName("base")),this._loadThemeStyles()};t(),this._themeChangeListener(()=>t())}_loadCoreStyles(){!yt.isStyleNameLoaded("base")&&this._name&&(this.baseComponentStyle.loadCSS(this.styleOptions),this.componentStyle&&this.componentStyle?.loadCSS(this.styleOptions),yt.setLoadedStyleName(this.componentStyle?.name))}_loadThemeStyles(){if(!S.isStyleNameLoaded("common")){let{primitive:t,semantic:i,global:o,style:r}=this.componentStyle?.getCommonTheme?.()||{};this.baseStyle.load(t?.css,w({name:"primitive-variables"},this.styleOptions)),this.baseStyle.load(i?.css,w({name:"semantic-variables"},this.styleOptions)),this.baseStyle.load(o?.css,w({name:"global-variables"},this.styleOptions)),this.baseStyle.loadGlobalTheme(w({name:"global-style"},this.styleOptions),r),S.setLoadedStyleName("common")}if(!S.isStyleNameLoaded(this.componentStyle?.name)&&this.componentStyle?.name){let{css:t,style:i}=this.componentStyle?.getComponentTheme?.()||{};this.componentStyle?.load(t,w({name:`${this.componentStyle?.name}-variables`},this.styleOptions)),this.componentStyle?.loadTheme(w({name:`${this.componentStyle?.name}-style`},this.styleOptions),i),S.setLoadedStyleName(this.componentStyle?.name)}if(!S.isStyleNameLoaded("layer-order")){let t=this.componentStyle?.getLayerOrderThemeCSS?.();this.baseStyle.load(t,w({name:"layer-order",first:!0},this.styleOptions)),S.setLoadedStyleName("layer-order")}this.dt&&(this._loadScopedThemeStyles(this.dt),this._themeChangeListener(()=>this._loadScopedThemeStyles(this.dt)))}_loadScopedThemeStyles(t){let{css:i}=this.componentStyle?.getPresetTheme?.(t,`[${this.attrSelector}]`)||{},o=this.componentStyle?.load(i,w({name:`${this.attrSelector}-${this.componentStyle?.name}`},this.styleOptions));this.scopedStyleEl=o?.el}_unloadScopedThemeStyles(){this.scopedStyleEl?.remove()}_themeChangeListener(t=()=>{}){yt.clearLoadedStyleNames(),ue.on("theme:change",t),this.themeChangeListeners.push(t)}cx(t,i){let o=this.parent?this.parent.componentStyle?.classes?.[t]:this.componentStyle?.classes?.[t];return typeof o=="function"?o({instance:this}):typeof o=="string"?o:t}sx(t){let i=this.componentStyle?.inlineStyles?.[t];return typeof i=="function"?i({instance:this}):typeof i=="string"?i:w({},i)}get parent(){return this.parentInstance}static \u0275fac=function(i){return new(i||e)};static \u0275dir=I({type:e,inputs:{dt:"dt"},features:[A([wo,P]),se]})}return e})();var zs=({dt:e})=>`
/* For PrimeNG */
.p-ripple {
    overflow: hidden;
    position: relative;
}

.p-ink {
    display: block;
    position: absolute;
    background: ${e("ripple.background")};
    border-radius: 100%;
    transform: scale(0);
}

.p-ink-active {
    animation: ripple 0.4s linear;
}

.p-ripple-disabled .p-ink {
    display: none !important;
}

@keyframes ripple {
    100% {
        opacity: 0;
        transform: scale(2.5);
    }
}
`,Gs={root:"p-ink"},So=(()=>{class e extends P{name="ripple";theme=zs;classes=Gs;static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var bn=(()=>{class e extends j{zone=g(Zt);_componentStyle=g(So);animationListener;mouseDownListener;timeout;constructor(){super(),Tt(()=>{on(this.platformId)&&(this.config.ripple()?this.zone.runOutsideAngular(()=>{this.create(),this.mouseDownListener=this.renderer.listen(this.el.nativeElement,"mousedown",this.onMouseDown.bind(this))}):this.remove())})}ngAfterViewInit(){super.ngAfterViewInit()}onMouseDown(t){let i=this.getInk();if(!i||this.document.defaultView?.getComputedStyle(i,null).display==="none")return;if(tt(i,"p-ink-active"),!Xn(i)&&!Jn(i)){let a=Math.max(Qn(this.el.nativeElement),dn(this.el.nativeElement));i.style.height=a+"px",i.style.width=a+"px"}let o=Zn(this.el.nativeElement),r=t.pageX-o.left+this.document.body.scrollTop-Jn(i)/2,s=t.pageY-o.top+this.document.body.scrollLeft-Xn(i)/2;this.renderer.setStyle(i,"top",s+"px"),this.renderer.setStyle(i,"left",r+"px"),Le(i,"p-ink-active"),this.timeout=setTimeout(()=>{let a=this.getInk();a&&tt(a,"p-ink-active")},401)}getInk(){let t=this.el.nativeElement.children;for(let i=0;i<t.length;i++)if(typeof t[i].className=="string"&&t[i].className.indexOf("p-ink")!==-1)return t[i];return null}resetInk(){let t=this.getInk();t&&tt(t,"p-ink-active")}onAnimationEnd(t){this.timeout&&clearTimeout(this.timeout),tt(t.currentTarget,"p-ink-active")}create(){let t=this.renderer.createElement("span");this.renderer.addClass(t,"p-ink"),this.renderer.appendChild(this.el.nativeElement,t),this.renderer.setAttribute(t,"aria-hidden","true"),this.renderer.setAttribute(t,"role","presentation"),this.animationListener||(this.animationListener=this.renderer.listen(t,"animationend",this.onAnimationEnd.bind(this)))}remove(){let t=this.getInk();t&&(this.mouseDownListener&&this.mouseDownListener(),this.animationListener&&this.animationListener(),this.mouseDownListener=null,this.animationListener=null,ro(t))}ngOnDestroy(){this.config&&this.config.ripple()&&this.remove(),super.ngOnDestroy()}static \u0275fac=function(i){return new(i||e)};static \u0275dir=I({type:e,selectors:[["","pRipple",""]],hostAttrs:[1,"p-ripple"],features:[A([So]),E]})}return e})(),dd=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=V({type:e});static \u0275inj=$({})}return e})();var qs=({dt:e})=>`
.p-badge {
    display: inline-flex;
    border-radius: ${e("badge.border.radius")};
    justify-content: center;
    padding: ${e("badge.padding")};
    background: ${e("badge.primary.background")};
    color: ${e("badge.primary.color")};
    font-size: ${e("badge.font.size")};
    font-weight: ${e("badge.font.weight")};
    min-width: ${e("badge.min.width")};
    height: ${e("badge.height")};
    line-height: ${e("badge.height")};
}

.p-badge-dot {
    width: ${e("badge.dot.size")};
    min-width: ${e("badge.dot.size")};
    height: ${e("badge.dot.size")};
    border-radius: 50%;
    padding: 0;
}

.p-badge-circle {
    padding: 0;
    border-radius: 50%;
}

.p-badge-secondary {
    background: ${e("badge.secondary.background")};
    color: ${e("badge.secondary.color")};
}

.p-badge-success {
    background: ${e("badge.success.background")};
    color: ${e("badge.success.color")};
}

.p-badge-info {
    background: ${e("badge.info.background")};
    color: ${e("badge.info.color")};
}

.p-badge-warn {
    background: ${e("badge.warn.background")};
    color: ${e("badge.warn.color")};
}

.p-badge-danger {
    background: ${e("badge.danger.background")};
    color: ${e("badge.danger.color")};
}

.p-badge-contrast {
    background: ${e("badge.contrast.background")};
    color: ${e("badge.contrast.color")};
}

.p-badge-sm {
    font-size: ${e("badge.sm.font.size")};
    min-width: ${e("badge.sm.min.width")};
    height: ${e("badge.sm.height")};
    line-height: ${e("badge.sm.height")};
}

.p-badge-lg {
    font-size: ${e("badge.lg.font.size")};
    min-width: ${e("badge.lg.min.width")};
    height: ${e("badge.lg.height")};
    line-height: ${e("badge.lg.height")};
}

.p-badge-xl {
    font-size: ${e("badge.xl.font.size")};
    min-width: ${e("badge.xl.min.width")};
    height: ${e("badge.xl.height")};
    line-height: ${e("badge.xl.height")};
}

/* For PrimeNG (directive)*/

.p-overlay-badge {
    position: relative;
}

.p-overlay-badge > .p-badge {
    position: absolute;
    top: 0;
    inset-inline-end: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
    margin: 0;
}
`,Ks={root:({props:e,instance:n})=>["p-badge p-component",{"p-badge-circle":D(e.value)&&String(e.value).length===1,"p-badge-dot":Y(e.value)&&!n.$slots.default,"p-badge-sm":e.size==="small","p-badge-lg":e.size==="large","p-badge-xl":e.size==="xlarge","p-badge-info":e.severity==="info","p-badge-success":e.severity==="success","p-badge-warn":e.severity==="warn","p-badge-danger":e.severity==="danger","p-badge-secondary":e.severity==="secondary","p-badge-contrast":e.severity==="contrast"}]},xo=(()=>{class e extends P{name="badge";theme=qs;classes=Ks;static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var ri=(()=>{class e extends j{styleClass=De();style=De();badgeSize=De();size=De();severity=De();value=De();badgeDisabled=De(!1,{transform:m});_componentStyle=g(xo);containerClass=ve(()=>{let t="p-badge p-component";return D(this.value())&&String(this.value()).length===1&&(t+=" p-badge-circle"),this.badgeSize()==="large"?t+=" p-badge-lg":this.badgeSize()==="xlarge"?t+=" p-badge-xl":this.badgeSize()==="small"&&(t+=" p-badge-sm"),Y(this.value())&&(t+=" p-badge-dot"),this.styleClass()&&(t+=` ${this.styleClass()}`),this.severity()&&(t+=` p-badge-${this.severity()}`),t});static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275cmp=L({type:e,selectors:[["p-badge"]],hostVars:6,hostBindings:function(i,o){i&2&&(Qe(o.style()),q(o.containerClass()),Mi("display",o.badgeDisabled()?"none":null))},inputs:{styleClass:[1,"styleClass"],style:[1,"style"],badgeSize:[1,"badgeSize"],size:[1,"size"],severity:[1,"severity"],value:[1,"value"],badgeDisabled:[1,"badgeDisabled"]},features:[A([xo]),E],decls:1,vars:1,template:function(i,o){i&1&&ct(0),i&2&&ut(o.value())},dependencies:[ae,z],encapsulation:2,changeDetection:0})}return e})(),To=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=V({type:e});static \u0275inj=$({imports:[ri,z,z]})}return e})();var si=(()=>{class e{static zindex=1e3;static calculatedScrollbarWidth=null;static calculatedScrollbarHeight=null;static browser;static addClass(t,i){t&&i&&(t.classList?t.classList.add(i):t.className+=" "+i)}static addMultipleClasses(t,i){if(t&&i)if(t.classList){let o=i.trim().split(" ");for(let r=0;r<o.length;r++)t.classList.add(o[r])}else{let o=i.split(" ");for(let r=0;r<o.length;r++)t.className+=" "+o[r]}}static removeClass(t,i){t&&i&&(t.classList?t.classList.remove(i):t.className=t.className.replace(new RegExp("(^|\\b)"+i.split(" ").join("|")+"(\\b|$)","gi")," "))}static removeMultipleClasses(t,i){t&&i&&[i].flat().filter(Boolean).forEach(o=>o.split(" ").forEach(r=>this.removeClass(t,r)))}static hasClass(t,i){return t&&i?t.classList?t.classList.contains(i):new RegExp("(^| )"+i+"( |$)","gi").test(t.className):!1}static siblings(t){return Array.prototype.filter.call(t.parentNode.children,function(i){return i!==t})}static find(t,i){return Array.from(t.querySelectorAll(i))}static findSingle(t,i){return this.isElement(t)?t.querySelector(i):null}static index(t){let i=t.parentNode.childNodes,o=0;for(var r=0;r<i.length;r++){if(i[r]==t)return o;i[r].nodeType==1&&o++}return-1}static indexWithinGroup(t,i){let o=t.parentNode?t.parentNode.childNodes:[],r=0;for(var s=0;s<o.length;s++){if(o[s]==t)return r;o[s].attributes&&o[s].attributes[i]&&o[s].nodeType==1&&r++}return-1}static appendOverlay(t,i,o="self"){o!=="self"&&t&&i&&this.appendChild(t,i)}static alignOverlay(t,i,o="self",r=!0){t&&i&&(r&&(t.style.minWidth=`${e.getOuterWidth(i)}px`),o==="self"?this.relativePosition(t,i):this.absolutePosition(t,i))}static relativePosition(t,i,o=!0){let r=F=>{if(F)return getComputedStyle(F).getPropertyValue("position")==="relative"?F:r(F.parentElement)},s=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),a=i.offsetHeight,l=i.getBoundingClientRect(),c=this.getWindowScrollTop(),u=this.getWindowScrollLeft(),d=this.getViewport(),h=r(t)?.getBoundingClientRect()||{top:-1*c,left:-1*u},_,f;l.top+a+s.height>d.height?(_=l.top-h.top-s.height,t.style.transformOrigin="bottom",l.top+_<0&&(_=-1*l.top)):(_=a+l.top-h.top,t.style.transformOrigin="top");let v=l.left+s.width-d.width,R=l.left-h.left;s.width>d.width?f=(l.left-h.left)*-1:v>0?f=R-v:f=l.left-h.left,t.style.top=_+"px",t.style.left=f+"px",o&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static absolutePosition(t,i,o=!0){let r=t.offsetParent?{width:t.offsetWidth,height:t.offsetHeight}:this.getHiddenElementDimensions(t),s=r.height,a=r.width,l=i.offsetHeight,c=i.offsetWidth,u=i.getBoundingClientRect(),d=this.getWindowScrollTop(),p=this.getWindowScrollLeft(),h=this.getViewport(),_,f;u.top+l+s>h.height?(_=u.top+d-s,t.style.transformOrigin="bottom",_<0&&(_=d)):(_=l+u.top+d,t.style.transformOrigin="top"),u.left+a>h.width?f=Math.max(0,u.left+p+c-a):f=u.left+p,t.style.top=_+"px",t.style.left=f+"px",o&&(t.style.marginTop=origin==="bottom"?"calc(var(--p-anchor-gutter) * -1)":"calc(var(--p-anchor-gutter))")}static getParents(t,i=[]){return t.parentNode===null?i:this.getParents(t.parentNode,i.concat([t.parentNode]))}static getScrollableParents(t){let i=[];if(t){let o=this.getParents(t),r=/(auto|scroll)/,s=a=>{let l=window.getComputedStyle(a,null);return r.test(l.getPropertyValue("overflow"))||r.test(l.getPropertyValue("overflowX"))||r.test(l.getPropertyValue("overflowY"))};for(let a of o){let l=a.nodeType===1&&a.dataset.scrollselectors;if(l){let c=l.split(",");for(let u of c){let d=this.findSingle(a,u);d&&s(d)&&i.push(d)}}a.nodeType!==9&&s(a)&&i.push(a)}}return i}static getHiddenElementOuterHeight(t){t.style.visibility="hidden",t.style.display="block";let i=t.offsetHeight;return t.style.display="none",t.style.visibility="visible",i}static getHiddenElementOuterWidth(t){t.style.visibility="hidden",t.style.display="block";let i=t.offsetWidth;return t.style.display="none",t.style.visibility="visible",i}static getHiddenElementDimensions(t){let i={};return t.style.visibility="hidden",t.style.display="block",i.width=t.offsetWidth,i.height=t.offsetHeight,t.style.display="none",t.style.visibility="visible",i}static scrollInView(t,i){let o=getComputedStyle(t).getPropertyValue("borderTopWidth"),r=o?parseFloat(o):0,s=getComputedStyle(t).getPropertyValue("paddingTop"),a=s?parseFloat(s):0,l=t.getBoundingClientRect(),u=i.getBoundingClientRect().top+document.body.scrollTop-(l.top+document.body.scrollTop)-r-a,d=t.scrollTop,p=t.clientHeight,h=this.getOuterHeight(i);u<0?t.scrollTop=d+u:u+h>p&&(t.scrollTop=d+u-p+h)}static fadeIn(t,i){t.style.opacity=0;let o=+new Date,r=0,s=function(){r=+t.style.opacity.replace(",",".")+(new Date().getTime()-o)/i,t.style.opacity=r,o=+new Date,+r<1&&(window.requestAnimationFrame&&requestAnimationFrame(s)||setTimeout(s,16))};s()}static fadeOut(t,i){var o=1,r=50,s=i,a=r/s;let l=setInterval(()=>{o=o-a,o<=0&&(o=0,clearInterval(l)),t.style.opacity=o},r)}static getWindowScrollTop(){let t=document.documentElement;return(window.pageYOffset||t.scrollTop)-(t.clientTop||0)}static getWindowScrollLeft(){let t=document.documentElement;return(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0)}static matches(t,i){var o=Element.prototype,r=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.msMatchesSelector||function(s){return[].indexOf.call(document.querySelectorAll(s),this)!==-1};return r.call(t,i)}static getOuterWidth(t,i){let o=t.offsetWidth;if(i){let r=getComputedStyle(t);o+=parseFloat(r.marginLeft)+parseFloat(r.marginRight)}return o}static getHorizontalPadding(t){let i=getComputedStyle(t);return parseFloat(i.paddingLeft)+parseFloat(i.paddingRight)}static getHorizontalMargin(t){let i=getComputedStyle(t);return parseFloat(i.marginLeft)+parseFloat(i.marginRight)}static innerWidth(t){let i=t.offsetWidth,o=getComputedStyle(t);return i+=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),i}static width(t){let i=t.offsetWidth,o=getComputedStyle(t);return i-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight),i}static getInnerHeight(t){let i=t.offsetHeight,o=getComputedStyle(t);return i+=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom),i}static getOuterHeight(t,i){let o=t.offsetHeight;if(i){let r=getComputedStyle(t);o+=parseFloat(r.marginTop)+parseFloat(r.marginBottom)}return o}static getHeight(t){let i=t.offsetHeight,o=getComputedStyle(t);return i-=parseFloat(o.paddingTop)+parseFloat(o.paddingBottom)+parseFloat(o.borderTopWidth)+parseFloat(o.borderBottomWidth),i}static getWidth(t){let i=t.offsetWidth,o=getComputedStyle(t);return i-=parseFloat(o.paddingLeft)+parseFloat(o.paddingRight)+parseFloat(o.borderLeftWidth)+parseFloat(o.borderRightWidth),i}static getViewport(){let t=window,i=document,o=i.documentElement,r=i.getElementsByTagName("body")[0],s=t.innerWidth||o.clientWidth||r.clientWidth,a=t.innerHeight||o.clientHeight||r.clientHeight;return{width:s,height:a}}static getOffset(t){var i=t.getBoundingClientRect();return{top:i.top+(window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0),left:i.left+(window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0)}}static replaceElementWith(t,i){let o=t.parentNode;if(!o)throw"Can't replace element";return o.replaceChild(i,t)}static getUserAgent(){if(navigator&&this.isClient())return navigator.userAgent}static isIE(){var t=window.navigator.userAgent,i=t.indexOf("MSIE ");if(i>0)return!0;var o=t.indexOf("Trident/");if(o>0){var r=t.indexOf("rv:");return!0}var s=t.indexOf("Edge/");return s>0}static isIOS(){return/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream}static isAndroid(){return/(android)/i.test(navigator.userAgent)}static isTouchDevice(){return"ontouchstart"in window||navigator.maxTouchPoints>0}static appendChild(t,i){if(this.isElement(i))i.appendChild(t);else if(i&&i.el&&i.el.nativeElement)i.el.nativeElement.appendChild(t);else throw"Cannot append "+i+" to "+t}static removeChild(t,i){if(this.isElement(i))i.removeChild(t);else if(i.el&&i.el.nativeElement)i.el.nativeElement.removeChild(t);else throw"Cannot remove "+t+" from "+i}static removeElement(t){"remove"in Element.prototype?t.remove():t.parentNode.removeChild(t)}static isElement(t){return typeof HTMLElement=="object"?t instanceof HTMLElement:t&&typeof t=="object"&&t!==null&&t.nodeType===1&&typeof t.nodeName=="string"}static calculateScrollbarWidth(t){if(t){let i=getComputedStyle(t);return t.offsetWidth-t.clientWidth-parseFloat(i.borderLeftWidth)-parseFloat(i.borderRightWidth)}else{if(this.calculatedScrollbarWidth!==null)return this.calculatedScrollbarWidth;let i=document.createElement("div");i.className="p-scrollbar-measure",document.body.appendChild(i);let o=i.offsetWidth-i.clientWidth;return document.body.removeChild(i),this.calculatedScrollbarWidth=o,o}}static calculateScrollbarHeight(){if(this.calculatedScrollbarHeight!==null)return this.calculatedScrollbarHeight;let t=document.createElement("div");t.className="p-scrollbar-measure",document.body.appendChild(t);let i=t.offsetHeight-t.clientHeight;return document.body.removeChild(t),this.calculatedScrollbarWidth=i,i}static invokeElementMethod(t,i,o){t[i].apply(t,o)}static clearSelection(){if(window.getSelection)window.getSelection().empty?window.getSelection().empty():window.getSelection().removeAllRanges&&window.getSelection().rangeCount>0&&window.getSelection().getRangeAt(0).getClientRects().length>0&&window.getSelection().removeAllRanges();else if(document.selection&&document.selection.empty)try{document.selection.empty()}catch{}}static getBrowser(){if(!this.browser){let t=this.resolveUserAgent();this.browser={},t.browser&&(this.browser[t.browser]=!0,this.browser.version=t.version),this.browser.chrome?this.browser.webkit=!0:this.browser.webkit&&(this.browser.safari=!0)}return this.browser}static resolveUserAgent(){let t=navigator.userAgent.toLowerCase(),i=/(chrome)[ \/]([\w.]+)/.exec(t)||/(webkit)[ \/]([\w.]+)/.exec(t)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t)||/(msie) ([\w.]+)/.exec(t)||t.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t)||[];return{browser:i[1]||"",version:i[2]||"0"}}static isInteger(t){return Number.isInteger?Number.isInteger(t):typeof t=="number"&&isFinite(t)&&Math.floor(t)===t}static isHidden(t){return!t||t.offsetParent===null}static isVisible(t){return t&&t.offsetParent!=null}static isExist(t){return t!==null&&typeof t<"u"&&t.nodeName&&t.parentNode}static focus(t,i){t&&document.activeElement!==t&&t.focus(i)}static getFocusableSelectorString(t=""){return`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-inputtext:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t},
        .p-button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${t}`}static getFocusableElements(t,i=""){let o=this.find(t,this.getFocusableSelectorString(i)),r=[];for(let s of o){let a=getComputedStyle(s);this.isVisible(s)&&a.display!="none"&&a.visibility!="hidden"&&r.push(s)}return r}static getFocusableElement(t,i=""){let o=this.findSingle(t,this.getFocusableSelectorString(i));if(o){let r=getComputedStyle(o);if(this.isVisible(o)&&r.display!="none"&&r.visibility!="hidden")return o}return null}static getFirstFocusableElement(t,i=""){let o=this.getFocusableElements(t,i);return o.length>0?o[0]:null}static getLastFocusableElement(t,i){let o=this.getFocusableElements(t,i);return o.length>0?o[o.length-1]:null}static getNextFocusableElement(t,i=!1){let o=e.getFocusableElements(t),r=0;if(o&&o.length>0){let s=o.indexOf(o[0].ownerDocument.activeElement);i?s==-1||s===0?r=o.length-1:r=s-1:s!=-1&&s!==o.length-1&&(r=s+1)}return o[r]}static generateZIndex(){return this.zindex=this.zindex||999,++this.zindex}static getSelection(){return window.getSelection?window.getSelection().toString():document.getSelection?document.getSelection().toString():document.selection?document.selection.createRange().text:null}static getTargetElement(t,i){if(!t)return null;switch(t){case"document":return document;case"window":return window;case"@next":return i?.nextElementSibling;case"@prev":return i?.previousElementSibling;case"@parent":return i?.parentElement;case"@grandparent":return i?.parentElement.parentElement;default:let o=typeof t;if(o==="string")return document.querySelector(t);if(o==="object"&&t.hasOwnProperty("nativeElement"))return this.isExist(t.nativeElement)?t.nativeElement:void 0;let s=(a=>!!(a&&a.constructor&&a.call&&a.apply))(t)?t():t;return s&&s.nodeType===9||this.isExist(s)?s:null}}static isClient(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}static getAttribute(t,i){if(t){let o=t.getAttribute(i);return isNaN(o)?o==="true"||o==="false"?o==="true":o:+o}}static calculateBodyScrollbarWidth(){return window.innerWidth-document.documentElement.offsetWidth}static blockBodyScroll(t="p-overflow-hidden"){document.body.style.setProperty("--scrollbar-width",this.calculateBodyScrollbarWidth()+"px"),this.addClass(document.body,t)}static unblockBodyScroll(t="p-overflow-hidden"){document.body.style.removeProperty("--scrollbar-width"),this.removeClass(document.body,t)}static createElement(t,i={},...o){if(t){let r=document.createElement(t);return this.setAttributes(r,i),r.append(...o),r}}static setAttribute(t,i="",o){this.isElement(t)&&o!==null&&o!==void 0&&t.setAttribute(i,o)}static setAttributes(t,i={}){if(this.isElement(t)){let o=(r,s)=>{let a=t?.$attrs?.[r]?[t?.$attrs?.[r]]:[];return[s].flat().reduce((l,c)=>{if(c!=null){let u=typeof c;if(u==="string"||u==="number")l.push(c);else if(u==="object"){let d=Array.isArray(c)?o(r,c):Object.entries(c).map(([p,h])=>r==="style"&&(h||h===0)?`${p.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}:${h}`:h?p:void 0);l=d.length?l.concat(d.filter(p=>!!p)):l}}return l},a)};Object.entries(i).forEach(([r,s])=>{if(s!=null){let a=r.match(/^on(.+)/);a?t.addEventListener(a[1].toLowerCase(),s):r==="pBind"?this.setAttributes(t,s):(s=r==="class"?[...new Set(o("class",s))].join(" ").trim():r==="style"?o("style",s).join(";").trim():s,(t.$attrs=t.$attrs||{})&&(t.$attrs[r]=s),t.setAttribute(r,s))}})}}static isFocusableElement(t,i=""){return this.isElement(t)?t.matches(`button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${i}`):!1}}return e})(),Io=class{element;listener;scrollableParents;constructor(n,t=()=>{}){this.element=n,this.listener=t}bindScrollListener(){this.scrollableParents=si.getScrollableParents(this.element);for(let n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].addEventListener("scroll",this.listener)}unbindScrollListener(){if(this.scrollableParents)for(let n=0;n<this.scrollableParents.length;n++)this.scrollableParents[n].removeEventListener("scroll",this.listener)}destroy(){this.unbindScrollListener(),this.element=null,this.listener=null,this.scrollableParents=null}};var Ao=(()=>{class e extends j{autofocus=!1;_autofocus=!1;focused=!1;platformId=g(ke);document=g(Ce);host=g(Ke);ngAfterContentChecked(){this.autofocus===!1?this.host.nativeElement.removeAttribute("autofocus"):this.host.nativeElement.setAttribute("autofocus",!0),this.focused||this.autoFocus()}ngAfterViewChecked(){this.focused||this.autoFocus()}autoFocus(){on(this.platformId)&&this._autofocus&&setTimeout(()=>{let t=si.getFocusableElements(this.host?.nativeElement);t.length===0&&this.host.nativeElement.focus(),t.length>0&&t[0].focus(),this.focused=!0})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275dir=I({type:e,selectors:[["","pAutoFocus",""]],inputs:{autofocus:[2,"autofocus","autofocus",m],_autofocus:[0,"pAutoFocus","_autofocus"]},features:[te,E]})}return e})(),Nd=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=V({type:e});static \u0275inj=$({})}return e})();var Ys=["*"],Xs=`
.p-icon {
    display: inline-block;
    vertical-align: baseline;
}

.p-icon-spin {
    -webkit-animation: p-icon-spin 2s infinite linear;
    animation: p-icon-spin 2s infinite linear;
}

@-webkit-keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}

@keyframes p-icon-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg);
    }
}
`,Zs=(()=>{class e extends P{name="baseicon";inlineStyles=Xs;static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var Ue=(()=>{class e extends j{label;spin=!1;styleClass;role;ariaLabel;ariaHidden;ngOnInit(){super.ngOnInit(),this.getAttributes()}getAttributes(){let t=Y(this.label);this.role=t?void 0:"img",this.ariaLabel=t?void 0:this.label,this.ariaHidden=t}getClassNames(){return`p-icon ${this.styleClass?this.styleClass+" ":""}${this.spin?"p-icon-spin":""}`}static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275cmp=L({type:e,selectors:[["ng-component"]],hostAttrs:[1,"p-component","p-iconwrapper"],inputs:{label:"label",spin:[2,"spin","spin",m],styleClass:"styleClass"},features:[A([Zs]),te,E],ngContentSelectors:Ys,decls:1,vars:0,template:function(i,o){i&1&&(Je(),et(0))},encapsulation:2,changeDetection:0})}return e})();var Do=(()=>{class e extends Ue{static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275cmp=L({type:e,selectors:[["CheckIcon"]],features:[E],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M4.86199 11.5948C4.78717 11.5923 4.71366 11.5745 4.64596 11.5426C4.57826 11.5107 4.51779 11.4652 4.46827 11.4091L0.753985 7.69483C0.683167 7.64891 0.623706 7.58751 0.580092 7.51525C0.536478 7.44299 0.509851 7.36177 0.502221 7.27771C0.49459 7.19366 0.506156 7.10897 0.536046 7.03004C0.565935 6.95111 0.613367 6.88 0.674759 6.82208C0.736151 6.76416 0.8099 6.72095 0.890436 6.69571C0.970973 6.67046 1.05619 6.66385 1.13966 6.67635C1.22313 6.68886 1.30266 6.72017 1.37226 6.76792C1.44186 6.81567 1.4997 6.8786 1.54141 6.95197L4.86199 10.2503L12.6397 2.49483C12.7444 2.42694 12.8689 2.39617 12.9932 2.40745C13.1174 2.41873 13.2343 2.47141 13.3251 2.55705C13.4159 2.64268 13.4753 2.75632 13.4938 2.87973C13.5123 3.00315 13.4888 3.1292 13.4271 3.23768L5.2557 11.4091C5.20618 11.4652 5.14571 11.5107 5.07801 11.5426C5.01031 11.5745 4.9368 11.5923 4.86199 11.5948Z","fill","currentColor"]],template:function(i,o){i&1&&(Ae(),U(0,"svg",0),H(1,"path",1),W()),i&2&&(q(o.getClassNames()),T("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return e})();var ko=(()=>{class e extends Ue{static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275cmp=L({type:e,selectors:[["MinusIcon"]],features:[E],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(i,o){i&1&&(Ae(),U(0,"svg",0),H(1,"path",1),W()),i&2&&(q(o.getClassNames()),T("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return e})();var Oo=(()=>{class e extends Ue{pathId;ngOnInit(){this.pathId="url(#"+Ot()+")"}static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275cmp=L({type:e,selectors:[["SpinnerIcon"]],features:[E],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,o){i&1&&(Ae(),U(0,"svg",0)(1,"g"),H(2,"path",1),W(),U(3,"defs")(4,"clipPath",2),H(5,"rect",3),W()()()),i&2&&(q(o.getClassNames()),T("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role),x(),T("clip-path",o.pathId),x(3),y("id",o.pathId))},encapsulation:2})}return e})();var ep=(()=>{class e extends Ue{static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275cmp=L({type:e,selectors:[["TimesIcon"]],features:[E],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M8.01186 7.00933L12.27 2.75116C12.341 2.68501 12.398 2.60524 12.4375 2.51661C12.4769 2.42798 12.4982 2.3323 12.4999 2.23529C12.5016 2.13827 12.4838 2.0419 12.4474 1.95194C12.4111 1.86197 12.357 1.78024 12.2884 1.71163C12.2198 1.64302 12.138 1.58893 12.0481 1.55259C11.9581 1.51625 11.8617 1.4984 11.7647 1.50011C11.6677 1.50182 11.572 1.52306 11.4834 1.56255C11.3948 1.60204 11.315 1.65898 11.2488 1.72997L6.99067 5.98814L2.7325 1.72997C2.59553 1.60234 2.41437 1.53286 2.22718 1.53616C2.03999 1.53946 1.8614 1.61529 1.72901 1.74767C1.59663 1.88006 1.5208 2.05865 1.5175 2.24584C1.5142 2.43303 1.58368 2.61419 1.71131 2.75116L5.96948 7.00933L1.71131 11.2675C1.576 11.403 1.5 11.5866 1.5 11.7781C1.5 11.9696 1.576 12.1532 1.71131 12.2887C1.84679 12.424 2.03043 12.5 2.2219 12.5C2.41338 12.5 2.59702 12.424 2.7325 12.2887L6.99067 8.03052L11.2488 12.2887C11.3843 12.424 11.568 12.5 11.7594 12.5C11.9509 12.5 12.1346 12.424 12.27 12.2887C12.4053 12.1532 12.4813 11.9696 12.4813 11.7781C12.4813 11.5866 12.4053 11.403 12.27 11.2675L8.01186 7.00933Z","fill","currentColor"]],template:function(i,o){i&1&&(Ae(),U(0,"svg",0),H(1,"path",1),W()),i&2&&(q(o.getClassNames()),T("aria-label",o.ariaLabel)("aria-hidden",o.ariaHidden)("role",o.role))},encapsulation:2})}return e})();var Js=["content"],ea=["loading"],ta=["icon"],na=["*"],No=e=>({class:e});function ia(e,n){e&1&&Ze(0)}function oa(e,n){if(e&1&&H(0,"span",8),e&2){let t=M(3);y("ngClass",t.iconClass()),T("aria-hidden",!0)("data-pc-section","loadingicon")}}function ra(e,n){if(e&1&&H(0,"SpinnerIcon",9),e&2){let t=M(3);y("styleClass",t.spinnerIconClass())("spin",!0),T("aria-hidden",!0)("data-pc-section","loadingicon")}}function sa(e,n){if(e&1&&(Ye(0),B(1,oa,1,3,"span",6)(2,ra,1,4,"SpinnerIcon",7),Xe()),e&2){let t=M(2);x(),y("ngIf",t.loadingIcon),x(),y("ngIf",!t.loadingIcon)}}function aa(e,n){}function la(e,n){if(e&1&&B(0,aa,0,0,"ng-template",10),e&2){let t=M(2);y("ngIf",t.loadingIconTemplate||t._loadingIconTemplate)}}function ca(e,n){if(e&1&&(Ye(0),B(1,sa,3,2,"ng-container",2)(2,la,1,1,null,5),Xe()),e&2){let t=M();x(),y("ngIf",!t.loadingIconTemplate&&!t._loadingIconTemplate),x(),y("ngTemplateOutlet",t.loadingIconTemplate||t._loadingIconTemplate)("ngTemplateOutletContext",Oe(3,No,t.iconClass()))}}function ua(e,n){if(e&1&&H(0,"span",8),e&2){let t=M(2);q(t.icon),y("ngClass",t.iconClass()),T("data-pc-section","icon")}}function da(e,n){}function pa(e,n){if(e&1&&B(0,da,0,0,"ng-template",10),e&2){let t=M(2);y("ngIf",!t.icon&&(t.iconTemplate||t._iconTemplate))}}function ha(e,n){if(e&1&&(Ye(0),B(1,ua,1,4,"span",11)(2,pa,1,1,null,5),Xe()),e&2){let t=M();x(),y("ngIf",t.icon&&!t.iconTemplate&&!t._iconTemplate),x(),y("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",Oe(3,No,t.iconClass()))}}function fa(e,n){if(e&1&&(U(0,"span",12),ct(1),W()),e&2){let t=M();T("aria-hidden",t.icon&&!t.label)("data-pc-section","label"),x(),ut(t.label)}}function ga(e,n){if(e&1&&H(0,"p-badge",13),e&2){let t=M();y("value",t.badge)("severity",t.badgeSeverity)}}var ma=({dt:e})=>`
.p-button {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("button.primary.color")};
    background: ${e("button.primary.background")};
    border: 1px solid ${e("button.primary.border.color")};
    padding-block: ${e("button.padding.y")};
    padding-inline: ${e("button.padding.x")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("button.transition.duration")}, color ${e("button.transition.duration")}, border-color ${e("button.transition.duration")},
            outline-color ${e("button.transition.duration")}, box-shadow ${e("button.transition.duration")};
    border-radius: ${e("button.border.radius")};
    outline-color: transparent;
    gap: ${e("button.gap")};
}

.p-button-icon,
.p-button-icon:before,
.p-button-icon:after {
    line-height: inherit;
}

.p-button:disabled {
    cursor: default;
}

.p-button-icon-right {
    order: 1;
}

.p-button-icon-right:dir(rtl) {
    order: -1;
}

.p-button:not(.p-button-vertical) .p-button-icon:not(.p-button-icon-right):dir(rtl) {
    order: 1;
}

.p-button-icon-bottom {
    order: 2;
}

.p-button-icon-only {
    width: ${e("button.icon.only.width")};
    padding-inline-start: 0;
    padding-inline-end: 0;
    gap: 0;
}

.p-button-icon-only.p-button-rounded {
    border-radius: 50%;
    height: ${e("button.icon.only.width")};
}

.p-button-icon-only .p-button-label {
    visibility: hidden;
    width: 0;
}

.p-button-sm {
    font-size: ${e("button.sm.font.size")};
    padding-block: ${e("button.sm.padding.y")};
    padding-inline: ${e("button.sm.padding.x")};
}

.p-button-sm .p-button-icon {
    font-size: ${e("button.sm.font.size")};
}

.p-button-lg {
    font-size: ${e("button.lg.font.size")};
    padding-block: ${e("button.lg.padding.y")};
    padding-inline: ${e("button.lg.padding.x")};
}

.p-button-lg .p-button-icon {
    font-size: ${e("button.lg.font.size")};
}

.p-button-vertical {
    flex-direction: column;
}

.p-button-label {
    font-weight: ${e("button.label.font.weight")};
}

.p-button-fluid {
    width: 100%;
}

.p-button-fluid.p-button-icon-only {
    width: ${e("button.icon.only.width")};
}

.p-button:not(:disabled):hover {
    background: ${e("button.primary.hover.background")};
    border: 1px solid ${e("button.primary.hover.border.color")};
    color: ${e("button.primary.hover.color")};
}

.p-button:not(:disabled):active {
    background: ${e("button.primary.active.background")};
    border: 1px solid ${e("button.primary.active.border.color")};
    color: ${e("button.primary.active.color")};
}

.p-button:focus-visible {
    box-shadow: ${e("button.primary.focus.ring.shadow")};
    outline: ${e("button.focus.ring.width")} ${e("button.focus.ring.style")} ${e("button.primary.focus.ring.color")};
    outline-offset: ${e("button.focus.ring.offset")};
}

.p-button .p-badge {
    min-width: ${e("button.badge.size")};
    height: ${e("button.badge.size")};
    line-height: ${e("button.badge.size")};
}

.p-button-raised {
    box-shadow: ${e("button.raised.shadow")};
}

.p-button-rounded {
    border-radius: ${e("button.rounded.border.radius")};
}

.p-button-secondary {
    background: ${e("button.secondary.background")};
    border: 1px solid ${e("button.secondary.border.color")};
    color: ${e("button.secondary.color")};
}

.p-button-secondary:not(:disabled):hover {
    background: ${e("button.secondary.hover.background")};
    border: 1px solid ${e("button.secondary.hover.border.color")};
    color: ${e("button.secondary.hover.color")};
}

.p-button-secondary:not(:disabled):active {
    background: ${e("button.secondary.active.background")};
    border: 1px solid ${e("button.secondary.active.border.color")};
    color: ${e("button.secondary.active.color")};
}

.p-button-secondary:focus-visible {
    outline-color: ${e("button.secondary.focus.ring.color")};
    box-shadow: ${e("button.secondary.focus.ring.shadow")};
}

.p-button-success {
    background: ${e("button.success.background")};
    border: 1px solid ${e("button.success.border.color")};
    color: ${e("button.success.color")};
}

.p-button-success:not(:disabled):hover {
    background: ${e("button.success.hover.background")};
    border: 1px solid ${e("button.success.hover.border.color")};
    color: ${e("button.success.hover.color")};
}

.p-button-success:not(:disabled):active {
    background: ${e("button.success.active.background")};
    border: 1px solid ${e("button.success.active.border.color")};
    color: ${e("button.success.active.color")};
}

.p-button-success:focus-visible {
    outline-color: ${e("button.success.focus.ring.color")};
    box-shadow: ${e("button.success.focus.ring.shadow")};
}

.p-button-info {
    background: ${e("button.info.background")};
    border: 1px solid ${e("button.info.border.color")};
    color: ${e("button.info.color")};
}

.p-button-info:not(:disabled):hover {
    background: ${e("button.info.hover.background")};
    border: 1px solid ${e("button.info.hover.border.color")};
    color: ${e("button.info.hover.color")};
}

.p-button-info:not(:disabled):active {
    background: ${e("button.info.active.background")};
    border: 1px solid ${e("button.info.active.border.color")};
    color: ${e("button.info.active.color")};
}

.p-button-info:focus-visible {
    outline-color: ${e("button.info.focus.ring.color")};
    box-shadow: ${e("button.info.focus.ring.shadow")};
}

.p-button-warn {
    background: ${e("button.warn.background")};
    border: 1px solid ${e("button.warn.border.color")};
    color: ${e("button.warn.color")};
}

.p-button-warn:not(:disabled):hover {
    background: ${e("button.warn.hover.background")};
    border: 1px solid ${e("button.warn.hover.border.color")};
    color: ${e("button.warn.hover.color")};
}

.p-button-warn:not(:disabled):active {
    background: ${e("button.warn.active.background")};
    border: 1px solid ${e("button.warn.active.border.color")};
    color: ${e("button.warn.active.color")};
}

.p-button-warn:focus-visible {
    outline-color: ${e("button.warn.focus.ring.color")};
    box-shadow: ${e("button.warn.focus.ring.shadow")};
}

.p-button-help {
    background: ${e("button.help.background")};
    border: 1px solid ${e("button.help.border.color")};
    color: ${e("button.help.color")};
}

.p-button-help:not(:disabled):hover {
    background: ${e("button.help.hover.background")};
    border: 1px solid ${e("button.help.hover.border.color")};
    color: ${e("button.help.hover.color")};
}

.p-button-help:not(:disabled):active {
    background: ${e("button.help.active.background")};
    border: 1px solid ${e("button.help.active.border.color")};
    color: ${e("button.help.active.color")};
}

.p-button-help:focus-visible {
    outline-color: ${e("button.help.focus.ring.color")};
    box-shadow: ${e("button.help.focus.ring.shadow")};
}

.p-button-danger {
    background: ${e("button.danger.background")};
    border: 1px solid ${e("button.danger.border.color")};
    color: ${e("button.danger.color")};
}

.p-button-danger:not(:disabled):hover {
    background: ${e("button.danger.hover.background")};
    border: 1px solid ${e("button.danger.hover.border.color")};
    color: ${e("button.danger.hover.color")};
}

.p-button-danger:not(:disabled):active {
    background: ${e("button.danger.active.background")};
    border: 1px solid ${e("button.danger.active.border.color")};
    color: ${e("button.danger.active.color")};
}

.p-button-danger:focus-visible {
    outline-color: ${e("button.danger.focus.ring.color")};
    box-shadow: ${e("button.danger.focus.ring.shadow")};
}

.p-button-contrast {
    background: ${e("button.contrast.background")};
    border: 1px solid ${e("button.contrast.border.color")};
    color: ${e("button.contrast.color")};
}

.p-button-contrast:not(:disabled):hover {
    background: ${e("button.contrast.hover.background")};
    border: 1px solid ${e("button.contrast.hover.border.color")};
    color: ${e("button.contrast.hover.color")};
}

.p-button-contrast:not(:disabled):active {
    background: ${e("button.contrast.active.background")};
    border: 1px solid ${e("button.contrast.active.border.color")};
    color: ${e("button.contrast.active.color")};
}

.p-button-contrast:focus-visible {
    outline-color: ${e("button.contrast.focus.ring.color")};
    box-shadow: ${e("button.contrast.focus.ring.shadow")};
}

.p-button-outlined {
    background: transparent;
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):hover {
    background: ${e("button.outlined.primary.hover.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined:not(:disabled):active {
    background: ${e("button.outlined.primary.active.background")};
    border-color: ${e("button.outlined.primary.border.color")};
    color: ${e("button.outlined.primary.color")};
}

.p-button-outlined.p-button-secondary {
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):hover {
    background: ${e("button.outlined.secondary.hover.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-secondary:not(:disabled):active {
    background: ${e("button.outlined.secondary.active.background")};
    border-color: ${e("button.outlined.secondary.border.color")};
    color: ${e("button.outlined.secondary.color")};
}

.p-button-outlined.p-button-success {
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):hover {
    background: ${e("button.outlined.success.hover.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-success:not(:disabled):active {
    background: ${e("button.outlined.success.active.background")};
    border-color: ${e("button.outlined.success.border.color")};
    color: ${e("button.outlined.success.color")};
}

.p-button-outlined.p-button-info {
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):hover {
    background: ${e("button.outlined.info.hover.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-info:not(:disabled):active {
    background: ${e("button.outlined.info.active.background")};
    border-color: ${e("button.outlined.info.border.color")};
    color: ${e("button.outlined.info.color")};
}

.p-button-outlined.p-button-warn {
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):hover {
    background: ${e("button.outlined.warn.hover.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-warn:not(:disabled):active {
    background: ${e("button.outlined.warn.active.background")};
    border-color: ${e("button.outlined.warn.border.color")};
    color: ${e("button.outlined.warn.color")};
}

.p-button-outlined.p-button-help {
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):hover {
    background: ${e("button.outlined.help.hover.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-help:not(:disabled):active {
    background: ${e("button.outlined.help.active.background")};
    border-color: ${e("button.outlined.help.border.color")};
    color: ${e("button.outlined.help.color")};
}

.p-button-outlined.p-button-danger {
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):hover {
    background: ${e("button.outlined.danger.hover.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-danger:not(:disabled):active {
    background: ${e("button.outlined.danger.active.background")};
    border-color: ${e("button.outlined.danger.border.color")};
    color: ${e("button.outlined.danger.color")};
}

.p-button-outlined.p-button-contrast {
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):hover {
    background: ${e("button.outlined.contrast.hover.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-contrast:not(:disabled):active {
    background: ${e("button.outlined.contrast.active.background")};
    border-color: ${e("button.outlined.contrast.border.color")};
    color: ${e("button.outlined.contrast.color")};
}

.p-button-outlined.p-button-plain {
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):hover {
    background: ${e("button.outlined.plain.hover.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-outlined.p-button-plain:not(:disabled):active {
    background: ${e("button.outlined.plain.active.background")};
    border-color: ${e("button.outlined.plain.border.color")};
    color: ${e("button.outlined.plain.color")};
}

.p-button-text {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):hover {
    background: ${e("button.text.primary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text:not(:disabled):active {
    background: ${e("button.text.primary.active.background")};
    border-color: transparent;
    color: ${e("button.text.primary.color")};
}

.p-button-text.p-button-secondary {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):hover {
    background: ${e("button.text.secondary.hover.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-secondary:not(:disabled):active {
    background: ${e("button.text.secondary.active.background")};
    border-color: transparent;
    color: ${e("button.text.secondary.color")};
}

.p-button-text.p-button-success {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):hover {
    background: ${e("button.text.success.hover.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-success:not(:disabled):active {
    background: ${e("button.text.success.active.background")};
    border-color: transparent;
    color: ${e("button.text.success.color")};
}

.p-button-text.p-button-info {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):hover {
    background: ${e("button.text.info.hover.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-info:not(:disabled):active {
    background: ${e("button.text.info.active.background")};
    border-color: transparent;
    color: ${e("button.text.info.color")};
}

.p-button-text.p-button-warn {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):hover {
    background: ${e("button.text.warn.hover.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-warn:not(:disabled):active {
    background: ${e("button.text.warn.active.background")};
    border-color: transparent;
    color: ${e("button.text.warn.color")};
}

.p-button-text.p-button-help {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):hover {
    background: ${e("button.text.help.hover.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-help:not(:disabled):active {
    background: ${e("button.text.help.active.background")};
    border-color: transparent;
    color: ${e("button.text.help.color")};
}

.p-button-text.p-button-danger {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):hover {
    background: ${e("button.text.danger.hover.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-danger:not(:disabled):active {
    background: ${e("button.text.danger.active.background")};
    border-color: transparent;
    color: ${e("button.text.danger.color")};
}

.p-button-text.p-button-plain {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):hover {
    background: ${e("button.text.plain.hover.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-plain:not(:disabled):active {
    background: ${e("button.text.plain.active.background")};
    border-color: transparent;
    color: ${e("button.text.plain.color")};
}

.p-button-text.p-button-contrast {
    background: transparent;
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):hover {
    background: ${e("button.text.contrast.hover.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-text.p-button-contrast:not(:disabled):active {
    background: ${e("button.text.contrast.active.background")};
    border-color: transparent;
    color: ${e("button.text.contrast.color")};
}

.p-button-link {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.color")};
}

.p-button-link:not(:disabled):hover {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.hover.color")};
}

.p-button-link:not(:disabled):hover .p-button-label {
    text-decoration: underline;
}

.p-button-link:not(:disabled):active {
    background: transparent;
    border-color: transparent;
    color: ${e("button.link.active.color")};
}

/* For PrimeNG */
.p-button-icon-right {
    order: 1;
}

p-button[iconpos='right'] spinnericon {
    order: 1;
}
`,ba={root:({instance:e,props:n})=>["p-button p-component",{"p-button-icon-only":e.hasIcon&&!n.label&&!n.badge,"p-button-vertical":(n.iconPos==="top"||n.iconPos==="bottom")&&n.label,"p-button-loading":n.loading,"p-button-link":n.link,[`p-button-${n.severity}`]:n.severity,"p-button-raised":n.raised,"p-button-rounded":n.rounded,"p-button-text":n.text,"p-button-outlined":n.outlined,"p-button-sm":n.size==="small","p-button-lg":n.size==="large","p-button-plain":n.plain,"p-button-fluid":n.fluid}],loadingIcon:"p-button-loading-icon",icon:({props:e})=>["p-button-icon",{[`p-button-icon-${e.iconPos}`]:e.label}],label:"p-button-label"},We=(()=>{class e extends P{name="button";theme=ma;classes=ba;static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var je={button:"p-button",component:"p-component",iconOnly:"p-button-icon-only",disabled:"p-disabled",loading:"p-button-loading",labelOnly:"p-button-loading-label-only"},Mo=(()=>{class e extends j{_componentStyle=g(We);static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275dir=I({type:e,selectors:[["","pButtonLabel",""]],hostVars:2,hostBindings:function(i,o){i&2&&ge("p-button-label",!0)},features:[A([We]),E]})}return e})(),Fo=(()=>{class e extends j{_componentStyle=g(We);static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275dir=I({type:e,selectors:[["","pButtonIcon",""]],hostVars:2,hostBindings:function(i,o){i&2&&ge("p-button-icon",!0)},features:[A([We]),E]})}return e})(),Ep=(()=>{class e extends j{iconPos="left";loadingIcon;set label(t){this._label=t,this.initialized&&(this.updateLabel(),this.updateIcon(),this.setStyleClass())}set icon(t){this._icon=t,this.initialized&&(this.updateIcon(),this.setStyleClass())}get loading(){return this._loading}set loading(t){this._loading=t,this.initialized&&(this.updateIcon(),this.setStyleClass())}_buttonProps;iconSignal=$n(Fo);labelSignal=$n(Mo);isIconOnly=ve(()=>!!(!this.labelSignal()&&this.iconSignal()));set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([i,o])=>this[`_${i}`]!==o&&(this[`_${i}`]=o))}severity;raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;fluid;_label;_icon;_loading=!1;initialized;get htmlElement(){return this.el.nativeElement}_internalClasses=Object.values(je);isTextButton=ve(()=>!!(!this.iconSignal()&&this.labelSignal()&&this.text));get label(){return this._label}get icon(){return this._icon}get buttonProps(){return this._buttonProps}spinnerIcon=`<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="p-icon-spin">
        <g clip-path="url(#clip0_417_21408)">
            <path
                d="M6.99701 14C5.85441 13.999 4.72939 13.7186 3.72012 13.1832C2.71084 12.6478 1.84795 11.8737 1.20673 10.9284C0.565504 9.98305 0.165424 8.89526 0.041387 7.75989C-0.0826496 6.62453 0.073125 5.47607 0.495122 4.4147C0.917119 3.35333 1.59252 2.4113 2.46241 1.67077C3.33229 0.930247 4.37024 0.413729 5.4857 0.166275C6.60117 -0.0811796 7.76026 -0.0520535 8.86188 0.251112C9.9635 0.554278 10.9742 1.12227 11.8057 1.90555C11.915 2.01493 11.9764 2.16319 11.9764 2.31778C11.9764 2.47236 11.915 2.62062 11.8057 2.73C11.7521 2.78503 11.688 2.82877 11.6171 2.85864C11.5463 2.8885 11.4702 2.90389 11.3933 2.90389C11.3165 2.90389 11.2404 2.8885 11.1695 2.85864C11.0987 2.82877 11.0346 2.78503 10.9809 2.73C9.9998 1.81273 8.73246 1.26138 7.39226 1.16876C6.05206 1.07615 4.72086 1.44794 3.62279 2.22152C2.52471 2.99511 1.72683 4.12325 1.36345 5.41602C1.00008 6.70879 1.09342 8.08723 1.62775 9.31926C2.16209 10.5513 3.10478 11.5617 4.29713 12.1803C5.48947 12.7989 6.85865 12.988 8.17414 12.7157C9.48963 12.4435 10.6711 11.7264 11.5196 10.6854C12.3681 9.64432 12.8319 8.34282 12.8328 7C12.8328 6.84529 12.8943 6.69692 13.0038 6.58752C13.1132 6.47812 13.2616 6.41667 13.4164 6.41667C13.5712 6.41667 13.7196 6.47812 13.8291 6.58752C13.9385 6.69692 14 6.84529 14 7C14 8.85651 13.2622 10.637 11.9489 11.9497C10.6356 13.2625 8.85432 14 6.99701 14Z"
                fill="currentColor"
            />
        </g>
        <defs>
            <clipPath id="clip0_417_21408">
                <rect width="14" height="14" fill="white" />
            </clipPath>
        </defs>
    </svg>`;_componentStyle=g(We);ngAfterViewInit(){super.ngAfterViewInit(),Le(this.htmlElement,this.getStyleClass().join(" ")),this.createIcon(),this.createLabel(),this.initialized=!0}ngOnChanges(t){super.ngOnChanges(t);let{buttonProps:i}=t;if(i){let o=i.currentValue;for(let r in o)this[r]=o[r]}}getStyleClass(){let t=[je.button,je.component];return this.icon&&!this.label&&Y(this.htmlElement.textContent)&&t.push(je.iconOnly),this.loading&&(t.push(je.disabled,je.loading),!this.icon&&this.label&&t.push(je.labelOnly),this.icon&&!this.label&&!Y(this.htmlElement.textContent)&&t.push(je.iconOnly)),this.text&&t.push("p-button-text"),this.severity&&t.push(`p-button-${this.severity}`),this.plain&&t.push("p-button-plain"),this.raised&&t.push("p-button-raised"),this.size&&t.push(`p-button-${this.size}`),this.outlined&&t.push("p-button-outlined"),this.rounded&&t.push("p-button-rounded"),this.size==="small"&&t.push("p-button-sm"),this.size==="large"&&t.push("p-button-lg"),this.hasFluid&&t.push("p-button-fluid"),t}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return Y(this.fluid)?!!i:this.fluid}setStyleClass(){let t=this.getStyleClass();this.htmlElement.classList.remove(...this._internalClasses),this.htmlElement.classList.add(...t)}createLabel(){if(!ft(this.htmlElement,".p-button-label")&&this.label){let i=this.document.createElement("span");this.icon&&!this.label&&i.setAttribute("aria-hidden","true"),i.className="p-button-label",i.appendChild(this.document.createTextNode(this.label)),this.htmlElement.appendChild(i)}}createIcon(){if(!ft(this.htmlElement,".p-button-icon")&&(this.icon||this.loading)){let i=this.document.createElement("span");i.className="p-button-icon",i.setAttribute("aria-hidden","true");let o=this.label?"p-button-icon-"+this.iconPos:null;o&&Le(i,o);let r=this.getIconClass();r&&Le(i,r),!this.loadingIcon&&this.loading&&(i.innerHTML=this.spinnerIcon),this.htmlElement.insertBefore(i,this.htmlElement.firstChild)}}updateLabel(){let t=ft(this.htmlElement,".p-button-label");if(!this.label){t&&this.htmlElement.removeChild(t);return}t?t.textContent=this.label:this.createLabel()}updateIcon(){let t=ft(this.htmlElement,".p-button-icon"),i=ft(this.htmlElement,".p-button-label");this.loading&&!this.loadingIcon&&t?t.innerHTML=this.spinnerIcon:t?.innerHTML&&(t.innerHTML=""),t?this.iconPos?t.className="p-button-icon "+(i?"p-button-icon-"+this.iconPos:"")+" "+this.getIconClass():t.className="p-button-icon "+this.getIconClass():this.createIcon()}getIconClass(){return this.loading?"p-button-loading-icon "+(this.loadingIcon?this.loadingIcon:"p-icon"):this.icon||"p-hidden"}ngOnDestroy(){this.initialized=!1,super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275dir=I({type:e,selectors:[["","pButton",""]],contentQueries:function(i,o,r){i&1&&(Ln(r,o.iconSignal,Fo,5),Ln(r,o.labelSignal,Mo,5)),i&2&&Li(2)},hostVars:4,hostBindings:function(i,o){i&2&&ge("p-button-icon-only",o.isIconOnly())("p-button-text",o.isTextButton())},inputs:{iconPos:"iconPos",loadingIcon:"loadingIcon",loading:"loading",severity:"severity",raised:[2,"raised","raised",m],rounded:[2,"rounded","rounded",m],text:[2,"text","text",m],outlined:[2,"outlined","outlined",m],size:"size",plain:[2,"plain","plain",m],fluid:[2,"fluid","fluid",m],label:"label",icon:"icon",buttonProps:"buttonProps"},features:[A([We]),te,E,se]})}return e})(),ya=(()=>{class e extends j{type="button";iconPos="left";icon;badge;label;disabled;loading=!1;loadingIcon;raised=!1;rounded=!1;text=!1;plain=!1;severity;outlined=!1;link=!1;tabindex;size;variant;style;styleClass;badgeClass;badgeSeverity="secondary";ariaLabel;autofocus;fluid;onClick=new G;onFocus=new G;onBlur=new G;contentTemplate;loadingIconTemplate;iconTemplate;_buttonProps;get buttonProps(){return this._buttonProps}set buttonProps(t){this._buttonProps=t,t&&typeof t=="object"&&Object.entries(t).forEach(([i,o])=>this[`_${i}`]!==o&&(this[`_${i}`]=o))}get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return Y(this.fluid)?!!i:this.fluid}_componentStyle=g(We);templates;_contentTemplate;_iconTemplate;_loadingIconTemplate;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this.contentTemplate=t.template;break;case"icon":this.iconTemplate=t.template;break;case"loadingicon":this.loadingIconTemplate=t.template;break;default:this.contentTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t);let{buttonProps:i}=t;if(i){let o=i.currentValue;for(let r in o)this[r]=o[r]}}spinnerIconClass(){return Object.entries(this.iconClass()).filter(([,t])=>!!t).reduce((t,[i])=>t+` ${i}`,"p-button-loading-icon")}iconClass(){return{[`p-button-loading-icon pi-spin ${this.loadingIcon??""}`]:this.loading,"p-button-icon":!0,"p-button-icon-left":this.iconPos==="left"&&this.label,"p-button-icon-right":this.iconPos==="right"&&this.label,"p-button-icon-top":this.iconPos==="top"&&this.label,"p-button-icon-bottom":this.iconPos==="bottom"&&this.label}}get buttonClass(){return{"p-button p-component":!0,"p-button-icon-only":(this.icon||this.iconTemplate||this.loadingIcon||this.loadingIconTemplate||this._loadingIconTemplate)&&!this.label,"p-button-vertical":(this.iconPos==="top"||this.iconPos==="bottom")&&this.label,"p-button-loading":this.loading,"p-button-loading-label-only":this.loading&&!this.icon&&this.label&&!this.loadingIcon&&this.iconPos==="left","p-button-link":this.link,[`p-button-${this.severity}`]:this.severity,"p-button-raised":this.raised,"p-button-rounded":this.rounded,"p-button-text":this.text||this.variant=="text","p-button-outlined":this.outlined||this.variant=="outlined","p-button-sm":this.size==="small","p-button-lg":this.size==="large","p-button-plain":this.plain,"p-button-fluid":this.hasFluid,[`${this.styleClass}`]:this.styleClass}}static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275cmp=L({type:e,selectors:[["p-button"]],contentQueries:function(i,o,r){if(i&1&&(ne(r,Js,5),ne(r,ea,5),ne(r,ta,5),ne(r,Be,4)),i&2){let s;J(s=ee())&&(o.contentTemplate=s.first),J(s=ee())&&(o.loadingIconTemplate=s.first),J(s=ee())&&(o.iconTemplate=s.first),J(s=ee())&&(o.templates=s)}},inputs:{type:"type",iconPos:"iconPos",icon:"icon",badge:"badge",label:"label",disabled:[2,"disabled","disabled",m],loading:[2,"loading","loading",m],loadingIcon:"loadingIcon",raised:[2,"raised","raised",m],rounded:[2,"rounded","rounded",m],text:[2,"text","text",m],plain:[2,"plain","plain",m],severity:"severity",outlined:[2,"outlined","outlined",m],link:[2,"link","link",m],tabindex:[2,"tabindex","tabindex",Me],size:"size",variant:"variant",style:"style",styleClass:"styleClass",badgeClass:"badgeClass",badgeSeverity:"badgeSeverity",ariaLabel:"ariaLabel",autofocus:[2,"autofocus","autofocus",m],fluid:[2,"fluid","fluid",m],buttonProps:"buttonProps"},outputs:{onClick:"onClick",onFocus:"onFocus",onBlur:"onBlur"},features:[A([We]),te,E,se],ngContentSelectors:na,decls:7,vars:14,consts:[["pRipple","",3,"click","focus","blur","ngStyle","disabled","ngClass","pAutoFocus"],[4,"ngTemplateOutlet"],[4,"ngIf"],["class","p-button-label",4,"ngIf"],[3,"value","severity",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ngClass",4,"ngIf"],[3,"styleClass","spin",4,"ngIf"],[3,"ngClass"],[3,"styleClass","spin"],[3,"ngIf"],[3,"class","ngClass",4,"ngIf"],[1,"p-button-label"],[3,"value","severity"]],template:function(i,o){i&1&&(Je(),U(0,"button",0),oe("click",function(s){return o.onClick.emit(s)})("focus",function(s){return o.onFocus.emit(s)})("blur",function(s){return o.onBlur.emit(s)}),et(1),B(2,ia,1,0,"ng-container",1)(3,ca,3,5,"ng-container",2)(4,ha,3,5,"ng-container",2)(5,fa,2,3,"span",3)(6,ga,1,2,"p-badge",4),W()),i&2&&(y("ngStyle",o.style)("disabled",o.disabled||o.loading)("ngClass",o.buttonClass)("pAutoFocus",o.autofocus),T("type",o.type)("aria-label",o.ariaLabel)("data-pc-name","button")("data-pc-section","root")("tabindex",o.tabindex),x(2),y("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),x(),y("ngIf",o.loading),x(),y("ngIf",!o.loading),x(),y("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.label),x(),y("ngIf",!o.contentTemplate&&!o._contentTemplate&&o.badge))},dependencies:[ae,dt,nn,Fe,Ui,bn,Ao,Oo,To,ri,z],encapsulation:2,changeDetection:0})}return e})(),wp=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=V({type:e});static \u0275inj=$({imports:[ae,ya,z,z]})}return e})();var Ho=(()=>{class e{_renderer;_elementRef;onChange=t=>{};onTouched=()=>{};constructor(t,i){this._renderer=t,this._elementRef=i}setProperty(t,i){this._renderer.setProperty(this._elementRef.nativeElement,t,i)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static \u0275fac=function(i){return new(i||e)(k(xt),k(Ke))};static \u0275dir=I({type:e})}return e})(),zo=(()=>{class e extends Ho{static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275dir=I({type:e,features:[E]})}return e})(),we=new Z("");var va={provide:we,useExisting:re(()=>Go),multi:!0};function _a(){let e=Vn()?Vn().getUserAgent():"";return/android (\d+)/.test(e.toLowerCase())}var Ca=new Z(""),Go=(()=>{class e extends Ho{_compositionMode;_composing=!1;constructor(t,i,o){super(t,i),this._compositionMode=o,this._compositionMode==null&&(this._compositionMode=!_a())}writeValue(t){let i=t??"";this.setProperty("value",i)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static \u0275fac=function(i){return new(i||e)(k(xt),k(Ke),k(Ca,8))};static \u0275dir=I({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(i,o){i&1&&oe("input",function(s){return o._handleInput(s.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(s){return o._compositionEnd(s.target.value)})},standalone:!1,features:[A([va]),E]})}return e})();function He(e){return e==null||(typeof e=="string"||Array.isArray(e))&&e.length===0}function qo(e){return e!=null&&typeof e.length=="number"}var In=new Z(""),hi=new Z(""),Ea=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Ro=class{static min(n){return wa(n)}static max(n){return Sa(n)}static required(n){return Ko(n)}static requiredTrue(n){return xa(n)}static email(n){return Ta(n)}static minLength(n){return Ia(n)}static maxLength(n){return Aa(n)}static pattern(n){return Da(n)}static nullValidator(n){return vn(n)}static compose(n){return er(n)}static composeAsync(n){return nr(n)}};function wa(e){return n=>{if(He(n.value)||He(e))return null;let t=parseFloat(n.value);return!isNaN(t)&&t<e?{min:{min:e,actual:n.value}}:null}}function Sa(e){return n=>{if(He(n.value)||He(e))return null;let t=parseFloat(n.value);return!isNaN(t)&&t>e?{max:{max:e,actual:n.value}}:null}}function Ko(e){return He(e.value)?{required:!0}:null}function xa(e){return e.value===!0?null:{required:!0}}function Ta(e){return He(e.value)||Ea.test(e.value)?null:{email:!0}}function Ia(e){return n=>He(n.value)||!qo(n.value)?null:n.value.length<e?{minlength:{requiredLength:e,actualLength:n.value.length}}:null}function Aa(e){return n=>qo(n.value)&&n.value.length>e?{maxlength:{requiredLength:e,actualLength:n.value.length}}:null}function Da(e){if(!e)return vn;let n,t;return typeof e=="string"?(t="",e.charAt(0)!=="^"&&(t+="^"),t+=e,e.charAt(e.length-1)!=="$"&&(t+="$"),n=new RegExp(t)):(t=e.toString(),n=e),i=>{if(He(i.value))return null;let o=i.value;return n.test(o)?null:{pattern:{requiredPattern:t,actualValue:o}}}}function vn(e){return null}function Qo(e){return e!=null}function Yo(e){return ki(e)?Yt(e):e}function Xo(e){let n={};return e.forEach(t=>{n=t!=null?w(w({},n),t):n}),Object.keys(n).length===0?null:n}function Zo(e,n){return n.map(t=>t(e))}function ka(e){return!e.validate}function Jo(e){return e.map(n=>ka(n)?n:t=>n.validate(t))}function er(e){if(!e)return null;let n=e.filter(Qo);return n.length==0?null:function(t){return Xo(Zo(t,n))}}function tr(e){return e!=null?er(Jo(e)):null}function nr(e){if(!e)return null;let n=e.filter(Qo);return n.length==0?null:function(t){let i=Zo(t,n).map(Yo);return Ci(i).pipe(qe(Xo))}}function ir(e){return e!=null?nr(Jo(e)):null}function $o(e,n){return e===null?[n]:Array.isArray(e)?[...e,n]:[e,n]}function or(e){return e._rawValidators}function rr(e){return e._rawAsyncValidators}function ai(e){return e?Array.isArray(e)?e:[e]:[]}function _n(e,n){return Array.isArray(e)?e.includes(n):e===n}function Lo(e,n){let t=ai(n);return ai(e).forEach(o=>{_n(t,o)||t.push(o)}),t}function Vo(e,n){return ai(n).filter(t=>!_n(e,t))}var Cn=class{get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators=[];_rawAsyncValidators=[];_setValidators(n){this._rawValidators=n||[],this._composedValidatorFn=tr(this._rawValidators)}_setAsyncValidators(n){this._rawAsyncValidators=n||[],this._composedAsyncValidatorFn=ir(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_onDestroyCallbacks=[];_registerOnDestroy(n){this._onDestroyCallbacks.push(n)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(n=>n()),this._onDestroyCallbacks=[]}reset(n=void 0){this.control&&this.control.reset(n)}hasError(n,t){return this.control?this.control.hasError(n,t):!1}getError(n,t){return this.control?this.control.getError(n,t):null}},ot=class extends Cn{name;get formDirective(){return null}get path(){return null}},Te=class extends Cn{_parent=null;name=null;valueAccessor=null},En=class{_cd;constructor(n){this._cd=n}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},Oa={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},Up=fe(w({},Oa),{"[class.ng-submitted]":"isSubmitted"}),sr=(()=>{class e extends En{constructor(t){super(t)}static \u0275fac=function(i){return new(i||e)(k(Te,2))};static \u0275dir=I({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(i,o){i&2&&ge("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},standalone:!1,features:[E]})}return e})(),jp=(()=>{class e extends En{constructor(t){super(t)}static \u0275fac=function(i){return new(i||e)(k(ot,10))};static \u0275dir=I({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(i,o){i&2&&ge("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},standalone:!1,features:[E]})}return e})();var Mt="VALID",yn="INVALID",vt="PENDING",Ft="DISABLED",ze=class{},wn=class extends ze{value;source;constructor(n,t){super(),this.value=n,this.source=t}},Nt=class extends ze{pristine;source;constructor(n,t){super(),this.pristine=n,this.source=t}},Rt=class extends ze{touched;source;constructor(n,t){super(),this.touched=n,this.source=t}},_t=class extends ze{status;source;constructor(n,t){super(),this.status=n,this.source=t}},li=class extends ze{source;constructor(n){super(),this.source=n}},ci=class extends ze{source;constructor(n){super(),this.source=n}};function fi(e){return(An(e)?e.validators:e)||null}function Ma(e){return Array.isArray(e)?tr(e):e||null}function gi(e,n){return(An(n)?n.asyncValidators:e)||null}function Fa(e){return Array.isArray(e)?ir(e):e||null}function An(e){return e!=null&&!Array.isArray(e)&&typeof e=="object"}function ar(e,n,t){let i=e.controls;if(!(n?Object.keys(i):i).length)throw new rt(1e3,"");if(!i[t])throw new rt(1001,"")}function lr(e,n,t){e._forEachChild((i,o)=>{if(t[o]===void 0)throw new rt(1002,"")})}var Ct=class{_pendingDirty=!1;_hasOwnPendingAsyncValidator=null;_pendingTouched=!1;_onCollectionChange=()=>{};_updateOn;_parent=null;_asyncValidationSubscription;_composedValidatorFn;_composedAsyncValidatorFn;_rawValidators;_rawAsyncValidators;value;constructor(n,t){this._assignValidators(n),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(n){this._rawValidators=this._composedValidatorFn=n}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(n){this._rawAsyncValidators=this._composedAsyncValidatorFn=n}get parent(){return this._parent}get status(){return _e(this.statusReactive)}set status(n){_e(()=>this.statusReactive.set(n))}_status=ve(()=>this.statusReactive());statusReactive=ie(void 0);get valid(){return this.status===Mt}get invalid(){return this.status===yn}get pending(){return this.status==vt}get disabled(){return this.status===Ft}get enabled(){return this.status!==Ft}errors;get pristine(){return _e(this.pristineReactive)}set pristine(n){_e(()=>this.pristineReactive.set(n))}_pristine=ve(()=>this.pristineReactive());pristineReactive=ie(!0);get dirty(){return!this.pristine}get touched(){return _e(this.touchedReactive)}set touched(n){_e(()=>this.touchedReactive.set(n))}_touched=ve(()=>this.touchedReactive());touchedReactive=ie(!1);get untouched(){return!this.touched}_events=new pe;events=this._events.asObservable();valueChanges;statusChanges;get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(n){this._assignValidators(n)}setAsyncValidators(n){this._assignAsyncValidators(n)}addValidators(n){this.setValidators(Lo(n,this._rawValidators))}addAsyncValidators(n){this.setAsyncValidators(Lo(n,this._rawAsyncValidators))}removeValidators(n){this.setValidators(Vo(n,this._rawValidators))}removeAsyncValidators(n){this.setAsyncValidators(Vo(n,this._rawAsyncValidators))}hasValidator(n){return _n(this._rawValidators,n)}hasAsyncValidator(n){return _n(this._rawAsyncValidators,n)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(n={}){let t=this.touched===!1;this.touched=!0;let i=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsTouched(fe(w({},n),{sourceControl:i})),t&&n.emitEvent!==!1&&this._events.next(new Rt(!0,i))}markAllAsTouched(n={}){this.markAsTouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(n))}markAsUntouched(n={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=n.sourceControl??this;this._forEachChild(o=>{o.markAsUntouched({onlySelf:!0,emitEvent:n.emitEvent,sourceControl:i})}),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,i),t&&n.emitEvent!==!1&&this._events.next(new Rt(!1,i))}markAsDirty(n={}){let t=this.pristine===!0;this.pristine=!1;let i=n.sourceControl??this;this._parent&&!n.onlySelf&&this._parent.markAsDirty(fe(w({},n),{sourceControl:i})),t&&n.emitEvent!==!1&&this._events.next(new Nt(!1,i))}markAsPristine(n={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=n.sourceControl??this;this._forEachChild(o=>{o.markAsPristine({onlySelf:!0,emitEvent:n.emitEvent})}),this._parent&&!n.onlySelf&&this._parent._updatePristine(n,i),t&&n.emitEvent!==!1&&this._events.next(new Nt(!0,i))}markAsPending(n={}){this.status=vt;let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new _t(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.markAsPending(fe(w({},n),{sourceControl:t}))}disable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=Ft,this.errors=null,this._forEachChild(o=>{o.disable(fe(w({},n),{onlySelf:!0}))}),this._updateValue();let i=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new wn(this.value,i)),this._events.next(new _t(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(fe(w({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(o=>o(!0))}enable(n={}){let t=this._parentMarkedDirty(n.onlySelf);this.status=Mt,this._forEachChild(i=>{i.enable(fe(w({},n),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent}),this._updateAncestors(fe(w({},n),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(n,t){this._parent&&!n.onlySelf&&(this._parent.updateValueAndValidity(n),n.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(n){this._parent=n}getRawValue(){return this.value}updateValueAndValidity(n={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===Mt||this.status===vt)&&this._runAsyncValidator(i,n.emitEvent)}let t=n.sourceControl??this;n.emitEvent!==!1&&(this._events.next(new wn(this.value,t)),this._events.next(new _t(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!n.onlySelf&&this._parent.updateValueAndValidity(fe(w({},n),{sourceControl:t}))}_updateTreeValidity(n={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(n)),this.updateValueAndValidity({onlySelf:!0,emitEvent:n.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?Ft:Mt}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(n,t){if(this.asyncValidator){this.status=vt,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let i=Yo(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(o=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(o,{emitEvent:t,shouldHaveEmitted:n})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let n=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,n}return!1}setErrors(n,t={}){this.errors=n,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(n){let t=n;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((i,o)=>i&&i._find(o),this)}getError(n,t){let i=t?this.get(t):this;return i&&i.errors?i.errors[n]:null}hasError(n,t){return!!this.getError(n,t)}get root(){let n=this;for(;n._parent;)n=n._parent;return n}_updateControlsErrors(n,t,i){this.status=this._calculateStatus(),n&&this.statusChanges.emit(this.status),(n||i)&&this._events.next(new _t(this.status,t)),this._parent&&this._parent._updateControlsErrors(n,t,i)}_initObservables(){this.valueChanges=new G,this.statusChanges=new G}_calculateStatus(){return this._allControlsDisabled()?Ft:this.errors?yn:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(vt)?vt:this._anyControlsHaveStatus(yn)?yn:Mt}_anyControlsHaveStatus(n){return this._anyControls(t=>t.status===n)}_anyControlsDirty(){return this._anyControls(n=>n.dirty)}_anyControlsTouched(){return this._anyControls(n=>n.touched)}_updatePristine(n,t){let i=!this._anyControlsDirty(),o=this.pristine!==i;this.pristine=i,this._parent&&!n.onlySelf&&this._parent._updatePristine(n,t),o&&this._events.next(new Nt(this.pristine,t))}_updateTouched(n={},t){this.touched=this._anyControlsTouched(),this._events.next(new Rt(this.touched,t)),this._parent&&!n.onlySelf&&this._parent._updateTouched(n,t)}_onDisabledChange=[];_registerOnCollectionChange(n){this._onCollectionChange=n}_setUpdateStrategy(n){An(n)&&n.updateOn!=null&&(this._updateOn=n.updateOn)}_parentMarkedDirty(n){let t=this._parent&&this._parent.dirty;return!n&&!!t&&!this._parent._anyControlsDirty()}_find(n){return null}_assignValidators(n){this._rawValidators=Array.isArray(n)?n.slice():n,this._composedValidatorFn=Ma(this._rawValidators)}_assignAsyncValidators(n){this._rawAsyncValidators=Array.isArray(n)?n.slice():n,this._composedAsyncValidatorFn=Fa(this._rawAsyncValidators)}},Sn=class extends Ct{constructor(n,t,i){super(fi(t),gi(i,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;registerControl(n,t){return this.controls[n]?this.controls[n]:(this.controls[n]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(n,t,i={}){this.registerControl(n,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(n,t={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(n,t,i={}){this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),delete this.controls[n],t&&this.registerControl(n,t),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(n){return this.controls.hasOwnProperty(n)&&this.controls[n].enabled}setValue(n,t={}){lr(this,!0,n),Object.keys(n).forEach(i=>{ar(this,!0,i),this.controls[i].setValue(n[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(n,t={}){n!=null&&(Object.keys(n).forEach(i=>{let o=this.controls[i];o&&o.patchValue(n[i],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n={},t={}){this._forEachChild((i,o)=>{i.reset(n?n[o]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(n,t,i)=>(n[i]=t.getRawValue(),n))}_syncPendingControls(){let n=this._reduceChildren(!1,(t,i)=>i._syncPendingControls()?!0:t);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){Object.keys(this.controls).forEach(t=>{let i=this.controls[t];i&&n(i,t)})}_setUpControls(){this._forEachChild(n=>{n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(n){for(let[t,i]of Object.entries(this.controls))if(this.contains(t)&&n(i))return!0;return!1}_reduceValue(){let n={};return this._reduceChildren(n,(t,i,o)=>((i.enabled||this.disabled)&&(t[o]=i.value),t))}_reduceChildren(n,t){let i=n;return this._forEachChild((o,r)=>{i=t(i,o,r)}),i}_allControlsDisabled(){for(let n of Object.keys(this.controls))if(this.controls[n].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(n){return this.controls.hasOwnProperty(n)?this.controls[n]:null}};var ui=class extends Sn{};var Dn=new Z("CallSetDisabledState",{providedIn:"root",factory:()=>kn}),kn="always";function cr(e,n){return[...n.path,e]}function di(e,n,t=kn){mi(e,n),n.valueAccessor.writeValue(e.value),(e.disabled||t==="always")&&n.valueAccessor.setDisabledState?.(e.disabled),Ra(e,n),La(e,n),$a(e,n),Na(e,n)}function Po(e,n,t=!0){let i=()=>{};n.valueAccessor&&(n.valueAccessor.registerOnChange(i),n.valueAccessor.registerOnTouched(i)),Tn(e,n),e&&(n._invokeOnDestroyCallbacks(),e._registerOnCollectionChange(()=>{}))}function xn(e,n){e.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(n)})}function Na(e,n){if(n.valueAccessor.setDisabledState){let t=i=>{n.valueAccessor.setDisabledState(i)};e.registerOnDisabledChange(t),n._registerOnDestroy(()=>{e._unregisterOnDisabledChange(t)})}}function mi(e,n){let t=or(e);n.validator!==null?e.setValidators($o(t,n.validator)):typeof t=="function"&&e.setValidators([t]);let i=rr(e);n.asyncValidator!==null?e.setAsyncValidators($o(i,n.asyncValidator)):typeof i=="function"&&e.setAsyncValidators([i]);let o=()=>e.updateValueAndValidity();xn(n._rawValidators,o),xn(n._rawAsyncValidators,o)}function Tn(e,n){let t=!1;if(e!==null){if(n.validator!==null){let o=or(e);if(Array.isArray(o)&&o.length>0){let r=o.filter(s=>s!==n.validator);r.length!==o.length&&(t=!0,e.setValidators(r))}}if(n.asyncValidator!==null){let o=rr(e);if(Array.isArray(o)&&o.length>0){let r=o.filter(s=>s!==n.asyncValidator);r.length!==o.length&&(t=!0,e.setAsyncValidators(r))}}}let i=()=>{};return xn(n._rawValidators,i),xn(n._rawAsyncValidators,i),t}function Ra(e,n){n.valueAccessor.registerOnChange(t=>{e._pendingValue=t,e._pendingChange=!0,e._pendingDirty=!0,e.updateOn==="change"&&ur(e,n)})}function $a(e,n){n.valueAccessor.registerOnTouched(()=>{e._pendingTouched=!0,e.updateOn==="blur"&&e._pendingChange&&ur(e,n),e.updateOn!=="submit"&&e.markAsTouched()})}function ur(e,n){e._pendingDirty&&e.markAsDirty(),e.setValue(e._pendingValue,{emitModelToViewChange:!1}),n.viewToModelUpdate(e._pendingValue),e._pendingChange=!1}function La(e,n){let t=(i,o)=>{n.valueAccessor.writeValue(i),o&&n.viewToModelUpdate(i)};e.registerOnChange(t),n._registerOnDestroy(()=>{e._unregisterOnChange(t)})}function Va(e,n){e==null,mi(e,n)}function Pa(e,n){return Tn(e,n)}function dr(e,n){if(!e.hasOwnProperty("model"))return!1;let t=e.model;return t.isFirstChange()?!0:!Object.is(n,t.currentValue)}function Ba(e){return Object.getPrototypeOf(e.constructor)===zo}function Ua(e,n){e._syncPendingControls(),n.forEach(t=>{let i=t.control;i.updateOn==="submit"&&i._pendingChange&&(t.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function pr(e,n){if(!n)return null;Array.isArray(n);let t,i,o;return n.forEach(r=>{r.constructor===Go?t=r:Ba(r)?i=r:o=r}),o||i||t||null}function ja(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}function Bo(e,n){let t=e.indexOf(n);t>-1&&e.splice(t,1)}function Uo(e){return typeof e=="object"&&e!==null&&Object.keys(e).length===2&&"value"in e&&"disabled"in e}var $t=class extends Ct{defaultValue=null;_onChange=[];_pendingValue;_pendingChange=!1;constructor(n=null,t,i){super(fi(t),gi(i,t)),this._applyFormState(n),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),An(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Uo(n)?this.defaultValue=n.value:this.defaultValue=n)}setValue(n,t={}){this.value=this._pendingValue=n,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(n,t={}){this.setValue(n,t)}reset(n=this.defaultValue,t={}){this._applyFormState(n),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(n){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(n){this._onChange.push(n)}_unregisterOnChange(n){Bo(this._onChange,n)}registerOnDisabledChange(n){this._onDisabledChange.push(n)}_unregisterOnDisabledChange(n){Bo(this._onDisabledChange,n)}_forEachChild(n){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(n){Uo(n)?(this.value=this._pendingValue=n.value,n.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=n}};var Wa=e=>e instanceof $t;var Ha={provide:Te,useExisting:re(()=>Lt)},jo=Promise.resolve(),Lt=(()=>{class e extends Te{_changeDetectorRef;callSetDisabledState;control=new $t;static ngAcceptInputType_isDisabled;_registered=!1;viewModel;name="";isDisabled;model;options;update=new G;constructor(t,i,o,r,s,a){super(),this._changeDetectorRef=s,this.callSetDisabledState=a,this._parent=t,this._setValidators(i),this._setAsyncValidators(o),this.valueAccessor=pr(this,r)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let i=t.name.previousValue;this.formDirective.removeControl({name:i,path:this._getPath(i)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),dr(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){di(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){jo.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let i=t.isDisabled.currentValue,o=i!==0&&m(i);jo.then(()=>{o&&!this.control.disabled?this.control.disable():!o&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?cr(t,this._parent):[t]}static \u0275fac=function(i){return new(i||e)(k(ot,9),k(In,10),k(hi,10),k(we,10),k(tn,8),k(Dn,8))};static \u0275dir=I({type:e,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],standalone:!1,features:[A([Ha]),E,se]})}return e})(),Hp=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275dir=I({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""],standalone:!1})}return e})(),za={provide:we,useExisting:re(()=>Ga),multi:!0},Ga=(()=>{class e extends zo{writeValue(t){let i=t??"";this.setProperty("value",i)}registerOnChange(t){this.onChange=i=>{t(i==""?null:parseFloat(i))}}static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275dir=I({type:e,selectors:[["input","type","number","formControlName",""],["input","type","number","formControl",""],["input","type","number","ngModel",""]],hostBindings:function(i,o){i&1&&oe("input",function(s){return o.onChange(s.target.value)})("blur",function(){return o.onTouched()})},standalone:!1,features:[A([za]),E]})}return e})();var hr=new Z("");var qa={provide:ot,useExisting:re(()=>Ka)},Ka=(()=>{class e extends ot{callSetDisabledState;get submitted(){return _e(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}_submitted=ve(()=>this._submittedReactive());_submittedReactive=ie(!1);_oldForm;_onCollectionChange=()=>this._updateDomValue();directives=[];form=null;ngSubmit=new G;constructor(t,i,o){super(),this.callSetDisabledState=o,this._setValidators(t),this._setAsyncValidators(i)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(Tn(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let i=this.form.get(t.path);return di(i,t,this.callSetDisabledState),i.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),i}getControl(t){return this.form.get(t.path)}removeControl(t){Po(t.control||null,t,!1),ja(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,i){this.form.get(t.path).setValue(i)}onSubmit(t){return this._submittedReactive.set(!0),Ua(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new li(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this._submittedReactive.set(!1),this.form._events.next(new ci(this.form))}_updateDomValue(){this.directives.forEach(t=>{let i=t.control,o=this.form.get(t.path);i!==o&&(Po(i||null,t),Wa(o)&&(di(o,t,this.callSetDisabledState),t.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let i=this.form.get(t.path);Va(i,t),i.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let i=this.form.get(t.path);i&&Pa(i,t)&&i.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){mi(this.form,this),this._oldForm&&Tn(this._oldForm,this)}_checkFormPresent(){this.form}static \u0275fac=function(i){return new(i||e)(k(In,10),k(hi,10),k(Dn,8))};static \u0275dir=I({type:e,selectors:[["","formGroup",""]],hostBindings:function(i,o){i&1&&oe("submit",function(s){return o.onSubmit(s)})("reset",function(){return o.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],standalone:!1,features:[A([qa]),E,se]})}return e})();var Qa={provide:Te,useExisting:re(()=>Ya)},Ya=(()=>{class e extends Te{_ngModelWarningConfig;_added=!1;viewModel;control;name=null;set isDisabled(t){}model;update=new G;static _ngModelWarningSentOnce=!1;_ngModelWarningSent=!1;constructor(t,i,o,r,s){super(),this._ngModelWarningConfig=s,this._parent=t,this._setValidators(i),this._setAsyncValidators(o),this.valueAccessor=pr(this,r)}ngOnChanges(t){this._added||this._setUpControl(),dr(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return cr(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static \u0275fac=function(i){return new(i||e)(k(ot,13),k(In,10),k(hi,10),k(we,10),k(hr,8))};static \u0275dir=I({type:e,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},standalone:!1,features:[A([Qa]),E,se]})}return e})();var Xa=(()=>{class e{_validator=vn;_onChange;_enabled;ngOnChanges(t){if(this.inputName in t){let i=this.normalizeInput(t[this.inputName].currentValue);this._enabled=this.enabled(i),this._validator=this._enabled?this.createValidator(i):vn,this._onChange&&this._onChange()}}validate(t){return this._validator(t)}registerOnValidatorChange(t){this._onChange=t}enabled(t){return t!=null}static \u0275fac=function(i){return new(i||e)};static \u0275dir=I({type:e,features:[se]})}return e})();var Za={provide:In,useExisting:re(()=>Ja),multi:!0};var Ja=(()=>{class e extends Xa{required;inputName="required";normalizeInput=m;createValidator=t=>Ko;enabled(t){return t}static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275dir=I({type:e,selectors:[["","required","","formControlName","",3,"type","checkbox"],["","required","","formControl","",3,"type","checkbox"],["","required","","ngModel","",3,"type","checkbox"]],hostVars:1,hostBindings:function(i,o){i&2&&T("required",o._enabled?"":null)},inputs:{required:"required"},standalone:!1,features:[A([Za]),E]})}return e})();var fr=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=V({type:e});static \u0275inj=$({})}return e})(),pi=class extends Ct{constructor(n,t,i){super(fi(t),gi(i,t)),this.controls=n,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}controls;at(n){return this.controls[this._adjustIndex(n)]}push(n,t={}){this.controls.push(n),this._registerControl(n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(n,t,i={}){this.controls.splice(n,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(n,t={}){let i=this._adjustIndex(n);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(n,t,i={}){let o=this._adjustIndex(n);o<0&&(o=0),this.controls[o]&&this.controls[o]._registerOnCollectionChange(()=>{}),this.controls.splice(o,1),t&&(this.controls.splice(o,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(n,t={}){lr(this,!1,n),n.forEach((i,o)=>{ar(this,!1,o),this.at(o).setValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(n,t={}){n!=null&&(n.forEach((i,o)=>{this.at(o)&&this.at(o).patchValue(i,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(n=[],t={}){this._forEachChild((i,o)=>{i.reset(n[o],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(n=>n.getRawValue())}clear(n={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:n.emitEvent}))}_adjustIndex(n){return n<0?n+this.length:n}_syncPendingControls(){let n=this.controls.reduce((t,i)=>i._syncPendingControls()?!0:t,!1);return n&&this.updateValueAndValidity({onlySelf:!0}),n}_forEachChild(n){this.controls.forEach((t,i)=>{n(t,i)})}_updateValue(){this.value=this.controls.filter(n=>n.enabled||this.disabled).map(n=>n.value)}_anyControls(n){return this.controls.some(t=>t.enabled&&n(t))}_setUpControls(){this._forEachChild(n=>this._registerControl(n))}_allControlsDisabled(){for(let n of this.controls)if(n.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(n){n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange)}_find(n){return this.at(n)??null}};function Wo(e){return!!e&&(e.asyncValidators!==void 0||e.validators!==void 0||e.updateOn!==void 0)}var zp=(()=>{class e{useNonNullable=!1;get nonNullable(){let t=new e;return t.useNonNullable=!0,t}group(t,i=null){let o=this._reduceControls(t),r={};return Wo(i)?r=i:i!==null&&(r.validators=i.validator,r.asyncValidators=i.asyncValidator),new Sn(o,r)}record(t,i=null){let o=this._reduceControls(t);return new ui(o,i)}control(t,i,o){let r={};return this.useNonNullable?(Wo(i)?r=i:(r.validators=i,r.asyncValidators=o),new $t(t,fe(w({},r),{nonNullable:!0}))):new $t(t,i,o)}array(t,i,o){let r=t.map(s=>this._createControl(s));return new pi(r,i,o)}_reduceControls(t){let i={};return Object.keys(t).forEach(o=>{i[o]=this._createControl(t[o])}),i}_createControl(t){if(t instanceof $t)return t;if(t instanceof Ct)return t;if(Array.isArray(t)){let i=t[0],o=t.length>1?t[1]:null,r=t.length>2?t[2]:null;return this.control(i,o,r)}else return this.control(t)}static \u0275fac=function(i){return new(i||e)};static \u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"})}return e})();var gr=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:Dn,useValue:t.callSetDisabledState??kn}]}}static \u0275fac=function(i){return new(i||e)};static \u0275mod=V({type:e});static \u0275inj=$({imports:[fr]})}return e})(),Gp=(()=>{class e{static withConfig(t){return{ngModule:e,providers:[{provide:hr,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:Dn,useValue:t.callSetDisabledState??kn}]}}static \u0275fac=function(i){return new(i||e)};static \u0275mod=V({type:e});static \u0275inj=$({imports:[fr]})}return e})();var el=["checkboxicon"],tl=["input"],nl=()=>({"p-checkbox-input":!0}),il=e=>({checked:e,class:"p-checkbox-icon"});function ol(e,n){if(e&1&&H(0,"span",8),e&2){let t=M(3);y("ngClass",t.checkboxIcon),T("data-pc-section","icon")}}function rl(e,n){e&1&&H(0,"CheckIcon",9),e&2&&(y("styleClass","p-checkbox-icon"),T("data-pc-section","icon"))}function sl(e,n){if(e&1&&(Ye(0),B(1,ol,1,2,"span",7)(2,rl,1,2,"CheckIcon",6),Xe()),e&2){let t=M(2);x(),y("ngIf",t.checkboxIcon),x(),y("ngIf",!t.checkboxIcon)}}function al(e,n){e&1&&H(0,"MinusIcon",9),e&2&&(y("styleClass","p-checkbox-icon"),T("data-pc-section","icon"))}function ll(e,n){if(e&1&&(Ye(0),B(1,sl,3,2,"ng-container",4)(2,al,1,2,"MinusIcon",6),Xe()),e&2){let t=M();x(),y("ngIf",t.checked),x(),y("ngIf",t._indeterminate())}}function cl(e,n){}function ul(e,n){e&1&&B(0,cl,0,0,"ng-template")}var dl=({dt:e})=>`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: ${e("checkbox.border.radius")};
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${e("checkbox.border.radius")};
    border: 1px solid ${e("checkbox.border.color")};
    background: ${e("checkbox.background")};
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
    transition: background ${e("checkbox.transition.duration")}, color ${e("checkbox.transition.duration")}, border-color ${e("checkbox.transition.duration")}, box-shadow ${e("checkbox.transition.duration")}, outline-color ${e("checkbox.transition.duration")};
    outline-color: transparent;
    box-shadow: ${e("checkbox.shadow")};
}

.p-checkbox-icon {
    transition-duration: ${e("checkbox.transition.duration")};
    color: ${e("checkbox.icon.color")};
    font-size: ${e("checkbox.icon.size")};
    width: ${e("checkbox.icon.size")};
    height: ${e("checkbox.icon.size")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: ${e("checkbox.hover.border.color")};
}

.p-checkbox-checked .p-checkbox-box {
    border-color: ${e("checkbox.checked.border.color")};
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
    border-color: ${e("checkbox.checked.hover.border.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.hover.color")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.focus.border.color")};
    box-shadow: ${e("checkbox.focus.ring.shadow")};
    outline: ${e("checkbox.focus.ring.width")} ${e("checkbox.focus.ring.style")} ${e("checkbox.focus.ring.color")};
    outline-offset: ${e("checkbox.focus.ring.offset")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.checked.focus.border.color")};
}

p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
    border-color: ${e("checkbox.invalid.border.color")};
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.filled.background")};
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: ${e("checkbox.disabled.background")};
    border-color: ${e("checkbox.checked.disabled.border.color")};
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: ${e("checkbox.icon.disabled.color")};
}

.p-checkbox-sm,
.p-checkbox-sm .p-checkbox-box {
    width: ${e("checkbox.sm.width")};
    height: ${e("checkbox.sm.height")};
}

.p-checkbox-sm .p-checkbox-icon {
    font-size: ${e("checkbox.icon.sm.size")};
    width: ${e("checkbox.icon.sm.size")};
    height: ${e("checkbox.icon.sm.size")};
}

.p-checkbox-lg,
.p-checkbox-lg .p-checkbox-box {
    width: ${e("checkbox.lg.width")};
    height: ${e("checkbox.lg.height")};
}

.p-checkbox-lg .p-checkbox-icon {
    font-size: ${e("checkbox.icon.lg.size")};
    width: ${e("checkbox.icon.lg.size")};
    height: ${e("checkbox.icon.lg.size")};
}
`,pl={root:({instance:e,props:n})=>["p-checkbox p-component",{"p-checkbox-checked":e.checked,"p-disabled":n.disabled,"p-invalid":n.invalid,"p-variant-filled":n.variant?n.variant==="filled":e.config.inputStyle==="filled"||e.config.inputVariant==="filled"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},br=(()=>{class e extends P{name="checkbox";theme=dl;classes=pl;static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var hl={provide:we,useExisting:re(()=>yr),multi:!0},yr=(()=>{class e extends j{value;name;disabled;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;style;inputStyle;styleClass;inputClass;indeterminate=!1;size;formControl;checkboxIcon;readonly;required;autofocus;trueValue=!0;falseValue=!1;variant;onChange=new G;onFocus=new G;onBlur=new G;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.model===this.trueValue:ho(this.value,this.model)}get containerClass(){return{"p-checkbox p-component":!0,"p-checkbox-checked p-highlight":this.checked,"p-disabled":this.disabled,"p-variant-filled":this.variant==="filled"||this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-checkbox-sm p-inputfield-sm":this.size==="small","p-checkbox-lg p-inputfield-lg":this.size==="large"}}_indeterminate=ie(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;_componentStyle=g(br);ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this._checkboxIconTemplate=t.template;break;case"checkboxicon":this._checkboxIconTemplate=t.template;break}})}ngOnChanges(t){super.ngOnChanges(t),t.indeterminate&&this._indeterminate.set(t.indeterminate.currentValue)}updateModel(t){let i,o=this.injector.get(Te,null,{optional:!0,self:!0}),r=o&&!this.formControl?o.value:this.model;this.binary?(i=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.model=i,this.onModelChange(i)):(this.checked||this._indeterminate()?i=r.filter(s=>!Ee(s,this.value)):i=r?[...r,this.value]:[this.value],this.onModelChange(i),this.model=i,this.formControl&&this.formControl.setValue(i)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:i,originalEvent:t})}handleChange(t){this.readonly||this.updateModel(t)}onInputFocus(t){this.focused=!0,this.onFocus.emit(t)}onInputBlur(t){this.focused=!1,this.onBlur.emit(t),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(t){this.model=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){setTimeout(()=>{this.disabled=t,this.cd.markForCheck()})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275cmp=L({type:e,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(i,o,r){if(i&1&&(ne(r,el,4),ne(r,Be,4)),i&2){let s;J(s=ee())&&(o.checkboxIconTemplate=s.first),J(s=ee())&&(o.templates=s)}},viewQuery:function(i,o){if(i&1&&$i(tl,5),i&2){let r;J(r=ee())&&(o.inputViewChild=r.first)}},inputs:{value:"value",name:"name",disabled:[2,"disabled","disabled",m],binary:[2,"binary","binary",m],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",Me],inputId:"inputId",style:"style",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",m],size:"size",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",m],required:[2,"required","required",m],autofocus:[2,"autofocus","autofocus",m],trueValue:"trueValue",falseValue:"falseValue",variant:"variant"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[A([hl,br]),te,E,se],decls:6,vars:29,consts:[["input",""],[3,"ngClass"],["type","checkbox",3,"focus","blur","change","value","checked","disabled","readonly","ngClass"],[1,"p-checkbox-box"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"styleClass",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"]],template:function(i,o){if(i&1){let r=Jt();U(0,"div",1)(1,"input",2,0),oe("focus",function(a){return st(r),at(o.onInputFocus(a))})("blur",function(a){return st(r),at(o.onInputBlur(a))})("change",function(a){return st(r),at(o.handleChange(a))}),W(),U(3,"div",3),B(4,ll,3,2,"ng-container",4)(5,ul,1,0,null,5),W()()}i&2&&(Qe(o.style),q(o.styleClass),y("ngClass",o.containerClass),T("data-p-highlight",o.checked)("data-p-checked",o.checked)("data-p-disabled",o.disabled),x(),Qe(o.inputStyle),q(o.inputClass),y("value",o.value)("checked",o.checked)("disabled",o.disabled)("readonly",o.readonly)("ngClass",Vi(26,nl)),T("id",o.inputId)("name",o.name)("tabindex",o.tabindex)("required",o.required?!0:null)("aria-labelledby",o.ariaLabelledBy)("aria-label",o.ariaLabel),x(3),y("ngIf",!o.checkboxIconTemplate&&!o._checkboxIconTemplate),x(),y("ngTemplateOutlet",o.checkboxIconTemplate||o._checkboxIconTemplate)("ngTemplateOutletContext",Oe(27,il,o.checked)))},dependencies:[ae,dt,nn,Fe,Do,ko,z],encapsulation:2,changeDetection:0})}return e})(),ph=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=V({type:e});static \u0275inj=$({imports:[yr,z,z]})}return e})();var fl=({dt:e})=>`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${e("inputtext.color")};
    background: ${e("inputtext.background")};
    padding-block: ${e("inputtext.padding.y")};
    padding-inline: ${e("inputtext.padding.x")};
    border: 1px solid ${e("inputtext.border.color")};
    transition: background ${e("inputtext.transition.duration")}, color ${e("inputtext.transition.duration")}, border-color ${e("inputtext.transition.duration")}, outline-color ${e("inputtext.transition.duration")}, box-shadow ${e("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${e("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("inputtext.shadow")};
}

.p-inputtext.ng-invalid.ng-dirty {
    border-color: ${e("inputtext.invalid.border.color")};
}

.p-inputtext:enabled:hover {
    border-color: ${e("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${e("inputtext.focus.border.color")};
    box-shadow: ${e("inputtext.focus.ring.shadow")};
    outline: ${e("inputtext.focus.ring.width")} ${e("inputtext.focus.ring.style")} ${e("inputtext.focus.ring.color")};
    outline-offset: ${e("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${e("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${e("inputtext.filled.background")};
}
    
.p-inputtext.p-variant-filled:enabled:hover {
    background: ${e("inputtext.filled.hover.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${e("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${e("inputtext.disabled.background")};
    color: ${e("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${e("inputtext.placeholder.color")};
}

.p-inputtext.ng-invalid.ng-dirty::placeholder {
    color: ${e("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${e("inputtext.sm.font.size")};
    padding-block: ${e("inputtext.sm.padding.y")};
    padding-inline: ${e("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${e("inputtext.lg.font.size")};
    padding-block: ${e("inputtext.lg.padding.y")};
    padding-inline: ${e("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`,gl={root:({instance:e,props:n})=>["p-inputtext p-component",{"p-filled":e.filled,"p-inputtext-sm":n.size==="small","p-inputtext-lg":n.size==="large","p-invalid":n.invalid,"p-variant-filled":n.variant==="filled","p-inputtext-fluid":n.fluid}]},vr=(()=>{class e extends P{name="inputtext";theme=fl;classes=gl;static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var Sh=(()=>{class e extends j{ngModel;variant;fluid;pSize;filled;_componentStyle=g(vr);get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return Y(this.fluid)?!!i:this.fluid}constructor(t){super(),this.ngModel=t}ngAfterViewInit(){super.ngAfterViewInit(),this.updateFilledState(),this.cd.detectChanges()}ngDoCheck(){this.updateFilledState()}onInput(){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model}static \u0275fac=function(i){return new(i||e)(k(Lt,8))};static \u0275dir=I({type:e,selectors:[["","pInputText",""]],hostAttrs:[1,"p-inputtext","p-component"],hostVars:14,hostBindings:function(i,o){if(i&1&&oe("input",function(s){return o.onInput(s)}),i&2){let r;ge("p-filled",o.filled)("p-variant-filled",((r=o.variant)!==null&&r!==void 0?r:o.config.inputStyle()||o.config.inputVariant())==="filled")("p-inputtext-fluid",o.hasFluid)("p-inputtext-sm",o.pSize==="small")("p-inputfield-sm",o.pSize==="small")("p-inputtext-lg",o.pSize==="large")("p-inputfield-lg",o.pSize==="large")}},inputs:{variant:"variant",fluid:[2,"fluid","fluid",m],pSize:"pSize"},features:[A([vr]),te,E]})}return e})(),xh=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=V({type:e});static \u0275inj=$({})}return e})();var ml=["icon"],bl=["content"],Cr=e=>({$implicit:e}),yl=(e,n)=>({"p-togglebutton-icon":!0,"p-togglebutton-icon-left":e,"p-togglebutton-icon-right":n});function vl(e,n){e&1&&Ze(0)}function _l(e,n){if(e&1&&H(0,"span",1),e&2){let t=M(3);q(t.checked?t.onIcon:t.offIcon),y("ngClass",en(4,yl,t.iconPos==="left",t.iconPos==="right")),T("data-pc-section","icon")}}function Cl(e,n){if(e&1&&B(0,_l,1,7,"span",3),e&2){let t=M(2);lt(t.onIcon||t.offIcon?0:-1)}}function El(e,n){e&1&&Ze(0)}function wl(e,n){if(e&1&&B(0,El,1,0,"ng-container",2),e&2){let t=M(2);y("ngTemplateOutlet",t.iconTemplate||t._iconTemplate)("ngTemplateOutletContext",Oe(2,Cr,t.checked))}}function Sl(e,n){if(e&1&&(B(0,Cl,1,1)(1,wl,1,4,"ng-container"),U(2,"span",1),ct(3),W()),e&2){let t=M();lt(t.iconTemplate?1:0),x(2),y("ngClass",t.cx("label")),T("data-pc-section","label"),x(),ut(t.checked?t.hasOnLabel?t.onLabel:"\xA0":t.hasOffLabel?t.offLabel:"\xA0")}}var xl=({dt:e})=>`
p-togglebutton {
    display: inline-flex;
}

.p-togglebutton {
    display: inline-flex;
    cursor: pointer;
    user-select: none;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    position: relative;
    color: ${e("togglebutton.color")};
    background: ${e("togglebutton.background")};
    border: 1px solid ${e("togglebutton.border.color")};
    padding: ${e("togglebutton.padding")};
    font-size: 1rem;
    font-family: inherit;
    font-feature-settings: inherit;
    transition: background ${e("togglebutton.transition.duration")}, color ${e("togglebutton.transition.duration")}, border-color ${e("togglebutton.transition.duration")},
        outline-color ${e("togglebutton.transition.duration")}, box-shadow ${e("togglebutton.transition.duration")};
    border-radius: ${e("togglebutton.border.radius")};
    outline-color: transparent;
    font-weight: ${e("togglebutton.font.weight")};
}

.p-togglebutton-content {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${e("togglebutton.gap")};
}

.p-togglebutton-label,
.p-togglebutton-icon {
    position: relative;
    transition: none;
}

.p-togglebutton::before {
    content: "";
    background: transparent;
    transition: background ${e("togglebutton.transition.duration")}, color ${e("togglebutton.transition.duration")}, border-color ${e("togglebutton.transition.duration")},
            outline-color ${e("togglebutton.transition.duration")}, box-shadow ${e("togglebutton.transition.duration")};
    position: absolute;
    inset-inline-start: ${e("togglebutton.content.left")};
    top: ${e("togglebutton.content.top")};
    width: calc(100% - calc(2 *  ${e("togglebutton.content.left")}));
    height: calc(100% - calc(2 *  ${e("togglebutton.content.top")}));
    border-radius: ${e("togglebutton.border.radius")};
}

.p-togglebutton.p-togglebutton-checked::before {
    background: ${e("togglebutton.content.checked.background")};
    box-shadow: ${e("togglebutton.content.checked.shadow")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {
    background: ${e("togglebutton.hover.background")};
    color: ${e("togglebutton.hover.color")};
}

.p-togglebutton.p-togglebutton-checked {
    background: ${e("togglebutton.checked.background")};
    border-color: ${e("togglebutton.checked.border.color")};
    color: ${e("togglebutton.checked.color")};
}

.p-togglebutton:focus-visible {
    box-shadow: ${e("togglebutton.focus.ring.shadow")};
    outline: ${e("togglebutton.focus.ring.width")} ${e("togglebutton.focus.ring.style")} ${e("togglebutton.focus.ring.color")};
    outline-offset: ${e("togglebutton.focus.ring.offset")};
}

.p-togglebutton.p-invalid {
    border-color: ${e("togglebutton.invalid.border.color")};
}

.p-togglebutton:disabled {
    opacity: 1;
    cursor: default;
    background: ${e("togglebutton.disabled.background")};
    border-color: ${e("togglebutton.disabled.border.color")};
    color: ${e("togglebutton.disabled.color")};
}

.p-togglebutton-icon {
    color: ${e("togglebutton.icon.color")};
}

.p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {
    color: ${e("togglebutton.icon.hover.color")};
}

.p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {
    color: ${e("togglebutton.icon.checked.color")};
}

.p-togglebutton:disabled .p-togglebutton-icon {
    color: ${e("togglebutton.icon.disabled.color")};
}

.p-togglebutton-sm {
    padding: ${e("togglebutton.sm.padding")};
    font-size: ${e("togglebutton.sm.font.size")};
}

.p-togglebutton-lg {
    padding: ${e("togglebutton.lg.padding")};
    font-size: ${e("togglebutton.lg.font.size")};
}

/* For PrimeNG (iconPos) */

.p-togglebutton-icon-right {
    order: 1;
}

p-togglebutton.ng-invalid.ng-dirty > .p-togglebutton {
    border-color: ${e("togglebutton.invalid.border.color")};
}
`,Tl={root:({instance:e})=>({"p-togglebutton p-component":!0,"p-togglebutton-checked":e.checked,"p-disabled":e.disabled,"p-togglebutton-sm p-inputfield-sm":e.size==="small","p-togglebutton-lg p-inputfield-lg":e.size==="large"}),content:"p-togglebutton-content",icon:"p-togglebutton-icon",label:"p-togglebutton-label"},_r=(()=>{class e extends P{name="togglebutton";theme=xl;classes=Tl;static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var Il={provide:we,useExisting:re(()=>On),multi:!0},On=(()=>{class e extends j{onLabel="Yes";offLabel="No";onIcon;offIcon;ariaLabel;ariaLabelledBy;disabled;style;styleClass;get hostClass(){return this.styleClass||""}inputId;tabindex=0;size;iconPos="left";autofocus;allowEmpty;onChange=new G;iconTemplate;contentTemplate;templates;checked=!1;onModelChange=()=>{};onModelTouched=()=>{};_componentStyle=g(_r);toggle(t){!this.disabled&&!(this.allowEmpty===!1&&this.checked)&&(this.checked=!this.checked,this.onModelChange(this.checked),this.onModelTouched(),this.onChange.emit({originalEvent:t,checked:this.checked}),this.cd.markForCheck())}onKeyDown(t){switch(t.code){case"Enter":this.toggle(t),t.preventDefault();break;case"Space":this.toggle(t),t.preventDefault();break}}onBlur(){this.onModelTouched()}writeValue(t){this.checked=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}get hasOnLabel(){return this.onLabel&&this.onLabel.length>0}get hasOffLabel(){return this.onLabel&&this.onLabel.length>0}get active(){return this.checked===!0}_iconTemplate;_contentTemplate;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"icon":this._iconTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275cmp=L({type:e,selectors:[["p-toggleButton"],["p-togglebutton"],["p-toggle-button"]],contentQueries:function(i,o,r){if(i&1&&(ne(r,ml,4),ne(r,bl,4),ne(r,Be,4)),i&2){let s;J(s=ee())&&(o.iconTemplate=s.first),J(s=ee())&&(o.contentTemplate=s.first),J(s=ee())&&(o.templates=s)}},hostVars:2,hostBindings:function(i,o){i&2&&q(o.hostClass)},inputs:{onLabel:"onLabel",offLabel:"offLabel",onIcon:"onIcon",offIcon:"offIcon",ariaLabel:"ariaLabel",ariaLabelledBy:"ariaLabelledBy",disabled:[2,"disabled","disabled",m],style:"style",styleClass:"styleClass",inputId:"inputId",tabindex:[2,"tabindex","tabindex",Me],size:"size",iconPos:"iconPos",autofocus:[2,"autofocus","autofocus",m],allowEmpty:"allowEmpty"},outputs:{onChange:"onChange"},features:[A([Il,_r]),te,E],decls:4,vars:15,consts:[["pRipple","","type","button",3,"click","ngClass","tabindex","disabled"],[3,"ngClass"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass"]],template:function(i,o){i&1&&(U(0,"button",0),oe("click",function(s){return o.toggle(s)}),U(1,"span",1),B(2,vl,1,0,"ng-container",2)(3,Sl,4,4),W()()),i&2&&(q(o.styleClass),y("ngClass",o.cx("root"))("tabindex",o.tabindex)("disabled",o.disabled),T("aria-labelledby",o.ariaLabelledBy)("aria-pressed",o.checked)("data-p-checked",o.active)("data-p-disabled",o.disabled),x(),y("ngClass",o.cx("content")),x(),y("ngTemplateOutlet",o.contentTemplate||o._contentTemplate)("ngTemplateOutletContext",Oe(13,Cr,o.checked)),x(),lt(o.contentTemplate?-1:3))},dependencies:[bn,ae,dt,Fe,z],encapsulation:2,changeDetection:0})}return e})(),Wh=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=V({type:e});static \u0275inj=$({imports:[On,z,z]})}return e})();var Al=["item"],Dl=(e,n)=>({$implicit:e,index:n});function kl(e,n){e&1&&Ze(0)}function Ol(e,n){if(e&1&&B(0,kl,1,0,"ng-container",3),e&2){let t=M(2),i=t.$implicit,o=t.$index,r=M();y("ngTemplateOutlet",r.itemTemplate||r._itemTemplate)("ngTemplateOutletContext",en(2,Dl,i,o))}}function Ml(e,n){e&1&&B(0,Ol,1,5,"ng-template",null,0,Pi)}function Fl(e,n){if(e&1){let t=Jt();U(0,"p-toggleButton",2),oe("onChange",function(o){let r=st(t),s=r.$implicit,a=r.$index,l=M();return at(l.onOptionSelect(o,s,a))}),B(1,Ml,2,0),W()}if(e&2){let t=n.$implicit,i=M();y("autofocus",i.autofocus)("styleClass",i.styleClass)("ngModel",i.isSelected(t))("onLabel",i.getOptionLabel(t))("offLabel",i.getOptionLabel(t))("disabled",i.disabled||i.isOptionDisabled(t))("allowEmpty",i.allowEmpty)("size",i.size),x(),lt(i.itemTemplate||i._itemTemplate?1:-1)}}var Nl=({dt:e})=>`
.p-selectbutton {
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    outline-color: transparent;
    border-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton .p-togglebutton {
    border-radius: 0;
    border-width: 1px 1px 1px 0;
}

.p-selectbutton .p-togglebutton:focus-visible {
    position: relative;
    z-index: 1;
}

.p-selectbutton p-togglebutton:first-child .p-togglebutton {
    border-left-width: 1px;
    border-start-start-radius: ${e("selectbutton.border.radius")};
    border-end-start-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton p-togglebutton:last-child .p-togglebutton{
    border-start-end-radius: ${e("selectbutton.border.radius")};
    border-end-end-radius: ${e("selectbutton.border.radius")};
}

.p-selectbutton.ng-invalid.ng-dirty {
    outline: 1px solid ${e("selectbutton.invalid.border.color")};
    outline-offset: 0;
}
`,Rl={root:({props:e})=>["p-selectbutton p-component",{"p-invalid":e.invalid}]},Er=(()=>{class e extends P{name="selectbutton";theme=Nl;classes=Rl;static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275prov=C({token:e,factory:e.\u0275fac})}return e})();var $l={provide:we,useExisting:re(()=>wr),multi:!0},wr=(()=>{class e extends j{options;optionLabel;optionValue;optionDisabled;unselectable=!1;tabindex=0;multiple;allowEmpty=!0;style;styleClass;ariaLabelledBy;size;disabled;dataKey;autofocus;onOptionClick=new G;onChange=new G;itemTemplate;_itemTemplate;get equalityKey(){return this.optionValue?null:this.dataKey}value;onModelChange=()=>{};onModelTouched=()=>{};focusedIndex=0;_componentStyle=g(Er);getOptionLabel(t){return this.optionLabel?Ve(t,this.optionLabel):t.label!=null?t.label:t}getOptionValue(t){return this.optionValue?Ve(t,this.optionValue):this.optionLabel||t.value===void 0?t:t.value}isOptionDisabled(t){return this.optionDisabled?Ve(t,this.optionDisabled):t.disabled!==void 0?t.disabled:!1}writeValue(t){this.value=t,this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}onOptionSelect(t,i,o){if(this.disabled||this.isOptionDisabled(i))return;let r=this.isSelected(i);if(r&&this.unselectable)return;let s=this.getOptionValue(i),a;if(this.multiple)r?a=this.value.filter(l=>!Ee(l,s,this.equalityKey)):a=this.value?[...this.value,s]:[s];else{if(r&&!this.allowEmpty)return;a=r?null:s}this.focusedIndex=o,this.value=a,this.onModelChange(this.value),this.onChange.emit({originalEvent:t,value:this.value}),this.onOptionClick.emit({originalEvent:t,option:i,index:o})}changeTabIndexes(t,i){let o,r;for(let s=0;s<=this.el.nativeElement.children.length-1;s++)this.el.nativeElement.children[s].getAttribute("tabindex")==="0"&&(o={elem:this.el.nativeElement.children[s],index:s});i==="prev"?o.index===0?r=this.el.nativeElement.children.length-1:r=o.index-1:o.index===this.el.nativeElement.children.length-1?r=0:r=o.index+1,this.focusedIndex=r,this.el.nativeElement.children[r].focus()}onFocus(t,i){this.focusedIndex=i}onBlur(){this.onModelTouched()}removeOption(t){this.value=this.value.filter(i=>!Ee(i,this.getOptionValue(t),this.dataKey))}isSelected(t){let i=!1,o=this.getOptionValue(t);if(this.multiple){if(this.value&&Array.isArray(this.value)){for(let r of this.value)if(Ee(r,o,this.dataKey)){i=!0;break}}}else i=Ee(this.getOptionValue(t),this.value,this.equalityKey);return i}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"item":this._itemTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=b(e)))(o||e)}})();static \u0275cmp=L({type:e,selectors:[["p-selectButton"],["p-selectbutton"],["p-select-button"]],contentQueries:function(i,o,r){if(i&1&&(ne(r,Al,4),ne(r,Be,4)),i&2){let s;J(s=ee())&&(o.itemTemplate=s.first),J(s=ee())&&(o.templates=s)}},hostVars:10,hostBindings:function(i,o){i&2&&(T("role","group")("aria-labelledby",o.ariaLabelledBy)("data-pc-section","root")("data-pc-name","selectbutton"),Qe(o.style),ge("p-selectbutton",!0)("p-component",!0))},inputs:{options:"options",optionLabel:"optionLabel",optionValue:"optionValue",optionDisabled:"optionDisabled",unselectable:[2,"unselectable","unselectable",m],tabindex:[2,"tabindex","tabindex",Me],multiple:[2,"multiple","multiple",m],allowEmpty:[2,"allowEmpty","allowEmpty",m],style:"style",styleClass:"styleClass",ariaLabelledBy:"ariaLabelledBy",size:"size",disabled:[2,"disabled","disabled",m],dataKey:"dataKey",autofocus:[2,"autofocus","autofocus",m]},outputs:{onOptionClick:"onOptionClick",onChange:"onChange"},features:[A([$l,Er]),te,E],decls:2,vars:0,consts:[["content",""],[3,"autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[3,"onChange","autofocus","styleClass","ngModel","onLabel","offLabel","disabled","allowEmpty","size"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(i,o){i&1&&Ni(0,Fl,2,9,"p-toggleButton",1,Fi),i&2&&Ri(o.options)},dependencies:[On,gr,sr,Lt,ae,Fe,z],encapsulation:2,changeDetection:0})}return e})(),cf=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=V({type:e});static \u0275inj=$({imports:[wr,z,z]})}return e})();var Sr=class e{static isArray(n,t=!0){return Array.isArray(n)&&(t||n.length!==0)}static isObject(n,t=!0){return typeof n=="object"&&!Array.isArray(n)&&n!=null&&(t||Object.keys(n).length!==0)}static equals(n,t,i){return i?this.resolveFieldData(n,i)===this.resolveFieldData(t,i):this.equalsByValue(n,t)}static equalsByValue(n,t){if(n===t)return!0;if(n&&t&&typeof n=="object"&&typeof t=="object"){var i=Array.isArray(n),o=Array.isArray(t),r,s,a;if(i&&o){if(s=n.length,s!=t.length)return!1;for(r=s;r--!==0;)if(!this.equalsByValue(n[r],t[r]))return!1;return!0}if(i!=o)return!1;var l=this.isDate(n),c=this.isDate(t);if(l!=c)return!1;if(l&&c)return n.getTime()==t.getTime();var u=n instanceof RegExp,d=t instanceof RegExp;if(u!=d)return!1;if(u&&d)return n.toString()==t.toString();var p=Object.keys(n);if(s=p.length,s!==Object.keys(t).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,p[r]))return!1;for(r=s;r--!==0;)if(a=p[r],!this.equalsByValue(n[a],t[a]))return!1;return!0}return n!==n&&t!==t}static resolveFieldData(n,t){if(n&&t){if(this.isFunction(t))return t(n);if(t.indexOf(".")==-1)return n[t];{let i=t.split("."),o=n;for(let r=0,s=i.length;r<s;++r){if(o==null)return null;o=o[i[r]]}return o}}else return null}static isFunction(n){return!!(n&&n.constructor&&n.call&&n.apply)}static reorderArray(n,t,i){let o;n&&t!==i&&(i>=n.length&&(i%=n.length,t%=n.length),n.splice(i,0,n.splice(t,1)[0]))}static insertIntoOrderedArray(n,t,i,o){if(i.length>0){let r=!1;for(let s=0;s<i.length;s++)if(this.findIndexInList(i[s],o)>t){i.splice(s,0,n),r=!0;break}r||i.push(n)}else i.push(n)}static findIndexInList(n,t){let i=-1;if(t){for(let o=0;o<t.length;o++)if(t[o]==n){i=o;break}}return i}static contains(n,t){if(n!=null&&t&&t.length){for(let i of t)if(this.equals(n,i))return!0}return!1}static removeAccents(n){return n&&(n=n.normalize("NFKD").replace(new RegExp("\\p{Diacritic}","gu"),"")),n}static isDate(n){return Object.prototype.toString.call(n)==="[object Date]"}static isEmpty(n){return n==null||n===""||Array.isArray(n)&&n.length===0||!this.isDate(n)&&typeof n=="object"&&Object.keys(n).length===0}static isNotEmpty(n){return!this.isEmpty(n)}static compare(n,t,i,o=1){let r=-1,s=this.isEmpty(n),a=this.isEmpty(t);return s&&a?r=0:s?r=o:a?r=-o:typeof n=="string"&&typeof t=="string"?r=n.localeCompare(t,i,{numeric:!0}):r=n<t?-1:n>t?1:0,r}static sort(n,t,i=1,o,r=1){let s=e.compare(n,t,o,i),a=i;return(e.isEmpty(n)||e.isEmpty(t))&&(a=r===1?i:r),a*s}static merge(n,t){if(!(n==null&&t==null)){{if((n==null||typeof n=="object")&&(t==null||typeof t=="object"))return w(w({},n||{}),t||{});if((n==null||typeof n=="string")&&(t==null||typeof t=="string"))return[n||"",t||""].join(" ")}return t||n}}static isPrintableCharacter(n=""){return this.isNotEmpty(n)&&n.length===1&&n.match(/\S| /)}static getItemValue(n,...t){return this.isFunction(n)?n(...t):n}static findLastIndex(n,t){let i=-1;if(this.isNotEmpty(n))try{i=n.findLastIndex(t)}catch{i=n.lastIndexOf([...n].reverse().find(t))}return i}static findLast(n,t){let i;if(this.isNotEmpty(n))try{i=n.findLast(t)}catch{i=[...n].reverse().find(t)}return i}static deepEquals(n,t){if(n===t)return!0;if(n&&t&&typeof n=="object"&&typeof t=="object"){var i=Array.isArray(n),o=Array.isArray(t),r,s,a;if(i&&o){if(s=n.length,s!=t.length)return!1;for(r=s;r--!==0;)if(!this.deepEquals(n[r],t[r]))return!1;return!0}if(i!=o)return!1;var l=n instanceof Date,c=t instanceof Date;if(l!=c)return!1;if(l&&c)return n.getTime()==t.getTime();var u=n instanceof RegExp,d=t instanceof RegExp;if(u!=d)return!1;if(u&&d)return n.toString()==t.toString();var p=Object.keys(n);if(s=p.length,s!==Object.keys(t).length)return!1;for(r=s;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,p[r]))return!1;for(r=s;r--!==0;)if(a=p[r],!this.deepEquals(n[a],t[a]))return!1;return!0}return n!==n&&t!==t}static minifyCSS(n){return n&&n.replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g,"").replace(/ {2,}/g," ").replace(/ ([{:}]) /g,"$1").replace(/([;,]) /g,"$1").replace(/ !/g,"!").replace(/: /g,":")}static toFlatCase(n){return this.isString(n)?n.replace(/(-|_)/g,"").toLowerCase():n}static isString(n,t=!0){return typeof n=="string"&&(t||n!=="")}},xr=0;function df(e="pn_id_"){return xr++,`${e}${xr}`}function Ll(){let e=[],n=(r,s)=>{let a=e.length>0?e[e.length-1]:{key:r,value:s},l=a.value+(a.key===r?0:s)+2;return e.push({key:r,value:l}),l},t=r=>{e=e.filter(s=>s.value!==r)},i=()=>e.length>0?e[e.length-1].value:0,o=r=>r&&parseInt(r.style.zIndex,10)||0;return{get:o,set:(r,s,a)=>{s&&(s.style.zIndex=String(n(r,a)))},clear:r=>{r&&(t(o(r)),r.style.zIndex="")},getCurrent:()=>i(),generateZIndex:n,revertZIndex:t}}var pf=Ll(),hf=e=>!!e;export{Se as a,$e as b,Yr as c,tc as d,nc as e,eo as f,Le as g,sc as h,tt as i,ac as j,Kn as k,gs as l,ms as m,lc as n,no as o,Qn as p,cc as q,uc as r,dc as s,Ji as t,pc as u,hc as v,fc as w,bs as x,ft as y,gc as z,mc as A,io as B,bc as C,Xn as D,ys as E,vs as F,yc as G,vc as H,Zn as I,dn as J,_c as K,Cc as L,Jn as M,Ec as N,Cs as O,wc as P,Sc as Q,xc as R,Tc as S,Ic as T,Ac as U,Dc as V,so as W,Y as X,Ts as Y,po as Z,D as _,Ve as $,Ee as aa,Is as ba,Fc as ca,Nc as da,he as ea,Rc as fa,hn as ga,$c as ha,Lc as ia,ce as ja,Vc as ka,Ot as la,Ds as ma,eu as na,X as oa,tu as pa,nu as qa,iu as ra,ou as sa,ru as ta,su as ua,Be as va,z as wa,au as xa,lu as ya,bu as za,Vs as Aa,_u as Ba,Cu as Ca,P as Da,oi as Ea,Wu as Fa,j as Ga,bn as Ha,dd as Ia,si as Ja,Io as Ka,Ao as La,Nd as Ma,ri as Na,To as Oa,Ue as Pa,Do as Qa,ko as Ra,Oo as Sa,ep as Ta,Mo as Ua,Fo as Va,Ep as Wa,ya as Xa,wp as Ya,Sr as Za,df as _a,pf as $a,hf as ab,we as bb,Go as cb,Ro as db,Te as eb,sr as fb,jp as gb,Lt as hb,Hp as ib,Ga as jb,Ka as kb,Ya as lb,Ja as mb,zp as nb,gr as ob,Gp as pb,yr as qb,ph as rb,Sh as sb,xh as tb,On as ub,Wh as vb,wr as wb,cf as xb};
