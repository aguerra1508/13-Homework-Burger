/* Schema for SQL database */
DROP DATABASE IF EXISTS burgers_db;

/* Create database */
CREATE DATABASE burgers_db;
USE burgers_db;

/* Create new burgers table */
CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  burger_name VARCHAR(100) NOT NULL,
  devoured BOOLEAN DEFAULT FALSE
);