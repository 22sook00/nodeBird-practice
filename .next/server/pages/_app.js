module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9hbnRkL2Rpc3QvYW50ZC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/antd/dist/antd.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/configureStore */ \"./store/configureStore.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/2sook2/Desktop/\\u110B\\u1175\\u11AB\\u1111\\u1173\\u1105\\u1165\\u11AB \\u1100\\u1161\\u11BC\\u110B\\u1174/\\uD83E\\uDD9Creact-nodeBird/front/pages/_app.js\";\n\n/*페이지들의 공통되는 것들을 처리할 수 있다.*/\n\n\n\n\n\n\n\n\nconst NodeBird = ({\n  Component\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"meta\", {\n        charSet: \"utf-8\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(\"title\", {\n        children: \"NodeBird\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__[\"jsxDEV\"])(Component, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true);\n};\n\nNodeBird.propTypes = {\n  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_4__[\"default\"].withRedux(NodeBird));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTm9kZUJpcmQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQUNDO0FBQUQsQ0FBRCxLQUFpQjtBQUNoQyxzQkFDRTtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0U7QUFBTSxlQUFPLEVBQUc7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUtFLHFFQUFDLFNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRjtBQUFBLGtCQURGO0FBU0QsQ0FWRDs7QUFXQUQsUUFBUSxDQUFDRSxTQUFULEdBQXFCO0FBQ25CRCxXQUFTLEVBQUdFLGlEQUFTLENBQUNDLFdBQVYsQ0FBc0JDO0FBRGYsQ0FBckI7QUFJZUMsNEhBQU8sQ0FBQ0MsU0FBUixDQUFrQlAsUUFBbEIsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKu2OmOydtOyngOuTpOydmCDqs7XthrXrkJjripQg6rKD65Ok7J2EIOyymOumrO2VoCDsiJgg7J6I64ukLiovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcydcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJ1xuXG5jb25zdCBOb2RlQmlyZCA9ICh7Q29tcG9uZW50fSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldCA9ICd1dGYtOCcvPlxuICAgICAgICA8dGl0bGU+Tm9kZUJpcmQ8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPENvbXBvbmVudC8+XG4gICAgPC8+XG4gICkgIFxufSBcbk5vZGVCaXJkLnByb3BUeXBlcyA9IHtcbiAgQ29tcG9uZW50IDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgoTm9kZUJpcmQpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ \"./reducers/user.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ \"./reducers/post.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n//redux 서버사이드 렌더링을 위한 HYDRATE\n\n\n\n //(이전상태, 액션) => 다음상태\n//reducer 합쳐주는 리덕스 메서드\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"combineReducers\"])({\n  //HYDRATE를 위해서 인덱스를 추가해주는 것이다. 서버사이드렌더링을 위해.\n  index: (state = {}, action) => {\n    switch (action.type) {\n      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"HYDRATE\"]:\n        console.log('HYDRATE', action);\n        return _objectSpread(_objectSpread({}, state), action.payload);\n\n      default:\n        return state;\n    }\n  },\n  user: _user__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  post: _post__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcz9jZThlIl0sIm5hbWVzIjpbInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJ1c2VyIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0NBR0E7QUFDQTs7QUFDQSxNQUFNQSxXQUFXLEdBQUdDLDZEQUFlLENBQUM7QUFDbEM7QUFDQUMsT0FBSyxFQUFHLENBQUNDLEtBQUssR0FBRyxFQUFULEVBQVlDLE1BQVosS0FBdUI7QUFDL0IsWUFBT0EsTUFBTSxDQUFDQyxJQUFkO0FBQ0UsV0FBS0MsMERBQUw7QUFDRUMsZUFBTyxDQUFDQyxHQUFSLENBQVksU0FBWixFQUFzQkosTUFBdEI7QUFDQSwrQ0FBV0QsS0FBWCxHQUFxQkMsTUFBTSxDQUFDSyxPQUE1Qjs7QUFFRjtBQUNFLGVBQU9OLEtBQVA7QUFOSjtBQVFDLEdBWGlDO0FBWWxDTyxxREFaa0M7QUFhbENDLHFEQUFJQTtBQWI4QixDQUFELENBQW5DO0FBZ0JlWCwwRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9yZWR1eCDshJzrsoTsgqzsnbTrk5wg66CM642U66eB7J2EIOychO2VnCBIWURSQVRFXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4J1xuaW1wb3J0IHVzZXIgZnJvbSAnLi91c2VyJ1xuaW1wb3J0IHBvc3QgZnJvbSAnLi9wb3N0J1xuXG4vLyjsnbTsoITsg4Htg5wsIOyVoeyFmCkgPT4g64uk7J2M7IOB7YOcXG4vL3JlZHVjZXIg7ZWp7LOQ7KO864qUIOumrOuNleyKpCDrqZTshJzrk5xcbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgLy9IWURSQVRF66W8IOychO2VtOyEnCDsnbjrjbHsiqTrpbwg7LaU6rCA7ZW07KO864qUIOqyg+ydtOuLpC4g7ISc67KE7IKs7J2065Oc66CM642U66eB7J2EIOychO2VtC5cbiAgaW5kZXggOiAoc3RhdGUgPSB7fSxhY3Rpb24pID0+IHtcbiAgc3dpdGNoKGFjdGlvbi50eXBlKXtcbiAgICBjYXNlIEhZRFJBVEU6XG4gICAgICBjb25zb2xlLmxvZygnSFlEUkFURScsYWN0aW9uKVxuICAgICAgcmV0dXJuIHsuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWR9O1xuICAgIFxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfVxuICB9LFxuICB1c2VyLFxuICBwb3N0LFxufSlcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n//useState 로 썼던 더미데이터를 initialState 에 넣고 대문자로 된 부분은 실제 데이터를 받아서 넣으면 된다.\nconst initialState = {\n  mainPosts: [{\n    //서버에서의 시퀄라이즈 등 다른정보들과 합칠만한 정보는 대문자로 시작하는게 좋다.\n    //서버쪽에서 데이터 어떻게 보낼지 물어봐 제발좀. 아니면 따로 요청하쇼.\n    id: 1,\n    User: {\n      id: 1,\n      nickname: 'sook'\n    },\n    content: '첫번째 게시글 #해시태그 #익스프레스',\n    Images: [{\n      src: 'https://pix10.agoda.net/geo/country/100/3_100_canada_02.jpg?s=1920x'\n    }, {\n      src: 'https://dimg.donga.com/ugc/CDB/SHINDONGA/Article/5e/12/b6/03/5e12b6031b66d2738de6.jpg'\n    }, {\n      src: 'https://d2ur7st6jjikze.cloudfront.net/offer_photos/6469/71877_large_1525743727.jpg?1525743727'\n    }],\n    Comment: [{\n      User: {\n        nickname: '숙이'\n      },\n      content: '돈 많이벌고싶다.'\n    }, {\n      User: {\n        nickname: 'hyeyoung'\n      },\n      content: '여행가고싶다.'\n    }, {\n      User: {\n        nickname: 'kitae'\n      },\n      content: '나도 돈 많이벌고싶다.'\n    }]\n  }],\n  imagePaths: [],\n  //image 업로드 경로들이 저장될것.\n  postAdded: false //게시글 추가가 완료되었을때.\n\n}; //action 객체\n\nconst ADD_POST = 'ADD_POST'; //변수,상수로 따로빼준건 그냥 오타방지.\n\nconst addPost = {\n  type: ADD_POST\n};\nconst dummyPost = {\n  id: 2,\n  content: '더미데이터입니다.',\n  User: {\n    id: 1,\n    nickname: 'babo'\n  },\n  Images: [],\n  Comment: []\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case ADD_POST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        mainPosts: [dummyPost, ...state.mainPosts] //dummyPost 를 앞에 추가해준 이유는 게시글이 앞에서부터 쌓이기때문.\n        //반대가 되면 게시글 제일아래에 추가가 되버린다. \n\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzP2E3ZTMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudCIsImltYWdlUGF0aHMiLCJwb3N0QWRkZWQiLCJBRERfUE9TVCIsImFkZFBvc3QiLCJ0eXBlIiwiZHVtbXlQb3N0IiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNPLE1BQU1BLFlBQVksR0FBRztBQUMxQkMsV0FBUyxFQUFHLENBQUM7QUFDWDtBQUNBO0FBQ0FDLE1BQUUsRUFBRyxDQUhNO0FBS1hDLFFBQUksRUFBRztBQUNMRCxRQUFFLEVBQUcsQ0FEQTtBQUVMRSxjQUFRLEVBQUc7QUFGTixLQUxJO0FBU1hDLFdBQU8sRUFBRyxzQkFUQztBQVdYQyxVQUFNLEVBQUcsQ0FBQztBQUNSQyxTQUFHLEVBQUc7QUFERSxLQUFELEVBRVA7QUFDQUEsU0FBRyxFQUFHO0FBRE4sS0FGTyxFQUlQO0FBQ0FBLFNBQUcsRUFBRztBQUROLEtBSk8sQ0FYRTtBQW1CWEMsV0FBTyxFQUFHLENBQUM7QUFDVEwsVUFBSSxFQUFHO0FBQ0xDLGdCQUFRLEVBQUc7QUFETixPQURFO0FBSVRDLGFBQU8sRUFBRTtBQUpBLEtBQUQsRUFLUjtBQUNBRixVQUFJLEVBQUc7QUFDTEMsZ0JBQVEsRUFBRztBQUROLE9BRFA7QUFJQUMsYUFBTyxFQUFFO0FBSlQsS0FMUSxFQVVSO0FBQ0FGLFVBQUksRUFBRztBQUNMQyxnQkFBUSxFQUFHO0FBRE4sT0FEUDtBQUlBQyxhQUFPLEVBQUU7QUFKVCxLQVZRO0FBbkJDLEdBQUQsQ0FEYztBQXFDMUJJLFlBQVUsRUFBRyxFQXJDYTtBQXFDVDtBQUNqQkMsV0FBUyxFQUFHLEtBdENjLENBc0NQOztBQXRDTyxDQUFyQixDLENBeUNQOztBQUNBLE1BQU1DLFFBQVEsR0FBRyxVQUFqQixDLENBQTZCOztBQUN0QixNQUFNQyxPQUFPLEdBQUc7QUFDckJDLE1BQUksRUFBR0Y7QUFEYyxDQUFoQjtBQUdQLE1BQU1HLFNBQVMsR0FBRztBQUNoQlosSUFBRSxFQUFHLENBRFc7QUFFaEJHLFNBQU8sRUFBRSxXQUZPO0FBR2hCRixNQUFJLEVBQUc7QUFDTEQsTUFBRSxFQUFDLENBREU7QUFFTEUsWUFBUSxFQUFHO0FBRk4sR0FIUztBQU9oQkUsUUFBTSxFQUFHLEVBUE87QUFRaEJFLFNBQU8sRUFBRztBQVJNLENBQWxCOztBQVdBLE1BQU1PLE9BQU8sR0FBRyxDQUFDQyxLQUFLLEdBQUdoQixZQUFULEVBQXVCaUIsTUFBdkIsS0FBa0M7QUFDaEQsVUFBUUEsTUFBTSxDQUFDSixJQUFmO0FBQ0UsU0FBS0YsUUFBTDtBQUNBLDZDQUNLSyxLQURMO0FBRUVmLGlCQUFTLEVBQUcsQ0FBQ2EsU0FBRCxFQUFZLEdBQUdFLEtBQUssQ0FBQ2YsU0FBckIsQ0FGZCxDQUdFO0FBQ0E7O0FBSkY7O0FBTUE7QUFDQSxhQUFPZSxLQUFQO0FBVEY7QUFXRCxDQVpEOztBQWNlRCxzRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL3Bvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL3VzZVN0YXRlIOuhnCDsjbzrjZgg642U66+4642w7J207YSw66W8IGluaXRpYWxTdGF0ZSDsl5Ag64Sj6rOgIOuMgOusuOyekOuhnCDrkJwg67aA67aE7J2AIOyLpOygnCDrjbDsnbTthLDrpbwg67Cb7JWE7IScIOuEo+ycvOuptCDrkJzri6QuXG5leHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBtYWluUG9zdHMgOiBbe1xuICAgIC8v7ISc67KE7JeQ7ISc7J2YIOyLnO2AhOudvOydtOymiCDrk7Eg64uk66W47KCV67O065Ok6rO8IO2Vqey5oOunjO2VnCDsoJXrs7TripQg64yA66y47J6Q66GcIOyLnOyeke2VmOuKlOqyjCDsoovri6QuXG4gICAgLy/shJzrsoTsqr3sl5DshJwg642w7J207YSwIOyWtOuWu+qyjCDrs7Trgrzsp4Ag66y87Ja067SQIOygnOuwnOyigC4g7JWE64uI66m0IOuUsOuhnCDsmpTssq3tlZjsh7wuXG4gICAgaWQgOiAxLFxuXG4gICAgVXNlciA6IHtcbiAgICAgIGlkIDogMSxcbiAgICAgIG5pY2tuYW1lIDogJ3Nvb2snXG4gICAgfSxcbiAgICBjb250ZW50IDogJ+yyq+uyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAj7J217Iqk7ZSE66CI7IqkJyxcblxuICAgIEltYWdlcyA6IFt7XG4gICAgICBzcmMgOiAnaHR0cHM6Ly9waXgxMC5hZ29kYS5uZXQvZ2VvL2NvdW50cnkvMTAwLzNfMTAwX2NhbmFkYV8wMi5qcGc/cz0xOTIweCdcbiAgICB9LHtcbiAgICAgIHNyYyA6ICdodHRwczovL2RpbWcuZG9uZ2EuY29tL3VnYy9DREIvU0hJTkRPTkdBL0FydGljbGUvNWUvMTIvYjYvMDMvNWUxMmI2MDMxYjY2ZDI3MzhkZTYuanBnJ1xuICAgIH0se1xuICAgICAgc3JjIDogJ2h0dHBzOi8vZDJ1cjdzdDZqamlremUuY2xvdWRmcm9udC5uZXQvb2ZmZXJfcGhvdG9zLzY0NjkvNzE4NzdfbGFyZ2VfMTUyNTc0MzcyNy5qcGc/MTUyNTc0MzcyNydcbiAgICB9XSxcblxuICAgIENvbW1lbnQgOiBbe1xuICAgICAgVXNlciA6IHtcbiAgICAgICAgbmlja25hbWUgOiAn7IiZ7J20J1xuICAgICAgfSxcbiAgICAgIGNvbnRlbnQ6ICfrj4gg66eO7J2067KM6rOg7Iu264ukLicsXG4gICAgfSx7XG4gICAgICBVc2VyIDoge1xuICAgICAgICBuaWNrbmFtZSA6ICdoeWV5b3VuZydcbiAgICAgIH0sXG4gICAgICBjb250ZW50OiAn7Jes7ZaJ6rCA6rOg7Iu264ukLicsXG4gICAgfSx7XG4gICAgICBVc2VyIDoge1xuICAgICAgICBuaWNrbmFtZSA6ICdraXRhZSdcbiAgICAgIH0sXG4gICAgICBjb250ZW50OiAn64KY64+EIOuPiCDrp47snbTrsozqs6Dsi7bri6QuJyxcbiAgICB9XVxuICB9XSxcbiAgaW1hZ2VQYXRocyA6IFtdLCAvL2ltYWdlIOyXheuhnOuTnCDqsr3roZzrk6TsnbQg7KCA7J6l65Cg6rKDLlxuICBwb3N0QWRkZWQgOiBmYWxzZSwgLy/qsozsi5zquIAg7LaU6rCA6rCAIOyZhOujjOuQmOyXiOydhOuVjC5cbn1cblxuLy9hY3Rpb24g6rCd7LK0XG5jb25zdCBBRERfUE9TVCA9ICdBRERfUE9TVCc7IC8v67OA7IiYLOyDgeyImOuhnCDrlLDroZzrubzspIDqsbQg6re464OlIOyYpO2DgOuwqeyngC5cbmV4cG9ydCBjb25zdCBhZGRQb3N0ID0ge1xuICB0eXBlIDogQUREX1BPU1QsXG59XG5jb25zdCBkdW1teVBvc3QgPSB7XG4gIGlkIDogMixcbiAgY29udGVudDogJ+uNlOuvuOuNsOydtO2EsOyeheuLiOuLpC4nLFxuICBVc2VyIDoge1xuICAgIGlkOjEsXG4gICAgbmlja25hbWUgOiAnYmFibycsXG4gIH0sXG4gIEltYWdlcyA6IFtdLFxuICBDb21tZW50IDogW10sXG59O1xuXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pID0+IHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSl7XG4gICAgY2FzZSBBRERfUE9TVDogXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgbWFpblBvc3RzIDogW2R1bW15UG9zdCwgLi4uc3RhdGUubWFpblBvc3RzXSxcbiAgICAgIC8vZHVtbXlQb3N0IOulvCDslZ7sl5Ag7LaU6rCA7ZW07KSAIOydtOycoOuKlCDqsozsi5zquIDsnbQg7JWe7JeQ7ISc67aA7YSwIOyMk+ydtOq4sOuVjOusuC5cbiAgICAgIC8v67CY64yA6rCAIOuQmOuptCDqsozsi5zquIAg7KCc7J287JWE656Y7JeQIOy2lOqwgOqwgCDrkJjrsoTrprDri6QuIFxuICAgIH1cbiAgICBkZWZhdWx0IDogXG4gICAgcmV0dXJuIHN0YXRlXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVkdWNlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginAction\", function() { return loginAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutAction\", function() { return logoutAction; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst initialState = {\n  isLoggedIn: false,\n  me: null,\n  signupData: {},\n  loginData: {}\n};\nconst loginAction = data => {\n  return {\n    type: 'LOG_IN',\n    data\n  };\n};\nconst logoutAction = () => {\n  return {\n    type: 'LOG_OUT'\n  };\n};\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case 'LOG_IN':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggedIn: true,\n        // 바꾸고싶은것만 명확하게\n        me: action.data\n      });\n\n    case 'LOG_OUT':\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggedIn: false,\n        // 바꾸고싶은것만 명확하게\n        me: null\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzPzJjMDUiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXNMb2dnZWRJbiIsIm1lIiwic2lnbnVwRGF0YSIsImxvZ2luRGF0YSIsImxvZ2luQWN0aW9uIiwiZGF0YSIsInR5cGUiLCJsb2dvdXRBY3Rpb24iLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBTyxNQUFNQSxZQUFZLEdBQUc7QUFDeEJDLFlBQVUsRUFBRyxLQURXO0FBRXhCQyxJQUFFLEVBQUcsSUFGbUI7QUFHeEJDLFlBQVUsRUFBRyxFQUhXO0FBSXhCQyxXQUFTLEVBQUc7QUFKWSxDQUFyQjtBQU9BLE1BQU1DLFdBQVcsR0FBSUMsSUFBRCxJQUFVO0FBQ25DLFNBQU87QUFDTEMsUUFBSSxFQUFHLFFBREY7QUFFTEQ7QUFGSyxHQUFQO0FBSUQsQ0FMTTtBQU1BLE1BQU1FLFlBQVksR0FBRyxNQUFNO0FBQ2hDLFNBQU87QUFDTEQsUUFBSSxFQUFHO0FBREYsR0FBUDtBQUdELENBSk07O0FBTVAsTUFBTUUsT0FBTyxHQUFHLENBQUNDLEtBQUssR0FBR1YsWUFBVCxFQUF1QlcsTUFBdkIsS0FBa0M7QUFDaEQsVUFBUUEsTUFBTSxDQUFDSixJQUFmO0FBQ0UsU0FBSyxRQUFMO0FBQ0UsNkNBQ0tHLEtBREw7QUFFRVQsa0JBQVUsRUFBRyxJQUZmO0FBRXFCO0FBQ25CQyxVQUFFLEVBQUdTLE1BQU0sQ0FBQ0w7QUFIZDs7QUFLRixTQUFLLFNBQUw7QUFDRSw2Q0FDS0ksS0FETDtBQUVFVCxrQkFBVSxFQUFHLEtBRmY7QUFFc0I7QUFDcEJDLFVBQUUsRUFBRztBQUhQOztBQUtGO0FBQ0EsYUFBT1EsS0FBUDtBQWRGO0FBZ0JELENBakJEOztBQW1CZUQsc0VBQWYiLCJmaWxlIjoiLi9yZWR1Y2Vycy91c2VyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgICBpc0xvZ2dlZEluIDogZmFsc2UsXG4gICAgbWUgOiBudWxsLFxuICAgIHNpZ251cERhdGEgOiB7fSxcbiAgICBsb2dpbkRhdGEgOiB7fSxcbn1cblxuZXhwb3J0IGNvbnN0IGxvZ2luQWN0aW9uID0gKGRhdGEpID0+IHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlIDogJ0xPR19JTicsXG4gICAgZGF0YVxuICB9XG59XG5leHBvcnQgY29uc3QgbG9nb3V0QWN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHR5cGUgOiAnTE9HX09VVCcsXG4gIH1cbn1cblxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpe1xuICAgIGNhc2UgJ0xPR19JTicgOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9nZ2VkSW4gOiB0cnVlLCAvLyDrsJTqvrjqs6Dsi7bsnYDqsoPrp4wg66qF7ZmV7ZWY6rKMXG4gICAgICAgIG1lIDogYWN0aW9uLmRhdGEsXG4gICAgICB9O1xuICAgIGNhc2UgJ0xPR19PVVQnIDpcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnN0YXRlLFxuICAgICAgICBpc0xvZ2dlZEluIDogZmFsc2UsIC8vIOuwlOq+uOqzoOyLtuydgOqyg+unjCDrqoXtmZXtlZjqsoxcbiAgICAgICAgbWUgOiBudWxsLFxuICAgICAgfTtcbiAgICBkZWZhdWx0IDogXG4gICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/index */ \"./reducers/index.js\");\n\n\n\n\n\nconst configureStore = () => {\n  //개발용 배포용 미들웨어가 다르다. npm i redux-devtools-extension\n  // 데이터가 다보여서 보안에 취약할수가 있기 때문에 개발용일때는 기록보이게, 배포용일때는 안보이게 한다. \n  const middlewares = []; //saga || thunk 넣는곳.\n\n  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(...middlewares));\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(_reducers_index__WEBPACK_IMPORTED_MODULE_3__[\"default\"], enhancer);\n  store.dispatch({\n    type: 'CHANGE_NICKNAME',\n    data: '2sook0'\n  });\n  return store;\n};\n\nconst wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"createWrapper\"])(configureStore, {\n  debug: true\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (wrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcz8wMTA5Il0sIm5hbWVzIjpbImNvbmZpZ3VyZVN0b3JlIiwibWlkZGxld2FyZXMiLCJlbmhhbmNlciIsImNvbXBvc2UiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwic3RvcmUiLCJjcmVhdGVTdG9yZSIsInJlZHVjZXIiLCJkaXNwYXRjaCIsInR5cGUiLCJkYXRhIiwid3JhcHBlciIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLGNBQWMsR0FBRyxNQUFNO0FBRTNCO0FBQ0E7QUFDQSxRQUFNQyxXQUFXLEdBQUcsRUFBcEIsQ0FKMkIsQ0FJSjs7QUFDdkIsUUFBTUMsUUFBUSxHQUFHLFFBQ2ZDLFNBRGUsR0FFZkMsb0ZBQW1CLENBQUNDLDZEQUFlLENBQUMsR0FBR0osV0FBSixDQUFoQixDQUZyQjtBQUlBLFFBQU1LLEtBQUssR0FBR0MseURBQVcsQ0FBQ0MsdURBQUQsRUFBU04sUUFBVCxDQUF6QjtBQUNBSSxPQUFLLENBQUNHLFFBQU4sQ0FBZTtBQUNiQyxRQUFJLEVBQUcsaUJBRE07QUFFYkMsUUFBSSxFQUFFO0FBRk8sR0FBZjtBQUlBLFNBQU9MLEtBQVA7QUFDRCxDQWZEOztBQWlCQSxNQUFNTSxPQUFPLEdBQUdDLHdFQUFhLENBQUNiLGNBQUQsRUFBZ0I7QUFDM0NjLE9BQUs7QUFEc0MsQ0FBaEIsQ0FBN0I7QUFHZUYsc0VBQWYiLCJmaWxlIjoiLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlV3JhcHBlcn0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCB7YXBwbHlNaWRkbGV3YXJlLCBjb21wb3NlLCBjcmVhdGVTdG9yZX0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHsgY29tcG9zZVdpdGhEZXZUb29scyB9IGZyb20gJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbic7XG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycy9pbmRleCdcblxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XG5cbiAgLy/qsJzrsJzsmqkg67Cw7Y+s7JqpIOuvuOuTpOybqOyWtOqwgCDri6TrpbTri6QuIG5wbSBpIHJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblxuICAvLyDrjbDsnbTthLDqsIAg64uk67O07Jes7IScIOuztOyViOyXkCDst6jslb3tlaDsiJjqsIAg7J6I6riwIOuVjOusuOyXkCDqsJzrsJzsmqnsnbzrlYzripQg6riw66Gd67O07J206rKMLCDrsLDtj6zsmqnsnbzrlYzripQg7JWI67O07J206rKMIO2VnOuLpC4gXG4gIGNvbnN0IG1pZGRsZXdhcmVzID0gW107Ly9zYWdhIHx8IHRodW5rIOuEo+uKlOqzsy5cbiAgY29uc3QgZW5oYW5jZXIgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXG4gID8gY29tcG9zZShhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKVxuICA6IGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcblxuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsZW5oYW5jZXIpO1xuICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgdHlwZSA6ICdDSEFOR0VfTklDS05BTUUnLFxuICAgIGRhdGE6ICcyc29vazAnXG4gIH0pXG4gIHJldHVybiBzdG9yZTtcbn1cblxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUse1xuICBkZWJ1ZyA6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnLFxufSk7XG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/configureStore.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ })

/******/ });