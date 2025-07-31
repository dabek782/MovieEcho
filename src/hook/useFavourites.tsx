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

    }, [Favourties])
    const addFavourite = (movie:Movie) => {
        SetIsFavourites(prev=>[...prev,movie])
    }

    const removeFavourite = (Id:number) =>{
        SetIsFavourites(prev=>prev.filter((M:Movie) => M.Id !== Id ))

    }
    const toggleFavourite = (movie:Movie) =>{
        const isAlreadyFavorite = Favourties.some(M=>M.Id===movie.Id);
        if(isAlreadyFavorite){
            removeFavourite(movie.Id)
        }
        if(!isAlreadyFavorite){
            addFavourite(movie);
        }

    } 
    const isFavourite= (movieId:number)=>{
        return Favourties.some(M=> M.Id === movieId)
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