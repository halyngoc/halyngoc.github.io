(this["webpackJsonphalyngoc.github.io"]=this["webpackJsonphalyngoc.github.io"]||[]).push([[0],{34:function(e,n,t){e.exports=t.p+"static/media/resume.5a484073.pdf"},37:function(e,n,t){e.exports=t(54)},54:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(11),i=t.n(o),l=t(3),c=t(2),u=t(1);function s(){var e=Object(c.a)(["\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  body {\n    background-color: ",";\n    color: ",";\n    margin: 0;\n  }\n\n  /* Scrollbar */\n  *::-webkit-scrollbar {\n    width: 5px;\n    height: 5px;\n  }\n  *::-webkit-scrollbar-track {\n    background: none;\n  }\n  *::-webkit-scrollbar-thumb {\n    background-color: ",";\n    border-radius: 10px;\n    border: none;\n  }\n  * {\n    scrollbar-width: thin;\n    scrollbar-color: ",";\n  }\n"]);return s=function(){return e},e}var m=600,d=960,p=1280,f={background:"#ECF0F1",watermark:"#D7E5E9",text:"#34495E",accent:"#3498DB",accent2:"#F8B500"},b=Object(u.b)(s(),(function(e){return e.theme.background}),(function(e){return e.theme.text}),(function(e){return e.theme.text}),(function(e){return e.theme.text+" #ffffff00"}));var h=function(e){return"mobile"===e||"tablet"===e};function g(){var e=function(){var e=Object(r.useState)(window.innerWidth),n=Object(l.a)(e,2),t=n[0],a=n[1];return Object(r.useEffect)((function(){var e=function(){return a(window.innerWidth)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}})),t}(),n="";return[n=e<m?"mobile":e<d?"tablet":e<p?"laptop":"desktop",h(n)]}var v=t(5),w=t(27),E=t(4),y=t(28),x=t.n(y),k=t(29),O=t.n(k);function j(){var e=Object(c.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100vh;\n  background-color: ","7F;\n  z-index: 1;\n"]);return j=function(){return e},e}function C(){var e=Object(c.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: ",";\n  z-index: 2;\n  width: 100%;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n\n  ul {\n    list-style: none;\n    padding: 0;\n    text-align: center;\n  }\n\n  li {\n    display: block;\n    margin: 1rem 0;\n  }\n\n  button {\n    background-color: ",";\n    border: 0;\n    border-radius: 20px;\n    font-size: 1rem;\n    font-weight: 500;\n    color: ",";\n  }\n\n  > button,\n  > div > button {\n    display: block;\n    margin: 0.5rem auto 0.5rem 0.5rem;\n    height: 2rem;\n  }\n\n  svg {\n    font-size: 2rem;\n  }\n\n  button:focus, button:hover {\n    outline: none;\n    box-shadow:\n      0 0 0 3px ",",\n      0 0 0 5px ","7F;\n    ;\n  }\n\n  > button:active,\n  > div > button:active {\n    outline: none;\n    box-shadow:\n      0 0 0 3px ",",\n      0 0 0 5px ",";\n    ;\n  }\n"]);return C=function(){return e},e}function S(){var e=Object(c.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: ",";\n  z-index: 1;\n  width: 100%;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n\n  ul {\n    list-style: none;\n    padding: 0;\n    text-align: center;\n  }\n\n  li {\n    display: inline;\n    margin: 0 1rem;\n  }\n\n  button {\n    background-color: ",";\n    border: 0;\n    border-radius: 20px;\n    font-size: 1rem;\n    font-weight: 500;\n    color: ",";\n  }\n\n  button:focus, button:hover {\n    outline: none;\n    box-shadow:\n      0 0 0 3px ",",\n      0 0 0 5px ","7F;\n    ;\n  }\n"]);return S=function(){return e},e}var I=u.c.nav(S(),f.background,f.background,f.text,f.background,f.text),L=Object(u.c)(v.a.nav)(C(),f.background,f.background,f.text,f.background,f.text,f.background,f.text),P=Object(u.c)(v.a.div)(j(),f.text);function z(e){return{transform:e.interpolate({range:[0,.2,1],output:[1,1.1,1]}).interpolate((function(e){return"scale(".concat(e,")")})),boxShadow:e.interpolate({range:[0,.2,1],output:[0,127,255]}).interpolate((function(e){return"0 0 0 3px ".concat(f.background,", 0 0 0 5px ").concat(f.text).concat(function(e){return e<0||e>255?"00":Math.round(e).toString(16).padStart(2,"0")}(e))}))}}function F(e){var n=e.itemId,t=e.label,r=e.onClick,o=e.selected,i=Object(v.b)({from:{x:0},x:o?1:0}).x;return a.a.createElement(w.Link,{to:n,smooth:!0,duration:300},a.a.createElement(v.a.button,{onClick:function(){return r(n)},style:o?z(i):null},t))}function M(e){var n=e.onItemClick,t=e.selectedItem;return a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement(F,{onClick:n,selected:"home"===t,itemId:"home",label:"Home"})),a.a.createElement("li",null,a.a.createElement(F,{onClick:n,selected:"about me"===t,itemId:"about me",label:"About me"})),a.a.createElement("li",null,a.a.createElement(F,{onClick:n,selected:"my work"===t,itemId:"my work",label:"My work"})),a.a.createElement("li",null,a.a.createElement(F,{onClick:n,selected:"my projects"===t,itemId:"my projects",label:"My projects"})))}function U(e){var n=e.onItemClick,t=e.selectedItem,o=Object(r.useState)(!1),i=Object(l.a)(o,2),c=i[0],u=i[1],s=Object(v.c)(c,null,{from:{transform:"translate3d(0, -100%, 0)"},enter:{transform:"translate3d(0, 0, 0)"},leave:{transform:"translate3d(0, -100%, 0)"}}),m=function(e){n(e),u(!1)};return s.map((function(e){var n=e.item,r=e.key,o=e.props;return n?a.a.createElement(a.a.Fragment,null,a.a.createElement(L,{key:r,style:o},a.a.createElement("button",{onClick:function(){return u(!1)}},a.a.createElement(E.Icon,{icon:O.a})),a.a.createElement(M,{onItemClick:m,selectedItem:t})),a.a.createElement(P,{style:o,onClick:function(){return u(!1)}})):a.a.createElement(L,{key:r,style:o},a.a.createElement("button",{onClick:function(){return u(!0)}},a.a.createElement(E.Icon,{icon:x.a})))}))}function A(e){var n=g();return Object(l.a)(n,2)[1]?a.a.createElement(U,e):a.a.createElement(I,null,a.a.createElement(M,e))}var D=t(13),R=t.n(D),W=t(30),H=t.n(W),G=t(31),_=t.n(G),T=t(32),B=t.n(T),J=t(33),N=t.n(J),X=t(34),Z=t.n(X);function K(){var e=Object(c.a)(["\n  min-height: 100vh;\n  padding: ",";\n  width: 100%;\n\n  :first-of-type {\n    padding: 5rem 0;\n  }\n\n  h1 {\n    font-family: Gloria Hallelujah, cursive;\n    font-weight: normal;\n    text-align: center;\n    font-size: 2rem;\n  }\n\n  h2 {\n    color: ",";\n    font-size: 1.1rem;\n  }\n"]);return K=function(){return e},e}var Q=u.c.section(K(),(function(e){return e.isOneColumnLayout?"2rem 0":"5rem 0"}),f.accent);function V(){var e=Object(c.a)(["\n  list-style: none;\n  padding: 0;\n  margin: ",";\n  width: fit-content;\n\n  li {\n    margin-bottom: 1rem;\n  }\n\n  svg {\n    font-size: 2rem;\n    margin-right: 0.5rem;\n  }\n\n  a {\n    color: ",";\n    text-decoration: none;\n    display: flex;\n    align-items: center;\n    padding: 0.25rem 0.5rem;\n    border-radius: 20px;\n  }\n\n  a:focus, a:hover {\n    outline: none;\n    box-shadow: 0 0 0 2px ","7F;\n  }\n\n  a:active {\n    outline: none;\n    box-shadow: 0 0 0 2px ",";\n  }\n"]);return V=function(){return e},e}function Y(){var e=Object(c.a)(["\n  color: ",";\n"]);return Y=function(){return e},e}function $(){var e=Object(c.a)(["\ncolor: ",";\n"]);return $=function(){return e},e}function q(){var e=Object(c.a)(["\n  margin: ",";\n\n  p, span {\n    font-family: Gloria Hallelujah, cursive;\n    font-size: ",";\n    margin: 0;\n    text-align: ",";\n  }\n"]);return q=function(){return e},e}var ee=u.c.div(q(),(function(e){return e.isOneColumnLayout?"1rem 0 0 0":"1rem 0 0 5%"}),(function(e){return e.isOneColumnLayout?"2rem":"3.5rem"}),(function(e){return e.isOneColumnLayout?"center":"left"})),ne=u.c.span($(),f.accent),te=u.c.span(Y(),f.accent2),re=u.c.ul(V(),(function(e){return e.isOneColumnLayout?"2rem auto 0 auto":"3rem 0 0 5%"}),f.text,f.text,f.text);function ae(){var e=g(),n=Object(l.a)(e,2)[1];return a.a.createElement(Q,{id:"home",isOneColumnLayout:n},a.a.createElement(ee,{isOneColumnLayout:n},a.a.createElement("p",null,"Hi, my name is ",a.a.createElement(ne,null,"Ha Ly")),a.a.createElement("p",null,"and I'm a ",a.a.createElement(te,null,"web developer"),".")),a.a.createElement(re,{isOneColumnLayout:n},a.a.createElement("li",null,a.a.createElement("a",{title:"Github",href:"https://github.com/halyngoc",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(E.Icon,{icon:R.a}),"github.com/halyngoc")),a.a.createElement("li",null,a.a.createElement("a",{title:"LinkedIn",href:"https://www.linkedin.com/in/halyngoc",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(E.Icon,{icon:N.a}),"linkedin.com/in/halyngoc")),a.a.createElement("li",null,a.a.createElement("a",{title:"email",href:"mailto:haly.inbox@gmail.com"},a.a.createElement(E.Icon,{icon:H.a}),"haly.inbox@gmail.com")),a.a.createElement("li",null,a.a.createElement("a",{title:"phone",href:"tel:971-213-3036"},a.a.createElement(E.Icon,{icon:_.a}),"971-213-3036")),a.a.createElement("li",null,a.a.createElement("a",{title:"resume",href:Z.a,download:"Ha_Ly_resume",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(E.Icon,{icon:B.a}),"resume (pdf, 64kb)"))))}function oe(){var e=Object(c.a)(["\n  list-style: none;\n  padding: 0;\n  margin: ",";\n  width: fit-content;\n  max-width: calc(","px - 3rem);\n  position: relative;\n\n  ::before {\n    content: ' ';\n    position: absolute;\n    top: 0;\n    left: -2.5px;\n    width: 5px;\n    height: 100%;\n    background-color: ",";\n  }\n\n  p {\n    margin: 0.75rem 0;\n  }\n\n  > li {\n    position: relative;\n    margin: 0 0 2rem 2rem;\n  }\n\n  > li::before {\n    content: ' ';\n    position: absolute;\n    top: -0.2rem;\n    left: -3rem;\n    width: 2rem;\n    height: 2rem;\n    border: 5px solid ",";\n    background-color: ",";\n    border-radius: 1rem;\n  }\n\n  ul {\n    list-style: inside circle;\n    padding: 0;\n  }\n\n  ul:last-child {\n    margin-top: 0.75rem;\n    list-style: none;\n  }\n\n  ul:last-child > li {\n    padding: 0.25rem 0.5rem;\n    margin: 0 0.25rem 0.25rem 0;\n    display: inline-block;\n    color: ",";\n    background-color: ","CC;\n    border-radius: 1rem;\n    cursor: default;\n  }\n\n  ul:last-child > li:hover,\n  ul:last-child > li:active {\n    background-color: ",";\n  }\n"]);return oe=function(){return e},e}var ie=u.c.ul(oe(),(function(e){return e.isOneColumnLayout?"0 2rem":"0 auto"}),d,f.text,f.accent2,f.background,f.background,f.accent,f.accent),le=[{title:"Web Developer Intern",place:"Portland General Electric, Portland, OR",time:"9/2019 - 12/2019",description:"Designed and implemented a new internal portal to reprocess errors, which connects to on-premise SQL servers and IBM DataPower SOAP endpoints.",descriptionDetails:["Developed and tested new portal UI that improves execution speed while maintaining current functionality","Designed, implemented, and tested architecture to connect from cloud portal to on-premise resources","Interfaced with Database and Security teams to inalize on an optimal middleware solution","Documented and presented implementation plans to ensure security in accessing sensitive databases"],tools:["SharePoint Online","SPFx","React","TypeScript","AWS"]},{title:"SharePoint Web Developer Intern",place:"Portland General Electric, Portland, OR",time:"6/2019 - 9/2019",description:"Collaborated with a team of 7 to develop a new company intranet site using SharePoint Online and Microsoft products.",descriptionDetails:["Developed automatic content approval and archival processes using MS Flow, which improves content management eficiency","Implemented content search functionality, including keyword searching, ilters, sorting, and promoted results","Presented weekly builds to business partners and team to determine project status and tasks","Wrote end user manuals, admin manuals, and code documentation to aid knowledge transfer by end of project"],tools:["SharePoint Online","SPFx","TypeScript","MS Flow","MS PowerApps"]}];function ce(){var e=g(),n=Object(l.a)(e,2)[1];return a.a.createElement(Q,{id:"my work",isOneColumnLayout:n},a.a.createElement("h1",null,"My work"),a.a.createElement(ie,{isOneColumnLayout:n},le.map((function(e,n){return a.a.createElement("li",{key:"work-data-".concat(n)},a.a.createElement("h2",null,e.title),a.a.createElement("p",null,e.place),a.a.createElement("p",null,e.time),a.a.createElement("p",null,e.description),a.a.createElement("ul",null,e.descriptionDetails.map((function(e,t){return a.a.createElement("li",{key:"work-data-".concat(n,"-description-").concat(t)},e)}))),a.a.createElement("ul",null,e.tools.map((function(e,t){return a.a.createElement("li",{key:"work-data-".concat(n,"-tool-").concat(t)},e)}))))}))))}var ue=t(35),se=t.n(ue),me=t(36),de=t.n(me);function pe(){var e=Object(c.a)(["\n  cursor: default;\n\n  > span {\n    border: 2px solid white;\n    border-radius: 1.5rem;\n    padding: 0.2rem 0.5rem;\n    margin: 0.1rem;\n  }\n\n  > span:hover {\n    background-color: white;\n    color: ",";\n  }\n"]);return pe=function(){return e},e}function fe(){var e=Object(c.a)(["\n  width: 20rem;\n  height: 20rem;\n  position: relative;\n  margin: ",";\n\n  img {\n    border-radius: 1rem;\n    box-shadow: 0 0 5px ","7F;\n    width: 20rem;\n    height: 20rem;\n    position: absolute;\n    top: 0;\n    left: 0;\n    object-fit: cover;\n    object-position: 50 % top;\n  }\n"]);return fe=function(){return e},e}function be(){var e=Object(c.a)(["\n  list-style: none;\n  padding: 0;\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin: 0;\n  width: 100%;\n  align-items: center;\n  \n  * {\n    text-align: center;\n  }\n\n  h2 {\n    color: white;\n    font-size: 1.3rem;\n  }\n\n  > li {\n    margin: 1rem;\n    display: flex;\n    align-items: center;\n    flex-direction: column;\n    border-radius: 1rem;\n    box-shadow: 5px 5px 20px ","7F;\n    padding: 1rem;\n    background-color: ",";\n    color: white;\n  }\n\n  a {\n    color: white;\n    text-decoration: none;\n    align-items: center;\n    padding: 0.25rem 0.5rem 0 0.5rem;\n    border-radius: 20px;\n    font-size: 2rem;\n  }\n\n  a:focus, a:hover {\n    outline: none;\n    box-shadow: 0 0 0 2px #ffffff7f;\n  }\n\n  a:active {\n    outline: none;\n    box-shadow: 0 0 0 2px white;\n  }\n"]);return be=function(){return e},e}var he=u.c.ul(be(),f.text,f.text),ge=u.c.div(fe(),(function(e){return e.isOneColumnLayout?"0 auto":"0"}),f.text),ve=u.c.li(pe(),f.text),we=[{name:"Portfolio",time:"6/2020",description:"My personal website and portfolio.",url:"https://halyngoc.github.io/",githubUrl:"https://github.com/halyngoc/halyngoc.github.io",figmaUrl:"https://www.figma.com/file/ZJE9jYg6XTdCxCOxOnSzZl/Personal-website",screenshots:["/resources/portfolio/screenshot.png"],tags:["React","react-spring","styled-components"]},{name:"Recipedia",time:"4/2020 - 6/2020",description:"Recipes search and dashboard.",url:"https://halyngoc.github.io/recipedia",githubUrl:"https://github.com/halyngoc/recipedia",figmaUrl:"https://www.figma.com/file/NZNcO8FD5ogdTPdXzLkkQ9/Recipedia",screenshots:["/resources/recipedia/desktop.png","/resources/recipedia/laptop.png","/resources/recipedia/tablet.png","/resources/recipedia/mobile.png"],tags:["React","styled-components","nivo"]},{name:"Kanabi UI",time:"1/2020 - 6/2020",description:"Portal for City of Portland's Cannabis database.",url:"https://kanabi-gui.herokuapp.com",githubUrl:"https://github.com/FireAnts-PSU-Capstone-team/cannabis-db-ui",figmaUrl:"https://www.figma.com/file/Pxern1X0ZM7XLh1E9NjKGL/Cannabis-database-interface",screenshots:["/resources/kanabi/add_entries.png","/resources/kanabi/database.png","/resources/kanabi/login.png"],tags:["React","Material UI"]}];function Ee(e){var n=e.screenshots,t=Object(r.useState)(0),o=Object(l.a)(t,2),i=o[0],c=o[1],u=g(),s=Object(l.a)(u,2)[1],m=Object(r.useCallback)((function(e){return e===n.length-1?0:e+1}),[n.length]);Object(r.useEffect)((function(){var e=setInterval((function(){return c(m(i))}),3e3);return function(){return clearInterval(e)}}),[m,i]);var d=Object(v.c)(i,(function(e){return e}),{from:{opacity:0},enter:{opacity:1},leave:{opacity:0}});return a.a.createElement(ge,{isOneColumnLayout:s},d.map((function(e){var t=e.item,r=e.props,o=e.key;return a.a.createElement(v.a.img,{key:"screenshot - ".concat(o," "),src:n[t],alt:n[t],draggable:!1,style:r})})))}function ye(){var e=g(),n=Object(l.a)(e,2)[1];return a.a.createElement(Q,{id:"my projects",isOneColumnLayout:n},a.a.createElement("h1",null,"My projects"),a.a.createElement(he,{isOneColumnLayout:n},we.map((function(e,n){return a.a.createElement("li",{key:"project-data-".concat(n," ")},e.screenshots.length>0&&a.a.createElement(a.a.Fragment,null,a.a.createElement(Ee,{screenshots:e.screenshots}),a.a.createElement("div",null,a.a.createElement("h2",null,e.name),a.a.createElement(ve,null,e.tags.map((function(e,t){return a.a.createElement("span",{key:"project-data-".concat(n,"-tag-").concat(t)},e)}))),a.a.createElement("p",null,e.description),a.a.createElement("a",{title:"Live site",href:e.url,target:"_blank",rel:"noopener noreferrer"},a.a.createElement(E.Icon,{icon:se.a})),a.a.createElement("a",{title:"Github repository",href:e.githubUrl,target:"_blank",rel:"noopener noreferrer"},a.a.createElement(E.Icon,{icon:R.a})),a.a.createElement("a",{title:"Figma prototype",href:e.figmaUrl,target:"_blank",rel:"noopener noreferrer"},a.a.createElement(E.Icon,{icon:de.a})))))}))))}function xe(){return a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"785.919",height:"421.019",viewBox:"0 0 7859.186 4210.186",preserveAspectRatio:"xMidYMid meet"},a.a.createElement("path",{d:"M21 4191.186l-21-21v-1464l11-1542c88-635 605-1119 1239-1160 83-6 103-4 125 10l25 17-5 3054-32 115c-94 340-277 598-558 787-188 126-425 205-659 220-97 5-104 5-125-16zm3369-1c-20-20-20-33-20-1498l16-1573c104-613 620-1079 1235-1116 100-6 107-5 128 16l21 21v1473l-15 1562c-72 444-352 818-756 1009-115 55-234 90-372 110-147 22-212 21-237-4zm2795 4c-277-42-537-175-741-378-236-237-366-526-390-870-6-87-5-95 15-115l22-22 822 4c805 3 824 3 903 24 197 53 364 131 505 237 315 238 507 591 535 986 6 88 5 97-16 123l-21 27-772-1c-601-1-792-4-862-15zm-3925-1399c-233-48-408-183-506-390-66-138-67-152-72-559-2-263 0-377 8-396 21-50 38-52 441-48 359 4 377 5 444 27 251 83 423 258 492 501 16 58 18 107 18 452 0 358-1 389-18 405-16 17-47 18-380 20-270 1-378-2-427-12z"}))}function ke(e){var n=e.wrapper,t=g(),r=Object(l.a)(t,2)[1];if(n){var o=n;return a.a.createElement(o,{isOneColumnLayout:r},a.a.createElement(xe,null))}return a.a.createElement(xe,null)}function Oe(){var e=Object(c.a)(["\n  width: fit-content;\n  max-width: ","px;\n  margin: ",";\n\n  p {\n    margin: 0.75rem 0;\n  }\n\n  ul {\n    list-style: circle;\n    padding-left: 1.2rem;\n  }\n\n  span {\n    font-weight: 500;\n    margin-right: 0.5rem;\n  }\n\n  li {\n    margin-bottom: 0.25rem;\n  }\n"]);return Oe=function(){return e},e}var je=u.c.div(Oe(),d,(function(e){return e.isOneColumnLayout?"0 2rem":"0 auto"}));function Ce(){var e=g(),n=Object(l.a)(e,2)[1];return a.a.createElement(Q,{id:"about me",isOneColumnLayout:n},a.a.createElement("h1",null,"About me"),a.a.createElement(je,{isOneColumnLayout:n},a.a.createElement("p",null,"I'm a web developer based in Portland, OR and a CS graduate from Portland State University."),a.a.createElement("p",null,"I build websites and make them look good."),a.a.createElement("p",null,"Here are my skills:"),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("span",null,"Languages:"),"HTML, CSS, JavaScript, TypeScript, Python, Haskell, Kotlin, C/C++, Java"),a.a.createElement("li",null,a.a.createElement("span",null,"IDEs:"),"Visual Studio Code, Visual Studio, Android Studio"),a.a.createElement("li",null,a.a.createElement("span",null,"Other:"),"React, Figma, AWS, Azure, SPFx, Git, GitHub, SharePoint Online, Confluence, JIRA, MS Flow, MS PowerApps"))))}function Se(){var e=Object(c.a)(["\n  overflow-x: hidden;\n  width: 100%;\n  margin: 0 auto;\n  position: relative;\n  max-width: ",";\n"]);return Se=function(){return e},e}function Ie(){var e=Object(c.a)(["\n  position: absolute;\n  top: ",";\n  left: ",";\n  right: 0;\n  z-index: -1;\n  fill: ",";\n  transform: ",";\n"]);return Ie=function(){return e},e}var Le=u.c.div(Ie(),(function(e){return e.isOneColumnLayout?"5rem":"15rem"}),(function(e){return e.isOneColumnLayout?"0":"40%"}),f.watermark,(function(e){return e.isOneColumnLayout?"rotate(-10deg) scale(0.7)":"rotate(-10deg) scale(1.1)"})),Pe=u.c.main(Se(),(function(e){switch(e.device){case"mobile":return"".concat(m,"px");case"tablet":return"".concat(d,"px");default:return"".concat(p,"px")}}));var ze=function(){var e=g(),n=Object(l.a)(e,1)[0],t=Object(r.useState)("home"),o=Object(l.a)(t,2),i=o[0],c=o[1];return a.a.createElement(u.a,{theme:f},a.a.createElement(b,null),a.a.createElement(Pe,{device:n},a.a.createElement(A,{onItemClick:function(e){return c(e)},selectedItem:i}),a.a.createElement(ke,{wrapper:Le}),a.a.createElement(ae,null),a.a.createElement(Ce,null),a.a.createElement(ce,null),a.a.createElement(ye,null)))},Fe=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Me(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(ze,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("","/service-worker.js");Fe?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Me(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Me(n,e)}))}}()}},[[37,1,2]]]);
//# sourceMappingURL=main.5796a88c.chunk.js.map