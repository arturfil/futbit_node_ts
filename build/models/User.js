"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// mongoose model schema
const UserSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    type: { type: String, enum: ['player', 'provider'], default: 'player' },
    rating: { type: mongoose_1.Schema.Types.ObjectId },
    age: { type: Number },
    nationality: { type: String },
});
exports.default = (0, mongoose_1.model)('User', UserSchema);
