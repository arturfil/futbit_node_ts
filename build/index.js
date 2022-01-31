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
const users_1 = __importDefault(require("./routes/users"));
const games_1 = __importDefault(require("./routes/games"));
const fields_1 = __importDefault(require("./routes/fields"));
// path declaration of routes
app.use("/api/auth", users_1.default);
app.use("/api/games", games_1.default);
app.use("/api/fields", fields_1.default);
// port declaration and execution
const port = 8000;
app.listen(port, 'localhost', () => { console.log(`Server Started in port ⚡️`); });
