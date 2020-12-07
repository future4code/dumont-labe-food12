import React from "react";
import { FormStyled, RegisterAddressContainer } from "./styles";

// MATERIAL UI - IMPORTS
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../constants/theme";
import { Button } from "@material-ui/core";

function RegisterAddressPage() {
  return (
    <RegisterAddressContainer>
      <ThemeProvider theme={theme}>
        <Typography component="h1" variant="h5">
          Meu endereço
        </Typography>
        <FormStyled>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="logradouro"
            label="Logradouro"
            name="logradouro"
            autoFocus
            margin="normal"
            required
          />
          <TextField
            variant="outlined"
            required
            fullWidth
            id="numero"
            label="Número"
            name="numero"
            autoFocus
            margin="normal"
            required
          />
          <TextField
            variant="outlined"
            required
            fullWidth
            id="complemento"
            label="Apto / Bloco"
            name="complemento"
            autoFocus
            margin="normal"
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

          <Button
            color="primary"
            margin="normal"
            type="submit"
            fullWidth
            variant="contained"
          >
            Salvar
          </Button>
        </FormStyled>
      </ThemeProvider>
    </RegisterAddressContainer>
  );
}

export default RegisterAddressPage;
