import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GoodCheapFastMain from "./components/GoodCheapFastMain";
import GoodCheap from "./components/GoodCheap";
import GoodFast from "./components/GoodFast";
import FastCheap from "./components/FastCheap";
import Validation from "./validation/Validation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<GoodCheapFastMain />} />
        <Route path="/good-cheap" exact element={<GoodCheap />} />
        <Route path="/good-fast" exact element={<GoodFast />} />
        <Route path="/fast-cheap" exact element={<FastCheap />} />
        <Route path="/validation" exact element={<Validation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
