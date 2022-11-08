const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://ShambhaviSudarsan.github.io/',
  title: 'SS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Shambhavi Sudarsan',
  role: '',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
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
    description: 'Courses:\n- Distributed Systems (CS6450)\n- Parallel Programming (CS6230)\n- Computer Architecture (CS6810)',
    GPA: 'Grade: NA',
    duration: 'Aug 2022 - Present',
    logoLink: 'https://media-exp1.licdn.com/dms/image/C560BAQHOj4lIdQUuYA/company-logo_200_200/0/1589925579896?e=1675900800&v=beta&t=mSh1HUdYnr1QFjHNxPFLpW-k7FJu7h2O6amebNCwOdM'
  },
  {
    collegeName: 'SIES Graduate School of Technology',
    degree: 'Bachelors of Engineering in Computer Engineering',
    description: 'Courses:\n- Analysis Of Algorithms\n- Discrete Structures\n- Database Management Systems\n- Computer Networks.',
    GPA: 'Grade: 8.48 / 10',
    duration: 'Aug 2017 - Jul 2021',
    logoLink: 'https://media-exp1.licdn.com/dms/image/C4D0BAQG4hhq2nDsOqQ/company-logo_200_200/0/1631888927941?e=1675900800&v=beta&t=lOhB-FoFZ4drKy1-kZym5bHwDh2VpkBhPx8W-S_27Wo'
  },
]

const experiences = [
  {
    companyName: 'SIES Graduate School Of Technology',
    designation: 'Research Assistant',
    duration: 'Feb 2022 - Jul 2022',
    description: '- Visualized NER tags to generate insights from patient records with the help of Neo4j.\n- Generated results by creating a knowledge graph and querying the graph using Cypher Query Language for possible diseases a person might have based on the different symptoms stated.',
    logoLink: 'https://media-exp1.licdn.com/dms/image/C4D0BAQG4hhq2nDsOqQ/company-logo_200_200/0/1631888927941?e=1675900800&v=beta&t=lOhB-FoFZ4drKy1-kZym5bHwDh2VpkBhPx8W-S_27Wo'
  },
  {
    companyName: 'Maxis Motion Controls',
    designation: 'GUI Developer - Intern',
    duration: 'Apr 2021 - Feb 2022',
    description: '- Enabled searching and deletion of multiple entities from the database by creating a GUI by employing Tkinter library from Python and connecting it with SQL Server 2014 database.\n- Created graphs in GUI using Matplotlib library of Python and built polar plots in the Tkinter-Canvas widget. Produced a curve to show deviation from the actual circle.',
    logoLink: 'https://media-exp1.licdn.com/dms/image/C560BAQG4c-9gishvww/company-logo_200_200/0/1622203017447?e=1675900800&v=beta&t=DSynKAPx-2Z1hiy8GRcOqNkFNzNnelNRgPZCsSgX5q0'
  },
]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
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
  email: 'johnsmith@mail.com',
}

export { header, about, educations, experiences ,projects, skills, contact}
