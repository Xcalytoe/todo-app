# Todo App (EJS + Express + MongoDB + passport-jwt)

## About

This is a hands-on backend learning project: a Todo application built with Express and EJS for server-rendered pages, MongoDB for data persistence, and `passport-jwt` for stateless authentication. It demonstrates routing, view templating, authentication with JWT, CRUD operations, validation, and basic error handling.

## Features

- Server-rendered UI using EJS templates
- User registration & login with JWT (passport-jwt)
- Create, read, update, delete (CRUD) todos per user
- Protected routes (only authenticated users can manage their todos)
- Input validation and simple flash-style messages
- Local development setup with MongoDB (local or Atlas)

## Tech stack

- Node.js, Express
- EJS (templating)
- MongoDB (mongoose)
- passport + passport-jwt (authentication)
- dotenv (config)
- bcrypt (password hashing)

## Environment variables

Create a `.env` file with:
