import {
  TextField,
  Button,
  Dialog,
  Autocomplete,
  InputAdornment,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import Swal from 'sweetalert2'

const ModalFrame = styled("div")(({ theme }) => ({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  boxShadow: `0px 1px 18px rgba(0, 0, 0, 0.12), 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 3px 5px rgba(0, 0, 0, 0.2)`,
  borderRadius: `10px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: `500px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
}));

const Content = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `40px 40px 15px 40px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Form = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px 10px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  height: `363px`,
  margin: `0px`,
});

const ModalHeader = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
});

const Title = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  flexGrow: `1`,
  margin: `0px`,
});

const TitleText = styled("div")(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `#0077b6`,
  fontStyle: `normal`,
  fontFamily: `Heebo`,
  fontWeight: `700`,
  fontSize: `24px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const FrameX = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
  cursor: `pointer`,
});

const X = styled("img")({
  height: `12px`,
  width: `12px`,
  margin: `0px`,
});

const NameInput = styled(TextField)({
  alignSelf: `stretch`,
  margin: `30px 0px 0px 0px`,
});

const Section1 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  height: `53px`,
  width: `410px`,
  margin: `30px 0px 0px 0px`,
});

const CategoryInput = styled(Autocomplete)({
  width: `185px`,
  marginRight: `30px`,
});

const Section2 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `400px`,
  margin: `30px 0px 0px 0px`,
});

const LocationInput = styled(TextField)({
  flexGrow: `1`,
  margin: `0px`,
});

const Photo = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `400px`,
  margin: `30px 0px 0px 0px`,
});

const PhotoInput = styled(TextField)({
  flexGrow: `1`,
  margin: `0px`,
});

const ModalFooter = styled("div")(({ theme }) => ({
  backgroundColor: `rgba(0, 0, 0, 0.04)`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `center`,
  padding: `20px 40px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  margin: `0px`,
}));

const Buttons = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `center`,
  padding: `0px`,
  boxSizing: `border-box`,
  flexGrow: `1`,
  margin: `0px`,
});

const CancelButton = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
  cursor: `pointer`,
});

const Cancel = styled("div")(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `#3673be`,
  fontStyle: `normal`,
  fontFamily: `Roboto`,
  fontWeight: `400`,
  fontSize: `16px`,
  letterSpacing: `0.15000000596046448px`,
  textDecoration: `none`,
  lineHeight: `150%`,
  textTransform: `none`,
  margin: `0px`,
}));

const ButtonOutlined = styled(Button)({
  margin: `0px 0px 0px 30px`,
});

function AddTournamentModal(props) {
  const options = [
    "Primera",
    "Segunda",
    "Tercera",
    "Cuarta",
    "Quinta",
    "Sexta",
  ];
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState("");
  const [category, setCategory] = useState(null);
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [validForm, setValidForm] = useState(false);
  const token = useSelector((state) => state.user.user.tokenSesion);

  const handleDateChange = (newValue) => {
    setDate(newValue);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleCategoryChange = (event, value) => {
    setCategory(value);
  };
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };
  const handleImageChange = (event) => {
    setImage(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const image = fileInput.current.files[0];
    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("category", category);
    formData.append("date", date.toString());
    formData.append("location", location);
    formData.append("maxPlayers", 24);
    try {
    const response = await fetch(`${process.env.REACT_APP_BACKEND_LOCALHOST}tournaments`, {
      // SEND TOKEN obtained from sessionStorage
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: formData,
    });
    if (response.status !== 200) {
      Swal.fire({
        icon: 'error',
        title: `Error ${response.status}`,
        text: `Ups! Algo salió mal`,
        confirmButtonColor: '#3673be',
      })
    } else {
      const json = await response.json(); 
      if (json) {
        Swal.fire({
          icon: 'success',
          title: json.message,
          confirmButtonColor: '#3673be',
        })
      }
    }
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Ups! Ha ocurrido un error',
      text: 'Intente de nuevo',
      confirmButtonColor: '#3673be',
    })
  }
  handleClose();
  };

  const handleClose = () => {
    props.setIsOpen(false);
    setName("");
    setCategory(null);
    setLocation("");
    setImage("");
    setDate(new Date());
  }

  const validateForm = () => {
    if (name.length > 0 && category !== null && location.length > 0) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }

  useEffect(() => {
    validateForm();
  } , [name, category, location]);
  
  const fileInput = useRef(null);
  return (
    <Dialog open={props.isOpen} onClose={handleClose}>
      <ModalFrame>
        <Content>
          <Form>
            <ModalHeader>
              <Title>
                <TitleText>{`Nuevo Torneo`}</TitleText>
              </Title>
              <FrameX onClick={handleClose}>
                <X src={"/x.png"} alt={"x"} />
              </FrameX>
            </ModalHeader>
            <NameInput
              variant="standard"
              size="small"
              label={`Nombre`}
              value={name}
              onChange={handleNameChange}
            />
            <Section1>
              <CategoryInput
                value={category}
                onChange={handleCategoryChange}
                options={options}
                sx={{ width: 185 }}
                renderInput={(params) => (
                  <TextField {...params} variant="standard" label="Categoría" />
                )}
              />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3} alignItems="stretch">
                  <DesktopDatePicker
                    label="Fecha del Torneo"
                    inputFormat="dd/MM/yyyy"
                    value={date}
                    onChange={handleDateChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        sx={{ width: 185 }}
                        size="medium"
                      />
                    )}
                  />
                </Stack>
              </LocalizationProvider>
            </Section1>
            <Section2>
              <LocationInput
                variant="standard"
                size="small"
                label={`Ubicación`}
                value={location}
                onChange={handleLocationChange}
              />
            </Section2>
            <Photo>
              <input
                type="file"
                ref={fileInput}
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              <PhotoInput
                variant="standard"
                value={image}
                size="small"
                label={`Foto`}
                onClick={() => fileInput.current.click()}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <CloudUploadOutlinedIcon
                        sx={{
                          cursor: "pointer",
                          margin: "0px 0px 0px 20px",
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </Photo>
          </Form>
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
              onClick={handleSubmit}
              sx={{ backgroundColor: `#3673be` }}
              disabled={!validForm}
            >
              CREAR TORNEO
            </ButtonOutlined>
          </Buttons>
        </ModalFooter>
      </ModalFrame>
    </Dialog>
  );
}

export default AddTournamentModal;
