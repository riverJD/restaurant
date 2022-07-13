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
___CSS_LOADER_EXPORT___.push([module.id, ":root{\n    --background-color:  rgb(255, 254, 241);\n    --birdblue: #121e6a;\n    --birdlavender: #bebfd4;\n    \n    \n}\n\nbody{\n    background-color: rgb(255, 254, 241);\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    align-items:  center;\n    font-family: 'Arima', cursive;\n  \n}\n\nh1, h2, h3, p{\n    margin: 0;\n}\n\n#content{\n    \n    height: 100vh;\n    width:  max(330px, 70vw);\n}\n\n#main-image{\n   \n    border: 5px dotted green;\n    height: auto;\n    width: 400px;\n}\n\n.logo{\n   \n    width: max(80px, 20vw);\n    max-width: 300px;\n\n    height: auto;\n    display: flex;\n    \n    grid-area: 1 / 1 / 3 / 2;\n    align-self: center;\n\n}\n\n.logo > img{\n    width: 100%;\n    height: auto;\n}\n\n.header{\n    \n    display: grid;\n\n   \n    justify-content:flex-end;\n    gap: 10px;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: 2fr 1fr;\n\n    text-align: center;\n    font-size: 18px;\n    max-width: 800px;\n\n}\n\n.header > button{\n    display: inline-block;\n    grid-row-start: 2;\n\n    width: 100%;\n    \n    font-family: inherit;\n    background: none;\n    border: none;\n    margin: 0;\n    padding: 0;\n    cursor: pointer;\n\n   \n\n    font-size: clamp(1rem, 3vw, 1.3rem);\n   \n\n    \n}\n\n#title-header{\n    grid-area: 1 / 2 / 2 / -1;\n    font-size: clamp(1.2rem, 12vw, 10rem);\n    text-align: center;\n    \n}\n\n\n#main-content{\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n}\n\n.main{\n    margin-top: 50px;\n}\n\n#menu{\n    margin-top: 5%;\n    display: flex;\n    flex-direction: column;\n\n}\n\n.menu-header{\n    text-align: center;\n     \n}\n\n.menu-subheader{\n    font-style: italic;\n    \n}\n\n\n.menu-item{\n    margin: 5px;\n    \n}\n\n.menu-dish{\n\n    display: grid;\n\n    grid-template-areas: \n    \"name . note\"\n    \"description description price\"\n    \"symbols . price\";\n\n    margin-top: 10px;\n\n}\n\n.menu-name{\n    grid-area: name;\n    color: var(--birdblue, black);\n \n   \n}\n\n.menu-price{\n    grid-area: price;\n    text-align: right;\n    font-weight: bold;\n}\n\n.menu-description{\n    grid-area: description;\n}\n\n.menu-note{\n    \n   grid-area: note;\n\n   font-style: italic;\n}\n\n.menu-symbol{\n    grid-area: symbols;\n}\n\n\n.pictures{\n   \n    border-radius: 5px;\n}\n#table-image{\n    height: auto;\n    width: 300px;\n}\n\n\n#story-page{\n    \n    display: grid;\n    gap: 20px;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n}\n\n.page{\n    display: flex;\n    justify-content: center;\n    margin-bottom: 15%;\n}\n\n#page-header{\n    margin: 15px 0px 15px 0px;\n    font-weight: 200;\n    font-style: italic;\n    font-size: clamp(1em, 10vw, 3.2rem);\n    \n    \n}\n\n#form-container{\n    margin-top: 10%;\n    width: min(400px, 100%);\n    display: flex;\n    justify-content: center;\n    border: 3px solid var(--birdblue, black);\n    border-radius: 10px;\n    box-shadow: 1px 1px 5px;\n    background-color: var(--birdlavender, rgb(222, 196, 247));\n    padding: 10px;\n}\n\n.form-label{\n    display: flex;\n    flex-direction: column;\n    color: var(--birdblue, black);\n}\n\n.form-input{\n    background-color: var(--background-color, white);\n    border: 3px solid var(--birdblue, black);\n    border-radius: 5px;\n    width: min(90%, 14rem);\n}\n\n#submit-button{\n    margin-top: 10px;\n    font: inherit;\n    font-weight: bold;\n    color: var(--birdblue, black);\n    border: 1px var(--birdblue, black) outset;\n    border-radius: 5px;\n}\n\n#reservation-form{\n    padding: 5px;\n}\n\n#submit-modal{\n    position: fixed;\n    z-index: 1;\n    width: min(100vw, 330px);\n    height: min(100vh, 150px);\n    border: 2px solid var(--birdblue, black);\n    border-radius: 5px;\n    display: none;\n    justify-content: center;\n    align-items: center;\n\n    background-color: var(--birdlavender, black);\n}\n\n#modal-content{\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-weight: 300;\n    font-style: italic;\n    align-items: center;\n    text-align: center;\n    justify-items: center;\n    color:rgba(148, 21, 21, 0.788);\n    width: 80%;\n    height: 60%;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#submit-text{\n    color: black;\n}\n\n.hidden{\n    background-color: red;\n}\n\n#main-page{\n    display: grid;\n    max-width: 800px;\n    justify-self: center;\n    \n}\n#content{\n    display: flex;;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 10%;\n \n    \n}\n\n.page-content{\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 20px;\n\n   justify-items: center;\n   align-items: center;\n   padding: 20px 0px;\n}\n\n\n\n\n.photo{\n    margin: 10px;\n    width: min(90%, 300px);\n    height: auto;\n    max-height: 260px;\n\n    border-radius: 4px;\n}\n\n.text-content{\n   \n   \n    max-width: 80%;\n    text-align: left;\n\n        \n}\n\n\n.no-photo{\n    grid-template-columns: 1fr;\n    text-align: right;\n}\n\n.content-break{\n    border: 1px dotted var(--birdblue)\n}\n\nfooter{\n    \n    margin-top: auto;\n \n    width: 100%;\n    display: flex;\n    justify-content: center;\n   \n}\n\ntable{\n    width: 50%;\n    margin: 10px;\n    padding: 10px;\n    border-spacing: 10px 0px;\n}\n\ntr{\n    \n}\n\nth{\n    text-align: left;\n    \n    \n}\n\ntd{\n    text-align: right;\n    \n}\n\n.image-link{\n    height: auto;\n    width: 1.2rem;\n}\n\n\n#footer-content{\n    border: 4px solid #121e6a;\n    border-bottom: none;\n    border-radius: 10px 10px 0px 0px;\n    text-align: left;\n    justify-items: center;\n    background-color: #e0e0e0;\n   \n}\n\n#phone-number{\n    text-align: center;\n}\n\n#footer-links{\n    margin-top: 2rem;\n    display: flex;\n    justify-content: center;\n    gap: 1rem;\n}\n\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root{\n    --background-color:  rgb(255, 254, 241);\n    --birdblue: #121e6a;\n    --birdlavender: #bebfd4;\n    \n    \n}\n\nbody{\n    background-color: rgb(255, 254, 241);\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    align-items:  center;\n    font-family: 'Arima', cursive;\n  \n}\n\nh1, h2, h3, p{\n    margin: 0;\n}\n\n#content{\n    \n    height: 100vh;\n    width:  max(330px, 70vw);\n}\n\n#main-image{\n   \n    border: 5px dotted green;\n    height: auto;\n    width: 400px;\n}\n\n.logo{\n   \n    width: max(80px, 20vw);\n    max-width: 300px;\n\n    height: auto;\n    display: flex;\n    \n    grid-area: 1 / 1 / 3 / 2;\n    align-self: center;\n\n}\n\n.logo > img{\n    width: 100%;\n    height: auto;\n}\n\n.header{\n    \n    display: grid;\n\n   \n    justify-content:flex-end;\n    gap: 10px;\n    grid-template-columns: repeat(4, 1fr);\n    grid-template-rows: 2fr 1fr;\n\n    text-align: center;\n    font-size: 18px;\n    max-width: 800px;\n\n}\n\n.header > button{\n    display: inline-block;\n    grid-row-start: 2;\n\n    width: 100%;\n    \n    font-family: inherit;\n    background: none;\n    border: none;\n    margin: 0;\n    padding: 0;\n    cursor: pointer;\n\n   \n\n    font-size: clamp(1rem, 3vw, 1.3rem);\n   \n\n    \n}\n\n#title-header{\n    grid-area: 1 / 2 / 2 / -1;\n    font-size: clamp(1.2rem, 12vw, 10rem);\n    text-align: center;\n    \n}\n\n\n#main-content{\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n}\n\n.main{\n    margin-top: 50px;\n}\n\n#menu{\n    margin-top: 5%;\n    display: flex;\n    flex-direction: column;\n\n}\n\n.menu-header{\n    text-align: center;\n     \n}\n\n.menu-subheader{\n    font-style: italic;\n    \n}\n\n\n.menu-item{\n    margin: 5px;\n    \n}\n\n.menu-dish{\n\n    display: grid;\n\n    grid-template-areas: \n    \"name . note\"\n    \"description description price\"\n    \"symbols . price\";\n\n    margin-top: 10px;\n\n}\n\n.menu-name{\n    grid-area: name;\n    color: var(--birdblue, black);\n \n   \n}\n\n.menu-price{\n    grid-area: price;\n    text-align: right;\n    font-weight: bold;\n}\n\n.menu-description{\n    grid-area: description;\n}\n\n.menu-note{\n    \n   grid-area: note;\n\n   font-style: italic;\n}\n\n.menu-symbol{\n    grid-area: symbols;\n}\n\n\n.pictures{\n   \n    border-radius: 5px;\n}\n#table-image{\n    height: auto;\n    width: 300px;\n}\n\n\n#story-page{\n    \n    display: grid;\n    gap: 20px;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n}\n\n.page{\n    display: flex;\n    justify-content: center;\n    margin-bottom: 15%;\n}\n\n#page-header{\n    margin: 15px 0px 15px 0px;\n    font-weight: 200;\n    font-style: italic;\n    font-size: clamp(1em, 10vw, 3.2rem);\n    \n    \n}\n\n#form-container{\n    margin-top: 10%;\n    width: min(400px, 100%);\n    display: flex;\n    justify-content: center;\n    border: 3px solid var(--birdblue, black);\n    border-radius: 10px;\n    box-shadow: 1px 1px 5px;\n    background-color: var(--birdlavender, rgb(222, 196, 247));\n    padding: 10px;\n}\n\n.form-label{\n    display: flex;\n    flex-direction: column;\n    color: var(--birdblue, black);\n}\n\n.form-input{\n    background-color: var(--background-color, white);\n    border: 3px solid var(--birdblue, black);\n    border-radius: 5px;\n    width: min(90%, 14rem);\n}\n\n#submit-button{\n    margin-top: 10px;\n    font: inherit;\n    font-weight: bold;\n    color: var(--birdblue, black);\n    border: 1px var(--birdblue, black) outset;\n    border-radius: 5px;\n}\n\n#reservation-form{\n    padding: 5px;\n}\n\n#submit-modal{\n    position: fixed;\n    z-index: 1;\n    width: min(100vw, 330px);\n    height: min(100vh, 150px);\n    border: 2px solid var(--birdblue, black);\n    border-radius: 5px;\n    display: none;\n    justify-content: center;\n    align-items: center;\n\n    background-color: var(--birdlavender, black);\n}\n\n#modal-content{\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    font-weight: 300;\n    font-style: italic;\n    align-items: center;\n    text-align: center;\n    justify-items: center;\n    color:rgba(148, 21, 21, 0.788);\n    width: 80%;\n    height: 60%;\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n\n#submit-text{\n    color: black;\n}\n\n.hidden{\n    background-color: red;\n}\n\n#main-page{\n    display: grid;\n    max-width: 800px;\n    justify-self: center;\n    \n}\n#content{\n    display: flex;;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 10%;\n \n    \n}\n\n.page-content{\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n    gap: 20px;\n\n   justify-items: center;\n   align-items: center;\n   padding: 20px 0px;\n}\n\n\n\n\n.photo{\n    margin: 10px;\n    width: min(90%, 300px);\n    height: auto;\n    max-height: 260px;\n\n    border-radius: 4px;\n}\n\n.text-content{\n   \n   \n    max-width: 80%;\n    text-align: left;\n\n        \n}\n\n\n.no-photo{\n    grid-template-columns: 1fr;\n    text-align: right;\n}\n\n.content-break{\n    border: 1px dotted var(--birdblue)\n}\n\nfooter{\n    \n    margin-top: auto;\n \n    width: 100%;\n    display: flex;\n    justify-content: center;\n   \n}\n\ntable{\n    width: 50%;\n    margin: 10px;\n    padding: 10px;\n    border-spacing: 10px 0px;\n}\n\ntr{\n    \n}\n\nth{\n    text-align: left;\n    \n    \n}\n\ntd{\n    text-align: right;\n    \n}\n\n.image-link{\n    height: auto;\n    width: 1.2rem;\n}\n\n\n#footer-content{\n    border: 4px solid #121e6a;\n    border-bottom: none;\n    border-radius: 10px 10px 0px 0px;\n    text-align: left;\n    justify-items: center;\n    background-color: #e0e0e0;\n   \n}\n\n#phone-number{\n    text-align: center;\n}\n\n#footer-links{\n    margin-top: 2rem;\n    display: flex;\n    justify-content: center;\n    gap: 1rem;\n}\n\n"],"sourceRoot":""}]);
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
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer */ "./src/footer.js");











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
    
  

    const buildPage = (source) => {
        // clear page

       
        while (content.children.length > 1) content.removeChild(content.lastElementChild); 
        let page;
        
        if (source === 'menu'){
            page = (0,_menu_js__WEBPACK_IMPORTED_MODULE_3__.buildMenu)();   
           
        }
        if (source === 'contact'){
            page = (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__.buildContact)();
        }
        if (source === 'story'){
            page = (0,_main__WEBPACK_IMPORTED_MODULE_6__.buildMain)();
        }

        if (source === 'main'){
            page = (0,_main__WEBPACK_IMPORTED_MODULE_6__.buildMain)();
        }

        
        content.appendChild(page);
        content.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_7__["default"])());
        
    }

    buildPage('main');
   
   

    // Construct footer for hours, contact info, etc


    
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

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities.js */ "./src/utilities.js");
/* harmony import */ var _footer_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.json */ "./src/footer.json");
/* harmony import */ var _github_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./github.png */ "./src/github.png");
/* harmony import */ var _riv_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./riv.png */ "./src/riv.png");






const buildFooter = () => {

    // container
    const footer = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('footer', {"id": "footer"});
    const footerContent = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('div', {"id": "footer-content"});
    const links = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('div', {"id": "footer-links"});
    
    // hours information
    const hours = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('table', {"id": "footer-hours"});
    for (let days of _footer_json__WEBPACK_IMPORTED_MODULE_1__.hours){
  
        const day = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('tr', {"class": "hours-info", "id": `hours-${days.day}`, "colspan": "2"});
        let time = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('td');
        
        day.innerHTML= `<b>${days.day}</b>`

        time.textContent = days.open;
        day.appendChild(time);

        time = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)("td");

        time.textContent = days.close;
        day.appendChild(time);
        hours.appendChild(day);
    }
    footerContent.appendChild(hours);

    //contact information
    const phone = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)("div", {"id": "phone-number"});
    phone.innerHTML = `Call us at <b>555-201-5312</b>`;
    
    footerContent.appendChild(phone);

    // Create links
    const rivLink = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createImageLink)("https://riverjd.github.io/admin-page/", _riv_png__WEBPACK_IMPORTED_MODULE_3__, "river's admin page", "River icons created by Freepik - Flaticon");
    const footerNote = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)("div", {"id": "footer-note"})
    footerNote.textContent = "river ©2022"
    const gitLink = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.createImageLink)("https://github.com/riverJD/", _github_png__WEBPACK_IMPORTED_MODULE_2__, "river's github");
    links.appendChild(rivLink);
    links.appendChild(footerNote)
    links.appendChild(gitLink);
    footerContent.appendChild(links);
    footer.appendChild(footerContent);

    return footer;
    
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (buildFooter);

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
    // Elements will be dynamically classed and id based on name.  
    // content is a source of text content for the section
    // firstElement is string name of element which will be placed to the left
    const createContent = (name, content, photo, firstElement) => {

        const container = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('div', {"class": "page-content", 'id': `${name}-content`});
        const text = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_0__.element)('div', {"class": "text-content content", "id": `${name}-text`});
        text.innerHTML = content;

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
    const table = createContent("table", "Our space is <b>very limited</b>, and <em>reservations are required</em>. Please <b>call ahead</b> if you have any specific dietary restrictions.", _table_jpg__WEBPACK_IMPORTED_MODULE_1__)
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
    
    const menu = (0,_utilities_js__WEBPACK_IMPORTED_MODULE_1__.element)('div', {"id": "menu", "class": "page"});
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
/* harmony export */   "createImageLink": () => (/* binding */ createImageLink),
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

function createImageLink(url, image, alt){

    
    const ahref = createElement("a", {"class": "link", "href": url});
    const linkImage = createElement("img", {"class": "image-link", "src": image, "alt": alt});

    ahref.appendChild(linkImage);

    return ahref;
    

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

/***/ "./src/github.png":
/*!************************!*\
  !*** ./src/github.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b039b2d83982c8256af3.png";

/***/ }),

/***/ "./src/riv.png":
/*!*********************!*\
  !*** ./src/riv.png ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eb798bcfa0567df925bb.png";

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

module.exports = "<b>Bluebird</b> is focused on sharing the fresh ingredients that we grow in our gardens and forage throughout the local area.\n<b>We source all ingredients regionally</b>, and as many as we possibly can at the farm. \n\nA number of wild bluebirds call our farm home, and we've taken inspiration from them in our dishes <b>developed right from our garden.</b> They are a common sight near our open patio.\n";

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

module.exports = "<b>We are a true farm-to-table restaurant</b> serving award winning cuisine in a peaceful setting.\nAll of our dishes are vegetarian, but you do not need to be to enjoy them. ";

/***/ }),

/***/ "./src/footer.json":
/*!*************************!*\
  !*** ./src/footer.json ***!
  \*************************/
/***/ ((module) => {

module.exports = JSON.parse('{"hours":[{"day":"sunday","open":"12:00PM","close":"09:00PM"},{"day":"monday","open":"closed","close":"closed"},{"day":"tuesday","open":"closed","close":"closed"},{"day":"wednesday","open":"04;00PM","close":"09:00PM"},{"day":"thursday","open":"04:00PM","close":"09:00PM"},{"day":"friday","open":"04:00PM","close":"10:00PM"},{"day":"saturday","open":"12:00PM","close":"10:00PM"}]}');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDYzs7O0FBR25DOzs7QUFHQTtBQUNBO0FBQ0EsUUFBUSwrREFBZTtBQUN2QixLQUFLOztBQUVMO0FBQ0E7QUFDQSxRQUFRLCtEQUFlO0FBQ3ZCLEtBQUs7O0FBRUw7QUFDQTtBQUNBLFFBQVEsK0RBQWU7QUFDdkIsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsUUFBUSwrREFBZTtBQUN2QixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUEsYSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9idWlsZHBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9zdG9yeS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL3V0aWxpdGllcy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3R7XFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogIHJnYigyNTUsIDI1NCwgMjQxKTtcXG4gICAgLS1iaXJkYmx1ZTogIzEyMWU2YTtcXG4gICAgLS1iaXJkbGF2ZW5kZXI6ICNiZWJmZDQ7XFxuICAgIFxcbiAgICBcXG59XFxuXFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU0LCAyNDEpO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiAgY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ0FyaW1hJywgY3Vyc2l2ZTtcXG4gIFxcbn1cXG5cXG5oMSwgaDIsIGgzLCBwe1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNjb250ZW50e1xcbiAgICBcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6ICBtYXgoMzMwcHgsIDcwdncpO1xcbn1cXG5cXG4jbWFpbi1pbWFnZXtcXG4gICBcXG4gICAgYm9yZGVyOiA1cHggZG90dGVkIGdyZWVuO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuLmxvZ297XFxuICAgXFxuICAgIHdpZHRoOiBtYXgoODBweCwgMjB2dyk7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuXFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAzIC8gMjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcblxcbn1cXG5cXG4ubG9nbyA+IGltZ3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgXFxuICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxZnI7XFxuXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcblxcbn1cXG5cXG4uaGVhZGVyID4gYnV0dG9ue1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGdyaWQtcm93LXN0YXJ0OiAyO1xcblxcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgXFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgIFxcblxcbiAgICBmb250LXNpemU6IGNsYW1wKDFyZW0sIDN2dywgMS4zcmVtKTtcXG4gICBcXG5cXG4gICAgXFxufVxcblxcbiN0aXRsZS1oZWFkZXJ7XFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gLTE7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMS4ycmVtLCAxMnZ3LCAxMHJlbSk7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgXFxufVxcblxcblxcbiNtYWluLWNvbnRlbnR7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5tYWlue1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4jbWVudXtcXG4gICAgbWFyZ2luLXRvcDogNSU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxufVxcblxcbi5tZW51LWhlYWRlcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgXFxufVxcblxcbi5tZW51LXN1YmhlYWRlcntcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBcXG59XFxuXFxuXFxuLm1lbnUtaXRlbXtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIFxcbn1cXG5cXG4ubWVudS1kaXNoe1xcblxcbiAgICBkaXNwbGF5OiBncmlkO1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgXFxcIm5hbWUgLiBub3RlXFxcIlxcbiAgICBcXFwiZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gcHJpY2VcXFwiXFxuICAgIFxcXCJzeW1ib2xzIC4gcHJpY2VcXFwiO1xcblxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcblxcbn1cXG5cXG4ubWVudS1uYW1le1xcbiAgICBncmlkLWFyZWE6IG5hbWU7XFxuICAgIGNvbG9yOiB2YXIoLS1iaXJkYmx1ZSwgYmxhY2spO1xcbiBcXG4gICBcXG59XFxuXFxuLm1lbnUtcHJpY2V7XFxuICAgIGdyaWQtYXJlYTogcHJpY2U7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLm1lbnUtZGVzY3JpcHRpb257XFxuICAgIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxufVxcblxcbi5tZW51LW5vdGV7XFxuICAgIFxcbiAgIGdyaWQtYXJlYTogbm90ZTtcXG5cXG4gICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5tZW51LXN5bWJvbHtcXG4gICAgZ3JpZC1hcmVhOiBzeW1ib2xzO1xcbn1cXG5cXG5cXG4ucGljdHVyZXN7XFxuICAgXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuI3RhYmxlLWltYWdle1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAzMDBweDtcXG59XFxuXFxuXFxuI3N0b3J5LXBhZ2V7XFxuICAgIFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG59XFxuXFxuLnBhZ2V7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNSU7XFxufVxcblxcbiNwYWdlLWhlYWRlcntcXG4gICAgbWFyZ2luOiAxNXB4IDBweCAxNXB4IDBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXNpemU6IGNsYW1wKDFlbSwgMTB2dywgMy4ycmVtKTtcXG4gICAgXFxuICAgIFxcbn1cXG5cXG4jZm9ybS1jb250YWluZXJ7XFxuICAgIG1hcmdpbi10b3A6IDEwJTtcXG4gICAgd2lkdGg6IG1pbig0MDBweCwgMTAwJSk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB2YXIoLS1iaXJkYmx1ZSwgYmxhY2spO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmlyZGxhdmVuZGVyLCByZ2IoMjIyLCAxOTYsIDI0NykpO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uZm9ybS1sYWJlbHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgY29sb3I6IHZhcigtLWJpcmRibHVlLCBibGFjayk7XFxufVxcblxcbi5mb3JtLWlucHV0e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLCB3aGl0ZSk7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJpcmRibHVlLCBibGFjayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IG1pbig5MCUsIDE0cmVtKTtcXG59XFxuXFxuI3N1Ym1pdC1idXR0b257XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBjb2xvcjogdmFyKC0tYmlyZGJsdWUsIGJsYWNrKTtcXG4gICAgYm9yZGVyOiAxcHggdmFyKC0tYmlyZGJsdWUsIGJsYWNrKSBvdXRzZXQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI3Jlc2VydmF0aW9uLWZvcm17XFxuICAgIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuI3N1Ym1pdC1tb2RhbHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICB3aWR0aDogbWluKDEwMHZ3LCAzMzBweCk7XFxuICAgIGhlaWdodDogbWluKDEwMHZoLCAxNTBweCk7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWJpcmRibHVlLCBibGFjayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJpcmRsYXZlbmRlciwgYmxhY2spO1xcbn1cXG5cXG4jbW9kYWwtY29udGVudHtcXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgY29sb3I6cmdiYSgxNDgsIDIxLCAyMSwgMC43ODgpO1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBoZWlnaHQ6IDYwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4jc3VibWl0LXRleHR7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmhpZGRlbntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4jbWFpbi1wYWdle1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBtYXgtd2lkdGg6IDgwMHB4O1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgXFxufVxcbiNjb250ZW50e1xcbiAgICBkaXNwbGF5OiBmbGV4OztcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcbiBcXG4gICAgXFxufVxcblxcbi5wYWdlLWNvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwMHB4LCAxZnIpKTtcXG4gICAgZ2FwOiAyMHB4O1xcblxcbiAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgIHBhZGRpbmc6IDIwcHggMHB4O1xcbn1cXG5cXG5cXG5cXG5cXG4ucGhvdG97XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgd2lkdGg6IG1pbig5MCUsIDMwMHB4KTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtYXgtaGVpZ2h0OiAyNjBweDtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4udGV4dC1jb250ZW50e1xcbiAgIFxcbiAgIFxcbiAgICBtYXgtd2lkdGg6IDgwJTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG5cXG4gICAgICAgIFxcbn1cXG5cXG5cXG4ubm8tcGhvdG97XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuLmNvbnRlbnQtYnJlYWt7XFxuICAgIGJvcmRlcjogMXB4IGRvdHRlZCB2YXIoLS1iaXJkYmx1ZSlcXG59XFxuXFxuZm9vdGVye1xcbiAgICBcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICBcXG59XFxuXFxudGFibGV7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIG1hcmdpbjogMTBweDtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyLXNwYWNpbmc6IDEwcHggMHB4O1xcbn1cXG5cXG50cntcXG4gICAgXFxufVxcblxcbnRoe1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBcXG4gICAgXFxufVxcblxcbnRke1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgXFxufVxcblxcbi5pbWFnZS1saW5re1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAxLjJyZW07XFxufVxcblxcblxcbiNmb290ZXItY29udGVudHtcXG4gICAgYm9yZGVyOiA0cHggc29saWQgIzEyMWU2YTtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcXG4gICBcXG59XFxuXFxuI3Bob25lLW51bWJlcntcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jZm9vdGVyLWxpbmtze1xcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUu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QUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7QUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdHtcXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDI1NSwgMjU0LCAyNDEpO1xcbiAgICAtLWJpcmRibHVlOiAjMTIxZTZhO1xcbiAgICAtLWJpcmRsYXZlbmRlcjogI2JlYmZkNDtcXG4gICAgXFxuICAgIFxcbn1cXG5cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTQsIDI0MSk7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6ICBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnQXJpbWEnLCBjdXJzaXZlO1xcbiAgXFxufVxcblxcbmgxLCBoMiwgaDMsIHB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI2NvbnRlbnR7XFxuICAgIFxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogIG1heCgzMzBweCwgNzB2dyk7XFxufVxcblxcbiNtYWluLWltYWdle1xcbiAgIFxcbiAgICBib3JkZXI6IDVweCBkb3R0ZWQgZ3JlZW47XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4ubG9nb3tcXG4gICBcXG4gICAgd2lkdGg6IG1heCg4MHB4LCAyMHZ3KTtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG5cXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDMgLyAyO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuXFxufVxcblxcbi5sb2dvID4gaW1ne1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBcXG4gICAgZGlzcGxheTogZ3JpZDtcXG5cXG4gICBcXG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmcjtcXG5cXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxuXFxufVxcblxcbi5oZWFkZXIgPiBidXR0b257XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgZ3JpZC1yb3ctc3RhcnQ6IDI7XFxuXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuXFxuICAgXFxuXFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMXJlbSwgM3Z3LCAxLjNyZW0pO1xcbiAgIFxcblxcbiAgICBcXG59XFxuXFxuI3RpdGxlLWhlYWRlcntcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAtMTtcXG4gICAgZm9udC1zaXplOiBjbGFtcCgxLjJyZW0sIDEydncsIDEwcmVtKTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuXFxuI21haW4tY29udGVudHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm1haW57XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbiNtZW51e1xcbiAgICBtYXJnaW4tdG9wOiA1JTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG59XFxuXFxuLm1lbnUtaGVhZGVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICBcXG59XFxuXFxuLm1lbnUtc3ViaGVhZGVye1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIFxcbn1cXG5cXG5cXG4ubWVudS1pdGVte1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgXFxufVxcblxcbi5tZW51LWRpc2h7XFxuXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxcbiAgICBcXFwibmFtZSAuIG5vdGVcXFwiXFxuICAgIFxcXCJkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBwcmljZVxcXCJcXG4gICAgXFxcInN5bWJvbHMgLiBwcmljZVxcXCI7XFxuXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuXFxufVxcblxcbi5tZW51LW5hbWV7XFxuICAgIGdyaWQtYXJlYTogbmFtZTtcXG4gICAgY29sb3I6IHZhcigtLWJpcmRibHVlLCBibGFjayk7XFxuIFxcbiAgIFxcbn1cXG5cXG4ubWVudS1wcmljZXtcXG4gICAgZ3JpZC1hcmVhOiBwcmljZTtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubWVudS1kZXNjcmlwdGlvbntcXG4gICAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcXG59XFxuXFxuLm1lbnUtbm90ZXtcXG4gICAgXFxuICAgZ3JpZC1hcmVhOiBub3RlO1xcblxcbiAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLm1lbnUtc3ltYm9se1xcbiAgICBncmlkLWFyZWE6IHN5bWJvbHM7XFxufVxcblxcblxcbi5waWN0dXJlc3tcXG4gICBcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG4jdGFibGUtaW1hZ2V7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG5cXG4jc3RvcnktcGFnZXtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMjBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbn1cXG5cXG4ucGFnZXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1JTtcXG59XFxuXFxuI3BhZ2UtaGVhZGVye1xcbiAgICBtYXJnaW46IDE1cHggMHB4IDE1cHggMHB4O1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoMWVtLCAxMHZ3LCAzLjJyZW0pO1xcbiAgICBcXG4gICAgXFxufVxcblxcbiNmb3JtLWNvbnRhaW5lcntcXG4gICAgbWFyZ2luLXRvcDogMTAlO1xcbiAgICB3aWR0aDogbWluKDQwMHB4LCAxMDAlKTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJpcmRibHVlLCBibGFjayk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iaXJkbGF2ZW5kZXIsIHJnYigyMjIsIDE5NiwgMjQ3KSk7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5mb3JtLWxhYmVse1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBjb2xvcjogdmFyKC0tYmlyZGJsdWUsIGJsYWNrKTtcXG59XFxuXFxuLmZvcm0taW5wdXR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IsIHdoaXRlKTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0tYmlyZGJsdWUsIGJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB3aWR0aDogbWluKDkwJSwgMTRyZW0pO1xcbn1cXG5cXG4jc3VibWl0LWJ1dHRvbntcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiB2YXIoLS1iaXJkYmx1ZSwgYmxhY2spO1xcbiAgICBib3JkZXI6IDFweCB2YXIoLS1iaXJkYmx1ZSwgYmxhY2spIG91dHNldDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4jcmVzZXJ2YXRpb24tZm9ybXtcXG4gICAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG4jc3VibWl0LW1vZGFse1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHdpZHRoOiBtaW4oMTAwdncsIDMzMHB4KTtcXG4gICAgaGVpZ2h0OiBtaW4oMTAwdmgsIDE1MHB4KTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmlyZGJsdWUsIGJsYWNrKTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmlyZGxhdmVuZGVyLCBibGFjayk7XFxufVxcblxcbiNtb2RhbC1jb250ZW50e1xcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjpyZ2JhKDE0OCwgMjEsIDIxLCAwLjc4OCk7XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGhlaWdodDogNjAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbiNzdWJtaXQtdGV4dHtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uaGlkZGVue1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbiNtYWluLXBhZ2V7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIG1heC13aWR0aDogODAwcHg7XFxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgICBcXG59XFxuI2NvbnRlbnR7XFxuICAgIGRpc3BsYXk6IGZsZXg7O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxMCU7XFxuIFxcbiAgICBcXG59XFxuXFxuLnBhZ2UtY29udGVudHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMzAwcHgsIDFmcikpO1xcbiAgICBnYXA6IDIwcHg7XFxuXFxuICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgcGFkZGluZzogMjBweCAwcHg7XFxufVxcblxcblxcblxcblxcbi5waG90b3tcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICB3aWR0aDogbWluKDkwJSwgMzAwcHgpO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDI2MHB4O1xcblxcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbi50ZXh0LWNvbnRlbnR7XFxuICAgXFxuICAgXFxuICAgIG1heC13aWR0aDogODAlO1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcblxcbiAgICAgICAgXFxufVxcblxcblxcbi5uby1waG90b3tcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG5cXG4uY29udGVudC1icmVha3tcXG4gICAgYm9yZGVyOiAxcHggZG90dGVkIHZhcigtLWJpcmRibHVlKVxcbn1cXG5cXG5mb290ZXJ7XFxuICAgIFxcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiBcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgIFxcbn1cXG5cXG50YWJsZXtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgbWFyZ2luOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXItc3BhY2luZzogMTBweCAwcHg7XFxufVxcblxcbnRye1xcbiAgICBcXG59XFxuXFxudGh7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIFxcbiAgICBcXG59XFxuXFxudGR7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBcXG59XFxuXFxuLmltYWdlLWxpbmt7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDEuMnJlbTtcXG59XFxuXFxuXFxuI2Zvb3Rlci1jb250ZW50e1xcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjMTIxZTZhO1xcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xcbiAgIFxcbn1cXG5cXG4jcGhvbmUtbnVtYmVye1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNmb290ZXItbGlua3N7XFxuICAgIG1hcmdpbi10b3A6IDJyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDFyZW07XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IGJpcmQgZnJvbSAnLi9ibHVlYmlyZC5wbmcnXG5pbXBvcnQgYmxhY2tiaXJkIGZyb20gJy4vYmxhY2tiaXJkLnBuZydcbmltcG9ydCB7IGVsZW1lbnQsIGdldERhdGUgfSBmcm9tICcuL3V0aWxpdGllcy5qcyc7XG5pbXBvcnQgeyBidWlsZE1lbnUgfSAgZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCB7IGJ1aWxkQ29udGFjdH0gZnJvbSAnLi9jb250YWN0LmpzJztcbmltcG9ydCB7IGJ1aWxkU3RvcnkgfSBmcm9tICcuL3N0b3J5JztcbmltcG9ydCB7IGJ1aWxkTWFpbiB9IGZyb20gJy4vbWFpbic7XG5pbXBvcnQgYnVpbGRGb290ZXIgZnJvbSAnLi9mb290ZXInO1xuXG5cblxuLy8gQ3JlYXRlIHdlYnNpdGUgbGF5b3V0XG5cblxuLy8gQ3JlYXRlIGFuIGVsZW1lbnQgYW5kIGFzc2lnbiBhbnkgYXR0cmlidXRlc1xuXG5cbmNvbnN0IGJ1aWxkID0gKCgpID0+IHtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG4gICAgXG4gICAgZ2V0RGF0ZSgpO1xuXG4gICAgY29uc3QgYnVpbGRIZWFkZXIgPSAoKSA9PiB7XG4gICAgICAgIFxuICAgICAgICBjb25zdCB0aXRsZVRleHQgPSBcImJsdWViaXJkXCI7XG4gICAgICAgIGNvbnN0IG1lbnVUZXh0ID0gXCJtZW51XCI7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RUZXh0ID0gXCJyZXNlcnZhdGlvbnNcIjtcbiAgICAgICAgY29uc3Qgc3RvcnlUZXh0ID0gXCJvdXIgc3RvcnlcIlxuXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IFwiaGVhZGVyXCIgfSlcbiAgICAgICAgXG4gICAgICAgIC8vIHN1Yi10aXRsZXNcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGVsZW1lbnQoJ2J1dHRvbicsIHtcImNsYXNzXCI6IFwidGl0bGVcIiwgXCJpZFwiOiBcInRpdGxlLWhlYWRlclwifSk7XG4gICAgICAgIGNvbnN0IGxvZ28gPSBlbGVtZW50KCdkaXYnLCB7XCJjbGFzc1wiOiBcImxvZ29cIn0pO1xuICAgICAgICBjb25zdCBtZW51ID0gZWxlbWVudCgnYnV0dG9uJywge1wiaWRcIjogXCJtZW51LWJ1dHRvblwiLCBcImNsYXNzXCI6IFwiaGVhZGVyLWxpbmtcIn0pO1xuICAgICAgICBjb25zdCBjb250YWN0ID0gZWxlbWVudCgnYnV0dG9uJywge1wiaWRcIjogXCJjb250YWN0LWJ1dHRvblwiLCBcImNsYXNzXCI6IFwiaGVhZGVyLWxpbmtcIn0pO1xuICAgICAgICBjb25zdCBzdG9yeSA9IGVsZW1lbnQoJ2J1dHRvbicsIHtcImlkXCI6IFwic3RvcnktYnV0dG9uXCIsIFwiY2xhc3NcIjogXCJoZWFkZXItbGlua1wifSk7XG4gICAgICAgXG4gICAgICAgICAgIFxuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHRpdGxlVGV4dDtcbiAgICAgICAgbWVudS50ZXh0Q29udGVudCA9IG1lbnVUZXh0O1xuICAgICAgICBjb250YWN0LnRleHRDb250ZW50ID0gY29udGFjdFRleHQ7XG4gICAgICAgIHN0b3J5LnRleHRDb250ZW50ID0gc3RvcnlUZXh0O1xuXG4gICAgICBcbiAgICAgICAgLy8gTG9nb1xuICAgICAgICBcbiAgICAgICAgLy9zZXRBdHRyaWJ1dGVzKGxvZ28sIHtcImNsYXNzXCI6IFwibG9nb1wifSlcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IG1haW5JbWFnZSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBtYWluSW1hZ2Uuc3JjID0gYmlyZDtcbiAgICAgICAgbG9nby5hcHBlbmRDaGlsZChtYWluSW1hZ2UpXG5cblxuICAgICAgICBcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pO1xuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobWVudSk7XG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChjb250YWN0KTtcbiAgICAgICAgaGVhZGVyLmFwcGVuZENoaWxkKHN0b3J5KTtcbiAgICBcbiAgICAgIFxuXG4gICAgICAgIHJldHVybiBoZWFkZXI7XG5cbiAgICB9XG4gIFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGRIZWFkZXIoKSlcbiAgICBcbiAgXG5cbiAgICBjb25zdCBidWlsZFBhZ2UgPSAoc291cmNlKSA9PiB7XG4gICAgICAgIC8vIGNsZWFyIHBhZ2VcblxuICAgICAgIFxuICAgICAgICB3aGlsZSAoY29udGVudC5jaGlsZHJlbi5sZW5ndGggPiAxKSBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRlbnQubGFzdEVsZW1lbnRDaGlsZCk7IFxuICAgICAgICBsZXQgcGFnZTtcbiAgICAgICAgXG4gICAgICAgIGlmIChzb3VyY2UgPT09ICdtZW51Jyl7XG4gICAgICAgICAgICBwYWdlID0gYnVpbGRNZW51KCk7ICAgXG4gICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGlmIChzb3VyY2UgPT09ICdjb250YWN0Jyl7XG4gICAgICAgICAgICBwYWdlID0gYnVpbGRDb250YWN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNvdXJjZSA9PT0gJ3N0b3J5Jyl7XG4gICAgICAgICAgICBwYWdlID0gYnVpbGRNYWluKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc291cmNlID09PSAnbWFpbicpe1xuICAgICAgICAgICAgcGFnZSA9IGJ1aWxkTWFpbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocGFnZSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGRGb290ZXIoKSk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGJ1aWxkUGFnZSgnbWFpbicpO1xuICAgXG4gICBcblxuICAgIC8vIENvbnN0cnVjdCBmb290ZXIgZm9yIGhvdXJzLCBjb250YWN0IGluZm8sIGV0Y1xuXG5cbiAgICBcbiAgICByZXR1cm4ge2J1aWxkUGFnZX1cbi8vIENyZWF0ZXMgYSBuZXcgZWxlbWVudCBhbmQgZmxleGlibHkgYXNzaWduZXMgYXR0cmlidXRlcztcblxuXG59KSgpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgYnVpbGQ7XG4iLCJpbXBvcnQgeyBlbGVtZW50LCBmb3JtYXRQaG9uZSwgZ2V0RGF0ZSB9IGZyb20gJy4vdXRpbGl0aWVzLmpzJztcblxuY29uc3QgYnVpbGRDb250YWN0ID0gKCkgPT4ge1xuXG4gICAgY29uc3QgT1BFTlRJTUUgPSBcIjE2OjAwXCI7XG4gICAgY29uc3QgQ0xPU0VUSU1FID0gXCIyMTowMFwiO1xuXG5cbiAgICBjb25zdCBwYWdlID0gZWxlbWVudCgnZGl2Jywge1wiY2xhc3NcIjogXCJwYWdlXCJ9KVxuXG5cbiAgICAvLyBDcmVhdGUgZm9ybVxuICAgIGNvbnN0IGZvcm1Db250YWluZXIgPSBlbGVtZW50KCdkaXYnLCB7XCJpZFwiOiBcImZvcm0tY29udGFpbmVyXCJ9KTtcbiAgICBjb25zdCBmb3JtID0gZWxlbWVudCgnZm9ybScsIHtcImlkXCI6IFwicmVzZXJ2YXRpb24tZm9ybVwifSk7XG5cbiAgICBjb25zdCBuYW1lTGFiZWwgPSBlbGVtZW50KCdsYWJlbCcsIHtcImZvclwiOiBcIm5hbWVcIiwgXCJjbGFzc1wiOiBcImZvcm0tbGFiZWxcIn0pO1xuICAgIG5hbWVMYWJlbC50ZXh0Q29udGVudCA9IFwiRnVsbCBOYW1lXCJcbiAgICBjb25zdCBuYW1lID0gZWxlbWVudCgnaW5wdXQnLCB7XCJ0eXBlXCI6IFwidGV4dFwiLCBcImNsYXNzXCI6IFwiZm9ybS1pbnB1dFwiLCBcIm5hbWVcIjogXCJuYW1lXCIsIFwiaWRcIjogXCJmb3JtX25hbWVcIiwgXCJyZXF1aXJlZFwiOiBcIlwiLCBcInBsYWNlaG9sZGVyXCI6IFwiSm9obiBTbWl0aFwiIH0pXG4gICAgbmFtZUxhYmVsLmFwcGVuZENoaWxkKG5hbWUpO1xuXG4gICAgY29uc3QgZGF0ZUxhYmVsID0gZWxlbWVudCgnbGFiZWwnLCB7XCJmb3JcIjogXCJkYXRlXCIsIFwiY2xhc3NcIjogXCJmb3JtLWxhYmVsXCJ9KTtcbiAgICBkYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkRhdGVcIjtcbiAgICBjb25zdCB0b2RheSA9IGdldERhdGUoKTtcbiAgICBjb25zdCBkYXRlID0gZWxlbWVudChcImlucHV0XCIsIHtcInR5cGVcIjogXCJkYXRlXCIsIFwiY2xhc3NcIjogXCJmb3JtLWlucHV0XCIsIFwibmFtZVwiOiBcIm5hbWVcIiwgXCJpZFwiOiBcImZvcm1fZGF0ZVwiLCBcIm1pblwiOiB0b2RheSwgXCJyZXF1aXJlZFwiOiBcIlwifSk7XG4gICAgZGF0ZUxhYmVsLmFwcGVuZENoaWxkKGRhdGUpO1xuXG4gICAgY29uc3QgdGltZUxhYmVsID0gZWxlbWVudCgnbGFiZWwnLCB7XCJmb3JcIjogXCJ0aW1lXCIsIFwiY2xhc3NcIjogXCJmb3JtLWxhYmVsXCJ9KTtcbiAgICB0aW1lTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpbWVcIjtcbiAgICBjb25zdCB0aW1lID0gZWxlbWVudCgnaW5wdXQnLCB7XCJ0eXBlXCI6IFwidGltZVwiLCBcImNsYXNzXCI6IFwiZm9ybS1pbnB1dFwiLCBcIm5hbWVcIjogXCJ0aW1lXCIsIFwiaWRcIjogXCJmb3JtX3RpbWVcIiwgXCJ2YWx1ZVwiOiBcIjE2OjAwXCIsICBcIm1pblwiOiBPUEVOVElNRSwgXCJtYXhcIjogQ0xPU0VUSU1FLFwicmVxdWlyZWRcIjogXCJcIn0pO1xuICAgIHRpbWVMYWJlbC5hcHBlbmRDaGlsZCh0aW1lKTtcblxuICAgIGNvbnN0IHBob25lTGFiZWwgPSBlbGVtZW50KCdsYWJlbCcsIHtcImZvclwiOiBcInBob25lXCIsIFwiY2xhc3NcIjogXCJmb3JtLWxhYmVsXCJ9KTtcbiAgICBwaG9uZUxhYmVsLnRleHRDb250ZW50ID0gXCJQaG9uZSBOdW1iZXJcIjtcbiAgICBjb25zdCBwaG9uZSA9IGVsZW1lbnQoJ2lucHV0Jywge1widHlwZVwiOiBcInRlbFwiLCBcImNsYXNzXCI6IFwiZm9ybS1pbnB1dFwiLCBcIm5hbWVcIjogXCJwaG9uZVwiLCBcImlkXCI6IFwiZm9ybV9waG9uZVwiLCBcIm1heGxlbmd0aFwiOiAxMiwgXCJwbGFjZWhvbGRlclwiOiBcIjU1NS0yMTAtMzE1NFwiLCBcInJlcXVpcmVkXCI6IFwiXCJ9KVxuICAgIGZvcm1hdFBob25lKHBob25lKTtcbiAgICBwaG9uZUxhYmVsLmFwcGVuZENoaWxkKHBob25lKTtcblxuICAgIGNvbnN0IHN1Ym1pdCA9IGVsZW1lbnQoXCJpbnB1dFwiLCB7XCJ0eXBlXCI6IFwic3VibWl0XCIsIFwiY2xhc3NcIjogXCJidXR0b25cIiwgXCJpZFwiOiBcInN1Ym1pdC1idXR0b25cIn0pO1xuXG4gICAgY29uc3Qgc3VibWl0TW9kYWwgPSBlbGVtZW50KFwiZGl2XCIsIHtcImNsYXNzXCI6IFwibW9kYWwgaGlkZGVuXCIsIFwiaWRcIjogXCJzdWJtaXQtbW9kYWxcIn0pO1xuICAgIGNvbnN0IG1vZGFsQ29udGVudCA9IGVsZW1lbnQoXCJkaXZcIiwge1wiaWRcIjogXCJtb2RhbC1jb250ZW50XCJ9KTtcbiAgICBjb25zdCBtb2RhbEhlYWRlciA9IGVsZW1lbnQoXCJoMlwiLCB7XCJjbGFzc1wiOiBcIm1vZGFsLWl0ZW1cIiwgXCJpZFwiOiBcInN1Ym1pdC1oZWFkZXJcIn0pO1xuICAgIGNvbnN0IG1vZGFsVGV4dCA9IGVsZW1lbnQoXCJwXCIsIHtcImNsYXNzXCI6IFwibW9kYWwtaXRlbVwiLCBcImlkXCI6IFwic3VibWl0LXRleHRcIn0pO1xuXG4gICAgbW9kYWxIZWFkZXIudGV4dENvbnRlbnQgPSBcIlJlc2VydmF0aW9uIFVuYXZhaWxpYmxlXCI7XG4gICAgbW9kYWxUZXh0LnRleHRDb250ZW50ID0gXCJQbGVhc2UgY2hlY2sgYWdhaW4gc29vblwiXG4gICAgXG4gICAgbW9kYWxDb250ZW50LmFwcGVuZENoaWxkKG1vZGFsSGVhZGVyKTtcbiAgICBtb2RhbENvbnRlbnQuYXBwZW5kQ2hpbGQobW9kYWxUZXh0KTtcbiAgICBzdWJtaXRNb2RhbC5hcHBlbmRDaGlsZChtb2RhbENvbnRlbnQpXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBzdWJtaXRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuXG4gICAgfSlcbiAgXG4gICAgLy8gQXR0YWNoIGZvcm0gZWxlbWVudHMgXG4gICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lTGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGF0ZUxhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHRpbWVMYWJlbCk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChwaG9uZUxhYmVsKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG5cbiBcbiAgICBmb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoZm9ybUNvbnRhaW5lcik7XG4gICAgcGFnZS5hcHBlbmRDaGlsZChzdWJtaXRNb2RhbCk7XG5cbiAgICByZXR1cm4gcGFnZTtcbn1cblxuZXhwb3J0IHtidWlsZENvbnRhY3R9OyIsImltcG9ydCB7IGNyZWF0ZUltYWdlTGluaywgZWxlbWVudH0gZnJvbSAnLi91dGlsaXRpZXMuanMnXG5pbXBvcnQgaW5mbyBmcm9tICcuL2Zvb3Rlci5qc29uJztcbmltcG9ydCBnaXRsb2dvIGZyb20gJy4vZ2l0aHViLnBuZyc7XG5pbXBvcnQgcml2ZXIgZnJvbSAnLi9yaXYucG5nJztcblxuXG5jb25zdCBidWlsZEZvb3RlciA9ICgpID0+IHtcblxuICAgIC8vIGNvbnRhaW5lclxuICAgIGNvbnN0IGZvb3RlciA9IGVsZW1lbnQoJ2Zvb3RlcicsIHtcImlkXCI6IFwiZm9vdGVyXCJ9KTtcbiAgICBjb25zdCBmb290ZXJDb250ZW50ID0gZWxlbWVudCgnZGl2Jywge1wiaWRcIjogXCJmb290ZXItY29udGVudFwifSk7XG4gICAgY29uc3QgbGlua3MgPSBlbGVtZW50KCdkaXYnLCB7XCJpZFwiOiBcImZvb3Rlci1saW5rc1wifSk7XG4gICAgXG4gICAgLy8gaG91cnMgaW5mb3JtYXRpb25cbiAgICBjb25zdCBob3VycyA9IGVsZW1lbnQoJ3RhYmxlJywge1wiaWRcIjogXCJmb290ZXItaG91cnNcIn0pO1xuICAgIGZvciAobGV0IGRheXMgb2YgaW5mby5ob3Vycyl7XG4gIFxuICAgICAgICBjb25zdCBkYXkgPSBlbGVtZW50KCd0cicsIHtcImNsYXNzXCI6IFwiaG91cnMtaW5mb1wiLCBcImlkXCI6IGBob3Vycy0ke2RheXMuZGF5fWAsIFwiY29sc3BhblwiOiBcIjJcIn0pO1xuICAgICAgICBsZXQgdGltZSA9IGVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIFxuICAgICAgICBkYXkuaW5uZXJIVE1MPSBgPGI+JHtkYXlzLmRheX08L2I+YFxuXG4gICAgICAgIHRpbWUudGV4dENvbnRlbnQgPSBkYXlzLm9wZW47XG4gICAgICAgIGRheS5hcHBlbmRDaGlsZCh0aW1lKTtcblxuICAgICAgICB0aW1lID0gZWxlbWVudChcInRkXCIpO1xuXG4gICAgICAgIHRpbWUudGV4dENvbnRlbnQgPSBkYXlzLmNsb3NlO1xuICAgICAgICBkYXkuYXBwZW5kQ2hpbGQodGltZSk7XG4gICAgICAgIGhvdXJzLmFwcGVuZENoaWxkKGRheSk7XG4gICAgfVxuICAgIGZvb3RlckNvbnRlbnQuYXBwZW5kQ2hpbGQoaG91cnMpO1xuXG4gICAgLy9jb250YWN0IGluZm9ybWF0aW9uXG4gICAgY29uc3QgcGhvbmUgPSBlbGVtZW50KFwiZGl2XCIsIHtcImlkXCI6IFwicGhvbmUtbnVtYmVyXCJ9KTtcbiAgICBwaG9uZS5pbm5lckhUTUwgPSBgQ2FsbCB1cyBhdCA8Yj41NTUtMjAxLTUzMTI8L2I+YDtcbiAgICBcbiAgICBmb290ZXJDb250ZW50LmFwcGVuZENoaWxkKHBob25lKTtcblxuICAgIC8vIENyZWF0ZSBsaW5rc1xuICAgIGNvbnN0IHJpdkxpbmsgPSBjcmVhdGVJbWFnZUxpbmsoXCJodHRwczovL3JpdmVyamQuZ2l0aHViLmlvL2FkbWluLXBhZ2UvXCIsIHJpdmVyLCBcInJpdmVyJ3MgYWRtaW4gcGFnZVwiLCBcIlJpdmVyIGljb25zIGNyZWF0ZWQgYnkgRnJlZXBpayAtIEZsYXRpY29uXCIpO1xuICAgIGNvbnN0IGZvb3Rlck5vdGUgPSBlbGVtZW50KFwiZGl2XCIsIHtcImlkXCI6IFwiZm9vdGVyLW5vdGVcIn0pXG4gICAgZm9vdGVyTm90ZS50ZXh0Q29udGVudCA9IFwicml2ZXIgwqkyMDIyXCJcbiAgICBjb25zdCBnaXRMaW5rID0gY3JlYXRlSW1hZ2VMaW5rKFwiaHR0cHM6Ly9naXRodWIuY29tL3JpdmVySkQvXCIsIGdpdGxvZ28sIFwicml2ZXIncyBnaXRodWJcIik7XG4gICAgbGlua3MuYXBwZW5kQ2hpbGQocml2TGluayk7XG4gICAgbGlua3MuYXBwZW5kQ2hpbGQoZm9vdGVyTm90ZSlcbiAgICBsaW5rcy5hcHBlbmRDaGlsZChnaXRMaW5rKTtcbiAgICBmb290ZXJDb250ZW50LmFwcGVuZENoaWxkKGxpbmtzKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQ29udGVudCk7XG5cbiAgICByZXR1cm4gZm9vdGVyO1xuICAgIFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGJ1aWxkRm9vdGVyOyIsImltcG9ydCB7IGVsZW1lbnQgfSBmcm9tICcuL3V0aWxpdGllcy5qcyc7XG5pbXBvcnQgdGFibGVERGF0YSBmcm9tICcuL3RhYmxlLmpwZyc7XG5pbXBvcnQgYmlyZERhdGEgZnJvbSAnLi9mYXJtYmlyZC5qcGcnO1xuaW1wb3J0IGZhcm1UZXh0RGF0YSBmcm9tICcuL2Zhcm10ZXh0LnR4dCc7XG5pbXBvcnQgd2VsY29tZVRleHREYXRhIGZyb20gJy4vd2VsY29tZS50eHQnO1xuXG5cbmNvbnN0IGJ1aWxkTWFpbiA9ICgpID0+IHtcblxuXG4gICAgY29uc3QgcGFnZSA9IGVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IFwicGFnZVwiLCBcImlkXCI6IFwibWFpbi1wYWdlXCJ9KVxuICAgIFxuICAgIGNvbnN0IHBhZ2VIZWFkZXIgPSBlbGVtZW50KCdoMScsIHtcImNsYXNzXCI6IFwibWVudS1oZWFkZXJcIiwgXCJpZFwiOiBcInBhZ2UtaGVhZGVyXCJ9KTtcbiAgICBwYWdlSGVhZGVyLnRleHRDb250ZW50ID0gXCJ3ZWxjb21lIHRvIGJsdWViaXJkXCJcblxuICAgIC8vIENyZWF0ZSBhIHNlY3Rpb24gb2YgY29udGVudCwgd2l0aCB0ZXh0IGFuZCBpbWFnZSAob3B0aW9uYWwpOyAgICBcbiAgICAvLyBFbGVtZW50cyB3aWxsIGJlIGR5bmFtaWNhbGx5IGNsYXNzZWQgYW5kIGlkIGJhc2VkIG9uIG5hbWUuICBcbiAgICAvLyBjb250ZW50IGlzIGEgc291cmNlIG9mIHRleHQgY29udGVudCBmb3IgdGhlIHNlY3Rpb25cbiAgICAvLyBmaXJzdEVsZW1lbnQgaXMgc3RyaW5nIG5hbWUgb2YgZWxlbWVudCB3aGljaCB3aWxsIGJlIHBsYWNlZCB0byB0aGUgbGVmdFxuICAgIGNvbnN0IGNyZWF0ZUNvbnRlbnQgPSAobmFtZSwgY29udGVudCwgcGhvdG8sIGZpcnN0RWxlbWVudCkgPT4ge1xuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IFwicGFnZS1jb250ZW50XCIsICdpZCc6IGAke25hbWV9LWNvbnRlbnRgfSk7XG4gICAgICAgIGNvbnN0IHRleHQgPSBlbGVtZW50KCdkaXYnLCB7XCJjbGFzc1wiOiBcInRleHQtY29udGVudCBjb250ZW50XCIsIFwiaWRcIjogYCR7bmFtZX0tdGV4dGB9KTtcbiAgICAgICAgdGV4dC5pbm5lckhUTUwgPSBjb250ZW50O1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KTtcblxuICAgICAgICBpZiAocGhvdG8gIT0gbnVsbCl7XG4gICAgICAgICAgICBjb25zdCBwaWN0dXJlID0gZWxlbWVudCgnaW1nJywge1wiY2xhc3NcIjogXCJwaG90b1wiLCBcImlkXCI6IGAke25hbWV9LXBob3RvYCwgXCJzcmNcIjogcGhvdG99KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoZmlyc3RFbGVtZW50ID09PSAncGhvdG8nKXtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKHBpY3R1cmUsIHRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGljdHVyZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJuby1waG90b1wiKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgXG5cbiAgICBcbiAgICAgICAgLy9jb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG4gICAgY29uc3Qgd2VsY29tZSA9IGNyZWF0ZUNvbnRlbnQoXCJ3ZWxjb21lXCIsIHdlbGNvbWVUZXh0RGF0YSk7XG4gICAgY29uc3QgdGFibGUgPSBjcmVhdGVDb250ZW50KFwidGFibGVcIiwgXCJPdXIgc3BhY2UgaXMgPGI+dmVyeSBsaW1pdGVkPC9iPiwgYW5kIDxlbT5yZXNlcnZhdGlvbnMgYXJlIHJlcXVpcmVkPC9lbT4uIFBsZWFzZSA8Yj5jYWxsIGFoZWFkPC9iPiBpZiB5b3UgaGF2ZSBhbnkgc3BlY2lmaWMgZGlldGFyeSByZXN0cmljdGlvbnMuXCIsIHRhYmxlRERhdGEpXG4gICAgY29uc3QgZmFybSA9IGNyZWF0ZUNvbnRlbnQoXCJmYXJtXCIsZmFybVRleHREYXRhLCBiaXJkRGF0YSwgXCJwaG90b1wiKTtcbiAgICAvLyBmYXJtIGNvbnRlbnRzXG4gICAgLyogY29uc3QgZmFybUNvbnRlbnQgPSBlbGVtZW50KCdkaXYnLCB7XCJjbGFzc1wiOiAncGFnZS1jb250ZW50JywgXCJpZFwiOiBcImZhcm0tY29udGVudFwifSk7XG4gICAgY29uc3QgZmFybSA9IGVsZW1lbnQoJ2ltZycsIHtcImNsYXNzXCI6IFwicGhvdG9cIiwgXCJpZFwiOiBcImZhcm0tcGhvdG9cIiwgXCJzcmNcIjogYmlyZERhdGF9KTtcbiAgICBjb25zdCBmYXJtVGV4dCA9IGVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IFwidGV4dC1jb250ZW50IGNvbnRlbnRcIiwgXCJpZFwiOiBcImZhcm0tdGV4dFwifSk7XG4gICAgZmFybVRleHQudGV4dENvbnRlbnQgPSBcIkEgbnVtYmVyIG9mIHdpbGQgYmx1ZWJpcmRzIGNhbGwgb3VyIGZhcm0gaG9tZSwgYW5kIHdlJ3ZlIHRha2VuIGluc3BpcmF0aW9uIGZyb20gdGhlbSBpbiBvdXIgZGlzaGVzIGRldmVsb3BlZCByaWdodCBmcm9tIG91ciBnYXJkZW4uXCIgICAgICAgICAgICAgICAgXG4gICAgZmFybUNvbnRlbnQuYXBwZW5kQ2hpbGQoZmFybSk7XG4gICAgZmFybUNvbnRlbnQuYXBwZW5kQ2hpbGQoZmFybVRleHQpOyAqL1xuICAgIFxuICAgXG4gICAgcGFnZS5hcHBlbmRDaGlsZChwYWdlSGVhZGVyKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKHdlbGNvbWUpO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoZmFybSk7XG4gICAgcGFnZS5hcHBlbmRDaGlsZCh0YWJsZSk7XG4gICAgcGFnZS5pZCA9IFwibWFpbi1wYWdlXCI7XG5cblxuICAgIHJldHVybiBwYWdlO1xuXG59XG5cbmV4cG9ydCB7YnVpbGRNYWlufTsiLCJpbXBvcnQgbWVudURhdGEgZnJvbSAnLi9tZW51Lmpzb24nO1xuaW1wb3J0IHsgZWxlbWVudCB9IGZyb20gJy4vdXRpbGl0aWVzLmpzJztcblxuXG5cbi8vY29uc29sZS5sb2cobWVudURhdGEuZGlzaGVzKTtcbmNvbnN0IGJ1aWxkTWVudSA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBtZW51ID0gZWxlbWVudCgnZGl2Jywge1wiaWRcIjogXCJtZW51XCIsIFwiY2xhc3NcIjogXCJwYWdlXCJ9KTtcbiAgICBjb25zdCBtZW51SGVhZGVyID0gZWxlbWVudCgnaDEnLCB7XCJjbGFzc1wiOiBcIm1lbnUtaGVhZGVyXCJ9KTtcbiAgICBtZW51SGVhZGVyLnRleHRDb250ZW50ID0gXCJtZW51XCJcblxuICAgIC8vIG1lbnUgY2F0ZWdvcmllc1xuICAgIGNvbnN0IHN0YXJ0ZXIgPSBlbGVtZW50KCdkaXYnLCB7XCJpZFwiOiBcInN0YXJ0ZXJzXCJ9KTtcbiAgICBjb25zdCBzdGFydGVySGVhZGVyID0gZWxlbWVudCgnaDInLCB7XCJpZFwiOiBcInN0YXJ0ZXItaGVhZGVyXCIsIFwiY2xhc3NcIjogXCJtZW51LXN1YmhlYWRlclwifSlcbiAgICBzdGFydGVySGVhZGVyLnRleHRDb250ZW50ID0gXCJzdGFydGVyXCJcblxuICAgIGNvbnN0IG1haW4gPSBlbGVtZW50KCdkaXYnLCB7XCJpZFwiOiBcIm1haW5zXCJ9KVxuICAgIGNvbnN0IG1haW5IZWFkZXIgPSBlbGVtZW50KCdoMicsIHtcImlkXCI6IFwibWVudS1oZWFkZXJcIiwgXCJjbGFzc1wiOiBcIm1lbnUtc3ViaGVhZGVyXCJ9KVxuICAgIG1haW5IZWFkZXIudGV4dENvbnRlbnQgPSBcIm1haW5cIlxuXG4gICAgY29uc3QgZGVzc2VydCA9IGVsZW1lbnQoJ2RpdicsIHtcImlkXCI6IFwiZGVzc2VydHNcIn0pO1xuICAgIGNvbnN0IGRlc3NlcnRIZWFkZXIgPSBlbGVtZW50KCdoMicsIHtcImlkXCI6IFwibWVudS1oZWFkZXJcIiwgXCJjbGFzc1wiOiBcIm1lbnUtc3ViaGVhZGVyXCJ9KVxuICAgIGRlc3NlcnRIZWFkZXIudGV4dENvbnRlbnQgPSBcImRlc3NlcnRcIjtcbiAgXG4gICAgc3RhcnRlci5hcHBlbmRDaGlsZChzdGFydGVySGVhZGVyKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKG1haW5IZWFkZXIpO1xuICAgIGRlc3NlcnQuYXBwZW5kQ2hpbGQoZGVzc2VydEhlYWRlcik7XG5cbiAgICBtZW51LmFwcGVuZENoaWxkKG1lbnVIZWFkZXIpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoc3RhcnRlcik7XG4gICAgbWVudS5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGRlc3NlcnQpO1xuXG4gICAgLy8gcmVhZCBkaXNoIGZyb20gSlNPTlxuICAgIGNvbnN0IGJ1aWxkRGlzaCA9IChpdGVtKSA9PiB7XG5cbiAgICAgICAgY29uc3QgZGlzaCA9IGVsZW1lbnQoJ2RpdicsIHtcImNsYXNzXCI6IFwibWVudS1kaXNoIFwifSk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBlbGVtZW50KCdoMycsIHtcImNsYXNzXCI6IFwibWVudS1uYW1lIG1lbnUtaXRlbVwiLCBcImlkXCI6IGBtZW51LSR7aXRlbS5uYW1lfWB9KTtcbiAgICAgICAgY29uc3QgcHJpY2UgPSBlbGVtZW50KCdwJywge1wiY2xhc3NcIjogXCJtZW51LXByaWNlIG1lbnUtaXRlbVwifSk7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBlbGVtZW50KCdwJywge1wiY2xhc3NcIjogXCJtZW51LWRlc2NyaXB0aW9uIG1lbnUtaXRlbVwifSk7XG4gICAgICAgIGNvbnN0IG5vdGUgPSBlbGVtZW50KCdwJywge1wiY2xhc3NcIjogXCJtZW51LW5vdGUgbWVudS1pdGVtXCJ9KTtcbiAgICAgICAgY29uc3Qgc3ltYm9sID0gZWxlbWVudCgnZGl2Jywge1wiY2xhc3NcIjogXCJtZW51LXN5bWJvbCBtZW51LWl0ZW1cIn0pO1xuICAgICAgICBcbiAgICAgICAgbmFtZS50ZXh0Q29udGVudCA9IGl0ZW0ubmFtZTtcbiAgICAgICAgcHJpY2UudGV4dENvbnRlbnQgPSBpdGVtLnByaWNlO1xuICAgICAgICBkZXNjLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgICAgICAgbm90ZS50ZXh0Q29udGVudCA9IGl0ZW0ubm90ZTtcbiAgICAgICAgc3ltYm9sLmNsYXNzTGlzdC5hZGQoYCR7aXRlbS5zeW1ib2x9YClcblxuICAgICAgICBkaXNoLmFwcGVuZENoaWxkKG5hbWUpO1xuICAgICAgICBkaXNoLmFwcGVuZENoaWxkKHByaWNlKTtcbiAgICAgICAgZGlzaC5hcHBlbmRDaGlsZChkZXNjKTtcbiAgICAgICAgZGlzaC5hcHBlbmRDaGlsZChub3RlKTtcbiAgICAgICAgZGlzaC5hcHBlbmRDaGlsZChzeW1ib2wpO1xuXG4gICAgICAgICAgICAgICAgXG4gICAgICBcblxuICAgICAgICByZXR1cm4gZGlzaDtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgZm9yIChsZXQgaXRlbSBvZiBtZW51RGF0YS5kaXNoZXMpe1xuXG4gICAgICAgIC8vIEF0dGFjaCBtZW51IGl0ZW1zIHRvIGFwcHJvcHJpYXRlIGNhdGVnb3J5XG4gICAgICAgIHN3aXRjaChpdGVtLnR5cGUpIHtcbiAgICAgICAgICAgXG4gIFxuICAgICAgICAgICAgY2FzZSAnc3RhcnRlcic6XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc3RhcnRlci5hcHBlbmRDaGlsZChidWlsZERpc2goaXRlbSkpO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjYXNlICdtYWluJzpcbiAgICAgICAgICAgICAgICBtYWluLmFwcGVuZENoaWxkKGJ1aWxkRGlzaChpdGVtKSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBjYXNlICdkZXNzZXJ0JzpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLmRlc2NyaXB0aW9uKVxuICAgICAgICAgICAgICAgIGRlc3NlcnQuYXBwZW5kQ2hpbGQoYnVpbGREaXNoKGl0ZW0pKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTsgICAgXG4gICAgIFxuICAgICAgICAgICAgZGVmYXVsdDogXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm1lbnUgaXRlbSBkaWQgbm90IG1hdGNoIGtub3cgY2F0ZWdvcnksIHZlcmlmeSBkaXNoIHR5cGVcIilcbiAgICAgICAgXG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxufVxuXG5yZXR1cm4gbWVudTtcblxufVxuXG5leHBvcnQge2J1aWxkTWVudX1cblxuXG4iLCJpbXBvcnQgeyBlbGVtZW50IH0gZnJvbSAnLi91dGlsaXRpZXMuanMnO1xuaW1wb3J0IHN0b3J5RGF0YSBmcm9tICcuL3N0b3J5LnR4dCc7XG5pbXBvcnQgdGFibGVJbWcgZnJvbSAnLi90YWJsZS5qcGcnO1xuXG5cbmNvbnN0IGJ1aWxkU3RvcnkgPSAoKSA9PiB7XG5cbiAgICBjb25zdCBwYWdlID0gZWxlbWVudCgnZGl2Jywge1wiaWRcIjogXCJzdG9yeS1wYWdlXCJ9KTtcblxuICAgIGNvbnN0IHRhYmxlID0gbmV3IEltYWdlKCk7XG4gICAgdGFibGUuc3JjID0gdGFibGVJbWc7XG4gICAgdGFibGUuaWQgPSBcInRhYmxlLWltYWdlXCI7XG4gICAgdGFibGUuY2xhc3NMaXN0LmFkZChcInBpY3R1cmVzXCIpO1xuXG4gICAgcGFnZS5hcHBlbmRDaGlsZCh0YWJsZSk7XG5cbiAgICBjb25zdCBzdG9yeSA9IGVsZW1lbnQoJ2RpdicpO1xuICAgXG4gICAgc3RvcnkudGV4dENvbnRlbnQgPSBzdG9yeURhdGE7XG5cbiAgICBwYWdlLmFwcGVuZENoaWxkKHN0b3J5KTtcblxuICAgIHJldHVybiBwYWdlO1xufVxuXG5cbmV4cG9ydCB7YnVpbGRTdG9yeX07XG5cblxuIiwiLy8gSGVscGVyIGZ1bmN0aW9uc1xuLy8gUmVzdGF1cmFudCBwYWdlXG5cblxuY29uc3QgY3JlYXRlRWxlbWVudCA9ICh0eXBlLCBhdHRyaWJ1dGVzKSA9PiB7XG4gICAgXG4gICAgY29uc3QgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYCR7dHlwZX1gKTtcbiAgICBpZiAoYXR0cmlidXRlcyA9PSBudWxsKSByZXR1cm4gbmV3RWxlbWVudDtcbiAgICBzZXRBdHRyaWJ1dGVzKG5ld0VsZW1lbnQsIGF0dHJpYnV0ZXMpO1xuICAgIHJldHVybiBuZXdFbGVtZW50O1xufVxuXG5jb25zdCBnZXREYXRlID0gKCkgPT4ge1xuXG4gICAgbGV0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICBsZXQgZGQgPSB0b2RheS5nZXREYXRlKCk7XG4gICAgbGV0IG1tID0gdG9kYXkuZ2V0TW9udGgoKSArIDE7IC8vIEluZGV4IGF0IHplcm9cbiAgICBjb25zdCB5eXl5ID0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcblxuICAgIGlmIChkZCA8IDEwKXtcbiAgICAgICAgZGQgPSAnMCcgKyBkZDtcbiAgICB9XG4gICAgaWYgKG1tIDwgMTApe1xuICAgICAgICBtbSA9ICcwJyArIG1tO1xuICAgIH1cblxuICAgIHRvZGF5ID0gYCR7eXl5eX0tJHttbX0tJHtkZH1gO1xuXG4gICAgcmV0dXJuIHRvZGF5O1xufVxuXG5jb25zdCBmb3JtYXRQaG9uZSA9IChpbnB1dCkgPT4ge1xuICAgIGNvbnN0IHBob25lRm9ybWF0ZXIgPSBpbnB1dDtcbiAgICBcbiAgICBwaG9uZUZvcm1hdGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcblxuICAgICAgICAvLyBSZW1vdmUgYW55dGhpbmcgdGhhdCBpc24ndCBhIG51bWJlclxuICAgICAgICBsZXQgcGhvbmVOdW1iZXIgPSBwaG9uZUZvcm1hdGVyLnZhbHVlLnJlcGxhY2UoL1xcRC9nLCcnKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBpbnB1dFNpemUgPSBwaG9uZU51bWJlci5sZW5ndGg7XG4gICAgICAgIC8vIElnbm9yZSBkZWxldGUvYmFja3NwYWNlIHNvIHVzZXIgY2FuIGRlbGV0ZSBudW1iZXIgXG4gICAgICAgIGlmIChlLmtleSA9PSAnQmFja3NwYWNlJyB8fCBlLmtleSA9PSAnRGVsZXRlJykgcmV0dXJuO1xuICAgICAgICBcblxuICAgICAgICBpZiAoaW5wdXRTaXplID49IDMgJiYgaW5wdXRTaXplIDwgNyAmJiBlLmtleSAhPSAnQmFja3NwYWNlJyl7XG4gICAgICAgICAgICBwaG9uZU51bWJlciA9IHBob25lTnVtYmVyLnN1YnN0cmluZygwLDMpICsgJy0nICsgcGhvbmVOdW1iZXIuc3Vic3RyaW5nKDMpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaW5wdXRTaXplID49IDcpe1xuICAgICAgICAgICAgcGhvbmVOdW1iZXIgPSBwaG9uZU51bWJlci5zdWJzdHJpbmcoMCwzKSArICctJyArIHBob25lTnVtYmVyLnN1YnN0cmluZygzLDYpICsgJy0nICsgcGhvbmVOdW1iZXIuc3Vic3RyaW5nKDYpXG4gICAgICAgIH1cblxuXG4gICAgICAgIHBob25lRm9ybWF0ZXIudmFsdWUgPSBwaG9uZU51bWJlcjtcbiAgICAgICAgcGhvbmVGb3JtYXRlci5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gICAgfSlcbiAgICBcbn1cblxuXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpXG57XG4gICAgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUltYWdlTGluayh1cmwsIGltYWdlLCBhbHQpe1xuXG4gICAgXG4gICAgY29uc3QgYWhyZWYgPSBjcmVhdGVFbGVtZW50KFwiYVwiLCB7XCJjbGFzc1wiOiBcImxpbmtcIiwgXCJocmVmXCI6IHVybH0pO1xuICAgIGNvbnN0IGxpbmtJbWFnZSA9IGNyZWF0ZUVsZW1lbnQoXCJpbWdcIiwge1wiY2xhc3NcIjogXCJpbWFnZS1saW5rXCIsIFwic3JjXCI6IGltYWdlLCBcImFsdFwiOiBhbHR9KTtcblxuICAgIGFocmVmLmFwcGVuZENoaWxkKGxpbmtJbWFnZSk7XG5cbiAgICByZXR1cm4gYWhyZWY7XG4gICAgXG5cbn1cblxuXG5leHBvcnQge2Zvcm1hdFBob25lLCBnZXREYXRlLCBzZXRBdHRyaWJ1dGVzLCBjcmVhdGVFbGVtZW50IGFzIGVsZW1lbnQsIGNyZWF0ZUltYWdlTGlua307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IGJ1aWxkIGZyb20gJy4vYnVpbGRwYWdlLmpzJztcblxuXG5jb25zdCBpbml0aWFsaXplID0gKCkgPT4ge1xuXG5cbiAgICBjb25zdCBtZW51QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNtZW51LWJ1dHRvblwiKTtcbiAgICBtZW51QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBidWlsZC5idWlsZFBhZ2UoJ21lbnUnKTtcbiAgICB9KVxuXG4gICAgY29uc3QgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGFjdC1idXR0b25cIik7XG4gICAgY29udGFjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYnVpbGQuYnVpbGRQYWdlKCdjb250YWN0Jyk7XG4gICAgfSlcblxuICAgIGNvbnN0IHN0b3J5QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0b3J5LWJ1dHRvbicpO1xuICAgIHN0b3J5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBidWlsZC5idWlsZFBhZ2UoJ3N0b3J5JylcbiAgICB9KVxuXG4gICAgY29uc3QgbWFpbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0aXRsZS1oZWFkZXInKTtcbiAgICBtYWluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBidWlsZC5idWlsZFBhZ2UoJ21haW4nKTtcbiAgICB9KVxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgXG5cblxufVxuXG5pbml0aWFsaXplKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9