!function(){"use strict";function t(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}(self.webpackChunkosm_go=self.webpackChunkosm_go||[]).push([[8810],{8810:function(r,e,n){n.r(e),n.d(e,{scopeCss:function(){return E}});var o="-shadowcsshost",c="-shadowcssslotted",s="-shadowcsscontext",a=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",i=new RegExp("("+o+a,"gim"),u=new RegExp("("+s+a,"gim"),l=new RegExp("("+c+a,"gim"),f=o+"-no-combinator",p=/-shadowcsshost-no-combinator([^\s]*)/,h=[/::shadow/g,/::content/g],g=/-shadowcsshost/gim,d=/:host/gim,m=/::slotted/gim,v=/:host-context/gim,b=/\/\*\s*[\s\S]*?\*\//g,x=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,_=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,w=/([{}])/g,y="%BLOCK%",S=function(t,r){var e=O(t),n=0;return e.escapedString.replace(_,function(){var t=arguments.length<=2?void 0:arguments[2],o="",c=arguments.length<=4?void 0:arguments[4],s="";c&&c.startsWith("{"+y)&&(o=e.blocks[n++],c=c.substring(y.length+1),s="{");var a=r({selector:t,content:o});return"".concat(arguments.length<=1?void 0:arguments[1]).concat(a.selector).concat(arguments.length<=3?void 0:arguments[3]).concat(s).concat(a.content).concat(c)})},O=function(t){for(var r=t.split(w),e=[],n=[],o=0,c=[],s=0;s<r.length;s++){var a=r[s];"}"===a&&o--,o>0?c.push(a):(c.length>0&&(n.push(c.join("")),e.push(y),c=[]),e.push(a)),"{"===a&&o++}return c.length>0&&(n.push(c.join("")),e.push(y)),{escapedString:e.join(""),blocks:n}},j=function(t,r,e){return t.replace(r,function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];if(r[2]){for(var o=r[2].split(","),c=[],s=0;s<o.length;s++){var a=o[s].trim();if(!a)break;c.push(e(f,a,r[3]))}return c.join(",")}return f+r[3]})},A=function(t,r,e){return t+r.replace(o,"")+e},W=function(t,r,e){return r.indexOf(o)>-1?A(t,r,e):t+r+e+", "+r+" "+t+e},k=function t(r,e,n,o,c){return S(r,function(r){var c=r.selector,s=r.content;return"@"!==r.selector[0]?c=function(t,r,e,n){return t.split(",").map(function(t){return n&&t.indexOf("."+n)>-1?t.trim():function(t,r){return!function(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(r).test(t)}(t,r)?function(t,r,e){for(var n,o="."+(r=r.replace(/\[is=([^\]]*)\]/g,function(t){return arguments.length<=1?void 0:arguments[1]})),c=function(t){var n=t.trim();if(!n)return"";if(t.indexOf(f)>-1)n=function(t,r,e){if(g.lastIndex=0,g.test(t)){var n=".".concat(e);return t.replace(p,function(t,r){return r.replace(/([^:]*)(:*)(.*)/,function(t,r,e,o){return r+n+e+o})}).replace(g,n+" ")}return r+" "+t}(t,r,e);else{var c=t.replace(g,"");if(c.length>0){var s=c.match(/([^:]*)(:*)(.*)/);s&&(n=s[1]+o+s[2]+s[3])}}return n},s=function(t){var r=[],e=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,function(t,n){var o="__ph-".concat(e,"__");return r.push(n),e++,o})).replace(/(:nth-[-\w]+)(\([^)]+\))/g,function(t,n,o){var c="__ph-".concat(e,"__");return r.push(o),e++,n+c}),placeholders:r}}(t),a="",i=0,u=/( |>|\+|~(?!=))\s*/g,l=!((t=s.content).indexOf(f)>-1);null!==(n=u.exec(t));){var h=n[1],d=t.slice(i,n.index).trim();l=l||d.indexOf(f)>-1,a+="".concat(l?c(d):d," ").concat(h," "),i=u.lastIndex}var m=t.substring(i);return a+=(l=l||m.indexOf(f)>-1)?c(m):m,function(t,r){return r.replace(/__ph-(\d+)__/g,function(r,e){return t[+e]})}(s.placeholders,a)}(t,r,e).trim():t.trim()}).join(", ")}(r.selector,e,n,o):(r.selector.startsWith("@media")||r.selector.startsWith("@supports")||r.selector.startsWith("@page")||r.selector.startsWith("@document"))&&(s=t(r.content,e,n,o)),{selector:c.replace(/\s{2,}/g," ").trim(),content:s}})},E=function(r,e,n){var a=e+"-h",p=e+"-s",g=function(t){return t.match(x)||[]}(r);r=function(t){return t.replace(b,"")}(r);var _=[];if(n){var w=function(t){var r="/*!@___".concat(_.length,"___*/");return _.push({placeholder:r,comment:"/*!@".concat(t.selector,"*/")}),t.selector=r+t.selector,t};r=S(r,function(t){return"@"!==t.selector[0]?w(t):((t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(t.content=S(t.content,w)),t)})}var y=function(t,r,e,n,a){var p=function(t,r){var e="."+r+" > ",n=[];return t=t.replace(l,function(){for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];if(r[2]){for(var c=r[2].trim(),s=e+c+r[3],a="",i=r[4]-1;i>=0;i--){var u=r[5][i];if("}"===u||","===u)break;a=u+a}var l=a+s,p="".concat(a.trimRight()).concat(s.trim());return l.trim()!==p.trim()&&n.push({orgSelector:l,updatedSelector:"".concat(p,", ").concat(l)}),s}return f+r[3]}),{selectors:n,cssText:t}}(t=function(t){return j(t,u,W)}(t=function(t){return j(t,i,A)}(t=function(t){return t.replace(v,s).replace(d,o).replace(m,c)}(t))),n);return t=function(t){return h.reduce(function(t,r){return t.replace(r," ")},t)}(t=p.cssText),r&&(t=k(t,r,e,n)),{cssText:(t=(t=t.replace(/-shadowcsshost-no-combinator/g,".".concat(e))).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim(),slottedSelectors:p.selectors}}(r,e,a,p);return r=[y.cssText].concat(t(g)).join("\n"),n&&_.forEach(function(t){var e=t.placeholder,n=t.comment;r=r.replace(e,n)}),y.slottedSelectors.forEach(function(t){r=r.replace(t.orgSelector,t.updatedSelector)}),r}}}])}();