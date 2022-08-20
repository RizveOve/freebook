import { Box } from '@mui/material'
import React from 'react'

export const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{display: {xs: "none", sm: "block"}}}>
      <Box position= 'fixed'>
        Right Bar
      </Box>
    </Box>
  )
}
