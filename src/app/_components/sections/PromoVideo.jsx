"use client";

import { useState } from 'react';

import Data from "@data/sections/promo-video.json";

import ModalVideo from 'react-modal-video'
import 'react-modal-video/css/modal-video.css'

const PromoVideoSection = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
        {/* video */}
        <section className="sb-video">
            <div className="container">
                <div className="row align-items-center">
                    <div 
                        className="col-lg-6"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        <div className="sb-mb-90">
                            <span 
                                className="sb-suptitle sb-mb-15" 
                                dangerouslySetInnerHTML={{__html : Data.subtitle}}
                                data-aos="fade-down"
                                data-aos-duration="800"
                                data-aos-delay="100"
                            />
                            <h2 
                                className="sb-mb-30" 
                                dangerouslySetInnerHTML={{__html : Data.title}}
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-delay="200"
                            />
                            <p 
                                className="sb-text sb-mb-30" 
                                dangerouslySetInnerHTML={{__html : Data.description}}
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-delay="300"
                            />
                            
                            {/* button */}
                            <a 
                                onClick={() => setOpen(true)} 
                                data-no-swup 
                                style={{ "cursor" : "pointer" }} 
                                className="sb-btn"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-delay="400"
                            >
                                <span className="sb-icon">
                                    <img src="/img/ui/icons/play.svg" alt="icon" />
                                </span>
                                <span>{Data.button.label}</span>
                            </a>
                            {/* button end */}
                        </div>
                    </div>
                    <div 
                        className="col-lg-6 align-self-center"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >
                        <div className="sb-illustration-7 sb-mb-90">
                            <div 
                                className="sb-interior-frame"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                data-aos-delay="300"
                            >
                                <img src={Data.image.url} alt={Data.image.alt} className="sb-interior" />
                                <a onClick={() => setOpen(true)} data-no-swup style={{ "cursor" : "pointer" }} className="sb-video-play"><i className="fas fa-play"></i></a>
                            </div>
                            
                            <div className="sb-cirkle-1"></div>
                            <div className="sb-cirkle-2"></div>
                            <div className="sb-cirkle-3"></div>
                            <div className="sb-cirkle-4"></div>
                        </div>
                    </div>
                </div>
            </div>

            <ModalVideo channel='youtube' isOpen={isOpen} videoId={Data.button.link.replace("https://www.youtube.com/watch?v=", "")} onClose={() => setOpen(false)} />
        </section>
        {/* video end */}
    </>
  );
};

export default PromoVideoSection;