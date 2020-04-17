exports.id = "main";
exports.modules = {

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];\n    result[\"default\"] = mod;\n    return result;\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst dotenv = __importStar(__webpack_require__(/*! dotenv */ \"dotenv\"));\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\nconst cors_1 = __importDefault(__webpack_require__(/*! cors */ \"cors\"));\nconst helmet_1 = __importDefault(__webpack_require__(/*! helmet */ \"helmet\"));\nconst app = express_1.default();\nlet NODE_ENV = local;\ndotenv.config({ path: `./lib/enviornment/.${\"development\"}.env` });\nconst PORT = parseInt(process.env.PORT, 10);\n/**\n *  App Configuration\n */\napp.use(helmet_1.default());\napp.use(cors_1.default());\napp.use(express_1.default.json());\nif (!PORT) {\n    process.exit(1);\n}\nconst server = app.listen(PORT, () => {\n    console.log(`Listening on port ${PORT}`);\n});\nif (true) {\n    module.hot.accept();\n    module.hot.dispose(() => server.close());\n}\napp.get(\"/encode\", (req, res) => {\n    res.send(\"Hi!\");\n});\napp.post(\"/encode\", (req, res) => {\n    res.send(\"Hi!\");\n});\n/**\n * Server Activation\n */\napp.listen(PORT, () => {\n    // tslint:disable-next-line:no-console\n    console.log(`server started at http://localhost:${PORT}`);\n});\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

};