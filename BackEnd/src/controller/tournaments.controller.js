import FormData from 'form-data';
export const addTournament = (req, res) => {
    const { name, date, location, category } = JSON.parse(req.body.data);
    const image = req.files.image;
    console.log(image);
    res.status(200).json({
        message: "Tournament added successfully",
    });
}
