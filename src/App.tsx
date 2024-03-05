import Button from '@mui/material/Button';

import CodeBlock from './components/CodeBlock.tsx';
import BulletedList from './components/BulletedList.tsx'

const WORK_EXPERIENCES = [
"Jan 2024 - Now: Coding AI Trainer & Interviewer @ Scale AI & Remotasks",
"Dec 2023 - Jan 2024: Software Engineer Intern / Research Assistant @ UMass Boston",
"Sep 2023 - Dec 2023: Software Engineer Intern @ PressKit.ai",
"Jul 2023 - Aug 2023: Web Development Mentor @ Innovators for Purpose",
"Jun 2023 - Sep 2023: Software Engineer Intern / Research Assistant @ UMass Boston",
"Feb 2023 - May 2023: Teaching Assistant for Intro to Computer Science (CS110) @ UMass Boston"
]

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
      <h1>Hi, I'm Ayden!</h1>

      <h2>CS Student @ UMass Boston, President of UMass Boston CS Club</h2>
      <p>
        Here are a brief list of my work experiences:
      </p>
      <BulletedList items={WORK_EXPERIENCES}/>
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
