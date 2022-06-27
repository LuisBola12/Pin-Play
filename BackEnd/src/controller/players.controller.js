import { players } from "../data/players.data";
import { getImageFromAWS } from "../s3";
export const getAllPlayers = (req,res) =>{
    try {   
        res.status(200).json(players).send();
        console.log('Players info sent');
    } catch (error) {
        res.status(500).send("An error ocurred on the server");
    }
}
export const getPlayerImage = (req,res) =>{
    const {s3Id} = req.params;
    try {
        const bucketId = `jugadores/${s3Id}.jpg`
        const exists = s3IdExist(s3Id);
        if(exists === true){
            try {
                const readStream = getImageFromAWS(bucketId);
                console.log(readStream)
                readStream.pipe(res);
            } catch (error) {
                console.log("AAAAAAAAAAAAAAAAAAAA")
            }
        }else{
            res.status(404).send();
        }
    } catch (error) {
        res.status(500).send();
    }
}
const s3IdExist = (s3Id) => {
    let exists = false;
    players.forEach(element => {
        const hasValue = Object.values(element).includes(s3Id);
        if (hasValue===true){
            exists =  true;
        }
    });
    return exists;
}