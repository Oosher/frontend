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

        let amount=0;

        cart.map((prod)=>{if (product._id===prod._id) {
            amount++;
            prod.amount++;
    
            
        }
        return prod;
    })

    if (amount===0){ 

        cart.push({...product,amount:1});

    }


        localStorage.setItem("cart",JSON.stringify(cart));
        
    }else{
        cart = [];  
        cart.push({...product});



        localStorage.setItem("cart",JSON.stringify(cart));
        
    }

}


export const removeItemFromCart = (itemId) =>{

    let cart = getCartFromLocalStorage();

    cart = cart.filter((product)=>product._id!==itemId);


    localStorage.setItem("cart",JSON.stringify(cart));



}

export const getCartFromLocalStorage = ()=>JSON.parse(localStorage.getItem("cart"));








