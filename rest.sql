CREATE DATABASE hotel;

CREATE TABLE Clients (
ClientID VARCHAR(255) PRIMARY KEY,
C_Name VARCHAR(255),
Gender VARCHAR(10)
);

CREATE TABLE Rooms (
RoomID VARCHAR(255) PRIMARY KEY,
RoomNo INT AUTO_INCREMENT UNIQUE,
Size VARCHAR(255),
Cost float(10,2)
);

CREATE TABLE Bookings (
BookingID VARCHAR(255) PRIMARY KEY,
CheckIN TIMESTAMP DEFAULT CURRENT_TIMESTAMP(),
CheckOUT DATETIME
);