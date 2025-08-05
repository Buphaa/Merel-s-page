drop database if exists Merel;
create database Merel;
use Merel;
CREATE TABLE Producto (
	idProducto INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(150) NOT NULL,
    descripcion VARCHAR(300) NULL DEFAULT NULL,
    precio FLOAT NOT NULL,
    stock INT NOT NULL,
    PRIMARY KEY (idProducto)
);

CREATE TABLE Usuario (
	idUsuario INT NOT NULL AUTO_INCREMENT,
	email VARCHAR(150) NOT NULL,
    contrasena VARCHAR(100) NOT NULL,
    PRIMARY KEY (idUsuario)
);

insert into Usuario (email, contrasena) values ('faherenit@gmail.com', 'caca');
