(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"/h46":function(e,t,n){n("cHUd")("Map")},CP1H:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/layouts/sections/wedding/about",function(){return n("oHTN")}])},LX0d:function(e,t,n){e.exports=n("UDep")},UDep:function(e,t,n){n("wgeU"),n("FlQf"),n("bBy9"),n("g33z"),n("XLbu"),n("/h46"),n("dVTT"),e.exports=n("WEpk").Map},XLbu:function(e,t,n){var a=n("Y7ZC");a(a.P+a.R,"Map",{toJSON:n("8iia")("Map")})},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var a=n("pbKT"),r=n("/HRN"),i=n("WaGi"),o=n("N9n2"),s=n("ZDA2"),l=n("/+P4");function u(e){var t=function(){if("undefined"===typeof Reflect||!a)return!1;if(a.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(a(Date,[],function(){})),!0}catch(e){return!1}}();return function(){var n,r=l(e);if(t){var i=l(this).constructor;n=a(r,arguments,i)}else n=r.apply(this,arguments);return s(this,n)}}var c=n("5Uuq"),f=n("KI45");t.__esModule=!0,t.default=void 0;var p,d=f(n("LX0d")),h=n("CxY0"),m=c(n("q1tI")),v=(f(n("17x9")),f(n("nOHt"))),g=(n("P5f7"),n("g/15"));function b(e){return e&&"object"===typeof e?(0,g.formatWithValidation)(e):e}var y=new d.default,N=window.IntersectionObserver;function w(){return p||(N?p=new N(function(e){e.forEach(function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(e.target),y.delete(e.target),t())}})},{rootMargin:"200px"}):void 0)}var M=function(e){o(n,e);var t=u(n);function n(e){var a;return r(this,n),(a=t.call(this,e)).p=void 0,a.cleanUpListeners=function(){},a.formatUrls=function(e){var t=null,n=null,a=null;return function(r,i){if(a&&r===t&&i===n)return a;var o=e(r,i);return t=r,n=i,a=o,o}}(function(e,t){return{href:b(e),as:t?b(t):t}}),a.linkClicked=function(e){var t=e.currentTarget,n=t.nodeName,r=t.target;if("A"!==n||!(r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.nativeEvent&&2===e.nativeEvent.which)){var i=a.formatUrls(a.props.href,a.props.as),o=i.href,s=i.as;if(function(e){var t=(0,h.parse)(e,!1,!0),n=(0,h.parse)((0,g.getLocationOrigin)(),!1,!0);return!t.host||t.protocol===n.protocol&&t.host===n.host}(o)){var l=window.location.pathname;o=(0,h.resolve)(l,o),s=s?(0,h.resolve)(l,s):o,e.preventDefault();var u=a.props.scroll;null==u&&(u=s.indexOf("#")<0),v.default[a.props.replace?"replace":"push"](o,s,{shallow:a.props.shallow}).then(function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())})}}},a.p=!1!==e.prefetch,a}return i(n,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"handleRef",value:function(e){var t=this;this.p&&N&&e&&e.tagName&&(this.cleanUpListeners(),this.cleanUpListeners=function(e,t){var n=w();return n?(n.observe(e),y.set(e,t),function(){try{n.unobserve(e)}catch(t){console.error(t)}y.delete(e)}):function(){}}(e,function(){t.prefetch()}))}},{key:"prefetch",value:function(){if(this.p){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,n=(0,h.resolve)(e,t);v.default.prefetch(n)}}},{key:"render",value:function(){var e=this,t=this.props.children,n=this.formatUrls(this.props.href,this.props.as),a=n.href,r=n.as;"string"===typeof t&&(t=m.default.createElement("a",null,t));var i=m.Children.only(t),o={ref:function(t){e.handleRef(t),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(t):"object"===typeof i.ref&&(i.ref.current=t))},onMouseEnter:function(t){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(t),e.prefetch()},onClick:function(t){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(o.href=r||a),m.default.cloneElement(i,o)}}]),n}(m.Component);M.propTypes=void 0;var k=M;t.default=k},dVTT:function(e,t,n){n("aPfg")("Map")},g33z:function(e,t,n){"use strict";var a=n("Wu5q"),r=n("n3ko");e.exports=n("raTm")("Map",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{get:function(e){var t=a.getEntry(r(this,"Map"),e);return t&&t.v},set:function(e,t){return a.def(r(this,"Map"),0===e?0:e,t)}},a,!0)},oHTN:function(e,t,n){"use strict";n.r(t);var a=n("vYYK"),r=n("q1tI"),i=n.n(r),o=n("1Yj4"),s=n("ok1R"),l=n("rhny"),u=n("YFqc"),c=n.n(u),f=i.a.createElement,p={a:{display:"inline-flex",width:"100%",justifyContent:"center"}};t.default=function(){return f("section",{className:"wedding format",id:"about"},f(o.a,null,f(s.a,null,f(l.a,{md:"8",className:"offset-md-2"},f("div",{className:"title"},f("img",{alt:"",className:"img-fluid title-img",src:"/assets/images/wedding-img/bottom.png"}),f("div",{className:"main-title"},f("h2",{className:"gradient-text"},"Servicios")),f("div",{className:"sub-title"},f("p",null,"Maquillaje art\xedstico para embarazadas.")))),f(l.a,{xl:"4",md:"6",className:"offset-xl-2"},f("img",{alt:"",className:"img-fluid about-img",src:"https://ik.imagekit.io/ge17f66b4ma/MIA-1_gfnS344_D.png?updatedAt=1626907771292"})),f(l.a,{xl:"4",lg:"6",md:"6"},f("div",{className:"center-text"},f("div",null,f("div",{className:"format-sub-text pt-3"},f("p",Object(a.a)({className:"about-para"},"className","pt-3"),f("strong",null,"Maquillaje a domicilio en Medell\xedn")),f("p",{className:"about-para"},"Realizo personalmente la sesi\xf3n de maquillaje de barriguitas a domicilio en Medell\xedn."),f("div",{style:p.a,className:"pb-3 pt-2"},f("a",{className:"btn btn-default btn-white",target:"_blank",href:"https://wa.me/573168161717?text=Hola, estoy interesado en maquillaje prenatal en Medell\xedn."},"AGENDAR CITA")),f("p",Object(a.a)({className:"about-para"},"className","pt-3"),f("strong",null,"Kit de maquillaje prenatal")),f("p",{className:"about-para"},"Es ideal para pintar la barriguita en compa\xf1\xeda de tus familiares y/o amigos en casa."),f("div",{style:p.a,className:"pb-3 pt-2"},f(c.a,{href:"/layouts/kit"},f("a",{className:"btn btn-default btn-white"},"M\xc1S INFORMACI\xd3N"))))))))))}},vYYK:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var a=n("hfKm"),r=n.n(a);function i(e,t,n){return t in e?r()(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}}},[["CP1H",0,1]]]);