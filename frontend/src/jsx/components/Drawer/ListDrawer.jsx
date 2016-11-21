import React from "react";
import { Link } from "react-router";

import * as Action from "../Main/Action.jsx";
import Store from "../Main/Store.js";

export default class ListDrawer extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
			userid: props.userid,
            list: Store.getList(props.userid)
        };
        console.log("list drawer", props.userid);
        console.log("list drawer", Store.getList(props.userid));
        this.getList = this.getList.bind(this);
        this.createList = this.createList.bind(this);
    }

    componentWillMount() {
        Store.on("change", this.getList);
    }

    createList() {
        var text = document.getElementById("new_list").value;
        if(text != "") {
            Action.createList(this.props.userid, text);
            document.getElementById("new_list").value = "";
        }
    }

    getList() {
        var list = Store.getList(this.props.userid);
        this.setState({
			userid: this.props.userid,
            list: list
        });
    }

    render () {
        const { userid, list } = this.state;
        console.log("list drawer", list);
        return(
            <div class="mdl-layout__drawer">
                <span class="mdl-layout-title">{userid}</span>

                <div class="mdl-textfield mdl-js-textfield">
                    <input class="mdl-textfield__input" type="text" id="new_list" />
                    <label class="mdl-textfield__label" for="new_item">New List</label>
                </div>
                <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={this.createList.bind(this)} ><i class="material-icons">add</i></button>

                <nav class="mdl-navigation">
                    {list.map((element, index) => {
                        return <Link class="mdl-navigation__link" key={index} to={userid+"/"+element}>{element}</Link>
                    })}
                </nav>
            </div>
        );
    }
}

