import React, {useEffect, useState} from 'react'
import { useParams} from 'react-router-dom'
import {getProduct} from '../products/services/productServices';
import {Box,Button,CardMedia,Paper,Typography, useMediaQuery} from '@mui/material';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Carousel from 'react-material-ui-carousel';
import { useProductService } from '../products/providers/ProductsProvider';

export default function ProductPage() {

    const [product, setProduct] = useState({});
    const [productArray,setProductArray] = useState([])
    const {id} = useParams();
    const { addToCart } = useProductService();
    const phone = useMediaQuery("(max-width:600px)");



    useEffect(() => {

        getProduct(id).then((result) => {
          setProduct(result)
          setProductArray(result.imageArray.filter((image)=>image.imageUrl!==""))
        });

        

    }, [id]);



  



    return (
      <Box sx={phone ? { display: "flex", flexDirection: "column" } : { display: "grid", gridTemplateColumns: "repeat(2,1fr)", gridTemplateRows: "1fr 5fr 1fr 2fr", width: "75vw", height: "70vh", margin: "2vh auto " }}>
        <Carousel sx={{ width: "90%", gridRow: "1/5", justifySelf: "center", alignSelf: "center" }}>
          {productArray?.map((image, i) => (
            <Item item={{ imageUrl: image.imageUrl, imageAlt: image.imageAlt }} key={i} />
          ))}
        </Carousel>

        <Typography variant="h3" color="initial">
          {product?.name}
        </Typography>
        <Typography className="scrollType" variant="body1" color="initial" sx={{ marginTop: "2vh", height: "45vh", overflow: "auto" ,marginBottom:"0"}}>
          {product?.description}
        </Typography>

        <Button variant="contained" color="info" sx={{ display: "flex", padding: "0", width: "100%", justifyContent: "center", height: "7vh", gap: "0.2vw", alignSelf: "end", gridRow: "4/5", gridColumn: "2/3", margin: "0 1vh 0 0" }}  onClick={()=>addToCart(product)}>
          <Typography variant="body1" color="initial" sx={{ color: "white", alignSelf: "center", fontSize: "1.8rem", fontWeight: "bold" }}>
            &#8362;{product?.price}
          </Typography>
          <ShoppingCartIcon sx={{ alignSelf: "center", justifySelf: "center", fontSize: "2rem" }} />
        </Button>
      </Box>
    );
}




function Item (props){


return (
  <Paper >
    <CardMedia component="img" image={props.item.imageUrl} alt={props.item.imageAlt} sx={{ maxHeight:"69vh",borderRadius: "1%" ,minHeight:"69vh"}} />
  </Paper>
);
}