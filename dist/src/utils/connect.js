"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = __importDefault(require("config"));
function connect() {
    mongoose_1.default.connect(config_1.default.get('dbUri'))
        .then(() => {
        console.log('DB Connected!');
    }).catch((e) => {
        console.error(e);
        process.exit(1);
    });
}
exports.default = connect;