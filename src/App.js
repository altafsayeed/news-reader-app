import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import NewsCards from "./components/NewsCards/NewsCards";

const alanKey =
  "056fc4b07f72ea122fb680ae426c27ad2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      <h1>Alan AI News</h1>
      <NewsCards articles={articles} />
    </div>
  );
};

export default App;
