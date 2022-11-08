import './ExperienceContainer.css'

const ExperienceContainer = ({ experience }) => (
    <div className='work-card'>
        <div className='work-card-img'>
            <img src={experience.logoLink} className='work-logo-pic' alt="SIESGST"/>
        </div>
        <div className='work-card-body'>
            <div className="work-body-header">
                <div className="work-body-header-title">
                    <h3 className="work-designation">{experience.designation}</h3>
                    <h4 className="work-companyName">{experience.companyName}</h4>
                </div>
                <div className="work-body-header-duration">
                    <h6 className="work-duration">{experience.duration}</h6>
                </div>
            </div>
            <div className="work-body-content">
                <pre className="work-description">{experience.description}</pre>
            </div>
        </div>
    </div>
)
export default ExperienceContainer