DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100),
    price DECIMAL (10,4) NOT NULL,
    stock_quantity INT
)

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Baseball Bat", "Sports",'25.00','20');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Baseball Hat", "Sports Apparel",'15.00','10');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Basketball", "Sports",'35.00','25');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Basketball Jersey", "Sports Apparel",'15.99','24');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Hockey Puck", "Sports",'10.99','12');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Hockey Stick", "Sports",'100.99','20');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Football", "Sports",'49.99','50');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Football Jersey", "Sports Apparel",'52.99','30');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Badminton Raquet", "Sports",'150.99','12');

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES("Badminton Shuttlecock, 12pk", "Sports",'20.00','20');








