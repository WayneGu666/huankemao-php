(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7eb60e12","chunk-6e9e04dc"],{"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n("d3b7");function r(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(l){return void n(l)}c.done?e(u):Promise.resolve(u).then(r,o)}function o(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function c(t){r(a,o,i,c,u,"next",t)}function u(t){r(a,o,i,c,u,"throw",t)}c(void 0)}))}}},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(B){u=function(t,e,n){return t[e]=n}}function l(t,e,n,r){var o=e&&e.prototype instanceof g?e:g,i=Object.create(o.prototype),a=new T(r||[]);return i._invoke=S(t,n,a),i}function s(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(B){return{type:"throw",arg:B}}}t.wrap=l;var f="suspendedStart",h="suspendedYield",p="executing",y="completed",d={};function g(){}function v(){}function m(){}var b={};b[i]=function(){return this};var w=Object.getPrototypeOf,E=w&&w(w(j([])));E&&E!==n&&r.call(E,i)&&(b=E);var A=m.prototype=g.prototype=Object.create(b);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"===typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var o;function i(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function S(t,e,n){var r=f;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===y){if("throw"===o)throw i;return H()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var c=L(a,n);if(c){if(c===d)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=y,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var u=s(t,e,n);if("normal"===u.type){if(r=n.done?y:h,u.arg===d)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r=y,n.method="throw",n.arg=u.arg)}}}function L(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method))return d;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,d;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,d):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,d)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function j(t){if(t){var n=t[i];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function n(){while(++o<t.length)if(r.call(t,o))return n.value=t[o],n.done=!1,n;return n.value=e,n.done=!0,n};return a.next=a}}return{next:H}}function H(){return{value:e,done:!0}}return v.prototype=A.constructor=m,m.constructor=v,v.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(A),t},t.awrap=function(t){return{__await:t}},x(k.prototype),k.prototype[a]=function(){return this},t.AsyncIterator=k,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new k(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(A),u(A,c,"Generator"),A[i]=function(){return this},A.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=j,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function o(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),C(n),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:j(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=r}catch(o){Function("r","regeneratorRuntime = r")(r)}},"9d64":function(t,e){t.exports="data:image/png;base64,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"},b311:function(t,e,n){
/*!
 * clipboard.js v2.0.6
 * https://clipboardjs.com/
 * 
 * Licensed MIT © Zeno Rocha
 */
(function(e,n){t.exports=n()})(0,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e){function n(t){var e;if("SELECT"===t.nodeName)t.focus(),e=t.value;else if("INPUT"===t.nodeName||"TEXTAREA"===t.nodeName){var n=t.hasAttribute("readonly");n||t.setAttribute("readonly",""),t.select(),t.setSelectionRange(0,t.value.length),n||t.removeAttribute("readonly"),e=t.value}else{t.hasAttribute("contenteditable")&&t.focus();var r=window.getSelection(),o=document.createRange();o.selectNodeContents(t),r.removeAllRanges(),r.addRange(o),e=r.toString()}return e}t.exports=n},function(t,e){function n(){}n.prototype={on:function(t,e,n){var r=this.e||(this.e={});return(r[t]||(r[t]=[])).push({fn:e,ctx:n}),this},once:function(t,e,n){var r=this;function o(){r.off(t,o),e.apply(n,arguments)}return o._=e,this.on(t,o,n)},emit:function(t){var e=[].slice.call(arguments,1),n=((this.e||(this.e={}))[t]||[]).slice(),r=0,o=n.length;for(r;r<o;r++)n[r].fn.apply(n[r].ctx,e);return this},off:function(t,e){var n=this.e||(this.e={}),r=n[t],o=[];if(r&&e)for(var i=0,a=r.length;i<a;i++)r[i].fn!==e&&r[i].fn._!==e&&o.push(r[i]);return o.length?n[t]=o:delete n[t],this}},t.exports=n,t.exports.TinyEmitter=n},function(t,e,n){var r=n(3),o=n(4);function i(t,e,n){if(!t&&!e&&!n)throw new Error("Missing required arguments");if(!r.string(e))throw new TypeError("Second argument must be a String");if(!r.fn(n))throw new TypeError("Third argument must be a Function");if(r.node(t))return a(t,e,n);if(r.nodeList(t))return c(t,e,n);if(r.string(t))return u(t,e,n);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}function a(t,e,n){return t.addEventListener(e,n),{destroy:function(){t.removeEventListener(e,n)}}}function c(t,e,n){return Array.prototype.forEach.call(t,(function(t){t.addEventListener(e,n)})),{destroy:function(){Array.prototype.forEach.call(t,(function(t){t.removeEventListener(e,n)}))}}}function u(t,e,n){return o(document.body,t,e,n)}t.exports=i},function(t,e){e.node=function(t){return void 0!==t&&t instanceof HTMLElement&&1===t.nodeType},e.nodeList=function(t){var n=Object.prototype.toString.call(t);return void 0!==t&&("[object NodeList]"===n||"[object HTMLCollection]"===n)&&"length"in t&&(0===t.length||e.node(t[0]))},e.string=function(t){return"string"===typeof t||t instanceof String},e.fn=function(t){var e=Object.prototype.toString.call(t);return"[object Function]"===e}},function(t,e,n){var r=n(5);function o(t,e,n,r,o){var i=a.apply(this,arguments);return t.addEventListener(n,i,o),{destroy:function(){t.removeEventListener(n,i,o)}}}function i(t,e,n,r,i){return"function"===typeof t.addEventListener?o.apply(null,arguments):"function"===typeof n?o.bind(null,document).apply(null,arguments):("string"===typeof t&&(t=document.querySelectorAll(t)),Array.prototype.map.call(t,(function(t){return o(t,e,n,r,i)})))}function a(t,e,n,o){return function(n){n.delegateTarget=r(n.target,e),n.delegateTarget&&o.call(t,n)}}t.exports=i},function(t,e){var n=9;if("undefined"!==typeof Element&&!Element.prototype.matches){var r=Element.prototype;r.matches=r.matchesSelector||r.mozMatchesSelector||r.msMatchesSelector||r.oMatchesSelector||r.webkitMatchesSelector}function o(t,e){while(t&&t.nodeType!==n){if("function"===typeof t.matches&&t.matches(e))return t;t=t.parentNode}}t.exports=o},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function c(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var u=function(){function t(e){c(this,t),this.resolveOptions(e),this.initSelection()}return a(t,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action=t.action,this.container=t.container,this.emitter=t.emitter,this.target=t.target,this.text=t.text,this.trigger=t.trigger,this.selectedText=""}},{key:"initSelection",value:function(){this.text?this.selectFake():this.target&&this.selectTarget()}},{key:"selectFake",value:function(){var t=this,e="rtl"==document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=function(){return t.removeFake()},this.fakeHandler=this.container.addEventListener("click",this.fakeHandlerCallback)||!0,this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="absolute",this.fakeElem.style[e?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;this.fakeElem.style.top=n+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=this.text,this.container.appendChild(this.fakeElem),this.selectedText=o()(this.fakeElem),this.copyText()}},{key:"removeFake",value:function(){this.fakeHandler&&(this.container.removeEventListener("click",this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(this.container.removeChild(this.fakeElem),this.fakeElem=null)}},{key:"selectTarget",value:function(){this.selectedText=o()(this.target),this.copyText()}},{key:"copyText",value:function(){var t=void 0;try{t=document.execCommand(this.action)}catch(e){t=!1}this.handleResult(t)}},{key:"handleResult",value:function(t){this.emitter.emit(t?"success":"error",{action:this.action,text:this.selectedText,trigger:this.trigger,clearSelection:this.clearSelection.bind(this)})}},{key:"clearSelection",value:function(){this.trigger&&this.trigger.focus(),document.activeElement.blur(),window.getSelection().removeAllRanges()}},{key:"destroy",value:function(){this.removeFake()}},{key:"action",set:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"copy";if(this._action=t,"copy"!==this._action&&"cut"!==this._action)throw new Error('Invalid "action" value, use either "copy" or "cut"')},get:function(){return this._action}},{key:"target",set:function(t){if(void 0!==t){if(!t||"object"!==("undefined"===typeof t?"undefined":i(t))||1!==t.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===this.action&&t.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===this.action&&(t.hasAttribute("readonly")||t.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes');this._target=t}},get:function(){return this._target}}]),t}(),l=u,s=n(1),f=n.n(s),h=n(2),p=n.n(h),y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function g(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function v(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==typeof e&&"function"!==typeof e?t:e}function m(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var b=function(t){function e(t,n){g(this,e);var r=v(this,(e.__proto__||Object.getPrototypeOf(e)).call(this));return r.resolveOptions(n),r.listenClick(t),r}return m(e,t),d(e,[{key:"resolveOptions",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"===typeof t.action?t.action:this.defaultAction,this.target="function"===typeof t.target?t.target:this.defaultTarget,this.text="function"===typeof t.text?t.text:this.defaultText,this.container="object"===y(t.container)?t.container:document.body}},{key:"listenClick",value:function(t){var e=this;this.listener=p()(t,"click",(function(t){return e.onClick(t)}))}},{key:"onClick",value:function(t){var e=t.delegateTarget||t.currentTarget;this.clipboardAction&&(this.clipboardAction=null),this.clipboardAction=new l({action:this.action(e),target:this.target(e),text:this.text(e),container:this.container,trigger:e,emitter:this})}},{key:"defaultAction",value:function(t){return w("action",t)}},{key:"defaultTarget",value:function(t){var e=w("target",t);if(e)return document.querySelector(e)}},{key:"defaultText",value:function(t){return w("text",t)}},{key:"destroy",value:function(){this.listener.destroy(),this.clipboardAction&&(this.clipboardAction.destroy(),this.clipboardAction=null)}}],[{key:"isSupported",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],e="string"===typeof t?[t]:t,n=!!document.queryCommandSupported;return e.forEach((function(t){n=n&&!!document.queryCommandSupported(t)})),n}}]),e}(f.a);function w(t,e){var n="data-clipboard-"+t;if(e.hasAttribute(n))return e.getAttribute(n)}e["default"]=b}])["default"]}))},d81d:function(t,e,n){"use strict";var r=n("23e7"),o=n("b727").map,i=n("1dde"),a=n("ae40"),c=i("map"),u=a("map");r({target:"Array",proto:!0,forced:!c||!u},{map:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},dfdd:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAABi0lEQVQ4T5WSsWvTURDHPxeS/gHaQaGb3UJBcy9mdnCxaKGTLmKlU9UOXTsVdO1g0dGCS8VBURC6SAcHCXn3S7Bj6ybo0Mk1kJMrv4RfKoJ9y3vv7j7v7t19hcpS1VngCXAHuFK6vgMfgR0zOxmHy/jQarWWReQVcAy8Bg5L3wJwH5h394dFUbwL+ylYQnsispFzfgl4tZKISymtufu2u98LWMryjkVkM+f8IoBOpzM3HA6XarXajLu/MbOfYU8pPXL3Z5E9wC0RuZVzvh6ZVPUy8E1E9oGhu9+u1+vXut3uj8isqj3gUxz6wK6ZPS9ffezuq2Z2Ne6q+gV4a2Y75X0dWAnwN7BkZgfhaDabFxqNxsXBYHCkqi3g82g0utnv93MJ3gA+/AVWujwvIl9FZD3nvDe2q+oEnCp1HJBSeuruc2b24MysJ6VuAYtm1q6OQVUXgRMz61bAqeaEWqbGUf5lLXYzi7merqlx/EsA7Xb7Uvh6vd6vMwK4WxTF+/NKbiWgieQqHftvkf8BP0LHg9yQhXgAAAAASUVORK5CYII="}}]);
//# sourceMappingURL=chunk-7eb60e12.e60b6685.js.map