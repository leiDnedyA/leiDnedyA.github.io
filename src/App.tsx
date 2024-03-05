import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import CodeBlock from './components/CodeBlock.tsx';
import BulletedList from './components/BulletedList.tsx'
import WorkTimeline from './components/WorkTimeline.tsx'

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
      <Typography variant="h2">Hi, I'm Ayden!</Typography>

      <Typography variant="h5">
        CS Student @ UMass Boston, President of UMass Boston CS Club
      </Typography>
      <p>
        Here are a brief list of my work experiences:
      </p>
      <WorkTimeline />
      <p>
        These are some of the technologies that I have experience with:
      </p>
      <BulletedList items={TECHNOLOGIES}/>
      <p>
        Follow me on LinkedIn & GitHub :)
      </p>
      <BulletedList items={SOCIAL_LINKS} clickable/>
      <Button variant="constrained" onClick={() => {
        const result = window.open(RESUME_URL, '_blank');
        if (result !== null) {
          result.focus();
        }
      }}>My Resume</Button>
    
    </div>
  )
}

export default App
