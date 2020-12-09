import React, { useEffect, useState } from "react";
import useForm from "../../hooks/useForm";
import { Button, Input } from "@material-ui/core";
import axios from "axios";
import { SearchPage, InputSearch, MainSearch } from "./styles";
import SearchIcon from '@material-ui/icons/Search';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';

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
    <MainSearch>
      <SearchPage>
        <SearchIcon onClick={onSubmit}>Buscar</SearchIcon>
        <InputSearch
          placeholder="Busca"
          onChange={onChange}
          value={form.search}
          name={"search"}
        />
      </SearchPage>
      {filteredRestaurants &&
        filteredRestaurants.map((restaurant) => {
          console.log(restaurant);
          return (
            <RestaurantCard
              key={restaurant.id}
              id={restaurant.id}
              name={restaurant.name}
              description={restaurant.description}
              address={restaurant.address}
              shipping={restaurant.shipping}
              deliveryTime={restaurant.deliveryTime}
              logoUrl={restaurant.logoUrl}
              category={restaurant.category}
            />
          );
        })}
    </MainSearch>
  );
}

export default SearchBarPage;