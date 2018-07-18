/*! vue-ydui v1.0.9 by YDCSS (c) 2017 Licensed MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.ydui=e():t.ydui=e()}(this,function(){return function(t){function e(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return t[n].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var o={};return e.m=t,e.c=o,e.p="/dist/",e(0)}({0:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Popup=void 0;var i=o(109),r=n(i);e.Popup=r.default},1:function(t,e){t.exports=function(t,e,o,n){var i,r=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(i=t,r=t.default);var a="function"==typeof r?r.options:r;if(e&&(a.render=e.render,a.staticRenderFns=e.staticRenderFns),o&&(a._scopeId=o),n){var l=a.computed||(a.computed={});Object.keys(n).forEach(function(t){var e=n[t];l[t]=function(){return e}})}return{esModule:i,exports:r,options:a}}},2:function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var o=this[e];o[2]?t.push("@media "+o[2]+"{"+o[1]+"}"):t.push(o[1])}return t.join("")},t.i=function(e,o){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(n[r]=!0)}for(i=0;i<e.length;i++){var s=e[i];"number"==typeof s[0]&&n[s[0]]||(o&&!s[2]?s[2]=o:o&&(s[2]="("+s[2]+") and ("+o+")"),t.push(s))}},t}},3:function(t,e,o){function n(t){for(var e=0;e<t.length;e++){var o=t[e],n=c[o.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](o.parts[i]);for(;i<o.parts.length;i++)n.parts.push(r(o.parts[i]));n.parts.length>o.parts.length&&(n.parts.length=o.parts.length)}else{for(var s=[],i=0;i<o.parts.length;i++)s.push(r(o.parts[i]));c[o.id]={id:o.id,refs:1,parts:s}}}}function i(){var t=document.createElement("style");return t.type="text/css",f.appendChild(t),t}function r(t){var e,o,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(h)return m;n.parentNode.removeChild(n)}if(v){var r=d++;n=p||(p=i()),e=s.bind(null,n,r,!1),o=s.bind(null,n,r,!0)}else n=i(),e=a.bind(null,n),o=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else o()}}function s(t,e,o,n){var i=o?"":n.css;if(t.styleSheet)t.styleSheet.cssText=g(e,i);else{var r=document.createTextNode(i),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(r,s[e]):t.appendChild(r)}}function a(t,e){var o=e.css,n=e.media,i=e.sourceMap;if(n&&t.setAttribute("media",n),i&&(o+="\n/*# sourceURL="+i.sources[0]+" */",o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),t.styleSheet)t.styleSheet.cssText=o;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(o))}}var l="undefined"!=typeof document,u=o(4),c={},f=l&&(document.head||document.getElementsByTagName("head")[0]),p=null,d=0,h=!1,m=function(){},v="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,o){h=o;var i=u(t,e);return n(i),function(e){for(var o=[],r=0;r<i.length;r++){var s=i[r],a=c[s.id];a.refs--,o.push(a)}e?(i=u(t,e),n(i)):i=[];for(var r=0;r<o.length;r++){var a=o[r];if(0===a.refs){for(var l=0;l<a.parts.length;l++)a.parts[l]();delete c[a.id]}}}};var g=function(){var t=[];return function(e,o){return t[e]=o,t.filter(Boolean).join("\n")}}()},4:function(t,e){t.exports=function(t,e){for(var o=[],n={},i=0;i<e.length;i++){var r=e[i],s=r[0],a=r[1],l=r[2],u=r[3],c={id:t+":"+i,css:a,media:l,sourceMap:u};n[s]?n[s].parts.push(c):o.push(n[s]={id:s,parts:[c]})}return o}},5:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){var t=function(t){t.preventDefault(),t.stopPropagation()},e=!1;return{lock:function(o){e||(e=!0,(o||document).addEventListener("touchmove",t))},unlock:function(o){e=!1,(o||document).removeEventListener("touchmove",t)}}}(),n=!!(window.navigator&&window.navigator.userAgent||"").match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),i=function(t){var e=/^#([a-fA-F0-9]){3}(([a-fA-F0-9]){3})?$/,o=/^[rR][gG][bB][aA]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){3}\s*(\.|\d+\.)?\d+\s*\)$/,n=/^[rR][gG][bB]\(\s*((25[0-5]|2[0-4]\d|1?\d{1,2})\s*,\s*){2}(25[0-5]|2[0-4]\d|1?\d{1,2})\s*\)$/;return e.test(t)||o.test(t)||n.test(t)},r=function(t){for(var e=t;e&&"HTML"!==e.tagName&&"BODY"!==e.tagName&&1===e.nodeType;){var o=document.defaultView.getComputedStyle(e).overflowY;if("scroll"===o||"auto"===o)return e;e=e.parentNode}return window},s=function(t,e){var o=t===window?document.body.offsetHeight:t.offsetHeight,n=t===window?0:t.getBoundingClientRect().top,i=e.getBoundingClientRect().top-n,r=i+e.offsetHeight;return i>=0&&i<o||r>0&&r<=o},a=function(t,e){return e=e||"",!(0===e.replace(/\s/g,"").length||!t)&&new RegExp(" "+e+" ").test(" "+t.className+" ")},l=function(t,e){a(t,e)||(t.className=""===t.className?e:t.className+" "+e)},u=function(t,e){if(a(t,e)){for(var o=" "+t.className.replace(/[\t\r\n]/g,"")+" ";o.indexOf(" "+e+" ")>=0;)o=o.replace(" "+e+" "," ");t.className=o.replace(/^\s+|\s+$/g,"")}},c=function(t){function e(o,n,i){if(o!==n){var r=o+i>n?n:o+i;o>n&&(r=o-i<n?n:o-i),t===window?window.scrollTo(r,r):t.scrollTop=r,window.requestAnimationFrame(function(){return e(r,n,i)})}}var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500;window.requestAnimationFrame||(window.requestAnimationFrame=window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,1e3/60)});var r=Math.abs(o-n),s=Math.ceil(r/i*50);e(o,n,s)};e.pageScroll=o,e.isIOS=n,e.isColor=i,e.getScrollview=r,e.checkInview=s,e.addClass=l,e.removeClass=u,e.scrollTop=c},8:function(t,e,o){e=t.exports=o(2)(),e.push([t.id,".yd-mask{position:fixed;bottom:0;right:0;left:0;top:0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;pointer-events:none;-webkit-transition:opacity .2s ease-in;transition:opacity .2s ease-in;opacity:0}",""])},9:function(t,e,o){o(11);var n=o(1)(o(12),o(10),null,null);t.exports=n.exports},10:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"yd-mask",style:t.styles},[t._t("default")],2)},staticRenderFns:[]}},11:function(t,e,o){var n=o(8);"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);o(3)("ea00d7fc",n,!0)},12:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=o(5);e.default={name:"yd-mask",data:function(){return{show:this.value}},props:{value:{type:Boolean,default:!1},bgcolor:{type:String,default:"#000"},zindex:{default:1500},opacity:{default:.4},animated:{type:Boolean,default:!0}},watch:{value:function(t){var e=this;this.show=t,n.isIOS&&(t?(0,n.addClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug"):setTimeout(function(){(0,n.removeClass)(e.scrollView,"g-fix-ios-overflow-scrolling-bug")},200))}},computed:{styles:function(){var t={"z-index":this.zindex,"background-color":this.bgcolor};return this.show&&(t.opacity=this.opacity,t["pointer-events"]="auto"),t}},mounted:function(){this.scrollView=(0,n.getScrollview)(this.$el)},destroyed:function(){n.isIOS&&(0,n.removeClass)(this.scrollView,"g-fix-ios-overflow-scrolling-bug")}}},66:function(t,e,o){e=t.exports=o(2)(),e.push([t.id,".yd-popup{position:fixed;background-color:#fff;z-index:1501;-webkit-transition:-webkit-transform .2s;transition:-webkit-transform .2s;transition:transform .2s;transition:transform .2s,-webkit-transform .2s;pointer-events:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.yd-popup-content{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;position:relative;overflow-y:auto;-webkit-overflow-scrolling:touch}.yd-popup-left{-webkit-transform:translate(-100%);transform:translate(-100%);left:0;top:0;height:100%}.yd-popup-right{-webkit-transform:translate(100%);transform:translate(100%);right:0;top:0;height:100%}.yd-popup-bottom{-webkit-transform:translateY(100%);transform:translateY(100%);right:0;bottom:0}.yd-popup-show{pointer-events:auto;-webkit-transform:translate(0);transform:translate(0)}.yd-popup-center{background-color:#fff;z-index:1502;position:fixed;top:50%;left:50%;opacity:0;-webkit-transform:translate(-50%,-50%) scale(.95);transform:translate(-50%,-50%) scale(.95);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;-webkit-transition:-webkit-transform .1s;transition:-webkit-transform .1s;transition:transform .1s;transition:transform .1s,-webkit-transform .1s;border-radius:2px}.yd-popup-center,.yd-popup-center *{pointer-events:none}.yd-popup-center.yd-popup-show{opacity:1;-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);pointer-events:auto}.yd-popup-center.yd-popup-show *{pointer-events:auto}",""])},109:function(t,e,o){o(228);var n=o(1)(o(273),o(192),null,null);t.exports=n.exports},192:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("yd-mask",{nativeOn:{click:function(e){t.close(e)}},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}}),t._v(" "),o("div",{ref:"box",class:t.classes,style:t.styles},[t.$slots.top&&"center"!=t.position?o("div",{ref:"top"},[t._t("top")],2):t._e(),t._v(" "),o("div",{staticClass:"yd-popup-content"},[o("div",{ref:"content"},[t._t("default")],2)]),t._v(" "),t.$slots.bottom&&"center"!=t.position?o("div",{ref:"bottom"},[t._t("bottom")],2):t._e()])],1)},staticRenderFns:[]}},228:function(t,e,o){var n=o(66);"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);o(3)("5ad9d937",n,!0)},273:function(t,e,o){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(5),r=o(9),s=n(r);e.default={name:"yd-popup",components:{"yd-mask":s.default},data:function(){return{show:this.value}},props:{position:{validator:function(t){return["bottom","center","left","right"].indexOf(t)>-1},default:"bottom"},height:{type:String,default:"50%"},width:{type:String,default:"50%"},value:{type:Boolean},closeOnMasker:{type:Boolean,default:!0}},watch:{value:function(t){if(i.isIOS){var e=this.$refs,o=this.$slots.top&&"center"!==this.position?e.top.offsetHeight:0,n=this.$slots.bottom&&"center"!==this.position?e.bottom.offsetHeight:0,r=o+e.content.offsetHeight+n;t?(i.pageScroll.lock(),r>e.box.offsetHeight&&e.box.addEventListener("touchmove",this.stopPropagation)):(i.pageScroll.unlock(),r>e.box.offsetHeight&&e.box.removeEventListener("touchmove",this.stopPropagation))}this.show=t}},computed:{classes:function(){return("center"===this.position?"yd-popup-center ":"yd-popup yd-popup-"+this.position)+(this.show?" yd-popup-show ":"")},styles:function(){return"left"===this.position||"right"===this.position?{width:this.width}:"bottom"===this.position?{width:"100%",height:this.height}:{width:this.width}}},methods:{stopPropagation:function(t){t.stopPropagation()},close:function(){this.closeOnMasker&&(this.show=!1,this.$emit("input",!1))}},destroyed:function(){i.pageScroll.unlock()}}}})});