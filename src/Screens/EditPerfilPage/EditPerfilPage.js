import React, {useState, useEffect} from "react";
import axios from 'axios';
import { EditPerfilContainer, FormStyled } from "./styles";

// MATERIAL UI - IMPORTS
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../constants/theme";

function EditPerfilPage() {

  useEffect(() => {
  }, []);

  const putUpdateProfile = () => {

    const body = {
      name: "Astrodev",
      email: "astrodev@future4.com",
      cpf: "111.111.111-13"
    };

      axios
    .put(
      `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile`,
      body,
      {
        headers: {
          auth: 
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlpkYWcyZVBHOG1zUDNkdG1vRFdrIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjExMy4xMTEuMTExLTExIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTYwNzM3NTY5Mn0.ODZDt8sX_emUKT1x-FxDcP0eWWI5z1yi5lYDTsak78s",
        },
      }
    )
    .then((response) => {
      alert("Perfil editado com sucesso")
    })
    .catch((error) => {
      alert("Erro ao editar perfil");
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <EditPerfilContainer>
        <Typography align="center" component="h1" variant="h5">
          Editar
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

          <Button onClick={putUpdateProfile()} color="primary" type="submit" fullWidth variant="contained">
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
