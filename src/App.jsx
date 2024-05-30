import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./Components/home/Homepage";
import IngredientPage from "./Components/ingredient/IngredientPage";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/ingredient" element={<IngredientPage />} />
      </Routes>
    </Router>
  );
};

export default App;
