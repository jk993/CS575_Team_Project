import React from "react";

import Item from "./Item.jsx";

export default class Items extends React.Component {
    render () {
        const { list_name, items } = this.props;
        return(
            <ul class="mdl-list">
                {items.map((item) => {
                    return <li key={item.id} class="mdl-list__item"><Item list_name={list_name} item={item}/></li>
                })}
            </ul>
        );
    }
}

