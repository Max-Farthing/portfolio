import { Box, Grid2, IconButton, Typography } from '@mui/material'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'


export default function Intro() {
  return (
    <Grid2 container spacing={2}>
      <Grid2 item size={6}>
        <Typography variant='h2'>Max Farthing</Typography>
        <Typography variant='h5'>Full-Stack Engineer</Typography>
        <Typography variant='p'>I build seamless, dynamic web applications, combining elegant front-end design with robust back-end solutions</Typography>
        <IconButton LinkComponent="a" href='https://www.linkedin.com/in/maximus-farthing/' target="_blank">
          <LinkedInIcon />
        </IconButton>
        <IconButton LinkComponent="a" href='https://github.com/Max-Farthing' target="_blank">
          <GitHubIcon />
        </IconButton>
      </Grid2>
      <Grid2 item size={6}>
        <p>Professional picture here</p>
      </Grid2>
    </Grid2>
  )
}
