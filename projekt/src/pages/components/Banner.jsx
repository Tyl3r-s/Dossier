import React from 'react';

export default function Banner() {
    return (
        <div className="plannerContainer">
            <h1 className="pageTitle">Work Day Scheduler</h1>
            <p className="todaysDate" id="todaysDate"></p>
            <h5 className="currentTime" id="currentTime"></h5>
        </div>
    )
}