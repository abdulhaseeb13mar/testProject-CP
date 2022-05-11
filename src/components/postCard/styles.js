import { styled, Card } from "@mui/material";

export const OuterContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "80%",
}));

export const CardStyled = styled(Card)(({ theme }) => ({
  margin: "20px 0px",
  borderRadius: 10,
  width: "100%",
}));
