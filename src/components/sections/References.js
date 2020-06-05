import React from 'react';

const References = ({ data }) => {
  const references = data.references;

  return (
    <div className='reference'>
      <p className='heading'>
        <span className='material-icons'>contact_mail</span>Reference
      </p>
      <hr />
      {references.map((item, index) => (
        <div key={index} className='reference-item'>
          {item.desig && (
            <div className='item'>
              <p className='text rname'>{item.name}</p>
            </div>
          )}
          {item.desig && (
            <div className='item'>
              <p className='text desig'>{item.desig}</p>
            </div>
          )}
          {item.phone && (
            <div className='item'>
              <p className='material-icons icon'>phone</p>
              <p className='text'>
                <a href={'tel:' + item.phone}>{item.phone}</a>
              </p>
            </div>
          )}
          {item.email && (
            <div className='item'>
              <p className='material-icons icon'>email</p>
              <p className='text'>
                <a href={'mailto:' + item.email}>{item.email}</a>
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default References;
