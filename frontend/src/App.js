import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import MovieRow from "./components/MovieRow";
import { mockMovies, featuredMovie } from "./data/mockData";

const Home = () => {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      <HeroBanner movie={featuredMovie} />
      
      <div className="relative z-10 -mt-32">
        <MovieRow title="Trending Now" movies={mockMovies.trending} />
        <MovieRow title="Popular on Netflix" movies={mockMovies.popular} />
        <MovieRow title="Action & Adventure" movies={mockMovies.action} />
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
