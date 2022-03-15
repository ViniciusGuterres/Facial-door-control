import React, { useState } from "react";

import { BrowserRouter } from "react-router-dom";
import Routes from "../Routes";

// templates
import Header from "./templates/header/Header.jsx";
import Main from "./templates/main/Main.jsx";
import MenuNav from "./templates/menuNav/MenuNav.jsx";
import Footer from "./templates/footer/Footer.jsx";

// styled components
import styledComponents from "./Home.js";

const { ContainerHome, ContainerMain } = styledComponents;

export default function Home() {
    const [isCollapsed, setCollapsed] = useState(true);

    /**
     * @function collapseMenuNav - When clicks at the menu icon, it will toggle between collapse
     */
    function collapseNavMenu() {
        setCollapsed(!isCollapsed);
    }

    return (
        <ContainerHome showMenuNav={isCollapsed}>
            <BrowserRouter>
                <Header collapseNavMenu={collapseNavMenu} />

                <ContainerMain>
                    {/* Toggle Menu nav */}
                    {isCollapsed ? <MenuNav /> : null}

                    <Main>
                        <Routes />
                    </Main>
                </ContainerMain>

                <Footer />
            </BrowserRouter>
        </ContainerHome>
    );
}
