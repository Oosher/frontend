import axios from "axios";



const apiAddress = "https://repulsive-tan-top-hat.cyclic.app/"






export const logIn =  async (user) =>{

    try{
        const login = await axios.put(`${apiAddress}users/login`,user) 

        return login.data;
    }
    catch(err){

        return err;
    }






}




export const register = async (registerData)=>{


    try{
        const register = await axios.post(`${apiAddress}users/newuser`,registerData);

        return register.data;
        
    }catch(err){

        return err;

    }


}










export const updateUser = async(updatedUser) =>{

    try{


        const response = await axios.put(`${apiAddress}users`,updatedUser);


        return response.data;

    }catch(err){


        return err.response;

    }


}

