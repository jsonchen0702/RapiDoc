
/**
* @preserve
* RapiDoc 9.3.3 - WebComponent to View OpenAPI docs
* License: MIT
* Repo   : https://github.com/rapi-doc/RapiDoc
* Author : Mrinmoy Majumdar
*/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 656:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// UNUSED EXPORTS: JsonSchemaViewer, OAuthReceiver, RapiDocMini, default

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/css-tag.js
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const css_tag_t=window,e=css_tag_t.ShadowRoot&&(void 0===css_tag_t.ShadyCSS||css_tag_t.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s=Symbol(),n=new WeakMap;class o{constructor(t,e,n){if(this._$cssResult$=!0,n!==s)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const s=this.t;if(e&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n.set(s,t))}return t}toString(){return this.cssText}}const r=t=>new o("string"==typeof t?t:t+"",void 0,s),i=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o(n,t,s)},S=(s,n)=>{e?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=css_tag_t.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n)}))},c=e?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r(e)})(t):t;
//# sourceMappingURL=css-tag.js.map

;// CONCATENATED MODULE: ./node_modules/@lit/reactive-element/reactive-element.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var reactive_element_s;const reactive_element_e=window,reactive_element_r=reactive_element_e.trustedTypes,h=reactive_element_r?reactive_element_r.emptyScript:"",reactive_element_o=reactive_element_e.reactiveElementPolyfillSupport,reactive_element_n={toAttribute(t,i){switch(i){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},a=(t,i)=>i!==t&&(i==i||t==t),l={attribute:!0,type:String,converter:reactive_element_n,reflect:!1,hasChanged:a};class d extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var i;null!==(i=this.h)&&void 0!==i||(this.h=[]),this.h.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e))})),t}static createProperty(t,i=l){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c(i))}else void 0!==i&&s.push(c(i));return s}static _$Ep(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}))}attributeChangedCallback(t,i,s){this._$AK(t,s)}_$EO(t,i,s=l){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:reactive_element_n).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:reactive_element_n;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek()}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s)}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}d.finalized=!0,d.elementProperties=new Map,d.elementStyles=[],d.shadowRootOptions={mode:"open"},null==reactive_element_o||reactive_element_o({ReactiveElement:d}),(null!==(reactive_element_s=reactive_element_e.reactiveElementVersions)&&void 0!==reactive_element_s?reactive_element_s:reactive_element_e.reactiveElementVersions=[]).push("1.4.0");
//# sourceMappingURL=reactive-element.js.map

;// CONCATENATED MODULE: ./node_modules/lit-html/lit-html.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var lit_html_t;const lit_html_i=window,lit_html_s=lit_html_i.trustedTypes,lit_html_e=lit_html_s?lit_html_s.createPolicy("lit-html",{createHTML:t=>t}):void 0,lit_html_o=`lit$${(Math.random()+"").slice(9)}$`,lit_html_n="?"+lit_html_o,lit_html_l=`<${lit_html_n}>`,lit_html_h=document,lit_html_r=(t="")=>lit_html_h.createComment(t),lit_html_d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,lit_html_c=t=>u(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lit_html_a=/-->/g,f=/>/g,_=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),m=/'/g,p=/"/g,$=/^(?:script|style|textarea|title)$/i,g=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),y=g(1),w=g(2),x=Symbol.for("lit-noChange"),b=Symbol.for("lit-nothing"),T=new WeakMap,A=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new lit_html_S(i.insertBefore(lit_html_r(),t),t,void 0,null!=s?s:{})}return l._$AI(t),l},E=lit_html_h.createTreeWalker(lit_html_h,129,null,!1),C=(t,i)=>{const s=t.length-1,n=[];let h,r=2===i?"<svg>":"",d=v;for(let i=0;i<s;i++){const s=t[i];let e,u,c=-1,g=0;for(;g<s.length&&(d.lastIndex=g,u=d.exec(s),null!==u);)g=d.lastIndex,d===v?"!--"===u[1]?d=lit_html_a:void 0!==u[1]?d=f:void 0!==u[2]?($.test(u[2])&&(h=RegExp("</"+u[2],"g")),d=_):void 0!==u[3]&&(d=_):d===_?">"===u[0]?(d=null!=h?h:v,c=-1):void 0===u[1]?c=-2:(c=d.lastIndex-u[2].length,e=u[1],d=void 0===u[3]?_:'"'===u[3]?p:m):d===p||d===m?d=_:d===lit_html_a||d===f?d=v:(d=_,h=void 0);const y=d===_&&t[i+1].startsWith("/>")?" ":"";r+=d===v?s+lit_html_l:c>=0?(n.push(e),s.slice(0,c)+"$lit$"+s.slice(c)+lit_html_o+y):s+lit_html_o+(-2===c?(n.push(void 0),i):y)}const u=r+(t[s]||"<?>")+(2===i?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==lit_html_e?lit_html_e.createHTML(u):u,n]};class P{constructor({strings:t,_$litType$:i},e){let l;this.parts=[];let h=0,d=0;const u=t.length-1,c=this.parts,[v,a]=C(t,i);if(this.el=P.createElement(v,e),E.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(l=E.nextNode())&&c.length<u;){if(1===l.nodeType){if(l.hasAttributes()){const t=[];for(const i of l.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(lit_html_o)){const s=a[d++];if(t.push(i),void 0!==s){const t=l.getAttribute(s.toLowerCase()+"$lit$").split(lit_html_o),i=/([.?@])?(.*)/.exec(s);c.push({type:1,index:h,name:i[2],strings:t,ctor:"."===i[1]?R:"?"===i[1]?H:"@"===i[1]?I:M})}else c.push({type:6,index:h})}for(const i of t)l.removeAttribute(i)}if($.test(l.tagName)){const t=l.textContent.split(lit_html_o),i=t.length-1;if(i>0){l.textContent=lit_html_s?lit_html_s.emptyScript:"";for(let s=0;s<i;s++)l.append(t[s],lit_html_r()),E.nextNode(),c.push({type:2,index:++h});l.append(t[i],lit_html_r())}}}else if(8===l.nodeType)if(l.data===lit_html_n)c.push({type:2,index:h});else{let t=-1;for(;-1!==(t=l.data.indexOf(lit_html_o,t+1));)c.push({type:7,index:h}),t+=lit_html_o.length-1}h++}}static createElement(t,i){const s=lit_html_h.createElement("template");return s.innerHTML=t,s}}function V(t,i,s=t,e){var o,n,l,h;if(i===x)return i;let r=void 0!==e?null===(o=s._$Cl)||void 0===o?void 0:o[e]:s._$Cu;const u=lit_html_d(i)?void 0:i._$litDirective$;return(null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Cl)&&void 0!==l?l:h._$Cl=[])[e]=r:s._$Cu=r),void 0!==r&&(i=V(t,r._$AS(t,i.values),r,e)),i}class N{constructor(t,i){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:lit_html_h).importNode(s,!0);E.currentNode=o;let n=E.nextNode(),l=0,r=0,d=e[0];for(;void 0!==d;){if(l===d.index){let i;2===d.type?i=new lit_html_S(n,n.nextSibling,this,t):1===d.type?i=new d.ctor(n,d.name,d.strings,this,t):6===d.type&&(i=new L(n,this,t)),this.v.push(i),d=e[++r]}l!==(null==d?void 0:d.index)&&(n=E.nextNode(),l++)}return o}m(t){let i=0;for(const s of this.v)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++}}class lit_html_S{constructor(t,i,s,e){var o;this.type=2,this._$AH=b,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$C_=null===(o=null==e?void 0:e.isConnected)||void 0===o||o}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$C_}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===t.nodeType&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=V(this,t,i),lit_html_d(t)?t===b||null==t||""===t?(this._$AH!==b&&this._$AR(),this._$AH=b):t!==this._$AH&&t!==x&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):lit_html_c(t)?this.O(t):this.$(t)}S(t,i=this._$AB){return this._$AA.parentNode.insertBefore(t,i)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}$(t){this._$AH!==b&&lit_html_d(this._$AH)?this._$AA.nextSibling.data=t:this.k(lit_html_h.createTextNode(t)),this._$AH=t}T(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=P.createElement(e.h,this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.m(s);else{const t=new N(o,this),i=t.p(this.options);t.m(s),this.k(i),this._$AH=t}}_$AC(t){let i=T.get(t.strings);return void 0===i&&T.set(t.strings,i=new P(t)),i}O(t){u(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new lit_html_S(this.S(lit_html_r()),this.S(lit_html_r()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e)}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var i;void 0===this._$AM&&(this._$C_=t,null===(i=this._$AP)||void 0===i||i.call(this,t))}}class M{constructor(t,i,s,e,o){this.type=1,this._$AH=b,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=b}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=V(this,t,i,0),n=!lit_html_d(t)||t!==this._$AH&&t!==x,n&&(this._$AH=t);else{const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=V(this,e[s+l],i,l),h===x&&(h=this._$AH[l]),n||(n=!lit_html_d(h)||h!==this._$AH[l]),h===b?t=b:t!==b&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h}n&&!e&&this.P(t)}P(t){t===b?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class R extends M{constructor(){super(...arguments),this.type=3}P(t){this.element[this.name]=t===b?void 0:t}}const k=lit_html_s?lit_html_s.emptyScript:"";class H extends M{constructor(){super(...arguments),this.type=4}P(t){t&&t!==b?this.element.setAttribute(this.name,k):this.element.removeAttribute(this.name)}}class I extends M{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5}_$AI(t,i=this){var s;if((t=null!==(s=V(this,t,i,0))&&void 0!==s?s:b)===x)return;const e=this._$AH,o=t===b&&e!==b||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==b&&(e===b||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t)}}class L{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){V(this,t)}}const z={A:"$lit$",M:lit_html_o,C:lit_html_n,L:1,R:C,D:N,V:lit_html_c,I:V,H:lit_html_S,N:M,U:H,B:I,F:R,W:L},Z=lit_html_i.litHtmlPolyfillSupport;null==Z||Z(P,lit_html_S),(null!==(lit_html_t=lit_html_i.litHtmlVersions)&&void 0!==lit_html_t?lit_html_t:lit_html_i.litHtmlVersions=[]).push("2.3.0");
//# sourceMappingURL=lit-html.js.map

;// CONCATENATED MODULE: ./node_modules/lit-element/lit-element.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var lit_element_l,lit_element_o;const lit_element_r=(/* unused pure expression or super */ null && (t));class lit_element_s extends d{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=A(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return x}}lit_element_s.finalized=!0,lit_element_s._$litElement$=!0,null===(lit_element_l=globalThis.litElementHydrateSupport)||void 0===lit_element_l||lit_element_l.call(globalThis,{LitElement:lit_element_s});const lit_element_n=globalThis.litElementPolyfillSupport;null==lit_element_n||lit_element_n({LitElement:lit_element_s});const lit_element_h={_$AK:(t,e,i)=>{t._$AK(e,i)},_$AL:t=>t._$AL};(null!==(lit_element_o=globalThis.litElementVersions)&&void 0!==lit_element_o?lit_element_o:globalThis.litElementVersions=[]).push("3.2.0");
//# sourceMappingURL=lit-element.js.map

;// CONCATENATED MODULE: ./node_modules/lit/index.js

//# sourceMappingURL=index.js.map

;// CONCATENATED MODULE: ./node_modules/marked/lib/marked.esm.js
/**
 * marked - a markdown parser
 * Copyright (c) 2011-2022, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */

/**
 * DO NOT EDIT THIS FILE
 * The code in this file is generated from files in ./src/
 */

function getDefaults() {
  return {
    baseUrl: null,
    breaks: false,
    extensions: null,
    gfm: true,
    headerIds: true,
    headerPrefix: '',
    highlight: null,
    langPrefix: 'language-',
    mangle: true,
    pedantic: false,
    renderer: null,
    sanitize: false,
    sanitizer: null,
    silent: false,
    smartLists: false,
    smartypants: false,
    tokenizer: null,
    walkTokens: null,
    xhtml: false
  };
}

let defaults = getDefaults();

function changeDefaults(newDefaults) {
  defaults = newDefaults;
}

/**
 * Helpers
 */
const escapeTest = /[&<>"']/;
const escapeReplace = /[&<>"']/g;
const escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
const escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;
const escapeReplacements = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;'
};
const getEscapeReplacement = (ch) => escapeReplacements[ch];
function marked_esm_escape(html, encode) {
  if (encode) {
    if (escapeTest.test(html)) {
      return html.replace(escapeReplace, getEscapeReplacement);
    }
  } else {
    if (escapeTestNoEncode.test(html)) {
      return html.replace(escapeReplaceNoEncode, getEscapeReplacement);
    }
  }

  return html;
}

const unescapeTest = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig;

/**
 * @param {string} html
 */
function marked_esm_unescape(html) {
  // explicitly match decimal, hex, and named HTML entities
  return html.replace(unescapeTest, (_, n) => {
    n = n.toLowerCase();
    if (n === 'colon') return ':';
    if (n.charAt(0) === '#') {
      return n.charAt(1) === 'x'
        ? String.fromCharCode(parseInt(n.substring(2), 16))
        : String.fromCharCode(+n.substring(1));
    }
    return '';
  });
}

const caret = /(^|[^\[])\^/g;

/**
 * @param {string | RegExp} regex
 * @param {string} opt
 */
function edit(regex, opt) {
  regex = typeof regex === 'string' ? regex : regex.source;
  opt = opt || '';
  const obj = {
    replace: (name, val) => {
      val = val.source || val;
      val = val.replace(caret, '$1');
      regex = regex.replace(name, val);
      return obj;
    },
    getRegex: () => {
      return new RegExp(regex, opt);
    }
  };
  return obj;
}

const nonWordAndColonTest = /[^\w:]/g;
const originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

/**
 * @param {boolean} sanitize
 * @param {string} base
 * @param {string} href
 */
function cleanUrl(sanitize, base, href) {
  if (sanitize) {
    let prot;
    try {
      prot = decodeURIComponent(marked_esm_unescape(href))
        .replace(nonWordAndColonTest, '')
        .toLowerCase();
    } catch (e) {
      return null;
    }
    if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
      return null;
    }
  }
  if (base && !originIndependentUrl.test(href)) {
    href = resolveUrl(base, href);
  }
  try {
    href = encodeURI(href).replace(/%25/g, '%');
  } catch (e) {
    return null;
  }
  return href;
}

const baseUrls = {};
const justDomain = /^[^:]+:\/*[^/]*$/;
const protocol = /^([^:]+:)[\s\S]*$/;
const domain = /^([^:]+:\/*[^/]*)[\s\S]*$/;

/**
 * @param {string} base
 * @param {string} href
 */
function resolveUrl(base, href) {
  if (!baseUrls[' ' + base]) {
    // we can ignore everything in base after the last slash of its path component,
    // but we might need to add _that_
    // https://tools.ietf.org/html/rfc3986#section-3
    if (justDomain.test(base)) {
      baseUrls[' ' + base] = base + '/';
    } else {
      baseUrls[' ' + base] = rtrim(base, '/', true);
    }
  }
  base = baseUrls[' ' + base];
  const relativeBase = base.indexOf(':') === -1;

  if (href.substring(0, 2) === '//') {
    if (relativeBase) {
      return href;
    }
    return base.replace(protocol, '$1') + href;
  } else if (href.charAt(0) === '/') {
    if (relativeBase) {
      return href;
    }
    return base.replace(domain, '$1') + href;
  } else {
    return base + href;
  }
}

const noopTest = { exec: function noopTest() {} };

function merge(obj) {
  let i = 1,
    target,
    key;

  for (; i < arguments.length; i++) {
    target = arguments[i];
    for (key in target) {
      if (Object.prototype.hasOwnProperty.call(target, key)) {
        obj[key] = target[key];
      }
    }
  }

  return obj;
}

function splitCells(tableRow, count) {
  // ensure that every cell-delimiting pipe has a space
  // before it to distinguish it from an escaped pipe
  const row = tableRow.replace(/\|/g, (match, offset, str) => {
      let escaped = false,
        curr = offset;
      while (--curr >= 0 && str[curr] === '\\') escaped = !escaped;
      if (escaped) {
        // odd number of slashes means | is escaped
        // so we leave it alone
        return '|';
      } else {
        // add space before unescaped |
        return ' |';
      }
    }),
    cells = row.split(/ \|/);
  let i = 0;

  // First/last cell in a row cannot be empty if it has no leading/trailing pipe
  if (!cells[0].trim()) { cells.shift(); }
  if (cells.length > 0 && !cells[cells.length - 1].trim()) { cells.pop(); }

  if (cells.length > count) {
    cells.splice(count);
  } else {
    while (cells.length < count) cells.push('');
  }

  for (; i < cells.length; i++) {
    // leading or trailing whitespace is ignored per the gfm spec
    cells[i] = cells[i].trim().replace(/\\\|/g, '|');
  }
  return cells;
}

/**
 * Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
 * /c*$/ is vulnerable to REDOS.
 *
 * @param {string} str
 * @param {string} c
 * @param {boolean} invert Remove suffix of non-c chars instead. Default falsey.
 */
function rtrim(str, c, invert) {
  const l = str.length;
  if (l === 0) {
    return '';
  }

  // Length of suffix matching the invert condition.
  let suffLen = 0;

  // Step left until we fail to match the invert condition.
  while (suffLen < l) {
    const currChar = str.charAt(l - suffLen - 1);
    if (currChar === c && !invert) {
      suffLen++;
    } else if (currChar !== c && invert) {
      suffLen++;
    } else {
      break;
    }
  }

  return str.slice(0, l - suffLen);
}

function findClosingBracket(str, b) {
  if (str.indexOf(b[1]) === -1) {
    return -1;
  }
  const l = str.length;
  let level = 0,
    i = 0;
  for (; i < l; i++) {
    if (str[i] === '\\') {
      i++;
    } else if (str[i] === b[0]) {
      level++;
    } else if (str[i] === b[1]) {
      level--;
      if (level < 0) {
        return i;
      }
    }
  }
  return -1;
}

function checkSanitizeDeprecation(opt) {
  if (opt && opt.sanitize && !opt.silent) {
    console.warn('marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options');
  }
}

// copied from https://stackoverflow.com/a/5450113/806777
/**
 * @param {string} pattern
 * @param {number} count
 */
function repeatString(pattern, count) {
  if (count < 1) {
    return '';
  }
  let result = '';
  while (count > 1) {
    if (count & 1) {
      result += pattern;
    }
    count >>= 1;
    pattern += pattern;
  }
  return result + pattern;
}

function outputLink(cap, link, raw, lexer) {
  const href = link.href;
  const title = link.title ? marked_esm_escape(link.title) : null;
  const text = cap[1].replace(/\\([\[\]])/g, '$1');

  if (cap[0].charAt(0) !== '!') {
    lexer.state.inLink = true;
    const token = {
      type: 'link',
      raw,
      href,
      title,
      text,
      tokens: lexer.inlineTokens(text, [])
    };
    lexer.state.inLink = false;
    return token;
  }
  return {
    type: 'image',
    raw,
    href,
    title,
    text: marked_esm_escape(text)
  };
}

function indentCodeCompensation(raw, text) {
  const matchIndentToCode = raw.match(/^(\s+)(?:```)/);

  if (matchIndentToCode === null) {
    return text;
  }

  const indentToCode = matchIndentToCode[1];

  return text
    .split('\n')
    .map(node => {
      const matchIndentInNode = node.match(/^\s+/);
      if (matchIndentInNode === null) {
        return node;
      }

      const [indentInNode] = matchIndentInNode;

      if (indentInNode.length >= indentToCode.length) {
        return node.slice(indentToCode.length);
      }

      return node;
    })
    .join('\n');
}

/**
 * Tokenizer
 */
class Tokenizer {
  constructor(options) {
    this.options = options || defaults;
  }

  space(src) {
    const cap = this.rules.block.newline.exec(src);
    if (cap && cap[0].length > 0) {
      return {
        type: 'space',
        raw: cap[0]
      };
    }
  }

  code(src) {
    const cap = this.rules.block.code.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ {1,4}/gm, '');
      return {
        type: 'code',
        raw: cap[0],
        codeBlockStyle: 'indented',
        text: !this.options.pedantic
          ? rtrim(text, '\n')
          : text
      };
    }
  }

  fences(src) {
    const cap = this.rules.block.fences.exec(src);
    if (cap) {
      const raw = cap[0];
      const text = indentCodeCompensation(raw, cap[3] || '');

      return {
        type: 'code',
        raw,
        lang: cap[2] ? cap[2].trim() : cap[2],
        text
      };
    }
  }

  heading(src) {
    const cap = this.rules.block.heading.exec(src);
    if (cap) {
      let text = cap[2].trim();

      // remove trailing #s
      if (/#$/.test(text)) {
        const trimmed = rtrim(text, '#');
        if (this.options.pedantic) {
          text = trimmed.trim();
        } else if (!trimmed || / $/.test(trimmed)) {
          // CommonMark requires space before trailing #s
          text = trimmed.trim();
        }
      }

      const token = {
        type: 'heading',
        raw: cap[0],
        depth: cap[1].length,
        text,
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }

  hr(src) {
    const cap = this.rules.block.hr.exec(src);
    if (cap) {
      return {
        type: 'hr',
        raw: cap[0]
      };
    }
  }

  blockquote(src) {
    const cap = this.rules.block.blockquote.exec(src);
    if (cap) {
      const text = cap[0].replace(/^ *>[ \t]?/gm, '');

      return {
        type: 'blockquote',
        raw: cap[0],
        tokens: this.lexer.blockTokens(text, []),
        text
      };
    }
  }

  list(src) {
    let cap = this.rules.block.list.exec(src);
    if (cap) {
      let raw, istask, ischecked, indent, i, blankLine, endsWithBlankLine,
        line, nextLine, rawLine, itemContents, endEarly;

      let bull = cap[1].trim();
      const isordered = bull.length > 1;

      const list = {
        type: 'list',
        raw: '',
        ordered: isordered,
        start: isordered ? +bull.slice(0, -1) : '',
        loose: false,
        items: []
      };

      bull = isordered ? `\\d{1,9}\\${bull.slice(-1)}` : `\\${bull}`;

      if (this.options.pedantic) {
        bull = isordered ? bull : '[*+-]';
      }

      // Get next list item
      const itemRegex = new RegExp(`^( {0,3}${bull})((?:[\t ][^\\n]*)?(?:\\n|$))`);

      // Check if current bullet point can start a new List Item
      while (src) {
        endEarly = false;
        if (!(cap = itemRegex.exec(src))) {
          break;
        }

        if (this.rules.block.hr.test(src)) { // End list if bullet was actually HR (possibly move into itemRegex?)
          break;
        }

        raw = cap[0];
        src = src.substring(raw.length);

        line = cap[2].split('\n', 1)[0];
        nextLine = src.split('\n', 1)[0];

        if (this.options.pedantic) {
          indent = 2;
          itemContents = line.trimLeft();
        } else {
          indent = cap[2].search(/[^ ]/); // Find first non-space char
          indent = indent > 4 ? 1 : indent; // Treat indented code blocks (> 4 spaces) as having only 1 indent
          itemContents = line.slice(indent);
          indent += cap[1].length;
        }

        blankLine = false;

        if (!line && /^ *$/.test(nextLine)) { // Items begin with at most one blank line
          raw += nextLine + '\n';
          src = src.substring(nextLine.length + 1);
          endEarly = true;
        }

        if (!endEarly) {
          const nextBulletRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:[*+-]|\\d{1,9}[.)])((?: [^\\n]*)?(?:\\n|$))`);
          const hrRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`);
          const fencesBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}(?:\`\`\`|~~~)`);
          const headingBeginRegex = new RegExp(`^ {0,${Math.min(3, indent - 1)}}#`);

          // Check if following lines should be included in List Item
          while (src) {
            rawLine = src.split('\n', 1)[0];
            line = rawLine;

            // Re-align to follow commonmark nesting rules
            if (this.options.pedantic) {
              line = line.replace(/^ {1,4}(?=( {4})*[^ ])/g, '  ');
            }

            // End list item if found code fences
            if (fencesBeginRegex.test(line)) {
              break;
            }

            // End list item if found start of new heading
            if (headingBeginRegex.test(line)) {
              break;
            }

            // End list item if found start of new bullet
            if (nextBulletRegex.test(line)) {
              break;
            }

            // Horizontal rule found
            if (hrRegex.test(src)) {
              break;
            }

            if (line.search(/[^ ]/) >= indent || !line.trim()) { // Dedent if possible
              itemContents += '\n' + line.slice(indent);
            } else if (!blankLine) { // Until blank line, item doesn't need indentation
              itemContents += '\n' + line;
            } else { // Otherwise, improper indentation ends this item
              break;
            }

            if (!blankLine && !line.trim()) { // Check if current line is blank
              blankLine = true;
            }

            raw += rawLine + '\n';
            src = src.substring(rawLine.length + 1);
          }
        }

        if (!list.loose) {
          // If the previous item ended with a blank line, the list is loose
          if (endsWithBlankLine) {
            list.loose = true;
          } else if (/\n *\n *$/.test(raw)) {
            endsWithBlankLine = true;
          }
        }

        // Check for task list items
        if (this.options.gfm) {
          istask = /^\[[ xX]\] /.exec(itemContents);
          if (istask) {
            ischecked = istask[0] !== '[ ] ';
            itemContents = itemContents.replace(/^\[[ xX]\] +/, '');
          }
        }

        list.items.push({
          type: 'list_item',
          raw,
          task: !!istask,
          checked: ischecked,
          loose: false,
          text: itemContents
        });

        list.raw += raw;
      }

      // Do not consume newlines at end of final item. Alternatively, make itemRegex *start* with any newlines to simplify/speed up endsWithBlankLine logic
      list.items[list.items.length - 1].raw = raw.trimRight();
      list.items[list.items.length - 1].text = itemContents.trimRight();
      list.raw = list.raw.trimRight();

      const l = list.items.length;

      // Item child tokens handled here at end because we needed to have the final item to trim it first
      for (i = 0; i < l; i++) {
        this.lexer.state.top = false;
        list.items[i].tokens = this.lexer.blockTokens(list.items[i].text, []);
        const spacers = list.items[i].tokens.filter(t => t.type === 'space');
        const hasMultipleLineBreaks = spacers.every(t => {
          const chars = t.raw.split('');
          let lineBreaks = 0;
          for (const char of chars) {
            if (char === '\n') {
              lineBreaks += 1;
            }
            if (lineBreaks > 1) {
              return true;
            }
          }

          return false;
        });

        if (!list.loose && spacers.length && hasMultipleLineBreaks) {
          // Having a single line break doesn't mean a list is loose. A single line break is terminating the last list item
          list.loose = true;
          list.items[i].loose = true;
        }
      }

      return list;
    }
  }

  html(src) {
    const cap = this.rules.block.html.exec(src);
    if (cap) {
      const token = {
        type: 'html',
        raw: cap[0],
        pre: !this.options.sanitizer
          && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
        text: cap[0]
      };
      if (this.options.sanitize) {
        token.type = 'paragraph';
        token.text = this.options.sanitizer ? this.options.sanitizer(cap[0]) : marked_esm_escape(cap[0]);
        token.tokens = [];
        this.lexer.inline(token.text, token.tokens);
      }
      return token;
    }
  }

  def(src) {
    const cap = this.rules.block.def.exec(src);
    if (cap) {
      if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
      const tag = cap[1].toLowerCase().replace(/\s+/g, ' ');
      return {
        type: 'def',
        tag,
        raw: cap[0],
        href: cap[2],
        title: cap[3]
      };
    }
  }

  table(src) {
    const cap = this.rules.block.table.exec(src);
    if (cap) {
      const item = {
        type: 'table',
        header: splitCells(cap[1]).map(c => { return { text: c }; }),
        align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
        rows: cap[3] && cap[3].trim() ? cap[3].replace(/\n[ \t]*$/, '').split('\n') : []
      };

      if (item.header.length === item.align.length) {
        item.raw = cap[0];

        let l = item.align.length;
        let i, j, k, row;
        for (i = 0; i < l; i++) {
          if (/^ *-+: *$/.test(item.align[i])) {
            item.align[i] = 'right';
          } else if (/^ *:-+: *$/.test(item.align[i])) {
            item.align[i] = 'center';
          } else if (/^ *:-+ *$/.test(item.align[i])) {
            item.align[i] = 'left';
          } else {
            item.align[i] = null;
          }
        }

        l = item.rows.length;
        for (i = 0; i < l; i++) {
          item.rows[i] = splitCells(item.rows[i], item.header.length).map(c => { return { text: c }; });
        }

        // parse child tokens inside headers and cells

        // header child tokens
        l = item.header.length;
        for (j = 0; j < l; j++) {
          item.header[j].tokens = [];
          this.lexer.inline(item.header[j].text, item.header[j].tokens);
        }

        // cell child tokens
        l = item.rows.length;
        for (j = 0; j < l; j++) {
          row = item.rows[j];
          for (k = 0; k < row.length; k++) {
            row[k].tokens = [];
            this.lexer.inline(row[k].text, row[k].tokens);
          }
        }

        return item;
      }
    }
  }

  lheading(src) {
    const cap = this.rules.block.lheading.exec(src);
    if (cap) {
      const token = {
        type: 'heading',
        raw: cap[0],
        depth: cap[2].charAt(0) === '=' ? 1 : 2,
        text: cap[1],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }

  paragraph(src) {
    const cap = this.rules.block.paragraph.exec(src);
    if (cap) {
      const token = {
        type: 'paragraph',
        raw: cap[0],
        text: cap[1].charAt(cap[1].length - 1) === '\n'
          ? cap[1].slice(0, -1)
          : cap[1],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }

  text(src) {
    const cap = this.rules.block.text.exec(src);
    if (cap) {
      const token = {
        type: 'text',
        raw: cap[0],
        text: cap[0],
        tokens: []
      };
      this.lexer.inline(token.text, token.tokens);
      return token;
    }
  }

  escape(src) {
    const cap = this.rules.inline.escape.exec(src);
    if (cap) {
      return {
        type: 'escape',
        raw: cap[0],
        text: marked_esm_escape(cap[1])
      };
    }
  }

  tag(src) {
    const cap = this.rules.inline.tag.exec(src);
    if (cap) {
      if (!this.lexer.state.inLink && /^<a /i.test(cap[0])) {
        this.lexer.state.inLink = true;
      } else if (this.lexer.state.inLink && /^<\/a>/i.test(cap[0])) {
        this.lexer.state.inLink = false;
      }
      if (!this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = true;
      } else if (this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
        this.lexer.state.inRawBlock = false;
      }

      return {
        type: this.options.sanitize
          ? 'text'
          : 'html',
        raw: cap[0],
        inLink: this.lexer.state.inLink,
        inRawBlock: this.lexer.state.inRawBlock,
        text: this.options.sanitize
          ? (this.options.sanitizer
            ? this.options.sanitizer(cap[0])
            : marked_esm_escape(cap[0]))
          : cap[0]
      };
    }
  }

  link(src) {
    const cap = this.rules.inline.link.exec(src);
    if (cap) {
      const trimmedUrl = cap[2].trim();
      if (!this.options.pedantic && /^</.test(trimmedUrl)) {
        // commonmark requires matching angle brackets
        if (!(/>$/.test(trimmedUrl))) {
          return;
        }

        // ending angle bracket cannot be escaped
        const rtrimSlash = rtrim(trimmedUrl.slice(0, -1), '\\');
        if ((trimmedUrl.length - rtrimSlash.length) % 2 === 0) {
          return;
        }
      } else {
        // find closing parenthesis
        const lastParenIndex = findClosingBracket(cap[2], '()');
        if (lastParenIndex > -1) {
          const start = cap[0].indexOf('!') === 0 ? 5 : 4;
          const linkLen = start + cap[1].length + lastParenIndex;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = '';
        }
      }
      let href = cap[2];
      let title = '';
      if (this.options.pedantic) {
        // split pedantic href and title
        const link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

        if (link) {
          href = link[1];
          title = link[3];
        }
      } else {
        title = cap[3] ? cap[3].slice(1, -1) : '';
      }

      href = href.trim();
      if (/^</.test(href)) {
        if (this.options.pedantic && !(/>$/.test(trimmedUrl))) {
          // pedantic allows starting angle bracket without ending angle bracket
          href = href.slice(1);
        } else {
          href = href.slice(1, -1);
        }
      }
      return outputLink(cap, {
        href: href ? href.replace(this.rules.inline._escapes, '$1') : href,
        title: title ? title.replace(this.rules.inline._escapes, '$1') : title
      }, cap[0], this.lexer);
    }
  }

  reflink(src, links) {
    let cap;
    if ((cap = this.rules.inline.reflink.exec(src))
        || (cap = this.rules.inline.nolink.exec(src))) {
      let link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
      link = links[link.toLowerCase()];
      if (!link || !link.href) {
        const text = cap[0].charAt(0);
        return {
          type: 'text',
          raw: text,
          text
        };
      }
      return outputLink(cap, link, cap[0], this.lexer);
    }
  }

  emStrong(src, maskedSrc, prevChar = '') {
    let match = this.rules.inline.emStrong.lDelim.exec(src);
    if (!match) return;

    // _ can't be between two alphanumerics. \p{L}\p{N} includes non-english alphabet/numbers as well
    if (match[3] && prevChar.match(/[\p{L}\p{N}]/u)) return;

    const nextChar = match[1] || match[2] || '';

    if (!nextChar || (nextChar && (prevChar === '' || this.rules.inline.punctuation.exec(prevChar)))) {
      const lLength = match[0].length - 1;
      let rDelim, rLength, delimTotal = lLength, midDelimTotal = 0;

      const endReg = match[0][0] === '*' ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
      endReg.lastIndex = 0;

      // Clip maskedSrc to same section of string as src (move to lexer?)
      maskedSrc = maskedSrc.slice(-1 * src.length + lLength);

      while ((match = endReg.exec(maskedSrc)) != null) {
        rDelim = match[1] || match[2] || match[3] || match[4] || match[5] || match[6];

        if (!rDelim) continue; // skip single * in __abc*abc__

        rLength = rDelim.length;

        if (match[3] || match[4]) { // found another Left Delim
          delimTotal += rLength;
          continue;
        } else if (match[5] || match[6]) { // either Left or Right Delim
          if (lLength % 3 && !((lLength + rLength) % 3)) {
            midDelimTotal += rLength;
            continue; // CommonMark Emphasis Rules 9-10
          }
        }

        delimTotal -= rLength;

        if (delimTotal > 0) continue; // Haven't found enough closing delimiters

        // Remove extra characters. *a*** -> *a*
        rLength = Math.min(rLength, rLength + delimTotal + midDelimTotal);

        // Create `em` if smallest delimiter has odd char count. *a***
        if (Math.min(lLength, rLength) % 2) {
          const text = src.slice(1, lLength + match.index + rLength);
          return {
            type: 'em',
            raw: src.slice(0, lLength + match.index + rLength + 1),
            text,
            tokens: this.lexer.inlineTokens(text, [])
          };
        }

        // Create 'strong' if smallest delimiter has even char count. **a***
        const text = src.slice(2, lLength + match.index + rLength - 1);
        return {
          type: 'strong',
          raw: src.slice(0, lLength + match.index + rLength + 1),
          text,
          tokens: this.lexer.inlineTokens(text, [])
        };
      }
    }
  }

  codespan(src) {
    const cap = this.rules.inline.code.exec(src);
    if (cap) {
      let text = cap[2].replace(/\n/g, ' ');
      const hasNonSpaceChars = /[^ ]/.test(text);
      const hasSpaceCharsOnBothEnds = /^ /.test(text) && / $/.test(text);
      if (hasNonSpaceChars && hasSpaceCharsOnBothEnds) {
        text = text.substring(1, text.length - 1);
      }
      text = marked_esm_escape(text, true);
      return {
        type: 'codespan',
        raw: cap[0],
        text
      };
    }
  }

  br(src) {
    const cap = this.rules.inline.br.exec(src);
    if (cap) {
      return {
        type: 'br',
        raw: cap[0]
      };
    }
  }

  del(src) {
    const cap = this.rules.inline.del.exec(src);
    if (cap) {
      return {
        type: 'del',
        raw: cap[0],
        text: cap[2],
        tokens: this.lexer.inlineTokens(cap[2], [])
      };
    }
  }

  autolink(src, mangle) {
    const cap = this.rules.inline.autolink.exec(src);
    if (cap) {
      let text, href;
      if (cap[2] === '@') {
        text = marked_esm_escape(this.options.mangle ? mangle(cap[1]) : cap[1]);
        href = 'mailto:' + text;
      } else {
        text = marked_esm_escape(cap[1]);
        href = text;
      }

      return {
        type: 'link',
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: 'text',
            raw: text,
            text
          }
        ]
      };
    }
  }

  url(src, mangle) {
    let cap;
    if (cap = this.rules.inline.url.exec(src)) {
      let text, href;
      if (cap[2] === '@') {
        text = marked_esm_escape(this.options.mangle ? mangle(cap[0]) : cap[0]);
        href = 'mailto:' + text;
      } else {
        // do extended autolink path validation
        let prevCapZero;
        do {
          prevCapZero = cap[0];
          cap[0] = this.rules.inline._backpedal.exec(cap[0])[0];
        } while (prevCapZero !== cap[0]);
        text = marked_esm_escape(cap[0]);
        if (cap[1] === 'www.') {
          href = 'http://' + text;
        } else {
          href = text;
        }
      }
      return {
        type: 'link',
        raw: cap[0],
        text,
        href,
        tokens: [
          {
            type: 'text',
            raw: text,
            text
          }
        ]
      };
    }
  }

  inlineText(src, smartypants) {
    const cap = this.rules.inline.text.exec(src);
    if (cap) {
      let text;
      if (this.lexer.state.inRawBlock) {
        text = this.options.sanitize ? (this.options.sanitizer ? this.options.sanitizer(cap[0]) : marked_esm_escape(cap[0])) : cap[0];
      } else {
        text = marked_esm_escape(this.options.smartypants ? smartypants(cap[0]) : cap[0]);
      }
      return {
        type: 'text',
        raw: cap[0],
        text
      };
    }
  }
}

/**
 * Block-Level Grammar
 */
const block = {
  newline: /^(?: *(?:\n|$))+/,
  code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
  fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
  hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
  heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
  blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
  list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
  html: '^ {0,3}(?:' // optional indentation
    + '<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
    + '|comment[^\\n]*(\\n+|$)' // (2)
    + '|<\\?[\\s\\S]*?(?:\\?>\\n*|$)' // (3)
    + '|<![A-Z][\\s\\S]*?(?:>\\n*|$)' // (4)
    + '|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)' // (5)
    + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (6)
    + '|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) open tag
    + '|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)' // (7) closing tag
    + ')',
  def: /^ {0,3}\[(label)\]: *(?:\n *)?<?([^\s>]+)>?(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
  table: noopTest,
  lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
  // regex template, placeholders will be replaced according to different paragraph
  // interruption rules of commonmark and the original markdown spec:
  _paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
  text: /^[^\n]+/
};

block._label = /(?!\s*\])(?:\\.|[^\[\]\\])+/;
block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
block.def = edit(block.def)
  .replace('label', block._label)
  .replace('title', block._title)
  .getRegex();

block.bullet = /(?:[*+-]|\d{1,9}[.)])/;
block.listItemStart = edit(/^( *)(bull) */)
  .replace('bull', block.bullet)
  .getRegex();

block.list = edit(block.list)
  .replace(/bull/g, block.bullet)
  .replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))')
  .replace('def', '\\n+(?=' + block.def.source + ')')
  .getRegex();

block._tag = 'address|article|aside|base|basefont|blockquote|body|caption'
  + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption'
  + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe'
  + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option'
  + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr'
  + '|track|ul';
block._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/;
block.html = edit(block.html, 'i')
  .replace('comment', block._comment)
  .replace('tag', block._tag)
  .replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/)
  .getRegex();

block.paragraph = edit(block._paragraph)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
  .replace('|table', '')
  .replace('blockquote', ' {0,3}>')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();

block.blockquote = edit(block.blockquote)
  .replace('paragraph', block.paragraph)
  .getRegex();

/**
 * Normal Block Grammar
 */

block.normal = merge({}, block);

/**
 * GFM Block Grammar
 */

block.gfm = merge({}, block.normal, {
  table: '^ *([^\\n ].*\\|.*)\\n' // Header
    + ' {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?' // Align
    + '(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)' // Cells
});

block.gfm.table = edit(block.gfm.table)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('blockquote', ' {0,3}>')
  .replace('code', ' {4}[^\\n]')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', block._tag) // tables can be interrupted by type (6) html blocks
  .getRegex();

block.gfm.paragraph = edit(block._paragraph)
  .replace('hr', block.hr)
  .replace('heading', ' {0,3}#{1,6} ')
  .replace('|lheading', '') // setex headings don't interrupt commonmark paragraphs
  .replace('table', block.gfm.table) // interrupt paragraphs with table
  .replace('blockquote', ' {0,3}>')
  .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
  .replace('list', ' {0,3}(?:[*+-]|1[.)]) ') // only lists starting from 1 can interrupt
  .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)')
  .replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();
/**
 * Pedantic grammar (original John Gruber's loose markdown specification)
 */

block.pedantic = merge({}, block.normal, {
  html: edit(
    '^ *(?:comment *(?:\\n|\\s*$)'
    + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
    + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))')
    .replace('comment', block._comment)
    .replace(/tag/g, '(?!(?:'
      + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub'
      + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)'
      + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b')
    .getRegex(),
  def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
  heading: /^(#{1,6})(.*)(?:\n+|$)/,
  fences: noopTest, // fences not supported
  paragraph: edit(block.normal._paragraph)
    .replace('hr', block.hr)
    .replace('heading', ' *#{1,6} *[^\n]')
    .replace('lheading', block.lheading)
    .replace('blockquote', ' {0,3}>')
    .replace('|fences', '')
    .replace('|list', '')
    .replace('|html', '')
    .getRegex()
});

/**
 * Inline-Level Grammar
 */
const inline = {
  escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
  autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
  url: noopTest,
  tag: '^comment'
    + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
    + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
    + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
    + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
    + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>', // CDATA section
  link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
  reflink: /^!?\[(label)\]\[(ref)\]/,
  nolink: /^!?\[(ref)\](?:\[\])?/,
  reflinkSearch: 'reflink|nolink(?!\\()',
  emStrong: {
    lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
    //        (1) and (2) can only be a Right Delimiter. (3) and (4) can only be Left.  (5) and (6) can be either Left or Right.
    //          () Skip orphan inside strong  () Consume to delim (1) #***                (2) a***#, a***                   (3) #***a, ***a                 (4) ***#              (5) #***#                 (6) a***a
    rDelimAst: /^[^_*]*?\_\_[^_*]*?\*[^_*]*?(?=\_\_)|[^*]+(?=[^*])|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
    rDelimUnd: /^[^_*]*?\*\*[^_*]*?\_[^_*]*?(?=\*\*)|[^_]+(?=[^_])|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/ // ^- Not allowed for _
  },
  code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
  br: /^( {2,}|\\)\n(?!\s*$)/,
  del: noopTest,
  text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
  punctuation: /^([\spunctuation])/
};

// list of punctuation marks from CommonMark spec
// without * and _ to handle the different emphasis markers * and _
inline._punctuation = '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~';
inline.punctuation = edit(inline.punctuation).replace(/punctuation/g, inline._punctuation).getRegex();

// sequences em should skip over [title](link), `code`, <html>
inline.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g;
inline.escapedEmSt = /\\\*|\\_/g;

inline._comment = edit(block._comment).replace('(?:-->|$)', '-->').getRegex();

inline.emStrong.lDelim = edit(inline.emStrong.lDelim)
  .replace(/punct/g, inline._punctuation)
  .getRegex();

inline.emStrong.rDelimAst = edit(inline.emStrong.rDelimAst, 'g')
  .replace(/punct/g, inline._punctuation)
  .getRegex();

inline.emStrong.rDelimUnd = edit(inline.emStrong.rDelimUnd, 'g')
  .replace(/punct/g, inline._punctuation)
  .getRegex();

inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;

inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
inline.autolink = edit(inline.autolink)
  .replace('scheme', inline._scheme)
  .replace('email', inline._email)
  .getRegex();

inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;

inline.tag = edit(inline.tag)
  .replace('comment', inline._comment)
  .replace('attribute', inline._attribute)
  .getRegex();

inline._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/;
inline._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/;
inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;

inline.link = edit(inline.link)
  .replace('label', inline._label)
  .replace('href', inline._href)
  .replace('title', inline._title)
  .getRegex();

inline.reflink = edit(inline.reflink)
  .replace('label', inline._label)
  .replace('ref', block._label)
  .getRegex();

inline.nolink = edit(inline.nolink)
  .replace('ref', block._label)
  .getRegex();

inline.reflinkSearch = edit(inline.reflinkSearch, 'g')
  .replace('reflink', inline.reflink)
  .replace('nolink', inline.nolink)
  .getRegex();

/**
 * Normal Inline Grammar
 */

inline.normal = merge({}, inline);

/**
 * Pedantic Inline Grammar
 */

inline.pedantic = merge({}, inline.normal, {
  strong: {
    start: /^__|\*\*/,
    middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    endAst: /\*\*(?!\*)/g,
    endUnd: /__(?!_)/g
  },
  em: {
    start: /^_|\*/,
    middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
    endAst: /\*(?!\*)/g,
    endUnd: /_(?!_)/g
  },
  link: edit(/^!?\[(label)\]\((.*?)\)/)
    .replace('label', inline._label)
    .getRegex(),
  reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/)
    .replace('label', inline._label)
    .getRegex()
});

/**
 * GFM Inline Grammar
 */

inline.gfm = merge({}, inline.normal, {
  escape: edit(inline.escape).replace('])', '~|])').getRegex(),
  _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
  url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
  _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
  del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
  text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
});

inline.gfm.url = edit(inline.gfm.url, 'i')
  .replace('email', inline.gfm._extended_email)
  .getRegex();
/**
 * GFM + Line Breaks Inline Grammar
 */

inline.breaks = merge({}, inline.gfm, {
  br: edit(inline.br).replace('{2,}', '*').getRegex(),
  text: edit(inline.gfm.text)
    .replace('\\b_', '\\b_| {2,}\\n')
    .replace(/\{2,\}/g, '*')
    .getRegex()
});

/**
 * smartypants text replacement
 * @param {string} text
 */
function smartypants(text) {
  return text
    // em-dashes
    .replace(/---/g, '\u2014')
    // en-dashes
    .replace(/--/g, '\u2013')
    // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018')
    // closing singles & apostrophes
    .replace(/'/g, '\u2019')
    // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c')
    // closing doubles
    .replace(/"/g, '\u201d')
    // ellipses
    .replace(/\.{3}/g, '\u2026');
}

/**
 * mangle email addresses
 * @param {string} text
 */
function mangle(text) {
  let out = '',
    i,
    ch;

  const l = text.length;
  for (i = 0; i < l; i++) {
    ch = text.charCodeAt(i);
    if (Math.random() > 0.5) {
      ch = 'x' + ch.toString(16);
    }
    out += '&#' + ch + ';';
  }

  return out;
}

/**
 * Block Lexer
 */
class Lexer {
  constructor(options) {
    this.tokens = [];
    this.tokens.links = Object.create(null);
    this.options = options || defaults;
    this.options.tokenizer = this.options.tokenizer || new Tokenizer();
    this.tokenizer = this.options.tokenizer;
    this.tokenizer.options = this.options;
    this.tokenizer.lexer = this;
    this.inlineQueue = [];
    this.state = {
      inLink: false,
      inRawBlock: false,
      top: true
    };

    const rules = {
      block: block.normal,
      inline: inline.normal
    };

    if (this.options.pedantic) {
      rules.block = block.pedantic;
      rules.inline = inline.pedantic;
    } else if (this.options.gfm) {
      rules.block = block.gfm;
      if (this.options.breaks) {
        rules.inline = inline.breaks;
      } else {
        rules.inline = inline.gfm;
      }
    }
    this.tokenizer.rules = rules;
  }

  /**
   * Expose Rules
   */
  static get rules() {
    return {
      block,
      inline
    };
  }

  /**
   * Static Lex Method
   */
  static lex(src, options) {
    const lexer = new Lexer(options);
    return lexer.lex(src);
  }

  /**
   * Static Lex Inline Method
   */
  static lexInline(src, options) {
    const lexer = new Lexer(options);
    return lexer.inlineTokens(src);
  }

  /**
   * Preprocessing
   */
  lex(src) {
    src = src
      .replace(/\r\n|\r/g, '\n');

    this.blockTokens(src, this.tokens);

    let next;
    while (next = this.inlineQueue.shift()) {
      this.inlineTokens(next.src, next.tokens);
    }

    return this.tokens;
  }

  /**
   * Lexing
   */
  blockTokens(src, tokens = []) {
    if (this.options.pedantic) {
      src = src.replace(/\t/g, '    ').replace(/^ +$/gm, '');
    } else {
      src = src.replace(/^( *)(\t+)/gm, (_, leading, tabs) => {
        return leading + '    '.repeat(tabs.length);
      });
    }

    let token, lastToken, cutSrc, lastParagraphClipped;

    while (src) {
      if (this.options.extensions
        && this.options.extensions.block
        && this.options.extensions.block.some((extTokenizer) => {
          if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }
          return false;
        })) {
        continue;
      }

      // newline
      if (token = this.tokenizer.space(src)) {
        src = src.substring(token.raw.length);
        if (token.raw.length === 1 && tokens.length > 0) {
          // if there's a single \n as a spacer, it's terminating the last line,
          // so move it there so that we don't get unecessary paragraph tags
          tokens[tokens.length - 1].raw += '\n';
        } else {
          tokens.push(token);
        }
        continue;
      }

      // code
      if (token = this.tokenizer.code(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        // An indented code block cannot interrupt a paragraph.
        if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      // fences
      if (token = this.tokenizer.fences(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // heading
      if (token = this.tokenizer.heading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // hr
      if (token = this.tokenizer.hr(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // blockquote
      if (token = this.tokenizer.blockquote(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // list
      if (token = this.tokenizer.list(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // html
      if (token = this.tokenizer.html(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // def
      if (token = this.tokenizer.def(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && (lastToken.type === 'paragraph' || lastToken.type === 'text')) {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.raw;
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else if (!this.tokens.links[token.tag]) {
          this.tokens.links[token.tag] = {
            href: token.href,
            title: token.title
          };
        }
        continue;
      }

      // table (gfm)
      if (token = this.tokenizer.table(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // lheading
      if (token = this.tokenizer.lheading(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // top-level paragraph
      // prevent paragraph consuming extensions by clipping 'src' to extension start
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startBlock) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startBlock.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === 'number' && tempStart >= 0) { startIndex = Math.min(startIndex, tempStart); }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (this.state.top && (token = this.tokenizer.paragraph(cutSrc))) {
        lastToken = tokens[tokens.length - 1];
        if (lastParagraphClipped && lastToken.type === 'paragraph') {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        lastParagraphClipped = (cutSrc.length !== src.length);
        src = src.substring(token.raw.length);
        continue;
      }

      // text
      if (token = this.tokenizer.text(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === 'text') {
          lastToken.raw += '\n' + token.raw;
          lastToken.text += '\n' + token.text;
          this.inlineQueue.pop();
          this.inlineQueue[this.inlineQueue.length - 1].src = lastToken.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      if (src) {
        const errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }

    this.state.top = true;
    return tokens;
  }

  inline(src, tokens) {
    this.inlineQueue.push({ src, tokens });
  }

  /**
   * Lexing/Compiling
   */
  inlineTokens(src, tokens = []) {
    let token, lastToken, cutSrc;

    // String with links masked to avoid interference with em and strong
    let maskedSrc = src;
    let match;
    let keepPrevChar, prevChar;

    // Mask out reflinks
    if (this.tokens.links) {
      const links = Object.keys(this.tokens.links);
      if (links.length > 0) {
        while ((match = this.tokenizer.rules.inline.reflinkSearch.exec(maskedSrc)) != null) {
          if (links.includes(match[0].slice(match[0].lastIndexOf('[') + 1, -1))) {
            maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex);
          }
        }
      }
    }
    // Mask out other blocks
    while ((match = this.tokenizer.rules.inline.blockSkip.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + '[' + repeatString('a', match[0].length - 2) + ']' + maskedSrc.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
    }

    // Mask out escaped em & strong delimiters
    while ((match = this.tokenizer.rules.inline.escapedEmSt.exec(maskedSrc)) != null) {
      maskedSrc = maskedSrc.slice(0, match.index) + '++' + maskedSrc.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex);
    }

    while (src) {
      if (!keepPrevChar) {
        prevChar = '';
      }
      keepPrevChar = false;

      // extensions
      if (this.options.extensions
        && this.options.extensions.inline
        && this.options.extensions.inline.some((extTokenizer) => {
          if (token = extTokenizer.call({ lexer: this }, src, tokens)) {
            src = src.substring(token.raw.length);
            tokens.push(token);
            return true;
          }
          return false;
        })) {
        continue;
      }

      // escape
      if (token = this.tokenizer.escape(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // tag
      if (token = this.tokenizer.tag(src)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === 'text' && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      // link
      if (token = this.tokenizer.link(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // reflink, nolink
      if (token = this.tokenizer.reflink(src, this.tokens.links)) {
        src = src.substring(token.raw.length);
        lastToken = tokens[tokens.length - 1];
        if (lastToken && token.type === 'text' && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      // em & strong
      if (token = this.tokenizer.emStrong(src, maskedSrc, prevChar)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // code
      if (token = this.tokenizer.codespan(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // br
      if (token = this.tokenizer.br(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // del (gfm)
      if (token = this.tokenizer.del(src)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // autolink
      if (token = this.tokenizer.autolink(src, mangle)) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // url (gfm)
      if (!this.state.inLink && (token = this.tokenizer.url(src, mangle))) {
        src = src.substring(token.raw.length);
        tokens.push(token);
        continue;
      }

      // text
      // prevent inlineText consuming extensions by clipping 'src' to extension start
      cutSrc = src;
      if (this.options.extensions && this.options.extensions.startInline) {
        let startIndex = Infinity;
        const tempSrc = src.slice(1);
        let tempStart;
        this.options.extensions.startInline.forEach(function(getStartIndex) {
          tempStart = getStartIndex.call({ lexer: this }, tempSrc);
          if (typeof tempStart === 'number' && tempStart >= 0) { startIndex = Math.min(startIndex, tempStart); }
        });
        if (startIndex < Infinity && startIndex >= 0) {
          cutSrc = src.substring(0, startIndex + 1);
        }
      }
      if (token = this.tokenizer.inlineText(cutSrc, smartypants)) {
        src = src.substring(token.raw.length);
        if (token.raw.slice(-1) !== '_') { // Track prevChar before string of ____ started
          prevChar = token.raw.slice(-1);
        }
        keepPrevChar = true;
        lastToken = tokens[tokens.length - 1];
        if (lastToken && lastToken.type === 'text') {
          lastToken.raw += token.raw;
          lastToken.text += token.text;
        } else {
          tokens.push(token);
        }
        continue;
      }

      if (src) {
        const errMsg = 'Infinite loop on byte: ' + src.charCodeAt(0);
        if (this.options.silent) {
          console.error(errMsg);
          break;
        } else {
          throw new Error(errMsg);
        }
      }
    }

    return tokens;
  }
}

/**
 * Renderer
 */
class Renderer {
  constructor(options) {
    this.options = options || defaults;
  }

  code(code, infostring, escaped) {
    const lang = (infostring || '').match(/\S*/)[0];
    if (this.options.highlight) {
      const out = this.options.highlight(code, lang);
      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }

    code = code.replace(/\n$/, '') + '\n';

    if (!lang) {
      return '<pre><code>'
        + (escaped ? code : marked_esm_escape(code, true))
        + '</code></pre>\n';
    }

    return '<pre><code class="'
      + this.options.langPrefix
      + marked_esm_escape(lang, true)
      + '">'
      + (escaped ? code : marked_esm_escape(code, true))
      + '</code></pre>\n';
  }

  /**
   * @param {string} quote
   */
  blockquote(quote) {
    return `<blockquote>\n${quote}</blockquote>\n`;
  }

  html(html) {
    return html;
  }

  /**
   * @param {string} text
   * @param {string} level
   * @param {string} raw
   * @param {any} slugger
   */
  heading(text, level, raw, slugger) {
    if (this.options.headerIds) {
      const id = this.options.headerPrefix + slugger.slug(raw);
      return `<h${level} id="${id}">${text}</h${level}>\n`;
    }

    // ignore IDs
    return `<h${level}>${text}</h${level}>\n`;
  }

  hr() {
    return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
  }

  list(body, ordered, start) {
    const type = ordered ? 'ol' : 'ul',
      startatt = (ordered && start !== 1) ? (' start="' + start + '"') : '';
    return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
  }

  /**
   * @param {string} text
   */
  listitem(text) {
    return `<li>${text}</li>\n`;
  }

  checkbox(checked) {
    return '<input '
      + (checked ? 'checked="" ' : '')
      + 'disabled="" type="checkbox"'
      + (this.options.xhtml ? ' /' : '')
      + '> ';
  }

  /**
   * @param {string} text
   */
  paragraph(text) {
    return `<p>${text}</p>\n`;
  }

  /**
   * @param {string} header
   * @param {string} body
   */
  table(header, body) {
    if (body) body = `<tbody>${body}</tbody>`;

    return '<table>\n'
      + '<thead>\n'
      + header
      + '</thead>\n'
      + body
      + '</table>\n';
  }

  /**
   * @param {string} content
   */
  tablerow(content) {
    return `<tr>\n${content}</tr>\n`;
  }

  tablecell(content, flags) {
    const type = flags.header ? 'th' : 'td';
    const tag = flags.align
      ? `<${type} align="${flags.align}">`
      : `<${type}>`;
    return tag + content + `</${type}>\n`;
  }

  /**
   * span level renderer
   * @param {string} text
   */
  strong(text) {
    return `<strong>${text}</strong>`;
  }

  /**
   * @param {string} text
   */
  em(text) {
    return `<em>${text}</em>`;
  }

  /**
   * @param {string} text
   */
  codespan(text) {
    return `<code>${text}</code>`;
  }

  br() {
    return this.options.xhtml ? '<br/>' : '<br>';
  }

  /**
   * @param {string} text
   */
  del(text) {
    return `<del>${text}</del>`;
  }

  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  link(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }
    let out = '<a href="' + marked_esm_escape(href) + '"';
    if (title) {
      out += ' title="' + title + '"';
    }
    out += '>' + text + '</a>';
    return out;
  }

  /**
   * @param {string} href
   * @param {string} title
   * @param {string} text
   */
  image(href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);
    if (href === null) {
      return text;
    }

    let out = `<img src="${href}" alt="${text}"`;
    if (title) {
      out += ` title="${title}"`;
    }
    out += this.options.xhtml ? '/>' : '>';
    return out;
  }

  text(text) {
    return text;
  }
}

/**
 * TextRenderer
 * returns only the textual part of the token
 */
class TextRenderer {
  // no need for block level renderers
  strong(text) {
    return text;
  }

  em(text) {
    return text;
  }

  codespan(text) {
    return text;
  }

  del(text) {
    return text;
  }

  html(text) {
    return text;
  }

  text(text) {
    return text;
  }

  link(href, title, text) {
    return '' + text;
  }

  image(href, title, text) {
    return '' + text;
  }

  br() {
    return '';
  }
}

/**
 * Slugger generates header id
 */
class Slugger {
  constructor() {
    this.seen = {};
  }

  /**
   * @param {string} value
   */
  serialize(value) {
    return value
      .toLowerCase()
      .trim()
      // remove html tags
      .replace(/<[!\/a-z].*?>/ig, '')
      // remove unwanted chars
      .replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '')
      .replace(/\s/g, '-');
  }

  /**
   * Finds the next safe (unique) slug to use
   * @param {string} originalSlug
   * @param {boolean} isDryRun
   */
  getNextSafeSlug(originalSlug, isDryRun) {
    let slug = originalSlug;
    let occurenceAccumulator = 0;
    if (this.seen.hasOwnProperty(slug)) {
      occurenceAccumulator = this.seen[originalSlug];
      do {
        occurenceAccumulator++;
        slug = originalSlug + '-' + occurenceAccumulator;
      } while (this.seen.hasOwnProperty(slug));
    }
    if (!isDryRun) {
      this.seen[originalSlug] = occurenceAccumulator;
      this.seen[slug] = 0;
    }
    return slug;
  }

  /**
   * Convert string to unique id
   * @param {object} [options]
   * @param {boolean} [options.dryrun] Generates the next unique slug without
   * updating the internal accumulator.
   */
  slug(value, options = {}) {
    const slug = this.serialize(value);
    return this.getNextSafeSlug(slug, options.dryrun);
  }
}

/**
 * Parsing & Compiling
 */
class Parser {
  constructor(options) {
    this.options = options || defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.textRenderer = new TextRenderer();
    this.slugger = new Slugger();
  }

  /**
   * Static Parse Method
   */
  static parse(tokens, options) {
    const parser = new Parser(options);
    return parser.parse(tokens);
  }

  /**
   * Static Parse Inline Method
   */
  static parseInline(tokens, options) {
    const parser = new Parser(options);
    return parser.parseInline(tokens);
  }

  /**
   * Parse Loop
   */
  parse(tokens, top = true) {
    let out = '',
      i,
      j,
      k,
      l2,
      l3,
      row,
      cell,
      header,
      body,
      token,
      ordered,
      start,
      loose,
      itemBody,
      item,
      checked,
      task,
      checkbox,
      ret;

    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];

      // Run any renderer extensions
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !['space', 'hr', 'heading', 'code', 'table', 'blockquote', 'list', 'html', 'paragraph', 'text'].includes(token.type)) {
          out += ret || '';
          continue;
        }
      }

      switch (token.type) {
        case 'space': {
          continue;
        }
        case 'hr': {
          out += this.renderer.hr();
          continue;
        }
        case 'heading': {
          out += this.renderer.heading(
            this.parseInline(token.tokens),
            token.depth,
            marked_esm_unescape(this.parseInline(token.tokens, this.textRenderer)),
            this.slugger);
          continue;
        }
        case 'code': {
          out += this.renderer.code(token.text,
            token.lang,
            token.escaped);
          continue;
        }
        case 'table': {
          header = '';

          // header
          cell = '';
          l2 = token.header.length;
          for (j = 0; j < l2; j++) {
            cell += this.renderer.tablecell(
              this.parseInline(token.header[j].tokens),
              { header: true, align: token.align[j] }
            );
          }
          header += this.renderer.tablerow(cell);

          body = '';
          l2 = token.rows.length;
          for (j = 0; j < l2; j++) {
            row = token.rows[j];

            cell = '';
            l3 = row.length;
            for (k = 0; k < l3; k++) {
              cell += this.renderer.tablecell(
                this.parseInline(row[k].tokens),
                { header: false, align: token.align[k] }
              );
            }

            body += this.renderer.tablerow(cell);
          }
          out += this.renderer.table(header, body);
          continue;
        }
        case 'blockquote': {
          body = this.parse(token.tokens);
          out += this.renderer.blockquote(body);
          continue;
        }
        case 'list': {
          ordered = token.ordered;
          start = token.start;
          loose = token.loose;
          l2 = token.items.length;

          body = '';
          for (j = 0; j < l2; j++) {
            item = token.items[j];
            checked = item.checked;
            task = item.task;

            itemBody = '';
            if (item.task) {
              checkbox = this.renderer.checkbox(checked);
              if (loose) {
                if (item.tokens.length > 0 && item.tokens[0].type === 'paragraph') {
                  item.tokens[0].text = checkbox + ' ' + item.tokens[0].text;
                  if (item.tokens[0].tokens && item.tokens[0].tokens.length > 0 && item.tokens[0].tokens[0].type === 'text') {
                    item.tokens[0].tokens[0].text = checkbox + ' ' + item.tokens[0].tokens[0].text;
                  }
                } else {
                  item.tokens.unshift({
                    type: 'text',
                    text: checkbox
                  });
                }
              } else {
                itemBody += checkbox;
              }
            }

            itemBody += this.parse(item.tokens, loose);
            body += this.renderer.listitem(itemBody, task, checked);
          }

          out += this.renderer.list(body, ordered, start);
          continue;
        }
        case 'html': {
          // TODO parse inline content if parameter markdown=1
          out += this.renderer.html(token.text);
          continue;
        }
        case 'paragraph': {
          out += this.renderer.paragraph(this.parseInline(token.tokens));
          continue;
        }
        case 'text': {
          body = token.tokens ? this.parseInline(token.tokens) : token.text;
          while (i + 1 < l && tokens[i + 1].type === 'text') {
            token = tokens[++i];
            body += '\n' + (token.tokens ? this.parseInline(token.tokens) : token.text);
          }
          out += top ? this.renderer.paragraph(body) : body;
          continue;
        }

        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }

    return out;
  }

  /**
   * Parse Inline Tokens
   */
  parseInline(tokens, renderer) {
    renderer = renderer || this.renderer;
    let out = '',
      i,
      token,
      ret;

    const l = tokens.length;
    for (i = 0; i < l; i++) {
      token = tokens[i];

      // Run any renderer extensions
      if (this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[token.type]) {
        ret = this.options.extensions.renderers[token.type].call({ parser: this }, token);
        if (ret !== false || !['escape', 'html', 'link', 'image', 'strong', 'em', 'codespan', 'br', 'del', 'text'].includes(token.type)) {
          out += ret || '';
          continue;
        }
      }

      switch (token.type) {
        case 'escape': {
          out += renderer.text(token.text);
          break;
        }
        case 'html': {
          out += renderer.html(token.text);
          break;
        }
        case 'link': {
          out += renderer.link(token.href, token.title, this.parseInline(token.tokens, renderer));
          break;
        }
        case 'image': {
          out += renderer.image(token.href, token.title, token.text);
          break;
        }
        case 'strong': {
          out += renderer.strong(this.parseInline(token.tokens, renderer));
          break;
        }
        case 'em': {
          out += renderer.em(this.parseInline(token.tokens, renderer));
          break;
        }
        case 'codespan': {
          out += renderer.codespan(token.text);
          break;
        }
        case 'br': {
          out += renderer.br();
          break;
        }
        case 'del': {
          out += renderer.del(this.parseInline(token.tokens, renderer));
          break;
        }
        case 'text': {
          out += renderer.text(token.text);
          break;
        }
        default: {
          const errMsg = 'Token with "' + token.type + '" type was not found.';
          if (this.options.silent) {
            console.error(errMsg);
            return;
          } else {
            throw new Error(errMsg);
          }
        }
      }
    }
    return out;
  }
}

/**
 * Marked
 */
function marked(src, opt, callback) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked(): input parameter is undefined or null');
  }
  if (typeof src !== 'string') {
    throw new Error('marked(): input parameter is of type '
      + Object.prototype.toString.call(src) + ', string expected');
  }

  if (typeof opt === 'function') {
    callback = opt;
    opt = null;
  }

  opt = merge({}, marked.defaults, opt || {});
  checkSanitizeDeprecation(opt);

  if (callback) {
    const highlight = opt.highlight;
    let tokens;

    try {
      tokens = Lexer.lex(src, opt);
    } catch (e) {
      return callback(e);
    }

    const done = function(err) {
      let out;

      if (!err) {
        try {
          if (opt.walkTokens) {
            marked.walkTokens(tokens, opt.walkTokens);
          }
          out = Parser.parse(tokens, opt);
        } catch (e) {
          err = e;
        }
      }

      opt.highlight = highlight;

      return err
        ? callback(err)
        : callback(null, out);
    };

    if (!highlight || highlight.length < 3) {
      return done();
    }

    delete opt.highlight;

    if (!tokens.length) return done();

    let pending = 0;
    marked.walkTokens(tokens, function(token) {
      if (token.type === 'code') {
        pending++;
        setTimeout(() => {
          highlight(token.text, token.lang, function(err, code) {
            if (err) {
              return done(err);
            }
            if (code != null && code !== token.text) {
              token.text = code;
              token.escaped = true;
            }

            pending--;
            if (pending === 0) {
              done();
            }
          });
        }, 0);
      }
    });

    if (pending === 0) {
      done();
    }

    return;
  }

  try {
    const tokens = Lexer.lex(src, opt);
    if (opt.walkTokens) {
      marked.walkTokens(tokens, opt.walkTokens);
    }
    return Parser.parse(tokens, opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
    if (opt.silent) {
      return '<p>An error occurred:</p><pre>'
        + marked_esm_escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
}

/**
 * Options
 */

marked.options =
marked.setOptions = function(opt) {
  merge(marked.defaults, opt);
  changeDefaults(marked.defaults);
  return marked;
};

marked.getDefaults = getDefaults;

marked.defaults = defaults;

/**
 * Use Extension
 */

marked.use = function(...args) {
  const opts = merge({}, ...args);
  const extensions = marked.defaults.extensions || { renderers: {}, childTokens: {} };
  let hasExtensions;

  args.forEach((pack) => {
    // ==-- Parse "addon" extensions --== //
    if (pack.extensions) {
      hasExtensions = true;
      pack.extensions.forEach((ext) => {
        if (!ext.name) {
          throw new Error('extension name required');
        }
        if (ext.renderer) { // Renderer extensions
          const prevRenderer = extensions.renderers ? extensions.renderers[ext.name] : null;
          if (prevRenderer) {
            // Replace extension with func to run new extension but fall back if false
            extensions.renderers[ext.name] = function(...args) {
              let ret = ext.renderer.apply(this, args);
              if (ret === false) {
                ret = prevRenderer.apply(this, args);
              }
              return ret;
            };
          } else {
            extensions.renderers[ext.name] = ext.renderer;
          }
        }
        if (ext.tokenizer) { // Tokenizer Extensions
          if (!ext.level || (ext.level !== 'block' && ext.level !== 'inline')) {
            throw new Error("extension level must be 'block' or 'inline'");
          }
          if (extensions[ext.level]) {
            extensions[ext.level].unshift(ext.tokenizer);
          } else {
            extensions[ext.level] = [ext.tokenizer];
          }
          if (ext.start) { // Function to check for start of token
            if (ext.level === 'block') {
              if (extensions.startBlock) {
                extensions.startBlock.push(ext.start);
              } else {
                extensions.startBlock = [ext.start];
              }
            } else if (ext.level === 'inline') {
              if (extensions.startInline) {
                extensions.startInline.push(ext.start);
              } else {
                extensions.startInline = [ext.start];
              }
            }
          }
        }
        if (ext.childTokens) { // Child tokens to be visited by walkTokens
          extensions.childTokens[ext.name] = ext.childTokens;
        }
      });
    }

    // ==-- Parse "overwrite" extensions --== //
    if (pack.renderer) {
      const renderer = marked.defaults.renderer || new Renderer();
      for (const prop in pack.renderer) {
        const prevRenderer = renderer[prop];
        // Replace renderer with func to run extension, but fall back if false
        renderer[prop] = (...args) => {
          let ret = pack.renderer[prop].apply(renderer, args);
          if (ret === false) {
            ret = prevRenderer.apply(renderer, args);
          }
          return ret;
        };
      }
      opts.renderer = renderer;
    }
    if (pack.tokenizer) {
      const tokenizer = marked.defaults.tokenizer || new Tokenizer();
      for (const prop in pack.tokenizer) {
        const prevTokenizer = tokenizer[prop];
        // Replace tokenizer with func to run extension, but fall back if false
        tokenizer[prop] = (...args) => {
          let ret = pack.tokenizer[prop].apply(tokenizer, args);
          if (ret === false) {
            ret = prevTokenizer.apply(tokenizer, args);
          }
          return ret;
        };
      }
      opts.tokenizer = tokenizer;
    }

    // ==-- Parse WalkTokens extensions --== //
    if (pack.walkTokens) {
      const walkTokens = marked.defaults.walkTokens;
      opts.walkTokens = function(token) {
        pack.walkTokens.call(this, token);
        if (walkTokens) {
          walkTokens.call(this, token);
        }
      };
    }

    if (hasExtensions) {
      opts.extensions = extensions;
    }

    marked.setOptions(opts);
  });
};

/**
 * Run callback for every token
 */

marked.walkTokens = function(tokens, callback) {
  for (const token of tokens) {
    callback.call(marked, token);
    switch (token.type) {
      case 'table': {
        for (const cell of token.header) {
          marked.walkTokens(cell.tokens, callback);
        }
        for (const row of token.rows) {
          for (const cell of row) {
            marked.walkTokens(cell.tokens, callback);
          }
        }
        break;
      }
      case 'list': {
        marked.walkTokens(token.items, callback);
        break;
      }
      default: {
        if (marked.defaults.extensions && marked.defaults.extensions.childTokens && marked.defaults.extensions.childTokens[token.type]) { // Walk any extensions
          marked.defaults.extensions.childTokens[token.type].forEach(function(childTokens) {
            marked.walkTokens(token[childTokens], callback);
          });
        } else if (token.tokens) {
          marked.walkTokens(token.tokens, callback);
        }
      }
    }
  }
};

/**
 * Parse Inline
 * @param {string} src
 */
marked.parseInline = function(src, opt) {
  // throw error in case of non string input
  if (typeof src === 'undefined' || src === null) {
    throw new Error('marked.parseInline(): input parameter is undefined or null');
  }
  if (typeof src !== 'string') {
    throw new Error('marked.parseInline(): input parameter is of type '
      + Object.prototype.toString.call(src) + ', string expected');
  }

  opt = merge({}, marked.defaults, opt || {});
  checkSanitizeDeprecation(opt);

  try {
    const tokens = Lexer.lexInline(src, opt);
    if (opt.walkTokens) {
      marked.walkTokens(tokens, opt.walkTokens);
    }
    return Parser.parseInline(tokens, opt);
  } catch (e) {
    e.message += '\nPlease report this to https://github.com/markedjs/marked.';
    if (opt.silent) {
      return '<p>An error occurred:</p><pre>'
        + marked_esm_escape(e.message + '', true)
        + '</pre>';
    }
    throw e;
  }
};

/**
 * Expose
 */
marked.Parser = Parser;
marked.parser = Parser.parse;
marked.Renderer = Renderer;
marked.TextRenderer = TextRenderer;
marked.Lexer = Lexer;
marked.lexer = Lexer.lex;
marked.Tokenizer = Tokenizer;
marked.Slugger = Slugger;
marked.parse = marked;

const options = marked.options;
const setOptions = marked.setOptions;
const use = marked.use;
const walkTokens = marked.walkTokens;
const parseInline = marked.parseInline;
const parse = (/* unused pure expression or super */ null && (marked));
const parser = Parser.parse;
const lexer = Lexer.lex;



// EXTERNAL MODULE: ./node_modules/prismjs/prism.js
var prism = __webpack_require__(660);
var prism_default = /*#__PURE__*/__webpack_require__.n(prism);
// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-css.js
var prism_css = __webpack_require__(251);
// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-yaml.js
var prism_yaml = __webpack_require__(358);
// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-go.js
var prism_go = __webpack_require__(46);
// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-java.js
var prism_java = __webpack_require__(503);
// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-json.js
var prism_json = __webpack_require__(277);
// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-bash.js
var prism_bash = __webpack_require__(874);
// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-python.js
var prism_python = __webpack_require__(366);
// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-http.js
var prism_http = __webpack_require__(57);
// EXTERNAL MODULE: ./node_modules/prismjs/components/prism-csharp.js
var prism_csharp = __webpack_require__(16);
;// CONCATENATED MODULE: ./src/styles/font-styles.js

/* harmony default export */ const font_styles = (i`
  .hover-bg:hover{
    background: var(--bg3);
  }
  ::selection {
    background: var(--selection-bg);
    color: var(--selection-fg);
  }
  .regular-font{ 
    font-family:var(--font-regular); 
  }
  .mono-font { 
    font-family:var(--font-mono); 
  }
  .title { 
    font-size: calc(var(--font-size-small) + 18px);
    font-weight: normal 
  }
  .sub-title{ font-size: 20px;}
  .req-res-title {
    font-family: var(--font-regular);
    font-size: calc(var(--font-size-small) + 4px);
    font-weight:bold;
    margin-bottom:8px;
    text-align:left;
  }
  .tiny-title { 
    font-size:calc(var(--font-size-small) + 1px); 
    font-weight:bold; 
  }
  .regular-font-size { font-size: var(--font-size-regular); }
  .small-font-size { font-size: var(--font-size-small); }
  .upper { text-transform: uppercase; }
  .primary-text{ color: var(--primary-color); }
  .bold-text { font-weight:bold; }
  .gray-text { color: var(--light-fg); }
  .red-text {color: var(--red)}
  .blue-text {color: var(--blue)}
  .multiline {
    overflow: scroll;
    max-height: var(--resp-area-height, 400px);
    color: var(--fg3);  
  }
  .method-fg.put { color: var(--orange); }
  .method-fg.post { color: var(--green); }
  .method-fg.get { color: var(--blue); }
  .method-fg.delete { color: var(--red); }
  .method-fg.options, 
  .method-fg.head, 
  .method-fg.patch { 
    color: var(--yellow); 
  }

  h1{ font-family:var(--font-regular); font-size:28px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h2{ font-family:var(--font-regular); font-size:24px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h3{ font-family:var(--font-regular); font-size:18px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h4{ font-family:var(--font-regular); font-size:16px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h5{ font-family:var(--font-regular); font-size:14px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }
  h6{ font-family:var(--font-regular); font-size:14px; padding-top: 10px; letter-spacing:normal; font-weight:normal; }

  h1,h2,h3,h4,h5,h5{
    margin-block-end: 0.2em;
  }
  p { margin-block-start: 0.5em; }
  a { color: var(--blue); cursor:pointer; }
  a.inactive-link { 
    color:var(--fg);
    text-decoration: none;
    cursor:text;
  }
  
  code,
  pre {
    margin: 0px;
    font-family: var(--font-mono);
    font-size: calc(var(--font-size-mono) - 1px);
  }

  .m-markdown,
  .m-markdown-small {
    display:block;
  }

  .m-markdown p,
  .m-markdown span {
    font-size: var(--font-size-regular);
    line-height:calc(var(--font-size-regular) + 8px);
  }
  .m-markdown li {
    font-size: var(--font-size-regular);
    line-height:calc(var(--font-size-regular) + 10px);
  }
  
  .m-markdown-small p,
  .m-markdown-small span,
  .m-markdown-small li {
    font-size: var(--font-size-small);
    line-height: calc(var(--font-size-small) + 6px);
  }
  .m-markdown-small li {
    line-height: calc(var(--font-size-small) + 8px);
  }

  .m-markdown p:not(:first-child) {
    margin-block-start: 24px;
  }

  .m-markdown-small p:not(:first-child) {
    margin-block-start: 12px;
  }
  .m-markdown-small p:first-child {
    margin-block-start: 0;
  }

  .m-markdown p,
  .m-markdown-small p {
    margin-block-end: 0
  }

  .m-markdown code span {
    font-size:var(--font-size-mono);
  }

  .m-markdown-small code,
  .m-markdown code {
    padding: 1px 6px;
    border-radius: 2px;
    color: var(--inline-code-fg);
    background-color: var(--bg3);
    font-size: calc(var(--font-size-mono));
    line-height: 1.2;
  }

  .m-markdown-small code {
    font-size: calc(var(--font-size-mono) - 1px);
  }

  .m-markdown-small pre,
  .m-markdown pre {
    white-space: pre-wrap;
    overflow-x: auto;
    line-height: normal;
    border-radius: 2px;
    border: 1px solid var(--code-border-color);
  }

  .m-markdown pre {
    padding: 12px;
    background-color: var(--code-bg);
    color:var(--code-fg);
  }

  .m-markdown-small pre {
    margin-top: 4px;
    padding: 2px 4px;
    background-color: var(--bg3);
    color: var(--fg2);
  }

  .m-markdown-small pre code,
  .m-markdown pre code {
    border:none;
    padding:0;
  }

  .m-markdown pre code {
    color: var(--code-fg);
    background-color: var(--code-bg);
    background-color: transparent;
  }

  .m-markdown-small pre code {
    color: var(--fg2);
    background-color: var(--bg3);
  }

  .m-markdown ul,
  .m-markdown ol {
    padding-inline-start: 30px;
  }

  .m-markdown-small ul,
  .m-markdown-small ol {
    padding-inline-start: 20px;
  }

  .m-markdown-small a,
  .m-markdown a {
    color:var(--blue);
  }

  .m-markdown-small img,
  .m-markdown img { 
    max-width: 100%; 
  }

  /* Markdown table */

  .m-markdown-small table,
  .m-markdown table {
    border-spacing: 0;
    margin: 10px 0;
    border-collapse: separate;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    font-size: calc(var(--font-size-small) + 1px);
    line-height: calc(var(--font-size-small) + 4px);
    max-width: 100%;
  }

  .m-markdown-small table {
    font-size: var(--font-size-small);
    line-height: calc(var(--font-size-small) + 2px);
    margin: 8px 0;
  }

  .m-markdown-small td, 
  .m-markdown-small th,
  .m-markdown td, 
  .m-markdown th {
    vertical-align: top;
    border-top: 1px solid var(--border-color);
    line-height: calc(var(--font-size-small) + 4px);
  }

  .m-markdown-small tr:first-child th,
  .m-markdown tr:first-child th {
    border-top: 0 none;
  }

  .m-markdown th, 
  .m-markdown td { 
    padding: 10px 12px; 
  }

  .m-markdown-small th,
  .m-markdown-small td { 
    padding: 8px 8px; 
  }

  .m-markdown th,
  .m-markdown-small th {
    font-weight: 600;
    background-color: var(--bg2);
    vertical-align: middle;
  }

  .m-markdown-small table code {
    font-size: calc(var(--font-size-mono) - 2px);
  }

  .m-markdown table code {
    font-size: calc(var(--font-size-mono) - 1px);
  }

  .m-markdown blockquote,
  .m-markdown-small blockquote {
    margin-inline-start: 0;
    margin-inline-end: 0;
    border-left: 3px solid var(--border-color);
    padding: 6px 0 6px 6px;
  }
  .m-markdown hr{
    border: 1px solid var(--border-color);
  }
`);
;// CONCATENATED MODULE: ./src/styles/input-styles.js

/* eslint-disable max-len */

/* harmony default export */ const input_styles = (i`
/* Button */
.m-btn {
  border-radius: var(--border-radius);
  font-weight: 600;
  display: inline-block;
  padding: 6px 16px;
  font-size: var(--font-size-small);
  outline: 0;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  border: 2px solid var(--primary-color);
  background-color:transparent;
  transition: background-color 0.2s;
  user-select: none;
  cursor: pointer;
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}
.m-btn.primary {
  background-color: var(--primary-color);
  color: var(--primary-color-invert);
}
.m-btn.thin-border { border-width: 1px; }
.m-btn.large { padding:8px 14px; }
.m-btn.small { padding:5px 12px; }
.m-btn.tiny { padding:5px 6px; }
.m-btn.circle { border-radius: 50%; }
.m-btn:hover { 
  background-color: var(--primary-color);
  color: var(--primary-color-invert);
}
.m-btn.nav { border: 2px solid var(--nav-accent-color); }
.m-btn.nav:hover { 
  background-color: var(--nav-accent-color);
}
.m-btn:disabled{ 
  background-color: var(--bg3);
  color: var(--fg3);
  border-color: var(--fg3);
  cursor: not-allowed;
  opacity: 0.4;
}
.toolbar-btn{
  cursor: pointer;
  padding: 4px;
  margin:0 2px;
  font-size: var(--font-size-small);
  min-width: 50px;
  color: var(--primary-color-invert);
  border-radius: 2px;
  border: none;
  background-color: var(--primary-color);
}

input, textarea, select, button, pre {
  color:var(--fg);
  outline: none;
  background-color: var(--input-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
}
button {
  font-family: var(--font-regular);
}

/* Form Inputs */
pre,
select,
textarea,
input[type="file"],
input[type="text"],
input[type="password"] {
  font-family: var(--font-mono);
  font-weight: 400;
  font-size: var(--font-size-small);
  transition: border .2s;
  padding: 6px 5px;
}

select {
  font-family: var(--font-regular);
  padding: 5px 30px 5px 5px;
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%3E%3Cpath%20d%3D%22M10.3%203.3L6%207.6%201.7%203.3A1%201%200%2000.3%204.7l5%205a1%201%200%20001.4%200l5-5a1%201%200%2010-1.4-1.4z%22%20fill%3D%22%23777777%22%2F%3E%3C%2Fsvg%3E"); 
  background-position: calc(100% - 5px) center;
  background-repeat: no-repeat;  
  background-size: 10px;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
}

select:hover {
  border-color: var(--primary-color);
}

textarea::placeholder,
input[type="text"]::placeholder,
input[type="password"]::placeholder {
  color: var(--placeholder-color);
  opacity:1;
}

select:focus,
textarea:focus,
input[type="text"]:focus,
input[type="password"]:focus,
textarea:active,
input[type="text"]:active,
input[type="password"]:active {
  border:1px solid var(--primary-color);
}

input[type="file"]{
  font-family: var(--font-regular);
  padding:2px;
  cursor:pointer;
  border: 1px solid var(--primary-color);
  min-height: calc(var(--font-size-small) + 18px);
}

input[type="file"]::-webkit-file-upload-button {
  font-family: var(--font-regular);
  font-size: var(--font-size-small);
  outline: none;
  cursor:pointer;
  padding: 3px 8px;
  border: 1px solid var(--primary-color);
  background-color: var(--primary-color);
  color: var(--primary-color-invert);
  border-radius: var(--border-radius);;
  -webkit-appearance: none;
}

pre,
textarea {
  scrollbar-width: thin;
  scrollbar-color: var(--border-color) var(--input-bg);
}

pre::-webkit-scrollbar,
textarea::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

pre::-webkit-scrollbar-track,
textarea::-webkit-scrollbar-track {
  background:var(--input-bg);
}
 
pre::-webkit-scrollbar-thumb,
textarea::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background-color: var(--border-color);
}

.link {
  font-size:var(--font-size-small);
  text-decoration: underline;
  color:var(--blue);
  font-family:var(--font-mono);
  margin-bottom:2px;
}

input[type="checkbox"]:focus{
  outline:0;
}

/* Toggle Body */
input[type="checkbox"] {
  appearance: none;
  display: inline-block;
  background-color: var(--light-bg);
  border: 1px solid var(--light-bg);
  border-radius: 9px;
  cursor: pointer;
  height: 18px;
  position: relative;
  transition: border .25s .15s, box-shadow .25s .3s, padding .25s;
  min-width: 36px;
  width: 36px;
  vertical-align: top;
}
/* Toggle Thumb */
input[type="checkbox"]:after {
  position: absolute;
  background-color: var(--bg);
  border: 1px solid var(--light-bg);
  border-radius: 8px;
  content: '';
  top: 0px;
  left: 0px;
  right: 16px;
  display: block;
  height: 16px;
  transition: border .25s .15s, left .25s .1s, right .15s .175s;
}

/* Toggle Body - Checked */
input[type="checkbox"]:checked {
  box-shadow: inset 0 0 0 13px var(--green);
  border-color: var(--green);
}
/* Toggle Thumb - Checked*/
input[type="checkbox"]:checked:after {
  border: 1px solid var(--green);
  left: 16px;
  right: 1px;
  transition: border .25s, left .15s .25s, right .25s .175s;
}
`);
;// CONCATENATED MODULE: ./src/styles/flex-styles.js

/* harmony default export */ const flex_styles = (i`
.row, .col{
  display:flex;
} 
.row {
  align-items:center;
  flex-direction: row;
}
.col {
  align-items:stretch;
  flex-direction: column;
}
`);
;// CONCATENATED MODULE: ./src/styles/table-styles.js

/* harmony default export */ const table_styles = (i`
.m-table {
  border-spacing: 0;  
  border-collapse: separate;
  border: 1px solid var(--light-border-color);
  border-radius: var(--border-radius);
  margin: 0;
  max-width: 100%;
  direction: ltr;
}
.m-table tr:first-child td,
.m-table tr:first-child th {
    border-top: 0 none;
}
.m-table td, 
.m-table th {
  font-size: var(--font-size-small);
  line-height: calc(var(--font-size-small) + 4px);
  padding: 4px 5px 4px;
  vertical-align: top;
}

.m-table.padded-12 td, 
.m-table.padded-12 th {
  padding: 12px;
}

.m-table td:not([align]), 
.m-table th:not([align]) {
  text-align: left;
}

.m-table th {
  color: var(--fg2);
  font-size: var(--font-size-small);
  line-height: calc(var(--font-size-small) + 18px);
  font-weight: 600;
  letter-spacing: normal;
  background-color: var(--bg2);
  vertical-align: bottom;
  border-bottom: 1px solid var(--light-border-color);
}

.m-table > tbody > tr > td,
.m-table > tr > td {
  border-top: 1px solid var(--light-border-color);
  text-overflow: ellipsis;
  overflow: hidden;
}
.table-title {
  font-size:var(--font-size-small);
  font-weight:bold;
  vertical-align: middle;
  margin: 12px 0 4px 0;
}
`);
;// CONCATENATED MODULE: ./src/styles/endpoint-styles.js

/* harmony default export */ const endpoint_styles = (i`
.only-large-screen { display:none; }
.endpoint-head .path{
  display: flex;
  font-family:var(--font-mono);
  font-size: var(--font-size-small);
  align-items: center;
  overflow-wrap: break-word;
  word-break: break-all;
}

.endpoint-head .descr {
  font-size: var(--font-size-small);
  color:var(--light-fg);
  font-weight:400;
  align-items: center;
  overflow-wrap: break-word;
  word-break: break-all;
  display:none;
}

.m-endpoint.expanded{margin-bottom:16px; }
.m-endpoint > .endpoint-head{
  border-width:1px 1px 1px 5px;
  border-style:solid;
  border-color:transparent;
  border-top-color:var(--light-border-color);
  display:flex;
  padding:6px 16px;
  align-items: center;
  cursor: pointer;
}
.m-endpoint > .endpoint-head.put:hover,
.m-endpoint > .endpoint-head.put.expanded{
  border-color:var(--orange); 
  background-color:var(--light-orange); 
}
.m-endpoint > .endpoint-head.post:hover,
.m-endpoint > .endpoint-head.post.expanded {
  border-color:var(--green); 
  background-color:var(--light-green); 
}
.m-endpoint > .endpoint-head.get:hover,
.m-endpoint > .endpoint-head.get.expanded {
  border-color:var(--blue); 
  background-color:var(--light-blue); 
}
.m-endpoint > .endpoint-head.delete:hover,
.m-endpoint > .endpoint-head.delete.expanded {
  border-color:var(--red); 
  background-color:var(--light-red); 
}

.m-endpoint > .endpoint-head.head:hover,
.m-endpoint > .endpoint-head.head.expanded,
.m-endpoint > .endpoint-head.patch:hover,
.m-endpoint > .endpoint-head.patch.expanded,
.m-endpoint > .endpoint-head.options:hover,
.m-endpoint > .endpoint-head.options.expanded {
  border-color:var(--yellow); 
  background-color:var(--light-yellow); 
}

.m-endpoint > .endpoint-head.deprecated:hover,
.m-endpoint > .endpoint-head.deprecated.expanded {
  border-color:var(--border-color); 
  filter:opacity(0.6);
}

.m-endpoint .endpoint-body {
  flex-wrap:wrap;
  padding:16px 0px 0 0px;
  border-width:0px 1px 1px 5px;
  border-style:solid;
  box-shadow: 0px 4px 3px -3px rgba(0, 0, 0, 0.15);
}
.m-endpoint .endpoint-body.delete{ border-color:var(--red); }
.m-endpoint .endpoint-body.put{ border-color:var(--orange); }
.m-endpoint .endpoint-body.post{border-color:var(--green);}
.m-endpoint .endpoint-body.get{ border-color:var(--blue); }
.m-endpoint .endpoint-body.head,
.m-endpoint .endpoint-body.patch,
.m-endpoint .endpoint-body.options { 
  border-color:var(--yellow); 
}

.m-endpoint .endpoint-body.deprecated{ 
  border-color:var(--border-color);
  filter:opacity(0.6);
}

.endpoint-head .deprecated{
  color: var(--light-fg);
  filter:opacity(0.6);
}

.summary{
  padding:8px 8px;
}
.summary .title{
  font-size:calc(var(--font-size-regular) + 2px);
  margin-bottom: 6px;
  word-break: break-all;
}

.endpoint-head .method{
  padding:2px 5px;
  vertical-align: middle;
  font-size:var(--font-size-small);
  height: calc(var(--font-size-small) + 16px);
  line-height: calc(var(--font-size-small) + 8px);
  width: 60px;
  border-radius: 2px;
  display:inline-block;
  text-align: center;
  font-weight: bold;
  text-transform:uppercase;
  margin-right:5px;
}
.endpoint-head .method.delete{ border: 2px solid var(--red);}
.endpoint-head .method.put{ border: 2px solid var(--orange); }
.endpoint-head .method.post{ border: 2px solid var(--green); }
.endpoint-head .method.get{ border: 2px solid var(--blue); }
.endpoint-head .method.get.deprecated{ border: 2px solid var(--border-color); }
.endpoint-head .method.head,
.endpoint-head .method.patch,
.endpoint-head .method.options { 
  border: 2px solid var(--yellow); 
}

.req-resp-container{
  display: flex;
  margin-top:16px;
  align-items: stretch;
  flex-wrap: wrap;
  flex-direction: column;
  border-top:1px solid var(--light-border-color);
}

.view-mode-request,
api-response.view-mode {
  flex:1; 
  min-height:100px;
  padding:16px 8px;
  overflow:hidden;
}
.view-mode-request {
  border-width:0 0 1px 0;
  border-style:dashed;
}

.head .view-mode-request,
.patch .view-mode-request,
.options .view-mode-request { 
  border-color:var(--yellow); 
}
.put .view-mode-request { 
  border-color:var(--orange); 
}
.post .view-mode-request { 
  border-color:var(--green); 
}
.get .view-mode-request { 
  border-color:var(--blue); 
}
.delete .view-mode-request { 
  border-color:var(--red); 
}

@media only screen and (min-width: 1024px) {
  .only-large-screen { display:block; }
  .endpoint-head .path{
    font-size: var(--font-size-regular);
  }
  .endpoint-head .descr{
    display: flex;
  }
  .endpoint-head .m-markdown-small,
  .descr .m-markdown-small{
    display:block;
  }
  .req-resp-container{
    flex-direction: var(--layout, row);
    flex-wrap: nowrap;
  }
  api-response.view-mode {
    padding:16px;
  }
  .view-mode-request.row-layout {
    border-width:0 1px 0 0;
    padding:16px;
  }
  .summary{
    padding:8px 16px;
  }
}
`);
;// CONCATENATED MODULE: ./src/styles/prism-styles.js

/* harmony default export */ const prism_styles = (i`
code[class*="language-"],
pre[class*="language-"] {
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;
  tab-size: 2;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

/* Code blocks */
pre[class*="language-"] {
  padding: 1em;
  margin: .5em 0;
  overflow: auto;
}

/* Inline code */
:not(pre) > code[class*="language-"] {
  white-space: normal;
}

.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: var(--light-fg)
}

.token.punctuation {
  color: var(--fg);
}

.token.tag,
.token.attr-name,
.token.namespace,
.token.deleted {
  color:var(--pink);
}

.token.function-name {
  color: var(--blue);
}

.token.boolean,
.token.number,
.token.function {
  color: var(--red);
}

.token.property,
.token.class-name,
.token.constant,
.token.symbol {
  color: var(--code-property-color);
}

.token.selector,
.token.important,
.token.atrule,
.token.keyword,
.token.builtin {
  color: var(--code-keyword-color);
}

.token.string,
.token.char,
.token.attr-value,
.token.regex,
.token.variable { 
  color: var(--green);
}

.token.operator,
.token.entity,
.token.url {
  color: var(--code-operator-color);
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

.token.inserted {
  color: green;
}
`);
;// CONCATENATED MODULE: ./src/styles/tab-styles.js

/* harmony default export */ const tab_styles = (i`
.tab-panel {
  border: none;
}
.tab-buttons {
  height:30px;
  border-bottom: 1px solid var(--light-border-color) ;
  align-items: stretch;
  overflow-y: hidden;
  overflow-x: auto;
  scrollbar-width: thin;
}
.tab-buttons::-webkit-scrollbar {
  height: 1px;
  background-color: var(--border-color);
}
.tab-btn {
  border: none;
  border-bottom: 3px solid transparent; 
  color: var(--light-fg);
  background-color: transparent;
  white-space: nowrap;
  cursor:pointer;
  outline:none;
  font-family:var(--font-regular); 
  font-size:var(--font-size-small);
  margin-right:16px;
  padding:1px;
}
.tab-btn.active {
  border-bottom: 3px solid var(--primary-color); 
  font-weight:bold;
  color:var(--primary-color);
}

.tab-btn:hover {
  color:var(--primary-color);
}
.tab-content {
  margin:-1px 0 0 0;
  position:relative;
  min-height: 50px;
}
`);
;// CONCATENATED MODULE: ./src/styles/nav-styles.js

/* harmony default export */ const nav_styles = (i`
.nav-bar {
  width:0;
  height:100%;
  overflow: hidden;
  color:var(--nav-text-color);
  background-color: var(--nav-bg-color);
  background-blend-mode: multiply;
  line-height: calc(var(--font-size-small) + 4px);
  display:none;
  position:relative;
  flex-direction:column;
  flex-wrap:nowrap;
  word-break:break-word;
}
::slotted([slot=nav-logo]){
  padding:16px 16px 0 16px;
}
.nav-scroll {
  overflow-x: hidden;
  overflow-y: auto;
  overflow-y: overlay;
  scrollbar-width: thin;
  scrollbar-color: var(--nav-hover-bg-color) transparent;
}

.nav-bar-tag {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}
.nav-bar.read .nav-bar-tag-icon {
  display:none;
}

.nav-bar-tag-icon {
  color: var(--nav-text-color);
  font-size: 20px; 
}
.nav-bar-tag-icon:hover {
  color:var(--nav-hover-text-color);
}
.nav-bar.focused .nav-bar-tag-and-paths.collapsed .nav-bar-paths-under-tag {
  display:none;
}
.nav-bar.focused .nav-bar-tag-and-paths.collapsed .nav-bar-tag-icon::after {
  content: '⌵';
  width:16px;
  height:16px;
  text-align: center;
  display: inline-block;
  transform: rotate(-90deg);
  transition: transform 0.2s ease-out 0s;
}
.nav-bar.focused .nav-bar-tag-and-paths.expanded .nav-bar-tag-icon::after {
  content: '⌵';
  width:16px;
  height:16px;
  text-align: center;
  display: inline-block;
  transition: transform 0.2s ease-out 0s;
}
.nav-scroll::-webkit-scrollbar {
  width: var(--scroll-bar-width, 8px);
}
.nav-scroll::-webkit-scrollbar-track {
  background:transparent;
}
.nav-scroll::-webkit-scrollbar-thumb {
  background-color: var(--nav-hover-bg-color);
}

.nav-bar-tag {
  font-size: var(--font-size-regular);
  color: var(--nav-accent-color);
  border-left:4px solid transparent;
  font-weight:bold;
  padding: 15px 15px 15px 10px;
  text-transform: capitalize;
}

.nav-bar-components,
.nav-bar-h1,
.nav-bar-h2,
.nav-bar-info,
.nav-bar-tag,
.nav-bar-path {
  display:flex;
  cursor:pointer;
  border-left:4px solid transparent;
}

.nav-bar-h1,
.nav-bar-h2,
.nav-bar-path {
  font-size: calc(var(--font-size-small) + 1px);
  padding: var(--nav-item-padding);
}
.nav-bar-path.small-font {
  font-size: var(--font-size-small);
}

.nav-bar-info {
  font-size: var(--font-size-regular);
  padding: 16px 10px;
  font-weight:bold;
}
.nav-bar-section {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-size: var(--font-size-small);
  color: var(--nav-text-color);
  padding: var(--nav-item-padding);
  font-weight:bold;
}
.nav-bar-section.operations {
  cursor:pointer;
}
.nav-bar-section.operations:hover {
  color:var(--nav-hover-text-color);
  background-color:var(--nav-hover-bg-color);
}

.nav-bar-section:first-child {
  display: none;
}
.nav-bar-h2 {margin-left:12px;}

.nav-bar-h1.active,
.nav-bar-h2.active,
.nav-bar-info.active,
.nav-bar-tag.active,
.nav-bar-path.active,
.nav-bar-section.operations.active {
  border-left:4px solid var(--nav-accent-color);
  color:var(--nav-hover-text-color);
}

.nav-bar-h1:hover,
.nav-bar-h2:hover,
.nav-bar-info:hover,
.nav-bar-tag:hover,
.nav-bar-path:hover {
  color:var(--nav-hover-text-color);
  background-color:var(--nav-hover-bg-color);
}
`);
;// CONCATENATED MODULE: ./src/styles/info-styles.js

/* harmony default export */ const info_styles = (i`
#api-info {
  font-size: calc(var(--font-size-regular) - 1px);
  margin-top: 8px;
  margin-left: -15px;
}

#api-info span:before {
  content: "|";
  display: inline-block;
  opacity: 0.5;
  width: 15px;
  text-align: center;
}
#api-info span:first-child:before {
  content: "";
  width: 0px;
}
`);
;// CONCATENATED MODULE: ./src/styles/custom-styles.js

/*
This file is reserved for any custom css that developers want to add to
customize their theme. Simply add your css to this file and yarn build.
*/

/* harmony default export */ const custom_styles = (i`

`);
;// CONCATENATED MODULE: ./src/utils/common-utils.js
/* For Delayed Event Handler Execution */
function debounce(fn, delay) {
  let timeoutID = null;
  return (...args) => {
    clearTimeout(timeoutID);
    const that = this;
    timeoutID = setTimeout(() => {
      fn.apply(that, args);
    }, delay);
  };
}
const invalidCharsRegEx = /[\s#:?&={}]/g; // used for generating valid html element ids by replacing the invalid chars with hyphen (-)

const rapidocApiKey = '_rapidoc_api_key';
function sleep(ms) {
  // eslint-disable-next-line no-promise-executor-return
  return new Promise(resolve => setTimeout(resolve, ms));
}
function copyToClipboard(data, e) {
  const btnEl = e.currentTarget;
  const textArea = document.createElement('textarea');
  textArea.value = data;
  textArea.style.position = 'fixed'; // avoid scrolling to bottom

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand('copy');
    btnEl.innerText = 'Copied';
    setTimeout(() => {
      btnEl.innerText = 'Copy';
    }, 5000);
  } catch (err) {
    console.error('Unable to copy', err); // eslint-disable-line no-console
  }

  document.body.removeChild(textArea);
}
function getBaseUrlFromUrl(url) {
  const pathArray = url.split('/');
  return `${pathArray[0]}//${pathArray[2]}`;
}
async function wait(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}
function componentIsInSearch(searchVal, component) {
  return component.name.toLowerCase().includes(searchVal.toLowerCase());
}
function pathIsInSearch(searchVal, path, matchType = 'includes') {
  if (matchType === 'includes') {
    const stringToSearch = `${path.method} ${path.path} ${path.summary || path.description || ''} ${path.operationId || ''}`.toLowerCase();
    return stringToSearch.includes(searchVal.toLowerCase());
  }

  const regex = new RegExp(searchVal, 'i');
  return regex.test(`${path.method} ${path.path}`);
}
function schemaKeys(schemaProps, result = new Set()) {
  if (!schemaProps) {
    return result;
  }

  Object.keys(schemaProps).forEach(key => {
    var _schemaProps$key$item;

    result.add(key);

    if (schemaProps[key].properties) {
      schemaKeys(schemaProps[key].properties, result);
    } else if ((_schemaProps$key$item = schemaProps[key].items) !== null && _schemaProps$key$item !== void 0 && _schemaProps$key$item.properties) {
      var _schemaProps$key$item2;

      schemaKeys((_schemaProps$key$item2 = schemaProps[key].items) === null || _schemaProps$key$item2 === void 0 ? void 0 : _schemaProps$key$item2.properties, result);
    }
  });
  return result;
}
function advancedSearch(searchVal, allSpecTags, searchOptions = []) {
  if (!searchVal.trim() || searchOptions.length === 0) {
    return;
  }

  const pathsMatched = [];
  allSpecTags.forEach(tag => {
    tag.paths.forEach(path => {
      let stringToSearch = '';

      if (searchOptions.includes('search-api-path')) {
        stringToSearch = path.path;
      }

      if (searchOptions.includes('search-api-descr')) {
        stringToSearch = `${stringToSearch} ${path.summary || path.description || ''}`;
      }

      if (searchOptions.includes('search-api-params')) {
        var _path$parameters;

        stringToSearch = `${stringToSearch} ${((_path$parameters = path.parameters) === null || _path$parameters === void 0 ? void 0 : _path$parameters.map(v => v.name).join(' ')) || ''}`;
      }

      if (searchOptions.includes('search-api-request-body') && path.requestBody) {
        let schemaKeySet = new Set();

        for (const contentType in (_path$requestBody = path.requestBody) === null || _path$requestBody === void 0 ? void 0 : _path$requestBody.content) {
          var _path$requestBody, _path$requestBody$con;

          if ((_path$requestBody$con = path.requestBody.content[contentType].schema) !== null && _path$requestBody$con !== void 0 && _path$requestBody$con.properties) {
            var _path$requestBody$con2;

            schemaKeySet = schemaKeys((_path$requestBody$con2 = path.requestBody.content[contentType].schema) === null || _path$requestBody$con2 === void 0 ? void 0 : _path$requestBody$con2.properties);
          }

          stringToSearch = `${stringToSearch} ${[...schemaKeySet].join(' ')}`;
        }
      }

      if (searchOptions.includes('search-api-resp-descr')) {
        stringToSearch = `${stringToSearch} ${Object.values(path.responses).map(v => v.description || '').join(' ')}`;
      }

      if (stringToSearch.toLowerCase().includes(searchVal.trim().toLowerCase())) {
        pathsMatched.push({
          elementId: path.elementId,
          method: path.method,
          path: path.path,
          summary: path.summary || path.description || '',
          deprecated: path.deprecated
        });
      }
    });
  });
  return pathsMatched;
}
/*
export function prettyXml(sourceXmlString) {
  const xmlDoc = new DOMParser().parseFromString(sourceXmlString, 'text/xml');
  const xsltDoc = new DOMParser().parseFromString([
    // describes how we want to modify the XML - indent everything
    `<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
      <xsl:strip-space elements="*"/>
        <xsl:template match="para[content-style][not(text())]">
          <xsl:value-of select="normalize-space(.)"/>
        </xsl:template>
        <xsl:template match="node()|@*">
          <xsl:copy><xsl:apply-templates select="node()|@*"/></xsl:copy>
        </xsl:template>
        <xsl:output indent="yes"/>
      </xsl:stylesheet>`,
  ].join('\n'), 'application/xml');
  const xsltProcessor = new XSLTProcessor();
  xsltProcessor.importStylesheet(xsltDoc);
  const resultDoc = xsltProcessor.transformToDocument(xmlDoc);
  return new XMLSerializer().serializeToString(resultDoc);
}
*/

function downloadResource(url, fileName) {
  if (url) {
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style = 'display: none';
    a.href = url;
    a.download = fileName;
    a.click();
    a.remove();
  }
}
function viewResource(url) {
  if (url) {
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.style = 'display: none';
    a.href = url;
    a.target = '_blank';
    a.click();
    a.remove();
  }
}
;// CONCATENATED MODULE: ./node_modules/@apitools/openapi-parser/dist/openapi-parser.mjs
function openapi_parser_t(t9) {
  return t9 && t9.t && Object.prototype.hasOwnProperty.call(t9, "default") ? t9.default : t9;
}
function openapi_parser_r(t9) {
  var r2 = t9.default;
  if ("function" == typeof r2) {
    var e2 = function() {
      return r2.apply(this, arguments);
    };
    e2.prototype = r2.prototype;
  } else
    e2 = {};
  return Object.defineProperty(e2, "t", { value: true }), Object.keys(t9).forEach(function(r3) {
    var n2 = Object.getOwnPropertyDescriptor(t9, r3);
    Object.defineProperty(e2, r3, n2.get ? n2 : { enumerable: true, get: function() {
      return t9[r3];
    } });
  }), e2;
}
var openapi_parser_e = { exports: {} }, openapi_parser_n = function(t9) {
  return t9 && t9.Math == Math && t9;
}, openapi_parser_o = openapi_parser_n("object" == typeof globalThis && globalThis) || openapi_parser_n("object" == typeof window && window) || openapi_parser_n("object" == typeof self && self) || openapi_parser_n("object" == typeof openapi_parser_o && openapi_parser_o) || function() {
  return this;
}() || Function("return this")(), openapi_parser_i = function(t9) {
  try {
    return !!t9();
  } catch (t10) {
    return true;
  }
}, openapi_parser_u = !openapi_parser_i(function() {
  var t9 = function() {
  }.bind();
  return "function" != typeof t9 || t9.hasOwnProperty("prototype");
}), openapi_parser_a = openapi_parser_u, openapi_parser_f = Function.prototype, openapi_parser_c = openapi_parser_f.apply, openapi_parser_s = openapi_parser_f.call, openapi_parser_l = "object" == typeof Reflect && Reflect.apply || (openapi_parser_a ? openapi_parser_s.bind(openapi_parser_c) : function() {
  return openapi_parser_s.apply(openapi_parser_c, arguments);
}), openapi_parser_p = openapi_parser_u, openapi_parser_v = Function.prototype, openapi_parser_h = openapi_parser_v.bind, openapi_parser_d = openapi_parser_v.call, openapi_parser_y = openapi_parser_p && openapi_parser_h.bind(openapi_parser_d, openapi_parser_d), openapi_parser_b = openapi_parser_p ? function(t9) {
  return t9 && openapi_parser_y(t9);
} : function(t9) {
  return t9 && function() {
    return openapi_parser_d.apply(t9, arguments);
  };
}, openapi_parser_m = function(t9) {
  return "function" == typeof t9;
}, openapi_parser_g = {}, openapi_parser_w = !openapi_parser_i(function() {
  return 7 != Object.defineProperty({}, 1, { get: function() {
    return 7;
  } })[1];
}), j = openapi_parser_u, O = Function.prototype.call, openapi_parser_A = j ? O.bind(O) : function() {
  return O.apply(O, arguments);
}, openapi_parser_S = {}, openapi_parser_x = {}.propertyIsEnumerable, openapi_parser_E = Object.getOwnPropertyDescriptor, openapi_parser_P = openapi_parser_E && !openapi_parser_x.call({ 1: 2 }, 1);
openapi_parser_S.f = openapi_parser_P ? function(t9) {
  var r2 = openapi_parser_E(this, t9);
  return !!r2 && r2.enumerable;
} : openapi_parser_x;
var openapi_parser_k, openapi_parser_, openapi_parser_I = function(t9, r2) {
  return { enumerable: !(1 & t9), configurable: !(2 & t9), writable: !(4 & t9), value: r2 };
}, openapi_parser_T = openapi_parser_b, openapi_parser_R = openapi_parser_T({}.toString), F = openapi_parser_T("".slice), openapi_parser_N = function(t9) {
  return F(openapi_parser_R(t9), 8, -1);
}, openapi_parser_M = openapi_parser_b, D = openapi_parser_i, U = openapi_parser_N, openapi_parser_L = openapi_parser_o.Object, openapi_parser_C = openapi_parser_M("".split), openapi_parser_$ = D(function() {
  return !openapi_parser_L("z").propertyIsEnumerable(0);
}) ? function(t9) {
  return "String" == U(t9) ? openapi_parser_C(t9, "") : openapi_parser_L(t9);
} : openapi_parser_L, B = openapi_parser_o.TypeError, q = function(t9) {
  if (null == t9)
    throw B("Can't call method on " + t9);
  return t9;
}, G = openapi_parser_$, W = q, openapi_parser_z = function(t9) {
  return G(W(t9));
}, J = openapi_parser_m, openapi_parser_H = function(t9) {
  return "object" == typeof t9 ? null !== t9 : J(t9);
}, openapi_parser_V = {}, Y = openapi_parser_V, Q = openapi_parser_o, K = openapi_parser_m, X = function(t9) {
  return K(t9) ? t9 : void 0;
}, openapi_parser_Z = function(t9, r2) {
  return arguments.length < 2 ? X(Y[t9]) || X(Q[t9]) : Y[t9] && Y[t9][r2] || Q[t9] && Q[t9][r2];
}, tt = openapi_parser_b({}.isPrototypeOf), rt = openapi_parser_Z("navigator", "userAgent") || "", et = openapi_parser_o, nt = rt, ot = et.process, it = et.Deno, ut = ot && ot.versions || it && it.version, at = ut && ut.v8;
at && (openapi_parser_ = (openapi_parser_k = at.split("."))[0] > 0 && openapi_parser_k[0] < 4 ? 1 : +(openapi_parser_k[0] + openapi_parser_k[1])), !openapi_parser_ && nt && (!(openapi_parser_k = nt.match(/Edge\/(\d+)/)) || openapi_parser_k[1] >= 74) && (openapi_parser_k = nt.match(/Chrome\/(\d+)/)) && (openapi_parser_ = +openapi_parser_k[1]);
var ft = openapi_parser_, ct = ft, st = openapi_parser_i, lt = !!Object.getOwnPropertySymbols && !st(function() {
  var t9 = Symbol();
  return !String(t9) || !(Object(t9) instanceof Symbol) || !Symbol.sham && ct && ct < 41;
}), pt = lt && !Symbol.sham && "symbol" == typeof Symbol.iterator, vt = openapi_parser_Z, ht = openapi_parser_m, dt = tt, yt = pt, bt = openapi_parser_o.Object, mt = yt ? function(t9) {
  return "symbol" == typeof t9;
} : function(t9) {
  var r2 = vt("Symbol");
  return ht(r2) && dt(r2.prototype, bt(t9));
}, gt = openapi_parser_o.String, wt = function(t9) {
  try {
    return gt(t9);
  } catch (t10) {
    return "Object";
  }
}, jt = openapi_parser_m, Ot = wt, At = openapi_parser_o.TypeError, St = function(t9) {
  if (jt(t9))
    return t9;
  throw At(Ot(t9) + " is not a function");
}, xt = St, Et = function(t9, r2) {
  var e2 = t9[r2];
  return null == e2 ? void 0 : xt(e2);
}, Pt = openapi_parser_A, kt = openapi_parser_m, _t = openapi_parser_H, It = openapi_parser_o.TypeError, Tt = { exports: {} }, Rt = openapi_parser_o, Ft = Object.defineProperty, Nt = function(t9, r2) {
  try {
    Ft(Rt, t9, { value: r2, configurable: true, writable: true });
  } catch (e2) {
    Rt[t9] = r2;
  }
  return r2;
}, Mt = openapi_parser_o["i"] || Nt("__core-js_shared__", {}), Dt = Mt;
(Tt.exports = function(t9, r2) {
  return Dt[t9] || (Dt[t9] = void 0 !== r2 ? r2 : {});
})("versions", []).push({ version: "3.21.1", mode: "pure", copyright: "\xA9 2014-2022 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.21.1/LICENSE", source: "https://github.com/zloirock/core-js" });
var Ut = q, Lt = openapi_parser_o.Object, Ct = function(t9) {
  return Lt(Ut(t9));
}, $t = Ct, Bt = openapi_parser_b({}.hasOwnProperty), qt = Object.hasOwn || function(t9, r2) {
  return Bt($t(t9), r2);
}, Gt = openapi_parser_b, Wt = 0, zt = Math.random(), Jt = Gt(1 .toString), Ht = function(t9) {
  return "Symbol(" + (void 0 === t9 ? "" : t9) + ")_" + Jt(++Wt + zt, 36);
}, Vt = openapi_parser_o, Yt = Tt.exports, Qt = qt, Kt = Ht, Xt = lt, Zt = pt, tr = Yt("wks"), rr = Vt.Symbol, er = rr && rr.for, nr = Zt ? rr : rr && rr.withoutSetter || Kt, or = function(t9) {
  if (!Qt(tr, t9) || !Xt && "string" != typeof tr[t9]) {
    var r2 = "Symbol." + t9;
    Xt && Qt(rr, t9) ? tr[t9] = rr[t9] : tr[t9] = Zt && er ? er(r2) : nr(r2);
  }
  return tr[t9];
}, ir = openapi_parser_A, ur = openapi_parser_H, ar = mt, fr = Et, cr = function(t9, r2) {
  var e2, n2;
  if ("string" === r2 && kt(e2 = t9.toString) && !_t(n2 = Pt(e2, t9)))
    return n2;
  if (kt(e2 = t9.valueOf) && !_t(n2 = Pt(e2, t9)))
    return n2;
  if ("string" !== r2 && kt(e2 = t9.toString) && !_t(n2 = Pt(e2, t9)))
    return n2;
  throw It("Can't convert object to primitive value");
}, sr = or, lr = openapi_parser_o.TypeError, pr = sr("toPrimitive"), vr = function(t9, r2) {
  if (!ur(t9) || ar(t9))
    return t9;
  var e2, n2 = fr(t9, pr);
  if (n2) {
    if (void 0 === r2 && (r2 = "default"), e2 = ir(n2, t9, r2), !ur(e2) || ar(e2))
      return e2;
    throw lr("Can't convert object to primitive value");
  }
  return void 0 === r2 && (r2 = "number"), cr(t9, r2);
}, hr = mt, dr = function(t9) {
  var r2 = vr(t9, "string");
  return hr(r2) ? r2 : r2 + "";
}, yr = openapi_parser_H, br = openapi_parser_o.document, mr = yr(br) && yr(br.createElement), gr = function(t9) {
  return mr ? br.createElement(t9) : {};
}, wr = gr, jr = !openapi_parser_w && !openapi_parser_i(function() {
  return 7 != Object.defineProperty(wr("div"), "a", { get: function() {
    return 7;
  } }).a;
}), Or = openapi_parser_w, Ar = openapi_parser_A, Sr = openapi_parser_S, xr = openapi_parser_I, Er = openapi_parser_z, Pr = dr, kr = qt, _r = jr, Ir = Object.getOwnPropertyDescriptor;
openapi_parser_g.f = Or ? Ir : function(t9, r2) {
  if (t9 = Er(t9), r2 = Pr(r2), _r)
    try {
      return Ir(t9, r2);
    } catch (t10) {
    }
  if (kr(t9, r2))
    return xr(!Ar(Sr.f, t9, r2), t9[r2]);
};
var Tr = openapi_parser_i, Rr = openapi_parser_m, Fr = /#|\.prototype\./, Nr = function(t9, r2) {
  var e2 = Dr[Mr(t9)];
  return e2 == Lr || e2 != Ur && (Rr(r2) ? Tr(r2) : !!r2);
}, Mr = Nr.normalize = function(t9) {
  return String(t9).replace(Fr, ".").toLowerCase();
}, Dr = Nr.data = {}, Ur = Nr.NATIVE = "N", Lr = Nr.POLYFILL = "P", Cr = Nr, $r = St, Br = openapi_parser_u, qr = openapi_parser_b(openapi_parser_b.bind), Gr = function(t9, r2) {
  return $r(t9), void 0 === r2 ? t9 : Br ? qr(t9, r2) : function() {
    return t9.apply(r2, arguments);
  };
}, Wr = {}, zr = openapi_parser_w && openapi_parser_i(function() {
  return 42 != Object.defineProperty(function() {
  }, "prototype", { value: 42, writable: false }).prototype;
}), Jr = openapi_parser_o, Hr = openapi_parser_H, Vr = Jr.String, Yr = Jr.TypeError, Qr = function(t9) {
  if (Hr(t9))
    return t9;
  throw Yr(Vr(t9) + " is not an object");
}, Kr = openapi_parser_w, Xr = jr, Zr = zr, te = Qr, re = dr, ee = openapi_parser_o.TypeError, ne = Object.defineProperty, oe = Object.getOwnPropertyDescriptor;
Wr.f = Kr ? Zr ? function(t9, r2, e2) {
  if (te(t9), r2 = re(r2), te(e2), "function" == typeof t9 && "prototype" === r2 && "value" in e2 && "writable" in e2 && !e2.writable) {
    var n2 = oe(t9, r2);
    n2 && n2.writable && (t9[r2] = e2.value, e2 = { configurable: "configurable" in e2 ? e2.configurable : n2.configurable, enumerable: "enumerable" in e2 ? e2.enumerable : n2.enumerable, writable: false });
  }
  return ne(t9, r2, e2);
} : ne : function(t9, r2, e2) {
  if (te(t9), r2 = re(r2), te(e2), Xr)
    try {
      return ne(t9, r2, e2);
    } catch (t10) {
    }
  if ("get" in e2 || "set" in e2)
    throw ee("Accessors not supported");
  return "value" in e2 && (t9[r2] = e2.value), t9;
};
var ie = Wr, ue = openapi_parser_I, ae = openapi_parser_w ? function(t9, r2, e2) {
  return ie.f(t9, r2, ue(1, e2));
} : function(t9, r2, e2) {
  return t9[r2] = e2, t9;
}, fe = openapi_parser_o, ce = openapi_parser_l, se = openapi_parser_b, le = openapi_parser_m, pe = openapi_parser_g.f, ve = Cr, he = openapi_parser_V, de = Gr, ye = ae, be = qt, me = function(t9) {
  var r2 = function(e2, n2, o2) {
    if (this instanceof r2) {
      switch (arguments.length) {
        case 0:
          return new t9();
        case 1:
          return new t9(e2);
        case 2:
          return new t9(e2, n2);
      }
      return new t9(e2, n2, o2);
    }
    return ce(t9, this, arguments);
  };
  return r2.prototype = t9.prototype, r2;
}, ge = function(t9, r2) {
  var e2, n2, o2, i2, u2, a2, f2, c2, s2 = t9.target, l2 = t9.global, p2 = t9.stat, v2 = t9.proto, h2 = l2 ? fe : p2 ? fe[s2] : (fe[s2] || {}).prototype, d2 = l2 ? he : he[s2] || ye(he, s2, {})[s2], y2 = d2.prototype;
  for (o2 in r2)
    e2 = !ve(l2 ? o2 : s2 + (p2 ? "." : "#") + o2, t9.forced) && h2 && be(h2, o2), u2 = d2[o2], e2 && (a2 = t9.noTargetGet ? (c2 = pe(h2, o2)) && c2.value : h2[o2]), i2 = e2 && a2 ? a2 : r2[o2], e2 && typeof u2 == typeof i2 || (f2 = t9.bind && e2 ? de(i2, fe) : t9.wrap && e2 ? me(i2) : v2 && le(i2) ? se(i2) : i2, (t9.sham || i2 && i2.sham || u2 && u2.sham) && ye(f2, "sham", true), ye(d2, o2, f2), v2 && (be(he, n2 = s2 + "Prototype") || ye(he, n2, {}), ye(he[n2], o2, i2), t9.real && y2 && !y2[o2] && ye(y2, o2, i2)));
}, we = Math.ceil, je = Math.floor, Oe = function(t9) {
  var r2 = +t9;
  return r2 != r2 || 0 === r2 ? 0 : (r2 > 0 ? je : we)(r2);
}, Ae = Oe, Se = Math.max, xe = Math.min, Ee = function(t9, r2) {
  var e2 = Ae(t9);
  return e2 < 0 ? Se(e2 + r2, 0) : xe(e2, r2);
}, Pe = Oe, ke = Math.min, _e = function(t9) {
  return t9 > 0 ? ke(Pe(t9), 9007199254740991) : 0;
}, Ie = _e, Te = function(t9) {
  return Ie(t9.length);
}, Re = openapi_parser_z, Fe = Ee, Ne = Te, Me = function(t9) {
  return function(r2, e2, n2) {
    var o2, i2 = Re(r2), u2 = Ne(i2), a2 = Fe(n2, u2);
    if (t9 && e2 != e2) {
      for (; u2 > a2; )
        if ((o2 = i2[a2++]) != o2)
          return true;
    } else
      for (; u2 > a2; a2++)
        if ((t9 || a2 in i2) && i2[a2] === e2)
          return t9 || a2 || 0;
    return !t9 && -1;
  };
}, De = { includes: Me(true), indexOf: Me(false) }, Ue = {}, Le = qt, Ce = openapi_parser_z, $e = De.indexOf, Be = Ue, qe = openapi_parser_b([].push), Ge = function(t9, r2) {
  var e2, n2 = Ce(t9), o2 = 0, i2 = [];
  for (e2 in n2)
    !Le(Be, e2) && Le(n2, e2) && qe(i2, e2);
  for (; r2.length > o2; )
    Le(n2, e2 = r2[o2++]) && (~$e(i2, e2) || qe(i2, e2));
  return i2;
}, We = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], ze = Ge, Je = We, He = Object.keys || function(t9) {
  return ze(t9, Je);
}, Ve = Ct, Ye = He;
ge({ target: "Object", stat: true, forced: openapi_parser_i(function() {
  Ye(1);
}) }, { keys: function(t9) {
  return Ye(Ve(t9));
} });
var Qe = openapi_parser_V.Object.keys;
const Ke = openapi_parser_t(openapi_parser_e.exports = Qe);
var Xe = { exports: {} }, Ze = openapi_parser_N, tn = Array.isArray || function(t9) {
  return "Array" == Ze(t9);
}, rn = {};
rn[or("toStringTag")] = "z";
var en = "[object z]" === String(rn), nn = openapi_parser_o, on = en, un = openapi_parser_m, an = openapi_parser_N, fn = or("toStringTag"), cn = nn.Object, sn = "Arguments" == an(function() {
  return arguments;
}()), ln = on ? an : function(t9) {
  var r2, e2, n2;
  return void 0 === t9 ? "Undefined" : null === t9 ? "Null" : "string" == typeof (e2 = function(t10, r3) {
    try {
      return t10[r3];
    } catch (t11) {
    }
  }(r2 = cn(t9), fn)) ? e2 : sn ? an(r2) : "Object" == (n2 = an(r2)) && un(r2.callee) ? "Arguments" : n2;
}, pn = ln, vn = openapi_parser_o.String, hn = function(t9) {
  if ("Symbol" === pn(t9))
    throw TypeError("Cannot convert a Symbol value to a string");
  return vn(t9);
}, dn = {}, yn = openapi_parser_w, bn = zr, mn = Wr, gn = Qr, wn = openapi_parser_z, jn = He;
dn.f = yn && !bn ? Object.defineProperties : function(t9, r2) {
  gn(t9);
  for (var e2, n2 = wn(r2), o2 = jn(r2), i2 = o2.length, u2 = 0; i2 > u2; )
    mn.f(t9, e2 = o2[u2++], n2[e2]);
  return t9;
};
var On, An = openapi_parser_Z("document", "documentElement"), Sn = Tt.exports, xn = Ht, En = Sn("keys"), Pn = function(t9) {
  return En[t9] || (En[t9] = xn(t9));
}, kn = Qr, _n = dn, In = We, Tn = Ue, Rn = An, Fn = gr, Nn = Pn("IE_PROTO"), Mn = function() {
}, Dn = function(t9) {
  return "<script>" + t9 + "<\/script>";
}, Un = function(t9) {
  t9.write(Dn("")), t9.close();
  var r2 = t9.parentWindow.Object;
  return t9 = null, r2;
}, Ln = function() {
  try {
    On = new ActiveXObject("htmlfile");
  } catch (t10) {
  }
  var t9, r2;
  Ln = "undefined" != typeof document ? document.domain && On ? Un(On) : ((r2 = Fn("iframe")).style.display = "none", Rn.appendChild(r2), r2.src = String("javascript:"), (t9 = r2.contentWindow.document).open(), t9.write(Dn("document.F=Object")), t9.close(), t9.F) : Un(On);
  for (var e2 = In.length; e2--; )
    delete Ln.prototype[In[e2]];
  return Ln();
};
Tn[Nn] = true;
var Cn = Object.create || function(t9, r2) {
  var e2;
  return null !== t9 ? (Mn.prototype = kn(t9), e2 = new Mn(), Mn.prototype = null, e2[Nn] = t9) : e2 = Ln(), void 0 === r2 ? e2 : _n.f(e2, r2);
}, $n = {}, Bn = Ge, qn = We.concat("length", "prototype");
$n.f = Object.getOwnPropertyNames || function(t9) {
  return Bn(t9, qn);
};
var Gn = {}, Wn = dr, zn = Wr, Jn = openapi_parser_I, Hn = function(t9, r2, e2) {
  var n2 = Wn(r2);
  n2 in t9 ? zn.f(t9, n2, Jn(0, e2)) : t9[n2] = e2;
}, Vn = Ee, Yn = Te, Qn = Hn, Kn = openapi_parser_o.Array, Xn = Math.max, Zn = function(t9, r2, e2) {
  for (var n2 = Yn(t9), o2 = Vn(r2, n2), i2 = Vn(void 0 === e2 ? n2 : e2, n2), u2 = Kn(Xn(i2 - o2, 0)), a2 = 0; o2 < i2; o2++, a2++)
    Qn(u2, a2, t9[o2]);
  return u2.length = a2, u2;
}, to = openapi_parser_N, ro = openapi_parser_z, eo = $n.f, no = Zn, oo = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
Gn.f = function(t9) {
  return oo && "Window" == to(t9) ? function(t10) {
    try {
      return eo(t10);
    } catch (t11) {
      return no(oo);
    }
  }(t9) : eo(ro(t9));
};
var io = {};
io.f = Object.getOwnPropertySymbols;
var uo = openapi_parser_b([].slice), ao = ae, fo = function(t9, r2, e2, n2) {
  n2 && n2.enumerable ? t9[r2] = e2 : ao(t9, r2, e2);
}, co = {}, so = or;
co.f = so;
var lo = openapi_parser_V, po = qt, vo = co, ho = Wr.f, yo = function(t9) {
  var r2 = lo.Symbol || (lo.Symbol = {});
  po(r2, t9) || ho(r2, t9, { value: vo.f(t9) });
}, bo = ln, mo = en ? {}.toString : function() {
  return "[object " + bo(this) + "]";
}, go = en, wo = Wr.f, jo = ae, Oo = qt, Ao = mo, So = or("toStringTag"), xo = function(t9, r2, e2, n2) {
  if (t9) {
    var o2 = e2 ? t9 : t9.prototype;
    Oo(o2, So) || wo(o2, So, { configurable: true, value: r2 }), n2 && !go && jo(o2, "toString", Ao);
  }
}, Eo = openapi_parser_m, Po = Mt, ko = openapi_parser_b(Function.toString);
Eo(Po.inspectSource) || (Po.inspectSource = function(t9) {
  return ko(t9);
});
var _o, Io, To, Ro = Po.inspectSource, Fo = openapi_parser_m, No = Ro, Mo = openapi_parser_o.WeakMap, Do = Fo(Mo) && /native code/.test(No(Mo)), Uo = Do, Lo = openapi_parser_o, Co = openapi_parser_b, $o = openapi_parser_H, Bo = ae, qo = qt, Go = Mt, Wo = Pn, zo = Ue, Jo = Lo.TypeError, Ho = Lo.WeakMap;
if (Uo || Go.state) {
  var Vo = Go.state || (Go.state = new Ho()), Yo = Co(Vo.get), Qo = Co(Vo.has), Ko = Co(Vo.set);
  _o = function(t9, r2) {
    if (Qo(Vo, t9))
      throw new Jo("Object already initialized");
    return r2.facade = t9, Ko(Vo, t9, r2), r2;
  }, Io = function(t9) {
    return Yo(Vo, t9) || {};
  }, To = function(t9) {
    return Qo(Vo, t9);
  };
} else {
  var Xo = Wo("state");
  zo[Xo] = true, _o = function(t9, r2) {
    if (qo(t9, Xo))
      throw new Jo("Object already initialized");
    return r2.facade = t9, Bo(t9, Xo, r2), r2;
  }, Io = function(t9) {
    return qo(t9, Xo) ? t9[Xo] : {};
  }, To = function(t9) {
    return qo(t9, Xo);
  };
}
var Zo = { set: _o, get: Io, has: To, enforce: function(t9) {
  return To(t9) ? Io(t9) : _o(t9, {});
}, getterFor: function(t9) {
  return function(r2) {
    var e2;
    if (!$o(r2) || (e2 = Io(r2)).type !== t9)
      throw Jo("Incompatible receiver, " + t9 + " required");
    return e2;
  };
} }, ti = openapi_parser_b, ri = openapi_parser_i, ei = openapi_parser_m, ni = ln, oi = Ro, ii = function() {
}, ui = [], ai = openapi_parser_Z("Reflect", "construct"), fi = /^\s*(?:class|function)\b/, ci = ti(fi.exec), si = !fi.exec(ii), li = function(t9) {
  if (!ei(t9))
    return false;
  try {
    return ai(ii, ui, t9), true;
  } catch (t10) {
    return false;
  }
}, pi = function(t9) {
  if (!ei(t9))
    return false;
  switch (ni(t9)) {
    case "AsyncFunction":
    case "GeneratorFunction":
    case "AsyncGeneratorFunction":
      return false;
  }
  try {
    return si || !!ci(fi, oi(t9));
  } catch (t10) {
    return true;
  }
};
pi.sham = true;
var vi = !ai || ri(function() {
  var t9;
  return li(li.call) || !li(Object) || !li(function() {
    t9 = true;
  }) || t9;
}) ? pi : li, hi = openapi_parser_o, di = tn, yi = vi, bi = openapi_parser_H, mi = or("species"), gi = hi.Array, wi = function(t9) {
  var r2;
  return di(t9) && (r2 = t9.constructor, (yi(r2) && (r2 === gi || di(r2.prototype)) || bi(r2) && null === (r2 = r2[mi])) && (r2 = void 0)), void 0 === r2 ? gi : r2;
}, ji = function(t9, r2) {
  return new (wi(t9))(0 === r2 ? 0 : r2);
}, Oi = Gr, Ai = openapi_parser_$, Si = Ct, xi = Te, Ei = ji, Pi = openapi_parser_b([].push), ki = function(t9) {
  var r2 = 1 == t9, e2 = 2 == t9, n2 = 3 == t9, o2 = 4 == t9, i2 = 6 == t9, u2 = 7 == t9, a2 = 5 == t9 || i2;
  return function(f2, c2, s2, l2) {
    for (var p2, v2, h2 = Si(f2), d2 = Ai(h2), y2 = Oi(c2, s2), b2 = xi(d2), m2 = 0, g2 = l2 || Ei, w2 = r2 ? g2(f2, b2) : e2 || u2 ? g2(f2, 0) : void 0; b2 > m2; m2++)
      if ((a2 || m2 in d2) && (v2 = y2(p2 = d2[m2], m2, h2), t9))
        if (r2)
          w2[m2] = v2;
        else if (v2)
          switch (t9) {
            case 3:
              return true;
            case 5:
              return p2;
            case 6:
              return m2;
            case 2:
              Pi(w2, p2);
          }
        else
          switch (t9) {
            case 4:
              return false;
            case 7:
              Pi(w2, p2);
          }
    return i2 ? -1 : n2 || o2 ? o2 : w2;
  };
}, _i = { forEach: ki(0), map: ki(1), filter: ki(2), some: ki(3), every: ki(4), find: ki(5), findIndex: ki(6), filterReject: ki(7) }, Ii = ge, Ti = openapi_parser_o, Ri = openapi_parser_Z, Fi = openapi_parser_l, Ni = openapi_parser_A, Mi = openapi_parser_b, Di = openapi_parser_w, Ui = lt, Li = openapi_parser_i, Ci = qt, $i = tn, Bi = openapi_parser_m, qi = openapi_parser_H, Gi = tt, Wi = mt, zi = Qr, Ji = Ct, Hi = openapi_parser_z, Vi = dr, Yi = hn, Qi = openapi_parser_I, Ki = Cn, Xi = He, Zi = $n, tu = Gn, ru = io, eu = openapi_parser_g, nu = Wr, ou = dn, iu = openapi_parser_S, uu = uo, au = fo, fu = Tt.exports, cu = Ue, su = Ht, lu = or, pu = co, vu = yo, hu = xo, du = Zo, yu = _i.forEach, bu = Pn("hidden"), mu = lu("toPrimitive"), gu = du.set, wu = du.getterFor("Symbol"), ju = Object.prototype, Ou = Ti.Symbol, Au = Ou && Ou.prototype, Su = Ti.TypeError, xu = Ti.QObject, Eu = Ri("JSON", "stringify"), Pu = eu.f, ku = nu.f, _u = tu.f, Iu = iu.f, Tu = Mi([].push), Ru = fu("symbols"), Fu = fu("op-symbols"), Nu = fu("string-to-symbol-registry"), Mu = fu("symbol-to-string-registry"), Du = fu("wks"), Uu = !xu || !xu.prototype || !xu.prototype.findChild, Lu = Di && Li(function() {
  return 7 != Ki(ku({}, "a", { get: function() {
    return ku(this, "a", { value: 7 }).a;
  } })).a;
}) ? function(t9, r2, e2) {
  var n2 = Pu(ju, r2);
  n2 && delete ju[r2], ku(t9, r2, e2), n2 && t9 !== ju && ku(ju, r2, n2);
} : ku, Cu = function(t9, r2) {
  var e2 = Ru[t9] = Ki(Au);
  return gu(e2, { type: "Symbol", tag: t9, description: r2 }), Di || (e2.description = r2), e2;
}, $u = function(t9, r2, e2) {
  t9 === ju && $u(Fu, r2, e2), zi(t9);
  var n2 = Vi(r2);
  return zi(e2), Ci(Ru, n2) ? (e2.enumerable ? (Ci(t9, bu) && t9[bu][n2] && (t9[bu][n2] = false), e2 = Ki(e2, { enumerable: Qi(0, false) })) : (Ci(t9, bu) || ku(t9, bu, Qi(1, {})), t9[bu][n2] = true), Lu(t9, n2, e2)) : ku(t9, n2, e2);
}, Bu = function(t9, r2) {
  zi(t9);
  var e2 = Hi(r2), n2 = Xi(e2).concat(zu(e2));
  return yu(n2, function(r3) {
    Di && !Ni(qu, e2, r3) || $u(t9, r3, e2[r3]);
  }), t9;
}, qu = function(t9) {
  var r2 = Vi(t9), e2 = Ni(Iu, this, r2);
  return !(this === ju && Ci(Ru, r2) && !Ci(Fu, r2)) && (!(e2 || !Ci(this, r2) || !Ci(Ru, r2) || Ci(this, bu) && this[bu][r2]) || e2);
}, Gu = function(t9, r2) {
  var e2 = Hi(t9), n2 = Vi(r2);
  if (e2 !== ju || !Ci(Ru, n2) || Ci(Fu, n2)) {
    var o2 = Pu(e2, n2);
    return !o2 || !Ci(Ru, n2) || Ci(e2, bu) && e2[bu][n2] || (o2.enumerable = true), o2;
  }
}, Wu = function(t9) {
  var r2 = _u(Hi(t9)), e2 = [];
  return yu(r2, function(t10) {
    Ci(Ru, t10) || Ci(cu, t10) || Tu(e2, t10);
  }), e2;
}, zu = function(t9) {
  var r2 = t9 === ju, e2 = _u(r2 ? Fu : Hi(t9)), n2 = [];
  return yu(e2, function(t10) {
    !Ci(Ru, t10) || r2 && !Ci(ju, t10) || Tu(n2, Ru[t10]);
  }), n2;
};
if (Ui || (au(Au = (Ou = function() {
  if (Gi(Au, this))
    throw Su("Symbol is not a constructor");
  var t9 = arguments.length && void 0 !== arguments[0] ? Yi(arguments[0]) : void 0, r2 = su(t9), e2 = function(t10) {
    this === ju && Ni(e2, Fu, t10), Ci(this, bu) && Ci(this[bu], r2) && (this[bu][r2] = false), Lu(this, r2, Qi(1, t10));
  };
  return Di && Uu && Lu(ju, r2, { configurable: true, set: e2 }), Cu(r2, t9);
}).prototype, "toString", function() {
  return wu(this).tag;
}), au(Ou, "withoutSetter", function(t9) {
  return Cu(su(t9), t9);
}), iu.f = qu, nu.f = $u, ou.f = Bu, eu.f = Gu, Zi.f = tu.f = Wu, ru.f = zu, pu.f = function(t9) {
  return Cu(lu(t9), t9);
}, Di && ku(Au, "description", { configurable: true, get: function() {
  return wu(this).description;
} })), Ii({ global: true, wrap: true, forced: !Ui, sham: !Ui }, { Symbol: Ou }), yu(Xi(Du), function(t9) {
  vu(t9);
}), Ii({ target: "Symbol", stat: true, forced: !Ui }, { for: function(t9) {
  var r2 = Yi(t9);
  if (Ci(Nu, r2))
    return Nu[r2];
  var e2 = Ou(r2);
  return Nu[r2] = e2, Mu[e2] = r2, e2;
}, keyFor: function(t9) {
  if (!Wi(t9))
    throw Su(t9 + " is not a symbol");
  if (Ci(Mu, t9))
    return Mu[t9];
}, useSetter: function() {
  Uu = true;
}, useSimple: function() {
  Uu = false;
} }), Ii({ target: "Object", stat: true, forced: !Ui, sham: !Di }, { create: function(t9, r2) {
  return void 0 === r2 ? Ki(t9) : Bu(Ki(t9), r2);
}, defineProperty: $u, defineProperties: Bu, getOwnPropertyDescriptor: Gu }), Ii({ target: "Object", stat: true, forced: !Ui }, { getOwnPropertyNames: Wu, getOwnPropertySymbols: zu }), Ii({ target: "Object", stat: true, forced: Li(function() {
  ru.f(1);
}) }, { getOwnPropertySymbols: function(t9) {
  return ru.f(Ji(t9));
} }), Eu) {
  var Ju = !Ui || Li(function() {
    var t9 = Ou();
    return "[null]" != Eu([t9]) || "{}" != Eu({ a: t9 }) || "{}" != Eu(Object(t9));
  });
  Ii({ target: "JSON", stat: true, forced: Ju }, { stringify: function(t9, r2, e2) {
    var n2 = uu(arguments), o2 = r2;
    if ((qi(r2) || void 0 !== t9) && !Wi(t9))
      return $i(r2) || (r2 = function(t10, r3) {
        if (Bi(o2) && (r3 = Ni(o2, this, t10, r3)), !Wi(r3))
          return r3;
      }), n2[1] = r2, Fi(Eu, null, n2);
  } });
}
if (!Au[mu]) {
  var Hu = Au.valueOf;
  au(Au, mu, function(t9) {
    return Ni(Hu, this);
  });
}
hu(Ou, "Symbol"), cu[bu] = true;
var Vu = openapi_parser_V.Object.getOwnPropertySymbols;
const Yu = openapi_parser_t(Xe.exports = Vu);
var Qu = { exports: {} }, Ku = openapi_parser_i, Xu = ft, Zu = or("species"), ta = function(t9) {
  return Xu >= 51 || !Ku(function() {
    var r2 = [];
    return (r2.constructor = {})[Zu] = function() {
      return { foo: 1 };
    }, 1 !== r2[t9](Boolean).foo;
  });
}, ra = _i.filter;
ge({ target: "Array", proto: true, forced: !ta("filter") }, { filter: function(t9) {
  return ra(this, t9, arguments.length > 1 ? arguments[1] : void 0);
} });
var ea = openapi_parser_V, na = function(t9) {
  return ea[t9 + "Prototype"];
}, oa = na("Array").filter, ia = tt, ua = oa, aa = Array.prototype, fa = function(t9) {
  var r2 = t9.filter;
  return t9 === aa || ia(aa, t9) && r2 === aa.filter ? ua : r2;
};
const ca = openapi_parser_t(Qu.exports = fa);
var sa = { exports: {} }, la = { exports: {} }, pa = ge, va = openapi_parser_i, ha = openapi_parser_z, da = openapi_parser_g.f, ya = openapi_parser_w, ba = va(function() {
  da(1);
});
pa({ target: "Object", stat: true, forced: !ya || ba, sham: !ya }, { getOwnPropertyDescriptor: function(t9, r2) {
  return da(ha(t9), r2);
} });
var ma = openapi_parser_V.Object, ga = la.exports = function(t9, r2) {
  return ma.getOwnPropertyDescriptor(t9, r2);
};
ma.getOwnPropertyDescriptor.sham && (ga.sham = true);
var wa = la.exports;
const ja = openapi_parser_t(sa.exports = wa);
var Oa, Aa, Sa, xa = { exports: {} }, Ea = {}, Pa = openapi_parser_w, ka = qt, _a = Function.prototype, Ia = Pa && Object.getOwnPropertyDescriptor, Ta = ka(_a, "name"), Ra = { EXISTS: Ta, PROPER: Ta && "something" === function() {
}.name, CONFIGURABLE: Ta && (!Pa || Pa && Ia(_a, "name").configurable) }, Fa = !openapi_parser_i(function() {
  function t9() {
  }
  return t9.prototype.constructor = null, Object.getPrototypeOf(new t9()) !== t9.prototype;
}), Na = openapi_parser_o, Ma = qt, Da = openapi_parser_m, Ua = Ct, La = Fa, Ca = Pn("IE_PROTO"), $a = Na.Object, Ba = $a.prototype, qa = La ? $a.getPrototypeOf : function(t9) {
  var r2 = Ua(t9);
  if (Ma(r2, Ca))
    return r2[Ca];
  var e2 = r2.constructor;
  return Da(e2) && r2 instanceof e2 ? e2.prototype : r2 instanceof $a ? Ba : null;
}, Ga = openapi_parser_i, Wa = openapi_parser_m, za = Cn, Ja = qa, Ha = fo, Va = or("iterator"), Ya = false;
[].keys && ("next" in (Sa = [].keys()) ? (Aa = Ja(Ja(Sa))) !== Object.prototype && (Oa = Aa) : Ya = true);
var Qa = null == Oa || Ga(function() {
  var t9 = {};
  return Oa[Va].call(t9) !== t9;
});
Wa((Oa = Qa ? {} : za(Oa))[Va]) || Ha(Oa, Va, function() {
  return this;
});
var Ka = { IteratorPrototype: Oa, BUGGY_SAFARI_ITERATORS: Ya }, Xa = Ka.IteratorPrototype, Za = Cn, tf = openapi_parser_I, rf = xo, ef = Ea, nf = function() {
  return this;
}, of = function(t9, r2, e2, n2) {
  var o2 = r2 + " Iterator";
  return t9.prototype = Za(Xa, { next: tf(+!n2, e2) }), rf(t9, o2, false, true), ef[o2] = nf, t9;
}, uf = openapi_parser_o, af = openapi_parser_m, ff = uf.String, cf = uf.TypeError, sf = openapi_parser_b, lf = Qr, pf = function(t9) {
  if ("object" == typeof t9 || af(t9))
    return t9;
  throw cf("Can't set " + ff(t9) + " as a prototype");
}, vf = Object.setPrototypeOf || ("__proto__" in {} ? function() {
  var t9, r2 = false, e2 = {};
  try {
    (t9 = sf(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(e2, []), r2 = e2 instanceof Array;
  } catch (t10) {
  }
  return function(e3, n2) {
    return lf(e3), pf(n2), r2 ? t9(e3, n2) : e3.__proto__ = n2, e3;
  };
}() : void 0), hf = ge, df = openapi_parser_A, yf = of, bf = qa, mf = xo, gf = fo, wf = Ea, jf = Ra.PROPER, Of = Ka.BUGGY_SAFARI_ITERATORS, Af = or("iterator"), Sf = function() {
  return this;
}, xf = function(t9, r2, e2, n2, o2, i2, u2) {
  yf(e2, r2, n2);
  var a2, f2, c2, s2 = function(t10) {
    if (t10 === o2 && d2)
      return d2;
    if (!Of && t10 in v2)
      return v2[t10];
    switch (t10) {
      case "keys":
      case "values":
      case "entries":
        return function() {
          return new e2(this, t10);
        };
    }
    return function() {
      return new e2(this);
    };
  }, l2 = r2 + " Iterator", p2 = false, v2 = t9.prototype, h2 = v2[Af] || v2["@@iterator"] || o2 && v2[o2], d2 = !Of && h2 || s2(o2), y2 = "Array" == r2 && v2.entries || h2;
  if (y2 && (a2 = bf(y2.call(new t9()))) !== Object.prototype && a2.next && (mf(a2, l2, true, true), wf[l2] = Sf), jf && "values" == o2 && h2 && "values" !== h2.name && (p2 = true, d2 = function() {
    return df(h2, this);
  }), o2)
    if (f2 = { values: s2("values"), keys: i2 ? d2 : s2("keys"), entries: s2("entries") }, u2)
      for (c2 in f2)
        (Of || p2 || !(c2 in v2)) && gf(v2, c2, f2[c2]);
    else
      hf({ target: r2, proto: true, forced: Of || p2 }, f2);
  return u2 && v2[Af] !== d2 && gf(v2, Af, d2, { name: o2 }), wf[r2] = d2, f2;
}, Ef = openapi_parser_z, Pf = Ea, kf = Zo;
Wr.f;
var _f = xf, If = kf.set, Tf = kf.getterFor("Array Iterator");
_f(Array, "Array", function(t9, r2) {
  If(this, { type: "Array Iterator", target: Ef(t9), index: 0, kind: r2 });
}, function() {
  var t9 = Tf(this), r2 = t9.target, e2 = t9.kind, n2 = t9.index++;
  return !r2 || n2 >= r2.length ? (t9.target = void 0, { value: void 0, done: true }) : "keys" == e2 ? { value: n2, done: false } : "values" == e2 ? { value: r2[n2], done: false } : { value: [n2, r2[n2]], done: false };
}, "values"), Pf.Arguments = Pf.Array;
var Rf = { CSSRuleList: 0, CSSStyleDeclaration: 0, CSSValueList: 0, ClientRectList: 0, DOMRectList: 0, DOMStringList: 0, DOMTokenList: 1, DataTransferItemList: 0, FileList: 0, HTMLAllCollection: 0, HTMLCollection: 0, HTMLFormElement: 0, HTMLSelectElement: 0, MediaList: 0, MimeTypeArray: 0, NamedNodeMap: 0, NodeList: 1, PaintRequestList: 0, Plugin: 0, PluginArray: 0, SVGLengthList: 0, SVGNumberList: 0, SVGPathSegList: 0, SVGPointList: 0, SVGStringList: 0, SVGTransformList: 0, SourceBufferList: 0, StyleSheetList: 0, TextTrackCueList: 0, TextTrackList: 0, TouchList: 0 }, Ff = openapi_parser_o, Nf = ln, Mf = ae, Df = Ea, Uf = or("toStringTag");
for (var Lf in Rf) {
  var Cf = Ff[Lf], $f = Cf && Cf.prototype;
  $f && Nf($f) !== Uf && Mf($f, Uf, Lf), Df[Lf] = Df.Array;
}
var Bf = openapi_parser_i, qf = function(t9, r2) {
  var e2 = [][t9];
  return !!e2 && Bf(function() {
    e2.call(null, r2 || function() {
      return 1;
    }, 1);
  });
}, Gf = _i.forEach, Wf = qf("forEach") ? [].forEach : function(t9) {
  return Gf(this, t9, arguments.length > 1 ? arguments[1] : void 0);
};
ge({ target: "Array", proto: true, forced: [].forEach != Wf }, { forEach: Wf });
var zf = na("Array").forEach, Jf = ln, Hf = qt, Vf = tt, Yf = zf, Qf = Array.prototype, Kf = { DOMTokenList: true, NodeList: true };
const Xf = openapi_parser_t(xa.exports = function(t9) {
  var r2 = t9.forEach;
  return t9 === Qf || Vf(Qf, t9) && r2 === Qf.forEach || Hf(Kf, Jf(t9)) ? Yf : r2;
});
var Zf = { exports: {} }, tc = openapi_parser_Z, rc = $n, ec = io, nc = Qr, oc = openapi_parser_b([].concat), ic = tc("Reflect", "ownKeys") || function(t9) {
  var r2 = rc.f(nc(t9)), e2 = ec.f;
  return e2 ? oc(r2, e2(t9)) : r2;
}, uc = ic, ac = openapi_parser_z, fc = openapi_parser_g, cc = Hn;
ge({ target: "Object", stat: true, sham: !openapi_parser_w }, { getOwnPropertyDescriptors: function(t9) {
  for (var r2, e2, n2 = ac(t9), o2 = fc.f, i2 = uc(n2), u2 = {}, a2 = 0; i2.length > a2; )
    void 0 !== (e2 = o2(n2, r2 = i2[a2++])) && cc(u2, r2, e2);
  return u2;
} });
var sc = openapi_parser_V.Object.getOwnPropertyDescriptors;
const lc = openapi_parser_t(Zf.exports = sc);
var pc = { exports: {} }, vc = { exports: {} }, hc = ge, dc = openapi_parser_w, yc = dn.f;
hc({ target: "Object", stat: true, forced: Object.defineProperties !== yc, sham: !dc }, { defineProperties: yc });
var bc = openapi_parser_V.Object, mc = vc.exports = function(t9, r2) {
  return bc.defineProperties(t9, r2);
};
bc.defineProperties.sham && (mc.sham = true);
var gc = vc.exports;
const wc = openapi_parser_t(pc.exports = gc);
var jc = { exports: {} }, Oc = { exports: {} }, Ac = ge, Sc = openapi_parser_w, xc = Wr.f;
Ac({ target: "Object", stat: true, forced: Object.defineProperty !== xc, sham: !Sc }, { defineProperty: xc });
var Ec = openapi_parser_V.Object, Pc = Oc.exports = function(t9, r2, e2) {
  return Ec.defineProperty(t9, r2, e2);
};
Ec.defineProperty.sham && (Pc.sham = true);
var kc = Oc.exports;
const _c = openapi_parser_t(jc.exports = kc);
function Ic(t9, r2, e2) {
  return r2 in t9 ? _c(t9, r2, { value: e2, enumerable: true, configurable: true, writable: true }) : t9[r2] = e2, t9;
}
function Tc(t9, r2) {
  var e2 = Ke(t9);
  if (Yu) {
    var n2 = Yu(t9);
    r2 && (n2 = ca(n2).call(n2, function(r3) {
      return ja(t9, r3).enumerable;
    })), e2.push.apply(e2, n2);
  }
  return e2;
}
function Rc(t9) {
  for (var r2 = 1; r2 < arguments.length; r2++) {
    var e2, n2, o2 = null != arguments[r2] ? arguments[r2] : {};
    r2 % 2 ? Xf(e2 = Tc(Object(o2), true)).call(e2, function(r3) {
      Ic(t9, r3, o2[r3]);
    }) : lc ? wc(t9, lc(o2)) : Xf(n2 = Tc(Object(o2))).call(n2, function(r3) {
      _c(t9, r3, ja(o2, r3));
    });
  }
  return t9;
}
var Fc = { exports: {} }, Nc = openapi_parser_w, Mc = openapi_parser_b, Dc = openapi_parser_A, Uc = openapi_parser_i, Lc = He, Cc = io, $c = openapi_parser_S, Bc = Ct, qc = openapi_parser_$, Gc = Object.assign, Wc = Object.defineProperty, zc = Mc([].concat), Jc = !Gc || Uc(function() {
  if (Nc && 1 !== Gc({ b: 1 }, Gc(Wc({}, "a", { enumerable: true, get: function() {
    Wc(this, "b", { value: 3, enumerable: false });
  } }), { b: 2 })).b)
    return true;
  var t9 = {}, r2 = {}, e2 = Symbol(), n2 = "abcdefghijklmnopqrst";
  return t9[e2] = 7, n2.split("").forEach(function(t10) {
    r2[t10] = t10;
  }), 7 != Gc({}, t9)[e2] || Lc(Gc({}, r2)).join("") != n2;
}) ? function(t9, r2) {
  for (var e2 = Bc(t9), n2 = arguments.length, o2 = 1, i2 = Cc.f, u2 = $c.f; n2 > o2; )
    for (var a2, f2 = qc(arguments[o2++]), c2 = i2 ? zc(Lc(f2), i2(f2)) : Lc(f2), s2 = c2.length, l2 = 0; s2 > l2; )
      a2 = c2[l2++], Nc && !Dc(u2, f2, a2) || (e2[a2] = f2[a2]);
  return e2;
} : Gc, Hc = Jc;
ge({ target: "Object", stat: true, forced: Object.assign !== Hc }, { assign: Hc });
var Vc = openapi_parser_V.Object.assign;
const Yc = openapi_parser_t(Fc.exports = Vc);
var Qc = { exports: {} }, Kc = openapi_parser_H, Xc = openapi_parser_N, Zc = or("match"), ts = function(t9) {
  var r2;
  return Kc(t9) && (void 0 !== (r2 = t9[Zc]) ? !!r2 : "RegExp" == Xc(t9));
}, rs = openapi_parser_o.TypeError, es = function(t9) {
  if (ts(t9))
    throw rs("The method doesn't accept regular expressions");
  return t9;
}, ns = or("match"), os = function(t9) {
  var r2 = /./;
  try {
    "/./"[t9](r2);
  } catch (e2) {
    try {
      return r2[ns] = false, "/./"[t9](r2);
    } catch (t10) {
    }
  }
  return false;
}, is = ge, us = openapi_parser_b, as = _e, fs = hn, cs = es, ss = q, ls = os, ps = us("".startsWith), vs = us("".slice), hs = Math.min;
is({ target: "String", proto: true, forced: !ls("startsWith") }, { startsWith: function(t9) {
  var r2 = fs(ss(this));
  cs(t9);
  var e2 = as(hs(arguments.length > 1 ? arguments[1] : void 0, r2.length)), n2 = fs(t9);
  return ps ? ps(r2, n2, e2) : vs(r2, e2, e2 + n2.length) === n2;
} });
var ds = na("String").startsWith, ys = tt, bs = ds, ms = String.prototype;
const gs = openapi_parser_t(Qc.exports = function(t9) {
  var r2 = t9.startsWith;
  return "string" == typeof t9 || t9 === ms || ys(ms, t9) && r2 === ms.startsWith ? bs : r2;
});
var ws = {}, js = { exports: {} };
/*! https://mths.be/punycode v1.3.2 by @mathias */
!function(t9, r2) {
  !function(e2) {
    var n2 = r2 && !r2.nodeType && r2, o2 = t9 && !t9.nodeType && t9, i2 = "object" == typeof global && global;
    i2.global !== i2 && i2.window !== i2 && i2.self !== i2 || (e2 = i2);
    var u2, a2, f2 = 2147483647, c2 = 36, s2 = /^xn--/, l2 = /[^\x20-\x7E]/, p2 = /[\x2E\u3002\uFF0E\uFF61]/g, v2 = { overflow: "Overflow: input needs wider integers to process", "not-basic": "Illegal input >= 0x80 (not a basic code point)", "invalid-input": "Invalid input" }, h2 = Math.floor, d2 = String.fromCharCode;
    function y2(t10) {
      throw RangeError(v2[t10]);
    }
    function b2(t10, r3) {
      for (var e3 = t10.length, n3 = []; e3--; )
        n3[e3] = r3(t10[e3]);
      return n3;
    }
    function m2(t10, r3) {
      var e3 = t10.split("@"), n3 = "";
      return e3.length > 1 && (n3 = e3[0] + "@", t10 = e3[1]), n3 + b2((t10 = t10.replace(p2, ".")).split("."), r3).join(".");
    }
    function g2(t10) {
      for (var r3, e3, n3 = [], o3 = 0, i3 = t10.length; o3 < i3; )
        (r3 = t10.charCodeAt(o3++)) >= 55296 && r3 <= 56319 && o3 < i3 ? 56320 == (64512 & (e3 = t10.charCodeAt(o3++))) ? n3.push(((1023 & r3) << 10) + (1023 & e3) + 65536) : (n3.push(r3), o3--) : n3.push(r3);
      return n3;
    }
    function w2(t10) {
      return b2(t10, function(t11) {
        var r3 = "";
        return t11 > 65535 && (r3 += d2((t11 -= 65536) >>> 10 & 1023 | 55296), t11 = 56320 | 1023 & t11), r3 += d2(t11);
      }).join("");
    }
    function j2(t10, r3) {
      return t10 + 22 + 75 * (t10 < 26) - ((0 != r3) << 5);
    }
    function O2(t10, r3, e3) {
      var n3 = 0;
      for (t10 = e3 ? h2(t10 / 700) : t10 >> 1, t10 += h2(t10 / r3); t10 > 455; n3 += c2)
        t10 = h2(t10 / 35);
      return h2(n3 + 36 * t10 / (t10 + 38));
    }
    function A2(t10) {
      var r3, e3, n3, o3, i3, u3, a3, s3, l3, p3, v3, d3 = [], b3 = t10.length, m3 = 0, g3 = 128, j3 = 72;
      for ((e3 = t10.lastIndexOf("-")) < 0 && (e3 = 0), n3 = 0; n3 < e3; ++n3)
        t10.charCodeAt(n3) >= 128 && y2("not-basic"), d3.push(t10.charCodeAt(n3));
      for (o3 = e3 > 0 ? e3 + 1 : 0; o3 < b3; ) {
        for (i3 = m3, u3 = 1, a3 = c2; o3 >= b3 && y2("invalid-input"), ((s3 = (v3 = t10.charCodeAt(o3++)) - 48 < 10 ? v3 - 22 : v3 - 65 < 26 ? v3 - 65 : v3 - 97 < 26 ? v3 - 97 : c2) >= c2 || s3 > h2((f2 - m3) / u3)) && y2("overflow"), m3 += s3 * u3, !(s3 < (l3 = a3 <= j3 ? 1 : a3 >= j3 + 26 ? 26 : a3 - j3)); a3 += c2)
          u3 > h2(f2 / (p3 = c2 - l3)) && y2("overflow"), u3 *= p3;
        j3 = O2(m3 - i3, r3 = d3.length + 1, 0 == i3), h2(m3 / r3) > f2 - g3 && y2("overflow"), g3 += h2(m3 / r3), m3 %= r3, d3.splice(m3++, 0, g3);
      }
      return w2(d3);
    }
    function S2(t10) {
      var r3, e3, n3, o3, i3, u3, a3, s3, l3, p3, v3, b3, m3, w3, A3, S3 = [];
      for (b3 = (t10 = g2(t10)).length, r3 = 128, e3 = 0, i3 = 72, u3 = 0; u3 < b3; ++u3)
        (v3 = t10[u3]) < 128 && S3.push(d2(v3));
      for (n3 = o3 = S3.length, o3 && S3.push("-"); n3 < b3; ) {
        for (a3 = f2, u3 = 0; u3 < b3; ++u3)
          (v3 = t10[u3]) >= r3 && v3 < a3 && (a3 = v3);
        for (a3 - r3 > h2((f2 - e3) / (m3 = n3 + 1)) && y2("overflow"), e3 += (a3 - r3) * m3, r3 = a3, u3 = 0; u3 < b3; ++u3)
          if ((v3 = t10[u3]) < r3 && ++e3 > f2 && y2("overflow"), v3 == r3) {
            for (s3 = e3, l3 = c2; !(s3 < (p3 = l3 <= i3 ? 1 : l3 >= i3 + 26 ? 26 : l3 - i3)); l3 += c2)
              A3 = s3 - p3, w3 = c2 - p3, S3.push(d2(j2(p3 + A3 % w3, 0))), s3 = h2(A3 / w3);
            S3.push(d2(j2(s3, 0))), i3 = O2(e3, m3, n3 == o3), e3 = 0, ++n3;
          }
        ++e3, ++r3;
      }
      return S3.join("");
    }
    if (u2 = { version: "1.3.2", ucs2: { decode: g2, encode: w2 }, decode: A2, encode: S2, toASCII: function(t10) {
      return m2(t10, function(t11) {
        return l2.test(t11) ? "xn--" + S2(t11) : t11;
      });
    }, toUnicode: function(t10) {
      return m2(t10, function(t11) {
        return s2.test(t11) ? A2(t11.slice(4).toLowerCase()) : t11;
      });
    } }, n2 && o2)
      if (t9.exports == n2)
        o2.exports = u2;
      else
        for (a2 in u2)
          u2.hasOwnProperty(a2) && (n2[a2] = u2[a2]);
    else
      e2.punycode = u2;
  }(this);
}(js, js.exports);
var Os = {};
function As(t9, r2) {
  return Object.prototype.hasOwnProperty.call(t9, r2);
}
var Ss = function(t9) {
  switch (typeof t9) {
    case "string":
      return t9;
    case "boolean":
      return t9 ? "true" : "false";
    case "number":
      return isFinite(t9) ? t9 : "";
    default:
      return "";
  }
};
Os.decode = Os.parse = function(t9, r2, e2, n2) {
  r2 = r2 || "&", e2 = e2 || "=";
  var o2 = {};
  if ("string" != typeof t9 || 0 === t9.length)
    return o2;
  var i2 = /\+/g;
  t9 = t9.split(r2);
  var u2 = 1e3;
  n2 && "number" == typeof n2.maxKeys && (u2 = n2.maxKeys);
  var a2 = t9.length;
  u2 > 0 && a2 > u2 && (a2 = u2);
  for (var f2 = 0; f2 < a2; ++f2) {
    var c2, s2, l2, p2, v2 = t9[f2].replace(i2, "%20"), h2 = v2.indexOf(e2);
    h2 >= 0 ? (c2 = v2.substr(0, h2), s2 = v2.substr(h2 + 1)) : (c2 = v2, s2 = ""), l2 = decodeURIComponent(c2), p2 = decodeURIComponent(s2), As(o2, l2) ? Array.isArray(o2[l2]) ? o2[l2].push(p2) : o2[l2] = [o2[l2], p2] : o2[l2] = p2;
  }
  return o2;
}, Os.encode = Os.stringify = function(t9, r2, e2, n2) {
  return r2 = r2 || "&", e2 = e2 || "=", null === t9 && (t9 = void 0), "object" == typeof t9 ? Object.keys(t9).map(function(n3) {
    var o2 = encodeURIComponent(Ss(n3)) + e2;
    return Array.isArray(t9[n3]) ? t9[n3].map(function(t10) {
      return o2 + encodeURIComponent(Ss(t10));
    }).join(r2) : o2 + encodeURIComponent(Ss(t9[n3]));
  }).join(r2) : n2 ? encodeURIComponent(Ss(n2)) + e2 + encodeURIComponent(Ss(t9)) : "";
};
var xs = js.exports, Es = { isString: function(t9) {
  return "string" == typeof t9;
}, isObject: function(t9) {
  return "object" == typeof t9 && null !== t9;
}, isNull: function(t9) {
  return null === t9;
}, isNullOrUndefined: function(t9) {
  return null == t9;
} };
function Ps() {
  this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null;
}
ws.parse = Bs, ws.resolve = function(t9, r2) {
  return Bs(t9, false, true).resolve(r2);
}, ws.resolveObject = function(t9, r2) {
  return t9 ? Bs(t9, false, true).resolveObject(r2) : r2;
}, ws.format = function(t9) {
  Es.isString(t9) && (t9 = Bs(t9));
  return t9 instanceof Ps ? t9.format() : Ps.prototype.format.call(t9);
}, ws.Url = Ps;
var ks = /^([a-z0-9.+-]+:)/i, _s = /:[0-9]*$/, Is = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, Ts = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "	"]), Rs = ["'"].concat(Ts), Fs = ["%", "/", "?", ";", "#"].concat(Rs), Ns = ["/", "?", "#"], Ms = /^[+a-z0-9A-Z_-]{0,63}$/, Ds = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, Us = { javascript: true, "javascript:": true }, Ls = { javascript: true, "javascript:": true }, Cs = { http: true, https: true, ftp: true, gopher: true, file: true, "http:": true, "https:": true, "ftp:": true, "gopher:": true, "file:": true }, $s = Os;
function Bs(t9, r2, e2) {
  if (t9 && Es.isObject(t9) && t9 instanceof Ps)
    return t9;
  var n2 = new Ps();
  return n2.parse(t9, r2, e2), n2;
}
Ps.prototype.parse = function(t9, r2, e2) {
  if (!Es.isString(t9))
    throw new TypeError("Parameter 'url' must be a string, not " + typeof t9);
  var n2 = t9.indexOf("?"), o2 = -1 !== n2 && n2 < t9.indexOf("#") ? "?" : "#", i2 = t9.split(o2);
  i2[0] = i2[0].replace(/\\/g, "/");
  var u2 = t9 = i2.join(o2);
  if (u2 = u2.trim(), !e2 && 1 === t9.split("#").length) {
    var a2 = Is.exec(u2);
    if (a2)
      return this.path = u2, this.href = u2, this.pathname = a2[1], a2[2] ? (this.search = a2[2], this.query = r2 ? $s.parse(this.search.substr(1)) : this.search.substr(1)) : r2 && (this.search = "", this.query = {}), this;
  }
  var f2 = ks.exec(u2);
  if (f2) {
    var c2 = (f2 = f2[0]).toLowerCase();
    this.protocol = c2, u2 = u2.substr(f2.length);
  }
  if (e2 || f2 || u2.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var s2 = "//" === u2.substr(0, 2);
    !s2 || f2 && Ls[f2] || (u2 = u2.substr(2), this.slashes = true);
  }
  if (!Ls[f2] && (s2 || f2 && !Cs[f2])) {
    for (var l2, p2, v2 = -1, h2 = 0; h2 < Ns.length; h2++) {
      -1 !== (d2 = u2.indexOf(Ns[h2])) && (-1 === v2 || d2 < v2) && (v2 = d2);
    }
    -1 !== (p2 = -1 === v2 ? u2.lastIndexOf("@") : u2.lastIndexOf("@", v2)) && (l2 = u2.slice(0, p2), u2 = u2.slice(p2 + 1), this.auth = decodeURIComponent(l2)), v2 = -1;
    for (h2 = 0; h2 < Fs.length; h2++) {
      var d2;
      -1 !== (d2 = u2.indexOf(Fs[h2])) && (-1 === v2 || d2 < v2) && (v2 = d2);
    }
    -1 === v2 && (v2 = u2.length), this.host = u2.slice(0, v2), u2 = u2.slice(v2), this.parseHost(), this.hostname = this.hostname || "";
    var y2 = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
    if (!y2)
      for (var b2 = this.hostname.split(/\./), m2 = (h2 = 0, b2.length); h2 < m2; h2++) {
        var g2 = b2[h2];
        if (g2 && !g2.match(Ms)) {
          for (var w2 = "", j2 = 0, O2 = g2.length; j2 < O2; j2++)
            g2.charCodeAt(j2) > 127 ? w2 += "x" : w2 += g2[j2];
          if (!w2.match(Ms)) {
            var A2 = b2.slice(0, h2), S2 = b2.slice(h2 + 1), x2 = g2.match(Ds);
            x2 && (A2.push(x2[1]), S2.unshift(x2[2])), S2.length && (u2 = "/" + S2.join(".") + u2), this.hostname = A2.join(".");
            break;
          }
        }
      }
    this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), y2 || (this.hostname = xs.toASCII(this.hostname));
    var E2 = this.port ? ":" + this.port : "", P2 = this.hostname || "";
    this.host = P2 + E2, this.href += this.host, y2 && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== u2[0] && (u2 = "/" + u2));
  }
  if (!Us[c2])
    for (h2 = 0, m2 = Rs.length; h2 < m2; h2++) {
      var k2 = Rs[h2];
      if (-1 !== u2.indexOf(k2)) {
        var _2 = encodeURIComponent(k2);
        _2 === k2 && (_2 = escape(k2)), u2 = u2.split(k2).join(_2);
      }
    }
  var I2 = u2.indexOf("#");
  -1 !== I2 && (this.hash = u2.substr(I2), u2 = u2.slice(0, I2));
  var T2 = u2.indexOf("?");
  if (-1 !== T2 ? (this.search = u2.substr(T2), this.query = u2.substr(T2 + 1), r2 && (this.query = $s.parse(this.query)), u2 = u2.slice(0, T2)) : r2 && (this.search = "", this.query = {}), u2 && (this.pathname = u2), Cs[c2] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
    E2 = this.pathname || "";
    var R2 = this.search || "";
    this.path = E2 + R2;
  }
  return this.href = this.format(), this;
}, Ps.prototype.format = function() {
  var t9 = this.auth || "";
  t9 && (t9 = (t9 = encodeURIComponent(t9)).replace(/%3A/i, ":"), t9 += "@");
  var r2 = this.protocol || "", e2 = this.pathname || "", n2 = this.hash || "", o2 = false, i2 = "";
  this.host ? o2 = t9 + this.host : this.hostname && (o2 = t9 + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (o2 += ":" + this.port)), this.query && Es.isObject(this.query) && Object.keys(this.query).length && (i2 = $s.stringify(this.query));
  var u2 = this.search || i2 && "?" + i2 || "";
  return r2 && ":" !== r2.substr(-1) && (r2 += ":"), this.slashes || (!r2 || Cs[r2]) && false !== o2 ? (o2 = "//" + (o2 || ""), e2 && "/" !== e2.charAt(0) && (e2 = "/" + e2)) : o2 || (o2 = ""), n2 && "#" !== n2.charAt(0) && (n2 = "#" + n2), u2 && "?" !== u2.charAt(0) && (u2 = "?" + u2), e2 = e2.replace(/[?#]/g, function(t10) {
    return encodeURIComponent(t10);
  }), r2 + o2 + e2 + (u2 = u2.replace("#", "%23")) + n2;
}, Ps.prototype.resolve = function(t9) {
  return this.resolveObject(Bs(t9, false, true)).format();
}, Ps.prototype.resolveObject = function(t9) {
  if (Es.isString(t9)) {
    var r2 = new Ps();
    r2.parse(t9, false, true), t9 = r2;
  }
  for (var e2 = new Ps(), n2 = Object.keys(this), o2 = 0; o2 < n2.length; o2++) {
    var i2 = n2[o2];
    e2[i2] = this[i2];
  }
  if (e2.hash = t9.hash, "" === t9.href)
    return e2.href = e2.format(), e2;
  if (t9.slashes && !t9.protocol) {
    for (var u2 = Object.keys(t9), a2 = 0; a2 < u2.length; a2++) {
      var f2 = u2[a2];
      "protocol" !== f2 && (e2[f2] = t9[f2]);
    }
    return Cs[e2.protocol] && e2.hostname && !e2.pathname && (e2.path = e2.pathname = "/"), e2.href = e2.format(), e2;
  }
  if (t9.protocol && t9.protocol !== e2.protocol) {
    if (!Cs[t9.protocol]) {
      for (var c2 = Object.keys(t9), s2 = 0; s2 < c2.length; s2++) {
        var l2 = c2[s2];
        e2[l2] = t9[l2];
      }
      return e2.href = e2.format(), e2;
    }
    if (e2.protocol = t9.protocol, t9.host || Ls[t9.protocol])
      e2.pathname = t9.pathname;
    else {
      for (var p2 = (t9.pathname || "").split("/"); p2.length && !(t9.host = p2.shift()); )
        ;
      t9.host || (t9.host = ""), t9.hostname || (t9.hostname = ""), "" !== p2[0] && p2.unshift(""), p2.length < 2 && p2.unshift(""), e2.pathname = p2.join("/");
    }
    if (e2.search = t9.search, e2.query = t9.query, e2.host = t9.host || "", e2.auth = t9.auth, e2.hostname = t9.hostname || t9.host, e2.port = t9.port, e2.pathname || e2.search) {
      var v2 = e2.pathname || "", h2 = e2.search || "";
      e2.path = v2 + h2;
    }
    return e2.slashes = e2.slashes || t9.slashes, e2.href = e2.format(), e2;
  }
  var d2 = e2.pathname && "/" === e2.pathname.charAt(0), y2 = t9.host || t9.pathname && "/" === t9.pathname.charAt(0), b2 = y2 || d2 || e2.host && t9.pathname, m2 = b2, g2 = e2.pathname && e2.pathname.split("/") || [], w2 = (p2 = t9.pathname && t9.pathname.split("/") || [], e2.protocol && !Cs[e2.protocol]);
  if (w2 && (e2.hostname = "", e2.port = null, e2.host && ("" === g2[0] ? g2[0] = e2.host : g2.unshift(e2.host)), e2.host = "", t9.protocol && (t9.hostname = null, t9.port = null, t9.host && ("" === p2[0] ? p2[0] = t9.host : p2.unshift(t9.host)), t9.host = null), b2 = b2 && ("" === p2[0] || "" === g2[0])), y2)
    e2.host = t9.host || "" === t9.host ? t9.host : e2.host, e2.hostname = t9.hostname || "" === t9.hostname ? t9.hostname : e2.hostname, e2.search = t9.search, e2.query = t9.query, g2 = p2;
  else if (p2.length)
    g2 || (g2 = []), g2.pop(), g2 = g2.concat(p2), e2.search = t9.search, e2.query = t9.query;
  else if (!Es.isNullOrUndefined(t9.search)) {
    if (w2)
      e2.hostname = e2.host = g2.shift(), (x2 = !!(e2.host && e2.host.indexOf("@") > 0) && e2.host.split("@")) && (e2.auth = x2.shift(), e2.host = e2.hostname = x2.shift());
    return e2.search = t9.search, e2.query = t9.query, Es.isNull(e2.pathname) && Es.isNull(e2.search) || (e2.path = (e2.pathname ? e2.pathname : "") + (e2.search ? e2.search : "")), e2.href = e2.format(), e2;
  }
  if (!g2.length)
    return e2.pathname = null, e2.search ? e2.path = "/" + e2.search : e2.path = null, e2.href = e2.format(), e2;
  for (var j2 = g2.slice(-1)[0], O2 = (e2.host || t9.host || g2.length > 1) && ("." === j2 || ".." === j2) || "" === j2, A2 = 0, S2 = g2.length; S2 >= 0; S2--)
    "." === (j2 = g2[S2]) ? g2.splice(S2, 1) : ".." === j2 ? (g2.splice(S2, 1), A2++) : A2 && (g2.splice(S2, 1), A2--);
  if (!b2 && !m2)
    for (; A2--; A2)
      g2.unshift("..");
  !b2 || "" === g2[0] || g2[0] && "/" === g2[0].charAt(0) || g2.unshift(""), O2 && "/" !== g2.join("/").substr(-1) && g2.push("");
  var x2, E2 = "" === g2[0] || g2[0] && "/" === g2[0].charAt(0);
  w2 && (e2.hostname = e2.host = E2 ? "" : g2.length ? g2.shift() : "", (x2 = !!(e2.host && e2.host.indexOf("@") > 0) && e2.host.split("@")) && (e2.auth = x2.shift(), e2.host = e2.hostname = x2.shift()));
  return (b2 = b2 || e2.host && g2.length) && !E2 && g2.unshift(""), g2.length ? e2.pathname = g2.join("/") : (e2.pathname = null, e2.path = null), Es.isNull(e2.pathname) && Es.isNull(e2.search) || (e2.path = (e2.pathname ? e2.pathname : "") + (e2.search ? e2.search : "")), e2.auth = t9.auth || e2.auth, e2.slashes = e2.slashes || t9.slashes, e2.href = e2.format(), e2;
}, Ps.prototype.parseHost = function() {
  var t9 = this.host, r2 = _s.exec(t9);
  r2 && (":" !== (r2 = r2[0]) && (this.port = r2.substr(1)), t9 = t9.substr(0, t9.length - r2.length)), t9 && (this.hostname = t9);
};
var qs = { exports: {} }, Gs = ge, Ws = openapi_parser_o, zs = openapi_parser_i, Js = tn, Hs = openapi_parser_H, Vs = Ct, Ys = Te, Qs = Hn, Ks = ji, Xs = ta, Zs = ft, tl = or("isConcatSpreadable"), rl = Ws.TypeError, el = Zs >= 51 || !zs(function() {
  var t9 = [];
  return t9[tl] = false, t9.concat()[0] !== t9;
}), nl = Xs("concat"), ol = function(t9) {
  if (!Hs(t9))
    return false;
  var r2 = t9[tl];
  return void 0 !== r2 ? !!r2 : Js(t9);
};
Gs({ target: "Array", proto: true, forced: !el || !nl }, { concat: function(t9) {
  var r2, e2, n2, o2, i2, u2 = Vs(this), a2 = Ks(u2, 0), f2 = 0;
  for (r2 = -1, n2 = arguments.length; r2 < n2; r2++)
    if (ol(i2 = -1 === r2 ? u2 : arguments[r2])) {
      if (f2 + (o2 = Ys(i2)) > 9007199254740991)
        throw rl("Maximum allowed index exceeded");
      for (e2 = 0; e2 < o2; e2++, f2++)
        e2 in i2 && Qs(a2, f2, i2[e2]);
    } else {
      if (f2 >= 9007199254740991)
        throw rl("Maximum allowed index exceeded");
      Qs(a2, f2++, i2);
    }
  return a2.length = f2, a2;
} }), yo("asyncIterator"), yo("hasInstance"), yo("isConcatSpreadable"), yo("iterator"), yo("match"), yo("matchAll"), yo("replace"), yo("search"), yo("species"), yo("split"), yo("toPrimitive"), yo("toStringTag"), yo("unscopables"), xo(openapi_parser_o.JSON, "JSON", true);
var il = openapi_parser_V.Symbol;
yo("asyncDispose"), yo("dispose"), yo("matcher"), yo("metadata"), yo("observable"), yo("patternMatch"), yo("replaceAll");
const ul = openapi_parser_t(qs.exports = il);
var al = { exports: {} }, fl = openapi_parser_b, cl = Oe, sl = hn, ll = q, pl = fl("".charAt), vl = fl("".charCodeAt), hl = fl("".slice), dl = function(t9) {
  return function(r2, e2) {
    var n2, o2, i2 = sl(ll(r2)), u2 = cl(e2), a2 = i2.length;
    return u2 < 0 || u2 >= a2 ? t9 ? "" : void 0 : (n2 = vl(i2, u2)) < 55296 || n2 > 56319 || u2 + 1 === a2 || (o2 = vl(i2, u2 + 1)) < 56320 || o2 > 57343 ? t9 ? pl(i2, u2) : n2 : t9 ? hl(i2, u2, u2 + 2) : o2 - 56320 + (n2 - 55296 << 10) + 65536;
  };
}, yl = { codeAt: dl(false), charAt: dl(true) }.charAt, bl = hn, ml = Zo, gl = xf, wl = ml.set, jl = ml.getterFor("String Iterator");
gl(String, "String", function(t9) {
  wl(this, { type: "String Iterator", string: bl(t9), index: 0 });
}, function() {
  var t9, r2 = jl(this), e2 = r2.string, n2 = r2.index;
  return n2 >= e2.length ? { value: void 0, done: true } : (t9 = yl(e2, n2), r2.index += t9.length, { value: t9, done: false });
});
var Ol = ln, Al = Et, Sl = Ea, xl = or("iterator"), El = function(t9) {
  if (null != t9)
    return Al(t9, xl) || Al(t9, "@@iterator") || Sl[Ol(t9)];
};
const Pl = openapi_parser_t(al.exports = El);
var kl = { exports: {} };
ge({ target: "Array", stat: true }, { isArray: tn });
var _l = openapi_parser_V.Array.isArray;
const Il = openapi_parser_t(kl.exports = _l);
var Tl = { exports: {} }, Rl = ge, Fl = openapi_parser_o, Nl = tn, Ml = vi, Dl = openapi_parser_H, Ul = Ee, Ll = Te, Cl = openapi_parser_z, $l = Hn, Bl = or, ql = uo, Gl = ta("slice"), Wl = Bl("species"), zl = Fl.Array, Jl = Math.max;
Rl({ target: "Array", proto: true, forced: !Gl }, { slice: function(t9, r2) {
  var e2, n2, o2, i2 = Cl(this), u2 = Ll(i2), a2 = Ul(t9, u2), f2 = Ul(void 0 === r2 ? u2 : r2, u2);
  if (Nl(i2) && (e2 = i2.constructor, (Ml(e2) && (e2 === zl || Nl(e2.prototype)) || Dl(e2) && null === (e2 = e2[Wl])) && (e2 = void 0), e2 === zl || void 0 === e2))
    return ql(i2, a2, f2);
  for (n2 = new (void 0 === e2 ? zl : e2)(Jl(f2 - a2, 0)), o2 = 0; a2 < f2; a2++, o2++)
    a2 in i2 && $l(n2, o2, i2[a2]);
  return n2.length = o2, n2;
} });
var Hl = na("Array").slice, Vl = tt, Yl = Hl, Ql = Array.prototype, Kl = function(t9) {
  var r2 = t9.slice;
  return t9 === Ql || Vl(Ql, t9) && r2 === Ql.slice ? Yl : r2;
};
const Xl = openapi_parser_t(Tl.exports = Kl);
var Zl = { exports: {} }, tp = openapi_parser_A, rp = Qr, ep = Et, np = function(t9, r2, e2) {
  var n2, o2;
  rp(t9);
  try {
    if (!(n2 = ep(t9, "return"))) {
      if ("throw" === r2)
        throw e2;
      return e2;
    }
    n2 = tp(n2, t9);
  } catch (t10) {
    o2 = true, n2 = t10;
  }
  if ("throw" === r2)
    throw e2;
  if (o2)
    throw n2;
  return rp(n2), e2;
}, op = Qr, ip = np, up = Ea, ap = or("iterator"), fp = Array.prototype, cp = function(t9) {
  return void 0 !== t9 && (up.Array === t9 || fp[ap] === t9);
}, sp = openapi_parser_A, lp = St, pp = Qr, vp = wt, hp = El, dp = openapi_parser_o.TypeError, yp = function(t9, r2) {
  var e2 = arguments.length < 2 ? hp(t9) : r2;
  if (lp(e2))
    return pp(sp(e2, t9));
  throw dp(vp(t9) + " is not iterable");
}, bp = Gr, mp = openapi_parser_A, gp = Ct, wp = function(t9, r2, e2, n2) {
  try {
    return n2 ? r2(op(e2)[0], e2[1]) : r2(e2);
  } catch (r3) {
    ip(t9, "throw", r3);
  }
}, jp = cp, Op = vi, Ap = Te, Sp = Hn, xp = yp, Ep = El, Pp = openapi_parser_o.Array, kp = or("iterator"), _p = false;
try {
  var Ip = 0, Tp = { next: function() {
    return { done: !!Ip++ };
  }, return: function() {
    _p = true;
  } };
  Tp[kp] = function() {
    return this;
  }, Array.from(Tp, function() {
    throw 2;
  });
} catch (t9) {
}
var Rp = function(t9, r2) {
  if (!r2 && !_p)
    return false;
  var e2 = false;
  try {
    var n2 = {};
    n2[kp] = function() {
      return { next: function() {
        return { done: e2 = true };
      } };
    }, t9(n2);
  } catch (t10) {
  }
  return e2;
}, Fp = function(t9) {
  var r2 = gp(t9), e2 = Op(this), n2 = arguments.length, o2 = n2 > 1 ? arguments[1] : void 0, i2 = void 0 !== o2;
  i2 && (o2 = bp(o2, n2 > 2 ? arguments[2] : void 0));
  var u2, a2, f2, c2, s2, l2, p2 = Ep(r2), v2 = 0;
  if (!p2 || this == Pp && jp(p2))
    for (u2 = Ap(r2), a2 = e2 ? new this(u2) : Pp(u2); u2 > v2; v2++)
      l2 = i2 ? o2(r2[v2], v2) : r2[v2], Sp(a2, v2, l2);
  else
    for (s2 = (c2 = xp(r2, p2)).next, a2 = e2 ? new this() : []; !(f2 = mp(s2, c2)).done; v2++)
      l2 = i2 ? wp(c2, o2, [f2.value, v2], true) : f2.value, Sp(a2, v2, l2);
  return a2.length = v2, a2;
};
ge({ target: "Array", stat: true, forced: !Rp(function(t9) {
  Array.from(t9);
}) }, { from: Fp });
var Np = openapi_parser_V.Array.from;
const Mp = openapi_parser_t(Zl.exports = Np);
function Dp(t9, r2) {
  (null == r2 || r2 > t9.length) && (r2 = t9.length);
  for (var e2 = 0, n2 = new Array(r2); e2 < r2; e2++)
    n2[e2] = t9[e2];
  return n2;
}
function Up(t9, r2) {
  var e2;
  if (t9) {
    if ("string" == typeof t9)
      return Dp(t9, r2);
    var n2 = Xl(e2 = Object.prototype.toString.call(t9)).call(e2, 8, -1);
    return "Object" === n2 && t9.constructor && (n2 = t9.constructor.name), "Map" === n2 || "Set" === n2 ? Mp(t9) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? Dp(t9, r2) : void 0;
  }
}
function Lp(t9, r2) {
  var e2 = void 0 !== ul && Pl(t9) || t9["@@iterator"];
  if (!e2) {
    if (Il(t9) || (e2 = Up(t9)) || r2 && t9 && "number" == typeof t9.length) {
      e2 && (t9 = e2);
      var n2 = 0, o2 = function() {
      };
      return { s: o2, n: function() {
        return n2 >= t9.length ? { done: true } : { done: false, value: t9[n2++] };
      }, e: function(t10) {
        throw t10;
      }, f: o2 };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var i2, u2 = true, a2 = false;
  return { s: function() {
    e2 = e2.call(t9);
  }, n: function() {
    var t10 = e2.next();
    return u2 = t10.done, t10;
  }, e: function(t10) {
    a2 = true, i2 = t10;
  }, f: function() {
    try {
      u2 || null == e2.return || e2.return();
    } finally {
      if (a2)
        throw i2;
    }
  } };
}
var Cp = { exports: {} }, $p = co.f("iterator");
const Bp = openapi_parser_t(Cp.exports = $p);
function qp(t9) {
  return qp = "function" == typeof ul && "symbol" == typeof Bp ? function(t10) {
    return typeof t10;
  } : function(t10) {
    return t10 && "function" == typeof ul && t10.constructor === ul && t10 !== ul.prototype ? "symbol" : typeof t10;
  }, qp(t9);
}
function Gp(t9, r2) {
  return function(t10) {
    if (Il(t10))
      return t10;
  }(t9) || function(t10, r3) {
    var e2 = null == t10 ? null : void 0 !== ul && Pl(t10) || t10["@@iterator"];
    if (null != e2) {
      var n2, o2, i2 = [], u2 = true, a2 = false;
      try {
        for (e2 = e2.call(t10); !(u2 = (n2 = e2.next()).done) && (i2.push(n2.value), !r3 || i2.length !== r3); u2 = true)
          ;
      } catch (t11) {
        a2 = true, o2 = t11;
      } finally {
        try {
          u2 || null == e2.return || e2.return();
        } finally {
          if (a2)
            throw o2;
        }
      }
      return i2;
    }
  }(t9, r2) || Up(t9, r2) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
var Wp = { exports: {} }, zp = qt, Jp = ic, Hp = openapi_parser_g, Vp = Wr, Yp = openapi_parser_b("".replace), Qp = String(Error("zxcasd").stack), Kp = /\n\s*at [^:]*:[^\n]*/, Xp = Kp.test(Qp), Zp = openapi_parser_H, tv = ae, rv = Gr, ev = openapi_parser_A, nv = Qr, ov = wt, iv = cp, uv = Te, av = tt, fv = yp, cv = El, sv = np, lv = openapi_parser_o.TypeError, pv = function(t9, r2) {
  this.stopped = t9, this.result = r2;
}, vv = pv.prototype, hv = function(t9, r2, e2) {
  var n2, o2, i2, u2, a2, f2, c2, s2 = e2 && e2.that, l2 = !(!e2 || !e2.AS_ENTRIES), p2 = !(!e2 || !e2.IS_ITERATOR), v2 = !(!e2 || !e2.INTERRUPTED), h2 = rv(r2, s2), d2 = function(t10) {
    return n2 && sv(n2, "normal", t10), new pv(true, t10);
  }, y2 = function(t10) {
    return l2 ? (nv(t10), v2 ? h2(t10[0], t10[1], d2) : h2(t10[0], t10[1])) : v2 ? h2(t10, d2) : h2(t10);
  };
  if (p2)
    n2 = t9;
  else {
    if (!(o2 = cv(t9)))
      throw lv(ov(t9) + " is not iterable");
    if (iv(o2)) {
      for (i2 = 0, u2 = uv(t9); u2 > i2; i2++)
        if ((a2 = y2(t9[i2])) && av(vv, a2))
          return a2;
      return new pv(false);
    }
    n2 = fv(t9, o2);
  }
  for (f2 = n2.next; !(c2 = ev(f2, n2)).done; ) {
    try {
      a2 = y2(c2.value);
    } catch (t10) {
      sv(n2, "throw", t10);
    }
    if ("object" == typeof a2 && a2 && av(vv, a2))
      return a2;
  }
  return new pv(false);
}, dv = hn, yv = openapi_parser_I, bv = !openapi_parser_i(function() {
  var t9 = Error("a");
  return !("stack" in t9) || (Object.defineProperty(t9, "stack", yv(1, 7)), 7 !== t9.stack);
}), mv = ge, gv = openapi_parser_o, wv = tt, jv = qa, Ov = vf, Av = function(t9, r2, e2) {
  for (var n2 = Jp(r2), o2 = Vp.f, i2 = Hp.f, u2 = 0; u2 < n2.length; u2++) {
    var a2 = n2[u2];
    zp(t9, a2) || e2 && zp(e2, a2) || o2(t9, a2, i2(r2, a2));
  }
}, Sv = Cn, xv = ae, Ev = openapi_parser_I, Pv = function(t9, r2) {
  if (Xp && "string" == typeof t9)
    for (; r2--; )
      t9 = Yp(t9, Kp, "");
  return t9;
}, kv = function(t9, r2) {
  Zp(r2) && "cause" in r2 && tv(t9, "cause", r2.cause);
}, _v = hv, Iv = function(t9, r2) {
  return void 0 === t9 ? arguments.length < 2 ? "" : r2 : dv(t9);
}, Tv = bv, Rv = or("toStringTag"), Fv = gv.Error, Nv = [].push, Mv = function(t9, r2) {
  var e2, n2 = arguments.length > 2 ? arguments[2] : void 0, o2 = wv(Dv, this);
  Ov ? e2 = Ov(new Fv(), o2 ? jv(this) : Dv) : (e2 = o2 ? this : Sv(Dv), xv(e2, Rv, "Error")), void 0 !== r2 && xv(e2, "message", Iv(r2)), Tv && xv(e2, "stack", Pv(e2.stack, 1)), kv(e2, n2);
  var i2 = [];
  return _v(t9, Nv, { that: i2 }), xv(e2, "errors", i2), e2;
};
Ov ? Ov(Mv, Fv) : Av(Mv, Fv, { name: true });
var Dv = Mv.prototype = Sv(Fv.prototype, { constructor: Ev(1, Mv), message: Ev(1, ""), name: Ev(1, "AggregateError") });
mv({ global: true }, { AggregateError: Mv });
var Uv, Lv, Cv, $v, Bv = openapi_parser_o.Promise, qv = fo, Gv = function(t9, r2, e2) {
  for (var n2 in r2)
    e2 && e2.unsafe && t9[n2] ? t9[n2] = r2[n2] : qv(t9, n2, r2[n2], e2);
  return t9;
}, Wv = openapi_parser_Z, zv = Wr, Jv = openapi_parser_w, Hv = or("species"), Vv = tt, Yv = openapi_parser_o.TypeError, Qv = function(t9, r2) {
  if (Vv(r2, t9))
    return t9;
  throw Yv("Incorrect invocation");
}, Kv = vi, Xv = wt, Zv = openapi_parser_o.TypeError, th = Qr, rh = function(t9) {
  if (Kv(t9))
    return t9;
  throw Zv(Xv(t9) + " is not a constructor");
}, eh = or("species"), nh = function(t9, r2) {
  var e2, n2 = th(t9).constructor;
  return void 0 === n2 || null == (e2 = th(n2)[eh]) ? r2 : rh(e2);
}, oh = openapi_parser_o.TypeError, ih = function(t9, r2) {
  if (t9 < r2)
    throw oh("Not enough arguments");
  return t9;
}, uh = /(?:ipad|iphone|ipod).*applewebkit/i.test(rt), ah = "process" == openapi_parser_N(openapi_parser_o.process), fh = openapi_parser_o, ch = openapi_parser_l, sh = Gr, lh = openapi_parser_m, ph = qt, vh = openapi_parser_i, hh = An, dh = uo, yh = gr, bh = ih, mh = uh, gh = ah, wh = fh.setImmediate, jh = fh.clearImmediate, Oh = fh.process, Ah = fh.Dispatch, Sh = fh.Function, xh = fh.MessageChannel, Eh = fh.String, Ph = 0, kh = {};
try {
  Uv = fh.location;
} catch (t9) {
}
var _h = function(t9) {
  if (ph(kh, t9)) {
    var r2 = kh[t9];
    delete kh[t9], r2();
  }
}, Ih = function(t9) {
  return function() {
    _h(t9);
  };
}, Th = function(t9) {
  _h(t9.data);
}, Rh = function(t9) {
  fh.postMessage(Eh(t9), Uv.protocol + "//" + Uv.host);
};
wh && jh || (wh = function(t9) {
  bh(arguments.length, 1);
  var r2 = lh(t9) ? t9 : Sh(t9), e2 = dh(arguments, 1);
  return kh[++Ph] = function() {
    ch(r2, void 0, e2);
  }, Lv(Ph), Ph;
}, jh = function(t9) {
  delete kh[t9];
}, gh ? Lv = function(t9) {
  Oh.nextTick(Ih(t9));
} : Ah && Ah.now ? Lv = function(t9) {
  Ah.now(Ih(t9));
} : xh && !mh ? ($v = (Cv = new xh()).port2, Cv.port1.onmessage = Th, Lv = sh($v.postMessage, $v)) : fh.addEventListener && lh(fh.postMessage) && !fh.importScripts && Uv && "file:" !== Uv.protocol && !vh(Rh) ? (Lv = Rh, fh.addEventListener("message", Th, false)) : Lv = "onreadystatechange" in yh("script") ? function(t9) {
  hh.appendChild(yh("script")).onreadystatechange = function() {
    hh.removeChild(this), _h(t9);
  };
} : function(t9) {
  setTimeout(Ih(t9), 0);
});
var Fh, Nh, Mh, Dh, Uh, Lh, Ch, $h, Bh = { set: wh, clear: jh }, qh = openapi_parser_o, Gh = /ipad|iphone|ipod/i.test(rt) && void 0 !== qh.Pebble, Wh = /web0s(?!.*chrome)/i.test(rt), zh = openapi_parser_o, Jh = Gr, Hh = openapi_parser_g.f, Vh = Bh.set, Yh = uh, Qh = Gh, Kh = Wh, Xh = ah, Zh = zh.MutationObserver || zh.WebKitMutationObserver, td = zh.document, rd = zh.process, ed = zh.Promise, nd = Hh(zh, "queueMicrotask"), od = nd && nd.value;
od || (Fh = function() {
  var t9, r2;
  for (Xh && (t9 = rd.domain) && t9.exit(); Nh; ) {
    r2 = Nh.fn, Nh = Nh.next;
    try {
      r2();
    } catch (t10) {
      throw Nh ? Dh() : Mh = void 0, t10;
    }
  }
  Mh = void 0, t9 && t9.enter();
}, Yh || Xh || Kh || !Zh || !td ? !Qh && ed && ed.resolve ? ((Ch = ed.resolve(void 0)).constructor = ed, $h = Jh(Ch.then, Ch), Dh = function() {
  $h(Fh);
}) : Xh ? Dh = function() {
  rd.nextTick(Fh);
} : (Vh = Jh(Vh, zh), Dh = function() {
  Vh(Fh);
}) : (Uh = true, Lh = td.createTextNode(""), new Zh(Fh).observe(Lh, { characterData: true }), Dh = function() {
  Lh.data = Uh = !Uh;
}));
var id = od || function(t9) {
  var r2 = { fn: t9, next: void 0 };
  Mh && (Mh.next = r2), Nh || (Nh = r2, Dh()), Mh = r2;
}, ud = {}, ad = St, fd = function(t9) {
  var r2, e2;
  this.promise = new t9(function(t10, n2) {
    if (void 0 !== r2 || void 0 !== e2)
      throw TypeError("Bad Promise constructor");
    r2 = t10, e2 = n2;
  }), this.resolve = ad(r2), this.reject = ad(e2);
};
ud.f = function(t9) {
  return new fd(t9);
};
var cd = Qr, sd = openapi_parser_H, ld = ud, pd = function(t9, r2) {
  if (cd(t9), sd(r2) && r2.constructor === t9)
    return r2;
  var e2 = ld.f(t9);
  return (0, e2.resolve)(r2), e2.promise;
}, vd = openapi_parser_o, hd = function(t9) {
  try {
    return { error: false, value: t9() };
  } catch (t10) {
    return { error: true, value: t10 };
  }
}, dd = function() {
  this.head = null, this.tail = null;
};
dd.prototype = { add: function(t9) {
  var r2 = { item: t9, next: null };
  this.head ? this.tail.next = r2 : this.head = r2, this.tail = r2;
}, get: function() {
  var t9 = this.head;
  if (t9)
    return this.head = t9.next, this.tail === t9 && (this.tail = null), t9.item;
} };
var yd, bd, md, gd = "object" == typeof window, wd = ge, jd = openapi_parser_o, Od = openapi_parser_Z, Ad = openapi_parser_A, Sd = Bv, xd = Gv, Ed = xo, Pd = function(t9) {
  var r2 = Wv(t9), e2 = zv.f;
  Jv && r2 && !r2[Hv] && e2(r2, Hv, { configurable: true, get: function() {
    return this;
  } });
}, kd = St, _d = openapi_parser_m, Id = openapi_parser_H, Td = Qv, Rd = Ro, Fd = hv, Nd = Rp, Md = nh, Dd = Bh.set, Ud = id, Ld = pd, Cd = function(t9, r2) {
  var e2 = vd.console;
  e2 && e2.error && (1 == arguments.length ? e2.error(t9) : e2.error(t9, r2));
}, $d = ud, Bd = hd, qd = dd, Gd = Zo, Wd = Cr, zd = gd, Jd = ah, Hd = ft, Vd = or("species"), Yd = "Promise", Qd = Gd.getterFor(Yd), Kd = Gd.set, Xd = Gd.getterFor(Yd), Zd = Sd && Sd.prototype, ty = Sd, ry = Zd, ey = jd.TypeError, ny = jd.document, oy = jd.process, iy = $d.f, uy = iy, ay = !!(ny && ny.createEvent && jd.dispatchEvent), fy = _d(jd.PromiseRejectionEvent), cy = Wd(Yd, function() {
  var t9 = Rd(ty), r2 = t9 !== String(ty);
  if (!r2 && 66 === Hd)
    return true;
  if (!ry.finally)
    return true;
  if (Hd >= 51 && /native code/.test(t9))
    return false;
  var e2 = new ty(function(t10) {
    t10(1);
  }), n2 = function(t10) {
    t10(function() {
    }, function() {
    });
  };
  return (e2.constructor = {})[Vd] = n2, !(e2.then(function() {
  }) instanceof n2) || !r2 && zd && !fy;
}), sy = cy || !Nd(function(t9) {
  ty.all(t9).catch(function() {
  });
}), ly = function(t9) {
  var r2;
  return !(!Id(t9) || !_d(r2 = t9.then)) && r2;
}, py = function(t9, r2) {
  var e2, n2, o2, i2 = r2.value, u2 = 1 == r2.state, a2 = u2 ? t9.ok : t9.fail, f2 = t9.resolve, c2 = t9.reject, s2 = t9.domain;
  try {
    a2 ? (u2 || (2 === r2.rejection && by(r2), r2.rejection = 1), true === a2 ? e2 = i2 : (s2 && s2.enter(), e2 = a2(i2), s2 && (s2.exit(), o2 = true)), e2 === t9.promise ? c2(ey("Promise-chain cycle")) : (n2 = ly(e2)) ? Ad(n2, e2, f2, c2) : f2(e2)) : c2(i2);
  } catch (t10) {
    s2 && !o2 && s2.exit(), c2(t10);
  }
}, vy = function(t9, r2) {
  t9.notified || (t9.notified = true, Ud(function() {
    for (var e2, n2 = t9.reactions; e2 = n2.get(); )
      py(e2, t9);
    t9.notified = false, r2 && !t9.rejection && dy(t9);
  }));
}, hy = function(t9, r2, e2) {
  var n2, o2;
  ay ? ((n2 = ny.createEvent("Event")).promise = r2, n2.reason = e2, n2.initEvent(t9, false, true), jd.dispatchEvent(n2)) : n2 = { promise: r2, reason: e2 }, !fy && (o2 = jd["on" + t9]) ? o2(n2) : "unhandledrejection" === t9 && Cd("Unhandled promise rejection", e2);
}, dy = function(t9) {
  Ad(Dd, jd, function() {
    var r2, e2 = t9.facade, n2 = t9.value;
    if (yy(t9) && (r2 = Bd(function() {
      Jd ? oy.emit("unhandledRejection", n2, e2) : hy("unhandledrejection", e2, n2);
    }), t9.rejection = Jd || yy(t9) ? 2 : 1, r2.error))
      throw r2.value;
  });
}, yy = function(t9) {
  return 1 !== t9.rejection && !t9.parent;
}, by = function(t9) {
  Ad(Dd, jd, function() {
    var r2 = t9.facade;
    Jd ? oy.emit("rejectionHandled", r2) : hy("rejectionhandled", r2, t9.value);
  });
}, my = function(t9, r2, e2) {
  return function(n2) {
    t9(r2, n2, e2);
  };
}, gy = function(t9, r2, e2) {
  t9.done || (t9.done = true, e2 && (t9 = e2), t9.value = r2, t9.state = 2, vy(t9, true));
}, wy = function(t9, r2, e2) {
  if (!t9.done) {
    t9.done = true, e2 && (t9 = e2);
    try {
      if (t9.facade === r2)
        throw ey("Promise can't be resolved itself");
      var n2 = ly(r2);
      n2 ? Ud(function() {
        var e3 = { done: false };
        try {
          Ad(n2, r2, my(wy, e3, t9), my(gy, e3, t9));
        } catch (r3) {
          gy(e3, r3, t9);
        }
      }) : (t9.value = r2, t9.state = 1, vy(t9, false));
    } catch (r3) {
      gy({ done: false }, r3, t9);
    }
  }
};
cy && (ry = (ty = function(t9) {
  Td(this, ry), kd(t9), Ad(yd, this);
  var r2 = Qd(this);
  try {
    t9(my(wy, r2), my(gy, r2));
  } catch (t10) {
    gy(r2, t10);
  }
}).prototype, (yd = function(t9) {
  Kd(this, { type: Yd, done: false, notified: false, parent: false, reactions: new qd(), rejection: false, state: 0, value: void 0 });
}).prototype = xd(ry, { then: function(t9, r2) {
  var e2 = Xd(this), n2 = iy(Md(this, ty));
  return e2.parent = true, n2.ok = !_d(t9) || t9, n2.fail = _d(r2) && r2, n2.domain = Jd ? oy.domain : void 0, 0 == e2.state ? e2.reactions.add(n2) : Ud(function() {
    py(n2, e2);
  }), n2.promise;
}, catch: function(t9) {
  return this.then(void 0, t9);
} }), bd = function() {
  var t9 = new yd(), r2 = Qd(t9);
  this.promise = t9, this.resolve = my(wy, r2), this.reject = my(gy, r2);
}, $d.f = iy = function(t9) {
  return t9 === ty || t9 === md ? new bd(t9) : uy(t9);
}), wd({ global: true, wrap: true, forced: cy }, { Promise: ty }), Ed(ty, Yd, false, true), Pd(Yd), md = Od(Yd), wd({ target: Yd, stat: true, forced: cy }, { reject: function(t9) {
  var r2 = iy(this);
  return Ad(r2.reject, void 0, t9), r2.promise;
} }), wd({ target: Yd, stat: true, forced: true }, { resolve: function(t9) {
  return Ld(this === md ? ty : this, t9);
} }), wd({ target: Yd, stat: true, forced: sy }, { all: function(t9) {
  var r2 = this, e2 = iy(r2), n2 = e2.resolve, o2 = e2.reject, i2 = Bd(function() {
    var e3 = kd(r2.resolve), i3 = [], u2 = 0, a2 = 1;
    Fd(t9, function(t10) {
      var f2 = u2++, c2 = false;
      a2++, Ad(e3, r2, t10).then(function(t11) {
        c2 || (c2 = true, i3[f2] = t11, --a2 || n2(i3));
      }, o2);
    }), --a2 || n2(i3);
  });
  return i2.error && o2(i2.value), e2.promise;
}, race: function(t9) {
  var r2 = this, e2 = iy(r2), n2 = e2.reject, o2 = Bd(function() {
    var o3 = kd(r2.resolve);
    Fd(t9, function(t10) {
      Ad(o3, r2, t10).then(e2.resolve, n2);
    });
  });
  return o2.error && n2(o2.value), e2.promise;
} });
var jy = openapi_parser_A, Oy = St, Ay = ud, Sy = hd, xy = hv;
ge({ target: "Promise", stat: true }, { allSettled: function(t9) {
  var r2 = this, e2 = Ay.f(r2), n2 = e2.resolve, o2 = e2.reject, i2 = Sy(function() {
    var e3 = Oy(r2.resolve), o3 = [], i3 = 0, u2 = 1;
    xy(t9, function(t10) {
      var a2 = i3++, f2 = false;
      u2++, jy(e3, r2, t10).then(function(t11) {
        f2 || (f2 = true, o3[a2] = { status: "fulfilled", value: t11 }, --u2 || n2(o3));
      }, function(t11) {
        f2 || (f2 = true, o3[a2] = { status: "rejected", reason: t11 }, --u2 || n2(o3));
      });
    }), --u2 || n2(o3);
  });
  return i2.error && o2(i2.value), e2.promise;
} });
var Ey = St, Py = openapi_parser_Z, ky = openapi_parser_A, _y = ud, Iy = hd, Ty = hv;
ge({ target: "Promise", stat: true }, { any: function(t9) {
  var r2 = this, e2 = Py("AggregateError"), n2 = _y.f(r2), o2 = n2.resolve, i2 = n2.reject, u2 = Iy(function() {
    var n3 = Ey(r2.resolve), u3 = [], a2 = 0, f2 = 1, c2 = false;
    Ty(t9, function(t10) {
      var s2 = a2++, l2 = false;
      f2++, ky(n3, r2, t10).then(function(t11) {
        l2 || c2 || (c2 = true, o2(t11));
      }, function(t11) {
        l2 || c2 || (l2 = true, u3[s2] = t11, --f2 || i2(new e2(u3, "No one promise resolved")));
      });
    }), --f2 || i2(new e2(u3, "No one promise resolved"));
  });
  return u2.error && i2(u2.value), n2.promise;
} });
var Ry = Bv, Fy = openapi_parser_Z, Ny = openapi_parser_m, My = nh, Dy = pd;
ge({ target: "Promise", proto: true, real: true, forced: !!Ry && openapi_parser_i(function() {
  Ry.prototype.finally.call({ then: function() {
  } }, function() {
  });
}) }, { finally: function(t9) {
  var r2 = My(this, Fy("Promise")), e2 = Ny(t9);
  return this.then(e2 ? function(e3) {
    return Dy(r2, t9()).then(function() {
      return e3;
    });
  } : t9, e2 ? function(e3) {
    return Dy(r2, t9()).then(function() {
      throw e3;
    });
  } : t9);
} });
var Uy = openapi_parser_V.Promise, Ly = Uy, Cy = ud, $y = hd;
ge({ target: "Promise", stat: true, forced: true }, { try: function(t9) {
  var r2 = Cy.f(this), e2 = $y(t9);
  return (e2.error ? r2.reject : r2.resolve)(e2.value), r2.promise;
} });
const By = openapi_parser_t(Wp.exports = Ly);
function qy(t9, r2, e2, n2, o2, i2, u2) {
  try {
    var a2 = t9[i2](u2), f2 = a2.value;
  } catch (t10) {
    return void e2(t10);
  }
  a2.done ? r2(f2) : By.resolve(f2).then(n2, o2);
}
function Gy(t9) {
  return function() {
    var r2 = this, e2 = arguments;
    return new By(function(n2, o2) {
      var i2 = t9.apply(r2, e2);
      function u2(t10) {
        qy(i2, n2, o2, u2, a2, "next", t10);
      }
      function a2(t10) {
        qy(i2, n2, o2, u2, a2, "throw", t10);
      }
      u2(void 0);
    });
  };
}
var Wy = { exports: {} }, zy = { exports: {} };
!function(t9) {
  var r2 = function(t10) {
    var r3, e2 = Object.prototype, n2 = e2.hasOwnProperty, o2 = "function" == typeof Symbol ? Symbol : {}, i2 = o2.iterator || "@@iterator", u2 = o2.asyncIterator || "@@asyncIterator", a2 = o2.toStringTag || "@@toStringTag";
    function f2(t11, r4, e3) {
      return Object.defineProperty(t11, r4, { value: e3, enumerable: true, configurable: true, writable: true }), t11[r4];
    }
    try {
      f2({}, "");
    } catch (t11) {
      f2 = function(t12, r4, e3) {
        return t12[r4] = e3;
      };
    }
    function c2(t11, r4, e3, n3) {
      var o3 = r4 && r4.prototype instanceof y2 ? r4 : y2, i3 = Object.create(o3.prototype), u3 = new k2(n3 || []);
      return i3._invoke = function(t12, r5, e4) {
        var n4 = l2;
        return function(o4, i4) {
          if (n4 === v2)
            throw new Error("Generator is already running");
          if (n4 === h2) {
            if ("throw" === o4)
              throw i4;
            return I2();
          }
          for (e4.method = o4, e4.arg = i4; ; ) {
            var u4 = e4.delegate;
            if (u4) {
              var a3 = x2(u4, e4);
              if (a3) {
                if (a3 === d2)
                  continue;
                return a3;
              }
            }
            if ("next" === e4.method)
              e4.sent = e4._sent = e4.arg;
            else if ("throw" === e4.method) {
              if (n4 === l2)
                throw n4 = h2, e4.arg;
              e4.dispatchException(e4.arg);
            } else
              "return" === e4.method && e4.abrupt("return", e4.arg);
            n4 = v2;
            var f3 = s2(t12, r5, e4);
            if ("normal" === f3.type) {
              if (n4 = e4.done ? h2 : p2, f3.arg === d2)
                continue;
              return { value: f3.arg, done: e4.done };
            }
            "throw" === f3.type && (n4 = h2, e4.method = "throw", e4.arg = f3.arg);
          }
        };
      }(t11, e3, u3), i3;
    }
    function s2(t11, r4, e3) {
      try {
        return { type: "normal", arg: t11.call(r4, e3) };
      } catch (t12) {
        return { type: "throw", arg: t12 };
      }
    }
    t10.wrap = c2;
    var l2 = "suspendedStart", p2 = "suspendedYield", v2 = "executing", h2 = "completed", d2 = {};
    function y2() {
    }
    function b2() {
    }
    function m2() {
    }
    var g2 = {};
    f2(g2, i2, function() {
      return this;
    });
    var w2 = Object.getPrototypeOf, j2 = w2 && w2(w2(_2([])));
    j2 && j2 !== e2 && n2.call(j2, i2) && (g2 = j2);
    var O2 = m2.prototype = y2.prototype = Object.create(g2);
    function A2(t11) {
      ["next", "throw", "return"].forEach(function(r4) {
        f2(t11, r4, function(t12) {
          return this._invoke(r4, t12);
        });
      });
    }
    function S2(t11, r4) {
      function e3(o4, i3, u3, a3) {
        var f3 = s2(t11[o4], t11, i3);
        if ("throw" !== f3.type) {
          var c3 = f3.arg, l3 = c3.value;
          return l3 && "object" == typeof l3 && n2.call(l3, "__await") ? r4.resolve(l3.u).then(function(t12) {
            e3("next", t12, u3, a3);
          }, function(t12) {
            e3("throw", t12, u3, a3);
          }) : r4.resolve(l3).then(function(t12) {
            c3.value = t12, u3(c3);
          }, function(t12) {
            return e3("throw", t12, u3, a3);
          });
        }
        a3(f3.arg);
      }
      var o3;
      this._invoke = function(t12, n3) {
        function i3() {
          return new r4(function(r5, o4) {
            e3(t12, n3, r5, o4);
          });
        }
        return o3 = o3 ? o3.then(i3, i3) : i3();
      };
    }
    function x2(t11, e3) {
      var n3 = t11.iterator[e3.method];
      if (n3 === r3) {
        if (e3.delegate = null, "throw" === e3.method) {
          if (t11.iterator.return && (e3.method = "return", e3.arg = r3, x2(t11, e3), "throw" === e3.method))
            return d2;
          e3.method = "throw", e3.arg = new TypeError("The iterator does not provide a 'throw' method");
        }
        return d2;
      }
      var o3 = s2(n3, t11.iterator, e3.arg);
      if ("throw" === o3.type)
        return e3.method = "throw", e3.arg = o3.arg, e3.delegate = null, d2;
      var i3 = o3.arg;
      return i3 ? i3.done ? (e3[t11.resultName] = i3.value, e3.next = t11.nextLoc, "return" !== e3.method && (e3.method = "next", e3.arg = r3), e3.delegate = null, d2) : i3 : (e3.method = "throw", e3.arg = new TypeError("iterator result is not an object"), e3.delegate = null, d2);
    }
    function E2(t11) {
      var r4 = { tryLoc: t11[0] };
      1 in t11 && (r4.catchLoc = t11[1]), 2 in t11 && (r4.finallyLoc = t11[2], r4.afterLoc = t11[3]), this.tryEntries.push(r4);
    }
    function P2(t11) {
      var r4 = t11.completion || {};
      r4.type = "normal", delete r4.arg, t11.completion = r4;
    }
    function k2(t11) {
      this.tryEntries = [{ tryLoc: "root" }], t11.forEach(E2, this), this.reset(true);
    }
    function _2(t11) {
      if (t11) {
        var e3 = t11[i2];
        if (e3)
          return e3.call(t11);
        if ("function" == typeof t11.next)
          return t11;
        if (!isNaN(t11.length)) {
          var o3 = -1, u3 = function e4() {
            for (; ++o3 < t11.length; )
              if (n2.call(t11, o3))
                return e4.value = t11[o3], e4.done = false, e4;
            return e4.value = r3, e4.done = true, e4;
          };
          return u3.next = u3;
        }
      }
      return { next: I2 };
    }
    function I2() {
      return { value: r3, done: true };
    }
    return b2.prototype = m2, f2(O2, "constructor", m2), f2(m2, "constructor", b2), b2.displayName = f2(m2, a2, "GeneratorFunction"), t10.isGeneratorFunction = function(t11) {
      var r4 = "function" == typeof t11 && t11.constructor;
      return !!r4 && (r4 === b2 || "GeneratorFunction" === (r4.displayName || r4.name));
    }, t10.mark = function(t11) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(t11, m2) : (t11.__proto__ = m2, f2(t11, a2, "GeneratorFunction")), t11.prototype = Object.create(O2), t11;
    }, t10.awrap = function(t11) {
      return { u: t11 };
    }, A2(S2.prototype), f2(S2.prototype, u2, function() {
      return this;
    }), t10.AsyncIterator = S2, t10.async = function(r4, e3, n3, o3, i3) {
      void 0 === i3 && (i3 = Promise);
      var u3 = new S2(c2(r4, e3, n3, o3), i3);
      return t10.isGeneratorFunction(e3) ? u3 : u3.next().then(function(t11) {
        return t11.done ? t11.value : u3.next();
      });
    }, A2(O2), f2(O2, a2, "Generator"), f2(O2, i2, function() {
      return this;
    }), f2(O2, "toString", function() {
      return "[object Generator]";
    }), t10.keys = function(t11) {
      var r4 = [];
      for (var e3 in t11)
        r4.push(e3);
      return r4.reverse(), function e4() {
        for (; r4.length; ) {
          var n3 = r4.pop();
          if (n3 in t11)
            return e4.value = n3, e4.done = false, e4;
        }
        return e4.done = true, e4;
      };
    }, t10.values = _2, k2.prototype = { constructor: k2, reset: function(t11) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = r3, this.done = false, this.delegate = null, this.method = "next", this.arg = r3, this.tryEntries.forEach(P2), !t11)
        for (var e3 in this)
          "t" === e3.charAt(0) && n2.call(this, e3) && !isNaN(+e3.slice(1)) && (this[e3] = r3);
    }, stop: function() {
      this.done = true;
      var t11 = this.tryEntries[0].completion;
      if ("throw" === t11.type)
        throw t11.arg;
      return this.rval;
    }, dispatchException: function(t11) {
      if (this.done)
        throw t11;
      var e3 = this;
      function o3(n3, o4) {
        return a3.type = "throw", a3.arg = t11, e3.next = n3, o4 && (e3.method = "next", e3.arg = r3), !!o4;
      }
      for (var i3 = this.tryEntries.length - 1; i3 >= 0; --i3) {
        var u3 = this.tryEntries[i3], a3 = u3.completion;
        if ("root" === u3.tryLoc)
          return o3("end");
        if (u3.tryLoc <= this.prev) {
          var f3 = n2.call(u3, "catchLoc"), c3 = n2.call(u3, "finallyLoc");
          if (f3 && c3) {
            if (this.prev < u3.catchLoc)
              return o3(u3.catchLoc, true);
            if (this.prev < u3.finallyLoc)
              return o3(u3.finallyLoc);
          } else if (f3) {
            if (this.prev < u3.catchLoc)
              return o3(u3.catchLoc, true);
          } else {
            if (!c3)
              throw new Error("try statement without catch or finally");
            if (this.prev < u3.finallyLoc)
              return o3(u3.finallyLoc);
          }
        }
      }
    }, abrupt: function(t11, r4) {
      for (var e3 = this.tryEntries.length - 1; e3 >= 0; --e3) {
        var o3 = this.tryEntries[e3];
        if (o3.tryLoc <= this.prev && n2.call(o3, "finallyLoc") && this.prev < o3.finallyLoc) {
          var i3 = o3;
          break;
        }
      }
      i3 && ("break" === t11 || "continue" === t11) && i3.tryLoc <= r4 && r4 <= i3.finallyLoc && (i3 = null);
      var u3 = i3 ? i3.completion : {};
      return u3.type = t11, u3.arg = r4, i3 ? (this.method = "next", this.next = i3.finallyLoc, d2) : this.complete(u3);
    }, complete: function(t11, r4) {
      if ("throw" === t11.type)
        throw t11.arg;
      return "break" === t11.type || "continue" === t11.type ? this.next = t11.arg : "return" === t11.type ? (this.rval = this.arg = t11.arg, this.method = "return", this.next = "end") : "normal" === t11.type && r4 && (this.next = r4), d2;
    }, finish: function(t11) {
      for (var r4 = this.tryEntries.length - 1; r4 >= 0; --r4) {
        var e3 = this.tryEntries[r4];
        if (e3.finallyLoc === t11)
          return this.complete(e3.completion, e3.afterLoc), P2(e3), d2;
      }
    }, catch: function(t11) {
      for (var r4 = this.tryEntries.length - 1; r4 >= 0; --r4) {
        var e3 = this.tryEntries[r4];
        if (e3.tryLoc === t11) {
          var n3 = e3.completion;
          if ("throw" === n3.type) {
            var o3 = n3.arg;
            P2(e3);
          }
          return o3;
        }
      }
      throw new Error("illegal catch attempt");
    }, delegateYield: function(t11, e3, n3) {
      return this.delegate = { iterator: _2(t11), resultName: e3, nextLoc: n3 }, "next" === this.method && (this.arg = r3), d2;
    } }, t10;
  }(t9.exports);
  try {
    regeneratorRuntime = r2;
  } catch (t10) {
    "object" == typeof globalThis ? globalThis.regeneratorRuntime = r2 : Function("r", "regeneratorRuntime = r")(r2);
  }
}(zy);
const Jy = openapi_parser_t(Wy.exports = zy.exports);
var Hy = { exports: {} }, Vy = De.includes;
ge({ target: "Array", proto: true }, { includes: function(t9) {
  return Vy(this, t9, arguments.length > 1 ? arguments[1] : void 0);
} });
var Yy = na("Array").includes, Qy = ge, Ky = es, Xy = q, Zy = hn, tb = os, rb = openapi_parser_b("".indexOf);
Qy({ target: "String", proto: true, forced: !tb("includes") }, { includes: function(t9) {
  return !!~rb(Zy(Xy(this)), Zy(Ky(t9)), arguments.length > 1 ? arguments[1] : void 0);
} });
var eb = na("String").includes, nb = tt, ob = Yy, ib = eb, ub = Array.prototype, ab = String.prototype;
const fb = openapi_parser_t(Hy.exports = function(t9) {
  var r2 = t9.includes;
  return t9 === ub || nb(ub, t9) && r2 === ub.includes ? ob : "string" == typeof t9 || t9 === ab || nb(ab, t9) && r2 === ab.includes ? ib : r2;
});
var cb = { exports: {} }, sb = na("Array").entries, lb = ln, pb = qt, vb = tt, hb = sb, db = Array.prototype, yb = { DOMTokenList: true, NodeList: true };
const bb = openapi_parser_t(cb.exports = function(t9) {
  var r2 = t9.entries;
  return t9 === db || vb(db, t9) && r2 === db.entries || pb(yb, lb(t9)) ? hb : r2;
});
var mb = { exports: {} };
const gb = openapi_parser_t(mb.exports = Np);
var wb = { exports: {} }, jb = ge, Ob = openapi_parser_Z, Ab = openapi_parser_l, Sb = openapi_parser_b, xb = openapi_parser_i, Eb = openapi_parser_o.Array, Pb = Ob("JSON", "stringify"), kb = Sb(/./.exec), _b = Sb("".charAt), Ib = Sb("".charCodeAt), Tb = Sb("".replace), Rb = Sb(1 .toString), Fb = /[\uD800-\uDFFF]/g, Nb = /^[\uD800-\uDBFF]$/, Mb = /^[\uDC00-\uDFFF]$/, Db = function(t9, r2, e2) {
  var n2 = _b(e2, r2 - 1), o2 = _b(e2, r2 + 1);
  return kb(Nb, t9) && !kb(Mb, o2) || kb(Mb, t9) && !kb(Nb, n2) ? "\\u" + Rb(Ib(t9, 0), 16) : t9;
}, Ub = xb(function() {
  return '"\\udf06\\ud834"' !== Pb("\uDF06\uD834") || '"\\udead"' !== Pb("\uDEAD");
});
Pb && jb({ target: "JSON", stat: true, forced: Ub }, { stringify: function(t9, r2, e2) {
  for (var n2 = 0, o2 = arguments.length, i2 = Eb(o2); n2 < o2; n2++)
    i2[n2] = arguments[n2];
  var u2 = Ab(Pb, null, i2);
  return "string" == typeof u2 ? Tb(u2, Fb, Db) : u2;
} });
var Lb = openapi_parser_V, Cb = openapi_parser_l;
Lb.JSON || (Lb.JSON = { stringify: JSON.stringify });
const $b = openapi_parser_t(wb.exports = function(t9, r2, e2) {
  return Cb(Lb.JSON.stringify, null, arguments);
});
var Bb = { exports: {} }, qb = _i.map;
ge({ target: "Array", proto: true, forced: !ta("map") }, { map: function(t9) {
  return qb(this, t9, arguments.length > 1 ? arguments[1] : void 0);
} });
var Gb = na("Array").map, Wb = tt, zb = Gb, Jb = Array.prototype;
const Hb = openapi_parser_t(Bb.exports = function(t9) {
  var r2 = t9.map;
  return t9 === Jb || Wb(Jb, t9) && r2 === Jb.map ? zb : r2;
});
var Vb = { exports: {} };
const Yb = openapi_parser_t(Vb.exports = Qe);
var Qb = { exports: {} }, Kb = na("Array").concat, Xb = tt, Zb = Kb, tm = Array.prototype;
const rm = openapi_parser_t(Qb.exports = function(t9) {
  var r2 = t9.concat;
  return t9 === tm || Xb(tm, t9) && r2 === tm.concat ? Zb : r2;
});
var em = { exports: {} }, nm = openapi_parser_w, om = openapi_parser_b, im = He, um = openapi_parser_z, am = om(openapi_parser_S.f), fm = om([].push), cm = function(t9) {
  return function(r2) {
    for (var e2, n2 = um(r2), o2 = im(n2), i2 = o2.length, u2 = 0, a2 = []; i2 > u2; )
      e2 = o2[u2++], nm && !am(n2, e2) || fm(a2, t9 ? [e2, n2[e2]] : n2[e2]);
    return a2;
  };
}, sm = { entries: cm(true), values: cm(false) }.entries;
ge({ target: "Object", stat: true }, { entries: function(t9) {
  return sm(t9);
} });
var lm = openapi_parser_V.Object.entries;
const pm = openapi_parser_t(em.exports = lm);
var vm = { exports: {} };
const hm = openapi_parser_t(vm.exports = fa);
!function() {
  !function(t9) {
    !function(r2) {
      var e2 = "URLSearchParams" in t9, n2 = "Symbol" in t9 && "iterator" in Symbol, o2 = "FileReader" in t9 && "Blob" in t9 && function() {
        try {
          return new Blob(), true;
        } catch (t10) {
          return false;
        }
      }(), i2 = "FormData" in t9, u2 = "ArrayBuffer" in t9;
      if (u2)
        var a2 = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"], f2 = ArrayBuffer.isView || function(t10) {
          return t10 && a2.indexOf(Object.prototype.toString.call(t10)) > -1;
        };
      function c2(t10) {
        if ("string" != typeof t10 && (t10 = String(t10)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(t10))
          throw new TypeError("Invalid character in header field name");
        return t10.toLowerCase();
      }
      function s2(t10) {
        return "string" != typeof t10 && (t10 = String(t10)), t10;
      }
      function l2(t10) {
        var r3 = { next: function() {
          var r4 = t10.shift();
          return { done: void 0 === r4, value: r4 };
        } };
        return n2 && (r3[Symbol.iterator] = function() {
          return r3;
        }), r3;
      }
      function p2(t10) {
        this.map = {}, t10 instanceof p2 ? t10.forEach(function(t11, r3) {
          this.append(r3, t11);
        }, this) : Array.isArray(t10) ? t10.forEach(function(t11) {
          this.append(t11[0], t11[1]);
        }, this) : t10 && Object.getOwnPropertyNames(t10).forEach(function(r3) {
          this.append(r3, t10[r3]);
        }, this);
      }
      function v2(t10) {
        if (t10.bodyUsed)
          return Promise.reject(new TypeError("Already read"));
        t10.bodyUsed = true;
      }
      function h2(t10) {
        return new Promise(function(r3, e3) {
          t10.onload = function() {
            r3(t10.result);
          }, t10.onerror = function() {
            e3(t10.error);
          };
        });
      }
      function d2(t10) {
        var r3 = new FileReader(), e3 = h2(r3);
        return r3.readAsArrayBuffer(t10), e3;
      }
      function y2(t10) {
        if (t10.slice)
          return t10.slice(0);
        var r3 = new Uint8Array(t10.byteLength);
        return r3.set(new Uint8Array(t10)), r3.buffer;
      }
      function b2() {
        return this.bodyUsed = false, this._initBody = function(t10) {
          var r3;
          this._bodyInit = t10, t10 ? "string" == typeof t10 ? this._bodyText = t10 : o2 && Blob.prototype.isPrototypeOf(t10) ? this._bodyBlob = t10 : i2 && FormData.prototype.isPrototypeOf(t10) ? this._bodyFormData = t10 : e2 && URLSearchParams.prototype.isPrototypeOf(t10) ? this._bodyText = t10.toString() : u2 && o2 && ((r3 = t10) && DataView.prototype.isPrototypeOf(r3)) ? (this._bodyArrayBuffer = y2(t10.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : u2 && (ArrayBuffer.prototype.isPrototypeOf(t10) || f2(t10)) ? this._bodyArrayBuffer = y2(t10) : this._bodyText = t10 = Object.prototype.toString.call(t10) : this._bodyText = "", this.headers.get("content-type") || ("string" == typeof t10 ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : e2 && URLSearchParams.prototype.isPrototypeOf(t10) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
        }, o2 && (this.blob = function() {
          var t10 = v2(this);
          if (t10)
            return t10;
          if (this._bodyBlob)
            return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as blob");
          return Promise.resolve(new Blob([this._bodyText]));
        }, this.arrayBuffer = function() {
          return this._bodyArrayBuffer ? v2(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(d2);
        }), this.text = function() {
          var t10 = v2(this);
          if (t10)
            return t10;
          if (this._bodyBlob)
            return function(t11) {
              var r3 = new FileReader(), e3 = h2(r3);
              return r3.readAsText(t11), e3;
            }(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(function(t11) {
              for (var r3 = new Uint8Array(t11), e3 = new Array(r3.length), n3 = 0; n3 < r3.length; n3++)
                e3[n3] = String.fromCharCode(r3[n3]);
              return e3.join("");
            }(this._bodyArrayBuffer));
          if (this._bodyFormData)
            throw new Error("could not read FormData body as text");
          return Promise.resolve(this._bodyText);
        }, i2 && (this.formData = function() {
          return this.text().then(w2);
        }), this.json = function() {
          return this.text().then(JSON.parse);
        }, this;
      }
      p2.prototype.append = function(t10, r3) {
        t10 = c2(t10), r3 = s2(r3);
        var e3 = this.map[t10];
        this.map[t10] = e3 ? e3 + ", " + r3 : r3;
      }, p2.prototype.delete = function(t10) {
        delete this.map[c2(t10)];
      }, p2.prototype.get = function(t10) {
        return t10 = c2(t10), this.has(t10) ? this.map[t10] : null;
      }, p2.prototype.has = function(t10) {
        return this.map.hasOwnProperty(c2(t10));
      }, p2.prototype.set = function(t10, r3) {
        this.map[c2(t10)] = s2(r3);
      }, p2.prototype.forEach = function(t10, r3) {
        for (var e3 in this.map)
          this.map.hasOwnProperty(e3) && t10.call(r3, this.map[e3], e3, this);
      }, p2.prototype.keys = function() {
        var t10 = [];
        return this.forEach(function(r3, e3) {
          t10.push(e3);
        }), l2(t10);
      }, p2.prototype.values = function() {
        var t10 = [];
        return this.forEach(function(r3) {
          t10.push(r3);
        }), l2(t10);
      }, p2.prototype.entries = function() {
        var t10 = [];
        return this.forEach(function(r3, e3) {
          t10.push([e3, r3]);
        }), l2(t10);
      }, n2 && (p2.prototype[Symbol.iterator] = p2.prototype.entries);
      var m2 = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function g2(t10, r3) {
        var e3 = (r3 = r3 || {}).body;
        if (t10 instanceof g2) {
          if (t10.bodyUsed)
            throw new TypeError("Already read");
          this.url = t10.url, this.credentials = t10.credentials, r3.headers || (this.headers = new p2(t10.headers)), this.method = t10.method, this.mode = t10.mode, this.signal = t10.signal, e3 || null == t10._bodyInit || (e3 = t10._bodyInit, t10.bodyUsed = true);
        } else
          this.url = String(t10);
        if (this.credentials = r3.credentials || this.credentials || "same-origin", !r3.headers && this.headers || (this.headers = new p2(r3.headers)), this.method = function(t11) {
          var r4 = t11.toUpperCase();
          return m2.indexOf(r4) > -1 ? r4 : t11;
        }(r3.method || this.method || "GET"), this.mode = r3.mode || this.mode || null, this.signal = r3.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && e3)
          throw new TypeError("Body not allowed for GET or HEAD requests");
        this._initBody(e3);
      }
      function w2(t10) {
        var r3 = new FormData();
        return t10.trim().split("&").forEach(function(t11) {
          if (t11) {
            var e3 = t11.split("="), n3 = e3.shift().replace(/\+/g, " "), o3 = e3.join("=").replace(/\+/g, " ");
            r3.append(decodeURIComponent(n3), decodeURIComponent(o3));
          }
        }), r3;
      }
      function j2(t10, r3) {
        r3 || (r3 = {}), this.type = "default", this.status = void 0 === r3.status ? 200 : r3.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in r3 ? r3.statusText : "OK", this.headers = new p2(r3.headers), this.url = r3.url || "", this._initBody(t10);
      }
      g2.prototype.clone = function() {
        return new g2(this, { body: this._bodyInit });
      }, b2.call(g2.prototype), b2.call(j2.prototype), j2.prototype.clone = function() {
        return new j2(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new p2(this.headers), url: this.url });
      }, j2.error = function() {
        var t10 = new j2(null, { status: 0, statusText: "" });
        return t10.type = "error", t10;
      };
      var O2 = [301, 302, 303, 307, 308];
      j2.redirect = function(t10, r3) {
        if (-1 === O2.indexOf(r3))
          throw new RangeError("Invalid status code");
        return new j2(null, { status: r3, headers: { location: t10 } });
      }, r2.DOMException = t9.DOMException;
      try {
        new r2.DOMException();
      } catch (t10) {
        r2.DOMException = function(t11, r3) {
          this.message = t11, this.name = r3;
          var e3 = Error(t11);
          this.stack = e3.stack;
        }, r2.DOMException.prototype = Object.create(Error.prototype), r2.DOMException.prototype.constructor = r2.DOMException;
      }
      function A2(t10, e3) {
        return new Promise(function(n3, i3) {
          var u3 = new g2(t10, e3);
          if (u3.signal && u3.signal.aborted)
            return i3(new r2.DOMException("Aborted", "AbortError"));
          var a3 = new XMLHttpRequest();
          function f3() {
            a3.abort();
          }
          a3.onload = function() {
            var t11, r3, e4 = { status: a3.status, statusText: a3.statusText, headers: (t11 = a3.getAllResponseHeaders() || "", r3 = new p2(), t11.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(t12) {
              var e5 = t12.split(":"), n4 = e5.shift().trim();
              if (n4) {
                var o4 = e5.join(":").trim();
                r3.append(n4, o4);
              }
            }), r3) };
            e4.url = "responseURL" in a3 ? a3.responseURL : e4.headers.get("X-Request-URL");
            var o3 = "response" in a3 ? a3.response : a3.responseText;
            n3(new j2(o3, e4));
          }, a3.onerror = function() {
            i3(new TypeError("Network request failed"));
          }, a3.ontimeout = function() {
            i3(new TypeError("Network request failed"));
          }, a3.onabort = function() {
            i3(new r2.DOMException("Aborted", "AbortError"));
          }, a3.open(u3.method, u3.url, true), "include" === u3.credentials ? a3.withCredentials = true : "omit" === u3.credentials && (a3.withCredentials = false), "responseType" in a3 && o2 && (a3.responseType = "blob"), u3.headers.forEach(function(t11, r3) {
            a3.setRequestHeader(r3, t11);
          }), u3.signal && (u3.signal.addEventListener("abort", f3), a3.onreadystatechange = function() {
            4 === a3.readyState && u3.signal.removeEventListener("abort", f3);
          }), a3.send(void 0 === u3._bodyInit ? null : u3._bodyInit);
        });
      }
      A2.polyfill = true, t9.fetch || (t9.fetch = A2, t9.Headers = p2, t9.Request = g2, t9.Response = j2), r2.Headers = p2, r2.Request = g2, r2.Response = j2, r2.fetch = A2, Object.defineProperty(r2, "t", { value: true });
    }({});
  }("undefined" != typeof self ? self : this);
}();
var dm = "undefined" != typeof Symbol && Symbol, ym = function() {
  if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols)
    return false;
  if ("symbol" == typeof Symbol.iterator)
    return true;
  var t9 = {}, r2 = Symbol("test"), e2 = Object(r2);
  if ("string" == typeof r2)
    return false;
  if ("[object Symbol]" !== Object.prototype.toString.call(r2))
    return false;
  if ("[object Symbol]" !== Object.prototype.toString.call(e2))
    return false;
  for (r2 in t9[r2] = 42, t9)
    return false;
  if ("function" == typeof Object.keys && 0 !== Object.keys(t9).length)
    return false;
  if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(t9).length)
    return false;
  var n2 = Object.getOwnPropertySymbols(t9);
  if (1 !== n2.length || n2[0] !== r2)
    return false;
  if (!Object.prototype.propertyIsEnumerable.call(t9, r2))
    return false;
  if ("function" == typeof Object.getOwnPropertyDescriptor) {
    var o2 = Object.getOwnPropertyDescriptor(t9, r2);
    if (42 !== o2.value || true !== o2.enumerable)
      return false;
  }
  return true;
}, bm = "Function.prototype.bind called on incompatible ", mm = Array.prototype.slice, gm = Object.prototype.toString, wm = function(t9) {
  var r2 = this;
  if ("function" != typeof r2 || "[object Function]" !== gm.call(r2))
    throw new TypeError(bm + r2);
  for (var e2, n2 = mm.call(arguments, 1), o2 = function() {
    if (this instanceof e2) {
      var o3 = r2.apply(this, n2.concat(mm.call(arguments)));
      return Object(o3) === o3 ? o3 : this;
    }
    return r2.apply(t9, n2.concat(mm.call(arguments)));
  }, i2 = Math.max(0, r2.length - n2.length), u2 = [], a2 = 0; a2 < i2; a2++)
    u2.push("$" + a2);
  if (e2 = Function("binder", "return function (" + u2.join(",") + "){ return binder.apply(this,arguments); }")(o2), r2.prototype) {
    var f2 = function() {
    };
    f2.prototype = r2.prototype, e2.prototype = new f2(), f2.prototype = null;
  }
  return e2;
}, jm = Function.prototype.bind || wm, Om = jm.call(Function.call, Object.prototype.hasOwnProperty), Am = SyntaxError, Sm = Function, xm = TypeError, Em = function(t9) {
  try {
    return Sm('"use strict"; return (' + t9 + ").constructor;")();
  } catch (t10) {
  }
}, Pm = Object.getOwnPropertyDescriptor;
if (Pm)
  try {
    Pm({}, "");
  } catch (t9) {
    Pm = null;
  }
var km = function() {
  throw new xm();
}, _m = Pm ? function() {
  try {
    return km;
  } catch (t9) {
    try {
      return Pm(arguments, "callee").get;
    } catch (t10) {
      return km;
    }
  }
}() : km, Im = "function" == typeof dm && "function" == typeof Symbol && "symbol" == typeof dm("foo") && "symbol" == typeof Symbol("bar") && ym(), Tm = Object.getPrototypeOf || function(t9) {
  return t9.__proto__;
}, Rm = {}, Fm = "undefined" == typeof Uint8Array ? void 0 : Tm(Uint8Array), Nm = { "%AggregateError%": "undefined" == typeof AggregateError ? void 0 : AggregateError, "%Array%": Array, "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? void 0 : ArrayBuffer, "%ArrayIteratorPrototype%": Im ? Tm([][Symbol.iterator]()) : void 0, "%AsyncFromSyncIteratorPrototype%": void 0, "%AsyncFunction%": Rm, "%AsyncGenerator%": Rm, "%AsyncGeneratorFunction%": Rm, "%AsyncIteratorPrototype%": Rm, "%Atomics%": "undefined" == typeof Atomics ? void 0 : Atomics, "%BigInt%": "undefined" == typeof BigInt ? void 0 : BigInt, "%Boolean%": Boolean, "%DataView%": "undefined" == typeof DataView ? void 0 : DataView, "%Date%": Date, "%decodeURI%": decodeURI, "%decodeURIComponent%": decodeURIComponent, "%encodeURI%": encodeURI, "%encodeURIComponent%": encodeURIComponent, "%Error%": Error, "%eval%": eval, "%EvalError%": EvalError, "%Float32Array%": "undefined" == typeof Float32Array ? void 0 : Float32Array, "%Float64Array%": "undefined" == typeof Float64Array ? void 0 : Float64Array, "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? void 0 : FinalizationRegistry, "%Function%": Sm, "%GeneratorFunction%": Rm, "%Int8Array%": "undefined" == typeof Int8Array ? void 0 : Int8Array, "%Int16Array%": "undefined" == typeof Int16Array ? void 0 : Int16Array, "%Int32Array%": "undefined" == typeof Int32Array ? void 0 : Int32Array, "%isFinite%": isFinite, "%isNaN%": isNaN, "%IteratorPrototype%": Im ? Tm(Tm([][Symbol.iterator]())) : void 0, "%JSON%": "object" == typeof JSON ? JSON : void 0, "%Map%": "undefined" == typeof Map ? void 0 : Map, "%MapIteratorPrototype%": "undefined" != typeof Map && Im ? Tm((/* @__PURE__ */ new Map())[Symbol.iterator]()) : void 0, "%Math%": Math, "%Number%": Number, "%Object%": Object, "%parseFloat%": parseFloat, "%parseInt%": parseInt, "%Promise%": "undefined" == typeof Promise ? void 0 : Promise, "%Proxy%": "undefined" == typeof Proxy ? void 0 : Proxy, "%RangeError%": RangeError, "%ReferenceError%": ReferenceError, "%Reflect%": "undefined" == typeof Reflect ? void 0 : Reflect, "%RegExp%": RegExp, "%Set%": "undefined" == typeof Set ? void 0 : Set, "%SetIteratorPrototype%": "undefined" != typeof Set && Im ? Tm((/* @__PURE__ */ new Set())[Symbol.iterator]()) : void 0, "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? void 0 : SharedArrayBuffer, "%String%": String, "%StringIteratorPrototype%": Im ? Tm(""[Symbol.iterator]()) : void 0, "%Symbol%": Im ? Symbol : void 0, "%SyntaxError%": Am, "%ThrowTypeError%": _m, "%TypedArray%": Fm, "%TypeError%": xm, "%Uint8Array%": "undefined" == typeof Uint8Array ? void 0 : Uint8Array, "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? void 0 : Uint8ClampedArray, "%Uint16Array%": "undefined" == typeof Uint16Array ? void 0 : Uint16Array, "%Uint32Array%": "undefined" == typeof Uint32Array ? void 0 : Uint32Array, "%URIError%": URIError, "%WeakMap%": "undefined" == typeof WeakMap ? void 0 : WeakMap, "%WeakRef%": "undefined" == typeof WeakRef ? void 0 : WeakRef, "%WeakSet%": "undefined" == typeof WeakSet ? void 0 : WeakSet }, Mm = function t2(r2) {
  var e2;
  if ("%AsyncFunction%" === r2)
    e2 = Em("async function () {}");
  else if ("%GeneratorFunction%" === r2)
    e2 = Em("function* () {}");
  else if ("%AsyncGeneratorFunction%" === r2)
    e2 = Em("async function* () {}");
  else if ("%AsyncGenerator%" === r2) {
    var n2 = t2("%AsyncGeneratorFunction%");
    n2 && (e2 = n2.prototype);
  } else if ("%AsyncIteratorPrototype%" === r2) {
    var o2 = t2("%AsyncGenerator%");
    o2 && (e2 = Tm(o2.prototype));
  }
  return Nm[r2] = e2, e2;
}, Dm = { "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"], "%ArrayPrototype%": ["Array", "prototype"], "%ArrayProto_entries%": ["Array", "prototype", "entries"], "%ArrayProto_forEach%": ["Array", "prototype", "forEach"], "%ArrayProto_keys%": ["Array", "prototype", "keys"], "%ArrayProto_values%": ["Array", "prototype", "values"], "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"], "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"], "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"], "%BooleanPrototype%": ["Boolean", "prototype"], "%DataViewPrototype%": ["DataView", "prototype"], "%DatePrototype%": ["Date", "prototype"], "%ErrorPrototype%": ["Error", "prototype"], "%EvalErrorPrototype%": ["EvalError", "prototype"], "%Float32ArrayPrototype%": ["Float32Array", "prototype"], "%Float64ArrayPrototype%": ["Float64Array", "prototype"], "%FunctionPrototype%": ["Function", "prototype"], "%Generator%": ["GeneratorFunction", "prototype"], "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"], "%Int8ArrayPrototype%": ["Int8Array", "prototype"], "%Int16ArrayPrototype%": ["Int16Array", "prototype"], "%Int32ArrayPrototype%": ["Int32Array", "prototype"], "%JSONParse%": ["JSON", "parse"], "%JSONStringify%": ["JSON", "stringify"], "%MapPrototype%": ["Map", "prototype"], "%NumberPrototype%": ["Number", "prototype"], "%ObjectPrototype%": ["Object", "prototype"], "%ObjProto_toString%": ["Object", "prototype", "toString"], "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"], "%PromisePrototype%": ["Promise", "prototype"], "%PromiseProto_then%": ["Promise", "prototype", "then"], "%Promise_all%": ["Promise", "all"], "%Promise_reject%": ["Promise", "reject"], "%Promise_resolve%": ["Promise", "resolve"], "%RangeErrorPrototype%": ["RangeError", "prototype"], "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"], "%RegExpPrototype%": ["RegExp", "prototype"], "%SetPrototype%": ["Set", "prototype"], "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"], "%StringPrototype%": ["String", "prototype"], "%SymbolPrototype%": ["Symbol", "prototype"], "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"], "%TypedArrayPrototype%": ["TypedArray", "prototype"], "%TypeErrorPrototype%": ["TypeError", "prototype"], "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"], "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"], "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"], "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"], "%URIErrorPrototype%": ["URIError", "prototype"], "%WeakMapPrototype%": ["WeakMap", "prototype"], "%WeakSetPrototype%": ["WeakSet", "prototype"] }, Um = jm, Lm = Om, Cm = Um.call(Function.call, Array.prototype.concat), $m = Um.call(Function.apply, Array.prototype.splice), Bm = Um.call(Function.call, String.prototype.replace), qm = Um.call(Function.call, String.prototype.slice), Gm = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Wm = /\\(\\)?/g, zm = function(t9) {
  var r2 = qm(t9, 0, 1), e2 = qm(t9, -1);
  if ("%" === r2 && "%" !== e2)
    throw new Am("invalid intrinsic syntax, expected closing `%`");
  if ("%" === e2 && "%" !== r2)
    throw new Am("invalid intrinsic syntax, expected opening `%`");
  var n2 = [];
  return Bm(t9, Gm, function(t10, r3, e3, o2) {
    n2[n2.length] = e3 ? Bm(o2, Wm, "$1") : r3 || t10;
  }), n2;
}, Jm = function(t9, r2) {
  var e2, n2 = t9;
  if (Lm(Dm, n2) && (n2 = "%" + (e2 = Dm[n2])[0] + "%"), Lm(Nm, n2)) {
    var o2 = Nm[n2];
    if (o2 === Rm && (o2 = Mm(n2)), void 0 === o2 && !r2)
      throw new xm("intrinsic " + t9 + " exists, but is not available. Please file an issue!");
    return { alias: e2, name: n2, value: o2 };
  }
  throw new Am("intrinsic " + t9 + " does not exist!");
}, Hm = function(t9, r2) {
  if ("string" != typeof t9 || 0 === t9.length)
    throw new xm("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && "boolean" != typeof r2)
    throw new xm('"allowMissing" argument must be a boolean');
  var e2 = zm(t9), n2 = e2.length > 0 ? e2[0] : "", o2 = Jm("%" + n2 + "%", r2), i2 = o2.name, u2 = o2.value, a2 = false, f2 = o2.alias;
  f2 && (n2 = f2[0], $m(e2, Cm([0, 1], f2)));
  for (var c2 = 1, s2 = true; c2 < e2.length; c2 += 1) {
    var l2 = e2[c2], p2 = qm(l2, 0, 1), v2 = qm(l2, -1);
    if (('"' === p2 || "'" === p2 || "`" === p2 || '"' === v2 || "'" === v2 || "`" === v2) && p2 !== v2)
      throw new Am("property names with quotes must have matching quotes");
    if ("constructor" !== l2 && s2 || (a2 = true), Lm(Nm, i2 = "%" + (n2 += "." + l2) + "%"))
      u2 = Nm[i2];
    else if (null != u2) {
      if (!(l2 in u2)) {
        if (!r2)
          throw new xm("base intrinsic for " + t9 + " exists, but the property is not available.");
        return;
      }
      if (Pm && c2 + 1 >= e2.length) {
        var h2 = Pm(u2, l2);
        u2 = (s2 = !!h2) && "get" in h2 && !("originalValue" in h2.get) ? h2.get : u2[l2];
      } else
        s2 = Lm(u2, l2), u2 = u2[l2];
      s2 && !a2 && (Nm[i2] = u2);
    }
  }
  return u2;
}, Vm = { exports: {} };
!function(t9) {
  var r2 = jm, e2 = Hm, n2 = e2("%Function.prototype.apply%"), o2 = e2("%Function.prototype.call%"), i2 = e2("%Reflect.apply%", true) || r2.call(o2, n2), u2 = e2("%Object.getOwnPropertyDescriptor%", true), a2 = e2("%Object.defineProperty%", true), f2 = e2("%Math.max%");
  if (a2)
    try {
      a2({}, "a", { value: 1 });
    } catch (t10) {
      a2 = null;
    }
  t9.exports = function(t10) {
    var e3 = i2(r2, o2, arguments);
    if (u2 && a2) {
      var n3 = u2(e3, "length");
      n3.configurable && a2(e3, "length", { value: 1 + f2(0, t10.length - (arguments.length - 1)) });
    }
    return e3;
  };
  var c2 = function() {
    return i2(r2, n2, arguments);
  };
  a2 ? a2(t9.exports, "apply", { value: c2 }) : t9.exports.apply = c2;
}(Vm);
var Ym = Hm, Qm = Vm.exports, Km = Qm(Ym("String.prototype.indexOf"));
const Xm = openapi_parser_r(Object.freeze(Object.defineProperty({ __proto__: null, default: {} }, Symbol.toStringTag, { value: "Module" })));
var Zm = "function" == typeof Map && Map.prototype, tg = Object.getOwnPropertyDescriptor && Zm ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, rg = Zm && tg && "function" == typeof tg.get ? tg.get : null, eg = Zm && Map.prototype.forEach, ng = "function" == typeof Set && Set.prototype, og = Object.getOwnPropertyDescriptor && ng ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, ig = ng && og && "function" == typeof og.get ? og.get : null, ug = ng && Set.prototype.forEach, ag = "function" == typeof WeakMap && WeakMap.prototype ? WeakMap.prototype.has : null, fg = "function" == typeof WeakSet && WeakSet.prototype ? WeakSet.prototype.has : null, cg = "function" == typeof WeakRef && WeakRef.prototype ? WeakRef.prototype.deref : null, sg = Boolean.prototype.valueOf, lg = Object.prototype.toString, pg = Function.prototype.toString, vg = String.prototype.match, hg = String.prototype.slice, dg = String.prototype.replace, yg = String.prototype.toUpperCase, bg = String.prototype.toLowerCase, mg = RegExp.prototype.test, gg = Array.prototype.concat, wg = Array.prototype.join, jg = Array.prototype.slice, Og = Math.floor, Ag = "function" == typeof BigInt ? BigInt.prototype.valueOf : null, Sg = Object.getOwnPropertySymbols, xg = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? Symbol.prototype.toString : null, Eg = "function" == typeof Symbol && "object" == typeof Symbol.iterator, Pg = "function" == typeof Symbol && Symbol.toStringTag && (typeof Symbol.toStringTag === Eg || "symbol") ? Symbol.toStringTag : null, kg = Object.prototype.propertyIsEnumerable, _g = ("function" == typeof Reflect ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t9) {
  return t9.__proto__;
} : null);
function Ig(t9, r2) {
  if (t9 === 1 / 0 || t9 === -1 / 0 || t9 != t9 || t9 && t9 > -1e3 && t9 < 1e3 || mg.call(/e/, r2))
    return r2;
  var e2 = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if ("number" == typeof t9) {
    var n2 = t9 < 0 ? -Og(-t9) : Og(t9);
    if (n2 !== t9) {
      var o2 = String(n2), i2 = hg.call(r2, o2.length + 1);
      return dg.call(o2, e2, "$&_") + "." + dg.call(dg.call(i2, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return dg.call(r2, e2, "$&_");
}
var Tg = Xm.custom, Rg = Tg && Dg(Tg) ? Tg : null;
function Fg(t9, r2, e2) {
  var n2 = "double" === (e2.quoteStyle || r2) ? '"' : "'";
  return n2 + t9 + n2;
}
function Ng(t9) {
  return dg.call(String(t9), /"/g, "&quot;");
}
function Mg(t9) {
  return !("[object Array]" !== Cg(t9) || Pg && "object" == typeof t9 && Pg in t9);
}
function Dg(t9) {
  if (Eg)
    return t9 && "object" == typeof t9 && t9 instanceof Symbol;
  if ("symbol" == typeof t9)
    return true;
  if (!t9 || "object" != typeof t9 || !xg)
    return false;
  try {
    return xg.call(t9), true;
  } catch (t10) {
  }
  return false;
}
var Ug = Object.prototype.hasOwnProperty || function(t9) {
  return t9 in this;
};
function Lg(t9, r2) {
  return Ug.call(t9, r2);
}
function Cg(t9) {
  return lg.call(t9);
}
function $g(t9, r2) {
  if (t9.indexOf)
    return t9.indexOf(r2);
  for (var e2 = 0, n2 = t9.length; e2 < n2; e2++)
    if (t9[e2] === r2)
      return e2;
  return -1;
}
function Bg(t9, r2) {
  if (t9.length > r2.maxStringLength) {
    var e2 = t9.length - r2.maxStringLength, n2 = "... " + e2 + " more character" + (e2 > 1 ? "s" : "");
    return Bg(hg.call(t9, 0, r2.maxStringLength), r2) + n2;
  }
  return Fg(dg.call(dg.call(t9, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, qg), "single", r2);
}
function qg(t9) {
  var r2 = t9.charCodeAt(0), e2 = { 8: "b", 9: "t", 10: "n", 12: "f", 13: "r" }[r2];
  return e2 ? "\\" + e2 : "\\x" + (r2 < 16 ? "0" : "") + yg.call(r2.toString(16));
}
function Gg(t9) {
  return "Object(" + t9 + ")";
}
function Wg(t9) {
  return t9 + " { ? }";
}
function zg(t9, r2, e2, n2) {
  return t9 + " (" + r2 + ") {" + (n2 ? Jg(e2, n2) : wg.call(e2, ", ")) + "}";
}
function Jg(t9, r2) {
  if (0 === t9.length)
    return "";
  var e2 = "\n" + r2.prev + r2.base;
  return e2 + wg.call(t9, "," + e2) + "\n" + r2.prev;
}
function Hg(t9, r2) {
  var e2 = Mg(t9), n2 = [];
  if (e2) {
    n2.length = t9.length;
    for (var o2 = 0; o2 < t9.length; o2++)
      n2[o2] = Lg(t9, o2) ? r2(t9[o2], t9) : "";
  }
  var i2, u2 = "function" == typeof Sg ? Sg(t9) : [];
  if (Eg) {
    i2 = {};
    for (var a2 = 0; a2 < u2.length; a2++)
      i2["$" + u2[a2]] = u2[a2];
  }
  for (var f2 in t9)
    Lg(t9, f2) && (e2 && String(Number(f2)) === f2 && f2 < t9.length || Eg && i2["$" + f2] instanceof Symbol || (mg.call(/[^\w$]/, f2) ? n2.push(r2(f2, t9) + ": " + r2(t9[f2], t9)) : n2.push(f2 + ": " + r2(t9[f2], t9))));
  if ("function" == typeof Sg)
    for (var c2 = 0; c2 < u2.length; c2++)
      kg.call(t9, u2[c2]) && n2.push("[" + r2(u2[c2]) + "]: " + r2(t9[u2[c2]], t9));
  return n2;
}
var Vg = Hm, Yg = function(t9, r2) {
  var e2 = Ym(t9, !!r2);
  return "function" == typeof e2 && Km(t9, ".prototype.") > -1 ? Qm(e2) : e2;
}, Qg = function t3(r2, e2, n2, o2) {
  var i2 = e2 || {};
  if (Lg(i2, "quoteStyle") && "single" !== i2.quoteStyle && "double" !== i2.quoteStyle)
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (Lg(i2, "maxStringLength") && ("number" == typeof i2.maxStringLength ? i2.maxStringLength < 0 && i2.maxStringLength !== 1 / 0 : null !== i2.maxStringLength))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var u2 = !Lg(i2, "customInspect") || i2.customInspect;
  if ("boolean" != typeof u2 && "symbol" !== u2)
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (Lg(i2, "indent") && null !== i2.indent && "	" !== i2.indent && !(parseInt(i2.indent, 10) === i2.indent && i2.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (Lg(i2, "numericSeparator") && "boolean" != typeof i2.numericSeparator)
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var a2 = i2.numericSeparator;
  if (void 0 === r2)
    return "undefined";
  if (null === r2)
    return "null";
  if ("boolean" == typeof r2)
    return r2 ? "true" : "false";
  if ("string" == typeof r2)
    return Bg(r2, i2);
  if ("number" == typeof r2) {
    if (0 === r2)
      return 1 / 0 / r2 > 0 ? "0" : "-0";
    var f2 = String(r2);
    return a2 ? Ig(r2, f2) : f2;
  }
  if ("bigint" == typeof r2) {
    var c2 = String(r2) + "n";
    return a2 ? Ig(r2, c2) : c2;
  }
  var s2 = void 0 === i2.depth ? 5 : i2.depth;
  if (void 0 === n2 && (n2 = 0), n2 >= s2 && s2 > 0 && "object" == typeof r2)
    return Mg(r2) ? "[Array]" : "[Object]";
  var l2 = function(t9, r3) {
    var e3;
    if ("	" === t9.indent)
      e3 = "	";
    else {
      if (!("number" == typeof t9.indent && t9.indent > 0))
        return null;
      e3 = wg.call(Array(t9.indent + 1), " ");
    }
    return { base: e3, prev: wg.call(Array(r3 + 1), e3) };
  }(i2, n2);
  if (void 0 === o2)
    o2 = [];
  else if ($g(o2, r2) >= 0)
    return "[Circular]";
  function p2(r3, e3, u3) {
    if (e3 && (o2 = jg.call(o2)).push(e3), u3) {
      var a3 = { depth: i2.depth };
      return Lg(i2, "quoteStyle") && (a3.quoteStyle = i2.quoteStyle), t3(r3, a3, n2 + 1, o2);
    }
    return t3(r3, i2, n2 + 1, o2);
  }
  if ("function" == typeof r2) {
    var v2 = function(t9) {
      if (t9.name)
        return t9.name;
      var r3 = vg.call(pg.call(t9), /^function\s*([\w$]+)/);
      if (r3)
        return r3[1];
      return null;
    }(r2), h2 = Hg(r2, p2);
    return "[Function" + (v2 ? ": " + v2 : " (anonymous)") + "]" + (h2.length > 0 ? " { " + wg.call(h2, ", ") + " }" : "");
  }
  if (Dg(r2)) {
    var d2 = Eg ? dg.call(String(r2), /^(Symbol\(.*\))_[^)]*$/, "$1") : xg.call(r2);
    return "object" != typeof r2 || Eg ? d2 : Gg(d2);
  }
  if (function(t9) {
    if (!t9 || "object" != typeof t9)
      return false;
    if ("undefined" != typeof HTMLElement && t9 instanceof HTMLElement)
      return true;
    return "string" == typeof t9.nodeName && "function" == typeof t9.getAttribute;
  }(r2)) {
    for (var y2 = "<" + bg.call(String(r2.nodeName)), b2 = r2.attributes || [], m2 = 0; m2 < b2.length; m2++)
      y2 += " " + b2[m2].name + "=" + Fg(Ng(b2[m2].value), "double", i2);
    return y2 += ">", r2.childNodes && r2.childNodes.length && (y2 += "..."), y2 += "</" + bg.call(String(r2.nodeName)) + ">";
  }
  if (Mg(r2)) {
    if (0 === r2.length)
      return "[]";
    var g2 = Hg(r2, p2);
    return l2 && !function(t9) {
      for (var r3 = 0; r3 < t9.length; r3++)
        if ($g(t9[r3], "\n") >= 0)
          return false;
      return true;
    }(g2) ? "[" + Jg(g2, l2) + "]" : "[ " + wg.call(g2, ", ") + " ]";
  }
  if (function(t9) {
    return !("[object Error]" !== Cg(t9) || Pg && "object" == typeof t9 && Pg in t9);
  }(r2)) {
    var w2 = Hg(r2, p2);
    return "cause" in r2 && !kg.call(r2, "cause") ? "{ [" + String(r2) + "] " + wg.call(gg.call("[cause]: " + p2(r2.cause), w2), ", ") + " }" : 0 === w2.length ? "[" + String(r2) + "]" : "{ [" + String(r2) + "] " + wg.call(w2, ", ") + " }";
  }
  if ("object" == typeof r2 && u2) {
    if (Rg && "function" == typeof r2[Rg])
      return r2[Rg]();
    if ("symbol" !== u2 && "function" == typeof r2.inspect)
      return r2.inspect();
  }
  if (function(t9) {
    if (!rg || !t9 || "object" != typeof t9)
      return false;
    try {
      rg.call(t9);
      try {
        ig.call(t9);
      } catch (t10) {
        return true;
      }
      return t9 instanceof Map;
    } catch (t10) {
    }
    return false;
  }(r2)) {
    var j2 = [];
    return eg.call(r2, function(t9, e3) {
      j2.push(p2(e3, r2, true) + " => " + p2(t9, r2));
    }), zg("Map", rg.call(r2), j2, l2);
  }
  if (function(t9) {
    if (!ig || !t9 || "object" != typeof t9)
      return false;
    try {
      ig.call(t9);
      try {
        rg.call(t9);
      } catch (t10) {
        return true;
      }
      return t9 instanceof Set;
    } catch (t10) {
    }
    return false;
  }(r2)) {
    var O2 = [];
    return ug.call(r2, function(t9) {
      O2.push(p2(t9, r2));
    }), zg("Set", ig.call(r2), O2, l2);
  }
  if (function(t9) {
    if (!ag || !t9 || "object" != typeof t9)
      return false;
    try {
      ag.call(t9, ag);
      try {
        fg.call(t9, fg);
      } catch (t10) {
        return true;
      }
      return t9 instanceof WeakMap;
    } catch (t10) {
    }
    return false;
  }(r2))
    return Wg("WeakMap");
  if (function(t9) {
    if (!fg || !t9 || "object" != typeof t9)
      return false;
    try {
      fg.call(t9, fg);
      try {
        ag.call(t9, ag);
      } catch (t10) {
        return true;
      }
      return t9 instanceof WeakSet;
    } catch (t10) {
    }
    return false;
  }(r2))
    return Wg("WeakSet");
  if (function(t9) {
    if (!cg || !t9 || "object" != typeof t9)
      return false;
    try {
      return cg.call(t9), true;
    } catch (t10) {
    }
    return false;
  }(r2))
    return Wg("WeakRef");
  if (function(t9) {
    return !("[object Number]" !== Cg(t9) || Pg && "object" == typeof t9 && Pg in t9);
  }(r2))
    return Gg(p2(Number(r2)));
  if (function(t9) {
    if (!t9 || "object" != typeof t9 || !Ag)
      return false;
    try {
      return Ag.call(t9), true;
    } catch (t10) {
    }
    return false;
  }(r2))
    return Gg(p2(Ag.call(r2)));
  if (function(t9) {
    return !("[object Boolean]" !== Cg(t9) || Pg && "object" == typeof t9 && Pg in t9);
  }(r2))
    return Gg(sg.call(r2));
  if (function(t9) {
    return !("[object String]" !== Cg(t9) || Pg && "object" == typeof t9 && Pg in t9);
  }(r2))
    return Gg(p2(String(r2)));
  if (!function(t9) {
    return !("[object Date]" !== Cg(t9) || Pg && "object" == typeof t9 && Pg in t9);
  }(r2) && !function(t9) {
    return !("[object RegExp]" !== Cg(t9) || Pg && "object" == typeof t9 && Pg in t9);
  }(r2)) {
    var A2 = Hg(r2, p2), S2 = _g ? _g(r2) === Object.prototype : r2 instanceof Object || r2.constructor === Object, x2 = r2 instanceof Object ? "" : "null prototype", E2 = !S2 && Pg && Object(r2) === r2 && Pg in r2 ? hg.call(Cg(r2), 8, -1) : x2 ? "Object" : "", P2 = (S2 || "function" != typeof r2.constructor ? "" : r2.constructor.name ? r2.constructor.name + " " : "") + (E2 || x2 ? "[" + wg.call(gg.call([], E2 || [], x2 || []), ": ") + "] " : "");
    return 0 === A2.length ? P2 + "{}" : l2 ? P2 + "{" + Jg(A2, l2) + "}" : P2 + "{ " + wg.call(A2, ", ") + " }";
  }
  return String(r2);
}, Kg = Vg("%TypeError%"), Xg = Vg("%WeakMap%", true), Zg = Vg("%Map%", true), tw = Yg("WeakMap.prototype.get", true), rw = Yg("WeakMap.prototype.set", true), ew = Yg("WeakMap.prototype.has", true), nw = Yg("Map.prototype.get", true), ow = Yg("Map.prototype.set", true), iw = Yg("Map.prototype.has", true), uw = function(t9, r2) {
  for (var e2, n2 = t9; null !== (e2 = n2.next); n2 = e2)
    if (e2.key === r2)
      return n2.next = e2.next, e2.next = t9.next, t9.next = e2, e2;
}, aw = String.prototype.replace, fw = /%20/g, cw = "RFC3986", sw = { default: cw, formatters: { RFC1738: function(t9) {
  return aw.call(t9, fw, "+");
}, RFC3986: function(t9) {
  return String(t9);
} }, RFC1738: "RFC1738", RFC3986: cw }, lw = sw, pw = Object.prototype.hasOwnProperty, vw = Array.isArray, hw = function() {
  for (var t9 = [], r2 = 0; r2 < 256; ++r2)
    t9.push("%" + ((r2 < 16 ? "0" : "") + r2.toString(16)).toUpperCase());
  return t9;
}(), dw = function(t9, r2) {
  for (var e2 = r2 && r2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, n2 = 0; n2 < t9.length; ++n2)
    void 0 !== t9[n2] && (e2[n2] = t9[n2]);
  return e2;
}, yw = { arrayToObject: dw, assign: function(t9, r2) {
  return Object.keys(r2).reduce(function(t10, e2) {
    return t10[e2] = r2[e2], t10;
  }, t9);
}, combine: function(t9, r2) {
  return [].concat(t9, r2);
}, compact: function(t9) {
  for (var r2 = [{ obj: { o: t9 }, prop: "o" }], e2 = [], n2 = 0; n2 < r2.length; ++n2)
    for (var o2 = r2[n2], i2 = o2.obj[o2.prop], u2 = Object.keys(i2), a2 = 0; a2 < u2.length; ++a2) {
      var f2 = u2[a2], c2 = i2[f2];
      "object" == typeof c2 && null !== c2 && -1 === e2.indexOf(c2) && (r2.push({ obj: i2, prop: f2 }), e2.push(c2));
    }
  return function(t10) {
    for (; t10.length > 1; ) {
      var r3 = t10.pop(), e3 = r3.obj[r3.prop];
      if (vw(e3)) {
        for (var n3 = [], o3 = 0; o3 < e3.length; ++o3)
          void 0 !== e3[o3] && n3.push(e3[o3]);
        r3.obj[r3.prop] = n3;
      }
    }
  }(r2), t9;
}, decode: function(t9, r2, e2) {
  var n2 = t9.replace(/\+/g, " ");
  if ("iso-8859-1" === e2)
    return n2.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n2);
  } catch (t10) {
    return n2;
  }
}, encode: function(t9, r2, e2, n2, o2) {
  if (0 === t9.length)
    return t9;
  var i2 = t9;
  if ("symbol" == typeof t9 ? i2 = Symbol.prototype.toString.call(t9) : "string" != typeof t9 && (i2 = String(t9)), "iso-8859-1" === e2)
    return escape(i2).replace(/%u[0-9a-f]{4}/gi, function(t10) {
      return "%26%23" + parseInt(t10.slice(2), 16) + "%3B";
    });
  for (var u2 = "", a2 = 0; a2 < i2.length; ++a2) {
    var f2 = i2.charCodeAt(a2);
    45 === f2 || 46 === f2 || 95 === f2 || 126 === f2 || f2 >= 48 && f2 <= 57 || f2 >= 65 && f2 <= 90 || f2 >= 97 && f2 <= 122 || o2 === lw.RFC1738 && (40 === f2 || 41 === f2) ? u2 += i2.charAt(a2) : f2 < 128 ? u2 += hw[f2] : f2 < 2048 ? u2 += hw[192 | f2 >> 6] + hw[128 | 63 & f2] : f2 < 55296 || f2 >= 57344 ? u2 += hw[224 | f2 >> 12] + hw[128 | f2 >> 6 & 63] + hw[128 | 63 & f2] : (a2 += 1, f2 = 65536 + ((1023 & f2) << 10 | 1023 & i2.charCodeAt(a2)), u2 += hw[240 | f2 >> 18] + hw[128 | f2 >> 12 & 63] + hw[128 | f2 >> 6 & 63] + hw[128 | 63 & f2]);
  }
  return u2;
}, isBuffer: function(t9) {
  return !(!t9 || "object" != typeof t9) && !!(t9.constructor && t9.constructor.isBuffer && t9.constructor.isBuffer(t9));
}, isRegExp: function(t9) {
  return "[object RegExp]" === Object.prototype.toString.call(t9);
}, maybeMap: function(t9, r2) {
  if (vw(t9)) {
    for (var e2 = [], n2 = 0; n2 < t9.length; n2 += 1)
      e2.push(r2(t9[n2]));
    return e2;
  }
  return r2(t9);
}, merge: function t4(r2, e2, n2) {
  if (!e2)
    return r2;
  if ("object" != typeof e2) {
    if (vw(r2))
      r2.push(e2);
    else {
      if (!r2 || "object" != typeof r2)
        return [r2, e2];
      (n2 && (n2.plainObjects || n2.allowPrototypes) || !pw.call(Object.prototype, e2)) && (r2[e2] = true);
    }
    return r2;
  }
  if (!r2 || "object" != typeof r2)
    return [r2].concat(e2);
  var o2 = r2;
  return vw(r2) && !vw(e2) && (o2 = dw(r2, n2)), vw(r2) && vw(e2) ? (e2.forEach(function(e3, o3) {
    if (pw.call(r2, o3)) {
      var i2 = r2[o3];
      i2 && "object" == typeof i2 && e3 && "object" == typeof e3 ? r2[o3] = t4(i2, e3, n2) : r2.push(e3);
    } else
      r2[o3] = e3;
  }), r2) : Object.keys(e2).reduce(function(r3, o3) {
    var i2 = e2[o3];
    return pw.call(r3, o3) ? r3[o3] = t4(r3[o3], i2, n2) : r3[o3] = i2, r3;
  }, o2);
} }, bw = function() {
  var t9, r2, e2, n2 = { assert: function(t10) {
    if (!n2.has(t10))
      throw new Kg("Side channel does not contain " + Qg(t10));
  }, get: function(n3) {
    if (Xg && n3 && ("object" == typeof n3 || "function" == typeof n3)) {
      if (t9)
        return tw(t9, n3);
    } else if (Zg) {
      if (r2)
        return nw(r2, n3);
    } else if (e2)
      return function(t10, r3) {
        var e3 = uw(t10, r3);
        return e3 && e3.value;
      }(e2, n3);
  }, has: function(n3) {
    if (Xg && n3 && ("object" == typeof n3 || "function" == typeof n3)) {
      if (t9)
        return ew(t9, n3);
    } else if (Zg) {
      if (r2)
        return iw(r2, n3);
    } else if (e2)
      return function(t10, r3) {
        return !!uw(t10, r3);
      }(e2, n3);
    return false;
  }, set: function(n3, o2) {
    Xg && n3 && ("object" == typeof n3 || "function" == typeof n3) ? (t9 || (t9 = new Xg()), rw(t9, n3, o2)) : Zg ? (r2 || (r2 = new Zg()), ow(r2, n3, o2)) : (e2 || (e2 = { key: {}, next: null }), function(t10, r3, e3) {
      var n4 = uw(t10, r3);
      n4 ? n4.value = e3 : t10.next = { key: r3, next: t10.next, value: e3 };
    }(e2, n3, o2));
  } };
  return n2;
}, mw = yw, gw = sw, ww = Object.prototype.hasOwnProperty, jw = { brackets: function(t9) {
  return t9 + "[]";
}, comma: "comma", indices: function(t9, r2) {
  return t9 + "[" + r2 + "]";
}, repeat: function(t9) {
  return t9;
} }, Ow = Array.isArray, Aw = String.prototype.split, Sw = Array.prototype.push, xw = function(t9, r2) {
  Sw.apply(t9, Ow(r2) ? r2 : [r2]);
}, Ew = Date.prototype.toISOString, Pw = gw.default, kw = { addQueryPrefix: false, allowDots: false, charset: "utf-8", charsetSentinel: false, delimiter: "&", encode: true, encoder: mw.encode, encodeValuesOnly: false, format: Pw, formatter: gw.formatters[Pw], indices: false, serializeDate: function(t9) {
  return Ew.call(t9);
}, skipNulls: false, strictNullHandling: false }, _w = {}, Iw = function t5(r2, e2, n2, o2, i2, u2, a2, f2, c2, s2, l2, p2, v2, h2, d2) {
  for (var y2, b2 = r2, m2 = d2, g2 = 0, w2 = false; void 0 !== (m2 = m2.get(_w)) && !w2; ) {
    var j2 = m2.get(r2);
    if (g2 += 1, void 0 !== j2) {
      if (j2 === g2)
        throw new RangeError("Cyclic object value");
      w2 = true;
    }
    void 0 === m2.get(_w) && (g2 = 0);
  }
  if ("function" == typeof a2 ? b2 = a2(e2, b2) : b2 instanceof Date ? b2 = s2(b2) : "comma" === n2 && Ow(b2) && (b2 = mw.maybeMap(b2, function(t9) {
    return t9 instanceof Date ? s2(t9) : t9;
  })), null === b2) {
    if (o2)
      return u2 && !v2 ? u2(e2, kw.encoder, h2, "key", l2) : e2;
    b2 = "";
  }
  if ("string" == typeof (y2 = b2) || "number" == typeof y2 || "boolean" == typeof y2 || "symbol" == typeof y2 || "bigint" == typeof y2 || mw.isBuffer(b2)) {
    if (u2) {
      var O2 = v2 ? e2 : u2(e2, kw.encoder, h2, "key", l2);
      if ("comma" === n2 && v2) {
        for (var A2 = Aw.call(String(b2), ","), S2 = "", x2 = 0; x2 < A2.length; ++x2)
          S2 += (0 === x2 ? "" : ",") + p2(u2(A2[x2], kw.encoder, h2, "value", l2));
        return [p2(O2) + "=" + S2];
      }
      return [p2(O2) + "=" + p2(u2(b2, kw.encoder, h2, "value", l2))];
    }
    return [p2(e2) + "=" + p2(String(b2))];
  }
  var E2, P2 = [];
  if (void 0 === b2)
    return P2;
  if ("comma" === n2 && Ow(b2))
    E2 = [{ value: b2.length > 0 ? b2.join(",") || null : void 0 }];
  else if (Ow(a2))
    E2 = a2;
  else {
    var k2 = Object.keys(b2);
    E2 = f2 ? k2.sort(f2) : k2;
  }
  for (var _2 = 0; _2 < E2.length; ++_2) {
    var I2 = E2[_2], T2 = "object" == typeof I2 && void 0 !== I2.value ? I2.value : b2[I2];
    if (!i2 || null !== T2) {
      var R2 = Ow(b2) ? "function" == typeof n2 ? n2(e2, I2) : e2 : e2 + (c2 ? "." + I2 : "[" + I2 + "]");
      d2.set(r2, g2);
      var F2 = bw();
      F2.set(_w, d2), xw(P2, t5(T2, R2, n2, o2, i2, u2, a2, f2, c2, s2, l2, p2, v2, h2, F2));
    }
  }
  return P2;
}, Tw = yw, Rw = Object.prototype.hasOwnProperty, Fw = Array.isArray, Nw = { allowDots: false, allowPrototypes: false, allowSparse: false, arrayLimit: 20, charset: "utf-8", charsetSentinel: false, comma: false, decoder: Tw.decode, delimiter: "&", depth: 5, ignoreQueryPrefix: false, interpretNumericEntities: false, parameterLimit: 1e3, parseArrays: true, plainObjects: false, strictNullHandling: false }, Mw = function(t9) {
  return t9.replace(/&#(\d+);/g, function(t10, r2) {
    return String.fromCharCode(parseInt(r2, 10));
  });
}, Dw = function(t9, r2) {
  return t9 && "string" == typeof t9 && r2.comma && t9.indexOf(",") > -1 ? t9.split(",") : t9;
}, Uw = function(t9, r2, e2, n2) {
  if (t9) {
    var o2 = e2.allowDots ? t9.replace(/\.([^.[]+)/g, "[$1]") : t9, i2 = /(\[[^[\]]*])/g, u2 = e2.depth > 0 && /(\[[^[\]]*])/.exec(o2), a2 = u2 ? o2.slice(0, u2.index) : o2, f2 = [];
    if (a2) {
      if (!e2.plainObjects && Rw.call(Object.prototype, a2) && !e2.allowPrototypes)
        return;
      f2.push(a2);
    }
    for (var c2 = 0; e2.depth > 0 && null !== (u2 = i2.exec(o2)) && c2 < e2.depth; ) {
      if (c2 += 1, !e2.plainObjects && Rw.call(Object.prototype, u2[1].slice(1, -1)) && !e2.allowPrototypes)
        return;
      f2.push(u2[1]);
    }
    return u2 && f2.push("[" + o2.slice(u2.index) + "]"), function(t10, r3, e3, n3) {
      for (var o3 = n3 ? r3 : Dw(r3, e3), i3 = t10.length - 1; i3 >= 0; --i3) {
        var u3, a3 = t10[i3];
        if ("[]" === a3 && e3.parseArrays)
          u3 = [].concat(o3);
        else {
          u3 = e3.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var f3 = "[" === a3.charAt(0) && "]" === a3.charAt(a3.length - 1) ? a3.slice(1, -1) : a3, c3 = parseInt(f3, 10);
          e3.parseArrays || "" !== f3 ? !isNaN(c3) && a3 !== f3 && String(c3) === f3 && c3 >= 0 && e3.parseArrays && c3 <= e3.arrayLimit ? (u3 = [])[c3] = o3 : "__proto__" !== f3 && (u3[f3] = o3) : u3 = { 0: o3 };
        }
        o3 = u3;
      }
      return o3;
    }(f2, r2, e2, n2);
  }
}, Lw = function(t9, r2) {
  var e2, n2 = t9, o2 = function(t10) {
    if (!t10)
      return kw;
    if (null !== t10.encoder && void 0 !== t10.encoder && "function" != typeof t10.encoder)
      throw new TypeError("Encoder has to be a function.");
    var r3 = t10.charset || kw.charset;
    if (void 0 !== t10.charset && "utf-8" !== t10.charset && "iso-8859-1" !== t10.charset)
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var e3 = gw.default;
    if (void 0 !== t10.format) {
      if (!ww.call(gw.formatters, t10.format))
        throw new TypeError("Unknown format option provided.");
      e3 = t10.format;
    }
    var n3 = gw.formatters[e3], o3 = kw.filter;
    return ("function" == typeof t10.filter || Ow(t10.filter)) && (o3 = t10.filter), { addQueryPrefix: "boolean" == typeof t10.addQueryPrefix ? t10.addQueryPrefix : kw.addQueryPrefix, allowDots: void 0 === t10.allowDots ? kw.allowDots : !!t10.allowDots, charset: r3, charsetSentinel: "boolean" == typeof t10.charsetSentinel ? t10.charsetSentinel : kw.charsetSentinel, delimiter: void 0 === t10.delimiter ? kw.delimiter : t10.delimiter, encode: "boolean" == typeof t10.encode ? t10.encode : kw.encode, encoder: "function" == typeof t10.encoder ? t10.encoder : kw.encoder, encodeValuesOnly: "boolean" == typeof t10.encodeValuesOnly ? t10.encodeValuesOnly : kw.encodeValuesOnly, filter: o3, format: e3, formatter: n3, serializeDate: "function" == typeof t10.serializeDate ? t10.serializeDate : kw.serializeDate, skipNulls: "boolean" == typeof t10.skipNulls ? t10.skipNulls : kw.skipNulls, sort: "function" == typeof t10.sort ? t10.sort : null, strictNullHandling: "boolean" == typeof t10.strictNullHandling ? t10.strictNullHandling : kw.strictNullHandling };
  }(r2);
  "function" == typeof o2.filter ? n2 = (0, o2.filter)("", n2) : Ow(o2.filter) && (e2 = o2.filter);
  var i2, u2 = [];
  if ("object" != typeof n2 || null === n2)
    return "";
  i2 = r2 && r2.arrayFormat in jw ? r2.arrayFormat : r2 && "indices" in r2 ? r2.indices ? "indices" : "repeat" : "indices";
  var a2 = jw[i2];
  e2 || (e2 = Object.keys(n2)), o2.sort && e2.sort(o2.sort);
  for (var f2 = bw(), c2 = 0; c2 < e2.length; ++c2) {
    var s2 = e2[c2];
    o2.skipNulls && null === n2[s2] || xw(u2, Iw(n2[s2], s2, a2, o2.strictNullHandling, o2.skipNulls, o2.encode ? o2.encoder : null, o2.filter, o2.sort, o2.allowDots, o2.serializeDate, o2.format, o2.formatter, o2.encodeValuesOnly, o2.charset, f2));
  }
  var l2 = u2.join(o2.delimiter), p2 = true === o2.addQueryPrefix ? "?" : "";
  return o2.charsetSentinel && ("iso-8859-1" === o2.charset ? p2 += "utf8=%26%2310003%3B&" : p2 += "utf8=%E2%9C%93&"), l2.length > 0 ? p2 + l2 : "";
}, Cw = function(t9, r2) {
  var e2 = function(t10) {
    if (!t10)
      return Nw;
    if (null !== t10.decoder && void 0 !== t10.decoder && "function" != typeof t10.decoder)
      throw new TypeError("Decoder has to be a function.");
    if (void 0 !== t10.charset && "utf-8" !== t10.charset && "iso-8859-1" !== t10.charset)
      throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    var r3 = void 0 === t10.charset ? Nw.charset : t10.charset;
    return { allowDots: void 0 === t10.allowDots ? Nw.allowDots : !!t10.allowDots, allowPrototypes: "boolean" == typeof t10.allowPrototypes ? t10.allowPrototypes : Nw.allowPrototypes, allowSparse: "boolean" == typeof t10.allowSparse ? t10.allowSparse : Nw.allowSparse, arrayLimit: "number" == typeof t10.arrayLimit ? t10.arrayLimit : Nw.arrayLimit, charset: r3, charsetSentinel: "boolean" == typeof t10.charsetSentinel ? t10.charsetSentinel : Nw.charsetSentinel, comma: "boolean" == typeof t10.comma ? t10.comma : Nw.comma, decoder: "function" == typeof t10.decoder ? t10.decoder : Nw.decoder, delimiter: "string" == typeof t10.delimiter || Tw.isRegExp(t10.delimiter) ? t10.delimiter : Nw.delimiter, depth: "number" == typeof t10.depth || false === t10.depth ? +t10.depth : Nw.depth, ignoreQueryPrefix: true === t10.ignoreQueryPrefix, interpretNumericEntities: "boolean" == typeof t10.interpretNumericEntities ? t10.interpretNumericEntities : Nw.interpretNumericEntities, parameterLimit: "number" == typeof t10.parameterLimit ? t10.parameterLimit : Nw.parameterLimit, parseArrays: false !== t10.parseArrays, plainObjects: "boolean" == typeof t10.plainObjects ? t10.plainObjects : Nw.plainObjects, strictNullHandling: "boolean" == typeof t10.strictNullHandling ? t10.strictNullHandling : Nw.strictNullHandling };
  }(r2);
  if ("" === t9 || null == t9)
    return e2.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n2 = "string" == typeof t9 ? function(t10, r3) {
    var e3, n3 = {}, o3 = r3.ignoreQueryPrefix ? t10.replace(/^\?/, "") : t10, i3 = r3.parameterLimit === 1 / 0 ? void 0 : r3.parameterLimit, u3 = o3.split(r3.delimiter, i3), a3 = -1, f3 = r3.charset;
    if (r3.charsetSentinel)
      for (e3 = 0; e3 < u3.length; ++e3)
        0 === u3[e3].indexOf("utf8=") && ("utf8=%E2%9C%93" === u3[e3] ? f3 = "utf-8" : "utf8=%26%2310003%3B" === u3[e3] && (f3 = "iso-8859-1"), a3 = e3, e3 = u3.length);
    for (e3 = 0; e3 < u3.length; ++e3)
      if (e3 !== a3) {
        var c2, s2, l2 = u3[e3], p2 = l2.indexOf("]="), v2 = -1 === p2 ? l2.indexOf("=") : p2 + 1;
        -1 === v2 ? (c2 = r3.decoder(l2, Nw.decoder, f3, "key"), s2 = r3.strictNullHandling ? null : "") : (c2 = r3.decoder(l2.slice(0, v2), Nw.decoder, f3, "key"), s2 = Tw.maybeMap(Dw(l2.slice(v2 + 1), r3), function(t11) {
          return r3.decoder(t11, Nw.decoder, f3, "value");
        })), s2 && r3.interpretNumericEntities && "iso-8859-1" === f3 && (s2 = Mw(s2)), l2.indexOf("[]=") > -1 && (s2 = Fw(s2) ? [s2] : s2), Rw.call(n3, c2) ? n3[c2] = Tw.combine(n3[c2], s2) : n3[c2] = s2;
      }
    return n3;
  }(t9, e2) : t9, o2 = e2.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i2 = Object.keys(n2), u2 = 0; u2 < i2.length; ++u2) {
    var a2 = i2[u2], f2 = Uw(a2, n2[a2], e2, "string" == typeof t9);
    o2 = Tw.merge(o2, f2, e2);
  }
  return true === e2.allowSparse ? o2 : Tw.compact(o2);
}, $w = { formats: sw, parse: Cw, stringify: Lw };
/*! js-yaml 4.1.0 https://github.com/nodeca/js-yaml @license MIT */
function Bw(t9) {
  return null == t9;
}
var qw = function(t9, r2) {
  var e2, n2, o2, i2;
  if (r2)
    for (e2 = 0, n2 = (i2 = Object.keys(r2)).length; e2 < n2; e2 += 1)
      t9[o2 = i2[e2]] = r2[o2];
  return t9;
}, Gw = { isNothing: Bw, isObject: function(t9) {
  return "object" == typeof t9 && null !== t9;
}, toArray: function(t9) {
  return Array.isArray(t9) ? t9 : Bw(t9) ? [] : [t9];
}, repeat: function(t9, r2) {
  var e2, n2 = "";
  for (e2 = 0; e2 < r2; e2 += 1)
    n2 += t9;
  return n2;
}, isNegativeZero: function(t9) {
  return 0 === t9 && Number.NEGATIVE_INFINITY === 1 / t9;
}, extend: qw };
function Ww(t9, r2) {
  var e2 = "", n2 = t9.reason || "(unknown reason)";
  return t9.mark ? (t9.mark.name && (e2 += 'in "' + t9.mark.name + '" '), e2 += "(" + (t9.mark.line + 1) + ":" + (t9.mark.column + 1) + ")", !r2 && t9.mark.snippet && (e2 += "\n\n" + t9.mark.snippet), n2 + " " + e2) : n2;
}
function zw(t9, r2) {
  Error.call(this), this.name = "YAMLException", this.reason = t9, this.mark = r2, this.message = Ww(this, false), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack || "";
}
zw.prototype = Object.create(Error.prototype), zw.prototype.constructor = zw, zw.prototype.toString = function(t9) {
  return this.name + ": " + Ww(this, t9);
};
var Jw = zw;
function Hw(t9, r2, e2, n2, o2) {
  var i2 = "", u2 = "", a2 = Math.floor(o2 / 2) - 1;
  return n2 - r2 > a2 && (r2 = n2 - a2 + (i2 = " ... ").length), e2 - n2 > a2 && (e2 = n2 + a2 - (u2 = " ...").length), { str: i2 + t9.slice(r2, e2).replace(/\t/g, "\u2192") + u2, pos: n2 - r2 + i2.length };
}
function Vw(t9, r2) {
  return Gw.repeat(" ", r2 - t9.length) + t9;
}
var Yw = function(t9, r2) {
  if (r2 = Object.create(r2 || null), !t9.buffer)
    return null;
  r2.maxLength || (r2.maxLength = 79), "number" != typeof r2.indent && (r2.indent = 1), "number" != typeof r2.linesBefore && (r2.linesBefore = 3), "number" != typeof r2.linesAfter && (r2.linesAfter = 2);
  for (var e2, n2 = /\r?\n|\r|\0/g, o2 = [0], i2 = [], u2 = -1; e2 = n2.exec(t9.buffer); )
    i2.push(e2.index), o2.push(e2.index + e2[0].length), t9.position <= e2.index && u2 < 0 && (u2 = o2.length - 2);
  u2 < 0 && (u2 = o2.length - 1);
  var a2, f2, c2 = "", s2 = Math.min(t9.line + r2.linesAfter, i2.length).toString().length, l2 = r2.maxLength - (r2.indent + s2 + 3);
  for (a2 = 1; a2 <= r2.linesBefore && !(u2 - a2 < 0); a2++)
    f2 = Hw(t9.buffer, o2[u2 - a2], i2[u2 - a2], t9.position - (o2[u2] - o2[u2 - a2]), l2), c2 = Gw.repeat(" ", r2.indent) + Vw((t9.line - a2 + 1).toString(), s2) + " | " + f2.str + "\n" + c2;
  for (f2 = Hw(t9.buffer, o2[u2], i2[u2], t9.position, l2), c2 += Gw.repeat(" ", r2.indent) + Vw((t9.line + 1).toString(), s2) + " | " + f2.str + "\n", c2 += Gw.repeat("-", r2.indent + s2 + 3 + f2.pos) + "^\n", a2 = 1; a2 <= r2.linesAfter && !(u2 + a2 >= i2.length); a2++)
    f2 = Hw(t9.buffer, o2[u2 + a2], i2[u2 + a2], t9.position - (o2[u2] - o2[u2 + a2]), l2), c2 += Gw.repeat(" ", r2.indent) + Vw((t9.line + a2 + 1).toString(), s2) + " | " + f2.str + "\n";
  return c2.replace(/\n$/, "");
}, Qw = ["kind", "multi", "resolve", "construct", "instanceOf", "predicate", "represent", "representName", "defaultStyle", "styleAliases"], Kw = ["scalar", "sequence", "mapping"];
var Xw = function(t9, r2) {
  if (r2 = r2 || {}, Object.keys(r2).forEach(function(r3) {
    if (-1 === Qw.indexOf(r3))
      throw new Jw('Unknown option "' + r3 + '" is met in definition of "' + t9 + '" YAML type.');
  }), this.options = r2, this.tag = t9, this.kind = r2.kind || null, this.resolve = r2.resolve || function() {
    return true;
  }, this.construct = r2.construct || function(t10) {
    return t10;
  }, this.instanceOf = r2.instanceOf || null, this.predicate = r2.predicate || null, this.represent = r2.represent || null, this.representName = r2.representName || null, this.defaultStyle = r2.defaultStyle || null, this.multi = r2.multi || false, this.styleAliases = function(t10) {
    var r3 = {};
    return null !== t10 && Object.keys(t10).forEach(function(e2) {
      t10[e2].forEach(function(t11) {
        r3[String(t11)] = e2;
      });
    }), r3;
  }(r2.styleAliases || null), -1 === Kw.indexOf(this.kind))
    throw new Jw('Unknown kind "' + this.kind + '" is specified for "' + t9 + '" YAML type.');
};
function Zw(t9, r2) {
  var e2 = [];
  return t9[r2].forEach(function(t10) {
    var r3 = e2.length;
    e2.forEach(function(e3, n2) {
      e3.tag === t10.tag && e3.kind === t10.kind && e3.multi === t10.multi && (r3 = n2);
    }), e2[r3] = t10;
  }), e2;
}
function tj(t9) {
  return this.extend(t9);
}
tj.prototype.extend = function(t9) {
  var r2 = [], e2 = [];
  if (t9 instanceof Xw)
    e2.push(t9);
  else if (Array.isArray(t9))
    e2 = e2.concat(t9);
  else {
    if (!t9 || !Array.isArray(t9.implicit) && !Array.isArray(t9.explicit))
      throw new Jw("Schema.extend argument should be a Type, [ Type ], or a schema definition ({ implicit: [...], explicit: [...] })");
    t9.implicit && (r2 = r2.concat(t9.implicit)), t9.explicit && (e2 = e2.concat(t9.explicit));
  }
  r2.forEach(function(t10) {
    if (!(t10 instanceof Xw))
      throw new Jw("Specified list of YAML types (or a single Type object) contains a non-Type object.");
    if (t10.loadKind && "scalar" !== t10.loadKind)
      throw new Jw("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.");
    if (t10.multi)
      throw new Jw("There is a multi type in the implicit list of a schema. Multi tags can only be listed as explicit.");
  }), e2.forEach(function(t10) {
    if (!(t10 instanceof Xw))
      throw new Jw("Specified list of YAML types (or a single Type object) contains a non-Type object.");
  });
  var n2 = Object.create(tj.prototype);
  return n2.implicit = (this.implicit || []).concat(r2), n2.explicit = (this.explicit || []).concat(e2), n2.compiledImplicit = Zw(n2, "implicit"), n2.compiledExplicit = Zw(n2, "explicit"), n2.compiledTypeMap = function() {
    var t10, r3, e3 = { scalar: {}, sequence: {}, mapping: {}, fallback: {}, multi: { scalar: [], sequence: [], mapping: [], fallback: [] } };
    function n3(t11) {
      t11.multi ? (e3.multi[t11.kind].push(t11), e3.multi.fallback.push(t11)) : e3[t11.kind][t11.tag] = e3.fallback[t11.tag] = t11;
    }
    for (t10 = 0, r3 = arguments.length; t10 < r3; t10 += 1)
      arguments[t10].forEach(n3);
    return e3;
  }(n2.compiledImplicit, n2.compiledExplicit), n2;
};
var rj = tj, ej = new Xw("tag:yaml.org,2002:str", { kind: "scalar", construct: function(t9) {
  return null !== t9 ? t9 : "";
} }), nj = new Xw("tag:yaml.org,2002:seq", { kind: "sequence", construct: function(t9) {
  return null !== t9 ? t9 : [];
} }), oj = new Xw("tag:yaml.org,2002:map", { kind: "mapping", construct: function(t9) {
  return null !== t9 ? t9 : {};
} }), ij = new rj({ explicit: [ej, nj, oj] });
var uj = new Xw("tag:yaml.org,2002:null", { kind: "scalar", resolve: function(t9) {
  if (null === t9)
    return true;
  var r2 = t9.length;
  return 1 === r2 && "~" === t9 || 4 === r2 && ("null" === t9 || "Null" === t9 || "NULL" === t9);
}, construct: function() {
  return null;
}, predicate: function(t9) {
  return null === t9;
}, represent: { canonical: function() {
  return "~";
}, lowercase: function() {
  return "null";
}, uppercase: function() {
  return "NULL";
}, camelcase: function() {
  return "Null";
}, empty: function() {
  return "";
} }, defaultStyle: "lowercase" });
var aj = new Xw("tag:yaml.org,2002:bool", { kind: "scalar", resolve: function(t9) {
  if (null === t9)
    return false;
  var r2 = t9.length;
  return 4 === r2 && ("true" === t9 || "True" === t9 || "TRUE" === t9) || 5 === r2 && ("false" === t9 || "False" === t9 || "FALSE" === t9);
}, construct: function(t9) {
  return "true" === t9 || "True" === t9 || "TRUE" === t9;
}, predicate: function(t9) {
  return "[object Boolean]" === Object.prototype.toString.call(t9);
}, represent: { lowercase: function(t9) {
  return t9 ? "true" : "false";
}, uppercase: function(t9) {
  return t9 ? "TRUE" : "FALSE";
}, camelcase: function(t9) {
  return t9 ? "True" : "False";
} }, defaultStyle: "lowercase" });
function fj(t9) {
  return 48 <= t9 && t9 <= 55;
}
function cj(t9) {
  return 48 <= t9 && t9 <= 57;
}
var sj = new Xw("tag:yaml.org,2002:int", { kind: "scalar", resolve: function(t9) {
  if (null === t9)
    return false;
  var r2, e2, n2 = t9.length, o2 = 0, i2 = false;
  if (!n2)
    return false;
  if ("-" !== (r2 = t9[o2]) && "+" !== r2 || (r2 = t9[++o2]), "0" === r2) {
    if (o2 + 1 === n2)
      return true;
    if ("b" === (r2 = t9[++o2])) {
      for (o2++; o2 < n2; o2++)
        if ("_" !== (r2 = t9[o2])) {
          if ("0" !== r2 && "1" !== r2)
            return false;
          i2 = true;
        }
      return i2 && "_" !== r2;
    }
    if ("x" === r2) {
      for (o2++; o2 < n2; o2++)
        if ("_" !== (r2 = t9[o2])) {
          if (!(48 <= (e2 = t9.charCodeAt(o2)) && e2 <= 57 || 65 <= e2 && e2 <= 70 || 97 <= e2 && e2 <= 102))
            return false;
          i2 = true;
        }
      return i2 && "_" !== r2;
    }
    if ("o" === r2) {
      for (o2++; o2 < n2; o2++)
        if ("_" !== (r2 = t9[o2])) {
          if (!fj(t9.charCodeAt(o2)))
            return false;
          i2 = true;
        }
      return i2 && "_" !== r2;
    }
  }
  if ("_" === r2)
    return false;
  for (; o2 < n2; o2++)
    if ("_" !== (r2 = t9[o2])) {
      if (!cj(t9.charCodeAt(o2)))
        return false;
      i2 = true;
    }
  return !(!i2 || "_" === r2);
}, construct: function(t9) {
  var r2, e2 = t9, n2 = 1;
  if (-1 !== e2.indexOf("_") && (e2 = e2.replace(/_/g, "")), "-" !== (r2 = e2[0]) && "+" !== r2 || ("-" === r2 && (n2 = -1), r2 = (e2 = e2.slice(1))[0]), "0" === e2)
    return 0;
  if ("0" === r2) {
    if ("b" === e2[1])
      return n2 * parseInt(e2.slice(2), 2);
    if ("x" === e2[1])
      return n2 * parseInt(e2.slice(2), 16);
    if ("o" === e2[1])
      return n2 * parseInt(e2.slice(2), 8);
  }
  return n2 * parseInt(e2, 10);
}, predicate: function(t9) {
  return "[object Number]" === Object.prototype.toString.call(t9) && t9 % 1 == 0 && !Gw.isNegativeZero(t9);
}, represent: { binary: function(t9) {
  return t9 >= 0 ? "0b" + t9.toString(2) : "-0b" + t9.toString(2).slice(1);
}, octal: function(t9) {
  return t9 >= 0 ? "0o" + t9.toString(8) : "-0o" + t9.toString(8).slice(1);
}, decimal: function(t9) {
  return t9.toString(10);
}, hexadecimal: function(t9) {
  return t9 >= 0 ? "0x" + t9.toString(16).toUpperCase() : "-0x" + t9.toString(16).toUpperCase().slice(1);
} }, defaultStyle: "decimal", styleAliases: { binary: [2, "bin"], octal: [8, "oct"], decimal: [10, "dec"], hexadecimal: [16, "hex"] } }), lj = new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)(?:\\.[0-9_]*)?(?:[eE][-+]?[0-9]+)?|\\.[0-9_]+(?:[eE][-+]?[0-9]+)?|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");
var pj = /^[-+]?[0-9]+e/;
var vj = new Xw("tag:yaml.org,2002:float", { kind: "scalar", resolve: function(t9) {
  return null !== t9 && !(!lj.test(t9) || "_" === t9[t9.length - 1]);
}, construct: function(t9) {
  var r2, e2;
  return e2 = "-" === (r2 = t9.replace(/_/g, "").toLowerCase())[0] ? -1 : 1, "+-".indexOf(r2[0]) >= 0 && (r2 = r2.slice(1)), ".inf" === r2 ? 1 === e2 ? Number.POSITIVE_INFINITY : Number.NEGATIVE_INFINITY : ".nan" === r2 ? NaN : e2 * parseFloat(r2, 10);
}, predicate: function(t9) {
  return "[object Number]" === Object.prototype.toString.call(t9) && (t9 % 1 != 0 || Gw.isNegativeZero(t9));
}, represent: function(t9, r2) {
  var e2;
  if (isNaN(t9))
    switch (r2) {
      case "lowercase":
        return ".nan";
      case "uppercase":
        return ".NAN";
      case "camelcase":
        return ".NaN";
    }
  else if (Number.POSITIVE_INFINITY === t9)
    switch (r2) {
      case "lowercase":
        return ".inf";
      case "uppercase":
        return ".INF";
      case "camelcase":
        return ".Inf";
    }
  else if (Number.NEGATIVE_INFINITY === t9)
    switch (r2) {
      case "lowercase":
        return "-.inf";
      case "uppercase":
        return "-.INF";
      case "camelcase":
        return "-.Inf";
    }
  else if (Gw.isNegativeZero(t9))
    return "-0.0";
  return e2 = t9.toString(10), pj.test(e2) ? e2.replace("e", ".e") : e2;
}, defaultStyle: "lowercase" }), hj = ij.extend({ implicit: [uj, aj, sj, vj] }), dj = hj, yj = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9])-([0-9][0-9])$"), bj = new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?$");
var mj = new Xw("tag:yaml.org,2002:timestamp", { kind: "scalar", resolve: function(t9) {
  return null !== t9 && (null !== yj.exec(t9) || null !== bj.exec(t9));
}, construct: function(t9) {
  var r2, e2, n2, o2, i2, u2, a2, f2, c2 = 0, s2 = null;
  if (null === (r2 = yj.exec(t9)) && (r2 = bj.exec(t9)), null === r2)
    throw new Error("Date resolve error");
  if (e2 = +r2[1], n2 = +r2[2] - 1, o2 = +r2[3], !r2[4])
    return new Date(Date.UTC(e2, n2, o2));
  if (i2 = +r2[4], u2 = +r2[5], a2 = +r2[6], r2[7]) {
    for (c2 = r2[7].slice(0, 3); c2.length < 3; )
      c2 += "0";
    c2 = +c2;
  }
  return r2[9] && (s2 = 6e4 * (60 * +r2[10] + +(r2[11] || 0)), "-" === r2[9] && (s2 = -s2)), f2 = new Date(Date.UTC(e2, n2, o2, i2, u2, a2, c2)), s2 && f2.setTime(f2.getTime() - s2), f2;
}, instanceOf: Date, represent: function(t9) {
  return t9.toISOString();
} });
var gj = new Xw("tag:yaml.org,2002:merge", { kind: "scalar", resolve: function(t9) {
  return "<<" === t9 || null === t9;
} }), wj = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";
var jj = new Xw("tag:yaml.org,2002:binary", { kind: "scalar", resolve: function(t9) {
  if (null === t9)
    return false;
  var r2, e2, n2 = 0, o2 = t9.length, i2 = wj;
  for (e2 = 0; e2 < o2; e2++)
    if (!((r2 = i2.indexOf(t9.charAt(e2))) > 64)) {
      if (r2 < 0)
        return false;
      n2 += 6;
    }
  return n2 % 8 == 0;
}, construct: function(t9) {
  var r2, e2, n2 = t9.replace(/[\r\n=]/g, ""), o2 = n2.length, i2 = wj, u2 = 0, a2 = [];
  for (r2 = 0; r2 < o2; r2++)
    r2 % 4 == 0 && r2 && (a2.push(u2 >> 16 & 255), a2.push(u2 >> 8 & 255), a2.push(255 & u2)), u2 = u2 << 6 | i2.indexOf(n2.charAt(r2));
  return 0 === (e2 = o2 % 4 * 6) ? (a2.push(u2 >> 16 & 255), a2.push(u2 >> 8 & 255), a2.push(255 & u2)) : 18 === e2 ? (a2.push(u2 >> 10 & 255), a2.push(u2 >> 2 & 255)) : 12 === e2 && a2.push(u2 >> 4 & 255), new Uint8Array(a2);
}, predicate: function(t9) {
  return "[object Uint8Array]" === Object.prototype.toString.call(t9);
}, represent: function(t9) {
  var r2, e2, n2 = "", o2 = 0, i2 = t9.length, u2 = wj;
  for (r2 = 0; r2 < i2; r2++)
    r2 % 3 == 0 && r2 && (n2 += u2[o2 >> 18 & 63], n2 += u2[o2 >> 12 & 63], n2 += u2[o2 >> 6 & 63], n2 += u2[63 & o2]), o2 = (o2 << 8) + t9[r2];
  return 0 === (e2 = i2 % 3) ? (n2 += u2[o2 >> 18 & 63], n2 += u2[o2 >> 12 & 63], n2 += u2[o2 >> 6 & 63], n2 += u2[63 & o2]) : 2 === e2 ? (n2 += u2[o2 >> 10 & 63], n2 += u2[o2 >> 4 & 63], n2 += u2[o2 << 2 & 63], n2 += u2[64]) : 1 === e2 && (n2 += u2[o2 >> 2 & 63], n2 += u2[o2 << 4 & 63], n2 += u2[64], n2 += u2[64]), n2;
} }), Oj = Object.prototype.hasOwnProperty, Aj = Object.prototype.toString;
var Sj = new Xw("tag:yaml.org,2002:omap", { kind: "sequence", resolve: function(t9) {
  if (null === t9)
    return true;
  var r2, e2, n2, o2, i2, u2 = [], a2 = t9;
  for (r2 = 0, e2 = a2.length; r2 < e2; r2 += 1) {
    if (n2 = a2[r2], i2 = false, "[object Object]" !== Aj.call(n2))
      return false;
    for (o2 in n2)
      if (Oj.call(n2, o2)) {
        if (i2)
          return false;
        i2 = true;
      }
    if (!i2)
      return false;
    if (-1 !== u2.indexOf(o2))
      return false;
    u2.push(o2);
  }
  return true;
}, construct: function(t9) {
  return null !== t9 ? t9 : [];
} }), xj = Object.prototype.toString;
var Ej = new Xw("tag:yaml.org,2002:pairs", { kind: "sequence", resolve: function(t9) {
  if (null === t9)
    return true;
  var r2, e2, n2, o2, i2, u2 = t9;
  for (i2 = new Array(u2.length), r2 = 0, e2 = u2.length; r2 < e2; r2 += 1) {
    if (n2 = u2[r2], "[object Object]" !== xj.call(n2))
      return false;
    if (1 !== (o2 = Object.keys(n2)).length)
      return false;
    i2[r2] = [o2[0], n2[o2[0]]];
  }
  return true;
}, construct: function(t9) {
  if (null === t9)
    return [];
  var r2, e2, n2, o2, i2, u2 = t9;
  for (i2 = new Array(u2.length), r2 = 0, e2 = u2.length; r2 < e2; r2 += 1)
    n2 = u2[r2], o2 = Object.keys(n2), i2[r2] = [o2[0], n2[o2[0]]];
  return i2;
} }), Pj = Object.prototype.hasOwnProperty;
var kj = new Xw("tag:yaml.org,2002:set", { kind: "mapping", resolve: function(t9) {
  if (null === t9)
    return true;
  var r2, e2 = t9;
  for (r2 in e2)
    if (Pj.call(e2, r2) && null !== e2[r2])
      return false;
  return true;
}, construct: function(t9) {
  return null !== t9 ? t9 : {};
} }), _j = dj.extend({ implicit: [mj, gj], explicit: [jj, Sj, Ej, kj] }), Ij = Object.prototype.hasOwnProperty, Tj = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/, Rj = /[\x85\u2028\u2029]/, Fj = /[,\[\]\{\}]/, Nj = /^(?:!|!!|![a-z\-]+!)$/i, Mj = /^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i;
function Dj(t9) {
  return Object.prototype.toString.call(t9);
}
function Uj(t9) {
  return 10 === t9 || 13 === t9;
}
function Lj(t9) {
  return 9 === t9 || 32 === t9;
}
function Cj(t9) {
  return 9 === t9 || 32 === t9 || 10 === t9 || 13 === t9;
}
function $j(t9) {
  return 44 === t9 || 91 === t9 || 93 === t9 || 123 === t9 || 125 === t9;
}
function Bj(t9) {
  var r2;
  return 48 <= t9 && t9 <= 57 ? t9 - 48 : 97 <= (r2 = 32 | t9) && r2 <= 102 ? r2 - 97 + 10 : -1;
}
function qj(t9) {
  return 48 === t9 ? "\0" : 97 === t9 ? "\x07" : 98 === t9 ? "\b" : 116 === t9 || 9 === t9 ? "	" : 110 === t9 ? "\n" : 118 === t9 ? "\v" : 102 === t9 ? "\f" : 114 === t9 ? "\r" : 101 === t9 ? "\x1B" : 32 === t9 ? " " : 34 === t9 ? '"' : 47 === t9 ? "/" : 92 === t9 ? "\\" : 78 === t9 ? "\x85" : 95 === t9 ? "\xA0" : 76 === t9 ? "\u2028" : 80 === t9 ? "\u2029" : "";
}
function Gj(t9) {
  return t9 <= 65535 ? String.fromCharCode(t9) : String.fromCharCode(55296 + (t9 - 65536 >> 10), 56320 + (t9 - 65536 & 1023));
}
for (var Wj = new Array(256), zj = new Array(256), Jj = 0; Jj < 256; Jj++)
  Wj[Jj] = qj(Jj) ? 1 : 0, zj[Jj] = qj(Jj);
function Hj(t9, r2) {
  this.input = t9, this.filename = r2.filename || null, this.schema = r2.schema || _j, this.onWarning = r2.onWarning || null, this.legacy = r2.legacy || false, this.json = r2.json || false, this.listener = r2.listener || null, this.implicitTypes = this.schema.compiledImplicit, this.typeMap = this.schema.compiledTypeMap, this.length = t9.length, this.position = 0, this.line = 0, this.lineStart = 0, this.lineIndent = 0, this.firstTabInLine = -1, this.documents = [];
}
function Vj(t9, r2) {
  var e2 = { name: t9.filename, buffer: t9.input.slice(0, -1), position: t9.position, line: t9.line, column: t9.position - t9.lineStart };
  return e2.snippet = Yw(e2), new Jw(r2, e2);
}
function Yj(t9, r2) {
  throw Vj(t9, r2);
}
function Qj(t9, r2) {
  t9.onWarning && t9.onWarning.call(null, Vj(t9, r2));
}
var Kj = { YAML: function(t9, r2, e2) {
  var n2, o2, i2;
  null !== t9.version && Yj(t9, "duplication of %YAML directive"), 1 !== e2.length && Yj(t9, "YAML directive accepts exactly one argument"), null === (n2 = /^([0-9]+)\.([0-9]+)$/.exec(e2[0])) && Yj(t9, "ill-formed argument of the YAML directive"), o2 = parseInt(n2[1], 10), i2 = parseInt(n2[2], 10), 1 !== o2 && Yj(t9, "unacceptable YAML version of the document"), t9.version = e2[0], t9.checkLineBreaks = i2 < 2, 1 !== i2 && 2 !== i2 && Qj(t9, "unsupported YAML version of the document");
}, TAG: function(t9, r2, e2) {
  var n2, o2;
  2 !== e2.length && Yj(t9, "TAG directive accepts exactly two arguments"), n2 = e2[0], o2 = e2[1], Nj.test(n2) || Yj(t9, "ill-formed tag handle (first argument) of the TAG directive"), Ij.call(t9.tagMap, n2) && Yj(t9, 'there is a previously declared suffix for "' + n2 + '" tag handle'), Mj.test(o2) || Yj(t9, "ill-formed tag prefix (second argument) of the TAG directive");
  try {
    o2 = decodeURIComponent(o2);
  } catch (r3) {
    Yj(t9, "tag prefix is malformed: " + o2);
  }
  t9.tagMap[n2] = o2;
} };
function Xj(t9, r2, e2, n2) {
  var o2, i2, u2, a2;
  if (r2 < e2) {
    if (a2 = t9.input.slice(r2, e2), n2)
      for (o2 = 0, i2 = a2.length; o2 < i2; o2 += 1)
        9 === (u2 = a2.charCodeAt(o2)) || 32 <= u2 && u2 <= 1114111 || Yj(t9, "expected valid JSON character");
    else
      Tj.test(a2) && Yj(t9, "the stream contains non-printable characters");
    t9.result += a2;
  }
}
function Zj(t9, r2, e2, n2) {
  var o2, i2, u2, a2;
  for (Gw.isObject(e2) || Yj(t9, "cannot merge mappings; the provided source object is unacceptable"), u2 = 0, a2 = (o2 = Object.keys(e2)).length; u2 < a2; u2 += 1)
    i2 = o2[u2], Ij.call(r2, i2) || (r2[i2] = e2[i2], n2[i2] = true);
}
function tO(t9, r2, e2, n2, o2, i2, u2, a2, f2) {
  var c2, s2;
  if (Array.isArray(o2))
    for (c2 = 0, s2 = (o2 = Array.prototype.slice.call(o2)).length; c2 < s2; c2 += 1)
      Array.isArray(o2[c2]) && Yj(t9, "nested arrays are not supported inside keys"), "object" == typeof o2 && "[object Object]" === Dj(o2[c2]) && (o2[c2] = "[object Object]");
  if ("object" == typeof o2 && "[object Object]" === Dj(o2) && (o2 = "[object Object]"), o2 = String(o2), null === r2 && (r2 = {}), "tag:yaml.org,2002:merge" === n2)
    if (Array.isArray(i2))
      for (c2 = 0, s2 = i2.length; c2 < s2; c2 += 1)
        Zj(t9, r2, i2[c2], e2);
    else
      Zj(t9, r2, i2, e2);
  else
    t9.json || Ij.call(e2, o2) || !Ij.call(r2, o2) || (t9.line = u2 || t9.line, t9.lineStart = a2 || t9.lineStart, t9.position = f2 || t9.position, Yj(t9, "duplicated mapping key")), "__proto__" === o2 ? Object.defineProperty(r2, o2, { configurable: true, enumerable: true, writable: true, value: i2 }) : r2[o2] = i2, delete e2[o2];
  return r2;
}
function rO(t9) {
  var r2;
  10 === (r2 = t9.input.charCodeAt(t9.position)) ? t9.position++ : 13 === r2 ? (t9.position++, 10 === t9.input.charCodeAt(t9.position) && t9.position++) : Yj(t9, "a line break is expected"), t9.line += 1, t9.lineStart = t9.position, t9.firstTabInLine = -1;
}
function eO(t9, r2, e2) {
  for (var n2 = 0, o2 = t9.input.charCodeAt(t9.position); 0 !== o2; ) {
    for (; Lj(o2); )
      9 === o2 && -1 === t9.firstTabInLine && (t9.firstTabInLine = t9.position), o2 = t9.input.charCodeAt(++t9.position);
    if (r2 && 35 === o2)
      do {
        o2 = t9.input.charCodeAt(++t9.position);
      } while (10 !== o2 && 13 !== o2 && 0 !== o2);
    if (!Uj(o2))
      break;
    for (rO(t9), o2 = t9.input.charCodeAt(t9.position), n2++, t9.lineIndent = 0; 32 === o2; )
      t9.lineIndent++, o2 = t9.input.charCodeAt(++t9.position);
  }
  return -1 !== e2 && 0 !== n2 && t9.lineIndent < e2 && Qj(t9, "deficient indentation"), n2;
}
function nO(t9) {
  var r2, e2 = t9.position;
  return !(45 !== (r2 = t9.input.charCodeAt(e2)) && 46 !== r2 || r2 !== t9.input.charCodeAt(e2 + 1) || r2 !== t9.input.charCodeAt(e2 + 2) || (e2 += 3, 0 !== (r2 = t9.input.charCodeAt(e2)) && !Cj(r2)));
}
function oO(t9, r2) {
  1 === r2 ? t9.result += " " : r2 > 1 && (t9.result += Gw.repeat("\n", r2 - 1));
}
function iO(t9, r2) {
  var e2, n2, o2 = t9.tag, i2 = t9.anchor, u2 = [], a2 = false;
  if (-1 !== t9.firstTabInLine)
    return false;
  for (null !== t9.anchor && (t9.anchorMap[t9.anchor] = u2), n2 = t9.input.charCodeAt(t9.position); 0 !== n2 && (-1 !== t9.firstTabInLine && (t9.position = t9.firstTabInLine, Yj(t9, "tab characters must not be used in indentation")), 45 === n2) && Cj(t9.input.charCodeAt(t9.position + 1)); )
    if (a2 = true, t9.position++, eO(t9, true, -1) && t9.lineIndent <= r2)
      u2.push(null), n2 = t9.input.charCodeAt(t9.position);
    else if (e2 = t9.line, fO(t9, r2, 3, false, true), u2.push(t9.result), eO(t9, true, -1), n2 = t9.input.charCodeAt(t9.position), (t9.line === e2 || t9.lineIndent > r2) && 0 !== n2)
      Yj(t9, "bad indentation of a sequence entry");
    else if (t9.lineIndent < r2)
      break;
  return !!a2 && (t9.tag = o2, t9.anchor = i2, t9.kind = "sequence", t9.result = u2, true);
}
function uO(t9) {
  var r2, e2, n2, o2, i2 = false, u2 = false;
  if (33 !== (o2 = t9.input.charCodeAt(t9.position)))
    return false;
  if (null !== t9.tag && Yj(t9, "duplication of a tag property"), 60 === (o2 = t9.input.charCodeAt(++t9.position)) ? (i2 = true, o2 = t9.input.charCodeAt(++t9.position)) : 33 === o2 ? (u2 = true, e2 = "!!", o2 = t9.input.charCodeAt(++t9.position)) : e2 = "!", r2 = t9.position, i2) {
    do {
      o2 = t9.input.charCodeAt(++t9.position);
    } while (0 !== o2 && 62 !== o2);
    t9.position < t9.length ? (n2 = t9.input.slice(r2, t9.position), o2 = t9.input.charCodeAt(++t9.position)) : Yj(t9, "unexpected end of the stream within a verbatim tag");
  } else {
    for (; 0 !== o2 && !Cj(o2); )
      33 === o2 && (u2 ? Yj(t9, "tag suffix cannot contain exclamation marks") : (e2 = t9.input.slice(r2 - 1, t9.position + 1), Nj.test(e2) || Yj(t9, "named tag handle cannot contain such characters"), u2 = true, r2 = t9.position + 1)), o2 = t9.input.charCodeAt(++t9.position);
    n2 = t9.input.slice(r2, t9.position), Fj.test(n2) && Yj(t9, "tag suffix cannot contain flow indicator characters");
  }
  n2 && !Mj.test(n2) && Yj(t9, "tag name cannot contain such characters: " + n2);
  try {
    n2 = decodeURIComponent(n2);
  } catch (r3) {
    Yj(t9, "tag name is malformed: " + n2);
  }
  return i2 ? t9.tag = n2 : Ij.call(t9.tagMap, e2) ? t9.tag = t9.tagMap[e2] + n2 : "!" === e2 ? t9.tag = "!" + n2 : "!!" === e2 ? t9.tag = "tag:yaml.org,2002:" + n2 : Yj(t9, 'undeclared tag handle "' + e2 + '"'), true;
}
function aO(t9) {
  var r2, e2;
  if (38 !== (e2 = t9.input.charCodeAt(t9.position)))
    return false;
  for (null !== t9.anchor && Yj(t9, "duplication of an anchor property"), e2 = t9.input.charCodeAt(++t9.position), r2 = t9.position; 0 !== e2 && !Cj(e2) && !$j(e2); )
    e2 = t9.input.charCodeAt(++t9.position);
  return t9.position === r2 && Yj(t9, "name of an anchor node must contain at least one character"), t9.anchor = t9.input.slice(r2, t9.position), true;
}
function fO(t9, r2, e2, n2, o2) {
  var i2, u2, a2, f2, c2, s2, l2, p2, v2, h2 = 1, d2 = false, y2 = false;
  if (null !== t9.listener && t9.listener("open", t9), t9.tag = null, t9.anchor = null, t9.kind = null, t9.result = null, i2 = u2 = a2 = 4 === e2 || 3 === e2, n2 && eO(t9, true, -1) && (d2 = true, t9.lineIndent > r2 ? h2 = 1 : t9.lineIndent === r2 ? h2 = 0 : t9.lineIndent < r2 && (h2 = -1)), 1 === h2)
    for (; uO(t9) || aO(t9); )
      eO(t9, true, -1) ? (d2 = true, a2 = i2, t9.lineIndent > r2 ? h2 = 1 : t9.lineIndent === r2 ? h2 = 0 : t9.lineIndent < r2 && (h2 = -1)) : a2 = false;
  if (a2 && (a2 = d2 || o2), 1 !== h2 && 4 !== e2 || (p2 = 1 === e2 || 2 === e2 ? r2 : r2 + 1, v2 = t9.position - t9.lineStart, 1 === h2 ? a2 && (iO(t9, v2) || function(t10, r3, e3) {
    var n3, o3, i3, u3, a3, f3, c3, s3 = t10.tag, l3 = t10.anchor, p3 = {}, v3 = /* @__PURE__ */ Object.create(null), h3 = null, d3 = null, y3 = null, b2 = false, m2 = false;
    if (-1 !== t10.firstTabInLine)
      return false;
    for (null !== t10.anchor && (t10.anchorMap[t10.anchor] = p3), c3 = t10.input.charCodeAt(t10.position); 0 !== c3; ) {
      if (b2 || -1 === t10.firstTabInLine || (t10.position = t10.firstTabInLine, Yj(t10, "tab characters must not be used in indentation")), n3 = t10.input.charCodeAt(t10.position + 1), i3 = t10.line, 63 !== c3 && 58 !== c3 || !Cj(n3)) {
        if (u3 = t10.line, a3 = t10.lineStart, f3 = t10.position, !fO(t10, e3, 2, false, true))
          break;
        if (t10.line === i3) {
          for (c3 = t10.input.charCodeAt(t10.position); Lj(c3); )
            c3 = t10.input.charCodeAt(++t10.position);
          if (58 === c3)
            Cj(c3 = t10.input.charCodeAt(++t10.position)) || Yj(t10, "a whitespace character is expected after the key-value separator within a block mapping"), b2 && (tO(t10, p3, v3, h3, d3, null, u3, a3, f3), h3 = d3 = y3 = null), m2 = true, b2 = false, o3 = false, h3 = t10.tag, d3 = t10.result;
          else {
            if (!m2)
              return t10.tag = s3, t10.anchor = l3, true;
            Yj(t10, "can not read an implicit mapping pair; a colon is missed");
          }
        } else {
          if (!m2)
            return t10.tag = s3, t10.anchor = l3, true;
          Yj(t10, "can not read a block mapping entry; a multiline key may not be an implicit key");
        }
      } else
        63 === c3 ? (b2 && (tO(t10, p3, v3, h3, d3, null, u3, a3, f3), h3 = d3 = y3 = null), m2 = true, b2 = true, o3 = true) : b2 ? (b2 = false, o3 = true) : Yj(t10, "incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line"), t10.position += 1, c3 = n3;
      if ((t10.line === i3 || t10.lineIndent > r3) && (b2 && (u3 = t10.line, a3 = t10.lineStart, f3 = t10.position), fO(t10, r3, 4, true, o3) && (b2 ? d3 = t10.result : y3 = t10.result), b2 || (tO(t10, p3, v3, h3, d3, y3, u3, a3, f3), h3 = d3 = y3 = null), eO(t10, true, -1), c3 = t10.input.charCodeAt(t10.position)), (t10.line === i3 || t10.lineIndent > r3) && 0 !== c3)
        Yj(t10, "bad indentation of a mapping entry");
      else if (t10.lineIndent < r3)
        break;
    }
    return b2 && tO(t10, p3, v3, h3, d3, null, u3, a3, f3), m2 && (t10.tag = s3, t10.anchor = l3, t10.kind = "mapping", t10.result = p3), m2;
  }(t9, v2, p2)) || function(t10, r3) {
    var e3, n3, o3, i3, u3, a3, f3, c3, s3, l3, p3, v3, h3 = true, d3 = t10.tag, y3 = t10.anchor, b2 = /* @__PURE__ */ Object.create(null);
    if (91 === (v3 = t10.input.charCodeAt(t10.position)))
      u3 = 93, c3 = false, i3 = [];
    else {
      if (123 !== v3)
        return false;
      u3 = 125, c3 = true, i3 = {};
    }
    for (null !== t10.anchor && (t10.anchorMap[t10.anchor] = i3), v3 = t10.input.charCodeAt(++t10.position); 0 !== v3; ) {
      if (eO(t10, true, r3), (v3 = t10.input.charCodeAt(t10.position)) === u3)
        return t10.position++, t10.tag = d3, t10.anchor = y3, t10.kind = c3 ? "mapping" : "sequence", t10.result = i3, true;
      h3 ? 44 === v3 && Yj(t10, "expected the node content, but found ','") : Yj(t10, "missed comma between flow collection entries"), p3 = null, a3 = f3 = false, 63 === v3 && Cj(t10.input.charCodeAt(t10.position + 1)) && (a3 = f3 = true, t10.position++, eO(t10, true, r3)), e3 = t10.line, n3 = t10.lineStart, o3 = t10.position, fO(t10, r3, 1, false, true), l3 = t10.tag, s3 = t10.result, eO(t10, true, r3), v3 = t10.input.charCodeAt(t10.position), !f3 && t10.line !== e3 || 58 !== v3 || (a3 = true, v3 = t10.input.charCodeAt(++t10.position), eO(t10, true, r3), fO(t10, r3, 1, false, true), p3 = t10.result), c3 ? tO(t10, i3, b2, l3, s3, p3, e3, n3, o3) : a3 ? i3.push(tO(t10, null, b2, l3, s3, p3, e3, n3, o3)) : i3.push(s3), eO(t10, true, r3), 44 === (v3 = t10.input.charCodeAt(t10.position)) ? (h3 = true, v3 = t10.input.charCodeAt(++t10.position)) : h3 = false;
    }
    Yj(t10, "unexpected end of the stream within a flow collection");
  }(t9, p2) ? y2 = true : (u2 && function(t10, r3) {
    var e3, n3, o3, i3, u3, a3 = 1, f3 = false, c3 = false, s3 = r3, l3 = 0, p3 = false;
    if (124 === (i3 = t10.input.charCodeAt(t10.position)))
      n3 = false;
    else {
      if (62 !== i3)
        return false;
      n3 = true;
    }
    for (t10.kind = "scalar", t10.result = ""; 0 !== i3; )
      if (43 === (i3 = t10.input.charCodeAt(++t10.position)) || 45 === i3)
        1 === a3 ? a3 = 43 === i3 ? 3 : 2 : Yj(t10, "repeat of a chomping mode identifier");
      else {
        if (!((o3 = 48 <= (u3 = i3) && u3 <= 57 ? u3 - 48 : -1) >= 0))
          break;
        0 === o3 ? Yj(t10, "bad explicit indentation width of a block scalar; it cannot be less than one") : c3 ? Yj(t10, "repeat of an indentation width identifier") : (s3 = r3 + o3 - 1, c3 = true);
      }
    if (Lj(i3)) {
      do {
        i3 = t10.input.charCodeAt(++t10.position);
      } while (Lj(i3));
      if (35 === i3)
        do {
          i3 = t10.input.charCodeAt(++t10.position);
        } while (!Uj(i3) && 0 !== i3);
    }
    for (; 0 !== i3; ) {
      for (rO(t10), t10.lineIndent = 0, i3 = t10.input.charCodeAt(t10.position); (!c3 || t10.lineIndent < s3) && 32 === i3; )
        t10.lineIndent++, i3 = t10.input.charCodeAt(++t10.position);
      if (!c3 && t10.lineIndent > s3 && (s3 = t10.lineIndent), Uj(i3))
        l3++;
      else {
        if (t10.lineIndent < s3) {
          3 === a3 ? t10.result += Gw.repeat("\n", f3 ? 1 + l3 : l3) : 1 === a3 && f3 && (t10.result += "\n");
          break;
        }
        for (n3 ? Lj(i3) ? (p3 = true, t10.result += Gw.repeat("\n", f3 ? 1 + l3 : l3)) : p3 ? (p3 = false, t10.result += Gw.repeat("\n", l3 + 1)) : 0 === l3 ? f3 && (t10.result += " ") : t10.result += Gw.repeat("\n", l3) : t10.result += Gw.repeat("\n", f3 ? 1 + l3 : l3), f3 = true, c3 = true, l3 = 0, e3 = t10.position; !Uj(i3) && 0 !== i3; )
          i3 = t10.input.charCodeAt(++t10.position);
        Xj(t10, e3, t10.position, false);
      }
    }
    return true;
  }(t9, p2) || function(t10, r3) {
    var e3, n3, o3;
    if (39 !== (e3 = t10.input.charCodeAt(t10.position)))
      return false;
    for (t10.kind = "scalar", t10.result = "", t10.position++, n3 = o3 = t10.position; 0 !== (e3 = t10.input.charCodeAt(t10.position)); )
      if (39 === e3) {
        if (Xj(t10, n3, t10.position, true), 39 !== (e3 = t10.input.charCodeAt(++t10.position)))
          return true;
        n3 = t10.position, t10.position++, o3 = t10.position;
      } else
        Uj(e3) ? (Xj(t10, n3, o3, true), oO(t10, eO(t10, false, r3)), n3 = o3 = t10.position) : t10.position === t10.lineStart && nO(t10) ? Yj(t10, "unexpected end of the document within a single quoted scalar") : (t10.position++, o3 = t10.position);
    Yj(t10, "unexpected end of the stream within a single quoted scalar");
  }(t9, p2) || function(t10, r3) {
    var e3, n3, o3, i3, u3, a3, f3;
    if (34 !== (a3 = t10.input.charCodeAt(t10.position)))
      return false;
    for (t10.kind = "scalar", t10.result = "", t10.position++, e3 = n3 = t10.position; 0 !== (a3 = t10.input.charCodeAt(t10.position)); ) {
      if (34 === a3)
        return Xj(t10, e3, t10.position, true), t10.position++, true;
      if (92 === a3) {
        if (Xj(t10, e3, t10.position, true), Uj(a3 = t10.input.charCodeAt(++t10.position)))
          eO(t10, false, r3);
        else if (a3 < 256 && Wj[a3])
          t10.result += zj[a3], t10.position++;
        else if ((u3 = 120 === (f3 = a3) ? 2 : 117 === f3 ? 4 : 85 === f3 ? 8 : 0) > 0) {
          for (o3 = u3, i3 = 0; o3 > 0; o3--)
            (u3 = Bj(a3 = t10.input.charCodeAt(++t10.position))) >= 0 ? i3 = (i3 << 4) + u3 : Yj(t10, "expected hexadecimal character");
          t10.result += Gj(i3), t10.position++;
        } else
          Yj(t10, "unknown escape sequence");
        e3 = n3 = t10.position;
      } else
        Uj(a3) ? (Xj(t10, e3, n3, true), oO(t10, eO(t10, false, r3)), e3 = n3 = t10.position) : t10.position === t10.lineStart && nO(t10) ? Yj(t10, "unexpected end of the document within a double quoted scalar") : (t10.position++, n3 = t10.position);
    }
    Yj(t10, "unexpected end of the stream within a double quoted scalar");
  }(t9, p2) ? y2 = true : !function(t10) {
    var r3, e3, n3;
    if (42 !== (n3 = t10.input.charCodeAt(t10.position)))
      return false;
    for (n3 = t10.input.charCodeAt(++t10.position), r3 = t10.position; 0 !== n3 && !Cj(n3) && !$j(n3); )
      n3 = t10.input.charCodeAt(++t10.position);
    return t10.position === r3 && Yj(t10, "name of an alias node must contain at least one character"), e3 = t10.input.slice(r3, t10.position), Ij.call(t10.anchorMap, e3) || Yj(t10, 'unidentified alias "' + e3 + '"'), t10.result = t10.anchorMap[e3], eO(t10, true, -1), true;
  }(t9) ? function(t10, r3, e3) {
    var n3, o3, i3, u3, a3, f3, c3, s3, l3 = t10.kind, p3 = t10.result;
    if (Cj(s3 = t10.input.charCodeAt(t10.position)) || $j(s3) || 35 === s3 || 38 === s3 || 42 === s3 || 33 === s3 || 124 === s3 || 62 === s3 || 39 === s3 || 34 === s3 || 37 === s3 || 64 === s3 || 96 === s3)
      return false;
    if ((63 === s3 || 45 === s3) && (Cj(n3 = t10.input.charCodeAt(t10.position + 1)) || e3 && $j(n3)))
      return false;
    for (t10.kind = "scalar", t10.result = "", o3 = i3 = t10.position, u3 = false; 0 !== s3; ) {
      if (58 === s3) {
        if (Cj(n3 = t10.input.charCodeAt(t10.position + 1)) || e3 && $j(n3))
          break;
      } else if (35 === s3) {
        if (Cj(t10.input.charCodeAt(t10.position - 1)))
          break;
      } else {
        if (t10.position === t10.lineStart && nO(t10) || e3 && $j(s3))
          break;
        if (Uj(s3)) {
          if (a3 = t10.line, f3 = t10.lineStart, c3 = t10.lineIndent, eO(t10, false, -1), t10.lineIndent >= r3) {
            u3 = true, s3 = t10.input.charCodeAt(t10.position);
            continue;
          }
          t10.position = i3, t10.line = a3, t10.lineStart = f3, t10.lineIndent = c3;
          break;
        }
      }
      u3 && (Xj(t10, o3, i3, false), oO(t10, t10.line - a3), o3 = i3 = t10.position, u3 = false), Lj(s3) || (i3 = t10.position + 1), s3 = t10.input.charCodeAt(++t10.position);
    }
    return Xj(t10, o3, i3, false), !!t10.result || (t10.kind = l3, t10.result = p3, false);
  }(t9, p2, 1 === e2) && (y2 = true, null === t9.tag && (t9.tag = "?")) : (y2 = true, null === t9.tag && null === t9.anchor || Yj(t9, "alias node should not have any properties")), null !== t9.anchor && (t9.anchorMap[t9.anchor] = t9.result)) : 0 === h2 && (y2 = a2 && iO(t9, v2))), null === t9.tag)
    null !== t9.anchor && (t9.anchorMap[t9.anchor] = t9.result);
  else if ("?" === t9.tag) {
    for (null !== t9.result && "scalar" !== t9.kind && Yj(t9, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + t9.kind + '"'), f2 = 0, c2 = t9.implicitTypes.length; f2 < c2; f2 += 1)
      if ((l2 = t9.implicitTypes[f2]).resolve(t9.result)) {
        t9.result = l2.construct(t9.result), t9.tag = l2.tag, null !== t9.anchor && (t9.anchorMap[t9.anchor] = t9.result);
        break;
      }
  } else if ("!" !== t9.tag) {
    if (Ij.call(t9.typeMap[t9.kind || "fallback"], t9.tag))
      l2 = t9.typeMap[t9.kind || "fallback"][t9.tag];
    else
      for (l2 = null, f2 = 0, c2 = (s2 = t9.typeMap.multi[t9.kind || "fallback"]).length; f2 < c2; f2 += 1)
        if (t9.tag.slice(0, s2[f2].tag.length) === s2[f2].tag) {
          l2 = s2[f2];
          break;
        }
    l2 || Yj(t9, "unknown tag !<" + t9.tag + ">"), null !== t9.result && l2.kind !== t9.kind && Yj(t9, "unacceptable node kind for !<" + t9.tag + '> tag; it should be "' + l2.kind + '", not "' + t9.kind + '"'), l2.resolve(t9.result, t9.tag) ? (t9.result = l2.construct(t9.result, t9.tag), null !== t9.anchor && (t9.anchorMap[t9.anchor] = t9.result)) : Yj(t9, "cannot resolve a node with !<" + t9.tag + "> explicit tag");
  }
  return null !== t9.listener && t9.listener("close", t9), null !== t9.tag || null !== t9.anchor || y2;
}
function cO(t9) {
  var r2, e2, n2, o2, i2 = t9.position, u2 = false;
  for (t9.version = null, t9.checkLineBreaks = t9.legacy, t9.tagMap = /* @__PURE__ */ Object.create(null), t9.anchorMap = /* @__PURE__ */ Object.create(null); 0 !== (o2 = t9.input.charCodeAt(t9.position)) && (eO(t9, true, -1), o2 = t9.input.charCodeAt(t9.position), !(t9.lineIndent > 0 || 37 !== o2)); ) {
    for (u2 = true, o2 = t9.input.charCodeAt(++t9.position), r2 = t9.position; 0 !== o2 && !Cj(o2); )
      o2 = t9.input.charCodeAt(++t9.position);
    for (n2 = [], (e2 = t9.input.slice(r2, t9.position)).length < 1 && Yj(t9, "directive name must not be less than one character in length"); 0 !== o2; ) {
      for (; Lj(o2); )
        o2 = t9.input.charCodeAt(++t9.position);
      if (35 === o2) {
        do {
          o2 = t9.input.charCodeAt(++t9.position);
        } while (0 !== o2 && !Uj(o2));
        break;
      }
      if (Uj(o2))
        break;
      for (r2 = t9.position; 0 !== o2 && !Cj(o2); )
        o2 = t9.input.charCodeAt(++t9.position);
      n2.push(t9.input.slice(r2, t9.position));
    }
    0 !== o2 && rO(t9), Ij.call(Kj, e2) ? Kj[e2](t9, e2, n2) : Qj(t9, 'unknown document directive "' + e2 + '"');
  }
  eO(t9, true, -1), 0 === t9.lineIndent && 45 === t9.input.charCodeAt(t9.position) && 45 === t9.input.charCodeAt(t9.position + 1) && 45 === t9.input.charCodeAt(t9.position + 2) ? (t9.position += 3, eO(t9, true, -1)) : u2 && Yj(t9, "directives end mark is expected"), fO(t9, t9.lineIndent - 1, 4, false, true), eO(t9, true, -1), t9.checkLineBreaks && Rj.test(t9.input.slice(i2, t9.position)) && Qj(t9, "non-ASCII line breaks are interpreted as content"), t9.documents.push(t9.result), t9.position === t9.lineStart && nO(t9) ? 46 === t9.input.charCodeAt(t9.position) && (t9.position += 3, eO(t9, true, -1)) : t9.position < t9.length - 1 && Yj(t9, "end of the stream or a document separator is expected");
}
function sO(t9, r2) {
  r2 = r2 || {}, 0 !== (t9 = String(t9)).length && (10 !== t9.charCodeAt(t9.length - 1) && 13 !== t9.charCodeAt(t9.length - 1) && (t9 += "\n"), 65279 === t9.charCodeAt(0) && (t9 = t9.slice(1)));
  var e2 = new Hj(t9, r2), n2 = t9.indexOf("\0");
  for (-1 !== n2 && (e2.position = n2, Yj(e2, "null byte is not allowed in input")), e2.input += "\0"; 32 === e2.input.charCodeAt(e2.position); )
    e2.lineIndent += 1, e2.position += 1;
  for (; e2.position < e2.length - 1; )
    cO(e2);
  return e2.documents;
}
var lO = function(t9, r2, e2) {
  null !== r2 && "object" == typeof r2 && void 0 === e2 && (e2 = r2, r2 = null);
  var n2 = sO(t9, e2);
  if ("function" != typeof r2)
    return n2;
  for (var o2 = 0, i2 = n2.length; o2 < i2; o2 += 1)
    r2(n2[o2]);
}, pO = { loadAll: lO, load: function(t9, r2) {
  var e2 = sO(t9, r2);
  if (0 !== e2.length) {
    if (1 === e2.length)
      return e2[0];
    throw new Jw("expected a single document in the stream, but found more");
  }
} }, vO = Object.prototype.toString, hO = Object.prototype.hasOwnProperty, dO = { 0: "\\0", 7: "\\a", 8: "\\b", 9: "\\t", 10: "\\n", 11: "\\v", 12: "\\f", 13: "\\r", 27: "\\e", 34: '\\"', 92: "\\\\", 133: "\\N", 160: "\\_", 8232: "\\L", 8233: "\\P" }, yO = ["y", "Y", "yes", "Yes", "YES", "on", "On", "ON", "n", "N", "no", "No", "NO", "off", "Off", "OFF"], bO = /^[-+]?[0-9_]+(?::[0-9_]+)+(?:\.[0-9_]*)?$/;
function mO(t9) {
  var r2, e2, n2;
  if (r2 = t9.toString(16).toUpperCase(), t9 <= 255)
    e2 = "x", n2 = 2;
  else if (t9 <= 65535)
    e2 = "u", n2 = 4;
  else {
    if (!(t9 <= 4294967295))
      throw new Jw("code point within a string may not be greater than 0xFFFFFFFF");
    e2 = "U", n2 = 8;
  }
  return "\\" + e2 + Gw.repeat("0", n2 - r2.length) + r2;
}
function gO(t9) {
  this.schema = t9.schema || _j, this.indent = Math.max(1, t9.indent || 2), this.noArrayIndent = t9.noArrayIndent || false, this.skipInvalid = t9.skipInvalid || false, this.flowLevel = Gw.isNothing(t9.flowLevel) ? -1 : t9.flowLevel, this.styleMap = function(t10, r2) {
    var e2, n2, o2, i2, u2, a2, f2;
    if (null === r2)
      return {};
    for (e2 = {}, o2 = 0, i2 = (n2 = Object.keys(r2)).length; o2 < i2; o2 += 1)
      u2 = n2[o2], a2 = String(r2[u2]), "!!" === u2.slice(0, 2) && (u2 = "tag:yaml.org,2002:" + u2.slice(2)), (f2 = t10.compiledTypeMap.fallback[u2]) && hO.call(f2.styleAliases, a2) && (a2 = f2.styleAliases[a2]), e2[u2] = a2;
    return e2;
  }(this.schema, t9.styles || null), this.sortKeys = t9.sortKeys || false, this.lineWidth = t9.lineWidth || 80, this.noRefs = t9.noRefs || false, this.noCompatMode = t9.noCompatMode || false, this.condenseFlow = t9.condenseFlow || false, this.quotingType = '"' === t9.quotingType ? 2 : 1, this.forceQuotes = t9.forceQuotes || false, this.replacer = "function" == typeof t9.replacer ? t9.replacer : null, this.implicitTypes = this.schema.compiledImplicit, this.explicitTypes = this.schema.compiledExplicit, this.tag = null, this.result = "", this.duplicates = [], this.usedDuplicates = null;
}
function wO(t9, r2) {
  for (var e2, n2 = Gw.repeat(" ", r2), o2 = 0, i2 = -1, u2 = "", a2 = t9.length; o2 < a2; )
    -1 === (i2 = t9.indexOf("\n", o2)) ? (e2 = t9.slice(o2), o2 = a2) : (e2 = t9.slice(o2, i2 + 1), o2 = i2 + 1), e2.length && "\n" !== e2 && (u2 += n2), u2 += e2;
  return u2;
}
function jO(t9, r2) {
  return "\n" + Gw.repeat(" ", t9.indent * r2);
}
function OO(t9) {
  return 32 === t9 || 9 === t9;
}
function AO(t9) {
  return 32 <= t9 && t9 <= 126 || 161 <= t9 && t9 <= 55295 && 8232 !== t9 && 8233 !== t9 || 57344 <= t9 && t9 <= 65533 && 65279 !== t9 || 65536 <= t9 && t9 <= 1114111;
}
function SO(t9) {
  return AO(t9) && 65279 !== t9 && 13 !== t9 && 10 !== t9;
}
function xO(t9, r2, e2) {
  var n2 = SO(t9), o2 = n2 && !OO(t9);
  return (e2 ? n2 : n2 && 44 !== t9 && 91 !== t9 && 93 !== t9 && 123 !== t9 && 125 !== t9) && 35 !== t9 && !(58 === r2 && !o2) || SO(r2) && !OO(r2) && 35 === t9 || 58 === r2 && o2;
}
function EO(t9, r2) {
  var e2, n2 = t9.charCodeAt(r2);
  return n2 >= 55296 && n2 <= 56319 && r2 + 1 < t9.length && (e2 = t9.charCodeAt(r2 + 1)) >= 56320 && e2 <= 57343 ? 1024 * (n2 - 55296) + e2 - 56320 + 65536 : n2;
}
function PO(t9) {
  return /^\n* /.test(t9);
}
function kO(t9, r2, e2, n2, o2, i2, u2, a2) {
  var f2, c2, s2 = 0, l2 = null, p2 = false, v2 = false, h2 = -1 !== n2, d2 = -1, y2 = AO(c2 = EO(t9, 0)) && 65279 !== c2 && !OO(c2) && 45 !== c2 && 63 !== c2 && 58 !== c2 && 44 !== c2 && 91 !== c2 && 93 !== c2 && 123 !== c2 && 125 !== c2 && 35 !== c2 && 38 !== c2 && 42 !== c2 && 33 !== c2 && 124 !== c2 && 61 !== c2 && 62 !== c2 && 39 !== c2 && 34 !== c2 && 37 !== c2 && 64 !== c2 && 96 !== c2 && function(t10) {
    return !OO(t10) && 58 !== t10;
  }(EO(t9, t9.length - 1));
  if (r2 || u2)
    for (f2 = 0; f2 < t9.length; s2 >= 65536 ? f2 += 2 : f2++) {
      if (!AO(s2 = EO(t9, f2)))
        return 5;
      y2 = y2 && xO(s2, l2, a2), l2 = s2;
    }
  else {
    for (f2 = 0; f2 < t9.length; s2 >= 65536 ? f2 += 2 : f2++) {
      if (10 === (s2 = EO(t9, f2)))
        p2 = true, h2 && (v2 = v2 || f2 - d2 - 1 > n2 && " " !== t9[d2 + 1], d2 = f2);
      else if (!AO(s2))
        return 5;
      y2 = y2 && xO(s2, l2, a2), l2 = s2;
    }
    v2 = v2 || h2 && f2 - d2 - 1 > n2 && " " !== t9[d2 + 1];
  }
  return p2 || v2 ? e2 > 9 && PO(t9) ? 5 : u2 ? 2 === i2 ? 5 : 2 : v2 ? 4 : 3 : !y2 || u2 || o2(t9) ? 2 === i2 ? 5 : 2 : 1;
}
function _O(t9, r2, e2, n2, o2) {
  t9.dump = function() {
    if (0 === r2.length)
      return 2 === t9.quotingType ? '""' : "''";
    if (!t9.noCompatMode && (-1 !== yO.indexOf(r2) || bO.test(r2)))
      return 2 === t9.quotingType ? '"' + r2 + '"' : "'" + r2 + "'";
    var i2 = t9.indent * Math.max(1, e2), u2 = -1 === t9.lineWidth ? -1 : Math.max(Math.min(t9.lineWidth, 40), t9.lineWidth - i2), a2 = n2 || t9.flowLevel > -1 && e2 >= t9.flowLevel;
    switch (kO(r2, a2, t9.indent, u2, function(r3) {
      return function(t10, r4) {
        var e3, n3;
        for (e3 = 0, n3 = t10.implicitTypes.length; e3 < n3; e3 += 1)
          if (t10.implicitTypes[e3].resolve(r4))
            return true;
        return false;
      }(t9, r3);
    }, t9.quotingType, t9.forceQuotes && !n2, o2)) {
      case 1:
        return r2;
      case 2:
        return "'" + r2.replace(/'/g, "''") + "'";
      case 3:
        return "|" + IO(r2, t9.indent) + TO(wO(r2, i2));
      case 4:
        return ">" + IO(r2, t9.indent) + TO(wO(function(t10, r3) {
          var e3, n3, o3 = /(\n+)([^\n]*)/g, i3 = (a3 = t10.indexOf("\n"), a3 = -1 !== a3 ? a3 : t10.length, o3.lastIndex = a3, RO(t10.slice(0, a3), r3)), u3 = "\n" === t10[0] || " " === t10[0];
          var a3;
          for (; n3 = o3.exec(t10); ) {
            var f2 = n3[1], c2 = n3[2];
            e3 = " " === c2[0], i3 += f2 + (u3 || e3 || "" === c2 ? "" : "\n") + RO(c2, r3), u3 = e3;
          }
          return i3;
        }(r2, u2), i2));
      case 5:
        return '"' + function(t10) {
          for (var r3, e3 = "", n3 = 0, o3 = 0; o3 < t10.length; n3 >= 65536 ? o3 += 2 : o3++)
            n3 = EO(t10, o3), !(r3 = dO[n3]) && AO(n3) ? (e3 += t10[o3], n3 >= 65536 && (e3 += t10[o3 + 1])) : e3 += r3 || mO(n3);
          return e3;
        }(r2) + '"';
      default:
        throw new Jw("impossible error: invalid scalar style");
    }
  }();
}
function IO(t9, r2) {
  var e2 = PO(t9) ? String(r2) : "", n2 = "\n" === t9[t9.length - 1];
  return e2 + (n2 && ("\n" === t9[t9.length - 2] || "\n" === t9) ? "+" : n2 ? "" : "-") + "\n";
}
function TO(t9) {
  return "\n" === t9[t9.length - 1] ? t9.slice(0, -1) : t9;
}
function RO(t9, r2) {
  if ("" === t9 || " " === t9[0])
    return t9;
  for (var e2, n2, o2 = / [^ ]/g, i2 = 0, u2 = 0, a2 = 0, f2 = ""; e2 = o2.exec(t9); )
    (a2 = e2.index) - i2 > r2 && (n2 = u2 > i2 ? u2 : a2, f2 += "\n" + t9.slice(i2, n2), i2 = n2 + 1), u2 = a2;
  return f2 += "\n", t9.length - i2 > r2 && u2 > i2 ? f2 += t9.slice(i2, u2) + "\n" + t9.slice(u2 + 1) : f2 += t9.slice(i2), f2.slice(1);
}
function FO(t9, r2, e2, n2) {
  var o2, i2, u2, a2 = "", f2 = t9.tag;
  for (o2 = 0, i2 = e2.length; o2 < i2; o2 += 1)
    u2 = e2[o2], t9.replacer && (u2 = t9.replacer.call(e2, String(o2), u2)), (MO(t9, r2 + 1, u2, true, true, false, true) || void 0 === u2 && MO(t9, r2 + 1, null, true, true, false, true)) && (n2 && "" === a2 || (a2 += jO(t9, r2)), t9.dump && 10 === t9.dump.charCodeAt(0) ? a2 += "-" : a2 += "- ", a2 += t9.dump);
  t9.tag = f2, t9.dump = a2 || "[]";
}
function NO(t9, r2, e2) {
  var n2, o2, i2, u2, a2, f2;
  for (i2 = 0, u2 = (o2 = e2 ? t9.explicitTypes : t9.implicitTypes).length; i2 < u2; i2 += 1)
    if (((a2 = o2[i2]).instanceOf || a2.predicate) && (!a2.instanceOf || "object" == typeof r2 && r2 instanceof a2.instanceOf) && (!a2.predicate || a2.predicate(r2))) {
      if (e2 ? a2.multi && a2.representName ? t9.tag = a2.representName(r2) : t9.tag = a2.tag : t9.tag = "?", a2.represent) {
        if (f2 = t9.styleMap[a2.tag] || a2.defaultStyle, "[object Function]" === vO.call(a2.represent))
          n2 = a2.represent(r2, f2);
        else {
          if (!hO.call(a2.represent, f2))
            throw new Jw("!<" + a2.tag + '> tag resolver accepts not "' + f2 + '" style');
          n2 = a2.represent[f2](r2, f2);
        }
        t9.dump = n2;
      }
      return true;
    }
  return false;
}
function MO(t9, r2, e2, n2, o2, i2, u2) {
  t9.tag = null, t9.dump = e2, NO(t9, e2, false) || NO(t9, e2, true);
  var a2, f2 = vO.call(t9.dump), c2 = n2;
  n2 && (n2 = t9.flowLevel < 0 || t9.flowLevel > r2);
  var s2, l2, p2 = "[object Object]" === f2 || "[object Array]" === f2;
  if (p2 && (l2 = -1 !== (s2 = t9.duplicates.indexOf(e2))), (null !== t9.tag && "?" !== t9.tag || l2 || 2 !== t9.indent && r2 > 0) && (o2 = false), l2 && t9.usedDuplicates[s2])
    t9.dump = "*ref_" + s2;
  else {
    if (p2 && l2 && !t9.usedDuplicates[s2] && (t9.usedDuplicates[s2] = true), "[object Object]" === f2)
      n2 && 0 !== Object.keys(t9.dump).length ? (!function(t10, r3, e3, n3) {
        var o3, i3, u3, a3, f3, c3, s3 = "", l3 = t10.tag, p3 = Object.keys(e3);
        if (true === t10.sortKeys)
          p3.sort();
        else if ("function" == typeof t10.sortKeys)
          p3.sort(t10.sortKeys);
        else if (t10.sortKeys)
          throw new Jw("sortKeys must be a boolean or a function");
        for (o3 = 0, i3 = p3.length; o3 < i3; o3 += 1)
          c3 = "", n3 && "" === s3 || (c3 += jO(t10, r3)), a3 = e3[u3 = p3[o3]], t10.replacer && (a3 = t10.replacer.call(e3, u3, a3)), MO(t10, r3 + 1, u3, true, true, true) && ((f3 = null !== t10.tag && "?" !== t10.tag || t10.dump && t10.dump.length > 1024) && (t10.dump && 10 === t10.dump.charCodeAt(0) ? c3 += "?" : c3 += "? "), c3 += t10.dump, f3 && (c3 += jO(t10, r3)), MO(t10, r3 + 1, a3, true, f3) && (t10.dump && 10 === t10.dump.charCodeAt(0) ? c3 += ":" : c3 += ": ", s3 += c3 += t10.dump));
        t10.tag = l3, t10.dump = s3 || "{}";
      }(t9, r2, t9.dump, o2), l2 && (t9.dump = "&ref_" + s2 + t9.dump)) : (!function(t10, r3, e3) {
        var n3, o3, i3, u3, a3, f3 = "", c3 = t10.tag, s3 = Object.keys(e3);
        for (n3 = 0, o3 = s3.length; n3 < o3; n3 += 1)
          a3 = "", "" !== f3 && (a3 += ", "), t10.condenseFlow && (a3 += '"'), u3 = e3[i3 = s3[n3]], t10.replacer && (u3 = t10.replacer.call(e3, i3, u3)), MO(t10, r3, i3, false, false) && (t10.dump.length > 1024 && (a3 += "? "), a3 += t10.dump + (t10.condenseFlow ? '"' : "") + ":" + (t10.condenseFlow ? "" : " "), MO(t10, r3, u3, false, false) && (f3 += a3 += t10.dump));
        t10.tag = c3, t10.dump = "{" + f3 + "}";
      }(t9, r2, t9.dump), l2 && (t9.dump = "&ref_" + s2 + " " + t9.dump));
    else if ("[object Array]" === f2)
      n2 && 0 !== t9.dump.length ? (t9.noArrayIndent && !u2 && r2 > 0 ? FO(t9, r2 - 1, t9.dump, o2) : FO(t9, r2, t9.dump, o2), l2 && (t9.dump = "&ref_" + s2 + t9.dump)) : (!function(t10, r3, e3) {
        var n3, o3, i3, u3 = "", a3 = t10.tag;
        for (n3 = 0, o3 = e3.length; n3 < o3; n3 += 1)
          i3 = e3[n3], t10.replacer && (i3 = t10.replacer.call(e3, String(n3), i3)), (MO(t10, r3, i3, false, false) || void 0 === i3 && MO(t10, r3, null, false, false)) && ("" !== u3 && (u3 += "," + (t10.condenseFlow ? "" : " ")), u3 += t10.dump);
        t10.tag = a3, t10.dump = "[" + u3 + "]";
      }(t9, r2, t9.dump), l2 && (t9.dump = "&ref_" + s2 + " " + t9.dump));
    else {
      if ("[object String]" !== f2) {
        if ("[object Undefined]" === f2)
          return false;
        if (t9.skipInvalid)
          return false;
        throw new Jw("unacceptable kind of an object to dump " + f2);
      }
      "?" !== t9.tag && _O(t9, t9.dump, r2, i2, c2);
    }
    null !== t9.tag && "?" !== t9.tag && (a2 = encodeURI("!" === t9.tag[0] ? t9.tag.slice(1) : t9.tag).replace(/!/g, "%21"), a2 = "!" === t9.tag[0] ? "!" + a2 : "tag:yaml.org,2002:" === a2.slice(0, 18) ? "!!" + a2.slice(18) : "!<" + a2 + ">", t9.dump = a2 + " " + t9.dump);
  }
  return true;
}
function DO(t9, r2) {
  var e2, n2, o2 = [], i2 = [];
  for (UO(t9, o2, i2), e2 = 0, n2 = i2.length; e2 < n2; e2 += 1)
    r2.duplicates.push(o2[i2[e2]]);
  r2.usedDuplicates = new Array(n2);
}
function UO(t9, r2, e2) {
  var n2, o2, i2;
  if (null !== t9 && "object" == typeof t9)
    if (-1 !== (o2 = r2.indexOf(t9)))
      -1 === e2.indexOf(o2) && e2.push(o2);
    else if (r2.push(t9), Array.isArray(t9))
      for (o2 = 0, i2 = t9.length; o2 < i2; o2 += 1)
        UO(t9[o2], r2, e2);
    else
      for (o2 = 0, i2 = (n2 = Object.keys(t9)).length; o2 < i2; o2 += 1)
        UO(t9[n2[o2]], r2, e2);
}
function LO(t9, r2) {
  return function() {
    throw new Error("Function yaml." + t9 + " is removed in js-yaml 4. Use yaml." + r2 + " instead, which is now safe by default.");
  };
}
var CO = { Type: Xw, Schema: rj, FAILSAFE_SCHEMA: ij, JSON_SCHEMA: hj, CORE_SCHEMA: dj, DEFAULT_SCHEMA: _j, load: pO.load, loadAll: pO.loadAll, dump: { dump: function(t9, r2) {
  var e2 = new gO(r2 = r2 || {});
  e2.noRefs || DO(t9, e2);
  var n2 = t9;
  return e2.replacer && (n2 = e2.replacer.call({ "": n2 }, "", n2)), MO(e2, 0, n2, true, true) ? e2.dump + "\n" : "";
} }.dump, YAMLException: Jw, types: { binary: jj, float: vj, map: oj, null: uj, pairs: Ej, set: kj, timestamp: mj, bool: aj, int: sj, merge: gj, omap: Sj, seq: nj, str: ej }, safeLoad: LO("safeLoad", "load"), safeLoadAll: LO("safeLoadAll", "loadAll"), safeDump: LO("safeDump", "dump") };
const $O = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : window, { FormData: BO, Blob: qO, File: GO } = $O;
function WO(t9) {
  return function(t10) {
    if (Il(t10))
      return Dp(t10);
  }(t9) || function(t10) {
    if (void 0 !== ul && null != Pl(t10) || null != t10["@@iterator"])
      return Mp(t10);
  }(t9) || Up(t9) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
var zO = { exports: {} };
const JO = openapi_parser_t(zO.exports = Kl);
var HO = function(t9) {
  return ":/?#[]@!$&'()*+,;=".indexOf(t9) > -1;
}, VO = function(t9) {
  return /^[a-z0-9\-._~]+$/i.test(t9);
};
function YO(t9) {
  var r2, e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n2 = e2.escape, o2 = arguments.length > 2 ? arguments[2] : void 0;
  return "number" == typeof t9 && (t9 = t9.toString()), "string" == typeof t9 && t9.length && n2 ? o2 ? JSON.parse(t9) : Hb(r2 = WO(t9)).call(r2, function(t10) {
    var r3, e3;
    if (VO(t10))
      return t10;
    if (HO(t10) && "unsafe" === n2)
      return t10;
    var o3 = new TextEncoder();
    return Hb(r3 = Hb(e3 = gb(o3.encode(t10))).call(e3, function(t11) {
      var r4;
      return JO(r4 = "0".concat(t11.toString(16).toUpperCase())).call(r4, -2);
    })).call(r3, function(t11) {
      return "%".concat(t11);
    }).join("");
  }).join("") : t9;
}
function QO(t9) {
  var r2 = t9.value;
  return Array.isArray(r2) ? function(t10) {
    var r3 = t10.key, e2 = t10.value, n2 = t10.style, o2 = t10.explode, i2 = t10.escape, u2 = function(t11) {
      return YO(t11, { escape: i2 });
    };
    if ("simple" === n2)
      return Hb(e2).call(e2, function(t11) {
        return u2(t11);
      }).join(",");
    if ("label" === n2)
      return ".".concat(Hb(e2).call(e2, function(t11) {
        return u2(t11);
      }).join("."));
    if ("matrix" === n2)
      return Hb(e2).call(e2, function(t11) {
        return u2(t11);
      }).reduce(function(t11, e3) {
        var n3, i3, u3;
        return !t11 || o2 ? rm(i3 = rm(u3 = "".concat(t11 || "", ";")).call(u3, r3, "=")).call(i3, e3) : rm(n3 = "".concat(t11, ",")).call(n3, e3);
      }, "");
    if ("form" === n2) {
      var a2 = o2 ? "&".concat(r3, "=") : ",";
      return Hb(e2).call(e2, function(t11) {
        return u2(t11);
      }).join(a2);
    }
    if ("spaceDelimited" === n2) {
      var f2 = o2 ? "".concat(r3, "=") : "";
      return Hb(e2).call(e2, function(t11) {
        return u2(t11);
      }).join(" ".concat(f2));
    }
    if ("pipeDelimited" === n2) {
      var c2 = o2 ? "".concat(r3, "=") : "";
      return Hb(e2).call(e2, function(t11) {
        return u2(t11);
      }).join("|".concat(c2));
    }
    return;
  }(t9) : "object" === qp(r2) ? function(t10) {
    var r3 = t10.key, e2 = t10.value, n2 = t10.style, o2 = t10.explode, i2 = t10.escape, u2 = function(t11) {
      return YO(t11, { escape: i2 });
    }, a2 = Yb(e2);
    if ("simple" === n2)
      return a2.reduce(function(t11, r4) {
        var n3, i3, a3, f2 = u2(e2[r4]), c2 = o2 ? "=" : ",", s2 = t11 ? "".concat(t11, ",") : "";
        return rm(n3 = rm(i3 = rm(a3 = "".concat(s2)).call(a3, r4)).call(i3, c2)).call(n3, f2);
      }, "");
    if ("label" === n2)
      return a2.reduce(function(t11, r4) {
        var n3, i3, a3, f2 = u2(e2[r4]), c2 = o2 ? "=" : ".", s2 = t11 ? "".concat(t11, ".") : ".";
        return rm(n3 = rm(i3 = rm(a3 = "".concat(s2)).call(a3, r4)).call(i3, c2)).call(n3, f2);
      }, "");
    if ("matrix" === n2 && o2)
      return a2.reduce(function(t11, r4) {
        var n3, o3, i3 = u2(e2[r4]), a3 = t11 ? "".concat(t11, ";") : ";";
        return rm(n3 = rm(o3 = "".concat(a3)).call(o3, r4, "=")).call(n3, i3);
      }, "");
    if ("matrix" === n2)
      return a2.reduce(function(t11, n3) {
        var o3, i3, a3 = u2(e2[n3]), f2 = t11 ? "".concat(t11, ",") : ";".concat(r3, "=");
        return rm(o3 = rm(i3 = "".concat(f2)).call(i3, n3, ",")).call(o3, a3);
      }, "");
    if ("form" === n2)
      return a2.reduce(function(t11, r4) {
        var n3, i3, a3, f2, c2 = u2(e2[r4]), s2 = t11 ? rm(n3 = "".concat(t11)).call(n3, o2 ? "&" : ",") : "", l2 = o2 ? "=" : ",";
        return rm(i3 = rm(a3 = rm(f2 = "".concat(s2)).call(f2, r4)).call(a3, l2)).call(i3, c2);
      }, "");
    return;
  }(t9) : function(t10) {
    var r3, e2 = t10.key, n2 = t10.value, o2 = t10.style, i2 = t10.escape, u2 = function(t11) {
      return YO(t11, { escape: i2 });
    };
    if ("simple" === o2)
      return u2(n2);
    if ("label" === o2)
      return ".".concat(u2(n2));
    if ("matrix" === o2)
      return rm(r3 = ";".concat(e2, "=")).call(r3, u2(n2));
    if ("form" === o2)
      return u2(n2);
    if ("deepObject" === o2)
      return u2(n2);
    return;
  }(t9);
}
var KO = function(t9, r2) {
  r2.body = t9;
}, XO = { serializeRes: nA, mergeInQueryOrForm: hA };
function ZO(t9) {
  return tA.apply(this, arguments);
}
function tA() {
  return tA = Gy(Jy.mark(function t9(r2) {
    var e2, n2, o2, i2, u2, a2 = arguments;
    return Jy.wrap(function(t10) {
      for (; ; )
        switch (t10.prev = t10.next) {
          case 0:
            if (e2 = a2.length > 1 && void 0 !== a2[1] ? a2[1] : {}, "object" === qp(r2) && (r2 = (e2 = r2).url), e2.headers = e2.headers || {}, XO.mergeInQueryOrForm(e2), e2.headers && Yb(e2.headers).forEach(function(t11) {
              var r3 = e2.headers[t11];
              "string" == typeof r3 && (e2.headers[t11] = r3.replace(/\n+/g, " "));
            }), !e2.requestInterceptor) {
              t10.next = 12;
              break;
            }
            return t10.next = 8, e2.requestInterceptor(e2);
          case 8:
            if (t10.t0 = t10.sent, t10.t0) {
              t10.next = 11;
              break;
            }
            t10.t0 = e2;
          case 11:
            e2 = t10.t0;
          case 12:
            return n2 = e2.headers["content-type"] || e2.headers["Content-Type"], /multipart\/form-data/i.test(n2) && e2.body instanceof BO && (delete e2.headers["content-type"], delete e2.headers["Content-Type"]), t10.prev = 14, t10.next = 17, (e2.userFetch || fetch)(e2.url, e2);
          case 17:
            return o2 = t10.sent, t10.next = 20, XO.serializeRes(o2, r2, e2);
          case 20:
            if (o2 = t10.sent, !e2.responseInterceptor) {
              t10.next = 28;
              break;
            }
            return t10.next = 24, e2.responseInterceptor(o2);
          case 24:
            if (t10.t1 = t10.sent, t10.t1) {
              t10.next = 27;
              break;
            }
            t10.t1 = o2;
          case 27:
            o2 = t10.t1;
          case 28:
            t10.next = 39;
            break;
          case 30:
            if (t10.prev = 30, t10.t2 = t10.catch(14), o2) {
              t10.next = 34;
              break;
            }
            throw t10.t2;
          case 34:
            throw (i2 = new Error(o2.statusText || "response status is ".concat(o2.status))).status = o2.status, i2.statusCode = o2.status, i2.responseError = t10.t2, i2;
          case 39:
            if (o2.ok) {
              t10.next = 45;
              break;
            }
            throw (u2 = new Error(o2.statusText || "response status is ".concat(o2.status))).status = o2.status, u2.statusCode = o2.status, u2.response = o2, u2;
          case 45:
            return t10.abrupt("return", o2);
          case 46:
          case "end":
            return t10.stop();
        }
    }, t9, null, [[14, 30]]);
  })), tA.apply(this, arguments);
}
var rA = function() {
  var t9 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
  return /(json|xml|yaml|text)\b/.test(t9);
};
function eA(t9, r2) {
  return r2 && (0 === r2.indexOf("application/json") || r2.indexOf("+json") > 0) ? JSON.parse(t9) : CO.load(t9);
}
function nA(t9, r2) {
  var e2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n2 = e2.loadSpec, o2 = void 0 !== n2 && n2, i2 = { ok: t9.ok, url: t9.url || r2, status: t9.status, statusText: t9.statusText, headers: iA(t9.headers) }, u2 = i2.headers["content-type"], a2 = o2 || rA(u2), f2 = a2 ? t9.text : t9.blob || t9.buffer;
  return f2.call(t9).then(function(t10) {
    if (i2.text = t10, i2.data = t10, a2)
      try {
        var r3 = eA(t10, u2);
        i2.body = r3, i2.obj = r3;
      } catch (t11) {
        i2.parseError = t11;
      }
    return i2;
  });
}
function oA(t9) {
  return fb(t9).call(t9, ", ") ? t9.split(", ") : t9;
}
function iA() {
  var t9 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return "function" != typeof bb(t9) ? {} : gb(bb(t9).call(t9)).reduce(function(t10, r2) {
    var e2 = Gp(r2, 2), n2 = e2[0], o2 = e2[1];
    return t10[n2] = oA(o2), t10;
  }, {});
}
function uA(t9, r2) {
  return r2 || "undefined" == typeof navigator || (r2 = navigator), r2 && "ReactNative" === r2.product ? !(!t9 || "object" !== qp(t9) || "string" != typeof t9.uri) : void 0 !== GO && t9 instanceof GO || (void 0 !== qO && t9 instanceof qO || (!!ArrayBuffer.isView(t9) || null !== t9 && "object" === qp(t9) && "function" == typeof t9.pipe));
}
function aA(t9, r2) {
  return Array.isArray(t9) && t9.some(function(t10) {
    return uA(t10, r2);
  });
}
var fA = { form: ",", spaceDelimited: "%20", pipeDelimited: "|" }, cA = { csv: ",", ssv: "%20", tsv: "%09", pipes: "|" };
function sA(t9, r2) {
  var e2 = arguments.length > 2 && void 0 !== arguments[2] && arguments[2], n2 = r2.collectionFormat, o2 = r2.allowEmptyValue, i2 = r2.serializationOption, u2 = r2.encoding, a2 = "object" !== qp(r2) || Array.isArray(r2) ? r2 : r2.value, f2 = e2 ? function(t10) {
    return t10.toString();
  } : function(t10) {
    return encodeURIComponent(t10);
  }, c2 = f2(t9);
  if (void 0 === a2 && o2)
    return [[c2, ""]];
  if (uA(a2) || aA(a2))
    return [[c2, a2]];
  if (i2)
    return lA(t9, a2, e2, i2);
  if (u2) {
    if ([qp(u2.style), qp(u2.explode), qp(u2.allowReserved)].some(function(t10) {
      return "undefined" !== t10;
    })) {
      var s2 = u2.style, l2 = u2.explode, p2 = u2.allowReserved;
      return lA(t9, a2, e2, { style: s2, explode: l2, allowReserved: p2 });
    }
    if (u2.contentType) {
      if ("application/json" === u2.contentType) {
        var v2 = "string" == typeof a2 ? a2 : $b(a2);
        return [[c2, f2(v2)]];
      }
      return [[c2, f2(a2.toString())]];
    }
    return "object" !== qp(a2) ? [[c2, f2(a2)]] : Array.isArray(a2) && a2.every(function(t10) {
      return "object" !== qp(t10);
    }) ? [[c2, Hb(a2).call(a2, f2).join(",")]] : [[c2, f2($b(a2))]];
  }
  return "object" !== qp(a2) ? [[c2, f2(a2)]] : Array.isArray(a2) ? "multi" === n2 ? [[c2, Hb(a2).call(a2, f2)]] : [[c2, Hb(a2).call(a2, f2).join(cA[n2 || "csv"])]] : [[c2, ""]];
}
function lA(t9, r2, e2, n2) {
  var o2, i2, u2, a2 = n2.style || "form", f2 = void 0 === n2.explode ? "form" === a2 : n2.explode, c2 = !e2 && (n2 && n2.allowReserved ? "unsafe" : "reserved"), s2 = function(t10) {
    return YO(t10, { escape: c2 });
  }, l2 = e2 ? function(t10) {
    return t10;
  } : function(t10) {
    return YO(t10, { escape: c2 });
  };
  return "object" !== qp(r2) ? [[l2(t9), s2(r2)]] : Array.isArray(r2) ? f2 ? [[l2(t9), Hb(r2).call(r2, s2)]] : [[l2(t9), Hb(r2).call(r2, s2).join(fA[a2])]] : "deepObject" === a2 ? Hb(i2 = Yb(r2)).call(i2, function(e3) {
    var n3;
    return [l2(rm(n3 = "".concat(t9, "[")).call(n3, e3, "]")), s2(r2[e3])];
  }) : f2 ? Hb(u2 = Yb(r2)).call(u2, function(t10) {
    return [l2(t10), s2(r2[t10])];
  }) : [[l2(t9), Hb(o2 = Yb(r2)).call(o2, function(t10) {
    var e3;
    return [rm(e3 = "".concat(l2(t10), ",")).call(e3, s2(r2[t10]))];
  }).join(",")]];
}
function pA(t9) {
  return pm(t9).reduce(function(t10, r2) {
    var e2, n2 = Gp(r2, 2), o2 = Lp(sA(n2[0], n2[1], true));
    try {
      for (o2.s(); !(e2 = o2.n()).done; ) {
        var i2 = Gp(e2.value, 2), u2 = i2[0], a2 = i2[1];
        if (Array.isArray(a2)) {
          var f2, c2 = Lp(a2);
          try {
            for (c2.s(); !(f2 = c2.n()).done; ) {
              var s2 = f2.value;
              if (ArrayBuffer.isView(s2)) {
                var l2 = new qO([s2]);
                t10.append(u2, l2);
              } else
                t10.append(u2, s2);
            }
          } catch (t11) {
            c2.e(t11);
          } finally {
            c2.f();
          }
        } else if (ArrayBuffer.isView(a2)) {
          var p2 = new qO([a2]);
          t10.append(u2, p2);
        } else
          t10.append(u2, a2);
      }
    } catch (t11) {
      o2.e(t11);
    } finally {
      o2.f();
    }
    return t10;
  }, new BO());
}
function vA(t9) {
  var r2 = Yb(t9).reduce(function(r3, e2) {
    var n2, o2 = Lp(sA(e2, t9[e2]));
    try {
      for (o2.s(); !(n2 = o2.n()).done; ) {
        var i2 = Gp(n2.value, 2), u2 = i2[0], a2 = i2[1];
        r3[u2] = a2;
      }
    } catch (t10) {
      o2.e(t10);
    } finally {
      o2.f();
    }
    return r3;
  }, {});
  return $w.stringify(r2, { encode: false, indices: false }) || "";
}
function hA() {
  var t9 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r2 = t9.url, e2 = void 0 === r2 ? "" : r2, n2 = t9.query, o2 = t9.form, i2 = function() {
    for (var t10 = arguments.length, r3 = new Array(t10), e3 = 0; e3 < t10; e3++)
      r3[e3] = arguments[e3];
    var n3 = hm(r3).call(r3, function(t11) {
      return t11;
    }).join("&");
    return n3 ? "?".concat(n3) : "";
  };
  if (o2) {
    var u2 = Yb(o2).some(function(t10) {
      var r3 = o2[t10].value;
      return uA(r3) || aA(r3);
    }), a2 = t9.headers["content-type"] || t9.headers["Content-Type"];
    if (u2 || /multipart\/form-data/i.test(a2)) {
      var f2 = pA(t9.form);
      KO(f2, t9);
    } else
      t9.body = vA(o2);
    delete t9.form;
  }
  if (n2) {
    var c2 = e2.split("?"), s2 = Gp(c2, 2), l2 = s2[0], p2 = s2[1], v2 = "";
    if (p2) {
      var h2 = $w.parse(p2), d2 = Yb(n2);
      d2.forEach(function(t10) {
        return delete h2[t10];
      }), v2 = $w.stringify(h2, { encode: true });
    }
    var y2 = i2(v2, vA(n2));
    t9.url = l2 + y2, delete t9.query;
  }
  return t9;
}
function dA(t9, r2) {
  if (!(t9 instanceof r2))
    throw new TypeError("Cannot call a class as a function");
}
function yA(t9, r2) {
  for (var e2 = 0; e2 < r2.length; e2++) {
    var n2 = r2[e2];
    n2.enumerable = n2.enumerable || false, n2.configurable = true, "value" in n2 && (n2.writable = true), _c(t9, n2.key, n2);
  }
}
function bA(t9, r2, e2) {
  return r2 && yA(t9.prototype, r2), e2 && yA(t9, e2), _c(t9, "prototype", { writable: false }), t9;
}
var mA = { exports: {} }, gA = ge, wA = _i.find, jA = true;
"find" in [] && Array(1).find(function() {
  jA = false;
}), gA({ target: "Array", proto: true, forced: jA }, { find: function(t9) {
  return wA(this, t9, arguments.length > 1 ? arguments[1] : void 0);
} });
var OA = na("Array").find, AA = tt, SA = OA, xA = Array.prototype;
const EA = openapi_parser_t(mA.exports = function(t9) {
  var r2 = t9.find;
  return t9 === xA || AA(xA, t9) && r2 === xA.find ? SA : r2;
});
var PA = { exports: {} };
const kA = openapi_parser_t(PA.exports = Uy);
var _A = { exports: {} }, IA = ge, TA = openapi_parser_o, RA = Ee, FA = Oe, NA = Te, MA = Ct, DA = ji, UA = Hn, LA = ta("splice"), CA = TA.TypeError, $A = Math.max, BA = Math.min;
IA({ target: "Array", proto: true, forced: !LA }, { splice: function(t9, r2) {
  var e2, n2, o2, i2, u2, a2, f2 = MA(this), c2 = NA(f2), s2 = RA(t9, c2), l2 = arguments.length;
  if (0 === l2 ? e2 = n2 = 0 : 1 === l2 ? (e2 = 0, n2 = c2 - s2) : (e2 = l2 - 2, n2 = BA($A(FA(r2), 0), c2 - s2)), c2 + e2 - n2 > 9007199254740991)
    throw CA("Maximum allowed length exceeded");
  for (o2 = DA(f2, n2), i2 = 0; i2 < n2; i2++)
    (u2 = s2 + i2) in f2 && UA(o2, i2, f2[u2]);
  if (o2.length = n2, e2 < n2) {
    for (i2 = s2; i2 < c2 - n2; i2++)
      a2 = i2 + e2, (u2 = i2 + n2) in f2 ? f2[a2] = f2[u2] : delete f2[a2];
    for (i2 = c2; i2 > c2 - n2 + e2; i2--)
      delete f2[i2 - 1];
  } else if (e2 > n2)
    for (i2 = c2 - n2; i2 > s2; i2--)
      a2 = i2 + e2 - 1, (u2 = i2 + n2 - 1) in f2 ? f2[a2] = f2[u2] : delete f2[a2];
  for (i2 = 0; i2 < e2; i2++)
    f2[i2 + s2] = arguments[i2 + 2];
  return f2.length = c2 - n2 + e2, o2;
} });
var qA = na("Array").splice, GA = tt, WA = qA, zA = Array.prototype;
const JA = openapi_parser_t(_A.exports = function(t9) {
  var r2 = t9.splice;
  return t9 === zA || GA(zA, t9) && r2 === zA.splice ? WA : r2;
});
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017 Joachim Wester
 * MIT license
 */
var HA, VA = globalThis && globalThis.__extends || (HA = function(t9, r2) {
  return HA = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t10, r3) {
    t10.__proto__ = r3;
  } || function(t10, r3) {
    for (var e2 in r3)
      r3.hasOwnProperty(e2) && (t10[e2] = r3[e2]);
  }, HA(t9, r2);
}, function(t9, r2) {
  function e2() {
    this.constructor = t9;
  }
  HA(t9, r2), t9.prototype = null === r2 ? Object.create(r2) : (e2.prototype = r2.prototype, new e2());
}), YA = Object.prototype.hasOwnProperty;
function QA(t9, r2) {
  return YA.call(t9, r2);
}
function KA(t9) {
  if (Array.isArray(t9)) {
    for (var r2 = new Array(t9.length), e2 = 0; e2 < r2.length; e2++)
      r2[e2] = "" + e2;
    return r2;
  }
  if (Object.keys)
    return Object.keys(t9);
  r2 = [];
  for (var n2 in t9)
    QA(t9, n2) && r2.push(n2);
  return r2;
}
function XA(t9) {
  switch (typeof t9) {
    case "object":
      return JSON.parse(JSON.stringify(t9));
    case "undefined":
      return null;
    default:
      return t9;
  }
}
function ZA(t9) {
  for (var r2, e2 = 0, n2 = t9.length; e2 < n2; ) {
    if (!((r2 = t9.charCodeAt(e2)) >= 48 && r2 <= 57))
      return false;
    e2++;
  }
  return true;
}
function tS(t9) {
  return -1 === t9.indexOf("/") && -1 === t9.indexOf("~") ? t9 : t9.replace(/~/g, "~0").replace(/\//g, "~1");
}
function rS(t9) {
  return t9.replace(/~1/g, "/").replace(/~0/g, "~");
}
function eS(t9) {
  if (void 0 === t9)
    return true;
  if (t9) {
    if (Array.isArray(t9)) {
      for (var r2 = 0, e2 = t9.length; r2 < e2; r2++)
        if (eS(t9[r2]))
          return true;
    } else if ("object" == typeof t9) {
      var n2 = KA(t9), o2 = n2.length;
      for (r2 = 0; r2 < o2; r2++)
        if (eS(t9[n2[r2]]))
          return true;
    }
  }
  return false;
}
function nS(t9, r2) {
  var e2 = [t9];
  for (var n2 in r2) {
    var o2 = "object" == typeof r2[n2] ? JSON.stringify(r2[n2], null, 2) : r2[n2];
    void 0 !== o2 && e2.push(n2 + ": " + o2);
  }
  return e2.join("\n");
}
var oS = function(t9) {
  function r2(r3, e2, n2, o2, i2) {
    var u2 = this.constructor, a2 = t9.call(this, nS(r3, { name: e2, index: n2, operation: o2, tree: i2 })) || this;
    return a2.name = e2, a2.index = n2, a2.operation = o2, a2.tree = i2, Object.setPrototypeOf(a2, u2.prototype), a2.message = nS(r3, { name: e2, index: n2, operation: o2, tree: i2 }), a2;
  }
  return VA(r2, t9), r2;
}(Error), iS = oS, uS = XA, aS = { add: function(t9, r2, e2) {
  return t9[r2] = this.value, { newDocument: e2 };
}, remove: function(t9, r2, e2) {
  var n2 = t9[r2];
  return delete t9[r2], { newDocument: e2, removed: n2 };
}, replace: function(t9, r2, e2) {
  var n2 = t9[r2];
  return t9[r2] = this.value, { newDocument: e2, removed: n2 };
}, move: function(t9, r2, e2) {
  var n2 = cS(e2, this.path);
  n2 && (n2 = XA(n2));
  var o2 = sS(e2, { op: "remove", path: this.from }).removed;
  return sS(e2, { op: "add", path: this.path, value: o2 }), { newDocument: e2, removed: n2 };
}, copy: function(t9, r2, e2) {
  var n2 = cS(e2, this.from);
  return sS(e2, { op: "add", path: this.path, value: XA(n2) }), { newDocument: e2 };
}, test: function(t9, r2, e2) {
  return { newDocument: e2, test: hS(t9[r2], this.value) };
}, _get: function(t9, r2, e2) {
  return this.value = t9[r2], { newDocument: e2 };
} }, fS = { add: function(t9, r2, e2) {
  return ZA(r2) ? t9.splice(r2, 0, this.value) : t9[r2] = this.value, { newDocument: e2, index: r2 };
}, remove: function(t9, r2, e2) {
  return { newDocument: e2, removed: t9.splice(r2, 1)[0] };
}, replace: function(t9, r2, e2) {
  var n2 = t9[r2];
  return t9[r2] = this.value, { newDocument: e2, removed: n2 };
}, move: aS.move, copy: aS.copy, test: aS.test, _get: aS._get };
function cS(t9, r2) {
  if ("" == r2)
    return t9;
  var e2 = { op: "_get", path: r2 };
  return sS(t9, e2), e2.value;
}
function sS(t9, r2, e2, n2, o2, i2) {
  if (void 0 === e2 && (e2 = false), void 0 === n2 && (n2 = true), void 0 === o2 && (o2 = true), void 0 === i2 && (i2 = 0), e2 && ("function" == typeof e2 ? e2(r2, 0, t9, r2.path) : pS(r2, 0)), "" === r2.path) {
    var u2 = { newDocument: t9 };
    if ("add" === r2.op)
      return u2.newDocument = r2.value, u2;
    if ("replace" === r2.op)
      return u2.newDocument = r2.value, u2.removed = t9, u2;
    if ("move" === r2.op || "copy" === r2.op)
      return u2.newDocument = cS(t9, r2.from), "move" === r2.op && (u2.removed = t9), u2;
    if ("test" === r2.op) {
      if (u2.test = hS(t9, r2.value), false === u2.test)
        throw new iS("Test operation failed", "TEST_OPERATION_FAILED", i2, r2, t9);
      return u2.newDocument = t9, u2;
    }
    if ("remove" === r2.op)
      return u2.removed = t9, u2.newDocument = null, u2;
    if ("_get" === r2.op)
      return r2.value = t9, u2;
    if (e2)
      throw new iS("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", i2, r2, t9);
    return u2;
  }
  n2 || (t9 = XA(t9));
  var a2 = (r2.path || "").split("/"), f2 = t9, c2 = 1, s2 = a2.length, l2 = void 0, p2 = void 0, v2 = void 0;
  for (v2 = "function" == typeof e2 ? e2 : pS; ; ) {
    if ((p2 = a2[c2]) && -1 != p2.indexOf("~") && (p2 = rS(p2)), o2 && "__proto__" == p2)
      throw new TypeError("JSON-Patch: modifying `__proto__` prop is banned for security reasons, if this was on purpose, please set `banPrototypeModifications` flag false and pass it to this function. More info in fast-json-patch README");
    if (e2 && void 0 === l2 && (void 0 === f2[p2] ? l2 = a2.slice(0, c2).join("/") : c2 == s2 - 1 && (l2 = r2.path), void 0 !== l2 && v2(r2, 0, t9, l2)), c2++, Array.isArray(f2)) {
      if ("-" === p2)
        p2 = f2.length;
      else {
        if (e2 && !ZA(p2))
          throw new iS("Expected an unsigned base-10 integer value, making the new referenced value the array element with the zero-based index", "OPERATION_PATH_ILLEGAL_ARRAY_INDEX", i2, r2, t9);
        ZA(p2) && (p2 = ~~p2);
      }
      if (c2 >= s2) {
        if (e2 && "add" === r2.op && p2 > f2.length)
          throw new iS("The specified index MUST NOT be greater than the number of elements in the array", "OPERATION_VALUE_OUT_OF_BOUNDS", i2, r2, t9);
        if (false === (u2 = fS[r2.op].call(r2, f2, p2, t9)).test)
          throw new iS("Test operation failed", "TEST_OPERATION_FAILED", i2, r2, t9);
        return u2;
      }
    } else if (c2 >= s2) {
      if (false === (u2 = aS[r2.op].call(r2, f2, p2, t9)).test)
        throw new iS("Test operation failed", "TEST_OPERATION_FAILED", i2, r2, t9);
      return u2;
    }
    if (f2 = f2[p2], e2 && c2 < s2 && (!f2 || "object" != typeof f2))
      throw new iS("Cannot perform operation at the desired path", "OPERATION_PATH_UNRESOLVABLE", i2, r2, t9);
  }
}
function lS(t9, r2, e2, n2, o2) {
  if (void 0 === n2 && (n2 = true), void 0 === o2 && (o2 = true), e2 && !Array.isArray(r2))
    throw new iS("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
  n2 || (t9 = XA(t9));
  for (var i2 = new Array(r2.length), u2 = 0, a2 = r2.length; u2 < a2; u2++)
    i2[u2] = sS(t9, r2[u2], e2, true, o2, u2), t9 = i2[u2].newDocument;
  return i2.newDocument = t9, i2;
}
function pS(t9, r2, e2, n2) {
  if ("object" != typeof t9 || null === t9 || Array.isArray(t9))
    throw new iS("Operation is not an object", "OPERATION_NOT_AN_OBJECT", r2, t9, e2);
  if (!aS[t9.op])
    throw new iS("Operation `op` property is not one of operations defined in RFC-6902", "OPERATION_OP_INVALID", r2, t9, e2);
  if ("string" != typeof t9.path)
    throw new iS("Operation `path` property is not a string", "OPERATION_PATH_INVALID", r2, t9, e2);
  if (0 !== t9.path.indexOf("/") && t9.path.length > 0)
    throw new iS('Operation `path` property must start with "/"', "OPERATION_PATH_INVALID", r2, t9, e2);
  if (("move" === t9.op || "copy" === t9.op) && "string" != typeof t9.from)
    throw new iS("Operation `from` property is not present (applicable in `move` and `copy` operations)", "OPERATION_FROM_REQUIRED", r2, t9, e2);
  if (("add" === t9.op || "replace" === t9.op || "test" === t9.op) && void 0 === t9.value)
    throw new iS("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_REQUIRED", r2, t9, e2);
  if (("add" === t9.op || "replace" === t9.op || "test" === t9.op) && eS(t9.value))
    throw new iS("Operation `value` property is not present (applicable in `add`, `replace` and `test` operations)", "OPERATION_VALUE_CANNOT_CONTAIN_UNDEFINED", r2, t9, e2);
  if (e2) {
    if ("add" == t9.op) {
      var o2 = t9.path.split("/").length, i2 = n2.split("/").length;
      if (o2 !== i2 + 1 && o2 !== i2)
        throw new iS("Cannot perform an `add` operation at the desired path", "OPERATION_PATH_CANNOT_ADD", r2, t9, e2);
    } else if ("replace" === t9.op || "remove" === t9.op || "_get" === t9.op) {
      if (t9.path !== n2)
        throw new iS("Cannot perform the operation at a path that does not exist", "OPERATION_PATH_UNRESOLVABLE", r2, t9, e2);
    } else if ("move" === t9.op || "copy" === t9.op) {
      var u2 = vS([{ op: "_get", path: t9.from, value: void 0 }], e2);
      if (u2 && "OPERATION_PATH_UNRESOLVABLE" === u2.name)
        throw new iS("Cannot perform the operation from a path that does not exist", "OPERATION_FROM_UNRESOLVABLE", r2, t9, e2);
    }
  }
}
function vS(t9, r2, e2) {
  try {
    if (!Array.isArray(t9))
      throw new iS("Patch sequence must be an array", "SEQUENCE_NOT_AN_ARRAY");
    if (r2)
      lS(XA(r2), XA(t9), e2 || true);
    else {
      e2 = e2 || pS;
      for (var n2 = 0; n2 < t9.length; n2++)
        e2(t9[n2], n2, r2, void 0);
    }
  } catch (t10) {
    if (t10 instanceof iS)
      return t10;
    throw t10;
  }
}
function hS(t9, r2) {
  if (t9 === r2)
    return true;
  if (t9 && r2 && "object" == typeof t9 && "object" == typeof r2) {
    var e2, n2, o2, i2 = Array.isArray(t9), u2 = Array.isArray(r2);
    if (i2 && u2) {
      if ((n2 = t9.length) != r2.length)
        return false;
      for (e2 = n2; 0 != e2--; )
        if (!hS(t9[e2], r2[e2]))
          return false;
      return true;
    }
    if (i2 != u2)
      return false;
    var a2 = Object.keys(t9);
    if ((n2 = a2.length) !== Object.keys(r2).length)
      return false;
    for (e2 = n2; 0 != e2--; )
      if (!r2.hasOwnProperty(a2[e2]))
        return false;
    for (e2 = n2; 0 != e2--; )
      if (!hS(t9[o2 = a2[e2]], r2[o2]))
        return false;
    return true;
  }
  return t9 != t9 && r2 != r2;
}
const dS = Object.freeze(Object.defineProperty({ __proto__: null, JsonPatchError: iS, deepClone: uS, getValueByPointer: cS, applyOperation: sS, applyPatch: lS, applyReducer: function(t9, r2, e2) {
  var n2 = sS(t9, r2);
  if (false === n2.test)
    throw new iS("Test operation failed", "TEST_OPERATION_FAILED", e2, r2, t9);
  return n2.newDocument;
}, validator: pS, validate: vS, _areEquals: hS }, Symbol.toStringTag, { value: "Module" }));
/*!
 * https://github.com/Starcounter-Jack/JSON-Patch
 * (c) 2017 Joachim Wester
 * MIT license
 */
var yS = /* @__PURE__ */ new WeakMap(), bS = function(t9) {
  this.observers = /* @__PURE__ */ new Map(), this.obj = t9;
}, mS = function(t9, r2) {
  this.callback = t9, this.observer = r2;
};
function gS(t9, r2) {
  void 0 === r2 && (r2 = false);
  var e2 = yS.get(t9.object);
  wS(e2.value, t9.object, t9.patches, "", r2), t9.patches.length && lS(e2.value, t9.patches);
  var n2 = t9.patches;
  return n2.length > 0 && (t9.patches = [], t9.callback && t9.callback(n2)), n2;
}
function wS(t9, r2, e2, n2, o2) {
  if (r2 !== t9) {
    "function" == typeof r2.toJSON && (r2 = r2.toJSON());
    for (var i2 = KA(r2), u2 = KA(t9), a2 = false, f2 = u2.length - 1; f2 >= 0; f2--) {
      var c2 = t9[l2 = u2[f2]];
      if (!QA(r2, l2) || void 0 === r2[l2] && void 0 !== c2 && false === Array.isArray(r2))
        Array.isArray(t9) === Array.isArray(r2) ? (o2 && e2.push({ op: "test", path: n2 + "/" + tS(l2), value: XA(c2) }), e2.push({ op: "remove", path: n2 + "/" + tS(l2) }), a2 = true) : (o2 && e2.push({ op: "test", path: n2, value: t9 }), e2.push({ op: "replace", path: n2, value: r2 }));
      else {
        var s2 = r2[l2];
        "object" == typeof c2 && null != c2 && "object" == typeof s2 && null != s2 && Array.isArray(c2) === Array.isArray(s2) ? wS(c2, s2, e2, n2 + "/" + tS(l2), o2) : c2 !== s2 && (o2 && e2.push({ op: "test", path: n2 + "/" + tS(l2), value: XA(c2) }), e2.push({ op: "replace", path: n2 + "/" + tS(l2), value: XA(s2) }));
      }
    }
    if (a2 || i2.length != u2.length)
      for (f2 = 0; f2 < i2.length; f2++) {
        var l2;
        QA(t9, l2 = i2[f2]) || void 0 === r2[l2] || e2.push({ op: "add", path: n2 + "/" + tS(l2), value: XA(r2[l2]) });
      }
  }
}
const jS = Object.freeze(Object.defineProperty({ __proto__: null, unobserve: function(t9, r2) {
  r2.unobserve();
}, observe: function(t9, r2) {
  var e2, n2 = function(t10) {
    return yS.get(t10);
  }(t9);
  if (n2) {
    var o2 = function(t10, r3) {
      return t10.observers.get(r3);
    }(n2, r2);
    e2 = o2 && o2.observer;
  } else
    n2 = new bS(t9), yS.set(t9, n2);
  if (e2)
    return e2;
  if (e2 = {}, n2.value = XA(t9), r2) {
    e2.callback = r2, e2.next = null;
    var i2 = function() {
      gS(e2);
    }, u2 = function() {
      clearTimeout(e2.next), e2.next = setTimeout(i2);
    };
    "undefined" != typeof window && (window.addEventListener("mouseup", u2), window.addEventListener("keyup", u2), window.addEventListener("mousedown", u2), window.addEventListener("keydown", u2), window.addEventListener("change", u2));
  }
  return e2.patches = [], e2.object = t9, e2.unobserve = function() {
    gS(e2), clearTimeout(e2.next), function(t10, r3) {
      t10.observers.delete(r3.callback);
    }(n2, e2), "undefined" != typeof window && (window.removeEventListener("mouseup", u2), window.removeEventListener("keyup", u2), window.removeEventListener("mousedown", u2), window.removeEventListener("keydown", u2), window.removeEventListener("change", u2));
  }, n2.observers.set(r2, new mS(r2, e2)), e2;
}, generate: gS, compare: function(t9, r2, e2) {
  void 0 === e2 && (e2 = false);
  var n2 = [];
  return wS(t9, r2, n2, "", e2), n2;
} }, Symbol.toStringTag, { value: "Module" }));
Object.assign({}, dS, jS, { JsonPatchError: oS, deepClone: XA, escapePathComponent: tS, unescapePathComponent: rS });
var OS = function(t9) {
  return function(t10) {
    return !!t10 && "object" == typeof t10;
  }(t9) && !function(t10) {
    var r2 = Object.prototype.toString.call(t10);
    return "[object RegExp]" === r2 || "[object Date]" === r2 || function(t11) {
      return t11.$$typeof === AS;
    }(t10);
  }(t9);
};
var AS = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;
function SS(t9, r2) {
  return false !== r2.clone && r2.isMergeableObject(t9) ? _S((e2 = t9, Array.isArray(e2) ? [] : {}), t9, r2) : t9;
  var e2;
}
function xS(t9, r2, e2) {
  return t9.concat(r2).map(function(t10) {
    return SS(t10, e2);
  });
}
function ES(t9) {
  return Object.keys(t9).concat(function(t10) {
    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(t10).filter(function(r2) {
      return t10.propertyIsEnumerable(r2);
    }) : [];
  }(t9));
}
function PS(t9, r2) {
  try {
    return r2 in t9;
  } catch (t10) {
    return false;
  }
}
function kS(t9, r2, e2) {
  var n2 = {};
  return e2.isMergeableObject(t9) && ES(t9).forEach(function(r3) {
    n2[r3] = SS(t9[r3], e2);
  }), ES(r2).forEach(function(o2) {
    (function(t10, r3) {
      return PS(t10, r3) && !(Object.hasOwnProperty.call(t10, r3) && Object.propertyIsEnumerable.call(t10, r3));
    })(t9, o2) || (PS(t9, o2) && e2.isMergeableObject(r2[o2]) ? n2[o2] = function(t10, r3) {
      if (!r3.customMerge)
        return _S;
      var e3 = r3.customMerge(t10);
      return "function" == typeof e3 ? e3 : _S;
    }(o2, e2)(t9[o2], r2[o2], e2) : n2[o2] = SS(r2[o2], e2));
  }), n2;
}
function _S(t9, r2, e2) {
  (e2 = e2 || {}).arrayMerge = e2.arrayMerge || xS, e2.isMergeableObject = e2.isMergeableObject || OS, e2.cloneUnlessOtherwiseSpecified = SS;
  var n2 = Array.isArray(r2);
  return n2 === Array.isArray(t9) ? n2 ? e2.arrayMerge(t9, r2, e2) : kS(t9, r2, e2) : SS(r2, e2);
}
_S.all = function(t9, r2) {
  if (!Array.isArray(t9))
    throw new Error("first argument should be an array");
  return t9.reduce(function(t10, e2) {
    return _S(t10, e2, r2);
  }, {});
};
var IS = _S;
const TS = { add: function(t9, r2) {
  return { op: "add", path: t9, value: r2 };
}, replace: FS, remove: function(t9) {
  return { op: "remove", path: t9 };
}, merge: function(t9, r2) {
  return { type: "mutation", op: "merge", path: t9, value: r2 };
}, mergeDeep: function(t9, r2) {
  return { type: "mutation", op: "mergeDeep", path: t9, value: r2 };
}, context: function(t9, r2) {
  return { type: "context", path: t9, value: r2 };
}, getIn: function(t9, r2) {
  return r2.reduce(function(t10, r3) {
    return void 0 !== r3 && t10 ? t10[r3] : t10;
  }, t9);
}, applyPatch: function(t9, r2, e2) {
  if (e2 = e2 || {}, "merge" === (r2 = Rc(Rc({}, r2), {}, { path: r2.path && RS(r2.path) })).op) {
    var n2 = JS(t9, r2.path);
    Yc(n2, r2.value), lS(t9, [FS(r2.path, n2)]);
  } else if ("mergeDeep" === r2.op) {
    var o2 = JS(t9, r2.path), i2 = IS(o2, r2.value);
    t9 = lS(t9, [FS(r2.path, i2)]).newDocument;
  } else if ("add" === r2.op && "" === r2.path && $S(r2.value)) {
    var u2 = Yb(r2.value).reduce(function(t10, e3) {
      return t10.push({ op: "add", path: "/".concat(RS(e3)), value: r2.value[e3] }), t10;
    }, []);
    lS(t9, u2);
  } else if ("replace" === r2.op && "" === r2.path) {
    var a2 = r2.value;
    e2.allowMetaPatches && r2.meta && WS(r2) && (Array.isArray(r2.value) || $S(r2.value)) && (a2 = Rc(Rc({}, a2), r2.meta)), t9 = a2;
  } else if (lS(t9, [r2]), e2.allowMetaPatches && r2.meta && WS(r2) && (Array.isArray(r2.value) || $S(r2.value))) {
    var f2 = Rc(Rc({}, JS(t9, r2.path)), r2.meta);
    lS(t9, [FS(r2.path, f2)]);
  }
  return t9;
}, parentPathMatch: function(t9, r2) {
  if (!Array.isArray(r2))
    return false;
  for (var e2 = 0, n2 = r2.length; e2 < n2; e2 += 1)
    if (r2[e2] !== t9[e2])
      return false;
  return true;
}, flatten: LS, fullyNormalizeArray: function(t9) {
  return CS(LS(US(t9)));
}, normalizeArray: US, isPromise: function(t9) {
  return $S(t9) && BS(t9.then);
}, forEachNew: function(t9, r2) {
  try {
    return NS(t9, DS, r2);
  } catch (t10) {
    return t10;
  }
}, forEachNewPrimitive: function(t9, r2) {
  try {
    return NS(t9, MS, r2);
  } catch (t10) {
    return t10;
  }
}, isJsonPatch: qS, isContextPatch: function(t9) {
  return zS(t9) && "context" === t9.type;
}, isPatch: zS, isMutation: GS, isAdditiveMutation: WS, isGenerator: function(t9) {
  return "[object GeneratorFunction]" === Object.prototype.toString.call(t9);
}, isFunction: BS, isObject: $S, isError: function(t9) {
  return t9 instanceof Error;
} };
function RS(t9) {
  return Array.isArray(t9) ? t9.length < 1 ? "" : "/".concat(Hb(t9).call(t9, function(t10) {
    return (t10 + "").replace(/~/g, "~0").replace(/\//g, "~1");
  }).join("/")) : t9;
}
function FS(t9, r2, e2) {
  return { op: "replace", path: t9, value: r2, meta: e2 };
}
function NS(t9, r2, e2) {
  var n2;
  return CS(LS(Hb(n2 = hm(t9).call(t9, WS)).call(n2, function(t10) {
    return r2(t10.value, e2, t10.path);
  }) || []));
}
function MS(t9, r2, e2) {
  return e2 = e2 || [], Array.isArray(t9) ? Hb(t9).call(t9, function(t10, n3) {
    return MS(t10, r2, rm(e2).call(e2, n3));
  }) : $S(t9) ? Hb(n2 = Yb(t9)).call(n2, function(n3) {
    return MS(t9[n3], r2, rm(e2).call(e2, n3));
  }) : r2(t9, e2[e2.length - 1], e2);
  var n2;
}
function DS(t9, r2, e2) {
  var n2 = [];
  if ((e2 = e2 || []).length > 0) {
    var o2 = r2(t9, e2[e2.length - 1], e2);
    o2 && (n2 = rm(n2).call(n2, o2));
  }
  if (Array.isArray(t9)) {
    var i2 = Hb(t9).call(t9, function(t10, n3) {
      return DS(t10, r2, rm(e2).call(e2, n3));
    });
    i2 && (n2 = rm(n2).call(n2, i2));
  } else if ($S(t9)) {
    var u2, a2 = Hb(u2 = Yb(t9)).call(u2, function(n3) {
      return DS(t9[n3], r2, rm(e2).call(e2, n3));
    });
    a2 && (n2 = rm(n2).call(n2, a2));
  }
  return n2 = LS(n2);
}
function US(t9) {
  return Array.isArray(t9) ? t9 : [t9];
}
function LS(t9) {
  var r2;
  return rm(r2 = []).apply(r2, WO(Hb(t9).call(t9, function(t10) {
    return Array.isArray(t10) ? LS(t10) : t10;
  })));
}
function CS(t9) {
  return hm(t9).call(t9, function(t10) {
    return void 0 !== t10;
  });
}
function $S(t9) {
  return t9 && "object" === qp(t9);
}
function BS(t9) {
  return t9 && "function" == typeof t9;
}
function qS(t9) {
  if (zS(t9)) {
    var r2 = t9.op;
    return "add" === r2 || "remove" === r2 || "replace" === r2;
  }
  return false;
}
function GS(t9) {
  return qS(t9) || zS(t9) && "mutation" === t9.type;
}
function WS(t9) {
  return GS(t9) && ("add" === t9.op || "replace" === t9.op || "merge" === t9.op || "mergeDeep" === t9.op);
}
function zS(t9) {
  return t9 && "object" === qp(t9);
}
function JS(t9, r2) {
  try {
    return cS(t9, r2);
  } catch (t10) {
    return console.error(t10), {};
  }
}
var HS = { exports: {} }, VS = { exports: {} }, YS = openapi_parser_i(function() {
  if ("function" == typeof ArrayBuffer) {
    var t9 = new ArrayBuffer(8);
    Object.isExtensible(t9) && Object.defineProperty(t9, "a", { value: 8 });
  }
}), QS = openapi_parser_i, KS = openapi_parser_H, XS = openapi_parser_N, ZS = YS, tx = Object.isExtensible, rx = QS(function() {
  tx(1);
}) || ZS ? function(t9) {
  return !!KS(t9) && ((!ZS || "ArrayBuffer" != XS(t9)) && (!tx || tx(t9)));
} : tx, ex = !openapi_parser_i(function() {
  return Object.isExtensible(Object.preventExtensions({}));
}), nx = ge, ox = openapi_parser_b, ix = Ue, ux = openapi_parser_H, ax = qt, fx = Wr.f, cx = $n, sx = Gn, lx = rx, px = ex, vx = false, hx = Ht("meta"), dx = 0, yx = function(t9) {
  fx(t9, hx, { value: { objectID: "O" + dx++, weakData: {} } });
}, bx = VS.exports = { enable: function() {
  bx.enable = function() {
  }, vx = true;
  var t9 = cx.f, r2 = ox([].splice), e2 = {};
  e2[hx] = 1, t9(e2).length && (cx.f = function(e3) {
    for (var n2 = t9(e3), o2 = 0, i2 = n2.length; o2 < i2; o2++)
      if (n2[o2] === hx) {
        r2(n2, o2, 1);
        break;
      }
    return n2;
  }, nx({ target: "Object", stat: true, forced: true }, { getOwnPropertyNames: sx.f }));
}, fastKey: function(t9, r2) {
  if (!ux(t9))
    return "symbol" == typeof t9 ? t9 : ("string" == typeof t9 ? "S" : "P") + t9;
  if (!ax(t9, hx)) {
    if (!lx(t9))
      return "F";
    if (!r2)
      return "E";
    yx(t9);
  }
  return t9[hx].objectID;
}, getWeakData: function(t9, r2) {
  if (!ax(t9, hx)) {
    if (!lx(t9))
      return true;
    if (!r2)
      return false;
    yx(t9);
  }
  return t9[hx].weakData;
}, onFreeze: function(t9) {
  return px && vx && lx(t9) && !ax(t9, hx) && yx(t9), t9;
} };
ix[hx] = true;
var mx = ge, gx = openapi_parser_o, wx = VS.exports, jx = openapi_parser_i, Ox = ae, Ax = hv, Sx = Qv, xx = openapi_parser_m, Ex = openapi_parser_H, Px = xo, kx = Wr.f, _x = _i.forEach, Ix = openapi_parser_w, Tx = Zo.set, Rx = Zo.getterFor, Fx = openapi_parser_b, Nx = Gv, Mx = VS.exports.getWeakData, Dx = Qr, Ux = openapi_parser_H, Lx = Qv, Cx = hv, $x = qt, Bx = Zo.set, qx = Zo.getterFor, Gx = _i.find, Wx = _i.findIndex, zx = Fx([].splice), Jx = 0, Hx = function(t9) {
  return t9.frozen || (t9.frozen = new Vx());
}, Vx = function() {
  this.entries = [];
}, Yx = function(t9, r2) {
  return Gx(t9.entries, function(t10) {
    return t10[0] === r2;
  });
};
Vx.prototype = { get: function(t9) {
  var r2 = Yx(this, t9);
  if (r2)
    return r2[1];
}, has: function(t9) {
  return !!Yx(this, t9);
}, set: function(t9, r2) {
  var e2 = Yx(this, t9);
  e2 ? e2[1] = r2 : this.entries.push([t9, r2]);
}, delete: function(t9) {
  var r2 = Wx(this.entries, function(r3) {
    return r3[0] === t9;
  });
  return ~r2 && zx(this.entries, r2, 1), !!~r2;
} };
var Qx, Kx = { getConstructor: function(t9, r2, e2, n2) {
  var o2 = t9(function(t10, o3) {
    Lx(t10, i2), Bx(t10, { type: r2, id: Jx++, frozen: void 0 }), null != o3 && Cx(o3, t10[n2], { that: t10, AS_ENTRIES: e2 });
  }), i2 = o2.prototype, u2 = qx(r2), a2 = function(t10, r3, e3) {
    var n3 = u2(t10), o3 = Mx(Dx(r3), true);
    return true === o3 ? Hx(n3).set(r3, e3) : o3[n3.id] = e3, t10;
  };
  return Nx(i2, { delete: function(t10) {
    var r3 = u2(this);
    if (!Ux(t10))
      return false;
    var e3 = Mx(t10);
    return true === e3 ? Hx(r3).delete(t10) : e3 && $x(e3, r3.id) && delete e3[r3.id];
  }, has: function(t10) {
    var r3 = u2(this);
    if (!Ux(t10))
      return false;
    var e3 = Mx(t10);
    return true === e3 ? Hx(r3).has(t10) : e3 && $x(e3, r3.id);
  } }), Nx(i2, e2 ? { get: function(t10) {
    var r3 = u2(this);
    if (Ux(t10)) {
      var e3 = Mx(t10);
      return true === e3 ? Hx(r3).get(t10) : e3 ? e3[r3.id] : void 0;
    }
  }, set: function(t10, r3) {
    return a2(this, t10, r3);
  } } : { add: function(t10) {
    return a2(this, t10, true);
  } }), o2;
} }, Xx = openapi_parser_o, Zx = openapi_parser_b, tE = Gv, rE = VS.exports, eE = function(t9, r2, e2) {
  var n2, o2 = -1 !== t9.indexOf("Map"), i2 = -1 !== t9.indexOf("Weak"), u2 = o2 ? "set" : "add", a2 = gx[t9], f2 = a2 && a2.prototype, c2 = {};
  if (Ix && xx(a2) && (i2 || f2.forEach && !jx(function() {
    new a2().entries().next();
  }))) {
    var s2 = (n2 = r2(function(r3, e3) {
      Tx(Sx(r3, s2), { type: t9, collection: new a2() }), null != e3 && Ax(e3, r3[u2], { that: r3, AS_ENTRIES: o2 });
    })).prototype, l2 = Rx(t9);
    _x(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function(t10) {
      var r3 = "add" == t10 || "set" == t10;
      !(t10 in f2) || i2 && "clear" == t10 || Ox(s2, t10, function(e3, n3) {
        var o3 = l2(this).collection;
        if (!r3 && i2 && !Ex(e3))
          return "get" == t10 && void 0;
        var u3 = o3[t10](0 === e3 ? 0 : e3, n3);
        return r3 ? this : u3;
      });
    }), i2 || kx(s2, "size", { configurable: true, get: function() {
      return l2(this).collection.size;
    } });
  } else
    n2 = e2.getConstructor(r2, t9, o2, u2), wx.enable();
  return Px(n2, t9, false, true), c2[t9] = n2, mx({ global: true, forced: true }, c2), i2 || e2.setStrong(n2, t9, o2), n2;
}, nE = Kx, oE = openapi_parser_H, iE = rx, uE = Zo.enforce, aE = Do, fE = !Xx.ActiveXObject && "ActiveXObject" in Xx, cE = function(t9) {
  return function() {
    return t9(this, arguments.length ? arguments[0] : void 0);
  };
}, sE = eE("WeakMap", cE, nE);
if (aE && fE) {
  Qx = nE.getConstructor(cE, "WeakMap", true), rE.enable();
  var lE = sE.prototype, pE = Zx(lE.delete), vE = Zx(lE.has), hE = Zx(lE.get), dE = Zx(lE.set);
  tE(lE, { delete: function(t9) {
    if (oE(t9) && !iE(t9)) {
      var r2 = uE(this);
      return r2.frozen || (r2.frozen = new Qx()), pE(this, t9) || r2.frozen.delete(t9);
    }
    return pE(this, t9);
  }, has: function(t9) {
    if (oE(t9) && !iE(t9)) {
      var r2 = uE(this);
      return r2.frozen || (r2.frozen = new Qx()), vE(this, t9) || r2.frozen.has(t9);
    }
    return vE(this, t9);
  }, get: function(t9) {
    if (oE(t9) && !iE(t9)) {
      var r2 = uE(this);
      return r2.frozen || (r2.frozen = new Qx()), vE(this, t9) ? hE(this, t9) : r2.frozen.get(t9);
    }
    return hE(this, t9);
  }, set: function(t9, r2) {
    if (oE(t9) && !iE(t9)) {
      var e2 = uE(this);
      e2.frozen || (e2.frozen = new Qx()), vE(this, t9) ? dE(this, t9, r2) : e2.frozen.set(t9, r2);
    } else
      dE(this, t9, r2);
    return this;
  } });
}
const yE = openapi_parser_t(HS.exports = openapi_parser_V.WeakMap);
var bE = { exports: {} }, mE = openapi_parser_i, gE = or("iterator"), wE = !mE(function() {
  var t9 = new URL("b?a=1&b=2&c=3", "http://a"), r2 = t9.searchParams, e2 = "";
  return t9.pathname = "c%20d", r2.forEach(function(t10, n2) {
    r2.delete("b"), e2 += n2 + t10;
  }), !t9.toJSON || !r2.sort || "http://a/c%20d?a=1&c=3" !== t9.href || "3" !== r2.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !r2[gE] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://\u0442\u0435\u0441\u0442").host || "#%D0%B1" !== new URL("http://a#\u0431").hash || "a1c3" !== e2 || "x" !== new URL("http://x", void 0).host;
}), jE = Zn, OE = Math.floor, AE = function(t9, r2) {
  var e2 = t9.length, n2 = OE(e2 / 2);
  return e2 < 8 ? SE(t9, r2) : xE(t9, AE(jE(t9, 0, n2), r2), AE(jE(t9, n2), r2), r2);
}, SE = function(t9, r2) {
  for (var e2, n2, o2 = t9.length, i2 = 1; i2 < o2; ) {
    for (n2 = i2, e2 = t9[i2]; n2 && r2(t9[n2 - 1], e2) > 0; )
      t9[n2] = t9[--n2];
    n2 !== i2++ && (t9[n2] = e2);
  }
  return t9;
}, xE = function(t9, r2, e2, n2) {
  for (var o2 = r2.length, i2 = e2.length, u2 = 0, a2 = 0; u2 < o2 || a2 < i2; )
    t9[u2 + a2] = u2 < o2 && a2 < i2 ? n2(r2[u2], e2[a2]) <= 0 ? r2[u2++] : e2[a2++] : u2 < o2 ? r2[u2++] : e2[a2++];
  return t9;
}, EE = ge, PE = openapi_parser_o, kE = openapi_parser_Z, _E = openapi_parser_A, IE = openapi_parser_b, TE = wE, RE = fo, FE = Gv, NE = xo, ME = of, DE = Zo, UE = Qv, LE = openapi_parser_m, CE = qt, $E = Gr, BE = ln, qE = Qr, GE = openapi_parser_H, WE = hn, zE = Cn, JE = openapi_parser_I, HE = yp, VE = El, YE = ih, QE = AE, KE = or("iterator"), XE = DE.set, ZE = DE.getterFor("URLSearchParams"), tP = DE.getterFor("URLSearchParamsIterator"), rP = kE("fetch"), eP = kE("Request"), nP = kE("Headers"), oP = eP && eP.prototype, iP = nP && nP.prototype, uP = PE.RegExp, aP = PE.TypeError, fP = PE.decodeURIComponent, cP = PE.encodeURIComponent, sP = IE("".charAt), lP = IE([].join), pP = IE([].push), vP = IE("".replace), hP = IE([].shift), dP = IE([].splice), yP = IE("".split), bP = IE("".slice), mP = /\+/g, gP = Array(4), wP = function(t9) {
  return gP[t9 - 1] || (gP[t9 - 1] = uP("((?:%[\\da-f]{2}){" + t9 + "})", "gi"));
}, jP = function(t9) {
  try {
    return fP(t9);
  } catch (r2) {
    return t9;
  }
}, OP = function(t9) {
  var r2 = vP(t9, mP, " "), e2 = 4;
  try {
    return fP(r2);
  } catch (t10) {
    for (; e2; )
      r2 = vP(r2, wP(e2--), jP);
    return r2;
  }
}, AP = /[!'()~]|%20/g, SP = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+" }, xP = function(t9) {
  return SP[t9];
}, EP = function(t9) {
  return vP(cP(t9), AP, xP);
}, PP = ME(function(t9, r2) {
  XE(this, { type: "URLSearchParamsIterator", iterator: HE(ZE(t9).entries), kind: r2 });
}, "Iterator", function() {
  var t9 = tP(this), r2 = t9.kind, e2 = t9.iterator.next(), n2 = e2.value;
  return e2.done || (e2.value = "keys" === r2 ? n2.key : "values" === r2 ? n2.value : [n2.key, n2.value]), e2;
}, true), kP = function(t9) {
  this.entries = [], this.url = null, void 0 !== t9 && (GE(t9) ? this.parseObject(t9) : this.parseQuery("string" == typeof t9 ? "?" === sP(t9, 0) ? bP(t9, 1) : t9 : WE(t9)));
};
kP.prototype = { type: "URLSearchParams", bindURL: function(t9) {
  this.url = t9, this.update();
}, parseObject: function(t9) {
  var r2, e2, n2, o2, i2, u2, a2, f2 = VE(t9);
  if (f2)
    for (e2 = (r2 = HE(t9, f2)).next; !(n2 = _E(e2, r2)).done; ) {
      if (i2 = (o2 = HE(qE(n2.value))).next, (u2 = _E(i2, o2)).done || (a2 = _E(i2, o2)).done || !_E(i2, o2).done)
        throw aP("Expected sequence with length 2");
      pP(this.entries, { key: WE(u2.value), value: WE(a2.value) });
    }
  else
    for (var c2 in t9)
      CE(t9, c2) && pP(this.entries, { key: c2, value: WE(t9[c2]) });
}, parseQuery: function(t9) {
  if (t9)
    for (var r2, e2, n2 = yP(t9, "&"), o2 = 0; o2 < n2.length; )
      (r2 = n2[o2++]).length && (e2 = yP(r2, "="), pP(this.entries, { key: OP(hP(e2)), value: OP(lP(e2, "=")) }));
}, serialize: function() {
  for (var t9, r2 = this.entries, e2 = [], n2 = 0; n2 < r2.length; )
    t9 = r2[n2++], pP(e2, EP(t9.key) + "=" + EP(t9.value));
  return lP(e2, "&");
}, update: function() {
  this.entries.length = 0, this.parseQuery(this.url.query);
}, updateURL: function() {
  this.url && this.url.update();
} };
var _P = function() {
  UE(this, IP);
  var t9 = arguments.length > 0 ? arguments[0] : void 0;
  XE(this, new kP(t9));
}, IP = _P.prototype;
if (FE(IP, { append: function(t9, r2) {
  YE(arguments.length, 2);
  var e2 = ZE(this);
  pP(e2.entries, { key: WE(t9), value: WE(r2) }), e2.updateURL();
}, delete: function(t9) {
  YE(arguments.length, 1);
  for (var r2 = ZE(this), e2 = r2.entries, n2 = WE(t9), o2 = 0; o2 < e2.length; )
    e2[o2].key === n2 ? dP(e2, o2, 1) : o2++;
  r2.updateURL();
}, get: function(t9) {
  YE(arguments.length, 1);
  for (var r2 = ZE(this).entries, e2 = WE(t9), n2 = 0; n2 < r2.length; n2++)
    if (r2[n2].key === e2)
      return r2[n2].value;
  return null;
}, getAll: function(t9) {
  YE(arguments.length, 1);
  for (var r2 = ZE(this).entries, e2 = WE(t9), n2 = [], o2 = 0; o2 < r2.length; o2++)
    r2[o2].key === e2 && pP(n2, r2[o2].value);
  return n2;
}, has: function(t9) {
  YE(arguments.length, 1);
  for (var r2 = ZE(this).entries, e2 = WE(t9), n2 = 0; n2 < r2.length; )
    if (r2[n2++].key === e2)
      return true;
  return false;
}, set: function(t9, r2) {
  YE(arguments.length, 1);
  for (var e2, n2 = ZE(this), o2 = n2.entries, i2 = false, u2 = WE(t9), a2 = WE(r2), f2 = 0; f2 < o2.length; f2++)
    (e2 = o2[f2]).key === u2 && (i2 ? dP(o2, f2--, 1) : (i2 = true, e2.value = a2));
  i2 || pP(o2, { key: u2, value: a2 }), n2.updateURL();
}, sort: function() {
  var t9 = ZE(this);
  QE(t9.entries, function(t10, r2) {
    return t10.key > r2.key ? 1 : -1;
  }), t9.updateURL();
}, forEach: function(t9) {
  for (var r2, e2 = ZE(this).entries, n2 = $E(t9, arguments.length > 1 ? arguments[1] : void 0), o2 = 0; o2 < e2.length; )
    n2((r2 = e2[o2++]).value, r2.key, this);
}, keys: function() {
  return new PP(this, "keys");
}, values: function() {
  return new PP(this, "values");
}, entries: function() {
  return new PP(this, "entries");
} }, { enumerable: true }), RE(IP, KE, IP.entries, { name: "entries" }), RE(IP, "toString", function() {
  return ZE(this).serialize();
}, { enumerable: true }), NE(_P, "URLSearchParams"), EE({ global: true, forced: !TE }, { URLSearchParams: _P }), !TE && LE(nP)) {
  var TP = IE(iP.has), RP = IE(iP.set), FP = function(t9) {
    if (GE(t9)) {
      var r2, e2 = t9.body;
      if ("URLSearchParams" === BE(e2))
        return r2 = t9.headers ? new nP(t9.headers) : new nP(), TP(r2, "content-type") || RP(r2, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), zE(t9, { body: JE(0, WE(e2)), headers: JE(0, r2) });
    }
    return t9;
  };
  if (LE(rP) && EE({ global: true, enumerable: true, forced: true }, { fetch: function(t9) {
    return rP(t9, arguments.length > 1 ? FP(arguments[1]) : {});
  } }), LE(eP)) {
    var NP = function(t9) {
      return UE(this, oP), new eP(t9, arguments.length > 1 ? FP(arguments[1]) : {});
    };
    oP.constructor = NP, NP.prototype = oP, EE({ global: true, forced: true }, { Request: NP });
  }
}
const MP = openapi_parser_t(bE.exports = openapi_parser_V.URLSearchParams);
function DP(t9, r2) {
  function e2() {
    Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack;
    for (var t10 = arguments.length, e3 = new Array(t10), n2 = 0; n2 < t10; n2++)
      e3[n2] = arguments[n2];
    this.message = e3[0], r2 && r2.apply(this, e3);
  }
  return e2.prototype = new Error(), e2.prototype.name = t9, e2.prototype.constructor = e2, e2;
}
var UP = { exports: {} }, LP = UP.exports = function(t9) {
  return new CP(t9);
};
function CP(t9) {
  this.value = t9;
}
function $P(t9, r2, e2) {
  var n2 = [], o2 = [], i2 = true;
  return function t10(u2) {
    var a2 = e2 ? BP(u2) : u2, f2 = {}, c2 = true, s2 = { node: a2, node_: u2, path: [].concat(n2), parent: o2[o2.length - 1], parents: o2, key: n2.slice(-1)[0], isRoot: 0 === n2.length, level: n2.length, circular: null, update: function(t11, r3) {
      s2.isRoot || (s2.parent.node[s2.key] = t11), s2.node = t11, r3 && (c2 = false);
    }, delete: function(t11) {
      delete s2.parent.node[s2.key], t11 && (c2 = false);
    }, remove: function(t11) {
      WP(s2.parent.node) ? s2.parent.node.splice(s2.key, 1) : delete s2.parent.node[s2.key], t11 && (c2 = false);
    }, keys: null, before: function(t11) {
      f2.before = t11;
    }, after: function(t11) {
      f2.after = t11;
    }, pre: function(t11) {
      f2.pre = t11;
    }, post: function(t11) {
      f2.post = t11;
    }, stop: function() {
      i2 = false;
    }, block: function() {
      c2 = false;
    } };
    if (!i2)
      return s2;
    function l2() {
      if ("object" == typeof s2.node && null !== s2.node) {
        s2.keys && s2.node_ === s2.node || (s2.keys = qP(s2.node)), s2.isLeaf = 0 == s2.keys.length;
        for (var t11 = 0; t11 < o2.length; t11++)
          if (o2[t11].node_ === u2) {
            s2.circular = o2[t11];
            break;
          }
      } else
        s2.isLeaf = true, s2.keys = null;
      s2.notLeaf = !s2.isLeaf, s2.notRoot = !s2.isRoot;
    }
    l2();
    var p2 = r2.call(s2, s2.node);
    return void 0 !== p2 && s2.update && s2.update(p2), f2.before && f2.before.call(s2, s2.node), c2 ? ("object" != typeof s2.node || null === s2.node || s2.circular || (o2.push(s2), l2(), zP(s2.keys, function(r3, o3) {
      n2.push(r3), f2.pre && f2.pre.call(s2, s2.node[r3], r3);
      var i3 = t10(s2.node[r3]);
      e2 && JP.call(s2.node, r3) && (s2.node[r3] = i3.node), i3.isLast = o3 == s2.keys.length - 1, i3.isFirst = 0 == o3, f2.post && f2.post.call(s2, i3), n2.pop();
    }), o2.pop()), f2.after && f2.after.call(s2, s2.node), s2) : s2;
  }(t9).node;
}
function BP(t9) {
  if ("object" == typeof t9 && null !== t9) {
    var r2;
    if (WP(t9))
      r2 = [];
    else if ("[object Date]" === GP(t9))
      r2 = new Date(t9.getTime ? t9.getTime() : t9);
    else if (function(t10) {
      return "[object RegExp]" === GP(t10);
    }(t9))
      r2 = new RegExp(t9);
    else if (function(t10) {
      return "[object Error]" === GP(t10);
    }(t9))
      r2 = { message: t9.message };
    else if (function(t10) {
      return "[object Boolean]" === GP(t10);
    }(t9))
      r2 = new Boolean(t9);
    else if (function(t10) {
      return "[object Number]" === GP(t10);
    }(t9))
      r2 = new Number(t9);
    else if (function(t10) {
      return "[object String]" === GP(t10);
    }(t9))
      r2 = new String(t9);
    else if (Object.create && Object.getPrototypeOf)
      r2 = Object.create(Object.getPrototypeOf(t9));
    else if (t9.constructor === Object)
      r2 = {};
    else {
      var e2 = t9.constructor && t9.constructor.prototype || t9.__proto__ || {}, n2 = function() {
      };
      n2.prototype = e2, r2 = new n2();
    }
    return zP(qP(t9), function(e3) {
      r2[e3] = t9[e3];
    }), r2;
  }
  return t9;
}
CP.prototype.get = function(t9) {
  for (var r2 = this.value, e2 = 0; e2 < t9.length; e2++) {
    var n2 = t9[e2];
    if (!r2 || !JP.call(r2, n2)) {
      r2 = void 0;
      break;
    }
    r2 = r2[n2];
  }
  return r2;
}, CP.prototype.has = function(t9) {
  for (var r2 = this.value, e2 = 0; e2 < t9.length; e2++) {
    var n2 = t9[e2];
    if (!r2 || !JP.call(r2, n2))
      return false;
    r2 = r2[n2];
  }
  return true;
}, CP.prototype.set = function(t9, r2) {
  for (var e2 = this.value, n2 = 0; n2 < t9.length - 1; n2++) {
    var o2 = t9[n2];
    JP.call(e2, o2) || (e2[o2] = {}), e2 = e2[o2];
  }
  return e2[t9[n2]] = r2, r2;
}, CP.prototype.map = function(t9) {
  return $P(this.value, t9, true);
}, CP.prototype.forEach = function(t9) {
  return this.value = $P(this.value, t9, false), this.value;
}, CP.prototype.reduce = function(t9, r2) {
  var e2 = 1 === arguments.length, n2 = e2 ? this.value : r2;
  return this.forEach(function(r3) {
    this.isRoot && e2 || (n2 = t9.call(this, n2, r3));
  }), n2;
}, CP.prototype.paths = function() {
  var t9 = [];
  return this.forEach(function(r2) {
    t9.push(this.path);
  }), t9;
}, CP.prototype.nodes = function() {
  var t9 = [];
  return this.forEach(function(r2) {
    t9.push(this.node);
  }), t9;
}, CP.prototype.clone = function() {
  var t9 = [], r2 = [];
  return function e2(n2) {
    for (var o2 = 0; o2 < t9.length; o2++)
      if (t9[o2] === n2)
        return r2[o2];
    if ("object" == typeof n2 && null !== n2) {
      var i2 = BP(n2);
      return t9.push(n2), r2.push(i2), zP(qP(n2), function(t10) {
        i2[t10] = e2(n2[t10]);
      }), t9.pop(), r2.pop(), i2;
    }
    return n2;
  }(this.value);
};
var qP = Object.keys || function(t9) {
  var r2 = [];
  for (var e2 in t9)
    r2.push(e2);
  return r2;
};
function GP(t9) {
  return Object.prototype.toString.call(t9);
}
var WP = Array.isArray || function(t9) {
  return "[object Array]" === Object.prototype.toString.call(t9);
}, zP = function(t9, r2) {
  if (t9.forEach)
    return t9.forEach(r2);
  for (var e2 = 0; e2 < t9.length; e2++)
    r2(t9[e2], e2, t9);
};
zP(qP(CP.prototype), function(t9) {
  LP[t9] = function(r2) {
    var e2 = [].slice.call(arguments, 1), n2 = new CP(r2);
    return n2[t9].apply(n2, e2);
  };
});
var JP = Object.hasOwnProperty || function(t9, r2) {
  return r2 in t9;
}, HP = ["properties"], VP = ["properties"], YP = ["definitions", "parameters", "responses", "securityDefinitions", "components/schemas", "components/responses", "components/parameters", "components/securitySchemes"], QP = ["schema/example", "items/example"];
function KP(t9) {
  var r2 = t9[t9.length - 1], e2 = t9[t9.length - 2], n2 = t9.join("/");
  return HP.indexOf(r2) > -1 && -1 === VP.indexOf(e2) || YP.indexOf(n2) > -1 || QP.some(function(t10) {
    return n2.indexOf(t10) > -1;
  });
}
function XP(t9, r2) {
  var e2, n2 = Gp(t9.split("#"), 2), o2 = n2[0], i2 = n2[1], u2 = ws.resolve(o2 || "", r2 || "");
  return i2 ? rm(e2 = "".concat(u2, "#")).call(e2, i2) : u2;
}
var ZP = /^([a-z]+:\/\/|\/\/)/i, tk = DP("JSONRefError", function(t9, r2, e2) {
  this.originalError = e2, Yc(this, r2 || {});
}), rk = {}, ek = new yE(), nk = [function(t9) {
  return "paths" === t9[0] && "responses" === t9[3] && "examples" === t9[5];
}, function(t9) {
  return "paths" === t9[0] && "responses" === t9[3] && "content" === t9[5] && "example" === t9[7];
}, function(t9) {
  return "paths" === t9[0] && "responses" === t9[3] && "content" === t9[5] && "examples" === t9[7] && "value" === t9[9];
}, function(t9) {
  return "paths" === t9[0] && "requestBody" === t9[3] && "content" === t9[4] && "example" === t9[6];
}, function(t9) {
  return "paths" === t9[0] && "requestBody" === t9[3] && "content" === t9[4] && "examples" === t9[6] && "value" === t9[8];
}, function(t9) {
  return "paths" === t9[0] && "parameters" === t9[2] && "example" === t9[4];
}, function(t9) {
  return "paths" === t9[0] && "parameters" === t9[3] && "example" === t9[5];
}, function(t9) {
  return "paths" === t9[0] && "parameters" === t9[2] && "examples" === t9[4] && "value" === t9[6];
}, function(t9) {
  return "paths" === t9[0] && "parameters" === t9[3] && "examples" === t9[5] && "value" === t9[7];
}, function(t9) {
  return "paths" === t9[0] && "parameters" === t9[2] && "content" === t9[4] && "example" === t9[6];
}, function(t9) {
  return "paths" === t9[0] && "parameters" === t9[2] && "content" === t9[4] && "examples" === t9[6] && "value" === t9[8];
}, function(t9) {
  return "paths" === t9[0] && "parameters" === t9[3] && "content" === t9[4] && "example" === t9[7];
}, function(t9) {
  return "paths" === t9[0] && "parameters" === t9[3] && "content" === t9[5] && "examples" === t9[7] && "value" === t9[9];
}], ok = { key: "$ref", plugin: function(t9, r2, e2, n2) {
  var o2 = n2.getInstance(), i2 = JO(e2).call(e2, 0, -1);
  if (!KP(i2) && !function(t10) {
    return nk.some(function(r3) {
      return r3(t10);
    });
  }(i2)) {
    var u2 = n2.getContext(e2).baseDoc;
    if ("string" != typeof t9)
      return new tk("$ref: must be a string (JSON-Ref)", { $ref: t9, baseDoc: u2, fullPath: e2 });
    var a2, f2, c2, s2 = fk(t9), l2 = s2[0], p2 = s2[1] || "";
    try {
      a2 = u2 || l2 ? uk(l2, u2) : null;
    } catch (r3) {
      return ak(r3, { pointer: p2, $ref: t9, basePath: a2, fullPath: e2 });
    }
    if (function(t10, r3, e3, n3) {
      var o3, i3, u3 = ek.get(n3);
      u3 || (u3 = {}, ek.set(n3, u3));
      var a3 = function(t11) {
        if (0 === t11.length)
          return "";
        return "/".concat(Hb(t11).call(t11, hk).join("/"));
      }(e3), f3 = rm(o3 = "".concat(r3 || "<specmap-base>", "#")).call(o3, t10), c3 = a3.replace(/allOf\/\d+\/?/g, ""), s3 = n3.contextTree.get([]).baseDoc;
      if (r3 === s3 && dk(c3, t10))
        return true;
      var l3 = "", p3 = e3.some(function(t11) {
        var r4;
        return l3 = rm(r4 = "".concat(l3, "/")).call(r4, hk(t11)), u3[l3] && u3[l3].some(function(t12) {
          return dk(t12, f3) || dk(f3, t12);
        });
      });
      if (p3)
        return true;
      return void (u3[c3] = rm(i3 = u3[c3] || []).call(i3, f3));
    }(p2, a2, i2, n2) && !o2.useCircularStructures) {
      var v2 = XP(t9, a2);
      return t9 === v2 ? null : TS.replace(e2, v2);
    }
    if (null == a2 ? (c2 = pk(p2), void 0 === (f2 = n2.get(c2)) && (f2 = new tk("Could not resolve reference: ".concat(t9), { pointer: p2, $ref: t9, baseDoc: u2, fullPath: e2 }))) : f2 = null != (f2 = ck(a2, p2)).l ? f2.l : f2.catch(function(r3) {
      throw ak(r3, { pointer: p2, $ref: t9, baseDoc: u2, fullPath: e2 });
    }), f2 instanceof Error)
      return [TS.remove(e2), f2];
    var h2 = XP(t9, a2), d2 = TS.replace(i2, f2, { $$ref: h2 });
    if (a2 && a2 !== u2)
      return [d2, TS.context(i2, { baseDoc: a2 })];
    try {
      if (!function(t10, r3) {
        var e3 = [t10];
        return r3.path.reduce(function(t11, r4) {
          return e3.push(t11[r4]), t11[r4];
        }, t10), n3(r3.value);
        function n3(t11) {
          return TS.isObject(t11) && (e3.indexOf(t11) >= 0 || Yb(t11).some(function(r4) {
            return n3(t11[r4]);
          }));
        }
      }(n2.state, d2) || o2.useCircularStructures)
        return d2;
    } catch (t10) {
      return null;
    }
  }
} }, ik = Yc(ok, { docCache: rk, absoluteify: uk, clearCache: function(t9) {
  void 0 !== t9 ? delete rk[t9] : Yb(rk).forEach(function(t10) {
    delete rk[t10];
  });
}, JSONRefError: tk, wrapError: ak, getDoc: sk, split: fk, extractFromDoc: ck, fetchJSON: function(t9) {
  return fetch(t9, { headers: { Accept: "application/json, application/yaml" }, loadSpec: true }).then(function(t10) {
    return t10.text();
  }).then(function(t10) {
    return CO.load(t10);
  });
}, extract: lk, jsonPointerToArray: pk, unescapeJsonPointerToken: vk });
function uk(t9, r2) {
  if (!ZP.test(t9)) {
    var e2;
    if (!r2)
      throw new tk(rm(e2 = "Tried to resolve a relative URL, without having a basePath. path: '".concat(t9, "' basePath: '")).call(e2, r2, "'"));
    return ws.resolve(r2, t9);
  }
  return t9;
}
function ak(t9, r2) {
  var e2, n2;
  t9 && t9.response && t9.response.body ? e2 = rm(n2 = "".concat(t9.response.body.code, " ")).call(n2, t9.response.body.message) : e2 = t9.message;
  return new tk("Could not resolve reference: ".concat(e2), r2, t9);
}
function fk(t9) {
  return (t9 + "").split("#");
}
function ck(t9, r2) {
  var e2 = rk[t9];
  if (e2 && !TS.isPromise(e2))
    try {
      var n2 = lk(r2, e2);
      return Yc(kA.resolve(n2), { l: n2 });
    } catch (t10) {
      return kA.reject(t10);
    }
  return sk(t9).then(function(t10) {
    return lk(r2, t10);
  });
}
function sk(t9) {
  var r2 = rk[t9];
  return r2 ? TS.isPromise(r2) ? r2 : kA.resolve(r2) : (rk[t9] = ik.fetchJSON(t9).then(function(r3) {
    return rk[t9] = r3, r3;
  }), rk[t9]);
}
function lk(t9, r2) {
  var e2 = pk(t9);
  if (e2.length < 1)
    return r2;
  var n2 = TS.getIn(r2, e2);
  if (void 0 === n2)
    throw new tk("Could not resolve pointer: ".concat(t9, " does not exist in document"), { pointer: t9 });
  return n2;
}
function pk(t9) {
  var r2;
  if ("string" != typeof t9)
    throw new TypeError("Expected a string, got a ".concat(qp(t9)));
  return "/" === t9[0] && (t9 = t9.substr(1)), "" === t9 ? [] : Hb(r2 = t9.split("/")).call(r2, vk);
}
function vk(t9) {
  return "string" != typeof t9 ? t9 : new MP("=".concat(t9.replace(/~1/g, "/").replace(/~0/g, "~"))).get("");
}
function hk(t9) {
  var r2, e2 = new MP([["", t9.replace(/~/g, "~0").replace(/\//g, "~1")]]);
  return JO(r2 = e2.toString()).call(r2, 1);
}
function dk(t9, r2) {
  if (!(e2 = r2) || "/" === e2 || "#" === e2)
    return true;
  var e2, n2 = t9.charAt(r2.length), o2 = JO(r2).call(r2, -1);
  return 0 === t9.indexOf(r2) && (!n2 || "/" === n2 || "#" === n2) && "#" !== o2;
}
const yk = { key: "allOf", plugin: function(t9, r2, e2, n2, o2) {
  if (!o2.meta || !o2.meta.$$ref) {
    var i2 = JO(e2).call(e2, 0, -1);
    if (!KP(i2)) {
      if (!Array.isArray(t9)) {
        var u2 = new TypeError("allOf must be an array");
        return u2.fullPath = e2, u2;
      }
      var a2 = false, f2 = o2.value;
      if (i2.forEach(function(t10) {
        f2 && (f2 = f2[t10]);
      }), f2 = Rc({}, f2), 0 !== Yb(f2).length) {
        delete f2.allOf;
        var c2, s2, l2 = [];
        if (l2.push(n2.replace(i2, {})), t9.forEach(function(t10, r3) {
          if (!n2.isObject(t10)) {
            if (a2)
              return null;
            a2 = true;
            var o3 = new TypeError("Elements in allOf must be objects");
            return o3.fullPath = e2, l2.push(o3);
          }
          l2.push(n2.mergeDeep(i2, t10));
          var u3 = function(t11, r4) {
            var e3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n3 = e3.specmap, o4 = e3.getBaseUrlForNodePath, i3 = void 0 === o4 ? function(t12) {
              var e4;
              return n3.getContext(rm(e4 = []).call(e4, WO(r4), WO(t12))).baseDoc;
            } : o4, u4 = e3.targetKeys, a3 = void 0 === u4 ? ["$ref", "$$ref"] : u4, f3 = [];
            return UP.exports(t11).forEach(function() {
              if (fb(a3).call(a3, this.key) && "string" == typeof this.node) {
                var t12 = this.path, e4 = rm(r4).call(r4, this.path), o5 = XP(this.node, i3(t12));
                f3.push(n3.replace(e4, o5));
              }
            }), f3;
          }(t10, JO(e2).call(e2, 0, -1), { getBaseUrlForNodePath: function(t11) {
            var o4;
            return n2.getContext(rm(o4 = []).call(o4, WO(e2), [r3], WO(t11))).baseDoc;
          }, specmap: n2 });
          l2.push.apply(l2, WO(u3));
        }), f2.example)
          l2.push(n2.remove(rm(c2 = []).call(c2, i2, "example")));
        if (l2.push(n2.mergeDeep(i2, f2)), !f2.$$ref)
          l2.push(n2.remove(rm(s2 = []).call(s2, i2, "$$ref")));
        return l2;
      }
    }
  }
} }, bk = { key: "parameters", plugin: function(t9, r2, e2, n2) {
  if (Array.isArray(t9) && t9.length) {
    var o2 = Yc([], t9), i2 = JO(e2).call(e2, 0, -1), u2 = Rc({}, TS.getIn(n2.spec, i2));
    return t9.forEach(function(t10, r3) {
      try {
        o2[r3].default = n2.parameterMacro(u2, t10);
      } catch (t11) {
        var i3 = new Error(t11);
        return i3.fullPath = e2, i3;
      }
    }), TS.replace(e2, o2);
  }
  return TS.replace(e2, t9);
} }, mk = { key: "properties", plugin: function(t9, r2, e2, n2) {
  var o2 = Rc({}, t9);
  for (var i2 in t9)
    try {
      o2[i2].default = n2.modelPropertyMacro(o2[i2]);
    } catch (t10) {
      var u2 = new Error(t10);
      return u2.fullPath = e2, u2;
    }
  return TS.replace(e2, o2);
} };
var gk = function() {
  function t9(r2) {
    dA(this, t9), this.root = wk(r2 || {});
  }
  return bA(t9, [{ key: "set", value: function(t10, r2) {
    var e2 = this.getParent(t10, true);
    if (e2) {
      var n2 = t10[t10.length - 1], o2 = e2.children;
      o2[n2] ? jk(o2[n2], r2, e2) : o2[n2] = wk(r2, e2);
    } else
      jk(this.root, r2, null);
  } }, { key: "get", value: function(t10) {
    if ((t10 = t10 || []).length < 1)
      return this.root.value;
    for (var r2, e2, n2 = this.root, o2 = 0; o2 < t10.length && (e2 = t10[o2], (r2 = n2.children)[e2]); o2 += 1)
      n2 = r2[e2];
    return n2 && n2.protoValue;
  } }, { key: "getParent", value: function(t10, r2) {
    return !t10 || t10.length < 1 ? null : t10.length < 2 ? this.root : JO(t10).call(t10, 0, -1).reduce(function(t11, e2) {
      if (!t11)
        return t11;
      var n2 = t11.children;
      return !n2[e2] && r2 && (n2[e2] = wk(null, t11)), n2[e2];
    }, this.root);
  } }]), t9;
}();
function wk(t9, r2) {
  return jk({ children: {} }, t9, r2);
}
function jk(t9, r2, e2) {
  return t9.value = r2 || {}, t9.protoValue = e2 ? Rc(Rc({}, e2.protoValue), t9.value) : t9.value, Yb(t9.children).forEach(function(r3) {
    var e3 = t9.children[r3];
    t9.children[r3] = jk(e3, e3.value, t9);
  }), t9;
}
var Ok = function() {
}, Ak = function() {
  function t9(r2) {
    var e2, n2, o2 = this;
    dA(this, t9), Yc(this, { spec: "", debugLevel: "info", plugins: [], pluginHistory: {}, errors: [], mutations: [], promisedPatches: [], state: {}, patches: [], context: {}, contextTree: new gk(), showDebug: false, allPatches: [], pluginProp: "specMap", libMethods: Yc(Object.create(this), TS, { getInstance: function() {
      return o2;
    } }), allowMetaPatches: false }, r2), this.get = this._get.bind(this), this.getContext = this._getContext.bind(this), this.hasRun = this._hasRun.bind(this), this.wrappedPlugins = hm(e2 = Hb(n2 = this.plugins).call(n2, this.wrapPlugin.bind(this))).call(e2, TS.isFunction), this.patches.push(TS.add([], this.spec)), this.patches.push(TS.context([], this.context)), this.updatePatches(this.patches);
  }
  return bA(t9, [{ key: "debug", value: function(t10) {
    if (this.debugLevel === t10) {
      for (var r2, e2 = arguments.length, n2 = new Array(e2 > 1 ? e2 - 1 : 0), o2 = 1; o2 < e2; o2++)
        n2[o2 - 1] = arguments[o2];
      (r2 = console).log.apply(r2, n2);
    }
  } }, { key: "verbose", value: function(t10) {
    if ("verbose" === this.debugLevel) {
      for (var r2, e2, n2 = arguments.length, o2 = new Array(n2 > 1 ? n2 - 1 : 0), i2 = 1; i2 < n2; i2++)
        o2[i2 - 1] = arguments[i2];
      (r2 = console).log.apply(r2, rm(e2 = ["[".concat(t10, "]   ")]).call(e2, o2));
    }
  } }, { key: "wrapPlugin", value: function(t10, r2) {
    var e2, n2, o2, i2 = this.pathDiscriminator, u2 = null;
    return t10[this.pluginProp] ? (u2 = t10, e2 = t10[this.pluginProp]) : TS.isFunction(t10) ? e2 = t10 : TS.isObject(t10) && (n2 = t10, o2 = function(t11, r3) {
      return !Array.isArray(t11) || t11.every(function(t12, e3) {
        return t12 === r3[e3];
      });
    }, e2 = Jy.mark(function t11(r3, e3) {
      var u3, a2, f2, c2, s2, l2;
      return Jy.wrap(function(t12) {
        for (; ; )
          switch (t12.prev = t12.next) {
            case 0:
              l2 = function(t13, r4, f3) {
                var c3, s3, p2, v2, h2, d2, y2, b2, m2, g2, w2, j2, O2;
                return Jy.wrap(function(u4) {
                  for (; ; )
                    switch (u4.prev = u4.next) {
                      case 0:
                        if (TS.isObject(t13)) {
                          u4.next = 6;
                          break;
                        }
                        if (n2.key !== r4[r4.length - 1]) {
                          u4.next = 4;
                          break;
                        }
                        return u4.next = 4, n2.plugin(t13, n2.key, r4, e3);
                      case 4:
                        u4.next = 30;
                        break;
                      case 6:
                        c3 = r4.length - 1, s3 = r4[c3], p2 = r4.indexOf("properties"), v2 = "properties" === s3 && c3 === p2, h2 = e3.allowMetaPatches && a2[t13.$$ref], d2 = 0, y2 = Yb(t13);
                      case 12:
                        if (!(d2 < y2.length)) {
                          u4.next = 30;
                          break;
                        }
                        if (b2 = y2[d2], m2 = t13[b2], g2 = rm(r4).call(r4, b2), w2 = TS.isObject(m2), j2 = t13.$$ref, h2) {
                          u4.next = 22;
                          break;
                        }
                        if (!w2) {
                          u4.next = 22;
                          break;
                        }
                        return e3.allowMetaPatches && j2 && (a2[j2] = true), u4.delegateYield(l2(m2, g2, f3), "t0", 22);
                      case 22:
                        if (v2 || b2 !== n2.key) {
                          u4.next = 27;
                          break;
                        }
                        if (O2 = o2(i2, r4), i2 && !O2) {
                          u4.next = 27;
                          break;
                        }
                        return u4.next = 27, n2.plugin(m2, b2, g2, e3, f3);
                      case 27:
                        d2++, u4.next = 12;
                        break;
                      case 30:
                      case "end":
                        return u4.stop();
                    }
                }, u3);
              }, u3 = Jy.mark(l2), a2 = {}, f2 = Lp(hm(r3).call(r3, TS.isAdditiveMutation)), t12.prev = 4, f2.s();
            case 6:
              if ((c2 = f2.n()).done) {
                t12.next = 11;
                break;
              }
              return s2 = c2.value, t12.delegateYield(l2(s2.value, s2.path, s2), "t0", 9);
            case 9:
              t12.next = 6;
              break;
            case 11:
              t12.next = 16;
              break;
            case 13:
              t12.prev = 13, t12.t1 = t12.catch(4), f2.e(t12.t1);
            case 16:
              return t12.prev = 16, f2.f(), t12.finish(16);
            case 19:
            case "end":
              return t12.stop();
          }
      }, t11, null, [[4, 13, 16, 19]]);
    })), Yc(e2.bind(u2), { pluginName: t10.name || r2, isGenerator: TS.isGenerator(e2) });
  } }, { key: "nextPlugin", value: function() {
    var t10, r2 = this;
    return EA(t10 = this.wrappedPlugins).call(t10, function(t11) {
      return r2.getMutationsForPlugin(t11).length > 0;
    });
  } }, { key: "nextPromisedPatch", value: function() {
    var t10;
    if (this.promisedPatches.length > 0)
      return kA.race(Hb(t10 = this.promisedPatches).call(t10, function(t11) {
        return t11.value;
      }));
  } }, { key: "getPluginHistory", value: function(t10) {
    var r2 = this.constructor.getPluginName(t10);
    return this.pluginHistory[r2] || [];
  } }, { key: "getPluginRunCount", value: function(t10) {
    return this.getPluginHistory(t10).length;
  } }, { key: "getPluginHistoryTip", value: function(t10) {
    var r2 = this.getPluginHistory(t10);
    return r2 && r2[r2.length - 1] || {};
  } }, { key: "getPluginMutationIndex", value: function(t10) {
    var r2 = this.getPluginHistoryTip(t10).mutationIndex;
    return "number" != typeof r2 ? -1 : r2;
  } }, { key: "updatePluginHistory", value: function(t10, r2) {
    var e2 = this.constructor.getPluginName(t10);
    this.pluginHistory[e2] = this.pluginHistory[e2] || [], this.pluginHistory[e2].push(r2);
  } }, { key: "updatePatches", value: function(t10) {
    var r2 = this;
    TS.normalizeArray(t10).forEach(function(t11) {
      if (t11 instanceof Error)
        r2.errors.push(t11);
      else
        try {
          if (!TS.isObject(t11))
            return void r2.debug("updatePatches", "Got a non-object patch", t11);
          if (r2.showDebug && r2.allPatches.push(t11), TS.isPromise(t11.value))
            return r2.promisedPatches.push(t11), void r2.promisedPatchThen(t11);
          if (TS.isContextPatch(t11))
            return void r2.setContext(t11.path, t11.value);
          if (TS.isMutation(t11))
            return void r2.updateMutations(t11);
        } catch (t12) {
          console.error(t12), r2.errors.push(t12);
        }
    });
  } }, { key: "updateMutations", value: function(t10) {
    "object" === qp(t10.value) && !Array.isArray(t10.value) && this.allowMetaPatches && (t10.value = Rc({}, t10.value));
    var r2 = TS.applyPatch(this.state, t10, { allowMetaPatches: this.allowMetaPatches });
    r2 && (this.mutations.push(t10), this.state = r2);
  } }, { key: "removePromisedPatch", value: function(t10) {
    var r2, e2 = this.promisedPatches.indexOf(t10);
    e2 < 0 ? this.debug("Tried to remove a promisedPatch that isn't there!") : JA(r2 = this.promisedPatches).call(r2, e2, 1);
  } }, { key: "promisedPatchThen", value: function(t10) {
    var r2 = this;
    return t10.value = t10.value.then(function(e2) {
      var n2 = Rc(Rc({}, t10), {}, { value: e2 });
      r2.removePromisedPatch(t10), r2.updatePatches(n2);
    }).catch(function(e2) {
      r2.removePromisedPatch(t10), r2.updatePatches(e2);
    }), t10.value;
  } }, { key: "getMutations", value: function(t10, r2) {
    var e2;
    return t10 = t10 || 0, "number" != typeof r2 && (r2 = this.mutations.length), JO(e2 = this.mutations).call(e2, t10, r2);
  } }, { key: "getCurrentMutations", value: function() {
    return this.getMutationsForPlugin(this.getCurrentPlugin());
  } }, { key: "getMutationsForPlugin", value: function(t10) {
    var r2 = this.getPluginMutationIndex(t10);
    return this.getMutations(r2 + 1);
  } }, { key: "getCurrentPlugin", value: function() {
    return this.currentPlugin;
  } }, { key: "getLib", value: function() {
    return this.libMethods;
  } }, { key: "_get", value: function(t10) {
    return TS.getIn(this.state, t10);
  } }, { key: "_getContext", value: function(t10) {
    return this.contextTree.get(t10);
  } }, { key: "setContext", value: function(t10, r2) {
    return this.contextTree.set(t10, r2);
  } }, { key: "_hasRun", value: function(t10) {
    return this.getPluginRunCount(this.getCurrentPlugin()) > (t10 || 0);
  } }, { key: "dispatch", value: function() {
    var t10, r2 = this, e2 = this, n2 = this.nextPlugin();
    if (!n2) {
      var o2 = this.nextPromisedPatch();
      if (o2)
        return o2.then(function() {
          return r2.dispatch();
        }).catch(function() {
          return r2.dispatch();
        });
      var i2 = { spec: this.state, errors: this.errors };
      return this.showDebug && (i2.patches = this.allPatches), kA.resolve(i2);
    }
    if (e2.pluginCount = e2.pluginCount || {}, e2.pluginCount[n2] = (e2.pluginCount[n2] || 0) + 1, e2.pluginCount[n2] > 100)
      return kA.resolve({ spec: e2.state, errors: rm(t10 = e2.errors).call(t10, new Error("We've reached a hard limit of ".concat(100, " plugin runs"))) });
    if (n2 !== this.currentPlugin && this.promisedPatches.length) {
      var u2, a2 = Hb(u2 = this.promisedPatches).call(u2, function(t11) {
        return t11.value;
      });
      return kA.all(Hb(a2).call(a2, function(t11) {
        return t11.then(Ok, Ok);
      })).then(function() {
        return r2.dispatch();
      });
    }
    return function() {
      e2.currentPlugin = n2;
      var t11 = e2.getCurrentMutations(), r3 = e2.mutations.length - 1;
      try {
        if (n2.isGenerator) {
          var o3, i3 = Lp(n2(t11, e2.getLib()));
          try {
            for (i3.s(); !(o3 = i3.n()).done; ) {
              f2(o3.value);
            }
          } catch (t12) {
            i3.e(t12);
          } finally {
            i3.f();
          }
        } else {
          f2(n2(t11, e2.getLib()));
        }
      } catch (t12) {
        console.error(t12), f2([Yc(Object.create(t12), { plugin: n2 })]);
      } finally {
        e2.updatePluginHistory(n2, { mutationIndex: r3 });
      }
      return e2.dispatch();
    }();
    function f2(t11) {
      t11 && (t11 = TS.fullyNormalizeArray(t11), e2.updatePatches(t11, n2));
    }
  } }], [{ key: "getPluginName", value: function(t10) {
    return t10.pluginName;
  } }, { key: "getPatchesOfType", value: function(t10, r2) {
    return hm(t10).call(t10, r2);
  } }]), t9;
}();
var Sk = { refs: ik, allOf: yk, parameters: bk, properties: mk }, xk = function(t9) {
  return String.prototype.toLowerCase.call(t9);
}, Ek = function(t9) {
  return t9.replace(/[^\w]/gi, "_");
};
function Pk(t9) {
  var r2 = t9.openapi;
  return !!r2 && gs(r2).call(r2, "3");
}
function kk(t9, r2) {
  var e2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "", n2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {}, o2 = n2.v2OperationIdCompatibilityMode;
  if (!t9 || "object" !== qp(t9))
    return null;
  var i2 = (t9.operationId || "").replace(/\s/g, "");
  return i2.length ? Ek(t9.operationId) : _k(r2, e2, { v2OperationIdCompatibilityMode: o2 });
}
function _k(t9, r2) {
  var e2, n2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, o2 = n2.v2OperationIdCompatibilityMode;
  if (o2) {
    var i2, u2, a2 = rm(i2 = "".concat(r2.toLowerCase(), "_")).call(i2, t9).replace(/[\s!@#$%^&*()_+=[{\]};:<>|./?,\\'""-]/g, "_");
    return (a2 = a2 || rm(u2 = "".concat(t9.substring(1), "_")).call(u2, r2)).replace(/((_){2,})/g, "_").replace(/^(_)*/g, "").replace(/([_])*$/g, "");
  }
  return rm(e2 = "".concat(xk(r2))).call(e2, Ek(t9));
}
function Ik(t9, r2) {
  var e2;
  return rm(e2 = "".concat(xk(r2), "-")).call(e2, t9);
}
function Tk(t9, r2) {
  return t9 && t9.paths ? function(t10, r3) {
    return Rk(t10, r3, true) || null;
  }(t9, function(t10) {
    var e2 = t10.pathName, n2 = t10.method, o2 = t10.operation;
    if (!o2 || "object" !== qp(o2))
      return false;
    var i2 = o2.operationId;
    return [kk(o2, e2, n2), Ik(e2, n2), i2].some(function(t11) {
      return t11 && t11 === r2;
    });
  }) : null;
}
function Rk(t9, r2, e2) {
  if (!t9 || "object" !== qp(t9) || !t9.paths || "object" !== qp(t9.paths))
    return null;
  var n2 = t9.paths;
  for (var o2 in n2)
    for (var i2 in n2[o2])
      if ("PARAMETERS" !== i2.toUpperCase()) {
        var u2 = n2[o2][i2];
        if (u2 && "object" === qp(u2)) {
          var a2 = { spec: t9, pathName: o2, method: i2.toUpperCase(), operation: u2 }, f2 = r2(a2);
          if (e2 && f2)
            return a2;
        }
      }
}
function Fk(t9) {
  var r2 = t9.spec, e2 = r2.paths, n2 = {};
  if (!e2 || r2.$$normalized)
    return t9;
  for (var o2 in e2) {
    var i2, u2 = e2[o2];
    if (null != u2 && fb(i2 = ["object", "function"]).call(i2, qp(u2))) {
      var a2 = u2.parameters, f2 = function(t10) {
        var e3, i3 = u2[t10];
        if (null == i3 || !fb(e3 = ["object", "function"]).call(e3, qp(i3)))
          return "continue";
        var f3 = kk(i3, o2, t10);
        if (f3) {
          n2[f3] ? n2[f3].push(i3) : n2[f3] = [i3];
          var c3 = n2[f3];
          if (c3.length > 1)
            c3.forEach(function(t11, r3) {
              var e4;
              t11.p = t11.p || t11.operationId, t11.operationId = rm(e4 = "".concat(f3)).call(e4, r3 + 1);
            });
          else if (void 0 !== i3.operationId) {
            var s2 = c3[0];
            s2.p = s2.p || i3.operationId, s2.operationId = f3;
          }
        }
        if ("parameters" !== t10) {
          var l2 = [], p2 = {};
          for (var v2 in r2)
            "produces" !== v2 && "consumes" !== v2 && "security" !== v2 || (p2[v2] = r2[v2], l2.push(p2));
          if (a2 && (p2.parameters = a2, l2.push(p2)), l2.length) {
            var h2, d2 = Lp(l2);
            try {
              for (d2.s(); !(h2 = d2.n()).done; ) {
                var y2 = h2.value;
                for (var b2 in y2)
                  if (i3[b2]) {
                    if ("parameters" === b2) {
                      var m2, g2 = Lp(y2[b2]);
                      try {
                        var w2 = function() {
                          var t11 = m2.value;
                          i3[b2].some(function(r3) {
                            return r3.name && r3.name === t11.name || r3.$ref && r3.$ref === t11.$ref || r3.$$ref && r3.$$ref === t11.$$ref || r3 === t11;
                          }) || i3[b2].push(t11);
                        };
                        for (g2.s(); !(m2 = g2.n()).done; )
                          w2();
                      } catch (t11) {
                        g2.e(t11);
                      } finally {
                        g2.f();
                      }
                    }
                  } else
                    i3[b2] = y2[b2];
              }
            } catch (t11) {
              d2.e(t11);
            } finally {
              d2.f();
            }
          }
        }
      };
      for (var c2 in u2)
        f2(c2);
    }
  }
  return r2.$$normalized = true, t9;
}
function Nk(t9) {
  var r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, e2 = r2.requestInterceptor, n2 = r2.responseInterceptor, o2 = t9.withCredentials ? "include" : "same-origin";
  return function(r3) {
    return t9({ url: r3, loadSpec: true, requestInterceptor: e2, responseInterceptor: n2, headers: { Accept: "application/json, application/yaml" }, credentials: o2 }).then(function(t10) {
      return t10.body;
    });
  };
}
function Mk(t9) {
  var r2 = t9.fetch, e2 = t9.spec, n2 = t9.url, o2 = t9.mode, i2 = t9.allowMetaPatches, u2 = void 0 === i2 || i2, a2 = t9.pathDiscriminator, f2 = t9.modelPropertyMacro, c2 = t9.parameterMacro, s2 = t9.requestInterceptor, l2 = t9.responseInterceptor, p2 = t9.skipNormalization, v2 = t9.useCircularStructures, h2 = t9.http, d2 = t9.baseDoc;
  return d2 = d2 || n2, h2 = r2 || h2 || ZO, e2 ? y2(e2) : Nk(h2, { requestInterceptor: s2, responseInterceptor: l2 })(d2).then(y2);
  function y2(t10) {
    d2 && (Sk.refs.docCache[d2] = t10), Sk.refs.fetchJSON = Nk(h2, { requestInterceptor: s2, responseInterceptor: l2 });
    var r3, e3 = [Sk.refs];
    return "function" == typeof c2 && e3.push(Sk.parameters), "function" == typeof f2 && e3.push(Sk.properties), "strict" !== o2 && e3.push(Sk.allOf), (r3 = { spec: t10, context: { baseDoc: d2 }, plugins: e3, allowMetaPatches: u2, pathDiscriminator: a2, parameterMacro: c2, modelPropertyMacro: f2, useCircularStructures: v2 }, new Ak(r3).dispatch()).then(p2 ? function() {
      var t11 = Gy(Jy.mark(function t12(r4) {
        return Jy.wrap(function(t13) {
          for (; ; )
            switch (t13.prev = t13.next) {
              case 0:
                return t13.abrupt("return", r4);
              case 1:
              case "end":
                return t13.stop();
            }
        }, t12);
      }));
      return function(r4) {
        return t11.apply(this, arguments);
      };
    }() : Fk);
  }
}
var Dk = Array.isArray, Uk = "object" == typeof global && global && global.Object === Object && global, Lk = "object" == typeof self && self && self.Object === Object && self, Ck = Uk || Lk || Function("return this")(), $k = Ck.Symbol, Bk = $k, qk = Object.prototype, Gk = qk.hasOwnProperty, Wk = qk.toString, zk = Bk ? Bk.toStringTag : void 0;
var Jk = function(t9) {
  var r2 = Gk.call(t9, zk), e2 = t9[zk];
  try {
    t9[zk] = void 0;
    var n2 = true;
  } catch (t10) {
  }
  var o2 = Wk.call(t9);
  return n2 && (r2 ? t9[zk] = e2 : delete t9[zk]), o2;
}, Hk = Object.prototype.toString;
var Vk = Jk, Yk = function(t9) {
  return Hk.call(t9);
}, Qk = $k ? $k.toStringTag : void 0;
var Kk = function(t9) {
  return null == t9 ? void 0 === t9 ? "[object Undefined]" : "[object Null]" : Qk && Qk in Object(t9) ? Vk(t9) : Yk(t9);
};
var Xk = Kk, Zk = function(t9) {
  return null != t9 && "object" == typeof t9;
};
var t_ = function(t9) {
  return "symbol" == typeof t9 || Zk(t9) && "[object Symbol]" == Xk(t9);
}, r_ = Dk, e_ = t_, n_ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, o_ = /^\w*$/;
var i_ = function(t9, r2) {
  if (r_(t9))
    return false;
  var e2 = typeof t9;
  return !("number" != e2 && "symbol" != e2 && "boolean" != e2 && null != t9 && !e_(t9)) || (o_.test(t9) || !n_.test(t9) || null != r2 && t9 in Object(r2));
};
var u_ = function(t9) {
  var r2 = typeof t9;
  return null != t9 && ("object" == r2 || "function" == r2);
}, a_ = Kk, f_ = u_;
var c_ = function(t9) {
  if (!f_(t9))
    return false;
  var r2 = a_(t9);
  return "[object Function]" == r2 || "[object GeneratorFunction]" == r2 || "[object AsyncFunction]" == r2 || "[object Proxy]" == r2;
}, s_ = Ck["i"], l_ = function() {
  var t9 = /[^.]+$/.exec(s_ && s_.keys && s_.keys.IE_PROTO || "");
  return t9 ? "Symbol(src)_1." + t9 : "";
}();
var p_ = function(t9) {
  return !!l_ && l_ in t9;
}, v_ = Function.prototype.toString;
var h_ = c_, d_ = p_, y_ = u_, b_ = function(t9) {
  if (null != t9) {
    try {
      return v_.call(t9);
    } catch (t10) {
    }
    try {
      return t9 + "";
    } catch (t10) {
    }
  }
  return "";
}, m_ = /^\[object .+?Constructor\]$/, g_ = Function.prototype, w_ = Object.prototype, j_ = g_.toString, O_ = w_.hasOwnProperty, A_ = RegExp("^" + j_.call(O_).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
var S_ = function(t9) {
  return !(!y_(t9) || d_(t9)) && (h_(t9) ? A_ : m_).test(b_(t9));
}, x_ = function(t9, r2) {
  return null == t9 ? void 0 : t9[r2];
};
var E_ = function(t9, r2) {
  var e2 = x_(t9, r2);
  return S_(e2) ? e2 : void 0;
}, P_ = E_(Object, "create"), k_ = P_;
var __ = function() {
  this.v = k_ ? k_(null) : {}, this.size = 0;
};
var I_ = function(t9) {
  var r2 = this.has(t9) && delete this.v[t9];
  return this.size -= r2 ? 1 : 0, r2;
}, T_ = P_, R_ = Object.prototype.hasOwnProperty;
var F_ = function(t9) {
  var r2 = this.v;
  if (T_) {
    var e2 = r2[t9];
    return "__lodash_hash_undefined__" === e2 ? void 0 : e2;
  }
  return R_.call(r2, t9) ? r2[t9] : void 0;
}, N_ = P_, M_ = Object.prototype.hasOwnProperty;
var D_ = function(t9) {
  var r2 = this.v;
  return N_ ? void 0 !== r2[t9] : M_.call(r2, t9);
}, U_ = P_;
var L_ = function(t9, r2) {
  var e2 = this.v;
  return this.size += this.has(t9) ? 0 : 1, e2[t9] = U_ && void 0 === r2 ? "__lodash_hash_undefined__" : r2, this;
}, C_ = __, $_ = I_, B_ = F_, q_ = D_, G_ = L_;
function W_(t9) {
  var r2 = -1, e2 = null == t9 ? 0 : t9.length;
  for (this.clear(); ++r2 < e2; ) {
    var n2 = t9[r2];
    this.set(n2[0], n2[1]);
  }
}
W_.prototype.clear = C_, W_.prototype.delete = $_, W_.prototype.get = B_, W_.prototype.has = q_, W_.prototype.set = G_;
var z_ = W_;
var J_ = function() {
  this.v = [], this.size = 0;
};
var H_ = function(t9, r2) {
  return t9 === r2 || t9 != t9 && r2 != r2;
};
var V_ = function(t9, r2) {
  for (var e2 = t9.length; e2--; )
    if (H_(t9[e2][0], r2))
      return e2;
  return -1;
}, Y_ = V_, Q_ = Array.prototype.splice;
var K_ = function(t9) {
  var r2 = this.v, e2 = Y_(r2, t9);
  return !(e2 < 0) && (e2 == r2.length - 1 ? r2.pop() : Q_.call(r2, e2, 1), --this.size, true);
}, X_ = V_;
var Z_ = function(t9) {
  var r2 = this.v, e2 = X_(r2, t9);
  return e2 < 0 ? void 0 : r2[e2][1];
}, tI = V_;
var rI = V_;
var eI = function(t9, r2) {
  var e2 = this.v, n2 = rI(e2, t9);
  return n2 < 0 ? (++this.size, e2.push([t9, r2])) : e2[n2][1] = r2, this;
}, nI = J_, oI = K_, iI = Z_, uI = function(t9) {
  return tI(this.v, t9) > -1;
}, aI = eI;
function fI(t9) {
  var r2 = -1, e2 = null == t9 ? 0 : t9.length;
  for (this.clear(); ++r2 < e2; ) {
    var n2 = t9[r2];
    this.set(n2[0], n2[1]);
  }
}
fI.prototype.clear = nI, fI.prototype.delete = oI, fI.prototype.get = iI, fI.prototype.has = uI, fI.prototype.set = aI;
var cI = fI, sI = E_(Ck, "Map"), lI = z_, pI = cI, vI = sI;
var hI = function(t9) {
  var r2 = typeof t9;
  return "string" == r2 || "number" == r2 || "symbol" == r2 || "boolean" == r2 ? "__proto__" !== t9 : null === t9;
}, dI = hI;
var yI = function(t9, r2) {
  var e2 = t9.v;
  return dI(r2) ? e2["string" == typeof r2 ? "string" : "hash"] : e2.map;
}, bI = yI;
var mI = yI;
var gI = yI;
var wI = yI;
var jI = function(t9, r2) {
  var e2 = wI(this, t9), n2 = e2.size;
  return e2.set(t9, r2), this.size += e2.size == n2 ? 0 : 1, this;
}, OI = function() {
  this.size = 0, this.v = { hash: new lI(), map: new (vI || pI)(), string: new lI() };
}, AI = function(t9) {
  var r2 = bI(this, t9).delete(t9);
  return this.size -= r2 ? 1 : 0, r2;
}, SI = function(t9) {
  return mI(this, t9).get(t9);
}, xI = function(t9) {
  return gI(this, t9).has(t9);
}, EI = jI;
function PI(t9) {
  var r2 = -1, e2 = null == t9 ? 0 : t9.length;
  for (this.clear(); ++r2 < e2; ) {
    var n2 = t9[r2];
    this.set(n2[0], n2[1]);
  }
}
PI.prototype.clear = OI, PI.prototype.delete = AI, PI.prototype.get = SI, PI.prototype.has = xI, PI.prototype.set = EI;
var kI = PI;
function _I(t9, r2) {
  if ("function" != typeof t9 || null != r2 && "function" != typeof r2)
    throw new TypeError("Expected a function");
  var e2 = function() {
    var n2 = arguments, o2 = r2 ? r2.apply(this, n2) : n2[0], i2 = e2.cache;
    if (i2.has(o2))
      return i2.get(o2);
    var u2 = t9.apply(this, n2);
    return e2.cache = i2.set(o2, u2) || i2, u2;
  };
  return e2.cache = new (_I.Cache || kI)(), e2;
}
_I.Cache = kI;
var II = _I;
var TI = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, RI = /\\(\\)?/g, FI = function(t9) {
  var r2 = II(t9, function(t10) {
    return 500 === e2.size && e2.clear(), t10;
  }), e2 = r2.cache;
  return r2;
}(function(t9) {
  var r2 = [];
  return 46 === t9.charCodeAt(0) && r2.push(""), t9.replace(TI, function(t10, e2, n2, o2) {
    r2.push(n2 ? o2.replace(RI, "$1") : e2 || t10);
  }), r2;
}), NI = FI;
var MI = function(t9, r2) {
  for (var e2 = -1, n2 = null == t9 ? 0 : t9.length, o2 = Array(n2); ++e2 < n2; )
    o2[e2] = r2(t9[e2], e2, t9);
  return o2;
}, DI = MI, UI = Dk, LI = t_, CI = $k ? $k.prototype : void 0, $I = CI ? CI.toString : void 0;
var BI = function t6(r2) {
  if ("string" == typeof r2)
    return r2;
  if (UI(r2))
    return DI(r2, t6) + "";
  if (LI(r2))
    return $I ? $I.call(r2) : "";
  var e2 = r2 + "";
  return "0" == e2 && 1 / r2 == -Infinity ? "-0" : e2;
}, qI = BI;
var GI = Dk, WI = i_, zI = NI, JI = function(t9) {
  return null == t9 ? "" : qI(t9);
};
var HI = t_;
var VI = function(t9, r2) {
  return GI(t9) ? t9 : WI(t9, r2) ? [t9] : zI(JI(t9));
}, YI = function(t9) {
  if ("string" == typeof t9 || HI(t9))
    return t9;
  var r2 = t9 + "";
  return "0" == r2 && 1 / t9 == -Infinity ? "-0" : r2;
};
var QI = function(t9, r2) {
  for (var e2 = 0, n2 = (r2 = VI(r2, t9)).length; null != t9 && e2 < n2; )
    t9 = t9[YI(r2[e2++])];
  return e2 && e2 == n2 ? t9 : void 0;
}, KI = QI;
var XI = function(t9, r2, e2) {
  var n2 = null == t9 ? void 0 : KI(t9, r2);
  return void 0 === n2 ? e2 : n2;
};
function ZI() {
  return ZI = Gy(Jy.mark(function t9(r2, e2) {
    var n2, o2, i2, u2, a2, f2, c2, s2, l2, p2, v2, h2, d2 = arguments;
    return Jy.wrap(function(t10) {
      for (; ; )
        switch (t10.prev = t10.next) {
          case 0:
            return n2 = d2.length > 2 && void 0 !== d2[2] ? d2[2] : {}, o2 = n2.returnEntireTree, i2 = n2.baseDoc, u2 = n2.requestInterceptor, a2 = n2.responseInterceptor, f2 = n2.parameterMacro, c2 = n2.modelPropertyMacro, s2 = n2.useCircularStructures, l2 = { pathDiscriminator: e2, baseDoc: i2, requestInterceptor: u2, responseInterceptor: a2, parameterMacro: f2, modelPropertyMacro: c2, useCircularStructures: s2 }, p2 = Fk({ spec: r2 }), v2 = p2.spec, t10.next = 6, Mk(Rc(Rc({}, l2), {}, { spec: v2, allowMetaPatches: true, skipNormalization: true }));
          case 6:
            return h2 = t10.sent, !o2 && Array.isArray(e2) && e2.length && (h2.spec = XI(h2.spec, e2) || null), t10.abrupt("return", h2);
          case 9:
          case "end":
            return t10.stop();
        }
    }, t9);
  })), ZI.apply(this, arguments);
}
var tT = function() {
  return null;
}, rT = { mapTagOperations: function(t9) {
  var r2 = t9.spec, e2 = t9.cb, n2 = void 0 === e2 ? tT : e2, o2 = t9.defaultTag, i2 = void 0 === o2 ? "default" : o2, u2 = t9.v2OperationIdCompatibilityMode, a2 = {}, f2 = {};
  return Rk(r2, function(t10) {
    var e3, o3 = t10.pathName, c2 = t10.method, s2 = t10.operation;
    (s2.tags ? (e3 = s2.tags, Array.isArray(e3) ? e3 : [e3]) : [i2]).forEach(function(t11) {
      if ("string" == typeof t11) {
        f2[t11] = f2[t11] || {};
        var e4, i3 = f2[t11], l2 = kk(s2, o3, c2, { v2OperationIdCompatibilityMode: u2 }), p2 = n2({ spec: r2, pathName: o3, method: c2, operation: s2, operationId: l2 });
        if (a2[l2])
          a2[l2] += 1, i3[rm(e4 = "".concat(l2)).call(e4, a2[l2])] = p2;
        else if (void 0 !== i3[l2]) {
          var v2, h2, d2 = a2[l2] || 1;
          a2[l2] = d2 + 1, i3[rm(v2 = "".concat(l2)).call(v2, a2[l2])] = p2;
          var y2 = i3[l2];
          delete i3[l2], i3[rm(h2 = "".concat(l2)).call(h2, d2)] = y2;
        } else
          i3[l2] = p2;
      }
    });
  }), f2;
}, makeExecute: function() {
  var t9 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return function(r2) {
    var e2 = r2.pathName, n2 = r2.method, o2 = r2.operationId;
    return function(r3) {
      var i2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, u2 = t9.requestInterceptor, a2 = t9.responseInterceptor, f2 = t9.userFetch;
      return t9.execute(Rc({ spec: t9.spec, requestInterceptor: u2, responseInterceptor: a2, userFetch: f2, pathName: e2, method: n2, parameters: r3, operationId: o2 }, i2));
    };
  };
} };
var eT = { exports: {} }, nT = ge, oT = De.indexOf, iT = qf, uT = openapi_parser_b([].indexOf), aT = !!uT && 1 / uT([1], 1, -0) < 0, fT = iT("indexOf");
nT({ target: "Array", proto: true, forced: aT || !fT }, { indexOf: function(t9) {
  var r2 = arguments.length > 1 ? arguments[1] : void 0;
  return aT ? uT(this, t9, r2) || 0 : oT(this, t9, r2);
} });
var cT = na("Array").indexOf, sT = tt, lT = cT, pT = Array.prototype;
const vT = openapi_parser_t(eT.exports = function(t9) {
  var r2 = t9.indexOf;
  return t9 === pT || sT(pT, t9) && r2 === pT.indexOf ? lT : r2;
});
function hT(t9, r2) {
  if (null == t9)
    return {};
  var e2, n2, o2 = function(t10, r3) {
    if (null == t10)
      return {};
    var e3, n3, o3 = {}, i3 = Ke(t10);
    for (n3 = 0; n3 < i3.length; n3++)
      e3 = i3[n3], vT(r3).call(r3, e3) >= 0 || (o3[e3] = t10[e3]);
    return o3;
  }(t9, r2);
  if (Yu) {
    var i2 = Yu(t9);
    for (n2 = 0; n2 < i2.length; n2++)
      e2 = i2[n2], vT(r2).call(r2, e2) >= 0 || Object.prototype.propertyIsEnumerable.call(t9, e2) && (o2[e2] = t9[e2]);
  }
  return o2;
}
var dT = {
  parse: function(t9, r2) {
    if ("string" != typeof t9)
      throw new TypeError("argument str must be a string");
    var e2 = {}, n2 = (r2 || {}).decode || mT, o2 = 0;
    for (; o2 < t9.length; ) {
      var i2 = t9.indexOf("=", o2);
      if (-1 === i2)
        break;
      var u2 = t9.indexOf(";", o2);
      if (-1 === u2)
        u2 = t9.length;
      else if (u2 < i2) {
        o2 = t9.lastIndexOf(";", i2 - 1) + 1;
        continue;
      }
      var a2 = t9.slice(o2, i2).trim();
      if (void 0 === e2[a2]) {
        var f2 = t9.slice(i2 + 1, u2).trim();
        34 === f2.charCodeAt(0) && (f2 = f2.slice(1, -1)), e2[a2] = wT(f2, n2);
      }
      o2 = u2 + 1;
    }
    return e2;
  },
  serialize: function(t9, r2, e2) {
    var n2 = e2 || {}, o2 = n2.encode || gT;
    if ("function" != typeof o2)
      throw new TypeError("option encode is invalid");
    if (!bT.test(t9))
      throw new TypeError("argument name is invalid");
    var i2 = o2(r2);
    if (i2 && !bT.test(i2))
      throw new TypeError("argument val is invalid");
    var u2 = t9 + "=" + i2;
    if (null != n2.maxAge) {
      var a2 = n2.maxAge - 0;
      if (isNaN(a2) || !isFinite(a2))
        throw new TypeError("option maxAge is invalid");
      u2 += "; Max-Age=" + Math.floor(a2);
    }
    if (n2.domain) {
      if (!bT.test(n2.domain))
        throw new TypeError("option domain is invalid");
      u2 += "; Domain=" + n2.domain;
    }
    if (n2.path) {
      if (!bT.test(n2.path))
        throw new TypeError("option path is invalid");
      u2 += "; Path=" + n2.path;
    }
    if (n2.expires) {
      var f2 = n2.expires;
      if (!function(t10) {
        return "[object Date]" === yT.call(t10) || t10 instanceof Date;
      }(f2) || isNaN(f2.valueOf()))
        throw new TypeError("option expires is invalid");
      u2 += "; Expires=" + f2.toUTCString();
    }
    n2.httpOnly && (u2 += "; HttpOnly");
    n2.secure && (u2 += "; Secure");
    if (n2.priority) {
      switch ("string" == typeof n2.priority ? n2.priority.toLowerCase() : n2.priority) {
        case "low":
          u2 += "; Priority=Low";
          break;
        case "medium":
          u2 += "; Priority=Medium";
          break;
        case "high":
          u2 += "; Priority=High";
          break;
        default:
          throw new TypeError("option priority is invalid");
      }
    }
    if (n2.sameSite) {
      switch ("string" == typeof n2.sameSite ? n2.sameSite.toLowerCase() : n2.sameSite) {
        case true:
          u2 += "; SameSite=Strict";
          break;
        case "lax":
          u2 += "; SameSite=Lax";
          break;
        case "strict":
          u2 += "; SameSite=Strict";
          break;
        case "none":
          u2 += "; SameSite=None";
          break;
        default:
          throw new TypeError("option sameSite is invalid");
      }
    }
    return u2;
  }
}, yT = Object.prototype.toString, bT = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function mT(t9) {
  return -1 !== t9.indexOf("%") ? decodeURIComponent(t9) : t9;
}
function gT(t9) {
  return encodeURIComponent(t9);
}
function wT(t9, r2) {
  try {
    return r2(t9);
  } catch (r3) {
    return t9;
  }
}
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function jT(t9) {
  return "[object Object]" === Object.prototype.toString.call(t9);
}
function OT(t9) {
  var r2, e2;
  return false !== jT(t9) && (void 0 === (r2 = t9.constructor) || false !== jT(e2 = r2.prototype) && false !== e2.hasOwnProperty("isPrototypeOf"));
}
const AT = { body: function(t9) {
  var r2 = t9.req, e2 = t9.value;
  r2.body = e2;
}, header: function(t9) {
  var r2 = t9.req, e2 = t9.parameter, n2 = t9.value;
  r2.headers = r2.headers || {}, void 0 !== n2 && (r2.headers[e2.name] = n2);
}, query: function(t9) {
  var r2 = t9.req, e2 = t9.value, n2 = t9.parameter;
  r2.query = r2.query || {}, false === e2 && "boolean" === n2.type && (e2 = "false");
  0 === e2 && ["number", "integer"].indexOf(n2.type) > -1 && (e2 = "0");
  if (e2)
    r2.query[n2.name] = { collectionFormat: n2.collectionFormat, value: e2 };
  else if (n2.allowEmptyValue && void 0 !== e2) {
    var o2 = n2.name;
    r2.query[o2] = r2.query[o2] || {}, r2.query[o2].allowEmptyValue = true;
  }
}, path: function(t9) {
  var r2 = t9.req, e2 = t9.value, n2 = t9.parameter;
  r2.url = r2.url.split("{".concat(n2.name, "}")).join(encodeURIComponent(e2));
}, formData: function(t9) {
  var r2 = t9.req, e2 = t9.value, n2 = t9.parameter;
  (e2 || n2.allowEmptyValue) && (r2.form = r2.form || {}, r2.form[n2.name] = { value: e2, allowEmptyValue: n2.allowEmptyValue, collectionFormat: n2.collectionFormat });
} };
function ST(t9, r2) {
  return fb(r2).call(r2, "application/json") ? "string" == typeof t9 ? t9 : $b(t9) : t9.toString();
}
var xT = ["accept", "authorization", "content-type"];
const ET = Object.freeze(Object.defineProperty({ __proto__: null, path: function(t9) {
  var r2 = t9.req, e2 = t9.value, n2 = t9.parameter, o2 = n2.name, i2 = n2.style, u2 = n2.explode, a2 = n2.content;
  if (a2) {
    var f2 = Yb(a2)[0];
    r2.url = r2.url.split("{".concat(o2, "}")).join(YO(ST(e2, f2), { escape: true }));
  } else {
    var c2 = QO({ key: n2.name, value: e2, style: i2 || "simple", explode: u2 || false, escape: true });
    r2.url = r2.url.split("{".concat(o2, "}")).join(c2);
  }
}, query: function(t9) {
  var r2 = t9.req, e2 = t9.value, n2 = t9.parameter;
  if (r2.query = r2.query || {}, n2.content) {
    var o2 = Yb(n2.content)[0];
    r2.query[n2.name] = ST(e2, o2);
  } else if (false === e2 && (e2 = "false"), 0 === e2 && (e2 = "0"), e2) {
    var i2 = n2.style, u2 = n2.explode, a2 = n2.allowReserved;
    r2.query[n2.name] = { value: e2, serializationOption: { style: i2, explode: u2, allowReserved: a2 } };
  } else if (n2.allowEmptyValue && void 0 !== e2) {
    var f2 = n2.name;
    r2.query[f2] = r2.query[f2] || {}, r2.query[f2].allowEmptyValue = true;
  }
}, header: function(t9) {
  var r2 = t9.req, e2 = t9.parameter, n2 = t9.value;
  if (r2.headers = r2.headers || {}, !(xT.indexOf(e2.name.toLowerCase()) > -1))
    if (e2.content) {
      var o2 = Yb(e2.content)[0];
      r2.headers[e2.name] = ST(n2, o2);
    } else
      void 0 !== n2 && (r2.headers[e2.name] = QO({ key: e2.name, value: n2, style: e2.style || "simple", explode: void 0 !== e2.explode && e2.explode, escape: false }));
}, cookie: function(t9) {
  var r2 = t9.req, e2 = t9.parameter, n2 = t9.value;
  r2.headers = r2.headers || {};
  var o2 = qp(n2);
  if (e2.content) {
    var i2, u2 = Yb(e2.content)[0];
    r2.headers.Cookie = rm(i2 = "".concat(e2.name, "=")).call(i2, ST(n2, u2));
  } else if ("undefined" !== o2) {
    var a2 = "object" === o2 && !Array.isArray(n2) && e2.explode ? "" : "".concat(e2.name, "=");
    r2.headers.Cookie = a2 + QO({ key: e2.name, value: n2, escape: false, style: e2.style || "form", explode: void 0 !== e2.explode && e2.explode });
  }
} }, Symbol.toStringTag, { value: "Module" }));
var PT = { exports: {} };
ge({ global: true }, { globalThis: openapi_parser_o });
var kT = { exports: {} };
const _T = openapi_parser_t(PT.exports = kT.exports = openapi_parser_o);
var IT = (void 0 !== _T ? _T : "undefined" != typeof self ? self : window).btoa;
function TT(t9, r2) {
  var e2 = t9.operation, n2 = t9.requestBody, o2 = t9.securities, i2 = t9.spec, u2 = t9.attachContentTypeForEmptyPayload, a2 = t9.requestContentType;
  r2 = function(t10) {
    var r3 = t10.request, e3 = t10.securities, n3 = void 0 === e3 ? {} : e3, o3 = t10.operation, i3 = void 0 === o3 ? {} : o3, u3 = t10.spec, a3 = Rc({}, r3), f3 = n3.authorized, c3 = void 0 === f3 ? {} : f3, s3 = i3.security || u3.security || [], l3 = c3 && !!Yb(c3).length, p3 = XI(u3, ["components", "securitySchemes"]) || {};
    if (a3.headers = a3.headers || {}, a3.query = a3.query || {}, !Yb(n3).length || !l3 || !s3 || Array.isArray(i3.security) && !i3.security.length)
      return r3;
    return s3.forEach(function(t11) {
      Yb(t11).forEach(function(t12) {
        var r4 = c3[t12], e4 = p3[t12];
        if (r4) {
          var n4 = r4.value || r4, o4 = e4.type;
          if (r4) {
            if ("apiKey" === o4)
              "query" === e4.in && (a3.query[e4.name] = n4), "header" === e4.in && (a3.headers[e4.name] = n4), "cookie" === e4.in && (a3.cookies[e4.name] = n4);
            else if ("http" === o4) {
              if (/^basic$/i.test(e4.scheme)) {
                var i4, u4 = n4.username || "", f4 = n4.password || "", s4 = IT(rm(i4 = "".concat(u4, ":")).call(i4, f4));
                a3.headers.Authorization = "Basic ".concat(s4);
              }
              /^bearer$/i.test(e4.scheme) && (a3.headers.Authorization = "Bearer ".concat(n4));
            } else if ("oauth2" === o4 || "openIdConnect" === o4) {
              var l4, v3 = r4.token || {}, h3 = v3[e4["x-tokenName"] || "access_token"], d2 = v3.token_type;
              d2 && "bearer" !== d2.toLowerCase() || (d2 = "Bearer"), a3.headers.Authorization = rm(l4 = "".concat(d2, " ")).call(l4, h3);
            }
          }
        }
      });
    }), a3;
  }({ request: r2, securities: o2, operation: e2, spec: i2 });
  var f2 = e2.requestBody || {}, c2 = Yb(f2.content || {}), s2 = a2 && c2.indexOf(a2) > -1;
  if (n2 || u2) {
    if (a2 && s2)
      r2.headers["Content-Type"] = a2;
    else if (!a2) {
      var l2 = c2[0];
      l2 && (r2.headers["Content-Type"] = l2, a2 = l2);
    }
  } else
    a2 && s2 && (r2.headers["Content-Type"] = a2);
  if (!t9.responseContentType && e2.responses) {
    var p2, v2 = hm(p2 = pm(e2.responses)).call(p2, function(t10) {
      var r3 = Gp(t10, 2), e3 = r3[0], n3 = r3[1], o3 = parseInt(e3, 10);
      return o3 >= 200 && o3 < 300 && OT(n3.content);
    }).reduce(function(t10, r3) {
      var e3 = Gp(r3, 2)[1];
      return rm(t10).call(t10, Yb(e3.content));
    }, []);
    v2.length > 0 && (r2.headers.accept = v2.join(", "));
  }
  if (n2)
    if (a2) {
      if (c2.indexOf(a2) > -1)
        if ("application/x-www-form-urlencoded" === a2 || "multipart/form-data" === a2)
          if ("object" === qp(n2)) {
            var h2 = (f2.content[a2] || {}).encoding || {};
            r2.form = {}, Yb(n2).forEach(function(t10) {
              r2.form[t10] = { value: n2[t10], encoding: h2[t10] || {} };
            });
          } else
            r2.form = n2;
        else
          r2.body = n2;
    } else
      r2.body = n2;
  return r2;
}
function RT(t9, r2) {
  var e2, n2, o2 = t9.spec, i2 = t9.operation, u2 = t9.securities, a2 = t9.requestContentType, f2 = t9.responseContentType, c2 = t9.attachContentTypeForEmptyPayload;
  if (r2 = function(t10) {
    var r3 = t10.request, e3 = t10.securities, n3 = void 0 === e3 ? {} : e3, o3 = t10.operation, i3 = void 0 === o3 ? {} : o3, u3 = t10.spec, a3 = Rc({}, r3), f3 = n3.authorized, c3 = void 0 === f3 ? {} : f3, s3 = n3.specSecurity, l3 = void 0 === s3 ? [] : s3, p3 = i3.security || l3, v3 = c3 && !!Yb(c3).length, h3 = u3.securityDefinitions;
    if (a3.headers = a3.headers || {}, a3.query = a3.query || {}, !Yb(n3).length || !v3 || !p3 || Array.isArray(i3.security) && !i3.security.length)
      return r3;
    return p3.forEach(function(t11) {
      Yb(t11).forEach(function(t12) {
        var r4 = c3[t12];
        if (r4) {
          var e4 = r4.token, n4 = r4.value || r4, o4 = h3[t12], i4 = o4.type, u4 = o4["x-tokenName"] || "access_token", f4 = e4 && e4[u4], s4 = e4 && e4.token_type;
          if (r4) {
            if ("apiKey" === i4) {
              var l4 = "query" === o4.in ? "query" : "headers";
              a3[l4] = a3[l4] || {}, a3[l4][o4.name] = n4;
            } else if ("basic" === i4)
              if (n4.header)
                a3.headers.authorization = n4.header;
              else {
                var p4, v4 = n4.username || "", d3 = n4.password || "";
                n4.base64 = IT(rm(p4 = "".concat(v4, ":")).call(p4, d3)), a3.headers.authorization = "Basic ".concat(n4.base64);
              }
            else if ("oauth2" === i4 && f4) {
              var y2;
              s4 = s4 && "bearer" !== s4.toLowerCase() ? s4 : "Bearer", a3.headers.authorization = rm(y2 = "".concat(s4, " ")).call(y2, f4);
            }
          }
        }
      });
    }), a3;
  }({ request: r2, securities: u2, operation: i2, spec: o2 }), r2.body || r2.form || c2)
    if (a2)
      r2.headers["Content-Type"] = a2;
    else if (Array.isArray(i2.consumes)) {
      var s2 = Gp(i2.consumes, 1);
      r2.headers["Content-Type"] = s2[0];
    } else if (Array.isArray(o2.consumes)) {
      var l2 = Gp(o2.consumes, 1);
      r2.headers["Content-Type"] = l2[0];
    } else
      i2.parameters && hm(e2 = i2.parameters).call(e2, function(t10) {
        return "file" === t10.type;
      }).length ? r2.headers["Content-Type"] = "multipart/form-data" : i2.parameters && hm(n2 = i2.parameters).call(n2, function(t10) {
        return "formData" === t10.in;
      }).length && (r2.headers["Content-Type"] = "application/x-www-form-urlencoded");
  else if (a2) {
    var p2, v2, h2 = i2.parameters && hm(p2 = i2.parameters).call(p2, function(t10) {
      return "body" === t10.in;
    }).length > 0, d2 = i2.parameters && hm(v2 = i2.parameters).call(v2, function(t10) {
      return "formData" === t10.in;
    }).length > 0;
    (h2 || d2) && (r2.headers["Content-Type"] = a2);
  }
  return !f2 && Array.isArray(i2.produces) && i2.produces.length > 0 && (r2.headers.accept = i2.produces.join(", ")), r2;
}
var FT = ["http", "fetch", "spec", "operationId", "pathName", "method", "parameters", "securities"], NT = function(t9) {
  return Array.isArray(t9) ? t9 : [];
}, MT = DP("OperationNotFoundError", function(t9, r2, e2) {
  this.originalError = e2, Yc(this, r2 || {});
}), DT = { buildRequest: UT };
function UT(t9) {
  var r2, e2, n2 = t9.spec, o2 = t9.operationId, i2 = t9.responseContentType, u2 = t9.scheme, a2 = t9.requestInterceptor, f2 = t9.responseInterceptor, c2 = t9.contextUrl, s2 = t9.userFetch, l2 = t9.server, p2 = t9.serverVariables, v2 = t9.http, h2 = t9.signal, d2 = t9.parameters, y2 = t9.parameterBuilders, b2 = Pk(n2);
  y2 || (y2 = b2 ? ET : AT);
  var m2 = { url: "", credentials: v2 && v2.withCredentials ? "include" : "same-origin", headers: {}, cookies: {} };
  h2 && (m2.signal = h2), a2 && (m2.requestInterceptor = a2), f2 && (m2.responseInterceptor = f2), s2 && (m2.userFetch = s2);
  var g2 = Tk(n2, o2);
  if (!g2)
    throw new MT("Operation ".concat(o2, " not found"));
  var w2 = g2.operation, j2 = void 0 === w2 ? {} : w2, O2 = g2.method, A2 = g2.pathName;
  if (m2.url += CT({ spec: n2, scheme: u2, contextUrl: c2, server: l2, serverVariables: p2, pathName: A2, method: O2 }), !o2)
    return delete m2.cookies, m2;
  m2.url += A2, m2.method = "".concat(O2).toUpperCase(), d2 = d2 || {};
  var S2 = n2.paths[A2] || {};
  i2 && (m2.headers.accept = i2);
  var x2 = function(t10) {
    var r3 = {};
    t10.forEach(function(t11) {
      r3[t11.in] || (r3[t11.in] = {}), r3[t11.in][t11.name] = t11;
    });
    var e3 = [];
    return Yb(r3).forEach(function(t11) {
      Yb(r3[t11]).forEach(function(n3) {
        e3.push(r3[t11][n3]);
      });
    }), e3;
  }(rm(r2 = rm(e2 = []).call(e2, NT(j2.parameters))).call(r2, NT(S2.parameters)));
  x2.forEach(function(t10) {
    var r3, e3, o3 = y2[t10.in];
    if ("body" === t10.in && t10.schema && t10.schema.properties && (r3 = d2), void 0 === (r3 = t10 && t10.name && d2[t10.name]))
      r3 = t10 && t10.name && d2[rm(e3 = "".concat(t10.in, ".")).call(e3, t10.name)];
    else if (function(t11, r4) {
      return hm(r4).call(r4, function(r5) {
        return r5.name === t11;
      });
    }(t10.name, x2).length > 1) {
      var i3;
      console.warn(rm(i3 = "Parameter '".concat(t10.name, "' is ambiguous because the defined spec has more than one parameter with the name: '")).call(i3, t10.name, "' and the passed-in parameter values did not define an 'in' value."));
    }
    if (null !== r3) {
      if (void 0 !== t10.default && void 0 === r3 && (r3 = t10.default), void 0 === r3 && t10.required && !t10.allowEmptyValue)
        throw new Error("Required parameter ".concat(t10.name, " is not provided"));
      if (b2 && t10.schema && "object" === t10.schema.type && "string" == typeof r3)
        try {
          r3 = JSON.parse(r3);
        } catch (t11) {
          throw new Error("Could not parse object parameter value string as JSON");
        }
      o3 && o3({ req: m2, parameter: t10, value: r3, operation: j2, spec: n2 });
    }
  });
  var E2 = Rc(Rc({}, t9), {}, { operation: j2 });
  if ((m2 = b2 ? TT(E2, m2) : RT(E2, m2)).cookies && Yb(m2.cookies).length) {
    var P2 = Yb(m2.cookies).reduce(function(t10, r3) {
      var e3 = m2.cookies[r3];
      return t10 + (t10 ? "&" : "") + dT.serialize(r3, e3);
    }, "");
    m2.headers.Cookie = P2;
  }
  return m2.cookies && delete m2.cookies, hA(m2), m2;
}
var LT = function(t9) {
  return t9 ? t9.replace(/\W/g, "") : null;
};
function CT(t9) {
  return Pk(t9.spec) ? function(t10) {
    var r2 = t10.spec, e2 = t10.pathName, n2 = t10.method, o2 = t10.server, i2 = t10.contextUrl, u2 = t10.serverVariables, a2 = void 0 === u2 ? {} : u2, f2 = XI(r2, ["paths", e2, (n2 || "").toLowerCase(), "servers"]) || XI(r2, ["paths", e2, "servers"]) || XI(r2, ["servers"]), c2 = "", s2 = null;
    if (o2 && f2 && f2.length) {
      var l2 = Hb(f2).call(f2, function(t11) {
        return t11.url;
      });
      l2.indexOf(o2) > -1 && (c2 = o2, s2 = f2[l2.indexOf(o2)]);
    }
    if (!c2 && f2 && f2.length) {
      c2 = f2[0].url;
      var p2 = Gp(f2, 1);
      s2 = p2[0];
    }
    if (c2.indexOf("{") > -1) {
      var v2 = function(t11) {
        var r3, e3 = [], n3 = /{([^}]+)}/g;
        for (; r3 = n3.exec(t11); )
          e3.push(r3[1]);
        return e3;
      }(c2);
      v2.forEach(function(t11) {
        if (s2.variables && s2.variables[t11]) {
          var r3 = s2.variables[t11], e3 = a2[t11] || r3.default, n3 = new RegExp("{".concat(t11, "}"), "g");
          c2 = c2.replace(n3, e3);
        }
      });
    }
    return function() {
      var t11, r3, e3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", n3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", o3 = e3 && n3 ? ws.parse(ws.resolve(n3, e3)) : ws.parse(e3), i3 = ws.parse(n3), u3 = LT(o3.protocol) || LT(i3.protocol) || "", a3 = o3.host || i3.host, f3 = o3.pathname || "";
      t11 = u3 && a3 ? rm(r3 = "".concat(u3, "://")).call(r3, a3 + f3) : f3;
      return "/" === t11[t11.length - 1] ? JO(t11).call(t11, 0, -1) : t11;
    }(c2, i2);
  }(t9) : function(t10) {
    var r2, e2, n2 = t10.spec, o2 = t10.scheme, i2 = t10.contextUrl, u2 = void 0 === i2 ? "" : i2, a2 = ws.parse(u2), f2 = Array.isArray(n2.schemes) ? n2.schemes[0] : null, c2 = o2 || f2 || LT(a2.protocol) || "http", s2 = n2.host || a2.host || "", l2 = n2.basePath || "";
    r2 = c2 && s2 ? rm(e2 = "".concat(c2, "://")).call(e2, s2 + l2) : l2;
    return "/" === r2[r2.length - 1] ? JO(r2).call(r2, 0, -1) : r2;
  }(t9);
}
function $T(t9) {
  var r2 = this, e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
  if ("string" == typeof t9 ? e2.url = t9 : e2 = t9, !(this instanceof $T))
    return new $T(e2);
  Yc(this, e2);
  var n2 = this.resolve().then(function() {
    return r2.disableInterfaces || Yc(r2, $T.makeApisTagOperation(r2)), r2;
  });
  return n2.client = this, n2;
}
$T.http = ZO, $T.makeHttp = function(t9, r2, e2) {
  return e2 = e2 || function(t10) {
    return t10;
  }, r2 = r2 || function(t10) {
    return t10;
  }, function(n2) {
    return "string" == typeof n2 && (n2 = { url: n2 }), XO.mergeInQueryOrForm(n2), n2 = r2(n2), e2(t9(n2));
  };
}.bind(null, $T.http), $T.resolve = Mk, $T.resolveSubtree = function(t9, r2) {
  return ZI.apply(this, arguments);
}, $T.execute = function(t9) {
  var r2 = t9.http, e2 = t9.fetch, n2 = t9.spec, o2 = t9.operationId, i2 = t9.pathName, u2 = t9.method, a2 = t9.parameters, f2 = t9.securities, c2 = hT(t9, FT), s2 = r2 || e2 || ZO;
  i2 && u2 && !o2 && (o2 = Ik(i2, u2));
  var l2 = DT.buildRequest(Rc({ spec: n2, operationId: o2, parameters: a2, securities: f2, http: s2 }, c2));
  return l2.body && (OT(l2.body) || Array.isArray(l2.body)) && (l2.body = $b(l2.body)), s2(l2);
}, $T.serializeRes = nA, $T.serializeHeaders = iA, $T.clearCache = function() {
  Sk.refs.clearCache();
}, $T.makeApisTagOperation = function() {
  var t9 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, r2 = rT.makeExecute(t9);
  return { apis: rT.mapTagOperations({ v2OperationIdCompatibilityMode: t9.v2OperationIdCompatibilityMode, spec: t9.spec, cb: r2 }) };
}, $T.buildRequest = UT, $T.helpers = { opId: kk }, $T.getBaseUrl = CT, $T.prototype = { http: ZO, execute: function(t9) {
  return this.applyDefaults(), $T.execute(Rc({ spec: this.spec, http: this.http, securities: { authorized: this.authorizations }, contextUrl: "string" == typeof this.url ? this.url : void 0, requestInterceptor: this.requestInterceptor || null, responseInterceptor: this.responseInterceptor || null }, t9));
}, resolve: function() {
  var t9 = this, r2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
  return $T.resolve(Rc({ spec: this.spec, url: this.url, http: this.http || this.fetch, allowMetaPatches: this.allowMetaPatches, useCircularStructures: this.useCircularStructures, requestInterceptor: this.requestInterceptor || null, responseInterceptor: this.responseInterceptor || null, skipNormalization: this.skipNormalization || false }, r2)).then(function(r3) {
    return t9.originalSpec = t9.spec, t9.spec = r3.spec, t9.errors = r3.errors, t9;
  });
} }, $T.prototype.applyDefaults = function() {
  var t9 = this.spec, r2 = this.url;
  if (r2 && gs(r2).call(r2, "http")) {
    var e2 = ws.parse(r2);
    t9.host || (t9.host = e2.host), t9.schemes || (t9.schemes = [e2.protocol.replace(":", "")]), t9.basePath || (t9.basePath = "/");
  }
}, $T.helpers;
function BT(t9) {
  const r2 = (t9 = t9.replace("[]", "Array")).split("/");
  return r2[0] = r2[0].replace(/[^A-Za-z0-9_\-\.]+|\s+/gm, "_"), r2.join("/");
}
const qT = { parameterTypeProperties: ["format", "minimum", "maximum", "exclusiveMinimum", "exclusiveMaximum", "minLength", "maxLength", "multipleOf", "minItems", "maxItems", "uniqueItems", "minProperties", "maxProperties", "additionalProperties", "pattern", "enum", "default"], arrayProperties: ["items", "minItems", "maxItems", "uniqueItems"], httpMethods: ["get", "post", "put", "delete", "patch", "head", "options", "trace"], uniqueOnly: function(t9, r2, e2) {
  return e2.indexOf(t9) === r2;
}, createHash: function(t9) {
  let r2, e2 = 0;
  if (0 === t9.length)
    return e2;
  for (let n2 = 0; n2 < t9.length; n2++)
    r2 = t9.charCodeAt(n2), e2 = (e2 << 5) - e2 + r2, e2 |= 0;
  return e2;
}, sanitise: BT, sanitiseAll: function(t9) {
  return BT(t9.split("/").join("_"));
}, camelize: function(t9) {
  return t9.toLowerCase().replace(/[-_ \/\.](.)/g, (t10, r2) => r2.toUpperCase());
}, clone: function(t9) {
  return JSON.parse(JSON.stringify(t9));
}, circularClone: function t7(r2, e2 = null) {
  if (e2 || (e2 = /* @__PURE__ */ new WeakMap()), Object(r2) !== r2 || r2 instanceof Function)
    return r2;
  if (e2.has(r2))
    return e2.get(r2);
  let n2;
  try {
    n2 = new r2.constructor();
  } catch (t9) {
    n2 = Object.create(Object.getPrototypeOf(r2));
  }
  return e2.set(r2, n2), Object.assign(n2, ...Object.keys(r2).map((n3) => ({ [n3]: t7(r2[n3], e2) })));
} };
function GT() {
  return { depth: 0, seen: /* @__PURE__ */ new WeakMap(), top: true, combine: false, allowRefSiblings: false };
}
const WT = { getDefaultState: GT, walkSchema: function t8(r2, e2, n2, o2) {
  if (void 0 === n2.depth && (n2 = GT()), null == r2)
    return r2;
  if (n2.combine && (r2.allOf && Array.isArray(r2.allOf) && 1 === r2.allOf.length && delete (r2 = { ...r2.allOf[0], ...r2 })?.allOf, r2?.anyOf && Array.isArray(r2.anyOf) && 1 === r2.anyOf.length && delete (r2 = { ...r2.anyOf[0], ...r2 })?.anyOf, r2?.oneOf && Array.isArray(r2.oneOf) && 1 === r2.oneOf.length && delete (r2 = { ...r2.oneOf[0], ...r2 })?.oneOf), o2(r2, e2, n2), n2.seen.has(r2))
    return r2;
  if ("object" == typeof r2 && null !== r2 && n2.seen.set(r2, true), n2.top = false, n2.depth++, void 0 !== r2?.items && (n2.property = "items", t8(r2.items, r2, n2, o2)), r2?.additionalItems && "object" == typeof r2.additionalItems && (n2.property = "additionalItems", t8(r2.additionalItems, r2, n2, o2)), r2?.additionalProperties && "object" == typeof r2.additionalProperties && (n2.property = "additionalProperties", t8(r2.additionalProperties, r2, n2, o2)), r2?.properties)
    for (const e3 in r2.properties) {
      const i2 = r2.properties[e3];
      n2.property = `properties/${e3}`, t8(i2, r2, n2, o2);
    }
  if (r2?.patternProperties)
    for (const e3 in r2.patternProperties) {
      const i2 = r2.patternProperties[e3];
      n2.property = `patternProperties/${e3}`, t8(i2, r2, n2, o2);
    }
  if (r2?.allOf)
    for (const e3 in r2.allOf) {
      const i2 = r2.allOf[e3];
      n2.property = `allOf/${e3}`, t8(i2, r2, n2, o2);
    }
  if (r2?.anyOf)
    for (const e3 in r2.anyOf) {
      const i2 = r2.anyOf[e3];
      n2.property = `anyOf/${e3}`, t8(i2, r2, n2, o2);
    }
  if (r2?.oneOf)
    for (const e3 in r2.oneOf) {
      const i2 = r2.oneOf[e3];
      n2.property = `oneOf/${e3}`, t8(i2, r2, n2, o2);
    }
  return r2?.not && (n2.property = "not", t8(r2.not, r2, n2, o2)), n2.depth--, r2;
} };
function zT(t9, r2, e2) {
  if (r2 || (r2 = { depth: 0 }), r2.depth || (r2 = { path: "#", depth: 0, pkey: "", parent: {}, payload: {}, seen: /* @__PURE__ */ new WeakMap(), identity: false, identityDetection: false, ...r2 }), "object" != typeof t9)
    return;
  const n2 = r2.path;
  for (const o2 in t9) {
    if (r2.key = o2, r2.path = `${r2.path}/${encodeURIComponent(o2)}`, r2.identityPath = r2.seen.get(t9[o2]), r2.identity = void 0 !== r2.identityPath, t9.hasOwnProperty(o2) && e2(t9, o2, r2), "object" == typeof t9[o2] && !r2.identity) {
      r2.identityDetection && !Array.isArray(t9[o2]) && null !== t9[o2] && r2.seen.set(t9[o2], r2.path);
      const n3 = {};
      n3.parent = t9, n3.path = r2.path, n3.depth = r2.depth ? r2.depth + 1 : 1, n3.pkey = o2, n3.payload = r2.payload, n3.seen = r2.seen, n3.identity = false, n3.identityDetection = r2.identityDetection, zT(t9[o2], n3, e2);
    }
    r2.path = n2;
  }
}
let JT;
function HT(t9, r2) {
  for (const e2 in t9)
    e2.startsWith("x-") && !e2.startsWith("x-s2o") && (r2[e2] = t9[e2]);
}
function VT(t9, r2) {
  WT.walkSchema(t9, {}, {}, (t10, e2) => {
    !function(t11) {
      if (t11["x-required"] && Array.isArray(t11["x-required"]) && (t11.required || (t11.required = []), t11.required = t11.required.concat(t11["x-required"]), delete t11["x-required"]), t11["x-anyOf"] && (t11.anyOf = t11["x-anyOf"], delete t11["x-anyOf"]), t11["x-oneOf"] && (t11.oneOf = t11["x-oneOf"], delete t11["x-oneOf"]), t11["x-not"] && (t11.not = t11["x-not"], delete t11["x-not"]), "boolean" == typeof t11["x-nullable"] && (t11.nullable = t11["x-nullable"], delete t11["x-nullable"]), "object" == typeof t11["x-discriminator"] && "string" == typeof t11["x-discriminator"].propertyName) {
        t11.discriminator = t11["x-discriminator"], delete t11["x-discriminator"];
        for (const r3 in t11.discriminator.mapping) {
          const e3 = t11.discriminator.mapping[r3];
          e3.startsWith("#/definitions/") && (t11.discriminator.mapping[r3] = e3.replace("#/definitions/", "#/components/schemas/"));
        }
      }
    }(t10), function(t11, r3, e3) {
      if (t11.nullable && e3.patches++, t11.discriminator && "string" == typeof t11.discriminator && (t11.discriminator = { propertyName: t11.discriminator }), t11.items && Array.isArray(t11.items) && (0 === t11.items.length ? t11.items = {} : 1 === t11.items.length ? t11.items = t11.items[0] : t11.items = { anyOf: t11.items }), t11.type && Array.isArray(t11.type)) {
        if (e3.patches++, e3.warnings.push("(Patchable) schema type must not be an array"), 0 === t11.type.length)
          delete t11.type;
        else {
          t11.oneOf || (t11.oneOf = []);
          for (const r4 of t11.type) {
            const e4 = {};
            if ("null" === r4)
              t11.nullable = true;
            else {
              e4.type = r4;
              for (const r5 of qT.arrayProperties)
                void 0 !== t11.prop && (e4[r5] = t11[r5], delete t11[r5]);
            }
            e4.type && t11.oneOf.push(e4);
          }
          delete t11.type, 0 === t11.oneOf.length ? delete t11.oneOf : t11.oneOf.length < 2 && (t11.type = t11.oneOf[0].type, Object.keys(t11.oneOf[0]).length > 1 && (e3.patches++, e3.warnings.push("Lost properties from oneOf")), delete t11.oneOf);
        }
        t11.type && Array.isArray(t11.type) && 1 === t11.type.length && (t11.type = t11.type[0]);
      }
      t11.type && "null" === t11.type && (delete t11.type, t11.nullable = true), "array" !== t11.type || t11.items || (t11.items = {}), "file" === t11.type && (t11.type = "string", t11.format = "binary"), "boolean" == typeof t11.required && (t11.required && t11.name && (void 0 === r3.required && (r3.required = []), Array.isArray(r3.required) && r3.required.push(t11.name)), delete t11.required), t11.xml && "string" == typeof t11.xml.namespace && (t11.xml.namespace || delete t11.xml.namespace), t11.allowEmptyValue && (delete t11.allowEmptyValue, e3.patches++, e3.warnings.push("(Patchable): deleted schema.allowEmptyValue"));
    }(t10, e2, r2);
  });
}
function YT(t9) {
  for (const r2 in t9)
    for (const e2 in t9[r2]) {
      const n2 = qT.sanitise(e2);
      e2 !== n2 && (t9[r2][n2] = t9[r2][e2], delete t9[r2][e2]);
    }
}
function QT(t9, r2) {
  if ("basic" === t9.type && (t9.type = "http", t9.scheme = "basic"), "oauth2" === t9.type) {
    const e2 = {};
    let n2 = t9.flow;
    "application" === t9.flow && (n2 = "clientCredentials"), "accessCode" === t9.flow && (n2 = "authorizationCode"), "string" == typeof t9.authorizationUrl && (e2.authorizationUrl = t9.authorizationUrl.split("?")[0].trim() || "/"), "string" == typeof t9.tokenUrl && (e2.tokenUrl = t9.tokenUrl.split("?")[0].trim() || "/"), e2.scopes = t9.scopes || {}, t9.flows = {}, t9.flows[n2] = e2, delete t9.flow, delete t9.authorizationUrl, delete t9.tokenUrl, delete t9.scopes, t9.name && (delete t9.name, r2.patches++, r2.warnings.push("(Patchable) oauth2 securitySchemes should not have name property"));
  }
}
function KT(t9) {
  return t9 && !t9["x-s2o-delete"];
}
function XT(t9, r2) {
  if (t9.type && !t9.schema && (t9.schema = {}), t9.type && (t9.schema.type = t9.type), t9.items && "array" !== t9.items.type) {
    if (t9.items.collectionFormat !== t9.collectionFormat)
      return r2.errCount++, void r2.errors.push({ message: "Nested collectionFormats are not supported", pointer: "/.../responses/header" });
    delete t9.items.collectionFormat;
  }
  "array" === t9.type ? ("ssv" === t9.collectionFormat ? (r2.patches++, r2.warnings.push("collectionFormat:ssv is no longer supported for headers")) : "pipes" === t9.collectionFormat ? (r2.patches++, r2.warnings.push("collectionFormat:pipes is no longer supported for headers")) : "multi" === t9.collectionFormat ? t9.explode = true : "tsv" === t9.collectionFormat ? (t9["x-collectionFormat"] = "tsv", r2.patches++, r2.warnings.push("collectionFormat:tsv is no longer supported")) : t9.style = "simple", delete t9.collectionFormat) : t9.collectionFormat && (delete t9.collectionFormat, r2.patches++, r2.warnings.push("(Patchable) collectionFormat is only applicable to header.type array")), delete t9.type;
  for (const r3 of qT.parameterTypeProperties)
    void 0 !== t9[r3] && (t9.schema[r3] = t9[r3], delete t9[r3]);
  for (const r3 of qT.arrayProperties)
    void 0 !== t9[r3] && (t9.schema[r3] = t9[r3], delete t9[r3]);
}
function ZT(t9, r2, e2, n2, o2, i2, u2) {
  const a2 = {};
  let f2, c2 = true;
  r2 && r2.consumes && "string" == typeof r2.consumes && (r2.consumes = [r2.consumes], u2.patches++, u2.warnings.push("(Patchable) operation.consumes must be an array")), Array.isArray(i2.consumes) || delete i2.consumes;
  const s2 = ((r2 ? r2.consumes : null) || i2.consumes || []).filter(qT.uniqueOnly);
  if (t9 && (t9.name || t9.in)) {
    "boolean" == typeof t9["x-deprecated"] && (t9.deprecated = t9["x-deprecated"], delete t9["x-deprecated"]), void 0 !== t9["x-example"] && (t9.example = t9["x-example"], delete t9["x-example"]), "body" === t9.in || t9.type || (t9.type = "string", u2.patches++, u2.warnings.push("(Patchable) parameter.type is mandatory for non-body parameters")), "file" === t9.type && (t9["x-s2o-originalType"] = t9.type, f2 = t9.type), null === t9.description && delete t9.description;
    let r3 = t9.collectionFormat;
    if ("array" !== t9.type || r3 || (r3 = "csv"), r3 && ("array" !== t9.type && (delete t9.collectionFormat, u2.patches++, u2.warnings.push("(Patchable) collectionFormat is only applicable to param.type array")), "csv" !== r3 || "query" !== t9.in && "cookie" !== t9.in || (t9.style = "form", t9.explode = false), "csv" !== r3 || "path" !== t9.in && "header" !== t9.in || (t9.style = "simple"), "ssv" === r3 && ("query" === t9.in ? t9.style = "spaceDelimited" : u2.warnings.push(`${t9.name} collectionFormat:ssv is no longer supported except for in:query parameters`)), "pipes" === r3 && ("query" === t9.in ? t9.style = "pipeDelimited" : u2.warnings.push(`${t9.name} collectionFormat:pipes is no longer supported except for in:query parameters`)), "multi" === r3 && (t9.explode = true), "tsv" === r3 && (u2.warnings.push("collectionFormat:tsv is no longer supported"), t9["x-collectionFormat"] = "tsv"), delete t9.collectionFormat), t9.type && "body" !== t9.type && "formData" !== t9.in)
      if (t9.items && t9.schema)
        u2.warnings.push(`${t9.name} parameter has array,items and schema`);
      else {
        t9.schema && u2.patches++, t9.schema && "object" == typeof t9.schema || (t9.schema = {}), t9.schema.type = t9.type, t9.items && (t9.schema.items = t9.items, delete t9.items, zT(t9.schema.items, null, (e3, n3) => {
          "collectionFormat" === n3 && "string" == typeof e3[n3] && (r3 && e3[n3] !== r3 && u2.warnings.push(`${t9.name} Nested collectionFormats are not supported`), delete e3[n3]);
        }));
        for (const r4 of qT.parameterTypeProperties)
          void 0 !== t9[r4] && (t9.schema[r4] = t9[r4]), delete t9[r4];
      }
    t9.schema && VT(t9.schema, u2), t9["x-ms-skip-url-encoding"] && "query" === t9.in && (t9.allowReserved = true, delete t9["x-ms-skip-url-encoding"]);
  }
  if (t9 && "formData" === t9.in) {
    c2 = false, a2.content = {};
    let r3 = "application/x-www-form-urlencoded";
    if (s2.length && s2.indexOf("multipart/form-data") >= 0 && (r3 = "multipart/form-data"), a2.content[r3] = {}, t9.schema)
      a2.content[r3].schema = t9.schema;
    else {
      a2.content[r3].schema = {}, a2.content[r3].schema.type = "object", a2.content[r3].schema.properties = {}, a2.content[r3].schema.properties[t9.name] = {};
      const e3 = a2.content[r3].schema, n3 = a2.content[r3].schema.properties[t9.name];
      t9.description && (n3.description = t9.description), t9.example && (n3.example = t9.example), t9.type && (n3.type = t9.type);
      for (const r4 of qT.parameterTypeProperties)
        void 0 !== t9[r4] && (n3[r4] = t9[r4]);
      true === t9.required && (e3.required || (e3.required = []), e3.required.push(t9.name), a2.required = true), void 0 !== t9.default && (n3.default = t9.default), n3.properties && (n3.properties = t9.properties), t9.allOf && (n3.allOf = t9.allOf), "array" === t9.type && t9.items && (n3.items = t9.items, n3.items.collectionFormat && delete n3.items.collectionFormat), "file" !== f2 && "file" !== t9["x-s2o-originalType"] || (n3.type = "string", n3.format = "binary"), HT(t9, n3);
    }
  } else
    t9 && "file" === t9.type && (t9.required && (a2.required = t9.required), a2.content = {}, a2.content["application/octet-stream"] = {}, a2.content["application/octet-stream"].schema = {}, a2.content["application/octet-stream"].schema.type = "string", a2.content["application/octet-stream"].schema.format = "binary", HT(t9, a2));
  if (t9 && "body" === t9.in) {
    a2.content = {}, t9.name && (a2["x-s2o-name"] = (r2 && r2.operationId ? qT.sanitiseAll(r2.operationId) : "") + qT.camelize(`_${t9.name}`)), t9.description && (a2.description = t9.description), t9.required && (a2.required = t9.required), s2.length || s2.push("application/json");
    for (const r3 of s2)
      a2.content[r3] = {}, a2.content[r3].schema = qT.clone(t9.schema || {}), VT(a2.content[r3].schema, u2);
    HT(t9, a2);
  }
  if (Object.keys(a2).length > 0 && (t9["x-s2o-delete"] = true, r2))
    if (r2.requestBody && c2) {
      r2.requestBody["x-s2o-overloaded"] = true;
      const t10 = r2.operationId || o2;
      u2.warnings.push(`Operation ${t10} has multiple requestBodies`);
    } else
      r2.requestBody || (r2 = function(t10, r3) {
        const e3 = {};
        for (const n3 of Object.keys(t10))
          e3[n3] = t10[n3], "parameters" === n3 && (e3.requestBody = {}, r3.rbname && (e3[r3.rbname] = ""));
        return e3.requestBody = {}, e3;
      }(r2, u2), e2[n2] = r2), r2.requestBody.content && r2.requestBody.content["multipart/form-data"] && r2.requestBody.content["multipart/form-data"].schema && r2.requestBody.content["multipart/form-data"].schema.properties && a2.content["multipart/form-data"] && a2.content["multipart/form-data"].schema && a2.content["multipart/form-data"].schema.properties ? (r2.requestBody.content["multipart/form-data"].schema.properties = Object.assign(r2.requestBody.content["multipart/form-data"].schema.properties, a2.content["multipart/form-data"].schema.properties), r2.requestBody.content["multipart/form-data"].schema.required = (r2.requestBody.content["multipart/form-data"].schema.required || []).concat(a2.content["multipart/form-data"].schema.required || []), r2.requestBody.content["multipart/form-data"].schema.required.length || delete r2.requestBody.content["multipart/form-data"].schema.required) : r2.requestBody.content && r2.requestBody.content["application/x-www-form-urlencoded"] && r2.requestBody.content["application/x-www-form-urlencoded"].schema && r2.requestBody.content["application/x-www-form-urlencoded"].schema.properties && a2.content["application/x-www-form-urlencoded"] && a2.content["application/x-www-form-urlencoded"].schema && a2.content["application/x-www-form-urlencoded"].schema.properties ? (r2.requestBody.content["application/x-www-form-urlencoded"].schema.properties = Object.assign(r2.requestBody.content["application/x-www-form-urlencoded"].schema.properties, a2.content["application/x-www-form-urlencoded"].schema.properties), r2.requestBody.content["application/x-www-form-urlencoded"].schema.required = (r2.requestBody.content["application/x-www-form-urlencoded"].schema.required || []).concat(a2.content["application/x-www-form-urlencoded"].schema.required || []), r2.requestBody.content["application/x-www-form-urlencoded"].schema.required.length || delete r2.requestBody.content["application/x-www-form-urlencoded"].schema.required) : (r2.requestBody = Object.assign(r2.requestBody, a2), r2.requestBody["x-s2o-name"] || r2.operationId && (r2.requestBody["x-s2o-name"] = qT.sanitiseAll(r2.operationId)));
  if (t9 && !t9["x-s2o-delete"]) {
    delete t9.type;
    for (const r3 of qT.parameterTypeProperties)
      delete t9[r3];
    "path" !== t9.in || void 0 !== t9.required && true === t9.required || (t9.required = true, u2.patches++, u2.warnings.push(`(Patchable) path parameters must be required:true [${t9.name} in ${o2}]`));
  }
  return r2;
}
function tR(t9, r2, e2, n2) {
  if (!t9)
    return false;
  if (t9.description || "object" != typeof t9 || Array.isArray(t9) || (n2.patches++, n2.warnings.push("(Patchable) response.description is mandatory")), void 0 !== t9.schema) {
    VT(t9.schema, n2), r2 && r2.produces && "string" == typeof r2.produces && (r2.produces = [r2.produces], n2.patches++, n2.warnings.push("(Patchable) operation.produces must be an array")), e2.produces && !Array.isArray(e2.produces) && delete e2.produces;
    const o2 = ((r2 ? r2.produces : null) || e2.produces || []).filter(qT.uniqueOnly);
    o2.length || o2.push("*/*"), t9.content = {};
    for (const r3 of o2) {
      if (t9.content[r3] = {}, t9.content[r3].schema = qT.clone(t9.schema), t9.examples && t9.examples[r3]) {
        const e3 = {};
        e3.value = t9.examples[r3], t9.content[r3].examples = {}, t9.content[r3].examples.response = e3, delete t9.examples[r3];
      }
      "file" === t9.content[r3].schema.type && (t9.content[r3].schema = { type: "string", format: "binary" });
    }
    delete t9.schema;
  }
  for (const r3 in t9.examples)
    t9.content || (t9.content = {}), t9.content[r3] || (t9.content[r3] = {}), t9.content[r3].examples = {}, t9.content[r3].examples.response = {}, t9.content[r3].examples.response.value = t9.examples[r3];
  if (delete t9.examples, t9.headers)
    for (const r3 in t9.headers)
      "status code" === r3.toLowerCase() ? (delete t9.headers[r3], n2.patches++, n2.warnings.push('(Patchable) "Status Code" is not a valid header')) : XT(t9.headers[r3], n2);
}
function rR(t9, r2, e2, n2, o2) {
  for (const i2 in t9) {
    const u2 = t9[i2];
    u2 && u2["x-trace"] && "object" == typeof u2["x-trace"] && (u2.trace = u2["x-trace"], delete u2["x-trace"]), u2 && u2["x-summary"] && "string" == typeof u2["x-summary"] && (u2.summary = u2["x-summary"], delete u2["x-summary"]), u2 && u2["x-description"] && "string" == typeof u2["x-description"] && (u2.description = u2["x-description"], delete u2["x-description"]), u2 && u2["x-servers"] && Array.isArray(u2["x-servers"]) && (u2.servers = u2["x-servers"], delete u2["x-servers"]);
    for (const t10 in u2)
      if (qT.httpMethods.indexOf(t10) >= 0 || "x-amazon-apigateway-any-method" === t10) {
        let a2 = u2[t10];
        if (a2 && a2.parameters && Array.isArray(a2.parameters)) {
          if (u2.parameters)
            for (const r3 of u2.parameters) {
              a2.parameters.find((t11) => t11.name === r3.name && t11.in === r3.in) || "formData" !== r3.in && "body" !== r3.in && "file" !== r3.type || (a2 = ZT(r3, a2, u2, t10, i2, o2, e2));
            }
          for (const r3 of a2.parameters)
            a2 = ZT(r3, a2, u2, t10, `${t10}: ${i2}`, o2, e2);
          a2.parameters && (a2.parameters = a2.parameters.filter(KT));
        }
        if (a2 && a2.security && YT(a2.security), "object" == typeof a2) {
          if (!a2.responses) {
            const t11 = { description: "Default response" };
            a2.responses = { default: t11 };
          }
          for (const t11 in a2.responses) {
            tR(a2.responses[t11], a2, o2, e2);
          }
        }
        if (a2 && a2["x-servers"] && Array.isArray(a2["x-servers"]))
          a2.servers = a2["x-servers"], delete a2["x-servers"];
        else if (a2 && a2.schemes && a2.schemes.length) {
          for (const t11 of a2.schemes)
            if ((!o2.schemes || o2.schemes.indexOf(t11) < 0) && (a2.servers || (a2.servers = []), Array.isArray(o2.servers)))
              for (const t12 of o2.servers) {
                const r3 = qT.clone(t12);
                a2.servers.push(r3);
              }
        }
        if (a2) {
          if (delete a2.consumes, delete a2.produces, delete a2.schemes, a2["x-ms-examples"]) {
            for (const t11 in a2["x-ms-examples"]) {
              const r3 = a2["x-ms-examples"][t11], e3 = qT.sanitiseAll(t11);
              if (r3.parameters)
                for (const e4 in r3.parameters) {
                  const n3 = r3.parameters[e4];
                  for (const r4 of (a2.parameters || []).concat(u2.parameters || []))
                    r4.name !== e4 || r4.example || (r4.examples || (r4.examples = {}), r4.examples[t11] = { value: n3 });
                }
              if (r3.responses)
                for (const n3 in r3.responses) {
                  if (r3.responses[n3].headers)
                    for (const t12 in r3.responses[n3].headers) {
                      const e4 = r3.responses[n3].headers[t12];
                      for (const r4 in a2.responses[n3].headers)
                        if (r4 === t12) {
                          a2.responses[n3].headers[r4].example = e4;
                        }
                    }
                  if (r3.responses[n3].body && (o2.components.examples[e3] = { value: qT.clone(r3.responses[n3].body) }, a2.responses[n3] && a2.responses[n3].content))
                    for (const r4 in a2.responses[n3].content) {
                      const o3 = a2.responses[n3].content[r4];
                      o3.examples || (o3.examples = {}), o3.examples[t11] = { $ref: `#/components/examples/${e3}` };
                    }
                }
            }
            delete a2["x-ms-examples"];
          }
          if (a2.parameters && 0 === a2.parameters.length && delete a2.parameters, a2.requestBody) {
            const e3 = a2.operationId ? qT.sanitiseAll(a2.operationId) : qT.camelize(qT.sanitiseAll(t10 + i2)), o3 = qT.sanitise(a2.requestBody["x-s2o-name"] || e3 || "");
            delete a2.requestBody["x-s2o-name"];
            const u3 = JSON.stringify(a2.requestBody), f2 = qT.createHash(u3);
            if (!n2[f2]) {
              const t11 = {};
              t11.name = o3, t11.body = a2.requestBody, t11.refs = [], n2[f2] = t11;
            }
            const c2 = `#/${r2}/${encodeURIComponent(i2)}/${t10}/requestBody`;
            n2[f2].refs.push(c2);
          }
        }
      }
    if (u2 && u2.parameters) {
      for (const t10 in u2.parameters) {
        ZT(u2.parameters[t10], null, u2, null, i2, o2, e2);
      }
      Array.isArray(u2.parameters) && (u2.parameters = u2.parameters.filter(KT));
    }
  }
}
function eR(t9) {
  return t9 && t9.url && "string" == typeof t9.url ? (t9.url = t9.url.split("{{").join("{"), t9.url = t9.url.split("}}").join("}"), t9.url.replace(/\{(.+?)\}/g, (r2, e2) => {
    t9.variables || (t9.variables = {}), t9.variables[e2] = { default: "unknown" };
  }), t9) : t9;
}
function nR(t9, r2) {
  void 0 !== t9.info && null !== t9.info || (t9.info = { version: "", title: "" }, r2.patches++, r2.warnings.push("(Patchable) info object is mandatory")), ("object" != typeof t9.info || Array.isArray(t9.info)) && (r2.errCount++, r2.errors.push({ message: "info must be an object", pointer: "/info" })), t9.info && (void 0 === t9.info.title && (r2.patches++, t9.info.title = "", r2.warnings.push({ message: "(Patchable) info.title cannot be null", pointer: "/info/title", patchable: true })), void 0 === t9.info.version ? (r2.patches++, t9.info.version = "", r2.warnings.push("(Patchable) info.version cannot be null")) : "string" != typeof t9.info.version && (r2.patches++, t9.info.version = t9.info.version.toString(), r2.warnings.push("(Patchable) info.version must be a string")));
}
function oR(t9, r2) {
  t9.paths || (r2.patches++, t9.paths = {}, r2.warnings.push("(Patchable) paths object is mandatory"));
}
function iR(t9 = {}) {
  const r2 = { original: t9, openapi: {}, patches: 0, warnings: [], errCount: 0, errors: [] };
  if (t9.openapi && "string" == typeof t9.openapi && t9.openapi.startsWith("3."))
    return r2.openapi = qT.circularClone(t9), nR(r2.openapi, r2), oR(r2.openapi, r2), r2;
  if ("2.0" !== t9.swagger)
    return r2.errCount++, r2.errors.push({ message: `Unsupported swagger/OpenAPI version: ${t9.openapi ? t9.openapi : t9.swagger}`, pointer: "/swagger" }), r2;
  if (r2.openapi = qT.circularClone(t9), r2.openapi.openapi = "3.0.0", delete r2.openapi.swagger, zT(r2.openapi, {}, (t10, r3, e2) => {
    null === t10[r3] && !r3.startsWith("x-") && "default" !== r3 && e2.path.indexOf("/example") < 0 && delete t10[r3];
  }), t9.host)
    (t9.schemes || []).forEach((e2) => {
      const n2 = {}, o2 = (t9.basePath || "").replace(/\/$/, "");
      n2.url = `${e2 ? `${e2}:` : ""}//${t9.host}${o2}`, eR(n2), r2.openapi.servers || (r2.openapi.servers = []), r2.openapi.servers.push(n2);
    });
  else if (t9.basePath) {
    const e2 = {};
    e2.url = t9.basePath, eR(e2), r2.openapi.servers || (r2.openapi.servers = []), r2.openapi.servers.push(e2);
  }
  if (delete r2.openapi.host, delete r2.openapi.basePath, t9["x-ms-parameterized-host"]) {
    const e2 = t9["x-ms-parameterized-host"], n2 = {};
    n2.url = e2.hostTemplate + (t9.basePath ? t9.basePath : ""), n2.variables = {};
    const o2 = n2.url.match(/\{\w+\}/g);
    for (const t10 in e2.parameters) {
      const r3 = e2.parameters[t10];
      t10.startsWith("x-") || (delete r3.required, delete r3.type, delete r3.in, void 0 === r3.default && (r3.enum ? r3.default = r3.enum[0] : r3.default = "none"), r3.name || (r3.name = o2[t10].replace("{", "").replace("}", "")), n2.variables[r3.name] = r3, delete r3.name);
    }
    r2.openapi.servers || (r2.openapi.servers = []), false === e2.useSchemePrefix ? r2.openapi.servers.push(n2) : t9.schemes.forEach((t10) => {
      r2.openapi.servers.push({ ...n2, url: `${t10}://${n2.url}` });
    }), delete r2.openapi["x-ms-parameterized-host"];
  }
  return nR(r2.openapi, r2), oR(r2.openapi, r2), "string" == typeof r2.openapi.consumes && (r2.openapi.consumes = [r2.openapi.consumes]), "string" == typeof r2.openapi.produces && (r2.openapi.produces = [r2.openapi.produces]), r2.openapi.components = {}, r2.openapi["x-callbacks"] && (r2.openapi.components.callbacks = r2.openapi["x-callbacks"], delete r2.openapi["x-callbacks"]), r2.openapi.components.examples = {}, r2.openapi.components.headers = {}, r2.openapi["x-links"] && (r2.openapi.components.links = r2.openapi["x-links"], delete r2.openapi["x-links"]), r2.openapi.components.parameters = r2.openapi.parameters || {}, r2.openapi.components.responses = r2.openapi.responses || {}, r2.openapi.components.requestBodies = {}, r2.openapi.components.securitySchemes = r2.openapi.securityDefinitions || {}, r2.openapi.components.schemas = r2.openapi.definitions || {}, delete r2.openapi.definitions, delete r2.openapi.responses, delete r2.openapi.parameters, delete r2.openapi.securityDefinitions, function(t10) {
    const r3 = t10.openapi, e2 = {};
    JT = { schemas: {} }, r3.security && YT(r3.security);
    for (const e3 in r3.components.securitySchemes) {
      const n2 = qT.sanitise(e3);
      if (e3 !== n2) {
        if (r3.components.securitySchemes[n2])
          return t10.errCount++, t10.errors.push({ message: `Duplicate sanitised securityScheme name ${n2}`, pointer: `/components/securitySchemes/${n2}` }), t10;
        r3.components.securitySchemes[n2] = r3.components.securitySchemes[e3], delete r3.components.securitySchemes[e3];
      }
      QT(r3.components.securitySchemes[n2], t10);
    }
    for (const e3 in r3.components.schemas) {
      const n2 = qT.sanitiseAll(e3);
      let o2 = 0;
      if (e3 !== n2) {
        for (; r3.components.schemas[n2 + o2]; )
          o2 = o2 ? ++o2 : 2;
        r3.components.schemas[n2 + o2] = r3.components.schemas[e3], delete r3.components.schemas[e3];
      }
      JT.schemas[e3] = n2 + o2, VT(r3.components.schemas[`${n2}${o2}`], t10);
    }
    for (const e3 in r3.components.parameters) {
      const n2 = qT.sanitise(e3);
      if (e3 !== n2) {
        if (r3.components.parameters[n2])
          return t10.errCount++, t10.errors.push({ message: `Duplicate sanitised parameter name ${n2}`, pointer: `/components/parameters/${n2}` }), t10;
        r3.components.parameters[n2] = r3.components.parameters[e3], delete r3.components.parameters[e3];
      }
      ZT(r3.components.parameters[n2], null, null, null, n2, r3, t10);
    }
    for (const e3 in r3.components.responses) {
      const n2 = qT.sanitise(e3);
      if (e3 !== n2) {
        if (r3.components.responses[n2])
          return t10.errCount++, t10.errors.push({ message: `Duplicate sanitised response name ${n2}`, pointer: `/components/responses/${n2}` }), t10;
        r3.components.responses[n2] = r3.components.responses[e3], delete r3.components.responses[e3];
      }
      const o2 = r3.components.responses[n2];
      if (tR(o2, null, r3, t10), o2.headers)
        for (const r4 in o2.headers)
          "status code" === r4.toLowerCase() ? (delete o2.headers[r4], t10.patches++, t10.warnings.push('(Patchable) "Status Code" is not a valid header')) : XT(o2.headers[r4], t10);
    }
    for (const t11 in r3.components.requestBodies) {
      const n2 = r3.components.requestBodies[t11], o2 = JSON.stringify(n2), i2 = qT.createHash(o2), u2 = {};
      u2.name = t11, u2.body = n2, u2.refs = [], e2[i2] = u2;
    }
    rR(r3.paths, "paths", t10, e2, r3), r3["x-ms-paths"] && rR(r3["x-ms-paths"], "x-ms-paths", t10, e2, r3);
    for (const t11 in r3.components.parameters)
      r3.components.parameters[t11]["x-s2o-delete"] && delete r3.components.parameters[t11];
    return delete r3.consumes, delete r3.produces, delete r3.schemes, r3.components.requestBodies = {}, r3.components.responses && 0 === Object.keys(r3.components.responses).length && delete r3.components.responses, r3.components.parameters && 0 === Object.keys(r3.components.parameters).length && delete r3.components.parameters, r3.components.examples && 0 === Object.keys(r3.components.examples).length && delete r3.components.examples, r3.components.requestBodies && 0 === Object.keys(r3.components.requestBodies).length && delete r3.components.requestBodies, r3.components.securitySchemes && 0 === Object.keys(r3.components.securitySchemes).length && delete r3.components.securitySchemes, r3.components.headers && 0 === Object.keys(r3.components.headers).length && delete r3.components.headers, r3.components.schemas && 0 === Object.keys(r3.components.schemas).length && delete r3.components.schemas, r3.components && 0 === Object.keys(r3.components).length && delete r3.components, t10;
  }(r2);
}
function uR(t9) {
  return t9.ok && t9.text && t9.parseError && "YAMLException" === t9.parseError.name && (!t9.headers["content-type"] || t9.headers["content-type"].match("text/plain")) && (t9.body = t9.text), t9;
}
const aR = { convertObj: iR, resolve: function(t9) {
  return new Promise(async (r2) => {
    try {
      const e2 = await $T.resolve(t9, uR);
      if (e2.errors && e2.errors.length > 0)
        r2(e2);
      else {
        e2.spec.openapi && (e2.resolvedSpec = e2.spec, r2(e2));
        const t10 = iR(e2.spec);
        t10.errors && t10.errors.length > 0 && (Array.isArray(e2.errors) ? e2.errors.concat(e2.errors) : e2.errors = t10.errors), t10.warnings && t10.warnings.length > 0 && (e2.warnings = t10.warnings), e2.resolvedSpec = e2.spec, e2.spec = t10.openapi, r2(e2);
      }
    } catch (t10) {
      r2(t10);
    }
  });
} };


;// CONCATENATED MODULE: ./src/utils/spec-parser.js
/* eslint-disable no-use-before-define */



async function ProcessSpec(specUrl, generateMissingTags = false, sortTags = false, sortEndpointsBy = '', attrApiKey = '', attrApiKeyLocation = '', attrApiKeyValue = '', serverUrl = '') {
  var _jsonParsedSpec$info, _jsonParsedSpec$compo;

  let jsonParsedSpec;

  try {
    var _specMeta$resolvedSpe, _specMeta$resolvedSpe2;

    this.requestUpdate(); // important to show the initial loader

    let specMeta;

    if (typeof specUrl === 'string') {
      specMeta = await aR.resolve({
        url: specUrl,
        allowMetaPatches: false
      }); // Swagger(specUrl);
    } else {
      specMeta = await aR.resolve({
        spec: specUrl,
        allowMetaPatches: false
      }); // Swagger({ spec: specUrl });
    }

    await sleep(0); // important to show the initial loader (allows for rendering updates)
    // If  JSON Schema Viewer

    if ((_specMeta$resolvedSpe = specMeta.resolvedSpec) !== null && _specMeta$resolvedSpe !== void 0 && _specMeta$resolvedSpe.jsonSchemaViewer && (_specMeta$resolvedSpe2 = specMeta.resolvedSpec) !== null && _specMeta$resolvedSpe2 !== void 0 && _specMeta$resolvedSpe2.schemaAndExamples) {
      this.dispatchEvent(new CustomEvent('before-render', {
        detail: {
          spec: specMeta.resolvedSpec
        }
      }));
      const schemaAndExamples = Object.entries(specMeta.resolvedSpec.schemaAndExamples).map(v => ({
        show: true,
        expanded: true,
        selectedExample: null,
        name: v[0],
        elementId: v[0].replace(invalidCharsRegEx, '-'),
        ...v[1]
      }));
      const parsedSpec = {
        specLoadError: false,
        isSpecLoading: false,
        info: specMeta.resolvedSpec.info,
        schemaAndExamples
      };
      return parsedSpec;
    }

    if (specMeta.spec && (specMeta.spec.components || specMeta.spec.info || specMeta.spec.servers || specMeta.spec.tags || specMeta.spec.paths)) {
      jsonParsedSpec = specMeta.spec;
      this.dispatchEvent(new CustomEvent('before-render', {
        detail: {
          spec: jsonParsedSpec
        }
      }));
    } else {
      var _specMeta$response, _specMeta$response2, _specMeta$response3, _specMeta$response4;

      console.info('RapiDoc: %c There was an issue while parsing the spec %o ', 'color:orangered', specMeta); // eslint-disable-line no-console

      return {
        specLoadError: true,
        isSpecLoading: false,
        info: {
          title: 'Error loading the spec',
          description: (_specMeta$response = specMeta.response) !== null && _specMeta$response !== void 0 && _specMeta$response.url ? `${(_specMeta$response2 = specMeta.response) === null || _specMeta$response2 === void 0 ? void 0 : _specMeta$response2.url} ┃ ${(_specMeta$response3 = specMeta.response) === null || _specMeta$response3 === void 0 ? void 0 : _specMeta$response3.status}  ${(_specMeta$response4 = specMeta.response) === null || _specMeta$response4 === void 0 ? void 0 : _specMeta$response4.statusText}` : 'Unable to load the Spec',
          version: ' '
        },
        tags: []
      };
    }
  } catch (err) {
    console.info('RapiDoc: %c There was an issue while parsing the spec %o ', 'color:orangered', err); // eslint-disable-line no-console
  } // const pathGroups = groupByPaths(jsonParsedSpec);
  // Tags with Paths and WebHooks


  const tags = groupByTags(jsonParsedSpec, sortEndpointsBy, generateMissingTags, sortTags); // Components

  const components = getComponents(jsonParsedSpec); // Info Description Headers

  const infoDescriptionHeaders = (_jsonParsedSpec$info = jsonParsedSpec.info) !== null && _jsonParsedSpec$info !== void 0 && _jsonParsedSpec$info.description ? getHeadersFromMarkdown(jsonParsedSpec.info.description) : []; // Security Scheme

  const securitySchemes = [];

  if ((_jsonParsedSpec$compo = jsonParsedSpec.components) !== null && _jsonParsedSpec$compo !== void 0 && _jsonParsedSpec$compo.securitySchemes) {
    const securitySchemeSet = new Set();
    Object.entries(jsonParsedSpec.components.securitySchemes).forEach(kv => {
      if (!securitySchemeSet.has(kv[0])) {
        securitySchemeSet.add(kv[0]);
        const securityObj = {
          securitySchemeId: kv[0],
          ...kv[1]
        };
        securityObj.value = '';
        securityObj.finalKeyValue = '';

        if (kv[1].type === 'apiKey' || kv[1].type === 'http') {
          securityObj.in = kv[1].in || 'header';
          securityObj.name = kv[1].name || 'Authorization';
          securityObj.user = '';
          securityObj.password = '';
        } else if (kv[1].type === 'oauth2') {
          securityObj.in = 'header';
          securityObj.name = 'Authorization';
          securityObj.clientId = '';
          securityObj.clientSecret = '';
        }

        securitySchemes.push(securityObj);
      }
    });
  }

  if (attrApiKey && attrApiKeyLocation && attrApiKeyValue) {
    securitySchemes.push({
      securitySchemeId: rapidocApiKey,
      description: 'api-key provided in rapidoc element attributes',
      type: 'apiKey',
      oAuthFlow: '',
      name: attrApiKey,
      in: attrApiKeyLocation,
      value: attrApiKeyValue,
      finalKeyValue: attrApiKeyValue
    });
  } // Updated Security Type Display Text based on Type


  securitySchemes.forEach(v => {
    if (v.type === 'http') {
      v.typeDisplay = v.scheme === 'basic' ? 'HTTP Basic' : 'HTTP Bearer';
    } else if (v.type === 'apiKey') {
      v.typeDisplay = `API Key (${v.name})`;
    } else if (v.type === 'oauth2') {
      v.typeDisplay = `OAuth (${v.securitySchemeId})`;
    } else {
      v.typeDisplay = v.type || 'None';
    }
  }); // Servers

  let servers = [];

  if (jsonParsedSpec.servers && Array.isArray(jsonParsedSpec.servers)) {
    jsonParsedSpec.servers.forEach(v => {
      let computedUrl = v.url.trim();

      if (!(computedUrl.startsWith('http') || computedUrl.startsWith('//') || computedUrl.startsWith('{'))) {
        if (window.location.origin.startsWith('http')) {
          v.url = window.location.origin + v.url;
          computedUrl = v.url;
        }
      } // Apply server-variables to generate final computed-url


      if (v.variables) {
        Object.entries(v.variables).forEach(kv => {
          const regex = new RegExp(`{${kv[0]}}`, 'g');
          computedUrl = computedUrl.replace(regex, kv[1].default || '');
          kv[1].value = kv[1].default || '';
        });
      }

      v.computedUrl = computedUrl;
    });

    if (serverUrl) {
      jsonParsedSpec.servers.push({
        url: serverUrl,
        computedUrl: serverUrl
      });
    }
  } else if (serverUrl) {
    jsonParsedSpec.servers = [{
      url: serverUrl,
      computedUrl: serverUrl
    }];
  } else if (window.location.origin.startsWith('http')) {
    jsonParsedSpec.servers = [{
      url: window.location.origin,
      computedUrl: window.location.origin
    }];
  } else {
    jsonParsedSpec.servers = [{
      url: 'http://localhost',
      computedUrl: 'http://localhost'
    }];
  }

  servers = jsonParsedSpec.servers;
  const parsedSpec = {
    specLoadError: false,
    isSpecLoading: false,
    info: jsonParsedSpec.info,
    infoDescriptionHeaders,
    tags,
    components,
    externalDocs: jsonParsedSpec.externalDocs,
    securitySchemes,
    servers
  };
  return parsedSpec;
}

function getHeadersFromMarkdown(markdownContent) {
  const tokens = marked.lexer(markdownContent);
  const headers = tokens.filter(v => v.type === 'heading' && v.depth <= 2);
  return headers || [];
}

function getComponents(openApiSpec) {
  if (!openApiSpec.components) {
    return [];
  }

  const components = [];

  for (const component in openApiSpec.components) {
    const subComponents = [];

    for (const sComponent in openApiSpec.components[component]) {
      const scmp = {
        show: true,
        id: `${component.toLowerCase()}-${sComponent.toLowerCase()}`.replace(invalidCharsRegEx, '-'),
        name: sComponent,
        component: openApiSpec.components[component][sComponent]
      };
      subComponents.push(scmp);
    }

    let cmpDescription = component;
    let cmpName = component;

    switch (component) {
      case 'schemas':
        cmpName = 'Schemas';
        cmpDescription = 'Schemas allows the definition of input and output data types. These types can be objects, but also primitives and arrays.';
        break;

      case 'responses':
        cmpName = 'Responses';
        cmpDescription = 'Describes responses from an API Operation, including design-time, static links to operations based on the response.';
        break;

      case 'parameters':
        cmpName = 'Parameters';
        cmpDescription = 'Describes operation parameters. A unique parameter is defined by a combination of a name and location.';
        break;

      case 'examples':
        cmpName = 'Examples';
        cmpDescription = 'List of Examples for operations, can be requests, responses and objects examples.';
        break;

      case 'requestBodies':
        cmpName = 'Request Bodies';
        cmpDescription = 'Describes common request bodies that are used across the API operations.';
        break;

      case 'headers':
        cmpName = 'Headers';
        cmpDescription = 'Headers follows the structure of the Parameters but they are explicitly in "header"';
        break;

      case 'securitySchemes':
        cmpName = 'Security Schemes'; // eslint-disable-next-line max-len

        cmpDescription = 'Defines a security scheme that can be used by the operations. Supported schemes are HTTP authentication, an API key (either as a header, a cookie parameter or as a query parameter), OAuth2\'s common flows(implicit, password, client credentials and authorization code) as defined in RFC6749, and OpenID Connect Discovery.';
        break;

      case 'links':
        cmpName = 'Links';
        cmpDescription = 'Links represent a possible design-time link for a response. The presence of a link does not guarantee the caller\'s ability to successfully invoke it, rather it provides a known relationship and traversal mechanism between responses and other operations.';
        break;

      case 'callbacks':
        cmpName = 'Callbacks'; // eslint-disable-next-line max-len

        cmpDescription = 'A map of possible out-of band callbacks related to the parent operation. Each value in the map is a Path Item Object that describes a set of requests that may be initiated by the API provider and the expected responses. The key value used to identify the path item object is an expression, evaluated at runtime, that identifies a URL to use for the callback operation.';
        break;

      default:
        cmpName = component;
        cmpDescription = component;
        break;
    }

    const cmp = {
      show: true,
      name: cmpName,
      description: cmpDescription,
      subComponents
    };
    components.push(cmp);
  }

  return components || [];
}

function groupByTags(openApiSpec, sortEndpointsBy, generateMissingTags = false, sortTags = false) {
  const supportedMethods = ['get', 'put', 'post', 'delete', 'patch', 'head', 'options']; // this is also used for ordering endpoints by methods

  const tags = openApiSpec.tags && Array.isArray(openApiSpec.tags) ? openApiSpec.tags.map(v => ({
    show: true,
    elementId: `tag--${v.name.replace(invalidCharsRegEx, '-')}`,
    name: v.name,
    description: v.description || '',
    headers: v.description ? getHeadersFromMarkdown(v.description) : [],
    paths: [],
    expanded: v['x-tag-expanded'] !== false
  })) : [];
  const pathsAndWebhooks = openApiSpec.paths || {};

  if (openApiSpec.webhooks) {
    for (const [key, value] of Object.entries(openApiSpec.webhooks)) {
      value._type = 'webhook'; // eslint-disable-line no-underscore-dangle

      pathsAndWebhooks[key] = value;
    }
  } // For each path find the tag and push it into the corresponding tag


  for (const pathOrHookName in pathsAndWebhooks) {
    const commonParams = pathsAndWebhooks[pathOrHookName].parameters;
    const commonPathProp = {
      servers: pathsAndWebhooks[pathOrHookName].servers || [],
      parameters: pathsAndWebhooks[pathOrHookName].parameters || []
    };
    const isWebhook = pathsAndWebhooks[pathOrHookName]._type === 'webhook'; // eslint-disable-line no-underscore-dangle

    supportedMethods.forEach(methodName => {
      if (pathsAndWebhooks[pathOrHookName][methodName]) {
        const pathOrHookObj = openApiSpec.paths[pathOrHookName][methodName]; // If path.methods are tagged, else generate it from path

        const pathTags = pathOrHookObj.tags || [];

        if (pathTags.length === 0) {
          if (generateMissingTags) {
            const pathOrHookNameKey = pathOrHookName.replace(/^\/+|\/+$/g, '');
            const firstWordEndIndex = pathOrHookNameKey.indexOf('/');

            if (firstWordEndIndex === -1) {
              pathTags.push(pathOrHookNameKey);
            } else {
              // firstWordEndIndex -= 1;
              pathTags.push(pathOrHookNameKey.substr(0, firstWordEndIndex));
            }
          } else {
            pathTags.push('General ⦂');
          }
        }

        pathTags.forEach(tag => {
          let tagObj;
          let specTagsItem;

          if (openApiSpec.tags) {
            specTagsItem = openApiSpec.tags.find(v => v.name.toLowerCase() === tag.toLowerCase());
          }

          tagObj = tags.find(v => v.name === tag);

          if (!tagObj) {
            var _specTagsItem, _specTagsItem2;

            tagObj = {
              show: true,
              elementId: `tag--${tag.replace(invalidCharsRegEx, '-')}`,
              name: tag,
              description: ((_specTagsItem = specTagsItem) === null || _specTagsItem === void 0 ? void 0 : _specTagsItem.description) || '',
              headers: (_specTagsItem2 = specTagsItem) !== null && _specTagsItem2 !== void 0 && _specTagsItem2.description ? getHeadersFromMarkdown(specTagsItem.description) : [],
              paths: [],
              expanded: specTagsItem ? specTagsItem['x-tag-expanded'] !== false : true
            };
            tags.push(tagObj);
          } // Generate a short summary which is broken


          let shortSummary = (pathOrHookObj.summary || pathOrHookObj.description || `${methodName.toUpperCase()} ${pathOrHookName}`).trim();

          if (shortSummary.length > 100) {
            [shortSummary] = shortSummary.split(/[.|!|?]\s|[\r?\n]/); // take the first line (period or carriage return)
          } // Merge Common Parameters with This methods parameters


          let finalParameters = [];

          if (commonParams) {
            if (pathOrHookObj.parameters) {
              finalParameters = commonParams.filter(commonParam => {
                if (!pathOrHookObj.parameters.some(param => commonParam.name === param.name && commonParam.in === param.in)) {
                  return commonParam;
                }
              }).concat(pathOrHookObj.parameters);
            } else {
              finalParameters = commonParams.slice(0);
            }
          } else {
            finalParameters = pathOrHookObj.parameters ? pathOrHookObj.parameters.slice(0) : [];
          } // Filter callbacks to contain only objects.


          if (pathOrHookObj.callbacks) {
            for (const [callbackName, callbackConfig] of Object.entries(pathOrHookObj.callbacks)) {
              const filteredCallbacks = Object.entries(callbackConfig).filter(entry => typeof entry[1] === 'object') || [];
              pathOrHookObj.callbacks[callbackName] = Object.fromEntries(filteredCallbacks);
            }
          } // Update Responses


          tagObj.paths.push({
            show: true,
            expanded: false,
            isWebhook,
            expandedAtLeastOnce: false,
            summary: pathOrHookObj.summary || '',
            description: pathOrHookObj.description || '',
            shortSummary,
            method: methodName,
            path: pathOrHookName,
            operationId: pathOrHookObj.operationId,
            elementId: `${methodName}-${pathOrHookName.replace(invalidCharsRegEx, '-')}`,
            servers: pathOrHookObj.servers ? commonPathProp.servers.concat(pathOrHookObj.servers) : commonPathProp.servers,
            parameters: finalParameters,
            requestBody: pathOrHookObj.requestBody,
            responses: pathOrHookObj.responses,
            callbacks: pathOrHookObj.callbacks,
            deprecated: pathOrHookObj.deprecated,
            security: pathOrHookObj.security,
            // commonSummary: commonPathProp.summary,
            // commonDescription: commonPathProp.description,
            xBadges: pathOrHookObj['x-badges'] || undefined,
            xCodeSamples: pathOrHookObj['x-codeSamples'] || pathOrHookObj['x-code-samples'] || ''
          });
        }); // End of tag path create
      }
    }); // End of Methods
  }

  const tagsWithSortedPaths = tags.filter(tag => tag.paths && tag.paths.length > 0);
  tagsWithSortedPaths.forEach(tag => {
    if (sortEndpointsBy === 'method') {
      tag.paths.sort((a, b) => supportedMethods.indexOf(a.method).toString().localeCompare(supportedMethods.indexOf(b.method)));
    } else if (sortEndpointsBy === 'summary') {
      tag.paths.sort((a, b) => a.shortSummary.localeCompare(b.shortSummary));
    } else if (sortEndpointsBy === 'path') {
      tag.paths.sort((a, b) => a.path.localeCompare(b.path));
    } else if (sortEndpointsBy === 'none') {// don't sort if sortEndpointsBy is 'none'
    }

    tag.firstPathId = tag.paths[0].elementId;
  });
  return sortTags ? tagsWithSortedPaths.sort((a, b) => a.name.localeCompare(b.name)) : tagsWithSortedPaths;
}
;// CONCATENATED MODULE: ./node_modules/lit-html/directive.js
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const directive_t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},directive_e=t=>(...e)=>({_$litDirective$:t,values:e});class directive_i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}
//# sourceMappingURL=directive.js.map

;// CONCATENATED MODULE: ./node_modules/lit-html/directives/unsafe-html.js

/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class unsafe_html_e extends directive_i{constructor(i){if(super(i),this.it=b,i.type!==directive_t.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(r){if(r===b||null==r)return this._t=void 0,this.it=r;if(r===x)return r;if("string"!=typeof r)throw Error(this.constructor.directiveName+"() called with a non-string value");if(r===this.it)return this._t;this.it=r;const s=[r];return s.raw=s,this._t={_$litType$:this.constructor.resultType,strings:s,values:[]}}}unsafe_html_e.directiveName="unsafeHTML",unsafe_html_e.resultType=1;const unsafe_html_o=directive_e(unsafe_html_e);
//# sourceMappingURL=unsafe-html.js.map

;// CONCATENATED MODULE: ./node_modules/lit/directives/unsafe-html.js

//# sourceMappingURL=unsafe-html.js.map

;// CONCATENATED MODULE: ./src/templates/security-scheme-template.js
/* eslint-disable arrow-body-style */

 // eslint-disable-line import/extensions


const codeVerifier = '731DB1C3F7EA533B85E29492D26AA-1234567890-1234567890';
const codeChallenge = '4FatVDBJKPAo4JgLLaaQFMUcQPn5CrPRvLlaob9PTYc'; // Base64 encoded SHA-256

const localStorageKey = 'rapidoc';
function applyApiKey(securitySchemeId, username = '', password = '', providedApikeyVal = '') {
  var _this$resolvedSpec$se, _securityObj$scheme;

  const securityObj = (_this$resolvedSpec$se = this.resolvedSpec.securitySchemes) === null || _this$resolvedSpec$se === void 0 ? void 0 : _this$resolvedSpec$se.find(v => v.securitySchemeId === securitySchemeId);

  if (!securityObj) {
    return false;
  }

  let finalApiKeyValue = '';

  if (((_securityObj$scheme = securityObj.scheme) === null || _securityObj$scheme === void 0 ? void 0 : _securityObj$scheme.toLowerCase()) === 'basic') {
    if (username) {
      finalApiKeyValue = `Basic ${btoa(`${username}:${password}`)}`;
    }
  } else if (providedApikeyVal) {
    var _securityObj$scheme2;

    securityObj.value = providedApikeyVal;
    finalApiKeyValue = `${((_securityObj$scheme2 = securityObj.scheme) === null || _securityObj$scheme2 === void 0 ? void 0 : _securityObj$scheme2.toLowerCase()) === 'bearer' ? 'Bearer ' : ''}${providedApikeyVal}`;
  }

  if (finalApiKeyValue) {
    securityObj.finalKeyValue = finalApiKeyValue;
    this.requestUpdate();
    return true;
  }

  return false;
}
function onClearAllApiKeys() {
  var _this$resolvedSpec$se2;

  (_this$resolvedSpec$se2 = this.resolvedSpec.securitySchemes) === null || _this$resolvedSpec$se2 === void 0 ? void 0 : _this$resolvedSpec$se2.forEach(v => {
    v.user = '';
    v.password = '';
    v.value = '';
    v.finalKeyValue = '';
  });
  this.requestUpdate();
}

function getPersistedApiKeys() {
  return JSON.parse(localStorage.getItem(localStorageKey)) || {};
}

function setPersistedApiKeys(obj) {
  localStorage.setItem(localStorageKey, JSON.stringify(obj));
}

function recoverPersistedApiKeys() {
  const rapidocLs = getPersistedApiKeys.call(this);
  Object.values(rapidocLs).forEach(p => {
    applyApiKey.call(this, p.securitySchemeId, p.username, p.password, p.value);
  });
}

function onApiKeyChange(securitySchemeId) {
  let apiKeyValue = '';
  const securityObj = this.resolvedSpec.securitySchemes.find(v => v.securitySchemeId === securitySchemeId);

  if (securityObj) {
    const trEl = this.shadowRoot.getElementById(`security-scheme-${securitySchemeId}`);

    if (trEl) {
      if (securityObj.type && securityObj.scheme && securityObj.type === 'http' && securityObj.scheme.toLowerCase() === 'basic') {
        const userVal = trEl.querySelector('.api-key-user').value.trim();
        const passwordVal = trEl.querySelector('.api-key-password').value.trim();
        applyApiKey.call(this, securitySchemeId, userVal, passwordVal);
      } else {
        apiKeyValue = trEl.querySelector('.api-key-input').value.trim();
        applyApiKey.call(this, securitySchemeId, '', '', apiKeyValue);
      }

      if (this.persistAuth === 'true') {
        const rapidocLs = getPersistedApiKeys.call(this);
        rapidocLs[securitySchemeId] = securityObj;
        setPersistedApiKeys.call(this, rapidocLs);
      }
    }
  }
} // Updates the OAuth Access Token (API key), so it reflects in UI and gets used in TRY calls


function updateOAuthKey(securitySchemeId, accessToken, tokenType = 'Bearer') {
  const securityObj = this.resolvedSpec.securitySchemes.find(v => v.securitySchemeId === securitySchemeId);
  securityObj.finalKeyValue = `${tokenType.toLowerCase() === 'bearer' ? 'Bearer' : tokenType.toLowerCase() === 'mac' ? 'MAC' : tokenType} ${accessToken}`;
  this.requestUpdate();
}
/* eslint-disable no-console */
// Gets Access-Token in exchange of Authorization Code


async function fetchAccessToken(tokenUrl, clientId, clientSecret, redirectUrl, grantType, authCode, securitySchemeId, authFlowDivEl, sendClientSecretIn = 'header', scopes = null, username = null, password = null) {
  const respDisplayEl = authFlowDivEl ? authFlowDivEl.querySelector('.oauth-resp-display') : undefined;
  const urlFormParams = new URLSearchParams();
  const headers = new Headers();
  urlFormParams.append('grant_type', grantType);

  if (grantType !== 'client_credentials' && grantType !== 'password') {
    urlFormParams.append('redirect_uri', redirectUrl);
  }

  if (authCode) {
    urlFormParams.append('code', authCode);
    urlFormParams.append('code_verifier', codeVerifier); // for PKCE
  }

  if (sendClientSecretIn === 'header') {
    headers.set('Authorization', `Basic ${btoa(`${clientId}:${clientSecret}`)}`);
  } else {
    urlFormParams.append('client_id', clientId);
    urlFormParams.append('client_secret', clientSecret);
  }

  if (grantType === 'password') {
    urlFormParams.append('username', username);
    urlFormParams.append('password', password);
  }

  if (scopes) {
    urlFormParams.append('scope', scopes);
  }

  try {
    const resp = await fetch(tokenUrl, {
      method: 'POST',
      headers,
      body: urlFormParams
    });
    const tokenResp = await resp.json();

    if (resp.ok) {
      if (tokenResp.token_type && tokenResp.access_token) {
        updateOAuthKey.call(this, securitySchemeId, tokenResp.access_token, tokenResp.token_type);

        if (respDisplayEl) {
          respDisplayEl.innerHTML = '<span style="color:var(--green)">Access Token Received</span>';
        }

        return true;
      }
    } else {
      if (respDisplayEl) {
        respDisplayEl.innerHTML = `<span style="color:var(--red)">${tokenResp.error_description || tokenResp.error_description || 'Unable to get access token'}</span>`;
      }

      return false;
    }
  } catch (err) {
    if (respDisplayEl) {
      respDisplayEl.innerHTML = '<span style="color:var(--red)">Failed to get access token</span>';
    }

    return false;
  }
} // Gets invoked when it receives the Authorization Code from the other window via message-event


async function onWindowMessageEvent(msgEvent, winObj, tokenUrl, clientId, clientSecret, redirectUrl, grantType, sendClientSecretIn, securitySchemeId, authFlowDivEl) {
  sessionStorage.removeItem('winMessageEventActive');
  winObj.close();

  if (msgEvent.data.fake) {
    return;
  }

  if (!msgEvent.data) {
    console.warn('RapiDoc: Received no data with authorization message');
  }

  if (msgEvent.data.error) {
    console.warn('RapiDoc: Error while receiving data');
  }

  if (msgEvent.data) {
    if (msgEvent.data.responseType === 'code') {
      // Authorization Code flow
      fetchAccessToken.call(this, tokenUrl, clientId, clientSecret, redirectUrl, grantType, msgEvent.data.code, securitySchemeId, authFlowDivEl, sendClientSecretIn);
    } else if (msgEvent.data.responseType === 'token') {
      // Implicit flow
      updateOAuthKey.call(this, securitySchemeId, msgEvent.data.access_token, msgEvent.data.token_type);
    }
  }
} // code_challenge generator for PKCE flow
// TODO: Implement dynamic generation of code-challenge based on code-verifier

/*
async function generateCodeChallenge() {
  const encoder = new TextEncoder();
  const data = encoder.encode(codeVerifier);
  const sha256Hash = await window.crypto.subtle.digest('SHA-256', data); // returns Unit8Array
  // const utf8Decoder = new TextDecoder();
  // const b64EncodedSha256 = btoa(utf8Decoder.decode(sha256Hash));
  const b64EncodedSha256 = base64encode(sha256Hash);
  return b64EncodedSha256;
}
*/


async function onInvokeOAuthFlow(securitySchemeId, flowType, authUrl, tokenUrl, e) {
  const authFlowDivEl = e.target.closest('.oauth-flow');
  const clientId = authFlowDivEl.querySelector('.oauth-client-id') ? authFlowDivEl.querySelector('.oauth-client-id').value.trim() : '';
  const clientSecret = authFlowDivEl.querySelector('.oauth-client-secret') ? authFlowDivEl.querySelector('.oauth-client-secret').value.trim() : '';
  const username = authFlowDivEl.querySelector('.api-key-user') ? authFlowDivEl.querySelector('.api-key-user').value.trim() : '';
  const password = authFlowDivEl.querySelector('.api-key-password') ? authFlowDivEl.querySelector('.api-key-password').value.trim() : '';
  const sendClientSecretIn = authFlowDivEl.querySelector('.oauth-send-client-secret-in') ? authFlowDivEl.querySelector('.oauth-send-client-secret-in').value.trim() : 'header';
  const checkedScopeEls = [...authFlowDivEl.querySelectorAll('.scope-checkbox:checked')];
  const pkceCheckboxEl = authFlowDivEl.querySelector(`#${securitySchemeId}-pkce`);
  const state = `${Math.random().toString(36)}random`.slice(2, 9);
  const nonce = `${Math.random().toString(36)}random`.slice(2, 9); // const codeChallenge = await generateCodeChallenge(codeVerifier);

  const redirectUrlObj = new URL(`${window.location.origin}${window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/'))}/${this.oauthReceiver}`);
  let grantType = '';
  let responseType = '';
  let newWindow; // clear previous error messages

  const errEls = [...authFlowDivEl.parentNode.querySelectorAll('.oauth-resp-display')];
  errEls.forEach(v => {
    v.innerHTML = '';
  });

  if (flowType === 'authorizationCode' || flowType === 'implicit') {
    const authUrlObj = new URL(authUrl);

    if (flowType === 'authorizationCode') {
      grantType = 'authorization_code';
      responseType = 'code';
    } else if (flowType === 'implicit') {
      responseType = 'token';
    }

    const authCodeParams = new URLSearchParams(authUrlObj.search);
    const selectedScopes = checkedScopeEls.map(v => v.value).join(' ');

    if (selectedScopes) {
      authCodeParams.set('scope', selectedScopes);
    }

    authCodeParams.set('client_id', clientId);
    authCodeParams.set('redirect_uri', redirectUrlObj.toString());
    authCodeParams.set('response_type', responseType);
    authCodeParams.set('state', state);
    authCodeParams.set('nonce', nonce);

    if (pkceCheckboxEl && pkceCheckboxEl.checked) {
      authCodeParams.set('code_challenge', codeChallenge);
      authCodeParams.set('code_challenge_method', 'S256');
    }

    authCodeParams.set('show_dialog', true);
    authUrlObj.search = authCodeParams.toString(); // If any older message-event-listener is active then fire a fake message to remove it (these are single time listeners)

    if (sessionStorage.getItem('winMessageEventActive') === 'true') {
      window.postMessage({
        fake: true
      }, this);
    }

    setTimeout(() => {
      newWindow = window.open(authUrlObj.toString());

      if (!newWindow) {
        console.error(`RapiDoc: Unable to open ${authUrlObj.toString()} in a new window`);
      } else {
        sessionStorage.setItem('winMessageEventActive', 'true');
        window.addEventListener('message', msgEvent => onWindowMessageEvent.call(this, msgEvent, newWindow, tokenUrl, clientId, clientSecret, redirectUrlObj.toString(), grantType, sendClientSecretIn, securitySchemeId, authFlowDivEl), {
          once: true
        });
      }
    }, 10);
  } else if (flowType === 'clientCredentials') {
    grantType = 'client_credentials';
    const selectedScopes = checkedScopeEls.map(v => v.value).join(' ');
    fetchAccessToken.call(this, tokenUrl, clientId, clientSecret, redirectUrlObj.toString(), grantType, '', securitySchemeId, authFlowDivEl, sendClientSecretIn, selectedScopes);
  } else if (flowType === 'password') {
    grantType = 'password';
    const selectedScopes = checkedScopeEls.map(v => v.value).join(' ');
    fetchAccessToken.call(this, tokenUrl, clientId, clientSecret, redirectUrlObj.toString(), grantType, '', securitySchemeId, authFlowDivEl, sendClientSecretIn, selectedScopes, username, password);
  }
}
/* eslint-enable no-console */

/* eslint-disable indent */


function oAuthFlowTemplate(flowName, clientId, clientSecret, securitySchemeId, authFlow, defaultScopes = [], receiveTokenIn = 'header') {
  let {
    authorizationUrl,
    tokenUrl,
    refreshUrl
  } = authFlow;

  const isUrlAbsolute = url => url.indexOf('://') > 0 || url.indexOf('//') === 0;

  if (refreshUrl && !isUrlAbsolute(refreshUrl)) {
    refreshUrl = `${this.selectedServer.computedUrl}/${refreshUrl.replace(/^\//, '')}`;
  }

  if (tokenUrl && !isUrlAbsolute(tokenUrl)) {
    tokenUrl = `${this.selectedServer.computedUrl}/${tokenUrl.replace(/^\//, '')}`;
  }

  if (authorizationUrl && !isUrlAbsolute(authorizationUrl)) {
    authorizationUrl = `${this.selectedServer.computedUrl}/${authorizationUrl.replace(/^\//, '')}`;
  }

  let flowNameDisplay;

  if (flowName === 'authorizationCode') {
    flowNameDisplay = 'Authorization Code Flow';
  } else if (flowName === 'clientCredentials') {
    flowNameDisplay = 'Client Credentials Flow';
  } else if (flowName === 'implicit') {
    flowNameDisplay = 'Implicit Flow';
  } else if (flowName === 'password') {
    flowNameDisplay = 'Password Flow';
  } else {
    flowNameDisplay = flowName;
  }

  return y`
    <div class="oauth-flow ${flowName}" style="padding: 12px 0; margin-bottom:12px;">
      <div class="tiny-title upper" style="margin-bottom:8px;">${flowNameDisplay}</div>
      ${authorizationUrl ? y`<div style="margin-bottom:5px"><span style="width:75px; display: inline-block;">Auth URL</span> <span class="mono-font"> ${authorizationUrl} </span></div>` : ''}
      ${tokenUrl ? y`<div style="margin-bottom:5px"><span style="width:75px; display: inline-block;">Token URL</span> <span class="mono-font">${tokenUrl}</span></div>` : ''}
      ${refreshUrl ? y`<div style="margin-bottom:5px"><span style="width:75px; display: inline-block;">Refresh URL</span> <span class="mono-font">${refreshUrl}</span></div>` : ''}
      ${flowName === 'authorizationCode' || flowName === 'clientCredentials' || flowName === 'implicit' || flowName === 'password' ? y`
          ${authFlow.scopes ? y`
              <span> Scopes </span>
              <div class= "oauth-scopes" part="section-auth-scopes" style = "width:100%; display:flex; flex-direction:column; flex-wrap:wrap; margin:0 0 10px 24px">
                ${Object.entries(authFlow.scopes).map((scopeAndDescr, index) => y`
                  <div class="m-checkbox" style="display:inline-flex; align-items:center">
                    <input type="checkbox" part="checkbox checkbox-auth-scope" class="scope-checkbox" id="${securitySchemeId}${flowName}${index}" ?checked="${defaultScopes.includes(scopeAndDescr[0])}" value="${scopeAndDescr[0]}">
                    <label for="${securitySchemeId}${flowName}${index}" style="margin-left:5px; cursor:pointer">
                      <span class="mono-font">${scopeAndDescr[0]}</span>
                        ${scopeAndDescr[0] !== scopeAndDescr[1] ? ` - ${scopeAndDescr[1] || ''}` : ''}
                    </label>
                  </div>
                `)}
              </div>
            ` : ''}
          ${flowName === 'password' ? y`
              <div style="margin:5px 0">
                <input type="text" value = "" placeholder="username" spellcheck="false" class="oauth2 ${flowName} ${securitySchemeId} api-key-user" part="textbox textbox-username">
                <input type="password" value = "" placeholder="password" spellcheck="false" class="oauth2 ${flowName} ${securitySchemeId} api-key-password" style = "margin:0 5px;" part="textbox textbox-password">
              </div>` : ''}
          <div>
            ${flowName === 'authorizationCode' ? y`
                <div style="margin: 16px 0 4px">
                  <input type="checkbox" part="checkbox checkbox-auth-scope" id="${securitySchemeId}-pkce" checked>
                  <label for="${securitySchemeId}-pkce" style="margin:0 16px 0 4px; line-height:24px; cursor:pointer">
                   Send Proof Key for Code Exchange (PKCE)
                  </label>
                </div>
              ` : ''}
            <input type="text" part="textbox textbox-auth-client-id" value = "${clientId || ''}" placeholder="client-id" spellcheck="false" class="oauth2 ${flowName} ${securitySchemeId} oauth-client-id">
            ${flowName === 'authorizationCode' || flowName === 'clientCredentials' || flowName === 'password' ? y`
                <input type="password" part="textbox textbox-auth-client-secret" value = "${clientSecret || ''}" placeholder="client-secret" spellcheck="false" class="oauth2 ${flowName} ${securitySchemeId} oauth-client-secret" style = "margin:0 5px;">
                ${flowName === 'authorizationCode' || flowName === 'clientCredentials' || flowName === 'password' ? y`
                    <select style="margin-right:5px;" class="${flowName} ${securitySchemeId} oauth-send-client-secret-in">
                      <option value = 'header' .selected = ${receiveTokenIn === 'header'} > Authorization Header </option>
                      <option value = 'request-body' .selected = ${receiveTokenIn === 'request-body'}> Request Body </option>
                    </select>` : ''}` : ''}
            ${flowName === 'authorizationCode' || flowName === 'clientCredentials' || flowName === 'implicit' || flowName === 'password' ? y`
                <button class="m-btn thin-border" part="btn btn-outline"
                  @click="${e => {
    onInvokeOAuthFlow.call(this, securitySchemeId, flowName, authorizationUrl, tokenUrl, e);
  }}"
                > GET TOKEN </button>` : ''}
          </div>
          <div class="oauth-resp-display red-text small-font-size"></div>
          ` : ''}
    </div>
  `;
}

function removeApiKey(securitySchemeId) {
  var _this$resolvedSpec$se3;

  const securityObj = (_this$resolvedSpec$se3 = this.resolvedSpec.securitySchemes) === null || _this$resolvedSpec$se3 === void 0 ? void 0 : _this$resolvedSpec$se3.find(v => v.securitySchemeId === securitySchemeId);
  securityObj.user = '';
  securityObj.password = '';
  securityObj.value = '';
  securityObj.finalKeyValue = '';

  if (this.persistAuth === 'true') {
    const rapidocLs = getPersistedApiKeys.call(this);
    delete rapidocLs[securityObj.securitySchemeId];
    setPersistedApiKeys.call(this, rapidocLs);
  }

  this.requestUpdate();
}

function securitySchemeTemplate() {
  var _this$resolvedSpec$se4;

  if (!this.resolvedSpec) {
    return '';
  }

  const providedApiKeys = (_this$resolvedSpec$se4 = this.resolvedSpec.securitySchemes) === null || _this$resolvedSpec$se4 === void 0 ? void 0 : _this$resolvedSpec$se4.filter(v => v.finalKeyValue);

  if (!providedApiKeys) {
    return;
  }

  return y`
  <section id='auth' part="section-auth" style="text-align:left; direction:ltr; margin-top:24px; margin-bottom:24px;" class = 'observe-me ${'read focused'.includes(this.renderStyle) ? 'section-gap--read-mode' : 'section-gap '}'>
    <div class='sub-title regular-font'> AUTHENTICATION </div>

    <div class="small-font-size" style="display:flex; align-items: center; min-height:30px">
      ${providedApiKeys.length > 0 ? y`
          <div class="blue-text"> ${providedApiKeys.length} API key applied </div>
          <div style="flex:1"></div>
          <button class="m-btn thin-border" part="btn btn-outline" @click=${() => {
    onClearAllApiKeys.call(this);
  }}>CLEAR ALL API KEYS</button>` : y`<div class="red-text">No API key applied</div>`}
    </div>
    ${this.resolvedSpec.securitySchemes && this.resolvedSpec.securitySchemes.length > 0 ? y`
        <table role="presentation" id="auth-table" class='m-table padded-12' style="width:100%;">
          ${this.resolvedSpec.securitySchemes.map(v => y`
            <tr id="security-scheme-${v.securitySchemeId}" class="${v.type.toLowerCase()}">
              <td style="max-width:500px; overflow-wrap: break-word;">
                <div style="line-height:28px; margin-bottom:5px;">
                  <span style="font-weight:bold; font-size:var(--font-size-regular)">${v.typeDisplay}</span>
                  ${v.finalKeyValue ? y`
                      <span class='blue-text'>  ${v.finalKeyValue ? 'Key Applied' : ''} </span>
                      <button class="m-btn thin-border small" part="btn btn-outline" @click=${() => {
    removeApiKey.call(this, v.securitySchemeId);
  }}>REMOVE</button>
                      ` : ''}
                </div>
                ${v.description ? y`
                    <div class="m-markdown">
                      ${unsafe_html_o(marked(v.description || ''))}
                    </div>` : ''}

                ${v.type.toLowerCase() === 'apikey' || v.type.toLowerCase() === 'http' && v.scheme.toLowerCase() === 'bearer' ? y`
                    <div style="margin-bottom:5px">
                      ${v.type.toLowerCase() === 'apikey' ? y`Send <code>${v.name}</code> in <code>${v.in}</code>` : y`Send <code>Authorization</code> in <code>header</code> containing the word <code>Bearer</code> followed by a space and a Token String.`}
                    </div>
                    <div style="max-height:28px;">
                      ${v.in !== 'cookie' ? y`
                          <input type = "text" value = "${v.value}" class="${v.type} ${v.securitySchemeId} api-key-input" placeholder = "api-token" spellcheck = "false">
                          <button class="m-btn thin-border" style = "margin-left:5px;"
                            part = "btn btn-outline"
                            @click="${e => {
    onApiKeyChange.call(this, v.securitySchemeId, e);
  }}">
                            ${v.finalKeyValue ? 'UPDATE' : 'SET'}
                          </button>` : y`<span class="gray-text" style="font-size::var(--font-size-small)"> cookies cannot be set from here</span>`}
                    </div>` : ''}
                ${v.type.toLowerCase() === 'http' && v.scheme.toLowerCase() === 'basic' ? y`
                    <div style="margin-bottom:5px">
                      Send <code>Authorization</code> in <code>header</code> containing the word <code>Basic</code> followed by a space and a base64 encoded string of <code>username:password</code>.
                    </div>
                    <div>
                      <input type="text" value = "${v.user}" placeholder="username" spellcheck="false" class="${v.type} ${v.securitySchemeId} api-key-user" style="width:100px">
                      <input type="password" value = "${v.password}" placeholder="password" spellcheck="false" class="${v.type} ${v.securitySchemeId} api-key-password" style = "width:100px; margin:0 5px;">
                      <button class="m-btn thin-border"
                        @click="${e => {
    onApiKeyChange.call(this, v.securitySchemeId, e);
  }}"
                        part = "btn btn-outline"
                      >
                        ${v.finalKeyValue ? 'UPDATE' : 'SET'}
                      </button>
                    </div>` : ''}
              </td>
            </tr>
            ${v.type.toLowerCase() === 'oauth2' ? y`
                <tr>
                  <td style="border:none; padding-left:48px">
                    ${Object.keys(v.flows).map(f => oAuthFlowTemplate.call(this, f, v['x-client-id'], v['x-client-secret'], v.securitySchemeId, v.flows[f], v['x-default-scopes'], v['x-receive-token-in']))}
                  </td>
                </tr>
                ` : ''}
          `)}
        </table>` : ''}
    <slot name="auth"></slot>
  </section>
`;
}
function pathSecurityTemplate(pathSecurity) {
  if (this.resolvedSpec.securitySchemes && pathSecurity) {
    const orSecurityKeys1 = [];
    pathSecurity.forEach(pSecurity => {
      const andSecurityKeys1 = [];
      const andKeyTypes = [];

      if (Object.keys(pSecurity).length === 0) {
        orSecurityKeys1.push({
          securityTypes: 'None',
          securityDefs: []
        });
      } else {
        Object.keys(pSecurity).forEach(pathSecurityKey => {
          let pathScopes = '';
          const s = this.resolvedSpec.securitySchemes.find(ss => ss.securitySchemeId === pathSecurityKey);

          if (pSecurity[pathSecurityKey] && Array.isArray(pSecurity[pathSecurityKey])) {
            pathScopes = pSecurity[pathSecurityKey].join(', ');
          }

          if (s) {
            andKeyTypes.push(s.typeDisplay);
            andSecurityKeys1.push({ ...s,
              ...{
                scopes: pathScopes
              }
            });
          }
        });
        orSecurityKeys1.push({
          securityTypes: andKeyTypes.length > 1 ? `${andKeyTypes[0]} + ${andKeyTypes.length - 1} more` : andKeyTypes[0],
          securityDefs: andSecurityKeys1
        });
      }
    });
    return y`<div style="position:absolute; top:3px; right:2px; font-size:var(--font-size-small); line-height: 1.5;">
      <div style="position:relative; display:flex; min-width:350px; max-width:700px; justify-content: flex-end;">
        <svg width="16" height="24">
          <g>
            <path style="fill: var(--fg3)" d="m13.8,8.5l0,-2.6l0,0c0,-3.2 -2.6,-5.8 -5.8,-5.8s-5.8,2.6 -5.8,5.8l0,0l0,2.6l-2.1,0l0,11.2l16,0l0,-11.2l-2.1,0l-0,0l0,0l0,0l-0,0zm-9.8,-2.6c0,0 0,0 0,0c0,-2.2 1.8,-4 4,-4c2.2,0 4,1.8 4,4c0,0 0,0 0,0l0,2.6l-8.03,0l0,-2.6l0,0l0,0z" />
          </g>
        </svg>
          ${orSecurityKeys1.map((orSecurityItem1, i) => y`

          ${orSecurityItem1.securityTypes ? y`
              ${i !== 0 ? y`<div style="padding:3px 4px;"> OR </div>` : ''}
              <div class="tooltip">
                <div style = "padding:2px 4px; white-space:nowrap; text-overflow:ellipsis;max-width:150px; overflow:hidden;">
                  ${this.updateRoute === 'true' && this.allowAuthentication === 'true' ? y`<a part="anchor anchor-operation-security" href="#auth"> ${orSecurityItem1.securityTypes} </a>` : y`${orSecurityItem1.securityTypes}`}
                </div>
                <div class="tooltip-text" style="position:absolute; color: var(--fg); top:26px; right:0; border:1px solid var(--border-color);padding:2px 4px; display:block;">
                  ${orSecurityItem1.securityDefs.length > 1 ? y`<div>Requires <b>all</b> of the following </div>` : ''}
                  <div style="padding-left: 8px">
                    ${orSecurityItem1.securityDefs.map((andSecurityItem, j) => {
      const scopeHtml = y`${andSecurityItem.scopes !== '' ? y`
                          <div>
                            <b>Required scopes:</b>
                            <br/>
                            <div style="margin-left:8px">
                              ${andSecurityItem.scopes.split(',').map((scope, cnt) => y`${cnt === 0 ? '' : '┃'}<span>${scope}</span>`)}
                            </div>
                          </div>` : ''}`;
      return y`
                      ${andSecurityItem.type === 'oauth2' ? y`
                          <div>
                            ${orSecurityItem1.securityDefs.length > 1 ? y`<b>${j + 1}.</b> &nbsp;` : 'Needs'}
                            OAuth Token <span style="font-family:var(--font-mono); color:var(--primary-color);">${andSecurityItem.securitySchemeId}</span> in <b>Authorization header</b>
                            ${scopeHtml}
                          </div>` : andSecurityItem.type === 'http' ? y`
                            <div>
                              ${orSecurityItem1.securityDefs.length > 1 ? y`<b>${j + 1}.</b> &nbsp;` : y`Requires`}
                              ${andSecurityItem.scheme === 'basic' ? 'Base 64 encoded username:password' : 'Bearer Token'} in <b>Authorization header</b>
                              ${scopeHtml}
                            </div>` : y`
                            <div>
                              ${orSecurityItem1.securityDefs.length > 1 ? y`<b>${j + 1}.</b> &nbsp;` : y`Requires`}
                              Token in <b>${andSecurityItem.name} ${andSecurityItem.in}</b>
                              ${scopeHtml}
                            </div>`}`;
    })}
                  </div>
                </div>
              </div>
            ` : ''}
        `)}
      </div>
    `;
  }

  return '';
}
/* eslint-enable indent */
;// CONCATENATED MODULE: ./src/templates/code-samples-template.js

 // eslint-disable-line import/extensions



/* eslint-disable indent */

function codeSamplesTemplate(xCodeSamples) {
  return y`
  <section class="table-title" style="margin-top:24px;">CODE SAMPLES</div>
  <div class="tab-panel col"
    @click="${e => {
    if (!e.target.classList.contains('tab-btn')) {
      return;
    }

    const clickedTab = e.target.dataset.tab;
    const tabButtons = [...e.currentTarget.querySelectorAll('.tab-btn')];
    const tabContents = [...e.currentTarget.querySelectorAll('.tab-content')];
    tabButtons.forEach(tabBtnEl => tabBtnEl.classList[tabBtnEl.dataset.tab === clickedTab ? 'add' : 'remove']('active'));
    tabContents.forEach(tabBodyEl => {
      tabBodyEl.style.display = tabBodyEl.dataset.tab === clickedTab ? 'block' : 'none';
    });
  }}">
    <div class="tab-buttons row" style="width:100; overflow">
      ${xCodeSamples.map((v, i) => y`<button class="tab-btn ${i === 0 ? 'active' : ''}" data-tab = '${v.lang}${i}'> ${v.label || v.lang} </button>`)}
    </div>
    ${xCodeSamples.map((v, i) => {
    var _v$lang, _v$lang2, _v$lang3;

    return y`
      <div class="tab-content m-markdown" style= "display:${i === 0 ? 'block' : 'none'}" data-tab = '${v.lang}${i}'>
        <button class="toolbar-btn" style = "position:absolute; top:12px; right:8px" @click='${e => {
      copyToClipboard(v.source, e);
    }}'> Copy </button>
        <pre><code class="language">${(prism_default()).languages[(_v$lang = v.lang) === null || _v$lang === void 0 ? void 0 : _v$lang.toLowerCase()] ? unsafe_html_o(prism_default().highlight(v.source, (prism_default()).languages[(_v$lang2 = v.lang) === null || _v$lang2 === void 0 ? void 0 : _v$lang2.toLowerCase()], (_v$lang3 = v.lang) === null || _v$lang3 === void 0 ? void 0 : _v$lang3.toLowerCase())) : v.source}</code></pre>
      </div>`;
  })}
  </div>  
  </section>`;
}
/* eslint-enable indent */
;// CONCATENATED MODULE: ./src/templates/callback-template.js

/* eslint-disable indent */

function callbackTemplate(callbacks) {
  return y`
    <div class="req-res-title" style="margin-top:12px">CALLBACKS</div>
    ${Object.entries(callbacks).map(kv => y`
      <div class="tiny-title" style="padding: 12px; border:1px solid var(--light-border-color)"> 
        ${kv[0]}
        ${Object.entries(kv[1]).map(pathObj => y`
          <div class="mono-font small-font-size" style="display:flex; margin-left:16px;">
            <div style="width:100%"> 
              ${Object.entries(pathObj[1]).map(method => {
    var _method$, _method$2, _method$3;

    return y`
                <div>
                  <div style="margin-top:12px;">
                    <div class="method method-fg ${method[0]}" style="width:70px; border:none; margin:0; padding:0; line-height:20px; vertical-align: baseline;text-align:left"> 
                      <span style="font-size:20px;"> &#x2944; </span> 
                      ${method[0]} 
                    </div>
                    <span style="line-height:20px; vertical-align: baseline;">${pathObj[0]} </span>
                  </div>  
                  <div class='expanded-req-resp-container'>
                    <api-request
                      class = "${this.renderStyle}-mode callback"  
                      style = "width:100%;"
                      callback = "true"
                      method = "${method[0] || ''}", 
                      path = "${pathObj[0] || ''}" 
                      .parameters = "${((_method$ = method[1]) === null || _method$ === void 0 ? void 0 : _method$.parameters) || ''}" 
                      .request_body = "${((_method$2 = method[1]) === null || _method$2 === void 0 ? void 0 : _method$2.requestBody) || ''}"
                      fill-request-fields-with-example = "${this.fillRequestFieldsWithExample}"
                      allow-try = "false"
                      render-style="${this.renderStyle}" 
                      schema-style = "${this.schemaStyle}"
                      active-schema-tab = "${this.defaultSchemaTab}"
                      schema-expand-level = "${this.schemaExpandLevel}"
                      schema-description-expanded = "${this.schemaDescriptionExpanded}"
                      allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
                      schema-hide-read-only = "false"
                      schema-hide-write-only = "${this.schemaHideWriteOnly === 'never' ? 'false' : 'true'}"
                      fetch-credentials = "${this.fetchCredentials}"
                      exportparts = "wrap-request-btn:wrap-request-btn, btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
                        file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
                        anchor:anchor, anchor-param-example:anchor-param-example, schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
                      > </api-request>

                    <api-response
                      style = "width:100%;"
                      class = "${this.renderStyle}-mode"
                      callback = "true"
                      .responses="${(_method$3 = method[1]) === null || _method$3 === void 0 ? void 0 : _method$3.responses}"
                      render-style="${this.renderStyle}"
                      schema-style="${this.schemaStyle}"
                      active-schema-tab = "${this.defaultSchemaTab}"
                      schema-expand-level = "${this.schemaExpandLevel}"
                      schema-description-expanded = "${this.schemaDescriptionExpanded}"
                      allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
                      schema-hide-read-only = "${this.schemaHideReadOnly === 'never' ? 'false' : 'true'}"
                      schema-hide-write-only = "false"
                      exportparts = "btn:btn, btn-response-status:btn-response-status, btn-selected-response-status:btn-selected-response-status, btn-fill:btn-fill, btn-copy:btn-copy,
                      schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
                    > </api-response>
                  </div>
                </div>  
              `;
  })}
            </div>  
          </div>  
        `)}
      </div>  
    `)}
  `;
}
/* eslint-enable indent */
;// CONCATENATED MODULE: ./node_modules/lit-html/directives/guard.js

/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const guard_e={},guard_i=directive_e(class extends directive_i{constructor(){super(...arguments),this.ot=guard_e}render(r,t){return t()}update(t,[s,e]){if(Array.isArray(s)){if(Array.isArray(this.ot)&&this.ot.length===s.length&&s.every(((r,t)=>r===this.ot[t])))return x}else if(this.ot===s)return x;return this.ot=Array.isArray(s)?Array.from(s):s,this.render(s,e)}});
//# sourceMappingURL=guard.js.map

;// CONCATENATED MODULE: ./node_modules/lit/directives/guard.js

//# sourceMappingURL=guard.js.map

;// CONCATENATED MODULE: ./node_modules/lit-html/directive-helpers.js

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{H:directive_helpers_l}=z,directive_helpers_t=o=>null===o||"object"!=typeof o&&"function"!=typeof o,directive_helpers_i={HTML:1,SVG:2},directive_helpers_n=(o,l)=>void 0===l?void 0!==(null==o?void 0:o._$litType$):(null==o?void 0:o._$litType$)===l,directive_helpers_d=o=>void 0!==(null==o?void 0:o._$litDirective$),directive_helpers_v=o=>null==o?void 0:o._$litDirective$,directive_helpers_e=o=>void 0===o.strings,directive_helpers_c=()=>document.createComment(""),directive_helpers_r=(o,t,i)=>{var n;const d=o._$AA.parentNode,v=void 0===t?o._$AB:t._$AA;if(void 0===i){const t=d.insertBefore(directive_helpers_c(),v),n=d.insertBefore(directive_helpers_c(),v);i=new directive_helpers_l(t,n,o,o.options)}else{const l=i._$AB.nextSibling,t=i._$AM,e=t!==o;if(e){let l;null===(n=i._$AQ)||void 0===n||n.call(i,o),i._$AM=o,void 0!==i._$AP&&(l=o._$AU)!==t._$AU&&i._$AP(l)}if(l!==v||e){let o=i._$AA;for(;o!==l;){const l=o.nextSibling;d.insertBefore(o,v),o=l}}}return i},directive_helpers_u=(o,l,t=o)=>(o._$AI(l,t),o),directive_helpers_f={},directive_helpers_s=(o,l=directive_helpers_f)=>o._$AH=l,directive_helpers_m=o=>o._$AH,directive_helpers_p=o=>{var l;null===(l=o._$AP)||void 0===l||l.call(o,!1,!0);let t=o._$AA;const i=o._$AB.nextSibling;for(;t!==i;){const o=t.nextSibling;t.remove(),t=o}},directive_helpers_a=o=>{o._$AR()};
//# sourceMappingURL=directive-helpers.js.map

;// CONCATENATED MODULE: ./node_modules/lit-html/directives/live.js

/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const live_l=directive_e(class extends directive_i{constructor(r){if(super(r),r.type!==directive_t.PROPERTY&&r.type!==directive_t.ATTRIBUTE&&r.type!==directive_t.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!directive_helpers_e(r))throw Error("`live` bindings can only contain a single expression")}render(r){return r}update(i,[t]){if(t===x||t===b)return t;const o=i.element,l=i.name;if(i.type===directive_t.PROPERTY){if(t===o[l])return x}else if(i.type===directive_t.BOOLEAN_ATTRIBUTE){if(!!t===o.hasAttribute(l))return x}else if(i.type===directive_t.ATTRIBUTE&&o.getAttribute(l)===t+"")return x;return directive_helpers_s(i),t}});
//# sourceMappingURL=live.js.map

;// CONCATENATED MODULE: ./node_modules/lit/directives/live.js

//# sourceMappingURL=live.js.map

// EXTERNAL MODULE: ./node_modules/xml-but-prettier/dist/index.js
var dist = __webpack_require__(131);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);
;// CONCATENATED MODULE: ./src/styles/border-styles.js

/* harmony default export */ const border_styles = (i`
.border-top {
  border-top:1px solid var(--border-color);
}
.border{
  border:1px solid var(--border-color);
  border-radius: var(--border-radius);
}
.light-border{
  border:1px solid var(--light-border-color);
  border-radius: var(--border-radius);
}
.pad-8-16{
  padding: 8px 16px;
}
.pad-top-8{
  padding-top: 8px;
}
.mar-top-8{
  margin-top: 8px;
}
`);
;// CONCATENATED MODULE: ./src/utils/schema-utils.js
/* Generates an schema object containing type and constraint info */
function getTypeInfo(schema) {
  if (!schema) {
    return;
  }

  let dataType = '';
  let constrain = ''; // let examples;

  if (schema.$ref) {
    const n = schema.$ref.lastIndexOf('/');
    const schemaNode = schema.$ref.substring(n + 1);
    dataType = `{recursive: ${schemaNode}} `;
  } else if (schema.type) {
    dataType = Array.isArray(schema.type) ? schema.type.join(schema.length === 2 ? ' or ' : '┃') : schema.type;

    if (schema.format || schema.enum) {
      dataType = dataType.replace('string', schema.enum ? 'enum' : schema.format);
    }

    if (schema.nullable) {
      dataType += '┃null';
    }
  } else if (Object.keys(schema).length === 0) {
    dataType = 'any';
  } else {
    dataType = '{missing-type-info}';
  }

  const info = {
    type: dataType,
    format: schema.format || '',
    pattern: schema.pattern && !schema.enum ? schema.pattern : '',
    readOrWriteOnly: schema.readOnly ? '🆁' : schema.writeOnly ? '🆆' : '',
    deprecated: schema.deprecated ? '❌' : '',
    examples: schema.examples || schema.example,
    default: schema.default != null ? `${schema.default}` : '',
    description: schema.description || '',
    constrain: '',
    allowedValues: '',
    arrayType: '',
    html: ''
  };

  if (info.type === '{recursive}') {
    info.description = schema.$ref.substring(schema.$ref.lastIndexOf('/') + 1);
  } else if (info.type === '{missing-type-info}' || info.type === 'any') {
    info.description = info.description || '';
  } // Set Allowed Values


  info.allowedValues = Array.isArray(schema.enum) ? schema.enum.join('┃') : '';

  if (dataType === 'array' && schema.items) {
    var _schema$items, _schema$items2, _schema$items3;

    const arrayItemType = (_schema$items = schema.items) === null || _schema$items === void 0 ? void 0 : _schema$items.type;
    const arrayItemDefault = ((_schema$items2 = schema.items) === null || _schema$items2 === void 0 ? void 0 : _schema$items2.default) !== undefined ? schema.items.default : '';
    info.arrayType = `${schema.type} of ${Array.isArray(arrayItemType) ? arrayItemType.join('') : arrayItemType}`;
    info.default = arrayItemDefault;
    info.allowedValues = Array.isArray((_schema$items3 = schema.items) === null || _schema$items3 === void 0 ? void 0 : _schema$items3.enum) ? schema.items.enum.join('┃') : '';
  }

  if (dataType.match(/integer|number/g)) {
    if (schema.minimum !== undefined || schema.exclusiveMinimum !== undefined) {
      constrain += schema.minimum !== undefined ? `Min ${schema.minimum}` : `More than ${schema.exclusiveMinimum}`;
    }

    if (schema.maximum !== undefined || schema.exclusiveMaximum !== undefined) {
      constrain += schema.maximum !== undefined ? `${constrain ? '┃' : ''}Max ${schema.maximum}` : `${constrain ? '┃' : ''}Less than ${schema.exclusiveMaximum}`;
    }

    if (schema.multipleOf !== undefined) {
      constrain += `${constrain ? '┃' : ''} multiple of ${schema.multipleOf}`;
    }
  }

  if (dataType.match(/string/g)) {
    if (schema.minLength !== undefined && schema.maxLength !== undefined) {
      constrain += `${constrain ? '┃' : ''}${schema.minLength} to ${schema.maxLength} chars`;
    } else if (schema.minLength !== undefined) {
      constrain += `${constrain ? '┃' : ''}Min ${schema.minLength} chars`;
    } else if (schema.maxLength !== undefined) {
      constrain += `Max ${constrain ? '┃' : ''}${schema.maxLength} chars`;
    }
  }

  info.constrain = constrain;
  info.html = `${info.type}~|~${info.readOrWriteOnly}~|~${info.constrain}~|~${info.default}~|~${info.allowedValues}~|~${info.pattern}~|~${info.description}~|~${schema.title || ''}~|~${info.deprecated ? 'deprecated' : ''}`;
  return info;
}
function nestExampleIfPresent(example) {
  if (typeof example === 'boolean') {
    return {
      Example: {
        value: `${example}`
      }
    };
  }

  if (example === '') {
    return {
      Example: {
        value: ''
      }
    };
  }

  return example ? {
    Example: {
      value: example
    }
  } : example;
}
function normalizeExamples(examples, dataType = 'string') {
  if (!examples) {
    return {
      exampleVal: '',
      exampleList: []
    };
  }

  if (examples.constructor === Object) {
    const exampleValAndDescr = Object.values(examples);
    const exampleVal = exampleValAndDescr.length > 0 ? typeof exampleValAndDescr[0].value === 'boolean' || typeof exampleValAndDescr[0].value === 'number' ? exampleValAndDescr[0].value.toString() : exampleValAndDescr[0].value : '';
    const exampleList = Object.values(examples).map(v => ({
      value: typeof v.value === 'boolean' || typeof v.value === 'number' ? v.value.toString() : v.value,
      summary: v.summary,
      description: v.description
    }));
    return {
      exampleVal,
      exampleList
    };
  } // This is non-standard way to provide example but will support for now


  if (!Array.isArray(examples)) {
    examples = examples ? [examples] : [];
  }

  if (examples.length === 0) {
    return {
      exampleVal: '',
      exampleList: []
    };
  }

  if (dataType === 'array') {
    const [exampleVal] = examples;
    const exampleList = examples.map(v => ({
      value: v
    }));
    return {
      exampleVal,
      exampleList
    };
  }

  const exampleVal = examples[0].toString();
  const exampleList = examples.map(v => ({
    value: v.toString()
  }));
  return {
    exampleVal,
    exampleList
  };
}
function anyExampleWithSummaryOrDescription(examples) {
  return examples.some(x => {
    var _x$summary, _x$description;

    return ((_x$summary = x.summary) === null || _x$summary === void 0 ? void 0 : _x$summary.length) > 0 || ((_x$description = x.description) === null || _x$description === void 0 ? void 0 : _x$description.length) > 0;
  });
}
function getSampleValueByType(schemaObj) {
  const example = schemaObj.examples ? schemaObj.examples[0] : schemaObj.example === null ? null : schemaObj.example || undefined;

  if (example === '') {
    return '';
  }

  if (example === null) {
    return null;
  }

  if (example === 0) {
    return 0;
  }

  if (example) {
    return example;
  }

  if (Object.keys(schemaObj).length === 0) {
    return null;
  }

  if (schemaObj.$ref) {
    // Indicates a Circular ref
    return schemaObj.$ref;
  }

  const typeValue = Array.isArray(schemaObj.type) ? schemaObj.type[0] : schemaObj.type;

  if (!typeValue) {
    return '?';
  }

  if (typeValue.match(/^integer|^number/g)) {
    const multipleOf = Number.isNaN(Number(schemaObj.multipleOf)) ? undefined : Number(schemaObj.multipleOf);
    const maximum = Number.isNaN(Number(schemaObj.maximum)) ? undefined : Number(schemaObj.maximum);
    const minimumPossibleVal = Number.isNaN(Number(schemaObj.minimum)) ? Number.isNaN(Number(schemaObj.exclusiveMinimum)) ? maximum || 0 : Number(schemaObj.exclusiveMinimum) + (typeValue.startsWith('integer') ? 1 : 0.001) : Number(schemaObj.minimum);
    const finalVal = multipleOf ? multipleOf >= minimumPossibleVal ? multipleOf : minimumPossibleVal % multipleOf === 0 ? minimumPossibleVal : Math.ceil(minimumPossibleVal / multipleOf) * multipleOf : minimumPossibleVal;
    return finalVal;
  }

  if (typeValue.match(/^boolean/g)) {
    return false;
  }

  if (typeValue.match(/^null/g)) {
    return null;
  }

  if (typeValue.match(/^string/g)) {
    if (schemaObj.enum) {
      return schemaObj.enum[0];
    }

    if (schemaObj.pattern) {
      return schemaObj.pattern;
    }

    if (schemaObj.format) {
      const u = `${Date.now().toString(16)}${Math.random().toString(16)}0`.repeat(16);

      switch (schemaObj.format.toLowerCase()) {
        case 'url':
        case 'uri':
          return 'http://example.com';

        case 'date':
          return new Date(0).toISOString().split('T')[0];

        case 'time':
          return new Date(0).toISOString().split('T')[1];

        case 'date-time':
          return new Date(0).toISOString();

        case 'duration':
          return 'P3Y6M4DT12H30M5S';
        // P=Period 3-Years 6-Months 4-Days 12-Hours 30-Minutes 5-Seconds

        case 'email':
        case 'idn-email':
          return 'user@example.com';

        case 'hostname':
        case 'idn-hostname':
          return 'www.example.com';

        case 'ipv4':
          return '198.51.100.42';

        case 'ipv6':
          return '2001:0db8:5b96:0000:0000:426f:8e17:642a';

        case 'uuid':
          return [u.substr(0, 8), u.substr(8, 4), `4000-8${u.substr(13, 3)}`, u.substr(16, 12)].join('-');

        default:
          return '';
      }
    } else {
      const minLength = Number.isNaN(schemaObj.minLength) ? undefined : Number(schemaObj.minLength);
      const maxLength = Number.isNaN(schemaObj.maxLength) ? undefined : Number(schemaObj.maxLength);
      const finalLength = minLength || (maxLength > 6 ? 6 : maxLength || undefined);
      return finalLength ? 'A'.repeat(finalLength) : 'string';
    }
  } // If type cannot be determined


  return '?';
}
/*
json2xml- TestCase
  {
    'prop1' : 'one',
    'prop2' : 'two',
    'prop3' : [ 'a', 'b', 'c' ],
    'prop4' : {
      'ob1' : 'val-1',
      'ob2' : 'val-2'
    }
  }
  <root>
    <prop1>simple</prop1>
    <prop2>
      <0> a </0>
      <1> b </1>
      <2> c </2>
    </prop2>
    <prop3>
      <ob1>val-1</ob1>
      <ob2>val-2</ob2>
    </prop3>
  </root>
*/

function json2xml(obj, level = 1) {
  const indent = '  '.repeat(level);
  let xmlText = '';

  if (level === 1 && typeof obj !== 'object') {
    return `\n${indent}${obj.toString()}`;
  }

  for (const prop in obj) {
    if (Array.isArray(obj[prop])) {
      xmlText = `${xmlText}\n${indent}<${prop}> ${json2xml(obj[prop], level + 1)}\n${indent}</${prop}>`;
    } else if (typeof obj[prop] === 'object') {
      xmlText = `${xmlText}\n${indent}<${prop}> ${json2xml(obj[prop], level + 1)}\n${indent}</${prop}>`;
    } else {
      xmlText = `${xmlText}\n${indent}<${prop}> ${obj[prop].toString()} </${prop}>`;
    }
  }

  return xmlText;
}

function addSchemaInfoToExample(schema, obj) {
  if (typeof obj !== 'object' || obj === null) {
    return;
  }

  if (schema.title) {
    obj['::TITLE'] = schema.title;
  }

  if (schema.description) {
    obj['::DESCRIPTION'] = schema.description;
  }
}

function removeTitlesAndDescriptions(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return;
  }

  delete obj['::TITLE'];
  delete obj['::DESCRIPTION'];

  for (const k in obj) {
    removeTitlesAndDescriptions(obj[k]);
  }
}

function addPropertyExampleToObjectExamples(example, obj, propertyKey) {
  for (const key in obj) {
    obj[key][propertyKey] = example;
  }
}

function mergePropertyExamples(obj, propertyName, propExamples) {
  // Create an example for each variant of the propertyExample, merging them with the current (parent) example
  let i = 0;
  const maxCombinations = 10;
  const mergedObj = {};

  for (const exampleKey in obj) {
    for (const propExampleKey in propExamples) {
      mergedObj[`example-${i}`] = { ...obj[exampleKey]
      };
      mergedObj[`example-${i}`][propertyName] = propExamples[propExampleKey];
      i++;

      if (i >= maxCombinations) {
        break;
      }
    }

    if (i >= maxCombinations) {
      break;
    }
  }

  return mergedObj;
}
/* For changing JSON-Schema to a Sample Object, as per the schema (to generate examples based on schema) */


function schemaToSampleObj(schema, config = {}) {
  let obj = {};

  if (!schema) {
    return;
  }

  if (schema.allOf) {
    const objWithAllProps = {};

    if (schema.allOf.length === 1 && !schema.allOf[0].properties && !schema.allOf[0].items) {
      // If allOf has single item and the type is not an object or array, then its a primitive
      if (schema.allOf[0].$ref) {
        return '{  }';
      }

      if (schema.allOf[0].readOnly && config.includeReadOnly) {
        const tempSchema = schema.allOf[0];
        return getSampleValueByType(tempSchema);
      }

      return;
    }

    schema.allOf.forEach(v => {
      if (v.type === 'object' || v.properties || v.allOf || v.anyOf || v.oneOf) {
        const partialObj = schemaToSampleObj(v, config);
        Object.assign(objWithAllProps, partialObj);
      } else if (v.type === 'array' || v.items) {
        const partialObj = [schemaToSampleObj(v, config)];
        Object.assign(objWithAllProps, partialObj);
      } else if (v.type) {
        const prop = `prop${Object.keys(objWithAllProps).length}`;
        objWithAllProps[prop] = getSampleValueByType(v);
      } else {
        return '';
      }
    });
    obj = objWithAllProps;
  } else if (schema.oneOf) {
    // 1. First create example with scheme.properties
    const objWithSchemaProps = {};

    if (schema.properties) {
      for (const propertyName in schema.properties) {
        objWithSchemaProps[propertyName] = getSampleValueByType(schema.properties[propertyName]);
      }
    }

    if (schema.oneOf.length > 0) {
      /*
      oneOf:
        - type: object
          properties:
            option1_PropA:
              type: string
            option1_PropB:
              type: string
        - type: object
          properties:
            option2_PropX:
              type: string
      properties:
        prop1:
          type: string
        prop2:
          type: string
          minLength: 10
       The aboove Schem should generate the following 2 examples
       Example-1
      {
        prop1: 'string',
        prop2: 'AAAAAAAAAA',       <-- min-length 10
        option1_PropA: 'string',
        option1_PropB: 'string'
      }
       Example-2
      {
        prop1: 'string',
        prop2: 'AAAAAAAAAA',       <-- min-length 10
        option2_PropX: 'string'
      }
      */
      let i = 0; // Merge all examples of each oneOf-schema

      for (const key in schema.oneOf) {
        const oneOfSamples = schemaToSampleObj(schema.oneOf[key], config);

        for (const sampleKey in oneOfSamples) {
          // 2. In the final example include a one-of item along with properties
          let finalExample;

          if (Object.keys(objWithSchemaProps).length > 0) {
            if (oneOfSamples[sampleKey] === null || typeof oneOfSamples[sampleKey] !== 'object') {
              // This doesn't really make sense since every oneOf schema _should_ be an object if there are common properties, so we'll skip this
              continue;
            } else {
              finalExample = Object.assign(oneOfSamples[sampleKey], objWithSchemaProps);
            }
          } else {
            finalExample = oneOfSamples[sampleKey];
          }

          obj[`example-${i}`] = finalExample;
          addSchemaInfoToExample(schema.oneOf[key], obj[`example-${i}`]);
          i++;
        }
      }
    }
  } else if (schema.anyOf) {
    // First generate values for regular properties
    let commonObj;

    if (schema.type === 'object' || schema.properties) {
      commonObj = {
        'example-0': {}
      };

      for (const propertyName in schema.properties) {
        if (schema.example) {
          commonObj = schema;
          break;
        }

        if (schema.properties[propertyName].deprecated && !config.includeDeprecated) {
          continue;
        }

        if (schema.properties[propertyName].readOnly && !config.includeReadOnly) {
          continue;
        }

        if (schema.properties[propertyName].writeOnly && !config.includeWriteOnly) {
          continue;
        }

        commonObj = mergePropertyExamples(commonObj, propertyName, schemaToSampleObj(schema.properties[propertyName], config));
      }
    } // Combine every variant of the regular properties with every variant of the anyOf samples


    let i = 0;

    for (const key in schema.anyOf) {
      const anyOfSamples = schemaToSampleObj(schema.anyOf[key], config);

      for (const sampleKey in anyOfSamples) {
        if (typeof commonObj !== 'undefined') {
          for (const commonKey in commonObj) {
            obj[`example-${i}`] = { ...commonObj[commonKey],
              ...anyOfSamples[sampleKey]
            };
          }
        } else {
          obj[`example-${i}`] = anyOfSamples[sampleKey];
        }

        addSchemaInfoToExample(schema.anyOf[key], obj[`example-${i}`]);
        i++;
      }
    }
  } else if (schema.type === 'object' || schema.properties) {
    obj['example-0'] = {};
    addSchemaInfoToExample(schema, obj['example-0']);

    if (schema.example) {
      obj['example-0'] = schema.example;
    } else {
      for (const propertyName in schema.properties) {
        var _schema$properties$pr, _schema$properties$pr2, _schema$properties$pr3, _schema$properties$pr4, _schema$properties$pr5;

        if ((_schema$properties$pr = schema.properties[propertyName]) !== null && _schema$properties$pr !== void 0 && _schema$properties$pr.deprecated && !config.includeDeprecated) {
          continue;
        }

        if ((_schema$properties$pr2 = schema.properties[propertyName]) !== null && _schema$properties$pr2 !== void 0 && _schema$properties$pr2.readOnly && !config.includeReadOnly) {
          continue;
        }

        if ((_schema$properties$pr3 = schema.properties[propertyName]) !== null && _schema$properties$pr3 !== void 0 && _schema$properties$pr3.writeOnly && !config.includeWriteOnly) {
          continue;
        }

        if (((_schema$properties$pr4 = schema.properties[propertyName]) === null || _schema$properties$pr4 === void 0 ? void 0 : _schema$properties$pr4.type) === 'array' || (_schema$properties$pr5 = schema.properties[propertyName]) !== null && _schema$properties$pr5 !== void 0 && _schema$properties$pr5.items) {
          var _schema$properties$pr6, _schema$properties$pr7;

          if (schema.properties[propertyName].example) {
            addPropertyExampleToObjectExamples(schema.properties[propertyName].example, obj, propertyName);
          } else if ((_schema$properties$pr6 = schema.properties[propertyName]) !== null && _schema$properties$pr6 !== void 0 && (_schema$properties$pr7 = _schema$properties$pr6.items) !== null && _schema$properties$pr7 !== void 0 && _schema$properties$pr7.example) {
            // schemas and properties support single example but not multiple examples.
            addPropertyExampleToObjectExamples([schema.properties[propertyName].items.example], obj, propertyName);
          } else {
            const itemSamples = schemaToSampleObj(schema.properties[propertyName].items, config);
            const arraySamples = [];

            for (const key in itemSamples) {
              arraySamples[key] = [itemSamples[key]];
            }

            obj = mergePropertyExamples(obj, propertyName, arraySamples);
          }

          continue;
        }

        obj = mergePropertyExamples(obj, propertyName, schemaToSampleObj(schema.properties[propertyName], config));
      }
    }
  } else if (schema.type === 'array' || schema.items) {
    if (schema.items || schema.example) {
      var _schema$items4;

      if (schema.example) {
        obj['example-0'] = schema.example;
      } else if ((_schema$items4 = schema.items) !== null && _schema$items4 !== void 0 && _schema$items4.example) {
        // schemas and properties support single example but not multiple examples.
        obj['example-0'] = [schema.items.example];
      } else {
        const samples = schemaToSampleObj(schema.items, config);
        let i = 0;

        for (const key in samples) {
          obj[`example-${i}`] = [samples[key]];
          addSchemaInfoToExample(schema.items, obj[`example-${i}`]);
          i++;
        }
      }
    } else {
      obj['example-0'] = [];
    }
  } else {
    return {
      'example-0': getSampleValueByType(schema)
    };
  }

  return obj;
}

function generateMarkdownForArrayAndObjectDescription(schema, level = 0) {
  var _schema$items5;

  let markdown = '';

  if (schema.title) {
    markdown = `**${schema.title}:** `;
  }

  if (schema.description) {
    markdown = `${markdown} ${schema.description} ${schema.minItems || schema.maxItems ? '<span class="more-content">⤵</span><br/>' : ''}`;
  }

  if (schema.minItems) {
    markdown = `${markdown} **Min Items:** ${schema.minItems}`;
  }

  if (schema.maxItems) {
    markdown = `${markdown} **Max Items:** ${schema.maxItems}`;
  }

  if (level > 0 && (_schema$items5 = schema.items) !== null && _schema$items5 !== void 0 && _schema$items5.description) {
    let itemsMarkdown = '';

    if (schema.items.minProperties) {
      itemsMarkdown = `**Min Properties:** ${schema.items.minProperties}`;
    }

    if (schema.items.maxProperties) {
      itemsMarkdown = `${itemsMarkdown} **Max Properties:** ${schema.items.maxProperties}`;
    }

    markdown = `${markdown} ⮕ ${itemsMarkdown} [ ${schema.items.description} ] `;
  }

  return markdown;
}
/**
 * For changing OpenAPI-Schema to an Object Notation,
 * This Object would further be an input to UI Components to generate an Object-Tree
 * @param {object} schema - Schema object from OpenAPI spec
 * @param {object} obj - recursivly pass this object to generate object notation
 * @param {number} level - recursion level
 * @param {string} suffix - used for suffixing property names to avoid duplicate props during object composion
 */


function schemaInObjectNotation(schema, obj, level = 0, suffix = '') {
  if (!schema) {
    return;
  }

  if (schema.allOf) {
    const objWithAllProps = {};

    if (schema.allOf.length === 1 && !schema.allOf[0].properties && !schema.allOf[0].items) {
      // If allOf has single item and the type is not an object or array, then its a primitive
      const tempSchema = schema.allOf[0];
      return `${getTypeInfo(tempSchema).html}`;
    } // If allOf is an array of multiple elements, then all the keys makes a single object


    schema.allOf.map((v, i) => {
      if (v.type === 'object' || v.properties || v.allOf || v.anyOf || v.oneOf) {
        const propSuffix = (v.anyOf || v.oneOf) && i > 0 ? i : '';
        const partialObj = schemaInObjectNotation(v, {}, level + 1, propSuffix);
        Object.assign(objWithAllProps, partialObj);
      } else if (v.type === 'array' || v.items) {
        const partialObj = schemaInObjectNotation(v, {}, level + 1);
        Object.assign(objWithAllProps, partialObj);
      } else if (v.type) {
        const prop = `prop${Object.keys(objWithAllProps).length}`;
        const typeObj = getTypeInfo(v);
        objWithAllProps[prop] = `${typeObj.html}`;
      } else {
        return '';
      }
    });
    obj = objWithAllProps;
  } else if (schema.anyOf || schema.oneOf) {
    obj['::description'] = schema.description || ''; // 1. First iterate the regular properties

    if (schema.type === 'object' || schema.properties) {
      obj['::description'] = schema.description || '';
      obj['::type'] = 'object'; // obj['::deprecated'] = schema.deprecated || false;

      for (const key in schema.properties) {
        if (schema.required && schema.required.includes(key)) {
          obj[`${key}*`] = schemaInObjectNotation(schema.properties[key], {}, level + 1);
        } else {
          obj[key] = schemaInObjectNotation(schema.properties[key], {}, level + 1);
        }
      }
    } // 2. Then show allof/anyof objects


    const objWithAnyOfProps = {};
    const xxxOf = schema.anyOf ? 'anyOf' : 'oneOf';
    schema[xxxOf].forEach((v, index) => {
      if (v.type === 'object' || v.properties || v.allOf || v.anyOf || v.oneOf) {
        const partialObj = schemaInObjectNotation(v, {});
        objWithAnyOfProps[`::OPTION~${index + 1}${v.title ? `~${v.title}` : ''}`] = partialObj;
        objWithAnyOfProps['::type'] = 'xxx-of-option';
      } else if (v.type === 'array' || v.items) {
        // This else-if block never seems to get executed
        const partialObj = schemaInObjectNotation(v, {});
        objWithAnyOfProps[`::OPTION~${index + 1}${v.title ? `~${v.title}` : ''}`] = partialObj;
        objWithAnyOfProps['::type'] = 'xxx-of-array';
      } else {
        const prop = `::OPTION~${index + 1}${v.title ? `~${v.title}` : ''}`;
        objWithAnyOfProps[prop] = `${getTypeInfo(v).html}`;
        objWithAnyOfProps['::type'] = 'xxx-of-option';
      }
    });
    obj[schema.anyOf ? `::ANY~OF ${suffix}` : `::ONE~OF ${suffix}`] = objWithAnyOfProps;
    obj['::type'] = 'xxx-of';
  } else if (Array.isArray(schema.type)) {
    // When a property has multiple types, then check further if any of the types are array or object, if yes then modify the schema using one-of
    // Clone the schema - as it will be modified to replace multi-data-types with one-of;
    const subSchema = JSON.parse(JSON.stringify(schema));
    const primitiveType = [];
    const complexTypes = [];
    subSchema.type.forEach(v => {
      var _subSchema$items, _subSchema$items2;

      if (v.match(/integer|number|string|null|boolean/g)) {
        primitiveType.push(v);
      } else if (v === 'array' && typeof ((_subSchema$items = subSchema.items) === null || _subSchema$items === void 0 ? void 0 : _subSchema$items.type) === 'string' && (_subSchema$items2 = subSchema.items) !== null && _subSchema$items2 !== void 0 && _subSchema$items2.type.match(/integer|number|string|null|boolean/g)) {
        // Array with primitive types should also be treated as primitive type
        if (subSchema.items.type === 'string' && subSchema.items.format) {
          primitiveType.push(`[${subSchema.items.format}]`);
        } else {
          primitiveType.push(`[${subSchema.items.type}]`);
        }
      } else {
        complexTypes.push(v);
      }
    });
    let multiPrimitiveTypes;

    if (primitiveType.length > 0) {
      subSchema.type = primitiveType.join(primitiveType.length === 2 ? ' or ' : '┃');
      multiPrimitiveTypes = getTypeInfo(subSchema);

      if (complexTypes.length === 0) {
        var _multiPrimitiveTypes;

        return `${((_multiPrimitiveTypes = multiPrimitiveTypes) === null || _multiPrimitiveTypes === void 0 ? void 0 : _multiPrimitiveTypes.html) || ''}`;
      }
    }

    if (complexTypes.length > 0) {
      var _multiPrimitiveTypes2;

      obj['::type'] = 'xxx-of';
      const multiTypeOptions = {
        '::type': 'xxx-of-option'
      }; // Generate ONE-OF options for complexTypes

      complexTypes.forEach((v, i) => {
        if (v === 'null') {
          multiTypeOptions[`::OPTION~${i + 1}`] = 'NULL~|~~|~~|~~|~~|~~|~~|~~|~';
        } else if ('integer, number, string, boolean,'.includes(`${v},`)) {
          subSchema.type = Array.isArray(v) ? v.join('┃') : v;
          const primitiveTypeInfo = getTypeInfo(subSchema);
          multiTypeOptions[`::OPTION~${i + 1}`] = primitiveTypeInfo.html;
        } else if (v === 'object') {
          // If object type iterate all the properties and create an object-type-option
          const objTypeOption = {
            '::title': schema.title || '',
            '::description': schema.description || '',
            '::type': 'object',
            '::deprecated': schema.deprecated || false
          };

          for (const key in schema.properties) {
            if (schema.required && schema.required.includes(key)) {
              objTypeOption[`${key}*`] = schemaInObjectNotation(schema.properties[key], {}, level + 1);
            } else {
              objTypeOption[key] = schemaInObjectNotation(schema.properties[key], {}, level + 1);
            }
          }

          multiTypeOptions[`::OPTION~${i + 1}`] = objTypeOption;
        } else if (v === 'array') {
          multiTypeOptions[`::OPTION~${i + 1}`] = {
            '::title': schema.title || '',
            '::description': schema.description || '',
            '::type': 'array',
            '::props': schemaInObjectNotation(schema.items, {}, level + 1)
          };
        }
      });
      multiTypeOptions[`::OPTION~${complexTypes.length + 1}`] = ((_multiPrimitiveTypes2 = multiPrimitiveTypes) === null || _multiPrimitiveTypes2 === void 0 ? void 0 : _multiPrimitiveTypes2.html) || '';
      obj['::ONE~OF'] = multiTypeOptions;
    }
  } else if (schema.type === 'object' || schema.properties) {
    // If Object
    obj['::title'] = schema.title || '';
    obj['::description'] = generateMarkdownForArrayAndObjectDescription(schema, level);
    obj['::type'] = 'object';

    if (Array.isArray(schema.type) && schema.type.includes('null') || schema.nullable) {
      obj['::dataTypeLabel'] = 'object or null';
    }

    obj['::deprecated'] = schema.deprecated || false;
    obj['::readwrite'] = schema.readOnly ? 'readonly' : schema.writeOnly ? 'writeonly' : '';

    for (const key in schema.properties) {
      if (schema.required && schema.required.includes(key)) {
        obj[`${key}*`] = schemaInObjectNotation(schema.properties[key], {}, level + 1);
      } else {
        obj[key] = schemaInObjectNotation(schema.properties[key], {}, level + 1);
      }
    }

    if (schema.additionalProperties) {
      obj['<any-key>'] = schemaInObjectNotation(schema.additionalProperties, {});
    }
  } else if (schema.type === 'array' || schema.items) {
    var _schema$items6;

    // If Array
    obj['::title'] = schema.title || '';
    obj['::description'] = generateMarkdownForArrayAndObjectDescription(schema, level);
    obj['::type'] = 'array';

    if (Array.isArray(schema.type) && schema.type.includes('null') || schema.nullable) {
      obj['::dataTypeLabel'] = 'array or null';
    }

    obj['::deprecated'] = schema.deprecated || false;
    obj['::readwrite'] = schema.readOnly ? 'readonly' : schema.writeOnly ? 'writeonly' : '';

    if ((_schema$items6 = schema.items) !== null && _schema$items6 !== void 0 && _schema$items6.items) {
      obj['::array-type'] = schema.items.items.type;
    }

    obj['::props'] = schemaInObjectNotation(schema.items, {}, level + 1);
  } else {
    const typeObj = getTypeInfo(schema);

    if (typeObj !== null && typeObj !== void 0 && typeObj.html) {
      return `${typeObj.html}`;
    }

    return '';
  }

  return obj;
}
/* Create Example object */

function generateExample(schema, mimeType, examples = '', example = '', includeReadOnly = true, includeWriteOnly = true, outputType = 'json', includeGeneratedExample = false) {
  const finalExamples = []; // First check if examples is provided

  if (examples) {
    for (const eg in examples) {
      let egContent = '';
      let egFormat = 'json';

      if (mimeType !== null && mimeType !== void 0 && mimeType.toLowerCase().includes('json')) {
        if (outputType === 'text') {
          egContent = typeof examples[eg].value === 'string' ? examples[eg].value : JSON.stringify(examples[eg].value, undefined, 2);
          egFormat = 'text';
        } else {
          egContent = examples[eg].value;

          if (typeof examples[eg].value === 'string') {
            try {
              const fixedJsonString = examples[eg].value.replace(/([\w]+)(:)/g, '"$1"$2').replace(/'/g, '"');
              egContent = JSON.parse(fixedJsonString);
              egFormat = 'json';
            } catch (err) {
              egFormat = 'text';
              egContent = examples[eg].value;
            }
          }
        }
      } else {
        egContent = examples[eg].value;
        egFormat = 'text';
      }

      finalExamples.push({
        exampleId: eg,
        exampleSummary: examples[eg].summary || eg,
        exampleDescription: examples[eg].description || '',
        exampleType: mimeType,
        exampleValue: egContent,
        exampleFormat: egFormat
      });
    }
  } else if (example) {
    let egContent = '';
    let egFormat = 'json';

    if (mimeType !== null && mimeType !== void 0 && mimeType.toLowerCase().includes('json')) {
      if (outputType === 'text') {
        egContent = typeof example === 'string' ? example : JSON.stringify(example, undefined, 2);
        egFormat = 'text';
      } else if (typeof example === 'object') {
        egContent = example;
        egFormat = 'json';
      } else if (typeof example === 'string') {
        try {
          egContent = JSON.parse(example);
          egFormat = 'json';
        } catch (err) {
          egFormat = 'text';
          egContent = example;
        }
      }
    } else {
      egContent = example;
      egFormat = 'text';
    }

    finalExamples.push({
      exampleId: 'Example',
      exampleSummary: '',
      exampleDescription: '',
      exampleType: mimeType,
      exampleValue: egContent,
      exampleFormat: egFormat
    });
  } // If schema-level examples are not provided or includeGeneratedExample === true then generate one based on the schema field types


  if (finalExamples.length === 0 || includeGeneratedExample === true) {
    if (schema) {
      if (schema.example) {
        // Note: schema.examples (plurals) is not allowed as per spec
        finalExamples.push({
          exampleId: 'Example',
          exampleSummary: '',
          exampleDescription: '',
          exampleType: mimeType,
          exampleValue: schema.example,
          exampleFormat: mimeType !== null && mimeType !== void 0 && mimeType.toLowerCase().includes('json') && typeof schema.example === 'object' ? 'json' : 'text'
        });
      } else if (mimeType !== null && mimeType !== void 0 && mimeType.toLowerCase().includes('json') || mimeType !== null && mimeType !== void 0 && mimeType.toLowerCase().includes('text') || mimeType !== null && mimeType !== void 0 && mimeType.toLowerCase().includes('*/*') || mimeType !== null && mimeType !== void 0 && mimeType.toLowerCase().includes('xml')) {
        let xmlRootStart = '';
        let xmlRootEnd = '';
        let exampleFormat = '';
        let exampleValue = '';

        if (mimeType !== null && mimeType !== void 0 && mimeType.toLowerCase().includes('xml')) {
          xmlRootStart = schema.xml && schema.xml.name ? `<${schema.xml.name}>` : '<root>';
          xmlRootEnd = schema.xml && schema.xml.name ? `</${schema.xml.name}>` : '</root>';
          exampleFormat = 'text';
        } else {
          exampleFormat = outputType;
        }

        const samples = schemaToSampleObj(schema, {
          includeReadOnly,
          includeWriteOnly,
          deprecated: true
        });
        let i = 0;

        for (const samplesKey in samples) {
          if (!samples[samplesKey]) {
            continue;
          }

          const summary = samples[samplesKey]['::TITLE'] || `Example ${++i}`;
          const description = samples[samplesKey]['::DESCRIPTION'] || '';
          removeTitlesAndDescriptions(samples[samplesKey]);

          if (mimeType !== null && mimeType !== void 0 && mimeType.toLowerCase().includes('xml')) {
            exampleValue = `${xmlRootStart}${json2xml(samples[samplesKey])}\n${xmlRootEnd}`;
          } else {
            exampleValue = outputType === 'text' ? JSON.stringify(samples[samplesKey], null, 2) : samples[samplesKey];
          }

          finalExamples.push({
            exampleId: samplesKey,
            exampleSummary: summary,
            exampleDescription: description,
            exampleType: mimeType,
            exampleFormat,
            exampleValue
          });
        }
      } else if (mimeType !== null && mimeType !== void 0 && mimeType.toLowerCase().includes('jose')) {
        finalExamples.push({
          exampleId: 'Example',
          exampleSummary: 'Base64 Encoded',
          exampleDescription: '',
          exampleType: mimeType,
          exampleValue: schema.pattern || 'bXJpbg==',
          exampleFormat: 'text'
        });
      } else {
        finalExamples.push({
          exampleId: 'Example',
          exampleSummary: '',
          exampleDescription: '',
          exampleType: mimeType,
          exampleValue: '',
          exampleFormat: 'text'
        });
      }
    } else {
      // No Example or Schema provided (should never reach here)
      finalExamples.push({
        exampleId: 'Example',
        exampleSummary: '',
        exampleDescription: '',
        exampleType: mimeType,
        exampleValue: '',
        exampleFormat: 'text'
      });
    }
  }

  return finalExamples;
}

function getSerializeStyleForContentType(contentType) {
  if (contentType === 'application/json') {
    return 'json';
  }

  if (contentType === 'application/xml') {
    return 'xml';
  }

  return null;
}

function getSchemaFromParam(param) {
  if (param.schema) {
    return [param.schema, null, null];
  }

  if (param.content) {
    // we gonna use the first content-encoding
    for (const contentType of Object.keys(param.content)) {
      if (param.content[contentType].schema) {
        return [param.content[contentType].schema, getSerializeStyleForContentType(contentType), param.content[contentType]];
      }
    }
  }

  return [null, null, null];
}
;// CONCATENATED MODULE: ./src/components/json-tree.js






class JsonTree extends lit_element_s {
  static get properties() {
    return {
      data: {
        type: Object
      },
      renderStyle: {
        type: String,
        attribute: 'render-style'
      }
    };
  }

  static get styles() {
    return [font_styles, border_styles, input_styles, i`
      :host{
        display:flex;
      }
      .json-tree {
        position: relative;
        font-family: var(--font-mono);
        font-size: var(--font-size-small);
        display:inline-block;
        overflow:hidden;
        word-break: break-all;
        flex:1;
        line-height: calc(var(--font-size-small) + 6px);
        direction: ltr; 
        text-align: left;
      }

      .open-bracket {
        display:inline-block;
        padding: 0 20px 0 0;
        cursor:pointer;
        border: 1px solid transparent;
        border-radius:3px;
      }
      .close-bracket {
        border: 1px solid transparent;
        border-radius:3px;
        display:inline-block;
      }
      .open-bracket:hover {
        color:var(--primary-color);
        background-color:var(--hover-color);
        border: 1px solid var(--border-color);
      }
      .open-bracket.expanded:hover ~ .inside-bracket {
        border-left: 1px solid var(--fg3);
      }
      .open-bracket.expanded:hover ~ .close-bracket {
        color:var(--primary-color);
      }
      .inside-bracket{
        padding-left:12px;
        border-left:1px dotted var(--border-color);
      }
      .open-bracket.collapsed + .inside-bracket,
      .open-bracket.collapsed + .inside-bracket + .close-bracket {
        display:none;
      }

      .string{color:var(--green);}
      .number{color:var(--blue);}
      .null{color:var(--red);}
      .boolean{color:var(--purple);}
      .object{color:var(--fg)}
      .toolbar {
        position: absolute;
        top:5px;
        right:6px;
        display:flex;
        padding:2px;
        align-items: center;
      }`, custom_styles];
  }
  /* eslint-disable indent */


  render() {
    return y`
      <div class = "json-tree" >
        <div class='toolbar'> 
          <button class="toolbar-btn" part="btn btn-fill btn-copy" @click='${e => {
      copyToClipboard(JSON.stringify(this.data, null, 2), e);
    }}'> Copy </button>
        </div>
        ${this.generateTree(this.data, true)}
      </div>  
    `;
  }

  generateTree(data, isLast = false) {
    if (data === null) {
      return y`<div class="null" style="display:inline;">null</div>`;
    }

    if (typeof data === 'object' && data instanceof Date === false) {
      const detailType = Array.isArray(data) ? 'array' : 'pure_object';

      if (Object.keys(data).length === 0) {
        return y`${Array.isArray(data) ? '[ ],' : '{ },'}`;
      }

      return y`
      <div class="open-bracket expanded ${detailType === 'array' ? 'array' : 'object'} " @click="${this.toggleExpand}" > ${detailType === 'array' ? '[' : '{'}</div>
      <div class="inside-bracket">
        ${Object.keys(data).map((key, i, a) => y`
          <div class="item"> 
            ${detailType === 'pure_object' ? y`"${key}":` : ''}
            ${this.generateTree(data[key], i === a.length - 1)}
          </div>`)}
      </div>
      <div class="close-bracket">${detailType === 'array' ? ']' : '}'}${isLast ? '' : ','}</div>
      `;
    }

    return typeof data === 'string' || data instanceof Date ? y`<span class="${typeof data}">"${data}"</span>${isLast ? '' : ','}` : y`<span class="${typeof data}">${data}</span>${isLast ? '' : ','}`;
  }
  /* eslint-enable indent */


  toggleExpand(e) {
    const openBracketEl = e.target;

    if (openBracketEl.classList.contains('expanded')) {
      openBracketEl.classList.replace('expanded', 'collapsed');
      e.target.innerHTML = e.target.classList.contains('array') ? '[...]' : '{...}';
    } else {
      openBracketEl.classList.replace('collapsed', 'expanded');
      e.target.innerHTML = e.target.classList.contains('array') ? '[' : '{';
    }
  }

} // Register the element with the browser

customElements.define('json-tree', JsonTree);
;// CONCATENATED MODULE: ./src/styles/schema-styles.js

/* harmony default export */ const schema_styles = (i`

*, *:before, *:after { box-sizing: border-box; }

.tr {
  display: flex;
  flex: none;
  width: 100%;
  box-sizing: content-box;
  border-bottom: 1px dotted transparent;
}
.td {
  display: block;
  flex: 0 0 auto;
}
.key {
  font-family: var(--font-mono);
  white-space: normal;
  word-break: break-all;
}

.collapsed-descr .key {
  overflow:hidden;
}

.expanded-descr .more-content { display:none; }

.key-descr {
  font-family:var(--font-regular);
  color:var(--light-fg);
  flex-shrink: 1;
  text-overflow: ellipsis;
  overflow: hidden;
  display: none;
}
.expanded-descr .key-descr{
  max-height:auto;
  overflow:hidden;
  display: none;
}
.collapsed-descr .tr {
  max-height:20px;
}

.tr.xxx-of{
  border-top: 1px dotted var(--primary-color);
}

.xxx-of-key {
  font-size: calc(var(--font-size-small) - 2px); 
  font-weight:bold; 
  background-color:var(--primary-color); 
  color:var(--primary-color-invert); 
  border-radius:2px;
  line-height:calc(var(--font-size-small) + 6px);
  padding:0px 5px; 
  margin-bottom:1px; 
  display:inline-block;
}

.xxx-of-descr {
    font-family: var(--font-regular);
    color: var(--primary-color);
    font-size: calc(var(--font-size-small) - 1px);
    margin-left: 2px;
}

.stri, .string, .uri, .url, .byte, .bina, .date, .pass, .ipv4, .ipv4, .uuid, .emai, .host {color:var(--green);}
.inte, .numb, .number, .int6, .int3, .floa, .doub, .deci .blue {color:var(--blue);}
.null {color:var(--red);}
.bool, .boolean{color:var(--orange)}
.enum {color:var(--purple)}
.recu {color:var(--brown)}
.toolbar {
  display:flex;
  width:100%;
  padding: 2px 0;
  color:var(--primary-color);
}
.toolbar-item {
  cursor:pointer;
  padding:5px 0;
  margin:0 2px;
}
.schema-root-type {
  cursor:auto;
  color:var(--fg2);
  font-weight: bold;
  text-transform: uppercase;
}
.schema-root-type.xxx-of {
  display:none;
}
.toolbar-item:first-of-type { margin:0 2px 0 0;}

@media only screen and (min-width: 500px) {
  .key-descr {
    display: block;
  }
  .expanded-descr .key-descr{
    display: block;
  }
}
`);
;// CONCATENATED MODULE: ./src/components/schema-tree.js

 // eslint-disable-line import/extensions






class SchemaTree extends lit_element_s {
  static get properties() {
    return {
      data: {
        type: Object
      },
      schemaExpandLevel: {
        type: Number,
        attribute: 'schema-expand-level'
      },
      schemaDescriptionExpanded: {
        type: String,
        attribute: 'schema-description-expanded'
      },
      allowSchemaDescriptionExpandToggle: {
        type: String,
        attribute: 'allow-schema-description-expand-toggle'
      },
      schemaHideReadOnly: {
        type: String,
        attribute: 'schema-hide-read-only'
      },
      schemaHideWriteOnly: {
        type: String,
        attribute: 'schema-hide-write-only'
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();

    if (!this.schemaExpandLevel || this.schemaExpandLevel < 1) {
      this.schemaExpandLevel = 99999;
    }

    if (!this.schemaDescriptionExpanded || !'true false'.includes(this.schemaDescriptionExpanded)) {
      this.schemaDescriptionExpanded = 'false';
    }

    if (!this.schemaHideReadOnly || !'true false'.includes(this.schemaHideReadOnly)) {
      this.schemaHideReadOnly = 'true';
    }

    if (!this.schemaHideWriteOnly || !'true false'.includes(this.schemaHideWriteOnly)) {
      this.schemaHideWriteOnly = 'true';
    }
  }

  static get styles() {
    return [font_styles, schema_styles, border_styles, i`
      .tree {
        font-size:var(--font-size-small);
        text-align: left;
        direction: ltr;
        line-height:calc(var(--font-size-small) + 6px);
      }
      .tree .tr:hover{
        background-color:var(--hover-color);
      }
      .collapsed-descr .tr {
        max-height:calc(var(--font-size-small) + 8px);
      }
      .collapsed-descr .m-markdown-small p {
        line-height:calc(var(--font-size-small) + 6px);
      }

      .tree .key {
        max-width: 300px;
      }
      .key.deprecated .key-label {
        color: var(--red);
      }
      .tr.expanded:hover > .td.key > .open-bracket {
        color: var(--primary-color);
      }
      .tr.expanded:hover + .inside-bracket {
        border-left: 1px solid var(--fg3);
      }
      .tr.expanded:hover + .inside-bracket + .close-bracket {
        color: var(--primary-color);
      }

      .open-bracket{
        display:inline-block;
        padding: 0 20px 0 0;
        cursor:pointer;
        border: 1px solid transparent;
        border-radius:3px;
      }
      .open-bracket:hover {
        color:var(--primary-color);
        background-color:var(--hover-color);
        border: 1px solid var(--border-color);
      }
      .close-bracket{
        display:inline-block;
        font-family: var(--font-mono);
      }
      .tr.collapsed + .inside-bracket,
      .tr.collapsed + .inside-bracket + .close-bracket{
        display:none;
      }
      .inside-bracket.object,
      .inside-bracket.array {
        border-left: 1px dotted var(--border-color);
      }
      .inside-bracket.xxx-of {
        padding:5px 0px;
        border-style: dotted;
        border-width: 0 0 1px 0;
        border-color:var(--primary-color);
      }`, custom_styles];
  }
  /* eslint-disable indent */


  render() {
    var _this$data, _this$data2, _this$data3;

    return y`
      <div class="tree ${this.schemaDescriptionExpanded === 'true' ? 'expanded-descr' : 'collapsed-descr'}">
        <div class="toolbar">
          <div class="toolbar-item schema-root-type ${((_this$data = this.data) === null || _this$data === void 0 ? void 0 : _this$data['::type']) || ''} "> ${((_this$data2 = this.data) === null || _this$data2 === void 0 ? void 0 : _this$data2['::type']) || ''} </div>
          ${this.allowSchemaDescriptionExpandToggle === 'true' ? y`
              <div style="flex:1"></div>
              <div part="schema-toolbar-item schema-multiline-toggle" class='toolbar-item' @click='${() => {
      this.schemaDescriptionExpanded = this.schemaDescriptionExpanded === 'true' ? 'false' : 'true';
    }}'> 
                ${this.schemaDescriptionExpanded === 'true' ? 'Single line description' : 'Multiline description'}
              </div>
            ` : ''}
        </div>
        ${(_this$data3 = this.data) !== null && _this$data3 !== void 0 && _this$data3['::description'] ? y`<span part="schema-description" class='m-markdown'> ${unsafe_html_o(marked(this.data['::description'] || ''))}</span>` : ''}
        ${this.data ? y`
            ${this.generateTree(this.data['::type'] === 'array' ? this.data['::props'] : this.data, this.data['::type'], this.data['::array-type'] || '')}` : y`<span class='mono-font' style='color:var(--red)'> Schema not found </span>`}
      </div>  
    `;
  }

  generateTree(data, dataType = 'object', arrayType = '', key = '', description = '', schemaLevel = 0, indentLevel = 0, readOrWrite = '') {
    var _data$Type;

    if (this.schemaHideReadOnly === 'true') {
      if (dataType === 'array') {
        if (readOrWrite === 'readonly') {
          return;
        }
      }

      if (data && data['::readwrite'] === 'readonly') {
        return;
      }
    }

    if (this.schemaHideWriteOnly === 'true') {
      if (dataType === 'array') {
        if (readOrWrite === 'writeonly') {
          return;
        }
      }

      if (data && data['::readwrite'] === 'writeonly') {
        return;
      }
    }

    if (!data) {
      return y`<div class="null" style="display:inline;">
        <span class="key-label xxx-of-key"> ${key.replace('::OPTION~', '')}</span>
        ${dataType === 'array' ? y`<span class='mono-font'> [ ] </span>` : dataType === 'object' ? y`<span class='mono-font'> { } </span>` : y`<span class='mono-font'> schema undefined </span>`}
      </div>`;
    }

    if (Object.keys(data).length === 0) {
      return y`<span class="key object">${key}:{ }</span>`;
    }

    let keyLabel = '';
    let keyDescr = '';

    if (key.startsWith('::ONE~OF') || key.startsWith('::ANY~OF')) {
      keyLabel = key.replace('::', '').replace('~', ' ');
    } else if (key.startsWith('::OPTION')) {
      const parts = key.split('~');
      keyLabel = parts[1]; // eslint-disable-line prefer-destructuring

      keyDescr = parts[2]; // eslint-disable-line prefer-destructuring
    } else {
      keyLabel = key;
    }

    const leftPadding = 12;
    const minFieldColWidth = 400 - indentLevel * leftPadding;
    let openBracket = '';
    let closeBracket = '';
    const newSchemaLevel = (_data$Type = data['::type']) !== null && _data$Type !== void 0 && _data$Type.startsWith('xxx-of') ? schemaLevel : schemaLevel + 1; // const newIndentLevel = dataType === 'xxx-of-option' || data['::type'] === 'xxx-of-option' ? indentLevel : (indentLevel + 1);

    const newIndentLevel = dataType === 'xxx-of-option' || data['::type'] === 'xxx-of-option' || key.startsWith('::OPTION') ? indentLevel : indentLevel + 1;

    if (data['::type'] === 'object') {
      if (dataType === 'array') {
        if (schemaLevel < this.schemaExpandLevel) {
          openBracket = y`<span class="open-bracket array-of-object" @click="${this.toggleObjectExpand}">[{</span>`;
        } else {
          openBracket = y`<span class="open-bracket array-of-object" @click="${this.toggleObjectExpand}">[{...}]</span>`;
        }

        closeBracket = '}]';
      } else {
        if (schemaLevel < this.schemaExpandLevel) {
          openBracket = y`<span class="open-bracket object" @click="${this.toggleObjectExpand}">{</span>`;
        } else {
          openBracket = y`<span class="open-bracket object" @click="${this.toggleObjectExpand}">{...}</span>`;
        }

        closeBracket = '}';
      }
    } else if (data['::type'] === 'array') {
      if (dataType === 'array') {
        const arrType = arrayType !== 'object' ? arrayType : '';

        if (schemaLevel < this.schemaExpandLevel) {
          openBracket = y`<span class="open-bracket array-of-array" data-array-type="${arrType}" @click="${this.toggleObjectExpand}">[[ ${arrType} </span>`;
        } else {
          openBracket = y`<span class="open-bracket array-of-array"  data-array-type="${arrType}" @click="${this.toggleObjectExpand}">[[...]]</span>`;
        }

        closeBracket = ']]';
      } else {
        if (schemaLevel < this.schemaExpandLevel) {
          openBracket = y`<span class="open-bracket array" @click="${this.toggleObjectExpand}">[</span>`;
        } else {
          openBracket = y`<span class="open-bracket array" @click="${this.toggleObjectExpand}">[...]</span>`;
        }

        closeBracket = ']';
      }
    }

    if (typeof data === 'object') {
      var _data$Type2;

      return y`
        <div class="tr ${schemaLevel < this.schemaExpandLevel || (_data$Type2 = data['::type']) !== null && _data$Type2 !== void 0 && _data$Type2.startsWith('xxx-of') ? 'expanded' : 'collapsed'} ${data['::type'] || 'no-type-info'}" title="${data['::deprecated'] ? 'Deprecated' : ''}">
          <div class="td key ${data['::deprecated'] ? 'deprecated' : ''}" style='min-width:${minFieldColWidth}px'>
            ${data['::type'] === 'xxx-of-option' || data['::type'] === 'xxx-of-array' || key.startsWith('::OPTION') ? y`<span class='key-label xxx-of-key'> ${keyLabel}</span><span class="xxx-of-descr">${keyDescr}</span>` : keyLabel === '::props' || keyLabel === '::ARRAY~OF' ? '' : schemaLevel > 0 ? y`<span class="key-label" title="${readOrWrite === 'readonly' ? 'Read-Only' : readOrWrite === 'writeonly' ? 'Write-Only' : ''}">
                      ${data['::deprecated'] ? '✗' : ''}
                      ${keyLabel.replace(/\*$/, '')}${keyLabel.endsWith('*') ? y`<span style="color:var(--red)">*</span>` : ''}${readOrWrite === 'readonly' ? y` 🆁` : readOrWrite === 'writeonly' ? y` 🆆` : readOrWrite}:
                    </span>` : ''}
            ${data['::type'] === 'xxx-of' && dataType === 'array' ? y`<span style="color:var(--primary-color)">ARRAY</span>` : ''} 
            ${openBracket}
          </div>
          <div class='td key-descr m-markdown-small'>${unsafe_html_o(marked(description || ''))}</div>
        </div>
        <div class='inside-bracket ${data['::type'] || 'no-type-info'}' style='padding-left:${data['::type'] === 'xxx-of-option' || data['::type'] === 'xxx-of-array' ? 0 : leftPadding}px;'>
          ${Array.isArray(data) && data[0] ? y`${this.generateTree(data[0], 'xxx-of-option', '', '::ARRAY~OF', '', newSchemaLevel, newIndentLevel, data[0]['::readwrite'])}` : y`
              ${Object.keys(data).map(dataKey => y`
                ${['::title', '::description', '::type', '::props', '::deprecated', '::array-type', '::readwrite', '::dataTypeLabel'].includes(dataKey) ? data[dataKey]['::type'] === 'array' || data[dataKey]['::type'] === 'object' ? y`${this.generateTree(data[dataKey]['::type'] === 'array' ? data[dataKey]['::props'] : data[dataKey], data[dataKey]['::type'], data[dataKey]['::array-type'] || '', dataKey, data[dataKey]['::description'], newSchemaLevel, newIndentLevel, data[dataKey]['::readwrite'] ? data[dataKey]['::readwrite'] : '')}` : '' : y`${this.generateTree(data[dataKey]['::type'] === 'array' ? data[dataKey]['::props'] : data[dataKey], data[dataKey]['::type'], data[dataKey]['::array-type'] || '', dataKey, data[dataKey]['::description'], newSchemaLevel, newIndentLevel, data[dataKey]['::readwrite'] ? data[dataKey]['::readwrite'] : '')}`}
              `)}
            `}
        </div>
        ${data['::type'] && data['::type'].includes('xxx-of') ? '' : y`<div class='close-bracket'> ${closeBracket} </div>`}
      `;
    } // For Primitive types and array of Primitives


    const [type, primitiveReadOrWrite, constraint, defaultValue, allowedValues, pattern, schemaDescription, schemaTitle, deprecated] = data.split('~|~');

    if (primitiveReadOrWrite === '🆁' && this.schemaHideReadOnly === 'true') {
      return;
    }

    if (primitiveReadOrWrite === '🆆' && this.schemaHideWriteOnly === 'true') {
      return;
    }

    const dataTypeCss = type.replace(/┃.*/g, '').replace(/[^a-zA-Z0-9+]/g, '').substring(0, 4).toLowerCase();
    let finalReadWriteText = '';
    let finalReadWriteTip = '';

    if (dataType === 'array') {
      if (readOrWrite === 'readonly') {
        finalReadWriteText = '🆁';
        finalReadWriteTip = 'Read-Only';
      } else if (readOrWrite === 'writeonly') {
        finalReadWriteText = '🆆';
        finalReadWriteTip = 'Write-Only';
      }
    } else if (primitiveReadOrWrite === '🆁') {
      finalReadWriteText = '🆁';
      finalReadWriteTip = 'Read-Only';
    } else if (primitiveReadOrWrite === '🆆') {
      finalReadWriteText = '🆆';
      finalReadWriteTip = 'Write-Only';
    }

    return y`
      <div class = "tr primitive" title="${deprecated ? 'Deprecated' : ''}">
        <div class="td key ${deprecated}" style='min-width:${minFieldColWidth}px'>
          ${deprecated ? y`<span style='color:var(--red);'>✗</span>` : ''}
          ${keyLabel.endsWith('*') ? y`<span class="key-label">${keyLabel.substring(0, keyLabel.length - 1)}</span><span style='color:var(--red);'>*</span>:` : key.startsWith('::OPTION') ? y`<span class='key-label xxx-of-key'>${keyLabel}</span><span class="xxx-of-descr">${keyDescr}</span>` : y`<span class="key-label">${keyLabel}:</span>`}
          <span class="${dataTypeCss}" title="${finalReadWriteTip}"> 
            ${dataType === 'array' ? `[${type}]` : `${type}`}
            ${finalReadWriteText}
          </span>
        </div>
        <div class='td key-descr'>
          ${dataType === 'array' ? y`<span class="m-markdown-small">${unsafe_html_o(marked(description))}</span>` : ''}
          ${schemaDescription ? y`<span class="m-markdown-small">
              ${unsafe_html_o(marked(`${schemaTitle ? `**${schemaTitle}:**` : ''} ${schemaDescription} ${constraint || defaultValue || allowedValues || pattern ? '<span class="more-content">⤵</span>' : ''}`))}
              </span>` : schemaTitle ? y`${schemaTitle} ${constraint || defaultValue || allowedValues || pattern ? y`<span class="more-content">⤵</span>` : ''}` : ''}
          ${constraint ? y`<div style='display:inline-block; line-break:anywhere; margin-right:8px'><span class='bold-text'>Constraints: </span>${constraint}</div>` : ''}
          ${defaultValue ? y`<div style='display:inline-block; line-break:anywhere; margin-right:8px'><span class='bold-text'>Default: </span>${defaultValue}</div>` : ''}
          ${allowedValues ? y`<div style='display:inline-block; line-break:anywhere; margin-right:8px'><span class='bold-text'>Allowed: </span>${allowedValues}</div>` : ''}
          ${pattern ? y`<div style='display:inline-block; line-break: anywhere; margin-right:8px'><span class='bold-text'>Pattern: </span>${pattern}</div>` : ''}
        </div>
      </div>
    `;
  }
  /* eslint-enable indent */


  toggleObjectExpand(e) {
    const rowEl = e.target.closest('.tr');

    if (rowEl.classList.contains('expanded')) {
      rowEl.classList.replace('expanded', 'collapsed');
      e.target.innerHTML = e.target.classList.contains('array-of-object') ? '[{...}]' : e.target.classList.contains('array-of-array') ? '[[...]]' : e.target.classList.contains('array') ? '[...]' : '{...}';
    } else {
      rowEl.classList.replace('collapsed', 'expanded');
      e.target.innerHTML = e.target.classList.contains('array-of-object') ? '[{' : e.target.classList.contains('array-of-array') ? `[[ ${e.target.dataset.arrayType}` : e.target.classList.contains('object') ? '{' : '[';
    }
  }

}
customElements.define('schema-tree', SchemaTree);
;// CONCATENATED MODULE: ./src/components/tag-input.js

class TagInput extends lit_element_s {
  /* eslint-disable indent */
  render() {
    let tagItemTmpl = '';

    if (Array.isArray(this.value)) {
      tagItemTmpl = y`${this.value.filter(v => v.trim() !== '').map(v => y`<span class='tag'>${v}</span>`)}`;
    }

    return y`
      <div class='tags' tabindex="0">
        ${tagItemTmpl}
        <input type="text" class='editor' @paste="${e => this.afterPaste(e)}" @keydown="${this.afterKeyDown}" @blur="${this.onBlur}" placeholder="${this.placeholder || ''}">
      </div>
    `;
  }
  /* eslint-enable indent */


  static get properties() {
    return {
      placeholder: {
        type: String
      },
      value: {
        type: Array,
        attribute: 'value'
      }
    };
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'value') {
      if (newVal && oldVal !== newVal) {
        this.value = newVal.split(',').filter(v => v.trim() !== '');
      }
    }

    super.attributeChangedCallback(name, oldVal, newVal);
  }

  afterPaste(e) {
    const clipboardData = e.clipboardData || window.clipboardData;
    const pastedData = clipboardData.getData('Text');
    const pastedArray = pastedData ? pastedData.split(',').filter(v => v.trim() !== '') : '';

    if (pastedArray) {
      if (Array.isArray(this.value)) {
        this.value = [...this.value, ...pastedArray];
      } else {
        this.value = pastedArray;
      }
    }

    e.preventDefault();
  }

  afterKeyDown(e) {
    if (e.keyCode === 13) {
      e.stopPropagation();
      e.preventDefault();

      if (e.target.value) {
        if (Array.isArray(this.value)) {
          this.value = [...this.value, e.target.value];
        } else {
          this.value = [e.target.value];
        }

        e.target.value = '';
      }
    } else if (e.keyCode === 8) {
      if (e.target.value.length === 0) {
        if (Array.isArray(this.value) && this.value.length > 0) {
          this.value.splice(-1);
          this.value = [...this.value];
        }
      }
    }
  }

  onBlur(e) {
    if (e.target.value) {
      if (Array.isArray(this.value)) {
        this.value = [...this.value, e.target.value];
      } else {
        this.value = [e.target.value];
      }

      e.target.value = '';
    }
  }

  static get styles() {
    return [i`
      .tags{
        display:flex;
        flex-wrap: wrap;
        outline: none;
        padding:0;
        border-radius:var(--border-radius);
        border:1px solid var(--border-color);
        cursor:text;
        overflow:hidden;
        background:var(--input-bg);
      }
      .tag, .editor {
        padding:3px;
        margin:2px;
      }
      .tag{
        border:1px solid var(--border-color);
        background-color:var(--bg3);
        color:var(--fg3);
        border-radius:var(--border-radius);
        word-break: break-all;
        font-size: var(--font-size-small);
      }
      .tag:hover ~ #cursor {
        display: block;
      }
      .editor{
        flex:1;
        border:1px solid transparent;
        color:var(--fg);
        min-width:60px;
        outline: none;
        line-height: inherit;
        font-family:inherit;
        background:transparent;
        font-size: calc(var(--font-size-small) + 1px);
      }
      .editor::placeholder {
        color: var(--placeholder-color);
        opacity:1;
      }
    `];
  }

} // Register the element with the browser

customElements.define('tag-input', TagInput);
;// CONCATENATED MODULE: ./src/components/api-request.js

 // eslint-disable-line import/extensions

 // eslint-disable-line import/extensions

 // eslint-disable-line import/extensions

















class ApiRequest extends lit_element_s {
  constructor() {
    super();
    this.responseMessage = '';
    this.responseStatus = 'success';
    this.responseHeaders = '';
    this.responseText = '';
    this.responseUrl = '';
    this.curlSyntax = '';
    this.activeResponseTab = 'response'; // allowed values: response, headers, curl

    this.selectedRequestBodyType = '';
    this.selectedRequestBodyExample = '';
    this.activeParameterSchemaTabs = {};
  }

  static get properties() {
    return {
      serverUrl: {
        type: String,
        attribute: 'server-url'
      },
      servers: {
        type: Array
      },
      method: {
        type: String
      },
      path: {
        type: String
      },
      security: {
        type: Array
      },
      parameters: {
        type: Array
      },
      request_body: {
        type: Object
      },
      api_keys: {
        type: Array
      },
      parser: {
        type: Object
      },
      accept: {
        type: String
      },
      callback: {
        type: String
      },
      webhook: {
        type: String
      },
      responseMessage: {
        type: String,
        attribute: false
      },
      responseText: {
        type: String,
        attribute: false
      },
      responseHeaders: {
        type: String,
        attribute: false
      },
      responseStatus: {
        type: String,
        attribute: false
      },
      responseUrl: {
        type: String,
        attribute: false
      },
      fillRequestFieldsWithExample: {
        type: String,
        attribute: 'fill-request-fields-with-example'
      },
      allowTry: {
        type: String,
        attribute: 'allow-try'
      },
      renderStyle: {
        type: String,
        attribute: 'render-style'
      },
      schemaStyle: {
        type: String,
        attribute: 'schema-style'
      },
      activeSchemaTab: {
        type: String,
        attribute: 'active-schema-tab'
      },
      activeParameterSchemaTabs: {
        type: Object,
        converter: {
          fromAttribute: attr => JSON.parse(attr),
          toAttribute: prop => JSON.stringify(prop)
        },
        attribute: 'active-parameter-schema-tabs'
      },
      schemaExpandLevel: {
        type: Number,
        attribute: 'schema-expand-level'
      },
      schemaDescriptionExpanded: {
        type: String,
        attribute: 'schema-description-expanded'
      },
      allowSchemaDescriptionExpandToggle: {
        type: String,
        attribute: 'allow-schema-description-expand-toggle'
      },
      schemaHideReadOnly: {
        type: String,
        attribute: 'schema-hide-read-only'
      },
      schemaHideWriteOnly: {
        type: String,
        attribute: 'schema-hide-write-only'
      },
      fetchCredentials: {
        type: String,
        attribute: 'fetch-credentials'
      },
      // properties for internal tracking
      activeResponseTab: {
        type: String
      },
      // internal tracking of response-tab not exposed as a attribute
      selectedRequestBodyType: {
        type: String,
        attribute: 'selected-request-body-type'
      },
      // internal tracking of selected request-body type
      selectedRequestBodyExample: {
        type: String,
        attribute: 'selected-request-body-example'
      } // internal tracking of selected request-body example

    };
  }

  static get styles() {
    return [table_styles, input_styles, font_styles, flex_styles, border_styles, tab_styles, prism_styles, i`
        *, *:before, *:after { box-sizing: border-box; }
    
        .read-mode {
          margin-top: 24px;
        }
        .param-name,
        .param-type {
          margin: 1px 0;
          text-align: right;
          line-height: var(--font-size-small);
        }
        .param-name {
          color: var(--fg); 
          font-family: var(--font-mono);
        }
        .param-name.deprecated { 
          color: var(--red);
        }
        .param-type{
          color: var(--light-fg); 
          font-family: var(--font-regular);
        }
        .param-constraint{
          min-width:100px;
        }
        .param-constraint:empty{
          display:none;
        }
        .top-gap{margin-top:24px;}

        .textarea {
          min-height:220px; 
          padding:5px;
          resize:vertical;
          direction: ltr;
        }
        .example:first-child {
          margin-top: -9px;
        }

        .response-message{
          font-weight:bold;
          text-overflow: ellipsis;
        }
        .response-message.error {
          color:var(--red);
        }
        .response-message.success {
          color:var(--blue);
        }

        .file-input-container {
          align-items:flex-end;
        }
        .file-input-container .input-set:first-child .file-input-remove-btn{
          visibility:hidden;
        }

        .file-input-remove-btn{
          font-size:16px;
          color:var(--red);
          outline: none;
          border: none;
          background:none;
          cursor:pointer;
        }

        .v-tab-btn {
          font-size: var(--smal-font-size);
          height:24px; 
          border:none; 
          background:none; 
          opacity: 0.3;
          cursor: pointer;
          padding: 4px 8px;
        }
        .v-tab-btn.active {
          font-weight: bold;
          background: var(--bg);
          opacity: 1;
        }

        @media only screen and (min-width: 768px) {
          .textarea {
            padding:8px;
          }
        }

        @media only screen and (max-width: 470px) {
          .hide-in-small-screen {
            display:none;
          }
        }
      `, custom_styles];
  }

  render() {
    return y`
    <div class="col regular-font request-panel ${'read focused'.includes(this.renderStyle) || this.callback === 'true' ? 'read-mode' : 'view-mode'}">
      <div class=" ${this.callback === 'true' ? 'tiny-title' : 'req-res-title'} "> 
        ${this.callback === 'true' ? 'CALLBACK REQUEST' : 'REQUEST'}
      </div>
      <div>
        ${guard_i([this.method, this.path, this.allowTry, this.parameters, this.activeParameterSchemaTabs], () => this.inputParametersTemplate('path'))}
        ${guard_i([this.method, this.path, this.allowTry, this.parameters, this.activeParameterSchemaTabs], () => this.inputParametersTemplate('query'))}
        ${this.requestBodyTemplate()}
        ${guard_i([this.method, this.path, this.allowTry, this.parameters, this.activeParameterSchemaTabs], () => this.inputParametersTemplate('header'))}
        ${guard_i([this.method, this.path, this.allowTry, this.parameters, this.activeParameterSchemaTabs], () => this.inputParametersTemplate('cookie'))}
        ${this.allowTry === 'false' ? '' : y`${this.apiCallTemplate()}`}
      </div>  
    </div>
    `;
  }
  /*
  async updated(changedProperties) {
    // In focused mode after rendering the request component, update the text-areas(which contains examples) using
    // the original values from hidden textareas
    // This is done coz, user may update the dom by editing the textarea's and once the DOM is updated externally change detection wont happen, therefore update the values manually
    if (this.renderStyle === 'focused') {
      if (changedProperties.size === 1 && changedProperties.has('activeSchemaTab')) {
        // dont update example as only tabs is switched
      } else {
        this.requestUpdate();
      }
    }
  }
  */


  async saveExampleState() {
    if (this.renderStyle === 'focused') {
      const reqBodyTextAreaEls = [...this.shadowRoot.querySelectorAll('textarea.request-body-param-user-input')];
      reqBodyTextAreaEls.forEach(el => {
        el.dataset.user_example = el.value;
      });
      const exampleTextAreaEls = [...this.shadowRoot.querySelectorAll('textarea[data-ptype="form-data"]')];
      exampleTextAreaEls.forEach(el => {
        el.dataset.user_example = el.value;
      });
      this.requestUpdate();
    }
  }

  async updateExamplesFromDataAttr() {
    // In focused mode after rendering the request component, update the text-areas(which contains examples) using
    // the original values from hidden textareas
    // This is done coz, user may update the dom by editing the textarea's and once the DOM is updated externally change detection wont happen, therefore update the values manually
    if (this.renderStyle === 'focused') {
      const reqBodyTextAreaEls = [...this.shadowRoot.querySelectorAll('textarea.request-body-param-user-input')];
      reqBodyTextAreaEls.forEach(el => {
        el.value = el.dataset.user_example || el.dataset.example;
      });
      const exampleTextAreaEls = [...this.shadowRoot.querySelectorAll('textarea[data-ptype="form-data"]')];
      exampleTextAreaEls.forEach(el => {
        el.value = el.dataset.user_example || el.dataset.example;
      });
      this.requestUpdate();
    }
  }

  renderExample(example, paramType, paramName) {
    var _example$value, _example$value2;

    return y`
      ${paramType === 'array' ? '[' : ''}
      <a
        part="anchor anchor-param-example"
        class="${this.allowTry === 'true' ? '' : 'inactive-link'}"
        data-example-type="${paramType === 'array' ? paramType : 'string'}"
        data-example="${example.value && Array.isArray(example.value) ? (_example$value = example.value) === null || _example$value === void 0 ? void 0 : _example$value.join('~|~') : example.value || ''}"
        @click="${e => {
      const inputEl = e.target.closest('table').querySelector(`[data-pname="${paramName}"]`);

      if (inputEl) {
        if (e.target.dataset.exampleType === 'array') {
          inputEl.value = e.target.dataset.example.split('~|~');
        } else {
          inputEl.value = e.target.dataset.example;
        }
      }
    }}"
      >
        ${example.value && Array.isArray(example.value) ? (_example$value2 = example.value) === null || _example$value2 === void 0 ? void 0 : _example$value2.join(', ') : example.value || '∅'}
      </a>
      ${paramType === 'array' ? '] ' : ''}
    `;
  }

  renderShortFormatExamples(examples, paramType, paramName) {
    return y`${examples.map((x, i) => y`
      ${i === 0 ? '' : '┃'}
      ${this.renderExample(x, paramType, paramName)}`)}`;
  }

  renderLongFormatExamples(exampleList, paramType, paramName) {
    return y` <ul style="list-style-type: disclosure-closed;">
      ${exampleList.map(v => {
      var _v$summary, _v$description;

      return y`
          <li>
            ${this.renderExample(v, paramType, paramName)}
            ${((_v$summary = v.summary) === null || _v$summary === void 0 ? void 0 : _v$summary.length) > 0 ? y`<span>&lpar;${v.summary}&rpar;</span>` : ''}
            ${((_v$description = v.description) === null || _v$description === void 0 ? void 0 : _v$description.length) > 0 ? y`<p>${unsafe_html_o(marked(v.description))}</p>` : ''}
          </li>
        `;
    })}
    </ul>`;
  }
  /* eslint-disable indent */


  exampleListTemplate(paramName, paramType, exampleList = []) {
    return y` ${exampleList.length > 0 ? y`<span style="font-weight:bold">Examples: </span>
          ${anyExampleWithSummaryOrDescription(exampleList) ? this.renderLongFormatExamples(exampleList, paramType, paramName) : this.renderShortFormatExamples(exampleList, paramType, paramName)}` : ''}`;
  }

  inputParametersTemplate(paramType) {
    const filteredParams = this.parameters ? this.parameters.filter(param => param.in === paramType) : [];

    if (filteredParams.length === 0) {
      return '';
    }

    let title = '';

    if (paramType === 'path') {
      title = 'PATH PARAMETERS';
    } else if (paramType === 'query') {
      title = 'QUERY-STRING PARAMETERS';
    } else if (paramType === 'header') {
      title = 'REQUEST HEADERS';
    } else if (paramType === 'cookie') {
      title = 'COOKIES';
    }

    const tableRows = [];

    for (const param of filteredParams) {
      const [declaredParamSchema, serializeStyle, mimeTypeElem] = getSchemaFromParam(param);

      if (!declaredParamSchema) {
        continue; // eslint-disable-line no-continue
      }

      const paramSchema = getTypeInfo(declaredParamSchema);

      if (!paramSchema) {
        continue; // eslint-disable-line no-continue
      }

      const schemaAsObj = schemaInObjectNotation(declaredParamSchema, {}); // let exampleVal = '';
      // let exampleList = [];

      let paramStyle = 'form';
      let paramExplode = true;
      let paramAllowReserved = false;

      if (paramType === 'query') {
        if (param.style && 'form spaceDelimited pipeDelimited'.includes(param.style)) {
          paramStyle = param.style;
        } else if (serializeStyle) {
          paramStyle = serializeStyle;
        }

        if (typeof param.explode === 'boolean') {
          paramExplode = param.explode;
        }

        if (typeof param.allowReserved === 'boolean') {
          paramAllowReserved = param.allowReserved;
        }
      } // openapi 3.1.0 spec based examples (which must be Object(string : { value:any, summary?: string, description?: string})


      const example = normalizeExamples(param.examples || nestExampleIfPresent(param.example) || nestExampleIfPresent(mimeTypeElem === null || mimeTypeElem === void 0 ? void 0 : mimeTypeElem.example) || (mimeTypeElem === null || mimeTypeElem === void 0 ? void 0 : mimeTypeElem.examples) || paramSchema.examples || nestExampleIfPresent(paramSchema.example), paramSchema.type);

      if (!example.exampleVal && paramSchema.type === 'object') {
        example.exampleVal = generateExample(declaredParamSchema, serializeStyle || 'json', '', '', this.callback === 'true' || this.webhook === 'true' ? true : false, // eslint-disable-line no-unneeded-ternary
        this.callback === 'true' || this.webhook === 'true' ? false : true, // eslint-disable-line no-unneeded-ternary
        true, 'text', false)[0].exampleValue;
      }

      const labelColWidth = 'read focused'.includes(this.renderStyle) ? '200px' : '160px';
      tableRows.push(y`
      <tr title="${param.deprecated ? 'Deprecated' : ''}"> 
        <td rowspan="${this.allowTry === 'true' ? '1' : '2'}" style="width:${labelColWidth}; min-width:100px;">
          <div class="param-name ${param.deprecated ? 'deprecated' : ''}" >
            ${param.deprecated ? y`<span style='color:var(--red);'>✗</span>` : ''}
            ${param.required ? y`<span style='color:var(--red)'>*</span>` : ''}
            ${param.name}
          </div>
          <div class="param-type">
            ${paramSchema.type === 'array' ? `${paramSchema.arrayType}` : `${paramSchema.format ? paramSchema.format : paramSchema.type}`}
          </div>
        </td>  
        ${this.allowTry === 'true' ? y`
            <td style="min-width:100px;" colspan="${paramSchema.default || paramSchema.constrain || paramSchema.allowedValues || paramSchema.pattern ? '1' : '2'}">
              ${paramSchema.type === 'array' ? y`
                  <tag-input class="request-param" 
                    style = "width:100%" 
                    data-ptype = "${paramType}"
                    data-pname = "${param.name}"
                    data-example = "${Array.isArray(example.exampleVal) ? example.exampleVal.join('~|~') : example.exampleVal}"
                    data-param-serialize-style = "${paramStyle}"
                    data-param-serialize-explode = "${paramExplode}"
                    data-param-allow-reserved = "${paramAllowReserved}"
                    data-x-fill-example = "${param['x-fill-example'] || 'yes'}"
                    data-array = "true"
                    placeholder = "add-multiple &#x21a9;"
                    .value="${param['x-fill-example'] === 'no' ? [] : live_l(this.fillRequestFieldsWithExample === 'true' ? Array.isArray(example.exampleVal) ? example.exampleVal : [example.exampleVal] : [])}"
                  >
                  </tag-input>` : paramSchema.type === 'object' ? y`
                    <div class="tab-panel col" style="border-width:0 0 1px 0;">
                      <div class="tab-buttons row" @click="${e => {
        if (e.target.tagName.toLowerCase() === 'button') {
          const newState = { ...this.activeParameterSchemaTabs
          };
          newState[param.name] = e.target.dataset.tab;
          this.activeParameterSchemaTabs = newState;
        }
      }}">
                        <button class="tab-btn ${this.activeParameterSchemaTabs[param.name] === 'example' ? 'active' : ''}" data-tab = 'example'>EXAMPLE </button>
                        <button class="tab-btn ${this.activeParameterSchemaTabs[param.name] !== 'example' ? 'active' : ''}" data-tab = 'schema'>SCHEMA</button>
                      </div>
                      ${this.activeParameterSchemaTabs[param.name] === 'example' ? y`<div class="tab-content col">
                          <textarea 
                            class = "textarea request-param"
                            part = "textarea textarea-param"
                            data-ptype = "${paramType}-object"
                            data-pname = "${param.name}"
                            data-example = "${example.exampleVal}"
                            data-param-serialize-style = "${paramStyle}"
                            data-param-serialize-explode = "${paramExplode}"
                            data-param-allow-reserved = "${paramAllowReserved}"
                            data-x-fill-example = "${param['x-fill-example'] || 'yes'}"
                            spellcheck = "false"
                            .textContent="${param['x-fill-example'] === 'no' ? '' : live_l(this.fillRequestFieldsWithExample === 'true' ? example.exampleVal : '')}"
                            style = "resize:vertical; width:100%; height: ${'read focused'.includes(this.renderStyle) ? '180px' : '120px'};"
                          ></textarea>
                        </div>` : y`
                          <div class="tab-content col">
                            <schema-tree
                              class = 'json'
                              style = 'display: block'
                              .data = '${schemaAsObj}'
                              schema-expand-level = "${this.schemaExpandLevel}"
                              schema-description-expanded = "${this.schemaDescriptionExpanded}"
                              allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
                              schema-hide-read-only = "${this.schemaHideReadOnly.includes(this.method)}"
                              schema-hide-write-only = "${this.schemaHideWriteOnly.includes(this.method)}"
                              exportparts = "wrap-request-btn:wrap-request-btn, btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
                                file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
                                anchor:anchor, anchor-param-example:anchor-param-example"
                            > </schema-tree>
                          </div>`}
                    </div>` : y`
                    <input type="${paramSchema.format === 'password' ? 'password' : 'text'}" spellcheck="false" style="width:100%" 
                      class="request-param"
                      part="textbox textbox-param"
                      data-ptype="${paramType}"
                      data-pname="${param.name}" 
                      data-example="${Array.isArray(example.exampleVal) ? example.exampleVal.join('~|~') : example.exampleVal}"
                      data-param-allow-reserved = "${paramAllowReserved}"
                      data-x-fill-example = "${param['x-fill-example'] || 'yes'}"
                      data-array="false"
                      .value="${param['x-fill-example'] === 'no' ? '' : live_l(this.fillRequestFieldsWithExample === 'true' ? example.exampleVal : '')}"
                    />`}
            </td>` : ''}
        ${paramSchema.default || paramSchema.constrain || paramSchema.allowedValues || paramSchema.pattern ? y`
            <td colspan="${this.allowTry === 'true' ? '1' : '2'}">
              <div class="param-constraint">
                ${paramSchema.default ? y`<span style="font-weight:bold">Default: </span>${paramSchema.default}<br/>` : ''}
                ${paramSchema.pattern ? y`<span style="font-weight:bold">Pattern: </span>${paramSchema.pattern}<br/>` : ''}
                ${paramSchema.constrain ? y`${paramSchema.constrain}<br/>` : ''}
                ${paramSchema.allowedValues && paramSchema.allowedValues.split('┃').map((v, i) => y`
                  ${i > 0 ? '┃' : y`<span style="font-weight:bold">Allowed: </span>`}
                  ${y`
                    <a part="anchor anchor-param-constraint" class = "${this.allowTry === 'true' ? '' : 'inactive-link'}"
                      data-type="${paramSchema.type === 'array' ? paramSchema.type : 'string'}"
                      data-enum="${v.trim()}"
                      @click="${e => {
        const inputEl = e.target.closest('table').querySelector(`[data-pname="${param.name}"]`);

        if (inputEl) {
          if (e.target.dataset.type === 'array') {
            inputEl.value = [e.target.dataset.enum];
          } else {
            inputEl.value = e.target.dataset.enum;
          }
        }
      }}"
                    >${v}</a>`}`)}
              </div>
            </td>` : y`<td></td>`}
      </tr>
      <tr>
        ${this.allowTry === 'true' ? y`<td style="border:none"> </td>` : ''}
        <td colspan="2" style="border:none">
          <span class="m-markdown-small">${unsafe_html_o(marked(param.description || ''))}</span>
          ${this.exampleListTemplate.call(this, param.name, paramSchema.type, example.exampleList)}
        </td>
      </tr>
    `);
    }

    return y`
    <div class="table-title top-gap">${title}</div>
    <div style="display:block; overflow-x:auto; max-width:100%;">
      <table role="presentation" class="m-table" style="width:100%; word-break:break-word;">
        ${tableRows}
      </table>
    </div>`;
  } // This method is called before navigation change in focusd mode


  async beforerNavigationFocusedMode() {// this.saveExampleState();
  } // This method is called after navigation change in focusd mode


  async afterNavigationFocusedMode() {
    this.selectedRequestBodyType = '';
    this.selectedRequestBodyExample = '';
    this.updateExamplesFromDataAttr();
    this.clearResponseData();
  } // Request-Body Event Handlers


  onSelectExample(e) {
    this.selectedRequestBodyExample = e.target.value;
    const exampleDropdownEl = e.target;
    window.setTimeout(selectEl => {
      const readOnlyExampleEl = selectEl.closest('.example-panel').querySelector('.request-body-param');
      const userInputExampleTextareaEl = selectEl.closest('.example-panel').querySelector('.request-body-param-user-input');
      userInputExampleTextareaEl.value = readOnlyExampleEl.innerText;
    }, 0, exampleDropdownEl);
  }

  onMimeTypeChange(e) {
    this.selectedRequestBodyType = e.target.value;
    const mimeDropdownEl = e.target;
    this.selectedRequestBodyExample = '';
    window.setTimeout(selectEl => {
      const readOnlyExampleEl = selectEl.closest('.request-body-container').querySelector('.request-body-param');

      if (readOnlyExampleEl) {
        const userInputExampleTextareaEl = selectEl.closest('.request-body-container').querySelector('.request-body-param-user-input');
        userInputExampleTextareaEl.value = readOnlyExampleEl.innerText;
      }
    }, 0, mimeDropdownEl);
  }

  requestBodyTemplate() {
    if (!this.request_body) {
      return '';
    }

    if (Object.keys(this.request_body).length === 0) {
      return '';
    } // Variable to store partial HTMLs


    let reqBodyTypeSelectorHtml = '';
    let reqBodyFileInputHtml = '';
    let reqBodyFormHtml = '';
    let reqBodySchemaHtml = '';
    let reqBodyExampleHtml = '';
    const requestBodyTypes = [];
    const {
      content
    } = this.request_body;

    for (const mimeType in content) {
      requestBodyTypes.push({
        mimeType,
        schema: content[mimeType].schema,
        example: content[mimeType].example,
        examples: content[mimeType].examples
      });

      if (!this.selectedRequestBodyType) {
        this.selectedRequestBodyType = mimeType;
      }
    } // MIME Type selector


    reqBodyTypeSelectorHtml = requestBodyTypes.length === 1 ? '' : y`
        <select style="min-width:100px; max-width:100%;  margin-bottom:-1px;" @change = '${e => this.onMimeTypeChange(e)}'>
          ${requestBodyTypes.map(reqBody => y`
            <option value = '${reqBody.mimeType}' ?selected = '${reqBody.mimeType === this.selectedRequestBodyType}'>
              ${reqBody.mimeType}
            </option> `)}
        </select>
      `; // For Loop - Main

    requestBodyTypes.forEach(reqBody => {
      let schemaAsObj;
      let reqBodyExamples = [];

      if (this.selectedRequestBodyType.includes('json') || this.selectedRequestBodyType.includes('xml') || this.selectedRequestBodyType.includes('text') || this.selectedRequestBodyType.includes('jose')) {
        // Generate Example
        if (reqBody.mimeType === this.selectedRequestBodyType) {
          reqBodyExamples = generateExample(reqBody.schema, reqBody.mimeType, reqBody.examples, reqBody.example, this.callback === 'true' || this.webhook === 'true' ? true : false, // eslint-disable-line no-unneeded-ternary
          this.callback === 'true' || this.webhook === 'true' ? false : true, // eslint-disable-line no-unneeded-ternary
          'text', false);

          if (!this.selectedRequestBodyExample) {
            this.selectedRequestBodyExample = reqBodyExamples.length > 0 ? reqBodyExamples[0].exampleId : '';
          }

          reqBodyExampleHtml = y`
            ${reqBodyExampleHtml}
            <div class = 'example-panel border-top pad-top-8'>
              ${reqBodyExamples.length === 1 ? '' : y`
                  <select style="min-width:100px; max-width:100%;  margin-bottom:-1px;" @change='${e => this.onSelectExample(e)}'>
                    ${reqBodyExamples.map(v => y`<option value="${v.exampleId}" ?selected=${v.exampleId === this.selectedRequestBodyExample} > 
                      ${v.exampleSummary.length > 80 ? v.exampleId : v.exampleSummary ? v.exampleSummary : v.exampleId} 
                    </option>`)}
                  </select>
                `}
              ${reqBodyExamples.filter(v => v.exampleId === this.selectedRequestBodyExample).map(v => y`
                <div class="example ${v.exampleId === this.selectedRequestBodyExample ? 'example-selected' : ''}" data-example = '${v.exampleId}'>
                  ${v.exampleSummary && v.exampleSummary.length > 80 ? y`<div style="padding: 4px 0"> ${v.exampleSummary} </div>` : ''}
                  ${v.exampleDescription ? y`<div class="m-markdown-small" style="padding: 4px 0"> ${unsafe_html_o(marked(v.exampleDescription || ''))} </div>` : ''}
                  <!-- This pre(hidden) is to store the original example value, this will remain unchanged when users switches from one example to another, its is used to populate the editable textarea -->
                  <pre 
                    class = "textarea is-hidden request-body-param ${reqBody.mimeType.substring(reqBody.mimeType.indexOf('/') + 1)}" 
                    spellcheck = "false"
                    data-ptype = "${reqBody.mimeType}" 
                    style="width:100%; resize:vertical; display:none"
                  >${v.exampleFormat === 'text' ? v.exampleValue : JSON.stringify(v.exampleValue, null, 2)}</pre>

                  <!-- this textarea is for user to edit the example -->
                  <textarea 
                    class = "textarea request-body-param-user-input"
                    part = "textarea textarea-param"
                    spellcheck = "false"
                    data-ptype = "${reqBody.mimeType}" 
                    data-example = "${v.exampleFormat === 'text' ? v.exampleValue : JSON.stringify(v.exampleValue, null, 2)}"
                    data-example-format = "${v.exampleFormat}"
                    style="width:100%; resize:vertical;"
                    .textContent = "${this.fillRequestFieldsWithExample === 'true' ? v.exampleFormat === 'text' ? v.exampleValue : JSON.stringify(v.exampleValue, null, 2) : ''}"
                  ></textarea>
                </div>  
              `)}

            </div>
          `;
        }
      } else if (this.selectedRequestBodyType.includes('form-urlencoded') || this.selectedRequestBodyType.includes('form-data')) {
        if (reqBody.mimeType === this.selectedRequestBodyType) {
          const ex = generateExample(reqBody.schema, reqBody.mimeType, reqBody.examples, reqBody.example, this.callback === 'true' || this.webhook === 'true' ? true : false, // eslint-disable-line no-unneeded-ternary
          this.callback === 'true' || this.webhook === 'true' ? false : true, // eslint-disable-line no-unneeded-ternary
          'text', false);

          if (reqBody.schema) {
            reqBodyFormHtml = this.formDataTemplate(reqBody.schema, reqBody.mimeType, ex[0] ? ex[0].exampleValue : '');
          }
        }
      } else if (/^audio\/|^image\/|^video\/|^font\/|tar$|zip$|7z$|rtf$|msword$|excel$|\/pdf$|\/octet-stream$/.test(this.selectedRequestBodyType)) {
        if (reqBody.mimeType === this.selectedRequestBodyType) {
          reqBodyFileInputHtml = y`
            <div class = "small-font-size bold-text row">
              <input type="file" part="file-input" style="max-width:100%" class="request-body-param-file" data-ptype="${reqBody.mimeType}" spellcheck="false" />
            </div>  
          `;
        }
      } // Generate Schema


      if (reqBody.mimeType.includes('json') || reqBody.mimeType.includes('xml') || reqBody.mimeType.includes('text') || this.selectedRequestBodyType.includes('jose')) {
        schemaAsObj = schemaInObjectNotation(reqBody.schema, {});

        if (this.schemaStyle === 'table') {
          reqBodySchemaHtml = y`
            ${reqBodySchemaHtml}
            <schema-table
              class = '${reqBody.mimeType.substring(reqBody.mimeType.indexOf('/') + 1)}'
              style = 'display: ${this.selectedRequestBodyType === reqBody.mimeType ? 'block' : 'none'};'
              .data = '${schemaAsObj}'
              schema-expand-level = "${this.schemaExpandLevel}"
              schema-description-expanded = "${this.schemaDescriptionExpanded}"
              allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
              schema-hide-read-only = "${this.schemaHideReadOnly}"
              schema-hide-write-only = "${this.schemaHideWriteOnly}"
              exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
            > </schema-table>
          `;
        } else if (this.schemaStyle === 'tree') {
          reqBodySchemaHtml = y`
            ${reqBodySchemaHtml}
            <schema-tree
              class = "${reqBody.mimeType.substring(reqBody.mimeType.indexOf('/') + 1)}"
              style = "display: ${this.selectedRequestBodyType === reqBody.mimeType ? 'block' : 'none'};"
              .data = "${schemaAsObj}"
              schema-expand-level = "${this.schemaExpandLevel}"
              schema-description-expanded = "${this.schemaDescriptionExpanded}"
              allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
              schema-hide-read-only = "${this.schemaHideReadOnly}"
              schema-hide-write-only = "${this.schemaHideWriteOnly}"
              exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
            > </schema-tree>
          `;
        }
      }
    });
    return y`
      <div class='request-body-container' data-selected-request-body-type="${this.selectedRequestBodyType}">
        <div class="table-title top-gap row">
          REQUEST BODY ${this.request_body.required ? y`<span class="mono-font" style='color:var(--red)'>*</span>` : ''} 
          <span style = "font-weight:normal; margin-left:5px"> ${this.selectedRequestBodyType}</span>
          <span style="flex:1"></span>
          ${reqBodyTypeSelectorHtml}
        </div>
        ${this.request_body.description ? y`<div class="m-markdown" style="margin-bottom:12px">${unsafe_html_o(marked(this.request_body.description))}</div>` : ''}
        
        ${this.selectedRequestBodyType.includes('json') || this.selectedRequestBodyType.includes('xml') || this.selectedRequestBodyType.includes('text') || this.selectedRequestBodyType.includes('jose') ? y`
            <div class="tab-panel col" style="border-width:0 0 1px 0;">
              <div class="tab-buttons row" @click="${e => {
      if (e.target.tagName.toLowerCase() === 'button') {
        this.activeSchemaTab = e.target.dataset.tab;
      }
    }}">
                <button class="tab-btn ${this.activeSchemaTab === 'example' ? 'active' : ''}" data-tab = 'example'>EXAMPLE</button>
                <button class="tab-btn ${this.activeSchemaTab !== 'example' ? 'active' : ''}" data-tab = 'schema'>SCHEMA</button>
              </div>
              ${y`<div class="tab-content col" style="display:${this.activeSchemaTab === 'example' ? 'block' : 'none'};"> ${reqBodyExampleHtml}</div>`}
              ${y`<div class="tab-content col" style="display:${this.activeSchemaTab === 'example' ? 'none' : 'block'};"> ${reqBodySchemaHtml}</div>`}
            </div>` : y`  
            ${reqBodyFileInputHtml}
            ${reqBodyFormHtml}`}
      </div>  
    `;
  }

  formDataParamAsObjectTemplate(fieldName, fieldSchema, mimeType) {
    var _formdataPartExample$;

    // This template is used when form-data param should be send as a object (application/json, application/xml)
    const formdataPartSchema = schemaInObjectNotation(fieldSchema, {});
    const formdataPartExample = generateExample(fieldSchema, 'json', fieldSchema.examples, fieldSchema.example, this.callback === 'true' || this.webhook === 'true' ? true : false, // eslint-disable-line no-unneeded-ternary
    this.callback === 'true' || this.webhook === 'true' ? false : true, // eslint-disable-line no-unneeded-ternary
    'text', false);
    return y`
      <div class="tab-panel row" style="min-height:220px; border-left: 6px solid var(--light-border-color); align-items: stretch;">
        <div style="width:24px; background-color:var(--light-border-color)">
          <div class="row" style="flex-direction:row-reverse; width:160px; height:24px; transform:rotate(270deg) translateX(-160px); transform-origin:top left; display:block;" @click="${e => {
      if (e.target.classList.contains('v-tab-btn')) {
        const {
          tab
        } = e.target.dataset;

        if (tab) {
          const tabPanelEl = e.target.closest('.tab-panel');
          const selectedTabBtnEl = tabPanelEl.querySelector(`.v-tab-btn[data-tab="${tab}"]`);
          const otherTabBtnEl = [...tabPanelEl.querySelectorAll(`.v-tab-btn:not([data-tab="${tab}"])`)];
          const selectedTabContentEl = tabPanelEl.querySelector(`.tab-content[data-tab="${tab}"]`);
          const otherTabContentEl = [...tabPanelEl.querySelectorAll(`.tab-content:not([data-tab="${tab}"])`)];
          selectedTabBtnEl.classList.add('active');
          selectedTabContentEl.style.display = 'block';
          otherTabBtnEl.forEach(el => {
            el.classList.remove('active');
          });
          otherTabContentEl.forEach(el => {
            el.style.display = 'none';
          });
        }
      }

      if (e.target.tagName.toLowerCase() === 'button') {
        this.activeSchemaTab = e.target.dataset.tab;
      }
    }}">
          <button class="v-tab-btn ${this.activeSchemaTab === 'example' ? 'active' : ''}" data-tab = 'example'>EXAMPLE</button>
          <button class="v-tab-btn ${this.activeSchemaTab !== 'example' ? 'active' : ''}" data-tab = 'schema'>SCHEMA</button>
        </div>
      </div>
      ${y`
        <div class="tab-content col" data-tab = 'example' style="display:${this.activeSchemaTab === 'example' ? 'block' : 'none'}; padding-left:5px; width:100%"> 
          <textarea 
            class = "textarea"
            part = "textarea textarea-param"
            style = "width:100%; border:none; resize:vertical;" 
            data-array = "false" 
            data-ptype = "${mimeType.includes('form-urlencode') ? 'form-urlencode' : 'form-data'}"
            data-pname = "${fieldName}"
            data-example = "${((_formdataPartExample$ = formdataPartExample[0]) === null || _formdataPartExample$ === void 0 ? void 0 : _formdataPartExample$.exampleValue) || ''}"
            .textContent = "${this.fillRequestFieldsWithExample === 'true' ? formdataPartExample[0].exampleValue : ''}"
            spellcheck = "false"
          ></textarea>
        </div>`}
      ${y`
        <div class="tab-content col" data-tab = 'schema' style="display:${this.activeSchemaTab !== 'example' ? 'block' : 'none'}; padding-left:5px; width:100%;"> 
          <schema-tree
            .data = '${formdataPartSchema}'
            schema-expand-level = "${this.schemaExpandLevel}"
            schema-description-expanded = "${this.schemaDescriptionExpanded}"
            allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}",
          > </schema-tree>
        </div>`}
      </div>
    `;
  }

  formDataTemplate(schema, mimeType, exampleValue = '') {
    const formDataTableRows = [];

    if (schema.properties) {
      for (const fieldName in schema.properties) {
        var _schema$required, _fieldSchema$items;

        const fieldSchema = schema.properties[fieldName];

        if (fieldSchema.readOnly) {
          continue;
        }

        const fieldExamples = fieldSchema.examples || fieldSchema.example || '';
        const fieldType = fieldSchema.type;
        const paramSchema = getTypeInfo(fieldSchema);
        const labelColWidth = 'read focused'.includes(this.renderStyle) ? '200px' : '160px';
        const example = normalizeExamples(paramSchema.examples || paramSchema.example, paramSchema.type);
        formDataTableRows.push(y`
        <tr title="${fieldSchema.deprecated ? 'Deprecated' : ''}"> 
          <td style="width:${labelColWidth}; min-width:100px;">
            <div class="param-name ${fieldSchema.deprecated ? 'deprecated' : ''}">
              ${fieldName}${(_schema$required = schema.required) !== null && _schema$required !== void 0 && _schema$required.includes(fieldName) || fieldSchema.required ? y`<span style='color:var(--red);'>*</span>` : ''}
            </div>
            <div class="param-type">${paramSchema.type}</div>
          </td>  
          <td 
            style="${fieldType === 'object' ? 'width:100%; padding:0;' : this.allowTry === 'true' ? '' : 'display:none;'} min-width:100px;" 
            colspan="${fieldType === 'object' ? 2 : 1}">
            ${fieldType === 'array' ? ((_fieldSchema$items = fieldSchema.items) === null || _fieldSchema$items === void 0 ? void 0 : _fieldSchema$items.format) === 'binary' ? y`
                <div class="file-input-container col" style='align-items:flex-end;' @click="${e => this.onAddRemoveFileInput(e, fieldName, mimeType)}">
                  <div class='input-set row'>
                    <input 
                      type = "file"
                      part = "file-input"
                      style = "width:100%" 
                      data-pname = "${fieldName}" 
                      data-ptype = "${mimeType.includes('form-urlencode') ? 'form-urlencode' : 'form-data'}"
                      data-array = "false" 
                      data-file-array = "true" 
                    />
                    <button class="file-input-remove-btn"> &#x2715; </button>
                  </div>  
                  <button class="m-btn primary file-input-add-btn" part="btn btn-fill" style="margin:2px 25px 0 0; padding:2px 6px;">ADD</button>
                </div>  
                ` : y`
                  <tag-input
                    style = "width:100%" 
                    data-ptype = "${mimeType.includes('form-urlencode') ? 'form-urlencode' : 'form-data'}"
                    data-pname = "${fieldName}"
                    data-example = "${Array.isArray(fieldExamples) ? fieldExamples.join('~|~') : fieldExamples}"
                    data-array = "true"
                    placeholder = "add-multiple &#x21a9;"
                    .value = "${Array.isArray(fieldExamples) ? Array.isArray(fieldExamples[0]) ? fieldExamples[0] : [fieldExamples[0]] : [fieldExamples]}"
                  >
                  </tag-input>
                ` : y`
                ${fieldType === 'object' ? this.formDataParamAsObjectTemplate.call(this, fieldName, fieldSchema, mimeType) : y`
                    ${this.allowTry === 'true' ? y`<input
                          .value = "${this.fillRequestFieldsWithExample === 'true' ? example.exampleVal : ''}"
                          spellcheck = "false"
                          type = "${fieldSchema.format === 'binary' ? 'file' : fieldSchema.format === 'password' ? 'password' : 'text'}"
                          part = "textbox textbox-param"
                          style = "width:100%"
                          data-ptype = "${mimeType.includes('form-urlencode') ? 'form-urlencode' : 'form-data'}"
                          data-pname = "${fieldName}"
                          data-example = "${Array.isArray(fieldExamples) ? fieldExamples[0] : fieldExamples}"
                          data-array = "false"
                        />` : ''}
                    `}`}
          </td>
          ${fieldType === 'object' ? '' : y`
              <td>
                ${paramSchema.default || paramSchema.constrain || paramSchema.allowedValues || paramSchema.pattern ? y`
                    <div class="param-constraint">
                      ${paramSchema.default ? y`<span style="font-weight:bold">Default: </span>${paramSchema.default}<br/>` : ''}
                      ${paramSchema.pattern ? y`<span style="font-weight:bold">Pattern: </span>${paramSchema.pattern}<br/>` : ''}
                      ${paramSchema.constrain ? y`${paramSchema.constrain}<br/>` : ''}
                      ${paramSchema.allowedValues && paramSchema.allowedValues.split('┃').map((v, i) => y`
                        ${i > 0 ? '┃' : y`<span style="font-weight:bold">Allowed: </span>`}
                        ${y`
                          <a part="anchor anchor-param-constraint" class = "${this.allowTry === 'true' ? '' : 'inactive-link'}"
                            data-type="${paramSchema.type === 'array' ? paramSchema.type : 'string'}"
                            data-enum="${v.trim()}"
                            @click="${e => {
          const inputEl = e.target.closest('table').querySelector(`[data-pname="${fieldName}"]`);

          if (inputEl) {
            if (e.target.dataset.type === 'array') {
              inputEl.value = [e.target.dataset.enum];
            } else {
              inputEl.value = e.target.dataset.enum;
            }
          }
        }}"
                          > 
                            ${v} 
                          </a>`}`)}
                    </div>` : ''}
              </td>`}
        </tr>
        ${fieldType === 'object' ? '' : y`
            <tr>
              <td style="border:none"> </td>
              <td colspan="2" style="border:none; margin-top:0; padding:0 5px 8px 5px;"> 
                <span class="m-markdown-small">${unsafe_html_o(marked(fieldSchema.description || ''))}</span>
                ${this.exampleListTemplate.call(this, fieldName, paramSchema.type, example.exampleList)}
              </td>
            </tr>
          `}`);
      }

      return y`
        <table role="presentation" style="width:100%;" class="m-table">
          ${formDataTableRows}
        </table>
      `;
    }

    return y`
      <textarea
        class = "textarea dynamic-form-param ${mimeType}"
        part = "textarea textarea-param"
        spellcheck = "false"
        data-pname="dynamic-form" 
        data-ptype="${mimeType}"
        .textContent = "${exampleValue}"
        style="width:100%"
      ></textarea>
      ${schema.description ? y`<span class="m-markdown-small">${unsafe_html_o(marked(schema.description))}</span>` : ''}
    `;
  }

  apiResponseTabTemplate() {
    let responseFormat = '';
    let responseContent = '';

    if (!this.responseIsBlob) {
      if (this.responseHeaders.includes('application/x-ndjson')) {
        responseFormat = 'json';
        const prismLines = this.responseText.split('\n').map(q => prism_default().highlight(q, (prism_default()).languages[responseFormat], responseFormat)).join('\n');
        responseContent = y`<code>${unsafe_html_o(prismLines)}</code>`;
      } else if (this.responseHeaders.includes('json')) {
        responseFormat = 'json';
        responseContent = y`<code>${unsafe_html_o(prism_default().highlight(this.responseText, (prism_default()).languages[responseFormat], responseFormat))}</code>`;
      } else if (this.responseHeaders.includes('html') || this.responseHeaders.includes('xml')) {
        responseFormat = 'html';
        responseContent = y`<code>${unsafe_html_o(prism_default().highlight(this.responseText, (prism_default()).languages[responseFormat], responseFormat))}</code>`;
      } else {
        responseFormat = 'text';
        responseContent = y`<code>${this.responseText}</code>`;
      }
    }

    return y`
      <div class="row" style="font-size:var(--font-size-small); margin:5px 0">
        <div class="response-message ${this.responseStatus}">Response Status: ${this.responseMessage}</div>
        <div style="flex:1"></div>
        <button class="m-btn" part="btn btn-outline btn-clear-response" @click="${this.clearResponseData}">CLEAR RESPONSE</button>
      </div>
      <div class="tab-panel col" style="border-width:0 0 1px 0;">
        <div id="tab_buttons" class="tab-buttons row" @click="${e => {
      if (e.target.classList.contains('tab-btn') === false) {
        return;
      }

      this.activeResponseTab = e.target.dataset.tab;
    }}">
          <button class="tab-btn ${this.activeResponseTab === 'response' ? 'active' : ''}" data-tab = 'response' > RESPONSE</button>
          <button class="tab-btn ${this.activeResponseTab === 'headers' ? 'active' : ''}"  data-tab = 'headers' > RESPONSE HEADERS</button>
          <button class="tab-btn ${this.activeResponseTab === 'curl' ? 'active' : ''}" data-tab = 'curl'>CURL</button>
        </div>
        ${this.responseIsBlob ? y`
            <div class="tab-content col" style="flex:1; display:${this.activeResponseTab === 'response' ? 'flex' : 'none'};">
              <button class="m-btn thin-border mar-top-8" style="width:135px" @click='${e => {
      downloadResource(this.responseBlobUrl, this.respContentDisposition, e);
    }}' part="btn btn-outline">
                DOWNLOAD
              </button>
              ${this.responseBlobType === 'view' ? y`<button class="m-btn thin-border mar-top-8" style="width:135px"  @click='${e => {
      viewResource(this.responseBlobUrl, e);
    }}' part="btn btn-outline">VIEW (NEW TAB)</button>` : ''}
            </div>` : y`
            <div class="tab-content col m-markdown" style="flex:1; display:${this.activeResponseTab === 'response' ? 'flex' : 'none'};" >
              <button class="toolbar-btn" style="position:absolute; top:12px; right:8px" @click='${e => {
      copyToClipboard(this.responseText, e);
    }}' part="btn btn-fill"> Copy </button>
              <pre style="white-space:pre; min-height:50px; height:var(--resp-area-height, 400px); resize:vertical; overflow:auto">${responseContent}</pre>
            </div>`}
        <div class="tab-content col m-markdown" style="flex:1; display:${this.activeResponseTab === 'headers' ? 'flex' : 'none'};" >
          <button  class="toolbar-btn" style = "position:absolute; top:12px; right:8px" @click='${e => {
      copyToClipboard(this.responseHeaders, e);
    }}' part="btn btn-fill"> Copy </button>
          <pre style="white-space:pre"><code>${unsafe_html_o(prism_default().highlight(this.responseHeaders, (prism_default()).languages.css, 'css'))}</code></pre>
        </div>
        <div class="tab-content col m-markdown" style="flex:1; display:${this.activeResponseTab === 'curl' ? 'flex' : 'none'};">
          <button  class="toolbar-btn" style = "position:absolute; top:12px; right:8px" @click='${e => {
      copyToClipboard(this.curlSyntax.replace(/\\$/, ''), e);
    }}' part="btn btn-fill"> Copy </button>
          <pre style="white-space:pre"><code>${unsafe_html_o(prism_default().highlight(this.curlSyntax.trim().replace(/\\$/, ''), (prism_default()).languages.shell, 'shell'))}</code></pre>
        </div>
      </div>`;
  }

  apiCallTemplate() {
    var _this$security, _this$api_keys$;

    let selectServerDropdownHtml = '';

    if (this.servers && this.servers.length > 0) {
      selectServerDropdownHtml = y`
        <select style="min-width:100px;" @change='${e => {
        this.serverUrl = e.target.value;
      }}'>
          ${this.servers.map(v => y`<option value = "${v.url}"> ${v.url} - ${v.description} </option>`)}
        </select>
      `;
    }

    const selectedServerHtml = y`
      <div style="display:flex; flex-direction:column;">
        ${selectServerDropdownHtml}
        ${this.serverUrl ? y`
            <div style="display:flex; align-items:baseline;">
              <div style="font-weight:bold; padding-right:5px;">API Server</div> 
              <span class = "gray-text"> ${this.serverUrl} </span>
            </div>
          ` : ''}
      </div>  
    `;
    return y`
    <div style="display:flex; align-items:flex-end; margin:16px 0; font-size:var(--font-size-small);" part="wrap-request-btn">
      <div class="hide-in-small-screen" style="flex-direction:column; margin:0; width:calc(100% - 60px);">
        <div style="display:flex; flex-direction:row; align-items:center; overflow:hidden;"> 
          ${selectedServerHtml}
        </div>
        <div style="display:flex;">
          <div style="font-weight:bold; padding-right:5px;">Authentication</div>
          ${((_this$security = this.security) === null || _this$security === void 0 ? void 0 : _this$security.length) > 0 ? y`
              ${this.api_keys.length > 0 ? y`<div style="color:var(--blue); overflow:hidden;"> 
                    ${this.api_keys.length === 1 ? `${(_this$api_keys$ = this.api_keys[0]) === null || _this$api_keys$ === void 0 ? void 0 : _this$api_keys$.typeDisplay} in ${this.api_keys[0].in}` : `${this.api_keys.length} API keys applied`} 
                  </div>` : y`<div class="gray-text">Required  <span style="color:var(--red)">(None Applied)</span>`}` : y`<span class="gray-text"> Not Required </span>`}
        </div>
      </div>
      ${this.parameters.length > 0 || this.request_body ? y`
            <button class="m-btn thin-border" part="btn btn-outline btn-fill" style="margin-right:5px;" @click="${this.onFillRequestData}" title="Fills with example data (if provided)">
              FILL EXAMPLE
            </button>
            <button class="m-btn thin-border" part="btn btn-outline btn-clear" style="margin-right:5px;" @click="${this.onClearRequestData}">
              CLEAR
            </button>` : ''}
      <button class="m-btn primary thin-border" part="btn btn-try" @click="${this.onTryClick}">TRY</button>
    </div>
    ${this.responseMessage === '' ? '' : this.apiResponseTabTemplate()}
    `;
  }
  /* eslint-enable indent */


  async onFillRequestData(e) {
    const requestPanelEl = e.target.closest('.request-panel');
    const requestPanelInputEls = [...requestPanelEl.querySelectorAll('input, tag-input, textarea:not(.is-hidden)')];
    requestPanelInputEls.forEach(el => {
      if (el.dataset.example) {
        if (el.tagName.toUpperCase() === 'TAG-INPUT') {
          el.value = el.dataset.example.split('~|~');
        } else {
          el.value = el.dataset.example;
        }
      }
    });
  }

  async onClearRequestData(e) {
    const requestPanelEl = e.target.closest('.request-panel');
    const requestPanelInputEls = [...requestPanelEl.querySelectorAll('input, tag-input, textarea:not(.is-hidden)')];
    requestPanelInputEls.forEach(el => {
      el.value = '';
    });
  }

  async onTryClick(e) {
    var _this$closest;

    // const me = this;
    const tryBtnEl = e.target;
    let fetchUrl;
    let curlUrl;
    let curl = '';
    let curlHeaders = '';
    let curlData = '';
    let curlForm = '';
    const respEl = (_this$closest = this.closest('.expanded-req-resp-container, .req-resp-container')) === null || _this$closest === void 0 ? void 0 : _this$closest.getElementsByTagName('api-response')[0];
    const acceptHeader = respEl === null || respEl === void 0 ? void 0 : respEl.selectedMimeType;
    const requestPanelEl = e.target.closest('.request-panel');
    const pathParamEls = [...requestPanelEl.querySelectorAll("[data-ptype='path']")];
    const queryParamEls = [...requestPanelEl.querySelectorAll("[data-ptype='query']")];
    const queryParamObjTypeEls = [...requestPanelEl.querySelectorAll("[data-ptype='query-object']")];
    const headerParamEls = [...requestPanelEl.querySelectorAll("[data-ptype='header']")];
    const requestBodyContainerEl = requestPanelEl.querySelector('.request-body-container');
    fetchUrl = this.path;
    const fetchOptions = {
      method: this.method.toUpperCase()
    }; // Generate URL using Path Params

    pathParamEls.map(el => {
      fetchUrl = fetchUrl.replace(`{${el.dataset.pname}}`, encodeURIComponent(el.value));
    }); // Query Params

    const urlQueryParamsMap = new Map();
    const queryParamsWithReservedCharsAllowed = [];

    if (queryParamEls.length > 0) {
      queryParamEls.forEach(el => {
        const queryParam = new URLSearchParams();

        if (el.dataset.paramAllowReserved === 'true') {
          queryParamsWithReservedCharsAllowed.push(el.dataset.pname);
        }

        if (el.dataset.array === 'false') {
          if (el.value !== '') {
            queryParam.append(el.dataset.pname, el.value);
          }
        } else {
          const {
            paramSerializeStyle,
            paramSerializeExplode
          } = el.dataset;
          let vals = el.value && Array.isArray(el.value) ? el.value : [];
          vals = Array.isArray(vals) ? vals.filter(v => v !== '') : [];

          if (vals.length > 0) {
            if (paramSerializeStyle === 'spaceDelimited') {
              queryParam.append(el.dataset.pname, vals.join(' ').replace(/^\s|\s$/g, ''));
            } else if (paramSerializeStyle === 'pipeDelimited') {
              queryParam.append(el.dataset.pname, vals.join('|').replace(/^\||\|$/g, ''));
            } else {
              if (paramSerializeExplode === 'true') {
                // eslint-disable-line no-lonely-if
                vals.forEach(v => {
                  queryParam.append(el.dataset.pname, v);
                });
              } else {
                queryParam.append(el.dataset.pname, vals.join(',').replace(/^,|,$/g, ''));
              }
            }
          }
        }

        if (queryParam.toString()) {
          urlQueryParamsMap.set(el.dataset.pname, queryParam);
        }
      });
    } // Query Params (Dynamic - create from JSON)


    if (queryParamObjTypeEls.length > 0) {
      queryParamObjTypeEls.map(el => {
        const queryParam = new URLSearchParams();

        try {
          let queryParamObj = {};
          const {
            paramSerializeStyle,
            paramSerializeExplode
          } = el.dataset;
          queryParamObj = Object.assign(queryParamObj, JSON.parse(el.value.replace(/\s+/g, ' ')));

          if (el.dataset.paramAllowReserved === 'true') {
            queryParamsWithReservedCharsAllowed.push(el.dataset.pname);
          }

          if ('json xml'.includes(paramSerializeStyle)) {
            if (paramSerializeStyle === 'json') {
              queryParam.append(el.dataset.pname, JSON.stringify(queryParamObj));
            } else if (paramSerializeStyle === 'xml') {
              queryParam.append(el.dataset.pname, json2xml(queryParamObj));
            }
          } else {
            for (const key in queryParamObj) {
              if (typeof queryParamObj[key] === 'object') {
                if (Array.isArray(queryParamObj[key])) {
                  if (paramSerializeStyle === 'spaceDelimited') {
                    queryParam.append(key, queryParamObj[key].join(' '));
                  } else if (paramSerializeStyle === 'pipeDelimited') {
                    queryParam.append(key, queryParamObj[key].join('|'));
                  } else {
                    if (paramSerializeExplode === 'true') {
                      // eslint-disable-line no-lonely-if
                      queryParamObj[key].forEach(v => {
                        queryParam.append(key, v);
                      });
                    } else {
                      queryParam.append(key, queryParamObj[key]);
                    }
                  }
                }
              } else {
                queryParam.append(key, queryParamObj[key]);
              }
            }
          }
        } catch (err) {
          console.log('RapiDoc: unable to parse %s into object', el.value); // eslint-disable-line no-console
        }

        if (queryParam.toString()) {
          urlQueryParamsMap.set(el.dataset.pname, queryParam);
        }
      });
    }

    let urlQueryParamString = '';

    if (urlQueryParamsMap.size) {
      urlQueryParamString = '?';
      urlQueryParamsMap.forEach((val, pname) => {
        if (queryParamsWithReservedCharsAllowed.includes(pname)) {
          urlQueryParamString += `${pname}=`;
          urlQueryParamString += val.getAll(pname).join(`&${pname}=`);
          urlQueryParamString += '&';
        } else {
          urlQueryParamString += `${val.toString()}&`;
        }
      });
      urlQueryParamString = urlQueryParamString.slice(0, -1);
    }

    fetchUrl = `${fetchUrl}${urlQueryParamString}`; // Add authentication Query-Param if provided

    this.api_keys.filter(v => v.in === 'query').forEach(v => {
      fetchUrl = `${fetchUrl}${fetchUrl.includes('?') ? '&' : '?'}${v.name}=${encodeURIComponent(v.finalKeyValue)}`;
    }); // Final URL for API call

    fetchUrl = `${this.serverUrl.replace(/\/$/, '')}${fetchUrl}`;

    if (fetchUrl.startsWith('http') === false) {
      const url = new URL(fetchUrl, window.location.href);
      curlUrl = url.href;
    } else {
      curlUrl = fetchUrl;
    }

    curl = `curl -X ${this.method.toUpperCase()} "${curlUrl}" \\\n`;
    const reqHeaders = new Headers();

    if (acceptHeader) {
      // Uses the acceptHeader from Response panel
      reqHeaders.append('Accept', acceptHeader);
      curlHeaders += ` -H "Accept: ${acceptHeader}" \\\n`;
    } else if (this.accept) {
      reqHeaders.append('Accept', this.accept);
      curlHeaders += ` -H "Accept: ${this.accept}" \\\n`;
    } // Add Authentication Header if provided


    this.api_keys.filter(v => v.in === 'header').forEach(v => {
      reqHeaders.append(v.name, v.finalKeyValue);
      curlHeaders += ` -H "${v.name}: ${v.finalKeyValue}" \\\n`;
    }); // Add Header Params

    headerParamEls.map(el => {
      if (el.value) {
        reqHeaders.append(el.dataset.pname, el.value);
        curlHeaders += ` -H "${el.dataset.pname}: ${el.value}" \\\n`;
      }
    }); // Request Body Params

    if (requestBodyContainerEl) {
      const requestBodyType = requestBodyContainerEl.dataset.selectedRequestBodyType;

      if (requestBodyType.includes('form-urlencoded')) {
        // url-encoded Form Params (dynamic) - Parse JSON and generate Params
        const formUrlDynamicTextAreaEl = requestPanelEl.querySelector("[data-ptype='dynamic-form']");

        if (formUrlDynamicTextAreaEl) {
          const val = formUrlDynamicTextAreaEl.value;
          const formUrlDynParams = new URLSearchParams();
          let proceed = true;
          let tmpObj;

          if (val) {
            try {
              tmpObj = JSON.parse(val);
            } catch (err) {
              proceed = false;
              console.warn('RapiDoc: Invalid JSON provided', err); // eslint-disable-line no-console
            }
          } else {
            proceed = false;
          }

          if (proceed) {
            for (const prop in tmpObj) {
              formUrlDynParams.append(prop, JSON.stringify(tmpObj[prop]));
            }

            fetchOptions.body = formUrlDynParams;
            curlData = ` -d ${formUrlDynParams.toString()} \\\n`;
          }
        } else {
          // url-encoded Form Params (regular)
          const formUrlEls = [...requestPanelEl.querySelectorAll("[data-ptype='form-urlencode']")];
          const formUrlParams = new URLSearchParams();
          formUrlEls.filter(v => v.type !== 'file').forEach(el => {
            if (el.dataset.array === 'false') {
              if (el.value) {
                formUrlParams.append(el.dataset.pname, el.value);
              }
            } else {
              const vals = el.value && Array.isArray(el.value) ? el.value.join(',') : '';
              formUrlParams.append(el.dataset.pname, vals);
            }
          });
          fetchOptions.body = formUrlParams;
          curlData = ` -d ${formUrlParams.toString()} \\\n`;
        }
      } else if (requestBodyType.includes('form-data')) {
        const formDataParams = new FormData();
        const formDataEls = [...requestPanelEl.querySelectorAll("[data-ptype='form-data']")];
        formDataEls.forEach(el => {
          if (el.dataset.array === 'false') {
            if (el.type === 'file' && el.files[0]) {
              formDataParams.append(el.dataset.pname, el.files[0], el.files[0].name);
              curlForm += ` -F "${el.dataset.pname}=@${el.files[0].name}" \\\n`;
            } else if (el.value) {
              formDataParams.append(el.dataset.pname, el.value);
              curlForm += ` -F "${el.dataset.pname}=${el.value}" \\\n`;
            }
          } else if (el.value && Array.isArray(el.value)) {
            el.value.forEach(v => {
              curlForm = `${curlForm} -F "${el.dataset.pname}[]=${v}" \\\n`;
            });
            formDataParams.append(el.dataset.pname, el.value.join(','));
          }
        });
        fetchOptions.body = formDataParams;
      } else if (/^audio\/|^image\/|^video\/|^font\/|tar$|zip$|7z$|rtf$|msword$|excel$|\/pdf$|\/octet-stream$/.test(requestBodyType)) {
        const bodyParamFileEl = requestPanelEl.querySelector('.request-body-param-file');

        if (bodyParamFileEl !== null && bodyParamFileEl !== void 0 && bodyParamFileEl.files[0]) {
          fetchOptions.body = bodyParamFileEl.files[0]; // eslint-disable-line prefer-destructuring

          curlData = ` --data-binary @${bodyParamFileEl.files[0].name} \\\n`;
        }
      } else if (requestBodyType.includes('json') || requestBodyType.includes('xml') || requestBodyType.includes('text')) {
        const exampleTextAreaEl = requestPanelEl.querySelector('.request-body-param-user-input');

        if (exampleTextAreaEl !== null && exampleTextAreaEl !== void 0 && exampleTextAreaEl.value) {
          fetchOptions.body = exampleTextAreaEl.value;

          if (requestBodyType.includes('json')) {
            try {
              curlData = ` -d '${JSON.stringify(JSON.parse(exampleTextAreaEl.value))}' \\\n`;
            } catch (err) {// Ignore.
            }
          }

          if (!curlData) {
            curlData = ` -d '${exampleTextAreaEl.value.replace(/'/g, '\'"\'"\'')}' \\\n`;
          }
        }
      } // Common for all request-body


      if (!requestBodyType.includes('form-data')) {
        // For multipart/form-data dont set the content-type to allow creation of browser generated part boundaries
        reqHeaders.append('Content-Type', requestBodyType);
      }

      curlHeaders += ` -H "Content-Type: ${requestBodyType}" \\\n`;
    }

    this.responseUrl = '';
    this.responseHeaders = [];
    this.curlSyntax = '';
    this.responseStatus = 'success';
    this.responseIsBlob = false;
    this.respContentDisposition = '';

    if (this.responseBlobUrl) {
      URL.revokeObjectURL(this.responseBlobUrl);
      this.responseBlobUrl = '';
    }

    this.curlSyntax = `${curl}${curlHeaders}${curlData}${curlForm}`;

    if (this.fetchCredentials) {
      fetchOptions.credentials = this.fetchCredentials;
    }

    const controller = new AbortController();
    const {
      signal
    } = controller;
    fetchOptions.headers = reqHeaders;
    const fetchRequest = new Request(fetchUrl, fetchOptions);
    this.dispatchEvent(new CustomEvent('before-try', {
      bubbles: true,
      composed: true,
      detail: {
        request: fetchRequest,
        controller
      }
    }));
    let fetchResponse;
    let responseClone;

    try {
      let respBlob;
      let respJson;
      let respText;
      tryBtnEl.disabled = true;
      this.responseText = '⌛';
      this.responseMessage = '';
      this.requestUpdate();
      const startTime = performance.now();
      fetchResponse = await fetch(fetchRequest, {
        signal
      });
      const endTime = performance.now();
      responseClone = fetchResponse.clone(); // create a response clone to allow reading response body again (response.json, response.text etc)

      tryBtnEl.disabled = false;
      this.responseMessage = y`${fetchResponse.statusText ? `${fetchResponse.statusText}:${fetchResponse.status}` : fetchResponse.status} <div style="color:var(--light-fg)"> Took ${Math.round(endTime - startTime)} milliseconds </div>`;
      this.responseUrl = fetchResponse.url;
      const respHeadersObj = {};
      fetchResponse.headers.forEach((hdrVal, hdr) => {
        respHeadersObj[hdr] = hdrVal;
        this.responseHeaders = `${this.responseHeaders}${hdr}: ${hdrVal}\n`;
      });
      const contentType = fetchResponse.headers.get('content-type');
      const respEmpty = (await fetchResponse.clone().text()).length === 0;

      if (respEmpty) {
        this.responseText = '';
      } else if (contentType) {
        if (contentType === 'application/x-ndjson') {
          this.responseText = await fetchResponse.text();
        } else if (contentType.includes('json')) {
          if (/charset=[^"']+/.test(contentType)) {
            const encoding = contentType.split('charset=')[1];
            const buffer = await fetchResponse.arrayBuffer();

            try {
              respText = new TextDecoder(encoding).decode(buffer);
            } catch {
              respText = new TextDecoder('utf-8').decode(buffer);
            }

            try {
              respJson = JSON.parse(respText);
              this.responseText = JSON.stringify(respJson, null, 2);
            } catch {
              this.responseText = respText;
            }
          } else {
            respJson = await fetchResponse.json();
            this.responseText = JSON.stringify(respJson, null, 2);
          } // eslint-disable-next-line no-useless-escape

        } else if (/^font\/|tar$|zip$|7z$|rtf$|msword$|excel$|\/pdf$|\/octet-stream$|^application\/vnd\./.test(contentType)) {
          this.responseIsBlob = true;
          this.responseBlobType = 'download';
        } else if (/^audio|^image|^video/.test(contentType)) {
          this.responseIsBlob = true;
          this.responseBlobType = 'view';
        } else {
          respText = await fetchResponse.text();

          if (contentType.includes('xml')) {
            this.responseText = dist_default()(respText, {
              textNodesOnSameLine: true,
              indentor: '  '
            });
          } else {
            this.responseText = respText;
          }
        }

        if (this.responseIsBlob) {
          const contentDisposition = fetchResponse.headers.get('content-disposition');
          this.respContentDisposition = contentDisposition ? contentDisposition.split('filename=')[1].replace(/"|'/g, '') : 'filename';
          respBlob = await fetchResponse.blob();
          this.responseBlobUrl = URL.createObjectURL(respBlob);
        }
      } else {
        respText = await fetchResponse.text();
        this.responseText = respText;
      }

      this.dispatchEvent(new CustomEvent('after-try', {
        bubbles: true,
        composed: true,
        detail: {
          request: fetchRequest,
          response: responseClone,
          responseHeaders: respHeadersObj,
          responseBody: respJson || respText || respBlob,
          responseStatus: responseClone.ok
        }
      }));
    } catch (err) {
      tryBtnEl.disabled = false;

      if (err.name === 'AbortError') {
        this.dispatchEvent(new CustomEvent('request-aborted', {
          bubbles: true,
          composed: true,
          detail: {
            err,
            request: fetchRequest
          }
        }));
        this.responseMessage = 'Request Aborted';
      } else {
        this.dispatchEvent(new CustomEvent('after-try', {
          bubbles: true,
          composed: true,
          detail: {
            err,
            request: fetchRequest
          }
        }));
        this.responseMessage = `${err.message} (CORS or Network Issue)`;
      }
    }

    this.requestUpdate();
  }

  onAddRemoveFileInput(e, pname, ptype) {
    if (e.target.tagName.toLowerCase() !== 'button') {
      return;
    }

    if (e.target.classList.contains('file-input-remove-btn')) {
      // Remove File Input Set
      const el = e.target.closest('.input-set');
      el.remove();
      return;
    }

    const el = e.target.closest('.file-input-container'); // Add File Input Set
    // Container

    const newInputContainerEl = document.createElement('div');
    newInputContainerEl.setAttribute('class', 'input-set row'); // File Input

    const newInputEl = document.createElement('input');
    newInputEl.type = 'file';
    newInputEl.style = 'width:200px; margin-top:2px;';
    newInputEl.setAttribute('data-pname', pname);
    newInputEl.setAttribute('data-ptype', ptype.includes('form-urlencode') ? 'form-urlencode' : 'form-data');
    newInputEl.setAttribute('data-array', 'false');
    newInputEl.setAttribute('data-file-array', 'true'); // Remover Button

    const newRemoveBtnEl = document.createElement('button');
    newRemoveBtnEl.setAttribute('class', 'file-input-remove-btn');
    newRemoveBtnEl.innerHTML = '&#x2715;';
    newInputContainerEl.appendChild(newInputEl);
    newInputContainerEl.appendChild(newRemoveBtnEl);
    el.insertBefore(newInputContainerEl, e.target); // el.appendChild(newInputContainerEl);
  }

  clearResponseData() {
    this.responseUrl = '';
    this.responseHeaders = '';
    this.responseText = '';
    this.responseStatus = 'success';
    this.responseMessage = '';
    this.responseIsBlob = false;
    this.responseBlobType = '';
    this.respContentDisposition = '';

    if (this.responseBlobUrl) {
      URL.revokeObjectURL(this.responseBlobUrl);
      this.responseBlobUrl = '';
    }
  }

  disconnectedCallback() {
    // Cleanup ObjectURL forthe blob data if this component created one
    if (this.responseBlobUrl) {
      URL.revokeObjectURL(this.responseBlobUrl);
      this.responseBlobUrl = '';
    }

    super.disconnectedCallback();
  }

} // Register the element with the browser

customElements.define('api-request', ApiRequest);
;// CONCATENATED MODULE: ./src/components/schema-table.js

 // eslint-disable-line import/extensions





class SchemaTable extends lit_element_s {
  static get properties() {
    return {
      schemaExpandLevel: {
        type: Number,
        attribute: 'schema-expand-level'
      },
      schemaDescriptionExpanded: {
        type: String,
        attribute: 'schema-description-expanded'
      },
      allowSchemaDescriptionExpandToggle: {
        type: String,
        attribute: 'allow-schema-description-expand-toggle'
      },
      schemaHideReadOnly: {
        type: String,
        attribute: 'schema-hide-read-only'
      },
      schemaHideWriteOnly: {
        type: String,
        attribute: 'schema-hide-write-only'
      },
      data: {
        type: Object
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();

    if (!this.schemaExpandLevel || this.schemaExpandLevel < 1) {
      this.schemaExpandLevel = 99999;
    }

    if (!this.schemaDescriptionExpanded || !'true false'.includes(this.schemaDescriptionExpanded)) {
      this.schemaDescriptionExpanded = 'false';
    }

    if (!this.schemaHideReadOnly || !'true false'.includes(this.schemaHideReadOnly)) {
      this.schemaHideReadOnly = 'true';
    }

    if (!this.schemaHideWriteOnly || !'true false'.includes(this.schemaHideWriteOnly)) {
      this.schemaHideWriteOnly = 'true';
    }
  }

  static get styles() {
    return [font_styles, schema_styles, i`
      .table {
        font-size: var(--font-size-small);
        text-align: left;
        line-height: calc(var(--font-size-small) + 6px);
      }
      .table .tr {
        width: calc(100% - 5px);
        padding: 0 0 0 5px;
        border-bottom: 1px dotted var(--light-border-color);
      }
      .table .td {
        padding: 4px 0;
      }
      .table .key {
        width: 240px;
      }
      .key.deprecated .key-label {
        color: var(--red);
      }

      .table .key-type {
        white-space: normal;
        width: 150px;
      }
      .collapsed-descr .tr {
        max-height: calc(var(--font-size-small) + var(--font-size-small) + 4px);
      }

      .obj-toggle {
        padding: 0 2px;
        border-radius:2px;
        border: 1px solid transparent;
        display: inline-block;
        margin-left: -16px;
        color:var(--primary-color);
        cursor:pointer;
        font-size: calc(var(--font-size-small) + 4px);
        font-family: var(--font-mono);
        background-clip: border-box;
      }
      .obj-toggle:hover {
        border-color: var(--primary-color);
      }
      .tr.expanded + .object-body {
        display:block;
      }
      .tr.collapsed + .object-body {
        display:none;
      }`, custom_styles];
  }
  /* eslint-disable indent */


  render() {
    var _this$data, _this$data2, _this$data3;

    return y`
      <div class="table ${this.schemaDescriptionExpanded === 'true' ? 'expanded-descr' : 'collapsed-descr'}">
        <div class='toolbar'>
          <div class="toolbar-item schema-root-type ${((_this$data = this.data) === null || _this$data === void 0 ? void 0 : _this$data['::type']) || ''} "> ${((_this$data2 = this.data) === null || _this$data2 === void 0 ? void 0 : _this$data2['::type']) || ''} </div>
          ${this.allowSchemaDescriptionExpandToggle === 'true' ? y`
              <div style="flex:1"></div>
              <div part="schema-multiline-toggle" class='toolbar-item' @click='${() => {
      this.schemaDescriptionExpanded = this.schemaDescriptionExpanded === 'true' ? 'false' : 'true';
    }}'> 
                ${this.schemaDescriptionExpanded === 'true' ? 'Single line description' : 'Multiline description'}
              </div>
            ` : ''}
        </div>
        ${(_this$data3 = this.data) !== null && _this$data3 !== void 0 && _this$data3['::description'] ? y`<span part="schema-description" class='m-markdown'> ${unsafe_html_o(marked(this.data['::description'] || ''))}</span>` : ''}
        <div style = 'border:1px solid var(--light-border-color)'>
          <div style='display:flex; background-color: var(--bg2); padding:8px 4px; border-bottom:1px solid var(--light-border-color);'>
            <div class='key' style='font-family:var(--font-regular); font-weight:bold; color:var(--fg);'> Field </div>
            <div class='key-type' style='font-family:var(--font-regular); font-weight:bold; color:var(--fg);'> Type </div>
            <div class='key-descr' style='font-family:var(--font-regular); font-weight:bold; color:var(--fg);'> Description </div>
          </div>
          ${this.data ? y`
              ${this.generateTree(this.data['::type'] === 'array' ? this.data['::props'] : this.data, this.data['::type'], this.data['::array-type'])}` : ''}  
        </div>
      </div>  
    `;
  }

  generateTree(data, dataType = 'object', arrayType = '', key = '', description = '', schemaLevel = 0, indentLevel = 0, readOrWrite = '') {
    var _data$Type, _keyLabel;

    if (this.schemaHideReadOnly === 'true') {
      if (dataType === 'array') {
        if (readOrWrite === 'readonly') {
          return;
        }
      }

      if (data && data['::readwrite'] === 'readonly') {
        return;
      }
    }

    if (this.schemaHideWriteOnly === 'true') {
      if (dataType === 'array') {
        if (readOrWrite === 'writeonly') {
          return;
        }
      }

      if (data && data['::readwrite'] === 'writeonly') {
        return;
      }
    }

    if (!data) {
      return y`<div class="null" style="display:inline;">
        <span style='margin-left:${(schemaLevel + 1) * 16}px'> &nbsp; </span>
        <span class="key-label xxx-of-key"> ${key.replace('::OPTION~', '')}</span>
        ${dataType === 'array' ? y`<span class='mono-font'> [ ] </span>` : dataType === 'object' ? y`<span class='mono-font'> { } </span>` : y`<span class='mono-font'> schema undefined </span>`}
      </div>`;
    }

    const newSchemaLevel = (_data$Type = data['::type']) !== null && _data$Type !== void 0 && _data$Type.startsWith('xxx-of') ? schemaLevel : schemaLevel + 1;
    const newIndentLevel = dataType === 'xxx-of-option' || data['::type'] === 'xxx-of-option' || key.startsWith('::OPTION') ? indentLevel : indentLevel + 1;
    const leftPadding = 16 * newIndentLevel; // 2 space indentation at each level

    if (Object.keys(data).length === 0) {
      return y`<span class="td key object" style='padding-left:${leftPadding}px'>${key}</span>`;
    }

    let keyLabel = '';
    let keyDescr = '';
    let isOneOfLabel = false;

    if (key.startsWith('::ONE~OF') || key.startsWith('::ANY~OF')) {
      keyLabel = key.replace('::', '').replace('~', ' ');
      isOneOfLabel = true;
    } else if (key.startsWith('::OPTION')) {
      const parts = key.split('~');
      keyLabel = parts[1]; // eslint-disable-line prefer-destructuring

      keyDescr = parts[2]; // eslint-disable-line prefer-destructuring
    } else {
      keyLabel = key;
    }

    let detailObjType = '';

    if (data['::type'] === 'object') {
      if (dataType === 'array') {
        detailObjType = 'array of object'; // Array of Object
      } else {
        detailObjType = data['::dataTypeLabel'] || data['::type'];
      }
    } else if (data['::type'] === 'array') {
      if (dataType === 'array') {
        // detailObjType = 'array of array'; // Array of array
        detailObjType = `array of array ${arrayType !== 'object' ? `of ${arrayType}` : ''}`; // Array of array
      } else {
        detailObjType = data['::dataTypeLabel'] || data['::type'];
      }
    }

    if (typeof data === 'object') {
      return y`
        ${newSchemaLevel >= 0 && key ? y`
            <div class='tr ${newSchemaLevel <= this.schemaExpandLevel ? 'expanded' : 'collapsed'} ${data['::type']}' data-obj='${keyLabel}' title="${data['::deprecated'] ? 'Deprecated' : ''}">
              <div class="td key ${data['::deprecated'] ? 'deprecated' : ''}" style='padding-left:${leftPadding}px'>
                ${keyLabel || keyDescr ? y`
                    <span 
                      class='obj-toggle ${newSchemaLevel < this.schemaExpandLevel ? 'expanded' : 'collapsed'}'
                      data-obj='${keyLabel}'
                      @click= ${e => this.toggleObjectExpand(e, keyLabel)} 
                    >
                      ${schemaLevel < this.schemaExpandLevel ? '-' : '+'}
                    </span>` : ''}
                ${data['::type'] === 'xxx-of-option' || data['::type'] === 'xxx-of-array' || key.startsWith('::OPTION') ? y`<span class="xxx-of-key" style="margin-left:-6px">${keyLabel}</span><span class="${isOneOfLabel ? 'xxx-of-key' : 'xxx-of-descr'}">${keyDescr}</span>` : keyLabel.endsWith('*') ? y`<span class="key-label" style="display:inline-block; margin-left:-6px;">${data['::deprecated'] ? '✗' : ''} ${keyLabel.substring(0, keyLabel.length - 1)}</span><span style='color:var(--red);'>*</span>` : y`<span class="key-label" style="display:inline-block; margin-left:-6px;">${data['::deprecated'] ? '✗' : ''} ${keyLabel === '::props' ? '' : keyLabel}</span>`}
                ${data['::type'] === 'xxx-of' && dataType === 'array' ? y`<span style="color:var(--primary-color)">ARRAY</span>` : ''} 
              </div>
              <div class='td key-type' title="${data['::readwrite'] === 'readonly' ? 'Read-Only' : data['::readwrite'] === 'writeonly' ? 'Write-Only' : ''}">
                ${(data['::type'] || '').includes('xxx-of') ? '' : detailObjType}
                ${data['::readwrite'] === 'readonly' ? ' 🆁' : data['::readwrite'] === 'writeonly' ? ' 🆆' : ''}
              </div>
              <div class='td key-descr m-markdown-small' style='line-height:1.7'>${unsafe_html_o(marked(description || ''))}</div>
            </div>` : y`
              ${data['::type'] === 'array' && dataType === 'array' ? y`
                  <div class='tr'> 
                    <div class='td key'></div> 
                    <div class='td key-type'>
                      ${arrayType && arrayType !== 'object' ? `${dataType} of ${arrayType}` : dataType}
                    </div> 
                    <div class='td key-descr'></div> 
                  </div>` : ''}
          `}
        <div class='object-body'>
        ${Array.isArray(data) && data[0] ? y`${this.generateTree(data[0], 'xxx-of-option', '', '::ARRAY~OF', '', newSchemaLevel, newIndentLevel, '')}` : y`
            ${Object.keys(data).map(dataKey => y`
              ${['::title', '::description', '::type', '::props', '::deprecated', '::array-type', '::readwrite', '::dataTypeLabel'].includes(dataKey) ? data[dataKey]['::type'] === 'array' || data[dataKey]['::type'] === 'object' ? y`${this.generateTree(data[dataKey]['::type'] === 'array' ? data[dataKey]['::props'] : data[dataKey], data[dataKey]['::type'], data[dataKey]['::array-type'] || '', dataKey, data[dataKey]['::description'], newSchemaLevel, newIndentLevel, data[dataKey]['::readwrite'] ? data[dataKey]['::readwrite'] : '')}` : '' : y`${this.generateTree(data[dataKey]['::type'] === 'array' ? data[dataKey]['::props'] : data[dataKey], data[dataKey]['::type'], data[dataKey]['::array-type'] || '', dataKey, data[dataKey]['::description'], newSchemaLevel, newIndentLevel, data[dataKey]['::readwrite'] ? data[dataKey]['::readwrite'] : '')}`}
            `)}
          `}
        <div>
      `;
    } // For Primitive Data types


    const [type, readOrWriteOnly, constraint, defaultValue, allowedValues, pattern, schemaDescription, schemaTitle, deprecated] = data.split('~|~');

    if (readOrWriteOnly === '🆁' && this.schemaHideReadOnly === 'true') {
      return;
    }

    if (readOrWriteOnly === '🆆' && this.schemaHideWriteOnly === 'true') {
      return;
    }

    const dataTypeCss = type.replace(/┃.*/g, '').replace(/[^a-zA-Z0-9+]/g, '').substring(0, 4).toLowerCase();
    let dataTypeHtml = '';

    if (dataType === 'array') {
      dataTypeHtml = y` 
        <div class='td key-type ${dataTypeCss}' title="${readOrWrite === 'readonly' ? 'Read-Only' : readOrWriteOnly === 'writeonly' ? 'Write-Only' : ''}">
          [${type}] ${readOrWrite === 'readonly' ? '🆁' : readOrWrite === 'writeonly' ? '🆆' : ''}
        </div>`;
    } else {
      dataTypeHtml = y` 
        <div class='td key-type ${dataTypeCss}' title="${readOrWriteOnly === '🆁' ? 'Read-Only' : readOrWriteOnly === '🆆' ? 'Write-Only' : ''}">
          ${type} ${readOrWriteOnly}
        </div>`;
    }

    return y`
      <div class = "tr primitive" title="${deprecated ? 'Deprecated' : ''}">
        <div class="td key ${deprecated}" style='padding-left:${leftPadding}px'>
          ${deprecated ? y`<span style='color:var(--red);'>✗</span>` : ''}
          ${(_keyLabel = keyLabel) !== null && _keyLabel !== void 0 && _keyLabel.endsWith('*') ? y`
              <span class="key-label">${keyLabel.substring(0, keyLabel.length - 1)}</span>
              <span style='color:var(--red);'>*</span>` : key.startsWith('::OPTION') ? y`<span class='xxx-of-key'>${keyLabel}</span><span class="xxx-of-descr">${keyDescr}</span>` : y`${keyLabel ? y`<span class="key-label"> ${keyLabel}</span>` : y`<span class="xxx-of-descr">${schemaTitle}</span>`}`}
        </div>
        ${dataTypeHtml}
        <div class='td key-descr' @click="${() => {
      this.schemaDescriptionExpanded = 'true';
    }}">
          ${dataType === 'array' ? y`<span class="m-markdown-small">${unsafe_html_o(marked(description))}</span>` : ''}
          ${schemaDescription ? y`<span class="m-markdown-small">
              ${unsafe_html_o(marked(`${schemaTitle ? `**${schemaTitle}:**` : ''} ${schemaDescription} ${constraint || defaultValue || allowedValues || pattern ? '<span  class="more-content">⤵</span>' : ''}`))}
              </span>` : schemaTitle ? y`${schemaTitle} ${constraint || defaultValue || allowedValues || pattern ? y`<span class="more-content">⤵</span>` : ''}` : ''}
          ${constraint ? y`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Constraints: </span> ${constraint}</div>` : ''}
          ${defaultValue ? y`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Default: </span>${defaultValue}</div>` : ''}
          ${allowedValues ? y`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Allowed: </span>${allowedValues}</div>` : ''}
          ${pattern ? y`<div style='display:inline-block; line-break:anywhere; margin-right:8px;'> <span class='bold-text'>Pattern: </span>${pattern}</div>` : ''}
        </div>
      </div>
    `;
  }
  /* eslint-enable indent */


  toggleObjectExpand(e) {
    const rowEl = e.target.closest('.tr');

    if (rowEl.classList.contains('expanded')) {
      rowEl.classList.add('collapsed');
      rowEl.classList.remove('expanded');
      e.target.innerText = '+';
    } else {
      rowEl.classList.remove('collapsed');
      rowEl.classList.add('expanded');
      e.target.innerText = '-';
    }
  }

}
customElements.define('schema-table', SchemaTable);
;// CONCATENATED MODULE: ./src/components/api-response.js

 // eslint-disable-line import/extensions













class ApiResponse extends lit_element_s {
  constructor() {
    super();
    this.selectedStatus = '';
    this.headersForEachRespStatus = {};
    this.mimeResponsesForEachStatus = {};
    this.activeSchemaTab = 'schema';
  }

  static get properties() {
    return {
      callback: {
        type: String
      },
      webhook: {
        type: String
      },
      responses: {
        type: Object
      },
      parser: {
        type: Object
      },
      schemaStyle: {
        type: String,
        attribute: 'schema-style'
      },
      renderStyle: {
        type: String,
        attribute: 'render-style'
      },
      selectedStatus: {
        type: String,
        attribute: 'selected-status'
      },
      selectedMimeType: {
        type: String,
        attribute: 'selected-mime-type'
      },
      activeSchemaTab: {
        type: String,
        attribute: 'active-schema-tab'
      },
      schemaExpandLevel: {
        type: Number,
        attribute: 'schema-expand-level'
      },
      schemaDescriptionExpanded: {
        type: String,
        attribute: 'schema-description-expanded'
      },
      allowSchemaDescriptionExpandToggle: {
        type: String,
        attribute: 'allow-schema-description-expand-toggle'
      },
      schemaHideReadOnly: {
        type: String,
        attribute: 'schema-hide-read-only'
      },
      schemaHideWriteOnly: {
        type: String,
        attribute: 'schema-hide-write-only'
      }
    };
  }

  static get styles() {
    return [font_styles, flex_styles, tab_styles, table_styles, input_styles, border_styles, i`
      .resp-head{
        vertical-align: middle;
        padding:16px 0 8px;
      }
      .resp-head.divider{
        border-top: 1px solid var(--border-color);
        margin-top:10px;
      }
      .resp-status{ 
        font-weight:bold;
        font-size:calc(var(--font-size-small) + 1px);
      }
      .resp-descr{
        font-size:calc(var(--font-size-small) + 1px);
        color:var(--light-fg);
        text-align:left;
      }
      .top-gap{margin-top:16px;}
      .example-panel{
        font-size:var(--font-size-small);
        margin:0;
      }
      .focused-mode,
      .read-mode {
        padding-top:24px;
        margin-top:12px;
        border-top: 1px dashed var(--border-color);
      }`, custom_styles];
  }

  render() {
    return y`
    <div class="col regular-font response-panel ${this.renderStyle}-mode">
      <div class=" ${this.callback === 'true' ? 'tiny-title' : 'req-res-title'} "> 
        ${this.callback === 'true' ? 'CALLBACK RESPONSE' : 'RESPONSE'}
      </div>
      <div>
        ${this.responseTemplate()}
      <div>  
    </div>  
    `;
  }

  resetSelection() {
    this.selectedStatus = '';
    this.selectedMimeType = '';
  }
  /* eslint-disable indent */


  responseTemplate() {
    if (!this.responses) {
      return '';
    }

    for (const statusCode in this.responses) {
      if (!this.selectedStatus) {
        this.selectedStatus = statusCode;
      }

      const allMimeResp = {};

      for (const mimeResp in (_this$responses$statu = this.responses[statusCode]) === null || _this$responses$statu === void 0 ? void 0 : _this$responses$statu.content) {
        var _this$responses$statu, _respExamples$;

        const mimeRespObj = this.responses[statusCode].content[mimeResp];

        if (!this.selectedMimeType) {
          this.selectedMimeType = mimeResp;
        } // Generate Schema


        const schemaTree = schemaInObjectNotation(mimeRespObj.schema, {}); // Generate Example

        const respExamples = generateExample(mimeRespObj.schema, mimeResp, mimeRespObj.examples, mimeRespObj.example, this.callback === 'true' || this.webhook === 'true' ? false : true, // eslint-disable-line no-unneeded-ternary
        this.callback === 'true' || this.webhook === 'true' ? true : false, // eslint-disable-line no-unneeded-ternary
        mimeResp.includes('json') ? 'json' : 'text');
        allMimeResp[mimeResp] = {
          description: this.responses[statusCode].description,
          examples: respExamples,
          selectedExample: ((_respExamples$ = respExamples[0]) === null || _respExamples$ === void 0 ? void 0 : _respExamples$.exampleId) || '',
          schemaTree
        };
      } // Headers for each response status


      const tempHeaders = [];

      for (const key in (_this$responses$statu2 = this.responses[statusCode]) === null || _this$responses$statu2 === void 0 ? void 0 : _this$responses$statu2.headers) {
        var _this$responses$statu2;

        tempHeaders.push({
          name: key,
          ...this.responses[statusCode].headers[key]
        });
      }

      this.headersForEachRespStatus[statusCode] = tempHeaders;
      this.mimeResponsesForEachStatus[statusCode] = allMimeResp;
    }

    return y`
      ${Object.keys(this.responses).length > 1 ? y`<div class='row' style='flex-wrap:wrap'>
          ${Object.keys(this.responses).map(respStatus => y`
            ${respStatus === '$$ref' // Swagger-Client parser creates '$$ref' object if JSON references are used to create responses - this should be ignored
    ? '' : y`
                <button 
                  @click="${() => {
      this.selectedStatus = respStatus;

      if (this.responses[respStatus].content && Object.keys(this.responses[respStatus].content)[0]) {
        this.selectedMimeType = Object.keys(this.responses[respStatus].content)[0]; // eslint-disable-line prefer-destructuring
      } else {
        this.selectedMimeType = undefined;
      }
    }}"
                  class='m-btn small ${this.selectedStatus === respStatus ? 'primary' : ''}'
                  part="btn ${this.selectedStatus === respStatus ? 'btn-response-status btn-selected-response-status' : ' btn-response-status'}"
                  style='margin: 8px 4px 0 0'
                > 
                  ${respStatus} 
                </button>`}`)}` : y`<span>${Object.keys(this.responses)[0]}</span>`}
      </div>

      ${Object.keys(this.responses).map(status => {
      var _this$responses$statu3, _this$headersForEachR;

      return y`
        <div style = 'display: ${status === this.selectedStatus ? 'block' : 'none'}' >
          <div class="top-gap">
            <span class="resp-descr m-markdown ">${unsafe_html_o(marked(((_this$responses$statu3 = this.responses[status]) === null || _this$responses$statu3 === void 0 ? void 0 : _this$responses$statu3.description) || ''))}</span>
            ${this.headersForEachRespStatus[status] && ((_this$headersForEachR = this.headersForEachRespStatus[status]) === null || _this$headersForEachR === void 0 ? void 0 : _this$headersForEachR.length) > 0 ? y`${this.responseHeaderListTemplate(this.headersForEachRespStatus[status])}` : ''}
          </div>
          ${Object.keys(this.mimeResponsesForEachStatus[status]).length === 0 ? '' : y`  
              <div class="tab-panel col">
                <div class="tab-buttons row" @click="${e => {
        if (e.target.tagName.toLowerCase() === 'button') {
          this.activeSchemaTab = e.target.dataset.tab;
        }
      }}" >
                  <button class="tab-btn ${this.activeSchemaTab === 'example' ? 'active' : ''}" data-tab = 'example'>EXAMPLE </button>
                  <button class="tab-btn ${this.activeSchemaTab !== 'example' ? 'active' : ''}" data-tab = 'schema' >SCHEMA</button>
                  <div style="flex:1"></div>
                  ${Object.keys(this.mimeResponsesForEachStatus[status]).length === 1 ? y`<span class='small-font-size gray-text' style='align-self:center; margin-top:8px;'> ${Object.keys(this.mimeResponsesForEachStatus[status])[0]} </span>` : y`${this.mimeTypeDropdownTemplate(Object.keys(this.mimeResponsesForEachStatus[status]))}`}
                </div>
                ${this.activeSchemaTab === 'example' ? y`<div class ='tab-content col' style = 'flex:1;'>
                      ${this.mimeExampleTemplate(this.mimeResponsesForEachStatus[status][this.selectedMimeType])}
                    </div>` : y`<div class ='tab-content col' style = 'flex:1;'>
                      ${this.mimeSchemaTemplate(this.mimeResponsesForEachStatus[status][this.selectedMimeType])}
                    </div>`}
              </div>
            `}`;
    })}
    `;
  }

  responseHeaderListTemplate(respHeaders) {
    return y`
      <div style="padding:16px 0 8px 0" class="resp-headers small-font-size bold-text">RESPONSE HEADERS</div> 
      <table role="presentation" style="border-collapse: collapse; margin-bottom:16px; border:1px solid var(--border-color); border-radius: var(--border-radius)" class="small-font-size mono-font">
        ${respHeaders.map(v => y`
          <tr>
            <td style="padding:8px; vertical-align: baseline; min-width:120px; border-top: 1px solid var(--light-border-color); text-overflow: ellipsis;">
              ${v.name || ''}
            </td> 
            <td style="padding:4px; vertical-align: baseline; padding:0 5px; border-top: 1px solid var(--light-border-color); text-overflow: ellipsis;">
              ${v.schema.type || ''}
            </td> 
            <td style="padding:8px; vertical-align: baseline; border-top: 1px solid var(--light-border-color);text-overflow: ellipsis;">
              <div class="m-markdown-small regular-font" >${unsafe_html_o(marked(v.description || ''))}</div>
            </td>
            <td style="padding:8px; vertical-align: baseline; border-top: 1px solid var(--light-border-color); text-overflow: ellipsis;">
              ${v.schema.example || ''}
            </td>
          </tr>
        `)}
    </table>`;
  }

  mimeTypeDropdownTemplate(mimeTypes) {
    return y`
      <select aria-label='mime types' @change="${e => {
      this.selectedMimeType = e.target.value;
    }}" style='margin-bottom: -1px; z-index:1'>
        ${mimeTypes.map(mimeType => y`<option value='${mimeType}' ?selected = '${mimeType === this.selectedMimeType}'> ${mimeType} </option>`)}
      </select>`;
  }

  onSelectExample(e) {
    const exampleContainerEl = e.target.closest('.example-panel');
    const exampleEls = [...exampleContainerEl.querySelectorAll('.example')];
    exampleEls.forEach(v => {
      v.style.display = v.dataset.example === e.target.value ? 'block' : 'none';
    });
  }

  mimeExampleTemplate(mimeRespDetails) {
    if (!mimeRespDetails) {
      return y`
        <pre style='color:var(--red)' class = '${this.renderStyle === 'read' ? 'read example-panel border pad-8-16' : 'example-panel border-top'}'> No example provided </pre>
      `;
    }

    return y`
      ${mimeRespDetails.examples.length === 1 ? y`
          ${mimeRespDetails.examples[0].exampleFormat === 'json' ? y`
              ${mimeRespDetails.examples[0].exampleSummary && mimeRespDetails.examples[0].exampleSummary.length > 80 ? y`<div style="padding: 4px 0"> ${mimeRespDetails.examples[0].exampleSummary} </div>` : ''}
              ${mimeRespDetails.examples[0].exampleDescription ? y`<div class="m-markdown-small" style="padding: 4px 0"> ${unsafe_html_o(marked(mimeRespDetails.examples[0].exampleDescription || ''))} </div>` : ''}
              <json-tree 
                render-style = '${this.renderStyle}'
                .data="${mimeRespDetails.examples[0].exampleValue}"
                class = 'example-panel ${this.renderStyle === 'read' ? 'border pad-8-16' : 'border-top pad-top-8'}'
                exportparts = "btn:btn, btn-fill:btn-fill, btn-copy:btn-copy" 
              ></json-tree>` : y`
              ${mimeRespDetails.examples[0].exampleSummary && mimeRespDetails.examples[0].exampleSummary.length > 80 ? y`<div style="padding: 4px 0"> ${mimeRespDetails.examples[0].exampleSummary} </div>` : ''}
              ${mimeRespDetails.examples[0].exampleDescription ? y`<div class="m-markdown-small" style="padding: 4px 0"> ${unsafe_html_o(marked(mimeRespDetails.examples[0].exampleDescription || ''))} </div>` : ''}
              <pre class = 'example-panel ${this.renderStyle === 'read' ? 'border pad-8-16' : 'border-top pad-top-8'}'>${mimeRespDetails.examples[0].exampleValue}</pre>
            `}` : y`
          <span class = 'example-panel ${this.renderStyle === 'read' ? 'border pad-8-16' : 'border-top pad-top-8'}'>
            <select aria-label='response examples' style="min-width:100px; max-width:100%" @change='${e => this.onSelectExample(e)}'>
              ${mimeRespDetails.examples.map(v => y`<option value="${v.exampleId}" ?selected=${v.exampleId === mimeRespDetails.selectedExample} > 
                ${v.exampleSummary.length > 80 ? v.exampleId : v.exampleSummary} 
              </option>`)}
            </select>
            ${mimeRespDetails.examples.map(v => y`
              <div class="example" data-example = '${v.exampleId}' style = "display: ${v.exampleId === mimeRespDetails.selectedExample ? 'block' : 'none'}">
                ${v.exampleSummary && v.exampleSummary.length > 80 ? y`<div style="padding: 4px 0"> ${v.exampleSummary} </div>` : ''}
                ${v.exampleDescription ? y`<div class="m-markdown-small"  style="padding: 4px 0"> ${unsafe_html_o(marked(v.exampleDescription || ''))} </div>` : ''}
                ${v.exampleFormat === 'json' ? y`
                    <json-tree 
                      render-style = '${this.renderStyle}'
                      .data = '${v.exampleValue}'
                      exportparts = "btn:btn, btn-fill:btn-fill, btn-copy:btn-copy" 
                    ></json-tree>` : y`<pre>${v.exampleValue}</pre>`}
              </div>  
            `)}
          </span>  
        `}
    `;
  }

  mimeSchemaTemplate(mimeRespDetails) {
    if (!mimeRespDetails) {
      return y`
        <pre style='color:var(--red)' class = '${this.renderStyle === 'read' ? 'border pad-8-16' : 'border-top'}'> Schema not found</pre>
      `;
    }

    return y`
      ${this.schemaStyle === 'table' ? y`
          <schema-table
            .data = "${mimeRespDetails.schemaTree}"
            schema-expand-level = "${this.schemaExpandLevel}"
            schema-description-expanded = "${this.schemaDescriptionExpanded}"
            allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
            schema-hide-read-only = "${this.schemaHideReadOnly}"
            schema-hide-write-only = "${this.schemaHideWriteOnly}"
            exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
          > </schema-table> ` : y`
          <schema-tree
            .data = '${mimeRespDetails.schemaTree}'
            schema-expand-level = "${this.schemaExpandLevel}"
            schema-description-expanded = "${this.schemaDescriptionExpanded}"
            allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
            schema-hide-read-only = "${this.schemaHideReadOnly}"
            schema-hide-write-only = "${this.schemaHideWriteOnly}"
            exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
          > </schema-tree>`}`;
  }
  /* eslint-enable indent */


} // Register the element with the browser

customElements.define('api-response', ApiResponse);
;// CONCATENATED MODULE: ./src/templates/expanded-endpoint-template.js

 // eslint-disable-line import/extensions








/* eslint-disable indent */

function headingRenderer(tagElementId) {
  const renderer = new marked.Renderer();

  renderer.heading = (text, level, raw, slugger) => `<h${level} class="observe-me" id="${tagElementId}--${slugger.slug(raw)}">${text}</h${level}>`;

  return renderer;
}

function expandedEndpointBodyTemplate(path, tagName = '') {
  var _path$xBadges, _path$servers, _path$servers$;

  const acceptContentTypes = new Set();

  for (const respStatus in path.responses) {
    for (const acceptContentType in (_path$responses$respS = path.responses[respStatus]) === null || _path$responses$respS === void 0 ? void 0 : _path$responses$respS.content) {
      var _path$responses$respS;

      acceptContentTypes.add(acceptContentType.trim());
    }
  }

  const accept = [...acceptContentTypes].join(', '); // Filter API Keys that are non-empty and are applicable to the the path

  const nonEmptyApiKeys = this.resolvedSpec.securitySchemes.filter(v => {
    var _path$security;

    return v.finalKeyValue && ((_path$security = path.security) === null || _path$security === void 0 ? void 0 : _path$security.some(ps => v.securitySchemeId in ps));
  }) || []; // If a RapiDoc API Key is specified on the element and its value is not hyphen(-) then include it for all paths

  const rapiDocApiKey = this.resolvedSpec.securitySchemes.find(v => v.securitySchemeId === rapidocApiKey && v.value !== '-');

  if (rapiDocApiKey) {
    nonEmptyApiKeys.push(rapiDocApiKey);
  }

  const codeSampleTabPanel = path.xCodeSamples ? codeSamplesTemplate.call(this, path.xCodeSamples) : '';
  return y`
    ${this.renderStyle === 'read' ? y`<div class='divider' part="operation-divider"></div>` : ''}
    <div class='expanded-endpoint-body observe-me ${path.method} ${path.deprecated ? 'deprecated' : ''} ' part="section-operation ${path.elementId}" id='${path.elementId}'>
      ${this.renderStyle === 'focused' && tagName !== 'General ⦂' ? y`<h3 class="upper" style="font-weight:bold" part="section-operation-tag"> ${tagName} </h3>` : ''}
      ${path.deprecated ? y`<div class="bold-text red-text"> DEPRECATED </div>` : ''}
      ${y`
        ${path.xBadges && ((_path$xBadges = path.xBadges) === null || _path$xBadges === void 0 ? void 0 : _path$xBadges.length) > 0 ? y`
            <div style="display:flex; flex-wrap:wrap; margin-bottom: -24px; font-size: var(--font-size-small);">
              ${path.xBadges.map(v => y`<span style="margin:1px; margin-right:5px; padding:1px 8px; font-weight:bold; border-radius:12px;  background-color: var(--light-${v.color}, var(--input-bg)); color:var(--${v.color}); border:1px solid var(--${v.color})">${v.label}</span>`)}
            </div>
            ` : ''}
        <h2 part="section-operation-summary"> ${path.shortSummary || `${path.method.toUpperCase()} ${path.path}`}</h2>
        ${path.isWebhook ? y`<span part="section-operation-webhook" style="color:var(--primary-color); font-weight:bold; font-size: var(--font-size-regular);"> WEBHOOK </span>` : y`
            <div part="section-operation-webhook-method" class="mono-font regular-font-size" style="text-align:left; direction:ltr; padding: 8px 0; color:var(--fg3)"> 
              <span part="label-operation-method" class="regular-font upper method-fg bold-text"> ${path.method}'>${path.method}</span> 
              <span part="label-operation-path">${path.path}</span>
            </div>
          `}
        <slot name="${path.elementId}"></slot>`}
      ${path.description ? y`<div class="m-markdown"> ${unsafe_html_o(marked(path.description))}</div>` : ''}
      ${pathSecurityTemplate.call(this, path.security)}
      ${codeSampleTabPanel}
      <div class='expanded-req-resp-container'>
        <api-request
          class = "${this.renderStyle}-mode"
          style = "width:100%;"
          webhook = "${path.isWebhook}"
          method = "${path.method}"
          path = "${path.path}"
          .security = "${path.security}"
          .parameters = "${path.parameters}"
          .request_body = "${path.requestBody}"
          .api_keys = "${nonEmptyApiKeys}"
          .servers = "${path.servers}"
          server-url = "${((_path$servers = path.servers) === null || _path$servers === void 0 ? void 0 : (_path$servers$ = _path$servers[0]) === null || _path$servers$ === void 0 ? void 0 : _path$servers$.url) || this.selectedServer.computedUrl}"
          fill-request-fields-with-example = "${this.fillRequestFieldsWithExample}"
          allow-try = "${this.allowTry}"
          accept = "${accept}"
          render-style="${this.renderStyle}" 
          schema-style = "${this.schemaStyle}"
          active-schema-tab = "${this.defaultSchemaTab}"
          schema-expand-level = "${this.schemaExpandLevel}"
          schema-description-expanded = "${this.schemaDescriptionExpanded}"
          allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
          schema-hide-read-only = "${this.schemaHideReadOnly === 'never' ? 'false' : path.isWebhook ? 'false' : 'true'}"
          schema-hide-write-only = "${this.schemaHideWriteOnly === 'never' ? 'false' : path.isWebhook ? 'true' : 'false'}"
          fetch-credentials = "${this.fetchCredentials}"
          exportparts = "wrap-request-btn:wrap-request-btn, btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
            file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
            anchor:anchor, anchor-param-example:anchor-param-example, schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
        > </api-request>

        ${path.callbacks ? callbackTemplate.call(this, path.callbacks) : ''}

        <api-response
          class = "${this.renderStyle}-mode"
          style = "width:100%;"
          webhook = "${path.isWebhook}"
          .responses = "${path.responses}"
          render-style = "${this.renderStyle}"
          schema-style = "${this.schemaStyle}"
          active-schema-tab = "${this.defaultSchemaTab}"
          schema-expand-level = "${this.schemaExpandLevel}"
          schema-description-expanded = "${this.schemaDescriptionExpanded}"
          allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
          schema-hide-read-only = "${this.schemaHideReadOnly === 'never' ? 'false' : path.isWebhook ? 'true' : 'false'}"
          schema-hide-write-only = "${this.schemaHideWriteOnly === 'never' ? 'false' : path.isWebhook ? 'false' : 'true'}"
          selected-status = "${Object.keys(path.responses || {})[0] || ''}"
          exportparts = "btn:btn, btn-response-status:btn-response-status, btn-selected-response-status:btn-selected-response-status, btn-fill:btn-fill, btn-copy:btn-copy,
          schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
        > </api-response>
      </div>
    </div>
  `;
}
function expandedEndpointTemplate() {
  if (!this.resolvedSpec) {
    return '';
  }

  return y`
  ${this.resolvedSpec.tags.map(tag => y`
    <section id="${tag.elementId}" part="section-tag" class="regular-font section-gap--read-mode observe-me" style="border-top:1px solid var(--primary-color);">
      <div class="title tag" part="section-tag-title label-tag-title">${tag.name}</div>
      <slot name="${tag.elementId}"></slot>
      <div class="regular-font-size">
      ${unsafe_html_o(`
          <div class="m-markdown regular-font">
          ${marked(tag.description || '', this.infoDescriptionHeadingsInNavBar === 'true' ? {
    renderer: headingRenderer(tag.elementId)
  } : undefined)}
        </div>`)}
      </div>
    </section>
    <section class="regular-font section-gap--read-mode" part="section-operations-in-tag">
      ${tag.paths.map(path => expandedEndpointBodyTemplate.call(this, path, 'BBB'))}
    </section>
    `)}
`;
}
/* eslint-enable indent */
;// CONCATENATED MODULE: ./src/templates/components-template.js

 // eslint-disable-line import/extensions







function schemaBodyTemplate(sComponent) {
  return y`
  <div class='divider'></div>
  <div class='expanded-endpoint-body observe-me ${sComponent.name}' id='cmp--${sComponent.id}' >
    <div style="font-weight:bold"> ${sComponent.name} <span style="color:var(--light-fg); font-size:var(--font-size-small); font-weight:400;"> Schema </span></div>
  ${this.schemaStyle === 'table' ? y`
      <schema-table
        .data = '${schemaInObjectNotation(sComponent.component, {})}'
        schema-expand-level = "${this.schemaExpandLevel}"
        schema-description-expanded = "${this.schemaDescriptionExpanded}"
        allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
        schema-hide-read-only = "false"
        schema-hide-write-only = "${this.schemaHideWriteOnly}"
        exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
      > </schema-table>` : y`
      <schema-tree
        .data = '${schemaInObjectNotation(sComponent.component, {})}'
        schema-expand-level = "${this.schemaExpandLevel}"
        schema-description-expanded = "${this.schemaDescriptionExpanded}"
        allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
        schema-hide-read-only = "false"
        schema-hide-write-only = "${this.schemaHideWriteOnly}"
        exportparts = "schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
      > </schema-tree>`}
  </div>`;
}

function componentBodyTemplate(sComponent, componentType) {
  if (sComponent.id.indexOf('schemas-') !== -1) {
    return schemaBodyTemplate.call(this, sComponent);
  }

  return y`
  <div class='divider'></div>
  <div class='expanded-endpoint-body observe-me ${sComponent.name}' id='cmp--${sComponent.id}' >
    ${y`
      <div style="font-weight:bold"> ${sComponent.name} <span style="color:var(--light-fg); font-size:var(--font-size-small); font-weight:400"> ${componentType} </span> </div>
      ${sComponent.component ? y`
      <div class='mono-font regular-font-size' style='padding: 8px 0; color:var(--fg2)'> 
        <json-tree class="border tree" render-style='${this.renderStyle}' .data="${sComponent.component}"> </json-tree>
      </div>` : ''}
    `}
  </div>
  `;
}

function componentsTemplate() {
  if (!this.resolvedSpec) {
    return '';
  }

  return y`
  ${this.resolvedSpec.components.map(component => y`
    <div id="cmp--${component.name.toLowerCase()}" class='regular-font section-gap--read-mode observe-me' style="border-top:1px solid var(--primary-color);">
      <div class="title tag">${component.name}</div>
      <div class="regular-font-size">
        ${unsafe_html_o(`<div class='m-markdown regular-font'>${marked(component.description ? component.description : '')}</div>`)}
      </div>
    </div>
    <div class='regular-font section-gap--read-mode'>
      ${component.subComponents.filter(c => c.expanded !== false).map(sComponent => componentBodyTemplate.call(this, sComponent, component.name))}
    </div>
    `)}
`;
}
/* eslint-enable indent */
;// CONCATENATED MODULE: ./src/templates/overview-template.js

 // eslint-disable-line import/extensions



/* eslint-disable indent */

function overview_template_headingRenderer() {
  const renderer = new marked.Renderer();

  renderer.heading = (text, level, raw, slugger) => `<h${level} class="observe-me" id="overview--${slugger.slug(raw)}">${text}</h${level}>`;

  return renderer;
}

function overviewTemplate() {
  var _this$resolvedSpec, _this$resolvedSpec$in, _this$resolvedSpec$in2, _this$specUrl;

  return y`
    <section id="overview" part="section-overview"
      class="observe-me ${this.renderStyle === 'view' ? 'section-gap' : 'section-gap--read-mode'}">
      ${(_this$resolvedSpec = this.resolvedSpec) !== null && _this$resolvedSpec !== void 0 && _this$resolvedSpec.info ? y`
          <div id="api-title" part="section-overview-title" style="font-size:32px">
            ${this.resolvedSpec.info.title}
            ${!this.resolvedSpec.info.version ? '' : y`
              <span style = 'font-size:var(--font-size-small);font-weight:bold'>
                ${this.resolvedSpec.info.version}
              </span>`}
          </div>
          <div id="api-info" style="font-size:calc(var(--font-size-regular) - 1px); margin-top:8px;">
            ${(_this$resolvedSpec$in = this.resolvedSpec.info.contact) !== null && _this$resolvedSpec$in !== void 0 && _this$resolvedSpec$in.email ? y`<span>${this.resolvedSpec.info.contact.name || 'Email'}: 
                <a href="mailto:${this.resolvedSpec.info.contact.email}" part="anchor anchor-overview">${this.resolvedSpec.info.contact.email}</a>
              </span>` : ''}
            ${(_this$resolvedSpec$in2 = this.resolvedSpec.info.contact) !== null && _this$resolvedSpec$in2 !== void 0 && _this$resolvedSpec$in2.url ? y`<span>URL: <a href="${this.resolvedSpec.info.contact.url}" part="anchor anchor-overview">${this.resolvedSpec.info.contact.url}</a></span>` : ''}
            ${this.resolvedSpec.info.license ? y`<span>License: 
                ${this.resolvedSpec.info.license.url ? y`<a href="${this.resolvedSpec.info.license.url}" part="anchor anchor-overview">${this.resolvedSpec.info.license.name}</a>` : this.resolvedSpec.info.license.name} </span>` : ''}
            ${this.resolvedSpec.info.termsOfService ? y`<span><a href="${this.resolvedSpec.info.termsOfService}" part="anchor anchor-overview">Terms of Service</a></span>` : ''}
            ${this.specUrl && this.allowSpecFileDownload === 'true' ? y`
                <div style="display:flex; margin:12px 0; gap:8px; justify-content: start;">
                  <button class="m-btn thin-border" style="width:170px" part="btn btn-outline" @click='${e => {
    downloadResource(this.specUrl, 'openapi-spec', e);
  }}'>Download OpenAPI spec</button>
                  ${(_this$specUrl = this.specUrl) !== null && _this$specUrl !== void 0 && _this$specUrl.trim().toLowerCase().endsWith('json') ? y`<button class="m-btn thin-border" style="width:200px" part="btn btn-outline" @click='${e => {
    viewResource(this.specUrl, e);
  }}'>View OpenAPI spec (New Tab)</button>` : ''}
                </div>` : ''}
          </div>
          <slot name="overview"></slot>
          <div id="api-description">
          ${this.resolvedSpec.info.description ? y`${unsafe_html_o(`
                <div class="m-markdown regular-font">
                ${marked(this.resolvedSpec.info.description, this.infoDescriptionHeadingsInNavBar === 'true' ? {
    renderer: overview_template_headingRenderer()
  } : undefined)}
              </div>`)}` : ''}
          </div>
        ` : ''}
    </section>
  `;
}
/* eslint-enable indent */
;// CONCATENATED MODULE: ./src/templates/server-template.js

 // eslint-disable-line import/extensions


function setApiServer(serverUrl) {
  var _this$resolvedSpec;

  const serverObj = (_this$resolvedSpec = this.resolvedSpec) === null || _this$resolvedSpec === void 0 ? void 0 : _this$resolvedSpec.servers.find(s => s.url === serverUrl);

  if (!serverObj) {
    return false;
  }

  this.selectedServer = serverObj;
  this.requestUpdate();
  this.dispatchEvent(new CustomEvent('api-server-change', {
    bubbles: true,
    composed: true,
    detail: {
      selectedServer: serverObj
    }
  }));
  return true;
}

function onApiServerVarChange(e, serverObj) {
  const inputEls = [...e.currentTarget.closest('table').querySelectorAll('input, select')];
  let tempUrl = serverObj.url;
  inputEls.forEach(v => {
    const regex = new RegExp(`{${v.dataset.var}}`, 'g');
    tempUrl = tempUrl.replace(regex, v.value);
  });
  serverObj.computedUrl = tempUrl;
  this.requestUpdate();
}
/* eslint-disable indent */


function serverVarsTemplate() {
  // const selectedServerObj = this.resolvedSpec.servers.find((v) => (v.url === this.selectedServer));
  return this.selectedServer && this.selectedServer.variables ? y`
    <div class="table-title">SERVER VARIABLES</div>
    <table class='m-table' role='presentation'>
      ${Object.entries(this.selectedServer.variables).map(kv => y`
        <tr>
          <td style="vertical-align: middle;" >${kv[0]}</td>
          <td>
            ${kv[1].enum ? y`
            <select
              data-var = "${kv[0]}"
              @input = ${e => {
    onApiServerVarChange.call(this, e, this.selectedServer);
  }}
            >
            ${Object.entries(kv[1].enum).map(e => kv[1].default === e[1] ? y`
              <option
                selected
                label = ${e[1]}
                value = ${e[1]}
              />` : y`
              <option
                label = ${e[1]}
                value = ${e[1]}
              />`)}
            </select>` : y`
            <input
              type = "text"
              part="textbox textbox-server-var"
              spellcheck = "false"
              data-var = "${kv[0]}"
              value = "${kv[1].default}"
              @input = ${e => {
    onApiServerVarChange.call(this, e, this.selectedServer);
  }}
            />`}
          </td>
        </tr>
        ${kv[1].description ? y`<tr><td colspan="2" style="border:none"><span class="m-markdown-small"> ${unsafe_html_o(marked(kv[1].description))} </span></td></tr>` : ''}
      `)}
    </table>
    ` : '';
}

function serverTemplate() {
  var _this$resolvedSpec$se, _this$resolvedSpec2, _this$selectedServer;

  if (!this.resolvedSpec || this.resolvedSpec.specLoadError) {
    return '';
  }

  return y`
  <section id = 'servers' part="section-servers" style="text-align:left; direction:ltr; margin-top:24px; margin-bottom:24px;" class='regular-font observe-me ${'read focused'.includes(this.renderStyle) ? 'section-gap--read-mode' : 'section-gap'}'>
    <div part = "section-servers-title" class = "sub-title">API SERVER</div>
    <div class = 'mono-font' style='margin: 12px 0; font-size:calc(var(--font-size-small) + 1px);'>
      ${!this.resolvedSpec.servers || ((_this$resolvedSpec$se = this.resolvedSpec.servers) === null || _this$resolvedSpec$se === void 0 ? void 0 : _this$resolvedSpec$se.length) === 0 ? '' : y`
          ${(_this$resolvedSpec2 = this.resolvedSpec) === null || _this$resolvedSpec2 === void 0 ? void 0 : _this$resolvedSpec2.servers.map((server, i) => y`
            <input type = 'radio'
              name = 'api_server'
              id = 'srvr-opt-${i}'
              value = '${server.url}'
              @change = ${() => {
    setApiServer.call(this, server.url);
  }}
              .checked = '${this.selectedServer.url === server.url}'
              style = 'margin:4px 0; cursor:pointer'
            />
              <label style='cursor:pointer' for='srvr-opt-${i}'>
                ${server.url} ${server.description ? y`- <span class='regular-font'>${server.description} </span>` : ''}
              </label>
            <br/>
          `)}
      `}
      <div class="table-title primary-text" part="label-selected-server"> SELECTED: ${((_this$selectedServer = this.selectedServer) === null || _this$selectedServer === void 0 ? void 0 : _this$selectedServer.computedUrl) || 'none'}</div>
    </div>
    <slot name="servers"></slot>
    ${serverVarsTemplate.call(this)}
  </section>`;
}
/* eslint-enable indent */
;// CONCATENATED MODULE: ./src/templates/navbar-template.js



function expandCollapseNavBarTag(navLinkEl, action = 'toggle') {
  const tagAndPathEl = navLinkEl === null || navLinkEl === void 0 ? void 0 : navLinkEl.closest('.nav-bar-tag-and-paths');

  if (tagAndPathEl) {
    const isExpanded = tagAndPathEl.classList.contains('expanded');

    if (isExpanded && (action === 'toggle' || action === 'collapse')) {
      tagAndPathEl.classList.replace('expanded', 'collapsed');
    } else if (!isExpanded && (action === 'toggle' || action === 'expand')) {
      tagAndPathEl.classList.replace('collapsed', 'expanded');
    }
  }
}
function expandCollapseAll(navEl, action = 'expand-all') {
  const elList = [...navEl.querySelectorAll('.nav-bar-tag-and-paths')];

  if (action === 'expand-all') {
    elList.map(el => {
      el.classList.replace('collapsed', 'expanded');
    });
  } else {
    elList.map(el => {
      el.classList.replace('expanded', 'collapsed');
    });
  }
}

function onExpandCollapse(e) {
  expandCollapseNavBarTag(e.target, 'toggle');
}

function onExpandCollapseAll(e, action = 'expand-all') {
  expandCollapseAll(e.target.closest('.nav-scroll'), action);
}
/* eslint-disable indent */


function navbarTemplate() {
  var _this$resolvedSpec$in, _this$resolvedSpec$in2, _this$resolvedSpec$in3, _this$resolvedSpec$in4;

  if (!this.resolvedSpec || this.resolvedSpec.specLoadError) {
    return y`
      <nav class='nav-bar' part="section-navbar">
        <slot name="nav-logo" class="logo"></slot>
      </nav>
    `;
  }

  return y`
  <nav class='nav-bar ${this.renderStyle}' part="section-navbar">
    <slot name="nav-logo" class="logo"></slot>
    ${this.allowSearch === 'false' && this.allowAdvancedSearch === 'false' ? '' : y`
        <div style="display:flex; flex-direction:row; justify-content:center; align-items:stretch; padding:8px 24px 12px 24px; ${this.allowAdvancedSearch === 'false' ? 'border-bottom: 1px solid var(--nav-hover-bg-color)' : ''}" part="section-navbar-search">
          ${this.allowSearch === 'false' ? '' : y`
              <div style="display:flex; flex:1; line-height:22px;">
                <input id="nav-bar-search" 
                  part = "textbox textbox-nav-filter"
                  style = "width:100%; padding-right:20px; color:var(--nav-hover-text-color); border-color:var(--nav-accent-color); background-color:var(--nav-hover-bg-color)" 
                  type = "text"
                  placeholder = "Filter" 
                  @change = "${this.onSearchChange}"  
                  spellcheck = "false" 
                >
                <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div>
              </div>  
              ${this.matchPaths ? y`
                  <button @click = '${this.onClearSearch}' class="m-btn thin-border" style="margin-left:5px; color:var(--nav-text-color); width:75px; padding:6px 8px;" part="btn btn-outline btn-clear-filter">
                    CLEAR
                  </button>` : ''}
            `}
          ${this.allowAdvancedSearch === 'false' || this.matchPaths ? '' : y`
              <button class="m-btn primary" part="btn btn-fill btn-search" style="margin-left:5px; padding:6px 8px; width:75px" @click="${this.onShowSearchModalClicked}">
                SEARCH
              </button>
            `}
        </div>
      `}
    ${y`<nav class='nav-scroll' part="section-navbar-scroll">
      ${this.showInfo === 'false' || !this.resolvedSpec.info ? '' : y`
          ${this.infoDescriptionHeadingsInNavBar === 'true' ? y`
              ${this.resolvedSpec.infoDescriptionHeaders.length > 0 ? y`<div class='nav-bar-info' id='link-overview' data-content-id='overview' @click = '${e => this.scrollToEventTarget(e, false)}'> 
                    ${((_this$resolvedSpec$in = this.resolvedSpec.info) === null || _this$resolvedSpec$in === void 0 ? void 0 : (_this$resolvedSpec$in2 = _this$resolvedSpec$in.title) === null || _this$resolvedSpec$in2 === void 0 ? void 0 : _this$resolvedSpec$in2.trim()) || 'Overview'}
                  </div>` : ''}
              <div class="overview-headers">
                ${this.resolvedSpec.infoDescriptionHeaders.map(header => y`
                  <div 
                    class='nav-bar-h${header.depth}' 
                    id="link-overview--${new marked.Slugger().slug(header.text)}"  
                    data-content-id='overview--${new marked.Slugger().slug(header.text)}' 
                    @click='${e => this.scrollToEventTarget(e, false)}'
                  >
                    ${header.text}
                  </div>`)}
              </div>
              ${this.resolvedSpec.infoDescriptionHeaders.length > 0 ? y`<hr style='border-top: 1px solid var(--nav-hover-bg-color); border-width:1px 0 0 0; margin: 15px 0 0 0'/>` : ''}
            ` : y`<div class='nav-bar-info' id='link-overview' data-content-id='overview' @click = '${e => this.scrollToEventTarget(e, false)}'> 
            ${((_this$resolvedSpec$in3 = this.resolvedSpec.info) === null || _this$resolvedSpec$in3 === void 0 ? void 0 : (_this$resolvedSpec$in4 = _this$resolvedSpec$in3.title) === null || _this$resolvedSpec$in4 === void 0 ? void 0 : _this$resolvedSpec$in4.trim()) || 'Overview'} 
              </div>`}
        `}
    
      ${this.allowServerSelection === 'false' ? '' : y`<div class='nav-bar-info' id='link-servers' data-content-id='servers' @click = '${e => this.scrollToEventTarget(e, false)}'> API Servers </div>`}
      ${this.allowAuthentication === 'false' || !this.resolvedSpec.securitySchemes ? '' : y`<div class='nav-bar-info' id='link-auth' data-content-id='auth' @click = '${e => this.scrollToEventTarget(e, false)}'> Authentication </div>`}

      <div id='link-operations-top' class='nav-bar-section operations' data-content-id='operations-top' @click = '${e => this.scrollToEventTarget(e, false)}'>
        <div style="font-size:16px; display:flex; margin-left:10px;">
          ${this.renderStyle === 'focused' ? y`
              <div @click="${e => {
    onExpandCollapseAll.call(this, e, 'expand-all');
  }}" title="Expand all" style="transform: rotate(90deg); cursor:pointer; margin-right:10px;">▸</div>
              <div @click="${e => {
    onExpandCollapseAll.call(this, e, 'collapse-all');
  }}" title="Collapse all" style="transform: rotate(270deg); cursor:pointer;">▸</div>` : ''}  
        </div>
        <div class='nav-bar-section-title'> OPERATIONS </div>
      </div>

      <!-- TAGS AND PATHS-->
      ${this.resolvedSpec.tags.filter(tag => tag.paths.filter(path => pathIsInSearch(this.matchPaths, path, this.matchType)).length).map(tag => y`
          <div class='nav-bar-tag-and-paths ${tag.expanded ? 'expanded' : 'collapsed'}'>
            ${tag.name === 'General ⦂' ? y`<hr style="border:none; border-top: 1px dotted var(--nav-text-color); opacity:0.3; margin:-1px 0 0 0;"/>` : y`
                <div 
                  class='nav-bar-tag' 
                  id="link-${tag.elementId}" 
                  data-content-id='${tag.elementId}'
                  data-first-path-id='${tag.firstPathId}'
                  @click='${e => {
    if (this.renderStyle === 'focused' && this.onNavTagClick === 'expand-collapse') {
      onExpandCollapse.call(this, e);
    } else {
      this.scrollToEventTarget(e, false);
    }
  }}'
                >
                  <div>${tag.name}</div>
                  <div class="nav-bar-tag-icon" @click="${e => {
    if (this.renderStyle === 'focused' && this.onNavTagClick === 'show-description') {
      onExpandCollapse.call(this, e);
    }
  }}">
                  </div>
                </div>
              `}
            ${this.infoDescriptionHeadingsInNavBar === 'true' ? y`
                ${this.renderStyle === 'focused' && this.onNavTagClick === 'expand-collapse' ? '' : y`
                    <div class='tag-headers'>
                      ${tag.headers.map(header => y`
                      <div 
                        class='nav-bar-h${header.depth}' 
                        id="link-${tag.elementId}--${new marked.Slugger().slug(header.text)}"  
                        data-content-id='${tag.elementId}--${new marked.Slugger().slug(header.text)}' 
                        @click='${e => this.scrollToEventTarget(e, false)}'
                      > ${header.text}</div>`)}
                    </div>`}` : ''}

            
            <div class='nav-bar-paths-under-tag'>
              <!-- Paths in each tag (endpoints) -->
              ${tag.paths.filter(v => {
    if (this.matchPaths) {
      return pathIsInSearch(this.matchPaths, v, this.matchType);
    }

    return true;
  }).map(p => y`
              <div 
                class='nav-bar-path
                ${this.usePathInNavBar === 'true' ? 'small-font' : ''}'
                data-content-id='${p.elementId}'
                id='link-${p.elementId}'
                @click = '${e => {
    this.scrollToEventTarget(e, false);
  }}'
              >
                <span style = "display:flex; align-items:start; ${p.deprecated ? 'filter:opacity(0.5)' : ''}">
                  ${y`<span class="nav-method ${this.showMethodInNavBar} ${p.method}">
                      ${this.showMethodInNavBar === 'as-colored-block' ? p.method.substring(0, 3).toUpperCase() : p.method.toUpperCase()}
                    </span>`}
                  ${p.isWebhook ? y`<span style="font-weight:bold; margin-right:8px; font-size: calc(var(--font-size-small) - 2px)">WEBHOOK</span>` : ''}
                  ${this.usePathInNavBar === 'true' ? y`<span class='mono-font'>${p.path}</span>` : p.summary || p.shortSummary}
                </span>
              </div>`)}
            </div>
          </div>
        `)}

      <!-- COMPONENTS -->
      ${this.resolvedSpec.components && this.showComponents === 'true' && this.renderStyle === 'focused' ? y`
          <div id='link-components' class='nav-bar-section components'>
            <div></div>
            <div class='nav-bar-section-title'>COMPONENTS</div>
          </div>
          ${this.resolvedSpec.components.map(component => component.subComponents.length ? y`
              <div class='nav-bar-tag' 
                data-content-id='cmp--${component.name.toLowerCase()}' 
                id='link-cmp--${component.name.toLowerCase()}' 
                @click='${e => this.scrollToEventTarget(e, false)}'>
                ${component.name}
              </div>
              ${component.subComponents.filter(p => p.expanded !== false).map(p => y`
                <div class='nav-bar-path' data-content-id='cmp--${p.id}' id='link-cmp--${p.id}' @click='${e => this.scrollToEventTarget(e, false)}'>
                  <span> ${p.name} </span>
                </div>`)}` : '')}` : ''}
    </nav>`}
</nav>
`;
}
/* eslint-enable indent */
;// CONCATENATED MODULE: ./src/templates/focused-endpoint-template.js

 // eslint-disable-line import/extensions











function focused_endpoint_template_headingRenderer(tagElementId) {
  const renderer = new marked.Renderer();

  renderer.heading = (text, level, raw, slugger) => `<h${level} class="observe-me" id="${tagElementId}--${slugger.slug(raw)}">${text}</h${level}>`;

  return renderer;
}

function wrapFocusedTemplate(templateToWrap) {
  return y`
    <div class='regular-font section-gap--focused-mode' part="section-operations-in-tag">
      ${templateToWrap}
    </div>`;
}

function defaultContentTemplate() {
  var _this$resolvedSpec$ta;

  // In focused mode default content is overview or first path
  if (this.showInfo === 'true') {
    return wrapFocusedTemplate(overviewTemplate.call(this));
  }

  const selectedTagObj = this.resolvedSpec.tags[0];
  const selectedPathObj = (_this$resolvedSpec$ta = this.resolvedSpec.tags[0]) === null || _this$resolvedSpec$ta === void 0 ? void 0 : _this$resolvedSpec$ta.paths[0];
  return selectedTagObj && selectedPathObj ? wrapFocusedTemplate(expandedEndpointBodyTemplate.call(this, selectedPathObj, selectedTagObj.name)) : wrapFocusedTemplate('');
}
/* eslint-disable indent */


function focusedTagBodyTemplate(tag) {
  return y`
    <h1 id="${tag.elementId}">${tag.name}</h1>
    ${this.onNavTagClick === 'show-description' && tag.description ? y`
        <div class="m-markdown">
          ${unsafe_html_o(`
            <div class="m-markdown regular-font">
              ${marked(tag.description || '', this.infoDescriptionHeadingsInNavBar === 'true' ? {
    renderer: focused_endpoint_template_headingRenderer(tag.elementId)
  } : undefined)}
            </div>`)}
        </div>` : ''}
  `;
}

function focusedEndpointTemplate() {
  if (!this.focusedElementId || !this.resolvedSpec) {
    return;
  }

  const focusElId = this.focusedElementId;
  let selectedPathObj = null;
  let selectedTagObj = null;
  let focusedTemplate;
  let i = 0;

  if (focusElId.startsWith('overview') && this.showInfo === 'true') {
    focusedTemplate = overviewTemplate.call(this);
  } else if (focusElId === 'auth' && this.allowAuthentication === 'true') {
    focusedTemplate = securitySchemeTemplate.call(this);
  } else if (focusElId === 'servers' && this.allowServerSelection === 'true') {
    focusedTemplate = serverTemplate.call(this);
  } else if (focusElId === 'operations-top') {
    focusedTemplate = y`
    <div id="operations-top" class="observe-me">
      <slot name="operations-top"></slot>
    </div>`;
  } else if (focusElId.startsWith('cmp--') && this.showComponents === 'true') {
    focusedTemplate = componentsTemplate.call(this);
  } else if (focusElId.startsWith('tag--')) {
    const idToFocus = focusElId.indexOf('--', 4) > 0 ? focusElId.substring(0, focusElId.indexOf('--', 5)) : focusElId;
    selectedTagObj = this.resolvedSpec.tags.find(v => v.elementId === idToFocus);

    if (selectedTagObj) {
      focusedTemplate = wrapFocusedTemplate.call(this, focusedTagBodyTemplate.call(this, selectedTagObj));
    } else {
      focusedTemplate = defaultContentTemplate.call(this);
    }
  } else {
    for (i = 0; i < this.resolvedSpec.tags.length; i += 1) {
      selectedTagObj = this.resolvedSpec.tags[i];
      selectedPathObj = this.resolvedSpec.tags[i].paths.find(v => `${v.elementId}` === focusElId);

      if (selectedPathObj) {
        break;
      }
    }

    if (selectedPathObj) {
      // In focused mode we must expand the nav-bar tag element if it is collapsed
      const newNavEl = this.shadowRoot.getElementById(`link-${focusElId}`);
      expandCollapseNavBarTag(newNavEl, 'expand');
      focusedTemplate = wrapFocusedTemplate.call(this, expandedEndpointBodyTemplate.call(this, selectedPathObj, selectedTagObj.name));
    } else {
      // if focusedElementId is not found then show the default content (overview or first-path)
      focusedTemplate = defaultContentTemplate.call(this);
    }
  }

  return focusedTemplate;
}
/* eslint-enable indent */
;// CONCATENATED MODULE: ./src/templates/endpoint-template.js

 // eslint-disable-line import/extensions









function toggleExpand(path) {
  if (path.expanded) {
    path.expanded = false; // collapse

    if (this.updateRoute === 'true') {
      window.history.replaceState(null, null, `${window.location.href.split('#')[0]}${this.routePrefix === '#' ? '' : `${this.routePrefix}`}`);
    }
  } else {
    path.expanded = true; // Expand

    if (this.updateRoute === 'true') {
      const newHash = `${this.routePrefix || '#'}${path.elementId}`;

      if (window.location.hash !== newHash) {
        window.history.replaceState(null, null, `${window.location.href.split('#')[0]}${newHash}`);
      }
    }
  }

  this.requestUpdate();
}

function endpoint_template_expandCollapseAll(operationsRootEl, action = 'expand-all') {
  const elList = [...operationsRootEl.querySelectorAll('.section-tag')];

  if (action === 'expand-all') {
    elList.map(el => {
      el.classList.replace('collapsed', 'expanded');
    });
  } else {
    elList.map(el => {
      el.classList.replace('expanded', 'collapsed');
    });
  }
}

function endpoint_template_onExpandCollapseAll(e, action = 'expand-all') {
  endpoint_template_expandCollapseAll.call(this, e.target.closest('.operations-root'), action);
}
/* eslint-disable indent */


function endpointHeadTemplate(path, pathsExpanded = false) {
  return y`
  <summary @click="${e => {
    toggleExpand.call(this, path, e);
  }}" part="section-endpoint-head-${path.expanded ? 'expanded' : 'collapsed'}" class='endpoint-head ${path.method} ${path.deprecated ? 'deprecated' : ''} ${pathsExpanded || path.expanded ? 'expanded' : 'collapsed'}'>
    <div part="section-endpoint-head-method" class="method ${path.method} ${path.deprecated ? 'deprecated' : ''}"> ${path.method} </div> 
    <div  part="section-endpoint-head-path" class="path ${path.deprecated ? 'deprecated' : ''}"> 
      ${path.path} 
      ${path.isWebhook ? y`<span style="font-family: var(--font-regular); font-size: var(--); font-size: var(--font-size-small); color:var(--primary-color); margin-left: 16px"> Webhook</span>` : ''}
    </div>
    ${path.deprecated ? y`
        <span style="font-size:var(--font-size-small); text-transform:uppercase; font-weight:bold; color:var(--red); margin:2px 0 0 5px;"> 
          deprecated 
        </span>` : ''}
    ${this.showSummaryWhenCollapsed ? y`
        <div class="only-large-screen" style="min-width:60px; flex:1"></div>
        <div part="section-endpoint-head-description" class="descr">${path.summary || path.shortSummary} </div>` : ''}
  </summary>
  `;
}

function endpointBodyTemplate(path) {
  var _path$xBadges;

  const acceptContentTypes = new Set();

  for (const respStatus in path.responses) {
    for (const acceptContentType in (_path$responses$respS = path.responses[respStatus]) === null || _path$responses$respS === void 0 ? void 0 : _path$responses$respS.content) {
      var _path$responses$respS;

      acceptContentTypes.add(acceptContentType.trim());
    }
  }

  const accept = [...acceptContentTypes].join(', '); // Filter API Keys that are non-empty and are applicable to the the path

  const nonEmptyApiKeys = this.resolvedSpec.securitySchemes.filter(v => {
    var _path$security;

    return v.finalKeyValue && ((_path$security = path.security) === null || _path$security === void 0 ? void 0 : _path$security.some(ps => v.securitySchemeId in ps));
  }) || []; // If a RapiDoc API Key is specified on the element and its value is not hyphen(-) then include it for all paths

  const rapiDocApiKey = this.resolvedSpec.securitySchemes.find(v => v.securitySchemeId === rapidocApiKey && v.value !== '-');

  if (rapiDocApiKey) {
    nonEmptyApiKeys.push(rapiDocApiKey);
  }

  const codeSampleTabPanel = path.xCodeSamples ? codeSamplesTemplate(path.xCodeSamples) : '';
  return y`
  <div part="section-endpoint-body-${path.expanded ? 'expanded' : 'collapsed'}" class='endpoint-body ${path.method} ${path.deprecated ? 'deprecated' : ''}'>
    <div class="summary">
      ${path.summary ? y`<div class="title" part="section-endpoint-body-title">${path.summary}<div>` : path.shortSummary !== path.description ? y`<div class="title" part="section-endpoint-body-title">${path.shortSummary}</div>` : ''}
      ${path.xBadges && ((_path$xBadges = path.xBadges) === null || _path$xBadges === void 0 ? void 0 : _path$xBadges.length) > 0 ? y`
          <div style="display:flex; flex-wrap:wrap;font-size: var(--font-size-small);">
            ${path.xBadges.map(v => y`<span part="endpoint-badge" style="margin:1px; margin-right:5px; padding:1px 8px; font-weight:bold; border-radius:12px;  background-color: var(--light-${v.color}, var(--input-bg)); color:var(--${v.color}); border:1px solid var(--${v.color})">${v.label}</span>`)}
          </div>
          ` : ''}

      ${path.description ? y`<div part="section-endpoint-body-description" class="m-markdown"> ${unsafe_html_o(marked(path.description))}</div>` : ''}
      <slot name="${path.elementId}"></slot>
      ${pathSecurityTemplate.call(this, path.security)}
      ${codeSampleTabPanel}
    </div>  
    <div class='req-resp-container'> 
      <div style="display:flex; flex-direction:column" class="view-mode-request ${this.layout}-layout">
        <api-request
          class = "${this.renderStyle}-mode ${this.layout}-layout"
          style = "width:100%;"
          webhook = "${path.isWebhook}"
          method = "${path.method}"
          path = "${path.path}"
          .security = "${path.security}"
          .parameters = "${path.parameters}"
          .request_body = "${path.requestBody}"
          .api_keys = "${nonEmptyApiKeys}"
          .servers = "${path.servers}" 
          server-url = "${path.servers && path.servers.length > 0 ? path.servers[0].url : this.selectedServer.computedUrl}" 
          active-schema-tab = "${this.defaultSchemaTab}"
          fill-request-fields-with-example = "${this.fillRequestFieldsWithExample}"
          allow-try = "${this.allowTry}"
          accept = "${accept}"
          render-style="${this.renderStyle}" 
          schema-style = "${this.schemaStyle}" 
          schema-expand-level = "${this.schemaExpandLevel}"
          schema-description-expanded = "${this.schemaDescriptionExpanded}"
          allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
          schema-hide-read-only = "${this.schemaHideReadOnly === 'never' ? 'false' : path.isWebhook ? 'false' : 'true'}"
          schema-hide-write-only = "${this.schemaHideWriteOnly === 'never' ? 'false' : path.isWebhook ? 'true' : 'false'}"
          fetch-credentials = "${this.fetchCredentials}"
          exportparts = "wrap-request-btn:wrap-request-btn, btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, btn-clear:btn-clear, btn-clear-resp:btn-clear-resp,
            file-input:file-input, textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, 
            anchor:anchor, anchor-param-example:anchor-param-example, schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
          > </api-request>

          ${path.callbacks ? callbackTemplate.call(this, path.callbacks) : ''}
        </div>  

        <api-response
          class = "${this.renderStyle}-mode"
          style = "width:100%;"
          webhook = "${path.isWebhook}"
          .responses="${path.responses}"
          active-schema-tab = "${this.defaultSchemaTab}" 
          render-style="${this.renderStyle}" 
          schema-style="${this.schemaStyle}"
          schema-expand-level = "${this.schemaExpandLevel}"
          schema-description-expanded = "${this.schemaDescriptionExpanded}"
          allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
          schema-hide-read-only = "${this.schemaHideReadOnly === 'never' ? 'false' : path.isWebhook ? 'true' : 'false'}"
          schema-hide-write-only = "${this.schemaHideWriteOnly === 'never' ? 'false' : path.isWebhook ? 'false' : 'true'}"
          selected-status = "${Object.keys(path.responses || {})[0] || ''}"
          exportparts = "btn:btn, btn-fill:btn-fill, btn-outline:btn-outline, btn-try:btn-try, file-input:file-input, 
          textbox:textbox, textbox-param:textbox-param, textarea:textarea, textarea-param:textarea-param, anchor:anchor, anchor-param-example:anchor-param-example, btn-clear-resp:btn-clear-resp,
          schema-description:schema-description, schema-multiline-toggle:schema-multiline-toggle"
        > </api-response>
      </div>
  </div>`;
}

function endpointTemplate(showExpandCollapse = true, showTags = true, pathsExpanded = false) {
  if (!this.resolvedSpec) {
    return '';
  }

  return y`
    ${showExpandCollapse ? y`
        <div style="display:flex; justify-content:flex-end;"> 
          <span @click="${e => endpoint_template_onExpandCollapseAll(e, 'expand-all')}" style="color:var(--primary-color); cursor:pointer;">
            Expand all
          </span> 
          &nbsp;|&nbsp; 
          <span @click="${e => endpoint_template_onExpandCollapseAll(e, 'collapse-all')}" style="color:var(--primary-color); cursor:pointer;" >
            Collapse all
          </span> 
          &nbsp; sections
        </div>` : ''}
    ${this.resolvedSpec.tags.map(tag => y`
      ${showTags ? y` 
          <div class='regular-font section-gap section-tag ${tag.expanded ? 'expanded' : 'collapsed'}'> 
            <div class='section-tag-header' @click="${() => {
    tag.expanded = !tag.expanded;
    this.requestUpdate();
  }}">
              <div id='${tag.elementId}' class="sub-title tag" style="color:var(--primary-color)">${tag.name}</div>
            </div>
            <div class='section-tag-body'>
              <slot name="${tag.elementId}"></slot>
              <div class="regular-font regular-font-size m-markdown" style="padding-bottom:12px">
                ${unsafe_html_o(marked(tag.description || ''))}
              </div>
              ${tag.paths.filter(v => {
    if (this.matchPaths) {
      return pathIsInSearch(this.matchPaths, v, this.matchType);
    }

    return true;
  }).map(path => y`
                <section part="section-endpoint" id='${path.elementId}' class='m-endpoint regular-font ${path.method} ${pathsExpanded || path.expanded ? 'expanded' : 'collapsed'}'>
                  ${endpointHeadTemplate.call(this, path, pathsExpanded)}      
                  ${pathsExpanded || path.expanded ? endpointBodyTemplate.call(this, path) : ''}
                </section>`)}
            </div>
          </div>` : y`
          <div class='section-tag-body'>
          ${tag.paths.filter(v => {
    if (this.matchPaths) {
      return pathIsInSearch(this.matchPaths, v, this.matchType);
    }

    return true;
  }).map(path => y`
            <section id='${path.elementId}' class='m-endpoint regular-font ${path.method} ${pathsExpanded || path.expanded ? 'expanded' : 'collapsed'}'>
              ${endpointHeadTemplate.call(this, path, pathsExpanded)}      
              ${pathsExpanded || path.expanded ? endpointBodyTemplate.call(this, path) : ''}
            </section>`)}
          </div>
        `}
  `)}`;
}
/* eslint-enable indent */
;// CONCATENATED MODULE: ./src/templates/logo-template.js

/* eslint-disable indent */

function logoTemplate(style) {
  return y`
  <div style=${style}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="1 0 511 512">
      <path d="M351 411a202 202 0 01-350 0 203 203 0 01333-24 203 203 0 0117 24zm0 0" fill="#adc165"/>
      <path d="M334 387a202 202 0 01-216-69 202 202 0 01216 69zm78 32H85a8 8 0 01-8-8 8 8 0 018-8h327a8 8 0 017 8 8 8 0 01-7 8zm0 0" fill="#99aa52"/>
      <path d="M374 338l-5 30a202 202 0 01-248-248 203 203 0 01253 218zm0 0" fill="#ffc73b"/>
      <path d="M374 338a202 202 0 01-100-197 203 203 0 01100 197zm38 81l-6-2-231-231a8 8 0 0111-11l231 230a8 8 0 01-5 14zm0 0" fill="#efb025"/>
      <path d="M311 175c0 75 40 140 101 175a202 202 0 000-350 202 202 0 00-101 175zm0 0" fill="#ff903e"/>
      <path d="M412 419a8 8 0 01-8-8V85a8 8 0 0115 0v326a8 8 0 01-7 8zm0 0" fill="#e87425"/>
    </svg>
  </div>    
`;
}
/* eslint-enable indent */
;// CONCATENATED MODULE: ./src/templates/header-template.js


/* eslint-disable indent */

function headerTemplate() {
  return y`
  <header class="row main-header regular-font" part="section-header" style="padding:8px 4px 8px 4px;min-height:48px;">
    <div class="only-large-screen-flex" style="align-items: center;">
      <slot name="logo" class="logo" part="section-logo">
        ${logoTemplate('height:36px;width:36px;margin-left:5px')}
        <!-- m-logo style="height:36px;width:36px;margin-left:5px"></m-logo -->
      </slot>  
      <div class="header-title" part="label-header-title">${this.headingText}</div>
    </div>  
    <div style="margin: 0px 8px;display:flex;flex:1">
      ${this.allowSpecUrlLoad === 'false' ? '' : y`
          <input id="spec-url" 
            type="text" 
            style="font-size:var(--font-size-small)" 
            class="header-input mono-font"
            part="textbox textbox-spec-url" 
            placeholder="Spec URL" 
            value="${this.specUrl || ''}" 
            @change="${this.onSepcUrlChange}" 
            spellcheck="false"
          >
          <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div> 
        `} 
      ${this.allowSpecFileLoad === 'false' ? '' : y`
          <input id="spec-file" 
            part = "file-input"
            type="file" 
            style="display:none" 
            value="${this.specFile || ''}" 
            @change="${this.onSepcFileChange}" 
            spellcheck="false"
           >
          <button class="m-btn primary only-large-screen" style="margin-left:10px;" part="btn btn-fill" @click="${this.onFileLoadClick}"> LOCAL JSON FILE </button>
        `}
      <slot name="header"></slot>
      ${this.allowSearch === 'false' || 'read focused'.includes(this.renderStyle) ? '' : y`  
          <input id="search" class="header-input" type="text" part="textbox textbox-header-filter" placeholder="Filter" @change="${this.onSearchChange}" style="max-width:130px;margin-left:10px;" spellcheck="false" >
          <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div>
        `}
      
      ${this.allowAdvancedSearch === 'false' || 'read focused'.includes(this.renderStyle) ? '' : y`
          <button class="m-btn primary only-large-screen" part="btn btn-fill btn-search" style="margin-left:10px;" @click="${this.onShowSearchModalClicked}">
            Search
          </button>
        `}
    </div>
    </header>`;
}
/* eslint-enable indent */
;// CONCATENATED MODULE: ./src/styles/dialog-box-styles.js

/* harmony default export */ const dialog_box_styles = (i`
  *, *:before, *:after { box-sizing: border-box; }

  .dialog-box-overlay {
    background-color: var(--overlay-bg);
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    z-index: var(--dialog-z-index);
  }
  
  .dialog-box {
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translate(-50%, 0%);
    display: flex;
    flex-direction: column;
    width: 70vw;
    background-color: var(--bg2);
    color: var(--fg2);
    border-radius: 4px;
    max-height: 500px;
    overflow: hidden;
    border: 1px solid var(--border-color);
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
  
  .dialog-box-header {
    position: sticky;
    top: 0;
    align-self: stretch;
    display: flex;
    align-items: center;
    padding: 0px 16px;
    min-height: 60px;
    max-height: 60px;
    border-bottom: 1px solid var(--light-border-color);
    overflow: hidden;
  }
  
  .dialog-box-header button {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: var(--fg);
    border: none;
    outline: none;
    background-color: transparent;
    cursor:pointer;
    border: 1px solid transparent;
    border-radius: 50%;
    margin-right: -8px;
  }
  .dialog-box-header button:hover {
    border-color: var(--primary-color);
  }

  .dialog-box-content {
    padding: 16px;
    display:block;
    overflow: auto;
    height: 100%;
  }

  .dialog-box-title {
    flex-grow: 1;
    font-size:24px;
  }
`);
;// CONCATENATED MODULE: ./src/components/dialog-box.js


class DialogBox extends lit_element_s {
  static get properties() {
    return {
      heading: {
        type: String,
        attribute: 'heading'
      },
      show: {
        type: String,
        attribute: 'show'
      }
    };
  }

  static get styles() {
    return [dialog_box_styles];
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        this.onClose();
      }
    });
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (oldVal !== newVal) {
      if (name === 'heading') {
        this.heading = newVal;
      }

      if (name === 'show') {
        this.show = newVal;

        if (newVal === 'true') {
          document.dispatchEvent(new CustomEvent('open', {
            bubbles: true,
            composed: true,
            detail: this
          }));
        }
      }
    }

    super.attributeChangedCallback(name, oldVal, newVal);
  }
  /* eslint-disable indent */


  render() {
    return y`
    ${this.show === 'true' ? y`
        <div class="dialog-box-overlay">
          <div class="dialog-box">
            <header class="dialog-box-header">
              <span class="dialog-box-title">${this.heading}</span>
              <button type="button" @click="${this.onClose}">&times;</button>
            </header>
            <div class="dialog-box-content">
              <slot></slot>
            </div>
          </div>
        </div>` : ''}`;
  }
  /* eslint-enable indent */


  onClose() {
    document.dispatchEvent(new CustomEvent('close', {
      bubbles: true,
      composed: true
    }));
  }

}
customElements.define('dialog-box', DialogBox);
;// CONCATENATED MODULE: ./src/templates/advance-search-template.js


/* eslint-disable indent */

function searchByPropertiesModalTemplate() {
  var _this$advancedSearchM;

  document.addEventListener('close', () => {
    this.showAdvancedSearchDialog = false;
  });
  document.addEventListener('open', this.onOpenSearchDialog);
  return y`
    <dialog-box 
      heading="Search" 
      show="${!!this.showAdvancedSearchDialog}"
    >
      <span class="advanced-search-options">
        <input
          style="width:100%; padding-right:20px;"
          type="text"
          part="textbox textbox-search-dialog"
          placeholder="search text..."
          spellcheck="false"
          @keyup = "${e => this.onAdvancedSearch(e, 400)}"
        >
        <div style="display:flex; margin:8px 0 24px;">
          <div>
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-path" checked @change = "${e => this.onAdvancedSearch(e, 0)}">
            <label for="search-api-path" style="cursor:pointer;"> API Path </label>
            </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-descr" checked @change = "${e => this.onAdvancedSearch(e, 0)}">
            <label style="cursor:pointer;" for="search-api-descr"> API Description </label>
          </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-params" @change = "${e => this.onAdvancedSearch(e, 0)}">
            <label style="cursor:pointer;" for="search-api-params"> API Parameters </label>
          </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-request-body" @change = "${e => this.onAdvancedSearch(e, 0)}">
            <label style="cursor:pointer;" for="search-api-request-body"> Request Body Parameters </label>
          </div>
          <div style="margin-left: 16px;">
            <input style="cursor:pointer;" type="checkbox" part="checkbox checkbox-search-dialog" id="search-api-resp-descr" @change = "${e => this.onAdvancedSearch(e, 0)}">
            <label style="cursor:pointer;" for="search-api-resp-descr"> Response Description </label>
          </div>
        </div>
      </span>
      
      ${(_this$advancedSearchM = this.advancedSearchMatches) === null || _this$advancedSearchM === void 0 ? void 0 : _this$advancedSearchM.map(path => y`
      <div
        class="mono-font small-font-size hover-bg"
        style='padding: 5px; cursor: pointer; border-bottom: 1px solid var(--light-border-color); ${path.deprecated ? 'filter:opacity(0.5);' : ''}' 
        data-content-id='${path.elementId}'
        tabindex = '0'
        @click="${e => {
    this.matchPaths = ''; // clear quick filter if applied

    this.showAdvancedSearchDialog = false; // Hide Search Dialog

    this.requestUpdate();
    this.scrollToEventTarget(e, true);
  }}"
      > 
        <span class="upper bold-text method-fg ${path.method}">${path.method}</span> 
        <span>${path.path}</span>
        <span class="regular-font gray-text">${path.summary}</span>
      </div>
    `)}
    </dialog-box>
  `;
}
/* eslint-enable indent */
;// CONCATENATED MODULE: ./src/utils/color-utils.js
/* harmony default export */ const color_utils = ({
  color: {
    inputReverseFg: '#fff',
    inputReverseBg: '#333',
    headerBg: '#444',

    getRgb(hex) {
      if (hex.indexOf('#') === 0) {
        hex = hex.slice(1, 7);
      } // convert 3-digit hex to 6-digits.


      if (hex.length === 3 || hex.length === 4) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }

      if (hex.length !== 6) {
        throw new Error('Invalid HEX color.');
      }

      return {
        r: parseInt(hex.slice(0, 2), 16),
        g: parseInt(hex.slice(2, 4), 16),
        b: parseInt(hex.slice(4, 6), 16)
      };
    },

    luminanace(hexColorCode) {
      const rgb = this.getRgb(hexColorCode);
      return rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114;
    },

    invert(hexColorCode) {
      return this.luminanace(hexColorCode) > 135 ? '#000' : '#fff'; // compare with `>=128`, but giving little more preference to white over black
    },

    opacity(hex, opacity) {
      const rgb = this.getRgb(hex);
      return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
    },

    brightness(hex, amt) {
      const rgb = this.getRgb(hex);
      rgb.r += amt;
      rgb.g += amt;
      rgb.b += amt;
      if (rgb.r > 255) rgb.r = 255;else if (rgb.r < 0) rgb.r = 0;
      if (rgb.g > 255) rgb.g = 255;else if (rgb.g < 0) rgb.g = 0;
      if (rgb.b > 255) rgb.b = 255;else if (rgb.b < 0) rgb.b = 0;
      return `#${rgb.r.toString(16).padStart(2, '0')}${rgb.g.toString(16).padStart(2, '0')}${rgb.b.toString(16).padStart(2, '0')}`;
    },

    hasGoodContrast(hexColorCode1, hexColorCode2) {
      const lum1 = this.luminanace(hexColorCode1);
      const lum2 = this.luminanace(hexColorCode2);
      return lum1 - lum2;
    }

  }
});
function isValidHexColor(colorCode) {
  return /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}|[A-Fa-f0-9]{8}|[A-Fa-f0-9]{4})$/i.test(colorCode);
}
;// CONCATENATED MODULE: ./src/utils/theme.js


/* Generates an schema object containing type and constraint info */

function setTheme(baseTheme, theme = {}) {
  let newTheme = {}; // Common Theme colors

  const primaryColor = theme.primaryColor ? theme.primaryColor : baseTheme === 'dark' ? '#f76b39' : '#ff591e';
  const primaryColorInvert = color_utils.color.invert(primaryColor);
  const primaryColorTrans = color_utils.color.opacity(primaryColor, '0.8'); // Dark and Light Theme colors

  if (baseTheme === 'dark') {
    const bg1 = theme.bg1 ? theme.bg1 : '#2a2b2c';
    const fg1 = theme.fg1 ? theme.fg1 : '#bbb';
    const bg2 = theme.bg2 ? theme.bg2 : color_utils.color.brightness(bg1, 5); // or #383838;

    const bg3 = theme.bg3 ? theme.bg3 : color_utils.color.brightness(bg1, 17); // or #444;

    const lightBg = theme.bg3 ? theme.bg3 : color_utils.color.brightness(bg1, 35);
    const fg2 = theme.fg2 ? theme.fg2 : color_utils.color.brightness(fg1, -15); // or #ababab

    const fg3 = theme.fg3 ? theme.fg3 : color_utils.color.brightness(fg1, -20); // or #aaa

    const lightFg = theme.fg3 ? theme.fg3 : color_utils.color.brightness(fg1, -65); // or #777

    const inlineCodeFg = theme.inlineCodeFg ? theme.inlineCodeFg : '#aaa';
    const selectionBg = '#bbb';
    const selectionFg = '#eee';
    const headerColor = theme.headerColor ? theme.headerColor : color_utils.color.brightness(bg1, 10);
    const navBgColor = theme.navBgColor ? theme.navBgColor : color_utils.color.brightness(bg1, 10);
    const navTextColor = theme.navTextColor ? theme.navTextColor : color_utils.color.opacity(color_utils.color.invert(navBgColor), '0.50');
    const navHoverBgColor = theme.navHoverBgColor ? theme.navHoverBgColor : color_utils.color.brightness(navBgColor, -15);
    const navHoverTextColor = theme.navHoverTextColor ? theme.navHoverTextColor : color_utils.color.invert(navBgColor);
    const navAccentColor = theme.navAccentColor ? theme.navAccentColor : color_utils.color.brightness(primaryColor, 25);
    const overlayBg = 'rgba(80, 80, 80, 0.4)';
    newTheme = {
      bg1,
      bg2,
      bg3,
      lightBg,
      fg1,
      fg2,
      fg3,
      lightFg,
      inlineCodeFg,
      primaryColor,
      primaryColorTrans,
      primaryColorInvert,
      selectionBg,
      selectionFg,
      overlayBg,
      navBgColor,
      navTextColor,
      navHoverBgColor,
      navHoverTextColor,
      navAccentColor,
      headerColor,
      headerColorInvert: color_utils.color.invert(headerColor),
      headerColorDarker: color_utils.color.brightness(headerColor, -20),
      headerColorBorder: color_utils.color.brightness(headerColor, 10),
      borderColor: theme.borderColor || color_utils.color.brightness(bg1, 20),
      // #555
      lightBorderColor: theme.lightBorderColor || color_utils.color.brightness(bg1, 15),
      // #444
      codeBorderColor: theme.codeBorderColor || color_utils.color.brightness(bg1, 30),
      inputBg: theme.inputBg || color_utils.color.brightness(bg1, -5),
      // #2f2f2f
      placeHolder: theme.placeHolder || color_utils.color.opacity(fg1, '0.3'),
      hoverColor: theme.hoverColor || color_utils.color.brightness(bg1, -10),
      // #2a2a2a
      red: theme.red ? theme.red : '#F06560',
      lightRed: theme.lightRed ? theme.lightRed : color_utils.color.brightness(bg1, -10),
      // #2a2a2a
      pink: theme.pink ? theme.pink : '#ffb2b2',
      lightPink: theme.lightPink || color_utils.color.brightness(bg1, -10),
      green: theme.green || '#7ec699',
      lightGreen: theme.lightGreen || color_utils.color.brightness(bg1, -10),
      // #2a2a2a
      blue: theme.blue || '#71b7ff',
      lightBlue: theme.lightBlue || color_utils.color.brightness(bg1, -10),
      // #2a2a2a
      orange: theme.orange ? theme.orange : '#f08d49',
      lightOrange: theme.lightOrange || color_utils.color.brightness(bg1, -10),
      // #2a2a2a
      yellow: theme.yellow || '#827717',
      lightYellow: theme.lightYellow || color_utils.color.brightness(bg1, -10),
      // #2a2a2a
      purple: theme.purple || '#786FF1',
      brown: theme.brown || '#D4AC0D',
      codeBg: theme.codeBg || color_utils.color.opacity(color_utils.color.brightness(bg1, -15), 0.7),
      codeFg: theme.codeFg || '#aaa',
      codePropertyColor: theme.codePropertyColor || '#f8c555',
      codeKeywordColor: theme.codeKeywordColor || '#cc99cd',
      codeOperatorColor: theme.codeOperatorColor || '#67cdcc'
    };
  } else {
    const bg1 = theme.bg1 ? theme.bg1 : '#fafbfc';
    const fg1 = theme.fg1 ? theme.fg1 : '#444444';
    const bg2 = theme.bg2 ? theme.bg2 : color_utils.color.brightness(bg1, -5); // or '#fafafa'

    const bg3 = theme.bg3 ? theme.bg3 : color_utils.color.brightness(bg1, -15); // or '#f6f6f6'

    const lightBg = theme.bg3 ? theme.bg3 : color_utils.color.brightness(bg1, -45);
    const fg2 = theme.fg2 ? theme.fg2 : color_utils.color.brightness(fg1, 17); // or '#555'

    const fg3 = theme.fg3 ? theme.fg3 : color_utils.color.brightness(fg1, 30); // or #666

    const lightFg = theme.fg3 ? theme.fg3 : color_utils.color.brightness(fg1, 70); // or #999

    const inlineCodeFg = theme.inlineCodeFg ? theme.inlineCodeFg : 'brown';
    const selectionBg = '#444';
    const selectionFg = '#eee';
    const headerColor = theme.headerColor ? theme.headerColor : color_utils.color.brightness(bg1, -180);
    /*
    const navBgColor = theme.navBgColor ? theme.navBgColor : ColorUtils.color.brightness(bg1, -10);
    const navTextColor = theme.navTextColor ? theme.navTextColor : ColorUtils.color.brightness(fg1, 5);
    const navHoverBgColor = theme.navHoverBgColor ? theme.navHoverBgColor : bg1;
    const navHoverTextColor = theme.navHoverTextColor ? theme.navHoverTextColor : primaryColor;
    const navAccentColor = theme.navAccentColor ? theme.navAccentColor : primaryColor;
    */

    const navBgColor = theme.navBgColor ? theme.navBgColor : color_utils.color.brightness(bg1, -200);
    const navTextColor = theme.navTextColor ? theme.navTextColor : color_utils.color.opacity(color_utils.color.invert(navBgColor), '0.65');
    const navHoverBgColor = theme.navHoverBgColor ? theme.navHoverBgColor : color_utils.color.brightness(navBgColor, -15);
    const navHoverTextColor = theme.navHoverTextColor ? theme.navHoverTextColor : color_utils.color.invert(navBgColor);
    const navAccentColor = theme.navAccentColor ? theme.navAccentColor : color_utils.color.brightness(primaryColor, 25);
    const overlayBg = 'rgba(0, 0, 0, 0.4)';
    newTheme = {
      bg1,
      bg2,
      bg3,
      lightBg,
      fg1,
      fg2,
      fg3,
      lightFg,
      inlineCodeFg,
      primaryColor,
      primaryColorTrans,
      primaryColorInvert,
      selectionBg,
      selectionFg,
      overlayBg,
      navBgColor,
      navTextColor,
      navHoverBgColor,
      navHoverTextColor,
      navAccentColor,
      headerColor,
      headerColorInvert: color_utils.color.invert(headerColor),
      headerColorDarker: color_utils.color.brightness(headerColor, -20),
      headerColorBorder: color_utils.color.brightness(headerColor, 10),
      borderColor: theme.borderColor || color_utils.color.brightness(bg1, -38),
      lightBorderColor: theme.lightBorderColor || color_utils.color.brightness(bg1, -23),
      codeBorderColor: theme.codeBorderColor || 'transparent',
      inputBg: theme.inputBg || color_utils.color.brightness(bg1, 10),
      // #fff
      placeHolder: theme.placeHolder || color_utils.color.brightness(lightFg, 20),
      // #dedede
      hoverColor: theme.hoverColor || color_utils.color.brightness(bg1, -5),
      // # f1f1f1
      red: theme.red || '#F06560',
      lightRed: theme.lightRed || '#fff0f0',
      pink: theme.pink ? theme.pink : '#990055',
      lightPink: theme.lightPink ? theme.lightPink : '#ffb2b2',
      green: theme.green || '#690',
      lightGreen: theme.lightGreen || '#fbfff0',
      blue: theme.blue || '#47AFE8',
      lightBlue: theme.lightBlue || '#eff8fd',
      orange: theme.orange || '#FF9900',
      lightOrange: theme.lightOrange || '#fff5e6',
      yellow: theme.yellow || '#827717',
      lightYellow: theme.lightYellow || '#fff5cc',
      purple: theme.purple || '#786FF1',
      brown: theme.brown || '#D4AC0D',
      codeBg: theme.codeBg || color_utils.color.opacity(color_utils.color.brightness(bg1, -15), 0.7),
      codeFg: theme.codeFg || '#666',
      codePropertyColor: theme.codePropertyColor || '#905',
      codeKeywordColor: theme.codeKeywordColor || '#07a',
      codeOperatorColor: theme.codeOperatorColor || '#9a6e3a'
    };
  }

  return y`
  <style>
  *, *:before, *:after { box-sizing: border-box; }
  
  :host {
    /* Common Styles - irrespective of themes */  
    --border-radius: 2px;
    --layout: ${this.layout || 'row'};
    --font-mono: ${this.monoFont || 'Monaco, "Andale Mono", "Roboto Mono", Consolas, monospace'};
    --font-regular: ${this.regularFont || '"Open Sans", Avenir, "Segoe UI", Arial, sans-serif'};
    --scroll-bar-width: 8px;
    --nav-item-padding: ${this.navItemSpacing === 'relaxed' ? '10px 16px 10px 10px' : this.navItemSpacing === 'compact' ? '5px 16px 5px 10px' : '7px 16px 7px 10px'};
    
    --resp-area-height: ${this.responseAreaHeight};
    --font-size-small: ${this.fontSize === 'default' ? '12px' : this.fontSize === 'large' ? '13px' : '14px'};
    --font-size-mono: ${this.fontSize === 'default' ? '13px' : this.fontSize === 'large' ? '14px' : '15px'};
    --font-size-regular: ${this.fontSize === 'default' ? '14px' : this.fontSize === 'large' ? '15px' : '16px'};
    --dialog-z-index: 1000;

    /* Theme specific styles */  
    --bg:${newTheme.bg1};
    --bg2:${newTheme.bg2};
    --bg3:${newTheme.bg3};
    --light-bg:${newTheme.lightBg};
    --fg:${newTheme.fg1};
    --fg2:${newTheme.fg2};
    --fg3:${newTheme.fg3};
    --light-fg:${newTheme.lightFg};
    --selection-bg:${newTheme.selectionBg};
    --selection-fg:${newTheme.selectionFg};
    --overlay-bg:${newTheme.overlayBg};
    
    /* Border Colors */
    --border-color:${newTheme.borderColor};
    --light-border-color:${newTheme.lightBorderColor};
    --code-border-color:${newTheme.codeBorderColor};

    --input-bg:${newTheme.inputBg};
    --placeholder-color:${newTheme.placeHolder};
    --hover-color:${newTheme.hoverColor};
    --red:${newTheme.red};
    --light-red:${newTheme.lightRed};
    --pink:${newTheme.pink};
    --light-pink:${newTheme.lightPink};
    --green:${newTheme.green};
    --light-green:${newTheme.lightGreen};
    --blue:${newTheme.blue};
    --light-blue:${newTheme.lightBlue};
    --orange:${newTheme.orange};
    --light-orange:${newTheme.lightOrange};
    --yellow:${newTheme.yellow};
    --light-yellow:${newTheme.lightYellow};
    --purple:${newTheme.purple};
    --brown:${newTheme.brown};

    /* Header Color */
    --header-bg:${newTheme.headerColor};
    --header-fg:${newTheme.headerColorInvert};
    --header-color-darker:${newTheme.headerColorDarker};
    --header-color-border:${newTheme.headerColorBorder};

    /* Nav Colors */  
    --nav-bg-color:${newTheme.navBgColor};
    --nav-text-color:${newTheme.navTextColor};
    --nav-hover-bg-color:${newTheme.navHoverBgColor};
    --nav-hover-text-color:${newTheme.navHoverTextColor};
    --nav-accent-color:${newTheme.navAccentColor};

    /* Nav API Method Colors*/
    --nav-get-color:${newTheme.blue};
    --nav-put-color:${newTheme.orange};
    --nav-post-color:${newTheme.green};
    --nav-delete-color:${newTheme.red};
    --nav-head-color:${newTheme.yellow};

    /* Primary Colors */  
    --primary-color:${newTheme.primaryColor};
    --primary-color-invert:${newTheme.primaryColorInvert};
    --primary-color-trans:${newTheme.primaryColorTrans};

    /*Code Syntax Color*/
    --code-bg:${newTheme.codeBg};
    --code-fg:${newTheme.codeFg};
    --inline-code-fg:${newTheme.inlineCodeFg};
    --code-property-color:${newTheme.codePropertyColor};
    --code-keyword-color:${newTheme.codeKeywordColor};
    --code-operator-color:${newTheme.codeOperatorColor};
  }
  </style>`;
}
;// CONCATENATED MODULE: ./src/templates/main-body-template.js
 // Templates












function mainBodyTemplate(isMini = false, showExpandCollapse = true, showTags = true, pathsExpanded = false) {
  if (!this.resolvedSpec) {
    return '';
  }

  if (this.persistAuth === 'true') {
    recoverPersistedApiKeys.call(this);
  }

  const newTheme = {
    bg1: isValidHexColor(this.bgColor) ? this.bgColor : '',
    fg1: isValidHexColor(this.textColor) ? this.textColor : '',
    headerColor: isValidHexColor(this.headerColor) ? this.headerColor : '',
    primaryColor: isValidHexColor(this.primaryColor) ? this.primaryColor : '',
    navBgColor: isValidHexColor(this.navBgColor) ? this.navBgColor : '',
    navTextColor: isValidHexColor(this.navTextColor) ? this.navTextColor : '',
    navHoverBgColor: isValidHexColor(this.navHoverBgColor) ? this.navHoverBgColor : '',
    navHoverTextColor: isValidHexColor(this.navHoverTextColor) ? this.navHoverTextColor : '',
    navAccentColor: isValidHexColor(this.navAccentColor) ? this.navAccentColor : ''
  };
  /* eslint-disable indent */

  if (this.resolvedSpec.specLoadError) {
    if (isMini) {
      return y`
        ${this.theme === 'dark' ? setTheme.call(this, 'dark', newTheme) : setTheme.call(this, 'light', newTheme)}
        <div style="display:flex; align-items:center; border:1px dashed var(--border-color); height:42px; padding:5px; font-size:var(--font-size-small); color:var(--red); font-family:var(--font-mono)"> ${this.resolvedSpec.info.description} </div>
      `;
    }

    return y`
      ${this.theme === 'dark' ? setTheme.call(this, 'dark', newTheme) : setTheme.call(this, 'light', newTheme)}
      <!-- Header -->
      ${headerTemplate.call(this)}
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div style="margin:24px; text-align: center;">
          <h1 style="color: var(--red)"> ${this.resolvedSpec.info.title} </h1>
          <div style="font-family:var(--font-mono)"> ${this.resolvedSpec.info.description} </div>
        </div>
      </main>  
    `;
  }

  if (this.resolvedSpec.isSpecLoading) {
    return y`
      ${this.theme === 'dark' ? setTheme.call(this, 'dark', newTheme) : setTheme.call(this, 'light', newTheme)}
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          <div class="loader"></div>
        </div>
      </main>  
    `;
  }

  return y`
    ${this.theme === 'dark' ? setTheme.call(this, 'dark', newTheme) : setTheme.call(this, 'light', newTheme)}

    <!-- Header -->
    ${this.showHeader === 'false' ? '' : headerTemplate.call(this)}
    
    <!-- Advanced Search -->
    ${this.allowAdvancedSearch === 'false' ? '' : searchByPropertiesModalTemplate.call(this)}

    <div id='the-main-body' class="body ${this.cssClasses}" dir= ${this.pageDirection} >
      <!-- Side Nav -->
      ${(this.renderStyle === 'read' || this.renderStyle === 'focused') && this.showSideNav === 'true' && this.resolvedSpec ? navbarTemplate.call(this) : ''}

      <!-- Main Content -->
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          ${this.loading === true ? y`<div class="loader"></div>` : y`
              ${this.loadFailed === true ? y`<div style="text-align: center;margin: 16px;"> Unable to load the Spec</div>` : y`
                  <div class="operations-root" @click="${e => {
    this.handleHref(e);
  }}">
                  ${this.renderStyle === 'focused' ? y`${focusedEndpointTemplate.call(this)}` : y`
                      ${this.showInfo === 'true' ? overviewTemplate.call(this) : ''}
                      ${this.allowServerSelection === 'true' ? serverTemplate.call(this) : ''}
                      ${this.allowAuthentication === 'true' ? securitySchemeTemplate.call(this) : ''}
                      <div id="operations-top" class="observe-me">
                        <slot name="operations-top"></slot>
                      </div>  
                      ${this.renderStyle === 'read' ? expandedEndpointTemplate.call(this) : endpointTemplate.call(this, showExpandCollapse, showTags, pathsExpanded)}
                    `}
                  </div>
                `}`}
        </div>
        <slot name="footer"></slot>
      </main>
    </div>  
  `;
}
/* eslint-enable indent */
;// CONCATENATED MODULE: ./src/rapidoc.js











 // Styles










 // import { expandCollapseNavBarTag } from '@/templates/navbar-template';






class RapiDoc extends lit_element_s {
  constructor() {
    super();
    const intersectionObserverOptions = {
      root: this.getRootNode().host,
      rootMargin: '-50px 0px -50px 0px',
      // when the element is visible 100px from bottom
      threshold: 0
    };
    this.showSummaryWhenCollapsed = true;
    this.isIntersectionObserverActive = true;
    this.intersectionObserver = new IntersectionObserver(entries => {
      this.onIntersect(entries);
    }, intersectionObserverOptions);
  }

  static get properties() {
    return {
      // Heading
      headingText: {
        type: String,
        attribute: 'heading-text'
      },
      gotoPath: {
        type: String,
        attribute: 'goto-path'
      },
      // Spec
      updateRoute: {
        type: String,
        attribute: 'update-route'
      },
      routePrefix: {
        type: String,
        attribute: 'route-prefix'
      },
      specUrl: {
        type: String,
        attribute: 'spec-url'
      },
      sortTags: {
        type: String,
        attribute: 'sort-tags'
      },
      generateMissingTags: {
        type: String,
        attribute: 'generate-missing-tags'
      },
      sortEndpointsBy: {
        type: String,
        attribute: 'sort-endpoints-by'
      },
      specFile: {
        type: String,
        attribute: false
      },
      // UI Layouts
      layout: {
        type: String
      },
      renderStyle: {
        type: String,
        attribute: 'render-style'
      },
      defaultSchemaTab: {
        type: String,
        attribute: 'default-schema-tab'
      },
      responseAreaHeight: {
        type: String,
        attribute: 'response-area-height'
      },
      fillRequestFieldsWithExample: {
        type: String,
        attribute: 'fill-request-fields-with-example'
      },
      persistAuth: {
        type: String,
        attribute: 'persist-auth'
      },
      onNavTagClick: {
        type: String,
        attribute: 'on-nav-tag-click'
      },
      // Schema Styles
      schemaStyle: {
        type: String,
        attribute: 'schema-style'
      },
      schemaExpandLevel: {
        type: Number,
        attribute: 'schema-expand-level'
      },
      schemaDescriptionExpanded: {
        type: String,
        attribute: 'schema-description-expanded'
      },
      schemaHideReadOnly: {
        type: String,
        attribute: 'schema-hide-read-only'
      },
      schemaHideWriteOnly: {
        type: String,
        attribute: 'schema-hide-write-only'
      },
      // API Server
      apiKeyName: {
        type: String,
        attribute: 'api-key-name'
      },
      apiKeyLocation: {
        type: String,
        attribute: 'api-key-location'
      },
      apiKeyValue: {
        type: String,
        attribute: 'api-key-value'
      },
      defaultApiServerUrl: {
        type: String,
        attribute: 'default-api-server'
      },
      serverUrl: {
        type: String,
        attribute: 'server-url'
      },
      oauthReceiver: {
        type: String,
        attribute: 'oauth-receiver'
      },
      // Hide/Show Sections & Enable Disable actions
      showHeader: {
        type: String,
        attribute: 'show-header'
      },
      showSideNav: {
        type: String,
        attribute: 'show-side-nav'
      },
      showInfo: {
        type: String,
        attribute: 'show-info'
      },
      allowAuthentication: {
        type: String,
        attribute: 'allow-authentication'
      },
      allowTry: {
        type: String,
        attribute: 'allow-try'
      },
      allowSpecUrlLoad: {
        type: String,
        attribute: 'allow-spec-url-load'
      },
      allowSpecFileLoad: {
        type: String,
        attribute: 'allow-spec-file-load'
      },
      allowSpecFileDownload: {
        type: String,
        attribute: 'allow-spec-file-download'
      },
      allowSearch: {
        type: String,
        attribute: 'allow-search'
      },
      allowAdvancedSearch: {
        type: String,
        attribute: 'allow-advanced-search'
      },
      allowServerSelection: {
        type: String,
        attribute: 'allow-server-selection'
      },
      allowSchemaDescriptionExpandToggle: {
        type: String,
        attribute: 'allow-schema-description-expand-toggle'
      },
      showComponents: {
        type: String,
        attribute: 'show-components'
      },
      pageDirection: {
        type: String,
        attribute: 'page-direction'
      },
      // Main Colors and Font
      theme: {
        type: String
      },
      bgColor: {
        type: String,
        attribute: 'bg-color'
      },
      textColor: {
        type: String,
        attribute: 'text-color'
      },
      headerColor: {
        type: String,
        attribute: 'header-color'
      },
      primaryColor: {
        type: String,
        attribute: 'primary-color'
      },
      fontSize: {
        type: String,
        attribute: 'font-size'
      },
      regularFont: {
        type: String,
        attribute: 'regular-font'
      },
      monoFont: {
        type: String,
        attribute: 'mono-font'
      },
      loadFonts: {
        type: String,
        attribute: 'load-fonts'
      },
      cssFile: {
        type: String,
        attribute: 'css-file'
      },
      cssClasses: {
        type: String,
        attribute: 'css-classes'
      },
      // Nav Bar Colors
      navBgColor: {
        type: String,
        attribute: 'nav-bg-color'
      },
      navTextColor: {
        type: String,
        attribute: 'nav-text-color'
      },
      navHoverBgColor: {
        type: String,
        attribute: 'nav-hover-bg-color'
      },
      navHoverTextColor: {
        type: String,
        attribute: 'nav-hover-text-color'
      },
      navAccentColor: {
        type: String,
        attribute: 'nav-accent-color'
      },
      navItemSpacing: {
        type: String,
        attribute: 'nav-item-spacing'
      },
      showMethodInNavBar: {
        type: String,
        attribute: 'show-method-in-nav-bar'
      },
      usePathInNavBar: {
        type: String,
        attribute: 'use-path-in-nav-bar'
      },
      infoDescriptionHeadingsInNavBar: {
        type: String,
        attribute: 'info-description-headings-in-navbar'
      },
      // Fetch Options
      fetchCredentials: {
        type: String,
        attribute: 'fetch-credentials'
      },
      // Filters
      matchPaths: {
        type: String,
        attribute: 'match-paths'
      },
      matchType: {
        type: String,
        attribute: 'match-type'
      },
      // Internal Properties
      loading: {
        type: Boolean
      },
      // indicates spec is being loaded
      focusedElementId: {
        type: String
      },
      // updating the focusedElementId will automatically render appropriate section in focused mode
      showAdvancedSearchDialog: {
        type: Boolean
      },
      advancedSearchMatches: {
        type: Object
      }
    };
  }

  static get styles() {
    return [font_styles, input_styles, flex_styles, table_styles, endpoint_styles, prism_styles, tab_styles, nav_styles, info_styles, i`
      :host {
        display:flex;
        flex-direction: column;
        min-width:360px;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        overflow: hidden;
        letter-spacing:normal;
        color:var(--fg);
        background-color:var(--bg);
        font-family:var(--font-regular);
      }
      .body {
        display:flex;
        height:100%;
        width:100%;
        overflow:hidden;
      }

      .main-content { 
        margin:0;
        padding: 0; 
        display:block;
        flex:1;
        height:100%;
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-width: thin;
        scrollbar-color: var(--border-color) transparent;
      }

      .main-content-inner--view-mode {
        padding: 0 8px;
      }
      .main-content::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      .main-content::-webkit-scrollbar-track {
        background:transparent;
      }
      .main-content::-webkit-scrollbar-thumb {
        background-color: var(--border-color);
      }

      .section-gap.section-tag {
        border-bottom:1px solid var(--border-color);
      }
      .section-gap,
      .section-gap--focused-mode,
      .section-gap--read-mode { 
        padding: 0px 4px; 
      }
      .section-tag-header {
        position:relative;
        cursor: n-resize;
        padding: 12px 0;
      }
      .collapsed .section-tag-header:hover{
        cursor: s-resize;
      }

      .section-tag-header:hover{
        background-image: linear-gradient(to right, rgba(0,0,0,0), var(--border-color), rgba(0,0,0,0));
      }

      .section-tag-header:hover::after {
        position:absolute;
        margin-left:-24px;
        font-size:20px;
        top: calc(50% - 14px);
        color:var(--primary-color);
        content: '⬆'; 
      }

      .collapsed .section-tag-header::after {
        position:absolute;
        margin-left:-24px;
        font-size:20px;
        top: calc(50% - 14px);
        color: var(--border-color);
        content: '⬇'; 
      }
      .collapsed .section-tag-header:hover::after {
        color:var(--primary-color);
      }

      .collapsed .section-tag-body {
        display:none;
      }

      .logo {
        height:36px;
        width:36px;
        margin-left:5px; 
      }
      .only-large-screen-flex,
      .only-large-screen{
        display:none;
      }
      .tag.title {
        text-transform: uppercase;
      }
      .main-header {
        background-color:var(--header-bg);
        color:var(--header-fg);
        width:100%;
      }
      .header-title {
        font-size:calc(var(--font-size-regular) + 8px); 
        padding:0 8px;
      }
      input.header-input{
        background:var(--header-color-darker);
        color:var(--header-fg);
        border:1px solid var(--header-color-border);
        flex:1; 
        padding-right:24px;
        border-radius:3px;
      }
      input.header-input::placeholder {
        opacity:0.4;
      }
      .loader {
        margin: 16px auto 16px auto; 
        border: 4px solid var(--bg3);
        border-radius: 50%;
        border-top: 4px solid var(--primary-color);
        width: 36px;
        height: 36px;
        animation: spin 2s linear infinite;
      }
      .expanded-endpoint-body{ 
        position: relative;
        padding: 6px 0px; 
      }
      .expanded-endpoint-body.deprecated{ filter:opacity(0.6); }
      .divider { 
        border-top: 2px solid var(--border-color);
        margin: 24px 0;
        width:100%;
      }

      .tooltip {
        cursor:pointer;
        border: 1px solid var(--border-color);
        border-left-width: 4px;
        margin-left:2px;
      }
      .tooltip a {
        color: var(--fg2);
        text-decoration: none;
      }
      .tooltip-text {
        color: var(--fg2);
        max-width: 400px;
        position: absolute;
        z-index:1;
        background-color: var(--bg2);
        visibility: hidden;

        overflow-wrap: break-word;
      }
      .tooltip:hover {
        color: var(--primary-color);
        border-color: var(--primary-color);
      }
      .tooltip:hover a:hover {
        color: var(--primary-color);
      }

      .tooltip:hover .tooltip-text {
        visibility: visible;
      }

      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }

      .nav-method { font-weight: bold; margin-right: 4px; font-size: calc(var(--font-size-small) - 2px); white-space: nowrap; }
      .nav-method.false { display: none; }

      .nav-method.as-colored-text.get { color:var(--nav-get-color); }
      .nav-method.as-colored-text.put { color:var(--nav-put-color); }
      .nav-method.as-colored-text.post { color:var(--nav-post-color); }
      .nav-method.as-colored-text.delete { color:var(--nav-delete-color); }
      .nav-method.as-colored-text.head, .nav-method.as-colored-text.patch, .nav-method.as-colored-text.options { color:var(--nav-head-color); }
      
      .nav-method.as-colored-block {
        padding: 1px 4px;
        min-width: 30px;
        border-radius: 4px 0 0 4px;
        color: #000;
      }

      .nav-method.as-colored-block.get { background-color: var(--blue); }
      .nav-method.as-colored-block.put { background-color: var(--orange); }
      .nav-method.as-colored-block.post { background-color: var(--green); }
      .nav-method.as-colored-block.delete { background-color: var(--red); }
      .nav-method.as-colored-block.head, .nav-method.as-colored-block.patch , .nav-method.as-colored-block.options { 
        background-color: var(--yellow); 
      }

      @media only screen and (min-width: 768px) {
        .nav-bar {
          width: 260px;
          display:flex;
        }
        .only-large-screen{
          display:block;
        }
        .only-large-screen-flex{
          display:flex;
        }
        .section-gap { 
          padding: 0 0 0 24px; 
        }
        .section-gap--focused-mode {
          padding: 24px 8px; 
        }
        .section-gap--read-mode { 
          padding: 24px 8px; 
        }
        .endpoint-body {
          position: relative;
          padding:36px 0 48px 0;
        }
      }

      @media only screen and (min-width: 1024px) {
        .nav-bar {
          width: ${r(this.fontSize === 'default' ? '300px' : this.fontSize === 'large' ? '315px' : '330px')};
          display:flex;
        }
        .section-gap--focused-mode { 
          padding: 12px 80px 12px 80px; 
        }
        .section-gap--read-mode { 
          padding: 24px 80px 12px 80px; 
        }
      }`, custom_styles];
  } // Startup


  connectedCallback() {
    super.connectedCallback();
    const parent = this.parentElement;

    if (parent) {
      if (parent.offsetWidth === 0 && parent.style.width === '') {
        parent.style.width = '100vw';
      }

      if (parent.offsetHeight === 0 && parent.style.height === '') {
        parent.style.height = '100vh';
      }

      if (parent.tagName === 'BODY') {
        if (!parent.style.marginTop) {
          parent.style.marginTop = '0';
        }

        if (!parent.style.marginRight) {
          parent.style.marginRight = '0';
        }

        if (!parent.style.marginBottom) {
          parent.style.marginBottom = '0';
        }

        if (!parent.style.marginLeft) {
          parent.style.marginLeft = '0';
        }
      }
    }

    if (this.loadFonts !== 'false') {
      const fontDescriptor = {
        family: 'Open Sans',
        style: 'normal',
        weight: '300',
        unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD'
      };
      const fontWeight300 = new FontFace('Open Sans', "url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2')", fontDescriptor);
      fontDescriptor.weight = '600';
      const fontWeight600 = new FontFace('Open Sans', "url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2')", fontDescriptor);
      fontWeight300.load().then(font => {
        document.fonts.add(font);
      });
      fontWeight600.load().then(font => {
        document.fonts.add(font);
      });
    }

    if (!this.layout || !'row, column,'.includes(`${this.layout},`)) {
      this.layout = 'row';
    }

    if (!this.renderStyle || !'read, view, focused,'.includes(`${this.renderStyle},`)) {
      this.renderStyle = 'read';
    }

    if (!this.schemaStyle || !'tree, table,'.includes(`${this.schemaStyle},`)) {
      this.schemaStyle = 'tree';
    }

    if (!this.theme || !'light, dark,'.includes(`${this.theme},`)) {
      this.theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }

    if (!this.defaultSchemaTab || !'example, schema, model,'.includes(`${this.defaultSchemaTab},`)) {
      this.defaultSchemaTab = 'example';
    } else if (this.defaultSchemaTab === 'model') {
      this.defaultSchemaTab = 'schema';
    }

    if (!this.schemaExpandLevel || this.schemaExpandLevel < 1) {
      this.schemaExpandLevel = 99999;
    }

    if (!this.schemaDescriptionExpanded || !'true, false,'.includes(`${this.schemaDescriptionExpanded},`)) {
      this.schemaDescriptionExpanded = 'false';
    }

    if (!this.schemaHideReadOnly || !'default, never,'.includes(`${this.schemaHideReadOnly},`)) {
      this.schemaHideReadOnly = 'default';
    }

    if (!this.schemaHideWriteOnly || !'default, never,'.includes(`${this.schemaHideWriteOnly},`)) {
      this.schemaHideWriteOnly = 'default';
    }

    if (!this.fillRequestFieldsWithExample || !'true, false,'.includes(`${this.fillRequestFieldsWithExample},`)) {
      this.fillRequestFieldsWithExample = 'true';
    }

    if (!this.persistAuth || !'true, false,'.includes(`${this.persistAuth},`)) {
      this.persistAuth = 'false';
    }

    if (!this.onNavTagClick || !'expand-collapse, show-description,'.includes(`${this.onNavTagClick},`)) {
      this.onNavTagClick = 'expand-collapse';
    }

    if (!this.responseAreaHeight) {
      this.responseAreaHeight = '400px';
    }

    if (!this.allowSearch || !'true, false,'.includes(`${this.allowSearch},`)) {
      this.allowSearch = 'true';
    }

    if (!this.allowAdvancedSearch || !'true, false,'.includes(`${this.allowAdvancedSearch},`)) {
      this.allowAdvancedSearch = 'true';
    }

    if (!this.allowTry || !'true, false,'.includes(`${this.allowTry},`)) {
      this.allowTry = 'true';
    }

    if (!this.apiKeyValue) {
      this.apiKeyValue = '-';
    }

    if (!this.apiKeyLocation) {
      this.apiKeyLocation = 'header';
    }

    if (!this.apiKeyName) {
      this.apiKeyName = '';
    }

    if (!this.oauthReceiver) {
      this.oauthReceiver = 'oauth-receiver.html';
    }

    if (!this.updateRoute || !'true, false,'.includes(`${this.updateRoute},`)) {
      this.updateRoute = 'true';
    }

    if (!this.routePrefix) {
      this.routePrefix = '#';
    }

    if (!this.sortTags || !'true, false,'.includes(`${this.sortTags},`)) {
      this.sortTags = 'false';
    }

    if (!this.generateMissingTags || !'true, false,'.includes(`${this.generateMissingTags},`)) {
      this.generateMissingTags = 'false';
    }

    if (!this.sortEndpointsBy || !'method, path, summary, none,'.includes(`${this.sortEndpointsBy},`)) {
      this.sortEndpointsBy = 'path';
    }

    if (!this.navItemSpacing || !'compact, relaxed, default,'.includes(`${this.navItemSpacing},`)) {
      this.navItemSpacing = 'default';
    }

    if (!this.showMethodInNavBar || !'false, as-plain-text, as-colored-text, as-colored-block,'.includes(`${this.showMethodInNavBar},`)) {
      this.showMethodInNavBar = 'false';
    }

    if (!this.usePathInNavBar || !'true, false,'.includes(`${this.usePathInNavBar},`)) {
      this.usePathInNavBar = 'false';
    }

    if (!this.fontSize || !'default, large, largest,'.includes(`${this.fontSize},`)) {
      this.fontSize = 'default';
    }

    if (!this.showInfo || !'true, false,'.includes(`${this.showInfo},`)) {
      this.showInfo = 'true';
    }

    if (!this.allowServerSelection || !'true, false,'.includes(`${this.allowServerSelection},`)) {
      this.allowServerSelection = 'true';
    }

    if (!this.allowAuthentication || !'true, false,'.includes(`${this.allowAuthentication},`)) {
      this.allowAuthentication = 'true';
    }

    if (!this.allowSchemaDescriptionExpandToggle || !'true, false,'.includes(`${this.allowSchemaDescriptionExpandToggle},`)) {
      this.allowSchemaDescriptionExpandToggle = 'true';
    }

    if (!this.showSideNav || !'true false'.includes(this.showSideNav)) {
      this.showSideNav = 'true';
    }

    if (!this.showComponents || !'true false'.includes(this.showComponents)) {
      this.showComponents = 'false';
    }

    if (!this.infoDescriptionHeadingsInNavBar || !'true, false,'.includes(`${this.infoDescriptionHeadingsInNavBar},`)) {
      this.infoDescriptionHeadingsInNavBar = 'false';
    }

    if (!this.fetchCredentials || !'omit, same-origin, include,'.includes(`${this.fetchCredentials},`)) {
      this.fetchCredentials = '';
    }

    if (!this.matchType || !'includes regex'.includes(this.matchType)) {
      this.matchType = 'includes';
    }

    if (!this.showAdvancedSearchDialog) {
      this.showAdvancedSearchDialog = false;
    }

    if (!this.cssFile) {
      this.cssFile = null;
    }

    if (!this.cssClasses) {
      this.cssClasses = '';
    }

    marked.setOptions({
      highlight: (code, lang) => {
        if ((prism_default()).languages[lang]) {
          return prism_default().highlight(code, (prism_default()).languages[lang], lang);
        }

        return code;
      }
    });
    window.addEventListener('hashchange', () => {
      const regEx = new RegExp(`^${this.routePrefix}`, 'i');
      const elementId = window.location.hash.replace(regEx, '');
      this.scrollTo(elementId);
    }, true);
  } // Cleanup


  disconnectedCallback() {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }

    super.disconnectedCallback();
  }

  infoDescriptionHeadingRenderer() {
    const renderer = new marked.Renderer();

    renderer.heading = (text, level, raw, slugger) => `<h${level} class="observe-me" id="${slugger.slug(raw)}">${text}</h${level}>`;

    return renderer;
  }

  render() {
    // return render(mainBodyTemplate(this), this.shadowRoot, { eventContext: this });
    const cssLinkEl = document.querySelector(`link[href*="${this.cssFile}"]`); // adding custom style for RapiDoc

    if (cssLinkEl) {
      this.shadowRoot.appendChild(cssLinkEl.cloneNode());
    }

    return mainBodyTemplate.call(this);
  }

  observeExpandedContent() {
    // Main Container
    const observeOverviewEls = this.shadowRoot.querySelectorAll('.observe-me');
    observeOverviewEls.forEach(targetEl => {
      this.intersectionObserver.observe(targetEl);
    });
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'spec-url') {
      if (oldVal !== newVal) {
        // put it at the end of event-loop to load all the attributes
        window.setTimeout(async () => {
          await this.loadSpec(newVal); // If goto-path is provided and no location-hash is present then try to scroll there

          if (this.gotoPath && !window.location.hash) {
            this.scrollTo(this.gotoPath);
          }
        }, 0);
      }
    }

    if (name === 'render-style') {
      if (newVal === 'read') {
        window.setTimeout(() => {
          this.observeExpandedContent();
        }, 100);
      } else {
        this.intersectionObserver.disconnect();
      }
    }

    if (name === 'api-key-name' || name === 'api-key-location' || name === 'api-key-value') {
      let updateSelectedApiKey = false;
      let apiKeyName = '';
      let apiKeyLocation = '';
      let apiKeyValue = '';

      if (name === 'api-key-name') {
        if (this.getAttribute('api-key-location') && this.getAttribute('api-key-value')) {
          apiKeyName = newVal;
          apiKeyLocation = this.getAttribute('api-key-location');
          apiKeyValue = this.getAttribute('api-key-value');
          updateSelectedApiKey = true;
        }
      } else if (name === 'api-key-location') {
        if (this.getAttribute('api-key-name') && this.getAttribute('api-key-value')) {
          apiKeyLocation = newVal;
          apiKeyName = this.getAttribute('api-key-name');
          apiKeyValue = this.getAttribute('api-key-value');
          updateSelectedApiKey = true;
        }
      } else if (name === 'api-key-value') {
        if (this.getAttribute('api-key-name') && this.getAttribute('api-key-location')) {
          apiKeyValue = newVal;
          apiKeyLocation = this.getAttribute('api-key-location');
          apiKeyName = this.getAttribute('api-key-name');
          updateSelectedApiKey = true;
        }
      }

      if (updateSelectedApiKey) {
        if (this.resolvedSpec) {
          const rapiDocApiKey = this.resolvedSpec.securitySchemes.find(v => v.securitySchemeId === rapidocApiKey);

          if (!rapiDocApiKey) {
            this.resolvedSpec.securitySchemes.push({
              securitySchemeId: rapidocApiKey,
              description: 'api-key provided in rapidoc element attributes',
              type: 'apiKey',
              name: apiKeyName,
              in: apiKeyLocation,
              value: apiKeyValue,
              finalKeyValue: apiKeyValue
            });
          } else {
            rapiDocApiKey.name = apiKeyName;
            rapiDocApiKey.in = apiKeyLocation;
            rapiDocApiKey.value = apiKeyValue;
            rapiDocApiKey.finalKeyValue = apiKeyValue;
          }

          this.requestUpdate();
        }
      }
    }

    super.attributeChangedCallback(name, oldVal, newVal);
  }

  onSepcUrlChange() {
    this.setAttribute('spec-url', this.shadowRoot.getElementById('spec-url').value);
  }

  onSepcFileChange(e) {
    this.setAttribute('spec-file', this.shadowRoot.getElementById('spec-file').value);
    const specFile = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      try {
        const specObj = JSON.parse(reader.result);
        this.loadSpec(specObj);
        this.shadowRoot.getElementById('spec-url').value = '';
      } catch (err) {
        console.error('RapiDoc: Unable to read or parse json'); // eslint-disable-line no-console
      }
    }; // Read the Text file


    reader.readAsText(specFile);
  }

  onFileLoadClick() {
    this.shadowRoot.getElementById('spec-file').click();
  }

  onSearchChange(e) {
    this.matchPaths = e.target.value;
    this.resolvedSpec.tags.forEach(tag => tag.paths.filter(v => {
      if (this.matchPaths) {
        // v.expanded = false;
        if (pathIsInSearch(this.matchPaths, v, this.matchType)) {
          tag.expanded = true;
        }
      }
    }));
    this.resolvedSpec.components.forEach(component => component.subComponents.filter(v => {
      v.expanded = false;

      if (!this.matchPaths || componentIsInSearch(this.matchPaths, v)) {
        v.expanded = true;
      }
    }));
    this.requestUpdate();
  }

  onClearSearch() {
    const searchEl = this.shadowRoot.getElementById('nav-bar-search');
    searchEl.value = '';
    this.matchPaths = '';
    this.resolvedSpec.components.forEach(component => component.subComponents.filter(v => {
      v.expanded = true;
    }));
  }

  onShowSearchModalClicked() {
    this.showAdvancedSearchDialog = true;
  } // Event Handler on Dialog-Box is opened


  async onOpenSearchDialog(e) {
    // Set focus to text input
    const inputEl = e.detail.querySelector('input');
    await sleep(0);

    if (inputEl) {
      inputEl.focus();
    }
  } // Public Method


  async loadSpec(specUrl) {
    if (!specUrl) {
      return;
    }

    this.matchPaths = '';

    try {
      this.resolvedSpec = {
        specLoadError: false,
        isSpecLoading: true,
        tags: []
      };
      this.loading = true;
      this.loadFailed = false;
      const spec = await ProcessSpec.call(this, specUrl, this.generateMissingTags === 'true', this.sortTags === 'true', this.getAttribute('sort-endpoints-by'), this.getAttribute('api-key-name'), this.getAttribute('api-key-location'), this.getAttribute('api-key-value'), this.getAttribute('server-url'));
      this.loading = false;
      this.afterSpecParsedAndValidated(spec);
    } catch (err) {
      this.loading = false;
      this.loadFailed = true;
      this.resolvedSpec = null;
      console.error(`RapiDoc: Unable to resolve the API spec..  ${err.message}`); // eslint-disable-line no-console
    }
  }

  async afterSpecParsedAndValidated(spec) {
    var _window$location$hash;

    this.resolvedSpec = spec;
    this.selectedServer = undefined;

    if (this.defaultApiServerUrl) {
      if (this.defaultApiServerUrl === this.serverUrl) {
        this.selectedServer = {
          url: this.serverUrl,
          computedUrl: this.serverUrl
        };
      } else if (this.resolvedSpec.servers) {
        this.selectedServer = this.resolvedSpec.servers.find(v => v.url === this.defaultApiServerUrl);
      }
    }

    if (!this.selectedServer) {
      if (this.resolvedSpec.servers) {
        this.selectedServer = this.resolvedSpec.servers[0]; // eslint-disable-line prefer-destructuring
      }
    }

    this.requestUpdate(); // eslint-disable-next-line no-await-in-loop

    while (!(await this.updateComplete));

    const specLoadedEvent = new CustomEvent('spec-loaded', {
      detail: spec
    });
    this.dispatchEvent(specLoadedEvent); // Initiate IntersectionObserver and put it at the end of event loop, to allow loading all the child elements (must for larger specs)

    this.intersectionObserver.disconnect();

    if (this.renderStyle === 'read') {
      await sleep(100);
      this.observeExpandedContent(); // This will auto-highlight the selected nav-item in read-mode
    } // On first time Spec load, try to navigate to location hash if provided


    const locationHash = (_window$location$hash = window.location.hash) === null || _window$location$hash === void 0 ? void 0 : _window$location$hash.substring(1);

    if (locationHash) {
      const regEx = new RegExp(`^${this.routePrefix}`, 'i');
      const elementId = window.location.hash.replace(regEx, '');

      if (this.renderStyle === 'view') {
        this.expandAndGotoOperation(elementId, true, true);
      } else {
        this.scrollTo(elementId);
      }
    } else if (this.renderStyle === 'focused') {
      // If goto-path is provided and no location-hash is present then try to scroll to default element
      if (!this.gotoPath) {
        var _this$resolvedSpec$ta;

        const defaultElementId = this.showInfo ? 'overview' : (_this$resolvedSpec$ta = this.resolvedSpec.tags[0]) === null || _this$resolvedSpec$ta === void 0 ? void 0 : _this$resolvedSpec$ta.paths[0];
        this.scrollTo(defaultElementId);
      }
    }
  }

  expandAndGotoOperation(elementId, scrollToElement = true) {
    if (!this.resolvedSpec) {
      return;
    } // Expand full operation and tag


    let isExpandingNeeded = true;
    const tmpElementId = elementId.indexOf('#') === -1 ? elementId : elementId.substring(1);

    if (tmpElementId.startsWith('overview') || tmpElementId === 'servers' || tmpElementId === 'auth') {
      isExpandingNeeded = false;
    } else {
      for (let i = 0; i < ((_this$resolvedSpec$ta2 = this.resolvedSpec.tags) === null || _this$resolvedSpec$ta2 === void 0 ? void 0 : _this$resolvedSpec$ta2.length); i++) {
        var _this$resolvedSpec$ta2, _tag$paths;

        const tag = this.resolvedSpec.tags[i];
        const path = (_tag$paths = tag.paths) === null || _tag$paths === void 0 ? void 0 : _tag$paths.find(p => p.elementId === elementId);

        if (path) {
          if (path.expanded && tag.expanded) {
            isExpandingNeeded = false;
          } else {
            path.expanded = true;
            tag.expanded = true;
          }
        }
      }
    }

    if (scrollToElement) {
      // requestUpdate() and delay required, else we cant find element
      if (isExpandingNeeded) {
        this.requestUpdate();
      }

      window.setTimeout(() => {
        const gotoEl = this.shadowRoot.getElementById(tmpElementId);

        if (gotoEl) {
          gotoEl.scrollIntoView({
            behavior: 'auto',
            block: 'start'
          });

          if (this.updateRoute === 'true') {
            window.history.replaceState(null, null, `${this.routePrefix || '#'}${tmpElementId}`);
          }
        }
      }, isExpandingNeeded ? 150 : 0);
    }
  }

  isValidTopId(id) {
    return id.startsWith('overview') || id === 'servers' || id === 'auth';
  }

  isValidPathId(id) {
    var _this$resolvedSpec2, _this$resolvedSpec2$t;

    if (id === 'overview' && this.showInfo) {
      return true;
    }

    if (id === 'servers' && this.allowServerSelection) {
      return true;
    }

    if (id === 'auth' && this.allowAuthentication) {
      return true;
    }

    if (id.startsWith('tag--')) {
      var _this$resolvedSpec, _this$resolvedSpec$ta3;

      return (_this$resolvedSpec = this.resolvedSpec) === null || _this$resolvedSpec === void 0 ? void 0 : (_this$resolvedSpec$ta3 = _this$resolvedSpec.tags) === null || _this$resolvedSpec$ta3 === void 0 ? void 0 : _this$resolvedSpec$ta3.find(tag => tag.elementId === id);
    }

    return (_this$resolvedSpec2 = this.resolvedSpec) === null || _this$resolvedSpec2 === void 0 ? void 0 : (_this$resolvedSpec2$t = _this$resolvedSpec2.tags) === null || _this$resolvedSpec2$t === void 0 ? void 0 : _this$resolvedSpec2$t.find(tag => tag.paths.find(path => path.elementId === id));
  }

  onIntersect(entries) {
    if (this.isIntersectionObserverActive === false) {
      return;
    }

    entries.forEach(entry => {
      if (entry.isIntersecting && entry.intersectionRatio > 0) {
        const oldNavEl = this.shadowRoot.querySelector('.nav-bar-tag.active, .nav-bar-path.active, .nav-bar-info.active, .nav-bar-h1.active, .nav-bar-h2.active, .operations.active');
        const newNavEl = this.shadowRoot.getElementById(`link-${entry.target.id}`); // Add active class in the new element

        if (newNavEl) {
          if (this.updateRoute === 'true') {
            window.history.replaceState(null, null, `${window.location.href.split('#')[0]}${this.routePrefix || '#'}${entry.target.id}`);
          }

          newNavEl.scrollIntoView({
            behavior: 'auto',
            block: 'center'
          });
          newNavEl.classList.add('active');
        } // Remove active class from previous element


        if (oldNavEl) {
          oldNavEl.classList.remove('active');
        }
      }
    });
  } // Called by anchor tags created using markdown


  handleHref(e) {
    if (e.target.tagName.toLowerCase() === 'a') {
      if (e.target.getAttribute('href').startsWith('#')) {
        const gotoEl = this.shadowRoot.getElementById(e.target.getAttribute('href').replace('#', ''));

        if (gotoEl) {
          gotoEl.scrollIntoView({
            behavior: 'auto',
            block: 'start'
          });
        }
      }
    }
  }
  /**
   * Called by
   *  - onClick of Navigation Bar
   *  - onClick of Advanced Search items
   *
   * Functionality:
   *  1. First deactivate IntersectionObserver
   *  2. Scroll to the element
   *  3. Activate IntersectionObserver (after little delay)
   *
  */


  async scrollToEventTarget(event, scrollNavItemToView = true) {
    const navEl = event.currentTarget;

    if (!navEl.dataset.contentId) {
      return;
    }

    this.isIntersectionObserverActive = false;

    if (this.renderStyle === 'focused') {
      const requestEl = this.shadowRoot.querySelector('api-request');

      if (requestEl) {
        requestEl.beforerNavigationFocusedMode();
      }
    }

    this.scrollTo(navEl.dataset.contentId, true, scrollNavItemToView);
    setTimeout(() => {
      this.isIntersectionObserverActive = true;
    }, 300);
  } // Public Method (scrolls to a given path and highlights the left-nav selection)


  async scrollTo(elementId, expandPath = true, scrollNavItemToView = true) {
    if (this.renderStyle === 'focused') {
      // for focused mode update this.focusedElementId to update the rendering, else it wont find the needed html elements
      // focusedElementId will get validated in the template
      this.focusedElementId = elementId;
      await sleep(0);
    }

    if (this.renderStyle === 'view') {
      this.expandAndGotoOperation(elementId, expandPath, true);
    } else {
      let isValidElementId = false;
      const contentEl = this.shadowRoot.getElementById(elementId);

      if (contentEl) {
        isValidElementId = true;
        contentEl.scrollIntoView({
          behavior: 'auto',
          block: 'start'
        });
      } else {
        isValidElementId = false;
      }

      if (isValidElementId) {
        // for focused style it is important to reset request-body-selection and response selection which maintains the state for in case of multiple req-body or multiple response mime-type
        if (this.renderStyle === 'focused') {
          const requestEl = this.shadowRoot.querySelector('api-request');

          if (requestEl) {
            requestEl.afterNavigationFocusedMode();
          }

          const responseEl = this.shadowRoot.querySelector('api-response');

          if (responseEl) {
            responseEl.resetSelection();
          }
        } // Update Location Hash


        if (this.updateRoute === 'true') {
          window.history.replaceState(null, null, `${this.routePrefix || '#'}${elementId}`);
        } // Update NavBar View and Styles


        const newNavEl = this.shadowRoot.getElementById(`link-${elementId}`);

        if (newNavEl) {
          if (scrollNavItemToView) {
            newNavEl.scrollIntoView({
              behavior: 'auto',
              block: 'center'
            });
          }

          await sleep(0);
          const oldNavEl = this.shadowRoot.querySelector('.nav-bar-tag.active, .nav-bar-path.active, .nav-bar-info.active, .nav-bar-h1.active, .nav-bar-h2.active, .operations.active');

          if (oldNavEl) {
            oldNavEl.classList.remove('active');
          }

          newNavEl.classList.add('active'); // must add the class after scrolling
          // this.requestUpdate();
        }
      }
    }
  } // Public Method - to update security-scheme of type http


  setHttpUserNameAndPassword(securitySchemeId, username, password) {
    return applyApiKey.call(this, securitySchemeId, username, password);
  } // Public Method - to update security-scheme of type apiKey or OAuth


  setApiKey(securitySchemeId, apiKeyValue) {
    return applyApiKey.call(this, securitySchemeId, '', '', apiKeyValue);
  } // Public Method


  removeAllSecurityKeys() {
    return onClearAllApiKeys.call(this);
  } // Public Method


  setApiServer(apiServerUrl) {
    // return apiServerUrl;
    return setApiServer.call(this, apiServerUrl);
  } // Event handler for Advanced Search text-inputs and checkboxes


  onAdvancedSearch(ev, delay) {
    const eventTargetEl = ev.target;
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      let searchInputEl;

      if (eventTargetEl.type === 'text') {
        searchInputEl = eventTargetEl;
      } else {
        searchInputEl = eventTargetEl.closest('.advanced-search-options').querySelector('input[type=text]');
      }

      const searcOptions = [...eventTargetEl.closest('.advanced-search-options').querySelectorAll('input:checked')].map(v => v.id);
      this.advancedSearchMatches = advancedSearch(searchInputEl.value, this.resolvedSpec.tags, searcOptions);
    }, delay);
  }

}
customElements.define('rapi-doc', RapiDoc);
;// CONCATENATED MODULE: ./src/rapidoc-mini.js











 // Styles















class RapiDocMini extends lit_element_s {
  constructor() {
    super();
    this.isMini = true;
    this.updateRoute = 'false';
    this.renderStyle = 'view';
    this.showHeader = 'false';
    this.allowAdvancedSearch = 'false';
  }

  static get properties() {
    return {
      // Spec
      specUrl: {
        type: String,
        attribute: 'spec-url'
      },
      sortEndpointsBy: {
        type: String,
        attribute: 'sort-endpoints-by'
      },
      // UI Layouts
      layout: {
        type: String
      },
      pathsExpanded: {
        type: String,
        attribute: 'paths-expanded'
      },
      defaultSchemaTab: {
        type: String,
        attribute: 'default-schema-tab'
      },
      responseAreaHeight: {
        type: String,
        attribute: 'response-area-height'
      },
      showSummaryWhenCollapsed: {
        type: String,
        attribute: 'show-summary-when-collapsed'
      },
      fillRequestFieldsWithExample: {
        type: String,
        attribute: 'fill-request-fields-with-example'
      },
      persistAuth: {
        type: String,
        attribute: 'persist-auth'
      },
      // Schema Styles
      schemaStyle: {
        type: String,
        attribute: 'schema-style'
      },
      schemaExpandLevel: {
        type: Number,
        attribute: 'schema-expand-level'
      },
      schemaDescriptionExpanded: {
        type: String,
        attribute: 'schema-description-expanded'
      },
      // API Server
      apiKeyName: {
        type: String,
        attribute: 'api-key-name'
      },
      apiKeyLocation: {
        type: String,
        attribute: 'api-key-location'
      },
      apiKeyValue: {
        type: String,
        attribute: 'api-key-value'
      },
      defaultApiServerUrl: {
        type: String,
        attribute: 'default-api-server'
      },
      serverUrl: {
        type: String,
        attribute: 'server-url'
      },
      oauthReceiver: {
        type: String,
        attribute: 'oauth-receiver'
      },
      allowTry: {
        type: String,
        attribute: 'allow-try'
      },
      // Main Colors and Font
      theme: {
        type: String
      },
      bgColor: {
        type: String,
        attribute: 'bg-color'
      },
      textColor: {
        type: String,
        attribute: 'text-color'
      },
      primaryColor: {
        type: String,
        attribute: 'primary-color'
      },
      fontSize: {
        type: String,
        attribute: 'font-size'
      },
      regularFont: {
        type: String,
        attribute: 'regular-font'
      },
      monoFont: {
        type: String,
        attribute: 'mono-font'
      },
      loadFonts: {
        type: String,
        attribute: 'load-fonts'
      },
      // Fetch Options
      fetchCredentials: {
        type: String,
        attribute: 'fetch-credentials'
      },
      // Filters
      matchPaths: {
        type: String,
        attribute: 'match-paths'
      },
      matchType: {
        type: String,
        attribute: 'match-type'
      },
      // Internal Properties
      loading: {
        type: Boolean
      } // indicates spec is being loaded

    };
  }

  static get styles() {
    return [font_styles, input_styles, flex_styles, table_styles, endpoint_styles, prism_styles, tab_styles, nav_styles, info_styles, i`
      :host {
        display:flex;
        flex-direction: column;
        min-width:360px;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        overflow: hidden;
        letter-spacing:normal;
        color:var(--fg);
        background-color:var(--bg);
        font-family:var(--font-regular);
      }

      @media only screen and (min-width: 768px) {
        .only-large-screen{
          display:block;
        }
        .only-large-screen-flex{
          display:flex;
        }
      }`];
  } // Startup


  connectedCallback() {
    super.connectedCallback();

    if (this.loadFonts !== 'false') {
      const fontDescriptor = {
        family: 'Open Sans',
        style: 'normal',
        weight: '300',
        unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD'
      };
      const fontWeight300 = new FontFace('Open Sans', "url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2')", fontDescriptor);
      fontDescriptor.weight = '600';
      const fontWeight600 = new FontFace('Open Sans', "url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2')", fontDescriptor);
      fontWeight300.load().then(font => {
        document.fonts.add(font);
      });
      fontWeight600.load().then(font => {
        document.fonts.add(font);
      });
    }

    if (!this.showSummaryWhenCollapsed || !'true, false,'.includes(`${this.showSummaryWhenCollapsed},`)) {
      this.showSummaryWhenCollapsed = 'true';
    }

    if (!this.layout || !'row, column,'.includes(`${this.layout},`)) {
      this.layout = 'row';
    }

    if (!this.schemaStyle || !'tree, table,'.includes(`${this.schemaStyle},`)) {
      this.schemaStyle = 'tree';
    }

    if (!this.theme || !'light, dark,'.includes(`${this.theme},`)) {
      this.theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }

    if (!this.defaultSchemaTab || !'example, schema, model,'.includes(`${this.defaultSchemaTab},`)) {
      this.defaultSchemaTab = 'example';
    } else if (this.defaultSchemaTab === 'model') {
      this.defaultSchemaTab = 'schema';
    }

    this.pathsExpanded = this.pathsExpanded === 'true';

    if (!this.schemaExpandLevel || this.schemaExpandLevel < 1) {
      this.schemaExpandLevel = 99999;
    }

    if (!this.schemaDescriptionExpanded || !'true, false,'.includes(`${this.schemaDescriptionExpanded},`)) {
      this.schemaDescriptionExpanded = 'false';
    }

    if (!this.fillRequestFieldsWithExample || !'true, false,'.includes(`${this.fillRequestFieldsWithExample},`)) {
      this.fillRequestFieldsWithExample = 'true';
    }

    if (!this.persistAuth || !'true, false,'.includes(`${this.persistAuth},`)) {
      this.persistAuth = 'false';
    }

    if (!this.responseAreaHeight) {
      this.responseAreaHeight = '300px';
    }

    if (!this.allowTry || !'true, false,'.includes(`${this.allowTry},`)) {
      this.allowTry = 'true';
    }

    if (!this.apiKeyValue) {
      this.apiKeyValue = '-';
    }

    if (!this.apiKeyLocation) {
      this.apiKeyLocation = 'header';
    }

    if (!this.apiKeyName) {
      this.apiKeyName = '';
    }

    if (!this.oauthReceiver) {
      this.oauthReceiver = 'oauth-receiver.html';
    }

    if (!this.sortTags || !'true, false,'.includes(`${this.sortTags},`)) {
      this.sortTags = 'false';
    }

    if (!this.sortEndpointsBy || !'method, path, summary,'.includes(`${this.sortEndpointsBy},`)) {
      this.sortEndpointsBy = 'path';
    }

    if (!this.fontSize || !'default, large, largest,'.includes(`${this.fontSize},`)) {
      this.fontSize = 'default';
    }

    if (!this.matchType || !'includes regex'.includes(this.matchType)) {
      this.matchType = 'includes';
    }

    if (!this.allowSchemaDescriptionExpandToggle || !'true, false,'.includes(`${this.allowSchemaDescriptionExpandToggle},`)) {
      this.allowSchemaDescriptionExpandToggle = 'true';
    }

    if (!this.fetchCredentials || !'omit, same-origin, include,'.includes(`${this.fetchCredentials},`)) {
      this.fetchCredentials = '';
    }

    marked.setOptions({
      highlight: (code, lang) => {
        if ((prism_default()).languages[lang]) {
          return prism_default().highlight(code, (prism_default()).languages[lang], lang);
        }

        return code;
      }
    });
  }

  render() {
    return mainBodyTemplate.call(this, true, false, false, this.pathsExpanded);
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'spec-url') {
      if (oldVal !== newVal) {
        // put it at the end of event-loop to load all the attributes
        window.setTimeout(async () => {
          await this.loadSpec(newVal);
        }, 0);
      }
    }

    if (name === 'api-key-name' || name === 'api-key-location' || name === 'api-key-value') {
      let updateSelectedApiKey = false;
      let apiKeyName = '';
      let apiKeyLocation = '';
      let apiKeyValue = '';

      if (name === 'api-key-name') {
        if (this.getAttribute('api-key-location') && this.getAttribute('api-key-value')) {
          apiKeyName = newVal;
          apiKeyLocation = this.getAttribute('api-key-location');
          apiKeyValue = this.getAttribute('api-key-value');
          updateSelectedApiKey = true;
        }
      } else if (name === 'api-key-location') {
        if (this.getAttribute('api-key-name') && this.getAttribute('api-key-value')) {
          apiKeyLocation = newVal;
          apiKeyName = this.getAttribute('api-key-name');
          apiKeyValue = this.getAttribute('api-key-value');
          updateSelectedApiKey = true;
        }
      } else if (name === 'api-key-value') {
        if (this.getAttribute('api-key-name') && this.getAttribute('api-key-location')) {
          apiKeyValue = newVal;
          apiKeyLocation = this.getAttribute('api-key-location');
          apiKeyName = this.getAttribute('api-key-name');
          updateSelectedApiKey = true;
        }
      }

      if (updateSelectedApiKey) {
        if (this.resolvedSpec) {
          const rapiDocApiKey = this.resolvedSpec.securitySchemes.find(v => v.securitySchemeId === rapidocApiKey);

          if (!rapiDocApiKey) {
            this.resolvedSpec.securitySchemes.push({
              apiKeyId: rapidocApiKey,
              description: 'api-key provided in rapidoc element attributes',
              type: 'apiKey',
              name: apiKeyName,
              in: apiKeyLocation,
              value: apiKeyValue,
              finalKeyValue: apiKeyValue
            });
          } else {
            rapiDocApiKey.name = apiKeyName;
            rapiDocApiKey.in = apiKeyLocation;
            rapiDocApiKey.value = apiKeyValue;
            rapiDocApiKey.finalKeyValue = apiKeyValue;
          }

          this.requestUpdate();
        }
      }
    }

    super.attributeChangedCallback(name, oldVal, newVal);
  }

  onSepcUrlChange() {
    this.setAttribute('spec-url', this.shadowRoot.getElementById('spec-url').value);
  } // Public Method


  async loadSpec(specUrl) {
    if (!specUrl) {
      return;
    }

    try {
      this.resolvedSpec = {
        specLoadError: false,
        isSpecLoading: true,
        tags: []
      };
      this.loading = true;
      this.loadFailed = false;
      this.requestUpdate();
      const spec = await ProcessSpec.call(this, specUrl, this.generateMissingTags === 'true', this.sortTags === 'true', this.getAttribute('sort-endpoints-by'), this.getAttribute('api-key-name'), this.getAttribute('api-key-location'), this.getAttribute('api-key-value'), this.getAttribute('server-url'));
      this.loading = false;
      this.afterSpecParsedAndValidated(spec);
    } catch (err) {
      this.loading = false;
      this.loadFailed = true;
      this.resolvedSpec = null;
      console.error(`RapiDoc: Unable to resolve the API spec..  ${err.message}`); // eslint-disable-line no-console
    }
  } // Public Method - to update security-scheme of type http


  setHttpUserNameAndPassword(securitySchemeId, username, password) {
    return applyApiKey.call(this, securitySchemeId, username, password);
  } // Public Method - to update security-scheme of type apiKey or OAuth


  setApiKey(securitySchemeId, apiKeyValue) {
    return applyApiKey.call(this, securitySchemeId, '', '', apiKeyValue);
  } // Public Method


  removeAllSecurityKeys() {
    return onClearAllApiKeys.call(this);
  } // Public Method


  setApiServer(apiServerUrl) {
    // return apiServerUrl;
    return setApiServer.call(this, apiServerUrl);
  }

  async afterSpecParsedAndValidated(spec) {
    this.resolvedSpec = spec;
    this.selectedServer = undefined;

    if (this.defaultApiServerUrl) {
      if (this.defaultApiServerUrl === this.serverUrl) {
        this.selectedServer = {
          url: this.serverUrl,
          computedUrl: this.serverUrl
        };
      } else if (this.resolvedSpec.servers) {
        this.selectedServer = this.resolvedSpec.servers.find(v => v.url === this.defaultApiServerUrl);
      }
    }

    if (!this.selectedServer) {
      if (this.resolvedSpec.servers) {
        this.selectedServer = this.resolvedSpec.servers[0]; // eslint-disable-line prefer-destructuring
      }
    }

    this.requestUpdate(); // eslint-disable-next-line no-await-in-loop

    while (!(await this.updateComplete));

    const specLoadedEvent = new CustomEvent('spec-loaded', {
      detail: spec
    });
    this.dispatchEvent(specLoadedEvent);
  } // Called by anchor tags created using markdown


  handleHref(e) {
    if (e.target.tagName.toLowerCase() === 'a') {
      if (e.target.getAttribute('href').startsWith('#')) {
        const gotoEl = this.shadowRoot.getElementById(e.target.getAttribute('href').replace('#', ''));

        if (gotoEl) {
          gotoEl.scrollIntoView({
            behavior: 'auto',
            block: 'start'
          });
        }
      }
    }
  }

}
customElements.define('rapi-doc-mini', RapiDocMini);
;// CONCATENATED MODULE: ./src/oauth-receiver.js
class OauthReceiver extends HTMLElement {
  connectedCallback() {
    this.receiveAuthParms();
    window.addEventListener('storage', e => this.receiveStorage(e), true);
  }
  /**
   * Read OAuth2 parameters and sends them off
   * to the window opener through `window.postMessage`.
   */


  receiveAuthParms() {
    let authData = {};

    if (document.location.search) {
      // Applies to authorizationCode flow
      const params = new URLSearchParams(document.location.search);
      const code = params.get('code');
      const error = params.get('error');
      const state = params.get('state');
      authData = {
        code,
        error,
        state,
        responseType: 'code'
      };
    } else if (window.location.hash) {
      // Applies to Implicit flow
      const token_type = this.parseQueryString(window.location.hash.substring(1), 'token_type'); // eslint-disable-line camelcase

      const access_token = this.parseQueryString(window.location.hash.substring(1), 'access_token'); // eslint-disable-line camelcase

      authData = {
        token_type,
        access_token,
        responseType: 'token'
      }; // eslint-disable-line camelcase
    }

    if (window.opener) {
      window.opener.postMessage(authData, this.target);
      return;
    }

    sessionStorage.setItem('rapidoc-oauth-data', JSON.stringify(authData)); // Fallback to session storage if window.opener dont exist
  }

  relayAuthParams(e) {
    if (window.parent) {
      if (e.key === 'rapidoc-oauth-data') {
        const authData = JSON.parse(e.newValue);
        window.parent.postMessage(authData, this.target);
      }
    }
  }

  parseQueryString(queryString, key) {
    const vars = queryString.split('&');

    for (let i = 0; i < vars.length; i++) {
      const pair = vars[i].split('=');

      if (decodeURIComponent(pair[0]) === key) {
        return decodeURIComponent(pair[1]);
      }
    }
  }

}
customElements.define('oauth-receiver', OauthReceiver);
;// CONCATENATED MODULE: ./src/templates/json-schema-viewer-template.js

 // eslint-disable-line import/extensions

 // Templates








/* eslint-disable indent */
// Json Schema Nav Template

function jsonSchemaNavTemplate() {
  return y`
  <nav class='nav-bar' part="section-navbar">
    <slot name="nav-logo" class="logo"></slot>
    <div style="display:flex;line-height:22px; padding:8px">
      <input id="nav-bar-search" 
        part = "textbox textbox-nav-filter"
        style = "width:100%; height: 26px; padding-right:20px; color:var(--nav-hover-text-color); border-color:var(--nav-accent-color); background-color:var(--nav-hover-bg-color)" 
        type = "text"
        placeholder = "Filter" 
        @change = "${this.onSearchChange}"  
        spellcheck = "false" 
      >
      <div style="margin: 6px 5px 0 -24px; font-size:var(--font-size-regular); cursor:pointer;">&#x21a9;</div>
    </div>
    <nav style="flex:1" class='nav-scroll' part="section-navbar-scroll">
      ${this.resolvedSpec.schemaAndExamples.map(v => y`
        <div class='nav-bar-path' data-content-id='${v.elementId}' id='link-${v.elementId}'
          @click = '${e => {
    this.scrollToEventTarget(e, false);
  }}'
        > 
          ${v.name}
        </div>`)}
    </nav>  
  </nav>
  `;
} // Json Schema Body Template


function jsonSchemaBodyTemplate() {
  return y`
    ${this.showInfo === 'true' ? overviewTemplate.call(this) : ''}
    <div style="font-size:var(--font-size-regular);">
    ${this.resolvedSpec.schemaAndExamples.map(jSchemaBody => {
    var _examplesObj$;

    const examplesObj = generateExample(jSchemaBody.schema, 'json', jSchemaBody.examples, jSchemaBody.example, true, false, 'json', true);
    jSchemaBody.selectedExample = (_examplesObj$ = examplesObj[0]) === null || _examplesObj$ === void 0 ? void 0 : _examplesObj$.exampleId;
    return y`
        <section id='${jSchemaBody.elementId}' class='json-schema-and-example regular-font' style="display:flex; flex-direction: column; border:1px solid var(--border-color); margin-bottom:32px; border-top: 5px solid var(--border-color)">
          <div style="padding:16px; border-bottom: 1px solid var(--border-color)">
            <div style="font-size:var(--font-size-small); font-weight:bold">${jSchemaBody.name}</div>
            <span class="json-schema-description m-markdown ">${unsafe_html_o(marked(jSchemaBody.description || ''))}</span>
          </div>  
          <div style="display:flex; flex-direction: row; gap:16px;">
            <div class="json-schema-def" style="flex:1; padding:16px 0 16px 16px; ">
              <schema-tree
                .data = "${schemaInObjectNotation(jSchemaBody.schema, {})}"
                schema-expand-level = "${this.schemaExpandLevel}"
                schema-description-expanded = "${this.schemaDescriptionExpanded}"
                allow-schema-description-expand-toggle = "${this.allowSchemaDescriptionExpandToggle}"
                schema-hide-read-only = "false"
                schema-hide-write-only = "false"
              > </schema-tree>
            </div>
            <div class="json-schema-example-panel" style="width:400px; background-color: var(--input-bg); padding:16px 0 16px 16px; border-left: 1px dashed var(--border-color);">
              ${examplesObj.length > 1 ? y`<select style="min-width:100px; max-width:100%" @change='${e => this.onSelectExample(e, jSchemaBody)}'>
                    ${examplesObj.map(v => y`
                      <option value="${v.exampleId}" ?selected=${v.exampleId === jSchemaBody.selectedExample}> 
                        ${v.exampleSummary.length > 80 ? v.exampleId : v.exampleSummary}
                      </option>`)}
                  </select>` : y`<div style="font-size: var(--font-size-small);font-weight:700; margin:5px 0"> ${examplesObj[0].exampleSummary}</div>`}
              ${examplesObj.map(v => y`
                <json-tree 
                  .data = "${v.exampleValue}"
                  data-example = "${v.exampleId}"
                  class = "example"
                  style = "margin-top:16px; display: ${v.exampleId === jSchemaBody.selectedExample ? 'flex' : 'none'}"
                ></json-tree>`)}
            </div>
          </div>
        </section>`;
  })}
    </div>
  `;
}
/* eslint-enable indent */
// Json Schema Root Template


function jsonSchemaViewerTemplate(isMini = false) {
  // export default function jsonSchemaViewerTemplate(isMini = false, showExpandCollapse = true, showTags = true, pathsExpanded = false) {
  if (!this.resolvedSpec) {
    return '';
  }

  const newTheme = {
    bg1: isValidHexColor(this.bgColor) ? this.bgColor : '',
    fg1: isValidHexColor(this.textColor) ? this.textColor : '',
    headerColor: isValidHexColor(this.headerColor) ? this.headerColor : '',
    primaryColor: isValidHexColor(this.primaryColor) ? this.primaryColor : '',
    navBgColor: isValidHexColor(this.navBgColor) ? this.navBgColor : '',
    navTextColor: isValidHexColor(this.navTextColor) ? this.navTextColor : '',
    navHoverBgColor: isValidHexColor(this.navHoverBgColor) ? this.navHoverBgColor : '',
    navHoverTextColor: isValidHexColor(this.navHoverTextColor) ? this.navHoverTextColor : '',
    navAccentColor: isValidHexColor(this.navAccentColor) ? this.navAccentColor : ''
  };
  /* eslint-disable indent */

  if (this.resolvedSpec.specLoadError) {
    if (isMini) {
      return y`
        ${this.theme === 'dark' ? setTheme.call(this, 'dark', newTheme) : setTheme.call(this, 'light', newTheme)}
        <div style="display:flex; align-items:center; border:1px dashed var(--border-color); height:42px; padding:5px; font-size:var(--font-size-small); color:var(--red); font-family:var(--font-mono)"> ${this.resolvedSpec.info.description} </div>
      `;
    }

    return y`
      ${this.theme === 'dark' ? setTheme.call(this, 'dark', newTheme) : setTheme.call(this, 'light', newTheme)}
      <!-- Header -->
      ${headerTemplate.call(this)}
      <h1> Header </h1>
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div style="margin:24px; text-align: center;">
          <h1 style="color: var(--red)"> ${this.resolvedSpec.info.title} </h1>
          <div style="font-family:var(--font-mono)"> ${this.resolvedSpec.info.description} </div>
        </div>
      </main>  
    `;
  }

  if (this.resolvedSpec.isSpecLoading) {
    return y`
      ${this.theme === 'dark' ? setTheme.call(this, 'dark', newTheme) : setTheme.call(this, 'light', newTheme)}
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          <div class="loader"></div>
        </div>
      </main>  
    `;
  }

  return y`
    ${this.theme === 'dark' ? setTheme.call(this, 'dark', newTheme) : setTheme.call(this, 'light', newTheme)}

    <!-- Header -->
    ${this.showHeader === 'false' ? '' : headerTemplate.call(this)}
    
    <div id='the-main-body' class="body ${this.cssClasses}" dir= ${this.pageDirection}>

      <!-- Side Nav -->
      ${jsonSchemaNavTemplate.call(this)}

      <!-- Main Content -->
      <main class="main-content regular-font" part="section-main-content">
        <slot></slot>
        <div class="main-content-inner--${this.renderStyle}-mode">
          ${this.loading === true ? y`<div class="loader"></div>` : y`
              ${this.loadFailed === true ? y`<div style="text-align: center;margin: 16px;"> Unable to load the Spec</div>` : y`
                  <div class="operations-root" @click="${e => {
    this.handleHref(e);
  }}">
                    ${jsonSchemaBodyTemplate.call(this)}
                  </div>
                `}`}
        </div>
        <slot name="footer"></slot>
      </main>
    </div>  
  `;
}
/* eslint-enable indent */
;// CONCATENATED MODULE: ./src/json-schema-viewer.js











 // Styles












class JsonSchemaViewer extends lit_element_s {
  constructor() {
    super();
    this.isMini = false;
    this.updateRoute = 'false';
    this.renderStyle = 'focused';
    this.showHeader = 'true';
    this.allowAdvancedSearch = 'false';
    this.selectedExampleForEachSchema = {};
  }

  static get properties() {
    return {
      // Spec
      specUrl: {
        type: String,
        attribute: 'spec-url'
      },
      // Schema Styles
      schemaStyle: {
        type: String,
        attribute: 'schema-style'
      },
      schemaExpandLevel: {
        type: Number,
        attribute: 'schema-expand-level'
      },
      schemaDescriptionExpanded: {
        type: String,
        attribute: 'schema-description-expanded'
      },
      allowSchemaDescriptionExpandToggle: {
        type: String,
        attribute: 'allow-schema-description-expand-toggle'
      },
      // Hide/show Sections
      showHeader: {
        type: String,
        attribute: 'show-header'
      },
      showSideNav: {
        type: String,
        attribute: 'show-side-nav'
      },
      showInfo: {
        type: String,
        attribute: 'show-info'
      },
      // Allow or restrict features
      allowSpecUrlLoad: {
        type: String,
        attribute: 'allow-spec-url-load'
      },
      allowSpecFileLoad: {
        type: String,
        attribute: 'allow-spec-file-load'
      },
      allowSpecFileDownload: {
        type: String,
        attribute: 'allow-spec-file-download'
      },
      allowSearch: {
        type: String,
        attribute: 'allow-search'
      },
      // Main Colors and Font
      theme: {
        type: String
      },
      bgColor: {
        type: String,
        attribute: 'bg-color'
      },
      textColor: {
        type: String,
        attribute: 'text-color'
      },
      primaryColor: {
        type: String,
        attribute: 'primary-color'
      },
      fontSize: {
        type: String,
        attribute: 'font-size'
      },
      regularFont: {
        type: String,
        attribute: 'regular-font'
      },
      monoFont: {
        type: String,
        attribute: 'mono-font'
      },
      loadFonts: {
        type: String,
        attribute: 'load-fonts'
      },
      // Internal Properties
      loading: {
        type: Boolean
      } // indicates spec is being loaded

    };
  }

  static get styles() {
    return [font_styles, input_styles, flex_styles, table_styles, endpoint_styles, prism_styles, tab_styles, nav_styles, info_styles, i`
      :host {
        display:flex;
        flex-direction: column;
        min-width:360px;
        width:100%;
        height:100%;
        margin:0;
        padding:0;
        overflow: hidden;
        letter-spacing:normal;
        color:var(--fg);
        background-color:var(--bg);
        font-family:var(--font-regular);
      }
      .body {
        display:flex;
        height:100%;
        width:100%;
        overflow:hidden;
      }
      .nav-bar {
        width: 230px;
        display:flex;
      }

      .main-content { 
        margin:0;
        padding: 16px; 
        display:block;
        flex:1;
        height:100%;
        overflow-y: auto;
        overflow-x: hidden;
        scrollbar-width: thin;
        scrollbar-color: var(--border-color) transparent;
      }
      .main-content-inner--view-mode {
        padding: 0 8px;
      }
      .main-content::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      .main-content::-webkit-scrollbar-track {
        background:transparent;
      }
      .main-content::-webkit-scrollbar-thumb {
        background-color: var(--border-color);
      }
      .main-header {
        background-color:var(--header-bg);
        color:var(--header-fg);
        width:100%;
      }
      .header-title {
        font-size:calc(var(--font-size-regular) + 8px); 
        padding:0 8px;
      }
      input.header-input{
        background:var(--header-color-darker);
        color:var(--header-fg);
        border:1px solid var(--header-color-border);
        flex:1; 
        padding-right:24px;
        border-radius:3px;
      }
      input.header-input::placeholder {
        opacity:0.4;
      }
      .loader {
        margin: 16px auto 16px auto; 
        border: 4px solid var(--bg3);
        border-radius: 50%;
        border-top: 4px solid var(--primary-color);
        width: 36px;
        height: 36px;
        animation: spin 2s linear infinite;
      }
      @media only screen and (min-width: 768px) {
        .only-large-screen{
          display:block;
        }
        .only-large-screen-flex{
          display:flex;
        }
      }`];
  } // Startup


  connectedCallback() {
    super.connectedCallback();
    const parent = this.parentElement;

    if (parent) {
      if (parent.offsetWidth === 0 && parent.style.width === '') {
        parent.style.width = '100vw';
      }

      if (parent.offsetHeight === 0 && parent.style.height === '') {
        parent.style.height = '100vh';
      }

      if (parent.tagName === 'BODY') {
        if (!parent.style.marginTop) {
          parent.style.marginTop = '0';
        }

        if (!parent.style.marginRight) {
          parent.style.marginRight = '0';
        }

        if (!parent.style.marginBottom) {
          parent.style.marginBottom = '0';
        }

        if (!parent.style.marginLeft) {
          parent.style.marginLeft = '0';
        }
      }
    }

    if (this.loadFonts !== 'false') {
      const fontDescriptor = {
        family: 'Open Sans',
        style: 'normal',
        weight: '300',
        unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD'
      };
      const fontWeight300 = new FontFace('Open Sans', "url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UN_r8OUuhpKKSTjw.woff2) format('woff2')", fontDescriptor);
      fontDescriptor.weight = '600';
      const fontWeight600 = new FontFace('Open Sans', "url(https://fonts.gstatic.com/s/opensans/v18/mem5YaGs126MiZpBA-UNirkOUuhpKKSTjw.woff2) format('woff2')", fontDescriptor);
      fontWeight300.load().then(font => {
        document.fonts.add(font);
      });
      fontWeight600.load().then(font => {
        document.fonts.add(font);
      });
    }

    this.renderStyle = 'focused';
    this.pathsExpanded = this.pathsExpanded === 'true';

    if (!this.showInfo || !'true, false,'.includes(`${this.showInfo},`)) {
      this.showInfo = 'true';
    }

    if (!this.showSideNav || !'true false'.includes(this.showSideNav)) {
      this.showSideNav = 'true';
    }

    if (!this.showHeader || !'true, false,'.includes(`${this.showHeader},`)) {
      this.showHeader = 'true';
    }

    if (!this.schemaStyle || !'tree, table,'.includes(`${this.schemaStyle},`)) {
      this.schemaStyle = 'tree';
    }

    if (!this.theme || !'light, dark,'.includes(`${this.theme},`)) {
      this.theme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    }

    if (!this.allowSearch || !'true, false,'.includes(`${this.allowSearch},`)) {
      this.allowSearch = 'true';
    }

    if (!this.schemaExpandLevel || this.schemaExpandLevel < 1) {
      this.schemaExpandLevel = 99999;
    }

    if (!this.schemaDescriptionExpanded || !'true, false,'.includes(`${this.schemaDescriptionExpanded},`)) {
      this.schemaDescriptionExpanded = 'false';
    }

    if (!this.fontSize || !'default, large, largest,'.includes(`${this.fontSize},`)) {
      this.fontSize = 'default';
    }

    if (!this.matchType || !'includes regex'.includes(this.matchType)) {
      this.matchType = 'includes';
    }

    if (!this.allowSchemaDescriptionExpandToggle || !'true, false,'.includes(`${this.allowSchemaDescriptionExpandToggle},`)) {
      this.allowSchemaDescriptionExpandToggle = 'true';
    }

    marked.setOptions({
      highlight: (code, lang) => {
        if ((prism_default()).languages[lang]) {
          return prism_default().highlight(code, (prism_default()).languages[lang], lang);
        }

        return code;
      }
    });
  }

  render() {
    return jsonSchemaViewerTemplate.call(this, true, false, false, this.pathsExpanded);
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'spec-url') {
      if (oldVal !== newVal) {
        // put it at the end of event-loop to load all the attributes
        window.setTimeout(async () => {
          await this.loadSpec(newVal);
        }, 0);
      }
    }

    super.attributeChangedCallback(name, oldVal, newVal);
  }

  onSepcUrlChange() {
    this.setAttribute('spec-url', this.shadowRoot.getElementById('spec-url').value);
  }

  onSearchChange(e) {
    // Todo: Filter Search
    this.matchPaths = e.target.value;
  } // Public Method


  async loadSpec(specUrl) {
    if (!specUrl) {
      return;
    }

    try {
      this.resolvedSpec = {
        specLoadError: false,
        isSpecLoading: true,
        tags: []
      };
      this.loading = true;
      this.loadFailed = false;
      this.requestUpdate();
      const spec = await ProcessSpec.call(this, specUrl, this.generateMissingTags === 'true', this.sortTags === 'true', this.getAttribute('sort-endpoints-by'));
      this.loading = false;
      this.afterSpecParsedAndValidated(spec);
    } catch (err) {
      this.loading = false;
      this.loadFailed = true;
      this.resolvedSpec = null;
      console.error(`RapiDoc: Unable to resolve the API spec..  ${err.message}`); // eslint-disable-line no-console
    }
  }

  async afterSpecParsedAndValidated(spec) {
    this.resolvedSpec = spec;
    const specLoadedEvent = new CustomEvent('spec-loaded', {
      detail: spec
    });
    this.dispatchEvent(specLoadedEvent);
  } // Called by anchor tags created using markdown


  handleHref(e) {
    if (e.target.tagName.toLowerCase() === 'a') {
      if (e.target.getAttribute('href').startsWith('#')) {
        const gotoEl = this.shadowRoot.getElementById(e.target.getAttribute('href').replace('#', ''));

        if (gotoEl) {
          gotoEl.scrollIntoView({
            behavior: 'auto',
            block: 'start'
          });
        }
      }
    }
  } // Example Dropdown @change Handler


  onSelectExample(e) {
    const exampleContainerEl = e.target.closest('.json-schema-example-panel');
    const exampleEls = [...exampleContainerEl.querySelectorAll('.example')];
    exampleEls.forEach(v => {
      v.style.display = v.dataset.example === e.target.value ? 'flex' : 'none';
    });
  }

  async scrollToEventTarget(event) {
    const navEl = event.currentTarget;

    if (!navEl.dataset.contentId) {
      return;
    }

    const contentEl = this.shadowRoot.getElementById(navEl.dataset.contentId);

    if (contentEl) {
      contentEl.scrollIntoView({
        behavior: 'auto',
        block: 'start'
      });
    }
  }

}
customElements.define('json-schema-viewer', JsonSchemaViewer);
;// CONCATENATED MODULE: ./src/index.js




/* harmony default export */ const src = ({
  RapiDoc: RapiDoc
});


/***/ }),

/***/ 874:
/***/ (() => {

(function (Prism) {
	// $ set | grep '^[A-Z][^[:space:]]*=' | cut -d= -f1 | tr '\n' '|'
	// + LC_ALL, RANDOM, REPLY, SECONDS.
	// + make sure PS1..4 are here as they are not always set,
	// - some useless things.
	var envVars = '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b';

	var commandAfterHeredoc = {
		pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
		lookbehind: true,
		alias: 'punctuation', // this looks reasonably well in all themes
		inside: null // see below
	};

	var insideString = {
		'bash': commandAfterHeredoc,
		'environment': {
			pattern: RegExp('\\$' + envVars),
			alias: 'constant'
		},
		'variable': [
			// [0]: Arithmetic Environment
			{
				pattern: /\$?\(\([\s\S]+?\)\)/,
				greedy: true,
				inside: {
					// If there is a $ sign at the beginning highlight $(( and )) as variable
					'variable': [
						{
							pattern: /(^\$\(\([\s\S]+)\)\)/,
							lookbehind: true
						},
						/^\$\(\(/
					],
					'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
					// Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
					'operator': /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
					// If there is no $ sign at the beginning highlight (( and )) as punctuation
					'punctuation': /\(\(?|\)\)?|,|;/
				}
			},
			// [1]: Command Substitution
			{
				pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
				greedy: true,
				inside: {
					'variable': /^\$\(|^`|\)$|`$/
				}
			},
			// [2]: Brace expansion
			{
				pattern: /\$\{[^}]+\}/,
				greedy: true,
				inside: {
					'operator': /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
					'punctuation': /[\[\]]/,
					'environment': {
						pattern: RegExp('(\\{)' + envVars),
						lookbehind: true,
						alias: 'constant'
					}
				}
			},
			/\$(?:\w+|[#?*!@$])/
		],
		// Escape sequences from echo and printf's manuals, and escaped quotes.
		'entity': /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
	};

	Prism.languages.bash = {
		'shebang': {
			pattern: /^#!\s*\/.*/,
			alias: 'important'
		},
		'comment': {
			pattern: /(^|[^"{\\$])#.*/,
			lookbehind: true
		},
		'function-name': [
			// a) function foo {
			// b) foo() {
			// c) function foo() {
			// but not “foo {”
			{
				// a) and c)
				pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
				lookbehind: true,
				alias: 'function'
			},
			{
				// b)
				pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
				alias: 'function'
			}
		],
		// Highlight variable names as variables in for and select beginnings.
		'for-or-select': {
			pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
			alias: 'variable',
			lookbehind: true
		},
		// Highlight variable names as variables in the left-hand part
		// of assignments (“=” and “+=”).
		'assign-left': {
			pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
			inside: {
				'environment': {
					pattern: RegExp('(^|[\\s;|&]|[<>]\\()' + envVars),
					lookbehind: true,
					alias: 'constant'
				}
			},
			alias: 'variable',
			lookbehind: true
		},
		'string': [
			// Support for Here-documents https://en.wikipedia.org/wiki/Here_document
			{
				pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
				lookbehind: true,
				greedy: true,
				inside: insideString
			},
			// Here-document with quotes around the tag
			// → No expansion (so no “inside”).
			{
				pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
				lookbehind: true,
				greedy: true,
				inside: {
					'bash': commandAfterHeredoc
				}
			},
			// “Normal” string
			{
				// https://www.gnu.org/software/bash/manual/html_node/Double-Quotes.html
				pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
				lookbehind: true,
				greedy: true,
				inside: insideString
			},
			{
				// https://www.gnu.org/software/bash/manual/html_node/Single-Quotes.html
				pattern: /(^|[^$\\])'[^']*'/,
				lookbehind: true,
				greedy: true
			},
			{
				// https://www.gnu.org/software/bash/manual/html_node/ANSI_002dC-Quoting.html
				pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
				greedy: true,
				inside: {
					'entity': insideString.entity
				}
			}
		],
		'environment': {
			pattern: RegExp('\\$?' + envVars),
			alias: 'constant'
		},
		'variable': insideString.variable,
		'function': {
			pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
			lookbehind: true
		},
		'keyword': {
			pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
			lookbehind: true
		},
		// https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
		'builtin': {
			pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
			lookbehind: true,
			// Alias added to make those easier to distinguish from strings.
			alias: 'class-name'
		},
		'boolean': {
			pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
			lookbehind: true
		},
		'file-descriptor': {
			pattern: /\B&\d\b/,
			alias: 'important'
		},
		'operator': {
			// Lots of redirections here, but not just that.
			pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
			inside: {
				'file-descriptor': {
					pattern: /^\d/,
					alias: 'important'
				}
			}
		},
		'punctuation': /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
		'number': {
			pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
			lookbehind: true
		}
	};

	commandAfterHeredoc.inside = Prism.languages.bash;

	/* Patterns in command substitution. */
	var toBeCopied = [
		'comment',
		'function-name',
		'for-or-select',
		'assign-left',
		'string',
		'environment',
		'function',
		'keyword',
		'builtin',
		'boolean',
		'file-descriptor',
		'operator',
		'punctuation',
		'number'
	];
	var inside = insideString.variable[1].inside;
	for (var i = 0; i < toBeCopied.length; i++) {
		inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]];
	}

	Prism.languages.shell = Prism.languages.bash;
}(Prism));


/***/ }),

/***/ 16:
/***/ (() => {

(function (Prism) {

	/**
	 * Replaces all placeholders "<<n>>" of given pattern with the n-th replacement (zero based).
	 *
	 * Note: This is a simple text based replacement. Be careful when using backreferences!
	 *
	 * @param {string} pattern the given pattern.
	 * @param {string[]} replacements a list of replacement which can be inserted into the given pattern.
	 * @returns {string} the pattern with all placeholders replaced with their corresponding replacements.
	 * @example replace(/a<<0>>a/.source, [/b+/.source]) === /a(?:b+)a/.source
	 */
	function replace(pattern, replacements) {
		return pattern.replace(/<<(\d+)>>/g, function (m, index) {
			return '(?:' + replacements[+index] + ')';
		});
	}
	/**
	 * @param {string} pattern
	 * @param {string[]} replacements
	 * @param {string} [flags]
	 * @returns {RegExp}
	 */
	function re(pattern, replacements, flags) {
		return RegExp(replace(pattern, replacements), flags || '');
	}

	/**
	 * Creates a nested pattern where all occurrences of the string `<<self>>` are replaced with the pattern itself.
	 *
	 * @param {string} pattern
	 * @param {number} depthLog2
	 * @returns {string}
	 */
	function nested(pattern, depthLog2) {
		for (var i = 0; i < depthLog2; i++) {
			pattern = pattern.replace(/<<self>>/g, function () { return '(?:' + pattern + ')'; });
		}
		return pattern.replace(/<<self>>/g, '[^\\s\\S]');
	}

	// https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/keywords/
	var keywordKinds = {
		// keywords which represent a return or variable type
		type: 'bool byte char decimal double dynamic float int long object sbyte short string uint ulong ushort var void',
		// keywords which are used to declare a type
		typeDeclaration: 'class enum interface record struct',
		// contextual keywords
		// ("var" and "dynamic" are missing because they are used like types)
		contextual: 'add alias and ascending async await by descending from(?=\\s*(?:\\w|$)) get global group into init(?=\\s*;) join let nameof not notnull on or orderby partial remove select set unmanaged value when where with(?=\\s*{)',
		// all other keywords
		other: 'abstract as base break case catch checked const continue default delegate do else event explicit extern finally fixed for foreach goto if implicit in internal is lock namespace new null operator out override params private protected public readonly ref return sealed sizeof stackalloc static switch this throw try typeof unchecked unsafe using virtual volatile while yield'
	};

	// keywords
	function keywordsToPattern(words) {
		return '\\b(?:' + words.trim().replace(/ /g, '|') + ')\\b';
	}
	var typeDeclarationKeywords = keywordsToPattern(keywordKinds.typeDeclaration);
	var keywords = RegExp(keywordsToPattern(keywordKinds.type + ' ' + keywordKinds.typeDeclaration + ' ' + keywordKinds.contextual + ' ' + keywordKinds.other));
	var nonTypeKeywords = keywordsToPattern(keywordKinds.typeDeclaration + ' ' + keywordKinds.contextual + ' ' + keywordKinds.other);
	var nonContextualKeywords = keywordsToPattern(keywordKinds.type + ' ' + keywordKinds.typeDeclaration + ' ' + keywordKinds.other);

	// types
	var generic = nested(/<(?:[^<>;=+\-*/%&|^]|<<self>>)*>/.source, 2); // the idea behind the other forbidden characters is to prevent false positives. Same for tupleElement.
	var nestedRound = nested(/\((?:[^()]|<<self>>)*\)/.source, 2);
	var name = /@?\b[A-Za-z_]\w*\b/.source;
	var genericName = replace(/<<0>>(?:\s*<<1>>)?/.source, [name, generic]);
	var identifier = replace(/(?!<<0>>)<<1>>(?:\s*\.\s*<<1>>)*/.source, [nonTypeKeywords, genericName]);
	var array = /\[\s*(?:,\s*)*\]/.source;
	var typeExpressionWithoutTuple = replace(/<<0>>(?:\s*(?:\?\s*)?<<1>>)*(?:\s*\?)?/.source, [identifier, array]);
	var tupleElement = replace(/[^,()<>[\];=+\-*/%&|^]|<<0>>|<<1>>|<<2>>/.source, [generic, nestedRound, array]);
	var tuple = replace(/\(<<0>>+(?:,<<0>>+)+\)/.source, [tupleElement]);
	var typeExpression = replace(/(?:<<0>>|<<1>>)(?:\s*(?:\?\s*)?<<2>>)*(?:\s*\?)?/.source, [tuple, identifier, array]);

	var typeInside = {
		'keyword': keywords,
		'punctuation': /[<>()?,.:[\]]/
	};

	// strings & characters
	// https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#character-literals
	// https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#string-literals
	var character = /'(?:[^\r\n'\\]|\\.|\\[Uux][\da-fA-F]{1,8})'/.source; // simplified pattern
	var regularString = /"(?:\\.|[^\\"\r\n])*"/.source;
	var verbatimString = /@"(?:""|\\[\s\S]|[^\\"])*"(?!")/.source;


	Prism.languages.csharp = Prism.languages.extend('clike', {
		'string': [
			{
				pattern: re(/(^|[^$\\])<<0>>/.source, [verbatimString]),
				lookbehind: true,
				greedy: true
			},
			{
				pattern: re(/(^|[^@$\\])<<0>>/.source, [regularString]),
				lookbehind: true,
				greedy: true
			}
		],
		'class-name': [
			{
				// Using static
				// using static System.Math;
				pattern: re(/(\busing\s+static\s+)<<0>>(?=\s*;)/.source, [identifier]),
				lookbehind: true,
				inside: typeInside
			},
			{
				// Using alias (type)
				// using Project = PC.MyCompany.Project;
				pattern: re(/(\busing\s+<<0>>\s*=\s*)<<1>>(?=\s*;)/.source, [name, typeExpression]),
				lookbehind: true,
				inside: typeInside
			},
			{
				// Using alias (alias)
				// using Project = PC.MyCompany.Project;
				pattern: re(/(\busing\s+)<<0>>(?=\s*=)/.source, [name]),
				lookbehind: true
			},
			{
				// Type declarations
				// class Foo<A, B>
				// interface Foo<out A, B>
				pattern: re(/(\b<<0>>\s+)<<1>>/.source, [typeDeclarationKeywords, genericName]),
				lookbehind: true,
				inside: typeInside
			},
			{
				// Single catch exception declaration
				// catch(Foo)
				// (things like catch(Foo e) is covered by variable declaration)
				pattern: re(/(\bcatch\s*\(\s*)<<0>>/.source, [identifier]),
				lookbehind: true,
				inside: typeInside
			},
			{
				// Name of the type parameter of generic constraints
				// where Foo : class
				pattern: re(/(\bwhere\s+)<<0>>/.source, [name]),
				lookbehind: true
			},
			{
				// Casts and checks via as and is.
				// as Foo<A>, is Bar<B>
				// (things like if(a is Foo b) is covered by variable declaration)
				pattern: re(/(\b(?:is(?:\s+not)?|as)\s+)<<0>>/.source, [typeExpressionWithoutTuple]),
				lookbehind: true,
				inside: typeInside
			},
			{
				// Variable, field and parameter declaration
				// (Foo bar, Bar baz, Foo[,,] bay, Foo<Bar, FooBar<Bar>> bax)
				pattern: re(/\b<<0>>(?=\s+(?!<<1>>|with\s*\{)<<2>>(?:\s*[=,;:{)\]]|\s+(?:in|when)\b))/.source, [typeExpression, nonContextualKeywords, name]),
				inside: typeInside
			}
		],
		'keyword': keywords,
		// https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/language-specification/lexical-structure#literals
		'number': /(?:\b0(?:x[\da-f_]*[\da-f]|b[01_]*[01])|(?:\B\.\d+(?:_+\d+)*|\b\d+(?:_+\d+)*(?:\.\d+(?:_+\d+)*)?)(?:e[-+]?\d+(?:_+\d+)*)?)(?:[dflmu]|lu|ul)?\b/i,
		'operator': />>=?|<<=?|[-=]>|([-+&|])\1|~|\?\?=?|[-+*/%&|^!=<>]=?/,
		'punctuation': /\?\.?|::|[{}[\];(),.:]/
	});

	Prism.languages.insertBefore('csharp', 'number', {
		'range': {
			pattern: /\.\./,
			alias: 'operator'
		}
	});

	Prism.languages.insertBefore('csharp', 'punctuation', {
		'named-parameter': {
			pattern: re(/([(,]\s*)<<0>>(?=\s*:)/.source, [name]),
			lookbehind: true,
			alias: 'punctuation'
		}
	});

	Prism.languages.insertBefore('csharp', 'class-name', {
		'namespace': {
			// namespace Foo.Bar {}
			// using Foo.Bar;
			pattern: re(/(\b(?:namespace|using)\s+)<<0>>(?:\s*\.\s*<<0>>)*(?=\s*[;{])/.source, [name]),
			lookbehind: true,
			inside: {
				'punctuation': /\./
			}
		},
		'type-expression': {
			// default(Foo), typeof(Foo<Bar>), sizeof(int)
			pattern: re(/(\b(?:default|sizeof|typeof)\s*\(\s*(?!\s))(?:[^()\s]|\s(?!\s)|<<0>>)*(?=\s*\))/.source, [nestedRound]),
			lookbehind: true,
			alias: 'class-name',
			inside: typeInside
		},
		'return-type': {
			// Foo<Bar> ForBar(); Foo IFoo.Bar() => 0
			// int this[int index] => 0; T IReadOnlyList<T>.this[int index] => this[index];
			// int Foo => 0; int Foo { get; set } = 0;
			pattern: re(/<<0>>(?=\s+(?:<<1>>\s*(?:=>|[({]|\.\s*this\s*\[)|this\s*\[))/.source, [typeExpression, identifier]),
			inside: typeInside,
			alias: 'class-name'
		},
		'constructor-invocation': {
			// new List<Foo<Bar[]>> { }
			pattern: re(/(\bnew\s+)<<0>>(?=\s*[[({])/.source, [typeExpression]),
			lookbehind: true,
			inside: typeInside,
			alias: 'class-name'
		},
		/*'explicit-implementation': {
			// int IFoo<Foo>.Bar => 0; void IFoo<Foo<Foo>>.Foo<T>();
			pattern: replace(/\b<<0>>(?=\.<<1>>)/, className, methodOrPropertyDeclaration),
			inside: classNameInside,
			alias: 'class-name'
		},*/
		'generic-method': {
			// foo<Bar>()
			pattern: re(/<<0>>\s*<<1>>(?=\s*\()/.source, [name, generic]),
			inside: {
				'function': re(/^<<0>>/.source, [name]),
				'generic': {
					pattern: RegExp(generic),
					alias: 'class-name',
					inside: typeInside
				}
			}
		},
		'type-list': {
			// The list of types inherited or of generic constraints
			// class Foo<F> : Bar, IList<FooBar>
			// where F : Bar, IList<int>
			pattern: re(
				/\b((?:<<0>>\s+<<1>>|record\s+<<1>>\s*<<5>>|where\s+<<2>>)\s*:\s*)(?:<<3>>|<<4>>|<<1>>\s*<<5>>|<<6>>)(?:\s*,\s*(?:<<3>>|<<4>>|<<6>>))*(?=\s*(?:where|[{;]|=>|$))/.source,
				[typeDeclarationKeywords, genericName, name, typeExpression, keywords.source, nestedRound, /\bnew\s*\(\s*\)/.source]
			),
			lookbehind: true,
			inside: {
				'record-arguments': {
					pattern: re(/(^(?!new\s*\()<<0>>\s*)<<1>>/.source, [genericName, nestedRound]),
					lookbehind: true,
					greedy: true,
					inside: Prism.languages.csharp
				},
				'keyword': keywords,
				'class-name': {
					pattern: RegExp(typeExpression),
					greedy: true,
					inside: typeInside
				},
				'punctuation': /[,()]/
			}
		},
		'preprocessor': {
			pattern: /(^[\t ]*)#.*/m,
			lookbehind: true,
			alias: 'property',
			inside: {
				// highlight preprocessor directives as keywords
				'directive': {
					pattern: /(#)\b(?:define|elif|else|endif|endregion|error|if|line|nullable|pragma|region|undef|warning)\b/,
					lookbehind: true,
					alias: 'keyword'
				}
			}
		}
	});

	// attributes
	var regularStringOrCharacter = regularString + '|' + character;
	var regularStringCharacterOrComment = replace(/\/(?![*/])|\/\/[^\r\n]*[\r\n]|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>/.source, [regularStringOrCharacter]);
	var roundExpression = nested(replace(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [regularStringCharacterOrComment]), 2);

	// https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/attributes/#attribute-targets
	var attrTarget = /\b(?:assembly|event|field|method|module|param|property|return|type)\b/.source;
	var attr = replace(/<<0>>(?:\s*\(<<1>>*\))?/.source, [identifier, roundExpression]);

	Prism.languages.insertBefore('csharp', 'class-name', {
		'attribute': {
			// Attributes
			// [Foo], [Foo(1), Bar(2, Prop = "foo")], [return: Foo(1), Bar(2)], [assembly: Foo(Bar)]
			pattern: re(/((?:^|[^\s\w>)?])\s*\[\s*)(?:<<0>>\s*:\s*)?<<1>>(?:\s*,\s*<<1>>)*(?=\s*\])/.source, [attrTarget, attr]),
			lookbehind: true,
			greedy: true,
			inside: {
				'target': {
					pattern: re(/^<<0>>(?=\s*:)/.source, [attrTarget]),
					alias: 'keyword'
				},
				'attribute-arguments': {
					pattern: re(/\(<<0>>*\)/.source, [roundExpression]),
					inside: Prism.languages.csharp
				},
				'class-name': {
					pattern: RegExp(identifier),
					inside: {
						'punctuation': /\./
					}
				},
				'punctuation': /[:,]/
			}
		}
	});


	// string interpolation
	var formatString = /:[^}\r\n]+/.source;
	// multi line
	var mInterpolationRound = nested(replace(/[^"'/()]|<<0>>|\(<<self>>*\)/.source, [regularStringCharacterOrComment]), 2);
	var mInterpolation = replace(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [mInterpolationRound, formatString]);
	// single line
	var sInterpolationRound = nested(replace(/[^"'/()]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|<<0>>|\(<<self>>*\)/.source, [regularStringOrCharacter]), 2);
	var sInterpolation = replace(/\{(?!\{)(?:(?![}:])<<0>>)*<<1>>?\}/.source, [sInterpolationRound, formatString]);

	function createInterpolationInside(interpolation, interpolationRound) {
		return {
			'interpolation': {
				pattern: re(/((?:^|[^{])(?:\{\{)*)<<0>>/.source, [interpolation]),
				lookbehind: true,
				inside: {
					'format-string': {
						pattern: re(/(^\{(?:(?![}:])<<0>>)*)<<1>>(?=\}$)/.source, [interpolationRound, formatString]),
						lookbehind: true,
						inside: {
							'punctuation': /^:/
						}
					},
					'punctuation': /^\{|\}$/,
					'expression': {
						pattern: /[\s\S]+/,
						alias: 'language-csharp',
						inside: Prism.languages.csharp
					}
				}
			},
			'string': /[\s\S]+/
		};
	}

	Prism.languages.insertBefore('csharp', 'string', {
		'interpolation-string': [
			{
				pattern: re(/(^|[^\\])(?:\$@|@\$)"(?:""|\\[\s\S]|\{\{|<<0>>|[^\\{"])*"/.source, [mInterpolation]),
				lookbehind: true,
				greedy: true,
				inside: createInterpolationInside(mInterpolation, mInterpolationRound),
			},
			{
				pattern: re(/(^|[^@\\])\$"(?:\\.|\{\{|<<0>>|[^\\"{])*"/.source, [sInterpolation]),
				lookbehind: true,
				greedy: true,
				inside: createInterpolationInside(sInterpolation, sInterpolationRound),
			}
		],
		'char': {
			pattern: RegExp(character),
			greedy: true
		}
	});

	Prism.languages.dotnet = Prism.languages.cs = Prism.languages.csharp;

}(Prism));


/***/ }),

/***/ 251:
/***/ (() => {

(function (Prism) {

	var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;

	Prism.languages.css = {
		'comment': /\/\*[\s\S]*?\*\//,
		'atrule': {
			pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
			inside: {
				'rule': /^@[\w-]+/,
				'selector-function-argument': {
					pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
					lookbehind: true,
					alias: 'selector'
				},
				'keyword': {
					pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
					lookbehind: true
				}
				// See rest below
			}
		},
		'url': {
			// https://drafts.csswg.org/css-values-3/#urls
			pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
			greedy: true,
			inside: {
				'function': /^url/i,
				'punctuation': /^\(|\)$/,
				'string': {
					pattern: RegExp('^' + string.source + '$'),
					alias: 'url'
				}
			}
		},
		'selector': {
			pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
			lookbehind: true
		},
		'string': {
			pattern: string,
			greedy: true
		},
		'property': {
			pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
			lookbehind: true
		},
		'important': /!important\b/i,
		'function': {
			pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
			lookbehind: true
		},
		'punctuation': /[(){};:,]/
	};

	Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

	var markup = Prism.languages.markup;
	if (markup) {
		markup.tag.addInlined('style', 'css');
		markup.tag.addAttribute('style', 'css');
	}

}(Prism));


/***/ }),

/***/ 46:
/***/ (() => {

Prism.languages.go = Prism.languages.extend('clike', {
	'string': {
		pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
		lookbehind: true,
		greedy: true
	},
	'keyword': /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
	'boolean': /\b(?:_|false|iota|nil|true)\b/,
	'number': [
		// binary and octal integers
		/\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
		// hexadecimal integers and floats
		/\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
		// decimal integers and floats
		/(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i
	],
	'operator': /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
	'builtin': /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
});

Prism.languages.insertBefore('go', 'string', {
	'char': {
		pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
		greedy: true
	}
});

delete Prism.languages.go['class-name'];


/***/ }),

/***/ 57:
/***/ (() => {

(function (Prism) {

	/**
	 * @param {string} name
	 * @returns {RegExp}
	 */
	function headerValueOf(name) {
		return RegExp('(^(?:' + name + '):[ \t]*(?![ \t]))[^]+', 'i');
	}

	Prism.languages.http = {
		'request-line': {
			pattern: /^(?:CONNECT|DELETE|GET|HEAD|OPTIONS|PATCH|POST|PRI|PUT|SEARCH|TRACE)\s(?:https?:\/\/|\/)\S*\sHTTP\/[\d.]+/m,
			inside: {
				// HTTP Method
				'method': {
					pattern: /^[A-Z]+\b/,
					alias: 'property'
				},
				// Request Target e.g. http://example.com, /path/to/file
				'request-target': {
					pattern: /^(\s)(?:https?:\/\/|\/)\S*(?=\s)/,
					lookbehind: true,
					alias: 'url',
					inside: Prism.languages.uri
				},
				// HTTP Version
				'http-version': {
					pattern: /^(\s)HTTP\/[\d.]+/,
					lookbehind: true,
					alias: 'property'
				},
			}
		},
		'response-status': {
			pattern: /^HTTP\/[\d.]+ \d+ .+/m,
			inside: {
				// HTTP Version
				'http-version': {
					pattern: /^HTTP\/[\d.]+/,
					alias: 'property'
				},
				// Status Code
				'status-code': {
					pattern: /^(\s)\d+(?=\s)/,
					lookbehind: true,
					alias: 'number'
				},
				// Reason Phrase
				'reason-phrase': {
					pattern: /^(\s).+/,
					lookbehind: true,
					alias: 'string'
				}
			}
		},
		'header': {
			pattern: /^[\w-]+:.+(?:(?:\r\n?|\n)[ \t].+)*/m,
			inside: {
				'header-value': [
					{
						pattern: headerValueOf(/Content-Security-Policy/.source),
						lookbehind: true,
						alias: ['csp', 'languages-csp'],
						inside: Prism.languages.csp
					},
					{
						pattern: headerValueOf(/Public-Key-Pins(?:-Report-Only)?/.source),
						lookbehind: true,
						alias: ['hpkp', 'languages-hpkp'],
						inside: Prism.languages.hpkp
					},
					{
						pattern: headerValueOf(/Strict-Transport-Security/.source),
						lookbehind: true,
						alias: ['hsts', 'languages-hsts'],
						inside: Prism.languages.hsts
					},
					{
						pattern: headerValueOf(/[^:]+/.source),
						lookbehind: true
					}
				],
				'header-name': {
					pattern: /^[^:]+/,
					alias: 'keyword'
				},
				'punctuation': /^:/
			}
		}
	};

	// Create a mapping of Content-Type headers to language definitions
	var langs = Prism.languages;
	var httpLanguages = {
		'application/javascript': langs.javascript,
		'application/json': langs.json || langs.javascript,
		'application/xml': langs.xml,
		'text/xml': langs.xml,
		'text/html': langs.html,
		'text/css': langs.css,
		'text/plain': langs.plain
	};

	// Declare which types can also be suffixes
	var suffixTypes = {
		'application/json': true,
		'application/xml': true
	};

	/**
	 * Returns a pattern for the given content type which matches it and any type which has it as a suffix.
	 *
	 * @param {string} contentType
	 * @returns {string}
	 */
	function getSuffixPattern(contentType) {
		var suffix = contentType.replace(/^[a-z]+\//, '');
		var suffixPattern = '\\w+/(?:[\\w.-]+\\+)+' + suffix + '(?![+\\w.-])';
		return '(?:' + contentType + '|' + suffixPattern + ')';
	}

	// Insert each content type parser that has its associated language
	// currently loaded.
	var options;
	for (var contentType in httpLanguages) {
		if (httpLanguages[contentType]) {
			options = options || {};

			var pattern = suffixTypes[contentType] ? getSuffixPattern(contentType) : contentType;
			options[contentType.replace(/\//g, '-')] = {
				pattern: RegExp(
					'(' + /content-type:\s*/.source + pattern + /(?:(?:\r\n?|\n)[\w-].*)*(?:\r(?:\n|(?!\n))|\n)/.source + ')' +
					// This is a little interesting:
					// The HTTP format spec required 1 empty line before the body to make everything unambiguous.
					// However, when writing code by hand (e.g. to display on a website) people can forget about this,
					// so we want to be liberal here. We will allow the empty line to be omitted if the first line of
					// the body does not start with a [\w-] character (as headers do).
					/[^ \t\w-][\s\S]*/.source,
					'i'
				),
				lookbehind: true,
				inside: httpLanguages[contentType]
			};
		}
	}
	if (options) {
		Prism.languages.insertBefore('http', 'header', options);
	}

}(Prism));


/***/ }),

/***/ 503:
/***/ (() => {

(function (Prism) {

	var keywords = /\b(?:abstract|assert|boolean|break|byte|case|catch|char|class|const|continue|default|do|double|else|enum|exports|extends|final|finally|float|for|goto|if|implements|import|instanceof|int|interface|long|module|native|new|non-sealed|null|open|opens|package|permits|private|protected|provides|public|record(?!\s*[(){}[\]<>=%~.:,;?+\-*/&|^])|requires|return|sealed|short|static|strictfp|super|switch|synchronized|this|throw|throws|to|transient|transitive|try|uses|var|void|volatile|while|with|yield)\b/;

	// full package (optional) + parent classes (optional)
	var classNamePrefix = /(?:[a-z]\w*\s*\.\s*)*(?:[A-Z]\w*\s*\.\s*)*/.source;

	// based on the java naming conventions
	var className = {
		pattern: RegExp(/(^|[^\w.])/.source + classNamePrefix + /[A-Z](?:[\d_A-Z]*[a-z]\w*)?\b/.source),
		lookbehind: true,
		inside: {
			'namespace': {
				pattern: /^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,
				inside: {
					'punctuation': /\./
				}
			},
			'punctuation': /\./
		}
	};

	Prism.languages.java = Prism.languages.extend('clike', {
		'string': {
			pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"/,
			lookbehind: true,
			greedy: true
		},
		'class-name': [
			className,
			{
				// variables, parameters, and constructor references
				// this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
				pattern: RegExp(/(^|[^\w.])/.source + classNamePrefix + /[A-Z]\w*(?=\s+\w+\s*[;,=()]|\s*(?:\[[\s,]*\]\s*)?::\s*new\b)/.source),
				lookbehind: true,
				inside: className.inside
			},
			{
				// class names based on keyword
				// this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
				pattern: RegExp(/(\b(?:class|enum|extends|implements|instanceof|interface|new|record|throws)\s+)/.source + classNamePrefix + /[A-Z]\w*\b/.source),
				lookbehind: true,
				inside: className.inside
			}
		],
		'keyword': keywords,
		'function': [
			Prism.languages.clike.function,
			{
				pattern: /(::\s*)[a-z_]\w*/,
				lookbehind: true
			}
		],
		'number': /\b0b[01][01_]*L?\b|\b0x(?:\.[\da-f_p+-]+|[\da-f_]+(?:\.[\da-f_p+-]+)?)\b|(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
		'operator': {
			pattern: /(^|[^.])(?:<<=?|>>>?=?|->|--|\+\+|&&|\|\||::|[?:~]|[-+*/%&|^!=<>]=?)/m,
			lookbehind: true
		}
	});

	Prism.languages.insertBefore('java', 'string', {
		'triple-quoted-string': {
			// http://openjdk.java.net/jeps/355#Description
			pattern: /"""[ \t]*[\r\n](?:(?:"|"")?(?:\\.|[^"\\]))*"""/,
			greedy: true,
			alias: 'string'
		},
		'char': {
			pattern: /'(?:\\.|[^'\\\r\n]){1,6}'/,
			greedy: true
		}
	});

	Prism.languages.insertBefore('java', 'class-name', {
		'annotation': {
			pattern: /(^|[^.])@\w+(?:\s*\.\s*\w+)*/,
			lookbehind: true,
			alias: 'punctuation'
		},
		'generics': {
			pattern: /<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&)|<(?:[\w\s,.?]|&(?!&))*>)*>)*>)*>/,
			inside: {
				'class-name': className,
				'keyword': keywords,
				'punctuation': /[<>(),.:]/,
				'operator': /[?&|]/
			}
		},
		'import': [
			{
				pattern: RegExp(/(\bimport\s+)/.source + classNamePrefix + /(?:[A-Z]\w*|\*)(?=\s*;)/.source),
				lookbehind: true,
				inside: {
					'namespace': className.inside.namespace,
					'punctuation': /\./,
					'operator': /\*/,
					'class-name': /\w+/
				}
			},
			{
				pattern: RegExp(/(\bimport\s+static\s+)/.source + classNamePrefix + /(?:\w+|\*)(?=\s*;)/.source),
				lookbehind: true,
				alias: 'static',
				inside: {
					'namespace': className.inside.namespace,
					'static': /\b\w+$/,
					'punctuation': /\./,
					'operator': /\*/,
					'class-name': /\w+/
				}
			}
		],
		'namespace': {
			pattern: RegExp(
				/(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)(?!<keyword>)[a-z]\w*(?:\.[a-z]\w*)*\.?/
					.source.replace(/<keyword>/g, function () { return keywords.source; })),
			lookbehind: true,
			inside: {
				'punctuation': /\./,
			}
		}
	});
}(Prism));


/***/ }),

/***/ 277:
/***/ (() => {

// https://www.json.org/json-en.html
Prism.languages.json = {
	'property': {
		pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
		lookbehind: true,
		greedy: true
	},
	'string': {
		pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
		lookbehind: true,
		greedy: true
	},
	'comment': {
		pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
		greedy: true
	},
	'number': /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
	'punctuation': /[{}[\],]/,
	'operator': /:/,
	'boolean': /\b(?:false|true)\b/,
	'null': {
		pattern: /\bnull\b/,
		alias: 'keyword'
	}
};

Prism.languages.webmanifest = Prism.languages.json;


/***/ }),

/***/ 366:
/***/ (() => {

Prism.languages.python = {
	'comment': {
		pattern: /(^|[^\\])#.*/,
		lookbehind: true,
		greedy: true
	},
	'string-interpolation': {
		pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
		greedy: true,
		inside: {
			'interpolation': {
				// "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
				pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
				lookbehind: true,
				inside: {
					'format-spec': {
						pattern: /(:)[^:(){}]+(?=\}$)/,
						lookbehind: true
					},
					'conversion-option': {
						pattern: /![sra](?=[:}]$)/,
						alias: 'punctuation'
					},
					rest: null
				}
			},
			'string': /[\s\S]+/
		}
	},
	'triple-quoted-string': {
		pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
		greedy: true,
		alias: 'string'
	},
	'string': {
		pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
		greedy: true
	},
	'function': {
		pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
		lookbehind: true
	},
	'class-name': {
		pattern: /(\bclass\s+)\w+/i,
		lookbehind: true
	},
	'decorator': {
		pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
		lookbehind: true,
		alias: ['annotation', 'punctuation'],
		inside: {
			'punctuation': /\./
		}
	},
	'keyword': /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
	'builtin': /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
	'boolean': /\b(?:False|None|True)\b/,
	'number': /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
	'operator': /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
	'punctuation': /[{}[\];(),.:]/
};

Prism.languages.python['string-interpolation'].inside['interpolation'].inside.rest = Prism.languages.python;

Prism.languages.py = Prism.languages.python;


/***/ }),

/***/ 358:
/***/ (() => {

(function (Prism) {

	// https://yaml.org/spec/1.2/spec.html#c-ns-anchor-property
	// https://yaml.org/spec/1.2/spec.html#c-ns-alias-node
	var anchorOrAlias = /[*&][^\s[\]{},]+/;
	// https://yaml.org/spec/1.2/spec.html#c-ns-tag-property
	var tag = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/;
	// https://yaml.org/spec/1.2/spec.html#c-ns-properties(n,c)
	var properties = '(?:' + tag.source + '(?:[ \t]+' + anchorOrAlias.source + ')?|'
		+ anchorOrAlias.source + '(?:[ \t]+' + tag.source + ')?)';
	// https://yaml.org/spec/1.2/spec.html#ns-plain(n,c)
	// This is a simplified version that doesn't support "#" and multiline keys
	// All these long scarry character classes are simplified versions of YAML's characters
	var plainKey = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source
		.replace(/<PLAIN>/g, function () { return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source; });
	var string = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;

	/**
	 *
	 * @param {string} value
	 * @param {string} [flags]
	 * @returns {RegExp}
	 */
	function createValuePattern(value, flags) {
		flags = (flags || '').replace(/m/g, '') + 'm'; // add m flag
		var pattern = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
			.replace(/<<prop>>/g, function () { return properties; }).replace(/<<value>>/g, function () { return value; });
		return RegExp(pattern, flags);
	}

	Prism.languages.yaml = {
		'scalar': {
			pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source
				.replace(/<<prop>>/g, function () { return properties; })),
			lookbehind: true,
			alias: 'string'
		},
		'comment': /#.*/,
		'key': {
			pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
				.replace(/<<prop>>/g, function () { return properties; })
				.replace(/<<key>>/g, function () { return '(?:' + plainKey + '|' + string + ')'; })),
			lookbehind: true,
			greedy: true,
			alias: 'atrule'
		},
		'directive': {
			pattern: /(^[ \t]*)%.+/m,
			lookbehind: true,
			alias: 'important'
		},
		'datetime': {
			pattern: createValuePattern(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
			lookbehind: true,
			alias: 'number'
		},
		'boolean': {
			pattern: createValuePattern(/false|true/.source, 'i'),
			lookbehind: true,
			alias: 'important'
		},
		'null': {
			pattern: createValuePattern(/null|~/.source, 'i'),
			lookbehind: true,
			alias: 'important'
		},
		'string': {
			pattern: createValuePattern(string),
			lookbehind: true,
			greedy: true
		},
		'number': {
			pattern: createValuePattern(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, 'i'),
			lookbehind: true
		},
		'tag': tag,
		'important': anchorOrAlias,
		'punctuation': /---|[:[\]{}\-,|>?]|\.\.\./
	};

	Prism.languages.yml = Prism.languages.yaml;

}(Prism));


/***/ }),

/***/ 660:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


/* **********************************************
     Begin prism-core.js
********************************************** */

/// <reference lib="WebWorker"/>

var _self = (typeof window !== 'undefined')
	? window   // if in browser
	: (
		(typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope)
			? self // if in worker
			: {}   // if in node js
	);

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
var Prism = (function (_self) {

	// Private helper vars
	var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
	var uniqueId = 0;

	// The grammar object for plaintext
	var plainTextGrammar = {};


	var _ = {
		/**
		 * By default, Prism will attempt to highlight all code elements (by calling {@link Prism.highlightAll}) on the
		 * current page after the page finished loading. This might be a problem if e.g. you wanted to asynchronously load
		 * additional languages or plugins yourself.
		 *
		 * By setting this value to `true`, Prism will not automatically highlight all code elements on the page.
		 *
		 * You obviously have to change this value before the automatic highlighting started. To do this, you can add an
		 * empty Prism object into the global scope before loading the Prism script like this:
		 *
		 * ```js
		 * window.Prism = window.Prism || {};
		 * Prism.manual = true;
		 * // add a new <script> to load Prism's script
		 * ```
		 *
		 * @default false
		 * @type {boolean}
		 * @memberof Prism
		 * @public
		 */
		manual: _self.Prism && _self.Prism.manual,
		/**
		 * By default, if Prism is in a web worker, it assumes that it is in a worker it created itself, so it uses
		 * `addEventListener` to communicate with its parent instance. However, if you're using Prism manually in your
		 * own worker, you don't want it to do this.
		 *
		 * By setting this value to `true`, Prism will not add its own listeners to the worker.
		 *
		 * You obviously have to change this value before Prism executes. To do this, you can add an
		 * empty Prism object into the global scope before loading the Prism script like this:
		 *
		 * ```js
		 * window.Prism = window.Prism || {};
		 * Prism.disableWorkerMessageHandler = true;
		 * // Load Prism's script
		 * ```
		 *
		 * @default false
		 * @type {boolean}
		 * @memberof Prism
		 * @public
		 */
		disableWorkerMessageHandler: _self.Prism && _self.Prism.disableWorkerMessageHandler,

		/**
		 * A namespace for utility methods.
		 *
		 * All function in this namespace that are not explicitly marked as _public_ are for __internal use only__ and may
		 * change or disappear at any time.
		 *
		 * @namespace
		 * @memberof Prism
		 */
		util: {
			encode: function encode(tokens) {
				if (tokens instanceof Token) {
					return new Token(tokens.type, encode(tokens.content), tokens.alias);
				} else if (Array.isArray(tokens)) {
					return tokens.map(encode);
				} else {
					return tokens.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/\u00a0/g, ' ');
				}
			},

			/**
			 * Returns the name of the type of the given value.
			 *
			 * @param {any} o
			 * @returns {string}
			 * @example
			 * type(null)      === 'Null'
			 * type(undefined) === 'Undefined'
			 * type(123)       === 'Number'
			 * type('foo')     === 'String'
			 * type(true)      === 'Boolean'
			 * type([1, 2])    === 'Array'
			 * type({})        === 'Object'
			 * type(String)    === 'Function'
			 * type(/abc+/)    === 'RegExp'
			 */
			type: function (o) {
				return Object.prototype.toString.call(o).slice(8, -1);
			},

			/**
			 * Returns a unique number for the given object. Later calls will still return the same number.
			 *
			 * @param {Object} obj
			 * @returns {number}
			 */
			objId: function (obj) {
				if (!obj['__id']) {
					Object.defineProperty(obj, '__id', { value: ++uniqueId });
				}
				return obj['__id'];
			},

			/**
			 * Creates a deep clone of the given object.
			 *
			 * The main intended use of this function is to clone language definitions.
			 *
			 * @param {T} o
			 * @param {Record<number, any>} [visited]
			 * @returns {T}
			 * @template T
			 */
			clone: function deepClone(o, visited) {
				visited = visited || {};

				var clone; var id;
				switch (_.util.type(o)) {
					case 'Object':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = /** @type {Record<string, any>} */ ({});
						visited[id] = clone;

						for (var key in o) {
							if (o.hasOwnProperty(key)) {
								clone[key] = deepClone(o[key], visited);
							}
						}

						return /** @type {any} */ (clone);

					case 'Array':
						id = _.util.objId(o);
						if (visited[id]) {
							return visited[id];
						}
						clone = [];
						visited[id] = clone;

						(/** @type {Array} */(/** @type {any} */(o))).forEach(function (v, i) {
							clone[i] = deepClone(v, visited);
						});

						return /** @type {any} */ (clone);

					default:
						return o;
				}
			},

			/**
			 * Returns the Prism language of the given element set by a `language-xxxx` or `lang-xxxx` class.
			 *
			 * If no language is set for the element or the element is `null` or `undefined`, `none` will be returned.
			 *
			 * @param {Element} element
			 * @returns {string}
			 */
			getLanguage: function (element) {
				while (element) {
					var m = lang.exec(element.className);
					if (m) {
						return m[1].toLowerCase();
					}
					element = element.parentElement;
				}
				return 'none';
			},

			/**
			 * Sets the Prism `language-xxxx` class of the given element.
			 *
			 * @param {Element} element
			 * @param {string} language
			 * @returns {void}
			 */
			setLanguage: function (element, language) {
				// remove all `language-xxxx` classes
				// (this might leave behind a leading space)
				element.className = element.className.replace(RegExp(lang, 'gi'), '');

				// add the new `language-xxxx` class
				// (using `classList` will automatically clean up spaces for us)
				element.classList.add('language-' + language);
			},

			/**
			 * Returns the script element that is currently executing.
			 *
			 * This does __not__ work for line script element.
			 *
			 * @returns {HTMLScriptElement | null}
			 */
			currentScript: function () {
				if (typeof document === 'undefined') {
					return null;
				}
				if ('currentScript' in document && 1 < 2 /* hack to trip TS' flow analysis */) {
					return /** @type {any} */ (document.currentScript);
				}

				// IE11 workaround
				// we'll get the src of the current script by parsing IE11's error stack trace
				// this will not work for inline scripts

				try {
					throw new Error();
				} catch (err) {
					// Get file src url from stack. Specifically works with the format of stack traces in IE.
					// A stack will look like this:
					//
					// Error
					//    at _.util.currentScript (http://localhost/components/prism-core.js:119:5)
					//    at Global code (http://localhost/components/prism-core.js:606:1)

					var src = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(err.stack) || [])[1];
					if (src) {
						var scripts = document.getElementsByTagName('script');
						for (var i in scripts) {
							if (scripts[i].src == src) {
								return scripts[i];
							}
						}
					}
					return null;
				}
			},

			/**
			 * Returns whether a given class is active for `element`.
			 *
			 * The class can be activated if `element` or one of its ancestors has the given class and it can be deactivated
			 * if `element` or one of its ancestors has the negated version of the given class. The _negated version_ of the
			 * given class is just the given class with a `no-` prefix.
			 *
			 * Whether the class is active is determined by the closest ancestor of `element` (where `element` itself is
			 * closest ancestor) that has the given class or the negated version of it. If neither `element` nor any of its
			 * ancestors have the given class or the negated version of it, then the default activation will be returned.
			 *
			 * In the paradoxical situation where the closest ancestor contains __both__ the given class and the negated
			 * version of it, the class is considered active.
			 *
			 * @param {Element} element
			 * @param {string} className
			 * @param {boolean} [defaultActivation=false]
			 * @returns {boolean}
			 */
			isActive: function (element, className, defaultActivation) {
				var no = 'no-' + className;

				while (element) {
					var classList = element.classList;
					if (classList.contains(className)) {
						return true;
					}
					if (classList.contains(no)) {
						return false;
					}
					element = element.parentElement;
				}
				return !!defaultActivation;
			}
		},

		/**
		 * This namespace contains all currently loaded languages and the some helper functions to create and modify languages.
		 *
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		languages: {
			/**
			 * The grammar for plain, unformatted text.
			 */
			plain: plainTextGrammar,
			plaintext: plainTextGrammar,
			text: plainTextGrammar,
			txt: plainTextGrammar,

			/**
			 * Creates a deep copy of the language with the given id and appends the given tokens.
			 *
			 * If a token in `redef` also appears in the copied language, then the existing token in the copied language
			 * will be overwritten at its original position.
			 *
			 * ## Best practices
			 *
			 * Since the position of overwriting tokens (token in `redef` that overwrite tokens in the copied language)
			 * doesn't matter, they can technically be in any order. However, this can be confusing to others that trying to
			 * understand the language definition because, normally, the order of tokens matters in Prism grammars.
			 *
			 * Therefore, it is encouraged to order overwriting tokens according to the positions of the overwritten tokens.
			 * Furthermore, all non-overwriting tokens should be placed after the overwriting ones.
			 *
			 * @param {string} id The id of the language to extend. This has to be a key in `Prism.languages`.
			 * @param {Grammar} redef The new tokens to append.
			 * @returns {Grammar} The new language created.
			 * @public
			 * @example
			 * Prism.languages['css-with-colors'] = Prism.languages.extend('css', {
			 *     // Prism.languages.css already has a 'comment' token, so this token will overwrite CSS' 'comment' token
			 *     // at its original position
			 *     'comment': { ... },
			 *     // CSS doesn't have a 'color' token, so this token will be appended
			 *     'color': /\b(?:red|green|blue)\b/
			 * });
			 */
			extend: function (id, redef) {
				var lang = _.util.clone(_.languages[id]);

				for (var key in redef) {
					lang[key] = redef[key];
				}

				return lang;
			},

			/**
			 * Inserts tokens _before_ another token in a language definition or any other grammar.
			 *
			 * ## Usage
			 *
			 * This helper method makes it easy to modify existing languages. For example, the CSS language definition
			 * not only defines CSS highlighting for CSS documents, but also needs to define highlighting for CSS embedded
			 * in HTML through `<style>` elements. To do this, it needs to modify `Prism.languages.markup` and add the
			 * appropriate tokens. However, `Prism.languages.markup` is a regular JavaScript object literal, so if you do
			 * this:
			 *
			 * ```js
			 * Prism.languages.markup.style = {
			 *     // token
			 * };
			 * ```
			 *
			 * then the `style` token will be added (and processed) at the end. `insertBefore` allows you to insert tokens
			 * before existing tokens. For the CSS example above, you would use it like this:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'cdata', {
			 *     'style': {
			 *         // token
			 *     }
			 * });
			 * ```
			 *
			 * ## Special cases
			 *
			 * If the grammars of `inside` and `insert` have tokens with the same name, the tokens in `inside`'s grammar
			 * will be ignored.
			 *
			 * This behavior can be used to insert tokens after `before`:
			 *
			 * ```js
			 * Prism.languages.insertBefore('markup', 'comment', {
			 *     'comment': Prism.languages.markup.comment,
			 *     // tokens after 'comment'
			 * });
			 * ```
			 *
			 * ## Limitations
			 *
			 * The main problem `insertBefore` has to solve is iteration order. Since ES2015, the iteration order for object
			 * properties is guaranteed to be the insertion order (except for integer keys) but some browsers behave
			 * differently when keys are deleted and re-inserted. So `insertBefore` can't be implemented by temporarily
			 * deleting properties which is necessary to insert at arbitrary positions.
			 *
			 * To solve this problem, `insertBefore` doesn't actually insert the given tokens into the target object.
			 * Instead, it will create a new object and replace all references to the target object with the new one. This
			 * can be done without temporarily deleting properties, so the iteration order is well-defined.
			 *
			 * However, only references that can be reached from `Prism.languages` or `insert` will be replaced. I.e. if
			 * you hold the target object in a variable, then the value of the variable will not change.
			 *
			 * ```js
			 * var oldMarkup = Prism.languages.markup;
			 * var newMarkup = Prism.languages.insertBefore('markup', 'comment', { ... });
			 *
			 * assert(oldMarkup !== Prism.languages.markup);
			 * assert(newMarkup === Prism.languages.markup);
			 * ```
			 *
			 * @param {string} inside The property of `root` (e.g. a language id in `Prism.languages`) that contains the
			 * object to be modified.
			 * @param {string} before The key to insert before.
			 * @param {Grammar} insert An object containing the key-value pairs to be inserted.
			 * @param {Object<string, any>} [root] The object containing `inside`, i.e. the object that contains the
			 * object to be modified.
			 *
			 * Defaults to `Prism.languages`.
			 * @returns {Grammar} The new grammar object.
			 * @public
			 */
			insertBefore: function (inside, before, insert, root) {
				root = root || /** @type {any} */ (_.languages);
				var grammar = root[inside];
				/** @type {Grammar} */
				var ret = {};

				for (var token in grammar) {
					if (grammar.hasOwnProperty(token)) {

						if (token == before) {
							for (var newToken in insert) {
								if (insert.hasOwnProperty(newToken)) {
									ret[newToken] = insert[newToken];
								}
							}
						}

						// Do not insert token which also occur in insert. See #1525
						if (!insert.hasOwnProperty(token)) {
							ret[token] = grammar[token];
						}
					}
				}

				var old = root[inside];
				root[inside] = ret;

				// Update references in other language definitions
				_.languages.DFS(_.languages, function (key, value) {
					if (value === old && key != inside) {
						this[key] = ret;
					}
				});

				return ret;
			},

			// Traverse a language definition with Depth First Search
			DFS: function DFS(o, callback, type, visited) {
				visited = visited || {};

				var objId = _.util.objId;

				for (var i in o) {
					if (o.hasOwnProperty(i)) {
						callback.call(o, i, o[i], type || i);

						var property = o[i];
						var propertyType = _.util.type(property);

						if (propertyType === 'Object' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, null, visited);
						} else if (propertyType === 'Array' && !visited[objId(property)]) {
							visited[objId(property)] = true;
							DFS(property, callback, i, visited);
						}
					}
				}
			}
		},

		plugins: {},

		/**
		 * This is the most high-level function in Prism’s API.
		 * It fetches all the elements that have a `.language-xxxx` class and then calls {@link Prism.highlightElement} on
		 * each one of them.
		 *
		 * This is equivalent to `Prism.highlightAllUnder(document, async, callback)`.
		 *
		 * @param {boolean} [async=false] Same as in {@link Prism.highlightAllUnder}.
		 * @param {HighlightCallback} [callback] Same as in {@link Prism.highlightAllUnder}.
		 * @memberof Prism
		 * @public
		 */
		highlightAll: function (async, callback) {
			_.highlightAllUnder(document, async, callback);
		},

		/**
		 * Fetches all the descendants of `container` that have a `.language-xxxx` class and then calls
		 * {@link Prism.highlightElement} on each one of them.
		 *
		 * The following hooks will be run:
		 * 1. `before-highlightall`
		 * 2. `before-all-elements-highlight`
		 * 3. All hooks of {@link Prism.highlightElement} for each element.
		 *
		 * @param {ParentNode} container The root element, whose descendants that have a `.language-xxxx` class will be highlighted.
		 * @param {boolean} [async=false] Whether each element is to be highlighted asynchronously using Web Workers.
		 * @param {HighlightCallback} [callback] An optional callback to be invoked on each element after its highlighting is done.
		 * @memberof Prism
		 * @public
		 */
		highlightAllUnder: function (container, async, callback) {
			var env = {
				callback: callback,
				container: container,
				selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
			};

			_.hooks.run('before-highlightall', env);

			env.elements = Array.prototype.slice.apply(env.container.querySelectorAll(env.selector));

			_.hooks.run('before-all-elements-highlight', env);

			for (var i = 0, element; (element = env.elements[i++]);) {
				_.highlightElement(element, async === true, env.callback);
			}
		},

		/**
		 * Highlights the code inside a single element.
		 *
		 * The following hooks will be run:
		 * 1. `before-sanity-check`
		 * 2. `before-highlight`
		 * 3. All hooks of {@link Prism.highlight}. These hooks will be run by an asynchronous worker if `async` is `true`.
		 * 4. `before-insert`
		 * 5. `after-highlight`
		 * 6. `complete`
		 *
		 * Some the above hooks will be skipped if the element doesn't contain any text or there is no grammar loaded for
		 * the element's language.
		 *
		 * @param {Element} element The element containing the code.
		 * It must have a class of `language-xxxx` to be processed, where `xxxx` is a valid language identifier.
		 * @param {boolean} [async=false] Whether the element is to be highlighted asynchronously using Web Workers
		 * to improve performance and avoid blocking the UI when highlighting very large chunks of code. This option is
		 * [disabled by default](https://prismjs.com/faq.html#why-is-asynchronous-highlighting-disabled-by-default).
		 *
		 * Note: All language definitions required to highlight the code must be included in the main `prism.js` file for
		 * asynchronous highlighting to work. You can build your own bundle on the
		 * [Download page](https://prismjs.com/download.html).
		 * @param {HighlightCallback} [callback] An optional callback to be invoked after the highlighting is done.
		 * Mostly useful when `async` is `true`, since in that case, the highlighting is done asynchronously.
		 * @memberof Prism
		 * @public
		 */
		highlightElement: function (element, async, callback) {
			// Find language
			var language = _.util.getLanguage(element);
			var grammar = _.languages[language];

			// Set language on the element, if not present
			_.util.setLanguage(element, language);

			// Set language on the parent, for styling
			var parent = element.parentElement;
			if (parent && parent.nodeName.toLowerCase() === 'pre') {
				_.util.setLanguage(parent, language);
			}

			var code = element.textContent;

			var env = {
				element: element,
				language: language,
				grammar: grammar,
				code: code
			};

			function insertHighlightedCode(highlightedCode) {
				env.highlightedCode = highlightedCode;

				_.hooks.run('before-insert', env);

				env.element.innerHTML = env.highlightedCode;

				_.hooks.run('after-highlight', env);
				_.hooks.run('complete', env);
				callback && callback.call(env.element);
			}

			_.hooks.run('before-sanity-check', env);

			// plugins may change/add the parent/element
			parent = env.element.parentElement;
			if (parent && parent.nodeName.toLowerCase() === 'pre' && !parent.hasAttribute('tabindex')) {
				parent.setAttribute('tabindex', '0');
			}

			if (!env.code) {
				_.hooks.run('complete', env);
				callback && callback.call(env.element);
				return;
			}

			_.hooks.run('before-highlight', env);

			if (!env.grammar) {
				insertHighlightedCode(_.util.encode(env.code));
				return;
			}

			if (async && _self.Worker) {
				var worker = new Worker(_.filename);

				worker.onmessage = function (evt) {
					insertHighlightedCode(evt.data);
				};

				worker.postMessage(JSON.stringify({
					language: env.language,
					code: env.code,
					immediateClose: true
				}));
			} else {
				insertHighlightedCode(_.highlight(env.code, env.grammar, env.language));
			}
		},

		/**
		 * Low-level function, only use if you know what you’re doing. It accepts a string of text as input
		 * and the language definitions to use, and returns a string with the HTML produced.
		 *
		 * The following hooks will be run:
		 * 1. `before-tokenize`
		 * 2. `after-tokenize`
		 * 3. `wrap`: On each {@link Token}.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @param {string} language The name of the language definition passed to `grammar`.
		 * @returns {string} The highlighted HTML.
		 * @memberof Prism
		 * @public
		 * @example
		 * Prism.highlight('var foo = true;', Prism.languages.javascript, 'javascript');
		 */
		highlight: function (text, grammar, language) {
			var env = {
				code: text,
				grammar: grammar,
				language: language
			};
			_.hooks.run('before-tokenize', env);
			if (!env.grammar) {
				throw new Error('The language "' + env.language + '" has no grammar.');
			}
			env.tokens = _.tokenize(env.code, env.grammar);
			_.hooks.run('after-tokenize', env);
			return Token.stringify(_.util.encode(env.tokens), env.language);
		},

		/**
		 * This is the heart of Prism, and the most low-level function you can use. It accepts a string of text as input
		 * and the language definitions to use, and returns an array with the tokenized code.
		 *
		 * When the language definition includes nested tokens, the function is called recursively on each of these tokens.
		 *
		 * This method could be useful in other contexts as well, as a very crude parser.
		 *
		 * @param {string} text A string with the code to be highlighted.
		 * @param {Grammar} grammar An object containing the tokens to use.
		 *
		 * Usually a language definition like `Prism.languages.markup`.
		 * @returns {TokenStream} An array of strings and tokens, a token stream.
		 * @memberof Prism
		 * @public
		 * @example
		 * let code = `var foo = 0;`;
		 * let tokens = Prism.tokenize(code, Prism.languages.javascript);
		 * tokens.forEach(token => {
		 *     if (token instanceof Prism.Token && token.type === 'number') {
		 *         console.log(`Found numeric literal: ${token.content}`);
		 *     }
		 * });
		 */
		tokenize: function (text, grammar) {
			var rest = grammar.rest;
			if (rest) {
				for (var token in rest) {
					grammar[token] = rest[token];
				}

				delete grammar.rest;
			}

			var tokenList = new LinkedList();
			addAfter(tokenList, tokenList.head, text);

			matchGrammar(text, tokenList, grammar, tokenList.head, 0);

			return toArray(tokenList);
		},

		/**
		 * @namespace
		 * @memberof Prism
		 * @public
		 */
		hooks: {
			all: {},

			/**
			 * Adds the given callback to the list of callbacks for the given hook.
			 *
			 * The callback will be invoked when the hook it is registered for is run.
			 * Hooks are usually directly run by a highlight function but you can also run hooks yourself.
			 *
			 * One callback function can be registered to multiple hooks and the same hook multiple times.
			 *
			 * @param {string} name The name of the hook.
			 * @param {HookCallback} callback The callback function which is given environment variables.
			 * @public
			 */
			add: function (name, callback) {
				var hooks = _.hooks.all;

				hooks[name] = hooks[name] || [];

				hooks[name].push(callback);
			},

			/**
			 * Runs a hook invoking all registered callbacks with the given environment variables.
			 *
			 * Callbacks will be invoked synchronously and in the order in which they were registered.
			 *
			 * @param {string} name The name of the hook.
			 * @param {Object<string, any>} env The environment variables of the hook passed to all callbacks registered.
			 * @public
			 */
			run: function (name, env) {
				var callbacks = _.hooks.all[name];

				if (!callbacks || !callbacks.length) {
					return;
				}

				for (var i = 0, callback; (callback = callbacks[i++]);) {
					callback(env);
				}
			}
		},

		Token: Token
	};
	_self.Prism = _;


	// Typescript note:
	// The following can be used to import the Token type in JSDoc:
	//
	//   @typedef {InstanceType<import("./prism-core")["Token"]>} Token

	/**
	 * Creates a new token.
	 *
	 * @param {string} type See {@link Token#type type}
	 * @param {string | TokenStream} content See {@link Token#content content}
	 * @param {string|string[]} [alias] The alias(es) of the token.
	 * @param {string} [matchedStr=""] A copy of the full string this token was created from.
	 * @class
	 * @global
	 * @public
	 */
	function Token(type, content, alias, matchedStr) {
		/**
		 * The type of the token.
		 *
		 * This is usually the key of a pattern in a {@link Grammar}.
		 *
		 * @type {string}
		 * @see GrammarToken
		 * @public
		 */
		this.type = type;
		/**
		 * The strings or tokens contained by this token.
		 *
		 * This will be a token stream if the pattern matched also defined an `inside` grammar.
		 *
		 * @type {string | TokenStream}
		 * @public
		 */
		this.content = content;
		/**
		 * The alias(es) of the token.
		 *
		 * @type {string|string[]}
		 * @see GrammarToken
		 * @public
		 */
		this.alias = alias;
		// Copy of the full string this token was created from
		this.length = (matchedStr || '').length | 0;
	}

	/**
	 * A token stream is an array of strings and {@link Token Token} objects.
	 *
	 * Token streams have to fulfill a few properties that are assumed by most functions (mostly internal ones) that process
	 * them.
	 *
	 * 1. No adjacent strings.
	 * 2. No empty strings.
	 *
	 *    The only exception here is the token stream that only contains the empty string and nothing else.
	 *
	 * @typedef {Array<string | Token>} TokenStream
	 * @global
	 * @public
	 */

	/**
	 * Converts the given token or token stream to an HTML representation.
	 *
	 * The following hooks will be run:
	 * 1. `wrap`: On each {@link Token}.
	 *
	 * @param {string | Token | TokenStream} o The token or token stream to be converted.
	 * @param {string} language The name of current language.
	 * @returns {string} The HTML representation of the token or token stream.
	 * @memberof Token
	 * @static
	 */
	Token.stringify = function stringify(o, language) {
		if (typeof o == 'string') {
			return o;
		}
		if (Array.isArray(o)) {
			var s = '';
			o.forEach(function (e) {
				s += stringify(e, language);
			});
			return s;
		}

		var env = {
			type: o.type,
			content: stringify(o.content, language),
			tag: 'span',
			classes: ['token', o.type],
			attributes: {},
			language: language
		};

		var aliases = o.alias;
		if (aliases) {
			if (Array.isArray(aliases)) {
				Array.prototype.push.apply(env.classes, aliases);
			} else {
				env.classes.push(aliases);
			}
		}

		_.hooks.run('wrap', env);

		var attributes = '';
		for (var name in env.attributes) {
			attributes += ' ' + name + '="' + (env.attributes[name] || '').replace(/"/g, '&quot;') + '"';
		}

		return '<' + env.tag + ' class="' + env.classes.join(' ') + '"' + attributes + '>' + env.content + '</' + env.tag + '>';
	};

	/**
	 * @param {RegExp} pattern
	 * @param {number} pos
	 * @param {string} text
	 * @param {boolean} lookbehind
	 * @returns {RegExpExecArray | null}
	 */
	function matchPattern(pattern, pos, text, lookbehind) {
		pattern.lastIndex = pos;
		var match = pattern.exec(text);
		if (match && lookbehind && match[1]) {
			// change the match to remove the text matched by the Prism lookbehind group
			var lookbehindLength = match[1].length;
			match.index += lookbehindLength;
			match[0] = match[0].slice(lookbehindLength);
		}
		return match;
	}

	/**
	 * @param {string} text
	 * @param {LinkedList<string | Token>} tokenList
	 * @param {any} grammar
	 * @param {LinkedListNode<string | Token>} startNode
	 * @param {number} startPos
	 * @param {RematchOptions} [rematch]
	 * @returns {void}
	 * @private
	 *
	 * @typedef RematchOptions
	 * @property {string} cause
	 * @property {number} reach
	 */
	function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
		for (var token in grammar) {
			if (!grammar.hasOwnProperty(token) || !grammar[token]) {
				continue;
			}

			var patterns = grammar[token];
			patterns = Array.isArray(patterns) ? patterns : [patterns];

			for (var j = 0; j < patterns.length; ++j) {
				if (rematch && rematch.cause == token + ',' + j) {
					return;
				}

				var patternObj = patterns[j];
				var inside = patternObj.inside;
				var lookbehind = !!patternObj.lookbehind;
				var greedy = !!patternObj.greedy;
				var alias = patternObj.alias;

				if (greedy && !patternObj.pattern.global) {
					// Without the global flag, lastIndex won't work
					var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
					patternObj.pattern = RegExp(patternObj.pattern.source, flags + 'g');
				}

				/** @type {RegExp} */
				var pattern = patternObj.pattern || patternObj;

				for ( // iterate the token list and keep track of the current token/string position
					var currentNode = startNode.next, pos = startPos;
					currentNode !== tokenList.tail;
					pos += currentNode.value.length, currentNode = currentNode.next
				) {

					if (rematch && pos >= rematch.reach) {
						break;
					}

					var str = currentNode.value;

					if (tokenList.length > text.length) {
						// Something went terribly wrong, ABORT, ABORT!
						return;
					}

					if (str instanceof Token) {
						continue;
					}

					var removeCount = 1; // this is the to parameter of removeBetween
					var match;

					if (greedy) {
						match = matchPattern(pattern, pos, text, lookbehind);
						if (!match || match.index >= text.length) {
							break;
						}

						var from = match.index;
						var to = match.index + match[0].length;
						var p = pos;

						// find the node that contains the match
						p += currentNode.value.length;
						while (from >= p) {
							currentNode = currentNode.next;
							p += currentNode.value.length;
						}
						// adjust pos (and p)
						p -= currentNode.value.length;
						pos = p;

						// the current node is a Token, then the match starts inside another Token, which is invalid
						if (currentNode.value instanceof Token) {
							continue;
						}

						// find the last node which is affected by this match
						for (
							var k = currentNode;
							k !== tokenList.tail && (p < to || typeof k.value === 'string');
							k = k.next
						) {
							removeCount++;
							p += k.value.length;
						}
						removeCount--;

						// replace with the new match
						str = text.slice(pos, p);
						match.index -= pos;
					} else {
						match = matchPattern(pattern, 0, str, lookbehind);
						if (!match) {
							continue;
						}
					}

					// eslint-disable-next-line no-redeclare
					var from = match.index;
					var matchStr = match[0];
					var before = str.slice(0, from);
					var after = str.slice(from + matchStr.length);

					var reach = pos + str.length;
					if (rematch && reach > rematch.reach) {
						rematch.reach = reach;
					}

					var removeFrom = currentNode.prev;

					if (before) {
						removeFrom = addAfter(tokenList, removeFrom, before);
						pos += before.length;
					}

					removeRange(tokenList, removeFrom, removeCount);

					var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
					currentNode = addAfter(tokenList, removeFrom, wrapped);

					if (after) {
						addAfter(tokenList, currentNode, after);
					}

					if (removeCount > 1) {
						// at least one Token object was removed, so we have to do some rematching
						// this can only happen if the current pattern is greedy

						/** @type {RematchOptions} */
						var nestedRematch = {
							cause: token + ',' + j,
							reach: reach
						};
						matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);

						// the reach might have been extended because of the rematching
						if (rematch && nestedRematch.reach > rematch.reach) {
							rematch.reach = nestedRematch.reach;
						}
					}
				}
			}
		}
	}

	/**
	 * @typedef LinkedListNode
	 * @property {T} value
	 * @property {LinkedListNode<T> | null} prev The previous node.
	 * @property {LinkedListNode<T> | null} next The next node.
	 * @template T
	 * @private
	 */

	/**
	 * @template T
	 * @private
	 */
	function LinkedList() {
		/** @type {LinkedListNode<T>} */
		var head = { value: null, prev: null, next: null };
		/** @type {LinkedListNode<T>} */
		var tail = { value: null, prev: head, next: null };
		head.next = tail;

		/** @type {LinkedListNode<T>} */
		this.head = head;
		/** @type {LinkedListNode<T>} */
		this.tail = tail;
		this.length = 0;
	}

	/**
	 * Adds a new node with the given value to the list.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {T} value
	 * @returns {LinkedListNode<T>} The added node.
	 * @template T
	 */
	function addAfter(list, node, value) {
		// assumes that node != list.tail && values.length >= 0
		var next = node.next;

		var newNode = { value: value, prev: node, next: next };
		node.next = newNode;
		next.prev = newNode;
		list.length++;

		return newNode;
	}
	/**
	 * Removes `count` nodes after the given node. The given node will not be removed.
	 *
	 * @param {LinkedList<T>} list
	 * @param {LinkedListNode<T>} node
	 * @param {number} count
	 * @template T
	 */
	function removeRange(list, node, count) {
		var next = node.next;
		for (var i = 0; i < count && next !== list.tail; i++) {
			next = next.next;
		}
		node.next = next;
		next.prev = node;
		list.length -= i;
	}
	/**
	 * @param {LinkedList<T>} list
	 * @returns {T[]}
	 * @template T
	 */
	function toArray(list) {
		var array = [];
		var node = list.head.next;
		while (node !== list.tail) {
			array.push(node.value);
			node = node.next;
		}
		return array;
	}


	if (!_self.document) {
		if (!_self.addEventListener) {
			// in Node.js
			return _;
		}

		if (!_.disableWorkerMessageHandler) {
			// In worker
			_self.addEventListener('message', function (evt) {
				var message = JSON.parse(evt.data);
				var lang = message.language;
				var code = message.code;
				var immediateClose = message.immediateClose;

				_self.postMessage(_.highlight(code, _.languages[lang], lang));
				if (immediateClose) {
					_self.close();
				}
			}, false);
		}

		return _;
	}

	// Get current script and highlight
	var script = _.util.currentScript();

	if (script) {
		_.filename = script.src;

		if (script.hasAttribute('data-manual')) {
			_.manual = true;
		}
	}

	function highlightAutomaticallyCallback() {
		if (!_.manual) {
			_.highlightAll();
		}
	}

	if (!_.manual) {
		// If the document state is "loading", then we'll use DOMContentLoaded.
		// If the document state is "interactive" and the prism.js script is deferred, then we'll also use the
		// DOMContentLoaded event because there might be some plugins or languages which have also been deferred and they
		// might take longer one animation frame to execute which can create a race condition where only some plugins have
		// been loaded when Prism.highlightAll() is executed, depending on how fast resources are loaded.
		// See https://github.com/PrismJS/prism/issues/2102
		var readyState = document.readyState;
		if (readyState === 'loading' || readyState === 'interactive' && script && script.defer) {
			document.addEventListener('DOMContentLoaded', highlightAutomaticallyCallback);
		} else {
			if (window.requestAnimationFrame) {
				window.requestAnimationFrame(highlightAutomaticallyCallback);
			} else {
				window.setTimeout(highlightAutomaticallyCallback, 16);
			}
		}
	}

	return _;

}(_self));

if ( true && module.exports) {
	module.exports = Prism;
}

// hack for components to work correctly in node.js
if (typeof __webpack_require__.g !== 'undefined') {
	__webpack_require__.g.Prism = Prism;
}

// some additional documentation/types

/**
 * The expansion of a simple `RegExp` literal to support additional properties.
 *
 * @typedef GrammarToken
 * @property {RegExp} pattern The regular expression of the token.
 * @property {boolean} [lookbehind=false] If `true`, then the first capturing group of `pattern` will (effectively)
 * behave as a lookbehind group meaning that the captured text will not be part of the matched text of the new token.
 * @property {boolean} [greedy=false] Whether the token is greedy.
 * @property {string|string[]} [alias] An optional alias or list of aliases.
 * @property {Grammar} [inside] The nested grammar of this token.
 *
 * The `inside` grammar will be used to tokenize the text value of each token of this kind.
 *
 * This can be used to make nested and even recursive language definitions.
 *
 * Note: This can cause infinite recursion. Be careful when you embed different languages or even the same language into
 * each another.
 * @global
 * @public
 */

/**
 * @typedef Grammar
 * @type {Object<string, RegExp | GrammarToken | Array<RegExp | GrammarToken>>}
 * @property {Grammar} [rest] An optional grammar object that will be appended to this grammar.
 * @global
 * @public
 */

/**
 * A function which will invoked after an element was successfully highlighted.
 *
 * @callback HighlightCallback
 * @param {Element} element The element successfully highlighted.
 * @returns {void}
 * @global
 * @public
 */

/**
 * @callback HookCallback
 * @param {Object<string, any>} env The environment variables of the hook.
 * @returns {void}
 * @global
 * @public
 */


/* **********************************************
     Begin prism-markup.js
********************************************** */

Prism.languages.markup = {
	'comment': {
		pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
		greedy: true
	},
	'prolog': {
		pattern: /<\?[\s\S]+?\?>/,
		greedy: true
	},
	'doctype': {
		// https://www.w3.org/TR/xml/#NT-doctypedecl
		pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
		greedy: true,
		inside: {
			'internal-subset': {
				pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
				lookbehind: true,
				greedy: true,
				inside: null // see below
			},
			'string': {
				pattern: /"[^"]*"|'[^']*'/,
				greedy: true
			},
			'punctuation': /^<!|>$|[[\]]/,
			'doctype-tag': /^DOCTYPE/i,
			'name': /[^\s<>'"]+/
		}
	},
	'cdata': {
		pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
		greedy: true
	},
	'tag': {
		pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
		greedy: true,
		inside: {
			'tag': {
				pattern: /^<\/?[^\s>\/]+/,
				inside: {
					'punctuation': /^<\/?/,
					'namespace': /^[^\s>\/:]+:/
				}
			},
			'special-attr': [],
			'attr-value': {
				pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
				inside: {
					'punctuation': [
						{
							pattern: /^=/,
							alias: 'attr-equals'
						},
						/"|'/
					]
				}
			},
			'punctuation': /\/?>/,
			'attr-name': {
				pattern: /[^\s>\/]+/,
				inside: {
					'namespace': /^[^\s>\/:]+:/
				}
			}

		}
	},
	'entity': [
		{
			pattern: /&[\da-z]{1,8};/i,
			alias: 'named-entity'
		},
		/&#x?[\da-f]{1,8};/i
	]
};

Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] =
	Prism.languages.markup['entity'];
Prism.languages.markup['doctype'].inside['internal-subset'].inside = Prism.languages.markup;

// Plugin to make entity title show the real entity, idea by Roman Komarov
Prism.hooks.add('wrap', function (env) {

	if (env.type === 'entity') {
		env.attributes['title'] = env.content.replace(/&amp;/, '&');
	}
});

Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
	/**
	 * Adds an inlined language to markup.
	 *
	 * An example of an inlined language is CSS with `<style>` tags.
	 *
	 * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addInlined('style', 'css');
	 */
	value: function addInlined(tagName, lang) {
		var includedCdataInside = {};
		includedCdataInside['language-' + lang] = {
			pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
			lookbehind: true,
			inside: Prism.languages[lang]
		};
		includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;

		var inside = {
			'included-cdata': {
				pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
				inside: includedCdataInside
			}
		};
		inside['language-' + lang] = {
			pattern: /[\s\S]+/,
			inside: Prism.languages[lang]
		};

		var def = {};
		def[tagName] = {
			pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () { return tagName; }), 'i'),
			lookbehind: true,
			greedy: true,
			inside: inside
		};

		Prism.languages.insertBefore('markup', 'cdata', def);
	}
});
Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
	/**
	 * Adds an pattern to highlight languages embedded in HTML attributes.
	 *
	 * An example of an inlined language is CSS with `style` attributes.
	 *
	 * @param {string} attrName The name of the tag that contains the inlined language. This name will be treated as
	 * case insensitive.
	 * @param {string} lang The language key.
	 * @example
	 * addAttribute('style', 'css');
	 */
	value: function (attrName, lang) {
		Prism.languages.markup.tag.inside['special-attr'].push({
			pattern: RegExp(
				/(^|["'\s])/.source + '(?:' + attrName + ')' + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
				'i'
			),
			lookbehind: true,
			inside: {
				'attr-name': /^[^\s=]+/,
				'attr-value': {
					pattern: /=[\s\S]+/,
					inside: {
						'value': {
							pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
							lookbehind: true,
							alias: [lang, 'language-' + lang],
							inside: Prism.languages[lang]
						},
						'punctuation': [
							{
								pattern: /^=/,
								alias: 'attr-equals'
							},
							/"|'/
						]
					}
				}
			}
		});
	}
});

Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;

Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.ssml = Prism.languages.xml;
Prism.languages.atom = Prism.languages.xml;
Prism.languages.rss = Prism.languages.xml;


/* **********************************************
     Begin prism-css.js
********************************************** */

(function (Prism) {

	var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;

	Prism.languages.css = {
		'comment': /\/\*[\s\S]*?\*\//,
		'atrule': {
			pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
			inside: {
				'rule': /^@[\w-]+/,
				'selector-function-argument': {
					pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
					lookbehind: true,
					alias: 'selector'
				},
				'keyword': {
					pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
					lookbehind: true
				}
				// See rest below
			}
		},
		'url': {
			// https://drafts.csswg.org/css-values-3/#urls
			pattern: RegExp('\\burl\\((?:' + string.source + '|' + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ')\\)', 'i'),
			greedy: true,
			inside: {
				'function': /^url/i,
				'punctuation': /^\(|\)$/,
				'string': {
					pattern: RegExp('^' + string.source + '$'),
					alias: 'url'
				}
			}
		},
		'selector': {
			pattern: RegExp('(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' + string.source + ')*(?=\\s*\\{)'),
			lookbehind: true
		},
		'string': {
			pattern: string,
			greedy: true
		},
		'property': {
			pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
			lookbehind: true
		},
		'important': /!important\b/i,
		'function': {
			pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
			lookbehind: true
		},
		'punctuation': /[(){};:,]/
	};

	Prism.languages.css['atrule'].inside.rest = Prism.languages.css;

	var markup = Prism.languages.markup;
	if (markup) {
		markup.tag.addInlined('style', 'css');
		markup.tag.addAttribute('style', 'css');
	}

}(Prism));


/* **********************************************
     Begin prism-clike.js
********************************************** */

Prism.languages.clike = {
	'comment': [
		{
			pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
			lookbehind: true,
			greedy: true
		},
		{
			pattern: /(^|[^\\:])\/\/.*/,
			lookbehind: true,
			greedy: true
		}
	],
	'string': {
		pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
		greedy: true
	},
	'class-name': {
		pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
		lookbehind: true,
		inside: {
			'punctuation': /[.\\]/
		}
	},
	'keyword': /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
	'boolean': /\b(?:false|true)\b/,
	'function': /\b\w+(?=\()/,
	'number': /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
	'operator': /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
	'punctuation': /[{}[\];(),.:]/
};


/* **********************************************
     Begin prism-javascript.js
********************************************** */

Prism.languages.javascript = Prism.languages.extend('clike', {
	'class-name': [
		Prism.languages.clike['class-name'],
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
			lookbehind: true
		}
	],
	'keyword': [
		{
			pattern: /((?:^|\})\s*)catch\b/,
			lookbehind: true
		},
		{
			pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
			lookbehind: true
		},
	],
	// Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
	'function': /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
	'number': {
		pattern: RegExp(
			/(^|[^\w$])/.source +
			'(?:' +
			(
				// constant
				/NaN|Infinity/.source +
				'|' +
				// binary integer
				/0[bB][01]+(?:_[01]+)*n?/.source +
				'|' +
				// octal integer
				/0[oO][0-7]+(?:_[0-7]+)*n?/.source +
				'|' +
				// hexadecimal integer
				/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
				'|' +
				// decimal bigint
				/\d+(?:_\d+)*n/.source +
				'|' +
				// decimal number (integer or float) but no bigint
				/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source
			) +
			')' +
			/(?![\w$])/.source
		),
		lookbehind: true
	},
	'operator': /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});

Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;

Prism.languages.insertBefore('javascript', 'keyword', {
	'regex': {
		pattern: RegExp(
			// lookbehind
			// eslint-disable-next-line regexp/no-dupe-characters-character-class
			/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source +
			// Regex pattern:
			// There are 2 regex patterns here. The RegExp set notation proposal added support for nested character
			// classes if the `v` flag is present. Unfortunately, nested CCs are both context-free and incompatible
			// with the only syntax, so we have to define 2 different regex patterns.
			/\//.source +
			'(?:' +
			/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source +
			'|' +
			// `v` flag syntax. This supports 3 levels of nested character classes.
			/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source +
			')' +
			// lookahead
			/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source
		),
		lookbehind: true,
		greedy: true,
		inside: {
			'regex-source': {
				pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
				lookbehind: true,
				alias: 'language-regex',
				inside: Prism.languages.regex
			},
			'regex-delimiter': /^\/|\/$/,
			'regex-flags': /^[a-z]+$/,
		}
	},
	// This must be declared before keyword because we use "function" inside the look-forward
	'function-variable': {
		pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
		alias: 'function'
	},
	'parameter': [
		{
			pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		},
		{
			pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
			lookbehind: true,
			inside: Prism.languages.javascript
		}
	],
	'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});

Prism.languages.insertBefore('javascript', 'string', {
	'hashbang': {
		pattern: /^#!.*/,
		greedy: true,
		alias: 'comment'
	},
	'template-string': {
		pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
		greedy: true,
		inside: {
			'template-punctuation': {
				pattern: /^`|`$/,
				alias: 'string'
			},
			'interpolation': {
				pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
				lookbehind: true,
				inside: {
					'interpolation-punctuation': {
						pattern: /^\$\{|\}$/,
						alias: 'punctuation'
					},
					rest: Prism.languages.javascript
				}
			},
			'string': /[\s\S]+/
		}
	},
	'string-property': {
		pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
		lookbehind: true,
		greedy: true,
		alias: 'property'
	}
});

Prism.languages.insertBefore('javascript', 'operator', {
	'literal-property': {
		pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
		lookbehind: true,
		alias: 'property'
	},
});

if (Prism.languages.markup) {
	Prism.languages.markup.tag.addInlined('script', 'javascript');

	// add attribute support for all DOM events.
	// https://developer.mozilla.org/en-US/docs/Web/Events#Standard_events
	Prism.languages.markup.tag.addAttribute(
		/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,
		'javascript'
	);
}

Prism.languages.js = Prism.languages.javascript;


/* **********************************************
     Begin prism-file-highlight.js
********************************************** */

(function () {

	if (typeof Prism === 'undefined' || typeof document === 'undefined') {
		return;
	}

	// https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
	if (!Element.prototype.matches) {
		Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
	}

	var LOADING_MESSAGE = 'Loading…';
	var FAILURE_MESSAGE = function (status, message) {
		return '✖ Error ' + status + ' while fetching file: ' + message;
	};
	var FAILURE_EMPTY_MESSAGE = '✖ Error: File does not exist or is empty';

	var EXTENSIONS = {
		'js': 'javascript',
		'py': 'python',
		'rb': 'ruby',
		'ps1': 'powershell',
		'psm1': 'powershell',
		'sh': 'bash',
		'bat': 'batch',
		'h': 'c',
		'tex': 'latex'
	};

	var STATUS_ATTR = 'data-src-status';
	var STATUS_LOADING = 'loading';
	var STATUS_LOADED = 'loaded';
	var STATUS_FAILED = 'failed';

	var SELECTOR = 'pre[data-src]:not([' + STATUS_ATTR + '="' + STATUS_LOADED + '"])'
		+ ':not([' + STATUS_ATTR + '="' + STATUS_LOADING + '"])';

	/**
	 * Loads the given file.
	 *
	 * @param {string} src The URL or path of the source file to load.
	 * @param {(result: string) => void} success
	 * @param {(reason: string) => void} error
	 */
	function loadFile(src, success, error) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', src, true);
		xhr.onreadystatechange = function () {
			if (xhr.readyState == 4) {
				if (xhr.status < 400 && xhr.responseText) {
					success(xhr.responseText);
				} else {
					if (xhr.status >= 400) {
						error(FAILURE_MESSAGE(xhr.status, xhr.statusText));
					} else {
						error(FAILURE_EMPTY_MESSAGE);
					}
				}
			}
		};
		xhr.send(null);
	}

	/**
	 * Parses the given range.
	 *
	 * This returns a range with inclusive ends.
	 *
	 * @param {string | null | undefined} range
	 * @returns {[number, number | undefined] | undefined}
	 */
	function parseRange(range) {
		var m = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(range || '');
		if (m) {
			var start = Number(m[1]);
			var comma = m[2];
			var end = m[3];

			if (!comma) {
				return [start, start];
			}
			if (!end) {
				return [start, undefined];
			}
			return [start, Number(end)];
		}
		return undefined;
	}

	Prism.hooks.add('before-highlightall', function (env) {
		env.selector += ', ' + SELECTOR;
	});

	Prism.hooks.add('before-sanity-check', function (env) {
		var pre = /** @type {HTMLPreElement} */ (env.element);
		if (pre.matches(SELECTOR)) {
			env.code = ''; // fast-path the whole thing and go to complete

			pre.setAttribute(STATUS_ATTR, STATUS_LOADING); // mark as loading

			// add code element with loading message
			var code = pre.appendChild(document.createElement('CODE'));
			code.textContent = LOADING_MESSAGE;

			var src = pre.getAttribute('data-src');

			var language = env.language;
			if (language === 'none') {
				// the language might be 'none' because there is no language set;
				// in this case, we want to use the extension as the language
				var extension = (/\.(\w+)$/.exec(src) || [, 'none'])[1];
				language = EXTENSIONS[extension] || extension;
			}

			// set language classes
			Prism.util.setLanguage(code, language);
			Prism.util.setLanguage(pre, language);

			// preload the language
			var autoloader = Prism.plugins.autoloader;
			if (autoloader) {
				autoloader.loadLanguages(language);
			}

			// load file
			loadFile(
				src,
				function (text) {
					// mark as loaded
					pre.setAttribute(STATUS_ATTR, STATUS_LOADED);

					// handle data-range
					var range = parseRange(pre.getAttribute('data-range'));
					if (range) {
						var lines = text.split(/\r\n?|\n/g);

						// the range is one-based and inclusive on both ends
						var start = range[0];
						var end = range[1] == null ? lines.length : range[1];

						if (start < 0) { start += lines.length; }
						start = Math.max(0, Math.min(start - 1, lines.length));
						if (end < 0) { end += lines.length; }
						end = Math.max(0, Math.min(end, lines.length));

						text = lines.slice(start, end).join('\n');

						// add data-start for line numbers
						if (!pre.hasAttribute('data-start')) {
							pre.setAttribute('data-start', String(start + 1));
						}
					}

					// highlight code
					code.textContent = text;
					Prism.highlightElement(code);
				},
				function (error) {
					// mark as failed
					pre.setAttribute(STATUS_ATTR, STATUS_FAILED);

					code.textContent = error;
				}
			);
		}
	});

	Prism.plugins.fileHighlight = {
		/**
		 * Executes the File Highlight plugin for all matching `pre` elements under the given container.
		 *
		 * Note: Elements which are already loaded or currently loading will not be touched by this method.
		 *
		 * @param {ParentNode} [container=document]
		 */
		highlight: function highlight(container) {
			var elements = (container || document).querySelectorAll(SELECTOR);

			for (var i = 0, element; (element = elements[i++]);) {
				Prism.highlightElement(element);
			}
		}
	};

	var logged = false;
	/** @deprecated Use `Prism.plugins.fileHighlight.highlight` instead. */
	Prism.fileHighlight = function () {
		if (!logged) {
			console.warn('Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead.');
			logged = true;
		}
		Prism.plugins.fileHighlight.highlight.apply(this, arguments);
	};

}());


/***/ }),

/***/ 464:
/***/ ((module) => {

"use strict";
/*!
 * repeat-string <https://github.com/jonschlinkert/repeat-string>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */



/**
 * Results cache
 */

var res = '';
var cache;

/**
 * Expose `repeat`
 */

module.exports = repeat;

/**
 * Repeat the given `string` the specified `number`
 * of times.
 *
 * **Example:**
 *
 * ```js
 * var repeat = require('repeat-string');
 * repeat('A', 5);
 * //=> AAAAA
 * ```
 *
 * @param {String} `string` The string to repeat
 * @param {Number} `number` The number of times to repeat the string
 * @return {String} Repeated string
 * @api public
 */

function repeat(str, num) {
  if (typeof str !== 'string') {
    throw new TypeError('expected a string');
  }

  // cover common, quick use cases
  if (num === 1) return str;
  if (num === 2) return str + str;

  var max = str.length * num;
  if (cache !== str || typeof cache === 'undefined') {
    cache = str;
    res = '';
  } else if (res.length >= max) {
    return res.substr(0, max);
  }

  while (max > res.length && num > 1) {
    if (num & 1) {
      res += str;
    }

    num >>= 1;
    str += str;
  }

  res += str;
  res = res.substr(0, max);
  return res;
}


/***/ }),

/***/ 131:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var repeat = __webpack_require__(464);

var splitOnTags = function splitOnTags(str) {
  return str.split(/(<\/?[^>]+>)/g).filter(function (line) {
    return line.trim() !== '';
  });
};
var isTag = function isTag(str) {
  return (/<[^>!]+>/.test(str)
  );
};
var isClosingTag = function isClosingTag(str) {
  return (/<\/+[^>]+>/.test(str)
  );
};
var isSelfClosingTag = function isSelfClosingTag(str) {
  return (/<[^>]+\/>/.test(str)
  );
};
var isOpeningTag = function isOpeningTag(str) {
  return isTag(str) && !isClosingTag(str) && !isSelfClosingTag(str);
};

module.exports = function (xml) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var indentor = config.indentor,
      textNodesOnSameLine = config.textNodesOnSameLine;

  var depth = 0;
  var indicesToRemove = [];
  indentor = indentor || '    ';

  var rawResult = lexer(xml).map(function (element, i, arr) {
    var value = element.value,
        type = element.type;

    if (type === 'ClosingTag') {
      depth--;
    }

    var indentation = repeat(indentor, depth);
    var line = indentation + value;

    if (type === 'OpeningTag') {
      depth++;
    }

    if (textNodesOnSameLine) {
      // Lookbehind for [OpeningTag][Text][ClosingTag]
      var oneBefore = arr[i - 1];
      var twoBefore = arr[i - 2];

      if (type === "ClosingTag" && oneBefore.type === "Text" && twoBefore.type === "OpeningTag") {
        // collapse into a single line
        line = '' + indentation + twoBefore.value + oneBefore.value + value;
        indicesToRemove.push(i - 2, i - 1);
      }
    }

    return line;
  });

  indicesToRemove.forEach(function (idx) {
    return rawResult[idx] = null;
  });

  return rawResult.filter(function (val) {
    return !!val;
  }).join('\n');
};

function lexer(xmlStr) {
  var values = splitOnTags(xmlStr);
  return values.map(function (value) {
    return {
      value: value,
      type: getType(value)
    };
  });
}

// Helpers

function getType(str) {
  if (isClosingTag(str)) {
    return 'ClosingTag';
  }

  if (isOpeningTag(str)) {
    return 'OpeningTag';
  }

  if (isSelfClosingTag(str)) {
    return 'SelfClosingTag';
  }

  return 'Text';
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("ad56f9553958655ca951")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "rapidoc:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdaterapidoc"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__(656);
/******/ 	
/******/ })()
;