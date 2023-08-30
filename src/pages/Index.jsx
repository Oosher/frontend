






import { Container, Grid, TextField, Typography, Button, InputAdornment } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Product from '../products/product/Product';
import { useProductService } from '../products/providers/ProductsProvider';


export default function Index() {

    const { products, currentCategory ,setCurrentCategory} = useProductService();
    
    const [page,setPage] = useState([]);

    useEffect(()=>{
    
            if (!currentCategory) {
              setPage(products);
            }
            else{

              setPage(products?.filter((product)=>product.category===currentCategory||product.name.includes(currentCategory)))

            }



    },[products,currentCategory])


      const search = ({target})=>{

        if (target.value==="") {
          setCurrentCategory(null);
        }else{
          setCurrentCategory(target.value);
        }

        
      }


    if (products===[])  return  <Typography variant="body1" color="initial">No products where found found</Typography>


    return (
      <Container sx={{ position: "relative", display: "flex" ,flexDirection:"column" }}>
      <TextField
      variant="outlined"
      color="primary"
      value={currentCategory}
      onChange={search}
      label="Search by name or by category"
      
      sx={{ marginTop: '2vh', position: 'sticky', top: '0', zIndex: 1 }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <Button variant="text" color="error" onClick={()=>setCurrentCategory("")}>
              X
            </Button>
          </InputAdornment>
        ),
      }}
    />
        <Grid container spacing={2} direction="row-reverse">
          {page?.map((product, index) => (
            <Grid item xs={4} key={index}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
}
