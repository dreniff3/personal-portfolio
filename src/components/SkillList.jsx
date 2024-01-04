const SkillList = ({ category, skills }) => {
    return (
        <div className="category-container">
            <h5 className="category-title">{category}</h5>
            <ul className="category-list">
                {skills.map((skill, i) => {
                    return <li key={i}>{skill}</li>
                })}
            </ul>
        </div>
    );
};

export default SkillList;