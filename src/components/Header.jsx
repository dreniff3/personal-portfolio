import { IoGlasses, IoGlassesOutline } from 'react-icons/io5';

const Header = () => {
    return (
        <>
            <IoGlasses className="toggle-btn" />
            <IoGlassesOutline 
            className="toggle-btn" 
            style={{ display: 'none' }}
            />
        </>
    );
};

export default Header;