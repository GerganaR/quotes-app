(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{45:function(e,t,c){e.exports={card:"Card_card__1Qfdn"}},46:function(e,t,c){e.exports={form:"QuoteForm_form__9ypb2",loading:"QuoteForm_loading__37SAw",control:"QuoteForm_control__2YIGo",actions:"QuoteForm_actions__2jptO"}},54:function(e,t,c){"use strict";c.r(t);var n=c(1),o=c(2),r=c(22),s=c(45),a=c.n(s),u=c(0),i=function(e){return Object(u.jsx)("div",{className:a.a.card,children:e.children})},l=c(14),d=c(46),j=c.n(d),b=function(e){var t=Object(n.useState)(!1),c=Object(r.a)(t,2),s=c[0],a=c[1],d=Object(n.useRef)(),b=Object(n.useRef)();return Object(u.jsxs)(n.Fragment,{children:[Object(u.jsx)(o.a,{when:s,message:function(e){return"Are you sure you want to leave? All your entered data will be lost!"}}),Object(u.jsx)(i,{children:Object(u.jsxs)("form",{onFocus:function(){a(!0)},className:j.a.form,onSubmit:function(t){t.preventDefault();var c=d.current.value,n=b.current.value;e.onAddQuote({author:c,text:n})},children:[e.isLoading&&Object(u.jsx)("div",{className:j.a.loading,children:Object(u.jsx)(l.a,{})}),Object(u.jsxs)("div",{className:j.a.control,children:[Object(u.jsx)("label",{htmlFor:"author",children:"Author"}),Object(u.jsx)("input",{type:"text",id:"author",ref:d})]}),Object(u.jsxs)("div",{className:j.a.control,children:[Object(u.jsx)("label",{htmlFor:"text",children:"Text"}),Object(u.jsx)("textarea",{id:"text",rows:"5",ref:b})]}),Object(u.jsx)("div",{className:j.a.actions,children:Object(u.jsx)("button",{onClick:function(){a(!1)},className:"btn",children:"Add Quote"})})]})})]})},f=c(20),h=c(21);t.default=function(){var e=Object(f.a)(h.b),t=e.sendRequest,c=e.status,r=Object(o.h)();Object(n.useEffect)((function(){"completed"===c&&r.push("/quotes")}),[c,r]);return Object(u.jsx)(b,{isLoading:"pending"===c,onAddQuote:function(e){t(e)}})}}}]);
//# sourceMappingURL=4.85c9e943.chunk.js.map