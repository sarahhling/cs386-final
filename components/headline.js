import React from "react";
import Image from "next/image";

function Headline(props) {
  var { imgURL, date, headline, url, source } = props;
  var headlineGroup;

  imgURL = imgURL == null ? "" : imgURL;
  date = date == null ? "" : date;
  headline = headline == null ? "" : headline;
  url = url == null ? "" : url;
  source = source == null ? "" : source;
  console.log(`${imgURL}\n${date}\n${headline}\n${url}\n${source}`);

  return (
    <li class="headline my-2">
      <Image src={imgURL} className="img" />
      <div>
        <p className="m-0 date">{date}</p>
        <a href={url}>
          {headline}
          <span className="source">({source})</span>
        </a>
        {headlineGroup}
      </div>
    </li>
  );
}

export default Headline;
