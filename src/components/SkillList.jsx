import Skill from './Skill.jsx';

const SkillList = ({ category, skills }) => {
    return (
        <div className="category-container">
            <h5 className="category-title">{category}</h5>
            <ul className="category-list">
                {skills.map((skill, i) => {
                    return <Skill skill={skill} index={i} />
                })}
            </ul>
        </div>
    );
};

export default SkillList;