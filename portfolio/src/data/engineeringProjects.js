import ep1 from '../assets/ep/ep1.png';
import ep2 from '../assets/ep/ep2.jpg';
import ep3 from '../assets/ep/ep3_2.jpg';
import ep4 from '../assets/ep/ep4.jpg';
import ep5 from '../assets/ep/ep5.jpg';
import ep6 from '../assets/ep/ep6.jpg';
import ep7 from '../assets/ep/ep7.jpg';
import ep8 from '../assets/ep/ep8.jpg';

const engineeringProjects = [
  { 
    id: 1, 
    title: "ARGOS",
    image: ep1,
    path: "/ep1",
    description: "motor controller for ARGOS",
    year: "2019-2021"
  },
  { 
    id: 2, 
    title: "AMZ",
    image: ep2,
    path: "/ep2",
    description: "autonomous driving, state estimation",
    github: "https://github.com/...",
    year: "2021-2022"
  },
  { 
    id: 3, 
    title: "pitch tracking",
    image: ep3,
    path: "/ep3",
    description: "pitch tracking for orca sounds",
    github: "https://github.com/...",
    year: "2023-2024"
  },
  { 
    id: 4, 
    title: "datalogger",
    image: ep4,
    path: "/ep4",
    description: "wireless datalogger prototype for dental sterilizer",
    github: "https://github.com/...",
    year: "2022-2023"
  },
  { 
    id: 5, 
    title: "pose estimation",
    image: ep5,
    path: "/ep5",
    description: "human pose estimation using loosely attached IMUs",
    github: "https://github.com/...",
    year: "2023-2024"
  },
  { 
    id: 6, 
    title: "PPG",
    image: ep6,
    path: "/ep6",
    description: "hand pose regression using PPG",
    github: "https://github.com/...",
    year: "2024"
  },
  { 
    id: 7, 
    title: "RC car",
    image: ep7,
    path: "/ep7",
    description: "RC toy car with analog speed sensor, PID controller, and digital circuit power control",
    year: "2018"
  },
  { 
    id: 8, 
    title: "drone",
    image: ep8,
    path: "/ep8",
    description: "automate network measurement using inhouse drones",
    year: "2016"
  }
];

export default engineeringProjects;