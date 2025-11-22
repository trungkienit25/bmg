import { Be_Vietnam_Pro } from 'next/font/google' // 1. Import từ Google Fonts
import localFont from 'next/font/local'

const beVNPro = Be_Vietnam_Pro({
  subsets: ['latin', 'vietnamese'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-bevnpro',
  display: 'swap',
  style: ['normal', 'italic'],
});

const lodestone = localFont({
  src: [
    {
      path: './_styles/fonts/EDAughris/DFVN ED Aughris.otf',
    }
  ],
  variable: '--font-lodestone'
})

const phudu = localFont({
  src: [
    {
      path: './_styles/fonts/PhuDu/Phudu-Regular.ttf',
    }
  ],
  variable: '--font-phudu'
});

import "@styles/css/plugins/bootstrap.min.css";
import "@styles/css/plugins/swiper.min.css";

import { register } from "swiper/element/bundle";

register();

import '@styles/scss/style.scss';
import "./globals.css";

import ScrollbarProgress from "@layouts/scrollbar-progress/Index";
import AppData from "@data/app.json";
import AOSInit from "@components/AOSInit";

export const metadata = {
  title: {
    default: AppData.settings.siteName,
    template: "%s | " + AppData.settings.siteName,
  },
  description: AppData.settings.siteDescription,
}

const RootLayout = ({
  children
}) => {
  return (
    <html lang="vi" className={`${beVNPro.variable} ${lodestone.variable} ${phudu.variable}`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css" />
      </head>
      <body>
        {/* app wrapper */}
        <div className="sb-app">
          <AOSInit />
          {children}

          <ScrollbarProgress />
        </div>
        {/* app wrapper end */}
      </body>
    </html>
  );
};
export default RootLayout;