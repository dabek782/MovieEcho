// import React from "react";
// import { useState , useEffect } from "react";
// import axios from "axios";

import './api/api.tsx'

import "./App.css"
import tmdb_search from "./api/api.tsx"
function App() {

  const movies = tmdb_search('F1');
  console.log(movies);
  return(
    <body>
    <nav>
      <title>MovieEcho</title>
      <h1>MovieEcho</h1>
      <h2>A site that searches form similar movies</h2>
    </nav>
    <main>
      <form>
        <input type="search" name="" id="" placeholder="Enter your favourite movie title"/>
        <input type="submit" value="Send"  />
        
      </form>
    </main>
    </body>
  )

}
export default App