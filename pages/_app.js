import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavBar from "../components/Navbar";
import styles from "../styles/layout.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "../components/Logo";
import Searchbar from "../components/searchbar";
import HeadlineBodyPlaceholder from "../components/HeadlineBodyPlaceholder";
import Footer from "../components/Footer";
import "../styles/globals.css";

export default function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const fetchCurrentTime = async () => {
      try {
        const response = await fetch("/api/current-time");
        if (response.ok) {
          const { currentTime } = await response.json();
          setCurrentTime(new Date(currentTime).toString());
        } else {
          // Handle the error case, e.g., display an error message
          console.error("Failed to fetch current time");
        }
      } catch (error) {
        // Handle the error case, e.g., display an error message
        console.error("An error occurred while fetching current time", error);
      }
    };

    fetchCurrentTime();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  }, []);

  return (
    <Container fluid id={styles.container}>
      <Row>
        <Col id={styles.nav} xs={5} sm={5} md={3} lg={3}>
          <NavBar />
        </Col>
        <Col xs={7} sm={7} md={9} lg={9}>
          <Row className="justify-content-center">
            <Logo />
          </Row>
          <Row className="justify-content-center">
            <Searchbar></Searchbar>
          </Row>

          <Row id={styles.headlineBody}>
            {isLoading ? (
              <HeadlineBodyPlaceholder />
            ) : (
              <Component {...pageProps} currentTime={new Date(currentTime)} /> // Convert string back to Date object
            )}
          </Row>
          <Row>
            <Footer time={new Date(currentTime)} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
