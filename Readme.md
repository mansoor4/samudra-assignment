# Project Title
Samudra Assignment

# Setup
1. Clone this git repository.

2. Run command `npm install` to install project dependencies.

3. Run command `npm start` to start the server at PORT 3000.

# Usage
1. Login functionality

* Send request on URL `http://localhost:3000/auth/login` Method `POST`.
*  Request body should contain `username` and `password`.
* It returns sign `JWT Token` which further uses for authorization.

2. Update json object using json patch object

* Send request on URL `http://localhost:3000/convertJson` Method `PATCH`.
* Request body should contain `json` memeber which is `json object` and `jsonPatch` member which is `json patch object`.
* It returns updated json object.

3. Resize Thumbail

* Send request on URL `http://localhost:3000/resizeThumbnail` Method `get`
* URL Query should contain `imageUrl` which is URL of thumbnail and `imageExt` which is extension type of thumbnail such `jpg` `png` `jpeg` like that.
* It returns thumbail by resizing it to 50x50.

4. Create user

* Send request on URL `http://localhost:3000/user/create` Method `POST`.
* Request body should contain `firstName` `lastName` `address` `email` `username`.
* It create user and add it into the database.
