import React from "react";

import Header from "../components/Header/DefaultHeader.jsx";
import Drawer from "../components/Drawer/DefaultDrawer.jsx";
import Footer from "../components/Footer/DefaultFooter.jsx";

import VoidCard from "../components/Card/ShoppingList/VoidCard.jsx";
import ListCard from "../components/Card/ShoppingList/ListCard.jsx";
import Store from "../components/Card/ShoppingList/Store.js";

export default class ShoppingList_Page extends React.Component {
    constructor(props) {
        super(props);

        this.createDrawerLink = function() {
            var todo_list = Store.getList();
            var list = [];
            for(var i=0; i<todo_list.length; i++) {
                list.push({text:todo_list[i], link:todo_list[i]});
            }
            return list;
        };

        this.state = {
            header_title: props.route.header_title,
            header_list: [],
            drawer_title: props.route.drawer_title,
            drawer_list: this.createDrawerLink(),
            list_name: this.props.params.list_name
        };
    }
    
    // componentDidUpdate() {
    //     componentHandler.upgradeDom();
    // }

    // componentWillMount() {
    //     this.setState((prevState, props) => ({
    //         drawer_list: this.createDrawerLink(),
    //         list_name: this.getListName()
    //     }));
    // }
    //
    // componentWillUnmount() {
    // }

    displayCard() {
        if(this.state.list_name == null) {
            return (
                <VoidCard />
            );
        }
        return (
            <ListCard list_name={this.state.list_name} />
        );
    }

    render () {
        var { header_title, header_list } = this.state;
        var { drawer_title, drawer_list } = this.state;
        var { list_name } = this.state;

        return (
			<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Header title={header_title} list={header_list}/>
                <Drawer title={drawer_title} list={drawer_list}/>
                {this.displayCard.bind(this)()}
                <Footer />
            </div>
        );
    }
}

