import jwtDecode from "jwt-decode";



export const saveUser = (webToken)=>{

    localStorage.setItem("key",webToken,);

}





export const getUserFromLocalStorage =  ()=>{



    try{
    const user =  localStorage.getItem("key")
    
    return jwtDecode(user);


    }catch(err){
        return null
    }
}