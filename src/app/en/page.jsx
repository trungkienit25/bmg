import dynamic from "next/dynamic";

import AppData from "@data/app.json";
import Products from '@data/products';

import AboutTwoSection from "@components/sections/AboutTwo";
import CallToActionTwoSection from "@components/sections/CallToActionTwo";
import FeaturesOneSection from "@components/sections/Features";
import HeroSection from "@components/sections/Hero";
import HeroSwiper from "@components/sliders/HeroSwiper";
const GalleryMasonry = dynamic(() => import("@components/gallery/GalleryMasonry"), { ssr: false });

import GalleryData from "@data/gallery.json";
import Link from "next/link";

const ProductsSlider = dynamic(() => import("@components/sliders/Products"), { ssr: false });
const TestimonialSlider = dynamic(() => import("@components/sliders/Testimonial"), { ssr: false });

export const metadata = {
  title: {
    default: "Home",
  },
  description: AppData.settings.siteDescription,
}

const Home2 = () => {
  const galleryItems = GalleryData.items.slice(0, 6);
  return (
    <>
      <HeroSwiper />
      {/* <HeroSection type={2} /> */}
      <AboutTwoSection />
      {/* <FeaturesOneSection /> */}
      <ProductsSlider items={Products.collection['popular']} slidesPerView={3} />
      {/* <TestimonialSlider /> */}
      {/* gallery */}
      <div className="sb-p-90-60">
        <div className="container">
          <div className="sb-group-title sb-mb-30 galleyry-fix">
            <div className="sb-mb-30">
              <h2 className="sb-mb-30 " dangerouslySetInnerHTML={{ __html: "Moments at Banh Mi GAC" }} />
              {/* <p className="sb-text" dangerouslySetInnerHTML={{__html : Data.description}} /> */}
            </div>
            {/* <div className="sb-right sb-mb-30"> */}
            {/* button */}
            {/* <Link href="/gallery" className="sb-btn">
                <span className="sb-icon">
                  <img src="/img/ui/icons/arrow.svg" alt="icon" />
                </span>
                <span>View more photo library</span>
              </Link> */}
            {/* button end */}
            {/* </div> */}
          </div>
          <GalleryMasonry items={galleryItems} layout={1} />

        </div>

      </div>
      {/* gallery end */}
      {/* <CallToActionTwoSection /> */}
    </>
  );
};
export default Home2;