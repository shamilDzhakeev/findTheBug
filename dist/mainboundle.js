var mainscript =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./mainscript.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./mainscript.js":
/*!***********************!*\
  !*** ./mainscript.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("(function () {\n    'use strict';\n\n    var buttonClickCounter = 0;\n    var resultLabel = document.querySelector(\".resultLabel\");\n    \n    function startCounterReseter() {\n        setInterval(\"buttonClickCounter = 0;\", 2000);\n    }\n    \n    function showResult() {\n\n        buttonClickCounter ++;\n\n        if (buttonClickCounter < 10) {\n    \n            var sqrtDegree = document.querySelector(\".numberBox\").value;\n            var value = document.querySelector(\".valueBox\").value;\n            sqrtDegree = sqrtDegree.replace(/,/, '.');\n            value = value.replace(/,/, '.');\n            \n            if (sqrtDegree === '0') {\n\n                resultLabel.innerText = \"0\"\n\n            } else {\n\n                if (sqrtDegree === \"\") {\n                    sqrtDegree = 2;\n                    var res = +(Math.pow(value, 1 / sqrtDegree));\n                    resultLabel.innerText = res.toFixed(10);\n\n                } else {\n\n                    var isFirstDigit = isNaN(sqrtDegree);\n                    var isSecondDigit = isNaN(value);\n\n                    if (isFirstDigit && isSecondDigit) {\n\n                        while (\"1 is 1\") {}\n\n                    } else if (isFirstDigit || isSecondDigit) {\n\n                        document.location.href = \"//findthebug.000webhostapp.com\";\n\n                    } else {\n                        var res = +(Math.pow(value, 1 / sqrtDegree));\n                        resultLabel.innerText = res;\n                    }\n                }\n            }         \n        } else {\n\n            var removeElem = document.querySelector('.button');\n            removeElem.remove();\n            resultLabel.innerText = \"4 8 15 16 23 42\";  \n            resultLabel.classList.add('alert');\n\n        }\n    }\n\n    exports.showResult = showResult;\n    exports.startCounterReseter = startCounterReseter;\n})();\n\n//# sourceURL=webpack://mainscript/./mainscript.js?");

/***/ })

/******/ });