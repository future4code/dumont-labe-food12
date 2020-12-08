import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Card, CardContent, CardMedia, CircularProgress, Typography } from '@material-ui/core'
import DishCard from '../../components/DishCard/DishCard'

const useStyles = makeStyles({
    container: {
        width: 328,
        marginTop: 8,
    },
    image: {
        height: 120,
    },
    middleContainer: {
        display: 'flex',
        justifyContent: 'space-between',
    }
});

function RestaurantPage() {
    const params = useParams()
    const classes = useStyles()
    const [restaurantDetail, setRestaurantDetail] = useState([])

    useEffect(() => {
        getRestaurantDetail()
    }, [])

    const getRestaurantDetail = () => {
        axios
            .get(
                `https://us-central1-missao-newton.cloudfunctions.net/futureEatsA/restaurants/${params.id}`,
                {
                    headers: {
                        auth:
                            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlpkYWcyZVBHOG1zUDNkdG1vRFdrIiwibmFtZSI6IkFzdHJvZGV2IiwiZW1haWwiOiJhc3Ryb2RldkBmdXR1cmU0LmNvbSIsImNwZiI6IjExMy4xMTEuMTExLTExIiwiaGFzQWRkcmVzcyI6dHJ1ZSwiYWRkcmVzcyI6IlIuIEFmb25zbyBCcmF6LCAxNzcsIDcxIC0gVmlsYSBOLiBDb25jZWnDp8OjbyIsImlhdCI6MTYwNzM3NTY5Mn0.ODZDt8sX_emUKT1x-FxDcP0eWWI5z1yi5lYDTsak78s",
                    },
                }
            )
            .then((response) => {
                setRestaurantDetail(response.data.restaurant);
            })
            .catch((error) => {
                alert("Erro ao requisitar os detalhes");
            });
    }

    console.log(restaurantDetail)

    if (restaurantDetail) {
        return (
            <div>
                <Card>
                    <CardMedia
                        className={classes.image}
                        image={restaurantDetail.logoUrl}
                    />
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="body1"
                        >
                            {restaurantDetail.name}
                        </Typography>
                        <div className={classes.middleContainer}>
                            <Typography
                                variant="body1"
                                color="textSecondary"
                            >
                                {restaurantDetail.deliveryTime} min
                            </Typography>
                            <Typography
                                variant="body1"
                                color="textSecondary"
                            >
                                Frete R${restaurantDetail.shipping},00
                            </Typography>
                        </div>
                        <Typography
                            variant="body1"
                            color="textSecondary"
                        >
                            {restaurantDetail.address}
                        </Typography>
                    </CardContent>
                </Card>
                <DishCard />
            </div>
        )
    } else {
        return (
            <div>
                <CircularProgress />
            </div>
        )
    }
}

export default RestaurantPage;