"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const RatingSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
    attendance: { type: Number },
    gamesPlayed: { type: Number },
    goals: { type: Number },
    gamesWon: { type: Number },
    manOfTheMatch: { type: Number },
    attitude: { type: Number },
    involvement: { type: Number }
});
exports.default = (0, mongoose_1.model)('Rating', RatingSchema);
