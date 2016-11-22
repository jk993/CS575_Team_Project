import { EventEmitter } from "events";

import dispatcher from "./Dispatcher.js";
import AppData from "./Data.js";

class Store extends EventEmitter {
    constructor() {
        super();
        this.user_info = AppData.user_info;
        this.item_list = AppData.list_info;
    };

    login(userid) {
        console.log("in login", userid);
        if(this.user_info[userid] == null)
            this.user_info[userid] = [];
        console.log("add user", this.user_info);
        this.emit("login");
    }

    createList(userid, list_name) {
        console.log("create list", userid, list_name);
        this.item_list[list_name] = [];
        this.user_info[userid].push(list_name);
        console.log(this.user_info[userid], this.item_list[list_name]);
        this.emit("change");
    }

    getList(userid) {
        return AppData.user_info[userid];
    }

    getItems(list_name) {
        console.log("get item", AppData.list_info[list_name]);
        return AppData.list_info[list_name];
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

    

    handleAction(action) {
        console.log("Store received an action", action);
        switch(action.type) {
            case "LOGIN": {
                this.login(action.userid);
                break;
            }
            case "CREATE_LIST": {
                this.createList(action.userid, action.list_name);
                break;
            }
            case "CREATE_ITEM": {
                this.createItem(action.list_name, action.text);
                break;
            }
            case "REMOVE_ITEM": {
                this.removeItem(action.list_name, action.item_id);
                break;
            }
            case "CHANGE_TAKEN": {
                this.changeTaken(action.list_name, action.item_id);
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

