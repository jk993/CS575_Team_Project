import React from "react";

import * as Action from "./Action.jsx";


export default class Item extends React.Component {
    changeTaken() {
        Action.changeTaken(this.props.list_name, this.props.item.id);
    }

    removeItem() {
        Action.removeItem(this.props.list_name, this.props.item.id);
    }

    render () {
        const {id, text, taken} = this.props.item;
        console.log("render item", id, text, taken);
        return(
            <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" >
                <input type="checkbox" class="mdl-checkbox__input" checked={taken} onChange={this.changeTaken.bind(this)}/>
                <span class="mdl-checkbox__label">{text}</span>
                <button class="mdl-button mdl-js-button mdl-button--icon" onClick={this.removeItem.bind(this)}><i class="material-icons">delete</i></button>
            </label>
        );
    }
}

