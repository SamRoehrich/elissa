import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import CssBaseLine from "@material-ui/core/CssBaseline";

const Theme = ({ children }) => {
  const theme = createMuiTheme({
    typography: {
      fontFamily: ["futura-pt"],
    },
    palette: {
      primary: {
        main: "#f2d0d0",
      },
      secondary: {
        main: "#022e40",
      },
      info: {
        main: "##035159",
      },
      background: {
        default: "#f2d0d0",
        paper: "#022e40",
      },
      text: {
        primary: "##025949",
        secondary: "#f27777",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseLine />
      {children}
    </ThemeProvider>
  );
};
export default Theme;
