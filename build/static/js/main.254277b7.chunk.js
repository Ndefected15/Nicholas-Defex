(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],[,,,,,,,,,,,function(e,t,c){},,function(e,t,c){var n={"./portfolio/0.png":14,"./portfolio/1.png":15,"./portfolio/2.png":16,"./portfolio/3.png":17,"./portfolio/4.png":18,"./portfolio/5.png":19};function a(e){var t=i(e);return c(t)}function i(e){if(!c.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id=13},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/0.2e05370b.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/1.1cd22f85.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/2.a5ab365a.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/3.cb5b26bb.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/4.e1bf14fc.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/5.6ccbb730.png"},function(e,t,c){var n={"./portfolio/0.png":21,"./portfolio/1.png":22,"./portfolio/2.png":23,"./portfolio/3.png":24,"./portfolio/4.png":25,"./portfolio/5.png":26};function a(e){var t=i(e);return c(t)}function i(e){if(!c.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=i,e.exports=a,a.id=20},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/0.2e05370b.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/1.1cd22f85.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/2.a5ab365a.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/3.cb5b26bb.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/4.e1bf14fc.png"},function(e,t,c){"use strict";c.r(t),t.default=c.p+"static/media/5.6ccbb730.png"},function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),i=c(6),o=c.n(i),r=(c(11),c(2));function s(e){return e.charAt(0).toUpperCase()+e.slice(1)}var l=c.p+"static/media/Nicholas_Defex_Resume.509a9974.pdf",d=c(0);var u=function(e){var t=e.categories,c=void 0===t?[]:t,a=e.setCurrentCategory,i=e.contactSelected,o=e.currentCategory,r=e.setContactSelected;return Object(n.useEffect)((function(){document.title=s(o.name)}),[o]),Object(d.jsxs)("header",{className:"flex-row px-1",children:[Object(d.jsx)("h2",{children:Object(d.jsxs)("a",{"data-testid":"link",href:"/",children:[Object(d.jsxs)("span",{role:"img","aria-label":"computer",children:[" ","\ud83d\udcbb"]})," ","Nicholas Defex"]})}),Object(d.jsx)("nav",{children:Object(d.jsxs)("ul",{className:"flex-row",children:[Object(d.jsx)("li",{className:"mx-2",children:Object(d.jsx)("a",{"data-testid":"about",href:"#about",onClick:function(){return r(!1)},children:"About me"})}),Object(d.jsx)("li",{className:"mx-2 ".concat(i&&"navActive"),children:Object(d.jsx)("span",{onClick:function(){return r(!0)},children:"Contact"})}),c.map((function(e){return Object(d.jsx)("li",{className:"mx-1 ".concat(o.name===e.name&&!i&&"navActive"),children:Object(d.jsx)("span",{onClick:function(){a(e),r(!1)},children:s(e.name)})},e.name)})),Object(d.jsx)("li",{className:"mx-2",children:Object(d.jsx)("a",{"data-testid":"resume",href:l,download:"Nicholas_Defex_Resume",children:"Resume"})})]})})]})},b=c.p+"static/media/cover-image.c9886623.jpg";var j=function(){return Object(d.jsxs)("section",{className:"my-5",children:[Object(d.jsx)("h1",{id:"about",children:"Who is Nicholas Defex"}),Object(d.jsx)("img",{src:b,className:"my-2",style:{width:"100%"},alt:"cover"}),Object(d.jsx)("div",{className:"my-2",children:Object(d.jsx)("p",{children:"Hello, I am an aspiring Web Devloper. I attended a coding bootcamp through Rutgers University from Oct. 2021 - April 2022. My interests are Music, Technology, Nature and Working where I can to better myself and the world around me."})})]})},p=c(3),h=function(e){var t=e.onClose,n=e.currentPhoto,a=n.name,i=n.description,o=n.category,r=n.github,s=n.deployed,l=n.index;return Object(d.jsx)("div",{className:"modalBackdrop",children:Object(d.jsxs)("div",{className:"modalContainer",children:[Object(d.jsxs)("h3",{className:"modalTitle",children:[a," "]}),Object(d.jsx)("img",{src:c(13)("./".concat(o,"/").concat(l,".png")).default,alt:"current category"}),Object(d.jsx)("p",{children:i}),Object(d.jsx)("a",{href:s,children:"Deployed Application"}),Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:r,children:" Github"}),Object(d.jsx)("br",{}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{type:"button",onClick:t,children:"Close this modal"})]})})},m=function(e){var t=e.category,a=Object(n.useState)(!1),i=Object(r.a)(a,2),o=i[0],s=i[1],l=Object(n.useState)(),u=Object(r.a)(l,2),b=u[0],j=u[1],m=Object(n.useState)([{name:"MCU Countdown Clock",category:"portfolio",description:"A full-stack web application dedicated to displaying the time approaching/since a release of a film from the Marvel Cinematic Universe",deployed:"https://mcu-countdown-clock.herokuapp.com/",github:"https://github.com/Ndefected15/MCU-countdown-clock"},{name:"Shoe Shop",category:"portfolio",description:"An E-commerce website dedicated to selling High-End Sneakers",deployed:"https://ndefected15.github.io/shoewebsite/",github:"https://github.com/Ndefected15/shoewebsite"},{name:"Tech Blogger",category:"portfolio",description:"A full-stack web application dedicated to forum style communication between users on varius tech related topics",deployed:"https://still-harbor-03794.herokuapp.com/",github:"https://github.com/Ndefected15/Tech-Blogger"},{name:"Run Buddy",category:"portfolio",description:"A website that offers fitness training services.",deployed:"https://ndefected15.github.io/run-buddy/",github:"https://github.com/Ndefected15/run-buddy"},{name:"Pro Note App",category:"portfolio",description:"A deployed application that allows users to make notes",deployed:"https://pronoteappp.herokuapp.com/",github:"https://github.com/Ndefected15/ProNoteApp"},{name:"Work Day Scheduler",category:"portfolio",description:"a simple calender application that allows a user to save events",deployed:"https://ndefected15.github.io/WorkDayScheduler/",github:"https://github.com/Ndefected15/WorkDayScheduler"}]),f=Object(r.a)(m,1)[0].filter((function(e){return e.category===t})),g=function(e,t){j(Object(p.a)(Object(p.a)({},e),{},{index:t})),s(!o)};return Object(d.jsxs)("div",{children:[o&&Object(d.jsx)(h,{onClose:g,currentPhoto:b}),Object(d.jsx)("div",{className:"flex-row",children:f.map((function(e,n){return Object(d.jsx)("img",{src:c(20)("./".concat(t,"/").concat(n,".png")).default,alt:e.name,className:"img-thumbnail mx-1",onClick:function(){return g(e,n)}},e.name)}))})]})};var f=function(e){var t=e.currentCategory;return Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{"data-testid":"h1tag",children:s(t.name)}),Object(d.jsx)("p",{children:t.description}),Object(d.jsx)(m,{category:t.name})]})},g=c(4);var O=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(r.a)(e,2),c=t[0],a=t[1],i=Object(n.useState)(""),o=Object(r.a)(i,2),s=o[0],l=o[1],u=c.name,b=c.email,j=c.message,h=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);l(t?"":"Your email is invalid.")}else e.target.value.length?l(""):l("".concat(e.target.name," is required."));s||(a(Object(p.a)(Object(p.a)({},c),{},Object(g.a)({},e.target.name,e.target.value))),console.log("Handle Form",c))};return Object(d.jsxs)("section",{children:[Object(d.jsx)("h1",{"data-testid":"h1tag",children:"Contact me"}),Object(d.jsxs)("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),s||console.log("Submit Form",c)},children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"name",children:"Name:"}),Object(d.jsx)("input",{type:"text",name:"name",defaultValue:u,onBlur:h})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(d.jsx)("input",{type:"email",name:"email",defaultValue:b,onBlur:h})]}),Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"message",children:"Message:"}),Object(d.jsx)("textarea",{name:"message",rows:"5",defaultValue:j,onBlur:h})]}),s&&Object(d.jsx)("div",{children:Object(d.jsx)("p",{className:"error-text",children:s})}),Object(d.jsx)("button",{"data-testid":"button",type:"submit",children:"Submit"})]})]})};var x=function(){var e=Object(n.useState)([{name:"portfolio",description:"Applications worked on"}]),t=Object(r.a)(e,1)[0],c=Object(n.useState)(t[0]),a=Object(r.a)(c,2),i=a[0],o=a[1],s=Object(n.useState)(!1),l=Object(r.a)(s,2),b=l[0],p=l[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)(u,{categories:t,setCurrentCategory:o,currentCategory:i,contactSelected:b,setContactSelected:p}),Object(d.jsx)("main",{children:b?Object(d.jsx)(O,{}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(f,{currentCategory:i}),Object(d.jsx)(j,{})]})}),Object(d.jsxs)("footer",{children:[Object(d.jsx)("a",{href:"https://github.com/Ndefected15",children:"Github"}),Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:"https://www.linkedin.com/in/nicholas-defex-7634a41b4/",children:"LinkedIn"}),Object(d.jsx)("br",{}),Object(d.jsx)("a",{href:"https://stackoverflow.com/users/17122731/ndefected15",children:"StackOverflow"})]})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,28)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,o=t.getTTFB;c(e),n(e),a(e),i(e),o(e)}))};o.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),v()}],[[27,1,2]]]);
//# sourceMappingURL=main.254277b7.chunk.js.map