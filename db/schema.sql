CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(150) NOT NULL,
    devoured BOOL,
    PRIMARY KEY (id)
);