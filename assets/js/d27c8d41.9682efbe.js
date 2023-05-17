"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[149],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(t),g=a,m=p["".concat(c,".").concat(g)]||p[g]||d[g]||s;return t?n.createElement(m,i(i({ref:r},u),{},{components:t})):n.createElement(m,i({ref:r},u))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,i=new Array(s);i[0]=g;var o={};for(var c in r)hasOwnProperty.call(r,c)&&(o[c]=r[c]);o.originalType=e,o[p]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8209:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=t(7462),a=(t(7294),t(3905));const s={sidebar_position:6},i="Data Structures",o={unversionedId:"lox-basics/data-structures",id:"lox-basics/data-structures",title:"Data Structures",description:"Lox has 3 data structures: Strings, Numbers, Arrays",source:"@site/docs/lox-basics/data-structures.md",sourceDirName:"lox-basics",slug:"/lox-basics/data-structures",permalink:"/Lox/docs/lox-basics/data-structures",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Functions",permalink:"/Lox/docs/lox-basics/functions"},next:{title:"Standard Library",permalink:"/Lox/docs/lox-basics/standard-library"}},c={},l=[{value:"Strings",id:"strings",level:2},{value:"Numbers",id:"numbers",level:2},{value:"Arrays",id:"arrays",level:2}],u={toc:l},p="wrapper";function d(e){let{components:r,...t}=e;return(0,a.kt)(p,(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"data-structures"},"Data Structures"),(0,a.kt)("p",null,"Lox has 3 data structures: Strings, Numbers, Arrays"),(0,a.kt)("h2",{id:"strings"},"Strings"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// variable declaration with string value "Fritz";\nvar name = "Fritz";\n\n// string concatenation\nname = name + " Muller"; // Fritz Muller\n')),(0,a.kt)("h2",{id:"numbers"},"Numbers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// variable declaration with number value 18;\nvar age = 18;\n\n// multiplication\nage = age * 2;\n\n// division\nage = age / 2;\n\n// addition\nage = age + 1;\n\n// subtraction\nage = age - 1;\n\nprint age; // 18\n")),(0,a.kt)("h2",{id:"arrays"},"Arrays"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// variable declaration with array value ["Servus"];\nvar greetings = ["Servus"];\n\n// adds value to the end\npush(greetings, "Gruss Got");\n\n// removes last array value\npop(greetings);\n\n// adds item in front of array\nunshift(greetings, "Hallo");\n\n// removes 1 array item\nshift(greetings);\n\n// prints array length\nprint len(greetings);\n')))}d.isMDXComponent=!0}}]);