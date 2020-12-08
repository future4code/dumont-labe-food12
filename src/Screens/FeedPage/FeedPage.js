import React, { useEffect, useState } from "react";
import axios from "axios";
import RestaurantCard from "../../components/RestaurantCard/RestaurantCard";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Tab, Tabs, Box } from "@material-ui/core";

const useStyles = makeStyles({
  listContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

function TabPanel(props) {
  const { children, value, index } = props;

  return <div>{value === index && <Box>{children}</Box>}</div>;
}

function FeedPage() {
  const classes = useStyles();
  const [restaurants, setRestaurants] = useState(0);
  const [foodCategory, setFoodCategory] = useState(0);

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = () => {
    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants`,
        {
          headers: {
            auth:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlpkYWcyZVBHOG1zUDNkdG1vRFdrIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjExMy4xMTEuMTExLTExIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTYwNzM3NTY5Mn0.ODZDt8sX_emUKT1x-FxDcP0eWWI5z1yi5lYDTsak78s",
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

  const handleFoodCategoryChange = (event, newValue) => {
    setFoodCategory(newValue);
  };

  return (
    <div>
      <AppBar position="static" color="default">
        <Tabs
          value={foodCategory}
          onChange={handleFoodCategoryChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="Todos" />
          <Tab label="Árabe" />
          <Tab label="Asiática" />
          <Tab label="Baiana" />
          <Tab label="Carnes" />
          <Tab label="Hamburguer" />
          <Tab label="Italiana" />
          <Tab label="Mexicana" />
          <Tab label="Petiscos" />
          <Tab label="Sorvetes" />
        </Tabs>
      </AppBar>
      <TabPanel value={foodCategory} index={0}>
        <div className={classes.listContainer}>
          {restaurants &&
            restaurants.map((restaurant) => {
              return (
                <RestaurantCard
                  key={restaurant.id}
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
        </div>
      </TabPanel>
      <TabPanel value={foodCategory} index={1}>
        <div className={classes.listContainer}>
          {restaurants &&
            restaurants
              .filter((restaurant) => {
                return restaurant.category === "Árabe";
              })
              .map((restaurant) => {
                return (
                  <RestaurantCard
                    key={restaurant.id}
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
        </div>
      </TabPanel>
    </div>
  );
}

export default FeedPage;
