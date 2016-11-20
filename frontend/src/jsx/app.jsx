import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from 'react-router'

import ShoppingList_Page from "./pages/ShoppingList_Page.jsx";

var header_title = "Party Shopping List";
var drawer_title = "List";
var app = document.getElementById("app");

ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" header_title={header_title} drawer_title={drawer_title} component={ShoppingList_Page} />
        <Route path="/:list_name" header_title={header_title} drawer_title={drawer_title} component={ShoppingList_Page} />
    </Router>,

app);

