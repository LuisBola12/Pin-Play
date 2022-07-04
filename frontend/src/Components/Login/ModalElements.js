import {
  TextField,
  Button,
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
  width: `500px`,
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

export const Form1 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px 10px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  height: `160px`,
  margin: `0px`,
});

export const Form2 = styled("div")({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `column`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px 10px`,
  boxSizing: `border-box`,
  alignSelf: `stretch`,
  height: `290px`,
  margin: `0px`,
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
}));

export const FrameX = styled("div")({
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

export const X = styled("img")({
  height: `12px`,
  width: `12px`,
  margin: `0px`,
});

export const Inputs = styled(TextField)({
  alignSelf: `stretch`,
  margin: `30px 0px 0px 0px`,
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
  color: `#0077b6`,
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
});


export const ErrorMsg = styled("div")(({ theme }) => ({
  textAlign: `left`,
  whiteSpace: `pre-wrap`,
  color: `red`,
  fontStyle: `normal`,
  fontFamily: `Heebo`,
  fontSize: `14px`,
  letterSpacing: `0px`,
  textDecoration: `none`,
  textTransform: `none`,
  alignSelf: `stretch`,
  margin: `30px 0px 0px 0px`,
}));