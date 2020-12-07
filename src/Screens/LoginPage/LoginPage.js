import React from "react";
import { LoginContainer, FormStyled } from "./styles";
import { ThemeProvider } from "@material-ui/core/styles";
import Logo from "../../img/logo-future-eats-invert.png";

// MATERIAL UI - IMPORTS
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import theme from "../../constants/theme";
import { Button } from "@material-ui/core";

function LoginPage() {
  return (
    <ThemeProvider theme={theme}>
      <LoginContainer>
        <img src={Logo} />
        <br />
        <Typography align="center" component="h1" variant="h5">
          Entrar
        </Typography>
        <FormStyled>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <br />
          <Button color="primary" type="submit" fullWidth variant="contained">
            Login
          </Button>
          <Grid container>
            <Grid item>
              <br />
              <Link align="center" href="#" variant="body2">
                {"Não possui cadastro? Clique aqui."}
              </Link>
            </Grid>
          </Grid>
        </FormStyled>
      </LoginContainer>
    </ThemeProvider>
  );
}

export default LoginPage;
