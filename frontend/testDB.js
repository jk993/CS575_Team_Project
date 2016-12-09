var Data = {
    user_info:  {
        user1: ["list1", "list2", "list3"],
        user2: ["list2", "list3", "list4", "list5"],
        user3: ["list3", "list5"]
    },

    list_info: {
        list1: [
            {id: 1, text: "todo11", taken: false},
            {id: 2, text: "todo12", taken: false},
            {id: 3, text: "todo13", taken: false}
        ],
        list2: [
            {id: 1, text: "todo21", taken: false},
            {id: 2, text: "todo22", taken: false},
            {id: 3, text: "todo23", taken: true},
            {id: 4, text: "todo24", taken: true}
        ],
        list3: [
            {id: 1, text: "todo31", taken: false},
            {id: 2, text: "todo32", taken: true},
            {id: 3, text: "todo33", taken: true}
        ],
        list4: [
            {id: 1, text: "todo41", taken: true},
            {id: 2, text: "todo42", taken: false},
            {id: 3, text: "todo43", taken: true}
        ],
        list5: [
            {id: 1, text: "todo51", taken: false},
            {id: 2, text: "todo52", taken: false},
            {id: 3, text: "todo53", taken: true},
            {id: 4, text: "todo54", taken: false},
            {id: 5, text: "todo55", taken: true},
            {id: 6, text: "todo56", taken: true},
            {id: 7, text: "todo57", taken: true},
            {id: 8, text: "todo58", taken: true}
        ]
    }
}

module.exports = {
    checkUserid: function(userid) {
        if(Data.user_info[userid] == null) {
            return false;
        }
        return true;
    },

    createUserid: function(userid) {
        if(!this.checkUserid(userid)) {
            Data.user_info[userid] = [];
            return true;
        }
        return false;
    },

    getList: function(userid) {
        return Data.user_info[userid];
    },
    
    createList: function(userid, list_name) {
        if(Data.list_info[list_name] == null)
            Data.list_info[list_name] = [];
        Data.user_info[userid].push(list_name);
        return true;
    },

    removeList: function(userid, list_name) {
        Data.user_info[userid] = Data.user_info[userid].filter(function(data, index) {
            return data != list_name;
        });
        return true;
    },

    getItems: function(list_name) {
        return Data.list_info[list_name];
    },

    createItem: function(list_name, item_value) {
        var new_item = {
            id: Date.now(),
            text: item_value,
            taken: false
        };
        Data.list_info[list_name].push(new_item);

        return true;
    },

    removeItem: function(list_name, itemid) {
        Data.list_info[list_name] = Data.list_info[list_name].filter(function(data, index) {
            return data.id != itemid;
        });

        return true;
    },

    changeTaken: function(list_name, itemid) {
        Data.list_info[list_name].filter(function(data, index) {
            if(data.id == itemid) {
                data.taken = !data.taken;
            }
        });

        return true;
    }
};

