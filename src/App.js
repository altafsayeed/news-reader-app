import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

import wordsToNumbers from "words-to-numbers";

import NewsCards from "./components/NewsCards/NewsCards";
import useStyles from "./styles.js";

const alanKey =
  "056fc4b07f72ea122fb680ae426c27ad2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticles, setNewsArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);
  const classes = useStyles();

  useEffect(() => {
    window.scrollTo(0, 0);
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > 20) {
            alanBtn().playText(
              "Silly goose, there are only 20 articles displayed. Please try again."
            );
          } else if (article) {
            window.open(article.url, "_blank");
          }
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
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
    </div>
  );
};

export default App;
