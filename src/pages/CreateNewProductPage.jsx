



import { Container, Typography, Button, Select, MenuItem, TextField } from '@mui/material'
import React, { useState } from 'react'
import useData from '../hooks/useData';
import productSchema from '../products/validation/productValidation';
import { createProduct } from '../products/services/productServices';
import { normalizeProduct } from '../products/services/normalizeProduct';
import { useProductService } from '../products/providers/ProductsProvider';


export default function CreateNewProductPage() {
    const arr =[1,2,3,4,5,6,7,8,9,10];
    const [val,setVal] =useState(arr[0]);
    const [selected,setSelected] = useState(false);
    const [errorInfo,setErrorInfo] = useState({});
    const [formValue, setFormValue] = useState({ productName: "", productDescription: "", stock: "", price: "", image1: "", image2: "", image3: "", image4: "", image5: "", image6: "", image7: "", image8: "", image9: "", image10: "", imageAlt1: "", imageAlt2: "", imageAlt3: "", imageAlt4: "", imageAlt5: "", imageAlt6: "", imageAlt7: "", imageAlt8: "", imageAlt9: "", imageAlt10: "", select: "Select a Category" ,category:""});
    const { updateData } = useData(setFormValue, productSchema, setErrorInfo);


 console.log(formValue);

    if (selected) return <CreateProductForm inputValue={formValue} numberOfImages={val}  updateData= {updateData} errorInfo={errorInfo} setInputValue={setFormValue}/>
  
   


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






const CreateProductForm = ({numberOfImages, inputValue, updateData , errorInfo,setInputValue}) => {

    const imageNumArr = [1,2,3,4,5,6,7,8,9,10];
    

    const arr = imageNumArr.slice(0,numberOfImages);
  
    const { categories } = useProductService();
    
    const submit = (e)=>{
        e.preventDefault();
        if (Object.keys(errorInfo).length === 0) {
          if (inputValue.select !== "Outer" && inputValue.select !== "Select a Category") {
            
            createProduct(normalizeProduct({ ...inputValue, category: inputValue.select }));

          }else{
            if (inputValue.select === "Outer" && inputValue.category!=="") {
              createProduct(normalizeProduct(inputValue));
            }
            
          }
        }

  }

    
  return (
    <Container sx={{ display: "flex", flexWrap: "wrap", gap: "1vw", marginTop: "3vh" }}>
      <TextField className="formInput" name="productName" label="Product name" value={inputValue.productName} onChange={updateData} helperText={errorInfo?.productName} />
      <TextField className="formInput" name="productDescription" label="Product description" value={inputValue.productDescription} onChange={updateData} helperText={errorInfo?.productDescription} />

      {arr.map((imgNum) => (
        <>
          <TextField className="formInput" label={`image ${imgNum}`} name={`image${imgNum}`} value={inputValue.image11} onChange={updateData} helperText={errorInfo?.[`image${imgNum}`]} />

          <TextField className="formInput" label={`image alt ${imgNum}`} name={`imageAlt${imgNum}`} value={inputValue.imageAlt11} onChange={updateData} helperText={errorInfo?.[`imageAlt${imgNum}`]} />
        </>
      ))}
      <TextField className="formInput" name="stock" label="Stock" value={inputValue.stock} onChange={updateData} helperText={errorInfo?.stock} />
      <TextField className="formInput" name="price" label="Price" value={inputValue.price} onChange={updateData} helperText={errorInfo?.price} />
      <Select
        value={inputValue.select}
        name="select"
        onChange={(_, value) =>
          setInputValue((prev) => {
            return { ...prev, select: value.props.value };
          })
        }
      >
        <MenuItem value="Select a Category">Select a Category</MenuItem>
        {categories?.map((category, i) => (
          <MenuItem value={category} key={category}>
            {category}
          </MenuItem>
        ))}
        <MenuItem value="Outer">Other</MenuItem>
      </Select>
      {inputValue.select === "Outer" ? <TextField className="formInput" name="category" value={inputValue.category} helperText={errorInfo?.category} onChange={updateData}></TextField> : null}
      <Button type="submit" variant="contained" color="secondary" sx={{ width: "100%" }} onClick={submit}>
        Create new product
      </Button>
    </Container>
  );
};





