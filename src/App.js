import React, { useState } from "react";
import Line from "./components/Line";
import Footer from "./components/Footer";
import Search from "./components/Search";
import emojiesList from "./components/emojies.json";
import "./App.css";

function App() {
  const [result, setResult] = useState(emojiesList);

  const searchResult = (event) => {
    let results = [];
    for (let i = 0; i < emojiesList.length; i++) {
      if (
        emojiesList[i].keywords.indexOf(event.target.value.toLowerCase()) !== -1
      ) {
        if (results.length >= 20) break;
        else results.push(emojiesList[i]);
      }
    }
    setResult(results);
  };

  return (
    <div className="container">
      <Search searchResult={searchResult} />

      {result.map((emoji, i) => {
        return <Line key={emoji.title} {...emoji} />;
      })}

      <Footer />
    </div>
  );
}

export default App;
