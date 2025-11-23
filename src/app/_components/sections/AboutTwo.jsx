import DataVI from "@data/sections/about-2.json";
import DataEN from "@data/sections/about-2-en.json";

const AboutTwoSection = ({ lang }) => {
    const Data = lang === 'en' ? DataEN : DataVI;

    return (
        <>
            {/* About text */}
            <section className="sb-about-text sb-p-90-0">
                <div className="container">
                    <div className="row">
                        <div 
                            className="col-lg-6 align-self-center"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-delay="0"
                        >
                            <div className="sb-illustration-2">
                                <div 
                                    className="sb-interior-frame"
                                    data-aos="zoom-in"
                                    data-aos-duration="1000"
                                    data-aos-delay="200"
                                >
                                    <img src={Data.image.url} alt={Data.image.alt} className="sb-interior" style={{ "objectPosition": "center" }} />
                                </div>

                                <img
                                    src={Data.number.elements.bread}
                                    alt="Banh Mi Element"
                                    className="sb-cirkle-4"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="400"
                                />

                                <img
                                    src={Data.number.elements.coffee}
                                    alt="Coffee Element"
                                    className="sb-cirkle-2"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="500"
                                />
                                <img 
                                    src={Data.number.img} 
                                    className="sb-experience"
                                    data-aos="fade-up"
                                    data-aos-duration="1000"
                                    data-aos-delay="600"
                                />
                            </div>
                        </div>
                        <div 
                            className="col-lg-6 align-self-center sb-mb-60"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-delay="300"
                        >
                            <h2 
                                className="sb-mb-40" 
                                dangerouslySetInnerHTML={{ __html: Data.title }}
                                data-aos="fade-up"
                                data-aos-duration="800"
                                data-aos-delay="400"
                            />
                            
                            {/* --- CẬP NHẬT CLASS TẠI ĐÂY --- */}
                            <div 
                                className="sb-text sb-text-story sb-mb-30" 
                                dangerouslySetInnerHTML={{ __html: Data.description }}
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-delay="500"
                            />
                            {/* ------------------------------ */}

                            <img 
                                src={Data.signature} 
                                alt="Signature" 
                                className="sb-signature sb-mb-30"
                                data-aos="fade-up"
                                data-aos-duration="1000"
                                data-aos-delay="600"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutTwoSection;