// "use client";

// import Link from "next/link";
// import AppData from "@data/app.json";
// import { usePathname } from 'next/navigation';

// const DefaultFooter = () => {
//   const asPath = usePathname();

//   return (
//     <>
//         {/* footer */}
//         <footer>
//             <div className="container">
//                 <div className="sb-footer-frame">
//                     <Link href="/" className="sb-logo-frame">
//                         {/* logo img */}
//                         <img src={AppData.header.logo.image} alt={AppData.header.logo.alt} />
//                     </Link>
//                     <ul className="sb-social">
//                         {AppData.social.map((item, key) => (
//                         <li key={`footer-social-item-${key}`}><a href={item.link} target="_blank" title={item.title}><i className={item.icon}></i></a></li>
//                         ))}
//                     </ul>
//                     <div className="sb-copy">{AppData.footer.copy}</div>
//                 </div>
//             </div>
//         </footer>
//         {/* footer end */}
//     </>
//   );
// };
// export default DefaultFooter;

"use client";

import Link from "next/link";
import AppDataVI from "@data/app.json";
import AppDataEN from "@data/app-en.json";
import { usePathname } from 'next/navigation';

const DefaultFooter = ({ lang }) => {
  const asPath = usePathname();
  const AppData = lang === 'en' ? AppDataEN : AppDataVI;
  const t = {
    openingHours: lang === 'en' ? 'OPENING HOURS' : 'GIỜ MỞ CỬA'
  };

  // Sử dụng cấu trúc mới dựa trên prompt chi tiết
  return (
    <>
      {/* footer */}
      <footer className="gac-footer"> {/* Đổi class để áp dụng style mới */}
        <div className="container">
         {/* <div className="sb-footer-frame">
        <Link href="/" className="sb-logo-frame">
        <img src={AppData.header.logo.image} alt={AppData.header.logo.alt} />
        </Link>
        </div>  */}
          {/* Phần 3 cột */}
          <div className="row gac-footer-main">
            
            {/* Cột 1: Giờ mở cửa */}
            <div className="col-lg-4">
              <div className="gac-footer-column">
                <i className="far fa-clock"></i> {/* Icon đồng hồ (Font Awesome Regular) */}
                <div className="gac-footer-text">
                  <h5>{t.openingHours}</h5>
                  <p>{AppData.settings.openingHours}</p>
                </div>
              </div>
            </div>

            {/* Cột 2: Địa chỉ */}
            <div className="col-lg-4">
              <div className="gac-footer-column">
                <i className="far fa-compass"></i> {/* Icon la bàn (Font Awesome Regular) */}
                {lang === 'en' ? (
                <div className="gac-footer-text">
                    <h5>ADDRESS</h5>                                                    
                    <p>{AppData.settings.address}</p> 
                </div>
                ) : (
                <div className="gac-footer-text">
                    <h5>{AppData.settings.address.split(',')[0]}, {AppData.settings.address.split(',')[1]},</h5>                                                    
                    <p>{AppData.settings.address.split(',')[2]}, {AppData.settings.address.split(',')[3]}</p> 
                </div>
                )}
              </div>
            </div>

            {/* Cột 3: Mạng xã hội */}
            <div className="col-lg-4">
              <div className="gac-footer-column gac-footer-social">
                {AppData.social.map((item, key) => (                                                                                                              
                <a href={item.link} target="_blank" title={item.title} key={`footer-social-item-${key}`}>                                                       
                    <i className={item.icon}></i>
                    </a>
                ))}                                                                                                                                                
              </div>
            </div>
            
          </div>

          {/* Phần Copyright */}
          <div className="gac-footer-copyright">
            <p>{AppData.footer.copy}</p>
          </div>

        </div>
      </footer>
      {/* footer end */}
    </>
  );
};
export default DefaultFooter;