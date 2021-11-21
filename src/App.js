import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Comics from "./containers/Comics";
import Characters from "./containers/Characters";
import CharID from "./containers/CharID";

const App = () => {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Characters />} />
          <Route path="/comics" element={<Comics />} />
          <Route path="/comics/:characterId" element={<CharID />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
