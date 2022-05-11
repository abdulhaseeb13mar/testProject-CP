import { styled, Grid } from "@mui/material";

export const OuterGrid = styled(Grid)(({ theme }) => ({
  height: "93.2vh",
  overflowY: "scroll",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "20px 0px",
  maxWidth: 600,
  minWidth: 280,
  width: "90%",
}));
