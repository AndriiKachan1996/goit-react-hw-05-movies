"use strict";(self.webpackChunkAndriiKachan1996=self.webpackChunkAndriiKachan1996||[]).push([[779],{519:function(t,n,e){function r(t,n,e,r,a,c,u){try{var o=t[c](u),i=o.value}catch(s){return void e(s)}o.done?n(i):Promise.resolve(i).then(r,a)}function a(t){return function(){var n=this,e=arguments;return new Promise((function(a,c){var u=t.apply(n,e);function o(t){r(u,a,c,o,i,"next",t)}function i(t){r(u,a,c,o,i,"throw",t)}o(void 0)}))}}e.d(n,{al:function(){return g},M1:function(){return d},Zu:function(){return f},tx:function(){return h},rK:function(){return k},gH:function(){return m},Rw:function(){return s}});var c=e(687),u=e.n(c),o="427714332144f4d577c0c71ca226b2b3",i="https://api.themoviedb.org/3/";function s(){return p.apply(this,arguments)}function p(){return(p=a(u().mark((function t(){var n,e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(i,"trending/all/week?api_key=").concat(o));case 3:if(200!==(n=t.sent).status){t.next=11;break}return t.next=7,n.json();case 7:return e=t.sent,t.abrupt("return",e.results.map((function(t){return{id:t.id,name:t.name||t.title,poster_path:g(t.poster_path)}})));case 11:return t.abrupt("return",[]);case 12:t.next=17;break;case 14:return t.prev=14,t.t0=t.catch(0),t.abrupt("return",new Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(t.t0.message," \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u0444\u0438\u043b\u044c\u043c\u0430\u043c ")));case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))).apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=a(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(i,"movie/").concat(n,"?api_key=").concat(o,"&language=en-US"));case 3:if(200!==(e=t.sent).status){t.next=11;break}return t.next=7,e.json();case 7:return r=t.sent,t.abrupt("return",r);case 11:return t.abrupt("return",{});case 12:t.next=17;break;case 14:return t.prev=14,t.t0=t.catch(0),t.abrupt("return",new Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(t.t0.message," \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u0444\u0438\u043b\u044c\u043c\u0443 ").concat(n,"  ")));case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))).apply(this,arguments)}function h(t){return x.apply(this,arguments)}function x(){return(x=a(u().mark((function t(n){var e,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(i,"movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:if(200!==(e=t.sent).status){t.next=11;break}return t.next=7,e.json();case 7:return r=t.sent,t.abrupt("return",null===r||void 0===r?void 0:r.results.map((function(t){return{author:t.author,content:t.content,id:t.id}})));case 11:return t.abrupt("return",[]);case 12:t.next=17;break;case 14:return t.prev=14,t.t0=t.catch(0),t.abrupt("return",new Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(t.t0.message," \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u043e\u0442\u0437\u044b\u0432\u043e\u0432 \u043a \u0444\u0438\u043b\u044c\u043c\u0443 ").concat(n,"  ")));case 17:case"end":return t.stop()}}),t,null,[[0,14]])})))).apply(this,arguments)}function d(t){return v.apply(this,arguments)}function v(){return(v=a(u().mark((function t(n){var e,r,a;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("".concat(i,"movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US&page=1"));case 3:if(200!==(e=t.sent).status){t.next=12;break}return t.next=7,e.json();case 7:return r=t.sent,a=r.cast.map((function(t){return{id:t.id,name:t.name,original_name:t.original_name,popularity:t.popularity,profile_path:g(t.profile_path),character:t.character}})),t.abrupt("return",a);case 12:return t.abrupt("return",[]);case 13:t.next=18;break;case 15:return t.prev=15,t.t0=t.catch(0),t.abrupt("return",new Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(t.t0.message," \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f \u0430\u043a\u0442\u0435\u0440\u043e\u0432 \u0444\u0438\u043b\u044c\u043c\u0430 ").concat(n,"  ")));case 18:case"end":return t.stop()}}),t,null,[[0,15]])})))).apply(this,arguments)}function m(){return b.apply(this,arguments)}function b(){return b=a(u().mark((function t(){var n,e,r,a=arguments;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=a.length>0&&void 0!==a[0]?a[0]:"",t.prev=1,""!==n){t.next=4;break}return t.abrupt("return",[]);case 4:return t.next=6,fetch("".concat(i,"search/movie?api_key=").concat(o,"&language=en-US&query=").concat(n,"&page=1&include_adult=false"));case 6:if(200!==(e=t.sent).status){t.next=14;break}return t.next=10,e.json();case 10:return r=t.sent,t.abrupt("return",r.results.map((function(t){return{id:t.id,name:t.name||t.title,poster_path:g(t.poster_path)}})));case 14:return t.abrupt("return",[]);case 15:t.next=20;break;case 17:return t.prev=17,t.t0=t.catch(1),t.abrupt("return",new Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430 ".concat(t.t0.message," \u043f\u043e\u0438\u0441\u043a\u0430 \u0444\u0438\u043b\u044c\u043c\u0430 \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 ").concat(n)));case 20:case"end":return t.stop()}}),t,null,[[1,17]])}))),b.apply(this,arguments)}function g(t){return t?"https://image.tmdb.org/t/p/w500"+t:"https://via.placeholder.com/300x400/bdc5f2/2b2323?text=Image+not+found"}var k=function(t){return""!==t?"(".concat(new Date(t).getFullYear(),")"):""}},779:function(t,n,e){e.r(n),e.d(n,{default:function(){return v}});var r,a,c,u=e(439),o=e(791),i=e(689),s=e(519),p=e(168),f=e(931),l=f.Z.ul(r||(r=(0,p.Z)(["\n  border: 1px solid grey;\n  padding: 40px;\n  background-color: #fcf7f5;\n  border-radius: 25px;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),h=f.Z.h2(a||(a=(0,p.Z)(["\n  font-size: 35px;\n  font-family: math;\n  margin: 30px 0;\n"]))),x=f.Z.p(c||(c=(0,p.Z)(["\n  font-size: 25px;\n  font-family: math;\n  margin: 30px 0;\n"]))),d=e(184),v=function(){var t=(0,o.useState)(null),n=(0,u.Z)(t,2),e=n[0],r=n[1],a=(0,i.UO)().moveID;return(0,o.useEffect)((function(){e||(0,s.tx)(a).then((function(t){r(t)}))}),[a,e]),0!==(null===e||void 0===e?void 0:e.length)?(0,d.jsx)(l,{children:e&&e.map((function(t){return(0,d.jsxs)("li",{children:[(0,d.jsxs)(h,{children:["Author:",t.author]}),(0,d.jsx)(x,{children:t.content})]},t.id)}))}):0===(null===e||void 0===e?void 0:e.length)?(0,d.jsx)("p",{children:"We don't have any reviews for this movie"}):void 0}}}]);
//# sourceMappingURL=779.368fe8d1.chunk.js.map