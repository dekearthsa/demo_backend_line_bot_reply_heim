const flexDemoReply = (lineId: string) => {
    // console.log()
    return {
        "type": "bubble",
        "direction": "ltr",
        // "hero": {
        //     "type": "image",
        //     "url": "https://i.ibb.co/2F6ttJX/Group-834.png",
        //     "size": "full",
        // },
        "body": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "text",
                    "text": "สมัครการใช้งาน",
                    "align": "center",
                    "contents": []
                },
                // {
                //     "type": "text",
                //     "text": `msg => ${lineId}`,
                //     "align": "center",
                //     "contents": []
                // },
            ]
        },
        "footer": {
            "type": "box",
            "layout": "vertical",
            "contents": [
                {
                    "type": "button",
                    "action": {
                        "type": "uri",
                        "label": "Resiger",
                        "uri": `http://localhost:9293/reigster/${lineId}`
                    },
                }
            ]
        }
    }
}
export { flexDemoReply }