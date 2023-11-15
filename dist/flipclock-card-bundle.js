'use strict';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$3=window,e$7=t$3.ShadowRoot&&(void 0===t$3.ShadyCSS||t$3.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$6=Symbol(),n$8=new WeakMap;let o$6 = class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$6)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$7&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$8.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$8.set(s,t));}return t}toString(){return this.cssText}};const r$6=t=>new o$6("string"==typeof t?t:t+"",void 0,s$6),S$3=(s,n)=>{e$7?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$3.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$4=e$7?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$6(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var s$5;const e$6=window,r$5=e$6.trustedTypes,h$3=r$5?r$5.emptyScript:"",o$5=e$6.reactiveElementPolyfillSupport,n$7={toAttribute(t,i){switch(i){case Boolean:t=t?h$3:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$3=(t,i)=>i!==t&&(i==i||t==t),l$4={attribute:!0,type:String,converter:n$7,reflect:!1,hasChanged:a$3},d$3="finalized";let u$3 = class u extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$4){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$4}static finalize(){if(this.hasOwnProperty(d$3))return !1;this[d$3]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$4(i));}else void 0!==i&&s.push(c$4(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$3(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$4){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$7).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$7;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$3)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}};u$3[d$3]=!0,u$3.elementProperties=new Map,u$3.elementStyles=[],u$3.shadowRootOptions={mode:"open"},null==o$5||o$5({ReactiveElement:u$3}),(null!==(s$5=e$6.reactiveElementVersions)&&void 0!==s$5?s$5:e$6.reactiveElementVersions=[]).push("1.6.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t$2;const i$3=window,s$4=i$3.trustedTypes,e$5=s$4?s$4.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$4="$lit$",n$6=`lit$${(Math.random()+"").slice(9)}$`,l$3="?"+n$6,h$2=`<${l$3}>`,r$4=document,u$2=()=>r$4.createComment(""),d$2=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c$3=Array.isArray,v$1=t=>c$3(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a$2="[ \t\n\f\r]",f$2=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_$1=/-->/g,m$1=/>/g,p$2=RegExp(`>|${a$2}(?:([^\\s"'>=/]+)(${a$2}*=${a$2}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g$1=/'/g,$$1=/"/g,y$2=/^(?:script|style|textarea|title)$/i,w$1=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x$1=w$1(1),T$1=Symbol.for("lit-noChange"),A$1=Symbol.for("lit-nothing"),E$1=new WeakMap,C$1=r$4.createTreeWalker(r$4,129,null,!1);function P$1(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$5?e$5.createHTML(i):i}const V$1=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f$2;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f$2?"!--"===c[1]?u=_$1:void 0!==c[1]?u=m$1:void 0!==c[2]?(y$2.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p$2):void 0!==c[3]&&(u=p$2):u===p$2?">"===c[0]?(u=null!=l?l:f$2,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p$2:'"'===c[3]?$$1:g$1):u===$$1||u===g$1?u=p$2:u===_$1||u===m$1?u=f$2:(u=p$2,l=void 0);const w=u===p$2&&t[i+1].startsWith("/>")?" ":"";r+=u===f$2?s+h$2:v>=0?(e.push(d),s.slice(0,v)+o$4+s.slice(v)+n$6+w):s+n$6+(-2===v?(e.push(void 0),i):w);}return [P$1(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};let N$1 = class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V$1(t,i);if(this.el=N.createElement(a,e),C$1.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C$1.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$4)||i.startsWith(n$6)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$4).split(n$6),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H$1:"?"===i[1]?L$1:"@"===i[1]?z:k$1});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y$2.test(h.tagName)){const t=h.textContent.split(n$6),i=t.length-1;if(i>0){h.textContent=s$4?s$4.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u$2()),C$1.nextNode(),v.push({type:2,index:++r});h.append(t[i],u$2());}}}else if(8===h.nodeType)if(h.data===l$3)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$6,t+1));)v.push({type:7,index:r}),t+=n$6.length-1;}r++;}}static createElement(t,i){const s=r$4.createElement("template");return s.innerHTML=t,s}};function S$2(t,i,s=t,e){var o,n,l,h;if(i===T$1)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d$2(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S$2(t,r._$AS(t,i.values),r,e)),i}let M$1 = class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r$4).importNode(s,!0);C$1.currentNode=o;let n=C$1.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R$1(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z$1(n,this,t)),this._$AV.push(i),u=e[++h];}l!==(null==u?void 0:u.index)&&(n=C$1.nextNode(),l++);}return C$1.currentNode=r$4,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}};let R$1 = class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A$1,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S$2(this,t,i),d$2(t)?t===A$1||null==t||""===t?(this._$AH!==A$1&&this._$AR(),this._$AH=A$1):t!==this._$AH&&t!==T$1&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v$1(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A$1&&d$2(this._$AH)?this._$AA.nextSibling.data=t:this.$(r$4.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N$1.createElement(P$1(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new M$1(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E$1.get(t.strings);return void 0===i&&E$1.set(t.strings,i=new N$1(t)),i}T(t){c$3(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u$2()),this.k(u$2()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}};let k$1 = class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A$1,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A$1;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S$2(this,t,i,0),n=!d$2(t)||t!==this._$AH&&t!==T$1,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S$2(this,e[s+l],i,l),h===T$1&&(h=this._$AH[l]),n||(n=!d$2(h)||h!==this._$AH[l]),h===A$1?t=A$1:t!==A$1&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A$1?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}};let H$1 = class H extends k$1{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A$1?void 0:t;}};const I$1=s$4?s$4.emptyScript:"";let L$1 = class L extends k$1{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A$1?this.element.setAttribute(this.name,I$1):this.element.removeAttribute(this.name);}};class z extends k$1{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=S$2(this,t,i,0))&&void 0!==s?s:A$1)===T$1)return;const e=this._$AH,o=t===A$1&&e!==A$1||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A$1&&(e===A$1||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}let Z$1 = class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S$2(this,t);}};const B=i$3.litHtmlPolyfillSupport;null==B||B(N$1,R$1),(null!==(t$2=i$3.litHtmlVersions)&&void 0!==t$2?t$2:i$3.litHtmlVersions=[]).push("2.8.0");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R$1(i.insertBefore(u$2(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var l$2,o$3;let s$3 = class s extends u$3{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T$1}};s$3.finalized=!0,s$3._$litElement$=!0,null===(l$2=globalThis.litElementHydrateSupport)||void 0===l$2||l$2.call(globalThis,{LitElement:s$3});const n$5=globalThis.litElementPolyfillSupport;null==n$5||n$5({LitElement:s$3});(null!==(o$3=globalThis.litElementVersions)&&void 0!==o$3?o$3:globalThis.litElementVersions=[]).push("3.3.3");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const e$4=e=>n=>"function"==typeof n?((e,n)=>(customElements.define(e,n),n))(e,n):((e,n)=>{const{kind:t,elements:s}=n;return {kind:t,elements:s,finisher(n){customElements.define(e,n);}}})(e,n);

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const i$2=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}},e$3=(i,e,n)=>{e.constructor.createProperty(n,i);};function n$4(n){return (t,o)=>void 0!==o?e$3(n,t,o):i$2(n,t)}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var n$3;null!=(null===(n$3=window.HTMLSlotElement)||void 0===n$3?void 0:n$3.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var flipclock = {exports: {}};

(function (module, exports) {
	(function (global, factory) {
	    module.exports = factory() ;
	}(commonjsGlobal, (function () {
	    function _typeof(obj) {
	      if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
	        _typeof = function (obj) {
	          return typeof obj;
	        };
	      } else {
	        _typeof = function (obj) {
	          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
	        };
	      }

	      return _typeof(obj);
	    }

	    function _classCallCheck(instance, Constructor) {
	      if (!(instance instanceof Constructor)) {
	        throw new TypeError("Cannot call a class as a function");
	      }
	    }

	    function _defineProperties(target, props) {
	      for (var i = 0; i < props.length; i++) {
	        var descriptor = props[i];
	        descriptor.enumerable = descriptor.enumerable || false;
	        descriptor.configurable = true;
	        if ("value" in descriptor) descriptor.writable = true;
	        Object.defineProperty(target, descriptor.key, descriptor);
	      }
	    }

	    function _createClass(Constructor, protoProps, staticProps) {
	      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	      if (staticProps) _defineProperties(Constructor, staticProps);
	      return Constructor;
	    }

	    function _inherits(subClass, superClass) {
	      if (typeof superClass !== "function" && superClass !== null) {
	        throw new TypeError("Super expression must either be null or a function");
	      }

	      subClass.prototype = Object.create(superClass && superClass.prototype, {
	        constructor: {
	          value: subClass,
	          writable: true,
	          configurable: true
	        }
	      });
	      if (superClass) _setPrototypeOf(subClass, superClass);
	    }

	    function _getPrototypeOf(o) {
	      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
	        return o.__proto__ || Object.getPrototypeOf(o);
	      };
	      return _getPrototypeOf(o);
	    }

	    function _setPrototypeOf(o, p) {
	      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
	        o.__proto__ = p;
	        return o;
	      };

	      return _setPrototypeOf(o, p);
	    }

	    function isNativeReflectConstruct() {
	      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
	      if (Reflect.construct.sham) return false;
	      if (typeof Proxy === "function") return true;

	      try {
	        Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
	        return true;
	      } catch (e) {
	        return false;
	      }
	    }

	    function _construct(Parent, args, Class) {
	      if (isNativeReflectConstruct()) {
	        _construct = Reflect.construct;
	      } else {
	        _construct = function _construct(Parent, args, Class) {
	          var a = [null];
	          a.push.apply(a, args);
	          var Constructor = Function.bind.apply(Parent, a);
	          var instance = new Constructor();
	          if (Class) _setPrototypeOf(instance, Class.prototype);
	          return instance;
	        };
	      }

	      return _construct.apply(null, arguments);
	    }

	    function _assertThisInitialized(self) {
	      if (self === void 0) {
	        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	      }

	      return self;
	    }

	    function _possibleConstructorReturn(self, call) {
	      if (call && (typeof call === "object" || typeof call === "function")) {
	        return call;
	      }

	      return _assertThisInitialized(self);
	    }

	    function _superPropBase(object, property) {
	      while (!Object.prototype.hasOwnProperty.call(object, property)) {
	        object = _getPrototypeOf(object);
	        if (object === null) break;
	      }

	      return object;
	    }

	    function _get(target, property, receiver) {
	      if (typeof Reflect !== "undefined" && Reflect.get) {
	        _get = Reflect.get;
	      } else {
	        _get = function _get(target, property, receiver) {
	          var base = _superPropBase(target, property);

	          if (!base) return;
	          var desc = Object.getOwnPropertyDescriptor(base, property);

	          if (desc.get) {
	            return desc.get.call(receiver);
	          }

	          return desc.value;
	        };
	      }

	      return _get(target, property, receiver || target);
	    }

	    /**
	     * These are a collection of helper functions, some borrowed from Lodash,
	     * Underscore, etc, to provide common functionality without the need for using
	     * a dependency. All of this is an attempt to reduce the file size of the
	     * library.
	     *
	     * @namespace Helpers.Functions
	     */

	    /**
	     * Throw a string as an Error exception.
	     *
	     * @function error
	     * @param  {string} string - The error message.
	     * @return {void}
	     * @memberof Helpers.Functions
	     */
	    function error(string) {
	      throw Error(string);
	    }
	    /**
	     * Check if `fn` is a function, and call it with `this` context and pass the
	     * arguments.
	     *
	     * @function callback
	     * @param  {string} string - The callback fn.
	     * @param  {...*} args - The arguments to pass.
	     * @return {void}
	     * @memberof Helpers.Functions
	     */

	    function callback(fn) {
	      if (isFunction(fn)) {
	        for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	          args[_key - 1] = arguments[_key];
	        }

	        return fn.call.apply(fn, [this].concat(args));
	      }
	    }
	    /**
	     * Round the value to the correct value. Takes into account negative numbers.
	     *
	     * @function round
	     * @param  {value} string - The value to round.
	     * @return {string} - The rounded value.
	     * @memberof Helpers.Functions
	     */

	    function round(value) {
	      return isNegativeZero(value = isNegative(value) ? Math.ceil(value) : Math.floor(value)) ? ('-' + value).toString() : value;
	    }
	    /**
	     * Returns `true` if `undefined or `null`.
	     *
	     * @function noop
	     * @param  {value} string - The value to check.
	     * @return {boolean} - `true` if `undefined or `null`.
	     * @memberof Helpers.Functions
	     */

	    function noop(value) {
	      return !isUndefined(value) && !isNull(value);
	    }
	    /**
	     * Returns a function that executes the `before` attribute and passes that value
	     * to `after` and the subsequent value is returned.
	     *
	     * @function chain
	     * @param  {function} before - The first function to execute.
	     * @param  {function} after - The subsequent function to execute.
	     * @return {function} - A function that executes the chain.
	     * @memberof Helpers.Functions
	     */

	    function chain(before, after) {
	      return function () {
	        return after(before());
	      };
	    }
	    /**
	     * Returns a function that returns maps the values before concatenating them.
	     *
	     * @function concatMap
	     * @param  {function} fn - The map callback function.
	     * @return {function} - A function that executes the map and concatenation.
	     * @memberof Helpers.Functions
	     */

	    function concatMap(fn) {
	      return function (x) {
	        return x.map(fn).reduce(function (x, y) {
	          return x.concat(y);
	        }, []);
	      };
	    }
	    /**
	     * Flatten an array.
	     *
	     * @function flatten
	     * @param  {array} value - The array to flatten.
	     * @return {array} - The flattened array.
	     * @memberof Helpers.Functions
	     */

	    function flatten(value) {
	      return concatMap(function (value) {
	        return value;
	      })(value);
	    }
	    /**
	     * Deep flatten an array.
	     *
	     * @function deepFlatten
	     * @param  {array} value - The array to flatten.
	     * @return {array} - The flattened array.
	     * @memberof Helpers.Functions
	     */

	    function deepFlatten(x) {
	      return concatMap(function (x) {
	        return Array.isArray(x) ? deepFlatten(x) : x;
	      })(x);
	    }
	    /**
	     * Returns the length of a deep flatten array.
	     *
	     * @function length
	     * @param  {array} value - The array to count.
	     * @return {number} - The length of the deep flattened array.
	     * @memberof Helpers.Functions
	     */

	    function length(value) {
	      return deepFlatten(value).length;
	    }
	    /**
	     * Determines if a value is a negative zero.
	     *
	     * @function isNegativeZero
	     * @param  {number} value - The value to check.
	     * @return {boolean} - Returns `true` if the value is a negative zero (`-0`).
	     * @memberof Helpers.Functions
	     */

	    function isNegativeZero(value) {
	      return 1 / Math.round(value) === -Infinity;
	    }
	    /**
	     * Determines if a value is a negative.
	     *
	     * @function isNegative
	     * @param  {number} value - The value to check.
	     * @return {boolean} - Returns `true` if the value is a negative.
	     * @memberof Helpers.Functions
	     */

	    function isNegative(value) {
	      return isNegativeZero(value) || value < 0;
	    }
	    /**
	     * Determines if a value is `null`.
	     *
	     * @function isNull
	     * @param  {*} value - The value to check.
	     * @return {boolean} - Returns `true` if the value is a `null`.
	     * @memberof Helpers.Functions
	     */

	    function isNull(value) {
	      return value === null; // || typeof value === 'null';
	    }
	    /**
	     * Determines if a value is `undefined`.
	     *
	     * @function isNull
	     * @param  {*} value - The value to check.
	     * @return {boolean} - Returns `true` if the value is a `undefined`.
	     * @memberof Helpers.Functions
	     */

	    function isUndefined(value) {
	      return typeof value === 'undefined';
	    }
	    /**
	     * Determines if a value is a constructor.
	     *
	     * @function isConstructor
	     * @param  {*} value - The value to check.
	     * @return {boolean} - Returns `true` if the value is a constructor.
	     * @memberof Helpers.Functions
	     */

	    function isConstructor(value) {
	      return value instanceof Function && !!value.name;
	    }
	    /**
	     * Determines if a value is a string.
	     *
	     * @function isString
	     * @param  {*} value - The value to check.
	     * @return {boolean} - Returns `true` if the value is a string.
	     * @memberof Helpers.Functions
	     */

	    function isString(value) {
	      return typeof value === 'string';
	    }
	    /**
	     * Determines if a value is a array.
	     *
	     * @function isString
	     * @param  {*} value - The value to check.
	     * @return {boolean} - Returns `true` if the value is a string.
	     * @memberof Helpers.Functions
	     */

	    function isArray(value) {
	      return value instanceof Array;
	    }
	    /**
	     * Determines if a value is an object.
	     *
	     * @function isObject
	     * @param  {*} value - The value to check.
	     * @return {boolean} - Returns `true` if the value is an object.
	     * @memberof Helpers.Functions
	     */

	    function isObject(value) {
	      var type = _typeof(value);

	      return value != null && !isArray(value) && (type == 'object' || type == 'function');
	    }
	    /**
	     * Determines if a value is a function.
	     *
	     * @function isObject
	     * @param  {*} value - The value to check.
	     * @return {boolean} - Returns `true` if the value is a function.
	     * @memberof Helpers.Functions
	     */

	    function isFunction(value) {
	      return value instanceof Function;
	    }
	    /**
	     * Determines if a value is a number.
	     *
	     * @function isObject
	     * @param  {*} value - The value to check.
	     * @return {boolean} - Returns `true` if the value is a number.
	     * @memberof Helpers.Functions
	     */

	    function isNumber(value) {
	      return !isNaN(value);
	    }
	    /**
	     * Converts a string into kebab case.
	     *
	     * @function kebabCase
	     * @param  {string} string - The string to convert.
	     * @return {string} - The converted string.
	     * @memberof Helpers.Functions
	     */

	    function kebabCase(string) {
	      return string.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();
	    }

	    var Component =
	    /*#__PURE__*/
	    function () {
	      /**
	       * Abstract base class.
	       *
	       * @class Component
	       * @param {(object|undefined)} [attributes] - The instance attributes.
	       */
	      function Component(attributes) {
	        _classCallCheck(this, Component);

	        this.setAttribute(Object.assign({
	          events: {}
	        }, attributes));
	      }
	      /**
	       * Get the `name` attribute.
	       *
	       * @type {string}
	       */


	      _createClass(Component, [{
	        key: "emit",

	        /**
	         * Emit an event.
	         *
	         * @param  {string} key - The event id/key.
	         * @return {Component} - Returns `this` instance.
	         */
	        value: function emit(key) {
	          var _this = this;

	          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	            args[_key - 1] = arguments[_key];
	          }

	          if (this.events[key]) {
	            this.events[key].forEach(function (event) {
	              event.apply(_this, args);
	            });
	          }

	          return this;
	        }
	        /**
	         * Start listening to an event.
	         *
	         * @param  {string} key - The event id/key.
	         * @param  {Function} fn - The listener callback function.
	         * @param  {boolean} [once=false] - Should the event handler be fired a
	         *     single time.
	         * @return {Component} - Returns `this` instance.
	         */

	      }, {
	        key: "on",
	        value: function on(key, fn) {

	          if (!this.events[key]) {
	            this.events[key] = [];
	          }

	          this.events[key].push(fn);
	          return this;
	        }
	        /**
	         * Stop listening to an event.
	         *
	         * @param {string} key - The event id/key.
	         * @param {(Function|undefined)} fn - The listener callback function. If no
	         *     function is defined, all events with the specified id/key will be
	         *     removed. Otherwise, only the event listeners matching the id/key AND
	         *     callback will be removed.
	         * @return {Component} - Returns `this` instance.
	         */

	      }, {
	        key: "off",
	        value: function off(key, fn) {
	          if (this.events[key] && fn) {
	            this.events[key] = this.events[key].filter(function (event) {
	              return event !== fn;
	            });
	          } else {
	            this.events[key] = [];
	          }

	          return this;
	        }
	        /**
	         * Listen to an event only one time.
	         *
	         * @param  {string} key - The event id/key.
	         * @param  {Function} fn - The listener callback function.
	         * @return {Component} - Returns `this` instance.
	         */

	      }, {
	        key: "once",
	        value: function once(key, fn) {
	          var _this2 = this;

	          fn = chain(fn, function () {
	            return _this2.off(key, fn);
	          });
	          return this.on(key, fn, true);
	        }
	        /**
	         * Get an attribute. Returns null if no attribute is defined.
	         *
	         * @param  {string} key - The attribute name.
	         * @return {*} - The attribute value.
	         */

	      }, {
	        key: "getAttribute",
	        value: function getAttribute(key) {
	          return this.hasOwnProperty(key) ? this[key] : null;
	        }
	        /**
	         * Get all the atttributes for this instance.
	         *
	         * @return {object} - The attribute dictionary.
	         */

	      }, {
	        key: "getAttributes",
	        value: function getAttributes() {
	          var _this3 = this;

	          var attributes = {};
	          Object.getOwnPropertyNames(this).forEach(function (key) {
	            attributes[key] = _this3.getAttribute(key);
	          });
	          return attributes;
	        }
	        /**
	         * Get only public the atttributes for this instance. Omits any attribute
	         * that starts with `$`, which is used internally.
	         *
	         * @return {object} - The attribute dictionary.
	         */

	      }, {
	        key: "getPublicAttributes",
	        value: function getPublicAttributes() {
	          var _this4 = this;

	          return Object.keys(this.getAttributes()).filter(function (key) {
	            return !key.match(/^\$/);
	          }).reduce(function (obj, key) {
	            obj[key] = _this4.getAttribute(key);
	            return obj;
	          }, {});
	        }
	        /**
	         * Set an attribute key and value.
	         *
	         * @param  {string} key - The attribute name.
	         * @param  {*} value - The attribute value.
	         * @return {void}
	         */

	      }, {
	        key: "setAttribute",
	        value: function setAttribute(key, value) {
	          if (isObject(key)) {
	            this.setAttributes(key);
	          } else {
	            this[key] = value;
	          }
	        }
	        /**
	         * Set an attributes by object of key/value pairs.
	         *
	         * @param  {object} values - The object dictionary.
	         * @return {void}
	         */

	      }, {
	        key: "setAttributes",
	        value: function setAttributes(values) {
	          for (var i in values) {
	            this.setAttribute(i, values[i]);
	          }
	        }
	        /**
	         * Helper method to execute the `callback()` function.
	         *
	         * @param  {Function} fn - The callback function.
	         * @return {*} - Returns the executed callback function.
	         */

	      }, {
	        key: "callback",
	        value: function callback$$1(fn) {
	          return callback.call(this, fn);
	        }
	        /**
	         * Factor method to static instantiate new instances. Useful for writing
	         * clean expressive syntax with chained methods.
	         *
	         * @param  {...*} args - The callback arguments.
	         * @return {*} - The new component instance.
	         */

	      }, {
	        key: "name",
	        get: function get() {
	          if (!(this.constructor.defineName instanceof Function)) {
	            error('Every class must define its name.');
	          }

	          return this.constructor.defineName();
	        }
	        /**
	         * The `events` attribute.
	         *
	         * @type {object}
	         */

	      }, {
	        key: "events",
	        get: function get() {
	          return this.$events || {};
	        },
	        set: function set(value) {
	          this.$events = value;
	        }
	      }], [{
	        key: "make",
	        value: function make() {
	          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
	            args[_key2] = arguments[_key2];
	          }

	          return _construct(this, args);
	        }
	      }]);

	      return Component;
	    }();

	    /**
	     * @namespace Helpers.Digitize
	     */
	    /**
	     * Digitize a number, string, or an array into a digitized array. This function
	     * use by the `Face`, which convert the digitized array into an array of `List`
	     * instances.
	     *
	     * @function digitize
	     * @param  {*} value - The value to digitize.
	     * @param  {(Object|undefined)} [options] - The digitizer options.
	     * @return {array} - The digitized array.
	     * @memberof Helpers.Digitize
	     */

	    function digitize(value, options) {
	      options = Object.assign({
	        minimumDigits: 0,
	        prependLeadingZero: true
	      }, options);

	      function prepend(number) {
	        var shouldPrependZero = options.prependLeadingZero && number.toString().split('').length === 1;
	        return (shouldPrependZero ? '0' : '').concat(number);
	      }

	      function digits(arr, min) {
	        var length$$1 = deepFlatten(arr).length;

	        if (length$$1 < min) {
	          for (var i = 0; i < min - length$$1; i++) {
	            arr[0].unshift('0');
	          }
	        }

	        return arr;
	      }

	      return digits(flatten([value]).map(function (number) {
	        return flatten(deepFlatten([number]).map(function (number) {
	          return prepend(number).split('');
	        }));
	      }), options.minimumDigits || 0);
	    }

	    /**
	     * @namespace Helpers.Value
	     */

	    /**
	     * An array of objects with min/max ranges.
	     *
	     * @private
	     * @type {array}
	     */
	    var RANGES = [{
	      // 0-9
	      min: 48,
	      max: 57
	    }, {
	      // a-z
	      min: 65,
	      max: 90
	    }, {
	      // A-Z
	      min: 97,
	      max: 122
	    }];
	    /**
	     * Format a string into a new data type. Currently only supports string to
	     * number conversion.
	     *
	     * @private
	     * @function format
	     * @param {string} string - The string to format.
	     * @param {string} type - The data type (represented as a string) used to
	     *     convert the string.
	     * @return {boolean} - Returns the formatted string.
	     */

	    function format(string, type) {
	      switch (type) {
	        case 'number':
	          return parseFloat(string);
	      }

	      return string;
	    }
	    /**
	     * Find the range object from the `RANGES` constant from the character given.
	     * This is mainly an interval method, but can be used by faces to help
	     * determine what the next value of a string should be.
	     *
	     * @private
	     * @function format
	     * @param {string} char - The char used to determine the range.
	     * @param {string} type - The data type (represented as a string) used to
	     *     convert the string.
	     * @return {boolean} - Returns the formatted string.
	     */


	    function findRange(_char) {
	      for (var i in RANGES) {
	        var code = _char.toString().charCodeAt(0);

	        if (RANGES[i].min <= code && RANGES[i].max >= code) {
	          return RANGES[i];
	        }
	      }

	      return null;
	    }
	    /**
	     * Create a string from a character code, which is returned by the callback.
	     *
	     * @private
	     * @callback stringFromCharCodeBy
	     * @param {string} char - The char used to determine the range.
	     * @param {function} fn - The callback function receives `range` and `code`
	     *     arguments. This function should return a character code.
	     * @return {string} - Creates a string from the character code returned by the
	     *     callback function.
	     */


	    function stringFromCharCodeBy(_char2, fn) {
	      return String.fromCharCode(fn(findRange(_char2), _char2.charCodeAt(0)));
	    }
	    /**
	     * Calculate the next value for a string. 'a' becomes 'b'. 'A' becomes 'B'. 1
	     * becomes 2, etc. If multiple character strings are passed, 'aa' would become
	     * 'bb'.
	     *
	     * @function next
	     * @param  {(string|number)} value - The string or number to convert.
	     * @return {string} - The formatted string
	     * @memberof Helpers.Value
	     */


	    function next(value) {
	      var converted = value.toString().split('').map(function (_char3) {
	        return stringFromCharCodeBy(_char3, function (range, code) {
	          return !range || code < range.max ? code + 1 : range.min;
	        });
	      }).join('');
	      return format(converted, _typeof(value));
	    }
	    /**
	     * Calculate the prev value for a string. 'b' becomes 'a'. 'B' becomes 'A'. 2
	     * becomes 1, 0 becomes 9, etc. If multiple character strings are passed, 'bb'
	     * would become 'aa'.
	     *
	     * @function prev
	     * @param  {(string|number)} value - The string or number to convert.
	     * @return {string} - The formatted string
	     * @memberof Helpers.Value
	     */

	    function prev(value) {
	      var converted = value.toString().split('').map(function (_char4) {
	        return stringFromCharCodeBy(_char4, function (range, code) {
	          return !range || code > range.min ? code - 1 : range.max;
	        });
	      }).join('');
	      return format(converted, _typeof(value));
	    }

	    var FaceValue =
	    /*#__PURE__*/
	    function (_Component) {
	      _inherits(FaceValue, _Component);

	      /**
	       * The `FaceValue` class handles all the digitizing for the `Face`.
	       *
	       * @class FaceValue
	       * @extends Component
	       * @param {*} value - The `FaceValue`'s actual value. Most likely should
	       *     string, number, or Date. But since the Face handles the value, it
	       *     could be anything.
	       * @param {(object|undefined)} [attributes] - The instance attributes.
	       */
	      function FaceValue(value, attributes) {
	        var _this;

	        _classCallCheck(this, FaceValue);

	        _this = _possibleConstructorReturn(this, _getPrototypeOf(FaceValue).call(this, Object.assign({
	          format: function format(value) {
	            return value;
	          },
	          prependLeadingZero: true,
	          minimumDigits: 0
	        }, attributes)));

	        if (!_this.value) {
	          _this.value = value;
	        }

	        return _this;
	      }
	      /**
	       * The `digits` attribute.
	       *
	       * @type {(Array|undefined)}
	       */


	      _createClass(FaceValue, [{
	        key: "isNaN",

	        /**
	         * Returns `true` if the `value` attribute is not a number.
	         *
	         * @return {boolean} - `true` is the value is not a number.
	         */
	        value: function (_isNaN) {
	          function isNaN() {
	            return _isNaN.apply(this, arguments);
	          }

	          isNaN.toString = function () {
	            return _isNaN.toString();
	          };

	          return isNaN;
	        }(function () {
	          return isNaN(this.value);
	        })
	        /**
	         * Returns `true` if the `value` attribute is a number.
	         *
	         * @return {boolean} - `true` is the value is a number.
	         */

	      }, {
	        key: "isNumber",
	        value: function isNumber$$1() {
	          return isNumber();
	        }
	        /**
	         * Clones the current `FaceValue` instance, but sets a new value to the
	         * cloned instance. Used for copying the current instance options and
	         * methods, but setting a new value.
	         *
	         * @param  {*} value - The n
	         * @param {(object|undefined)} [attributes] - The instance attributes.
	         * @return {FaceValue} - The cloned `FaceValue`.
	         */

	      }, {
	        key: "clone",
	        value: function clone(value, attributes) {
	          return new this.constructor(value, Object.assign(this.getPublicAttributes(), attributes));
	        }
	        /**
	         * Define the name of the class.
	         *
	         * @return {string}
	         */

	      }, {
	        key: "digits",
	        get: function get() {
	          return this.$digits;
	        },
	        set: function set(value) {
	          this.$digits = value;
	          this.minimumDigits = Math.max(this.minimumDigits, length(value));
	        }
	        /**
	         * The `value` attribute.
	         *
	         * @type {*}
	         */

	      }, {
	        key: "value",
	        get: function get() {
	          return this.$value;
	        },
	        set: function set(value) {
	          this.$value = value;
	          this.digits = digitize(this.format(value), {
	            minimumDigits: this.minimumDigits,
	            prependLeadingZero: this.prependLeadingZero
	          });
	        }
	      }], [{
	        key: "defineName",
	        value: function defineName() {
	          return 'FaceValue';
	        }
	      }]);

	      return FaceValue;
	    }(Component);

	    /**
	     * Validate the data type of a variable.
	     *
	     * @function validate
	     * @param {*} value - The value to validate.
	     * @param {...*} args - The data types to use for validate.
	     * @return {boolean} - Returns `true`is the value has a valid data type.
	     * @memberof Helpers.Validate
	     */

	    function validate(value) {
	      var success = false;

	      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	        args[_key - 1] = arguments[_key];
	      }

	      flatten(args).forEach(function (arg) {
	        if (isNull(value) && isNull(arg) || isObject(arg) && value instanceof arg || isFunction(arg) && !isConstructor(arg) && arg(value) === true || isString(arg) && _typeof(value) === arg) {
	          success = true;
	        }
	      });
	      return success;
	    }

	    /**
	     * @alias ConsoleMessages
	     * @type {object}
	     * @memberof module:Config/ConsoleMessages
	     */
	    var ConsoleMessages = {
	      className: 'The className() is not defined.',
	      items: 'The items property must be an array.',
	      theme: 'The theme property must be an object.',
	      language: 'The language must be an object.',
	      date: 'The value must be an instance of a Date.',
	      face: 'The face must be an instance of a Face class.',
	      element: 'The element must be an instance of an HTMLElement',
	      faceValue: 'The face must be an instance of a FaceValue class.',
	      timer: 'The timer property must be an instance of a Timer class.'
	    };

	    var Face =
	    /*#__PURE__*/
	    function (_Component) {
	      _inherits(Face, _Component);

	      /**
	       * This class is meant to be provide an interface for all other faces to
	       * extend.
	       *
	       * @class Face
	       * @extends Component
	       * @param {(FaceValue|object)} value - The `Face` value. If not an instance
	       *     of FaceValue, this argument is assumed to be the instance attributes.
	       * @param {(object|undefined)} [attributes] - The instance attributes.
	       */
	      function Face(value, attributes) {
	        var _this;

	        _classCallCheck(this, Face);

	        if (!(value instanceof FaceValue) && isObject(value)) {
	          attributes = value;
	          value = undefined;
	        }

	        _this = _possibleConstructorReturn(this, _getPrototypeOf(Face).call(this));

	        _this.setAttributes(Object.assign({
	          autoStart: true,
	          countdown: false,
	          animationRate: 500
	        }, _this.defaultAttributes(), attributes || {}));

	        if (isNull(value) || isUndefined(value)) {
	          value = _this.defaultValue();
	        }

	        if (value) {
	          _this.value = value;
	        }

	        return _this;
	      }
	      /**
	       * The `dataType` attribute.
	       *
	       * @type {*}
	       */


	      _createClass(Face, [{
	        key: "interval",

	        /**
	         * This method is called with every interval, or every time the clock
	         * should change, and handles the actual incrementing and decrementing the
	         * clock's `FaceValue`.
	         *
	         * @param  {FlipClock} instance - The `FlipClock` instance.
	         * @param  {Function} fn - The interval callback.
	         * @return {Face} - This `Face` instance.
	         */
	        value: function interval(instance, fn) {
	          if (this.countdown) {
	            this.decrement(instance);
	          } else {
	            this.increment(instance);
	          }

	          callback.call(this, fn);

	          if (this.shouldStop(instance)) {
	            instance.stop();
	          }

	          return this.emit('interval');
	        }
	        /**
	         * Determines if the clock should stop or not.
	         *
	         * @param  {FlipClock} instance - The `FlipClock` instance.
	         * @return {boolean} - Returns `true` if the clock should stop.
	         */

	      }, {
	        key: "shouldStop",
	        value: function shouldStop(instance) {
	          return !isUndefined(this.stopAt) ? this.stopAt === instance.value.value : false;
	        }
	        /**
	         * By default this just returns the value unformatted.
	         *
	         * @param  {FlipClock} instance - The `FlipClock` instance.
	         * @param  {*} value - The value to format.
	         * @return {*} - The formatted value.
	         */

	      }, {
	        key: "format",
	        value: function format(instance, value) {
	          return value;
	        }
	        /**
	         * The default value for the `Face`.
	         *
	         * @return {*} - The default value.
	         */

	      }, {
	        key: "defaultValue",
	        value: function defaultValue() {} //

	        /**
	         * The default attributes for the `Face`.
	         *
	         * @return {(Object|undefined)} - The default attributes.
	         */

	      }, {
	        key: "defaultAttributes",
	        value: function defaultAttributes() {} //

	        /**
	         * The default data type for the `Face` value.
	         *
	         * @return {(Object|undefined)} - The default data type.
	         */

	      }, {
	        key: "defaultDataType",
	        value: function defaultDataType() {} //

	        /**
	         * Increment the clock.
	         *
	         * @param  {FlipClock} instance - The `FlipClock` instance.
	         * @param  {Number} [amount] - The amount to increment. If the amount is not
	         *     defined, it is left up to the `Face` to determine the default value.
	         * @return {void}
	         */

	      }, {
	        key: "increment",
	        value: function increment(instance, amount) {} //

	        /**
	         * Decrement the clock.
	         *
	         * @param  {FlipClock} instance - The `FlipClock` instance.
	         * @param  {Number} [amount] - The amount to decrement. If the amount is not
	         *     defined, it is left up to the `Face` to determine the default value.
	         * @return {void}
	         */

	      }, {
	        key: "decrement",
	        value: function decrement(instance, amount) {} //

	        /**
	         * This method is called right after clock has started.
	         *
	         * @param  {FlipClock} instance - The `FlipClock` instance.
	         * @return {void}
	         */

	      }, {
	        key: "started",
	        value: function started(instance) {} //

	        /**
	         * This method is called right after clock has stopped.
	         *
	         * @param  {FlipClock} instance - The `FlipClock` instance.
	         * @return {void}
	         */

	      }, {
	        key: "stopped",
	        value: function stopped(instance) {} //

	        /**
	         * This method is called right after clock has reset.
	         *
	         * @param  {FlipClock} instance - The `FlipClock` instance.
	         * @return {void}
	         */

	      }, {
	        key: "reset",
	        value: function reset(instance) {} //

	        /**
	         * This method is called right after `Face` has initialized.
	         *
	         * @param  {FlipClock} instance - The `FlipClock` instance.
	         * @return {void}
	         */

	      }, {
	        key: "initialized",
	        value: function initialized(instance) {} //

	        /**
	         * This method is called right after `Face` has rendered.
	         *
	         * @param  {FlipClock} instance - The `FlipClock` instance.
	         * @return {void}
	         */

	      }, {
	        key: "rendered",
	        value: function rendered(instance) {} //

	        /**
	         * This method is called right after `Face` has mounted.
	         *
	         * @param  {FlipClock} instance - The `FlipClock` instance.
	         * @return {void}
	         */

	      }, {
	        key: "mounted",
	        value: function mounted(instance) {
	          if (this.autoStart && instance.timer.isStopped) {
	            window.requestAnimationFrame(function () {
	              return instance.start(instance);
	            });
	          }
	        }
	        /**
	         * Helper method to instantiate a new `FaceValue`.
	         *
	         * @param  {FlipClock} instance - The `FlipClock` instance.
	         * @param  {object|undefined} [attributes] - The attributes passed to the
	         *     `FaceValue` instance.
	         * @return {Divider} - The instantiated `FaceValue`.
	         */

	      }, {
	        key: "createFaceValue",
	        value: function createFaceValue(instance, value) {
	          var _this2 = this;

	          return FaceValue.make(isFunction(value) && !value.name ? value() : value, {
	            minimumDigits: this.minimumDigits,
	            format: function format(value) {
	              return _this2.format(instance, value);
	            }
	          });
	        }
	      }, {
	        key: "dataType",
	        get: function get() {
	          return this.defaultDataType();
	        }
	        /**
	         * The `value` attribute.
	         *
	         * @type {*}
	         */

	      }, {
	        key: "value",
	        get: function get() {
	          return this.$value;
	        },
	        set: function set(value) {
	          if (!(value instanceof FaceValue)) {
	            value = this.createFaceValue(value);
	          }

	          this.$value = value;
	        }
	        /**
	         * The `stopAt` attribute.
	         *
	         * @type {*}
	         */

	      }, {
	        key: "stopAt",
	        get: function get() {
	          return this.$stopAt;
	        },
	        set: function set(value) {
	          this.$stopAt = value;
	        }
	        /**
	         * The `originalValue` attribute.
	         *
	         * @type {*}
	         */

	      }, {
	        key: "originalValue",
	        get: function get() {
	          return this.$originalValue;
	        },
	        set: function set(value) {
	          this.$originalValue = value;
	        }
	      }]);

	      return Face;
	    }(Component);

	    /**
	     * @classdesc Arabic Language Pack
	     * @desc This class will be used to translate tokens into the Arabic language.
	     * @namespace Languages.Arabic
	     */

	    /**
	     * @constant dictionary
	     * @type {object}
	     * @memberof Languages.Arabic
	     */
	    var dictionary = {
	      'years': 'سنوات',
	      'months': 'شهور',
	      'days': 'أيام',
	      'hours': 'ساعات',
	      'minutes': 'دقائق',
	      'seconds': 'ثواني'
	    };
	    /**
	     * @constant aliases
	     * @type {array}
	     * @memberof Languages.Arabic
	     */

	    var aliases = ['ar', 'ar-ar', 'arabic'];

	    var arAr = /*#__PURE__*/Object.freeze({
	        dictionary: dictionary,
	        aliases: aliases
	    });

	    /**
	     * @classdesc Catalan Language Pack
	     * @desc This class will used to translate tokens into the Catalan language.
	     * @namespace Languages.Catalan
	     */

	    /**
	     * @constant dictionary
	     * @type {object}
	     * @memberof Languages.Catalan
	     */
	    var dictionary$1 = {
	      'years': 'Anys',
	      'months': 'Mesos',
	      'days': 'Dies',
	      'hours': 'Hores',
	      'minutes': 'Minuts',
	      'seconds': 'Segons'
	    };
	    /**
	     * @constant aliases
	     * @type {array}
	     * @memberof Languages.Catalan
	     */

	    var aliases$1 = ['ca', 'ca-es', 'catalan'];

	    var caEs = /*#__PURE__*/Object.freeze({
	        dictionary: dictionary$1,
	        aliases: aliases$1
	    });

	    /**
	     * @classdesc Czech Language Pack
	     * @desc This class will used to translate tokens into the Czech language.
	     * @namespace Languages.Czech
	     */

	    /**
	     * @constant dictionary
	     * @type {object}
	     * @memberof Languages.Czech
	     */
	    var dictionary$2 = {
	      'years': 'Roky',
	      'months': 'Měsíce',
	      'days': 'Dny',
	      'hours': 'Hodiny',
	      'minutes': 'Minuty',
	      'seconds': 'Sekundy'
	    };
	    /**
	     * @constant aliases
	     * @type {array}
	     * @memberof Languages.Czech
	     */

	    var aliases$2 = ['cs', 'cs-cz', 'cz', 'cz-cs', 'czech'];

	    var csCz = /*#__PURE__*/Object.freeze({
	        dictionary: dictionary$2,
	        aliases: aliases$2
	    });

	    /**
	     * @classdesc Danish Language Pack
	     * @desc This class will used to translate tokens into the Danish language.
	     * @namespace Languages.Danish
	     */

	    /**
	     * @constant dictionary
	     * @type {object}
	     * @memberof Languages.Danish
	     */
	    var dictionary$3 = {
	      'years': 'År',
	      'months': 'Måneder',
	      'days': 'Dage',
	      'hours': 'Timer',
	      'minutes': 'Minutter',
	      'seconds': 'Sekunder'
	    };
	    /**
	     * @constant aliases
	     * @type {array}
	     * @memberof Languages.Danish
	     */

	    var aliases$3 = ['da', 'da-dk', 'danish'];

	    var daDk = /*#__PURE__*/Object.freeze({
	        dictionary: dictionary$3,
	        aliases: aliases$3
	    });

	    /**
	     * @classdesc German Language Pack
	     * @desc This class will used to translate tokens into the German language.
	     * @namespace Languages.German
	     */

	    /**
	     * @constant dictionary
	     * @type {object}
	     * @memberof Languages.German
	     */
	    var dictionary$4 = {
	      'years': 'Jahre',
	      'months': 'Monate',
	      'days': 'Tage',
	      'hours': 'Stunden',
	      'minutes': 'Minuten',
	      'seconds': 'Sekunden'
	    };
	    /**
	     * @constant aliases
	     * @type {array}
	     * @memberof Languages.German
	     */

	    var aliases$4 = ['de', 'de-de', 'german'];

	    var deDe = /*#__PURE__*/Object.freeze({
	        dictionary: dictionary$4,
	        aliases: aliases$4
	    });

	    /**
	     * @classdesc English Language Pack
	     * @desc This class will used to translate tokens into the English language.
	     * @namespace Languages.English
	     */

	    /**
	     * @constant dictionary
	     * @type {object}
	     * @memberof Languages.English
	     */
	    var dictionary$5 = {
	      'years': 'Years',
	      'months': 'Months',
	      'days': 'Days',
	      'hours': 'Hours',
	      'minutes': 'Minutes',
	      'seconds': 'Seconds'
	    };
	    /**
	     * @constant aliases
	     * @type {array}
	     * @memberof Languages.English
	     */

	    var aliases$5 = ['en', 'en-us', 'english'];

	    var English = /*#__PURE__*/Object.freeze({
	        dictionary: dictionary$5,
	        aliases: aliases$5
	    });

	    /**
	     * @classdesc Spanish Language Pack
	     * @desc This class will used to translate tokens into the Spanish language.
	     * @namespace Languages.Spanish
	     */

	    /**
	     * @constant dictionary
	     * @type {object}
	     * @memberof Languages.Spanish
	     */
	    var dictionary$6 = {
	      'years': 'Años',
	      'months': 'Meses',
	      'days': 'Días',
	      'hours': 'Horas',
	      'minutes': 'Minutos',
	      'seconds': 'Segundos'
	    };
	    /**
	     * @constant aliases
	     * @type {array}
	     * @memberof Languages.Spanish
	     */

	    var aliases$6 = ['es', 'es-es', 'spanish'];

	    var esEs = /*#__PURE__*/Object.freeze({
	        dictionary: dictionary$6,
	        aliases: aliases$6
	    });

	    /**
	     * @classdesc Persian Language Pack
	     * @desc This class will used to translate tokens into the Persian language.
	     * @namespace Languages.Persian
	     */

	    /**
	     * @constant dictionary
	     * @type {object}
	     * @memberof Languages.Persian
	     */
	    var dictionary$7 = {
	      'years': 'سال',
	      'months': 'ماه',
	      'days': 'روز',
	      'hours': 'ساعت',
	      'minutes': 'دقیقه',
	      'seconds': 'ثانیه'
	    };
	    /**
	     * @constant aliases
	     * @type {array}
	     * @memberof Languages.Persian
	     */

	    var aliases$7 = ['fa', 'fa-ir', 'persian'];

	    var faIr = /*#__PURE__*/Object.freeze({
	        dictionary: dictionary$7,
	        aliases: aliases$7
	    });

	    /**
	     * @classdesc Finnish Language Pack
	     * @desc This class will used to translate tokens into the Finnish language.
	     * @namespace Languages.Finnish
	     */

	    /**
	     * @constant dictionary
	     * @type {object}
	     * @memberof Languages.Finnish
	     */
	    var dictionary$8 = {
	      'years': 'Vuotta',
	      'months': 'Kuukautta',
	      'days': 'Päivää',
	      'hours': 'Tuntia',
	      'minutes': 'Minuuttia',
	      'seconds': 'Sekuntia'
	    };
	    /**
	     * @constant aliases
	     * @type {array}
	     * @memberof Languages.Finnish
	     */

	    var aliases$8 = ['fi', 'fi-fi', 'finnish'];

	    var fiFi = /*#__PURE__*/Object.freeze({
	        dictionary: dictionary$8,
	        aliases: aliases$8
	    });

	    /**
	     * @classdesc Canadian French Language Pack
	     * @desc This class will used to translate tokens into the Canadian French language.
	     * @namespace Languages.CanadianFrench
	     */

	    /**
	     * @constant dictionary
	     * @type {object}
	     * @memberof Languages.CanadianFrench
	     */
	    var dictionary$9 = {
	      'years': 'Ans',
	      'months': 'Mois',
	      'days': 'Jours',
	      'hours': 'Heures',
	      'minutes': 'Minutes',
	      'seconds': 'Secondes'
	    };
	    /**
	     * @constant aliases
	     * @type {array}
	     * @memberof Languages.CanadianFrench
	     */

	    var aliases$9 = ['fr', 'fr-ca', 'french'];

	    var frCa = /*#__PURE__*/Object.freeze({
	        dictionary: dictionary$9,
	        aliases: aliases$9
	    });

	    /**
	     * @classdesc Hebrew Language Pack
	     * @desc This class will used to translate tokens into the Hebrew language.
	     * @namespace Languages.Hebrew
	     */

	    /**
	     * @constant dictionary
	     * @type {object}
	     * @memberof Languages.Hebrew
	     */
	    var dictionary$10 = {
	      'years': 'שנים',
	      'months': 'חודש',
	      'days': 'ימים',
	      'hours': 'שעות',
	      'minutes': 'דקות',
	      'seconds': 'שניות'
	    };
	    /**
	     * @constant aliases
	     * @type {array}
	     * @memberof Languages.Hebrew
	     */

	    var aliases$10 = ['il', 'he-il', 'hebrew'];

	    var heIl = /*#__PURE__*/Object.freeze({
	        dictionary: dictionary$10,
	        aliases: aliases$10
	    });

	    /**
	     * @classdesc Hungarian Language Pack
	     * @desc This class will used to translate tokens into the Hungarian language.
	     * @namespace Languages.Hungarian
	     */

	    /**
	     * @constant dictionary
	     * @type {object}
	     * @memberof Languages.Hungarian
	     */
	    var dictionary$11 = {
	      'years': 'Év',
	      'months': 'Hónap',
	      'days': 'Nap',
	      'hours': 'Óra',
	      'minutes': 'Perc',
	      'seconds': 'Másodperc'
	    };
	    /**
	     * @constant aliases
	     * @type {array}
	     * @memberof Languages.Hungarian
	     */

	    var aliases$11 = ['hu', 'hu-hu', 'hungarian'];

	    var huHu = /*#__PURE__*/Object.freeze({
	        dictionary: dictionary$11,
	        aliases: aliases$11
	    });

	    /**
	     * @classdesc Italian Language Pack
	     * @desc This class will used to translate tokens into the Italian language.
	     * @namespace Languages.Italian
	     */

	    /**
	     * @constant dictionary
	     * @type {object}
	     * @memberof Languages.Italian
	     */
	    var dictionary$12 = {
	      'years': 'Anni',
	      'months': 'Mesi',
	      'days': 'Giorni',
	      'hours': 'Ore',
	      'minutes': 'Minuti',
	      'seconds': 'Secondi'
	    };
	    /**
	     * @constant aliases
	     * @type {array}
	     * @memberof Languages.Italian
	     */

	    var aliases$12 = ['da', 'da-dk', 'danish'];

	    var itIt = /*#__PURE__*/Object.freeze({
	        dictionary: dictionary$12,
	        aliases: aliases$12
	    });

	    /**
	     * @classdesc Japanese Language Pack
	     * @desc This class will used to translate tokens into the Japanese language.
	     * @namespace Languages.Japanese
	     */

	    /**
	     * @constant dictionary
	     * @type {object}
	     * @memberof Languages.Japanese
	     */
	    var dictionary$13 = {
	      'years': '年',
	      'months': '月',
	      'days': '日',
	      'hours': '時',
	      'minutes': '分',
	      'seconds': '秒'
	    };
	    /**
	     * @constant aliases
	     * @type {array}
	     * @memberof Languages.Japanese
	     */

	    var aliases$13 = ['jp', 'ja-jp', 'japanese'];

	    var jaJp = /*#__PURE__*/Object.freeze({
	        dictionary: dictionary$13,
	        aliases: aliases$13
	    });

	    /**
	     * @classdesc Korean Language Pack
	     * @desc This class will used to translate tokens into the Korean language.
	     * @namespace Languages.Korean
	     */

	    /**
	     * @constant dictionary
	     * @type {object}
	     * @memberof Languages.Korean
	     */
	    var dictionary$14 = {
	      'years': '년',
	      'months': '월',
	      'days': '일',
	      'hours': '시',
	      'minutes': '분',
	      'seconds': '초'
	    };
	    /**
	     * @constant aliases
	     * @type {array}
	     * @memberof Languages.Korean
	     */

	    var aliases$14 = ['ko', 'ko-kr', 'korean'];

	    var koKr = /*#__PURE__*/Object.freeze({
	        dictionary: dictionary$14,
	        aliases: aliases$14
	    });

	    /**
	     * @classdesc Latvian Language Pack
	     * @desc This class will used to translate tokens into the Latvian language.
	     * @namespace Languages.Latvian
	     */

	    /**
	     * @constant dictionary
	     * @type {object}
	     * @memberof Languages.Latvian
	     */
	    var dictionary$15 = {
	      'years': 'Gadi',
	      'months': 'Mēneši',
	      'days': 'Dienas',
	      'hours': 'Stundas',
	      'minutes': 'Minūtes',
	      'seconds': 'Sekundes'
	    };
	    /**
	     * @constant aliases
	     * @type {array}
	     * @memberof Languages.Latvian
	     */

	    var aliases$15 = ['lv', 'lv-lv', 'latvian'];

	    var lvLv = /*#__PURE__*/Object.freeze({
	        dictionary: dictionary$15,
	        aliases: aliases$15
	    });

	    /**
	     * @classdesc Dutch Language Pack
	     * @desc This class will used to translate tokens into the Dutch language.
	     * @namespace Languages.Dutch
	     */

	    /**
	     * @constant dictionary
	     * @type {object}
	     * @memberof Languages.Dutch
	     */
	    var dictionary$16 = {
	      'years': 'Jaren',
	      'months': 'Maanden',
	      'days': 'Dagen',
	      'hours': 'Uren',
	      'minutes': 'Minuten',
	      'seconds': 'Seconden'
	    };
	    /**
	     * @constant aliases
	     * @type {array}
	     * @memberof Languages.Dutch
	     */

	    var aliases$16 = ['nl', 'nl-be', 'dutch'];

	    var nlBe = /*#__PURE__*/Object.freeze({
	        dictionary: dictionary$16,
	        aliases: aliases$16
	    });

	    /**
	     * @classdesc Norwegian-Bokmål Language Pack
	     * @desc This class will used to translate tokens into the Norwegian-Bokmål language.
	     * @namespace Languages.Norwegian
	     */

	    /**
	     * @constant dictionary
	     * @type {object}
	     * @memberof Languages.Norwegian
	     */
	    var dictionary$17 = {
	      'years': 'År',
	      'months': 'Måneder',
	      'days': 'Dager',
	      'hours': 'Timer',
	      'minutes': 'Minutter',
	      'seconds': 'Sekunder'
	    };
	    /**
	     * @constant aliases
	     * @type {array}
	     * @memberof Languages.Norwegian
	     */

	    var aliases$17 = ['no', 'nb', 'no-nb', 'norwegian'];

	    var noNb = /*#__PURE__*/Object.freeze({
	        dictionary: dictionary$17,
	        aliases: aliases$17
	    });

	    /**
	     * @classdesc Polish Language Pack
	     * @desc This class will used to translate tokens into the Polish language.
	     * @namespace Languages.Polish
	     */

	    /**
	     * @constant dictionary
	     * @type {object}
	     * @memberof Languages.Polish
	     */
	    var dictionary$18 = {
	      'years': 'Lat',
	      'months': 'Miesięcy',
	      'days': 'Dni',
	      'hours': 'Godziny',
	      'minutes': 'Minuty',
	      'seconds': 'Sekundy'
	    };
	    /**
	     * @constant aliases
	     * @type {array}
	     * @memberof Languages.Polish
	     */

	    var aliases$18 = ['pl', 'pl-pl', 'polish'];

	    var plPl = /*#__PURE__*/Object.freeze({
	        dictionary: dictionary$18,
	        aliases: aliases$18
	    });

	    /**
	     * @classdesc Portuguese Language Pack
	     * @desc This class will used to translate tokens into the Portuguese language.
	     * @namespace Languages.Portuguese
	     */

	    /**
	     * @constant dictionary
	     * @type {object}
	     * @memberof Languages.Portuguese
	     */
	    var dictionary$19 = {
	      'years': 'Anos',
	      'months': 'Meses',
	      'days': 'Dias',
	      'hours': 'Horas',
	      'minutes': 'Minutos',
	      'seconds': 'Segundos'
	    };
	    /**
	     * @constant aliases
	     * @type {array}
	     * @memberof Languages.Portuguese
	     */

	    var aliases$19 = ['pt', 'pt-br', 'portuguese'];

	    var ptBr = /*#__PURE__*/Object.freeze({
	        dictionary: dictionary$19,
	        aliases: aliases$19
	    });

	    /**
	     * @classdesc Romanian Language Pack
	     * @desc This class will used to translate tokens into the Romanian language.
	     * @namespace Languages.Romanian
	     */

	    /**
	     * @constant dictionary
	     * @type {object}
	     * @memberof Languages.Romanian
	     */
	    var dictionary$20 = {
	      'years': 'Ani',
	      'months': 'Luni',
	      'days': 'Zile',
	      'hours': 'Ore',
	      'minutes': 'Minute',
	      'seconds': 'sSecunde'
	    };
	    /**
	     * @constant aliases
	     * @type {array}
	     * @memberof Languages.Romanian
	     */

	    var aliases$20 = ['ro', 'ro-ro', 'romana'];

	    var roRo = /*#__PURE__*/Object.freeze({
	        dictionary: dictionary$20,
	        aliases: aliases$20
	    });

	    /**
	     * @classdesc Russian Language Pack
	     * @desc This class will used to translate tokens into the Russian language.
	     * @namespace Languages.Russian
	     */

	    /**
	     * @constant dictionary
	     * @type {object}
	     * @memberof Languages.Russian
	     */
	    var dictionary$21 = {
	      'years': 'лет',
	      'months': 'месяцев',
	      'days': 'дней',
	      'hours': 'часов',
	      'minutes': 'минут',
	      'seconds': 'секунд'
	    };
	    /**
	     * @constant aliases
	     * @type {array}
	     * @memberof Languages.Russian
	     */

	    var aliases$21 = ['ru', 'ru-ru', 'russian'];

	    var ruRu = /*#__PURE__*/Object.freeze({
	        dictionary: dictionary$21,
	        aliases: aliases$21
	    });

	    /**
	     * @classdesc Slovak Language Pack
	     * @desc This class will used to translate tokens into the Slovak language.
	     * @namespace Languages.Slovak
	     */

	    /**
	     * @constant dictionary
	     * @type {object}
	     * @memberof Languages.Slovak
	     */
	    var dictionary$22 = {
	      'years': 'Roky',
	      'months': 'Mesiace',
	      'days': 'Dni',
	      'hours': 'Hodiny',
	      'minutes': 'Minúty',
	      'seconds': 'Sekundy'
	    };
	    /**
	     * @constant aliases
	     * @type {array}
	     * @memberof Languages.Slovak
	     */

	    var aliases$22 = ['sk', 'sk-sk', 'slovak'];

	    var skSk = /*#__PURE__*/Object.freeze({
	        dictionary: dictionary$22,
	        aliases: aliases$22
	    });

	    /**
	     * @classdesc Swedish Language Pack
	     * @desc This class will used to translate tokens into the Swedish language.
	     * @namespace Languages.Swedish
	     */

	    /**
	     * @constant dictionary
	     * @type {object}
	     * @memberof Languages.Swedish
	     */
	    var dictionary$23 = {
	      'years': 'År',
	      'months': 'Månader',
	      'days': 'Dagar',
	      'hours': 'Timmar',
	      'minutes': 'Minuter',
	      'seconds': 'Sekunder'
	    };
	    /**
	     * @constant aliases
	     * @type {array}
	     * @memberof Languages.Swedish
	     */

	    var aliases$23 = ['sv', 'sv-se', 'swedish'];

	    var svSe = /*#__PURE__*/Object.freeze({
	        dictionary: dictionary$23,
	        aliases: aliases$23
	    });

	    /**
	     * @classdesc Thai Language Pack
	     * @desc This class will used to translate tokens into the Thai language.
	     * @namespace Languages.Thai
	     */

	    /**
	     * @constant dictionary
	     * @type {object}
	     * @memberof Languages.Thai
	     */
	    var dictionary$24 = {
	      'years': 'ปี',
	      'months': 'เดือน',
	      'days': 'วัน',
	      'hours': 'ชั่วโมง',
	      'minutes': 'นาที',
	      'seconds': 'วินาที'
	    };
	    /**
	     * @constant aliases
	     * @type {array}
	     * @memberof Languages.Thai
	     */

	    var aliases$24 = ['th', 'th-th', 'thai'];

	    var thTh = /*#__PURE__*/Object.freeze({
	        dictionary: dictionary$24,
	        aliases: aliases$24
	    });

	    /**
	     * @classdesc Turkish Language Pack
	     * @desc This class will used to translate tokens into the Turkish language.
	     * @namespace Languages.Turkish
	     */

	    /**
	     * @constant dictionary
	     * @type {object}
	     * @memberof Languages.Turkish
	     */
	    var dictionary$25 = {
	      'years': 'Yıl',
	      'months': 'Ay',
	      'days': 'Gün',
	      'hours': 'Saat',
	      'minutes': 'Dakika',
	      'seconds': 'Saniye'
	    };
	    /**
	     * @constant aliases
	     * @type {array}
	     * @memberof Languages.Turkish
	     */

	    var aliases$25 = ['tr', 'tr-tr', 'turkish'];

	    var trTr = /*#__PURE__*/Object.freeze({
	        dictionary: dictionary$25,
	        aliases: aliases$25
	    });

	    /**
	     * @classdesc Ukrainian Language Pack
	     * @desc This class will used to translate tokens into the Ukrainian language.
	     * @namespace Languages.Ukrainian
	     */

	    /**
	     * @constant dictionary
	     * @type {object}
	     * @memberof Languages.Ukrainian
	     */
	    var dictionary$26 = {
	      'years': 'роки',
	      'months': 'місяці',
	      'days': 'дні',
	      'hours': 'години',
	      'minutes': 'хвилини',
	      'seconds': 'секунди'
	    };
	    /**
	     * @constant aliases
	     * @type {array}
	     * @memberof Languages.Ukrainian
	     */

	    var aliases$26 = ['ua', 'ua-ua', 'ukraine'];

	    var uaUa = /*#__PURE__*/Object.freeze({
	        dictionary: dictionary$26,
	        aliases: aliases$26
	    });

	    /**
	     * @classdesc Vietnamese Language Pack
	     * @desc This class will used to translate tokens into the Vietnamese language.
	     * @namespace Languages.Vietnamese
	     */

	    /**
	     * @constant dictionary
	     * @type {object}
	     * @memberof Languages.Vietnamese
	     */
	    var dictionary$27 = {
	      'years': 'Năm',
	      'months': 'Tháng',
	      'days': 'Ngày',
	      'hours': 'Giờ',
	      'minutes': 'Phút',
	      'seconds': 'Giây'
	    };
	    /**
	     * @constant aliases
	     * @type {array}
	     * @memberof Languages.Vietnamese
	     */

	    var aliases$27 = ['vn', 'vn-vn', 'vietnamese'];

	    var vnVn = /*#__PURE__*/Object.freeze({
	        dictionary: dictionary$27,
	        aliases: aliases$27
	    });

	    /**
	     * @classdesc Chinese Language Pack
	     * @desc This class will used to translate tokens into the Chinese language.
	     * @namespace Languages.Chinese
	     */

	    /**
	     * @constant dictionary
	     * @type {object}
	     * @memberof Languages.Chinese
	     */
	    var dictionary$28 = {
	      'years': '年',
	      'months': '月',
	      'days': '日',
	      'hours': '时',
	      'minutes': '分',
	      'seconds': '秒'
	    };
	    /**
	     * @constant aliases
	     * @type {array}
	     * @memberof Languages.Chinese
	     */

	    var aliases$28 = ['zh', 'zh-cn', 'chinese'];

	    var zhCn = /*#__PURE__*/Object.freeze({
	        dictionary: dictionary$28,
	        aliases: aliases$28
	    });

	    /**
	     * @classdesc Traditional Chinese Language Pack
	     * @desc This class will used to translate tokens into the Traditional Chinese language.
	     * @namespace Languages.TraditionalChinese
	     */

	    /**
	     * @constant dictionary
	     * @type {object}
	     * @memberof Languages.TraditionalChinese
	     */
	    var dictionary$29 = {
	      'years': '年',
	      'months': '月',
	      'days': '日',
	      'hours': '時',
	      'minutes': '分',
	      'seconds': '秒'
	    };
	    /**
	     * @constant aliases
	     * @type {array}
	     * @memberof Languages.TraditionalChinese
	     */

	    var aliases$29 = ['zh-tw'];

	    var zhTw = /*#__PURE__*/Object.freeze({
	        dictionary: dictionary$29,
	        aliases: aliases$29
	    });

	    /**
	     * @namespace Languages
	     */

	    var LANGUAGES = /*#__PURE__*/Object.freeze({
	        Arabic: arAr,
	        Catalan: caEs,
	        Czech: csCz,
	        Danish: daDk,
	        German: deDe,
	        English: English,
	        Spanish: esEs,
	        Persian: faIr,
	        Finnish: fiFi,
	        French: frCa,
	        Hebrew: heIl,
	        Hungarian: huHu,
	        Italian: itIt,
	        Japanese: jaJp,
	        Korean: koKr,
	        Latvian: lvLv,
	        Dutch: nlBe,
	        Norwegian: noNb,
	        Polish: plPl,
	        Portuguese: ptBr,
	        Romanian: roRo,
	        Russian: ruRu,
	        Slovak: skSk,
	        Swedish: svSe,
	        Thai: thTh,
	        Turkish: trTr,
	        Ukrainian: uaUa,
	        Vietnamese: vnVn,
	        Chinese: zhCn,
	        TraditionalChinese: zhTw
	    });

	    /**
	     * @namespace Helpers.Language
	     */
	    /**
	     * Return the language associated with the key. Returns `null` if no language is
	     * found.
	     * 
	     * @function language
	     * @param  {string} name - The name or id of the language.
	     * @return {object|null} - The language dictionary, or null if not found.
	     * @memberof Helpers.Language
	     */

	    function language(name) {
	      return name ? LANGUAGES[name.toLowerCase()] || Object.values(LANGUAGES).find(function (value) {
	        return value.aliases.indexOf(name) !== -1;
	      }) : null;
	    }

	    /**
	     * @namespace Helpers.Translate
	     */
	    /**
	     * Translate an English string into another language.
	     * 
	     * @function translate
	     * @param {string} string - The string to translate.
	     * @param {(string|object)} from - The language used to translate. If a string,
	     *     the language is loaded into an object.
	     * @return {string} - If no diction key is found, the untranslated string is
	     *     returned.
	     * @memberof Helpers.Translate
	     */

	    function translate(string, from) {
	      var lang = isString(from) ? language(from) : from;
	      var dictionary = lang.dictionary || lang;
	      return dictionary[string] || string;
	    }

	    /**
	     * A collection of functions to manage DOM nodes and theme templates.
	     *
	     * @namespace Helpers.Template
	     */
	    /**
	     * Swap a new DOM node with an existing one.
	     *
	     * @function swap
	     * @param  {HTMLElement} subject - The new DOM node.
	     * @param  {HTMLElement} existing - The existing DOM node.
	     * @return {HTMLElement} - Returns the new element if it was mounted, otherwise
	     *    the existing node is returned.
	     * @memberof Helpers.Template
	     */

	    function swap(subject, existing) {
	      if (existing.parentNode) {
	        existing.parentNode.replaceChild(subject, existing);
	        return subject;
	      }

	      return existing;
	    }
	    /**
	     * Set the attribute of an element.
	     *
	     * @function setAttributes
	     * @param  {HTMLElement} el - The DOM node that will receive the attributes.
	     * @param  {Object|undefined} [attributes] - The attribute object, or if no object
	     *     is passed, then the action is ignored.
	     * @return {HTMLElement} el - The DOM node that received the attributes.
	     * @memberof Helpers.Template
	     */

	    function setAttributes(el, attributes) {
	      if (isObject(attributes)) {
	        for (var i in attributes) {
	          el.setAttribute(i, attributes[i]);
	        }
	      }

	      return el;
	    }
	    /**
	     * Append an array of DOM nodes to a parent.
	     *
	     * @function appendChildren
	     * @param  {HTMLElement} el - The parent DOM node.
	     * @param  {Array|undefined} [children] - The array of children. If no array
	     *     is passed, then the method silently fails to run.
	     * @return {HTMLElement} el - The DOM node that received the attributes.
	     * @memberof Helpers.Template
	     */

	    function appendChildren(el, children) {
	      if (isArray(children)) {
	        children.filter(noop).forEach(function (child) {
	          if (child instanceof HTMLElement) {
	            el.appendChild(child);
	          }
	        });
	      }

	      return el;
	    }
	    /**
	     * Create a new HTMLElement instance.
	     *
	     * @function createElement
	     * @param  {HTMLElement} el - The parent DOM node.
	     * @param  {Array|undefined} [children] - The array of children. If no array
	     *     is passed, then the method silently fails to run.
	     * @param  {Object|undefined} [attributes] - The attributes object.
	     * @return {HTMLElement} el - The DOM node that received the attributes.
	     * @memberof Helpers.Template
	     */

	    function createElement(el, children, attributes) {
	      if (!(el instanceof HTMLElement)) {
	        el = document.createElement(el);
	      }

	      setAttributes(el, isObject(children) ? children : attributes);

	      if (!isObject(children) && !isArray(children)) {
	        el.innerHTML = children;
	      } else {
	        appendChildren(el, children);
	      }

	      return el;
	    }

	    var DomComponent =
	    /*#__PURE__*/
	    function (_Component) {
	      _inherits(DomComponent, _Component);

	      /**
	       * An abstract class that all other DOM components can extend.
	       *
	       * @class DomComponent
	       * @extends Component
	       * @param {(object|undefined)} [attributes] - The instance attributes.
	       */
	      function DomComponent(attributes) {
	        var _this;

	        _classCallCheck(this, DomComponent);

	        _this = _possibleConstructorReturn(this, _getPrototypeOf(DomComponent).call(this, Object.assign({
	          parent: null
	        }, attributes)));

	        if (!_this.theme) {
	          error("".concat(_this.name, " does not have a theme defined."));
	        }

	        if (!_this.language) {
	          error("".concat(_this.name, " does not have a language defined."));
	        }

	        if (!_this.theme[_this.name]) {
	          throw new Error("".concat(_this.name, " cannot be rendered because it has no template."));
	        }

	        return _this;
	      }
	      /**
	       * The `className` attribute. Used for CSS.
	       *
	       * @type {string}
	       */


	      _createClass(DomComponent, [{
	        key: "translate",

	        /**
	         * Translate a string.
	         *
	         * @param  {string} string - The string to translate.
	         * @return {string} - The translated string. If no tranlation found, the
	         *     untranslated string is returned.
	         */
	        value: function translate$$1(string) {
	          return translate(string, this.language);
	        }
	        /**
	         * Alias to translate(string);
	         *
	         * @alias DomComponent.translate
	         */

	      }, {
	        key: "t",
	        value: function t(string) {
	          return this.translate(string);
	        }
	        /**
	         * Render the DOM component.
	         *
	         * @return {HTMLElement} - The `el` attribute.
	         */

	      }, {
	        key: "render",
	        value: function render() {
	          var el = createElement('div', {
	            "class": this.className === 'flip-clock' ? this.className : 'flip-clock-' + this.className
	          });
	          this.theme[this.name](el, this);

	          if (!this.el) {
	            this.el = el;
	          } else if (this.el.innerHTML !== el.innerHTML) {
	            this.el = swap(el, this.el);
	          }

	          return this.el;
	        }
	        /**
	         * Mount a DOM component to a parent node.
	         *
	         * @param  {HTMLElement} parent - The parent DOM node.
	         * @param  {(false|HTMLElement)} [before=false] - If `false`, element is
	         *     appended to the parent node. If an instance of an `HTMLElement`,
	         *     the component will be inserted before the specified element.
	         * @return {HTMLElement} - The `el` attribute.
	         */

	      }, {
	        key: "mount",
	        value: function mount(parent) {
	          var before = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	          this.render();
	          this.parent = parent;

	          if (!before) {
	            this.parent.appendChild(this.el);
	          } else {
	            this.parent.insertBefore(this.el, before);
	          }

	          return this.el;
	        }
	      }, {
	        key: "className",
	        get: function get() {
	          return kebabCase(this.constructor.defineName());
	        }
	        /**
	         * The `el` attribute.
	         *
	         * @type {HTMLElement}
	         */

	      }, {
	        key: "el",
	        get: function get() {
	          return this.$el;
	        },
	        set: function set(value) {
	          if (!validate(value, null, HTMLElement)) {
	            error(ConsoleMessages.element);
	          }

	          this.$el = value;
	        }
	        /**
	         * The `parent` attribute. Parent is set when `DomComponent` instances are
	         * mounted.
	         *
	         * @type {DomComponent}
	         */

	      }, {
	        key: "parent",
	        get: function get() {
	          return this.$parent;
	        },
	        set: function set(parent) {
	          this.$parent = parent;
	        }
	        /**
	         * The `theme` attribute.
	         *
	         * @type {object}
	         */

	      }, {
	        key: "theme",
	        get: function get() {
	          return this.$theme;
	        },
	        set: function set(value) {
	          if (!validate(value, 'object')) {
	            error(ConsoleMessages.value);
	          }

	          this.$theme = value;
	        }
	        /**
	         * Get the language attribute.
	         *
	         * @type {object}
	         */

	      }, {
	        key: "language",
	        get: function get() {
	          return this.$language;
	        },
	        set: function set(value) {
	          if (isString(value)) {
	            value = language(value);
	          }

	          if (!validate(value, 'object')) {
	            error(ConsoleMessages.language);
	          }

	          this.$language = value;
	        }
	      }]);

	      return DomComponent;
	    }(Component);

	    /**
	     * Create a new `Divider` instance.
	     *
	     * The purpose of this class is to return a unique class name so the theme can
	     * render it appropriately, since each `DomComponent` can receive its own template
	     * from the theme.
	     *
	     * @class Divider
	     * @extends DomComponent
	     * @param {(object|undefined)} [attributes] - The instance attributes.
	     */

	    var Divider =
	    /*#__PURE__*/
	    function (_DomComponent) {
	      _inherits(Divider, _DomComponent);

	      function Divider() {
	        _classCallCheck(this, Divider);

	        return _possibleConstructorReturn(this, _getPrototypeOf(Divider).apply(this, arguments));
	      }

	      _createClass(Divider, null, [{
	        key: "defineName",

	        /**
	         * Define the name of the class.
	         *
	         * @return {string}
	         */
	        value: function defineName() {
	          return 'Divider';
	        }
	      }]);

	      return Divider;
	    }(DomComponent);

	    var ListItem =
	    /*#__PURE__*/
	    function (_DomComponent) {
	      _inherits(ListItem, _DomComponent);

	      /**
	       * This class is used to represent a single digits in a `List`.
	       *
	       * @class ListItem
	       * @extends DomComponent
	       * @param {(Number|String)} value - The value of the `ListItem`.
	       * @param {object|undefined} [attributes] - The instance attributes.
	       */
	      function ListItem(value, attributes) {
	        _classCallCheck(this, ListItem);

	        return _possibleConstructorReturn(this, _getPrototypeOf(ListItem).call(this, Object.assign({
	          value: value
	        }, isObject(value) ? value : null, attributes)));
	      }
	      /**
	       * Define the name of the class.
	       *
	       * @return {string}
	       */


	      _createClass(ListItem, null, [{
	        key: "defineName",
	        value: function defineName() {
	          return 'ListItem';
	        }
	      }]);

	      return ListItem;
	    }(DomComponent);

	    var List =
	    /*#__PURE__*/
	    function (_DomComponent) {
	      _inherits(List, _DomComponent);

	      /**
	       * This class is used to add a digit to the clock face. This class is called
	       * `List` because it contains a list of `ListItem`'s which are used to
	       * create flip effects. In the context of FlipClock.js a `List` represents
	       * one single digit.
	       *
	       * @class List
	       * @extends DomComponent
	       * @param {Number|String|Object} label - The active value. If an object, it
	       * is assumed that it is the instance attributes.
	       * @param {object|undefined} [attributes] - The instance attributes.
	       */
	      function List(value, attributes) {
	        _classCallCheck(this, List);

	        return _possibleConstructorReturn(this, _getPrototypeOf(List).call(this, Object.assign({
	          value: value,
	          items: []
	        }, isObject(value) ? value : null, attributes)));
	      }
	      /**
	       * Get the `value` attribute.
	       *
	       * @type {(Number|String)}
	       */


	      _createClass(List, [{
	        key: "createListItem",

	        /**
	         * Helper method to instantiate a new `ListItem`.
	         *
	         * @param  {(Number|String)} value - The `ListItem` value.
	         * @param  {(Object|undefined)} [attributes] - The instance attributes.
	         * @return {ListItem} - The instantiated `ListItem`.
	         */
	        value: function createListItem(value, attributes) {
	          var item = new ListItem(value, Object.assign({
	            theme: this.theme,
	            language: this.language
	          }, attributes));
	          this.$items.push(item);
	          return item;
	        }
	        /**
	         * Define the name of the class.
	         *
	         * @return {string}
	         */

	      }, {
	        key: "value",
	        get: function get() {
	          return this.$value;
	        },
	        set: function set(value) {
	          this.$value = value;
	        }
	        /**
	         * Get the `items` attribute.
	         *
	         * @type {(Number|String)}
	         */

	      }, {
	        key: "items",
	        get: function get() {
	          return this.$items;
	        },
	        set: function set(value) {
	          this.$items = value;
	        }
	      }], [{
	        key: "defineName",
	        value: function defineName() {
	          return 'List';
	        }
	      }]);

	      return List;
	    }(DomComponent);

	    var Group =
	    /*#__PURE__*/
	    function (_DomComponent) {
	      _inherits(Group, _DomComponent);

	      /**
	       * This class is used to group values within a clock face. How the groups
	       * are displayed is determined by the theme.
	       *
	       * @class Group
	       * @extends DomComponent
	       * @param {Array|Object} items - An array `List` instances or an object of
	       *     attributes. If not an array, assumed to be the attributes.
	       * @param {object|undefined} [attributes] - The instance attributes.
	       */
	      function Group(items, attributes) {
	        _classCallCheck(this, Group);

	        return _possibleConstructorReturn(this, _getPrototypeOf(Group).call(this, Object.assign({
	          items: isArray(items) ? items : []
	        }, isObject(items) ? items : null, attributes)));
	      }
	      /**
	       * Define the name of the class.
	       *
	       * @return {string}
	       */


	      _createClass(Group, null, [{
	        key: "defineName",
	        value: function defineName() {
	          return 'Group';
	        }
	      }]);

	      return Group;
	    }(DomComponent);

	    var Label =
	    /*#__PURE__*/
	    function (_DomComponent) {
	      _inherits(Label, _DomComponent);

	      /**
	       * This class is used to add a label to the clock face.
	       *
	       * @class Label
	       * @extends DomComponent
	       * @param {Number|String|Object} label - The label attribute. If an object,
	       *     it is assumed that it is the instance attributes.
	       * @param {object|undefined} [attributes] - The instance attributes.
	       */
	      function Label(label, attributes) {
	        _classCallCheck(this, Label);

	        return _possibleConstructorReturn(this, _getPrototypeOf(Label).call(this, Object.assign({
	          label: label
	        }, isObject(label) ? label : null, attributes)));
	      }
	      /**
	       * Define the name of the class.
	       *
	       * @return {string}
	       */


	      _createClass(Label, null, [{
	        key: "defineName",
	        value: function defineName() {
	          return 'Label';
	        }
	      }]);

	      return Label;
	    }(DomComponent);

	    var Timer =
	    /*#__PURE__*/
	    function (_Component) {
	      _inherits(Timer, _Component);

	      /**
	       * Create a new `Timer` instance.
	       *
	       * @class Timer
	       * @extends Component
	       * @param {(Object|Number)} interval - The interval passed as a `Number`,
	       *     or can set the attribute of the class with an object.
	       */
	      function Timer(interval) {
	        _classCallCheck(this, Timer);

	        return _possibleConstructorReturn(this, _getPrototypeOf(Timer).call(this, Object.assign({
	          count: 0,
	          handle: null,
	          started: null,
	          running: false,
	          interval: isNumber(interval) ? interval : null
	        }, isObject(interval) ? interval : null)));
	      }
	      /**
	       * The `elapsed` attribute.
	       *
	       * @type {Number}
	       */


	      _createClass(Timer, [{
	        key: "reset",

	        /**
	         * Resets the timer.
	         *
	         * @param  {(Function|undefined)} fn - The interval callback.
	         * @return {Timer} - The `Timer` instance.
	         */
	        value: function reset(fn) {
	          var _this = this;

	          this.stop(function () {
	            _this.count = 0;

	            _this.start(function () {
	              return callback.call(_this, fn);
	            });

	            _this.emit('reset');
	          });
	          return this;
	        }
	        /**
	         * Starts the timer.
	         *
	         * @param  {Function} fn - The interval callback.
	         * @return {Timer} - The `Timer` instance.
	         */

	      }, {
	        key: "start",
	        value: function start(fn) {
	          var _this2 = this;

	          this.started = new Date();
	          this.lastLoop = Date.now();
	          this.running = true;
	          this.emit('start');

	          var loop = function loop() {
	            if (Date.now() - _this2.lastLoop >= _this2.interval) {
	              callback.call(_this2, fn);
	              _this2.lastLoop = Date.now();

	              _this2.emit('interval');

	              _this2.count++;
	            }

	            _this2.handle = window.requestAnimationFrame(loop);
	            return _this2;
	          };

	          return loop();
	        }
	        /**
	         * Stops the timer.
	         *
	         * @param  {Function} fn - The stop callback.
	         * @return {Timer} - The `Timer` instance.
	         */

	      }, {
	        key: "stop",
	        value: function stop(fn) {
	          var _this3 = this;

	          if (this.isRunning) {
	            setTimeout(function () {
	              window.cancelAnimationFrame(_this3.handle);
	              _this3.running = false;
	              callback.call(_this3, fn);

	              _this3.emit('stop');
	            });
	          }

	          return this;
	        }
	        /**
	         * Define the name of the class.
	         *
	         * @return {string}
	         */

	      }, {
	        key: "elapsed",
	        get: function get() {
	          return !this.lastLoop ? 0 : this.lastLoop - (this.started ? this.started.getTime() : new Date().getTime());
	        }
	        /**
	         * The `isRunning` attribute.
	         *
	         * @type {boolean}
	         */

	      }, {
	        key: "isRunning",
	        get: function get() {
	          return this.running === true;
	        }
	        /**
	         * The `isStopped` attribute.
	         *
	         * @type {boolean}
	         */

	      }, {
	        key: "isStopped",
	        get: function get() {
	          return this.running === false;
	        }
	      }], [{
	        key: "defineName",
	        value: function defineName() {
	          return 'Timer';
	        }
	      }]);

	      return Timer;
	    }(Component);

	    /**
	     * @classdesc This face is designed to increment and decrement numberic values,
	     *     not `Date` objects.
	     * @extends Face
	     * @param {(FaceValue|object)} value - The `Face` value. If not an instance
	     *     of FaceValue, this argument is assumed to be the instance attributes.
	     * @param {(object|undefined)} [attributes] - The instance attributes.
	     * @memberof Faces
	     */

	    var Counter =
	    /*#__PURE__*/
	    function (_Face) {
	      _inherits(Counter, _Face);

	      function Counter() {
	        _classCallCheck(this, Counter);

	        return _possibleConstructorReturn(this, _getPrototypeOf(Counter).apply(this, arguments));
	      }

	      _createClass(Counter, [{
	        key: "increment",
	        value: function increment(instance) {
	          var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	          instance.value = this.value.value + value;
	        }
	      }, {
	        key: "decrement",
	        value: function decrement(instance) {
	          var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	          instance.value = this.value.value - value;
	        }
	        /**
	         * Define the name of the class.
	         *
	         * @return {string}
	         */

	      }], [{
	        key: "defineName",
	        value: function defineName() {
	          return 'Counter';
	        }
	      }]);

	      return Counter;
	    }(Face);

	    /**
	     * @classdesc This face is meant to display a clock that shows minutes, and
	     *     seconds.
	     * @extends Face
	     * @param {(FaceValue|object)} value - The `Face` value. If not an instance
	     *     of FaceValue, this argument is assumed to be the instance attributes.
	     * @param {(object|undefined)} [attributes] - The instance attributes.
	     * @memberof Faces
	     */

	    var MinuteCounter =
	    /*#__PURE__*/
	    function (_Face) {
	      _inherits(MinuteCounter, _Face);

	      function MinuteCounter() {
	        _classCallCheck(this, MinuteCounter);

	        return _possibleConstructorReturn(this, _getPrototypeOf(MinuteCounter).apply(this, arguments));
	      }

	      _createClass(MinuteCounter, [{
	        key: "defaultDataType",
	        value: function defaultDataType() {
	          return Date;
	        }
	      }, {
	        key: "defaultAttributes",
	        value: function defaultAttributes() {
	          return {
	            showSeconds: true,
	            showLabels: true
	          };
	        }
	      }, {
	        key: "shouldStop",
	        value: function shouldStop(instance) {
	          if (isNull(instance.stopAt) || isUndefined(instance.stopAt)) {
	            return false;
	          }

	          if (this.stopAt instanceof Date) {
	            return this.countdown ? this.stopAt.getTime() >= this.value.value.getTime() : this.stopAt.getTime() <= this.value.value.getTime();
	          } else if (isNumber(this.stopAt)) {
	            var diff = Math.floor((this.value.value.getTime() - this.originalValue.getTime()) / 1000);
	            return this.countdown ? this.stopAt >= diff : this.stopAt <= diff;
	          }

	          throw new Error("the stopAt property must be an instance of Date or Number.");
	        }
	      }, {
	        key: "increment",
	        value: function increment(instance) {
	          var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	          instance.value = new Date(this.value.value.getTime() + value + (new Date().getTime() - instance.timer.lastLoop));
	        }
	      }, {
	        key: "decrement",
	        value: function decrement(instance) {
	          var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	          instance.value = new Date(this.value.value.getTime() - value - (new Date().getTime() - instance.timer.lastLoop));
	        }
	      }, {
	        key: "format",
	        value: function format(instance, value) {
	          var started = instance.timer.isRunning ? instance.timer.started : new Date(Date.now() - 50);
	          return [[this.getMinutes(value, started)], this.showSeconds ? [this.getSeconds(value, started)] : null].filter(noop);
	        }
	      }, {
	        key: "getMinutes",
	        value: function getMinutes(a, b) {
	          return round(this.getTotalSeconds(a, b) / 60);
	        }
	      }, {
	        key: "getSeconds",
	        value: function getSeconds(a, b) {
	          var totalSeconds = this.getTotalSeconds(a, b);
	          return Math.abs(Math.ceil(totalSeconds === 60 ? 0 : totalSeconds % 60));
	        }
	      }, {
	        key: "getTotalSeconds",
	        value: function getTotalSeconds(a, b) {
	          return a.getTime() === b.getTime() ? 0 : Math.round((a.getTime() - b.getTime()) / 1000);
	        }
	        /**
	         * Define the name of the class.
	         *
	         * @return {string}
	         */

	      }], [{
	        key: "defineName",
	        value: function defineName() {
	          return 'MinuteCounter';
	        }
	      }]);

	      return MinuteCounter;
	    }(Face);

	    /**
	     * @classdesc This face is meant to display a clock that shows
	     *     hours, minutes, and seconds.
	     * @extends Face
	     * @param {(FaceValue|object)} value - The `Face` value. If not an instance
	     *     of FaceValue, this argument is assumed to be the instance attributes.
	     * @param {(object|undefined)} [attributes] - The instance attributes.
	     * @memberof Faces
	     */

	    var HourCounter =
	    /*#__PURE__*/
	    function (_MinuteCounter) {
	      _inherits(HourCounter, _MinuteCounter);

	      function HourCounter() {
	        _classCallCheck(this, HourCounter);

	        return _possibleConstructorReturn(this, _getPrototypeOf(HourCounter).apply(this, arguments));
	      }

	      _createClass(HourCounter, [{
	        key: "format",
	        value: function format(instance, value) {
	          var now = !instance.timer.started ? new Date() : value;
	          var originalValue = instance.originalValue || value;
	          var a = !this.countdown ? now : originalValue;
	          var b = !this.countdown ? originalValue : now;
	          var data = [[this.getHours(a, b)], [this.getMinutes(a, b)]];

	          if (this.showSeconds) {
	            data.push([this.getSeconds(a, b)]);
	          }

	          return data;
	        }
	      }, {
	        key: "getMinutes",
	        value: function getMinutes(a, b) {
	          return Math.abs(_get(_getPrototypeOf(HourCounter.prototype), "getMinutes", this).call(this, a, b) % 60);
	        }
	      }, {
	        key: "getHours",
	        value: function getHours(a, b) {
	          return Math.floor(this.getTotalSeconds(a, b) / 60 / 60);
	        }
	        /**
	         * Define the name of the class.
	         *
	         * @return {string}
	         */

	      }], [{
	        key: "defineName",
	        value: function defineName() {
	          return 'HourCounter';
	        }
	      }]);

	      return HourCounter;
	    }(MinuteCounter);

	    /**
	     * @classdesc This face is meant to display a clock that shows days, hours,
	     *     minutes, and seconds.
	     * @extends HourCounter
	     * @param {(FaceValue|object)} value - The `Face` value. If not an instance
	     *     of FaceValue, this argument is assumed to be the instance attributes.
	     * @param {(object|undefined)} [attributes] - The instance attributes.
	     * @memberof Faces
	     */

	    var DayCounter =
	    /*#__PURE__*/
	    function (_HourCounter) {
	      _inherits(DayCounter, _HourCounter);

	      function DayCounter() {
	        _classCallCheck(this, DayCounter);

	        return _possibleConstructorReturn(this, _getPrototypeOf(DayCounter).apply(this, arguments));
	      }

	      _createClass(DayCounter, [{
	        key: "format",
	        value: function format(instance, value) {
	          var now = !instance.started ? new Date() : value;
	          var originalValue = instance.originalValue || value;
	          var a = !this.countdown ? now : originalValue;
	          var b = !this.countdown ? originalValue : now;
	          var data = [[this.getDays(a, b)], [this.getHours(a, b)], [this.getMinutes(a, b)]];

	          if (this.showSeconds) {
	            data.push([this.getSeconds(a, b)]);
	          }

	          return data;
	        }
	      }, {
	        key: "getDays",
	        value: function getDays(a, b) {
	          return Math.floor(this.getTotalSeconds(a, b) / 60 / 60 / 24);
	        }
	      }, {
	        key: "getHours",
	        value: function getHours(a, b) {
	          return Math.abs(_get(_getPrototypeOf(DayCounter.prototype), "getHours", this).call(this, a, b) % 24);
	        }
	        /**
	         * Define the name of the class.
	         *
	         * @return {string}
	         */

	      }], [{
	        key: "defineName",
	        value: function defineName() {
	          return 'DayCounter';
	        }
	      }]);

	      return DayCounter;
	    }(HourCounter);

	    /**
	     * @classdesc This face shows the current time in twenty-four hour format.
	     * @extends Face
	     * @param {(FaceValue|object)} value - The `Face` value. If not an instance
	     *     of FaceValue, this argument is assumed to be the instance attributes.
	     * @param {(object|undefined)} [attributes] - The instance attributes.
	     * @memberof Faces
	     */

	    var TwentyFourHourClock =
	    /*#__PURE__*/
	    function (_Face) {
	      _inherits(TwentyFourHourClock, _Face);

	      function TwentyFourHourClock() {
	        _classCallCheck(this, TwentyFourHourClock);

	        return _possibleConstructorReturn(this, _getPrototypeOf(TwentyFourHourClock).apply(this, arguments));
	      }

	      _createClass(TwentyFourHourClock, [{
	        key: "defaultDataType",
	        value: function defaultDataType() {
	          return Date;
	        }
	      }, {
	        key: "defaultValue",
	        value: function defaultValue() {
	          return new Date();
	        }
	      }, {
	        key: "defaultAttributes",
	        value: function defaultAttributes() {
	          return {
	            showSeconds: true,
	            showLabels: false
	          };
	        }
	      }, {
	        key: "format",
	        value: function format(instance, value) {
	          if (!value) {
	            value = new Date();
	          }

	          var groups = [[value.getHours()], [value.getMinutes()]];

	          if (this.showSeconds) {
	            groups.push([value.getSeconds()]);
	          }

	          return groups;
	        }
	      }, {
	        key: "increment",
	        value: function increment(instance) {
	          var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	          instance.value = new Date(this.value.value.getTime() + offset + (new Date().getTime() - instance.timer.lastLoop));
	        }
	      }, {
	        key: "decrement",
	        value: function decrement(instance) {
	          var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
	          instance.value = new Date(this.value.value.getTime() - offset - (new Date().getTime() - instance.timer.lastLoop));
	        }
	        /**
	         * Define the name of the class.
	         *
	         * @return {string}
	         */

	      }], [{
	        key: "defineName",
	        value: function defineName() {
	          return 'TwentyFourHourClock';
	        }
	      }]);

	      return TwentyFourHourClock;
	    }(Face);

	    /**
	     * @classdesc This face shows the current time in twelve hour format, with AM
	     *     and PM.
	     * @extends Face
	     * @param {(FaceValue|object)} value - The `Face` value. If not an instance
	     *     of FaceValue, this argument is assumed to be the instance attributes.
	     * @param {(object|undefined)} [attributes] - The instance attributes.
	     * @memberof Faces
	     */

	    var TwelveHourClock =
	    /*#__PURE__*/
	    function (_TwentyFourHourClock) {
	      _inherits(TwelveHourClock, _TwentyFourHourClock);

	      function TwelveHourClock() {
	        _classCallCheck(this, TwelveHourClock);

	        return _possibleConstructorReturn(this, _getPrototypeOf(TwelveHourClock).apply(this, arguments));
	      }

	      _createClass(TwelveHourClock, [{
	        key: "defaultAttributes",
	        value: function defaultAttributes() {
	          return {
	            showLabels: false,
	            showSeconds: true,
	            showMeridium: true
	          };
	        }
	      }, {
	        key: "format",
	        value: function format(instance, value) {
	          if (!value) {
	            value = new Date();
	          }

	          var hours = value.getHours();
	          var groups = [hours > 12 ? hours - 12 : hours === 0 ? 12 : hours, value.getMinutes()];
	          this.meridium = hours > 12 ? 'pm' : 'am';

	          if (this.showSeconds) {
	            groups.push(value.getSeconds());
	          }

	          return groups;
	        }
	        /**
	         * Define the name of the class.
	         *
	         * @return {string}
	         */

	      }], [{
	        key: "defineName",
	        value: function defineName() {
	          return 'TwelveHourClock';
	        }
	      }]);

	      return TwelveHourClock;
	    }(TwentyFourHourClock);

	    /**
	     * @classdesc This face is meant to display a clock that shows weeks, days,
	     *     hours, minutes, and seconds.
	     * @extends Face
	     * @param {(FaceValue|object)} value - The `Face` value. If not an instance
	     *     of FaceValue, this argument is assumed to be the instance attributes.
	     * @param {(object|undefined)} [attributes] - The instance attributes.
	     * @memberof Faces
	     */

	    var WeekCounter =
	    /*#__PURE__*/
	    function (_DayCounter) {
	      _inherits(WeekCounter, _DayCounter);

	      function WeekCounter() {
	        _classCallCheck(this, WeekCounter);

	        return _possibleConstructorReturn(this, _getPrototypeOf(WeekCounter).apply(this, arguments));
	      }

	      _createClass(WeekCounter, [{
	        key: "format",
	        value: function format(instance, value) {
	          var now = !instance.timer.started ? new Date() : value;
	          var originalValue = instance.originalValue || value;
	          var a = !this.countdown ? now : originalValue;
	          var b = !this.countdown ? originalValue : now;
	          var data = [[this.getWeeks(a, b)], [this.getDays(a, b)], [this.getHours(a, b)], [this.getMinutes(a, b)]];

	          if (this.showSeconds) {
	            data.push([this.getSeconds(a, b)]);
	          }

	          return data;
	        }
	      }, {
	        key: "getWeeks",
	        value: function getWeeks(a, b) {
	          return Math.floor(this.getTotalSeconds(a, b) / 60 / 60 / 24 / 7);
	        }
	      }, {
	        key: "getDays",
	        value: function getDays(a, b) {
	          return Math.abs(_get(_getPrototypeOf(WeekCounter.prototype), "getDays", this).call(this, a, b) % 7);
	        }
	        /**
	         * Define the name of the class.
	         *
	         * @return {string}
	         */

	      }], [{
	        key: "defineName",
	        value: function defineName() {
	          return 'WeekCounter';
	        }
	      }]);

	      return WeekCounter;
	    }(DayCounter);

	    /**
	     * @classdesc This face is meant to display a clock that shows years, weeks,
	     *     days, hours, minutes, and seconds.
	     * @extends Face
	     * @param {(FaceValue|object)} value - The `Face` value. If not an instance
	     *     of FaceValue, this argument is assumed to be the instance attributes.
	     * @param {(object|undefined)} [attributes] - The instance attributes.
	     * @memberof Faces
	     */

	    var YearCounter =
	    /*#__PURE__*/
	    function (_WeekCounter) {
	      _inherits(YearCounter, _WeekCounter);

	      function YearCounter() {
	        _classCallCheck(this, YearCounter);

	        return _possibleConstructorReturn(this, _getPrototypeOf(YearCounter).apply(this, arguments));
	      }

	      _createClass(YearCounter, [{
	        key: "format",
	        value: function format(instance, value) {
	          var now = !instance.timer.started ? new Date() : value;
	          var originalValue = instance.originalValue || value;
	          var a = !this.countdown ? now : originalValue;
	          var b = !this.countdown ? originalValue : now;
	          var data = [[this.getYears(a, b)], [this.getWeeks(a, b)], [this.getDays(a, b)], [this.getHours(a, b)], [this.getMinutes(a, b)]];

	          if (this.showSeconds) {
	            data.push([this.getSeconds(a, b)]);
	          }

	          return data;
	        }
	      }, {
	        key: "getYears",
	        value: function getYears(a, b) {
	          return Math.floor(Math.max(0, this.getTotalSeconds(a, b) / 60 / 60 / 24 / 7 / 52));
	        }
	      }, {
	        key: "getWeeks",
	        value: function getWeeks(a, b) {
	          return Math.abs(_get(_getPrototypeOf(YearCounter.prototype), "getWeeks", this).call(this, a, b) % 52);
	        }
	        /**
	         * Define the name of the class.
	         *
	         * @return {string}
	         */

	      }], [{
	        key: "defineName",
	        value: function defineName() {
	          return 'YearCounter';
	        }
	      }]);

	      return YearCounter;
	    }(WeekCounter);

	    /**
	     * Faces are classes that hook into the core of Flipclock to provide unique
	     * functionality. The core doesn't do a lot, except facilitate the interaction
	     * between all the components. The Face is what makes the clock "tick".
	     *
	     * @namespace Faces
	     */

	    var Faces = /*#__PURE__*/Object.freeze({
	        Counter: Counter,
	        DayCounter: DayCounter,
	        MinuteCounter: MinuteCounter,
	        HourCounter: HourCounter,
	        TwelveHourClock: TwelveHourClock,
	        TwentyFourHourClock: TwentyFourHourClock,
	        WeekCounter: WeekCounter,
	        YearCounter: YearCounter
	    });

	    function Divider$1 (el, instance) {
	      appendChildren(el, [createElement('div', {
	        "class": 'flip-clock-dot top'
	      }), createElement('div', {
	        "class": 'flip-clock-dot bottom'
	      })]);
	    }

	    function child(el, index) {
	      return el ? el.childNodes ? el.childNodes[index] : el[index] : null;
	    }

	    function _char(el) {
	      return el ? el.querySelector('.flip-clock-list-item:first-child .top').innerHTML : null;
	    }

	    function FlipClock (el, instance) {
	      var parts = instance.value.digits.map(function (group, x) {
	        var groupEl = child(instance.el ? instance.el.querySelectorAll('.flip-clock-group') : null, x);
	        var lists = group.map(function (value, y) {
	          var listEl = child(groupEl ? groupEl.querySelectorAll('.flip-clock-list') : null, y);

	          var listValue = _char(listEl);

	          return instance.createList(value, {
	            domValue: listValue,
	            countdown: instance.countdown,
	            animationRate: instance.face.animationRate || instance.face.delay
	          });
	        });
	        return instance.createGroup(lists);
	      });
	      var nodes = parts.map(function (group) {
	        return group.render();
	      });
	      appendChildren(el, nodes);
	    }

	    function Group$1 (el, instance) {
	      var items = instance.items.map(function (item) {
	        return item.render();
	      });
	      appendChildren(el, items);
	    }

	    function Label$1 (el, instance) {
	      el.innerHTML = instance.t(instance.label);
	    }

	    function List$1 (el, instance) {
	      var beforeValue = instance.domValue || (!instance.countdown ? prev(instance.value) : next(instance.value));

	      if (instance.domValue && instance.domValue !== instance.value) {
	        el.classList.add('flip');
	      }

	      el.style.animationDelay = "".concat(instance.animationRate / 2, "ms");
	      el.style.animationDuration = "".concat(instance.animationRate / 2, "ms");
	      instance.items = [instance.createListItem(instance.value, {
	        active: true
	      }), instance.createListItem(beforeValue, {
	        active: false
	      })];
	      appendChildren(el, instance.items.map(function (item) {
	        return item.render();
	      }));
	    }

	    function ListItem$1 (el, instance) {
	      var className = instance.active === true ? 'active' : instance.active === false ? 'before' : null;
	      el.classList.add(className);
	      appendChildren(el, [createElement('div', [createElement('div', instance.value, {
	        "class": 'top'
	      }), createElement('div', instance.value, {
	        "class": 'bottom'
	      })], {
	        "class": 'flip-clock-list-item-inner'
	      })]);
	    }

	    function DayCounter$1 (el, instance) {
	      instance.createDivider().mount(el, el.childNodes[1]);
	      instance.createDivider().mount(el, el.childNodes[3]);

	      if (instance.face.showSeconds) {
	        instance.createDivider().mount(el, el.childNodes[5]);
	      }

	      if (instance.face.showLabels) {
	        instance.createLabel('days').mount(el.childNodes[0]);
	        instance.createLabel('hours').mount(el.childNodes[2]);
	        instance.createLabel('minutes').mount(el.childNodes[4]);

	        if (instance.face.showSeconds) {
	          instance.createLabel('seconds').mount(el.childNodes[6]);
	        }
	      }
	    }

	    function HourCounter$1 (el, instance) {
	      instance.createDivider().mount(el, el.childNodes[1]);

	      if (instance.face.showSeconds) {
	        instance.createDivider().mount(el, el.childNodes[3]);
	      }

	      if (instance.face.showLabels) {
	        instance.createLabel('hours').mount(el.childNodes[0]);
	        instance.createLabel('minutes').mount(el.childNodes[2]);

	        if (instance.face.showSeconds) {
	          instance.createLabel('seconds').mount(el.childNodes[4]);
	        }
	      }
	    }

	    function MinuteCounter$1 (el, instance) {
	      if (instance.face.showSeconds) {
	        instance.createDivider().mount(el, el.childNodes[1]);
	      }

	      if (instance.face.showLabels) {
	        instance.createLabel('minutes').mount(el.childNodes[0]);

	        if (instance.face.showSeconds) {
	          instance.createLabel('seconds').mount(el.childNodes[2]);
	        }
	      }
	    }

	    function TwentyFourHourClock$1 (el, instance) {
	      instance.createDivider().mount(el, el.childNodes[1]);

	      if (instance.face.showSeconds) {
	        instance.createDivider().mount(el, el.childNodes[3]);
	      }

	      if (instance.face.showLabels) {
	        instance.createLabel('hours').mount(el.childNodes[0]);
	        instance.createLabel('minutes').mount(el.childNodes[2]);

	        if (instance.face.showSeconds) {
	          instance.createLabel('seconds').mount(el.childNodes[4]);
	        }
	      }
	    }

	    function TwelveHourClock$1 (el, instance) {
	      TwentyFourHourClock$1(el, instance);

	      if (instance.face.showMeridium && instance.face.meridium) {
	        var label = instance.createLabel(instance.face.meridium);
	        var parent = el.childNodes[el.childNodes.length - 1];
	        label.mount(parent).classList.add('flip-clock-meridium');
	      }
	    }

	    function WeekCounter$1 (el, instance) {
	      instance.createDivider().mount(el, el.childNodes[1]);
	      instance.createDivider().mount(el, el.childNodes[3]);
	      instance.createDivider().mount(el, el.childNodes[5]);

	      if (instance.face.showSeconds) {
	        instance.createDivider().mount(el, el.childNodes[7]);
	      }

	      if (instance.face.showLabels) {
	        instance.createLabel('weeks').mount(el.childNodes[0]);
	        instance.createLabel('days').mount(el.childNodes[2]);
	        instance.createLabel('hours').mount(el.childNodes[4]);
	        instance.createLabel('minutes').mount(el.childNodes[6]);

	        if (instance.face.showSeconds) {
	          instance.createLabel('seconds').mount(el.childNodes[8]);
	        }
	      }
	    }

	    function YearCounter$1 (el, instance) {
	      instance.createDivider().mount(el, el.childNodes[1]);
	      instance.createDivider().mount(el, el.childNodes[3]);
	      instance.createDivider().mount(el, el.childNodes[5]);
	      instance.createDivider().mount(el, el.childNodes[7]);

	      if (instance.face.showSeconds) {
	        instance.createDivider().mount(el, el.childNodes[9]);
	      }

	      if (instance.face.showLabels) {
	        instance.createLabel('years').mount(el.childNodes[0]);
	        instance.createLabel('weeks').mount(el.childNodes[2]);
	        instance.createLabel('days').mount(el.childNodes[4]);
	        instance.createLabel('hours').mount(el.childNodes[6]);
	        instance.createLabel('minutes').mount(el.childNodes[8]);

	        if (instance.face.showSeconds) {
	          instance.createLabel('seconds').mount(el.childNodes[10]);
	        }
	      }
	    }



	    var faces = /*#__PURE__*/Object.freeze({
	        DayCounter: DayCounter$1,
	        HourCounter: HourCounter$1,
	        MinuteCounter: MinuteCounter$1,
	        TwelveHourClock: TwelveHourClock$1,
	        TwentyFourHourClock: TwentyFourHourClock$1,
	        WeekCounter: WeekCounter$1,
	        YearCounter: YearCounter$1
	    });

	    var Original = {
	      Divider: Divider$1,
	      FlipClock: FlipClock,
	      Group: Group$1,
	      Label: Label$1,
	      List: List$1,
	      ListItem: ListItem$1,
	      faces: faces
	    };

	    /**
	     * @alias DefaultValues
	     * @type {object}
	     * @memberof module:Config/DefaultValues
	     */

	    var DefaultValues = {
	      face: Counter,
	      theme: Original,
	      language: English
	    };

	    var FlipClock$1 =
	    /*#__PURE__*/
	    function (_DomComponent) {
	      _inherits(FlipClock, _DomComponent);

	      /**
	       * Create a new `FlipClock` instance.
	       *
	       * @class FlipClock
	       * @extends DomComponent
	       * @param {HTMLElement} el - The HTML element used to bind clock DOM node.
	       * @param {*} value - The value that is passed to the clock face.
	       * @param {object|undefined} attributes - {@link FlipClock.Options} passed an object with key/value.
	       */

	      /**
	       * @namespace FlipClock.Options
	       * @classdesc An object of key/value pairs that will be used to set the attributes.
	       * 
	       * ##### Example:
	       * 
	       *     {
	       *        face: 'DayCounter',
	       *        language: 'es',
	       *        timer: Timer.make(500)
	       *     }
	       * 
	       * @property {string|Face} [face={@link Faces.DayCounter}] - The clock's {@link Face} instance.
	       * @property {number} [interval=1000] - The clock's interval rate (in milliseconds).
	       * @property {object} [theme={@link Themes.Original}] - The clock's theme.
	       * @property {string|object} [language={@link Languages.English}] - The clock's language.
	       * @property {Timer} [timer={@link Timer}] - The clock's timer.
	       */
	      function FlipClock(el, value, attributes) {
	        var _this;

	        _classCallCheck(this, FlipClock);

	        if (!validate(el, HTMLElement)) {
	          error(ConsoleMessages.element);
	        }

	        if (isObject(value) && !attributes) {
	          attributes = value;
	          value = undefined;
	        }

	        var face = attributes.face || DefaultValues.face;
	        delete attributes.face;
	        _this = _possibleConstructorReturn(this, _getPrototypeOf(FlipClock).call(this, Object.assign({
	          originalValue: value,
	          theme: DefaultValues.theme,
	          language: DefaultValues.language,
	          timer: Timer.make(attributes.interval || 1000)
	        }, attributes)));

	        if (!_this.face) {
	          _this.face = face;
	        }

	        _this.mount(el);

	        return _this;
	      }
	      /**
	       * The clock `Face`.
	       *
	       * @type {Face}
	       */


	      _createClass(FlipClock, [{
	        key: "mount",

	        /**
	         * Mount the clock to the parent DOM element.
	         *
	         * @param  {HTMLElement} el - The parent `HTMLElement`.
	         * @return {FlipClock} - The `FlipClock` instance.
	         */
	        value: function mount(el) {
	          _get(_getPrototypeOf(FlipClock.prototype), "mount", this).call(this, el);

	          this.face.mounted(this);
	          return this;
	        }
	        /**
	         * Render the clock's DOM nodes.
	         *
	         * @return {HTMLElement} - The parent `HTMLElement`.
	         */

	      }, {
	        key: "render",
	        value: function render() {
	          // Call the parent render function
	          _get(_getPrototypeOf(FlipClock.prototype), "render", this).call(this); // Check to see if the face has a render function defined in the theme.
	          // This allows a face to completely re-render or add to the theme.
	          // This allows face specific interfaces for a theme.


	          if (this.theme.faces[this.face.name]) {
	            this.theme.faces[this.face.name](this.el, this);
	          } // Pass the clock instance to the rendered() function on the face.
	          // This allows global modifications to the rendered templates not
	          // theme specific.


	          this.face.rendered(this); // Return the rendered `HTMLElement`.

	          return this.el;
	        }
	        /**
	         * Start the clock.
	         *
	         * @param  {Function} fn - The interval callback.
	         * @return {FlipClock} - The `FlipClock` instance.
	         */

	      }, {
	        key: "start",
	        value: function start(fn) {
	          var _this2 = this;

	          if (!this.timer.started) {
	            this.value = this.originalValue;
	          }

	          isUndefined(this.face.stopAt) && (this.face.stopAt = this.stopAt);
	          isUndefined(this.face.originalValue) && (this.face.originalValue = this.originalValue);
	          this.timer.start(function () {
	            _this2.face.interval(_this2, fn);
	          });
	          this.face.started(this);
	          return this.emit('start');
	        }
	        /**
	         * Stop the clock.
	         *
	         * @param  {Function} fn - The stop callback.
	         * @return {FlipClock} - The `FlipClock` instance.
	         */

	      }, {
	        key: "stop",
	        value: function stop(fn) {
	          this.timer.stop(fn);
	          this.face.stopped(this);
	          return this.emit('stop');
	        }
	        /**
	         * Reset the clock to the original value.
	         *
	         * @param  {Function} fn - The interval callback.
	         * @return {FlipClock} - The `FlipClock` instance.
	         */

	      }, {
	        key: "reset",
	        value: function reset(fn) {
	          var _this3 = this;

	          this.value = this.originalValue;
	          this.timer.reset(function () {
	            return _this3.interval(_this3, fn);
	          });
	          this.face.reset(this);
	          return this.emit('reset');
	        }
	        /**
	         * Helper method to increment the clock's value.
	         *
	         * @param  {*|undefined} value - Increment the clock by the specified value.
	         *     If no value is passed, then the default increment is determined by
	         *     the Face, which is usually `1`.
	         * @return {FlipClock} - The `FlipClock` instance.
	         */

	      }, {
	        key: "increment",
	        value: function increment(value) {
	          this.face.increment(this, value);
	          return this;
	        }
	        /**
	         * Helper method to decrement the clock's value.
	         *
	         * @param  {*|undefined} value - Decrement the clock by the specified value.
	         *     If no value is passed, then the default decrement is determined by
	         *     the `Face`, which is usually `1`.
	         * @return {FlipClock} - The `FlipClock` instance.
	         */

	      }, {
	        key: "decrement",
	        value: function decrement(value) {
	          this.face.decrement(this, value);
	          return this;
	        }
	        /**
	         * Helper method to instantiate a new `Divider`.
	         *
	         * @param  {object|undefined} [attributes] - The attributes passed to the
	         *     `Divider` instance.
	         * @return {Divider} - The instantiated Divider.
	         */

	      }, {
	        key: "createDivider",
	        value: function createDivider(attributes) {
	          return Divider.make(Object.assign({
	            theme: this.theme,
	            language: this.language
	          }, attributes));
	        }
	        /**
	         * Helper method to instantiate a new `List`.
	         *
	         * @param  {*} value - The `List` value.
	         * @param  {object|undefined} [attributes] - The attributes passed to the
	         *     `List` instance.
	         * @return {List} - The instantiated `List`.
	         */

	      }, {
	        key: "createList",
	        value: function createList(value, attributes) {
	          return List.make(value, Object.assign({
	            theme: this.theme,
	            language: this.language
	          }, attributes));
	        }
	        /**
	         * Helper method to instantiate a new `Label`.
	         *
	         * @param  {*} value - The `Label` value.
	         * @param  {object|undefined} [attributes] - The attributes passed to the
	         *     `Label` instance.
	         * @return {Label} - The instantiated `Label`.
	         */

	      }, {
	        key: "createLabel",
	        value: function createLabel(value, attributes) {
	          return Label.make(value, Object.assign({
	            theme: this.theme,
	            language: this.language
	          }, attributes));
	        }
	        /**
	         * Helper method to instantiate a new `Group`.
	         *
	         * @param  {array} items - An array of `List` items to group.
	         * @param  {Group|undefined} [attributes] - The attributes passed to the
	         *     `Group` instance.
	         * @return {Group} - The instantiated `Group`.
	         */

	      }, {
	        key: "createGroup",
	        value: function createGroup(items, attributes) {
	          return Group.make(items, Object.assign({
	            theme: this.theme,
	            language: this.language
	          }, attributes));
	        }
	        /**
	         * The `defaults` attribute.
	         *
	         * @type {object}
	         */

	      }, {
	        key: "face",
	        get: function get$$1() {
	          return this.$face;
	        },
	        set: function set(value) {
	          if (!validate(value, [Face, 'string', 'function'])) {
	            error(ConsoleMessages.face);
	          }

	          this.$face = (Faces[value] || value).make(Object.assign(this.getPublicAttributes(), {
	            originalValue: this.face ? this.face.originalValue : undefined
	          }));
	          this.$face.initialized(this);

	          if (this.value) {
	            this.$face.value = this.face.createFaceValue(this, this.value.value);
	          } else if (!this.value) {
	            this.value = this.originalValue;
	          }

	          this.el && this.render();
	        }
	        /**
	         * The `stopAt` attribute.
	         *
	         * @type {*}
	         */

	      }, {
	        key: "stopAt",
	        get: function get$$1() {
	          return isFunction(this.$stopAt) ? this.$stopAt(this) : this.$stopAt;
	        },
	        set: function set(value) {
	          this.$stopAt = value;
	        }
	        /**
	         * The `timer` instance.
	         *
	         * @type {Timer}
	         */

	      }, {
	        key: "timer",
	        get: function get$$1() {
	          return this.$timer;
	        },
	        set: function set(timer) {
	          if (!validate(timer, Timer)) {
	            error(ConsoleMessages.timer);
	          }

	          this.$timer = timer;
	        }
	        /**
	         * Helper method to The clock's `FaceValue` instance.
	         *
	         * @type {FaceValue|null}
	         */

	      }, {
	        key: "value",
	        get: function get$$1() {
	          return this.face ? this.face.value : null;
	        },
	        set: function set(value) {
	          if (!this.face) {
	            throw new Error('A face must be set before setting a value.');
	          }

	          if (value instanceof FaceValue) {
	            this.face.value = value;
	          } else if (this.value) {
	            this.face.value = this.face.value.clone(value);
	          } else {
	            this.face.value = this.face.createFaceValue(this, value);
	          }

	          this.el && this.render();
	        }
	        /**
	         * The `originalValue` attribute.
	         *
	         * @type {*}
	         */

	      }, {
	        key: "originalValue",
	        get: function get$$1() {
	          if (isFunction(this.$originalValue) && !this.$originalValue.name) {
	            return this.$originalValue();
	          }

	          if (!isUndefined(this.$originalValue) && !isNull(this.$originalValue)) {
	            return this.$originalValue;
	          }

	          return this.face ? this.face.defaultValue() : undefined;
	        },
	        set: function set(value) {
	          this.$originalValue = value;
	        }
	      }], [{
	        key: "defineName",

	        /**
	         * Define the name of the class.
	         *
	         * @return {string}
	         */
	        value: function defineName() {
	          return 'FlipClock';
	        }
	        /**
	         * Helper method to set the default `Face` value.
	         *
	         * @param  {Face} value - The default `Face` class.This should be a
	         *     constructor.
	         * @return {void}
	         */

	      }, {
	        key: "setDefaultFace",
	        value: function setDefaultFace(value) {
	          if (!validate(value, Face)) {
	            error(ConsoleMessages.face);
	          }

	          DefaultValues.face = value;
	        }
	        /**
	         * Helper method to set the default theme.
	         *
	         * @param {object} value - The default theme.
	         * @return {void}
	         */

	      }, {
	        key: "setDefaultTheme",
	        value: function setDefaultTheme(value) {
	          if (!validate(value, 'object')) {
	            error(ConsoleMessages.theme);
	          }

	          DefaultValues.theme = value;
	        }
	        /**
	         * Helper method to set the default language.
	         *
	         * @param {object} value - The default language.
	         * @return {void}
	         */

	      }, {
	        key: "setDefaultLanguage",
	        value: function setDefaultLanguage(value) {
	          if (!validate(value, 'object')) {
	            error(ConsoleMessages.language);
	          }

	          DefaultValues.language = value;
	        }
	      }, {
	        key: "defaults",
	        get: function get$$1() {
	          return DefaultValues;
	        }
	      }]);

	      return FlipClock;
	    }(DomComponent);

	    return FlipClock$1;

	})));
	
} (flipclock));

var flipclockExports = flipclock.exports;
var FlipClock = /*@__PURE__*/getDefaultExportFromCjs(flipclockExports);

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t$1=globalThis,e$2=t$1.ShadowRoot&&(void 0===t$1.ShadyCSS||t$1.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$2=Symbol(),o$2=new WeakMap;let n$2 = class n{constructor(t,e,o){if(this._$cssResult$=!0,o!==s$2)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$2&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=o$2.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&o$2.set(s,t));}return t}toString(){return this.cssText}};const r$3=t=>new n$2("string"==typeof t?t:t+"",void 0,s$2),S$1=(s,o)=>{if(e$2)s.adoptedStyleSheets=o.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet));else for(const e of o){const o=document.createElement("style"),n=t$1.litNonce;void 0!==n&&o.setAttribute("nonce",n),o.textContent=e.cssText,s.appendChild(o);}},c$2=e$2?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$3(e)})(t):t;

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:i$1,defineProperty:e$1,getOwnPropertyDescriptor:r$2,getOwnPropertyNames:h$1,getOwnPropertySymbols:o$1,getPrototypeOf:n$1}=Object,a$1=globalThis,c$1=a$1.trustedTypes,l$1=c$1?c$1.emptyScript:"",p$1=a$1.reactiveElementPolyfillSupport,d$1=(t,s)=>t,u$1={toAttribute(t,s){switch(s){case Boolean:t=t?l$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,s){let i=t;switch(s){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t);}catch(t){i=null;}}return i}},f$1=(t,s)=>!i$1(t,s),y$1={attribute:!0,type:String,converter:u$1,reflect:!1,hasChanged:f$1};Symbol.metadata??=Symbol("metadata"),a$1.litPropertyMetadata??=new WeakMap;class b extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t);}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=y$1){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const i=Symbol(),r=this.getPropertyDescriptor(t,i,s);void 0!==r&&e$1(this.prototype,t,r);}}static getPropertyDescriptor(t,s,i){const{get:e,set:h}=r$2(this.prototype,t)??{get(){return this[s]},set(t){this[s]=t;}};return {get(){return e?.call(this)},set(s){const r=e?.call(this);h.call(this,s),this.requestUpdate(t,r,i);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??y$1}static _$Ei(){if(this.hasOwnProperty(d$1("elementProperties")))return;const t=n$1(this);t.finalize(),void 0!==t.l&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties);}static finalize(){if(this.hasOwnProperty(d$1("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(d$1("properties"))){const t=this.properties,s=[...h$1(t),...o$1(t)];for(const i of s)this.createProperty(i,t[i]);}const t=this[Symbol.metadata];if(null!==t){const s=litPropertyMetadata.get(t);if(void 0!==s)for(const[t,i]of s)this.elementProperties.set(t,i);}this._$Eh=new Map;for(const[t,s]of this.elementProperties){const i=this._$Eu(t,s);void 0!==i&&this._$Eh.set(i,t);}this.elementStyles=this.finalizeStyles(this.styles);}static finalizeStyles(s){const i=[];if(Array.isArray(s)){const e=new Set(s.flat(1/0).reverse());for(const s of e)i.unshift(c$2(s));}else void 0!==s&&i.push(c$2(s));return i}static _$Eu(t,s){const i=s.attribute;return !1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev();}_$Ev(){this._$Eg=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)));}addController(t){(this._$ES??=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&t.hostConnected?.();}removeController(t){this._$ES?.splice(this._$ES.indexOf(t)>>>0,1);}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const i of s.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t);}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return S$1(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$ES?.forEach((t=>t.hostConnected?.()));}enableUpdating(t){}disconnectedCallback(){this._$ES?.forEach((t=>t.hostDisconnected?.()));}attributeChangedCallback(t,s,i){this._$AK(t,i);}_$EO(t,s){const i=this.constructor.elementProperties.get(t),e=this.constructor._$Eu(t,i);if(void 0!==e&&!0===i.reflect){const r=(void 0!==i.converter?.toAttribute?i.converter:u$1).toAttribute(s,i.type);this._$Em=t,null==r?this.removeAttribute(e):this.setAttribute(e,r),this._$Em=null;}}_$AK(t,s){const i=this.constructor,e=i._$Eh.get(t);if(void 0!==e&&this._$Em!==e){const t=i.getPropertyOptions(e),r="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==t.converter?.fromAttribute?t.converter:u$1;this._$Em=e,this[e]=r.fromAttribute(s,t.type),this._$Em=null;}}requestUpdate(t,s,i,e=!1,r){if(void 0!==t){if(i??=this.constructor.getPropertyOptions(t),!(i.hasChanged??f$1)(e?r:this[t],s))return;this.C(t,s,i);}!1===this.isUpdatePending&&(this._$Eg=this._$EP());}C(t,s,i){this._$AL.has(t)||this._$AL.set(t,s),!0===i.reflect&&this._$Em!==t&&(this._$Ej??=new Set).add(t);}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this._$Ep){for(const[t,s]of this._$Ep)this[t]=s;this._$Ep=void 0;}const t=this.constructor.elementProperties;if(t.size>0)for(const[s,i]of t)!0!==i.wrapped||this._$AL.has(s)||void 0===this[s]||this.C(s,this[s],i);}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),this._$ES?.forEach((t=>t.hostUpdate?.())),this.update(s)):this._$ET();}catch(s){throw t=!1,this._$ET(),s}t&&this._$AE(s);}willUpdate(t){}_$AE(t){this._$ES?.forEach((t=>t.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$ET(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return !0}update(t){this._$Ej&&=this._$Ej.forEach((t=>this._$EO(t,this[t]))),this._$ET();}updated(t){}firstUpdated(t){}}b.elementStyles=[],b.shadowRootOptions={mode:"open"},b[d$1("elementProperties")]=new Map,b[d$1("finalized")]=new Map,p$1?.({ReactiveElement:b}),(a$1.reactiveElementVersions??=[]).push("2.0.1");

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const t=globalThis,i=t.trustedTypes,s$1=i?i.createPolicy("lit-html",{createHTML:t=>t}):void 0,e="$lit$",h=`lit$${(Math.random()+"").slice(9)}$`,o="?"+h,n=`<${o}>`,r$1=document,l=()=>r$1.createComment(""),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,a=Array.isArray,u=t=>a(t)||"function"==typeof t?.[Symbol.iterator],d="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,v=/-->/g,_=/>/g,m=RegExp(`>|${d}(?:([^\\s"'>=/]+)(${d}*=${d}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),p=/'/g,g=/"/g,$=/^(?:script|style|textarea|title)$/i,y=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=y(1),w=Symbol.for("lit-noChange"),T=Symbol.for("lit-nothing"),A=new WeakMap,E=r$1.createTreeWalker(r$1,129);function C(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==s$1?s$1.createHTML(i):i}const P=(t,i)=>{const s=t.length-1,o=[];let r,l=2===i?"<svg>":"",c=f;for(let i=0;i<s;i++){const s=t[i];let a,u,d=-1,y=0;for(;y<s.length&&(c.lastIndex=y,u=c.exec(s),null!==u);)y=c.lastIndex,c===f?"!--"===u[1]?c=v:void 0!==u[1]?c=_:void 0!==u[2]?($.test(u[2])&&(r=RegExp("</"+u[2],"g")),c=m):void 0!==u[3]&&(c=m):c===m?">"===u[0]?(c=r??f,d=-1):void 0===u[1]?d=-2:(d=c.lastIndex-u[2].length,a=u[1],c=void 0===u[3]?m:'"'===u[3]?g:p):c===g||c===p?c=m:c===v||c===_?c=f:(c=m,r=void 0);const x=c===m&&t[i+1].startsWith("/>")?" ":"";l+=c===f?s+n:d>=0?(o.push(a),s.slice(0,d)+e+s.slice(d)+h+x):s+h+(-2===d?i:x);}return [C(t,l+(t[s]||"<?>")+(2===i?"</svg>":"")),o]};class V{constructor({strings:t,_$litType$:s},n){let r;this.parts=[];let c=0,a=0;const u=t.length-1,d=this.parts,[f,v]=P(t,s);if(this.el=V.createElement(f,n),E.currentNode=this.el.content,2===s){const t=this.el.content.firstChild;t.replaceWith(...t.childNodes);}for(;null!==(r=E.nextNode())&&d.length<u;){if(1===r.nodeType){if(r.hasAttributes())for(const t of r.getAttributeNames())if(t.endsWith(e)){const i=v[a++],s=r.getAttribute(t).split(h),e=/([.?@])?(.*)/.exec(i);d.push({type:1,index:c,name:e[2],strings:s,ctor:"."===e[1]?k:"?"===e[1]?H:"@"===e[1]?I:R}),r.removeAttribute(t);}else t.startsWith(h)&&(d.push({type:6,index:c}),r.removeAttribute(t));if($.test(r.tagName)){const t=r.textContent.split(h),s=t.length-1;if(s>0){r.textContent=i?i.emptyScript:"";for(let i=0;i<s;i++)r.append(t[i],l()),E.nextNode(),d.push({type:2,index:++c});r.append(t[s],l());}}}else if(8===r.nodeType)if(r.data===o)d.push({type:2,index:c});else {let t=-1;for(;-1!==(t=r.data.indexOf(h,t+1));)d.push({type:7,index:c}),t+=h.length-1;}c++;}}static createElement(t,i){const s=r$1.createElement("template");return s.innerHTML=t,s}}function N(t,i,s=t,e){if(i===w)return i;let h=void 0!==e?s._$Co?.[e]:s._$Cl;const o=c(i)?void 0:i._$litDirective$;return h?.constructor!==o&&(h?._$AO?.(!1),void 0===o?h=void 0:(h=new o(t),h._$AT(t,s,e)),void 0!==e?(s._$Co??=[])[e]=h:s._$Cl=h),void 0!==h&&(i=N(t,h._$AS(t,i.values),h,e)),i}class S{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:i},parts:s}=this._$AD,e=(t?.creationScope??r$1).importNode(i,!0);E.currentNode=e;let h=E.nextNode(),o=0,n=0,l=s[0];for(;void 0!==l;){if(o===l.index){let i;2===l.type?i=new M(h,h.nextSibling,this,t):1===l.type?i=new l.ctor(h,l.name,l.strings,this,t):6===l.type&&(i=new L(h,this,t)),this._$AV.push(i),l=s[++n];}o!==l?.index&&(h=E.nextNode(),o++);}return E.currentNode=r$1,e}p(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class M{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,i,s,e){this.type=2,this._$AH=T,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cv=e?.isConnected??!0;}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t?.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=N(this,t,i),c(t)?t===T||null==t||""===t?(this._$AH!==T&&this._$AR(),this._$AH=T):t!==this._$AH&&t!==w&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):u(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==T&&c(this._$AH)?this._$AA.nextSibling.data=t:this.$(r$1.createTextNode(t)),this._$AH=t;}g(t){const{values:i,_$litType$:s}=t,e="number"==typeof s?this._$AC(t):(void 0===s.el&&(s.el=V.createElement(C(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===e)this._$AH.p(i);else {const t=new S(e,this),s=t.u(this.options);t.p(i),this.$(s),this._$AH=t;}}_$AC(t){let i=A.get(t.strings);return void 0===i&&A.set(t.strings,i=new V(t)),i}T(t){a(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const h of t)e===i.length?i.push(s=new M(this.k(l()),this.k(l()),this,this.options)):s=i[e],s._$AI(h),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){for(this._$AP?.(!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){void 0===this._$AM&&(this._$Cv=t,this._$AP?.(t));}}class R{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,i,s,e,h){this.type=1,this._$AH=T,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=h,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=T;}_$AI(t,i=this,s,e){const h=this.strings;let o=!1;if(void 0===h)t=N(this,t,i,0),o=!c(t)||t!==this._$AH&&t!==w,o&&(this._$AH=t);else {const e=t;let n,r;for(t=h[0],n=0;n<h.length-1;n++)r=N(this,e[s+n],i,n),r===w&&(r=this._$AH[n]),o||=!c(r)||r!==this._$AH[n],r===T?t=T:t!==T&&(t+=(r??"")+h[n+1]),this._$AH[n]=r;}o&&!e&&this.O(t);}O(t){t===T?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"");}}class k extends R{constructor(){super(...arguments),this.type=3;}O(t){this.element[this.name]=t===T?void 0:t;}}class H extends R{constructor(){super(...arguments),this.type=4;}O(t){this.element.toggleAttribute(this.name,!!t&&t!==T);}}class I extends R{constructor(t,i,s,e,h){super(t,i,s,e,h),this.type=5;}_$AI(t,i=this){if((t=N(this,t,i,0)??T)===w)return;const s=this._$AH,e=t===T&&s!==T||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,h=t!==T&&(s===T||e);e&&this.element.removeEventListener(this.name,this,s),h&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){"function"==typeof this._$AH?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t);}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){N(this,t);}}const Z=t.litHtmlPolyfillSupport;Z?.(V,M),(t.litHtmlVersions??=[]).push("3.0.2");const j=(t,i,s)=>{const e=s?.renderBefore??i;let h=e._$litPart$;if(void 0===h){const t=s?.renderBefore??null;e._$litPart$=h=new M(i.insertBefore(l(),t),t,void 0,s??{});}return h._$AI(t),h};

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class s extends b{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=j(i,this.renderRoot,this.renderOptions);}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0);}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1);}render(){return w}}s._$litElement$=!0,s[("finalized")]=!0,globalThis.litElementHydrateSupport?.({LitElement:s});const r=globalThis.litElementPolyfillSupport;r?.({LitElement:s});(globalThis.litElementVersions??=[]).push("4.0.1");

const style = x `
  <style>
    .fc-content {
      display: grid;
      width: 100%;
      height: 100%;
      grid-template-areas:
        'fc-header fc-header fc-header'
        'fc-time fc-time fc-time'
        'fc-date fc-date fc-date'
        'fc-timezone fc-timezone fc-timezone';
      grid-template-columns: auto auto auto;
      grid-template-rows: auto 1fr auto auto;
    }

    .fc-header,
    .fc-date {
      grid-area: fc-header;
      color: var(--ha-card-header-color, --primary-text-color);
      font-family: var(--ha-card-header-font-family, inherit);
      font-size: var(--ha-card-header-font-size, 24px);
      font-weight: var(--paper-font-headline_-_font-weight);
      letter-spacing: var(--paper-font-headline_-_letter-spacing);
      line-height: var(--paper-font-headline_-_line-height);
      text-rendering: var(--paper-font-common-expensive-kerning_-_text-rendering);
      -webkit-font-smoothing: var(--paper-font-headline_-_-webkit-font-smoothing);
      display: block;
    }

    .fc-header {
      padding: 24px 16px 16px;
    }

    .fc-date {
      text-align: center;
    }

    .fc-time {
      grid-area: fc-time;
    }

    .fc-date {
      grid-area: fc-date;
    }

    .fc-timezone {
      grid-area: fc-timezone;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      padding: 1em;
      color: var(--secondary-text-color);
    }

    .fc-timezone .item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: initial;
    }

    .tz-time {
      margin-left: 40px;
    }

    .tz {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: center;
    }

    .tz .tz-icon {
      flex: 0 0 40px;
    }

    .tz .tz-locale {
      flex: 1 0 60px;
    }

    .flip-clock {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
    }

    .flip-clock {
      font-family: 'Helvetica Neue', Helvetica, sans-serif;
      font-size: 16px;
      -webkit-user-select: none;
      text-align: center;
      position: relative;
      display: flex;
      font-family: 'Helvetica Neue', Helvetica, sans-serif;
      box-sizing: border-box;
      align-items: flex-end;
      padding: 1em;
    }
    .flip-clock .flip-clock-group {
      display: flex;
      position: relative;
    }
    .flip-clock .flip-clock-group .flip-clock-label {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      font-size: 1em;
      height: 2em;
      line-height: 2em;
      font-weight: 400;
      text-transform: capitalize;
      transform: translateY(-100%);
    }
    .flip-clock .flip-clock-group .flip-clock-label.flip-clock-meridium {
      font-size: 1.75em;
      line-height: 1.75em;
      top: 50%;
      left: 100%;
      flex: 0;
      width: auto;
      text-transform: uppercase;
      font-weight: 200;
      transform: translate(0.5em, -50%);
    }
    .flip-clock .flip-clock-group .flip-clock-list {
      width: 4em;
      height: 6em;
      position: relative;
      border-radius: 0.75rem;
      // eslint-disable-next-line prettier/prettier
      box-shadow: 0 1.5px 3px rgba(0, 0, 0, 0.24), 0 3px 8px rgba(0, 0, 0, 0.05);
      font-weight: bold;
      color: #ccc;
    }
    .flip-clock .flip-clock-group .flip-clock-list:not(:last-child) {
      margin-right: 0.333em;
    }
    .flip-clock .flip-clock-group .flip-clock-list:not(.flip) .active .flip-clock-list-item-inner {
      z-index: 4;
    }
    .flip-clock .flip-clock-group .flip-clock-list:not(.flip) .flip-clock-list-item-inner .top:after,
    .flip-clock .flip-clock-group .flip-clock-list:not(.flip) .flip-clock-list-item-inner .bottom:after {
      display: none;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner {
      position: absolute;
      width: 100%;
      height: 100%;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip {
      animation-delay: 500ms;
      animation-duration: 500ms;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .flip-clock-list-item-inner {
      perspective: 15em;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .top,
    .flip-clock .flip-clock-group .flip-clock-list.flip .bottom,
    .flip-clock .flip-clock-group .flip-clock-list.flip .active,
    .flip-clock .flip-clock-group .flip-clock-list.flip .active > div,
    .flip-clock .flip-clock-group .flip-clock-list.flip .before,
    .flip-clock .flip-clock-group .flip-clock-list.flip .before > div {
      animation-delay: inherit;
      animation-fill-mode: forwards;
      animation-duration: inherit;
      animation-timing-function: ease-in;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .top:after,
    .flip-clock .flip-clock-group .flip-clock-list.flip .bottom:after,
    .flip-clock .flip-clock-group .flip-clock-list.flip .active:after,
    .flip-clock .flip-clock-group .flip-clock-list.flip .active > div:after,
    .flip-clock .flip-clock-group .flip-clock-list.flip .before:after,
    .flip-clock .flip-clock-group .flip-clock-list.flip .before > div:after {
      animation-duration: inherit;
      animation-fill-mode: inherit;
      animation-timing-function: inherit;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .before {
      animation-delay: 0s;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .before .top {
      animation-name: flip-top;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .before .top:after,
    .flip-clock .flip-clock-group .flip-clock-list.flip .before .bottom:after {
      animation-name: show-shadow;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .active > div {
      animation-name: indexing;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .active .top:after,
    .flip-clock .flip-clock-group .flip-clock-list.flip .active .bottom:after {
      animation-delay: calc(500ms * 0.15);
      animation-name: hide-shadow;
    }
    .flip-clock .flip-clock-group .flip-clock-list.flip .active .bottom {
      animation-name: flip-bottom;
    }
    .flip-clock .flip-clock-group .flip-clock-list .active {
      z-index: 2;
    }
    .flip-clock .flip-clock-group .flip-clock-list .active .bottom {
      z-index: 2;
      transform-origin: top center;
    }
    .flip-clock .flip-clock-group .flip-clock-list .before {
      z-index: 3;
    }
    .flip-clock .flip-clock-group .flip-clock-list .before .top {
      z-index: 2;
      transform-origin: bottom center;
    }
    .flip-clock .flip-clock-group .flip-clock-list .before .top:after {
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 0%, black 100%);
    }
    .flip-clock .flip-clock-group .flip-clock-list .before .bottom:after {
      background: linear-gradient(to bottom, black 0%, rgba(0, 0, 0, 0.1) 100%);
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner {
      position: absolute;
      width: 100%;
      height: 100%;
      transform: rotateX(0.0001deg);
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner:first-child {
      z-index: 2;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner > .top,
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner > .bottom {
      width: 100%;
      height: 50%;
      overflow: hidden;
      position: relative;
      font-size: 4.5em;
      background: #333;
      box-shadow: inset 0 0 0.2em rgba(0, 0, 0, 0.5);
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner > .top:after,
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner > .bottom:after {
      content: ' ';
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      overflow: hidden;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner > .top:before,
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner > .bottom:before {
      content: ' ';
      display: block;
      width: 100%;
      height: 1px;
      position: absolute;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner .top {
      border-radius: 0.75rem 0.75rem 0 0;
      line-height: 1.33333;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner .top:after {
      border-radius: 0.75rem 0.75rem 0 0;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner .top:before {
      background: #333;
      opacity: 0.4;
      bottom: 0;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner .bottom {
      border-radius: 0 0 0.75rem 0.75rem;
      line-height: 0;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner .bottom:after {
      border-radius: 0 0 0.75rem 0.75rem;
    }
    .flip-clock .flip-clock-group .flip-clock-list .flip-clock-list-item-inner .bottom:before {
      background: #ccc;
      opacity: 0.1;
    }
    .flip-clock .flip-clock-divider {
      position: relative;
      width: 1.5em;
      height: 6em;
    }
    .flip-clock .flip-clock-divider:before,
    .flip-clock .flip-clock-divider:after {
      content: ' ';
      display: block;
      width: 0.75em;
      height: 0.75em;
      background: #333;
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
    }
    .flip-clock .flip-clock-divider:before {
      transform: translate(-50%, 75%);
    }
    .flip-clock .flip-clock-divider:after {
      transform: translate(-50%, -175%);
    }

    @keyframes indexing {
      0% {
        z-index: 2;
      }
      1% {
        z-index: 3;
      }
      100% {
        z-index: 4;
      }
    }

    @keyframes flip-bottom {
      0% {
        transform: rotateX(90deg);
      }
      100% {
        transform: rotateX(0);
      }
    }

    @keyframes flip-top {
      0% {
        transform: rotateX(0);
      }
      100% {
        transform: rotateX(-90deg);
      }
    }

    @keyframes show-shadow {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes hide-shadow {
      0% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  </style>
`;

/* eslint-disable @typescript-eslint/no-explicit-any */
function mergeDeep(...objects) {
    const isObject = (obj) => obj && typeof obj === 'object';
    return objects.reduce((prev, obj) => {
        Object.keys(obj).forEach((key) => {
            const pVal = prev[key];
            const oVal = obj[key];
            if (Array.isArray(pVal) && Array.isArray(oVal)) {
                /* eslint no-param-reassign: 0 */
                prev[key] = pVal.concat(...oVal);
            }
            else if (isObject(pVal) && isObject(oVal)) {
                prev[key] = mergeDeep(pVal, oVal);
            }
            else {
                prev[key] = oVal;
            }
        });
        return prev;
    }, {});
}

var name = "flipclock-card";
var version = "0.3.7";

console.info(`%c  ${name.toUpperCase()}  %c  Version ${version}  `, 'color: white; font-weight: bold; background: crimson', 'color: #000; font-weight: bold; background: #ddd');
let FlipClockCard = class FlipClockCard extends s$3 {
    constructor() {
        super(...arguments);
        this._clockFaces = ['TwentyFourHourClock', 'TwelveHourClock'];
        this._firstUpdated = false;
    }
    set hass(hass) {
        this._hass = hass;
        this._date = new Date();
        setInterval(this.updateTimezones.bind(this), 500);
    }
    setConfig(config) {
        if (!config) {
            throw new Error('Invalid configuration');
        }
        this._config = mergeDeep({
            title: null,
            time: {
                face: 'TwentyFourHourClock',
                showSeconds: false,
            },
            timezones: [],
            date: {
                format: {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                },
                hidden: false,
                locale: null,
            },
        }, config);
        this._timezones = [];
        this._config.timezones.forEach((item) => {
            this._timezones.push({
                id: typeof item == 'string' ? item : item.id,
                title: typeof item == 'string' ? item : item.title,
            });
        });
    }
    shouldUpdate() {
        return !this._firstUpdated;
    }
    firstUpdated() {
        this._firstUpdated = true;
    }
    render() {
        if (!this._config || !this._hass) {
            return x$1 ``;
        }
        return x$1 `
      <ha-card>
        <div class="fc-content">
          ${this.showValue(this._config.title)
            ? x$1 `
                <div class="fc-header">
                  ${this._config.title}
                </div>
              `
            : ''}
          <div class="fc-time">
            ${this.renderClock()}
          </div>
          ${this.renderDate()} ${this.renderTimezones()}
        </div>
      </ha-card>
      ${style}
    `;
    }
    getCardSize() {
        return 3;
    }
    showValue(item) {
        return typeof item !== 'undefined' && item !== null;
    }
    renderClock() {
        if (this._clockFaces.includes(this._config.time.face)) {
            const el = document.createElement('div');
            el.className = 'fc-now';
            new FlipClock(el, this._date, {
                face: this._config.time.face,
                showSeconds: this._config.time.showSeconds,
            });
            return x$1 `${el}`;
        }
        return x$1 ``;
    }
    renderDate() {
        if (!this._config.date.hidden)
            return x$1 ` <div class="fc-date">
        ${this.formatDate(this._date)}
      </div>`;
        else
            return x$1 ``;
    }
    formatDate(date, options) {
        var _a;
        const l = this._config.date.locale || ((_a = this._hass) === null || _a === void 0 ? void 0 : _a.language);
        const o = options || this._config.date.format;
        return date.toLocaleDateString(l, o);
    }
    formatTimezone(tzId) {
        return this.formatDate(this._date, {
            hour: 'numeric',
            minute: 'numeric',
            timeZone: tzId,
            weekday: 'short',
        });
    }
    renderTimezones() {
        return x$1 `
      <div class="fc-timezone" id="fc_timezone">
        ${this._timezones.map((item, index) => x$1 `
            <div class="item">
              <div class="tz">
                <ha-icon class="tz-icon" icon="mdi:clock-outline"></ha-icon>
                <div class="tz-locale">${item.title}</div>
              </div>
              <div class="tz-time" id="tz_${index}">
                ${this.formatTimezone(item.id)}
              </div>
            </div>
          `)}
      </div>
    `;
    }
    updateTimezones() {
        this._timezones.map((item, index) => {
            var _a;
            const el = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById(`tz_${index}`);
            if (el)
                el.innerHTML = this.formatTimezone(item.id);
        });
    }
};
FlipClockCard.cardType = 'flipclock-card';
FlipClockCard.cardName = 'flipclock Card';
FlipClockCard.cardDescription = 'Custom card that display a flipclock-card';
__decorate([
    n$4()
], FlipClockCard.prototype, "_hass", void 0);
__decorate([
    n$4()
], FlipClockCard.prototype, "_config", void 0);
FlipClockCard = __decorate([
    e$4('flipclock-card')
], FlipClockCard);
window.customCards = window.customCards || [];
window.customCards.push({
    type: FlipClockCard.cardType,
    name: FlipClockCard.cardName,
    description: FlipClockCard.cardDescription
});
