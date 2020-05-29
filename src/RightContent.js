import React from 'react';
import Objective from './components/Objective';
import Education from './components/Education';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Projects from './components/Projects';
import Workshops from './components/Workshops';

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
