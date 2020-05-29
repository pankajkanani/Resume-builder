import React from 'react';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Languages from './components/Languages';
import References from './components/References';

const LeftContent = ({ data }) => {
  const check = (item) => {
    if (item && item.length > 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className='left-content'>
      <Contact data={data} />
      {check(data.skills) && <Skills data={data} />}
      {check(data.languages) && <Languages data={data} />}
      {check(data.references) && <References data={data} />}
    </div>
  );
};

export default LeftContent;
