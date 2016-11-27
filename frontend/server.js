var express = require("express");
var bodyParser = require("body-parser");


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


var app = express();
var urlencodeParser = bodyParser.urlencoded({ extended: false });

app.use(express.static(__dirname + "/src"));
app.get('/', function(req, res) {
    res.sendFile("index.html");
});


app.get("/api/getList/:user_name", function(req, res) {
    res.json(Data.user_info[req.params.user_name]);
});

app.post("/api/createList", urlencodeParser, function(req, res) {
    var userid = req.body.userid;
    var list_name = req.body.list_name;

    if(Data.list_info[list_name] == null)
        Data.list_info[list_name] = [];
    Data.user_info[userid].push(list_name);
    
    res.json({"message":"created new list " + list_name});
});



app.get("/api/getItems/:list_name", function(req, res) {
    res.json(Data.list_info[req.params.list_name]);
});

app.post("/api/createItem", urlencodeParser, function(req, res) {
    var list_name = req.body.list_name;
    var new_item = {
        id: Date.now(),
        text: req.body.text,
        taken: false
    };

    Data.list_info[list_name].push(new_item);
    
    res.json({"message":"created new item " + new_item.text + " in list " + list_name});
});

app.post("/api/changeTaken", urlencodeParser, function(req, res) {
    var list_name = req.body.list_name;
    var id = req.body.id;

    Data.list_info[list_name].filter(function(data, index) {
        if(data.id == id) {
            data.taken = !data.taken;
        }
    });

    res.json({"message":"change taken"});
});

app.post("/api/deleteItem", urlencodeParser, function(req, res) {
    var list_name = req.body.list_name;
    var id = req.body.id;

    Data.list_info[list_name] = Data.list_info[list_name].filter(function(data, index) {
        return data.id != id;
    });

    res.json({"message":"remove item"});
});


var port_num = 3000;
app.listen(port_num, function() {
    console.log("Server running on port %s", port_num);
});

