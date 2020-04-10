import React, { useState } from "react";
import "./App.css";
import Search from "./Search";
import Quiz from "./Quiz";

const PlayMode = {
  SEARCH: "SEARCH",
  QUIZ: "QUIZ",
};

const App = () => {
  const [playMode, setPlayMode] = useState(PlayMode.QUIZ);

  return (
    <div className="container">
      <div className="play-mode-selection">
        <span
          className={`${playMode === PlayMode.SEARCH ? "selected" : ""}`}
          onClick={() => setPlayMode(PlayMode.SEARCH)}
        >
          Søk
        </span>
        {" | "}
        <span
          className={`${playMode === PlayMode.QUIZ ? "selected" : ""}`}
          onClick={() => setPlayMode(PlayMode.QUIZ)}
        >
          Quiz
        </span>
      </div>

      {playMode === PlayMode.SEARCH && (
        <Search setQuizMode={() => setPlayMode(PlayMode.QUIZ)} />
      )}
      {playMode === PlayMode.QUIZ && (
        <Quiz setSearchMode={() => setPlayMode(PlayMode.SEARCH)} />
      )}
    </div>
  );
};

export default App;
