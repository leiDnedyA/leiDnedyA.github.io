import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

const WORK_EXPERIENCES = [
  ["Feb 2023 - May 2023", "Teaching Assistant for Intro to Computer Science (CS110) @ UMass Boston"],
  ["Jun 2023 - Sep 2023", "Software Engineer Intern / Research Assistant @ UMass Boston"],
  ["Jul 2023 - Aug 2023", "Web Development Mentor @ Innovators for Purpose"],
  ["Sep 2023 - Dec 2023", "Software Engineer Intern @ PressKit.ai"],
  ["Dec 2023 - Jan 2024", "Software Engineer Intern / Research Assistant @ UMass Boston"],
  ["Jan 2024 - Now", "Coding AI Trainer & Interviewer @ Scale AI & Remotasks"],
];

// https://mui.com/material-ui/react-timeline/

function WorkTimeline() {
  return (
    <Timeline position="alternate">
      {
        WORK_EXPERIENCES.map((curr, i, arr) => {
            return (
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">{curr[0]}</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
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
