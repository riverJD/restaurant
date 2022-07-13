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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --background-color:  rgb(255, 254, 241);\n    --birdblue: #121e6a;\n    --birdlavender: #bebfd4;\n    \n    \n}\n\nbody{\n    background-color: rgb(255, 254, 241);\n   \n    display: flex;\n    flex-direction: column;\n    align-items:  center;\n    font-family: 'Arima', cursive;\n  \n}\n\nh1, h2, h3, p{\n    margin: 0;\n}\n\n#content{\n    \n    height: 100vh;\n    width:  max(330px, 70vw);\n}\n\n#main-image{\n   \n    border: 5px dotted green;\n    height: auto;\n    width: 400px;\n}\n\n.logo{\n   \n    width: max(80px, 20vw);\n    height: auto;\n    display: flex;\n    \n    grid-area: 1 / 1 / 3 / 2;\n    align-self: center;\n\n}\n\n.logo > img{\n    width: 100%;\n    height: auto;\n}\n\n.header{\n    \n    display: grid;\n\n   \n    justify-content:flex-end;\n    gap: 10px;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: 2fr 1fr;\n\n    text-align: center;\n    font-size: 18px;\n   \n\n}\n\n.header > button{\n    display: inline-block;\n    grid-row-start: 2;\n\n    width: 100%;\n    \n    font-family: inherit;\n    background: none;\n    border: none;\n    margin: 0;\n    padding: 0;\n    cursor: pointer;\n\n   \n\n    font-size: clamp(1rem, 3vw, 1.3rem);\n   \n\n    \n}\n\n#title-header{\n    grid-area: 1 / 2 / 2 / -1;\n    font-size: clamp(1.2rem, 12vw, 10rem);\n    text-align: center;\n    \n}\n\n\n#main-content{\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n}\n\n.main{\n    margin-top: 50px;\n}\n\n#menu{\n    margin-top: 5%;\n    display: flex;\n    flex-direction: column;\n\n}\n\n.menu-header{\n    text-align: center;\n     \n}\n\n.menu-subheader{\n    font-style: italic;\n    \n}\n\n\n.menu-item{\n    margin: 5px;\n    \n}\n\n.menu-dish{\n\n    display: grid;\n\n    grid-template-areas: \n    \"name . note\"\n    \"description description price\"\n    \"symbols . price\";\n\n    margin-top: 10px;\n\n}\n\n.menu-name{\n    grid-area: name;\n    color: var(--birdblue, black);\n \n   \n}\n\n.menu-price{\n    grid-area: price;\n    text-align: right;\n    font-weight: bold;\n}\n\n.menu-description{\n    grid-area: description;\n}\n\n.menu-note{\n    \n   grid-area: note;\n\n   font-style: italic;\n}\n\n.menu-symbol{\n    grid-area: symbols;\n}\n\n\n.pictures{\n   \n    border-radius: 5px;\n}\n#table-image{\n    height: auto;\n    width: 300px;\n}\n\n\n#story-page{\n    \n    display: grid;\n    gap: 20px;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n}\n\n.page{\n    display: flex;\n    justify-content: center;\n}\n\n#page-header{\n    margin-top: 10%;\n    font-weight: 200;\n    font-style: italic;\n}\n\n#form-container{\n    margin-top: 10%;\n    width: min(400px, 100%);\n    display: flex;\n    justify-content: center;\n    border: 3px solid var(--birdblue, black);\n    border-radius: 10px;\n    box-shadow: 1px 1px 5px;\n    background-color: var(--birdlavender, rgb(222, 196, 247));\n    padding: 10px;\n}\n\n.form-label{\n    display: flex;\n    flex-direction: column;\n    color: var(--birdblue, black);\n}\n\n.form-input{\n    background-color: var(--background-color, white);\n    border: 3px solid var(--birdblue, black);\n    border-radius: 5px;\n    width: min(90%, 14rem);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,uCAAuC;IACvC,mBAAmB;IACnB,uBAAuB;;;AAG3B;;AAEA;IACI,oCAAoC;;IAEpC,aAAa;IACb,sBAAsB;IACtB,oBAAoB;IACpB,6BAA6B;;AAEjC;;AAEA;IACI,SAAS;AACb;;AAEA;;IAEI,aAAa;IACb,wBAAwB;AAC5B;;AAEA;;IAEI,wBAAwB;IACxB,YAAY;IACZ,YAAY;AAChB;;AAEA;;IAEI,sBAAsB;IACtB,YAAY;IACZ,aAAa;;IAEb,wBAAwB;IACxB,kBAAkB;;AAEtB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;;IAEI,aAAa;;;IAGb,wBAAwB;IACxB,SAAS;IACT,qCAAqC;IACrC,2BAA2B;;IAE3B,kBAAkB;IAClB,eAAe;;;AAGnB;;AAEA;IACI,qBAAqB;IACrB,iBAAiB;;IAEjB,WAAW;;IAEX,oBAAoB;IACpB,gBAAgB;IAChB,YAAY;IACZ,SAAS;IACT,UAAU;IACV,eAAe;;;;IAIf,mCAAmC;;;;AAIvC;;AAEA;IACI,yBAAyB;IACzB,qCAAqC;IACrC,kBAAkB;;AAEtB;;;AAGA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,sBAAsB;;AAE1B;;AAEA;IACI,kBAAkB;;AAEtB;;AAEA;IACI,kBAAkB;;AAEtB;;;AAGA;IACI,WAAW;;AAEf;;AAEA;;IAEI,aAAa;;IAEb;;;qBAGiB;;IAEjB,gBAAgB;;AAEpB;;AAEA;IACI,eAAe;IACf,6BAA6B;;;AAGjC;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;;GAEG,eAAe;;GAEf,kBAAkB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;;AAGA;;IAEI,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,YAAY;AAChB;;;AAGA;;IAEI,aAAa;IACb,SAAS;IACT,4DAA4D;AAChE;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,uBAAuB;IACvB,aAAa;IACb,uBAAuB;IACvB,wCAAwC;IACxC,mBAAmB;IACnB,uBAAuB;IACvB,yDAAyD;IACzD,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;;AAEA;IACI,gDAAgD;IAChD,wCAAwC;IACxC,kBAAkB;IAClB,sBAAsB;AAC1B","sourcesContent":[":root{\n    --background-color:  rgb(255, 254, 241);\n    --birdblue: #121e6a;\n    --birdlavender: #bebfd4;\n    \n    \n}\n\nbody{\n    background-color: rgb(255, 254, 241);\n   \n    display: flex;\n    flex-direction: column;\n    align-items:  center;\n    font-family: 'Arima', cursive;\n  \n}\n\nh1, h2, h3, p{\n    margin: 0;\n}\n\n#content{\n    \n    height: 100vh;\n    width:  max(330px, 70vw);\n}\n\n#main-image{\n   \n    border: 5px dotted green;\n    height: auto;\n    width: 400px;\n}\n\n.logo{\n   \n    width: max(80px, 20vw);\n    height: auto;\n    display: flex;\n    \n    grid-area: 1 / 1 / 3 / 2;\n    align-self: center;\n\n}\n\n.logo > img{\n    width: 100%;\n    height: auto;\n}\n\n.header{\n    \n    display: grid;\n\n   \n    justify-content:flex-end;\n    gap: 10px;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: 2fr 1fr;\n\n    text-align: center;\n    font-size: 18px;\n   \n\n}\n\n.header > button{\n    display: inline-block;\n    grid-row-start: 2;\n\n    width: 100%;\n    \n    font-family: inherit;\n    background: none;\n    border: none;\n    margin: 0;\n    padding: 0;\n    cursor: pointer;\n\n   \n\n    font-size: clamp(1rem, 3vw, 1.3rem);\n   \n\n    \n}\n\n#title-header{\n    grid-area: 1 / 2 / 2 / -1;\n    font-size: clamp(1.2rem, 12vw, 10rem);\n    text-align: center;\n    \n}\n\n\n#main-content{\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n}\n\n.main{\n    margin-top: 50px;\n}\n\n#menu{\n    margin-top: 5%;\n    display: flex;\n    flex-direction: column;\n\n}\n\n.menu-header{\n    text-align: center;\n     \n}\n\n.menu-subheader{\n    font-style: italic;\n    \n}\n\n\n.menu-item{\n    margin: 5px;\n    \n}\n\n.menu-dish{\n\n    display: grid;\n\n    grid-template-areas: \n    \"name . note\"\n    \"description description price\"\n    \"symbols . price\";\n\n    margin-top: 10px;\n\n}\n\n.menu-name{\n    grid-area: name;\n    color: var(--birdblue, black);\n \n   \n}\n\n.menu-price{\n    grid-area: price;\n    text-align: right;\n    font-weight: bold;\n}\n\n.menu-description{\n    grid-area: description;\n}\n\n.menu-note{\n    \n   grid-area: note;\n\n   font-style: italic;\n}\n\n.menu-symbol{\n    grid-area: symbols;\n}\n\n\n.pictures{\n   \n    border-radius: 5px;\n}\n#table-image{\n    height: auto;\n    width: 300px;\n}\n\n\n#story-page{\n    \n    display: grid;\n    gap: 20px;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n}\n\n.page{\n    display: flex;\n    justify-content: center;\n}\n\n#page-header{\n    margin-top: 10%;\n    font-weight: 200;\n    font-style: italic;\n}\n\n#form-container{\n    margin-top: 10%;\n    width: min(400px, 100%);\n    display: flex;\n    justify-content: center;\n    border: 3px solid var(--birdblue, black);\n    border-radius: 10px;\n    box-shadow: 1px 1px 5px;\n    background-color: var(--birdlavender, rgb(222, 196, 247));\n    padding: 10px;\n}\n\n.form-label{\n    display: flex;\n    flex-direction: column;\n    color: var(--birdblue, black);\n}\n\n.form-input{\n    background-color: var(--background-color, white);\n    border: 3px solid var(--birdblue, black);\n    border-radius: 5px;\n    width: min(90%, 14rem);\n}"],"sourceRoot":""}]);
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

    const formContainer = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('div', {"id": "form-container"});
    const form = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('form', {"id": "reservation-form"});

    const nameLabel = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('label', {"for": "name", "class": "form-label"});
    nameLabel.textContent = "Full Name:"
    const name = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('input', {"type": "text", "class": "form-input", "name": "name", "id": "form_name", "placeholder": "John Smith" })
    nameLabel.appendChild(name);

    const dateLabel = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('label', {"for": "date", "class": "form-label"});
    dateLabel.textContent = "Date:";
    const date = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)("input", {"type": "date", "class": "form-input", "name": "name", "id": "form_date",});
    dateLabel.appendChild(date);



    form.appendChild(nameLabel);
    form.appendChild(dateLabel);

    console.log('contact page')
    const page = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('div', {"class": "page"})
    formContainer.appendChild(form);
    page.appendChild(formContainer);

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




const buildMain = () => {

    
    const page = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('div', {"class": "page", "id": "main-page"})
    const pageHeader = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('h1', {"class": "menu-header", "id": "page-header"});

    pageHeader.textContent = "Welcome to bluebird"

    page.appendChild(pageHeader)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2M7OztBQUduQzs7O0FBR0E7QUFDQTtBQUNBLFFBQVEsK0RBQWU7QUFDdkIsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsUUFBUSwrREFBZTtBQUN2QixLQUFLOztBQUVMO0FBQ0E7QUFDQSxRQUFRLCtEQUFlO0FBQ3ZCLEtBQUs7O0FBRUw7QUFDQTtBQUNBLFFBQVEsK0RBQWU7QUFDdkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBLGEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvYnVpbGRwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3RvcnkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy91dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290e1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICByZ2IoMjU1LCAyNTQsIDI0MSk7XFxuICAgIC0tYmlyZGJsdWU6ICMxMjFlNmE7XFxuICAgIC0tYmlyZGxhdmVuZGVyOiAjYmViZmQ0O1xcbiAgICBcXG4gICAgXFxufVxcblxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NCwgMjQxKTtcXG4gICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6ICBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnQXJpbWEnLCBjdXJzaXZlO1xcbiAgXFxufVxcblxcbmgxLCBoMiwgaDMsIHB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIFxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogIG1heCgzMzBweCwgNzB2dyk7XFxufVxcblxcbiNtYWluLWltYWdle1xcbiAgIFxcbiAgICBib3JkZXI6IDVweCBkb3R0ZWQgZ3JlZW47XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4ubG9nb3tcXG4gICBcXG4gICAgd2lkdGg6IG1heCg4MHB4LCAyMHZ3KTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDMgLyAyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxufVxcblxcbi5sb2dvID4gaW1ne1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG5cXG4gICBcXG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmcjtcXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgXFxuXFxufVxcblxcbi5oZWFkZXIgPiBidXR0b257XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgXFxuXFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgM3Z3LCAxLjNyZW0pO1xcbiAgIFxcblxcbiAgICBcXG59XFxuXFxuI3RpdGxlLWhlYWRlcntcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAtMTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDEydncsIDEwcmVtKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuXFxuI21haW4tY29udGVudHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1haW57XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbiNtZW51e1xcbiAgICBtYXJnaW4tdG9wOiA1JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG59XFxuXFxuLm1lbnUtaGVhZGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICBcXG59XFxuXFxuLm1lbnUtc3ViaGVhZGVye1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIFxcbn1cXG5cXG5cXG4ubWVudS1pdGVte1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgXFxufVxcblxcbi5tZW51LWRpc2h7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwibmFtZSAuIG5vdGVcXFwiXFxuICAgIFxcXCJkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBwcmljZVxcXCJcXG4gICAgXFxcInN5bWJvbHMgLiBwcmljZVxcXCI7XFxuXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuXFxufVxcblxcbi5tZW51LW5hbWV7XFxuICAgIGdyaWQtYXJlYTogbmFtZTtcXG4gICAgY29sb3I6IHZhcigtLWJpcmRibHVlLCBibGFjayk7XFxuIFxcbiAgIFxcbn1cXG5cXG4ubWVudS1wcmljZXtcXG4gICAgZ3JpZC1hcmVhOiBwcmljZTtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubWVudS1kZXNjcmlwdGlvbntcXG4gICAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcXG59XFxuXFxuLm1lbnUtbm90ZXtcXG4gICAgXFxuICAgZ3JpZC1hcmVhOiBub3RlO1xcblxcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLm1lbnUtc3ltYm9se1xcbiAgICBncmlkLWFyZWE6IHN5bWJvbHM7XFxufVxcblxcblxcbi5waWN0dXJlc3tcXG4gICBcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4jdGFibGUtaW1hZ2V7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG5cXG4jc3RvcnktcGFnZXtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbn1cXG5cXG4ucGFnZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNwYWdlLWhlYWRlcntcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbiNmb3JtLWNvbnRhaW5lcntcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcbiAgICB3aWR0aDogbWluKDQwMHB4LCAxMDAlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJpcmRibHVlLCBibGFjayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iaXJkbGF2ZW5kZXIsIHJnYigyMjIsIDE5NiwgMjQ3KSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5mb3JtLWxhYmVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBjb2xvcjogdmFyKC0tYmlyZGJsdWUsIGJsYWNrKTtcXG59XFxuXFxuLmZvcm0taW5wdXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IsIHdoaXRlKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYmlyZGJsdWUsIGJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogbWluKDkwJSwgMTRyZW0pO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksdUNBQXVDO0lBQ3ZDLG1CQUFtQjtJQUNuQix1QkFBdUI7OztBQUczQjs7QUFFQTtJQUNJLG9DQUFvQzs7SUFFcEMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsNkJBQTZCOztBQUVqQzs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isd0JBQXdCO0FBQzVCOztBQUVBOztJQUVJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7O0lBRWIsd0JBQXdCO0lBQ3hCLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxhQUFhOzs7SUFHYix3QkFBd0I7SUFDeEIsU0FBUztJQUNULHFDQUFxQztJQUNyQywyQkFBMkI7O0lBRTNCLGtCQUFrQjtJQUNsQixlQUFlOzs7QUFHbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsaUJBQWlCOztJQUVqQixXQUFXOztJQUVYLG9CQUFvQjtJQUNwQixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZUFBZTs7OztJQUlmLG1DQUFtQzs7OztBQUl2Qzs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQ0FBcUM7SUFDckMsa0JBQWtCOztBQUV0Qjs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCOztBQUUxQjs7QUFFQTtJQUNJLGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSSxrQkFBa0I7O0FBRXRCOzs7QUFHQTtJQUNJLFdBQVc7O0FBRWY7O0FBRUE7O0lBRUksYUFBYTs7SUFFYjs7O3FCQUdpQjs7SUFFakIsZ0JBQWdCOztBQUVwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZiw2QkFBNkI7OztBQUdqQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBOztHQUVHLGVBQWU7O0dBRWYsa0JBQWtCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7QUFHQTs7SUFFSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOzs7QUFHQTs7SUFFSSxhQUFhO0lBQ2IsU0FBUztJQUNULDREQUE0RDtBQUNoRTs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qix3Q0FBd0M7SUFDeEMsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qix5REFBeUQ7SUFDekQsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksZ0RBQWdEO0lBQ2hELHdDQUF3QztJQUN4QyxrQkFBa0I7SUFDbEIsc0JBQXNCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290e1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICByZ2IoMjU1LCAyNTQsIDI0MSk7XFxuICAgIC0tYmlyZGJsdWU6ICMxMjFlNmE7XFxuICAgIC0tYmlyZGxhdmVuZGVyOiAjYmViZmQ0O1xcbiAgICBcXG4gICAgXFxufVxcblxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NCwgMjQxKTtcXG4gICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6ICBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnQXJpbWEnLCBjdXJzaXZlO1xcbiAgXFxufVxcblxcbmgxLCBoMiwgaDMsIHB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIFxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogIG1heCgzMzBweCwgNzB2dyk7XFxufVxcblxcbiNtYWluLWltYWdle1xcbiAgIFxcbiAgICBib3JkZXI6IDVweCBkb3R0ZWQgZ3JlZW47XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4ubG9nb3tcXG4gICBcXG4gICAgd2lkdGg6IG1heCg4MHB4LCAyMHZ3KTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDMgLyAyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxufVxcblxcbi5sb2dvID4gaW1ne1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG5cXG4gICBcXG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmcjtcXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgXFxuXFxufVxcblxcbi5oZWFkZXIgPiBidXR0b257XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgXFxuXFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgM3Z3LCAxLjNyZW0pO1xcbiAgIFxcblxcbiAgICBcXG59XFxuXFxuI3RpdGxlLWhlYWRlcntcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAtMTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDEydncsIDEwcmVtKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuXFxuI21haW4tY29udGVudHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1haW57XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbiNtZW51e1xcbiAgICBtYXJnaW4tdG9wOiA1JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG59XFxuXFxuLm1lbnUtaGVhZGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICBcXG59XFxuXFxuLm1lbnUtc3ViaGVhZGVye1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIFxcbn1cXG5cXG5cXG4ubWVudS1pdGVte1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgXFxufVxcblxcbi5tZW51LWRpc2h7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwibmFtZSAuIG5vdGVcXFwiXFxuICAgIFxcXCJkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBwcmljZVxcXCJcXG4gICAgXFxcInN5bWJvbHMgLiBwcmljZVxcXCI7XFxuXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuXFxufVxcblxcbi5tZW51LW5hbWV7XFxuICAgIGdyaWQtYXJlYTogbmFtZTtcXG4gICAgY29sb3I6IHZhcigtLWJpcmRibHVlLCBibGFjayk7XFxuIFxcbiAgIFxcbn1cXG5cXG4ubWVudS1wcmljZXtcXG4gICAgZ3JpZC1hcmVhOiBwcmljZTtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubWVudS1kZXNjcmlwdGlvbntcXG4gICAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcXG59XFxuXFxuLm1lbnUtbm90ZXtcXG4gICAgXFxuICAgZ3JpZC1hcmVhOiBub3RlO1xcblxcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLm1lbnUtc3ltYm9se1xcbiAgICBncmlkLWFyZWE6IHN5bWJvbHM7XFxufVxcblxcblxcbi5waWN0dXJlc3tcXG4gICBcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4jdGFibGUtaW1hZ2V7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG5cXG4jc3RvcnktcGFnZXtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbn1cXG5cXG4ucGFnZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbiNwYWdlLWhlYWRlcntcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbiNmb3JtLWNvbnRhaW5lcntcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcbiAgICB3aWR0aDogbWluKDQwMHB4LCAxMDAlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJpcmRibHVlLCBibGFjayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iaXJkbGF2ZW5kZXIsIHJnYigyMjIsIDE5NiwgMjQ3KSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5mb3JtLWxhYmVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBjb2xvcjogdmFyKC0tYmlyZGJsdWUsIGJsYWNrKTtcXG59XFxuXFxuLmZvcm0taW5wdXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IsIHdoaXRlKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYmlyZGJsdWUsIGJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogbWluKDkwJSwgMTRyZW0pO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBiaXJkIGZyb20gJy4vYmx1ZWJpcmQucG5nJ1xuaW1wb3J0IGJsYWNrYmlyZCBmcm9tICcuL2JsYWNrYmlyZC5wbmcnXG5pbXBvcnQgeyBlbGVtZW50IH0gZnJvbSAnLi91dGlsaXRpZXMuanMnO1xuaW1wb3J0IHsgYnVpbGRNZW51IH0gIGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgeyBidWlsZENvbnRhY3R9IGZyb20gJy4vY29udGFjdC5qcyc7XG5pbXBvcnQgeyBidWlsZFN0b3J5IH0gZnJvbSAnLi9zdG9yeSc7XG5pbXBvcnQgeyBidWlsZE1haW4gfSBmcm9tICcuL21haW4nO1xuXG5cblxuLy8gQ3JlYXRlIHdlYnNpdGUgbGF5b3V0XG5cblxuLy8gQ3JlYXRlIGFuIGVsZW1lbnQgYW5kIGFzc2lnbiBhbnkgYXR0cmlidXRlc1xuXG5cbmNvbnN0IGJ1aWxkID0gKCgpID0+IHtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgXG5cbiAgICBjb25zdCBidWlsZEhlYWRlciA9ICgpID0+IHtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRpdGxlVGV4dCA9IFwiYmx1ZWJpcmRcIjtcbiAgICAgICAgY29uc3QgbWVudVRleHQgPSBcIm1lbnVcIjtcbiAgICAgICAgY29uc3QgY29udGFjdFRleHQgPSBcInJlc2VydmF0aW9uc1wiO1xuICAgICAgICBjb25zdCBzdG9yeVRleHQgPSBcIm91ciBzdG9yeVwiXG5cbiAgICAgICAgY29uc3QgaGVhZGVyID0gZWxlbWVudCgnZGl2Jywge1wiY2xhc3NcIjogXCJoZWFkZXJcIiB9KVxuICAgICAgICBcbiAgICAgICAgLy8gc3ViLXRpdGxlc1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZWxlbWVudCgnYnV0dG9uJywge1wiY2xhc3NcIjogXCJ0aXRsZVwiLCBcImlkXCI6IFwidGl0bGUtaGVhZGVyXCJ9KTtcbiAgICAgICAgY29uc3QgbG9nbyA9IGVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IFwibG9nb1wifSk7XG4gICAgICAgIGNvbnN0IG1lbnUgPSBlbGVtZW50KCdidXR0b24nLCB7XCJpZFwiOiBcIm1lbnUtYnV0dG9uXCIsIFwiY2xhc3NcIjogXCJoZWFkZXItbGlua1wifSk7XG4gICAgICAgIGNvbnN0IGNvbnRhY3QgPSBlbGVtZW50KCdidXR0b24nLCB7XCJpZFwiOiBcImNvbnRhY3QtYnV0dG9uXCIsIFwiY2xhc3NcIjogXCJoZWFkZXItbGlua1wifSk7XG4gICAgICAgIGNvbnN0IHN0b3J5ID0gZWxlbWVudCgnYnV0dG9uJywge1wiaWRcIjogXCJzdG9yeS1idXR0b25cIiwgXCJjbGFzc1wiOiBcImhlYWRlci1saW5rXCJ9KTtcbiAgICAgICBcbiAgICAgICAgICAgXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGl0bGVUZXh0O1xuICAgICAgICBtZW51LnRleHRDb250ZW50ID0gbWVudVRleHQ7XG4gICAgICAgIGNvbnRhY3QudGV4dENvbnRlbnQgPSBjb250YWN0VGV4dDtcbiAgICAgICAgc3RvcnkudGV4dENvbnRlbnQgPSBzdG9yeVRleHQ7XG5cbiAgICAgIFxuICAgICAgICAvLyBMb2dvXG4gICAgICAgIFxuICAgICAgICAvL3NldEF0dHJpYnV0ZXMobG9nbywge1wiY2xhc3NcIjogXCJsb2dvXCJ9KVxuICAgICAgICBcbiAgICAgICAgY29uc3QgbWFpbkltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICAgIG1haW5JbWFnZS5zcmMgPSBiaXJkO1xuICAgICAgICBsb2dvLmFwcGVuZENoaWxkKG1haW5JbWFnZSlcblxuXG4gICAgICAgIFxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChtZW51KTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGNvbnRhY3QpO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoc3RvcnkpO1xuICAgIFxuICAgICAgXG5cbiAgICAgICAgcmV0dXJuIGhlYWRlcjtcblxuICAgIH1cbiAgXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChidWlsZEhlYWRlcigpKVxuICAgIFxuICBcblxuICAgIGNvbnN0IGJ1aWxkVGVtcCA9ICgpID0+IHtcblxuICAgICAgICBjb25zdCB0ZW1wVGV4dCA9IFwiV2VsY29tZSB0byBibHVlYmlyZC5cIjtcblxuICAgICAgICBjb25zdCBzZWNvbmQgPSBcIiBFdCBtYWxlc3VhZGEgZmFtZXMgYWMgdHVycGlzIGVnZXN0YXMgbWFlY2VuYXMgcGhhcmV0cmEgY29udmFsbGlzLiBBcmN1IG5vbiBzb2RhbGVzIG5lcXVlIHNvZGFsZXMuIFZ1bHB1dGF0ZSBzYXBpZW4gbmVjIHNhZ2l0dGlzIGFsaXF1YW0gbWFsZXN1YWRhIGJpYmVuZHVtIGFyY3Ugdml0YWUuXCI7XG5cbiAgICAgICAgY29uc3QgdGVtcEJpZyA9IFwiTWF0dGlzIHJob25jdXMgdXJuYSBuZXF1ZSB2aXZlcnJhIGp1c3RvIG5lYyB1bHRyaWNlcyBkdWkuIEF0IGF1Y3RvciB1cm5hIG51bmMgaWQgY3Vyc3VzIG1ldHVzLiBOdW5jIGNvbnNlcXVhdCBpbnRlcmR1bSB2YXJpdXMgc2l0IGFtZXQgbWF0dGlzIHZ1bHB1dGF0ZSBlbmltIG51bGxhLiBcIiBcbiAgICAgICAgY29uc3QgbWFpbiA9IGVsZW1lbnQoJ2RpdicsIHtcImlkXCI6IFwibWFpbi1jb250ZW50XCIsIFwiY2xhc3NcIjogXCJtYWluXCIsfSk7XG4gICAgICAgIGNvbnN0IG1haW5UZXh0ID0gZWxlbWVudCgnZGl2Jywge1wiaWRcIjogXCJtYWluLXRleHRcIiwgXCJjbGFzc1wiOiBcIm1haW5cIix9KTtcbiAgICAgICAgY29uc3Qgc2Vjb25kVGV4dCA9IGVsZW1lbnQoJ2RpdicsIHtcImlkXCI6IFwic2Vjb25kLXRleHRcIiwgXCJjbGFzc1wiOiBcIm1haW5cIix9KTtcbiAgICAgICAgY29uc3QgYmJpcmQgPSBlbGVtZW50KCdpbWcnLCB7XCJ3aWR0aFwiOiBcIjEwMHB4XCJ9KTtcbiAgICAgICAgYmJpcmQuc3JjID0gYmxhY2tiaXJkO1xuXG4gICAgICAgIG1haW5UZXh0LnRleHRDb250ZW50ID0gdGVtcEJpZztcbiAgICAgICAgc2Vjb25kVGV4dC50ZXh0Q29udGVudCA9IHNlY29uZDtcbiAgICAgICAgbWFpbi5hcHBlbmRDaGlsZChtYWluVGV4dCk7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoc2Vjb25kVGV4dCk7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQoYmJpcmQpO1xuXG4gICAgICAgIHJldHVybiBtYWluO1xuXG4gICAgfVxuXG4gXG5cbiAgICBjb25zdCBidWlsZFBhZ2UgPSAoc291cmNlKSA9PiB7XG4gICAgICAgIC8vIGNsZWFyIHBhZ2VcblxuICAgICAgICBjb25zb2xlLmxvZyhzb3VyY2UpXG4gICAgICAgIGlmIChjb250ZW50LmNoaWxkcmVuLmxlbmd0aCA+IDEpIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGVudC5sYXN0RWxlbWVudENoaWxkKTsgXG4gICAgICAgIGxldCBwYWdlO1xuICAgICAgICBcbiAgICAgICAgaWYgKHNvdXJjZSA9PT0gJ21lbnUnKXtcbiAgICAgICAgICAgIHBhZ2UgPSBidWlsZE1lbnUoKTsgICBcbiAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNvdXJjZSA9PT0gJ2NvbnRhY3QnKXtcbiAgICAgICAgICAgIHBhZ2UgPSBidWlsZENvbnRhY3QoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc291cmNlID09PSAnc3RvcnknKXtcbiAgICAgICAgICAgIHBhZ2UgPSBidWlsZFN0b3J5KCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc291cmNlID09PSAnbWFpbicpe1xuICAgICAgICAgICAgcGFnZSA9IGJ1aWxkTWFpbigpO1xuICAgICAgICB9XG5cblxuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHBhZ2UpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBidWlsZFBhZ2UoJ21haW4nKTtcbiAgIFxuXG4gICAgY29uc29sZS5sb2coY29udGVudCk7XG5cbiAgICBcbiAgICByZXR1cm4ge2J1aWxkUGFnZX1cbi8vIENyZWF0ZXMgYSBuZXcgZWxlbWVudCBhbmQgZmxleGlibHkgYXNzaWduZXMgYXR0cmlidXRlcztcblxuXG59KSgpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgYnVpbGQ7XG4iLCJpbXBvcnQgeyBlbGVtZW50IH0gZnJvbSAnLi91dGlsaXRpZXMuanMnO1xuXG5jb25zdCBidWlsZENvbnRhY3QgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZWxlbWVudCgnZGl2Jywge1wiaWRcIjogXCJmb3JtLWNvbnRhaW5lclwifSk7XG4gICAgY29uc3QgZm9ybSA9IGVsZW1lbnQoJ2Zvcm0nLCB7XCJpZFwiOiBcInJlc2VydmF0aW9uLWZvcm1cIn0pO1xuXG4gICAgY29uc3QgbmFtZUxhYmVsID0gZWxlbWVudCgnbGFiZWwnLCB7XCJmb3JcIjogXCJuYW1lXCIsIFwiY2xhc3NcIjogXCJmb3JtLWxhYmVsXCJ9KTtcbiAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIkZ1bGwgTmFtZTpcIlxuICAgIGNvbnN0IG5hbWUgPSBlbGVtZW50KCdpbnB1dCcsIHtcInR5cGVcIjogXCJ0ZXh0XCIsIFwiY2xhc3NcIjogXCJmb3JtLWlucHV0XCIsIFwibmFtZVwiOiBcIm5hbWVcIiwgXCJpZFwiOiBcImZvcm1fbmFtZVwiLCBcInBsYWNlaG9sZGVyXCI6IFwiSm9obiBTbWl0aFwiIH0pXG4gICAgbmFtZUxhYmVsLmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZWxlbWVudCgnbGFiZWwnLCB7XCJmb3JcIjogXCJkYXRlXCIsIFwiY2xhc3NcIjogXCJmb3JtLWxhYmVsXCJ9KTtcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkRhdGU6XCI7XG4gICAgY29uc3QgZGF0ZSA9IGVsZW1lbnQoXCJpbnB1dFwiLCB7XCJ0eXBlXCI6IFwiZGF0ZVwiLCBcImNsYXNzXCI6IFwiZm9ybS1pbnB1dFwiLCBcIm5hbWVcIjogXCJuYW1lXCIsIFwiaWRcIjogXCJmb3JtX2RhdGVcIix9KTtcbiAgICBkYXRlTGFiZWwuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cblxuXG4gICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcblxuICAgIGNvbnNvbGUubG9nKCdjb250YWN0IHBhZ2UnKVxuICAgIGNvbnN0IHBhZ2UgPSBlbGVtZW50KCdkaXYnLCB7XCJjbGFzc1wiOiBcInBhZ2VcIn0pXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuXG4gICAgcmV0dXJuIHBhZ2U7XG59XG5cbmV4cG9ydCB7YnVpbGRDb250YWN0fTsiLCJpbXBvcnQgeyBlbGVtZW50IH0gZnJvbSAnLi91dGlsaXRpZXMuanMnO1xuXG5cblxuY29uc3QgYnVpbGRNYWluID0gKCkgPT4ge1xuXG4gICAgXG4gICAgY29uc3QgcGFnZSA9IGVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IFwicGFnZVwiLCBcImlkXCI6IFwibWFpbi1wYWdlXCJ9KVxuICAgIGNvbnN0IHBhZ2VIZWFkZXIgPSBlbGVtZW50KCdoMScsIHtcImNsYXNzXCI6IFwibWVudS1oZWFkZXJcIiwgXCJpZFwiOiBcInBhZ2UtaGVhZGVyXCJ9KTtcblxuICAgIHBhZ2VIZWFkZXIudGV4dENvbnRlbnQgPSBcIldlbGNvbWUgdG8gYmx1ZWJpcmRcIlxuXG4gICAgcGFnZS5hcHBlbmRDaGlsZChwYWdlSGVhZGVyKVxuICAgIGNvbnNvbGUubG9nKHBhZ2UpO1xuICAgIHJldHVybiBwYWdlO1xuXG59XG5cbmV4cG9ydCB7YnVpbGRNYWlufTsiLCJpbXBvcnQgbWVudURhdGEgZnJvbSAnLi9tZW51Lmpzb24nO1xuaW1wb3J0IHsgZWxlbWVudCB9IGZyb20gJy4vdXRpbGl0aWVzLmpzJztcblxuXG5cbi8vY29uc29sZS5sb2cobWVudURhdGEuZGlzaGVzKTtcbmNvbnN0IGJ1aWxkTWVudSA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBtZW51ID0gZWxlbWVudCgnZGl2Jywge1wiaWRcIjogXCJtZW51XCJ9KTtcbiAgICBjb25zdCBtZW51SGVhZGVyID0gZWxlbWVudCgnaDEnLCB7XCJjbGFzc1wiOiBcIm1lbnUtaGVhZGVyXCJ9KTtcbiAgICBtZW51SGVhZGVyLnRleHRDb250ZW50ID0gXCJtZW51XCJcblxuICAgIC8vIG1lbnUgY2F0ZWdvcmllc1xuICAgIGNvbnN0IHN0YXJ0ZXIgPSBlbGVtZW50KCdkaXYnLCB7XCJpZFwiOiBcInN0YXJ0ZXJzXCJ9KTtcbiAgICBjb25zdCBzdGFydGVySGVhZGVyID0gZWxlbWVudCgnaDInLCB7XCJpZFwiOiBcInN0YXJ0ZXItaGVhZGVyXCIsIFwiY2xhc3NcIjogXCJtZW51LXN1YmhlYWRlclwifSlcbiAgICBzdGFydGVySGVhZGVyLnRleHRDb250ZW50ID0gXCJzdGFydGVyXCJcblxuICAgIGNvbnN0IG1haW4gPSBlbGVtZW50KCdkaXYnLCB7XCJpZFwiOiBcIm1haW5zXCJ9KVxuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBlbGVtZW50KCdoMicsIHtcImlkXCI6IFwibWVudS1oZWFkZXJcIiwgXCJjbGFzc1wiOiBcIm1lbnUtc3ViaGVhZGVyXCJ9KVxuICAgIG1haW5IZWFkZXIudGV4dENvbnRlbnQgPSBcIm1haW5cIlxuXG4gICAgY29uc3QgZGVzc2VydCA9IGVsZW1lbnQoJ2RpdicsIHtcImlkXCI6IFwiZGVzc2VydHNcIn0pO1xuICAgIGNvbnN0IGRlc3NlcnRIZWFkZXIgPSBlbGVtZW50KCdoMicsIHtcImlkXCI6IFwibWVudS1oZWFkZXJcIiwgXCJjbGFzc1wiOiBcIm1lbnUtc3ViaGVhZGVyXCJ9KVxuICAgIGRlc3NlcnRIZWFkZXIudGV4dENvbnRlbnQgPSBcImRlc3NlcnRcIjtcbiAgXG4gICAgc3RhcnRlci5hcHBlbmRDaGlsZChzdGFydGVySGVhZGVyKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5IZWFkZXIpO1xuICAgIGRlc3NlcnQuYXBwZW5kQ2hpbGQoZGVzc2VydEhlYWRlcik7XG5cbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVIZWFkZXIpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoc3RhcnRlcik7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGRlc3NlcnQpO1xuXG4gICAgLy8gcmVhZCBkaXNoIGZyb20gSlNPTlxuICAgIGNvbnN0IGJ1aWxkRGlzaCA9IChpdGVtKSA9PiB7XG5cbiAgICAgICAgY29uc3QgZGlzaCA9IGVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IFwibWVudS1kaXNoIFwifSk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBlbGVtZW50KCdoMycsIHtcImNsYXNzXCI6IFwibWVudS1uYW1lIG1lbnUtaXRlbVwiLCBcImlkXCI6IGBtZW51LSR7aXRlbS5uYW1lfWB9KTtcbiAgICAgICAgY29uc3QgcHJpY2UgPSBlbGVtZW50KCdwJywge1wiY2xhc3NcIjogXCJtZW51LXByaWNlIG1lbnUtaXRlbVwifSk7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBlbGVtZW50KCdwJywge1wiY2xhc3NcIjogXCJtZW51LWRlc2NyaXB0aW9uIG1lbnUtaXRlbVwifSk7XG4gICAgICAgIGNvbnN0IG5vdGUgPSBlbGVtZW50KCdwJywge1wiY2xhc3NcIjogXCJtZW51LW5vdGUgbWVudS1pdGVtXCJ9KTtcbiAgICAgICAgY29uc3Qgc3ltYm9sID0gZWxlbWVudCgnZGl2Jywge1wiY2xhc3NcIjogXCJtZW51LXN5bWJvbCBtZW51LWl0ZW1cIn0pO1xuICAgICAgICBcbiAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICAgICAgcHJpY2UudGV4dENvbnRlbnQgPSBpdGVtLnByaWNlO1xuICAgICAgICBkZXNjLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgICAgICAgbm90ZS50ZXh0Q29udGVudCA9IGl0ZW0ubm90ZTtcbiAgICAgICAgc3ltYm9sLmNsYXNzTGlzdC5hZGQoYCR7aXRlbS5zeW1ib2x9YClcblxuICAgICAgICBkaXNoLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgICAgICBkaXNoLmFwcGVuZENoaWxkKHByaWNlKTtcbiAgICAgICAgZGlzaC5hcHBlbmRDaGlsZChkZXNjKTtcbiAgICAgICAgZGlzaC5hcHBlbmRDaGlsZChub3RlKTtcbiAgICAgICAgZGlzaC5hcHBlbmRDaGlsZChzeW1ib2wpO1xuXG4gICAgICAgICAgICAgICAgXG4gICAgICBcblxuICAgICAgICByZXR1cm4gZGlzaDtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaXRlbSBvZiBtZW51RGF0YS5kaXNoZXMpe1xuXG4gICAgICAgIC8vIEF0dGFjaCBtZW51IGl0ZW1zIHRvIGFwcHJvcHJpYXRlIGNhdGVnb3J5XG4gICAgICAgIHN3aXRjaChpdGVtLnR5cGUpIHtcbiAgICAgICAgICAgXG4gIFxuICAgICAgICAgICAgY2FzZSAnc3RhcnRlcic6XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc3RhcnRlci5hcHBlbmRDaGlsZChidWlsZERpc2goaXRlbSkpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjYXNlICdtYWluJzpcbiAgICAgICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKGJ1aWxkRGlzaChpdGVtKSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBjYXNlICdkZXNzZXJ0JzpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLmRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgICAgIGRlc3NlcnQuYXBwZW5kQ2hpbGQoYnVpbGREaXNoKGl0ZW0pKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTsgICAgXG4gICAgIFxuICAgICAgICAgICAgZGVmYXVsdDogXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1lbnUgaXRlbSBkaWQgbm90IG1hdGNoIGtub3cgY2F0ZWdvcnksIHZlcmlmeSBkaXNoIHR5cGVcIilcbiAgICAgICAgXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxufVxuXG5yZXR1cm4gbWVudTtcblxufVxuXG5leHBvcnQge2J1aWxkTWVudX1cblxuXG4iLCJpbXBvcnQgeyBlbGVtZW50IH0gZnJvbSAnLi91dGlsaXRpZXMuanMnO1xuaW1wb3J0IHN0b3J5RGF0YSBmcm9tICcuL3N0b3J5LnR4dCc7XG5pbXBvcnQgdGFibGVJbWcgZnJvbSAnLi90YWJsZS5qcGcnO1xuXG5cbmNvbnN0IGJ1aWxkU3RvcnkgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBwYWdlID0gZWxlbWVudCgnZGl2Jywge1wiaWRcIjogXCJzdG9yeS1wYWdlXCJ9KTtcblxuICAgIGNvbnN0IHRhYmxlID0gbmV3IEltYWdlKCk7XG4gICAgdGFibGUuc3JjID0gdGFibGVJbWc7XG4gICAgdGFibGUuaWQgPSBcInRhYmxlLWltYWdlXCI7XG4gICAgdGFibGUuY2xhc3NMaXN0LmFkZChcInBpY3R1cmVzXCIpO1xuXG4gICAgcGFnZS5hcHBlbmRDaGlsZCh0YWJsZSk7XG5cbiAgICBjb25zdCBzdG9yeSA9IGVsZW1lbnQoJ2RpdicpO1xuICAgXG4gICAgc3RvcnkudGV4dENvbnRlbnQgPSBzdG9yeURhdGE7XG5cbiAgICBwYWdlLmFwcGVuZENoaWxkKHN0b3J5KTtcblxuICAgIHJldHVybiBwYWdlO1xufVxuXG5cbmV4cG9ydCB7YnVpbGRTdG9yeX07XG5cblxuIiwiLy8gSGVscGVyIGZ1bmN0aW9uc1xuLy8gUmVzdGF1cmFudCBwYWdlXG5cblxuY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0eXBlLCBhdHRyaWJ1dGVzKSA9PiB7XG4gICAgXG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKTtcbiAgICBpZiAoYXR0cmlidXRlcyA9PSBudWxsKSByZXR1cm4gbmV3RWxlbWVudDtcbiAgICBzZXRBdHRyaWJ1dGVzKG5ld0VsZW1lbnQsIGF0dHJpYnV0ZXMpO1xuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcylcbntcbiAgICBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSlcbiAgICB9KTtcbn1cblxuXG5leHBvcnQge3NldEF0dHJpYnV0ZXMsIGNyZWF0ZUVsZW1lbnQgYXMgZWxlbWVudH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGJ1aWxkIGZyb20gJy4vYnVpbGRwYWdlLmpzJztcblxuXG5jb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuXG5cbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LWJ1dHRvblwiKTtcbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBidWlsZC5idWlsZFBhZ2UoJ21lbnUnKTtcbiAgICB9KVxuXG4gICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC1idXR0b25cIik7XG4gICAgY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYnVpbGQuYnVpbGRQYWdlKCdjb250YWN0Jyk7XG4gICAgfSlcblxuICAgIGNvbnN0IHN0b3J5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0b3J5LWJ1dHRvbicpO1xuICAgIHN0b3J5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBidWlsZC5idWlsZFBhZ2UoJ3N0b3J5JylcbiAgICB9KVxuXG4gICAgY29uc3QgbWFpbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZS1oZWFkZXInKTtcbiAgICBtYWluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBidWlsZC5idWlsZFBhZ2UoJ21haW4nKTtcbiAgICB9KVxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgXG5cblxufVxuXG5pbml0aWFsaXplKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9