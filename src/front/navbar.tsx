import { Link } from "react-router-dom"
function NavBar() :JSX.Element{
    return (
    <div className="nav">
      <Link to = "/"><h2>MovieEcho</h2></Link>
       <Link to="/favourites"> <h3>Favourite</h3></Link>
    </div>
    )   
}
export default NavBar