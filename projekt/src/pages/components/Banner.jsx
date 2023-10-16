import React, { useState} from 'react';
import LiveClockUpdate from './LiveClockUpdate';

function getDate() {
    const daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    const monthlist = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const today = new Date();
    const day = today.getDay();
    const month = today.getMonth();
    const year = today.getFullYear();
    const date = today.getDate();
    return `${daylist[day]} || ${monthlist[month]} ${date} || ${year} || `;
  }

export default function Banner() {

    const [currentDate, setCurrentDate] = useState(getDate());

    return (
        <div className="bannerSection">
            <h2 className="pageTitle">Projekt Dossier</h2>
            <p className="todaysDate">{currentDate}<LiveClockUpdate /></p>
        </div>
    )
}