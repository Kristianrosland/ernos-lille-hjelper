(this["webpackJsonprubiks-helper"]=this["webpackJsonprubiks-helper"]||[]).push([[0],{1:function(e,t,a){e.exports={cubeTimerContainer:"cubeTimerContainer_Ay0n8",scrambleContainer:"scrambleContainer_1a119",scramble:"scramble_34LiX",timerContainer:"timerContainer_2V7Gk",solves:"solves_36Clh",timer:"timer_txBap",holding:"holding_pWB_3",readyToStart:"readyToStart_3LzCi",time:"time_8_DXF",largeTimer:"largeTimer_2BxXc",currentSolveTime:"currentSolveTime_2iqf2",removeSolveButton:"removeSolveButton_3O9hc",removeSolveIcon:"removeSolveIcon_2sa-v",previousSolvesContainer:"previousSolvesContainer_2Nlpf",fadeOut:"fadeOut_2pNEi",previousSolves:"previousSolves_1FCIY",startButton:"startButton_vAJGC",statsContainerMobile:"statsContainerMobile__pKov",heading:"heading_2iuV3",statsContainerDesktop:"statsContainerDesktop_RlG47",statElement:"statElement_23lF2",statLabel:"statLabel_EWClq",statValue:"statValue_16cgT",handButtonsAndSolveTimeContainer:"handButtonsAndSolveTimeContainer_yMfb8",leftHand:"leftHand_7QfGS",previousScramble:"previousScramble_2GkcP",show:"show_1ZZgb",previousSolve:"previousSolve_2AIRu"}},15:function(e,t,a){e.exports={form:"form_1YvAP",heading:"heading_tu83N",input:"input_3xoZQ",loginButton:"loginButton_10BGo",error:"error_3_78z"}},24:function(e,t,a){e.exports={container:"container_2I3pj",textColor:"textColor_1BWe8",bottomBorder:"bottomBorder_2f-iS",goToRegisterLink:"goToRegisterLink_1jSe-"}},25:function(e,t,a){e.exports={container:"container_3E2_Q",textColor:"textColor_2I3YX",bottomBorder:"bottomBorder_1awHt",goToLoginLink:"goToLoginLink_E3FTV"}},29:function(e,t,a){e.exports={container:"container_23up_",queryInput:"queryInput_g6eat",image:"image_2atOG"}},32:function(e,t,a){e.exports={loginButton:"loginButton_3iU6Y",userIcon:"userIcon_2Dvg6"}},48:function(e,t,a){e.exports=a.p+"static/media/DD1a.42a5250c.png"},49:function(e,t,a){e.exports=a.p+"static/media/DD4a.7e40e810.png"},50:function(e,t,a){e.exports=a.p+"static/media/DD5b.8523dd28.png"},51:function(e,t,a){e.exports=a.p+"static/media/DR5a.c6815c41.png"},52:function(e,t,a){e.exports=a.p+"static/media/UL1a.137fcb5f.png"},53:function(e,t,a){e.exports=a.p+"static/media/UL5a.17a229fd.png"},54:function(e,t,a){e.exports=a.p+"static/media/UL5b.88630ad9.png"},55:function(e,t,a){e.exports=a.p+"static/media/UR1b.0de51f6b.png"},56:function(e,t,a){e.exports=a.p+"static/media/UR5a.b4cb91ea.png"},57:function(e,t,a){e.exports=a.p+"static/media/UR5b.3af93687.png"},58:function(e,t,a){e.exports=a.p+"static/media/UU4b.a4f90bee.png"},62:function(e,t,a){e.exports=a(94)},75:function(e,t){},93:function(e,t,a){},94:function(e,t,a){"use strict";a.r(t);var n,r,o=a(0),c=a.n(o),s=a(47),i=a.n(s),u=a(19),l=a(13),m=a(4),d=a(29),p=a.n(d),v=a(48),f=a.n(v),b=a(49),g=a.n(b),h=a(50),E=a.n(h),O=a(51),j=a.n(O),S=a(52),x=a.n(S),U=a(53),k=a.n(U),N=a(54),C=a.n(N),R=a(55),w=a.n(R),_=a(56),y=a.n(_),B=a(57),T=a.n(B),L=a(58),I=a.n(L),D=[{src:x.a,name:"UL1a",alg:"y' U (R' U R U') (R' U' R)"},{src:w.a,name:"UR1b",alg:"y' U (R' U2 R) U' y (R U R')"},{src:I.a,name:"UU4b",alg:"y' U' (R' U R U) (R' U R U') (R' U R)"},{src:k.a,name:"UL5a",alg:"(U' R U' R') U2 (R U' R')"},{src:C.a,name:"UL5b",alg:"(U' R U R') U y' (R' U' R)"},{src:f.a,name:"DD1a",alg:"U (R U' R') U' (F' U F)"},{src:y.a,name:"UR5a",alg:"U (R U R') U2 (R U R')"},{src:T.a,name:"UR5b",alg:"U (F' U' F) U' (R U R')"},{src:j.a,name:"DR5a",alg:"(R U' R' U) (R U2' R') U (R U' R')"},{src:E.a,name:"DD5b",alg:""},{src:g.a,name:"DD4a",alg:"U' F' (R U R' U') R' F R"}],F=function(){var e=Object(o.useState)(""),t=Object(m.a)(e,2),a=t[0],n=t[1],r=Object(o.useState)([]),s=Object(m.a)(r,2),i=s[0],u=s[1];return c.a.createElement("div",{className:p.a.container},c.a.createElement("input",{value:a,onChange:function(e){var t=e.target.value.toUpperCase();if(n(t),3===t.length){var a=D.filter((function(e){return e.name.startsWith(t)}));u(a),n("")}},className:p.a.queryInput}),i.map((function(e){return c.a.createElement("img",{key:e.name,src:e.src,className:p.a.image,alt:"Solution"})})))},M=a(3),A=a.n(M),G=a(5),V=a(59),W=a.n(V),P=a(23),H=a(8),K=a(14),q=a.n(K),J=(a(76),a(78),function(e){switch(e.code){case"auth/wrong-password":return"Feil passord";case"auth/user-not-found":return"Brukeren finnes ikke";case"auth/invalid-email":return"Ugyldig epostadresse";case"auth/weak-password":return"For svakt passord!";default:return console.error(e.code),"Oops.. Noe gikk galt!"}}),z={user:null,isLoading:!1,signIn:function(){var e=Object(G.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),signUp:function(){var e=Object(G.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),signOut:function(){var e=Object(G.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},Q={sessionSolves:[],stored:{best:void 0,lastFive:[]},addNewSolve:function(){},removeStoredSolve:function(){}},X=function(){var e=Object(G.a)(A.a.mark((function e(t){var a,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.firestore().collection("userdata").doc(t).get();case 2:if(a=e.sent,!(n=a.data())||!("username"in n)){e.next=8;break}return e.abrupt("return",n.username);case 8:return e.abrupt("return",void 0);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(G.a)(A.a.mark((function e(t){var a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q.a.firestore().collection("userdata").where("username","==",t).get();case 2:return a=e.sent,e.abrupt("return",a.docs.length>0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();q.a.initializeApp({apiKey:"AIzaSyAW_PdA6o5ygKubwsxaQfJ22dgWE5fA41U",authDomain:"cubeguru-79b7d.firebaseapp.com",databaseURL:"https://cubeguru-79b7d.firebaseio.com",projectId:"cubeguru-79b7d",storageBucket:"cubeguru-79b7d.appspot.com",messagingSenderId:"1042814909264",appId:"1:1042814909264:web:e79fa88d14f9f4669c4a55",measurementId:"G-Z2GMHWJ2NG"});var Z=Object(o.createContext)(z),$=Object(o.createContext)(Q),ee=function(e){var t=e.children,a=Object(o.useState)({user:null,isLoading:!0}),s=Object(m.a)(a,2),i=s[0],u=s[1],l=Object(o.useState)({sessionSolves:[],stored:{best:void 0,lastFive:[]}}),d=Object(m.a)(l,2),p=d[0],v=d[1];console.log(p);var f=function(e){return v((function(t){return Object(H.a)({},t,{stored:Object(H.a)({},t.stored,{best:e})})}))},b=function(){var e=Object(G.a)(A.a.mark((function e(t){var a,n;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v((function(e){return Object(H.a)({},e,{sessionSolves:[t].concat(Object(P.a)(e.sessionSolves))})})),!i.user||!r){e.next=7;break}return a=r.doc(),e.next=5,a.set(t);case 5:n=Object(H.a)({},t,{id:a.id}),(void 0===p.stored.best||p.stored.best.time>t.time)&&f(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(G.a)(A.a.mark((function e(t){var a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v(Object(H.a)({},p,{sessionSolves:p.sessionSolves.filter((function(e){return e.timestamp!==t.timestamp}))})),!i.user||!r){e.next=5;break}return e.next=4,r.where("timestamp","==",t.timestamp).get().then((function(e){return e.docs.forEach((function(e){return e.ref.delete()}))}));case 4:(null===(a=p.stored.best)||void 0===a?void 0:a.timestamp)===t.timestamp&&r.orderBy("time","asc").limit(1).get().then((function(e){return e.docs.map((function(e){return Object(H.a)({},e.data(),{id:e.id})}))})).then((function(e){return f(0===e.length?void 0:e[0])}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(G.a)(A.a.mark((function e(t,a){var r;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,null===(r=n)||void 0===r?void 0:r.signInWithEmailAndPassword(t,a);case 3:return e.abrupt("return",null);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",J(e.t0));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),E=Object(o.useCallback)(function(){var e=Object(G.a)(A.a.mark((function e(t){var a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=q.a.firestore().collection("solves").doc(t.uid).collection("all_solves"),e.next=3,r.orderBy("timestamp","desc").limit(5).get().then((function(e){return v((function(t){return Object(H.a)({},t,{stored:Object(H.a)({},t.stored,{lastFive:e.docs.map((function(e){return e.data()}))})})}))}));case 3:return r.orderBy("time","asc").limit(1).get().then((function(e){return e.docs.map((function(e){return Object(H.a)({},e.data(),{id:e.id})}))})).then((function(e){return f(0===e.length?void 0:e[0])})),e.next=6,X(t.uid);case 6:a=e.sent,u((function(e){return Object(H.a)({},e,{user:Object(H.a)({},t,{username:a})})}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),O=function(){var e=Object(G.a)(A.a.mark((function e(t,a,r){var o,c,s;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Y(r);case 3:if(!e.sent){e.next=6;break}return e.abrupt("return","Dette brukernavnet er dessverre opptatt");case 6:return e.next=8,null===(o=n)||void 0===o?void 0:o.createUserWithEmailAndPassword(t,a);case 8:if(s=e.sent){e.next=11;break}return e.abrupt("return","Noe gikk galt med opprettelsen av din konto");case 11:return(null===(c=s.user)||void 0===c?void 0:c.uid)&&(i={username:r,userId:s.user.uid},q.a.firestore().collection("userdata").doc(i.userId).set({username:i.username})),e.abrupt("return",null);case 15:return e.prev=15,e.t0=e.catch(0),e.abrupt("return",J(e.t0));case 18:case"end":return e.stop()}var i}),e,null,[[0,15]])})));return function(t,a,n){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){n||(n=q.a.auth()).onAuthStateChanged((function(e){u({user:e,isLoading:!1}),null===e?r=void 0:E(e)}))}),[E]),c.a.createElement(Z.Provider,{value:Object(H.a)({},i,{signIn:h,signUp:O,signOut:function(){var e;null===(e=n)||void 0===e||e.signOut(),v((function(e){return Object(H.a)({},e,{stored:Q.stored})}))}})},c.a.createElement($.Provider,{value:Object(H.a)({},p,{addNewSolve:b,removeStoredSolve:g})},t))},te=a(7),ae=a.n(te),ne=a(32),re=a.n(ne),oe=function(){var e=Object(o.useContext)(Z),t=e.user,a=e.isLoading,n=e.signOut,r=Object(l.e)();return a?null:c.a.createElement("div",{className:re.a.loginButton,onClick:function(){a||(t?n():r.push("/login"))}},c.a.createElement("i",{className:ae()("fas fa-user",re.a.userIcon)}),t?t.username:"Logg inn")},ce=a(1),se=a.n(ce),ie=function(e){return("0"+e).slice(-2)},ue=function(){return(new Date).getTime()},le=function(e){var t=Math.floor(e/6e4),a=Math.floor(e/1e3)%60,n=Math.floor(e%1e3/10);return"".concat(t>0?t+":":"").concat(t>0?ie(a):a,".").concat(ie(n))},me=function(e){var t=e.newScramble,a=e.onPrevScrambleClick,n=Object(o.useState)(),r=Object(m.a)(n,2),s=r[0],i=r[1],u=Object(o.useState)(),l=Object(m.a)(u,2),d=l[0],p=l[1];return Object(o.useEffect)((function(){t!==s&&(p(s),i(t))}),[t,s,p]),c.a.createElement("div",{className:se.a.scrambleContainer},c.a.createElement("div",{className:se.a.scramble},s),s&&c.a.createElement("div",{className:se.a.previousScramble,onClick:function(){d&&(a(d),p(void 0))}},d))},de=a(35),pe=a.n(de);pe.a.initSolver();var ve,fe=function(e){return Math.min.apply(Math,Object(P.a)(e.map((function(e){return e.time}))))},be=function(e){return Math.max.apply(Math,Object(P.a)(e.map((function(e){return e.time}))))},ge=function(e){return e.reduce((function(e,t){return e+t.time}),0)},he=function(e){return ge(e)-fe(e)-be(e)},Ee=function(e){var t,a=e.sessionSolves,n=e.bestSolve,r=n?n.time:fe(a),o=be(a),s=(t=a).reduce((function(e,t){return e+t.time}),0)/t.length,i=a.length>=5?function(e){for(var t=ge(e.slice(0,5)),a=t,n=0;n<e.length-5;n++)t-=e[n].time,t+=e[n+5].time,a=Math.min(t,a);return a/5}(a):null,u=a.length>=5?function(e){var t=e.slice(0,5);return he(t)/3}(a):null,l=a.length>=5?function(e){for(var t=e.slice(0,5),a=he(t),n=0;n<e.length-5;n++){var r=e.slice(n,n+5),o=he(r);a=Math.min(o,a)}return a/3}(a):null;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:se.a.statsContainerMobile},c.a.createElement("div",{className:se.a.heading},"dine tider denne runden"),c.a.createElement("div",null,"beste: ",a.length>0?le(r):"-"),c.a.createElement("div",null,"d\xe5rligte: ",a.length>1?le(o):"-"),c.a.createElement("div",null,"gjennomsnitt: ",a.length>1?le(s):"-"),c.a.createElement("div",null,"3 av 5: ",u?le(u):"-"),c.a.createElement("div",null,"beste 3 av 5:"," ",l?le(l):"-"),c.a.createElement("div",null,"beste gjennomsnitt av 5:"," ",i?le(i):"-")),c.a.createElement("div",{className:se.a.statsContainerDesktop},c.a.createElement("div",{className:se.a.hading},"Dine tider"),c.a.createElement("div",{className:se.a.statElement},c.a.createElement("div",{className:se.a.statLabel},"beste:"),c.a.createElement("div",{className:se.a.statValue},a.length>0||n?le(r):"-")),c.a.createElement("div",{className:se.a.statElement},c.a.createElement("div",{className:se.a.statLabel},"d\xe5rligste:"),c.a.createElement("div",{className:se.a.statValue},a.length>1?le(o):"-")),c.a.createElement("div",{className:se.a.statElement},c.a.createElement("div",{className:se.a.statLabel},"3 av 5:"),c.a.createElement("div",{className:se.a.statValue},u?le(u):"-")),c.a.createElement("div",{className:se.a.statElement},c.a.createElement("div",{className:se.a.statLabel},"beste 3 av 5:"),c.a.createElement("div",{className:se.a.statValue},l?le(l):"-")),c.a.createElement("div",{className:se.a.statElement},c.a.createElement("div",{className:se.a.statLabel},"beste gjennomsnitt av 5:"),c.a.createElement("div",{className:se.a.statValue},i?le(i):"-"))))},Oe=a(21),je=a(36),Se=a.n(je),xe=function(e){var t,a=e.timerRunning,n=e.onToggleTimerRunning,r=e.onNewScramble,s=e.addSolve,i=e.removeSolve,u=e.solves,l=Object(o.useState)(),d=Object(m.a)(l,2),p=d[0],v=d[1],f=Object(o.useState)("0.00"),b=Object(m.a)(f,2),g=b[0],h=b[1],E=Object(o.useState)(0),O=Object(m.a)(E,2),j=O[0],S=O[1],x=Object(o.useState)(!1),U=Object(m.a)(x,2),k=U[0],N=U[1],C=Object(o.useState)(!1),R=Object(m.a)(C,2),w=R[0],_=R[1];Object(o.useEffect)((function(){if(a?ve=setInterval((function(){S(ue()-(null!==p&&void 0!==p?p:0))}),10):ve&&clearInterval(ve),ve)return function(){return clearInterval(ve)}}),[a,p]),Object(o.useEffect)((function(){w&&(k||_(!1))}),[w,k,_]);var y=function(){var e=Object(G.a)(A.a.mark((function e(){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(!1),0!==j&&(h(le(j)),s(j)),r();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),B=(t={},Object(Oe.a)(t,se.a.holding,k&&!w),Object(Oe.a)(t,se.a.readyToStart,k&&w),t),T=function(){k||(_(!1),N(!0),setTimeout((function(){_(!0)}),500),a||S(0))},L=function(){N(!1),a?y():w&&(a||(v(ue()),n(!0)),_(!1))},I=j?u.slice(1):u;return c.a.createElement("div",{className:se.a.timerContainer},a?c.a.createElement("div",{className:se.a.largeTimer,onClick:function(){ue()-(null!==p&&void 0!==p?p:0)>1e3&&y()}},c.a.createElement("span",{className:ae()(se.a.timer,se.a.time)},le(j))):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:ae()(se.a.startButton,B)},c.a.createElement("i",{className:ae()("fas fa-hand-paper",se.a.leftHand)})),c.a.createElement("div",{className:se.a.solves},c.a.createElement("div",{className:se.a.currentSolveTime},c.a.createElement("span",{className:ae()(se.a.timer,se.a.time,B),onMouseUp:L,onMouseDown:T,onTouchStart:T,onTouchEnd:L},g),c.a.createElement("button",{className:ae()(se.a.removeSolveButton,Object(Oe.a)({},se.a.show,0!==j&&u.length>0)),onClick:function(){i(u[0]),v(0),h("0.00")},type:"button"},c.a.createElement("i",{className:ae()("fas fa-times",se.a.removeSolveIcon)}))),c.a.createElement("div",{className:se.a.previousSolvesContainer},c.a.createElement("div",{className:ae()(se.a.previousSolves,se.a.time)},I.map((function(e,t){return c.a.createElement("div",{key:t,className:se.a.previousSolve},c.a.createElement("span",null,le(e.time)),c.a.createElement("button",{className:se.a.removeSolveButton,onClick:function(){return i(e)},type:"button"},c.a.createElement("i",{className:ae()("fas fa-times",se.a.removeSolveIcon)})))})),c.a.createElement("div",{className:se.a.fadeOut})))),c.a.createElement("div",{className:ae()(se.a.startButton,B)},c.a.createElement("i",{className:"fas fa-hand-paper"}))),c.a.createElement(Se.a,{handleKeys:["space"],onKeyEvent:T}),c.a.createElement(Se.a,{handleKeys:["space"],handleEventType:"keyup",onKeyEvent:L}))},Ue=function(){var e=Object(l.f)(),t=Object(o.useState)(!1),a=Object(m.a)(t,2),n=a[0],r=a[1],s=Object(o.useContext)($),i=s.sessionSolves,u=s.stored,d=s.addNewSolve,p=s.removeStoredSolve,v=Object(l.e)(),f=Object(o.useCallback)(Object(G.a)(A.a.mark((function t(){return A.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.scramble&&W()(e.scramble,{global:!0}),v.push("/scramble/"+pe.a.random().solve().split(" ").slice(0,20).join(" ").trim().replace(/ /g,"-"));case 2:case"end":return t.stop()}}),t)}))),[v,e.scramble]);return Object(o.useEffect)((function(){void 0===e.scramble&&f()}),[e.scramble,f]),c.a.createElement("div",{className:se.a.cubeTimerContainer},c.a.createElement(oe,null),!n&&c.a.createElement(me,{newScramble:e.scramble?e.scramble.replace(/-/g," "):"",onPrevScrambleClick:function(e){return v.push("/scramble/"+e.replace(/ /g,"-"))}}),c.a.createElement(xe,{timerRunning:n,onToggleTimerRunning:r,onNewScramble:function(){return f()},solves:i.concat(u.lastFive),addSolve:function(t){return d({time:t,timestamp:ue(),scramble:e.scramble})},removeSolve:p}),!n&&c.a.createElement(Ee,{sessionSolves:i.concat(u.lastFive),bestSolve:u.best}))},ke=a(15),Ne=a.n(ke),Ce=function(e){var t=e.title,a=e.buttonTitle,n=e.onSubmit,r=e.colorTheme,s=e.includeUsername,i=e.bottomLink,u=Object(o.useState)(""),l=Object(m.a)(u,2),d=l[0],p=l[1],v=Object(o.useState)(""),f=Object(m.a)(v,2),b=f[0],g=f[1],h=Object(o.useState)(""),E=Object(m.a)(h,2),O=E[0],j=E[1],S=Object(o.useState)(null),x=Object(m.a)(S,2),U=x[0],k=x[1],N=Object(o.useState)(!1),C=Object(m.a)(N,2),R=C[0],w=C[1],_=function(){var e=Object(G.a)(A.a.mark((function e(t){var a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),w(!0),e.next=4,n(b,O,d);case 4:null!==(a=e.sent)&&k(a),w(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("form",{className:Ne.a.form,onSubmit:_},c.a.createElement("h1",{className:ae()(Ne.a.heading,r.textColor)},t),s?c.a.createElement("input",{value:d,onChange:function(e){return p(e.target.value)},className:ae()(Ne.a.input,r.textColor,r.bottomBorder),type:"text",placeholder:"Velg brukernavn.."}):null,c.a.createElement("input",{value:b,onChange:function(e){return g(e.target.value)},className:ae()(Ne.a.input,r.textColor,r.bottomBorder),type:"email",placeholder:"Epost.."}),c.a.createElement("input",{value:O,onChange:function(e){return j(e.target.value)},className:ae()(Ne.a.input,r.textColor,r.bottomBorder),type:"password",placeholder:"Passord.."}),U&&c.a.createElement("span",{className:Ne.a.error},U),c.a.createElement("button",{type:"submit",className:ae()(Ne.a.loginButton,r.textColor),disabled:""===b||""===O||R},a),i)},Re=a(24),we=a.n(Re),_e=function(){var e=Object(l.e)(),t=Object(o.useContext)(Z),a=t.user,n=t.signIn;Object(o.useEffect)((function(){a&&e.push("/")}),[e,a]);var r=c.a.createElement("div",{className:we.a.goToRegisterLink,onClick:function(){return e.push("/register")}},"Har du ikke konto enda? Registrer deg her");return c.a.createElement("div",{className:we.a.container},c.a.createElement(Ce,{title:"Logg inn",buttonTitle:"Logg inn",onSubmit:n,colorTheme:{textColor:we.a.textColor,bottomBorder:we.a.bottomBorder},bottomLink:r}))},ye=a(25),Be=a.n(ye),Te=function(){var e=Object(l.e)(),t=Object(o.useContext)(Z),a=t.user,n=t.signUp;Object(o.useEffect)((function(){a&&e.push("/")}),[e,a]);var r=c.a.createElement("div",{className:Be.a.goToLoginLink,onClick:function(){return e.push("/login")}},"Har du allerede konto? G\xe5 til innlogging");return c.a.createElement("div",{className:Be.a.container},c.a.createElement(Ce,{title:"Registrer deg",buttonTitle:"Ferdig",onSubmit:n,colorTheme:{textColor:Be.a.textColor,bottomBorder:Be.a.bottomBorder},includeUsername:!0,bottomLink:r}))},Le=function(){return c.a.createElement(ee,null,c.a.createElement(u.a,null,c.a.createElement(l.a,{exact:!0,path:"/",component:Ue}),c.a.createElement(l.a,{exact:!0,path:"/scramble/:scramble",component:Ue}),c.a.createElement(l.a,{path:"/algorithms",component:F}),c.a.createElement(l.a,{path:"/login",component:_e}),c.a.createElement(l.a,{path:"/register",component:Te})))};a(93),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.41318a60.chunk.js.map