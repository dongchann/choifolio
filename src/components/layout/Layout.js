import React from "react";
import Footer from "../Footer/Footer";
import Subscribe from "../Footer/Subscribe";
import Header from "../Header/Header";
import Main from "../Body/Main";
import "../layout/Layout.css"


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