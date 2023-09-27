"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllerLine = void 0;
const line = require("@line/bot-sdk");
const controllerLine = (req, res) => {
    const body = req.body;
    res.send(body);
};
exports.controllerLine = controllerLine;
