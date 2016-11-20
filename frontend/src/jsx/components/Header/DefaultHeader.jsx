import React from "react";
import { Link } from "react-router";

export default class DefaultHeader extends React.Component {
    render () {
        return(
            <header class="mdl-layout__header">
                <div class="mdl-layout__header-row">
                    <span class="mdl-layout-title">{this.props.title}</span>
                    <div class="mdl-layout-spacer"></div>
                    <nav class="mdl-navigation mdl-layout--large-screen-only">
                        {this.props.list.map((element, index) => {
                            return <Link class="mdl-navigation__link" key={index} to={element.link}>{element.text}</Link>
                        })}
                    </nav>
                </div>
            </header>
        );
    }
}

