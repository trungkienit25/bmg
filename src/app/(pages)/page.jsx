// import React from "react";
// import dynamic from "next/dynamic";

// import AppData from "@data/app.json";
// import Products from '@data/products';

// import HeroSection from "@components/sections/Hero"
// import AboutSection from "@components/sections/About";
// import CategoriesSection from "@components/sections/Categories";
// import TeamSection from "@components/sections/Team";
// import CallToActionSection from "@components/sections/CallToAction";

// const ProductsSlider = dynamic( () => import("@components/sliders/Products"), { ssr: false } );

// export const metadata = {
//   title: {
// 		default: "Home",
// 		template: "%s | " + AppData.settings.siteName,
// 	},
//   description: AppData.settings.siteDescription,
// }

// async function Home1() {
//   return (
//     <>
//       <HeroSection type={1} />
//       <AboutSection />
//       <CategoriesSection />
//       <ProductsSlider items={Products.collection['popular']} slidesPerView={4} />
//       <TeamSection />
//       <CallToActionSection />
//     </>
//   );
// };
// export default Home1;
import dynamic from "next/dynamic";

import AppData from "@data/app.json";
import Products from '@data/products';

import AboutTwoSection from "@components/sections/AboutTwo";
import CallToActionTwoSection from "@components/sections/CallToActionTwo";
import FeaturesOneSection from "@components/sections/Features";
import HeroSection from "@components/sections/Hero";
import GalleryMasonry from "@components/gallery/GalleryMasonry";

import GalleryData from "@data/gallery.json";
import Link from "next/link";

const ProductsSlider = dynamic( () => import("@components/sliders/Products"), { ssr: false } );
const TestimonialSlider = dynamic( () => import("@components/sliders/Testimonial"), { ssr: false } );

export const metadata = {
  title: {
		default: "Trang chủ",
	},
  description: AppData.settings.siteDescription,
}

const Home2 = () => {
  const galleryItems = GalleryData.items.slice(0, 6);
  return (
    <>
      <HeroSection type={2} />
      <AboutTwoSection />
      {/* <FeaturesOneSection /> */}
      <ProductsSlider items={Products.collection['popular']} slidesPerView={3} />
      {/* <TestimonialSlider /> */}
            {/* gallery */}
      <div className="sb-p-90-60">
        <div className="container">
          <div className="sb-group-title sb-mb-30">
            <div className="sb-left sb-mb-30">
              <h2 className="sb-mb-30" dangerouslySetInnerHTML={{ __html: "Khoảng khắc tại Bánh Mì GÁC" }} />
              {/* <p className="sb-text" dangerouslySetInnerHTML={{__html : Data.description}} /> */}
            </div>
            <div className="sb-right sb-mb-30">
              {/* button */}
              {/* <Link href="/gallery" className="sb-btn">
                <span className="sb-icon">
                  <img src="/img/ui/icons/arrow.svg" alt="icon" />
                </span>
                <span>Xem thêm thư viện ảnh</span>
              </Link> */}
              {/* button end */}
            </div>
          </div>
          <GalleryMasonry items={galleryItems} layout={1} />

        </div>

      </div>
      {/* gallery end */}
      <CallToActionTwoSection />
    </>
  );
};
export default Home2;