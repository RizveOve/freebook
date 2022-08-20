import { AppBar, Badge, InputBase, Toolbar, Typography, Box, Menu, MenuItem } from '@mui/material'
import { styled} from '@mui/material/styles';
import React from 'react'
import { Facebook, Email, Notifications, AccountCircle} from '@mui/icons-material';
import { useState } from 'react';

export const Navbar = () => {

const StyledToolbar= styled(Toolbar) ({
  display: 'flex',
  justifyContent: 'space-between'
});

const Search= styled('div')(({})=> ({
  backgroundColor: 'white',
  padding: '3px 10px',
  borderRadius: '10px',
  width: '40%'
}));

const Icons= styled(Box)(({theme})=> ({
  display: 'none',
  gap: '20px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]:{
    display: 'flex'
  }
}));

const IconSmall= styled(Box)(({theme})=> ({
  display: 'flex',
  gap: '10px',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]:{
    display: 'none'
  }
}));

  const [open, setOpen] = useState(false);


  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{display: {xs: "none", sm: "block"}}}>FreeBook</Typography>
        <Facebook sx={{display:{sx:'block', sm:'none'}}} />
        <Search><InputBase placeholder='search...'></InputBase></Search>
        <Icons>
          <Badge badgeContent={1} color="error">
            <Email></Email>
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications></Notifications>
          </Badge>
          <AccountCircle onClick={e=>setOpen(true)}></AccountCircle>
        </Icons>

        <IconSmall onClick={e=>setOpen(true)}>
          <AccountCircle></AccountCircle>
          <Typography>Rizve</Typography>
        </IconSmall>

      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=> setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}
