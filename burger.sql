DROP DATABASE IF EXISTS burgersDB;

CREATE DATABASE burgersDB;

USE burgersDB;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30) NULL,
    devoured BOOLEAN DEFAULT FALSE,
    createdAt TIMESTAMP,
    PRIMARY KEY (id)
);

