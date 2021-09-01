import React, { useState } from 'react';

import './App.css';
import Slider from './components/slider/Slider';

import { sliderImages } from './data/sampleData.js';

const App = () => {
   const [isAuto, setIsAuto] = useState('');
   const [isLoop, setIsLoop] = useState('');
   const [delay, setDelay] = useState('');

   return (
      <div className="app">
         <div className="options">
            <select
               name=""
               value={isAuto}
               onChange={(e) => {
                  setIsAuto(e.target.value);
               }}
            >
               <option disabled value="">
                  Is Automatic
               </option>
               <option value="true">Yes</option>
               <option value="false">No</option>
            </select>
            <select
               name=""
               value={isLoop}
               onChange={(e) => {
                  setIsLoop(e.target.value);
               }}
            >
               <option disabled value="">
                  Is Infinite Loop
               </option>
               <option value="true">Yes</option>
               <option value="false">No</option>
            </select>
            {isAuto === 'true' ? (
               <select
                  name=""
                  value={delay}
                  onChange={(e) => {
                     setDelay(e.target.value);
                  }}
               >
                  <option disabled value="">
                     Delay
                  </option>
                  <option value="1">1 second</option>
                  <option value="2">2 second</option>
                  <option value="3">3 second</option>
               </select>
            ) : null}
         </div>
         <Slider
            loop={isLoop === 'true' ? true : false}
            auto={isAuto === 'true' ? true : false}
            delay={delay ? parseInt(delay) * 1000 : undefined}
            sliderImages={sliderImages}
         />
      </div>
   );
};

export default App;
