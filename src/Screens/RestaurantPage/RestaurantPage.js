import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import DishCard from "../../components/DishCard/DishCard";
import Header from "../../components/Header/Header";

const useStyles = makeStyles({
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  detailCardContainer: {
    width: 328,
    marginTop: 8,
  },
  image: {
    height: 120,
  },
  middleContainer: {
    display: "flex",
    justifyContent: "space-between",
  },
});

function RestaurantPage() {
  const params = useParams();
  const classes = useStyles();
  const [restaurantDetail, setRestaurantDetail] = useState([]);
  const [productId, setProductId] = useState([]);
  const [productQuantity, setProductQuantity] = useState([]);

  useEffect(() => {
    getRestaurantDetail();
  }, []);

  const getRestaurantDetail = () => {
    const token = localStorage.getItem("token");

    axios
      .get(
        `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants/${params.id}`,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        setRestaurantDetail(response.data.restaurant);
      })
      .catch((error) => {
        console.error(error.message);
        alert("Erro ao requisitar os detalhes");
      });
  };

  const productsArray = restaurantDetail.products;

  const defineProductId = (product) => {
    setProductId(product.id)
  }
  const defineProductQuantity = (product) => {
    setProductQuantity()
  }
  console.log(productId)

  return (
    <div className={classes.mainContainer}>
      <Header title={"Restaurante"} showBackButton />
      <div className={classes.detailCardContainer}>
        <Card>
          <CardMedia
            className={classes.image}
            image={restaurantDetail.logoUrl}
          />
          <CardContent>
            <Typography gutterBottom variant="body1">
              {restaurantDetail.name}
            </Typography>
            <div className={classes.middleContainer}>
              <Typography variant="body1" color="textSecondary">
                {restaurantDetail.deliveryTime} min
              </Typography>
              <Typography variant="body1" color="textSecondary">
                Frete R${restaurantDetail.shipping},00
              </Typography>
            </div>
            <Typography variant="body1" color="textSecondary">
              {restaurantDetail.address}
            </Typography>
          </CardContent>
        </Card>
      </div>
      <div>
        {productsArray &&
          productsArray.map((product) => {
            return (
              <DishCard
                key={product.id}
                id={product.id}
                name={product.name}
                description={product.description}
                photoUrl={product.photoUrl}
                category={product.category}
                price={product.price}
                defineProduct={() => defineProductId(product)}
              />
            );
          })}
      </div>
    </div>
  );
}

export default RestaurantPage;
