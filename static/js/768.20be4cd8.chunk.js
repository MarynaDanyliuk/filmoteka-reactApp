"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[768],{916:function(e,n,t){t.d(n,{Z:function(){return O}});var i,a,o,r,s,d,l,c,m=t(439),_={movie_img:"MovieCard_movie_img__OgQxA",movie_genresList:"MovieCard_movie_genresList__d6+3t",movie_average:"MovieCard_movie_average__j2fxM",modal:"MovieCard_modal__KQdO1",modal_auth:"MovieCard_modal_auth__1RNxf",modal_body:"MovieCard_modal_body__otckZ",modal_content:"MovieCard_modal_content__8rlmv",modal_close:"MovieCard_modal_close__o9iy+",modal_data:"MovieCard_modal_data__bmwvL",movie_image:"MovieCard_movie_image__ajhuA"},p=t(791),u=t(164),x=t(168),h=t(924),v=h.ZP.div(i||(i=(0,x.Z)(["\n  position: fixed;\n\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: transparent;\n\n  overflow-y: auto;\n  overflow-x: hidden;\n  transition: all cubic-bezier(0.86, 0, 0.07, 1);\n"]))),f=h.ZP.div(a||(a=(0,x.Z)(["\n  min-height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 30px 10px;\n"]))),g=h.ZP.div(o||(o=(0,x.Z)(["\n  position: relative;\n  border-radius: 8px;\n  padding: 40px 20px;\n\n  background-color: #fff;\n  width: 100%;\n  max-width: 280px;\n\n  @media (min-width: 768px) {\n    display: flex;\n    flex-direction: row;\n    width: fit-content;\n    max-width: 704px;\n  }\n\n  @media (min-width: 1280px) {\n    max-width: 806px;\n  }\n"]))),b=h.ZP.button(r||(r=(0,x.Z)(["\n  position: absolute;\n  padding: 18px;\n  right: 0;\n  top: 0;\n  cursor: pointer;\n  border: none;\n  background-color: transparent;\n"]))),j=t(184),w=document.querySelector("#modal-root"),y=function(e){var n=e.close,t=e.children,i=(e.approve,(0,p.useCallback)((function(e){var t=e.target,i=e.currentTarget,a=e.code;t!==i&&"Escape"!==a||n()}),[n]));return(0,p.useEffect)((function(){return document.addEventListener("keydown",i),document.body.style.overflow="hidden",function(){window.removeEventListener("keydown",i),document.body.style.overflow=""}}),[i]),console.log("Close function:",n),(0,u.createPortal)((0,j.jsx)(v,{id:"movie",onClick:i,children:(0,j.jsx)(f,{children:(0,j.jsxs)(g,{children:[(0,j.jsx)(b,{onClick:n,type:"button",children:"X"}),t]})})}),w)},Z={movie_inform:"ModalDetails_movie_inform__8S95Y",movie_title:"ModalDetails_movie_title__KMl17",card:"ModalDetails_card__k6NnO",image:"ModalDetails_image__VyZt4",list_category:"ModalDetails_list_category__AtcKw",list_data:"ModalDetails_list_data__AO8hk",genres:"ModalDetails_genres__ZkSuM",movie_about:"ModalDetails_movie_about__2ekXk",about:"ModalDetails_about__pYwoN",average:"ModalDetails_average__b-kd1",count:"ModalDetails_count__TVN+I"},N=function(e){var n=e.item,t=n.poster_path,i=n.original_title,a=n.vote_average,o=n.vote_count,r=n.popularity,s=n.overview,d="https://image.tmdb.org/t/p/w500".concat(t);return(0,j.jsxs)("div",{className:Z.movie_card,children:[(0,j.jsx)("img",{src:d,alt:i,className:Z.image,loading:"lazy"}),(0,j.jsxs)("div",{className:Z.movie_descr,children:[(0,j.jsx)("p",{className:Z.movie_title,children:i}),(0,j.jsx)("table",{className:Z.movie_inform,children:(0,j.jsxs)("tbody",{children:[(0,j.jsxs)("tr",{className:Z.movie_info_item,children:[(0,j.jsx)("td",{className:Z.list_category,children:"Vote/Votes"}),(0,j.jsxs)("td",{className:Z.list_data,children:[(0,j.jsx)("span",{className:Z.average,children:a.toFixed(1)})," /"," ",(0,j.jsx)("span",{className:Z.count,children:o})]})]}),(0,j.jsxs)("tr",{className:Z.movie_info_item,children:[(0,j.jsx)("td",{className:Z.list_category,children:"Popularity"}),(0,j.jsx)("td",{className:Z.list_data,children:r.toFixed(1)})]}),(0,j.jsxs)("tr",{className:Z.movie_info_item,children:[(0,j.jsx)("td",{className:Z.list_category,children:"Original Title"}),(0,j.jsx)("td",{className:Z.list_data,children:i})]}),(0,j.jsx)("tr",{className:Z.movie_info_item,children:(0,j.jsx)("td",{className:Z.list_category,children:"Genre"})})]})}),(0,j.jsx)("p",{children:"About"}),(0,j.jsxs)("p",{className:Z.movie_about,children:["$",s]})]})]})},k=N;N.defaultProps={items:[]};var M,C=h.ZP.li(s||(s=(0,x.Z)(["\n  display: flex;\n  justify-content: center;\n\n  transition: transform 400ms easy-out;\n  &:hover {\n    transform: scale(1.07);\n  }\n"]))),P=h.ZP.img(d||(d=(0,x.Z)(["\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  border-radius: 10px;\n  border-radius: 10px;\n  width: 280px;\n  height: 402px;\n  object-fit: cover;\n\n  @media "," {\n    width: 336px;\n    height: 455px;\n  }\n  @media "," {\n    width: 394px;\n    height: 574px;\n  }\n"])),(function(e){return e.theme.media.tab}),(function(e){return e.theme.media.desk})),D=(h.ZP.h2(l||(l=(0,x.Z)([""]))),h.ZP.div(c||(c=(0,x.Z)(["\n  display: flex;\n  font-size: 20px;\n  line-height: 24px;\n  color: #ff6b08;\n  align-items: baseline;\n"])))),L=function(e){var n=e.item,t=(0,p.useState)(!1),i=(0,m.Z)(t,2),a=i[0],o=i[1],r=n.poster_path,s=n.original_title,d=n.id,l=n.vote_average,c="https://image.tmdb.org/t/p/w500".concat(r);return(0,j.jsx)(C,{onClick:function(){return o(!0)},children:(0,j.jsxs)("div",{children:[(0,j.jsx)(P,{id:n.id,src:c,alt:n.original_title,loading:"lazy"}),(0,j.jsx)("p",{className:_.movie_title,children:s}),(0,j.jsxs)(D,{children:[(0,j.jsx)("ul",{className:_.movie_genresList}),(0,j.jsx)("p",{children:"2022"}),(0,j.jsx)("p",{className:_.movie_average,children:l.toFixed(1)})]}),a&&(0,j.jsx)(y,{close:function(){return o(!1)},approve:function(){console.log("rere")},children:(0,j.jsx)(k,{item:n})})]})},d)},A=h.ZP.ul(M||(M=(0,x.Z)(["\n  width: 100%;\n  display: grid;\n  /* justify-content: center; */\n  grid-gap: 16px;\n\n  @media "," {\n    grid-template-columns: repeat(auto-fit, minmax(335px, 1fr));\n    grid-gap: 32px 16px;\n  }\n\n  "," {\n    grid-template-columns: repeat(auto-fit, minmax(394px, 1fr));\n  }\n"])),(function(e){return e.theme.media.tab}),(function(e){return e.theme.media.desk})),E=function(e){var n=e.items;return(0,j.jsx)(A,{children:n.map((function(e){return(0,j.jsx)(L,{item:e},e.id)}))})},O=E;E.defaultProps={items:[]}},921:function(e,n,t){t.d(n,{Z:function(){return o}});var i={load_more:"LoadMoreButton_load_more__p8--J"},a=t(184),o=function(){return(0,a.jsx)("div",{className:i.section,children:(0,a.jsx)("button",{type:"button",className:i.load_more,children:"Load more"})})}},432:function(e,n,t){t.d(n,{Z:function(){return c}});var i,a=t(683),o=t(925),r=t(168),s=t(924).ZP.div(i||(i=(0,r.Z)(["\n  padding: 0 20px;\n  margin-bottom: 40px;\n  width: 100%;\n\n  /* @media "," {\n    max-width: 480px;\n  } */\n  @media "," {\n    margin-bottom: 60px;\n    padding: 0 32px;\n    /* max-width: 100%; */\n  }\n"])),(function(e){return e.theme.media.phone}),(function(e){return e.theme.media.tab})),d=t(184),l=["children"],c=function(e){var n=e.children,t=(0,o.Z)(e,l);return(0,d.jsx)(s,(0,a.Z)((0,a.Z)({},t),{},{children:n}))}},183:function(e,n,t){t.d(n,{vw:function(){return l}});var i=t(861),a=t(757),o=t.n(a),r=t(294),s="6de1479941bef67a0c224787b78603f1",d="https://api.themoviedb.org/3/";r.Z.create({baseURL:"https://api.themoviedb.org/3/"});function l(){return c.apply(this,arguments)}function c(){return(c=(0,i.Z)(o().mark((function e(){var n,t,i,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"GET",headers:{accept:"application/json"}},e.next=3,fetch("".concat(d,"/trending/movie/day?api_key=").concat(s),n);case 3:return t=e.sent,e.next=6,t.json();case 6:return i=e.sent,e.next=9,i.results;case 9:return a=e.sent,e.abrupt("return",a);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=768.20be4cd8.chunk.js.map