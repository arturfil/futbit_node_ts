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
exports.deleteGame = exports.updateGame = exports.createGame = exports.getSingleGame = exports.getAllGames = void 0;
const Game_1 = __importDefault(require("../models/Game"));
const getAllGames = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allGames = yield Game_1.default.find();
    try {
        return res.status(200).json(allGames);
    }
    catch (error) {
        return res.status(500).json({ message: "No products found" });
    }
});
exports.getAllGames = getAllGames;
const getSingleGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const singleGame = yield Game_1.default.findById(id);
    try {
        return res.status(200).json(singleGame);
    }
    catch (error) {
        return res.status(500).json({ message: "Couldn't finda a game with that id" });
    }
});
exports.getSingleGame = getSingleGame;
const createGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const gameToCreate = yield Game_1.default.create(req.body);
    try {
        return res.status(201).json(gameToCreate);
    }
    catch (error) {
        return res.status(500).json({ message: "Couldn't create the game" });
    }
});
exports.createGame = createGame;
const updateGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const gameToUpdate = yield Game_1.default.findByIdAndUpdate({ id }, req.body, { new: true });
    try {
        return res.status(201).json(gameToUpdate);
    }
    catch (error) {
        return res.status(500).json({ message: "Couldn't update that field" });
    }
});
exports.updateGame = updateGame;
const deleteGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const gameToDelete = yield Game_1.default.findByIdAndDelete(id);
    try {
        return res.status(203).json({ message: "Game was deleted successfully" });
    }
    catch (error) {
        return res.status(500).json({ message: "Couldn't create the game" });
    }
});
exports.deleteGame = deleteGame;
