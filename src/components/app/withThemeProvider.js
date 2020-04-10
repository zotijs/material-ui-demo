import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useDarkMode } from "libararies/theme";

const withThemeProvider = (Component) => (...props) => {
  const { isDarkMode, setIsDarkMode, toggleDarkMode } = useDarkMode();

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: isDarkMode ? "dark" : "light",
        },
      }),
    [isDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component
        {...props}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        toggleDarkMode={toggleDarkMode}
      />
    </ThemeProvider>
  );
};

export default withThemeProvider;
