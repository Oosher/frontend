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






//cart 


export const saveToLocalStorageCart = (product) =>{

    let cart = getCartFromLocalStorage();
    console.log(cart);
    if (cart) {

        cart.push(product);

        localStorage.setItem("cart",JSON.stringify(cart));
        
    }else{
        cart = [];  
        cart.push({...product});



        localStorage.setItem("cart",JSON.stringify(cart));
        
    }

}

export const getCartFromLocalStorage = ()=>JSON.parse(localStorage.getItem("cart"));








