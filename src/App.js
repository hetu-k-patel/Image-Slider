import React from 'react';

import './App.css';
import Slider from './components/slider/Slider';

import { sliderImages } from './data/sampleData.js';

const App = () => {
   return (
      <div className="app">
         <Slider loop={true} auto={true} delay={1000} sliderImages={sliderImages} />
      </div>
   );
};

export default App;
