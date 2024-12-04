import { Box, Grid2, Typography } from '@mui/material'
import React from 'react'

export default function Experience() {
    return (
        <Box>
            <Typography variant='h2' sx={{ justifySelf: 'center' }}>Experience</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
                <Box>
                    <Typography variant='p'>Jan 2025 - Present</Typography>                    
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column'}}>
                    <Typography variant='h6'>Associate Full-Stack Engineer @ Fidelity</Typography>
                    <Typography variant='p'>Responsible for maintaingin tasks adn doing this and that</Typography>
                    <Typography variant='p'>Responsible for maintaingin tasks adn doing this and that</Typography>
                    <Typography variant='p'>Responsible for maintaingin tasks adn doing this and that</Typography>
                </Box>
            </Box>
        </Box>
    )
}
