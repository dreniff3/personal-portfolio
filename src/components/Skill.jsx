import { FaPython, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { PiFileSqlDuotone } from "react-icons/pi";
import { FaHtml5 } from "react-icons/fa6";
import { SiExpress, SiFlask, SiMongodb, SiVisualstudio } from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const Skill = ({ skill, index }) => {
    let skills = {
        'Python': <FaPython />,
        'JavaScript': <RiJavascriptFill />,
        'SQL': <PiFileSqlDuotone />,
        'HTML/CSS': <FaHtml5 />,
        'Express.js': <SiExpress />,
        'Flask': <SiFlask />,
        'React': <FaReact />,
        'Node.js': <FaNodeJs />,
        'MongoDB': <SiMongodb />,
        'MySQL': <GrMysql />,
        'Git': <FaGitAlt />,
        'Visual Studio Code': <SiVisualstudio />,
    };

    return (
        <div className="skill-wrapper">
            <li key = {index} className="skill">
                {skills[skill]}
            </li>
            <div className="hoverBubble">
                <h3>{skill}</h3>
            </div>
        </div>
    );
};

export default Skill;