import React, { useState } from "react";
import AboutStyle from "./about.module.sass";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Image from "next/image";
import GorkemProfile from "../../../assets/GorkemProfile.png";
import KadirProfile from "../../../assets/KadirProfile.png";
import MuratProfile from "../../../assets/MuratProfile.jpg";
import KursatProfile from "../../../assets/KursatProfile.jpeg";
import linkedin from "../../../assets/icons/linkedin.png";
import behance from "../../../assets/icons/behance.png";
import github from "../../../assets/icons/github.png";
import facebook from "../../../assets/icons/facebook.png";

const About: React.FC = () => {
  const [currentAbout, SetCurrentAbout] = useState<number>(0);
  const AboutUs = [
    {
      id: 0,
      Name: "MURAT",
      Field: "Designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis pulvinar volutpat. Ut finibus suscipit placerat. Nunc lobortis massa quis ipsum eleifend varius. ",
      image: MuratProfile,
      links: [
        { icon: linkedin, adress: "" },
        { icon: github, adress: "" },
        { icon: behance, adress: "" },
        { icon: facebook, adress: "" },
      ],
    },
    {
      id: 1,
      Name: "KADIR",
      Field: "Game Designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis pulvinar volutpat. Ut finibus suscipit placerat. Nunc lobortis massa quis ipsum eleifend varius. ",
      image: KadirProfile,
      links: [
        { icon: linkedin, adress: "" },
        { icon: github, adress: "" },
        { icon: behance, adress: "" },
        { icon: facebook, adress: "" },
      ],
    },
    {
      id: 2,
      Name: "KURSAT",
      Field: "Designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis pulvinar volutpat. Ut finibus suscipit placerat. Nunc lobortis massa quis ipsum eleifend varius. ",
      image: KursatProfile,
      links: [
        { icon: linkedin, adress: "" },
        { icon: github, adress: "" },
        { icon: behance, adress: "" },
        { icon: facebook, adress: "" },
      ],
    },
    {
      id: 3,
      Name: "GORKEM",
      Field: "Designer",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis pulvinar volutpat. Ut finibus suscipit placerat. Nunc lobortis massa quis ipsum eleifend varius. ",
      image: GorkemProfile,
      links: [
        { icon: linkedin, adress: "" },
        { icon: github, adress: "" },
        { icon: behance, adress: "" },
        { icon: facebook, adress: "" },
      ],
    },
  ];
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
                            width={25}
                            height={25}
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
