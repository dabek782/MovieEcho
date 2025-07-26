import MovieCard from "./moviecard"
import { useState } from "react"
import {Search} from "react-bootstrap-icons"
import {Movie , Props} from "../types/interfaces"
import NavBar from "./navbar"
function HomePage(){
 const [Favourite , setFavourite] = useState<string>()
 const movie : Movie [] = [
    {
        title: "Vinci 2",
        Year : 2025,
        Poster : "https://www.multikino.pl/-/jssmedia/multikino/images/film-and-events/2025/vinci-2/vinci_2_plakat-cut.jpg?mw=450&rev=4cc73e45905d4343970e8d955a3cdbd1"
    },
    {
        title: "Amator",
        Year : 2025,
        Poster : "https://media.themoviedb.org/t/p/w440_and_h660_face/h6p1cZdx346OU35d1H1S018HxQn.jpg"},
    {
        title: "Fantastyczna czwórka Pierwsze kroki",
        Year : 2025,
        Poster : "https://image.tmdb.org/t/p/original/kTE9CYQfP23QlhaIcJfoz7r0CiD.jpg"},
    {
        title: "F1 Film",
        Year : 2025,
        Poster : "https://image.tmdb.org/t/p/original/dsKcat607sBr6S0AOGNHl20ymct.jpg"

    }

    ]
    const [SearchQuery , setSearchQuery] = useState("");
    const HandleSearch =  (e:any)=>{
        e.preventDefault()
    }
    const HandleFavourites = ()=>{

    }



    return(
    <div className="Main-content">
    <NavBar />
     <div className="HomeGrid">
        <form className="SearchForm" onSubmit={HandleSearch}>
            <input type="text" value={SearchQuery} onChange={(e) =>setSearchQuery (e.target.value)}/>
            <button type="submit"><Search/></button>
        </form>
        {movie.map((movie,index)=>(
          movie.title.startsWith(SearchQuery) &&   <MovieCard {...movie}key={index}/>
        ))}

    </div>
    </div>
)}
export default HomePage