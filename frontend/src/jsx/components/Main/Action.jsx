import dispatcher from "./Dispatcher.js"

var api_url = "http://192.168.0.101:3000"

export function login(userid) {
    var user_info = {userid:userid};
    $.post(api_url+"/api/login/", user_info, function(response) {
        console.log(response);
        dispatcher.dispatch({
            type: "LOGIN",
            userid
        });
    });
}

export function getList(userid) {
    $.getJSON(api_url+"/api/getList/"+userid, function(data) {
        dispatcher.dispatch({
            type: "GET_LIST",
            list: data
        });
    });

    // fetch(api_url+"/api/getList/"+userid)
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //         dispatcher.dispatch({
    //             type: "GET_LIST",
    //             list: responseJson
    //         });
    //     })
    //     .catch((error) => {
    //         console.error(error);
    //     });
}

export function createList(userid, list_name) {
    var new_list = {userid:userid, list_name:list_name};
    $.post(api_url+"/api/createList/", new_list, function(response) {
        // console.log(response);
        getList(userid);
    });
}

export function removeList(userid, list_name) {
    var target_list = {userid:userid, list_name:list_name};
    $.post(api_url+"/api/removeList/", target_list, function(response) {
        // console.log("remove response", response);
        getList(userid);
    });
}


export function getItems(list_name) {
    $.getJSON(api_url+"/api/getItems/"+list_name, function(data) {
        // console.log("get items", data);
        dispatcher.dispatch({
            type: "GET_ITEMS",
            items: data
        });
    });
}

export function createItem(list_name, text) {
    var new_item = {list_name:list_name, text:text};
    $.post(api_url+"/api/createItem/", new_item, function(response) {
        // console.log(response);
        getItems(list_name);
    });
}

export function changeTaken(list_name, item_id) {
    var target_item = {list_name:list_name, id:item_id};
    $.post(api_url+"/api/changeTaken/", target_item, function(response) {
        // console.log(response);
        getItems(list_name);
    });
}

export function removeItem(list_name, item_id) {
    var target_item = {list_name:list_name, id:item_id};

    // $.ajax({
    //     url: api_url+"/api/deleteItem/",
    //     type: 'DELETE',
    //     success: function(response) {
    //         console.log(response);
    //         getItems(list_name);
    //     },
    //     data: target_item,
    // });

    $.post(api_url+"/api/deleteItem/", target_item, function(response) {
        // console.log(response);
        getItems(list_name);
    });
}


export function updateData(userid, list_name) {
    getList(userid);
    getItems(list_name);
}

