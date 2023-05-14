import React from "react";
import Headline from "./headline";

function HeadlineBody({ articles }) {
  var index = 0;
  return (
    <>
      {articles.map((article) => {
        const key = index + 1;
        return (
          <Headline
            key={key}
            source={article.rights}
            headline={article.title}
            date={article.published_date}
            url={article.link}
            imgURL={article.media}
          />
        );
      })}
    </>
  );
}

export default HeadlineBody;
