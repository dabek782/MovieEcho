import { useState , useEffect } from "react";
import MovieCard from "../front/moviecard";
import { Movie } from "../types/interfaces";
const API = import.meta.env.VITE_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3/search/movie?query=';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

    // const [isLoading , setIsLoading] = useState<boolean>(false);
    // const [isError , setIsError] = useState<any>()


    export   const fetchMovies = async (query:string)=>{
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
            return info
        }
    
    catch(e:any){
        // setIsError(e.value)
        console.error(e)
        throw e


    }
    finally{
        // setIsLoading(false)
    }

};




