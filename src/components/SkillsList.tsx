import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

const SkillsList = function () {
  const skills = [
    { name: 'JavaScript & TypeScript', icon: <FontAwesomeIcon icon={["fab", "js"]}/> },
    { name: 'React', icon: <FontAwesomeIcon icon={["fab", "react"]}/> },
    { name: 'Node.js', icon: <FontAwesomeIcon icon={["fab", "node-js"]}/> },
    { name: 'Python', icon: <FontAwesomeIcon icon={["fab", "python"]}/> },
    { name: 'Bash & Linux Terminal', icon: <FontAwesomeIcon icon={["fab", "linux"]}/> },
    { name: 'C', icon: <FontAwesomeIcon icon={["fas", "c"]}/> },
    { name: 'OCaml', icon: <FontAwesomeIcon icon={["fas", "face-smile"]}/> },
    // { name: 'Python', icon: <FontAwesomeIcon icon={faPython} /> },
    // { name: 'Bash & Linux/Unix Terminal', icon: <FontAwesomeIcon icon={faTerminal} /> },
    // { name: 'C', icon: <FontAwesomeIcon icon={faC} /> },
    // { name: 'OCaml', icon: <FontAwesomeIcon icon={faAtom} /> },
    // { name: 'Racket', icon: <FontAwesomeIcon icon={faChessPawn} /> },
  ];

  return (
    <List>
      {skills.map((skill, index) => (
        <ListItem key={index}>
          <ListItemIcon>{skill.icon}</ListItemIcon>
          <ListItemText>
            <Typography variant="body1">{skill.name}</Typography>
          </ListItemText>
        </ListItem>
      ))}
      <p>Note: there was no OCaml icon so I used a smiley face :)</p>
    </List>
  );
};

export default SkillsList;
