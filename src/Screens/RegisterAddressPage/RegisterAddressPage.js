import React from "react";
import { FormStyled, RegisterAddressContainer } from "./styles";
import { useHistory } from "react-router";
import useForm from "../../hooks/useForm";
import axios from "axios";
import useProtectedPage from "../../hooks/useProtectedPage";
import Header from "../../components/Header/Header";

// MATERIAL UI - IMPORTS
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../constants/theme";
import { Button } from "@material-ui/core";

function RegisterAddressPage() {
  const history = useHistory();
  const token = localStorage.getItem("token");

  useProtectedPage();
  console.log("", token);

  const [form, onChange] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const handleAddAddress = async (event) => {
    event.preventDefault();

    const body = {
      street: form.street,
      number: form.number,
      neighbourhood: form.neighbourhood,
      city: form.city,
      state: form.state,
      complement: form.complement,
    };
    console.log("BODY", body);
    try {
      const response = await axios.put(
        `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/address`,
        body,
        {
          headers: {
            auth: token,
          },
        }
      );

      localStorage.removeItem("token");
      localStorage.setItem("token", response.user.token);

      history.push("/");
    } catch (error) {
      alert("Cadastro falhou, tente novamente.");
      console.error(error);
    }
  };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header showBackButton />
        <RegisterAddressContainer>
          <Typography component="h1" variant="h5">
            Meu endereço
          </Typography>
          <FormStyled>
            <TextField
              onChange={onChange}
              variant="outlined"
              fullWidth
              id="logradouro"
              label="Rua / Avenida"
              name="street"
              // margin="normal"
              value={form.street}
              required
            />
            <TextField
              onChange={onChange}
              variant="outlined"
              fullWidth
              id="numero"
              label="Número"
              name="number"
              type="number"
              value={form.number}
              // margin="normal"
              required
            />
            <TextField
              onChange={onChange}
              variant="outlined"
              // margin="normal"
              fullWidth
              id="bairro"
              label="Bairro"
              name="neighbourhood"
              value={form.neighbourhood}
              required
            />
            <TextField
              onChange={onChange}
              variant="outlined"
              // margin="normal"
              fullWidth
              id="cidade"
              label="Cidade"
              name="city"
              value={form.city}
              required
            />
            <TextField
              onChange={onChange}
              variant="outlined"
              // margin="normal"
              fullWidth
              id="estado"
              label="Estado"
              name="state"
              value={form.state}
              required
            />
            <TextField
              onChange={onChange}
              variant="outlined"
              fullWidth
              id="complemento"
              label="Apto / Bloco"
              name="complement"
              value={form.complement}
              // margin="normal"
            />
            <Button
              onClick={handleAddAddress}
              color="primary"
              // margin="normal"
              type="submit"
              fullWidth
              variant="contained"
            >
              Salvar
          </Button>
          </FormStyled>
        </RegisterAddressContainer>
      </ThemeProvider>
    </div>
  );
}

export default RegisterAddressPage;
