import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import "./Layout.css"
import Subscribe from "./Subscribe";

function Layout(){
    return(
        <div className="Layout">
            <Header />
            <Main>
                <h2>메인</h2>
            </Main>
            <Subscribe />
            <Footer />
        </div>
    )
}

export default Layout;