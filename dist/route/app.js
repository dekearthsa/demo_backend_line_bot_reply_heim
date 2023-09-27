"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express = require("express");
const cors = require("cors");
const { controllerDebug } = require("../controller/controllerDebug");
const { controllerLineReply } = require("../controller/controllerLineReply");
// const {controllerLinePush} = require("../controller/controllerLinePush");
const { controllerRegisterLine } = require("../controller/controllerRegisterLine");
const app = express();
exports.app = app;
app.use(express.urlencoded({ extends: true }));
app.use(express.json());
app.use(cors({ origin: '*' }));
app.get("/api/debug", controllerDebug);
app.get('/api/line/register', controllerRegisterLine);
app.post("/api/line/reply", controllerLineReply);