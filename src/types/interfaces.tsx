//This file handles all interfaces for the project
export  interface Movie {
    title : string,
    Year : number,
    Poster ?: string
    Favourite ?:boolean
} //Interface for movies 
export type Props = {
    ClickHandler: ()=> void
} //Allows me to handle props
export interface TMDBMovie{
    id:number,
    title:string
    year:string
    poster:string|null
}//Interface for handling fetching
