(this.webpackJsonpnewsclient=this.webpackJsonpnewsclient||[]).push([[0],{202:function(e,t,n){e.exports=n(229)},207:function(e,t,n){},229:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(11),i=n.n(o),l=(n(207),n(13)),c=n(4),s=n(340),u=n(343),m=n(210),p=n(212),d=n(215),h=n(216),f=n(16),g=n(184),b=n.n(g),v=n(183),E=n.n(v),y=Object(s.a)((function(e){return Object(u.a)({root:{zIndex:10,padding:10,position:"fixed",top:0,left:0,right:0,backgroundColor:"white"},menuButton:Object(c.a)({},e.breakpoints.down("sm"),{minWidth:44}),brand:Object(c.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"})})}));function w(e){var t=e.onDirectionChanges,n=y();return r.a.createElement("nav",{style:{},className:n.root},r.a.createElement(m.a,null,r.a.createElement(p.a,{container:!0,alignItems:"center",spacing:0},r.a.createElement(p.a,{item:!0},r.a.createElement(f.b,{to:"/"},r.a.createElement("img",{style:{height:30},src:"/portugalasmanchetes/favicon.png",alt:""}))),r.a.createElement(p.a,{item:!0},r.a.createElement(f.b,{to:"/language/es"},r.a.createElement(d.a,{className:n.menuButton},"ES"))),r.a.createElement(p.a,{item:!0},r.a.createElement(f.b,{to:"/language/en"},r.a.createElement(d.a,{className:n.menuButton},"EN"))),r.a.createElement(p.a,{item:!0},r.a.createElement(f.b,{to:"/language/pt"},r.a.createElement(d.a,{className:n.menuButton},"PT"))),r.a.createElement(p.a,{item:!0},r.a.createElement(f.b,{to:"/explore"},r.a.createElement(h.a,null,r.a.createElement(E.a,null)))),r.a.createElement(p.a,{item:!0},r.a.createElement(h.a,{onClick:t},r.a.createElement(b.a,{style:{display:"block"}}))))))}var j=n(7),x=n(20),O=n(32),S=n.n(O),T=n(57),k=n(185),M=n(222),N=n(43),C=n(190),D=n.n(C),L=n(189),R=n.n(L),Y=n(22),_=n(37),B=n(40);var F=n(219),H=n(223),P=n(224),I=n(188),W=n.n(I),z=Object(s.a)((function(e){var t;return Object(u.a)({closeButton:(t={zIndex:1111},Object(c.a)(t,e.breakpoints.up("md"),{display:"none"}),Object(c.a)(t,e.breakpoints.down("sm"),{position:"fixed",backgroundColor:"rgba(200,0,0,.4)",color:"white",right:2,top:2}),t),dialogTitle:{fontWeight:"bold",fontFamily:"Quattrocento",fontSize:"1.8em",lineHeight:1.3}})}));function A(e){var t=e.imageUrl,n=e.title,a=e.fullText,o=e.showDialog,i=e.onShowDialog,l=Object(k.a)(),c=z();return r.a.createElement(F.a,{maxWidth:"md",fullWidth:!0,scroll:"body",fullScreen:Object(M.a)(l.breakpoints.down("sm")),open:o,onClose:function(){return i(!1)}},r.a.createElement(h.a,{size:"small",color:"secondary",onClick:function(e){return i(!1)},className:c.closeButton},r.a.createElement(W.a,null)),r.a.createElement("img",{src:t,alt:"",style:{width:"100%",objectFit:"cover"}}),r.a.createElement("div",{style:{padding:Object(M.a)(l.breakpoints.up("md"))?"20px 40px 200px":"0"}},r.a.createElement(H.a,{disableTypography:!0,className:c.dialogTitle},n),r.a.createElement(P.a,null,a.split(/[\n]/g).map((function(e,t){return r.a.createElement("p",{style:{color:l.palette.grey[800],textAlign:"justify"},key:t},e)})))))}var U=Object(s.a)((function(e){var t;return Object(u.a)({card:{borderRadius:"4px",backgroundColor:"white",padding:function(t){return t.imageUrl?e.spacing(2):"".concat(e.spacing(4),"px ").concat(e.spacing(6),"px")},display:"flex",flexDirection:function(e){return e.direction},maxWidth:function(e){return"row"===e.direction?"100%":"32%"},minWidth:"100%",width:"100%",boxShadow:"0 2px 5px rgba(0,0,0,.2)"},body:{width:"100%",overflow:"hidden"},media:{borderRadius:"4px",marginRight:function(t){return"row"===t.direction?e.spacing(3):0},objectFit:"cover",objectPosition:"center",flexBasis:function(e){return"row"===e.direction?"32%":"100%"},width:function(e){return"row"===e.direction?"32%":"100%"},minWidth:function(e){return"row"===e.direction?"32%":"100%"},height:function(e){return"column"===e.direction?200:"auto"},maxHeight:function(e){return"column"===e.direction?200:250},overflow:"hidden",backgroundColor:"lightgray"},title:(t={lineHeight:"1.25em",overflow:"hidden",maxHeight:"3.75em"},Object(c.a)(t,e.breakpoints.up("xs"),{maxHeight:"8.75em"}),Object(c.a)(t,"fontFamily","Quattrocento"),Object(c.a)(t,"marginBottom",".75rem"),Object(c.a)(t,"color",e.palette.text.primary),Object(c.a)(t,"textDecoration","none"),Object(c.a)(t,"display","block"),Object(c.a)(t,"&:hover",{color:Y.a.blue[600],transition:"color .3s"}),t),description:Object(c.a)({fontFamily:"Montserrat",lineHeight:"1.4em",maxHeight:"5.6em",color:"rgba(0,0,0,.64)",overflow:"hidden"},e.breakpoints.only("xs"),{display:function(e){return"row"===e.direction?"none":"block"}}),meta:{fontSize:14},avatar:{width:40,height:40,marginRight:"0.8em",borderRadius:"50%",float:"left"},actions:{float:"right",display:"flex",height:40,justifyContent:"space-evenly",alignItems:"center"},heart:{display:"flex",color:"rgba(0,0,0,.3)","&:hover":{color:_.a[500]}},readMore:{display:"flex",color:"rgba(0,0,0,.3)","&:hover":{color:B.a[500],backgroundColor:"rgba(0, 100, 0, 0.03)"}}})}));function J(e){var t=e.direction,n=e.description,o=e.title,i=e.domain,c=e.friendlyDate,s=e.imageTitle,u=e.imageUrl,m=e.fullText,p=e.url,d=U({direction:t,imageUrl:u}),g=Object(k.a)(),b=Object(a.useState)(!1),v=Object(l.a)(b,2),E=v[0],y=v[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:d.card},u&&r.a.createElement("img",{className:d.media,src:u,title:s,onError:function(e){return e.currentTarget.style.display="none"},alt:s}),r.a.createElement("div",{className:d.body},r.a.createElement("h2",null,r.a.createElement("a",{className:d.title,href:p,target:"_blank",rel:"noreferrer noopener"},function(e){var t=(new DOMParser).parseFromString(e,"text/html"),n=t.documentElement.textContent;return t=null,n}(o))),r.a.createElement("p",{className:d.description},n),r.a.createElement("div",{className:d.meta},r.a.createElement("span",null,r.a.createElement("img",{src:"https://".concat(i,"/favicon.ico"),className:d.avatar,onError:function(e){return e.currentTarget.style.display="none"},alt:"icon"})),r.a.createElement("span",{style:{display:"inline-flex",flexDirection:"column"}},r.a.createElement("div",{style:{color:"rgba(0,0,0,.8)",fontWeight:"bold"}},r.a.createElement(f.b,{to:"/source/".concat(i)},r.a.createElement("span",{style:{color:g.palette.text.primary}},i))),r.a.createElement("span",{style:{color:"rgba(0,0,0,.6)"}},c)),r.a.createElement("span",{className:d.actions},m&&r.a.createElement(h.a,{color:"primary",onClick:function(e){y(!E)},className:d.readMore},r.a.createElement(R.a,null)),r.a.createElement(h.a,{color:"secondary",className:d.heart},r.a.createElement(A,{title:o,imageUrl:u,fullText:m,showDialog:E,onShowDialog:y}),r.a.createElement(D.a,null)))))))}n(225);var $=n(34);function q(e){var t=e.text,n=e.fontSize,a=void 0===n?18:n,o=e.color,i=void 0===o?$.a[600]:o;return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:20}},r.a.createElement("span",{style:{marginRight:"1em",fontSize:a,lineHeight:1,fontFamily:"Montserrat",fontWeight:"bold"}},t),r.a.createElement("svg",{width:2*a,height:a,viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:i},r.a.createElement("circle",{cx:"15",cy:"15",r:"15"},r.a.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),r.a.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"})),r.a.createElement("circle",{cx:"60",cy:"15",r:"9",fillOpacity:"0.3"},r.a.createElement("animate",{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}),r.a.createElement("animate",{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"})),r.a.createElement("circle",{cx:"105",cy:"15",r:"15"},r.a.createElement("animate",{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}),r.a.createElement("animate",{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}))))}var Q=n(226),G=n(231),V=n(227),K=n(191),X=n.n(K),Z=Object(s.a)((function(){return Object(u.a)({stickyPannel:{position:"sticky",top:80,maxHeight:"90vh",overflow:"hidden","&:hover":{overflowY:"scroll"}}})}));function ee(e){var t=e.subscriptions,n=e.subscriptionType,a=e.position,o=Object(k.a)(),i=Z();return r.a.createElement("div",{className:"sticky"===a?i.stickyPannel:void 0},r.a.createElement(N.a,{component:"h2",variant:"h6",style:{fontWeight:"bold",marginTop:o.spacing(2),marginLeft:o.spacing(2),paddingBottom:3,borderBottom:"1px solid ",display:"inline-block"}},"trends"===n&&"Tend\xeancias","sources"===n&&"Jornais"),r.a.createElement(Q.a,null,t.length>0&&t.map((function(e){return r.a.createElement(G.a,{key:e},r.a.createElement(h.a,null,r.a.createElement(X.a,null)),r.a.createElement(V.a,null,r.a.createElement(f.b,{to:("trends"===n?"/search/":"/source/")+e},r.a.createElement("span",{style:{color:o.palette.text.primary}},e))))}))))}var te=n(192),ne=n(56),ae=n(26),re=n(18),oe=n(198),ie=n(197),le=n(193),ce="Pixel",se="Percent",ue={unit:se,value:.8};function me(e){return"number"===typeof e?{unit:se,value:100*e}:"string"===typeof e?e.match(/^(\d*(\.\d+)?)px$/)?{unit:ce,value:parseFloat(e)}:e.match(/^(\d*(\.\d+)?)%$/)?{unit:se,value:parseFloat(e)}:(console.warn('scrollThreshold format is invalid. Valid formats: "120px", "50%"...'),ue):(console.warn("scrollThreshold should be string or number"),ue)}var pe=function(e){Object(oe.a)(n,e);var t=Object(ie.a)(n);function n(e){var a;return Object(ne.a)(this,n),(a=t.call(this,e)).throttledOnScrollListener=void 0,a._scrollableNode=void 0,a.el=void 0,a._infScroll=void 0,a.lastScrollTop=0,a.actionTriggered=!1,a._pullDown=void 0,a.startY=0,a.currentY=0,a.dragging=!1,a.maxPullDownDistance=0,a.getScrollableTarget=function(){return a.props.scrollableTarget instanceof HTMLElement?a.props.scrollableTarget:"string"===typeof a.props.scrollableTarget?document.getElementById(a.props.scrollableTarget):(null===a.props.scrollableTarget&&console.warn("You are trying to pass scrollableTarget but it is null. This might\n        happen because the element may not have been added to DOM yet.\n        See https://github.com/ankeetmaini/react-infinite-scroll-component/issues/59 for more info.\n      "),null)},a.onStart=function(e){a.lastScrollTop||(a.dragging=!0,e instanceof MouseEvent?a.startY=e.pageY:e instanceof TouchEvent&&(a.startY=e.touches[0].pageY),a.currentY=a.startY,a._infScroll&&(a._infScroll.style.willChange="transform",a._infScroll.style.transition="transform 0.2s cubic-bezier(0,0,0.31,1)"))},a.onMove=function(e){a.dragging&&(e instanceof MouseEvent?a.currentY=e.pageY:e instanceof TouchEvent&&(a.currentY=e.touches[0].pageY),a.currentY<a.startY||(a.currentY-a.startY>=Number(a.props.pullDownToRefreshThreshold)&&a.setState({pullToRefreshThresholdBreached:!0}),a.currentY-a.startY>1.5*a.maxPullDownDistance||a._infScroll&&(a._infScroll.style.overflow="visible",a._infScroll.style.transform="translate3d(0px, ".concat(a.currentY-a.startY,"px, 0px)"))))},a.onEnd=function(){a.startY=0,a.currentY=0,a.dragging=!1,a.state.pullToRefreshThresholdBreached&&(a.props.refreshFunction&&a.props.refreshFunction(),a.setState({pullToRefreshThresholdBreached:!1})),requestAnimationFrame((function(){a._infScroll&&(a._infScroll.style.overflow="auto",a._infScroll.style.transform="none",a._infScroll.style.willChange="none")}))},a.onScrollListener=function(e){"function"===typeof a.props.onScroll&&setTimeout((function(){return a.props.onScroll&&a.props.onScroll(e)}),0);var t=a.props.height||a._scrollableNode?e.target:document.documentElement.scrollTop?document.documentElement:document.body;a.actionTriggered||(a.isElementAtBottom(t,a.props.scrollThreshold)&&a.props.hasMore&&(a.actionTriggered=!0,a.setState({showLoader:!0}),a.props.next&&a.props.next()),a.lastScrollTop=t.scrollTop)},a.state={showLoader:!1,pullToRefreshThresholdBreached:!1},a.throttledOnScrollListener=Object(le.a)(150,a.onScrollListener).bind(Object(re.a)(a)),a.onStart=a.onStart.bind(Object(re.a)(a)),a.onMove=a.onMove.bind(Object(re.a)(a)),a.onEnd=a.onEnd.bind(Object(re.a)(a)),a}return Object(ae.a)(n,[{key:"componentDidMount",value:function(){if("undefined"===typeof this.props.dataLength)throw new Error('mandatory prop "dataLength" is missing. The prop is needed when loading more content. Check README.md for usage');if(this._scrollableNode=this.getScrollableTarget(),this.el=this.props.height?this._infScroll:this._scrollableNode||window,this.el&&this.el.addEventListener("scroll",this.throttledOnScrollListener),"number"===typeof this.props.initialScrollY&&this.el&&this.el instanceof HTMLElement&&this.el.scrollHeight>this.props.initialScrollY&&this.el.scrollTo(0,this.props.initialScrollY),this.props.pullDownToRefresh&&this.el&&(this.el.addEventListener("touchstart",this.onStart),this.el.addEventListener("touchmove",this.onMove),this.el.addEventListener("touchend",this.onEnd),this.el.addEventListener("mousedown",this.onStart),this.el.addEventListener("mousemove",this.onMove),this.el.addEventListener("mouseup",this.onEnd),this.maxPullDownDistance=this._pullDown&&this._pullDown.firstChild&&this._pullDown.firstChild.getBoundingClientRect().height||0,this.forceUpdate(),"function"!==typeof this.props.refreshFunction))throw new Error('Mandatory prop "refreshFunction" missing.\n          Pull Down To Refresh functionality will not work\n          as expected. Check README.md for usage\'')}},{key:"componentWillUnmount",value:function(){this.el&&(this.el.removeEventListener("scroll",this.throttledOnScrollListener),this.props.pullDownToRefresh&&(this.el.removeEventListener("touchstart",this.onStart),this.el.removeEventListener("touchmove",this.onMove),this.el.removeEventListener("touchend",this.onEnd),this.el.removeEventListener("mousedown",this.onStart),this.el.removeEventListener("mousemove",this.onMove),this.el.removeEventListener("mouseup",this.onEnd)))}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.props.key===e.key&&this.props.dataLength===e.dataLength||(this.actionTriggered=!1,this.setState({showLoader:!1}))}},{key:"isElementAtBottom",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.8,n=e===document.body||e===document.documentElement?window.screen.availHeight:e.clientHeight,a=me(t);return a.unit===ce?e.scrollTop+n>=e.scrollHeight-a.value:e.scrollTop+n>=a.value/100*e.scrollHeight}},{key:"render",value:function(){var e=this,t=Object(te.a)({height:this.props.height||"auto",overflow:"auto",WebkitOverflowScrolling:"touch"},this.props.style),n=this.props.hasChildren||!!(this.props.children&&this.props.children instanceof Array&&this.props.children.length),a=this.props.pullDownToRefresh&&this.props.height?{overflow:"auto"}:{};return r.a.createElement("div",{style:a,className:"infinite-scroll-component__outerdiv"},r.a.createElement("div",{className:"infinite-scroll-component ".concat(this.props.className||""),ref:function(t){return e._infScroll=t},style:t},this.props.pullDownToRefresh&&r.a.createElement("div",{style:{position:"relative"},ref:function(t){return e._pullDown=t}},r.a.createElement("div",{style:{position:"absolute",left:0,right:0,top:-1*this.maxPullDownDistance}},this.state.pullToRefreshThresholdBreached?this.props.releaseToRefreshContent:this.props.pullDownToRefreshContent)),this.props.children,!this.state.showLoader&&!n&&this.props.hasMore&&this.props.loader,this.state.showLoader&&this.props.hasMore&&this.props.loader,!this.props.hasMore&&this.props.endMessage))}}]),n}(a.Component);function de(e){var t=e.direction,n=Object(k.a)(),o=Object(M.a)(n.breakpoints.down("md"),{noSsr:!0}),i=Object(a.useState)([]),c=Object(l.a)(i,2),s=c[0],u=c[1],m=Object(a.useState)(!0),d=Object(l.a)(m,2),h=d[0],f=d[1],g=Object(a.useState)(!1),b=Object(l.a)(g,2),v=b[0],E=b[1],y=Object(a.useState)(2),w=Object(l.a)(y,2),O=w[0],N=w[1],C=Object(a.useState)([]),D=Object(l.a)(C,2),L=D[0],R=D[1],Y=Object(j.h)(),_=Y.language,B=Y.searchTerm,F=Y.domain,H=function(e){return"https://pokopek.com/api/articles?language=".concat(null!==_&&void 0!==_?_:"","&pagenumber=").concat(e,"&search=").concat(null!==B&&void 0!==B?B:"","&domain=").concat(null!==F&&void 0!==F?F:"")};Object(a.useEffect)((function(){o||function(){var e=Object(T.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pokopek.com/api/articles/sources");case 2:return e.next=4,e.sent.json();case 4:t=e.sent,R(t.sort());case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[]),Object(a.useEffect)((function(){var e=function(){var e=Object(T.a)(S.a.mark((function e(){var t,n,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=H(1),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,window.document.body.style.height="100vh",E(0===a.length),u(a),f(!1);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();f(!0),e(),N(2)}),[_,F]);var P=function(){var e=Object(T.a)(S.a.mark((function e(){var t,n,a;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=H(O),e.next=3,fetch(t);case 3:return e.next=5,e.sent.json();case 5:n=e.sent,a=[].concat(Object(x.a)(s),Object(x.a)(n)),u(a),N(O+1),f(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(p.a,{container:!0},r.a.createElement(p.a,{item:!0,sm:12,md:8},r.a.createElement(pe,{dataLength:s.length,next:P,hasMore:!0,loader:r.a.createElement(q,{fontSize:24}),style:{overflow:"hidden",padding:"0 8px"}},B&&s.length>0&&he("Artigos que cont\xeam a palavra",B),v&&he("N\xe3o foram encontrados artigos relacionados com a palavra ",B),r.a.createElement(p.a,{container:!0,spacing:2},h&&r.a.createElement(q,{fontSize:24}),!h&&s.map((function(e){return r.a.createElement(p.a,{item:!0,key:e.id,xs:12,sm:"row"===t?12:6,md:"row"===t?10:4,lg:"row"===t?10:4},r.a.createElement(J,Object.assign({direction:t},e)))}))))),!o&&r.a.createElement(p.a,{item:!0,xs:1,md:3},r.a.createElement(ee,{subscriptions:L,subscriptionType:"sources",position:"sticky"})))}function he(e,t){return r.a.createElement(N.a,{component:"h2",color:"textPrimary",style:{margin:"1rem"},variant:"h6"},e," ",r.a.createElement("strong",null,t))}var fe=n(14),ge=n(230),be=n(194),ve=n.n(be),Ee=Object(s.a)((function(e){return Object(u.a)({root:{width:"100%",backgroundColor:"rgba(0,0,0,.04)",borderRadius:7,padding:e.spacing()},search:Object(c.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(fe.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(fe.b)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(c.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%",borderRadius:e.shape.borderRadius},e.breakpoints.only("xs"),{})})}));function ye(){var e=Object(a.useState)(""),t=Object(l.a)(e,2),n=t[0],o=t[1],i=Ee(),c=Object(j.f)().push;return r.a.createElement("div",{className:i.search},r.a.createElement("div",{className:i.searchIcon},r.a.createElement(ve.a,null)),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c("/search/".concat(n))}},r.a.createElement(ge.a,{value:n,placeholder:"Procurar em Portugal \xe0s Manchetes",onChange:function(e){o(e.currentTarget.value)},classes:{root:i.root,input:i.inputInput},inputProps:{"aria-label":"search"}})))}function we(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ye,null),r.a.createElement(ee,{subscriptionType:"trends",subscriptions:["coronavirus","maddie","estatua","floyd","centeno","iglesias","governo","gobierno","praias","covid-19","vox","espa\xf1a","portugal"]}))}function je(e){var t=e.direction;return r.a.createElement(m.a,{style:{padding:"28px 0"}},r.a.createElement(j.c,null,r.a.createElement(j.a,{path:"/explore",render:function(e){return r.a.createElement(we,null)}}),r.a.createElement(j.a,{path:"/search/:searchTerm",render:function(e){return r.a.createElement(de,Object.assign({},e,{direction:t}))}}),r.a.createElement(j.a,{path:"/language/:language",render:function(e){return r.a.createElement(de,Object.assign({},e,{direction:t}))}}),r.a.createElement(j.a,{path:"/source/:domain",render:function(e){return r.a.createElement(de,Object.assign({},e,{direction:t}))}}),r.a.createElement(j.a,{path:"/",exact:!0,render:function(e){return r.a.createElement(de,Object.assign({},e,{direction:t}))}}),r.a.createElement(j.a,{path:"*",render:function(e){return r.a.createElement(r.a.Fragment,null,"404")}})))}var xe=function(){var e=localStorage.getItem("direction"),t=Object(a.useState)(e||"row"),n=Object(l.a)(t,2),o=n[0],i=n[1],c=Object(a.useState)(""),s=Object(l.a)(c,2)[1];return r.a.createElement("div",{className:"App"},r.a.createElement(w,{onHandleSearch:function(e){console.log(e),s(e)},onDirectionChanges:function(){var e="column"===o?"row":"column";localStorage.setItem("direction",e),i(e)}}),r.a.createElement(je,{direction:o}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Oe=n(195),Se=n(342),Te=n(228);function ke(){var e=Object(j.g)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var Me=Object(Oe.a)({typography:{fontFamily:"Montserrat,-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Ubuntu', 'sans-serif'"}});i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Se.a,{theme:Me},r.a.createElement(Te.a,null),r.a.createElement(f.a,{basename:"/portugalasmanchetes"},r.a.createElement(ke,null),r.a.createElement(xe,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[202,1,2]]]);
//# sourceMappingURL=main.3c71126f.chunk.js.map