import { categories } from "../data/torneys.data"

export const getCategories = (req, res) =>{
  try{
    res.status(200).json(categories)
  }catch(error){
    res.status(400).send('Error De Servidor')
  }
}