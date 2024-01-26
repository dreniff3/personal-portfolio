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
        { name: 'Projects', href: '/projects' },
        { name: 'Contact', href: '/contact' },
    ];

    let languages = ['Python', 'JavaScript', 'SQL', 'HTML/CSS'];
    let frameworks = ['Express.js', 'Flask', 'React'];
    let other = ['Node.js', 'MongoDB', 'MySQL', 'Git', 'Visual Studio Code'];

    const [hideSkills, setHideSkills] = useState(true);

    const toggleSkills = () => setHideSkills(!hideSkills);

    return (
        <div className="about-page">
            <NavLinks links={links} />
            <div className="about-container">
                <span className="line"></span>
                <div className="about-header">
                        <h5>Info</h5>
                    </div>
                <p className="about-text">
                A passionate learner with a growth mindset, currently enrolled in Oregon State University's post-bacc online Computer Science program.
                </p>
                <ResumeButton />
            </div>
            
            <div className="skills-container">
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

        </div>
    );
};

export default About;