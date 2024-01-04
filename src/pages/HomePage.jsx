import NavLinks from '../components/NavLinks';
import { DiGithubFull } from 'react-icons/di';
import { IoLogoLinkedin } from 'react-icons/io5';

const HomePage = () => {
    let links = [
        { name: 'Info', href: 'info' },
        { name: 'Projects', href: 'projects' },
        { name: 'Contact', href: 'contact' },
    ];

    return (
        <>
            <div className="bio">
                <div className="bio-header">
                    <h4>Don Reniff</h4>
                    <div className="social-links">
                        <DiGithubFull className="github-logo" />
                        <IoLogoLinkedin className="linkedin-logo" />
                    </div>
                </div>
                <p className="info-header">Computer Science Student / Full-Stack Developer</p>
                <p className="info-description">Currently enrolled in Oregon State University's post-bacc online Computer Science program.</p>
                <a href="resume" className="btn-text">View my resume &rarr;</a>
            </div>

            <NavLinks links={links} />
        </>
    );
};

export default HomePage;