import React, { useState } from "react";
import Modal from "../modal/Modal";
import "./SectionMiddle.css"




function SectionMiddle(){
    const [modal, setModal] = useState(false);
    const closeModal = () => {
        setModal(false)
    }

    return(
        <div className="SectionMiddle">
            <div className="Container">
                <div className="ps-section__header">
                    <h3>#mini Project</h3>
                    <p>
                        Quisque sit amet ex at orci posuere ullamcorper.<br/>
                        Maecenas at iaculis diam. Nulla sem mauris, posuere id orci eget,<br/>
                        rutrum efficitur nisl.<br/>
                    </p>
                </div>

                <div className="btn_wrap">
                    <button type="button" className="view-all">Our Stories</button>
                </div>

                <div className="project">
                    <div className="project-item">
                        <a href="./" className="project-item__thumbnail">
                            <img src="//cdn.shopify.com/s/files/1/0008/2421/3556/files/1_grande.png?v=1521366371" alt="article_image"/>
                        </a>
                        <div className="project-item__content">
                            <h4 className="project-item__title">
                                <a href="./">what we do?</a>
                            </h4>
                            <p className="project-item__text">
                                가Quisque sit amet ex at orci posuere ullamcorper.Maecenas at iaculis diam. Nulla sem mauris, posuere id orci eget, rutrum efficitur nisl.
                            </p>
                            <button type="button" className="more__btn" onClick={ ()=>{ setModal(true)}}></button>
                            {modal === true ? <Modal closeModal={closeModal}/> : null}
                            
                        </div>
                    </div>
                    <div className="project-item">
                        <a href="./" className="project-item__thumbnail">
                            <img src="https://cdn.shopify.com/s/files/1/0008/2421/3556/files/3_grande.png?v=1521366391" alt="article_image"/>
                        </a>
                        <div className="project-item__content">
                            <h4 className="project-item__title">
                                <a href="./">what we do?</a>
                            </h4>
                            <p className="project-item__text">
                            가Quisque sit amet ex at orci posuere ullamcorper.Maecenas at iaculis diam. Nulla sem mauris, posuere id orci   eget, rutrum efficitur nisl.
                            </p>
                            <a href="./" className="more__btn"> </a>
                        </div>
                    </div>
                    <div className="project-item">
                        <a href="./" className="project-item__thumbnail">
                        <img src="//cdn.shopify.com/s/files/1/0008/2421/3556/files/2_grande.png?v=1521366381" alt="article_image"/>
                        </a>
                        <div className="project-item__content">
                            <h4 className="project-item__title">
                                <a href="./">what we do?</a>
                            </h4>
                            <p className="project-item__text">Sed consectetur tellus eget odio aliquet, vel vestibulum tellus sollicitudin.</p>
                            <a href="./" className="more__btn"> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionMiddle;
