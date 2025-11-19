"use client";

import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const MenuItem = ({ item, index, noImage, marginBottom }) => {

  const [img, setImg] = useState(false);
  const [imgValue, setImgValue] = useState([]);

  const formatPrice = (price) => {
    return price.toLocaleString('vi-VN') + ' VNĐ';
  };

  return (
    <>
      <a 
        data-fancybox="menu" 
        data-no-swup 
        href={item.image} 
        className={`sb-menu-item sb-mb-${marginBottom} sb-menu-item-custom`} 
        onClick={(e) => { e.preventDefault(); setImg(true); setImgValue([{ "src": item.image, "alt": item.title }]); }}
      >

        {noImage != 1 &&
          <div className="sb-cover-frame">
            <img src={item.image} alt={item.title} />
            <div dangerouslySetInnerHTML={{ __html: item.badge }} />
          </div>
        }

        <div className="sb-card-tp">
          <h4 className="sb-card-title">{item.title}</h4>
          {/* --- ĐÃ KHÔI PHỤC: Thanh đỏ bên phải --- */}
          <div className="sb-price"></div>
        </div>

        <div className="sb-description">
          <p className="sb-text sb-mb-15">
            {item.text}
          </p>
        </div>

        {/* Ô giá tiền */}
        <div className="sb-menu-price">
          {formatPrice(item.price)}
        </div>

      </a>

      <Lightbox
        open={img}
        close={() => setImg(false)}
        slides={imgValue}
        styles={{ container: { backgroundColor: "rgba(38, 31, 65, .85)" } }}
        render={{
          buttonPrev: imgValue.length <= 1 ? () => null : undefined,
          buttonNext: imgValue.length <= 1 ? () => null : undefined,
        }}
      />
    </>
  );
};
export default MenuItem;