import React, { useState } from "react";
import css from "./app.less";

const PlayMode = {
  SEARCH: "SEARCH",
  QUIZ: "QUIZ"
};

const App = () => {
  const [playMode, setPlayMode] = useState(PlayMode.QUIZ);

  return (
    <div className={css.container}>
      <div>Hei, dette er meg</div>
    </div>
  );
};

export default App;
