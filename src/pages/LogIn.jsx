

import { Container, TextField, Button, Box, Divider, Typography } from '@mui/material'
import React, { useState } from 'react'
import { logIn } from '../users/services/userService'
import { useNavigate } from 'react-router-dom'
import ROUTS from '../routes/Routs'


export default function LogIn() {

    const [loginInfo,setLoginInfo] = useState({email:"",password:""});

    const [loginError,setLoginError]  = useState("")



    const goTo = useNavigate();
    

    const submit = ()=>{

        logIn(loginInfo).then((res)=>{

            if(res?.response?.data){

                setLoginError(res.response.data)

            }else{
                setLoginError("")
                console.log(res)
            }
        })
        


    }

    const updateInfo =({target})=>{

        setLoginInfo((prev)=>{return {...prev ,[target.name]:target.value}})

    }








    return (
      <Container sx={{ width: "fit-content", display: "flex", flexDirection: "row", alignItems: "center", marginTop: "18vh",gap:"1vw"}}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1.5vh" }}>
          <TextField variant="outlined" name="email" label="email" value={loginInfo.email} onChange={updateInfo} sx={{ width: "18vw" }} />
          <TextField variant="outlined" name="password" label="password" value={loginInfo.password} onChange={updateInfo} />

          <Button variant="contained" color="success" sx={{ fontWeight: "bold" }} onClick={submit}>
            Login
          </Button>

          <Typography variant="body1" color="error">{loginError}</Typography>
        </Box>
        <Divider orientation="vertical" flexItem/>
        <Button variant="contained" color="warning" sx={{ height: "5vh" ,width:"17vw"}}  onClick={()=>{goTo(ROUTS.SIGNUP)}} >
          SignUp
        </Button>
      </Container>
    );
}
