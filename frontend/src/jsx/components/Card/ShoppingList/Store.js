import { EventEmitter } from "events";

import dispatcher from "./Dispatcher.js";

class Store extends EventEmitter {
    constructor() {
        super();
        this.item_list = {
            list1: [
                {id: 1, text: "item11", taken: false},
                {id: 2, text: "item12", taken: false},
                {id: 3, text: "item13", taken: false}
            ],
            list2: [
                {id: 1, text: "item21", taken: false},
                {id: 2, text: "item22", taken: false},
                {id: 3, text: "item23", taken: true},
                {id: 3, text: "item24", taken: true}
            ],
            list3: [
                {id: 1, text: "item31", taken: false},
                {id: 2, text: "item32", taken: true},
                {id: 3, text: "item33", taken: true}
            ],
            list4: [
                {id: 1, text: "item41", taken: true},
                {id: 2, text: "item42", taken: false},
                {id: 3, text: "item43", taken: true}
            ],
            list5: [
                {id: 1, text: "item51", taken: false},
                {id: 2, text: "item52", taken: false},
                {id: 3, text: "item53", taken: true},
                {id: 4, text: "item54", taken: false},
                {id: 5, text: "item55", taken: true},
                {id: 6, text: "item56", taken: true},
                {id: 7, text: "item57", taken: true},
                {id: 8, text: "item58", taken: true}
            ]
        };
    };

    getList() {
        return Object.keys(this.item_list);
    }

    createItem(list_name, text) {
        const id = Date.now();
        this.item_list[list_name].push({id, text, taken:false});
        console.log("create item", this.item_list[list_name]);
        this.emit("change");
    }

    removeItem(list_name, item_id) {
        this.item_list[list_name] = this.item_list[list_name].filter(function(data, index) {
            return data.id != item_id;
        });
        console.log("remove item", this.item_list[list_name]);
        this.emit("change");
    }

    changeTaken(list_name, item_id) {
        var result = this.item_list[list_name].filter(function(data, index) {
            return data.id == item_id;
        });
        result[0].taken = !result[0].taken;
        console.log("change taken", this.item_list[list_name]);
        this.emit("change");
    }

    getItems(list_name) {
        console.log("get item", this.item_list[list_name]);
        return this.item_list[list_name];
    }

    handleAction(action) {
        console.log("Store received an action", action);
        switch(action.type) {
            case "CREATE_ITEM": {
                this.createItem(action.list_name, action.text);
                break;
            }
            case "REMOVE_ITEM": {
                this.removeItem(action.list_name, action.item_id);
                break;
            }
            case "CHANGE_COMPLETE": {
                this.changeTaken(action.list_name, action.item_id);
                break;
            }
        }
    }
}

const store = new Store;
dispatcher.register(store.handleAction.bind(store));

export default store;

