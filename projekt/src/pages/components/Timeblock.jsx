import React from 'react';

export default function Timeblock(props) {
    return (
        <form className="timeBlocks">
            <div className="textContainer">
                <textarea className="blockText">{props.tasks}</textarea>
                <label className="blockTime">{props.time}</label>
            </div>
            <input type="checkbox" className="checkBox" />
        </form>
    )
}