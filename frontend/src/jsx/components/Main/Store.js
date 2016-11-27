import { EventEmitter } from "events";

import dispatcher from "./Dispatcher.js";

class Store extends EventEmitter {
    constructor() {
        super();
        this.list = [];
        this.items = [];
    }

    login(userid) {
        console.log("in login", userid);
        this.emit("login");
    }

    getList() {
        return this.list;
    }

    reloadList(list) {
        this.list = list;
        this.emit("change");
    }


    getItems(list_name) {
        console.log("get items", this.items);
        return this.items;
    }

    reloadItems(items) {
        console.log("update items", items);
        this.items = items;
        this.emit("change");
    }
    

    handleAction(action) {
        console.log("Store received an action", action);
        switch(action.type) {
            case "LOGIN": {
                this.login(action.userid);
                break;
            }
            case "GET_LIST": {
                this.reloadList(action.list);
                break;
            }
            case "GET_ITEMS": {
                this.reloadItems(action.items);
                break;
            }
            case "UPDATE_DATA": {
                this.emit("change");
                break;
            }
        }
    }
}

const store = new Store;
dispatcher.register(store.handleAction.bind(store));

export default store;

