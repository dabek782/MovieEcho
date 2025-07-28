import React from "react";
import HomePage from "./front/homepage";
import Favourite from "./front/favourite";
import { Route,Routes } from "react-router-dom";
import "./css/style.css"
function App(){
  return(
 <div className="min-h-screen flex flex-col">
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/favourites" element={<Favourite/>}></Route>
    </Routes>
 </div>

)}
export default App    