import { useEffect, useState } from "react";
import { Layout } from "antd";
import { useSpring, animated } from "react-spring";
import "../styles/header.scss";

function Header({transparency: boolean}) {



  return (
    <animated.div style={props.style}>
        <Layout.Header className={`header`}>
      AAAA
    </Layout.Header>
    </animated.div>
    
  );
}

export default Header;
