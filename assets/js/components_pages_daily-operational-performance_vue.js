/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["components_pages_daily-operational-performance_vue"],{

/***/ "../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/pages/daily-operational-performance.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/pages/daily-operational-performance.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar tableHeader = [\"區域123\", \"銷貨金額(含稅)\", \"預收訂金\", \"未沖訂金\", \"其他收入\", \"沖訂金額\", \"接單業績(含稅)\", \"銷+訂-沖(含稅)\", \"折價券送出金額(含稅)\"];\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      tableHeader: tableHeader,\n      tableData: {}\n    };\n  },\n  mounted: function mounted() {\n    var vm = this;\n    vm.axios.get('../api/1.php').then(function (response) {\n      vm.tableData = response.data;\n      console.log(response);\n    });\n  }\n});\n\n//# sourceURL=webpack:///./components/pages/daily-operational-performance.vue?../node_modules/babel-loader/lib/index.js??clonedRuleSet-1%5B0%5D.rules%5B0%5D.use%5B0%5D!../node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./components/pages/daily-operational-performance.vue":
/*!************************************************************!*\
  !*** ./components/pages/daily-operational-performance.vue ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _daily_operational_performance_vue_vue_type_template_id_6ee1b60b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./daily-operational-performance.vue?vue&type=template&id=6ee1b60b& */ \"./components/pages/daily-operational-performance.vue?vue&type=template&id=6ee1b60b&\");\n/* harmony import */ var _daily_operational_performance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./daily-operational-performance.vue?vue&type=script&lang=js& */ \"./components/pages/daily-operational-performance.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"../node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(\n  _daily_operational_performance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,\n  _daily_operational_performance_vue_vue_type_template_id_6ee1b60b___WEBPACK_IMPORTED_MODULE_0__.render,\n  _daily_operational_performance_vue_vue_type_template_id_6ee1b60b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"components/pages/daily-operational-performance.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./components/pages/daily-operational-performance.vue?");

/***/ }),

/***/ "./components/pages/daily-operational-performance.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./components/pages/daily-operational-performance.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_daily_operational_performance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./daily-operational-performance.vue?vue&type=script&lang=js& */ \"../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/pages/daily-operational-performance.vue?vue&type=script&lang=js&\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_daily_operational_performance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); \n\n//# sourceURL=webpack:///./components/pages/daily-operational-performance.vue?");

/***/ }),

/***/ "./components/pages/daily-operational-performance.vue?vue&type=template&id=6ee1b60b&":
/*!*******************************************************************************************!*\
  !*** ./components/pages/daily-operational-performance.vue?vue&type=template&id=6ee1b60b& ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_daily_operational_performance_vue_vue_type_template_id_6ee1b60b___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_daily_operational_performance_vue_vue_type_template_id_6ee1b60b___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_daily_operational_performance_vue_vue_type_template_id_6ee1b60b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./daily-operational-performance.vue?vue&type=template&id=6ee1b60b& */ \"../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/pages/daily-operational-performance.vue?vue&type=template&id=6ee1b60b&\");\n\n\n//# sourceURL=webpack:///./components/pages/daily-operational-performance.vue?");

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/pages/daily-operational-performance.vue?vue&type=template&id=6ee1b60b&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/pages/daily-operational-performance.vue?vue&type=template&id=6ee1b60b& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\"div\", [\n    _c(\"div\", { staticClass: \"table-responsive\" }, [\n      _c(\"table\", { staticClass: \"table\" }, [\n        _c(\"thead\", [\n          _c(\n            \"tr\",\n            _vm._l(_vm.tableHeader, function(th) {\n              return _c(\"th\", { attrs: { nowrap: \"\" } }, [_vm._v(_vm._s(th))])\n            }),\n            0\n          )\n        ]),\n        _vm._v(\" \"),\n        _c(\n          \"tbody\",\n          _vm._l(_vm.tableData, function(store) {\n            return _c(\n              \"tr\",\n              _vm._l(store, function(data) {\n                return _c(\"td\", [_vm._v(_vm._s(data))])\n              }),\n              0\n            )\n          }),\n          0\n        )\n      ])\n    ])\n  ])\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./components/pages/daily-operational-performance.vue?../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ })

}]);