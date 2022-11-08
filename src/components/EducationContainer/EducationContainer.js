import './EducationContainer.css'

const EducationContainer = ({ education }) => (
    <div className='degree-card'>
        <div className='degree-card-img'>
            <img src={education.logoLink} className='degree-logo-pic' alt="SIESGST"/>
        </div>
        <div className='degree-card-body'>
            <div className="degree-body-header">
                <div className="degree-body-header-title">
                    <h3 className="degree-collegeName">{education.collegeName}</h3>
                    <h4 className="degree-name">{education.degree}</h4>
                </div>
                <div className="degree-body-header-duration">
                    <h6 className="degree-duration">{education.duration}</h6>
                    <h6 className="degree-gpa">{education.GPA}</h6>
                </div>
            </div>
            <div className="degree-body-content">
                <pre className="degree-description">{education.description}</pre>
            </div>
        </div>
    </div>
)
export default EducationContainer