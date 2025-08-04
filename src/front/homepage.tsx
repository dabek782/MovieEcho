//This file handles how homepage looks 
import MovieCard from "./components/moviecard" //Set up how movie card should look
import "../css/style.css" //tailwind import
import {  useState } from "react"
import {Search, } from "react-bootstrap-icons"//Icon for searching
import {Movie} from "../types/interfaces"//Interface for movie
import NavBar from "./components/navbar"//Navbar
import { fetchMovies } from "../back/services" //Function that handles api
import useFavourites from "../hook/useFavourites"
import { ChevronBarLeft , ChevronBarRight } from "react-bootstrap-icons"
import { Button } from "react-bootstrap"
function HomePage(){
    const [movies , setMovies] = useState<Movie[]>()//Array that holds these movies
    const [isLoading , setIsLoading] = useState(false)//Boloean for is data is loading
    const [isError , setIsError] = useState<unknown>()//Tells if error is happening
    const [SearchQuery , setSearchQuery] = useState("");//Hold search query
    const [currentPage , setCurrentPage] = useState(1);
    const [total_pages , setTotalPages] = useState<number>()
    const [total_results , setTotalResults] = useState<number>()
    const {toggleFavourite , isFavourite} = useFavourites();
    
    const HandleSearch = async (e:React.FormEvent , page:number = 1)=>{
    e.preventDefault()
    if(!SearchQuery.trim()) return;
    setIsLoading(true)
    try{

        const res = await fetchMovies(SearchQuery ,page)
        // console.log(res)
        // console.log('Movies:', res.Movie);
        console.log('Total Pages:', res.totalPages);
        console.log('Total Results:', res.totalResults); 
        setMovies(res.Movie);
        setTotalPages(res.totalPages)
        setTotalResults(res.totalResults)
        setCurrentPage(page)

    }
    catch(e:unknown){
        setIsError(e)
        console.error(e)
        throw(e)
    }
    finally{
        setIsLoading(false)

    }


    }
        const HandlePageSwitch = (newPage:number) => {
        if (newPage >= 1 && newPage <= (total_pages|| 0) ){
            const fakeEvent = {preventDefault : () => {}} as React.FormEvent
            HandleSearch(fakeEvent , newPage)
        } 
    }

    return(
    <div className=" min-h-screenbg-[#DFD0B8]">
    <NavBar />
     <div className="m-4 p-8 ">
        <div className="flex justify-center group" >
            <form onSubmit={HandleSearch} >
                <input type="text" value = {SearchQuery} onChange = {(e) => setSearchQuery(e.target.value)} className="border-1 rounded-md mr-1.5 text-center hover:shadow-black shadow-2xl md:m-2 lg:m-6" placeholder="Enter you movie title" />
                <button type="submit"><Search className="sm:w-2 sm:h-2 md:w-4 md:h-4 md:text-center lg:w-4lg:h-4"/></button> 
            </form> {/* Form that gives me a title that user wants to search */}
        </div> { /* Conditional for loading */}
                {isLoading == true && <div className="m-4 p-8 text-2xl text-center"> The Movies are loading please wait </div>}
                {total_results && total_results > 0 && !isLoading &&
                (  
                    <div className="text-center mt-2 p-4">
                        Total results {total_results} Pages {total_pages}
                    </div>
                    ) }
        <div className="grid grid-cols-1 grid-rows-6 gap-3 mt-3  md:grid-rows-5  md:grid-cols-2 md:gap-4 md:ml-5 lg:grid-cols-4  lg:grid-rows-4 lg: gap:8 " >
        
        {/*Outputs data like title poster year etc. */}
        {movies?.map((movies) => (
            <MovieCard{...movies} key={movies.id}
            onFavouriteClick={toggleFavourite}
            isFavourite={isFavourite(movies.id)
            }
            />))}
        {total_pages&& total_pages >=1 && !isLoading && (
            <div className="flex flex-row  justify-center align-middle items-center mt-10">
                <Button onClick={()=>HandlePageSwitch(currentPage -1)} disabled={currentPage == 1} ><ChevronBarLeft className="mr-3"/></Button>
                {[...Array(Math.min(5,total_pages))].map((_,i)=>{
                    const pageNum = i+1
                    return(
                      <button key={pageNum} onClick={()=>HandlePageSwitch(pageNum)} className="flex items-center gap-5 px-3 py-5 rounded-2xl text-center"
                      >{pageNum}</button>
                    )
                })}
                <Button onClick={()=>HandlePageSwitch(currentPage +1)} disabled={currentPage == total_pages} ><ChevronBarRight className="ml-3"/></Button>
            </div>
        )
        }
   

        </div>
    </div>
    </div>
)}
export default HomePage
/*
    TODO: MAKE A MULTI PAGE WITH A LOT MORE RESULTS AND MAKE IT WORK ON MOBILE DEVICES ALSO WHEN DONE WITH THIS CONNECT AI
   


*/