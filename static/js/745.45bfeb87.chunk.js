"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[745],{194:function(e,a,t){t.d(a,{Z:function(){return N}});var i="Gallery_gallery__RNraJ",r="Gallery_section__-vRp8",o=t(439),s={gallery_card:"MovieCard_gallery_card__AgP-w",movie_img:"MovieCard_movie_img__OgQxA",movie_describtion:"MovieCard_movie_describtion__H-1+r",movie_genresList:"MovieCard_movie_genresList__d6+3t",movie_average:"MovieCard_movie_average__j2fxM",modal:"MovieCard_modal__KQdO1",modal_auth:"MovieCard_modal_auth__1RNxf",modal_body:"MovieCard_modal_body__otckZ",modal_content:"MovieCard_modal_content__8rlmv",modal_close:"MovieCard_modal_close__o9iy+",modal_data:"MovieCard_modal_data__bmwvL",movie_image:"MovieCard_movie_image__ajhuA"},n=t(791),l="Modal_modal__DJDMv",c="Modal_modal_body__TApFM",d="Modal_modal_content__-WSAd",_="Modal_modal_close__DT8Wk",m=t(164),u=t(184),v=document.querySelector("#modal-root"),h=function(e){var a=e.close,t=e.children,i=(e.approve,(0,n.useCallback)((function(e){var t=e.target,i=e.currentTarget,r=e.code;t!==i&&"Escape"!==r||a()}),[a]));return(0,n.useEffect)((function(){return document.addEventListener("keydown",i),document.body.style.overflow="hidden",function(){window.removeEventListener("keydown",i),document.body.style.overflow=""}}),[i]),(0,m.createPortal)((0,u.jsx)("div",{id:"movie",className:l,onClick:i,children:(0,u.jsx)("div",{className:c,children:(0,u.jsxs)("div",{className:d,children:[(0,u.jsx)("button",{className:_,onClick:a,children:"X"}),t]})})}),v)},p={movie_inform:"ModalDetails_movie_inform__KBfaX",movie_title:"ModalDetails_movie_title__PcrrN",card:"ModalDetails_card__QfxCv",image:"ModalDetails_image__fIycM",list_category:"ModalDetails_list_category__B73-T",list_data:"ModalDetails_list_data__2CL+3",genres:"ModalDetails_genres__Jbbbs",movie_about:"ModalDetails_movie_about__zmNhC",about:"ModalDetails_about__omTKp",average:"ModalDetails_average__pYNMM",count:"ModalDetails_count__eT4q8"},f=function(e){var a=e.item,t=a.poster_path,i=a.original_title,r=a.vote_average,o=a.vote_count,s=a.popularity,n=a.overview,l="https://image.tmdb.org/t/p/w500".concat(t);return(0,u.jsxs)("div",{className:p.movie_card,children:[(0,u.jsx)("img",{src:l,alt:i,className:p.image,loading:"lazy"}),(0,u.jsxs)("div",{className:p.movie_descr,children:[(0,u.jsx)("p",{className:p.movie_title,children:i}),(0,u.jsx)("table",{className:p.movie_inform,children:(0,u.jsxs)("tbody",{children:[(0,u.jsxs)("tr",{className:p.movie_info_item,children:[(0,u.jsx)("td",{className:p.list_category,children:"Vote/Votes"}),(0,u.jsxs)("td",{className:p.list_data,children:[(0,u.jsx)("span",{className:p.average,children:r.toFixed(1)})," /"," ",(0,u.jsx)("span",{className:p.count,children:o})]})]}),(0,u.jsxs)("tr",{className:p.movie_info_item,children:[(0,u.jsx)("td",{className:p.list_category,children:"Popularity"}),(0,u.jsx)("td",{className:p.list_data,children:s.toFixed(1)})]}),(0,u.jsxs)("tr",{className:p.movie_info_item,children:[(0,u.jsx)("td",{className:p.list_category,children:"Original Title"}),(0,u.jsx)("td",{className:p.list_data,children:i})]}),(0,u.jsx)("tr",{className:p.movie_info_item,children:(0,u.jsx)("td",{className:p.list_category,children:"Genre"})})]})}),(0,u.jsx)("p",{children:"About"}),(0,u.jsxs)("p",{className:p.movie_about,children:["$",n]})]})]})},x=f;f.defaultProps={items:[]};var g=function(e){var a=e.item,t=(0,n.useState)(!1),i=(0,o.Z)(t,2),r=i[0],l=i[1],c=a.poster_path,d=a.original_title,_=a.id,m=a.vote_average,v="https://image.tmdb.org/t/p/w500".concat(c);return(0,u.jsxs)("li",{className:s.gallery_card,onClick:function(){return l(!0)},children:[(0,u.jsx)("img",{id:a.id,className:s.movie_img,src:v,alt:a.original_title,loading:"lazy"}),(0,u.jsx)("p",{className:s.movie_title,children:d}),(0,u.jsxs)("div",{className:s.movie_describtion,children:[(0,u.jsx)("ul",{className:s.movie_genresList}),(0,u.jsx)("p",{children:"2022"}),(0,u.jsx)("p",{className:s.movie_average,children:m.toFixed(1)})]}),r&&(0,u.jsxs)(h,{close:function(){return l(!1)},children:[(0,u.jsx)("h1",{children:"\u0422\u0443\u0442 \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u041c\u043e\u0434\u0430\u043b\u043a\u0430"}),(0,u.jsx)(x,{item:a})]})]},_)},j=function(e){var a=e.items;return(0,u.jsx)("div",{className:r,children:(0,u.jsx)("ul",{className:i,children:a.map((function(e){return(0,u.jsx)(g,{item:e},e.id)}))})})},N=j;j.defaultProps={items:[]}},921:function(e,a,t){t.d(a,{Z:function(){return o}});var i={load_more:"LoadMoreButton_load_more__p8--J"},r=t(184),o=function(){return(0,r.jsx)("div",{className:i.section,children:(0,r.jsx)("button",{type:"button",className:i.load_more,children:"Load more"})})}},745:function(e,a,t){t.r(a),t.d(a,{default:function(){return j}});var i=t(433),r=t(683),o=t(861),s=t(439),n=t(757),l=t.n(n),c=t(791),d="HomePage_section__bINJC",_="HomePage_container__uNu-e",m=t(194),u=t(921),v=t(294),h="6de1479941bef67a0c224787b78603f1",p="https://api.themoviedb.org/3/";v.Z.create({baseURL:"https://api.themoviedb.org/3/"});function f(){return x.apply(this,arguments)}function x(){return(x=(0,o.Z)(l().mark((function e(){var a,t,i,r;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={method:"GET",headers:{accept:"application/json"}},e.next=3,fetch("".concat(p,"/trending/movie/day?api_key=").concat(h),a);case 3:return t=e.sent,e.next=6,t.json();case 6:return i=e.sent,e.next=9,i.results;case 9:return r=e.sent,e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var g=t(184),j=function(){var e=(0,c.useState)({items:[],loading:!1,error:null}),a=(0,s.Z)(e,2),t=a[0],n=a[1];(0,c.useEffect)((function(){var e=function(){var e=(0,o.Z)(l().mark((function e(){var a;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n((function(e){return(0,r.Z)((0,r.Z)({},e),{},{loading:!0,error:null})})),e.next=4,f();case 4:a=e.sent,n((function(e){return(0,r.Z)((0,r.Z)({},e),{},{items:(0,i.Z)(a)})})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),n((function(a){return(0,r.Z)((0,r.Z)({},a),{},{error:e.t0})}));case 11:return e.prev=11,n((function(e){return(0,r.Z)((0,r.Z)({},e),{},{loading:!1})})),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]);var v=t.items,h=t.loading,p=t.error;return(0,g.jsx)("div",{className:d,children:(0,g.jsxs)("div",{className:_,children:[v.length>0&&(0,g.jsx)(m.Z,{items:v}),h&&(0,g.jsx)("p",{children:"...loading"}),p&&(0,g.jsx)("p",{children:"...load failed"}),(0,g.jsx)(u.Z,{})]})})}}}]);
//# sourceMappingURL=745.45bfeb87.chunk.js.map