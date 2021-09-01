import React, { useEffect, useState } from 'react';

import './styles.css';

let TOTAL_SLIDES;
const Slider = ({ loop, auto, sliderImages, delay = 2500 }) => {
   const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
   const [isAuto, setIsAuto] = useState(false);
   const [isLoop, setIsLoop] = useState(false);

   useEffect(() => {
      TOTAL_SLIDES = sliderImages.length;
      if (TOTAL_SLIDES !== 1) {
         setIsAuto(auto);
         setIsLoop(loop);
      }
   }, [auto, loop, sliderImages]);

   useEffect(() => {
      let intervalId;

      if (isAuto) {
         intervalId = setTimeout(nextSlide, delay);
      }

      return () => {
         clearInterval(intervalId);
      };
   }, [currentSlideIndex, isAuto, delay]);

   const nextSlide = () => {
      setCurrentSlideIndex((prevIndex) =>
         prevIndex === TOTAL_SLIDES - 1 ? 0 : prevIndex + 1
      );
   };

   const prevSlide = () => {
      setCurrentSlideIndex((prevIndex) =>
         prevIndex === 0 ? TOTAL_SLIDES - 1 : prevIndex - 1
      );
   };

   return (
      <div className="slider">
         <div
            className="slides-wrapper"
            style={{ transform: `translate3d(${-currentSlideIndex * 100}%, 0, 0)` }}
         >
            {sliderImages.map((image, index) => (
               <img src={image.image_url} className="slide" key={index} alt="" />
            ))}
         </div>

         <div className="slides-navigation">
            {sliderImages.map((image, index) => (
               <div
                  key={index}
                  className={`slide-nav-button ${
                     currentSlideIndex === index ? ' active' : ''
                  }`}
                  onClick={() => {
                     setCurrentSlideIndex(index);
                  }}
               ></div>
            ))}
         </div>

         {(currentSlideIndex !== TOTAL_SLIDES - 1 || isLoop) && (
            <div className="slide-next">
               <button className="slide-next-button" onClick={nextSlide}>
                  &gt;
               </button>
            </div>
         )}
         {(currentSlideIndex !== 0 || isLoop) && (
            <div className="slide-prev">
               <button className="slide-prev-button" onClick={prevSlide}>
                  &lt;
               </button>
            </div>
         )}
      </div>
   );
};

export default Slider;
