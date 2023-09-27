const path = require("path");
require('dotenv').config({ path: path.resolve(__dirname, "../../.env") });

const line = require("@line/bot-sdk");
const {flexDemoReply} = require("../struct/flex/flexDemoReply");

const CHANNEL_SECRET = process.env.CHANNEL_SECRET|| "a123dfdce669ad6868727b47f64415ad";
const CHANNEL_ACCESS_TOKEN = process.env.CHANNEL_ACCESS_TOKE || "lqHG6mhwJDMus7YLEZbXXRcQsBMSr3gaJCSwIKVBJgc/5jfCit8goM8Gu0RDCzIYsicBN1BdL+RqBkhFsDSQ+e8zwo6UTn2T35zIBwcAVT5tgu9rnu4QeTjnMCpFibp9D8aU8KR19JM0IVX9Nf9NfAdB04t89/1O/w1cDnyilFU=";

// // setup line bot api // //
const CONFIG = {
    channelAccessToken: CHANNEL_ACCESS_TOKEN,
    channelSecret: CHANNEL_SECRET
}

const LINE_CLIENT = new line.Client(CONFIG);

// // end setup line bot api // //

const controllerLineReply = (req:any, res:any) => {
    const body = req.body;
    const MSG_TYPE = body.events[0].message.type;
    const REPLY_TOKEN = req.body.events[0].replyToken;
    const USER_TYPE = req.body.events[0].source.type;
    const USER_ID = req.body.events[0].source.userId;
    console.log("req.body => ", req.body)
    console.log("req.body.events[0] => ", req.body.events[0])
    try{    
        if(MSG_TYPE === "text"){
            if(body.events[0].message.text === "สมัครใช้งาน"){
                if(USER_TYPE === "user"){
                    const flexMsg = flexDemoReply(USER_ID);
                    const echo = { type: 'flex', altText: 'register', contents: flexMsg }
                    return LINE_CLIENT.replyMessage(REPLY_TOKEN, echo)
                }else{
                    const echo = {type: "text", text: "invalid user."}
                    return LINE_CLIENT.replyMessage(REPLY_TOKEN, echo)
                }
                // const flexMsg = flexDemoReply();
                // const echo = { type: 'flex', altText: 'register', contents: flexMsg }
                // const echo = {type: "text", text: MSG_TYPE}
                // return LINE_CLIENT.replyMessage(REPLY_TOKEN, echo)
            }
        }else if(MSG_TYPE === "image"){
            const echo = {type: "text", text: "not support now!"}
            return LINE_CLIENT.replyMessage(REPLY_TOKEN, echo)
        }else{
            const echo = {type: "text", text: "not support now!"}
            return LINE_CLIENT.replyMessage(REPLY_TOKEN, echo)
        }
        res.send(body);
    }catch(err){
        console.log(`error in controllerLineReply => ${err}`);
    }
}

export {controllerLineReply}

