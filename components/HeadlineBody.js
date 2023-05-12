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
            source={article.source.name}
            headline={article.title}
            date={article.publishedAt}
            url={article.url}
            imgURL={article.urlToImage}
          />
        );
      })}
    </>
  );
}

export default HeadlineBody;
