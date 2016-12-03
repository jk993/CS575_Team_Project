import { EventEmitter } from "events";

import dispatcher from "./Dispatcher.js";

class Store extends EventEmitter {
    constructor() {
        super();
        this.list = [];
        this.items = [];
    }

    login(userid) {
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
        return this.items;
    }

    reloadItems(items) {
        this.items = items;
        this.emit("change");
    }
    

    handleAction(action) {
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

