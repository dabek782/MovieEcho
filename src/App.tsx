import React from "react";
import MovieCard from "./front/moviecard";
function App(){
 interface MovieData{
  Title:string,
  Year:number
   Poster ?: string
 }
 const movie : MovieData = {
  Title: "Vinci 2",
  Year : 2025,
  Poster : "https://www.multikino.pl/-/jssmedia/multikino/images/film-and-events/2025/vinci-2/vinci_2_plakat-cut.jpg?mw=450&rev=4cc73e45905d4343970e8d955a3cdbd1"
 };
  return(
    <MovieCard  {...movie} />
  )
}
export default App    