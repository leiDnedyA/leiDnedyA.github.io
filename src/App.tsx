import reactLogo from './assets/react.svg'
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

function App() {

  return (
    <div id="App">
      <div className="card">
        <h1>Hi, I'm Ayden!</h1>
        <h2>CS Student @ UMass Boston, incoming SWE Intern @ Fidelity</h2>
        <p>
        Here are a brief list of my work experiences:
        </p>
        <CodeBlock text={CODE_TEXT} doScroll={true}/>
      </div>
    </div>
  )
}

export default App
