import { Box, Card, CardHeader, CardContent, Grid2, Typography } from '@mui/material'
import React from 'react'

export default function Projects() {
  return (
    <>
      <Typography variant='h2' sx={{ justifySelf: 'center' }}>Projects</Typography>
      <Grid2 container spacing={2}>
        <Grid2 item size={4}>
          <Card variant='outlined'>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly'}}>
              <CardHeader title="GolfGoat" subheader="E-Commerce Store" />
            </Box>
            <CardContent>

            </CardContent>
          </Card>
        </Grid2>
      </Grid2>
    </>
  )
}
