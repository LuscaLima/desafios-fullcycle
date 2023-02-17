USE dbase;

CREATE TABLE people(
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

INSERT INTO people (name) VALUES
('Ana Silva'),
('Maria Souza'),
('Lucas Oliveira'),
('Pedro Santos'),
('Fernanda Ferreira'),
('Roberto Costa'),
('Julia Vieira'),
('Gustavo Martins'),
('Luciana Pereira'),
('Carlos Alves');