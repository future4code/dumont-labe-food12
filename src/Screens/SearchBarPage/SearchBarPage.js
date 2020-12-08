import React, { useEffect, useState } from "react";
import useForm from "../../hooks/useForm";
import { Button, Input } from "@material-ui/core";
import axios from "axios";

function SearchBarPage() {
  const [restaurants, setRestaurants] = useState(0);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [form, onChange] = useForm({
    search: "",
  });
  useEffect(() => {
    getListaRestaurants();
  }, []);
  
  // const token = localStorage.getItem("token");
  
  const getListaRestaurants = () => {
    axios
    .get(
      `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants`,
      {
        headers: {
          auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlpkYWcyZVBHOG1zUDNkdG1vRFdrIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjExMy4xMTEuMTExLTExIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTYwNzM3NTY5Mn0.ODZDt8sX_emUKT1x-FxDcP0eWWI5z1yi5lYDTsak78s",
        },
      }
      )
      .then((response) => {
        setRestaurants(response.data.restaurants);
      })
      .catch((error) => {
        alert("Erro ao requisitar os restaurantes");
      });
    };
    
    console.log(restaurants);
    
    const onSubmit = (event) => {
      console.log("entrou");
      setFilteredRestaurants(
        restaurants.restaurants &&
        restaurants.restaurants.filter((restaurant) => {
          if (restaurant.name === form.search) {
            return true;
          } else {
            return false;
          }
        })
        );
      };
     
      
      const filteredRestaurantsCards =
      filteredRestaurants &&
      filteredRestaurants.map((restaurant) => {
        return <div>{restaurant.name}</div>;
      });
      
      return (
        <div>
      <form>
        <Input
          placeholder="Busca"
          onChange={onChange}
          value={form.search}
          name={"search"}
        />
        <Button onClick={onSubmit}>Buscar</Button>
      </form>
      {filteredRestaurantsCards}
    </div>
  );
}

export default SearchBarPage;
