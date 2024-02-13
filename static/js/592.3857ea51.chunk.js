"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[592],{592:function(n,e,t){t.r(e),t.d(e,{default:function(){return cn}});var i,r,o,a,s,d,c,l,m,u,h=t(433),x=t(413),p=t(861),f=t(439),g=t(757),_=t.n(g),v=t(791),j={movie_img:"MovieCard_movie_img__OgQxA",movie_genresList:"MovieCard_movie_genresList__d6+3t",movie_average:"MovieCard_movie_average__j2fxM",modal:"MovieCard_modal__KQdO1",modal_auth:"MovieCard_modal_auth__1RNxf",modal_body:"MovieCard_modal_body__otckZ",modal_content:"MovieCard_modal_content__8rlmv",modal_close:"MovieCard_modal_close__o9iy+",modal_data:"MovieCard_modal_data__bmwvL",movie_image:"MovieCard_movie_image__ajhuA"},Z=t(658),b="ModalDetails_average__b-kd1",w="ModalDetails_count__TVN+I",y=t(168),z=t(924),P=z.ZP.div(i||(i=(0,y.Z)(["\n  max-height: calc(100vh - 60px);\n  overflow-y: auto;\n\n  border-radius: 10px;\n  max-width: 280px;\n\n  @media "," {\n    display: flex;\n    flex-direction: row;\n    max-width: 704px;\n    height: fit-content;\n  }\n  @media "," {\n    max-width: 806px;\n  }\n"])),(function(n){return n.theme.media.tab}),(function(n){return n.theme.media.desk})),k=z.ZP.div(r||(r=(0,y.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),C=z.ZP.img(o||(o=(0,y.Z)(["\n  width: 100%;\n  max-width: 280px;\n  height: 357px;\n  border-radius: 10px;\n  margin-bottom: 16px;\n  object-fit: cover;\n\n  @media "," {\n    min-width: 264px;\n    height: 373px;\n\n    margin-bottom: 0;\n    margin-right: 18px;\n  }\n  @media "," {\n    min-width: 375px;\n    height: 478px;\n  }\n"])),(function(n){return n.theme.media.tab}),(function(n){return n.theme.media.desk})),M=z.ZP.div(a||(a=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),S=z.ZP.table(s||(s=(0,y.Z)(["\n  margin-bottom: 20px;\n"]))),N=z.ZP.td(d||(d=(0,y.Z)(["\n  color: ",";\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n  margin-bottom: 8px;\n"])),(function(n){return n.theme.colors.inputText}),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.fontWeiths.semi}),(function(n){return n.theme.lineHeights.main})),L=z.ZP.td(c||(c=(0,y.Z)(["\n  vertical-align: middle;\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n  margin-bottom: 8px;\n"])),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.fontWeiths.semi}),(function(n){return n.theme.lineHeights.main})),A=z.ZP.p(l||(l=(0,y.Z)(["\n  font-size: ",";\n  font-weight: ",";\n  line-height: ",";\n  margin-bottom: 8px;\n"])),(function(n){return n.theme.fontSizes.xs}),(function(n){return n.theme.fontWeiths.semi}),(function(n){return n.theme.lineHeights.main})),T=z.ZP.div(m||(m=(0,y.Z)(["\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n  max-width: 100%;\n\n  @media "," {\n    justify-content: normal;\n  }\n"])),(function(n){return n.theme.media.tab})),F=t(925),H=z.ZP.h1(u||(u=(0,y.Z)(["\n  font-family: ",";\n  text-align: ",";\n  font-weight: ","; /*500*/\n  font-size: ","; /*24*/\n  line-height: ",";\n  color: ",";\n  letter-spacing: ",";\n  text-transform: ",";\n\n  @media "," {\n    font-size: ",";\n  }\n"])),(function(n){return n.font||n.theme.fonts.main}),(function(n){return n.align||"center"}),(function(n){return n.weight||n.theme.fontWeiths.semi}),(function(n){return n.size||n.theme.fontSizes.m}),(function(n){return n.line||"1.172"}),(function(n){return n.color||n.theme.colors.textColor}),(function(n){return n.letterSpacing||"0.03em"}),(function(n){return n.textTransform||"uppercase"}),(function(n){return n.theme.media.tab}),(function(n){return n.tabSize||n.theme.fontSizes.l})),W=t(184),B=["children"],G=function(n){var e=n.children,t=(0,F.Z)(n,B);return(0,W.jsx)(H,(0,x.Z)((0,x.Z)({},t),{},{children:e}))};G.defaultProps={children:null};var O,V,q,D,E=t(205),Q=function(n){var e=n.item,t=e.poster_path,i=e.original_title,r=e.vote_average,o=e.vote_count,a=e.popularity,s=e.overview,d="https://image.tmdb.org/t/p/w500".concat(t);return(0,W.jsxs)(P,{children:[(0,W.jsx)(k,{children:(0,W.jsx)(C,{src:d,alt:i,loading:"lazy"})}),(0,W.jsxs)(M,{children:[(0,W.jsx)(G,{as:"h1",align:"start",style:{marginBottom:"20px"},children:i}),(0,W.jsx)(S,{children:(0,W.jsxs)("tbody",{children:[(0,W.jsxs)("tr",{children:[(0,W.jsx)(N,{children:"Vote/Votes"}),(0,W.jsxs)(L,{children:[(0,W.jsx)("span",{className:b,children:r.toFixed(1)})," /"," ",(0,W.jsx)("span",{className:w,children:o})]})]}),(0,W.jsxs)("tr",{children:[(0,W.jsx)(N,{children:"Popularity"}),(0,W.jsx)(L,{children:a.toFixed(1)})]}),(0,W.jsxs)("tr",{children:[(0,W.jsx)(N,{children:"Original Title"}),(0,W.jsx)(L,{children:(0,W.jsx)(G,{as:"p",align:"start",style:{fontSize:"12px"},children:i})})]}),(0,W.jsxs)("tr",{children:[(0,W.jsx)(N,{children:"Genre"}),(0,W.jsx)(L,{children:"Genres list"})]})]})}),(0,W.jsx)(G,{as:"p",align:"start",style:{marginBottom:"8px",fontSize:"12px"},children:"About"}),(0,W.jsx)(A,{children:s}),(0,W.jsxs)(T,{children:[(0,W.jsx)(E.z,{id:"watched",type:"submit",name:"modal",h:"44",children:"Add to watched"}),(0,W.jsx)(E.z,{id:"queue",type:"submit",name:"modal",h:"44",children:"Add to queue"})]})]})]})},R=Q;Q.defaultProps={items:[]};var I,J=z.ZP.li(O||(O=(0,y.Z)(["\n  display: flex;\n  justify-content: center;\n\n  transition: transform 400ms easy-out;\n  &:hover {\n    transform: scale(1.07);\n  }\n"]))),K=z.ZP.img(V||(V=(0,y.Z)(["\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n  border-radius: 10px;\n  border-radius: 10px;\n  width: 280px;\n  height: 402px;\n  object-fit: cover;\n\n  @media "," {\n    width: 336px;\n    height: 455px;\n  }\n  @media "," {\n    width: 394px;\n    height: 574px;\n  }\n"])),(function(n){return n.theme.media.tab}),(function(n){return n.theme.media.desk})),U=(z.ZP.h2(q||(q=(0,y.Z)([""]))),z.ZP.div(D||(D=(0,y.Z)(["\n  display: flex;\n  font-size: 20px;\n  line-height: 24px;\n  color: #ff6b08;\n  align-items: baseline;\n"])))),X=function(n){var e=n.item,t=(0,v.useState)(!1),i=(0,f.Z)(t,2),r=i[0],o=i[1],a=e.poster_path,s=e.original_title,d=e.id,c=e.vote_average,l="https://image.tmdb.org/t/p/w500".concat(a);return(0,W.jsx)(J,{onClick:function(){return o(!0)},children:(0,W.jsxs)("div",{children:[(0,W.jsx)(K,{id:e.id,src:l,alt:e.original_title,loading:"lazy"}),(0,W.jsx)("p",{className:j.movie_title,children:s}),(0,W.jsxs)(U,{children:[(0,W.jsx)("ul",{className:j.movie_genresList}),(0,W.jsx)("p",{children:"2022"}),(0,W.jsx)("p",{className:j.movie_average,children:c.toFixed(1)})]}),r&&(0,W.jsx)(Z.Z,{close:function(){return o(!1)},approve:function(){console.log("rere")},children:(0,W.jsx)(R,{item:e})})]})},d)},Y=z.ZP.ul(I||(I=(0,y.Z)(["\n  width: 100%;\n  display: grid;\n  /* padding: 0 20px; */\n  /* justify-content: center; */\n  grid-gap: 16px;\n\n  @media "," {\n    grid-template-columns: repeat(auto-fit, minmax(335px, 1fr));\n    grid-gap: 32px 16px;\n    /* padding: 0 32px; */\n  }\n\n  "," {\n    grid-template-columns: repeat(auto-fit, minmax(394px, 1fr));\n  }\n"])),(function(n){return n.theme.media.tab}),(function(n){return n.theme.media.desk})),$=function(n){var e=n.items;return(0,W.jsx)(Y,{children:e.map((function(n){return(0,W.jsx)(X,{item:n},n.id)}))})},nn=$;$.defaultProps={items:[]};var en={load_more:"LoadMoreButton_load_more__p8--J"},tn=function(){return(0,W.jsx)("div",{className:en.section,children:(0,W.jsx)("button",{type:"button",className:en.load_more,children:"Load more"})})},rn=t(294),on="6de1479941bef67a0c224787b78603f1",an="https://api.themoviedb.org/3/";rn.Z.create({baseURL:"https://api.themoviedb.org/3/"});function sn(){return dn.apply(this,arguments)}function dn(){return(dn=(0,p.Z)(_().mark((function n(){var e,t,i,r;return _().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e={method:"GET",headers:{accept:"application/json"}},n.next=3,fetch("".concat(an,"/trending/movie/day?api_key=").concat(on),e);case 3:return t=n.sent,n.next=6,t.json();case 6:return i=n.sent,n.next=9,i.results;case 9:return r=n.sent,n.abrupt("return",r);case 11:case"end":return n.stop()}}),n)})))).apply(this,arguments)}var cn=function(){var n=(0,v.useState)({items:[],loading:!1,error:null}),e=(0,f.Z)(n,2),t=e[0],i=e[1];(0,v.useEffect)((function(){var n=function(){var n=(0,p.Z)(_().mark((function n(){var e;return _().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,i((function(n){return(0,x.Z)((0,x.Z)({},n),{},{loading:!0,error:null})})),n.next=4,sn();case 4:e=n.sent,i((function(n){return(0,x.Z)((0,x.Z)({},n),{},{items:(0,h.Z)(e)})})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),i((function(e){return(0,x.Z)((0,x.Z)({},e),{},{error:n.t0})}));case 11:return n.prev=11,i((function(n){return(0,x.Z)((0,x.Z)({},n),{},{loading:!1})})),n.finish(11);case 14:case"end":return n.stop()}}),n,null,[[0,8,11,14]])})));return function(){return n.apply(this,arguments)}}();n()}),[i]);var r=t.items,o=t.loading,a=t.error;return(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)("h1",{children:"Home page"}),r.length>0&&(0,W.jsx)(nn,{items:r}),o&&(0,W.jsx)("p",{children:"...loading"}),a&&(0,W.jsx)("p",{children:"...load failed"}),(0,W.jsx)(tn,{})]})}}}]);
//# sourceMappingURL=592.3857ea51.chunk.js.map