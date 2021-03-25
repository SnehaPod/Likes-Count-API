# This repository holds a Nodejs application consisting of 2 APIs:

1. An API which returns the count of likes on a post by each user, and

2. An API which returns count of likes on a post for a user whose User ID is specified in URL params.

# Steps to get this working:

1. Clone the repository

2. Run npm install on the terminal while inside the repository's directory

3. Connect to a MongoDB database, and set process.env.MONGO_URI as your URI.

4. Push the dataset provided in /assets/Posts.json into your "Post" collection.

5. Run npm start or nodemon (if you have nodemon installed locally)

6. Hit the following URLs on Postman to test the API after your server is up and running:

i) http://localhost:8082/api/total-like-count (GET)
ii) http://localhost:8082/api/total-like-count/001 (GET)