import { Link } from 'react-router-dom';

const NavLinks = () => {
    let links = [
        { name: 'Info', href: 'info' },
        { name: 'Projects', href: 'projects' },
        { name: 'Contact', href: 'contact' },
    ];

    return (
        <nav>
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