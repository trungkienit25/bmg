import FooterLayoutDefault from "./LayoutDefault";

const Footer = ({ layout, lang }) => {
  switch (layout) {
    case 1:
      return;
    case 2:
      return;
    default:
      return <FooterLayoutDefault lang={lang} />;
  }
};
export default Footer;
