CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT NOT NULL,
    burger_name VARCHAR(150) NOT NULL,
    devoured BOOL,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name, devoured)
VALUES("Drunken Monk", FALSE);

INSERT INTO burgers (burger_name, devoured)
VALUES("Engine Oil", FALSE);

INSERT INTO burgers (burger_name, devoured)
VALUES("Along Came Danny", FALSE);