import React from "react";
import styles from "../styles/Tag.module.css";

function Tag(props) {
  const { type } = props;
  var style, value;
  switch (type) {
    case "Very High":
      style = styles.veryHigh;
      value = "FR: Very High";
      break;
    case "High":
      style = styles.high;
      value = "FR: High";
      break;
    case "Mostly Factual":
      style = styles.mostlyFactual;
      value = "FR: Mostly Factual";
      break;
    case "Mixed":
      style = styles.mixed;
      value = "FR: Mixed";
      break;
    case "Low":
      style = styles.low;
      value = "FR: Low";
      break;
    case "Very Low":
      style = styles.veryLow;
      value = "FR: Very Low";
      break;
    case "Left":
      style = styles.left;
      value = "Left";
      break;
    case "Left-Center":
      style = styles.leftCenter;
      value = "Left Center";
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
    case "conspiracy":
      style = styles.conspiracy;
      value = "Pseudoscience/Conspiracy";
      break;
    case "satire":
      style = styles.satire;
      value = "Satire";
      break;
    default:
    // code block
  }

  return <span className={style}>{value}</span>;
}

export default Tag;
