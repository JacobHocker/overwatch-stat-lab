import React from "react";
import './Tab.scss';

function Tab({ title }) {
    return(
        <div className={`${title}-tab-container`}>
            <button className='tab-button'>{title}</button>
        </div>
    )
}

export default Tab;