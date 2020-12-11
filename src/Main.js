import React, {Component} from "react";
import "./bob.css";
import Home from "./Home";
import PartySupply from "./partysupply";
import Contact from "./contact";
import { Route, HashRouter, NavLink } from "react-router-dom";



 
class Main extends Component{
    render()
    {
        return(
            <HashRouter>
            <div>
                <h1>Bob's Bakery</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Cakes</NavLink></li>
                    <li><NavLink to="/partysupply">Party Supply</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                <ul className="account">
                    <li><a href="/login">Login</a></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/partysupply" component={PartySupply}/>
                    <Route path="/contact" component={Contact}/>
                    
                </div>
            </div>
            </HashRouter>

        );
    }
}

export default Main;