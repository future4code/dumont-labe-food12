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

  const getListaRestaurants = () => {
    const token = localStorage.getItem("token");

    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        setRestaurants(response.data.restaurants);
      })
      .catch((error) => {
        console.log(error.messenge);
      });
  };

  console.log(restaurants);

  const onSubmit = () => {
    const listFilter =
      restaurants &&
      restaurants.filter((restaurant) => {
        if (restaurant.name.toLowerCase().includes(form.search.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      });
    setFilteredRestaurants(listFilter);
  };

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

      {filteredRestaurants &&
        filteredRestaurants.map((restaurant) => {
          console.log(restaurant);
          return (
            <div>
              <p>{restaurant.address}</p>
              <p>{restaurant.category}</p>
              <p>{restaurant.deliveryTime}</p>
              <p>{restaurant.name}</p>
              <p>{restaurant.logoUrl}</p>
            </div>
          );
        })}
    </div>
  );
}

export default SearchBarPage;
