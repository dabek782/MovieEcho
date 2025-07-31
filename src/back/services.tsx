//File that handles connection with tmdb
import { Movie ,TMDBMovie  } from "../types/interfaces";
const API = import.meta.env.VITE_API_KEY // Api from env file
const BASE_URL = 'https://api.themoviedb.org/3/search/movie?query=';//Base url for serching movies got from tmdb website
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';//Url that gives me poster for movies 


    export   const fetchMovies = async (query:string )=>{
         try{
            //  setIsLoading(true)
            const options = {
                method : 'GET',
                headers : {
                    accept: 'application/json',
                    Authorization : `Bearer ${API} `
                }
            }//Authentification if that is not included you won't get any data
            const response = await fetch(`${BASE_URL}${query}` , options)
            const info  = await response.json()
            console.log(response)
            console.log(info)
            const  transformData:Movie[] = info.results?.map((movie:TMDBMovie) => ({
                id: movie.id,
                title: movie.title,
                Year: movie.release_date?.split('-')[0] || 'Unknown',
                Poster: movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : null,

            }))
            return {
                Movie : transformData,
                totalPages: info.total_pages,
                currentPage : info.page , 
                totalResults : info.total_results
            }
        }
        //returning date 
    
    catch(e:any){

        console.error(e)
        throw e


    }


};




