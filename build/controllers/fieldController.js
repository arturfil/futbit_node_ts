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
exports.deleteField = exports.createField = exports.getFieldById = exports.getAllFields = void 0;
const Field_1 = __importDefault(require("../models/Field"));
const getAllFields = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const fields = yield Field_1.default.find();
    try {
        return res.status(200).json(fields);
    }
    catch (error) {
        return res.status(500).json({ message: "Couldn't get fields" });
    }
});
exports.getAllFields = getAllFields;
const getFieldById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const singleField = yield Field_1.default.findById(id);
    try {
        return res.status(200).json(singleField);
    }
    catch (error) {
        return res.status(500).json({ message: "Couldn't get the field with that id" });
    }
});
exports.getFieldById = getFieldById;
const createField = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const fieldToCreate = yield Field_1.default.create(req.body);
    try {
        return res.status(201).json(fieldToCreate);
    }
    catch (error) {
        return res.status(500).json({ message: "Couldn't create the field" });
    }
});
exports.createField = createField;
const deleteField = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const fieldToDelete = yield Field_1.default.findByIdAndDelete(id);
    try {
        return res.status(203).json({ message: "field was deleted" });
    }
    catch (error) {
        return res.status(500).json({ message: "Couldn't create the game" });
    }
});
exports.deleteField = deleteField;
