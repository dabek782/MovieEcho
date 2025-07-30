import MovieCard from "./moviecard"
import "../css/style.css"
import {  useState } from "react"
import {Search, TypeH1} from "react-bootstrap-icons"
import {Movie , Props} from "../types/interfaces"
import NavBar from "./navbar"
import { fetchMovies } from "../back/services"
function HomePage(){
    const [movies , setMovies] = useState<Movie[]>()
    const [isLoading , setIsLoading] = useState(false)
    const [isError , setIsError] = useState()
    const [SearchQuery , setSearchQuery] = useState("");
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
    }




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
                {isLoading == true && <div className="m-4 p-8 text-2xl text-center"> The Movies are loading please wait </div>}
        <div className="grid grid-cols-4 grid-rows-4 gap-6">

        {movies?.filter(movies => movies.title.toLowerCase().includes(SearchQuery.toLowerCase())
        ).map((movies, index ) => (
            <MovieCard{...movies} key={index}/>))}

         
        </div>
    </div>
    </div>
)}
export default HomePage