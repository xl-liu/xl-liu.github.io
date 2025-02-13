import ep1_preview from '../assets/ep/ep1.png';
import ep2_preview from '../assets/ep/ep2.jpg';
import ep3_preview from '../assets/ep/ep3_2.jpg';
import ep4_preview from '../assets/ep/ep4.jpg';
import ep5_preview from '../assets/ep/ep5.jpg';
import ep6_preview from '../assets/ep/ep6.jpg';
import ep7_preview from '../assets/ep/ep7.jpg';
import ep8_preview from '../assets/ep/ep8.jpg';
import ep9_preview from '../assets/ep/ep9.jpg';

import ep1_teaser from '../assets/ep/ep1.png';
import ep2_teaser from '../assets/ep/ep2_teaser.png';
import ep3_teaser from '../assets/ep/ep3_teaser.png';
import ep4_teaser from '../assets/ep/ep4_teaser.png';
import ep5_teaser from '../assets/ep/ep5_teaser.png';
import ep6_teaser from '../assets/ep/ep6_teaser.png';
import ep7_teaser from '../assets/ep/ep7.jpg';
import ep8_teaser from '../assets/ep/ep8.jpg';
import ep9_teaser from '../assets/ep/ep9.jpg';

const engineeringProjects = [
  { 
    id: 1, 
    title: "microgravity simulator",
    subtitle: "motor controller for ARGOS",
    preview: ep1_preview,
    teaser: ep1_teaser,
    path: "/ep1",
    description: `During my two years at ARGOS as a systems / electrical engineer, 
      I worked on the control system for the three axis high power motors of the robot. 
      I troubleshot the firmware and hardware of the second generation system with custom 
      designed motor control PCBs. I also designed and built a prototype the control system 
      for the third generation gantry robot. 
      I constantly collaborated with the mechanical engineers, software engineers, 
      and technicians on the team or in the branch.`,
    year: "2019-2021"
  },
  { 
    id: 2, 
    title: "formula student",
    subtitle: "AMZ Racing team at ETH Zurich",
    preview: ep2_preview,
    teaser: ep2_teaser,
    path: "/ep2",
    description: "state estimation for both manual and autonomous driving.",
    year: "2021-2022"
  },
  { 
    id: 3, 
    title: "pitch tracking",
    subtitle: "for killer whale sounds",
    preview: ep3_preview, 
    teaser: ep3_teaser,
    path: "/ep3",
    description: `phase locked loop to estimate the pitch profile of killer whale sounds.
        data collection expedition in northen norway and published dataset at *`,
    year: "2023-2024"
  },
  { 
    id: 4, 
    title: "datalogger",
    subtitle: "for dental sterilizer",
    preview: ep4_preview,
    teaser: ep4_teaser,
    path: "/ep4",
    description: `wireless datalogger prototype for dental sterilizer verification.
    live data visualization using Flask and simultaneous data logging with threading.`,
    github: "https://github.com/...",
    year: "2022-2023"
  },
  { 
    id: 5, 
    title: "motion capture",
    subtitle: "IMU-based human pose estimation",
    preview: ep5_preview,
    teaser: ep5_teaser,
    path: "/ep5",
    description: `human pose estimation from loosely attached IMUs using deep learning, 
    realistic IMU data simulation`,
    github: "https://github.com/...",
    year: "2023-2024"
  },
  { 
    id: 6, 
    title: "hand pose estimation",
    subtitle: "using wrist-worn PPG",
    preview: ep6_preview,
    teaser: ep6_teaser,
    path: "/ep6",
    description: `BLE sensor interface using WireShark and bleak, 
    data visualization using Flask and plotly,
    regression using PyTorch`,
    github: "https://github.com/...",
    year: "2024"
  },
  { 
    id: 7, 
    title: "RC car",
    subtitle: "analog circuitry",
    preview: ep7_preview,
    teaser: ep7_teaser,
    path: "/ep7",
    description: "RC toy car with analog speed sensor, PID controller, and digital circuit power control",
    year: "2018"
  },
  { 
    id: 8, 
    title: "autonomous drone",
    subtitle: "Rice Networks Group",
    preview: ep8_preview,
    teaser: ep8_teaser,
    path: "/ep8",
    description: "automate network measurement using inhouse built Linux drones, ardupilot",
    year: "2016"
  },
  { 
    id: 9, 
    title: "rocket payload",
    subtitle: "RiceEclipse",
    preview: ep9_preview,
    teaser: ep9_teaser,
    path: "/ep9",
    description: "rocket payload with sensor kits",
    year: "2016"
  }
];

export default engineeringProjects;