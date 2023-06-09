import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CustomDropdown from "../components/dropdown";
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
  const [dataArray, setDataArray] = useState([]);
  const [query, setQuery] = useState("");

  // Function to receive the data from the child component
  const handleData2 = (data) => {
    setDataArray(data);
    console.log("from app " + data);
  };

  const handleQueryChange = (myQuery) => {
    // Perform actions with the query value in the parent component
    setQuery(myQuery);
  };

  useEffect(() => {
    console.log("Query value in App:", query);
  }, [query]);

  useEffect(() => {
    const fetchCurrentTime = async () => {
      try {
        const response = await fetch("/api/current-time");
        if (response.ok) {
          const { currentTime } = await response.json();
          setCurrentTime(new Date(currentTime).toString());
        } else {
          console.error("Failed to fetch current time");
        }
      } catch (error) {
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
        <Col id={styles.nav} xs={5} sm={5} md={3} lg={3} xl={3}>
          <NavBar sendToApp={handleData2}></NavBar>
        </Col>
        <Col xs={7} sm={7} md={9} lg={9} xl={9}>
          <Row className="justify-content-center">
            <Logo />
          </Row>
          <Row className="justify-content-center">
            <Searchbar onQueryChange={handleQueryChange}></Searchbar>
          </Row>

          <Row id={styles.headlineBody}>
            {isLoading ? (
              <HeadlineBodyPlaceholder />
            ) : (
              <Component {...pageProps} filters={dataArray} query={query} />
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
