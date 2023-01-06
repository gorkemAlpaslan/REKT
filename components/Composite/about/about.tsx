import React, { useState } from "react";
import AboutStyle from "./about.module.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { AboutUs } from "../../../pages/data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Image from "next/image";

const About: React.FC = () => {
  const [currentAbout, SetCurrentAbout] = useState<number>(0);

  return (
    <div>
      <div className={AboutStyle.aboutWrapper}>
        <div className={AboutStyle.aboutTitle}>
          {AboutUs[currentAbout].Name.toUpperCase()}
        </div>
        <Swiper
          modules={[Scrollbar, A11y]}
          slidesPerView={1}
          scrollbar={{ draggable: true }}
          onSlideChange={(swiper) => SetCurrentAbout(swiper.activeIndex)}
          className={AboutStyle.aboutEach}
        >
          {AboutUs.map((about: any, index: any) => {
            return (
              <SwiperSlide key={index}>
                <div className={AboutStyle.aboutEachPhoto}>
                  <Image src={about.image} alt="about-image" fill />
                </div>
                <div className={AboutStyle.aboutContent}>
                  <div className={AboutStyle.aboutEachField}>{about.Field}</div>
                  <div className={AboutStyle.aboutEachContent}>
                    {about.description}
                  </div>
                  <div className={AboutStyle.aboutEachLinksWrapper}>
                    {about.links.map((link: any) => {
                      return (
                        <a href={link.adress} key={index}>
                          <Image
                            src={link.icon}
                            alt="link-icon"
                            width={40}
                            height={40}
                          />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default About;
