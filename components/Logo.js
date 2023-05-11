import React from "react";
import Image from "react-bootstrap/Image";
import styles from "../styles/Logo.module.css";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" id={styles.logoLink}>
      <Image src="/logo.png" alt="logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;
