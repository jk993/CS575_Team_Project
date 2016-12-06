var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");

var app = express();
var urlencodeParser = bodyParser.urlencoded({ extended: false });

app.use(express.static(__dirname));
app.get('/', function(req, res) {
    res.end("On index page");
});

app.post("/api/login", urlencodeParser, function(req, res) {
    var userName = req.body.name;
    var userData = require("./users.json");
    if (userData[userName] == null){
        userData[userName] = {"name":userName, "list":[]};
        console.log(userData);
        fs.writeFile('users.json', JSON.stringify(userData), function (err) {
            if (err) return console.log(err);
            console.log("written to > users.json");
            res.json({"message":"created username " + userName});
        });
    } else {
        res.json({"message":"user " + userName + " logged in"});
    }
});

app.get("/api/getList/:userName", function(req, res) {
    var userData = require("./users.json");
    console.log(userData);
    var userName = req.params.userName;
    res.json(userData[userName]["lists"]);
});

app.post("/api/createList", urlencodeParser, function(req, res) {
    var userName = req.body.userID;
    var listName = req.body.listName;
    var listData = require("./lists.json");
    var userData = require("./users.json");

    if(listData[listName] == null) {
        listData[listName] = {"name": listName, "items": []};
        console.log(listData);
        fs.writeFile('lists.json', JSON.stringify(listData), function (err) {
            if (err) return console.log(err);
            console.log("written to > lists.json");
            res.end(JSON.stringify({"message":"created list " + listName}));
        });
    } else {
        res.end(JSON.stringify({"message": "list name is already taken"}));
    }

    if(userData[userName]["lists"].indexOf(listName) < 0) {
        userData[userName]["lists"].push(listName);
        console.log(userData);
        fs.writeFile('users.json', JSON.stringify(userData), function (err) {
            if (err) return console.log(err);
            console.log("written to > lists.json");
            res.end(JSON.stringify({"message":"add list " + listName + " to user " + userName}));
        });
    } else {
        res.end(JSON.stringify({"message": "list is assigned to user already"}));
    }

    res.end(JSON.stringify({"message":"created new list " + listName}));
});

app.post("/api/removeList", urlencodeParser, function(req, res) {
    var userName = req.body.userID;
    var listName = req.body.listName;
    var userData = require("./users.json");

    userData[userName]["lists"] = userData[userName]["lists"].filter(function(data, index) {
        return data != listName;
    });
    fs.writeFile('users.json', JSON.stringify(userData), function (err) {
        if (err) return console.log(err);
        console.log("written to > lists.json");
        res.json({"message":"removed list " + listName + " from " + userName});
    });
});


app.get("/api/getItems/:listName", function(req, res) {
    var listName = req.params.listName;
    var listData = require("./lists.json");
    res.json(listData[listName]["items"]);
});

app.post("/api/createItem", urlencodeParser, function(req, res) {
    var list_name = req.body.list_name;


    Data.list_info[list_name].push(new_item);

    res.json({"message":"created new item " + new_item.text + " in list " + list_name});
});

app.post("/api/deleteItem", urlencodeParser, function(req, res) {
    var list_name = req.body.list_name;
    var id = req.body.id;

    Data.list_info[list_name] = Data.list_info[list_name].filter(function(data, index) {
        return data.id != id;
    });

    res.json({"message":"remove item"});
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


var port_num = 3000;
app.listen(port_num, function() {
    console.log("Server running on port %s", port_num);
});

