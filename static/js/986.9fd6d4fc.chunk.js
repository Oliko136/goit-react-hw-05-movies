"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[986],{505:(e,r,t)=>{t.d(r,{Z:()=>n});var a=t(184);const n=e=>{let{message:r}=e;return(0,a.jsx)("p",{children:r})}},854:(e,r,t)=>{t.d(r,{Z:()=>s});var a=t(154),n=t(184);const s=()=>(0,n.jsx)(a.NB,{visible:!0,height:"80",width:"80",ariaLabel:"color-ring-loading",wrapperStyle:{},wrapperClass:"color-ring-wrapper",colors:["#e15b64","#f47e60","#f8b26a","#abbd81","#849b87"]})},986:(e,r,t)=>{t.r(r),t.d(r,{default:()=>h});var a=t(791),n=t(689),s=t(854),c=t(505),o=t(184);const l=e=>{let{reviews:r}=e;return r.map((e=>{let{id:r,author:t,content:a}=e;return(0,o.jsxs)("li",{children:[(0,o.jsxs)("p",{children:["Author: ",t]}),(0,o.jsx)("p",{children:a})]},r)}))};var i=t(697);const h=()=>{const[e,r]=(0,a.useState)([]),[t,h]=(0,a.useState)(null),{movieId:d}=(0,n.UO)();return(0,a.useEffect)((()=>{if(!d)return;h("pending");(async()=>{try{const{data:e}=await(0,i.Bt)(d);r(e.results),h("resolved")}catch(e){console.log(e.message),h("rejected")}})()}),[d]),(0,o.jsxs)(o.Fragment,{children:["pending"===t&&(0,o.jsx)(s.Z,{}),"rejected"===t&&(0,o.jsx)(c.Z,{message:"An error occured, please try again later"}),"resolved"===t&&!e.length&&(0,o.jsx)(c.Z,{message:"No reviews available for this movie"}),"resolved"===t&&e.length>0&&(0,o.jsx)("ul",{children:(0,o.jsx)(l,{reviews:e})})]})}},697:(e,r,t)=>{t.d(r,{Bt:()=>l,P0:()=>s,Tg:()=>n,h_:()=>c,y:()=>o});const a=t(294).Z.create({baseURL:"https://api.themoviedb.org/3",headers:{Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWE5MzAyYWUzMmFjNmZhNzViYzA1MDhlNGM3NGMwYiIsInN1YiI6IjYzM2ZiNzc3YjRhNTQzMDA3ZGE0MzA3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9vzJQ3wYIlY6xqrP8aWnr_LR0dOLBnKjHBDyrh1KCV0"}}),n=()=>a.get("/trending/movie/day?language=en-US").then((e=>e)).catch((e=>console.error(e))),s=e=>a.get("search/movie?query=".concat(e,"&include_adult=false&language=en-US&page=1")).then((e=>e)).catch((e=>console.error(e))),c=e=>a.get("movie/".concat(e,"?language=en-US")).then((e=>e)).catch((e=>console.error(e))),o=e=>a.get("movie/".concat(e,"/credits?language=en-US")).then((e=>e)).catch((e=>console.error(e))),l=e=>a.get("movie/".concat(e,"/reviews?language=en-US&page=1")).then((e=>e)).catch((e=>console.error(e)))}}]);
//# sourceMappingURL=986.9fd6d4fc.chunk.js.map