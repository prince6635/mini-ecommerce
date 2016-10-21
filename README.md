# Mini Ecommerce App

## App features (mini ecommerce websites)
* Adding products
* Search
* Cart
* Authentication sign/signup and Facebook Login
* Payment

## Components
* URL (Backend code) <=> Node.js + express
* Database operation <=> MongoDB + mongoose
* Frontend code <=> HTML/CSS/JQuery

## Tech stack
* Node.js (Express)
* EJS: server-side rendering
* MongoDB
* ElasticSearch: search/query component
* Stripe: payments

## Tools
* [Git](https://git-scm.com/download/mac) and Github
* nodemon ($ sudo npm install nodemon -g) - no need to restart after changes
* [MongoLab](https://mlab.com/) - run MongoDB on cloud
* Postman - test POST api

## Steps
* Create a Node.js web App

```
1, $ npm init
    change entry point from (index.js) to server.js
2, create server.js under root
    $ npm install express --save (--save will save dependency to package.json)
    $ nodemon server
3, add the home route
    var app = express();
    app.get(..., function(req, res){
        ...
    });
4, add logging info
    $ npm install morgan --save
    app.use(morgan('dev'));
    Console output:
        GET / 304 2.121 ms - -
        GET /health 200 0.463 ms - 4
```

* Add Database
    * mongoose: ORM

    ```
    1, $ npm install mongoose bcrypt-nodejs --save
    2, add models/user.js for User schema
    3, create a MongoDB instance on mLab.com
        - AWS->Single node->Sandbox->name: miniecommerce
        - create a database user: root
        - copy the database url and paste it to server.js (remember to change username and password)
    4, add it to server.js
        mongoose.connect(...);
    5, add user-create route
        body-parser: parse request body and convert to the format that server needs, also take multi-part bodies (such as image/file upload)
        $ npm install body-parser --save
        var User = require('./models/user');
        app.post('/create-user', ...);
    ```

## TODO
https://www.udemy.com/build-an-amazon-clone-nodejs-stripe-elasticsearch/learn/v4/t/lecture/4304808
