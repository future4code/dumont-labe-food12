import React from "react";
import { EditPerfilContainer, FormStyled } from "./styles";

// MATERIAL UI - IMPORTS
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../constants/theme";

function EditPerfilPage() {
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

          <Button color="primary" type="submit" fullWidth variant="contained">
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
