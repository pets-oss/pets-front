(this["webpackJsonppets-front"]=this["webpackJsonppets-front"]||[]).push([[3],{162:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n(30),i=(n(0),n(190)),r=n(294),c=n(131),o=n(168),l=n(72),s=n(79),u=n(4);function j(e){var t=e.title,n=e.topSection,a=e.children,o=e.displayTitleOnMobile,l=d(),j=Object(s.a)();return Object(u.jsx)(i.a,{in:!0,timeout:600,children:Object(u.jsx)(r.a,{component:"main",className:l.root,maxWidth:"lg",children:Object(u.jsxs)(c.a,{container:!0,spacing:4,children:[(!j||o)&&t&&Object(u.jsx)(c.a,{item:!0,xs:12,children:Object(u.jsx)(b,{title:t})}),n&&Object(u.jsx)(c.a,{item:!0,xs:12,children:n}),Object(u.jsx)(c.a,{item:!0,xs:12,className:l.content,children:a})]})})})}function b(e){var t=e.title,n=d();return"string"!==typeof t?Object(u.jsx)(u.Fragment,{children:"title"}):Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(l.a,{className:n.title,variant:"h3",component:"h1",children:t})})}var d=Object(o.a)((function(e){var t;return{root:(t={},Object(a.a)(t,e.breakpoints.down("md"),{marginTop:e.spacing(1)}),Object(a.a)(t,e.breakpoints.up("md"),{marginTop:64+e.spacing(3)}),Object(a.a)(t,"marginBottom",e.spacing(10)),t),heading:{marginBottom:e.spacing(2)},endAlign:{textAlign:"end"},title:{fontWeight:500},content:{display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column"}}}))},185:function(e,t,n){"use strict";n.d(t,"a",(function(){return U})),n.d(t,"b",(function(){return R}));var a=n(101),i=n(57),r=n(0),c=n.n(r),o=n(21),l=n(39),s=n(290),u=n(287),j=n(292),b=n(169),d=n(227),h=n(188),p=n(288),m=n(289),O=n(187),f=n(168),x=n(217),g=n(291),v=n(72),w=n(286),k=n(200),y=n.n(k),T=n(199),z=n.n(T),A=n(201),C=n.n(A),S=n(84),N=n(4),U=64,H=Object(f.a)((function(e){return Object(x.a)({appBar:{top:"auto",bottom:0,height:U,backgroundColor:e.palette.primary.light},drawerHeader:Object(i.a)(Object(i.a)({display:"flex",alignItems:"center",padding:e.spacing(0,3)},e.mixins.toolbar),{},{justifyContent:"space-between"}),show:{transform:"translateY(0)",transition:"transform .5s"},hide:{transform:"translateY(-110%)",transition:"transform .5s"}})}));function I(e){var t=e.children,n=Object(w.a)();return Object(N.jsx)(O.a,{appear:!1,direction:"up",in:!n,children:t})}function R(){var e=H(),t=Object(o.f)(),n=Object(o.g)(),i=c.a.useState(!1),r=Object(a.a)(i,2),O=r[0],f=r[1],x=Object(l.b)().isAuthenticated,w=function(){f(!1)};return Object(N.jsx)(I,{children:Object(N.jsxs)(s.a,{className:e.appBar,position:"fixed",color:"default",children:[Object(N.jsx)(g.a,{children:Object(N.jsx)(b.a,{edge:"start",onClick:function(){f(!0)},color:"inherit","aria-label":"open drawer",children:Object(N.jsx)(C.a,{})})}),Object(N.jsx)(j.a,{anchor:"bottom",open:O,onClose:w,children:Object(N.jsxs)("div",{role:"presentation",children:[Object(N.jsxs)("div",{className:e.drawerHeader,children:[Object(N.jsx)(v.a,{variant:"h6",children:"PetBook"}),Object(N.jsx)(b.a,{edge:"end",onClick:w,children:Object(N.jsx)(z.a,{})})]}),Object(N.jsx)(u.a,{}),Object(N.jsx)(d.a,{children:S.a.filter((function(e){return!e.authRequired||x})).map((function(e){return Object(N.jsxs)(h.a,{button:!0,selected:(a=e.to,n.pathname===a),onClick:function(n){return function(e,n){t.push(n),f(!1)}(0,e.to)},children:[Object(N.jsx)(p.a,{children:Object(N.jsx)(y.a,{})}),Object(N.jsx)(m.a,{primary:e.title})]},e.title);var a}))})]})})]})})}},234:function(e,t,n){},239:function(e,t,n){},282:function(e,t,n){"use strict";n.r(t);n(234);var a=n(0),i=n.n(a),r=n(18),c=n.n(r),o=n(38),l=(n(239),n(21)),s=n(335),u=n(168),j=n(332),b=n(336),d=n(79),h=n(185),p=n(4);function m(){return Object(d.a)()?Object(p.jsx)(h.b,{}):Object(p.jsx)("div",{})}var O=n(290),f=n(217),x=n(291),g=n(72),v=n(84),w=n(30),k=n(101),y=n(39),T=n(307),z=n(169),A=n(313),C=n(334),S=n(153),N=n.n(S),U=n(285),H=n(105),I=n.n(H);function R(){var e=B(),t=Object(y.b)(),n=t.isAuthenticated,a=t.user,r=t.loginWithRedirect,c=t.logout,o=Object(l.f)(),s=i.a.useState(null),u=Object(k.a)(s,2),j=u[0],b=u[1],d=Boolean(j),h=function(){var e=I()();return Object(U.a)(e.breakpoints.down("xs"))}(),m=function(){b(null)};return Object(p.jsx)("div",{children:n?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(T.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){b(e.currentTarget)},color:"inherit",startIcon:Object(p.jsx)(N.a,{}),children:Object(p.jsx)(g.a,{component:"span",className:e.label,noWrap:!0,children:h?function(e){if(!e)return"";var t=e.split(" "),n="";return t.forEach((function(e){n+=e[0]})),n}(null===a||void 0===a?void 0:a.name):null===a||void 0===a?void 0:a.name})}),Object(p.jsxs)(A.a,{id:"menu-appbar",anchorEl:j,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:m,children:[Object(p.jsx)(C.a,{onClick:function(){o.push("/user-profile"),m()},children:"Profile"}),Object(p.jsx)(C.a,{onClick:function(){return c({returnTo:window.location.origin})},children:"Logout"})]})]}):Object(p.jsx)(z.a,{"aria-label":"login",edge:"end",onClick:function(){return r()},color:"inherit",children:Object(p.jsx)(N.a,{})})})}var B=Object(u.a)((function(e){return{label:Object(w.a)({fontSize:"inherit",fontWeight:"inherit"},e.breakpoints.down("sm"),{maxWidth:150})}})),P=Object(u.a)((function(){return Object(f.a)({appbar:{backgroundColor:"transparent"},toolbar:{justifyContent:"space-between"},title:{flexGrow:1}})}));function L(){var e=P(),t=Object(l.g)();return Object(p.jsx)(O.a,{className:e.appbar,position:"static",color:"default",elevation:0,children:Object(p.jsxs)(x.a,{className:e.toolbar,children:[Object(p.jsx)(g.a,{variant:"h6",className:e.title,noWrap:!0,children:function(){var e=v.a.filter((function(e){return e.to===t.pathname}));return 1===e.length?e[0].pageTitle:""}()}),Object(p.jsx)(R,{})]})})}var _=n(190),W=n(308),D=Object(u.a)((function(e){return Object(f.a)({appBar:{backgroundColor:e.palette.primary.light},title:{flexGrow:1,textAlign:"left"},link:{margin:e.spacing(1,1.5),fontWeight:"bold",textTransform:"uppercase",color:e.palette.text.secondary}})}));function F(){var e=D(),t=Object(y.b)().isAuthenticated;return Object(p.jsx)(O.a,{className:e.appBar,position:"fixed",color:"default",children:Object(p.jsx)(_.a,{in:!0,timeout:600,children:Object(p.jsxs)(x.a,{children:[Object(p.jsx)(g.a,{variant:"h6",className:e.title,children:"PetBook"}),v.a.filter((function(e){return!e.authRequired||t})).map((function(t){return Object(p.jsx)(W.a,{component:o.c,className:e.link,to:t.to,children:t.title},t.title)})),Object(p.jsx)(R,{})]})})})}function M(){return Object(d.a)()?Object(p.jsx)(L,{}):Object(p.jsx)(F,{})}var E=n(162);var q=function(){return Object(p.jsx)(_.a,{in:!0,timeout:600,children:Object(p.jsxs)(E.a,{children:[Object(p.jsx)(g.a,{variant:"h3",component:"h1",children:"Page Not Found"}),Object(p.jsxs)(g.a,{variant:"body1",children:["Try navigating to ",Object(p.jsx)(o.b,{to:"/",children:"homepage"})]})]})})},G=n(57),Q=n(161),Y=Object(Q.b)({palette:{primary:{light:"#e8cdb8",main:"#875e3b",dark:"#4e2c1a"},secondary:{light:"#417565",main:"#13493b",dark:"#002115"},tertiary:{light:"#ffffff",main:"#faf5f1",dark:"#c7c2be"}},breakpoints:{values:{xs:0,sm:500,md:768,lg:1280,xl:1920}}}),$=Y.breakpoints,J=Object(G.a)(Object(G.a)({},Y),{},{overrides:{MuiTypography:{h1:Object(w.a)({fontSize:"3rem",lineHeight:1.2},$.down("sm"),{fontSize:"2.6rem"}),h2:Object(w.a)({fontSize:"2.6rem",lineHeight:1.2},$.down("sm"),{fontSize:"2.2rem"}),h3:Object(w.a)({fontSize:"2.2rem",lineHeight:1.2},$.down("sm"),{fontSize:"1.8rem"}),h4:Object(w.a)({fontSize:"1.8rem",lineHeight:1.2},$.down("sm"),{fontSize:"1.6rem"}),h5:Object(w.a)({fontSize:"1.8rem",lineHeight:1.2},$.down("sm"),{fontSize:"1.4rem"}),h6:Object(w.a)({fontSize:"1.6rem",lineHeight:1.2},$.down("sm"),{fontSize:"1.4rem"})},MuiListItemIcon:{root:{minWidth:"auto",marginTop:4,marginBottom:4}},MuiStepIcon:{root:{"&$completed":{fill:Y.palette.success.main},"&$active":{fill:Y.palette.secondary.main}}}},props:{MuiUseMediaQuery:{noSsr:!0}}}),V=n(194),X=["component"];function Z(e){var t=e.component,n=Object(V.a)(e,X);return t?Object(p.jsx)(l.a,Object(G.a)({component:Object(y.c)(t)},n)):null}var K=function(){var e=Object(l.g)();return Object(p.jsx)("div",{"data-testid":"location-display",children:e.pathname})},ee=Object(u.a)({root:{display:"flex",flexDirection:"column",minHeight:"100vh"}});function te(){var e=ee();return Object(p.jsxs)(j.a,{theme:J,children:[Object(p.jsx)(s.a,{}),Object(p.jsxs)("div",{className:e.root,children:[Object(p.jsx)(M,{}),Object(p.jsx)(i.a.Suspense,{fallback:Object(p.jsx)(b.a,{variant:"rect",height:"100vh"}),children:Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{exact:!0,path:"/about",component:i.a.lazy((function(){return n.e(15).then(n.bind(null,652))}))}),Object(p.jsx)(Z,{exact:!0,path:"/user-profile",component:i.a.lazy((function(){return n.e(14).then(n.bind(null,653))}))}),Object(p.jsx)(Z,{exact:!0,path:"/animal-list",component:i.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(9),n.e(13)]).then(n.bind(null,673))}))}),Object(p.jsx)(Z,{exact:!0,path:"/animal/new",component:i.a.lazy((function(){return Promise.all([n.e(1),n.e(6),n.e(12)]).then(n.bind(null,674))}))}),Object(p.jsx)(Z,{exact:!0,path:"/animal/:id",component:i.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(8),n.e(11)]).then(n.bind(null,675))}))}),Object(p.jsx)(l.a,{exact:!0,path:"/search",component:i.a.lazy((function(){return n.e(2).then(n.bind(null,669))}))}),Object(p.jsx)(l.a,{exact:!0,path:"/login",component:i.a.lazy((function(){return n.e(2).then(n.bind(null,669))}))}),Object(p.jsx)(l.a,{exact:!0,path:"/logout",component:i.a.lazy((function(){return n.e(2).then(n.bind(null,669))}))}),Object(p.jsx)(l.a,{exact:!0,path:"/",component:i.a.lazy((function(){return Promise.all([n.e(0),n.e(7),n.e(10)]).then(n.bind(null,676))}))}),Object(p.jsx)(l.a,{component:q})]})}),Object(p.jsx)(m,{})]}),Object(p.jsx)(K,{})]})}var ne=function(e){e&&e instanceof Function&&n.e(16).then(n.bind(null,670)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ae={GRAPHQL_URL:"https://petbook-back.herokuapp.com/graphql",AUTH0_DOMAIN:"pets-oss.eu.auth0.com",AUTH0_CLIENT_ID:"e42ezU7Z8Hxw4m0b24P2jrUUUmYrVPXA",AUTH0_AUDIENCE_URL:"https://pet-oss/api",PUBLIC_URL:""},ie=function(e){var t=e.children,n=Object(l.f)();return Object(p.jsx)(y.a,{domain:ae.AUTH0_DOMAIN,clientId:ae.AUTH0_CLIENT_ID,redirectUri:window.location.origin,audience:ae.AUTH0_AUDIENCE_URL,onRedirectCallback:function(e){n.push((null===e||void 0===e?void 0:e.returnTo)||window.location.pathname)},children:t})},re=n(148),ce=n.n(re),oe=n(172),le=n(337),se=n.n(le),ue=n(149),je=n(339),be=n(338),de=n(205),he=function(e){var t=e.children,n=Object(y.b)().getAccessTokenSilently,a=se()({uri:ae.GRAPHQL_URL}),i=Object(de.a)(Object(oe.a)(ce.a.mark((function e(){var t;return ce.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:return t=e.sent,e.abrupt("return",{headers:{Authorization:"Bearer ".concat(t)}});case 4:case"end":return e.stop()}}),e)})))),r=new ue.a({link:i.concat(a),cache:new je.a,connectToDevTools:!0});return Object(p.jsx)(be.a,{client:r,children:t})};c.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(o.a,{children:Object(p.jsx)(ie,{children:Object(p.jsx)(he,{children:Object(p.jsx)(te,{})})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),ne()},79:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(285),i=n(105),r=n.n(i);function c(){var e=r()();return Object(a.a)(e.breakpoints.down("sm"))}},84:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=[{authRequired:!1,title:"Home",to:"/",pageTitle:"Welcome"},{authRequired:!1,title:"About",to:"/about",pageTitle:"About this project"},{authRequired:!0,title:"Animals",to:"/animal-list",pageTitle:"Animal list"},{authRequired:!0,title:"Favourites",to:"/favourites",pageTitle:"Favourites"},{authRequired:!0,title:"Reports",to:"/reports",pageTitle:"Reports"}]}},[[282,4,5]]]);
//# sourceMappingURL=main.c3c953ff.chunk.js.map