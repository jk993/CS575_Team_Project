import dispatcher from "./Dispatcher.js"

export function login(userid) {
    dispatcher.dispatch({
        type: "LOGIN",
        userid
    });
}

export function createItem(list_name, text) {
    dispatcher.dispatch({
        type: "CREATE_ITEM",
        list_name,
        text
    });
}

export function removeItem(list_name, item_id) {
    dispatcher.dispatch({
        type: "REMOVE_ITEM",
        list_name,
        item_id
    });
}

export function changeTaken(list_name, item_id) {
    dispatcher.dispatch({
        type: "CHANGE_TAKEN",
        list_name,
        item_id
    });
}

export function updateData() {
    dispatcher.dispatch({
        type: "UPDATE_DATA"
    });
}

export function createList(userid, list_name) {
    dispatcher.dispatch({
        type: "CREATE_LIST",
        userid,
        list_name
    });
}

