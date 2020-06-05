import React from 'react';
import Objective from './sections/Objective';
import Education from './sections/Education';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Projects from './sections/Projects';
import Workshops from './sections/Workshops';

const RightContent = ({ data }) => {
  const check = (item) => {
    if (item && item.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className='right-content'>
      {check(data.objective) && <Objective data={data} />}
      {check(data.education) && <Education data={data} />}
      {check(data.experience) && <Experience data={data} />}
      {check(data.certifications) && <Certifications data={data} />}
      {check(data.projects) && <Projects data={data} />}
      {check(data.workshops) && <Workshops data={data} />}
    </div>
  );
};

export default RightContent;
