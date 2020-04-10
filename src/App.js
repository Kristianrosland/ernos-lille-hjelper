import React from "react";
import Search from "./Search";
import css from "./app.less";

const App = () => {
  return (
    <div className={css.container}>
      <Search />
    </div>
  );
};

export default App;
