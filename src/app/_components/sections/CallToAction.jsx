import Data from "@data/sections/call-to-action.json";

const CallToActionSection = ( { bg } ) => {
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
                            <h2 
                                className="sb-h1 sb-mb-30" 
                                dangerouslySetInnerHTML={{__html : Data.title}}
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-delay="200"
                            />
                            <p 
                                className="sb-text sb-mb-30" 
                                dangerouslySetInnerHTML={{__html : Data.subtitle}}
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-delay="300"
                            />

                            <a 
                                href={Data.link1.url} 
                                target="_blank" 
                                title={Data.link1.title} 
                                data-no-swup 
                                className="sb-download-btn"
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="400"
                            >
                                <img src="/img/buttons/1.svg" alt="img" />
                            </a>
                            <a 
                                href={Data.link2.url} 
                                target="_blank" 
                                title={Data.link2.title} 
                                data-no-swup 
                                className="sb-download-btn"
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="500"
                            >
                                <img src="/img/buttons/2.svg" alt="img" />
                            </a>
                        </div>
                    </div>
                    <div 
                        className="col-lg-6"
                        data-aos="fade-left"
                        data-aos-duration="1000"
                    >
                        <div className="sb-illustration-3">
                            <img 
                                src={Data.image.url} 
                                alt={Data.image.alt} 
                                className="sb-phones"
                                data-aos="zoom-in"
                                data-aos-duration="1000"
                                data-aos-delay="300"
                            />

                            <div className="sb-cirkle-1"></div>
                            <div className="sb-cirkle-2"></div>
                            <div className="sb-cirkle-3"></div>
                            <div className="sb-cirkle-4"></div>

                        
                            <img 
                                src="/img/illustrations/2.svg" 
                                alt="phones" 
                                className="sb-pik-2"
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="500"
                            />
                            <img 
                                src="/img/illustrations/1.svg" 
                                alt="phones" 
                                className="sb-pik-1"
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="600"
                            />

                            <img 
                                src="/img/illustrations/3.svg" 
                                alt="phones" 
                                className="sb-pik-3"
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="700"
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

export default CallToActionSection;