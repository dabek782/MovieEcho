import { useState , useEffect } from "react";
import MovieCard from "../front/moviecard";
import { Movie } from "../types/interfaces";
const API = import.meta.env.VITE_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3/search/movie?query=';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

    // const [isLoading , setIsLoading] = useState<boolean>(false);
    // const [isError , setIsError] = useState<any>()


    export   const fetchMovies = async (query:string )=>{
         try{
            //  setIsLoading(true)
            const options = {
                method : 'GET',
                headers : {
                    accept: 'application/json',
                    Authorization : `Bearer ${API} `
                }
            }
            const response = await fetch(`${BASE_URL}${query}` , options)
            const info = await response.json()
            console.log(response)
            console.log(info)
            const  transformData = info.results?.map((movie:any) => ({
                id: movie.id,
            title: movie.title,
            Year: movie.release_date?.split('-')[0] || 'Unknown',
            Poster: movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : null,

            }), [])
            return {
                Movie : transformData,
                totalPages: info.total_pages,
                currentPage : info.page , 
                totalResults : info.total_results
            }
        }
    
    catch(e:any){
        // setIsError(e.value)
        console.error(e)
        throw e


    }


};




