(this["webpackJsonppets-front"]=this["webpackJsonppets-front"]||[]).push([[3],{138:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var a=n(27),i=(n(0),n(162)),r=n(265),c=n(119),o=n(159),l=n(61),s=n(68),u=n(4);function j(e){var t=e.title,n=e.topSection,a=e.children,o=e.displayTitleOnMobile,l=d(),j=Object(s.a)();return Object(u.jsx)(i.a,{in:!0,timeout:600,children:Object(u.jsx)(r.a,{component:"main",className:l.root,maxWidth:"lg",children:Object(u.jsxs)(c.a,{container:!0,spacing:4,children:[(!j||o)&&Object(u.jsx)(c.a,{item:!0,xs:12,children:t&&Object(u.jsx)(b,{title:t})}),n&&Object(u.jsx)(c.a,{item:!0,xs:12,children:n}),Object(u.jsx)(c.a,{item:!0,xs:12,className:l.content,children:a})]})})})}function b(e){var t=e.title,n=d();return"string"!==typeof t?Object(u.jsx)(u.Fragment,{children:"title"}):Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(l.a,{className:n.title,variant:"h3",component:"h1",children:t})})}var d=Object(o.a)((function(e){var t;return{root:(t={},Object(a.a)(t,e.breakpoints.down("md"),{marginTop:e.spacing(1)}),Object(a.a)(t,e.breakpoints.up("md"),{marginTop:64+e.spacing(3)}),Object(a.a)(t,"marginBottom",e.spacing(10)),t),heading:{marginBottom:e.spacing(2)},endAlign:{textAlign:"end"},title:{fontWeight:500},content:{display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column"}}}))},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return N})),n.d(t,"b",(function(){return R}));var a=n(91),i=n(52),r=n(0),c=n.n(r),o=n(19),l=n(37),s=n(261),u=n(257),j=n(263),b=n(161),d=n(258),h=n(191),p=n(259),m=n(260),O=n(160),f=n(159),x=n(202),g=n(262),v=n(61),k=n(256),w=n(182),y=n.n(w),T=n(181),A=n.n(T),z=n(183),C=n.n(z),S=n(73),H=n(4),N=64,U=Object(f.a)((function(e){return Object(x.a)({appBar:{top:"auto",bottom:0,height:N,backgroundColor:e.palette.primary.light},drawerHeader:Object(i.a)(Object(i.a)({display:"flex",alignItems:"center",padding:e.spacing(0,3)},e.mixins.toolbar),{},{justifyContent:"space-between"}),show:{transform:"translateY(0)",transition:"transform .5s"},hide:{transform:"translateY(-110%)",transition:"transform .5s"}})}));function I(e){var t=e.children,n=Object(k.a)();return Object(H.jsx)(O.a,{appear:!1,direction:"up",in:!n,children:t})}function R(){var e=U(),t=Object(o.f)(),n=Object(o.g)(),i=c.a.useState(!1),r=Object(a.a)(i,2),O=r[0],f=r[1],x=Object(l.b)().isAuthenticated,k=function(){f(!1)};return Object(H.jsx)(I,{children:Object(H.jsxs)(s.a,{className:e.appBar,position:"fixed",color:"default",children:[Object(H.jsx)(g.a,{children:Object(H.jsx)(b.a,{edge:"start",onClick:function(){f(!0)},color:"inherit","aria-label":"open drawer",children:Object(H.jsx)(C.a,{})})}),Object(H.jsx)(j.a,{anchor:"bottom",open:O,onClose:k,children:Object(H.jsxs)("div",{role:"presentation",children:[Object(H.jsxs)("div",{className:e.drawerHeader,children:[Object(H.jsx)(v.a,{variant:"h6",children:"PetBook"}),Object(H.jsx)(b.a,{edge:"end",onClick:k,children:Object(H.jsx)(A.a,{})})]}),Object(H.jsx)(u.a,{}),Object(H.jsx)(d.a,{children:S.a.filter((function(e){return!e.authRequired||x})).map((function(e){return Object(H.jsxs)(h.a,{button:!0,selected:(a=e.to,n.pathname===a),onClick:function(n){return function(e,n){t.push(n),f(!1)}(0,e.to)},children:[Object(H.jsx)(p.a,{children:Object(H.jsx)(y.a,{})}),Object(H.jsx)(m.a,{primary:e.title})]},e.title);var a}))})]})})]})})}},206:function(e,t,n){},211:function(e,t,n){},252:function(e,t,n){"use strict";n.r(t);n(206);var a=n(0),i=n.n(a),r=n(17),c=n.n(r),o=n(36),l=(n(211),n(19)),s=n(299),u=n(159),j=n(294),b=n(300),d=n(68),h=n(158),p=n(4);function m(){return Object(d.a)()?Object(p.jsx)(h.b,{}):Object(p.jsx)("div",{})}var O=n(261),f=n(202),x=n(262),g=n(61),v=n(73),k=n(27),w=n(91),y=n(37),T=n(296),A=n(161),z=n(275),C=n(297),S=n(134),H=n.n(S),N=n(255),U=n(95),I=n.n(U);function R(){var e=P(),t=Object(y.b)(),n=t.isAuthenticated,a=t.user,r=t.loginWithRedirect,c=t.logout,o=Object(l.f)(),s=i.a.useState(null),u=Object(w.a)(s,2),j=u[0],b=u[1],d=Boolean(j),h=function(){var e=I()();return Object(N.a)(e.breakpoints.down("xs"))}(),m=function(){b(null)};return Object(p.jsx)("div",{children:n?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(T.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){b(e.currentTarget)},color:"inherit",startIcon:Object(p.jsx)(H.a,{}),children:Object(p.jsx)(g.a,{component:"span",className:e.label,noWrap:!0,children:h?function(e){if(!e)return"";var t=e.split(" "),n="";return t.forEach((function(e){n+=e[0]})),n}(null===a||void 0===a?void 0:a.name):null===a||void 0===a?void 0:a.name})}),Object(p.jsxs)(z.a,{id:"menu-appbar",anchorEl:j,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:d,onClose:m,children:[Object(p.jsx)(C.a,{onClick:function(){o.push("/user-profile"),m()},children:"Profile"}),Object(p.jsx)(C.a,{onClick:function(){return c({returnTo:window.location.origin})},children:"Logout"})]})]}):Object(p.jsx)(A.a,{"aria-label":"login",edge:"end",onClick:function(){return r()},color:"inherit",children:Object(p.jsx)(H.a,{})})})}var P=Object(u.a)((function(e){return{label:Object(k.a)({fontSize:"inherit",fontWeight:"inherit"},e.breakpoints.down("sm"),{maxWidth:150})}})),B=Object(u.a)((function(){return Object(f.a)({appbar:{backgroundColor:"transparent"},toolbar:{justifyContent:"space-between"},title:{flexGrow:1}})}));function L(){var e=B(),t=Object(l.g)();return Object(p.jsx)(O.a,{className:e.appbar,position:"static",color:"default",elevation:0,children:Object(p.jsxs)(x.a,{className:e.toolbar,children:[Object(p.jsx)(g.a,{variant:"h6",className:e.title,noWrap:!0,children:function(){var e=v.a.filter((function(e){return e.to===t.pathname}));return 1===e.length?e[0].pageTitle:""}()}),Object(p.jsx)(R,{})]})})}var _=n(162),W=n(298),M=Object(u.a)((function(e){return Object(f.a)({appBar:{backgroundColor:e.palette.primary.light},title:{flexGrow:1,textAlign:"left"},link:{margin:e.spacing(1,1.5),fontWeight:"bold",textTransform:"uppercase",color:e.palette.text.secondary}})}));function D(){var e=M(),t=Object(y.b)().isAuthenticated;return Object(p.jsx)(O.a,{className:e.appBar,position:"fixed",color:"default",children:Object(p.jsx)(_.a,{in:!0,timeout:600,children:Object(p.jsxs)(x.a,{children:[Object(p.jsx)(g.a,{variant:"h6",className:e.title,children:"PetBook"}),v.a.filter((function(e){return!e.authRequired||t})).map((function(t){return Object(p.jsx)(W.a,{component:o.c,className:e.link,to:t.to,children:t.title},t.title)})),Object(p.jsx)(R,{})]})})})}function F(){return Object(d.a)()?Object(p.jsx)(L,{}):Object(p.jsx)(D,{})}var E=n(138);var q=function(){return Object(p.jsx)(_.a,{in:!0,timeout:600,children:Object(p.jsxs)(E.a,{children:[Object(p.jsx)(g.a,{variant:"h3",component:"h1",children:"Page Not Found"}),Object(p.jsxs)(g.a,{variant:"body1",children:["Try navigating to ",Object(p.jsx)(o.b,{to:"/",children:"homepage"})]})]})})},G=n(52),Q=n(144),Y=Object(Q.a)({palette:{primary:{light:"#e8cdb8",main:"#875e3b",dark:"#4e2c1a"},secondary:{light:"#417565",main:"#13493b",dark:"#002115"},tertiary:{light:"#ffffff",main:"#faf5f1",dark:"#c7c2be"}},breakpoints:{values:{xs:0,sm:500,md:768,lg:1280,xl:1920}}}),$=Y.breakpoints,J=Object(G.a)(Object(G.a)({},Y),{},{overrides:{MuiTypography:{h1:Object(k.a)({fontSize:"3rem",lineHeight:1.2},$.down("sm"),{fontSize:"2.6rem"}),h2:Object(k.a)({fontSize:"2.6rem",lineHeight:1.2},$.down("sm"),{fontSize:"2.2rem"}),h3:Object(k.a)({fontSize:"2.2rem",lineHeight:1.2},$.down("sm"),{fontSize:"1.8rem"}),h4:Object(k.a)({fontSize:"1.8rem",lineHeight:1.2},$.down("sm"),{fontSize:"1.6rem"}),h5:Object(k.a)({fontSize:"1.8rem",lineHeight:1.2},$.down("sm"),{fontSize:"1.4rem"}),h6:Object(k.a)({fontSize:"1.6rem",lineHeight:1.2},$.down("sm"),{fontSize:"1.4rem"})},MuiListItemIcon:{root:{minWidth:"auto",marginTop:4,marginBottom:4}},MuiStepIcon:{root:{"&$completed":{fill:Y.palette.success.main},"&$active":{fill:Y.palette.secondary.main}}}},props:{MuiUseMediaQuery:{noSsr:!0}}}),V=n(176);function X(e){var t=e.component,n=Object(V.a)(e,["component"]);return t?Object(p.jsx)(l.a,Object(G.a)({component:Object(y.c)(t)},n)):null}var Z=function(){var e=Object(l.g)();return Object(p.jsx)("div",{"data-testid":"location-display",children:e.pathname})},K=Object(u.a)({root:{display:"flex",flexDirection:"column",minHeight:"100vh"}});function ee(){var e=K();return Object(p.jsxs)(j.a,{theme:J,children:[Object(p.jsx)(s.a,{}),Object(p.jsxs)("div",{className:e.root,children:[Object(p.jsx)(F,{}),Object(p.jsx)(i.a.Suspense,{fallback:Object(p.jsx)(b.a,{variant:"rect",height:"100vh"}),children:Object(p.jsxs)(l.c,{children:[Object(p.jsx)(l.a,{exact:!0,path:"/about",component:i.a.lazy((function(){return n.e(14).then(n.bind(null,410))}))}),Object(p.jsx)(X,{exact:!0,path:"/user-profile",component:i.a.lazy((function(){return n.e(15).then(n.bind(null,411))}))}),Object(p.jsx)(X,{exact:!0,path:"/animal-list",component:i.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(7),n.e(13)]).then(n.bind(null,433))}))}),Object(p.jsx)(X,{exact:!0,path:"/animal/new",component:i.a.lazy((function(){return Promise.all([n.e(1),n.e(8),n.e(12)]).then(n.bind(null,434))}))}),Object(p.jsx)(X,{exact:!0,path:"/animal/:id",component:i.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(9),n.e(11)]).then(n.bind(null,435))}))}),Object(p.jsx)(l.a,{exact:!0,path:"/search",component:i.a.lazy((function(){return n.e(2).then(n.bind(null,429))}))}),Object(p.jsx)(l.a,{exact:!0,path:"/login",component:i.a.lazy((function(){return n.e(2).then(n.bind(null,429))}))}),Object(p.jsx)(l.a,{exact:!0,path:"/logout",component:i.a.lazy((function(){return n.e(2).then(n.bind(null,429))}))}),Object(p.jsx)(l.a,{exact:!0,path:"/",component:i.a.lazy((function(){return Promise.all([n.e(0),n.e(6),n.e(10)]).then(n.bind(null,436))}))}),Object(p.jsx)(l.a,{component:q})]})}),Object(p.jsx)(m,{})]}),Object(p.jsx)(Z,{})]})}var te=function(e){e&&e instanceof Function&&n.e(16).then(n.bind(null,430)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),r(e),c(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ne={GRAPHQL_URL:"https://petbook-back.herokuapp.com/graphql",AUTH0_DOMAIN:"pets-oss.eu.auth0.com",AUTH0_CLIENT_ID:"e42ezU7Z8Hxw4m0b24P2jrUUUmYrVPXA",AUTH0_AUDIENCE_URL:"https://pet-oss/api",PUBLIC_URL:""},ae=function(e){var t=e.children,n=Object(l.f)();return Object(p.jsx)(y.a,{domain:ne.AUTH0_DOMAIN,clientId:ne.AUTH0_CLIENT_ID,redirectUri:window.location.origin,audience:ne.AUTH0_AUDIENCE_URL,onRedirectCallback:function(e){n.push((null===e||void 0===e?void 0:e.returnTo)||window.location.pathname)},children:t})},ie=n(130),re=n.n(ie),ce=n(163),oe=n(77),le=n(184),se=function(e){var t=e.children,n=Object(y.b)().getAccessTokenSilently,a=Object(oe.createHttpLink)({uri:ne.GRAPHQL_URL}),i=Object(le.a)(Object(ce.a)(re.a.mark((function e(){var t;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n();case 2:return t=e.sent,e.abrupt("return",{headers:{Authorization:"Bearer ".concat(t)}});case 4:case"end":return e.stop()}}),e)})))),r=new oe.ApolloClient({link:i.concat(a),cache:new oe.InMemoryCache,connectToDevTools:!0});return Object(p.jsx)(oe.ApolloProvider,{client:r,children:t})};c.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(o.a,{children:Object(p.jsx)(ae,{children:Object(p.jsx)(se,{children:Object(p.jsx)(ee,{})})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),te()},68:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(255),i=n(95),r=n.n(i);function c(){var e=r()();return Object(a.a)(e.breakpoints.down("sm"))}},73:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a=[{authRequired:!1,title:"Home",to:"/",pageTitle:"Welcome"},{authRequired:!1,title:"About",to:"/about",pageTitle:"About this project"},{authRequired:!0,title:"Animals",to:"/animal-list",pageTitle:"Animal list"},{authRequired:!0,title:"Favourites",to:"/favourites",pageTitle:"Favourites"},{authRequired:!0,title:"Reports",to:"/reports",pageTitle:"Reports"}]}},[[252,4,5]]]);
//# sourceMappingURL=main.c4c69a1f.chunk.js.map