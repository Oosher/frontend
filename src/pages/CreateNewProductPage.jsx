



import { Container, Typography, Button, Select, MenuItem } from '@mui/material'
import React, { useState } from 'react'
import useData from '../hooks/useData';
import productSchema from '../products/validation/productValidation';
import ProductForm from './ProductForm';
import { createProduct } from '../products/services/productServices';


export default function CreateNewProductPage() {
    const arr =[1,2,3,4,5,6,7,8,9,10];
    const [val,setVal] =useState(arr[0]);
    const [selected,setSelected] = useState(false);
    const [errorInfo,setErrorInfo] = useState({});
    const [formValue, setFormValue] = useState({ productName: "", productDescription: "", stock: "", price: "", image1: "", image2: "", image3: "", image4: "", image5: "", image6: "", image7: "", image8: "", image9: "", image10: "", imageAlt1: "", imageAlt2: "", imageAlt3: "", imageAlt4: "", imageAlt5: "", imageAlt6: "", imageAlt7: "", imageAlt8: "", imageAlt9: "", imageAlt10: "", select: "Select a Category" ,category:""});
    const { updateData } = useData(setFormValue, productSchema, setErrorInfo);




    if (selected) return <ProductForm inputValue={formValue} numberOfImages={val}  updateData= {updateData} errorInfo={errorInfo} setInputValue={setFormValue} saveButtonText="Create new Product" submissionFunc={createProduct}/>
  
   


    return (
        <Container sx={{width:"fit-content",marginTop:"3vh",display:"flex",flexDirection:"column",gap:"2vh"}}>
            <Typography variant="body1" color="initial">Select the number of pictures you like to add</Typography>
            <Select  value={val} onChange={(_,value)=>{setVal(value.props.value)}}>
            {arr.map((option) => (
                <MenuItem value={option} key={option} sx={{textAlign:"center"}}>
                {option}
                </MenuItem>
            ))}
            </Select>
            <Button variant="contained" color="primary" onClick={()=>{setSelected(true)}}>Select</Button>
        </Container>
    );
}












