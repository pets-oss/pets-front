(this["webpackJsonppets-front"]=this["webpackJsonppets-front"]||[]).push([[12],{357:function(e,n,i){"use strict";i.d(n,"a",(function(){return a}));var a=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},375:function(e,n,i){"use strict";var a,t,r,l,d;i.d(n,"a",(function(){return t})),i.d(n,"b",(function(){return d})),function(e){e.Healthy="healthy",e.Vaccinated="vaccinated",e.Sick="sick",e.Adopted="adopted"}(a||(a={})),function(e){e.General="General",e.Medical="Medical",e.Registration="Registration"}(t||(t={})),function(e){e.Giveaway="Giveaway",e.Streetfind="Streetfind",e.CheckIn="CheckIn",e.CheckOut="CheckOut",e.Died="Died",e.TemporaryCare="TemporaryCare",e.Microchipping="Microchipping",e.LocationChange="LocationChange",e.Medication="Medication",e.Prophylaxis="Prophylaxis",e.Surgery="Surgery",e.GenderElimination="GenderElimination",e.Inspection="Inspection"}(r||(r={})),function(e){e.Implanted="Implanted",e.Removed="Removed"}(l||(l={})),function(e){e.Active="Active",e.Inactive="Inactive"}(d||(d={}))},391:function(e,n,i){"use strict";i.d(n,"a",(function(){return r}));i(0);var a=i(390),t=i(4);function r(e){var n=e.children;return Object(t.jsx)(a.a,{display:"flex",justifyContent:"center",width:"100%",children:n})}},407:function(e,n,i){"use strict";n.a=i.p+"static/media/logo.22754045.svg"},674:function(e,n,i){"use strict";i.r(n);var a=i(30),t=i(0),r=i(190),l=i(390),d=i(168),s=i(72),o=(i(194),i(57)),c=i(365),u=i(131),m=i(353),v=i.n(m),g=i(375),b=i(391),p=i(7),j=i(21),k=i(307),h=i(287),f=i(632),O=i(396),x=i(667),y=i(677),N=i(357),S=i(4);function q(e){var n=e.options,i=e.name,a=e.defaultValue,t=e.disabled,r=e.optionsLimit,l=void 0===r?100:r,d=e.label,s=e.required,u=void 0!==s&&s,m=Object(c.d)(),v=m.control,g=m.errors,b=function(e,n){return Object(x.a)()(e,n).slice(0,l)};return Object(S.jsx)(c.a,{defaultValue:null!==a&&void 0!==a?a:null,rules:{required:!!u&&"Required"},render:function(e){var a;return Object(S.jsx)(y.a,Object(o.a)(Object(o.a)({},e),{},{value:null!==(a=e.value)&&void 0!==a?a:null,options:null!==n&&void 0!==n?n:[],filterOptions:b,getOptionLabel:function(e){return"string"===typeof e?e:e.value},getOptionSelected:function(e,n){return"string"===typeof e?e===n:(null===e||void 0===e?void 0:e.id)===(null===n||void 0===n?void 0:n.id)},onChange:function(n,i){e.onChange(i)},disabled:t,renderInput:function(e){var n,a;return Object(S.jsx)(O.a,Object(o.a)(Object(o.a)({},e),{},{variant:"outlined",color:"secondary",margin:"dense",error:!!g[i],label:null!==d&&void 0!==d?d:Object(N.a)(i),helperText:(null!==(n=null===(a=g[i])||void 0===a?void 0:a.message)&&void 0!==n?n:u)?"Required":"Optional"}))}}))},name:i,control:v})}function D(e){var n=e.gqlOptions,i=e.name,a=e.defaultValue,t=e.disabled,r=e.helperText,l=e.required,d=e.label,s=Object(f.a)(n.query,{variables:n.variables,skip:t}).data;return Object(S.jsx)(q,{options:s?s[n.type]:[],name:i,helperText:r,defaultValue:a,disabled:t,required:l,label:d})}var V=i(101);function C(e){var n,i=e.label,a=e.id,r=e.name,l=e.placeholder,d=e.defaultValue,o=e.fullWidth,u=void 0!==o&&o,m=e.rightHelperText,v=e.showLettersCount,g=void 0!==v&&v,b=e.maxLength,p=void 0===b?25:b,j=e.required,k=void 0!==j&&j,h=e.type,f=void 0===h?"text":h,x=e.InputLabelProps,y=T(),N=Object(c.d)(),q=N.register,D=N.errors,C=Object(t.useState)(""),G=Object(V.a)(C,2),w=G[0],F=G[1],I=Object(t.useState)(void 0),R=Object(V.a)(I,2),L=R[0],A=R[1];return Object(t.useEffect)((function(){if(r.includes(".")){var e=r.split("."),n=Object(V.a)(e,2),i=n[0],a=n[1];A(D[i]?D[i][a]:void 0)}else A(D[r])}),[D,r]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(O.a,{label:i,id:a,type:f,color:"secondary",placeholder:l,variant:"outlined",fullWidth:u,margin:"dense",name:r,error:!!L,helperText:(null!==(n=null===L||void 0===L?void 0:L.message)&&void 0!==n?n:k)?"Required":"Optional",InputLabelProps:x,value:w,onChange:function(e){var n;(n=e.target.value).length<=p&&F(n.trim())},defaultValue:d,inputRef:q({required:!!k&&"Required"})}),(g||m)&&Object(S.jsx)(s.a,{variant:"caption",color:"textSecondary",className:y.rightHelper,children:null!==m&&void 0!==m?m:"".concat(w.length,"/").concat(p)})]})}var T=v()((function(){return{rightHelper:{position:"absolute",right:12,bottom:12}}})),G=i(631),w=i(584),F=i.n(w),I=i(490),R=i(332),L=i(161);function A(e){var n=e.name,i=e.maxLength,a=Object(t.useState)(!1),r=Object(V.a)(a,2),l=r[0],d=r[1],s=$();return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(c.a,{name:n,render:function(e){return Object(S.jsx)(R.a,{theme:l?E:W,children:Object(S.jsx)(F.a,{onChange:function(n){return e.onChange(Object(G.a)(n.getCurrentContent()))},label:"Type here your description",inlineToolbar:!0,maxLength:i,controls:["bold","italic","underline","strikethrough","highlight","clear"],onFocus:function(){return d(!0)},onBlur:function(){return d(!1)}})})}}),Object(S.jsx)(I.a,{className:s.formHelperText,id:"component-helper-text",children:"Optional"})]})}var W=Object(L.a)();Object.assign(W,{overrides:{MUIRichTextEditor:{root:{width:"100%",border:"1px #c7c2be solid","&:hover":{border:"1px solid #202020"},borderRadius:"4px",padding:"0 14px",position:"relative"},editor:{height:"150px",wordBreak:"break-word"}}}});var E=Object(L.a)();Object.assign(E,{overrides:{MUIRichTextEditor:{root:{width:"100%",border:"2px solid #13493B",borderRadius:"4px",padding:"0 14px",position:"relative"},editor:{height:"150px",wordBreak:"break-word"}}}});var $=Object(d.a)((function(e){return{formHelperText:{position:"relative",top:5,left:15,color:e.palette.text.secondary,fontSize:"0.85em",fontWeight:400,transition:"all 0.2s"}}})),B={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetSpecies"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"language"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"species"},arguments:[{kind:"Argument",name:{kind:"Name",value:"language"},value:{kind:"Variable",name:{kind:"Name",value:"language"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:107,source:{body:"query GetSpecies($language: String!) {\n    species(language: $language) {\n        id\n        value\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},M={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetGenders"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"language"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"genders"},arguments:[{kind:"Argument",name:{kind:"Name",value:"language"},value:{kind:"Variable",name:{kind:"Name",value:"language"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:107,source:{body:"query GetGenders($language: String!) {\n    genders(language: $language) {\n        id\n        value\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},H={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetBreeds"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"species"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"language"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"breeds"},arguments:[{kind:"Argument",name:{kind:"Name",value:"species"},value:{kind:"Variable",name:{kind:"Name",value:"species"}}},{kind:"Argument",name:{kind:"Name",value:"language"},value:{kind:"Variable",name:{kind:"Name",value:"language"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:143,source:{body:"query GetBreeds($species: String!, $language: String!) {\n    breeds(species: $species, language: $language) {\n        id\n        value\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},P={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetColors"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"language"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colors"},arguments:[{kind:"Argument",name:{kind:"Name",value:"language"},value:{kind:"Variable",name:{kind:"Name",value:"language"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:105,source:{body:"query GetColors($language: String!) {\n    colors(language: $language) {\n        id\n        value\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},Q={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetStatuses"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"language"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"statuses"},arguments:[{kind:"Argument",name:{kind:"Name",value:"language"},value:{kind:"Variable",name:{kind:"Name",value:"language"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:109,source:{body:"query GetStatuses($language: String!) {\n    statuses(language: $language) {\n        id\n        value\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}};function U(){var e=_(),n=Object(c.d)(),i=n.control,a=n.setValue,r=Object(j.f)(),l=Object(c.e)({control:i,name:"details.specie",defaultValue:void 0});Object(t.useEffect)((function(){a("breed",void 0)}),[l,a]);return Object(S.jsxs)(u.a,{container:!0,spacing:2,children:[Object(S.jsx)(u.a,{item:!0,xs:12,container:!0,spacing:2,justify:"center",children:Object(S.jsx)(u.a,{item:!0,xs:12,sm:4,className:Object(p.a)(e.name,e.relative),children:Object(S.jsx)(C,{name:"name",label:"Name",id:"name",fullWidth:!0,showLettersCount:!0})})}),Object(S.jsxs)(u.a,{item:!0,xs:12,container:!0,spacing:2,children:[Object(S.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(S.jsx)(D,{name:"details.specie",label:"Specie",gqlOptions:{query:B,variables:{language:"lt"},type:"species"}})}),Object(S.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(S.jsx)(D,{name:"details.gender",label:"Gender",gqlOptions:{query:M,variables:{language:"lt"},type:"genders"}})}),Object(S.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(S.jsx)(D,{name:"details.breed",label:"Breed",disabled:!l,gqlOptions:{query:H,variables:{species:null===l||void 0===l?void 0:l.id,language:"lt"},type:"breeds"}})}),Object(S.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(S.jsx)(D,{name:"details.color",label:"Color",gqlOptions:{query:P,variables:{language:"lt"},type:"colors"}})}),Object(S.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(S.jsx)(C,{type:"date",name:"details.birthDate",id:"birthDate",label:"Birth date",fullWidth:!0,InputLabelProps:{shrink:!0}})}),Object(S.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(S.jsx)(C,{type:"file",name:"image",id:"image",fullWidth:!0})}),Object(S.jsx)(u.a,{item:!0,xs:12,className:e.relative,children:Object(S.jsx)(A,{name:"description",maxLength:200})}),Object(S.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(S.jsx)(D,{name:"status",gqlOptions:{query:Q,variables:{language:"lt"},type:"statuses"}})}),Object(S.jsx)(u.a,{item:!0,xs:12,sm:6,children:Object(S.jsx)(C,{name:"details.weight",id:"weight",label:"Weight, kg",type:"number",fullWidth:!0})})]}),Object(S.jsx)(u.a,{item:!0,container:!0,children:Object(S.jsx)(h.a,{style:{width:"100%"}})}),Object(S.jsxs)(u.a,{item:!0,xs:12,container:!0,spacing:2,justify:"center",children:[Object(S.jsx)(u.a,{item:!0,children:Object(S.jsx)(k.a,{color:"secondary",variant:"outlined",onClick:function(){r.push("/animal-list")},children:"Cancel"})}),Object(S.jsx)(u.a,{item:!0,children:Object(S.jsx)(k.a,{type:"submit",color:"secondary",variant:"contained",children:"Submit"})})]})]})}var J,_=v()((function(){return{form:{maxWidth:800},name:{minWidth:300},relative:{position:"relative"},fullWidth:{width:"100%"}}})),z=Object(t.memo)(U);i(668),i(679),i(687);!function(e){e.Implanted="implanted",e.Removed="removed"}(J||(J={}));var Y;i(680);!function(e){e.RESCUED="rescued",e.GIVEN_AWAY="given_away"}(Y||(Y={}));v()((function(){return{relative:{position:"relative"}}}));var K={name:"",registration:{incomingType:Y.RESCUED,status:g.b.Active},createEvent:!1,chip:{status:J.Implanted}};function X(){var e=Z(),n=Object(c.c)({defaultValues:K}),i=n.handleSubmit,a=Object(t.useRef)(null);return Object(S.jsx)(b.a,{children:Object(S.jsx)(c.b,Object(o.a)(Object(o.a)({},n),{},{children:Object(S.jsx)(u.a,{container:!0,spacing:2,alignItems:"center",component:"form",className:e.form,onSubmit:i((function(e){console.log("FORM DATA: ",e)})),ref:a,children:Object(S.jsx)(z,{})})}))})}var Z=v()((function(){return{form:{maxWidth:800}}})),ee=i(407),ne=i(162);function ie(){var e=ae();return Object(S.jsxs)(l.a,{display:"flex",flexDirection:"column",alignItems:"center",children:[Object(S.jsx)(l.a,{className:e.imageWrapper,children:Object(S.jsx)("img",{src:ee.a,alt:"paw",className:e.image})}),Object(S.jsx)(s.a,{variant:"h5",children:"New Animal"})]})}var ae=Object(d.a)((function(e){return{image:{fill:e.palette.primary.dark,width:"100%"},imageWrapper:Object(a.a)({padding:e.spacing(1),marginBottom:e.spacing(1),width:64,height:64,borderRadius:"50%",backgroundColor:e.palette.primary.light},e.breakpoints.up("md"),{padding:e.spacing(2),marginBottom:e.spacing(2),width:100,height:100})}}));n.default=function(){return Object(S.jsx)(r.a,{in:!0,timeout:600,children:Object(S.jsx)(ne.a,{topSection:Object(S.jsx)(ie,{}),children:Object(S.jsx)(X,{})})})}}}]);
//# sourceMappingURL=12.6b80b9b2.chunk.js.map