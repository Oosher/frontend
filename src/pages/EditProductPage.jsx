




import React, { useEffect, useState } from 'react'
import ProductForm from './ProductForm'
import { getProduct, updateProduct } from '../products/services/productServices';
import { useParams } from 'react-router-dom';
import useData from '../hooks/useData';
import productSchema from '../products/validation/productValidation';
import mapProductToModel from '../products/services/mapProductToModel';

export default function EditProductPage() {
    const {id} = useParams();
    const [product,setProduct] = useState(null);
    const [errors,setErrors] = useState({});
    

    const {updateData} = useData(setProduct,productSchema,setErrors);
    useEffect(()=>{
        getProduct(id).then((res)=>setProduct(mapProductToModel(res)))
    },[id]);


    return (
        <div>
            <ProductForm numberOfImages={10} inputValue={product?product:productSchema} updateData={updateData} errorInfo={errors} setInputValue={setProduct} saveButtonText="Edit product" submissionFunc={updateProduct}/>
        </div>
    )
}
