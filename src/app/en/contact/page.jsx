
import AppData from "@data/app.json";

import ContactForm from "@components/forms/ContactForm";
import ContactInfoSection from "@components/sections/ContactInfo";
import ContactMapSection from "@components/sections/ContactMap";

import Link from "next/link";

export const metadata = {
    title: {
        default: "Contact",
    },
    description: AppData.settings.siteDescription,
}

const Contact = () => {
    return (
        <>
            {/* banner */}
            <section className="sb-banner sb-banner-color">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-7">
                            {/* main title */}
                            <div className="sb-main-title-frame">
                                <div className="sb-main-title">
                                    
                                    <h1 className="sb-mb-30">Connect with Banh Mi GAC</h1>
                                    <p className="sb-text sb-text-lg sb-mb-30">Let us know what you think</p>

                                    <ul className="sb-breadcrumbs">
                                        <li><Link href="/">Home</Link></li>
                                        <li><Link href="/en/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/* main title end */}
                        </div>
                        <div className="col-lg-5">
                            <div className="sb-contact-form-frame">
                                <div className="sb-illustration-9">
                                    <img src="/img/illustrations/thu.png" alt="envelope" className="sb-envelope-1" />
                                    <img src="/img/illustrations/stamp.png" alt="envelope" className="sb-envelope-2" />

                                    <div className="sb-cirkle-1"></div>
                                    <div className="sb-cirkle-2"></div>
                                    <div className="sb-cirkle-3"></div>
                                </div>
                                <div className="sb-form-content">
                                    <div className="sb-main-content">
                                        <h3 className="sb-mb-30">Send us a message</h3>
                                        
                                        <ContactForm />
                                    </div>
                                    <div className="sb-success-result" id="contactFormStatus">
                                        <img src="/img/ui/success.jpg" alt="success" className="sb-mb-15" />
                                        <div className="sb-success-title sb-mb-15">Success!</div>
                                        <p className="sb-text sb-mb-15">Your message has been sent <br/>successfully</p>

                                        {/* button */}
                                        <Link href="/en" className="sb-btn sb-btn-2">
                                            <span className="sb-icon">
                                                <img src="/img/ui/icons/arrow-2.svg" alt="icon" />
                                            </span>
                                            <span>Back to homepage</span>
                                        </Link>
                                        {/* button end */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* banner end */}

            <ContactInfoSection />

            <ContactMapSection />
        </>
    );
};
export default Contact;
