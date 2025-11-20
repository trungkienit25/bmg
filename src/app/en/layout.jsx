import Header from "@layouts/headers/Index";
import Footer from "@layouts/footers/Index";

const EnLayout = ({
  children
}) => {
  return (
    <>
      <Header layout={"default"} lang="en" />

      {/* dynamic content */}
      <div id="sb-dynamic-content" className="sb-transition-fade">
        {children}
        
        <Footer layout={"default"} lang="en" />
      </div>
      {/* dynamic content end */}
    </>
  );
};
export default EnLayout;