import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

import {Home, Portfolio, About, Contact} from '../../components/index'

function NavBar() {
    return (
        <Router>
            <header>
            <Link to="/">
                <button>Home</button>
            </Link>
            <Link to="/about">
                <button>About</button>
            </Link>
            </header>
            <main>
                <Routes>
                    <Route exact path="/" component={<Home/>} />
                    <Route path="/about" component={<About/>} />
                </Routes>
            </main>
        </Router>
    );
}

export default NavBar;