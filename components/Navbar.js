"use client";

import React from "react";
import { useState } from "react";
import { Nav, Image, Navbar } from "react-bootstrap";
import styles from "../styles/Navbar.module.css";
import CustomDropdown from "./dropdown";

const NavBar = () => {
  const [all, setAll] = useState("/images/all_b.png");
  const [world, setWorld] = useState("/images/world.png");
  const [news, setNews] = useState("/images/news.png");
  const [pol, setPol] = useState("/images/pol.png");
  const [biz, setBiz] = useState("/images/biz.png");
  const [sci, setSci] = useState("/images/sci.png");
  const [tech, setTech] = useState("/images/tech.png");
  const [ent, setEnt] = useState("/images/ent.png");
  return (
    <>
      <Nav id={styles.nav} className="flex-column pt-5">
        <Nav.Item>
          <Nav.Link
            href="/"
            id="all"
            className={`py-3 ${styles.navlink}`}
            onMouseEnter={() => {
              setAll("/images/all_h.png");
            }}
            onMouseLeave={() => {
              setAll("/images/all_b.png");
            }}
          >
            <Image
              src={all}
              className={`me-3 pb-1 ${styles.img}`}
              alt="all icon"
            />
            All
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/"
            id="news"
            className={`py-3 ${styles.navlink}`}
            onMouseEnter={() => {
              setNews("/images/news_h.png");
            }}
            onMouseLeave={() => {
              setNews("/images/news.png");
            }}
          >
            <Image src={news} className={`me-3 pb-1 ${styles.img}`} />
            News
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/world"
            id="world"
            className={`py-3 ${styles.navlink}`}
            onMouseEnter={() => {
              setWorld("/images/world_h.png");
            }}
            onMouseLeave={() => {
              setWorld("/images/world.png");
            }}
          >
            <Image src={world} className={`me-3 pb-1 ${styles.img}`} />
            World
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/politics"
            id="pol"
            className={`py-3 ${styles.navlink}`}
            onMouseEnter={() => {
              setPol("/images/pol_h.png");
            }}
            onMouseLeave={() => {
              setPol("/images/pol.png");
            }}
          >
            <Image src={pol} className={`me-3 pb-1 ${styles.img}`} />
            Politics
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/sci"
            id="sci"
            className={`py-3 ${styles.navlink}`}
            onMouseEnter={() => {
              setSci("/images/sci_h.png");
            }}
            onMouseLeave={() => {
              setSci("/images/sci.png");
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
              setTech("/images/tech_h.png");
            }}
            onMouseLeave={() => {
              setTech("/images/tech.png");
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
              setEnt("/images/ent_h.png");
            }}
            onMouseLeave={() => {
              setEnt("/images/ent.png");
            }}
          >
            <Image src={ent} className={`me-3 pb-1 ${styles.img}`} />
            Entertainment
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href="/biz"
            id="biz"
            className={`py-3 ${styles.navlink}`}
            onMouseEnter={() => {
              setBiz("/images/biz_h.png");
            }}
            onMouseLeave={() => {
              setBiz("/images/biz.png");
            }}
          >
            <Image src={biz} className={`me-3 pb-1 ${styles.img}`} />
            Business
          </Nav.Link>
        </Nav.Item>
        <CustomDropdown />
      </Nav>
    </>
  );
};

export default NavBar;
