"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[936],{776:(e,r,a)=>{a.d(r,{Z:()=>c});const t="ErrorMessage_ErrorMessage__yaGRn";var s=a(184);const c=e=>{let{message:r}=e;return(0,s.jsx)("p",{className:t,children:r})}},639:(e,r,a)=>{a.d(r,{Z:()=>n});var t=a(154);const s="Loader_Loader__wqo9C";var c=a(184);const n=()=>(0,c.jsx)(t.NB,{visible:!0,height:"80",width:"80",ariaLabel:"color-ring-loading",wrapperStyle:{},wrapperClass:s,colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})},155:(e,r,a)=>{a.d(r,{Z:()=>i});var t=a(689),s=a(87);const c="MoviesList_MoviesList__jqSLr",n="MoviesList_MovieLink__diM+a";var o=a(184);const i=e=>{let{movies:r}=e;const a=(0,t.TH)(),i=r.map((e=>{let{id:r,title:t}=e;return(0,o.jsx)("li",{children:(0,o.jsx)(s.rU,{to:"/movies/".concat(r),state:{from:a},className:n,children:t})},r)}));return(0,o.jsx)("ul",{className:c,children:i})}},111:(e,r,a)=>{a.d(r,{Z:()=>c});const t="Section_Section__cTDcW";var s=a(184);const c=e=>{let{children:r}=e;return(0,s.jsx)("section",{className:t,children:r})}},936:(e,r,a)=>{a.r(r),a.d(r,{default:()=>d});var t=a(791),s=a(111),c=a(639),n=a(776),o=a(155),i=a(697);const l="Home_HomeTitle__Wg+lW";var h=a(184);const d=()=>{const[e,r]=(0,t.useState)([]),[a,d]=(0,t.useState)(null);return(0,t.useEffect)((()=>{d("pending");(async()=>{try{const{data:e}=await(0,i.Tg)();r(e.results),d("resolved")}catch(e){console.log(e.message),d("rejected")}})()}),[]),(0,h.jsxs)(s.Z,{children:[(0,h.jsx)("h1",{className:l,children:"Trending today"}),"pending"===a&&(0,h.jsx)(c.Z,{}),"rejected"===a&&(0,h.jsx)(n.Z,{message:"An error occured, please try again later"}),"resolved"===a&&(0,h.jsx)(o.Z,{movies:e})]})}},697:(e,r,a)=>{a.d(r,{Bt:()=>i,P0:()=>c,Tg:()=>s,h_:()=>n,y:()=>o});const t=a(294).Z.create({baseURL:"https://api.themoviedb.org/3",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWE5MzAyYWUzMmFjNmZhNzViYzA1MDhlNGM3NGMwYiIsInN1YiI6IjYzM2ZiNzc3YjRhNTQzMDA3ZGE0MzA3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9vzJQ3wYIlY6xqrP8aWnr_LR0dOLBnKjHBDyrh1KCV0"}}),s=()=>t.get("/trending/movie/day?language=en-US").then((e=>e)).catch((e=>console.error(e))),c=e=>t.get("search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1")).then((e=>e)).catch((e=>console.error(e))),n=e=>t.get("movie/".concat(e,"?language=en-US")).then((e=>e)).catch((e=>console.error(e))),o=e=>t.get("movie/".concat(e,"/credits?language=en-US")).then((e=>e)).catch((e=>console.error(e))),i=e=>t.get("movie/".concat(e,"/reviews?language=en-US&page=1")).then((e=>e)).catch((e=>console.error(e)))}}]);
//# sourceMappingURL=936.009a5010.chunk.js.map