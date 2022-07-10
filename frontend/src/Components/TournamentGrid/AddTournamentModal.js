import {
  TextField,
  Dialog,
  InputAdornment,
} from "@mui/material";
import {
  ModalFrame, Content, Form, ModalHeader,
  Title, TitleText, FrameX, X, NameInput, 
  PlayersInput, Section1, CategoryInput,
  Section2, LocationInput, Photo, PhotoInput,
  ModalFooter, Buttons, CancelButton,
  Cancel, ButtonOutlined,
} from "./ModalElements"
import Stack from "@mui/material/Stack";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import CloudUploadOutlinedIcon from "@mui/icons-material/CloudUploadOutlined";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import Mixpanel from "../../services/mixpanel";


const AddTournamentModal = (props) => {
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
  const [players, setPlayers] = useState(2);
  const [validPlayers, setValidPlayers] = useState(true);
  const [category, setCategory] = useState(null);
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");
  const [validForm, setValidForm] = useState(false);
  const userData = useSelector((state) => state.user);

  const handleDateChange = (newValue) => {
    setDate(newValue);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePlayersChange = (event) => {
    validatePlayers(event.target.value);
    setPlayers(event.target.value);
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
    formData.append("maxPlayers", players);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_LOCALHOST}tournaments`,
        {
          headers: {
            Authorization: `Bearer ${userData.user.tokenSesion}`,
          },
          method: "POST",
          body: formData,
        }
      );
      if (response.status !== 200) {
        Swal.fire({
          icon: "error",
          title: `Error ${response.status}`,
          text: `Ups! Algo salió mal`,
          confirmButtonColor: "#3673be",
        });
      } else {
        const json = await response.json();
        if (json) {
          Swal.fire({
            icon: "success",
            title: json.message,
            confirmButtonColor: "#3673be",
          });
          Mixpanel.track(Mixpanel.TYPES.CREATE_TOURNEY, {
            name: name,
            category: category,
          });
        }
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Ups! Ha ocurrido un error",
        text: "Intente de nuevo",
        confirmButtonColor: "#3673be",
      });
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
  };

  const validateForm = () => {
    if (
      name.length > 0 &&
      category !== null &&
      location.length > 0 &&
      validPlayers
    ) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  };

  const validatePlayers = (playerCount) => {
    if (playerCount > 1 && playerCount <= 256) {
      setValidPlayers(true);
    } else {
      setValidPlayers(false);
    }
  };

  useEffect(() => {
    validateForm();
  }, [name, category, location, players]);

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
            <PlayersInput
              variant="standard"
              size="small"
              label={`Jugadores Máximos`}
              value={players}
              type="number"
              onChange={handlePlayersChange}
              error={!validPlayers}
            />
            <Section1>
              <CategoryInput
                value={category}
                onChange={handleCategoryChange}
                options={options}
                renderInput={(params) => (
                  <TextField {...params} variant="standard" label="Categoría" />
                )}
              />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Stack spacing={3} alignItems="stretch" sx={{ width: "100%" }}>
                  <DesktopDatePicker
                    label="Fecha del Torneo"
                    inputFormat="dd/MM/yyyy"
                    value={date}
                    onChange={handleDateChange}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        sx={{
                          width: "100%",
                          marginRight: "30px",
                          "@media (max-width: 600px)": { marginRight: "0px" },
                        }}
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
