(this["webpackJsonppets-front"]=this["webpackJsonppets-front"]||[]).push([[9],{316:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var c=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}},325:function(e,a,t){"use strict";t.d(a,"b",(function(){return o})),t.d(a,"a",(function(){return l}));var c=t(593),n=t(590),i=t(557),r=(t(576),t(323)),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){var a=new Date(parseInt(e,10));return Object(c.a)(a,"yyyy-MM-dd",{locale:r.a})}return""},l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){var a=Object(n.a)(e,"yyyy-MM-dd",new Date);if(Object(i.a)(a))return Object(c.a)(a,"yyyy-MM-dd");if(a=Object(n.a)(e,"yyyy-MM",new Date),Object(i.a)(a))return Object(c.a)(a,"yyyy-MM-dd");if(a=Object(n.a)(e,"yyyy",new Date),Object(i.a)(a))return Object(c.a)(a,"yyyy-MM-dd")}return!1}},328:function(e,a,t){"use strict";t.d(a,"a",(function(){return o})),t.d(a,"b",(function(){return s}));var c=t(20),n=t(588),i=t(323),r=t(316),o=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";if(e){var a=Object(n.a)(Number(e),new Date,{locale:i.a});return Object(r.a)(a)}return""},l=function(e){return e?"".concat(e,"kg"):""},s=function(e){var a=e.details,t={title:"Birthday",value:null!==a&&void 0!==a&&a.birthDate?o(a.birthDate):""},n={title:"Weight",value:null!==a&&void 0!==a&&a.weight?l(a.weight):""},i=a?Object.keys(a).filter((function(e){return"object"===typeof a[e]&&null!==a[e]})).map((function(e){return{title:a[e].__typename,value:a[e].value}})):[];return[t].concat(Object(c.a)(i),[n])}},329:function(e,a,t){"use strict";t.d(a,"b",(function(){return u})),t.d(a,"a",(function(){return c}));t(0);var c,n=t(386),i=t.n(n),r=t(385),o=t.n(r),l=t(597),s=t(612),d=t(1);function u(e){var a=e.value,t=e.onChange;return Object(d.jsxs)(l.a,{size:"small",exclusive:!0,value:a,onChange:function(e,a){return t(a)},"aria-label":"view selector",children:[Object(d.jsx)(s.a,{value:c.LIST,"aria-label":c.LIST,children:Object(d.jsx)(o.a,{})}),Object(d.jsx)(s.a,{value:c.TABLE,"aria-label":c.TABLE,children:Object(d.jsx)(i.a,{})})]})}!function(e){e.LIST="list",e.TABLE="table"}(c||(c={}))},330:function(e,a,t){"use strict";t.d(a,"a",(function(){return n}));var c=t(0);function n(e){var a=Object(c.useRef)();return Object(c.useEffect)((function(){a.current=e})),a.current}},335:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));t(0);var c=t(581),n=t(24),i=t(314),r=t(580),o=t(586),l=t(613),s=t(316),d=t(1);function u(e){var a=e.options,t=e.name,c=e.defaultValue,u=e.disabled,b=e.optionsLimit,j=void 0===b?100:b,m=e.label,v=e.required,O=void 0!==v&&v,h=e.multiple,p=void 0!==h&&h,g=Object(i.d)(),f=g.control,x=g.formState.errors,y=function(e,a){return Object(r.a)()(e,a).slice(0,j)};return Object(d.jsx)(i.a,{defaultValue:null!==c&&void 0!==c?c:null,rules:{required:!!O&&"Required"},render:function(e){var c;return Object(d.jsx)(o.a,Object(n.a)(Object(n.a)({},e),{},{value:null!==(c=e.field.value)&&void 0!==c?c:null,options:null!==a&&void 0!==a?a:[],filterOptions:y,getOptionLabel:function(e){return"string"===typeof e?e:e.value},onChange:function(a,t){e.field.onChange(t)},disabled:u,multiple:p,renderInput:function(e){var a,c;return Object(d.jsx)(l.a,Object(n.a)(Object(n.a)({},e),{},{variant:"outlined",color:"primary",margin:"dense",error:!!x[t],label:null!==m&&void 0!==m?m:Object(s.a)(t),helperText:(null!==(a=null===(c=x[t])||void 0===c?void 0:c.message)&&void 0!==a?a:O)?"Required":"Optional"}))}}))},name:t,control:f})}function b(e){var a=e.gqlOptions,t=e.name,n=e.defaultValue,i=e.multiple,r=e.disabled,o=e.helperText,l=e.required,s=e.label,b=Object(c.a)(a.query,{variables:a.variables,skip:r}).data;return Object(d.jsx)(u,{options:b?b[a.type]:[],name:t,helperText:o,defaultValue:n,multiple:i,disabled:r,required:l,label:s})}},353:function(e,a,t){"use strict";var c=t(102);Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=c(t(103)),i=t(1),r=(0,n.default)((0,i.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");a.default=r},354:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));t(0);var c=t(126),n=t(598),i=t(296),r=t(149),o=t(104),l=t(1),s=["species","gender","breed"];function d(){var e=Object(r.b)(),a=Object(r.c)((function(e){return e.filters})),t=Object.keys(a).filter((function(e){return s.includes(e)})).length>0,d=function(a,t){return Object(l.jsx)(c.a,{item:!0,children:Object(l.jsx)(n.a,{label:t.value,variant:"outlined",color:"primary",onDelete:function(){return function(a){e(Object(o.b)(a))}(a)}})},"".concat(a,"-").concat(t.id))};return t?Object(l.jsxs)(c.a,{container:!0,spacing:1,children:[Object.keys(a).map((function(e){if(a[e])return d(e,a[e])})),Object(l.jsx)(c.a,{item:!0,children:Object(l.jsx)(i.a,{onClick:function(){e(Object(o.c)())},color:"primary",size:"small",sx:{ml:2},children:"Clear"})})]}):null}},365:function(e,a,t){"use strict";t.d(a,"a",(function(){return ue}));var c,n=t(0),i=t.n(n),r=t(297),o=t(126),l=t(149),s=t(154),d=t(15),u=t(6),b=t(9),j=t(52),m=t(378),v=t.n(m),O=t(8),h=t(601),p=t(431),g=t(602),f=t(603),x=t(188),y=t(604),k=t(89),C=t(153),N=t(325),S=t(577),T=t(596);!function(e){e[e.DOG=0]="DOG",e[e.CAT=1]="CAT",e[e.RABBIT=2]="RABBIT",e[e.BIRD=3]="BIRD",e[e.GUINEAPIG=4]="GUINEAPIG",e[e.REPTILE=5]="REPTILE",e.UNDEFINED="undefined"}(c||(c={}));var w={1:c.DOG,2:c.CAT,4:c.RABBIT,10:c.BIRD,11:c.GUINEAPIG,13:c.REPTILE};var z=t(24),I=t(189),M=t(1);function A(e){return Object(M.jsxs)(I.a,Object(z.a)(Object(z.a)({},e),{},{children:[Object(M.jsx)("path",{d:"M17.195,22.989c-0.114,0-0.229,0-0.343,0c-0.231-0.104-0.374-0.288-0.503-0.501c-0.698-1.148-1.403-2.292-2.107-3.436 c-0.208-0.338-0.431-0.424-0.814-0.35c-0.378,0.072-0.758,0.151-1.141,0.183c-1.468,0.124-2.857-0.15-4.025-1.076 c-2.151-1.706-3.32-3.958-3.511-6.702c-0.037-0.535-0.214-0.749-0.747-0.791c-0.627-0.049-1.256-0.082-1.882-0.141 C1.668,10.132,1.444,9.819,1.512,9.37C1.533,9.229,1.55,9.086,1.571,8.945c0.104-0.707,0.162-1.424,0.324-2.118 c0.275-1.176,1.018-1.98,2.18-2.32C5.251,4.162,6.318,4.433,7.201,5.29c1.016,0.987,2.006,2,3.007,3.001 c0.028,0.028,0.052,0.061,0.106,0.125c-0.068,0.05-0.131,0.087-0.182,0.137C9.776,8.905,9.42,9.257,9.07,9.616 c-0.215,0.22-0.253,0.491-0.124,0.749c0.123,0.244,0.388,0.405,0.656,0.336c0.169-0.044,0.341-0.15,0.466-0.275 c3.025-3.014,6.042-6.035,9.065-9.051c0.138-0.138,0.31-0.243,0.466-0.363c0.1,0,0.2,0,0.3,0c0.092,0.052,0.205,0.086,0.273,0.16 c0.341,0.372,0.67,0.755,1.009,1.14c-0.087,0.092-0.139,0.149-0.194,0.204c-1.006,1.007-2.011,2.014-3.02,3.018 c-0.161,0.161-0.261,0.342-0.235,0.572c0.03,0.264,0.167,0.455,0.423,0.542c0.271,0.091,0.503,0.017,0.704-0.184 c0.925-0.926,1.852-1.85,2.774-2.778c0.054-0.054,0.078-0.137,0.116-0.207c0.041,0.016,0.082,0.032,0.123,0.048 c0.16,0.546,0.316,1.093,0.482,1.636c0.051,0.165,0.01,0.273-0.112,0.394C21.116,6.674,19.997,7.8,18.872,8.92 c-0.161,0.16-0.264,0.34-0.24,0.57c0.028,0.264,0.166,0.454,0.422,0.543c0.272,0.094,0.504,0.019,0.703-0.18 c0.849-0.85,1.699-1.699,2.549-2.548c0.053-0.053,0.11-0.101,0.193-0.178c-0.03,0.799-0.182,1.528-0.426,2.239 c-0.514,1.499-1.465,2.689-2.654,3.701c-1.048,0.892-2.266,1.415-3.64,1.51c-0.812,0.056-1.629,0.032-2.444,0.043 c-0.419,0.005-0.705,0.263-0.706,0.641c0,0.379,0.285,0.643,0.702,0.645c0.529,0.002,1.059-0.004,1.588,0.002 c0.82,0.009,1.625-0.083,2.418-0.298c0.074-0.02,0.196,0.016,0.251,0.071c1.391,1.381,2.776,2.767,4.16,4.154 c0.387,0.388,0.302,0.884-0.194,1.117c-0.691,0.325-1.387,0.642-2.079,0.965C18.716,22.273,17.956,22.632,17.195,22.989z M4.444,7.381c0.011-0.351-0.271-0.65-0.622-0.661C3.47,6.71,3.171,6.991,3.16,7.342C3.149,7.69,3.433,7.992,3.782,8.005 C4.128,8.017,4.433,7.73,4.444,7.381z"}),Object(M.jsx)("path",{d:"M12.688,1.011c0.799,0.392,1.55,0.855,2.189,1.482c0.218,0.214,0.424,0.44,0.621,0.645 c-1.447,1.447-2.872,2.872-4.312,4.312c-0.442-0.443-0.898-0.896-1.344-1.358C9.805,6.055,9.821,5.935,9.85,5.872 c0.547-1.187,1.1-2.371,1.652-3.556c0.121-0.259,0.254-0.513,0.36-0.778c0.103-0.255,0.264-0.436,0.524-0.527 C12.487,1.011,12.587,1.011,12.688,1.011z"})]}))}function D(e){return Object(M.jsx)(I.a,Object(z.a)(Object(z.a)({},e),{},{children:Object(M.jsx)("path",{d:"M1.217,19.325c0.113-0.419,0.238-0.831,0.516-1.181c0.619-0.779,1.437-1.063,2.403-0.971 c0.297,0.028,0.52,0.291,0.534,0.588c0.015,0.295-0.184,0.577-0.477,0.635c-0.17,0.034-0.348,0.025-0.523,0.034 c-0.624,0.033-1.114,0.493-1.182,1.109c-0.066,0.601,0.336,1.173,0.938,1.322C3.533,20.889,3.648,20.9,3.759,20.9 c0.983,0.002,1.965,0.001,2.948-0.001c0.046,0,0.092-0.009,0.161-0.016c-0.033-0.059-0.054-0.1-0.078-0.141 c-0.29-0.488-0.428-1.018-0.428-1.584c0-0.919-0.005-1.839,0.001-2.758c0.017-2.808,1.815-5.163,4.52-5.929 c0.621-0.176,1.254-0.212,1.895-0.219c0.247-0.003,0.513-0.038,0.735-0.138c0.597-0.267,0.865-0.765,0.877-1.413 c0.01-0.547-0.024-1.102,0.061-1.638c0.203-1.281,0.933-2.194,2.089-2.777c0.1-0.05,0.198-0.154,0.242-0.256 c0.253-0.585,0.49-1.177,0.729-1.768c0.084-0.208,0.222-0.357,0.442-0.415c0.4-0.104,0.777,0.173,0.788,0.59 c0.012,0.463,0.011,0.926,0.006,1.39c-0.002,0.141,0.042,0.192,0.185,0.211c1.033,0.14,1.813,0.665,2.344,1.563 c0.044,0.074,0.115,0.141,0.188,0.188c0.284,0.181,0.57,0.358,0.862,0.527c0.207,0.12,0.374,0.269,0.457,0.499 c0,0.098,0,0.197,0,0.295c-0.1,0.465-0.206,0.929-0.296,1.395c-0.05,0.255-0.164,0.451-0.382,0.601 c-0.353,0.242-0.698,0.495-1.036,0.757c-0.069,0.053-0.126,0.166-0.128,0.253c-0.012,0.533-0.001,1.067-0.008,1.6 c-0.023,1.788-0.568,3.4-1.629,4.84c-0.061,0.082-0.099,0.202-0.1,0.305c-0.008,0.737-0.004,1.474-0.004,2.211 c0,0.181,0,0.362,0,0.547c0.081,0.015,0.142,0.027,0.204,0.037c0.617,0.099,1.075,0.651,1.06,1.276 c-0.015,0.628-0.497,1.171-1.12,1.218c-0.383,0.029-0.771,0.018-1.156,0.003c-0.378-0.016-0.707-0.175-0.98-0.434 c-0.22-0.209-0.389-0.439-0.403-0.776c-0.046-1.105-0.894-2.018-1.992-2.17c-0.212-0.029-0.428-0.035-0.657-0.053 c0-0.088,0-0.164,0-0.241c-0.001-0.625,0.01-1.249-0.006-1.874c-0.051-2.02-1.809-3.724-3.831-3.724 c-0.395,0-0.677,0.253-0.685,0.615c-0.008,0.367,0.258,0.632,0.652,0.648c1.524,0.063,2.6,1.184,2.604,2.712 c0.002,0.821-0.002,1.642,0.002,2.463c0.002,0.423,0.262,0.679,0.685,0.682c0.302,0.003,0.604-0.006,0.905,0.003 c0.507,0.015,0.952,0.324,1.023,0.807c0.064,0.436,0.013,0.888,0.013,1.357c-0.101,0-0.205,0-0.309,0 c-3.228,0.001-6.456,0.002-9.684,0.001c-0.667,0-1.334,0.014-1.999-0.021c-0.749-0.039-1.344-0.396-1.805-0.987 c-0.27-0.346-0.39-0.752-0.502-1.164C1.217,19.775,1.217,19.55,1.217,19.325z M20.034,7.242c0.346,0.002,0.632-0.274,0.639-0.618 c0.007-0.346-0.291-0.647-0.638-0.643c-0.343,0.003-0.623,0.288-0.624,0.633C19.411,6.963,19.685,7.239,20.034,7.242z"})}))}function V(e){return Object(M.jsx)(I.a,Object(z.a)(Object(z.a)({},e),{},{children:Object(M.jsx)("path",{d:"M22.042,6.19l-2.2-0.887c-0.134-0.71-0.674-1.279-1.368-1.455l-0.119-1.371c-0.017-0.196-0.148-0.362-0.334-0.425 s-0.392-0.009-0.523,0.136l-0.575,0.635L16.57,1.587c-0.059-0.206-0.244-0.35-0.457-0.358c-0.214-0.007-0.408,0.124-0.481,0.325 l-3.046,8.403c-2.191,0.569-4.104,1.971-5.28,3.879c-1.076,1.747-1.411,3.75-0.941,5.638c0.274,1.103,0.795,1.83,1.328,2.307H7.274 c-0.004,0-0.008,0-0.012,0c-1.982,0.048-3.819-1.078-4.676-2.869c-0.118-0.246-0.413-0.35-0.658-0.232 c-0.246,0.118-0.35,0.413-0.232,0.658c1.004,2.097,3.131,3.431,5.446,3.431c0.046,0,9.424,0,9.424,0 c0.273,0,0.494-0.221,0.494-0.494c0-1.154-0.8-1.762-1.623-2.047h-2.14c-0.276,0-0.5-0.224-0.5-0.5V19.41 c0-1.465-1.192-2.656-2.657-2.656c-0.276,0-0.5-0.224-0.5-0.5s0.224-0.5,0.5-0.5c1.956,0,3.558,1.543,3.652,3.475h1.597 c0.116-0.475,0.132-0.894,0.101-1.202l0.129-0.017l2.959,4.537c0.091,0.14,0.247,0.224,0.414,0.224h1.797 c0.18,0,0.345-0.098,0.432-0.255s0.081-0.35-0.015-0.502c-0.019-0.03-1.874-2.975-2.871-4.624V9.096 c0.147,0.017,0.312,0.025,0.457,0.025c1.432,0,2.779-0.808,3.504-2.24c0.001-0.001,0.019-0.04,0.022-0.047 C22.417,6.58,22.295,6.292,22.042,6.19z M18.318,6.23c-0.349-0.002-0.623-0.279-0.623-0.628c0-0.345,0.281-0.63,0.624-0.633 c0.347-0.003,0.645,0.297,0.638,0.643C18.95,5.956,18.665,6.233,18.318,6.23z"})}))}function R(e){return Object(M.jsx)(I.a,Object(z.a)(Object(z.a)({},e),{},{children:Object(M.jsx)("path",{d:"M3.75,17.624h0.001c-0.244,0.324-0.376,0.719-0.376,1.125v0.375h-0.75v-0.375C2.626,18.128,3.129,17.625,3.75,17.624z M22.5,13.79v5.334H15v-0.75h-0.75v0.75H13.5v-0.375c0.001-0.621,0.504-1.124,1.125-1.125h1.5c0.207,0,0.375-0.168,0.375-0.375 c0.002-1.656,1.344-2.998,3-3h0.75v-0.75H19.5c-1.925,0.003-3.536,1.46-3.731,3.375h-1.144c-1.035,0.001-1.874,0.84-1.875,1.875 v0.375H9.155l1.235-1.235l-0.53-0.53l-1.765,1.765h-2.47v-0.75h-0.75v0.75h-0.75V18.75c0.001-0.621,0.504-1.124,1.125-1.125h1.5 c0.099,0,0.195-0.039,0.265-0.11l1.5-1.5l-0.53-0.53l-1.39,1.39H6.447l-0.308-0.429l-4.144-5.755 C1.672,10.245,1.499,9.708,1.5,9.157V8.999c0-0.207,0.168-0.375,0.375-0.375H2.25v-0.75H1.875c-0.124,0-0.247,0.02-0.364,0.061 c0.03-0.252,0.125-0.491,0.277-0.694c1.117-1.49,2.87-2.366,4.732-2.366c1.706,0,3.329,0.737,4.452,2.02 c0.545,0.623,1.332,0.98,2.159,0.98h3.453C19.85,7.878,22.496,10.524,22.5,13.79z M5.25,7.312c0-0.311-0.252-0.563-0.563-0.563 S4.124,7.001,4.124,7.312s0.252,0.563,0.563,0.563C4.998,7.874,5.25,7.622,5.25,7.312z M9.375,6.749h-0.75v1.125 c0,0.414-0.336,0.75-0.75,0.75c-0.414,0-0.75-0.336-0.75-0.75V5.999h-0.75v1.875c0,0.828,0.672,1.5,1.5,1.5s1.5-0.672,1.5-1.5 V6.749z M10.5,10.124H12v-0.75h-1.5V10.124z M13.125,10.874h-1.5v0.75h1.5V10.874z M15,10.124v-0.75h-1.5v0.75H15z M16.125,10.874 h-1.5v0.75h1.5V10.874z M18,9.374h-1.5v0.75H18V9.374z"})}))}function B(e){return Object(M.jsxs)(I.a,Object(z.a)(Object(z.a)({},e),{},{children:[Object(M.jsx)("path",{d:"M22.5,14.417c0,1.23,0,2.461,0,3.691c-0.012,0.031-0.031,0.06-0.035,0.092c-0.078,0.682-0.29,1.321-0.643,1.907 c-0.899,1.491-2.168,2.331-3.966,2.309c-2.084-0.026-4.169-0.006-6.254-0.006c-0.08,0-0.16,0-0.263,0c0-0.245-0.002-0.469,0-0.692 c0.006-0.638,0.432-1.064,1.071-1.067c0.601-0.003,1.203-0.001,1.804-0.002c0.47-0.001,0.707-0.234,0.708-0.704 c0.003-0.868-0.006-1.736,0.007-2.604c0.004-0.299,0.025-0.604,0.092-0.894c0.369-1.593,1.728-2.687,3.363-2.728 c0.4-0.01,0.672-0.263,0.67-0.622c-0.003-0.359-0.283-0.619-0.68-0.605c-0.272,0.009-0.546,0.035-0.814,0.08 c-2.049,0.348-3.719,2.19-3.837,4.261c-0.044,0.777-0.021,1.558-0.029,2.336c-0.001,0.079,0,0.157,0,0.249 c-0.435,0-0.838-0.013-1.239,0.005c-0.263,0.012-0.536,0.035-0.785,0.113c-0.927,0.289-1.532,1.114-1.558,2.088 c-0.007,0.257-0.001,0.513-0.001,0.774c-0.074,0.005-0.114,0.01-0.154,0.01c-2.447,0-4.894,0.001-7.341-0.002 c-0.113,0-0.232-0.024-0.339-0.063C1.89,22.203,1.655,21.802,1.712,21.4c0.058-0.414,0.387-0.739,0.815-0.761 c0.423-0.022,0.847-0.011,1.271-0.011c1.169-0.001,2.338,0.001,3.506-0.003c0.403-0.001,0.676-0.258,0.673-0.615 c-0.003-0.355-0.281-0.605-0.681-0.612c-0.055-0.001-0.109,0-0.164,0c-1.367,0-2.734-0.002-4.101,0.003 c-0.15,0.001-0.258-0.046-0.361-0.148c-0.439-0.435-0.776-0.936-0.964-1.527c-0.084-0.264-0.138-0.538-0.206-0.808 c0-0.26,0-0.52,0-0.779c0.014-0.059,0.031-0.118,0.041-0.178c0.216-1.268,0.872-2.223,2.023-2.813 c0.783-0.401,1.576-0.784,2.37-1.165c0.168-0.081,0.263-0.188,0.314-0.366c0.062-0.216,0.144-0.427,0.234-0.633 C7.59,8.43,9.035,6.083,10.847,3.967c0.713-0.832,1.485-1.605,2.386-2.239c0.227-0.16,0.465-0.201,0.709-0.055 c0.25,0.15,0.343,0.386,0.299,0.667c-0.079,0.498-0.147,1-0.262,1.491c-0.432,1.839-1.167,3.562-2.042,5.229 c-0.044,0.084-0.087,0.169-0.137,0.265c0.585-0.201,1.133-0.41,1.694-0.577C14.668,8.4,15.857,8.215,17.09,8.42 c2.509,0.416,4.613,2.352,5.203,4.831C22.385,13.634,22.432,14.028,22.5,14.417z M5.498,14.745c-0.426-0.002-0.742,0.205-0.8,0.526 c-0.064,0.35,0.142,0.681,0.489,0.728c0.365,0.049,0.836-0.089,0.913-0.525C6.169,15.086,5.89,14.747,5.498,14.745z"}),Object(M.jsx)("path",{d:"M14.188,7.257c0.274-0.827,0.558-1.686,0.847-2.544c0.017-0.05,0.065-0.11,0.113-0.127 c0.542-0.201,1.085-0.401,1.632-0.588c0.258-0.088,0.489-0.009,0.661,0.2c0.173,0.212,0.174,0.446,0.06,0.691 c-0.352,0.758-0.813,1.449-1.31,2.118c-0.032,0.043-0.095,0.082-0.147,0.087C15.415,7.154,14.785,7.206,14.188,7.257z"})]}))}function E(e){return Object(M.jsxs)(I.a,Object(z.a)(Object(z.a)({},e),{},{children:[Object(M.jsx)("path",{d:"M22.5,15.087c0-0.347-0.281-0.628-0.628-0.628h-0.196l0.086-0.086c0.245-0.245,0.245-0.643,0-0.888s-0.643-0.245-0.888,0 L19.9,14.459h-0.029c-0.744,0-1.447-0.325-1.93-0.891l-0.025-0.029c-0.263,0.335-0.546,0.648-0.848,0.938 c0.718,0.789,1.732,1.239,2.803,1.239H19.9l0.974,0.974c0.123,0.123,0.283,0.184,0.444,0.184s0.321-0.061,0.444-0.184 c0.245-0.245,0.245-0.643,0-0.888l-0.086-0.086h0.196C22.219,15.715,22.5,15.433,22.5,15.087z"}),Object(M.jsx)("path",{d:"M13.253,20.405l-0.745-1.159l0.006-0.028c0.177-0.815,0.081-1.655-0.263-2.398c-0.44,0.072-0.895,0.118-1.364,0.139 c0.405,0.579,0.551,1.298,0.4,1.991l-0.006,0.028l-1.159,0.745c-0.292,0.188-0.376,0.576-0.189,0.868 c0.188,0.292,0.576,0.376,0.868,0.189l0.103-0.066l-0.042,0.192c-0.074,0.339,0.141,0.673,0.48,0.747 c0.045,0.01,0.09,0.014,0.134,0.014c0.289,0,0.549-0.201,0.613-0.495l0.042-0.192l0.066,0.103 c0.12,0.187,0.322,0.289,0.529,0.289c0.116,0,0.234-0.032,0.339-0.1C13.356,21.085,13.44,20.696,13.253,20.405z"}),Object(M.jsx)("path",{d:"M4.671,9.017H4.642L3.668,8.043c-0.245-0.245-0.643-0.245-0.888,0c-0.245,0.245-0.245,0.643,0,0.888l0.086,0.086H2.67 c-0.347,0-0.628,0.281-0.628,0.628s0.281,0.628,0.628,0.628h0.196L2.78,10.359c-0.245,0.245-0.245,0.643,0,0.888 c0.123,0.123,0.283,0.184,0.444,0.184s0.321-0.061,0.444-0.184l0.974-0.974h0.029c0.38,0,0.75,0.085,1.084,0.244 c0.55-0.152,1.119-0.247,1.698-0.283C6.737,9.459,5.732,9.017,4.671,9.017z"}),Object(M.jsx)("path",{d:"M19.805,2.547c-0.762-0.385-1.748-0.248-2.776,0.387c-0.813,0.502-1.56,1.264-1.949,1.989 c-0.742,1.385-0.451,2.605-0.264,3.121c-0.862,2.727-2.828,3.902-5.847,3.495c-1.095-0.148-2.211-0.046-3.227,0.294 c-1.054,0.352-2.004,0.964-2.748,1.77c-1.283,1.388-1.753,3.12-1.359,5.008c0.29,1.39,0.952,2.375,0.98,2.416 c0.119,0.175,0.315,0.275,0.519,0.275c0.05,0,0.101-0.006,0.151-0.018c0.255-0.063,0.444-0.278,0.473-0.539 c0.003-0.029,0.344-2.884,2.102-4.5c0.224-0.206,1.07-0.862,2.563-0.66c2.971,0.401,5.397-0.111,7.208-1.522 c1.306-1.017,2.266-2.475,2.856-4.338c0.986-0.349,1.685-0.923,2.08-1.709C21.265,6.623,21.512,3.41,19.805,2.547z"}),Object(M.jsx)("path",{d:"M13.323,5.254c-0.245-0.245-0.643-0.245-0.888,0L12.349,5.34V5.144c0-0.347-0.281-0.628-0.628-0.628 s-0.628,0.281-0.628,0.628V5.34l-0.086-0.086c-0.245-0.245-0.643-0.245-0.888,0s-0.245,0.643,0,0.888l0.974,0.974v0.029 c0,1.004,0.396,1.959,1.096,2.666c0.339-0.228,0.627-0.529,0.87-0.907c-0.453-0.47-0.71-1.098-0.71-1.758V7.117 c0,0,0.87-0.87,0.974-0.974C13.427,6.038,13.697,5.628,13.323,5.254z"})]}))}var L={dynamicAvatar:"".concat("AnimalAvatar","-dynamicAvatar")};function F(e){var a=e.species;return Object(M.jsx)(T.a,{className:L.dynamicAvatar,"aria-label":"species and gender icon",children:q(a)})}var q=function(e){switch(function(e){return e&&e.id in w?w[e.id]:c.UNDEFINED}(e)){case c.DOG:return Object(M.jsx)(V,{});case c.CAT:return Object(M.jsx)(D,{});case c.RABBIT:return Object(M.jsx)(B,{});case c.BIRD:return Object(M.jsx)(A,{});case c.GUINEAPIG:return Object(M.jsx)(R,{});case c.REPTILE:return Object(M.jsx)(E,{});default:return Object(M.jsx)(S.a,{})}},P="AnimalCard",G={cardMediaWrapper:"".concat(P,"-cardMediaWrapper"),media:"".concat(P,"-media"),favoriteButton:"".concat(P,"-favoriteButton"),isFavorite:"".concat(P,"-isFavorite"),headerText:"".concat(P,"-headerText"),subHeaderText:"".concat(P,"-subHeaderText")},H=Object(O.a)(h.a)((function(e){var a,t=e.theme;return a={},Object(u.a)(a,"& .".concat(G.cardMediaWrapper),{position:"relative"}),Object(u.a)(a,"& .".concat(G.media),{zIndex:0}),Object(u.a)(a,"& .".concat(G.favoriteButton),{position:"absolute",top:t.spacing(2),right:t.spacing(2),zIndex:1,backgroundColor:"rgba(255, 255, 255, .3)","&:hover":{backgroundColor:"rgba(255, 255, 255, .6)"},"&:focus":{backgroundColor:"rgba(255, 255, 255, .6)"}}),Object(u.a)(a,"& .".concat(G.isFavorite),{color:"#D10C0C",backgroundColor:"rgba(255, 255, 255, .75)"}),Object(u.a)(a,"& .".concat(G.headerText),{maxWidth:150,fontSize:20,lineHeight:"24px",fontWeight:600}),Object(u.a)(a,"& .".concat(G.subHeaderText),{maxWidth:150,color:t.palette.grey[600]}),a}));function W(e){var a,t,c,i,r,s=e.animal,m=e.xs,O=void 0===m?12:m,h=e.sm,S=void 0===h?6:h,T=e.md,w=void 0===T?4:T,z=e.lg,I=void 0===z?4:z,A=Object(l.b)(),D=Object(n.useState)(!!s.isFavorite),V=Object(d.a)(D,2),R=V[0],B=V[1];null!==(a=s.registration)&&void 0!==a&&a.registrationDate?i=Object(N.b)(null===(r=s.registration)||void 0===r?void 0:r.registrationDate):i="n/d";var E=null===(t=s.details)||void 0===t?void 0:t.species,L=null===(c=s.details)||void 0===c?void 0:c.gender;return Object(M.jsx)(o.a,{item:!0,xs:O,sm:S,md:w,lg:I,children:Object(M.jsxs)(H,{children:[Object(M.jsxs)(p.a,{className:G.cardMediaWrapper,children:[Object(M.jsx)(g.a,{component:j.c,to:"/animal/".concat(s.id),children:Object(M.jsx)(f.a,{component:"img",className:G.media,image:s.imageUrl||"https://eu.ui-avatars.com/api/?name=".concat(s.name),title:"Animal picture"})}),Object(M.jsx)(x.a,{className:Object(b.a)(G.favoriteButton,Object(u.a)({},G.isFavorite,R)),onClick:function(){A(Object(C.d)({id:s.id,favorite:!R})),B(!R)},"aria-label":"add/remove favorite",children:Object(M.jsx)(v.a,{})})]}),Object(M.jsx)(y.a,{avatar:Object(M.jsx)(F,{species:E,gender:L}),title:Object(M.jsx)(k.a,{component:"h6",className:G.headerText,noWrap:!0,children:s.name}),subheader:Object(M.jsx)(k.a,{className:G.subHeaderText,noWrap:!0,children:i})})]})})}var U=i.a.memo(W),$=t(10),_=t(605),Q=t(229),J=t(606),Y=t(607),K=t(608),X=t(609),Z=t(610),ee=t(328),ae="AnimalsTable",te={headRow:"".concat(ae,"-headRow"),head:"".concat(ae,"-head"),row:"".concat(ae,"-row")},ce=Object(O.a)(_.a)((function(e){var a,t=e.theme;return a={width:"100%",backgroundColor:Object(Q.a)(t.palette.background.paper,.4)},Object(u.a)(a,te.headRow,{backgroundColor:Object(Q.a)(t.palette.primary.dark,.75)}),Object(u.a)(a,te.head,{color:t.palette.text.secondary}),Object(u.a)(a,te.row,{cursor:"pointer",textDecoration:"none"}),a}));function ne(e){var a=e.animals,t=Object($.g)();return Object(M.jsx)(J.a,{children:Object(M.jsxs)(ce,{size:"small","aria-label":"animals",children:[Object(M.jsx)(Y.a,{children:Object(M.jsxs)(K.a,{className:te.headRow,children:[Object(M.jsx)(X.a,{align:"center",className:te.head}),Object(M.jsx)(X.a,{align:"center",className:te.head,children:"Specie"}),Object(M.jsx)(X.a,{align:"center",className:te.head,children:"Name"}),Object(M.jsx)(X.a,{align:"center",className:te.head,children:"Breed"}),Object(M.jsx)(X.a,{align:"center",className:te.head,children:"Weight, kg"}),Object(M.jsx)(X.a,{align:"center",className:te.head,children:"Age"}),Object(M.jsx)(X.a,{align:"center",className:te.head,children:"Checked in"})]})}),Object(M.jsx)(Z.a,{children:a.map((function(e){var a,c;return Object(M.jsxs)(K.a,{hover:!0,onClick:function(){return a=null===e||void 0===e?void 0:e.id,void t("/animal/".concat(a));var a},className:te.row,children:[Object(M.jsx)(X.a,{align:"center",children:Object(M.jsx)(T.a,{alt:"Animal picture",src:null!==e&&void 0!==e&&e.imageUrl?null===e||void 0===e?void 0:e.imageUrl:"https://eu.ui-avatars.com/api/?name=".concat(null===e||void 0===e?void 0:e.name)})}),Object(M.jsx)(X.a,{align:"center",children:"Dog"}),Object(M.jsx)(X.a,{align:"center",children:null===e||void 0===e?void 0:e.name}),Object(M.jsx)(X.a,{align:"center",children:"Puddle"}),Object(M.jsx)(X.a,{align:"center",children:null===e||void 0===e||null===(a=e.details)||void 0===a?void 0:a.weight}),Object(M.jsx)(X.a,{align:"center",children:Object(ee.a)(null===e||void 0===e||null===(c=e.details)||void 0===c?void 0:c.birthDate)}),Object(M.jsx)(X.a,{align:"center",children:"check-in date"})]},null===e||void 0===e?void 0:e.id)}))})]})})}var ie=t(589),re="PaginationRounded",oe={toolbar:"".concat(re,"-toolbar"),actions:"".concat(re,"-actions")},le=Object(O.a)("div")((function(e){var a,t=e.theme;return a={marginTop:t.spacing(2)},Object(u.a)(a,oe.toolbar,{flexWrap:"wrap"}),Object(u.a)(a,oe.actions,Object(u.a)({},t.breakpoints.down("sm"),{margin:"0 auto"})),a}));function se(e){var a=e.count,t=e.page,c=e.onPageChange,n=e.pageSize,i=e.onPageSizeChange;return Object(M.jsx)(o.a,{container:!0,justifyContent:"flex-end",children:Object(M.jsx)(le,{children:Object(M.jsx)(ie.a,{component:"div",count:a,page:t,onPageChange:function(e,a){c(a)},rowsPerPage:n,rowsPerPageOptions:[4,12,48,192],onRowsPerPageChange:function(e){var a=parseInt(e.target.value,10);i(a)},classes:{toolbar:oe.toolbar,actions:oe.actions},labelRowsPerPage:"Items per page"})})})}var de=t(329);function ue(e){var a=e.viewType,t=Object(l.b)(),c=Object(l.c)((function(e){return e.animals})),n=c.loading,i=c.entities,d=c.pageInfo,u=Object(l.c)((function(e){return e.queryArgs})),b=u.currentPage,j=u.pageSize,m=(null===d||void 0===d?void 0:d.totalCount)||0;if("pending"===n)return Object(M.jsx)(r.a,{animation:"wave",variant:"rectangular",height:500,width:"100%"});if(0===m)return Object(M.jsx)("p",{children:"No data"});return Object(M.jsxs)(M.Fragment,{children:[a===de.a.TABLE?Object(M.jsx)(ne,{animals:i}):Object(M.jsx)(o.a,{container:!0,component:"ul",spacing:2,justifyContent:"center",children:i.map((function(e){return Object(M.jsx)(U,{animal:e},e.id)}))}),Object(M.jsx)(se,{count:m,page:b,onPageChange:function(e){t(e>b?Object(s.b)(d):Object(s.c)(d))},pageSize:j,onPageSizeChange:function(e){t(Object(s.e)(e))}})]})}},367:function(e,a,t){"use strict";t.d(a,"a",(function(){return w}));var c=t(24),n=t(15),i=t(0),r=t(314),o=t(389),l=t.n(o),s=t(40),d=t(230),u=t(126),b=t(188),j=t(616),m=t(431),v=t(582),O=t(296),h=t(617),p=t(618),g=t(149),f=t(104),x=t(330),y=t(335),k=t(1),C={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetSpecies"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"language"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"species"},arguments:[{kind:"Argument",name:{kind:"Name",value:"language"},value:{kind:"Variable",name:{kind:"Name",value:"language"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:107,source:{body:"query GetSpecies($language: String!) {\n    species(language: $language) {\n        id\n        value\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},N={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetGenders"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"language"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"genders"},arguments:[{kind:"Argument",name:{kind:"Name",value:"language"},value:{kind:"Variable",name:{kind:"Name",value:"language"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:107,source:{body:"query GetGenders($language: String!) {\n    genders(language: $language) {\n        id\n        value\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}},S={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"GetBreeds"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"species"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"language"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"breeds"},arguments:[{kind:"Argument",name:{kind:"Name",value:"species"},value:{kind:"Variable",name:{kind:"Name",value:"species"}}},{kind:"Argument",name:{kind:"Name",value:"language"},value:{kind:"Variable",name:{kind:"Name",value:"language"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",name:{kind:"Name",value:"id"},arguments:[],directives:[]},{kind:"Field",name:{kind:"Name",value:"value"},arguments:[],directives:[]}]}}]}}],loc:{start:0,end:143,source:{body:"query GetBreeds($species: String!, $language: String!) {\n    breeds(species: $species, language: $language) {\n        id\n        value\n    }\n}\n",name:"GraphQL request",locationOffset:{line:1,column:1}}}};function T(){var e=Object(r.d)(),a=e.control,t=e.setValue,c=Object(r.e)({control:a,name:"species",defaultValue:null}),n=Object(x.a)({species:c});return Object(i.useEffect)((function(){var e=void 0!==n&&null!==n.species&&n.species!==c;c&&!e||t("breed",null)}),[c,t]),Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(m.a,{marginTop:2.5,marginBottom:2.5,children:Object(k.jsx)(y.a,{name:"species",label:"Species",gqlOptions:{query:C,variables:{language:"lt"},type:"species"}})}),Object(k.jsx)(m.a,{marginTop:2.5,marginBottom:2.5,children:Object(k.jsx)(y.a,{name:"breed",label:"Breed",disabled:!c,gqlOptions:{query:S,variables:{species:((null===c||void 0===c?void 0:c.id)||"").toString(),language:"lt"},type:"breeds"}})}),Object(k.jsx)(m.a,{marginTop:2.5,marginBottom:2.5,children:Object(k.jsx)(y.a,{name:"gender",label:"Gender",gqlOptions:{query:N,variables:{language:"lt"},type:"genders"}})})]})}function w(){var e=Object(s.a)(),a=Object(d.a)(e.breakpoints.down("sm")),t=Object(i.useState)(!1),o=Object(n.a)(t,2),x=o[0],y=o[1],C=Object(g.b)(),N=Object(g.c)((function(e){return e.filters})),S=Object(g.c)((function(e){return e.animals.pageInfo||{}})).totalCount,w=Object(r.c)({defaultValues:N}),z=w.handleSubmit,I=w.reset,M=Object(i.useRef)(null);Object(i.useEffect)((function(){I(N)}),[N,I]);var A=function(){y(!1)};return Object(k.jsxs)(u.a,{container:!0,alignItems:"center",spacing:1,children:[Object(k.jsx)(u.a,{item:!0,children:S}),Object(k.jsx)(u.a,{item:!0,children:Object(k.jsx)(b.a,{"aria-label":"filter animal list","aria-haspopup":"true",onClick:function(){y(!0)},children:Object(k.jsx)(l.a,{color:"primary"})})}),Object(k.jsx)(j.a,{fullWidth:!0,maxWidth:"sm",open:x,fullScreen:a,onClose:A,"aria-labelledby":"filter-dialog-title",children:Object(k.jsxs)(r.b,Object(c.a)(Object(c.a)({},w),{},{children:[Object(k.jsxs)(m.a,{display:"flex",justifyContent:"space-between",alignItems:"center",marginRight:2.6,children:[Object(k.jsx)(v.a,{id:"filter-dialog-title",children:"Search Filters"}),Object(k.jsx)(O.a,{onClick:function(){I({})},color:"primary",children:"RESET ALL"})]}),Object(k.jsx)(h.a,{children:Object(k.jsx)(u.a,{component:"form",ref:M,children:Object(k.jsx)(T,{})})}),Object(k.jsx)(m.a,{marginBottom:2,marginRight:2,children:Object(k.jsxs)(p.a,{children:[Object(k.jsx)(O.a,{variant:"outlined",onClick:A,color:"primary",children:"Cancel"}),Object(k.jsx)(O.a,{variant:"contained",onClick:z((function(e){A(),C(Object(f.d)(e))})),color:"primary",autoFocus:!0,children:"Apply"})]})})]}))})]})}},594:function(e,a,t){"use strict";t.r(a);var c=t(15),n=t(0),i=t(10),r=t(126),o=t(239),l=t(431),s=t(365),d=t(353),u=t.n(d),b=t(8),j=t(6),m=t(5),v=t(2),O=t(9),h=t(145),p=t(293),g=t(17),f=t(11),x=t(125),y=t(146);function k(e){return Object(x.a)("MuiFab",e)}var C=Object(y.a)("MuiFab",["root","primary","secondary","extended","circular","focusVisible","disabled","colorInherit","sizeSmall","sizeMedium","sizeLarge"]),N=t(1),S=["children","className","color","component","disabled","disableFocusRipple","focusVisibleClassName","size","variant"],T=Object(b.a)(p.a,{name:"MuiFab",slot:"Root",overridesResolver:function(e,a){var t=e.ownerState;return[a.root,a[t.variant],a["size".concat(Object(g.a)(t.size))],"inherit"===t.color&&a.colorInherit,"primary"===t.color&&a.primary,"secondary"===t.color&&a.secondary]}})((function(e){var a,t=e.theme,c=e.ownerState;return Object(v.a)({},t.typography.button,(a={minHeight:36,transition:t.transitions.create(["background-color","box-shadow","border-color"],{duration:t.transitions.duration.short}),borderRadius:"50%",padding:0,minWidth:0,width:56,height:56,boxShadow:t.shadows[6],"&:active":{boxShadow:t.shadows[12]},color:t.palette.getContrastText(t.palette.grey[300]),backgroundColor:t.palette.grey[300],"&:hover":{backgroundColor:t.palette.grey.A100,"@media (hover: none)":{backgroundColor:t.palette.grey[300]},textDecoration:"none"}},Object(j.a)(a,"&.".concat(C.focusVisible),{boxShadow:t.shadows[6]}),Object(j.a)(a,"&.".concat(C.disabled),{color:t.palette.action.disabled,boxShadow:t.shadows[0],backgroundColor:t.palette.action.disabledBackground}),a),"small"===c.size&&{width:40,height:40},"medium"===c.size&&{width:48,height:48},"extended"===c.variant&&{borderRadius:24,padding:"0 16px",width:"auto",minHeight:"auto",minWidth:48,height:48},"extended"===c.variant&&"small"===c.size&&{width:"auto",padding:"0 8px",borderRadius:17,minWidth:34,height:34},"extended"===c.variant&&"medium"===c.size&&{width:"auto",padding:"0 16px",borderRadius:20,minWidth:40,height:40},"inherit"===c.color&&{color:"inherit"})}),(function(e){var a=e.theme,t=e.ownerState;return Object(v.a)({},"primary"===t.color&&{color:a.palette.primary.contrastText,backgroundColor:a.palette.primary.main,"&:hover":{backgroundColor:a.palette.primary.dark,"@media (hover: none)":{backgroundColor:a.palette.primary.main}}},"secondary"===t.color&&{color:a.palette.secondary.contrastText,backgroundColor:a.palette.secondary.main,"&:hover":{backgroundColor:a.palette.secondary.dark,"@media (hover: none)":{backgroundColor:a.palette.secondary.main}}})})),w=n.forwardRef((function(e,a){var t=Object(f.a)({props:e,name:"MuiFab"}),c=t.children,n=t.className,i=t.color,r=void 0===i?"default":i,o=t.component,l=void 0===o?"button":o,s=t.disabled,d=void 0!==s&&s,u=t.disableFocusRipple,b=void 0!==u&&u,j=t.focusVisibleClassName,p=t.size,x=void 0===p?"large":p,y=t.variant,C=void 0===y?"circular":y,w=Object(m.a)(t,S),z=Object(v.a)({},t,{color:r,component:l,disabled:d,disableFocusRipple:b,size:x,variant:C}),I=function(e){var a=e.color,t=e.variant,c=e.classes,n=e.size,i={root:["root",t,"size".concat(Object(g.a)(n)),"inherit"===a&&"colorInherit","primary"===a&&"primary","secondary"===a&&"secondary"]};return Object(h.a)(i,k,c)}(z);return Object(N.jsx)(T,Object(v.a)({className:Object(O.a)(I.root,n),component:l,disabled:d,focusRipple:!b,focusVisibleClassName:Object(O.a)(I.focusVisible,j),ownerState:z,ref:a},w,{children:c}))})),z=t(296),I=t(78),M=t(162),A=Object(b.a)(w)((function(e){var a=e.theme;return{position:"fixed",zIndex:a.zIndex.appBar+1,right:a.spacing(4),bottom:M.a,transform:"translateY(50%)"}}));function D(){var e=Object(i.g)(),a=function(){e("/animal/new")};return Object(I.a)()?Object(N.jsx)(A,{color:"primary","aria-label":"add",onClick:a,children:Object(N.jsx)(u.a,{})}):Object(N.jsx)(z.a,{variant:"contained",color:"primary",onClick:a,startIcon:Object(N.jsx)(u.a,{}),children:"Create"})}var V=t(354),R=t(367),B=t(329),E=t(149),L=t(153),F=t(154),q=t(151);function P(e){var a=e.viewType,t=e.onChange,c=e.mobile;return Object(N.jsxs)(r.a,{container:!0,spacing:0,alignItems:"center",children:[Object(N.jsxs)(r.a,{container:!0,item:!0,xs:10,alignItems:"center",spacing:0,children:[Object(N.jsx)(D,{}),!c&&Object(N.jsx)(o.a,{flexItem:!0,orientation:"vertical",sx:{mx:2}}),Object(N.jsx)(l.a,{alignItems:"center",children:Object(N.jsx)(R.a,{})}),Object(N.jsx)(l.a,{alignItems:"center",ml:2,children:Object(N.jsx)(V.a,{})})]}),!c&&Object(N.jsx)(r.a,{item:!0,xs:2,style:{textAlign:"right"},children:Object(N.jsx)(B.b,{value:a,onChange:t})})]})}a.default=function(){var e=Object(E.b)(),a=Object(n.useState)(B.a.LIST),t=Object(c.a)(a,2),r=t[0],o=t[1],l=Object(E.c)((function(e){return e.queryArgs})).query,d=Object(I.a)(),u=Object(i.f)("/animal-list"),b=Object(i.e)();return Object(n.useEffect)((function(){d&&r===B.a.TABLE&&o(B.a.LIST)}),[d,r]),Object(n.useEffect)((function(){e(Object(F.d)())}),[e,b.pathname]),Object(n.useEffect)((function(){u&&e(Object(L.c)())}),[e,l]),Object(N.jsx)(q.a,{title:"Animals List",topSection:Object(N.jsx)(P,{viewType:r,onChange:function(){o(r===B.a.TABLE?B.a.LIST:B.a.TABLE)},mobile:d}),children:Object(N.jsx)(s.a,{viewType:r})})}}}]);
//# sourceMappingURL=9.ac9743ae.chunk.js.map