(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{121:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return b}));var n=a(1),r=(a(0),a(172));const o={id:"overlay-api",title:"Overlay",sidebar_label:"Overlay"},c={id:"overlay-api",title:"Overlay",description:"## `showOverlay()`",source:"@site/docs/api-overlay.mdx",permalink:"/react-native-navigation/docs/overlay-api",editUrl:"https://github.com/wix/react-native-navigation/edit/master/website/docs/docs/api-overlay.mdx",sidebar_label:"Overlay",sidebar:"api",previous:{title:"Modal",permalink:"/react-native-navigation/docs/modal-api"},next:{title:"Layout",permalink:"/react-native-navigation/docs/layout"}},i=[{value:"<code>showOverlay()</code>",id:"showoverlay",children:[]},{value:"<code>dismissOverlay()</code>",id:"dismissoverlay",children:[]}],l={rightToc:i};function b({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"showoverlay"},Object(r.b)("inlineCode",{parentName:"h2"},"showOverlay()")),Object(r.b)("p",null,"Shows a component as an overlay."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"layout"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/react-native-navigation/docs/layout"}),"Layout")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Any type of layout. Typically, Component layout is used in Overlays but it's possible to load any other layout (",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/react-native-navigation/docs/bottomTabs-layout"}),"BottomTabs"),", ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/react-native-navigation/docs/stack-layout"}),"Stack"),", ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/react-native-navigation/docs/sideMenu-layout"}),"SideMenu"),", ",Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/react-native-navigation/docs/component-layout"}),"Component"),")")))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Navigation.showOverlay({\n  component: {\n    name: 'example.Overlay',\n    options: {\n      overlay: {\n        interceptTouchOutside: true\n      }\n    }\n  }\n});\n")),Object(r.b)("h2",{id:"dismissoverlay"},Object(r.b)("inlineCode",{parentName:"h2"},"dismissOverlay()")),Object(r.b)("p",null,"Dismisses an overlay matching the given overlay componentId."),Object(r.b)("h4",{id:"parameters"},"Parameters"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"componentId"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The component id presented in Overlay")))),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"Navigation.dismissOverlay(this.props.componentId);\n")))}b.isMDXComponent=!0},172:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},u=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(a),O=n,d=u["".concat(c,".").concat(O)]||u[O]||s[O]||o;return a?r.a.createElement(d,i({ref:t},b,{components:a})):r.a.createElement(d,i({ref:t},b))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=O;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var b=2;b<o;b++)c[b]=a[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);