



import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { getCartFromLocalStorage, saveToLocalStorageCart,  } from '../../localStorage/localStorageService';
import { getProducts } from '../services/productServices';



const ProductContext = createContext();

export default function ProductsProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [products,setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentCategory , setCurrentCategory] = useState("");
  

  useEffect(() => {
    
        if (getCartFromLocalStorage()) {
        
            setCart(getCartFromLocalStorage());

        }else{
            setCart([]);
        }

        if (products.length===0) {

          getProducts().then((res)=>setProducts(res))
        
          
        }else{
          if(categories.length===0){
            let catArr = []
            products.map((product) => {

              if (catArr.indexOf(product.category)===-1) {

                  catArr.push(product.category)
                
              }
              return "";
                
            });
            setCategories(catArr);
    


          }
            
        }

  }, [products,categories]);

      const addToCart = useCallback((product) => {
        saveToLocalStorageCart(product);
        setCart(getCartFromLocalStorage());
      }, [setCart]);


      const fixDate = useCallback((date)=>{

        const newDate = new Date(date);

        return `${newDate.getDate()} / ${newDate.getMonth()} / ${newDate.getFullYear()}  \u00a0\u00a0   ${newDate.getHours()} : ${newDate.getMinutes()<10?"0"+newDate.getMinutes():newDate.getMinutes()}   `

    },[])


    const orderStatus =useCallback( (status)=>{


      switch (status) {
          case "Order Accepted":
              
              return "white";

          case "In delivery":
              
              return "lightblue";

          case "Delivered" :
              
              return "green";
      
          default:
              return "white";
      }

  },[])


  return <ProductContext.Provider value={{ cart, setCart,products,categories ,currentCategory,setCurrentCategory ,addToCart ,fixDate, orderStatus }}>{children}</ProductContext.Provider>;
}





export const useProductService = ()=>{

    const context = useContext(ProductContext);
    if (!context) throw new Error("useUser must be used within a NameProvider");
    return context;

};