"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{272:function(n,t,e){e.d(t,{Df:function(){return o},TP:function(){return i},V0:function(){return u},jW:function(){return f},z0:function(){return a}});var c="https://api.themoviedb.org/3/",r="fabdd94d4f0ea78505de1131093b2953";function o(){return fetch("".concat(c,"trending/all/day?api_key=").concat(r)).then((function(n){return n.json()})).then((function(n){return n.results}))}function u(n){return fetch("".concat(c,"search/movie?api_key=").concat(r,"&query=").concat(n)).then((function(n){return n.json()})).then((function(n){return n.results}))}function i(n){return fetch("".concat(c,"/movie/").concat(n,"?api_key=").concat(r)).then((function(n){return n.json()}))}function a(n){return fetch("".concat(c,"/movie/").concat(n,"/credits?api_key=").concat(r)).then((function(n){return n.json()}))}function f(n){return fetch("".concat(c,"/movie/").concat(n,"/reviews?api_key=").concat(r)).then((function(n){return n.json()}))}},415:function(n,t,e){e.r(t);var c=e(439),r=e(87),o=e(272),u=e(791),i=e(184);t.default=function(){var n=(0,u.useState)([]),t=(0,c.Z)(n,2),e=t[0],a=t[1];return(0,u.useEffect)((function(){(0,o.Df)().then(a)}),[]),(0,i.jsx)("div",{children:(0,i.jsxs)("ul",{children:[(0,i.jsx)("h2",{children:"Trending today"}),e.map((function(n){return(0,i.jsx)("li",{children:(0,i.jsx)(r.rU,{to:"/movies/".concat(n.id),children:n.title||n.name})},n.id)}))]})})}}}]);
//# sourceMappingURL=415.d4c52164.chunk.js.map