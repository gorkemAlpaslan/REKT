import React from "react";
import wordSwiperStyle from "./word-swiper.module.sass";

const WordSwiper: React.FC = () => {
  return (
    <h4 className={wordSwiperStyle.wordCarousel}>
      <div>
        <ul className={wordSwiperStyle.flip}>
          <li>
            <span></span> Pure
          </li>
          <li>
            <span></span> Soft
          </li>
          <li>
            <span></span> Simple
          </li>
          <li>
            <span></span> Creative
          </li>
        </ul>
      </div>
    </h4>
  );
};

export default WordSwiper;
