import NavLinks from "../components/NavLinks";
import Carousel from '../components/Carousel';

const Projects = () => {
    let links = [
        { name: 'Home', href: '/' },
        { name: 'Info', href: '/info' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <div className="projects-page">
            <NavLinks links={links} />
            <div className="projects-container">
                <span className="line"></span>
                <div className="projects-header">
                    <h5>Projects</h5>
                </div>
                <Carousel />
            </div>
        </div>
    );
};

export default Projects;