(this["webpackJsonprubiks-helper"]=this["webpackJsonprubiks-helper"]||[]).push([[0],[,,function(e,t,a){e.exports={cubeTimerContainer:"cubeTimerContainer_Ay0n8",scrambleContainer:"scrambleContainer_1a119",scramble:"scramble_34LiX",previousScramble:"previousScramble_2GkcP",timerContainer:"timerContainer_2V7Gk",solves:"solves_36Clh",timer:"timer_txBap",holding:"holding_pWB_3",time:"time_8_DXF",largeTimer:"largeTimer_2BxXc",previousSolvesContainer:"previousSolvesContainer_2Nlpf",fadeOut:"fadeOut_2pNEi",previousSolves:"previousSolves_1FCIY",startButton:"startButton_vAJGC",statsContainerMobile:"statsContainerMobile__pKov",heading:"heading_2iuV3",statsContainerDesktop:"statsContainerDesktop_RlG47",statElement:"statElement_23lF2",statLabel:"statLabel_EWClq",statValue:"statValue_16cgT",handButtonsAndSolveTimeContainer:"handButtonsAndSolveTimeContainer_yMfb8",leftHand:"leftHand_7QfGS"}},,,,,,,,,,,,function(e,t,a){e.exports={form:"form_1YvAP",heading:"heading_tu83N",input:"input_3xoZQ",loginButton:"loginButton_10BGo",error:"error_3_78z"}},,,,,,,function(e,t,a){e.exports={container:"container_2I3pj",textColor:"textColor_1BWe8",bottomBorder:"bottomBorder_2f-iS",goToRegisterLink:"goToRegisterLink_1jSe-"}},function(e,t,a){e.exports={container:"container_3E2_Q",textColor:"textColor_2I3YX",bottomBorder:"bottomBorder_1awHt",goToLoginLink:"goToLoginLink_E3FTV"}},,,,function(e,t,a){e.exports={container:"container_23up_",queryInput:"queryInput_g6eat",image:"image_2atOG"}},,,function(e,t,a){e.exports={loginButton:"loginButton_3iU6Y",userIcon:"userIcon_2Dvg6"}},,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/DD1a.42a5250c.png"},function(e,t,a){e.exports=a.p+"static/media/DD4a.7e40e810.png"},function(e,t,a){e.exports=a.p+"static/media/DD5b.8523dd28.png"},function(e,t,a){e.exports=a.p+"static/media/DR5a.c6815c41.png"},function(e,t,a){e.exports=a.p+"static/media/UL1a.137fcb5f.png"},function(e,t,a){e.exports=a.p+"static/media/UL5a.17a229fd.png"},function(e,t,a){e.exports=a.p+"static/media/UL5b.88630ad9.png"},function(e,t,a){e.exports=a.p+"static/media/UR1b.0de51f6b.png"},function(e,t,a){e.exports=a.p+"static/media/UR5a.b4cb91ea.png"},function(e,t,a){e.exports=a.p+"static/media/UR5b.3af93687.png"},function(e,t,a){e.exports=a.p+"static/media/UU4b.a4f90bee.png"},,,,function(e,t,a){e.exports=a(68)},,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n,r,o=a(0),c=a.n(o),s=a(37),i=a.n(s),u=a(17),l=a(12),m=a(3),d=a(26),p=a.n(d),v=a(38),f=a.n(v),b=a(39),g=a.n(b),h=a(40),E=a.n(h),O=a(41),j=a.n(O),U=a(42),S=a.n(U),N=a(43),x=a.n(N),R=a(44),k=a.n(R),C=a(45),_=a.n(C),w=a(46),y=a.n(w),L=a(47),B=a.n(L),T=a(48),D=a.n(T),I=[{src:S.a,name:"UL1a",alg:"y' U (R' U R U') (R' U' R)"},{src:_.a,name:"UR1b",alg:"y' U (R' U2 R) U' y (R U R')"},{src:D.a,name:"UU4b",alg:"y' U' (R' U R U) (R' U R U') (R' U R)"},{src:x.a,name:"UL5a",alg:"(U' R U' R') U2 (R U' R')"},{src:k.a,name:"UL5b",alg:"(U' R U R') U y' (R' U' R)"},{src:f.a,name:"DD1a",alg:"U (R U' R') U' (F' U F)"},{src:y.a,name:"UR5a",alg:"U (R U R') U2 (R U R')"},{src:B.a,name:"UR5b",alg:"U (F' U' F) U' (R U R')"},{src:j.a,name:"DR5a",alg:"(R U' R' U) (R U2' R') U (R U' R')"},{src:E.a,name:"DD5b",alg:""},{src:g.a,name:"DD4a",alg:"U' F' (R U R' U') R' F R"}],M=function(){var e=Object(o.useState)(""),t=Object(m.a)(e,2),a=t[0],n=t[1],r=Object(o.useState)([]),s=Object(m.a)(r,2),i=s[0],u=s[1];return c.a.createElement("div",{className:p.a.container},c.a.createElement("input",{value:a,onChange:function(e){var t=e.target.value.toUpperCase();if(n(t),3===t.length){var a=I.filter((function(e){return e.name.startsWith(t)}));u(a),n("")}},className:p.a.queryInput}),i.map((function(e){return c.a.createElement("img",{key:e.name,src:e.src,className:p.a.image,alt:"Solution"})})))},F=a(49),A=a.n(F),G=a(20),V=a(11),W=a(5),P=a.n(W),H=a(10),K=a(13),J=a.n(K),q=(a(58),a(60),function(e){switch(e.code){case"auth/wrong-password":return"Feil passord";case"auth/user-not-found":return"Brukeren finnes ikke";case"auth/invalid-email":return"Ugyldig epostadresse";case"auth/weak-password":return"For svakt passord!";default:return console.error(e.code),"Oops.. Noe gikk galt!"}});J.a.initializeApp({apiKey:"AIzaSyAW_PdA6o5ygKubwsxaQfJ22dgWE5fA41U",authDomain:"cubeguru-79b7d.firebaseapp.com",databaseURL:"https://cubeguru-79b7d.firebaseio.com",projectId:"cubeguru-79b7d",storageBucket:"cubeguru-79b7d.appspot.com",messagingSenderId:"1042814909264",appId:"1:1042814909264:web:e79fa88d14f9f4669c4a55",measurementId:"G-Z2GMHWJ2NG"});var Q,X=Object(o.createContext)({user:null,isLoading:!1,signIn:function(){var e=Object(H.a)(P.a.mark((function e(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),signUp:function(){var e=Object(H.a)(P.a.mark((function e(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),signOut:function(){var e=Object(H.a)(P.a.mark((function e(){return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}),Y=Object(o.createContext)({sessionSolves:[],stored:{best:void 0},addNewSolve:function(){},removeStoredSolve:function(){}}),z=function(e){var t=e.children,a=Object(o.useState)({user:null,isLoading:!0}),s=Object(m.a)(a,2),i=s[0],u=s[1],l=Object(o.useState)({sessionSolves:[],stored:{best:void 0}}),d=Object(m.a)(l,2),p=d[0],v=d[1],f=function(e){return v((function(t){return Object(V.a)({},t,{stored:Object(V.a)({},t.stored,{best:e})})}))},b=function(){var e=Object(H.a)(P.a.mark((function e(t){var a,n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v((function(e){return Object(V.a)({},e,{sessionSolves:[t].concat(Object(G.a)(e.sessionSolves))})})),!i.user||!r){e.next=7;break}return a=r.doc(),e.next=5,a.set(t);case 5:n=Object(V.a)({},t,{id:a.id}),(void 0===p.stored.best||p.stored.best.time>t.time)&&(f(n),J.a.firestore().collection("solves").doc(i.user.uid).set({best:n},{merge:!0}));case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(H.a)(P.a.mark((function e(t,a){var r;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,null===(r=n)||void 0===r?void 0:r.signInWithEmailAndPassword(t,a);case 3:return e.abrupt("return",null);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",q(e.t0));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),h=function(){var e=Object(H.a)(P.a.mark((function e(t,a,r){var o,c,s;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J.a.firestore().collection("userdata").where("username","==",r).get();case 3:if(e.t0=e.sent.docs.length,!(e.t0>0)){e.next=7;break}return e.abrupt("return","Dette brukernavnet er dessverre opptatt");case 7:return e.next=9,null===(o=n)||void 0===o?void 0:o.createUserWithEmailAndPassword(t,a);case 9:if(s=e.sent){e.next=12;break}return e.abrupt("return","Noe gikk galt med opprettelsen av din konto");case 12:if(!(null===(c=s.user)||void 0===c?void 0:c.uid)){e.next=15;break}return e.next=15,J.a.firestore().collection("userdata").doc(s.user.uid).set({username:r});case 15:return e.abrupt("return",null);case 18:return e.prev=18,e.t1=e.catch(0),e.abrupt("return",q(e.t1));case 21:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t,a,n){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){n||(n=J.a.auth()).onAuthStateChanged((function(e){u({user:e,isLoading:!1}),null===e?r=void 0:function(e){var t=J.a.firestore().collection("solves").doc(e.uid);r=t.collection("all_solves"),t.get().then((function(e){return e.data()})).then((function(e){e&&e.best&&f(e.best)})),J.a.firestore().collection("userdata").doc(e.uid).get().then((function(t){var a=t.data();if(a&&"username"in a){var n=Object(V.a)({},e,{username:a.username});u((function(e){return Object(V.a)({},e,{user:n})}))}}))}(e)}))}),[]),c.a.createElement(X.Provider,{value:Object(V.a)({},i,{signIn:g,signUp:h,signOut:function(){var e;null===(e=n)||void 0===e||e.signOut()}})},c.a.createElement(Y.Provider,{value:Object(V.a)({},p,{addNewSolve:b,removeStoredSolve:function(e){var t;i.user&&(null===(t=r)||void 0===t||t.doc(e).delete())}})},t))},Z=a(6),$=a.n(Z),ee=a(29),te=a.n(ee),ae=function(){var e=Object(o.useContext)(X),t=e.user,a=e.isLoading,n=e.signOut,r=Object(l.e)();return a?null:c.a.createElement("div",{className:te.a.loginButton,onClick:function(){a||(t?n():r.push("/login"))}},c.a.createElement("i",{className:$()("fas fa-user",te.a.userIcon)}),t?t.username:"Logg inn")},ne=a(2),re=a.n(ne),oe=function(e){return("0"+e).slice(-2)},ce=function(){return(new Date).getTime()},se=function(e){var t=Math.floor(e/6e4),a=Math.floor(e/1e3)%60,n=Math.floor(e%1e3/10);return"".concat(t>0?t+":":"").concat(t>0?oe(a):a,".").concat(oe(n))},ie=function(e){var t=e.newScramble,a=Object(o.useState)(),n=Object(m.a)(a,2),r=n[0],s=n[1],i=Object(o.useState)(),u=Object(m.a)(i,2),l=u[0],d=u[1];return Object(o.useEffect)((function(){t!==r&&(d(r),s(t))}),[t,r,d]),c.a.createElement("div",{className:re.a.scrambleContainer},c.a.createElement("div",{className:re.a.scramble},r),r&&c.a.createElement("div",{className:re.a.previousScramble},l))},ue=function(e){return Math.min.apply(Math,Object(G.a)(e.map((function(e){return e.time}))))},le=function(e){return Math.max.apply(Math,Object(G.a)(e.map((function(e){return e.time}))))},me=function(e){return e.reduce((function(e,t){return e+t.time}),0)},de=function(e){return me(e)-ue(e)-le(e)},pe=function(e){var t,a=e.sessionSolves,n=e.bestSolve,r=n?n.time:ue(a),o=le(a),s=(t=a).reduce((function(e,t){return e+t.time}),0)/t.length,i=a.length>=5?function(e){for(var t=me(e.slice(0,5)),a=t,n=0;n<e.length-5;n++)t-=e[n].time,t+=e[n+5].time,a=Math.min(t,a);return a/5}(a):null,u=a.length>=5?function(e){var t=e.slice(0,5);return de(t)/3}(a):null,l=a.length>=5?function(e){for(var t=e.slice(0,5),a=de(t),n=0;n<e.length-5;n++){var r=e.slice(n,n+5),o=de(r);a=Math.min(o,a)}return a/3}(a):null;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:re.a.statsContainerMobile},c.a.createElement("div",{className:re.a.heading},"dine tider denne runden"),c.a.createElement("div",null,"beste: ",a.length>0?se(r):"-"),c.a.createElement("div",null,"d\xe5rligte: ",a.length>1?se(o):"-"),c.a.createElement("div",null,"gjennomsnitt: ",a.length>1?se(s):"-"),c.a.createElement("div",null,"3 av 5: ",u?se(u):"-"),c.a.createElement("div",null,"beste 3 av 5:"," ",l?se(l):"-"),c.a.createElement("div",null,"beste gjennomsnitt av 5:"," ",i?se(i):"-")),c.a.createElement("div",{className:re.a.statsContainerDesktop},c.a.createElement("div",{className:re.a.hading},"Dine tider"),c.a.createElement("div",{className:re.a.statElement},c.a.createElement("div",{className:re.a.statLabel},"beste:"),c.a.createElement("div",{className:re.a.statValue},a.length>0?se(r):"-")),c.a.createElement("div",{className:re.a.statElement},c.a.createElement("div",{className:re.a.statLabel},"d\xe5rligste:"),c.a.createElement("div",{className:re.a.statValue},a.length>1?se(o):"-")),c.a.createElement("div",{className:re.a.statElement},c.a.createElement("div",{className:re.a.statLabel},"3 av 5:"),c.a.createElement("div",{className:re.a.statValue},u?se(u):"-")),c.a.createElement("div",{className:re.a.statElement},c.a.createElement("div",{className:re.a.statLabel},"beste 3 av 5:"),c.a.createElement("div",{className:re.a.statValue},l?se(l):"-")),c.a.createElement("div",{className:re.a.statElement},c.a.createElement("div",{className:re.a.statLabel},"beste gjennomsnitt av 5:"),c.a.createElement("div",{className:re.a.statValue},i?se(i):"-"))))},ve=a(19),fe=a(32),be=a.n(fe),ge=function(e){var t=e.timerRunning,a=e.onToggleTimerRunning,n=e.onNewScramble,r=e.addSolve,s=e.solves,i=Object(o.useState)(),u=Object(m.a)(i,2),l=u[0],d=u[1],p=Object(o.useState)("0.00"),v=Object(m.a)(p,2),f=v[0],b=v[1],g=Object(o.useState)(0),h=Object(m.a)(g,2),E=h[0],O=h[1],j=Object(o.useState)(!1),U=Object(m.a)(j,2),S=U[0],N=U[1];Object(o.useEffect)((function(){if(t?Q=setInterval((function(){O(ce()-(null!==l&&void 0!==l?l:0))}),10):Q&&clearInterval(Q),Q)return function(){return clearInterval(Q)}}),[t,l]);var x=function(){a(!1),0!==E&&(b(se(E)),r(E)),n()},R=$()(re.a.startButton,Object(ve.a)({},re.a.holding,S)),k=s.slice(1),C=function(){N(!0),t||O(0)},_=function(){N(!1),t?x():t||(d(ce()),a(!0))};return c.a.createElement("div",{className:re.a.timerContainer},t?c.a.createElement("div",{className:re.a.largeTimer,onClick:function(){ce()-(null!==l&&void 0!==l?l:0)>1e3&&x()}},c.a.createElement("span",{className:$()(re.a.timer,re.a.time)},se(E))):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:R},c.a.createElement("i",{className:$()("fas fa-hand-paper",re.a.leftHand)})),c.a.createElement("div",{className:re.a.solves},c.a.createElement("span",{className:$()(re.a.timer,re.a.time,Object(ve.a)({},re.a.holding,S)),onMouseUp:_,onMouseDown:C,onTouchStart:C,onTouchEnd:_},f),c.a.createElement("div",{className:re.a.previousSolvesContainer},c.a.createElement("div",{className:$()(re.a.previousSolves,re.a.time)},k.map((function(e,t){return c.a.createElement("span",{key:t},se(e.time))})),c.a.createElement("div",{className:re.a.fadeOut})))),c.a.createElement("div",{className:R},c.a.createElement("i",{className:"fas fa-hand-paper"}))),c.a.createElement(be.a,{handleKeys:["space"],onKeyEvent:C}),c.a.createElement(be.a,{handleKeys:["space"],handleEventType:"keyup",onKeyEvent:_}))},he=function(){return A()()},Ee=function(){var e=Object(o.useState)(!1),t=Object(m.a)(e,2),a=t[0],n=t[1],r=Object(o.useState)(he()),s=Object(m.a)(r,2),i=s[0],u=s[1],l=Object(o.useContext)(Y),d=l.sessionSolves,p=l.stored,v=l.addNewSolve;return c.a.createElement("div",{className:re.a.cubeTimerContainer},c.a.createElement(ae,null),!a&&c.a.createElement(ie,{newScramble:i}),c.a.createElement(ge,{timerRunning:a,onToggleTimerRunning:n,onNewScramble:function(){return u(he)},solves:d,addSolve:function(e){return v({time:e,timestamp:ce(),scramble:i})}}),!a&&c.a.createElement(pe,{sessionSolves:d,bestSolve:p.best}))},Oe=a(14),je=a.n(Oe),Ue=function(e){var t=e.title,a=e.buttonTitle,n=e.onSubmit,r=e.colorTheme,s=e.includeUsername,i=e.bottomLink,u=Object(o.useState)(""),l=Object(m.a)(u,2),d=l[0],p=l[1],v=Object(o.useState)(""),f=Object(m.a)(v,2),b=f[0],g=f[1],h=Object(o.useState)(""),E=Object(m.a)(h,2),O=E[0],j=E[1],U=Object(o.useState)(null),S=Object(m.a)(U,2),N=S[0],x=S[1],R=Object(o.useState)(!1),k=Object(m.a)(R,2),C=k[0],_=k[1],w=function(){var e=Object(H.a)(P.a.mark((function e(t){var a;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),_(!0),e.next=4,n(b,O,d);case 4:null!==(a=e.sent)&&x(a),_(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("form",{className:je.a.form,onSubmit:w},c.a.createElement("h1",{className:$()(je.a.heading,r.textColor)},t),s?c.a.createElement("input",{value:d,onChange:function(e){return p(e.target.value)},className:$()(je.a.input,r.textColor,r.bottomBorder),type:"text",placeholder:"Velg brukernavn.."}):null,c.a.createElement("input",{value:b,onChange:function(e){return g(e.target.value)},className:$()(je.a.input,r.textColor,r.bottomBorder),type:"email",placeholder:"Epost.."}),c.a.createElement("input",{value:O,onChange:function(e){return j(e.target.value)},className:$()(je.a.input,r.textColor,r.bottomBorder),type:"password",placeholder:"Passord.."}),N&&c.a.createElement("span",{className:je.a.error},N),c.a.createElement("button",{type:"submit",className:$()(je.a.loginButton,r.textColor),disabled:""===b||""===O||C},a),i)},Se=a(21),Ne=a.n(Se),xe=function(){var e=Object(l.e)(),t=Object(o.useContext)(X),a=t.user,n=t.signIn;Object(o.useEffect)((function(){a&&e.push("/")}),[e,a]);var r=c.a.createElement("div",{className:Ne.a.goToRegisterLink,onClick:function(){return e.push("/register")}},"Har du ikke konto enda? Registrer deg her");return c.a.createElement("div",{className:Ne.a.container},c.a.createElement(Ue,{title:"Logg inn",buttonTitle:"Logg inn",onSubmit:n,colorTheme:{textColor:Ne.a.textColor,bottomBorder:Ne.a.bottomBorder},bottomLink:r}))},Re=a(22),ke=a.n(Re),Ce=function(){var e=Object(l.e)(),t=Object(o.useContext)(X),a=t.user,n=t.signUp;Object(o.useEffect)((function(){a&&e.push("/")}),[e,a]);var r=c.a.createElement("div",{className:ke.a.goToLoginLink,onClick:function(){return e.push("/login")}},"Har du allerede konto? G\xe5 til innlogging");return c.a.createElement("div",{className:ke.a.container},c.a.createElement(Ue,{title:"Registrer deg",buttonTitle:"Ferdig",onSubmit:n,colorTheme:{textColor:ke.a.textColor,bottomBorder:ke.a.bottomBorder},includeUsername:!0,bottomLink:r}))},_e=function(){return c.a.createElement(z,null,c.a.createElement(u.a,null,c.a.createElement(l.a,{exact:!0,path:"/",component:Ee}),c.a.createElement(l.a,{path:"/algorithms",component:M}),c.a.createElement(l.a,{path:"/login",component:xe}),c.a.createElement(l.a,{path:"/register",component:Ce})))};a(67),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(_e,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[52,1,2]]]);
//# sourceMappingURL=main.1675f1aa.chunk.js.map