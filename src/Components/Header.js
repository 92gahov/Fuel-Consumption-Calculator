import React from "react";
import fuel from "./img/103260_fuel_icon.png";

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div>
                    <h1>FUEL CONSUMPTION CALCULATOR</h1>
                </div>
                <div>
                    <img alt="" src={fuel}></img>
                </div>
            </div>
        )
    }
};

export default Header;