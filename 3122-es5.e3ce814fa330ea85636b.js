!function(){"use strict";function t(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function e(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return t};var t={},r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",s=o.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(_){c=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),a=new L(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=x(a,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===h)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(_){return{type:"throw",arg:_}}}t.wrap=l;var h={};function f(){}function d(){}function p(){}var v={};c(v,i,function(){return this});var y=Object.getPrototypeOf,m=y&&y(y(I([])));m&&m!==r&&n.call(m,i)&&(v=m);var g=p.prototype=f.prototype=Object.create(v);function b(t){["next","throw","return"].forEach(function(e){c(t,e,function(t){return this._invoke(e,t)})})}function w(t,e){function r(o,i,a,s){var c=u(t[o],t,i);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then(function(t){r("next",t,a,s)},function(t){r("throw",t,a,s)}):e.resolve(h).then(function(t){l.value=t,a(l)},function(t){return r("throw",t,a,s)})}s(c.arg)}var o;this._invoke=function(t,n){function i(){return new e(function(e,o){r(t,n,e,o)})}return o=o?o.then(i,i):i()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function I(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:T}}function T(){return{value:void 0,done:!0}}return d.prototype=p,c(g,"constructor",p),c(p,"constructor",d),d.displayName=c(p,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,c(t,s,"GeneratorFunction")),t.prototype=Object.create(g),t},t.awrap=function(t){return{__await:t}},b(w.prototype),c(w.prototype,a,function(){return this}),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},b(g),c(g,s,"Generator"),c(g,i,function(){return this}),c(g,"toString",function(){return"[object Generator]"}),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=I,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),k(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:I(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}(self.webpackChunkosm_go=self.webpackChunkosm_go||[]).push([[3122],{83122:function(n,i,a){a.r(i),a.d(i,{ion_reorder:function(){return h},ion_reorder_group:function(){return f}});var s=a(8239),c=a(23150),l=a(97585),u=a(52954),h=function(){function t(e){r(this,t),(0,c.r)(this,e)}return o(t,[{key:"onClick",value:function(t){var e=this.el.closest("ion-reorder-group");t.preventDefault(),(!e||!e.disabled)&&t.stopImmediatePropagation()}},{key:"render",value:function(){var t=(0,l.b)(this);return(0,c.h)(c.H,{class:t},(0,c.h)("slot",null,(0,c.h)("ion-icon",{name:"ios"===t?"reorder-three-outline":"reorder-two-sharp",lazy:!1,class:"reorder-icon",part:"icon"})))}},{key:"el",get:function(){return(0,c.i)(this)}}]),t}();h.style={ios:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:34px;opacity:0.4}",md:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:31px;opacity:0.3}"};var f=function(){function n(t){r(this,n),(0,c.r)(this,t),this.ionItemReorder=(0,c.e)(this,"ionItemReorder",7),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0}return o(n,[{key:"disabledChanged",value:function(){this.gesture&&this.gesture.enable(!this.disabled)}},{key:"connectedCallback",value:function(){var t=this;return(0,s.Z)(e().mark(function r(){var n;return e().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.el.closest("ion-content"),e.t0=n,!e.t0){e.next=6;break}return e.next=5,n.getScrollElement();case 5:t.scrollEl=e.sent;case 6:return e.next=8,Promise.resolve().then(a.bind(a,39461));case 8:t.gesture=e.sent.createGesture({el:t.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:function(e){return t.canStart(e)},onStart:function(e){return t.onStart(e)},onMove:function(e){return t.onMove(e)},onEnd:function(){return t.onEnd()}}),t.disabledChanged();case 10:case"end":return e.stop()}},r)}))()}},{key:"disconnectedCallback",value:function(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}},{key:"complete",value:function(t){return Promise.resolve(this.completeSync(t))}},{key:"canStart",value:function(t){if(this.selectedItemEl||0!==this.state)return!1;var e=t.event.target.closest("ion-reorder");if(!e)return!1;var r=p(e,this.el);return!!r&&(t.data=r,!0)}},{key:"onStart",value:function(t){t.event.preventDefault();var e=this.selectedItemEl=t.data,r=this.cachedHeights;r.length=0;var n=this.el,o=n.children;if(o&&0!==o.length){for(var i=0,a=0;a<o.length;a++){var s=o[a];i+=s.offsetHeight,r.push(i),s.$ionIndex=a}var c=n.getBoundingClientRect();if(this.containerTop=c.top,this.containerBottom=c.bottom,this.scrollEl){var l=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=l.top+v,this.scrollElBottom=l.bottom-v}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=d(e),this.selectedItemHeight=e.offsetHeight,this.state=1,e.classList.add(m),(0,u.a)()}}},{key:"onMove",value:function(t){var e=this.selectedItemEl;if(e){var r=this.autoscroll(t.currentY),n=this.containerTop-r,o=Math.max(n,Math.min(t.currentY,this.containerBottom-r)),i=r+o-t.startY,a=this.itemIndexForTop(o-n);if(a!==this.lastToIndex){var s=d(e);this.lastToIndex=a,(0,u.b)(),this.reorderMove(s,a)}e.style.transform="translateY(".concat(i,"px)")}}},{key:"onEnd",value:function(){var t=this.selectedItemEl;if(this.state=2,t){var e=this.lastToIndex,r=d(t);e===r?this.completeSync():this.ionItemReorder.emit({from:r,to:e,complete:this.completeSync.bind(this)}),(0,u.h)()}else this.state=0}},{key:"completeSync",value:function(t){var e=this.selectedItemEl;if(e&&2===this.state){var r=this.el.children,n=r.length,o=this.lastToIndex,i=d(e);o===i||void 0!==t&&!0!==t||this.el.insertBefore(e,i<o?r[o+1]:r[o]),Array.isArray(t)&&(t=g(t,i,o));for(var a=0;a<n;a++)r[a].style.transform="";e.style.transition="",e.classList.remove(m),this.selectedItemEl=void 0,this.state=0}return t}},{key:"itemIndexForTop",value:function(t){for(var e=this.cachedHeights,r=0;r<e.length;r++)if(e[r]>t)return r;return e.length-1}},{key:"reorderMove",value:function(t,e){for(var r=this.selectedItemHeight,n=this.el.children,o=0;o<n.length;o++){var i="";o>t&&o<=e?i="translateY(".concat(-r,"px)"):o<t&&o>=e&&(i="translateY(".concat(r,"px)")),n[o].style.transform=i}}},{key:"autoscroll",value:function(t){if(!this.scrollEl)return 0;var e=0;return t<this.scrollElTop?e=-y:t>this.scrollElBottom&&(e=y),0!==e&&this.scrollEl.scrollBy(0,e),this.scrollEl.scrollTop-this.scrollElInitial}},{key:"render",value:function(){var e,r=(0,l.b)(this);return(0,c.h)(c.H,{class:(e={},t(e,r,!0),t(e,"reorder-enabled",!this.disabled),t(e,"reorder-list-active",0!==this.state),e)})}},{key:"el",get:function(){return(0,c.i)(this)}}],[{key:"watchers",get:function(){return{disabled:["disabledChanged"]}}}]),n}(),d=function(t){return t.$ionIndex},p=function(t,e){for(var r;t;){if((r=t.parentElement)===e)return t;t=r}},v=60,y=10,m="reorder-selected",g=function(t,e,r){var n=t[e];return t.splice(e,1),t.splice(r,0,n),t.slice()};f.style=".reorder-list-active>*{-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none !important;transition:none !important;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.4);box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}"}}])}();