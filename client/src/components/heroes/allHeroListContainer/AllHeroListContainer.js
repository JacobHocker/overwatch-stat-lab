import React from "react";
import AllHeroList from "../allHeroList/AllHeroList";
import './AllHeroListContainer.scss';

function AllHeroListContainer() {
    return(
        <div className="all-hero-page-container">
            <AllHeroList />
        </div>
    )
}

export default AllHeroListContainer;