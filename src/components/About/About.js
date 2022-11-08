import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'
import './shamb.jpeg'

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

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
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
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
    <div className='photo-div'>
    <img src="https://media-exp1.licdn.com/dms/image/C4D03AQEwE2oZsWxIUA/profile-displayphoto-shrink_800_800/0/1661093413613?e=2147483647&v=beta&t=Vbcm2CG6WwOMoBuDaVl4LQOSBFuNE6O8Oq5fP109T-4" className='photo' alt="Shambhavi Sudarsan"/>
    {/* <img src="shamb.jpeg" width="100%" alt="Shambhavi Sudarsan"/> */}
  </div>
  </div>
  )
}

export default About
