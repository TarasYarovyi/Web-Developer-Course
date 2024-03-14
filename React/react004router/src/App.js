import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Articles from "./components/articles/Articles";
import Navigation from "./components/navigation/Nawigation";
import NotFound from "./components/notFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/articles" element={<Articles />}></Route>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//
