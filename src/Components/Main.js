import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Navbar from "./Navbar";
import FunctionOne from "./FunctionOne";
import FunctionTwo from "./FunctionTwo";
import Footer from "./Footer";

class Main extends React.Component {

    render() {
        return (
            <div className="App">
                <Header />
                <Router>
                    <Navbar />
                    <div className="content">
                        <Switch>
                            <Route exact path="/" component={FunctionOne}></Route>
                            <Route path="/calc2" component={FunctionTwo}></Route>
                            <Route path="*" component={FunctionOne}></Route>
                        </Switch>
                    </div>
                </Router>
                < Footer />
            </div>
        )
    }
};

export default Main;