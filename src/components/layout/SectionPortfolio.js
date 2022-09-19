import React, { useState } from "react";
import "./SectionPortFolio.css"





function SectionPortFolio(){
    const [state] = useState(["1","2","3",'4','5','6','7','8']);
    
    return(
        <div className="SectionPortFolio">
            <div className="PortFolio_Container">
                <div className="ps-section__header">
                    <h3>#mini Project</h3>
                    <p>
                        Quisque sit amet ex at orci posuere ullamcorper.<br/>
                        Maecenas at iaculis diam. Nulla sem mauris, posuere id orci eget,<br/>
                        rutrum efficitur nisl.<br/>
                    </p>
                </div>
                <div className="btn_wrap">
                    <button type="button" className="view-tab">Our Stories</button>
                    <button type="button" className="view-tab">Our Stories</button>
                    <button type="button" className="view-tab">Our Stories</button>
                </div>
                <div className="contents">
                    {
                        state.map((item)=>
                            (
                                <div className="contents-item" key={item}>
                                    <a href="./" className="contents-item__thumbnail">
                                        <img src="//cdn.shopify.com/s/files/1/0008/2421/3556/files/1_grande.png?v=1521366371" alt="article_image"/>
                                    </a>
                                    <div className="contents-item__content">
                                        <h4 className="contents-item__title">
                                            <a href="./">what we do?</a>
                                        </h4>
                                        <p className="contents-item__text">가나다라 마사</p>
                                        <a href="./" className="more__btn"> </a>
                                    </div>
                                </div>
                            )
                        )
                    }
                    
                </div>
                
            </div>
        </div>
    )
}

export default SectionPortFolio;
