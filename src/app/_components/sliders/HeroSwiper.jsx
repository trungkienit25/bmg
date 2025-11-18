"use client";

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import slideData from "@data/hero-slides.json";

const HeroSwiper = () => {
  return (
    <div className="hero-swiper-wrapper">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        loop={true}
        slidesPerView={1}
        effect={'fade'}
        fadeEffect={{ crossFade: true }}
        speed={1500}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.hero-swiper-button-next',
          prevEl: '.hero-swiper-button-prev',
        }}
        pagination={{
          el: '.hero-swiper-pagination',
          clickable: true,
        }}
        className="hero-swiper-container"
      >
        {slideData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="hero-swiper-slide-content"
              style={{ backgroundImage: `url(${slide.image})` }}
            ></div>

            <div className="slide-overlay"></div>

            <div className="swiper-slide-content">
              <div className="content-inner">
                {slide.title && (
                  <h2
                    className="title"
                    dangerouslySetInnerHTML={{ __html: slide.title }}
                  />
                )}

                <div className="btn-wrapper">
                  <Link href="/menu" className="btn-hero">
                    Xem Thực Đơn
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* <div className="hero-swiper-button-next swiper-button-next"></div>
        <div className="hero-swiper-button-prev swiper-button-prev"></div> */}
        <div className="hero-swiper-pagination swiper-pagination"></div>
      </Swiper>
      <div className="connect">
        <img src="/img/connect/foot.png" alt="" />
      </div>
    </div>
  );
};

export default HeroSwiper;