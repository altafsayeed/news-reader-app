import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from "./styles.js";

const alanKey =
  "056fc4b07f72ea122fb680ae426c27ad2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const classes = useStyles();

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
      <div className={classes.logoContainer}>
        <img
          src="https://media3.giphy.com/media/Rz4Hdvzi97K47tRzvN/giphy.gif"
          className={classes.homeLogo}
          alt="voice logo"
        />
      </div>
      <NewsCards articles={newsArticles} />
    </div>
  );
};

export default App;
