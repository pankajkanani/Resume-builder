import React from 'react';
import Contact from './sections/Contact';
import Skills from './sections/Skills';
import Languages from './sections/Languages';
import References from './sections/References';

const LeftContent = ({ data, Photo }) => {
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
