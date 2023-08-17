



import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { getCartFromLocalStorage, saveToLocalStorageCart,  } from '../../localStorage/localStorageService';
import { getProducts } from '../services/productServices';



const ProductContext = createContext();

export default function ProductsProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [products,setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentCategory , setCurrentCategory] = useState(null);
  

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


  return <ProductContext.Provider value={{ cart, setCart,products,categories  ,currentCategory,setCurrentCategory ,addToCart }}>{children}</ProductContext.Provider>;
}





export const useProductService = ()=>{

    const context = useContext(ProductContext);
    if (!context) throw new Error("useUser must be used within a NameProvider");
    return context;

};