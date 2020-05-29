import React from 'react';

const Certifications = ({ data }) => {
  const certifications = data.certifications;
  return (
    <div className='certifications'>
      <p className='heading'>
        <span className='material-icons'>card_membership</span>
        {/* <span className='material-icons'>card_giftcard</span> */}
        Certifications
      </p>
      <hr />
      {certifications.map((item, index) => (
        <div key={index} className='row-table'>
          <div className='left-column'>
            {item.year && (
              <p className='year'>
                <span className='fas fa-calendar-alt' />
                {item.year}
              </p>
            )}
            {item.score && <p className='score'>Score: {item.score}</p>}
          </div>
          <div className='right-column'>
            <p className='course'>{item.course}</p>
            <p className='institution'>{item.institution}</p>
            <p className='description'>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
