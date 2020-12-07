import React from "react";
import { ButtonStyled, ContainerStyled, FormStyled } from "./styles";

// MATERIAL UI - IMPORTS
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

function RegisterAddressPage() {
  return (
    <div>
      <Typography component="h1" variant="h5">
        Meu endereço
      </Typography>
      <form>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="logradouro"
          label="Logradouro"
          name="logradouro"
          autoFocus
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="numero"
          label="Número"
          name="numero"
          autoFocus
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="complemento"
          label="Apto / Bloco"
          name="complemento"
          autoFocus
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="bairro"
          label="Bairro"
          name="bairro"
          autoFocus
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="cidade"
          label="Cidade"
          name="cidade"
          autoFocus
          required
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="estado"
          label="Estado"
          name="estado"
          autoFocus
          required
        />

        <ButtonStyled type="submit" fullWidth variant="contained">
          Salvar
        </ButtonStyled>
      </form>
    </div>
  );
}

export default RegisterAddressPage;
