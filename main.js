/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css"
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --bg: #f5f5f5;\n  --surface: #ffffff;\n  --border: #e0e0e0;\n  --text-primary: #111111;\n  --text-secondary: #666666;\n  --accent: #111111;\n  --danger: #111111;\n}\n\nbody {\n  font-family: 'Georgia', serif;\n  background: var(--bg);\n  color: var(--text-primary);\n  height: 100vh;\n  display: flex;\n}\n\n#root {\n  display: flex;\n  width: 100%;\n  height: 100vh;\n}\n\n/* SIDEBAR */\n#root > div:first-child {\n  width: 260px;\n  min-width: 260px;\n  background: var(--surface);\n  border-right: 1px solid var(--border);\n  display: flex;\n  flex-direction: column;\n  padding: 2rem 1.5rem;\n  gap: 1rem;\n}\n\n#root > div:first-child div {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n  flex: 1;\n}\n\n#root > div:first-child div div {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.6rem 0.8rem;\n  border-radius: 6px;\n  cursor: pointer;\n  font-size: 0.9rem;\n  transition: background 0.15s;\n  flex-direction: row;\n}\n\n#root > div:first-child div div:hover {\n  background: var(--bg);\n}\n\n/* MAIN CONTENT */\n#root > div:nth-child(2) {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  padding: 2.5rem 3rem;\n  gap: 1.5rem;\n  overflow-y: auto;\n}\n\nh2 {\n  font-size: 1.8rem;\n  font-weight: normal;\n  letter-spacing: -0.5px;\n  border-bottom: 1px solid var(--border);\n  padding-bottom: 1rem;\n}\n\n/* TODO ITEMS */\n#root > div:nth-child(2) > div {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n#root > div:nth-child(2) > div > div {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 1.2rem;\n  background: var(--surface);\n  border: 1px solid var(--border);\n  border-radius: 8px;\n  transition: box-shadow 0.15s;\n}\n\n#root > div:nth-child(2) > div > div:hover {\n  box-shadow: 0 2px 8px rgba(0,0,0,0.06);\n}\n\n#root > div:nth-child(2) > div > div span:first-of-type {\n  flex: 1;\n  font-size: 0.95rem;\n}\n\n#root > div:nth-child(2) > div > div span:last-of-type {\n  font-size: 0.8rem;\n  color: var(--text-secondary);\n}\n\n/* BUTTONS */\nbutton {\n  cursor: pointer;\n  border: none;\n  background: none;\n  font-family: inherit;\n}\n\n/* Add Project / Add Todo buttons */\n#root > div:first-child > button,\n#root > div:nth-child(2) > button {\n  padding: 0.6rem 1rem;\n  background: var(--accent);\n  color: white;\n  border-radius: 6px;\n  font-size: 0.85rem;\n  letter-spacing: 0.3px;\n  transition: opacity 0.15s;\n}\n\n#root > div:first-child > button:hover,\n#root > div:nth-child(2) > button:hover {\n  opacity: 0.75;\n}\n\n/* Delete buttons (X) */\n#root > div:first-child div div button,\n#root > div:nth-child(2) > div > div > button {\n  color: var(--text-secondary);\n  font-size: 0.75rem;\n  padding: 0.2rem 0.4rem;\n  border-radius: 4px;\n  transition: color 0.15s;\n}\n\n#root > div:first-child div div button:hover,\n#root > div:nth-child(2) > div > div > button:hover {\n  color: #000;\n}\n\n/* CHECKBOX */\ninput[type=\"checkbox\"] {\n  width: 16px;\n  height: 16px;\n  accent-color: var(--accent);\n  cursor: pointer;\n}\n\n/* MODAL */\n#root > div:nth-child(3) {\n  position: fixed;\n  inset: 0;\n  background: rgba(0,0,0,0.3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 100;\n}\n\n#root > div:nth-child(3) > div {\n  background: var(--surface);\n  border-radius: 12px;\n  padding: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  width: 400px;\n  box-shadow: 0 8px 32px rgba(0,0,0,0.12);\n}\n\n#root > div:nth-child(3) input,\n#root > div:nth-child(3) select {\n  padding: 0.7rem 1rem;\n  border: 1px solid var(--border);\n  border-radius: 6px;\n  font-family: inherit;\n  font-size: 0.9rem;\n  background: var(--bg);\n  outline: none;\n  transition: border-color 0.15s;\n}\n\n#root > div:nth-child(3) input:focus,\n#root > div:nth-child(3) select:focus {\n  border-color: var(--accent);\n}\n\n#root > div:nth-child(3) > div > button:last-child {\n  padding: 0.7rem;\n  background: var(--accent);\n  color: white;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  transition: opacity 0.15s;\n}\n\n#root > div:nth-child(3) > div > button:last-child:hover {\n  opacity: 0.75;\n}\n\n#root > div:nth-child(3) > div > button:first-child {\n  align-self: flex-end;\n  color: var(--text-secondary);\n  font-size: 0.85rem;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/style.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/style.css"
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/style.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n\n\n//# sourceURL=webpack://todo/./src/index.js?\n}");

/***/ },

/***/ "./src/todo.js"
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\nclass todo{\n    constructor(title,description,dueDate,priority){\n        this.title = title\n        this.description = description\n        this.dueDate = dueDate\n        this.priority = priority\n        this.completed = false\n    }\n}\n\nclass project{\n    constructor(name){\n        this.name = name\n        this.todos = []\n    }\n    addTodo(todo){\n        this.todos.push(todo)\n    }\n    removeTodo(index){\n        this.todos.splice(index,1)\n    }\n}\n\nconst appState = {\n    projects : [new project('default')],\n    \n    addProject(name){\n        this.projects.push(new project(name))\n    },\n\n    removeProject(index){\n        this.projects.splice(index,1)\n    },\n\n    getProject(index){\n        return this.projects[index]\n    }\n}\n\nfunction saveToStorage(){\n    localStorage.setItem('appState',JSON.stringify(appState.projects))\n}\n\nfunction loadFromStorage(){\n    const data = localStorage.getItem('appState')\n    if (data){\n        const parsed = JSON.parse(data)\n        appState.projects = parsed.map(p => {\n            const proj = new project(p.name)\n            proj.todos = p.todos.map(t => {\n                const newTodo = new todo(t.title,t.description,t.dueDate,t.priority)\n                newTodo.completed = t.completed\n                return newTodo\n            })\n            return proj\n        })\n    }\n}\n\nloadFromStorage()\n\nconst root = document.querySelector('#root')\nconst sidebar = document.createElement('div')\nconst addButton = document.createElement('button')\nconst projectList = document.createElement('div')\n\nconst mainContent = document.createElement('div')\nconst projectTitle = document.createElement('h2')\nconst todoList = document.createElement('div')\nconst addTodoButton = document.createElement('button')\n\nconst modal = document.createElement('div')\nconst modalOverLay = document.createElement('div')\n\nlet selectedProjectIndex = 0;\n\nfunction setupDOM() {\n  sidebar.appendChild(projectList);\n  sidebar.appendChild(addButton);\n\n  mainContent.appendChild(projectTitle);\n  mainContent.appendChild(todoList);\n  mainContent.appendChild(addTodoButton);\n\n  modal.appendChild(modalOverLay);\n\n  root.appendChild(sidebar);\n  root.appendChild(mainContent);\n  root.appendChild(modal);\n\n  addButton.textContent = 'Add Project';\n  addTodoButton.textContent = 'Add Todo';\n\n  addButton.addEventListener('click', handleAddProject);\n  addTodoButton.addEventListener('click', handleAddTodo);\n\n  modal.style.display = 'none';\n}\n\nsetupDOM();\n\nfunction renderProjects(){\n    projectList.innerHTML = ''\n    appState.projects.forEach((proj,index)=>{\n        const projDiv = document.createElement('div')\n        projDiv.textContent = proj.name\n        projDiv.addEventListener('click',()=> handleSelectProject(index))\n        const deleteBtn = document.createElement('button')\n        deleteBtn.textContent = 'X'\n        deleteBtn.addEventListener('click',(e)=>{\n            e.stopPropagation()\n            handleDeleteProject(index)\n        })\n        projDiv.appendChild(deleteBtn)\n        projectList.appendChild(projDiv) \n    })\n}\n\nfunction renderTodos(project){\n    todoList.innerHTML = ''\n    projectTitle.textContent = project.name\n    project.todos.forEach((todo,index)=>{\n        const todoEl = createTodoElement(todo,index)\n        todoList.appendChild(todoEl)\n    })\n}\n\nfunction createTodoElement(todo,index){\n    const todoDiv = document.createElement('div')\n    const title = document.createElement('span')\n    const dueDate = document.createElement('span')\n    const deleteBtn = document.createElement('button')\n    const checkbox = document.createElement('input')\n\n    checkbox.type = 'checkbox'\n    checkbox.checked = todo.completed\n    checkbox.addEventListener('change',()=>{\n        handleToggleComplete(selectedProjectIndex,index)\n    })\n\n    title.textContent = todo.title\n    dueDate.textContent = todo.dueDate\n    deleteBtn.textContent = 'X'\n    deleteBtn.addEventListener('click',()=>{\n        handleDeleteTodo(selectedProjectIndex,index)\n    })\n\n    todoDiv.appendChild(checkbox)\n    todoDiv.appendChild(title)\n    todoDiv.appendChild(dueDate)\n    todoDiv.appendChild(deleteBtn)\n\n    return todoDiv\n}\n\nfunction handleSelectProject(index){\n    selectedProjectIndex = index\n    renderTodos(appState.getProject(index))\n}\n\nfunction handleAddProject(){\n    const name = prompt('Project name : ')\n    if (name){\n        appState.addProject(name)\n        renderProjects()\n        renderTodos(appState.getProject(selectedProjectIndex))\n        saveToStorage()\n    }\n}\n\nfunction handleDeleteProject(index){\n    appState.removeProject(index)\n    selectedProjectIndex = 0\n    renderProjects()\n    if (appState.projects.length > 0){\n        renderTodos(appState.getProject(0))\n    } else {\n        todoList.innerHTML = ''\n        projectTitle.textContent = ''\n    }\n    saveToStorage()\n}\n\nfunction handleAddTodo(){\n    openModal()\n}\n\nfunction handleDeleteTodo(projectIndex,todoIndex){\n    appState.getProject(projectIndex).removeTodo(todoIndex)\n    renderTodos(appState.getProject(projectIndex))\n    saveToStorage()\n}\n\nfunction handleToggleComplete(projectIndex, todoIndex) {\n  const t = appState.getProject(projectIndex).todos[todoIndex];\n  t.completed = !t.completed;\n  saveToStorage();\n}\n\nfunction openModal() {\n  modal.innerHTML = '';\n  \n  const form = document.createElement('div');\n  const titleInput = document.createElement('input');\n  const descInput = document.createElement('input');\n  const dateInput = document.createElement('input');\n  const prioritySelect = document.createElement('select');\n  const submitBtn = document.createElement('button');\n  const closeBtn = document.createElement('button');\n\n  titleInput.placeholder = 'Title';\n  descInput.placeholder = 'Description';\n  dateInput.type = 'date';\n\n  ['low', 'medium', 'high'].forEach(p => {\n    const option = document.createElement('option');\n    option.value = p;\n    option.textContent = p;\n    prioritySelect.appendChild(option);\n  });\n\n  submitBtn.textContent = 'Add Todo';\n  submitBtn.addEventListener('click', () => {\n    if (titleInput.value) {\n      const newTodo = new todo(\n        titleInput.value,\n        descInput.value,\n        dateInput.value,\n        prioritySelect.value\n      );\n      appState.getProject(selectedProjectIndex).addTodo(newTodo);\n      renderTodos(appState.getProject(selectedProjectIndex));\n      saveToStorage();\n      closeModal();\n    }\n  });\n\n  closeBtn.textContent = 'Cancel';\n  closeBtn.addEventListener('click', closeModal);\n\n  form.appendChild(closeBtn);\n  form.appendChild(titleInput);\n  form.appendChild(descInput);\n  form.appendChild(dateInput);\n  form.appendChild(prioritySelect);\n  form.appendChild(submitBtn);\n  modal.appendChild(form);\n  modal.style.display = 'block';\n}\n\nfunction closeModal() {\n  modal.style.display = 'none';\n  modal.innerHTML = '';\n}\n\nrenderProjects();\nrenderTodos(appState.getProject(0));\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  setupDOM();\n  renderProjects();\n  renderTodos(appState.getProject(0));\n});\n\n//# sourceURL=webpack://todo/./src/todo.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;