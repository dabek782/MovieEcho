//This file handles favourites tab
import MovieCard from "./moviecard"; 
import HomePage from "./homepage";
import {Movie } from "../types/interfaces"
import NavBar from "./navbar";
function Favourite():JSX.Element{
    return(
    <div className="content">
        <NavBar/>
        <h1>There is no Favourite yet </h1>
    </div>
    
)}
export default Favourite