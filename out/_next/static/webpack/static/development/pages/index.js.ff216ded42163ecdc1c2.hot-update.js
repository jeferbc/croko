webpackHotUpdate("static/development/pages/index.js",{

/***/ "./containers/portfolio/carousel.js":
/*!******************************************!*\
  !*** ./containers/portfolio/carousel.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./database */ "./containers/portfolio/database.js");
/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");
/* harmony import */ var react_image_lightbox_next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-image-lightbox-next */ "./node_modules/react-image-lightbox-next/dist/main.js");
/* harmony import */ var react_image_lightbox_next__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox_next__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_5__);


var _this = undefined,
    _jsxFileName = "/home/jeffe/work/Barriguitas/unice_theme/containers/portfolio/carousel.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var AllImg = ['https://ik.imagekit.io/ge17f66b4ma/Barriguita_1_a73AVJNsNm.png?updatedAt=1626907768363', 'https://ik.imagekit.io/ge17f66b4ma/Barriguita_2_ZVL4uCUsy.png?updatedAt=1626907769236', 'https://ik.imagekit.io/ge17f66b4ma/Barriguita_10_ljttLG6nNXm.png?updatedAt=1626907770449', 'https://ik.imagekit.io/ge17f66b4ma/Barriguita_4_f2jnXxI7uf.png?updatedAt=1626907770006', 'https://ik.imagekit.io/ge17f66b4ma/Barriguita_5_qPbA8g_Sww.png?updatedAt=1626907769334', 'https://ik.imagekit.io/ge17f66b4ma/Barriguita_6_ncdCuSgdYtU.png?updatedAt=1626907770091', 'https://ik.imagekit.io/ge17f66b4ma/Barriguita_7_i0EGVHqIJS.png?updatedAt=1626907770304', 'https://ik.imagekit.io/ge17f66b4ma/Barriguita_8_m5K71KswITQ.png?updatedAt=1626907770750', 'https://ik.imagekit.io/ge17f66b4ma/Barriguita_9_gYtEzqEu3.png?updatedAt=1626907770164'];
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

var Basic = function Basic(_ref) {
  var className = _ref.className,
      title = _ref.title,
      subTitle = _ref.subTitle,
      fluid = _ref.fluid;
  var initilindex = {
    index: 0
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initilindex),
      photoIndex = _useState[0],
      setPhotoIndex = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, __jsx("section", {
    className: "wedding blog",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    md: "8",
    className: "offset-md-2 wedding",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 29
    }
  }, __jsx("img", {
    alt: "",
    className: "img-fluid title-img",
    src: "/assets/images/wedding-img/bottom.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 33
    }
  }), __jsx("div", {
    className: "main-title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 33
    }
  }, __jsx("h2", {
    className: "gradient-text",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 37
    }
  }, "Galer\xEDa")))))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
    fluid: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 19
    }
  }), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 19
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    xs: "12",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 23
    }
  }, __jsx(react_slick__WEBPACK_IMPORTED_MODULE_5___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "owl-carousel owl-theme"
  }, settings, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 27
    }
  }), _database__WEBPACK_IMPORTED_MODULE_2__["AllImgData"].map(function (imgItem, i) {
    return __jsx("div", {
      className: "item",
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 39
      }
    }, __jsx("div", {
      className: "blog-container",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 43
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 47
      }
    }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
      md: "6",
      sm: "8",
      xs: "12",
      className: "offset-sm-2 offset-md-0",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 51
      }
    }, __jsx("div", {
      className: "set-skew",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 55
      }
    }, __jsx("img", {
      alt: "",
      className: "img-fluid",
      src: imgItem.img,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 59
      }
    }))))));
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Basic);

/***/ })

})
//# sourceMappingURL=index.js.ff216ded42163ecdc1c2.hot-update.js.map