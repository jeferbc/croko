(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"16Al":function(e,t,a){"use strict";var n=a("WbBG");function r(){}function o(){}o.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,o,s){if(s!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:r};return a.PropTypes=a,a}},"17x9":function(e,t,a){e.exports=a("16Al")()},"1Yj4":function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),o=a("q1tI"),s=a.n(o),c=a("17x9"),i=a.n(c),l=a("TSYQ"),u=a.n(l),f=a("33Jr"),p={tag:f.c,fluid:i.a.oneOfType([i.a.bool,i.a.string]),className:i.a.string,cssModule:i.a.object},d=function(e){var t=e.className,a=e.cssModule,o=e.fluid,c=e.tag,i=Object(r.a)(e,["className","cssModule","fluid","tag"]),l="container";!0===o?l="container-fluid":o&&(l="container-"+o);var p=Object(f.b)(u()(t,l),a);return s.a.createElement(c,Object(n.a)({},i,{className:p}))};d.propTypes=p,d.defaultProps={tag:"div"},t.a=d},"33Jr":function(e,t,a){"use strict";a.d(t,"b",function(){return s}),a.d(t,"c",function(){return i}),a.d(t,"a",function(){return l});var n,r=a("17x9"),o=a.n(r);function s(e,t){return void 0===e&&(e=""),void 0===t&&(t=n),t?e.split(" ").map(function(e){return t[e]||e}).join(" "):e}var c="object"===typeof window&&window.Element||function(){};o.a.oneOfType([o.a.string,o.a.func,function(e,t,a){if(!(e[t]instanceof c))return new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Expected prop to be an instance of Element. Validation failed.")},o.a.shape({current:o.a.any})]);var i=o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func}),o.a.arrayOf(o.a.oneOfType([o.a.func,o.a.string,o.a.shape({$$typeof:o.a.symbol,render:o.a.func})]))]);"undefined"===typeof window||!window.document||window.document.createElement;function l(e){var t=typeof e;return null!=e&&("object"===t||"function"===t)}},J47q:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("1Yj4"),s=a("ok1R"),c=a("rhny"),i=r.a.createElement;t.default=function(){return i("footer",{className:"wedding copyright copyright-bg"},i(o.a,null,i(s.a,null,i(c.a,{xl:"3",sm:"12"},i("div",{className:"text-center"},i("div",{className:"link-horizontal"},i("ul",null,i("li",null,i("a",{className:"copyright-text",href:"https://www.facebook.com/crokolina",target:"_blank"},i("i",{"aria-hidden":"true",className:"fa fa-facebook gradient-text"}))),i("li",null,i("a",{className:"copyright-text ",href:"https://www.instagram.com/croko_maquillaje_embarazada/",target:"_blank"},i("i",{"aria-hidden":"true",className:"fa fa-instagram gradient-text"}))),i("li",null,i("a",{className:"copyright-text",href:"https://wa.me/573168161717?text=Hola, estoy interesado en maquillaje prenatal en Medell\xedn.",target:"_blank"},i("i",{"aria-hidden":"true",className:"fa fa-whatsapp gradient-text"}))))))),i(c.a,{xl:"6",sm:"12"},i("div",{className:"m-l-auto center-para"},i("h6",{className:"copyright-text text-center"},"2016 - 2021 Croko"))))))}},Qetd:function(e,t,a){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},TSYQ:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var s=r.apply(null,n);s&&e.push(s)}else if("object"===o)for(var c in n)a.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()},WbBG:function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},ok1R:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),o=a("q1tI"),s=a.n(o),c=a("17x9"),i=a.n(c),l=a("TSYQ"),u=a.n(l),f=a("33Jr"),p=i.a.oneOfType([i.a.number,i.a.string]),d={tag:f.c,noGutters:i.a.bool,className:i.a.string,cssModule:i.a.object,form:i.a.bool,xs:p,sm:p,md:p,lg:p,xl:p},m={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e){var t=e.className,a=e.cssModule,o=e.noGutters,c=e.tag,i=e.form,l=e.widths,p=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),d=[];l.forEach(function(t,a){var n=e[t];if(delete p[t],n){var r=!a;d.push(r?"row-cols-"+n:"row-cols-"+t+"-"+n)}});var m=Object(f.b)(u()(t,o?"no-gutters":null,i?"form-row":"row",d),a);return s.a.createElement(c,Object(n.a)({},p,{className:m}))};h.propTypes=d,h.defaultProps=m,t.a=h},rhny:function(e,t,a){"use strict";var n=a("wx14"),r=a("zLVn"),o=a("q1tI"),s=a.n(o),c=a("17x9"),i=a.n(c),l=a("TSYQ"),u=a.n(l),f=a("33Jr"),p=i.a.oneOfType([i.a.number,i.a.string]),d=i.a.oneOfType([i.a.bool,i.a.number,i.a.string,i.a.shape({size:i.a.oneOfType([i.a.bool,i.a.number,i.a.string]),order:p,offset:p})]),m={tag:f.c,xs:d,sm:d,md:d,lg:d,xl:d,className:i.a.string,cssModule:i.a.object,widths:i.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a},g=function(e){var t=e.className,a=e.cssModule,o=e.widths,c=e.tag,i=Object(r.a)(e,["className","cssModule","widths","tag"]),l=[];o.forEach(function(t,n){var r=e[t];if(delete i[t],r||""===r){var o=!n;if(Object(f.a)(r)){var s,c=o?"-":"-"+t+"-",p=b(o,t,r.size);l.push(Object(f.b)(u()(((s={})[p]=r.size||""===r.size,s["order"+c+r.order]=r.order||0===r.order,s["offset"+c+r.offset]=r.offset||0===r.offset,s)),a))}else{var d=b(o,t,r);l.push(d)}}}),l.length||l.push("col");var p=Object(f.b)(u()(t,l),a);return s.a.createElement(c,Object(n.a)({},i,{className:p}))};g.propTypes=m,g.defaultProps=h,t.a=g},s9rS:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/layouts/sections/wedding/footer",function(){return a("J47q")}])},wx14:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",function(){return n})},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}a.d(t,"a",function(){return n})}},[["s9rS",0,1]]]);