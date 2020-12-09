import React, { useState, useEffect } from "react";
import axios from "axios";
import { EditPerfilContainer, FormStyled } from "./styles";
import Header from "../../components/Header/Header";

// MATERIAL UI - IMPORTS
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../constants/theme";

function EditPerfilPage() {
  useEffect(() => {}, []);

  const putUpdateProfile = () => {
    const body = {
      name: "Astrodev",
      email: "astrodev@future4.com",
      cpf: "111.111.111-13",
    };

    const token = localStorage.getItem("token");
    axios
      .put(
        `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile`,
        body,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        alert("Perfil editado com sucesso");
      })
      .catch((error) => {
        alert("Erro ao editar perfil");
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <EditPerfilContainer>
        <Header title={"Editar"} showBackButton />
        <Typography align="center" component="h1" variant="h5">
          Editar
        </Typography>
        <FormStyled>
          <TextField
            variant="outlined"
            margin="normal"
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
            fullWidth
            id="cpf"
            label="CPF"
            name="cpf"
            autoComplete="cpf"
            autoFocus
            required
          />

          <Button
            onClick={putUpdateProfile()}
            color="primary"
            type="submit"
            fullWidth
            variant="contained"
          >
            Salvar
          </Button>
          <Grid container>
            <Grid item />
          </Grid>
        </FormStyled>
      </EditPerfilContainer>
    </ThemeProvider>
  );
}

export default EditPerfilPage;
