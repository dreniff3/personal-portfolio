import { useState } from 'react';
import NavLinks from '../components/NavLinks';
import { DiGithubFull } from 'react-icons/di';
import { IoLogoLinkedin } from 'react-icons/io5';
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

// Import components
import SkillList from '../components/SkillList';
import ResumeButton from '../components/ResumeButton';

const About = () => {
    let links = [
        { name: 'Home', href: '/' },
        { name: 'Projects', href: 'projects' },
        { name: 'Contact', href: 'contact' },
    ];

    let languages = ['Python', 'JavaScript', 'SQL', 'HTML/CSS'];
    let frameworks = ['Express.js', 'Flask', 'React'];
    let other = ['Node.js', 'MongoDB', 'MySQL', 'Git', 'Visual Studio Code'];

    const [hideSkills, setHideSkills] = useState(true);

    const toggleSkills = () => setHideSkills(!hideSkills);

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
            <div className="skills">
                    <span className="line"></span>
                    <button 
                        className="show-btn--skills"
                        onClick={toggleSkills}
                    >
                        <IoIosArrowDown />
                    </button>
                    <div className="skills-header">
                        <h5>Skills</h5>
                    </div>
                    {hideSkills ? <div className="empty"></div> : 
                                        <div className="skills-list">
                                        <SkillList 
                                            category={'Languages:'} 
                                            skills={languages} 
                                        />
                                        <SkillList 
                                            category={'Frameworks/Libraries:'} 
                                            skills={frameworks} 
                                        />
                                        <SkillList 
                                            category={'Other Technologies:'} 
                                            skills={other} 
                                        />
                                    </div>
                    }
                </div>
            <NavLinks links={links} />
        </>
    );
};

export default About;