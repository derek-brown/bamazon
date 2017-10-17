DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT PRIMARY KEY NOT NULL,
    product_name VARCHAR(50),
    department_name VARCHAR(50),
    item_price FLOAT,
    stock_quantity INTEGER(11)
);

INSERT INTO products (product_name, department_name, item_price, stock_quantity) VALUES ("carabiner", "climbing", 27.00, 20);
INSERT INTO products (product_name, department_name, item_price, stock_quantity) VALUES ("ATC", "climbing", 15.00, 20);
INSERT INTO products (product_name, department_name, item_price, stock_quantity) VALUES ("Harry Potter", "Novel", 12.00, 50);
INSERT INTO products (product_name, department_name, item_price, stock_quantity) VALUES ("Lord of the Rings", "Novel", 13.00, 30);
INSERT INTO products (product_name, department_name, item_price, stock_quantity) VALUES ("Spider-Man: Homecoming", "Movie", 22.00, 100);
INSERT INTO products (product_name, department_name, item_price, stock_quantity) VALUES ("La La Land", "Movie", 18.00, 25);
INSERT INTO products (product_name, department_name, item_price, stock_quantity) VALUES ("Running Shoes", "Shoes", 155.00, 15);
INSERT INTO products (product_name, department_name, item_price, stock_quantity) VALUES ("Climbing Shoes", "Shoes", 175.00, 7);
INSERT INTO products (product_name, department_name, item_price, stock_quantity) VALUES ("MacBook Pro", "Computer", 1500.00, 10);
INSERT INTO products (product_name, department_name, item_price, stock_quantity) VALUES ("Dell XPS", "Computer", 1200.00, 15);