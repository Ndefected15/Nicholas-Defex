(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,function(e,t,c){},,function(e,t,c){var n={"./portfolio/0.png":14,"./portfolio/1.png":15,"./portfolio/2.png":16,"./portfolio/3.png":17,"./portfolio/4.png":18,"./portfolio/5.png":19};function a(e){var t=o(e);return c(t)}function o(e){if(!c.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id=13},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/0.2e05370b.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/1.1cd22f85.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/2.a5ab365a.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/3.cb5b26bb.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/4.e1bf14fc.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/5.6ccbb730.png"},function(e,t,c){var n={"./portfolio/0.png":21,"./portfolio/1.png":22,"./portfolio/2.png":23,"./portfolio/3.png":24,"./portfolio/4.png":25,"./portfolio/5.png":26};function a(e){var t=o(e);return c(t)}function o(e){if(!c.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id=20},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/0.2e05370b.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/1.1cd22f85.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/2.a5ab365a.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/3.cb5b26bb.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/4.e1bf14fc.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/5.6ccbb730.png"},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),o=c(6),i=c.n(o),r=(c(11),c(2));function s(e){return e.charAt(0).toUpperCase()+e.slice(1)}var l=c(0);var d=function(e){var t=e.categories,c=void 0===t?[]:t,a=e.setCurrentCategory,o=e.contactSelected,i=e.currentCategory,r=e.setContactSelected;return Object(n.useEffect)((function(){document.title=s(i.name)}),[i]),Object(l.jsxs)("header",{className:"flex-row px-1",children:[Object(l.jsx)("h2",{children:Object(l.jsxs)("a",{"data-testid":"link",href:"/",children:[Object(l.jsxs)("span",{role:"img","aria-label":"computer",children:[" ","\ud83d\udcbb"]})," ","Nicholas Defex"]})}),Object(l.jsx)("nav",{children:Object(l.jsxs)("ul",{className:"flex-row",children:[Object(l.jsx)("li",{className:"mx-2",children:Object(l.jsx)("a",{"data-testid":"about",href:"#about",onClick:function(){return r(!1)},children:"About me"})}),Object(l.jsx)("li",{className:"mx-2 ".concat(o&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){return r(!0)},children:"Contact"})}),c.map((function(e){return Object(l.jsx)("li",{className:"mx-1 ".concat(i.name===e.name&&!o&&"navActive"),children:Object(l.jsx)("span",{onClick:function(){a(e),r(!1)},children:s(e.name)})},e.name)})),Object(l.jsx)("li",{className:"mx-2",children:Object(l.jsx)("a",{"data-testid":"resume",href:"../../assets/Nicholas_Defex_Resume.pdf",download:"Nicholas_Defex_Resume",children:"Resume"})})]})})]})},u=c.p+"static/media/cover-image.c9886623.jpg";var b=function(){return Object(l.jsxs)("section",{className:"my-5",children:[Object(l.jsx)("h1",{id:"about",children:"Who is Nicholas Defex"}),Object(l.jsx)("img",{src:u,className:"my-2",style:{width:"100%"},alt:"cover"}),Object(l.jsx)("div",{className:"my-2",children:Object(l.jsx)("p",{children:"Hello, I am an aspiring Web Devloper. I attended a coding bootcamp through Rutgers University from Oct. 2021 - April 2022. My interests are Music, Technology, Nature and Working where I can to better myself and the world around me."})})]})},p=c(3),j=function(e){var t=e.onClose,n=e.currentPhoto,a=n.name,o=n.description,i=n.category,r=n.github,s=n.deployed,d=n.index;return Object(l.jsx)("div",{className:"modalBackdrop",children:Object(l.jsxs)("div",{className:"modalContainer",children:[Object(l.jsxs)("h3",{className:"modalTitle",children:[a," "]}),Object(l.jsx)("img",{src:c(13)("./".concat(i,"/").concat(d,".png")).default,alt:"current category"}),Object(l.jsx)("p",{children:o}),Object(l.jsx)("a",{href:s,children:"Deployed Application"}),Object(l.jsx)("br",{}),Object(l.jsx)("a",{href:r,children:" Github"}),Object(l.jsx)("br",{}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{type:"button",onClick:t,children:"Close this modal"})]})})},h=function(e){var t=e.category,a=Object(n.useState)(!1),o=Object(r.a)(a,2),i=o[0],s=o[1],d=Object(n.useState)(),u=Object(r.a)(d,2),b=u[0],h=u[1],m=Object(n.useState)([{name:"MCU Countdown Clock",category:"portfolio",description:"A full-stack web application dedicated to displaying the time approaching/since a release of a film from the Marvel Cinematic Universe",deployed:"https://mcu-countdown-clock.herokuapp.com/",github:"https://github.com/Ndefected15/MCU-countdown-clock"},{name:"Shoe Shop",category:"portfolio",description:"An E-commerce website dedicated to selling High-End Sneakers",deployed:"https://ndefected15.github.io/shoewebsite/",github:"https://github.com/Ndefected15/shoewebsite"},{name:"Tech Blogger",category:"portfolio",description:"A full-stack web application dedicated to forum style communication between users on varius tech related topics",deployed:"https://still-harbor-03794.herokuapp.com/",github:"https://github.com/Ndefected15/Tech-Blogger"},{name:"Run Buddy",category:"portfolio",description:"A website that offers fitness training services.",deployed:"https://ndefected15.github.io/run-buddy/",github:"https://github.com/Ndefected15/run-buddy"},{name:"Pro Note App",category:"portfolio",description:"A deployed application that allows users to make notes",deployed:"https://pronoteappp.herokuapp.com/",github:"https://github.com/Ndefected15/ProNoteApp"},{name:"Work Day Scheduler",category:"portfolio",description:"a simple calender application that allows a user to save events",deployed:"https://ndefected15.github.io/WorkDayScheduler/",github:"https://github.com/Ndefected15/WorkDayScheduler"}]),f=Object(r.a)(m,1)[0].filter((function(e){return e.category===t})),g=function(e,t){h(Object(p.a)(Object(p.a)({},e),{},{index:t})),s(!i)};return Object(l.jsxs)("div",{children:[i&&Object(l.jsx)(j,{onClose:g,currentPhoto:b}),Object(l.jsx)("div",{className:"flex-row",children:f.map((function(e,n){return Object(l.jsx)("img",{src:c(20)("./".concat(t,"/").concat(n,".png")).default,alt:e.name,className:"img-thumbnail mx-1",onClick:function(){return g(e,n)}},e.name)}))})]})};var m=function(e){var t=e.currentCategory;return Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{"data-testid":"h1tag",children:s(t.name)}),Object(l.jsx)("p",{children:t.description}),Object(l.jsx)(h,{category:t.name})]})},f=c(4);var g=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(r.a)(e,2),c=t[0],a=t[1],o=Object(n.useState)(""),i=Object(r.a)(o,2),s=i[0],d=i[1],u=c.name,b=c.email,j=c.message,h=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);d(t?"":"Your email is invalid.")}else e.target.value.length?d(""):d("".concat(e.target.name," is required."));s||(a(Object(p.a)(Object(p.a)({},c),{},Object(f.a)({},e.target.name,e.target.value))),console.log("Handle Form",c))};return Object(l.jsxs)("section",{children:[Object(l.jsx)("h1",{"data-testid":"h1tag",children:"Contact me"}),Object(l.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),s||console.log("Submit Form",c)},children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(l.jsx)("input",{type:"text",name:"name",defaultValue:u,onBlur:h})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(l.jsx)("input",{type:"email",name:"email",defaultValue:b,onBlur:h})]}),Object(l.jsxs)("div",{children:[Object(l.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(l.jsx)("textarea",{name:"message",rows:"5",defaultValue:j,onBlur:h})]}),s&&Object(l.jsx)("div",{children:Object(l.jsx)("p",{className:"error-text",children:s})}),Object(l.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})};var O=function(){var e=Object(n.useState)([{name:"portfolio",description:"Applications worked on"}]),t=Object(r.a)(e,1)[0],c=Object(n.useState)(t[0]),a=Object(r.a)(c,2),o=a[0],i=a[1],s=Object(n.useState)(!1),u=Object(r.a)(s,2),p=u[0],j=u[1];return Object(l.jsxs)("div",{children:[Object(l.jsx)(d,{categories:t,setCurrentCategory:i,currentCategory:o,contactSelected:p,setContactSelected:j}),Object(l.jsx)("main",{children:p?Object(l.jsx)(g,{}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(m,{currentCategory:o}),Object(l.jsx)(b,{})]})}),Object(l.jsx)("footer",{children:Object(l.jsx)("h1",{href:"https://github.com/Ndefected15",children:Object(l.jsx)("img",{src:"../../assets/cover/github.png",alt:"github logo"})})})]})},x=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,28)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),o(e),i(e)}))};i.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),x()}],[[27,1,2]]]);
//# sourceMappingURL=main.1bcbc61c.chunk.js.map