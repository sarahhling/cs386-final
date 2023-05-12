import React from "react";

function Headline(props) {
  const { headlineGroup, imgURL, date, headline, url, source } = props;
  return (
    <li class="headline my-2">
      <img src={imgURL} className="img" />
      <div>
        <p class="m-0 date">{date}</p>
        <a href={url}>
          {headline}
          <span class="source">({source})</span>
        </a>
        {headlineGroup}
      </div>
    </li>
  );
}

export default Headline;
