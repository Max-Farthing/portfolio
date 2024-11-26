import { Container } from '@mui/material'
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
        <Box sx={{ m: 20}}>
          <Intro />
        </Box>
        <Box sx={{ m: 20}}>
          <About />
        </Box>
        <Box sx={{ m: 20}}>
          <Skills />
        </Box>
        <Box sx={{ m: 20}}>
          <Experience />
        </Box>
        <Box sx={{ m: 20}}>
          <Projects />
        </Box>
      </Container>
    </Box>
  )
}

export default App
