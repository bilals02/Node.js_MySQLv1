//require mysql and inquirer
var mysql = require('mysql');
var inquirer = require('inquirer');

//create connection to db
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "bilal2018",
  database: "bamazon"
})

function start(){
//List all menu items
inquirer.prompt([
    {
    type: input,
    name: menu,
    message: "Please select a number from the menu below: \n" + "1 = View Products for Sale\n" + "2 = View Low Inventory\n" +  "3 = Add to Inventory\n" + "4 = Add New Product",
    validate: function (value){
        if (NaN(value)) {
            return false;
        }else{
            return true;
        }
    }
}
    ]).then(function(ans){
        var selectedMenuItem = ans.menu;

        console.log("selectedMenuItem: " + selectedMenuItem);
        }

})

