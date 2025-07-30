import MovieCard from "./moviecard"
import "../css/style.css"
import {  useState } from "react"
import {Search} from "react-bootstrap-icons"
import {Movie , Props} from "../types/interfaces"
import NavBar from "./navbar"
import { fetchMovies } from "../back/services"
function HomePage(){

    const [SearchQuery , setSearchQuery] = useState("");
    const HandleSearch =  (e:React.FormEvent)=>{
    e.preventDefault()
    fetchMovies(SearchQuery)
    
    }
    // const HandleFavourites = ()=>{

    // }



    return(
    <div className="bg-[#DFD0B8]">
    <NavBar />
     <div className="m-4 p-8 ">
        <div className="flex justify-center group" >
            <form onSubmit={HandleSearch} >
                <input type="text" value = {SearchQuery} onChange = {(e) => setSearchQuery(e.target.value)} className="border-1 rounded-md m-4 text-center hover:shadow-black shadow-2xl" placeholder="Enter you movie title" />
                <button type="submit"><Search/></button>
            </form>
        </div>
        <div className="grid grid-cols-2 grid-rows-4 gap-6">
        {/* {Movie.map((Movie,index)=>(
          Movie.title.startsWith(SearchQuery) &&   <MovieCard {...Movie}key={index}/> */}
        {/* ))} */}
        </div>
    </div>
    </div>
)}
export default HomePage