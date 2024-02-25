import uouLogo from './Images/university_of_utah_logo.jpg'
import siesLogo from './Images/sies_gst_logo.jpg'
import maxismotionLogo from './Images/maxis_motion_logo.jpg'

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://ShambhaviSudarsan.github.io/',
  title: 'SS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Shambhavi Sudarsan',
  role: 'MS in Computer Science student at the University Of Utah',
  description:
    'Hard working and highly motivated student with strong foundation in Data Structures and Algorithms currently looking for Summer 2023 internship opportunities.',
  resume: 'https://drive.google.com/file/d/1Q7kK6WiDZv37X5rBv3Vyba97b6ccPiTQ/view?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/shambhavisudarsan/',
    github: 'https://github.com/ShambhaviSudarsan',
  },
}

const educations = [
  {
    collegeName: 'University of Utah',
    degree: 'Master of Science in Computer Science',
    description: 'Graduate Algorithms, NLP, Deep Learning, Machine Learning, Distributed Systems, Operating Systems, Parallel Programming',
    GPA: 'Grade: 3.67 / 4.00',
    duration: 'Aug 2022 - Present',
    logoLink: uouLogo
  },
  {
    collegeName: 'SIES Graduate School of Technology',
    degree: 'Bachelors of Engineering in Computer Engineering',
    description: 'Analysis Of Algorithms, Discrete Structures, Database Management Systems, Computer Networks',
    GPA: 'Grade: 8.48 / 10',
    duration: 'Aug 2017 - Jul 2021',
    logoLink: siesLogo
  },
]

const experiences = [
  {
    companyName: 'University of Utah',
    designation: 'Research Assistant',
    duration: 'May 2023 - Aug 2023',
    description: '- Engineered a smart Depth-First Search (DFS) algorithm with CUDA parallelization for efficient grid-based pathfinding, resulting in a 30% decrease in execution time.\n- Revitalized the UIRoute maze routing algorithm, improving runtime by 50% through advanced CUDA-accelerated parallelization and parallelized A* search.',
    logoLink: uouLogo
  },
  {
    companyName: 'SIES Graduate School Of Technology',
    designation: 'Research Assistant',
    duration: 'Feb 2022 - Jul 2022',
    description: '- Visualized NER tags to generate insights from patient records with the help of Neo4j.\n- Generated results by creating a knowledge graph and querying the graph using Cypher Query Language for possible diseases a person might have based on the different symptoms stated.',
    logoLink: siesLogo
  },
  {
    companyName: 'Maxis Motion Controls',
    designation: 'Software Engineer Intern',
    duration: 'Apr 2021 - Feb 2022',
    description: '- Spearheaded the development of a Python-Tkinter desktop application, employing an object-oriented architecture and currently servicing over 100 users.\n- Seamlessly integrated polar plots and graphs, enabling thorough visualization and comparison of roll grinder measurements sourced from a Microsoft SQL Server database.\n- Improved data visualization with a 30% granularity boost through advanced features like zoom, saving time and enhancing analysis efficiency. Additionally, created a user-friendly interface using ttk-bootstrap.',
    logoLink: maxismotionLogo
  },
]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Personal Portfolio Website',
    description:
      'A responsive personal portfolio website hosted on github.',
    stack: ['ReactJS', 'Javascript', 'HTML','CSS'],
    sourceCode: 'https://github.com/shambhavisudarsan/shambhavisudarsan.github.io',
    publicationLink: '',
    livePreview: 'https://shambhavisudarsan.github.io/',
  },
  {
    name: 'E-commerce Website with Image Search and Price Prediction',
    description:
      'An e-commerce website with Image Search and Price Prediction features to search images and predict new/used prices for buyers and sellers.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/shambhavisudarsan/E-commerce',
    publicationLink: 'https://link.springer.com/chapter/10.1007/978-981-16-9605-3_57',
    livePreview: 'https://buytes.herokuapp.com/',
  },
  {
    name: 'Distributed Systems Project',
    description:
      'Deployed distributed MapReduce with workers and coordinators. Built a fault-tolerant key/value storage system on top of Raft.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: '',
    publicationLink: '',
    livePreview: '',
  },
  {
    name: 'Detection of Cyberbullying in Social Media',
    description:
      'Leveraged transfer learning technique to improve accuracy of LSTM and CNN models over Twitter and Formspring dataset.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: '',
    publicationLink: '',
    livePreview: '',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'sudarsanshambhavi@gmail.com',
}

export { header, about, educations, experiences ,projects, skills, contact}
