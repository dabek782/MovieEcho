//This file makes navbar
import { Link } from "react-router-dom"
import "../../css/style.css"
import { Heart } from "react-bootstrap-icons"

function NavBar() :JSX.Element{
    return (
    <div className="flex   p-8 box-border  shadow-2xs shadow-black justify-around bg-[#222831]  text-2xl text-white">

      <Link to = "/"><h2 className="text-center" >MovieEcho</h2></Link>
      <div className="group cursor-pointer relative  align-middle">
          <Heart className="object-contain text-2xljustify-center h-6 group-hover:hidden transition duration-200"/>
            <div className=" hidden justify-center group-hover:inline-block transition duration-200"><Link to="/favourites"><h2>Favourites</h2></Link></div>
      </div>

   
    </div>
    )   
}
export default NavBar