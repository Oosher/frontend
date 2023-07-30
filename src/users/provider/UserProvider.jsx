



import React, { createContext, useContext, useEffect, useState } from 'react'
import { getUserFromLocalStorage } from '../../localStorage/localStorageService';



const UserContext = createContext();

export default function UserProvider( {children}) {


    const [user,setUser] = useState(null);






    useEffect(()=>{

        if(!user){

            setUser(getUserFromLocalStorage())

        }

    },[user])


    return (
        <UserContext.Provider value={{user,setUser}}>{children}</UserContext.Provider>
    )
}





export const useUserService = ()=>{

    const context = useContext(UserContext);
    if (!context) throw new Error("useUser must be used within a NameProvider");
    return context;

};