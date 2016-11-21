import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import Login_Page from "./pages/Login_Page.jsx";
import ShoppingList_Page from "./pages/ShoppingList_Page.jsx";
import VoidCard from "./components/Main/VoidCard.jsx";
import ListCard from "./components/Main/ListCard.jsx";


var header_title = "Party Shopping List";
var drawer_title = "List";

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" header_title={header_title} component={Login_Page} />
        <Route path="/:userid" header_title={header_title} drawer_title={drawer_title} component={ShoppingList_Page}>
            <IndexRoute component={VoidCard}></IndexRoute>
            <Route path=":list_name" component={ListCard}/>
        </Route>
    </Router>,
document.getElementById("app"));

