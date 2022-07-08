import { validateEmail, validatePassword, validateName } from '../../Validate';

const validate = (values) => {
  let errors = {};
  if(values.email_register){
    if(!validateEmail(values.email_register)){
      errors.email_register = 'Formato del correo: example@example.example';
      errors.email_registerCSS = 'register-error-input';
    }
  }else{
    errors.email_register = 'Por favor ingresa un correo.';
    errors.email_registerCSS = 'register-error-input';
  }

  if(values.password_register){
    if(!validatePassword(values.password_register)){
      errors.password_register = 'Contraseña debe tener al menos 1 letra, 1 número (Mínimo 6 caracteres).';
      errors.password_registerCSS = 'register-error-input';
    }
  }else{
    errors.password_register = 'Por favor ingresa una contraseña.';
    errors.password_registerCSS = 'register-error-input';
  }

  if(values.name_register){
    if(!validateName(values.name_register)){
      errors.name_register = 'Solo se permiten letras.';
      errors.name_registerCSS = 'register-error-input';
    }
  }else{
    errors.name_register = 'Por favor ingresa un nombre.';
    errors.name_registerCSS = 'register-error-input';
  }
  
  if(values.lastname1_register){
    if(!validateName(values.lastname1_register)){
      errors.lastname1_register = 'Solo se permiten letras.';
      errors.lastname1_registerCSS = 'register-error-input';
    }
  }else{
    errors.lastname1_register = 'Por favor ingresa un apellido.';
    errors.lastname1_registerCSS = 'register-error-input';
  }

  if(values.lastname2_register){
    if(!validateName(values.lastname2_register)){
      errors.lastname2_register = 'Solo se permiten letras.';
      errors.lastname2_registerCSS = 'register-error-input';
    }
  }else{
    errors.lastname2_register = 'Por favor ingresa un apellido.';
    errors.lastname2_registerCSS = 'register-error-input';
  }

  if(values.licenseNumber_register){
    if(isNaN(parseInt(values.licenseNumber_register))){
      errors.licenseNumber_register = 'Solo se permiten numeros';
      errors.licenseNumber_registerCSS = 'register-error-input';
    }
  }else{
    errors.licenseNumber_register = 'Por favor ingresa un carnet.';
    errors.licenseNumber_registerCSS = 'register-error-input';
  }
  if(values.genre_register){
    if(!validateName(values.genre_register)){
      errors.genre_register = 'Solo se permiten letras';
      errors.genre_registerCSS = 'register-error-input';
    }
  }
  if(values.age_register){
    if(isNaN(parseInt(values.age_register))){
      errors.age_register = 'Solo se permiten numeros';
      errors.age_registerCSS = 'register-error-input';
    }
  }
  return errors;
};

export default validate;