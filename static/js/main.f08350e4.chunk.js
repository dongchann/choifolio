(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){e.exports=n(35)},,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(10),c=n.n(l);n(23),n(24),n(25);var i=function(){return r.a.createElement("div",{className:"Footer"},r.a.createElement("div",{className:"footer_end"},r.a.createElement("h3",null,"Choifolio"),r.a.createElement("p",null,"dongchann91@gmail.com"),r.a.createElement("ul",null,r.a.createElement("li",{className:"gmail"},r.a.createElement("a",{href:"./"},"  ")))))};n(26);var o=function(){return r.a.createElement("div",{className:"Header"},r.a.createElement("div",{className:"Container"},r.a.createElement("div",{className:"HeaderLeft"},r.a.createElement("div",{className:"MenuToggle"},r.a.createElement("span",null))),r.a.createElement("div",{className:"HeaderCenter"},r.a.createElement("a",{href:"/"},"Choifolio")),r.a.createElement("div",{className:"HeaderSub"},r.a.createElement("button",{type:"button",className:"PortfolioBag"},"PortFolio"))))};n(27),n(28);var m=function(){return r.a.createElement("div",{className:"SectionHome"},r.a.createElement("div",{className:"SectionHomeSlider"},r.a.createElement("div",{className:"SectionHomeSlider-container"},r.a.createElement("div",{className:"tp-container"},r.a.createElement("div",{className:"tp-slideshow",id:"slider",style:{opacity:1,visibility:"false"}},r.a.createElement("ul",{className:"tp-slideshow-mainul"},r.a.createElement("li",{className:"tp-slideshow-active"},r.a.createElement("div",{className:"slotholder"},r.a.createElement("div",{className:"tp-bgimg"},"sss"),r.a.createElement("div",{className:"caption"},r.a.createElement("div",{className:"caption-text-01"},'"\ucd5c\ub3d9\ucc2c"',r.a.createElement("span",null,"Portfoilo"),'"2022"'),r.a.createElement("div",{className:"caption-text-02"}),r.a.createElement("button",{className:"caption-text-02"}))))))))))},s=n(3),u=(n(29),n(14)),d=[{id:1,text:"\ud3ec\ud2b8\ud3f4\ub9ac\uc624 \uad6c\uc0c1",done:!0},{id:2,text:"\ub808\uc774\uc544\uc6c3 \ub808\ud37c\ub7f0\uc2a4",done:!0},{id:3,text:"\ub808\uc774\uc544\uc6c3 \uad6c\uc0c1, \uc801\uc6a9",done:!1},{id:4,text:"\uae30\ub2a5 \uad6c\ud604\ud558\uae30",done:!1}];function p(e,t){switch(t.type){case"CREATE":return e.concat(t.todo);case"TOGGLE":return e.map(function(e){return e.id===t.id?Object(u.a)({},e,{done:!e.done}):e});case"REMOVE":return e.filter(function(e){return e.id!==t.id});default:throw new Error("Unhandled action type: ".concat(t.type))}}var E=Object(a.createContext)(),f=Object(a.createContext)(),b=Object(a.createContext)();function v(e){var t=e.children,n=Object(a.useReducer)(p,d),l=Object(s.a)(n,2),c=l[0],i=l[1],o=Object(a.useRef)(5);return r.a.createElement(E.Provider,{value:c},r.a.createElement(f.Provider,{value:i},r.a.createElement(b.Provider,{value:o},t)))}function g(){var e=Object(a.useContext)(E);if(!e)throw new Error("Cannot find TodoProvider");return e}function x(){var e=Object(a.useContext)(f);if(!e)throw new Error("Cannot find TodoProvider");return e}var h,N,j,_,w,y=n(1),O=n(2),C=n(4),k=O.b.button(h||(h=Object(y.a)(["\n  background: #38d9a9;\n  &:hover {\n    background: #63e6be;\n  }\n  &:active {\n    background: #20c997;\n  }\n\n  z-index: 5;\n  cursor: pointer;\n  width: 80px;\n  height: 80px;\n  display: block;\n  align-items: center;\n  justify-content: center;\n  font-size: 60px;\n  position: absolute;\n  left: 50%;\n  bottom: 0px;\n  transform: translate(-50%, 50%);\n  color: white;\n  border-radius: 50%;\n  border: none;\n  outline: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  transition: 0.125s all ease-in;\n  ","\n"])),function(e){return e.open&&Object(O.a)(N||(N=Object(y.a)(["\n      background: #ff6b6b;\n      &:hover {\n        background: #ff8787;\n      }\n      &:active {\n        background: #fa5252;\n      }\n      transform: translate(-50%, 50%) rotate(45deg);\n    "])))}),S=O.b.div(j||(j=Object(y.a)(["\n  width: 100%;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n"]))),M=O.b.form(_||(_=Object(y.a)(["\n  background: #f8f9fa;\n  padding-left: 32px;\n  padding-top: 32px;\n  padding-right: 32px;\n  padding-bottom: 72px;\n\n  border-bottom-left-radius: 16px;\n  border-bottom-right-radius: 16px;\n  border-top: 1px solid #e9ecef;\n"]))),P=O.b.input(w||(w=Object(y.a)(["\n  padding: 12px;\n  border-radius: 4px;\n  border: 1px solid #dee2e6;\n  width: 100%;\n  outline: none;\n  font-size: 18px;\n  box-sizing: border-box;\n"])));var T,F=r.a.memo(function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],l=t[1],c=Object(a.useState)(""),i=Object(s.a)(c,2),o=i[0],m=i[1],u=x(),d=function(){var e=Object(a.useContext)(b);if(!e)throw new Error("Cannot find TodoProvider");return e}();return r.a.createElement(r.a.Fragment,null,n&&r.a.createElement(S,null,r.a.createElement(M,{onSubmit:function(e){e.preventDefault(),u({type:"CREATE",todo:{id:d.current,text:o,done:!1}}),m(""),l(!1),d.current+=1}},r.a.createElement(P,{autoFocus:!0,placeholder:"\ud560 \uc77c\uc744 \uc785\ub825 \ud6c4, Enter \ub97c \ub204\ub974\uc138\uc694",onChange:function(e){return m(e.target.value)},value:o}))),r.a.createElement(k,{onClick:function(){return l(!n)},open:n},r.a.createElement(C.a,null)))}),z=O.b.div(T||(T=Object(y.a)(["\n  padding-top: 48px;\n  padding-left: 32px;\n  padding-right: 32px;\n  padding-bottom: 24px;\n  border-bottom: 1px solid #e9ecef;\n  h1 {\n    margin: 0;\n    font-size: 36px;\n    color: #343a40;\n  }\n  .day {\n    margin-top: 4px;\n    color: #868e96;\n    font-size: 21px;\n  }\n  .tasks-left {\n    color: #20c997;\n    font-size: 18px;\n    margin-top: 40px;\n    font-weight: bold;\n  }\n"])));var L,R,H,q,B,D,Q=function(){var e=g().filter(function(e){return!e.done}),t=new Date,n=t.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"}),a=t.toLocaleDateString("ko-KR",{weekday:"long"});return r.a.createElement(z,null,r.a.createElement("h1",null,n),r.a.createElement("div",{className:"day"},a),r.a.createElement("div",{className:"tasks-left"},"\ud560 \uc77c ",e.length,"\uac1c \ub0a8\uc74c"))},G=O.b.div(L||(L=Object(y.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #dee2e6;\n  font-size: 24px;\n  cursor: pointer;\n  &:hover {\n    color: #ff6b6b;\n  }\n  display: none;\n"]))),I=O.b.div(R||(R=Object(y.a)(["\n  display: flex;\n  align-items: center;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  &:hover {\n    "," {\n      display: initial;\n    }\n  }\n"])),G),A=O.b.div(H||(H=Object(y.a)(["\n  width: 32px;\n  height: 32px;\n  border-radius: 16px;\n  border: 1px solid #ced4da;\n  font-size: 24px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 20px;\n  cursor: pointer;\n  ","\n"])),function(e){return e.done&&Object(O.a)(q||(q=Object(y.a)(["\n      border: 1px solid #38d9a9;\n      color: #38d9a9;\n    "])))}),J=O.b.div(B||(B=Object(y.a)(["\n  flex: 1;\n  font-size: 21px;\n  color: #495057;\n  ","\n"])),function(e){return e.done&&Object(O.a)(D||(D=Object(y.a)(["\n      color: #ced4da;\n    "])))});var K,V=r.a.memo(function(e){var t=e.id,n=e.done,a=e.text,l=x();return r.a.createElement(I,null,r.a.createElement(A,{done:n,onClick:function(){return l({type:"TOGGLE",id:t})}},n&&r.a.createElement(C.c,null)),r.a.createElement(J,{done:n},a),r.a.createElement(G,{onClick:function(){return l({type:"REMOVE",id:t})}},r.a.createElement(C.b,null)))}),U=O.b.div(K||(K=Object(y.a)(["\n  flex: 1;\n  padding: 20px 32px;\n  padding-bottom: 48px;\n  border-radius: 16px;\n  overflow-y: auto;\n  background: #fff; /* \uc0ac\uc774\uc988 \uc870\uc815\uc774 \uc798 \ub418\uace0 \uc788\ub294\uc9c0 \ud655\uc778\ud558\uae30 \uc704\ud55c \uc784\uc2dc \uc2a4\ud0c0\uc77c */\n"])));var Y,W=function(){var e=g();return r.a.createElement(U,null,e.map(function(e){return r.a.createElement(V,{key:e.id,id:e.id,text:e.text,done:e.done})}))},X=O.b.div(Y||(Y=Object(y.a)(["\n  width: 512px;\n  height: 768px;\n\n  position: relative; /* \ucd94\ud6c4 \ubc15\uc2a4 \ud558\ub2e8\uc5d0 \ucd94\uac00 \ubc84\ud2bc\uc744 \uc704\uce58\uc2dc\ud0a4\uae30 \uc704\ud55c \uc124\uc815 */\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);\n\n  margin: 0 auto; /* \ud398\uc774\uc9c0 \uc911\uc559\uc5d0 \ub098\ud0c0\ub098\ub3c4\ub85d \uc124\uc815 */\n\n  margin-top: 96px;\n  margin-bottom: 32px;\n  display: flex;\n  flex-direction: column;\n"])));var Z=function(e){var t=e.children;return r.a.createElement(X,null,t)};var $=function(e){var t=e.closeModal;return Object(a.useEffect)(function(){return document.body.style.cssText="\n      position: fixed; \n      top: -".concat(window.scrollY,"px;\n      overflow-y: scroll;\n      width: 100%;"),function(){var e=document.body.style.top;document.body.style.cssText="",window.scrollTo(0,-1*parseInt(e||"0",10))}},[]),r.a.createElement("div",{className:"OpenModal"},r.a.createElement("div",{className:"ModalBackground"},r.a.createElement(v,null,r.a.createElement(Z,null,r.a.createElement(Q,null),r.a.createElement(W,null),r.a.createElement(F,null)))),r.a.createElement("button",{onClick:t},"\ubc84\ud2bc\uc785\ub2c8\ub2e4"))};n(31);var ee=function(){var e=Object(a.useState)(!1),t=Object(s.a)(e,2),n=t[0],l=t[1];return r.a.createElement("div",{className:"SectionMiddle"},r.a.createElement("div",{className:"Container"},r.a.createElement("div",{className:"ps-section__header"},r.a.createElement("h3",null,"#mini Project"),r.a.createElement("p",null,"Quisque sit amet ex at orci posuere ullamcorper.",r.a.createElement("br",null),"Maecenas at iaculis diam. Nulla sem mauris, posuere id orci eget,",r.a.createElement("br",null),"rutrum efficitur nisl.",r.a.createElement("br",null))),r.a.createElement("div",{className:"btn_wrap"},r.a.createElement("button",{type:"button",className:"view-all"},"Our Stories")),r.a.createElement("div",{className:"project"},r.a.createElement("div",{className:"project-item"},r.a.createElement("a",{href:"./",className:"project-item__thumbnail"},r.a.createElement("img",{src:"//cdn.shopify.com/s/files/1/0008/2421/3556/files/1_grande.png?v=1521366371",alt:"article_image"})),r.a.createElement("div",{className:"project-item__content"},r.a.createElement("h4",{className:"project-item__title"},r.a.createElement("a",{href:"./"},"what we do?")),r.a.createElement("p",{className:"project-item__text"},"\uac00Quisque sit amet ex at orci posuere ullamcorper.Maecenas at iaculis diam. Nulla sem mauris, posuere id orci eget, rutrum efficitur nisl."),r.a.createElement("button",{type:"button",className:"more__btn",onClick:function(){l(!0)}}),!0===n?r.a.createElement($,{closeModal:function(){l(!1)}}):null)),r.a.createElement("div",{className:"project-item"},r.a.createElement("a",{href:"./",className:"project-item__thumbnail"},r.a.createElement("img",{src:"https://cdn.shopify.com/s/files/1/0008/2421/3556/files/3_grande.png?v=1521366391",alt:"article_image"})),r.a.createElement("div",{className:"project-item__content"},r.a.createElement("h4",{className:"project-item__title"},r.a.createElement("a",{href:"./"},"what we do?")),r.a.createElement("p",{className:"project-item__text"},"\uac00Quisque sit amet ex at orci posuere ullamcorper.Maecenas at iaculis diam. Nulla sem mauris, posuere id orci   eget, rutrum efficitur nisl."),r.a.createElement("a",{href:"./",className:"more__btn"}," "))),r.a.createElement("div",{className:"project-item"},r.a.createElement("a",{href:"./",className:"project-item__thumbnail"},r.a.createElement("img",{src:"//cdn.shopify.com/s/files/1/0008/2421/3556/files/2_grande.png?v=1521366381",alt:"article_image"})),r.a.createElement("div",{className:"project-item__content"},r.a.createElement("h4",{className:"project-item__title"},r.a.createElement("a",{href:"./"},"what we do?")),r.a.createElement("p",{className:"project-item__text"},"Sed consectetur tellus eget odio aliquet, vel vestibulum tellus sollicitudin."),r.a.createElement("a",{href:"./",className:"more__btn"}," "))))))};n(32);var te=function(){var e=Object(a.useState)(["1","2","3","4","5","6","7","8"]),t=Object(s.a)(e,1)[0];return r.a.createElement("div",{className:"SectionPortFolio"},r.a.createElement("div",{className:"PortFolio_Container"},r.a.createElement("div",{className:"ps-section__header"},r.a.createElement("h3",null,"#mini Project"),r.a.createElement("p",null,"Quisque sit amet ex at orci posuere ullamcorper.",r.a.createElement("br",null),"Maecenas at iaculis diam. Nulla sem mauris, posuere id orci eget,",r.a.createElement("br",null),"rutrum efficitur nisl.",r.a.createElement("br",null))),r.a.createElement("div",{className:"btn_wrap"},r.a.createElement("button",{type:"button",className:"view-tab"},"Our Stories"),r.a.createElement("button",{type:"button",className:"view-tab"},"Our Stories"),r.a.createElement("button",{type:"button",className:"view-tab"},"Our Stories")),r.a.createElement("div",{className:"contents"},t.map(function(e){return r.a.createElement("div",{className:"contents-item",key:e},r.a.createElement("a",{href:"./",className:"contents-item__thumbnail"},r.a.createElement("img",{src:"//cdn.shopify.com/s/files/1/0008/2421/3556/files/1_grande.png?v=1521366371",alt:"article_image"})),r.a.createElement("div",{className:"contents-item__content"},r.a.createElement("h4",{className:"contents-item__title"},r.a.createElement("a",{href:"./"},"what we do?")),r.a.createElement("p",{className:"contents-item__text"},"\uac00\ub098\ub2e4\ub77c \ub9c8\uc0ac"),r.a.createElement("a",{href:"./",className:"more__btn"}," ")))}))))};var ne=function(){return r.a.createElement("div",{className:"Main"},r.a.createElement(m,null),r.a.createElement(ee,null),r.a.createElement(te,null))};n(33),n(34);var ae=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],l=t[1];return r.a.createElement("div",{className:"contents-section__header"},r.a.createElement("h3",null,"#mini Project"),r.a.createElement("p",null,"Quisque sit amet ex at orci posuere ullamcorper.",r.a.createElement("br",null),"Maecenas at iaculis diam. Nulla sem mauris, posuere id orci eget,",r.a.createElement("br",null),"rutrum efficitur nisl.",r.a.createElement("br",null)),r.a.createElement("div",{className:"input_box"},r.a.createElement("input",{type:"email",name:"EMAIL",id:"Email",className:"emailBox",placeholder:"Email"}),r.a.createElement("button",{type:"submit",className:"email_submit",onClick:function(){l(function(){alert("\ud658\uc601")})}},n,"send")))};var re=function(){return r.a.createElement("div",{className:"Layout"},r.a.createElement(o,null),r.a.createElement(ne,null,r.a.createElement("h2",null,"\uba54\uc778")),r.a.createElement(ae,null),r.a.createElement(i,null))};var le=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(re,null))},ce=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,36)).then(function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,l=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),l(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(le,null))),ce()}],[[15,1,2]]]);
//# sourceMappingURL=main.f08350e4.chunk.js.map