var mysql = require("mysql");
var inquirer = require("inquirer");
var productAmt, selectedProduct, productPrice;

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "root",
  database: "bamazon"
});

connection.connect(function(err) {
  if (err) throw err;

  itemList();
});


function itemList(){
	connection.query("SELECT * FROM products", function(err, result){
	if (err) throw err;

  	inquirer.prompt([
    {
      name: "greeting",
      type: "inqut",
      message: "Welcome!"
    }
    ]).then(function(response){
      for(var i=0; i<result.length; i++){
        console.log("Product ID: " + result[i].item_id + "\n" +
        "Product Name: " + result[i].product_name + "\n" +
        "Department: " + result[i].department_name + "\n" +
        "Price: " + result[i].item_price + "\n" +
        "Amount Left: " + result[i].stock_quantity);
        console.log("-----------------------");
      }
      purchaseItem(result);
    });
	});
}

function purchaseItem(result){
   inquirer.prompt([
  {
    name: "selection",
    type: "input",
    message: "From the list above, please enter the ID of the item you would like to purchase."
  },
  {
    name: "amount",
    type: "input",
    message: "How many would you like to purchase?"
  }
  ]).then(function(response){

    for(var j=0; j<result.length; j++){
      if(parseInt(response.selection) === result[j].item_id){
        console.log("You have selected the them " + result[j].product_name + "!");
        productAmt = result[j].stock_quantity;
        selectedProduct = result[j].product_name;
        productPrice = result[j].item_price;
      }
    }
    if(productAmt-5 > response.amount){
      console.log("We have plenty in stock to meet your order!");
      var calculateStock = productAmt-response.amount;
      connection.query("UPDATE products SET stock_quantity = ? WHERE item_id = ?", [calculateStock, parseInt(response.selection)], function(err, result){
          if (err) throw err;
          console.log("Congradulations! You spent $" + response.amount * productPrice + ".00 on " + selectedProduct + ". Thank you and come again!");
        }
      );
      connection.end();
    }else{
      console.log("Sorry! We don't have enough " + selectedProduct + ". Please choose another item!");
      purchaseItem(result);
    }
  });
}


 
