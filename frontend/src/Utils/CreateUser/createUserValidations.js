import { validateEmail, validatePassword, validateName } from '../../Validate';

const validate = (values) => {
  console.log(values)
  let errors = {};
  if(values.email_register){
    if(!validateEmail(values.email_register)){
      errors.email_register = 'You must enter a valid format for an email.';
      errors.email_registerCSS = 'register-error-input';
    }
  }else{
    errors.email_register = 'Please enter an email.';
    errors.email_registerCSS = 'register-error-input';
  }

  if(values.password_register){
    if(!validatePassword(values.password_register)){
      errors.password_register = 'Password must be 8 characters long';
      errors.password_registerCSS = 'register-error-input';
    }
  }else{
    errors.password_register = 'Please enter a password.';
    errors.password_registerCSS = 'register-error-input';
  }

  if(values.name_register){
    if(!validateName(values.name_register)){
      errors.name_register = 'Please enter a name.';
      errors.name_registerCSS = 'register-error-input';
    }
  }else{
    errors.name_register = 'Please enter a name.';
    errors.name_registerCSS = 'register-error-input';
  }
  
  if(values.lastNames_register){
    if(!validateName(values.lastNames_register)){
      errors.lastNames_register = 'Please enter your lastNames.';
      errors.lastNames_registerCSS = 'register-error-input';
    }
  }else{
    errors.lastnames_register = 'Please enter a first last name.';
    errors.lastnames_registerCSS = 'register-error-input';
  }

  if(!values.birth_date_register){
    errors.birth_date_register = 'Please enter a Birth Date.';
    errors.birth_date_registerCSS = 'register-error-input';
  }

  if(!values.image_register){
    errors.image_register = 'Please enter Profile Photo';
    errors.image_registerCSS = 'register-error-input';
  }
  return errors;
};

export default validate;