import React from "react";
import CalculatorTwo from "./CalculatorTwo";

class FunctionTwo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            kmDistance: "",
            consumption: "",
            price: "",
            inputKm: "X",
            consumptionResOne: "",
            consumptionResTwo: "",
            priceResOne: "",
            priceResTwo: ""
        }
    };

    changeDistance = (e) => {
        this.setState({
            kmDistance: e.target.value
        })
    };

    changeConsumption = (e) => {
        this.setState({
            consumption: e.target.value
        })
    };

    changePrice = (e) => {
        this.setState({
            price: e.target.value
        })
    };

    calculateHandler = (e) => {
        e.preventDefault();
        let inputKm = this.state.kmDistance;
        let consumptionResOne = this.state.consumption * (this.state.kmDistance / 100);
        let priceResOne = (this.state.consumption * this.state.price) * (this.state.kmDistance / 100);
        let consumptionResTwo = this.state.consumption / 100;
        let priceResTwo = (this.state.price * this.state.consumption) / 100;
        this.setState({
            inputKm: inputKm,
            consumptionResOne: consumptionResOne.toFixed(2),
            consumptionResTwo: consumptionResTwo.toFixed(2),
            priceResOne: priceResOne.toFixed(2),
            priceResTwo: priceResTwo.toFixed(2)
        })
    };

    resetHandler = () => {
        this.setState({
            kmDistance: "",
            consumption: "",
            price: "",
            inputKm: "X",
            consumptionResOne: "",
            consumptionResTwo: "",
            priceResOne: "",
            priceResTwo: ""
        })
    };

    render() {
        return (
            <CalculatorTwo
                kmDistance={this.state.kmDistance}
                consumption={this.state.consumption}
                price={this.state.price}
                inputKm={this.state.inputKm}
                consumptionResOne={this.state.consumptionResOne}
                consumptionResTwo={this.state.consumptionResTwo}
                priceResOne={this.state.priceResOne}
                priceResTwo={this.state.priceResTwo}
                changeDistance={this.changeDistance}
                changeConsumption={this.changeConsumption}
                changePrice={this.changePrice}
                calculateHandler={this.calculateHandler}
                resetHandler={this.resetHandler} />
        )
    }
};

export default FunctionTwo;