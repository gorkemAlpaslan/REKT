import React from "react";
import welcomeStyle from "./welcome.module.sass";
import WordSwiper from "../../UI/word-swiper/word-swiper";
import Scroll from "../../UI/scroll/scroll";

const Welcome: React.FC = () => {
  return (
    <div>
      <div className={welcomeStyle.welcomeTitle}>
        <h2
          className={`${welcomeStyle.hero} ${welcomeStyle.layers} ${welcomeStyle.glitch}`}
          data-text="WELCOME"
        >
          <span>WELCOME</span>
        </h2>
      </div>
      <div className={welcomeStyle.welcomeUnderTitles}>
        <WordSwiper />
      </div>
      <div className={welcomeStyle.scroll}>
        <Scroll />
      </div>
    </div>
  );
};

export default Welcome;
