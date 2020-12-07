import React from "react";
import { SignupContainer, FormStyled } from "./styles";
import Logo from "../../img/logo-future-eats-invert.png";

// MATERIAL UI - IMPORTS
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../constants/theme";

function SignupPage() {
  return (
    <ThemeProvider theme={theme}>
      <SignupContainer>
        <img src={Logo} />
        <br />
        <Typography align="center" component="h1" variant="h5">
          Cadastrar
        </Typography>
        <FormStyled>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="nome"
            label="Nome"
            name="nome"
            autoComplete="nome"
            autoFocus
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            autoFocus
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="cpf"
            label="CPF"
            name="cpf"
            autoComplete="cpf"
            autoFocus
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="senha"
            label="Senha"
            type="password"
            id="senha"
            autoComplete="current-password"
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmarSenha"
            label="Confirme a senha anterior"
            type="password"
            id="confirmarSenha"
            required
          />
          <br />
          <Button color="primary" type="submit" fullWidth variant="contained">
            Criar
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
      </SignupContainer>
    </ThemeProvider>
  );
}

export default SignupPage;
