import axios from "axios";


const apiAddress = "http://localhost:8181/"


export const getProducts = async ()=>{


    try{

        const products = await axios.get(`${apiAddress}products/`);

        return products.data;

    }catch(err){
        return Promise.reject(err.message);
    }

}


export const getProduct = async (productId)=>{

try{
    const product = await axios.get(`${apiAddress}products/${productId}`)

    return product.data;
}
catch(err){
    return Promise.reject(err.message)
}




}