webpackJsonp([6],{"++Vc":function(t,e,n){"use strict";var r=n("Ld4a"),i=n("vsnq"),a=n("X4nt"),s=a(r.a,i.a,!1,null,null,null);e.a=s.exports},"/879":function(t,e,n){"use strict";var r=n("qQfd");e.a={name:"FFont",props:{value:{type:Object,required:!0}},data:function(){var t=this.value;return{fms:r.b,fss:r.c,ft:{color:t.c,size:t.s,type:t.t,hover:t.h}}},methods:{handleChange:function(){var t=this.ft;this.$emit("change",{key:"ft",value:{s:t.size,t:t.type,h:t.hover,c:t.color}})}}}},"0xDb":function(t,e,n){"use strict";n.d(e,"a",function(){return s}),n.d(e,"b",function(){return o});var r=n("Yarq"),i=(n.n(r),n("hRKE")),a=n.n(i),s=function t(e){if("object"===(void 0===e?"undefined":a()(e))){var n=e instanceof Array?[]:{};for(var r in e)e.hasOwnProperty(r)&&(n[r]="object"===a()(e[r])?t(e[r]):e[r]);return n}},o={set:function(t,e){localStorage.setItem(t,e)},get:function(t){localStorage.getItem(t)},remove:function(t){localStorage.removeItem(t)}}},"2BAi":function(t,e){},"3daJ":function(t,e){},"4anv":function(t,e,n){"use strict";e.a=function(){return{id:1,title:"文字",name:"cText",type:1,anim:{type:1,duration:1,delay:.4},props:{text:"这是文字"},css:{t:100,l:100,w:100,h:30,bd:{w:1,t:1,c:"#fff"},br:5,ft:{s:1,t:1,h:"",c:"#333"},lh:30,rotate:0,bgc:"#fff"}}}},"5reh":function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"e",function(){return i}),n.d(e,"j",function(){return a}),n.d(e,"c",function(){return s}),n.d(e,"h",function(){return o}),n.d(e,"k",function(){return c}),n.d(e,"b",function(){return u}),n.d(e,"g",function(){return l}),n.d(e,"d",function(){return d}),n.d(e,"i",function(){return f}),n.d(e,"f",function(){return p});var r="ADD_COMP",i="EDIT_COMP",a="TOGGLE_COMP",s="ADD_PAGE",o="REMOVE_PAGE",c="TOGGLE_PAGE",u="ADD_COMP_TO_PAGES",l="OPEN_PROPS_PANEL",d="CLOSE_PROPS_PANEL",f="SET_PICK_IMG",p="INIT_USER_DATA"},"8J8o":function(t,e,n){"use strict";e.a={name:"cImage",props:{compid:{type:[String,Number],required:!0}},computed:{cm:function(){return this.$store.getters.getCompConfigByCompid(this.compid)}}}},GeAc:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item-group m-bd f-vama"},[n("div",{staticClass:"item"},[n("label",[t._v("宽度:")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:t.bd.width,expression:"bd.width"}],attrs:{type:"text"},domProps:{value:t.bd.width},on:{change:t.handleChange,input:function(e){e.target.composing||t.$set(t.bd,"width",e.target.value)}}})]),t._v(" "),n("div",{staticClass:"item"},[n("label",[t._v("样式:")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model.number",value:t.bd.type,expression:"bd.type",modifiers:{number:!0}}],attrs:{name:"border-style"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(e){var n="_value"in e?e._value:e.value;return t._n(n)});t.$set(t.bd,"type",e.target.multiple?n:n[0])},t.handleChange]}},t._l(t.bss,function(e,r){return n("option",{key:r,domProps:{value:r}},[t._v("\n        "+t._s(e)+"\n      ")])}))]),t._v(" "),n("div",{staticClass:"item"},[n("label",[t._v("颜色:")]),t._v(" "),n("el-color-picker",{attrs:{size:"mini"},on:{change:t.handleChange},model:{value:t.bd.color,callback:function(e){t.$set(t.bd,"color",e)},expression:"bd.color"}})],1)])},i=[],a={render:r,staticRenderFns:i};e.a=a},H3CJ:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{attrs:{id:"view"}},[n("el-header",{staticClass:"s-bg-main g-hd",attrs:{height:"auto"}},[n("topbar")],1),t._v(" "),n("el-container",[n("el-aside",[n("props-panel")],1),t._v(" "),n("el-main",{attrs:{id:"workspace"}},[n("div",{staticClass:"m-simulator work-part"},[n("div",{staticClass:"wrap"},[n("container")],1)])]),t._v(" "),n("el-aside",[n("page-panel")],1),t._v(" "),n("pick-image")],1)],1)},i=[],a={render:r,staticRenderFns:i};e.a=a},HbnA:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"m-simulator",attrs:{id:"preview"}},[n("div",{staticClass:"wrap"},[n("swiper",{ref:"mySwiper",attrs:{options:t.swiperOption}},t._l(t.pages,function(e){return n("swiper-slide",{key:e.id},t._l(e.comps,function(t){return n("vlist",{key:t.id,staticClass:"comp",attrs:{compid:t.id,name:t.name}})}))}))],1)])},i=[],a={render:r,staticRenderFns:i};e.a=a},IcnI:function(t,e,n){"use strict";var r,i=n("a3Yh"),a=n.n(i),s=n("aA9S"),o=n.n(s),c=n("3cXf"),u=n.n(c),l=n("VCXJ"),d=n("9rMa"),f=n("5reh"),p=n("gJCy"),v=n("RpdK"),m=n("0xDb");l.default.use(d.a);e.a=new d.a.Store({state:{versior:.22,propsPanel:{status:!1,name:"",id:""},pickImg:{status:!1,callback:null}},getters:{propsPanel:function(t){return t.propsPanel},pickImg:function(t){return t.pickImg}},actions:{getUserData:function(t){var e=t.state,n=t.commit,r=t.dispatch,i=localStorage.getItem("UserData");if(i)try{var a=JSON.parse(i);if(a.versior&&a.versior>=e.versior){var s=a.pages;n("INIT_USER_DATA",a),s&&s.lists&&s.lists.length&&n("TOGGLE_PAGE",s.lists[0].id)}else r("initH5Editor")}catch(t){r("initH5Editor"),console.error("获取数据失败:"+t.message)}else r("initH5Editor")},saveUserData:function(t){var e=t.state;m.b.set("UserData",u()({versior:e.versior,pages:{lists:e.pages.lists}}))}},mutations:(r={},a()(r,f.f,function(t,e){t.versior=e.versior,t.pages.lists=e.pages.lists,t.components.lists=e.pages.lists.reduce(function(t,e){if(e)return t.concat(e.comps)},[])}),a()(r,f.g,function(t,e){var n=e.id,r=e.name;t.propsPanel={status:!0,name:r,id:n}}),a()(r,f.d,function(t){t.propsPanel.status=!1}),a()(r,f.i,function(t,e){"boolean"==typeof e?t.pickImg.status=e:o()(t.pickImg,e)}),r),modules:{pages:p.a,components:v.a},strict:!1})},KlD6:function(t,e,n){"use strict";e.a={name:"index",components:{pagePanel:function(){return n.e(4).then(n.bind(null,"qqmI"))},topbar:function(){return n.e(3).then(n.bind(null,"lCIc"))},container:function(){return n.e(2).then(n.bind(null,"I3OW"))},propsPanel:function(){return n.e(0).then(n.bind(null,"F6rd"))},pickImage:function(){return n.e(1).then(n.bind(null,"RmMb"))}}}},L8Y5:function(t,e,n){"use strict";var r=n("KlD6"),i=n("H3CJ"),a=n("X4nt"),s=a(r.a,i.a,!1,null,null,null);e.a=s.exports},Ld4a:function(t,e,n){"use strict";e.a={name:"cText",props:{compid:{type:[String,Number],required:!0}},computed:{cm:function(){return this.$store.getters.getCompConfigByCompid(this.compid)},linkStyle:function(){return{ft:this.cm.css.ft}}}}},M93x:function(t,e,n){"use strict";var r=n("s15m"),i=n("wn8U"),a=n("X4nt"),s=a(r.a,i.a,!1,null,null,null);e.a=s.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("briU"),i=(n.n(r),n("VCXJ")),a=n("IcnI"),s=n("mwE6"),o=n.n(s),c=n("M93x"),u=n("cU5d"),l=(n.n(u),n("3daJ")),d=(n.n(l),n("2BAi")),f=(n.n(d),n("YaEn")),p=n("hvE6"),v=(n.n(p),n("cdhV"));n("xobu");i.default.use(o.a),i.default.prototype.$log=console.log.bind(console),i.default.filter("calcStyle",v.a),i.default.config.productionTip=!1,new i.default({el:"#app",store:a.a,router:f.a,render:function(t){return t(c.a)}})},RIWT:function(t,e,n){"use strict";var r=n("RJzp"),i=n("GeAc"),a=n("X4nt"),s=a(r.a,i.a,!1,null,null,null);e.a=s.exports},RJzp:function(t,e,n){"use strict";var r=n("qQfd");e.a={name:"FFont",props:{value:{type:Object,required:!0}},data:function(){var t=this.value;return{bss:r.a,bd:{color:t.c,type:t.t,width:t.w}}},methods:{handleChange:function(){var t=this.bd;this.$emit("change",{key:"bd",value:{w:t.width,t:t.type,c:t.color}})}}}},RpdK:function(t,e,n){"use strict";var r,i=n("a3Yh"),a=n.n(i),s=n("hRKE"),o=n.n(s),c=n("aA9S"),u=n.n(c),l=n("5reh"),d=n("fyxR"),f=n("c30k"),p=n("0xDb"),v={lists:[],curCompId:null},m={getComplistsByPageId:function(t){return function(e){return t.lists.filter(function(t){return t.parentId===e})}},curComp:function(t){return t.lists.find(function(e){return e.id===t.curCompId})},getCompConfigByCompid:function(t){return function(e){return t.lists.find(function(t){return t.id===e})}}},g={addNewComp:function(t,e){var n=t.commit,r=t.getters;Object(f.a)().then(function(t){var i=d.a[e]&&d.a[e]();if(i){var a=u()(Object(p.a)(i),t,{parentId:r.curPageId});n("ADD_COMP_TO_PAGES",a),n("ADD_COMP",a)}})}},h=(r={},a()(r,l.j,function(t,e){t.curCompId=e}),a()(r,l.e,function(t,e){var n=e.type,r=e.value,i=e.compid,a=t.lists.find(function(e){return e.id===i||e.id===t.curCompId});if(a){var s=a[n];for(var c in r)void 0!==s[c]&&("object"===o()(r[c])?u()(s[c],r[c]):s[c]=r[c])}}),a()(r,l.a,function(t,e){t.lists.push(e)}),r);e.a={state:v,getters:m,actions:g,mutations:h}},YaEn:function(t,e,n){"use strict";var r=n("VCXJ"),i=n("zO6J"),a=n("L8Y5"),s=n("n3Jp");r.default.use(i.a),e.a=new i.a({routes:[{path:"/",name:"index",component:a.a},{path:"/preview",name:"preview",component:s.a}]})},Zu02:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"item-group m-ft f-vama"},[n("div",{staticClass:"item"},[n("label",[t._v("字体:")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model.number",value:t.ft.type,expression:"ft.type",modifiers:{number:!0}}],attrs:{name:"font-family"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(e){var n="_value"in e?e._value:e.value;return t._n(n)});t.$set(t.ft,"type",e.target.multiple?n:n[0])},t.handleChange]}},t._l(t.fms,function(e,r){return n("option",{key:r,domProps:{value:r}},[t._v("\n        "+t._s(e)+"\n      ")])}))]),t._v(" "),n("div",{staticClass:"item"},[n("label",[t._v("字号:")]),t._v(" "),n("select",{directives:[{name:"model",rawName:"v-model.number",value:t.ft.size,expression:"ft.size",modifiers:{number:!0}}],attrs:{name:"font-size"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(e){var n="_value"in e?e._value:e.value;return t._n(n)});t.$set(t.ft,"size",e.target.multiple?n:n[0])},t.handleChange]}},t._l(t.fss,function(e,r){return n("option",{key:r,domProps:{value:r}},[t._v("\n        "+t._s(e)+"\n      ")])}))]),t._v(" "),n("div",{staticClass:"item"},[n("label",[t._v("颜色:")]),t._v(" "),n("el-color-picker",{attrs:{size:"mini"},on:{change:t.handleChange},model:{value:t.ft.color,callback:function(e){t.$set(t.ft,"color",e)},expression:"ft.color"}})],1)])},i=[],a={render:r,staticRenderFns:i};e.a=a},bGai:function(t,e,n){"use strict";var r=n("vnuw"),i=n("++Vc");e.a={cImage:r.a,cText:i.a}},c30k:function(t,e,n){"use strict";n.d(e,"a",function(){return a}),n.d(e,"b",function(){return s});var r=n("l/JR"),i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;return Date.now().toString(t)},a=function(){return Object(r.a)({id:i()})},s=function(){return Object(r.a)({id:i(32),css:{},props:{},comps:[]})}},cU5d:function(t,e){},cdhV:function(t,e,n){"use strict";var r=n("aA9S"),i=n.n(r),a=n("hRKE"),s=n.n(a),o=n("qQfd"),c=function(t,e){var n={bd:function(){return{"border-width":e.w+"px","border-style":o.a[e.t],"border-color":e.c}},ft:function(){return{"font-size":o.c[e.s],"font-family":o.b[e.t],color:e.c}}};return n[t]&&n[t]()||{}};e.a=function(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];if(!t||"object"!==(void 0===t?"undefined":s()(t)))return"";var a={};for(var u in t){var l=o.d[u],d=t[u];n.includes(u)||null!==d&&void 0!==d&&(l?"object"===(void 0===l?"undefined":s()(l))?a[l.value]=d+l.unit:a[l]=d:i()(a,c(u,d)))}return a}},fyxR:function(t,e,n){"use strict";var r=n("trOa"),i=n("4anv");e.a={cImage:r.a,cText:i.a}},gJCy:function(t,e,n){"use strict";var r,i=n("a3Yh"),a=n.n(i),s=n("5reh"),o=n("c30k"),c={lists:[],curPageId:null},u={pages:function(t){return t.lists},curPageId:function(t){return t.curPageId||t.lists[0].id},curPage:function(t){return t.lists.find(function(e){return e.id===t.curPageId})||t.lists[0]}},l={initH5Editor:function(t){var e=t.dispatch,n=t.commit;e("addNewPage").then(function(t){n("TOGGLE_PAGE",t)})},addNewPage:function(t){var e=t.commit;return Object(o.b)().then(function(t){return t&&e("ADD_PAGE",t),t.id})},removePage:function(t,e){(0,t.commit)("REMOVE_PAGE",e)}},d=(r={},a()(r,s.k,function(t,e){t.curPageId=e}),a()(r,s.c,function(t,e){t.lists.push(e)}),a()(r,s.h,function(t,e){var n=t.lists.findIndex(function(t){return t.id===e});n>-1&&t.lists.splice(n,1)}),a()(r,s.b,function(t,e){var n=t.lists.find(function(e){return e.id===t.curPageId});n&&n.comps.push(e)}),r);e.a={state:c,getters:u,actions:l,mutations:d}},gzXM:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-image",style:t._f("calcStyle")(t.cm.css)},[n("a",{attrs:{href:"#"}},[n("img",{attrs:{src:t.cm.props.src}})])])},i=[],a={render:r,staticRenderFns:i};e.a=a},hvE6:function(t,e){},"l/JR":function(t,e,n){"use strict";var r=n("rVsN"),i=n.n(r);e.a=function(t){var e=Math.ceil(200*Math.random());return new i.a(function(n,r){setTimeout(n(t),e)})}},n3Jp:function(t,e,n){"use strict";var r=n("wxS4"),i=n("HbnA"),a=n("X4nt"),s=a(r.a,i.a,!1,null,null,null);e.a=s.exports},qQfd:function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return a}),n.d(e,"d",function(){return s});var r={1:"微软雅黑",2:"宋体",3:"楷体",4:"仿宋",5:"黑体",6:"Arial"},i={1:"12px",2:"14px",3:"16px",4:"18px",5:"20px",6:"22px",7:"24px",8:"26px",9:"28px",10:"30px",11:"32px",12:"34px",13:"36px",14:"48px",15:"64px"},a={1:"none",2:"solid",3:"dashed",4:"dotted",5:"double"},s={w:{value:"width",unit:"px"},h:{value:"height",unit:"px"},t:{value:"top",unit:"px"},l:{value:"left",unit:"px"},lh:{value:"line-height",unit:"px"},br:{value:"border-radius",unit:"px"},c:"color",bgc:"background-color"}},s15m:function(t,e,n){"use strict";e.a={name:"App",beforeCreate:function(){this.$store.dispatch("getUserData")}}},trOa:function(t,e,n){"use strict";e.a=function(){return{id:1,title:"图片",name:"cImage",type:1,anim:{type:1,duration:1,delay:.4},props:{src:"./static/images/logo.png"},css:{t:0,l:0,w:200,h:200,bd:{w:1,t:1,c:"#fff"},br:5,rotate:0,bgc:"#fff"}}}},uEni:function(t,e,n){"use strict";var r=n("/879"),i=n("Zu02"),a=n("X4nt"),s=a(r.a,i.a,!1,null,null,null);e.a=s.exports},vnuw:function(t,e,n){"use strict";var r=n("8J8o"),i=n("gzXM"),a=n("X4nt"),s=a(r.a,i.a,!1,null,null,null);e.a=s.exports},vsnq:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"c-text",style:t._f("calcStyle")(t.cm.css)},[n("a",{style:t._f("calcStyle")(t.linkStyle),attrs:{href:"#"},domProps:{innerHTML:t._s(t.cm.props.text)}})])},i=[],a={render:r,staticRenderFns:i};e.a=a},wn8U:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],a={render:r,staticRenderFns:i};e.a=a},wxS4:function(t,e,n){"use strict";var r=n("uCHi"),i=(n.n(r),n("bGai"));e.a={name:"Preview",data:function(){return{swiperOption:{direction:"vertical"}}},computed:{swiper:function(){return this.$refs.mySwiper.swiper},pages:function(){return this.$store.getters.pages}},components:{swiper:r.swiper,swiperSlide:r.swiperSlide,vlist:{props:{name:{type:String,required:!0},compid:{type:[String,Number],required:!0}},render:function(t){return t(i.a[this.name],{props:{compid:this.compid}})}}}}},xobu:function(t,e,n){"use strict";var r=n("VCXJ"),i=n("uEni"),a=n("RIWT");r.default.component("FFont",i.a),r.default.component("FBd",a.a)}},["NHnr"]);
//# sourceMappingURL=app.b97b9a85894ada73eca1.js.map