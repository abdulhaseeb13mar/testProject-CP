import { styled, Grid, Zoom } from "@mui/material";

export const OuterGrid = styled(Grid)(({ theme }) => ({
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
}));

export const ZoomStyled = styled(Zoom)(({ theme }) => ({
  position: "absolute",
  bottom: "7vh",
  right: "4vw",
}));
