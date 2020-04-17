"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const model_1 = require("./lib/model");
const payloadChecker = require('payload-validator');
const expectedPayload = {
    'Shift': '',
    'Message': ''
};
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
app.get('/api/encode', (req, res) => {
    res.send('simple test!');
});
app.post('/api/encode', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (req.body) {
        const result = payloadChecker.validator(req.body, expectedPayload, ['Shift', 'Message'], false);
        if (result.success) {
            model_1.shiftty(req.body, (error, success) => {
                if (error) {
                    console.log(error);
                    res.send(error);
                }
                if (success) {
                    res.json(success);
                }
            });
        }
        else {
            res.json({ 'message': result.response.errorMessage });
        }
    }
    else {
        res.json({ 'message': 'paylod not correct' });
    }
}));
//# sourceMappingURL=index.js.map