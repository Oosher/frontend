
import { AppBar, Box} from '@mui/material'
import React from 'react'
import LeftNav from './leftNav/LeftNav'
import RightNav from './rightNav/RightNav'
import { useUserService } from '../../users/provider/UserProvider'
import RightNaveLoggedIn from './rightNav/RightNaveLoggedIn'



export default function Header() {

    const {user} = useUserService()


    return (
        <AppBar sx={{ position: "relative", height: "10vh", minHeight:"100px",display: "flex", flexDirection: "row", bgcolor:"white",width:"100%",margin:0,padding:0,justifyContent:"space-around" }}>
            <LeftNav />
            <Box>
            {user ? <RightNaveLoggedIn userName={user?.name.first} imageSrc={user.imageUrl}/> : <RightNav />}
            </Box>
        </AppBar>
    );
}
