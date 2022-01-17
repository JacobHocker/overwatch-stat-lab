import React from "react";
import HeroInfoPageOverview from "../heroInfoPageOverview/HeroInfoPageOverview";
import HeroInfoPageStory from "../heroInfoPageStory/HeroInfoPageStory";
import './HeroInfoPageTextContainer.scss';

function HeroInfoPageTextContainer() {
    return(
        <div className="hero-info-page-text-container">
            <h1>Container for the Text</h1>
            <HeroInfoPageOverview />
            <HeroInfoPageStory />
        </div>
    )
}

export default HeroInfoPageTextContainer;