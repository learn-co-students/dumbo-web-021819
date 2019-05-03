# React Authentication

### Let's talk about how we did it in Ruby on Rails

- What were some of the tools we used?
- What was the flow we followed for Login?
- What was the flow we used for Sign up?

This authentication scheme is known as Session-based Basic Authentication

### JWT
As we move to React, another authentication scheme that we are going to use is
Token Based with JSON Web Tokens (JWT) -- pronounced *jawt*. This tool allows us
to encrypt data and be able to said it as necessary. We will use it to verify that
the person is authorized into our application.

Here is the [link to how the tool works](https://jwt.io/). Remember the parts that
makes a JWT is (the payload, the secret, and the algorithm we use).

The flow of how our application should be with log in:
- 1) The user goes to the frontend (`/login`)
- 2) The user fills out the login form and submits it which sends a request to the backend
- 3) The backend needs to figure out if this user exists and that they are authenticated
- 4) If they submit the correct information it should redirect them to the frontend's `/users` route

The flow of our sign up
- 1) The user will go to the frontend (`/signup`)
- 2) The user fills out the signup for and submits it which sends a request to the backend
- 3) The backend needs to confirm the data is valid and then send over the user and also the token
- 4) We should redirect to the rest of our app

The flow of reauth
- 1) When the app component mounts, we check if their is a token
- 2) If there is a token, we make our fetch request to get the current user
- 3) If there isn't, we will move them to another route
