import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Tooltip } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { ReactElement } from 'react';
import FlaskIcon from './icons/FlaskIcon';

import './styles/SkillsList.css';

type Skill = {
  name: string;
  icon: ReactElement[];
  tooltip?: string;
}

const SkillsList = function() {
  const skills: Skill[] = [
    {
      name: 'Node.js, JavaScript & TypeScript (with Next.js & React)', icon:
        [
          <FontAwesomeIcon size="lg" icon={["fab", "js"]} />,
          <FontAwesomeIcon size="lg" icon={["fab", "node-js"]} />,
          <FontAwesomeIcon size="lg" icon={["fab", "react"]} />
        ],
      tooltip: "Since 2016!"
    },
    {
      name: 'Python (with Flask)', icon:
        [
          <FontAwesomeIcon size="lg" icon={["fab", "python"]} />, <FlaskIcon />
        ]
      , tooltip: "Since 2016!"
    },
    {
      name: 'Java (with Spring)',
      icon: [
        <FontAwesomeIcon size="lg" icon={["fab", "java"]} />,
        <FontAwesomeIcon size="lg" icon={["fas", "leaf"]} />,
      ],
      tooltip: "Since 2023!"
    },
    {
      name: 'Bash & Linux Terminal',
      icon: [
        <FontAwesomeIcon size="lg" icon={["fab", "linux"]} />,
        <FontAwesomeIcon size="lg" icon={["fas", "terminal"]} />
      ],
      tooltip: "Since 2018!"
    },
    {
      name: 'C',
      icon: [<FontAwesomeIcon size="lg" icon={["fas", "c"]} />],
      tooltip: "Since 2023!"
    },
    {
      name: 'OCaml',
      icon: [<FontAwesomeIcon size="lg" icon={["fas", "face-smile"]} />],
      tooltip: 'Since 2023! There was no OCaml icon :('
    },
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
            <ListItem className="list-item" key={index}>
              <ListItemIcon>
                <div className="skill-icon">
                  {skill.icon}
                </div>
              </ListItemIcon>
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
