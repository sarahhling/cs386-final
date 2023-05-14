import React from "react";
import Image from "react-bootstrap/Image";
import styles from "../styles/Headline.module.css";
import { Row, Col } from "react-bootstrap";
import TagGroup from "./TagGroup";

function Headline(props) {
  var { imgURL, date, headline, url, source } = props;
  var source_url;

  imgURL = imgURL == null ? "/defaultHeadlineImg.png" : imgURL;
  date = date == null ? "Date Unavailable" : new Date(date);
  headline = headline == null ? "" : headline;
  url = url == null ? "" : url;
  source = source == null ? "" : source;
  source_url = source == null ? "" : "https://www." + source;

  console.log(`${imgURL}\n${date}\n${headline}\n${url}\n${source}`);

  if (date != "") {
    const options = { month: "long", day: "numeric", year: "numeric" };
    date = date.toLocaleDateString("en-US", options);
  }

  return (
    // <li class={`${headline} my-2`}>
    //   <Image src={imgURL} className={styles.img} />
    //   <div>
    //     <p className={`m-0 ${styles.date}`}> {date}</p>
    //     <a href={url}>
    //       {headline}
    //       <span className={styles.source}>({source})</span>
    //     </a>
    //     {headlineGroup}
    //   </div>
    // </li>
    <Row className="py-2">
      <Col xs={2}>
        <Image src={imgURL} className={styles.img} alt="headline image" />
      </Col>
      <Col>
        <Row className="py-2">
          <p className={`m-0 ${styles.date}`}>{date}</p>
        </Row>
        <Row className="pb-1">
          <div>
            <a href={url} className={styles.headline} target="_blank">
              {headline}&nbsp;
            </a>
            <a href={source_url} target="_blank">
              <span className={styles.source}>({source})</span>
            </a>
          </div>
        </Row>
        <Row>
          <TagGroup source={source} />
        </Row>
      </Col>
    </Row>
  );
}

export default Headline;
