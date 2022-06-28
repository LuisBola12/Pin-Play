import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
// import { postLogin } from '../../Slices/user/requests/postLogin';
import { resetErrorMsg } from '../../Slices/user/userSlice';
// import { validAnEntity } from '../../Utils/validAnEntity';
import usePost from '../../shared/hooks/usePost';
import validate from '../../Utils/CreateUser/createUserValidations';
import useForm from '../../shared/hooks/useForm';
import { Button } from '../Button/Button';
import './CreateUserStyle.scss';


export const CreateUser = () => {
  const dispatch = useDispatch();
  const { post } = usePost('http://localhost:4000/createEmployer');
  // const { image, serImage } = useState('');
  const parseRoute = (route) => {
    let newRoute = '';
    if(route !== undefined){
      let size = route.length;
      for(let i = 0; i <= size; i++){
        if(route.charAt(size-i) !== '\\'){
          newRoute = route.charAt(size-i) + newRoute;
        }else{
          break;
        }
      }
    }
    return newRoute;
  } 
  const sendToDatabase = async () =>{
    console.log(formValues)  
    let string = JSON.stringify(formValues);

    string = JSON.stringify({
        Name: formValues.name_register, 
        LastNames: formValues.lastnames_register, 
        Email: formValues.email_register, 
        Password: formValues.password_register, 
        profilePhoto: formValues.profile_photo_register, 
        BirthDate: formValues.birth_date_register,
        Roles: 'player'
      });
      post(string);   
    // const user = await validAnEntity('users/',formValues.email_register);
    // const employee = await validAnEntity('employer/', formValues.profile_photo_register);

    // if (user === true && employee === true) {
    //   console.log('prubea');
    //   let string = JSON.stringify(formValues);

    //   string = JSON.stringify({
    //     Cedula: formValues.profile_photo_register,
    //     Nombre: formValues.name_register,
    //     Apellido1: formValues.lastnames_register,
    //     Apellido2: formValues.lastname2_register,
    //     Telefono: formValues.birth_date_register,
    //     Email: formValues.email_register,
    //     Contrasenia: formValues.password_register,
    //     Roles: 'admin'
    //   });

    // post(string);
    // dispatch(postLogin({
    //   email: formValues.email_register, 
    //   password: formValues.password_register
    // }));
    // navigate('/projectAdmin');
    // }else{
    //   setIsSubmitting(false);
    //   alert('These user alredy exists.');
    // }
  };

  const { formValues, handleInputChange, handleSubmit, errors } = useForm(sendToDatabase, validate);

  const navigate = useNavigate();
  const handleCancel = () => {
    dispatch(resetErrorMsg());
    navigate('/');
  }

  return (
    <div className='register-page'>
      <div className='register-bar'>
        <div className='register-title'> PinPlay </div>
      </div>
        
      <div className='register-full-form'>        
        <div className='register-form'>
          <div>
            <div className='register-row'>
              <input 
                type='text' 
                id='name_register' 
                className= {`register-row__input ${errors.name_registerCSS}`}
                value = {formValues.name_register || ''} 
                maxLength={15} 
                onChange={handleInputChange} 
                autoComplete='off' 
                placeholder=' '/>
              <label htmlFor='name_register' className='register-row__label'> Nombre <span className='req'>*</span></label>
            </div>
            <div>
              <label className='register-error' id='register_error_name'>{errors.name_register}</label>
            </div>
          </div>

          <div>
            <div className='register-row'>
              <input 
                type='text' 
                id='lastnames_register'
                className={`register-row__input ${errors.lastnames_registerCSS}`}
                value={formValues.lastnames_register || ''} 
                maxLength={15} 
                onChange={handleInputChange} 
                autoComplete='off' 
                placeholder=' '/>
              <label htmlFor='lastnames_register' className='register-row__label'>Apellidos<span className='req'>*</span></label>
            </div>
            <div>
              <label className='register-error' id='register_error_name'>{errors.lastnames_register} </label>
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
                value={formValues.email_register || ''}
                maxLength={50}
                onChange={handleInputChange}
                autoComplete='off' 
                placeholder=' '/>
              <label htmlFor='email_register' className='register-row-email__label'> Correo <span className='req'>*</span> </label>
            </div>
            <div>
              <label className='register-error' id='register_error_email'>{errors.email_register}</label>
            </div>
          </div>
          <div>
            <div className='register-row-email'>
              <input 
                type='password' 
                id='password_register' 
                className= {`register-row-email__input ${errors.password_registerCSS}`}
                value={formValues.password_register || ''}
                maxLength={20}
                onChange={handleInputChange}
                autoComplete='off' 
                placeholder=' '/>
              <label htmlFor='password_register' className='register-row-email__label'> Contraseña <span className='req'>*</span> </label>
            </div>
            <div>
              <label className='register-error' id='register_error_password'>{errors.password_register}</label>
            </div>
          </div>
        </div>

        <div className='register-form'>
          <div>
            <div className={`register-row-file ${errors.profile_photo_registerCSS}`}>
              <label className='register-row-file__label-tile'>Foto de Perfil</label>
              <label htmlFor='profile_photo_register' className='register-row-file__label'>
              <input 
                type='file' 
                id='profile_photo_register' 
                className={`register-row-file__input ${errors.profile_photo_registerCSS}`}
                value={formValues.profile_photo_register || ''} 
                maxLength={15} 
                onChange={handleInputChange} 
                accept='image/*'
                autoComplete='off' 
                placeholder=' '/>
                { parseRoute(formValues.profile_photo_register) ? 
                (<span className='register-row-file__span'>{ parseRoute(formValues.profile_photo_register)}</span> ) : 
                (<span>Subir <img alt='' className='register-image'></img></span>) }
              </label>
              {/* <label htmlFor='profile_photo_register' className='register-row__label'> Foto De Perfil <span className='req'>*</span></label> */}
            </div>
            <div>
              <label className='register-error' id='register_error_ID'>{errors.profile_photo_register}</label>
            </div>
          </div>
          <div>
            <div className='register-row'>
              <input 
                type='date' 
                id='birth_date_register' 
                className={`register-row__input ${errors.birth_date_registerCSS}`}
                value={formValues.birth_date_register || ''}
                maxLength={8}
                onChange={handleInputChange}
                autoComplete='off' 
                placeholder=' '/>
              <label htmlFor='birth_date_register' className='register-row__label'> Fecha De Nacimiento <span className='req'>*</span></label>
            </div>
            <div>
              <label className='register-error' id='register_error_phoneNumber'>{errors.birth_date_register}</label>
            </div>
          </div>
        </div>
        <div className='register-btn-box'>
          <Button onClick={handleSubmit} buttonStyle="btn--register" buttonSize='large--btn'>
            Registrarse
          </Button>
          <Button onClick={handleCancel} buttonStyle="btn--cancel" buttonSize='large--btn'>
            Cancelar
          </Button>
        </div>
      </div>
      <footer className='register-footerCopyRights'> &copy; PinPlay </footer>
    </div>
  );
};
