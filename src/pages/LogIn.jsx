

import { Container, TextField, Button, Box, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import { logIn } from '../users/services/userService'
import { useNavigate } from 'react-router-dom'
import ROUTS from '../routes/Routs'
import { getUserFromLocalStorage, saveUser } from '../localStorage/localStorageService'
import { useUserService } from '../users/provider/UserProvider'
import useData from '../hooks/useData'
import loginSchema from '../users/validation/loginValidation'


export default function LogIn() {

    const [loginInfo,setLoginInfo] = useState({email:"",password:""});

    const [loginError,setLoginError]  = useState("")

    const [inputError, setInputError] = useState({});

    const {setUser} = useUserService();

    const {updateData} = useData(setLoginInfo,loginSchema,setInputError);


    const goTo = useNavigate();
    
    const { user } = useUserService();

    const submit = (e)=>{
        e.preventDefault();

       

        if(Object.keys(inputError).length===0){
          logIn(loginInfo).then((res)=>{

              if(res?.response?.data){
                  setLoginError(res.response.data)

              }else{
                  setLoginError("");
                  saveUser(res);
                  setUser(getUserFromLocalStorage());
                  setTimeout(()=>{goTo(ROUTS.ROOT)},1000);
                  
              }
          })

      }
        


    }

 /*    const updateInfo =({target})=>{

        setLoginInfo((prev)=>{return {...prev ,[target.name]:target.value}})

    } */







  
    if (user)return goTo(ROUTS.ROOT)


    return (
      <Container sx={{ width: "fit-content", display: "flex", flexDirection: "row", alignItems: "center", marginTop: "18vh", gap: "1vw" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5vh", width:["50vw","18vw","18vw"] }}>
          <TextField variant="outlined" name="email" label="Email" value={loginInfo.email} onChange={updateData} helperText={inputError.email} />
          <TextField variant="outlined" name="password" label="Password" value={loginInfo.password} onChange={updateData} helperText={inputError.password} />

          <Button variant="contained" type="submit" color="success" sx={{ fontWeight: "bold" }} onClick={submit}>
            Login
          </Button>

          <Typography variant="body1" color="error">
            {loginError}
          </Typography>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Button
          variant="contained"
          color="warning"
          sx={{ height: ["6vh","5vh","5vh"],width:["34vw","17vw","17vw"]}}
          onClick={() => {
            goTo(ROUTS.SIGNUP);
          }}
        >
          SignUp
        </Button>
      </Container>
    );
}
