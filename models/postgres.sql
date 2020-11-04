-- create DB:
CREATE DATABASE vine_db;

-- go with \c to new database
CREATE TABLE product(
    todo_id SERIAL PRIMARY KEY,
    vineName VARCHAR(255),
    vinePrice VARCHAR(255),
    vineType VARCHAR(255),
    vineCountry VARCHAR(255),
    vineRate VARCHAR(255)
);

