(this.webpackJsonpquizapp=this.webpackJsonpquizapp||[]).push([[0],{13:function(t,e,c){},16:function(t,e,c){"use strict";c.r(e);var n=c(1),a=c.n(n),o=c(7),s=c.n(o),r=c(2),i=(c(13),c(8)),d=c(6),l=(c(14),c(0)),b=function(t){var e=t.showAnswers,c=t.handleAnswer,n=t.handleNextQuestion,a=t.data,o=a.question,s=a.correct_answer,r=a.answers;return Object(l.jsxs)("div",{className:"flex flex-col ",children:[Object(l.jsx)("div",{className:" text-black p-10 rounded shadow-md",style:{backgroundColor:"#7dced0"},children:Object(l.jsx)("h2",{className:"text-2xl",dangerouslySetInnerHTML:{__html:o}})}),Object(l.jsx)("div",{className:"grid grid-cols-2 gap-6 mt-6 ",children:r.map((function(t,n){var a=e?t===s?"text-green-700":"text-red-600":"text-black";return Object(l.jsx)("button",{style:{backgroundColor:"#7dced0"},className:"kl-auto text-black ".concat(a," p-4 font-semibold rounded shadow"),onClick:function(){return c(t)},answer:t,dangerouslySetInnerHTML:{__html:t}},n)}))}),e&&Object(l.jsx)("button",{onClick:n,className:"ml-auto mt-6  bg-white text-purple-800 p-4 font-semibold rounded shadow",children:"Next Question"})]})};var p=function(t){var e=t.api,c=Object(n.useState)([]),a=Object(r.a)(c,2),o=a[0],s=a[1],p=Object(n.useState)(0),j=Object(r.a)(p,2),u=j[0],x=j[1],h=Object(n.useState)(0),m=Object(r.a)(h,2),g=m[0],O=m[1],f=Object(n.useState)(!1),y=Object(r.a)(f,2),w=y[0],k=y[1];return Object(n.useEffect)((function(){fetch("".concat(e)).then((function(t){return t.json()})).then((function(t){var e=t.results.map((function(t){return Object(d.a)(Object(d.a)({},t),{},{answers:[t.correct_answer].concat(Object(i.a)(t.incorrect_answers)).sort((function(){return Math.random()-.5}))})}));s(e)}))}),[]),o.length>0?Object(l.jsx)("div",{className:"container",children:u>=o.length?Object(l.jsxs)("h1",{className:"text-3xl font-bold",style:{color:"#7dced0",textAlign:"center"},children:["Game ended! Your score is ",g]}):Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(b,{data:o[u],showAnswers:w,handleAnswer:function(t){w||t===o[u].correct_answer&&O(g+1),k(!0)},handleNextQuestion:function(){k(!1),x(u+1)}})})}):Object(l.jsx)("h3",{className:"font-bold",children:"Loading Please Wait"})};var j=function(){var t=Object(n.useState)(void 0),e=Object(r.a)(t,2),c=e[0],a=e[1],o=function(t){var e=t.id,c=t.text,n=t.bg;return Object(l.jsx)("button",{className:"text-black",style:{paddingTop:30,paddingBottom:30,paddingLeft:15,paddingRight:15,fontSize:20,borderRadius:10,backgroundColor:"".concat(n),border:0,textAlign:"center",fontWeight:"600"},onClick:function(){return s(e)},children:c})};function s(t){a(t)}return"1"===c?Object(l.jsx)(p,{api:"https://opentdb.com/api.php?amount=10&category=9&type=multiple"}):"2"===c?Object(l.jsx)(p,{api:"https://opentdb.com/api.php?amount=10&category=17&type=multiple"}):"3"===c?Object(l.jsx)(p,{api:"https://opentdb.com/api.php?amount=10&category=18&type=multiple"}):"4"===c?Object(l.jsx)(p,{api:"https://opentdb.com/api.php?amount=10&category=19&type=multiple"}):"5"===c?Object(l.jsx)(p,{api:"https://opentdb.com/api.php?amount=10&category=22&type=multiple"}):"6"===c?Object(l.jsx)(p,{api:"https://opentdb.com/api.php?amount=10&category=23&type=multiple"}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("header",{className:"font-bold text-3xl",style:{textAlign:"center",paddingBottom:10,color:"#7dced0"},children:"Choose your category"}),Object(l.jsxs)("div",{className:"grid grid-cols-2 gap-6 mt-6",children:[Object(l.jsx)(o,{id:"1",text:"General Knowledge",bg:"#9483bd",onClick:s}),Object(l.jsx)(o,{id:"2",text:"Ecology",bg:"#e79995",onClick:s}),Object(l.jsx)(o,{id:"3",text:"Computer Science",bg:"#98d5ca",onClick:s}),Object(l.jsx)(o,{id:"4",text:"Mathematics",bg:"#9acaed",onClick:s}),Object(l.jsx)(o,{id:"5",bg:"#98d099",text:"Geographical Science",onClick:s}),Object(l.jsx)(o,{id:"6",text:"History",bg:"#e8ce4f",onClick:s})]})]})};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(j,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.66910703.chunk.js.map