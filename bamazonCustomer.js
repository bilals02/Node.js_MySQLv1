var mysql = require("mysql");
var inquirer = require("inquirer");


var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "bilal2018",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);

  connection.query("SELECT * FROM products", function(err, response){
    var data=response;

    for (i=0;i<data.length;i++){
        console.log("\nITEM FOR SALE:");
        console.log("------------");
        console.log("Item ID: " + data[i].item_id);
        console.log("Product Name: " + data[i].product_name);
        console.log("Department Name: " + data[i].price);
        console.log("Stock Qty: " + data[i].stock_quantity);
    }


    if(err) throw err;
});


connection.end();


function findProduct() {
    inquirer
      .prompt({
        name: "product",
        type: "input",
        message: "What artist would you like to search for?"
      })
      .then(function(answer) {
        var query = "SELECT position, song, year FROM top5000 WHERE ?";
        connection.query(query, { artist: answer.artist }, function(err, res) {
          for (var i = 0; i < res.length; i++) {
            console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
          }
          runSearch();
        });
      });
  }

});
