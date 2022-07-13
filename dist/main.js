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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --background-color:  rgb(255, 254, 241);\n    --birdblue: #121e6a;\n    --birdlavender: #bebfd4;\n    \n    \n}\n\nbody{\n    background-color: rgb(255, 254, 241);\n   \n    display: flex;\n    flex-direction: column;\n    align-items:  center;\n    font-family: 'Arima', cursive;\n  \n}\n\nh1, h2, h3, p{\n    margin: 0;\n}\n\n#content{\n    \n    height: 100vh;\n    width:  max(330px, 70vw);\n}\n\n#main-image{\n   \n    border: 5px dotted green;\n    height: auto;\n    width: 400px;\n}\n\n.logo{\n   \n    width: max(80px, 20vw);\n    height: auto;\n    display: flex;\n    \n    grid-area: 1 / 1 / 3 / 2;\n    align-self: center;\n\n}\n\n.logo > img{\n    width: 100%;\n    height: auto;\n}\n\n.header{\n    \n    display: grid;\n\n   \n    justify-content:flex-end;\n    gap: 10px;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: 2fr 1fr;\n\n    text-align: center;\n    font-size: 18px;\n   \n\n}\n\n.header > button{\n    display: inline-block;\n    grid-row-start: 2;\n\n    width: 100%;\n    \n    font-family: inherit;\n    background: none;\n    border: none;\n    margin: 0;\n    padding: 0;\n    cursor: pointer;\n\n   \n\n    font-size: clamp(1rem, 3vw, 1.3rem);\n   \n\n    \n}\n\n#title-header{\n    grid-area: 1 / 2 / 2 / -1;\n    font-size: clamp(1.2rem, 12vw, 10rem);\n    text-align: center;\n    \n}\n\n\n#main-content{\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n}\n\n.main{\n    margin-top: 50px;\n}\n\n#menu{\n    margin-top: 5%;\n    display: flex;\n    flex-direction: column;\n\n}\n\n.menu-header{\n    text-align: center;\n     \n}\n\n.menu-subheader{\n    font-style: italic;\n    \n}\n\n\n.menu-item{\n    margin: 5px;\n    \n}\n\n.menu-dish{\n\n    display: grid;\n\n    grid-template-areas: \n    \"name . note\"\n    \"description description price\"\n    \"symbols . price\";\n\n    margin-top: 10px;\n\n}\n\n.menu-name{\n    grid-area: name;\n    color: var(--birdblue, black);\n \n   \n}\n\n.menu-price{\n    grid-area: price;\n    text-align: right;\n    font-weight: bold;\n}\n\n.menu-description{\n    grid-area: description;\n}\n\n.menu-note{\n    \n   grid-area: note;\n\n   font-style: italic;\n}\n\n.menu-symbol{\n    grid-area: symbols;\n}\n\n\n.pictures{\n   \n    border-radius: 5px;\n}\n#table-image{\n    height: auto;\n    width: 300px;\n}\n\n\n#story-page{\n    \n    display: grid;\n    gap: 20px;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n}\n\n.page{\n    display: flex;\n    justify-content: center;\n}\n\n#page-header{\n    margin: 15px 0px 15px 0px;\n    font-weight: 200;\n    font-style: italic;\n    font-size: clamp(1em, 10vw, 3.2rem);\n    \n}\n\n#form-container{\n    margin-top: 10%;\n    width: min(400px, 100%);\n    display: flex;\n    justify-content: center;\n    border: 3px solid var(--birdblue, black);\n    border-radius: 10px;\n    box-shadow: 1px 1px 5px;\n    background-color: var(--birdlavender, rgb(222, 196, 247));\n    padding: 10px;\n}\n\n.form-label{\n    display: flex;\n    flex-direction: column;\n    color: var(--birdblue, black);\n}\n\n.form-input{\n    background-color: var(--background-color, white);\n    border: 3px solid var(--birdblue, black);\n    border-radius: 5px;\n    width: min(90%, 14rem);\n}\n\n#submit-button{\n    margin-top: 10px;\n    font: inherit;\n    font-weight: bold;\n    color: var(--birdblue, black);\n    border: 1px var(--birdblue, black) outset;\n    border-radius: 5px;\n}\n\n#reservation-form{\n    padding: 5px;\n}\n\n#submit-modal{\n    position: fixed;\n    z-index: 1;\n    width: min(100vw, 330px);\n    height: min(100vh, 150px);\n    border: 2px solid var(--birdblue, black);\n    border-radius: 5px;\n    display: none;\n    justify-content: center;\n    align-items: center;\n\n    background-color: var(--birdlavender, black);\n}\n\n#modal-content{\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-weight: 300;\n    font-style: italic;\n    align-items: center;\n    justify-items: center;\n    color:rgba(148, 21, 21, 0.788);\n    width: 80%;\n    height: 60%;\n    display: flex;\n    flex-direction: column;\n}\n\n#submit-text{\n    color: black;\n}\n\n.hidden{\n    background-color: red;\n}\n\n#main-page{\n    display: grid;\n}\n\n.page-content{\n    margin-top: 5%;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n\n}\n\n.photo{\n    margin: 10px;\n    width: min(90%, 350px);\n    height: auto;\n    border: #121e6a  solid;\n    border-radius: 10px;\n}\n\n.text-content{\n    align-self: center;\n    font-style: italic;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    --background-color:  rgb(255, 254, 241);\n    --birdblue: #121e6a;\n    --birdlavender: #bebfd4;\n    \n    \n}\n\nbody{\n    background-color: rgb(255, 254, 241);\n   \n    display: flex;\n    flex-direction: column;\n    align-items:  center;\n    font-family: 'Arima', cursive;\n  \n}\n\nh1, h2, h3, p{\n    margin: 0;\n}\n\n#content{\n    \n    height: 100vh;\n    width:  max(330px, 70vw);\n}\n\n#main-image{\n   \n    border: 5px dotted green;\n    height: auto;\n    width: 400px;\n}\n\n.logo{\n   \n    width: max(80px, 20vw);\n    height: auto;\n    display: flex;\n    \n    grid-area: 1 / 1 / 3 / 2;\n    align-self: center;\n\n}\n\n.logo > img{\n    width: 100%;\n    height: auto;\n}\n\n.header{\n    \n    display: grid;\n\n   \n    justify-content:flex-end;\n    gap: 10px;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: 2fr 1fr;\n\n    text-align: center;\n    font-size: 18px;\n   \n\n}\n\n.header > button{\n    display: inline-block;\n    grid-row-start: 2;\n\n    width: 100%;\n    \n    font-family: inherit;\n    background: none;\n    border: none;\n    margin: 0;\n    padding: 0;\n    cursor: pointer;\n\n   \n\n    font-size: clamp(1rem, 3vw, 1.3rem);\n   \n\n    \n}\n\n#title-header{\n    grid-area: 1 / 2 / 2 / -1;\n    font-size: clamp(1.2rem, 12vw, 10rem);\n    text-align: center;\n    \n}\n\n\n#main-content{\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n}\n\n.main{\n    margin-top: 50px;\n}\n\n#menu{\n    margin-top: 5%;\n    display: flex;\n    flex-direction: column;\n\n}\n\n.menu-header{\n    text-align: center;\n     \n}\n\n.menu-subheader{\n    font-style: italic;\n    \n}\n\n\n.menu-item{\n    margin: 5px;\n    \n}\n\n.menu-dish{\n\n    display: grid;\n\n    grid-template-areas: \n    \"name . note\"\n    \"description description price\"\n    \"symbols . price\";\n\n    margin-top: 10px;\n\n}\n\n.menu-name{\n    grid-area: name;\n    color: var(--birdblue, black);\n \n   \n}\n\n.menu-price{\n    grid-area: price;\n    text-align: right;\n    font-weight: bold;\n}\n\n.menu-description{\n    grid-area: description;\n}\n\n.menu-note{\n    \n   grid-area: note;\n\n   font-style: italic;\n}\n\n.menu-symbol{\n    grid-area: symbols;\n}\n\n\n.pictures{\n   \n    border-radius: 5px;\n}\n#table-image{\n    height: auto;\n    width: 300px;\n}\n\n\n#story-page{\n    \n    display: grid;\n    gap: 20px;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n}\n\n.page{\n    display: flex;\n    justify-content: center;\n}\n\n#page-header{\n    margin: 15px 0px 15px 0px;\n    font-weight: 200;\n    font-style: italic;\n    font-size: clamp(1em, 10vw, 3.2rem);\n    \n}\n\n#form-container{\n    margin-top: 10%;\n    width: min(400px, 100%);\n    display: flex;\n    justify-content: center;\n    border: 3px solid var(--birdblue, black);\n    border-radius: 10px;\n    box-shadow: 1px 1px 5px;\n    background-color: var(--birdlavender, rgb(222, 196, 247));\n    padding: 10px;\n}\n\n.form-label{\n    display: flex;\n    flex-direction: column;\n    color: var(--birdblue, black);\n}\n\n.form-input{\n    background-color: var(--background-color, white);\n    border: 3px solid var(--birdblue, black);\n    border-radius: 5px;\n    width: min(90%, 14rem);\n}\n\n#submit-button{\n    margin-top: 10px;\n    font: inherit;\n    font-weight: bold;\n    color: var(--birdblue, black);\n    border: 1px var(--birdblue, black) outset;\n    border-radius: 5px;\n}\n\n#reservation-form{\n    padding: 5px;\n}\n\n#submit-modal{\n    position: fixed;\n    z-index: 1;\n    width: min(100vw, 330px);\n    height: min(100vh, 150px);\n    border: 2px solid var(--birdblue, black);\n    border-radius: 5px;\n    display: none;\n    justify-content: center;\n    align-items: center;\n\n    background-color: var(--birdlavender, black);\n}\n\n#modal-content{\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-weight: 300;\n    font-style: italic;\n    align-items: center;\n    justify-items: center;\n    color:rgba(148, 21, 21, 0.788);\n    width: 80%;\n    height: 60%;\n    display: flex;\n    flex-direction: column;\n}\n\n#submit-text{\n    color: black;\n}\n\n.hidden{\n    background-color: red;\n}\n\n#main-page{\n    display: grid;\n}\n\n.page-content{\n    margin-top: 5%;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n\n}\n\n.photo{\n    margin: 10px;\n    width: min(90%, 350px);\n    height: auto;\n    border: #121e6a  solid;\n    border-radius: 10px;\n}\n\n.text-content{\n    align-self: center;\n    font-style: italic;\n}\n\n"],"sourceRoot":""}]);
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
/* harmony import */ var _farm_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./farm.jpg */ "./src/farm.jpg");
/* harmony import */ var _farmbird_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./farmbird.jpg */ "./src/farmbird.jpg");





const buildMain = () => {


    const page = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('div', {"class": "page", "id": "main-page"})
    
    const pageHeader = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('h1', {"class": "menu-header", "id": "page-header"});
    pageHeader.textContent = "welcome to bluebird"

    // Create a section of content, with text and image (optional);    
    const createContent = (name, content, photo) => {

        const container = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('div', {"class": "page-content", 'id': `${name}-content`});
        const text = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('div', {"class": "text-content content", "id": `${name}-text`});
        text.textContent = content;

        if (photo != null){

            const picture = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('img', {"class": "photo", "id": `${name}-photo`, "src": photo})
            container.appendChild(picture);
        }
        
        container.appendChild(text);
        return container;
    }

    const farmtext = "A number of wild bluebirds call our farm home, and we've taken inspiration from them in our dishes developed right from our garden." 
    const test = createContent("test", "This is a test, did it work?");
    const farm = createContent("farm",farmtext, _farmbird_jpg__WEBPACK_IMPORTED_MODULE_2__);
    // farm contents
    /* const farmContent = element('div', {"class": 'page-content', "id": "farm-content"});
    const farm = element('img', {"class": "photo", "id": "farm-photo", "src": birdData});
    const farmText = element('div', {"class": "text-content content", "id": "farm-text"});
    farmText.textContent = "A number of wild bluebirds call our farm home, and we've taken inspiration from them in our dishes developed right from our garden."                
    farmContent.appendChild(farm);
    farmContent.appendChild(farmText); */
    
   
    page.appendChild(pageHeader);
    page.appendChild(farm);
    page.appendChild(test);
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

/***/ "./src/farm.jpg":
/*!**********************!*\
  !*** ./src/farm.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f79375d7262af008fd3a.jpg";

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

/***/ "./src/story.txt":
/*!***********************!*\
  !*** ./src/story.txt ***!
  \***********************/
/***/ ((module) => {

module.exports = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet facilisis magna etiam tempor orci eu lobortis elementum. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Netus et malesuada fames ac turpis egestas sed tempus urna. Tincidunt arcu non sodales neque. Elementum curabitur vitae nunc sed velit dignissim sodales ut. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Maecenas pharetra convallis posuere morbi leo urna molestie at. Risus ultricies tristique nulla aliquet enim tortor at auctor urna. Ipsum dolor sit amet consectetur adipiscing. Velit scelerisque in dictum non consectetur a. Sagittis orci a scelerisque purus semper eget. Et tortor consequat id porta nibh venenatis. Massa id neque aliquam vestibulum morbi. Massa tincidunt dui ut ornare lectus sit amet est. Eu nisl nunc mi ipsum faucibus vitae aliquet. Feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat. Quam id leo in vitae turpis massa sed elementum. Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit amet.\n\nEget mi proin sed libero enim sed faucibus. Ultricies integer quis auctor elit sed vulputate. Porta lorem mollis aliquam ut porttitor leo a diam. Eu augue ut lectus arcu bibendum at varius vel pharetra. Id nibh tortor id aliquet lectus proin nibh nisl. Turpis massa tincidunt dui ut ornare lectus sit amet. Odio morbi quis commodo odio. Scelerisque in dictum non consectetur. Sodales ut eu sem integer. Ac orci phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Sed augue lacus viverra vitae congue eu. A cras semper auctor neque vitae tempus. Sagittis id consectetur purus ut. Eget nunc scelerisque viverra mauris. Malesuada fames ac turpis egestas integer eget aliquet. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit. In egestas erat imperdiet sed.";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2M7OztBQUduQzs7O0FBR0E7QUFDQTtBQUNBLFFBQVEsK0RBQWU7QUFDdkIsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsUUFBUSwrREFBZTtBQUN2QixLQUFLOztBQUVMO0FBQ0E7QUFDQSxRQUFRLCtEQUFlO0FBQ3ZCLEtBQUs7O0FBRUw7QUFDQTtBQUNBLFFBQVEsK0RBQWU7QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBLGEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvYnVpbGRwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3RvcnkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICByZ2IoMjU1LCAyNTQsIDI0MSk7XFxuICAgIC0tYmlyZGJsdWU6ICMxMjFlNmE7XFxuICAgIC0tYmlyZGxhdmVuZGVyOiAjYmViZmQ0O1xcbiAgICBcXG4gICAgXFxufVxcblxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NCwgMjQxKTtcXG4gICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6ICBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnQXJpbWEnLCBjdXJzaXZlO1xcbiAgXFxufVxcblxcbmgxLCBoMiwgaDMsIHB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIFxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogIG1heCgzMzBweCwgNzB2dyk7XFxufVxcblxcbiNtYWluLWltYWdle1xcbiAgIFxcbiAgICBib3JkZXI6IDVweCBkb3R0ZWQgZ3JlZW47XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4ubG9nb3tcXG4gICBcXG4gICAgd2lkdGg6IG1heCg4MHB4LCAyMHZ3KTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDMgLyAyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxufVxcblxcbi5sb2dvID4gaW1ne1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG5cXG4gICBcXG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmcjtcXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgXFxuXFxufVxcblxcbi5oZWFkZXIgPiBidXR0b257XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgXFxuXFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgM3Z3LCAxLjNyZW0pO1xcbiAgIFxcblxcbiAgICBcXG59XFxuXFxuI3RpdGxlLWhlYWRlcntcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAtMTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDEydncsIDEwcmVtKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuXFxuI21haW4tY29udGVudHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1haW57XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbiNtZW51e1xcbiAgICBtYXJnaW4tdG9wOiA1JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG59XFxuXFxuLm1lbnUtaGVhZGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICBcXG59XFxuXFxuLm1lbnUtc3ViaGVhZGVye1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIFxcbn1cXG5cXG5cXG4ubWVudS1pdGVte1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgXFxufVxcblxcbi5tZW51LWRpc2h7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwibmFtZSAuIG5vdGVcXFwiXFxuICAgIFxcXCJkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBwcmljZVxcXCJcXG4gICAgXFxcInN5bWJvbHMgLiBwcmljZVxcXCI7XFxuXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuXFxufVxcblxcbi5tZW51LW5hbWV7XFxuICAgIGdyaWQtYXJlYTogbmFtZTtcXG4gICAgY29sb3I6IHZhcigtLWJpcmRibHVlLCBibGFjayk7XFxuIFxcbiAgIFxcbn1cXG5cXG4ubWVudS1wcmljZXtcXG4gICAgZ3JpZC1hcmVhOiBwcmljZTtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubWVudS1kZXNjcmlwdGlvbntcXG4gICAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcXG59XFxuXFxuLm1lbnUtbm90ZXtcXG4gICAgXFxuICAgZ3JpZC1hcmVhOiBub3RlO1xcblxcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLm1lbnUtc3ltYm9se1xcbiAgICBncmlkLWFyZWE6IHN5bWJvbHM7XFxufVxcblxcblxcbi5waWN0dXJlc3tcXG4gICBcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4jdGFibGUtaW1hZ2V7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG5cXG4jc3RvcnktcGFnZXtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbn1cXG5cXG4ucGFnZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNwYWdlLWhlYWRlcntcXG4gICAgbWFyZ2luOiAxNXB4IDBweCAxNXB4IDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFlbSwgMTB2dywgMy4ycmVtKTtcXG4gICAgXFxufVxcblxcbiNmb3JtLWNvbnRhaW5lcntcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcbiAgICB3aWR0aDogbWluKDQwMHB4LCAxMDAlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJpcmRibHVlLCBibGFjayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iaXJkbGF2ZW5kZXIsIHJnYigyMjIsIDE5NiwgMjQ3KSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5mb3JtLWxhYmVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBjb2xvcjogdmFyKC0tYmlyZGJsdWUsIGJsYWNrKTtcXG59XFxuXFxuLmZvcm0taW5wdXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IsIHdoaXRlKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYmlyZGJsdWUsIGJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogbWluKDkwJSwgMTRyZW0pO1xcbn1cXG5cXG4jc3VibWl0LWJ1dHRvbntcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB2YXIoLS1iaXJkYmx1ZSwgYmxhY2spO1xcbiAgICBib3JkZXI6IDFweCB2YXIoLS1iaXJkYmx1ZSwgYmxhY2spIG91dHNldDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jcmVzZXJ2YXRpb24tZm9ybXtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4jc3VibWl0LW1vZGFse1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHdpZHRoOiBtaW4oMTAwdncsIDMzMHB4KTtcXG4gICAgaGVpZ2h0OiBtaW4oMTAwdmgsIDE1MHB4KTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmlyZGJsdWUsIGJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmlyZGxhdmVuZGVyLCBibGFjayk7XFxufVxcblxcbiNtb2RhbC1jb250ZW50e1xcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6cmdiYSgxNDgsIDIxLCAyMSwgMC43ODgpO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3N1Ym1pdC10ZXh0e1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5oaWRkZW57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuI21haW4tcGFnZXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLnBhZ2UtY29udGVudHtcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG5cXG59XFxuXFxuLnBob3Rve1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHdpZHRoOiBtaW4oOTAlLCAzNTBweCk7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYm9yZGVyOiAjMTIxZTZhICBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnRleHQtY29udGVudHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1Q0FBdUM7SUFDdkMsbUJBQW1CO0lBQ25CLHVCQUF1Qjs7O0FBRzNCOztBQUVBO0lBQ0ksb0NBQW9DOztJQUVwQyxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG9CQUFvQjtJQUNwQiw2QkFBNkI7O0FBRWpDOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBOztJQUVJLGFBQWE7SUFDYix3QkFBd0I7QUFDNUI7O0FBRUE7O0lBRUksd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBOztJQUVJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osYUFBYTs7SUFFYix3QkFBd0I7SUFDeEIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLGFBQWE7OztJQUdiLHdCQUF3QjtJQUN4QixTQUFTO0lBQ1QscUNBQXFDO0lBQ3JDLDJCQUEyQjs7SUFFM0Isa0JBQWtCO0lBQ2xCLGVBQWU7OztBQUduQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7O0lBRWpCLFdBQVc7O0lBRVgsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osU0FBUztJQUNULFVBQVU7SUFDVixlQUFlOzs7O0lBSWYsbUNBQW1DOzs7O0FBSXZDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHFDQUFxQztJQUNyQyxrQkFBa0I7O0FBRXRCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYixzQkFBc0I7O0FBRTFCOztBQUVBO0lBQ0ksa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLGtCQUFrQjs7QUFFdEI7OztBQUdBO0lBQ0ksV0FBVzs7QUFFZjs7QUFFQTs7SUFFSSxhQUFhOztJQUViOzs7cUJBR2lCOztJQUVqQixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDZCQUE2Qjs7O0FBR2pDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7O0dBRUcsZUFBZTs7R0FFZixrQkFBa0I7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUdBOztJQUVJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7OztBQUdBOztJQUVJLGFBQWE7SUFDYixTQUFTO0lBQ1QsNERBQTREO0FBQ2hFOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1DQUFtQzs7QUFFdkM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsd0NBQXdDO0lBQ3hDLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIseURBQXlEO0lBQ3pELGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGdEQUFnRDtJQUNoRCx3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3Qix5Q0FBeUM7SUFDekMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6Qix3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxzSEFBc0g7SUFDdEgsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QixVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2IsNERBQTREOztBQUVoRTs7QUFFQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICByZ2IoMjU1LCAyNTQsIDI0MSk7XFxuICAgIC0tYmlyZGJsdWU6ICMxMjFlNmE7XFxuICAgIC0tYmlyZGxhdmVuZGVyOiAjYmViZmQ0O1xcbiAgICBcXG4gICAgXFxufVxcblxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NCwgMjQxKTtcXG4gICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6ICBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnQXJpbWEnLCBjdXJzaXZlO1xcbiAgXFxufVxcblxcbmgxLCBoMiwgaDMsIHB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIFxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogIG1heCgzMzBweCwgNzB2dyk7XFxufVxcblxcbiNtYWluLWltYWdle1xcbiAgIFxcbiAgICBib3JkZXI6IDVweCBkb3R0ZWQgZ3JlZW47XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4ubG9nb3tcXG4gICBcXG4gICAgd2lkdGg6IG1heCg4MHB4LCAyMHZ3KTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDMgLyAyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxufVxcblxcbi5sb2dvID4gaW1ne1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG5cXG4gICBcXG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmcjtcXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgXFxuXFxufVxcblxcbi5oZWFkZXIgPiBidXR0b257XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgXFxuXFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgM3Z3LCAxLjNyZW0pO1xcbiAgIFxcblxcbiAgICBcXG59XFxuXFxuI3RpdGxlLWhlYWRlcntcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAtMTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDEydncsIDEwcmVtKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuXFxuI21haW4tY29udGVudHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1haW57XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbiNtZW51e1xcbiAgICBtYXJnaW4tdG9wOiA1JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG59XFxuXFxuLm1lbnUtaGVhZGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICBcXG59XFxuXFxuLm1lbnUtc3ViaGVhZGVye1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIFxcbn1cXG5cXG5cXG4ubWVudS1pdGVte1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgXFxufVxcblxcbi5tZW51LWRpc2h7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwibmFtZSAuIG5vdGVcXFwiXFxuICAgIFxcXCJkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBwcmljZVxcXCJcXG4gICAgXFxcInN5bWJvbHMgLiBwcmljZVxcXCI7XFxuXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuXFxufVxcblxcbi5tZW51LW5hbWV7XFxuICAgIGdyaWQtYXJlYTogbmFtZTtcXG4gICAgY29sb3I6IHZhcigtLWJpcmRibHVlLCBibGFjayk7XFxuIFxcbiAgIFxcbn1cXG5cXG4ubWVudS1wcmljZXtcXG4gICAgZ3JpZC1hcmVhOiBwcmljZTtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubWVudS1kZXNjcmlwdGlvbntcXG4gICAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcXG59XFxuXFxuLm1lbnUtbm90ZXtcXG4gICAgXFxuICAgZ3JpZC1hcmVhOiBub3RlO1xcblxcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLm1lbnUtc3ltYm9se1xcbiAgICBncmlkLWFyZWE6IHN5bWJvbHM7XFxufVxcblxcblxcbi5waWN0dXJlc3tcXG4gICBcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4jdGFibGUtaW1hZ2V7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG5cXG4jc3RvcnktcGFnZXtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbn1cXG5cXG4ucGFnZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNwYWdlLWhlYWRlcntcXG4gICAgbWFyZ2luOiAxNXB4IDBweCAxNXB4IDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFlbSwgMTB2dywgMy4ycmVtKTtcXG4gICAgXFxufVxcblxcbiNmb3JtLWNvbnRhaW5lcntcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcbiAgICB3aWR0aDogbWluKDQwMHB4LCAxMDAlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJpcmRibHVlLCBibGFjayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iaXJkbGF2ZW5kZXIsIHJnYigyMjIsIDE5NiwgMjQ3KSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5mb3JtLWxhYmVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBjb2xvcjogdmFyKC0tYmlyZGJsdWUsIGJsYWNrKTtcXG59XFxuXFxuLmZvcm0taW5wdXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IsIHdoaXRlKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYmlyZGJsdWUsIGJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogbWluKDkwJSwgMTRyZW0pO1xcbn1cXG5cXG4jc3VibWl0LWJ1dHRvbntcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB2YXIoLS1iaXJkYmx1ZSwgYmxhY2spO1xcbiAgICBib3JkZXI6IDFweCB2YXIoLS1iaXJkYmx1ZSwgYmxhY2spIG91dHNldDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jcmVzZXJ2YXRpb24tZm9ybXtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4jc3VibWl0LW1vZGFse1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHdpZHRoOiBtaW4oMTAwdncsIDMzMHB4KTtcXG4gICAgaGVpZ2h0OiBtaW4oMTAwdmgsIDE1MHB4KTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmlyZGJsdWUsIGJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmlyZGxhdmVuZGVyLCBibGFjayk7XFxufVxcblxcbiNtb2RhbC1jb250ZW50e1xcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6cmdiYSgxNDgsIDIxLCAyMSwgMC43ODgpO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3N1Ym1pdC10ZXh0e1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5oaWRkZW57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuI21haW4tcGFnZXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG59XFxuXFxuLnBhZ2UtY29udGVudHtcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG5cXG59XFxuXFxuLnBob3Rve1xcbiAgICBtYXJnaW46IDEwcHg7XFxuICAgIHdpZHRoOiBtaW4oOTAlLCAzNTBweCk7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgYm9yZGVyOiAjMTIxZTZhICBzb2xpZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnRleHQtY29udGVudHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGJpcmQgZnJvbSAnLi9ibHVlYmlyZC5wbmcnXG5pbXBvcnQgYmxhY2tiaXJkIGZyb20gJy4vYmxhY2tiaXJkLnBuZydcbmltcG9ydCB7IGVsZW1lbnQsIGdldERhdGUgfSBmcm9tICcuL3V0aWxpdGllcy5qcyc7XG5pbXBvcnQgeyBidWlsZE1lbnUgfSAgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCB7IGJ1aWxkQ29udGFjdH0gZnJvbSAnLi9jb250YWN0LmpzJztcbmltcG9ydCB7IGJ1aWxkU3RvcnkgfSBmcm9tICcuL3N0b3J5JztcbmltcG9ydCB7IGJ1aWxkTWFpbiB9IGZyb20gJy4vbWFpbic7XG5cblxuXG4vLyBDcmVhdGUgd2Vic2l0ZSBsYXlvdXRcblxuXG4vLyBDcmVhdGUgYW4gZWxlbWVudCBhbmQgYXNzaWduIGFueSBhdHRyaWJ1dGVzXG5cblxuY29uc3QgYnVpbGQgPSAoKCkgPT4ge1xuXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcbiAgICBcbiAgICBnZXREYXRlKCk7XG5cbiAgICBjb25zdCBidWlsZEhlYWRlciA9ICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRpdGxlVGV4dCA9IFwiYmx1ZWJpcmRcIjtcbiAgICAgICAgY29uc3QgbWVudVRleHQgPSBcIm1lbnVcIjtcbiAgICAgICAgY29uc3QgY29udGFjdFRleHQgPSBcInJlc2VydmF0aW9uc1wiO1xuICAgICAgICBjb25zdCBzdG9yeVRleHQgPSBcIm91ciBzdG9yeVwiXG5cbiAgICAgICAgY29uc3QgaGVhZGVyID0gZWxlbWVudCgnZGl2Jywge1wiY2xhc3NcIjogXCJoZWFkZXJcIiB9KVxuICAgICAgICBcbiAgICAgICAgLy8gc3ViLXRpdGxlc1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZWxlbWVudCgnYnV0dG9uJywge1wiY2xhc3NcIjogXCJ0aXRsZVwiLCBcImlkXCI6IFwidGl0bGUtaGVhZGVyXCJ9KTtcbiAgICAgICAgY29uc3QgbG9nbyA9IGVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IFwibG9nb1wifSk7XG4gICAgICAgIGNvbnN0IG1lbnUgPSBlbGVtZW50KCdidXR0b24nLCB7XCJpZFwiOiBcIm1lbnUtYnV0dG9uXCIsIFwiY2xhc3NcIjogXCJoZWFkZXItbGlua1wifSk7XG4gICAgICAgIGNvbnN0IGNvbnRhY3QgPSBlbGVtZW50KCdidXR0b24nLCB7XCJpZFwiOiBcImNvbnRhY3QtYnV0dG9uXCIsIFwiY2xhc3NcIjogXCJoZWFkZXItbGlua1wifSk7XG4gICAgICAgIGNvbnN0IHN0b3J5ID0gZWxlbWVudCgnYnV0dG9uJywge1wiaWRcIjogXCJzdG9yeS1idXR0b25cIiwgXCJjbGFzc1wiOiBcImhlYWRlci1saW5rXCJ9KTtcbiAgICAgICBcbiAgICAgICAgICAgXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVUZXh0O1xuICAgICAgICBtZW51LnRleHRDb250ZW50ID0gbWVudVRleHQ7XG4gICAgICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSBjb250YWN0VGV4dDtcbiAgICAgICAgc3RvcnkudGV4dENvbnRlbnQgPSBzdG9yeVRleHQ7XG5cbiAgICAgIFxuICAgICAgICAvLyBMb2dvXG4gICAgICAgIFxuICAgICAgICAvL3NldEF0dHJpYnV0ZXMobG9nbywge1wiY2xhc3NcIjogXCJsb2dvXCJ9KVxuICAgICAgICBcbiAgICAgICAgY29uc3QgbWFpbkltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIG1haW5JbWFnZS5zcmMgPSBiaXJkO1xuICAgICAgICBsb2dvLmFwcGVuZENoaWxkKG1haW5JbWFnZSlcblxuXG4gICAgICAgIFxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChtZW51KTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc3RvcnkpO1xuICAgIFxuICAgICAgXG5cbiAgICAgICAgcmV0dXJuIGhlYWRlcjtcblxuICAgIH1cbiAgXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChidWlsZEhlYWRlcigpKVxuICAgIFxuICBcblxuICAgIGNvbnN0IGJ1aWxkVGVtcCA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCB0ZW1wVGV4dCA9IFwiV2VsY29tZSB0byBibHVlYmlyZC5cIjtcblxuICAgICAgICBjb25zdCBzZWNvbmQgPSBcIiBFdCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMgbWFlY2VuYXMgcGhhcmV0cmEgY29udmFsbGlzLiBBcmN1IG5vbiBzb2RhbGVzIG5lcXVlIHNvZGFsZXMuIFZ1bHB1dGF0ZSBzYXBpZW4gbmVjIHNhZ2l0dGlzIGFsaXF1YW0gbWFsZXN1YWRhIGJpYmVuZHVtIGFyY3Ugdml0YWUuXCI7XG5cbiAgICAgICAgY29uc3QgdGVtcEJpZyA9IFwiTWF0dGlzIHJob25jdXMgdXJuYSBuZXF1ZSB2aXZlcnJhIGp1c3RvIG5lYyB1bHRyaWNlcyBkdWkuIEF0IGF1Y3RvciB1cm5hIG51bmMgaWQgY3Vyc3VzIG1ldHVzLiBOdW5jIGNvbnNlcXVhdCBpbnRlcmR1bSB2YXJpdXMgc2l0IGFtZXQgbWF0dGlzIHZ1bHB1dGF0ZSBlbmltIG51bGxhLiBcIiBcbiAgICAgICAgY29uc3QgbWFpbiA9IGVsZW1lbnQoJ2RpdicsIHtcImlkXCI6IFwibWFpbi1jb250ZW50XCIsIFwiY2xhc3NcIjogXCJtYWluXCIsfSk7XG4gICAgICAgIGNvbnN0IG1haW5UZXh0ID0gZWxlbWVudCgnZGl2Jywge1wiaWRcIjogXCJtYWluLXRleHRcIiwgXCJjbGFzc1wiOiBcIm1haW5cIix9KTtcbiAgICAgICAgY29uc3Qgc2Vjb25kVGV4dCA9IGVsZW1lbnQoJ2RpdicsIHtcImlkXCI6IFwic2Vjb25kLXRleHRcIiwgXCJjbGFzc1wiOiBcIm1haW5cIix9KTtcbiAgICAgICAgY29uc3QgYmJpcmQgPSBlbGVtZW50KCdpbWcnLCB7XCJ3aWR0aFwiOiBcIjEwMHB4XCJ9KTtcbiAgICAgICAgYmJpcmQuc3JjID0gYmxhY2tiaXJkO1xuXG4gICAgICAgIG1haW5UZXh0LnRleHRDb250ZW50ID0gdGVtcEJpZztcbiAgICAgICAgc2Vjb25kVGV4dC50ZXh0Q29udGVudCA9IHNlY29uZDtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChtYWluVGV4dCk7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoc2Vjb25kVGV4dCk7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoYmJpcmQpO1xuXG4gICAgICAgIHJldHVybiBtYWluO1xuXG4gICAgfVxuXG4gXG5cbiAgICBjb25zdCBidWlsZFBhZ2UgPSAoc291cmNlKSA9PiB7XG4gICAgICAgIC8vIGNsZWFyIHBhZ2VcblxuICAgICAgICBjb25zb2xlLmxvZyhzb3VyY2UpXG4gICAgICAgIGlmIChjb250ZW50LmNoaWxkcmVuLmxlbmd0aCA+IDEpIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0RWxlbWVudENoaWxkKTsgXG4gICAgICAgIGxldCBwYWdlO1xuICAgICAgICBcbiAgICAgICAgaWYgKHNvdXJjZSA9PT0gJ21lbnUnKXtcbiAgICAgICAgICAgIHBhZ2UgPSBidWlsZE1lbnUoKTsgICBcbiAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNvdXJjZSA9PT0gJ2NvbnRhY3QnKXtcbiAgICAgICAgICAgIHBhZ2UgPSBidWlsZENvbnRhY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc291cmNlID09PSAnc3RvcnknKXtcbiAgICAgICAgICAgIHBhZ2UgPSBidWlsZFN0b3J5KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc291cmNlID09PSAnbWFpbicpe1xuICAgICAgICAgICAgcGFnZSA9IGJ1aWxkTWFpbigpO1xuICAgICAgICB9XG5cblxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2UpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBidWlsZFBhZ2UoJ21haW4nKTtcbiAgIFxuXG4gICAgY29uc29sZS5sb2coY29udGVudCk7XG5cbiAgICBcbiAgICByZXR1cm4ge2J1aWxkUGFnZX1cbi8vIENyZWF0ZXMgYSBuZXcgZWxlbWVudCBhbmQgZmxleGlibHkgYXNzaWduZXMgYXR0cmlidXRlcztcblxuXG59KSgpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgYnVpbGQ7XG4iLCJpbXBvcnQgeyBlbGVtZW50LCBmb3JtYXRQaG9uZSwgZ2V0RGF0ZSB9IGZyb20gJy4vdXRpbGl0aWVzLmpzJztcblxuY29uc3QgYnVpbGRDb250YWN0ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgT1BFTlRJTUUgPSBcIjE2OjAwXCI7XG4gICAgY29uc3QgQ0xPU0VUSU1FID0gXCIyMTowMFwiO1xuXG5cbiAgICBjb25zdCBwYWdlID0gZWxlbWVudCgnZGl2Jywge1wiY2xhc3NcIjogXCJwYWdlXCJ9KVxuXG5cbiAgICAvLyBDcmVhdGUgZm9ybVxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBlbGVtZW50KCdkaXYnLCB7XCJpZFwiOiBcImZvcm0tY29udGFpbmVyXCJ9KTtcbiAgICBjb25zdCBmb3JtID0gZWxlbWVudCgnZm9ybScsIHtcImlkXCI6IFwicmVzZXJ2YXRpb24tZm9ybVwifSk7XG5cbiAgICBjb25zdCBuYW1lTGFiZWwgPSBlbGVtZW50KCdsYWJlbCcsIHtcImZvclwiOiBcIm5hbWVcIiwgXCJjbGFzc1wiOiBcImZvcm0tbGFiZWxcIn0pO1xuICAgIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiRnVsbCBOYW1lXCJcbiAgICBjb25zdCBuYW1lID0gZWxlbWVudCgnaW5wdXQnLCB7XCJ0eXBlXCI6IFwidGV4dFwiLCBcImNsYXNzXCI6IFwiZm9ybS1pbnB1dFwiLCBcIm5hbWVcIjogXCJuYW1lXCIsIFwiaWRcIjogXCJmb3JtX25hbWVcIiwgXCJyZXF1aXJlZFwiOiBcIlwiLCBcInBsYWNlaG9sZGVyXCI6IFwiSm9obiBTbWl0aFwiIH0pXG4gICAgbmFtZUxhYmVsLmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZWxlbWVudCgnbGFiZWwnLCB7XCJmb3JcIjogXCJkYXRlXCIsIFwiY2xhc3NcIjogXCJmb3JtLWxhYmVsXCJ9KTtcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkRhdGVcIjtcbiAgICBjb25zdCB0b2RheSA9IGdldERhdGUoKTtcbiAgICBjb25zdCBkYXRlID0gZWxlbWVudChcImlucHV0XCIsIHtcInR5cGVcIjogXCJkYXRlXCIsIFwiY2xhc3NcIjogXCJmb3JtLWlucHV0XCIsIFwibmFtZVwiOiBcIm5hbWVcIiwgXCJpZFwiOiBcImZvcm1fZGF0ZVwiLCBcIm1pblwiOiB0b2RheSwgXCJyZXF1aXJlZFwiOiBcIlwifSk7XG4gICAgZGF0ZUxhYmVsLmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgY29uc3QgdGltZUxhYmVsID0gZWxlbWVudCgnbGFiZWwnLCB7XCJmb3JcIjogXCJ0aW1lXCIsIFwiY2xhc3NcIjogXCJmb3JtLWxhYmVsXCJ9KTtcbiAgICB0aW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpbWVcIjtcbiAgICBjb25zdCB0aW1lID0gZWxlbWVudCgnaW5wdXQnLCB7XCJ0eXBlXCI6IFwidGltZVwiLCBcImNsYXNzXCI6IFwiZm9ybS1pbnB1dFwiLCBcIm5hbWVcIjogXCJ0aW1lXCIsIFwiaWRcIjogXCJmb3JtX3RpbWVcIiwgXCJ2YWx1ZVwiOiBcIjE2OjAwXCIsICBcIm1pblwiOiBPUEVOVElNRSwgXCJtYXhcIjogQ0xPU0VUSU1FLFwicmVxdWlyZWRcIjogXCJcIn0pO1xuICAgIHRpbWVMYWJlbC5hcHBlbmRDaGlsZCh0aW1lKTtcblxuICAgIGNvbnN0IHBob25lTGFiZWwgPSBlbGVtZW50KCdsYWJlbCcsIHtcImZvclwiOiBcInBob25lXCIsIFwiY2xhc3NcIjogXCJmb3JtLWxhYmVsXCJ9KTtcbiAgICBwaG9uZUxhYmVsLnRleHRDb250ZW50ID0gXCJQaG9uZSBOdW1iZXJcIjtcbiAgICBjb25zdCBwaG9uZSA9IGVsZW1lbnQoJ2lucHV0Jywge1widHlwZVwiOiBcInRlbFwiLCBcImNsYXNzXCI6IFwiZm9ybS1pbnB1dFwiLCBcIm5hbWVcIjogXCJwaG9uZVwiLCBcImlkXCI6IFwiZm9ybV9waG9uZVwiLCBcIm1heGxlbmd0aFwiOiAxMiwgXCJwbGFjZWhvbGRlclwiOiBcIjU1NS0yMTAtMzE1NFwiLCBcInJlcXVpcmVkXCI6IFwiXCJ9KVxuICAgIGZvcm1hdFBob25lKHBob25lKTtcbiAgICBwaG9uZUxhYmVsLmFwcGVuZENoaWxkKHBob25lKTtcblxuICAgIGNvbnN0IHN1Ym1pdCA9IGVsZW1lbnQoXCJpbnB1dFwiLCB7XCJ0eXBlXCI6IFwic3VibWl0XCIsIFwiY2xhc3NcIjogXCJidXR0b25cIiwgXCJpZFwiOiBcInN1Ym1pdC1idXR0b25cIn0pO1xuXG4gICAgY29uc3Qgc3VibWl0TW9kYWwgPSBlbGVtZW50KFwiZGl2XCIsIHtcImNsYXNzXCI6IFwibW9kYWwgaGlkZGVuXCIsIFwiaWRcIjogXCJzdWJtaXQtbW9kYWxcIn0pO1xuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGVsZW1lbnQoXCJkaXZcIiwge1wiaWRcIjogXCJtb2RhbC1jb250ZW50XCJ9KTtcbiAgICBjb25zdCBtb2RhbEhlYWRlciA9IGVsZW1lbnQoXCJoMlwiLCB7XCJjbGFzc1wiOiBcIm1vZGFsLWl0ZW1cIiwgXCJpZFwiOiBcInN1Ym1pdC1oZWFkZXJcIn0pO1xuICAgIGNvbnN0IG1vZGFsVGV4dCA9IGVsZW1lbnQoXCJwXCIsIHtcImNsYXNzXCI6IFwibW9kYWwtaXRlbVwiLCBcImlkXCI6IFwic3VibWl0LXRleHRcIn0pO1xuXG4gICAgbW9kYWxIZWFkZXIudGV4dENvbnRlbnQgPSBcIlJlc2VydmF0aW9uIFVuYXZhaWxpYmxlXCI7XG4gICAgbW9kYWxUZXh0LnRleHRDb250ZW50ID0gXCJQbGVhc2UgY2hlY2sgYWdhaW4gc29vblwiXG4gICAgXG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsSGVhZGVyKTtcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxUZXh0KTtcbiAgICBzdWJtaXRNb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzdWJtaXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuXG4gICAgfSlcbiAgXG4gICAgLy8gQXR0YWNoIGZvcm0gZWxlbWVudHMgXG4gICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpbWVMYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwaG9uZUxhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbiBcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgcGFnZS5hcHBlbmRDaGlsZChzdWJtaXRNb2RhbCk7XG5cbiAgICByZXR1cm4gcGFnZTtcbn1cblxuZXhwb3J0IHtidWlsZENvbnRhY3R9OyIsImltcG9ydCB7IGVsZW1lbnQgfSBmcm9tICcuL3V0aWxpdGllcy5qcyc7XG5pbXBvcnQgZmFybURhdGEgZnJvbSAnLi9mYXJtLmpwZyc7XG5pbXBvcnQgYmlyZERhdGEgZnJvbSAnLi9mYXJtYmlyZC5qcGcnO1xuXG5cbmNvbnN0IGJ1aWxkTWFpbiA9ICgpID0+IHtcblxuXG4gICAgY29uc3QgcGFnZSA9IGVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IFwicGFnZVwiLCBcImlkXCI6IFwibWFpbi1wYWdlXCJ9KVxuICAgIFxuICAgIGNvbnN0IHBhZ2VIZWFkZXIgPSBlbGVtZW50KCdoMScsIHtcImNsYXNzXCI6IFwibWVudS1oZWFkZXJcIiwgXCJpZFwiOiBcInBhZ2UtaGVhZGVyXCJ9KTtcbiAgICBwYWdlSGVhZGVyLnRleHRDb250ZW50ID0gXCJ3ZWxjb21lIHRvIGJsdWViaXJkXCJcblxuICAgIC8vIENyZWF0ZSBhIHNlY3Rpb24gb2YgY29udGVudCwgd2l0aCB0ZXh0IGFuZCBpbWFnZSAob3B0aW9uYWwpOyAgICBcbiAgICBjb25zdCBjcmVhdGVDb250ZW50ID0gKG5hbWUsIGNvbnRlbnQsIHBob3RvKSA9PiB7XG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZWxlbWVudCgnZGl2Jywge1wiY2xhc3NcIjogXCJwYWdlLWNvbnRlbnRcIiwgJ2lkJzogYCR7bmFtZX0tY29udGVudGB9KTtcbiAgICAgICAgY29uc3QgdGV4dCA9IGVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IFwidGV4dC1jb250ZW50IGNvbnRlbnRcIiwgXCJpZFwiOiBgJHtuYW1lfS10ZXh0YH0pO1xuICAgICAgICB0ZXh0LnRleHRDb250ZW50ID0gY29udGVudDtcblxuICAgICAgICBpZiAocGhvdG8gIT0gbnVsbCl7XG5cbiAgICAgICAgICAgIGNvbnN0IHBpY3R1cmUgPSBlbGVtZW50KCdpbWcnLCB7XCJjbGFzc1wiOiBcInBob3RvXCIsIFwiaWRcIjogYCR7bmFtZX0tcGhvdG9gLCBcInNyY1wiOiBwaG90b30pXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGljdHVyZSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbiAgICBjb25zdCBmYXJtdGV4dCA9IFwiQSBudW1iZXIgb2Ygd2lsZCBibHVlYmlyZHMgY2FsbCBvdXIgZmFybSBob21lLCBhbmQgd2UndmUgdGFrZW4gaW5zcGlyYXRpb24gZnJvbSB0aGVtIGluIG91ciBkaXNoZXMgZGV2ZWxvcGVkIHJpZ2h0IGZyb20gb3VyIGdhcmRlbi5cIiBcbiAgICBjb25zdCB0ZXN0ID0gY3JlYXRlQ29udGVudChcInRlc3RcIiwgXCJUaGlzIGlzIGEgdGVzdCwgZGlkIGl0IHdvcms/XCIpO1xuICAgIGNvbnN0IGZhcm0gPSBjcmVhdGVDb250ZW50KFwiZmFybVwiLGZhcm10ZXh0LCBiaXJkRGF0YSk7XG4gICAgLy8gZmFybSBjb250ZW50c1xuICAgIC8qIGNvbnN0IGZhcm1Db250ZW50ID0gZWxlbWVudCgnZGl2Jywge1wiY2xhc3NcIjogJ3BhZ2UtY29udGVudCcsIFwiaWRcIjogXCJmYXJtLWNvbnRlbnRcIn0pO1xuICAgIGNvbnN0IGZhcm0gPSBlbGVtZW50KCdpbWcnLCB7XCJjbGFzc1wiOiBcInBob3RvXCIsIFwiaWRcIjogXCJmYXJtLXBob3RvXCIsIFwic3JjXCI6IGJpcmREYXRhfSk7XG4gICAgY29uc3QgZmFybVRleHQgPSBlbGVtZW50KCdkaXYnLCB7XCJjbGFzc1wiOiBcInRleHQtY29udGVudCBjb250ZW50XCIsIFwiaWRcIjogXCJmYXJtLXRleHRcIn0pO1xuICAgIGZhcm1UZXh0LnRleHRDb250ZW50ID0gXCJBIG51bWJlciBvZiB3aWxkIGJsdWViaXJkcyBjYWxsIG91ciBmYXJtIGhvbWUsIGFuZCB3ZSd2ZSB0YWtlbiBpbnNwaXJhdGlvbiBmcm9tIHRoZW0gaW4gb3VyIGRpc2hlcyBkZXZlbG9wZWQgcmlnaHQgZnJvbSBvdXIgZ2FyZGVuLlwiICAgICAgICAgICAgICAgIFxuICAgIGZhcm1Db250ZW50LmFwcGVuZENoaWxkKGZhcm0pO1xuICAgIGZhcm1Db250ZW50LmFwcGVuZENoaWxkKGZhcm1UZXh0KTsgKi9cbiAgICBcbiAgIFxuICAgIHBhZ2UuYXBwZW5kQ2hpbGQocGFnZUhlYWRlcik7XG4gICAgcGFnZS5hcHBlbmRDaGlsZChmYXJtKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKHRlc3QpO1xuICAgIHBhZ2UuaWQgPSBcIm1haW4tcGFnZVwiO1xuXG5cblxuICAgIGNvbnNvbGUubG9nKHBhZ2UpO1xuICAgIHJldHVybiBwYWdlO1xuXG59XG5cbmV4cG9ydCB7YnVpbGRNYWlufTsiLCJpbXBvcnQgbWVudURhdGEgZnJvbSAnLi9tZW51Lmpzb24nO1xuaW1wb3J0IHsgZWxlbWVudCB9IGZyb20gJy4vdXRpbGl0aWVzLmpzJztcblxuXG5cbi8vY29uc29sZS5sb2cobWVudURhdGEuZGlzaGVzKTtcbmNvbnN0IGJ1aWxkTWVudSA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBtZW51ID0gZWxlbWVudCgnZGl2Jywge1wiaWRcIjogXCJtZW51XCJ9KTtcbiAgICBjb25zdCBtZW51SGVhZGVyID0gZWxlbWVudCgnaDEnLCB7XCJjbGFzc1wiOiBcIm1lbnUtaGVhZGVyXCJ9KTtcbiAgICBtZW51SGVhZGVyLnRleHRDb250ZW50ID0gXCJtZW51XCJcblxuICAgIC8vIG1lbnUgY2F0ZWdvcmllc1xuICAgIGNvbnN0IHN0YXJ0ZXIgPSBlbGVtZW50KCdkaXYnLCB7XCJpZFwiOiBcInN0YXJ0ZXJzXCJ9KTtcbiAgICBjb25zdCBzdGFydGVySGVhZGVyID0gZWxlbWVudCgnaDInLCB7XCJpZFwiOiBcInN0YXJ0ZXItaGVhZGVyXCIsIFwiY2xhc3NcIjogXCJtZW51LXN1YmhlYWRlclwifSlcbiAgICBzdGFydGVySGVhZGVyLnRleHRDb250ZW50ID0gXCJzdGFydGVyXCJcblxuICAgIGNvbnN0IG1haW4gPSBlbGVtZW50KCdkaXYnLCB7XCJpZFwiOiBcIm1haW5zXCJ9KVxuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBlbGVtZW50KCdoMicsIHtcImlkXCI6IFwibWVudS1oZWFkZXJcIiwgXCJjbGFzc1wiOiBcIm1lbnUtc3ViaGVhZGVyXCJ9KVxuICAgIG1haW5IZWFkZXIudGV4dENvbnRlbnQgPSBcIm1haW5cIlxuXG4gICAgY29uc3QgZGVzc2VydCA9IGVsZW1lbnQoJ2RpdicsIHtcImlkXCI6IFwiZGVzc2VydHNcIn0pO1xuICAgIGNvbnN0IGRlc3NlcnRIZWFkZXIgPSBlbGVtZW50KCdoMicsIHtcImlkXCI6IFwibWVudS1oZWFkZXJcIiwgXCJjbGFzc1wiOiBcIm1lbnUtc3ViaGVhZGVyXCJ9KVxuICAgIGRlc3NlcnRIZWFkZXIudGV4dENvbnRlbnQgPSBcImRlc3NlcnRcIjtcbiAgXG4gICAgc3RhcnRlci5hcHBlbmRDaGlsZChzdGFydGVySGVhZGVyKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5IZWFkZXIpO1xuICAgIGRlc3NlcnQuYXBwZW5kQ2hpbGQoZGVzc2VydEhlYWRlcik7XG5cbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVIZWFkZXIpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoc3RhcnRlcik7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGRlc3NlcnQpO1xuXG4gICAgLy8gcmVhZCBkaXNoIGZyb20gSlNPTlxuICAgIGNvbnN0IGJ1aWxkRGlzaCA9IChpdGVtKSA9PiB7XG5cbiAgICAgICAgY29uc3QgZGlzaCA9IGVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IFwibWVudS1kaXNoIFwifSk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBlbGVtZW50KCdoMycsIHtcImNsYXNzXCI6IFwibWVudS1uYW1lIG1lbnUtaXRlbVwiLCBcImlkXCI6IGBtZW51LSR7aXRlbS5uYW1lfWB9KTtcbiAgICAgICAgY29uc3QgcHJpY2UgPSBlbGVtZW50KCdwJywge1wiY2xhc3NcIjogXCJtZW51LXByaWNlIG1lbnUtaXRlbVwifSk7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBlbGVtZW50KCdwJywge1wiY2xhc3NcIjogXCJtZW51LWRlc2NyaXB0aW9uIG1lbnUtaXRlbVwifSk7XG4gICAgICAgIGNvbnN0IG5vdGUgPSBlbGVtZW50KCdwJywge1wiY2xhc3NcIjogXCJtZW51LW5vdGUgbWVudS1pdGVtXCJ9KTtcbiAgICAgICAgY29uc3Qgc3ltYm9sID0gZWxlbWVudCgnZGl2Jywge1wiY2xhc3NcIjogXCJtZW51LXN5bWJvbCBtZW51LWl0ZW1cIn0pO1xuICAgICAgICBcbiAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICAgICAgcHJpY2UudGV4dENvbnRlbnQgPSBpdGVtLnByaWNlO1xuICAgICAgICBkZXNjLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgICAgICAgbm90ZS50ZXh0Q29udGVudCA9IGl0ZW0ubm90ZTtcbiAgICAgICAgc3ltYm9sLmNsYXNzTGlzdC5hZGQoYCR7aXRlbS5zeW1ib2x9YClcblxuICAgICAgICBkaXNoLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgICAgICBkaXNoLmFwcGVuZENoaWxkKHByaWNlKTtcbiAgICAgICAgZGlzaC5hcHBlbmRDaGlsZChkZXNjKTtcbiAgICAgICAgZGlzaC5hcHBlbmRDaGlsZChub3RlKTtcbiAgICAgICAgZGlzaC5hcHBlbmRDaGlsZChzeW1ib2wpO1xuXG4gICAgICAgICAgICAgICAgXG4gICAgICBcblxuICAgICAgICByZXR1cm4gZGlzaDtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaXRlbSBvZiBtZW51RGF0YS5kaXNoZXMpe1xuXG4gICAgICAgIC8vIEF0dGFjaCBtZW51IGl0ZW1zIHRvIGFwcHJvcHJpYXRlIGNhdGVnb3J5XG4gICAgICAgIHN3aXRjaChpdGVtLnR5cGUpIHtcbiAgICAgICAgICAgXG4gIFxuICAgICAgICAgICAgY2FzZSAnc3RhcnRlcic6XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc3RhcnRlci5hcHBlbmRDaGlsZChidWlsZERpc2goaXRlbSkpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjYXNlICdtYWluJzpcbiAgICAgICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKGJ1aWxkRGlzaChpdGVtKSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBjYXNlICdkZXNzZXJ0JzpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLmRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgICAgIGRlc3NlcnQuYXBwZW5kQ2hpbGQoYnVpbGREaXNoKGl0ZW0pKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTsgICAgXG4gICAgIFxuICAgICAgICAgICAgZGVmYXVsdDogXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1lbnUgaXRlbSBkaWQgbm90IG1hdGNoIGtub3cgY2F0ZWdvcnksIHZlcmlmeSBkaXNoIHR5cGVcIilcbiAgICAgICAgXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxufVxuXG5yZXR1cm4gbWVudTtcblxufVxuXG5leHBvcnQge2J1aWxkTWVudX1cblxuXG4iLCJpbXBvcnQgeyBlbGVtZW50IH0gZnJvbSAnLi91dGlsaXRpZXMuanMnO1xuaW1wb3J0IHN0b3J5RGF0YSBmcm9tICcuL3N0b3J5LnR4dCc7XG5pbXBvcnQgdGFibGVJbWcgZnJvbSAnLi90YWJsZS5qcGcnO1xuXG5cbmNvbnN0IGJ1aWxkU3RvcnkgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBwYWdlID0gZWxlbWVudCgnZGl2Jywge1wiaWRcIjogXCJzdG9yeS1wYWdlXCJ9KTtcblxuICAgIGNvbnN0IHRhYmxlID0gbmV3IEltYWdlKCk7XG4gICAgdGFibGUuc3JjID0gdGFibGVJbWc7XG4gICAgdGFibGUuaWQgPSBcInRhYmxlLWltYWdlXCI7XG4gICAgdGFibGUuY2xhc3NMaXN0LmFkZChcInBpY3R1cmVzXCIpO1xuXG4gICAgcGFnZS5hcHBlbmRDaGlsZCh0YWJsZSk7XG5cbiAgICBjb25zdCBzdG9yeSA9IGVsZW1lbnQoJ2RpdicpO1xuICAgXG4gICAgc3RvcnkudGV4dENvbnRlbnQgPSBzdG9yeURhdGE7XG5cbiAgICBwYWdlLmFwcGVuZENoaWxkKHN0b3J5KTtcblxuICAgIHJldHVybiBwYWdlO1xufVxuXG5cbmV4cG9ydCB7YnVpbGRTdG9yeX07XG5cblxuIiwiLy8gSGVscGVyIGZ1bmN0aW9uc1xuLy8gUmVzdGF1cmFudCBwYWdlXG5cblxuY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0eXBlLCBhdHRyaWJ1dGVzKSA9PiB7XG4gICAgXG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKTtcbiAgICBpZiAoYXR0cmlidXRlcyA9PSBudWxsKSByZXR1cm4gbmV3RWxlbWVudDtcbiAgICBzZXRBdHRyaWJ1dGVzKG5ld0VsZW1lbnQsIGF0dHJpYnV0ZXMpO1xuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5jb25zdCBnZXREYXRlID0gKCkgPT4ge1xuXG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgZGQgPSB0b2RheS5nZXREYXRlKCk7XG4gICAgbGV0IG1tID0gdG9kYXkuZ2V0TW9udGgoKSArIDE7IC8vIEluZGV4IGF0IHplcm9cbiAgICBjb25zdCB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcblxuICAgIGlmIChkZCA8IDEwKXtcbiAgICAgICAgZGQgPSAnMCcgKyBkZDtcbiAgICB9XG4gICAgaWYgKG1tIDwgMTApe1xuICAgICAgICBtbSA9ICcwJyArIG1tO1xuICAgIH1cblxuICAgIHRvZGF5ID0gYCR7eXl5eX0tJHttbX0tJHtkZH1gO1xuXG4gICAgcmV0dXJuIHRvZGF5O1xufVxuXG5jb25zdCBmb3JtYXRQaG9uZSA9IChpbnB1dCkgPT4ge1xuICAgIGNvbnN0IHBob25lRm9ybWF0ZXIgPSBpbnB1dDtcbiAgICBjb25zb2xlLmxvZ1xuICAgIHBob25lRm9ybWF0ZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuXG4gICAgICAgIC8vIFJlbW92ZSBhbnl0aGluZyB0aGF0IGlzbid0IGEgbnVtYmVyXG4gICAgICAgIGxldCBwaG9uZU51bWJlciA9IHBob25lRm9ybWF0ZXIudmFsdWUucmVwbGFjZSgvXFxEL2csJycpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGlucHV0U2l6ZSA9IHBob25lTnVtYmVyLmxlbmd0aDtcbiAgICAgICAgLy8gSWdub3JlIGRlbGV0ZS9iYWNrc3BhY2Ugc28gdXNlciBjYW4gZGVsZXRlIG51bWJlciBcbiAgICAgICAgaWYgKGUua2V5ID09ICdCYWNrc3BhY2UnIHx8IGUua2V5ID09ICdEZWxldGUnKSByZXR1cm47XG4gICAgICAgIFxuXG4gICAgICAgIGlmIChpbnB1dFNpemUgPj0gMyAmJiBpbnB1dFNpemUgPCA3ICYmIGUua2V5ICE9ICdCYWNrc3BhY2UnKXtcbiAgICAgICAgICAgIHBob25lTnVtYmVyID0gcGhvbmVOdW1iZXIuc3Vic3RyaW5nKDAsMykgKyAnLScgKyBwaG9uZU51bWJlci5zdWJzdHJpbmcoMylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpbnB1dFNpemUgPj0gNyl7XG4gICAgICAgICAgICBwaG9uZU51bWJlciA9IHBob25lTnVtYmVyLnN1YnN0cmluZygwLDMpICsgJy0nICsgcGhvbmVOdW1iZXIuc3Vic3RyaW5nKDMsNikgKyAnLScgKyBwaG9uZU51bWJlci5zdWJzdHJpbmcoNilcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcGhvbmVGb3JtYXRlci52YWx1ZSA9IHBob25lTnVtYmVyO1xuICAgICAgICBwaG9uZUZvcm1hdGVyLnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcbiAgICB9KVxuICAgIFxufVxuXG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcylcbntcbiAgICBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSlcbiAgICB9KTtcbn1cblxuXG5cblxuZXhwb3J0IHtmb3JtYXRQaG9uZSwgZ2V0RGF0ZSwgc2V0QXR0cmlidXRlcywgY3JlYXRlRWxlbWVudCBhcyBlbGVtZW50fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgYnVpbGQgZnJvbSAnLi9idWlsZHBhZ2UuanMnO1xuXG5cbmNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG5cblxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtYnV0dG9uXCIpO1xuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGJ1aWxkLmJ1aWxkUGFnZSgnbWVudScpO1xuICAgIH0pXG5cbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LWJ1dHRvblwiKTtcbiAgICBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBidWlsZC5idWlsZFBhZ2UoJ2NvbnRhY3QnKTtcbiAgICB9KVxuXG4gICAgY29uc3Qgc3RvcnlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RvcnktYnV0dG9uJyk7XG4gICAgc3RvcnlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGJ1aWxkLmJ1aWxkUGFnZSgnc3RvcnknKVxuICAgIH0pXG5cbiAgICBjb25zdCBtYWluQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlLWhlYWRlcicpO1xuICAgIG1haW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGJ1aWxkLmJ1aWxkUGFnZSgnbWFpbicpO1xuICAgIH0pXG4gICAgXG4gICAgXG4gICAgXG4gICAgXG4gICBcblxuXG59XG5cbmluaXRpYWxpemUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=