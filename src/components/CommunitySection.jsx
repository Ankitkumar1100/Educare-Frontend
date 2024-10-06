/* eslint-disable no-unused-vars */
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

// Import custom styles
import "../styles/CommunitySection.css";

const CommunitySection = () => {
  const communityMembers = [
    {
      id: 1,
      name: "Community Member 1",
      imgSrc: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      name: "Community Member 2",
      imgSrc: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      name: "Community Member 3",
      imgSrc: "https://via.placeholder.com/100",
    },
    {
      id: 4,
      name: "Community Member 4",
      imgSrc: "https://via.placeholder.com/100",
    },
    {
      id: 5,
      name: "Community Member 5",
      imgSrc: "https://via.placeholder.com/100",
    },
    {
      id: 6,
      name: "Community Member 6",
      imgSrc: "https://via.placeholder.com/100",
    },
  ];

  return (
    <section className="community">
      <h2>Start Growing with Our Community</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        className="community-swiper"
      >
        {communityMembers.map((member) => (
          <SwiperSlide key={member.id}>
            <div className="community-card">
              <img src={member.imgSrc} alt={member.name} />
              <h3>{member.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default CommunitySection;
