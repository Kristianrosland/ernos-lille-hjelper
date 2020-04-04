import React, { useState } from "react";
import cases from "./cases";
import "./App.css";

const App = () => {
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
    <div className="container">
      <input value={query} onChange={onChange} className={"query-input"} />
      {currentCases.map((c) => (
        <img key={c.name} src={c.src} className={"image"} alt={"test"} />
      ))}
    </div>
  );
};

export default App;
