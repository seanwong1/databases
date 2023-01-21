
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  username varchar(20)

);

CREATE TABLE messages (
  /* Describe your table here. varchar(20)*/
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  message varchar(260),
  username varchar(20),
  user_id INTEGER,
  FOREIGN KEY(user_id) REFERENCES users(id)

);
insert into users (username) values('jake'), ('josh'), ('jack');

insert into messages (message, username, user_id) values ('Hello, World!', 'jake', 1 ), ('Goodbye, World!', 'josh', 2)
/* Create other tables and define schemas for them here! */


/*DROP DATABASE IF EXISTS chat;*/

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

