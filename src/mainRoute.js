import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";
import About from "./components/AboutPage";
import Contact from "./components/Contact";


function MainRoute() {
    return (
        <>
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
            </Switch>

        </>
    );
}

export default MainRoute;