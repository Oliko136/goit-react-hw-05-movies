"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[90],{90:(e,a,r)=>{r.r(a),r.d(a,{default:()=>h});var t=r(791),c=r(689),s=r(854),n=r(505),o=r(184);const l=e=>{let{cast:a}=e;return a.map((e=>{let{id:a,profile_path:r,name:t,character:c}=e;return(0,o.jsxs)("li",{children:[(0,o.jsx)("img",{src:r?"https://image.tmdb.org/t/p/w300/".concat(r):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",alt:t}),(0,o.jsx)("p",{children:t}),(0,o.jsxs)("p",{children:["Character: ",c]})]},a)}))};var i=r(697);const h=()=>{const[e,a]=(0,t.useState)([]),[r,h]=(0,t.useState)(null),{movieId:g}=(0,c.UO)();return(0,t.useEffect)((()=>{if(!g)return;h("pending");(async()=>{try{const{data:e}=await(0,i.y)(g);a(e.cast),h("resolved")}catch(e){console.log(e.message),h("rejected")}})()}),[g]),(0,o.jsxs)(o.Fragment,{children:["pending"===r&&(0,o.jsx)(s.Z,{}),"rejected"===r&&(0,o.jsx)(n.Z,{message:"An error occured, please try again later"}),"resolved"===r&&!e.length&&(0,o.jsx)(n.Z,{message:"No cast list available for this movie"}),"resolved"===r&&e.length>0&&(0,o.jsx)("ul",{children:(0,o.jsx)(l,{cast:e})})]})}},505:(e,a,r)=>{r.d(a,{Z:()=>c});var t=r(184);const c=e=>{let{message:a}=e;return(0,t.jsx)("p",{children:a})}},854:(e,a,r)=>{r.d(a,{Z:()=>s});var t=r(154),c=r(184);const s=()=>(0,c.jsx)(t.NB,{visible:!0,height:"80",width:"80",ariaLabel:"color-ring-loading",wrapperStyle:{},wrapperClass:"color-ring-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})},697:(e,a,r)=>{r.d(a,{Bt:()=>l,P0:()=>s,Tg:()=>c,h_:()=>n,y:()=>o});const t=r(294).Z.create({baseURL:"https://api.themoviedb.org/3",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWE5MzAyYWUzMmFjNmZhNzViYzA1MDhlNGM3NGMwYiIsInN1YiI6IjYzM2ZiNzc3YjRhNTQzMDA3ZGE0MzA3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9vzJQ3wYIlY6xqrP8aWnr_LR0dOLBnKjHBDyrh1KCV0"}}),c=()=>t.get("/trending/movie/day?language=en-US").then((e=>e)).catch((e=>console.error(e))),s=e=>t.get("search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1")).then((e=>e)).catch((e=>console.error(e))),n=e=>t.get("movie/".concat(e,"?language=en-US")).then((e=>e)).catch((e=>console.error(e))),o=e=>t.get("movie/".concat(e,"/credits?language=en-US")).then((e=>e)).catch((e=>console.error(e))),l=e=>t.get("movie/".concat(e,"/reviews?language=en-US&page=1")).then((e=>e)).catch((e=>console.error(e)))}}]);
//# sourceMappingURL=90.2e2a066d.chunk.js.map