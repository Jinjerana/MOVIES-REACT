"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[409],{409:function(e,t,i){i.r(t),i.d(t,{default:function(){return a}});var n=i(791),r=i(184),o={container:{display:"flex",gap:20,marginTop:20},item:{width:"auto",height:"auto"},movieTitle:{fontWeight:700,fontSize:26,color:"#feb236"},title:{fontWeight:500,fontSize:22,color:"#feb236",textDecoration:"none"}},l=function(e){var t=e.movie,i=t.genres,n=t.overview,l=t.poster_path,s=t.release_date,c=t.vote_average,d=t.title,h=t.original_title,a=i.map((function(e){return e.name})).join(", ");return(0,r.jsxs)("div",{style:o.container,children:[(0,r.jsx)("div",{style:o.item,children:(0,r.jsx)("img",{src:l?"https://image.tmdb.org/t/p/w500/".concat(l):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",width:300,alt:d||h})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{style:o.movieTitle,children:d||h}),(0,r.jsx)("p",{children:s}),(0,r.jsx)("h2",{style:o.title,children:"User Score "}),(0,r.jsx)("p",{children:c}),(0,r.jsx)("h2",{style:o.title,children:"Overview"}),(0,r.jsx)("p",{children:n}),(0,r.jsx)("h2",{style:o.title,children:"Genres"}),(0,r.jsx)("p",{children:a})]})]})},s=i(991),c=i(689),d=i(87),h={container:{display:"block",marginLeft:20},title:{fontWeight:700,fontSize:26,color:"#feb236"},link:{fontWeight:700,fontSize:18,color:"#feb236",margin:15},button:{fontWeight:300,fontSize:14,height:25,width:80,marginTop:20,justifyContent:"center",cursor:"pointer",borderRadius:5,borderWidth:2}},a=function(){var e,t,i=(0,s.NE)(),o=i.movie,a=i.isLoading,x=i.error,f=(0,c.TH)(),j=(0,n.useRef)(null!==(e=null===f||void 0===f||null===(t=f.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");return(0,r.jsxs)("div",{div:!0,style:h.container,children:[(0,r.jsx)(d.rU,{to:j.current,children:(0,r.jsx)("button",{style:h.button,type:"button",children:"Go back"})}),a&&(0,r.jsx)("p",{children:"Loading..."}),x&&(0,r.jsx)("p",{children:"Something went wrong..."}),o&&(0,r.jsx)(l,{movie:o}),(0,r.jsx)("h1",{style:h.title,children:"Additional Info"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(d.rU,{style:h.link,to:"cast",children:"Cast"})}),(0,r.jsx)("li",{children:(0,r.jsx)(d.rU,{style:h.link,to:"reviews",children:"Reviews"})})]}),(0,r.jsx)(n.Suspense,{fallback:(0,r.jsx)("p",{children:"Loading..."}),children:(0,r.jsx)(c.j3,{})})]})}}}]);
//# sourceMappingURL=409.8bd63d8b.chunk.js.map