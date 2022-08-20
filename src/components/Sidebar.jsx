
import { Box, List, ListItemButton, ListItemIcon, ListItemText, ListItem, Switch } from '@mui/material'
import {Home, AccountBox, Group, PersonAdd, Description, Send, Settings, Nightlight} from '@mui/icons-material';
import React from 'react'

export const Sidebar = () => {
  const label = { inputProps: { 'aria-label': 'Switch demo' } };


  return (
    <Box flex={1} p={2} sx={{display: {xs: "none", sm: "block"}}}>
   <List>
   <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Home Page" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <AccountBox />
        </ListItemIcon>
        <ListItemText primary="Profile" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <PersonAdd />
        </ListItemIcon>
        <ListItemText primary="Friends" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <Description />
        </ListItemIcon>
        <ListItemText primary="Pages" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <Group />
        </ListItemIcon>
        <ListItemText primary="Groups" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <Send />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <Settings />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItemButton>
    </ListItem>
    <ListItem disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <Nightlight />
        </ListItemIcon>
        <Switch {...label} defaultChecked />
      </ListItemButton>
    </ListItem>
    
   </List>
   </Box>
  )
}
