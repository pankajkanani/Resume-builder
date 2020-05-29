import React from 'react';

const Education = ({ data }) => {
  const education = data.education;
  return (
    <div className='education'>
      <p className='heading'>
        <span className='material-icons'>school</span>
        Education
      </p>
      <hr />
      {education.map((item, index) => (
        <div key={index} className='row-table'>
          <div className='left-column'>
            {item.year && (
              <p className='year'>
                <span className='fas fa-calendar-alt' />
                {item.year}
              </p>
            )}
            <p className='score'>
              {item.percentage
                ? `Percentage: ${item.percentage}`
                : item.cgpa && `CGPA: ${item.cgpa}`}
            </p>
          </div>
          <div className='right-column'>
            <p className='course'>{item.course}</p>
            <p className='institution'>{item.institution}</p>
            <p className='university'>
              {item.university ? item.university : item.board && item.board}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Education;
