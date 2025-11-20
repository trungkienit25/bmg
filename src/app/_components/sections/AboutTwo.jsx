import DataVI from "@data/sections/about-2.json";
import DataEN from "@data/sections/about-2-en.json";

const AboutTwoSection = ({ lang }) => {
    const Data = lang === 'en' ? DataEN : DataVI;

    return (
        <>
            {/* About text */}
            <section className="sb-about-text sb-p-90-0">
                {/* <div className="sb-bg-1" style={{"marginTop": "90px"}}>
                    {/* <div></div>
                </div> */}
                {/* <div className="head">
                    <img src="/img/connect/foot.png" alt="" />
                </div> */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="sb-illustration-2 sb-mb-90">
                                <div className="sb-interior-frame">
                                    <img src={Data.image.url} alt={Data.image.alt} className="sb-interior" style={{ "objectPosition": "center" }} />
                                </div>

                                <img
                                    src={Data.number.elements.bread}
                                    alt="Banh Mi Element"
                                    className="sb-cirkle-4"
                                />

                                <img
                                    src={Data.number.elements.coffee}
                                    alt="Coffee Element"
                                    className="sb-cirkle-2"
                                />
                                {/* <div className="sb-square"></div>

                                <div className="sb-cirkle-1"></div>
                                <div className="sb-cirkle-2"></div>
                                <div className="sb-cirkle-3"></div>
                                <div className="sb-cirkle-4"></div> */}
                                <img src={Data.number.img} className="sb-experience" />

                            </div>
                        </div>
                        <div className="col-lg-6 align-self-center sb-mb-60">
                            <h2 className="sb-mb-60" dangerouslySetInnerHTML={{ __html: Data.title }} />
                            <div className="sb-text sb-mb-30" dangerouslySetInnerHTML={{ __html: Data.description }} />
                            <img src={Data.signature} alt="Signature" className="sb-signature sb-mb-30" />
                        </div>
                    </div>
                </div>
            </section>
            {/* About text end */}
        </>
    );
};

export default AboutTwoSection;