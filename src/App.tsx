import reactLogo from './assets/react.svg'
import CodeBlock from './CodeBlock.tsx';

const codeText = `
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
        <CodeBlock text={codeText} doScroll={true}/>
      </div>
    </div>
  )
}

export default App
