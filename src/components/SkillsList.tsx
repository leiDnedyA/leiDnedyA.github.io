import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Tooltip } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { ReactElement } from 'react';

import './styles/SkillsList.css';

type Skill = {
  name: string;
  icon: ReactElement;
  tooltip?: string;
}

const SkillsList = function () {
  const skills: Skill[] = [
    { name: 'JavaScript & TypeScript', icon: <FontAwesomeIcon icon={["fab", "js"]}/>, tooltip: "Since 2016!"},
    { name: 'React', icon: <FontAwesomeIcon icon={["fab", "react"]}/>, tooltip: "Since 2020!"},
    { name: 'Node.js', icon: <FontAwesomeIcon icon={["fab", "node-js"]}/>, tooltip: "Since 2019!" },
    { name: 'Python', icon: <FontAwesomeIcon icon={["fab", "python"]}/>, tooltip: "Since 2016!" },
    { name: 'Bash & Linux Terminal', icon: <FontAwesomeIcon icon={["fab", "linux"]}/>, tooltip: "Since 2018!" },
    { name: 'C', icon: <FontAwesomeIcon icon={["fas", "c"]}/>, tooltip: "Since 2023!" },
    { name: 'OCaml', icon: <FontAwesomeIcon icon={["fas", "face-smile"]}/>, tooltip: 'Since 2023! There was no OCaml icon :('},
  ];

  return (
    <Box component="section" sx={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      gap: "15px",
      margin: "25px 0"
    }}>
      <Box component="div" className="skills-list" sx={{
        backgroundColor: "divider",
      }}>
        <List>
          {skills.map((skill, index) => (
            <ListItem key={index}>
              <div className="skill-icon">
                <ListItemIcon>{skill.icon}</ListItemIcon>
              </div>
              <ListItemText>
              {skill.hasOwnProperty("icon") ? 
                <Tooltip title={skill.tooltip}><Typography variant="body1">{skill.name}</Typography></Tooltip>
                 :
                <Typography variant="body1">{skill.name}</Typography>
              }
              </ListItemText>
            </ListItem>
          ))}
        </List>

      </Box>
    </Box>
  );
};

export default SkillsList;
