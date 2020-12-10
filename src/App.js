import React from "react";
import Routers from "./route/Routers";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./constants/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routers />
    </ThemeProvider>
  );
}

export default App;
