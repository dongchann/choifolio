import React from "react";
import "./SectionHome.css"



function SectionHome(){
    return(
        <div className="SectionHome">
            <div className="SectionHomeSlider">
                <div className="SectionHomeSlider-container">
                    <div className="tp-container">
                        <div className="tp-slideshow" id="slider" style={{ opacity: 1, visibility:"false" }}>
                            <ul className="tp-slideshow-mainul">
                                <li className="tp-slideshow-active">
                                    <div className="slotholder">
                                        <div className="tp-bgimg">sss</div>
                                        <div className="caption">
                                            <div className="caption-text-01">
                                                "최동찬"
                                                <span>Portfoilo</span>
                                                "2022"
                                            </div>
                                            <div className="caption-text-02"></div>
                                            <button className="caption-text-02"></button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionHome;
