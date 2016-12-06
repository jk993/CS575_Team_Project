var request = require('request');

request.post({
    url: 'http://127.0.0.1:3000/api/changeTaken',
    form: {listName:"list1", itemName:"milk"}},
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }
);
