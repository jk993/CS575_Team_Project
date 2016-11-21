import React from "react";
import { Link, browserHistory } from "react-router";

import * as Action from "./Action.jsx";

export default class LoginCard extends React.Component {
    login() {
        var userid = document.getElementById("userid").value;
        console.log("userid", userid);
        browserHistory.push(userid);
        Action.login(userid);
        window.location.reload()
    }

    render () {
        return(
            <main class="mdl-layout__content">
                <div class="mdl-card mdl-cell mdl-cell--4-col mdl-cell--4-offset mdl-shadow--2dp">
                    <div class="mdl-card__title mdl-color--primary mdl-color-text--white">
                        <h2 class="mdl-card__title-text">Login Card</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                        <form action="#">
                            <div class="mdl-textfield mdl-js-textfield">
                                <input class="mdl-textfield__input" type="text" id="userid" />
                                <label class="mdl-textfield__label" for="userid">Username</label>
                            </div>
                        </form>
                    </div>
                    <div class="mdl-card__actions mdl-card--border">
                        <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" onClick={this.login.bind(this)}>Log in</button>
                    </div>
                </div>
            </main>            
        );
    }
}

