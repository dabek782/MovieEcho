import MovieCard from "./moviecard"
import "../css/style.css"
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
    const HandleSearch =  (e:React.FormEvent)=>{
        e.preventDefault()
        alert(SearchQuery)
    }
    const HandleFavourites = ()=>{

    }



    return(
    <div className="Main-content">
    <NavBar />
     <div className="m-4 p-8 ">
        <div className="flex justify-center align-super group" >
            <form onSubmit={HandleSearch} >
                <input type="text" value = {SearchQuery} onChange = {(e) => setSearchQuery(e.target.value)} className="border-1 rounded-md m-4 text-center hover:shadow-black shadow-2xl" placeholder="Enter you movie title" />
                <button type="submit"><Search/></button>
            </form>
        </div>
        <div className="grid grid-cols-2 grid-rows-4 gap-6">
        {movie.map((movie,index)=>(
          movie.title.startsWith(SearchQuery) &&   <MovieCard {...movie}key={index}/>
        ))}
        </div>
    </div>
    </div>
)}
export default HomePage