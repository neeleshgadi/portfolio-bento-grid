export interface ProjectType {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

export interface ExperienceType {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
}

export interface CertificationType {
  id: number;
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export interface HackathonType {
  id: number;
  name: string;
  project: string;
  date: string;
  position?: string;
}

export interface PublicationType {
  id: number;
  title: string;
  journal: string;
  date: string;
  link?: string;
}

export interface SkillType {
  category: string;
  items: string[];
}

// Mock data for portfolio
export const personalInfo = {
  name: "Neelesh Gadi",
  title: "Web Developer and Machine Learning Engineer",
  summary:
    "I’m a passionate Web Developer and Machine Learning Engineer, building intelligent, user-centric digital experiences that blend sleek design with smart functionality.",
  location: "Hyderabad, Telangana",
  email: "neeleshgadi@gmail.com",
  linkedin: "https://www.linkedin.com/in/neelesh-gadi-2b084424b/",
  github: "https://github.com/neeleshgadi",
};

export const aboutMe = `Hi, I'm a creative and driven Web Developer and Machine Learning Engineer with a passion for building smart, scalable, and visually striking digital solutions. I love crafting seamless web experiences using modern frontend and backend technologies while integrating intelligent ML models to add real-world value. Whether it’s developing responsive websites or designing data-driven systems, I thrive at the intersection of design, code, and data. I’m always learning, experimenting, and pushing boundaries to create impactful products.`;

export const skills: SkillType[] = [
  {
    category: "Frontend",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Framer Motion",
      "Next.js",
    ],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express",
      "GraphQL",
      "Firebase",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    category: "Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Figma",
      "Webpack",
      "Docker",
      "CI/CD",
      "Jest",
    ],
  },
  {
    category: "Machine Learning",
    items: ["Tensorflow", "Keras", "scikit_learn"],
  },
];

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "Rice Leaf Disease Classification",
    description:
      "A deep learning project for classifying rice leaf diseases using MobileNetV2 and transfer learning. Built with TensorFlow, trained on image data stored in Google Drive.",
    tags: [
      "TensorFlow / Keras",
      "Google Colab",
      "Matplotlib / Seaborn",
      "MobileNetV2",
      "Computer Vision",
    ],
    image: "https://images.pexels.com/photos/247597/pexels-photo-247597.jpeg",
  },
  {
    id: 2,
    title: "Lead Scoring System – Machine Learning Powered ",
    description:
      "A machine learning-based lead scoring system that predicts conversion probability and assigns a custom lead score using feature importance. Leads are classified into High, Medium, or Low quality to help businesses prioritize effectively. Powered by a Random Forest model and fully exportable results",
    tags: ["TensorFlow / Keras", "Google Colab", "Random Forest"],
    image: "https://images.pexels.com/photos/6207767/pexels-photo-6207767.jpeg",
  },
  {
    id: 3,
    title: "Confession Wall",
    description:
      "An anonymous Confession Wall web app where users can securely post and view confessions without revealing their identity.",
    tags: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
    image:
      "https://images.pexels.com/photos/27107645/pexels-photo-27107645/free-photo-of-paper-notes-hanging-outdoors.jpeg",
  },
  {
    id: 4,
    title: "Offensive Language Identification",
    description:
      "A web app that detects and flags offensive or toxic language in user input using AI-powered text classification.",
    tags: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "Toxicity Detection",
      "Natural Language Processing",
      "Machine Learning",
    ],
    image: "https://images.pexels.com/photos/7929446/pexels-photo-7929446.jpeg",
  },
];

export const experience: ExperienceType[] = [
  {
    id: 1,
    company: "Cipher Schools",
    position: "Java Fullstack Developer",
    duration: "Jan 2025 - Mar 2025",
    description:
      "Developed proficiency in Java and React through a comprehensive program that enhanced coding efficiency and project quality. Applied hands-on experience with Java, Spring Boot, React, Node.js, and MongoDB to build scalable applications while quickly adopting new technologies. Engineered and deployed full-stack applications integrating databases and RESTful APIs to improve user engagement and system performance. Enhanced expertise in authentication, state management, and modern UI frameworks to construct secure, adaptable applications aligned with cross-functional project requirements.",
  },
];

export const certifications: CertificationType[] = [
  {
    id: 1,
    title: "Cloud Computing",
    issuer: "Nptel",
    date: "Oct-2024",
  },
  {
    id: 2,
    title: "C/C++ Competitive Coding Problem Solving: Beginner to Master",
    issuer: "LPU",
    date: "July-2024",
  },
  {
    id: 3,
    title: "Complete Web Development Bootcamp",
    issuer: "Udemy",
    date: "Mar-2023",
  },
];

export const hackathons: HackathonType[] = [
  {
    id: 1,
    name: "Dr.Code",
    project: "Lead Management System",
    date: "March 2025",
    position: "Top 20",
  },
  // {
  //   id: 2,
  //   name: "Climate Tech Hackathon",
  //   project: "Carbon Footprint Tracker",
  //   date: "July 2022",
  //   position: "2nd Place"
  // },
  // {
  //   id: 3,
  //   name: "Health Innovations Hackathon",
  //   project: "Telemedicine Platform",
  //   date: "March 2021",
  // }
];

// export const publications: PublicationType[] = [
//   {
//     id: 1,
//     title: "Modern React State Management Patterns",
//     journal: "Web Development Today",
//     date: "2023",
//   },
//   {
//     id: 2,
//     title: "Optimizing Performance in React Applications",
//     journal: "JavaScript Monthly",
//     date: "2022",
//   },
//   {
//     id: 3,
//     title: "The Future of Frontend Development",
//     journal: "Tech Insights",
//     date: "2021",
//   },
// ];
