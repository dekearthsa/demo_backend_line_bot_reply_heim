const express = require("express");
const cors = require("cors");

const {controllerDebug} = require("../controller/controllerDebug");
const {controllerLineReply} = require("../controller/controllerLineReply");
// const {controllerLinePush} = require("../controller/controllerLinePush");
const {controllerRegisterLine} = require("../controller/controllerRegisterLine");

const app = express();
app.use(express.urlencoded({extends:true}));
app.use(express.json());
app.use(cors({origin: '*'}));


app.get("/api/debug", controllerDebug);

app.get('/api/line/register', controllerRegisterLine);
app.post("/api/line/reply",controllerLineReply);
// app.post("/api/line/push", controllerLinePush);


export {app}


