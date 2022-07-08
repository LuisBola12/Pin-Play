export const postNewUser = async(data, image) =>{
  let formData = new FormData();
  formData.append("name_register", data.name_register);
  formData.append("lastname1_register", data.lastname1_register);
  formData.append("lastname2_register", data.lastname2_register);
  formData.append("email_register", data.email_register);
  formData.append("password_register", data.password_register);
  formData.append("image_register", image);
  formData.append("age_register", data.age_register);
  formData.append("club_register", data.club_register);
  formData.append("genre_register", data.genre_register);
  formData.append("licenseNumber_register", data.licenseNumber_register);
  const playersUrl = `${process.env.REACT_APP_BACKEND_LOCALHOST}createUser`;
  try {
      const response = await fetch(playersUrl,    {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      return data;
  } catch (error) {
      console.log(error)
  }
}