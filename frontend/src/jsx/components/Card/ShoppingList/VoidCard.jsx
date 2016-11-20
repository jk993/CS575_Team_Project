import React from "react";

export default class TodoVoidCard extends React.Component {
    render () {
        return (
            <main class="mdl-layout__content">
                <div class="mdl-card mdl-cell mdl-cell--6-col mdl-cell--3-offset mdl-shadow--2dp">
                    <div class="mdl-card__title mdl-color--primary mdl-color-text--white">
                        <h2 class="mdl-card__title-text">Void</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                        Select List First
                    </div>
                    <div class="mdl-card__actions mdl-card--border">
                    </div>
                </div>
            </main>
        );
    }
}

