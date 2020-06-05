import React, { useState, useEffect, useRef, Fragment } from 'react';
import { useReactToPrint } from 'react-to-print';

import './styles/App.scss';
import Form from './components/Form';
import Resume from './components/Resume';

import jsonData from './data.json';

const App = () => {
  const [data, setData] = useState();

  useEffect(() => {
    setData(jsonData);
  }, []);

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className='mainContent'>
      {data !== undefined && (
        <Fragment>
          <div className='left'>
            <Form data={data} setData={setData} />
          </div>

          <div className='right'>
            <Resume ref={componentRef} data={data} />
          </div>

          <button className='printBtn' onClick={handlePrint}>
            Download / Print
          </button>
        </Fragment>
      )}
    </div>
  );
};

export default App;
