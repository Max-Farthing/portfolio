import React from 'react'
import { Box } from '@mui/material'
import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom'

export default function RootLayout() {
  return (
    <Box>
      <Nav />
      <Box>
        <main>
          <Outlet />
        </main>
      </Box>
    </Box>
  )
}
