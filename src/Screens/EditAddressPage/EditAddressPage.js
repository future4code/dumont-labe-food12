import React, { useEffect, useState } from "react";
import axios from "axios";
import { EditAddressContainer, FormStyled } from "./styles";
import Header from "../../components/Header/Header";
import useForm from "../../hooks/useForm";

// MATERIAL UI - IMPORTS
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../constants/theme";

function EditAddressPage() {
  useEffect(() => {}, []);

  const [form, onChange] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const putAddAddress = () => {
    const body = {
      street: form.street,
      number: form.number,
      neighbourhood: form.neighbourhood,
      city: form.city,
      state: form.state,
      complement: form.complement,
    };

    const token = localStorage.getItem("token");
    axios
      .put(
        `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/address`,
        body,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        alert("Endereço cadastrado com sucesso");
      })
      .catch((error) => {
        alert("Erro ao cadastrar endereço");
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Header title={""} showBackButton />
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
            value={form.street}
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
            value={form.number}
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
            value={form.complement}
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
            value={form.neighbourhood}
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="cidade"
            label="Cidade"
            id="cidade"
            value={form.city}
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="estado"
            label="Estado"
            id="estado"
            value={form.state}
            required
          />

          <Button
            onClick={putAddAddress()}
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
      </EditAddressContainer>
    </ThemeProvider>
  );
}

export default EditAddressPage;
