import React from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProjectCard from "./ProjectCard";

const listPotfolio = [
  {
    title: "Fun Pilpres",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nam.",
    imageUrl: "/images/web-capres.png",
    linkDemo: "https://fun-pilpres.web.app",
  },
  {
    title: "Fun Pilpres",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nam.",
    imageUrl: "/images/web-capres.png",
    linkDemo: "https://fun-pilpres.web.app",
  },
  {
    title: "Fun Pilpres",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nam.",
    imageUrl: "/images/web-capres.png",
    linkDemo: "https://fun-pilpres.web.app",
  },
  {
    title: "Fun Pilpres",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nam.",
    imageUrl: "/images/web-capres.png",
    linkDemo: "https://fun-pilpres.web.app",
  },
];

function ListPortfolio() {
  return (
    <Swiper
      className="list-portfolio"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      breakpoints={{
        // when window width is <= 640px
        640: {
          slidesPerView: 1,
        },
        // when window width is <= 768px
        768: {
          slidesPerView: 2,
        },
        // when window width is <= 1024px
        1024: {
          slidesPerView: 2,
        },
      }}
    >
      {listPotfolio.map(({ title, description, imageUrl, linkDemo }, index) => (
        <SwiperSlide>
          <ProjectCard
            title={title}
            description={description}
            imageUrl={imageUrl}
            linkdemo={linkDemo}
            key={index}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ListPortfolio;
