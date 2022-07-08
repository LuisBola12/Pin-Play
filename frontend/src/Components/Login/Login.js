
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import { React, useState } from 'react';
import { Button } from '../Button/Button';
import AddLoginEmailModal from './AddLoginEmailModal'
import './LoginStyle.scss';
import { postLogin } from '../../Slices/user/requests/postLogin';
import { Footer } from '../Footer/Footer';
import { resetErrorMsg } from '../../Slices/user/userSlice';

export const LoginComp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const userIsLoggedIn = useSelector((state) => state.user.userIsLoggedIn);
  const errorMessage = useSelector((state) => state.user.errorMessage);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleCancel = () => {
    dispatch(resetErrorMsg());
    navigate(-1);
  };
  const handleRegister = () => {
    navigate('/registrarse');
  };

  const logInBtn = async () => {
    dispatch(postLogin({ email, password }));
  };

  const handleForgotPassword = () => {
    setIsOpen(true)
  }

  return userIsLoggedIn ? (
    <Navigate to='/' />
  ) : (
    <div className='logIn-page'>
      <AddLoginEmailModal isOpen={isOpen} setIsOpen={setIsOpen}/>
      <div className='logIn-AppName-Media'>PinPlay</div>
      <div className='logIn-logo-box'>
        <div className='logIn-logo-AppName'>
          <div className='logIn-AppName'>PinPlay</div>
        </div>
        <p className='logIn-text'>  {`PinPlay te ayudara a encontrar torneos a lo 
                                      largo de la GAM en los que vas a poder participar 
                                      y acumular puntos. `}
        </p>
      </div>
      <div className='logIn-box'>       
        <div className='login-animated-input-email'>
          <input 
            type='text' 
            id='email_login' 
            className='login-animated-input-email__input' 
            value={email}
            maxLength={50}
            onChange={(e) => {setEmail(e.target.value);}}
            autoComplete='off' 
            placeholder=' '/>
          <label htmlFor='email_login' className='login-animated-input-email__label'> Correo <span className='req'>*</span> </label>
        </div>

        <div className='login-animated-input-email'>
          <input 
            type='password' 
            id='password_login' 
            className='login-animated-input-email__input' 
            value={password}
            maxLength={20}
            onChange={(e) => {setPassword(e.target.value);}}
            autoComplete='off' 
            placeholder=' '/>
          <label htmlFor='password_login' className='login-animated-input-email__label'> Contraseña <span className='req'>*</span> </label>
        </div>
           
        <div className='logIn-btn-box'>
          <Button onClick={logInBtn} buttonStyle="btn--logIn--logIn" buttonSize='extra--large--btn'>
            Iniciar Sesion
          </Button>
          <div>
            {
              errorMessage && (
                <span className='logIn-error-message' >{errorMessage}</span>
              )
            }
          </div>
          <div className='logIn-forgetpassword-box'>
            <Button buttonType="btn--t" onClick={handleForgotPassword} buttonStyle="btn--transparent" buttonSize='medium--btn'>¿Olvidaste tu contraseña?</Button>
          </div>
          <Button onClick={handleRegister} buttonStyle="btn--register" buttonSize='extra--large--btn'>
            Registrarse
          </Button>
          <Button onClick={handleCancel} buttonStyle="btn--cancel" buttonSize="extra--large--btn">
            Cancelar
          </Button>
        </div>
      </div>
      <Footer color={'white'} position={'absolute'}></Footer>
    </div>
  );
};
