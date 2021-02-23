(this.webpackJsonpalan_ai_news_app=this.webpackJsonpalan_ai_news_app||[]).push([[0],{142:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(9),c=n.n(a),r=(n(83),n(35)),o=n(55),s=n.n(o),l=n(69),d=n.n(l),b=n(165),j=n(163),h=n(167),m=n(157),u=Object(m.a)({container:{padding:"0 5%",width:"100%",margin:0},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",width:"100%",height:"50vh",padding:"10%",borderRadius:10,color:"white"},infoCard:{display:"flex",flexDirection:"column",textAlign:"center"}}),f=n(166),p=n(164),g=n(160),x=n(161),y=n(162),O=n(74),w=n.n(O),v=Object(m.a)({media:{height:250},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderBottom:"10px solid white"},activeCard:{borderBottom:"10px solid #22289a"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),C=n(3),N=function(e){var t=e.article,n=t.description,a=t.publishedAt,c=t.source,o=t.title,s=t.url,l=t.urlToImage,d=e.i,b=e.activeArticle,j=v(),m=Object(i.useState)([]),u=Object(r.a)(m,2),O=u[0],N=u[1];return Object(i.useEffect)((function(){N((function(e){return Array(20).fill().map((function(t,n){return e[n]||Object(i.createRef)()}))}))}),[]),Object(i.useEffect)((function(){var e;d===b&&O[b]&&(e=O[b],window.scroll(0,e.current.offsetTop-50))}),[d,b,O]),Object(C.jsxs)(f.a,{ref:O[d],className:w()(j.card,b===d?j.activeCard:null),children:[Object(C.jsxs)(p.a,{href:s,target:"_blank",children:[Object(C.jsx)(g.a,{className:j.media,image:l||"https://9to5mac.com/wp-content/uploads/sites/6/2017/08/youtube_logo_dark.jpg?quality=82&strip=all"}),Object(C.jsxs)("div",{className:j.details,children:[Object(C.jsx)(h.a,{variant:"body2",color:"textSecondary",component:"h2",children:new Date(a).toDateString()}),Object(C.jsx)(h.a,{variant:"body2",color:"textSecondary",component:"h2",children:c.name})]}),Object(C.jsx)(h.a,{className:j.title,gutterBottom:!0,variant:"h5",children:o}),Object(C.jsx)(x.a,{children:Object(C.jsx)(h.a,{variant:"body2",color:"textSecondary",component:"p",children:n})})]}),Object(C.jsx)(y.a,{className:j.cardActions,children:Object(C.jsx)(h.a,{variant:"h5",color:"textSecondary",children:d+1})})]})},k=[{color:"#00838f",title:'Search for news by category, term, or by news source. For instructions, say "Instructions". You can also get general top/trending articles.',text:"Give me the latest news."},{color:"#1565c0",title:"News by Categories",info:"Business, Entertainment, General, Health, Science, Sports, Technology",text:"Give me the latest Technology news"},{color:"#4527a0",title:"News by Terms",info:"Bitcoin, Elon Musk, Coronavirus, Basketball, etc.",text:"What's up with Bitcoin?"},{color:"#283593",title:"News by Sources",info:"CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",text:"Give me the news from BBC News."}],B=function(e){var t=e.articles,n=e.activeArticle,i=u();return t.length?Object(C.jsx)(b.a,{in:!0,children:Object(C.jsx)(j.a,{className:i.container,container:!0,alignItems:"stretch",spacing:3,children:t.map((function(e,t){return Object(C.jsx)(j.a,{item:!0,xs:12,sm:6,md:4,lg:3,style:{display:"flex"},children:Object(C.jsx)(N,{article:e,activeArticle:n,i:t})})}))})}):Object(C.jsx)(b.a,{in:!0,children:Object(C.jsx)(j.a,{className:i.container,container:!0,alignItems:"stretch",spacing:3,children:k.map((function(e){return Object(C.jsx)(j.a,{item:!0,xs:12,sm:6,md:4,lg:3,className:i.infoCard,children:Object(C.jsxs)("div",{className:i.card,style:{backgroundColor:e.color},children:[Object(C.jsx)(h.a,{variant:"h5",children:e.title}),e.info?Object(C.jsxs)(h.a,{variant:"h6",children:[Object(C.jsxs)("strong",{children:[e.title.split(" ")[2],":"]}),Object(C.jsx)("br",{}),e.info]}):null,Object(C.jsxs)(h.a,{variant:"h6",children:["Try saying: ",Object(C.jsx)("br",{})," ",Object(C.jsx)("i",{children:e.text})]})]})})}))})})},A=n(24),S=Object(m.a)((function(e){return{footer:Object(A.a)({textAlign:"center",position:"fixed",left:0,bottom:0,color:"black",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",height:"120px"},e.breakpoints.down("sm"),{display:"none"}),link:{textDecoration:"none",color:"rgba(21, 101, 192)"},image:{marginLeft:20},card:Object(A.a)({display:"flex",justifyContent:"center",alignItems:"center",width:"50%",padding:"3%",borderRadius:10,color:"white",backgroundColor:"rgba(21, 101, 192)",margin:"0 12px",textAlign:"center",height:"25vmin"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center",width:"100%",height:"initial","&:nth-of-type(1)":{marginBottom:"12px"}}),infoContainer:Object(A.a)({display:"flex",alignItems:"center",justifyContent:"space-around"},e.breakpoints.down("sm"),{flexDirection:"column"}),logoContainer:Object(A.a)({padding:"0 5%",display:"flex",justifyContent:"space-around",alignItems:"center",width:"100%"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center"}),alanLogo:Object(A.a)({height:"27vmin",borderRadius:"15%",padding:"0 5%",margin:"3% 0"},e.breakpoints.down("sm"),{height:"35vmin"})}})),I=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(-1),o=Object(r.a)(c,2),l=o[0],b=o[1],j=S();return Object(i.useEffect)((function(){s()({key:"056fc4b07f72ea122fb680ae426c27ad2e956eca572e1d8b807a3e2338fdd0dc/stage",onCommand:function(e){var t=e.command,n=e.articles,i=e.number;if("newHeadlines"===t)a(n),b(-1);else if("highlight"===t)b((function(e){return e+1}));else if("open"===t){var c=i.length>2?d()(i,{fuzzy:!0}):i,r=n[c-1];c>20?s()().playText("Silly goose, there are only 20 articles displayed. Please try again."):r&&window.open(r.url,"_blank")}}})}),[]),Object(C.jsxs)("div",{children:[Object(C.jsx)("div",{className:j.logoContainer,children:Object(C.jsx)("img",{src:"https://media3.giphy.com/media/Rz4Hdvzi97K47tRzvN/giphy.gif",className:j.homeLogo,alt:"voice logo"})}),Object(C.jsx)(B,{articles:n,activeArticle:l})]})};c.a.render(Object(C.jsx)(I,{}),document.getElementById("root"))},83:function(e,t,n){}},[[142,1,2]]]);
//# sourceMappingURL=main.1e932709.chunk.js.map