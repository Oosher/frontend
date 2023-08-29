

import React, { useEffect, useState } from 'react'
import { useUserService } from '../users/provider/UserProvider'
import { Box, Container, MenuItem, MenuList, Paper, TextField, Button, Typography } from '@mui/material';
import useData from '../hooks/useData';
import schema from '../users/validation/signUpValidation';
import { updateUser } from '../users/services/userService';
import { getUserFromLocalStorage, saveUser } from '../localStorage/localStorageService';
import { useNavigate } from 'react-router-dom';
import ROUTS from '../routes/Routs';



export default function UserPage() {

    const [settingsList,setSettingsList] = useState([]);
    const [selectedSetting,setSelectedSetting] = useState("name");
    const [inputVal,setInputVal ] = useState([]); 
    const [misMatchPasswords,setMisMatchPasswords] = useState("");
    const [errors,setErrors] = useState({});

    const {user,setUser} = useUserService();

    const {updateData} = useData(setUser,schema,setErrors);


    const navigate = useNavigate();

    useEffect(()=>{
        if (user) {
            if (!user.password) {
                setUser((prev)=>{return{...prev,password:{old:"",new:""}}});
            }
            
            setSettingsList(Object.keys(user));
            
            if (selectedSetting!=="") {
                setInputVal(Object.keys(user?.[selectedSetting]?user?.[selectedSetting]:[]))
            }
        }
        if (settingsList.length!==0) {

            setSettingsList((prev)=>prev = prev.slice(2))
            
        }

     
      
    },[user,settingsList.length,selectedSetting,setUser]);


    const updateRequest = (e)=>{

        e.preventDefault();
        if(Object.keys(errors).length===0){
        if(user.password.old===""||user.password.new===""){
            const updatedUser = user;
            delete updatedUser.password;
             setUser(updatedUser); 
             
        } 
        updateUser(user).then((res)=>{

            if ( res?.data) {
                    setMisMatchPasswords(res.data) 
                    console.log(misMatchPasswords);
            } 
            else{
        
                saveUser(res);  
                setUser( getUserFromLocalStorage()); 
                setMisMatchPasswords(""); 
                window.location.reload(); 

                
            }  

        }).catch((err)=>console.log(err.response));

    }
}   




if (!user) return navigate(ROUTS.ROOT);
    
  return (
    <Container sx={{width:"fit-content",display:"flex",flexDirection:"column",marginTop:"3vh"}}>
        <Box sx={{display:"flex",gap:"10px",justifyContent:"center"}}>
            <Paper >
                <MenuList>
                    {settingsList?.map((setting)=>setting!=="iat"?<MenuItem  key={setting} onClick={()=>setSelectedSetting(setting)} sx={{fontSize:"1.7rem",fontWeight:"bold"}}>{setting}</MenuItem>:null) }
                </MenuList>
            </Paper>
            <Box width={"550px"}>  
                {typeof user?.[selectedSetting] ==="object"? inputVal?.map((inputValue)=>
                <TextField key={inputValue} name={`${selectedSetting}.${inputValue}`} value={user?.[selectedSetting][inputValue]} onChange={updateData} helperText={errors[`${inputValue}`]} label={inputValue}></TextField>)
                :<TextField value={user?.[selectedSetting]} name={selectedSetting} onChange={updateData} helperText={errors[selectedSetting]} sx={{display:"block",width:"fit-content"}} label={selectedSetting}/> }
                
            </Box>

        </Box>


    <Button type="submit" variant="contained" color="primary" onClick={updateRequest}>
        Save Changes
    </Button>
        <Typography variant="body1" color="error">{misMatchPasswords}</Typography>
    </Container>
  )
}
