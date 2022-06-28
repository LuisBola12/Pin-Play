import { uploadImageToAWS } from "../s3";
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

export const createUser = (req,res) =>{
  const {Name, LastNames, Email, Password, profilePhoto, BirthDate, Roles} = req.body;

  try {   
      res.status(200).json(players).send();
      console.log('Players info sent');
  } catch (error) {
      res.status(500).send("An error ocurred on the server");
  }
}