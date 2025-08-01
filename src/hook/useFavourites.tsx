import { useState , useEffect } from "react";
import { Movie } from "../types/interfaces";

const useFavourites = ()=>{
    const [Favourties , SetIsFavourites] = useState<Movie[]>([])
    useEffect(() => {
        const saved = localStorage.getItem("movieFavourites")
        if(saved){
            SetIsFavourites(JSON.parse(saved))
        }
    },[])
    useEffect(() =>{
        localStorage.setItem("movieFavourites" , JSON.stringify(Favourties))
        console.log(Favourties)
    }, [Favourties])
    const addFavourite = (movie:Movie) => {
        SetIsFavourites(prev=>[...prev,movie])
        console.log(movie)

    }

    const removeFavourite = (Id:number) =>{
        SetIsFavourites(prev=>prev.filter((M:Movie) => M.id !== Id ))

    }
    const toggleFavourite = (movie:Movie) =>{
        const isAlreadyFavorite = Favourties.some(M=>M.id===movie.id);

        if(isAlreadyFavorite){
            removeFavourite(movie.id)
        }
        if(!isAlreadyFavorite){
            addFavourite(movie);
        }

    } 
    const isFavourite= (movieId:number)=>{
        return Favourties.some(M=> M.id === movieId)
        
    }
    return{
        Favourties,
        addFavourite,
        removeFavourite,
        toggleFavourite,
        isFavourite
    }

}
export default useFavourites