
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material'
import React, { useState } from 'react'
import InfoTwoToneIcon from '@mui/icons-material/InfoTwoTone';
import { useNavigate } from 'react-router-dom';
import ROUTS from '../../routes/Routs';
import { useProductService } from '../../products/providers/ProductsProvider';

export default function Footer() {


    const [footerPointer,setFooterPointer] = useState("");

    const {setCurrentCategory} = useProductService();
    const navigate = useNavigate();


  return (
    <Paper sx={{bottom:0,left:0,right:0}}>
        <BottomNavigation showLabels value={footerPointer}  onChange={(e,newVal)=>{
            setFooterPointer(newVal);
            setCurrentCategory("");
        }}>
            <BottomNavigationAction label="About Us" icon={<InfoTwoToneIcon/>} onClick={()=>navigate(ROUTS.ABOUTUS)}/>

        </BottomNavigation>
    </Paper>
  )
}
