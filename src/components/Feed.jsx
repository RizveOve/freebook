import {Box} from '@mui/material'
import Posts from "./Posts";

import React from 'react'

export const Feed = () => {
  return (
    <Box flex={4} p={2} >
      <Posts/>
      <Posts/>
      <Posts/>
    </Box>
  )
}
