(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),s=n.n(c),u=n(2),o=(n(11),n(12),n(1)),l=n.n(o),i=n(3),m=function(e,t){return fetch("".concat("https://mate-api.herokuapp.com").concat(e),t).then((function(e){if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return e.json()})).then((function(e){return e.data}))},p=function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/posts");case 2:if(n=e.sent,t){e.next=5;break}return e.abrupt("return",n);case 5:return e.abrupt("return",n.filter((function(e){return e.userId===t})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/posts/".concat(t));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=(n(14),function(){return r.a.createElement("div",{className:"Loader"},r.a.createElement("div",{className:"Loader__content"}))}),b=(n(15),r.a.memo((function(e){var t=e.currentUserId,n=e.currentPostId,c=e.changePost,s=Object(a.useState)([]),o=Object(u.a)(s,2),m=o[0],f=o[1],b=Object(a.useState)(!1),v=Object(u.a)(b,2),E=v[0],h=v[1];Object(a.useEffect)((function(){O()}),[t]);var O=function(){var e=Object(i.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.next=3,p(t);case 3:n=e.sent,f(n),h(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"PostsList"},r.a.createElement("h2",null,"Posts:"),E?r.a.createElement(d,null):r.a.createElement("ul",{className:"PostsList__list"},m.map((function(e){return r.a.createElement("li",{className:"PostsList__item",key:e.id},r.a.createElement("div",null,r.a.createElement("b",null,"[User #".concat(e.userId,"]:")),e.title),r.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){return c(e.id)}},n===e.id?"Close":"Open"))}))))}))),v=(n(16),function(){var e=Object(i.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/comments");case 2:return n=e.sent,e.abrupt("return",n.filter((function(e){return e.postId===t})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),E=function(e){return t="/comments/".concat(e),m(t,{method:"DELETE"});var t},h=function(){var e=Object(i.a)(l.a.mark((function e(t,n,a,r){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(c={postId:t,name:n,email:a,body:r},m("/comments",{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(c)})));case 1:case"end":return e.stop()}var c}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),O=r.a.memo((function(e){var t=e.currentPostId,n=e.loadPostComments,c=Object(a.useState)(""),s=Object(u.a)(c,2),o=s[0],l=s[1],i=Object(a.useState)(""),m=Object(u.a)(i,2),p=m[0],f=m[1],d=Object(a.useState)(""),b=Object(u.a)(d,2),v=b[0],E=b[1];return r.a.createElement("form",{className:"NewCommentForm",onSubmit:function(e){e.preventDefault(),o&&p&&v&&(h(t,o,p,v).then((function(){return n()})),l(""),f(""),E(""))}},r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{type:"text",name:"name",value:o,onChange:function(e){return l(e.target.value)},placeholder:"Your name",className:"NewCommentForm__input"})),r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{type:"email",name:"email",value:p,onChange:function(e){return f(e.target.value)},placeholder:"Your email",className:"NewCommentForm__input"})),r.a.createElement("div",{className:"form-field"},r.a.createElement("textarea",{name:"body",value:v,onChange:function(e){return E(e.target.value)},placeholder:"Type comment here",className:"NewCommentForm__input"})),r.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))})),_=(n(17),r.a.memo((function(e){var t=e.comments,n=e.loadPostComments;return r.a.createElement("ul",{className:"PostDetails__list"},t.map((function(e){return r.a.createElement("li",{key:e.id,className:"PostDetails__list-item"},r.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return t=e.id,void E(t).then((function(){return n()}));var t}},"X"),r.a.createElement("p",null,e.body))})))}))),j=r.a.memo((function(e){var t=e.currentPostId,n=Object(a.useState)({}),c=Object(u.a)(n,2),s=c[0],o=c[1],m=Object(a.useState)([]),p=Object(u.a)(m,2),d=p[0],b=p[1],E=Object(a.useState)(!1),h=Object(u.a)(E,2),j=h[0],N=h[1];Object(a.useEffect)((function(){y(),w()}),[t]);var y=function(){var e=Object(i.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f(t);case 2:n=e.sent,o(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(i.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:n=e.sent,b(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"PostDetails"},r.a.createElement("h2",null,"Post details:"),r.a.createElement("section",{className:"PostDetails__post"},r.a.createElement("p",null,s.body)),r.a.createElement("section",{className:"PostDetails__comments"},d.length?r.a.createElement("button",{type:"button",className:"button",onClick:function(){return N(!j)}},"".concat(j?"Hide":"Show"," ").concat(d.length," comments")):r.a.createElement("h4",null,"No Comments yet"),j&&r.a.createElement(_,{comments:d,loadPostComments:w})),r.a.createElement("section",null,r.a.createElement("div",{className:"PostDetails__form-wrapper"},r.a.createElement(O,{currentPostId:t,loadPostComments:w}))))})),N=function(){var e=Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m("/users");case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),y=r.a.memo((function(e){var t=e.currentUserId,n=e.handleUserSelect,c=Object(a.useState)([]),s=Object(u.a)(c,2),o=s[0],m=s[1];Object(a.useEffect)((function(){p()}),[]);var p=Object(a.useCallback)(Object(i.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:t=e.sent,m(t.slice(0,10));case 4:case"end":return e.stop()}}),e)}))),[]);return r.a.createElement("label",null,"Select a user: \xa0",r.a.createElement("select",{value:t,onChange:n,className:"App__user-selector"},r.a.createElement("option",{value:"0"},"All users"),o.map((function(e,t){return r.a.createElement("option",{key:e.id,value:t+1},e.name)}))))})),w=function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(0),o=Object(u.a)(s,2),l=o[0],i=o[1],m=Object(a.useCallback)((function(e){c(+e.target.value)}),[]);return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App__header"},r.a.createElement(y,{currentUserId:n,handleUserSelect:m})),r.a.createElement("main",{className:"App__main"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(b,{currentUserId:n,currentPostId:l,changePost:function(e){i(e!==l?e:0)}})),r.a.createElement("div",{className:"App__content"},l?r.a.createElement(j,{currentPostId:l}):r.a.createElement("h4",null,"Open any post to see it's details"))))};s.a.render(r.a.createElement(w,null),document.getElementById("root"))}],[[6,1,2]]]);
//# sourceMappingURL=main.2e8c278a.chunk.js.map