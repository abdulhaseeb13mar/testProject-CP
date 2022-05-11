import { createTheme, ThemeProvider } from "@mui/material/styles";

const getColorThemes = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          background: {},
          text: {},
          primary: {
            main: "#442445",
          },
        }
      : {}),
  },
  typography: {
    fontFamily: "Poppins",
  },
});

const Theme = ({ children }) => {
  const theme = createTheme(getColorThemes("light"));

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
