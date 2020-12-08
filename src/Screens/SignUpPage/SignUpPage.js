import React from "react";
import { SignupContainer, FormStyled } from "./styles";
import Logo from "../../img/logo-future-eats-invert.png";
import useForm from "../../hooks/useForm";
import axios from "axios";
import { useHistory } from "react-router";

// MATERIAL UI - IMPORTS
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../constants/theme";

function SignupPage() {
  const history = useHistory();
  const [form, onChange] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const handleSignup = async (event) => {
    event.preventDefault();

    const body = {
      name: form.nome,
      email: form.email,
      cpf: form.cpf,
      password: form.senha,
    };

    try {
      const response = await axios.post(
        `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/signup`,
        body
      );

      localStorage.setItem("token", response.data.token);

      history.push("/signup/address");
    } catch (error) {
      alert("Cadastro falhou, tente novamente.");
      console.error(error);
    }
  };

  const goToLoginPage = () => {
    history.push("/login");
  };

  return (
    <ThemeProvider theme={theme}>
      <SignupContainer>
        <img src={Logo} alt="logo" />
        <br />
        <Typography align="center" component="h1" variant="h5">
          Cadastrar
        </Typography>
        <FormStyled>
          <TextField
            onChange={onChange}
            variant="outlined"
            margin="normal"
            fullWidth
            id="nome"
            label="Nome"
            name="nome"
            value={form.nome}
            required
          />
          <TextField
            onChange={onChange}
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            value={form.email}
            required
          />
          <TextField
            inputProps={{ pattern: "[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}" }}
            onChange={onChange}
            variant="outlined"
            margin="normal"
            fullWidth
            id="cpf"
            label="CPF"
            name="cpf"
            value={form.cpf}
            required
          />
          <TextField
            onChange={onChange}
            variant="outlined"
            margin="normal"
            fullWidth
            name="senha"
            label="Senha"
            type="password"
            id="senha"
            value={form.senha}
            required
          />
          <br />
          <Button
            onClick={handleSignup}
            color="primary"
            fullWidth
            variant="contained"
          >
            Criar
          </Button>
          <Grid container>
            <Grid item>
              <br />
              <Link align="center" onClick={goToLoginPage} variant="body2">
                {"Já possui cadastro? Clique aqui."}
              </Link>
            </Grid>
          </Grid>
        </FormStyled>
      </SignupContainer>
    </ThemeProvider>
  );
}

export default SignupPage;
