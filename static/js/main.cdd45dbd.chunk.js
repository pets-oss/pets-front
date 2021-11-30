(this["webpackJsonppets-front"]=this["webpackJsonppets-front"]||[]).push([[4],{101:function(e,n,t){"use strict";t.d(n,"d",(function(){return r})),t.d(n,"b",(function(){return l})),t.d(n,"c",(function(){return o}));var i=t(114),a=t(32),r=Object(a.b)("filters/setFilters"),c={},d=Object(a.d)({name:"filters",initialState:c,reducers:{},extraReducers:function(e){e.addCase(r,(function(e,n){return n.payload}))}}),l=function(e){return function(n,t){var i=t().filters,a=Object.assign({},i);delete a[e],n(r(a))}},o=function(){return function(e){e(r(c))}};Object(i.a)(d.actions),n.a=d.reducer},146:function(e,n,t){"use strict";t.d(n,"b",(function(){return u})),t.d(n,"c",(function(){return m}));var i=t(95),a=t(43),r=t(32),c=t(150),d=t(101),l=t(151),o=Object(a.b)({animals:c.b,filters:d.a,queryArgs:l.a}),s=Object(r.a)({reducer:o});n.a=s;var u=function(){return Object(i.b)()},m=i.c},148:function(e,n,t){"use strict";t.d(n,"a",(function(){return v}));var i=t(6),a=(t(0),t(8)),r=t(250),c=t(123),d=t(86),l=t(75),o=t(1),s="Page",u={heading:"".concat(s,"-heading"),endAlign:"".concat(s,"-endAlign"),title:"".concat(s,"-title"),content:"".concat(s,"-content")},m=Object(a.a)("main")((function(e){var n,t=e.theme;return n={paddingTop:0},Object(i.a)(n,t.breakpoints.up("sm"),{paddingTop:96}),Object(i.a)(n,"& .".concat(u.heading),{marginBottom:t.spacing(2)}),Object(i.a)(n,"& .".concat(u.endAlign),{textAlign:"end"}),Object(i.a)(n,"& .".concat(u.title),{fontWeight:500}),Object(i.a)(n,"& .".concat(u.content),{display:"flex",justifyContent:"center",alignItems:"flex-start",flexDirection:"column"}),n}));function v(e){var n=e.title,t=e.topSection,i=e.children,a=e.displayTitleOnMobile,d=Object(l.a)();return Object(o.jsx)(m,{children:Object(o.jsx)(r.a,{maxWidth:"lg",children:Object(o.jsxs)(c.a,{container:!0,spacing:4,children:[(!d||a)&&n&&Object(o.jsx)(c.a,{item:!0,xs:12,children:Object(o.jsx)(b,{title:n})}),t&&Object(o.jsx)(c.a,{item:!0,xs:12,children:t}),Object(o.jsx)(c.a,{item:!0,xs:12,className:u.content,children:i})]})})})}function b(e){var n=e.title;return"string"!==typeof n?Object(o.jsx)(o.Fragment,{children:"title"}):Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(d.a,{className:u.title,variant:"h3",component:"h1",children:n})})}},150:function(e,n,t){"use strict";t.d(n,"c",(function(){return N})),t.d(n,"a",(function(){return S})),t.d(n,"d",(function(){return A}));var i=t(114),a=t(38),r=t.n(a),c=t(24),d=t(63),l=t(32),o=t(287),s=t.n(o),u=t(131),m=t(290),v=t(117),b=t(176),p=t(50),j=new b.a({domain:p.a.AUTH0_DOMAIN,client_id:p.a.AUTH0_CLIENT_ID,redirect_uri:window.location.origin,audience:p.a.AUTH0_AUDIENCE_URL}),f=s()({uri:p.a.GRAPHQL_URL}),k=Object(v.a)(Object(d.a)(r.a.mark((function e(){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.getTokenSilently();case 3:return n=e.sent,e.abrupt("return",{headers:{Authorization:"Bearer ".concat(n)}});case 7:e.prev=7,e.t0=e.catch(0),console.error("auth0.getTokenSilently error",e.t0);case 10:return e.abrupt("return",{});case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))),h=new u.a({link:k.concat(f),cache:new m.a({typePolicies:{Query:{fields:{animals:{keyArgs:[],merge:function(e,n){return n}}}}}}),connectToDevTools:!0}),g={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetAnimalsList"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"first"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"after"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"last"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"before"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"isFavoriteOnly"}},type:{kind:"NamedType",name:{kind:"Name",value:"Boolean"}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"species"}},type:{kind:"ListType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"breed"}},type:{kind:"ListType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"gender"}},type:{kind:"ListType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"animals"},arguments:[{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"Variable",name:{kind:"Name",value:"first"}}},{kind:"Argument",name:{kind:"Name",value:"after"},value:{kind:"Variable",name:{kind:"Name",value:"after"}}},{kind:"Argument",name:{kind:"Name",value:"last"},value:{kind:"Variable",name:{kind:"Name",value:"last"}}},{kind:"Argument",name:{kind:"Name",value:"before"},value:{kind:"Variable",name:{kind:"Name",value:"before"}}},{kind:"Argument",name:{kind:"Name",value:"isFavoriteOnly"},value:{kind:"Variable",name:{kind:"Name",value:"isFavoriteOnly"}}},{kind:"Argument",name:{kind:"Name",value:"species"},value:{kind:"Variable",name:{kind:"Name",value:"species"}}},{kind:"Argument",name:{kind:"Name",value:"breed"},value:{kind:"Variable",name:{kind:"Name",value:"breed"}}},{kind:"Argument",name:{kind:"Name",value:"gender"},value:{kind:"Variable",name:{kind:"Name",value:"gender"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"edges"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"node"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"imageUrl"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"status"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"modTime"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"isFavorite"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"details"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"gender"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"species"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"birthDate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"weight"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"species"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}}]}},{kind:"Field",name:{kind:"Name",value:"cursor"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"pageInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"hasNextPage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"hasPreviousPage"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"startCursor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"endCursor"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"totalCount"},arguments:[],directives:[]}]}}]}}]}}],loc:{start:0,end:1179,source:{body:"query GetAnimalsList(\n    $first: Int\n    $after: String\n    $last: Int\n    $before: String\n    $isFavoriteOnly: Boolean\n    $species: [Int]\n    $breed: [Int]\n    $gender: [Int]\n) {\n    animals(\n        first: $first\n        after: $after\n        last: $last\n        before: $before\n        isFavoriteOnly: $isFavoriteOnly\n        species: $species\n        breed: $breed\n        gender: $gender\n    ) {\n        edges {\n            node {\n                id\n                name\n                imageUrl\n                status\n                modTime\n                isFavorite\n                details {\n                    gender {\n                        id\n                        value\n                    }\n                    species {\n                        id\n                        value\n                    }\n                    birthDate\n                    weight\n                    species {\n                        value\n                    }\n                }\n            }\n            cursor\n        }\n\n        pageInfo {\n            hasNextPage\n            hasPreviousPage\n            startCursor\n            endCursor\n            totalCount\n        }\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},O={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"AddToFavoriteAnimals"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"animalId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createFavoriteAnimal"},arguments:[{kind:"Argument",name:{kind:"Name",value:"animalId"},value:{kind:"Variable",name:{kind:"Name",value:"animalId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"animalId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"userId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"modTime"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:153,source:{body:"mutation AddToFavoriteAnimals($animalId: Int!) {\n    createFavoriteAnimal(animalId: $animalId) {\n        animalId\n        userId\n        modTime\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},x={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"RemoveFromFavoriteAnimals"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"animalId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"deleteFavoriteAnimal"},arguments:[{kind:"Argument",name:{kind:"Name",value:"animalId"},value:{kind:"Variable",name:{kind:"Name",value:"animalId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"animalId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"userId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"modTime"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:158,source:{body:"mutation RemoveFromFavoriteAnimals($animalId: Int!) {\n    deleteFavoriteAnimal(animalId: $animalId) {\n        animalId\n        userId\n        modTime\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},N=Object(l.c)("animals/fetchStatus",function(){var e=Object(d.a)(r.a.mark((function e(n,t){var i,a,d,l,o,s,u,m,v;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=t.getState,a=t.requestId,d=t.rejectWithValue,l=i().animals,o=l.currentRequestId,s=l.loading,u=i().queryArgs.query,"pending"===s&&a===o){e.next=5;break}return e.abrupt("return");case 5:return e.prev=5,e.next=8,h.query({query:g,fetchPolicy:"no-cache",variables:Object(c.a)(Object(c.a)({},u),n)});case 8:return m=e.sent,v=m.data,e.abrupt("return",v.animals);case 13:return e.prev=13,e.t0=e.catch(5),e.abrupt("return",d(e.t0.message));case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(n,t){return e.apply(this,arguments)}}()),y={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"CreateAnimal"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"CreateAnimalInput"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"createAnimal"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:105,source:{body:"mutation CreateAnimal($input: CreateAnimalInput!) {\n    createAnimal(input: $input) {\n        id\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},I={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"UpdateAnimal"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"input"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"UpdateAnimalInput"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"updateAnimal"},arguments:[{kind:"Argument",name:{kind:"Name",value:"input"},value:{kind:"Variable",name:{kind:"Name",value:"input"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:105,source:{body:"mutation UpdateAnimal($input: UpdateAnimalInput!) {\n    updateAnimal(input: $input) {\n        id\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},S=Object(l.c)("animals/CreateUpdate",function(){var e=Object(d.a)(r.a.mark((function e(n,t){var i,a,c,d,l,o,s,u,m,v,b,p,j,f;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return v=t.rejectWithValue,b={name:n.name,comments:n.comments,details:{speciesId:null===(i=n.details)||void 0===i||null===(a=i.species)||void 0===a?void 0:a.id,breedId:null===(c=n.details)||void 0===c||null===(d=c.breed)||void 0===d?void 0:d.id,genderId:null===(l=n.details)||void 0===l||null===(o=l.gender)||void 0===o?void 0:o.id,colorId:null===(s=n.details)||void 0===s||null===(u=s.color)||void 0===u?void 0:u.id,birthDate:null===(m=n.details)||void 0===m?void 0:m.birthDate}},n.id&&(b.id=n.id),p=n.id?I:y,e.prev=4,e.next=7,h.mutate({mutation:p,variables:{input:b}});case 7:return j=e.sent,f=j.data,e.abrupt("return",f);case 12:return e.prev=12,e.t0=e.catch(4),e.abrupt("return",v(e.t0.message));case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(n,t){return e.apply(this,arguments)}}()),A=Object(l.c)("animals/toggleFavorite",function(){var e=Object(d.a)(r.a.mark((function e(n,t){var i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.rejectWithValue,e.prev=1,e.next=4,h.mutate({mutation:n.favorite?O:x,variables:{animalId:n.id}});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),i(e.t0.message);case 9:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(n,t){return e.apply(this,arguments)}}()),F={entities:[],pageInfo:{hasNextPage:!1,hasPreviousPage:!1,totalCount:0},loading:"idle",currentRequestId:void 0,favoriteChangeRequestId:void 0,error:void 0},T=Object(l.d)({name:"animals",initialState:F,reducers:{},extraReducers:function(e){e.addCase(A.fulfilled,(function(e,n){var t=n.meta.requestId;e.favoriteChangeRequestId=t})).addCase(N.pending,(function(e,n){"idle"===e.loading&&(e.loading="pending",e.currentRequestId=n.meta.requestId)})).addCase(N.fulfilled,(function(e,n){var t=n.meta.requestId;"pending"===e.loading&&e.currentRequestId===t&&(e.loading="idle",e.entities=C(n.payload.edges),e.pageInfo=n.payload.pageInfo,e.currentRequestId=void 0)})).addCase(N.rejected,(function(e,n){var t=n.meta.requestId;"pending"===e.loading&&e.currentRequestId===t&&(e.loading="idle",e.error=n.error,e.currentRequestId=void 0)}))}}),C=function(e){return e?e.map((function(e){return e.node})):[]};Object(i.a)(T.actions);n.b=T.reducer},151:function(e,n,t){"use strict";t.d(n,"e",(function(){return c})),t.d(n,"d",(function(){return d})),t.d(n,"b",(function(){return b})),t.d(n,"c",(function(){return p}));var i=t(24),a=t(32),r=t(101),c=Object(a.b)("setPageSize"),d=Object(a.b)("resetQuery"),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12;return{first:e,after:void 0,last:void 0,before:void 0}}(),o={query:l,pageSize:l.first,currentPage:0},s=function(e,n){delete e.query.last,delete e.query.after,delete e.query.before,e.query.first=n,e.currentPage=0,e.pageSize=n},u=Object(a.d)({name:"queryArgs",initialState:o,reducers:{loadNextPage:function(e,n){var t,a=null===(t=n.payload)||void 0===t?void 0:t.endCursor,r=Object(i.a)(Object(i.a)(Object(i.a)({},e.query),l),{},{first:void 0});r.first=e.pageSize,r.after=a,e.query=r,e.currentPage++},loadPreviousPage:function(e,n){var t,a=null===(t=n.payload)||void 0===t?void 0:t.startCursor,r=Object(i.a)(Object(i.a)(Object(i.a)({},e.query),l),{},{first:void 0});r.last=e.pageSize,r.before=a,e.query=r,e.currentPage--}},extraReducers:function(e){e.addCase(c,(function(e,n){s(e,n.payload)})).addCase(d,(function(e){s(e,e.pageSize)})).addCase(r.d,(function(e,n){var t,a,r;s(e,e.pageSize),e.query=Object(i.a)(Object(i.a)({},e.query),{},{breed:m(null===(t=n.payload.breed)||void 0===t?void 0:t.id),species:m(null===(a=n.payload.species)||void 0===a?void 0:a.id),gender:m(null===(r=n.payload.gender)||void 0===r?void 0:r.id)})}))}}),m=function(e){return e?[e]:null},v=u.actions,b=v.loadNextPage,p=v.loadPreviousPage;n.a=u.reducer},159:function(e,n,t){"use strict";t.d(n,"a",(function(){return w})),t.d(n,"b",(function(){return U}));var i=t(17),a=t(24),r=t(6),c=t(0),d=t.n(c),l=t(10),o=t(41),s=t(175),u=t.n(s),m=t(172),v=t.n(m),b=t(171),p=t.n(b),j=t(8),f=t(229),k=t(230),h=t(246),g=t(247),O=t(185),x=t(248),N=t(86),y=t(236),I=t(249),S=t(244),A=t(237),F=t(238),T=t(80),C=t(1),w=64,q="AppBottomNavigation",D={drawerHeader:"".concat(q,"-drawerHeader"),appBar:"".concat(q,"-appBar")},P=Object(j.a)("div")((function(e){var n,t=e.theme;return n={},Object(r.a)(n,"& .".concat(D.appBar),{top:"auto",bottom:0,height:w,backgroundColor:t.palette.primary.light}),Object(r.a)(n,"& .".concat(D.drawerHeader),{display:"flex",alignItems:"center",justifyContent:"space-between"}),n})),V=Object(j.a)("div")((function(e){var n=e.theme;return Object(a.a)(Object(a.a)({display:"flex",alignItems:"center",padding:n.spacing(0,3)},n.mixins.toolbar),{},{justifyContent:"space-between"})}));function R(e){var n=e.children,t=Object(f.a)();return Object(C.jsx)(k.a,{appear:!1,direction:"up",in:!t,children:n})}function U(){var e=Object(l.g)(),n=Object(l.e)(),t=d.a.useState(!1),a=Object(i.a)(t,2),r=a[0],c=a[1],s=Object(o.b)().isAuthenticated,m=function(){c(!1)};return Object(C.jsx)(R,{children:Object(C.jsx)(P,{children:Object(C.jsxs)(h.a,{className:D.appBar,position:"fixed",color:"default",children:[Object(C.jsx)(g.a,{children:Object(C.jsx)(O.a,{edge:"start",onClick:function(){c(!0)},color:"inherit","aria-label":"open drawer",children:Object(C.jsx)(p.a,{})})}),Object(C.jsx)(x.a,{anchor:"bottom",open:r,onClose:m,children:Object(C.jsxs)("div",{role:"presentation",children:[Object(C.jsxs)(V,{children:[Object(C.jsx)(N.a,{variant:"h6",children:"PetBook"}),Object(C.jsx)(O.a,{edge:"end",onClick:m,children:Object(C.jsx)(v.a,{})})]}),Object(C.jsx)(y.a,{}),Object(C.jsx)(I.a,{children:T.a.filter((function(e){return!e.authRequired||s})).map((function(t){return Object(C.jsxs)(S.a,{button:!0,selected:(i=t.to,n.pathname===i),onClick:function(n){return function(n,t){e(t),c(!1)}(0,t.to)},children:[Object(C.jsx)(A.a,{children:Object(C.jsx)(u.a,{})}),Object(C.jsx)(F.a,{primary:t.title})]},t.title);var i}))})]})})]})})})}},199:function(e,n,t){},209:function(e,n,t){},225:function(e,n,t){"use strict";t.r(n);t(199);var i=t(0),a=t.n(i),r=t(53),c=t.n(r),d=t(95),l=t(51),o=(t(209),t(10)),s=t(8),u=t(285),m=t(295),v=t(294),b=t(286),p=t(75),j=t(159),f=t(1);function k(){return Object(p.a)()?Object(f.jsx)(j.b,{}):Object(f.jsx)("div",{})}var h=t(6),g=t(246),O=t(247),x=t(86),N=t(80),y=t(17),I=t(41),S=t(137),A=t.n(S),F=t(293),T=t(257),C=t(297),w=t(185),q=t(40),D=t(228);var P=Object(s.a)("span")((function(e){var n=e.theme;return Object(h.a)({fontSize:"inherit",fontWeight:"inherit",whiteSpace:"nowrap"},n.breakpoints.down("sm"),{maxWidth:150})}));function V(){var e=Object(I.b)(),n=e.isAuthenticated,t=e.user,i=e.loginWithRedirect,r=e.logout,c=Object(o.g)(),d=a.a.useState(null),l=Object(y.a)(d,2),s=l[0],u=l[1],m=Boolean(s),v=function(){var e=Object(q.a)();return Object(D.a)(e.breakpoints.down("xs"))}(),b=function(){u(null)};return Object(f.jsx)("div",{children:n?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(F.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){u(e.currentTarget)},color:"inherit",startIcon:Object(f.jsx)(A.a,{}),children:Object(f.jsx)(P,{children:v?function(e){if(!e)return"";var n=e.split(" "),t="";return n.forEach((function(e){t+=e[0]})),t}(null===t||void 0===t?void 0:t.name):null===t||void 0===t?void 0:t.name})}),Object(f.jsxs)(T.a,{id:"menu-appbar",anchorEl:s,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:m,onClose:b,children:[Object(f.jsx)(C.a,{onClick:function(){c("/user-profile"),b()},children:"Profile"}),Object(f.jsx)(C.a,{onClick:function(){return r({returnTo:window.location.origin})},children:"Logout"})]})]}):Object(f.jsx)(w.a,{"aria-label":"login",edge:"end",onClick:function(){return i()},color:"inherit",children:Object(f.jsx)(A.a,{})})})}var R="AppTopBar",U={appbar:"".concat(R,"-appbar"),toolbar:"".concat(R,"-toolbar"),title:"".concat(R,"-title")},L=Object(s.a)("div")((function(){var e;return e={},Object(h.a)(e,"& .".concat(U.appbar),{backgroundColor:"transparent"}),Object(h.a)(e,"& .".concat(U.toolbar),{justifyContent:"space-between"}),Object(h.a)(e,"& .".concat(U.title),{flexGrow:1}),e}));function z(){var e=Object(o.e)();return Object(f.jsx)(L,{children:Object(f.jsx)(g.a,{className:U.appbar,position:"static",color:"default",elevation:0,children:Object(f.jsxs)(O.a,{className:U.toolbar,children:[Object(f.jsx)(x.a,{variant:"h6",className:U.title,noWrap:!0,children:function(){var n=N.a.filter((function(n){return n.to===e.pathname}));return 1===n.length?n[0].pageTitle:""}()}),Object(f.jsx)(V,{})]})})})}var $=t(298),H="AppTopNavigation",B={appBar:"".concat(H,"-appBar"),title:"".concat(H,"-title"),link:"".concat(H,"-link")},_=Object(s.a)("div")((function(e){var n,t=e.theme;return n={},Object(h.a)(n,"& .".concat(B.appBar),{backgroundColor:t.palette.primary.light}),Object(h.a)(n,"& .".concat(B.title),{flexGrow:1,textAlign:"left"}),Object(h.a)(n,"& .".concat(B.link),{margin:t.spacing(1,1.5),fontWeight:"bold",textTransform:"uppercase",color:t.palette.text.secondary,"&.active":{color:t.palette.text.primary}}),n}));function W(){var e=Object(I.b)().isAuthenticated;return Object(f.jsx)(_,{children:Object(f.jsx)(g.a,{className:B.appBar,position:"fixed",color:"default",children:Object(f.jsxs)(O.a,{children:[Object(f.jsx)(x.a,{variant:"h6",className:B.title,children:"PetBook"}),N.a.filter((function(n){return!n.authRequired||e})).map((function(e){return Object(f.jsx)($.a,{component:l.c,className:B.link,to:e.to,children:e.title},e.title)})),Object(f.jsx)(V,{})]})})})}function E(){return Object(p.a)()?Object(f.jsx)(z,{}):Object(f.jsx)(W,{})}var G=t(148);var Q=function(){return Object(f.jsxs)(G.a,{children:[Object(f.jsx)(x.a,{variant:"h3",component:"h1",children:"Page Not Found"}),Object(f.jsxs)(x.a,{variant:"body1",children:["Try navigating to ",Object(f.jsx)(l.b,{to:"/",children:"homepage"})]})]})},M=t(24),J=t(180),X=Object(J.a)({palette:{primary:{light:"#e8cdb8",main:"#875e3b",dark:"#4e2c1a"},secondary:{light:"#417565",main:"#13493b",dark:"#002115"},tertiary:{light:"#ffffff",main:"#faf5f1",dark:"#c7c2be"},error:{main:"#f44336"}},breakpoints:{values:{xs:0,sm:500,md:768,lg:1280,xl:1920}},typography:{h1:{fontSize:"3rem",lineHeight:1.2},h2:{fontSize:"2.6rem",lineHeight:1.2},h3:{fontSize:"2.2rem",lineHeight:1.2},h4:{fontSize:"1.8rem",lineHeight:1.2},h5:{fontSize:"1.8rem",lineHeight:1.2},h6:{fontSize:"1.6rem",lineHeight:1.2}}}),Y=Object(M.a)(Object(M.a)({},X),{},{components:{MuiListItemIcon:{styleOverrides:{root:{minWidth:"auto",marginTop:4,marginBottom:4}}},MuiStepIcon:{defaultProps:{}}}});function Z(e){var n=e.children,t=Object(I.b)(),i=t.isAuthenticated,a=t.loginWithRedirect;return n?i?n:(a(),null):null}var K=function(){var e=Object(o.e)();return Object(f.jsx)("div",{"data-testid":"location-display",children:e.pathname})},ee=a.a.lazy((function(){return t.e(16).then(t.bind(null,573))})),ne=a.a.lazy((function(){return t.e(14).then(t.bind(null,574))})),te=a.a.lazy((function(){return t.e(12).then(t.bind(null,575))})),ie=a.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(1),t.e(3),t.e(9)]).then(t.bind(null,594))})),ae=a.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(7),t.e(11)]).then(t.bind(null,591))})),re=a.a.lazy((function(){return Promise.all([t.e(0),t.e(1),t.e(8),t.e(13)]).then(t.bind(null,587))})),ce=a.a.lazy((function(){return Promise.all([t.e(0),t.e(2),t.e(1),t.e(3),t.e(10)]).then(t.bind(null,584))})),de=a.a.lazy((function(){return t.e(15).then(t.bind(null,599))})),le=Object(s.a)("div")((function(){return{display:"flex",flexDirection:"column",minHeight:"100vh"}}));function oe(){return Object(f.jsx)(u.a,{children:Object(f.jsxs)(m.a,{theme:Y,children:[Object(f.jsx)(b.a,{}),Object(f.jsxs)(le,{children:[Object(f.jsx)(E,{}),Object(f.jsx)(a.a.Suspense,{fallback:Object(f.jsx)(v.a,{variant:"rectangular",height:"100vh",width:"100%"}),children:Object(f.jsxs)(o.c,{children:[Object(f.jsx)(o.a,{path:"/about",element:Object(f.jsx)(ne,{})}),Object(f.jsx)(o.a,{path:"/user-profile",element:Object(f.jsx)(Z,{children:Object(f.jsx)(te,{})})}),Object(f.jsx)(o.a,{path:"/animal-list",element:Object(f.jsx)(Z,{children:Object(f.jsx)(ie,{})})}),Object(f.jsx)(o.a,{path:"/animal/new",element:Object(f.jsx)(Z,{children:Object(f.jsx)(ae,{})})}),Object(f.jsx)(o.a,{path:"/animal/:id",element:Object(f.jsx)(Z,{children:Object(f.jsx)(re,{})})}),Object(f.jsx)(o.a,{path:"/animal/:id/edit",element:Object(f.jsx)(Z,{children:Object(f.jsx)(ae,{})})}),Object(f.jsx)(o.a,{path:"/favorites",element:Object(f.jsx)(Z,{children:Object(f.jsx)(ce,{})})}),Object(f.jsx)(o.a,{path:"/search",element:Object(f.jsx)(ee,{})}),Object(f.jsx)(o.a,{path:"/login",element:Object(f.jsx)(ee,{})}),Object(f.jsx)(o.a,{path:"/logout",element:Object(f.jsx)(ee,{})}),Object(f.jsx)(o.a,{path:"/",element:Object(f.jsx)(de,{})}),Object(f.jsx)(o.a,{path:"*",element:Object(f.jsx)(Q,{})})]})}),Object(f.jsx)(k,{})]}),Object(f.jsx)(K,{})]})})}var se=function(e){e&&e instanceof Function&&t.e(17).then(t.bind(null,585)).then((function(n){var t=n.getCLS,i=n.getFID,a=n.getFCP,r=n.getLCP,c=n.getTTFB;t(e),i(e),a(e),r(e),c(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ue=t(146),me=t(50),ve=function(e){var n=e.children,t=Object(o.g)();return Object(f.jsx)(I.a,{domain:me.a.AUTH0_DOMAIN,clientId:me.a.AUTH0_CLIENT_ID,redirectUri:window.location.origin,audience:me.a.AUTH0_AUDIENCE_URL,onRedirectCallback:function(e){t((null===e||void 0===e?void 0:e.returnTo)||window.location.pathname)},children:n})},be=t(38),pe=t.n(be),je=t(63),fe=t(105),ke=t(131),he=t(290),ge=t(288),Oe=t(117),xe=function(e){var n=e.children,t=Object(I.b)().getAccessTokenSilently,i=Object(fe.a)({uri:me.a.GRAPHQL_URL}),a=Object(Oe.a)(Object(je.a)(pe.a.mark((function e(){var n;return pe.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:return n=e.sent,e.abrupt("return",{headers:{Authorization:"Bearer ".concat(n)}});case 4:case"end":return e.stop()}}),e)})))),r=new ke.a({link:a.concat(i),cache:new he.a({typePolicies:{Query:{fields:{animals:{keyArgs:[],merge:function(e,n){return n}}}}}}),connectToDevTools:!0});return Object(f.jsx)(ge.a,{client:r,children:n})};c.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(l.a,{children:Object(f.jsx)(ve,{children:Object(f.jsx)(xe,{children:Object(f.jsx)(d.a,{store:ue.a,children:Object(f.jsx)(oe,{})})})})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),se()},50:function(e,n,t){"use strict";n.a={GRAPHQL_URL:"https://petbook-back.herokuapp.com/graphql",AUTH0_DOMAIN:"pets-oss.eu.auth0.com",AUTH0_CLIENT_ID:"e42ezU7Z8Hxw4m0b24P2jrUUUmYrVPXA",AUTH0_AUDIENCE_URL:"https://pet-oss/api",PUBLIC_URL:""}},75:function(e,n,t){"use strict";t.d(n,"a",(function(){return r}));var i=t(40),a=t(228);function r(){var e=Object(i.a)();return Object(a.a)(e.breakpoints.down("sm"))}},80:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var i=[{authRequired:!1,title:"Home",to:"/",pageTitle:"Welcome"},{authRequired:!1,title:"About",to:"/about",pageTitle:"About this project"},{authRequired:!0,title:"Animals",to:"/animal-list",pageTitle:"Animal list"},{authRequired:!0,title:"Favorites",to:"/favorites",pageTitle:"Favorites"},{authRequired:!0,title:"Reports",to:"/reports",pageTitle:"Reports"}]}},[[225,5,6]]]);
//# sourceMappingURL=main.cdd45dbd.chunk.js.map