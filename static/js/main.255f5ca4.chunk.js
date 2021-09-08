(this["webpackJsonppets-front"]=this["webpackJsonppets-front"]||[]).push([[6],{166:function(e,n,a){"use strict";a.d(n,"a",(function(){return u}));var i=a(31),t=(a(0),a(197)),r=a(304),l=a(141),s=a(173),o=a(76),d=a(83),c=a(4);function u(e){var n=e.title,a=e.topSection,i=e.children,s=e.displayTitleOnMobile,o=v(),u=Object(d.a)();return Object(c.jsx)(t.a,{in:!0,timeout:600,children:Object(c.jsx)(r.a,{component:"main",className:o.root,maxWidth:"lg",children:Object(c.jsxs)(l.a,{container:!0,spacing:4,children:[(!u||s)&&n&&Object(c.jsx)(l.a,{item:!0,xs:12,children:Object(c.jsx)(m,{title:n})}),a&&Object(c.jsx)(l.a,{item:!0,xs:12,children:a}),Object(c.jsx)(l.a,{item:!0,xs:12,className:o.content,children:i})]})})})}function m(e){var n=e.title,a=v();return"string"!==typeof n?Object(c.jsx)(c.Fragment,{children:"title"}):Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(o.a,{className:a.title,variant:"h3",component:"h1",children:n})})}var v=Object(s.a)((function(e){var n;return{root:(n={},Object(i.a)(n,e.breakpoints.down("md"),{marginTop:e.spacing(1)}),Object(i.a)(n,e.breakpoints.up("md"),{marginTop:64+e.spacing(3)}),Object(i.a)(n,"marginBottom",e.spacing(10)),n),heading:{marginBottom:e.spacing(2)},endAlign:{textAlign:"end"},title:{fontWeight:500},content:{display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column"}}}))},178:function(e,n,a){"use strict";a.d(n,"b",(function(){return O})),a.d(n,"c",(function(){return y}));var i=a(33),t=a.n(i),r=a(51),l=a(61),s=a(110),o=a(89),d=a(97),c={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetAnimalsList"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"first"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"after"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"last"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"before"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"isFavoriteOnly"}},type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"animals"},arguments:[{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"Variable",name:{kind:"Name",value:"first"}}},{kind:"Argument",name:{kind:"Name",value:"after"},value:{kind:"Variable",name:{kind:"Name",value:"after"}}},{kind:"Argument",name:{kind:"Name",value:"last"},value:{kind:"Variable",name:{kind:"Name",value:"last"}}},{kind:"Argument",name:{kind:"Name",value:"before"},value:{kind:"Variable",name:{kind:"Name",value:"before"}}},{kind:"Argument",name:{kind:"Name",value:"isFavoriteOnly"},value:{kind:"Variable",name:{kind:"Name",value:"isFavoriteOnly"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"edges"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"node"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"imageUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"modTime"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"details"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"gender"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"species"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"birthDate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"weight"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"species"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"cursor"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"pageInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hasNextPage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hasPreviousPage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"startCursor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"endCursor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"totalCount"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:963,source:{body:"query GetAnimalsList($first: Int, $after: String, $last: Int, $before: String, $isFavoriteOnly: Boolean) {\n    animals(first: $first, after: $after, last: $last, before: $before, isFavoriteOnly: $isFavoriteOnly) {\n        edges {\n            node {\n                id\n                name\n                imageUrl\n                status\n                modTime\n                details {\n                    gender {\n                        id\n                        value\n                    }\n                    species {\n                        id\n                        value\n                    }\n                    birthDate\n                    weight\n                    species {\n                        value\n                    }\n                }\n            }\n            cursor\n        }\n\n        pageInfo {\n            hasNextPage\n            hasPreviousPage\n            startCursor\n            endCursor\n            totalCount\n        }\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},u={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"AddToFavoriteAnimals"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"animalId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createFavoriteAnimal"},arguments:[{kind:"Argument",name:{kind:"Name",value:"animalId"},value:{kind:"Variable",name:{kind:"Name",value:"animalId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"animalId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"userId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"modTime"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:153,source:{body:"mutation AddToFavoriteAnimals($animalId: Int!) {\n    createFavoriteAnimal(animalId: $animalId) {\n        animalId\n        userId\n        modTime\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},m={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"RemoveFromFavoriteAnimals"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"animalId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"deleteFavoriteAnimal"},arguments:[{kind:"Argument",name:{kind:"Name",value:"animalId"},value:{kind:"Variable",name:{kind:"Name",value:"animalId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"animalId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"userId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"modTime"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:158,source:{body:"mutation RemoveFromFavoriteAnimals($animalId: Int!) {\n    deleteFavoriteAnimal(animalId: $animalId) {\n        animalId\n        userId\n        modTime\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},v=Object(o.b)({name:"animalsFav",initialState:{page:{ids:[],info:{hasNextPage:!1,hasPreviousPage:!1,totalCount:0,startCursor:"",endCursor:""}},isLoading:!1,error:!1,queryVars:{}},reducers:{startLoadingFav:function(e){e.isLoading=!0},hasErrorFav:function(e,n){e.error=n.payload,e.isLoading=!1},animalsSuccessFav:function(e,n){e.page.ids=n.payload.ids,e.page.info=n.payload.info,e.isLoading=!1},animalRemoveFav:function(e,n){var a=e.page.ids.indexOf(n.payload);e.page.ids=[].concat(Object(s.a)(e.page.ids.slice(0,a)),Object(s.a)(e.page.ids.slice(a+1)))},animalAddFav:function(e,n){e.page.ids=[].concat(Object(s.a)(e.page.ids),[n.payload])},lastQueryVarsFav:function(e,n){e.queryVars=n.payload}}});n.a=v.reducer;var k=v.actions,b=k.animalsSuccessFav,f=k.startLoadingFav,p=k.hasErrorFav,g=k.lastQueryVarsFav,j=k.animalRemoveFav,h=k.animalAddFav,O=function(e){return function(){var n=Object(l.a)(t.a.mark((function n(a,i,l){var s,o,d,u,m,v;return t.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s=l.apolloClient,a(f()),o=Object(r.a)({isFavoriteOnly:!0},e),n.prev=3,n.next=6,s.query({query:c,fetchPolicy:"no-cache",variables:o});case 6:d=n.sent,(u=d.data).animals&&(u.animals.edges&&(m=u.animals.edges.map((function(e){return e.node.id}))),u.animals.pageInfo&&(v=u.animals.pageInfo),a(b({ids:m,info:v})),a(g(o))),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(3),a(p(n.t0.message));case 14:case"end":return n.stop()}}),n,null,[[3,11]])})));return function(e,a,i){return n.apply(this,arguments)}}()},N=function(e){return function(){var n=Object(l.a)(t.a.mark((function n(a,i,r){var l;return t.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l=r.apolloClient,a(f()),n.prev=2,n.next=5,l.mutate({mutation:u,variables:{animalId:e}});case 5:n.sent&&(a(Object(d.d)("/favorites")),a(h(e))),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),a(p(n.t0.message));case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e,a,i){return n.apply(this,arguments)}}()},x=function(e){return function(){var n=Object(l.a)(t.a.mark((function n(a,i,r){var l;return t.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l=r.apolloClient,a(f()),n.prev=2,n.next=5,l.mutate({mutation:m,variables:{animalId:e}});case 5:n.sent&&(a(j(e)),a(Object(d.d)("/favorites"))),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(2),a(p(n.t0.message));case 12:case"end":return n.stop()}}),n,null,[[2,9]])})));return function(e,a,i){return n.apply(this,arguments)}}()},y=function(e){return function(){var n=Object(l.a)(t.a.mark((function n(a,i){var r,l,s;return t.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=i(),l=r.animalsFav,s=-1!==l.page.ids.indexOf(e),a(s?x(e):N(e));case 3:case"end":return n.stop()}}),n)})));return function(e,a){return n.apply(this,arguments)}}()}},190:function(e,n,a){"use strict";a.d(n,"a",(function(){return C})),a.d(n,"b",(function(){return L}));var i=a(109),t=a(51),r=a(0),l=a.n(r),s=a(21),o=a(53),d=a(300),c=a(297),u=a(302),m=a(174),v=a(238),k=a(195),b=a(298),f=a(299),p=a(194),g=a(173),j=a(228),h=a(301),O=a(76),N=a(296),x=a(209),y=a.n(x),F=a(208),S=a.n(F),A=a(210),I=a.n(A),w=a(88),T=a(4),C=64,V=Object(g.a)((function(e){return Object(j.a)({appBar:{top:"auto",bottom:0,height:C,backgroundColor:e.palette.primary.light},drawerHeader:Object(t.a)(Object(t.a)({display:"flex",alignItems:"center",padding:e.spacing(0,3)},e.mixins.toolbar),{},{justifyContent:"space-between"}),show:{transform:"translateY(0)",transition:"transform .5s"},hide:{transform:"translateY(-110%)",transition:"transform .5s"}})}));function D(e){var n=e.children,a=Object(N.a)();return Object(T.jsx)(p.a,{appear:!1,direction:"up",in:!a,children:n})}function L(){var e=V(),n=Object(s.f)(),a=Object(s.g)(),t=l.a.useState(!1),r=Object(i.a)(t,2),p=r[0],g=r[1],j=Object(o.b)().isAuthenticated,N=function(){g(!1)};return Object(T.jsx)(D,{children:Object(T.jsxs)(d.a,{className:e.appBar,position:"fixed",color:"default",children:[Object(T.jsx)(h.a,{children:Object(T.jsx)(m.a,{edge:"start",onClick:function(){g(!0)},color:"inherit","aria-label":"open drawer",children:Object(T.jsx)(I.a,{})})}),Object(T.jsx)(u.a,{anchor:"bottom",open:p,onClose:N,children:Object(T.jsxs)("div",{role:"presentation",children:[Object(T.jsxs)("div",{className:e.drawerHeader,children:[Object(T.jsx)(O.a,{variant:"h6",children:"PetBook"}),Object(T.jsx)(m.a,{edge:"end",onClick:N,children:Object(T.jsx)(S.a,{})})]}),Object(T.jsx)(c.a,{}),Object(T.jsx)(v.a,{children:w.a.filter((function(e){return!e.authRequired||j})).map((function(e){return Object(T.jsxs)(k.a,{button:!0,selected:(i=e.to,a.pathname===i),onClick:function(a){return function(e,a){n.push(a),g(!1)}(0,e.to)},children:[Object(T.jsx)(b.a,{children:Object(T.jsx)(y.a,{})}),Object(T.jsx)(f.a,{primary:e.title})]},e.title);var i}))})]})})]})})}},245:function(e,n,a){},255:function(e,n,a){},292:function(e,n,a){"use strict";a.r(n);a(245);var i=a(0),t=a.n(i),r=a(15),l=a.n(r),s=a(172),o=a(39),d=(a(255),a(21)),c=a(344),u=a(173),m=a(341),v=a(345),k=a(83),b=a(190),f=a(4);function p(){return Object(k.a)()?Object(f.jsx)(b.b,{}):Object(f.jsx)("div",{})}var g=a(300),j=a(228),h=a(301),O=a(76),N=a(88),x=a(31),y=a(109),F=a(53),S=a(316),A=a(174),I=a(323),w=a(343),T=a(160),C=a.n(T),V=a(295),D=a(114),L=a.n(D);function P(){var e=U(),n=Object(F.b)(),a=n.isAuthenticated,i=n.user,r=n.loginWithRedirect,l=n.logout,s=Object(d.f)(),o=t.a.useState(null),c=Object(y.a)(o,2),u=c[0],m=c[1],v=Boolean(u),k=function(){var e=L()();return Object(V.a)(e.breakpoints.down("xs"))}(),b=function(){m(null)};return Object(f.jsx)("div",{children:a?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(S.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){m(e.currentTarget)},color:"inherit",startIcon:Object(f.jsx)(C.a,{}),children:Object(f.jsx)(O.a,{component:"span",className:e.label,noWrap:!0,children:k?function(e){if(!e)return"";var n=e.split(" "),a="";return n.forEach((function(e){a+=e[0]})),a}(null===i||void 0===i?void 0:i.name):null===i||void 0===i?void 0:i.name})}),Object(f.jsxs)(I.a,{id:"menu-appbar",anchorEl:u,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:v,onClose:b,children:[Object(f.jsx)(w.a,{onClick:function(){s.push("/user-profile"),b()},children:"Profile"}),Object(f.jsx)(w.a,{onClick:function(){return l({returnTo:window.location.origin})},children:"Logout"})]})]}):Object(f.jsx)(A.a,{"aria-label":"login",edge:"end",onClick:function(){return r()},color:"inherit",children:Object(f.jsx)(C.a,{})})})}var U=Object(u.a)((function(e){return{label:Object(x.a)({fontSize:"inherit",fontWeight:"inherit"},e.breakpoints.down("sm"),{maxWidth:150})}})),z=Object(u.a)((function(){return Object(j.a)({appbar:{backgroundColor:"transparent"},toolbar:{justifyContent:"space-between"},title:{flexGrow:1}})}));function $(){var e=z(),n=Object(d.g)();return Object(f.jsx)(g.a,{className:e.appbar,position:"static",color:"default",elevation:0,children:Object(f.jsxs)(h.a,{className:e.toolbar,children:[Object(f.jsx)(O.a,{variant:"h6",className:e.title,noWrap:!0,children:function(){var e=N.a.filter((function(e){return e.to===n.pathname}));return 1===e.length?e[0].pageTitle:""}()}),Object(f.jsx)(P,{})]})})}var q=a(197),R=a(317),H=Object(u.a)((function(e){return Object(j.a)({appBar:{backgroundColor:e.palette.primary.light},title:{flexGrow:1,textAlign:"left"},link:{margin:e.spacing(1,1.5),fontWeight:"bold",textTransform:"uppercase",color:e.palette.text.secondary,"&.active":{color:e.palette.text.primary}}})}));function _(){var e=H(),n=Object(F.b)().isAuthenticated;return Object(f.jsx)(g.a,{className:e.appBar,position:"fixed",color:"default",children:Object(f.jsx)(q.a,{in:!0,timeout:600,children:Object(f.jsxs)(h.a,{children:[Object(f.jsx)(O.a,{variant:"h6",className:e.title,children:"PetBook"}),N.a.filter((function(e){return!e.authRequired||n})).map((function(n){return Object(f.jsx)(R.a,{component:o.c,className:e.link,to:n.to,exact:!0,children:n.title},n.title)})),Object(f.jsx)(P,{})]})})})}function B(){return Object(k.a)()?Object(f.jsx)($,{}):Object(f.jsx)(_,{})}var E=a(166);var G=function(){return Object(f.jsx)(q.a,{in:!0,timeout:600,children:Object(f.jsxs)(E.a,{children:[Object(f.jsx)(O.a,{variant:"h3",component:"h1",children:"Page Not Found"}),Object(f.jsxs)(O.a,{variant:"body1",children:["Try navigating to ",Object(f.jsx)(o.b,{to:"/",children:"homepage"})]})]})})},Q=a(51),W=a(167),M=Object(W.b)({palette:{primary:{light:"#e8cdb8",main:"#875e3b",dark:"#4e2c1a"},secondary:{light:"#417565",main:"#13493b",dark:"#002115"},tertiary:{light:"#ffffff",main:"#faf5f1",dark:"#c7c2be"}},breakpoints:{values:{xs:0,sm:500,md:768,lg:1280,xl:1920}}}),Y=M.breakpoints,J=Object(Q.a)(Object(Q.a)({},M),{},{overrides:{MuiTypography:{h1:Object(x.a)({fontSize:"3rem",lineHeight:1.2},Y.down("sm"),{fontSize:"2.6rem"}),h2:Object(x.a)({fontSize:"2.6rem",lineHeight:1.2},Y.down("sm"),{fontSize:"2.2rem"}),h3:Object(x.a)({fontSize:"2.2rem",lineHeight:1.2},Y.down("sm"),{fontSize:"1.8rem"}),h4:Object(x.a)({fontSize:"1.8rem",lineHeight:1.2},Y.down("sm"),{fontSize:"1.6rem"}),h5:Object(x.a)({fontSize:"1.8rem",lineHeight:1.2},Y.down("sm"),{fontSize:"1.4rem"}),h6:Object(x.a)({fontSize:"1.6rem",lineHeight:1.2},Y.down("sm"),{fontSize:"1.4rem"})},MuiListItemIcon:{root:{minWidth:"auto",marginTop:4,marginBottom:4}},MuiStepIcon:{root:{"&$completed":{fill:M.palette.success.main},"&$active":{fill:M.palette.secondary.main}}}},props:{MuiUseMediaQuery:{noSsr:!0}}}),X=a(201),Z=["component"];function K(e){var n=e.component,a=Object(X.a)(e,Z);return n?Object(f.jsx)(d.a,Object(Q.a)({component:Object(F.c)(n)},a)):null}var ee=function(){var e=Object(d.g)();return Object(f.jsx)("div",{"data-testid":"location-display",children:e.pathname})},ne=Object(u.a)({root:{display:"flex",flexDirection:"column",minHeight:"100vh"}});function ae(){var e=ne();return Object(f.jsxs)(m.a,{theme:J,children:[Object(f.jsx)(c.a,{}),Object(f.jsxs)("div",{className:e.root,children:[Object(f.jsx)(B,{}),Object(f.jsx)(t.a.Suspense,{fallback:Object(f.jsx)(v.a,{variant:"rect",height:"100vh",width:"100%"}),children:Object(f.jsxs)(d.c,{children:[Object(f.jsx)(d.a,{exact:!0,path:"/about",component:t.a.lazy((function(){return a.e(17).then(a.bind(null,661))}))}),Object(f.jsx)(K,{exact:!0,path:"/user-profile",component:t.a.lazy((function(){return a.e(16).then(a.bind(null,662))}))}),Object(f.jsx)(K,{exact:!0,path:"/animal-list",component:t.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(4),a.e(12)]).then(a.bind(null,685))}))}),Object(f.jsx)(K,{exact:!0,path:"/animal/new",component:t.a.lazy((function(){return Promise.all([a.e(1),a.e(2),a.e(5),a.e(9),a.e(15)]).then(a.bind(null,684))}))}),Object(f.jsx)(K,{exact:!0,path:"/animal/:id",component:t.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(2),a.e(5),a.e(11)]).then(a.bind(null,682))}))}),Object(f.jsx)(K,{exact:!0,path:"/favorites/",component:t.a.lazy((function(){return Promise.all([a.e(0),a.e(1),a.e(4),a.e(14)]).then(a.bind(null,678))}))}),Object(f.jsx)(d.a,{exact:!0,path:"/search",component:t.a.lazy((function(){return a.e(3).then(a.bind(null,679))}))}),Object(f.jsx)(d.a,{exact:!0,path:"/login",component:t.a.lazy((function(){return a.e(3).then(a.bind(null,679))}))}),Object(f.jsx)(d.a,{exact:!0,path:"/logout",component:t.a.lazy((function(){return a.e(3).then(a.bind(null,679))}))}),Object(f.jsx)(d.a,{exact:!0,path:"/",component:t.a.lazy((function(){return Promise.all([a.e(0),a.e(10),a.e(13)]).then(a.bind(null,686))}))}),Object(f.jsx)(d.a,{component:G})]})}),Object(f.jsx)(p,{})]}),Object(f.jsx)(ee,{})]})}var ie=function(e){e&&e instanceof Function&&a.e(18).then(a.bind(null,680)).then((function(n){var a=n.getCLS,i=n.getFID,t=n.getFCP,r=n.getLCP,l=n.getTTFB;a(e),i(e),t(e),r(e),l(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var te=a(42),re=a(89),le=a(33),se=a.n(le),oe=a(61),de=a(346),ce=a.n(de),ue=a(157),me=a(348),ve=a(215),ke=a(211),be={GRAPHQL_URL:"https://petbook-back.herokuapp.com/graphql",AUTH0_DOMAIN:"pets-oss.eu.auth0.com",AUTH0_CLIENT_ID:"e42ezU7Z8Hxw4m0b24P2jrUUUmYrVPXA",AUTH0_AUDIENCE_URL:"https://pet-oss/api",PUBLIC_URL:""},fe=new ke.a({domain:be.AUTH0_DOMAIN,client_id:be.AUTH0_CLIENT_ID,redirect_uri:window.location.origin,audience:be.AUTH0_AUDIENCE_URL}),pe=ce()({uri:be.GRAPHQL_URL}),ge=Object(ve.a)(Object(oe.a)(se.a.mark((function e(){var n;return se.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fe.getTokenSilently();case 2:return n=e.sent,e.abrupt("return",{headers:{Authorization:"Bearer ".concat(n)}});case 4:case"end":return e.stop()}}),e)})))),je=new ue.a({link:ge.concat(pe),cache:new me.a({typePolicies:{Query:{fields:{animals:{keyArgs:[],merge:function(e,n){return n}}}}}}),connectToDevTools:!0}),he=a(97),Oe=a(178),Ne=Object(te.b)({animalsAll:he.a,animalsFav:Oe.a}),xe=Object(re.a)({reducer:Ne,middleware:function(e){return e({thunk:{extraArgument:{apolloClient:je}},serializableCheck:!1})}}),ye=function(e){var n=e.children,a=Object(d.f)();return Object(f.jsx)(F.a,{domain:be.AUTH0_DOMAIN,clientId:be.AUTH0_CLIENT_ID,redirectUri:window.location.origin,audience:be.AUTH0_AUDIENCE_URL,onRedirectCallback:function(e){a.push((null===e||void 0===e?void 0:e.returnTo)||window.location.pathname)},children:n})},Fe=a(347),Se=function(e){var n=e.children;return Object(f.jsx)(Fe.a,{client:je,children:n})};l.a.render(Object(f.jsx)(t.a.StrictMode,{children:Object(f.jsx)(o.a,{children:Object(f.jsx)(ye,{children:Object(f.jsx)(Se,{children:Object(f.jsx)(s.a,{store:xe,children:Object(f.jsx)(ae,{})})})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),ie()},83:function(e,n,a){"use strict";a.d(n,"a",(function(){return l}));var i=a(295),t=a(114),r=a.n(t);function l(){var e=r()();return Object(i.a)(e.breakpoints.down("sm"))}},88:function(e,n,a){"use strict";a.d(n,"a",(function(){return i}));var i=[{authRequired:!1,title:"Home",to:"/",pageTitle:"Welcome"},{authRequired:!1,title:"About",to:"/about",pageTitle:"About this project"},{authRequired:!0,title:"Animals",to:"/animal-list",pageTitle:"Animal list"},{authRequired:!0,title:"Favorites",to:"/favorites",pageTitle:"Favorites"},{authRequired:!0,title:"Reports",to:"/reports",pageTitle:"Reports"}]},97:function(e,n,a){"use strict";a.d(n,"c",(function(){return b})),a.d(n,"d",(function(){return f})),a.d(n,"b",(function(){return p}));var i=a(33),t=a.n(i),r=a(61),l=a(89),s={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetAnimalsList"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"first"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"after"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"last"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"before"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"isFavoriteOnly"}},type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"animals"},arguments:[{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"Variable",name:{kind:"Name",value:"first"}}},{kind:"Argument",name:{kind:"Name",value:"after"},value:{kind:"Variable",name:{kind:"Name",value:"after"}}},{kind:"Argument",name:{kind:"Name",value:"last"},value:{kind:"Variable",name:{kind:"Name",value:"last"}}},{kind:"Argument",name:{kind:"Name",value:"before"},value:{kind:"Variable",name:{kind:"Name",value:"before"}}},{kind:"Argument",name:{kind:"Name",value:"isFavoriteOnly"},value:{kind:"Variable",name:{kind:"Name",value:"isFavoriteOnly"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"edges"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"node"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"imageUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"modTime"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"details"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"gender"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"species"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"birthDate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"weight"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"species"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"cursor"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"pageInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hasNextPage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hasPreviousPage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"startCursor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"endCursor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"totalCount"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:963,source:{body:"query GetAnimalsList($first: Int, $after: String, $last: Int, $before: String, $isFavoriteOnly: Boolean) {\n    animals(first: $first, after: $after, last: $last, before: $before, isFavoriteOnly: $isFavoriteOnly) {\n        edges {\n            node {\n                id\n                name\n                imageUrl\n                status\n                modTime\n                details {\n                    gender {\n                        id\n                        value\n                    }\n                    species {\n                        id\n                        value\n                    }\n                    birthDate\n                    weight\n                    species {\n                        value\n                    }\n                }\n            }\n            cursor\n        }\n\n        pageInfo {\n            hasNextPage\n            hasPreviousPage\n            startCursor\n            endCursor\n            totalCount\n        }\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},o=Object(l.b)({name:"animalsAll",initialState:{page:{ids:[],objs:[],info:{hasNextPage:!1,hasPreviousPage:!1,totalCount:0,startCursor:"",endCursor:""}},isLoading:!1,error:!1,queryVars:{},pageContext:""},reducers:{startLoadingAll:function(e){e.isLoading=!0},stopLoadingAll:function(e){e.isLoading=!1},hasErrorAll:function(e,n){e.error=n.payload,e.isLoading=!1},animalsSuccessAll:function(e,n){e.page.ids=n.payload.ids,e.page.objs=n.payload.objs,e.page.info=n.payload.info,e.isLoading=!1},lastQueryVarsAll:function(e,n){e.queryVars=n.payload},animalsContextAll:function(e,n){e.pageContext=n.payload}}});n.a=o.reducer;var d=o.actions,c=d.animalsSuccessAll,u=d.startLoadingAll,m=d.hasErrorAll,v=d.lastQueryVarsAll,k=d.animalsContextAll,b=function(e,n){return function(a,i){var t=i().animalsAll.pageContext;n!==t&&(a(u()),a(p(e))),a(k(n))}},f=function(e){return function(n,a){var i=a().animalsAll,t=i.queryVars,r=i.pageContext;e===r&&n(p(t))}},p=function(e){return function(){var n=Object(r.a)(t.a.mark((function n(a,i,r){var l,o,d,u,k,b;return t.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l=r.apolloClient,n.prev=1,n.next=4,l.query({query:s,fetchPolicy:"no-cache",variables:e});case 4:o=n.sent,(d=o.data).animals&&(d.animals.edges&&(u=d.animals.edges.map((function(e){return e.node.id})),k=d.animals.edges.map((function(e){return e.node}))),d.animals.pageInfo&&(b=d.animals.pageInfo),a(c({ids:u,objs:k,info:b})),a(v(e))),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),a(m(n.t0.message));case 12:case"end":return n.stop()}}),n,null,[[1,9]])})));return function(e,a,i){return n.apply(this,arguments)}}()}}},[[292,7,8]]]);
//# sourceMappingURL=main.255f5ca4.chunk.js.map