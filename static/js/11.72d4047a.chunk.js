(this["webpackJsonppets-front"]=this["webpackJsonppets-front"]||[]).push([[11],{316:function(e,n,i){"use strict";i.d(n,"a",(function(){return t}));var t=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},325:function(e,n,i){"use strict";i.d(n,"b",(function(){return d})),i.d(n,"a",(function(){return c}));var t=i(593),a=i(590),l=i(557),r=(i(576),i(323)),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){var n=new Date(parseInt(e,10));return Object(t.a)(n,"yyyy-MM-dd",{locale:r.a})}return""},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){var n=Object(a.a)(e,"yyyy-MM-dd",new Date);if(Object(l.a)(n))return Object(t.a)(n,"yyyy-MM-dd");if(n=Object(a.a)(e,"yyyy-MM",new Date),Object(l.a)(n))return Object(t.a)(n,"yyyy-MM-dd");if(n=Object(a.a)(e,"yyyy",new Date),Object(l.a)(n))return Object(t.a)(n,"yyyy-MM-dd")}return!1}},330:function(e,n,i){"use strict";i.d(n,"a",(function(){return a}));var t=i(0);function a(e){var n=Object(t.useRef)();return Object(t.useEffect)((function(){n.current=e})),n.current}},335:function(e,n,i){"use strict";i.d(n,"a",(function(){return m}));i(0);var t=i(581),a=i(24),l=i(314),r=i(580),d=i(586),c=i(613),s=i(316),o=i(1);function u(e){var n=e.options,i=e.name,t=e.defaultValue,u=e.disabled,m=e.optionsLimit,v=void 0===m?100:m,b=e.label,j=e.required,g=void 0!==j&&j,p=e.multiple,k=void 0!==p&&p,f=Object(l.d)(),O=f.control,y=f.formState.errors,h=function(e,n){return Object(r.a)()(e,n).slice(0,v)};return Object(o.jsx)(l.a,{defaultValue:null!==t&&void 0!==t?t:null,rules:{required:!!g&&"Required"},render:function(e){var t;return Object(o.jsx)(d.a,Object(a.a)(Object(a.a)({},e),{},{value:null!==(t=e.field.value)&&void 0!==t?t:null,options:null!==n&&void 0!==n?n:[],filterOptions:h,getOptionLabel:function(e){return"string"===typeof e?e:e.value},onChange:function(n,i){e.field.onChange(i)},disabled:u,multiple:k,renderInput:function(e){var n,t;return Object(o.jsx)(c.a,Object(a.a)(Object(a.a)({},e),{},{variant:"outlined",color:"primary",margin:"dense",error:!!y[i],label:null!==b&&void 0!==b?b:Object(s.a)(i),helperText:(null!==(n=null===(t=y[i])||void 0===t?void 0:t.message)&&void 0!==n?n:g)?"Required":"Optional"}))}}))},name:i,control:O})}function m(e){var n=e.gqlOptions,i=e.name,a=e.defaultValue,l=e.multiple,r=e.disabled,d=e.helperText,c=e.required,s=e.label,m=Object(t.a)(n.query,{variables:n.variables,skip:r}).data;return Object(o.jsx)(u,{options:m?m[n.type]:[],name:i,helperText:d,defaultValue:a,multiple:l,disabled:r,required:c,label:s})}},364:function(e,n,i){"use strict";n.a=i.p+"static/media/logo.22754045.svg"},591:function(e,n,i){"use strict";i.r(n);var t=i(6),a=i(0),l=i.n(a),r=i(10),d=i(581),c=i(297),s=i(8),o=i(126),u=i(431),m=(i(445),i(24)),v=i(65),b=i(37),j=i.n(b),g=i(314),p=i(149),k=i(153),f=i(325),O=i(89),y=i(239),h=i(296),x=i(330),N=i(335),S=i(20),D=i(15),F=(i(446),i(447)),q=i(542),C=i.n(q),V=i(545),T=i.n(V),I=i(546),w=i.n(I),L=i(543),M=i.n(L),G=i(544),E=i.n(G),B=i(547),A=i.n(B),R=i(250),$=i(615),W=i(597),U=i(612),K=i(1),Q=F.KeyBindingUtil.hasCommandModifier;function P(e){var n=e.name,i=Object(g.d)(),t=i.register,r=i.control,d=i.setValue,c=Object(g.e)({control:r,name:n});Object(a.useEffect)((function(){t(n);var e="string"===typeof c?c:"",i=Object(F.convertFromHTML)(e),a=F.ContentState.createFromBlockArray(i.contentBlocks,i.entityMap);b(F.EditorState.createWithContent(a))}),[t,n]);var s=function(e){var i=Object(F.convertToRaw)(e.getCurrentContent()),t=C()(i);d(n,t),b(e)},o=l.a.useState((function(){return F.EditorState.createEmpty()})),m=Object(D.a)(o,2),v=m[0],b=m[1],j=l.a.useRef(null);return Object(K.jsxs)(u.a,{border:1,borderColor:"grey.500",borderRadius:2,children:[Object(K.jsxs)(R.a,{children:[Object(K.jsx)(J,{editorState:v,onToggle:function(e){s(F.RichUtils.toggleBlockType(v,e))}}),Object(K.jsx)(y.a,{variant:"middle"}),Object(K.jsx)(Y,{editorState:v,onToggle:function(e){s(F.RichUtils.toggleInlineStyle(v,e))}})]}),Object(K.jsxs)(u.a,{pl:1,m:2,children:[Object(K.jsx)(F.Editor,{stripPastedStyles:!0,ref:j,customStyleMap:z,editorState:v,handleKeyCommand:function(e,n){if("myeditor-tab"===e)return"handled";var i=F.RichUtils.handleKeyCommand(n,e);return i?(s(i),"handled"):"not-handled"},onChange:s,keyBindingFn:function(e){return 9===e.keyCode&&Q(e)?"myeditor-tab":Object(F.getDefaultKeyBinding)(e)},spellCheck:!0,placeholder:"Type here your description"}),Object(K.jsx)($.a,{id:"component-helper-text",children:"Optional"})]})]})}var H=[{label:"UL",style:"unordered-list-item",icon:Object(K.jsx)(M.a,{})},{label:"OL",style:"ordered-list-item",icon:Object(K.jsx)(E.a,{})}],J=function(e){var n=e.editorState,i=n.getSelection(),t=n.getCurrentContent().getBlockForKey(i.getStartKey()).getType();return Object(K.jsx)("div",{className:"RichEditor-controls",children:Object(K.jsx)(W.a,{value:t,exclusive:!0,children:H.map((function(n){return Object(K.jsx)(U.a,{value:n.style,onMouseDown:function(i){return function(n,i){n.preventDefault(),e.onToggle(i)}(i,n.style)},children:n.icon},n.label)}))})})},z={},X=[{label:"Bold",style:"BOLD",icon:Object(K.jsx)(T.a,{})},{label:"Italic",style:"ITALIC",icon:Object(K.jsx)(w.a,{})},{label:"Underline",style:"UNDERLINE",icon:Object(K.jsx)(A.a,{})}],Y=function(e){var n=e.editorState.getCurrentInlineStyle();return Object(K.jsx)(W.a,{value:Object(S.a)(n),children:X.map((function(n){return Object(K.jsx)(U.a,{value:n.style,onMouseDown:function(i){return function(n,i){n.preventDefault(),e.onToggle(i)}(i,n.style)},children:n.icon},n.label)}))})},Z=i(9),_=i(613),ee=Object(s.a)(O.a)((function(e){return{position:"absolute",right:12,bottom:12,"&.Mui-error":{color:e.theme.palette.error.main}}}));function ne(e){var n=e.label,i=e.id,l=e.name,r=e.placeholder,d=e.defaultValue,c=e.fullWidth,s=void 0!==c&&c,o=e.helperText,u=e.rightHelperText,m=e.showLettersCount,v=void 0!==m&&m,b=e.maxLength,j=void 0===b?25:b,p=e.required,k=void 0!==p&&p,f=e.validate,O=e.type,y=void 0===O?"text":O,h=e.InputLabelProps,x=Object(g.d)(),N=x.control,S=x.formState,F=Object(a.useState)(void 0),q=Object(D.a)(F,2),C=q[0],V=q[1],T=Object(a.useState)(void 0),I=Object(D.a)(T,2),w=I[0],L=I[1],M=Object(g.e)({control:N,name:l,defaultValue:void 0});Object(a.useEffect)((function(){V(M)}),[M]),Object(a.useEffect)((function(){var e=S.errors;if(l.includes(".")){var n=l.split("."),i=Object(D.a)(n,2),t=i[0],a=i[1];L(e[t]?e[t][a]:void 0)}else L(e[l])}),[S,l]);return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(g.a,{name:l,control:N,defaultValue:d,rules:{required:!!k&&"Required",maxLength:j,validate:f},render:function(e){var t=e.field,a=t.onChange,c=t.value;return Object(K.jsx)(_.a,{label:n,id:i,type:y,color:"primary",placeholder:r,variant:"outlined",fullWidth:s,margin:"dense",name:l,error:!!w,helperText:(null===w||void 0===w?void 0:w.message)||o,InputLabelProps:h,value:c,onChange:function(e){!function(e,n){var i=e.target.value;V(i),n(e)}(e,a)},defaultValue:d})}}),(v||u)&&Object(K.jsx)(ee,{variant:"caption",color:"textSecondary",className:Object(Z.a)(Object(t.a)({},"Mui-error",w)),children:null!==u&&void 0!==u?u:"".concat((null===C||void 0===C?void 0:C.length)||0,"/").concat(j)})]})}var ie={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetSpecies"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"language"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"species"},arguments:[{kind:"Argument",name:{kind:"Name",value:"language"},value:{kind:"Variable",name:{kind:"Name",value:"language"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:107,source:{body:"query GetSpecies($language: String!) {\n    species(language: $language) {\n        id\n        value\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},te={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetGenders"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"language"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"genders"},arguments:[{kind:"Argument",name:{kind:"Name",value:"language"},value:{kind:"Variable",name:{kind:"Name",value:"language"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:107,source:{body:"query GetGenders($language: String!) {\n    genders(language: $language) {\n        id\n        value\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},ae={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetBreeds"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"species"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"language"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"breeds"},arguments:[{kind:"Argument",name:{kind:"Name",value:"species"},value:{kind:"Variable",name:{kind:"Name",value:"species"}}},{kind:"Argument",name:{kind:"Name",value:"language"},value:{kind:"Variable",name:{kind:"Name",value:"language"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:143,source:{body:"query GetBreeds($species: String!, $language: String!) {\n    breeds(species: $species, language: $language) {\n        id\n        value\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},le={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetColors"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"language"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"speciesId"}},type:{kind:"NamedType",name:{kind:"Name",value:"Int"}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"colors"},arguments:[{kind:"Argument",name:{kind:"Name",value:"language"},value:{kind:"Variable",name:{kind:"Name",value:"language"}}},{kind:"Argument",name:{kind:"Name",value:"speciesId"},value:{kind:"Variable",name:{kind:"Name",value:"speciesId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"speciesId"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"speciesName"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:183,source:{body:"query GetColors($language: String!, $speciesId: Int) {\n    colors(language: $language, speciesId: $speciesId) {\n        id\n        value\n        speciesId\n        speciesName\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},re="DetailsStep",de={relative:"".concat(re,"-relative"),fullWidth:"".concat(re,"-fullWidth")},ce=Object(s.a)(o.a)((function(){return{relative:{position:"relative"},fullWidth:{width:"100%"}}}));function se(){var e=Object(g.d)(),n=e.control,i=e.setValue,t=Object(r.g)(),l=Object(g.e)({control:n,name:"name"}),d=Object(g.e)({control:n,name:"details.species",defaultValue:null}),c=Object(x.a)({species:d});Object(a.useEffect)((function(){var e=void 0!==c&&null!==c.species&&c.species!==d;d&&!e||(i("details.breed",null),i("details.color",null))}),[d,i]);return Object(K.jsxs)(ce,{container:!0,spacing:2,children:[Object(K.jsx)(o.a,{item:!0,xs:12,container:!0,justifyContent:"center",children:Object(K.jsx)(o.a,{item:!0,spacing:2,children:l?Object(K.jsx)(O.a,{variant:"h5",children:l}):Object(K.jsx)(O.a,{variant:"h5",children:"New Animal"})})}),Object(K.jsx)(o.a,{item:!0,xs:12,container:!0,justifyContent:"center",children:Object(K.jsx)(o.a,{item:!0,xs:12,sm:6,className:de.relative,spacing:2,children:Object(K.jsx)(ne,{name:"name",label:"Name",required:!0,helperText:" ",fullWidth:!0,showLettersCount:!0})})}),Object(K.jsxs)(o.a,{item:!0,xs:12,container:!0,spacing:2,children:[Object(K.jsx)(o.a,{item:!0,xs:12,sm:6,children:Object(K.jsx)(N.a,{name:"details.species",label:"Specie",gqlOptions:{query:ie,variables:{language:"lt"},type:"species"}})}),Object(K.jsx)(o.a,{item:!0,xs:12,sm:6,children:Object(K.jsx)(N.a,{name:"details.gender",label:"Gender",gqlOptions:{query:te,variables:{language:"lt"},type:"genders"}})}),Object(K.jsx)(o.a,{item:!0,xs:12,sm:6,children:Object(K.jsx)(N.a,{name:"details.breed",label:"Breed",disabled:!d,gqlOptions:{query:ae,variables:{species:null===d||void 0===d?void 0:d.id.toString(),language:"lt"},type:"breeds"}})}),Object(K.jsx)(o.a,{item:!0,xs:12,sm:6,children:Object(K.jsx)(N.a,{name:"details.color",label:"Color",gqlOptions:{query:le,variables:{language:"lt",speciesId:null===d||void 0===d?void 0:d.id},type:"colors"}})}),Object(K.jsx)(o.a,{item:!0,xs:12,sm:6,children:Object(K.jsx)(ne,{name:"details.birthDate",id:"birthDate",label:"Birth date",placeholder:"yyyy-mm-dd, yyyy-mm or yyyy",helperText:"Format date as a yyyy(-mm(-dd))",validate:function(e){return!1!==Object(f.a)(e)},fullWidth:!0})}),Object(K.jsx)(o.a,{item:!0,xs:12,className:de.relative,children:Object(K.jsx)(P,{name:"comments",maxLength:200})})]}),Object(K.jsx)(o.a,{item:!0,container:!0,children:Object(K.jsx)(y.a,{sx:{width:"100%",my:3}})}),Object(K.jsxs)(o.a,{item:!0,xs:12,container:!0,spacing:2,justifyContent:"center",children:[Object(K.jsx)(o.a,{item:!0,children:Object(K.jsx)(h.a,{color:"primary",variant:"outlined",onClick:function(){t("/animal-list")},children:"Cancel"})}),Object(K.jsx)(o.a,{item:!0,children:Object(K.jsx)(h.a,{type:"submit",color:"primary",variant:"contained",children:"Submit"})})]})]})}var oe=Object(a.memo)(se);function ue(e){var n=e.animal,i=e.submitCallback,t=Object(g.c)({defaultValues:me(n)}),l=t.handleSubmit,r=t.reset,d=Object(a.useRef)(null),c=Object(p.b)();Object(a.useEffect)((function(){n&&r(me(n))}),[n]);var s=function(){var e=Object(v.a)(j.a.mark((function e(t){var a,l,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"<p><br></p>"===t.comments&&(t.comments=""),null!==(a=t.details)&&void 0!==a&&a.birthDate&&(t.details.birthDate=Object(f.a)(null===(l=t.details)||void 0===l?void 0:l.birthDate)),n&&(t.id=n.id),e.next=5,c(Object(k.a)(t));case 5:r=e.sent,k.a.fulfilled.match(r)?i(null):i(r.payload);case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(K.jsx)(u.a,{display:"flex",justifyContent:"center",sx:{maxWidth:800,margin:"0 auto"},children:Object(K.jsx)(g.b,Object(m.a)(Object(m.a)({},t),{},{children:Object(K.jsx)(u.a,{onSubmit:l(s),ref:d,children:Object(K.jsx)(oe,{})})}))})}var me=function(e){var n;return e?Object(m.a)(Object(m.a)({},e),{},{details:Object(m.a)(Object(m.a)({},e.details),{},{birthDate:Object(f.b)(null===(n=e.details)||void 0===n?void 0:n.birthDate)})}):{details:{birthDate:Object(f.b)(Date.now().toString())}}};var ve=i(364),be=i(151),je={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetAnimalOnEdit"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"id"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"Int"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"animal"},arguments:[{kind:"Argument",name:{kind:"Name",value:"id"},value:{kind:"Variable",name:{kind:"Name",value:"id"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"name"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"details"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"gender"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"color"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"birthDate"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"breed"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}},{kind:"Field",name:{kind:"Name",value:"species"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}},{kind:"Field",name:{kind:"Name",value:"comments"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:459,source:{body:"query GetAnimalOnEdit($id: Int!) {\n    animal(id: $id) {\n        id\n        name\n        details {\n            gender {\n                id\n                value\n            }\n            color {\n                id\n                value\n            }\n            birthDate\n            breed {\n                id\n                value\n            }\n            species {\n                id\n                value\n            }\n        }\n        comments\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}};var ge="TopSection",pe={image:"".concat(ge,"-image"),imageWrapper:"".concat(ge,"-imageWrapper")},ke=Object(s.a)(o.a)((function(e){var n,i=e.theme;return n={},Object(t.a)(n,"& .".concat(pe.image),{fill:i.palette.primary.dark,width:"100%"}),Object(t.a)(n,"& .".concat(pe.imageWrapper),Object(t.a)({padding:i.spacing(1),marginBottom:i.spacing(1),width:64,height:64,borderRadius:"50%",backgroundColor:i.palette.secondary.light},i.breakpoints.up("md"),{padding:i.spacing(2),marginBottom:i.spacing(2),width:100,height:100})),n}));function fe(){return Object(K.jsx)(ke,{container:!0,spacing:0,justifyContent:"center",alignItems:"center",children:Object(K.jsx)(u.a,{className:pe.imageWrapper,children:Object(K.jsx)("img",{src:ve.a,alt:"paw",className:pe.image})})})}n.default=function(){var e=Object(r.g)(),n=Object(r.h)().id,i=Object(d.a)(je,{variables:{id:Number(n)},skip:!n}),t=i.loading,a=i.error,l=i.data;return Object(K.jsx)(be.a,{topSection:Object(K.jsx)(fe,{}),children:a?Object(K.jsx)("p",{children:"Error!"}):t?Object(K.jsx)(c.a,{animation:"wave",variant:"rectangular",height:"70vh",width:"100%"}):Object(K.jsx)(ue,{animal:null===l||void 0===l?void 0:l.animal,submitCallback:function(n){null===n?e("/animal-list"):console.error("AnimalForm",n)}})})}}}]);
//# sourceMappingURL=11.72d4047a.chunk.js.map