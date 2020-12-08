import React from "react";
import { EditAddressContainer, FormStyled } from "./styles";

// MATERIAL UI - IMPORTS
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../constants/theme";

function EditAddressPage() {
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
            required
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
            required
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
            required
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
            required
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
            required
            fullWidth
            name="cidade"
            label="Cidade"
            id="cidade"
            required
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="estado"
            label="Estado"
            id="estado"
            required
          />

          <Button color="primary" type="submit" fullWidth variant="contained">
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
