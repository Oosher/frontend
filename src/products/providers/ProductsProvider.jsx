



import React, { createContext, useContext, useEffect, useState } from 'react'
import { getCartFromLocalStorage,  } from '../../localStorage/localStorageService';



const ProductContext = createContext();

export default function ProductsProvider({ children }) {
  const [cart, setCart] = useState(0);

  useEffect(() => {
    if (!cart) {
        if (getCartFromLocalStorage()) {
        
            setCart(getCartFromLocalStorage().length);

        }
    }
  }, [cart]);


  return <ProductContext.Provider value={{ cart, setCart }}>{children}</ProductContext.Provider>;
}





export const useProductService = ()=>{

    const context = useContext(ProductContext);
    if (!context) throw new Error("useUser must be used within a NameProvider");
    return context;

};