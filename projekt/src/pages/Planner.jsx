import React from 'react';
import Banner from './components/Banner';
import Timeblock from './components/Timeblock';

const timeBlockArr = [
    {
        "time": "7am",
        "tasks": "task"
    },
    {
        "time": "8am",
        "tasks": "task"
    },
    {
        "time": "9am",
        "tasks": "task"
    },
    {
        "time": "10am",
        "tasks": "task"
    },
    {
        "time": "11am",
        "tasks": "task"
    },
    {
        "time": "12pm",
        "tasks": "task"
    },
    {
        "time": "1pm",
        "tasks": "task"
    },
    {
        "time": "2pm",
        "tasks": "task"
    },
    {
        "time": "3pm",
        "tasks": "task"
    },
    {
        "time": "4pm",
        "tasks": "task"
    },
    {
        "time": "5pm",
        "tasks": "task"
    },
    {
        "time": "6pm",
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
            <div className="timeBlocks">
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