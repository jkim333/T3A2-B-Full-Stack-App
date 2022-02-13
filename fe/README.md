
- **Description and purpose:** 

The app our team will build is a fitness tracking app for athletes and workout enthusiasts. The purpose of the app is to help users to log their fitness performance for a variety of exercises including weight lifting, running and cycling. This app can help users set their fitness goals and track their performance over time.

- **Functionality / features:**

    1. User signup. A user enters their username, email, password, age, weight, height, and optionally their profile picture when signing up.
    2. User login. A user enter their email or username, and password to login.
    3. User signout.
    4. Select an exercise. A user can select their exercise that they want to keep track of.
    5. Exercise log entry. After a user selects their exercise, they can enter in the specific details of their exercise (e.g. weight and reps).

- **Target audience:** 

The target audience is anyone that wants to track their fitness.

- **Tech stack:** 

The technology stack used for this project is known as the MERN stack, which consists of MongoDB, ExpressJS, React, and NodeJS.



## Application Architecture Diagram

The technology stack used for this project is known as the MERN stack, which consists of MongoDB, ExpressJS, React, and NodeJS.

Our application will be fronted by a React app which will be accessed by the users directly. The React app will serve as the frontend, to provide the user interface and interaction with the users. The users will not be allowed to access the backend web server and database directly for security reasons. The React app will be hosted on Netlify.

Our backend web server consists of NodeJS and ExpressJS. ExpressJS is a web framework that runs on top of NodeJS to create a web server. Therefore, NodeJS and ExpressJS will work together to operate as a web server and respond to HTTP requests. NodeJS and ExpressJS will set up a backend REST API server to communicate with the React app. Our backend web server will be containerised using Docker, and will be hosted on AWS Elastic Container Service (ECS).

MongoDB is used as the database to allow for persistent storage of data. It is the responsibility of NodeJS and ExpressJS to communicate with MongoDB. The frontend React app should not talk to the database as it is not a secure practice. MongoDB will be hosted on MongoDB Atlas.

Mongoose is an Object Data Modelling library for MongoDB, which allows developers to enforce schema for MongoDB at the NodeJS application layer and provides tools and features to make it easier to work with mongoDB. Mongoose will be used to communicate with the MongoDB database.

In summary, MongoDB is responsible as a database, ExpressJS and NodeJS are responsible as a backend web server, and React is responsible as a frontend app to interact with the users.







