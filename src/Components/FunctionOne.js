import React from "react";
import CalculatorOne from "./CalculatorOne";

class FunctionOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            kmTraveled: "",
            spentFuel: "",
            consumptionRes: "",
            distanceRes: ""
        }
    };

    changeKmTraveled = (e) => {
        this.setState({
            kmTraveled: e.target.value
        })
    };

    changeSpentFuel = (e) => {
        this.setState({
            spentFuel: e.target.value
        })
    };

    calculateHandler = (e) => {
        e.preventDefault();
        let consumption = this.state.spentFuel / (this.state.kmTraveled / 100);
        let distance = this.state.kmTraveled / this.state.spentFuel;
        this.setState({
            consumptionRes: consumption.toFixed(2),
            distanceRes: distance.toFixed(2)
        })
    };

    resetHandler = () => {
        this.setState({
            kmTraveled: "",
            spentFuel: "",
            consumptionRes: "",
            distanceRes: ""
        })
    };

    render() {
        return (
            <CalculatorOne
                kmTraveled={this.state.kmTraveled}
                changeKmTraveled={this.changeKmTraveled}
                spentFuel={this.state.spentFuel}
                changeSpentFuel={this.changeSpentFuel}
                consumptionRes={this.state.consumptionRes}
                distanceRes={this.state.distanceRes}
                calculateHandler={this.calculateHandler}
                resetHandler={this.resetHandler} />
        )
    }
};

export default FunctionOne;