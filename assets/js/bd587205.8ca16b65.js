"use strict";(self.webpackChunklun_dao=self.webpackChunklun_dao||[]).push([[2877],{3905:function(A,e,t){t.d(e,{Zo:function(){return d},kt:function(){return u}});var n=t(7294);function a(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function r(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function l(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function i(A,e){if(null==A)return{};var t,n,a=function(A,e){if(null==A)return{};var t,n,a={},r=Object.keys(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(a[t]=A[t]);return a}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(a[t]=A[t])}return a}var p=n.createContext({}),o=function(A){var e=n.useContext(p),t=e;return A&&(t="function"==typeof A?A(e):l(l({},e),A)),t},d=function(A){var e=o(A.components);return n.createElement(p.Provider,{value:e},A.children)},c={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(A,e){var t=A.components,a=A.mdxType,r=A.originalType,p=A.parentName,d=i(A,["components","mdxType","originalType","parentName"]),m=o(t),u=a,s=m["".concat(p,".").concat(u)]||m[u]||c[u]||r;return t?n.createElement(s,l(l({ref:e},d),{},{components:t})):n.createElement(s,l({ref:e},d))}));function u(A,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof A||a){var r=t.length,l=new Array(r);l[0]=m;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=A,i.mdxType="string"==typeof A?A:a,l[1]=i;for(var o=2;o<r;o++)l[o]=t[o];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1332:function(A,e,t){t.r(e),t.d(e,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return o},assets:function(){return d},toc:function(){return c},default:function(){return u}});var n=t(7462),a=t(3366),r=(t(7294),t(3905)),l=["components"],i={title:"Diamond 101 (1)",description:"EIP-2535 Diamond Contract",slug:"diamond101",tags:["eip2535","diamond","proxy"],authors:"wiasliaw"},p=void 0,o={permalink:"/blog/diamond101",editUrl:"https://github.com/lun-dao/LunDAO/tree/main/blog/2022-04-20-diamond101/diamond101-1.md",source:"@site/blog/2022-04-20-diamond101/diamond101-1.md",title:"Diamond 101 (1)",description:"EIP-2535 Diamond Contract",date:"2022-04-20T00:00:00.000Z",formattedDate:"April 20, 2022",tags:[{label:"eip2535",permalink:"/blog/tags/eip-2535"},{label:"diamond",permalink:"/blog/tags/diamond"},{label:"proxy",permalink:"/blog/tags/proxy"}],readingTime:5.995,truncated:!0,authors:[{name:"wiasliaw",url:"https://github.com/wiasliaw",imageURL:"https://github.com/wiasliaw.png",key:"wiasliaw"}],prevItem:{title:"Hardhat \u7c21\u4ecb",permalink:"/blog/hardhat-intro"},nextItem:{title:"Hardhat mainnet forking\uff1a\u4e3b\u7db2\u5206\u53c9 (1)",permalink:"/blog/hardhat-forking-1"}},d={authorsImageUrls:[void 0]},c=[{value:"Proxy \u7684\u7d44\u6210",id:"proxy-\u7684\u7d44\u6210",children:[{value:"Delegatecall",id:"delegatecall",children:[],level:3},{value:"fallback \u8207 receive",id:"fallback-\u8207-receive",children:[],level:3}],level:2},{value:"Transparent Proxy",id:"transparent-proxy",children:[],level:2},{value:"UUPS",id:"uups",children:[],level:2},{value:"Diamond",id:"diamond",children:[],level:2},{value:"Reference",id:"reference",children:[],level:2}],m={toc:c};function u(A){var e=A.components,i=(0,a.Z)(A,l);return(0,r.kt)("wrapper",(0,n.Z)({},m,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u6587\u70ba Diamond 101 \u7cfb\u5217\u7684\u7b2c\u4e00\u7bc7\u6587\u7ae0\uff0c\u5c07\u89e3\u91cb\u4ec0\u9ebc\u662f\u53ef\u5347\u7d1a\u5408\u7d04\u3001\u5e38\u898b\u7684\u5be6\u4f5c\u4ee5\u53ca\u4e0d\u540c\u5be6\u4f5c\u4e4b\u9593\u7684\u8a2d\u8a08\u3002"),(0,r.kt)("h2",{id:"proxy-\u7684\u7d44\u6210"},"Proxy \u7684\u7d44\u6210"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(4429).Z})),(0,r.kt)("p",null,"\u53ef\u5347\u7d1a\u5408\u7d04\u9867\u540d\u601d\u7fa9\u5c31\u662f\u53ef\u4ee5\u66f4\u65b0\u908f\u8f2f\u7684\u5408\u7d04\uff0c\u5be6\u4f5c\u5927\u591a\u57fa\u65bc Proxy\u3002Proxy \u662f\u4e00\u7a2e Solidity \u7684 design pattern\uff0c\u5c07\u8cc7\u6599\u8207\u908f\u8f2f\u5206\u958b\u8655\u7406\uff0c\u53ea\u8981\u80fd\u66ff\u63db\u6389\u908f\u8f2f\uff0c\u5c31\u80fd\u5347\u7d1a\u3002"),(0,r.kt)("h3",{id:"delegatecall"},"Delegatecall"),(0,r.kt)("p",null,"\u9996\u5148\u9700\u8981\u5148\u4f86\u88dc\u5145\u4e00\u9ede\u80cc\u666f\u77e5\u8b58\u3002\u76ee\u524d\u6240\u6709\u7684 Proxy \u90fd\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"delegatecall")," \u7684\u61c9\u7528\u3002\u7c21\u55ae\u8aaa\u660e ",(0,r.kt)("inlineCode",{parentName:"p"},"delegatecall")," \u5c31\u662f\u4ee5\u5225\u7684\u5408\u7d04\u7684\u51fd\u5f0f\u4f86\u64cd\u4f5c\u767c\u51fa ",(0,r.kt)("inlineCode",{parentName:"p"},"delegatecall")," \u7684\u5408\u7d04\u7684 storage\u3002\u800c\u4e00\u822c\u7684\u5408\u7d04\u8abf\u7528\u5247\u662f\u4ee5\u81ea\u5df1\u7684\u51fd\u5f0f\u64cd\u4f5c\u81ea\u5df1\u7684 storage\u3002\u8209\u4f8b\u4f86\u8aaa\uff0c\u7576 A \u5408\u7d04\u5c0d B \u5408\u7d04\u8abf\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"delegatecall")," \u6642\uff0cB \u5408\u7d04\u7684\u51fd\u5f0f\u6703\u88ab\u8abf\u7528\uff0c\u4f46\u662f\u5c0d storage \u7684\u5beb\u5165\u90fd\u6703\u57f7\u884c A \u5408\u7d04\u4e0a\u3002\u9644\u4e0a",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/5a75065659a65e65bb04890192e3a4bcb7917fff/contracts/proxy/Proxy.sol#L22-L45"},"\u5e38\u898b\u7684 delegatecall \u5be6\u4f5c"),"\u3002"),(0,r.kt)("p",null,"Delegatecall \u4e5f\u884d\u751f\u51fa\u4e0d\u5c11\u6709\u8da3\u7684 EIP\uff0c\u4f8b\u5982 ",(0,r.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-1167"},"EIP-1167"),"\uff0c\u4ee5\u6700\u5c0f\u7684\u6210\u672c\u8907\u88fd\u4e00\u500b\u5408\u7d04\u3002"),(0,r.kt)("h3",{id:"fallback-\u8207-receive"},"fallback \u8207 receive"),(0,r.kt)("p",null,"\u6709\u95dc\u5408\u7d04\u8abf\u7528\u7684\u4ea4\u6613 (transaction) \u7684 data \u6b04\u4f4d\u4e0d\u6703\u7a7a\u8457\uff0c\u524d\u9762 4 \u500b bytes \u70ba function selector\uff0c\u7528\u4f86\u8b93 EVM \u77e5\u9053\u8981\u57f7\u884c\u5408\u7d04\u4e2d\u7684\u54ea\u6bb5 bytecode\u3002\u8981\u662f\u6c92\u6709 function selector \u6216\u662f function selector \u4e0d\u5728\u5408\u7d04\u4e2d\u600e\u9ebc\u8fa6\uff1f\u9019\u6642\u5247\u6703\u770b\u5408\u7d04\u6709\u6c92\u6709\u5be6\u4f5c ",(0,r.kt)("inlineCode",{parentName:"p"},"fallback")," \u6216\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"receive"),"\uff0c\u5169\u8005\u89f8\u767c\u7684\u689d\u4ef6\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"fallback"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5408\u7d04\u4e2d\u6c92\u6709\u5c0d\u61c9\u7684 function selector"),(0,r.kt)("li",{parentName:"ul"},"\u6c92\u6709 receive \u6642"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"receive"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4ea4\u6613\u7684 data \u70ba\u7a7a (\u4e0d\u7ba1 value \u70ba\u591a\u5c11)")))),(0,r.kt)("p",null,"Proxy \u5408\u7d04\u4e2d\u4e0d\u6703\u7d00\u9304\u908f\u8f2f\u5408\u7d04 (logic contract) \u6bcf\u4e00\u500b function selector\uff0c\u5c31\u6703\u5229\u7528 fallback \u7684\u7279\u6027\u8655\u7406\u6240\u6709\u7684\u5408\u7d04\u8abf\u7528\uff0c\u5c07\u6240\u6709\u7684\u5408\u7d04\u8abf\u7528\u90fd delegatecall \u81f3\u908f\u8f2f\u5408\u7d04 (logic contract)\u3002\u53ef\u4ee5\u4f86\u770b\u4e00\u4e0b ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/proxy/Proxy.sol"},"Openzeppelin")," \u63d0\u4f9b\u7684\u5be6\u4f5c\uff0c\u5c31\u662f delegatecall \u8ddf fallback, receive \u7684\u7d44\u5408\u62f3\u3002"),(0,r.kt)("h2",{id:"transparent-proxy"},"Transparent Proxy"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(7608).Z})),(0,r.kt)("p",null,"\u67b6\u69cb\u5716\u5982\u4e0a\uff0c\u4f86\u770b\u4e00\u4e0b Openzeppelin \u7684\u4ecb\u7d39"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The way we deal with this problem is via the transparent proxy pattern. The goal of a transparent proxy is to be indistinguishable by a user from the actual logic contract.")),(0,r.kt)("p",null,"\u9019\u662f\u4f55\u610f\u5462\uff1f\u4e3b\u8981\u662f\u8981\u8b93\u4f7f\u7528\u8005\u8ddf\u908f\u8f2f\u5408\u7d04 (logic contract) \u7dca\u7dca\u9023\u7d50\u5728\u4e00\u8d77\uff0c\u4e0d\u904e\u9019\u6a23\u5beb\u4e5f\u5f88\u8b93\u4eba\u96e3\u61c2\u3002\u7c21\u55ae\u4f86\u8aaa\u5c31\u662f\u4f7f\u7528\u8005\u6240\u767c\u8d77\u7684\u5408\u7d04\u8abf\u7528\u90fd\u8981\u4ee5 delegatecall \u8abf\u7528\u908f\u8f2f\u5408\u7d04 (logic contract)\uff0c\u800c admin \u6240\u767c\u8d77\u7684\u5408\u7d04\u8abf\u7528\u6c38\u9060\u4e0d\u6703\u5230\u908f\u8f2f\u5408\u7d04\u3002"),(0,r.kt)("p",null,"\u793a\u610f\u5716\u5982\u4e0b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"msg.sender"),(0,r.kt)("th",{parentName:"tr",align:null},"owner()"),(0,r.kt)("th",{parentName:"tr",align:null},"upgradeTo()"),(0,r.kt)("th",{parentName:"tr",align:null},"transfer()"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"admin"),(0,r.kt)("td",{parentName:"tr",align:null},"returns proxy.owner"),(0,r.kt)("td",{parentName:"tr",align:null},"upgrades proxy"),(0,r.kt)("td",{parentName:"tr",align:null},"reverts")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user"),(0,r.kt)("td",{parentName:"tr",align:null},"returns ERC20 owner"),(0,r.kt)("td",{parentName:"tr",align:null},"reverts"),(0,r.kt)("td",{parentName:"tr",align:null},"sends ERC20 transfer")))),(0,r.kt)("p",null,"Openzeppelin \u63a1\u7528 EIP-1967 \u4f5c\u70ba\u5be6\u4f5c\u3002\u5be6\u4f5c\u4e0a\uff0cProxy \u88e1\u9762\u7684\u6bcf\u500b\u7ba1\u7406 proxy \u7684 function \u90fd\u6703\u52a0\u4e0a\u8eab\u4efd\u9a57\u8b49\u7684\u6d41\u7a0b\uff0c\u53ea\u8b93 admin \u53ef\u4ee5\u8abf\u7528\u3002\u4f46\u662f\u70ba\u4f55\u9084\u8981\u4e00\u500b\u800c ProxyAdmin \u5462\uff1fProxyAdmin \u4e3b\u8981\u7528\u9014\u662f\u70ba\u4e86\u57f7\u884c\u67e5\u8a62\u7684\u7528\u9014\u9084\u6709\u8b93 owner \u89e3\u653e\u3002"),(0,r.kt)("p",null,"\u8209\u500b\u4f8b\u5b50\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"admin()")," \u61c9\u8a72\u8981\u662f\u500b ",(0,r.kt)("inlineCode",{parentName:"p"},"view function")," \u4f46\u662f\u56e0\u70ba fallback \u7684\u95dc\u4fc2\u4e0d\u80fd\u6a19\u793a ",(0,r.kt)("inlineCode",{parentName:"p"},"view"),"\uff0c\u9700\u8981\u5229\u7528\u53e6\u5916\u4e00\u500b\u5408\u7d04\u518d\u5305\u88dd\u4e00\u5c64\u624d\u80fd\u6a19\u793a ",(0,r.kt)("inlineCode",{parentName:"p"},"view"),"\u3002\u6b64\u5916 admin \u4e5f\u53ef\u80fd\u540c\u6642\u662f user\uff0c\u628a\u6b0a\u9650\u4ea4\u7d66 ProxyAdmin \u540c\u6642\u6709\u66f4\u597d\u7684 function interface \u53ef\u4ee5\u8abf\u7528\uff0c\u4e5f\u53ef\u4ee5\u8b93 admin \u89e3\u958b\u9650\u5236\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Proxy \u4e2d admin function \u7684\u8209\u4f8b")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"modifier ifAdmin() {\n    if (msg.sender == _getAdmin()) {\n        _;\n    } else {\n        _fallback();\n    }\n}\n\nfunction admin() external ifAdmin returns (address admin_) {\n    admin_ = _getAdmin();\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"ProxyAdmin \u4e2d\u5c0d admin function \u7684\u5c01\u88dd")),(0,r.kt)("p",null,"\u8ddf ",(0,r.kt)("inlineCode",{parentName:"p"},"staticcall")," \u4e00\u8d77\u4f7f\u7528\uff0c\u624d\u80fd\u6a19\u793a\u70ba ",(0,r.kt)("inlineCode",{parentName:"p"},"view")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'function getProxyAdmin(TransparentUpgradeableProxy proxy) public view virtual returns (address) {\n    (bool success, bytes memory returndata) = address(proxy).staticcall(hex"f851a440");\n    require(success);\n    return abi.decode(returndata, (address));\n}\n')),(0,r.kt)("h2",{id:"uups"},"UUPS"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(3421).Z})),(0,r.kt)("p",null,"UUPS \u7684\u898f\u683c\u548c\u4ecb\u9762\u662f\u57fa\u65bc EIP-1822\uff0c\u4e0d\u904e Openzeppelin \u4e5f\u662f\u548c EIP-1967 \u642d\u914d\u4f5c\u70ba\u5be6\u4f5c\u3002Transparent Proxy \u6700\u5927\u7684\u5dee\u7570\u5728\u505a upgrade \u7684\u51fd\u5f0f\u540c\u6a23\u4e5f\u653e\u5728\u908f\u8f2f\u5408\u7d04\u4e2d\uff0c\u8b93 Proxy \u53ea\u7559 fallback \u548c receive\u3002\u5347\u7d1a\u5408\u7d04\u4e5f\u9700\u8981\u900f\u904e delegatecall \u8abf\u7528\u908f\u8f2f\u5408\u7d04\u3002\u5408\u7d04\u67b6\u69cb\u66f4\u70ba\u7cbe\u7c21\uff0c\u4e0d\u7528\u984d\u5916\u7684\u8eab\u4efd\u9a57\u8b49\u6216\u662f\u984d\u5916\u7684 Admin \u5408\u7d04\u3002"),(0,r.kt)("h2",{id:"diamond"},"Diamond"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(6986).Z})),(0,r.kt)("p",null,"Diamond \u600e\u9ebc\u5347\u7d1a\u8ddf Transparent Proxy \u8ddf UUPS \u622a\u7136\u4e0d\u540c\u3002Transparent Proxy \u8ddf UUPS \u6bcf\u6b21\u66f4\u65b0\u90fd\u9700\u8981\u5c07\u6574\u4efd\u5408\u7d04\u66f4\u65b0\uff0c\u9664\u4e86\u4e0d\u9700\u8981\u66f4\u65b0\u7684\u90e8\u5206\u4e5f\u9023\u5e36\u66f4\u65b0\u4e86\uff0c\u800c\u4e14\u56e0\u70ba\u5408\u7d04\u5927\u5c0f\u6709\u4e0a\u9650 (EIP-170) \u4e5f\u4e0d\u80fd\u5728\u55ae\u500b\u5408\u7d04\u4e00\u76f4\u589e\u52a0\u65b0\u7684\u908f\u8f2f\u3002\u6240\u4ee5\u6709\u4eba\u63d0\u51fa\u4e86 EIP-2535\uff0c\u4e3b\u8981\u662f\u5efa\u7acb\u4e00\u5f35\u8868\u4f86\u8a3b\u518a\u4e0d\u540c\u7684 function selector\u3002\u6709\u8da3\u7684\u5730\u65b9\u5728\u65bc\u53ef\u4ee5\u8a3b\u518a\u4e0d\u540c\u5408\u7d04\u7684 function selector\u3002\u4e5f\u5c31\u662f\u8aaa delegatecall \u53ef\u4ee5\u8abf\u7528\u7684\u5408\u7d04\u4e0d\u53ea\u9650\u65bc\u4e00\u500b\u3002\u9664\u4e86\u5f48\u6027\u8b8a\u5927\u4e4b\u5916\uff0c\u4e5f\u53ef\u4ee5\u53ea\u65b0\u589e\u6216\u662f\u4fee\u6539\u5176\u4e2d\u4e00\u500b function selector\u3002"),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"EIPS",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-7"},"EIP-7 Delegatecall")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-170"},"EIP-170 Contract code size limit")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-1167"},"EIP-1167 Minimal Proxy Contract"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9032\u968e\u95b1\u8b80: ",(0,r.kt)("a",{parentName:"li",href:"https://blog.openzeppelin.com/deep-dive-into-the-minimal-proxy-contract/"},"Deep dive into the Minimal Proxy contract")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-1822"},"EIP-1822 Universal Upgradeable Proxy Standard (UUPS)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-1967"},"EIP-1967 Standard Proxy Storage Slots")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-2535"},"EIP-2535 Diamonds, Multi-Facet Proxy")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.soliditylang.org/2020/03/26/fallback-receive-split/"},"Solidity 0.6.x features: fallback and receive functions")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.openzeppelin.com/the-transparent-proxy-pattern/"},"OpenZeppelin Blog: The transparent proxy pattern")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.openzeppelin.com/deconstructing-a-solidity-contract-part-iii-the-function-selector-6a9b6886ea49/"},"Deconstructing a Solidity Contract\u200a\u2014\u200aPart III: The Function Selector")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/taipei-ethereum-meetup/uups-proxies-%E4%BD%BF%E7%94%A8%E6%96%87-6210c81a946f"},"UUPS Proxies \u4f7f\u7528\u6587"))))}u.isMDXComponent=!0},6986:function(A,e,t){e.Z=t.p+"assets/images/diamond-b43ece3c1e273bb17fe9da9842389c4c.jpeg"},7608:function(A,e,t){e.Z=t.p+"assets/images/transparent_proxy-4c5d8c7ba4c2a4ffaa680c18c1a9dd53.jpeg"},4429:function(A,e){e.Z="data:image/jpeg;base64,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"},3421:function(A,e){e.Z="data:image/jpeg;base64,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"}}]);