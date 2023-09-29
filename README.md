[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/yZWC7OmO)


## Cara Install

#### 1. Install Dependencies
```
npm install
```

#### 2. Import Database
Import database in folder `db` to your database server

#### 3. Copy .env.example or rename the .env.example file to .env
```
cp .env.example .env
```
Edit the configuration inside .env, for example:
- DB_HOST=127.0.0.1
- DB_NAME=learn4u
- DB_PORT=3306

In the example above we create database named learn4u which runs on Localhost (127.0.0.1) on port 3306

#### 4. Run the server
```
npm run dev
```
