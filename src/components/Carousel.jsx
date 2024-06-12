import { useEffect, useState } from "react";
import { FaLink } from "react-icons/fa";
import { DiGithubFull } from 'react-icons/di';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import battleshipImg from '../images/battleship.png';
import combatTrackerImg from '../images/combat_tracker_example.png';
import dreamofferImg from '../images/dreamoffer.png';
import workoutImg from '../images/workoutlog.png';

const Carousel = () => {
    let list = [
        {
            src: combatTrackerImg,
            name: 'Combat Tracker',
            link: 'https://combat-tracker.onrender.com/',
            github: 'https://github.com/dreniff3/Combat-Tracker',
            stack: ['HTML', 'CSS', 'JavaScript', 'React'],
            desc: 'Combat Tracker is a simple tool for tracking combat encounters in tabletop roleplaying games.',
        },
        {
            src: dreamofferImg,
            name: 'DreamOffer',
            link: 'https://dream-offer.herokuapp.com/',
            github: 'https://github.com/dreniff3/DreamOffer/',
            stack: ['HTML', 'CSS', 'JavaScript', 'Python', 'Flask', 'MySQL'],
            desc: 'DreamOffer is an admin portal for a Job Application Tracking website.',
        },
        {
            src: workoutImg,
            name: 'Workout Log',
            link: '',
            github: 'https://github.com/dreniff3/Workout-Log',
            stack: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB'],
            desc: 'Workout Log is a MERN app that tracks exercises completed by the user.',
        },
        {
            src: battleshipImg,
            name: 'Python Battleship',
            link: '',
            github: 'https://github.com/dreniff3/python-battleship-with-gui',
            stack: ['Python'],
            desc: 'Python Battleship allows two people to play the game Battleship using a GUI made with Tkinter, originally created as a school project.',
        },
    ];

    const [projects, setProjects] = useState(list);
    const [currentProject, setCurrentProject] = useState(0);

    const prevSlide = () => {
        setCurrentProject((project) => {
            return ((project - 1 + projects.length) % projects.length);
        });
    };
    const nextSlide = () => {
        setCurrentProject((project) => {
            return ((project + 1) % projects.length);
        });
    };

    return (
        <section className="slider-container">
            {projects.map((project, index) => {
                const { src, name, link, github, stack, desc } = project;
                return <article
                            className='slide'
                            style={{
                                transform: `translateX(${100 * (index - currentProject)}%)`,
                                opacity: index === currentProject ? 1 : 0,
                                visibility: index === currentProject ? 'visible' : 'hidden',
                            }}
                            key={name}
                        >
                            <img src={src} alt={name} className="slider-img" />
                            <div className="slider-header">
                                <h5 className="slider-name">{name}</h5>
                                <div className="slider-links">
                                    {link === '' ? <></> : <a href={link} className="link-logo"><FaLink /></a>}
                                    <a href={github} className="github-logo"><DiGithubFull /></a>
                                </div>
                            </div>
                            <div className="slider-stack">
                                <ul>
                                    {stack.map((tech, i) => {
                                        return <li key={i}>{tech}</li>
                                    })}
                                </ul>
                            </div>
                            <p className="slider-desc">{desc}</p>
                        </article>
            })}
            <button 
                type="button" 
                className="prev"
                onClick={prevSlide}
            >
                <FiChevronLeft />
            </button>

            <div className="dots">
                {list.map((project, index) => {
                        return (
                            <ul>
                                <li key={index} className={index === currentProject ? "dot filled-dot" : "dot empty-dot"}>
                                    {index === currentProject ? "● " : "○ "}
                                </li>
                            </ul>
                        );
                    })}
            </div>

            <button 
                type="button" 
                className="next"
                onClick={nextSlide}
            >
                <FiChevronRight />
            </button>
        </section>
    );
};

export default Carousel;