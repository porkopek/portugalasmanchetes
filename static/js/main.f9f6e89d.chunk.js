(this.webpackJsonpnewsclient=this.webpackJsonpnewsclient||[]).push([[0],{198:function(e,t,a){e.exports=a(225)},203:function(e,t,a){},225:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),i=(a(203),a(13)),l=a(4),s=a(336),u=a(339),m=a(14),d=a(206),p=a(208),g=a(211),b=a(212),f=a(16),h=a(183),E=a.n(h),v=a(182),y=a.n(v),j=Object(s.a)((function(e){return Object(u.a)({root:{zIndex:10,padding:10,position:"fixed",top:0,left:0,right:0,backgroundColor:"white"},menuButton:{marginRight:e.spacing(2)},brand:Object(l.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(l.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(m.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(m.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(l.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%",backgroundColor:"rgba(0,0,0,.08)",borderRadius:"2em"},e.breakpoints.only("xs"),{width:"2ch","&:focus":{width:"100%",position:"fixed",left:0,right:0,padding:20,backgroundColor:"white"}})})}));function x(e){var t=e.onDirectionChanges,a=j();return r.a.createElement("nav",{style:{},className:a.root},r.a.createElement(d.a,null,r.a.createElement(p.a,{container:!0,alignItems:"center",spacing:0},r.a.createElement(p.a,{item:!0},r.a.createElement(f.b,{to:"/"},r.a.createElement("img",{style:{height:30},src:"/portugalasmanchetes/favicon.png",alt:""}))),r.a.createElement(p.a,{item:!0},r.a.createElement(f.b,{to:"/language/es"},r.a.createElement(g.a,null,"ES"))),r.a.createElement(p.a,{item:!0},r.a.createElement(f.b,{to:"/language/pt"},r.a.createElement(g.a,null,"PT"))),r.a.createElement(p.a,{item:!0},r.a.createElement(f.b,{to:"/explore"},r.a.createElement(b.a,null,r.a.createElement(y.a,null)))),r.a.createElement(p.a,{item:!0},r.a.createElement(b.a,{onClick:t},r.a.createElement(E.a,{style:{display:"block"}}))))))}var w=a(7),O=a(19),k=a(29),C=a.n(k),S=a(56),N=a(185),T=a(218),R=a(41),I=a(184),M=a(190),F=a.n(M),D=a(189),B=a.n(D),W=a(21),H=a(34),z=a(37);var L=a(215),P=a(219),U=a(220),A=a(188),J=a.n(A),Q=Object(s.a)((function(e){var t;return Object(u.a)({closeButton:(t={},Object(l.a)(t,e.breakpoints.up("md"),{display:"none"}),Object(l.a)(t,e.breakpoints.down("sm"),{position:"fixed",backgroundColor:"rgba(200,0,0,.4)",color:"white",right:2,top:2}),t),dialogTitle:{fontWeight:"bold",fontFamily:"Quattrocento",fontSize:"1.8em",lineHeight:1.3}})}));function q(e){var t=e.imageUrl,a=e.title,n=e.fullText,o=e.showDialog,c=e.onShowDialog,i=Object(N.a)(),l=Q();return r.a.createElement(L.a,{maxWidth:"md",fullWidth:!0,scroll:"body",fullScreen:Object(T.a)(i.breakpoints.down("sm")),open:o,onClose:function(){return c(!1)}},r.a.createElement(b.a,{size:"small",color:"secondary",onClick:function(e){return c(!1)},className:l.closeButton},r.a.createElement(J.a,null)),r.a.createElement("img",{src:t,alt:"",style:{width:"100%",objectFit:"cover"}}),r.a.createElement("div",{style:{padding:Object(T.a)(i.breakpoints.up("md"))?"20px 40px 200px":"0"}},r.a.createElement(P.a,{disableTypography:!0,className:l.dialogTitle},a),r.a.createElement(U.a,null,n.split(/[\n]/g).map((function(e,t){return r.a.createElement("p",{style:{color:i.palette.grey[800],textAlign:"justify"},key:t},e)})))))}var G=Object(s.a)((function(e){var t;return Object(u.a)({card:{borderRadius:"4px",backgroundColor:"white",padding:function(t){return t.imageUrl?e.spacing(2):"".concat(e.spacing(4),"px ").concat(e.spacing(6),"px")},display:"flex",flexDirection:function(e){return e.direction},maxWidth:function(e){return"row"===e.direction?"100%":"32%"},minWidth:"100%",width:"100%",boxShadow:"0 2px 5px rgba(0,0,0,.2)"},body:{width:"100%"},media:{borderRadius:"4px",marginRight:function(t){return"row"===t.direction?e.spacing(3):0},objectFit:"cover",objectPosition:"center",flexBasis:function(e){return"row"===e.direction?"32%":"100%"},width:function(e){return"row"===e.direction?"32%":"100%"},minWidth:function(e){return"row"===e.direction?"32%":"100%"},height:function(e){return"column"===e.direction?200:"auto"},maxHeight:function(e){return"column"===e.direction?200:250},overflow:"hidden",backgroundColor:"lightgray"},title:(t={lineHeight:"1.25em",overflow:"hidden",maxHeight:"3.75em"},Object(l.a)(t,e.breakpoints.up("xs"),{maxHeight:"8.75em"}),Object(l.a)(t,"fontFamily","Quattrocento"),Object(l.a)(t,"marginBottom",".75rem"),Object(l.a)(t,"color",e.palette.text.primary),Object(l.a)(t,"textDecoration","none"),Object(l.a)(t,"display","block"),Object(l.a)(t,"&:hover",{color:W.a.blue[600],transition:"color .3s"}),t),description:Object(l.a)({fontFamily:"Montserrat",lineHeight:"1.4em",maxHeight:"5.6em",color:"rgba(0,0,0,.64)",overflow:"hidden"},e.breakpoints.only("xs"),{display:function(e){return"row"===e.direction?"none":"block"}}),meta:{fontSize:14},avatar:{width:40,height:40,marginRight:"0.8em",borderRadius:"50%",float:"left"},actions:{float:"right",display:"flex",height:40,justifyContent:"space-evenly",alignItems:"center"},heart:{display:"flex",color:"rgba(0,0,0,.3)","&:hover":{color:H.a[500]}},readMore:{display:"flex",color:"rgba(0,0,0,.3)","&:hover":{color:z.a[500],backgroundColor:"rgba(0, 100, 0, 0.03)"}}})}));function $(e){var t=e.direction,a=e.description,o=e.title,c=e.domain,l=e.friendlyDate,s=e.imageTitle,u=e.imageUrl,m=e.fullText,d=e.url,p=G({direction:t,imageUrl:u}),g=Object(N.a)(),h=Object(n.useState)(!1),E=Object(i.a)(h,2),v=E[0],y=E[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:p.card},u&&r.a.createElement("img",{className:p.media,src:u,title:s,onError:function(e){return e.currentTarget.style.display="none"},alt:s}),r.a.createElement("div",{className:p.body},r.a.createElement("h2",null,r.a.createElement("a",{className:p.title,href:d,target:"_blank",rel:"noreferrer noopener"},function(e){var t=(new DOMParser).parseFromString(e,"text/html"),a=t.documentElement.textContent;return t=null,a}(o))),r.a.createElement("p",{className:p.description},a),r.a.createElement("div",{className:p.meta},r.a.createElement("span",null,r.a.createElement("img",{src:"https://".concat(c,"/favicon.ico"),className:p.avatar,onError:function(e){return e.currentTarget.style.display="none"},alt:"icon"})),r.a.createElement("span",{style:{display:"inline-flex",flexDirection:"column"}},r.a.createElement("div",{style:{color:"rgba(0,0,0,.8)",fontWeight:"bold"}},r.a.createElement(f.b,{to:"/source/".concat(c)},r.a.createElement("span",{style:{color:g.palette.text.primary}},c))),r.a.createElement("span",{style:{color:"rgba(0,0,0,.6)"}},l)),r.a.createElement("span",{className:p.actions},m&&r.a.createElement(b.a,{color:"primary",onClick:function(e){y(!v)},className:p.readMore},r.a.createElement(B.a,null)),r.a.createElement(b.a,{color:"secondary",className:p.heart},r.a.createElement(q,{title:o,imageUrl:u,fullText:m,showDialog:v,onShowDialog:y}),r.a.createElement(F.a,null)))))))}a(221);var _=a(31);function K(e){var t=e.text,a=e.fontSize,n=void 0===a?18:a,o=e.color,c=void 0===o?_.a[600]:o;return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:20}},r.a.createElement("span",{style:{marginRight:"1em",fontSize:n,lineHeight:1,fontFamily:"Montserrat",fontWeight:"bold"}},t),r.a.createElement("svg",{width:2*n,height:n,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:c},r.a.createElement("circle",{cx:"15",cy:"15",r:"15"},r.a.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),r.a.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})),r.a.createElement("circle",{cx:"60",cy:"15",r:"9",fillOpacity:"0.3"},r.a.createElement("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),r.a.createElement("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})),r.a.createElement("circle",{cx:"105",cy:"15",r:"15"},r.a.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),r.a.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}))))}var V=a(222),X=a(227),Y=a(223),Z=a(191),ee=a.n(Z);function te(e){var t=e.subscriptions,a=e.subscriptionType,n=Object(N.a)();return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{component:"h2",variant:"h6",style:{fontWeight:"bold",marginTop:n.spacing(2),marginLeft:n.spacing(2),paddingBottom:3,borderBottom:"1px solid ",display:"inline-block"}},"trends"===a&&"Tend\xeancias","sources"===a&&"Jornais"),r.a.createElement(V.a,null,t.length>0&&t.map((function(e){return r.a.createElement(X.a,{key:e},r.a.createElement(b.a,null,r.a.createElement(ee.a,null)),r.a.createElement(Y.a,null,r.a.createElement(f.b,{to:("trends"===a?"/search/":"/source/")+e},r.a.createElement("span",{style:{color:n.palette.text.primary}},e))))}))))}function ae(e){var t=e.direction,a=Object(N.a)(),o=Object(T.a)(a.breakpoints.down("md"),{noSsr:!0}),c=Object(n.useState)([]),l=Object(i.a)(c,2),s=l[0],u=l[1],m=Object(n.useState)(!0),d=Object(i.a)(m,2),g=d[0],b=d[1],f=Object(n.useState)(!1),h=Object(i.a)(f,2),E=h[0],v=h[1],y=Object(n.useState)(2),j=Object(i.a)(y,2),x=j[0],k=j[1],R=Object(n.useState)([]),M=Object(i.a)(R,2),F=M[0],D=M[1],B=Object(w.h)(),W=B.language,H=B.searchTerm,z=B.domain,L=function(e){return"https://pokopek.com/api/articles?language=".concat(null!==W&&void 0!==W?W:"","&pagenumber=").concat(e,"&search=").concat(null!==H&&void 0!==H?H:"","&domain=").concat(null!==z&&void 0!==z?z:"")};Object(n.useEffect)((function(){o||function(){var e=Object(S.a)(C.a.mark((function e(){var t;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokopek.com/api/articles/sources");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,D(t.sort());case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),Object(n.useEffect)((function(){var e=function(){var e=Object(S.a)(C.a.mark((function e(){var t,a,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=L(1),e.next=3,fetch(t);case 3:return a=e.sent,e.next=6,a.json();case 6:n=e.sent,v(0===n.length),u(n),b(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();b(!0),e(),k(2)}),[W,z]);var P=function(){var e=Object(S.a)(C.a.mark((function e(){var t,a,n;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=L(x),e.next=3,fetch(t);case 3:return e.next=5,e.sent.json();case 5:a=e.sent,n=[].concat(Object(O.a)(s),Object(O.a)(a)),u(n),k(x+1),b(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(p.a,{container:!0},r.a.createElement(p.a,{item:!0,sm:12,md:8},r.a.createElement(I.a,{dataLength:s.length,next:P,hasMore:!0,loader:r.a.createElement(K,{fontSize:24}),style:{overflow:"hidden",padding:"0 8px",minHeight:"100vh"}},H&&s.length>0&&ne("Artigos que cont\xeam a palavra",H),E&&ne("N\xe3o foram encontrados artigos relacionados com a palavra ",H),r.a.createElement(p.a,{container:!0,spacing:2},g&&r.a.createElement(K,{fontSize:24}),!g&&s.map((function(e){return r.a.createElement(p.a,{item:!0,key:e.id,xs:12,sm:"row"===t?12:6,md:"row"===t?10:4,lg:"row"===t?10:4},r.a.createElement($,Object.assign({direction:t},e)))}))))),!o&&r.a.createElement(p.a,{item:!0,xs:1,md:3},r.a.createElement(te,{subscriptions:F,subscriptionType:"sources"})))}function ne(e,t){return r.a.createElement(R.a,{component:"h2",color:"textPrimary",style:{margin:"1rem"},variant:"h6"},e," ",r.a.createElement("strong",null,t))}var re=a(226),oe=a(192),ce=a.n(oe),ie=Object(s.a)((function(e){return Object(u.a)({root:{width:"100%",backgroundColor:"rgba(0,0,0,.04)",borderRadius:7,padding:e.spacing()},search:Object(l.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(m.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(m.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(l.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%",borderRadius:e.shape.borderRadius},e.breakpoints.only("xs"),{})})}));function le(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],o=t[1],c=ie(),l=Object(w.f)().push;return r.a.createElement("div",{className:c.search},r.a.createElement("div",{className:c.searchIcon},r.a.createElement(ce.a,null)),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),l("/search/".concat(a))}},r.a.createElement(re.a,{value:a,placeholder:"Procurar em Portugal \xe0s Manchetes",onChange:function(e){o(e.currentTarget.value)},classes:{root:c.root,input:c.inputInput},inputProps:{"aria-label":"search"}})))}function se(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(le,null),r.a.createElement(te,{subscriptionType:"trends",subscriptions:["coronavirus","maddie","estatua","floyd","centeno","iglesias","governo","gobierno","praias","covid-19","vox","espa\xf1a","portugal"]}))}function ue(e){var t=e.direction;return r.a.createElement(d.a,{style:{padding:"28px 0"}},r.a.createElement(w.c,null,r.a.createElement(w.a,{path:"/explore",render:function(e){return r.a.createElement(se,null)}}),r.a.createElement(w.a,{path:"/search/:searchTerm",render:function(e){return r.a.createElement(ae,Object.assign({},e,{direction:t}))}}),r.a.createElement(w.a,{path:"/language/:language",render:function(e){return r.a.createElement(ae,Object.assign({},e,{direction:t}))}}),r.a.createElement(w.a,{path:"/source/:domain",render:function(e){return r.a.createElement(ae,Object.assign({},e,{direction:t}))}}),r.a.createElement(w.a,{path:"/",exact:!0,render:function(e){return r.a.createElement(ae,Object.assign({},e,{direction:t}))}}),r.a.createElement(w.a,{path:"*",render:function(e){return r.a.createElement(r.a.Fragment,null,"404")}})))}var me=function(){var e=localStorage.getItem("direction"),t=Object(n.useState)(e||"row"),a=Object(i.a)(t,2),o=a[0],c=a[1],l=Object(n.useState)(""),s=Object(i.a)(l,2)[1];return r.a.createElement("div",{className:"App"},r.a.createElement(x,{onHandleSearch:function(e){console.log(e),s(e)},onDirectionChanges:function(){var e="column"===o?"row":"column";localStorage.setItem("direction",e),c(e)}}),r.a.createElement(ue,{direction:o}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var de=a(193),pe=a(338),ge=a(224);function be(){var e=Object(w.g)().pathname;return Object(n.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var fe=Object(de.a)({typography:{fontFamily:"Montserrat,-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Ubuntu', 'sans-serif'"}});c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(pe.a,{theme:fe},r.a.createElement(ge.a,null),r.a.createElement(f.a,{basename:"/portugalasmanchetes"},r.a.createElement(be,null),r.a.createElement(me,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[198,1,2]]]);
//# sourceMappingURL=main.f9f6e89d.chunk.js.map