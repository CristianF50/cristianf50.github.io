import { Button, Layout, Row, Col } from "antd"
import Header from "./header"

import "../styles/landing.scss"

function Landing() {
    return (
        <Layout>
            <Header/>
            <Layout.Content className="full-screen-intro">
                <Row className="w-100 h-100 presentacion" align={"middle"} justify={"center"}>
                    Hola
                </Row>
            </Layout.Content>
            <Layout.Content className="full-screen-intro">
                <Row className="w-100 h-100 presentacion" align={"middle"} justify={"center"}>
                    Hola
                </Row>
                </Layout.Content>
            
        </Layout>
    )
}

export default Landing