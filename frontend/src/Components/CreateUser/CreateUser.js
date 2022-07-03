import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import validate from '../../Utils/CreateUser/createUserValidations';
// import { postLogin } from '../../Slices/user/requests/postLogin';
import { resetErrorMsg } from '../../Slices/user/userSlice';
// import { validAnEntity } from '../../Utils/validAnEntity';
import { Button } from '../Button/Button';
import './CreateUserStyle.scss';
import {BsUpload} from "react-icons/bs"
import {BiUserCircle} from "react-icons/bi"

export const CreateUser = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [lastName1, setLastName1] = useState('');
  const [lastName2, setLastName2] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [image, setImage] = useState({ preview: '', data: '' })
  const [age, setAge] = useState('');
  const [club, setClub] = useState('');
  const [genre, setGenre] = useState('');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [errors, setErrors] = useState({'err': 0});

  const navigate = useNavigate();
  const handleCancel = () => {
    dispatch(resetErrorMsg());
    navigate('/');
  }
  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
  }
  
  const handleSubmit1 = async (e) => {
    e.preventDefault()
    console.log('entraa')
    let data = {
      name_register: name,
      lastname1_register: lastName1,
      lastname2_register: lastName2,
      email_register: email,
      password_register: password,
      image_register: image.data,
      age_register: age,
      club_register: club,
      genre_register: genre,
      licenseNumber_register: licenseNumber
    }
    setErrors(validate(data))
    console.log(Object.keys(errors).length === 0)
    if(Object.keys(errors).length === 0){
      data = JSON.stringify(data)
      let formData = new FormData()
      console.log(image.data)
      formData.append('name_register', name)
      formData.append('lastname1_register', lastName1)
      formData.append('lastname2_register', lastName2)
      formData.append('email_register', email)
      formData.append('password_register', password)
      formData.append('image_register', image.data)
      formData.append('age_register', age)
      formData.append('club_register', club)
      formData.append('genre_register', genre)
      formData.append('licenseNumber_register', licenseNumber)
      const response = await fetch('http://localhost:4000/createUser', {
        method: 'POST',
        body: formData,
      })
      console.log(response)
    }
  }

  return (
    <div className='register-page'>
      <div className='register-bar'>
        <div className='register-title'> PinPlay </div>
      </div>
      {/* <h1>Upload to server</h1> */}
      {/* {image.preview && <img src={image.preview} width='100' height='100' />} */}
      {/* <hr></hr> */}

      <form className='register-full-form' onSubmit={handleSubmit1}>
      <label className='register-profile-title'> Profile Photo</label>
        {image.data.name ? (
            <img src={image.preview} className='preview_image' alt=''/> 
          ) : (
            // <BiUserCircle className="register-user-icon"/>
            <img src={'https://pin-play-ci0137.s3.amazonaws.com/user_icon2.png'} className='preview_image' alt=''/> 
          )}       
        <div className='register-form-name-lastnames'>
          <div>
            <div className='register-row-name-lastnames'>
              <input 
                type='text' 
                id='name_register' 
                className= {`register-row-name-lastnames__input ${errors.name_registerCSS}`}
                value = {name} 
                maxLength={15} 
                onChange={(e) => {setName(e.target.value);}} 
                autoComplete='off' 
                placeholder=' '/>
              <label htmlFor='name_register' className='register-row-name-lastnames__label'> Nombre <span className='req'>*</span></label>
            </div>
            <div>
              <label className='register-error'>{errors.name_register}</label>
            </div>
          </div>

          <div>
            <div className='register-row-name-lastnames'>
              <input 
                type='text' 
                id='lastname1_register'
                className={`register-row-name-lastnames__input ${errors.lastname1_registerCSS}`}
                value={lastName1} 
                maxLength={15} 
                onChange={(e) => {setLastName1(e.target.value);}} 
                autoComplete='off' 
                placeholder=' '/>
              <label htmlFor='lastname1_register' className='register-row-name-lastnames__label'>Primer Apellido<span className='req'>*</span></label>
            </div>
            <div>
              <label className='register-error'>{errors.lastname1_register} </label>
            </div>
          </div>     

          <div>
            <div className='register-row-name-lastnames'>
              <input 
                type='text' 
                id='lastname2_register'
                className={`register-row-name-lastnames__input ${errors.lastname2_registerCSS}`}
                value={lastName2} 
                maxLength={15} 
                onChange={(e) => {setLastName2(e.target.value);}} 
                autoComplete='off' 
                placeholder=' '/>
              <label htmlFor='lastname2_register' className='register-row-name-lastnames__label'>Segundo Apellido<span className='req'>*</span></label>
            </div>
            <div>
              <label className='register-error'>{errors.lastname2_register} </label>
            </div>
          </div>     
        </div>

        <div className='register-form-row'>
          <div>
            <div className='register-row'>
              <input 
                type='text' 
                id='email_register' 
                className= {`register-row__input ${errors.email_registerCSS}`}
                value={email}
                maxLength={50}
                onChange={(e) => {setEmail(e.target.value);}}
                autoComplete='off' 
                placeholder=' '/>
              <label htmlFor='email_register' className='register-row__label'> Correo <span className='req'>*</span> </label>
            </div>
            <div>
              <label className='register-error'>{errors.email_register}</label>
            </div>
          </div>
          <div>
            <div className='register-row'>
              <input 
                type='password' 
                id='password_register' 
                className= {`register-row__input ${errors.password_registerCSS}`}
                value={password}
                maxLength={20}
                onChange={(e) => {setpassword(e.target.value);}}
                autoComplete='off' 
                placeholder=' '/>
              <label htmlFor='password_register' className='register-row__label'> Contraseña <span className='req'>*</span> </label>
            </div>
            <div>
              <label className='register-error'>{errors.password_register}</label>
            </div>
          </div>
        </div>

        <div className='register-form-row'>
          <div>
            <div className='register-row'>
              <input 
                type='text' 
                id='club_register' 
                className= {`register-row__input ${errors.club_registerCSS}`}
                value={club}
                maxLength={50}
                onChange={(e) => {setClub(e.target.value);}}
                autoComplete='off' 
                placeholder=' '/>
              <label htmlFor='club_register' className='register-row__label'> Club </label>
            </div>
            <div>
              <label className='register-error'>{errors.club_register}</label>
            </div>
          </div>
          <div>
            <div className='register-row'>
              <input 
                type='text' 
                id='licenseNumber_register' 
                className= {`register-row__input ${errors.licenseNumber_registerCSS}`}
                value={licenseNumber}
                maxLength={50}
                onChange={(e) => {setLicenseNumber(e.target.value);}}
                autoComplete='off' 
                placeholder=' '/>
              <label htmlFor='licenseNumber_register' className='register-row__label'> Carnet <span className='req'>*</span> </label>
            </div>
            <div>
              <label className='register-error'>{errors.licenseNumber_register}</label>
            </div>
          </div>
        </div>

        <div className='register-form-row'>
        <div>
            <div className='register-row'>
              <input 
                type='text' 
                id='genre_register' 
                className= {`register-row__input ${errors.genre_registerCSS}`}
                value={genre}
                maxLength={20}
                onChange={(e) => {setGenre(e.target.value);}}
                autoComplete='off' 
                placeholder=' '/>
              <label htmlFor='genre_register' className='register-row__label'> Genero </label>
            </div>
            <div>
              <label className='register-error'>{errors.genre_register}</label>
            </div>
          </div>
          <div>
            <div className='register-row'>
              <input 
                type='text' 
                id='age_register' 
                className={`register-row__input ${errors.age_registerCSS}`}
                value={age}
                maxLength={8}
                onChange={(e) => {setAge(e.target.value);}}
                autoComplete='off' 
                placeholder=' '/>
              <label htmlFor='age_register' className='register-row__label'> Edad </label>
            </div>
            <div>
              <label className='register-error'>{errors.age_register}</label>
            </div>
          </div>
        </div>
        <div>
            <div className='register-row-file'>
              <label className='register-row-file__label-tile'>Foto de Perfil</label>
              <label htmlFor='profile_photo_register' className={`register-row-file__label  ${errors.image_registerCSS}`}>
              <input 
                type='file' 
                id='profile_photo_register' 
                className='register-row-file__input'
                onChange={handleFileChange}
                accept='image/*'/>
                { image.data.name ? 
                (<><span className='register-row-file__span'>{image.data.name}</span></>) : 
                (
                <span className='register-row-file__span2'>
                  <label htmlFor='profile_photo_register' className='register-row-file__subLabel'>
                  Subir
                  </label >
                  <label htmlFor='profile_photo_register' className='register-row-file__subLabel'>
                  <BsUpload className="register-row-file__register-upload-icon"/>
                  </label>
                </span>) }
              </label>
              {/* <img alt='' className='register-image'></img> */}
            </div>
            <div>
              <label className='register-error'>{errors.image_register}</label>
            </div>
          </div>
                    {/* posible lugar imagen */}
        <div className='register-btn-box'>
          <Button buttonStyle="btn--register" buttonSize='large--btn'>
            Registrarse
          </Button>
          <Button onClick={handleCancel} buttonStyle="btn--cancel" buttonSize='large--btn'>
            Cancelar
          </Button>
        </div>
      </form>
      <footer className='register-footerCopyRights'> &copy; PinPlay </footer>
    </div>
  );
};
