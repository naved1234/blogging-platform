# Blogging Platform API

API backend for a blogging platform built with Node.js, Express, and PostgreSQL using Sequelize ORM. The API supports user authentication, role-based access control, CRUD operations for posts, input validation, and sanitization. It includes Swagger-based API documentation, logging, rate limiting, and testing capabilities.

## Table of Contents
- [Features](#features)
- [Technologies](#technologies)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [API Documentation](#api-documentation)
- [Testing](#testing)
- [Security Considerations](#security-considerations)
- [License](#license)

## Features
- **User Authentication**: User registration and login using JWT.
- **Role-Based Access Control**: Roles include `reader`, `writer`, and `admin`.
- **CRUD Operations for Posts**: Create, read, update, and delete blog posts.
- **Pagination & Filtering**: Retrieve posts with pagination and filter by author or creation date.
- **Input Validation & Sanitization**: Uses `express-validator` and `xss-clean`.
- **Rate Limiting**: Prevents abuse by limiting the number of API requests.
- **Centralized Error Handling**: Custom error messages with proper status codes.
- **Logging**: Implements `winston` for request and error logging.
- **Swagger Documentation**: Detailed API documentation.
- **Testing**: Automated tests using Jest and Supertest.

## Technologies
- **Node.js**: JavaScript runtime.
- **Express**: Web framework.
- **Sequelize**: ORM for database interactions.
- **PostgreSQL**: Database for storing user and post data.
- **JWT**: JSON Web Tokens for authentication.
- **Jest** and **Supertest**: Testing framework and HTTP assertions.
- **Swagger**: API documentation.

## Project Structure
blogging-platform/ ├── config/ # Configuration files (DB, Swagger) ├── controllers/ # Request handlers (auth, post) ├── middlewares/ # Custom middleware (auth, validation, rate limiting, etc.) ├── models/ # Sequelize models (User, Post) ├── routes/ # Route definitions (auth, posts) ├── services/ # Business logic (auth, post) ├── utils/ # Utility functions (pagination, response, etc.) ├── validations/ # Input validation schemas ├── tests/ # Automated test cases ├── .env # Environment variables ├── .env.example # Example environment variables ├── Dockerfile # Docker configuration ├── docker-compose.yml # Docker Compose configuration ├── README.md # Project documentation ├── app.js # Application setup and middleware └── server.js # Server setup and initialization


## Prerequisites
- **Node.js**: v14.x or higher
- **npm**: v6.x or higher
- **PostgreSQL**: v12.x or higher
- **Docker** (optional): For containerized deployment
