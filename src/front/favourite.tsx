
import {Movie } from "../types/interfaces"
import NavBar from "./navbar";
import MovieCard from "./moviecard";
import useFavourites from "../hook/useFavourites";
import { Key } from "react-bootstrap-icons";
interface MovieCardProps extends Movie{
    isFavourite : boolean,
    onFavouriteClick: (movie:Movie)=> void
}

function Favourite(){
    const {Favourties , toggleFavourite , isFavourite} = useFavourites()
    return (

        <div className=" min-h-screenbg-[#DFD0B8]">
            <NavBar/>
             <div className="m-4">
                <h1 className="text-2xl text-center mb-8 ">Your favourite movies</h1>
             </div>
             {Favourties.length === 0 ? (
                <h1 className="text-2xl text-center mb-8 ">Start adding your favourites movies</h1>
             ) : (
                 <div className="grid grid-cols-1 grid-rows-6 gap-3 mt-3  md:grid-rows-5  md:grid-cols-2 md:gap-4 md:ml-5 lg:grid-cols-4  lg:grid-rows-4 lg: gap:8 " > 
                    {Favourties.map((movie) => (
                    <MovieCard
                    {...movie}
                    key={movie.id}
                    onFavouriteClick={toggleFavourite}
                    isFavourite={isFavourite(movie.id)}
               
                    />
                    ))}

                 </div>

          
                )}
        </div>

    );
}

export default Favourite