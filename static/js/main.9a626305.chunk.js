(this.webpackJsonpnewsclient=this.webpackJsonpnewsclient||[]).push([[0],{178:function(e,t,a){e.exports=a(199)},183:function(e,t,a){},199:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(21),c=a.n(i),o=(a(183),a(15)),l=a(18),s=a(33),m=a.n(s),u=a(46),d=a(194),p=a(195),g=a(171),h=a.n(g),f=a(4),b=a(172),E=a.n(b),v=a(322),y=a(325),w=a(29),x=a(188),j=a(25);var O=Object(v.a)((function(e){var t;return Object(y.a)({card:{borderRadius:"4px",backgroundColor:"white",padding:function(t){return t.imageUrl?e.spacing(2):"".concat(e.spacing(2),"px ").concat(e.spacing(3),"px")},display:"flex",flexDirection:function(e){return e.direction},maxWidth:function(e){return"row"===e.direction?"100%":"32%"},minWidth:"100%",width:"100%",boxShadow:"0 2px 5px rgba(0,0,0,.2)"},media:{borderRadius:"4px",marginRight:function(t){return"row"===t.direction?e.spacing(3):0},objectFit:"cover",objectPosition:"center",flexBasis:function(e){return"row"===e.direction?"32%":"100%"},width:function(e){return"row"===e.direction?"32%":"100%"},minWidth:function(e){return"row"===e.direction?"32%":"100%"},height:function(e){return"column"===e.direction?200:"auto"},maxHeight:function(e){return"column"===e.direction?200:250},overflow:"hidden",backgroundColor:"lightgray"},title:(t={lineHeight:"1.25em",overflow:"hidden",maxHeight:"3.75em"},Object(f.a)(t,e.breakpoints.up("xs"),{maxHeight:"8.75em"}),Object(f.a)(t,"fontFamily","Quattrocento"),Object(f.a)(t,"marginBottom",".75rem"),Object(f.a)(t,"color","rgba(0,0,0,.8)"),Object(f.a)(t,"textDecoration","none"),Object(f.a)(t,"display","block"),Object(f.a)(t,"&:hover",{color:w.a.blue[600],transition:"color .3s"}),t),description:Object(f.a)({fontFamily:"Montserrat",lineHeight:"1.4em",maxHeight:"5.6em",color:"rgba(0,0,0,.64)",overflow:"hidden"},e.breakpoints.only("xs"),{display:function(e){return"row"===e.direction?"none":"block"}}),meta:{fontSize:14},avatar:{width:40,height:40,marginRight:"0.8em",borderRadius:"50%",float:"left"},actions:{float:"right",display:"flex",height:40,justifyContent:"space-evenly",alignItems:"center"},heart:{display:"flex",color:"rgba(0,0,0,.2)","&:hover":{color:j.a[500]}}})}));function k(e){var t=e.direction,a=e.description,n=e.title,i=e.domain,c=e.friendlyDate,o=e.imageTitle,l=e.imageUrl,s=e.url,m=O({direction:t,imageUrl:l});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:m.card},l&&r.a.createElement("img",{className:m.media,src:l,title:o}),r.a.createElement("div",null,r.a.createElement("h2",null,r.a.createElement("a",{className:m.title,href:s,target:"_blank",rel:"noreferrer noopener"},function(e){var t=(new DOMParser).parseFromString(e,"text/html"),a=t.documentElement.textContent;return t=null,a}(n))),r.a.createElement("p",{className:m.description},a),r.a.createElement("div",{className:m.meta},r.a.createElement("span",null,r.a.createElement("img",{src:"https://".concat(i,"/favicon.ico"),className:m.avatar,onError:function(e){return e.currentTarget.style.display="none"}})),r.a.createElement("span",{style:{display:"inline-flex",flexDirection:"column"}},r.a.createElement("span",{style:{color:"rgba(0,0,0,.8)",fontWeight:"bold"}},i),r.a.createElement("span",{style:{color:"rgba(0,0,0,.6)"}},c)),r.a.createElement("span",{className:m.actions},r.a.createElement(x.a,{color:"secondary",className:m.heart},r.a.createElement(E.a,null)),r.a.createElement("span",null,"50"))))))}a(191);var C=a(22);function N(e){var t=e.text,a=e.fontSize,n=void 0===a?18:a,i=e.color,c=void 0===i?C.a[600]:i;return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:20}},r.a.createElement("span",{style:{marginRight:"1em",fontSize:n,lineHeight:1,fontFamily:"Montserrat",fontWeight:"bold"}},t),r.a.createElement("svg",{width:2*n,height:n,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:c},r.a.createElement("circle",{cx:"15",cy:"15",r:"15"},r.a.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),r.a.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})),r.a.createElement("circle",{cx:"60",cy:"15",r:"9",fillOpacity:"0.3"},r.a.createElement("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),r.a.createElement("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})),r.a.createElement("circle",{cx:"105",cy:"15",r:"15"},r.a.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),r.a.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}))))}var S=a(6);function M(e){var t=e.direction,a=e.searchTerm,i=Object(n.useState)([]),c=Object(o.a)(i,2),s=c[0],p=c[1],g=Object(n.useState)(!0),f=Object(o.a)(g,2),b=f[0],E=f[1],v=Object(n.useState)(2),y=Object(o.a)(v,2),w=y[0],x=y[1],j=Object(S.f)().language,O=function(e){return"https://pokopek.com/api/articles?language=".concat(null!==j&&void 0!==j?j:"","&pagenumber=").concat(e,"&search=").concat(a)};Object(n.useEffect)((function(){var e=function(){var e=Object(u.a)(m.a.mark((function e(){var t,a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=O(1),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,p(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();window.scrollTo(0,0),E(!0),e(),E(!1),x(2)}),[j,a]);var C=function(){var e=Object(u.a)(m.a.mark((function e(t){var a,n,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=O(w),e.next=3,fetch(a);case 3:return e.next=5,e.sent.json();case 5:n=e.sent,r=[].concat(Object(l.a)(s),Object(l.a)(n)),p(r),x(w+1),E(!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(h.a,{pageStart:0,initialLoad:!1,loadMore:C,hasMore:!0,loader:void 0,threshold:300,style:{overflow:"hidden",padding:"0 8px",minHeight:"100vh"}},a&&s.length>0&&R("Artigos que cont\xeam a palavra",a),a&&0===s.length&&R("N\xe3o foram encontados artigos relacionados com a palavra ",a),r.a.createElement(d.a,{container:!0,spacing:2,justify:"center"},b&&r.a.createElement(N,{text:"A carregar"}),!b&&s.map((function(e){return r.a.createElement(d.a,{item:!0,key:e.url,xs:12,sm:"row"===t?12:6,md:"row"===t?10:4,lg:"row"===t?8:4},r.a.createElement(k,Object.assign({direction:t},e)))}))))}function R(e,t){return r.a.createElement(p.a,{component:"h2",align:"center",color:"textPrimary",style:{margin:"2rem"},variant:"h5"},e," ",r.a.createElement("strong",null,t))}var I=a(10),H=a(196),D=a(197),F=a(200),T=a(19),W=a(173),B=a.n(W),P=a(174),U=a.n(P),z=Object(v.a)((function(e){return Object(y.a)({root:{zIndex:10,padding:10,position:"fixed",top:0,left:0,right:0,backgroundColor:"white"},menuButton:{marginRight:e.spacing(2)},brand:Object(f.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(f.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(I.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(I.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(f.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"10ch",backgroundColor:"rgba(0,0,0,.08)",borderRadius:"2em"},e.breakpoints.only("xs"),{width:"2ch","&:focus":{width:"100%",position:"fixed",left:0,right:0,padding:20,backgroundColor:"white"}})})}));function L(e){e.height;var t=e.onDirectionChanges,a=e.onHandleSearch,i=Object(n.useState)(""),c=Object(o.a)(i,2),l=c[0],s=c[1],m=z();return r.a.createElement("nav",{style:{},className:m.root},r.a.createElement(H.a,null,r.a.createElement(d.a,{container:!0,alignItems:"center",spacing:0},r.a.createElement(d.a,{item:!0},r.a.createElement("img",{style:{height:30},src:"/portugalasmanchetes/favicon.png",alt:""})),r.a.createElement(d.a,{item:!0},r.a.createElement(T.b,{to:"/es"},r.a.createElement(D.a,null,"ES"))),r.a.createElement(d.a,{item:!0},r.a.createElement(T.b,{to:"/pt"},r.a.createElement(D.a,null,"PT"))),r.a.createElement(d.a,{item:!0},r.a.createElement(x.a,{onClick:t},r.a.createElement(B.a,{style:{display:"block"}}))),r.a.createElement(d.a,{item:!0},r.a.createElement("div",{className:m.search},r.a.createElement("div",{className:m.searchIcon},r.a.createElement(U.a,null)),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a(l)}},r.a.createElement(F.a,{value:l,onChange:function(e){s(e.currentTarget.value)},classes:{root:m.inputRoot,input:m.inputInput},inputProps:{"aria-label":"search"}})))))))}var A=function(){var e=Object(n.useState)("row"),t=Object(o.a)(e,2),a=t[0],i=t[1],c=Object(n.useState)(""),l=Object(o.a)(c,2),s=l[0],m=l[1];return r.a.createElement("div",{className:"App"},r.a.createElement(L,{onHandleSearch:function(e){console.log(e),m(e)},onDirectionChanges:function(){return i("column"===a?"row":"column")}}),r.a.createElement("div",{style:{maxWidth:1140,margin:"2em auto"}},r.a.createElement(S.c,null,r.a.createElement(S.a,{path:"/:language",render:function(e){return r.a.createElement(M,Object.assign({},e,{direction:a,searchTerm:s}))}}),r.a.createElement(S.a,{path:"/",render:function(e){return r.a.createElement(M,Object.assign({},e,{direction:a,searchTerm:s}))}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=a(175),q=a(324),G=a(198),Q=Object(J.a)({typography:{fontFamily:"Montserrat,-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Ubuntu', 'sans-serif'"}});c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(q.a,{theme:Q},r.a.createElement(G.a,null),r.a.createElement(T.a,{basename:"/portugalasmanchetes"},r.a.createElement(A,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[178,1,2]]]);
//# sourceMappingURL=main.9a626305.chunk.js.map