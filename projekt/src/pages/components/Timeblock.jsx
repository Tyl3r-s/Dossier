import React from 'react';

export default function Timeblock(props) {
    return (
        <div className="PlannerContainer">
            <form className="timeBlock d-flex justify-content-center">
                <div className="Banner">
                    <label className="">{props.time}</label>
                    <textarea className="">{props.tasks}</textarea>
                    <button type="button" className="saveBtn">Save</button>
                </div>
            </form>
        </div>
    )
}