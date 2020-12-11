import React, { useEffect, useState } from "react";
import axios from "axios";
import { EditAddressContainer, FormStyled } from "./styles";
import Header from "../../components/Header/Header";
import useForm from "../../hooks/useForm";
import { useHistory } from "react-router";

// MATERIAL UI - IMPORTS
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../../constants/theme";

function EditAddressPage() {
  const history = useHistory();
  const [address, setaddress] = useState([]);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    const token = localStorage.getItem("token");

    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/profile/address`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        setaddress(response.data.address);
      })
      .catch((error) => {
        console.log(error.messenge);
      });
  };

  const [profile, onChange] = useForm({
    street: "",
    number: "",
    neighbourhood: "",
    city: "",
    state: "",
    complement: "",
  });

  const putAddAddress = (event) => {
    event.preventDefault();

    const body = {
      street: profile.street,
      number: profile.number,
      neighbourhood: profile.neighbourhood,
      city: profile.city,
      state: profile.state,
      complement: profile.complement,
    };
    console.log("body", body);

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
        console.log("response", response);
        history.push("/perfil");

        alert("Endereço cadastrado com sucesso");
      })
      .catch((error) => {
        alert("Erro ao cadastrar endereço");
        console.error(error);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Header title={"Editar endereço"} showBackButton />
      <EditAddressContainer>
        <FormStyled>
          <TextField
            onChange={onChange}
            variant="outlined"
            fullWidth
            id="endereco"
            label="Rua"
            name={address.street}
            value={profile.street}
            required
          />
          <TextField
            onChange={onChange}
            variant="outlined"
            fullWidth
            id="numero"
            label="Número"
            name={address.number}
            value={profile.number}
            required
          />
          <TextField
            onChange={onChange}
            variant="outlined"
            fullWidth
            id="complemento"
            label={address.complement}
            name="complement"
            value={profile.complement}
          />
          <TextField
            onChange={onChange}
            variant="outlined"
            fullWidth
            name="neighbourhood"
            label={address.neighbourhood}
            id="bairro"
            value={profile.neighbourhood}
            required
          />
          <TextField
            onChange={onChange}
            variant="outlined"
            fullWidth
            name="city"
            label={address.city}
            id="cidade"
            value={profile.city}
            required
          />
          <TextField
            onChange={onChange}
            variant="outlined"
            fullWidth
            name="state"
            label={address.state}
            id="estado"
            value={profile.state}
            required
          />
          <Button
            onClick={putAddAddress}
            color="primary"
            type="submit"
            fullWidth
            variant="contained"
          >
            Salvar
          </Button>
        </FormStyled>
      </EditAddressContainer>
    </ThemeProvider>
  );
}

export default EditAddressPage;
