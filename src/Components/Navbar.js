import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <div><Link to="/">Calculator 1</Link></div>
                    <div><Link to="/calc2">Calculator 2</Link></div>
                </div>
            </div>
        )
    }
};

export default Navbar;