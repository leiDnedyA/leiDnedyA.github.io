import CodeBlock from './components/CodeBlock.tsx';
import BulletedList from './components/BulletedList.tsx'

const CODE_TEXT = `
/**
*   /$$$$$$                  /$$                    
*  /$$__  $$                | $$                    
* | $$  \\ $$ /$$   /$$  /$$$$$$$  /$$$$$$  /$$$$$$$ 
* | $$$$$$$$| $$  | $$ /$$__  $$ /$$__  $$| $$__  $$
* | $$__  $$| $$  | $$| $$  | $$| $$$$$$$$| $$  \\ $$
* | $$  | $$| $$  | $$| $$  | $$| $$_____/| $$  | $$
* | $$  | $$|  $$$$$$$|  $$$$$$$|  $$$$$$$| $$  | $$
* |__/  |__/ \\____  $$ \\_______/ \\_______/|__/  |__/
*            /$$  | $$                              
*           |  $$$$$$/                              
*            \\______/                               
*  /$$$$$$$  /$$           /$$                      
* | $$__  $$|__/          | $$                      
* | $$  \\ $$ /$$  /$$$$$$ | $$                      
* | $$  | $$| $$ /$$__  $$| $$                      
* | $$  | $$| $$| $$$$$$$$| $$                      
* | $$  | $$| $$| $$_____/| $$                      
* | $$$$$$$/| $$|  $$$$$$$| $$                      
* |_______/ |__/ \\_______/|__/                      
*/
`;

const WORK_EXPERIENCES = [
"Jan 2024 - Now: Coding AI Trainer & Interviewer @ Scale AI & Remotasks",
"Dec 2023 - Jan 2024: Software Engineer Intern / Research Assistant @ UMass Boston",
"Sep 2023 - Dec 2023: Software Engineer Intern @ PressKit.ai",
"Jul 2023 - Aug 2023: Web Development Mentor @ Innovators for Purpose",
"Jun 2023 - Sep 2023: Software Engineer Intern / Research Assistant @ UMass Boston",
"Feb 2023 - May 2023: Teaching Assistant for Intro to Computer Science (CS110) @ UMass Boston"
]

function App() {

  return (
    <div id="App">
      <div className="card">
        <h1>Hi, I'm Ayden!</h1>
        <h2>CS Student @ UMass Boston, incoming SWE Intern @ Fidelity</h2>
        <p>
        Here are a brief list of my work experiences:
        </p>
        <BulletedList items={WORK_EXPERIENCES}/>
        <CodeBlock text={CODE_TEXT} doScroll={true}/>
      </div>
    </div>
  )
}

export default App
