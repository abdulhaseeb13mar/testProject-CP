import {
  styled,
  Grid,
  Typography,
  FormControl,
  FormLabel,
  Button,
} from "@mui/material";

export const OuterGrid = styled(Grid)(({ theme }) => ({
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
}));

export const ChildGrid = styled(Grid)(({ theme }) => ({
  padding: "20px 40px",
  borderRadius: 10,
  maxWidth: 500,
  minWidth: 280,
  width: "90%",
}));

export const Heading = styled(Typography)(({ theme }) => ({
  marginBottom: 40,
  textAlign: "center",
  fontWeight: "bold",
}));

export const FormControlStyled = styled(FormControl)(({ theme }) => ({
  margin: "15px 0px",
}));

export const FormLabelStyled = styled(FormLabel)(({ theme }) => ({
  fontWeight: "bold",
}));

export const ButtonStyled = styled(Button)(({ theme }) => ({
  marginTop: 20,
  padding: "10px 0px",
  fontWeight: "bold",
  fontSize: 16.5,
}));
