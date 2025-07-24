import React from "react";
import { Heart } from "react-bootstrap-icons";
interface Movie {
    Title : string,
    Year : number,
    Poster ?: string
}

function MovieCard(movie:Movie){
    function favourite(){
        alert('click')
    }
    return (<div className="MovieTile">
        <div className="MoviePoster">
            <img src={movie.Poster} alt={movie.Title}/>
            <div className="MovieOverlay">
                <button className="ButtonLike" onClick={favourite}>
                    <Heart size={24}></Heart>
                </button>
            </div>
        </div>
        <div className="MovieInfo">
            <h3>{movie.Title}</h3>
            <h3>{movie.Year}</h3>
        </div>
      
    </div>
)}
export default MovieCard
