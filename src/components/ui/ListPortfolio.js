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
      "This is my personal project, built with the MERN stack, to allow users to choose presidential candidates based on specific reasons, with user authentication using JWT, and to view the total votes solely for entertainment purposes.",
    imageUrl: "/images/web-capres.png",
    linkDemo: "https://fun-pilpres.web.app",
  },
  {
    title: "Nanny's Portfolio",
    description:
      "This is my personal project, a nanny landing page built with React.js. The platform offers a user-friendly interface for families to discover and connect with experienced nanny, showcasing essential information such as profiles and contact details.",
    imageUrl: "/images/nanny-landing-page.png",
    linkDemo: "https://ningsih-nanny.web.app",
  },
  {
    title: "Kinemaster Downloader",
    description:
      "This is a Kinemaster downloader built with HTML, CSS, and JavaScript for my friend at school, allowing users to download Kinemaster from my friend's file.",
    imageUrl: "/images/gembos-site.png",
    linkDemo: "https://rendi12345678.github.io/sohib-gembos/",
  },
];

function ListPortfolio() {
  return (
    <Swiper
      className="list-portfolio reveal"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      breakpoints={{
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
        },
      }}
    >
      {listPotfolio.map(({ title, description, imageUrl, linkDemo }, index) => (
        <SwiperSlide className="item" key={index}>
          <ProjectCard
            title={title}
            description={description}
            imageUrl={imageUrl}
            linkdemo={linkDemo}
            className="reveal"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ListPortfolio;
