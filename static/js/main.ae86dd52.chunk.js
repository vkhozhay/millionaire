(this.webpackJsonpmillionaire=this.webpackJsonpmillionaire||[]).push([[0],{15:function(e,t,n){e.exports={answerContainer:"styles_answerContainer__XzjI0",answer:"styles_answer__2Zkrn",value:"styles_value__3giYo",valueLetter:"styles_valueLetter__NYzx0",valueText:"styles_valueText__arjuJ",selected:"styles_selected__11fOE",correct:"styles_correct__aSzDI",wrong:"styles_wrong__2n2Eu"}},24:function(e,t,n){e.exports={hexagon:"styles_hexagon__3NgT9",background:"styles_background__nKYle",selected:"styles_selected__2w_6w",correct:"styles_correct__1tE2B",wrong:"styles_wrong__3MgPT",active:"styles_active__3DpID",disable:"styles_disable__2EQSL",hover:"styles_hover__1WOKP"}},25:function(e,t,n){e.exports={progressBarContainer:"styles_progressBarContainer__1GbOw",closeBtn:"styles_closeBtn__WwAbL",progressBar:"styles_progressBar__2Drbv",progressActive:"styles_progressActive__1kTNN"}},26:function(e,t,n){e.exports={priceContainer:"styles_priceContainer__3daiL",price:"styles_price__xNy5k",value:"styles_value__dNi05",active:"styles_active__1JUTD",disable:"styles_disable__18eLv"}},27:function(e,t,n){e.exports={gameOverPage:"styles_gameOverPage__3GDdk",gameOverTitle:"styles_gameOverTitle__s8o74",subtitle:"styles_subtitle__2Ejxp",score:"styles_score__nJdw3"}},31:function(e,t,n){e.exports={pageContainer:"styles_pageContainer__wCGsT",handImg:"styles_handImg__2Y3RX",pageContent:"styles_pageContent__353BM"}},35:function(e,t,n){e.exports={startPage:"styles_startPage__2FVPX",startTitle:"styles_startTitle__WsIyc"}},37:function(e,t,n){e.exports={questionBody:"styles_questionBody__2j1u_",openProgressBtn:"styles_openProgressBtn__1SGZi"}},38:function(e,t,n){e.exports={questionTitleContainer:"styles_questionTitleContainer___2br4",questionTitle:"styles_questionTitle__2cSvr"}},50:function(e,t,n){e.exports={button:"styles_button__12U2K"}},52:function(e,t,n){e.exports={answersGroup:"styles_answersGroup__1z-p8"}},53:function(e,t,n){e.exports={mobileHeader:"styles_mobileHeader__1dQGc"}},54:function(e,t,n){e.exports={gameContainer:"styles_gameContainer__Q9q7q"}},86:function(e,t,n){},87:function(e,t,n){"use strict";n.r(t);var r,s=n(0),a=n(28),c=n.n(a),i=n(14),o=n(6),u=n(22),l=n(19),j=n(11),b=n(3);!function(e){e.SET_GAME_STATE="setGameState",e.INCREMENT_PROGRESS="incrementGameProgress",e.SET_SCORE="setGameScore",e.RESET_GAME="resetGame"}(r||(r={}));var _,d,O=r,p=(_={},Object(j.a)(_,O.SET_GAME_STATE,(function(e,t){return Object(b.a)(Object(b.a)({},e),{},{state:t.payload.state})})),Object(j.a)(_,O.INCREMENT_PROGRESS,(function(e){return Object(b.a)(Object(b.a)({},e),{},{progress:e.progress+1})})),Object(j.a)(_,O.SET_SCORE,(function(e,t){return Object(b.a)(Object(b.a)({},e),{},{score:t.payload.score})})),Object(j.a)(_,O.RESET_GAME,(function(e){return Object(b.a)(Object(b.a)({},e),{},{progress:0,score:0})})),_),f=Object(l.b)({name:"game",initialState:{state:0,progress:0,score:0},reducers:p}),v=f.reducer,m=f.actions,g=m.setGameState,x=m.incrementGameProgress,h=m.setGameScore,E=m.resetGame,T=v;!function(e){e.SET_ACTIVE_QUESTION="setActiveQuestion",e.SET_GAME_QUESTIONS="setGameQuestions",e.GET_ALL_QUESTIONS="questions/getAllQuestions"}(d||(d={}));var y,C,S=d,N=(y={},Object(j.a)(y,S.SET_ACTIVE_QUESTION,(function(e,t){return Object(b.a)(Object(b.a)({},e),{},{activeQuestion:t.payload.activeQuestion})})),Object(j.a)(y,S.SET_GAME_QUESTIONS,(function(e,t){return Object(b.a)(Object(b.a)({},e),{},{gameQuestions:t.payload.gameQuestions})})),y),w=n(13),A=n.n(w),G=n(18),Q=n(47),k=n(48),R=n(49),I=n.n(R),q=function(){function e(){Object(Q.a)(this,e)}return Object(k.a)(e,null,[{key:"getQuestions",value:function(){var e=Object(G.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",I.a.get("./questions.json"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),L=q,M=Object(l.a)(S.GET_ALL_QUESTIONS,Object(G.a)(A.a.mark((function e(){var t,n,r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],e.prev=1,e.next=4,L.getQuestions();case 4:n=e.sent,r=n.data,t=r,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log({e:e.t0});case 12:return e.abrupt("return",t);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))),B=function(e){e.addCase(M.pending,(function(e){return Object(b.a)(Object(b.a)({},e),{},{allQuestions:[]})})).addCase(M.fulfilled,(function(e,t){return Object(b.a)(Object(b.a)({},e),{},{allQuestions:t.payload})}))},P=Object(l.b)({name:"questions",initialState:{activeQuestion:{},gameQuestions:[],allQuestions:[]},reducers:N,extraReducers:B}),D=P.reducer,U=P.actions,V=U.setActiveQuestion,H=U.setGameQuestions,W={game:T,questions:D},J=Object(o.b)(W),z=Object(o.d)(J,Object(o.a)(u.a)),F=n(16),Y=n(4);!function(e){e.START="/start",e.GAME="/game",e.GAME_OVER="/game-over"}(C||(C={}));var K,X=C,Z=function(){return Object(i.b)()},$=i.c,ee=n(35),te=n.n(ee),ne=n(31),re=n.n(ne),se=n(50),ae=n.n(se),ce=n(1),ie=function(e){var t=e.name,n=e.onClick;return Object(ce.jsx)("button",{className:ae.a.button,type:"button",onClick:n,children:t})},oe=function(e){var t=e.actionName,n=e.actionHandler,r=e.children;return Object(ce.jsxs)("div",{className:re.a.pageContainer,children:[Object(ce.jsx)("div",{className:re.a.handImg}),Object(ce.jsxs)("div",{className:re.a.pageContent,children:[r,Object(ce.jsx)(ie,{name:t,onClick:n})]})]})},ue=function(){var e=Object(Y.g)(),t=Z(),n=Object(s.useCallback)((function(){t(g({state:1})),e.push(X.GAME)}),[]);return Object(ce.jsx)("div",{className:te.a.startPage,children:Object(ce.jsx)(oe,{actionName:"Start",actionHandler:n,children:Object(ce.jsx)("h1",{className:te.a.startTitle,children:"Who wants to be a millionaire?"})})})},le=n(20),je=function(e){return Math.floor(Math.random()*e)},be=function(e){return e.map((function(e){var t=je(e.questions.length);return e.questions[t]})).sort((function(e,t){return+e.price-+t.price}))},_e=n(37),de=n.n(_e),Oe=n(38),pe=n.n(Oe),fe=function(e){var t=e.value;return Object(ce.jsx)("div",{className:pe.a.questionTitleContainer,children:Object(ce.jsx)("h2",{className:pe.a.questionTitle,children:t})})},ve=n(12),me=n.n(ve),ge=n(15),xe=n.n(ge),he=n(24),Ee=n.n(he),Te=function(e){var t=e.hovered,n=e.variant,r=e.children;return Object(ce.jsxs)("div",{className:me()(Ee.a.hexagon,t&&Ee.a.hover,Ee.a[n]),children:[Object(ce.jsx)("svg",{className:me()(Ee.a.background),viewBox:"0 0 389 72",fill:"white",xmlns:"http://www.w3.org/2000/svg",children:Object(ce.jsx)("path",{d:"M23.8137 5.09773C25.9857 2.2033 29.3933 0.5 33.012 0.5H355.988C359.607 0.5 363.014 2.2033 365.186 5.09773L388.375 36L365.186 66.9023C363.014 69.7967 359.607 71.5 355.988 71.5H33.012C29.3933 71.5 25.9857 69.7967 23.8137 66.9023L0.625116 36L23.8137 5.09773Z",fill:"white",stroke:"#D0D0D8"})}),r]})};!function(e){e.SELECTED="selected",e.CORRECT="correct",e.WRONG="wrong",e.ACTIVE="active",e.DISABLE="disable",e.DEFAULT="default"}(K||(K={}));var ye=function(e){var t=e.letter,n=e.answer,r=e.onClick,s=e.selected,a=e.correct,c=e.wrong,i=e.clicked,o=s&&K.SELECTED||a&&K.CORRECT||c&&K.WRONG||K.DEFAULT;return Object(ce.jsx)("div",{className:me()(xe.a.answerContainer,xe.a[o]),children:Object(ce.jsx)("div",{className:xe.a.answer,role:"presentation",onClick:r.bind(null,n),children:Object(ce.jsx)(Te,{hovered:!i,variant:o,children:Object(ce.jsxs)("div",{className:xe.a.value,children:[Object(ce.jsx)("span",{className:xe.a.valueLetter,children:t}),Object(ce.jsx)("p",{className:xe.a.valueText,children:n.value})]})})})})},Ce=n(52),Se=n.n(Ce),Ne=function(e){return new Promise((function(t){return setTimeout(t,e)}))},we=Array.from(Array(26)).map((function(e,t){return t+65})).map((function(e){return String.fromCharCode(e)})),Ae=n(55),Ge=function(e){return Object(Ae.a)(e).sort((function(){return Math.round(100*Math.random())-50}))},Qe=function(e,t){var n=Ge(e),r=n.findIndex((function(e){return e.id===t})),s=n.splice(r,1)[0],a=n.splice(0,3);return a.splice(je(3),0,s),a},ke={selected:null,correct:null,wrong:null},Re=function(){var e=Object(s.useState)([]),t=Object(le.a)(e,2),n=t[0],r=t[1],a=Object(s.useState)(Object(b.a)({},ke)),c=Object(le.a)(a,2),i=c[0],o=c[1],u=i.selected,l=i.correct,j=i.wrong,_=Object(s.useState)(!1),d=Object(le.a)(_,2),O=d[0],p=d[1],f=Z(),v=$((function(e){return e.questions.activeQuestion})),m=$((function(e){return e.game.progress})),E=$((function(e){return e.questions.gameQuestions})),T=Object(Y.g)(),y=Object(s.useCallback)(function(){var e=Object(G.a)(A.a.mark((function e(t){var n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(u||l||j)){e.next=2;break}return e.abrupt("return");case 2:return n=v.answer,p(!0),o((function(e){return Object(b.a)(Object(b.a)({},e),{},{selected:t.id})})),e.next=7,Ne(1e3);case 7:return o((function(e){return Object(b.a)(Object(b.a)({},e),{},{selected:null,correct:n})})),n!==t.id&&o((function(e){return Object(b.a)(Object(b.a)({},e),{},{wrong:t.id})})),e.next=11,Ne(1500);case 11:if(o(Object(b.a)({},ke)),p(!1),t.id!==n){e.next=18;break}return m===E.length-1&&(f(g({state:2})),T.push(X.GAME_OVER)),f(x({})),f(h({score:+v.price})),e.abrupt("return");case 18:f(g({state:2})),T.push(X.GAME_OVER);case 20:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[v,u,l,j]);return Object(s.useEffect)((function(){r(Qe(v.variants,v.answer))}),[v]),Object(ce.jsx)("div",{className:Se.a.answersGroup,children:n.map((function(e,t){return Object(ce.jsx)(ye,{letter:we[t],answer:e,clicked:O,onClick:y,selected:u===e.id,correct:l===e.id,wrong:j===e.id},e.id)}))})},Ie=n(53),qe=n.n(Ie),Le=function(e){var t=e.children;return Object(ce.jsx)("div",{className:qe.a.mobileHeader,children:t})},Me=function(e){var t=e.onOpenProgress,n=$((function(e){return e.questions.activeQuestion}));return(null===n||void 0===n?void 0:n.id)?Object(ce.jsxs)("div",{className:de.a.questionBody,children:[Object(ce.jsx)(Le,{children:Object(ce.jsx)("div",{className:de.a.openProgressBtn,role:"presentation",onClick:t})}),Object(ce.jsx)(fe,{value:n.question}),Object(ce.jsx)(Re,{})]}):null},Be=n(25),Pe=n.n(Be),De=n(26),Ue=n.n(De),Ve=function(e){return Number(+e).toLocaleString("en-US")},He=function(e,t){return e>t?K.DISABLE:e===t?K.ACTIVE:K.DEFAULT},We=function(e){var t=e.price,n=e.currentIndex,r=$((function(e){return e.game.progress})),s=He(r,n);return Object(ce.jsx)("div",{className:me()(Ue.a.priceContainer,Ue.a[s]),children:Object(ce.jsx)("div",{className:Ue.a.price,children:Object(ce.jsx)(Te,{hovered:!1,variant:s,children:Object(ce.jsx)("div",{className:Ue.a.value,children:"$".concat(Ve(t))})})})})},Je=function(e){var t=e.active,n=e.onClose,r=$((function(e){return e.questions.gameQuestions}));return Object(ce.jsxs)("div",{className:me()(Pe.a.progressBarContainer,t&&Pe.a.progressActive),children:[Object(ce.jsx)(Le,{children:Object(ce.jsx)("div",{className:Pe.a.closeBtn,role:"presentation",onClick:n})}),Object(ce.jsx)("div",{className:Pe.a.progressBar,children:r.map((function(e,t){return Object(ce.jsx)(We,{price:e.price,currentIndex:t},e.id)}))})]})},ze=n(54),Fe=n.n(ze),Ye=function(){var e=$((function(e){return e.questions.allQuestions})),t=$((function(e){return e.questions.gameQuestions})),n=$((function(e){return e.game.state})),r=$((function(e){return e.game.progress})),a=Z(),c=Object(s.useState)(!1),i=Object(le.a)(c,2),o=i[0],u=i[1],l=Object(s.useCallback)((function(){return u(!0)}),[]),j=Object(s.useCallback)((function(){return u(!1)}),[]);return Object(s.useEffect)((function(){if(1===n){var t=be(e);t.length>0&&a(H({gameQuestions:t}))}}),[n]),Object(s.useEffect)((function(){a(V({activeQuestion:t[r]}))}),[r,t]),Object(ce.jsxs)("div",{className:Fe.a.gameContainer,children:[Object(ce.jsx)(Me,{onOpenProgress:l}),Object(ce.jsx)(Je,{active:o,onClose:j})]})},Ke=n(27),Xe=n.n(Ke),Ze=function(){var e=$((function(e){return e.game.score})),t=Object(Y.g)(),n=Z(),r=Object(s.useCallback)((function(){n(g({state:1})),n(E({})),t.push(X.GAME)}),[]),a="$".concat(Ve(e)," earned");return Object(ce.jsx)("div",{className:Xe.a.gameOverPage,children:Object(ce.jsx)(oe,{actionName:"Try again",actionHandler:r,children:Object(ce.jsxs)("div",{className:Xe.a.gameOverTitle,children:[Object(ce.jsx)("span",{className:Xe.a.subtitle,children:"Total score:"}),Object(ce.jsx)("h2",{className:Xe.a.score,children:a})]})})})},$e=[{path:X.START,component:ue,exact:!0},{path:X.GAME,component:Ye,exact:!0},{path:X.GAME_OVER,component:Ze,exact:!0}],et=function(){var e=Object(Y.g)();return Object(s.useEffect)((function(){e.location.pathname!==X.START&&e.push(X.START)}),[]),Object(ce.jsxs)(Y.d,{children:[$e.map((function(e){return Object(ce.jsx)(Y.b,{path:e.path,exact:e.exact,component:e.component},e.path)})),Object(ce.jsx)(Y.a,{to:X.START})]})},tt=(n(86),function(){var e=Object(i.b)();return Object(s.useEffect)((function(){e(M())}),[]),Object(ce.jsx)(F.a,{children:Object(ce.jsx)(et,{})})});c.a.render(Object(ce.jsx)(i.a,{store:z,children:Object(ce.jsx)(tt,{})}),document.getElementById("root"))}},[[87,1,2]]]);
//# sourceMappingURL=main.ae86dd52.chunk.js.map