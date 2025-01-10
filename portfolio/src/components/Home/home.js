import React from "react";
import "./home.css"
import Social from './social'
import Content from './content'
import ScrollDown from "./scrolldown";

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home-container container grid">
                <div className="home-content grid">
                    <Social/>
                    <div className="home-img"></div>
                    <Content/>
                </div>
                <ScrollDown/>
            </div>
        </section>
    )
}

export default Home