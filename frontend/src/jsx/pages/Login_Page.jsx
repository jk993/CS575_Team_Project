import React from "react";

import Header from "../components/Header/DefaultHeader.jsx";
import Drawer from "../components/Drawer/DefaultDrawer.jsx";
import Footer from "../components/Footer/DefaultFooter.jsx";
import Login from "../components/Main/LoginCard.jsx";

export default class Login_Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            header_title: props.route.header_title,
            header_list: [],
        };
    }

    render () {
        var { header_title, header_list } = this.state;

        return (
			<div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Header title={header_title} list={header_list}/>
                <Login />
                <Footer />
            </div>
        );
    }
}

