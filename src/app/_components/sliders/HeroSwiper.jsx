"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import slideData from "@data/hero-slides.json"; 

const HeroSwiper = () => {
  return (
    <div className="hero-swiper-wrapper">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        loop={true}
        slidesPerView={1.3}
        centeredSlides={true}
        spaceBetween={0}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
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
            >
              {slide.title && <h2>{slide.title}</h2>}
            </div>
          </SwiperSlide>
        ))}

        {/* Các nút điều hướng */}
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-pagination"></div>
      </Swiper>
    </div>
  );
};

export default HeroSwiper;