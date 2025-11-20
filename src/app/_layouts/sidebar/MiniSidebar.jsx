import AppDataVI from "@data/app.json";
import AppDataEN from "@data/app-en.json";
import Link from "next/link";

import PostsData from "@data/.json/posts";

const MiniSidebar = ({ lang }) => {
    const AppData = lang === 'en' ? AppDataEN : AppDataVI;
    const t = {
        contact: lang === 'en' ? 'Contact' : 'Liên hệ',
        address: lang === 'en' ? 'Address' : 'Địa chỉ',
        openingHours: lang === 'en' ? 'Opening Hours' : 'Giờ mở cửa',
        phone: lang === 'en' ? 'Phone' : 'Số điện thoại',
        email: 'Email',
        instagram: 'Instagram',
    };

    return (
        <>
            <div className="sb-infobar-content">
                <div className="sb-ib-title-frame sb-mb-30">
                    <h4>{t.contact}</h4><i className="fas fa-arrow-down"></i>
                </div>
                <ul className="sb-list sb-mb-30">
                    <li><b>{t.address}:</b><span>{AppData.settings.shortAddress}</span></li>
                    <li><b>{t.openingHours}:</b><span>{AppData.settings.openingHours}</span></li>
                    <li><b>{t.phone}:</b><span>{AppData.settings.phone}</span></li>
                    <li><b>{t.email}:</b><span>{AppData.settings.email}</span></li>
                </ul>
                <div className="sb-ib-title-frame sb-mb-30">
                    <h4>{t.instagram}</h4><i className="fas fa-arrow-down"></i>
                </div>
                <ul className="sb-instagram sb-mb-30">
                    {AppData.instagram.map((item, key) => (
                    <li key={`mini-sidebar-inst-item-${key}`}><a href={item.link} target="_blank"><img src={item.image} alt={item.title} /></a></li>
                    ))}
                </ul>
                <hr />
                {/* <div className="sb-ib-title-frame sb-mb-30">
                    <h4>Latest publications</h4><i className="fas fa-arrow-down"></i>
                </div>
                {PostsData.slice(0, 3).map((item, key) => (
                <Link href={`/blog/${item.id}`} className="sb-blog-card sb-blog-card-sm sb-mb-30" key={`mini-sidebar-posts-item-${key}`}>
                    <div className="sb-cover-frame">
                        <img src={item.image} alt={item.title} />
                    </div>
                    <div className="sb-blog-card-descr">
                        <h5 className="sb-mb-5">{item.title}</h5>
                        <p className="sb-text sb-text-sm">{item.short}</p>
                    </div>
                </Link>
                ))} */}
            </div>
            <div className="sb-info-bar-footer">
                <ul className="sb-social">
                    {AppData.social.map((item, key) => (
                    <li key={`mini-sidebar-social-item-${key}`}><a href={item.link} target="_blank" title={item.title}><i className={item.icon}></i></a></li>
                    ))}
                </ul>
            </div>
        </>
    );
};
export default MiniSidebar;