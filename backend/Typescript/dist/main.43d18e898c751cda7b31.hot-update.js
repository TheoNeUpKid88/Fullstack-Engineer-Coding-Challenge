exports.id = "main";
exports.modules = {

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nconst helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\nconst app = express_1.default();\nconst PORT = 23456;\n/**\n *  App Configuration\n */\napp.use(helmet_1.default());\napp.use(cors_1.default());\napp.use(express_1.default.json());\nif (!PORT) {\n    process.exit(1);\n}\n/**\n * Server Activation\n */\nconst server = app.listen(PORT, () => {\n    console.log(`Listening on port ${PORT}`);\n});\nserver.on('error', (err) => {\n    console.log(JSON.stringify(err, null, 4));\n});\nif (true) {\n    module.hot.accept();\n    module.hot.dispose(() => server.close());\n}\napp.get('/encode', (req, res) => {\n    res.send('Hi!');\n});\napp.post('/encode', (req, res) => {\n    res.send('Hi!');\n});\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

};