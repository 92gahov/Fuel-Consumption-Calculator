import React from "react";

class CalculatorOne extends React.Component {
    render() {
        const { kmTraveled,
            changeKmTraveled,
            spentFuel, changeSpentFuel,
            consumptionRes,
            distanceRes,
            calculateHandler,
            resetHandler } = this.props;
        return (
            <main className="main">
                <h2>Average fuel consumption</h2>
                <form onSubmit={calculateHandler}>
                    <div className="grid-container">
                        <div className="calc-main">
                            <div className="calc">
                                <p>Kilometers traveled:</p>
                                <input type="number"
                                    value={kmTraveled}
                                    onChange={changeKmTraveled} min="1" step="0.01" required></input>
                                <span>KM</span>
                                <br></br>
                                <p>Spent fuel:</p>
                                <input type="number"
                                    value={spentFuel}
                                    onChange={changeSpentFuel} min="1" step="0.01" required></input>
                                <span>L</span>
                            </div>
                        </div>
                        <div className="result-main">
                            <div className="result">
                                <h3>RESULT</h3>
                                <p>Your consumption is:</p>
                                <input type="number"
                                    value={consumptionRes} readOnly></input>
                                <span>L / 100 KM</span>
                                <p>Distance by 1 liter:</p>
                                <input type="number"
                                    value={distanceRes} readOnly></input>
                                <span>KM</span>
                            </div>
                        </div>
                        <div className="calc-btns">
                            <button type="submit">Calculate</button>
                            <button type="button"
                                onClick={resetHandler}>Reset</button>
                        </div>
                    </div>
                </form>
            </main>
        )
    }
};

export default CalculatorOne;