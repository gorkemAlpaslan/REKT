import React, { useState } from "react";
import worksStyle from "./works.module.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const Works: React.FC = () => {
  const [currentWork, SetCurrentWork] = useState<number>(0);

  const worksTitles = [
    {
      id: 0,
      text: "WORKS",
      content:
        "A definitive message aligns a company's internal and external stakeholders towards a shared direction. We support clients in defining their vision, mission, and values to map a clear path for the future of their business and brand.",
    },
    {
      id: 1,
      text: "CREATING VISIONS",
      content:
        "A definitive message aligns a company's internal and external stakeholders towards a shared direction. We support clients in defining their vision, mission, and values to map a clear path for the future of their business and brand.",
    },
    {
      id: 2,
      text: "BUILDING BRANDS",
      content:
        "A definitive message aligns a company's internal and external stakeholders towards a shared direction. We support clients in defining their vision, mission, and values to map a clear path for the future of their business and brand.",
    },
    {
      id: 3,
      text: "GRAPHIC DESIGN",
      content:
        "A definitive message aligns a company's internal and external stakeholders towards a shared direction. We support clients in defining their vision, mission, and values to map a clear path for the future of their business and brand.",
    },
    {
      id: 4,
      text: "WEB DESIGN",
      content:
        "A definitive message aligns a company's internal and external stakeholders towards a shared direction. We support clients in defining their vision, mission, and values to map a clear path for the future of their business and brand.",
    },
    {
      id: 5,
      text: "APP DESIGN",
      content:
        "A definitive message aligns a company's internal and external stakeholders towards a shared direction. We support clients in defining their vision, mission, and values to map a clear path for the future of their business and brand.",
    },
  ];
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
              <SwiperSlide key={work.text}>
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
