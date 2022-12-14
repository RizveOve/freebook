
import { Box, List, ListItemButton, ListItemIcon, ListItemText, ListItem, Switch } from '@mui/material'
import {Home, AccountBox, Group, PersonAdd, Description, Send, Settings, Nightlight} from '@mui/icons-material';
import React from 'react'

export const Sidebar = ({mode, setMode}) => {


  return (
    <Box flex={1} p={2} sx={{display: {xs: "none", sm: "block"}}}>
      <Box position= 'fixed'>
      <List>
      <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
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
            <Switch onChange={e=>setMode(mode==="light"? "dark" : "light")} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
   </Box>
  )
}
