import { Button, Layout, Row, Col, Typography } from "antd";
import Header from "./header";

import "../styles/landing.scss";

const { Text } = Typography;

function Landing() {
  return (
    <Layout>
      <Header />
      <Layout.Content className="full-screen-intro">
        <Row className="w-100 h-100" align={"middle"} justify={"center"}>
          <Col>
            <Row>
              <Text className="presentacion">THIS </Text>
              <Text className="presentacion-outline">IS </Text>
              <Text className="presentacion">A</Text>
            </Row>
            <Row>
              <Text className="presentacion">PLACEHOLDER</Text>
            </Row>
          </Col>
        </Row>
      </Layout.Content>
      <Layout.Content className="full-screen-intro">
        <Row
          className="w-100 h-100 presentacion"
          align={"middle"}
          justify={"center"}
        >
          Hola
        </Row>
      </Layout.Content>
    </Layout>
  );
}

export default Landing;
