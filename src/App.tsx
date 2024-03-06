import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/material';

import BulletedList from './components/BulletedList.tsx'
import WorkTimeline from './components/WorkTimeline.tsx'
import SkillsList from './components/SkillsList.tsx'

const TECHNOLOGIES = [
"JavaScript & TypeScript",
"React",
"Node.js",
"Python",
"Bash & Linux/Unix Terminal",
"C",
"OCaml",
"Racket",
];

const SOCIAL_LINKS = [
"https://github.com/leiDnedyA/",
"https://www.linkedin.com/in/ayden-diel-9b0972191/"
];

const RESUME_URL = "./resume.pdf";

function App() {

  return (
    <div id="App">
      <Box component="section" sx={{
        display: "flex",
        flexDirection: "column",
        gap: "15px"

      }}>
        <Typography variant="h2">Hi, I'm Ayden!</Typography>
        <Typography variant="h5">
          I'm a CS Student @ UMass Boston, President of UMass Boston CS Club
        </Typography>
        <Divider/>
      <Typography variant="subtitle1">
        Here are some of the work experiences I've had!
      </Typography>
      <WorkTimeline />
      <p>
        These are some of the technologies that I have experience with:
      </p>
      <SkillsList />
      <p>
        Follow me on LinkedIn & GitHub :)
      </p>
      <BulletedList items={SOCIAL_LINKS} clickable/>
      <Button onClick={() => {
        const result = window.open(RESUME_URL, '_blank');
        if (result !== null) {
          result.focus();
        }
      }}>My Resume</Button>
    
      </Box>
    </div>
  )
}

export default App
