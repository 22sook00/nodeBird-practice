webpackHotUpdate_N_E("pages/profile",{

/***/ "./components/FollowList.js":
/*!**********************************!*\
  !*** ./components/FollowList.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/2sook2/Desktop/\\u110B\\u1175\\u11AB\\u1111\\u1173\\u1105\\u1165\\u11AB \\u1100\\u1161\\u11BC\\u110B\\u1174/\\uD83E\\uDD9Creact-nodeBird/front/components/FollowList.js\",\n    _this = undefined;\n\n\n\n\n\n\n\nvar FollowList = function FollowList(_ref) {\n  var header = _ref.header,\n      data = _ref.data;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"List\"], {\n      style: {\n        marginBottom: 20\n      },\n      grid: {\n        gutter: 4,\n        xs: 2,\n        md: 3\n      },\n      size: \"small\",\n      header: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n        children: header\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 17\n      }, _this),\n      loadMore: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(\"div\", {\n        style: {\n          textAlign: 'center',\n          margin: '10px 0'\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Button\"], {\n          children: \"\\uB354\\uBCF4\\uAE30\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 75\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 19\n      }, _this),\n      bordered: true,\n      dataSource: data,\n      renderItem: function renderItem(item) {\n        /*#__PURE__*/\n        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"List\"].Item, {\n          style: {\n            marginTop: 20\n          },\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n            actions: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(StopOutlined, {}, 'stop', false, {\n              fileName: _jsxFileName,\n              lineNumber: 17,\n              columnNumber: 29\n            }, _this)],\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__[\"jsxDEV\"])(antd__WEBPACK_IMPORTED_MODULE_2__[\"Card\"].Meta, {\n              description: item.nickname\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 18,\n              columnNumber: 13\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 17,\n            columnNumber: 11\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 16,\n          columnNumber: 9\n        }, _this);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false);\n};\n\n_c = FollowList;\nFollowList.propTypes = {\n  header: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (FollowList);\n\nvar _c;\n\n$RefreshReg$(_c, \"FollowList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb2xsb3dMaXN0LmpzP2ZhMDIiXSwibmFtZXMiOlsiRm9sbG93TGlzdCIsImhlYWRlciIsImRhdGEiLCJtYXJnaW5Cb3R0b20iLCJndXR0ZXIiLCJ4cyIsIm1kIiwidGV4dEFsaWduIiwibWFyZ2luIiwiaXRlbSIsIm1hcmdpblRvcCIsIm5pY2tuYW1lIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7OztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLE9BQW1CO0FBQUEsTUFBakJDLE1BQWlCLFFBQWpCQSxNQUFpQjtBQUFBLE1BQVZDLElBQVUsUUFBVkEsSUFBVTtBQUNwQyxzQkFBTztBQUFBLDJCQUNMLHFFQUFDLHlDQUFEO0FBQ0UsV0FBSyxFQUFJO0FBQUNDLG9CQUFZLEVBQUc7QUFBaEIsT0FEWDtBQUVFLFVBQUksRUFBSTtBQUFDQyxjQUFNLEVBQUcsQ0FBVjtBQUFhQyxVQUFFLEVBQUcsQ0FBbEI7QUFBcUJDLFVBQUUsRUFBRztBQUExQixPQUZWO0FBR0UsVUFBSSxFQUFHLE9BSFQ7QUFJRSxZQUFNLGVBQUk7QUFBQSxrQkFBTUw7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSlo7QUFLRSxjQUFRLGVBQUk7QUFBSyxhQUFLLEVBQUk7QUFBQ00sbUJBQVMsRUFBRyxRQUFiO0FBQXNCQyxnQkFBTSxFQUFHO0FBQS9CLFNBQWQ7QUFBQSwrQkFBd0QscUVBQUMsMkNBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUxkO0FBTUUsY0FBUSxNQU5WO0FBT0UsZ0JBQVUsRUFBSU4sSUFQaEI7QUFRRSxnQkFBVSxFQUFJLG9CQUFDTyxJQUFELEVBQVE7QUFDcEI7QUFBQSw2RUFBQyx5Q0FBRCxDQUFNLElBQU47QUFBVyxlQUFLLEVBQUk7QUFBQ0MscUJBQVMsRUFBQztBQUFYLFdBQXBCO0FBQUEsaUNBQ0UscUVBQUMseUNBQUQ7QUFBTSxtQkFBTyxFQUFJLGNBQUMscUVBQUMsWUFBRCxNQUFvQixNQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFELENBQWpCO0FBQUEsbUNBQ0UscUVBQUMseUNBQUQsQ0FBTSxJQUFOO0FBQVcseUJBQVcsRUFBSUQsSUFBSSxDQUFDRTtBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLRDtBQWRIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESyxtQkFBUDtBQWtCRCxDQW5CRDs7S0FBTVgsVTtBQXFCTkEsVUFBVSxDQUFDWSxTQUFYLEdBQXVCO0FBQ3JCWCxRQUFNLEVBQUdZLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBREw7QUFFckJiLE1BQUksRUFBR1csaURBQVMsQ0FBQ0csS0FBVixDQUFnQkQ7QUFGRixDQUF2QjtBQUtlZix5RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvRm9sbG93TGlzdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7TGlzdCAsIENhcmQgLEJ1dHRvbn0gZnJvbSAnYW50ZCdcblxuY29uc3QgRm9sbG93TGlzdCA9ICh7aGVhZGVyLGRhdGF9KSA9PiB7XG4gIHJldHVybiA8PlxuICAgIDxMaXN0XG4gICAgICBzdHlsZSA9IHt7bWFyZ2luQm90dG9tIDogMjB9fVxuICAgICAgZ3JpZCA9IHt7Z3V0dGVyIDogNCwgeHMgOiAyLCBtZCA6IDN9fVxuICAgICAgc2l6ZSA9ICdzbWFsbCdcbiAgICAgIGhlYWRlciA9IHs8ZGl2PntoZWFkZXJ9PC9kaXY+fVxuICAgICAgbG9hZE1vcmUgPSB7PGRpdiBzdHlsZSA9IHt7dGV4dEFsaWduIDogJ2NlbnRlcicsbWFyZ2luIDogJzEwcHggMCd9fT48QnV0dG9uPuuNlOuztOq4sDwvQnV0dG9uPjwvZGl2Pn1cbiAgICAgIGJvcmRlcmVkIFxuICAgICAgZGF0YVNvdXJjZSA9IHtkYXRhfVxuICAgICAgcmVuZGVySXRlbSA9IHsoaXRlbSk9PntcbiAgICAgICAgPExpc3QuSXRlbSBzdHlsZSA9IHt7bWFyZ2luVG9wOjIwfX0+XG4gICAgICAgICAgPENhcmQgYWN0aW9ucyA9IHtbPFN0b3BPdXRsaW5lZCBrZXkgPSAnc3RvcCcgLz5dfT5cbiAgICAgICAgICAgIDxDYXJkLk1ldGEgZGVzY3JpcHRpb24gPSB7aXRlbS5uaWNrbmFtZX0vPlxuICAgICAgICAgIDwvQ2FyZD5cbiAgICAgICAgPC9MaXN0Lkl0ZW0+XG4gICAgICB9fVxuICAgID48L0xpc3Q+XG4gICAgPC8+XG59O1xuXG5Gb2xsb3dMaXN0LnByb3BUeXBlcyA9IHtcbiAgaGVhZGVyIDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBkYXRhIDogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb2xsb3dMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/FollowList.js\n");

/***/ })

})