(this["webpackJsonpcounter-redux-dispatch"]=this["webpackJsonpcounter-redux-dispatch"]||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);n(0);var c=n(3),r=n.n(c),u=n(4),o=n(1),i=function(t){return Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{children:["Counter 2: ",t.counter]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:function(){return t.increment()},children:"INC"}),Object(o.jsx)("button",{onClick:function(){return t.decrement()},children:"DEC"})]})]})},s="ACTION_DECREMENT",d="ACTION_INCREMENT",j=Object(u.b)((function(t){return{counter:t.counter}}),(function(t){return{increment:function(){t({type:d})},decrement:function(){t({type:s})}}}))(i);var O=function(){return Object(o.jsx)(j,{})},a=(n(16),n(2)),b={counter:0},h=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case s:return Object(a.a)(Object(a.a)({},t),{},{counter:t.counter-1});case d:return Object(a.a)(Object(a.a)({},t),{},{counter:t.counter+1});default:return t}},f=(0,n(17).createStore)(h,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),E=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,u=e.getLCP,o=e.getTTFB;n(t),c(t),r(t),u(t),o(t)}))};r.a.render(Object(o.jsx)(u.a,{store:f,children:Object(o.jsx)(O,{})}),document.getElementById("root")),E()}},[[18,1,2]]]);
//# sourceMappingURL=main.42da328b.chunk.js.map