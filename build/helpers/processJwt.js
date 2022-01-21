"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateJwt = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = process.env.SECRET_KEY;
const generateJwt = (id) => {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.sign({ id: id }, 
        // exclamation mark is saying we are sure we are going to get it
        secret, { expiresIn: "4h" }, (err, token) => {
            if (err) {
                reject(err);
            }
            else {
                resolve(token);
            }
        });
    });
};
exports.generateJwt = generateJwt;
