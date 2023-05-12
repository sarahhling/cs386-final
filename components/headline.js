import React from "react";
import Image from "react-bootstrap/Image";
import styles from "../styles/Headline.module.css";

function Headline(props) {
  var { imgURL, date, headline, url, source } = props;
  var headlineGroup;

  imgURL = imgURL == null ? "/defaultHeadlineImg.png" : imgURL;
  date = date == null ? "" : date;
  headline = headline == null ? "" : headline;
  url = url == null ? "" : url;
  source = source == null ? "" : source;
  console.log(`${imgURL}\n${date}\n${headline}\n${url}\n${source}`);

  return (
    <li class={`${headline} my-2`}>
      <Image src={imgURL} className={styles.img} />
      <div>
        <p className={`m-0 ${styles.date}`}> {date}</p>
        <a href={url}>
          {headline}
          <span className={styles.source}>({source})</span>
        </a>
        {headlineGroup}
      </div>
    </li>
  );
}

export default Headline;
