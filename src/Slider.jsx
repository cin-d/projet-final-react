import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";

const Slider = () => {
  return (
    <>
            <h1 className="title-home">mangaddict - la référence fr du manga</h1>

    <Swiper
      slidesPerView={"auto"}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="/img/hunter-x-hunter.webp" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/naruto.webp" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/img/one-piece-luffy.webp" alt="" />
      </SwiperSlide>

    </Swiper>
  </>
  );
}

export default Slider;