(this["webpackJsonprubiks-helper"]=this["webpackJsonprubiks-helper"]||[]).push([[0],{127:function(e,t,a){e.exports={container:"container_2TgWB",graphContainer:"graphContainer_2PNpT"}},14:function(e,t,a){e.exports={timerContainer:"timerContainer_uhNEX",solves:"solves_3PZ7k",timer:"timer_3o0do",holding:"holding_2V3O1",readyToStart:"readyToStart_uJUlD",time:"time_14ST2",largeTimer:"largeTimer_1shFP",currentSolveTime:"currentSolveTime_2wrE7",removeSolveButton:"removeSolveButton_1X8O_",removeSolveIcon:"removeSolveIcon_e5giF",abortButton:"abortButton_3AXKK",previousSolvesContainer:"previousSolvesContainer_2uk65",fadeOut:"fadeOut_2rtRX",previousSolves:"previousSolves_2b8XE",startButton:"startButton_3D06d",handButtonsAndSolveTimeContainer:"handButtonsAndSolveTimeContainer_fkWsM",leftHand:"leftHand_rGgeu",show:"show_2nn0U",previousSolve:"previousSolve_316WQ"}},15:function(e,t,a){e.exports={statsContainerMobile:"statsContainerMobile_mRpz8",heading:"heading_rty2t",statsContainerDesktop:"statsContainerDesktop_2PXuO",statElement:"statElement_cYTEH",statLabel:"statLabel_1Hp_5",statValue:"statValue_2X4kL"}},17:function(e,t,a){e.exports={container:"container_23up_",queryInput:"queryInput_g6eat",case:"case_2D98W",algorithm:"algorithm_1xtvQ",algHeader:"algHeader_3Kow3",algorithmText:"algorithmText_2RLGP",addCustomAlgorithm:"addCustomAlgorithm_3h7fs",customAlg:"customAlg_2i5Dm",customAlgText:"customAlgText_2s17O",customAlgInput:"customAlgInput_bj0ER",saveCustomAlg:"saveCustomAlg_1bFBb",notFound:"notFound_3NrGR",howItWorksContainer:"howItWorksContainer_2N6bh",howItWorks:"howItWorks_1pOVI"}},172:function(e,t,a){e.exports=a.p+"static/media/cube-logo-black.6261312b.svg"},173:function(e,t,a){e.exports=a.p+"static/media/cube-logo-white.83b12dab.svg"},179:function(e,t,a){e.exports={cubeTimerContainer:"cubeTimerContainer_Ay0n8"}},180:function(e,t,a){e.exports={container:"container_3JqcO"}},193:function(e,t,a){e.exports=a(327)},21:function(e,t,a){e.exports={menuContainer:"menuContainer_2vuC_",menu:"menu_2ShiP",logoContainer:"logoContainer_2K8kN",cubeLogo:"cubeLogo_2sbuk",menuElements:"menuElements_WNE8L",loginButton:"loginButton_3gMw8",userName:"userName_2N1sJ",userIcon:"userIcon_14Ax9",menuPoint:"menuPoint_1Wcgc","underline-movement":"underline-movement_gioSW",dark:"dark_7oPqM",desktopLoginView:"desktopLoginView_1s2ls",mobileLoginView:"mobileLoginView_1ocpk"}},216:function(e,t){},326:function(e,t,a){},327:function(e,t,a){"use strict";a.r(t);var n,r,o=a(1),c=a.n(o),s=a(171),i=a.n(s),l=a(55),u=a(51),m=a(10),d=a(35),v=a(12),f=a.n(v),p=a(6),b=a.n(p),g=a(42),h=a(11),U=a(20),R=a(36),E=a.n(R),O=(a(199),a(201),function(e){switch(e.code){case"auth/wrong-password":return"Feil passord";case"auth/user-not-found":return"Brukeren finnes ikke";case"auth/invalid-email":return"Ugyldig epostadresse";case"auth/weak-password":return"For svakt passord!";default:return console.error(e.code),"Oops.. Noe gikk galt!"}}),j={user:null,isLoading:!1,signIn:function(){var e=Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),signUp:function(){var e=Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),signOut:function(){var e=Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},k={sessionSolves:[],stored:{best:void 0},addNewSolve:function(){var e=Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),removeStoredSolve:function(){var e=Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),getLastNStoredSolves:function(){var e=Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",null);case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},N=function(e){return E.a.firestore().collection("solves").doc(e).collection("all_solves")},S=function(e){return E.a.firestore().collection("userdata").doc(e).get()},w=function(e){return E.a.firestore().collection("public_userdata").doc(e).get()},x=function(){var e=Object(h.a)(b.a.mark((function e(t){var a,n,r,o,c,s,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S(t);case 2:return a=e.sent,e.next=5,w(t);case 5:if(n=e.sent,r=a.data(),o=n.data(),c=o&&"username"in o?o.username:void 0,r){e.next=11;break}return e.abrupt("return",{username:c,friends:[]});case 11:return s="friends"in r?r.friends:[],e.next=14,Promise.all(s.map(function(){var e=Object(h.a)(b.a.mark((function e(t){var a,n,r,o,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w(t);case 3:return a=e.sent,n=a&&a.data()&&"username"in a.data()?a.data().username:void 0,e.next=7,N(t).orderBy("time","asc").limit(1).get();case 7:return r=e.sent,o=r.docs.map((function(e){return Object(U.a)({},e.data(),{id:e.id})})),c=0===o.length?void 0:o[0],e.abrupt("return",{username:n,bestSolveTime:c?c.time:void 0});case 13:return e.prev=13,e.t0=e.catch(0),console.error("Error fetching friend with id",t),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}()));case 14:return i=e.sent,e.abrupt("return",{username:c,friends:i.filter((function(e){return null!==e})).map((function(e){return e}))});case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=Object(h.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.firestore().collection("public_userdata").where("username","==",t).get();case 2:return a=e.sent,e.abrupt("return",a.docs.length>0);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();E.a.initializeApp({apiKey:"AIzaSyAW_PdA6o5ygKubwsxaQfJ22dgWE5fA41U",authDomain:"cubeguru-79b7d.firebaseapp.com",databaseURL:"https://cubeguru-79b7d.firebaseio.com",projectId:"cubeguru-79b7d",storageBucket:"cubeguru-79b7d.appspot.com",messagingSenderId:"1042814909264",appId:"1:1042814909264:web:e79fa88d14f9f4669c4a55",measurementId:"G-Z2GMHWJ2NG"});var y=Object(o.createContext)(j),_=Object(o.createContext)(k),L=function(e){var t=e.children,a=Object(o.useState)({user:null,isLoading:!0}),s=Object(m.a)(a,2),i=s[0],l=s[1],u=Object(o.useState)({sessionSolves:[],stored:{best:void 0,nLastSolves:void 0}}),d=Object(m.a)(u,2),v=d[0],f=d[1],p=function(e){return f((function(t){return Object(U.a)({},t,{stored:Object(U.a)({},t.stored,{best:e})})}))},R=function(){var e=Object(h.a)(b.a.mark((function e(t){var a,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f((function(e){return Object(U.a)({},e,{sessionSolves:[t].concat(Object(g.a)(e.sessionSolves))})})),!i.user||!r){e.next=7;break}return a=r.doc(),e.next=5,a.set(t);case 5:n=Object(U.a)({},t,{id:a.id}),(void 0===v.stored.best||v.stored.best.time>t.time)&&p(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(h.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f(Object(U.a)({},v,{sessionSolves:v.sessionSolves.filter((function(e){return e.timestamp!==t.timestamp}))})),!i.user||!r){e.next=4;break}return e.next=4,r.where("timestamp","==",t.timestamp).get().then((function(e){return e.docs.forEach((function(e){return e.ref.delete()}))}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(h.a)(b.a.mark((function e(t){var a,n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===(a=i.user)||void 0===a?void 0:a.uid){e.next=2;break}return e.abrupt("return",null);case 2:if(!v.stored.nLastSolves){e.next=4;break}return e.abrupt("return",v.stored.nLastSolves);case 4:return e.next=6,E.a.firestore().collection("solves").doc(i.user.uid).collection("all_solves").orderBy("timestamp","desc").limit(t).get();case 6:return n=e.sent,r=n.docs.map((function(e){return e.data()})),f((function(e){return Object(U.a)({},e,{stored:Object(U.a)({},e.stored,{nLastSolves:r})})})),e.abrupt("return",r);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(h.a)(b.a.mark((function e(t,a){var r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,null===(r=n)||void 0===r?void 0:r.signInWithEmailAndPassword(t,a);case 3:return e.abrupt("return",null);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",O(e.t0));case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t,a){return e.apply(this,arguments)}}(),L=function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:null===(t=n)||void 0===t||t.signOut(),f((function(e){return Object(U.a)({},e,{stored:k.stored})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=Object(o.useCallback)(function(){var e=Object(h.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=N(t.uid),e.next=3,r.orderBy("timestamp","desc").limit(5).get().then((function(e){return f((function(t){return Object(U.a)({},t,{sessionSolves:e.docs.map((function(e){return e.data()}))})}))}));case 3:return N(t.uid).orderBy("time","asc").limit(1).onSnapshot((function(e){var t=e.docs.map((function(e){return Object(U.a)({},e.data(),{id:e.id})}));p(0===t.length?void 0:t[0])})),e.next=6,x(t.uid);case 6:a=e.sent,l((function(e){return Object(U.a)({},e,{isLoading:!1,user:a?Object(U.a)({},t,{},a):Object(U.a)({},t,{username:void 0,friends:[]})})}));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),[]),B=function(){var e=Object(h.a)(b.a.mark((function e(t,a,r){var o,c,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,C(r);case 3:if(!e.sent){e.next=6;break}return e.abrupt("return","Dette brukernavnet er dessverre opptatt");case 6:return e.next=8,null===(o=n)||void 0===o?void 0:o.createUserWithEmailAndPassword(t,a);case 8:if(s=e.sent){e.next=11;break}return e.abrupt("return","Noe gikk galt med opprettelsen av din konto");case 11:return(null===(c=s.user)||void 0===c?void 0:c.uid)&&(i={username:r,userId:s.user.uid},E.a.firestore().collection("public_userdata").doc(i.userId).set({username:i.username})),e.abrupt("return",null);case 15:return e.prev=15,e.t0=e.catch(0),e.abrupt("return",O(e.t0));case 18:case"end":return e.stop()}var i}),e,null,[[0,15]])})));return function(t,a,n){return e.apply(this,arguments)}}();return Object(o.useEffect)((function(){n||(n=E.a.auth()).onAuthStateChanged((function(e){null===e?(r=void 0,l({user:null,isLoading:!1})):T(e)}))}),[T]),c.a.createElement(y.Provider,{value:Object(U.a)({},i,{signIn:w,signUp:B,signOut:L})},c.a.createElement(_.Provider,{value:Object(U.a)({},v,{addNewSolve:R,removeStoredSolve:j,getLastNStoredSolves:S})},t))},T=a(172),B=a.n(T),I=a(173),A=a.n(I),D=a(21),M=a.n(D),F=function(){var e=Object(o.useContext)(y),t=e.user,a=e.isLoading,n=e.signOut,r=Object(u.e)(),s=t?"fa-unlock":"fa-lock";return a?null:c.a.createElement("button",{className:f()(M.a.loginButton,M.a.menuPoint),onClick:function(){a||(t?n():r.push("/login"))}},c.a.createElement("div",{className:M.a.desktopLoginView},t?"Logg ut":"Logg inn"),c.a.createElement("div",{className:M.a.mobileLoginView},c.a.createElement("i",{className:f()("fas ".concat(s))})))},W=function(e){var t=e.dark,a=void 0!==t&&t,n=Object(o.useContext)(y),r=n.user,s=n.isLoading,i=Object(u.e)();return s?null:c.a.createElement("div",{className:f()(M.a.menuContainer,Object(d.a)({},M.a.dark,a))},c.a.createElement("div",{className:M.a.logoContainer,onClick:function(){return i.push("/")}},c.a.createElement("img",{className:M.a.cubeLogo,src:a?B.a:A.a,alt:"Logo"})),c.a.createElement("div",{className:M.a.menu},c.a.createElement("div",{className:M.a.menuElements},!window.location.href.includes("scramble")&&c.a.createElement("div",{className:M.a.menuPoint,onClick:function(){return i.push("/")}},"Timer"),!window.location.href.includes("highscores")&&r&&r.friends.length>0&&c.a.createElement("div",{className:M.a.menuPoint,onClick:function(){return i.push("/highscores")}},"Hvem leder?"),!window.location.href.includes("algorithms")&&c.a.createElement("div",{className:M.a.menuPoint,onClick:function(){return i.push("/algorithms")}},"F2L-s\xf8k")),c.a.createElement("div",{className:M.a.userName},(null===r||void 0===r?void 0:r.username)?"Hei, ".concat(null===r||void 0===r?void 0:r.username,"!"):""),c.a.createElement("i",{className:f()("fas fa-user",M.a.userIcon)}),c.a.createElement(F,null)))},P=a(190),H=a(17),V=a.n(H),K=function(e){var t=e.f2lCase,a=Object(o.useState)(!1),n=Object(m.a)(a,2),r=n[0],s=n[1],i=Object(o.useState)(""),l=Object(m.a)(i,2),u=l[0],d=l[1],v=Object.entries({ABCa:"U R L' R' U D"}).find((function(e){var a=Object(m.a)(e,2),n=a[0];a[1];return n===t.name}));return c.a.createElement("div",{className:V.a.case},c.a.createElement(P.a,{src:"cases/".concat(t.name,".svg")}),c.a.createElement("div",{className:V.a.algorithm},c.a.createElement("div",{className:V.a.algHeader},"Anbefalt algoritme"),c.a.createElement("div",{className:V.a.algorithmText},t.alg),r?c.a.createElement("div",null,c.a.createElement("input",{value:u,onChange:function(e){return d(e.target.value)},className:V.a.customAlgInput}),c.a.createElement("button",{className:V.a.saveCustomAlg},"Lagre")):void 0!==v?c.a.createElement("div",{className:V.a.customAlg},c.a.createElement("div",{className:V.a.algHeader},"Min algoritme"),c.a.createElement("div",{className:f()(V.a.algorithmText,V.a.customAlgText)},v[1])):Math.random()<1e-4?c.a.createElement("button",{className:V.a.addCustomAlgorithm,onClick:function(){return s(!0)}},"+ Legg til egen algoritme"):null))},G=[{name:"UL4a",alg:"U (R U' R')"},{name:"UL2a",alg:"y' (R' U' R)"},{name:"UR1a",alg:"y' U' (R' U R)"},{name:"UR3b",alg:"(R U R')"},{name:"UL3b",alg:"U' (R U' R' U) y' (R' U' R)"},{name:"UL4b",alg:"U' (R U2' R' U) y' (R' U' R)"},{name:"UL1a",alg:"y' U (R' U R U') (R' U' R)"},{name:"UR2b",alg:"U' (R U R' U) (R U R')"},{name:"UR1b",alg:"R' U2' R2 U R2' U R"},{name:"UR4a",alg:"U' (R U' R' U) (R U R')"},{name:"UL3a",alg:"(U' R U R') U2 (R U' R')"},{name:"UL2b",alg:"U' (R U2' R') U2 (R U' R')"},{name:"UR2a",alg:"y' (U R' U' R) U2' (R' U R)"},{name:"UR3a",alg:"y' U (R' U2 R) U2' (R' U R)"},{name:"UU3a",alg:"U (R U2 R') U (R U' R')"},{name:"UU2a",alg:"U2 (R U R' U) (R U' R')"},{name:"UU2b",alg:"y' U' (R' U2 R) U' (R' U R)"},{name:"UU3b",alg:"y' U2 (R' U' R) U' (R' U R)"},{name:"UL1b",alg:"y' (R' U R) U2' y (R U R')"},{name:"UU4a",alg:"(R U2 R') U' (R U R')"},{name:"UU1b",alg:"U (R U' R' U') (R U' R' U) (R U' R')"},{name:"UR5a",alg:"U (R U R') U2 (R U R')"},{name:"UU5a",alg:"(U R U' R') (U R U' R') (U R U' R')"},{name:"UL5b",alg:"(U' R U R') U y' (R' U' R)"},{name:"UU5b",alg:"(R U' R' U) y' (R' U R)"},{name:"UL5a",alg:"(U' R U' R') U2 (R U' R')"},{name:"DL5a",alg:"(R U' R' U') R U R' U2 (R U' R')"},{name:"DL5b",alg:"(F' U F) U2 (R U R' U) (R U' R')"},{name:"DR5b",alg:"(R U R' U') (R U' R') U2 y' (R' U' R)"},{name:"DR5a",alg:"(R U' R' U) (R U2' R') U (R U' R')"},{name:"DD5b",alg:"(R U' R') d (R' U2 R) U2' (R' U R) "},{name:"UR4b",alg:"(R U' R' U2) y' (R' U' R)"},{name:"UU1a",alg:"y' (R' U2 R) U (R' U' R)"},{name:"UU4b",alg:"y' U' (R' U R U) (R' U R U') (R' U R)"},{name:"DD1a",alg:"U (R U' R') U' (F' U F)"},{name:"DR1a",alg:"y' (R' U R U') (R' U R)"},{name:"DR4a",alg:"(R U R' U') (R U R')"},{name:"DD4a",alg:"U' F' (R U R' U') R' F R"},{name:"DL4a",alg:"(R U' R' U) (R U' R')"},{name:"DL1a",alg:"y' (R' U' R U) (R' U' R)"},{name:"UR5b",alg:"U (F' U' F) U' (R U R')"}],J=function(){return c.a.createElement("div",{className:V.a.howItWorksContainer},"Sp\xf8r Kristian")},X=function(){var e=Object(o.useState)(""),t=Object(m.a)(e,2),a=t[0],n=t[1],r=Object(o.useState)([]),s=Object(m.a)(r,2),i=s[0],l=s[1],u=Object(o.useState)(!1),d=Object(m.a)(u,2),v=d[0],f=d[1],p=Object(o.useState)(null),b=Object(m.a)(p,2),g=b[0],h=b[1];return c.a.createElement("div",{className:V.a.container},c.a.createElement(W,{dark:!0}),c.a.createElement("input",{value:a,onChange:function(e){var t=e.target.value.toUpperCase();if(n(t),3===t.length){var a=G.filter((function(e){return e.name.startsWith(t)}));n(""),l(a),h(0===a.length?"".concat(t," er ikke en F2L-case"):null)}},className:V.a.queryInput,placeholder:"S\xf8k.."}),v?c.a.createElement(J,{close:function(){return f(!1)}}):c.a.createElement("div",{className:V.a.howItWorks,onClick:function(){return f(!0)}},"Hvordan s\xf8ker man?"),g&&c.a.createElement("div",{className:V.a.notFound},g),i.map((function(e){return c.a.createElement(K,{key:e.name,f2lCase:e})})))},q=a(178),z=a.n(q),Q=a(58),Z=a.n(Q),Y=function(e){var t=e.newScramble,a=e.onPrevScrambleClick,n=Object(o.useState)(),r=Object(m.a)(n,2),s=r[0],i=r[1],l=Object(o.useState)(),u=Object(m.a)(l,2),d=u[0],v=u[1];return Object(o.useEffect)((function(){t!==s&&(v(s),i(t))}),[t,s,v]),c.a.createElement("div",{className:Z.a.scrambleContainer},c.a.createElement("div",{className:Z.a.scramble},s),s&&c.a.createElement("div",{className:Z.a.previousScramble,onClick:function(){d&&(a(d),v(void 0))}},d))},$=a(102),ee=a.n($);ee.a.initSolver();var te,ae=a(101),ne={R:"red",L:"orange",U:"white",D:"rgb(253, 255, 40)",F:"rgb(50,230,20)",B:"blue"},re=function(e){var t,a=e.face,n=null===(t=Object.entries(ne).filter((function(e){var t=Object(m.a)(e,2),n=t[0];t[1];return n===a})))||void 0===t?void 0:t.map((function(e){var t=Object(m.a)(e,2);t[0];return t[1]}))[0];return c.a.createElement("div",{className:Z.a.scrambleSticker,style:{backgroundColor:n}})},oe=function(e){var t=e.frontFace.split("").map((function(e,t){return c.a.createElement(re,{key:t,face:e})}));return c.a.createElement("div",{className:Z.a.scrambleCube,"data-for":"start-timer-tooltip","data-tip":"Gr\xf8nn side mot deg, hvit side opp"},t,c.a.createElement(ae.a,{id:"scramble-visualization-tooltip",effect:"solid",type:"light"}))},ce=function(e){return("0"+e).slice(-2)},se=function(){return(new Date).getTime()},ie=function(e){var t=Math.floor(e/6e4),a=Math.floor(e/1e3)%60,n=Math.floor(e%1e3/10);return"".concat(t>0?t+":":"").concat(t>0?ce(a):a,".").concat(ce(n))},le=a(15),ue=a.n(le),me=function(e){return Math.min.apply(Math,Object(g.a)(e.map((function(e){return e.time}))))},de=function(e){return Math.max.apply(Math,Object(g.a)(e.map((function(e){return e.time}))))},ve=function(e){return e.reduce((function(e,t){return e+t.time}),0)},fe=function(e){return ve(e)-me(e)-de(e)},pe=function(e){var t,a=e.sessionSolves,n=e.bestSolve,r=n?n.time:me(a),o=de(a),s=(t=a).reduce((function(e,t){return e+t.time}),0)/t.length,i=a.length>=5?function(e){for(var t=ve(e.slice(0,5)),a=t,n=0;n<e.length-5;n++)t-=e[n].time,t+=e[n+5].time,a=Math.min(t,a);return a/5}(a):null,l=a.length>=5?function(e){var t=e.slice(0,5);return fe(t)/3}(a):null,u=a.length>=5?function(e){for(var t=e.slice(0,5),a=fe(t),n=0;n<e.length-5;n++){var r=e.slice(n,n+5),o=fe(r);a=Math.min(o,a)}return a/3}(a):null;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:ue.a.statsContainerMobile},c.a.createElement("div",{className:ue.a.heading},"dine tider denne runden"),c.a.createElement("div",null,"beste: ",a.length>0?ie(r):"-"),c.a.createElement("div",null,"d\xe5rligte: ",a.length>1?ie(o):"-"),c.a.createElement("div",null,"gjennomsnitt: ",a.length>1?ie(s):"-"),c.a.createElement("div",null,"3 av 5: ",l?ie(l):"-"),c.a.createElement("div",null,"beste 3 av 5:"," ",u?ie(u):"-"),c.a.createElement("div",null,"beste gjennomsnitt av 5:"," ",i?ie(i):"-")),c.a.createElement("div",{className:ue.a.statsContainerDesktop},c.a.createElement("div",{className:ue.a.heading},"Dine tider"),c.a.createElement("div",{className:ue.a.statElement},c.a.createElement("div",{className:ue.a.statLabel},"beste:"),c.a.createElement("div",{className:ue.a.statValue},a.length>0||n?ie(r):"-")),c.a.createElement("div",{className:ue.a.statElement},c.a.createElement("div",{className:ue.a.statLabel},"d\xe5rligste:"),c.a.createElement("div",{className:ue.a.statValue},a.length>1?ie(o):"-")),c.a.createElement("div",{className:ue.a.statElement},c.a.createElement("div",{className:ue.a.statLabel},"3 av 5:"),c.a.createElement("div",{className:ue.a.statValue},l?ie(l):"-")),c.a.createElement("div",{className:ue.a.statElement},c.a.createElement("div",{className:ue.a.statLabel},"beste 3 av 5:"),c.a.createElement("div",{className:ue.a.statValue},u?ie(u):"-")),c.a.createElement("div",{className:ue.a.statElement},c.a.createElement("div",{className:ue.a.statLabel},"beste gjennomsnitt av 5:"),c.a.createElement("div",{className:ue.a.statValue},i?ie(i):"-"))))},be=a(103),ge=a.n(be),he=a(14),Ue=a.n(he),Re=function(e){var t,a=e.timerRunning,n=e.onToggleTimerRunning,r=e.onNewScramble,s=e.addSolve,i=e.removeSolve,l=e.solves,u=Object(o.useState)(),v=Object(m.a)(u,2),p=v[0],g=v[1],U=Object(o.useState)("0.00"),R=Object(m.a)(U,2),E=R[0],O=R[1],j=Object(o.useState)(0),k=Object(m.a)(j,2),N=k[0],S=k[1],w=Object(o.useState)(!1),x=Object(m.a)(w,2),C=x[0],y=x[1],_=Object(o.useState)(!1),L=Object(m.a)(_,2),T=L[0],B=L[1];Object(o.useEffect)((function(){if(a?te=setInterval((function(){S(se()-(null!==p&&void 0!==p?p:0))}),10):te&&clearInterval(te),te)return function(){return clearInterval(te)}}),[a,p]),Object(o.useEffect)((function(){T&&(C||B(!1))}),[T,C,B]);var I=function(){var e=Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n(!1),0!==N&&(O(ie(N)),s(N)),r();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){n(!1),S(0)},D=(t={},Object(d.a)(t,Ue.a.holding,C&&!T),Object(d.a)(t,Ue.a.readyToStart,C&&T),t),M=function(){C||(B(!1),y(!0),setTimeout((function(){B(!0)}),500),a||S(0))},F=function(){y(!1),a?I():T&&(a||(g(se()),n(!0)),B(!1))},W="0.00"!==E?l.slice(1):l;return c.a.createElement("div",{className:Ue.a.timerContainer},a?c.a.createElement("div",{className:Ue.a.largeTimer,onClick:function(){se()-(null!==p&&void 0!==p?p:0)>1e3&&I()}},c.a.createElement("div",{className:Ue.a.abortButton,onClick:A},"Esc"),c.a.createElement("span",{className:f()(Ue.a.timer,Ue.a.time)},ie(N))):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:f()(Ue.a.startButton,D),"data-for":"start-timer-tooltip","data-tip":"Hold inne space for \xe5 starte"},c.a.createElement("i",{className:f()("fas fa-hand-paper",Ue.a.leftHand)})),c.a.createElement("div",{className:Ue.a.solves},c.a.createElement("div",{className:Ue.a.currentSolveTime},c.a.createElement("span",{className:f()(Ue.a.timer,Ue.a.time,D),onMouseUp:F,onMouseDown:M,onTouchStart:M,onTouchEnd:F},E),c.a.createElement("button",{className:f()(Ue.a.removeSolveButton,Object(d.a)({},Ue.a.show,"0.00"!==E&&l.length>0)),onClick:function(){i(l[0]),g(0),O("0.00"),S(0)},type:"button"},c.a.createElement("i",{className:f()("fas fa-times",Ue.a.removeSolveIcon)}))),c.a.createElement("div",{className:Ue.a.previousSolvesContainer},c.a.createElement("div",{className:f()(Ue.a.previousSolves,Ue.a.time)},W.map((function(e,t){return c.a.createElement("div",{key:t,className:Ue.a.previousSolve},c.a.createElement("span",null,ie(e.time)),c.a.createElement("button",{className:Ue.a.removeSolveButton,onClick:function(){return i(e)},type:"button"},c.a.createElement("i",{className:f()("fas fa-times",Ue.a.removeSolveIcon)})))})),c.a.createElement("div",{className:Ue.a.fadeOut})))),c.a.createElement("div",{className:f()(Ue.a.startButton,D),"data-for":"start-timer-tooltip","data-tip":"Hold inne space for \xe5 starte"},c.a.createElement("i",{className:"fas fa-hand-paper"})),c.a.createElement(ae.a,{id:"start-timer-tooltip",effect:"solid",type:"light"})),c.a.createElement(ge.a,{handleKeys:["space"],onKeyEvent:M}),c.a.createElement(ge.a,{handleKeys:["space","alphanumeric"],handleEventType:"keyup",onKeyEvent:F}),c.a.createElement(ge.a,{handleKeys:["esc"],handleEventType:"keyup",onKeyEvent:A}))},Ee=a(179),Oe=a.n(Ee),je=function(){var e=Object(u.f)(),t=Object(o.useState)(!1),a=Object(m.a)(t,2),n=a[0],r=a[1],s=Object(o.useContext)(_),i=s.sessionSolves,l=s.stored,d=s.addNewSolve,v=s.removeStoredSolve,f=Object(u.e)(),p=Object(o.useMemo)((function(){return e.scramble?function(e){var t=new ee.a;return t.move(e.replace(/-/g," ")),t.asString().substring(18,27)}(e.scramble):null}),[e.scramble]),g=Object(o.useCallback)(Object(h.a)(b.a.mark((function t(){var a;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.scramble&&z()(e.scramble,{global:!0}),a=ee.a.scramble(),f.push("/scramble/"+a.trim().replace(/ /g,"-"));case 3:case"end":return t.stop()}}),t)}))),[f,e.scramble]);return Object(o.useEffect)((function(){void 0===e.scramble&&g()}),[e.scramble,g]),c.a.createElement("div",{className:Oe.a.cubeTimerContainer},c.a.createElement(W,null),!n&&c.a.createElement(Y,{newScramble:e.scramble?e.scramble.replace(/-/g," "):"",onPrevScrambleClick:function(e){return f.push("/scramble/"+e.replace(/ /g,"-"))}}),c.a.createElement(Re,{timerRunning:n,onToggleTimerRunning:r,onNewScramble:Object(h.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",g());case 1:case"end":return e.stop()}}),e)}))),solves:i,addSolve:function(){var t=Object(h.a)(b.a.mark((function t(a){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",d({time:a,timestamp:se(),scramble:e.scramble}));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),removeSolve:v}),!n&&p&&c.a.createElement(oe,{frontFace:p}),!n&&c.a.createElement(pe,{sessionSolves:i,bestSolve:l.best}))},ke=a(94),Ne=a.n(ke),Se=a(46),we=a.n(Se),xe=function(){var e=Object(o.useContext)(_).stored,t=Object(o.useContext)(y).user;if(!t)return null;var a=e.best,n=t.friends.filter((function(e){return e.username&&e.bestSolveTime}));if(0===n.length)return null;var r=n.map((function(e){return{displayName:e.username,solveTime:e.bestSolveTime}})).concat({displayName:"deg",solveTime:null===a||void 0===a?void 0:a.time}),s=Math.min.apply(Math,Object(g.a)(r.map((function(e){return e.solveTime?e.solveTime:1e8})))),i=Ne()(r,"solveTime");return c.a.createElement("div",{className:we.a.container},c.a.createElement(W,null),c.a.createElement("div",{className:we.a.highscoresContainer},c.a.createElement("div",{className:we.a.heading},"deg og dine venner"),c.a.createElement("ul",{className:we.a.highscoreList},i.map((function(e){return c.a.createElement("li",{key:e.displayName},c.a.createElement("div",{className:f()(we.a.scoreContainer,Object(d.a)({},we.a.loggedInUser,"deg"===e.displayName))},c.a.createElement("div",null,e.displayName),c.a.createElement("div",{className:we.a.score},e.solveTime?ie(e.solveTime):"-"),c.a.createElement("div",{className:we.a.trophy},e.solveTime&&e.solveTime===s?c.a.createElement("i",{className:f()("fas fa-trophy")}):null)))})))))},Ce=a(52),ye=a.n(Ce),_e=function(e){var t=e.title,a=e.buttonTitle,n=e.onSubmit,r=e.colorTheme,s=e.includeUsername,i=e.bottomLink,l=Object(o.useState)(""),u=Object(m.a)(l,2),d=u[0],v=u[1],p=Object(o.useState)(""),g=Object(m.a)(p,2),U=g[0],R=g[1],E=Object(o.useState)(""),O=Object(m.a)(E,2),j=O[0],k=O[1],N=Object(o.useState)(null),S=Object(m.a)(N,2),w=S[0],x=S[1],C=Object(o.useState)(!1),y=Object(m.a)(C,2),_=y[0],L=y[1],T=function(){var e=Object(h.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),L(!0),e.next=4,n(U,j,d);case 4:null!==(a=e.sent)&&x(a),L(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("form",{className:ye.a.form,onSubmit:T},c.a.createElement("h1",{className:f()(ye.a.heading,r.textColor)},t),s?c.a.createElement("input",{value:d,onChange:function(e){return v(e.target.value)},className:f()(ye.a.input,r.textColor,r.bottomBorder),type:"text",placeholder:"Velg brukernavn.."}):null,c.a.createElement("input",{value:U,onChange:function(e){return R(e.target.value)},className:f()(ye.a.input,r.textColor,r.bottomBorder),type:"email",placeholder:"Epost.."}),c.a.createElement("input",{value:j,onChange:function(e){return k(e.target.value)},className:f()(ye.a.input,r.textColor,r.bottomBorder),type:"password",placeholder:"Passord.."}),w&&c.a.createElement("span",{className:ye.a.error},w),c.a.createElement("button",{type:"submit",className:f()(ye.a.loginButton,r.textColor),disabled:""===U||""===j||_},a),i)},Le=a(78),Te=a.n(Le),Be=function(){var e=Object(u.e)(),t=Object(o.useContext)(y),a=t.user,n=t.signIn;Object(o.useEffect)((function(){a&&e.push("/")}),[e,a]);var r=c.a.createElement("div",{className:Te.a.goToRegisterLink,onClick:function(){return e.push("/register")}},"Har du ikke konto enda? Registrer deg her");return c.a.createElement("div",{className:Te.a.container},c.a.createElement(_e,{title:"Logg inn",buttonTitle:"Logg inn",onSubmit:n,colorTheme:{textColor:Te.a.textColor,bottomBorder:Te.a.bottomBorder},bottomLink:r}))},Ie=a(336),Ae=a(339),De=a(334),Me=a(180),Fe=a.n(Me),We=function(){var e=Object(o.useContext)(_).getLastNStoredSolves,t=Object(o.useState)([]),a=Object(m.a)(t,2),n=a[0],r=a[1];Object(o.useEffect)((function(){(function(){var t=Object(h.a)(b.a.mark((function t(){var a,n;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(1e3);case 2:(a=t.sent)&&(n=Ne()(a,(function(e){return e.timestamp})),r(n));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]);var s=n.slice(0,10),i=s.map((function(e){return e.time/1e3})).reduce((function(e,t){return e+t}),0)/s.length,l=(n.length>0?n.reduce((function(e,t){var a=(e[e.length-1]*e.length+t.time/1e3)/(e.length+1);return[].concat(Object(g.a)(e),[a])}),Array(s.length).fill(i)):[]).slice(s.length),u=l.length>0?l.reduce((function(e,t){return Math.min(e,t)}),l[0]):3,d=l.length>0?l.reduce((function(e,t){return Math.max(e,t)}),l[0]):57;return c.a.createElement("div",{className:Fe.a.container},null!==n?c.a.createElement(Ie.a,{theme:Ae.a.material,minDomain:{x:0,y:u-3},maxDomain:{x:Math.max(l.length,3),y:d+3}},c.a.createElement(De.a,{style:{data:{stroke:"#c43a31"},parent:{border:"1px solid red"}},data:l.map((function(e,t){return{x:t,y:e}}))})):null)},Pe=a(127),He=a.n(Pe),Ve=function(){return c.a.createElement("div",{className:He.a.container},c.a.createElement(W,{dark:!0}),c.a.createElement("div",{className:He.a.graphContainer},c.a.createElement(We,null)))},Ke=a(79),Ge=a.n(Ke),Je=function(){var e=Object(u.e)(),t=Object(o.useContext)(y),a=t.user,n=t.signUp;Object(o.useEffect)((function(){a&&e.push("/")}),[e,a]);var r=c.a.createElement("div",{className:Ge.a.goToLoginLink,onClick:function(){return e.push("/login")}},"Har du allerede konto? G\xe5 til innlogging");return c.a.createElement("div",{className:Ge.a.container},c.a.createElement(_e,{title:"Registrer deg",buttonTitle:"Ferdig",onSubmit:n,colorTheme:{textColor:Ge.a.textColor,bottomBorder:Ge.a.bottomBorder},includeUsername:!0,bottomLink:r}))},Xe=function(){return c.a.createElement(L,null,c.a.createElement(l.a,null,c.a.createElement(u.a,{exact:!0,path:"/",component:je}),c.a.createElement(u.a,{exact:!0,path:"/scramble/:scramble",component:je}),c.a.createElement(u.a,{path:"/algorithms",component:X}),c.a.createElement(u.a,{path:"/login",component:Be}),c.a.createElement(u.a,{path:"/highscores",component:xe}),c.a.createElement(u.a,{path:"/register",component:Je}),c.a.createElement(u.a,{path:"/profile",component:Ve})))};a(326),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Xe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},46:function(e,t,a){e.exports={container:"container_1P0vW",highscoresContainer:"highscoresContainer_2cR9I",heading:"heading_38Q9e",highscoreList:"highscoreList_2j4wC",scoreContainer:"scoreContainer_2lBtI",loggedInUser:"loggedInUser_2njET",score:"score_2_waJ",trophy:"trophy_2ObDw"}},52:function(e,t,a){e.exports={form:"form_2ZqZS",heading:"heading_3kArt",input:"input_1E3zl",loginButton:"loginButton_3UAWA",error:"error_3AftS"}},58:function(e,t,a){e.exports={scrambleContainer:"scrambleContainer_OA__R",scramble:"scramble_2YhpN",scrambleCube:"scrambleCube_3y78-",scrambleSticker:"scrambleSticker_zdGl9",previousScramble:"previousScramble_16xeh"}},78:function(e,t,a){e.exports={container:"container_2I3pj",textColor:"textColor_1BWe8",bottomBorder:"bottomBorder_2f-iS",goToRegisterLink:"goToRegisterLink_1jSe-"}},79:function(e,t,a){e.exports={container:"container_3E2_Q",textColor:"textColor_2I3YX",bottomBorder:"bottomBorder_1awHt",goToLoginLink:"goToLoginLink_E3FTV"}}},[[193,1,2]]]);
//# sourceMappingURL=main.44ee235d.chunk.js.map