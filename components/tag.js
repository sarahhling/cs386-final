import React from "react";
import styles from "../styles/Tag.module.css";

function Tag({ type }) {
  var style, value;
  switch (type) {
    case "Very High":
      style = styles.veryHigh;
      value = "Facts: Very High";
      break;
    case "High":
      style = styles.high;
      value = "Facts: High";
      break;
    case "Mostly Factual":
      style = styles.mostlyFactual;
      value = "Facts: Mostly Factual";
      break;
    case "Mixed":
      style = styles.mixed;
      value = "Facts: Mixed";
      break;
    case "Low":
      style = styles.low;
      value = "Facts: Low";
      break;
    case "Very Low":
      style = styles.veryLow;
      value = "Facts: Very Low";
      break;
    case "Extreme Left":
      style = styles.extreme_left;
      value = "Extreme Left";
      break;
    case "Left":
      style = styles.left;
      value = "Left";
      break;
    case "Left-Center":
      style = styles.leftCenter;
      value = "Left-Center";
      break;
    case "Least Biased":
      style = styles.leastBiased;
      value = "Least Biased";
      break;
    case "Right-Center":
      style = styles.rightCenter;
      value = "Right-Center";
      break;
    case "Right":
      style = styles.right;
      value = "Right";
      break;
    case "Extreme Right":
      style = styles.extreme_right;
      value = "Extreme Right";
      break;
    case "Conspiracy":
      style = styles.conspiracy;
      value = "Pseudoscience/Conspiracy";
      break;
    case "Satire":
      style = styles.satire;
      value = "Satire";
      break;
    default:
  }
  return <div className={`${styles.tag} ${style}`}>{value}</div>;
}

export default Tag;
