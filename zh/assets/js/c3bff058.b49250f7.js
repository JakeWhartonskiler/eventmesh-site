"use strict";(self.webpackChunkincubator_eventmesh_site=self.webpackChunkincubator_eventmesh_site||[]).push([[120],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,g=u["".concat(s,".").concat(d)]||u[d]||h[d]||i;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={},o="Release Creation Process",l={unversionedId:"contribute/release",id:"contribute/release",title:"Release Creation Process",description:"The documentation of Release Creation Process is WIP (Work-in-Progress).",source:"@site/docs/contribute/01-release.md",sourceDirName:"contribute",slug:"/contribute/release",permalink:"/zh/docs/contribute/release",draft:!1,editUrl:"https://github.com/apache/incubator-eventmesh-site/edit/master/docs/contribute/01-release.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"gRPC \u534f\u8bae",permalink:"/zh/docs/sdk-java/grpc"},next:{title:"\u5355\u5143\u6d4b\u8bd5\u8981\u6c42",permalink:"/zh/docs/contribute/write-unit-test"}},s={},p=[{value:"Understand the content and process of Apache publishing",id:"understand-the-content-and-process-of-apache-publishing",level:2},{value:"Local build environment preparation",id:"local-build-environment-preparation",level:2},{value:"1. Install GPG",id:"1-install-gpg",level:3},{value:"2. Generate key with gpg",id:"2-generate-key-with-gpg",level:3},{value:"3. View key",id:"3-view-key",level:3},{value:"Publish the Apache Maven repository",id:"publish-the-apache-maven-repository",level:2},{value:"1. Export the private key file",id:"1-export-the-private-key-file",level:3},{value:"2. Prepare branch",id:"2-prepare-branch",level:3},{value:"3. Update version description",id:"3-update-version-description",level:3},{value:"4. Configure the gradle.properties file under the root project",id:"4-configure-the-gradleproperties-file-under-the-root-project",level:3},{value:"5. Check the gradle.properties file under the submodule",id:"5-check-the-gradleproperties-file-under-the-submodule",level:3},{value:"6. Check and configure the build.gradle file under the root project",id:"6-check-and-configure-the-buildgradle-file-under-the-root-project",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"release-creation-process"},"Release Creation Process"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"The documentation of Release Creation Process is WIP (Work-in-Progress).")),(0,a.kt)("h2",{id:"understand-the-content-and-process-of-apache-publishing"},"Understand the content and process of Apache publishing"),(0,a.kt)("p",null,"Source Release is the focus of Apache and a must for release; while Binary Release is optional,"),(0,a.kt)("p",null,"Please refer to the link below to find more publishing guidelines on ASF:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.apache.org/dev/release-publishing"},"Apache Release Guide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.apache.org/dev/release.html"},"Apache Release Policy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://www.apache.org/dev/publishing-maven-artifacts.html"},"Maven Release Info"))),(0,a.kt)("h2",{id:"local-build-environment-preparation"},"Local build environment preparation"),(0,a.kt)("p",null,"Mainly including signing tools, Maven warehouse certification related preparations"),(0,a.kt)("h3",{id:"1-install-gpg"},"1. Install GPG"),(0,a.kt)("p",null,"Download the installation package from ",(0,a.kt)("a",{parentName:"p",href:"https://www.gnupg.org/download/index.html"},"GnuPG official website"),". The commands of GnuPG 1.x version and 2.x version are slightly different. The following instructions take ",(0,a.kt)("strong",{parentName:"p"},"GnuPG-2.x")," version as an example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"$ gpg --version #Check the version, it should be 2.x\n")),(0,a.kt)("h3",{id:"2-generate-key-with-gpg"},"2. Generate key with gpg"),(0,a.kt)("p",null,"According to the prompt, generate the key"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: Please use the Apache mailbox to generate the GPG Key")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ gpg --full-gen-key\ngpg (GnuPG) 2.0.12; Copyright (C) 2009 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nPlease select what kind of key you want:\n   (1) RSA and RSA (default)\n   (2) DSA and Elgamal\n   (3) DSA (sign only)\n   (4) RSA (sign only)\nYour selection? 1\nRSA keys may be between 1024 and 4096 bits long.\nWhat key size do you want? (2048) 4096\nRequested keysize is 4096 bits\nPlease specify how long the key should be valid.\n         0 = key does not expire\n      <n> = key expires in n days\n      <n>w = key expires in n weeks\n      <n>m = key expires in n months\n      <n>y = key expires in n years\nKey is valid for? (0)\nKey does not expire at all\nIs this correct? (y/N) y\n\nGnuPG needs to construct a user ID to identify your key.\n\nReal name: ${enter username}\nEmail address: ${email address}\nComment: CODE SIGNING KEY\nYou selected this USER-ID:\n    "${enter username} (CODE SIGNING KEY) <${email address}>"\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O\nYou need a Passphrase to protect your secret key. # Fill in the password, which will be often used in the packaging process in the future\n')),(0,a.kt)("h3",{id:"3-view-key"},"3. View key"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ gpg --list-keys\npub rsa4096/579C25F5 2021-04-26 # 579C25F5 is the key id\nuid [ultimate] ${enter username} <${email address}>\nsub rsa4096 2021-04-26\n\n# Send public key to keyserver by key id\n$ gpg --keyserver pgpkeys.mit.edu --send-key 579C25F5\n# Among them, pgpkeys.mit.edu is a randomly selected keyserver, and the keyserver list is: https://sks-keyservers.net/status/, which are automatically synchronized with each other, and you can choose any one.\n$ gpg --keyserver hkp://pgpkeys.mit.edu --recv-keys 579C25F5 # Verify whether it is synchronized to the public network, if the network is not good, you may need to try a few more times\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note: If there are multiple public keys, set the default key. ")," Modify ",(0,a.kt)("inlineCode",{parentName:"p"},"~/.gnupg/gpg.conf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"# If you have more than 1 secret key in your keyring, you may want to\n# uncomment the following option and set your preferred keyid.\ndefault-key 28681CB1\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"If there are multiple public keys, useless keys can also be deleted:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ gpg --delete-secret-keys 29BBC3CB # Delete the private key first and specify the key id\ngpg (GnuPG) 2.2.27; Copyright (C) 2021 g10 Code GmbH\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nsec rsa4096/EE8DAE7D29BBC3CB 2021-04-27 mikexue <mikexue@apache.org>\n\nDelete this key from the keyring? (y/N) y\nThis is a secret key! - really delete? (y/N) y\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ gpg --delete-keys 29BBC3CB # delete public key, specify key id\ngpg (GnuPG) 2.2.27; Copyright (C) 2021 g10 Code GmbH\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\n\npub rsa4096/EE8DAE7D29BBC3CB 2021-04-27 mikexue <mikexue@apache.org>\n\nDelete this key from the keyring? (y/N) y\n")),(0,a.kt)("p",null,"Since the public key server has no checking mechanism, anyone can upload the public key in your name, so there is no way to guarantee the reliability of the public key on the server. Usually, you can publish a public key fingerprint on the website, so that others can check whether the downloaded public key is genuine."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# The fingerprint parameter generates a public key fingerprint:\n$ gpg --fingerprint mikexue\npub rsa4096 2021-04-26 [SCA]\n       F84A 0041 D70B 37AF 9C7B F0B3 39F4 29D7 579C 25F5\nuid [ultimate] mikexue <mikexue@apache.org>\nsub rsa4096 2021-04-26 [E]\n")),(0,a.kt)("p",null,"Log in to ",(0,a.kt)("a",{parentName:"p",href:"https://id.apache.org/"},"https://id.apache.org"),", paste the above fingerprint (ie F84A 0041 D70B 37AF 9C7B F0B3 39F4 29D7 579C 25F5) into your user information OpenPGP Public Key Primary Fingerprint"),(0,a.kt)("h2",{id:"publish-the-apache-maven-repository"},"Publish the Apache Maven repository"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Note: EventMesh uses Gradle to build, you need to modify the gradle related configuration")),(0,a.kt)("h3",{id:"1-export-the-private-key-file"},"1. Export the private key file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"$ gpg --export-secret-keys -o secring.gpg #The private key file is kept properly, and it needs to be configured later\n")),(0,a.kt)("h3",{id:"2-prepare-branch"},"2. Prepare branch"),(0,a.kt)("p",null,"Pull the new branch from the trunk branch as the release branch. If you want to release the $",(0,a.kt)("inlineCode",{parentName:"p"},"{release_version}")," version now, pull the new branch ",(0,a.kt)("inlineCode",{parentName:"p"},"${release_version}-release")," from the develop branch, and then ",(0,a.kt)("inlineCode",{parentName:"p"},"${release_version}")," Release Candidates involves The modification and labeling of all files are carried out in the ",(0,a.kt)("inlineCode",{parentName:"p"},"${release_version}-release")," branch, and merged into the main branch after the final release is completed."),(0,a.kt)("h3",{id:"3-update-version-description"},"3. Update version description"),(0,a.kt)("p",null,"Update the following files of the official website project and submit them to the master branch:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-eventmesh-site/tree/master/events/release-notes"},"https://github.com/apache/incubator-eventmesh-site/tree/master/events/release-notes")),(0,a.kt)("h3",{id:"4-configure-the-gradleproperties-file-under-the-root-project"},"4. Configure the gradle.properties file under the root project"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"group=org.apache.eventmesh\nversion=1.2.0-release\n#The last 8 digits of the 40-bit public key\nsigning.keyId=579C25F5\n#passphrase filled in when generating the key\nsigning.password=\n#Exported private key file secring.gpg path\nsigning.secretKeyRingFile=../secring.gpg\n#apache account\napacheUserName=\n#apache password\napachePassWord=\n")),(0,a.kt)("h3",{id:"5-check-the-gradleproperties-file-under-the-submodule"},"5. Check the gradle.properties file under the submodule"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"group=org.apache.eventmesh\nversion=${release_version}\n")),(0,a.kt)("h3",{id:"6-check-and-configure-the-buildgradle-file-under-the-root-project"},"6. Check and configure the build.gradle file under the root project"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"publishing {\n     publications {\n         mavenJava(MavenPublication) {\n             from components.java\n             artifact packageSources\n             artifact package Javadoc\n             versionMapping {\n                 usage('java-api') {\n                     fromResolutionOf('runtimeClasspath')\n                 }\n")))}u.isMDXComponent=!0}}]);