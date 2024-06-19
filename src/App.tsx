import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Box, Link, Tooltip } from '@mui/material';

import WorkTimeline from './components/WorkTimeline.tsx'
import SkillsList from './components/SkillsList.tsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SOCIAL_LINKS = {
  github: "https://github.com/leiDnedyA/",
  linkedin: "https://www.linkedin.com/in/ayden-diel-9b0972191/"
};

const RESUME_URL = "./resume.pdf";

function App() {

  return (
    <div id="App">
      <Box component="section" sx={{
        display: "flex",
        flexDirection: "column",
        gap: "15px"

      }}>
        <Box component="section" sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "15px"
        }}>
          <Tooltip title="Hello!">
            <Typography variant="h2" className="header-text"><span className="fake-tag-text">{'<h1>'}</span>Hi, I'm Ayden! 💻<span className="fake-tag-text">{'</h1>'}</span></Typography>
          </Tooltip>
          <Typography variant="h5" className="header-text">
            I'm a SWE Intern @ Fidelity and a CS Student @ UMass Boston!
          </Typography>
          <Button className="download-button" onClick={() => {
            const result = window.open(RESUME_URL, '_blank');
            if (result !== null) {
              result.focus();
            }
          }}>My Resume <div className="download-button-icon"><FontAwesomeIcon icon={["fas", "caret-down"]}/></div></Button>
        </Box>
        <Divider/>
        <Box sx={{ marginTop: "10px" }}></Box>
        <Typography variant="h5" className="header-text" >
          <span className="fake-tag-text">{'<h2>'}</span>Here are some of the work experiences I've had!<span className="fake-tag-text">{'</h2>'}</span>
        </Typography>
        <WorkTimeline />
        <Divider/>
        <Box sx={{ marginTop: "10px" }}></Box>
        <Typography variant="h5" className="header-text">
          <span className="fake-tag-text">{'<h2>'}</span>Here are some technologies I like to work with!<span className="fake-tag-text">{'</h2>'}</span>
        </Typography>
        <SkillsList />
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}>
          <Typography>
          <span className="fake-tag-text">{'<p>'}</span>
          {"Let's connect :) | "}
            <Link href={SOCIAL_LINKS.github} underline="always">
              {'Github '}
              <FontAwesomeIcon icon={["fab", "github"]}/>
            </Link>
            {" | "}
            <Link href={SOCIAL_LINKS.linkedin} underline="always">
              {'LinkedIn '}
              <FontAwesomeIcon icon={["fab", "linkedin"]}/>
            </Link>
          <span className="fake-tag-text">{'</p>'}</span>
          </Typography>
        </Box>
      
      </Box>
    </div>
  )
}

export default App
