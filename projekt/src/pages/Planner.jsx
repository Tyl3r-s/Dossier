import React from 'react';
import Banner from './components/Banner';
import Timeblock from './components/Timeblock';
import '../assets/planner.css';

const timeBlockArr = [
    {
        "time": "7am",
        "tasks": "task"
    },
    {
        "time": "7:30am",
        "tasks": "task"
    },
    {
        "time": "8am",
        "tasks": "task"
    },
    {
        "time": "8:30am",
        "tasks": "task"
    },
    {
        "time": "9am",
        "tasks": "task"
    },
    {
        "time": "9:30am",
        "tasks": "task"
    },
    {
        "time": "10am",
        "tasks": "task"
    },
    {
        "time": "10:30am",
        "tasks": "task"
    },
    {
        "time": "11am",
        "tasks": "task"
    },
    {
        "time": "11:30am",
        "tasks": "task"
    },
    {
        "time": "12pm",
        "tasks": "task"
    },
    {
        "time": "12:30pm",
        "tasks": "task"
    },
    {
        "time": "1pm",
        "tasks": "task"
    },
    {
        "time": "1:30pm",
        "tasks": "task"
    },
    {
        "time": "2pm",
        "tasks": "task"
    },
    {
        "time": "2:30pm",
        "tasks": "task"
    },
    {
        "time": "3pm",
        "tasks": "task"
    },
    {
        "time": "3:30pm",
        "tasks": "task"
    },
    {
        "time": "4pm",
        "tasks": "task"
    },
    {
        "time": "4:30pm",
        "tasks": "task"
    },
    {
        "time": "5pm",
        "tasks": "task"
    },
    {
        "time": "5:30pm",
        "tasks": "task"
    },
    {
        "time": "6pm",
        "tasks": "task"
    },
    {
        "time": "6:30pm",
        "tasks": "task"
    },
    {
        "time": "7pm",
        "tasks": "task"
    }
]

export default function Planner() {
    return (
        <div className="App">
            <Banner />
            <div>
                {timeBlockArr.map(x => {
                    return (
                        <Timeblock 
                            time={x.time}
                            tasks={x.tasks}
                        />
                    )
                })}
            </div>
        </div>
    )
}