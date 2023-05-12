const NewsAPI = require("newsapi");
const newsapi = new NewsAPI("ad79edae7a454511bebbd0229884771e", {
  corsProxyUrl: "https://corsproxy.io/?",
});

//process.env.NEWS_API_KEY
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them

async function fetchNewsHeadlines(category, query) {
  try {
    const response = await newsapi.v2.topHeadlines({
      language: "en",
      category: category,
      q: query,
      pageSize: 4, //remove later
    });
    return response.articles;
  } catch (error) {
    console.error(error);
    console.log("couldnt fetch");
    return [];
  }
}

export { fetchNewsHeadlines };
