import React, { useState, useEffect, useRef, Fragment } from 'react';
import { useReactToPrint } from 'react-to-print';

import './styles/App.scss';
import Form from './components/Form';
import Resume from './components/Resume';

import jsonData from './data.json';

const App = () => {
  const [data, setData] = useState();
  const [preset, setPreset] = useState([
    { primary: '#009688', background: '#ebf5f4', skills: '#e5f4f3' },
    { primary: '#2196f3', background: '#e8f4fe', skills: '#e2f2ff' },
    { primary: '#263238', background: '#f0f0f0', skills: '#e0e0e0' },
    { primary: '#3f51b5', background: '#ebedf7', skills: '#e1e3f8' },
  ]);

  const [color, setColor] = useState({
    primary: '#009688',
    background: '#e5f4f3',
    skills: '#e5f4f3',
  });

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
            <Form data={data} setData={setData} preset={preset} setColor={setColor} />
          </div>

          <div className='right'>
            <Resume ref={componentRef} data={data} color={color} />
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
