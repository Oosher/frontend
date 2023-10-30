import axios from "axios";
import { getKeyFromLocalStorage } from "../../localStorage/localStorageService";




const apiAddress = "https://repulsive-tan-top-hat.cyclic.app/"




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

export const deleteProduct= async (productId,userId) =>{
    try{
        const res = await axios.delete(`${apiAddress}products/${productId}/${userId}`);

        return res.data;

    }catch(err){

        console.log(err);
        
    }




}





export const updateProduct = async(normalizedProduct) =>{


    try{
        
        const res = await axios.put(`${apiAddress}products/${normalizedProduct.id}`,normalizedProduct)

        return res.data;

    }catch(err){

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





export const getMyOrders = async (user) =>{

    try{
        
            const myOrders = await axios.get(`${apiAddress}products/orders/${user.email}/${user.name.first}`);

            return myOrders;
    }
    catch(err){
        console.log(err)
    }


}



export const getAllOrders = async(email,userFirstName) =>{


    try{

        const allOrders = await axios.get(`${apiAddress}products/orders/allorders/${email}/${userFirstName}`);


        return allOrders;
        
    }catch(err){


        console.log(err);

    }



}


export const getOrderStatuses = async ()=>{



    try{

        const orderStatuses = await axios.get(`${apiAddress}products/orders/statuses`)
        
        return orderStatuses.data; 

    }catch(err){

        console.log(err);
    }


}
export const upDateOrders = async (updatedOrders,userId)=>{



    try{

        const updateRequest = await axios.put(`${apiAddress}products/orders/updateOrders`,{updatedOrders:updatedOrders,userId:userId})
        
        return updateRequest; 

    }catch(err){

        console.log(err);
    }


}







