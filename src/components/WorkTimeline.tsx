import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const WORK_EXPERIENCES = [
  ["Feb 2023 - May 2023", "Teaching Assistant for Intro to Computer Science (CS110) @ UMass Boston", "👨‍🏫"],
  ["Jun 2023 - Sep 2023", "Software Engineer Intern / Research Assistant @ UMass Boston", "👨‍🎓"],
  ["Sep 2023 - Dec 2023", "Software Engineer Intern (frontend + web scraping) @ PressKit.ai", "🖊️"],
  ["Dec 2023 - Jan 2024", "Software Engineer Intern / Research Assistant @ UMass Boston", "👨‍🎓"],
  ["Jan 2024 - Apr 2024", "Coding AI Trainer & Interviewer @ Scale AI & Remotasks", "🤖"],
  ["Apr 2024 - Jun 2024", "Fullstack Engineer @ DataNext Solutions / Megaship.ai", "💻"],
  ["Jun 2024 - Now", "Software Engineer Intern @ Fidelity Investments", "💸"]
];

// https://mui.com/material-ui/react-timeline/

function WorkTimeline() {
  return (
    <Timeline position="alternate">
      {
        WORK_EXPERIENCES.map((curr, i, arr) => {
            return (
      <TimelineItem key={i}>
        <TimelineOppositeContent color="text.secondary">{curr[0]}</TimelineOppositeContent>
        <TimelineSeparator>
          <p style={{margin: '3px', padding: 0, fontSize: '1.8rem'}}>{curr[2]}</p>
          {i !== arr.length - 1 ?
          <TimelineConnector /> : null
          }
        </TimelineSeparator>
        <TimelineContent>{curr[1]}</TimelineContent>
      </TimelineItem>
            );
          })
      }
    </Timeline>
  );
}

export default WorkTimeline;
