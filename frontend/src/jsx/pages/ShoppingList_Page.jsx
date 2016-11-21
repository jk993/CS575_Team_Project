import React from "react";

import Header from "../components/Header/DefaultHeader.jsx";
import Drawer from "../components/Drawer/ListDrawer.jsx";
import Footer from "../components/Footer/DefaultFooter.jsx";

import Store from "../components/Main/Store.js";
import * as Action from "../components/Main/Action.jsx";

export default class ShoppingList_Page extends React.Component {
    constructor(props) {
        super(props);

        this.createDrawerLink = this.createDrawerLink.bind(this);
        this.state = {
            header_title: props.route.header_title,
            header_list: [],
            drawer_title: props.route.drawer_title,
            drawer_list: this.createDrawerLink(),
            userid: this.props.params.userid,
            list_name: this.props.params.list_name,
        };
    }

    createDrawerLink = function() {
        var userid = this.props.params.userid;
        var todo_list = Store.getList(userid);
        console.log("createDrawerLink");
        var list = [];
        for(var i=0; i<todo_list.length; i++) {
            list.push({text:todo_list[i], link:userid+"/"+todo_list[i]});
        }
        return list;
    };

   
    componentDidUpdate() {
		var new_userid = this.props.params.userid;
		var new_list_name = this.props.params.list_name;
		if(this.state.userid != new_userid || this.state.list_name != new_list_name) {
			this.setState((prevState, props) => ({
                drawer_list: this.createDrawerLink(),
				userid: this.props.params.userid,
				list_name: this.props.params.list_name
			}));
			Action.updateData();
		}
        // componentHandler.upgradeDom();
    }

    // componentWillMount() {
    //     this.setState((prevState, props) => ({
    //         drawer_list: this.createDrawerLink(),
    //         list_name: this.getListName()
    //     }));
    // }
    //
    // componentWillUnmount() {
    // }

    render () {
        var { header_title, header_list } = this.state;
        var { drawer_title, drawer_list } = this.state;
        var { userid } = this.state;

        return (
			<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Header title={header_title} list={header_list}/>
                <Drawer userid={userid} />
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

