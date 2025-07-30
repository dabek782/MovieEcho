
import { HeartFill } from "react-bootstrap-icons";
import {Movie , Props} from "../types/interfaces"

function MovieCard(movie:Movie , {ClickHandler}:Props){

    return (<div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden w-78">
        <div className="relative h-80 group">
                {movie.Poster ? (
                    <img 
                        src={movie.Poster} 
                        className="w-full h-full object-cover" 
                        alt={movie.title}

                    />
                ) : (
                    <div className="w-full h-full bg-black flex items-center justify-center">
                        <span className="text-white text-center p-4">
                            No Image Available
                        </span>
                    </div>
                )}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="flex space-x-3"></div>
                <button className="bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-red-500 transition-colors">
                    <HeartFill size={16} onClick={ClickHandler}></HeartFill>
                </button>
            <div className="p-4">
            
            <h3 className="font-semibold text-white mb-1 line-clamp-1">{movie.title}</h3>
            <h3 className="text-sm text-center text-gray-500 mb-3">{movie.Year}</h3>
        
            </div>
        </div>
       </div>
      
    </div>
)}
export default MovieCard
