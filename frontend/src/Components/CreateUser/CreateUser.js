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
  const [lastNames, setLastNames] = useState('');
  const [email, setEmail] = useState('');
  const [password, setpassword] = useState('');
  const [image, setImage] = useState({ preview: '', data: '' })
  const [birthDate, setBirthDate] = useState('');
  const [errors, setErrors] = useState({});

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
    const err = {
      name_register: name,
      lastNames_register: lastNames,
      email_register: email,
      password_register: password,
      image_register: image.data.name,
      birth_date_register: birthDate
    }
    setErrors(validate(err))
    console.log(Object.keys(errors).length === 0)
    if(Object.keys(errors).length === 0){
      let formData = new FormData()
      console.log(image.data)
      formData.append('file', image.data)
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
      <label> Profile Photo </label>
        {image.data.name ? (
            <img src={image.preview} className='preview_image' alt=''/> 
          ) : (
            <BiUserCircle className="register-user-icon"/>
            // <img src={'https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?s=612x612'} className='preview_image' alt=''/> 
          )}       
        <div className='register-form'>
          <div>
            <div className='register-row'>
              <input 
                type='text' 
                id='name_register' 
                className= {`register-row__input ${errors.name_registerCSS}`}
                value = {name} 
                maxLength={15} 
                onChange={(e) => {setName(e.target.value);}} 
                autoComplete='off' 
                placeholder=' '/>
              <label htmlFor='name_register' className='register-row__label'> Nombre <span className='req'>*</span></label>
            </div>
            <div>
              <label className='register-error'>{errors.name_register}</label>
            </div>
          </div>

          <div>
            <div className='register-row'>
              <input 
                type='text' 
                id='lastnames_register'
                className={`register-row__input ${errors.lastnames_registerCSS}`}
                value={lastNames} 
                maxLength={15} 
                onChange={(e) => {setLastNames(e.target.value);}} 
                autoComplete='off' 
                placeholder=' '/>
              <label htmlFor='lastnames_register' className='register-row__label'>Apellidos<span className='req'>*</span></label>
            </div>
            <div>
              <label className='register-error'>{errors.lastnames_register} </label>
            </div>
          </div>         
        </div>

        <div className='register-form-email'>
          <div>
            <div className='register-row-email'>
              <input 
                type='text' 
                id='email_register' 
                className= {`register-row-email__input ${errors.email_registerCSS}`}
                value={email}
                maxLength={50}
                onChange={(e) => {setEmail(e.target.value);}}
                autoComplete='off' 
                placeholder=' '/>
              <label htmlFor='email_register' className='register-row-email__label'> Correo <span className='req'>*</span> </label>
            </div>
            <div>
              <label className='register-error'>{errors.email_register}</label>
            </div>
          </div>
          <div>
            <div className='register-row-email'>
              <input 
                type='password' 
                id='password_register' 
                className= {`register-row-email__input ${errors.password_registerCSS}`}
                value={password}
                maxLength={20}
                onChange={(e) => {setpassword(e.target.value);}}
                autoComplete='off' 
                placeholder=' '/>
              <label htmlFor='password_register' className='register-row-email__label'> Contraseña <span className='req'>*</span> </label>
            </div>
            <div>
              <label className='register-error'>{errors.password_register}</label>
            </div>
          </div>
        </div>

        <div className='register-form'>
          <div>
            <div className={`register-row-file ${errors.image_registerCSS}`}>
              <label className='register-row-file__label-tile'>Foto de Perfil</label>
              <label htmlFor='profile_photo_register' className='register-row-file__label'>
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
          <div>
            <div className='register-row'>
              <input 
                type='date' 
                id='birth_date_register' 
                className={`register-row__input ${errors.birth_date_registerCSS}`}
                value={birthDate}
                maxLength={8}
                onChange={(e) => {setBirthDate(e.target.value);}}
                autoComplete='off' 
                placeholder=' '/>
              <label htmlFor='birth_date_register' className='register-row__label'> Fecha De Nacimiento <span className='req'>*</span></label>
            </div>
            <div>
              <label className='register-error'>{errors.birth_date_register}</label>
            </div>
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
