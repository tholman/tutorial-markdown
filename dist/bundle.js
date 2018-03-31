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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./codeManager.js":
/*!************************!*\
  !*** ./codeManager.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n * Code Manager, pieces together the code samples from the tutorial element\n */\n\nvar CodeManager = function CodeManager(options) {\n  _classCallCheck(this, CodeManager);\n\n  console.log(\"hi\");\n};\n\nexports.default = CodeManager;\n\n// // (function() {\n\n//   // Editor variables\n//   var frame = document.querySelector('iframe');\n//   var editor;\n\n//   // Code variables\n//   var contentElement = document.querySelector('.content');\n//   var triggers, blocks, structure, sendItButton, fullCodeSets;\n//   var currentStep = -1;\n//   var hasTyped = false;\n\n//   function setup() {\n//     setupCode();\n//   }\n\n//   function setupCode() {\n//     require.config({ paths: { 'vs': '/js/libs/monaco-editor/vs' }});\n//     require(['vs/editor/editor.main'], function() {\n//       editor = monaco.editor.create(document.getElementById('code-area'), {\n//         value: [\n//           '// Welcome to Tutorial Markdown.',\n//           '// start scrolling, and we\\'ll',\n//           '// write the code.'\n//         ].join('\\n'),\n//         lineNumbersMinChars: 3,\n//         scrollBeyondLastLine: false,\n//         language: 'javascript',\n//         fontSize: 10,\n//         minimap: {\n//           enabled: false\n//         },\n//         hover: false,\n//         occurrencesHighlight: false\n//       });\n\n//       editor.onKeyDown(function(e) {\n//         hasTyped = true;\n//       })\n\n//       editor.getModel().updateOptions({ tabSize: 2 })\n\n//       setupTutorial();\n//     });\n\n//     bind();\n//   }\n\n//   function setupTutorial() {\n\n//     sendItButton = document.querySelector('.send-it');\n//     sendItButton.addEventListener('click', sendCode);\n\n//     structure = [];\n//     fullCodeSets = {};\n\n//     saveCode(currentStep)\n\n//     window.addEventListener('scroll', onContentScroll);\n//     triggers = document.querySelectorAll('.tmd-trigger');\n//     blocks = document.querySelectorAll('.tmd');\n//     for( var i = 0; i < blocks.length; i++ ) {\n//       var blockElement = blocks[i];\n\n//       var blockStructure = {\n//         code: blockElement.innerHTML.replace('&gt;', '>').replace('&lt;', '<').replace('&lt;', '<'),\n//         action: blockElement.getAttribute('data-action'),\n//         from: parseInt(blockElement.getAttribute('data-from')),\n//         to: blockElement.getAttribute('data-to'),\n//         lines: blockElement.innerHTML.split('\\n').length\n//       }\n\n//       if( blockStructure.to === 'all' ) {\n//         blockStructure.to = parseInt(blockStructure.from) + blockStructure.code.split('\\n').length\n//       } else {\n//         blockStructure.to = parseInt(blockStructure.to);\n//       }\n\n//       structure.push(blockStructure)\n//     }\n\n//   }\n\n//   function onContentScroll(e) {\n\n//     var hitSteps = -1;\n\n//     for( var i = 0; i < triggers.length; i++) {\n//       var dimensions = triggers[i].getBoundingClientRect();\n//       var headerHeight = 65; // todo, not put here.\n\n//       if( dimensions.y + dimensions.height/3 < ((window.innerHeight - headerHeight) / 2 + headerHeight)) {\n\n//         if( i === currentStep + 1 ) {\n//           currentStep = i;\n//           onCodeAdd(i);\n//         }\n\n//         hitSteps = i;\n//       }\n//     }\n\n//     if( hitSteps === currentStep - 1) {\n//       currentStep = currentStep - 1;\n//       onCodeRemove(currentStep + 1);\n//       sendCode(currentStep);\n//     }\n//   }\n\n//   function onCodeRemove(step) {\n//     var range = new monaco.Range(0, 1, 999, 1);\n//     var id = { major: 1, minor: 1 };           \n//     var op = {identifier: id, range: range, text: fullCodeSets[step - 1], forceMoveMarkers: true};\n//     editor.executeEdits(fullCodeSets[step - 1], [op]);\n//     hasTyped = false;\n//   }\n\n//   function onCodeAdd(step) {\n\n//     if( hasTyped === true ) {\n//       onCodeRemove(step);\n//     }\n\n//     // Positioning the instructions\n//     var instructions = structure[step];\n\n//     var range = new monaco.Range(instructions.from, 1, instructions.to, 1);\n//     var id = { major: 1, minor: 1 };           \n//     var op = {identifier: id, range: range, text: instructions.code, forceMoveMarkers: true};\n//     editor.executeEdits(instructions.code, [op]);\n\n//     editor.revealLines(instructions.from, instructions.from + instructions.lines);\n//     sendCode();\n//     saveCode(step);\n//   }\n\n//   function onCodeReverse(step) {\n//     console.log(\"remove!\");\n//   }\n\n//   function sendCode() {\n//     var value = editor.getValue()\n\n//     frame.contentWindow.postMessage(value, \"*\")\n//   }\n\n//   function saveCode(step) {\n\n//     // Only save these ones per each step.\n//     if( !fullCodeSets[step] ) {\n//       fullCodeSets[step] = editor.getValue();\n//     }\n\n//   }\n\n//   function bind() {}\n\n//   setup();\n\n// // })();\n\n//# sourceURL=webpack:///./codeManager.js?");

/***/ }),

/***/ "./editorManager.js":
/*!**************************!*\
  !*** ./editorManager.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar EditorManager = function EditorManager(options) {\n  _classCallCheck(this, EditorManager);\n\n  console.log(\"2\");\n};\n\nexports.default = EditorManager;\n\n// // (function() {\n\n//   // Editor variables\n//   var frame = document.querySelector('iframe');\n//   var editor;\n\n//   // Code variables\n//   var contentElement = document.querySelector('.content');\n//   var triggers, blocks, structure, sendItButton, fullCodeSets;\n//   var currentStep = -1;\n//   var hasTyped = false;\n\n//   function setup() {\n//     setupCode();\n//   }\n\n//   function setupCode() {\n//     require.config({ paths: { 'vs': '/js/libs/monaco-editor/vs' }});\n//     require(['vs/editor/editor.main'], function() {\n//       editor = monaco.editor.create(document.getElementById('code-area'), {\n//         value: [\n//           '// Welcome to Tutorial Markdown.',\n//           '// start scrolling, and we\\'ll',\n//           '// write the code.'\n//         ].join('\\n'),\n//         lineNumbersMinChars: 3,\n//         scrollBeyondLastLine: false,\n//         language: 'javascript',\n//         fontSize: 10,\n//         minimap: {\n//           enabled: false\n//         },\n//         hover: false,\n//         occurrencesHighlight: false\n//       });\n\n//       editor.onKeyDown(function(e) {\n//         hasTyped = true;\n//       })\n\n//       editor.getModel().updateOptions({ tabSize: 2 })\n\n//       setupTutorial();\n//     });\n\n//     bind();\n//   }\n\n//   function setupTutorial() {\n\n//     sendItButton = document.querySelector('.send-it');\n//     sendItButton.addEventListener('click', sendCode);\n\n//     structure = [];\n//     fullCodeSets = {};\n\n//     saveCode(currentStep)\n\n//     window.addEventListener('scroll', onContentScroll);\n//     triggers = document.querySelectorAll('.tmd-trigger');\n//     blocks = document.querySelectorAll('.tmd');\n//     for( var i = 0; i < blocks.length; i++ ) {\n//       var blockElement = blocks[i];\n\n//       var blockStructure = {\n//         code: blockElement.innerHTML.replace('&gt;', '>').replace('&lt;', '<').replace('&lt;', '<'),\n//         action: blockElement.getAttribute('data-action'),\n//         from: parseInt(blockElement.getAttribute('data-from')),\n//         to: blockElement.getAttribute('data-to'),\n//         lines: blockElement.innerHTML.split('\\n').length\n//       }\n\n//       if( blockStructure.to === 'all' ) {\n//         blockStructure.to = parseInt(blockStructure.from) + blockStructure.code.split('\\n').length\n//       } else {\n//         blockStructure.to = parseInt(blockStructure.to);\n//       }\n\n//       structure.push(blockStructure)\n//     }\n\n//   }\n\n//   function onContentScroll(e) {\n\n//     var hitSteps = -1;\n\n//     for( var i = 0; i < triggers.length; i++) {\n//       var dimensions = triggers[i].getBoundingClientRect();\n//       var headerHeight = 65; // todo, not put here.\n\n//       if( dimensions.y + dimensions.height/3 < ((window.innerHeight - headerHeight) / 2 + headerHeight)) {\n\n//         if( i === currentStep + 1 ) {\n//           currentStep = i;\n//           onCodeAdd(i);\n//         }\n\n//         hitSteps = i;\n//       }\n//     }\n\n//     if( hitSteps === currentStep - 1) {\n//       currentStep = currentStep - 1;\n//       onCodeRemove(currentStep + 1);\n//       sendCode(currentStep);\n//     }\n//   }\n\n//   function onCodeRemove(step) {\n//     var range = new monaco.Range(0, 1, 999, 1);\n//     var id = { major: 1, minor: 1 };           \n//     var op = {identifier: id, range: range, text: fullCodeSets[step - 1], forceMoveMarkers: true};\n//     editor.executeEdits(fullCodeSets[step - 1], [op]);\n//     hasTyped = false;\n//   }\n\n//   function onCodeAdd(step) {\n\n//     if( hasTyped === true ) {\n//       onCodeRemove(step);\n//     }\n\n//     // Positioning the instructions\n//     var instructions = structure[step];\n\n//     var range = new monaco.Range(instructions.from, 1, instructions.to, 1);\n//     var id = { major: 1, minor: 1 };           \n//     var op = {identifier: id, range: range, text: instructions.code, forceMoveMarkers: true};\n//     editor.executeEdits(instructions.code, [op]);\n\n//     editor.revealLines(instructions.from, instructions.from + instructions.lines);\n//     sendCode();\n//     saveCode(step);\n//   }\n\n//   function onCodeReverse(step) {\n//     console.log(\"remove!\");\n//   }\n\n//   function sendCode() {\n//     var value = editor.getValue()\n\n//     frame.contentWindow.postMessage(value, \"*\")\n//   }\n\n//   function saveCode(step) {\n\n//     // Only save these ones per each step.\n//     if( !fullCodeSets[step] ) {\n//       fullCodeSets[step] = editor.getValue();\n//     }\n\n//   }\n\n//   function bind() {}\n\n//   setup();\n\n// // })();\n\n//# sourceURL=webpack:///./editorManager.js?");

/***/ }),

/***/ "./eventManager.js":
/*!*************************!*\
  !*** ./eventManager.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n/**\n * Event Manager passes events when to \"send\" new code through\n * to the frame, and when the user has hit \"send\" manually\n */\n\nvar EventManager = function EventManager(options) {\n  _classCallCheck(this, EventManager);\n};\n\nexports.default = EventManager;\n\n// // (function() {\n\n//   // Editor variables\n//   var frame = document.querySelector('iframe');\n//   var editor;\n\n//   // Code variables\n//   var contentElement = document.querySelector('.content');\n//   var triggers, blocks, structure, sendItButton, fullCodeSets;\n//   var currentStep = -1;\n//   var hasTyped = false;\n\n//   function setup() {\n//     setupCode();\n//   }\n\n//   function setupCode() {\n//     require.config({ paths: { 'vs': '/js/libs/monaco-editor/vs' }});\n//     require(['vs/editor/editor.main'], function() {\n//       editor = monaco.editor.create(document.getElementById('code-area'), {\n//         value: [\n//           '// Welcome to Tutorial Markdown.',\n//           '// start scrolling, and we\\'ll',\n//           '// write the code.'\n//         ].join('\\n'),\n//         lineNumbersMinChars: 3,\n//         scrollBeyondLastLine: false,\n//         language: 'javascript',\n//         fontSize: 10,\n//         minimap: {\n//           enabled: false\n//         },\n//         hover: false,\n//         occurrencesHighlight: false\n//       });\n\n//       editor.onKeyDown(function(e) {\n//         hasTyped = true;\n//       })\n\n//       editor.getModel().updateOptions({ tabSize: 2 })\n\n//       setupTutorial();\n//     });\n\n//     bind();\n//   }\n\n//   function setupTutorial() {\n\n//     sendItButton = document.querySelector('.send-it');\n//     sendItButton.addEventListener('click', sendCode);\n\n//     structure = [];\n//     fullCodeSets = {};\n\n//     saveCode(currentStep)\n\n//     window.addEventListener('scroll', onContentScroll);\n//     triggers = document.querySelectorAll('.tmd-trigger');\n//     blocks = document.querySelectorAll('.tmd');\n//     for( var i = 0; i < blocks.length; i++ ) {\n//       var blockElement = blocks[i];\n\n//       var blockStructure = {\n//         code: blockElement.innerHTML.replace('&gt;', '>').replace('&lt;', '<').replace('&lt;', '<'),\n//         action: blockElement.getAttribute('data-action'),\n//         from: parseInt(blockElement.getAttribute('data-from')),\n//         to: blockElement.getAttribute('data-to'),\n//         lines: blockElement.innerHTML.split('\\n').length\n//       }\n\n//       if( blockStructure.to === 'all' ) {\n//         blockStructure.to = parseInt(blockStructure.from) + blockStructure.code.split('\\n').length\n//       } else {\n//         blockStructure.to = parseInt(blockStructure.to);\n//       }\n\n//       structure.push(blockStructure)\n//     }\n\n//   }\n\n//   function onContentScroll(e) {\n\n//     var hitSteps = -1;\n\n//     for( var i = 0; i < triggers.length; i++) {\n//       var dimensions = triggers[i].getBoundingClientRect();\n//       var headerHeight = 65; // todo, not put here.\n\n//       if( dimensions.y + dimensions.height/3 < ((window.innerHeight - headerHeight) / 2 + headerHeight)) {\n\n//         if( i === currentStep + 1 ) {\n//           currentStep = i;\n//           onCodeAdd(i);\n//         }\n\n//         hitSteps = i;\n//       }\n//     }\n\n//     if( hitSteps === currentStep - 1) {\n//       currentStep = currentStep - 1;\n//       onCodeRemove(currentStep + 1);\n//       sendCode(currentStep);\n//     }\n//   }\n\n//   function onCodeRemove(step) {\n//     var range = new monaco.Range(0, 1, 999, 1);\n//     var id = { major: 1, minor: 1 };           \n//     var op = {identifier: id, range: range, text: fullCodeSets[step - 1], forceMoveMarkers: true};\n//     editor.executeEdits(fullCodeSets[step - 1], [op]);\n//     hasTyped = false;\n//   }\n\n//   function onCodeAdd(step) {\n\n//     if( hasTyped === true ) {\n//       onCodeRemove(step);\n//     }\n\n//     // Positioning the instructions\n//     var instructions = structure[step];\n\n//     var range = new monaco.Range(instructions.from, 1, instructions.to, 1);\n//     var id = { major: 1, minor: 1 };           \n//     var op = {identifier: id, range: range, text: instructions.code, forceMoveMarkers: true};\n//     editor.executeEdits(instructions.code, [op]);\n\n//     editor.revealLines(instructions.from, instructions.from + instructions.lines);\n//     sendCode();\n//     saveCode(step);\n//   }\n\n//   function onCodeReverse(step) {\n//     console.log(\"remove!\");\n//   }\n\n//   function sendCode() {\n//     var value = editor.getValue()\n\n//     frame.contentWindow.postMessage(value, \"*\")\n//   }\n\n//   function saveCode(step) {\n\n//     // Only save these ones per each step.\n//     if( !fullCodeSets[step] ) {\n//       fullCodeSets[step] = editor.getValue();\n//     }\n\n//   }\n\n//   function bind() {}\n\n//   setup();\n\n// // })();\n\n//# sourceURL=webpack:///./eventManager.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _codeManager = __webpack_require__(/*! ./codeManager */ \"./codeManager.js\");\n\nvar _editorManager = __webpack_require__(/*! ./editorManager */ \"./editorManager.js\");\n\nvar _eventManager = __webpack_require__(/*! ./eventManager */ \"./eventManager.js\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar TutorialMarkdownPlayer = function TutorialMarkdownPlayer(options) {\n  _classCallCheck(this, TutorialMarkdownPlayer);\n\n  if (!options.editor) {}\n\n  this.codeManager = new _codeManager.CodeManager();\n  this.editorManager = new _editorManager.EditorManager();\n  this.eventManager = new _eventManager.EventManager();\n};\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });