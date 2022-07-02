import { uploadImageToAWS } from "../s3";
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

export const createUser = (req,res) =>{
  // console.log(req)
  const photo = req.file;
  console.log('photo')
  console.log(photo)
  res.send('FUNCIONA');
}