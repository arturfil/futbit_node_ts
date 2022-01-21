"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const app = (0, express_1.default)();
dotenv_1.default.config();
mongoose_1.default.connect('mongodb://localhost/soccerapp')
    .then(() => console.log("Connected to db 🔌"))
    .catch(() => console.log("Failed to connect to db ❌"));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// routes
// path declaration of routes
// port declaration and execution
const port = 5500;
app.listen(port, 'localhost', () => { console.log("Server Started ⚡️"); });
