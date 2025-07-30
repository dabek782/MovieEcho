//This file handles how homepage looks 
import MovieCard from "./moviecard" //Set up how movie card should look
import "../css/style.css" //tailwind import
import {  useState } from "react"
import {Search, } from "react-bootstrap-icons"//Icon for searching
import {Movie} from "../types/interfaces"//Interface for movie
import NavBar from "./navbar"//Navbar
import { fetchMovies } from "../back/services" //Function that handles api
function HomePage(){
    const [movies , setMovies] = useState<Movie[]>()//Array that holds these movies
    const [isLoading , setIsLoading] = useState(false)//Boloean for is data is loading
    const [isError , setIsError] = useState()//Tells if error is happening
    const [SearchQuery , setSearchQuery] = useState("");//Hold search query
    const HandleSearch = async (e:React.FormEvent)=>{
    e.preventDefault()
    if(!SearchQuery.trim()) return;
    setIsLoading(true)
    try{

        const res = await fetchMovies(SearchQuery)
        console.log(res)
        console.log('Movies:', res.Movie);
        console.log('Total Pages:', res.totalPages);
        console.log('Total Results:', res.totalResults); 
        setMovies(res.Movie);

  
    }
    catch(e:any){
        setIsError(e.target.value)
        console.error(e)
        throw(e)
        


    }
    finally{
        setIsLoading(false)

    }
    /*Function handle search allows me to take search query from form and give it to function that feches movies and then data from that function lands in movies useState */
    }

    return(
    <div className="bg-[#DFD0B8]">
    <NavBar />
     <div className="m-4 p-8 ">
        <div className="flex justify-center group" >
            <form onSubmit={HandleSearch} >
                <input type="text" value = {SearchQuery} onChange = {(e) => setSearchQuery(e.target.value)} className="border-1 rounded-md m-4 text-center hover:shadow-black shadow-2xl" placeholder="Enter you movie title" />
                <button type="submit"><Search/></button> 
            </form> {/* Form that gives me a title that user wants to search */}
        </div> { /* Conditional for loading */}
                {isLoading == true && <div className="m-4 p-8 text-2xl text-center"> The Movies are loading please wait </div>}
        <div className="grid grid-cols-4 grid-rows-4 gap-6">
        {/*Outputs data like title poster year etc. */}
        {movies?.filter(movies => movies.title.toLowerCase().includes(SearchQuery.toLowerCase())
        ).map((movies, index ) => (
            <MovieCard{...movies} key={index}/>))}

         
        </div>
    </div>
    </div>
)}
export default HomePage