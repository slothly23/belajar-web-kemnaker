CREATE DATABASE IF NOT exists movies_db_mySQL_JWT_NB4;
USE movies_db_mySQL_JWT_NB4;

CREATE TABLE IF NOT EXISTS users (
id INT AUTO_INCREMENT PRIMARY KEY,
email VARCHAR(255) NOT NULL UNIQUE,
name varchar(255),
password VARCHAR(255) NOT NULL,
createdAt datetime default current_timestamp,
updatedAt datetime default current_timestamp ON update current_timestamp
);

CREATE TABLE IF NOT EXISTS categories (
id INT AUTO_INCREMENT PRIMARY KEY,
name varchar(255) NOT NULL,
description TEXT,
createdAt datetime default current_timestamp,
updatedAt datetime default current_timestamp ON update current_timestamp,
userId INT,
constraint fk_categories_user foreign key (userId) references users(id) on delete set null
);

CREATE TABLE IF NOT exists movies (
id INT AUTO_INCREMENT PRIMARY KEY,
title varchar(255) NOT NULL,
year INT,
createdAt datetime default current_timestamp,
updatedAt datetime default current_timestamp ON update current_timestamp,
categoryId INT,
userId INT,
constraint fk_movies_categories foreign key (categoryId ) references categories(id) on delete set null,
constraint fk_movies_user foreign key (userId ) references users(id) on delete set null
);