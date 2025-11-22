"use client";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel } from 'swiper/modules';
import MenuItem from "@components/menu/MenuItem";

import 'swiper/css';
import 'swiper/css/navigation';

const MenuFiltered = ({ categories, noImage, columns }) => {
    const sliderSettings = {
        modules: [Navigation, Mousewheel],
        spaceBetween: 30,
        slidesPerView: 'auto',
        mousewheel: {
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
        },
        navigation: {
            prevEl: '.sb-menu-prev',
            nextEl: '.sb-menu-next',
        },
    };

    return (
        <>
            {categories.map((category, category_key) => (
                <div key={`menu-category-section-${category_key}`} className="sb-menu-category-section sb-p-60-0">
                    <div className="sb-group-title sb-mb-30">
                        <div className="sb-left sb-mb-30">
                            <h2 className="sb-mb-30">{category.name}</h2>
                        </div>
                        <div className="sb-right sb-mb-30">
                            {/* slider navigation */}
                            <div className="sb-slider-nav">
                                <div className={`sb-prev-btn sb-menu-prev-cat-${category_key}`}><i className="fas fa-arrow-left"></i></div>
                                <div className={`sb-next-btn sb-menu-next-cat-${category_key}`}><i className="fas fa-arrow-right"></i></div>
                            </div>
                            {/* slider navigation end */}
                        </div>
                    </div>

                    <Swiper
                        {...sliderSettings}
                        navigation={{
                            prevEl: `.sb-menu-prev-cat-${category_key}`,
                            nextEl: `.sb-menu-next-cat-${category_key}`,
                        }}
                        className="swiper-container"
                    >
                        {category.items.map((item, key) => (
                            <SwiperSlide key={`menu-item-${category_key}-${key}`}>
                                <MenuItem item={item} index={key} noImage={noImage} marginBottom={30} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            ))}
        </>
    );
};

export default MenuFiltered;
