import { Container, Grid2 } from '@mui/material'
import Box from '@mui/material/Box'
import Intro from './components/Intro'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'

function App() {
  return (
    <Box>
      <Container sx={{}}>
        <Grid2 container spacing={2}>
          <Grid2 size={5}>
            <Intro />
          </Grid2>
          <Grid2 size={7}>
            <About />
            <Skills />
            <Experience />
            <Projects />
          </Grid2>
        </Grid2>
      </Container>
    </Box>
  )
}

export default App
