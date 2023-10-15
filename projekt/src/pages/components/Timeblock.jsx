import React from 'react';

export default function Timeblock(props) {
    return (
        <form className="timeBlocks">
            <textarea className="blockText">{props.tasks}</textarea>
            <label className="blockTime">{props.time}</label>

        </form>
    )
}