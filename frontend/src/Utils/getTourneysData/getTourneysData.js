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