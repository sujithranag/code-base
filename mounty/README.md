## About The Project
This project is about creating, updating, reading and deleting users where all users are stored in MongoDB.

## Built With
- Node.js
- Express.js
- Mongoose

## Getting Started
Initialize the npm.
```sh
npm init -y
```
Created following files:
- ***index.js***<br />
This file contains logic related to server. Local port used here 3000 and also used express.json() which parses incoming requests with JSON payloads and is based on body-parser.
- ***router/user.js***<br />
This files has logic related to RESTAPIs which uses Router from Express.js. GET, POST, PATCH, DELETE were used here to get, create, update and delete data.
- ***model/user.js***<br />
User model such as what are neccessary, validating input and how an object should be are written here. It uses mongoose schema to model the object.
- ***db/mongoose.js***<br />
Connections and parsers related to the database which is MongoDB in our case are written here.

## Running Application
Enable database.
```sh
/mongodb/bin/mongod.exe --dbpath=/<path of your mongodb>
```

Use following command to run the application.
```sh
npm run dev
```

## Git Commands Used
```sh
git add .
git commit
git push origin master
```
