import axios from "axios";



const apiAddress = "http://localhost:8181/"






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


