
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  username varchar(20)

);

CREATE TABLE messages (
  /* Describe your table here. varchar(20)*/
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  -- user_id INTEGER,
  username varchar(20),
  message varchar(260)
  -- FOREIGN KEY(user_id) REFERENCES users(id)

);

/* Create other tables and define schemas for them here! */


/*DROP DATABASE IF EXISTS chat;*/

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

