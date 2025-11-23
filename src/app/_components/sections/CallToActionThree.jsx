import Data from "@data/sections/call-to-action-3.json";
import Link from "next/link";

const CallToActionThreeSection = ( { bg } ) => {
  return (
    <>
         {/* call to action */}
        <section className="sb-call-to-action">
            <div className="sb-bg-3"></div>

            <div className="container">
                <div className="row">
                    <div 
                        className="col-lg-6 align-self-center"
                        data-aos="fade-right"
                        data-aos-duration="1000"
                    >
                        <div className="sb-cta-text">
                            <h1 
                                className="sb-mb-15" 
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
                            <Link 
                                href={Data.button2.link} 
                                className="sb-btn sb-btn-2 sb-btn-gray"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-delay="500"
                            >
                                <span className="sb-icon">
                                    <img src={Data.button2.icon} alt="icon" />
                                </span>
                                <span>{Data.button2.label}</span>
                            </Link>
                            {/* button end */}
                        </div>
                    </div>
                    <div 
                        className="col-lg-6"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >
                        <div className="sb-illustration-6">
                            <img 
                                src={Data.image.url} 
                                alt={Data.image.alt} 
                                className="sb-burger"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                data-aos-delay="300"
                            />

                            <div className="sb-cirkle-1"></div>
                            <div className="sb-cirkle-2"></div>
                            <div className="sb-cirkle-3"></div>
                            <div className="sb-cirkle-4"></div>
                            <div className="sb-cirkle-5"></div>

                            <img 
                                src="/img/illustrations/2.svg" 
                                alt="phones" 
                                className="sb-pik-2"
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="500"
                            />
                            <img 
                                src="/img/illustrations/3.svg" 
                                alt="phones" 
                                className="sb-pik-3"
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="600"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* call to action end */}
    </>
  );
};

export default CallToActionThreeSection;