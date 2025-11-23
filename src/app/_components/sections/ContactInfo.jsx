import DataVI from "@data/sections/contact-info.json";
import DataEN from "@data/sections/contact-info-en.json";

const ContactInfoSection = ({ lang }) => {
  const Data = lang === 'en' ? DataEN : DataVI;

  return (
    <>
        {/* contact info */}
        <section className="sb-p-90-30">
            <div className="container">
                <div className="row">
                    {Data.items.map((item, key) => (
                    <div 
                        className="col-lg-4" 
                        key={`contact-info-item-${key}`}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay={key * 150}
                    >
                        <div className="sb-features-item sb-mb-60">
                            <div className="sb-number">{item.num}</div>
                            <div className="sb-feature-text">
                            <h3 className="sb-mb-15">{item.title}</h3>
                            <p className="sb-text">{item.text}</p>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
        {/* contact info end */}
    </>
  );
};

export default ContactInfoSection;