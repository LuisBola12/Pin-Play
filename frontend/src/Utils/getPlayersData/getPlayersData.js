export const getPlayersData = async(setPlayersData,setInfoReceived) =>{
    const playersUrl = `http://localhost:4000/players`;
    try {
        const response = await fetch(playersUrl);
        const data = await response.json();
        setPlayersData(data);
        setInfoReceived(true);
    } catch (error) {
        console.log(error)
    }   
}
export const getPlayerTourneys = async(setPlayerTourneys,setInfoReceived) =>{
    const playersUrl = `http://localhost:4000/playerTourneys`;
    try {
        const response = await fetch(playersUrl);
        const data = await response.json();
        setPlayerTourneys(data);
        setInfoReceived(true);
    } catch (error) {
        console.log(error)
    }   
}