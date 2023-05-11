"use client";
import "./globals.css";
import { Container, Row, Col } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import styles from "../../styles/layout.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "../../components/Logo";
import Searchbar from "../../components/searchbar";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Container fluid id={styles.container}>
          <Row>
            <Col id={styles.nav}>
              <Navbar></Navbar>
            </Col>
            <Col>
              <Row className="justify-content-center">
                <Logo />
              </Row>
              <Row className="justify-content-center">
                <Searchbar></Searchbar>
              </Row>
              <Row>{children}</Row>
            </Col>
          </Row>
        </Container>
      </body>
    </html>
  );
}
