(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{48:function(t){t.exports=JSON.parse('{"404":{"back_404":"Go home","text":"Sorry, I can\'t find the page you\'re looking for...","button_text":"Do you want help to return home?"},"home":{"about":"About me","about_alt":"About","work":"My Work","work_alt":"Work","contact":"Contact me","contact_alt":"Contact"},"about":{"find_me":"You\'ll find me on:"},"work":{"no_projects":"Whoops! There\'s nothing here yet!","categories":"Categories","category_all":"All","website":"Visit Website","source":"Source Code"},"contact":{"toast":{"close":"Close"},"form":{"name":"What\'s your name?","email":"What\'s your email?","message":"Please, explain yourself:","validation":{"invalid_name":"Invalid name","invalid_email":"Invalid email","invalid_message":"Invalid message","invalid_grecaptcha":"Invalid gRecaptchaResponse","server_error":"Server reported an error","conection_error":"Connection Error","success":"Message sent successfully"}},"loading":"Loading","send":"Send","sending":"Sending"},"misc":{"back":"Go back"}}')},49:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var r=n(8),a=n.n(r),o=n(9),c=n.n(o),i=n(10),l=n.n(i),s=n(11),u=n.n(s),f=n(5),d=n.n(f),h=n(1);function m(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d()(t);if(e){var a=d()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u()(this,n)}}var p=function(t){l()(n,t);var e=m(n);function n(){return a()(this,n),e.apply(this,arguments)}return c()(n,[{key:"render",value:function(){var t=this.props.iconColor?{fill:this.props.iconColor}:null;return h.default.createElement("svg",{style:t,viewBox:"0 0 24 24"},h.default.createElement("use",{xlinkHref:"".concat("/","assets/icons.svg#").concat(this.props.iconName)}))}}]),n}(h.default.PureComponent)},50:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"e",(function(){return a})),n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return c})),n.d(e,"c",(function(){return i}));var r={fullName:"Al Azhar",description:"SOFTWARE & WEB DEVELOPER",avatarPath:"avatar.svg",about:{title:"HEY THERE! \n    I'M AZHAR",description:"",findMeOn:[{iconName:"location",text:"Jakarta, Indonesia",url:"",hoverColor:"#546e7a"},{iconName:"twitter",text:"@alazhaar_",url:"https://twitter.com/alazhaar_",hoverColor:"#1da1f2"},{iconName:"email",text:"me@alazhar.dev",url:"mailto://me@alazhar.dev",hoverColor:"#546e7a"}]},social:[{iconName:"twitter",url:"https://twitter.com/alazhaar_",text:"I'm on Twitter",hoverColor:"#1da1f2"},{iconName:"telegram",url:"https://t.me/kambiang",text:"I'm on Telegram",hoverColor:"#0088cc"},{iconName:"github",url:"https://github.com/alazhar",text:"I'm on Github",hoverColor:"#000"},{iconName:"email",url:"mailto:me@alazhar.dev",text:"Send me an email",hoverColor:"#000"}]},a=[{title:"Test",img:"",description:"Lorem ipsum dolor sit amet, in nulla hendrerit ius, sed et congue graeci, qui id propriae accusata.",categories:["Sample"],siteUrl:"https://project.alazhar.dev/test/",sourceCodeUrl:"https://github.com/alazhar/test"}],o="http://localhost:4000",c="6LflCl4aAAAAAFaNzjMxUI5QcABpdF_ORZdLRIUW",i="no-work-icon.jpg"},51:function(t,e,n){"use strict";n.d(e,"a",(function(){return g}));var r=n(8),a=n.n(r),o=n(9),c=n.n(o),i=n(10),l=n.n(i),s=n(11),u=n.n(s),f=n(5),d=n.n(f),h=n(1),m=n(7),p=n(49),v=n(48);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d()(t);if(e){var a=d()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u()(this,n)}}var _=v.misc,g=function(t){l()(n,t);var e=y(n);function n(){return a()(this,n),e.apply(this,arguments)}return c()(n,[{key:"render",value:function(){return h.default.createElement("div",{className:"pt-content-card__header pt-content-card__header--nav flex flex-cross-center"},h.default.createElement(m.b,{to:"/",title:_.back},h.default.createElement("div",{className:"pt-content-card__header--nav__icon flex flex-full-center"},h.default.createElement(p.a,{iconName:"arrow-left"}))),h.default.createElement("div",{className:"pt-content-card__header--nav__title flex flex-full-center"},h.default.createElement(p.a,{iconName:this.props.icon}),h.default.createElement("h2",{className:"ta-c"},this.props.title)),this.props.handleDrawerState?h.default.createElement("button",{style:{pointerEvents:this.props.isFiltersOpen?"none":""},className:"pt-content-card__header--nav__icon flex-full-center pointer",onClick:this.props.handleDrawerState},h.default.createElement(p.a,{iconName:"filter"})):null)}}]),n}(h.default.PureComponent)},53:function(t,e,n){t.exports=n(59)},54:function(t,e){function n(t,e,n,r,a,o,c){try{var i=t[o](c),l=i.value}catch(t){return void n(t)}i.done?e(l):Promise.resolve(l).then(r,a)}t.exports=function(t){return function(){var e=this,r=arguments;return new Promise((function(a,o){var c=t.apply(e,r);function i(t){n(c,a,o,i,l,"next",t)}function l(t){n(c,a,o,i,l,"throw",t)}i(void 0)}))}}},59:function(t,e,n){var r=function(t){"use strict";var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},a=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",c=r.toStringTag||"@@toStringTag";function i(t,e,n,r){var a=e&&e.prototype instanceof u?e:u,o=Object.create(a.prototype),c=new b(r||[]);return o._invoke=function(t,e,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return N()}for(n.method=a,n.arg=o;;){var c=n.delegate;if(c){var i=g(c,n);if(i){if(i===s)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=l(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}(t,n,c),o}function l(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=i;var s={};function u(){}function f(){}function d(){}var h={};h[a]=function(){return this};var m=Object.getPrototypeOf,p=m&&m(m(w([])));p&&p!==e&&n.call(p,a)&&(h=p);var v=d.prototype=u.prototype=Object.create(h);function y(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function _(t,e){var r;this._invoke=function(a,o){function c(){return new e((function(r,c){!function r(a,o,c,i){var s=l(t[a],t,o);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,c,i)}),(function(t){r("throw",t,c,i)})):e.resolve(f).then((function(t){u.value=t,c(u)}),(function(t){return r("throw",t,c,i)}))}i(s.arg)}(a,o,r,c)}))}return r=r?r.then(c,c):c()}}function g(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,g(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var r=l(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,s;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function b(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function w(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:N}}function N(){return{value:void 0,done:!0}}return f.prototype=v.constructor=d,d.constructor=f,d[c]=f.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},y(_.prototype),_.prototype[o]=function(){return this},t.AsyncIterator=_,t.async=function(e,n,r,a,o){void 0===o&&(o=Promise);var c=new _(i(e,n,r,a),o);return t.isGeneratorFunction(n)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},y(v),v[c]="Generator",v[a]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=w,b.prototype={constructor:b,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return c.type="throw",c.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var i=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(i&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(i){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var a=r.arg;E(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:w(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=r}catch(t){Function("r","regeneratorRuntime = r")(r)}},60:function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},77:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return z}));var r=n(8),a=n.n(r),o=n(9),c=n.n(o),i=n(10),l=n.n(i),s=n(11),u=n.n(s),f=n(5),d=n.n(f),h=n(1),m=n(51),p=n(53),v=n.n(p),y=n(60),_=n.n(y),g=n(32),x=n.n(g),E=n(54),b=n.n(E),w=n(49),N=n(50),C=n(48),L=C.contact.form.validation;function S(){return(S=b()(v.a.mark((function t(e,n,r,a){var o;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=JSON.stringify({name:e,mail:n,msg:r,"g-recaptcha-response":a}),t.abrupt("return",fetch(N.b,{method:"POST",headers:{"Content-Type":"application/json; charset=UTF-8"},body:o}));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var k=function(t,e,n,r){return new Promise((function(a,o){return function(t){return!!t}(t)?function(t){return!(!t||!t.match(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i))}(e)?function(t){return!!t}(n)?function(t){return!!t}(r)?void function(t,e,n,r){return S.apply(this,arguments)}(t,e,n,r).then((function(t){t.status>=200&&t.status<300?a(String(L.success)):o(String(L.server_error))})).catch((function(t){o(String(L.conection_error))})):o(String(L.invalid_grecaptcha)):o(String(L.invalid_message)):o(String(L.invalid_email)):o(String(L.invalid_name))}))};function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d()(t);if(e){var a=d()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u()(this,n)}}var A=C.contact;function P(){return F.apply(this,arguments)}function F(){return(F=b()(v.a.mark((function t(){var e;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(7).then(n.t.bind(null,72,7));case 2:e=t.sent,this.setState({toastify:e});case 4:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function T(){return O.apply(this,arguments)}function O(){return(O=b()(v.a.mark((function t(){var e;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.e(3).then(n.t.bind(null,73,7));case 2:e=t.sent.default,this.setState({ReCAPTCHA:e});case 4:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}var I=function(t){var e=t.closeToast;return h.default.createElement("span",{className:"toastify-dismiss",onClick:e},A.toast.close)},M=function(t){l()(n,t);var e=R(n);function n(t){var r;return a()(this,n),(r=e.call(this,t)).state={name:"",email:"",message:"",isFormLoading:!1,toastify:{toast:null,ToastContainer:null},ReCAPTCHA:null},r.captcha=null,P.bind(x()(r))(),T.bind(x()(r))(),r.onFormSubmit=r.onFormSubmit.bind(x()(r)),r.onCaptchaChange=r.onCaptchaChange.bind(x()(r)),r.onInputValueChange=r.onInputValueChange.bind(x()(r)),r}return c()(n,[{key:"notify",value:function(t,e){switch(e){case"Success":this.state.toastify.toast.success(t,{closeButton:h.default.createElement(I,null),closeOnClick:!1});break;case"Error":this.state.toastify.toast.error(t,{closeButton:h.default.createElement(I,null),closeOnClick:!1});break;default:this.state.toastify.toast(t,{closeButton:h.default.createElement(I,null),closeOnClick:!1})}}},{key:"onFormSubmit",value:function(t){t.preventDefault(),this.captcha.execute()}},{key:"onCaptchaChange",value:function(t){var e=this;null!==t&&(this.setState({isFormLoading:!0}),k(this.state.name,this.state.email,this.state.message,t).then((function(t){e.notify(t,"Success"),e.captcha.reset(),e.setState({isFormLoading:!1})})).catch((function(t){e.notify(t,"Error"),e.captcha.reset(),e.setState({isFormLoading:!1})})))}},{key:"onInputValueChange",value:function(t){this.setState(_()({},t.target.id,t.target.value)),t.target.value?t.target.nextElementSibling.classList.add("has-content"):t.target.nextElementSibling.classList.remove("has-content")}},{key:"render",value:function(){var t,e=this,n=N.d.social.map((function(t,e){return h.default.createElement("a",{href:t.url,key:e,rel:"noopener",target:"_blank",title:t.iconName},h.default.createElement("div",{className:"pt-content-card__body__contact__social__item flex flex-full-center"},h.default.createElement(w.a,{iconName:t.iconName})," ",t.text))})),r=!this.state.ReCAPTCHA||!this.state.toastify.ToastContainer;return t=r?h.default.createElement("div",{className:"loader-container flex flex-main-center"},A.loading,h.default.createElement("div",{className:"loader"},h.default.createElement("span",null),h.default.createElement("span",null),h.default.createElement("span",null))):this.state.isFormLoading?h.default.createElement("div",{className:"loader-container flex flex-main-center"},A.sending,h.default.createElement("div",{className:"loader"},h.default.createElement("span",null),h.default.createElement("span",null),h.default.createElement("span",null))):h.default.createElement("div",{className:"flex flex-main-center"},A.send),h.default.createElement("div",{className:"pt-content-card__body pt-content-card__body__contact flex"},this.state.ReCAPTCHA&&"ReactSnap"!=navigator.userAgent?h.default.createElement(this.state.ReCAPTCHA,{ref:function(t){e.captcha=t},className:"recaptcha",size:"invisible",sitekey:N.a,onChange:this.onCaptchaChange}):null,this.state.toastify.ToastContainer?h.default.createElement(this.state.toastify.ToastContainer,{position:"bottom-left",autoClose:5e3,type:"default"}):null,N.d.social.length>0&&h.default.createElement("div",{className:"pt-content-card__body__contact__social flex flex-dc flex-full-center"},n),h.default.createElement("div",{className:"pt-content-card__body__contact__form flex flex-main-center"},h.default.createElement("form",{className:"flex flex-dc flex-full-center",onSubmit:this.onFormSubmit},h.default.createElement("div",{className:"pt-content-card__body__contact__form__row flex flex-dc flex-main-center"},h.default.createElement("input",{id:"name",className:"pt-content-card__body__contact__form__input",type:"text",onChange:this.onInputValueChange}),h.default.createElement("label",{htmlFor:"name",className:"pt-content-card__body__contact__form__label"},A.form.name),h.default.createElement("svg",{className:"line",viewBox:"0 0 40 2",preserveAspectRatio:"none"},h.default.createElement("path",{d:"M0 1 L40 1"}),h.default.createElement("path",{d:"M0 1 L40 1",className:"focus"}),h.default.createElement("path",{d:"M0 1 L40 1",className:"error"}),h.default.createElement("path",{d:"M0 1 L40 1",className:"valid"}))),h.default.createElement("div",{className:"pt-content-card__body__contact__form__row flex flex-dc flex-main-center"},h.default.createElement("input",{id:"email",className:"pt-content-card__body__contact__form__input",type:"email",onChange:this.onInputValueChange}),h.default.createElement("label",{htmlFor:"email",className:"pt-content-card__body__contact__form__label"},A.form.email),h.default.createElement("svg",{className:"line",viewBox:"0 0 40 2",preserveAspectRatio:"none"},h.default.createElement("path",{d:"M0 1 L40 1"}),h.default.createElement("path",{d:"M0 1 L40 1",className:"focus"}),h.default.createElement("path",{d:"M0 1 L40 1",className:"error"}),h.default.createElement("path",{d:"M0 1 L40 1",className:"valid"}))),h.default.createElement("div",{className:"pt-content-card__body__contact__form__row flex flex-dc flex-main-center"},h.default.createElement("textarea",{id:"message",className:"pt-content-card__body__contact__form__textarea",rows:"6",onChange:this.onInputValueChange}),h.default.createElement("label",{htmlFor:"message",className:"pt-content-card__body__contact__form__label"},A.form.message),h.default.createElement("svg",{className:"line",viewBox:"0 0 40 2",preserveAspectRatio:"none"},h.default.createElement("path",{d:"M0 1 L40 1"}),h.default.createElement("path",{d:"M0 1 L40 1",className:"focus"}),h.default.createElement("path",{d:"M0 1 L40 1",className:"error"}),h.default.createElement("path",{d:"M0 1 L40 1",className:"valid"}))),h.default.createElement("div",{className:"pt-content-card__body__contact__form__row flex flex-dc flex-main-center"},h.default.createElement("button",{className:"pt-content-card__body__contact__form__send-button flex flex-full-center pointer",disabled:this.state.isFormLoading||r},t)))))}}]),n}(h.default.PureComponent);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=d()(t);if(e){var a=d()(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return u()(this,n)}}var D=C.home,z=function(t){l()(n,t);var e=j(n);function n(){return a()(this,n),e.apply(this,arguments)}return c()(n,[{key:"render",value:function(){return h.default.createElement("div",{className:"pt-content-card__contact-container flex flex-dc"},h.default.createElement(m.a,{icon:"message",title:D.contact}),h.default.createElement(M,null))}}]),n}(h.default.PureComponent)}}]);