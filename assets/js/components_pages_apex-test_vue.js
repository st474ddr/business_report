/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["components_pages_apex-test_vue"],{

/***/ "../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/pages/apex-test.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/pages/apex-test.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-apexcharts */ \"../node_modules/vue-apexcharts/dist/vue-apexcharts.js\");\n/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: \"Chart\",\n  components: {\n    apexcharts: (vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default())\n  },\n  data: function data() {\n    return {\n      chartOptions: {\n        chart: {\n          id: \"basic-bar\",\n          animations: {\n            speed: 200\n          }\n        },\n        dataLabels: {\n          enabled: false\n        },\n        plotOptions: {\n          bar: {\n            distributed: true\n          }\n        },\n        xaxis: {\n          categories: [\"1991\", \"1992\", \"1993\", \"1994\", \"1995\"]\n        }\n      },\n      series: [{\n        name: \"series-1\",\n        data: [30, 40, 45, 30, 49]\n      }]\n    };\n  },\n  methods: {\n    updateTheme: function updateTheme(e) {\n      this.chartOptions = {\n        theme: {\n          palette: e.target.value\n        }\n      };\n    }\n  }\n});\n\n//# sourceURL=webpack:///./components/pages/apex-test.vue?../node_modules/babel-loader/lib/index.js??clonedRuleSet-1%5B0%5D.rules%5B0%5D.use%5B0%5D!../node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./components/pages/apex-test.vue":
/*!****************************************!*\
  !*** ./components/pages/apex-test.vue ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _apex_test_vue_vue_type_template_id_2e027c67___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apex-test.vue?vue&type=template&id=2e027c67& */ \"./components/pages/apex-test.vue?vue&type=template&id=2e027c67&\");\n/* harmony import */ var _apex_test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apex-test.vue?vue&type=script&lang=js& */ \"./components/pages/apex-test.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"../node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(\n  _apex_test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,\n  _apex_test_vue_vue_type_template_id_2e027c67___WEBPACK_IMPORTED_MODULE_0__.render,\n  _apex_test_vue_vue_type_template_id_2e027c67___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"components/pages/apex-test.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./components/pages/apex-test.vue?");

/***/ }),

/***/ "./components/pages/apex-test.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./components/pages/apex-test.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_apex_test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./apex-test.vue?vue&type=script&lang=js& */ \"../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/pages/apex-test.vue?vue&type=script&lang=js&\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_apex_test_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); \n\n//# sourceURL=webpack:///./components/pages/apex-test.vue?");

/***/ }),

/***/ "./components/pages/apex-test.vue?vue&type=template&id=2e027c67&":
/*!***********************************************************************!*\
  !*** ./components/pages/apex-test.vue?vue&type=template&id=2e027c67& ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_apex_test_vue_vue_type_template_id_2e027c67___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_apex_test_vue_vue_type_template_id_2e027c67___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_apex_test_vue_vue_type_template_id_2e027c67___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./apex-test.vue?vue&type=template&id=2e027c67& */ \"../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/pages/apex-test.vue?vue&type=template&id=2e027c67&\");\n\n\n//# sourceURL=webpack:///./components/pages/apex-test.vue?");

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/pages/apex-test.vue?vue&type=template&id=2e027c67&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/pages/apex-test.vue?vue&type=template&id=2e027c67& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _c(\n    \"div\",\n    { staticClass: \"example\" },\n    [\n      _c(\"apexcharts\", {\n        attrs: {\n          width: \"100%\",\n          height: \"350\",\n          type: \"bar\",\n          options: _vm.chartOptions,\n          series: _vm.series\n        }\n      })\n    ],\n    1\n  )\n}\nvar staticRenderFns = []\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./components/pages/apex-test.vue?../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ })

}]);