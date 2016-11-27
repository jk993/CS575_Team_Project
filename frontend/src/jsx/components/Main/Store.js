import { EventEmitter } from "events";

import dispatcher from "./Dispatcher.js";
import AppData from "./Data.js";

class Store extends EventEmitter {
    constructor() {
        super();
        this.user_info = AppData.user_info;
        this.item_list = AppData.list_info;
        this.list = [];
        this.items = [];
    }

    login(userid) {
        console.log("in login", userid);
        if(this.user_info[userid] == null)
            this.user_info[userid] = [];
        console.log("add user", this.user_info);
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

