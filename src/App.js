import React from 'react';
import './styles/App.scss';
import LeftContent from './LeftContent';
import RightContent from './RightContent';
import data from './data.json';

function App() {
  return (
    <div className='mainContent'>
      <div className='row'>
        <LeftContent data={data} />
        <RightContent data={data} />
      </div>
    </div>
  );
}

export default App;
