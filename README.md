# login & register backend with javascript
<<<<<<< HEAD

=======
>>>>>>> deac5a8 (Update README.md)
#### this is what i do when starting ####
```
mkdir backend
cd backend
npm init
npm install express mysql2 sequelize jsonwebtoken dotenv bcrypt cookie-parser cors
```
#### Initiation for the first clone ####
```
git clone https://github.com/RidhaAkmal/backend-login-and-register.git
npm Install
```

#### for local / developing environment ####
```
npm install -G nodemon
nodemon index
```

#### The explaination for Dependencies ####
Check `package.json`
+ bcrypt : 5.0.1
Password Hashing
+ cookie-parser : 1.4.6
Parse a cookie to be use by other middleware
+ cors : 2.8.5
Cross-Origin Resource Sharing to providing a connect middleware
+ dotenv : 16.0.1
to load an environment variable from `.env`
+ express : 4.18.1
Nodejs web framework to provide a robust set of features, a backend microservice framework
+ jsonwebtoken : 8.5.1
squence of url-safe that contains a base64Url
+ mysql2 : 2.3.3
Continuation of mysql-native have a join resource with mysqljs
+ sequelize : 6.21.3
Modern Typescript & nodejs for DBMS manipulation

#### development environment ####
`.env` is for helping us to test a user connection with JWT, it what dotenv dependency is working with

`request.rest` is for testing an http request, just like insomnia and postman
<<<<<<< HEAD
just dont forget to install `REST Client` plugin on VS Code
=======
just dont forget to install `REST Client` plugin on VS Code
>>>>>>> 50fcf29 (Update README.md)
