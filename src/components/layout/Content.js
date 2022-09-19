import React from "react";

function Content(props) {
    return(
        <div className="contents-item">
                                <a href="#" className="contents-item__thumbnail">
                                <img src="//cdn.shopify.com/s/files/1/0008/2421/3556/files/1_grande.png?v=1521366371" alt="article-image"/>
                            </a>
                            <div className="contents-item__content">
                                <h4 className="contents-item__title">
                                    <a href="#">what we do?</a>
                                </h4>
                                <p className="contents-item__text">가나다라 마사 </p>
                                <a href="#" className="more__btn"></a>
                            </div>
                            </div>
    )
}

export default Content;