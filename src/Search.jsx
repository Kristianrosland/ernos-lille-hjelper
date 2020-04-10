import React, { useState } from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";
import cases from "./cases";
import css from "./app.less";

const Search = ({ setQuizMode }) => {
  const [query, setQuery] = useState("");
  const [currentCases, setCurrentCases] = useState([]);

  const onChange = (e) => {
    const inp = e.target.value.toUpperCase();
    setQuery(inp);

    if (inp.length === 3) {
      const matches = cases.filter((c) => c.name.startsWith(inp));
      setCurrentCases(matches);
      setQuery("");
    }
  };

  return (
    <>
      <KeyboardEventHandler handleKeys={["q"]} onKeyEvent={setQuizMode} />
      <input value={query} onChange={onChange} className={css.queryInput} />
      {currentCases.map((c) => (
        <img key={c.name} src={c.src} className={css.image} alt="Solution" />
      ))}
    </>
  );
};

export default Search;
