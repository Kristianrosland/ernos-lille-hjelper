(this["webpackJsonprubiks-helper"]=this["webpackJsonprubiks-helper"]||[]).push([[0],{1:function(e,t,a){e.exports={cubeTimerContainer:"cubeTimerContainer_Ay0n8",scrambleContainer:"scrambleContainer_1a119",scramble:"scramble_34LiX",previousScramble:"previousScramble_2GkcP",timerContainer:"timerContainer_2V7Gk",solves:"solves_36Clh",timer:"timer_txBap",holding:"holding_pWB_3",time:"time_8_DXF",largeTimer:"largeTimer_2BxXc",removeSolveButton:"removeSolveButton_3O9hc",removeSolveIcon:"removeSolveIcon_2sa-v",previousSolvesContainer:"previousSolvesContainer_2Nlpf",fadeOut:"fadeOut_2pNEi",previousSolves:"previousSolves_1FCIY",startButton:"startButton_vAJGC",statsContainerMobile:"statsContainerMobile__pKov",heading:"heading_2iuV3",statsContainerDesktop:"statsContainerDesktop_RlG47",statElement:"statElement_23lF2",statLabel:"statLabel_EWClq",statValue:"statValue_16cgT",handButtonsAndSolveTimeContainer:"handButtonsAndSolveTimeContainer_yMfb8",leftHand:"leftHand_7QfGS"}},15:function(e,t,a){e.exports={form:"form_1YvAP",heading:"heading_tu83N",input:"input_3xoZQ",loginButton:"loginButton_10BGo",error:"error_3_78z"}},24:function(e,t,a){e.exports={container:"container_2I3pj",textColor:"textColor_1BWe8",bottomBorder:"bottomBorder_2f-iS",goToRegisterLink:"goToRegisterLink_1jSe-"}},25:function(e,t,a){e.exports={container:"container_3E2_Q",textColor:"textColor_2I3YX",bottomBorder:"bottomBorder_1awHt",goToLoginLink:"goToLoginLink_E3FTV"}},29:function(e,t,a){e.exports={container:"container_23up_",queryInput:"queryInput_g6eat",image:"image_2atOG"}},32:function(e,t,a){e.exports={loginButton:"loginButton_3iU6Y",userIcon:"userIcon_2Dvg6"}},48:function(e,t,a){e.exports=a.p+"static/media/DD1a.42a5250c.png"},49:function(e,t,a){e.exports=a.p+"static/media/DD4a.7e40e810.png"},50:function(e,t,a){e.exports=a.p+"static/media/DD5b.8523dd28.png"},51:function(e,t,a){e.exports=a.p+"static/media/DR5a.c6815c41.png"},52:function(e,t,a){e.exports=a.p+"static/media/UL1a.137fcb5f.png"},53:function(e,t,a){e.exports=a.p+"static/media/UL5a.17a229fd.png"},54:function(e,t,a){e.exports=a.p+"static/media/UL5b.88630ad9.png"},55:function(e,t,a){e.exports=a.p+"static/media/UR1b.0de51f6b.png"},56:function(e,t,a){e.exports=a.p+"static/media/UR5a.b4cb91ea.png"},57:function(e,t,a){e.exports=a.p+"static/media/UR5b.3af93687.png"},58:function(e,t,a){e.exports=a.p+"static/media/UU4b.a4f90bee.png"},62:function(e,t,a){e.exports=a(94)},75:function(e,t){},93:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n,r,o,c=a(0),s=a.n(c),i=a(47),l=a.n(i),u=a(19),m=a(14),d=a(3),v=a(29),p=a.n(v),f=a(48),b=a.n(f),g=a(49),h=a.n(g),E=a(50),O=a.n(E),j=a(51),S=a.n(j),U=a(52),x=a.n(U),N=a(53),k=a.n(N),R=a(54),C=a.n(R),_=a(55),w=a.n(_),y=a(56),B=a.n(y),L=a(57),T=a.n(L),D=a(58),I=a.n(D),M=[{src:x.a,name:"UL1a",alg:"y' U (R' U R U') (R' U' R)"},{src:w.a,name:"UR1b",alg:"y' U (R' U2 R) U' y (R U R')"},{src:I.a,name:"UU4b",alg:"y' U' (R' U R U) (R' U R U') (R' U R)"},{src:k.a,name:"UL5a",alg:"(U' R U' R') U2 (R U' R')"},{src:C.a,name:"UL5b",alg:"(U' R U R') U y' (R' U' R)"},{src:b.a,name:"DD1a",alg:"U (R U' R') U' (F' U F)"},{src:B.a,name:"UR5a",alg:"U (R U R') U2 (R U R')"},{src:T.a,name:"UR5b",alg:"U (F' U' F) U' (R U R')"},{src:S.a,name:"DR5a",alg:"(R U' R' U) (R U2' R') U (R U' R')"},{src:O.a,name:"DD5b",alg:""},{src:h.a,name:"DD4a",alg:"U' F' (R U R' U') R' F R"}],F=function(){var e=Object(c.useState)(""),t=Object(d.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)([]),o=Object(d.a)(r,2),i=o[0],l=o[1];return s.a.createElement("div",{className:p.a.container},s.a.createElement("input",{value:a,onChange:function(e){var t=e.target.value.toUpperCase();if(n(t),3===t.length){var a=M.filter((function(e){return e.name.startsWith(t)}));l(a),n("")}},className:p.a.queryInput}),i.map((function(e){return s.a.createElement("img",{key:e.name,src:e.src,className:p.a.image,alt:"Solution"})})))},A=a(4),V=a.n(A),G=a(9),W=a(59),P=a.n(W),H=a(23),K=a(11),J=a(13),q=a.n(J),Q=(a(76),a(78),function(e){switch(e.code){case"auth/wrong-password":return"Feil passord";case"auth/user-not-found":return"Brukeren finnes ikke";case"auth/invalid-email":return"Ugyldig epostadresse";case"auth/weak-password":return"For svakt passord!";default:return console.error(e.code),"Oops.. Noe gikk galt!"}});q.a.initializeApp({apiKey:"AIzaSyAW_PdA6o5ygKubwsxaQfJ22dgWE5fA41U",authDomain:"cubeguru-79b7d.firebaseapp.com",databaseURL:"https://cubeguru-79b7d.firebaseio.com",projectId:"cubeguru-79b7d",storageBucket:"cubeguru-79b7d.appspot.com",messagingSenderId:"1042814909264",appId:"1:1042814909264:web:e79fa88d14f9f4669c4a55",measurementId:"G-Z2GMHWJ2NG"});var X=Object(c.createContext)({user:null,isLoading:!1,signIn:function(){var e=Object(G.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),signUp:function(){var e=Object(G.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),signOut:function(){var e=Object(G.a)(V.a.mark((function e(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}),Y=Object(c.createContext)({sessionSolves:[],stored:{best:void 0},addNewSolve:function(){},removeStoredSolve:function(){}}),z=function(e){var t=e.children,a=Object(c.useState)({user:null,isLoading:!0}),i=Object(d.a)(a,2),l=i[0],u=i[1],m=Object(c.useState)({sessionSolves:[],stored:{best:void 0}}),v=Object(d.a)(m,2),p=v[0],f=v[1],b=function(e){return f((function(t){return Object(K.a)({},t,{stored:Object(K.a)({},t.stored,{best:e})})}))},g=function(e){l.user&&q.a.firestore().collection("solves").doc(l.user.uid).set({best:null!==e&&void 0!==e?e:q.a.firestore.FieldValue.delete()},{merge:!0})},h=function(){var e=Object(G.a)(V.a.mark((function e(t){var a,n;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f((function(e){return Object(K.a)({},e,{sessionSolves:[t].concat(Object(H.a)(e.sessionSolves))})})),!l.user||!r){e.next=7;break}return a=r.doc(),e.next=5,a.set(t);case 5:n=Object(K.a)({},t,{id:a.id}),(void 0===p.stored.best||p.stored.best.time>t.time)&&(b(n),g(n));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(G.a)(V.a.mark((function e(t){var a;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f(Object(K.a)({},p,{sessionSolves:p.sessionSolves.filter((function(e){return e.timestamp!==t.timestamp}))})),!l.user||!r){e.next=5;break}return e.next=4,r.where("timestamp","==",t.timestamp).get().then((function(e){return e.docs.forEach((function(e){return e.ref.delete()}))}));case 4:(null===(a=p.stored.best)||void 0===a?void 0:a.timestamp)===t.timestamp&&r.orderBy("time","asc").limit(1).get().then((function(e){return e.docs.map((function(e){return Object(K.a)({},e.data(),{id:e.id})}))})).then((function(e){if(0===e.length)g(void 0),b(void 0);else{var t=e[0];b(t),g(t)}}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=function(){var e=Object(G.a)(V.a.mark((function e(t,a){var r;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,null===(r=n)||void 0===r?void 0:r.signInWithEmailAndPassword(t,a);case 3:return e.abrupt("return",null);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",Q(e.t0));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),j=function(){var e=Object(G.a)(V.a.mark((function e(t,a,r){var o,c,s;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.a.firestore().collection("userdata").where("username","==",r).get();case 3:if(e.t0=e.sent.docs.length,!(e.t0>0)){e.next=7;break}return e.abrupt("return","Dette brukernavnet er dessverre opptatt");case 7:return e.next=9,null===(o=n)||void 0===o?void 0:o.createUserWithEmailAndPassword(t,a);case 9:if(s=e.sent){e.next=12;break}return e.abrupt("return","Noe gikk galt med opprettelsen av din konto");case 12:if(!(null===(c=s.user)||void 0===c?void 0:c.uid)){e.next=15;break}return e.next=15,q.a.firestore().collection("userdata").doc(s.user.uid).set({username:r});case 15:return e.abrupt("return",null);case 18:return e.prev=18,e.t1=e.catch(0),e.abrupt("return",Q(e.t1));case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t,a,n){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){n||(n=q.a.auth()).onAuthStateChanged((function(e){u({user:e,isLoading:!1}),null===e?r=void 0:function(e){o=q.a.firestore().collection("solves").doc(e.uid),r=o.collection("all_solves"),o.get().then((function(e){return e.data()})).then((function(e){e&&e.best&&b(e.best)})),q.a.firestore().collection("userdata").doc(e.uid).get().then((function(t){var a=t.data();if(a&&"username"in a){var n=Object(K.a)({},e,{username:a.username});u((function(e){return Object(K.a)({},e,{user:n})}))}}))}(e)}))}),[]),s.a.createElement(X.Provider,{value:Object(K.a)({},l,{signIn:O,signUp:j,signOut:function(){var e;null===(e=n)||void 0===e||e.signOut(),f((function(e){return Object(K.a)({},e,{stored:{best:void 0}})}))}})},s.a.createElement(Y.Provider,{value:Object(K.a)({},p,{addNewSolve:h,removeStoredSolve:E})},t))},Z=a(6),$=a.n(Z),ee=a(32),te=a.n(ee),ae=function(){var e=Object(c.useContext)(X),t=e.user,a=e.isLoading,n=e.signOut,r=Object(m.e)();return a?null:s.a.createElement("div",{className:te.a.loginButton,onClick:function(){a||(t?n():r.push("/login"))}},s.a.createElement("i",{className:$()("fas fa-user",te.a.userIcon)}),t?t.username:"Logg inn")},ne=a(1),re=a.n(ne),oe=function(e){return("0"+e).slice(-2)},ce=function(){return(new Date).getTime()},se=function(e){var t=Math.floor(e/6e4),a=Math.floor(e/1e3)%60,n=Math.floor(e%1e3/10);return"".concat(t>0?t+":":"").concat(t>0?oe(a):a,".").concat(oe(n))},ie=function(e){var t=e.newScramble,a=Object(c.useState)(),n=Object(d.a)(a,2),r=n[0],o=n[1],i=Object(c.useState)(),l=Object(d.a)(i,2),u=l[0],m=l[1];return Object(c.useEffect)((function(){t!==r&&(m(r),o(t))}),[t,r,m]),s.a.createElement("div",{className:re.a.scrambleContainer},s.a.createElement("div",{className:re.a.scramble},r),r&&s.a.createElement("div",{className:re.a.previousScramble},u))},le=a(35),ue=a.n(le);ue.a.initSolver();var me,de=function(e){return Math.min.apply(Math,Object(H.a)(e.map((function(e){return e.time}))))},ve=function(e){return Math.max.apply(Math,Object(H.a)(e.map((function(e){return e.time}))))},pe=function(e){return e.reduce((function(e,t){return e+t.time}),0)},fe=function(e){return pe(e)-de(e)-ve(e)},be=function(e){var t,a=e.sessionSolves,n=e.bestSolve,r=n?n.time:de(a),o=ve(a),c=(t=a).reduce((function(e,t){return e+t.time}),0)/t.length,i=a.length>=5?function(e){for(var t=pe(e.slice(0,5)),a=t,n=0;n<e.length-5;n++)t-=e[n].time,t+=e[n+5].time,a=Math.min(t,a);return a/5}(a):null,l=a.length>=5?function(e){var t=e.slice(0,5);return fe(t)/3}(a):null,u=a.length>=5?function(e){for(var t=e.slice(0,5),a=fe(t),n=0;n<e.length-5;n++){var r=e.slice(n,n+5),o=fe(r);a=Math.min(o,a)}return a/3}(a):null;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:re.a.statsContainerMobile},s.a.createElement("div",{className:re.a.heading},"dine tider denne runden"),s.a.createElement("div",null,"beste: ",a.length>0?se(r):"-"),s.a.createElement("div",null,"d\xe5rligte: ",a.length>1?se(o):"-"),s.a.createElement("div",null,"gjennomsnitt: ",a.length>1?se(c):"-"),s.a.createElement("div",null,"3 av 5: ",l?se(l):"-"),s.a.createElement("div",null,"beste 3 av 5:"," ",u?se(u):"-"),s.a.createElement("div",null,"beste gjennomsnitt av 5:"," ",i?se(i):"-")),s.a.createElement("div",{className:re.a.statsContainerDesktop},s.a.createElement("div",{className:re.a.hading},"Dine tider"),s.a.createElement("div",{className:re.a.statElement},s.a.createElement("div",{className:re.a.statLabel},"beste:"),s.a.createElement("div",{className:re.a.statValue},a.length>0||n?se(r):"-")),s.a.createElement("div",{className:re.a.statElement},s.a.createElement("div",{className:re.a.statLabel},"d\xe5rligste:"),s.a.createElement("div",{className:re.a.statValue},a.length>1?se(o):"-")),s.a.createElement("div",{className:re.a.statElement},s.a.createElement("div",{className:re.a.statLabel},"3 av 5:"),s.a.createElement("div",{className:re.a.statValue},l?se(l):"-")),s.a.createElement("div",{className:re.a.statElement},s.a.createElement("div",{className:re.a.statLabel},"beste 3 av 5:"),s.a.createElement("div",{className:re.a.statValue},u?se(u):"-")),s.a.createElement("div",{className:re.a.statElement},s.a.createElement("div",{className:re.a.statLabel},"beste gjennomsnitt av 5:"),s.a.createElement("div",{className:re.a.statValue},i?se(i):"-"))))},ge=a(22),he=a(36),Ee=a.n(he),Oe=function(e){var t=e.timerRunning,a=e.onToggleTimerRunning,n=e.onNewScramble,r=e.addSolve,o=e.removeSolve,i=e.solves,l=Object(c.useState)(),u=Object(d.a)(l,2),m=u[0],v=u[1],p=Object(c.useState)("0.00"),f=Object(d.a)(p,2),b=f[0],g=f[1],h=Object(c.useState)(0),E=Object(d.a)(h,2),O=E[0],j=E[1],S=Object(c.useState)(!1),U=Object(d.a)(S,2),x=U[0],N=U[1];Object(c.useEffect)((function(){if(t?me=setInterval((function(){j(ce()-(null!==m&&void 0!==m?m:0))}),10):me&&clearInterval(me),me)return function(){return clearInterval(me)}}),[t,m]);var k=function(){a(!1),0!==O&&(g(se(O)),r(O)),n()},R=$()(re.a.startButton,Object(ge.a)({},re.a.holding,x)),C=function(){N(!0),t||j(0)},_=function(){N(!1),t?k():t||(v(ce()),a(!0))},w=i.slice(1);return s.a.createElement("div",{className:re.a.timerContainer},t?s.a.createElement("div",{className:re.a.largeTimer,onClick:function(){ce()-(null!==m&&void 0!==m?m:0)>1e3&&k()}},s.a.createElement("span",{className:$()(re.a.timer,re.a.time)},se(O))):s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:R},s.a.createElement("i",{className:$()("fas fa-hand-paper",re.a.leftHand)})),s.a.createElement("div",{className:re.a.solves},s.a.createElement("span",{className:$()(re.a.timer,re.a.time,Object(ge.a)({},re.a.holding,x)),onMouseUp:_,onMouseDown:C,onTouchStart:C,onTouchEnd:_},b),s.a.createElement("div",{className:re.a.previousSolvesContainer},s.a.createElement("div",{className:$()(re.a.previousSolves,re.a.time)},w.map((function(e,t){return s.a.createElement("div",{key:t},s.a.createElement("span",null,se(e.time)),s.a.createElement("button",{className:re.a.removeSolveButton,onClick:function(){o(e)},type:"button"},s.a.createElement("i",{className:$()("fas fa-times",re.a.removeSolveIcon)})))})),s.a.createElement("div",{className:re.a.fadeOut})))),s.a.createElement("div",{className:R},s.a.createElement("i",{className:"fas fa-hand-paper"}))),s.a.createElement(Ee.a,{handleKeys:["space"],onKeyEvent:C}),s.a.createElement(Ee.a,{handleKeys:["space"],handleEventType:"keyup",onKeyEvent:_}))},je=function(){var e=Object(m.f)(),t=Object(c.useState)(!1),a=Object(d.a)(t,2),n=a[0],r=a[1],o=Object(c.useContext)(Y),i=o.sessionSolves,l=o.stored,u=o.addNewSolve,v=o.removeStoredSolve,p=Object(m.e)(),f=Object(c.useCallback)(Object(G.a)(V.a.mark((function t(){return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.scramble&&P()(e.scramble,{global:!0}),p.push("/scramble/"+ue.a.random().solve().split(" ").slice(0,20).join(" ").trim().replace(/ /g,"-"));case 2:case"end":return t.stop()}}),t)}))),[p,e.scramble]);return Object(c.useEffect)((function(){void 0===e.scramble&&f()}),[e.scramble,f]),s.a.createElement("div",{className:re.a.cubeTimerContainer},s.a.createElement(ae,null),!n&&s.a.createElement(ie,{newScramble:e.scramble?e.scramble.replace(/-/g," "):""}),s.a.createElement(Oe,{timerRunning:n,onToggleTimerRunning:r,onNewScramble:function(){return f()},solves:i,addSolve:function(t){return u({time:t,timestamp:ce(),scramble:e.scramble})},removeSolve:v}),!n&&s.a.createElement(be,{sessionSolves:i,bestSolve:l.best}))},Se=a(15),Ue=a.n(Se),xe=function(e){var t=e.title,a=e.buttonTitle,n=e.onSubmit,r=e.colorTheme,o=e.includeUsername,i=e.bottomLink,l=Object(c.useState)(""),u=Object(d.a)(l,2),m=u[0],v=u[1],p=Object(c.useState)(""),f=Object(d.a)(p,2),b=f[0],g=f[1],h=Object(c.useState)(""),E=Object(d.a)(h,2),O=E[0],j=E[1],S=Object(c.useState)(null),U=Object(d.a)(S,2),x=U[0],N=U[1],k=Object(c.useState)(!1),R=Object(d.a)(k,2),C=R[0],_=R[1],w=function(){var e=Object(G.a)(V.a.mark((function e(t){var a;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),_(!0),e.next=4,n(b,O,m);case 4:null!==(a=e.sent)&&N(a),_(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return s.a.createElement("form",{className:Ue.a.form,onSubmit:w},s.a.createElement("h1",{className:$()(Ue.a.heading,r.textColor)},t),o?s.a.createElement("input",{value:m,onChange:function(e){return v(e.target.value)},className:$()(Ue.a.input,r.textColor,r.bottomBorder),type:"text",placeholder:"Velg brukernavn.."}):null,s.a.createElement("input",{value:b,onChange:function(e){return g(e.target.value)},className:$()(Ue.a.input,r.textColor,r.bottomBorder),type:"email",placeholder:"Epost.."}),s.a.createElement("input",{value:O,onChange:function(e){return j(e.target.value)},className:$()(Ue.a.input,r.textColor,r.bottomBorder),type:"password",placeholder:"Passord.."}),x&&s.a.createElement("span",{className:Ue.a.error},x),s.a.createElement("button",{type:"submit",className:$()(Ue.a.loginButton,r.textColor),disabled:""===b||""===O||C},a),i)},Ne=a(24),ke=a.n(Ne),Re=function(){var e=Object(m.e)(),t=Object(c.useContext)(X),a=t.user,n=t.signIn;Object(c.useEffect)((function(){a&&e.push("/")}),[e,a]);var r=s.a.createElement("div",{className:ke.a.goToRegisterLink,onClick:function(){return e.push("/register")}},"Har du ikke konto enda? Registrer deg her");return s.a.createElement("div",{className:ke.a.container},s.a.createElement(xe,{title:"Logg inn",buttonTitle:"Logg inn",onSubmit:n,colorTheme:{textColor:ke.a.textColor,bottomBorder:ke.a.bottomBorder},bottomLink:r}))},Ce=a(25),_e=a.n(Ce),we=function(){var e=Object(m.e)(),t=Object(c.useContext)(X),a=t.user,n=t.signUp;Object(c.useEffect)((function(){a&&e.push("/")}),[e,a]);var r=s.a.createElement("div",{className:_e.a.goToLoginLink,onClick:function(){return e.push("/login")}},"Har du allerede konto? G\xe5 til innlogging");return s.a.createElement("div",{className:_e.a.container},s.a.createElement(xe,{title:"Registrer deg",buttonTitle:"Ferdig",onSubmit:n,colorTheme:{textColor:_e.a.textColor,bottomBorder:_e.a.bottomBorder},includeUsername:!0,bottomLink:r}))},ye=function(){return s.a.createElement(z,null,s.a.createElement(u.a,null,s.a.createElement(m.a,{exact:!0,path:"/",component:je}),s.a.createElement(m.a,{exact:!0,path:"/scramble/:scramble",component:je}),s.a.createElement(m.a,{path:"/algorithms",component:F}),s.a.createElement(m.a,{path:"/login",component:Re}),s.a.createElement(m.a,{path:"/register",component:we})))};a(93),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(ye,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.08f2e479.chunk.js.map