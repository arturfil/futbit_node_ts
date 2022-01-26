"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GameSchema = new mongoose_1.Schema({
    place: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    time: { type: String, required: true },
    date: { type: Date, required: true },
    player: { type: mongoose_1.Schema.Types.ObjectId, required: true },
});
exports.default = (0, mongoose_1.model)('Game', GameSchema);
