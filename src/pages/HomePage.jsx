import NavLinks from '../components/NavLinks';
import ResumeButton from '../components/ResumeButton';
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
                <div className="home-info-description-container">
                    <p className="info-header">Computer Science Student / Full-Stack Developer</p>
                    <p className="info-description">A passionate learner with a growth mindset, currently enrolled in Oregon State University's post-bacc online Computer Science program.</p>
                    {/* <p className="info-description">I am a motivated learner who loves problem solving and cares about writing clean, readable, well-documented and efficient code.</p> */}
                </div>
                <ResumeButton />
            </div>

            <NavLinks links={links} />
        </>
    );
};

export default HomePage;