import HeaderLayoutDefault from "./LayoutDefault";

const Header = ({ layout, lang }) => {
  switch (layout) {
    case 1:
      return;

    case 2:
      return;

    default:
      return (
        <HeaderLayoutDefault lang={lang} />
      );
  }
};
export default Header;
