/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["router_root-router_js-router_sync_recursive_js_"],{

/***/ "./router/root-router.js":
/*!*******************************!*\
  !*** ./router/root-router.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar routes = [];\n['test'].forEach(function (m) {\n  return routes = routes.concat(__webpack_require__(\"./router sync recursive ^\\\\..*\\\\.js$\")(\".\".concat(m, \".js\")).default);\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (new VueRouter({\n  routes: routes\n}));\n\n//# sourceURL=webpack:///./router/root-router.js?");

/***/ }),

/***/ "./router/test.js":
/*!************************!*\
  !*** ./router/test.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ([{\n  path: '/',\n  component: function component() {\n    return __webpack_require__.e(/*! import() */ \"components_pages_dashboard_vue\").then(__webpack_require__.bind(__webpack_require__, /*! ../components/pages/dashboard.vue */ \"./components/pages/dashboard.vue\"));\n  },\n  meta: {\n    title: 'dashboard'\n  }\n}, {\n  path: '/foo',\n  component: function component() {\n    return iimport('../components/pages/hello.vue');\n  },\n  meta: {\n    title: 'hello'\n  }\n}]);\n\n//# sourceURL=webpack:///./router/test.js?");

/***/ }),

/***/ "./router sync recursive ^\\..*\\.js$":
/*!*********************************!*\
  !*** ./router/ sync ^\..*\.js$ ***!
  \*********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var map = {\n\t\"./root-router.js\": \"./router/root-router.js\",\n\t\"./test.js\": \"./router/test.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./router sync recursive ^\\\\..*\\\\.js$\";\n\n//# sourceURL=webpack:///./router/_sync_^\\..*\\.js$?");

/***/ })

}]);