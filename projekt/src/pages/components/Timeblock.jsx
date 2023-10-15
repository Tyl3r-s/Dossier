import React from 'react';

export default function Timeblock() {
    return (
        <div className="PlannerContainer">
            <form className="timeBlock d-flex justify-content-center">
                <div className="">
                    <label className="">7am</label>
                    <textarea className=""></textarea>
                    <button type="button" className="saveBtn">Save</button>
                </div>
            </form>
        </div>
    )
}