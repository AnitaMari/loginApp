# Welcome to this Repo

This project was done using React as the client in the frontend and Node.js/Express in the backend. I used MySQL to create the database.

It's still in progress.

# Dependencies and Development
Go to the project directory (cd loginApp). Run:
### `npm install`
### `npm start`
This will install server-related dependencies such as express and will start running it.

Then, go to the client folder and run those two commands in that folder too. This will install client dependencies (React) and will start/run the project on the browser.

# Database Prep: 
Access the MySQL interface in your terminal by running: 
### `mysql -u root -p`

Create a new database and call it as it is written in the model folder (see this file: database.js): ### `create database xxxxxx`

Add a .env file to the project folder of this repository containing the MySQL authentication information for MySQL user. For example:
DB_HOST=localhost
DB_NAME=xxxxxx
DB_USER=root
DB_PASS=root

In the project folder, run this command in a new terminal window. This will create the tables you need in your database:
### `npm run migrate` 

Make sure you understand how each table is constructed. In your MySQL console, you can run these commands to start using the database, see the tables, see their structure, and see the elements that are on it.:
### `use xxxxxx;`
### `show tables;` 
### `describe xxxxxx;`
### `select * from xxxxxx;`

