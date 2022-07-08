export const getPlayersData = async(setPlayersData,setInfoReceived) =>{
    console.log(process.env.REACT_APP_BACKEND_LOCALHOST);
    const playersUrl = `${process.env.REACT_APP_BACKEND_LOCALHOST}players`;
    try {
        const response = await fetch(playersUrl);
        const data = await response.json();
        setPlayersData(data);
        setInfoReceived(true);
    } catch (error) {
        console.log(error)
    }   
}

export const getPlayerTourneys = async(licenseNumber,setPlayerTourneys,setInfoReceived) =>{
    const playersUrl = `${process.env.REACT_APP_BACKEND_LOCALHOST}playerTourneys/${licenseNumber}`;
    try {
        const response = await fetch(playersUrl);
        const data = await response.json();
        setPlayerTourneys(data);
        setInfoReceived(true);
    } catch (error) {
        console.log(error)
    }   
}

export const getPlayersInfo = async(category, page, maxAmountPage) =>{
    const playersUrl = `${process.env.REACT_APP_BACKEND_LOCALHOST}topPlayersCategory?category=${category}&page=${page}&maxAmountPage=${maxAmountPage}`;
    try {
        const response = await fetch(playersUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }   
}

export const getAmountPages = async(category,maxAmount) =>{
    const playersUrl = `${process.env.REACT_APP_BACKEND_LOCALHOST}amountOfPages?category=${category}&maxAmount=${maxAmount}`;
    try {
        const response = await fetch(playersUrl);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
    }   
}