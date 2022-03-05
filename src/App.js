import React, { useEffect, useState } from 'react';
import './App.css';
import Showbox from './Showbox';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const API_URL = "https://api.tvmaze.com/search/shows?q=all"

function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(data => {
        console.log(data);
        setMovies(data);
      })
  }, [])

  return (
    <div className='container'>

      <div className="grid">
        {movies.map((movieReq) => <Showbox key={movieReq.score}{...movieReq} />)}
      </div>
    </div>

  );
}

export default App;
