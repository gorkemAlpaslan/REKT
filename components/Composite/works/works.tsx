import React, { useState } from "react";
import worksStyle from "./works.module.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { worksTitles } from "../../../pages/data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const Works: React.FC = () => {
  const [currentWork, SetCurrentWork] = useState<number>(1);

  return (
    <div>
      <div className={worksStyle.worksWrapper}>
        <div className={worksStyle.worksTitle}>
          {worksTitles[currentWork].text}
        </div>
        <Swiper
          modules={[Scrollbar, A11y]}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          onSlideChange={(swiper) => SetCurrentWork(swiper.activeIndex)}
          className={worksStyle.worksEach}
        >
          {worksTitles.map((work: any, index: any) => {
            return (
              <SwiperSlide key={index}>
                <div className={worksStyle.worksEachContent}>
                  {work.content}
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Works;
