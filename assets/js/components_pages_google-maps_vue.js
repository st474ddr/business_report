/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["components_pages_google-maps_vue"],{

/***/ "../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/pages/google-maps.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/pages/google-maps.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  data: function data() {\n    return {\n      map: null,\n      // 預設經緯度在信義區附近\n      lat: 25.0325917,\n      lng: 121.5624999\n    };\n  },\n  mounted: function mounted() {\n    this.initMap();\n    this.setMarker();\n  },\n  methods: {\n    // 建立地圖\n    initMap: function initMap() {\n      this.map = new google.maps.Map(document.getElementById(\"map\"), {\n        center: {\n          lat: this.lat,\n          lng: this.lng\n        },\n        zoom: 15,\n        maxZoom: 20,\n        minZoom: 3,\n        streetViewControl: false,\n        mapTypeControl: false\n      });\n    },\n    setMarker: function setMarker() {\n      var marker = new google.maps.Marker({\n        position: {\n          lat: this.lat,\n          lng: this.lng\n        },\n        map: this.map\n      });\n    }\n  }\n});\n\n//# sourceURL=webpack:///./components/pages/google-maps.vue?../node_modules/babel-loader/lib/index.js??clonedRuleSet-1%5B0%5D.rules%5B0%5D.use%5B0%5D!../node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ }),

/***/ "./components/pages/google-maps.vue":
/*!******************************************!*\
  !*** ./components/pages/google-maps.vue ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _google_maps_vue_vue_type_template_id_902f9796___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./google-maps.vue?vue&type=template&id=902f9796& */ \"./components/pages/google-maps.vue?vue&type=template&id=902f9796&\");\n/* harmony import */ var _google_maps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-maps.vue?vue&type=script&lang=js& */ \"./components/pages/google-maps.vue?vue&type=script&lang=js&\");\n/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ \"../node_modules/vue-loader/lib/runtime/componentNormalizer.js\");\n\n\n\n\n\n/* normalize component */\n;\nvar component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(\n  _google_maps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,\n  _google_maps_vue_vue_type_template_id_902f9796___WEBPACK_IMPORTED_MODULE_0__.render,\n  _google_maps_vue_vue_type_template_id_902f9796___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,\n  false,\n  null,\n  null,\n  null\n  \n)\n\n/* hot reload */\nif (false) { var api; }\ncomponent.options.__file = \"components/pages/google-maps.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);\n\n//# sourceURL=webpack:///./components/pages/google-maps.vue?");

/***/ }),

/***/ "./components/pages/google-maps.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./components/pages/google-maps.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_google_maps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./google-maps.vue?vue&type=script&lang=js& */ \"../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/pages/google-maps.vue?vue&type=script&lang=js&\");\n /* harmony default export */ __webpack_exports__[\"default\"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_google_maps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); \n\n//# sourceURL=webpack:///./components/pages/google-maps.vue?");

/***/ }),

/***/ "./components/pages/google-maps.vue?vue&type=template&id=902f9796&":
/*!*************************************************************************!*\
  !*** ./components/pages/google-maps.vue?vue&type=template&id=902f9796& ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_google_maps_vue_vue_type_template_id_902f9796___WEBPACK_IMPORTED_MODULE_0__.render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_google_maps_vue_vue_type_template_id_902f9796___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }\n/* harmony export */ });\n/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_google_maps_vue_vue_type_template_id_902f9796___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./google-maps.vue?vue&type=template&id=902f9796& */ \"../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/pages/google-maps.vue?vue&type=template&id=902f9796&\");\n\n\n//# sourceURL=webpack:///./components/pages/google-maps.vue?");

/***/ }),

/***/ "../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/pages/google-maps.vue?vue&type=template&id=902f9796&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options!./components/pages/google-maps.vue?vue&type=template&id=902f9796& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"render\": function() { return /* binding */ render; },\n/* harmony export */   \"staticRenderFns\": function() { return /* binding */ staticRenderFns; }\n/* harmony export */ });\nvar render = function() {\n  var _vm = this\n  var _h = _vm.$createElement\n  var _c = _vm._self._c || _h\n  return _vm._m(0)\n}\nvar staticRenderFns = [\n  function() {\n    var _vm = this\n    var _h = _vm.$createElement\n    var _c = _vm._self._c || _h\n    return _c(\"div\", { staticClass: \"row\" }, [\n      _c(\"div\", { staticClass: \"col-12 col-sm-12\" }, [\n        _c(\"div\", { staticClass: \"card shadow\" }, [\n          _c(\"div\", { staticClass: \"card-header bg-white\" }, [\n            _vm._v(\"Google Maps\")\n          ]),\n          _vm._v(\" \"),\n          _c(\"div\", { staticClass: \"card-body\" }, [\n            _c(\"div\", {\n              staticStyle: { height: \"450px\", width: \"100%\" },\n              attrs: { id: \"map\" }\n            })\n          ])\n        ])\n      ])\n    ])\n  }\n]\nrender._withStripped = true\n\n\n\n//# sourceURL=webpack:///./components/pages/google-maps.vue?../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib/index.js??vue-loader-options");

/***/ })

}]);