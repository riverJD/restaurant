/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --background-color:  rgb(255, 254, 241);\n    --birdblue: #121e6a;\n    --birdlavender: #bebfd4;\n    \n    \n}\n\nbody{\n    background-color: rgb(255, 254, 241);\n   \n    display: flex;\n    flex-direction: column;\n    align-items:  center;\n    font-family: 'Arima', cursive;\n  \n}\n\nh1, h2, h3, p{\n    margin: 0;\n}\n\n#content{\n    \n    height: 100vh;\n    width:  max(330px, 70vw);\n}\n\n#main-image{\n   \n    border: 5px dotted green;\n    height: auto;\n    width: 400px;\n}\n\n.logo{\n   \n    width: max(80px, 20vw);\n    max-width: 300px;\n\n    height: auto;\n    display: flex;\n    \n    grid-area: 1 / 1 / 3 / 2;\n    align-self: center;\n\n}\n\n.logo > img{\n    width: 100%;\n    height: auto;\n}\n\n.header{\n    \n    display: grid;\n\n   \n    justify-content:flex-end;\n    gap: 10px;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: 2fr 1fr;\n\n    text-align: center;\n    font-size: 18px;\n    max-width: 800px;\n\n}\n\n.header > button{\n    display: inline-block;\n    grid-row-start: 2;\n\n    width: 100%;\n    \n    font-family: inherit;\n    background: none;\n    border: none;\n    margin: 0;\n    padding: 0;\n    cursor: pointer;\n\n   \n\n    font-size: clamp(1rem, 3vw, 1.3rem);\n   \n\n    \n}\n\n#title-header{\n    grid-area: 1 / 2 / 2 / -1;\n    font-size: clamp(1.2rem, 12vw, 10rem);\n    text-align: center;\n    \n}\n\n\n#main-content{\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n}\n\n.main{\n    margin-top: 50px;\n}\n\n#menu{\n    margin-top: 5%;\n    display: flex;\n    flex-direction: column;\n\n}\n\n.menu-header{\n    text-align: center;\n     \n}\n\n.menu-subheader{\n    font-style: italic;\n    \n}\n\n\n.menu-item{\n    margin: 5px;\n    \n}\n\n.menu-dish{\n\n    display: grid;\n\n    grid-template-areas: \n    \"name . note\"\n    \"description description price\"\n    \"symbols . price\";\n\n    margin-top: 10px;\n\n}\n\n.menu-name{\n    grid-area: name;\n    color: var(--birdblue, black);\n \n   \n}\n\n.menu-price{\n    grid-area: price;\n    text-align: right;\n    font-weight: bold;\n}\n\n.menu-description{\n    grid-area: description;\n}\n\n.menu-note{\n    \n   grid-area: note;\n\n   font-style: italic;\n}\n\n.menu-symbol{\n    grid-area: symbols;\n}\n\n\n.pictures{\n   \n    border-radius: 5px;\n}\n#table-image{\n    height: auto;\n    width: 300px;\n}\n\n\n#story-page{\n    \n    display: grid;\n    gap: 20px;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n}\n\n.page{\n    display: flex;\n    justify-content: center;\n}\n\n#page-header{\n    margin: 15px 0px 15px 0px;\n    font-weight: 200;\n    font-style: italic;\n    font-size: clamp(1em, 10vw, 3.2rem);\n    \n    \n}\n\n#form-container{\n    margin-top: 10%;\n    width: min(400px, 100%);\n    display: flex;\n    justify-content: center;\n    border: 3px solid var(--birdblue, black);\n    border-radius: 10px;\n    box-shadow: 1px 1px 5px;\n    background-color: var(--birdlavender, rgb(222, 196, 247));\n    padding: 10px;\n}\n\n.form-label{\n    display: flex;\n    flex-direction: column;\n    color: var(--birdblue, black);\n}\n\n.form-input{\n    background-color: var(--background-color, white);\n    border: 3px solid var(--birdblue, black);\n    border-radius: 5px;\n    width: min(90%, 14rem);\n}\n\n#submit-button{\n    margin-top: 10px;\n    font: inherit;\n    font-weight: bold;\n    color: var(--birdblue, black);\n    border: 1px var(--birdblue, black) outset;\n    border-radius: 5px;\n}\n\n#reservation-form{\n    padding: 5px;\n}\n\n#submit-modal{\n    position: fixed;\n    z-index: 1;\n    width: min(100vw, 330px);\n    height: min(100vh, 150px);\n    border: 2px solid var(--birdblue, black);\n    border-radius: 5px;\n    display: none;\n    justify-content: center;\n    align-items: center;\n\n    background-color: var(--birdlavender, black);\n}\n\n#modal-content{\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-weight: 300;\n    font-style: italic;\n    align-items: center;\n    justify-items: center;\n    color:rgba(148, 21, 21, 0.788);\n    width: 80%;\n    height: 60%;\n    display: flex;\n    flex-direction: column;\n}\n\n#submit-text{\n    color: black;\n}\n\n.hidden{\n    background-color: red;\n}\n\n#main-page{\n    display: grid;\n    max-width: 800px;\n    justify-self: center;\n    \n}\n#content{\n    display: flex;;\n    flex-direction: column;\n    align-items: center;\n}\n\n.page-content{\n    margin-top: 5%;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 20px;\n\n}\n\n\n\n\n.photo{\n    margin: 10px;\n    width: min(90%, 300px);\n    height: auto;\n    max-height: 260px;\n\n    border-radius: 4px;\n}\n\n.text-content{\n   \n    font-style: italic;\n    max-width: 80%;\n    text-align: center;\n\n    grid-column-end: -1;\n        \n}\n\n\n\n.no-photo{\n    grid-template-columns: 1fr;\n    text-align: right;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    --background-color:  rgb(255, 254, 241);\n    --birdblue: #121e6a;\n    --birdlavender: #bebfd4;\n    \n    \n}\n\nbody{\n    background-color: rgb(255, 254, 241);\n   \n    display: flex;\n    flex-direction: column;\n    align-items:  center;\n    font-family: 'Arima', cursive;\n  \n}\n\nh1, h2, h3, p{\n    margin: 0;\n}\n\n#content{\n    \n    height: 100vh;\n    width:  max(330px, 70vw);\n}\n\n#main-image{\n   \n    border: 5px dotted green;\n    height: auto;\n    width: 400px;\n}\n\n.logo{\n   \n    width: max(80px, 20vw);\n    max-width: 300px;\n\n    height: auto;\n    display: flex;\n    \n    grid-area: 1 / 1 / 3 / 2;\n    align-self: center;\n\n}\n\n.logo > img{\n    width: 100%;\n    height: auto;\n}\n\n.header{\n    \n    display: grid;\n\n   \n    justify-content:flex-end;\n    gap: 10px;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: 2fr 1fr;\n\n    text-align: center;\n    font-size: 18px;\n    max-width: 800px;\n\n}\n\n.header > button{\n    display: inline-block;\n    grid-row-start: 2;\n\n    width: 100%;\n    \n    font-family: inherit;\n    background: none;\n    border: none;\n    margin: 0;\n    padding: 0;\n    cursor: pointer;\n\n   \n\n    font-size: clamp(1rem, 3vw, 1.3rem);\n   \n\n    \n}\n\n#title-header{\n    grid-area: 1 / 2 / 2 / -1;\n    font-size: clamp(1.2rem, 12vw, 10rem);\n    text-align: center;\n    \n}\n\n\n#main-content{\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n}\n\n.main{\n    margin-top: 50px;\n}\n\n#menu{\n    margin-top: 5%;\n    display: flex;\n    flex-direction: column;\n\n}\n\n.menu-header{\n    text-align: center;\n     \n}\n\n.menu-subheader{\n    font-style: italic;\n    \n}\n\n\n.menu-item{\n    margin: 5px;\n    \n}\n\n.menu-dish{\n\n    display: grid;\n\n    grid-template-areas: \n    \"name . note\"\n    \"description description price\"\n    \"symbols . price\";\n\n    margin-top: 10px;\n\n}\n\n.menu-name{\n    grid-area: name;\n    color: var(--birdblue, black);\n \n   \n}\n\n.menu-price{\n    grid-area: price;\n    text-align: right;\n    font-weight: bold;\n}\n\n.menu-description{\n    grid-area: description;\n}\n\n.menu-note{\n    \n   grid-area: note;\n\n   font-style: italic;\n}\n\n.menu-symbol{\n    grid-area: symbols;\n}\n\n\n.pictures{\n   \n    border-radius: 5px;\n}\n#table-image{\n    height: auto;\n    width: 300px;\n}\n\n\n#story-page{\n    \n    display: grid;\n    gap: 20px;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n}\n\n.page{\n    display: flex;\n    justify-content: center;\n}\n\n#page-header{\n    margin: 15px 0px 15px 0px;\n    font-weight: 200;\n    font-style: italic;\n    font-size: clamp(1em, 10vw, 3.2rem);\n    \n    \n}\n\n#form-container{\n    margin-top: 10%;\n    width: min(400px, 100%);\n    display: flex;\n    justify-content: center;\n    border: 3px solid var(--birdblue, black);\n    border-radius: 10px;\n    box-shadow: 1px 1px 5px;\n    background-color: var(--birdlavender, rgb(222, 196, 247));\n    padding: 10px;\n}\n\n.form-label{\n    display: flex;\n    flex-direction: column;\n    color: var(--birdblue, black);\n}\n\n.form-input{\n    background-color: var(--background-color, white);\n    border: 3px solid var(--birdblue, black);\n    border-radius: 5px;\n    width: min(90%, 14rem);\n}\n\n#submit-button{\n    margin-top: 10px;\n    font: inherit;\n    font-weight: bold;\n    color: var(--birdblue, black);\n    border: 1px var(--birdblue, black) outset;\n    border-radius: 5px;\n}\n\n#reservation-form{\n    padding: 5px;\n}\n\n#submit-modal{\n    position: fixed;\n    z-index: 1;\n    width: min(100vw, 330px);\n    height: min(100vh, 150px);\n    border: 2px solid var(--birdblue, black);\n    border-radius: 5px;\n    display: none;\n    justify-content: center;\n    align-items: center;\n\n    background-color: var(--birdlavender, black);\n}\n\n#modal-content{\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-weight: 300;\n    font-style: italic;\n    align-items: center;\n    justify-items: center;\n    color:rgba(148, 21, 21, 0.788);\n    width: 80%;\n    height: 60%;\n    display: flex;\n    flex-direction: column;\n}\n\n#submit-text{\n    color: black;\n}\n\n.hidden{\n    background-color: red;\n}\n\n#main-page{\n    display: grid;\n    max-width: 800px;\n    justify-self: center;\n    \n}\n#content{\n    display: flex;;\n    flex-direction: column;\n    align-items: center;\n}\n\n.page-content{\n    margin-top: 5%;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 20px;\n\n}\n\n\n\n\n.photo{\n    margin: 10px;\n    width: min(90%, 300px);\n    height: auto;\n    max-height: 260px;\n\n    border-radius: 4px;\n}\n\n.text-content{\n   \n    font-style: italic;\n    max-width: 80%;\n    text-align: center;\n\n    grid-column-end: -1;\n        \n}\n\n\n\n.no-photo{\n    grid-template-columns: 1fr;\n    text-align: right;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/buildpage.js":
/*!**************************!*\
  !*** ./src/buildpage.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bluebird_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bluebird.png */ "./src/bluebird.png");
/* harmony import */ var _blackbird_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blackbird.png */ "./src/blackbird.png");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities.js */ "./src/utilities.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");
/* harmony import */ var _story__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./story */ "./src/story.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main */ "./src/main.js");










// Create website layout


// Create an element and assign any attributes


const build = (() => {

    const content = document.querySelector("#content");
    
    (0,_utilities_js__WEBPACK_IMPORTED_MODULE_2__.getDate)();

    const buildHeader = () => {
        
        const titleText = "bluebird";
        const menuText = "menu";
        const contactText = "reservations";
        const storyText = "our story"

        const header = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_2__.element)('div', {"class": "header" })
        
        // sub-titles

        const title = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_2__.element)('button', {"class": "title", "id": "title-header"});
        const logo = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_2__.element)('div', {"class": "logo"});
        const menu = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_2__.element)('button', {"id": "menu-button", "class": "header-link"});
        const contact = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_2__.element)('button', {"id": "contact-button", "class": "header-link"});
        const story = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_2__.element)('button', {"id": "story-button", "class": "header-link"});
       
           
        title.textContent = titleText;
        menu.textContent = menuText;
        contact.textContent = contactText;
        story.textContent = storyText;

      
        // Logo
        
        //setAttributes(logo, {"class": "logo"})
        
        const mainImage = new Image();
        mainImage.src = _bluebird_png__WEBPACK_IMPORTED_MODULE_0__;
        logo.appendChild(mainImage)


        
        header.appendChild(title);
        header.appendChild(logo);
        header.appendChild(menu);
        header.appendChild(contact);
        header.appendChild(story);
    
      

        return header;

    }
  
    content.appendChild(buildHeader())
    
  

    const buildTemp = () => {

        const tempText = "Welcome to bluebird.";

        const second = " Et malesuada fames ac turpis egestas maecenas pharetra convallis. Arcu non sodales neque sodales. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae.";

        const tempBig = "Mattis rhoncus urna neque viverra justo nec ultrices dui. At auctor urna nunc id cursus metus. Nunc consequat interdum varius sit amet mattis vulputate enim nulla. " 
        const main = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_2__.element)('div', {"id": "main-content", "class": "main",});
        const mainText = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_2__.element)('div', {"id": "main-text", "class": "main",});
        const secondText = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_2__.element)('div', {"id": "second-text", "class": "main",});
        const bbird = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_2__.element)('img', {"width": "100px"});
        bbird.src = _blackbird_png__WEBPACK_IMPORTED_MODULE_1__;

        mainText.textContent = tempBig;
        secondText.textContent = second;
        main.appendChild(mainText);
        main.appendChild(secondText);
        main.appendChild(bbird);

        return main;

    }

 

    const buildPage = (source) => {
        // clear page

        console.log(source)
        if (content.children.length > 1) content.removeChild(content.lastElementChild); 
        let page;
        
        if (source === 'menu'){
            page = (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.buildMenu)();   
           
        }
        if (source === 'contact'){
            page = (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__.buildContact)();
        }
        if (source === 'story'){
            page = (0,_story__WEBPACK_IMPORTED_MODULE_5__.buildStory)();
        }

        if (source === 'main'){
            page = (0,_main__WEBPACK_IMPORTED_MODULE_6__.buildMain)();
        }


        content.appendChild(page);
        
    }

    buildPage('main');
   

    console.log(content);

    
    return {buildPage}
// Creates a new element and flexibly assignes attributes;


})();



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (build);


/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildContact": () => (/* binding */ buildContact)
/* harmony export */ });
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ "./src/utilities.js");


const buildContact = () => {

    const OPENTIME = "16:00";
    const CLOSETIME = "21:00";


    const page = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('div', {"class": "page"})


    // Create form
    const formContainer = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('div', {"id": "form-container"});
    const form = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('form', {"id": "reservation-form"});

    const nameLabel = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('label', {"for": "name", "class": "form-label"});
    nameLabel.textContent = "Full Name"
    const name = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('input', {"type": "text", "class": "form-input", "name": "name", "id": "form_name", "required": "", "placeholder": "John Smith" })
    nameLabel.appendChild(name);

    const dateLabel = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('label', {"for": "date", "class": "form-label"});
    dateLabel.textContent = "Date";
    const today = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.getDate)();
    const date = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)("input", {"type": "date", "class": "form-input", "name": "name", "id": "form_date", "min": today, "required": ""});
    dateLabel.appendChild(date);

    const timeLabel = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('label', {"for": "time", "class": "form-label"});
    timeLabel.textContent = "Time";
    const time = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('input', {"type": "time", "class": "form-input", "name": "time", "id": "form_time", "value": "16:00",  "min": OPENTIME, "max": CLOSETIME,"required": ""});
    timeLabel.appendChild(time);

    const phoneLabel = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('label', {"for": "phone", "class": "form-label"});
    phoneLabel.textContent = "Phone Number";
    const phone = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('input', {"type": "tel", "class": "form-input", "name": "phone", "id": "form_phone", "maxlength": 12, "placeholder": "555-210-3154", "required": ""})
    ;(0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.formatPhone)(phone);
    phoneLabel.appendChild(phone);

    const submit = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)("input", {"type": "submit", "class": "button", "id": "submit-button"});

    const submitModal = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)("div", {"class": "modal hidden", "id": "submit-modal"});
    const modalContent = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)("div", {"id": "modal-content"});
    const modalHeader = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)("h2", {"class": "modal-item", "id": "submit-header"});
    const modalText = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)("p", {"class": "modal-item", "id": "submit-text"});

    modalHeader.textContent = "Reservation Unavailible";
    modalText.textContent = "Please check again soon"
    
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalText);
    submitModal.appendChild(modalContent)
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        submitModal.style.display = 'flex';

    })
  
    // Attach form elements 
    form.appendChild(nameLabel);
    form.appendChild(dateLabel);
    form.appendChild(timeLabel);
    form.appendChild(phoneLabel);
    form.appendChild(submit);

 
    formContainer.appendChild(form);
    page.appendChild(formContainer);
    page.appendChild(submitModal);

    return page;
}



/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildMain": () => (/* binding */ buildMain)
/* harmony export */ });
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ "./src/utilities.js");
/* harmony import */ var _table_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table.jpg */ "./src/table.jpg");
/* harmony import */ var _farmbird_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./farmbird.jpg */ "./src/farmbird.jpg");
/* harmony import */ var _farmtext_txt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./farmtext.txt */ "./src/farmtext.txt");
/* harmony import */ var _welcome_txt__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome.txt */ "./src/welcome.txt");







const buildMain = () => {


    const page = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('div', {"class": "page", "id": "main-page"})
    
    const pageHeader = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('h1', {"class": "menu-header", "id": "page-header"});
    pageHeader.textContent = "welcome to bluebird"

    // Create a section of content, with text and image (optional);    
    const createContent = (name, content, photo, first) => {

        const container = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('div', {"class": "page-content", 'id': `${name}-content`});
        const text = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('div', {"class": "text-content content", "id": `${name}-text`});
        text.textContent = content;



        if (photo != null){
            const picture = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('img', {"class": "photo", "id": `${name}-photo`, "src": photo})
            container.appendChild(picture);
        }
        else{
            container.classList.add("no-photo");
        }
        
        if (first === 'text'){
            console.log(first);
            text.classList.add('first')
        }
        container.appendChild(text);
        return container;
    }

    const welcome = createContent("welcome", _welcome_txt__WEBPACK_IMPORTED_MODULE_4__);
    const table = createContent("table", "Our space is very limited, and reservations are required. Please call ahead if you have any specific dietary restrictions.", _table_jpg__WEBPACK_IMPORTED_MODULE_1__)
    const farm = createContent("farm",_farmtext_txt__WEBPACK_IMPORTED_MODULE_3__, _farmbird_jpg__WEBPACK_IMPORTED_MODULE_2__, "text");
    // farm contents
    /* const farmContent = element('div', {"class": 'page-content', "id": "farm-content"});
    const farm = element('img', {"class": "photo", "id": "farm-photo", "src": birdData});
    const farmText = element('div', {"class": "text-content content", "id": "farm-text"});
    farmText.textContent = "A number of wild bluebirds call our farm home, and we've taken inspiration from them in our dishes developed right from our garden."                
    farmContent.appendChild(farm);
    farmContent.appendChild(farmText); */
    
   
    page.appendChild(pageHeader);
    page.appendChild(welcome);
    page.appendChild(farm);
    page.appendChild(table);
    page.id = "main-page";



    console.log(page);
    return page;

}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildMenu": () => (/* binding */ buildMenu)
/* harmony export */ });
/* harmony import */ var _menu_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.json */ "./src/menu.json");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utilities.js */ "./src/utilities.js");





//console.log(menuData.dishes);
const buildMenu = () => {
    
    const menu = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.element)('div', {"id": "menu"});
    const menuHeader = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.element)('h1', {"class": "menu-header"});
    menuHeader.textContent = "menu"

    // menu categories
    const starter = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.element)('div', {"id": "starters"});
    const starterHeader = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.element)('h2', {"id": "starter-header", "class": "menu-subheader"})
    starterHeader.textContent = "starter"

    const main = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.element)('div', {"id": "mains"})
    const mainHeader = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.element)('h2', {"id": "menu-header", "class": "menu-subheader"})
    mainHeader.textContent = "main"

    const dessert = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.element)('div', {"id": "desserts"});
    const dessertHeader = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.element)('h2', {"id": "menu-header", "class": "menu-subheader"})
    dessertHeader.textContent = "dessert";
  
    starter.appendChild(starterHeader);
    main.appendChild(mainHeader);
    dessert.appendChild(dessertHeader);

    menu.appendChild(menuHeader);
    menu.appendChild(starter);
    menu.appendChild(main);
    menu.appendChild(dessert);

    // read dish from JSON
    const buildDish = (item) => {

        const dish = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.element)('div', {"class": "menu-dish "});
        const name = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.element)('h3', {"class": "menu-name menu-item", "id": `menu-${item.name}`});
        const price = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.element)('p', {"class": "menu-price menu-item"});
        const desc = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.element)('p', {"class": "menu-description menu-item"});
        const note = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.element)('p', {"class": "menu-note menu-item"});
        const symbol = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.element)('div', {"class": "menu-symbol menu-item"});
        
        name.textContent = item.name;
        price.textContent = item.price;
        desc.textContent = item.description;
        note.textContent = item.note;
        symbol.classList.add(`${item.symbol}`)

        dish.appendChild(name);
        dish.appendChild(price);
        dish.appendChild(desc);
        dish.appendChild(note);
        dish.appendChild(symbol);

                
      

        return dish;
        
    }

    for (let item of _menu_json__WEBPACK_IMPORTED_MODULE_0__.dishes){

        // Attach menu items to appropriate category
        switch(item.type) {
           
  
            case 'starter':
                
                starter.appendChild(buildDish(item));
                continue;

            case 'main':
                main.appendChild(buildDish(item));
                continue;
            case 'dessert':
                console.log(item.description)
                dessert.appendChild(buildDish(item));
                continue;    
     
            default: 
            console.log("menu item did not match know category, verify dish type")
        
            break;
        }
}

return menu;

}






/***/ }),

/***/ "./src/story.js":
/*!**********************!*\
  !*** ./src/story.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildStory": () => (/* binding */ buildStory)
/* harmony export */ });
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ "./src/utilities.js");
/* harmony import */ var _story_txt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./story.txt */ "./src/story.txt");
/* harmony import */ var _table_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table.jpg */ "./src/table.jpg");





const buildStory = () => {

    const page = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('div', {"id": "story-page"});

    const table = new Image();
    table.src = _table_jpg__WEBPACK_IMPORTED_MODULE_2__;
    table.id = "table-image";
    table.classList.add("pictures");

    page.appendChild(table);

    const story = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('div');
   
    story.textContent = _story_txt__WEBPACK_IMPORTED_MODULE_1__;

    page.appendChild(story);

    return page;
}







/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "element": () => (/* binding */ createElement),
/* harmony export */   "formatPhone": () => (/* binding */ formatPhone),
/* harmony export */   "getDate": () => (/* binding */ getDate),
/* harmony export */   "setAttributes": () => (/* binding */ setAttributes)
/* harmony export */ });
// Helper functions
// Restaurant page


const createElement = (type, attributes) => {
    
    const newElement = document.createElement(`${type}`);
    if (attributes == null) return newElement;
    setAttributes(newElement, attributes);
    return newElement;
}

const getDate = () => {

    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; // Index at zero
    const yyyy = today.getFullYear();

    if (dd < 10){
        dd = '0' + dd;
    }
    if (mm < 10){
        mm = '0' + mm;
    }

    today = `${yyyy}-${mm}-${dd}`;

    return today;
}

const formatPhone = (input) => {
    const phoneFormater = input;
    console.log
    phoneFormater.addEventListener('keyup', (e) => {

        // Remove anything that isn't a number
        let phoneNumber = phoneFormater.value.replace(/\D/g,'');
        
        let inputSize = phoneNumber.length;
        // Ignore delete/backspace so user can delete number 
        if (e.key == 'Backspace' || e.key == 'Delete') return;
        

        if (inputSize >= 3 && inputSize < 7 && e.key != 'Backspace'){
            phoneNumber = phoneNumber.substring(0,3) + '-' + phoneNumber.substring(3)
        }
        else if (inputSize >= 7){
            phoneNumber = phoneNumber.substring(0,3) + '-' + phoneNumber.substring(3,6) + '-' + phoneNumber.substring(6)
        }


        phoneFormater.value = phoneNumber;
        phoneFormater.setCustomValidity('');
    })
    
}


function setAttributes(element, attributes)
{
    Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value)
    });
}






/***/ }),

/***/ "./src/blackbird.png":
/*!***************************!*\
  !*** ./src/blackbird.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a97778e2347d54f2dcc8.png";

/***/ }),

/***/ "./src/bluebird.png":
/*!**************************!*\
  !*** ./src/bluebird.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "175beeb26b629a8d47df.png";

/***/ }),

/***/ "./src/farmbird.jpg":
/*!**************************!*\
  !*** ./src/farmbird.jpg ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "af41f4bf515bef9f0cfb.jpg";

/***/ }),

/***/ "./src/table.jpg":
/*!***********************!*\
  !*** ./src/table.jpg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e72148db99b0f32c5b7d.jpg";

/***/ }),

/***/ "./src/farmtext.txt":
/*!**************************!*\
  !*** ./src/farmtext.txt ***!
  \**************************/
/***/ ((module) => {

module.exports = "Bluebird is focused on sharing the fresh ingredients that we grow in our gardens and forage throughout the local area.\nWe source all ingredients regionally, and as many as we possibly can at the farm. \n\nA number of wild bluebirds call our farm home, and we've taken inspiration from them in our dishes developed right from our garden. They are a common sight near our open patio.\n";

/***/ }),

/***/ "./src/story.txt":
/*!***********************!*\
  !*** ./src/story.txt ***!
  \***********************/
/***/ ((module) => {

module.exports = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Netus et malesuada fames ac turpis egestas sed tempus urna. Tincidunt arcu non sodales neque. Elementum curabitur vitae nunc sed velit dignissim sodales ut. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Maecenas pharetra convallis posuere morbi leo urna molestie at. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Ipsum dolor sit amet consectetur adipiscing. Velit scelerisque in dictum non consectetur a. Sagittis orci a scelerisque purus semper eget. Et tortor consequat id porta nibh venenatis. Massa id neque aliquam vestibulum morbi. Massa tincidunt dui ut ornare lectus sit amet est. Eu nisl nunc mi ipsum faucibus vitae aliquet. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat. Quam id leo in vitae turpis massa sed elementum. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet.\n\nEget mi proin sed libero enim sed faucibus. Ultricies integer quis auctor elit sed vulputate. Porta lorem mollis aliquam ut porttitor leo a diam. Eu augue ut lectus arcu bibendum at varius vel pharetra. Id nibh tortor id aliquet lectus proin nibh nisl. Turpis massa tincidunt dui ut ornare lectus sit amet. Odio morbi quis commodo odio. Scelerisque in dictum non consectetur. Sodales ut eu sem integer. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Sed augue lacus viverra vitae congue eu. A cras semper auctor neque vitae tempus. Sagittis id consectetur purus ut. Eget nunc scelerisque viverra mauris. Malesuada fames ac turpis egestas integer eget aliquet. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. In egestas erat imperdiet sed.";

/***/ }),

/***/ "./src/welcome.txt":
/*!*************************!*\
  !*** ./src/welcome.txt ***!
  \*************************/
/***/ ((module) => {

module.exports = "We are a true farm-to-table restaurant serving award winning cuisine in the greater Austin area. \nAll of our dishes are vegetarian, but you do not need to be to enjoy them. ";

/***/ }),

/***/ "./src/menu.json":
/*!***********************!*\
  !*** ./src/menu.json ***!
  \***********************/
/***/ ((module) => {

module.exports = JSON.parse('{"dishes":[{"name":"happy goat","type":"starter","description":"crusty bread, goat cheese two ways, blueberry jam","price":12,"symbols":"gluten","note":""},{"name":"the taco","type":"starter","description":"wild mushroom, fresh cheese, habanero salsa","price":8,"symbols":"","note":""},{"name":"nest","type":"main","description":"quail eggs, woodsmoke, dewberry reduction","price":25,"symbols":"gluten","note":""},{"name":"carrot","type":"main","description":"stuffed pasta, mashed carrot, sweet potato and pumpkin sauce","price":21,"symbols":"gluten","note":""},{"name":"smoked tofu","type":"main","description":"blackened corn, soured cream","price":22,"symbols":"gluten","note":""},{"name":"three pepper","type":"main","description":"stuffed sweet pepper with charred jalapeno, wild chiltepin","price":19,"symbols":"spicy","note":""},{"name":"grape pie","type":"dessert","description":"mustang grapes, walnut, rum crust","price":12,"symbols":"gluten","note":" "},{"name":"ginger ice cream","type":"dessert","description":"blueberries, cinnamon cake","price":9,"symbols":"gluten","note":" "}]}');

/***/ })

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _buildpage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildpage.js */ "./src/buildpage.js");




const initialize = () => {


    const menuButton = document.querySelector("#menu-button");
    menuButton.addEventListener('click', () => {
        _buildpage_js__WEBPACK_IMPORTED_MODULE_1__["default"].buildPage('menu');
    })

    const contactButton = document.querySelector("#contact-button");
    contactButton.addEventListener('click', () => {
        _buildpage_js__WEBPACK_IMPORTED_MODULE_1__["default"].buildPage('contact');
    })

    const storyButton = document.querySelector('#story-button');
    storyButton.addEventListener('click', () => {
        _buildpage_js__WEBPACK_IMPORTED_MODULE_1__["default"].buildPage('story')
    })

    const mainButton = document.querySelector('#title-header');
    mainButton.addEventListener('click', () => {
        _buildpage_js__WEBPACK_IMPORTED_MODULE_1__["default"].buildPage('main');
    })
    
    
    
    
   


}

initialize();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsWUFBWSxjQUFjLGFBQWEsV0FBVyxhQUFhLE9BQU8sS0FBSyxZQUFZLGNBQWMsWUFBWSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsYUFBYSxlQUFlLE9BQU8sS0FBSyxZQUFZLGFBQWEsY0FBYyxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxhQUFhLFFBQVEsS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sUUFBUSxjQUFjLE9BQU8sS0FBSyxVQUFVLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxRQUFRLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsZUFBZSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGNBQWMsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxZQUFZLFNBQVMsS0FBSyxVQUFVLFlBQVksV0FBVyxhQUFhLGFBQWEsT0FBTyxNQUFN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Q0E7QUFDQSxRQUFRLCtEQUFlO0FBQ3ZCLEtBQUs7O0FBRUw7QUFDQTtBQUNBLFFBQVEsK0RBQWU7QUFDdkIsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsUUFBUSwrREFBZTtBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEsYSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9idWlsZHBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdG9yeS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogIHJnYigyNTUsIDI1NCwgMjQxKTtcXG4gICAgLS1iaXJkYmx1ZTogIzEyMWU2YTtcXG4gICAgLS1iaXJkbGF2ZW5kZXI6ICNiZWJmZDQ7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU0LCAyNDEpO1xcbiAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogIGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdBcmltYScsIGN1cnNpdmU7XFxuICBcXG59XFxuXFxuaDEsIGgyLCBoMywgcHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jY29udGVudHtcXG4gICAgXFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAgbWF4KDMzMHB4LCA3MHZ3KTtcXG59XFxuXFxuI21haW4taW1hZ2V7XFxuICAgXFxuICAgIGJvcmRlcjogNXB4IGRvdHRlZCBncmVlbjtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogNDAwcHg7XFxufVxcblxcbi5sb2dve1xcbiAgIFxcbiAgICB3aWR0aDogbWF4KDgwcHgsIDIwdncpO1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcblxcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIFxcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMyAvIDI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXG59XFxuXFxuLmxvZ28gPiBpbWd7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgIFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyO1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG5cXG59XFxuXFxuLmhlYWRlciA+IGJ1dHRvbntcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIFxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICBcXG5cXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAzdncsIDEuM3JlbSk7XFxuICAgXFxuXFxuICAgIFxcbn1cXG5cXG4jdGl0bGUtaGVhZGVye1xcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIC0xO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEuMnJlbSwgMTJ2dywgMTByZW0pO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG5cXG4jbWFpbi1jb250ZW50e1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubWFpbntcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuI21lbnV7XFxuICAgIG1hcmdpbi10b3A6IDUlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbn1cXG5cXG4ubWVudS1oZWFkZXJ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgIFxcbn1cXG5cXG4ubWVudS1zdWJoZWFkZXJ7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgXFxufVxcblxcblxcbi5tZW51LWl0ZW17XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBcXG59XFxuXFxuLm1lbnUtZGlzaHtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG5cXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJuYW1lIC4gbm90ZVxcXCJcXG4gICAgXFxcImRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIHByaWNlXFxcIlxcbiAgICBcXFwic3ltYm9scyAuIHByaWNlXFxcIjtcXG5cXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG5cXG59XFxuXFxuLm1lbnUtbmFtZXtcXG4gICAgZ3JpZC1hcmVhOiBuYW1lO1xcbiAgICBjb2xvcjogdmFyKC0tYmlyZGJsdWUsIGJsYWNrKTtcXG4gXFxuICAgXFxufVxcblxcbi5tZW51LXByaWNle1xcbiAgICBncmlkLWFyZWE6IHByaWNlO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tZW51LWRlc2NyaXB0aW9ue1xcbiAgICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcbn1cXG5cXG4ubWVudS1ub3Rle1xcbiAgICBcXG4gICBncmlkLWFyZWE6IG5vdGU7XFxuXFxuICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ubWVudS1zeW1ib2x7XFxuICAgIGdyaWQtYXJlYTogc3ltYm9scztcXG59XFxuXFxuXFxuLnBpY3R1cmVze1xcbiAgIFxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbiN0YWJsZS1pbWFnZXtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMzAwcHg7XFxufVxcblxcblxcbiNzdG9yeS1wYWdle1xcbiAgICBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxufVxcblxcbi5wYWdle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3BhZ2UtaGVhZGVye1xcbiAgICBtYXJnaW46IDE1cHggMHB4IDE1cHggMHB4O1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMWVtLCAxMHZ3LCAzLjJyZW0pO1xcbiAgICBcXG4gICAgXFxufVxcblxcbiNmb3JtLWNvbnRhaW5lcntcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcbiAgICB3aWR0aDogbWluKDQwMHB4LCAxMDAlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJpcmRibHVlLCBibGFjayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iaXJkbGF2ZW5kZXIsIHJnYigyMjIsIDE5NiwgMjQ3KSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5mb3JtLWxhYmVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBjb2xvcjogdmFyKC0tYmlyZGJsdWUsIGJsYWNrKTtcXG59XFxuXFxuLmZvcm0taW5wdXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IsIHdoaXRlKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYmlyZGJsdWUsIGJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogbWluKDkwJSwgMTRyZW0pO1xcbn1cXG5cXG4jc3VibWl0LWJ1dHRvbntcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB2YXIoLS1iaXJkYmx1ZSwgYmxhY2spO1xcbiAgICBib3JkZXI6IDFweCB2YXIoLS1iaXJkYmx1ZSwgYmxhY2spIG91dHNldDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jcmVzZXJ2YXRpb24tZm9ybXtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4jc3VibWl0LW1vZGFse1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHdpZHRoOiBtaW4oMTAwdncsIDMzMHB4KTtcXG4gICAgaGVpZ2h0OiBtaW4oMTAwdmgsIDE1MHB4KTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmlyZGJsdWUsIGJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmlyZGxhdmVuZGVyLCBibGFjayk7XFxufVxcblxcbiNtb2RhbC1jb250ZW50e1xcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6cmdiYSgxNDgsIDIxLCAyMSwgMC43ODgpO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3N1Ym1pdC10ZXh0e1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5oaWRkZW57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuI21haW4tcGFnZXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIFxcbn1cXG4jY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDs7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wYWdlLWNvbnRlbnR7XFxuICAgIG1hcmdpbi10b3A6IDUlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxuICAgIGdhcDogMjBweDtcXG5cXG59XFxuXFxuXFxuXFxuXFxuLnBob3Rve1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHdpZHRoOiBtaW4oOTAlLCAzMDBweCk7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgbWF4LWhlaWdodDogMjYwcHg7XFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuXFxuLnRleHQtY29udGVudHtcXG4gICBcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBtYXgtd2lkdGg6IDgwJTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcblxcbiAgICBncmlkLWNvbHVtbi1lbmQ6IC0xO1xcbiAgICAgICAgXFxufVxcblxcblxcblxcbi5uby1waG90b3tcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksdUNBQXVDO0lBQ3ZDLG1CQUFtQjtJQUNuQix1QkFBdUI7OztBQUczQjs7QUFFQTtJQUNJLG9DQUFvQzs7SUFFcEMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsNkJBQTZCOztBQUVqQzs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isd0JBQXdCO0FBQzVCOztBQUVBOztJQUVJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxzQkFBc0I7SUFDdEIsZ0JBQWdCOztJQUVoQixZQUFZO0lBQ1osYUFBYTs7SUFFYix3QkFBd0I7SUFDeEIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLGFBQWE7OztJQUdiLHdCQUF3QjtJQUN4QixTQUFTO0lBQ1QscUNBQXFDO0lBQ3JDLDJCQUEyQjs7SUFFM0Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjs7SUFFakIsV0FBVzs7SUFFWCxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtJQUNWLGVBQWU7Ozs7SUFJZixtQ0FBbUM7Ozs7QUFJdkM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIscUNBQXFDO0lBQ3JDLGtCQUFrQjs7QUFFdEI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjs7QUFFMUI7O0FBRUE7SUFDSSxrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksa0JBQWtCOztBQUV0Qjs7O0FBR0E7SUFDSSxXQUFXOztBQUVmOztBQUVBOztJQUVJLGFBQWE7O0lBRWI7OztxQkFHaUI7O0lBRWpCLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNkJBQTZCOzs7QUFHakM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTs7R0FFRyxlQUFlOztHQUVmLGtCQUFrQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBR0E7O0lBRUksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7O0FBR0E7O0lBRUksYUFBYTtJQUNiLFNBQVM7SUFDVCw0REFBNEQ7QUFDaEU7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUNBQW1DOzs7QUFHdkM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsd0NBQXdDO0lBQ3hDLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIseURBQXlEO0lBQ3pELGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGdEQUFnRDtJQUNoRCx3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3Qix5Q0FBeUM7SUFDekMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6Qix3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxzSEFBc0g7SUFDdEgsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QixVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixvQkFBb0I7O0FBRXhCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsNERBQTREO0lBQzVELFNBQVM7O0FBRWI7Ozs7O0FBS0E7SUFDSSxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixpQkFBaUI7O0lBRWpCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGtCQUFrQjs7SUFFbEIsbUJBQW1COztBQUV2Qjs7OztBQUlBO0lBQ0ksMEJBQTBCO0lBQzFCLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDI1NSwgMjU0LCAyNDEpO1xcbiAgICAtLWJpcmRibHVlOiAjMTIxZTZhO1xcbiAgICAtLWJpcmRsYXZlbmRlcjogI2JlYmZkNDtcXG4gICAgXFxuICAgIFxcbn1cXG5cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTQsIDI0MSk7XFxuICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiAgY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ0FyaW1hJywgY3Vyc2l2ZTtcXG4gIFxcbn1cXG5cXG5oMSwgaDIsIGgzLCBwe1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNjb250ZW50e1xcbiAgICBcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6ICBtYXgoMzMwcHgsIDcwdncpO1xcbn1cXG5cXG4jbWFpbi1pbWFnZXtcXG4gICBcXG4gICAgYm9yZGVyOiA1cHggZG90dGVkIGdyZWVuO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuLmxvZ297XFxuICAgXFxuICAgIHdpZHRoOiBtYXgoODBweCwgMjB2dyk7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuXFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAzIC8gMjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcblxcbn1cXG5cXG4ubG9nbyA+IGltZ3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgXFxuICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnI7XFxuXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcblxcbn1cXG5cXG4uaGVhZGVyID4gYnV0dG9ue1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgIFxcblxcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDN2dywgMS4zcmVtKTtcXG4gICBcXG5cXG4gICAgXFxufVxcblxcbiN0aXRsZS1oZWFkZXJ7XFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gLTE7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS4ycmVtLCAxMnZ3LCAxMHJlbSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgXFxufVxcblxcblxcbiNtYWluLWNvbnRlbnR7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tYWlue1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4jbWVudXtcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxufVxcblxcbi5tZW51LWhlYWRlcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgXFxufVxcblxcbi5tZW51LXN1YmhlYWRlcntcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBcXG59XFxuXFxuXFxuLm1lbnUtaXRlbXtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIFxcbn1cXG5cXG4ubWVudS1kaXNoe1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcIm5hbWUgLiBub3RlXFxcIlxcbiAgICBcXFwiZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gcHJpY2VcXFwiXFxuICAgIFxcXCJzeW1ib2xzIC4gcHJpY2VcXFwiO1xcblxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcblxcbn1cXG5cXG4ubWVudS1uYW1le1xcbiAgICBncmlkLWFyZWE6IG5hbWU7XFxuICAgIGNvbG9yOiB2YXIoLS1iaXJkYmx1ZSwgYmxhY2spO1xcbiBcXG4gICBcXG59XFxuXFxuLm1lbnUtcHJpY2V7XFxuICAgIGdyaWQtYXJlYTogcHJpY2U7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1lbnUtZGVzY3JpcHRpb257XFxuICAgIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxufVxcblxcbi5tZW51LW5vdGV7XFxuICAgIFxcbiAgIGdyaWQtYXJlYTogbm90ZTtcXG5cXG4gICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5tZW51LXN5bWJvbHtcXG4gICAgZ3JpZC1hcmVhOiBzeW1ib2xzO1xcbn1cXG5cXG5cXG4ucGljdHVyZXN7XFxuICAgXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuI3RhYmxlLWltYWdle1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuXFxuI3N0b3J5LXBhZ2V7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG59XFxuXFxuLnBhZ2V7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4jcGFnZS1oZWFkZXJ7XFxuICAgIG1hcmdpbjogMTVweCAwcHggMTVweCAwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxZW0sIDEwdncsIDMuMnJlbSk7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuI2Zvcm0tY29udGFpbmVye1xcbiAgICBtYXJnaW4tdG9wOiAxMCU7XFxuICAgIHdpZHRoOiBtaW4oNDAwcHgsIDEwMCUpO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYmlyZGJsdWUsIGJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJpcmRsYXZlbmRlciwgcmdiKDIyMiwgMTk2LCAyNDcpKTtcXG4gICAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuLmZvcm0tbGFiZWx7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGNvbG9yOiB2YXIoLS1iaXJkYmx1ZSwgYmxhY2spO1xcbn1cXG5cXG4uZm9ybS1pbnB1dHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvciwgd2hpdGUpO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1iaXJkYmx1ZSwgYmxhY2spO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHdpZHRoOiBtaW4oOTAlLCAxNHJlbSk7XFxufVxcblxcbiNzdWJtaXQtYnV0dG9ue1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6IHZhcigtLWJpcmRibHVlLCBibGFjayk7XFxuICAgIGJvcmRlcjogMXB4IHZhcigtLWJpcmRibHVlLCBibGFjaykgb3V0c2V0O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbiNyZXNlcnZhdGlvbi1mb3Jte1xcbiAgICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbiNzdWJtaXQtbW9kYWx7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgd2lkdGg6IG1pbigxMDB2dywgMzMwcHgpO1xcbiAgICBoZWlnaHQ6IG1pbigxMDB2aCwgMTUwcHgpO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1iaXJkYmx1ZSwgYmxhY2spO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iaXJkbGF2ZW5kZXIsIGJsYWNrKTtcXG59XFxuXFxuI21vZGFsLWNvbnRlbnR7XFxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjpyZ2JhKDE0OCwgMjEsIDIxLCAwLjc4OCk7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jc3VibWl0LXRleHR7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmhpZGRlbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4jbWFpbi1wYWdle1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgXFxufVxcbiNjb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4OztcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnBhZ2UtY29udGVudHtcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgZ2FwOiAyMHB4O1xcblxcbn1cXG5cXG5cXG5cXG5cXG4ucGhvdG97XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgd2lkdGg6IG1pbig5MCUsIDMwMHB4KTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtYXgtaGVpZ2h0OiAyNjBweDtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4udGV4dC1jb250ZW50e1xcbiAgIFxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIG1heC13aWR0aDogODAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuXFxuICAgIGdyaWQtY29sdW1uLWVuZDogLTE7XFxuICAgICAgICBcXG59XFxuXFxuXFxuXFxuLm5vLXBob3Rve1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGJpcmQgZnJvbSAnLi9ibHVlYmlyZC5wbmcnXG5pbXBvcnQgYmxhY2tiaXJkIGZyb20gJy4vYmxhY2tiaXJkLnBuZydcbmltcG9ydCB7IGVsZW1lbnQsIGdldERhdGUgfSBmcm9tICcuL3V0aWxpdGllcy5qcyc7XG5pbXBvcnQgeyBidWlsZE1lbnUgfSAgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCB7IGJ1aWxkQ29udGFjdH0gZnJvbSAnLi9jb250YWN0LmpzJztcbmltcG9ydCB7IGJ1aWxkU3RvcnkgfSBmcm9tICcuL3N0b3J5JztcbmltcG9ydCB7IGJ1aWxkTWFpbiB9IGZyb20gJy4vbWFpbic7XG5cblxuXG4vLyBDcmVhdGUgd2Vic2l0ZSBsYXlvdXRcblxuXG4vLyBDcmVhdGUgYW4gZWxlbWVudCBhbmQgYXNzaWduIGFueSBhdHRyaWJ1dGVzXG5cblxuY29uc3QgYnVpbGQgPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBcbiAgICBnZXREYXRlKCk7XG5cbiAgICBjb25zdCBidWlsZEhlYWRlciA9ICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRpdGxlVGV4dCA9IFwiYmx1ZWJpcmRcIjtcbiAgICAgICAgY29uc3QgbWVudVRleHQgPSBcIm1lbnVcIjtcbiAgICAgICAgY29uc3QgY29udGFjdFRleHQgPSBcInJlc2VydmF0aW9uc1wiO1xuICAgICAgICBjb25zdCBzdG9yeVRleHQgPSBcIm91ciBzdG9yeVwiXG5cbiAgICAgICAgY29uc3QgaGVhZGVyID0gZWxlbWVudCgnZGl2Jywge1wiY2xhc3NcIjogXCJoZWFkZXJcIiB9KVxuICAgICAgICBcbiAgICAgICAgLy8gc3ViLXRpdGxlc1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZWxlbWVudCgnYnV0dG9uJywge1wiY2xhc3NcIjogXCJ0aXRsZVwiLCBcImlkXCI6IFwidGl0bGUtaGVhZGVyXCJ9KTtcbiAgICAgICAgY29uc3QgbG9nbyA9IGVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IFwibG9nb1wifSk7XG4gICAgICAgIGNvbnN0IG1lbnUgPSBlbGVtZW50KCdidXR0b24nLCB7XCJpZFwiOiBcIm1lbnUtYnV0dG9uXCIsIFwiY2xhc3NcIjogXCJoZWFkZXItbGlua1wifSk7XG4gICAgICAgIGNvbnN0IGNvbnRhY3QgPSBlbGVtZW50KCdidXR0b24nLCB7XCJpZFwiOiBcImNvbnRhY3QtYnV0dG9uXCIsIFwiY2xhc3NcIjogXCJoZWFkZXItbGlua1wifSk7XG4gICAgICAgIGNvbnN0IHN0b3J5ID0gZWxlbWVudCgnYnV0dG9uJywge1wiaWRcIjogXCJzdG9yeS1idXR0b25cIiwgXCJjbGFzc1wiOiBcImhlYWRlci1saW5rXCJ9KTtcbiAgICAgICBcbiAgICAgICAgICAgXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVUZXh0O1xuICAgICAgICBtZW51LnRleHRDb250ZW50ID0gbWVudVRleHQ7XG4gICAgICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSBjb250YWN0VGV4dDtcbiAgICAgICAgc3RvcnkudGV4dENvbnRlbnQgPSBzdG9yeVRleHQ7XG5cbiAgICAgIFxuICAgICAgICAvLyBMb2dvXG4gICAgICAgIFxuICAgICAgICAvL3NldEF0dHJpYnV0ZXMobG9nbywge1wiY2xhc3NcIjogXCJsb2dvXCJ9KVxuICAgICAgICBcbiAgICAgICAgY29uc3QgbWFpbkltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIG1haW5JbWFnZS5zcmMgPSBiaXJkO1xuICAgICAgICBsb2dvLmFwcGVuZENoaWxkKG1haW5JbWFnZSlcblxuXG4gICAgICAgIFxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChtZW51KTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc3RvcnkpO1xuICAgIFxuICAgICAgXG5cbiAgICAgICAgcmV0dXJuIGhlYWRlcjtcblxuICAgIH1cbiAgXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChidWlsZEhlYWRlcigpKVxuICAgIFxuICBcblxuICAgIGNvbnN0IGJ1aWxkVGVtcCA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCB0ZW1wVGV4dCA9IFwiV2VsY29tZSB0byBibHVlYmlyZC5cIjtcblxuICAgICAgICBjb25zdCBzZWNvbmQgPSBcIiBFdCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMgbWFlY2VuYXMgcGhhcmV0cmEgY29udmFsbGlzLiBBcmN1IG5vbiBzb2RhbGVzIG5lcXVlIHNvZGFsZXMuIFZ1bHB1dGF0ZSBzYXBpZW4gbmVjIHNhZ2l0dGlzIGFsaXF1YW0gbWFsZXN1YWRhIGJpYmVuZHVtIGFyY3Ugdml0YWUuXCI7XG5cbiAgICAgICAgY29uc3QgdGVtcEJpZyA9IFwiTWF0dGlzIHJob25jdXMgdXJuYSBuZXF1ZSB2aXZlcnJhIGp1c3RvIG5lYyB1bHRyaWNlcyBkdWkuIEF0IGF1Y3RvciB1cm5hIG51bmMgaWQgY3Vyc3VzIG1ldHVzLiBOdW5jIGNvbnNlcXVhdCBpbnRlcmR1bSB2YXJpdXMgc2l0IGFtZXQgbWF0dGlzIHZ1bHB1dGF0ZSBlbmltIG51bGxhLiBcIiBcbiAgICAgICAgY29uc3QgbWFpbiA9IGVsZW1lbnQoJ2RpdicsIHtcImlkXCI6IFwibWFpbi1jb250ZW50XCIsIFwiY2xhc3NcIjogXCJtYWluXCIsfSk7XG4gICAgICAgIGNvbnN0IG1haW5UZXh0ID0gZWxlbWVudCgnZGl2Jywge1wiaWRcIjogXCJtYWluLXRleHRcIiwgXCJjbGFzc1wiOiBcIm1haW5cIix9KTtcbiAgICAgICAgY29uc3Qgc2Vjb25kVGV4dCA9IGVsZW1lbnQoJ2RpdicsIHtcImlkXCI6IFwic2Vjb25kLXRleHRcIiwgXCJjbGFzc1wiOiBcIm1haW5cIix9KTtcbiAgICAgICAgY29uc3QgYmJpcmQgPSBlbGVtZW50KCdpbWcnLCB7XCJ3aWR0aFwiOiBcIjEwMHB4XCJ9KTtcbiAgICAgICAgYmJpcmQuc3JjID0gYmxhY2tiaXJkO1xuXG4gICAgICAgIG1haW5UZXh0LnRleHRDb250ZW50ID0gdGVtcEJpZztcbiAgICAgICAgc2Vjb25kVGV4dC50ZXh0Q29udGVudCA9IHNlY29uZDtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChtYWluVGV4dCk7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoc2Vjb25kVGV4dCk7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoYmJpcmQpO1xuXG4gICAgICAgIHJldHVybiBtYWluO1xuXG4gICAgfVxuXG4gXG5cbiAgICBjb25zdCBidWlsZFBhZ2UgPSAoc291cmNlKSA9PiB7XG4gICAgICAgIC8vIGNsZWFyIHBhZ2VcblxuICAgICAgICBjb25zb2xlLmxvZyhzb3VyY2UpXG4gICAgICAgIGlmIChjb250ZW50LmNoaWxkcmVuLmxlbmd0aCA+IDEpIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0RWxlbWVudENoaWxkKTsgXG4gICAgICAgIGxldCBwYWdlO1xuICAgICAgICBcbiAgICAgICAgaWYgKHNvdXJjZSA9PT0gJ21lbnUnKXtcbiAgICAgICAgICAgIHBhZ2UgPSBidWlsZE1lbnUoKTsgICBcbiAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNvdXJjZSA9PT0gJ2NvbnRhY3QnKXtcbiAgICAgICAgICAgIHBhZ2UgPSBidWlsZENvbnRhY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc291cmNlID09PSAnc3RvcnknKXtcbiAgICAgICAgICAgIHBhZ2UgPSBidWlsZFN0b3J5KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc291cmNlID09PSAnbWFpbicpe1xuICAgICAgICAgICAgcGFnZSA9IGJ1aWxkTWFpbigpO1xuICAgICAgICB9XG5cblxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2UpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBidWlsZFBhZ2UoJ21haW4nKTtcbiAgIFxuXG4gICAgY29uc29sZS5sb2coY29udGVudCk7XG5cbiAgICBcbiAgICByZXR1cm4ge2J1aWxkUGFnZX1cbi8vIENyZWF0ZXMgYSBuZXcgZWxlbWVudCBhbmQgZmxleGlibHkgYXNzaWduZXMgYXR0cmlidXRlcztcblxuXG59KSgpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgYnVpbGQ7XG4iLCJpbXBvcnQgeyBlbGVtZW50LCBmb3JtYXRQaG9uZSwgZ2V0RGF0ZSB9IGZyb20gJy4vdXRpbGl0aWVzLmpzJztcblxuY29uc3QgYnVpbGRDb250YWN0ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgT1BFTlRJTUUgPSBcIjE2OjAwXCI7XG4gICAgY29uc3QgQ0xPU0VUSU1FID0gXCIyMTowMFwiO1xuXG5cbiAgICBjb25zdCBwYWdlID0gZWxlbWVudCgnZGl2Jywge1wiY2xhc3NcIjogXCJwYWdlXCJ9KVxuXG5cbiAgICAvLyBDcmVhdGUgZm9ybVxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBlbGVtZW50KCdkaXYnLCB7XCJpZFwiOiBcImZvcm0tY29udGFpbmVyXCJ9KTtcbiAgICBjb25zdCBmb3JtID0gZWxlbWVudCgnZm9ybScsIHtcImlkXCI6IFwicmVzZXJ2YXRpb24tZm9ybVwifSk7XG5cbiAgICBjb25zdCBuYW1lTGFiZWwgPSBlbGVtZW50KCdsYWJlbCcsIHtcImZvclwiOiBcIm5hbWVcIiwgXCJjbGFzc1wiOiBcImZvcm0tbGFiZWxcIn0pO1xuICAgIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiRnVsbCBOYW1lXCJcbiAgICBjb25zdCBuYW1lID0gZWxlbWVudCgnaW5wdXQnLCB7XCJ0eXBlXCI6IFwidGV4dFwiLCBcImNsYXNzXCI6IFwiZm9ybS1pbnB1dFwiLCBcIm5hbWVcIjogXCJuYW1lXCIsIFwiaWRcIjogXCJmb3JtX25hbWVcIiwgXCJyZXF1aXJlZFwiOiBcIlwiLCBcInBsYWNlaG9sZGVyXCI6IFwiSm9obiBTbWl0aFwiIH0pXG4gICAgbmFtZUxhYmVsLmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZWxlbWVudCgnbGFiZWwnLCB7XCJmb3JcIjogXCJkYXRlXCIsIFwiY2xhc3NcIjogXCJmb3JtLWxhYmVsXCJ9KTtcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkRhdGVcIjtcbiAgICBjb25zdCB0b2RheSA9IGdldERhdGUoKTtcbiAgICBjb25zdCBkYXRlID0gZWxlbWVudChcImlucHV0XCIsIHtcInR5cGVcIjogXCJkYXRlXCIsIFwiY2xhc3NcIjogXCJmb3JtLWlucHV0XCIsIFwibmFtZVwiOiBcIm5hbWVcIiwgXCJpZFwiOiBcImZvcm1fZGF0ZVwiLCBcIm1pblwiOiB0b2RheSwgXCJyZXF1aXJlZFwiOiBcIlwifSk7XG4gICAgZGF0ZUxhYmVsLmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgY29uc3QgdGltZUxhYmVsID0gZWxlbWVudCgnbGFiZWwnLCB7XCJmb3JcIjogXCJ0aW1lXCIsIFwiY2xhc3NcIjogXCJmb3JtLWxhYmVsXCJ9KTtcbiAgICB0aW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpbWVcIjtcbiAgICBjb25zdCB0aW1lID0gZWxlbWVudCgnaW5wdXQnLCB7XCJ0eXBlXCI6IFwidGltZVwiLCBcImNsYXNzXCI6IFwiZm9ybS1pbnB1dFwiLCBcIm5hbWVcIjogXCJ0aW1lXCIsIFwiaWRcIjogXCJmb3JtX3RpbWVcIiwgXCJ2YWx1ZVwiOiBcIjE2OjAwXCIsICBcIm1pblwiOiBPUEVOVElNRSwgXCJtYXhcIjogQ0xPU0VUSU1FLFwicmVxdWlyZWRcIjogXCJcIn0pO1xuICAgIHRpbWVMYWJlbC5hcHBlbmRDaGlsZCh0aW1lKTtcblxuICAgIGNvbnN0IHBob25lTGFiZWwgPSBlbGVtZW50KCdsYWJlbCcsIHtcImZvclwiOiBcInBob25lXCIsIFwiY2xhc3NcIjogXCJmb3JtLWxhYmVsXCJ9KTtcbiAgICBwaG9uZUxhYmVsLnRleHRDb250ZW50ID0gXCJQaG9uZSBOdW1iZXJcIjtcbiAgICBjb25zdCBwaG9uZSA9IGVsZW1lbnQoJ2lucHV0Jywge1widHlwZVwiOiBcInRlbFwiLCBcImNsYXNzXCI6IFwiZm9ybS1pbnB1dFwiLCBcIm5hbWVcIjogXCJwaG9uZVwiLCBcImlkXCI6IFwiZm9ybV9waG9uZVwiLCBcIm1heGxlbmd0aFwiOiAxMiwgXCJwbGFjZWhvbGRlclwiOiBcIjU1NS0yMTAtMzE1NFwiLCBcInJlcXVpcmVkXCI6IFwiXCJ9KVxuICAgIGZvcm1hdFBob25lKHBob25lKTtcbiAgICBwaG9uZUxhYmVsLmFwcGVuZENoaWxkKHBob25lKTtcblxuICAgIGNvbnN0IHN1Ym1pdCA9IGVsZW1lbnQoXCJpbnB1dFwiLCB7XCJ0eXBlXCI6IFwic3VibWl0XCIsIFwiY2xhc3NcIjogXCJidXR0b25cIiwgXCJpZFwiOiBcInN1Ym1pdC1idXR0b25cIn0pO1xuXG4gICAgY29uc3Qgc3VibWl0TW9kYWwgPSBlbGVtZW50KFwiZGl2XCIsIHtcImNsYXNzXCI6IFwibW9kYWwgaGlkZGVuXCIsIFwiaWRcIjogXCJzdWJtaXQtbW9kYWxcIn0pO1xuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGVsZW1lbnQoXCJkaXZcIiwge1wiaWRcIjogXCJtb2RhbC1jb250ZW50XCJ9KTtcbiAgICBjb25zdCBtb2RhbEhlYWRlciA9IGVsZW1lbnQoXCJoMlwiLCB7XCJjbGFzc1wiOiBcIm1vZGFsLWl0ZW1cIiwgXCJpZFwiOiBcInN1Ym1pdC1oZWFkZXJcIn0pO1xuICAgIGNvbnN0IG1vZGFsVGV4dCA9IGVsZW1lbnQoXCJwXCIsIHtcImNsYXNzXCI6IFwibW9kYWwtaXRlbVwiLCBcImlkXCI6IFwic3VibWl0LXRleHRcIn0pO1xuXG4gICAgbW9kYWxIZWFkZXIudGV4dENvbnRlbnQgPSBcIlJlc2VydmF0aW9uIFVuYXZhaWxpYmxlXCI7XG4gICAgbW9kYWxUZXh0LnRleHRDb250ZW50ID0gXCJQbGVhc2UgY2hlY2sgYWdhaW4gc29vblwiXG4gICAgXG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsSGVhZGVyKTtcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxUZXh0KTtcbiAgICBzdWJtaXRNb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzdWJtaXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuXG4gICAgfSlcbiAgXG4gICAgLy8gQXR0YWNoIGZvcm0gZWxlbWVudHMgXG4gICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpbWVMYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwaG9uZUxhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbiBcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgcGFnZS5hcHBlbmRDaGlsZChzdWJtaXRNb2RhbCk7XG5cbiAgICByZXR1cm4gcGFnZTtcbn1cblxuZXhwb3J0IHtidWlsZENvbnRhY3R9OyIsImltcG9ydCB7IGVsZW1lbnQgfSBmcm9tICcuL3V0aWxpdGllcy5qcyc7XG5pbXBvcnQgdGFibGVERGF0YSBmcm9tICcuL3RhYmxlLmpwZyc7XG5pbXBvcnQgYmlyZERhdGEgZnJvbSAnLi9mYXJtYmlyZC5qcGcnO1xuaW1wb3J0IGZhcm1UZXh0RGF0YSBmcm9tICcuL2Zhcm10ZXh0LnR4dCc7XG5pbXBvcnQgd2VsY29tZVRleHREYXRhIGZyb20gJy4vd2VsY29tZS50eHQnO1xuXG5cbmNvbnN0IGJ1aWxkTWFpbiA9ICgpID0+IHtcblxuXG4gICAgY29uc3QgcGFnZSA9IGVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IFwicGFnZVwiLCBcImlkXCI6IFwibWFpbi1wYWdlXCJ9KVxuICAgIFxuICAgIGNvbnN0IHBhZ2VIZWFkZXIgPSBlbGVtZW50KCdoMScsIHtcImNsYXNzXCI6IFwibWVudS1oZWFkZXJcIiwgXCJpZFwiOiBcInBhZ2UtaGVhZGVyXCJ9KTtcbiAgICBwYWdlSGVhZGVyLnRleHRDb250ZW50ID0gXCJ3ZWxjb21lIHRvIGJsdWViaXJkXCJcblxuICAgIC8vIENyZWF0ZSBhIHNlY3Rpb24gb2YgY29udGVudCwgd2l0aCB0ZXh0IGFuZCBpbWFnZSAob3B0aW9uYWwpOyAgICBcbiAgICBjb25zdCBjcmVhdGVDb250ZW50ID0gKG5hbWUsIGNvbnRlbnQsIHBob3RvLCBmaXJzdCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IFwicGFnZS1jb250ZW50XCIsICdpZCc6IGAke25hbWV9LWNvbnRlbnRgfSk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBlbGVtZW50KCdkaXYnLCB7XCJjbGFzc1wiOiBcInRleHQtY29udGVudCBjb250ZW50XCIsIFwiaWRcIjogYCR7bmFtZX0tdGV4dGB9KTtcbiAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG5cblxuXG4gICAgICAgIGlmIChwaG90byAhPSBudWxsKXtcbiAgICAgICAgICAgIGNvbnN0IHBpY3R1cmUgPSBlbGVtZW50KCdpbWcnLCB7XCJjbGFzc1wiOiBcInBob3RvXCIsIFwiaWRcIjogYCR7bmFtZX0tcGhvdG9gLCBcInNyY1wiOiBwaG90b30pXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGljdHVyZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibm8tcGhvdG9cIik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGlmIChmaXJzdCA9PT0gJ3RleHQnKXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpcnN0KTtcbiAgICAgICAgICAgIHRleHQuY2xhc3NMaXN0LmFkZCgnZmlyc3QnKVxuICAgICAgICB9XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCB3ZWxjb21lID0gY3JlYXRlQ29udGVudChcIndlbGNvbWVcIiwgd2VsY29tZVRleHREYXRhKTtcbiAgICBjb25zdCB0YWJsZSA9IGNyZWF0ZUNvbnRlbnQoXCJ0YWJsZVwiLCBcIk91ciBzcGFjZSBpcyB2ZXJ5IGxpbWl0ZWQsIGFuZCByZXNlcnZhdGlvbnMgYXJlIHJlcXVpcmVkLiBQbGVhc2UgY2FsbCBhaGVhZCBpZiB5b3UgaGF2ZSBhbnkgc3BlY2lmaWMgZGlldGFyeSByZXN0cmljdGlvbnMuXCIsIHRhYmxlRERhdGEpXG4gICAgY29uc3QgZmFybSA9IGNyZWF0ZUNvbnRlbnQoXCJmYXJtXCIsZmFybVRleHREYXRhLCBiaXJkRGF0YSwgXCJ0ZXh0XCIpO1xuICAgIC8vIGZhcm0gY29udGVudHNcbiAgICAvKiBjb25zdCBmYXJtQ29udGVudCA9IGVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6ICdwYWdlLWNvbnRlbnQnLCBcImlkXCI6IFwiZmFybS1jb250ZW50XCJ9KTtcbiAgICBjb25zdCBmYXJtID0gZWxlbWVudCgnaW1nJywge1wiY2xhc3NcIjogXCJwaG90b1wiLCBcImlkXCI6IFwiZmFybS1waG90b1wiLCBcInNyY1wiOiBiaXJkRGF0YX0pO1xuICAgIGNvbnN0IGZhcm1UZXh0ID0gZWxlbWVudCgnZGl2Jywge1wiY2xhc3NcIjogXCJ0ZXh0LWNvbnRlbnQgY29udGVudFwiLCBcImlkXCI6IFwiZmFybS10ZXh0XCJ9KTtcbiAgICBmYXJtVGV4dC50ZXh0Q29udGVudCA9IFwiQSBudW1iZXIgb2Ygd2lsZCBibHVlYmlyZHMgY2FsbCBvdXIgZmFybSBob21lLCBhbmQgd2UndmUgdGFrZW4gaW5zcGlyYXRpb24gZnJvbSB0aGVtIGluIG91ciBkaXNoZXMgZGV2ZWxvcGVkIHJpZ2h0IGZyb20gb3VyIGdhcmRlbi5cIiAgICAgICAgICAgICAgICBcbiAgICBmYXJtQ29udGVudC5hcHBlbmRDaGlsZChmYXJtKTtcbiAgICBmYXJtQ29udGVudC5hcHBlbmRDaGlsZChmYXJtVGV4dCk7ICovXG4gICAgXG4gICBcbiAgICBwYWdlLmFwcGVuZENoaWxkKHBhZ2VIZWFkZXIpO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQod2VsY29tZSk7XG4gICAgcGFnZS5hcHBlbmRDaGlsZChmYXJtKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKHRhYmxlKTtcbiAgICBwYWdlLmlkID0gXCJtYWluLXBhZ2VcIjtcblxuXG5cbiAgICBjb25zb2xlLmxvZyhwYWdlKTtcbiAgICByZXR1cm4gcGFnZTtcblxufVxuXG5leHBvcnQge2J1aWxkTWFpbn07IiwiaW1wb3J0IG1lbnVEYXRhIGZyb20gJy4vbWVudS5qc29uJztcbmltcG9ydCB7IGVsZW1lbnQgfSBmcm9tICcuL3V0aWxpdGllcy5qcyc7XG5cblxuXG4vL2NvbnNvbGUubG9nKG1lbnVEYXRhLmRpc2hlcyk7XG5jb25zdCBidWlsZE1lbnUgPSAoKSA9PiB7XG4gICAgXG4gICAgY29uc3QgbWVudSA9IGVsZW1lbnQoJ2RpdicsIHtcImlkXCI6IFwibWVudVwifSk7XG4gICAgY29uc3QgbWVudUhlYWRlciA9IGVsZW1lbnQoJ2gxJywge1wiY2xhc3NcIjogXCJtZW51LWhlYWRlclwifSk7XG4gICAgbWVudUhlYWRlci50ZXh0Q29udGVudCA9IFwibWVudVwiXG5cbiAgICAvLyBtZW51IGNhdGVnb3JpZXNcbiAgICBjb25zdCBzdGFydGVyID0gZWxlbWVudCgnZGl2Jywge1wiaWRcIjogXCJzdGFydGVyc1wifSk7XG4gICAgY29uc3Qgc3RhcnRlckhlYWRlciA9IGVsZW1lbnQoJ2gyJywge1wiaWRcIjogXCJzdGFydGVyLWhlYWRlclwiLCBcImNsYXNzXCI6IFwibWVudS1zdWJoZWFkZXJcIn0pXG4gICAgc3RhcnRlckhlYWRlci50ZXh0Q29udGVudCA9IFwic3RhcnRlclwiXG5cbiAgICBjb25zdCBtYWluID0gZWxlbWVudCgnZGl2Jywge1wiaWRcIjogXCJtYWluc1wifSlcbiAgICBjb25zdCBtYWluSGVhZGVyID0gZWxlbWVudCgnaDInLCB7XCJpZFwiOiBcIm1lbnUtaGVhZGVyXCIsIFwiY2xhc3NcIjogXCJtZW51LXN1YmhlYWRlclwifSlcbiAgICBtYWluSGVhZGVyLnRleHRDb250ZW50ID0gXCJtYWluXCJcblxuICAgIGNvbnN0IGRlc3NlcnQgPSBlbGVtZW50KCdkaXYnLCB7XCJpZFwiOiBcImRlc3NlcnRzXCJ9KTtcbiAgICBjb25zdCBkZXNzZXJ0SGVhZGVyID0gZWxlbWVudCgnaDInLCB7XCJpZFwiOiBcIm1lbnUtaGVhZGVyXCIsIFwiY2xhc3NcIjogXCJtZW51LXN1YmhlYWRlclwifSlcbiAgICBkZXNzZXJ0SGVhZGVyLnRleHRDb250ZW50ID0gXCJkZXNzZXJ0XCI7XG4gIFxuICAgIHN0YXJ0ZXIuYXBwZW5kQ2hpbGQoc3RhcnRlckhlYWRlcik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYWluSGVhZGVyKTtcbiAgICBkZXNzZXJ0LmFwcGVuZENoaWxkKGRlc3NlcnRIZWFkZXIpO1xuXG4gICAgbWVudS5hcHBlbmRDaGlsZChtZW51SGVhZGVyKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKHN0YXJ0ZXIpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgbWVudS5hcHBlbmRDaGlsZChkZXNzZXJ0KTtcblxuICAgIC8vIHJlYWQgZGlzaCBmcm9tIEpTT05cbiAgICBjb25zdCBidWlsZERpc2ggPSAoaXRlbSkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGRpc2ggPSBlbGVtZW50KCdkaXYnLCB7XCJjbGFzc1wiOiBcIm1lbnUtZGlzaCBcIn0pO1xuICAgICAgICBjb25zdCBuYW1lID0gZWxlbWVudCgnaDMnLCB7XCJjbGFzc1wiOiBcIm1lbnUtbmFtZSBtZW51LWl0ZW1cIiwgXCJpZFwiOiBgbWVudS0ke2l0ZW0ubmFtZX1gfSk7XG4gICAgICAgIGNvbnN0IHByaWNlID0gZWxlbWVudCgncCcsIHtcImNsYXNzXCI6IFwibWVudS1wcmljZSBtZW51LWl0ZW1cIn0pO1xuICAgICAgICBjb25zdCBkZXNjID0gZWxlbWVudCgncCcsIHtcImNsYXNzXCI6IFwibWVudS1kZXNjcmlwdGlvbiBtZW51LWl0ZW1cIn0pO1xuICAgICAgICBjb25zdCBub3RlID0gZWxlbWVudCgncCcsIHtcImNsYXNzXCI6IFwibWVudS1ub3RlIG1lbnUtaXRlbVwifSk7XG4gICAgICAgIGNvbnN0IHN5bWJvbCA9IGVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IFwibWVudS1zeW1ib2wgbWVudS1pdGVtXCJ9KTtcbiAgICAgICAgXG4gICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWU7XG4gICAgICAgIHByaWNlLnRleHRDb250ZW50ID0gaXRlbS5wcmljZTtcbiAgICAgICAgZGVzYy50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XG4gICAgICAgIG5vdGUudGV4dENvbnRlbnQgPSBpdGVtLm5vdGU7XG4gICAgICAgIHN5bWJvbC5jbGFzc0xpc3QuYWRkKGAke2l0ZW0uc3ltYm9sfWApXG5cbiAgICAgICAgZGlzaC5hcHBlbmRDaGlsZChuYW1lKTtcbiAgICAgICAgZGlzaC5hcHBlbmRDaGlsZChwcmljZSk7XG4gICAgICAgIGRpc2guYXBwZW5kQ2hpbGQoZGVzYyk7XG4gICAgICAgIGRpc2guYXBwZW5kQ2hpbGQobm90ZSk7XG4gICAgICAgIGRpc2guYXBwZW5kQ2hpbGQoc3ltYm9sKTtcblxuICAgICAgICAgICAgICAgIFxuICAgICAgXG5cbiAgICAgICAgcmV0dXJuIGRpc2g7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGZvciAobGV0IGl0ZW0gb2YgbWVudURhdGEuZGlzaGVzKXtcblxuICAgICAgICAvLyBBdHRhY2ggbWVudSBpdGVtcyB0byBhcHByb3ByaWF0ZSBjYXRlZ29yeVxuICAgICAgICBzd2l0Y2goaXRlbS50eXBlKSB7XG4gICAgICAgICAgIFxuICBcbiAgICAgICAgICAgIGNhc2UgJ3N0YXJ0ZXInOlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHN0YXJ0ZXIuYXBwZW5kQ2hpbGQoYnVpbGREaXNoKGl0ZW0pKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgY2FzZSAnbWFpbic6XG4gICAgICAgICAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChidWlsZERpc2goaXRlbSkpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgY2FzZSAnZGVzc2VydCc6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaXRlbS5kZXNjcmlwdGlvbilcbiAgICAgICAgICAgICAgICBkZXNzZXJ0LmFwcGVuZENoaWxkKGJ1aWxkRGlzaChpdGVtKSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7ICAgIFxuICAgICBcbiAgICAgICAgICAgIGRlZmF1bHQ6IFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJtZW51IGl0ZW0gZGlkIG5vdCBtYXRjaCBrbm93IGNhdGVnb3J5LCB2ZXJpZnkgZGlzaCB0eXBlXCIpXG4gICAgICAgIFxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbn1cblxucmV0dXJuIG1lbnU7XG5cbn1cblxuZXhwb3J0IHtidWlsZE1lbnV9XG5cblxuIiwiaW1wb3J0IHsgZWxlbWVudCB9IGZyb20gJy4vdXRpbGl0aWVzLmpzJztcbmltcG9ydCBzdG9yeURhdGEgZnJvbSAnLi9zdG9yeS50eHQnO1xuaW1wb3J0IHRhYmxlSW1nIGZyb20gJy4vdGFibGUuanBnJztcblxuXG5jb25zdCBidWlsZFN0b3J5ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgcGFnZSA9IGVsZW1lbnQoJ2RpdicsIHtcImlkXCI6IFwic3RvcnktcGFnZVwifSk7XG5cbiAgICBjb25zdCB0YWJsZSA9IG5ldyBJbWFnZSgpO1xuICAgIHRhYmxlLnNyYyA9IHRhYmxlSW1nO1xuICAgIHRhYmxlLmlkID0gXCJ0YWJsZS1pbWFnZVwiO1xuICAgIHRhYmxlLmNsYXNzTGlzdC5hZGQoXCJwaWN0dXJlc1wiKTtcblxuICAgIHBhZ2UuYXBwZW5kQ2hpbGQodGFibGUpO1xuXG4gICAgY29uc3Qgc3RvcnkgPSBlbGVtZW50KCdkaXYnKTtcbiAgIFxuICAgIHN0b3J5LnRleHRDb250ZW50ID0gc3RvcnlEYXRhO1xuXG4gICAgcGFnZS5hcHBlbmRDaGlsZChzdG9yeSk7XG5cbiAgICByZXR1cm4gcGFnZTtcbn1cblxuXG5leHBvcnQge2J1aWxkU3Rvcnl9O1xuXG5cbiIsIi8vIEhlbHBlciBmdW5jdGlvbnNcbi8vIFJlc3RhdXJhbnQgcGFnZVxuXG5cbmNvbnN0IGNyZWF0ZUVsZW1lbnQgPSAodHlwZSwgYXR0cmlidXRlcykgPT4ge1xuICAgIFxuICAgIGNvbnN0IG5ld0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGAke3R5cGV9YCk7XG4gICAgaWYgKGF0dHJpYnV0ZXMgPT0gbnVsbCkgcmV0dXJuIG5ld0VsZW1lbnQ7XG4gICAgc2V0QXR0cmlidXRlcyhuZXdFbGVtZW50LCBhdHRyaWJ1dGVzKTtcbiAgICByZXR1cm4gbmV3RWxlbWVudDtcbn1cblxuY29uc3QgZ2V0RGF0ZSA9ICgpID0+IHtcblxuICAgIGxldCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IGRkID0gdG9kYXkuZ2V0RGF0ZSgpO1xuICAgIGxldCBtbSA9IHRvZGF5LmdldE1vbnRoKCkgKyAxOyAvLyBJbmRleCBhdCB6ZXJvXG4gICAgY29uc3QgeXl5eSA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG5cbiAgICBpZiAoZGQgPCAxMCl7XG4gICAgICAgIGRkID0gJzAnICsgZGQ7XG4gICAgfVxuICAgIGlmIChtbSA8IDEwKXtcbiAgICAgICAgbW0gPSAnMCcgKyBtbTtcbiAgICB9XG5cbiAgICB0b2RheSA9IGAke3l5eXl9LSR7bW19LSR7ZGR9YDtcblxuICAgIHJldHVybiB0b2RheTtcbn1cblxuY29uc3QgZm9ybWF0UGhvbmUgPSAoaW5wdXQpID0+IHtcbiAgICBjb25zdCBwaG9uZUZvcm1hdGVyID0gaW5wdXQ7XG4gICAgY29uc29sZS5sb2dcbiAgICBwaG9uZUZvcm1hdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcblxuICAgICAgICAvLyBSZW1vdmUgYW55dGhpbmcgdGhhdCBpc24ndCBhIG51bWJlclxuICAgICAgICBsZXQgcGhvbmVOdW1iZXIgPSBwaG9uZUZvcm1hdGVyLnZhbHVlLnJlcGxhY2UoL1xcRC9nLCcnKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBpbnB1dFNpemUgPSBwaG9uZU51bWJlci5sZW5ndGg7XG4gICAgICAgIC8vIElnbm9yZSBkZWxldGUvYmFja3NwYWNlIHNvIHVzZXIgY2FuIGRlbGV0ZSBudW1iZXIgXG4gICAgICAgIGlmIChlLmtleSA9PSAnQmFja3NwYWNlJyB8fCBlLmtleSA9PSAnRGVsZXRlJykgcmV0dXJuO1xuICAgICAgICBcblxuICAgICAgICBpZiAoaW5wdXRTaXplID49IDMgJiYgaW5wdXRTaXplIDwgNyAmJiBlLmtleSAhPSAnQmFja3NwYWNlJyl7XG4gICAgICAgICAgICBwaG9uZU51bWJlciA9IHBob25lTnVtYmVyLnN1YnN0cmluZygwLDMpICsgJy0nICsgcGhvbmVOdW1iZXIuc3Vic3RyaW5nKDMpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaW5wdXRTaXplID49IDcpe1xuICAgICAgICAgICAgcGhvbmVOdW1iZXIgPSBwaG9uZU51bWJlci5zdWJzdHJpbmcoMCwzKSArICctJyArIHBob25lTnVtYmVyLnN1YnN0cmluZygzLDYpICsgJy0nICsgcGhvbmVOdW1iZXIuc3Vic3RyaW5nKDYpXG4gICAgICAgIH1cblxuXG4gICAgICAgIHBob25lRm9ybWF0ZXIudmFsdWUgPSBwaG9uZU51bWJlcjtcbiAgICAgICAgcGhvbmVGb3JtYXRlci5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gICAgfSlcbiAgICBcbn1cblxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpXG57XG4gICAgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpXG4gICAgfSk7XG59XG5cblxuXG5cbmV4cG9ydCB7Zm9ybWF0UGhvbmUsIGdldERhdGUsIHNldEF0dHJpYnV0ZXMsIGNyZWF0ZUVsZW1lbnQgYXMgZWxlbWVudH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGJ1aWxkIGZyb20gJy4vYnVpbGRwYWdlLmpzJztcblxuXG5jb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuXG5cbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LWJ1dHRvblwiKTtcbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBidWlsZC5idWlsZFBhZ2UoJ21lbnUnKTtcbiAgICB9KVxuXG4gICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC1idXR0b25cIik7XG4gICAgY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYnVpbGQuYnVpbGRQYWdlKCdjb250YWN0Jyk7XG4gICAgfSlcblxuICAgIGNvbnN0IHN0b3J5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0b3J5LWJ1dHRvbicpO1xuICAgIHN0b3J5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBidWlsZC5idWlsZFBhZ2UoJ3N0b3J5JylcbiAgICB9KVxuXG4gICAgY29uc3QgbWFpbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZS1oZWFkZXInKTtcbiAgICBtYWluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBidWlsZC5idWlsZFBhZ2UoJ21haW4nKTtcbiAgICB9KVxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgXG5cblxufVxuXG5pbml0aWFsaXplKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9