import { Box, Typography } from '@mui/material'
import React from 'react'
import { FaReact, FaJava } from 'react-icons/fa';
import { DiNpm, DiCss3, DiHtml5, DiJsBadge, DiGit, DiNodejs, DiMongodb } from "react-icons/di";

export default function Skills() {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: '' }}>
      <Box>
        <FaReact title="React" style={{ color: '#61DAFB' }} />
        <Typography>React</Typography>
      </Box>
      <Box>
        <DiNodejs title="Node.js" style={{ color: '#339933' }} />
        <Typography>NodeJs</Typography>
      </Box>
      <Box>
        <FaJava title="Java" style={{ color: '#007396' }} />
        <Typography>Java</Typography>
      </Box>
      <Box>
        <DiCss3 />
        <Typography>CSS</Typography>
      </Box>
      <Box>
        <DiNpm />
        <Typography>Npm</Typography>
      </Box>
      <Box>
        <DiHtml5 />
        <Typography>HTML</Typography>
      </Box>
      <Box>
        <DiJsBadge />
        <Typography>JavaScript</Typography>
      </Box>
      <Box>
        <DiGit />
        <Typography>Git</Typography>
      </Box>
      <Box>
        <DiMongodb />
        <Typography>MongoDb</Typography>
      </Box>
      <Box>
        <i class="devicon-c-plain"></i>
        <Typography>C language</Typography>
      </Box>
    </Box>
  )
}
