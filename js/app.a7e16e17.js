(function(t){function e(e){for(var r,a,c=e[0],s=e[1],l=e[2],u=0,p=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);d&&d(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-509508ce":"4af9c6e7","chunk-ff0afa02":"0f4317cd"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-509508ce":1,"chunk-ff0afa02":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-509508ce":"dbf9ee09","chunk-ff0afa02":"09af59c2"}[t]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return e()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){l=p[c],u=l.getAttribute("data-href");if(u===r||u===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],d.parentNode.removeChild(d),n(i)},d.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(d)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(t);var p=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[t]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/vue-compilation-performance/",s.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var p=0;p<l.length;p++)e(l[p]);var d=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"019d":function(t,e,n){"use strict";n("e37d")},"1ec4":function(t,e){},"227c":function(t,e,n){},"3a05":function(t,e,n){"use strict";n("dc2d")},"3aa0":function(t,e,n){"use strict";n("227c")},"3b8b":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Window",t._g(t._b({},"Window",t.$attrs,!1),t.$listeners),[n("select",{directives:[{name:"model",rawName:"v-model.number",value:t.index,expression:"index",modifiers:{number:!0}}],staticClass:"selector",attrs:{slot:"title"},on:{click:function(t){return t.stopPropagation(),function(){}.apply(null,arguments)},change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(e){var n="_value"in e?e._value:e.value;return t._n(n)}));t.index=e.target.multiple?n:n[0]}},slot:"title"},t._l(t.files,(function(e,r){return n("option",{key:e.name,domProps:{value:r}},[t._v(" "+t._s(e.name)+" ")])})),0),n("CodePreview",{attrs:{language:t.file.lang,code:t.file.content.default}})],1)},a=[],o=(n("a9e3"),n("583b"),n("c740"),n("2ca0"),n("b0c0"),n("44cd")),i=n("6926"),c={name:"FancyBrowserWindow",inheritAttr:!1,components:{Window:o["a"],CodePreview:i["a"]},props:{files:{type:Array,required:!0},active:[Number,String]},data:function(){return{index:0}},computed:{file:function(){return this.files[this.index]}},watch:{file:{immediate:!0,deep:!0,handler:function(t){this.$emit("pick",t)}},active:{immediate:!0,handler:function(t){Number.isSafeInteger(t)?this.index=Math.max(0,t):this.index=Math.max(0,this.files.findIndex((function(e){return e.name.startsWith("".concat(t))})))}}}},s=c,l=(n("b274"),n("2877")),u=Object(l["a"])(s,r,a,!1,null,"0198c365",null);e["a"]=u.exports},"44cd":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"window",on:{click:function(t){return t.stopPropagation(),function(){}.apply(null,arguments)}}},[n("div",{staticClass:"title-bar"},[n("div",{staticClass:"actions"},[n("div",{staticClass:"close",on:{click:function(e){return t.$emit("close")}}}),n("div",{staticClass:"minimize",on:{click:function(e){return t.$emit("minimize")}}}),n("div",{staticClass:"maximize",on:{click:function(e){return t.$emit("maximize")}}})]),n("div",{staticClass:"title"},[t._t("title",(function(){return[t._v(t._s(t.title))]}))],2)]),n("div",{staticClass:"content"},[t._t("default")],2)])},a=[],o={name:"Window",props:{title:{type:String}}},i=o,c=(n("3aa0"),n("2877")),s=Object(c["a"])(i,r,a,!1,null,"51b85f10",null);e["a"]=s.exports},"4d0c":function(t,e,n){t.exports=n.p+"img/nash.e5defe42.jpg"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-app-bar",{attrs:{app:"",dark:""}},[r("v-toolbar-title",[r("v-avatar",{attrs:{size:"56"}},[r("img",{attrs:{src:n("4d0c"),alt:"Nash Img"}})]),t._v(" Nasr Galal ")],1),r("v-spacer"),t._l(t.btns,(function(e){return r("v-btn",{key:e.id,staticClass:"text-subtitle-1",attrs:{plain:"",color:"success",exact:"","active-class":"white--text",to:e.to}},[t._v(" "+t._s(e.title)+" ")])}))],2),r("v-main",[r("router-view")],1)],1)},o=[],i={data:function(){return{btns:[{id:1,title:"Home",to:"/"},{id:2,title:"Functional Component",to:"/benchmarks/functional"},{id:3,title:"Child Splitting",to:"/benchmarks/child-splitting"}]}}},c=i,s=n("2877"),l=n("6544"),u=n.n(l),p=n("7496"),d=n("40dc"),f=n("8212"),m=n("8336"),v=n("f6c4"),h=n("2fa4"),g=n("2a7f"),b=Object(s["a"])(c,a,o,!1,null,null,null),y=b.exports;u()(b,{VApp:p["a"],VAppBar:d["a"],VAvatar:f["a"],VBtn:m["a"],VMain:v["a"],VSpacer:h["a"],VToolbarTitle:g["a"]});n("d3b7"),n("3ca3"),n("ddb0");var _=n("8c4f"),x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-row",[r("v-col",[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("img",{attrs:{alt:"Vuetify logo",width:"200",src:"https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-dark-atom.svg"}})]),r("v-col",[r("h2",[t._v("Vue POC Compiling Mechanics")]),r("p",[t._v(" Prepared by Nasr Galal ")])])],1),r("v-row",[r("v-col",{attrs:{cols:"3"}},[r("FancyBrowserWindow",{attrs:{files:t.files,active:"GreetingExample"},on:{pick:t.logit}})],1),r("v-col",{attrs:{cols:"3"}},[r("SFCExplorer",{attrs:{code:t.file?t.file.content.default:""}})],1),r("v-col",{attrs:{cols:"3"}},[t.file?r(t.explorer,{tag:"component",attrs:{code:t.file?t.file.content.default:"","strip-with":!0,component:t.component},on:{"update:component":function(e){t.component=e}}}):t._e()],1),r("v-col",{attrs:{cols:"2"}},[t._v(" Preview component "),r("ComponentPreview",{attrs:{component:t.component}})],1)],1)],1)},w=[],C=(n("d81d"),n("ac1f"),n("5319"),n("8a79"),n("3b8b")),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Window",{attrs:{title:"SFC Descriptor"},nativeOn:{click:function(t){return t.stopPropagation(),function(){}.apply(null,arguments)}}},[n("div",{staticClass:"sfc"},[n("ObjectExplorer",{attrs:{value:t.output}})],1)])},O=[],k=n("44cd"),E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"object",class:{array:Array.isArray(t.value)}},[n("span",{staticClass:"type"},[t._v(" "+t._s(Array.isArray(t.value)?"Array("+t.value.length+")":"Object")+" ")]),t.expanded?n("div",{staticClass:"contents"},t._l(t.value,(function(e,r){return n("div",{key:r,staticClass:"entry",attrs:{"data-id":t.id(t.value)}},[null!==e&&"object"===typeof e?n("button",{staticClass:"expand black--text",on:{click:function(e){return t.toggle(r)}}},[t._v(" "+t._s(t.isExpanded(r)?"-":"+")+" ")]):t._e(),n("div",{staticClass:"key"},[t._v(t._s(r))]),null!==e&&"object"===typeof e?n("ObjectExplorer",{attrs:{expanded:t.isExpanded(r),value:e}}):n("pre",{staticClass:"primitive",class:typeof e},[t._v("        "+t._s(void 0===e?"undefined":null===e?"null":e)+"\n      ")])],1)})),0):t._e()])},P=[],S=(n("10d1"),n("a434"),0),W=new WeakMap,A={name:"ObjectExplorer",props:{value:[Object,Array],expanded:{type:Boolean,default:!0}},components:{},data:function(){return{open:["template"]}},beforeUpdate:function(){this.id(this.value)},created:function(){this.$options.components.ObjectExplorer=A,this.id(this.value)},methods:{id:function(t){return"object"!==t||W.has(t)||W.set(t,++S),W.get(t)},isExpanded:function(t){return this.open.indexOf(t)>-1},toggle:function(t){this.isExpanded(t)?this.open.splice(this.open.indexOf(t),1):this.open.push(t)}}},F=A,$=F,N=(n("019d"),Object(s["a"])($,E,P,!1,null,"bc5085ea",null)),z=N.exports,V=n("5ce8"),T={name:"SFCExplorer",components:{Window:k["a"],ObjectExplorer:z},props:{code:{type:String,required:!0}},computed:{output:function(){return Object(V["parseComponent"])(this.code)}}},M=T,B=(n("3a05"),Object(s["a"])(M,j,O,!1,null,"171228b6",null)),R=B.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Window",t._g({},t.$listeners),[n("template",{slot:"title"},[n("span",{staticClass:"text-caption font-weight-bold"},[t._v("Render Function")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.optimize,expression:"optimize"}],on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.optimize=e.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"true"}},[t._v("(optimized)")]),n("option",{attrs:{value:"false"}},[t._v("(unoptimized)")])])]),n("CodePreview",{attrs:{language:"javascript"}},[t._v(" "+t._s(t.output)+" ")])],2)},H=[],L=(n("99af"),0),q={props:["component"],computed:{build:function(){var t=Object(V["parseComponent"])(this.code),e=t.script,n=t.template,r=n&&n.attrs&&n.attrs.functional||!1,a=this.output.replace(/export/g,""),o=(e&&e.content?e.content:"export default {}").replace(/export default/,"const __component__ = "),i="".concat(a,"\n").concat(o,"\n return Object.assign({ name: 'RuntimeComponent").concat(++L,"' }, __component__, { render, staticRenderFns, functional: ").concat(JSON.stringify(r)," })"),c=new Function(i);return c()}},watch:{build:{immediate:!0,handler:function(t){console.log("component from watcher => ",t),this.$emit("update:component",t)}}}},J=n("5530"),G=(n("a15b"),n("a063")),I=n.n(G),U=n("325b"),K=n("4fae");function Q(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"()",r=arguments.length>3?arguments[3]:void 0;return e="function ".concat(n," { ").concat(e," }"),t?I()(e,{transforms:{stripWithFunctional:r}}):e}function X(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};e=Object(J["a"])({optimize:!0,stripWith:!0},e);var n=Object(V["compile"])(t.content,e),r=n.render,a=n.staticRenderFns,o="export ".concat(Q(e.stripWith,r,"render(".concat(t.attrs.functional?"_h,_vm":"",")"),t.attrs.functional||!1),"\n")+"export const staticRenderFns = [".concat(a.map((function(t,n){return Q(e.stripWith,t,"_".concat(n," ()"))})).join(", "),"]");return U["format"](o,{parser:"babylon",plugins:[K],printWidth:40})}var Y=n("6926"),Z={name:"RFExplorer",components:{Window:k["a"],CodePreview:Y["a"]},extends:q,props:{code:{type:String,required:!0},stripWith:{type:Boolean,default:!0}},data:function(){return{optimize:!0}},computed:{output:function(){var t=Object(V["parseComponent"])(this.code),e=t.template;return X(e,{optimize:this.optimize,stripWith:this.stripWith})}}},tt=Z,et=Object(s["a"])(tt,D,H,!1,null,"3c0a1a5f",null),nt=et.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"overflow"},[t.component?n(t.component,t._b({tag:"component"},"component",t.props,!1)):t._e()],1)])},at=[],ot=(n("b64b"),{name:"ComponentView",props:{component:{}},computed:{props:function(){var t=this.component&&this.component.props;if(!t)return{};var e=Array.isArray(t)?t:Object.keys(t),n=["foo","bar","baz"];return e.reduce((function(t,e,r){return t[e]="name"===e?"Jane Doe":n[r%n.length],t}),{})}}}),it=ot,ct=(n("7fdf"),Object(s["a"])(it,rt,at,!1,null,"7ec52c2e",null)),st=ct.exports;function lt(){var t=n("72f4");return t.keys().map((function(e){return{name:e.replace("./",""),lang:e.endsWith(".vue")?"vue":"js",content:t(e)}}))}var ut=lt(),pt={name:"Home",components:{FancyBrowserWindow:C["a"],SFCExplorer:R,RFExplorer:nt,ComponentPreview:st},data:function(){return{files:ut,file:null,explorer:"RFExplorer",component:null}},methods:{logit:function(t){this.file=t}}},dt=pt,ft=n("62ad"),mt=n("a523"),vt=n("0fd9"),ht=Object(s["a"])(dt,x,w,!1,null,null,null),gt=ht.exports;u()(ht,{VCol:ft["a"],VContainer:mt["a"],VRow:vt["a"]}),r["default"].use(_["a"]);var bt=[{path:"/",name:"Home",component:gt},{path:"/benchmarks/functional",name:"functional",component:function(){return n.e("chunk-509508ce").then(n.bind(null,"5110"))}},{path:"/benchmarks/child-splitting",name:"child-splitting",component:function(){return n.e("chunk-ff0afa02").then(n.bind(null,"6e93"))}}],yt=new _["a"]({mode:"history",base:"/vue-compilation-performance/",routes:bt}),_t=yt,xt=n("2f62");r["default"].use(xt["a"]);var wt=new xt["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Ct=n("ce5b"),jt=n.n(Ct);r["default"].use(jt.a);var Ot=new jt.a({theme:{dark:!0}});n("1ec4");r["default"].config.productionTip=!1,new r["default"]({router:_t,store:wt,vuetify:Ot,render:function(t){return t(y)}}).$mount("#app")},6926:function(t,e,n){"use strict";n("498a");var r,a,o=n("c197"),i=n.n(o),c=(n("5c81"),n("44fd")),s=n.n(c),l={vue:"markup",js:"javascript",ts:"typescript"},u={name:"CodePreview",functional:!0,props:{code:{type:String},language:{type:String,default:"markup"}},render:function(t,e){var n=s()(e.props.code||e.children[0].text.trim()),r=e.props.language,a=i.a.languages[l[r]||r],o="language-".concat(r);return t("pre",Object.assign({},e.data,{class:[e.data.class,o]}),[t("code",{class:o,domProps:{innerHTML:a?i.a.highlight(n,a):n}})])}},p=u,d=(n("50cb"),n("2877")),f=Object(d["a"])(p,r,a,!1,null,null,null);e["a"]=f.exports},"72f4":function(t,e,n){var r={"./Directive.vue":"8762","./GreetingExample.vue":"c8c9"};function a(t){var e=o(t);return n(e)}function o(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}a.keys=function(){return Object.keys(r)},a.resolve=o,t.exports=a,a.id="72f4"},"7fdf":function(t,e,n){"use strict";n("e71b")},8762:function(t,e,n){"use strict";n.r(e),e["default"]='<template>\r\n  <div class="greeting" v-console:warn="\'Name is \' + name">\r\n    <h1>Hello {{ name }}!</h1>\r\n\r\n    <div>\r\n      <input style="border: 1px solid blue" type="text" v-model="name" />\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  data() {\r\n    return {\r\n      name: \'Jane Doe\'\r\n    }\r\n  }\r\n}\r\n<\/script>\r\n'},ac5d:function(t,e,n){},b274:function(t,e,n){"use strict";n("ac5d")},c8c9:function(t,e,n){"use strict";n.r(e),e["default"]="<template>\r\n  <div class=\"greeting\">\r\n    Hello {{ name }}!\r\n  </div>\r\n</template>\r\n\r\n<script>\r\nexport default {\r\n  props: ['name']\r\n}\r\n<\/script>\r\n\r\n<style scoped>\r\n.greeting {\r\n  color: green;\r\n}\r\n</style>\r\n"},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},dc2d:function(t,e,n){},e37d:function(t,e,n){},e71b:function(t,e,n){}});
//# sourceMappingURL=app.a7e16e17.js.map