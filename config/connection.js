let mysql = require("mysql");
let connection; 


if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
});
};

connection.connect(function(err) {
    if (err) {
        console.error("Error Connecting!!!! " + err.stack);
        return;
    }
    console.log("Connected as ID: " + connection.threadId);


});

module.exports = connection; 

