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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --background-color:  rgb(255, 254, 241);\n    --birdblue: #121e6a;\n    --birdlavender: #bebfd4;\n    \n    \n}\n\nbody{\n    background-color: rgb(255, 254, 241);\n   \n    display: flex;\n    flex-direction: column;\n    align-items:  center;\n    font-family: 'Arima', cursive;\n  \n}\n\nh1, h2, h3, p{\n    margin: 0;\n}\n\n#content{\n    \n    height: 100vh;\n    width:  max(330px, 70vw);\n}\n\n#main-image{\n   \n    border: 5px dotted green;\n    height: auto;\n    width: 400px;\n}\n\n.logo{\n   \n    width: max(80px, 20vw);\n    max-width: 300px;\n\n    height: auto;\n    display: flex;\n    \n    grid-area: 1 / 1 / 3 / 2;\n    align-self: center;\n\n}\n\n.logo > img{\n    width: 100%;\n    height: auto;\n}\n\n.header{\n    \n    display: grid;\n\n   \n    justify-content:flex-end;\n    gap: 10px;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: 2fr 1fr;\n\n    text-align: center;\n    font-size: 18px;\n    max-width: 800px;\n\n}\n\n.header > button{\n    display: inline-block;\n    grid-row-start: 2;\n\n    width: 100%;\n    \n    font-family: inherit;\n    background: none;\n    border: none;\n    margin: 0;\n    padding: 0;\n    cursor: pointer;\n\n   \n\n    font-size: clamp(1rem, 3vw, 1.3rem);\n   \n\n    \n}\n\n#title-header{\n    grid-area: 1 / 2 / 2 / -1;\n    font-size: clamp(1.2rem, 12vw, 10rem);\n    text-align: center;\n    \n}\n\n\n#main-content{\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n}\n\n.main{\n    margin-top: 50px;\n}\n\n#menu{\n    margin-top: 5%;\n    display: flex;\n    flex-direction: column;\n\n}\n\n.menu-header{\n    text-align: center;\n     \n}\n\n.menu-subheader{\n    font-style: italic;\n    \n}\n\n\n.menu-item{\n    margin: 5px;\n    \n}\n\n.menu-dish{\n\n    display: grid;\n\n    grid-template-areas: \n    \"name . note\"\n    \"description description price\"\n    \"symbols . price\";\n\n    margin-top: 10px;\n\n}\n\n.menu-name{\n    grid-area: name;\n    color: var(--birdblue, black);\n \n   \n}\n\n.menu-price{\n    grid-area: price;\n    text-align: right;\n    font-weight: bold;\n}\n\n.menu-description{\n    grid-area: description;\n}\n\n.menu-note{\n    \n   grid-area: note;\n\n   font-style: italic;\n}\n\n.menu-symbol{\n    grid-area: symbols;\n}\n\n\n.pictures{\n   \n    border-radius: 5px;\n}\n#table-image{\n    height: auto;\n    width: 300px;\n}\n\n\n#story-page{\n    \n    display: grid;\n    gap: 20px;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n}\n\n.page{\n    display: flex;\n    justify-content: center;\n}\n\n#page-header{\n    margin: 15px 0px 15px 0px;\n    font-weight: 200;\n    font-style: italic;\n    font-size: clamp(1em, 10vw, 3.2rem);\n    \n    \n}\n\n#form-container{\n    margin-top: 10%;\n    width: min(400px, 100%);\n    display: flex;\n    justify-content: center;\n    border: 3px solid var(--birdblue, black);\n    border-radius: 10px;\n    box-shadow: 1px 1px 5px;\n    background-color: var(--birdlavender, rgb(222, 196, 247));\n    padding: 10px;\n}\n\n.form-label{\n    display: flex;\n    flex-direction: column;\n    color: var(--birdblue, black);\n}\n\n.form-input{\n    background-color: var(--background-color, white);\n    border: 3px solid var(--birdblue, black);\n    border-radius: 5px;\n    width: min(90%, 14rem);\n}\n\n#submit-button{\n    margin-top: 10px;\n    font: inherit;\n    font-weight: bold;\n    color: var(--birdblue, black);\n    border: 1px var(--birdblue, black) outset;\n    border-radius: 5px;\n}\n\n#reservation-form{\n    padding: 5px;\n}\n\n#submit-modal{\n    position: fixed;\n    z-index: 1;\n    width: min(100vw, 330px);\n    height: min(100vh, 150px);\n    border: 2px solid var(--birdblue, black);\n    border-radius: 5px;\n    display: none;\n    justify-content: center;\n    align-items: center;\n\n    background-color: var(--birdlavender, black);\n}\n\n#modal-content{\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-weight: 300;\n    font-style: italic;\n    align-items: center;\n    justify-items: center;\n    color:rgba(148, 21, 21, 0.788);\n    width: 80%;\n    height: 60%;\n    display: flex;\n    flex-direction: column;\n}\n\n#submit-text{\n    color: black;\n}\n\n.hidden{\n    background-color: red;\n}\n\n#main-page{\n    display: grid;\n    max-width: 800px;\n    justify-self: center;\n    \n}\n#content{\n    display: flex;;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 10%;\n    \n}\n\n.page-content{\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 20px;\n\n   justify-items: center;\n   align-items: center;\n   padding: 20px 0px;\n}\n\n\n\n\n.photo{\n    margin: 10px;\n    width: min(90%, 300px);\n    height: auto;\n    max-height: 260px;\n\n    border-radius: 4px;\n}\n\n.text-content{\n   \n    font-style: italic;\n    max-width: 80%;\n    text-align: left;\n\n        \n}\n\n\n.no-photo{\n    grid-template-columns: 1fr;\n    text-align: right;\n}\n\n.content-break{\n    border: 1px dotted var(--birdblue)\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,uCAAuC;IACvC,mBAAmB;IACnB,uBAAuB;;;AAG3B;;AAEA;IACI,oCAAoC;;IAEpC,aAAa;IACb,sBAAsB;IACtB,oBAAoB;IACpB,6BAA6B;;AAEjC;;AAEA;IACI,SAAS;AACb;;AAEA;;IAEI,aAAa;IACb,wBAAwB;AAC5B;;AAEA;;IAEI,wBAAwB;IACxB,YAAY;IACZ,YAAY;AAChB;;AAEA;;IAEI,sBAAsB;IACtB,gBAAgB;;IAEhB,YAAY;IACZ,aAAa;;IAEb,wBAAwB;IACxB,kBAAkB;;AAEtB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;;IAEI,aAAa;;;IAGb,wBAAwB;IACxB,SAAS;IACT,qCAAqC;IACrC,2BAA2B;;IAE3B,kBAAkB;IAClB,eAAe;IACf,gBAAgB;;AAEpB;;AAEA;IACI,qBAAqB;IACrB,iBAAiB;;IAEjB,WAAW;;IAEX,oBAAoB;IACpB,gBAAgB;IAChB,YAAY;IACZ,SAAS;IACT,UAAU;IACV,eAAe;;;;IAIf,mCAAmC;;;;AAIvC;;AAEA;IACI,yBAAyB;IACzB,qCAAqC;IACrC,kBAAkB;;AAEtB;;;AAGA;IACI,aAAa;IACb,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,sBAAsB;;AAE1B;;AAEA;IACI,kBAAkB;;AAEtB;;AAEA;IACI,kBAAkB;;AAEtB;;;AAGA;IACI,WAAW;;AAEf;;AAEA;;IAEI,aAAa;;IAEb;;;qBAGiB;;IAEjB,gBAAgB;;AAEpB;;AAEA;IACI,eAAe;IACf,6BAA6B;;;AAGjC;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;AACrB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;;GAEG,eAAe;;GAEf,kBAAkB;AACrB;;AAEA;IACI,kBAAkB;AACtB;;;AAGA;;IAEI,kBAAkB;AACtB;AACA;IACI,YAAY;IACZ,YAAY;AAChB;;;AAGA;;IAEI,aAAa;IACb,SAAS;IACT,4DAA4D;AAChE;;AAEA;IACI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,yBAAyB;IACzB,gBAAgB;IAChB,kBAAkB;IAClB,mCAAmC;;;AAGvC;;AAEA;IACI,eAAe;IACf,uBAAuB;IACvB,aAAa;IACb,uBAAuB;IACvB,wCAAwC;IACxC,mBAAmB;IACnB,uBAAuB;IACvB,yDAAyD;IACzD,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,6BAA6B;AACjC;;AAEA;IACI,gDAAgD;IAChD,wCAAwC;IACxC,kBAAkB;IAClB,sBAAsB;AAC1B;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,iBAAiB;IACjB,6BAA6B;IAC7B,yCAAyC;IACzC,kBAAkB;AACtB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,UAAU;IACV,wBAAwB;IACxB,yBAAyB;IACzB,wCAAwC;IACxC,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,4CAA4C;AAChD;;AAEA;IACI,sHAAsH;IACtH,gBAAgB;IAChB,kBAAkB;IAClB,mBAAmB;IACnB,qBAAqB;IACrB,8BAA8B;IAC9B,UAAU;IACV,WAAW;IACX,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,oBAAoB;;AAExB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,eAAe;;AAEnB;;AAEA;IACI,aAAa;IACb,4DAA4D;IAC5D,SAAS;;GAEV,qBAAqB;GACrB,mBAAmB;GACnB,iBAAiB;AACpB;;;;;AAKA;IACI,YAAY;IACZ,sBAAsB;IACtB,YAAY;IACZ,iBAAiB;;IAEjB,kBAAkB;AACtB;;AAEA;;IAEI,kBAAkB;IAClB,cAAc;IACd,gBAAgB;;;AAGpB;;;AAGA;IACI,0BAA0B;IAC1B,iBAAiB;AACrB;;AAEA;IACI;AACJ","sourcesContent":[":root{\n    --background-color:  rgb(255, 254, 241);\n    --birdblue: #121e6a;\n    --birdlavender: #bebfd4;\n    \n    \n}\n\nbody{\n    background-color: rgb(255, 254, 241);\n   \n    display: flex;\n    flex-direction: column;\n    align-items:  center;\n    font-family: 'Arima', cursive;\n  \n}\n\nh1, h2, h3, p{\n    margin: 0;\n}\n\n#content{\n    \n    height: 100vh;\n    width:  max(330px, 70vw);\n}\n\n#main-image{\n   \n    border: 5px dotted green;\n    height: auto;\n    width: 400px;\n}\n\n.logo{\n   \n    width: max(80px, 20vw);\n    max-width: 300px;\n\n    height: auto;\n    display: flex;\n    \n    grid-area: 1 / 1 / 3 / 2;\n    align-self: center;\n\n}\n\n.logo > img{\n    width: 100%;\n    height: auto;\n}\n\n.header{\n    \n    display: grid;\n\n   \n    justify-content:flex-end;\n    gap: 10px;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: 2fr 1fr;\n\n    text-align: center;\n    font-size: 18px;\n    max-width: 800px;\n\n}\n\n.header > button{\n    display: inline-block;\n    grid-row-start: 2;\n\n    width: 100%;\n    \n    font-family: inherit;\n    background: none;\n    border: none;\n    margin: 0;\n    padding: 0;\n    cursor: pointer;\n\n   \n\n    font-size: clamp(1rem, 3vw, 1.3rem);\n   \n\n    \n}\n\n#title-header{\n    grid-area: 1 / 2 / 2 / -1;\n    font-size: clamp(1.2rem, 12vw, 10rem);\n    text-align: center;\n    \n}\n\n\n#main-content{\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n}\n\n.main{\n    margin-top: 50px;\n}\n\n#menu{\n    margin-top: 5%;\n    display: flex;\n    flex-direction: column;\n\n}\n\n.menu-header{\n    text-align: center;\n     \n}\n\n.menu-subheader{\n    font-style: italic;\n    \n}\n\n\n.menu-item{\n    margin: 5px;\n    \n}\n\n.menu-dish{\n\n    display: grid;\n\n    grid-template-areas: \n    \"name . note\"\n    \"description description price\"\n    \"symbols . price\";\n\n    margin-top: 10px;\n\n}\n\n.menu-name{\n    grid-area: name;\n    color: var(--birdblue, black);\n \n   \n}\n\n.menu-price{\n    grid-area: price;\n    text-align: right;\n    font-weight: bold;\n}\n\n.menu-description{\n    grid-area: description;\n}\n\n.menu-note{\n    \n   grid-area: note;\n\n   font-style: italic;\n}\n\n.menu-symbol{\n    grid-area: symbols;\n}\n\n\n.pictures{\n   \n    border-radius: 5px;\n}\n#table-image{\n    height: auto;\n    width: 300px;\n}\n\n\n#story-page{\n    \n    display: grid;\n    gap: 20px;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n}\n\n.page{\n    display: flex;\n    justify-content: center;\n}\n\n#page-header{\n    margin: 15px 0px 15px 0px;\n    font-weight: 200;\n    font-style: italic;\n    font-size: clamp(1em, 10vw, 3.2rem);\n    \n    \n}\n\n#form-container{\n    margin-top: 10%;\n    width: min(400px, 100%);\n    display: flex;\n    justify-content: center;\n    border: 3px solid var(--birdblue, black);\n    border-radius: 10px;\n    box-shadow: 1px 1px 5px;\n    background-color: var(--birdlavender, rgb(222, 196, 247));\n    padding: 10px;\n}\n\n.form-label{\n    display: flex;\n    flex-direction: column;\n    color: var(--birdblue, black);\n}\n\n.form-input{\n    background-color: var(--background-color, white);\n    border: 3px solid var(--birdblue, black);\n    border-radius: 5px;\n    width: min(90%, 14rem);\n}\n\n#submit-button{\n    margin-top: 10px;\n    font: inherit;\n    font-weight: bold;\n    color: var(--birdblue, black);\n    border: 1px var(--birdblue, black) outset;\n    border-radius: 5px;\n}\n\n#reservation-form{\n    padding: 5px;\n}\n\n#submit-modal{\n    position: fixed;\n    z-index: 1;\n    width: min(100vw, 330px);\n    height: min(100vh, 150px);\n    border: 2px solid var(--birdblue, black);\n    border-radius: 5px;\n    display: none;\n    justify-content: center;\n    align-items: center;\n\n    background-color: var(--birdlavender, black);\n}\n\n#modal-content{\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-weight: 300;\n    font-style: italic;\n    align-items: center;\n    justify-items: center;\n    color:rgba(148, 21, 21, 0.788);\n    width: 80%;\n    height: 60%;\n    display: flex;\n    flex-direction: column;\n}\n\n#submit-text{\n    color: black;\n}\n\n.hidden{\n    background-color: red;\n}\n\n#main-page{\n    display: grid;\n    max-width: 800px;\n    justify-self: center;\n    \n}\n#content{\n    display: flex;;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 10%;\n    \n}\n\n.page-content{\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 20px;\n\n   justify-items: center;\n   align-items: center;\n   padding: 20px 0px;\n}\n\n\n\n\n.photo{\n    margin: 10px;\n    width: min(90%, 300px);\n    height: auto;\n    max-height: 260px;\n\n    border-radius: 4px;\n}\n\n.text-content{\n   \n    font-style: italic;\n    max-width: 80%;\n    text-align: left;\n\n        \n}\n\n\n.no-photo{\n    grid-template-columns: 1fr;\n    text-align: right;\n}\n\n.content-break{\n    border: 1px dotted var(--birdblue)\n}"],"sourceRoot":""}]);
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
    // Elements will be dynamically clased and id based on name.  
    // content is a source of text content for the section
    // firstElement is string name of element which will be placed to the left
    const createContent = (name, content, photo, firstElement) => {

        const container = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('div', {"class": "page-content", 'id': `${name}-content`});
        const text = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('div', {"class": "text-content content", "id": `${name}-text`});
        text.textContent = content;


        container.appendChild(text);

        if (photo != null){
            const picture = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('img', {"class": "photo", "id": `${name}-photo`, "src": photo})
            
            if (firstElement === 'photo'){
                container.insertBefore(picture, text);
            }
            else {
            container.appendChild(picture);
            }


        }
        else{
            container.classList.add("no-photo");
            
        }
        
      

    
        //container.appendChild(text);
        return container;
    }

    const welcome = createContent("welcome", _welcome_txt__WEBPACK_IMPORTED_MODULE_4__);
    const table = createContent("table", "Our space is very limited, and reservations are required. Please call ahead if you have any specific dietary restrictions.", _table_jpg__WEBPACK_IMPORTED_MODULE_1__)
    const farm = createContent("farm",_farmtext_txt__WEBPACK_IMPORTED_MODULE_3__, _farmbird_jpg__WEBPACK_IMPORTED_MODULE_2__, "photo");
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

module.exports = "We are a true farm-to-table restaurant serving award winning cuisine in a peaceful setting.\nAll of our dishes are vegetarian, but you do not need to be to enjoy them. ";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLFVBQVUsT0FBTyxNQUFNLFlBQVksWUFBWSxXQUFXLFlBQVksY0FBYyxhQUFhLFdBQVcsYUFBYSxPQUFPLEtBQUssWUFBWSxjQUFjLFlBQVksWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLGFBQWEsZUFBZSxPQUFPLEtBQUssWUFBWSxhQUFhLGNBQWMsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssYUFBYSxRQUFRLEtBQUssV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLFFBQVEsY0FBYyxPQUFPLEtBQUssVUFBVSxjQUFjLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFFBQVEsTUFBTSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsUUFBUSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGVBQWUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxjQUFjLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksWUFBWSxZQUFZLGFBQWEsYUFBYSxV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QTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDYzs7O0FBR25DOzs7QUFHQTtBQUNBO0FBQ0EsUUFBUSwrREFBZTtBQUN2QixLQUFLOztBQUVMO0FBQ0E7QUFDQSxRQUFRLCtEQUFlO0FBQ3ZCLEtBQUs7O0FBRUw7QUFDQTtBQUNBLFFBQVEsK0RBQWU7QUFDdkIsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsUUFBUSwrREFBZTtBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEsYSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9idWlsZHBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdG9yeS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogIHJnYigyNTUsIDI1NCwgMjQxKTtcXG4gICAgLS1iaXJkYmx1ZTogIzEyMWU2YTtcXG4gICAgLS1iaXJkbGF2ZW5kZXI6ICNiZWJmZDQ7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU0LCAyNDEpO1xcbiAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogIGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdBcmltYScsIGN1cnNpdmU7XFxuICBcXG59XFxuXFxuaDEsIGgyLCBoMywgcHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jY29udGVudHtcXG4gICAgXFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAgbWF4KDMzMHB4LCA3MHZ3KTtcXG59XFxuXFxuI21haW4taW1hZ2V7XFxuICAgXFxuICAgIGJvcmRlcjogNXB4IGRvdHRlZCBncmVlbjtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogNDAwcHg7XFxufVxcblxcbi5sb2dve1xcbiAgIFxcbiAgICB3aWR0aDogbWF4KDgwcHgsIDIwdncpO1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcblxcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIFxcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMyAvIDI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXG59XFxuXFxuLmxvZ28gPiBpbWd7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgIFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyO1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG5cXG59XFxuXFxuLmhlYWRlciA+IGJ1dHRvbntcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIFxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICBcXG5cXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAzdncsIDEuM3JlbSk7XFxuICAgXFxuXFxuICAgIFxcbn1cXG5cXG4jdGl0bGUtaGVhZGVye1xcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIC0xO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEuMnJlbSwgMTJ2dywgMTByZW0pO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG5cXG4jbWFpbi1jb250ZW50e1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubWFpbntcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuI21lbnV7XFxuICAgIG1hcmdpbi10b3A6IDUlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbn1cXG5cXG4ubWVudS1oZWFkZXJ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgIFxcbn1cXG5cXG4ubWVudS1zdWJoZWFkZXJ7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgXFxufVxcblxcblxcbi5tZW51LWl0ZW17XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBcXG59XFxuXFxuLm1lbnUtZGlzaHtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG5cXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJuYW1lIC4gbm90ZVxcXCJcXG4gICAgXFxcImRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIHByaWNlXFxcIlxcbiAgICBcXFwic3ltYm9scyAuIHByaWNlXFxcIjtcXG5cXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG5cXG59XFxuXFxuLm1lbnUtbmFtZXtcXG4gICAgZ3JpZC1hcmVhOiBuYW1lO1xcbiAgICBjb2xvcjogdmFyKC0tYmlyZGJsdWUsIGJsYWNrKTtcXG4gXFxuICAgXFxufVxcblxcbi5tZW51LXByaWNle1xcbiAgICBncmlkLWFyZWE6IHByaWNlO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tZW51LWRlc2NyaXB0aW9ue1xcbiAgICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcbn1cXG5cXG4ubWVudS1ub3Rle1xcbiAgICBcXG4gICBncmlkLWFyZWE6IG5vdGU7XFxuXFxuICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ubWVudS1zeW1ib2x7XFxuICAgIGdyaWQtYXJlYTogc3ltYm9scztcXG59XFxuXFxuXFxuLnBpY3R1cmVze1xcbiAgIFxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbiN0YWJsZS1pbWFnZXtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMzAwcHg7XFxufVxcblxcblxcbiNzdG9yeS1wYWdle1xcbiAgICBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxufVxcblxcbi5wYWdle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3BhZ2UtaGVhZGVye1xcbiAgICBtYXJnaW46IDE1cHggMHB4IDE1cHggMHB4O1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMWVtLCAxMHZ3LCAzLjJyZW0pO1xcbiAgICBcXG4gICAgXFxufVxcblxcbiNmb3JtLWNvbnRhaW5lcntcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcbiAgICB3aWR0aDogbWluKDQwMHB4LCAxMDAlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJpcmRibHVlLCBibGFjayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iaXJkbGF2ZW5kZXIsIHJnYigyMjIsIDE5NiwgMjQ3KSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5mb3JtLWxhYmVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBjb2xvcjogdmFyKC0tYmlyZGJsdWUsIGJsYWNrKTtcXG59XFxuXFxuLmZvcm0taW5wdXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IsIHdoaXRlKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYmlyZGJsdWUsIGJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogbWluKDkwJSwgMTRyZW0pO1xcbn1cXG5cXG4jc3VibWl0LWJ1dHRvbntcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB2YXIoLS1iaXJkYmx1ZSwgYmxhY2spO1xcbiAgICBib3JkZXI6IDFweCB2YXIoLS1iaXJkYmx1ZSwgYmxhY2spIG91dHNldDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jcmVzZXJ2YXRpb24tZm9ybXtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4jc3VibWl0LW1vZGFse1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHdpZHRoOiBtaW4oMTAwdncsIDMzMHB4KTtcXG4gICAgaGVpZ2h0OiBtaW4oMTAwdmgsIDE1MHB4KTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmlyZGJsdWUsIGJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmlyZGxhdmVuZGVyLCBibGFjayk7XFxufVxcblxcbiNtb2RhbC1jb250ZW50e1xcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6cmdiYSgxNDgsIDIxLCAyMSwgMC43ODgpO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3N1Ym1pdC10ZXh0e1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5oaWRkZW57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuI21haW4tcGFnZXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIFxcbn1cXG4jY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDs7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXG4gICAgXFxufVxcblxcbi5wYWdlLWNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgZ2FwOiAyMHB4O1xcblxcbiAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIHBhZGRpbmc6IDIwcHggMHB4O1xcbn1cXG5cXG5cXG5cXG5cXG4ucGhvdG97XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgd2lkdGg6IG1pbig5MCUsIDMwMHB4KTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtYXgtaGVpZ2h0OiAyNjBweDtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4udGV4dC1jb250ZW50e1xcbiAgIFxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIG1heC13aWR0aDogODAlO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcblxcbiAgICAgICAgXFxufVxcblxcblxcbi5uby1waG90b3tcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uY29udGVudC1icmVha3tcXG4gICAgYm9yZGVyOiAxcHggZG90dGVkIHZhcigtLWJpcmRibHVlKVxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksdUNBQXVDO0lBQ3ZDLG1CQUFtQjtJQUNuQix1QkFBdUI7OztBQUczQjs7QUFFQTtJQUNJLG9DQUFvQzs7SUFFcEMsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsNkJBQTZCOztBQUVqQzs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isd0JBQXdCO0FBQzVCOztBQUVBOztJQUVJLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxzQkFBc0I7SUFDdEIsZ0JBQWdCOztJQUVoQixZQUFZO0lBQ1osYUFBYTs7SUFFYix3QkFBd0I7SUFDeEIsa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBOztJQUVJLGFBQWE7OztJQUdiLHdCQUF3QjtJQUN4QixTQUFTO0lBQ1QscUNBQXFDO0lBQ3JDLDJCQUEyQjs7SUFFM0Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjs7SUFFakIsV0FBVzs7SUFFWCxvQkFBb0I7SUFDcEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtJQUNWLGVBQWU7Ozs7SUFJZixtQ0FBbUM7Ozs7QUFJdkM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIscUNBQXFDO0lBQ3JDLGtCQUFrQjs7QUFFdEI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjs7QUFFMUI7O0FBRUE7SUFDSSxrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksa0JBQWtCOztBQUV0Qjs7O0FBR0E7SUFDSSxXQUFXOztBQUVmOztBQUVBOztJQUVJLGFBQWE7O0lBRWI7OztxQkFHaUI7O0lBRWpCLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNkJBQTZCOzs7QUFHakM7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTs7R0FFRyxlQUFlOztHQUVmLGtCQUFrQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBR0E7O0lBRUksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7O0FBR0E7O0lBRUksYUFBYTtJQUNiLFNBQVM7SUFDVCw0REFBNEQ7QUFDaEU7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsbUNBQW1DOzs7QUFHdkM7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsd0NBQXdDO0lBQ3hDLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIseURBQXlEO0lBQ3pELGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLGdEQUFnRDtJQUNoRCx3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLDZCQUE2QjtJQUM3Qix5Q0FBeUM7SUFDekMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixVQUFVO0lBQ1Ysd0JBQXdCO0lBQ3hCLHlCQUF5QjtJQUN6Qix3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQiw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxzSEFBc0g7SUFDdEgsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLDhCQUE4QjtJQUM5QixVQUFVO0lBQ1YsV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixvQkFBb0I7O0FBRXhCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw0REFBNEQ7SUFDNUQsU0FBUzs7R0FFVixxQkFBcUI7R0FDckIsbUJBQW1CO0dBQ25CLGlCQUFpQjtBQUNwQjs7Ozs7QUFLQTtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGlCQUFpQjs7SUFFakIsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCOzs7QUFHcEI7OztBQUdBO0lBQ0ksMEJBQTBCO0lBQzFCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3R7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogIHJnYigyNTUsIDI1NCwgMjQxKTtcXG4gICAgLS1iaXJkYmx1ZTogIzEyMWU2YTtcXG4gICAgLS1iaXJkbGF2ZW5kZXI6ICNiZWJmZDQ7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU0LCAyNDEpO1xcbiAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogIGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdBcmltYScsIGN1cnNpdmU7XFxuICBcXG59XFxuXFxuaDEsIGgyLCBoMywgcHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jY29udGVudHtcXG4gICAgXFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAgbWF4KDMzMHB4LCA3MHZ3KTtcXG59XFxuXFxuI21haW4taW1hZ2V7XFxuICAgXFxuICAgIGJvcmRlcjogNXB4IGRvdHRlZCBncmVlbjtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogNDAwcHg7XFxufVxcblxcbi5sb2dve1xcbiAgIFxcbiAgICB3aWR0aDogbWF4KDgwcHgsIDIwdncpO1xcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xcblxcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIFxcbiAgICBncmlkLWFyZWE6IDEgLyAxIC8gMyAvIDI7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG5cXG59XFxuXFxuLmxvZ28gPiBpbWd7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgIFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XFxuICAgIGdhcDogMTBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMWZyO1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG5cXG59XFxuXFxuLmhlYWRlciA+IGJ1dHRvbntcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBncmlkLXJvdy1zdGFydDogMjtcXG5cXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIFxcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG5cXG4gICBcXG5cXG4gICAgZm9udC1zaXplOiBjbGFtcCgxcmVtLCAzdncsIDEuM3JlbSk7XFxuICAgXFxuXFxuICAgIFxcbn1cXG5cXG4jdGl0bGUtaGVhZGVye1xcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIC0xO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDEuMnJlbSwgMTJ2dywgMTByZW0pO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG5cXG4jbWFpbi1jb250ZW50e1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubWFpbntcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuI21lbnV7XFxuICAgIG1hcmdpbi10b3A6IDUlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbn1cXG5cXG4ubWVudS1oZWFkZXJ7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgIFxcbn1cXG5cXG4ubWVudS1zdWJoZWFkZXJ7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgXFxufVxcblxcblxcbi5tZW51LWl0ZW17XFxuICAgIG1hcmdpbjogNXB4O1xcbiAgICBcXG59XFxuXFxuLm1lbnUtZGlzaHtcXG5cXG4gICAgZGlzcGxheTogZ3JpZDtcXG5cXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJuYW1lIC4gbm90ZVxcXCJcXG4gICAgXFxcImRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIHByaWNlXFxcIlxcbiAgICBcXFwic3ltYm9scyAuIHByaWNlXFxcIjtcXG5cXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG5cXG59XFxuXFxuLm1lbnUtbmFtZXtcXG4gICAgZ3JpZC1hcmVhOiBuYW1lO1xcbiAgICBjb2xvcjogdmFyKC0tYmlyZGJsdWUsIGJsYWNrKTtcXG4gXFxuICAgXFxufVxcblxcbi5tZW51LXByaWNle1xcbiAgICBncmlkLWFyZWE6IHByaWNlO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5tZW51LWRlc2NyaXB0aW9ue1xcbiAgICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcbn1cXG5cXG4ubWVudS1ub3Rle1xcbiAgICBcXG4gICBncmlkLWFyZWE6IG5vdGU7XFxuXFxuICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ubWVudS1zeW1ib2x7XFxuICAgIGdyaWQtYXJlYTogc3ltYm9scztcXG59XFxuXFxuXFxuLnBpY3R1cmVze1xcbiAgIFxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbiN0YWJsZS1pbWFnZXtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMzAwcHg7XFxufVxcblxcblxcbiNzdG9yeS1wYWdle1xcbiAgICBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMDBweCwgMWZyKSk7XFxufVxcblxcbi5wYWdle1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuI3BhZ2UtaGVhZGVye1xcbiAgICBtYXJnaW46IDE1cHggMHB4IDE1cHggMHB4O1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMWVtLCAxMHZ3LCAzLjJyZW0pO1xcbiAgICBcXG4gICAgXFxufVxcblxcbiNmb3JtLWNvbnRhaW5lcntcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcbiAgICB3aWR0aDogbWluKDQwMHB4LCAxMDAlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJpcmRibHVlLCBibGFjayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iaXJkbGF2ZW5kZXIsIHJnYigyMjIsIDE5NiwgMjQ3KSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5mb3JtLWxhYmVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBjb2xvcjogdmFyKC0tYmlyZGJsdWUsIGJsYWNrKTtcXG59XFxuXFxuLmZvcm0taW5wdXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IsIHdoaXRlKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYmlyZGJsdWUsIGJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogbWluKDkwJSwgMTRyZW0pO1xcbn1cXG5cXG4jc3VibWl0LWJ1dHRvbntcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB2YXIoLS1iaXJkYmx1ZSwgYmxhY2spO1xcbiAgICBib3JkZXI6IDFweCB2YXIoLS1iaXJkYmx1ZSwgYmxhY2spIG91dHNldDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jcmVzZXJ2YXRpb24tZm9ybXtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4jc3VibWl0LW1vZGFse1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHdpZHRoOiBtaW4oMTAwdncsIDMzMHB4KTtcXG4gICAgaGVpZ2h0OiBtaW4oMTAwdmgsIDE1MHB4KTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmlyZGJsdWUsIGJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmlyZGxhdmVuZGVyLCBibGFjayk7XFxufVxcblxcbiNtb2RhbC1jb250ZW50e1xcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6cmdiYSgxNDgsIDIxLCAyMSwgMC43ODgpO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3N1Ym1pdC10ZXh0e1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5oaWRkZW57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuI21haW4tcGFnZXtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgbWF4LXdpZHRoOiA4MDBweDtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIFxcbn1cXG4jY29udGVudHtcXG4gICAgZGlzcGxheTogZmxleDs7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXG4gICAgXFxufVxcblxcbi5wYWdlLWNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgZ2FwOiAyMHB4O1xcblxcbiAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIHBhZGRpbmc6IDIwcHggMHB4O1xcbn1cXG5cXG5cXG5cXG5cXG4ucGhvdG97XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgd2lkdGg6IG1pbig5MCUsIDMwMHB4KTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtYXgtaGVpZ2h0OiAyNjBweDtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4udGV4dC1jb250ZW50e1xcbiAgIFxcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIG1heC13aWR0aDogODAlO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcblxcbiAgICAgICAgXFxufVxcblxcblxcbi5uby1waG90b3tcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uY29udGVudC1icmVha3tcXG4gICAgYm9yZGVyOiAxcHggZG90dGVkIHZhcigtLWJpcmRibHVlKVxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCBiaXJkIGZyb20gJy4vYmx1ZWJpcmQucG5nJ1xuaW1wb3J0IGJsYWNrYmlyZCBmcm9tICcuL2JsYWNrYmlyZC5wbmcnXG5pbXBvcnQgeyBlbGVtZW50LCBnZXREYXRlIH0gZnJvbSAnLi91dGlsaXRpZXMuanMnO1xuaW1wb3J0IHsgYnVpbGRNZW51IH0gIGZyb20gJy4vbWVudS5qcyc7XG5pbXBvcnQgeyBidWlsZENvbnRhY3R9IGZyb20gJy4vY29udGFjdC5qcyc7XG5pbXBvcnQgeyBidWlsZFN0b3J5IH0gZnJvbSAnLi9zdG9yeSc7XG5pbXBvcnQgeyBidWlsZE1haW4gfSBmcm9tICcuL21haW4nO1xuXG5cblxuLy8gQ3JlYXRlIHdlYnNpdGUgbGF5b3V0XG5cblxuLy8gQ3JlYXRlIGFuIGVsZW1lbnQgYW5kIGFzc2lnbiBhbnkgYXR0cmlidXRlc1xuXG5cbmNvbnN0IGJ1aWxkID0gKCgpID0+IHtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgXG4gICAgZ2V0RGF0ZSgpO1xuXG4gICAgY29uc3QgYnVpbGRIZWFkZXIgPSAoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0aXRsZVRleHQgPSBcImJsdWViaXJkXCI7XG4gICAgICAgIGNvbnN0IG1lbnVUZXh0ID0gXCJtZW51XCI7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RUZXh0ID0gXCJyZXNlcnZhdGlvbnNcIjtcbiAgICAgICAgY29uc3Qgc3RvcnlUZXh0ID0gXCJvdXIgc3RvcnlcIlxuXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IFwiaGVhZGVyXCIgfSlcbiAgICAgICAgXG4gICAgICAgIC8vIHN1Yi10aXRsZXNcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGVsZW1lbnQoJ2J1dHRvbicsIHtcImNsYXNzXCI6IFwidGl0bGVcIiwgXCJpZFwiOiBcInRpdGxlLWhlYWRlclwifSk7XG4gICAgICAgIGNvbnN0IGxvZ28gPSBlbGVtZW50KCdkaXYnLCB7XCJjbGFzc1wiOiBcImxvZ29cIn0pO1xuICAgICAgICBjb25zdCBtZW51ID0gZWxlbWVudCgnYnV0dG9uJywge1wiaWRcIjogXCJtZW51LWJ1dHRvblwiLCBcImNsYXNzXCI6IFwiaGVhZGVyLWxpbmtcIn0pO1xuICAgICAgICBjb25zdCBjb250YWN0ID0gZWxlbWVudCgnYnV0dG9uJywge1wiaWRcIjogXCJjb250YWN0LWJ1dHRvblwiLCBcImNsYXNzXCI6IFwiaGVhZGVyLWxpbmtcIn0pO1xuICAgICAgICBjb25zdCBzdG9yeSA9IGVsZW1lbnQoJ2J1dHRvbicsIHtcImlkXCI6IFwic3RvcnktYnV0dG9uXCIsIFwiY2xhc3NcIjogXCJoZWFkZXItbGlua1wifSk7XG4gICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRpdGxlVGV4dDtcbiAgICAgICAgbWVudS50ZXh0Q29udGVudCA9IG1lbnVUZXh0O1xuICAgICAgICBjb250YWN0LnRleHRDb250ZW50ID0gY29udGFjdFRleHQ7XG4gICAgICAgIHN0b3J5LnRleHRDb250ZW50ID0gc3RvcnlUZXh0O1xuXG4gICAgICBcbiAgICAgICAgLy8gTG9nb1xuICAgICAgICBcbiAgICAgICAgLy9zZXRBdHRyaWJ1dGVzKGxvZ28sIHtcImNsYXNzXCI6IFwibG9nb1wifSlcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG1haW5JbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBtYWluSW1hZ2Uuc3JjID0gYmlyZDtcbiAgICAgICAgbG9nby5hcHBlbmRDaGlsZChtYWluSW1hZ2UpXG5cblxuICAgICAgICBcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChjb250YWN0KTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHN0b3J5KTtcbiAgICBcbiAgICAgIFxuXG4gICAgICAgIHJldHVybiBoZWFkZXI7XG5cbiAgICB9XG4gIFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGRIZWFkZXIoKSlcbiAgICBcbiAgXG5cbiAgICBjb25zdCBidWlsZFRlbXAgPSAoKSA9PiB7XG5cbiAgICAgICAgY29uc3QgdGVtcFRleHQgPSBcIldlbGNvbWUgdG8gYmx1ZWJpcmQuXCI7XG5cbiAgICAgICAgY29uc3Qgc2Vjb25kID0gXCIgRXQgbWFsZXN1YWRhIGZhbWVzIGFjIHR1cnBpcyBlZ2VzdGFzIG1hZWNlbmFzIHBoYXJldHJhIGNvbnZhbGxpcy4gQXJjdSBub24gc29kYWxlcyBuZXF1ZSBzb2RhbGVzLiBWdWxwdXRhdGUgc2FwaWVuIG5lYyBzYWdpdHRpcyBhbGlxdWFtIG1hbGVzdWFkYSBiaWJlbmR1bSBhcmN1IHZpdGFlLlwiO1xuXG4gICAgICAgIGNvbnN0IHRlbXBCaWcgPSBcIk1hdHRpcyByaG9uY3VzIHVybmEgbmVxdWUgdml2ZXJyYSBqdXN0byBuZWMgdWx0cmljZXMgZHVpLiBBdCBhdWN0b3IgdXJuYSBudW5jIGlkIGN1cnN1cyBtZXR1cy4gTnVuYyBjb25zZXF1YXQgaW50ZXJkdW0gdmFyaXVzIHNpdCBhbWV0IG1hdHRpcyB2dWxwdXRhdGUgZW5pbSBudWxsYS4gXCIgXG4gICAgICAgIGNvbnN0IG1haW4gPSBlbGVtZW50KCdkaXYnLCB7XCJpZFwiOiBcIm1haW4tY29udGVudFwiLCBcImNsYXNzXCI6IFwibWFpblwiLH0pO1xuICAgICAgICBjb25zdCBtYWluVGV4dCA9IGVsZW1lbnQoJ2RpdicsIHtcImlkXCI6IFwibWFpbi10ZXh0XCIsIFwiY2xhc3NcIjogXCJtYWluXCIsfSk7XG4gICAgICAgIGNvbnN0IHNlY29uZFRleHQgPSBlbGVtZW50KCdkaXYnLCB7XCJpZFwiOiBcInNlY29uZC10ZXh0XCIsIFwiY2xhc3NcIjogXCJtYWluXCIsfSk7XG4gICAgICAgIGNvbnN0IGJiaXJkID0gZWxlbWVudCgnaW1nJywge1wid2lkdGhcIjogXCIxMDBweFwifSk7XG4gICAgICAgIGJiaXJkLnNyYyA9IGJsYWNrYmlyZDtcblxuICAgICAgICBtYWluVGV4dC50ZXh0Q29udGVudCA9IHRlbXBCaWc7XG4gICAgICAgIHNlY29uZFRleHQudGV4dENvbnRlbnQgPSBzZWNvbmQ7XG4gICAgICAgIG1haW4uYXBwZW5kQ2hpbGQobWFpblRleHQpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHNlY29uZFRleHQpO1xuICAgICAgICBtYWluLmFwcGVuZENoaWxkKGJiaXJkKTtcblxuICAgICAgICByZXR1cm4gbWFpbjtcblxuICAgIH1cblxuIFxuXG4gICAgY29uc3QgYnVpbGRQYWdlID0gKHNvdXJjZSkgPT4ge1xuICAgICAgICAvLyBjbGVhciBwYWdlXG5cbiAgICAgICAgY29uc29sZS5sb2coc291cmNlKVxuICAgICAgICBpZiAoY29udGVudC5jaGlsZHJlbi5sZW5ndGggPiAxKSBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdEVsZW1lbnRDaGlsZCk7IFxuICAgICAgICBsZXQgcGFnZTtcbiAgICAgICAgXG4gICAgICAgIGlmIChzb3VyY2UgPT09ICdtZW51Jyl7XG4gICAgICAgICAgICBwYWdlID0gYnVpbGRNZW51KCk7ICAgXG4gICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGlmIChzb3VyY2UgPT09ICdjb250YWN0Jyl7XG4gICAgICAgICAgICBwYWdlID0gYnVpbGRDb250YWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNvdXJjZSA9PT0gJ3N0b3J5Jyl7XG4gICAgICAgICAgICBwYWdlID0gYnVpbGRTdG9yeSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNvdXJjZSA9PT0gJ21haW4nKXtcbiAgICAgICAgICAgIHBhZ2UgPSBidWlsZE1haW4oKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChwYWdlKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgYnVpbGRQYWdlKCdtYWluJyk7XG4gICBcblxuICAgIGNvbnNvbGUubG9nKGNvbnRlbnQpO1xuXG4gICAgXG4gICAgcmV0dXJuIHtidWlsZFBhZ2V9XG4vLyBDcmVhdGVzIGEgbmV3IGVsZW1lbnQgYW5kIGZsZXhpYmx5IGFzc2lnbmVzIGF0dHJpYnV0ZXM7XG5cblxufSkoKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkO1xuIiwiaW1wb3J0IHsgZWxlbWVudCwgZm9ybWF0UGhvbmUsIGdldERhdGUgfSBmcm9tICcuL3V0aWxpdGllcy5qcyc7XG5cbmNvbnN0IGJ1aWxkQ29udGFjdCA9ICgpID0+IHtcblxuICAgIGNvbnN0IE9QRU5USU1FID0gXCIxNjowMFwiO1xuICAgIGNvbnN0IENMT1NFVElNRSA9IFwiMjE6MDBcIjtcblxuXG4gICAgY29uc3QgcGFnZSA9IGVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IFwicGFnZVwifSlcblxuXG4gICAgLy8gQ3JlYXRlIGZvcm1cbiAgICBjb25zdCBmb3JtQ29udGFpbmVyID0gZWxlbWVudCgnZGl2Jywge1wiaWRcIjogXCJmb3JtLWNvbnRhaW5lclwifSk7XG4gICAgY29uc3QgZm9ybSA9IGVsZW1lbnQoJ2Zvcm0nLCB7XCJpZFwiOiBcInJlc2VydmF0aW9uLWZvcm1cIn0pO1xuXG4gICAgY29uc3QgbmFtZUxhYmVsID0gZWxlbWVudCgnbGFiZWwnLCB7XCJmb3JcIjogXCJuYW1lXCIsIFwiY2xhc3NcIjogXCJmb3JtLWxhYmVsXCJ9KTtcbiAgICBuYW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIkZ1bGwgTmFtZVwiXG4gICAgY29uc3QgbmFtZSA9IGVsZW1lbnQoJ2lucHV0Jywge1widHlwZVwiOiBcInRleHRcIiwgXCJjbGFzc1wiOiBcImZvcm0taW5wdXRcIiwgXCJuYW1lXCI6IFwibmFtZVwiLCBcImlkXCI6IFwiZm9ybV9uYW1lXCIsIFwicmVxdWlyZWRcIjogXCJcIiwgXCJwbGFjZWhvbGRlclwiOiBcIkpvaG4gU21pdGhcIiB9KVxuICAgIG5hbWVMYWJlbC5hcHBlbmRDaGlsZChuYW1lKTtcblxuICAgIGNvbnN0IGRhdGVMYWJlbCA9IGVsZW1lbnQoJ2xhYmVsJywge1wiZm9yXCI6IFwiZGF0ZVwiLCBcImNsYXNzXCI6IFwiZm9ybS1sYWJlbFwifSk7XG4gICAgZGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEYXRlXCI7XG4gICAgY29uc3QgdG9kYXkgPSBnZXREYXRlKCk7XG4gICAgY29uc3QgZGF0ZSA9IGVsZW1lbnQoXCJpbnB1dFwiLCB7XCJ0eXBlXCI6IFwiZGF0ZVwiLCBcImNsYXNzXCI6IFwiZm9ybS1pbnB1dFwiLCBcIm5hbWVcIjogXCJuYW1lXCIsIFwiaWRcIjogXCJmb3JtX2RhdGVcIiwgXCJtaW5cIjogdG9kYXksIFwicmVxdWlyZWRcIjogXCJcIn0pO1xuICAgIGRhdGVMYWJlbC5hcHBlbmRDaGlsZChkYXRlKTtcblxuICAgIGNvbnN0IHRpbWVMYWJlbCA9IGVsZW1lbnQoJ2xhYmVsJywge1wiZm9yXCI6IFwidGltZVwiLCBcImNsYXNzXCI6IFwiZm9ybS1sYWJlbFwifSk7XG4gICAgdGltZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaW1lXCI7XG4gICAgY29uc3QgdGltZSA9IGVsZW1lbnQoJ2lucHV0Jywge1widHlwZVwiOiBcInRpbWVcIiwgXCJjbGFzc1wiOiBcImZvcm0taW5wdXRcIiwgXCJuYW1lXCI6IFwidGltZVwiLCBcImlkXCI6IFwiZm9ybV90aW1lXCIsIFwidmFsdWVcIjogXCIxNjowMFwiLCAgXCJtaW5cIjogT1BFTlRJTUUsIFwibWF4XCI6IENMT1NFVElNRSxcInJlcXVpcmVkXCI6IFwiXCJ9KTtcbiAgICB0aW1lTGFiZWwuYXBwZW5kQ2hpbGQodGltZSk7XG5cbiAgICBjb25zdCBwaG9uZUxhYmVsID0gZWxlbWVudCgnbGFiZWwnLCB7XCJmb3JcIjogXCJwaG9uZVwiLCBcImNsYXNzXCI6IFwiZm9ybS1sYWJlbFwifSk7XG4gICAgcGhvbmVMYWJlbC50ZXh0Q29udGVudCA9IFwiUGhvbmUgTnVtYmVyXCI7XG4gICAgY29uc3QgcGhvbmUgPSBlbGVtZW50KCdpbnB1dCcsIHtcInR5cGVcIjogXCJ0ZWxcIiwgXCJjbGFzc1wiOiBcImZvcm0taW5wdXRcIiwgXCJuYW1lXCI6IFwicGhvbmVcIiwgXCJpZFwiOiBcImZvcm1fcGhvbmVcIiwgXCJtYXhsZW5ndGhcIjogMTIsIFwicGxhY2Vob2xkZXJcIjogXCI1NTUtMjEwLTMxNTRcIiwgXCJyZXF1aXJlZFwiOiBcIlwifSlcbiAgICBmb3JtYXRQaG9uZShwaG9uZSk7XG4gICAgcGhvbmVMYWJlbC5hcHBlbmRDaGlsZChwaG9uZSk7XG5cbiAgICBjb25zdCBzdWJtaXQgPSBlbGVtZW50KFwiaW5wdXRcIiwge1widHlwZVwiOiBcInN1Ym1pdFwiLCBcImNsYXNzXCI6IFwiYnV0dG9uXCIsIFwiaWRcIjogXCJzdWJtaXQtYnV0dG9uXCJ9KTtcblxuICAgIGNvbnN0IHN1Ym1pdE1vZGFsID0gZWxlbWVudChcImRpdlwiLCB7XCJjbGFzc1wiOiBcIm1vZGFsIGhpZGRlblwiLCBcImlkXCI6IFwic3VibWl0LW1vZGFsXCJ9KTtcbiAgICBjb25zdCBtb2RhbENvbnRlbnQgPSBlbGVtZW50KFwiZGl2XCIsIHtcImlkXCI6IFwibW9kYWwtY29udGVudFwifSk7XG4gICAgY29uc3QgbW9kYWxIZWFkZXIgPSBlbGVtZW50KFwiaDJcIiwge1wiY2xhc3NcIjogXCJtb2RhbC1pdGVtXCIsIFwiaWRcIjogXCJzdWJtaXQtaGVhZGVyXCJ9KTtcbiAgICBjb25zdCBtb2RhbFRleHQgPSBlbGVtZW50KFwicFwiLCB7XCJjbGFzc1wiOiBcIm1vZGFsLWl0ZW1cIiwgXCJpZFwiOiBcInN1Ym1pdC10ZXh0XCJ9KTtcblxuICAgIG1vZGFsSGVhZGVyLnRleHRDb250ZW50ID0gXCJSZXNlcnZhdGlvbiBVbmF2YWlsaWJsZVwiO1xuICAgIG1vZGFsVGV4dC50ZXh0Q29udGVudCA9IFwiUGxlYXNlIGNoZWNrIGFnYWluIHNvb25cIlxuICAgIFxuICAgIG1vZGFsQ29udGVudC5hcHBlbmRDaGlsZChtb2RhbEhlYWRlcik7XG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsVGV4dCk7XG4gICAgc3VibWl0TW9kYWwuYXBwZW5kQ2hpbGQobW9kYWxDb250ZW50KVxuICAgIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgc3VibWl0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcblxuICAgIH0pXG4gIFxuICAgIC8vIEF0dGFjaCBmb3JtIGVsZW1lbnRzIFxuICAgIGZvcm0uYXBwZW5kQ2hpbGQobmFtZUxhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRhdGVMYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZCh0aW1lTGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQocGhvbmVMYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpO1xuXG4gXG4gICAgZm9ybUNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKGZvcm1Db250YWluZXIpO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoc3VibWl0TW9kYWwpO1xuXG4gICAgcmV0dXJuIHBhZ2U7XG59XG5cbmV4cG9ydCB7YnVpbGRDb250YWN0fTsiLCJpbXBvcnQgeyBlbGVtZW50IH0gZnJvbSAnLi91dGlsaXRpZXMuanMnO1xuaW1wb3J0IHRhYmxlRERhdGEgZnJvbSAnLi90YWJsZS5qcGcnO1xuaW1wb3J0IGJpcmREYXRhIGZyb20gJy4vZmFybWJpcmQuanBnJztcbmltcG9ydCBmYXJtVGV4dERhdGEgZnJvbSAnLi9mYXJtdGV4dC50eHQnO1xuaW1wb3J0IHdlbGNvbWVUZXh0RGF0YSBmcm9tICcuL3dlbGNvbWUudHh0JztcblxuXG5jb25zdCBidWlsZE1haW4gPSAoKSA9PiB7XG5cblxuICAgIGNvbnN0IHBhZ2UgPSBlbGVtZW50KCdkaXYnLCB7XCJjbGFzc1wiOiBcInBhZ2VcIiwgXCJpZFwiOiBcIm1haW4tcGFnZVwifSlcbiAgICBcbiAgICBjb25zdCBwYWdlSGVhZGVyID0gZWxlbWVudCgnaDEnLCB7XCJjbGFzc1wiOiBcIm1lbnUtaGVhZGVyXCIsIFwiaWRcIjogXCJwYWdlLWhlYWRlclwifSk7XG4gICAgcGFnZUhlYWRlci50ZXh0Q29udGVudCA9IFwid2VsY29tZSB0byBibHVlYmlyZFwiXG5cbiAgICAvLyBDcmVhdGUgYSBzZWN0aW9uIG9mIGNvbnRlbnQsIHdpdGggdGV4dCBhbmQgaW1hZ2UgKG9wdGlvbmFsKTsgICAgXG4gICAgLy8gRWxlbWVudHMgd2lsbCBiZSBkeW5hbWljYWxseSBjbGFzZWQgYW5kIGlkIGJhc2VkIG9uIG5hbWUuICBcbiAgICAvLyBjb250ZW50IGlzIGEgc291cmNlIG9mIHRleHQgY29udGVudCBmb3IgdGhlIHNlY3Rpb25cbiAgICAvLyBmaXJzdEVsZW1lbnQgaXMgc3RyaW5nIG5hbWUgb2YgZWxlbWVudCB3aGljaCB3aWxsIGJlIHBsYWNlZCB0byB0aGUgbGVmdFxuICAgIGNvbnN0IGNyZWF0ZUNvbnRlbnQgPSAobmFtZSwgY29udGVudCwgcGhvdG8sIGZpcnN0RWxlbWVudCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IFwicGFnZS1jb250ZW50XCIsICdpZCc6IGAke25hbWV9LWNvbnRlbnRgfSk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBlbGVtZW50KCdkaXYnLCB7XCJjbGFzc1wiOiBcInRleHQtY29udGVudCBjb250ZW50XCIsIFwiaWRcIjogYCR7bmFtZX0tdGV4dGB9KTtcbiAgICAgICAgdGV4dC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG5cblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG5cbiAgICAgICAgaWYgKHBob3RvICE9IG51bGwpe1xuICAgICAgICAgICAgY29uc3QgcGljdHVyZSA9IGVsZW1lbnQoJ2ltZycsIHtcImNsYXNzXCI6IFwicGhvdG9cIiwgXCJpZFwiOiBgJHtuYW1lfS1waG90b2AsIFwic3JjXCI6IHBob3RvfSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGZpcnN0RWxlbWVudCA9PT0gJ3Bob3RvJyl7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmluc2VydEJlZm9yZShwaWN0dXJlLCB0ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBpY3R1cmUpO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuby1waG90b1wiKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgXG5cbiAgICBcbiAgICAgICAgLy9jb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgY29uc3Qgd2VsY29tZSA9IGNyZWF0ZUNvbnRlbnQoXCJ3ZWxjb21lXCIsIHdlbGNvbWVUZXh0RGF0YSk7XG4gICAgY29uc3QgdGFibGUgPSBjcmVhdGVDb250ZW50KFwidGFibGVcIiwgXCJPdXIgc3BhY2UgaXMgdmVyeSBsaW1pdGVkLCBhbmQgcmVzZXJ2YXRpb25zIGFyZSByZXF1aXJlZC4gUGxlYXNlIGNhbGwgYWhlYWQgaWYgeW91IGhhdmUgYW55IHNwZWNpZmljIGRpZXRhcnkgcmVzdHJpY3Rpb25zLlwiLCB0YWJsZUREYXRhKVxuICAgIGNvbnN0IGZhcm0gPSBjcmVhdGVDb250ZW50KFwiZmFybVwiLGZhcm1UZXh0RGF0YSwgYmlyZERhdGEsIFwicGhvdG9cIik7XG4gICAgLy8gZmFybSBjb250ZW50c1xuICAgIC8qIGNvbnN0IGZhcm1Db250ZW50ID0gZWxlbWVudCgnZGl2Jywge1wiY2xhc3NcIjogJ3BhZ2UtY29udGVudCcsIFwiaWRcIjogXCJmYXJtLWNvbnRlbnRcIn0pO1xuICAgIGNvbnN0IGZhcm0gPSBlbGVtZW50KCdpbWcnLCB7XCJjbGFzc1wiOiBcInBob3RvXCIsIFwiaWRcIjogXCJmYXJtLXBob3RvXCIsIFwic3JjXCI6IGJpcmREYXRhfSk7XG4gICAgY29uc3QgZmFybVRleHQgPSBlbGVtZW50KCdkaXYnLCB7XCJjbGFzc1wiOiBcInRleHQtY29udGVudCBjb250ZW50XCIsIFwiaWRcIjogXCJmYXJtLXRleHRcIn0pO1xuICAgIGZhcm1UZXh0LnRleHRDb250ZW50ID0gXCJBIG51bWJlciBvZiB3aWxkIGJsdWViaXJkcyBjYWxsIG91ciBmYXJtIGhvbWUsIGFuZCB3ZSd2ZSB0YWtlbiBpbnNwaXJhdGlvbiBmcm9tIHRoZW0gaW4gb3VyIGRpc2hlcyBkZXZlbG9wZWQgcmlnaHQgZnJvbSBvdXIgZ2FyZGVuLlwiICAgICAgICAgICAgICAgIFxuICAgIGZhcm1Db250ZW50LmFwcGVuZENoaWxkKGZhcm0pO1xuICAgIGZhcm1Db250ZW50LmFwcGVuZENoaWxkKGZhcm1UZXh0KTsgKi9cbiAgICBcbiAgIFxuICAgIHBhZ2UuYXBwZW5kQ2hpbGQocGFnZUhlYWRlcik7XG4gICAgcGFnZS5hcHBlbmRDaGlsZCh3ZWxjb21lKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKGZhcm0pO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQodGFibGUpO1xuICAgIHBhZ2UuaWQgPSBcIm1haW4tcGFnZVwiO1xuXG5cblxuICAgIGNvbnNvbGUubG9nKHBhZ2UpO1xuICAgIHJldHVybiBwYWdlO1xuXG59XG5cbmV4cG9ydCB7YnVpbGRNYWlufTsiLCJpbXBvcnQgbWVudURhdGEgZnJvbSAnLi9tZW51Lmpzb24nO1xuaW1wb3J0IHsgZWxlbWVudCB9IGZyb20gJy4vdXRpbGl0aWVzLmpzJztcblxuXG5cbi8vY29uc29sZS5sb2cobWVudURhdGEuZGlzaGVzKTtcbmNvbnN0IGJ1aWxkTWVudSA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBtZW51ID0gZWxlbWVudCgnZGl2Jywge1wiaWRcIjogXCJtZW51XCJ9KTtcbiAgICBjb25zdCBtZW51SGVhZGVyID0gZWxlbWVudCgnaDEnLCB7XCJjbGFzc1wiOiBcIm1lbnUtaGVhZGVyXCJ9KTtcbiAgICBtZW51SGVhZGVyLnRleHRDb250ZW50ID0gXCJtZW51XCJcblxuICAgIC8vIG1lbnUgY2F0ZWdvcmllc1xuICAgIGNvbnN0IHN0YXJ0ZXIgPSBlbGVtZW50KCdkaXYnLCB7XCJpZFwiOiBcInN0YXJ0ZXJzXCJ9KTtcbiAgICBjb25zdCBzdGFydGVySGVhZGVyID0gZWxlbWVudCgnaDInLCB7XCJpZFwiOiBcInN0YXJ0ZXItaGVhZGVyXCIsIFwiY2xhc3NcIjogXCJtZW51LXN1YmhlYWRlclwifSlcbiAgICBzdGFydGVySGVhZGVyLnRleHRDb250ZW50ID0gXCJzdGFydGVyXCJcblxuICAgIGNvbnN0IG1haW4gPSBlbGVtZW50KCdkaXYnLCB7XCJpZFwiOiBcIm1haW5zXCJ9KVxuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBlbGVtZW50KCdoMicsIHtcImlkXCI6IFwibWVudS1oZWFkZXJcIiwgXCJjbGFzc1wiOiBcIm1lbnUtc3ViaGVhZGVyXCJ9KVxuICAgIG1haW5IZWFkZXIudGV4dENvbnRlbnQgPSBcIm1haW5cIlxuXG4gICAgY29uc3QgZGVzc2VydCA9IGVsZW1lbnQoJ2RpdicsIHtcImlkXCI6IFwiZGVzc2VydHNcIn0pO1xuICAgIGNvbnN0IGRlc3NlcnRIZWFkZXIgPSBlbGVtZW50KCdoMicsIHtcImlkXCI6IFwibWVudS1oZWFkZXJcIiwgXCJjbGFzc1wiOiBcIm1lbnUtc3ViaGVhZGVyXCJ9KVxuICAgIGRlc3NlcnRIZWFkZXIudGV4dENvbnRlbnQgPSBcImRlc3NlcnRcIjtcbiAgXG4gICAgc3RhcnRlci5hcHBlbmRDaGlsZChzdGFydGVySGVhZGVyKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5IZWFkZXIpO1xuICAgIGRlc3NlcnQuYXBwZW5kQ2hpbGQoZGVzc2VydEhlYWRlcik7XG5cbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVIZWFkZXIpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoc3RhcnRlcik7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGRlc3NlcnQpO1xuXG4gICAgLy8gcmVhZCBkaXNoIGZyb20gSlNPTlxuICAgIGNvbnN0IGJ1aWxkRGlzaCA9IChpdGVtKSA9PiB7XG5cbiAgICAgICAgY29uc3QgZGlzaCA9IGVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IFwibWVudS1kaXNoIFwifSk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBlbGVtZW50KCdoMycsIHtcImNsYXNzXCI6IFwibWVudS1uYW1lIG1lbnUtaXRlbVwiLCBcImlkXCI6IGBtZW51LSR7aXRlbS5uYW1lfWB9KTtcbiAgICAgICAgY29uc3QgcHJpY2UgPSBlbGVtZW50KCdwJywge1wiY2xhc3NcIjogXCJtZW51LXByaWNlIG1lbnUtaXRlbVwifSk7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBlbGVtZW50KCdwJywge1wiY2xhc3NcIjogXCJtZW51LWRlc2NyaXB0aW9uIG1lbnUtaXRlbVwifSk7XG4gICAgICAgIGNvbnN0IG5vdGUgPSBlbGVtZW50KCdwJywge1wiY2xhc3NcIjogXCJtZW51LW5vdGUgbWVudS1pdGVtXCJ9KTtcbiAgICAgICAgY29uc3Qgc3ltYm9sID0gZWxlbWVudCgnZGl2Jywge1wiY2xhc3NcIjogXCJtZW51LXN5bWJvbCBtZW51LWl0ZW1cIn0pO1xuICAgICAgICBcbiAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICAgICAgcHJpY2UudGV4dENvbnRlbnQgPSBpdGVtLnByaWNlO1xuICAgICAgICBkZXNjLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgICAgICAgbm90ZS50ZXh0Q29udGVudCA9IGl0ZW0ubm90ZTtcbiAgICAgICAgc3ltYm9sLmNsYXNzTGlzdC5hZGQoYCR7aXRlbS5zeW1ib2x9YClcblxuICAgICAgICBkaXNoLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgICAgICBkaXNoLmFwcGVuZENoaWxkKHByaWNlKTtcbiAgICAgICAgZGlzaC5hcHBlbmRDaGlsZChkZXNjKTtcbiAgICAgICAgZGlzaC5hcHBlbmRDaGlsZChub3RlKTtcbiAgICAgICAgZGlzaC5hcHBlbmRDaGlsZChzeW1ib2wpO1xuXG4gICAgICAgICAgICAgICAgXG4gICAgICBcblxuICAgICAgICByZXR1cm4gZGlzaDtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaXRlbSBvZiBtZW51RGF0YS5kaXNoZXMpe1xuXG4gICAgICAgIC8vIEF0dGFjaCBtZW51IGl0ZW1zIHRvIGFwcHJvcHJpYXRlIGNhdGVnb3J5XG4gICAgICAgIHN3aXRjaChpdGVtLnR5cGUpIHtcbiAgICAgICAgICAgXG4gIFxuICAgICAgICAgICAgY2FzZSAnc3RhcnRlcic6XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc3RhcnRlci5hcHBlbmRDaGlsZChidWlsZERpc2goaXRlbSkpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjYXNlICdtYWluJzpcbiAgICAgICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKGJ1aWxkRGlzaChpdGVtKSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBjYXNlICdkZXNzZXJ0JzpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLmRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgICAgIGRlc3NlcnQuYXBwZW5kQ2hpbGQoYnVpbGREaXNoKGl0ZW0pKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTsgICAgXG4gICAgIFxuICAgICAgICAgICAgZGVmYXVsdDogXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1lbnUgaXRlbSBkaWQgbm90IG1hdGNoIGtub3cgY2F0ZWdvcnksIHZlcmlmeSBkaXNoIHR5cGVcIilcbiAgICAgICAgXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxufVxuXG5yZXR1cm4gbWVudTtcblxufVxuXG5leHBvcnQge2J1aWxkTWVudX1cblxuXG4iLCJpbXBvcnQgeyBlbGVtZW50IH0gZnJvbSAnLi91dGlsaXRpZXMuanMnO1xuaW1wb3J0IHN0b3J5RGF0YSBmcm9tICcuL3N0b3J5LnR4dCc7XG5pbXBvcnQgdGFibGVJbWcgZnJvbSAnLi90YWJsZS5qcGcnO1xuXG5cbmNvbnN0IGJ1aWxkU3RvcnkgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBwYWdlID0gZWxlbWVudCgnZGl2Jywge1wiaWRcIjogXCJzdG9yeS1wYWdlXCJ9KTtcblxuICAgIGNvbnN0IHRhYmxlID0gbmV3IEltYWdlKCk7XG4gICAgdGFibGUuc3JjID0gdGFibGVJbWc7XG4gICAgdGFibGUuaWQgPSBcInRhYmxlLWltYWdlXCI7XG4gICAgdGFibGUuY2xhc3NMaXN0LmFkZChcInBpY3R1cmVzXCIpO1xuXG4gICAgcGFnZS5hcHBlbmRDaGlsZCh0YWJsZSk7XG5cbiAgICBjb25zdCBzdG9yeSA9IGVsZW1lbnQoJ2RpdicpO1xuICAgXG4gICAgc3RvcnkudGV4dENvbnRlbnQgPSBzdG9yeURhdGE7XG5cbiAgICBwYWdlLmFwcGVuZENoaWxkKHN0b3J5KTtcblxuICAgIHJldHVybiBwYWdlO1xufVxuXG5cbmV4cG9ydCB7YnVpbGRTdG9yeX07XG5cblxuIiwiLy8gSGVscGVyIGZ1bmN0aW9uc1xuLy8gUmVzdGF1cmFudCBwYWdlXG5cblxuY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0eXBlLCBhdHRyaWJ1dGVzKSA9PiB7XG4gICAgXG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKTtcbiAgICBpZiAoYXR0cmlidXRlcyA9PSBudWxsKSByZXR1cm4gbmV3RWxlbWVudDtcbiAgICBzZXRBdHRyaWJ1dGVzKG5ld0VsZW1lbnQsIGF0dHJpYnV0ZXMpO1xuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5jb25zdCBnZXREYXRlID0gKCkgPT4ge1xuXG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgZGQgPSB0b2RheS5nZXREYXRlKCk7XG4gICAgbGV0IG1tID0gdG9kYXkuZ2V0TW9udGgoKSArIDE7IC8vIEluZGV4IGF0IHplcm9cbiAgICBjb25zdCB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcblxuICAgIGlmIChkZCA8IDEwKXtcbiAgICAgICAgZGQgPSAnMCcgKyBkZDtcbiAgICB9XG4gICAgaWYgKG1tIDwgMTApe1xuICAgICAgICBtbSA9ICcwJyArIG1tO1xuICAgIH1cblxuICAgIHRvZGF5ID0gYCR7eXl5eX0tJHttbX0tJHtkZH1gO1xuXG4gICAgcmV0dXJuIHRvZGF5O1xufVxuXG5jb25zdCBmb3JtYXRQaG9uZSA9IChpbnB1dCkgPT4ge1xuICAgIGNvbnN0IHBob25lRm9ybWF0ZXIgPSBpbnB1dDtcbiAgICBjb25zb2xlLmxvZ1xuICAgIHBob25lRm9ybWF0ZXIuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoZSkgPT4ge1xuXG4gICAgICAgIC8vIFJlbW92ZSBhbnl0aGluZyB0aGF0IGlzbid0IGEgbnVtYmVyXG4gICAgICAgIGxldCBwaG9uZU51bWJlciA9IHBob25lRm9ybWF0ZXIudmFsdWUucmVwbGFjZSgvXFxEL2csJycpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGlucHV0U2l6ZSA9IHBob25lTnVtYmVyLmxlbmd0aDtcbiAgICAgICAgLy8gSWdub3JlIGRlbGV0ZS9iYWNrc3BhY2Ugc28gdXNlciBjYW4gZGVsZXRlIG51bWJlciBcbiAgICAgICAgaWYgKGUua2V5ID09ICdCYWNrc3BhY2UnIHx8IGUua2V5ID09ICdEZWxldGUnKSByZXR1cm47XG4gICAgICAgIFxuXG4gICAgICAgIGlmIChpbnB1dFNpemUgPj0gMyAmJiBpbnB1dFNpemUgPCA3ICYmIGUua2V5ICE9ICdCYWNrc3BhY2UnKXtcbiAgICAgICAgICAgIHBob25lTnVtYmVyID0gcGhvbmVOdW1iZXIuc3Vic3RyaW5nKDAsMykgKyAnLScgKyBwaG9uZU51bWJlci5zdWJzdHJpbmcoMylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpbnB1dFNpemUgPj0gNyl7XG4gICAgICAgICAgICBwaG9uZU51bWJlciA9IHBob25lTnVtYmVyLnN1YnN0cmluZygwLDMpICsgJy0nICsgcGhvbmVOdW1iZXIuc3Vic3RyaW5nKDMsNikgKyAnLScgKyBwaG9uZU51bWJlci5zdWJzdHJpbmcoNilcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcGhvbmVGb3JtYXRlci52YWx1ZSA9IHBob25lTnVtYmVyO1xuICAgICAgICBwaG9uZUZvcm1hdGVyLnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcbiAgICB9KVxuICAgIFxufVxuXG5cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcylcbntcbiAgICBPYmplY3QuZW50cmllcyhhdHRyaWJ1dGVzKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSlcbiAgICB9KTtcbn1cblxuXG5cblxuZXhwb3J0IHtmb3JtYXRQaG9uZSwgZ2V0RGF0ZSwgc2V0QXR0cmlidXRlcywgY3JlYXRlRWxlbWVudCBhcyBlbGVtZW50fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgYnVpbGQgZnJvbSAnLi9idWlsZHBhZ2UuanMnO1xuXG5cbmNvbnN0IGluaXRpYWxpemUgPSAoKSA9PiB7XG5cblxuICAgIGNvbnN0IG1lbnVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21lbnUtYnV0dG9uXCIpO1xuICAgIG1lbnVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGJ1aWxkLmJ1aWxkUGFnZSgnbWVudScpO1xuICAgIH0pXG5cbiAgICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250YWN0LWJ1dHRvblwiKTtcbiAgICBjb250YWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBidWlsZC5idWlsZFBhZ2UoJ2NvbnRhY3QnKTtcbiAgICB9KVxuXG4gICAgY29uc3Qgc3RvcnlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3RvcnktYnV0dG9uJyk7XG4gICAgc3RvcnlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGJ1aWxkLmJ1aWxkUGFnZSgnc3RvcnknKVxuICAgIH0pXG5cbiAgICBjb25zdCBtYWluQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RpdGxlLWhlYWRlcicpO1xuICAgIG1haW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGJ1aWxkLmJ1aWxkUGFnZSgnbWFpbicpO1xuICAgIH0pXG4gICAgXG4gICAgXG4gICAgXG4gICAgXG4gICBcblxuXG59XG5cbmluaXRpYWxpemUoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=