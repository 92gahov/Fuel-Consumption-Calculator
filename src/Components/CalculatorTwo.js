import React from "react";

class CalculatorTwo extends React.Component {
    render() {
        const { kmDistance,
            consumption,
            price,
            inputKm,
            consumptionResOne,
            consumptionResTwo,
            priceResOne,
            priceResTwo,
            changeDistance,
            changeConsumption,
            changePrice,
            calculateHandler,
            resetHandler } = this.props;
        return (
            <main className="main">
                <h2>Fuel consumption according to distance</h2>
                <form onSubmit={calculateHandler}>
                    <div className="grid-container">
                        <div className="calc-main">
                            <div className="calc">
                                <p>Enter a distance:</p>
                                <input type="number"
                                    value={kmDistance}
                                    onChange={changeDistance} min="1" step="0.01" required></input>
                                <span>KM</span>
                                <br></br>
                                <p>Average consumption:</p>
                                <input type="number"
                                    value={consumption}
                                    onChange={changeConsumption} min="1" step="0.01" required></input>
                                <span>L / 100 KM</span>
                                <p>Price per liter of fuel:</p>
                                <input type="number"
                                    value={price}
                                    onChange={changePrice} min="1" step="0.01" required></input>
                                <span>/ L</span>
                            </div>
                        </div>
                        <div className="result-main">
                            <div className="result">
                                <h3>RESULT</h3>
                                <table>
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th>Consumption (L)</th>
                                            <th>Price</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td style={{ width: "28%" }}><span>{inputKm}</span> KM</td>
                                            <td>{consumptionResOne}</td>
                                            <td style={{ width: "27%" }}>{priceResOne}</td>
                                        </tr>
                                        <tr>
                                            <td>1 KM</td>
                                            <td>{consumptionResTwo}</td>
                                            <td>{priceResTwo}</td>
                                        </tr>
                                    </tbody>
                                </table>
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

export default CalculatorTwo;