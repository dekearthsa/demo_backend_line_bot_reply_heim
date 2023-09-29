// const path = require("path");
// require('dotenv').config({ path: path.resolve(__dirname, "../../.env") });

const line = require("@line/bot-sdk");
const {flexDemoReply} = require("../struct/flex/flexDemoReply");

const CHANNEL_SECRET =  "";
const CHANNEL_ACCESS_TOKEN =  "";

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
    // console.log("req.body => ", req.body)
    // console.log("req.body.events[0] => ", req.body.events[0])
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
            }else if(body.events[0].message.text === "รับทราบ"){
                const echo = {type: "text", text: "demo flex message"}
                return LINE_CLIENT.replyMessage(REPLY_TOKEN, echo)
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

