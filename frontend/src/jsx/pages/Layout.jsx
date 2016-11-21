import React from "react";

import Header from "../components/Header/DefaultHeader.jsx";
import Drawer from "../components/Drawer/DefaultDrawer.jsx";
import Footer from "../components/Footer/DefaultFooter.jsx";

import Store from "../components/Main/Store.js";

export default class Layout extends React.Component {
    constructor(props) {
        super(props);

        console.log("hello", this.props.params.userid);
        // this.createDrawerLink = function() {
        //     var todo_list = Store.getList();
        //     var list = [];
        //     for(var i=0; i<todo_list.length; i++) {
        //         list.push({text:todo_list[i], link:todo_list[i]});
        //     }
        //     return list;
        // };

        this.state = {
            header_title: props.route.header_title,
            header_list: [],
            drawer_title: props.route.drawer_title,
            drawer_list: [],

            userid: this.props.params.userid
            // list_name: this.props.params.list_name
        };

        this.updateDrawer = this.init.bind(this);
    }

    init() {
        var userid = this.props.params.userid;
        console.log("finally update", this.props.params.userid);
        this.setState({
            userid: this.props.params.userid
        });
    }
    
    componentDidUpdate() {
        console.log("layout");
        Store.on("login", this.init);
        Store.on("change", this.updateDrawer);
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

