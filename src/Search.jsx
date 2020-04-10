import React, { useState } from "react";
import KeyboardEventHandler from "react-keyboard-event-handler";
import cases from "./cases";

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
      <input value={query} onChange={onChange} className={"query-input"} />
      {currentCases.map((c) => (
        <img key={c.name} src={c.src} className={"image"} alt="Solution" />
      ))}
    </>
  );
};

export default Search;
