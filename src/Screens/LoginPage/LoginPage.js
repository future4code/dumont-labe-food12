import React from "react";
import { ButtonStyled, ContainerStyled, FormStyled } from "./styles";

// MATERIAL UI - IMPORTS
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function LoginPage() {
  return (
    <div>
      <Typography component="h1" variant="h5">
        Entrar
      </Typography>
      <form>
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

        <ButtonStyled type="submit" fullWidth variant="contained">
          Login
        </ButtonStyled>
        <Grid container>
          <Grid item>
            <Link align="center" href="#" variant="body2">
              {"Não possui cadastro? Clique aqui."}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default LoginPage;
