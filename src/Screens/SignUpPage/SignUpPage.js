import React from "react";
import { ButtonStyled, ContainerStyled, FormStyled } from "./styles";

// MATERIAL UI - IMPORTS
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

function SignupPage() {
  return (
    <div>
      <Typography component="h1" variant="h5">
        Cadastrar
      </Typography>
      <form>
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

        <ButtonStyled type="submit" fullWidth variant="contained">
          Criar
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

export default SignupPage;
