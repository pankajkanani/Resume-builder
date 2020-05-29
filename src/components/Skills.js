import React from 'react';

const Skills = ({ data }) => {
  const skills = data.skills;
  return (
    <div className='skills'>
      <p className='heading'>
        {/* <span className='fas fa-puzzle-piece' /> */}
        <span className='material-icons'>extension</span>
        Skills
      </p>
      <hr />
      <div className='skills-container'>
        {skills.map((item, index) => {
          return (
            <div key={index} className='item'>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
