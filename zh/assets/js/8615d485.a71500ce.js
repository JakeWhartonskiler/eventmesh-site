"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[9468],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>m});var l=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,l)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,l,n=function(e,t){if(null==e)return{};var i,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)i=a[l],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)i=a[l],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=l.createContext({}),u=function(e){var t=l.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},p=function(e){var t=u(e.components);return l.createElement(c.Provider,{value:t},e.children)},o="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),o=u(i),h=n,m=o["".concat(c,".").concat(h)]||o[h]||k[h]||a;return i?l.createElement(m,r(r({ref:t},p),{},{components:i})):l.createElement(m,r({ref:t},p))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,r=new Array(a);r[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[o]="string"==typeof e?e:n,r[1]=s;for(var u=2;u<a;u++)r[u]=i[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,i)}h.displayName="MDXCreateElement"},6077:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var l=i(7462),n=(i(7294),i(3905));const a={title:"\u5982\u4f55\u8d21\u732e",sidebar_position:0},r="\u5982\u4f55\u8d21\u732e",s={unversionedId:"contribute/contribute",id:"contribute/contribute",title:"\u5982\u4f55\u8d21\u732e",description:"\u5982\u679c\u4f60\u662f\u4e00\u4e2a\u65b0\u7684\u8d21\u732e\u8005\uff0c\u60f3\u4e3a EventMesh \u793e\u533a\u505a\u8d21\u732e\uff0c\u8bf7\u9605\u8bfb\u8fd9\u7bc7\u6587\u6863\uff0c\u5b83\u63cf\u8ff0\u4e86\u5982\u4f55\u4e3a\u793e\u533a\u505a\u8d21\u732e\uff0c\u5982\u679c\u4f60\u5728\u6587\u6863\u4e2d\u53d1\u73b0\u4efb\u4f55\u95ee\u9898\uff0c\u8bf7\u968f\u65f6\u53d1\u8868\u610f\u89c1\u6216\u5efa\u8bae\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-community/current/contribute/01-contribute.md",sourceDirName:"contribute",slug:"/contribute/contribute",permalink:"/zh/community/contribute/contribute",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"\u5982\u4f55\u8d21\u732e",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"\u5982\u4f55\u4f7f\u7528\u90ae\u4ef6\u5217\u8868",permalink:"/zh/community/how-to-use-email"},next:{title:"\u5355\u5143\u6d4b\u8bd5\u8981\u6c42",permalink:"/zh/community/contribute/write-unit-test"}},c={},u=[{value:"\u51c6\u5907",id:"\u51c6\u5907",level:2},{value:"\u5f00\u53d1\u73af\u5883",id:"\u5f00\u53d1\u73af\u5883",level:3},{value:"\u4ee3\u7801\u98ce\u683c",id:"\u4ee3\u7801\u98ce\u683c",level:3},{value:"\u5bfc\u5165 Code Style",id:"\u5bfc\u5165-code-style",level:4},{value:"\u5bfc\u5165 CheckStyle",id:"\u5bfc\u5165-checkstyle",level:4},{value:"\u542f\u7528 CheckStyle",id:"\u542f\u7528-checkstyle",level:4},{value:"\u4f7f\u7528 CheckStyle \u63d2\u4ef6",id:"\u4f7f\u7528-checkstyle-\u63d2\u4ef6",level:4},{value:"\u4f7f\u7528 CheckStyle \u4efb\u52a1",id:"\u4f7f\u7528-checkstyle-\u4efb\u52a1",level:4},{value:"CI \u6301\u7eed\u96c6\u6210",id:"ci-\u6301\u7eed\u96c6\u6210",level:3},{value:"\u5de5\u4f5c\u6d41\u7a0b",id:"\u5de5\u4f5c\u6d41\u7a0b",level:3},{value:"\u89e3\u91ca",id:"\u89e3\u91ca",level:2},{value:"\u5f00\u53d1\u5206\u652f",id:"\u5f00\u53d1\u5206\u652f",level:2},{value:"\u8d21\u732e\u7c7b\u522b",id:"\u8d21\u732e\u7c7b\u522b",level:2},{value:"\u9519\u8bef\u53cd\u9988\u6216\u9519\u8bef\u4fee\u590d",id:"\u9519\u8bef\u53cd\u9988\u6216\u9519\u8bef\u4fee\u590d",level:3},{value:"\u529f\u80fd\u5b9e\u73b0\uff0c\u91cd\u6784",id:"\u529f\u80fd\u5b9e\u73b0\u91cd\u6784",level:3},{value:"\u6587\u6863\u6539\u8fdb",id:"\u6587\u6863\u6539\u8fdb",level:3},{value:"\u8d21\u732e\u65b9\u5f0f",id:"\u8d21\u732e\u65b9\u5f0f",level:2},{value:"\u63d0\u4ea4\u95ee\u9898\u6307\u5357",id:"\u63d0\u4ea4\u95ee\u9898\u6307\u5357",level:2},{value:"\u62c9\u53d6\u8bf7\u6c42 (PR) \u63d0\u4ea4\u6307\u5357",id:"\u62c9\u53d6\u8bf7\u6c42-pr-\u63d0\u4ea4\u6307\u5357",level:2},{value:"\u5ba1\u67e5",id:"\u5ba1\u67e5",level:2},{value:"PR \u5ba1\u67e5",id:"pr-\u5ba1\u67e5",level:3},{value:"\u8bb8\u53ef\u8bc1\u5ba1\u67e5",id:"\u8bb8\u53ef\u8bc1\u5ba1\u67e5",level:3},{value:"PR \u5408\u5e76",id:"pr-\u5408\u5e76",level:3},{value:"\u793e\u533a",id:"\u793e\u533a",level:2},{value:"\u8054\u7cfb\u6211\u4eec",id:"\u8054\u7cfb\u6211\u4eec",level:3}],p={toc:u};function o(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"\u5982\u4f55\u8d21\u732e"},"\u5982\u4f55\u8d21\u732e"),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u662f\u4e00\u4e2a\u65b0\u7684\u8d21\u732e\u8005\uff0c\u60f3\u4e3a EventMesh \u793e\u533a\u505a\u8d21\u732e\uff0c\u8bf7\u9605\u8bfb\u8fd9\u7bc7\u6587\u6863\uff0c\u5b83\u63cf\u8ff0\u4e86\u5982\u4f55\u4e3a\u793e\u533a\u505a\u8d21\u732e\uff0c\u5982\u679c\u4f60\u5728\u6587\u6863\u4e2d\u53d1\u73b0\u4efb\u4f55\u95ee\u9898\uff0c\u8bf7\u968f\u65f6\u53d1\u8868\u610f\u89c1\u6216\u5efa\u8bae\u3002"),(0,n.kt)("h2",{id:"\u51c6\u5907"},"\u51c6\u5907"),(0,n.kt)("h3",{id:"\u5f00\u53d1\u73af\u5883"},"\u5f00\u53d1\u73af\u5883"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4f60\u5e94\u8be5\u5728\u4f60\u7684\u5f00\u53d1\u73af\u5883\u4e2d\u5b89\u88c5 JDK\u3002")),(0,n.kt)("h3",{id:"\u4ee3\u7801\u98ce\u683c"},"\u4ee3\u7801\u98ce\u683c"),(0,n.kt)("h4",{id:"\u5bfc\u5165-code-style"},"\u5bfc\u5165 Code Style"),(0,n.kt)("p",null,"\u6587\u4ef6\u4f4d\u7f6e\uff1a\u6e90\u7801 ",(0,n.kt)("inlineCode",{parentName:"p"},"eventmesh/style"),"\u76ee\u5f55\u4e0b\u9762\u7684 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/eventmesh/blob/master/style/eventmesh-code-style.xml"},(0,n.kt)("inlineCode",{parentName:"a"},"eventmesh-code-style.xml"))," \u6587\u4ef6\uff0c\u8bf7\u5c06\u5176\u5bfc\u5165\u60a8\u7684 ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("inlineCode",{parentName:"strong"},"IntelliJ IDEA")),"\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Settings -> Editor -> Code Style -> Import Scheme -> IntelliJ IDEA code style XML\n")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"import code style",src:i(2340).Z,width:"1495",height:"1050"})),(0,n.kt)("h4",{id:"\u5bfc\u5165-checkstyle"},"\u5bfc\u5165 CheckStyle"),(0,n.kt)("p",null,"\u6587\u4ef6\u4f4d\u7f6e\uff1a\u6e90\u7801 ",(0,n.kt)("inlineCode",{parentName:"p"},"eventmesh/style"),"\u76ee\u5f55\u4e0b\u9762\u7684 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/eventmesh/blob/master/style/checkStyle.xml"},(0,n.kt)("inlineCode",{parentName:"a"},"checkStyle.xml")),"\u6587\u4ef6\u3002"),(0,n.kt)("p",null,"\u8bf7\u5b89\u88c5 CheckStyle-IDEA \u63d2\u4ef6\u3002\u5bf9\u4e8e IDEA\uff0c\u60a8\u9700\u8981\u5728\u4ee5\u4e0b\u4e24\u5904\u8bbe\u7f6e\u9879\u4e2d\u5bfc\u5165 CheckStyle \u4ee3\u7801\u98ce\u683c\u6587\u4ef6\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Settings -> Editor -> Code Style -> Java -> Scheme -> Import Scheme -> CheckStyle Configuration\n")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Settings -> Tools -> Checkstyle -> Configuration File\n")),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(3013).Z,width:"1506",height:"860"})),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(873).Z,width:"986",height:"714"})),(0,n.kt)("h4",{id:"\u542f\u7528-checkstyle"},"\u542f\u7528 CheckStyle"),(0,n.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728",(0,n.kt)("inlineCode",{parentName:"p"},"Tools - Checkstyle - Configuration File"),"\u4e2d\u5c06 EventMesh \u7684\u4ee3\u7801\u98ce\u683c\u6587\u4ef6\u8bbe\u7f6e\u4e3a",(0,n.kt)("inlineCode",{parentName:"p"},"Active"),"\uff08\u9ed8\u8ba4\u9009\u9879\uff09\uff0c\u5426\u5219\uff0c\u60a8\u9700\u8981\u5728\u8fd0\u884c CheckStyle \u68c0\u67e5\u4e4b\u524d\uff0c\u624b\u52a8\u6307\u5b9a EventMesh \u7684\u4ee3\u7801\u98ce\u683c\u914d\u7f6e\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(4458).Z,width:"707",height:"149"})),(0,n.kt)("h4",{id:"\u4f7f\u7528-checkstyle-\u63d2\u4ef6"},"\u4f7f\u7528 CheckStyle \u63d2\u4ef6"),(0,n.kt)("p",null,"\u8981\u68c0\u67e5\u5f53\u524d\u6587\u4ef6\u7684\u4ee3\u7801\u98ce\u683c\uff0c\u6700\u7b80\u5355\u7684\u65b9\u5f0f\u662f\u5728\u7f16\u8f91\u5668\u4e2d\u53f3\u952e\u5e76\u6267\u884c",(0,n.kt)("inlineCode",{parentName:"p"},"Check Current File"),"\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(1934).Z,width:"418",height:"461"})),(0,n.kt)("p",null,"\u5b83\u5c06\u4e3a\u60a8\u5728\u5e95\u90e8\u6253\u5f00\u4e00\u4e2a\u9009\u9879\u5361\uff0c\u60a8\u53ef\u4ee5\u89c2\u5bdf\u662f\u5426\u8f93\u51fa\u4e86\u4ee3\u7801\u98ce\u683c\u8b66\u544a\u3002\u5982\u679c\u6ca1\u6709\uff0c\u5219\u683c\u5f0f\u6b63\u786e\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(8402).Z,width:"2240",height:"384"})),(0,n.kt)("p",null,"\u60a8\u53ef\u4ee5\u8fdb\u4e00\u6b65\u5730\u5728\u8be5\u9009\u9879\u5361\u5de6\u4fa7\u8fd0\u884c\u5bf9\u5f53\u524d\u6a21\u5757\u548c\u6574\u4e2a\u9879\u76ee\u7684\u626b\u63cf\u3002"),(0,n.kt)("p",null,"\uff08\u6ce8\u610f\uff1a\u5f53\u60a8\u63d0\u4ea4 PR \u65f6\uff0cCI \u5c06\u4ec5\u68c0\u67e5\u6b64 PR \u4e2d\u5df2\u66f4\u6539\u7684\u6587\u4ef6\uff09\u3002"),(0,n.kt)("h4",{id:"\u4f7f\u7528-checkstyle-\u4efb\u52a1"},"\u4f7f\u7528 CheckStyle \u4efb\u52a1"),(0,n.kt)("p",null,"\u60a8\u53ef\u4ee5\u5728 IDEA \u7684\u53f3\u4fa7 Gradle \u9009\u9879\u5361\u4e2d\u6267\u884c\u5bf9\u67d0\u4e2a\u6a21\u5757\u6216\u6574\u4e2a\u9879\u76ee\u7684\u4ee3\u7801\u98ce\u683c\u626b\u63cf\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(9003).Z,width:"441",height:"874"})),(0,n.kt)("p",null,"\u60a8\u8fd8\u53ef\u4ee5\u5728\u7ec8\u7aef\u4e2d\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"p"},"./gradlew check")," \u6765\u68c0\u67e5\u9879\u76ee\u4e2d\u6240\u6709\u6587\u4ef6\u7684\u4ee3\u7801\u98ce\u683c\u3002"),(0,n.kt)("h3",{id:"ci-\u6301\u7eed\u96c6\u6210"},"CI \u6301\u7eed\u96c6\u6210"),(0,n.kt)("p",null,"\u6b64\u914d\u7f6e\u4e0d\u662f\u5fc5\u987b\u7684\u3002\u60a8\u53ef\u4ee5\u5728 Fork \u4ed3\u5e93\u4e2d\u5f00\u542f GitHub Actions \u5de5\u4f5c\u6d41\uff0c\u6765\u53ca\u65f6\u89c2\u5bdf\u65b0\u7684 commit \u662f\u5426\u4f1a\u5f15\u5165\u7f16\u8bd1\u9519\u8bef\uff0c\u5e76\u51cf\u5c11\u5728\u63d0\u4ea4 PR \u540e\u7b49\u5f85 CI \u8fd0\u884c\u7ed3\u679c\u7684\u65f6\u95f4\u3002"),(0,n.kt)("p",null,"\u5728\u4ee5\u4e0b\u4f4d\u7f6e\u5c06",(0,n.kt)("inlineCode",{parentName:"p"},"Workflow Permissions"),"\u8bbe\u7f6e\u4e3a",(0,n.kt)("inlineCode",{parentName:"p"},"Read and write permissions"),"\u5373\u53ef\uff1a"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Your Forked Repository -> Settings -> Actions -> General -> Workflow Permissions\n")),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(722).Z,width:"1171",height:"455"})),(0,n.kt)("h3",{id:"\u5de5\u4f5c\u6d41\u7a0b"},"\u5de5\u4f5c\u6d41\u7a0b"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u662f\u8d21\u732e\u8005\u7684\u5de5\u4f5c\u6d41\u7a0b\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"fork \u9879\u76ee\u5230\u81ea\u5df1\u7684\u8fdc\u7a0b\u4ed3\u5e93")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"clone fork\u5230\u672c\u5730\u4ed3\u5e93"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-git"},"git clone git@github.com:yourgithub/eventmesh.git\n")),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a\u65b0\u5206\u652f\u5e76\u5904\u7406\u5b83")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-git"},"git checkout -b fix_patch_xx\n")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"\u4fdd\u6301\u5206\u652f\u540c\u6b65")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-git"},"git remote add upstream git@github.com:apache/eventmesh.git\ngit fetch upstream master:upstream_master\ngit rebase upstream_master\n")),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u60a8\u7684\u66f4\u6539\uff08\u786e\u4fdd\u60a8\u7684\u63d0\u4ea4\u4fe1\u606f\u7b80\u6d01\uff09")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5c06\u4f60\u7684\u63d0\u4ea4\u63a8\u9001\u5230\u4f60fork\u7684\u8fdc\u7a0b\u4ed3\u5e93")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u521b\u5efaPull Request"))),(0,n.kt)("h2",{id:"\u89e3\u91ca"},"\u89e3\u91ca"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/eventmesh"},"\u539f\u4ed3\u5e93"),"\uff1aApache \u7684 EventMesh \u4ed3\u5e93\u5728\u6587\u4e2d\u79f0\u4e3a\u539f\u4ed3\u5e93\u3002"),(0,n.kt)("p",null,"Fork \u4ed3\u5e93\uff1a\u4ece\u539f\u4ed3\u5e93 fork \u5230\u60a8\u7684\u8d26\u53f7\u4e2d\u7684\u4e2a\u4eba\u4ed3\u5e93\u662f\u4e00\u4e2a Fork \u4ed3\u5e93\u3002"),(0,n.kt)("p",null,"\u56e0\u6b64\uff0c\u8bf7\u5c06\u539f\u59cb EventMesh \u5b58\u50a8\u5e93 fork \u5230\u60a8\u81ea\u5df1\u7684\u5b58\u50a8\u5e93\u4e2d\u3002"),(0,n.kt)("h2",{id:"\u5f00\u53d1\u5206\u652f"},"\u5f00\u53d1\u5206\u652f"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"EventMesh \u76ee\u524d\u7684\u5f00\u53d1\u5206\u652f\u662f Master\u3002\u8bf7\u5411\u8be5\u5206\u652f\u63d0\u4ea4 PR\u3002")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u6211\u4eec\u5efa\u8bae\u60a8\u5728\u60a8\u7684\u5f00\u53d1\u4ed3\u5e93\u4e2d\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5206\u652f\uff0c\u5e76\u5c06\u8be5\u5206\u652f\u63d0\u4ea4 Pull Request \u5230 EventMesh \u7684 master \u5206\u652f\u3002")),(0,n.kt)("h2",{id:"\u8d21\u732e\u7c7b\u522b"},"\u8d21\u732e\u7c7b\u522b"),(0,n.kt)("h3",{id:"\u9519\u8bef\u53cd\u9988\u6216\u9519\u8bef\u4fee\u590d"},"\u9519\u8bef\u53cd\u9988\u6216\u9519\u8bef\u4fee\u590d"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u65e0\u8bba\u662f bug \u53cd\u9988\u8fd8\u662f fix\uff0c\u90fd\u9700\u8981\u5148\u521b\u5efa\u4e00\u4e2a issue\uff0c\u5bf9 bug \u8fdb\u884c\u8be6\u7ec6\u63cf\u8ff0\uff0c\u65b9\u4fbf\u793e\u533a\u901a\u8fc7 issue \u8bb0\u5f55\u65b9\u4fbf\u7684\u67e5\u627e\u548c\u67e5\u770b\u95ee\u9898\u548c\u4ee3\u7801\u3002\u9519\u8bef\u53cd\u9988\u95ee\u9898\u901a\u5e38\u9700\u8981\u5305\u542b\u5bf9\u9519\u8bef\u4fe1\u606f\u548c\u53ef\u91cd\u73b0\u573a\u666f\u7684\u5b8c\u6574\u63cf\u8ff0\u3002")),(0,n.kt)("h3",{id:"\u529f\u80fd\u5b9e\u73b0\u91cd\u6784"},"\u529f\u80fd\u5b9e\u73b0\uff0c\u91cd\u6784"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u6253\u7b97\u5b9e\u73b0\u4e00\u4e2a\u65b0\u7279\u6027\uff08\u6216\u91cd\u6784\uff09\uff0c\u4e00\u5b9a\u8981\u901a\u8fc7 issue \u6216\u5176\u4ed6\u65b9\u5f0f\u4e0e EventMesh \u6838\u5fc3\u5f00\u53d1\u56e2\u961f\u8fdb\u884c\u6c9f\u901a\uff0c\u5e76\u5728\u6c9f\u901a\u8fc7\u7a0b\u4e2d\u8be6\u7ec6\u63cf\u8ff0\u65b0\u7279\u6027\uff08\u6216\u91cd\u6784\uff09\u3001\u673a\u5236\u548c\u573a\u666f.")),(0,n.kt)("h3",{id:"\u6587\u6863\u6539\u8fdb"},"\u6587\u6863\u6539\u8fdb"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u60a8\u53ef\u4ee5\u5728 ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh-site"},"eventmesh-site")," \u627e\u5230 EventMesh \u6587\u6863\uff0c\u6587\u6863\u5185\u5bb9\u7684\u8865\u5145\u548c\u63d0\u5347\u5bf9 EventMesh \u4e5f\u5f88\u91cd\u8981\u3002")),(0,n.kt)("h2",{id:"\u8d21\u732e\u65b9\u5f0f"},"\u8d21\u732e\u65b9\u5f0f"),(0,n.kt)("p",null,"\u65b0\u8d21\u732e\u8005\u53ef\u4ee5\u901a\u8fc7\u4e24\u79cd\u65b9\u5f0f\u4e3a EventMesh \u793e\u533a\u505a\u51fa\u8d21\u732e\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u60a8\u5728 EventMesh \u4ee3\u7801\u4e2d\u53d1\u73b0\u8981\u4fee\u590d\u7684\u9519\u8bef\uff0c\u6216\u8005\u5982\u679c\u60a8\u4e3a EventMesh \u63d0\u4f9b\u4e86\u65b0\u529f\u80fd\uff0c\u8bf7\u5728 EventMesh \u4e2d\u63d0\u4ea4\u95ee\u9898\u5e76\u5411 EventMesh \u63d0\u4ea4 PR\u3002"),(0,n.kt)("li",{parentName:"ul"},"EventMesh \u793e\u533a\u5176\u4ed6\u8d21\u732e\u8005\u63d0\u51fa\u4e86 issue\uff0c\u8fd9\u91cc\u793e\u533a\u6574\u7406\u7684",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/eventmesh/issues/888"},(0,n.kt)("inlineCode",{parentName:"a"},"issue for first-time contributors")),"\u6bd4\u8f83\u7b80\u5355 PR\uff0c\u53ef\u4ee5\u5e2e\u52a9\u4f60\u719f\u6089\u4e3a EventMesh \u793e\u533a\u505a\u8d21\u732e\u7684\u8fc7\u7a0b\u3002")),(0,n.kt)("h2",{id:"\u63d0\u4ea4\u95ee\u9898\u6307\u5357"},"\u63d0\u4ea4\u95ee\u9898\u6307\u5357"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5982\u679c\u60a8\u4e0d\u77e5\u9053\u5982\u4f55\u5728 EventMesh \u4e0a\u63d0\u51fa\u95ee\u9898\uff0c\u8bf7\u9605\u8bfb",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/cn/issues/tracking-your-work-with-issues/quickstart"},"\u5173\u4e8e\u95ee\u9898"),"\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5728 EventMesh \u793e\u533a\uff0c\u6709 issue \u6a21\u677f\u53ef\u4ee5\u53c2\u8003\uff0c\u5982\u679c\u7c7b\u578b\u5339\u914d\u8bf7\u4f7f\u7528\u6a21\u677f\uff0c\u5982\u679c issue \u6a21\u677f\u4e0d\u7b26\u5408\u4f60\u7684\u8981\u6c42\uff0c\u53ef\u4ee5\u5f00\u4e00\u4e2a\u7a7a\u7684 issue \u6a21\u677f\uff0cissue \u8bf7\u81ea\u5e26\u5339\u914d\u7279\u5f81\u6807\u7b7e\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u95ee\u9898\u540d\u79f0\uff0c\u8bf7\u7528\u4e00\u53e5\u8bdd\u7b80\u5355\u63cf\u8ff0\u4f60\u7684\u95ee\u9898\u6216\u76ee\u7684\uff0c\u5e76\u7528\u82f1\u6587\u4e66\u5199\uff0c\u4ee5\u4fbf\u4e8e\u5168\u7403\u4ea4\u6d41\u3002"))),(0,n.kt)("h2",{id:"\u62c9\u53d6\u8bf7\u6c42-pr-\u63d0\u4ea4\u6307\u5357"},"\u62c9\u53d6\u8bf7\u6c42 (PR) \u63d0\u4ea4\u6307\u5357"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5982\u679c\u60a8\u4e0d\u77e5\u9053\u5982\u4f55\u4e3a EventMesh \u53d1\u8d77 PR\uff0c\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request"},"\u5173\u4e8e pull request"),"\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u65e0\u8bba\u662f bug \u4fee\u590d\uff0c\u8fd8\u662f\u65b0\u7279\u6027\u5f00\u53d1\uff08\u5982\u679c\u8fd9\u4e2a PR \u662f\u65b0\u7279\u6027\u5f00\u53d1\uff0c\u90a3\u4e48\u8fd9\u4e2a PR \u4e2d\u5e94\u8be5\u5305\u542b\u65b0\u7279\u6027\u7684\u6587\u6863\u66f4\u65b0\uff09\uff0c\u8bf7\u5411\u5f53\u524d\u5f00\u53d1\u5206\u652f master \u63d0\u4ea4 PR\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u63d0\u4ea4 PR \u9700\u8981\u9075\u5faa EventMesh \u63d0\u4f9b\u7684\u6a21\u677f\uff0c\u540c\u65f6\u9700\u8981\u5199\u63d0\u4ea4\u4fe1\u606f\uff0c\u7b80\u5355\u63cf\u8ff0\u4f60\u63d0\u4ea4\u7684 PR \u662f\u5e72\u4ec0\u4e48\u7684\u5c31\u53ef\u4ee5\u4e86\uff0c\u8be6\u89c1",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/eventmesh/blob/master/.github/PULL_REQUEST_TEMPLATE.md"},"\u6a21\u677f"),"\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u60a8\u63d0\u4ea4\u7684 PR \u9700\u8981\u4e0e\u60a8\u6b63\u5728\u4fee\u590d\u7684\u95ee\u9898\u76f8\u5173\u8054\uff0c\u6216\u8005\u60a8\u6b63\u5728\u63d0\u51fa\u7684\u95ee\u9898\uff0c\u56e0\u6b64\u60a8\u7684 PR \u6807\u9898\u5e94\u4ee5 ","[ISSUE #xx]"," \u5f00\u5934\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5982\u679c\u60a8\u7684\u66f4\u6539\u662f\u5173\u4e8e\u6253\u5b57\u9519\u8bef\u6216\u5c0f\u7684\u4f18\u5316\uff0c\u5219\u65e0\u9700\u521b\u5efa\u95ee\u9898\uff0c\u53ea\u9700\u63d0\u4ea4 PR \u548c\u5e26\u6709 ","[MINOR]"," \u7684\u6807\u9898\u5373\u53ef\u3002"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5355\u4e2a PR \u63d0\u4ea4\u7684\u4fee\u6539\u5185\u5bb9\u4e0d\u5e94\u8fc7\u591a\u3002\u5982\u679c\u9700\u8981\u8fdb\u884c\u5927\u91cf\u66f4\u6539\uff0c\u6700\u597d\u5c06\u66f4\u6539\u5206\u79bb\u5230\u51e0\u4e2a\u5355\u72ec\u7684 PR\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u521b\u5efa PR \u540e\uff0c\u4e00\u4e2a\u6216\u591a\u4e2a committer \u5c06\u5e2e\u52a9\u5ba1\u6838 Pull Request\uff0c\u6279\u51c6\u540e\uff0c\u6b64 PR \u5c06\u5408\u5e76\u5230 EventMesh \u4ed3\u5e93\uff0c\u76f8\u5173 Issue \u5c06\u88ab\u5173\u95ed\u3002"))),(0,n.kt)("h2",{id:"\u5ba1\u67e5"},"\u5ba1\u67e5"),(0,n.kt)("h3",{id:"pr-\u5ba1\u67e5"},"PR \u5ba1\u67e5"),(0,n.kt)("p",null,"\u6240\u6709\u4ee3\u7801\u90fd\u5e94\u8be5\u7531\u4e00\u4f4d\u6216\u591a\u4f4d\u63d0\u4ea4\u8005\u4ed4\u7ec6\u5ba1\u67e5\u3002\u4e00\u4e9b\u539f\u5219\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u53ef\u8bfb\u6027\uff1a\u91cd\u8981\u7684\u4ee3\u7801\u5e94\u8be5\u6709\u8be6\u7ec6\u7684\u6587\u6863\u8bb0\u5f55\u3002\u9075\u5b88\u6211\u4eec\u7684",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/eventmesh/blob/master/style/checkStyle.xml"},"\u4ee3\u7801\u98ce\u683c"),"\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f18\u96c5\uff1a\u65b0\u529f\u80fd\u3001\u7c7b\u6216\u7ec4\u4ef6\u5e94\u8be5\u7ecf\u8fc7\u7cbe\u5fc3\u8bbe\u8ba1\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u53ef\u6d4b\u8bd5\u6027\uff1a\u91cd\u8981\u4ee3\u7801\u5e94\u8be5\u7ecf\u8fc7\u826f\u597d\u6d4b\u8bd5\uff08\u5355\u5143\u6d4b\u8bd5\u8986\u76d6\u7387\u9ad8\uff09\u3002"))),(0,n.kt)("h3",{id:"\u8bb8\u53ef\u8bc1\u5ba1\u67e5"},"\u8bb8\u53ef\u8bc1\u5ba1\u67e5"),(0,n.kt)("p",null,"EventMesh \u9075\u5faa ",(0,n.kt)("a",{parentName:"p",href:"http://www.apache.org/licenses/LICENSE-2.0.html"},"Apache License 2.0")," \u653f\u7b56\u3002\u6240\u6709\u6e90\u6587\u4ef6\u5e94\u8be5\u5c06 Apache \u8bb8\u53ef\u8bc1\u6807\u5934\u6dfb\u52a0\u5230\u6587\u4ef6\u6807\u5934\u3002EventMesh \u4f7f\u7528 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/skywalking-eyes"},"apache/skywalking-eyes")," \u68c0\u67e5\u6e90\u6587\u4ef6\u5934\u3002"),(0,n.kt)("h3",{id:"pr-\u5408\u5e76"},"PR \u5408\u5e76"),(0,n.kt)("p",null,"\u5728\u4e00\u4e2a PR \u88ab\u81f3\u5c11\u4e00\u4e2a\u63d0\u4ea4\u8005\u6279\u51c6\u540e\uff0c\u5b83\u53ef\u4ee5\u88ab\u5408\u5e76\u3002\u5728\u5408\u5e76\u4e4b\u524d\uff0c\u63d0\u4ea4\u8005\u53ef\u4ee5\u66f4\u6539\u63d0\u4ea4\u6d88\u606f\uff0c\u8981\u6c42\u63d0\u4ea4\u6d88\u606f\u8981\u6e05\u6670\u65e0\u91cd\u590d\uff0c\u5e76\u4f7f\u7528 Squash \u548c Merge \u6765\u786e\u4fdd\u4e00\u4e2a PR \u5e94\u8be5\u53ea\u5305\u542b\u4e00\u4e2a\u63d0\u4ea4\u3002\n\u5bf9\u4e8e\u5927\u578b\u591a\u4eba PR\uff0c\u4f7f\u7528 Merge \u8fdb\u884c\u5408\u5e76\uff0c\u5408\u5e76\u524d\u901a\u8fc7 rebase \u4fee\u590d\u63d0\u4ea4\u3002"),(0,n.kt)("h2",{id:"\u793e\u533a"},"\u793e\u533a"),(0,n.kt)("h3",{id:"\u8054\u7cfb\u6211\u4eec"},"\u8054\u7cfb\u6211\u4eec"),(0,n.kt)("p",null,"\u90ae\u7bb1\uff1a",(0,n.kt)("a",{parentName:"p",href:"mailto:dev@eventmesh.apache.org"},"dev@eventmesh.apache.org")))}o.isMDXComponent=!0},4458:(e,t,i)=>{i.d(t,{Z:()=>l});const l="data:image/png;base64,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"},722:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/enable-ci-63764a03d58f7cc605e115902a36ae8e.png"},3013:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/import-checkstyle_1-bde11fab3f02eda97c14084f5eebb88a.png"},873:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/import-checkstyle_2-ca83da3976cecd302c4bbf8bad392c0e.png"},2340:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/import-codestyle-241309f49b7fcb8faf71126a5741056d.png"},1934:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/use-checkstyle_1-ce5f5705fc81d348d3e9d9f75157c4f6.png"},8402:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/use-checkstyle_2-73c2b40b823e883635523fc8a016a607.png"},9003:(e,t,i)=>{i.d(t,{Z:()=>l});const l=i.p+"assets/images/use-checkstyle_3-6982cbefd0763e1b65b51778ea8c6ec4.png"}}]);