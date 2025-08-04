//File that handles how each movie look 
import { Heart, HeartFill } from "react-bootstrap-icons";
import {Movie } from "../../types/interfaces"

interface MovieCardProps extends Movie{
    isFavourite : boolean,
    onFavouriteClick: (movie:Movie)=> void
}
function MovieCard({onFavouriteClick,isFavourite,...movie}:MovieCardProps){
    const HandleFavourite = ()=>{
        onFavouriteClick(movie)
    }

    return (<div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden w-72 h-68 pr-1">
        <div className="relative h-auto group w:fill ">
                {movie.Poster ? (
                    <img 
                        src={movie.Poster} 
                        className="w-78 h-80 object-cover" 
                        alt={movie.title}

                    />
                ) : (
                    <div className="w-fill  h-fill bg-black flex items-center justify-center">
                        <span className="text-white text-center  p-4 h-80">
                            No Image Available
                        </span>
                    </div>
                )}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col">
            <div className=" justify-center align-middle">
                 <h3 className="text-center text-white ">{movie.title}</h3>
                <h3 className="text-sm text-center text-gray-500 mb-3">{movie.Year}</h3>
               
            </div>
             <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-red-500 transition-colors text-center mt-1" onClick={HandleFavourite}>
                    {isFavourite ? <HeartFill/> : <Heart/>}
                </button>
           
            <div className="p-4">
            
         
                
            </div>
        </div>
       </div>
      
    </div>
    /*That code makes movie card there is conditional that handles if given movie does not have a poster and in the future mechanism of adding favourite movies will be implemented */
)}
export default MovieCard
