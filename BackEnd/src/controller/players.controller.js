import { players,tourneysPlayersRelation } from "../data/players.data";
import { tourneysPlayed } from "../data/tourneys.data";
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
const findPlayerTourneys = (licenseNumber)=>{
    let participationInfo = [];
    tourneysPlayersRelation.forEach(element => {
        if(Object.values(element).includes(parseInt(licenseNumber))){
            participationInfo.push(element);
        }
    });
    participationInfo.forEach(elementParticipation => {
        tourneysPlayed.forEach(elementTourneys=>{
            if(Object.values(elementTourneys).includes(parseInt(elementParticipation.Tourney_id))){
                addKeyValue(elementParticipation,"Name",elementTourneys.Name);
                addKeyValue(elementParticipation,"Date",elementTourneys.Date);
            }
        })
    })
    return participationInfo;
}
const addKeyValue = (obj, key, data) =>{
    obj[key] = data;
}
export const getPlayerTourneys = (req,res) => {
    const {licenseNumber} = req.params;
    try {
        const exists = verifyAnIdExists(licenseNumber);
        if(exists===true){
            const playerTourneys = findPlayerTourneys(licenseNumber);
            res.json(playerTourneys);
            console.log(`Tourneys played by ${licenseNumber} sent`);
        }else{
            res.status(404).send();
        }
    } catch (error) {
        res.status(500);
        res.send("An error ocurred on the server");
    }
}
export const getPlayerImage = (req,res) =>{
    const {s3Id} = req.params;
    try {
        const subString = s3Id.substring(s3Id.indexOf('_') + 1);
        const exists = verifyAnIdExists(subString);
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
const verifyAnIdExists = (id) => {
    let exists = false;
    players.forEach(element => {
        const hasValue = Object.values(element).includes(parseInt(id));
        if (hasValue===true){
            exists =  true;
        }
    });
    return exists;
}