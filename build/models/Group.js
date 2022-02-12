"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const GroupSchema = new mongoose_1.Schema({
    player: { type: mongoose_1.Schema.Types.ObjectId }
});
exports.default = (0, mongoose_1.model)('Group', GroupSchema);
