export const getCategories = async() =>{
  const playersUrl = `${process.env.REACT_APP_BACKEND_LOCALHOST}categories`;
  try {
      const response = await fetch(playersUrl);
      const data = await response.json();
      return data;
  } catch (error) {
      console.log(error)
  }   
}

export const getTournaments = async(category, page, maxAmountPage) =>{
  const url = `${process.env.REACT_APP_BACKEND_LOCALHOST}getTournaments?category=${category}&page=${page}&maxAmountPage=${maxAmountPage}`;
  try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
  } catch (error) {
      console.error(error)
  }   
}

export const getPageCount = async(category, maxAmountPage) =>{
  const url = `${process.env.REACT_APP_BACKEND_LOCALHOST}getTournamentPages?category=${category}&maxAmountPage=${maxAmountPage}`;
  try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
  } catch (error) {
      console.error(error)
  }   
}
