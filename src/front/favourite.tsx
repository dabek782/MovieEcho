//File that handles how each movie look 
import { Heart, HeartFill } from "react-bootstrap-icons";
import {Movie } from "../types/interfaces"

interface MovieCardProps extends Movie{
    isFavourite : boolean,
    onFavouriteClick: (movie:Movie)=> void
}
function MovieCard({onFavouriteClick,isFavourite,...movie}:MovieCardProps){
    const HandleFavourite = ()=>{
        onFavouriteClick(movie)
    }

    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden w-78">
            <div className="relative h-80 group">
                {movie.Poster ? (
                    <img 
                        src={movie.Poster} 
                        className="w-78 h-80 object-cover" 
                        alt={movie.title}
                    />
                ) : (
                    <div className="w-full h-full bg-black flex items-center justify-center">
                        <span className="text-white text-center p-4">
                            No Image Available
                        </span>
                    </div>
                )}
                {/* Overlay that appears on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button 
                        className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-red-500 transition-colors" 
                        onClick={HandleFavourite}
                    >
                        {isFavourite ? <HeartFill/> : <Heart/>}
                    </button>
                </div>
            </div>
            
            {/* Movie info below the image */}
            <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-1 line-clamp-1">{movie.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{movie.Year}</p>
            </div>
        </div>
    );
}

export default MovieCard