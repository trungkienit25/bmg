"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade'; // Import CSS hiệu ứng fade

import slideData from "@data/hero-slides.json";

const HeroSwiper = () => {
  return (
    <div className="hero-swiper-wrapper">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        loop={true}
        slidesPerView={1}      // Hiển thị 1 ảnh full
        effect={'fade'}        // Hiệu ứng mờ dần (xóa dòng này nếu muốn trượt ngang)
        fadeEffect={{ crossFade: true }}
        speed={1500}           // Tốc độ chuyển cảnh chậm rãi
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        // -----------------------------------------------
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
        }}
        className="swiper-container"
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="swiper-slide-content"
              style={{ backgroundImage: `url(${slide.image})` }}
              data-anim={slide.animationType}
            >
              {slide.title && <h2>{slide.title}</h2>}
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default HeroSwiper;