"use client";

import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

import AppData from "@data/app.json";
import AppDataEn from "@data/app-en.json";
import CartData from "@data/cart.json";

import MiniCart from "@layouts/cart/MiniCart";
import MiniSidebar from "@layouts/sidebar/MiniSidebar";

const DefaultHeader = ({ lang }) => {
    const Data = lang === 'en' ? AppDataEn : AppData;

    const [mobileMenu, setMobileMenu] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(false);
    const [miniCart, setMiniCart] = useState(false);
    const [miniSidebar, setMiniSidebar] = useState(false);
    const asPath = usePathname();

    const isPathActive = (path) => {
        return (asPath.endsWith(path) == 1 && path !== '/') || asPath === path;
    };

    const handleSubMenuClick = (index, e) => {
        if (window !== undefined) {
            if (window.innerWidth <= 992) {
                e.preventDefault();
                setOpenSubMenu(openSubMenu === index ? false : index);
            }
        }
    };

    useEffect(() => {
        // close mobile menu
        setMobileMenu(false);
        setMiniCart(false);
        setMiniSidebar(false);
        setOpenSubMenu(false);
    }, [asPath]);

    return (
        <>
            {/* top bar */}
            <div className="sb-top-bar-frame">
                <div className="sb-top-bar-bg"></div>
                <div className="container">
                    <div className="sb-top-bar">
                        <Link href={lang === 'en' ? '/en' : '/'} className="sb-logo-frame">
                            {/* logo img */}
                            <img src={Data.header.logo.image} alt={Data.header.logo.alt} />
                        </Link>
                        {/* menu */}
                        <div className="sb-right-side">
                            <nav id="sb-dynamic-menu" className="sb-nav sb-menu-transition">
                                <ul className={`sb-navigation ${mobileMenu ? "sb-active" : ""}`}>
                                    {Data.header.menu.map((item, index) => (
                                        <li className={`sb-has-children ${isPathActive(item.link) ? "sb-active" : ""}`} key={`header-menu-item-${index}`}>
                                            <Link href={item.link} onClick={(item.children.length > 0) ? (e) => handleSubMenuClick(index, e) : null}>
                                                {item.label}
                                            </Link>
                                            {item.children.length > 0 && (
                                                <ul className={openSubMenu === index ? 'sb-active' : ''}>
                                                    {item.children.map((subitem, subIndex) => (
                                                        <li key={`header-submenu-item-${subIndex}`} className={isPathActive(subitem.link) ? "sb-active" : ""}>
                                                            <Link href={subitem.link}>
                                                                {subitem.label}
                             
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                            <div className="sb-buttons-frame">
                                {/* menu btn */}
                                <div className={`sb-menu-btn ${mobileMenu ? "sb-active" : ""}`} onClick={() => setMobileMenu(!mobileMenu)}><span></span></div>
                                {/* info btn */}
                                <div className={`sb-info-btn ${miniSidebar ? "sb-active" : ""}`} onClick={() => setMiniSidebar(!miniSidebar)}><span></span></div>
                                <Link href={lang === 'en' ? (asPath.replace('/en', '') || '/') : `/en${asPath}`} className="sb-lang-switch-btn">
                                  <span>{lang === 'en' ? 'EN' : 'VI'}</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* info bar */}
                <div className={`sb-info-bar ${miniSidebar ? "sb-active" : ""}`}>
                    <MiniSidebar lang={lang} />
                </div>
                {/* info bar end */}
                {/* minicart */}
                <div className={`sb-minicart ${miniCart ? "sb-active" : ""}`}>
                    <MiniCart />
                </div>
                {/* minicart end */}
            </div>
            {/* top bar end */}
        </>
    );
};
export default DefaultHeader;
