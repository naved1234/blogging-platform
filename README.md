# blogging-platform
API backend for a blogging platform
Blogging Platform API
This is a RESTful API for a blogging platform built with Node.js, Express, and PostgreSQL using Sequelize ORM. The API allows users to register, log in, create, update, delete, and retrieve blog posts. It also implements JWT-based authentication, role-based access control, input validation, and sanitization.

Table of Contents
Features
Technologies
Prerequisites
Getting Started
Project Structure
Environment Variables
Scripts
API Documentation
Testing
Security Considerations
Future Enhancements

Features

User Authentication: Register and log in with username and password.
JWT-based Authentication: Uses JWT tokens for secure user sessions.
Role-Based Access Control: Supports reader, writer, and admin roles.
CRUD Operations for Posts: Create, read, update, and delete blog posts.
Pagination and Filtering: Pagination for posts and filtering by author and creation date.
Input Validation and Sanitization: Uses express-validator to validate and sanitize user inputs.
Rate Limiting: Prevents excessive requests to the API.
Error Handling: Centralized error handling for consistent API responses.
API Documentation: Includes API documentation with Swagger.
Testing: Includes automated tests using Jest and Supertest.
Environment Configurations: Supports different configurations for development, testing, and production.

Technologies
Node.js: JavaScript runtime for building the backend.
Express: Web framework for building the API.
Sequelize: ORM for interacting with the PostgreSQL database.
PostgreSQL: Database to store users and posts.
JWT: JSON Web Token for authentication.
Jest and Supertest: Testing framework and HTTP assertions.
Swagger: For API documentation.

Prerequisites
Node.js: v14.x or higher
npm: v6.x or higher
PostgreSQL: v12.x or higher

Getting Started
Clone the Repository

git clone https://github.com/your-username/blogging-platform-api.git
cd blogging-platform-api

Install Dependencies

npm install

Set Up Environment Variables
Create a .env file in the root directory and configure the environment variables. You can use .env.example as a reference.

PORT=5000
DB_HOST=localhost
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=blogging_platform
JWT_SECRET=your_secret_key
JWT_EXPIRATION=1h

Database Setup
Make sure PostgreSQL is running. Then, run the following command to create and migrate the database:

npm sequelize-cli db:migrate

Start the Application
For Development:

npm run dev

For Production:

npm start
The API will be available at http://localhost:5000.

Project Structure

blogging-platform/
├── config/
├── controllers/
├── middlewares/
├── models/
├── routes/
├── services/
├── utils/
├── validations/
├── tests/
├── .env
├── .env.example
├── Dockerfile
├── docker-compose.yml
├── README.md
├── app.js
└── server.js
Environment Variables
The application uses environment variables for configuration. Here is a brief explanation of each variable:

PORT: The port on which the server will run.
DB_HOST: Database host (e.g., localhost).
DB_USER: Database user name.
DB_PASSWORD: Database user password.
DB_NAME: Name of the PostgreSQL database.
JWT_SECRET: Secret key for signing JWTs.
JWT_EXPIRATION: Token expiration time (e.g., 1h for 1 hour).

Scripts
npm start: Starts the application in production mode.
npm run dev: Starts the application in development mode using nodemon.
npm test: Runs the test suite using Jest.
npm run migrate: Runs database migrations.
npm run swagger: Serves the Swagger API documentation.


API Documentation
API documentation is provided using Swagger. Once the server is running, you can access the documentation at:

http://localhost:5000/api-docs
Testing
This project uses Jest and Supertest for testing.

Running Tests
To run all the test cases, use:

npm test
The test suite includes:

Auth Tests: Registration, login, and authentication.
Post Tests: CRUD operations, validation, and authorization.

Security Considerations
Input Sanitization: Prevents XSS attacks by sanitizing inputs.
Rate Limiting: Uses middleware to limit the number of API requests.
Environment Variables: Secrets and sensitive information are stored in environment variables.
JWT: Implements token expiration and revocation for session security.