import React from 'react';

const Experience = ({ data }) => {
  const experience = data.experience;
  return (
    <div className='experience'>
      <p className='heading'>
        <span className='material-icons'>business_center</span>
        Experience
      </p>
      <hr />
      {experience.map((item, index) => (
        <div key={index} className='row-table'>
          <div className='left-column'>
            {item.year && (
              <p className='year'>
                <span className='fas fa-calendar-alt' />
                {item.year}
              </p>
            )}
          </div>
          <div className='right-column'>
            <p className='position'>{item.position}</p>
            <p className='company'>{item.company}</p>
            <p className='description'>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
