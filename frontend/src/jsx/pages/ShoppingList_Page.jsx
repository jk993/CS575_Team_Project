import React from "react";

import Header from "../components/Header/DefaultHeader.jsx";
import Drawer from "../components/Drawer/DefaultDrawer.jsx";
import Footer from "../components/Footer/DefaultFooter.jsx";

import Store from "../components/Main/Store.js";
import * as Action from "../components/Main/Action.jsx";

export default class ShoppingList_Page extends React.Component {
    constructor(props) {
        super(props);

        this.createDrawerLink = function() {
            var userid = props.params.userid;
            var todo_list = Store.getList(userid);
            var list = [];
            for(var i=0; i<todo_list.length; i++) {
                list.push({text:todo_list[i], link:userid+"/"+todo_list[i]});
            }
            return list;
        };

        this.state = {
            header_title: props.route.header_title,
            header_list: [],
            drawer_title: props.route.drawer_title,
            drawer_list: this.createDrawerLink(),
            userid: this.props.params.userid,
            list_name: this.props.params.list_name,
        };
    }
    
    componentDidUpdate() {
		var new_userid = this.props.params.userid;
		var new_list_name = this.props.params.list_name;
		if(this.state.userid != new_userid || this.state.list_name != new_list_name) {
			this.setState((prevState, props) => ({
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
        var { list_name } = this.state;

        return (
			<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Header title={header_title} list={header_list}/>
                <Drawer title={drawer_title} list={drawer_list}/>
                {this.props.children}
                <Footer />
            </div>
        );
    }
}

