import React, { useState } from "react";
import HeroInfoPageOverview from "../heroInfoPageOverview/HeroInfoPageOverview";
import HeroInfoPageStory from "../heroInfoPageStory/HeroInfoPageStory";
import './HeroInfoPageTextContainer.scss';

function HeroInfoPageTextContainer({ hero }) {
    const [activeHeader, setActiveHeader] = useState("Overview");

    const headers = [{id: 1, title: "Overview"}, {id: 2, title: "Story"}];

    const headerMap = headers.map((header) => (
        <div className={activeHeader === header.title ? "hero-text-header-active" : "hero-text-header-inactive"} 
            key={header.id}
            onClick={() => setActiveHeader(header.title)}>
                <h1>{header.title}</h1>
        </div>
    ))
    return(
        <div className="hero-info-page-text-container">
            <div className="hero-text-header-container">
                {headerMap}
            </div>
            <div className="hero-text-body-container">
                {activeHeader === "Overview" ? 
                <HeroInfoPageOverview hero={hero}/> :
                <HeroInfoPageStory hero={hero}/>}
            </div>
        </div>
    )
}

export default HeroInfoPageTextContainer;