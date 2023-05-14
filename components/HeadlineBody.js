import { fetchNewsHeadlines } from "../scripts/newsAPIClient";
import React, { useState, useEffect } from "react";
import Headline from "./headline";

function HeadlineBody(props) {
  const { category, query } = props;
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const headlines = await fetchNewsHeadlines(category, query);
      setArticles(headlines);
    }

    fetchData();
  }, [category, query]);

  return (
    <>
      {articles.map((article, index) => {
        //console.log(article.title + "\n" + article.is_opinion);
        return (
          <Headline
            key={index}
            source={article.rights}
            headline={article.title}
            date={article.published_date}
            url={article.link}
            imgURL={article.media}
            opinion={article.is_opinion}
          />
        );
      })}
    </>
  );
}

export default HeadlineBody;
