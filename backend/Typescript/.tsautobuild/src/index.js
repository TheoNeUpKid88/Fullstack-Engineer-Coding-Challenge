"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const app = express_1.default();
const PORT = 23456;
/**
 *  App Configuration
 */
app.use(helmet_1.default());
app.use(cors_1.default());
app.use(express_1.default.json());
if (!PORT) {
    process.exit(1);
}
/**
 * Server Activation
 */
const server = app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
server.on('error', (err) => {
    console.log(JSON.stringify(err, null, 4));
});
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => server.close());
}
app.get('/encode', (req, res) => {
    res.send('Hi!');
});
app.post('/encode', (req, res) => {
    res.send('Hi!');
});
//# sourceMappingURL=index.js.map