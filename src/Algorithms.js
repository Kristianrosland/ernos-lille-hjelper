import React, { useState } from "react";
import css from "./app.less";
import Search from "./Search";

const PlayMode = {
  SEARCH: "SEARCH",
  QUIZ: "QUIZ"
};

const App = () => {
  const [playMode, setPlayMode] = useState(PlayMode.QUIZ);

  return (
    <div className={css.container}>
      <Search />
    </div>
  );
};

export default App;
