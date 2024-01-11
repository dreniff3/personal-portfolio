import { IoGlasses, IoGlassesOutline } from 'react-icons/io5';
import { DiGithubFull } from 'react-icons/di';
import { IoLogoLinkedin } from 'react-icons/io5';

const Header = () => {
    return (
        <div className="header">
            <IoGlasses className="toggle-btn" />
            <IoGlassesOutline 
            className="toggle-btn" 
            style={{ display: 'none' }}
            />
            <div className="hero-container">
                <div className="hero">
                    <h4>Don Reniff</h4>
                    <div className="social-links">
                        <DiGithubFull className="github-logo" />
                        <IoLogoLinkedin className="linkedin-logo" />
                    </div>
                </div>
                <p className="roles">Computer Science Student / Full-Stack Developer</p>
            </div>
        </div>
    );
};

export default Header;