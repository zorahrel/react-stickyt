import React from 'react';
import Sticky from './stickyt';
import './docs.css';

const Docs = () => (
  <div style={{ height: '200vh', display: 'flex', textAlign: 'center', width: '90%', margin: '0 auto' }}>
    <div style={{ marginTop: '50px', width: '33vw' }}>
      <Sticky offset={'35'} className='box' style={{  backgroundColor: 'green' }}>
        OH!
      </Sticky>
    </div>
    <div style={{ marginTop: '35vh', width: '33vw' }}>
      <Sticky offset={'70'} className='box' style={{ backgroundColor: 'red' }}>
        OH!
      </Sticky>
    </div>
    <div style={{ marginTop: '70vh', width: '33vw' }}>
      <Sticky offset={'105'} className='box' style={{ backgroundColor: 'blue' }}>
        OH!
      </Sticky>
    </div>
  </div>
);

export default Docs;