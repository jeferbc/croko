module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./constant/menu.js":
/*!**************************!*\
  !*** ./constant/menu.js ***!
  \**************************/
/*! exports provided: MENUITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MENUITEMS", function() { return MENUITEMS; });
const MENUITEMS = [{
  title: 'Home',
  type: 'sub',
  children: [{
    path: '/layouts/agency',
    title: 'Agency',
    type: 'link'
  }, {
    path: '/layouts/app1',
    title: 'App Landing1',
    type: 'link'
  }, {
    path: '/layouts/app2',
    title: 'App Landing2',
    type: 'link'
  }, {
    path: '/layouts/event',
    title: 'Event',
    type: 'link'
  }, {
    path: '/layouts/gym',
    title: 'Gym',
    type: 'link'
  }, {
    path: '/layouts/music',
    title: 'Music',
    type: 'link'
  }, {
    path: '/layouts/resume',
    title: 'Resume',
    type: 'link'
  }, {
    path: '/layouts/modern-sass',
    title: 'Sass1',
    type: 'link'
  }, {
    path: '/layouts/enterprice-sass',
    title: 'Sass2',
    type: 'link'
  }, {
    path: '/layouts/wedding',
    title: 'Wedding',
    type: 'link'
  }, {
    path: '/layouts/yoga',
    title: 'Yoga',
    type: 'link'
  }, {
    path: '/layouts/portfolioLayouts',
    title: 'Portfolio',
    type: 'link'
  }]
}, {
  title: 'Blog',
  type: 'sub',
  children: [{
    title: 'Blog Grid View',
    type: 'sub',
    children: [{
      path: '/blog/blog-grid/column-no-sidebar',
      title: 'No Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-grid/column-left-sidebar',
      title: 'Left Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-grid/column-right-sidebar',
      title: 'Right Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-grid/classic-no-sidebar',
      title: 'Full Width No Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-grid/classic-right-sidebar',
      title: 'Full Width Right Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-grid/classic-left-sidebar',
      title: 'Full Width Left Sidebar',
      type: 'link'
    }]
  }, {
    title: 'Blog List',
    type: 'sub',
    children: [{
      path: '/blog/blog-list/list-no-sidebar',
      title: 'List No Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-list/list-left-sidebar',
      title: 'List Left Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-list/list-right-sidebar',
      title: 'List Right Sidebar',
      type: 'link'
    }]
  }, {
    title: 'Blog List Creative',
    type: 'sub',
    children: [{
      path: '/blog/blog-list-creative/split-no-sidebar',
      title: 'No Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-list-creative/split-left-sidebar',
      title: 'Left Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-list-creative/split-right-sidebar',
      title: 'Right Sidebar',
      type: 'link'
    }]
  }, {
    title: 'Blog Mix Layout',
    type: 'sub',
    children: [{
      path: '/blog/blog-mix-layout/bigpost-list',
      title: 'List Mix With Left Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-mix-layout/bigpost-split',
      title: 'List Mix With Right Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-mix-layout/bigpost-split-no-sidebar',
      title: 'List Mix With No Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-mix-layout/bigpost-list-no-sidebar',
      title: 'List Full Width No Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-mix-layout/bigpost-column',
      title: 'Grid Mix With Right Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-mix-layout/bigpost-column-no-sidebar',
      title: 'Grid Mix With No Sidebar',
      type: 'link'
    }]
  }, {
    title: 'Blog Details',
    type: 'sub',
    children: [{
      path: '/blog/blog-detail/detail-left-sidebar',
      title: 'Left Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-detail/detail',
      title: 'Right Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-detail/detail-no-sidebar',
      title: 'No Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-detail/detail-gallery',
      title: 'Detail Page With Gallery',
      type: 'link'
    }, {
      path: '/blog/blog-detail/detail-video',
      title: 'Detail Page With Video',
      type: 'link'
    }]
  }, {
    title: 'Blog Masonary',
    type: 'sub',
    children: [{
      path: '/blog/blog-masonary/fullwidth-2',
      title: 'Full Width 2',
      type: 'link'
    }, {
      path: '/blog/blog-masonary/fullwidth-3',
      title: 'Full Width 3',
      type: 'link'
    }, {
      path: '/blog/blog-masonary/fullwidth-4',
      title: 'Full Width 4',
      type: 'link'
    }, {
      path: '/blog/blog-masonary/masonary-no-sidebar',
      title: 'No Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-masonary/masonary-right-sidebar',
      title: 'Right Sidebar',
      type: 'link'
    }, {
      path: '/blog/blog-masonary/masonary-left-sidebar',
      title: 'Left Sidebar',
      type: 'link'
    }]
  }]
}, {
  title: 'Pages',
  type: 'sub',
  children: [{
    path: '/page/404',
    title: '404',
    type: 'link'
  }, {
    path: '/page/faq',
    title: 'FAQ',
    type: 'link'
  }, {
    path: '/page/typography',
    title: 'Typography',
    type: 'link'
  }, {
    path: '/page/maintenance',
    title: 'Maintenance',
    type: 'link'
  }, {
    path: '/page/about-us',
    title: 'About us',
    type: 'link'
  }, {
    title: 'Team',
    type: 'sub',
    children: [{
      path: '/page/team',
      title: 'Team',
      type: 'link'
    }, {
      path: '/page/team-grid',
      title: 'Team Grid',
      type: 'link'
    }, {
      path: '/page/team-list',
      title: 'Team List',
      type: 'link'
    }]
  }, {
    title: 'Comming Soon',
    type: 'sub',
    children: [{
      path: '/page/commingsoon1',
      title: 'Comming Soon1',
      type: 'link'
    }, {
      path: '/page/commingsoon2',
      title: 'Comming Soon2',
      type: 'link'
    }]
  }]
}, {
  title: 'Elements',
  megaMenu: true,
  megaMenuType: 'small',
  type: 'sub',
  children: [{
    title: 'Elements1',
    type: 'sub',
    children: [{
      path: '/elements/alerts',
      title: 'Alerts',
      type: 'link',
      icon: 'alert'
    }, {
      path: '/elements/accordion',
      title: 'Accordion',
      type: 'link',
      icon: 'layout-accordion-merged'
    }, {
      path: '/elements/boxshadow',
      title: 'Box Shadow',
      type: 'link',
      icon: 'layers'
    }, {
      path: '/elements/button',
      title: 'Buttons',
      type: 'link',
      icon: 'write'
    }, {
      path: '/elements/contact',
      title: 'Contact',
      type: 'link',
      icon: 'map-alt'
    }]
  }, {
    title: 'Elements2',
    type: 'sub',
    children: [{
      path: '/elements/event-schedule',
      title: 'Event-Schedule',
      type: 'link',
      icon: 'list'
    }, {
      path: '/elements/gallery',
      title: 'Gallery',
      type: 'link',
      icon: 'gallery'
    }, {
      path: '/elements/pricing',
      title: 'Pricing',
      type: 'link',
      icon: 'money'
    }, {
      path: '/elements/counter',
      title: 'Counter',
      type: 'link',
      icon: 'time'
    }, {
      path: '/elements/count-down',
      title: 'Countdown',
      type: 'link',
      icon: 'alarm-clock'
    }]
  }, {
    title: 'Elements3',
    type: 'sub',
    children: [{
      path: '/elements/progressbar',
      title: 'Progress Bar',
      type: 'link',
      icon: 'bar-chart'
    }, {
      path: '/elements/testimonial',
      title: 'Testimonial',
      type: 'link',
      icon: 'thought'
    }, {
      path: '/elements/video',
      title: 'Video',
      type: 'link',
      icon: 'video-camera'
    }, {
      path: '/elements/service',
      title: 'Service',
      type: 'link',
      icon: 'headphone'
    }, {
      path: '/elements/subscribe',
      title: 'Subscribe',
      type: 'link',
      icon: 'share-alt'
    }]
  }]
}, {
  title: 'Portfolio',
  megaMenu: true,
  megaMenuType: 'medium',
  type: 'sub',
  children: [{
    title: 'Portfolio-Basic',
    type: 'link',
    children: [{
      path: '/portfolio/basic-2-grid',
      title: 'Basic – 2 Grid',
      type: 'link'
    }, {
      path: '/portfolio/basic-3-grid',
      title: 'Basic – 3 Grid',
      type: 'link'
    }, {
      path: '/portfolio/basic-4-grid',
      title: 'Basic – 4 Grid',
      type: 'link'
    }, {
      path: '/portfolio/portfolio-title-2-col',
      title: 'Basic W Tittle – 2 Grid',
      type: 'link'
    }, {
      path: '/portfolio/portfolio-title-3-col',
      title: 'Basic W Tittle – 3 Grid',
      type: 'link'
    }, {
      path: '/portfolio/portfolio-title-4-col',
      title: 'Basic W Tittle – 4 Grid',
      type: 'link'
    }, {
      path: '/portfolio/portfolio-parallex',
      title: 'Parallex',
      type: 'link'
    }, {
      path: '/portfolio/centered-slide',
      title: 'Centered Slides',
      type: 'link'
    }, {
      path: '/portfolio/vertical-slide',
      title: 'Vertical Slides',
      type: 'link'
    }, {
      path: '/portfolio/multiple-carousel',
      title: '4 Slide With Center Slider',
      type: 'link'
    }]
  }, {
    title: 'Portfolio-Details',
    type: 'link',
    children: [{
      path: '/portfolio/portfolio-detail-1',
      title: 'Container Layout',
      type: 'link'
    }, {
      path: '/portfolio/portfolio-detail-2',
      title: 'Full Width',
      type: 'link'
    }, {
      path: '/portfolio/portfolio-detail-3',
      title: 'With Bg Bredcrumb',
      type: 'link'
    }, {
      path: '/portfolio/portfolio-detail-4',
      title: 'Details With Slider',
      type: 'link'
    }, {
      path: '/portfolio/portfolio-detail-5',
      title: 'Video Portfolio',
      type: 'link'
    }, {
      path: '/portfolio/portfolio-detail-6',
      title: 'Two Image Portfolio',
      type: 'link'
    }, {
      path: '/portfolio/portfolio-detail-7',
      title: 'Left Side Image Portfolio',
      type: 'link'
    }]
  }, {
    title: 'Trending Layout',
    type: 'link',
    children: [{
      path: '/portfolio/creative-1',
      title: 'Trending Layout 1',
      type: 'link'
    }, {
      path: '/portfolio/creative-2',
      title: 'Trending Layout 2',
      type: 'link'
    }, {
      path: '/portfolio/creative-3',
      title: 'Trending Layout 3',
      type: 'link'
    }, {
      path: '/portfolio/creative-4',
      title: 'Trending Layout 4',
      type: 'link'
    }, {
      path: '/portfolio/modern-4',
      title: 'Trending Layout 5',
      type: 'link'
    }, {
      path: '/portfolio/modern-3',
      title: 'Trending Layout 6',
      type: 'link'
    }, {
      path: '/portfolio/modern-2',
      title: 'Trending Layout 7',
      type: 'link'
    }]
  }, {
    title: 'Portfolio-Masonary',
    type: 'link',
    children: [{
      path: '/portfolio/full-width-2-grid',
      title: 'Full-Width – 2 Grid',
      type: 'link'
    }, {
      path: '/portfolio/full-width-3-grid',
      title: 'Full-Width – 3 Grid',
      type: 'link'
    }, {
      path: '/portfolio/full-width-4-grid',
      title: 'Full-Width – 4 Grid',
      type: 'link'
    }]
  }]
}, {
  title: 'Features',
  megaMenu: true,
  megaMenuType: 'medium',
  type: 'sub',
  children: [{
    title: 'Header Style',
    type: 'link',
    children: [{
      path: '/features/header-light',
      title: 'Light Header',
      type: 'link'
    }, {
      path: '/features/header-dark',
      title: 'Dark Header',
      type: 'link'
    }, {
      path: '/features/header-transparent',
      title: 'Glass Header',
      type: 'link'
    }, {
      path: '/features/header-right-navigation',
      title: 'Header Right Navigation',
      type: 'link'
    }, {
      path: '/features/header-center-logo',
      title: 'Header Center Logo',
      type: 'link'
    }]
  }, {
    title: 'Breadcrumb Style',
    type: 'link',
    children: [{
      path: '/features/breadcrumb-big-typography',
      title: 'Classic Type',
      type: 'link'
    }, {
      path: '/features/breadcrumb-left',
      title: 'Breadcrumb Left',
      type: 'link'
    }, {
      path: '/features/breadcrumb-right',
      title: 'Breadcrumb Right',
      type: 'link'
    }, {
      path: '/features/breadcrumb-center',
      title: 'Breadcrumb Center',
      type: 'link'
    }, {
      path: '/features/breadcrumb-dark',
      title: 'Breadcrumb Dark',
      type: 'link'
    }, {
      path: '/features/breadcrumb-parallex-bg',
      title: 'Breadcrumb Parallex-Bg',
      type: 'link'
    }, {
      path: '/features/breadcrumb-bg',
      title: 'Breadcrumb Bg',
      type: 'link'
    }, {
      path: '/features/breadcrumb-gallery',
      title: 'Breadcrumb Gallery',
      type: 'link'
    }, {
      path: '/features/breadcrumb-video',
      title: 'Breadcrumb Video',
      type: 'link'
    }]
  }, {
    title: 'Footer Style',
    type: 'link',
    children: [{
      path: '/features/footer-default',
      title: 'Footer-Default',
      type: 'link'
    }, {
      path: '/features/footer-light',
      title: 'Footer-Light',
      type: 'link'
    }, {
      path: '/features/footer-dark',
      title: 'Footer-Dark',
      type: 'link'
    }, {
      path: '/features/footer-light2',
      title: 'Footer Dark Light',
      type: 'link'
    }, {
      path: '/features/footer-dark2',
      title: 'Footer Dark Gradient',
      type: 'link'
    }, {
      path: '/features/footer-dark3',
      title: 'Footer Creative',
      type: 'link'
    }]
  }, {
    title: 'Gallery',
    type: 'link',
    children: [{
      path: '/features/zoom-gallery',
      title: 'Zoom Gallery',
      type: 'link'
    }, {
      path: '/features/form-popup',
      title: 'Form Popup',
      type: 'link'
    }, {
      path: '/features/modal-popup',
      title: 'Modal Popup',
      type: 'link'
    }, {
      path: '/features/youtube-popup',
      title: 'Youtube Popup',
      type: 'link'
    }, {
      path: '/features/map-popup',
      title: 'Map Popup',
      type: 'link'
    }]
  }]
}];

/***/ }),

/***/ "./containers/common/center-logo-header.js":
/*!*************************************************!*\
  !*** ./containers/common/center-logo-header.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./containers/common/nav.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/home/jeffe/work/Barriguitas/unice_theme/containers/common/center-logo-header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const CenterLogoHeader = props => {
  const {
    0: show,
    1: setShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: sidebar,
    1: setSidebar
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const clickSidebar = () => {
    setSidebar(!sidebar);
    document.querySelector('.navbar').classList.add('openSidebar');
  };

  return __jsx("header", {
    className: `loding-header nav-abs custom-scroll header-rel ${props.themeClass}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "row",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "col-12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, __jsx("nav", {
    className: "navbar-expand-lg theme-nav w-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "center-header d-none d-lg-block",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 33
    }
  }, __jsx("img", {
    alt: "logo",
    className: "logo-abs h-auto",
    src: "../assets/images/logo/croko_logo.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 37
    }
  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "logo-responsive navbar-brand d-md-block d-lg-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 33
    }
  }, __jsx("img", {
    alt: "logo",
    src: "../assets/images/logo/croko.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 37
    }
  }))), __jsx("div", {
    className: "responsive-btn ml-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 29
    }
  }, __jsx("a", {
    className: "toggle-nav",
    onClick: clickSidebar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 33
    }
  }, __jsx("i", {
    "aria-hidden": "true",
    className: "fa fa-bars",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 37
    }
  }))), __jsx(_nav__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "w-100",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 29
    }
  }), props.shop && __jsx("div", {
    className: "top-header-right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 33
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 37
    }
  }, __jsx("li", {
    className: "search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 41
    }
  }, __jsx("a", {
    href: "javascript",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 45
    }
  }, __jsx("i", {
    className: "icon-search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 49
    }
  }))), __jsx("li", {
    className: "account ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 41
    }
  }, __jsx("a", {
    href: "javascript",
    onClick: () => setShow(!show),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 45
    }
  }, __jsx("i", {
    className: "icon-user",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 49
    }
  })), __jsx("div", {
    className: `dropdown-menu ${show && `show`} dropdown-menu-right`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 45
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop/auth/login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 49
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 81
    }
  }, "Login")), __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 49
    }
  }, "Account"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop/wishlist",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 49
    }
  }, __jsx("a", {
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 79
    }
  }, "Wishlist")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/shop/checkout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 49
    }
  }, "checkout"))))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CenterLogoHeader);

/***/ }),

/***/ "./containers/common/nav.js":
/*!**********************************!*\
  !*** ./containers/common/nav.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constant_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constant/menu */ "./constant/menu.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/jeffe/work/Barriguitas/unice_theme/containers/common/nav.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Nav = () => {
  const {
    0: mainmenu,
    1: setMainMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"]);
  const {
    0: sidebar,
    1: setSidebar
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  function closeSidebar() {
    setSidebar(!sidebar);
    document.querySelector('.navbar').classList.remove('openSidebar');
  }

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const currentUrl = location.pathname;
    mainmenu.filter(items => {
      if (items.path === currentUrl) setNavActive(items);
      if (!items.children) return false;
      items.children.filter(subItems => {
        if (subItems.path === currentUrl) setNavActive(subItems);
        if (!subItems.children) return false;
        subItems.children.filter(subSubItems => {
          if (subSubItems.path === currentUrl) setNavActive(subSubItems);
        });
      });
    });
  }, []);

  const setNavActive = item => {
    _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].filter(menuItem => {
      if (menuItem != item) menuItem.active = false;
      if (menuItem.children && menuItem.children.includes(item)) menuItem.active = true;

      if (menuItem.children) {
        menuItem.children.filter(submenuItems => {
          if (submenuItems.children && submenuItems.children.includes(item)) {
            menuItem.active = true;
            submenuItems.active = true;
          }
        });
      }
    });
    item.active = !item.active;
    setMainMenu({
      mainmenu: _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"]
    });
  }; // Click Toggle menu


  const toggletNavActive = item => {
    if (!item.active) {
      _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].forEach(a => {
        if (_constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].includes(item)) a.active = false;
        if (!a.children) return false;
        a.children.forEach(b => {
          if (a.children.includes(item)) {
            b.active = false;
          }

          if (!b.children) return false;
          b.children.forEach(c => {
            if (b.children.includes(item)) {
              c.active = false;
            }
          });
        });
      });
    }

    item.active = !item.active;
    setMainMenu({
      mainmenu: _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"]
    });
  };

  return __jsx("div", {
    className: `navbar`,
    id: "togglebtn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "responsive-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "btn-back",
    onClick: closeSidebar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx("h5", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }, "back"))), __jsx("ul", {
    className: "main-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }, _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].slice(0, 3).map((menuItem, i) => {
    return __jsx("li", {
      key: i,
      className: ` ${menuItem.megaMenu ? 'mega-menu' : ''}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 29
      }
    }, menuItem.sidebartitle ? __jsx("div", {
      className: "dropdown",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 37
      }
    }, menuItem.sidebartitle) : '', menuItem.type === 'sub' ? __jsx("a", {
      className: "dropdown",
      href: "#javascript",
      onClick: () => toggletNavActive(menuItem),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 37
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 41
      }
    }, menuItem.title)) : '', menuItem.type === 'link' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `${process.env.PUBLIC_URL}${menuItem.path}`,
      className: `${menuItem.active ? 'active' : ''}`,
      onClick: () => toggletNavActive(menuItem),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 37
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 41
      }
    }, menuItem.title), menuItem.children ? __jsx("i", {
      className: "fa fa-angle-right pull-right",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 45
      }
    }) : '') : '', __jsx("div", {
      className: `mega-menu-container resize ${menuItem.active ? 'opensubmenu' : ''}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 33
      }
    }, menuItem.megaMenu === true ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 45
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 49
      }
    }, menuItem.children.map((megaMenuItem, i) => {
      return __jsx("div", {
        className: `${menuItem.megaMenuType == 'small' ? 'col-lg-4' : menuItem.megaMenuType == 'medium' ? 'col-lg-3' : menuItem.megaMenuType == 'large' ? 'col' : ''} `,
        key: i,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 65
        }
      }, __jsx("div", {
        className: "menu-container",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 69
        }
      }, __jsx("a", {
        className: "menu-head",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 73
        }
      }, megaMenuItem.title), __jsx("ul", {
        className: `menu-icon ${megaMenuItem.title ? 'openSubChildMenu' : ''}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 73
        }
      }, menuItem.title === 'Elements' ? megaMenuItem.children.map((subMegaMenuItem, i) => {
        return __jsx("li", {
          key: i,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 89
          }
        }, __jsx("a", {
          href: subMegaMenuItem.path,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 93
          }
        }, __jsx("i", {
          className: `icon-${subMegaMenuItem.icon}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 97
          }
        }), subMegaMenuItem.title));
      }) : megaMenuItem.children.map((subMegaMenuItem, i) => {
        return __jsx("li", {
          key: i,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 89
          }
        }, __jsx("a", {
          href: subMegaMenuItem.path,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 93
          }
        }, subMegaMenuItem.title));
      }))));
    }))) : ''), menuItem.children && !menuItem.megaMenu ? __jsx("ul", {
      className: `${menuItem.active ? 'menu-open activeSubmenu' : ''}`,
      style: menuItem.active ? {
        opacity: 1,
        transition: 'opacity 500ms ease-in'
      } : {},
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 37
      }
    }, menuItem.children.map((childrenItem, index) => __jsx("li", {
      key: index,
      className: `${childrenItem.children ? 'sub-menu ' : ''}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 45
      }
    }, childrenItem.type === 'sub' ? __jsx("a", {
      href: "#javascript",
      onClick: () => toggletNavActive(childrenItem),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 53
      }
    }, childrenItem.title) : '', childrenItem.type === 'link' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `${childrenItem.path}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 169,
        columnNumber: 53
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 57
      }
    }, "    ", childrenItem.title, " ")) : '', childrenItem.children ? __jsx("ul", {
      className: `${childrenItem.active ? 'menu-open' : 'active'}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 53
      }
    }, childrenItem.children.map((childrenSubItem, key) => __jsx("li", {
      key: key,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176,
        columnNumber: 61
      }
    }, childrenSubItem.type === 'link' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `${childrenSubItem.path}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 69
      }
    }, __jsx("a", {
      className: "sub-menu-title",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 73
      }
    }, childrenSubItem.title)) : ''))) : ''))) : '');
  })), __jsx("ul", {
    className: "main-menu",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }, _constant_menu__WEBPACK_IMPORTED_MODULE_2__["MENUITEMS"].slice(3, 7).map((menuItem, i) => {
    return __jsx("li", {
      key: i,
      className: ` ${menuItem.megaMenu ? 'mega-menu' : ''}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 29
      }
    }, menuItem.sidebartitle ? __jsx("div", {
      className: "dropdown",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 37
      }
    }, menuItem.sidebartitle) : '', menuItem.type === 'sub' ? __jsx("a", {
      className: "dropdown",
      href: "#javascript",
      onClick: () => toggletNavActive(menuItem),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 37
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 41
      }
    }, menuItem.title)) : '', menuItem.type === 'link' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `${process.env.PUBLIC_URL}${menuItem.path}`,
      className: `${menuItem.active ? 'active' : ''}`,
      onClick: () => toggletNavActive(menuItem),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 37
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 41
      }
    }, menuItem.title), menuItem.children ? __jsx("i", {
      className: "fa fa-angle-right pull-right",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 45
      }
    }) : '') : '', __jsx("div", {
      className: `mega-menu-container ${menuItem.title === 'Elements' ? 'resize' : ''} ${menuItem.active ? 'opensubmenu activeSubmenu' : ''}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 33
      }
    }, menuItem.megaMenu === true ? __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 45
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 49
      }
    }, menuItem.children.map((megaMenuItem, i) => {
      return __jsx("div", {
        className: `${menuItem.megaMenuType == 'small' ? 'col-lg-4' : menuItem.megaMenuType == 'medium' ? 'col-lg-3' : menuItem.megaMenuType == 'large' ? 'col' : ''} `,
        key: i,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 65
        }
      }, __jsx("div", {
        className: "menu-container",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 69
        }
      }, __jsx("a", {
        className: "menu-head",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 73
        }
      }, megaMenuItem.title), __jsx("ul", {
        className: `menu-icon ${megaMenuItem.title ? 'openSubChildMenu' : ''}`,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 73
        }
      }, menuItem.title === 'Elements' ? megaMenuItem.children.map((subMegaMenuItem, i) => {
        return __jsx("li", {
          key: i,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240,
            columnNumber: 89
          }
        }, __jsx("a", {
          href: subMegaMenuItem.path,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 241,
            columnNumber: 93
          }
        }, __jsx("i", {
          className: `icon-${subMegaMenuItem.icon}`,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242,
            columnNumber: 97
          }
        }), subMegaMenuItem.title));
      }) : megaMenuItem.children.map((subMegaMenuItem, i) => {
        return __jsx("li", {
          key: i,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 248,
            columnNumber: 89
          }
        }, __jsx("a", {
          href: subMegaMenuItem.path,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 249,
            columnNumber: 93
          }
        }, subMegaMenuItem.title));
      }))));
    }))) : ''), menuItem.children && !menuItem.megaMenu ? __jsx("ul", {
      className: `${menuItem.active ? 'menu-open activeSubmenu' : ''}`,
      style: menuItem.active ? {
        opacity: 1,
        transition: 'opacity 500ms ease-in'
      } : {},
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 37
      }
    }, menuItem.children.map((childrenItem, index) => __jsx("li", {
      key: index,
      className: `${childrenItem.children ? 'sub-menu ' : ''}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 45
      }
    }, childrenItem.type === 'sub' ? __jsx("a", {
      href: "#javascript",
      onClick: () => toggletNavActive(childrenItem),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 53
      }
    }, childrenItem.title) : '', childrenItem.type === 'link' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `${childrenItem.path}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 53
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 57
      }
    }, "    ", childrenItem.title, " ")) : '', childrenItem.children ? __jsx("ul", {
      className: `${childrenItem.active ? 'menu-open activeSubmenu' : 'active'}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 53
      }
    }, childrenItem.children.map((childrenSubItem, key) => __jsx("li", {
      key: key,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 61
      }
    }, childrenSubItem.type === 'link' ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: `${childrenSubItem.path}`,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 69
      }
    }, __jsx("a", {
      className: "sub-menu-title",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 73
      }
    }, childrenSubItem.title)) : ''))) : ''))) : '');
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./containers/portfolio/basic.js":
/*!***************************************!*\
  !*** ./containers/portfolio/basic.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./database */ "./containers/portfolio/database.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_database__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_image_lightbox_next__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-image-lightbox-next */ "./node_modules/react-image-lightbox-next/dist/main.js");
/* harmony import */ var react_image_lightbox_next__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox_next__WEBPACK_IMPORTED_MODULE_9__);







var _jsxFileName = "/home/jeffe/work/Barriguitas/unice_theme/containers/portfolio/basic.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }




const AllImg = [__webpack_require__(/*! ../../public/assets/images/portfolio/Barriguita_1.png */ "./public/assets/images/portfolio/Barriguita_1.png"), __webpack_require__(/*! ../../public/assets/images/portfolio/Barriguita_2.png */ "./public/assets/images/portfolio/Barriguita_2.png"), __webpack_require__(/*! ../../public/assets/images/portfolio/Barriguita_10.png */ "./public/assets/images/portfolio/Barriguita_10.png"), __webpack_require__(/*! ../../public/assets/images/portfolio/Barriguita_4.png */ "./public/assets/images/portfolio/Barriguita_4.png"), __webpack_require__(/*! ../../public/assets/images/portfolio/Barriguita_5.png */ "./public/assets/images/portfolio/Barriguita_5.png"), __webpack_require__(/*! ../../public/assets/images/portfolio/Barriguita_6.png */ "./public/assets/images/portfolio/Barriguita_6.png"), __webpack_require__(/*! ../../public/assets/images/portfolio/Barriguita_7.png */ "./public/assets/images/portfolio/Barriguita_7.png"), __webpack_require__(/*! ../../public/assets/images/portfolio/Barriguita_8.png */ "./public/assets/images/portfolio/Barriguita_8.png"), __webpack_require__(/*! ../../public/assets/images/portfolio/Barriguita_9.png */ "./public/assets/images/portfolio/Barriguita_9.png")];

const Basic = ({
  className,
  title,
  subTitle,
  fluid
}) => {
  const initilindex = {
    index: 0
  };
  const {
    0: photoIndex,
    1: setPhotoIndex
  } = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(initilindex);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: "portfolio-section fullwidth-portfolio masonray-sec zoom-gallery titles",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: fluid || 'container',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, _database__WEBPACK_IMPORTED_MODULE_8__["AllImgData"].map((imgItem, i) => {
    return __jsx("div", {
      className: className,
      key: i,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "overlay",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "border-portfolio",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "zoom_gallery",
      "data-source": AllImg[photoIndex.index],
      title: "",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 41
      }
    }, __jsx("div", {
      className: "overlay-background",
      onClick: () => setPhotoIndex(_objectSpread({}, photoIndex, {
        index: i,
        isOpen: true
      })),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 45
      }
    }, __jsx("i", {
      "aria-hidden": "true",
      className: "fa fa-plus",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 49
      }
    })), __jsx("img", {
      alt: "",
      className: "img-fluid blur-up lazyload",
      src: imgItem.img,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 45
      }
    }), photoIndex.isOpen && __jsx(react_image_lightbox_next__WEBPACK_IMPORTED_MODULE_9___default.a, {
      mainSrc: AllImg[photoIndex.index],
      nextSrc: AllImg[(photoIndex.index + 1) % AllImg.length],
      prevSrc: AllImg[(photoIndex.index + AllImg.length - 1) % AllImg.length],
      imageTitle: photoIndex.index + 1 + "/" + AllImg.length,
      onCloseRequest: () => setPhotoIndex(_objectSpread({}, photoIndex, {
        isOpen: false
      })),
      onMovePrevRequest: () => setPhotoIndex(_objectSpread({}, photoIndex, {
        index: (photoIndex.index + AllImg.length - 1) % AllImg.length
      })),
      onMoveNextRequest: () => setPhotoIndex(_objectSpread({}, photoIndex, {
        index: (photoIndex.index + 1) % AllImg.length
      })),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 49
      }
    })))), title && __jsx("div", {
      className: "portfolio-text",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 37
      }
    }, __jsx("h3", {
      className: "head-text",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 41
      }
    }, title), __jsx("h6", {
      className: "head-sub-text",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 41
      }
    }, subTitle)));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Basic);

/***/ }),

/***/ "./containers/portfolio/database.js":
/*!******************************************!*\
  !*** ./containers/portfolio/database.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  FeshionImgData: [{
    img: '/assets/images/portfolio/1.jpg'
  }, {
    img: '/assets/images/portfolio/2.jpg'
  }, {
    img: '/assets/images/portfolio/3.jpg'
  }, {
    img: '/assets/images/portfolio/4.jpg'
  }],
  BagsImgData: [{
    img: '/assets/images/portfolio/5.jpg'
  }, {
    img: '/assets/images/portfolio/6.jpg'
  }, {
    img: '/assets/images/portfolio/7.jpg'
  }, {
    img: '/assets/images/portfolio/8.png'
  }],
  ShoesImgData: [{
    img: '/assets/images/portfolio/9.jpg'
  }, {
    img: '/assets/images/portfolio/10.jpg'
  }, {
    img: '/assets/images/portfolio/12.png'
  }, {
    img: '/assets/images/portfolio/8.png'
  }],
  WatchImgData: [{
    img: '/assets/images/portfolio/13.jpg'
  }, {
    img: '/assets/images/portfolio/11.jpg'
  }, {
    img: '/assets/images/portfolio/10.jpg'
  }, {
    img: '/assets/images/portfolio/12.png'
  }],
  AllImgData: [{
    img: '/assets/images/portfolio/Barriguita_1.png'
  }, {
    img: '/assets/images/portfolio/Barriguita_2.png'
  }, {
    img: '/assets/images/portfolio/Barriguita_10.png'
  }, {
    img: '/assets/images/portfolio/Barriguita_4.png'
  }, {
    img: '/assets/images/portfolio/Barriguita_5.png'
  }, {
    img: '/assets/images/portfolio/Barriguita_6.png'
  }, {
    img: '/assets/images/portfolio/Barriguita_7.png'
  }, {
    img: '/assets/images/portfolio/Barriguita_8.png'
  }, {
    img: '/assets/images/portfolio/Barriguita_9.png'
  }],
  PortfolioDetail1Data: [{
    img: '/assets/images/portfolio/2.jpg'
  }, {
    img: '/assets/images/portfolio/3.jpg'
  }, {
    img: '/assets/images/portfolio/5.jpg'
  }, {
    img: '/assets/images/portfolio/4.jpg'
  }, {
    img: '/assets/images/portfolio/5.jpg'
  }, {
    img: '/assets/images/portfolio/2.jpg'
  }, {
    img: '/assets/images/portfolio/3.jpg'
  }],
  CreativeWrapperData: [{
    img: '../assets/images/portfolio/1.jpg',
    title: 'Lorem Ipsum',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  }, {
    img: '../assets/images/portfolio/2.jpg',
    title: 'Lorem Ipsum',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  }, {
    img: '../assets/images/portfolio/3.jpg',
    title: 'Lorem Ipsum',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  }, {
    img: '../assets/images/portfolio/4.jpg',
    title: 'Lorem Ipsum',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  }, {
    img: '../assets/images/portfolio/5.jpg',
    title: 'Lorem Ipsum',
    desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  }]
};

/***/ }),

/***/ "./database/elements/price/database.js":
/*!*********************************************!*\
  !*** ./database/elements/price/database.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  PricingData: [{
    title: 'Basic',
    features: ['Up To 1 Exports', 'Limited Coustomization', '30 day Validity'],
    price: 10,
    img: '/assets/images/app_landing1/pricing/11.png'
  }, {
    title: 'Advance',
    features: ['Up To 1 Exports', 'Limited Coustomization', '30 day Validity'],
    price: 50,
    img: '/assets/images/app_landing1/pricing/22.png'
  }, {
    title: 'Standard',
    features: ['Up To 1 Exports', 'Limited Coustomization', '30 day Validity'],
    price: 15,
    img: '/assets/images/app_landing1/pricing/33.png'
  }, {
    title: 'Basic',
    features: ['Up To 1 Exports', 'Limited Coustomization', '30 day Validity'],
    price: 10,
    img: '/assets/images/app_landing1/pricing/11.png'
  }],
  PricingResume1: [{
    title: "Free",
    feature1: "Easy Installations",
    feature2: 'Unlimited support',
    feature3: 'Free Forever',
    price: '0'
  }, {
    title: "Silver",
    feature1: "Easy Installations",
    feature2: 'Unlimited support',
    feature3: 'Free Forever',
    price: '49'
  }, {
    title: "Golden",
    feature1: "Easy Installations",
    feature2: 'Unlimited support',
    feature3: 'Free Forever',
    price: '99'
  }, {
    title: "Free",
    feature1: "Easy Installations",
    feature2: 'Unlimited support',
    feature3: 'Free Forever',
    price: '0'
  }],
  PricingResume2: [{
    title: "Free",
    feature1: "Easy Installations",
    feature2: 'Unlimited support',
    feature3: 'Free Forever',
    price: '0'
  }, {
    title: "Silver",
    feature1: "Easy Installations",
    feature2: 'Unlimited support',
    feature3: 'Free Forever',
    price: '50'
  }, {
    title: "Golden",
    feature1: "Easy Installations",
    feature2: 'Unlimited support',
    feature3: 'Free Forever',
    price: '100'
  }, {
    title: "Free",
    feature1: "Easy Installations",
    feature2: 'Unlimited support',
    feature3: 'Free Forever',
    price: '0'
  }],
  Pricing: [{
    img: '/assets/images/yoga-img/abs-yoga.png',
    heading: 'free',
    feature1: '100 MB Disk Space',
    feature2: '2 Subdomains',
    feature3: '5 Email Accounts',
    feature4: 'Webmail Support',
    price: '0'
  }, {
    img: '/assets/images/yoga-img/abs-yoga.png',
    heading: 'medium',
    feature1: '100 MB Disk Space',
    feature2: '2 Subdomains',
    feature3: '5 Email Accounts',
    feature4: 'Webmail Support',
    price: '49'
  }, {
    img: '/assets/images/yoga-img/abs-yoga.png',
    heading: 'business',
    feature1: '100 MB Disk Space',
    feature2: '2 Subdomains',
    feature3: '5 Email Accounts',
    feature4: 'Webmail Support',
    price: '99'
  }, {
    img: '/assets/images/yoga-img/abs-yoga.png',
    heading: 'business',
    feature1: '100 MB Disk Space',
    feature2: '2 Subdomains',
    feature3: '5 Email Accounts',
    feature4: 'Webmail Support',
    price: '0'
  }]
};

/***/ }),

/***/ "./database/layouts/wedding/database.js":
/*!**********************************************!*\
  !*** ./database/layouts/wedding/database.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  BrandData: [{
    img: '/assets/images/wedding-img/brand/1.png'
  }, {
    img: '/assets/images/wedding-img/brand/2.png'
  }, {
    img: '/assets/images/wedding-img/brand/3.png'
  }, {
    img: '/assets/images/wedding-img/brand/4.png'
  }, {
    img: '/assets/images/wedding-img/brand/5.png'
  }, {
    img: '/assets/images/wedding-img/brand/1.png'
  }],
  CounterData: [{
    img: '/assets/images/wedding-img/icon/1.png',
    title: 'Total Event',
    count: 14
  }, {
    img: '/assets/images/wedding-img/icon/2.png',
    title: 'Total Guest',
    count: 999
  }, {
    img: '/assets/images/wedding-img/icon/3.png',
    title: 'Invitation Card',
    count: 999
  }, {
    img: '/assets/images/wedding-img/icon/4.png',
    title: 'Total car',
    count: 1975
  }],
  DestinationData: [{
    img: '/assets/images/wedding-img/when/1.png',
    title: 'ceremony',
    timing: '7 : 00 pm',
    feature1: 'Hailey Jacson',
    feature2: 'BLVD Menlo park',
    feature3: 'CA'
  }, {
    img: '/assets/images/wedding-img/when/2.png',
    title: 'ceremony',
    timing: '6 : 00 pm',
    feature1: 'Hailey Jacson',
    feature2: 'BLVD Menlo park',
    feature3: 'CA'
  }, {
    img: '/assets/images/wedding-img/when/1.png',
    title: 'ceremony',
    timing: '7 : 00 pm',
    feature1: 'Hailey Jacson',
    feature2: 'BLVD Menlo park',
    feature3: 'CA'
  }],
  BlogData: [{
    img: '/assets/images/wedding-img/blog/1.jpg',
    heading: 'The Proposal',
    date: '08/14/2015',
    place: 'Newyork',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,…'
  }, {
    img: '/assets/images/wedding-img/blog/2.jpg',
    heading: 'The Proposal',
    date: '08/14/2015',
    place: 'Newyork',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,…'
  }, {
    img: '/assets/images/wedding-img/blog/3.jpg',
    heading: 'The Proposal',
    date: '08/14/2015',
    place: 'Newyork',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,…'
  }],
  DesignImgData: [{
    img: '/assets/images/wedding-img/photo-album/1.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/2.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/3.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/4.jpg'
  }],
  GraphicsImgData: [{
    img: '/assets/images/wedding-img/photo-album/4.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/3.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/2.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/1.jpg'
  }],
  BrandingImgData: [{
    img: '/assets/images/wedding-img/photo-album/1.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/4.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/2.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/3.jpg'
  }],
  PhotoGraphyImgData: [{
    img: '/assets/images/wedding-img/photo-album/4.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/2.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/1.jpg'
  }],
  AllImgData: [{
    img: '/assets/images/wedding-img/photo-album/1.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/2.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/3.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/2.jpg'
  }, {
    img: '/assets/images/wedding-img/photo-album/1.jpg'
  }]
};

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          _Object$defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = m.indexOf('/') !== -1 ? m.split('/').map(entry => decodeURIComponent(entry)) : decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
  ] = groupIndex++, $1.indexOf('\\.\\.\\.') === 0 ? '/(.+?)' : '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-image-lightbox-next/dist/main.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-image-lightbox-next/dist/main.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(root, factory) {
     true ? module.exports = factory(__webpack_require__(/*! react */ "react"), __webpack_require__(/*! prop-types */ "prop-types"), __webpack_require__(/*! react-modal */ "react-modal"), __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "babel-runtime/core-js/json/stringify"), __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "babel-runtime/helpers/slicedToArray")) : undefined;
}(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__) {
    /******/
    return function(modules) {
        /******/
        /******/
        // The require function
        /******/
        function __webpack_require__(moduleId) {
            /******/
            /******/
            // Check if module is in cache
            /******/
            if (installedModules[moduleId]) /******/
            return installedModules[moduleId].exports;
            /******/
            // Create a new module (and put it into the cache)
            /******/
            var module = installedModules[moduleId] = {
                /******/
                i: moduleId,
                /******/
                l: !1,
                /******/
                exports: {}
            };
            /******/
            /******/
            // Return the exports of the module
            /******/
            /******/
            /******/
            // Execute the module function
            /******/
            /******/
            /******/
            // Flag the module as loaded
            /******/
            return modules[moduleId].call(module.exports, module, module.exports, __webpack_require__), 
            module.l = !0, module.exports;
        }
        // webpackBootstrap
        /******/
        // The module cache
        /******/
        var installedModules = {};
        /******/
        /******/
        // Load entry module and return exports
        /******/
        /******/
        /******/
        /******/
        // expose the modules object (__webpack_modules__)
        /******/
        /******/
        /******/
        // expose the module cache
        /******/
        /******/
        /******/
        // define getter function for harmony exports
        /******/
        /******/
        /******/
        // getDefaultExport function for compatibility with non-harmony modules
        /******/
        /******/
        /******/
        // Object.prototype.hasOwnProperty.call
        /******/
        /******/
        /******/
        // __webpack_public_path__
        /******/
        return __webpack_require__.m = modules, __webpack_require__.c = installedModules, 
        __webpack_require__.d = function(exports, name, getter) {
            /******/
            __webpack_require__.o(exports, name) || /******/
            Object.defineProperty(exports, name, {
                /******/
                configurable: !1,
                /******/
                enumerable: !0,
                /******/
                get: getter
            });
        }, __webpack_require__.n = function(module) {
            /******/
            var getter = module && module.__esModule ? /******/
            function() {
                return module.default;
            } : /******/
            function() {
                return module;
            };
            /******/
            /******/
            return __webpack_require__.d(getter, "a", getter), getter;
        }, __webpack_require__.o = function(object, property) {
            return Object.prototype.hasOwnProperty.call(object, property);
        }, __webpack_require__.p = "", __webpack_require__(__webpack_require__.s = 0);
    }([ /* 0 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        module.exports = __webpack_require__(1).default;
    }, /* 1 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
        }
        function _possibleConstructorReturn(self, call) {
            if (!self) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !call || "object" != typeof call && "function" != typeof call ? self : call;
        }
        function _inherits(subClass, superClass) {
            if ("function" != typeof superClass && null !== superClass) throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), superClass && (Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass);
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        var _slicedToArray = function() {
            function sliceIterator(arr, i) {
                var _arr = [], _n = !0, _d = !1, _e = void 0;
                try {
                    for (var _s, _i = arr[Symbol.iterator](); !(_n = (_s = _i.next()).done) && (_arr.push(_s.value), 
                    !i || _arr.length !== i); _n = !0) ;
                } catch (err) {
                    _d = !0, _e = err;
                } finally {
                    try {
                        !_n && _i.return && _i.return();
                    } finally {
                        if (_d) throw _e;
                    }
                }
                return _arr;
            }
            return function(arr, i) {
                if (Array.isArray(arr)) return arr;
                if (Symbol.iterator in Object(arr)) return sliceIterator(arr, i);
                throw new TypeError("Invalid attempt to destructure non-iterable instance");
            };
        }(), _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        }, _createClass = function() {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || !1, descriptor.configurable = !0, 
                    "value" in descriptor && (descriptor.writable = !0), Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function(Constructor, protoProps, staticProps) {
                return protoProps && defineProperties(Constructor.prototype, protoProps), staticProps && defineProperties(Constructor, staticProps), 
                Constructor;
            };
        }(), _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
            }
            return target;
        }, _react = __webpack_require__(2), _react2 = _interopRequireDefault(_react), _propTypes = __webpack_require__(3), _propTypes2 = _interopRequireDefault(_propTypes), _reactModal = __webpack_require__(4), _reactModal2 = _interopRequireDefault(_reactModal), _util = __webpack_require__(5), _constant = __webpack_require__(6), _style = __webpack_require__(7), _style2 = _interopRequireDefault(_style), styles = _style2.default, ieVersion = (0, 
        _util.getIEVersion)();
        ieVersion < 10 && (styles = _extends({}, styles, {
            toolbarSide: styles.toolbarSide + " " + styles.toolbarSideNoFlex,
            toolbarLeftSide: styles.toolbarLeftSide + " " + styles.toolbarLeftSideNoFlex,
            toolbarRightSide: styles.toolbarRightSide + " " + styles.toolbarRightSideNoFlex
        }));
        var ReactImageLightbox = function(_Component) {
            function ReactImageLightbox(props) {
                _classCallCheck(this, ReactImageLightbox);
                var _this = _possibleConstructorReturn(this, (ReactImageLightbox.__proto__ || Object.getPrototypeOf(ReactImageLightbox)).call(this, props));
                return _this.state = {
                    //-----------------------------
                    // Animation
                    //-----------------------------
                    // Lightbox is closing
                    // When Lightbox is mounted, if animation is enabled it will open with the reverse of the closing animation
                    isClosing: !props.animationDisabled,
                    // Component parts should animate (e.g., when images are moving, or image is being zoomed)
                    shouldAnimate: !1,
                    //-----------------------------
                    // Zoom settings
                    //-----------------------------
                    // Zoom level of image
                    zoomLevel: _constant.MIN_ZOOM_LEVEL,
                    //-----------------------------
                    // Image position settings
                    //-----------------------------
                    // Horizontal offset from center
                    offsetX: 0,
                    // Vertical offset from center
                    offsetY: 0
                }, _this.closeIfClickInner = _this.closeIfClickInner.bind(_this), _this.handleImageDoubleClick = _this.handleImageDoubleClick.bind(_this), 
                _this.handleImageMouseWheel = _this.handleImageMouseWheel.bind(_this), _this.handleKeyInput = _this.handleKeyInput.bind(_this), 
                _this.handleMouseUp = _this.handleMouseUp.bind(_this), _this.handleMouseDown = _this.handleMouseDown.bind(_this), 
                _this.handleMouseMove = _this.handleMouseMove.bind(_this), _this.handleOuterMousewheel = _this.handleOuterMousewheel.bind(_this), 
                _this.handleTouchStart = _this.handleTouchStart.bind(_this), _this.handleTouchMove = _this.handleTouchMove.bind(_this), 
                _this.handleTouchEnd = _this.handleTouchEnd.bind(_this), _this.handlePointerEvent = _this.handlePointerEvent.bind(_this), 
                _this.handleCaptionMousewheel = _this.handleCaptionMousewheel.bind(_this), _this.handleWindowResize = _this.handleWindowResize.bind(_this), 
                _this.handleZoomInButtonClick = _this.handleZoomInButtonClick.bind(_this), _this.handleZoomOutButtonClick = _this.handleZoomOutButtonClick.bind(_this), 
                _this.requestClose = _this.requestClose.bind(_this), _this.requestMoveNext = _this.requestMoveNext.bind(_this), 
                _this.requestMovePrev = _this.requestMovePrev.bind(_this), _this;
            }
            return _inherits(ReactImageLightbox, _Component), _createClass(ReactImageLightbox, null, [ {
                key: "isTargetMatchImage",
                value: function(target) {
                    return target && /ril-image-current/.test(target.className);
                }
            }, {
                key: "parseMouseEvent",
                value: function(mouseEvent) {
                    return {
                        id: "mouse",
                        source: _constant.SOURCE_MOUSE,
                        x: parseInt(mouseEvent.clientX, 10),
                        y: parseInt(mouseEvent.clientY, 10)
                    };
                }
            }, {
                key: "parseTouchPointer",
                value: function(touchPointer) {
                    return {
                        id: touchPointer.identifier,
                        source: _constant.SOURCE_TOUCH,
                        x: parseInt(touchPointer.clientX, 10),
                        y: parseInt(touchPointer.clientY, 10)
                    };
                }
            }, {
                key: "parsePointerEvent",
                value: function(pointerEvent) {
                    return {
                        id: pointerEvent.pointerId,
                        source: _constant.SOURCE_POINTER,
                        x: parseInt(pointerEvent.clientX, 10),
                        y: parseInt(pointerEvent.clientY, 10)
                    };
                }
            }, {
                key: "getTransform",
                value: function(_ref) {
                    var _ref$x = _ref.x, x = void 0 === _ref$x ? 0 : _ref$x, _ref$y = _ref.y, y = void 0 === _ref$y ? 0 : _ref$y, _ref$zoom = _ref.zoom, zoom = void 0 === _ref$zoom ? 1 : _ref$zoom, width = _ref.width, targetWidth = _ref.targetWidth, nextX = x, isOldIE = ieVersion < 10, windowWidth = (0, 
                    _util.getWindowWidth)();
                    width > windowWidth && (nextX += (windowWidth - width) / 2);
                    var scaleFactor = zoom * (targetWidth / width);
                    return isOldIE ? {
                        msTransform: "translate(" + nextX + "px," + y + "px) scale(" + scaleFactor + ")"
                    } : {
                        transform: "translate3d(" + nextX + "px," + y + "px,0) scale3d(" + scaleFactor + "," + scaleFactor + ",1)"
                    };
                }
            }, {
                key: "loadStyles",
                value: function() {
                    // Insert component styles
                    "object" === ("undefined" == typeof window ? "undefined" : _typeof(window)) && // eslint-disable-next-line no-underscore-dangle
                    styles._insertCss();
                }
            } ]), _createClass(ReactImageLightbox, [ {
                key: "componentWillMount",
                value: function() {
                    // Timeouts - always clear it before umount
                    this.timeouts = [], // Current action
                    this.currentAction = _constant.ACTION_NONE, // Events source
                    this.eventsSource = _constant.SOURCE_ANY, // Empty pointers list
                    this.pointerList = [], // Prevent inner close
                    this.preventInnerClose = !1, this.preventInnerCloseTimeout = null, // Whether event listeners for keyboard and mouse input have been attached or not
                    this.listenersAttached = !1, // Used to disable animation when changing props.mainSrc|nextSrc|prevSrc
                    this.keyPressed = !1, // Used to store load state / dimensions of images
                    this.imageCache = {}, // Time the last keydown event was called (used in keyboard action rate limiting)
                    this.lastKeyDownTime = 0, // Used for debouncing window resize event
                    this.resizeTimeout = null, // Used to determine when actions are triggered by the scroll wheel
                    this.wheelActionTimeout = null, this.resetScrollTimeout = null, this.scrollX = 0, 
                    this.scrollY = 0, // Used in panning zoomed images
                    this.moveStartX = 0, this.moveStartY = 0, this.moveStartOffsetX = 0, this.moveStartOffsetY = 0, 
                    // Used to swipe
                    this.swipeStartX = 0, this.swipeStartY = 0, this.swipeEndX = 0, this.swipeEndY = 0, 
                    // Used to pinch
                    this.pinchTouchList = null, this.pinchDistance = 0, // Used to differentiate between images with identical src
                    this.keyCounter = 0, // Used to detect a move when all src's remain unchanged (four or more of the same image in a row)
                    this.moveRequested = !1, this.props.animationDisabled || // Make opening animation play
                    this.setState({
                        isClosing: !1
                    });
                }
            }, {
                key: "componentDidMount",
                value: function() {
                    this.mounted = !0, ReactImageLightbox.loadStyles(), this.attachListeners(), this.loadAllImages();
                }
            }, {
                key: "componentWillReceiveProps",
                value: function(nextProps) {
                    var _this2 = this, sourcesChanged = !1, prevSrcDict = {}, nextSrcDict = {};
                    this.getSrcTypes().forEach(function(srcType) {
                        _this2.props[srcType.name] !== nextProps[srcType.name] && (sourcesChanged = !0, 
                        prevSrcDict[_this2.props[srcType.name]] = !0, nextSrcDict[nextProps[srcType.name]] = !0);
                    }), (sourcesChanged || this.moveRequested) && (// Reset the loaded state for images not rendered next
                    Object.keys(prevSrcDict).forEach(function(prevSrc) {
                        !(prevSrc in nextSrcDict) && prevSrc in _this2.imageCache && (_this2.imageCache[prevSrc].loaded = !1);
                    }), this.moveRequested = !1, // Load any new images
                    this.loadAllImages(nextProps));
                }
            }, {
                key: "shouldComponentUpdate",
                value: function() {
                    // Wait for move...
                    return !this.moveRequested;
                }
            }, {
                key: "componentWillUnmount",
                value: function() {
                    this.mounted = !1, this.detachListeners(), this.timeouts.forEach(function(tid) {
                        return clearTimeout(tid);
                    });
                }
            }, {
                key: "setTimeout",
                value: function(_setTimeout) {
                    function setTimeout(_x, _x2) {
                        return _setTimeout.apply(this, arguments);
                    }
                    return setTimeout.toString = function() {
                        return _setTimeout.toString();
                    }, setTimeout;
                }(function(func, time) {
                    var _this3 = this, id = setTimeout(function() {
                        _this3.timeouts = _this3.timeouts.filter(function(tid) {
                            return tid !== id;
                        }), func();
                    }, time);
                    return this.timeouts.push(id), id;
                })
            }, {
                key: "setPreventInnerClose",
                value: function() {
                    var _this4 = this;
                    this.preventInnerCloseTimeout && this.clearTimeout(this.preventInnerCloseTimeout), 
                    this.preventInnerClose = !0, this.preventInnerCloseTimeout = this.setTimeout(function() {
                        _this4.preventInnerClose = !1, _this4.preventInnerCloseTimeout = null;
                    }, 100);
                }
            }, {
                key: "getBestImageForType",
                value: function(srcType) {
                    var imageSrc = this.props[srcType], fitSizes = {};
                    if (this.isImageLoaded(imageSrc)) // Use full-size image if available
                    fitSizes = this.getFitSizes(this.imageCache[imageSrc].width, this.imageCache[imageSrc].height); else {
                        if (!this.isImageLoaded(this.props[srcType + "Thumbnail"])) return null;
                        // Fall back to using thumbnail if the image has not been loaded
                        imageSrc = this.props[srcType + "Thumbnail"], fitSizes = this.getFitSizes(this.imageCache[imageSrc].width, this.imageCache[imageSrc].height, !0);
                    }
                    return {
                        src: imageSrc,
                        height: this.imageCache[imageSrc].height,
                        width: this.imageCache[imageSrc].width,
                        targetHeight: fitSizes.height,
                        targetWidth: fitSizes.width
                    };
                }
            }, {
                key: "getFitSizes",
                value: function(width, height, stretch) {
                    var boxSize = this.getLightboxRect(), maxHeight = boxSize.height - 2 * this.props.imagePadding, maxWidth = boxSize.width - 2 * this.props.imagePadding;
                    return stretch || (maxHeight = Math.min(maxHeight, height), maxWidth = Math.min(maxWidth, width)), 
                    maxWidth / maxHeight > width / height ? {
                        width: width * maxHeight / height,
                        height: maxHeight
                    } : {
                        width: maxWidth,
                        height: height * maxWidth / width
                    };
                }
            }, {
                key: "getMaxOffsets",
                value: function() {
                    var zoomLevel = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.zoomLevel, currentImageInfo = this.getBestImageForType("mainSrc");
                    if (null === currentImageInfo) return {
                        maxX: 0,
                        minX: 0,
                        maxY: 0,
                        minY: 0
                    };
                    var boxSize = this.getLightboxRect(), zoomMultiplier = this.getZoomMultiplier(zoomLevel), maxX = 0;
                    // if there is still blank space in the X dimension, don't limit except to the opposite edge
                    maxX = zoomMultiplier * currentImageInfo.width - boxSize.width < 0 ? (boxSize.width - zoomMultiplier * currentImageInfo.width) / 2 : (zoomMultiplier * currentImageInfo.width - boxSize.width) / 2;
                    var maxY = 0;
                    // if there is still blank space in the Y dimension, don't limit except to the opposite edge
                    return maxY = zoomMultiplier * currentImageInfo.height - boxSize.height < 0 ? (boxSize.height - zoomMultiplier * currentImageInfo.height) / 2 : (zoomMultiplier * currentImageInfo.height - boxSize.height) / 2, 
                    {
                        maxX: maxX,
                        maxY: maxY,
                        minX: -1 * maxX,
                        minY: -1 * maxY
                    };
                }
            }, {
                key: "getSrcTypes",
                value: function() {
                    return [ {
                        name: "mainSrc",
                        keyEnding: "i" + this.keyCounter
                    }, {
                        name: "mainSrcThumbnail",
                        keyEnding: "t" + this.keyCounter
                    }, {
                        name: "nextSrc",
                        keyEnding: "i" + (this.keyCounter + 1)
                    }, {
                        name: "nextSrcThumbnail",
                        keyEnding: "t" + (this.keyCounter + 1)
                    }, {
                        name: "prevSrc",
                        keyEnding: "i" + (this.keyCounter - 1)
                    }, {
                        name: "prevSrcThumbnail",
                        keyEnding: "t" + (this.keyCounter - 1)
                    } ];
                }
            }, {
                key: "getZoomMultiplier",
                value: function() {
                    var zoomLevel = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.state.zoomLevel;
                    return Math.pow(_constant.ZOOM_RATIO, zoomLevel);
                }
            }, {
                key: "getLightboxRect",
                value: function() {
                    return this.outerEl ? this.outerEl.getBoundingClientRect() : {
                        width: (0, _util.getWindowWidth)(),
                        height: (0, _util.getWindowHeight)(),
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0
                    };
                }
            }, {
                key: "clearTimeout",
                value: function(_clearTimeout) {
                    function clearTimeout(_x3) {
                        return _clearTimeout.apply(this, arguments);
                    }
                    return clearTimeout.toString = function() {
                        return _clearTimeout.toString();
                    }, clearTimeout;
                }(function(id) {
                    this.timeouts = this.timeouts.filter(function(tid) {
                        return tid !== id;
                    }), clearTimeout(id);
                })
            }, {
                key: "attachListeners",
                value: function() {
                    this.listenersAttached || "undefined" == typeof window || (window.addEventListener("resize", this.handleWindowResize), 
                    window.addEventListener("mouseup", this.handleMouseUp), window.addEventListener("touchend", this.handleTouchEnd), 
                    window.addEventListener("touchcancel", this.handleTouchEnd), window.addEventListener("pointerdown", this.handlePointerEvent), 
                    window.addEventListener("pointermove", this.handlePointerEvent), window.addEventListener("pointerup", this.handlePointerEvent), 
                    window.addEventListener("pointercancel", this.handlePointerEvent), // Have to add an extra mouseup handler to catch mouseup events outside of the window
                    //  if the page containing the lightbox is displayed in an iframe
                    (0, _util.isInSameOriginIframe)() && (window.top.addEventListener("mouseup", this.handleMouseUp), 
                    window.top.addEventListener("touchend", this.handleTouchEnd), window.top.addEventListener("touchcancel", this.handleTouchEnd), 
                    window.top.addEventListener("pointerdown", this.handlePointerEvent), window.top.addEventListener("pointermove", this.handlePointerEvent), 
                    window.top.addEventListener("pointerup", this.handlePointerEvent), window.top.addEventListener("pointercancel", this.handlePointerEvent)), 
                    this.listenersAttached = !0);
                }
            }, {
                key: "changeZoom",
                value: function(zoomLevel, clientX, clientY) {
                    // Ignore if zoom disabled
                    if (this.props.enableZoom) {
                        // Constrain zoom level to the set bounds
                        var nextZoomLevel = Math.max(_constant.MIN_ZOOM_LEVEL, Math.min(_constant.MAX_ZOOM_LEVEL, zoomLevel));
                        // Ignore requests that don't change the zoom level
                        if (nextZoomLevel !== this.state.zoomLevel) {
                            if (nextZoomLevel === _constant.MIN_ZOOM_LEVEL) // Snap back to center if zoomed all the way out
                            return void this.setState({
                                zoomLevel: nextZoomLevel,
                                offsetX: 0,
                                offsetY: 0
                            });
                            var imageBaseSize = this.getBestImageForType("mainSrc");
                            if (null !== imageBaseSize) {
                                var currentZoomMultiplier = this.getZoomMultiplier(), nextZoomMultiplier = this.getZoomMultiplier(nextZoomLevel), boxRect = this.getLightboxRect(), pointerX = void 0 !== clientX ? clientX - boxRect.left : boxRect.width / 2, pointerY = void 0 !== clientY ? clientY - boxRect.top : boxRect.height / 2, currentImageOffsetX = (boxRect.width - imageBaseSize.width * currentZoomMultiplier) / 2, currentImageOffsetY = (boxRect.height - imageBaseSize.height * currentZoomMultiplier) / 2, currentImageRealOffsetX = currentImageOffsetX - this.state.offsetX, currentImageRealOffsetY = currentImageOffsetY - this.state.offsetY, currentPointerXRelativeToImage = (pointerX - currentImageRealOffsetX) / currentZoomMultiplier, currentPointerYRelativeToImage = (pointerY - currentImageRealOffsetY) / currentZoomMultiplier, nextImageRealOffsetX = pointerX - currentPointerXRelativeToImage * nextZoomMultiplier, nextImageRealOffsetY = pointerY - currentPointerYRelativeToImage * nextZoomMultiplier, nextImageOffsetX = (boxRect.width - imageBaseSize.width * nextZoomMultiplier) / 2, nextImageOffsetY = (boxRect.height - imageBaseSize.height * nextZoomMultiplier) / 2, nextOffsetX = nextImageOffsetX - nextImageRealOffsetX, nextOffsetY = nextImageOffsetY - nextImageRealOffsetY;
                                // When zooming out, limit the offset so things don't get left askew
                                if (this.currentAction !== _constant.ACTION_PINCH) {
                                    var maxOffsets = this.getMaxOffsets();
                                    this.state.zoomLevel > nextZoomLevel && (nextOffsetX = Math.max(maxOffsets.minX, Math.min(maxOffsets.maxX, nextOffsetX)), 
                                    nextOffsetY = Math.max(maxOffsets.minY, Math.min(maxOffsets.maxY, nextOffsetY)));
                                }
                                this.setState({
                                    zoomLevel: nextZoomLevel,
                                    offsetX: nextOffsetX,
                                    offsetY: nextOffsetY
                                });
                            }
                        }
                    }
                }
            }, {
                key: "closeIfClickInner",
                value: function(event) {
                    !this.preventInnerClose && event.target.className.search(/\bril-inner\b/) > -1 && this.requestClose(event);
                }
            }, {
                key: "detachListeners",
                value: function() {
                    this.listenersAttached && (window.removeEventListener("resize", this.handleWindowResize), 
                    window.removeEventListener("mouseup", this.handleMouseUp), window.removeEventListener("touchend", this.handleTouchEnd), 
                    window.removeEventListener("touchcancel", this.handleTouchEnd), window.removeEventListener("pointerdown", this.handlePointerEvent), 
                    window.removeEventListener("pointermove", this.handlePointerEvent), window.removeEventListener("pointerup", this.handlePointerEvent), 
                    window.removeEventListener("pointercancel", this.handlePointerEvent), (0, _util.isInSameOriginIframe)() && (window.top.removeEventListener("mouseup", this.handleMouseUp), 
                    window.top.removeEventListener("touchend", this.handleTouchEnd), window.top.removeEventListener("touchcancel", this.handleTouchEnd), 
                    window.top.removeEventListener("pointerdown", this.handlePointerEvent), window.top.removeEventListener("pointermove", this.handlePointerEvent), 
                    window.top.removeEventListener("pointerup", this.handlePointerEvent), window.top.removeEventListener("pointercancel", this.handlePointerEvent)), 
                    this.listenersAttached = !1);
                }
            }, {
                key: "handleKeyInput",
                value: function(event) {
                    // Ignore key input during animations
                    if (event.stopPropagation(), !this.isAnimating()) {
                        // Allow slightly faster navigation through the images when user presses keys repeatedly
                        if ("keyup" === event.type) return void (this.lastKeyDownTime -= this.props.keyRepeatKeyupBonus);
                        var keyCode = event.which || event.keyCode, currentTime = new Date();
                        if (!(currentTime.getTime() - this.lastKeyDownTime < this.props.keyRepeatLimit && keyCode !== _constant.KEYS.ESC)) switch (this.lastKeyDownTime = currentTime.getTime(), 
                        keyCode) {
                          // ESC key closes the lightbox
                            case _constant.KEYS.ESC:
                            event.preventDefault(), this.requestClose(event);
                            break;

                          // Left arrow key moves to previous image
                            case _constant.KEYS.LEFT_ARROW:
                            if (!this.props.prevSrc) return;
                            event.preventDefault(), this.keyPressed = !0, this.requestMovePrev(event);
                            break;

                          // Right arrow key moves to next image
                            case _constant.KEYS.RIGHT_ARROW:
                            if (!this.props.nextSrc) return;
                            event.preventDefault(), this.keyPressed = !0, this.requestMoveNext(event);
                        }
                    }
                }
            }, {
                key: "handleOuterMousewheel",
                value: function(event) {
                    var _this5 = this;
                    // Prevent scrolling of the background
                    event.preventDefault(), event.stopPropagation();
                    var xThreshold = _constant.WHEEL_MOVE_X_THRESHOLD, actionDelay = 0;
                    // Prevent rapid-fire zoom behavior
                    if (this.clearTimeout(this.resetScrollTimeout), this.resetScrollTimeout = this.setTimeout(function() {
                        _this5.scrollX = 0, _this5.scrollY = 0;
                    }, 300), null === this.wheelActionTimeout && !this.isAnimating()) {
                        if (Math.abs(event.deltaY) < Math.abs(event.deltaX)) {
                            // handle horizontal scrolls with image moves
                            this.scrollY = 0, this.scrollX += event.deltaX;
                            var bigLeapX = xThreshold / 2;
                            // If the scroll amount has accumulated sufficiently, or a large leap was taken
                            this.scrollX >= xThreshold || event.deltaX >= bigLeapX ? (// Scroll right moves to next
                            this.requestMoveNext(event), actionDelay = 500, this.scrollX = 0) : (this.scrollX <= -1 * xThreshold || event.deltaX <= -1 * bigLeapX) && (// Scroll left moves to previous
                            this.requestMovePrev(event), actionDelay = 500, this.scrollX = 0);
                        }
                        // Allow successive actions after the set delay
                        0 !== actionDelay && (this.wheelActionTimeout = this.setTimeout(function() {
                            _this5.wheelActionTimeout = null;
                        }, actionDelay));
                    }
                }
            }, {
                key: "handleImageMouseWheel",
                value: function(event) {
                    event.preventDefault();
                    var yThreshold = _constant.WHEEL_MOVE_Y_THRESHOLD;
                    if (Math.abs(event.deltaY) >= Math.abs(event.deltaX)) {
                        // If the vertical scroll amount was large enough, perform a zoom
                        if (event.stopPropagation(), Math.abs(event.deltaY) < yThreshold) return;
                        this.scrollX = 0, this.scrollY += event.deltaY, this.changeZoom(this.state.zoomLevel - event.deltaY, event.clientX, event.clientY);
                    }
                }
            }, {
                key: "handleImageDoubleClick",
                value: function(event) {
                    this.state.zoomLevel > _constant.MIN_ZOOM_LEVEL ? // A double click when zoomed in zooms all the way out
                    this.changeZoom(_constant.MIN_ZOOM_LEVEL, event.clientX, event.clientY) : // A double click when zoomed all the way out zooms in
                    this.changeZoom(this.state.zoomLevel + _constant.ZOOM_BUTTON_INCREMENT_SIZE, event.clientX, event.clientY);
                }
            }, {
                key: "shouldHandleEvent",
                value: function(source) {
                    if (this.eventsSource === source) return !0;
                    if (this.eventsSource === _constant.SOURCE_ANY) return this.eventsSource = source, 
                    !0;
                    switch (source) {
                      case _constant.SOURCE_MOUSE:
                        return !1;

                      case _constant.SOURCE_TOUCH:
                        return this.eventsSource = _constant.SOURCE_TOUCH, this.filterPointersBySource(), 
                        !0;

                      case _constant.SOURCE_POINTER:
                        return this.eventsSource === _constant.SOURCE_MOUSE && (this.eventsSource = _constant.SOURCE_POINTER, 
                        this.filterPointersBySource(), !0);

                      default:
                        return !1;
                    }
                }
            }, {
                key: "addPointer",
                value: function(pointer) {
                    this.pointerList.push(pointer);
                }
            }, {
                key: "removePointer",
                value: function(pointer) {
                    this.pointerList = this.pointerList.filter(function(_ref2) {
                        return _ref2.id !== pointer.id;
                    });
                }
            }, {
                key: "filterPointersBySource",
                value: function() {
                    var _this6 = this;
                    this.pointerList = this.pointerList.filter(function(_ref3) {
                        return _ref3.source === _this6.eventsSource;
                    });
                }
            }, {
                key: "handleMouseDown",
                value: function(event) {
                    this.shouldHandleEvent(_constant.SOURCE_MOUSE) && ReactImageLightbox.isTargetMatchImage(event.target) && (this.addPointer(ReactImageLightbox.parseMouseEvent(event)), 
                    this.multiPointerStart(event));
                }
            }, {
                key: "handleMouseMove",
                value: function(event) {
                    this.shouldHandleEvent(_constant.SOURCE_MOUSE) && this.multiPointerMove(event, [ ReactImageLightbox.parseMouseEvent(event) ]);
                }
            }, {
                key: "handleMouseUp",
                value: function(event) {
                    this.shouldHandleEvent(_constant.SOURCE_MOUSE) && (this.removePointer(ReactImageLightbox.parseMouseEvent(event)), 
                    this.multiPointerEnd(event));
                }
            }, {
                key: "handlePointerEvent",
                value: function(event) {
                    if (this.shouldHandleEvent(_constant.SOURCE_POINTER)) switch (event.type) {
                      case "pointerdown":
                        ReactImageLightbox.isTargetMatchImage(event.target) && (this.addPointer(ReactImageLightbox.parsePointerEvent(event)), 
                        this.multiPointerStart(event));
                        break;

                      case "pointermove":
                        this.multiPointerMove(event, [ ReactImageLightbox.parsePointerEvent(event) ]);
                        break;

                      case "pointerup":
                      case "pointercancel":
                        this.removePointer(ReactImageLightbox.parsePointerEvent(event)), this.multiPointerEnd(event);
                    }
                }
            }, {
                key: "handleTouchStart",
                value: function(event) {
                    var _this7 = this;
                    this.shouldHandleEvent(_constant.SOURCE_TOUCH) && ReactImageLightbox.isTargetMatchImage(event.target) && ([].forEach.call(event.changedTouches, function(eventTouch) {
                        return _this7.addPointer(ReactImageLightbox.parseTouchPointer(eventTouch));
                    }), this.multiPointerStart(event));
                }
            }, {
                key: "handleTouchMove",
                value: function(event) {
                    this.shouldHandleEvent(_constant.SOURCE_TOUCH) && this.multiPointerMove(event, [].map.call(event.changedTouches, function(eventTouch) {
                        return ReactImageLightbox.parseTouchPointer(eventTouch);
                    }));
                }
            }, {
                key: "handleTouchEnd",
                value: function(event) {
                    var _this8 = this;
                    this.shouldHandleEvent(_constant.SOURCE_TOUCH) && ([].map.call(event.changedTouches, function(touch) {
                        return _this8.removePointer(ReactImageLightbox.parseTouchPointer(touch));
                    }), this.multiPointerEnd(event));
                }
            }, {
                key: "decideMoveOrSwipe",
                value: function(pointer) {
                    this.state.zoomLevel <= _constant.MIN_ZOOM_LEVEL ? this.handleSwipeStart(pointer) : this.handleMoveStart(pointer);
                }
            }, {
                key: "multiPointerStart",
                value: function(event) {
                    switch (this.handleEnd(null), this.pointerList.length) {
                      case 1:
                        event.preventDefault(), this.decideMoveOrSwipe(this.pointerList[0]);
                        break;

                      case 2:
                        event.preventDefault(), this.handlePinchStart(this.pointerList);
                    }
                }
            }, {
                key: "multiPointerMove",
                value: function(event, pointerList) {
                    switch (this.currentAction) {
                      case _constant.ACTION_MOVE:
                        event.preventDefault(), this.handleMove(pointerList[0]);
                        break;

                      case _constant.ACTION_SWIPE:
                        event.preventDefault(), this.handleSwipe(pointerList[0]);
                        break;

                      case _constant.ACTION_PINCH:
                        event.preventDefault(), this.handlePinch(pointerList);
                    }
                }
            }, {
                key: "multiPointerEnd",
                value: function(event) {
                    switch (this.currentAction !== _constant.ACTION_NONE && (this.setPreventInnerClose(), 
                    this.handleEnd(event)), this.pointerList.length) {
                      case 0:
                        this.eventsSource = _constant.SOURCE_ANY;
                        break;

                      case 1:
                        event.preventDefault(), this.decideMoveOrSwipe(this.pointerList[0]);
                        break;

                      case 2:
                        event.preventDefault(), this.handlePinchStart(this.pointerList);
                    }
                }
            }, {
                key: "handleEnd",
                value: function(event) {
                    switch (this.currentAction) {
                      case _constant.ACTION_MOVE:
                        this.handleMoveEnd(event);
                        break;

                      case _constant.ACTION_SWIPE:
                        this.handleSwipeEnd(event);
                        break;

                      case _constant.ACTION_PINCH:
                        this.handlePinchEnd(event);
                    }
                }
            }, {
                key: "handleMoveStart",
                value: function(_ref4) {
                    var clientX = _ref4.x, clientY = _ref4.y;
                    this.props.enableZoom && (this.currentAction = _constant.ACTION_MOVE, this.moveStartX = clientX, 
                    this.moveStartY = clientY, this.moveStartOffsetX = this.state.offsetX, this.moveStartOffsetY = this.state.offsetY);
                }
            }, {
                key: "handleMove",
                value: function(_ref5) {
                    var clientX = _ref5.x, clientY = _ref5.y, newOffsetX = this.moveStartX - clientX + this.moveStartOffsetX, newOffsetY = this.moveStartY - clientY + this.moveStartOffsetY;
                    this.state.offsetX === newOffsetX && this.state.offsetY === newOffsetY || this.setState({
                        offsetX: newOffsetX,
                        offsetY: newOffsetY
                    });
                }
            }, {
                key: "handleMoveEnd",
                value: function() {
                    var _this9 = this;
                    this.currentAction = _constant.ACTION_NONE, this.moveStartX = 0, this.moveStartY = 0, 
                    this.moveStartOffsetX = 0, this.moveStartOffsetY = 0;
                    // Snap image back into frame if outside max offset range
                    var maxOffsets = this.getMaxOffsets(), nextOffsetX = Math.max(maxOffsets.minX, Math.min(maxOffsets.maxX, this.state.offsetX)), nextOffsetY = Math.max(maxOffsets.minY, Math.min(maxOffsets.maxY, this.state.offsetY));
                    nextOffsetX === this.state.offsetX && nextOffsetY === this.state.offsetY || (this.setState({
                        offsetX: nextOffsetX,
                        offsetY: nextOffsetY,
                        shouldAnimate: !0
                    }), this.setTimeout(function() {
                        _this9.setState({
                            shouldAnimate: !1
                        });
                    }, this.props.animationDuration));
                }
            }, {
                key: "handleSwipeStart",
                value: function(_ref6) {
                    var clientX = _ref6.x, clientY = _ref6.y;
                    this.currentAction = _constant.ACTION_SWIPE, this.swipeStartX = clientX, this.swipeStartY = clientY, 
                    this.swipeEndX = clientX, this.swipeEndY = clientY;
                }
            }, {
                key: "handleSwipe",
                value: function(_ref7) {
                    var clientX = _ref7.x, clientY = _ref7.y;
                    this.swipeEndX = clientX, this.swipeEndY = clientY;
                }
            }, {
                key: "handleSwipeEnd",
                value: function(event) {
                    var xDiff = this.swipeEndX - this.swipeStartX, xDiffAbs = Math.abs(xDiff), yDiffAbs = Math.abs(this.swipeEndY - this.swipeStartY);
                    if (this.currentAction = _constant.ACTION_NONE, this.swipeStartX = 0, this.swipeStartY = 0, 
                    this.swipeEndX = 0, this.swipeEndY = 0, !(!event || this.isAnimating() || xDiffAbs < 1.5 * yDiffAbs)) {
                        if (xDiffAbs < _constant.MIN_SWIPE_DISTANCE) {
                            if (xDiffAbs < this.getLightboxRect().width / 4) return;
                        }
                        xDiff > 0 && this.props.prevSrc ? (event.preventDefault(), this.requestMovePrev()) : xDiff < 0 && this.props.nextSrc && (event.preventDefault(), 
                        this.requestMoveNext());
                    }
                }
            }, {
                key: "calculatePinchDistance",
                value: function() {
                    var _ref8 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.pinchTouchList, _ref9 = _slicedToArray(_ref8, 2), a = _ref9[0], b = _ref9[1];
                    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
                }
            }, {
                key: "calculatePinchCenter",
                value: function() {
                    var _ref10 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.pinchTouchList, _ref11 = _slicedToArray(_ref10, 2), a = _ref11[0], b = _ref11[1];
                    return {
                        x: a.x - (a.x - b.x) / 2,
                        y: a.y - (a.y - b.y) / 2
                    };
                }
            }, {
                key: "handlePinchStart",
                value: function(pointerList) {
                    this.props.enableZoom && (this.currentAction = _constant.ACTION_PINCH, this.pinchTouchList = pointerList.map(function(_ref12) {
                        return {
                            id: _ref12.id,
                            x: _ref12.x,
                            y: _ref12.y
                        };
                    }), this.pinchDistance = this.calculatePinchDistance());
                }
            }, {
                key: "handlePinch",
                value: function(pointerList) {
                    this.pinchTouchList = this.pinchTouchList.map(function(oldPointer) {
                        for (var i = 0; i < pointerList.length; i += 1) if (pointerList[i].id === oldPointer.id) return pointerList[i];
                        return oldPointer;
                    });
                    var newDistance = this.calculatePinchDistance(), zoomLevel = this.state.zoomLevel + newDistance - this.pinchDistance;
                    this.pinchDistance = newDistance;
                    var _calculatePinchCenter = this.calculatePinchCenter(this.pinchTouchList), clientX = _calculatePinchCenter.x, clientY = _calculatePinchCenter.y;
                    this.changeZoom(zoomLevel, clientX, clientY);
                }
            }, {
                key: "handlePinchEnd",
                value: function() {
                    this.currentAction = _constant.ACTION_NONE, this.pinchTouchList = null, this.pinchDistance = 0;
                }
            }, {
                key: "handleWindowResize",
                value: function() {
                    this.clearTimeout(this.resizeTimeout), this.resizeTimeout = this.setTimeout(this.forceUpdate.bind(this), 100);
                }
            }, {
                key: "handleZoomInButtonClick",
                value: function() {
                    this.changeZoom(this.state.zoomLevel + _constant.ZOOM_BUTTON_INCREMENT_SIZE);
                }
            }, {
                key: "handleZoomOutButtonClick",
                value: function() {
                    this.changeZoom(this.state.zoomLevel - _constant.ZOOM_BUTTON_INCREMENT_SIZE);
                }
            }, {
                key: "handleCaptionMousewheel",
                value: function(event) {
                    if (event.stopPropagation(), this.caption) {
                        var height = this.caption.getBoundingClientRect().height, scrollHeight = this.caption.scrollHeight, scrollTop = this.caption.scrollTop;
                        (event.deltaY > 0 && height + scrollTop >= scrollHeight || event.deltaY < 0 && scrollTop <= 0) && event.preventDefault();
                    }
                }
            }, {
                key: "isAnimating",
                value: function() {
                    return this.state.shouldAnimate || this.state.isClosing;
                }
            }, {
                key: "isImageLoaded",
                value: function(imageSrc) {
                    return imageSrc && imageSrc in this.imageCache && this.imageCache[imageSrc].loaded;
                }
            }, {
                key: "loadImage",
                value: function(srcType, imageSrc, done) {
                    var _this10 = this;
                    // Return the image info if it is already cached
                    if (this.isImageLoaded(imageSrc)) return void this.setTimeout(function() {
                        done();
                    }, 1);
                    var that = this, inMemoryImage = new Image();
                    inMemoryImage.onerror = function(errorEvent) {
                        _this10.props.onImageLoadError(imageSrc, srcType, errorEvent), done(errorEvent);
                    }, inMemoryImage.onload = function() {
                        that.imageCache[imageSrc] = {
                            loaded: !0,
                            width: this.width,
                            height: this.height
                        }, done();
                    }, inMemoryImage.src = imageSrc;
                }
            }, {
                key: "loadAllImages",
                value: function() {
                    var _this11 = this, props = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props, generateLoadDoneCallback = function(srcType, imageSrc) {
                        return function(err) {
                            // Give up showing image on error
                            err || // Don't rerender if the src is not the same as when the load started
                            // or if the component has unmounted
                            _this11.props[srcType] === imageSrc && _this11.mounted && // Force rerender with the new image
                            _this11.forceUpdate();
                        };
                    };
                    // Load the images
                    this.getSrcTypes().forEach(function(srcType) {
                        var type = srcType.name;
                        // Load unloaded images
                        props[type] && !_this11.isImageLoaded(props[type]) && _this11.loadImage(type, props[type], generateLoadDoneCallback(type, props[type]));
                    });
                }
            }, {
                key: "requestClose",
                value: function(event) {
                    var _this12 = this, closeLightbox = function() {
                        return _this12.props.onCloseRequest(event);
                    };
                    if (this.props.animationDisabled || "keydown" === event.type && !this.props.animationOnKeyInput) // No animation
                    return void closeLightbox();
                    // With animation
                    // Start closing animation
                    this.setState({
                        isClosing: !0
                    }), // Perform the actual closing at the end of the animation
                    this.setTimeout(closeLightbox, this.props.animationDuration);
                }
            }, {
                key: "requestMove",
                value: function(direction, event) {
                    var _this13 = this, nextState = {
                        zoomLevel: _constant.MIN_ZOOM_LEVEL,
                        offsetX: 0,
                        offsetY: 0
                    };
                    // Enable animated states
                    this.props.animationDisabled || this.keyPressed && !this.props.animationOnKeyInput || (nextState.shouldAnimate = !0, 
                    this.setTimeout(function() {
                        return _this13.setState({
                            shouldAnimate: !1
                        });
                    }, this.props.animationDuration)), this.keyPressed = !1, this.moveRequested = !0, 
                    "prev" === direction ? (this.keyCounter -= 1, this.setState(nextState), this.props.onMovePrevRequest(event)) : (this.keyCounter += 1, 
                    this.setState(nextState), this.props.onMoveNextRequest(event));
                }
            }, {
                key: "requestMoveNext",
                value: function(event) {
                    this.requestMove("next", event);
                }
            }, {
                key: "requestMovePrev",
                value: function(event) {
                    this.requestMove("prev", event);
                }
            }, {
                key: "render",
                value: function() {
                    var _this14 = this, _props = this.props, animationDisabled = _props.animationDisabled, animationDuration = _props.animationDuration, clickOutsideToClose = _props.clickOutsideToClose, discourageDownloads = _props.discourageDownloads, enableZoom = _props.enableZoom, imageTitle = _props.imageTitle, nextSrc = _props.nextSrc, prevSrc = _props.prevSrc, toolbarButtons = _props.toolbarButtons, reactModalStyle = _props.reactModalStyle, _onAfterOpen = _props.onAfterOpen, _state = this.state, zoomLevel = _state.zoomLevel, offsetX = _state.offsetX, offsetY = _state.offsetY, isClosing = _state.isClosing, boxSize = this.getLightboxRect(), transitionStyle = {};
                    // Transition settings for sliding animations
                    !animationDisabled && this.isAnimating() && (transitionStyle = _extends({}, transitionStyle, {
                        transition: "transform " + animationDuration + "ms"
                    }));
                    // Key endings to differentiate between images with the same src
                    var keyEndings = {};
                    this.getSrcTypes().forEach(function(_ref13) {
                        var name = _ref13.name, keyEnding = _ref13.keyEnding;
                        keyEndings[name] = keyEnding;
                    });
                    // Images to be displayed
                    var images = [], addImage = function(srcType, imageClass, transforms) {
                        // Ignore types that have no source defined for their full size image
                        if (_this14.props[srcType]) {
                            var bestImageInfo = _this14.getBestImageForType(srcType), imageStyle = _extends({}, transitionStyle, ReactImageLightbox.getTransform(_extends({}, transforms, bestImageInfo)));
                            if (zoomLevel > _constant.MIN_ZOOM_LEVEL && (imageStyle.cursor = "move"), null === bestImageInfo) {
                                var loadingIcon = void 0;
                                // Fall back to loading icon if the thumbnail has not been loaded
                                return loadingIcon = ieVersion < 10 ? _react2.default.createElement("div", {
                                    className: styles.loadingContainer__icon
                                }, (0, _util.translate)("Loading...")) : _react2.default.createElement("div", {
                                    className: "ril-loading-circle " + styles.loadingCircle + " " + styles.loadingContainer__icon
                                }, _react2.default.createElement("div", {
                                    className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                }), _react2.default.createElement("div", {
                                    className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                }), _react2.default.createElement("div", {
                                    className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                }), _react2.default.createElement("div", {
                                    className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                }), _react2.default.createElement("div", {
                                    className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                }), _react2.default.createElement("div", {
                                    className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                }), _react2.default.createElement("div", {
                                    className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                }), _react2.default.createElement("div", {
                                    className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                }), _react2.default.createElement("div", {
                                    className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                }), _react2.default.createElement("div", {
                                    className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                }), _react2.default.createElement("div", {
                                    className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                }), _react2.default.createElement("div", {
                                    className: "ril-loading-circle-point " + styles.loadingCirclePoint
                                })), void images.push(_react2.default.createElement("div", {
                                    className: imageClass + " " + styles.image + " ril-not-loaded",
                                    style: imageStyle,
                                    key: _this14.props[srcType] + keyEndings[srcType]
                                }, _react2.default.createElement("div", {
                                    className: styles.loadingContainer
                                }, loadingIcon)));
                            }
                            var imageSrc = bestImageInfo.src;
                            discourageDownloads ? (imageStyle.backgroundImage = "url('" + imageSrc + "')", images.push(_react2.default.createElement("div", {
                                className: imageClass + " " + styles.image + " " + styles.imageDiscourager,
                                onDoubleClick: _this14.handleImageDoubleClick,
                                onWheel: _this14.handleImageMouseWheel,
                                style: imageStyle,
                                key: imageSrc + keyEndings[srcType]
                            }, _react2.default.createElement("div", {
                                className: "ril-download-blocker " + styles.downloadBlocker
                            })))) : images.push(_react2.default.createElement("img", {
                                className: imageClass + " " + styles.image,
                                onDoubleClick: _this14.handleImageDoubleClick,
                                onWheel: _this14.handleImageMouseWheel,
                                onDragStart: function(e) {
                                    return e.preventDefault();
                                },
                                style: imageStyle,
                                src: imageSrc,
                                key: imageSrc + keyEndings[srcType],
                                alt: "string" == typeof imageTitle ? imageTitle : (0, _util.translate)("Image"),
                                draggable: !1
                            }));
                        }
                    }, zoomMultiplier = this.getZoomMultiplier();
                    // Next Image (displayed on the right)
                    addImage("nextSrc", "ril-image-next " + styles.imageNext, {
                        x: boxSize.width
                    }), // Main Image
                    addImage("mainSrc", "ril-image-current", {
                        x: -1 * offsetX,
                        y: -1 * offsetY,
                        zoom: zoomMultiplier
                    }), // Previous Image (displayed on the left)
                    addImage("prevSrc", "ril-image-prev " + styles.imagePrev, {
                        x: -1 * boxSize.width
                    });
                    var noop = function() {}, zoomInButtonClasses = [ styles.toolbarItemChild, styles.builtinButton, styles.zoomInButton ], zoomOutButtonClasses = [ styles.toolbarItemChild, styles.builtinButton, styles.zoomOutButton ], zoomInButtonHandler = this.handleZoomInButtonClick, zoomOutButtonHandler = this.handleZoomOutButtonClick;
                    // Disable zooming in when zoomed all the way in
                    zoomLevel === _constant.MAX_ZOOM_LEVEL && (zoomInButtonClasses.push(styles.builtinButtonDisabled), 
                    zoomInButtonHandler = noop), // Disable zooming out when zoomed all the way out
                    zoomLevel === _constant.MIN_ZOOM_LEVEL && (zoomOutButtonClasses.push(styles.builtinButtonDisabled), 
                    zoomOutButtonHandler = noop), // Ignore clicks during animation
                    this.isAnimating() && (zoomInButtonHandler = noop, zoomOutButtonHandler = noop);
                    var modalStyle = {
                        overlay: _extends({
                            zIndex: 1e3,
                            backgroundColor: "transparent"
                        }, reactModalStyle.overlay),
                        content: _extends({
                            backgroundColor: "transparent",
                            overflow: "hidden",
                            // Needed, otherwise keyboard shortcuts scroll the page
                            border: "none",
                            borderRadius: 0,
                            padding: 0,
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0
                        }, reactModalStyle.content)
                    };
                    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
                    return _react2.default.createElement(_reactModal2.default, {
                        isOpen: !0,
                        onRequestClose: clickOutsideToClose ? this.requestClose : noop,
                        onAfterOpen: function() {
                            // Focus on the div with key handlers
                            _this14.outerEl && _this14.outerEl.focus(), _onAfterOpen();
                        },
                        style: modalStyle,
                        contentLabel: (0, _util.translate)("Lightbox")
                    }, _react2.default.createElement("div", {
                        // eslint-disable-line jsx-a11y/no-static-element-interactions
                        // Floating modal with closing animations
                        className: "ril-outer " + styles.outer + " " + styles.outerAnimating + " " + this.props.wrapperClassName + " " + (isClosing ? "ril-closing " + styles.outerClosing : ""),
                        style: {
                            transition: "opacity " + animationDuration + "ms",
                            animationDuration: animationDuration + "ms",
                            animationDirection: isClosing ? "normal" : "reverse"
                        },
                        ref: function(el) {
                            _this14.outerEl = el;
                        },
                        onWheel: this.handleOuterMousewheel,
                        onMouseMove: this.handleMouseMove,
                        onMouseDown: this.handleMouseDown,
                        onTouchStart: this.handleTouchStart,
                        onTouchMove: this.handleTouchMove,
                        tabIndex: "-1",
                        onKeyDown: this.handleKeyInput,
                        onKeyUp: this.handleKeyInput
                    }, _react2.default.createElement("div", {
                        // eslint-disable-line jsx-a11y/no-static-element-interactions
                        // Image holder
                        className: "ril-inner " + styles.inner,
                        onClick: clickOutsideToClose ? this.closeIfClickInner : noop
                    }, images), prevSrc && _react2.default.createElement("button", {
                        // Move to previous image button
                        type: "button",
                        className: "ril-prev-button " + styles.navButtons + " " + styles.navButtonPrev,
                        key: "prev",
                        "aria-label": this.props.prevLabel,
                        onClick: this.isAnimating() ? noop : this.requestMovePrev
                    }), nextSrc && _react2.default.createElement("button", {
                        // Move to next image button
                        type: "button",
                        className: "ril-next-button " + styles.navButtons + " " + styles.navButtonNext,
                        key: "next",
                        "aria-label": this.props.nextLabel,
                        onClick: this.isAnimating() ? noop : this.requestMoveNext
                    }), _react2.default.createElement("div", {
                        // Lightbox toolbar
                        className: "ril-toolbar " + styles.toolbar
                    }, _react2.default.createElement("ul", {
                        className: "ril-toolbar-left " + styles.toolbarSide + " " + styles.toolbarLeftSide
                    }, _react2.default.createElement("li", {
                        className: "ril-toolbar__item " + styles.toolbarItem
                    }, _react2.default.createElement("span", {
                        className: "ril-toolbar__item__child " + styles.toolbarItemChild
                    }, imageTitle))), _react2.default.createElement("ul", {
                        className: [ "ril-toolbar-right", styles.toolbarSide, styles.toolbarRightSide ].join(" ")
                    }, toolbarButtons && toolbarButtons.map(function(button, i) {
                        return _react2.default.createElement("li", {
                            key: "button_" + (i + 1),
                            className: "ril-toolbar__item " + styles.toolbarItem
                        }, button);
                    }), enableZoom && _react2.default.createElement("li", {
                        className: "ril-toolbar__item " + styles.toolbarItem
                    }, _react2.default.createElement("button", {
                        // Lightbox zoom in button
                        type: "button",
                        key: "zoom-in",
                        "aria-label": this.props.zoomInLabel,
                        className: "ril-zoom-in " + zoomInButtonClasses.join(" "),
                        onClick: zoomInButtonHandler
                    })), enableZoom && _react2.default.createElement("li", {
                        className: "ril-toolbar__item " + styles.toolbarItem
                    }, _react2.default.createElement("button", {
                        // Lightbox zoom out button
                        type: "button",
                        key: "zoom-out",
                        "aria-label": this.props.zoomOutLabel,
                        className: "ril-zoom-out " + zoomOutButtonClasses.join(" "),
                        onClick: zoomOutButtonHandler
                    })), _react2.default.createElement("li", {
                        className: "ril-toolbar__item " + styles.toolbarItem
                    }, _react2.default.createElement("button", {
                        // Lightbox close button
                        type: "button",
                        key: "close",
                        "aria-label": this.props.closeLabel,
                        className: "ril-close ril-toolbar__item__child " + styles.toolbarItemChild + " " + styles.builtinButton + " " + styles.closeButton,
                        onClick: this.isAnimating() ? noop : this.requestClose
                    })))), this.props.imageCaption && _react2.default.createElement("div", {
                        // Image caption
                        onWheel: this.handleCaptionMousewheel,
                        onMouseDown: function(event) {
                            return event.stopPropagation();
                        },
                        className: "ril-caption " + styles.caption,
                        ref: function(el) {
                            _this14.caption = el;
                        }
                    }, _react2.default.createElement("div", {
                        className: "ril-caption-content " + styles.captionContent
                    }, this.props.imageCaption))));
                }
            } ]), ReactImageLightbox;
        }(_react.Component);
        ReactImageLightbox.propTypes = {
            //-----------------------------
            // Image sources
            //-----------------------------
            // Main display image url
            mainSrc: _propTypes2.default.string.isRequired,
            // eslint-disable-line react/no-unused-prop-types
            // Previous display image url (displayed to the left)
            // If left undefined, movePrev actions will not be performed, and the button not displayed
            prevSrc: _propTypes2.default.string,
            // Next display image url (displayed to the right)
            // If left undefined, moveNext actions will not be performed, and the button not displayed
            nextSrc: _propTypes2.default.string,
            //-----------------------------
            // Image thumbnail sources
            //-----------------------------
            // Thumbnail image url corresponding to props.mainSrc
            mainSrcThumbnail: _propTypes2.default.string,
            // eslint-disable-line react/no-unused-prop-types
            // Thumbnail image url corresponding to props.prevSrc
            prevSrcThumbnail: _propTypes2.default.string,
            // eslint-disable-line react/no-unused-prop-types
            // Thumbnail image url corresponding to props.nextSrc
            nextSrcThumbnail: _propTypes2.default.string,
            // eslint-disable-line react/no-unused-prop-types
            //-----------------------------
            // Event Handlers
            //-----------------------------
            // Close window event
            // Should change the parent state such that the lightbox is not rendered
            onCloseRequest: _propTypes2.default.func.isRequired,
            // Move to previous image event
            // Should change the parent state such that props.prevSrc becomes props.mainSrc,
            //  props.mainSrc becomes props.nextSrc, etc.
            onMovePrevRequest: _propTypes2.default.func,
            // Move to next image event
            // Should change the parent state such that props.nextSrc becomes props.mainSrc,
            //  props.mainSrc becomes props.prevSrc, etc.
            onMoveNextRequest: _propTypes2.default.func,
            // Called when an image fails to load
            // (imageSrc: string, srcType: string, errorEvent: object): void
            onImageLoadError: _propTypes2.default.func,
            // Open window event
            onAfterOpen: _propTypes2.default.func,
            //-----------------------------
            // Download discouragement settings
            //-----------------------------
            // Enable download discouragement (prevents [right-click -> Save Image As...])
            discourageDownloads: _propTypes2.default.bool,
            //-----------------------------
            // Animation settings
            //-----------------------------
            // Disable all animation
            animationDisabled: _propTypes2.default.bool,
            // Disable animation on actions performed with keyboard shortcuts
            animationOnKeyInput: _propTypes2.default.bool,
            // Animation duration (ms)
            animationDuration: _propTypes2.default.number,
            //-----------------------------
            // Keyboard shortcut settings
            //-----------------------------
            // Required interval of time (ms) between key actions
            // (prevents excessively fast navigation of images)
            keyRepeatLimit: _propTypes2.default.number,
            // Amount of time (ms) restored after each keyup
            // (makes rapid key presses slightly faster than holding down the key to navigate images)
            keyRepeatKeyupBonus: _propTypes2.default.number,
            //-----------------------------
            // Image info
            //-----------------------------
            // Image title
            imageTitle: _propTypes2.default.node,
            // Image caption
            imageCaption: _propTypes2.default.node,
            //-----------------------------
            // Lightbox style
            //-----------------------------
            // Set z-index style, etc., for the parent react-modal (format: https://github.com/reactjs/react-modal#styles )
            reactModalStyle: _propTypes2.default.shape({}),
            // Padding (px) between the edge of the window and the lightbox
            imagePadding: _propTypes2.default.number,
            wrapperClassName: _propTypes2.default.string,
            //-----------------------------
            // Other
            //-----------------------------
            // Array of custom toolbar buttons
            toolbarButtons: _propTypes2.default.arrayOf(_propTypes2.default.node),
            // When true, clicks outside of the image close the lightbox
            clickOutsideToClose: _propTypes2.default.bool,
            // Set to false to disable zoom functionality and hide zoom buttons
            enableZoom: _propTypes2.default.bool,
            // Aria-labels
            nextLabel: _propTypes2.default.string,
            prevLabel: _propTypes2.default.string,
            zoomInLabel: _propTypes2.default.string,
            zoomOutLabel: _propTypes2.default.string,
            closeLabel: _propTypes2.default.string
        }, ReactImageLightbox.defaultProps = {
            imageTitle: null,
            imageCaption: null,
            toolbarButtons: null,
            animationDisabled: !1,
            animationDuration: 300,
            animationOnKeyInput: !1,
            clickOutsideToClose: !0,
            closeLabel: "Close lightbox",
            discourageDownloads: !1,
            enableZoom: !0,
            imagePadding: 10,
            keyRepeatKeyupBonus: 40,
            keyRepeatLimit: 180,
            mainSrcThumbnail: null,
            nextLabel: "Next image",
            nextSrc: null,
            nextSrcThumbnail: null,
            onAfterOpen: function() {},
            onImageLoadError: function() {},
            onMoveNextRequest: function() {},
            onMovePrevRequest: function() {},
            prevLabel: "Previous image",
            prevSrc: null,
            prevSrcThumbnail: null,
            reactModalStyle: {},
            wrapperClassName: "",
            zoomInLabel: "Zoom in",
            zoomOutLabel: "Zoom out"
        }, exports.default = ReactImageLightbox;
    }, /* 2 */
    /***/
    function(module, exports) {
        module.exports = __webpack_require__(/*! react */ "react");
    }, /* 3 */
    /***/
    function(module, exports) {
        module.exports = __webpack_require__(/*! prop-types */ "prop-types");
    }, /* 4 */
    /***/
    function(module, exports) {
        module.exports = __webpack_require__(/*! react-modal */ "react-modal");
    }, /* 5 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        /**
 * Get the version of Internet Explorer in use, or undefined
 *
 * @return {?number} ieVersion - IE version as an integer, or undefined if not IE
 */
        function getIEVersion() {
            if ("undefined" != typeof window) {
                var match = window.navigator.userAgent.match(/(?:MSIE |Trident\/.*; rv:)(\d+)/);
                return match ? parseInt(match[1], 10) : void 0;
            }
        }
        /**
 * Placeholder for future translate functionality
 */
        function translate(str) {
            var replaceStrings = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
            if (!str) return "";
            var translated = str;
            return replaceStrings && Object.keys(replaceStrings).forEach(function(placeholder) {
                translated = translated.replace(placeholder, replaceStrings[placeholder]);
            }), translated;
        }
        function getWindowWidth() {
            return "undefined" == typeof window ? 0 : window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        }
        function getWindowHeight() {
            return "undefined" == typeof window ? 0 : window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        }
        // Returns true if this window is rendered as an iframe inside another window
        // with the same origin.
        function isInSameOriginIframe() {
            try {
                return window.self !== window.top && window.top.document;
            } catch (e) {
                return !1;
            }
        }
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.getIEVersion = getIEVersion, exports.translate = translate, exports.getWindowWidth = getWindowWidth, 
        exports.getWindowHeight = getWindowHeight, exports.isInSameOriginIframe = isInSameOriginIframe;
    }, /* 6 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        });
        // Min image zoom level
        exports.MIN_ZOOM_LEVEL = 0, exports.MAX_ZOOM_LEVEL = 300, exports.ZOOM_RATIO = 1.007, 
        exports.ZOOM_BUTTON_INCREMENT_SIZE = 100, exports.WHEEL_MOVE_X_THRESHOLD = 200, 
        exports.WHEEL_MOVE_Y_THRESHOLD = 1, exports.KEYS = {
            ESC: 27,
            LEFT_ARROW: 37,
            RIGHT_ARROW: 39
        }, exports.ACTION_NONE = 0, exports.ACTION_MOVE = 1, exports.ACTION_SWIPE = 2, exports.ACTION_PINCH = 3, 
        exports.ACTION_ROTATE = 4, exports.SOURCE_ANY = 0, exports.SOURCE_MOUSE = 1, exports.SOURCE_TOUCH = 2, 
        exports.SOURCE_POINTER = 3, exports.MIN_SWIPE_DISTANCE = 200;
    }, /* 7 */
    /***/
    function(module, exports, __webpack_require__) {
        var content = __webpack_require__(8), insertCss = __webpack_require__(10);
        "string" == typeof content && (content = [ [ module.i, content, "" ] ]), module.exports = content.locals || {}, 
        module.exports._getContent = function() {
            return content;
        }, module.exports._getCss = function() {
            return content.toString();
        }, module.exports._insertCss = function(options) {
            return insertCss(content, options);
        };
    }, /* 8 */
    /***/
    function(module, exports, __webpack_require__) {
        exports = module.exports = __webpack_require__(9)(void 0), // imports
        // module
        exports.push([ module.i, '@-webkit-keyframes ril__closeWindow {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n@keyframes ril__closeWindow {\n  0% {\n    opacity: 1; }\n  100% {\n    opacity: 0; } }\n\n.ril__outer {\n  background-color: rgba(0, 0, 0, 0.85);\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1000;\n  width: 100%;\n  height: 100%;\n  -ms-content-zooming: none;\n  -ms-user-select: none;\n  -ms-touch-select: none;\n  -ms-touch-action: none;\n      touch-action: none; }\n\n.ril__outerClosing {\n  opacity: 0; }\n\n.ril__inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.ril__image {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  -ms-content-zooming: none;\n  -ms-user-select: none;\n  -ms-touch-select: none;\n  -ms-touch-action: none;\n      touch-action: none; }\n\n.ril__imagePrev {\n  @extends .image; }\n\n.ril__imageNext {\n  @extends .image; }\n\n.ril__imageDiscourager {\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: contain; }\n\n.ril__navButtons {\n  border: none;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 20px;\n  height: 34px;\n  padding: 40px 30px;\n  margin: auto;\n  cursor: pointer;\n  opacity: 0.7; }\n  .ril__navButtons:hover {\n    opacity: 1; }\n  .ril__navButtons:active {\n    opacity: 0.7; }\n\n.ril__navButtonPrev {\n  left: 0;\n  background: rgba(0, 0, 0, 0.2) url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjM0Ij48cGF0aCBkPSJtIDE5LDMgLTIsLTIgLTE2LDE2IDE2LDE2IDEsLTEgLTE1LC0xNSAxNSwtMTUgeiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==") no-repeat center; }\n\n.ril__navButtonNext {\n  right: 0;\n  background: rgba(0, 0, 0, 0.2) url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjM0Ij48cGF0aCBkPSJtIDEsMyAyLC0yIDE2LDE2IC0xNiwxNiAtMSwtMSAxNSwtMTUgLTE1LC0xNSB6IiBmaWxsPSIjRkZGIi8+PC9zdmc+") no-repeat center; }\n\n.ril__downloadBlocker {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-image: url("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");\n  background-size: cover; }\n\n.ril__caption,\n.ril__toolbar {\n  background-color: rgba(0, 0, 0, 0.5);\n  position: absolute;\n  left: 0;\n  right: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between; }\n\n.ril__caption {\n  bottom: 0;\n  max-height: 150px;\n  overflow: auto; }\n\n.ril__captionContent {\n  padding: 10px 20px;\n  color: #fff; }\n\n.ril__toolbar {\n  top: 0;\n  height: 50px; }\n\n.ril__toolbarSide {\n  height: 50px;\n  margin: 0; }\n\n.ril__toolbarSideNoFlex {\n  height: auto;\n  line-height: 50px;\n  max-width: 48%;\n  position: absolute;\n  top: 0;\n  bottom: 0; }\n\n.ril__toolbarLeftSide {\n  padding-left: 20px;\n  padding-right: 0;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 1 auto;\n          flex: 0 1 auto;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.ril__toolbarLeftSideNoFlex {\n  left: 0;\n  overflow: visible; }\n\n.ril__toolbarRightSide {\n  padding-left: 0;\n  padding-right: 20px;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 auto;\n          flex: 0 0 auto; }\n\n.ril__toolbarRightSideNoFlex {\n  right: 0; }\n\n.ril__toolbarItem {\n  display: inline-block;\n  line-height: 50px;\n  padding: 0;\n  color: #fff;\n  font-size: 120%;\n  max-width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.ril__toolbarItemChild {\n  vertical-align: middle; }\n\n.ril__builtinButton {\n  width: 40px;\n  height: 35px;\n  cursor: pointer;\n  border: none;\n  opacity: 0.7; }\n  .ril__builtinButton:hover {\n    opacity: 1; }\n  .ril__builtinButton:active {\n    outline: none; }\n\n.ril__builtinButtonDisabled {\n  cursor: default;\n  opacity: 0.5; }\n  .ril__builtinButtonDisabled:hover {\n    opacity: 0.5; }\n\n.ril__closeButton {\n  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIj48cGF0aCBkPSJtIDEsMyAxLjI1LC0xLjI1IDcuNSw3LjUgNy41LC03LjUgMS4yNSwxLjI1IC03LjUsNy41IDcuNSw3LjUgLTEuMjUsMS4yNSAtNy41LC03LjUgLTcuNSw3LjUgLTEuMjUsLTEuMjUgNy41LC03LjUgLTcuNSwtNy41IHoiIGZpbGw9IiNGRkYiLz48L3N2Zz4=") no-repeat center; }\n\n.ril__zoomInButton {\n  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTEgMTlsNi02Ii8+PHBhdGggZD0iTTkgOGg2Ii8+PHBhdGggZD0iTTEyIDV2NiIvPjwvZz48Y2lyY2xlIGN4PSIxMiIgY3k9IjgiIHI9IjciIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9zdmc+") no-repeat center; }\n\n.ril__zoomOutButton {\n  background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGcgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PHBhdGggZD0iTTEgMTlsNi02Ii8+PHBhdGggZD0iTTkgOGg2Ii8+PC9nPjxjaXJjbGUgY3g9IjEyIiBjeT0iOCIgcj0iNyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L3N2Zz4=") no-repeat center; }\n\n.ril__outerAnimating {\n  -webkit-animation-name: ril__closeWindow;\n          animation-name: ril__closeWindow; }\n\n@-webkit-keyframes ril__pointFade {\n  0%,\n  19.999%,\n  100% {\n    opacity: 0; }\n  20% {\n    opacity: 1; } }\n\n@keyframes ril__pointFade {\n  0%,\n  19.999%,\n  100% {\n    opacity: 0; }\n  20% {\n    opacity: 1; } }\n\n.ril__loadingCircle {\n  width: 60px;\n  height: 60px;\n  position: relative; }\n\n.ril__loadingCirclePoint {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0; }\n  .ril__loadingCirclePoint:before {\n    content: \'\';\n    display: block;\n    margin: 0 auto;\n    width: 15%;\n    height: 15%;\n    background-color: #fff;\n    border-radius: 30%;\n    -webkit-animation: ril__pointFade 1200ms infinite ease-in-out both;\n            animation: ril__pointFade 1200ms infinite ease-in-out both; }\n  .ril__loadingCirclePoint:nth-of-type(1) {\n    -webkit-transform: rotate(0deg);\n        -ms-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  .ril__loadingCirclePoint:nth-of-type(7) {\n    -webkit-transform: rotate(180deg);\n        -ms-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  .ril__loadingCirclePoint:nth-of-type(1):before, .ril__loadingCirclePoint:nth-of-type(7):before {\n    -webkit-animation-delay: -1200ms;\n            animation-delay: -1200ms; }\n  .ril__loadingCirclePoint:nth-of-type(2) {\n    -webkit-transform: rotate(30deg);\n        -ms-transform: rotate(30deg);\n            transform: rotate(30deg); }\n  .ril__loadingCirclePoint:nth-of-type(8) {\n    -webkit-transform: rotate(210deg);\n        -ms-transform: rotate(210deg);\n            transform: rotate(210deg); }\n  .ril__loadingCirclePoint:nth-of-type(2):before, .ril__loadingCirclePoint:nth-of-type(8):before {\n    -webkit-animation-delay: -1000ms;\n            animation-delay: -1000ms; }\n  .ril__loadingCirclePoint:nth-of-type(3) {\n    -webkit-transform: rotate(60deg);\n        -ms-transform: rotate(60deg);\n            transform: rotate(60deg); }\n  .ril__loadingCirclePoint:nth-of-type(9) {\n    -webkit-transform: rotate(240deg);\n        -ms-transform: rotate(240deg);\n            transform: rotate(240deg); }\n  .ril__loadingCirclePoint:nth-of-type(3):before, .ril__loadingCirclePoint:nth-of-type(9):before {\n    -webkit-animation-delay: -800ms;\n            animation-delay: -800ms; }\n  .ril__loadingCirclePoint:nth-of-type(4) {\n    -webkit-transform: rotate(90deg);\n        -ms-transform: rotate(90deg);\n            transform: rotate(90deg); }\n  .ril__loadingCirclePoint:nth-of-type(10) {\n    -webkit-transform: rotate(270deg);\n        -ms-transform: rotate(270deg);\n            transform: rotate(270deg); }\n  .ril__loadingCirclePoint:nth-of-type(4):before, .ril__loadingCirclePoint:nth-of-type(10):before {\n    -webkit-animation-delay: -600ms;\n            animation-delay: -600ms; }\n  .ril__loadingCirclePoint:nth-of-type(5) {\n    -webkit-transform: rotate(120deg);\n        -ms-transform: rotate(120deg);\n            transform: rotate(120deg); }\n  .ril__loadingCirclePoint:nth-of-type(11) {\n    -webkit-transform: rotate(300deg);\n        -ms-transform: rotate(300deg);\n            transform: rotate(300deg); }\n  .ril__loadingCirclePoint:nth-of-type(5):before, .ril__loadingCirclePoint:nth-of-type(11):before {\n    -webkit-animation-delay: -400ms;\n            animation-delay: -400ms; }\n  .ril__loadingCirclePoint:nth-of-type(6) {\n    -webkit-transform: rotate(150deg);\n        -ms-transform: rotate(150deg);\n            transform: rotate(150deg); }\n  .ril__loadingCirclePoint:nth-of-type(12) {\n    -webkit-transform: rotate(330deg);\n        -ms-transform: rotate(330deg);\n            transform: rotate(330deg); }\n  .ril__loadingCirclePoint:nth-of-type(6):before, .ril__loadingCirclePoint:nth-of-type(12):before {\n    -webkit-animation-delay: -200ms;\n            animation-delay: -200ms; }\n  .ril__loadingCirclePoint:nth-of-type(7) {\n    -webkit-transform: rotate(180deg);\n        -ms-transform: rotate(180deg);\n            transform: rotate(180deg); }\n  .ril__loadingCirclePoint:nth-of-type(13) {\n    -webkit-transform: rotate(360deg);\n        -ms-transform: rotate(360deg);\n            transform: rotate(360deg); }\n  .ril__loadingCirclePoint:nth-of-type(7):before, .ril__loadingCirclePoint:nth-of-type(13):before {\n    -webkit-animation-delay: 0ms;\n            animation-delay: 0ms; }\n\n.ril__loadingContainer {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0; }\n\n.ril__loadingContainer__icon {\n  color: #fff;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n      -ms-transform: translateX(-50%) translateY(-50%);\n          transform: translateX(-50%) translateY(-50%); }\n', "" ]), 
        // exports
        exports.locals = {
            outer: "ril__outer",
            outerClosing: "ril__outerClosing",
            inner: "ril__inner",
            image: "ril__image",
            imagePrev: "ril__imagePrev",
            imageNext: "ril__imageNext",
            imageDiscourager: "ril__imageDiscourager",
            navButtons: "ril__navButtons",
            navButtonPrev: "ril__navButtonPrev",
            navButtonNext: "ril__navButtonNext",
            downloadBlocker: "ril__downloadBlocker",
            caption: "ril__caption",
            toolbar: "ril__toolbar",
            captionContent: "ril__captionContent",
            toolbarSide: "ril__toolbarSide",
            toolbarSideNoFlex: "ril__toolbarSideNoFlex",
            toolbarLeftSide: "ril__toolbarLeftSide",
            toolbarLeftSideNoFlex: "ril__toolbarLeftSideNoFlex",
            toolbarRightSide: "ril__toolbarRightSide",
            toolbarRightSideNoFlex: "ril__toolbarRightSideNoFlex",
            toolbarItem: "ril__toolbarItem",
            toolbarItemChild: "ril__toolbarItemChild",
            builtinButton: "ril__builtinButton",
            builtinButtonDisabled: "ril__builtinButtonDisabled",
            closeButton: "ril__closeButton",
            zoomInButton: "ril__zoomInButton",
            zoomOutButton: "ril__zoomOutButton",
            outerAnimating: "ril__outerAnimating",
            closeWindow: "ril__closeWindow",
            loadingCircle: "ril__loadingCircle",
            loadingCirclePoint: "ril__loadingCirclePoint",
            pointFade: "ril__pointFade",
            loadingContainer: "ril__loadingContainer",
            loadingContainer__icon: "ril__loadingContainer__icon"
        };
    }, /* 9 */
    /***/
    function(module, exports) {
        function cssWithMappingToString(item, useSourceMap) {
            var content = item[1] || "", cssMapping = item[3];
            if (!cssMapping) return content;
            if (useSourceMap && "function" == typeof btoa) {
                var sourceMapping = toComment(cssMapping);
                return [ content ].concat(cssMapping.sources.map(function(source) {
                    return "/*# sourceURL=" + cssMapping.sourceRoot + source + " */";
                })).concat([ sourceMapping ]).join("\n");
            }
            return [ content ].join("\n");
        }
        // Adapted from convert-source-map (MIT)
        function toComment(sourceMap) {
            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
        }
        /*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
        // css base code, injected by the css-loader
        module.exports = function(useSourceMap) {
            var list = [];
            // return the list of modules as css string
            // import a list of modules into the list
            return list.toString = function() {
                return this.map(function(item) {
                    var content = cssWithMappingToString(item, useSourceMap);
                    return item[2] ? "@media " + item[2] + "{" + content + "}" : content;
                }).join("");
            }, list.i = function(modules, mediaQuery) {
                "string" == typeof modules && (modules = [ [ null, modules, "" ] ]);
                for (var alreadyImportedModules = {}, i = 0; i < this.length; i++) {
                    var id = this[i][0];
                    "number" == typeof id && (alreadyImportedModules[id] = !0);
                }
                for (i = 0; i < modules.length; i++) {
                    var item = modules[i];
                    // skip already imported module
                    // this implementation is not 100% perfect for weird media query combinations
                    //  when a module is imported multiple times with different media queries.
                    //  I hope this will never occur (Hey this way we have smaller bundles)
                    "number" == typeof item[0] && alreadyImportedModules[item[0]] || (mediaQuery && !item[2] ? item[2] = mediaQuery : mediaQuery && (item[2] = "(" + item[2] + ") and (" + mediaQuery + ")"), 
                    list.push(item));
                }
            }, list;
        };
    }, /* 10 */
    /***/
    function(module, exports, __webpack_require__) {
        "use strict";
        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : {
                default: obj
            };
        }
        // Base64 encoding and decoding - The "Unicode Problem"
        // https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
        function b64EncodeUnicode(str) {
            return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
                return String.fromCharCode("0x" + p1);
            }));
        }
        /**
 * Remove style/link elements for specified node IDs
 * if they are no longer referenced by UI components.
 */
        function removeCss(ids) {
            ids.forEach(function(id) {
                if (--inserted[id] <= 0) {
                    var elem = document.getElementById(prefix + id);
                    elem && elem.parentNode.removeChild(elem);
                }
            });
        }
        /**
 * Example:
 *   // Insert CSS styles object generated by `css-loader` into DOM
 *   var removeCss = insertCss([[1, 'body { color: red; }']]);
 *
 *   // Remove it from the DOM
 *   removeCss();
 */
        function insertCss(styles) {
            for (var _ref = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, _ref$replace = _ref.replace, replace = void 0 !== _ref$replace && _ref$replace, _ref$prepend = _ref.prepend, prepend = void 0 !== _ref$prepend && _ref$prepend, ids = [], i = 0; i < styles.length; i++) {
                var _styles$i = (0, _slicedToArray3.default)(styles[i], 4), moduleId = _styles$i[0], css = _styles$i[1], media = _styles$i[2], sourceMap = _styles$i[3], id = moduleId + "-" + i;
                if (ids.push(id), !inserted[id] || replace) {
                    inserted[id] = 1;
                    var elem = document.getElementById(prefix + id), create = !1;
                    elem || (create = !0, elem = document.createElement("style"), elem.setAttribute("type", "text/css"), 
                    elem.id = prefix + id, media && elem.setAttribute("media", media));
                    var cssText = css;
                    sourceMap && "function" == typeof btoa && (// skip IE9 and below, see http://caniuse.com/atob-btoa
                    cssText += "\n/*# sourceMappingURL=data:application/json;base64," + b64EncodeUnicode((0, 
                    _stringify2.default)(sourceMap)) + "*/", cssText += "\n/*# sourceURL=" + sourceMap.file + "?" + id + "*/"), 
                    "textContent" in elem ? elem.textContent = cssText : elem.styleSheet.cssText = cssText, 
                    create && (prepend ? document.head.insertBefore(elem, document.head.childNodes[0]) : document.head.appendChild(elem));
                } else inserted[id]++;
            }
            return removeCss.bind(null, ids);
        }
        var _stringify = __webpack_require__(11), _stringify2 = _interopRequireDefault(_stringify), _slicedToArray2 = __webpack_require__(12), _slicedToArray3 = _interopRequireDefault(_slicedToArray2), prefix = "s", inserted = {};
        module.exports = insertCss;
    }, /* 11 */
    /***/
    function(module, exports) {
        module.exports = __webpack_require__(/*! babel-runtime/core-js/json/stringify */ "babel-runtime/core-js/json/stringify");
    }, /* 12 */
    /***/
    function(module, exports) {
        module.exports = __webpack_require__(/*! babel-runtime/helpers/slicedToArray */ "babel-runtime/helpers/slicedToArray");
    } ]);
});

/***/ }),

/***/ "./pages/elements/common/title.js":
/*!****************************************!*\
  !*** ./pages/elements/common/title.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/jeffe/work/Barriguitas/unice_theme/pages/elements/common/title.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Title = ({
  heading
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
    xs: "12",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "title title2 title-inner",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "main-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 25
    }
  }, __jsx("h2", {
    className: "font-primary borders text-center main-text m-b-0 text-uppercase",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 109
    }
  }, heading)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Title);

/***/ }),

/***/ "./pages/elements/price/element/price3.js":
/*!************************************************!*\
  !*** ./pages/elements/price/element/price3.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _database_elements_price_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../database/elements/price/database */ "./database/elements/price/database.js");
/* harmony import */ var _database_elements_price_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_database_elements_price_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/home/jeffe/work/Barriguitas/unice_theme/pages/elements/price/element/price3.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  autoplay: true,
  swipeToSlide: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 575,
    settings: {
      slidesToShow: 1
    }
  }, {
    breakpoint: 992,
    settings: {
      slidesToShow: 2
    }
  }]
};

const PricingThree = () => __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
  xs: "12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }
}, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  className: "pricing-slider  price-margin"
}, settings, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 13
  }
}), _database_elements_price_database__WEBPACK_IMPORTED_MODULE_3__["PricingResume1"].map((item, i) => {
  return __jsx("div", {
    className: "item",
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "price-container price-margin shadows bg-white text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "price-feature-container set-relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 37
    }
  }, __jsx("div", {
    className: "feature-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 41
    }
  }, __jsx("span", {
    className: "flaticon-rocket-ship feature-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 45
    }
  }), __jsx("h4", {
    className: "feature-text-heading text-center bold text-uppercase font-primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 45
    }
  }, item.title), __jsx("hr", {
    className: "set-border",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 45
    }
  })), __jsx("div", {
    className: "price-features font-primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 41
    }
  }, __jsx("h5", {
    className: "price-feature text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 45
    }
  }, item.feature1), __jsx("h5", {
    className: "price-feature text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 45
    }
  }, item.feature2), __jsx("h5", {
    className: "price-feature text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 45
    }
  }, item.feature3)), __jsx("div", {
    className: "price-value",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 41
    }
  }, __jsx("h6", {
    className: "price text-center font-primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 45
    }
  }, "$", __jsx("span", {
    className: "large font-primary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 93
    }
  }, item.price), "/month")), __jsx("a", {
    className: "btn btn-default btn-white",
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 41
    }
  }, "purchase"))));
}))));

/* harmony default export */ __webpack_exports__["default"] = (PricingThree);

/***/ }),

/***/ "./pages/elements/price/elementPrice3.js":
/*!***********************************************!*\
  !*** ./pages/elements/price/elementPrice3.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_title__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/title */ "./pages/elements/common/title.js");
/* harmony import */ var _element_price3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./element/price3 */ "./pages/elements/price/element/price3.js");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/jeffe/work/Barriguitas/unice_theme/pages/elements/price/elementPrice3.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ElementPriceThree = () => __jsx("section", {
  className: "agency pricing inner-pagetitle",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }
}, __jsx(_common_title__WEBPACK_IMPORTED_MODULE_1__["default"], {
  heading: "Pricing 3",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 13
  }
}), __jsx(_element_price3__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 13
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (ElementPriceThree);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _containers_common_center_logo_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../containers/common/center-logo-header */ "./containers/common/center-logo-header.js");
/* harmony import */ var _layouts_sections_wedding_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/sections/wedding/header */ "./pages/layouts/sections/wedding/header.js");
/* harmony import */ var _layouts_sections_wedding_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/sections/wedding/about */ "./pages/layouts/sections/wedding/about.js");
/* harmony import */ var _elements_price_elementPrice3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./elements/price/elementPrice3 */ "./pages/elements/price/elementPrice3.js");
/* harmony import */ var _portfolio_full_width_3_grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./portfolio/full-width-3-grid */ "./pages/portfolio/full-width-3-grid.js");
/* harmony import */ var _layouts_sections_wedding_blog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/sections/wedding/blog */ "./pages/layouts/sections/wedding/blog.js");
/* harmony import */ var _layouts_sections_wedding_footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts/sections/wedding/footer */ "./pages/layouts/sections/wedding/footer.js");
var _jsxFileName = "/home/jeffe/work/Barriguitas/unice_theme/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import Custom Components









const Home = () => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    document.body.style.setProperty('--primary', '#c0882f');
    document.body.style.setProperty('--secondary', '#595959');
    document.body.style.setProperty('--light', '#BF862D');
    document.body.style.setProperty('--dark', '#ECC878');
  });
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, "Wedding Layout ")), __jsx(_containers_common_center_logo_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    themeClass: "wedding",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_wedding_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }), __jsx(_portfolio_full_width_3_grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_wedding_about__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }), __jsx(_elements_price_elementPrice3__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_wedding_blog__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }), __jsx(_layouts_sections_wedding_footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./pages/layouts/sections/wedding/about.js":
/*!*************************************************!*\
  !*** ./pages/layouts/sections/wedding/about.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/jeffe/work/Barriguitas/unice_theme/pages/layouts/sections/wedding/about.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const About = () => __jsx("section", {
  className: "wedding format",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  md: "8",
  className: "offset-md-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 21
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid title-img",
  src: "/assets/images/wedding-img/bottom.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 25
  }
}), __jsx("div", {
  className: "main-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 25
  }
}, __jsx("h2", {
  className: "gradient-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 29
  }
}, "Carolina Rinc\xF3n")), __jsx("div", {
  className: "sub-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 25
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 29
  }
}, "Maquillajes para embarazadas profesional y al mejor precio.")))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  xl: "4",
  md: "6",
  className: "offset-xl-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 17
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid about-img",
  src: "/assets/images/wedding-img/MIA-1.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 21
  }
})), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  xl: "4",
  lg: "6",
  md: "6",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "center-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 21
  }
}, __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 25
  }
}, __jsx("div", {
  className: "format-small-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 29
  }
}, __jsx("h6", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 33
  }
}, "# Love Bird")), __jsx("div", {
  className: "format-head-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 29
  }
}, __jsx("h3", {
  className: "about-font-header gradient-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 33
  }
}, "about")), __jsx("div", {
  className: "format-sub-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 29
  }
}, __jsx("p", {
  className: "about-para",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 33
  }
}, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."), __jsx("p", {
  className: "about-para",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 33
  }
}, "When an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry."))))))));

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./pages/layouts/sections/wedding/blog.js":
/*!************************************************!*\
  !*** ./pages/layouts/sections/wedding/blog.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../database/layouts/wedding/database */ "./database/layouts/wedding/database.js");
/* harmony import */ var _database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/home/jeffe/work/Barriguitas/unice_theme/pages/layouts/sections/wedding/blog.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  autoplay: true,
  slidesToScroll: 1,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 1
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 1
    }
  }]
};

const Blog = () => __jsx("section", {
  className: "wedding blog",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
  md: "8",
  className: "offset-md-2",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 21
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid title-img",
  src: "/assets/images/wedding-img/bottom.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 25
  }
}), __jsx("div", {
  className: "main-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 25
  }
}, __jsx("h2", {
  className: "gradient-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 29
  }
}, "Our Beautiful Story")), __jsx("div", {
  className: "sub-title",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 25
  }
}, __jsx("p", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 29
  }
}, "A beautiful app for consectetur adipisicing elit, sed do eiusmod tempor incididunt ut mollit anim id est laborum. Sedut perspiciatis unde omnis.")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Container"], {
  fluid: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 9
  }
}, __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 13
  }
}), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
  xs: "12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 17
  }
}, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
  className: "owl-carousel owl-theme",
  id: "blog-slider"
}, settings, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49,
    columnNumber: 21
  }
}), _database_layouts_wedding_database__WEBPACK_IMPORTED_MODULE_3__["BlogData"].map((item, i) => {
  return __jsx("div", {
    className: "item",
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 33
    }
  }, __jsx("div", {
    className: "blog-container",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 37
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Row"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 41
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: "6",
    sm: "8",
    xs: "12",
    className: "offset-sm-2 offset-md-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "set-skew",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 49
    }
  }, __jsx("img", {
    alt: "",
    className: "img-fluid",
    src: item.img,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 53
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_4__["Col"], {
    md: "6",
    sm: "8",
    xs: "12",
    className: "offset-sm-2 offset-md-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "center-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 49
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 53
    }
  }, __jsx("h3", {
    className: "blog-text gradient-text",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 57
    }
  }, " ", item.title), __jsx("h6", {
    className: "blog-date",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 57
    }
  }, item.date), __jsx("h6", {
    className: "blog-place",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 57
    }
  }, item.place), __jsx("p", {
    className: "blog-para",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 57
    }
  }, item.desc), __jsx("button", {
    className: "btn btn-blog",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 57
    }
  }, "read more")))))));
}))))));

/* harmony default export */ __webpack_exports__["default"] = (Blog);

/***/ }),

/***/ "./pages/layouts/sections/wedding/footer.js":
/*!**************************************************!*\
  !*** ./pages/layouts/sections/wedding/footer.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/jeffe/work/Barriguitas/unice_theme/pages/layouts/sections/wedding/footer.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Footer = () => __jsx("footer", {
  className: "wedding copyright copyright-bg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 13
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  xl: "3",
  sm: "12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "text-center",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 21
  }
}, __jsx("div", {
  className: "link-horizontal",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 25
  }
}, __jsx("ul", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 29
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 33
  }
}, __jsx("a", {
  className: "copyright-text",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 37
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-facebook gradient-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 41
  }
}))), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 33
  }
}, __jsx("a", {
  className: "copyright-text",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 37
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-twitter gradient-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 41
  }
}))), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 33
  }
}, __jsx("a", {
  className: "copyright-text",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 37
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-google gradient-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 41
  }
}))), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 33
  }
}, __jsx("a", {
  className: "copyright-text ",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 37
  }
}, __jsx("i", {
  "aria-hidden": "true",
  className: "fa fa-instagram gradient-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28,
    columnNumber: 41
  }
}))))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  xl: "6",
  sm: "12",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "link-horizontal",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 21
  }
}, __jsx("ul", {
  className: "link justify-content-center footer-contants",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 25
  }
}, __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 29
  }
}, __jsx("a", {
  className: "copyright-text",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 33
  }
}, "home")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 29
  }
}, __jsx("a", {
  className: "copyright-text",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 33
  }
}, "couple")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 29
  }
}, __jsx("a", {
  className: "copyright-text",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 33
  }
}, "invitation")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 29
  }
}, __jsx("a", {
  className: "copyright-text",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48,
    columnNumber: 33
  }
}, "album ")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 29
  }
}, __jsx("a", {
  className: "copyright-text",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 33
  }
}, "friends say")), __jsx("li", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 29
  }
}, __jsx("a", {
  className: "copyright-text",
  href: "#",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 33
  }
}, "gift"))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  xl: "3",
  sm: "12",
  className: "p-0",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 17
  }
}, __jsx("div", {
  className: "m-l-auto center-para",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60,
    columnNumber: 21
  }
}, __jsx("h6", {
  className: "copyright-text text-right",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 25
  }
}, "\xA9 2020 Unice powered by Pixelstrap"))))));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./pages/layouts/sections/wedding/header.js":
/*!**************************************************!*\
  !*** ./pages/layouts/sections/wedding/header.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/home/jeffe/work/Barriguitas/unice_theme/pages/layouts/sections/wedding/header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const HeaderSection = () => __jsx("section", {
  className: "wedding header",
  id: "header",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "decore",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  src: "/assets/images/wedding-img/backgrounds/top-pattern.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 13
  }
}), __jsx("img", {
  alt: "",
  className: "img-fluid",
  src: "/assets/images/wedding-img/backgrounds/bottom-pattern.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }
})), __jsx("div", {
  className: "wedding-content",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }
}, __jsx("div", {
  className: "wedding bg slider-bg",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 13
  }
}, __jsx("div", {
  className: "bottom-0 set-abs girl",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 17
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid",
  id: "girl",
  src: "/assets/images/wedding-img/slider/Samy.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 56
  }
})), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 17
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 21
  }
}, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
  lg: "5",
  className: "offset-lg-7",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 25
  }
}, __jsx("div", {
  className: "center-text m-t-50",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 29
  }
}, __jsx("div", {
  className: "simple-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 33
  }
}, __jsx("p", {
  className: "header-sub-text",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 37
  }
}, "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. "), __jsx("div", {
  className: "rightfadediv",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 37
  }
}, __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 41
  }
}, __jsx("img", {
  alt: "",
  className: "img-fluid bottom-img",
  src: "/assets/images/wedding-img/bottom.png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 45
  }
})))))))))));

/* harmony default export */ __webpack_exports__["default"] = (HeaderSection);

/***/ }),

/***/ "./pages/portfolio/full-width-3-grid.js":
/*!**********************************************!*\
  !*** ./pages/portfolio/full-width-3-grid.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _containers_portfolio_basic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../containers/portfolio/basic */ "./containers/portfolio/basic.js");
var _jsxFileName = "/home/jeffe/work/Barriguitas/unice_theme/pages/portfolio/full-width-3-grid.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const FullWidth3Grid = () => __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx("div", {
  className: "masonry-filter",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }
}, __jsx(_containers_portfolio_basic__WEBPACK_IMPORTED_MODULE_1__["default"], {
  className: "col-md-4 col-sm-6 p-0 isotopeSelector masonary-portfolio",
  fluid: "container-fluid",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 13
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (FullWidth3Grid);

/***/ }),

/***/ "./public/assets/images/portfolio/Barriguita_1.png":
/*!*********************************************************!*\
  !*** ./public/assets/images/portfolio/Barriguita_1.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAiQmFycmlndWl0YV8xLnBuZyI7"

/***/ }),

/***/ "./public/assets/images/portfolio/Barriguita_10.png":
/*!**********************************************************!*\
  !*** ./public/assets/images/portfolio/Barriguita_10.png ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAiQmFycmlndWl0YV8xMC5wbmciOw=="

/***/ }),

/***/ "./public/assets/images/portfolio/Barriguita_2.png":
/*!*********************************************************!*\
  !*** ./public/assets/images/portfolio/Barriguita_2.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAiQmFycmlndWl0YV8yLnBuZyI7"

/***/ }),

/***/ "./public/assets/images/portfolio/Barriguita_4.png":
/*!*********************************************************!*\
  !*** ./public/assets/images/portfolio/Barriguita_4.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAiQmFycmlndWl0YV80LnBuZyI7"

/***/ }),

/***/ "./public/assets/images/portfolio/Barriguita_5.png":
/*!*********************************************************!*\
  !*** ./public/assets/images/portfolio/Barriguita_5.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAiQmFycmlndWl0YV81LnBuZyI7"

/***/ }),

/***/ "./public/assets/images/portfolio/Barriguita_6.png":
/*!*********************************************************!*\
  !*** ./public/assets/images/portfolio/Barriguita_6.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAiQmFycmlndWl0YV82LnBuZyI7"

/***/ }),

/***/ "./public/assets/images/portfolio/Barriguita_7.png":
/*!*********************************************************!*\
  !*** ./public/assets/images/portfolio/Barriguita_7.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAiQmFycmlndWl0YV83LnBuZyI7"

/***/ }),

/***/ "./public/assets/images/portfolio/Barriguita_8.png":
/*!*********************************************************!*\
  !*** ./public/assets/images/portfolio/Barriguita_8.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAiQmFycmlndWl0YV84LnBuZyI7"

/***/ }),

/***/ "./public/assets/images/portfolio/Barriguita_9.png":
/*!*********************************************************!*\
  !*** ./public/assets/images/portfolio/Barriguita_9.png ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,ZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyAiQmFycmlndWl0YV85LnBuZyI7"

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/jeffe/work/Barriguitas/unice_theme/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "babel-runtime/core-js/json/stringify":
/*!*******************************************************!*\
  !*** external "babel-runtime/core-js/json/stringify" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/json/stringify");

/***/ }),

/***/ "babel-runtime/helpers/slicedToArray":
/*!******************************************************!*\
  !*** external "babel-runtime/helpers/slicedToArray" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-modal":
/*!******************************!*\
  !*** external "react-modal" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-modal");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map