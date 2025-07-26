export  interface Movie {
    title : string,
    Year : number,
    Poster ?: string
    Favourite ?:boolean
}
export type Props = {
    ClickHandler: ()=> void
}