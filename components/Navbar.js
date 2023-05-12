"use client";

import React from "react";
import { useState } from "react";
import { Nav, Image } from "react-bootstrap";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  const [all, setAll] = useState("/all.png");
  const [gen, setGen] = useState("/news.png");
  const [biz, setBiz] = useState("/biz.png");
  const [sci, setSci] = useState("/sci.png");
  const [tech, setTech] = useState("/tech.png");
  const [ent, setEnt] = useState("/ent.png");
  return (
    <div id={styles.nav} className="pt-5">
      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link
            href="/"
            id="all"
            className={`py-3 ${styles.navlink}`}
            onMouseEnter={() => {
              setAll("/all_h.png");
            }}
            onMouseLeave={() => {
              setAll("/all.png");
            }}
          >
            <Image src={all} className={`me-3 pb-1 ${styles.img}`} />
            All
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/"
            id="general"
            className={`py-3 ${styles.navlink}`}
            onMouseEnter={() => {
              setGen("/news_h.png");
            }}
            onMouseLeave={() => {
              setGen("/news.png");
            }}
          >
            <Image src={gen} className={`me-3 pb-1 ${styles.img}`} />
            General
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/biz"
            id="biz"
            className={`py-3 ${styles.navlink}`}
            onMouseEnter={() => {
              setBiz("/biz_h.png");
            }}
            onMouseLeave={() => {
              setBiz("/biz.png");
            }}
          >
            <Image src={biz} className={`me-3 pb-1 ${styles.img}`} />
            Business
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/sci"
            id="sci"
            className={`py-3 ${styles.navlink}`}
            onMouseEnter={() => {
              setSci("/sci_h.png");
            }}
            onMouseLeave={() => {
              setSci("/sci.png");
            }}
          >
            <Image src={sci} className={`me-3 pb-1 ${styles.img}`} />
            Science
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/tech"
            id="tech"
            className={`py-3 ${styles.navlink}`}
            onMouseEnter={() => {
              setTech("/tech_h.png");
            }}
            onMouseLeave={() => {
              setTech("/tech.png");
            }}
          >
            <Image src={tech} className={`me-3 pb-1 ${styles.img}`} />
            Technology
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/ent"
            id="ent"
            className={`py-3 ${styles.navlink}`}
            onMouseEnter={() => {
              setEnt("/ent_h.png");
            }}
            onMouseLeave={() => {
              setEnt("/ent.png");
            }}
          >
            <Image src={ent} className={`me-3 pb-1 ${styles.img}`} />
            Entertainment
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export default Navbar;
