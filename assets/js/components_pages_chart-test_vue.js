/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["components_pages_chart-test_vue"],{

/***/ "../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/chart/line-chart.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/chart/line-chart.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-chartjs */ \"../node_modules/vue-chartjs/es/index.js\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  extends: vue_chartjs__WEBPACK_IMPORTED_MODULE_0__.Line,\n  props: [\"chartData\", \"chartOptions\"],\n  mounted: function mounted() {\n    this.renderChart(this.chartData, this.chartOptions);\n    console.log(\"in chart\");\n    console.log(this.chartData);\n  }\n});\n\n//# sourceURL=webpack:///./components/chart/line-chart.vue?../node_modules/babel-loader/lib/index.js??clonedRuleSet-1%5B0%5D.rules%5B0%5D.use%5B0%5D!../node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/pages/chart-test.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/pages/chart-test.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chart_line_chart_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../chart/line-chart.vue */ \"./components/chart/line-chart.vue\");\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  components: {\n    lineChart: _chart_line_chart_vue__WEBPACK_IMPORTED_MODULE_0__.default\n  },\n  data: function data() {\n    return {\n      chartData: {\n        labels: [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\"],\n        datasets: [{\n          label: \"人數\",\n          data: [2, 10, 5, 9, 0, 6, 20],\n          backgroundColor: this.gradient,\n          borderColor: \"#FFB5B5\",\n          pointBackgroundColor: \"#FFB5B5\"\n        }]\n      },\n      chartOptions: {\n        responsive: true,\n        maintainAspectRatio: false,\n        title: {\n          display: true,\n          text: \"My Data\"\n        }\n      }\n    };\n  }\n});\n\n//# sourceURL=webpack:///./components/pages/chart-test.vue?../node_modules/babel-loader/lib/index.js??clonedRuleSet-1%5B0%5D.rules%5B0%5D.use%5B0%5D!../node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./components/chart/line-chart.vue":
/*!*****************************************!*\
  !*** ./components/chart/line-chart.vue ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _line_chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./line-chart.vue?vue&type=script&lang=js& */ \"./components/chart/line-chart.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"../node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\nvar render, staticRenderFns\n;\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(\n  _line_chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default,\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"components/chart/line-chart.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./components/chart/line-chart.vue?");

/***/ }),

/***/ "./components/pages/chart-test.vue":
/*!*****************************************!*\
  !*** ./components/pages/chart-test.vue ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _chart_test_vue_vue_type_template_id_1ad08387___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chart-test.vue?vue&type=template&id=1ad08387& */ \"./components/pages/chart-test.vue?vue&type=template&id=1ad08387&\");\n/* harmony import */ var _chart_test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chart-test.vue?vue&type=script&lang=js& */ \"./components/pages/chart-test.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"../node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(\n  _chart_test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,\n  _chart_test_vue_vue_type_template_id_1ad08387___WEBPACK_IMPORTED_MODULE_0__.render,\n  _chart_test_vue_vue_type_template_id_1ad08387___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"components/pages/chart-test.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./components/pages/chart-test.vue?");

/***/ }),

/***/ "./components/chart/line-chart.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./components/chart/line-chart.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_line_chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./line-chart.vue?vue&type=script&lang=js& */ \"../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/chart/line-chart.vue?vue&type=script&lang=js&\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_line_chart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); \n\n//# sourceURL=webpack:///./components/chart/line-chart.vue?");

/***/ }),

/***/ "./components/pages/chart-test.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./components/pages/chart-test.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chart_test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./chart-test.vue?vue&type=script&lang=js& */ \"../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/pages/chart-test.vue?vue&type=script&lang=js&\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_chart_test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); \n\n//# sourceURL=webpack:///./components/pages/chart-test.vue?");

/***/ }),

/***/ "./components/pages/chart-test.vue?vue&type=template&id=1ad08387&":
/*!************************************************************************!*\
  !*** ./components/pages/chart-test.vue?vue&type=template&id=1ad08387& ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_chart_test_vue_vue_type_template_id_1ad08387___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_chart_test_vue_vue_type_template_id_1ad08387___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_chart_test_vue_vue_type_template_id_1ad08387___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./chart-test.vue?vue&type=template&id=1ad08387& */ \"../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/pages/chart-test.vue?vue&type=template&id=1ad08387&\");\n\n\n//# sourceURL=webpack:///./components/pages/chart-test.vue?");

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/pages/chart-test.vue?vue&type=template&id=1ad08387&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/pages/chart-test.vue?vue&type=template&id=1ad08387& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    [\n      _c(\"line-chart\", {\n        attrs: { chartData: _vm.chartData, chartOptions: _vm.chartOptions }\n      })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./components/pages/chart-test.vue?../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ })

}]);