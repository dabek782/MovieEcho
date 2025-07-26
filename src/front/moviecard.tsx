
import { Heart } from "react-bootstrap-icons";
import {Movie , Props} from "../types/interfaces"

function MovieCard(movie:Movie , {ClickHandler}:Props){

    return (<div className="MovieTile">
        <div className="MoviePoster">
            <img src={movie.Poster} alt={movie.title}/>
            <div className="MovieOverlay">
                <button className="ButtonLike">
                    <Heart size={24} onClick={ClickHandler}></Heart>
                </button>
            </div>
        </div>
        <div className="MovieInfo">
            <h3>{movie.title}</h3>
            <h3>{movie.Year}</h3>
        </div>
      
    </div>
)}
export default MovieCard
