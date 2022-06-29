import { players,tourneysPlayedByPlayer } from "../data/players.data";
import { getImageFromAWS } from "../s3";
export const getAllPlayers = (req,res) =>{
    try {   
        res.json(players);
        console.log('Players info sent');
    } catch (error) {
        res.status(500);
        res.send("An error ocurred on the server");
    }
}
export const getPlayerTourneys = (req,res) => {
    try {   
        res.json(tourneysPlayedByPlayer);
        console.log('Tourneys played by a player sent');
    } catch (error) {
        res.status(500);
        res.send("An error ocurred on the server");
    }
}
export const getPlayerImage = (req,res) =>{
    const {s3Id} = req.params;
    try {
        const subString = s3Id.substring(s3Id.indexOf('_') + 1);
        const exists = s3IdExist(subString);
        if(exists === true){
            try {
                const bucketId = `jugadores/${s3Id}.jpg`
                const readStream = getImageFromAWS(bucketId);
                console.log(readStream)
                readStream.pipe(res);
            } catch (error) {
                console.log(error)
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
        const hasValue = Object.values(element).includes(parseInt(s3Id));
        if (hasValue===true){
            exists =  true;
        }
    });
    return exists;
}