




import { Box, IconButton, ListItem, MenuItem, SwipeableDrawer, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'

import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import { useProductService } from '../../../products/providers/ProductsProvider';
import ROUTS from '../../../routes/Routs';


export default function LeftNav() {

    const {categories,setCurrentCategory,currentCategory } = useProductService();


    const [menuOpen,setMenuOpen] = useState(false)


    const navigate = useNavigate();


  


    return (
      <Toolbar>
        <IconButton onClick={() => setMenuOpen((prev) => !prev)}>
          <MenuIcon sx={{ fontSize: "3rem" }} />
        </IconButton>
        <Link to={ROUTS.ROOT} onClick={() =>{ setCurrentCategory(null)}} style={{ color: "black" }}>
          <IconButton>
            <HomeIcon sx={{ fontSize: "5rem" }} />
          </IconButton>
        </Link>

        {categories
          .filter((category, index) => index < 6)
          .map((category) => (
            <MenuItem sx={{ borderBottom: currentCategory === category ? "solid black 2px" : "0px" }}>
              <ListItem
                onClick={() => {
                  navigate(ROUTS.ROOT);
                  setCurrentCategory(category);
                }}
                style={{ textDecoration: "none", margin: "0 1vw 0 1vw", textAlign: "center" }}
              >
                <Typography variant="h6" color="initial">
                  {category}
                </Typography>
              </ListItem>
            </MenuItem>
          ))}

        <SwipeableDrawer anchor="left" open={menuOpen} onClose={() => setMenuOpen((prev) => !prev)}>
          <Box sx={{ marginTop: "107px" }}>
            {categories?.map((category) => (
              <ListItem
                onClick={() => {
                  navigate(ROUTS.ROOT);
                  setCurrentCategory(category);
                  setMenuOpen((prev) => !prev);
                }}
                sx={{ "&:hover": { bgcolor: "lightblue", cursor: "pointer" }, width: "9vw" }}
              >
                {category}
              </ListItem>
            ))}
          </Box>
        </SwipeableDrawer>
      </Toolbar>
    );
}
