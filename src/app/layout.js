"use client";

import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../../components/Navbar";
import styles from "../../styles/layout.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "../../components/Logo";
import Searchbar from "../../components/searchbar";
import HeadlineBodyPlaceholder from "../../components/HeadlineBodyPlaceholder";
import Footer from "../../components/Footer";

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        setIsLoading(false); // Sets isLoading to false after component has loaded
      }, 1000);
    }
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

              <Row id={styles.headlineBody}>
                {isLoading ? (
                  <HeadlineBodyPlaceholder /> // Renders placeholder while component is loading
                ) : (
                  children // Renders content after it has loaded
                )}
              </Row>
            </Col>
          </Row>
          <Row>
            <Footer time={currentTime} />
          </Row>
        </Container>
      </body>
    </html>
  );
}
