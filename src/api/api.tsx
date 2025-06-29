import axios from "axios";
const API_KEY : undefined = import.meta.env.VITE_TMDB_API_KEY;
 async function tmdb_search (title : string){
    await axios.get("https://api.themoviedb.org/3/search/movie",{
       params:{
        api_key : API_KEY,
        query : title

        }
    }

    )

}
export default tmdb_search