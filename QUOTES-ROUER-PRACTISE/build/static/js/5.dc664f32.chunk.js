(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5],{49:function(e,t,c){e.exports={item:"QuoteItem_item__2LoE5"}},50:function(e,t,c){e.exports={list:"QuoteList_list__9HVGR",sorting:"QuoteList_sorting___dT8u"}},51:function(e,t,c){e.exports={noquotes:"NoQuotesFound_noquotes__6t3p7"}},54:function(e,t,c){"use strict";c.r(t);var s=c(35),n=c(36),i=c(2),o=c(0),r=c(49),u=c.n(r),a=c(8),d=c(1),j=function(e){return Object(d.jsxs)("li",{className:u.a.item,children:[Object(d.jsxs)("figure",{children:[Object(d.jsx)("blockquote",{children:Object(d.jsx)("p",{children:e.text})}),Object(d.jsx)("figcaption",{children:e.author})]}),Object(d.jsx)(a.c,{className:"btn",to:"/quote/".concat(e.id),children:"View Fullscreen"})]})},l=c(50),b=c.n(l),h=function(e){var t,c,s=Object(i.h)(),n=Object(i.i)(),r="asc"===new URLSearchParams(n.search).get("sort"),u=(t=e.quotes,c=r,t.sort((function(e,t){return c?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(d.jsxs)(o.Fragment,{children:[Object(d.jsx)("div",{className:b.a.sorting,children:Object(d.jsxs)("button",{onClick:function(){s.push("/quote?sort="+(r?"desc":"asc"))},children:["Sort ",r?"Descending":"Ascending"]})}),Object(d.jsx)("ul",{className:b.a.list,children:u.map((function(e){return Object(d.jsx)(j,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},x=c(14),O=c(51),f=c.n(O),p=function(){return Object(d.jsxs)("div",{className:f.a.noquotes,children:[Object(d.jsx)("p",{children:"No quotes found!"}),Object(d.jsx)(a.b,{className:"btn",to:"/new-quote",children:"Add a Quote"})]})};t.default=function(){var e=Object(s.a)(n.d,!0),t=e.sendRequest,c=e.status,i=e.data,r=e.error;return Object(o.useEffect)((function(){t()}),[t]),"pending"===c?Object(d.jsx)("div",{className:"centered",children:Object(d.jsx)(x.a,{})}):r?Object(d.jsx)("p",{className:"centered focused",children:r}):"completed"!==c||i&&0!==i.length?Object(d.jsx)(h,{quotes:i}):Object(d.jsx)(p,{})}}}]);
//# sourceMappingURL=5.dc664f32.chunk.js.map