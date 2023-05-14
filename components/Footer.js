import React, { useState, useEffect } from "react";
import styles from "../styles/footer.module.css";

export default function Footer({ time }) {
  return (
    <div className={styles.footer}>
      <p>Current Date and Time: {time.toLocaleString()}</p>
    </div>
  );
}
