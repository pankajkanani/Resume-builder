import React from 'react';

const Objective = ({ data }) => {
  const objective = data.objective;
  return (
    <div className='objective'>
      <p className='heading'>
        {/* <span className='material-icons'>gps_fixed</span> */}
        <span className='material-icons'>assistant</span>
        Objective
      </p>
      <hr />
      <div className='item'>{objective}</div>
    </div>
  );
};

export default Objective;
