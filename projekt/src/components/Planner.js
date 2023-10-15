import react from 'react';

const Planner = () => {
    return (
        <div className="App">
            <header className="App-header">
                <header class="Banner">
                    <h1 class="pageTitle">Work Day Scheduler</h1>
                    <p class="todaysDate" id="todaysDate"></p>
                    <h5 class="currentTime" id="currentTime"></h5>
                </header>

                <div class="PlannerContainer">
                    <form class="timeBlock d-flex justify-content-center">
                        <div class="">
                            <label class="">7am</label>
                            <textarea class=""></textarea>
                            <button type="button" class="saveBtn">Save</button>
                        </div>
                    </form>
                </div>
            </header>
        </div>
    )
}

export default Planner;