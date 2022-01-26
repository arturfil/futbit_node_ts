"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const FieldSchema = new mongoose_1.Schema({
    address: { type: String, required: true },
    name: { type: String, required: true }
});
exports.default = (0, mongoose_1.model)('Field', FieldSchema);
