const NewsAPI = require("newsapi");
const newsapi = process.env.NEWS_API_KEY;
// To query /v2/top-headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them

var data;

// newsapi.v2.topHeadlines({
//   language: 'en'
// }).then(response => {
//   const data = response;
//   console.log(data);
//   const sources = data.articles.map(article => article.source);
//   const news = sources.map(source => source.name);
//   const id = sources.map(source => source.id);
//   console.log(news);
//   console.log(id);
// }).catch(error => {
//   console.error(error);
// });

newsapi.v2
  .sources({
    language: "en",
    pageSize: 100,
  })
  .then((response) => {
    const data = response;
    console.log(data);
    const sources = data.sources.map((source) => source.name);
    const sources_id = data.sources.map((source) => source.id);
    console.log(sources_id);
    //console.log(sources_name);
    //const news = sources.map(source => source.name);
    console.log(sources);
  })
  .catch((error) => {
    console.error(error);
  });
