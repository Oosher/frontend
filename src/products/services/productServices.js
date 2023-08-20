import axios from "axios";
import { getKeyFromLocalStorage } from "../../localStorage/localStorageService";



const apiAddress = "http://localhost:8181/"




    axios.defaults.headers.common["auth-token"] = getKeyFromLocalStorage();
    



export const getProducts = async ()=>{


    try{

        const products = await axios.get(`${apiAddress}products/`);

        return products.data;

    }catch(err){
        console.log(err.message);
    }

}


export const getProduct = async (productId)=>{

try{
    const product = await axios.get(`${apiAddress}products/${productId}`)

    return product.data;
}
catch(err){
    console.log(err.message);
}




}



export const createProduct = async (normalizedProduct)=>{ 



    try{
        const newProduct = await axios.post(`${apiAddress}products/createnewproduct`,normalizedProduct)

        return newProduct;}

        catch(err){
            console.log(err);
        }
}


export const createNewOrder = async (orderDetails)=>{
    try{
        const newOrder = await axios.post(`${apiAddress}products/neworder`,orderDetails);

        return newOrder;
        
    }catch(err){
        console.log(err);
    }




}