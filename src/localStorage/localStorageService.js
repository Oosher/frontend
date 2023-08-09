import jwtDecode from "jwt-decode";



export const saveUser = (webToken)=>{

    localStorage.setItem("key",webToken,);

}





export const getUserFromLocalStorage =  ()=>{



    try{
    const user =  localStorage.getItem("key");
    
    return jwtDecode(user);


    }catch(err){
        return null
    }
}


export const getKeyFromLocalStorage = ()=>localStorage.getItem("key");



export const removeJWT = ()=>localStorage.removeItem("key");