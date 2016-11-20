import React from "react";
import { Link } from "react-router";

export default class DefaultDrawer extends React.Component {
    render () {
        return(
            <div class="mdl-layout__drawer">
                <span class="mdl-layout-title">{this.props.title}</span>
                <nav class="mdl-navigation">
                    {this.props.list.map((element, index) => {
                        return <Link class="mdl-navigation__link" key={index} to={element.link}>{element.text}</Link>
                    })}
                </nav>
            </div>
        );
    }
}

