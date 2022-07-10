import {
  Dialog,
} from "@mui/material";
import { useState, useEffect } from "react";
import {
  ModalFrame,
  Content,
  Form1,
  Form2,
  ModalHeader,
  Title,
  TitleText,
  FrameX,
  X,
  Inputs,
  ModalFooter,
  Buttons,
  CancelButton,
  Cancel,
  ButtonOutlined,
  ErrorMsg
} from "./ModalElements"
import { validateEmail } from "../../Validate";
import Mixpanel from "../../services/mixpanel";
import Swal from 'sweetalert2';

const AddLoginEmailModal = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");
  const [validForm1, setValidForm1] = useState(false);
  const [validForm2, setValidForm2] = useState(false);
  const [verifyEmail, setVerifyEmail] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmitEmail = async (event) => {
    event.preventDefault();
    const data = {
      email: email,
    };
    const dataSend = JSON.stringify(data)
    const response = await fetch(`${process.env.REACT_APP_BACKEND_LOCALHOST}recoverPassword`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: dataSend,
    })
    if(response.status !== 200){
      const responseData = await response.json()
      setErrorMessage(responseData.errorMsg);
      setVerifyEmail(undefined);
    }else{
      Mixpanel.track(Mixpanel.TYPES.FORGET_PASSWORD,{email});
      props.setIsOpen(false);
      Swal.fire({
        icon: 'success',
        title: "Correo Enviado!",
        text: "Se te ha enviado un correo con un código de verificación!",
        confirmButtonColor: '#3673be',
      }).then((result) => {
        if (result.isConfirmed) {
          setErrorMessage("");
          props.setIsOpen(true);
          setVerifyEmail(true);
        }
      })
    }
  };

  const handleSubmitRecovery = async (event) => {
    event.preventDefault();
    const data = {
      email: email,
      password: password,
      recoveryCodeRecv: code
    };
    const dataSend = JSON.stringify(data)
    const response = await fetch(`${process.env.REACT_APP_BACKEND_LOCALHOST}resetPassword`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: dataSend,
    })
    if(response.status !== 200){
      const responseData = await response.json()
      setErrorMessage(responseData.errorMsg)
    }else{
      props.setIsOpen(false);
      setEmail("");
      setPassword("");
      setCode("");
      setErrorMessage("");
      Swal.fire({
        icon: 'success',
        text: "Tu Contraseña ha sido cambiada correctamente!",
        confirmButtonColor: '#3673be',
      })
    }
  };

  const handleClose = () => {
    props.setIsOpen(false);
    setEmail("");
    setPassword("");
    setCode("");
    setErrorMessage("");
    setVerifyEmail(undefined);
  }

  const validateFormEmail = () => {
    if (email.length > 0 && validateEmail(email)) {
      setValidForm1(true);
    } else {
      setValidForm1(false);
    }
  }  

  const validateFormRecoveryPassword = () => {
    if (code.length > 0) {
      setValidForm2(true);
    } else {
      setValidForm2(false);
    }
  }

  useEffect(() => {
    validateFormEmail();
    validateFormRecoveryPassword();
  } , [email, code, password]);
  
  return (
    <>
    {!verifyEmail ? (
      <Dialog open={props.isOpen} onClose={handleClose}>
      <ModalFrame>
        <Content>
          <Form1>
            <ModalHeader>
              <Title>
                <TitleText>{`Ingrese un correo`}</TitleText>
              </Title>
              <FrameX onClick={handleClose}>
                <X src={"/x.png"} alt={"x"} />
              </FrameX>
            </ModalHeader>
            <Inputs
              variant="standard"
              size="small"
              label={`Correo`}
              placeholder= 'example@test.ex'
              value={email}
              onChange={(e) => {setEmail(e.target.value);}}
            />
            {
              errorMessage && (<ErrorMsg>{`*${errorMessage}*`}</ErrorMsg>)
            }
          </Form1>
        </Content>
        <ModalFooter>
          <Buttons>
            <CancelButton onClick={handleClose}>
              <Cancel>{`Cancelar`}</Cancel>
            </CancelButton>
            <ButtonOutlined
              variant="contained"
              size="large"
              type="submit"
              onClick={handleSubmitEmail}
              sx={{ backgroundColor: `#0077b6` }}
              disabled={!validForm1}
            >
              Siguiente
            </ButtonOutlined>
          </Buttons>
        </ModalFooter>
      </ModalFrame>
    </Dialog>
    ) : (
      <Dialog open={props.isOpen} onClose={handleClose}>
      <ModalFrame>
        <Content>
          <Form2>
            <ModalHeader>
              <Title>
                <TitleText>{`Cambio de Contraseña`}</TitleText>
              </Title>
              <FrameX onClick={handleClose}>
                <X src={"/x.png"} alt={"x"} />
              </FrameX>
            </ModalHeader>
            <Inputs
              variant="standard"
              label={`Correo`}
              size="small"
              value={email}
              disabled
            />
            <Inputs
            placeholder=""
              variant="standard"
              size="small"
              label={`Codigo`}
              value={code}
              onChange={(e) => {setCode(e.target.value);}}
            />
            <Inputs
            placeholder=""
              variant="standard"
              type="password"
              size="small"
              label={`Nueva Contraseña`}
              value={password}
              onChange={(e) => {setPassword(e.target.value);}}
            />
            {
              errorMessage && (<ErrorMsg>{`*${errorMessage}*`}</ErrorMsg>)
            }
          </Form2>
        </Content>
        <ModalFooter>
          <Buttons>
            <CancelButton onClick={handleClose}>
              <Cancel>{`Cancelar`}</Cancel>
            </CancelButton>
            <ButtonOutlined
              variant="contained"
              size="large"
              type="submit"
              onClick={handleSubmitRecovery}
              sx={{ backgroundColor: `#0077b6` }}
              disabled={!validForm2}
            >
              Siguiente
            </ButtonOutlined>
          </Buttons>
        </ModalFooter>
      </ModalFrame>
    </Dialog>
    )}

  </>
    
  );
}

export default AddLoginEmailModal;
