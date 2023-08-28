(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[129],{1617:function(e,c,t){"use strict";t.r(c);var n=t(1),s=t(105),a=t(504),l=t(550),j=t(813),r=t(814),i=t(13),d=function(){return Object(i.jsxs)(s.l,{children:[Object(i.jsx)(s.p,{children:Object(i.jsx)(s.v,{tag:"h4",children:"Sizes"})}),Object(i.jsx)(s.m,{children:Object(i.jsxs)("div",{className:"d-flex flex-wrap",children:[Object(i.jsxs)("div",{className:"me-2",children:[Object(i.jsx)(s.N,{className:"form-label",for:"lg-number-input",children:"Large Input"}),Object(i.jsx)(l.a,{defaultValue:10,className:"input-lg",upHandler:Object(i.jsx)(j.a,{}),id:"lg-number-input",downHandler:Object(i.jsx)(r.a,{})})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(s.N,{className:"form-label",for:"default-number-input",children:"Default Input"}),Object(i.jsx)(l.a,{defaultValue:10,upHandler:Object(i.jsx)(j.a,{}),id:"default-number-input",downHandler:Object(i.jsx)(r.a,{})})]})]})})]})},b=function(){return Object(i.jsxs)(s.l,{children:[Object(i.jsx)(s.p,{children:Object(i.jsx)(s.v,{tag:"h4",children:"Basic"})}),Object(i.jsx)(s.m,{children:Object(i.jsxs)("div",{className:"demo-inline-spacing",children:[Object(i.jsxs)("div",{children:[Object(i.jsx)(s.N,{className:"form-label",for:"basic-number-input",children:"Basic Input"}),Object(i.jsx)(l.a,{id:"basic-number-input",defaultValue:10,upHandler:Object(i.jsx)(j.a,{}),downHandler:Object(i.jsx)(r.a,{})})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(s.N,{className:"form-label",for:"disabled-number-input",children:"Disabled Input"}),Object(i.jsx)(l.a,{disabled:!0,defaultValue:10,upHandler:Object(i.jsx)(j.a,{}),downHandler:Object(i.jsx)(r.a,{}),id:"disabled-number-input"})]}),Object(i.jsxs)("div",{children:[Object(i.jsx)(s.N,{className:"form-label",for:"readOnly-number-input",children:"ReadOnly Input"}),Object(i.jsx)(l.a,{readOnly:!0,defaultValue:10,upHandler:Object(i.jsx)(j.a,{}),downHandler:Object(i.jsx)(r.a,{}),id:"readOnly-number-input"})]})]})})]})},m=function(){return Object(i.jsxs)(s.l,{children:[Object(i.jsx)(s.p,{children:Object(i.jsx)(s.v,{tag:"h4",children:"Min Max"})}),Object(i.jsx)(s.m,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(s.N,{className:"form-label",for:"min-max-number-input",children:"Min Max Input"}),Object(i.jsx)(l.a,{min:0,max:10,defaultValue:5,upHandler:Object(i.jsx)(j.a,{}),downHandler:Object(i.jsx)(r.a,{}),id:"min-max-number-input"})]})})]})},O=function(){return Object(i.jsxs)(s.l,{children:[Object(i.jsx)(s.p,{children:Object(i.jsx)(s.v,{tag:"h4",children:"Formatting"})}),Object(i.jsx)(s.m,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(s.N,{className:"form-label",for:"formatting-number-input",children:"Formatting Input"}),Object(i.jsx)(l.a,{parser:function(e){var c=e.toString().split(" ");return c[1]?c[1].replace(/,*/g,""):e},defaultValue:5,formatter:function(e){return"$ ".concat(e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))},upHandler:Object(i.jsx)(j.a,{}),downHandler:Object(i.jsx)(r.a,{}),id:"formatting-number-input"})]})})]})},x=["primary","secondary","success","danger","warning","info"],u=function(){return Object(i.jsxs)(s.l,{children:[Object(i.jsx)(s.p,{children:Object(i.jsx)(s.v,{tag:"h4",children:"Colors"})}),Object(i.jsx)(s.m,{children:Object(i.jsx)("div",{className:"demo-inline-spacing",children:x.map((function(e){return Object(i.jsxs)("div",{children:[Object(i.jsxs)(s.N,{className:"form-label text-capitalize",for:"".concat(e,"-number-input"),children:[e," Input"]}),Object(i.jsx)(l.a,{defaultValue:10,upHandler:Object(i.jsx)(j.a,{}),downHandler:Object(i.jsx)(r.a,{}),id:"".concat(e,"-number-input"),className:"input-".concat(e)})]},e)}))})})]})},o=function(){return Object(i.jsxs)(s.l,{children:[Object(i.jsx)(s.p,{children:Object(i.jsx)(s.v,{tag:"h4",children:"Decimal"})}),Object(i.jsx)(s.m,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(s.N,{className:"form-label",for:"decimal-number-input",children:"Decimal Input"}),Object(i.jsx)(l.a,{step:.1,defaultValue:10,upHandler:Object(i.jsx)(j.a,{}),downHandler:Object(i.jsx)(r.a,{}),id:"decimal-number-input"})]})})]})},h=t(17),p=function(){var e=Object(n.useState)(1),c=Object(h.a)(e,2),t=c[0],a=c[1],d=Object(n.useState)(!1),b=Object(h.a)(d,2),m=b[0],O=b[1],x=Object(n.useState)(!1),u=Object(h.a)(x,2),o=u[0],p=u[1];return Object(i.jsxs)(s.l,{children:[Object(i.jsx)(s.p,{children:Object(i.jsx)(s.v,{tag:"h4",children:"Controlled"})}),Object(i.jsxs)(s.m,{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)(s.N,{className:"form-label",for:"controlled-number-input",children:"Controlled Input"}),Object(i.jsx)(l.a,{value:t,upHandler:Object(i.jsx)(j.a,{}),disabled:m,readOnly:o,downHandler:Object(i.jsx)(r.a,{}),id:"controlled-number-input",onChange:function(e){return a(e)}})]}),Object(i.jsxs)("div",{className:"demo-inline-spacing",children:[Object(i.jsx)(s.i,{size:"sm",color:"primary",onClick:function(){return O(!m)},children:"Toggle Disabled"}),Object(i.jsx)(s.i,{size:"sm",color:"primary",onClick:function(){return p(!o)},children:"Toggle ReadOnly"}),Object(i.jsx)(s.i,{size:"sm",color:"primary",onClick:function(){return a(10)},children:"Set Value to 10"})]})]})]})};t(663),c.default=function(){return Object(i.jsxs)(n.Fragment,{children:[Object(i.jsx)(a.a,{title:"Number Input",data:[{title:"Form Elements"},{title:"Number Input"}]}),Object(i.jsxs)(s.ib,{className:"match-height",children:[Object(i.jsx)(s.B,{md:"6",sm:"12",children:Object(i.jsx)(b,{})}),Object(i.jsx)(s.B,{md:"6",sm:"12",children:Object(i.jsx)(p,{})}),Object(i.jsx)(s.B,{md:"6",sm:"12",children:Object(i.jsx)(o,{})}),Object(i.jsx)(s.B,{md:"6",sm:"12",children:Object(i.jsx)(m,{})}),Object(i.jsx)(s.B,{md:"6",sm:"12",children:Object(i.jsx)(d,{})}),Object(i.jsx)(s.B,{md:"6",sm:"12",children:Object(i.jsx)(O,{})}),Object(i.jsx)(s.B,{xs:"12",children:Object(i.jsx)(u,{})})]})]})}},504:function(e,c,t){"use strict";var n=t(12),s=t(1),a=t(145),l=t(6),j=t.n(l),r=t(889),i=t(818),d=t(819),b=t(817),m=t(845),O=t(105),x=t(13);c.a=function(e){var c=e.data,t=e.title;return Object(x.jsxs)("div",{className:"content-header row",children:[Object(x.jsx)("div",{className:"content-header-left col-md-9 col-12 mb-2",children:Object(x.jsx)("div",{className:"row breadcrumbs-top",children:Object(x.jsxs)("div",{className:"col-12",children:[t?Object(x.jsx)("h2",{className:"content-header-title float-start mb-0",children:t}):"",Object(x.jsx)("div",{className:"breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12",children:Object(x.jsxs)(O.g,{children:[Object(x.jsx)(O.h,{tag:"li",children:Object(x.jsx)(a.b,{to:"/",children:"Home"})}),c.map((function(e,t){var l=e.link?a.b:s.Fragment,r=c.length-1===t;return Object(x.jsx)(O.h,{tag:"li",active:!r,className:j()({"text-primary":!r}),children:Object(x.jsx)(l,Object(n.a)(Object(n.a)({},e.link?{to:e.link}:{}),{},{children:e.title}))},t)}))]})})]})})}),Object(x.jsx)("div",{className:"content-header-right text-md-end col-md-3 col-12 d-md-block d-none",children:Object(x.jsx)("div",{className:"breadcrumb-right dropdown",children:Object(x.jsxs)(O.tb,{children:[Object(x.jsx)(O.G,{color:"primary",className:"btn-icon btn-round dropdown-toggle",children:Object(x.jsx)(r.a,{size:14})}),Object(x.jsxs)(O.F,{tag:"ul",end:!0,children:[Object(x.jsxs)(O.E,{tag:a.b,to:"/apps/todo",children:[Object(x.jsx)(i.a,{className:"me-1",size:14}),Object(x.jsx)("span",{className:"align-middle",children:"Todo"})]}),Object(x.jsxs)(O.E,{tag:a.b,to:"/apps/chat",children:[Object(x.jsx)(d.a,{className:"me-1",size:14}),Object(x.jsx)("span",{className:"align-middle",children:"Chat"})]}),Object(x.jsxs)(O.E,{tag:a.b,to:"/apps/email",children:[Object(x.jsx)(b.a,{className:"me-1",size:14}),Object(x.jsx)("span",{className:"align-middle",children:"Email"})]}),Object(x.jsxs)(O.E,{tag:a.b,to:"/apps/calendar",children:[Object(x.jsx)(m.a,{className:"me-1",size:14}),Object(x.jsx)("span",{className:"align-middle",children:"Calendar"})]})]})]})})})]})}}}]);