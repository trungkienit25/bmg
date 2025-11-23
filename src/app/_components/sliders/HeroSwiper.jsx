"use client";

import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import slideDataVI from "@data/hero-slides.json";
import slideDataEN from "@data/hero-slides-en.json";

const HeroSwiper = ({ lang }) => {
  const slideData = lang === 'en' ? slideDataEN : slideDataVI;
  const buttonText = lang === 'en' ? 'View Menu' : 'Xem Thực Đơn';
  const buttonLink = lang === 'en' ? '/en/menu' : '/menu';

  return (
    <div className="hero-swiper-wrapper">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        loop={true}
        slidesPerView={1}
        effect={'fade'}
        fadeEffect={{ crossFade: true }}
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

                {/* --- PHẦN CẬP NHẬT NÚT BẤM --- */}
                <div className="btn-wrapper">
                  <Link href={buttonLink} className="btn-hero-luxury">
                    <span className="btn-decor btn-decor-left">
                      <span className="diamond"></span>
                      <span className="line"></span>
                    </span>
                    <span className="btn-text">{buttonText}</span>
                    <span className="btn-decor btn-decor-right">
                      <span className="line"></span>
                      <span className="diamond"></span>
                    </span>
                  </Link>
                </div>
                {/* ----------------------------- */}
                
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="hero-swiper-pagination swiper-pagination"></div>
      </Swiper>
      <div className="connect">
        <img src="/img/connect/foot.png" alt="" />
      </div>
    </div>
  );
};

export default HeroSwiper;