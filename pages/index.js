"use client";

import HeadlineBody from "../components/HeadlineBody";
import { fetchNewsHeadlines } from "../scripts/newsAPIClient";
import React, { useState, useEffect } from "react";

export default function Home(props) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const headlines = await fetchNewsHeadlines("", "");
      setArticles(headlines);
      console.log("Fetched Articles");
    }

    fetchData();
  }, []);
  console.log("", "");
  return <HeadlineBody articles={articles} filters={props.filters} />;
}
