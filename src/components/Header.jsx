import { useState } from 'react';
import { DiGithubFull } from 'react-icons/di';
import { IoLogoLinkedin, IoClose } from 'react-icons/io5';
import { FaTwitter } from 'react-icons/fa';
import selfieImg from '../images/self-3.jpg';

const Header = () => {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    return (
        <div className="header">
            {/* <IoGlasses className="toggle-btn" />
            <IoGlassesOutline 
            className="toggle-btn" 
            style={{ display: 'none' }}
            /> */}
            <div className="hero-container">
                <div className="hero">
                    <h4>Don Reniff</h4>
                    <div className="social-links">
                        <a href="https://github.com/dreniff3">
                            <DiGithubFull className="github-logo" />
                        </a>
                        <a href="https://www.linkedin.com/in/don-reniff/">
                            <IoLogoLinkedin className="linkedin-logo" />
                        </a>

                        <button 
                            className="modal-open-btn"
                            onClick={toggleModal}
                        >
                            <FaTwitter className="twitter-logo"/>
                        </button>
                        {modal && (
                            <div className="modal" id="modal">
                                <button 
                                    id="closeModal" 
                                    className="modal-close-btn"
                                    onClick={toggleModal}
                                >
                                    <IoClose className="close-x"/>
                                </button>
                                <img src={selfieImg} alt="An image of me" />
                            </div>
                        )}

                    </div>
                </div>
                <p className="roles">Computer Science Student / Full-Stack Developer</p>
            </div>
        </div>
    );
};

export default Header;