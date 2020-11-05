-- create DB:
CREATE DATABASE vine_db;

-- go with \c to new database
CREATE TABLE product(
    vine_id SERIAL PRIMARY KEY,
    vineName VARCHAR(255),
    vinePrice VARCHAR(255),
    vineType VARCHAR(255),
    vineCountry VARCHAR(255),
    vineRate VARCHAR(255)
);

--
CREATE TABLE vine_user(
    us_id SERIAL PRIMARY KEY,
    us_name VARCHAR(255),
    us_password VARCHAR(255)
);

CREATE TABLE vine_orders(
    or_id SERIAL PRIMARY KEY,
    inputemail VARCHAR(255),
    inputnames VARCHAR(255),
    inputqty VARCHAR(255),
    inputsum VARCHAR(255)
);

--
SELECT us_name, us_password FROM vine_user WHERE us_name = 'www';

