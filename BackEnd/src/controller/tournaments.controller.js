import { uploadImageToAWS } from "../s3";
export const addTournament = async (req, res) => {
    const { name, date, location, category } = JSON.parse(req.body.data);
    const image = req.files.image;
    
    if (image) {
      const fileExtension = image.name.split(".").pop();
      const filePath = `torneos/torneo_${name}.${fileExtension}`;
      try {
        await uploadImageToAWS(image, filePath);
      } catch (error) {
        console.log("Error al subir la imagen");
        console.log(error);
      }
    }
    res.status(200).json({
        message: "Torneo agregado correctamente",
    });
}
