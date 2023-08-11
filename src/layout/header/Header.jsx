
import { AppBar, Box} from '@mui/material'
import React from 'react'
import LeftNav from './leftNav/LeftNav'
import RightNav from './rightNav/RightNav'
import { useUserService } from '../../users/provider/UserProvider'
import RightNaveLoggedIn from './rightNav/RightNaveLoggedIn'
import ShoppingCartButton from './rightNav/ShoppingCartButton'


export default function Header() {

    const {user} = useUserService()


    return (
        <AppBar sx={{ position: "relative", height: "10vh", minHeight:"100px",display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <LeftNav />
            <Box>
            {user ?<> <ShoppingCartButton/> <RightNaveLoggedIn userName={user?.name.first} imageSrc={user.imageUrl}/> </>: <><ShoppingCartButton/><RightNav /></>}
            </Box>
        </AppBar>
    );
}
