(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{147:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return o}));var n=a(1),r=(a(0),a(172));const l={id:"modal-api",title:"Modal",sidebar_label:"Modal"},c={id:"modal-api",title:"Modal",description:"## `showModal()`",source:"@site/docs/api-modal.mdx",permalink:"/react-native-navigation/docs/modal-api",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/api-modal.mdx",sidebar_label:"Modal",sidebar:"api",previous:{title:"Stack",permalink:"/react-native-navigation/docs/stack-api"},next:{title:"Overlay",permalink:"/react-native-navigation/docs/overlay-api"}},b=[{value:"<code>showModal()</code>",id:"showmodal",children:[]},{value:"<code>dismissModal()</code>",id:"dismissmodal",children:[]},{value:"<code>dismissAllModals()</code>",id:"dismissallmodals",children:[]}],i={rightToc:b};function o({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},i,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"showmodal"},Object(r.b)("inlineCode",{parentName:"h2"},"showModal()")),Object(r.b)("p",null,"Show a screen as a modal."),Object(r.b)("h4",{id:"parameters"},"Parameters"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"layout"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/react-native-navigation/docs/layout"}),"Layout")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Any type of layout. ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/react-native-navigation/docs/bottomTabs-layout"}),"BottomTabs"),", ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/react-native-navigation/docs/stack-layout"}),"Stack"),", ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/react-native-navigation/docs/sideMenu-layout"}),"SideMenu"),", ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/react-native-navigation/docs/component-layout"}),"Component"))))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Navigation.showModal({\n  stack: {\n    children: [{\n      component: {\n        name: 'example.ModalScreen',\n        passProps: {\n          text: 'stack with one child'\n        },\n        options: {\n          topBar: {\n            title: {\n              text: 'Modal'\n            }\n          }\n        }\n      }\n    }]\n  }\n});\n")),Object(r.b)("h2",{id:"dismissmodal"},Object(r.b)("inlineCode",{parentName:"h2"},"dismissModal()")),Object(r.b)("p",null,"Dismiss the current modal."),Object(r.b)("h4",{id:"parameters-1"},"Parameters"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"componentId"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Any component id presented in the modal")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mergeOptions"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Options"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Options to be merged before dismissing the Modal.")))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Navigation.dismissModal(this.props.componentId);\n")),Object(r.b)("h2",{id:"dismissallmodals"},Object(r.b)("inlineCode",{parentName:"h2"},"dismissAllModals()")),Object(r.b)("p",null,"Dismiss all current modals at the same time."),Object(r.b)("h4",{id:"parameters-2"},"Parameters"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"mergeOptions"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Options"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Options to be merged before dismissing all modals.")))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Navigation.dismissAllModals();\n")))}o.isMDXComponent=!0},172:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},p=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=d(a),m=n,O=p["".concat(c,".").concat(m)]||p[m]||s[m]||l;return a?r.a.createElement(O,b({ref:t},o,{components:a})):r.a.createElement(O,b({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=m;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:n,c[1]=b;for(var o=2;o<l;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);