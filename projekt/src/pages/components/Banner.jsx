import React, { useState} from 'react';
import LiveClockUpdate from './LiveClockUpdate';

function getDate() {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    return `${month}/${date}/${year}`;
  }

export default function Banner() {

    const [currentDate, setCurrentDate] = useState(getDate());

    return (
        <div className="bannerSection">
            <h3 className="pageTitle">Projekt Dossier</h3>
            <p className="todaysDate">{currentDate}</p>
            <LiveClockUpdate />
        </div>
    )
}