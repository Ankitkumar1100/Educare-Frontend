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
      name: "Ghost Rider",
      imgSrc: "https://i.pinimg.com/564x/89/1a/10/891a100e1fa49fd9af1d6daae9f67328.jpg",
    },
    {
      id: 2,
      name: "Moonlight",
      imgSrc: "https://i.pinimg.com/564x/5e/f2/37/5ef2373f3ef57c0dc6c06cb78216eb6c.jpg",
    },
    {
      id: 3,
      name: "Venom",
      imgSrc: "https://i.pinimg.com/474x/f9/3f/32/f93f32525a50eb90484d0827c96e3f7c.jpg",
    },
    {
      id: 4,
      name: "Wolverine",
      imgSrc: "https://i.pinimg.com/564x/f0/c7/bb/f0c7bb03e47052c0ba6588dfe7cc2fcb.jpg",
    },
    {
      id: 5,
      name: "Black Panther",
      imgSrc: "https://i.pinimg.com/564x/04/bf/cf/04bfcf36a5a0faceb83c56b21d1640f5.jpg",
    },
    {
      id: 6,
      name: "Deadpool",
      imgSrc: "https://i.pinimg.com/564x/af/2e/f7/af2ef718797ffa8faa408565de1006f9.jpg",
    },
  ];

  return (
    <section className="community">
      <h2>Start Growing with Our Community</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={30}
        slidesPerView={4}
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
