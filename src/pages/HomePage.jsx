import NavLinks from '../components/NavLinks';

const HomePage = () => {
    let links = [
        { name: 'Info', href: 'info' },
        { name: 'Projects', href: 'projects' },
        { name: 'Contact', href: 'contact' },
    ];

    return (
        <div className="homepage">
            <NavLinks links={links} />
        </div>
    );
};

export default HomePage;