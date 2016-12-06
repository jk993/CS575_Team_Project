var request = require('request');

request.post({
    url: 'http://127.0.0.1:3000/api/removeList',
    form: {userID:"Mia", listName:"list9"}},
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }
);

// request.post({url:'http://service.com/upload', form: {key:'value'}},