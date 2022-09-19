import React from "react";
import "./Header.css"

function Header() {
    return(
        <div className="Header">
            <div className="Container">
                <div className="HeaderLeft">
                    <div className="MenuToggle">
                        <span></span>
                    </div>
                </div>
                <div className="HeaderCenter">
                    <a href="/">Choifolio</a>
                </div>
                <div className="HeaderSub">
                    <button type="button" className="PortfolioBag">PortFolio</button>
                </div>
            </div>
        </div>
    )
}

export default Header;