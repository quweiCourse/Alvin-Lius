webpackJsonp([0],{"78tu":function(t,e,n){!function(e,n){t.exports=n()}("undefined"!=typeof self&&self,function(){return function(t){function e(i){if(n[i])return n[i].exports;var s=n[i]={i:i,l:!1,exports:{}};return t[i].call(s.exports,s,s.exports,e),s.l=!0,s.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="C:\\github\\vue-drr\\dist",e(e.s=1)}([function(t,e,n){"use strict";e.a={replace:!0,name:"vue-drr",props:{active:{type:Boolean,default:!1},draggable:{type:Boolean,default:!0},resizable:{type:Boolean,default:!0},rotatable:{type:Boolean,default:!0},w:{type:Number,default:200,validator:function(t){return t>0}},h:{type:Number,default:200,validator:function(t){return t>0}},minw:{type:Number,default:50,validator:function(t){return t>0}},minh:{type:Number,default:50,validator:function(t){return t>0}},angle:{type:Number,default:0,validator:function(t){return"number"==typeof t}},x:{type:Number,default:0,validator:function(t){return"number"==typeof t}},y:{type:Number,default:0,validator:function(t){return"number"==typeof t}},handles:{type:Array,default:function(){return["n","e","s","w","nw","ne","se","sw"]}},axis:{type:String,default:"both",validator:function(t){return-1!==["x","y","both"].indexOf(t)}},grid:{type:Array,default:function(){return[1,1]}},parent:{type:Boolean,default:!1}},created:function(){this.parentX=0,this.parentW=9999,this.parentY=0,this.parentH=9999,this.mouseX=0,this.mouseY=0,this.lastMouseX=0,this.lastMouseY=0,this.mouseOffX=0,this.mouseOffY=0,this.elmX=0,this.elmY=0,this.elmW=0,this.elmH=0},mounted:function(){document.documentElement.addEventListener("mousemove",this.handleMove,!0),document.documentElement.addEventListener("mousedown",this.deselect,!0),document.documentElement.addEventListener("mouseup",this.handleUp,!0),this.elmX=parseInt(this.$el.style.left),this.elmY=parseInt(this.$el.style.top),this.elmW=this.$el.offsetWidth||this.$el.clientWidth,this.elmH=this.$el.offsetHeight||this.$el.clientHeight,this.reviewDimensions()},beforeDestroy:function(){document.documentElement.removeEventListener("mousemove",this.handleMove,!0),document.documentElement.removeEventListener("mousedown",this.deselect,!0),document.documentElement.removeEventListener("mouseup",this.handleUp,!0)},data:function(){return{top:this.y,left:this.x,width:this.w,height:this.h,rotateAngle:this.angle,resizing:!1,dragging:!1,rotating:!1,enabled:this.active,handle:null}},methods:{reviewDimensions:function(){if(this.minw>this.w&&(this.width=this.minw),this.minh>this.h&&(this.height=this.minh),this.parent){var t=parseInt(this.$el.parentNode.clientWidth,10),e=parseInt(this.$el.parentNode.clientHeight,10);this.parentW=t,this.parentH=e,this.w>this.parentW&&(this.width=t),this.h>this.parentH&&(this.height=e),this.x+this.w>this.parentW&&(this.width=t-this.x),this.y+this.h>this.parentH&&(this.height=e-this.y),this.elmW=this.width,this.elmH=this.height}},elmDown:function(t){var e=t.target||t.srcElement;this.$el.contains(e)&&(this.reviewDimensions(),this.enabled||(this.enabled=!0,this.$emit("activated"),this.$emit("update:active",!0)),this.draggable&&(this.dragging=!0))},deselect:function(t){t.preventDefault(),this.mouseX=t.pageX||t.clientX+document.documentElement.scrollLeft,this.mouseY=t.pageY||t.clientY+document.documentElement.scrollTop,this.lastMouseX=this.mouseX,this.lastMouseY=this.mouseY;var e=t.target||t.srcElement,n=new RegExp("z-handle-([trmbl]{2})","");this.$el.contains(e)||n.test(e.className)||this.enabled&&(this.enabled=!1,this.$emit("deactivated"),this.$emit("update:active",!1))},handleResizeStart:function(t,e){this.handle=t,e.stopPropagation&&e.stopPropagation(),e.preventDefault&&e.preventDefault(),this.resizing=!0},getOrigin:function(){var t=this.$el.getBoundingClientRect();return{x:(t.left+t.right)/2,y:(t.bottom+t.top)/2}},handleMove:function(t){var e=this.lastMouseX,n=this.lastMouseY;this.mouseX=t.pageX||t.clientX+document.documentElement.scrollLeft,this.mouseY=t.pageY||t.clientY+document.documentElement.scrollTop;var i=this.mouseX-this.lastMouseX+this.mouseOffX,s=this.mouseY-this.lastMouseY+this.mouseOffY;this.mouseOffX=this.mouseOffY=0,this.lastMouseX=this.mouseX,this.lastMouseY=this.mouseY;var r=i,o=s;if(this.resizing)this.handle.indexOf("n")>=0&&(this.elmH-o<this.minh?this.mouseOffY=o-(s=this.elmH-this.minh):this.elmY+o<this.parentY&&(this.mouseOffY=o-(s=this.parentY-this.elmY)),this.elmY+=s,this.elmH-=s),this.handle.indexOf("s")>=0&&(this.elmH+o<this.minh?this.mouseOffY=o-(s=this.minh-this.elmH):this.elmY+this.elmH+o>this.parentH&&(this.mouseOffY=o-(s=this.parentH-this.elmY-this.elmH)),this.elmH+=s),this.handle.indexOf("w")>=0&&(this.elmW-r<this.minw?this.mouseOffX=r-(i=this.elmW-this.minw):this.elmX+r<this.parentX&&(this.mouseOffX=r-(i=this.parentX-this.elmX)),this.elmX+=i,this.elmW-=i),this.handle.indexOf("e")>=0&&(this.elmW+r<this.minw?this.mouseOffX=r-(i=this.minw-this.elmW):this.elmX+this.elmW+r>this.parentW&&(this.mouseOffX=r-(i=this.parentW-this.elmX-this.elmW)),this.elmW+=i),this.left=Math.round(this.elmX/this.grid[0])*this.grid[0],this.top=Math.round(this.elmY/this.grid[1])*this.grid[1],this.width=Math.round(this.elmW/this.grid[0])*this.grid[0],this.height=Math.round(this.elmH/this.grid[1])*this.grid[1],this.$emit("resizing",this.left,this.top,this.width,this.height);else if(this.dragging)this.parent&&(this.elmX+r<this.parentX?this.mouseOffX=r-(i=this.parentX-this.elmX):this.elmX+this.elmW+r>this.parentW&&(this.mouseOffX=r-(i=this.parentW-this.elmX-this.elmW)),this.elmY+o<this.parentY?this.mouseOffY=o-(s=this.parentY-this.elmY):this.elmY+this.elmH+o>this.parentH&&(this.mouseOffY=o-(s=this.parentH-this.elmY-this.elmH))),this.elmX+=i,this.elmY+=s,"x"!==this.axis&&"both"!==this.axis||(this.left=Math.round(this.elmX/this.grid[0])*this.grid[0]),"y"!==this.axis&&"both"!==this.axis||(this.top=Math.round(this.elmY/this.grid[1])*this.grid[1]),this.$emit("dragging",this.left,this.top);else if(this.rotating){var a=this.getOrigin(),h=Math.atan2(n-a.y,e-a.x),l=Math.atan2(this.lastMouseY-a.y,this.lastMouseX-a.x);this.rotateAngle+=Math.round(180*(l-h)/Math.PI),this.$emit("rotating",this.rotateAngle)}},handleUp:function(t){this.handle=null,this.resizing&&(this.resizing=!1,this.$emit("resizestop",this.left,this.top,this.width,this.height)),this.dragging&&(this.dragging=!1,this.$emit("dragstop",this.left,this.top)),this.rotating&&(this.rotating=!1,this.$emit("rotatestop",this.rotateAngle)),this.elmX=this.left,this.elmY=this.top}},computed:{style:function(){return{top:this.top+"px",left:this.left+"px",width:this.width+"px",height:this.height+"px",transform:"rotate("+this.rotateAngle+"deg)"}}},watch:{active:function(t){this.enabled=t}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(2);n.d(e,"default",function(){return i.a})},function(t,e,n){"use strict";function i(t){n(3)}var s=n(0),r=n(11),o=n(10),a=i,h=o(s.a,r.a,!1,a,null,null);e.a=h.exports},function(t,e,n){var i=n(4);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals),n(8)("a68b1c08",i,!0)},function(t,e,n){var i=n(5);e=t.exports=n(6)(!1),e.push([t.i,"\n.z-drr-container {\n  position: absolute;\n}\n.z-drr-container *, .z-drr-container *:before, .z-drr-container *:after {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    -moz-box-sizing: border-box;\n}\n.z-draggable:hover {\n  cursor: move;\n}\n.z-rotateable-handle {\n  position: absolute;\n  left: 50%;\n  top: -36px;\n  width: 1px;\n  height: 36px;\n  margin-left: -.5px;\n  background-color: #32a6d0;\n  cursor: url("+i(n(7))+") 8 8, default;\n}\n.z-rotateable-handle:after {\n    content: ' ';\n    top: 0;\n    left: 0;\n    margin-left: -5.5px;\n    position: absolute;\n    width: 12px;\n    height: 12px;\n    border: 1px solid #32a6d0;\n    border-radius: 50%;\n    background: #32a6d0;\n}\n.z-resizeable-handle {\n  display: none;\n  position: absolute;\n}\n.z-handle-nw,\n.z-handle-ne,\n.z-handle-sw,\n.z-handle-se {\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  border: 1px solid #32a6d0;\n  border-radius: 50%;\n  background: #fff;\n}\n.z-handle-nw {\n  top: -6px;\n  left: -6px;\n  cursor: nw-resize;\n}\n.z-handle-ne {\n  top: -6px;\n  right: -6px;\n  cursor: ne-resize;\n}\n.z-handle-sw {\n  bottom: -6px;\n  left: -6px;\n  cursor: sw-resize;\n}\n.z-handle-se {\n  bottom: -6px;\n  right: -6px;\n  cursor: se-resize;\n}\n.z-handle-n:after,\n.z-handle-w:after,\n.z-handle-e:after,\n.z-handle-s:after {\n  content: ' ';\n  position: absolute;\n  width: 12px;\n  height: 12px;\n  border: 1px solid #32a6d0;\n  border-radius: 50%;\n  background: #fff;\n}\n.z-handle-n {\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 6px;\n  border-top: 1px solid #32a6d0;\n  cursor: n-resize;\n}\n.z-handle-n:after {\n    bottom: 0;\n    left: 50%;\n    margin-left: -6px;\n}\n.z-handle-w {\n  top: 0;\n  left: 0;\n  width: 6px;\n  height: 100%;\n  border-left: 1px solid #32a6d0;\n  cursor: w-resize;\n}\n.z-handle-w:after {\n    top: 50%;\n    right: 0;\n    margin-top: -6px;\n}\n.z-handle-e {\n  top: 0;\n  right: 0;\n  width: 6px;\n  height: 100%;\n  border-right: 1px solid #32a6d0;\n  cursor: e-resize;\n}\n.z-handle-e:after {\n    top: 50%;\n    left: 0;\n    margin-top: -6px;\n}\n.z-handle-s {\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 6px;\n  border-bottom: 1px solid #32a6d0;\n  cursor: s-resize;\n}\n.z-handle-s:after {\n    top: 0;\n    left: 50%;\n    margin-left: -6px;\n}\n.z-active {\n  z-index: 999;\n}\n",""])},function(t,e){t.exports=function(t){return/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),/["'() \t\n]/.test(t)?'"'+t.replace(/"/g,'\\"').replace(/\n/g,"\\n")+'"':t}},function(t,e){function n(t,e){var n=t[1]||"",s=t[3];if(!s)return n;if(e&&"function"==typeof btoa){var r=i(s);return[n].concat(s.sources.map(function(t){return"/*# sourceURL="+s.sourceRoot+t+" */"})).concat([r]).join("\n")}return[n].join("\n")}function i(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var i=n(e,t);return e[2]?"@media "+e[2]+"{"+i+"}":i}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},s=0;s<this.length;s++){var r=this[s][0];"number"==typeof r&&(i[r]=!0)}for(s=0;s<t.length;s++){var o=t[s];"number"==typeof o[0]&&i[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),e.push(o))}},e}},function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABWUlEQVQ4T6WT0U3DQAyGf/sGoBuQDcjp7p2wQTsBbNCOABMAE5BuwAjpe09XJqAjlAFyRq5yIUkRKuCXSIn92f79h/DPoGl9jLFIKS0BzAEU+l1EdgBqY8zaWnvQnLZtS+/96wgQQrgD8PLDUHsADwAeAbw556oeMCwWkQ8iqpn5NaVUikhJRLcT8KYHdGO/dwkbZp7rqMOCEMKq65xffwFCCE8AltrZGFNMi7sGEcBsAB0BdLdLAM/OOe00ihhjlVK6n7yunXP1UYMQguiTmW+stc1vLjsCiMhCT/MXgN75SkTW3ns95dmRJ+gVZmZrrVXgSWy327kxphmKfATEGGcpJS1SIQ/MvJhqkc+orvTe20zvjRRjLNu2bYjoItuXiBoRKYiozLZWBzJzlacYWVkhKSX1xPV3K6hGxpjVyQrTZN2161qJyJ6Idmpra636ZRQnf+PZ8neJn9q+rxFGGvPWAAAAAElFTkSuQmCC"},function(t,e,n){function i(t){for(var e=0;e<t.length;e++){var n=t[e],i=u[n.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](n.parts[s]);for(;s<n.parts.length;s++)i.parts.push(r(n.parts[s]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{for(var o=[],s=0;s<n.parts.length;s++)o.push(r(n.parts[s]));u[n.id]={id:n.id,refs:1,parts:o}}}}function s(){var t=document.createElement("style");return t.type="text/css",d.appendChild(t),t}function r(t){var e,n,i=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(i){if(p)return m;i.parentNode.removeChild(i)}if(g){var r=f++;i=c||(c=s()),e=o.bind(null,i,r,!1),n=o.bind(null,i,r,!0)}else i=s(),e=a.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}function o(t,e,n,i){var s=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=v(e,s);else{var r=document.createTextNode(s),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(r,o[e]):t.appendChild(r)}}function a(t,e){var n=e.css,i=e.media,s=e.sourceMap;if(i&&t.setAttribute("media",i),s&&(n+="\n/*# sourceURL="+s.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}var h="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!h)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var l=n(9),u={},d=h&&(document.head||document.getElementsByTagName("head")[0]),c=null,f=0,p=!1,m=function(){},g="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());t.exports=function(t,e,n){p=n;var s=l(t,e);return i(s),function(e){for(var n=[],r=0;r<s.length;r++){var o=s[r],a=u[o.id];a.refs--,n.push(a)}e?(s=l(t,e),i(s)):s=[];for(var r=0;r<n.length;r++){var a=n[r];if(0===a.refs){for(var h=0;h<a.parts.length;h++)a.parts[h]();delete u[a.id]}}}};var v=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e){t.exports=function(t,e){for(var n=[],i={},s=0;s<e.length;s++){var r=e[s],o=r[0],a=r[1],h=r[2],l=r[3],u={id:t+":"+s,css:a,media:h,sourceMap:l};i[o]?i[o].parts.push(u):n.push(i[o]={id:o,parts:[u]})}return n}},function(t,e){t.exports=function(t,e,n,i,s,r){var o,a=t=t||{},h=typeof t.default;"object"!==h&&"function"!==h||(o=t,a=t.default);var l="function"==typeof a?a.options:a;e&&(l.render=e.render,l.staticRenderFns=e.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),s&&(l._scopeId=s);var u;if(r?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=u):i&&(u=i),u){var d=l.functional,c=d?l.render:l.beforeCreate;d?(l._injectStyles=u,l.render=function(t,e){return u.call(e),c(t,e)}):l.beforeCreate=c?[].concat(c,u):[u]}return{esModule:o,exports:a,options:l}}},function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"z-drr-container",class:{"z-draggable":t.draggable,"z-resizable":t.resizable,"z-rotatable":t.rotatable,"z-active":t.enabled,"z-dragging":t.dragging,"z-resizing":t.resizing,"z-rotating":t.rotating},style:t.style,on:{mousedown:function(e){e.stopPropagation(),t.elmDown(e)}}},[t._t("default"),t._v(" "),t.rotatable?n("div",{staticClass:"z-rotateable-handle",style:{display:t.enabled?"block":"none"},on:{mousedown:function(e){e.stopPropagation(),e.preventDefault(),t.rotating=!0}}}):t._e(),t._v(" "),t._l(t.handles,function(e){return t.resizable?n("div",{staticClass:"z-resizeable-handle",class:"z-handle-"+e,style:{display:t.enabled?"block":"none"},on:{mousedown:function(n){n.stopPropagation(),n.preventDefault(),t.handleResizeStart(e,n)}}}):t._e()})],2)},s=[],r={render:i,staticRenderFns:s};e.a=r}])})},I3OW:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("In0P"),s=n("k4QY"),r=n("8AGX"),o=r(i.a,s.a,!1,null,null,null);e.default=o.exports},IF1s:function(t,e,n){var i=n("xce8");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);n("8bSs")("4fb3275f",i,!0)},In0P:function(t,e,n){"use strict";var i=n("78tu"),s=n.n(i),r=n("bGai");e.a={name:"modules",computed:{pages:function(){return this.$store.getters.pages},curpage:function(){return this.$store.getters.curPage}},methods:{toggleCompid:function(t){this.$store.commit("TOGGLE_COMP",t)},updateStyle:function(t){this.$store.commit("EDIT_COMP",{type:"css",value:t})},handleResizing:function(t,e,n,i){this.updateStyle({t:e,l:t,w:n,h:i})},handleDragging:function(t,e){this.updateStyle({t:e,l:t})},handleRotating:function(t){this.updateStyle({rotate:t})}},components:{vueDrr:s.a,vlist:{props:{name:{type:String,required:!0}},render:function(t){return t(r.a[this.name],this.$slots.default)}}}}},bGai:function(t,e,n){"use strict";var i=n("vnuw");e.a={cImage:i.a}},cn3o:function(t,e,n){"use strict";e.a={name:"cImage",data:function(){return{imgUrl:"static/images/logo.png"}}}},k4QY:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},t._l(t.pages,function(e){return n("div",{directives:[{name:"show",rawName:"v-show",value:e.id===t.curpage.id,expression:"page.id === curpage.id"}],key:e.id,staticClass:"comp-lists"},t._l(e.comps,function(e){return n("vue-drr",{key:e.id,attrs:{w:e.css.w,h:e.css.h,y:e.css.t,x:e.css.l,angle:e.css.rotate},on:{activated:function(n){t.toggleCompid(e.id)},deactivated:function(e){t.toggleCompid(null)},dragging:t.handleDragging,resizing:t.handleResizing,rotating:t.handleRotating}},[n("vlist",{staticClass:"comp",attrs:{compid:e.id,name:e.name}})],1)}))}))},s=[],r={render:i,staticRenderFns:s};e.a=r},vYBZ:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-image"},[n("a",{attrs:{href:"#"}},[n("img",{attrs:{src:t.imgUrl,alt:"img"}})])])},s=[],r={render:i,staticRenderFns:s};e.a=r},vnuw:function(t,e,n){"use strict";function i(t){n("IF1s")}var s=n("cn3o"),r=n("vYBZ"),o=n("8AGX"),a=i,h=o(s.a,r.a,!1,a,null,null);e.a=h.exports},xce8:function(t,e,n){e=t.exports=n("BkJT")(!0),e.push([t.i,".c-image a{display:block}.c-image a img{width:100%}","",{version:3,sources:["C:/github/h5editor/src/components/image/index.vue"],names:[],mappings:"AACA,WACE,aAAe,CAChB,AACD,eACI,UAAY,CACf",file:"index.vue",sourcesContent:["\n.c-image a {\n  display: block;\n}\n.c-image a img {\n    width: 100%;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=0.00e99c3633875a33268c.js.map