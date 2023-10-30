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


export const saveToLocalStorageCart = async (product) =>{

    let cart = getCartFromLocalStorage();

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
        
        cart.push(product);



        localStorage.setItem("cart",JSON.stringify(cart));
        
    }

}


export const removeItemFromCart = (itemId) =>{

    let cart = getCartFromLocalStorage();

    cart = cart.filter((product)=>product._id!==itemId);


    localStorage.setItem("cart",JSON.stringify(cart));



}

export const getCartFromLocalStorage = ()=>JSON.parse(localStorage.getItem("cart"));



export const clearShoppingCart = ()=>localStorage.setItem("cart","[]");





//LIKED PRODUCTS





export const saveProductToLocalStorage = async (product)=>{
   
    let likedProducts = await getLikedProducts();
    console.log(likedProducts);
    if (likedProducts) {
     
        likedProducts.push(product);

        localStorage.setItem("likedProducts",JSON.stringify(likedProducts));
        
    }else{
        likedProducts=[];
        likedProducts.push(product);

        localStorage.setItem("likedProducts",JSON.stringify(likedProducts));
    }



}


export const getLikedProducts = ()=>{

    return JSON.parse(localStorage.getItem("likedProducts"));

}







export const removeLikedProduct =async (product) =>{

    const updatedLikedProducts = await getLikedProducts();

    await localStorage.setItem("likedProducts",JSON.stringify(updatedLikedProducts.filter((prod)=>prod.name!==product.name)))

    if (await !updatedLikedProducts) {
        await localStorage.setItem("likedProducts","[]")
    }
}







if (!getCartFromLocalStorage()) {
    localStorage.setItem("cart","[]");
}

