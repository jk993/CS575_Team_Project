import React from "react";
import { Link } from "react-router";

import * as Action from "../Main/Action.jsx";


export default class ListLink extends React.Component {
    removeList() {
        Action.removeList(this.props.userid, this.props.list_name);
    }

    render () {
        const {userid, list_name} = this.props;
        return(
            <div class="mdl-grid">
                <div class="mdl-cell mdl-cell--8-col">
                    <Link class="mdl-navigation__link" key={list_name} to={userid+"/"+list_name}>{list_name}</Link>
                </div>
                <div class="mdl-cell mdl-cell--4-col">
                    <button class="mdl-button mdl-js-button mdl-button--icon" onClick={this.removeList.bind(this)}><i class="material-icons">delete</i></button>
                </div>
            </div>
        );
    }
}

