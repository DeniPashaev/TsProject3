import React from "react";
import { Routes, Route } from "react-router-dom";
import { FavPage } from "./pages/FavPage";
import { HomePage } from "./pages/HomePage";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favourities" element={<FavPage />} />
      </Routes>
    </>
  );
}

export default App;
