import React from "react";

export default class LoginCard extends React.Component {
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
                                <input class="mdl-textfield__input" type="text" id="username" />
                                <label class="mdl-textfield__label" for="username">Username</label>
                            </div>
                            <div class="mdl-textfield mdl-js-textfield">
                                <input class="mdl-textfield__input" type="password" id="userpass" />
                                <label class="mdl-textfield__label" for="userpass">Password</label>
                            </div>
                        </form>
                    </div>
                    <div class="mdl-card__actions mdl-card--border">
                        <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Log in</button>
                    </div>
                </div>
            </main>            
        );
    }
}

