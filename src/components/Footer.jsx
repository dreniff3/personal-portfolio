import { useState, useEffect } from "react";

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        // Update the year when the component mounts
        setYear(new Date().getFullYear());
    }, []);

    return (
        <>
            <p id="copyright">&copy;</p>
            <span id="date">{year}</span>
        </>
    );
};

export default Footer;