import React, { Fragment, useState, useEffect } from 'react';
import Default from '../../images/default.jpg';

const Contact = ({ data }) => {
  const { name, photoUrl, location, phone, email, linkedin, github } = data.contact;

  const [Photo, setPhoto] = useState('');

  useEffect(() => {
    try {
      const temp = require('../../images/photo.jpg');
      setPhoto(temp);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Fragment>
      <div className='photo-container'>
        <img src={photoUrl.trim().length !== 0 ? photoUrl : Photo ? Photo : Default} alt={name} />
      </div>
      {name && <div className='name'>{name}</div>}
      <div className='contact'>
        {/* <p className='heading'>Personal Info</p> */}
        {/* <hr /> */}
        {location && (
          <div className='item'>
            <p className='material-icons icon'>location_on</p>
            <p className='text'>{location}</p>
          </div>
        )}
        {phone && (
          <div className='item'>
            <p className='material-icons icon'>phone</p>
            <p className='text'>
              <a href={'tel:' + phone}>{phone}</a>
            </p>
          </div>
        )}
        {email && (
          <div className='item'>
            <p className='material-icons icon'>email</p>
            <p className='text'>
              <a href={'mailto:' + email}>{email}</a>
            </p>
          </div>
        )}
        {linkedin && (
          <div className='item'>
            <i className='fab fa-linkedin icon'></i>
            <p className='text'>
              <a href={'https://www.' + linkedin} target='_blank' rel='noopener noreferrer'>
                {linkedin}
              </a>
            </p>
          </div>
        )}
        {github && (
          <div className='item'>
            <i className='fab fa-github icon'></i>
            <p className='text'>
              <a href={'https://www.' + github} target='_blank' rel='noopener noreferrer'>
                {github}
              </a>
            </p>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Contact;
