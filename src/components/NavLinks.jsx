import { Link } from 'react-router-dom';

const NavLinks = ({ links }) => {
    return (
        <nav className="nav-links">
            <ul>
                {links.map((link) => {
                    return <li key={link.name}>
                        <Link 
                            to={link.href} 
                            className='link'
                        >
                            {link.name}
                        </Link>
                    </li>
                })}
            </ul>
        </nav>
    );
};

export default NavLinks;