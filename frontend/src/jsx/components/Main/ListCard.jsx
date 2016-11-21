import React from "react";

import Items from "./Items.jsx";
import * as Action from "./Action.jsx";
import Store from "./Store.js";


export default class ListCard extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            list_name: props.params.list_name,
            items: Store.getItems(props.params.list_name)
        };
        this.getItems = this.getItems.bind(this);
        this.createItem = this.createItem.bind(this);
    }

    componentWillMount() {
        Store.on("change", this.getItems);
    }

    componentWillUnmount() {
        Store.removeListner("change", this.getItems);
    }

    getItems() {
        var filtered = Store.getItems(this.props.params.list_name);
        this.setState({
			list_name: this.props.params.list_name,
            items: filtered
        });
    }

    createItem() {
        var text = document.getElementById("new_item").value;
        if(text != "") {
            Action.createItem(this.state.list_name, text);
            document.getElementById("new_item").value = "";
        }
    }

    componentDidUpdate() {
        componentHandler.upgradeDom();
    } 

    render () {
        const { list_name, items } = this.state;
        return(
            <main class="mdl-layout__content">
                <div class="mdl-card mdl-cell mdl-cell--6-col mdl-cell--3-offset mdl-shadow--2dp">
                    <div class="mdl-card__title mdl-color--primary mdl-color-text--white">
                        <h2 class="mdl-card__title-text">{list_name}</h2>
                    </div>
                    <div class="mdl-card__supporting-text">
                        <div class="mdl-textfield mdl-js-textfield">
                            <input class="mdl-textfield__input" type="text" id="new_item" />
                            <label class="mdl-textfield__label" for="new_item">New Item</label>
                        </div>
                        <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={this.createItem} ><i class="material-icons">add</i></button>

                        <Items list_name={list_name} items={items}/>
                    </div>
                    <div class="mdl-card__actions mdl-card--border">
                        <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">All</button>
                        <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Activate</button>
                        <button class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">Complete</button>
                    </div>
                </div>
            </main>            
        );
    }
}

