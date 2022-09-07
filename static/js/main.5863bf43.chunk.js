(this["webpackJsonpmint-web-template"]=this["webpackJsonpmint-web-template"]||[]).push([[0],{280:function(e){e.exports=JSON.parse('[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApprovalToCurrentOwner","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"IndexOutOfBounds","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"QueryForZeroAddress","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"PRESALE_ALLOWANCE_P1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PUBLIC_ALLOWANCE_P1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractState","outputs":[{"internalType":"enum NFTContract.ContractState","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleRoot","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"mintPresale","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint64","name":"quantity","type":"uint64"}],"name":"mintPublic","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"quantity","type":"uint256"}],"name":"mintTeam","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"royaltyInfo","outputs":[{"internalType":"address","name":"receiver","type":"address"},{"internalType":"uint256","name":"royaltyAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uri","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"enum NFTContract.ContractState","name":"contractState_","type":"uint8"}],"name":"setContractState","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxSupply","type":"uint256"}],"name":"setMaxSupply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"merkleRoot_","type":"bytes32"}],"name":"setMerkleRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"setRoyalties","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_uri","type":"string"}],"name":"setStaticURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenPrice_","type":"uint256"}],"name":"setTokenPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"staticURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"root","type":"bytes32"},{"internalType":"bytes32","name":"leaf","type":"bytes32"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"verify","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address payable","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]')},315:function(e,t,n){},318:function(e,t){},326:function(e,t){},370:function(e,t){},373:function(e,t){},375:function(e,t){},385:function(e,t){},417:function(e,t){},419:function(e,t){},442:function(e,t){},443:function(e,t){},461:function(e,t){},464:function(e,t){},466:function(e,t){},571:function(e,t,n){"use strict";n.r(t);var a=n(4),i=n.n(a),r=n(279),s=n.n(r),o=(n(315),n(66)),c=(n(316),"#FFF"),l="#fff",u="rgba(0,0,0,0.25)",p="3px 3px 5px #00000044",d=n(1),m=n(11),b=n(28),y=n(101),f=n(280),j=function(e){return 4===e?"0xD4506395C0F67BC6941A77c788ef4D3026Da6823":""},x=2500,h=[1,4],g=n(5),O=Object(a.createContext)({}),v=function(e){var t=e.children,n=Object(a.useState)(null),i=Object(b.a)(n,2),r=i[0],s=i[1],o=Object(a.useState)(null),c=Object(b.a)(o,2),l=c[0],u=c[1],p=Object(a.useState)(null),d=Object(b.a)(p,2),m=d[0],y=d[1];return Object(g.jsx)(O.Provider,{value:{account:r,setAccount:s,address:l,setAddress:u,web3Provider:m,setWeb3Provider:y},children:t})},w=Object(a.createContext)({}),T=function(e){var t=e.children,n=Object(a.useContext)(O).web3Provider,i=Object(a.useState)(),r=Object(b.a)(i,2),s=r[0],o=r[1],c=Object(a.useState)(),l=Object(b.a)(c,2),u=l[0],p=l[1];Object(a.useEffect)((function(){x()}),[n]);var x=function(){var e=Object(m.a)(Object(d.a)().mark((function e(){var t,a,i,r,s;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,n.getNetwork();case 4:t=e.sent,a=t.chainId,i=j(a),r=n.getSigner(),i&&(p(i),s=new y.a.Contract(i,f,r),o(s));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsx)(w.Provider,{value:{nftContract:s,nftContractId:u},children:t})},k=n(61),N=n(21),C="/",M="/mint",F="/terms",S=n(29),I='"Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',A='"Telegraphem", "Helvetica Neue", Helvetica, Arial, sans-serif',P=600,W={base:{cursor:"pointer",fontFamily:A,fontSize:"1.5rem",lineHeight:"1rem",textAlign:"center",display:"inline-block",outline:"none"},button:{composes:"$base",border:"none",padding:"1.5rem 4rem",letterSpacing:0,textTransform:"uppercase",fontWeight:P,boxShadow:"0em 0.15em 0.65em 0em ".concat(u),"&:disabled":{cursor:"default",opacity:.5,pointerEvents:"none"},"&:hover":{opacity:"0.85",transition:"opacity .25s ease-in-out"}},primary:{composes:"$button",background:"#FFF",color:"#3c687d"},link:{composes:"$base",border:0,cursor:"pointer",display:"inline-block",padding:0,backgroundColor:"transparent",fontWeight:P,fontSize:"0.875rem",height:"0.875rem",lineHeight:"0.875rem",letterSpacing:.2}},L=Object(S.a)(W),D=function(e){var t=e.children,n=e.onClick,a=e.className,i=e.disabled,r=L();return Object(g.jsx)("button",{className:r[a||"button"],onClick:n,disabled:i,children:t})},R={page:{minWidth:"100vw",minHeight:"50vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center","& h1":{fontFamily:A,textTransform:"uppercase",fontSize:"4em",textShadow:p,margin:"0"},"& p":{maxWidth:"50rem",fontSize:"1.3em"}},mint:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"2em"},remaining:{marginBottom:"1em",maxWidth:"50rem",fontSize:"1.3em"}},z=Object(S.a)(R),H="https://discord.gg/Atu3RNBcVE",B="https://twitter.com/grumpycantina",_=[{name:"Team Member 1",image:"avatar1.png",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor iaculis gravida. Integer hendrerit nisl non magna blandit eleifend. Praesent mauris velit, ullamcorper nec ligula sed vestibulum.",twitter:"team1"},{name:"Team Member 2",image:"avatar2.png",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor iaculis gravida. Integer hendrerit nisl non magna blandit eleifend. Praesent mauris velit, ullamcorper nec ligula sed vestibulum.",twitter:""},{name:"Team Member 3",image:"avatar3.png",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor iaculis gravida. Integer hendrerit nisl non magna blandit eleifend. Praesent mauris velit, ullamcorper nec ligula sed vestibulum.",twitter:"team3"},{name:"Team Member 4",image:"avatar4.png",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor iaculis gravida. Integer hendrerit nisl non magna blandit eleifend. Praesent mauris velit, ullamcorper nec ligula sed vestibulum.",twitter:""}],E=[{title:"What is Project Name?",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor iaculis gravida. Integer hendrerit nisl non magna blandit eleifend. Praesent mauris velit, ullamcorper nec ligula sed vestibulum."},{title:"What will the mint price be?",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor iaculis gravida."},{title:"Wen Mint?",description:"TBD"}],$=n(27),U={"@global":{"@keyframes spinner":{"100%":{transform:"rotate(360deg)"}}},spinner:{width:"5em",height:"5em",borderTop:"0.4em solid ".concat("#FFF"),borderRight:"0.4em solid transparent",borderRadius:"50%",animation:"spinner 0.6s linear infinite"},spinPadding:{padding:"1em"}},q=Object(S.a)(U),G=function(){var e=q();return Object(g.jsx)("div",{className:e.spinPadding,children:Object(g.jsx)("div",{className:e.spinner})})},Q=["0xaA399Dd981051891f7725311b580FDe83bE30FbB"].map((function(e){return e.toLowerCase()})),Z=n(286),J=n(72),X=n(185),V=n.n(X),Y=function(e){var t=e.map((function(e){return J.utils.solidityPack(["uint256"],[e.toLowerCase()])})),n=new Z.MerkleTree(t,V.a,{hashLeaves:!0,sortPairs:!0});return{merkleTree:n,root:n.getHexRoot()}},K=function(e){return V()(J.utils.solidityPack(["uint256"],[e]))},ee=function(e,t){return e.getHexProof(t)},te=Y(Q).root;console.error("Merkle root: ".concat(te));var ne=n(16),ae={base:{fontFamily:I,display:"inline-block",outline:"none",padding:"1em",border:"none"}},ie=Object(S.a)(ae),re=function(e){var t=ie();return Object(g.jsx)("select",Object(ne.a)({className:t.base},e))},se=Object(S.a)({defaultHeight:{height:"3em"},default:{height:"3em",width:"3em"},defaultRect:{width:"3em"},invert:{composes:"$default",filter:"invert(1)"},small:{height:"1em",width:"1em"},large:{height:"5em",width:"5em"},largeInverted:{composes:["$large","$invert"]}}),oe=function(e){var t=e.className,n=se();return Object(g.jsx)("img",{className:n[t||"default"],src:"".concat("","/img/logo_opensea.svg"),alt:"Opensea Logo"})},ce=function(){var e=Object(a.useContext)(O).web3Provider,t=Object(a.useContext)(w).nftContract,n=z(),i=Object(a.useState)(!0),r=Object(b.a)(i,2),s=r[0],c=r[1],l=Object(a.useState)(null),u=Object(b.a)(l,2),p=u[0],y=u[1],f=Object(a.useState)(0),j=Object(b.a)(f,2),h=j[0],v=j[1],T=Object(a.useState)(0),k=Object(b.a)(T,2),N=k[0],C=k[1],M=Object(a.useState)(!1),F=Object(b.a)(M,2),S=F[0],I=F[1];Object(a.useEffect)((function(){var n=function(){var n=Object(m.a)(Object(d.a)().mark((function n(){var a,i,r,s,l,u,p;return Object(d.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e&&t){n.next=2;break}return n.abrupt("return");case 2:return a=e.getSigner(),n.next=5,t.totalSupply();case 5:if(i=n.sent.toNumber(),y(i),!(i<x)){n.next=42;break}return n.next=10,t.contractState();case 10:if(r=n.sent,v(r),0!==r){n.next=16;break}C(0),n.next=42;break;case 16:return n.next=18,a.getAddress();case 18:if(s=n.sent,l=Q.includes(s.toLowerCase()),u=!0,1!==r){n.next=36;break}if(l){n.next=28;break}u=!1,C(0),o.b.warn("Cheeky, you aren't on the list.",{autoClose:!1}),n.next=36;break;case 28:return n.t0=Y(Q).root,n.next=31,t.merkleRoot();case 31:if(n.t1=n.sent,n.t0===n.t1){n.next=36;break}u=!1,C(0),o.b.warn("The website is currently on an old vintage release!\nPlease clear your browser cache.",{autoClose:!1});case 36:if(!u){n.next=42;break}return n.next=39,t.allowance(s);case 39:p=n.sent.toNumber(),C(p),0===p&&o.b.warn("Don't get greedy, you reached your allowance limit.",{autoClose:!1});case 42:c(!1);case 43:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[e,t]);var A=function(){var n=Object(m.a)(Object(d.a)().mark((function n(){var a,i,r,s,c,l,u,p,m,b;return Object(d.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(I(!0),i=(null===(a=document.getElementById("qty"))||void 0===a?void 0:a.selectedIndex)+1,e&&t&&i){n.next=4;break}return n.abrupt("return");case 4:return r=e.getSigner(),n.next=7,r.getAddress();case 7:if(s=n.sent,n.prev=8,1!==h){n.next=27;break}return l=Y(Q),u=l.merkleTree,p=K(s),m=ee(u,p),n.t0=t,n.t1=i,n.t2=m,n.t3=$.a,n.next=19,t.tokenPrice();case 19:return n.t4=n.sent,n.t5=n.t3.from.call(n.t3,n.t4).mul(i),n.t6={value:n.t5},n.next=24,n.t0.mintPresale.call(n.t0,n.t1,n.t2,n.t6);case 24:c=n.sent,n.next=38;break;case 27:return n.t7=t,n.t8=i,n.t9=$.a,n.next=32,t.tokenPrice();case 32:return n.t10=n.sent,n.t11=n.t9.from.call(n.t9,n.t10).mul(i),n.t12={value:n.t11},n.next=37,n.t7.mintPublic.call(n.t7,n.t8,n.t12);case 37:c=n.sent;case 38:return I(!0),n.next=41,c.wait();case 41:o.b.success("Congrats on minting your NFT!"),n.next=48;break;case 44:n.prev=44,n.t13=n.catch(8),-32e3===(null===n.t13||void 0===n.t13||null===(b=n.t13.error)||void 0===b?void 0:b.code)?o.b.error("You don't have enought ETH, sorry!"):o.b.error("Unable to mint."),console.error(n.t13.error);case 48:return n.prev=48,I(!1),n.finish(48);case 51:case"end":return n.stop()}}),n,null,[[8,44,48,51]])})));return function(){return n.apply(this,arguments)}}();return Object(g.jsx)("div",{className:n.page,children:s?Object(g.jsx)(G,{}):p?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h1",{children:"Sold out"}),Object(g.jsx)("p",{children:"Find us on Opensea"}),Object(g.jsx)("a",{href:"",target:"_blank",children:Object(g.jsx)(oe,{})})]}):0===h?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h1",{children:"Hold your position, we are not live yet!"}),Object(g.jsx)("p",{children:"Come back soon"})]}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h1",{children:"Go ahead, mint that NFT!"}),Object(g.jsxs)("div",{className:n.remaining,children:["Supply",": ",null===p?"...":p," / ",x]}),Object(g.jsxs)("div",{className:n.mint,children:[Object(g.jsx)(re,{id:"qty",defaultValue:Math.ceil(N/2),required:!0,disabled:0===N,children:Array.from(Array(N).keys()).map((function(e){return Object(g.jsx)("option",{value:e+1,children:e+1})}))}),Object(g.jsx)(D,{className:"primary",onClick:A,disabled:S||0===N,children:S?"Tx Pending...":"Mint"})]})]})})},le=n(145),ue=n(147),pe=function(e){var t=e.className,n=se();return Object(g.jsx)(ue.a,{style:{color:c},className:n[t||"default"],icon:le.a})},de=function(e){var t=e.className,n=se();return Object(g.jsx)(ue.a,{style:{color:c},className:n[t||"default"],icon:le.b})},me={footer:{display:"flex",flexDirection:"row",alignItems:"baseline",justifyContent:"center",flexWrap:"wrap",width:"100%",padding:"2em 0",fontSize:"0.8em",gap:"0.8em",color:l,"& a":{color:l}},title:{fontSize:"3em",marginBottom:"0.2em",fontFamily:A,textTransform:"uppercase",textShadow:p},linkGroup:{display:"flex",fontSize:"0.5em","& a":{padding:"0 0.5em"}},text:{width:"40em"}},be=Object(S.a)(me),ye=function(){var e=be();return Object(g.jsxs)("footer",{className:e.footer,children:[Object(g.jsxs)("div",{children:["\xa9 ","GCWC: Grumpy Cantina Wine Club"," |"," ",Object(g.jsx)(k.b,{to:F,children:"Terms & Conditions"})]}),Object(g.jsxs)("div",{className:e.linkGroup,children:[H.length>0&&Object(g.jsx)("a",{href:H,target:"_blank",children:Object(g.jsx)(pe,{})}),B.length>0&&Object(g.jsx)("a",{href:B,target:"_blank",children:Object(g.jsx)(de,{})}),"".length>0&&Object(g.jsx)("a",{href:"",target:"_blank",children:Object(g.jsx)(oe,{})})]}),Object(g.jsxs)("div",{children:["Developed by"," ",Object(g.jsx)("a",{href:"https://block.aocollab.tech/",target:"_blank",children:"Ao Collab"})]})]})},fe=n(186),je=function(e){var t=e.className,n=se();return Object(g.jsx)("img",{className:n[t||"default"],src:"".concat("","/img/logo_nft.png"),alt:"NFT Logo"})},xe={header:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",gap:"1em",padding:"1em"},nav:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"100%"},linkGroup:{display:"flex",flexDirection:"row",gap:"1.5em"},link:{textTransform:"uppercase",color:c,fontSize:"1.5em",fontWeight:P,textDecoration:"none","&:hover":{textDecoration:"underline"}}},he=Object(S.a)(xe),ge=function(){var e=he();return Object(g.jsx)("header",{className:e.header,children:Object(g.jsxs)("nav",{className:e.nav,children:[Object(g.jsx)(k.b,{to:C,children:Object(g.jsx)(je,{className:"defaultRect"})}),Object(g.jsxs)("div",{className:e.linkGroup,children:[Object(g.jsx)(fe.a,{smooth:!0,to:"".concat(C,"#about"),className:e.link,children:"About"}),Object(g.jsx)(fe.a,{smooth:!0,to:"".concat(C,"#faq"),className:e.link,children:"FAQ"}),Object(g.jsx)(k.b,{to:M,className:e.link,children:"Mint"})]})]})})},Oe={default:{display:"flex",flexDirection:"column",minHeight:"100vh",backgroundColor:"#3c687d",overflowX:"hidden"},main:{flex:1,"& > *":{fontFamily:I,color:l}}},ve=Object(S.a)(Oe),we=function(e){var t=e.children,n=e.className,a=void 0===n?"default":n,i=e.hasHeader,r=void 0===i||i,s=e.hasFooter,o=void 0===s||s,c=ve();return Object(g.jsxs)("div",{className:c[a],children:[r&&Object(g.jsx)(ge,{}),Object(g.jsx)("main",{className:c.main,children:t}),o&&Object(g.jsx)(ye,{})]})},Te=n(302),ke=n(296),Ne=n.n(ke),Ce=function(){var e=Object(a.useContext)(O),t=e.account,n=e.setAccount,i=e.setAddress,r=e.setWeb3Provider;if(!n||!i||!r)return Object(g.jsx)(g.Fragment,{});var s=Object(a.useState)(!1),c=Object(b.a)(s,2),l=c[0],u=c[1],p=function(){var e=Object(m.a)(Object(d.a)().mark((function e(){return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Ne.a({network:"mainnet",cacheProvider:!1,providerOptions:{walletconnect:{package:Te.a,options:{INFURA_ID:"288d3145859e45dca9d1c701fce7113e"}}},disableInjectedProvider:!1}));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(m.a)(Object(d.a)().mark((function e(){var t,a,s,c,l,m;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p();case 2:return t=e.sent,e.next=5,t.clearCachedProvider();case 5:return e.next=7,t.connect();case 7:return a=e.sent,u(!0),s=new y.a.providers.Web3Provider(a),e.t0=h,e.next=13,s.getNetwork();case 13:if(e.t1=e.sent.chainId,e.t0.includes.call(e.t0,e.t1)){e.next=17;break}return o.b.error("Invalid network selected. Please switch to Mainnet"),e.abrupt("return");case 17:return e.next=19,s.listAccounts();case 19:return c=e.sent,l=c[0],i(l),e.prev=22,e.next=25,s.lookupAddress(l);case 25:m=e.sent,e.next=30;break;case 28:e.prev=28,e.t2=e.catch(22);case 30:n(m||"".concat(l.substring(0,5),"...").concat(l.substring(l.length-4,l.length))),r(s),u(!1);case 33:case"end":return e.stop()}}),e,null,[[22,28]])})));return function(){return e.apply(this,arguments)}}();return Object(g.jsx)(g.Fragment,{children:l?Object(g.jsx)(G,{}):Object(g.jsx)(D,{onClick:f,className:"primary",children:t||"Connect Wallet"})})},Me=Object(S.a)({page:{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center"}}),Fe=function(){var e=Me();return Object(g.jsx)(we,{hasHeader:!1,hasFooter:!1,children:Object(g.jsx)("div",{className:e.page,children:Object(g.jsx)(Ce,{})})})},Se=Object(S.a)({page:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}),Ie=function(){var e=Se();return Object(a.useContext)(O).web3Provider?Object(g.jsx)(we,{children:Object(g.jsx)("div",{className:e.page,children:Object(g.jsx)(ce,{})})}):Object(g.jsx)(Fe,{})},Ae={page:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100vw",overflowX:"hidden",position:"relative","& h1":{fontFamily:A,textTransform:"uppercase",fontSize:"4em",textShadow:p,margin:"0"}},section:{width:"100%",minHeight:"50vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"4em 0em","& h2, h3":{fontFamily:A,textTransform:"uppercase",fontSize:"2em",textShadow:p,margin:"1em 0em"},"& h3":{fontSize:"1.3em"},"& div":{maxWidth:"50rem",padding:"2rem"}},hero:{composes:"$section",backgroundImage:"url(".concat("","/img/banner.png)"),backgroundPosition:"center",backgroundSize:"cover",backgroundRepeat:"no-repeat",textAlign:"center","& p":{maxWidth:"50rem",fontSize:"1.3em"},"& sub":{fontSize:"0.5em"}},about:{composes:"$section",backgroundColor:"#FFF",color:"#000"},team:{composes:"$section",backgroundColor:"#3c687d",color:"#FFF"},roadmap:{composes:"$section",backgroundColor:"#ed962c",color:"#000"},image:{display:"block",margin:"auto"},faq:{composes:"$section",backgroundColor:"#ed962c",color:"#000",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},centered:{textAlign:"center"}},Pe=Object(S.a)(Ae),We=n.p+"static/media/roadmap.c0a56440.md",Le={accordion:{margin:"1em",padding:"1.5rem 4rem",background:"#FFF",color:"#000",boxShadow:"0em 0.15em 0.65em 0em ".concat(u)},check:{position:"absolute",cursor:"pointer",width:"50vw",height:"3em",zIndex:"1",opacity:"0","&:checked ~ p":{maxHeight:"0",opacity:"0",transform:"translate(0, 50%)",paddingBottom:"0",margin:"0"},"&:checked ~ h4":{"&::after":{content:'"+"'}}},title:{fontSize:"1.5em",margin:"0",fontFamily:A,"&::after":{content:'"-"',paddingLeft:"0.5em"}},description:{position:"relative",overflow:"hidden",maxHeight:"800px",opacity:"1",transform:"translate(0, 0)",marginTop:"14px",zIndex:"2",transition:"all 0.25s ease-in-out"}},De=Object(S.a)(Le),Re=function(e){var t=e.title,n=e.expandedText,a=De();return Object(g.jsxs)("div",{className:a.accordion,children:[Object(g.jsx)("input",{"aria-label":t,"aria-haspopup":!0,type:"checkbox",defaultChecked:!0,className:a.check}),Object(g.jsx)("h4",{className:a.title,"aria-hidden":!0,children:t}),Object(g.jsx)("p",{className:a.description,children:n})]})},ze=n(585),He={teamMember:{background:"#FFF",color:"#000",margin:"1rem",padding:"2rem",display:"flex",flexDirection:"column",alignItems:"center",flex:"1 1",minWidth:"200px",boxShadow:"0 0 10px 5px #00000022"},avatar:{width:"125px"},memberName:{fontWeight:P},twitterLink:{backgroundColor:"#1da1f2",borderRadius:"0.5rem",color:c,padding:"0.5rem 1rem",textDecoration:"none"},description:{fontSize:"0.9rem",textAlign:"justify",paddingBottom:"1em"}},Be=Object(S.a)(He),_e=function(e){var t=e.teamMember,n=Be();return Object(g.jsxs)("div",{className:n.teamMember,children:[Object(g.jsx)("img",{className:n.avatar,src:"img/".concat(t.image)}),Object(g.jsx)("p",{className:n.memberName,children:t.name}),Object(g.jsx)("p",{className:n.description,children:t.description}),t.twitter.length>0&&Object(g.jsxs)("a",{className:n.twitterLink,href:"https://twitter.com/".concat(t.twitter),children:[Object(g.jsx)(de,{className:"small"})," @",t.twitter]})]})},Ee=Object(S.a)({container:{display:"flex",maxWidth:"100% !important",flexWrap:"wrap",padding:"2rem",justifyContent:"center"}}),$e=function(){var e=Ee();return Object(g.jsx)("div",{className:e.container,children:_.map((function(e){return Object(g.jsx)(_e,{teamMember:e})}))})},Ue=function(){var e=Object(N.g)(),t=Pe(),n=Object(a.useState)(),i=Object(b.a)(n,2),r=i[0],s=i[1];return Object(a.useEffect)((function(){fetch(We).then((function(e){return e.text()})).then((function(e){return s(e)}))}),[]),Object(g.jsx)(we,{className:"default",children:Object(g.jsxs)("div",{className:t.page,children:[Object(g.jsxs)("section",{className:t.hero,children:[Object(g.jsx)("h1",{children:"GRUMPY CANTINA WINE CLUB"}),Object(g.jsx)("p",{children:"Passionately Pairing Web2 and Web3 with Integrity, Quality, and Camaraderie"}),Object(g.jsx)(D,{"aria-label":"Mint Now",className:"primary",onClick:function(){e(M)},children:"Mint Now"}),Object(g.jsx)("p",{children:Object(g.jsx)("sub",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor iaculis gravida."})})]}),Object(g.jsx)("section",{id:"about",className:t.about,children:Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{children:"About Us"}),Object(g.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor iaculis gravida. Integer hendrerit nisl non magna blandit eleifend. Praesent mauris velit, ullamcorper nec ligula sed vestibulum."}),Object(g.jsx)("img",{src:"".concat("","/img/about.png"),className:t.image})]})}),Object(g.jsx)("section",{id:"roadmap",className:t.roadmap,children:Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{className:t.centered,children:"Roadmap"}),null!==r&&void 0!==r&&r.length?Object(g.jsx)(ze.a,{children:r}):Object(g.jsx)(G,{})]})}),Object(g.jsxs)("section",{id:"team",className:t.team,children:[Object(g.jsx)("h2",{className:t.centered,children:"Team Members"}),Object(g.jsx)($e,{})]}),Object(g.jsx)("section",{id:"faq",className:t.faq,children:Object(g.jsxs)("div",{children:[Object(g.jsx)("h2",{className:t.centered,children:"FAQs"}),E.map((function(e){return Object(g.jsx)(Re,{title:e.title,expandedText:e.description},e.title)}))]})})]})})},qe={page:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100vw",overflowX:"hidden",position:"relative","& h1":{fontFamily:A,textTransform:"uppercase",fontSize:"4em",textShadow:p,margin:"0"}},section:{width:"100%",minHeight:"50vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:"4em 0em",position:"relative","& h2, h3":{fontFamily:A,textTransform:"uppercase",fontSize:"2em",textShadow:p,margin:"0"},"& div":{maxWidth:"50rem"}},hero:{composes:"$section",textAlign:"center","& p":{maxWidth:"50rem",fontSize:"1.3em"},"& sub":{fontSize:"0.5em"}}},Ge=Object(S.a)(qe),Qe=n.p+"static/media/terms.0f2106f8.md",Ze=function(){var e=Ge(),t=Object(a.useState)(),n=Object(b.a)(t,2),i=n[0],r=n[1];return Object(a.useEffect)((function(){fetch(Qe).then((function(e){return e.text()})).then((function(e){return r(e)}))}),[]),Object(g.jsx)(we,{children:Object(g.jsx)("div",{className:e.page,children:Object(g.jsx)("section",{className:e.hero,children:null!==i&&void 0!==i&&i.length?Object(g.jsx)(ze.a,{children:i}):Object(g.jsx)(G,{})})})})},Je=function(){return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(k.a,{children:Object(g.jsxs)(N.d,{children:[Object(g.jsx)(N.b,{path:C,element:Object(g.jsx)(Ue,{})}),Object(g.jsx)(N.b,{path:M,element:Object(g.jsx)(Ie,{})}),Object(g.jsx)(N.b,{path:F,element:Object(g.jsx)(Ze,{})}),Object(g.jsx)(N.b,{path:"*",element:Object(g.jsx)(N.a,{to:C})})]})})})},Xe=function(){return Object(g.jsx)(v,{children:Object(g.jsxs)(T,{children:[Object(g.jsx)(Je,{}),Object(g.jsx)(o.a,{theme:"dark",position:"top-center",autoClose:5e3,pauseOnFocusLoss:!1,draggable:!1})]})})},Ve=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,586)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),r(e),s(e)}))};s.a.createRoot(document.getElementById("root")).render(Object(g.jsx)(i.a.StrictMode,{children:Object(g.jsx)(Xe,{})})),Ve()}},[[571,1,2]]]);
//# sourceMappingURL=main.5863bf43.chunk.js.map