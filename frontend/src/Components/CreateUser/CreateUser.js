import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route, useNavigate } from 'react-router-dom';
import { postLogin } from '../../Slices/user/requests/postLogin';
import { resetErrorMsg } from '../../Slices/user/userSlice';
import { validAnEntity } from '../../Utils/validAnEntity';
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
    const user = await validAnEntity('users/',formValues.email_register);
    const employee = await validAnEntity('employer/', formValues.id_register);

    if (user === true && employee === true) {
      console.log('prubea');
      let string = JSON.stringify(formValues);

      string = JSON.stringify({
        Cedula: formValues.id_register,
        Nombre: formValues.name_register,
        Apellido1: formValues.lastname1_register,
        Apellido2: formValues.lastname2_register,
        Telefono: formValues.phoneNumber_register,
        Email: formValues.email_register,
        Contrasenia: formValues.password_register,
        Roles: 'admin'
      });

    post(string);
    dispatch(postLogin({
      email: formValues.email_register, 
      password: formValues.password_register
    }));
    navigate('/projectAdmin');
    }else{
      setIsSubmitting(false);
      alert('These user alredy exists.');
    }
  };

  const { formValues, handleInputChange, handleSubmit, setIsSubmitting, errors } = useForm(sendToDatabase, validate);

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
                className='register-row__input' 
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
                id='lastname1_register'
                className='register-row__input' 
                value={formValues.lastname1_register || ''} 
                maxLength={15} 
                onChange={handleInputChange} 
                autoComplete='off' 
                placeholder=' '/>
              <label htmlFor='lastname1_register' className='register-row__label'>Apellidos<span className='req'>*</span></label>
            </div>
            <div>
              <label className='register-error' id='register_error_name'>{errors.lastname1_register} </label>
            </div>
          </div>         
        </div>

        <div className='register-form-email'>
          <div>
            <div className='register-row-email'>
              <input 
                type='text' 
                id='email_register' 
                className='register-row-email__input' 
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
                className='register-row-email__input' 
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
            <div className='register-row-file'>
              <label htmlFor='id_register' className='register-label-file'>
              <input 
                type='file' 
                id='id_register' 
                className='register-input-file' 
                value={formValues.id_register || ''} 
                maxLength={15} 
                onChange={handleInputChange} 
                autoComplete='off' 
                placeholder=' '/>
                { parseRoute(formValues.id_register) ? 
                (<span className='register-name-file'>{ parseRoute(formValues.id_register)}</span> ) : 
                (<label>Foto De Perfil</label>) }
              </label>
              {/* <label htmlFor='id_register' className='register-row__label'> Foto De Perfil <span className='req'>*</span></label> */}
            </div>
            <div>
              <label className='register-error' id='register_error_ID'>{errors.id_register}</label>
            </div>
          </div>
          <div>
            <div className='register-row'>
              <input 
                type='date' 
                id='phoneNumber_register' 
                className='register-row__input'
                value={formValues.phoneNumber_register || ''}
                maxLength={8}
                onChange={handleInputChange}
                autoComplete='off' 
                placeholder=' '/>
              <label htmlFor='phoneNumber_register' className='register-row__label'> Fecha De Nacimiento <span className='req'>*</span></label>
            </div>
            <div>
              <label className='register-error' id='register_error_phoneNumber'>{errors.phoneNumber_register}</label>
            </div>
          </div>
        </div>
        <div className='register-btn-box'>
          <Button onClick={handleSubmit} buttonStyle="btn--register" buttonSize='large--btn'>
            Register
          </Button>
          <Button onClick={handleCancel} buttonStyle="btn--cancel" buttonSize='large--btn'>
            Cancel
          </Button>
        </div>
      </div>
      <footer className='register-footerCopyRights'> &copy; PinPlay </footer>
    </div>
  );
};
