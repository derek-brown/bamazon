var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;

  menu();
});

function menu(){
	connection.query("SELECT * FROM products", function(err, result){	
		if (err) throw err;

		inquirer.prompt([
		{
			name: "menu",
			type: "list",
			message: "Greetings, Manager! What would you like to do?",
			choices: ["View Products", "View Low Inventory"]
		}
		]).then(function(response){

			if(response.menu === "View Products"){

				for(var i=0; i<result.length; i++){
	        console.log("Product ID: " + result[i].item_id + "\n" +
	        "Product Name: " + result[i].product_name + "\n" +
	        "Department: " + result[i].department_name + "\n" +
	        "Price: " + result[i].item_price + "\n" +
	        "Amount Left: " + result[i].stock_quantity);
	        console.log("-----------------------");		    
				}
				//Add another inquirer to prompt if the manager would like to add a new item or return to main menu*
				connection.end();

			}else{
				console.log("Hell no!");
				//Add another inquirer to prompt if the manager would like to add to the inventory or return to the main menu*
				connection.end();
			}
		});
	});
}

//What each option should do

// If a manager selects View Products for Sale, the app should list every available item: the item IDs, names, prices, and quantities.

// If a manager selects View Low Inventory, then it should list all items with an inventory count lower than five.

// If a manager selects Add to Inventory, your app should display a prompt that will let the manager "add more" of any item currently in the store.

// If a manager selects Add New Product, it should allow the manager to add a completely new product to the store.