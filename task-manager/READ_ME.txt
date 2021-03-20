Task-Manager, as the name represents ,is an application which simplifies the users 
to manage their tasks. Here the project is divided into two sections:-
1.config
    -Here all the config parameters are declared

2.src
    -This is the folder where the code is present

src folder is categorised into six sections:-
app.js
    -To avoid intricacies app.js is designed to contain only the logic that application 
     needs to use.

index.js
    -This file contains the logic to communicate with server.

db
    -This folder contains a file mongoose.js whose sole purpose is to communicate with
     the database. Here, we used mongodb as the database and for that we used existing
     library that is mongoose.

middleware
    -This folder contains a file called auth.js which is used for authentication and
     authorization of the user.
    -Instead of traditional cookies here we used java web tokens and the encryption 
     algorithm we used here is bcrypt which does hashing 8 times to increase security
     and maintain performance.

models
    -In this folder we designed models for both users and their tasks.
    -user.js:
        -This file consists the user schema design and also the functions that maintains
         JWTs and encryption.
    -task.js:
        -This file consists only the task schema design.

routers
    -router is the folder which handles all the API calls such as HTTP request and 
    responses.