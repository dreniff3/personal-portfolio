import NavLinks from '../components/NavLinks';

const HomePage = () => {
    return (
        <>
            <div className="bio">
                <h4>Don Reniff</h4>
                <p>Computer Science Student / Full-Stack Developer</p>
                <p>Currently enrolled in Oregon State University's post-bacc online Computer Science program.</p>
            </div>

            <NavLinks />
        </>
    );
};

export default HomePage;