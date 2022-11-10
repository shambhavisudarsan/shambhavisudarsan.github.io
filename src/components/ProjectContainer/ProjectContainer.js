import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import ArticleIcon from '@mui/icons-material/Article';
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => (
  <a href={project.sourceCode} target='_blank' rel='noopener noreferrer'>
  <div className='project'>
    <div className='project__header'>
    <h3 className='project__name'>{project.name}</h3>
    <div className='project__icons'>
    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        target= "_blank"
        rel='noopener noreferrer'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {project.publicationLink && (
      <a
        href={project.publicationLink}
        aria-label='source code'
        target= "_blank"
        rel='noopener noreferrer'
        className='link link--icon'
      >
        <ArticleIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        target= "_blank"
        rel='noopener noreferrer'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
    </div>
    </div>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}
  </div>
  </a>
)

export default ProjectContainer
