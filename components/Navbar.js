"use client";

import React from "react";
import { Nav } from "react-bootstrap";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div id={styles.nav} className="pt-5">
      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link href="/" id="all" className={`py-3 ${styles.navlink}`}>
            All
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/biz" id="biz" className={`py-3 ${styles.navlink}`}>
            Business
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/sci" id="sci" className={`py-3 ${styles.navlink}`}>
            Science
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/tech" id="tech" className={`py-3 ${styles.navlink}`}>
            Technology
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/ent" id="ent" className={`py-3 ${styles.navlink}`}>
            Entertainment
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Navbar;
