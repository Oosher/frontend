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