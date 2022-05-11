import { styled, Grid, Paper, InputLabel, Button } from "@mui/material";

export const OuterGrid = styled(Grid)(({ theme }) => ({
  height: "93.2vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px 0px",
  maxWidth: 600,
  minWidth: 280,
  width: "90%",
}));

export const PaperContainer = styled(Paper)(({ theme }) => ({
  width: "95%",
  padding: "20px 20px",
}));

export const InputLabelStyled = styled(InputLabel)(({ theme }) => ({
  fontWeight: "bold",
  textAlign: "left",
  marginTop: 15,
  marginBottom: 5,
}));

export const ButtonStyled = styled(Button)(({ theme }) => ({
  marginTop: 20,
  padding: "10px 0px",
  fontWeight: "bold",
  fontSize: 16.5,
}));
