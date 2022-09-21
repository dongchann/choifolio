import React from "react";
import "./Main.css"
import SectionHome from "./SectionHome";
import SectionMiddle from "./SectionMiddle";
import SectionPortFolio from "./SectionPortfolio";


function Main(){
    return(
        <div className="Main">
            <SectionHome />
            <SectionMiddle />
            <SectionPortFolio />
        </div>
    )
}

export default Main;
