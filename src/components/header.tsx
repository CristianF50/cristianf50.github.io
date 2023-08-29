import { useEffect, useState } from "react";
import { Layout } from "antd";
import "../styles/header.scss";


function Header() {
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > 0) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    });
  }, []);

  return (
    <Layout.Header className={`header ${!isTransparent ? "transparent" : ""}`}>
      AAAA
    </Layout.Header>
  );
}

export default Header;
