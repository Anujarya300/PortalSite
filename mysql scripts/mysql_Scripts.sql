--Create database
1. CREATE DATABASE IF NOT EXISTS AdPortal
--Create tables

1. CREATE TABLE adinfo (
        ad_id int AUTO_INCREMENT,
        AdTitle VARCHAR(500),
        Description TEXT,
        PhotosLinkCSV TEXT,
        AdType VARCHAR(50),
        Category VARCHAR(50),
        SubCategory VARCHAR(50),

        primary key (ad_id)
    )

2. CREATE TABLE userinfo (
        User_id int AUTO_INCREMENT,
        Name VARCHAR(100),
        Address VARCHAR(500),
        ContactNo real,
        EmailID VARCHAR(100),

        primary key (User_id)
    )

3. CREATE TABLE AdTable (
        id int AUTO_INCREMENT,
        ad_id int,
        DatePosted DATE,
        user_id int,

        primary key (id),
        
        FOREIGN KEY (ad_id) REFERENCES adinfo (ad_id),
        FOREIGN KEY (user_id) REFERENCES userinfo (user_id)
    )

