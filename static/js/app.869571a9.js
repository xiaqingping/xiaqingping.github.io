(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["app"],{0:function(e,n,t){e.exports=t("56d7")},"0f9a":function(e,n,t){"use strict";t.r(n);var r=t("bc3a"),a=t.n(r),o=t("5c96"),u=t("4360"),i="Admin-Token";function c(){return localStorage.getItem(i)}function s(e){return localStorage.setItem(i,e)}var d=a.a.create({baseURL:"/prod-api",timeout:3e4});d.interceptors.request.use((function(e){var n=c();return u["a"].getters.token&&n&&(e.headers["Authorization"]="Bearer "+n),e}),(function(e){return console.log(e),Promise.reject(e)})),d.interceptors.response.use((function(e){return e.access_token?(Object(o["Message"])({message:e.message||"Error",type:"error",duration:5e3}),Promise.reject(new Error(e.message||"Error"))):e}),(function(e){return console.log("err"+e),Object(o["Message"])({message:e.message,type:"error",duration:5e3}),Promise.reject(e)}));var f=d,l="/apis/";function m(e){var n=e.username,t=e.password;return f(l+"auth/oauth/token?grant_type=password&username=".concat(n,"&password=").concat(t,"&scope=all"),{method:"POST",headers:{Authorization:"Basic bXdrLWZpbmFsOjEyMzQ1Ng=="}})}var p={token:c(),name:"",avatar:"",introduction:"",roles:[{id:2,parentId:0,name:"系统管理",children:[{id:3,parentId:2,children:[{id:5,parentId:3,children:[],name:"用户管理"},{id:6,parentId:3,children:[],name:"角色管理"},{id:7,parentId:3,children:[],name:"部门管理"},{id:8,parentId:3,children:[],name:"资源管理"}],name:"权限管理"},{id:4,parentId:2,children:[],name:"系统配置"},{id:9,parentId:2,children:[],name:"微服务名称配置"},{id:10,parentId:2,children:[],name:"第三方系统接入配置"}]}]},h={SET_TOKEN:function(e,n){e.token=n},SET_INTRODUCTION:function(e,n){e.introduction=n},SET_NAME:function(e,n){e.name=n},SET_AVATAR:function(e,n){e.avatar=n},SET_ROLES:function(e,n){e.roles=n}},g={login:function(e,n){var t=e.commit,r=n.payload;return new Promise((function(e,n){m(r).then((function(n){var r=n.data;console.log(r),t("SET_TOKEN",r.access_token),s(r.access_token),e()})).catch((function(e){n(e)}))}))},logout:function(e){e.commit,e.state,e.dispatch}};n["default"]={namespaced:!0,state:p,mutations:h,actions:g}},"24ab":function(e,n,t){e.exports={theme:"#1890ff"}},4360:function(e,n,t){"use strict";t("a481"),t("ac6a");var r=t("2b0e"),a=t("2f62"),o=(t("7f7f"),{token:function(e){return e.user.token},avatar:function(e){return e.user.avatar},name:function(e){return e.user.name}}),u=o;r["default"].use(a["a"]);var i=t("c653"),c=i.keys().reduce((function(e,n){var t=n.replace(/^\.\/(.*)\.\w+$/,"$1"),r=i(n);return e[t]=r.default,e}),{}),s=new a["a"].Store({modules:c,getters:u});n["a"]=s},"56d7":function(e,n,t){"use strict";t.r(n);var r={};t.r(r),t.d(r,"parseTime",(function(){return T})),t.d(r,"formatTime",(function(){return k})),t.d(r,"timeAgo",(function(){return S})),t.d(r,"numberFormatter",(function(){return I})),t.d(r,"toThousandFilter",(function(){return O})),t.d(r,"uppercaseFirst",(function(){return M}));t("456d"),t("ac6a"),t("cadf"),t("551c"),t("f751"),t("097d");var a=t("2b0e"),o=(t("f5df"),t("5c96")),u=t.n(o),i=(t("24ab"),t("b20f"),function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)}),c=[],s={name:"App"},d=s,f=t("2877"),l=Object(f["a"])(d,i,c,!1,null,null,null),m=l.exports,p=t("4360"),h=t("8c4f");a["default"].use(h["a"]);var g=[{path:"/login",component:function(){return t.e("chunk-dab352aa").then(t.bind(null,"9ed6"))},hidden:!0},{path:"/",component:function(){return t.e("chunk-4767b702").then(t.bind(null,"162e"))},hidden:!0}],v=function(){return new h["a"]({mode:"history",scrollBehavior:function(){return{y:0}},routes:g})},b=v(),y=b,w=(t("6b54"),t("a481"),t("c5f6"),t("4917"),t("4f7f"),t("5df3"),t("1c4c"),t("28a5"),t("f576"),t("3b2b"),t("53ca"));function T(e,n){if(0===arguments.length||!e)return null;var t,r=n||"{y}-{m}-{d} {h}:{i}:{s}";"object"===Object(w["a"])(e)?t=e:("string"===typeof e&&(e=/^[0-9]+$/.test(e)?parseInt(e):e.replace(new RegExp(/-/gm),"/")),"number"===typeof e&&10===e.toString().length&&(e*=1e3),t=new Date(e));var a={y:t.getFullYear(),m:t.getMonth()+1,d:t.getDate(),h:t.getHours(),i:t.getMinutes(),s:t.getSeconds(),a:t.getDay()},o=r.replace(/{([ymdhisa])+}/g,(function(e,n){var t=a[n];return"a"===n?["日","一","二","三","四","五","六"][t]:t.toString().padStart(2,"0")}));return o}function k(e,n){e=10===(""+e).length?1e3*parseInt(e):+e;var t=new Date(e),r=Date.now(),a=(r-t)/1e3;return a<30?"刚刚":a<3600?Math.ceil(a/60)+"分钟前":a<86400?Math.ceil(a/3600)+"小时前":a<172800?"1天前":n?T(e,n):t.getMonth()+1+"月"+t.getDate()+"日"+t.getHours()+"时"+t.getMinutes()+"分"}function E(e,n){return 1===e?e+n:e+n+"s"}function S(e){var n=Date.now()/1e3-Number(e);return n<3600?E(~~(n/60)," minute"):n<86400?E(~~(n/3600)," hour"):E(~~(n/86400)," day")}function I(e,n){for(var t=[{value:1e18,symbol:"E"},{value:1e15,symbol:"P"},{value:1e12,symbol:"T"},{value:1e9,symbol:"G"},{value:1e6,symbol:"M"},{value:1e3,symbol:"k"}],r=0;r<t.length;r++)if(e>=t[r].value)return(e/t[r].value).toFixed(n).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+t[r].symbol;return e.toString()}function O(e){return(+e||0).toString().replace(/^-?\d+/g,(function(e){return e.replace(/(?=(?!\b)(\d{3})+$)/g,",")}))}function M(e){return e.charAt(0).toUpperCase()+e.slice(1)}a["default"].use(u.a,{size:"medium"}),Object.keys(r).forEach((function(e){a["default"].filter(e,r[e])})),a["default"].config.productionTip=!1,new a["default"]({el:"#app",router:y,store:p["a"],render:function(e){return e(m)}})},b20f:function(e,n,t){e.exports={menuText:"#bfcbd9",menuActiveText:"#409EFF",subMenuActiveText:"#f4f4f5",menuBg:"#304156",menuHover:"#263445",subMenuBg:"#1f2d3d",subMenuHover:"#001528",sideBarWidth:"210px"}},c653:function(e,n,t){var r={"./user.js":"0f9a"};function a(e){var n=o(e);return t(n)}function o(e){var n=r[e];if(!(n+1)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id="c653"}},[[0,"runtime","chunk-elementUI","chunk-libs"]]]);