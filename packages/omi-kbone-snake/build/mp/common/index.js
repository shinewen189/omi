module.exports = function(window, document) {var navigator = window.navigator;var HTMLElement = window.HTMLElement;var localStorage = window.localStorage;var sessionStorage = window.sessionStorage;var location = window.location;window["createApp"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonpcreateApp"] = window["webpackJsonpcreateApp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([4,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/omis/dist/omis.esm.js
var omis_esm = __webpack_require__(0);

// EXTERNAL MODULE: ./src/components/snake/_index.css
var _index = __webpack_require__(1);
var _index_default = /*#__PURE__*/__webpack_require__.n(_index);

// EXTERNAL MODULE: ./src/components/game/index.css
var game = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/game/index.js


var arr = [];

for (var i = 0; i < 16; i++) {
  var game_row = [];

  for (var j = 0; j < 16; j++) {
    game_row.push(0);
  }

  arr.push(game_row);
}

var game_Game = function Game(_ref, _ref2) {
  var left = _ref.left,
      type = _ref.type,
      done = _ref.done;
  var showAll = _ref2.showAll,
      showActive = _ref2.showActive,
      showDone = _ref2.showDone,
      clearDone = _ref2.clearDone;
  return Object(omis_esm["a" /* h */])("div", {
    "class": "game"
  }, arr.map(function (row) {
    return Object(omis_esm["a" /* h */])("p", null, row.map(function (col) {
      if (col) {
        return Object(omis_esm["a" /* h */])("b", {
          "class": 's'
        });
      }

      return Object(omis_esm["a" /* h */])("b", null);
    }));
  }));
};

game_Game.store = function (_ref3) {
  var props = _ref3.props;
  return {
    showAll: function showAll() {
      props.onFilter('all');
    },
    showActive: function showActive() {
      props.onFilter('active');
    },
    showDone: function showDone() {
      props.onFilter('done');
    },
    clearDone: function clearDone() {
      props.onClear();
    }
  };
};

/* harmony default export */ var components_game = (game_Game);
// CONCATENATED MODULE: ./src/components/snake/index.js




var snake_Snake = function Snake(props, store) {
  return Object(omis_esm["a" /* h */])("div", {
    "class": "container"
  }, Object(omis_esm["a" /* h */])(components_game, null), Object(omis_esm["a" /* h */])("div", {
    "class": "ctrl",
    style: "margin-top: 20rpx;"
  }, Object(omis_esm["a" /* h */])("div", {
    "class": "btn cm-btn cm-btn-dir",
    style: "top: 0rpx; left: 374rpx;"
  }, Object(omis_esm["a" /* h */])("i", {
    "class": ""
  }), Object(omis_esm["a" /* h */])("em", {
    style: "transform: translate(0rpx, 63rpx) scale(1, 2);"
  }), Object(omis_esm["a" /* h */])("span", {
    "class": "_1zCL"
  }, "Rotation")), Object(omis_esm["a" /* h */])("div", {
    "class": "btn cm-btn cm-btn-dir",
    style: "top: 180rpx; left: 374rpx;"
  }, Object(omis_esm["a" /* h */])("i", {
    "class": ""
  }), Object(omis_esm["a" /* h */])("em", {
    style: "transform: translate(0rpx, -71rpx) rotate(180deg) scale(1, 2);"
  }), Object(omis_esm["a" /* h */])("span", {
    "class": ""
  }, "Down")), Object(omis_esm["a" /* h */])("div", {
    "class": "btn cm-btn cm-btn-dir",
    style: "top: 90rpx; left: 284rpx;"
  }, Object(omis_esm["a" /* h */])("i", {
    "class": ""
  }), Object(omis_esm["a" /* h */])("em", {
    style: "transform: translate(60rpx, -12rpx) rotate(270deg) scale(1, 2);"
  }), Object(omis_esm["a" /* h */])("span", {
    "class": ""
  }, "Left")), Object(omis_esm["a" /* h */])("div", {
    "class": "btn cm-btn cm-btn-dir",
    style: "top: 90rpx; left: 464rpx;"
  }, Object(omis_esm["a" /* h */])("i", {
    "class": ""
  }), Object(omis_esm["a" /* h */])("em", {
    style: "transform: translate(-60rpx, -12rpx) rotate(90deg) scale(1, 2);"
  }), Object(omis_esm["a" /* h */])("span", {
    "class": ""
  }, "Right")), Object(omis_esm["a" /* h */])("div", {
    "class": "btn cm-btn space",
    style: "top: 100rpx; left: 52rpx;"
  }, Object(omis_esm["a" /* h */])("i", {
    "class": ""
  }), Object(omis_esm["a" /* h */])("span", {
    "class": ""
  }, "Drop (SPACE)")), Object(omis_esm["a" /* h */])("div", {
    "class": "btn dg small",
    style: "top: 0rpx; left: 196rpx;"
  }, Object(omis_esm["a" /* h */])("i", {
    "class": ""
  }), Object(omis_esm["a" /* h */])("span", {
    "class": ""
  }, "Reset(R)")), Object(omis_esm["a" /* h */])("div", {
    "class": "btn RBZg small",
    style: "top: 0rpx; left: 106rpx;"
  }, Object(omis_esm["a" /* h */])("i", {
    "class": ""
  }), Object(omis_esm["a" /* h */])("span", {
    "class": ""
  }, "Sound(S)")), Object(omis_esm["a" /* h */])("div", {
    "class": "btn RBZg small",
    style: "top: 0rpx; left: 16rpx;"
  }, Object(omis_esm["a" /* h */])("i", {
    "class": ""
  }), Object(omis_esm["a" /* h */])("span", {
    "class": ""
  }, "Pause(P)"))));
};

snake_Snake.store = function (_) {
  return {};
};

snake_Snake.css = _index_default.a;
/* harmony default export */ var snake = (snake_Snake);
// CONCATENATED MODULE: ./src/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createApp; });


function createApp() {
  var container = document.createElement('div');
  container.id = 'app';
  document.body.appendChild(container);
  Object(omis_esm["b" /* render */])(Object(omis_esm["a" /* h */])(snake, null), '#app');
}
"undefined" != typeof wx && wx.getSystemInfoSync || createApp();

/***/ })
/******/ ])["default"];}