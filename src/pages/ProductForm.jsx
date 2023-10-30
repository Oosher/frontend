import React from 'react'
import { useProductService } from '../products/providers/ProductsProvider';
import { normalizeProduct } from '../products/services/normalizeProduct';
import { Button, Container, MenuItem, Select, TextField } from '@mui/material';

  export default function ProductForm({numberOfImages, inputValue, updateData , errorInfo,setInputValue,saveButtonText, submissionFunc})  {

    const imageNumArr = [1,2,3,4,5,6,7,8,9,10];

    const arr = imageNumArr.slice(0,numberOfImages);
    
    const { categories } = useProductService();
    const submit = (e)=>{
        e.preventDefault();
        if (Object.keys(errorInfo).length === 0) {
          if (inputValue.select !== "Outer" && inputValue.select !== "Select a Category") {
            
            submissionFunc(normalizeProduct({ ...inputValue, category: inputValue.select }));

          }else{
            if (inputValue.select === "Outer" && inputValue.category!=="") {
              submissionFunc(normalizeProduct(inputValue));
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
          <TextField className="formInput" label={`image ${imgNum}`} name={`image${imgNum}`} value={inputValue[`image${imgNum}`]} onChange={updateData} helperText={errorInfo?.[`image${imgNum}`]} />

          <TextField className="formInput" label={`image alt ${imgNum}`} name={`imageAlt${imgNum}`} value={inputValue[`imageAlt${imgNum}`]} onChange={updateData} helperText={errorInfo?.[`imageAlt${imgNum}`]} />
        </>
      ))}
      <TextField className="formInput" name="stock" label="Stock" value={inputValue.stock} onChange={updateData} helperText={errorInfo?.stock} />
      <TextField className="formInput" name="price" label="Price" value={inputValue.price} onChange={updateData} helperText={errorInfo?.price} />
      <Select
        value={inputValue.select?inputValue.select:"Select a Category"}
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
        {saveButtonText}
      </Button>
    </Container>
  );
};