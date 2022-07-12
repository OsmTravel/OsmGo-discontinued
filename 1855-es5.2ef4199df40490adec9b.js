!function(){"use strict";function e(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function t(){/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t=function(){return e};var e={},r=Object.prototype,o=r.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function d(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{d({},"")}catch(A){d=function(e,t,r){return e[t]=r}}function l(e,t,r,o){var n=t&&t.prototype instanceof m?t:m,a=Object.create(n.prototype),i=new S(o||[]);return a._invoke=function(e,t,r){var o="suspendedStart";return function(n,a){if("executing"===o)throw new Error("Generator is already running");if("completed"===o){if("throw"===n)throw a;return D()}for(r.method=n,r.arg=a;;){var i=r.delegate;if(i){var s=x(i,r);if(s){if(s===h)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===o)throw o="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o="executing";var d=c(e,t,r);if("normal"===d.type){if(o=r.done?"completed":"suspendedYield",d.arg===h)continue;return{value:d.arg,done:r.done}}"throw"===d.type&&(o="completed",r.method="throw",r.arg=d.arg)}}}(e,r,i),a}function c(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(A){return{type:"throw",arg:A}}}e.wrap=l;var h={};function m(){}function p(){}function f(){}var u={};d(u,a,function(){return this});var y=Object.getPrototypeOf,v=y&&y(y(L([])));v&&v!==r&&o.call(v,a)&&(u=v);var b=f.prototype=m.prototype=Object.create(u);function g(e){["next","throw","return"].forEach(function(t){d(e,t,function(e){return this._invoke(t,e)})})}function w(e,t){function r(n,a,i,s){var d=c(e[n],e,a);if("throw"!==d.type){var l=d.arg,h=l.value;return h&&"object"==typeof h&&o.call(h,"__await")?t.resolve(h.__await).then(function(e){r("next",e,i,s)},function(e){r("throw",e,i,s)}):t.resolve(h).then(function(e){l.value=e,i(l)},function(e){return r("throw",e,i,s)})}s(d.arg)}var n;this._invoke=function(e,o){function a(){return new t(function(t,n){r(e,o,t,n)})}return n=n?n.then(a,a):a()}}function x(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,x(e,t),"throw"===t.method))return h;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var o=c(r,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,h;var n=o.arg;return n?n.done?(t[e.resultName]=n.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,h):n:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,h)}function k(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(k,this),this.reset(!0)}function L(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,n=function t(){for(;++r<e.length;)if(o.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return n.next=n}}return{next:D}}function D(){return{value:void 0,done:!0}}return p.prototype=f,d(b,"constructor",f),d(f,"constructor",p),p.displayName=d(f,s,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,d(e,s,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},g(w.prototype),d(w.prototype,i,function(){return this}),e.AsyncIterator=w,e.async=function(t,r,o,n,a){void 0===a&&(a=Promise);var i=new w(l(t,r,o,n),a);return e.isGeneratorFunction(r)?i:i.next().then(function(e){return e.done?e.value:i.next()})},g(b),d(b,s,"Generator"),d(b,a,function(){return this}),d(b,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var o=t.pop();if(o in e)return r.value=o,r.done=!1,r}return r.done=!0,r}},e.values=L,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!e)for(var t in this)"t"===t.charAt(0)&&o.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(r,o){return i.type="throw",i.arg=e,t.next=r,o&&(t.method="next",t.arg=void 0),!!o}for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n],i=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var s=o.call(a,"catchLoc"),d=o.call(a,"finallyLoc");if(s&&d){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else{if(!d)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var a=n;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),h},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var o=r.completion;if("throw"===o.type){var n=o.arg;E(r)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:L(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},e}function r(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}(self.webpackChunkosm_go=self.webpackChunkosm_go||[]).push([[1855],{71855:function(o,n,a){a.r(n),a.d(n,{ion_modal:function(){return x}});var i=a(8239),s=a(23150),d=a(97585),l=a(27069),c=a(53291),h=a(61269),m=a(64425),p=a(97235),f=a(57807),u=a(39461),y=a(71567);a(40960);var v=function(e,t){var r=(0,p.c)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),o=(0,p.c)().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(100vh)","translateY(0vh)"),n=(0,p.c)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(o);if(t){var a=window.innerWidth<768,i="ION-MODAL"===t.tagName&&void 0!==t.presentingElement,s=(0,p.c)().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"}),d=document.body;if(a){var l=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",c="translateY(".concat(i?"-10px":l,") scale(0.93)");s.afterStyles({transform:c}).beforeAddWrite(function(){return d.style.setProperty("background-color","black")}).addElement(t).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:c,borderRadius:"10px 10px 0 0"}]),n.addAnimation(s)}else if(n.addAnimation(r),i){var h="translateY(-10px) scale(".concat(i?.93:1,")");s.afterStyles({transform:h}).addElement(t.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:h}]);var m=(0,p.c)().afterStyles({transform:h}).addElement(t.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:h}]);n.addAnimation([s,m])}else o.fromTo("opacity","0","1")}else n.addAnimation(r);return n},b=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:500,o=(0,p.c)().addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),n=(0,p.c)().addElement(e.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1}).fromTo("transform","translateY(0vh)","translateY(100vh)"),a=(0,p.c)().addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(r).addAnimation(n);if(t){var i=window.innerWidth<768,s="ION-MODAL"===t.tagName&&void 0!==t.presentingElement,d=(0,p.c)().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish(function(e){1===e&&(t.style.setProperty("overflow",""),Array.from(l.querySelectorAll("ion-modal")).filter(function(e){return void 0!==e.presentingElement}).length<=1&&l.style.setProperty("background-color",""))}),l=document.body;if(i){var c=CSS.supports("width","max(0px, 1px)")?"max(30px, var(--ion-safe-area-top))":"30px",h="translateY(".concat(s?"-10px":c,") scale(0.93)");d.addElement(t).keyframes([{offset:0,filter:"contrast(0.85)",transform:h,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]),a.addAnimation(d)}else if(a.addAnimation(o),s){var m="translateY(-10px) scale(".concat(s?.93:1,")");d.addElement(t.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:m},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);var f=(0,p.c)().addElement(t.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:m},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);a.addAnimation([d,f])}else n.fromTo("opacity","1","0")}else a.addAnimation(o);return a},g=function(e){var t=(0,p.c)(),r=(0,p.c)(),o=(0,p.c)();return r.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),o.addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]),t.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([r,o])},w=function(e){var t=(0,p.c)(),r=(0,p.c)(),o=(0,p.c)(),n=e.querySelector(".modal-wrapper");return r.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),o.addElement(n).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]),t.addElement(e).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([r,o])},x=function(){function o(e){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(0,s.r)(this,e),this.didPresent=(0,s.e)(this,"ionModalDidPresent",7),this.willPresent=(0,s.e)(this,"ionModalWillPresent",7),this.willDismiss=(0,s.e)(this,"ionModalWillDismiss",7),this.didDismiss=(0,s.e)(this,"ionModalDidDismiss",7),this.gestureAnimationDismissing=!1,this.presented=!1,this.keyboardClose=!0,this.backdropDismiss=!0,this.showBackdrop=!0,this.animated=!0,this.swipeToClose=!1,this.onBackdropTap=function(){t.dismiss(void 0,c.B)},this.onDismiss=function(e){e.stopPropagation(),e.preventDefault(),t.dismiss()},this.onLifecycle=function(e){var r=t.usersElement,o=k[e.type];if(r&&o){var n=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});r.dispatchEvent(n)}}}var n,a,p;return n=o,p=[{key:"watchers",get:function(){return{swipeToClose:["swipeToCloseChanged"]}}}],(a=[{key:"swipeToCloseChanged",value:function(e){this.gesture?this.gesture.enable(e):e&&this.initSwipeToClose()}},{key:"connectedCallback",value:function(){(0,c.e)(this.el)}},{key:"present",value:function(){var e=this;return(0,i.Z)(t().mark(function r(){var o,n;return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.presented){t.next=2;break}return t.abrupt("return");case 2:if(o=e.el.querySelector(".modal-wrapper")){t.next=5;break}throw new Error("container is undefined");case 5:return n=Object.assign(Object.assign({},e.componentProps),{modal:e.el}),t.next=8,(0,l.a)(e.delegate,o,e.component,["ion-page"],n);case 8:return e.usersElement=t.sent,t.next=11,(0,m.e)(e.usersElement);case 11:return(0,s.c)(function(){return e.el.classList.add("show-modal")}),t.next=14,(0,c.d)(e,"modalEnter",v,g,e.presentingElement);case 14:e.swipeToClose&&e.initSwipeToClose();case 15:case"end":return t.stop()}},r)}))()}},{key:"initSwipeToClose",value:function(){var e=this,r=this;if("ios"===(0,d.b)(this)){var o=this.leaveAnimation||d.c.get("modalLeave",b),n=this.animation=o(this.el,this.presentingElement);this.gesture=function(e,t,r){var o=e.offsetHeight,n=!1,a=(0,u.createGesture)({el:e,gestureName:"modalSwipeToClose",gesturePriority:40,direction:"y",threshold:10,canStart:function(e){var t=e.event.target;return null===t||!t.closest||null===t.closest("ion-content, ion-footer")},onStart:function(){t.progressStart(!0,n?1:0)},onMove:function(e){var r=(0,y.k)(1e-4,e.deltaY/o,.9999);t.progressStep(r)},onEnd:function(e){var i=e.velocityY,s=(0,y.k)(1e-4,e.deltaY/o,.9999),d=(e.deltaY+1e3*i)/o>=.5,l=d?-.001:.001;d?(t.easing("cubic-bezier(0.32, 0.72, 0, 1)"),l+=(0,f.g)([0,0],[.32,.72],[0,1],[1,1],s)[0]):(t.easing("cubic-bezier(1, 0, 0.68, 0.28)"),l+=(0,f.g)([0,0],[1,0],[.68,.28],[1,1],s)[0]);var c=function(e,t){return(0,y.k)(400,e/Math.abs(1.1*t),500)}(d?s*o:(1-s)*o,i);n=d,a.enable(!1),t.onFinish(function(){d||a.enable(!0)}).progressEnd(d?1:0,l,c),d&&r()}});return a}(this.el,n,function(){e.gestureAnimationDismissing=!0,e.animation.onFinish((0,i.Z)(t().mark(function e(){return t().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.dismiss(void 0,"gesture");case 2:r.gestureAnimationDismissing=!1;case 3:case"end":return e.stop()}},e)})))}),this.gesture.enable(!0)}}},{key:"dismiss",value:function(e,r){var o=this;return(0,i.Z)(t().mark(function n(){var a,i;return t().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!o.gestureAnimationDismissing||"gesture"===r){t.next=2;break}return t.abrupt("return",!1);case 2:return a=c.h.get(o)||[],t.next=5,(0,c.f)(o,e,r,"modalLeave",b,w,o.presentingElement);case 5:if(i=t.sent,t.t0=i,!t.t0){t.next=12;break}return t.next=10,(0,l.d)(o.delegate,o.usersElement);case 10:o.animation&&o.animation.destroy(),a.forEach(function(e){return e.destroy()});case 12:return o.animation=void 0,t.abrupt("return",i);case 14:case"end":return t.stop()}},n)}))()}},{key:"onDidDismiss",value:function(){return(0,c.g)(this.el,"ionModalDidDismiss")}},{key:"onWillDismiss",value:function(){return(0,c.g)(this.el,"ionModalWillDismiss")}},{key:"render",value:function(){var t,r=this.htmlAttributes,o=(0,d.b)(this);return(0,s.h)(s.H,Object.assign({"no-router":!0,"aria-modal":"true",tabindex:"-1"},r,{style:{zIndex:"".concat(2e4+this.overlayIndex)},class:Object.assign((t={},e(t,o,!0),e(t,"modal-card",void 0!==this.presentingElement&&"ios"===o),t),(0,h.g)(this.cssClass)),onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),(0,s.h)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),"ios"===o&&(0,s.h)("div",{class:"modal-shadow"}),(0,s.h)("div",{tabindex:"0"}),(0,s.h)("div",{role:"dialog",class:"modal-wrapper ion-overlay-wrapper"}),(0,s.h)("div",{tabindex:"0"}))}},{key:"el",get:function(){return(0,s.i)(this)}}])&&r(n.prototype,a),p&&r(n,p),Object.defineProperty(n,"prototype",{writable:!1}),o}(),k={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};x.style={ios:".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios,.modal-shadow.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-ios{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){.modal-card.sc-ion-modal-ios-h{--height:calc(100% - 40px)}}.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}[dir=rtl].sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .sc-ion-modal-ios-h -no-combinator.modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl].modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios,[dir=rtl] .modal-card.sc-ion-modal-ios-h .modal-wrapper.sc-ion-modal-ios{border-top-left-radius:10px;border-top-right-radius:10px;border-bottom-right-radius:0;border-bottom-left-radius:0}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{display:none}.modal-card.sc-ion-modal-ios-h ion-backdrop.sc-ion-modal-ios{pointer-events:none}}@media screen and (min-width: 768px){.modal-card.sc-ion-modal-ios-h{--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px}.modal-card.sc-ion-modal-ios-h{--backdrop-opacity:0;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}.modal-card.sc-ion-modal-ios-h:first-of-type{--backdrop-opacity:0.18}.modal-card.sc-ion-modal-ios-h .modal-shadow.sc-ion-modal-ios{-webkit-box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1)}}",md:".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md,.modal-shadow.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow.sc-ion-modal-md{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}.sc-ion-modal-md-h:first-of-type{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--border-radius:2px}.sc-ion-modal-md-h:first-of-type{--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}"}}}])}();