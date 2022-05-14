(function(){"use strict";var t={2174:function(t,e,o){var r=o(8935),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("keep-alive",{attrs:{exclude:"Detail"}},[o("router-view")],1),o("main-tabbar")],1)},i=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("tab-bar",[r("tab-bar-item",{attrs:{path:"/home","text-color-style":"red"}},[r("img",{attrs:{slot:"item-logo",src:o(9537),alt:""},slot:"item-logo"}),r("img",{attrs:{slot:"item-logo-active",src:o(996),alt:""},slot:"item-logo-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("首页")])]),r("tab-bar-item",{attrs:{path:"/variety","text-color-style":"red"}},[r("img",{attrs:{slot:"item-logo",src:o(4166),alt:""},slot:"item-logo"}),r("img",{attrs:{slot:"item-logo-active",src:o(1488),alt:""},slot:"item-logo-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("分类")])]),r("tab-bar-item",{attrs:{path:"shoppingcart","text-color-style":"red"}},[r("img",{attrs:{slot:"item-logo",src:o(720),alt:""},slot:"item-logo"}),r("img",{attrs:{slot:"item-logo-active",src:o(4150),alt:""},slot:"item-logo-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("购物车")])]),r("tab-bar-item",{attrs:{path:"profile","text-color-style":"red"}},[r("img",{attrs:{slot:"item-logo",src:o(8561),alt:""},slot:"item-logo"}),r("img",{attrs:{slot:"item-logo-active",src:o(5120),alt:""},slot:"item-logo-active"}),r("div",{attrs:{slot:"item-text"},slot:"item-text"},[t._v("我的")])])],1)},s=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"TabBar"}},[t._t("default")],2)},l=[],u={name:"TabBar"},d=u,m=o(1001),f=(0,m.Z)(d,c,l,!1,null,"77b00e9e",null),p=f.exports,h=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"TabBar-item",on:{click:t.changUrl}},[t.isActive?o("div",[t._t("item-logo-active")],2):o("div",[t._t("item-logo")],2),o("div",{style:t.isColorStyle},[t._t("item-text")],2)])},v=[],g={name:"TabBar-item",props:{path:String,textColorStyle:{type:String,default:"red"}},computed:{isActive(){return-1!==this.$route.path.indexOf(this.path)},isColorStyle(){return this.isActive?{color:this.textColorStyle}:{}}},methods:{changUrl(){console.log(this.path),this.$router.replace(this.path)}}},b=g,y=(0,m.Z)(b,h,v,!1,null,"d1065c58",null),x=y.exports,C={name:"MainTabbar",components:{TabBar:p,TabBarItem:x}},w=C,_=(0,m.Z)(w,a,s,!1,null,"369e17fa",null),k=_.exports,S={name:"App",components:{MainTabbar:k}},T=S,E=(0,m.Z)(T,n,i,!1,null,null,null),O=E.exports,Z=o(2809);const A=()=>Promise.all([o.e(701),o.e(189),o.e(570)]).then(o.bind(o,1048)),P=()=>o.e(891).then(o.bind(o,9891)),j=()=>Promise.all([o.e(701),o.e(60)]).then(o.bind(o,2927)),$=()=>o.e(415).then(o.bind(o,415)),B=()=>Promise.all([o.e(701),o.e(189),o.e(362)]).then(o.bind(o,7015));r.Z.use(Z.Z);const N=[{path:"",redirect:"/home"},{path:"/home",component:A},{path:"/profile",component:$},{path:"/shoppingcart",component:j},{path:"/variety",component:P},{path:"/detail/:iid",component:B}],L=new Z.Z({routes:N,mode:"history"});var M=L,D=o(4665),F={changeActiveItem(t,e){t.activeindex=e},changeHomeY(t,e){t.savehomeY=e},addCounter(t,e){e.count+=1},addOneGood(t,e){t.shopCart.push(e)},ChangeItemChecked(t,e){t.shopCart[e.index].checked=!e.isActive},AllProductChecked(t){t.shopCart.forEach((t=>t.checked=!0))},AllProductDisChecked(t){t.shopCart.forEach((t=>t.checked=!1))}},I={addProduct(t,e){return new Promise(((o,r)=>{let n=t.state.shopCart.find((t=>t.iid===e.iid));n?(o("该商品数量+1"),t.commit("addCounter",n)):(o("成功加入该新商品"),t.commit("addOneGood",e))}))}},U={shopCartLength(t){return t.shopCart.length},shopCartList(t){return t.shopCart}};r.Z.use(D.ZP);const Y={activeindex:0,savehomeY:0,shopCart:[]},q=new D.ZP.Store({state:Y,mutations:F,getters:U,actions:I,modules:{}});var G=q,H=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],attrs:{id:"toast"}},[t._v(" "+t._s(t.message)+" ")])},K=[],z={name:"Toast",data(){return{message:"",isShow:!1}},methods:{changeShow(t,e){this.message=t,this.isShow=!0,setTimeout((()=>{this.message="",this.isShow=!1}),e)}}},J=z,Q=(0,m.Z)(J,H,K,!1,null,"26aff395",null),R=Q.exports;const V={install:function(t){const e=t.extend(R),o=new e;o.$mount(document.createElement("div")),document.body.appendChild(o.$el),t.prototype.$toast=o}};var W=V,X=o(1102),tt=o.n(X),et=o(2228);r.Z.config.productionTip=!1,r.Z.prototype.$bus=new r.Z,r.Z.use(W),tt().attach(document.body),r.Z.use(et.Z,{loading:o(8085)}),new r.Z({render:t=>t(O),router:M,store:G}).$mount("#app")},4166:function(t,e,o){t.exports=o.p+"img/category.7181e1c2.svg"},1488:function(t,e,o){t.exports=o.p+"img/category_active.a33536c0.svg"},9537:function(t,e,o){t.exports=o.p+"img/home.cd35010f.svg"},996:function(t,e,o){t.exports=o.p+"img/home_active.1ba3ef5a.svg"},8561:function(t,e,o){t.exports=o.p+"img/profile.f85b0ca1.svg"},5120:function(t,e,o){t.exports=o.p+"img/profile_active.999a4310.svg"},720:function(t,e,o){t.exports=o.p+"img/shopcart.03205c0d.svg"},4150:function(t,e,o){t.exports=o.p+"img/shopcart_active.8521e9d3.svg"},8085:function(t,e,o){t.exports=o.p+"img/123.d572f2c9.jpg"}},e={};function o(r){var n=e[r];if(void 0!==n)return n.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,o),i.exports}o.m=t,function(){var t=[];o.O=function(e,r,n,i){if(!r){var a=1/0;for(u=0;u<t.length;u++){r=t[u][0],n=t[u][1],i=t[u][2];for(var s=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(o.O).every((function(t){return o.O[t](r[c])}))?r.splice(c--,1):(s=!1,i<a&&(a=i));if(s){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[r,n,i]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var r in e)o.o(e,r)&&!o.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){o.f={},o.e=function(t){return Promise.all(Object.keys(o.f).reduce((function(e,r){return o.f[r](t,e),e}),[]))}}(),function(){o.u=function(t){return"js/"+t+"."+{60:"44fc1fa9",189:"6cdbdd59",362:"81abf68e",415:"aafb91b5",570:"ac6fa328",701:"0cc6a2bf",891:"b2a7b956"}[t]+".js"}}(),function(){o.miniCssF=function(t){return"css/"+t+"."+{60:"31690525",362:"602591aa",570:"da3395c4"}[t]+".css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="supermall:";o.l=function(r,n,i,a){if(t[r])t[r].push(n);else{var s,c;if(void 0!==i)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==e+i){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",e+i),s.src=r),t[r]=[n];var m=function(e,o){s.onerror=s.onload=null,clearTimeout(f);var n=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((function(t){return t(o)})),e)return e(o)},f=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.p="/"}(),function(){var t=function(t,e,o,r){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var i=function(i){if(n.onerror=n.onload=null,"load"===i.type)o();else{var a=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,n.parentNode.removeChild(n),r(c)}};return n.onerror=n.onload=i,n.href=e,document.head.appendChild(n),n},e=function(t,e){for(var o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var n=o[r],i=n.getAttribute("data-href")||n.getAttribute("href");if("stylesheet"===n.rel&&(i===t||i===e))return n}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){n=a[r],i=n.getAttribute("data-href");if(i===t||i===e)return n}},r=function(r){return new Promise((function(n,i){var a=o.miniCssF(r),s=o.p+a;if(e(a,s))return n();t(r,s,n,i)}))},n={143:0};o.f.miniCss=function(t,e){var o={60:1,362:1,570:1};n[t]?e.push(n[t]):0!==n[t]&&o[t]&&e.push(n[t]=r(t).then((function(){n[t]=0}),(function(e){throw delete n[t],e})))}}(),function(){var t={143:0};o.f.j=function(e,r){var n=o.o(t,e)?t[e]:void 0;if(0!==n)if(n)r.push(n[2]);else{var i=new Promise((function(o,r){n=t[e]=[o,r]}));r.push(n[2]=i);var a=o.p+o.u(e),s=new Error,c=function(r){if(o.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,n[1](s)}};o.l(a,c,"chunk-"+e,e)}},o.O.j=function(e){return 0===t[e]};var e=function(e,r){var n,i,a=r[0],s=r[1],c=r[2],l=0;if(a.some((function(e){return 0!==t[e]}))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);if(c)var u=c(o)}for(e&&e(r);l<a.length;l++)i=a[l],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(u)},r=self["webpackChunksupermall"]=self["webpackChunksupermall"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(2174)}));r=o.O(r)})();
//# sourceMappingURL=app.b1cf367a.js.map