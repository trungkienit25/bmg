"use client";

import Data from "@data/sections/hero-1.json";
import Link from "next/link";

import { useEffect } from "react";

const Hero = ({ type }) => {
    useEffect(() => {
        import("@common/scrollAnims").then(({ ScrollAnimation }) => {
            ScrollAnimation();
        });
    }, []);

    return (
        <>
            {/* banner */}
            <section className="sb-banner">
                <div className="container">
                    {/* <div className="sb-video-container"> 
                        <video playsinline muted loop autoplay>
                            <source src="/img/illustrations/bg.mp4" type="video/mp4" />
                        </video>
                    </div> */}
                    <div className="row">
                        <div className="col-lg-6">
                            {/* main title */}
                            <div className="sb-main-title-frame">
                                <div className="sb-main-title">
                                    <span 
                                        className="sb-suptitle sb-mb-30"
                                        data-aos="fade-down"
                                        data-aos-duration="800"
                                        data-aos-delay="100"
                                    >
                                        {Data.subtitle}
                                    </span>
                                    <h1 
                                        className="sb-mb-30" 
                                        dangerouslySetInnerHTML={{ __html: Data.title }}
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                        data-aos-delay="200"
                                    />
                                    <p 
                                        className="sb-text sb-text-lg sb-mb-30" 
                                        dangerouslySetInnerHTML={{ __html: Data.description }}
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                        data-aos-delay="300"
                                    />

                                    {/* button */}
                                    <Link 
                                        href={Data.button1.link} 
                                        className="sb-btn"
                                        data-aos="fade-up"
                                        data-aos-duration="1000"
                                        data-aos-delay="400"
                                    >
                                        <span className="sb-icon">
                                            <img src={Data.button1.icon} alt="icon" />
                                        </span>
                                        <span>{Data.button1.label}</span>
                                    </Link>
                                    {/* button end */}
                                    {/* button */}
                                    {/* <Link href={Data.button2.link} className="sb-btn sb-btn-gray">
                                        <span className="sb-icon">
                                            <img src={Data.button2.icon} alt="icon" />
                                        </span>
                                        <span>{Data.button2.label}</span>
                                    </Link> */}
                                    {/* button end */}

                                </div>
                            </div>
                            {/* main title end */}
                        </div>

                        <div className="col-lg-6">
                            {type == 1 ? (
                                <div 
                                    className="sb-illustration-1"
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                                    data-aos-delay="200"
                                >
                                    <img 
                                        src={Data.image.url} 
                                        alt={Data.image.alt} 
                                        className="sb-girl"
                                        data-aos="zoom-in"
                                        data-aos-duration="1000"
                                        data-aos-delay="400"
                                    />

                                    <div className="sb-cirkle-1"></div>
                                    <div className="sb-cirkle-2"></div>
                                    <div className="sb-cirkle-3"></div>
                                    <div className="sb-cirkle-4"></div>
                                    <div className="sb-cirkle-5"></div>

                                    <img 
                                        src="/img/illustrations/3.svg" 
                                        alt="phones" 
                                        className="sb-pik-1"
                                        data-aos="fade-up"
                                        data-aos-duration="800"
                                        data-aos-delay="500"
                                    />
                                    <img 
                                        src="/img/illustrations/1.svg" 
                                        alt="phones" 
                                        className="sb-pik-2"
                                        data-aos="fade-up"
                                        data-aos-duration="800"
                                        data-aos-delay="600"
                                    />
                                    <img 
                                        src="/img/illustrations/2.svg" 
                                        alt="phones" 
                                        className="sb-pik-3"
                                        data-aos="fade-up"
                                        data-aos-duration="800"
                                        data-aos-delay="700"
                                    />
                                </div>
                            ) : (
                                <div 
                                    className="sb-ilustration-fix"
                                    data-aos="fade-left"
                                    data-aos-duration="1000"
                                    data-aos-delay="200"
                                >
                                    <div className="sb-illustration-1-2">
                                        <div 
                                            className="sb-food-frame-1"
                                            data-aos="zoom-in"
                                            data-aos-duration="1000"
                                            data-aos-delay="300"
                                        >
                                            <img src="/img/illustrations/bmg-7.webp" alt="food" className="sb-food-1" />
                                        </div>
                                        <div 
                                            className="sb-food-frame-2"
                                            data-aos="zoom-in"
                                            data-aos-duration="1000"
                                            data-aos-delay="400"
                                        >
                                            <img src="/img/illustrations/bmg-9.webp" alt="food" className="sb-food-2" />
                                        </div>
                                        <div 
                                            className="sb-food-frame-3"
                                            data-aos="zoom-in"
                                            data-aos-duration="1000"
                                            data-aos-delay="500"
                                        >
                                            <img src="/img/illustrations/bmg-8.webp" alt="food" className="sb-food-3" />
                                        </div>


                                        {/* <div className="sb-interior-frame">
                                            <img src="/img/illustrations/bmg-7.webp" alt="food" className="sb-interior-1" style={{ "objectPosition": "center" }} />
                                        </div>
                                        <div className="sb-interior-frame">
                                            <img src="/img/illustrations/bmg-9.webp" alt="food" className="sb-interior-2" style={{ "objectPosition": "center" }} />
                                        </div>
                                        <div className="sb-interior-frame">
                                            <img src="/img/illustrations/bmg-8.webp" alt="food" className="sb-interior-3" style={{ "objectPosition": "center" }} />
                                        </div> */}
                                        {/* <div className="sb-illu-dialog-1"><span>😋</span> Hãy thử món này</div>
                                        <div className="sb-illu-dialog-2"><span>🥰</span> Ngol</div> */}

                                        {/* 
                                        <div className="sb-cirkle-2"></div>
                                        <div className="sb-cirkle-3"></div>
                                        <div className="sb-cirkle-4"></div> */}


                                        {/* <img src="/img/illustrations/3.svg" alt="phones" className="sb-pik-1" />
                                        <img src="/img/illustrations/1.svg" alt="phones" className="sb-pik-2" />
                                        <img src="/img/illustrations/2.svg" alt="phones" className="sb-pik-3" /> */}
                                    </div>
                                </div>
                            )}
                        </div>
                        {/* <div className="col-lg-12"> */}
                        {/* <div className="head">
                                <img src="/img/connect/foot.png" alt="" />
                            </div> */}

                        {/* </div> */}
                    </div>
                </div>
            </section>
            {/* banner end */}
        </>
    );
}
export default Hero;