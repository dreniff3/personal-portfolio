import { useState } from 'react';
import NavLinks from '../components/NavLinks';
// import { IoMailOutline } from "react-icons/io5";
import { RiMailLine, RiMailSendLine } from "react-icons/ri";

const Contact = () => {
    let links = [
        { name: 'Home', href: '/' },
        { name: 'Info', href: '/info' },
        { name: 'Projects', href: '/projects' },
    ];

    const [hover, setHover] = useState(false);

    return (
        <div className="contact-page">
            <NavLinks links={links} />
            <div className="contact-container">
                <a 
                    href="mailto:donaldreniff@gmail.com" 
                    className="contact-link"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                >
                    {hover ? <RiMailSendLine className="contact-icon" /> : <RiMailLine className="contact-icon" />}
                </a>
            </div>
        </div>
    );
};

export default Contact;