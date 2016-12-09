var chai = require("chai");
var testDB = require("../testDB.js");

describe('testDB', function() {
    it('checkUserid true', function() {
        chai.expect(testDB.checkUserid("user1")).to.be.true;
    });

    it('checkUserid false', function() {
        chai.expect(testDB.checkUserid("no")).to.be.false;
    });

    it('createUserid true', function() {
        chai.expect(testDB.createUserid("new_id")).to.be.true;
    });

    it('createUserid false', function() {
        chai.expect(testDB.createUserid("user1")).to.be.false;
    });

    it('getList ', function() {
        chai.expect(testDB.getList("user1").length == 3).to.be.true;
    });

    it('createList', function() {
        chai.expect(testDB.createList("user1", "list4")).to.be.true;
    });

    it('removeList', function() {
        chai.expect(testDB.removeList("user1", "list4")).to.be.true;
    });

    it('createItem', function() {
        chai.expect(testDB.createItem("list1", "hello")).to.be.true;
    });
});

