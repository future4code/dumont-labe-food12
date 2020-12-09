import React, {useEffect, useState} from "react";
import axios from 'axios';
import { EditAddressContainer, FormStyled } from "./styles";

// MATERIAL UI - IMPORTS
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../constants/theme";

function EditAddressPage() {

  useEffect(() => {
  }, []);

  const putAddAddress = () => {

    const body = {
      street: "R. Afonso Braz",
      number: "177",
      neighbourhood: "Vila N. Conceição",
      city: "São Paulo",
      state: "SP",
      complement: "71"
    };

      axios
    .put(
      `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/address`,
      body,
      {
        headers: {
          auth: 
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlpkYWcyZVBHOG1zUDNkdG1vRFdrIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjExMy4xMTEuMTExLTExIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTYwNzM3NTY5Mn0.ODZDt8sX_emUKT1x-FxDcP0eWWI5z1yi5lYDTsak78s",
        },
      }
    )
    .then((response) => {
      alert("Endereço cadastrado com sucesso")
    })
    .catch((error) => {
      alert("Erro ao cadastrar endereço");
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <EditAddressContainer>
        <Typography align="center" component="h1" variant="h5">
          Endereço
        </Typography>
        <FormStyled>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="endereco"
            label="Endereço"
            name="endereco"
            autoComplete="endereco"
            autoFocus
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="numero"
            label="Número"
            name="numero"
            autoComplete="numero"
            autoFocus
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="complemento"
            label="Complemento"
            name="complemento"
            autoComplete="complemento"
            autoFocus
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="bairro"
            label="Bairro"
            id="bairro"
            autoComplete="bairro"
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="cidade"
            label="Cidade"
            id="cidade"
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="estado"
            label="Estado"
            id="estado"
            required
          />

          <Button onClick={putAddAddress()} color="primary" type="submit" fullWidth variant="contained">
            Salvar
          </Button>
          <Grid container>
            <Grid item />
          </Grid>
        </FormStyled>
      </EditAddressContainer>
    </ThemeProvider>
  );
}

export default EditAddressPage;
