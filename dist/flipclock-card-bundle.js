"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */function e(e,t,i,n){var o,s=arguments.length,r=s<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(e,t,i,n);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(r=(s<3?o(r):s>3?o(t,i,r):o(t,i))||r);return s>3&&r&&Object.defineProperty(t,i,r),r
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}const t=window,i=t.ShadowRoot&&(void 0===t.ShadyCSS||t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),o=new WeakMap;const s=e=>new class{constructor(e,t,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const i=void 0!==t&&1===t.length;i&&(e=o.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&o.set(t,e))}return e}toString(){return this.cssText}}("string"==typeof e?e:e+"",void 0,n),r=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return s(t)})(e):e
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var a;const l=window,c=l.trustedTypes,u=c?c.emptyScript:"",h=l.reactiveElementPolyfillSupport,f={toAttribute(e,t){switch(t){case Boolean:e=e?u:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=null!==e;break;case Number:i=null===e?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(e){i=null}}return i}},d=(e,t)=>t!==e&&(t==t||e==e),p={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:d};let m=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,i)=>{const n=this._$Ep(i,t);void 0!==n&&(this._$Ev.set(n,i),e.push(n))})),e}static createProperty(e,t=p){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const i="symbol"==typeof e?Symbol():"__"+e,n=this.getPropertyDescriptor(e,i,t);void 0!==n&&Object.defineProperty(this.prototype,e,n)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(n){const o=this[e];this[t]=n,this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||p}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const i of t)this.createProperty(i,e[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const e of i)t.unshift(r(e))}else void 0!==e&&t.push(r(e));return t}static _$Ep(e,t){const i=t.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,i;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(i=e.hostConnected)||void 0===i||i.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const n=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,n)=>{i?e.adoptedStyleSheets=n.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):n.forEach((i=>{const n=document.createElement("style"),o=t.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=i.cssText,e.appendChild(n)}))})(n,this.constructor.elementStyles),n}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=p){var n;const o=this.constructor._$Ep(e,i);if(void 0!==o&&!0===i.reflect){const s=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:f).toAttribute(t,i.type);this._$El=e,null==s?this.removeAttribute(o):this.setAttribute(o,s),this._$El=null}}_$AK(e,t){var i;const n=this.constructor,o=n._$Ev.get(e);if(void 0!==o&&this._$El!==o){const e=n.getPropertyOptions(o),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(i=e.converter)||void 0===i?void 0:i.fromAttribute)?e.converter:f;this._$El=o,this[o]=s.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,i){let n=!0;void 0!==e&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||d)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===i.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(i)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var v;m.finalized=!0,m.elementProperties=new Map,m.elementStyles=[],m.shadowRootOptions={mode:"open"},null==h||h({ReactiveElement:m}),(null!==(a=l.reactiveElementVersions)&&void 0!==a?a:l.reactiveElementVersions=[]).push("1.6.1");const g=window,y=g.trustedTypes,k=y?y.createPolicy("lit-html",{createHTML:e=>e}):void 0,b="$lit$",$=`lit$${(Math.random()+"").slice(9)}$`,w="?"+$,_=`<${w}>`,A=document,S=()=>A.createComment(""),T=e=>null===e||"object"!=typeof e&&"function"!=typeof e,z=Array.isArray,D="[ \t\n\f\r]",E=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,O=/-->/g,x=/>/g,C=RegExp(`>|${D}(?:([^\\s"'>=/]+)(${D}*=${D}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),M=/'/g,N=/"/g,j=/^(?:script|style|textarea|title)$/i,L=(e=>(t,...i)=>({_$litType$:e,strings:t,values:i}))(1),H=Symbol.for("lit-noChange"),P=Symbol.for("lit-nothing"),R=new WeakMap,V=A.createTreeWalker(A,129,null,!1),U=(e,t)=>{const i=e.length-1,n=[];let o,s=2===t?"<svg>":"",r=E;for(let t=0;t<i;t++){const i=e[t];let a,l,c=-1,u=0;for(;u<i.length&&(r.lastIndex=u,l=r.exec(i),null!==l);)u=r.lastIndex,r===E?"!--"===l[1]?r=O:void 0!==l[1]?r=x:void 0!==l[2]?(j.test(l[2])&&(o=RegExp("</"+l[2],"g")),r=C):void 0!==l[3]&&(r=C):r===C?">"===l[0]?(r=null!=o?o:E,c=-1):void 0===l[1]?c=-2:(c=r.lastIndex-l[2].length,a=l[1],r=void 0===l[3]?C:'"'===l[3]?N:M):r===N||r===M?r=C:r===O||r===x?r=E:(r=C,o=void 0);const h=r===C&&e[t+1].startsWith("/>")?" ":"";s+=r===E?i+_:c>=0?(n.push(a),i.slice(0,c)+b+i.slice(c)+$+h):i+$+(-2===c?(n.push(void 0),t):h)}const a=s+(e[i]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==k?k.createHTML(a):a,n]};class F{constructor({strings:e,_$litType$:t},i){let n;this.parts=[];let o=0,s=0;const r=e.length-1,a=this.parts,[l,c]=U(e,t);if(this.el=F.createElement(l,i),V.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(n=V.nextNode())&&a.length<r;){if(1===n.nodeType){if(n.hasAttributes()){const e=[];for(const t of n.getAttributeNames())if(t.endsWith(b)||t.startsWith($)){const i=c[s++];if(e.push(t),void 0!==i){const e=n.getAttribute(i.toLowerCase()+b).split($),t=/([.?@])?(.*)/.exec(i);a.push({type:1,index:o,name:t[2],strings:e,ctor:"."===t[1]?Z:"?"===t[1]?Y:"@"===t[1]?J:G})}else a.push({type:6,index:o})}for(const t of e)n.removeAttribute(t)}if(j.test(n.tagName)){const e=n.textContent.split($),t=e.length-1;if(t>0){n.textContent=y?y.emptyScript:"";for(let i=0;i<t;i++)n.append(e[i],S()),V.nextNode(),a.push({type:2,index:++o});n.append(e[t],S())}}}else if(8===n.nodeType)if(n.data===w)a.push({type:2,index:o});else{let e=-1;for(;-1!==(e=n.data.indexOf($,e+1));)a.push({type:7,index:o}),e+=$.length-1}o++}}static createElement(e,t){const i=A.createElement("template");return i.innerHTML=e,i}}function I(e,t,i=e,n){var o,s,r,a;if(t===H)return t;let l=void 0!==n?null===(o=i._$Co)||void 0===o?void 0:o[n]:i._$Cl;const c=T(t)?void 0:t._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(s=null==l?void 0:l._$AO)||void 0===s||s.call(l,!1),void 0===c?l=void 0:(l=new c(e),l._$AT(e,i,n)),void 0!==n?(null!==(r=(a=i)._$Co)&&void 0!==r?r:a._$Co=[])[n]=l:i._$Cl=l),void 0!==l&&(t=I(e,l._$AS(e,t.values),l,n)),t}class B{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:i},parts:n}=this._$AD,o=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:A).importNode(i,!0);V.currentNode=o;let s=V.nextNode(),r=0,a=0,l=n[0];for(;void 0!==l;){if(r===l.index){let t;2===l.type?t=new W(s,s.nextSibling,this,e):1===l.type?t=new l.ctor(s,l.name,l.strings,this,e):6===l.type&&(t=new K(s,this,e)),this._$AV.push(t),l=n[++a]}r!==(null==l?void 0:l.index)&&(s=V.nextNode(),r++)}return o}v(e){let t=0;for(const i of this._$AV)void 0!==i&&(void 0!==i.strings?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class W{constructor(e,t,i,n){var o;this.type=2,this._$AH=P,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=n,this._$Cp=null===(o=null==n?void 0:n.isConnected)||void 0===o||o}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===(null==e?void 0:e.nodeType)&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=I(this,e,t),T(e)?e===P||null==e||""===e?(this._$AH!==P&&this._$AR(),this._$AH=P):e!==this._$AH&&e!==H&&this._(e):void 0!==e._$litType$?this.g(e):void 0!==e.nodeType?this.$(e):(e=>z(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]))(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==P&&T(this._$AH)?this._$AA.nextSibling.data=e:this.$(A.createTextNode(e)),this._$AH=e}g(e){var t;const{values:i,_$litType$:n}=e,o="number"==typeof n?this._$AC(e):(void 0===n.el&&(n.el=F.createElement(n.h,this.options)),n);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===o)this._$AH.v(i);else{const e=new B(o,this),t=e.u(this.options);e.v(i),this.$(t),this._$AH=e}}_$AC(e){let t=R.get(e.strings);return void 0===t&&R.set(e.strings,t=new F(e)),t}T(e){z(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,n=0;for(const o of e)n===t.length?t.push(i=new W(this.k(S()),this.k(S()),this,this.options)):i=t[n],i._$AI(o),n++;n<t.length&&(this._$AR(i&&i._$AB.nextSibling,n),t.length=n)}_$AR(e=this._$AA.nextSibling,t){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cp=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class G{constructor(e,t,i,n,o){this.type=1,this._$AH=P,this._$AN=void 0,this.element=e,this.name=t,this._$AM=n,this.options=o,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=P}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,n){const o=this.strings;let s=!1;if(void 0===o)e=I(this,e,t,0),s=!T(e)||e!==this._$AH&&e!==H,s&&(this._$AH=e);else{const n=e;let r,a;for(e=o[0],r=0;r<o.length-1;r++)a=I(this,n[i+r],t,r),a===H&&(a=this._$AH[r]),s||(s=!T(a)||a!==this._$AH[r]),a===P?e=P:e!==P&&(e+=(null!=a?a:"")+o[r+1]),this._$AH[r]=a}s&&!n&&this.j(e)}j(e){e===P?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class Z extends G{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===P?void 0:e}}const q=y?y.emptyScript:"";class Y extends G{constructor(){super(...arguments),this.type=4}j(e){e&&e!==P?this.element.setAttribute(this.name,q):this.element.removeAttribute(this.name)}}class J extends G{constructor(e,t,i,n,o){super(e,t,i,n,o),this.type=5}_$AI(e,t=this){var i;if((e=null!==(i=I(this,e,t,0))&&void 0!==i?i:P)===H)return;const n=this._$AH,o=e===P&&n!==P||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,s=e!==P&&(n===P||o);o&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==i?i:this.element,e):this._$AH.handleEvent(e)}}class K{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){I(this,e)}}const X=g.litHtmlPolyfillSupport;null==X||X(F,W),(null!==(v=g.litHtmlVersions)&&void 0!==v?v:g.litHtmlVersions=[]).push("2.7.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Q,ee;class te extends m{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const i=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=i.firstChild),i}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,i)=>{var n,o;const s=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:t;let r=s._$litPart$;if(void 0===r){const e=null!==(o=null==i?void 0:i.renderBefore)&&void 0!==o?o:null;s._$litPart$=r=new W(t.insertBefore(S(),e),e,void 0,null!=i?i:{})}return r._$AI(e),r})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return H}}te.finalized=!0,te._$litElement$=!0,null===(Q=globalThis.litElementHydrateSupport)||void 0===Q||Q.call(globalThis,{LitElement:te});const ie=globalThis.litElementPolyfillSupport;null==ie||ie({LitElement:te}),(null!==(ee=globalThis.litElementVersions)&&void 0!==ee?ee:globalThis.litElementVersions=[]).push("3.3.1");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ne=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function oe(e){return(t,i)=>void 0!==i?((e,t,i)=>{t.constructor.createProperty(i,e)})(e,t,i):ne(e,t)
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */}var se;null===(se=window.HTMLSlotElement)||void 0===se||se.prototype.assignedElements,
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;function re(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ae={exports:{}};ae.exports=function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function n(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function r(e,t){return r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function l(e,t,i){return l=a()?Reflect.construct:function(e,t,i){var n=[null];n.push.apply(n,t);var o=new(Function.bind.apply(e,n));return i&&r(o,i.prototype),o},l.apply(null,arguments)}function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?c(e):t}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=s(e)););return e}function f(e,t,i){return f="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,i){var n=h(e,t);if(n){var o=Object.getOwnPropertyDescriptor(n,t);return o.get?o.get.call(i):o.value}},f(e,t,i||e)}function d(e){throw Error(e)}function p(e){if(O(e)){for(var t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];return e.call.apply(e,[this].concat(i))}}function m(e){return w(e=_(e)?Math.ceil(e):Math.floor(e))?("-"+e).toString():e}function v(e){return!S(e)&&!A(e)}function g(e,t){return function(){return t(e())}}function y(e){return function(t){return t.map(e).reduce((function(e,t){return e.concat(t)}),[])}}function k(e){return y((function(e){return e}))(e)}function b(e){return y((function(e){return Array.isArray(e)?b(e):e}))(e)}function $(e){return b(e).length}function w(e){return 1/Math.round(e)==-1/0}function _(e){return w(e)||e<0}function A(e){return null===e}function S(e){return void 0===e}function T(e){return e instanceof Function&&!!e.name}function z(e){return"string"==typeof e}function D(e){return e instanceof Array}function E(t){var i=e(t);return null!=t&&!D(t)&&("object"==i||"function"==i)}function O(e){return e instanceof Function}function x(e){return!isNaN(e)}function C(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/\s+/g,"-").toLowerCase()}var M=function(){function e(i){t(this,e),this.setAttribute(Object.assign({events:{}},i))}return n(e,[{key:"emit",value:function(e){for(var t=this,i=arguments.length,n=new Array(i>1?i-1:0),o=1;o<i;o++)n[o-1]=arguments[o];return this.events[e]&&this.events[e].forEach((function(e){e.apply(t,n)})),this}},{key:"on",value:function(e,t){return this.events[e]||(this.events[e]=[]),this.events[e].push(t),this}},{key:"off",value:function(e,t){return this.events[e]&&t?this.events[e]=this.events[e].filter((function(e){return e!==t})):this.events[e]=[],this}},{key:"once",value:function(e,t){var i=this;return t=g(t,(function(){return i.off(e,t)})),this.on(e,t,!0)}},{key:"getAttribute",value:function(e){return this.hasOwnProperty(e)?this[e]:null}},{key:"getAttributes",value:function(){var e=this,t={};return Object.getOwnPropertyNames(this).forEach((function(i){t[i]=e.getAttribute(i)})),t}},{key:"getPublicAttributes",value:function(){var e=this;return Object.keys(this.getAttributes()).filter((function(e){return!e.match(/^\$/)})).reduce((function(t,i){return t[i]=e.getAttribute(i),t}),{})}},{key:"setAttribute",value:function(e,t){E(e)?this.setAttributes(e):this[e]=t}},{key:"setAttributes",value:function(e){for(var t in e)this.setAttribute(t,e[t])}},{key:"callback",value:function(e){return p.call(this,e)}},{key:"name",get:function(){return this.constructor.name}},{key:"className",get:function(){return C(this.name)}},{key:"events",get:function(){return this.$events||[]},set:function(e){this.$events=e}}],[{key:"make",value:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return l(this,t)}}]),e}();function N(e,t){function i(e){return(t.prependLeadingZero&&1===e.toString().split("").length?"0":"").concat(e)}function n(e,t){var i=b(e).length;if(i<t)for(var n=0;n<t-i;n++)e[0].unshift("0");return e}return t=Object.assign({minimumDigits:0,prependLeadingZero:!0},t),n(k([e]).map((function(e){return k(b([e]).map((function(e){return i(e).split("")})))})),t.minimumDigits||0)}var j=[{min:48,max:57},{min:65,max:90},{min:97,max:122}];function L(e,t){return"number"===t?parseFloat(e):e}function H(e){for(var t in j){var i=e.toString().charCodeAt(0);if(j[t].min<=i&&j[t].max>=i)return j[t]}return null}function P(e,t){return String.fromCharCode(t(H(e),e.charCodeAt(0)))}function R(t){return L(t.toString().split("").map((function(e){return P(e,(function(e,t){return!e||t<e.max?t+1:e.min}))})).join(""),e(t))}function V(t){return L(t.toString().split("").map((function(e){return P(e,(function(e,t){return!e||t>e.min?t-1:e.max}))})).join(""),e(t))}var U=function(e){function i(e,n){var o;return t(this,i),o=u(this,s(i).call(this,Object.assign({format:function(e){return e},prependLeadingZero:!0,minimumDigits:0},n))),o.value||(o.value=e),o}return o(i,e),n(i,[{key:"isNaN",value:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(){return isNaN(this.value)}))},{key:"isNumber",value:function(){return x()}},{key:"clone",value:function(e,t){return new this.constructor(e,Object.assign(this.getPublicAttributes(),t))}},{key:"digits",get:function(){return this.$digits},set:function(e){this.$digits=e,this.minimumDigits=Math.max(this.minimumDigits,$(e))}},{key:"value",get:function(){return this.$value},set:function(e){this.$value=e,this.digits=N(this.format(e),{minimumDigits:this.minimumDigits,prependLeadingZero:this.prependLeadingZero})}}]),i}(M);function F(t){for(var i=!1,n=arguments.length,o=new Array(n>1?n-1:0),s=1;s<n;s++)o[s-1]=arguments[s];return k(o).forEach((function(n){(A(t)&&A(n)||E(n)&&t instanceof n||O(n)&&!T(n)&&!0===n(t)||z(n)&&e(t)===n)&&(i=!0)})),i}var I={items:"The items property must be an array.",theme:"The theme property must be an object.",language:"The language must be an object.",date:"The value must be an instance of a Date.",face:"The face must be an instance of a Face class.",element:"The element must be an instance of an HTMLElement",faceValue:"The face must be an instance of a FaceValue class.",timer:"The timer property must be an instance of a Timer class."},B=function(e){function i(e,n){var o;return t(this,i),e instanceof U||!E(e)||(n=e,e=void 0),(o=u(this,s(i).call(this))).setAttributes(Object.assign({autoStart:!0,countdown:!1,animationRate:500},o.defaultAttributes(),n||{})),(A(e)||S(e))&&(e=o.defaultValue()),e&&(o.value=e),o}return o(i,e),n(i,[{key:"interval",value:function(e,t){return this.countdown?this.decrement(e):this.increment(e),p.call(this,t),this.shouldStop(e)&&e.stop(),this.emit("interval")}},{key:"shouldStop",value:function(e){return!S(this.stopAt)&&this.stopAt===e.value.value}},{key:"format",value:function(e,t){return t}},{key:"defaultValue",value:function(){}},{key:"defaultAttributes",value:function(){}},{key:"defaultDataType",value:function(){}},{key:"increment",value:function(e,t){}},{key:"decrement",value:function(e,t){}},{key:"started",value:function(e){}},{key:"stopped",value:function(e){}},{key:"reset",value:function(e){}},{key:"initialized",value:function(e){}},{key:"rendered",value:function(e){}},{key:"mounted",value:function(e){this.autoStart&&e.timer.isStopped&&window.requestAnimationFrame((function(){return e.start(e)}))}},{key:"createFaceValue",value:function(e,t){var i=this;return U.make(O(t)&&!t.name?t():t,{minimumDigits:this.minimumDigits,format:function(t){return i.format(e,t)}})}},{key:"dataType",get:function(){return this.defaultDataType()}},{key:"value",get:function(){return this.$value},set:function(e){e instanceof U||(e=this.createFaceValue(e)),this.$value=e}},{key:"stopAt",get:function(){return this.$stopAt},set:function(e){this.$stopAt=e}},{key:"originalValue",get:function(){return this.$originalValue},set:function(e){this.$originalValue=e}}]),i}(M),W={years:"سنوات",months:"شهور",days:"أيام",hours:"ساعات",minutes:"دقائق",seconds:"ثواني"},G=["ar","ar-ar","arabic"],Z=Object.freeze({dictionary:W,aliases:G}),q={years:"Anys",months:"Mesos",days:"Dies",hours:"Hores",minutes:"Minuts",seconds:"Segons"},Y=["ca","ca-es","catalan"],J=Object.freeze({dictionary:q,aliases:Y}),K={years:"Roky",months:"Měsíce",days:"Dny",hours:"Hodiny",minutes:"Minuty",seconds:"Sekundy"},X=["cs","cs-cz","cz","cz-cs","czech"],Q=Object.freeze({dictionary:K,aliases:X}),ee={years:"År",months:"Måneder",days:"Dage",hours:"Timer",minutes:"Minutter",seconds:"Sekunder"},te=["da","da-dk","danish"],ie=Object.freeze({dictionary:ee,aliases:te}),ne={years:"Jahre",months:"Monate",days:"Tage",hours:"Stunden",minutes:"Minuten",seconds:"Sekunden"},oe=["de","de-de","german"],se=Object.freeze({dictionary:ne,aliases:oe}),re={years:"Years",months:"Months",days:"Days",hours:"Hours",minutes:"Minutes",seconds:"Seconds"},ae=["en","en-us","english"],le=Object.freeze({dictionary:re,aliases:ae}),ce={years:"Años",months:"Meses",days:"Días",hours:"Horas",minutes:"Minutos",seconds:"Segundos"},ue=["es","es-es","spanish"],he=Object.freeze({dictionary:ce,aliases:ue}),fe={years:"سال",months:"ماه",days:"روز",hours:"ساعت",minutes:"دقیقه",seconds:"ثانیه"},de=["fa","fa-ir","persian"],pe=Object.freeze({dictionary:fe,aliases:de}),me={years:"Vuotta",months:"Kuukautta",days:"Päivää",hours:"Tuntia",minutes:"Minuuttia",seconds:"Sekuntia"},ve=["fi","fi-fi","finnish"],ge=Object.freeze({dictionary:me,aliases:ve}),ye={years:"Ans",months:"Mois",days:"Jours",hours:"Heures",minutes:"Minutes",seconds:"Secondes"},ke=["fr","fr-ca","french"],be=Object.freeze({dictionary:ye,aliases:ke}),$e={years:"שנים",months:"חודש",days:"ימים",hours:"שעות",minutes:"דקות",seconds:"שניות"},we=["il","he-il","hebrew"],_e=Object.freeze({dictionary:$e,aliases:we}),Ae={years:"Év",months:"Hónap",days:"Nap",hours:"Óra",minutes:"Perc",seconds:"Másodperc"},Se=["hu","hu-hu","hungarian"],Te=Object.freeze({dictionary:Ae,aliases:Se}),ze={years:"Anni",months:"Mesi",days:"Giorni",hours:"Ore",minutes:"Minuti",seconds:"Secondi"},De=["da","da-dk","danish"],Ee=Object.freeze({dictionary:ze,aliases:De}),Oe={years:"年",months:"月",days:"日",hours:"時",minutes:"分",seconds:"秒"},xe=["jp","ja-jp","japanese"],Ce=Object.freeze({dictionary:Oe,aliases:xe}),Me={years:"년",months:"월",days:"일",hours:"시",minutes:"분",seconds:"초"},Ne=["ko","ko-kr","korean"],je=Object.freeze({dictionary:Me,aliases:Ne}),Le={years:"Gadi",months:"Mēneši",days:"Dienas",hours:"Stundas",minutes:"Minūtes",seconds:"Sekundes"},He=["lv","lv-lv","latvian"],Pe=Object.freeze({dictionary:Le,aliases:He}),Re={years:"Jaren",months:"Maanden",days:"Dagen",hours:"Uren",minutes:"Minuten",seconds:"Seconden"},Ve=["nl","nl-be","dutch"],Ue=Object.freeze({dictionary:Re,aliases:Ve}),Fe={years:"År",months:"Måneder",days:"Dager",hours:"Timer",minutes:"Minutter",seconds:"Sekunder"},Ie=["no","nb","no-nb","norwegian"],Be=Object.freeze({dictionary:Fe,aliases:Ie}),We={years:"Lat",months:"Miesięcy",days:"Dni",hours:"Godziny",minutes:"Minuty",seconds:"Sekundy"},Ge=["pl","pl-pl","polish"],Ze=Object.freeze({dictionary:We,aliases:Ge}),qe={years:"Anos",months:"Meses",days:"Dias",hours:"Horas",minutes:"Minutos",seconds:"Segundos"},Ye=["pt","pt-br","portuguese"],Je=Object.freeze({dictionary:qe,aliases:Ye}),Ke={years:"Ani",months:"Luni",days:"Zile",hours:"Ore",minutes:"Minute",seconds:"sSecunde"},Xe=["ro","ro-ro","romana"],Qe=Object.freeze({dictionary:Ke,aliases:Xe}),et={years:"лет",months:"месяцев",days:"дней",hours:"часов",minutes:"минут",seconds:"секунд"},tt=["ru","ru-ru","russian"],it=Object.freeze({dictionary:et,aliases:tt}),nt={years:"Roky",months:"Mesiace",days:"Dni",hours:"Hodiny",minutes:"Minúty",seconds:"Sekundy"},ot=["sk","sk-sk","slovak"],st=Object.freeze({dictionary:nt,aliases:ot}),rt={years:"År",months:"Månader",days:"Dagar",hours:"Timmar",minutes:"Minuter",seconds:"Sekunder"},at=["sv","sv-se","swedish"],lt=Object.freeze({dictionary:rt,aliases:at}),ct={years:"ปี",months:"เดือน",days:"วัน",hours:"ชั่วโมง",minutes:"นาที",seconds:"วินาที"},ut=["th","th-th","thai"],ht=Object.freeze({dictionary:ct,aliases:ut}),ft={years:"Yıl",months:"Ay",days:"Gün",hours:"Saat",minutes:"Dakika",seconds:"Saniye"},dt=["tr","tr-tr","turkish"],pt=Object.freeze({dictionary:ft,aliases:dt}),mt={years:"роки",months:"місяці",days:"дні",hours:"години",minutes:"хвилини",seconds:"секунди"},vt=["ua","ua-ua","ukraine"],gt=Object.freeze({dictionary:mt,aliases:vt}),yt={years:"Năm",months:"Tháng",days:"Ngày",hours:"Giờ",minutes:"Phút",seconds:"Giây"},kt=["vn","vn-vn","vietnamese"],bt=Object.freeze({dictionary:yt,aliases:kt}),$t={years:"年",months:"月",days:"日",hours:"时",minutes:"分",seconds:"秒"},wt=["zh","zh-cn","chinese"],_t=Object.freeze({dictionary:$t,aliases:wt}),At={years:"年",months:"月",days:"日",hours:"時",minutes:"分",seconds:"秒"},St=["zh-tw"],Tt=Object.freeze({dictionary:At,aliases:St}),zt=Object.freeze({Arabic:Z,Catalan:J,Czech:Q,Danish:ie,German:se,English:le,Spanish:he,Persian:pe,Finnish:ge,French:be,Hebrew:_e,Hungarian:Te,Italian:Ee,Japanese:Ce,Korean:je,Latvian:Pe,Dutch:Ue,Norwegian:Be,Polish:Ze,Portuguese:Je,Romanian:Qe,Russian:it,Slovak:st,Swedish:lt,Thai:ht,Turkish:pt,Ukrainian:gt,Vietnamese:bt,Chinese:_t,TraditionalChinese:Tt});function Dt(e){return e?zt[e.toLowerCase()]||Object.values(zt).find((function(t){return-1!==t.aliases.indexOf(e)})):null}function Et(e,t){var i=z(t)?Dt(t):t;return(i.dictionary||i)[e]||e}function Ot(e,t){return t.parentNode?(t.parentNode.replaceChild(e,t),e):t}function xt(e,t){if(E(t))for(var i in t)e.setAttribute(i,t[i]);return e}function Ct(e,t){return D(t)&&t.filter(v).forEach((function(t){t instanceof HTMLElement&&e.appendChild(t)})),e}function Mt(e,t,i){return e instanceof HTMLElement||(e=document.createElement(e)),xt(e,E(t)?t:i),E(t)||D(t)?Ct(e,t):e.innerHTML=t,e}var Nt=function(e){function i(e){var n;if(t(this,i),(n=u(this,s(i).call(this,Object.assign({parent:null},e)))).theme||d("".concat(n.name," does not have a theme defined.")),n.language||d("".concat(n.name," does not have a language defined.")),!n.theme[n.name])throw new Error("".concat(n.name," cannot be rendered because it has no template."));return n}return o(i,e),n(i,[{key:"translate",value:function(e){return Et(e,this.language)}},{key:"t",value:function(e){return this.translate(e)}},{key:"render",value:function(){var e=Mt("div",{class:"flip-clock"===this.className?this.className:"flip-clock-"+this.className});return this.theme[this.name](e,this),this.el?this.el.innerHTML!==e.innerHTML&&(this.el=Ot(e,this.el)):this.el=e,this.el}},{key:"mount",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this.render(),this.parent=e,t?this.parent.insertBefore(this.el,t):this.parent.appendChild(this.el),this.el}},{key:"el",get:function(){return this.$el},set:function(e){F(e,null,HTMLElement)||d(I.element),this.$el=e}},{key:"parent",get:function(){return this.$parent},set:function(e){this.$parent=e}},{key:"theme",get:function(){return this.$theme},set:function(e){F(e,"object")||d(I.value),this.$theme=e}},{key:"language",get:function(){return this.$language},set:function(e){z(e)&&(e=Dt(e)),F(e,"object")||d(I.language),this.$language=e}}]),i}(M),jt=function(e){function i(){return t(this,i),u(this,s(i).apply(this,arguments))}return o(i,e),i}(Nt),Lt=function(e){function i(e,n){return t(this,i),u(this,s(i).call(this,Object.assign({value:e},E(e)?e:null,n)))}return o(i,e),i}(Nt),Ht=function(e){function i(e,n){return t(this,i),u(this,s(i).call(this,Object.assign({value:e,items:[]},E(e)?e:null,n)))}return o(i,e),n(i,[{key:"createListItem",value:function(e,t){var i=new Lt(e,Object.assign({theme:this.theme,language:this.language},t));return this.$items.push(i),i}},{key:"value",get:function(){return this.$value},set:function(e){this.$value=e}},{key:"items",get:function(){return this.$items},set:function(e){this.$items=e}}]),i}(Nt),Pt=function(e){function i(e,n){return t(this,i),u(this,s(i).call(this,Object.assign({items:D(e)?e:[]},E(e)?e:null,n)))}return o(i,e),i}(Nt),Rt=function(e){function i(e,n){return t(this,i),u(this,s(i).call(this,Object.assign({label:e},E(e)?e:null,n)))}return o(i,e),i}(Nt),Vt=function(e){function i(e){return t(this,i),u(this,s(i).call(this,Object.assign({count:0,handle:null,started:null,running:!1,interval:x(e)?e:null},E(e)?e:null)))}return o(i,e),n(i,[{key:"reset",value:function(e){var t=this;return this.stop((function(){t.count=0,t.start((function(){return p.call(t,e)})),t.emit("reset")})),this}},{key:"start",value:function(e){var t=this;return this.started=new Date,this.lastLoop=Date.now(),this.running=!0,this.emit("start"),function i(){return Date.now()-t.lastLoop>=t.interval&&(p.call(t,e),t.lastLoop=Date.now(),t.emit("interval"),t.count++),t.handle=window.requestAnimationFrame(i),t}()}},{key:"stop",value:function(e){var t=this;return this.isRunning&&setTimeout((function(){window.cancelAnimationFrame(t.handle),t.running=!1,p.call(t,e),t.emit("stop")})),this}},{key:"elapsed",get:function(){return this.lastLoop?this.lastLoop-(this.started?this.started.getTime():(new Date).getTime()):0}},{key:"isRunning",get:function(){return!0===this.running}},{key:"isStopped",get:function(){return!1===this.running}}]),i}(M),Ut=function(e){function i(){return t(this,i),u(this,s(i).apply(this,arguments))}return o(i,e),n(i,[{key:"increment",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;e.value=this.value.value+t}},{key:"decrement",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;e.value=this.value.value-t}}]),i}(B),Ft=function(e){function i(){return t(this,i),u(this,s(i).apply(this,arguments))}return o(i,e),n(i,[{key:"defaultDataType",value:function(){return Date}},{key:"defaultAttributes",value:function(){return{showSeconds:!0,showLabels:!0}}},{key:"shouldStop",value:function(e){if(A(e.stopAt)||S(e.stopAt))return!1;if(this.stopAt instanceof Date)return this.countdown?this.stopAt.getTime()>=this.value.value.getTime():this.stopAt.getTime()<=this.value.value.getTime();if(x(this.stopAt)){var t=Math.floor((this.value.value.getTime()-this.originalValue.getTime())/1e3);return this.countdown?this.stopAt>=t:this.stopAt<=t}throw new Error("the stopAt property must be an instance of Date or Number.")}},{key:"increment",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e.value=new Date(this.value.value.getTime()+t+((new Date).getTime()-e.timer.lastLoop))}},{key:"decrement",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e.value=new Date(this.value.value.getTime()-t-((new Date).getTime()-e.timer.lastLoop))}},{key:"format",value:function(e,t){var i=e.timer.isRunning?e.timer.started:new Date(Date.now()-50);return[[this.getMinutes(t,i)],this.showSeconds?[this.getSeconds(t,i)]:null].filter(v)}},{key:"getMinutes",value:function(e,t){return m(this.getTotalSeconds(e,t)/60)}},{key:"getSeconds",value:function(e,t){var i=this.getTotalSeconds(e,t);return Math.abs(Math.ceil(60===i?0:i%60))}},{key:"getTotalSeconds",value:function(e,t){return e.getTime()===t.getTime()?0:Math.round((e.getTime()-t.getTime())/1e3)}}]),i}(B),It=function(e){function i(){return t(this,i),u(this,s(i).apply(this,arguments))}return o(i,e),n(i,[{key:"format",value:function(e,t){var i=e.timer.started?t:new Date,n=e.originalValue||t,o=this.countdown?n:i,s=this.countdown?i:n,r=[[this.getHours(o,s)],[this.getMinutes(o,s)]];return this.showSeconds&&r.push([this.getSeconds(o,s)]),r}},{key:"getMinutes",value:function(e,t){return Math.abs(f(s(i.prototype),"getMinutes",this).call(this,e,t)%60)}},{key:"getHours",value:function(e,t){return Math.floor(this.getTotalSeconds(e,t)/60/60)}}]),i}(Ft),Bt=function(e){function i(){return t(this,i),u(this,s(i).apply(this,arguments))}return o(i,e),n(i,[{key:"format",value:function(e,t){var i=e.started?t:new Date,n=e.originalValue||t,o=this.countdown?n:i,s=this.countdown?i:n,r=[[this.getDays(o,s)],[this.getHours(o,s)],[this.getMinutes(o,s)]];return this.showSeconds&&r.push([this.getSeconds(o,s)]),r}},{key:"getDays",value:function(e,t){return Math.floor(this.getTotalSeconds(e,t)/60/60/24)}},{key:"getHours",value:function(e,t){return Math.abs(f(s(i.prototype),"getHours",this).call(this,e,t)%24)}}]),i}(It),Wt=function(e){function i(){return t(this,i),u(this,s(i).apply(this,arguments))}return o(i,e),n(i,[{key:"defaultDataType",value:function(){return Date}},{key:"defaultValue",value:function(){return new Date}},{key:"defaultAttributes",value:function(){return{showSeconds:!0,showLabels:!1}}},{key:"format",value:function(e,t){t||(t=new Date);var i=[[t.getHours()],[t.getMinutes()]];return this.showSeconds&&i.push([t.getSeconds()]),i}},{key:"increment",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e.value=new Date(this.value.value.getTime()+t+((new Date).getTime()-e.timer.lastLoop))}},{key:"decrement",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e.value=new Date(this.value.value.getTime()-t-((new Date).getTime()-e.timer.lastLoop))}}]),i}(B),Gt=function(e){function i(){return t(this,i),u(this,s(i).apply(this,arguments))}return o(i,e),n(i,[{key:"defaultAttributes",value:function(){return{showLabels:!1,showSeconds:!0,showMeridium:!0}}},{key:"format",value:function(e,t){t||(t=new Date);var i=t.getHours(),n=[i>12?i-12:0===i?12:i,t.getMinutes()];return this.meridium=i>12?"pm":"am",this.showSeconds&&n.push(t.getSeconds()),n}}]),i}(Wt),Zt=function(e){function i(){return t(this,i),u(this,s(i).apply(this,arguments))}return o(i,e),n(i,[{key:"format",value:function(e,t){var i=e.timer.started?t:new Date,n=e.originalValue||t,o=this.countdown?n:i,s=this.countdown?i:n,r=[[this.getWeeks(o,s)],[this.getDays(o,s)],[this.getHours(o,s)],[this.getMinutes(o,s)]];return this.showSeconds&&r.push([this.getSeconds(o,s)]),r}},{key:"getWeeks",value:function(e,t){return Math.floor(this.getTotalSeconds(e,t)/60/60/24/7)}},{key:"getDays",value:function(e,t){return Math.abs(f(s(i.prototype),"getDays",this).call(this,e,t)%7)}}]),i}(Bt),qt=function(e){function i(){return t(this,i),u(this,s(i).apply(this,arguments))}return o(i,e),n(i,[{key:"format",value:function(e,t){var i=e.timer.started?t:new Date,n=e.originalValue||t,o=this.countdown?n:i,s=this.countdown?i:n,r=[[this.getYears(o,s)],[this.getWeeks(o,s)],[this.getDays(o,s)],[this.getHours(o,s)],[this.getMinutes(o,s)]];return this.showSeconds&&r.push([this.getSeconds(o,s)]),r}},{key:"getYears",value:function(e,t){return Math.floor(Math.max(0,this.getTotalSeconds(e,t)/60/60/24/7/52))}},{key:"getWeeks",value:function(e,t){return Math.abs(f(s(i.prototype),"getWeeks",this).call(this,e,t)%52)}}]),i}(Zt),Yt=Object.freeze({Counter:Ut,DayCounter:Bt,MinuteCounter:Ft,HourCounter:It,TwelveHourClock:Gt,TwentyFourHourClock:Wt,WeekCounter:Zt,YearCounter:qt});function Jt(e,t){Ct(e,[Mt("div",{class:"flip-clock-dot top"}),Mt("div",{class:"flip-clock-dot bottom"})])}function Kt(e,t){return e?e.childNodes?e.childNodes[t]:e[t]:null}function Xt(e){return e?e.querySelector(".flip-clock-list-item:first-child .top").innerHTML:null}function Qt(e,t){var i=t.value.digits.map((function(e,i){var n=Kt(t.el?t.el.querySelectorAll(".flip-clock-group"):null,i),o=e.map((function(e,i){var o=Xt(Kt(n?n.querySelectorAll(".flip-clock-list"):null,i));return t.createList(e,{domValue:o,countdown:t.countdown,animationRate:t.face.animationRate||t.face.delay})}));return t.createGroup(o)}));Ct(e,i.map((function(e){return e.render()})))}function ei(e,t){Ct(e,t.items.map((function(e){return e.render()})))}function ti(e,t){e.innerHTML=t.t(t.label)}function ii(e,t){var i=t.domValue||(t.countdown?R(t.value):V(t.value));t.domValue&&t.domValue!==t.value&&e.classList.add("flip"),e.style.animationDelay="".concat(t.animationRate/2,"ms"),e.style.animationDuration="".concat(t.animationRate/2,"ms"),t.items=[t.createListItem(t.value,{active:!0}),t.createListItem(i,{active:!1})],Ct(e,t.items.map((function(e){return e.render()})))}function ni(e,t){var i=!0===t.active?"active":!1===t.active?"before":null;e.classList.add(i),Ct(e,[Mt("div",[Mt("div",t.value,{class:"top"}),Mt("div",t.value,{class:"bottom"})],{class:"flip-clock-list-item-inner"})])}function oi(e,t){t.createDivider().mount(e,e.childNodes[1]),t.createDivider().mount(e,e.childNodes[3]),t.face.showSeconds&&t.createDivider().mount(e,e.childNodes[5]),t.face.showLabels&&(t.createLabel("days").mount(e.childNodes[0]),t.createLabel("hours").mount(e.childNodes[2]),t.createLabel("minutes").mount(e.childNodes[4]),t.face.showSeconds&&t.createLabel("seconds").mount(e.childNodes[6]))}function si(e,t){t.createDivider().mount(e,e.childNodes[1]),t.face.showSeconds&&t.createDivider().mount(e,e.childNodes[3]),t.face.showLabels&&(t.createLabel("hours").mount(e.childNodes[0]),t.createLabel("minutes").mount(e.childNodes[2]),t.face.showSeconds&&t.createLabel("seconds").mount(e.childNodes[4]))}function ri(e,t){t.face.showSeconds&&t.createDivider().mount(e,e.childNodes[1]),t.face.showLabels&&(t.createLabel("minutes").mount(e.childNodes[0]),t.face.showSeconds&&t.createLabel("seconds").mount(e.childNodes[2]))}function ai(e,t){t.createDivider().mount(e,e.childNodes[1]),t.face.showSeconds&&t.createDivider().mount(e,e.childNodes[3]),t.face.showLabels&&(t.createLabel("hours").mount(e.childNodes[0]),t.createLabel("minutes").mount(e.childNodes[2]),t.face.showSeconds&&t.createLabel("seconds").mount(e.childNodes[4]))}function li(e,t){if(ai(e,t),t.face.showMeridium&&t.face.meridium){var i=t.createLabel(t.face.meridium),n=e.childNodes[e.childNodes.length-1];i.mount(n).classList.add("flip-clock-meridium")}}function ci(e,t){t.createDivider().mount(e,e.childNodes[1]),t.createDivider().mount(e,e.childNodes[3]),t.createDivider().mount(e,e.childNodes[5]),t.face.showSeconds&&t.createDivider().mount(e,e.childNodes[7]),t.face.showLabels&&(t.createLabel("weeks").mount(e.childNodes[0]),t.createLabel("days").mount(e.childNodes[2]),t.createLabel("hours").mount(e.childNodes[4]),t.createLabel("minutes").mount(e.childNodes[6]),t.face.showSeconds&&t.createLabel("seconds").mount(e.childNodes[8]))}function ui(e,t){t.createDivider().mount(e,e.childNodes[1]),t.createDivider().mount(e,e.childNodes[3]),t.createDivider().mount(e,e.childNodes[5]),t.createDivider().mount(e,e.childNodes[7]),t.face.showSeconds&&t.createDivider().mount(e,e.childNodes[9]),t.face.showLabels&&(t.createLabel("years").mount(e.childNodes[0]),t.createLabel("weeks").mount(e.childNodes[2]),t.createLabel("days").mount(e.childNodes[4]),t.createLabel("hours").mount(e.childNodes[6]),t.createLabel("minutes").mount(e.childNodes[8]),t.face.showSeconds&&t.createLabel("seconds").mount(e.childNodes[10]))}var hi={Divider:Jt,FlipClock:Qt,Group:ei,Label:ti,List:ii,ListItem:ni,faces:Object.freeze({DayCounter:oi,HourCounter:si,MinuteCounter:ri,TwelveHourClock:li,TwentyFourHourClock:ai,WeekCounter:ci,YearCounter:ui})},fi={face:Ut,theme:hi,language:le},di=function(e){function i(e,n,o){var r;t(this,i),F(e,HTMLElement)||d(I.element),E(n)&&!o&&(o=n,n=void 0);var a=o.face||fi.face;return delete o.face,(r=u(this,s(i).call(this,Object.assign({originalValue:n,theme:fi.theme,language:fi.language,timer:Vt.make(o.interval||1e3)},o)))).face||(r.face=a),r.mount(e),r}return o(i,e),n(i,[{key:"mount",value:function(e){return f(s(i.prototype),"mount",this).call(this,e),this.face.mounted(this),this}},{key:"render",value:function(){return f(s(i.prototype),"render",this).call(this),this.theme.faces[this.face.name]&&this.theme.faces[this.face.name](this.el,this),this.face.rendered(this),this.el}},{key:"start",value:function(e){var t=this;return this.timer.started||(this.value=this.originalValue),S(this.face.stopAt)&&(this.face.stopAt=this.stopAt),S(this.face.originalValue)&&(this.face.originalValue=this.originalValue),this.timer.start((function(){t.face.interval(t,e)})),this.face.started(this),this.emit("start")}},{key:"stop",value:function(e){return this.timer.stop(e),this.face.stopped(this),this.emit("stop")}},{key:"reset",value:function(e){var t=this;return this.value=this.originalValue,this.timer.reset((function(){return t.interval(t,e)})),this.face.reset(this),this.emit("reset")}},{key:"increment",value:function(e){return this.face.increment(this,e),this}},{key:"decrement",value:function(e){return this.face.decrement(this,e),this}},{key:"createDivider",value:function(e){return jt.make(Object.assign({theme:this.theme,language:this.language},e))}},{key:"createList",value:function(e,t){return Ht.make(e,Object.assign({theme:this.theme,language:this.language},t))}},{key:"createLabel",value:function(e,t){return Rt.make(e,Object.assign({theme:this.theme,language:this.language},t))}},{key:"createGroup",value:function(e,t){return Pt.make(e,Object.assign({theme:this.theme,language:this.language},t))}},{key:"face",get:function(){return this.$face},set:function(e){F(e,[B,"string","function"])||d(I.face),this.$face=(Yt[e]||e).make(Object.assign(this.getPublicAttributes(),{originalValue:this.face?this.face.originalValue:void 0})),this.$face.initialized(this),this.value?this.$face.value=this.face.createFaceValue(this,this.value.value):this.value||(this.value=this.originalValue),this.el&&this.render()}},{key:"stopAt",get:function(){return O(this.$stopAt)?this.$stopAt(this):this.$stopAt},set:function(e){this.$stopAt=e}},{key:"timer",get:function(){return this.$timer},set:function(e){F(e,Vt)||d(I.timer),this.$timer=e}},{key:"value",get:function(){return this.face?this.face.value:null},set:function(e){if(!this.face)throw new Error("A face must be set before setting a value.");e instanceof U?this.face.value=e:this.value?this.face.value=this.face.value.clone(e):this.face.value=this.face.createFaceValue(this,e),this.el&&this.render()}},{key:"originalValue",get:function(){return O(this.$originalValue)&&!this.$originalValue.name?this.$originalValue():S(this.$originalValue)||A(this.$originalValue)?this.face?this.face.defaultValue():void 0:this.$originalValue},set:function(e){this.$originalValue=e}}],[{key:"setDefaultFace",value:function(e){F(e,B)||d(I.face),fi.face=e}},{key:"setDefaultTheme",value:function(e){F(e,"object")||d(I.theme),fi.theme=e}},{key:"setDefaultLanguage",value:function(e){F(e,"object")||d(I.language),fi.language=e}},{key:"defaults",get:function(){return fi}}]),i}(Nt);return di}();var le=re(ae.exports);const ce=L`
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
`;function ue(...e){const t=e=>e&&"object"==typeof e;return e.reduce(((e,i)=>(Object.keys(i).forEach((n=>{const o=e[n],s=i[n];Array.isArray(o)&&Array.isArray(s)?e[n]=o.concat(...s):t(o)&&t(s)?e[n]=ue(o,s):e[n]=s})),e)),{})}console.info("%c  FLIPCLOCK-CARD \n%c  Version 0.2  ","color: orange; font-weight: bold; background: black","color: white; font-weight: bold; background: dimgray");let he=class extends te{constructor(){super(...arguments),this._clockFaces=["TwentyFourHourClock","TwelveHourClock"],this._firstUpdated=!1}set hass(e){this._hass=e,this._date=new Date,setInterval(this.updateTimezones.bind(this),500)}setConfig(e){if(!e)throw new Error("Invalid configuration");this._config=ue({title:null,time:{face:"TwentyFourHourClock",showSeconds:!1},timezones:[],date:{format:{weekday:"long",day:"numeric",month:"long",year:"numeric"},hidden:!1,locale:null}},e),this._timezones=[],this._config.timezones.forEach((e=>{this._timezones.push({id:"string"==typeof e?e:e.id,title:"string"==typeof e?e:e.title})}))}shouldUpdate(){return!this._firstUpdated}firstUpdated(){this._firstUpdated=!0}render(){return this._config&&this._hass?L`
      <ha-card>
        <div class="fc-content">
          ${this.showValue(this._config.title)?L`
                <div class="fc-header">
                  ${this._config.title}
                </div>
              `:""}
          <div class="fc-time">
            ${this.renderClock()}
          </div>
          ${this.renderDate()} ${this.renderTimezones()}
        </div>
      </ha-card>
      ${ce}
    `:L``}getCardSize(){return 3}showValue(e){return null!=e}renderClock(){if(this._clockFaces.includes(this._config.time.face)){const e=document.createElement("div");return e.className="fc-now",new le(e,this._date,{face:this._config.time.face,showSeconds:this._config.time.showSeconds}),L`${e}`}return L``}renderDate(){return this._config.date.hidden?L``:L` <div class="fc-date">
        ${this.formatDate(this._date)}
      </div>`}formatDate(e,t){var i;const n=this._config.date.locale||(null===(i=this._hass)||void 0===i?void 0:i.language),o=t||this._config.date.format;return e.toLocaleDateString(n,o)}formatTimezone(e){return this.formatDate(this._date,{hour:"numeric",minute:"numeric",timeZone:e,weekday:"short"})}renderTimezones(){return L`
      <div class="fc-timezone" id="fc_timezone">
        ${this._timezones.map(((e,t)=>L`
            <div class="item">
              <div class="tz">
                <ha-icon class="tz-icon" icon="mdi:clock-outline"></ha-icon>
                <div class="tz-locale">${e.title}</div>
              </div>
              <div class="tz-time" id="tz_${t}">
                ${this.formatTimezone(e.id)}
              </div>
            </div>
          `))}
      </div>
    `}updateTimezones(){this._timezones.map(((e,t)=>{var i;const n=null===(i=this.shadowRoot)||void 0===i?void 0:i.getElementById(`tz_${t}`);n&&(n.innerHTML=this.formatTimezone(e.id))}))}};he.cardType="flipclock-card",he.cardName="flipclock Card",he.cardDescription="Custom card that display a flipclock-card",e([oe()],he.prototype,"_hass",void 0),e([oe()],he.prototype,"_config",void 0),he=e([(e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:i,elements:n}=t;return{kind:i,elements:n,finisher(t){customElements.define(e,t)}}})(e,t))("flipclock-card")],he),window.customCards=window.customCards||[],window.customCards.push({type:he.cardType,name:he.cardName,description:he.cardDescription});
