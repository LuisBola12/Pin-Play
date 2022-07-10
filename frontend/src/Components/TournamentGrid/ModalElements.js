import {
  TextField,
  Button,
  Autocomplete,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const ModalFrame = styled("div")(({ theme }) => ({
  backgroundColor: `rgba(255, 255, 255, 1)`,
  boxShadow: `0px 1px 18px rgba(0, 0, 0, 0.12), 0px 6px 10px rgba(0, 0, 0, 0.14), 0px 3px 5px rgba(0, 0, 0, 0.2)`,
  borderRadius: `10px`,
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  width: `80vw`,
  maxWidth: `500px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  overflow: `hidden`,
}));

export const Content = styled("div")({
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

export const Form = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px 10px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  marginBottom: `25px`,
});

export const ModalHeader = styled("div")({
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

export const Title = styled("div")({
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

export const TitleText = styled("div")(({ theme }) => ({
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
  "@media (max-width:450px)": {
    textAlign: `center`,
    fontSize: `20px`,
  },
}));

export const FrameX = styled("div")({
  display: `none`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-end`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  margin: `0px`,
  cursor: `pointer`,
  "@media (min-width:450px)": {
    display: `flex`,
  },
});

export const X = styled("img")({
  height: `12px`,
  width: `12px`,
  margin: `0px`,
});

export const NameInput = styled(TextField)({
  alignSelf: `stretch`,
  margin: `30px 0px 0px 0px`,
});

export const PlayersInput = styled(TextField)({
  alignSelf: `stretch`,
  margin: `30px 0px 0px 0px`,
});

export const Section1 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  // height: `53px`,
  width: `100%`,
  margin: `30px 0px 0px 0px`,
  "@media (max-width:600px)": {
    flexDirection: `column`,
    alignItems: `center`,
    justifyContent: `center`,
    rowGap: `30px`,
  },
});

export const CategoryInput = styled(Autocomplete)({
  width: `100%`,
  marginRight: `30px`,
  "@media (max-width:600px)": {
    marginRight: `0px`,
  },
});

export const Section2 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `100%`,
  margin: `30px 0px 0px 0px`,
});

export const LocationInput = styled(TextField)({
  flexGrow: `1`,
  margin: `0px`,
});

export const Photo = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
  width: `100%`,
  margin: `30px 0px 0px 0px`,
});

export const PhotoInput = styled(TextField)({
  alignSelf: `stretch`,
  flexGrow: `1`,
  margin: `0px`,
});

export const ModalFooter = styled("div")(({ theme }) => ({
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

export const Buttons = styled("div")({
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

export const CancelButton = styled("div")({
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

export const Cancel = styled("div")(({ theme }) => ({
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

export const ButtonOutlined = styled(Button)({
  margin: `0px 0px 0px 30px`,
  minWidth: `120px`,
  "@media (max-width:430px)": {
    fontSize: `12px`,
    padding: `8px`,
  },
});