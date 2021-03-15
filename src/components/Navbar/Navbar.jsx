import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem,Menu, Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';

import useStyles from './styles'

const Navbar = ({totalItems}) => {
  const classes = useStyles();
  return ( 
    <>
     <AppBar position='fixed' className={classes.appBar} color='inherit'>
      <Toolbar>
        <Typography variant='h6' className={classes.title} color='inherit'>
          <img src="https://via.placeholder.com/150" alt='commerce.js' height='25px' className={classes.image}/>
          Commerce
        </Typography>
        <div className={classes.grow}></div>
        <div className={classes.button}>
          <IconButton aria-label="Show cart items" color='inherit'>
            <Badge badgeContent={totalItems} color='secondary'>
              <ShoppingCart/>
            </Badge>
          </IconButton>
        </div>
      </Toolbar>
     </AppBar> 
    </>
   );
}
 
export default Navbar;