"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from 'next/navigation';

import { ScrollAnimation } from "@common/scrollAnims";
import { useEffect } from "react";

const PageBanner = ({ pageTitle, breadTitle, description, type, lang }) => {
  const asPath = usePathname();

  let clearBreadTitle;

  if (breadTitle != undefined) {
    clearBreadTitle = breadTitle;
  } else {
    const regex = /(<([^>]+)>)/gi;
    clearBreadTitle = pageTitle ? pageTitle.replace(regex, "") : "";
  }

  if (pageTitle == 'Search: %s') {
    const searchParams = useSearchParams();
    const query = searchParams.get('key');

    pageTitle = 'Search: ' + query;
  }

  const t = {
    home: lang === 'en' ? 'Home' : 'Trang chủ',
    blog: 'Blog',
    order: lang === 'en' ? 'Order' : 'Đặt hàng',
    products: lang === 'en' ? 'Products' : 'Sản phẩm',
  };

  useEffect(() => {
    ScrollAnimation();
  }, []);

  return (
    <>
      {/* banner */}
      <section className={type == 2 ? "sb-banner sb-banner-sm sb-banner-color" : "sb-banner sb-banner-xs sb-banner-color"}>
        <div className="container" style={{width: '100%'}}>
          <div className="row">
            <div className="col-lg-12">
              {/* main title */}
              <div className="sb-main-title-frame">
                <div className={type == 2 ? "sb-main-title text-center" : "sb-main-title"}>
                  {type == 2 &&
                    <span className="sb-suptitle sb-mb-30" dangerouslySetInnerHTML={{ __html: clearBreadTitle }} />
                  }
                  <h1 className={type == 2 ? "sb-h1 sb-mb-30" : "sb-h2"} dangerouslySetInnerHTML={{ __html: pageTitle }} />
                  {type == 2 &&
                    <p className="sb-text sb-text-lg sb-mb-30" dangerouslySetInnerHTML={{ __html: description }} />
                  }
                  <ul className="sb-breadcrumbs">
                    <li><Link href={lang === 'en' ? '/en' : '/'}>{t.home}</Link></li>
                    {asPath.indexOf('/blog/') != -1 && asPath.indexOf('/blog/page/') == -1 &&
                      <li>
                        <Link href={lang === 'en' ? '/en/blog' : '/blog'}>{t.blog}</Link>
                      </li>
                    }
                    {asPath.indexOf('/products') != -1 || asPath.indexOf('/cart') != -1 || asPath.indexOf('/checkout') != -1 &&
                      <li>
                        <Link href={lang === 'en' ? '/en/shop' : '/shop'}>{t.order}</Link>
                      </li>
                    }
                    {asPath.endsWith('/product') == 1 &&
                      <li>
                        <Link href={lang === 'en' ? '/en/products' : '/products'}>{t.products}</Link>
                      </li>
                    }
                    <li><a dangerouslySetInnerHTML={{ __html: clearBreadTitle }} /></li>
                  </ul>
                </div>
              </div>
              {/* main title end */}
            </div>
          </div>
        </div>
      </section>
      {/* banner end */}
    </>
  );
};
export default PageBanner;
