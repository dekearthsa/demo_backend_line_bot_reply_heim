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
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllerRegisterLine = void 0;
// const { Storage } =  require('@google-cloud/storage');
const { Datastore } = require('@google-cloud/datastore');
const datastore = new Datastore();
const KIND_COLLECTION = "demo_user_line_id";
const controllerRegisterLine = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { plantName, lineUserId, getMilisec } = req.body;
    try {
        const taskKey = datastore.key([KIND_COLLECTION]);
        const task = {
            key: taskKey,
            data: {
                plantName: plantName,
                lineUserId: lineUserId,
                createDate: getMilisec
            }
        };
        yield datastore.save(task);
        const echo = {
            isSave: true,
            desc: "Create new user plant success!"
        };
        res.send(echo);
    }
    catch (err) {
        console.log(`error controllerRegisterLine =>  ${err}`);
    }
});
exports.controllerRegisterLine = controllerRegisterLine;
