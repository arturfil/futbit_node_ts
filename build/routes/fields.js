"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const fieldController_1 = require("../controllers/fieldController");
const router = (0, express_1.Router)();
router.get("/", fieldController_1.getAllFields);
router.get("/field/:id", fieldController_1.getFieldById);
router.post("/field", fieldController_1.createField);
router.delete("field/:id", fieldController_1.deleteField);
exports.default = router;
