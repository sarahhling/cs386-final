"use client";
import "./globals.css";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import NavBar from "../../components/Navbar";
import styles from "../../styles/layout.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "../../components/Logo";
import Searchbar from "../../components/searchbar";
import HeadlineBodyPlaceholder from "../../components/HeadlineBodyPlaceholder";
import React, { useState, useEffect } from "react";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after the component has loaded
    }, 2000);
  }, []);

  return (
    <html lang="en">
      <body>
        <Container fluid id={styles.container}>
          <Row>
            <Col id={styles.nav}>
              <NavBar />
            </Col>
            <Col>
              <Row className="justify-content-center">
                <Logo />
              </Row>
              <Row className="justify-content-center">
                <Searchbar></Searchbar>
              </Row>

              <Row>
                {
                  isLoading ? (
                    <HeadlineBodyPlaceholder /> // Renders placeholder while component is loading
                  ) : (
                    children
                  ) // Renders content after it has loaded
                }
              </Row>
            </Col>
          </Row>
        </Container>
      </body>
    </html>
  );
}
