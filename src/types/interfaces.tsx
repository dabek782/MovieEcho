//This file handles all interfaces for the project
export  interface Movie {
    id:number,
    title : string,
    Year : string,
    Poster ?: string
    Favourite ?:boolean
} //Interface for movies 
export type Props = {
    ClickHandler: ()=> void
} //Allows me to handle props
export interface TMDBMovie{
    id:number,
    title:string
    release_date:string
    poster_path?:string
}//Interface for handling fetching
