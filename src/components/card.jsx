import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import profileImage from "../assets/profile.jpg"
export default function Card(){
    return (
        <div className="card">
            <div className="container-image">
                <img src={profileImage} alt="profile-image"/>
            </div>
            <h1>Wilbert Mojica C.</h1>
            <h3>FullStack Developer</h3>
            <h4>embyter.com</h4>
            <div className="buttons-container">
                <button className="btn-email"><FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px' }}/>Email</button>
                <button className="btn-linkedin"><FontAwesomeIcon icon={faLinkedin}  style={{ marginRight: '8px' }}/>LinkedIn</button>
            </div>
            <div className="text-content">
                <h2>About</h2>
                <p>I worked with technologies like Python (Django), Django REST framework, React, PostgreSQL, MySQL, Docker, AWS, and GCP.</p>
                <h2>Interests</h2>
                <p>Chess and AI</p>
            </div>
            <div className="social-media">
                <FontAwesomeIcon icon={faInstagram} color="#78777f" />
                <FontAwesomeIcon icon={faFacebook} color="#78777f" />
            </div>
        </div>
    )
}