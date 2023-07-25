import React, {useEffect, useState} from 'react'
import { useParams} from 'react-router-dom'
import {getProduct} from '../products/services/productServices';
import {Box,Button,CardMedia,Paper,Typography} from '@mui/material';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Carousel from 'react-material-ui-carousel';

export default function ProductPage() {

    const [product, setProduct] = useState({})
    const {id} = useParams();



    useEffect(() => {

        getProduct(id).then((result) => setProduct(result));

    }, [id])

    return (
      <Box sx={{ display: "flex", flexDirection: "column", width: "60%", margin: "2vh auto " }}>
        <Box sx={{ display: "flex", justifyContent: "start", gap: "2vw" }}>
          <Carousel sx={{ width: "50%" }}>
            <Item item={{ imageUrl: product?.imageUrl, imageAlt: product?.imageAlt }} />
            <Item item={{ imageUrl: product?.imageUrl, imageAlt: product?.imageAlt }} />
          </Carousel>
          <Box sx={{ marginTop: "5vh" }}>
            <Typography variant="h3" color="initial">
              {product?.name}
            </Typography>
            <Typography variant="body1" color="initial" sx={{ marginTop: "2vh" }}>
              {product?.description}
            </Typography>
            <Typography variant="body1" color="initial" sx={{marginTop:"219px"}}>&#8362;{product?.price}
            </Typography>
            <Button variant="contained" color="info" sx={{ width: "140%", alignSel: "flex-end" }}>
              <ShoppingCartIcon />
            </Button>
          </Box>
        </Box>
      </Box>
    );
}




function Item (props){


return(
<Paper >
    <CardMedia component="image" image={props.item.imageUrl} alt={props.item.imageAlt} sx={{ height: "40vh", width: "30vw" ,borderRadius:"1%" }} />
</Paper>)
}