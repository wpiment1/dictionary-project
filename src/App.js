import React from "react";
import Dictionary from "./Dictionary";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <header>React Dictionary 📖</header>
      <Dictionary />
      <footer>
        This app was coded by{" "}
        <a href="https://winiferpimentel.com/">Winifer Pimentel</a> and is
        open-sourced on{" "}
        <a href="https://github.com/wpiment1/dictionary-project"> Github</a>
      </footer>
    </div>
  );
}
