import { GoArrowUpRight } from 'react-icons/go';

const ResumeButton = () => {
    return (
        <div className="resume-btn-container">
            <div className="resume-btn">
                <a href="resume" className="btn-text">View my resume</a>
                <GoArrowUpRight className="btn-text--arrow" />
            </div>
        </div>
    );
};

export default ResumeButton;