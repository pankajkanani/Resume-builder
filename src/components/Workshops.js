import React from 'react';

const Workshops = ({ data }) => {
  const workshops = data.workshops;
  return (
    <div className='workshops'>
      <p className='heading'>
        <span className='material-icons'>developer_board</span>Workshops
      </p>
      <hr />
      {workshops.map((item, index) => (
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
            <p className='description'>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Workshops;
