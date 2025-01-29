import React from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import ProjectCard from "./ProjectCard";

const listPortfolio = [
  {
    title: "Cafe Management System",
    description:
      "The Cafe Management System is a powerful solution built with Next.js, TypeScript, Tailwind CSS, and MongoDB to help café owners optimize their operations. This system enhances efficiency, improves customer experiences, and drives business growth through seamless order handling, inventory tracking, and marketing automation—all from a single platform.",
    imageUrl: "/images/cafe-system.png",
    linkDemo: "https://java-cafe-beta.vercel.app/",
    sourceCode: "https://github.com/rendi12345678/java-cafe",
  },
  {
    title: "Laptop Service Management System",
    description:
      "Laptop Service Management SystemLaptop Service Management System The Laptop Service Management System is a comprehensive solution designed to help service centers manage repair requests, track repair progress, optimize technician assignments, and maintain customer satisfaction. The system offers seamless integration for managing customer orders and invoicing.",
    imageUrl: "/images/laptop-service.png",
    linkDemo: "https://java-cafe-beta.vercel.app/",
    sourceCode:
      " https://github.com/rendi12345678/laptop-service-management-system",
  },
  {
    title: "Typing Test Game",
    description:
      "Open Source Typing Test GameOpen Source Typing Test Game Contributed to the open-source typing test game with React and Material-UI (MUI) by adding a data visualization feature to track typing stats. Used Web Workers to track stats in the background, preventing blocking of the main thread, improving performance, and making the app more responsive",
    imageUrl: "/images/eletypes.png",
    linkDemo: "https://eletypes.com/",
    sourceCode:
      "https://github.com/rendi12345678/eletypes-frontendContributed to the open-source typing test game with React and Material-UI (MUI) by adding a data visualization feature to track typing stats. Used Web Workers to track stats in the background, preventing blocking of the main thread, improving performance, and making the app more responsive Link : https://www.eletypes.com/ Source code : https://github.com/rendi12345678/eletypes-frontend",
  },
];

function ListPortfolio() {
  return (
    <Swiper
      className="list-portfolio reveal"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      pagination={{ clickable: true }}
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
      {listPortfolio.map(
        ({ title, description, imageUrl, sourceCode, linkDemo }, index) => (
          <SwiperSlide key={index}>
            <ProjectCard
              title={title}
              description={description}
              imageUrl={imageUrl}
              linkdemo={linkDemo}
              delay={index}
              sourceCode={sourceCode}
            />
          </SwiperSlide>
        ),
      )}
    </Swiper>
  );
}

export default ListPortfolio;
