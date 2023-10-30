











import {  Container, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import useData from '../hooks/useData'
import schema from '../users/validation/signUpValidation';
import { register } from '../users/services/userService';
import normalizeUser from '../users/nomalization/normalizeUser';


export default function SignUpPage() {  

  const [signUpInfo,setSignUpInfo] = useState({first:"",last:"",phone:"",email:"",password:"",imageUrl:"",imageAlt:"",country:"",city:"",street:"",houseNumber:"",zip:""});

  const [errorInfo,setErrorInfo] = useState({});

  const {updateData} = useData(setSignUpInfo,schema,setErrorInfo)

  const submit = (e)=>{

    e.preventDefault();



      if(Object.keys(errorInfo).length===0){
    
        register(normalizeUser(signUpInfo)).then((data)=>console.log(data));

      }

    


  }
  return (
    <Container sx={{ display: "flex", flexWrap: "wrap", gap: "0.7vw", marginTop: "4vh" }}>
      <TextField className="formInput" label="First Name" name="first" value={signUpInfo.first} onChange={updateData} helperText={errorInfo.first} />
      <TextField className="formInput" label="Last Name" name="last" value={signUpInfo.last} onChange={updateData} helperText={errorInfo.last} />
      <TextField className="formInput" label="Email" name="email" value={signUpInfo.email} onChange={updateData} helperText={errorInfo.email}/>
      <TextField className="formInput" label="Password" name="password" value={signUpInfo.password} onChange={updateData} helperText={errorInfo.password}/>
      <TextField className="formInput" label="Image Url" name="imageUrl" value={signUpInfo.imageUrl} onChange={updateData} helperText={errorInfo.imageUrl} />
      <TextField className="formInput" label="Image Alt" name="imageAlt" value={signUpInfo.imageAlt} onChange={updateData} helperText={errorInfo.imageAlt}/>
      <TextField className="formInput" label="Phone Number" name="phone" value={signUpInfo.phone} onChange={updateData} helperText={errorInfo.phone}/>
      <TextField className="formInput" label="Country" name="country" value={signUpInfo.country} onChange={updateData} helperText={errorInfo.country} />
      <TextField className="formInput" label="City" name="city" value={signUpInfo.city} onChange={updateData} helperText={errorInfo.city}/>
      <TextField className="formInput" label="Street" name="street" value={signUpInfo.street} onChange={updateData} helperText={errorInfo.street}/>

      <TextField className="formInput" label="House Number" name="houseNumber" value={signUpInfo.houseNumber} onChange={updateData} helperText={errorInfo.houseNumber}/>
      <TextField className="formInput" label="Zip" name="zip" value={signUpInfo.zip} onChange={updateData} helperText={errorInfo.zip}/>

      <Button type="submit" variant="contained" color="primary" sx={{ width: "100%" }} onClick={submit}>
        Register
      </Button>
    </Container>
  );
}
