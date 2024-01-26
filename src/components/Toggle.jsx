import { IoGlasses, IoGlassesOutline } from 'react-icons/io5';

const Toggle = ({ handleChange, isChecked }) => {
    return (
        <div className="toggle-container">
            <input 
                type="checkbox" 
                className="toggle" 
                id="check"
                onChange={handleChange}
                checked={isChecked}
            />
            <label htmlFor="check">
                <div className="toggle-btn">
                    {isChecked === false ? <IoGlasses /> : <IoGlassesOutline />}
                </div>
                </label>
        </div>
    );
};

export default Toggle;