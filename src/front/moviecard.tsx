
import { HeartFill } from "react-bootstrap-icons";
import {Movie , Props} from "../types/interfaces"

function MovieCard(movie:Movie , {ClickHandler}:Props){

    return (<div className="flex justify-center ">
        <div className="relative h-300 w-150 group">
            <img src={movie.Poster} className="object-fill" alt={movie.title}/>
            <div className="MovieOverlay">
                <button className="transition delay-150 duration-300 ease-in-out  text-gray-500 group-hover: translate y-1 group-hover:scale-110 group-hover:text-red-600 group-hover absolute top-2 left-2">
                    <HeartFill size={24} onClick={ClickHandler}></HeartFill>
                </button>
            </div>
        </div>
        <div className="flex align-middle text-center gap-2 justify-center">
            <h3>{movie.title}</h3>
            <h3>{movie.Year}</h3>
        </div>
      
    </div>
)}
export default MovieCard
