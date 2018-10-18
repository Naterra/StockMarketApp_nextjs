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

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/*! exports provided: getTopStocks, getNewYorkTimesNews, getNews, getYesterdayGainers, getYesterdayLosers, getMostActives, getGrowingToday */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTopStocks", function() { return getTopStocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewYorkTimesNews", function() { return getNewYorkTimesNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNews", function() { return getNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYesterdayGainers", function() { return getYesterdayGainers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getYesterdayLosers", function() { return getYesterdayLosers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMostActives", function() { return getMostActives; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGrowingToday", function() { return getGrowingToday; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./actions/types.js");


var getTopStocks = function getTopStocks() {
  return function (dispatch) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('https://api.iextrading.com/1.0/tops').then(function (res) {
      // console.log('res', res);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_TOP_STOCKS"],
        payload: res.data
      });
    }).catch(function (err) {
      console.log('then', err);
    });
  };
};
var getNewYorkTimesNews = function getNewYorkTimesNews() {
  return function (dispatch, getState) {
    var options = [];
    options.push("api-key=fdc4eb9230ce428bb2e3ccb28d9f47a5");
    options.push("sort=newest");
    options.push("q=stock,APL,AMZN,UFPI, trading"); //NycTimes

    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?" + options.join("&")).then(function (res) {
      var data = res && res.status == 200 ? res.data.response.docs : [];
      var newData = data.map(function (i) {
        console.error('i', i);

        if (i.multimedia.length > 0) {
          i.img = 'https://www.nytimes.com/' + i.multimedia[0].url;
        } else {
          var random = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
          i.img = '/static/stock_news_img_' + random + '.jpg';
        }

        return i;
      }); // console.error('getNews::then', res);

      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_NYT_NEWS"],
        payload: newData
      });
      return data;
    }).catch(function (err) {
      console.error('then', err);
    });
  };
};
var getNews = function getNews() {
  return function (dispatch, getState) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('https://api.iextrading.com/1.0/stock/market/news/last/25').then(function (res) {
      console.log('res', res.data); //TODO: tmp override image while api not working

      var newData = res.data.map(function (i) {
        i.img = '';
        return i;
      });
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["FETCH_NEWS"],
        payload: newData
      });
      return data;
    }).catch(function (err) {
      console.log('then', err);
    });
  };
};
var getYesterdayGainers = function getYesterdayGainers() {
  return function (dispatch, getState) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('https://api.iextrading.com/1.0/stock/market/list/gainers') // return axios.get('https://api.iextrading.com/1.0/stock/market/batch?types=quote')
    .then(function (res) {
      console.log('res', res.data);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["GAINERS_LIST"],
        payload: res.data
      });
      return data;
    }).catch(function (err) {
      console.log('then', err);
    });
  };
};
var getYesterdayLosers = function getYesterdayLosers() {
  return function (dispatch, getState) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('https://api.iextrading.com/1.0/stock/market/list/losers').then(function (res) {
      // console.log('res', res.data);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["LOSERS_LIST"],
        payload: res.data
      });
      return data;
    }).catch(function (err) {
      console.log('then', err);
    });
  };
};
var getMostActives = function getMostActives() {
  return function (dispatch, getState) {
    return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('https://api.iextrading.com/1.0/stock/market/list/mostactive').then(function (res) {
      // console.log('res', res.data);
      dispatch({
        type: _types__WEBPACK_IMPORTED_MODULE_1__["MOST_ACTIVE"],
        payload: res.data
      });
      return data;
    }).catch(function (err) {
      console.log('then', err);
    });
  };
};
var getGrowingToday = function getGrowingToday() {
  return function (dispatch, getState) {// return axios.get('https://api.iextrading.com/1.0/stock/market/list/gainers')
    // // return axios.get('https://api.iextrading.com/1.0/stock/market/batch?types=quote')
    //     .then(res => {
    //         console.log('res', res.data);
    //
    //
    //
    //         dispatch({ type: types.GROWING_TODAY, payload:res.data });
    //         return data;
    //     })
    //     .catch(err=>{
    //         console.log('then', err);
    //     });
  };
};

/***/ }),

/***/ "./actions/types.js":
/*!**************************!*\
  !*** ./actions/types.js ***!
  \**************************/
/*! exports provided: FETCH_STOCKS, FETCH_TOP_STOCKS, GROWING_TODAY, GAINERS_LIST, LOSERS_LIST, MOST_ACTIVE, FETCH_NEWS, FETCH_NYT_NEWS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_STOCKS", function() { return FETCH_STOCKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_TOP_STOCKS", function() { return FETCH_TOP_STOCKS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GROWING_TODAY", function() { return GROWING_TODAY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GAINERS_LIST", function() { return GAINERS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOSERS_LIST", function() { return LOSERS_LIST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOST_ACTIVE", function() { return MOST_ACTIVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_NEWS", function() { return FETCH_NEWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_NYT_NEWS", function() { return FETCH_NYT_NEWS; });
var FETCH_STOCKS = "FETCH_STOCKS";
var FETCH_TOP_STOCKS = "FETCH_TOP_STOCKS";
var GROWING_TODAY = "GROWING_TODAY";
/**  Lists **/

var GAINERS_LIST = "GAINERS_LIST";
var LOSERS_LIST = "LOSERS_LIST";
var MOST_ACTIVE = "MOST_ACTIVE";
/**  News **/

var FETCH_NEWS = "FETCH_NEWS";
var FETCH_NYT_NEWS = "FETCH_NYT_NEWS";

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/nataliiabaikina/PhpstormProjects/Stock_next.js/components/Header.js";


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "nav-wrapper  teal lighten-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/",
    className: "brand-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "Logo"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    id: "nav-mobile",
    className: "right hide-on-med-and-down",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/test1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Test 1"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/test2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Test 2")))))));
});

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
var _jsxFileName = "/Users/nataliiabaikina/PhpstormProjects/Stock_next.js/components/Layout.js";



/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Hello"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "icon",
    type: "image/x-icon",
    href: "/static/grow-icon.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1.0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, props.children));
});

/***/ }),

/***/ "./components/MostActives.js":
/*!***********************************!*\
  !*** ./components/MostActives.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StockListRecord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StockListRecord */ "./components/StockListRecord.js");
var _jsxFileName = "/Users/nataliiabaikina/PhpstormProjects/Stock_next.js/components/MostActives.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


/** Components  **/




var GrowingToday =
/*#__PURE__*/
function (_Component) {
  _inherits(GrowingToday, _Component);

  function GrowingToday(props) {
    var _this;

    _classCallCheck(this, GrowingToday);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GrowingToday).call(this, props));
    _this.getTable = _this.getTable.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(GrowingToday, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      setInterval(function () {
        _this2.props.getMostActives();
      }, 2000);
    }
  }, {
    key: "getTable",
    value: function getTable() {
      var lists = this.props.lists;
      if (!lists || !lists.most_active) return false;
      var list = lists.most_active.map(function (stock, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StockListRecord__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: i,
          stock: stock,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        });
      });
      var tableHead = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Symbol"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Last Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Change"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "% Change"));
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, tableHead, list);
    }
  }, {
    key: "render",
    value: function render() {
      var lists = this.props.lists;
      if (!lists || !lists.most_active) return false;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "growing-today",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "list-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Stocks: Most Actives"), this.getTable());
    }
  }]);

  return GrowingToday;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (GrowingToday);

/***/ }),

/***/ "./components/NYTNewsList.js":
/*!***********************************!*\
  !*** ./components/NYTNewsList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StockListRecord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StockListRecord */ "./components/StockListRecord.js");
var _jsxFileName = "/Users/nataliiabaikina/PhpstormProjects/Stock_next.js/components/NYTNewsList.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


/** Components  **/




var NewsRecord = function NewsRecord(props) {
  var data = props.data;
  var imgStyles = {
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundImage: "url(".concat(data.img, ")"),
    display: "block",
    width: "100%",
    height: "135px"
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row news-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s3  ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: data.img,
    style: imgStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col s9  ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, data.headline.main), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, data.snippet), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "blue-text text-darken-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, data.source))));
};

var NYTNewsList =
/*#__PURE__*/
function (_Component) {
  _inherits(NYTNewsList, _Component);

  function NYTNewsList(props) {
    var _this;

    _classCallCheck(this, NYTNewsList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NYTNewsList).call(this, props));
    _this.getTable = _this.getTable.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(NYTNewsList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getNewYorkTimesNews();
    }
  }, {
    key: "getTable",
    value: function getTable() {
      var news = this.props.news;
      if (!news || !news.nyt_news) return false;
      var list = news.nyt_news.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NewsRecord, {
          key: i,
          data: item,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, list);
    }
  }, {
    key: "render",
    value: function render() {
      var news = this.props.news;
      if (!news || !news.nyt_news) return false;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "growing-today",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "list-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "Stocks: Most Actives"), this.getTable());
    }
  }]);

  return NYTNewsList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NYTNewsList);

/***/ }),

/***/ "./components/NewsList.js":
/*!********************************!*\
  !*** ./components/NewsList.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StockListRecord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StockListRecord */ "./components/StockListRecord.js");
var _jsxFileName = "/Users/nataliiabaikina/PhpstormProjects/Stock_next.js/components/NewsList.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }


/** Components  **/




var NewsRecord = function NewsRecord(props) {
  var data = props.data;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "col s12  ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    class: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, data.headline), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "card-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, data.summary), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "blue-text text-darken-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, data.source)))) // <div className="col s12 ">
  //
  // 	<div className="card horizontal">
  // 		<h2 className="header">{data.headline}</h2>
  // 		{/*<span class="card-title">Card Title</span>*/}
  //
  // 		{/*<div className="card-image">*/}
  // 			{/*<img src={`${data.image}.png`}/>*/}
  // 		{/*</div>*/}
  // 		<div className="card-stacked">
  // 			<div className="card-content">
  // 				<p>{data.summary}</p>
  // 				<p className="blue-text text-darken-2">{data.source}</p>
  // 			</div>
  //
  // 		</div>
  // 	</div>
  // </div>
  ;
};

var NewsList =
/*#__PURE__*/
function (_Component) {
  _inherits(NewsList, _Component);

  function NewsList(props) {
    var _this;

    _classCallCheck(this, NewsList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NewsList).call(this, props));
    _this.getTable = _this.getTable.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(NewsList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getNews();
    }
  }, {
    key: "getTable",
    value: function getTable() {
      var news = this.props.news;
      if (!news) return false;
      var list = news.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NewsRecord, {
          key: i,
          data: item,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 59
          },
          __self: this
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, list);
    }
  }, {
    key: "render",
    value: function render() {
      var lists = this.props.lists;
      if (!lists || !lists.most_active) return false;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "growing-today",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "list-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Stocks: Most Actives"), this.getTable());
    }
  }]);

  return NewsList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (NewsList);

/***/ }),

/***/ "./components/StockListRecord.js":
/*!***************************************!*\
  !*** ./components/StockListRecord.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/nataliiabaikina/PhpstormProjects/Stock_next.js/components/StockListRecord.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var StockRecord =
/*#__PURE__*/
function (_Component) {
  _inherits(StockRecord, _Component);

  function StockRecord(props) {
    var _this;

    _classCallCheck(this, StockRecord);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StockRecord).call(this, props));
    _this.state = {
      change_dir: ''
    };
    /**  Events  **/
    // this.getChangeDirection = this.getChangeDirection.bind(this);

    return _this;
  }

  _createClass(StockRecord, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      // console.error('componentDidUpdate');
      var stock = this.props.stock;

      if (prevProps.stock.change !== stock.change) {
        if (stock.change > prevProps.stock.change) {
          this.setState({
            change_dir: 'grow'
          });
        }

        if (stock.change < prevProps.stock.change) {
          this.setState({
            change_dir: 'lose'
          });
        }

        setTimeout(function () {
          _this2.setState({
            change_dir: ''
          });
        }, 500); // this.getChangeDirection('change',prevProps.stock.change,  stock.change);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var stock = this.props.stock;
      var change_dir = this.state.change_dir; // console.error('Render::state', this.state);

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "blue-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, stock.symbol)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, stock.latestPrice), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s3 " + (stock.change >= 0 ? 'green-text' : 'red-text'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: change_dir,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, stock.change >= 0 ? '+' : '', stock.change)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s3 " + (stock.changePercent >= 0 ? 'green-text' : 'red-text'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: change_dir,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, stock.changePercent >= 0 ? '+' : '', stock.changePercent, "%")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "company-name col s12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, stock.companyName));
    }
  }]);

  return StockRecord;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (StockRecord);

/***/ }),

/***/ "./components/YesterdayGainers.js":
/*!****************************************!*\
  !*** ./components/YesterdayGainers.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StockListRecord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StockListRecord */ "./components/StockListRecord.js");
var _jsxFileName = "/Users/nataliiabaikina/PhpstormProjects/Stock_next.js/components/YesterdayGainers.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

 // import GrowingTodayChart from './charts/growingTodayChart';

/** Components  **/




var GrowingToday =
/*#__PURE__*/
function (_Component) {
  _inherits(GrowingToday, _Component);

  function GrowingToday(props) {
    var _this;

    _classCallCheck(this, GrowingToday);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GrowingToday).call(this, props));
    _this.getTable = _this.getTable.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(GrowingToday, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getYesterdayGainers();
    }
  }, {
    key: "getTable",
    value: function getTable() {
      // console.log('getTable', this.props);
      var lists = this.props.lists;
      if (!lists || !lists.gainers) return;
      var list = lists.gainers.map(function (stock, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StockListRecord__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: i,
          stock: stock,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        });
      });
      var tableHead = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Symbol"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "Last Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Change"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "% Change"));
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, tableHead, list);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "growing-today",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "list-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, "Stocks:Gainers"), this.getTable());
    }
  }]);

  return GrowingToday;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (GrowingToday);

/***/ }),

/***/ "./components/YesterdayLosers.js":
/*!***************************************!*\
  !*** ./components/YesterdayLosers.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _StockListRecord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StockListRecord */ "./components/StockListRecord.js");
var _jsxFileName = "/Users/nataliiabaikina/PhpstormProjects/Stock_next.js/components/YesterdayLosers.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

 // import GrowingTodayChart from './charts/growingTodayChart';

/** Components  **/




var GrowingToday =
/*#__PURE__*/
function (_Component) {
  _inherits(GrowingToday, _Component);

  function GrowingToday(props) {
    var _this;

    _classCallCheck(this, GrowingToday);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GrowingToday).call(this, props));
    _this.getTable = _this.getTable.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(GrowingToday, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.getYesterdayLosers();
    }
  }, {
    key: "getTable",
    value: function getTable() {
      // console.log('getTable', this.props);
      var lists = this.props.lists;
      if (!lists || !lists.losers) return;
      var list = lists.losers.map(function (stock, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_StockListRecord__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: i,
          stock: stock,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        });
      });
      var tableHead = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "header row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Symbol"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "Last Price"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, "Change"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s3",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, "% Change"));
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, tableHead, list);
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "growing-today",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
        className: "list-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Stocks:Losers"), this.getTable());
    }
  }]);

  return GrowingToday;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (GrowingToday);

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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./actions/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_YesterdayGainers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/YesterdayGainers */ "./components/YesterdayGainers.js");
/* harmony import */ var _components_YesterdayLosers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/YesterdayLosers */ "./components/YesterdayLosers.js");
/* harmony import */ var _components_MostActives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/MostActives */ "./components/MostActives.js");
/* harmony import */ var _components_NewsList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/NewsList */ "./components/NewsList.js");
/* harmony import */ var _components_NYTNewsList__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/NYTNewsList */ "./components/NYTNewsList.js");
var _jsxFileName = "/Users/nataliiabaikina/PhpstormProjects/Stock_next.js/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



/**  Actions  **/


/**  Components  **/








var index =
/*#__PURE__*/
function (_Component) {
  _inherits(index, _Component);

  function index() {
    _classCallCheck(this, index);

    return _possibleConstructorReturn(this, _getPrototypeOf(index).apply(this, arguments));
  }

  _createClass(index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_NYTNewsList__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col s4",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_MostActives__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_YesterdayGainers__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_YesterdayLosers__WEBPACK_IMPORTED_MODULE_5__["default"], _extends({}, this.props, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }))))));
    }
  }]);

  return index;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    stocks: state.stocks,
    lists: state.lists,
    news: state.news
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  getTopStocks: _actions__WEBPACK_IMPORTED_MODULE_2__["getTopStocks"],
  getGrowingToday: _actions__WEBPACK_IMPORTED_MODULE_2__["getGrowingToday"],
  getYesterdayGainers: _actions__WEBPACK_IMPORTED_MODULE_2__["getYesterdayGainers"],
  getYesterdayLosers: _actions__WEBPACK_IMPORTED_MODULE_2__["getYesterdayLosers"],
  getMostActives: _actions__WEBPACK_IMPORTED_MODULE_2__["getMostActives"],
  getNews: _actions__WEBPACK_IMPORTED_MODULE_2__["getNews"],
  getNewYorkTimesNews: _actions__WEBPACK_IMPORTED_MODULE_2__["getNewYorkTimesNews"]
})(index));

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map