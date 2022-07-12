!function(){"use strict";function t(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function n(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */n=function(){return t};var t={},e=Object.prototype,i=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",a=r.asyncIterator||"@@asyncIterator",s=r.toStringTag||"@@toStringTag";function c(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{c({},"")}catch(T){c=function(t,n,e){return t[n]=e}}function l(t,n,e,i){var r=n&&n.prototype instanceof p?n:p,o=Object.create(r.prototype),a=new E(i||[]);return o._invoke=function(t,n,e){var i="suspendedStart";return function(r,o){if("executing"===i)throw new Error("Generator is already running");if("completed"===i){if("throw"===r)throw o;return S()}for(e.method=r,e.arg=o;;){var a=e.delegate;if(a){var s=x(a,e);if(s){if(s===u)continue;return s}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===i)throw i="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);i="executing";var c=d(t,n,e);if("normal"===c.type){if(i=e.done?"completed":"suspendedYield",c.arg===u)continue;return{value:c.arg,done:e.done}}"throw"===c.type&&(i="completed",e.method="throw",e.arg=c.arg)}}}(t,e,a),o}function d(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(T){return{type:"throw",arg:T}}}t.wrap=l;var u={};function p(){}function h(){}function f(){}var g={};c(g,o,function(){return this});var m=Object.getPrototypeOf,y=m&&m(m(j([])));y&&y!==e&&i.call(y,o)&&(g=y);var v=f.prototype=p.prototype=Object.create(g);function b(t){["next","throw","return"].forEach(function(n){c(t,n,function(t){return this._invoke(n,t)})})}function w(t,n){function e(r,o,a,s){var c=d(t[r],t,o);if("throw"!==c.type){var l=c.arg,u=l.value;return u&&"object"==typeof u&&i.call(u,"__await")?n.resolve(u.__await).then(function(t){e("next",t,a,s)},function(t){e("throw",t,a,s)}):n.resolve(u).then(function(t){l.value=t,a(l)},function(t){return e("throw",t,a,s)})}s(c.arg)}var r;this._invoke=function(t,i){function o(){return new n(function(n,r){e(t,i,n,r)})}return r=r?r.then(o,o):o()}}function x(t,n){var e=t.iterator[n.method];if(void 0===e){if(n.delegate=null,"throw"===n.method){if(t.iterator.return&&(n.method="return",n.arg=void 0,x(t,n),"throw"===n.method))return u;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var i=d(e,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,u;var r=i.arg;return r?r.done?(n[t.resultName]=r.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,u):r:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,u)}function k(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function L(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function E(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(k,this),this.reset(!0)}function j(t){if(t){var n=t[o];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var e=-1,r=function n(){for(;++e<t.length;)if(i.call(t,e))return n.value=t[e],n.done=!1,n;return n.value=void 0,n.done=!0,n};return r.next=r}}return{next:S}}function S(){return{value:void 0,done:!0}}return h.prototype=f,c(v,"constructor",f),c(f,"constructor",h),h.displayName=c(f,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===h||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,c(t,s,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},b(w.prototype),c(w.prototype,a,function(){return this}),t.AsyncIterator=w,t.async=function(n,e,i,r,o){void 0===o&&(o=Promise);var a=new w(l(n,e,i,r),o);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},b(v),c(v,s,"Generator"),c(v,o,function(){return this}),c(v,"toString",function(){return"[object Generator]"}),t.keys=function(t){var n=[];for(var e in t)n.push(e);return n.reverse(),function e(){for(;n.length;){var i=n.pop();if(i in t)return e.value=i,e.done=!1,e}return e.done=!0,e}},t.values=j,E.prototype={constructor:E,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!t)for(var n in this)"t"===n.charAt(0)&&i.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function e(e,i){return a.type="throw",a.arg=t,n.next=e,i&&(n.method="next",n.arg=void 0),!!i}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return e("end");if(o.tryLoc<=this.prev){var s=i.call(o,"catchLoc"),c=i.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return e(o.catchLoc,!0);if(this.prev<o.finallyLoc)return e(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return e(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return e(o.finallyLoc)}}}},abrupt:function(t,n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=n&&n<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=n,o?(this.method="next",this.next=o.finallyLoc,u):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),u},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),L(e),u}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var i=e.completion;if("throw"===i.type){var r=i.arg;L(e)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:j(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),u}},t}function e(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(self.webpackChunkosm_go=self.webpackChunkosm_go||[]).push([[7509],{7509:function(i,r,o){o.r(r),o.d(r,{ion_loading:function(){return y}});var a=o(8239),s=o(23150),c=o(97585),l=o(53291),d=o(66575),u=o(61269),p=o(97235),h=function(t){var n=(0,p.c)(),e=(0,p.c)(),i=(0,p.c)();return e.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),i.addElement(t.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),n.addElement(t).easing("ease-in-out").duration(200).addAnimation([e,i])},f=function(t){var n=(0,p.c)(),e=(0,p.c)(),i=(0,p.c)();return e.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(t.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),n.addElement(t).easing("ease-in-out").duration(200).addAnimation([e,i])},g=function(t){var n=(0,p.c)(),e=(0,p.c)(),i=(0,p.c)();return e.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),i.addElement(t.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),n.addElement(t).easing("ease-in-out").duration(200).addAnimation([e,i])},m=function(t){var n=(0,p.c)(),e=(0,p.c)(),i=(0,p.c)();return e.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),i.addElement(t.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),n.addElement(t).easing("ease-in-out").duration(200).addAnimation([e,i])},y=function(){function i(t){var n=this;!function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(this,i),(0,s.r)(this,t),this.didPresent=(0,s.e)(this,"ionLoadingDidPresent",7),this.willPresent=(0,s.e)(this,"ionLoadingWillPresent",7),this.willDismiss=(0,s.e)(this,"ionLoadingWillDismiss",7),this.didDismiss=(0,s.e)(this,"ionLoadingDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=function(){n.dismiss(void 0,l.B)}}var r,o,p;return r=i,(o=[{key:"connectedCallback",value:function(){(0,l.e)(this.el)}},{key:"componentWillLoad",value:function(){if(void 0===this.spinner){var t=(0,c.b)(this);this.spinner=c.c.get("loadingSpinner",c.c.get("spinner","ios"===t?"lines":"crescent"))}}},{key:"present",value:function(){var t=this;return(0,a.Z)(n().mark(function e(){return n().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,l.d)(t,"loadingEnter",h,g,void 0);case 2:t.duration>0&&(t.durationTimeout=setTimeout(function(){return t.dismiss()},t.duration+10));case 3:case"end":return n.stop()}},e)}))()}},{key:"dismiss",value:function(t,n){return this.durationTimeout&&clearTimeout(this.durationTimeout),(0,l.f)(this,t,n,"loadingLeave",f,m)}},{key:"onDidDismiss",value:function(){return(0,l.g)(this.el,"ionLoadingDidDismiss")}},{key:"onWillDismiss",value:function(){return(0,l.g)(this.el,"ionLoadingWillDismiss")}},{key:"render",value:function(){var n,e=this.message,i=this.spinner,r=this.htmlAttributes,o=(0,c.b)(this);return(0,s.h)(s.H,Object.assign({tabindex:"-1"},r,{style:{zIndex:"".concat(4e4+this.overlayIndex)},onIonBackdropTap:this.onBackdropTap,class:Object.assign(Object.assign({},(0,u.g)(this.cssClass)),(n={},t(n,o,!0),t(n,"loading-translucent",this.translucent),n))}),(0,s.h)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),(0,s.h)("div",{tabindex:"0"}),(0,s.h)("div",{class:"loading-wrapper ion-overlay-wrapper",role:"dialog"},i&&(0,s.h)("div",{class:"loading-spinner"},(0,s.h)("ion-spinner",{name:i,"aria-hidden":"true"})),e&&(0,s.h)("div",{class:"loading-content",innerHTML:(0,d.s)(e)})),(0,s.h)("div",{tabindex:"0"}))}},{key:"el",get:function(){return(0,s.i)(this)}}])&&e(r.prototype,o),p&&e(r,p),Object.defineProperty(r,"prototype",{writable:!1}),i}();y.style={ios:".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-lines.sc-ion-loading-ios,.spinner-lines-small.sc-ion-loading-ios,.spinner-bubbles.sc-ion-loading-ios,.spinner-circles.sc-ion-loading-ios,.spinner-crescent.sc-ion-loading-ios,.spinner-dots.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600, #666666);--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);color:var(--ion-text-color, #000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:bold}.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}",md:".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-lines.sc-ion-loading-md,.spinner-lines-small.sc-ion-loading-md,.spinner-bubbles.sc-ion-loading-md,.spinner-circles.sc-ion-loading-md,.spinner-crescent.sc-ion-loading-md,.spinner-dots.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50, #f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary, #3880ff);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);color:var(--ion-color-step-850, #262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;padding-left:24px;padding-right:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0, 0, 0, 0.4);box-shadow:0 16px 20px rgba(0, 0, 0, 0.4)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"}}}])}();