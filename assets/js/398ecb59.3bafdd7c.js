"use strict";(self.webpackChunklun_dao=self.webpackChunklun_dao||[]).push([[2308],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=s(n),u=r,m=h["".concat(p,".").concat(u)]||h[u]||c[u]||i;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2422:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},assets:function(){return d},toc:function(){return c},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"Hardhat \u7c21\u4ecb",description:"Hardhat \u662f\u4e00\u5957\u958b\u767c\u667a\u80fd\u5408\u7d04\u7528\u7684\u958b\u767c\u5de5\u5177\uff0c\u672c\u7bc7\u6587\u7ae0\u6703\u4ecb\u7d39 Hardhat \u7684\u57fa\u790e\u4f7f\u7528\u65b9\u5f0f\u3002",slug:"hardhat-intro",tags:["hardhat","ethereum","solidity"],image:"./hardhat-cli-init.png",authors:"yurenju"},p=void 0,s={permalink:"/blog/hardhat-intro",editUrl:"https://github.com/lun-dao/LunDAO/tree/main/blog/2022-04-24-hardhat-intro/index.md",source:"@site/blog/2022-04-24-hardhat-intro/index.md",title:"Hardhat \u7c21\u4ecb",description:"Hardhat \u662f\u4e00\u5957\u958b\u767c\u667a\u80fd\u5408\u7d04\u7528\u7684\u958b\u767c\u5de5\u5177\uff0c\u672c\u7bc7\u6587\u7ae0\u6703\u4ecb\u7d39 Hardhat \u7684\u57fa\u790e\u4f7f\u7528\u65b9\u5f0f\u3002",date:"2022-04-24T00:00:00.000Z",formattedDate:"April 24, 2022",tags:[{label:"hardhat",permalink:"/blog/tags/hardhat"},{label:"ethereum",permalink:"/blog/tags/ethereum"},{label:"solidity",permalink:"/blog/tags/solidity"}],readingTime:13.17,truncated:!0,authors:[{name:"Yuren Ju",title:"Engineering Manager @ Perpetual Protocol",url:"https://yurenju.medium.com/",imageURL:"https://github.com/yurenju.png",key:"yurenju"}],prevItem:{title:"Hardhat tracer",permalink:"/blog/hardhat-tracer"},nextItem:{title:"Diamond 101 (1)",permalink:"/blog/diamond101"}},d={image:n(7198).Z,authorsImageUrls:[void 0]},c=[{value:"\u8a2d\u5b9a\u7bc4\u4f8b\u5c08\u6848",id:"\u8a2d\u5b9a\u7bc4\u4f8b\u5c08\u6848",children:[],level:2},{value:"Hardhat \u8a2d\u5b9a\u6a94",id:"hardhat-\u8a2d\u5b9a\u6a94",children:[],level:2},{value:"\u7de8\u8b6f Solidity \u6a94\u6848",id:"\u7de8\u8b6f-solidity-\u6a94\u6848",children:[],level:2},{value:"\u57f7\u884c\u6e2c\u8a66",id:"\u57f7\u884c\u6e2c\u8a66",children:[],level:2},{value:"\u4f48\u7f72",id:"\u4f48\u7f72",children:[],level:2},{value:"\u6bd4\u8f03",id:"\u6bd4\u8f03",children:[{value:"\u8207 Truffle \u6bd4\u8f03",id:"\u8207-truffle-\u6bd4\u8f03",children:[],level:3},{value:"\u8207 Remix IDE \u6bd4\u8f03",id:"\u8207-remix-ide-\u6bd4\u8f03",children:[],level:3},{value:"\u65b0\u5de5\u5177 foundry",id:"\u65b0\u5de5\u5177-foundry",children:[],level:3}],level:2},{value:"\u7d50\u8ad6",id:"\u7d50\u8ad6",children:[],level:2}],h={toc:c};function u(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u64b0\u5beb\u4e00\u822c\u7a0b\u5f0f\u8a9e\u8a00\u5982 node.js \u6642\uff0c\u901a\u5e38\u53ea\u8981\u6e96\u5099\u57f7\u884c\u74b0\u5883\u8207\u7de8\u8f2f\u5668\u5c31\u53ef\u4ee5\u958b\u59cb\u9032\u884c\u958b\u767c\u4e86\u3002\u800c\u958b\u767c Solidity \u5247\u6709\u4e9b\u8a31\u4e0d\u540c\uff0c\u7531\u65bc\u7a0b\u5f0f\u6703\u9700\u8981\u8dd1\u5728\u5340\u584a\u93c8\u7db2\u8def\u4e0a\uff0c\u6240\u4ee5\u9019\u500b\u57f7\u884c\u74b0\u5883\u6703\u6bd4\u8f03\u8907\u96dc\uff0c\u6703\u9700\u8981\u900f\u904e RPC \u9023\u63a5\u4e26\u4e14\u4f48\u7f72\u5230\u5340\u584a\u93c8\u7db2\u8def\u4e0a\u9762\u4e26\u4e14\u57f7\u884c\u3001\u9664\u932f\u8207\u6e2c\u8a66\u3002"),(0,i.kt)("p",null,"Hardhat \u5c31\u662f\u958b\u767c Solidity \u667a\u80fd\u5408\u7d04\u6642\u6240\u9700\u8981\u7684\u958b\u767c\u5de5\u5177\uff0c\u9664\u4e86\u5167\u5efa\u4e00\u500b\u958b\u767c\u7528\u7684\u672c\u5730\u5340\u584a\u93c8\u7db2\u8def Hardhat Network \u5916\u9084\u6253\u9020\u4e86\u4e00\u5957 plugin \u7cfb\u7d71\u8b93\u8a31\u591a\u8ddf\u5340\u584a\u93c8\u76f8\u95dc\u7684\u5de5\u5177\u53ef\u4ee5\u6574\u5408\u5230 hardhat \u8b93\u958b\u767c\u8005\u53ef\u4ee5\u66f4\u5bb9\u6613\u9032\u884c\u958b\u767c\u3001\u9664\u932f\u3001\u6e2c\u8a66\u7b49\uff0c\u540c\u6642 Hardhat \u91dd\u5c0d TypeScript \u7684\u652f\u63f4\u6bd4\u8d77\u5176\u4ed6\u985e\u4f3c\u5de5\u5177\u9084\u8981\u512a\u826f\uff0c\u9019\u5728\u64b0\u5beb\u6e2c\u8a66\u6642\u6703\u6709\u5f88\u5927\u7684\u5e6b\u52a9\u3002"),(0,i.kt)("p",null,"\u672c\u6587\u5c07\u6703\u7c21\u4ecb hardhat \u7684\u7528\u6cd5\u8207\u8ddf\u5176\u4ed6\u5de5\u5177\u6bd4\u8f03\u7684\u512a\u52e2\u3002"),(0,i.kt)("p",null,"\u6587\u4e2d\u7684\u904b\u884c\u74b0\u5883\u7d71\u4e00\u90fd\u662f Node.js v16 \u904b\u884c\u5728 macOS \u74b0\u5883\uff0c\u5176\u4ed6\u4f5c\u696d\u7cfb\u7d71\u53ef\u80fd\u6703\u6709\u4e9b\u5fae\u7684\u4e0d\u540c\uff0c\u4f46\u5dee\u5225\u61c9\u8a72\u4e0d\u5927\u3002"),(0,i.kt)("h2",{id:"\u8a2d\u5b9a\u7bc4\u4f8b\u5c08\u6848"},"\u8a2d\u5b9a\u7bc4\u4f8b\u5c08\u6848"),(0,i.kt)("p",null,"\u70ba\u4e86\u8aaa\u660e hardhat \u7684\u5404\u7a2e\u529f\u80fd\uff0c\u5728\u9019\u908a\u5148\u8a2d\u5b9a\u4e00\u500b\u7531 hardhat \u63d0\u4f9b\u7684\u4e00\u500b\u7bc4\u672c\u5c08\u6848\uff0c\u8acb\u5148\u5efa\u7acb\u4e00\u500b\u76ee\u9304 ",(0,i.kt)("inlineCode",{parentName:"p"},"hardhat-sample")," \u4e26\u4e14\u5728\u88e1\u9762\u57f7\u884c hardhat \u6307\u4ee4\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ mkdir hardhat-sample\n$ cd hardhat-sample\n$ npx hardhat\n")),(0,i.kt)("p",null,"npx \u662f\u4e00\u500b\u7531 node.js \u63d0\u4f9b\u7684\u6307\u4ee4\u53ef\u4ee5\u57f7\u884c\u7531 node.js \u64b0\u5beb\u7684 CLI \u7a0b\u5e8f\uff0c\u5982\u679c\u8a72 CLI \u7a0b\u5e8f\u9084\u6c92\u5b89\u88dd\uff0c\u4ed6\u6703\u8a62\u554f\u4f60\u662f\u5426\u8981\u5b89\u88dd\u4e26\u4e14\u5f9e\u81ea\u52d5\u4e0b\u8f09\uff0c\u6240\u4ee5\u9996\u6b21\u57f7\u884c\u6642\u6703\u8a62\u554f\u4f60\u662f\u5426\u8981\u5b89\u88dd hardhat\uff0c\u6309\u4e0b\u78ba\u8a8d\u5373\u53ef\u7e7c\u7e8c\uff0c\u63a5\u4e0b\u4f86\u6703\u770b\u5230 hardhat \u7684\u5c0e\u5f15\u756b\u9762\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Hardhat cli initial",src:n(7198).Z}),"\n\u9078\u64c7 ",(0,i.kt)("inlineCode",{parentName:"p"},"Create a basic sample project"),"\uff0c\u4e26\u4e14\u5728\u63a5\u4e0b\u4f86\u7684\u554f\u984c\u90fd\u6309 Enter \u9078\u64c7\u9810\u8a2d\u503c\uff0chardhat \u6703\u958b\u59cb\u5b89\u88dd\u76f8\u95dc\u7684\u5957\u4ef6\uff0c\u7a0d\u7b49\u4e00\u6bb5\u6642\u9593\u6703\u5b89\u88dd\u5b8c\u7562\u3002"),(0,i.kt)("p",null,"\u7576\u5b89\u88dd\u5b8c\u7562\u4e4b\u5f8c\u518d\u8f38\u5165\u4e00\u6b21 ",(0,i.kt)("inlineCode",{parentName:"p"},"npx hardhat")," \u5c31\u6703\u986f\u793a\u4ee5\u4e0b\u8f38\u51fa\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ npx hardhat\n\nHardhat version 2.9.2\n\n... skip\n\nAVAILABLE TASKS:\n\n  accounts  Prints the list of accounts\n  check     Check whatever you need\n  clean     Clears the cache and deletes all artifacts\n  compile   Compiles the entire project, building all artifacts\n  console   Opens a hardhat console\n  flatten   Flattens and prints contracts and their dependencies\n  help      Prints this message\n  node      Starts a JSON-RPC server on top of Hardhat Network\n  run       Runs a user-defined script after compiling the project\n  test      Runs mocha tests\n\nTo get help for a specific task run: npx hardhat help [task]\n")),(0,i.kt)("p",null,"\u5230\u9019\u908a\u5c31\u7522\u751f\u4e86\u4e00\u500b\u7bc4\u4f8b\u7528\u7684\u5c08\u6848\u4e86\uff0c\u9664\u4e86\u53ef\u4ee5\u770b\u5230 hardhat \u6709\u63d0\u4f9b\u8a31\u591a\u6307\u4ee4\u53ef\u4ee5\u4f7f\u7528\u5305\u542b\u7de8\u8b6f\u3001\u6e2c\u8a66\u7b49\u7b49\u5916\uff0c\u7bc4\u4f8b\u5c08\u6848\u4e5f\u5305\u542b\u4e86\u4e00\u4e9b\u4f48\u7f72\u7528\u7684\u8173\u672c\u3001\u7bc4\u672c\u667a\u80fd\u5408\u7d04\u4ee5\u53ca\u6e2c\u8a66\u3002"),(0,i.kt)("h2",{id:"hardhat-\u8a2d\u5b9a\u6a94"},"Hardhat \u8a2d\u5b9a\u6a94"),(0,i.kt)("p",null,"\u5c08\u6848\u7684\u6839\u76ee\u9304\u5e95\u4e0b\u6703\u6709\u4e00\u500b ",(0,i.kt)("inlineCode",{parentName:"p"},"hardhat.config.js")," \u6a94\u6848\uff0c\u9019\u662f\u8a2d\u7f6e hardhat \u7684\u5730\u65b9\uff0c\u4f60\u53ef\u4ee5\u5728\u9019\u908a\u555f\u7528 hardhat plugin\u3001\u52a0\u5165\u4e00\u4e9b\u5e38\u7528\u7684\u5de5\u4f5c\u8b8a\u6210\u4e00\u500b\u65b0\u7684 hardhat \u6307\u4ee4\uff0c\u4e5f\u53ef\u4ee5\u5728\u9019\u908a\u8a2d\u5b9a\u7de8\u8b6f\u5668\u8207\u9023\u63a5\u5230\u4e0d\u540c\u7684\u7db2\u8def\u3002"),(0,i.kt)("p",null,"\u9810\u8a2d\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"hardhat.config.js")," \u5982\u4e0b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// 1. import plugin\nrequire("@nomiclabs/hardhat-waffle");\n\n// 2. add tasks\ntask("accounts", "Prints the list of accounts", async (taskArgs, hre) => {\n  const accounts = await hre.ethers.getSigners();\n\n  for (const account of accounts) {\n    console.log(account.address);\n  }\n});\n\n// 3. export configuration\nmodule.exports = {\n  solidity: "0.8.4",\n};\n')),(0,i.kt)("p",null,"\u8a3b\u89e3\u6240\u6a19\u793a\u7684\u4e09\u5927\u90e8\u5206\uff0c\u5404\u5225\u662f\u555f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"hatdhat-waffle")," plugin\u3001\u52a0\u5165\u4e00\u500b\u65b0\u6307\u4ee4\u8ddf\u8a2d\u5b9a hardhat \u6240\u7528\u7684\u7de8\u8b6f\u5668\u3002"),(0,i.kt)("h2",{id:"\u7de8\u8b6f-solidity-\u6a94\u6848"},"\u7de8\u8b6f Solidity \u6a94\u6848"),(0,i.kt)("p",null,"\u57f7\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"npx hardhat compile")," \u6642\uff0c\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"contracts")," \u76ee\u9304\u7684\u667a\u80fd\u5408\u7d04\u6703\u88ab\u7de8\u8b6f\uff0c\u800c\u7de8\u8b6f\u5f8c\u7684\u7522\u7269 (Artifacts) \u6703\u5beb\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"artifacts")," \u76ee\u9304\u5e95\u4e0b\uff0c\u6bd4\u5982\u8aaa\u7de8\u8b6f\u7d50\u675f\u5f8c\u6703\u7522\u751f ",(0,i.kt)("inlineCode",{parentName:"p"},"artifacts/contracts/Greeter.sol/Greeter.json")," \u9019\u500b\u5c31\u662f\u5408\u7d04\u7684 abi\uff0c\u7576\u4f48\u7f72\u5230 Ethereum \u7db2\u8def\u5f8c\u5c31\u53ef\u4ee5\u7528\u9019\u4efd\u6a94\u6848\u4f86\u8ddf\u5408\u7d04\u4e92\u52d5\u3002"),(0,i.kt)("p",null,"\u7de8\u8b6f Solidity \u6a94\u6848\u7684\u7de8\u8b6f\u5668\u7248\u672c\u53ef\u4ee5\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"hardhat.config.js")," \u88e1\u9762\u8a2d\u5b9a\uff0c\u4e0a\u9762\u7684\u7bc4\u4f8b\u6307\u5b9a ",(0,i.kt)("inlineCode",{parentName:"p"},'solidity: "0.8.4"')," \u662f\u6700\u57fa\u790e\u7684\u8a2d\u5b9a\uff0c\u9084\u6709\u4e00\u4e9b\u4e5f\u53ef\u4ee5\u8a2d\u5b9a\u7684\u9805\u76ee\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6700\u4f73\u5316\uff1a\u8a2d\u5b9a\u8981\u4e0d\u8981\u958b\u555f\u7de8\u8b6f\u6700\u4f73\u5316\u4ee5\u53ca\u6700\u4f73\u5316\u7684\u7a0b\u5ea6\uff0c\u9810\u8a2d\u662f\u95dc\u9589\u6700\u4f73\u5316",(0,i.kt)("sup",{parentName:"li",id:"fnref-\u8a3b1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-\u8a3b1",className:"footnote-ref"},"\u8a3b1"))),(0,i.kt)("li",{parentName:"ul"},"EVM \u7248\u672c\uff1aEVM \u5728\u4e0d\u540c\u7684\u5206\u5c94\u5f8c\u6703\u591a\u51fa\u4e00\u4e9b\u65b0\u7684\u529f\u80fd\u6216\u683c\u5f0f\u4e0a\u7684\u5dee\u7570\uff0c\u9019\u908a\u4e5f\u53ef\u4ee5\u6307\u5b9a")),(0,i.kt)("p",null,"\u8a2d\u5b9a\u7684\u65b9\u6cd5\u5982\u4e0b\uff0c\u66f4\u8a73\u7d30\u7684\u8cc7\u8a0a\u53ef\u4ee5\u53c3\u8003 hardhat \u5b98\u65b9\u7db2\u7ad9\u88e1\u9762\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://hardhat.org/guides/compile-contracts.html"},"Compiling your contracts")," \u4e00\u7bc0\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'solidity: {\n  version: "0.5.15",\n  settings: {\n    optimizer: {\n      enabled: true, // \u555f\u7528\u6700\u4f73\u5316\n      runs: 200 // \u6700\u4f73\u5316\u7684\u8a55\u4f30\u65b9\u5f0f\n    },\n    evmVersion: "istanbul" // \u53ef\u4ee5\u9078\u64c7 instanbul, berlin, london \u7b49\n  }\n}\n')),(0,i.kt)("p",null,"\u800c ",(0,i.kt)("inlineCode",{parentName:"p"},"runs")," \u53c3\u6578\u662f\u958b\u767c\u8005\u8a55\u4f30\u9019\u500b\u5408\u7d04\u9810\u4f30\u6703\u57f7\u884c\u5e7e\u6b21\uff0c\u63d0\u4f9b\u7d66\u7de8\u8b6f\u5668\u57f7\u884c\u6700\u4f73\u5316\u6642\u7684\u53c3\u8003\u4f9d\u64da\uff0c\u53ef\u4ee5\u95b1\u8b80 ",(0,i.kt)("a",{parentName:"p",href:"https://discord.com/channels/927177880318922802/927177880318922807/967717928290107392"},"LunDAO discord \u8a0e\u8ad6"),"\u3002"),(0,i.kt)("p",null,"\u5982\u679c\u4f60\u9047\u5230\u7de8\u8b6f\u5668\u8207 solidity \u6a94\u6848\u4e2d\u6240\u6307\u5b9a\u7684\u7248\u672c\u6c92\u6709\u76f8\u7b26\u6642\uff0c\u4e5f\u53ef\u4ee5\u6307\u5b9a\u591a\u91cd\u7de8\u8b6f\u5668\u7248\u672c\uff0c\u6bd4\u5982\u8aaa\u4f60\u81ea\u5df1\u7684\u5408\u7d04\u7528 0.6\uff0c\u4f46\u662f\u4f60\u6240\u5f15\u7528\u7684 openzeppelin \u5408\u7d04\u5247\u662f 0.5\uff0c\u6b64\u6642\u53ef\u4ee5\u5728 Hardhat \u8a2d\u5b9a\u6a94\u88e1\u9762\u6307\u5b9a\u591a\u7a2e\u4e0d\u540c\u7248\u672c\u7684 solidity\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  solidity: {\n    compilers: [\n      {\n        version: "0.5.5",\n      },\n      {\n        version: "0.6.7"\n      },\n    ],\n  },\n};\n')),(0,i.kt)("h2",{id:"\u57f7\u884c\u6e2c\u8a66"},"\u57f7\u884c\u6e2c\u8a66"),(0,i.kt)("p",null,"\u57f7\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"npx hardhat test")," \u6703\u958b\u59cb\u57f7\u884c\u6e2c\u8a66\uff0c\u57f7\u884c\u6e2c\u8a66\u524d hardhat \u6703\u5148\u5c07\u6240\u6709\u7684\u667a\u80fd\u5408\u7d04\u7de8\u8b6f\u5b8c\u7562\u5f8c\u624d\u57f7\u884c\uff0c\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"test/")," \u76ee\u9304\u5e95\u4e0b\u7684\u6240\u6709 JavaScript \u6e2c\u8a66\u6a94\u6848\u90fd\u6703\u88ab\u57f7\u884c\u3002"),(0,i.kt)("p",null,"\u6211\u5011\u9019\u908a\u5c0d\u7167\u8457 solidity \u8207\u6e2c\u8a66\u6a94\u6848\u4e00\u8d77\u770b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// Greeter.sol\n//SPDX-License-Identifier: Unlicense\npragma solidity ^0.8.0;\n\nimport "hardhat/console.sol";\n\ncontract Greeter {\n    string private greeting;\n\n    constructor(string memory _greeting) {\n        console.log("Deploying a Greeter with greeting:", _greeting);\n        greeting = _greeting;\n    }\n\n    function greet() public view returns (string memory) {\n        return greeting;\n    }\n\n    function setGreeting(string memory _greeting) public {\n        console.log("Changing greeting from \'%s\' to \'%s\'", greeting, _greeting);\n        greeting = _greeting;\n    }\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// sample-test.js\nconst { expect } = require("chai");\nconst { ethers } = require("hardhat");\n\ndescribe("Greeter", function () {\n  it("Should return the new greeting once it\'s changed", async function () {\n    const Greeter = await ethers.getContractFactory("Greeter");\n    const greeter = await Greeter.deploy("Hello, world!");\n    await greeter.deployed();\n\n    expect(await greeter.greet()).to.equal("Hello, world!");\n\n    const setGreetingTx = await greeter.setGreeting("Hola, mundo!");\n\n    // wait until the transaction is mined\n    await setGreetingTx.wait();\n\n    expect(await greeter.greet()).to.equal("Hola, mundo!");\n  });\n});\n\n')),(0,i.kt)("p",null,"\u6e2c\u8a66\u6a94\u6848\u6703\u628a Greeter \u5408\u7d04\u900f\u904e ",(0,i.kt)("inlineCode",{parentName:"p"},'ethers.getContractFactory("Greeter")')," \u53d6\u5f97 Factory \u5408\u7d04\uff0c\u4e26\u4e14\u900f\u904e  ",(0,i.kt)("inlineCode",{parentName:"p"},'Greeter.deploy("Hello, world!")')," \u4f48\u7f72\u5230\u672c\u5730\u7684\u6e2c\u8a66\u7db2\u8def\u88e1\u9762\uff0c\u5230\u7b49\u4f48\u7f72\u6210\u529f\u5f8c\u5c31\u958b\u59cb\u9032\u884c\u6e2c\u8a66\u3002"),(0,i.kt)("p",null,"\u9019\u500b\u672c\u5730\u6e2c\u8a66\u7db2\u8def Hardhat Network \u6703\u5728\u6e2c\u8a66\u7d50\u675f\u4e4b\u5f8c\u92b7\u6bc0\u6240\u6709\u6e2c\u8a66\u6240\u4f48\u7f72\u4e0a\u53bb\u7684\u5408\u7d04\u8207\u72c0\u614b\u3002"),(0,i.kt)("h2",{id:"\u4f48\u7f72"},"\u4f48\u7f72"),(0,i.kt)("p",null,"Hardhat \u5b98\u65b9\u96d6\u7136\u6c92\u6709\u63d0\u4f9b\u4f48\u7f72\u5de5\u5177\uff0c\u4f46\u662f\u53ef\u4ee5\u900f\u904e ",(0,i.kt)("inlineCode",{parentName:"p"},"hardhat script")," \u6307\u4ee4\u505a\u5230\u3002\u4e0b\u9054\u4ee5\u4e0b\u6307\u4ee4\u4e4b\u5f8c\u53ef\u4ee5\u4f48\u7f72\u5230\u5167\u5efa\u7684 Hardhat network\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ npx hardhat run ./scripts/sample-script.js \nDeploying a Greeter with greeting: Hello, Hardhat!\nGreeter deployed to: 0x5FbDB2315678afecb367f032d93F642f64180aa3\n")),(0,i.kt)("p",null,"\u4f46\u7531\u65bc\u662f\u4f48\u7f72\u65bc\u672c\u5730\u7684\u958b\u767c\u7528\u7db2\u8def Hardhat Network\uff0c\u800c\u9019\u500b\u5340\u584a\u93c8\u7db2\u8def\u5728\u6307\u4ee4\u57f7\u884c\u7d50\u675f\u5f8c\u5c31\u6703\u92b7\u6bc0\u6240\u6709\u5728\u4e0a\u9762\u4f48\u7f72\u7684\u5408\u7d04\u8207\u72c0\u614b\uff0c\u6240\u4ee5\u9664\u4e86\u57f7\u884c\u6307\u4ee4\u7684\u7576\u4e0b\u53ef\u4ee5\u547c\u53eb\u51fd\u5f0f\u6e2c\u8a66\u5916\u6c92\u6709\u5176\u4ed6\u53ef\u4ee5\u6e2c\u8a66\u7684\u65b9\u6cd5\u3002"),(0,i.kt)("p",null,"\u6b64\u6642\u53ef\u4ee5\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"hardhat.config.js")," \u88e1\u9762\u52a0\u5165\u4e00\u500b Ethereum \u7684\u7db2\u8def\u5982 mainnet \u6216\u662f\u6e2c\u8a66\u7db2\u8def Rinkeby, Ropsten \u4f86\u9032\u884c\u6e2c\u8a66\u3002"),(0,i.kt)("p",null,"\u6bd4\u5982\u8aaa\u4f60\u53ef\u4ee5\u5148\u7528 MetaMask \u5728\u6e2c\u8a66\u7db2\u8def Rinkeby \u5efa\u7acb\u4e00\u500b\u5e33\u865f\uff0c\u53d6\u5f97\u6e2c\u8a66\u7528\u7684 ETH \u4e26\u4e14\u532f\u51fa\u8a3b\u8a18\u8a5e\u3002\u7136\u5f8c\u5230 ",(0,i.kt)("a",{parentName:"p",href:"https://infura.io/"},"Infura")," \u6216\u662f ",(0,i.kt)("a",{parentName:"p",href:"https://www.alchemy.com/"},"alchemy")," \u7533\u8acb\u4e00\u500b API \u4f86\u5b58\u53d6 Rinkeby\uff0c\u4e26\u4e14\u6539\u8a2d\u5b9a\u6a94 ",(0,i.kt)("inlineCode",{parentName:"p"},"hardhat.config.js"),"\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'module.exports = {\n  solidity: "0.8.4",\n  networks: {\n    rinkeby: {\n        url: "https://rinkeby.infura.io/v3/<INFURA_PROJECT_ID>",\n        accounts: {\n            mnemonic: "<YOUR_MNEMONIC>",\n        },\n        chainId: 4, // \u53ef\u4ee5\u67e5\u770b https://chainlist.org/\n    }\n  },\n};\n')),(0,i.kt)("p",null,"\u8a2d\u5b9a\u5b8c\u7562\u5f8c\u5c31\u53ef\u4ee5\u7528\u76f8\u540c\u7684\u6307\u4ee4\u4f46\u52a0\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"--network")," \u4f48\u7f72\u5230 Rinkeby \u7db2\u8def\u4e0a\u9762\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ npx hardhat run --network rinkeby ./scripts/sample-script.js\n")),(0,i.kt)("p",null,"\u9019\u6a23\u9019\u4efd Greeter \u5408\u7d04\u5c31\u6703\u88ab\u4f48\u7f72\u5230 Rinkeby \u6e2c\u8a66\u7db2\u8def\u4e0a\u9762\u4e86\u3002\u9019\u908a\u7684\u7bc4\u4f8b\u7d66\u7684\u6bd4\u8f03\u7c21\u6613\uff0c\u4f46\u5be6\u969b\u4e0a\u901a\u5e38\u6703\u628a\u53ef\u62bd\u63db\u7684\u8cc7\u8a0a\u5982 ",(0,i.kt)("inlineCode",{parentName:"p"},"INFURA_PROJECT_ID")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"p"},"MNEMONIC")," \u900f\u904e\u74b0\u5883\u8b8a\u6578\u50b3\u5165\uff0c\u4e26\u4e14\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/motdotla/dotenv"},"dotenv")," \u6a21\u7d44\u7ba1\u7406\u3002"),(0,i.kt)("h2",{id:"\u6bd4\u8f03"},"\u6bd4\u8f03"),(0,i.kt)("p",null,"\u8ddf Hardhat \u985e\u4f3c\u7684\u5de5\u5177\u6709\u5e7e\u500b\u5982 Truffle \u8207 Remix\uff0c\u4f46\u662f Hardhat \u8ddf\u5176\u4ed6\u7684\u5de5\u5177\u6bd4\u8f03\u6709\u4e9b\u984d\u5916\u7684\u597d\u8655\u3002"),(0,i.kt)("h3",{id:"\u8207-truffle-\u6bd4\u8f03"},"\u8207 Truffle \u6bd4\u8f03"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://trufflesuite.com/"},"Truffle")," \u539f\u751f\u5167\u5efa\u4e86 web3.js \u51fd\u5f0f\u5eab\uff0c\u4e0d\u904e\u820a\u7684\u7248\u672c\u88e1\u9762\u6df7\u7528\u4e86\u4e0d\u76f8\u5bb9\u7684\u5169\u7a2e web3.js \u51fd\u5f0f\u5eab\uff0c\u958b\u767c\u4e0a\u7d93\u5e38\u6703\u5f88\u56f0\u60d1\u3002\u4e0d\u904e\u7b46\u8005\u5f88\u4e45\u6c92\u7528 Truffle \u4e86\uff0c\u6216\u8a31\u73fe\u5728\u5df2\u7d93\u6c92\u6709\u9019\u500b\u554f\u984c\uff0c\u800c\u5169\u7a2e web3.js \u7248\u672c\u5c0e\u81f4\u7684\u554f\u984c\u662f\u4e0d\u77e5\u9053\u600e\u9ebc\u7528 web3 \u51fd\u5f0f\u5eab\u4e5f\u5e36\u51fa\u4e86\u4e0b\u4e00\u500b\u512a\u52e2 - TypeScript \u652f\u63f4\u3002"),(0,i.kt)("p",null,"Hardhat \u539f\u751f\u5c31\u662f\u63a1\u7528 TypeScript \u958b\u767c\uff0c\u9019\u5728\u63a1\u7528 Hardhat \u9032\u884c\u667a\u80fd\u5408\u7d04\u958b\u767c\u6642\uff0c\u6e05\u695a\u7684\u578b\u5225\u5728\u88fd\u4f5c\u958b\u767c\u5de5\u5177\u4ee5\u53ca\u64b0\u5beb\u6e2c\u8a66\u4e0a\u9762\u80fd\u5920\u66f4\u6709\u6548\u7387\uff0c\u9019\u5728\u5f8c\u7e8c\u7684\u6587\u7ae0\u6703\u5728\u89e3\u91cb\u5982\u4f55\u8a2d\u5b9a TypeScript \u4ee5\u53ca\u4ed6\u6240\u63d0\u4f9b\u7684\u512a\u52e2\u3002"),(0,i.kt)("p",null,"\u53e6\u5916\u6709\u4e00\u4e9b Truffle \u63d0\u4f9b\u7684\u5de5\u5177\u6211\u4e00\u76f4\u90fd\u6c92\u627e\u5230\u597d\u7528\u7684\u5730\u65b9\uff0c\u6bd4\u5982\u8aaa Truffle \u7684\u93c8\u4e0a migration \u6a5f\u5236\u90fd\u6c92\u6709\u5408\u9069\u5408\u7406\u7684\u4f7f\u7528\u65b9\u5f0f\uff0c\u800c\u91cd\u65b0\u5c07 ",(0,i.kt)("inlineCode",{parentName:"p"},"mocha")," \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"describe()")," \u5305\u88dd\u6210 ",(0,i.kt)("inlineCode",{parentName:"p"},"contract()")," \u63d0\u4f9b\u7684 ",(0,i.kt)("a",{parentName:"p",href:"https://trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript/#use-contract-instead-of-describe"},"clear-room feature")," \u4e00\u76f4\u90fd\u6c92\u611f\u53d7\u5230\u7279\u5225\u5be6\u7528\u7684\u5730\u65b9\uff0c\u800c\u5168\u57df\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"artifacts.require()")," \u4e5f\u8b93\u4eba\u611f\u5230\u6709\u4e9b\u56f0\u60d1\u3002"),(0,i.kt)("p",null,"\u76f8\u8f03\u8d77\u4f86 Hardhat \u901a\u5e38\u90fd\u662f\u6bd4\u8f03\u660e\u78ba\u7684\u64b0\u5beb\u65b9\u5f0f\u5982\u4e0b\u9762\u7684\u4f8b\u5b50\uff0c\u6211\u89ba\u5f97\u6bd4\u8f03\u5bb9\u6613\u7406\u89e3\u8207\u95b1\u8b80\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'// truffle\'s implicit global function `artifacts`\nconst MetaCoin = artifacts.require("MetaCoin"); // where does artifacts come from?\nMetaCoin.deployed()\n\n// hardhat\'s explicit function\nconst { ethers } = require("hardhat"); // explicitly import via hardhat\nconst Greeter = await ethers.getContractFactory("Greeter");\n')),(0,i.kt)("h3",{id:"\u8207-remix-ide-\u6bd4\u8f03"},"\u8207 Remix IDE \u6bd4\u8f03"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://remix-project.org/"},"Remix")," \u6bd4\u8f03\u9069\u5408\u5feb\u901f\u7684\u6e2c\u8a66\u8207\u9664\u932f\uff0c\u4f46\u4ee5\u7db2\u9801\u4f5c\u70ba\u57fa\u790e\u958b\u767c\u7684\u958b\u767c\u5957\u4ef6\u6bd4\u8f03\u4e0d\u9069\u5408\u5718\u968a\u958b\u767c\u4f7f\u7528\u3002\u4e00\u822c\u4f86\u8aaa\u5982\u679c\u60f3\u8981\u5feb\u901f\u6e2c\u8a66\u6642\uff0cRemix \u6703\u66f4\u52a0\u7684\u5408\u7528\uff0c\u4f46\u662f\u5982\u679c\u60f3\u8981\u653e\u5728 Github \u8b93\u5718\u968a\u4e00\u8d77\u5354\u4f5c\u958b\u767c\uff0cHardhat \u6216\u662f Truffle \u6703\u6bd4\u8f03\u9069\u5408\u3002"),(0,i.kt)("h3",{id:"\u65b0\u5de5\u5177-foundry"},"\u65b0\u5de5\u5177 foundry"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/foundry-rs/foundry"},"Foundry")," \u662f LunDAO \u7684 discord \u7fa4\u7d44\u4e0a\u9762\u6700\u8fd1\u8a0e\u8ad6\u7684\u5de5\u5177\uff0c\u770b\u8d77\u4f86\u6bd4\u8d77 Hardhat \u628a Hardhat Network \u8ddf\u6846\u67b6\u6253\u5305\u5728\u4e00\u8d77\uff0cFoundry \u63d0\u4f9b\u4e86\u4e00\u500b\u66f4\u7368\u7acb\u7684\u958b\u767c\u5de5\u5177\uff0c\u770b\u8d77\u4f86\u662f\u500b\u4e0d\u932f\u7684\u65b0\u9078\u64c7\uff0c\u6216\u8a31\u4e4b\u5f8c\u4e5f\u6703\u64b0\u6587\u4ecb\u7d39\u3002"),(0,i.kt)("h2",{id:"\u7d50\u8ad6"},"\u7d50\u8ad6"),(0,i.kt)("p",null,"\u5982\u540c\u4e0a\u9762\u7684\u6bd4\u8f03\uff0c\u7b46\u8005\u81ea\u5df1\u662f\u6bd4\u8f03\u504f\u597d Hardhat\uff0c\u540c\u6642\u4e5f\u5728\u5718\u968a\u4e2d\u63a1\u7528\u4e86\u8d85\u904e\u5169\u5e74\u7684\u6642\u9593\uff0c\u5728 Perpetual Protocol V1 \u5230 V2 \u7684\u8f49\u63db\u4e5f\u9084\u662f\u63a1\u7528\u4e86\u76f8\u540c\u5de5\u5177\uff0c\u9019\u4e5f\u8b93 hardhat \u6210\u70ba\u4e86\u5718\u968a\u7684\u5fc5\u5099\u5de5\u5177\u3002"),(0,i.kt)("p",null,"\u800c Hardhat \u4e0a\u9762\u8c50\u5bcc\u7684\u5de5\u5177\u5982 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wighawag/hardhat-deploy"},"hardhat-deploy"),", ",(0,i.kt)("a",{parentName:"p",href:"https://hardhat.org/plugins/nomiclabs-hardhat-etherscan.html"},"hardhat-etherscan")," \u8207 ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cgewecke/hardhat-gas-reporter"},"hardhat-gas-reporter")," \u7b49\u7b49\u90fd\u8b93\u958b\u767c\u5de5\u4f5c\u80fd\u5920\u66f4\u9806\u5229\u7684\u9032\u884c\u3002"),(0,i.kt)("p",null,"\u7136\u800c hardhat \u63d0\u4f9b\u7684\u5f48\u6027\u6846\u67b6\u6709\u6642\u5019\u5728\u958b\u767c\u4e0a\u4e5f\u6703\u9020\u6210\u4e00\u4e9b\u56f0\u64fe\uff0c\u63a5\u4e0b\u4f86 Hardhat \u7cfb\u5217\u6587\u7ae0\u5c07\u6703\u66f4\u6df1\u5165\u7684\u89e3\u91cb Hardhat \u7d50\u69cb\u8207\u539f\u7406\uff0c\u7576\u5728\u5927\u91cf\u4f7f\u7528 Hardhat \u53ef\u4ee5\u66f4\u660e\u767d\u767c\u751f\u4e86\u4ec0\u9ebc\u4e8b\u60c5\u4ee5\u53ca\u5982\u4f55\u89e3\u6c7a\u4f7f\u7528 Hardhat \u6703\u9047\u5230\u7684\u554f\u984c\u3002"),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-\u8a3b1"},"\u95dc\u9589\u6700\u4f73\u5316\u6642\u4ecd\u6703\u6709\u90e8\u5206\u7684\u6700\u4f73\u5316\uff0c\u8acb\u53c3\u8003 ",(0,i.kt)("a",{parentName:"li",href:"https://discord.com/channels/927177880318922802/927177880318922807/967723565623423006"},"LunDAO discord \u8a0e\u8ad6"),(0,i.kt)("a",{parentName:"li",href:"#fnref-%E8%A8%BB1",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0},7198:function(e,t,n){t.Z=n.p+"assets/images/hardhat-cli-init-16a3575d919c0ffa4f6ab950ce1a0e24.png"}}]);