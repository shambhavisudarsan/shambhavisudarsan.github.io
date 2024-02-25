import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'
import profilePic from '../../Images/profile_pic.jpg'


const About = () => {
  const { name, role, description, resume, social } = about

  return (
    <div className='Parent'>
    <div className='about'>
      {name && (
        <h1 className='about__name-out'>
          Hi, I am <br/><span className='about__name-in'>{name}</span>
        </h1>
      )}

      {role && <h2 className='about__role'>{role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume} target='_blank'
          rel="noopener noreferrer">
            <span type='button' className='btn btn--filled'>
              Resume
            </span>
            
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                target='_blank'
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target='_blank'
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
    <div className='photo-div'>
    <img src={profilePic} className='photo' alt="Shambhavi Sudarsan"/>
    {/* <img src="shamb.jpeg" width="100%" alt="Shambhavi Sudarsan"/> */}
  </div>
  </div>
  )
}

export default About
