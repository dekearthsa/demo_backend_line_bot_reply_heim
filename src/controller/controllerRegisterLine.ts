// const { Storage } =  require('@google-cloud/storage');
const {Datastore} = require('@google-cloud/datastore');

const datastore = new Datastore();
const KIND_COLLECTION = "demo_user_line_id"

const controllerRegisterLine = async (req:any, res:any) => {
    const {plantName, lineUserId, getMilisec} = req.body;
    try{
        const taskKey = datastore.key([KIND_COLLECTION]);
        const task = {
            key: taskKey,
            data: {
                plantName: plantName,
                lineUserId: lineUserId,
                createDate: getMilisec
            }
        }
        await datastore.save(task);
        const echo = {
            isSave:true,
            desc: "Create new user plant success!"
        }

        res.send(echo)
    }catch(err){
        console.log(`error controllerRegisterLine =>  ${err}`)
    }
}

export {controllerRegisterLine}