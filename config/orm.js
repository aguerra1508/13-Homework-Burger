//Requirements
var connection = require("./connection.js");

//ORM
var orm = {
    //Select all burgers in table
    selectAll: function (tableData, cb) {
        var queryString = "SELECT * FROM " + tableData + ";";
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res)
        });
    },
    //Insert new burger into table
    insertOne: function (newBurger, cb) {
        var queryString = "INSERT INTO burgers (burgers_name) SET ?";
        connection.query(queryString, newBurger, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    //Update burger in table
    updateOne: function (burgersId, cb) {
        var queryString = "UPDATE burgers SET devoured = true WHERE id = " + burgersId + ";";
        connection.query(queryString, function (err, res) {
            if (err) throw err;
            cb(res);
        });
    },
}

// Export orm 
module.exports = orm;