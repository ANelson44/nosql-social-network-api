# NoSQL Social Network API

## Description
This Node.js application programming interface (API) allows users to perform CRUD operations on social networking data models using a NoSQL database. The models include friends, users, thoughts, and reactions. These can be retrieved by ID or all of the data at once. This is built using Node.js and Mongoose, and it provides a simple way to handle social networking data. 

## Video Demo


## Requirements
Node.js, Mongoose, MongoDB, and Express.js.

## Usage
Open documentation and run 'npm i'. Run 'npm run seed' to take advantage of seed file. Start the server by typing 'node server.js' NOTE: ensure mongoDB is running prior to this.

Open Insomnia and use the following endpoints:

**Available Endpoints**
Each endpoint must have the necessary data in the request body or URL params.

1) GET /api/users - get all users
2) GET /api/users/:userId - get a single user by ID
3) POST /api/users - create a new user
4) PUT /api/users/:userId - update a user by ID
5) DELETE /api/users/:userId - delete a user by ID
6) GET /api/thought - get all thought 
7) GET /api/thought/:thoughtId - get a single thought by ID
8) POST /api/thought - create a new thought
9) PUT /api/thought/:thoughtId - update a thought by ID
10) DELETE /api/thought/:thoughtId - delete a thought by ID
11) POST /api/thought/:thoughtId/reactions - add a reaction to a thought
12) DELETE /api/thought/:thoughtId/reactions/:reactionId - remove a reaction from a thought
13) POST /api/users/:userId/friends/:friendId - add a friend to a user's friend list
14) DELETE /api/users/:userId/friends/:friendId - remove a friend from a user's friend list


## Built With
* Dynamic JavaScript
* Node.js v20.10.0
* Express v4.17.1
* Mongoose v7.0.2
* MongoDB
* Insomnia
* NoDemon v2.0.9

## Credits
* Module 18 various activities for file structure and code inspiration.

* https://www.youtube.com/watch?v=TtLm6rTZ11I : For ideas of setting up Insomnia testing and demonstration.

## License
  N/A